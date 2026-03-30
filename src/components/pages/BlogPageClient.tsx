'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

function resolveImage(img: any, fallback: string): string {
  if (!img) return fallback
  if (typeof img === 'object' && img.url) return img.url
  if (typeof img === 'string') return img
  return fallback
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

interface Article {
  slug: string
  title: string
  excerpt?: string
  image?: any
  publishedAt?: string
  readTime?: string
  category?: string
}

export interface BlogPageProps {
  heroTitle?: string
  heroDescription?: string
  articles?: Article[]
  ctaTitle?: string
  ctaText?: string
}

export function BlogPageClient({
  heroTitle = 'Notícias e Artigos',
  heroDescription = 'Acompanhe as novidades da Safemed, eventos do setor e artigos sobre segurança e saúde no trabalho.',
  articles = [],
  ctaTitle = 'Fique a par das novidades',
  ctaText = 'Acompanhe-nos nas redes sociais para receber as últimas notícias sobre SST e as atualizações da plataforma Safemed.',
}: BlogPageProps) {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.removeProperty('opacity')
            el.classList.add('animate-fade-in-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    sectionsRef.current.forEach((el) => {
      if (el) { el.style.opacity = '0'; observer.observe(el) }
    })
    return () => observer.disconnect()
  }, [])

  const featuredArticle = articles[0]
  const remainingArticles = articles.slice(1)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
            <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">Blog</span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-display font-bold tracking-tight text-surface-950">{heroTitle}</h1>
            <p className="mt-6 text-lg text-surface-500 leading-relaxed">{heroDescription}</p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div ref={(el) => { sectionsRef.current[0] = el }}>
              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="group grid lg:grid-cols-2 gap-8 bg-white rounded-2xl border border-surface-200/80 overflow-hidden hover:border-safemed-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <Image src={resolveImage(featuredArticle.image, '/images/placeholder.jpg')} alt={featuredArticle.title} width={640} height={400} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  {featuredArticle.category && <span className="inline-flex w-fit px-3 py-1 bg-safemed-50 text-safemed-600 text-xs font-semibold rounded-full mb-4">{featuredArticle.category}</span>}
                  <h2 className="text-2xl lg:text-3xl font-display font-bold text-surface-950 group-hover:text-safemed-600 transition-colors">{featuredArticle.title}</h2>
                  <p className="mt-4 text-surface-500 leading-relaxed">{featuredArticle.excerpt}</p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-surface-400">
                    {featuredArticle.publishedAt && <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{formatDate(featuredArticle.publishedAt)}</span>}
                    {featuredArticle.readTime && <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featuredArticle.readTime}</span>}
                  </div>
                  <div className="mt-6"><span className="inline-flex items-center gap-1.5 text-sm font-semibold text-safemed-600 group-hover:gap-2.5 transition-all">Ler mais <ArrowRight className="w-4 h-4" /></span></div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      {remainingArticles.length > 0 && (
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {remainingArticles.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-white rounded-xl border border-surface-200/80 overflow-hidden hover:border-safemed-200 hover:shadow-lg transition-all duration-300"
                  ref={(el) => { sectionsRef.current[index + 1] = el as HTMLDivElement | null }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={resolveImage(article.image, '/images/placeholder.jpg')} alt={article.title} width={480} height={300} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    {article.category && <span className="inline-flex px-2.5 py-0.5 bg-safemed-50 text-safemed-600 text-xs font-semibold rounded-full mb-3">{article.category}</span>}
                    <h3 className="text-lg font-display font-bold text-surface-950 group-hover:text-safemed-600 transition-colors mb-2">{article.title}</h3>
                    <p className="text-surface-500 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-surface-400">
                      {article.publishedAt && <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(article.publishedAt)}</span>}
                      {article.readTime && <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>}
                    </div>
                    <div className="mt-4"><span className="inline-flex items-center gap-1.5 text-sm font-semibold text-safemed-600 group-hover:gap-2.5 transition-all">Ler mais <ArrowRight className="w-4 h-4" /></span></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-safemed-50/50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center" ref={(el) => { sectionsRef.current[6] = el }}>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">{ctaTitle}</h2>
          <p className="mt-4 text-lg text-surface-500 max-w-xl mx-auto">{ctaText}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="https://www.linkedin.com/company/safemed-solutions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-surface-900 text-white font-semibold rounded-full hover:bg-surface-800 transition-colors text-sm">LinkedIn <ArrowRight className="w-4 h-4" /></a>
            <a href="https://www.facebook.com/safemedSolutions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-surface-200 text-surface-700 font-semibold rounded-full hover:bg-surface-50 transition-colors text-sm">Facebook</a>
          </div>
        </div>
      </section>
    </>
  )
}
