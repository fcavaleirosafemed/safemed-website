'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  HardHat,
  ArrowRight,
  FolderOpen,
  ShieldCheck,
  FileCheck,
  Users,
  AlertTriangle,
  MapPin,
} from 'lucide-react'

const features = [
  {
    icon: FolderOpen,
    title: 'Gestao de Obras',
    description:
      'Cada obra como um projeto independente com a sua propria equipa, riscos especificos, documentacao e cronograma. Visao consolidada de todas as obras em simultaneo.',
  },
  {
    icon: ShieldCheck,
    title: 'EPI por Trabalhador e Funcao',
    description:
      'Atribuicao automatica de equipamentos de protecao individual conforme a funcao e os riscos de cada obra. Controlo de entregas, validades e conformidade por trabalhador.',
  },
  {
    icon: FileCheck,
    title: 'Validacao de Fichas de Aptidao',
    description:
      'Verificacao automatica da validade das fichas de aptidao medica antes da entrada em obra. Alertas antecipados para renovacoes e bloqueio de acesso quando expiradas.',
  },
  {
    icon: AlertTriangle,
    title: 'Gestao de Acidentes em Obra',
    description:
      'Registo imediato de acidentes e incidentes em contexto de obra, com geolocalizacao, investigacao de causas e plano de acoes corretivas. Comunicacao automatica as entidades competentes.',
  },
  {
    icon: Users,
    title: 'Controlo de Subempreiteiros',
    description:
      'Gestao da documentacao de SST de subempreiteiros: seguros, fichas de aptidao, formacoes obrigatorias e certificacoes. Validacao automatica antes do inicio dos trabalhos.',
  },
  {
    icon: MapPin,
    title: 'Multi-obra e Multi-local',
    description:
      'Gestao simultanea de multiplas obras em diferentes localizacoes. Dashboard centralizado com o estado de conformidade de cada estaleiro em tempo real.',
  },
]

export default function ConstrucaoPage() {
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
                <HardHat className="w-4 h-4" />
                Setor
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-display font-bold tracking-tight text-surface-950">
                Construcao
              </h1>
              <p className="mt-6 text-lg text-surface-500 leading-relaxed max-w-lg">
                SST para ambientes dinamicos e desafiantes. Gestao de obras, EPIs, subempreiteiros e fichas de aptidao, tudo numa plataforma concebida para o setor da construcao.
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
                  href="/modulos/gestao-epi"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-surface-200 text-surface-700 font-semibold rounded-full hover:bg-surface-50 transition-colors"
                >
                  Modulo de EPI
                </Link>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/modules/seguranca-trabalho-aaa.jpg"
                  alt="Estaleiro de construcao com trabalhadores equipados"
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

      {/* Dynamic Environment */}
      <section className="py-16 bg-safemed-50/50">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          ref={(el) => { sectionsRef.current[0] = el }}
        >
          <div className="flex items-start gap-5 max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 mt-1">
              <AlertTriangle className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-surface-950">
                Ambientes Dinamicos e Desafiantes
              </h2>
              <p className="mt-3 text-surface-600 leading-relaxed">
                O setor da construcao apresenta desafios unicos: obras temporarias, equipas rotativas, multiplos subempreiteiros e riscos que mudam diariamente. O Safemed foi concebido para acompanhar esta dinamica, garantindo que a seguranca nunca fica para segundo plano.
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
              SST a medida da construcao
            </h2>
            <p className="mt-4 text-lg text-surface-500">
              Ferramentas especificas para gerir a seguranca em estaleiros, obras e ambientes de construcao.
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

      {/* Workflow */}
      <section className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="text-center max-w-2xl mx-auto mb-16"
            ref={(el) => { sectionsRef.current[8] = el }}
          >
            <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
              Fluxo de Trabalho
            </span>
            <h2 className="mt-3 text-3xl font-display font-bold tracking-tight text-surface-950">
              Da abertura ao encerramento da obra
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Abertura de Obra', desc: 'Criacao do projeto, definicao de riscos e equipa inicial' },
              { step: '02', title: 'Validacao', desc: 'Verificacao de aptidoes, EPIs e documentacao de subempreiteiros' },
              { step: '03', title: 'Monitorizacao', desc: 'Acompanhamento continuo de conformidade e indicadores de SST' },
              { step: '04', title: 'Encerramento', desc: 'Relatorio final, arquivo de documentacao e licoes aprendidas' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl border border-surface-200/80 p-6">
                <div className="text-3xl font-display font-bold text-safemed-200 mb-3">
                  {item.step}
                </div>
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
                { value: 'Multi-obra', label: 'Gestao simultanea' },
                { value: 'Tempo real', label: 'Validacao de aptidoes' },
                { value: 'Automatico', label: 'Controlo de EPIs' },
                { value: 'Conformidade', label: 'Subempreiteiros' },
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
            Construa com seguranca
          </h2>
          <p className="mt-4 text-lg text-surface-500 max-w-xl mx-auto">
            Descubra como o Safemed ajuda empresas de construcao a manter a conformidade e proteger os seus trabalhadores em cada estaleiro.
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
