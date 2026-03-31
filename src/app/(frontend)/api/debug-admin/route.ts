import { getPayload } from 'payload'
import config from '@payload-config'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== 'Bearer seed-safemed-2024') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const results: Record<string, any> = {}

  try {
    const payload = await getPayload({ config })
    results.payloadInit = 'ok'

    // Test each global
    for (const globalSlug of ['site-settings', 'navigation', 'page-content']) {
      try {
        const data = await payload.findGlobal({ slug: globalSlug as any })
        results[`global:${globalSlug}`] = { ok: true, id: (data as any)?.id }
      } catch (e: any) {
        results[`global:${globalSlug}`] = { error: e.message, stack: e.stack?.split('\n').slice(0, 5) }
      }
    }

    // Test each collection
    for (const colSlug of ['users', 'pages', 'services', 'industries', 'blog-posts', 'media', 'testimonials', 'team-members', 'job-positions']) {
      try {
        const data = await payload.find({ collection: colSlug as any, limit: 1 })
        results[`collection:${colSlug}`] = { ok: true, totalDocs: data.totalDocs }
      } catch (e: any) {
        results[`collection:${colSlug}`] = { error: e.message, stack: e.stack?.split('\n').slice(0, 5) }
      }
    }

    // Test DB schema introspection (what Drizzle sees)
    const pool = (payload.db as any).pool
    try {
      const enumRes = await pool.query(
        `SELECT typname, enumlabel FROM pg_enum JOIN pg_type ON pg_enum.enumtypid = pg_type.oid ORDER BY typname, enumsortorder`
      )
      results.enums = enumRes.rows
    } catch (e: any) {
      results.enums = { error: e.message }
    }

    // Check Drizzle schema tables
    try {
      const drizzleTables = Object.keys((payload.db as any).tables || {})
      results.drizzleTables = drizzleTables
    } catch (e: any) {
      results.drizzleTables = { error: e.message }
    }

    // Test the admin by calling RootPage directly with different segment paths
    for (const segments of [[''], ['login'], ['collections', 'media']]) {
      const label = segments.join('/') || 'dashboard'
      try {
        const { RootPage } = await import('@payloadcms/next/views')
        const { importMap } = await import('@/app/(payload)/admin/importMap')
        const result = await RootPage({
          config,
          importMap,
          params: Promise.resolve({ segments }),
          searchParams: Promise.resolve({}),
        })
        results[`admin:${label}`] = { ok: true, type: typeof result }
      } catch (e: any) {
        // Check if it's a NEXT_REDIRECT (which is expected behavior)
        const isRedirect = e.message === 'NEXT_REDIRECT' || e.digest?.startsWith('NEXT_REDIRECT')
        results[`admin:${label}`] = {
          error: e.message,
          isRedirect,
          digest: (e as any).digest,
          cause: e.cause ? String(e.cause) : undefined,
          stack: e.stack?.split('\n').slice(0, 5),
        }
      }
    }

    // Check if the handleServerFunctions works
    try {
      const { handleServerFunctions } = await import('@payloadcms/next/layouts')
      results.handleServerFunctions = 'import ok'
    } catch (e: any) {
      results.handleServerFunctions = { error: e.message }
    }

    // Check DB connection pool status
    try {
      const pool = (payload.db as any).pool
      results.dbPool = {
        totalCount: pool.totalCount,
        idleCount: pool.idleCount,
        waitingCount: pool.waitingCount,
      }
    } catch (e: any) {
      results.dbPool = { error: e.message }
    }

    return NextResponse.json(results)
  } catch (e: any) {
    return NextResponse.json({
      payloadInit: 'FAILED',
      error: e.message,
      stack: e.stack?.split('\n').slice(0, 10)
    }, { status: 500 })
  }
}
