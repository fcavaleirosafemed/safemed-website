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
    results.payloadVersion = (payload as any).version || 'unknown'

    // Check dashboard config
    const dashboardConfig = payload.config.admin?.components?.views?.dashboard
    results.dashboardConfig = dashboardConfig ? {
      Component: dashboardConfig.Component,
      hasComponent: !!dashboardConfig.Component,
    } : 'not configured'

    // Check the admin.dashboard (widgets)
    const dashboardWidgets = payload.config.admin?.dashboard
    results.dashboardWidgets = dashboardWidgets ? {
      widgetCount: dashboardWidgets.widgets?.length || 0,
      widgetSlugs: dashboardWidgets.widgets?.map((w: any) => w.slug) || [],
    } : 'not configured'

    // Check importMap
    const importMapKeys = Object.keys(payload.importMap || {})
    results.importMapKeys = importMapKeys
    results.hasDashboardInImportMap = importMapKeys.some(k => k.toLowerCase().includes('dashboard'))

    // Test each global
    for (const globalSlug of ['site-settings', 'navigation', 'page-content']) {
      try {
        const data = await payload.findGlobal({ slug: globalSlug as any })
        results[`global:${globalSlug}`] = { ok: true, id: (data as any)?.id }
      } catch (e: any) {
        results[`global:${globalSlug}`] = { error: e.message }
      }
    }

    // Test each collection
    for (const colSlug of ['users', 'pages', 'services', 'industries', 'blog-posts', 'media', 'testimonials', 'team-members', 'job-positions']) {
      try {
        const data = await payload.find({ collection: colSlug as any, limit: 1 })
        results[`collection:${colSlug}`] = { ok: true, totalDocs: data.totalDocs }
      } catch (e: any) {
        results[`collection:${colSlug}`] = { error: e.message }
      }
    }

    // Test payload-locked-documents (used by CollectionCards)
    try {
      const lockedDocs = await payload.find({
        collection: 'payload-locked-documents' as any,
        depth: 1,
        pagination: false,
        select: { globalSlug: true, updatedAt: true, user: true },
        where: { globalSlug: { exists: true } },
      })
      results['locked-documents'] = { ok: true, totalDocs: lockedDocs.totalDocs }
    } catch (e: any) {
      results['locked-documents'] = { error: e.message, stack: e.stack?.split('\n').slice(0, 3) }
    }

    // Test getAccessResults (used by CollectionCards)
    try {
      const { getAccessResults } = await import('payload')
      // We can't call this without a proper req, but we can check it exists
      results.getAccessResults = 'import ok'
    } catch (e: any) {
      results.getAccessResults = { error: e.message }
    }

    // Check DB pool status
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

    // Try to render the dashboard view
    try {
      const { RootPage } = await import('@payloadcms/next/views')
      const { importMap } = await import('@/app/(payload)/admin/importMap')
      const result = await RootPage({
        config,
        importMap,
        params: Promise.resolve({ segments: [''] }),
        searchParams: Promise.resolve({}),
      })
      results['admin:render'] = { ok: true, type: typeof result }
    } catch (e: any) {
      const isRedirect = e.message === 'NEXT_REDIRECT' || e.digest?.startsWith('NEXT_REDIRECT')
      results['admin:render'] = {
        error: e.message,
        isRedirect,
        digest: (e as any).digest,
        stack: e.stack?.split('\n').slice(0, 5),
      }
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
