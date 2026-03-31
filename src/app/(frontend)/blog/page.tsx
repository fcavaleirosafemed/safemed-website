import { getPayload } from 'payload'
import config from '@payload-config'
import { BlogPageClient } from '@/components/pages/BlogPageClient'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

async function getContent() {
  try {
    const payload = await getPayload({ config })
    const [content, postsResult] = await Promise.all([
      payload.findGlobal({ slug: 'page-content' }),
      payload.find({
        collection: 'blog-posts',
        sort: '-publishedAt',
        limit: 20,
        where: { _status: { equals: 'published' } },
      }),
    ])
    return { content: content as any, posts: postsResult.docs }
  } catch {
    return { content: null, posts: [] }
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const { content } = await getContent()
  return {
    title: content?.blogHeroTitle || 'Blog — Safemed',
    description: content?.blogHeroDescription || 'Notícias e artigos sobre segurança e saúde no trabalho.',
  }
}

export default async function BlogPage() {
  const { content, posts } = await getContent()

  const articles = (posts as any[]).map((post: any) => ({
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
      heroTitle={content?.blogHeroTitle}
      heroDescription={content?.blogHeroDescription}
      articles={articles}
      ctaTitle={content?.blogCtaTitle}
      ctaText={content?.blogCtaText}
    />
  )
}
