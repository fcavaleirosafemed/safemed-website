import { getPayload } from 'payload'
import config from '@payload-config'
import { BlogPageClient } from '@/components/pages/BlogPageClient'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const content = await payload.findGlobal({ slug: 'page-content' }) as any
  return {
    title: content?.blogHeroTitle || 'Blog — Safemed',
    description: content?.blogHeroDescription || 'Notícias e artigos sobre segurança e saúde no trabalho.',
  }
}

export default async function BlogPage() {
  const payload = await getPayload({ config })
  const [content, postsResult] = await Promise.all([
    payload.findGlobal({ slug: 'page-content' }),
    payload.find({
      collection: 'blog-posts',
      sort: '-publishedAt',
      limit: 20,
      where: { _status: { equals: 'published' } },
    }),
  ]) as [any, any]

  const articles = postsResult.docs.map((post: any) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    image: post.featuredImage,
    publishedAt: post.publishedAt,
    readTime: post.readTime,
    category: post.category,
  }))

  return (
    <BlogPageClient
      heroTitle={(content as any)?.blogHeroTitle}
      heroDescription={(content as any)?.blogHeroDescription}
      articles={articles}
      ctaTitle={(content as any)?.blogCtaTitle}
      ctaText={(content as any)?.blogCtaText}
    />
  )
}
