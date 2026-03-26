'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const articles = [
  {
    slug: 'exporh-2025',
    title: 'Safemed na ExpoRH 2025',
    excerpt: 'Estivemos presentes na ExpoRH 2025, o maior evento de Recursos Humanos em Portugal. Apresentamos as novidades da plataforma e as novas funcionalidades de IA aplicada a SST.',
    image: '/images/news-exporh-2025.jpg',
    date: '2025-03-15',
    readTime: '3 min',
    category: 'Eventos',
  },
  {
    slug: 'porto-rh-meeting-2024',
    title: 'Porto RH Meeting 2024',
    excerpt: 'A Safemed marcou presenca no Porto RH Meeting 2024, onde partilhou a sua visao sobre o futuro da gestao de saude e seguranca no trabalho com recurso a tecnologia.',
    image: '/images/news-porto-rh-meeting-2024.jpg',
    date: '2024-10-22',
    readTime: '4 min',
    category: 'Eventos',
  },
  {
    slug: 'parceria-suica-lausanne',
    title: 'Expansao Internacional: Parceria na Suica',
    excerpt: 'A Safemed reforça a sua presenca internacional com uma parceria estrategica na Suica, abrindo portas ao mercado europeu de SST atraves do parceiro BesTeam.',
    image: '/images/news-lausanne.png',
    date: '2024-09-10',
    readTime: '5 min',
    category: 'Empresa',
  },
  {
    slug: 'vertentes-seguranca',
    title: 'As Vertentes da Seguranca no Trabalho',
    excerpt: 'Uma analise das diferentes vertentes da seguranca no trabalho e como uma abordagem integrada, suportada por tecnologia, pode fazer a diferenca na prevencao de acidentes.',
    image: '/images/news-vertentes-seguranca.jpg',
    date: '2024-07-18',
    readTime: '6 min',
    category: 'Artigos',
  },
  {
    slug: 'safemed-rh-digital',
    title: 'A Transformacao Digital dos RH e a SST',
    excerpt: 'Como a transformacao digital dos recursos humanos esta a impactar a gestao da seguranca e saude no trabalho, e porque as empresas devem investir em ferramentas digitais.',
    image: '/images/news-safemed-rh.png',
    date: '2024-05-02',
    readTime: '5 min',
    category: 'Artigos',
  },
]

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPage() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionsRef.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0'
        observer.observe(el)
      }
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
            <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
              Blog
            </span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-display font-bold tracking-tight text-surface-950">
              Noticias e Artigos
            </h1>
            <p className="mt-6 text-lg text-surface-500 leading-relaxed">
              Acompanhe as novidades da Safemed, eventos do setor e artigos sobre seguranca e saude no trabalho.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            ref={(el) => { sectionsRef.current[0] = el }}
          >
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group grid lg:grid-cols-2 gap-8 bg-white rounded-2xl border border-surface-200/80 overflow-hidden hover:border-safemed-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  width={640}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="inline-flex w-fit px-3 py-1 bg-safemed-50 text-safemed-600 text-xs font-semibold rounded-full mb-4">
                  {featuredArticle.category}
                </span>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-surface-950 group-hover:text-safemed-600 transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="mt-4 text-surface-500 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-sm text-surface-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(featuredArticle.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-safemed-600 group-hover:gap-2.5 transition-all">
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {remainingArticles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-xl border border-surface-200/80 overflow-hidden hover:border-safemed-200 hover:shadow-lg transition-all duration-300"
                ref={(el) => { sectionsRef.current[index + 1] = el as HTMLDivElement | null }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={480}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex px-2.5 py-0.5 bg-safemed-50 text-safemed-600 text-xs font-semibold rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-display font-bold text-surface-950 group-hover:text-safemed-600 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-surface-500 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-surface-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-safemed-600 group-hover:gap-2.5 transition-all">
                      Ler mais
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-safemed-50/50">
        <div
          className="max-w-3xl mx-auto px-6 lg:px-8 text-center"
          ref={(el) => { sectionsRef.current[6] = el }}
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">
            Fique a par das novidades
          </h2>
          <p className="mt-4 text-lg text-surface-500 max-w-xl mx-auto">
            Acompanhe-nos nas redes sociais para receber as ultimas noticias sobre SST e as atualizacoes da plataforma Safemed.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/safemed-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface-900 text-white font-semibold rounded-full hover:bg-surface-800 transition-colors text-sm"
            >
              LinkedIn
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/safemedSolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-surface-200 text-surface-700 font-semibold rounded-full hover:bg-surface-50 transition-colors text-sm"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
