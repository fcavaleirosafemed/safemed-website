'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Heart,
  Lightbulb,
  Shield,
  Users,
  Zap,
  Globe,
  Target,
  CheckCircle2,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Lightbulb, Heart, Shield, Users, Zap, Globe, Target, Sparkles,
}

function getIcon(name: string): LucideIcon {
  return iconMap[name] || Lightbulb
}

function resolveImage(img: any, fallback: string): string {
  if (!img) return fallback
  if (typeof img === 'object' && img.url) return img.url
  if (typeof img === 'string') return img
  return fallback
}

interface Stat { value: string; label: string }
interface Value { icon?: string; title: string; description?: string }
interface Version {
  name: string
  description?: string
  features?: { text?: string }[]
  highlight?: boolean
}

export interface SobrePageProps {
  heroLabel?: string
  heroTitle?: string
  heroDescription?: string
  heroImage?: any
  missionTitle?: string
  missionText1?: string
  missionText2?: string
  missionImage?: any
  stats?: Stat[]
  valuesHeading?: string
  values?: Value[]
  versionsHeading?: string
  versionsSubheading?: string
  versions?: Version[]
  teamTitle?: string
  teamText1?: string
  teamText2?: string
  teamImage?: any
  ctaTitle?: string
  ctaText?: string
}

