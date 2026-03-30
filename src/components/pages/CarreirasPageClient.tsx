'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Lightbulb,
  Heart,
  Users,
  Sparkles,
  MapPin,
  Clock,
  BriefcaseBusiness,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Lightbulb, Heart, Users, Sparkles, MapPin, Clock, BriefcaseBusiness,
}
function getIcon(name: string): LucideIcon {
  return iconMap[name] || Sparkles
}
function resolveImage(img: any, fallback: string): string {
  if (!img) return fallback
  if (typeof img === 'object' && img.url) return img.url
  if (typeof img === 'string') return img
  return fallback
}

interface CultureValue { icon?: string; title: string; description?: string }
interface Position {
  title: string
  department?: string
  location?: string
  type?: string
  description?: string
  responsibilities?: { text?: string }[]
  requirements?: { text?: string }[]
}

export interface CarreirasPageProps {
  heroTitle?: string
  heroDescription?: string
  heroImage?: any
  cultureHeading?: string
  cultureSubheading?: string
  cultureValues?: CultureValue[]
  benefitsTitle?: string
  benefitsImage?: any
  benefits?: { text?: string }[]
  positionsHeading?: string
  positions?: Position[]
  ctaTitle?: string
  ctaText?: string
  ctaEmail?: string
}

export function CarreirasPageClient({
  heroTitle = 'Junte-se à nossa equipa!',
  heroDescription = 'Estamos a construir o futuro da segurança e saúde no trabalho. Se é curioso, inteligente e inovador, queremos conhecê-lo.',
  heroImage,
  cultureHeading = 'O que nos move',
  cultureSubheading = 'Um ambiente de simplicidade, lealdade e abertura onde as boas ideias vêm de qualquer lugar.',
  cultureValues = [
    { icon: 'Lightbulb', title: 'Mentes Curiosas', description: 'Valorizamos a curiosidade e a vontade de aprender. Cada dia é uma oportunidade para explorar novas ideias e abordagens.' },
    { icon: 'Sparkles', title: 'Inovação Inteligente', description: 'Não inovamos por inovar. Cada feature, cada decisão técnica tem um propósito claro: resolver problemas reais dos nossos clientes.' },
    { icon: 'Heart', title: 'Lealdade e Abertura', description: 'Um ambiente de simplicidade, lealdade e abertura. Comunicamos de forma transparente e tratamo-nos como parceiros, não como números.' },
    { icon: 'Users', title: 'Equipa Unida', description: 'Trabalhamos juntos, crescemos juntos. O sucesso de um é o sucesso de todos. Celebramos as vitórias e aprendemos com os desafios.' },
  ],
  benefitsTitle = 'Porque trabalhar na Safemed',
  benefitsImage,
  benefits = [
    { text: 'Equipa pequena com grande impacto' },
    { text: 'Tecnologia moderna (React, Next.js, TypeScript)' },
    { text: 'Flexibilidade e autonomia no trabalho' },
    { text: 'Escritório no centro do Porto' },
    { text: 'Ambiente informal e colaborativo' },
    { text: 'Formação contínua e crescimento profissional' },
    { text: 'Participação ativa nas decisões de produto' },
  ],
  positionsHeading = 'Posições disponíveis',
  positions = [],
  ctaTitle = 'Não encontrou a vaga ideal?',
  ctaText = 'Envie-nos a sua candidatura espontânea. Estamos sempre atentos a talento excecional.',
  ctaEmail = 'info@safemed.solutions',
}: CarreirasPageProps) {
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

  const heroImgSrc = resolveImage(heroImage, '/images/about/about-team-meeting.jpg')
  const benefitsImgSrc = resolveImage(benefitsImage, '/images/about/about-office-2.jpg')

  const typeLabels: Record<string, string> = {
    'full-time': 'Full-time',
    'part-time': 'Part-time',
    'contract': 'Contrato',
    'internship': 'Estágio',
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in-up">
              <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">Carreiras</span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-display font-bold tracking-tight text-surface-950">{heroTitle}</h1>
              <p className="mt-6 text-lg text-surface-500 leading-relaxed max-w-lg">{heroDescription}</p>
              <div className="mt-8">
                <a href="#vagas" className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface-900 text-white font-semibold rounded-full hover:bg-surface-800 transition-colors">
                  Ver Vagas Abertas <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image src={heroImgSrc} alt="Equipa Safemed" width={640} height={427} className="w-full h-auto object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16" ref={(el) => { sectionsRef.current[0] = el }}>
            <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">Cultura</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">{cultureHeading}</h2>
            <p className="mt-4 text-lg text-surface-500">{cultureSubheading}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => {
              const Icon = getIcon(value.icon || 'Sparkles')
              return (
                <div key={value.title} className="bg-white rounded-xl border border-surface-200/80 p-8 hover:border-safemed-200 hover:shadow-lg transition-all duration-300" ref={(el) => { sectionsRef.current[index + 1] = el }} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 rounded-xl bg-safemed-50 flex items-center justify-center mb-5"><Icon className="w-6 h-6 text-safemed-600" /></div>
                  <h3 className="text-lg font-display font-bold text-surface-950 mb-3">{value.title}</h3>
                  <p className="text-surface-500 leading-relaxed text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={(el) => { sectionsRef.current[5] = el }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image src={benefitsImgSrc} alt="Escritório Safemed" width={640} height={427} className="w-full h-auto object-cover" />
            </div>
            <div>
              <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">Benefícios</span>
              <h2 className="mt-3 text-3xl font-display font-bold tracking-tight text-surface-950">{benefitsTitle}</h2>
              <div className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center shrink-0 mt-0.5"><Sparkles className="w-3.5 h-3.5 text-accent-500" /></div>
                    <span className="text-surface-700">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      {positions.length > 0 && (
        <section id="vagas" className="py-24 bg-surface-50 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16" ref={(el) => { sectionsRef.current[6] = el }}>
              <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">Vagas Abertas</span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">{positionsHeading}</h2>
            </div>
            <div className="space-y-8 max-w-4xl mx-auto">
              {positions.map((position, index) => (
                <div key={position.title} className="bg-white rounded-xl border border-surface-200/80 overflow-hidden hover:border-safemed-200 hover:shadow-lg transition-all duration-300" ref={(el) => { sectionsRef.current[index + 7] = el }} style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-display font-bold text-surface-950">{position.title}</h3>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          {position.department && <span className="inline-flex items-center gap-1.5 text-sm text-surface-500"><BriefcaseBusiness className="w-3.5 h-3.5" />{position.department}</span>}
                          {position.location && <span className="inline-flex items-center gap-1.5 text-sm text-surface-500"><MapPin className="w-3.5 h-3.5" />{position.location}</span>}
                          {position.type && <span className="inline-flex items-center gap-1.5 text-sm text-surface-500"><Clock className="w-3.5 h-3.5" />{typeLabels[position.type] || position.type}</span>}
                        </div>
                      </div>
                    </div>
                    <p className="text-surface-600 leading-relaxed mb-6">{position.description}</p>
                    <div className="grid md:grid-cols-2 gap-8">
                      {position.responsibilities && position.responsibilities.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-surface-900 mb-3 uppercase tracking-wide">Responsabilidades</h4>
                          <ul className="space-y-2">
                            {position.responsibilities.map((r) => (
                              <li key={r.text} className="flex items-start gap-2 text-sm text-surface-600"><span className="w-1.5 h-1.5 rounded-full bg-safemed-400 shrink-0 mt-1.5" />{r.text}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {position.requirements && position.requirements.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-surface-900 mb-3 uppercase tracking-wide">Requisitos</h4>
                          <ul className="space-y-2">
                            {position.requirements.map((r) => (
                              <li key={r.text} className="flex items-start gap-2 text-sm text-surface-600"><span className="w-1.5 h-1.5 rounded-full bg-safemed-400 shrink-0 mt-1.5" />{r.text}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="mt-8 pt-6 border-t border-surface-100">
                      <Link href="/contacto" className="inline-flex items-center gap-2 px-6 py-3 bg-surface-900 text-white font-semibold rounded-xl hover:bg-surface-800 transition-colors text-sm">
                        Candidatar-me <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Spontaneous CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center" ref={(el) => { sectionsRef.current[9] = el }}>
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">{ctaTitle}</h2>
          <p className="mt-4 text-lg text-surface-500 max-w-xl mx-auto">{ctaText}</p>
          <div className="mt-8">
            <a href={`mailto:${ctaEmail}?subject=Candidatura%20Espontânea`} className="inline-flex items-center gap-2 px-8 py-4 bg-surface-900 text-white font-semibold rounded-full hover:bg-surface-800 transition-colors">
              Enviar CV <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
