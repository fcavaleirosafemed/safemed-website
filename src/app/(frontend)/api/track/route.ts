import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Visitor tracking API — our own "Snitcher".
 *
 * POST /api/track
 * Body: { visitorId, path, title, referrer, timeOnPage? }
 *
 * - Creates or updates visitor record
 * - Resolves IP → company via ipinfo.io (cached per IP)
 * - Stores page views, metrics, device info
 * - Respects cookie consent (only called when necessary cookies accepted)
 */

// In-memory IP cache to avoid hitting ipinfo.io on every request
const ipCache = new Map<string, { data: any; expires: number }>()
const IP_CACHE_TTL = 1000 * 60 * 60 * 24 // 24 hours

async function lookupIP(ip: string): Promise<any> {
  // Check cache
  const cached = ipCache.get(ip)
  if (cached && cached.expires > Date.now()) return cached.data

  // Skip private/local IPs
  if (
    ip === '127.0.0.1' ||
    ip === '::1' ||
    ip.startsWith('192.168.') ||
    ip.startsWith('10.') ||
    ip.startsWith('172.')
  ) {
    return { org: 'Local', city: 'Local', region: 'Local', country: 'Local' }
  }

  try {
    const token = process.env.IPINFO_TOKEN
    const url = token
      ? `https://ipinfo.io/${ip}?token=${token}`
      : `https://ipinfo.io/${ip}/json`

    const res = await fetch(url, { signal: AbortSignal.timeout(3000) })
    if (!res.ok) return null

    const data = await res.json()
    ipCache.set(ip, { data, expires: Date.now() + IP_CACHE_TTL })
    return data
  } catch {
    return null
  }
}

function getClientIP(req: NextRequest): string {
  // Railway / reverse proxy headers
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  const realIp = req.headers.get('x-real-ip')
  if (realIp) return realIp
  return '127.0.0.1'
}

function detectDevice(ua: string): 'desktop' | 'mobile' | 'tablet' {
  const lower = ua.toLowerCase()
  if (/tablet|ipad|playbook|silk/i.test(lower)) return 'tablet'
  if (/mobile|iphone|ipod|android.*mobile|opera m(ob|in)i/i.test(lower)) return 'mobile'
  return 'desktop'
}

function extractUTM(referrer: string | null): {
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
} {
  if (!referrer) return {}
  try {
    const url = new URL(referrer)
    return {
      utmSource: url.searchParams.get('utm_source') || undefined,
      utmMedium: url.searchParams.get('utm_medium') || undefined,
      utmCampaign: url.searchParams.get('utm_campaign') || undefined,
    }
  } catch {
    return {}
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { visitorId, path, title, referrer, timeOnPage } = body

    if (!visitorId || !path) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const ip = getClientIP(req)
    const userAgent = req.headers.get('user-agent') || ''
    const device = detectDevice(userAgent)
    const now = new Date().toISOString()

    const payload = await getPayload({ config })

    // Check if visitor already exists
    const existing = await payload.find({
      collection: 'visitors',
      where: { visitorId: { equals: visitorId } },
      limit: 1,
    })

    const pageView = {
      path,
      title: title || '',
      viewedAt: now,
      timeOnPage: timeOnPage || 0,
      referrer: referrer || '',
    }

    if (existing.docs.length > 0) {
      // ─── Update existing visitor ───
      const visitor = existing.docs[0]
      const currentPageViews = (visitor.pageViews || []) as any[]

      // Keep last 50 page views
      const updatedPageViews = [...currentPageViews, pageView].slice(-50)

      // Update time on previous page if timeOnPage sent
      const updateData: Record<string, any> = {
        ip,
        userAgent,
        device,
        lastSeenAt: now,
        totalVisits: ((visitor.totalVisits as number) || 0) + 1,
        pagesViewed: ((visitor.pagesViewed as number) || 0) + 1,
        totalTimeSeconds:
          ((visitor.totalTimeSeconds as number) || 0) + (timeOnPage || 0),
        pageViews: updatedPageViews,
      }

      // Re-lookup IP if it changed
      if (ip !== visitor.ip) {
        const ipData = await lookupIP(ip)
        if (ipData) {
          updateData.ipData = ipData
          if (ipData.org) updateData.company = ipData.org.replace(/^AS\d+\s*/, '')
          if (ipData.hostname) updateData.domain = ipData.hostname
          if (ipData.country) updateData.country = ipData.country
          if (ipData.region) updateData.region = ipData.region
          if (ipData.city) updateData.city = ipData.city
        }
      }

      await payload.update({
        collection: 'visitors',
        id: visitor.id,
        data: updateData,
      })

      return NextResponse.json({ ok: true, action: 'updated' })
    }

    // ─── Create new visitor ───
    const ipData = await lookupIP(ip)
    const utm = extractUTM(referrer)

    const newVisitor: Record<string, any> = {
      visitorId,
      ip,
      userAgent,
      device,
      firstSeenAt: now,
      lastSeenAt: now,
      totalVisits: 1,
      pagesViewed: 1,
      totalTimeSeconds: 0,
      referrer: referrer || '',
      pageViews: [pageView],
      leadStatus: 'new',
      ...utm,
    }

    if (ipData) {
      newVisitor.ipData = ipData
      if (ipData.org) newVisitor.company = ipData.org.replace(/^AS\d+\s*/, '')
      if (ipData.hostname) newVisitor.domain = ipData.hostname
      if (ipData.country) newVisitor.country = ipData.country
      if (ipData.region) newVisitor.region = ipData.region
      if (ipData.city) newVisitor.city = ipData.city
    }

    await payload.create({
      collection: 'visitors',
      data: newVisitor,
    })

    return NextResponse.json({ ok: true, action: 'created' })
  } catch (error) {
    console.error('[Track API]', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

// GET /api/track/status — health check
export async function GET() {
  return NextResponse.json({ status: 'active', service: 'safemed-tracker' })
}
