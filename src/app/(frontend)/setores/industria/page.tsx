'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Factory,
  ArrowRight,
  Heart,
  ShieldCheck,
  RefreshCw,
  AlertTriangle,
  ClipboardCheck,
  BarChart3,
  CheckCircle2,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Gestao de Processos de Saude',
    description:
      'Vigilancia medica completa dos colaboradores industriais: exames periodicos, aptidoes, exposicao a riscos especificos, fichas clinicas e historico medico integrado.',
  },
  {
    icon: ShieldCheck,
    title: 'Gestao de Processos de Seguranca',
    description:
      'Avaliacoes de risco por posto de trabalho, gestao de EPIs, controlo de produtos quimicos, investigacao de acidentes e planos de emergencia adaptados ao ambiente industrial.',
  },
  {
    icon: RefreshCw,
    title: 'Integracao com Sistemas de RH',
    description:
      'Sincronizacao automatica com os principais sistemas de recursos humanos (SAP, Primavera, PHC e outros). Atualizacao de dados de colaboradores, admissoes e cessacoes sem intervencao manual.',
  },
  {
    icon: AlertTriangle,
    title: 'Gestao de Acidentes de Trabalho',
    description:
      'Registo, investigacao e acompanhamento de acidentes e incidentes. Analise de causas, acoes corretivas e reporting estatistico para melhoria continua.',
  },
  {
    icon: ClipboardCheck,
    title: 'Gestao de EPI',
    description:
      'Controlo completo de equipamentos de protecao individual: atribuicao por funcao, validades, entregas, devolucoes e rastreabilidade total por colaborador.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards Industriais',
    description:
      'Indicadores de desempenho em SST adaptados a realidade industrial: taxas de sinistralidade, conformidade por area, custos de absentismo e tendencias temporais.',
  },
]

const sectors = [
  { name: 'Automovel', description: 'Linhas de producao, pintura, soldadura e montagem' },
  { name: 'Alimentar', description: 'HACCP, cadeia de frio, higiene e seguranca alimentar' },
  { name: 'Producao', description: 'Fabricas, armazens, logistica e operacoes continuas' },
  { name: 'Metalomecanica', description: 'Fundicao, maquinacao, tratamentos de superficie' },
]

export default function IndustriaPage() {
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
                <Factory className="w-4 h-4" />
                Setor
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-display font-bold tracking-tight text-surface-950">
                Industria
              </h1>
              <p className="mt-6 text-lg text-surface-500 leading-relaxed max-w-lg">
                Solucoes de SST para o setor industrial: automovel, alimentar, producao e metalomecanica. Porque na industria, a prevencao e a palavra de ordem.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
                <Zap className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-700">
                  A prevencao e a palavra de ordem!
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface-900 text-white font-semibold rounded-full hover:bg-surface-800 transition-colors"
                >
                  Pedir Demonstracao
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/modulos/seguranca-no-trabalho"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-surface-200 text-surface-700 font-semibold rounded-full hover:bg-surface-50 transition-colors"
                >
                  Ver Modulos
                </Link>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/modules/seguranca-trabalho-hero.jpg"
                  alt="Ambiente industrial com trabalhadores"
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

      {/* Sub-sectors */}
      <section className="py-16 bg-safemed-50/50">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          ref={(el) => { sectionsRef.current[0] = el }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="bg-white rounded-xl border border-surface-200/80 p-6 text-center"
              >
                <h3 className="text-lg font-display font-bold text-surface-950 mb-2">
                  {sector.name}
                </h3>
                <p className="text-sm text-surface-500">{sector.description}</p>
              </div>
            ))}
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
              Controlo total da SST industrial
            </h2>
            <p className="mt-4 text-lg text-surface-500">
              Gestao de saude, seguranca e integracao com RH, tudo adaptado as exigencias do ambiente fabril.
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

      {/* Integration Highlight */}
      <section className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="grid lg:grid-cols-2 gap-16 items-center"
            ref={(el) => { sectionsRef.current[8] = el }}
          >
            <div>
              <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
                Integracao
              </span>
              <h2 className="mt-3 text-3xl font-display font-bold tracking-tight text-surface-950">
                Ligacao direta com o seu sistema de RH
              </h2>
              <p className="mt-4 text-surface-500 leading-relaxed">
                O Safemed integra-se com os principais sistemas de gestao de recursos humanos utilizados na industria portuguesa. Admissoes, cessacoes, mudancas de funcao e transferencias sao automaticamente refletidas nos processos de SST.
              </p>
              <div className="mt-8 space-y-3">
                {['SAP SuccessFactors', 'Primavera', 'PHC', 'Meta4', 'APIs customizadas'].map((system) => (
                  <div key={system} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0" />
                    <span className="text-surface-700 font-medium">{system}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/modules/modulos-people-leaning.jpg"
                alt="Integracao de sistemas de RH com Safemed"
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
          ref={(el) => { sectionsRef.current[9] = el }}
        >
          <div className="bg-surface-900 rounded-2xl p-10 lg:p-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '100+', label: 'Fabricas servidas' },
                { value: '50K+', label: 'Colaboradores industriais' },
                { value: '0', label: 'Objetivo de acidentes' },
                { value: 'Real-time', label: 'Dados de SST' },
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
            Leve a SST da sua industria ao proximo nivel
          </h2>
          <p className="mt-4 text-lg text-surface-500 max-w-xl mx-auto">
            Descubra como o Safemed ajuda fabricas e unidades industriais a proteger os seus colaboradores e cumprir a legislacao.
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
