'use client'

import { useState, useEffect } from 'react'
import { Check, Zap, Cloud, Lock, Cpu } from 'lucide-react'

const features = [
  {
    id: 'cloud',
    icon: Cloud,
    title: '100% Cloud',
    desc: 'Aceda de qualquer lugar, a qualquer momento. Sem instalações, sem manutenção de servidores.',
  },
  {
    id: 'ai',
    icon: Cpu,
    title: 'IA Integrada',
    desc: 'Assistente inteligente que ajuda na tomada de decisão e automatiza tarefas repetitivas.',
  },
  {
    id: 'security',
    icon: Lock,
    title: 'Segurança Máxima',
    desc: 'Encriptação end-to-end, RGPD compliant, backups automáticos e autenticação multi-fator.',
  },
  {
    id: 'fast',
    icon: Zap,
    title: 'Implementação Rápida',
    desc: 'Comece a usar em dias, não em meses. Migração de dados e formação incluídas.',
  },
]

const editions = [
  {
    name: 'Lite',
    desc: 'Para empresas com gestão interna de SST simplificada',
    features: ['Saúde no Trabalho', 'My Safemed', 'Easy Booking', 'Suporte email'],
  },
  {
    name: 'Pro',
    desc: 'Para prestadores de serviços e empresas com necessidades avançadas',
    features: ['Tudo do Lite', 'Segurança no Trabalho', 'Acidentes', 'Gestão de EPI', 'Produtos Químicos', 'Kube Analytics', 'Suporte prioritário'],
  },
  {
    name: 'Gestão Interna',
    desc: 'Solução completa para grandes organizações',
    features: ['Tudo do Pro', 'Segurança Alimentar', 'Quizzer', 'API dedicada', 'Gestor de conta', 'SLA personalizado'],
  },
]

export function PlatformShowcase() {
  const [activeEdition, setActiveEdition] = useState(1)

  const [headerRef, setHeaderRef] = useState<HTMLElement | null>(null)
  const [headerVisible, setHeaderVisible] = useState(false)
  useEffect(() => {
    if (!headerRef) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true) },
      { threshold: 0.1 }
    )
    observer.observe(headerRef)
    return () => observer.disconnect()
  }, [headerRef])

  const [featuresRef, setFeaturesRef] = useState<HTMLElement | null>(null)
  const [featuresVisible, setFeaturesVisible] = useState(false)
  useEffect(() => {
    if (!featuresRef) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFeaturesVisible(true) },
      { threshold: 0.1 }
    )
    observer.observe(featuresRef)
    return () => observer.disconnect()
  }, [featuresRef])

  const [editionsHeaderRef, setEditionsHeaderRef] = useState<HTMLElement | null>(null)
  const [editionsHeaderVisible, setEditionsHeaderVisible] = useState(false)
  useEffect(() => {
    if (!editionsHeaderRef) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setEditionsHeaderVisible(true) },
      { threshold: 0.1 }
    )
    observer.observe(editionsHeaderRef)
    return () => observer.disconnect()
  }, [editionsHeaderRef])

  const [editionsRef, setEditionsRef] = useState<HTMLElement | null>(null)
  const [editionsVisible, setEditionsVisible] = useState(false)
  useEffect(() => {
    if (!editionsRef) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setEditionsVisible(true) },
      { threshold: 0.1 }
    )
    observer.observe(editionsRef)
    return () => observer.disconnect()
  }, [editionsRef])

  return (
    <section className="py-24 lg:py-32 bg-surface-950 text-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Features Header */}
        <div
          ref={setHeaderRef}
          className="text-center mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <span className="text-sm font-semibold text-safemed-400 tracking-wide uppercase">
            Plataforma
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold tracking-tight">
            Tecnologia que faz a diferença
          </h2>
        </div>

        <div ref={setFeaturesRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              className="rounded-2xl p-6 border border-white/10 bg-white/[0.03] hover:border-safemed-500/20 transition-colors"
              style={{
                opacity: featuresVisible ? 1 : 0,
                transform: featuresVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 700ms cubic-bezier(0.22,1,0.36,1)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-safemed-600/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-safemed-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-surface-200/60 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Editions Header */}
        <div
          ref={setEditionsHeaderRef}
          className="text-center mb-12"
          style={{
            opacity: editionsHeaderVisible ? 1 : 0,
            transform: editionsHeaderVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <h3 className="text-2xl lg:text-3xl font-display font-bold tracking-tight">
            Escolha a edição certa para si
          </h3>
          <p className="mt-3 text-surface-200/60 max-w-lg mx-auto">
            Três versões adaptadas a diferentes necessidades. Todas escaláveis e sem compromisso.
          </p>
        </div>

        <div ref={setEditionsRef} className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {editions.map((edition, i) => (
            <div
              key={edition.name}
              className={`rounded-2xl p-6 transition-all cursor-pointer ${
                activeEdition === i
                  ? 'border border-safemed-500/30 bg-white/[0.06] scale-[1.02]'
                  : 'border border-white/10 bg-white/[0.03] hover:border-white/20'
              }`}
              style={{
                opacity: editionsVisible ? 1 : 0,
                transform: editionsVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 700ms cubic-bezier(0.22,1,0.36,1)',
                transitionDelay: `${i * 100}ms`,
              }}
              onClick={() => setActiveEdition(i)}
            >
              <h4 className="font-display font-bold text-xl mb-1">{edition.name}</h4>
              <p className="text-xs text-surface-200/50 mb-6">{edition.desc}</p>
              <ul className="space-y-2.5">
                {edition.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-surface-200/80">
                    <Check className="w-3.5 h-3.5 text-safemed-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
