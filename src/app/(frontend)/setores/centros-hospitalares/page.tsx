'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Building2,
  ArrowRight,
  Lock,
  Network,
  FileCheck,
  ShieldCheck,
  Users,
  BarChart3,
  Database,
  Eye,
} from 'lucide-react'

const features = [
  {
    icon: Lock,
    title: 'Segregacao de Dados de Saude',
    description:
      'Separacao rigorosa entre dados de saude ocupacional e dados clinicos assistenciais, garantindo total privacidade e conformidade com o RGPD e legislacao hospitalar.',
  },
  {
    icon: Network,
    title: 'Integracao com o SNS',
    description:
      'Integracao nativa com os sistemas do Servico Nacional de Saude, facilitando a troca de informacao e o cumprimento das obrigacoes legais dos centros hospitalares.',
  },
  {
    icon: Database,
    title: 'Integracao Sclinic',
    description:
      'Compatibilidade total com o sistema Sclinic utilizado nas unidades hospitalares. Fluxo de dados bidirecional sem necessidade de duplo registo.',
  },
  {
    icon: FileCheck,
    title: 'Prescricao de MCDTs',
    description:
      'Prescricao e gestao de Meios Complementares de Diagnostico e Terapeutica diretamente na plataforma, com rastreabilidade completa dos exames solicitados.',
  },
  {
    icon: ShieldCheck,
    title: 'Avaliacoes de Risco Centralizadas',
    description:
      'Gestao centralizada de todas as avaliacoes de risco dos diferentes servicos e departamentos do centro hospitalar, com workflows de aprovacao definidos.',
  },
  {
    icon: Users,
    title: 'Acesso Multi-equipa',
    description:
      'Partilha controlada de dados entre equipas de saude ocupacional, seguranca, recursos humanos e administracao, com niveis de acesso diferenciados por perfil.',
  },
]

const highlights = [
  'Conformidade total com normas hospitalares de privacidade',
  'Relatorio Unico automatizado para entidades publicas',
  'Gestao de turnos e escalas com impacto na vigilancia medica',
  'Dashboard executivo para administracao hospitalar',
  'Suporte para auditorias internas e externas',
  'Historico completo de toda a atividade de SST',
]

export default function CentrosHospitalaresPage() {
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
                <Building2 className="w-4 h-4" />
                Setor
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-display font-bold tracking-tight text-surface-950">
                Centros Hospitalares e Unidades Locais
              </h1>
              <p className="mt-6 text-lg text-surface-500 leading-relaxed max-w-lg">
                Gestao integrada de saude e seguranca ocupacional para centros hospitalares, com segregacao de dados, integracao SNS e conformidade total com as exigencias do setor.
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
                  href="/modulos/saude-no-trabalho"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-surface-200 text-surface-700 font-semibold rounded-full hover:bg-surface-50 transition-colors"
                >
                  Ver Modulos
                </Link>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/modules/saude-trabalho-hero.jpg"
                  alt="Ambiente hospitalar com profissionais de saude"
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

      {/* Privacy Banner */}
      <section className="py-16 bg-safemed-50/50">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          ref={(el) => { sectionsRef.current[0] = el }}
        >
          <div className="flex items-start gap-5 max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-safemed-100 flex items-center justify-center shrink-0 mt-1">
              <Lock className="w-6 h-6 text-safemed-700" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-surface-950">
                Privacidade e Segregacao de Dados
              </h2>
              <p className="mt-3 text-surface-600 leading-relaxed">
                Nos centros hospitalares, a separacao entre dados de saude ocupacional e dados clinicos assistenciais e fundamental. O Safemed garante esta segregacao a nivel de arquitetura, com controlos de acesso granulares que respeitam as normas de privacidade hospitalar e o RGPD.
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
              Desenhado para a realidade hospitalar
            </h2>
            <p className="mt-4 text-lg text-surface-500">
              Cada funcionalidade foi pensada para responder as necessidades especificas dos centros hospitalares e unidades locais de saude.
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

      {/* Highlights Checklist */}
      <section className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div ref={(el) => { sectionsRef.current[9] = el }}>
              <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
                Vantagens
              </span>
              <h2 className="mt-3 text-3xl font-display font-bold tracking-tight text-surface-950">
                Porque escolher o Safemed para o seu centro hospitalar
              </h2>
              <div className="mt-8 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Eye className="w-3.5 h-3.5 text-accent-500" />
                    </div>
                    <span className="text-surface-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div ref={(el) => { sectionsRef.current[10] = el }}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/modules/saude-trabalho-feature.jpg"
                  alt="Interface Safemed para centros hospitalares"
                  width={640}
                  height={427}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          ref={(el) => { sectionsRef.current[11] = el }}
        >
          <div className="bg-surface-900 rounded-2xl p-10 lg:p-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: 'RGPD', label: 'Conformidade total' },
                { value: 'SNS', label: 'Integracao nativa' },
                { value: 'Sclinic', label: 'Compatibilidade' },
                { value: 'Multi-perfil', label: 'Controlos de acesso' },
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
          ref={(el) => { sectionsRef.current[12] = el }}
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">
            Descubra como o Safemed se adapta ao seu centro hospitalar
          </h2>
          <p className="mt-4 text-lg text-surface-500 max-w-xl mx-auto">
            Agende uma demonstracao personalizada e veja como a plataforma responde as exigencias do setor hospitalar.
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
