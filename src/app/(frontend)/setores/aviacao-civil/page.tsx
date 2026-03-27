'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Plane,
  ArrowRight,
  Heart,
  ShieldCheck,
  BarChart3,
  Clock,
  Users,
  Zap,
  CheckCircle2,
  Layers,
} from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Medicina Aeronautica',
    description:
      'Gestao especializada da medicina aeronautica: exames medicos especificos para tripulacoes e pessoal de terra, conformidade com regulamentacoes EASA e ANAC, e rastreabilidade completa de certificados medicos.',
  },
  {
    icon: ShieldCheck,
    title: 'Gestao de Equipas de Seguranca',
    description:
      'Controlo rigoroso das equipas de seguranca aeroportuaria: formacoes obrigatorias, certificacoes ativas, escalas de servico e conformidade regulamentar de cada elemento.',
  },
  {
    icon: BarChart3,
    title: 'Estatisticas Avancadas com Kube',
    description:
      'O modulo Kube fornece estatisticas poderosas para o setor da aviacao: indicadores de saude ocupacional, taxas de aptidao, absentismo e tendencias por funcao e departamento.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery - 6 Semanas',
    description:
      'Metodologia exclusiva de implementacao rapida. Em apenas 6 semanas, o Safemed esta totalmente operacional e adaptado a realidade da sua organizacao de aviacao civil.',
  },
  {
    icon: Users,
    title: 'Gestao Multi-base',
    description:
      'Gestao centralizada de SST para organizacoes com multiplas bases operacionais. Visao consolidada de todas as localizacoes com dados em tempo real.',
  },
  {
    icon: Layers,
    title: 'Conformidade Regulamentar',
    description:
      'Cumprimento integral das exigencias regulamentares da aviacao civil: normas EASA, regulamentos nacionais da ANAC e requisitos especificos de cada operador.',
  },
]

export default function AviacaoCivilPage() {
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

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-safemed-600 tracking-wide uppercase">
                <Plane className="w-4 h-4" />
                Setor
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-display font-bold tracking-tight text-surface-950">
                Aviacao Civil
              </h1>
              <p className="mt-6 text-lg text-surface-500 leading-relaxed max-w-lg">
                Solucao especializada para o setor da aviacao civil. Medicina aeronautica, gestao de equipas de seguranca e conformidade regulamentar numa plataforma integrada.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface-900 text-white font-semibold rounded-full hover:bg-surface-800 transition-colors"
                >
                  Pedir Demonstracao
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/modulos/kube"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-surface-200 text-surface-700 font-semibold rounded-full hover:bg-surface-50 transition-colors"
                >
                  Conhecer o Kube
                </Link>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/modules/modulos-hero-meeting.jpg"
                  alt="Equipa de aviacao civil em reuniao"
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

      {/* Fast Delivery Banner */}
      <section className="py-16 bg-safemed-50/50">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          ref={(el) => { sectionsRef.current[0] = el }}
        >
          <div className="flex items-start gap-5 max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center shrink-0 mt-1">
              <Zap className="w-6 h-6 text-accent-500" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-surface-950">
                Fast Delivery - Operacional em 6 Semanas
              </h2>
              <p className="mt-3 text-surface-600 leading-relaxed">
                A nossa metodologia Fast Delivery garante que a plataforma esta implementada e a funcionar em apenas 6 semanas. Migracoes de dados, configuracoes personalizadas, formacao de utilizadores e go-live, tudo incluido num cronograma agressivo mas comprovado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="text-center max-w-2xl mx-auto mb-16"
            ref={(el) => { sectionsRef.current[1] = el }}
          >
            <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
              Funcionalidades
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">
              SST especializada para aviacao
            </h2>
            <p className="mt-4 text-lg text-surface-500">
              Ferramentas desenvolvidas para responder as exigencias regulamentares e operacionais do setor da aviacao civil.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-white rounded-xl border border-surface-200/80 p-8 hover:border-safemed-200 hover:shadow-lg transition-all duration-300"
                ref={(el) => { sectionsRef.current[index + 2] = el }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-safemed-50 flex items-center justify-center mb-5 group-hover:bg-safemed-100 transition-colors">
                  <feature.icon className="w-6 h-6 text-safemed-600" />
                </div>
                <h3 className="text-lg font-display font-bold text-surface-950 mb-3">
                  {feature.title}
                </h3>
                <p className="text-surface-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="text-center max-w-2xl mx-auto mb-16"
            ref={(el) => { sectionsRef.current[8] = el }}
          >
            <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
              Implementacao
            </span>
            <h2 className="mt-3 text-3xl font-display font-bold tracking-tight text-surface-950">
              Metodologia Fast Delivery
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { week: 'Semana 1-2', title: 'Analise e Configuracao', desc: 'Levantamento de requisitos, migracao de dados e configuracao da plataforma' },
              { week: 'Semana 3-4', title: 'Personalizacao', desc: 'Adaptacao de workflows, integracao de sistemas e testes funcionais' },
              { week: 'Semana 5-6', title: 'Formacao e Go-Live', desc: 'Formacao de utilizadores, testes finais e entrada em producao' },
            ].map((item) => (
              <div key={item.week} className="bg-white rounded-xl border border-surface-200/80 p-6">
                <div className="text-sm font-semibold text-safemed-600 mb-2">{item.week}</div>
                <h3 className="text-lg font-display font-bold text-surface-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-surface-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          ref={(el) => { sectionsRef.current[9] = el }}
        >
          <div className="bg-surface-900 rounded-2xl p-10 lg:p-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '6 sem.', label: 'Implementacao Fast Delivery' },
                { value: 'EASA', label: 'Conformidade regulamentar' },
                { value: 'Kube', label: 'Estatisticas avancadas' },
                { value: 'Multi-base', label: 'Gestao centralizada' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-display font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-surface-200/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-safemed-50/50">
        <div
          className="max-w-3xl mx-auto px-6 lg:px-8 text-center"
          ref={(el) => { sectionsRef.current[10] = el }}
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">
            Prepare a sua organizacao para voar mais alto
          </h2>
          <p className="mt-4 text-lg text-surface-500 max-w-xl mx-auto">
            Descubra como o Safemed responde as exigencias da aviacao civil com uma demonstracao personalizada.
          </p>
          <div className="mt-8">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface-900 text-white font-semibold rounded-full hover:bg-surface-800 transition-colors"
            >
              Fale Connosco
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
