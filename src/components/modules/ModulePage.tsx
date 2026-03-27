'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  ClipboardCheck,
  CalendarClock,
  CalendarDays,
  ShieldAlert,
  History,
  PenTool,
  MessageSquare,
  Clock,
  ClipboardList,
  MapPin,
  FileBarChart,
  Bell,
  Paperclip,
  HardHat,
  AlertTriangle,
  Shield,
  FileWarning,
  Pencil,
  FileSearch,
  Link2,
  ScanSearch,
  BellRing,
  Recycle,
  FlaskConical,
  Users,
  UserCircle,
  MessageCircle,
  Eye,
  CalendarCheck,
  Activity,
  Route,
  BarChart3,
  CalendarRange,
  Microscope,
  Plug,
  SlidersHorizontal,
  FormInput,
  Send,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  FileText,
  ClipboardCheck,
  CalendarClock,
  CalendarDays,
  ShieldAlert,
  History,
  PenTool,
  MessageSquare,
  Clock,
  ClipboardList,
  MapPin,
  FileBarChart,
  Bell,
  Paperclip,
  HardHat,
  AlertTriangle,
  Shield,
  FileWarning,
  Pencil,
  FileSearch,
  Link2,
  ScanSearch,
  BellRing,
  Recycle,
  FlaskConical,
  Users,
  UserCircle,
  MessageCircle,
  Eye,
  CalendarCheck,
  Activity,
  Route,
  BarChart3,
  CalendarRange,
  Microscope,
  Plug,
  SlidersHorizontal,
  FormInput,
  Send,
}

export interface ModuleFeature {
  icon: string
  title: string
  description: string
}

export interface ModuleHighlight {
  heading: string
  text: string
  bullets?: string[]
  stats?: { value: string; label: string }[]
}

export interface ModulePageProps {
  title: string
  subtitle: string
  description: string
  heroImage?: string
  heroImageAlt?: string
  heroIcon?: string
  features: ModuleFeature[]
  featuresHeading: string
  featuresSubheading: string
  highlight?: ModuleHighlight
  additionalBenefits?: string[]
  showCta?: boolean
  label?: string
  backHref?: string
  backLabel?: string
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    const children = ref.current?.querySelectorAll('[data-reveal]')
    children?.forEach((child) => {
      ;(child as HTMLElement).style.opacity = '0'
      observer.observe(child)
    })
    return () => observer.disconnect()
  }, [])
  return ref
}

function getIcon(name: string): LucideIcon {
  return iconMap[name] || FileText
}

export function ModulePage({
  title,
  subtitle,
  description,
  heroImage,
  heroImageAlt,
  heroIcon,
  features,
  featuresHeading,
  featuresSubheading,
  highlight,
  additionalBenefits,
  showCta = true,
  label = 'Módulo',
  backHref = '/modulos',
  backLabel = 'Todos os módulos',
}: ModulePageProps) {
  const revealRef = useScrollReveal()
  const gridCols = features.length >= 5 ? 'lg:grid-cols-3' : ''
  const gridMax = features.length < 5 ? 'max-w-4xl mx-auto' : ''
  const HeroIcon = heroIcon ? getIcon(heroIcon) : null

  return (
    <div ref={revealRef}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-safemed-50 via-white to-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 70% 30%, rgba(28,128,174,0.08), transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-safemed-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div data-reveal>
              <span className="inline-block text-sm font-semibold text-safemed-600 tracking-wide uppercase mb-4">
                {label}
              </span>
              <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-surface-950 mb-6">
                {title}
              </h1>
              <p className="text-lg lg:text-xl text-surface-800/70 leading-relaxed mb-8 max-w-xl">
                {subtitle}
              </p>
              <p className="text-base text-surface-800/60 leading-relaxed mb-10 max-w-xl">
                {description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-safemed-600 text-white text-sm font-semibold rounded-full hover:bg-safemed-700 transition-colors shadow-lg shadow-safemed-600/20"
                >
                  Pedir Demonstração
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div data-reveal className="relative" style={{ animationDelay: '0.2s' }}>
              {heroImage ? (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-safemed-600/10">
                  <Image
                    src={heroImage}
                    alt={heroImageAlt || `${title} - Safemed`}
                    width={640}
                    height={420}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              ) : HeroIcon ? (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-safemed-600/10 bg-gradient-to-br from-safemed-100 to-safemed-50 flex items-center justify-center p-16 aspect-[4/3]">
                  <HeroIcon className="w-32 h-32 text-safemed-600/30" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16" data-reveal>
            <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
              Funcionalidades
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">
              {featuresHeading}
            </h2>
            <p className="mt-4 text-lg text-surface-800/60 max-w-2xl mx-auto">
              {featuresSubheading}
            </p>
          </div>

          <div className={`grid sm:grid-cols-2 ${gridCols} gap-6 ${gridMax}`}>
            {features.map((feature, i) => {
              const Icon = getIcon(feature.icon)
              return (
                <div
                  key={feature.title}
                  data-reveal
                  style={{ animationDelay: `${i * 0.07}s` }}
                  className="group relative bg-white border border-surface-200 rounded-xl p-7 hover:border-safemed-200 hover:shadow-lg hover:shadow-safemed-600/5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-safemed-50 flex items-center justify-center mb-5 group-hover:bg-safemed-100 transition-colors">
                    <Icon className="w-5 h-5 text-safemed-600" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-surface-950 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-surface-800/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      {additionalBenefits && additionalBenefits.length > 0 && (
        <section className="py-16 bg-white border-t border-surface-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10" data-reveal>
              <h2 className="text-2xl font-display font-bold tracking-tight text-surface-950">
                Benefícios adicionais
              </h2>
            </div>
            <div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              data-reveal
              style={{ animationDelay: '0.1s' }}
            >
              {additionalBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 bg-surface-50 rounded-xl px-5 py-4"
                >
                  <div className="w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-accent-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-surface-800/70">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Highlight / Sabia que... */}
      {highlight && (
        <section className="py-20 lg:py-28 bg-surface-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center" data-reveal>
              <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase mb-3 block">
                Sabia que...
              </span>
              <h2 className="text-3xl font-display font-bold tracking-tight text-surface-950 mb-6">
                {highlight.heading}
              </h2>
              <p className="text-base text-surface-800/60 leading-relaxed mb-8">
                {highlight.text}
              </p>
              {highlight.bullets && highlight.bullets.length > 0 && (
                <ul className="inline-flex flex-col items-start gap-3 text-left">
                  {highlight.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-surface-800/70"
                    >
                      <div className="w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-accent-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {highlight.stats && highlight.stats.length > 0 && (
                <div className="grid sm:grid-cols-3 gap-6 mt-10">
                  {highlight.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-xl p-6 border border-surface-200"
                    >
                      <div className="text-2xl font-display font-bold text-safemed-600 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-surface-800/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      {showCta && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center" data-reveal>
            <div className="bg-gradient-to-br from-safemed-600 to-safemed-800 rounded-3xl p-10 lg:p-16 text-white relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3), transparent 50%)',
                }}
              />
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
                  Peça uma demonstração hoje mesmo!
                </h2>
                <p className="text-safemed-100 text-lg mb-8 max-w-lg mx-auto">
                  E descubra todas as potencialidades do Safemed para a sua empresa!
                </p>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-safemed-700 text-sm font-bold rounded-full hover:bg-safemed-50 transition-colors shadow-lg"
                >
                  Contactar Agora
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
