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
} from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Inovacao',
    description: 'Investimos continuamente em investigacao e desenvolvimento para manter a plataforma na vanguarda da tecnologia aplicada a SST.',
  },
  {
    icon: Heart,
    title: 'Compromisso',
    description: 'Cada cliente e um parceiro. Trabalhamos lado a lado para garantir que a solucao responde as necessidades reais da organizacao.',
  },
  {
    icon: Shield,
    title: 'Seguranca',
    description: 'A seguranca dos dados e a base de tudo. RGPD, encriptacao e controlos de acesso rigorosos em toda a plataforma.',
  },
  {
    icon: Zap,
    title: 'Simplicidade',
    description: 'Tecnologia complexa com uma experiencia simples. Interfaces intuitivas que qualquer utilizador consegue dominar rapidamente.',
  },
]

const versions = [
  {
    name: 'Safemed Lite',
    description: 'Versao essencial para pequenas e medias empresas que necessitam de gerir os processos basicos de saude e seguranca no trabalho.',
    features: [
      'Saude no Trabalho',
      'Fichas de aptidao',
      'Relatorio Unico',
      'Gestao de colaboradores',
      'Portal MySafemed',
    ],
    highlight: false,
  },
  {
    name: 'Safemed Pro',
    description: 'Solucao completa para organizacoes que precisam de gestao integrada de todos os processos de SST com modulos avancados.',
    features: [
      'Tudo do Lite',
      'Seguranca no Trabalho',
      'Acidentes de Trabalho',
      'Gestao de EPI',
      'Produtos Quimicos',
      'EasyBooking',
      'Kube Analytics',
    ],
    highlight: true,
  },
  {
    name: 'Gestao Interna',
    description: 'Para organizacoes com servicos internos de SST que necessitam de autonomia total na gestao dos seus processos.',
    features: [
      'Todos os modulos Pro',
      'Configuracao autonoma',
      'Integracao com RH',
      'Multi-estabelecimento',
      'Relatorios personalizados',
    ],
    highlight: false,
  },
]

const stats = [
  { value: '500+', label: 'Organizacoes' },
  { value: '300K+', label: 'Trabalhadores geridos' },
  { value: '15+', label: 'Anos de experiencia' },
  { value: '99.9%', label: 'Uptime' },
]

export default function SobrePage() {
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
              <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
                Sobre Nos
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-display font-bold tracking-tight text-surface-950">
                A Safemed Solutions
              </h1>
              <p className="mt-6 text-lg text-surface-500 leading-relaxed max-w-lg">
                A Safemed Solutions e uma empresa jovem e inovadora, especialista em solucoes SaaS de gestao de saude, seguranca e bem-estar no trabalho. Desenvolvemos tecnologia que transforma a forma como as organizacoes protegem os seus colaboradores.
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
                  Junte-se a Nos
                </Link>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/about-team.jpg"
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
                Missao
              </span>
              <h2 className="mt-3 text-3xl font-display font-bold tracking-tight text-surface-950">
                Tornar a SST simples, eficiente e acessivel
              </h2>
              <p className="mt-4 text-surface-600 leading-relaxed">
                A nossa missao e simplificar a gestao da seguranca e saude no trabalho atraves de tecnologia de ponta. Acreditamos que cada organizacao, independentemente da sua dimensao ou setor, merece ferramentas profissionais para proteger os seus colaboradores.
              </p>
              <p className="mt-4 text-surface-600 leading-relaxed">
                Desde prestadores de servicos externos ate grandes grupos industriais, passando por centros hospitalares e instituicoes de ensino, o Safemed adapta-se a realidade de cada cliente.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/about-office.jpg"
                alt="Escritorio Safemed no Porto"
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
              O que nos define
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-xl border border-surface-200/80 p-8 hover:border-safemed-200 hover:shadow-lg transition-all duration-300"
                ref={(el) => { sectionsRef.current[index + 3] = el }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-safemed-50 flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-safemed-600" />
                </div>
                <h3 className="text-lg font-display font-bold text-surface-950 mb-3">
                  {value.title}
                </h3>
                <p className="text-surface-500 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
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
              Versoes
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">
              Uma solucao para cada necessidade
            </h2>
            <p className="mt-4 text-lg text-surface-500">
              Tres versoes pensadas para diferentes realidades organizacionais.
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
                  {version.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-safemed-600 shrink-0" />
                      <span className="text-sm text-surface-700">{feature}</span>
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
                src="/images/about/about-team-meeting.jpg"
                alt="Equipa Safemed em reuniao"
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
                Pessoas que fazem a diferenca
              </h2>
              <p className="mt-4 text-surface-600 leading-relaxed">
                A equipa Safemed e composta por profissionais apaixonados por tecnologia e pela seguranca no trabalho. Engenheiros, designers, especialistas em SST e gestores de projeto que trabalham juntos para criar a melhor plataforma do mercado.
              </p>
              <p className="mt-4 text-surface-600 leading-relaxed">
                Sediados no Porto, servimos clientes em todo o territorio nacional e contamos com parceiro na Suica para o mercado internacional.
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
            Quer conhecer melhor o Safemed?
          </h2>
          <p className="mt-4 text-lg text-surface-500 max-w-xl mx-auto">
            Agende uma demonstracao e descubra como a nossa plataforma pode transformar a gestao de SST na sua organizacao.
          </p>
          <div className="mt-8">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-surface-900 text-white font-semibold rounded-full hover:bg-surface-800 transition-colors"
            >
              Pedir Demonstracao
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
