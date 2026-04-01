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

      // Check actual page_content image columns in DB
      const imgRes = await pool.query(
        `SELECT sobre_hero_image_id, sobre_mission_image_id, sobre_team_image_id FROM page_content LIMIT 1`
      )
      results.pageContentImages = imgRes.rows[0] || 'no rows'

      // Check indexes on page_content
      const idxRes = await pool.query(
        `SELECT indexname, indexdef FROM pg_indexes WHERE tablename = 'page_content' ORDER BY indexname`
      )
      results.pageContentIndexes = idxRes.rows

      // Check FK constraints on page_content
      const fkRes = await pool.query(
        `SELECT conname, pg_get_constraintdef(oid) as def FROM pg_constraint WHERE conrelid = 'page_content'::regclass AND contype = 'f'`
      )
      results.pageContentFKs = fkRes.rows

      // Compare with Drizzle schema for page_content
      const drizzleSchema = (payload.db as any).tables?.page_content
      if (drizzleSchema) {
        const drizzleCols = Object.keys(drizzleSchema)
        results.drizzlePageContentCols = drizzleCols
      } else {
        results.drizzlePageContent = 'not found in tables'
      }
    } catch (e: any) {
      results.dbPool = { error: e.message }
    }

    // Check media table schema vs Drizzle expectation
    try {
      const pool = (payload.db as any).pool
      const mediaSchemaRes = await pool.query(
        `SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'media' ORDER BY ordinal_position`
      )
      results.mediaDbColumns = mediaSchemaRes.rows.map((r: any) => r.column_name)

      const drizzleMediaSchema = (payload.db as any).tables?.media
      if (drizzleMediaSchema) {
        results.mediaDrizzleColumns = Object.keys(drizzleMediaSchema)
      }

      // Find missing columns
      const dbCols = new Set(results.mediaDbColumns)
      const drizzleCols = results.mediaDrizzleColumns || []
      // Drizzle uses camelCase, DB uses snake_case - need to convert
      results.mediaMissingInDb = drizzleCols.filter((c: string) => {
        const snake = c.replace(/[A-Z]/g, (m: string) => '_' + m.toLowerCase())
        return !dbCols.has(snake) && !dbCols.has(c)
      })
    } catch (e: any) {
      results.mediaSchemaCheck = { error: e.message }
    }

    // Test R2/S3 connection
    try {
      const { S3Client, PutObjectCommand } = await import('@aws-sdk/client-s3')
      const r2Endpoint = process.env.R2_ENDPOINT || 'NOT SET'
      const r2Bucket = process.env.R2_BUCKET || 'NOT SET'
      const r2KeyId = process.env.R2_ACCESS_KEY_ID ? `${process.env.R2_ACCESS_KEY_ID.substring(0, 8)}...` : 'NOT SET'
      const r2Secret = process.env.R2_SECRET_ACCESS_KEY ? `${process.env.R2_SECRET_ACCESS_KEY.substring(0, 8)}...` : 'NOT SET'

      results.r2Config = { endpoint: r2Endpoint, bucket: r2Bucket, accessKeyId: r2KeyId, secretAccessKey: r2Secret }

      if (r2Endpoint !== 'NOT SET' && r2Bucket !== 'NOT SET') {
        const client = new S3Client({
          endpoint: r2Endpoint,
          credentials: {
            accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
            secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
          },
          region: 'auto',
          forcePathStyle: true,
        })
        const cmd = new PutObjectCommand({
          Bucket: r2Bucket,
          Key: '_test/connection-test.txt',
          Body: `test from server at ${new Date().toISOString()}`,
          ContentType: 'text/plain',
        })
        const putResult = await client.send(cmd)
        results.r2Connection = { ok: true, statusCode: putResult.$metadata.httpStatusCode }
      }
    } catch (e: any) {
      results.r2Connection = { error: e.message, name: e.name, stack: e.stack?.split('\n').slice(0, 3) }
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
