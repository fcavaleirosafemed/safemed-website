'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  GraduationCap,
  ArrowRight,
  Heart,
  ShieldCheck,
  Users,
  Building,
  FlaskConical,
  ClipboardCheck,
  CheckCircle2,
} from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'Saude Ocupacional de Docentes e Funcionarios',
    description:
      'Vigilancia medica adaptada as funcoes especificas do ensino: docentes, assistentes operacionais, tecnicos de laboratorio e pessoal administrativo. Exames periodicos e aptidoes sempre em dia.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguranca em Espacos Educativos',
    description:
      'Avaliacoes de risco adaptadas a salas de aula, laboratorios, oficinas, bibliotecas, cantinas e espacos desportivos. Planos de emergencia e evacuacao para cada edificio.',
  },
  {
    icon: FlaskConical,
    title: 'Gestao de Laboratorios',
    description:
      'Controlo de produtos quimicos em laboratorios de ensino, fichas de dados de seguranca, EPIs especificos e procedimentos de seguranca para atividades praticas.',
  },
  {
    icon: Building,
    title: 'Multi-campus',
    description:
      'Gestao centralizada de SST para instituicoes com multiplos campus, polos ou escolas. Visao consolidada e relatorios por unidade organica.',
  },
  {
    icon: Users,
    title: 'Gestao de Grandes Populacoes',
    description:
      'Capacidade para gerir a saude e seguranca de milhares de colaboradores: corpo docente, investigadores, tecnicos, administrativos e pessoal auxiliar.',
  },
  {
    icon: ClipboardCheck,
    title: 'Conformidade e Relatorios',
    description:
      'Relatorio Unico automatizado, relatorios de atividade para tutelas e cumprimento das obrigacoes legais especificas das instituicoes de ensino publico e privado.',
  },
]

const institutions = [
  'Universidades',
  'Politecnicos',
  'Agrupamentos Escolares',
  'Escolas Profissionais',
  'Centros de Investigacao',
  'Escolas Privadas',
]

export default function EnsinoPage() {
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
                <GraduationCap className="w-4 h-4" />
                Setor
              </span>
              <h1 className="mt-4 text-4xl lg:text-5xl font-display font-bold tracking-tight text-surface-950">
                Ensino
              </h1>
              <p className="mt-6 text-lg text-surface-500 leading-relaxed max-w-lg">
                Gestao de saude e seguranca ocupacional para instituicoes de ensino. Universidades, politecnicos e escolas com uma plataforma pensada para a complexidade do setor educativo.
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
                  src="/images/about/about-office.jpg"
                  alt="Ambiente de ensino e investigacao"
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

      {/* Institution Types */}
      <section className="py-16 bg-safemed-50/50">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-8"
          ref={(el) => { sectionsRef.current[0] = el }}
        >
          <div className="text-center mb-10">
            <h2 className="text-xl font-display font-bold text-surface-950">
              Instituicoes que servimos
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {institutions.map((inst) => (
              <div
                key={inst}
                className="flex items-center gap-3 bg-white rounded-xl border border-surface-200/80 px-5 py-4"
              >
                <CheckCircle2 className="w-5 h-5 text-safemed-600 shrink-0" />
                <span className="text-surface-700 font-medium">{inst}</span>
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
              SST adaptada ao ensino
            </h2>
            <p className="mt-4 text-lg text-surface-500">
              Ferramentas especificas para a gestao de saude e seguranca em ambientes educativos, desde laboratorios a campus inteiros.
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

      {/* Trusted By */}
      <section className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="text-center max-w-2xl mx-auto mb-12"
            ref={(el) => { sectionsRef.current[8] = el }}
          >
            <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
              Confianca
            </span>
            <h2 className="mt-3 text-3xl font-display font-bold tracking-tight text-surface-950">
              Instituicoes que confiam no Safemed
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto items-center justify-items-center">
            <Image
              src="/images/icons/faculdade-ciencias-ul.png"
              alt="Faculdade de Ciencias da Universidade de Lisboa"
              width={160}
              height={80}
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/icons/universidade-aveiro.png"
              alt="Universidade de Aveiro"
              width={160}
              height={80}
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/icons/politecnico-lisboa.png"
              alt="Politecnico de Lisboa"
              width={160}
              height={80}
              className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
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
                { value: 'Multi-campus', label: 'Gestao centralizada' },
                { value: '1000+', label: 'Colaboradores por instituicao' },
                { value: 'Laboratorios', label: 'Gestao de riscos quimicos' },
                { value: '100%', label: 'Conformidade legal' },
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
            Proteja a sua comunidade academica
          </h2>
          <p className="mt-4 text-lg text-surface-500 max-w-xl mx-auto">
            Descubra como o Safemed ajuda instituicoes de ensino a gerir a saude e seguranca de docentes, investigadores e funcionarios.
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
