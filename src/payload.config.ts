import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

// Collections
import { Users } from './collections/Users'
import { Pages } from './collections/Pages'
import { Services } from './collections/Services'
import { Industries } from './collections/Industries'
import { BlogPosts } from './collections/BlogPosts'
import { Media } from './collections/Media'
import { Testimonials } from './collections/Testimonials'
import { TeamMembers } from './collections/TeamMembers'
import { JobPositions } from './collections/JobPositions'
// import { Visitors } from './collections/Visitors' // TODO: re-enable after DB migration

// Globals
import { SiteSettings } from './globals/SiteSettings'
import { Navigation } from './globals/Navigation'
import { PageContent } from './globals/PageContent'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' — Safemed CMS',
    },
  },
  collections: [
    Users,
    Pages,
    Services,
    Industries,
    BlogPosts,
    Media,
    Testimonials,
    TeamMembers,
    JobPositions,
    // Visitors, // TODO: re-enable after DB migration
  ],
  globals: [
    SiteSettings,
    Navigation,
    PageContent,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'default-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    push: false,
  }),
  sharp,
  plugins: [
    seoPlugin({
      collections: ['pages', 'services', 'industries', 'blog-posts'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }: any) => `${doc?.title || ''} — Safemed`,
      generateDescription: ({ doc }: any) => doc?.excerpt || '',
    }),
  ],
})
