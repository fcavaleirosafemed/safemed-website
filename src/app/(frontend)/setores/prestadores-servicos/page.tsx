'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Briefcase,
  ArrowRight,
  Users,
  FileText,
  Settings,
  MessageSquare,
  ShieldCheck,
  BarChart3,
  Scale,
  CalendarCheck,
  Layers,
  CheckCircle2,
} from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Gestao de Clientes e Contratos',
    description:
      'Controle total sobre a carteira de clientes, contratos de prestacao de servicos e respetivos prazos. Visao centralizada de todos os servicos contratados por cada entidade.',
  },
  {
    icon: FileText,
    title: 'Processos Administrativos',
    description:
      'Automatizacao dos processos administrativos: faturacao, relatorios de atividade, comunicacoes obrigatorias e documentacao legal exigida pela Lei 102/2009.',
  },
  {
    icon: Settings,
    title: 'Controlo Operacional',
    description:
      'Planeamento e monitorizacao de todas as atividades de SST: visitas a clientes, consultas medicas, avaliacoes de risco e formacoes agendadas.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicacao Direta',
    description:
      'Canal de comunicacao integrado entre o prestador e os seus clientes. Notificacoes automaticas, partilha de documentos e atualizacoes em tempo real.',
  },
  {
    icon: ShieldCheck,
    title: 'Processos de Saude e Seguranca',
    description:
      'Gestao completa dos processos de saude ocupacional e seguranca no trabalho, desde a vigilancia medica ate as avaliacoes de risco, tudo numa unica plataforma.',
  },
  {
    icon: BarChart3,
    title: 'Analise Estatistica',
    description:
      'Dashboards e relatorios estatisticos avancados para analise de indicadores de SST. Dados em tempo real para tomada de decisoes informadas.',
  },
]

const tools = [
  {
    name: 'EasyBooking',
    description: 'Agendamento online de consultas e servicos de SST. Os colaboradores dos seus clientes marcam diretamente, reduzindo o trabalho administrativo.',
    href: '/modulos/easy-booking',
  },
  {
    name: 'Kube',
    description: 'Estatisticas avancadas e business intelligence aplicado a SST. Visao macro do desempenho de toda a operacao de prestacao de servicos.',
    href: '/modulos/kube',
  },
]

export default function PrestadoresServicosPage() {
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
                <Briefcase className="w-4 h-4" />
                Setor
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-display font-bold tracking-tight text-surface-950">
                Prestacao de Servicos
              </h1>
              <p className="mt-6 text-lg text-surface-500 leading-relaxed max-w-lg">
                Solucao completa para empresas prestadoras de servicos de Seguranca e Saude no Trabalho. Gira toda a operacao, desde a gestao de clientes ate ao cumprimento legal, numa unica plataforma.
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
                  src="/images/modules/modulos-hero-meeting.jpg"
                  alt="Equipa de prestadores de servicos SST em reuniao"
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

      {/* Legal Context */}
      <section className="py-16 bg-safemed-50/50">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          ref={(el) => { sectionsRef.current[0] = el }}
        >
          <div className="flex items-start gap-5 max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-safemed-100 flex items-center justify-center shrink-0 mt-1">
              <Scale className="w-6 h-6 text-safemed-700" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-surface-950">
                Enquadramento Legal - Lei 102/2009
              </h2>
              <p className="mt-3 text-surface-600 leading-relaxed">
                A legislacao portuguesa, nomeadamente a Lei 102/2009 (Regime juridico da promocao da seguranca e saude no trabalho), define as obrigacoes dos servicos externos de SST. O Safemed foi desenhado para garantir o cumprimento integral destas obrigacoes, desde o registo de atividades ate a emissao de relatorios obrigatorios, mantendo a sua empresa sempre em conformidade.
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
              Tudo o que precisa para gerir a sua operacao
            </h2>
            <p className="mt-4 text-lg text-surface-500">
              Do planeamento a execucao, cada aspeto da prestacao de servicos de SST fica coberto.
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

      {/* Tools Section */}
      <section className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="text-center max-w-2xl mx-auto mb-16"
            ref={(el) => { sectionsRef.current[8] = el }}
          >
            <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
              Ferramentas Complementares
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">
              Potencialize a sua operacao
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="group bg-white rounded-xl border border-surface-200/80 p-8 hover:border-safemed-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-safemed-50 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-safemed-600" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-surface-950">
                    {tool.name}
                  </h3>
                </div>
                <p className="text-surface-500 text-sm leading-relaxed mb-4">
                  {tool.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-safemed-600 group-hover:gap-2.5 transition-all">
                  Saber mais
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          ref={(el) => { sectionsRef.current[10] = el }}
        >
          <div className="bg-surface-900 rounded-2xl p-10 lg:p-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: '100%', label: 'Conformidade legal' },
                { value: 'Multi-empresa', label: 'Gestao centralizada' },
                { value: 'Tempo real', label: 'Dados e relatorios' },
                { value: '24/7', label: 'Acesso a plataforma' },
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
          ref={(el) => { sectionsRef.current[11] = el }}
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">
            Pronto para transformar a sua operacao?
          </h2>
          <p className="mt-4 text-lg text-surface-500 max-w-xl mx-auto">
            Junte-se as centenas de prestadores de servicos que ja utilizam o Safemed para gerir a SST dos seus clientes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