export function SobrePageClient({
  heroLabel = 'Sobre Nós',
  heroTitle = 'A Safemed Solutions',
  heroDescription = 'A Safemed Solutions é uma empresa jovem e inovadora, especialista em soluções SaaS de gestão de saúde, segurança e bem-estar no trabalho. Desenvolvemos tecnologia que transforma a forma como as organizações protegem os seus colaboradores.',
  heroImage,
  missionTitle = 'Tornar a SST simples, eficiente e acessível',
  missionText1 = 'A nossa missão é simplificar a gestão da segurança e saúde no trabalho através de tecnologia de ponta. Acreditamos que cada organização, independentemente da sua dimensão ou setor, merece ferramentas profissionais para proteger os seus colaboradores.',
  missionText2 = 'Desde prestadores de serviços externos até grandes grupos industriais, passando por centros hospitalares e instituições de ensino, o Safemed adapta-se à realidade de cada cliente.',
  missionImage,
  stats = [
    { value: '500+', label: 'Organizações' },
    { value: '300K+', label: 'Trabalhadores geridos' },
    { value: '15+', label: 'Anos de experiência' },
    { value: '99.9%', label: 'Uptime' },
  ],
  valuesHeading = 'O que nos define',
  values = [
    { icon: 'Lightbulb', title: 'Inovação', description: 'Investimos continuamente em investigação e desenvolvimento para manter a plataforma na vanguarda da tecnologia aplicada à SST.' },
    { icon: 'Heart', title: 'Compromisso', description: 'Cada cliente é um parceiro. Trabalhamos lado a lado para garantir que a solução responde às necessidades reais da organização.' },
    { icon: 'Shield', title: 'Segurança', description: 'A segurança dos dados é a base de tudo. RGPD, encriptação e controlos de acesso rigorosos em toda a plataforma.' },
    { icon: 'Zap', title: 'Simplicidade', description: 'Tecnologia complexa com uma experiência simples. Interfaces intuitivas que qualquer utilizador consegue dominar rapidamente.' },
  ],
  versionsHeading = 'Uma solução para cada necessidade',
  versionsSubheading = 'Três versões pensadas para diferentes realidades organizacionais.',
  versions = [
    { name: 'Safemed Lite', description: 'Versão essencial para pequenas e médias empresas que necessitam de gerir os processos básicos de saúde e segurança no trabalho.', features: [{ text: 'Saúde no Trabalho' }, { text: 'Fichas de aptidão' }, { text: 'Relatório Único' }, { text: 'Gestão de colaboradores' }, { text: 'Portal MySafemed' }], highlight: false },
    { name: 'Safemed Pro', description: 'Solução completa para organizações que precisam de gestão integrada de todos os processos de SST com módulos avançados.', features: [{ text: 'Tudo do Lite' }, { text: 'Segurança no Trabalho' }, { text: 'Acidentes de Trabalho' }, { text: 'Gestão de EPI' }, { text: 'Produtos Químicos' }, { text: 'EasyBooking' }, { text: 'Kube Analytics' }], highlight: true },
    { name: 'Gestão Interna', description: 'Para organizações com serviços internos de SST que necessitam de autonomia total na gestão dos seus processos.', features: [{ text: 'Todos os módulos Pro' }, { text: 'Configuração autónoma' }, { text: 'Integração com RH' }, { text: 'Multi-estabelecimento' }, { text: 'Relatórios personalizados' }], highlight: false },
  ],
  teamTitle = 'Pessoas que fazem a diferença',
  teamText1 = 'A equipa Safemed é composta por profissionais apaixonados por tecnologia e pela segurança no trabalho. Engenheiros, designers, especialistas em SST e gestores de projeto que trabalham juntos para criar a melhor plataforma do mercado.',
  teamText2 = 'Sediados no Porto, servimos clientes em todo o território nacional e contamos com parceiro na Suíça para o mercado internacional.',
  teamImage,
  ctaTitle = 'Quer conhecer melhor o Safemed?',
  ctaText = 'Agende uma demonstração e descubra como a nossa plataforma pode transformar a gestão de SST na sua organização.',
}: SobrePageProps) {
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
      if (el) {
        el.style.opacity = '0'
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  const heroImgSrc = resolveImage(heroImage, '/images/about/about-team.jpg')
  const missionImgSrc = resolveImage(missionImage, '/images/about/about-office.jpg')
  const teamImgSrc = resolveImage(teamImage, '/images/about/about-team-meeting.jpg')

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in-up">
              <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
                {heroLabel}
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-display font-bold tracking-tight text-surface-950">
                {heroTitle}
              </h1>
              <p className="mt-6 text-lg text-surface-500 leading-relaxed max-w-lg">
                {heroDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface-900 text-white font-semibold rounded-full hover:bg-surface-800 transition-colors"
                >
                  Fale Connosco
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/carreiras"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-surface-200 text-surface-700 font-semibold rounded-full hover:bg-surface-50 transition-colors"
                >
                  Junte-se a Nós
                </Link>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={heroImgSrc}
                  alt="Equipa Safemed"
                  width={640}
                  height={427}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-safemed-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="grid lg:grid-cols-2 gap-16 items-center"
            ref={(el) => { sectionsRef.current[0] = el }}
          >
            <div>
              <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
                Missão
              </span>
              <h2 className="mt-3 text-3xl font-display font-bold tracking-tight text-surface-950">
                {missionTitle}
              </h2>
              <p className="mt-4 text-surface-600 leading-relaxed">
                {missionText1}
              </p>
              <p className="mt-4 text-surface-600 leading-relaxed">
                {missionText2}
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={missionImgSrc}
                alt="Escritório Safemed no Porto"
                width={640}
                height={427}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          ref={(el) => { sectionsRef.current[1] = el }}
        >
          <div className="bg-surface-900 rounded-2xl p-10 lg:p-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-display font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-surface-200/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="text-center max-w-2xl mx-auto mb-16"
            ref={(el) => { sectionsRef.current[2] = el }}
          >
            <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
              Valores
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">
              {valuesHeading}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = getIcon(value.icon || 'Lightbulb')
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-xl border border-surface-200/80 p-8 hover:border-safemed-200 hover:shadow-lg transition-all duration-300"
                  ref={(el) => { sectionsRef.current[index + 3] = el }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-safemed-50 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-safemed-600" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-surface-950 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-surface-500 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Versions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="text-center max-w-2xl mx-auto mb-16"
            ref={(el) => { sectionsRef.current[7] = el }}
          >
            <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
              Versões
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">
              {versionsHeading}
            </h2>
            <p className="mt-4 text-lg text-surface-500">
              {versionsSubheading}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {versions.map((version, index) => (
              <div
                key={version.name}
                className={`relative rounded-xl border p-8 transition-all duration-300 ${
                  version.highlight
                    ? 'border-safemed-300 bg-safemed-50/30 shadow-lg'
                    : 'border-surface-200/80 bg-white hover:border-safemed-200 hover:shadow-lg'
                }`}
                ref={(el) => { sectionsRef.current[index + 8] = el }}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {version.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-safemed-600 text-white text-xs font-semibold rounded-full">
                      <Sparkles className="w-3 h-3" />
                      Mais Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-display font-bold text-surface-950 mb-3">
                  {version.name}
                </h3>
                <p className="text-surface-500 text-sm leading-relaxed mb-6">
                  {version.description}
                </p>
                <div className="space-y-3">
                  {(version.features || []).map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-safemed-600 shrink-0" />
                      <span className="text-sm text-surface-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/contacto"
                    className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 font-semibold rounded-xl transition-colors text-sm ${
                      version.highlight
                        ? 'bg-surface-900 text-white hover:bg-surface-800'
                        : 'bg-surface-100 text-surface-700 hover:bg-surface-200'
                    }`}
                  >
                    Saber Mais
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image */}
      <section className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="grid lg:grid-cols-2 gap-16 items-center"
            ref={(el) => { sectionsRef.current[11] = el }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={teamImgSrc}
                alt="Equipa Safemed em reunião"
                width={640}
                height={427}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
                Equipa
              </span>
              <h2 className="mt-3 text-3xl font-display font-bold tracking-tight text-surface-950">
                {teamTitle}
              </h2>
              <p className="mt-4 text-surface-600 leading-relaxed">
                {teamText1}
              </p>
              <p className="mt-4 text-surface-600 leading-relaxed">
                {teamText2}
              </p>
              <div className="mt-8">
                <Link
                  href="/carreiras"
                  className="inline-flex items-center gap-2 text-safemed-600 font-semibold hover:gap-3 transition-all"
                >
                  Ver oportunidades de carreira
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div
          className="max-w-3xl mx-auto px-6 lg:px-8 text-center"
          ref={(el) => { sectionsRef.current[12] = el }}
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">
            {ctaTitle}
          </h2>
          <p className="mt-4 text-lg text-surface-500 max-w-xl mx-auto">
            {ctaText}
          </p>
          <div className="mt-8">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface-900 text-white font-semibold rounded-full hover:bg-surface-800 transition-colors"
            >
              Pedir Demonstração
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
