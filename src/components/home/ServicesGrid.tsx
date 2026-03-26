'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Heart,
  Shield,
  AlertTriangle,
  HardHat,
  Beaker,
  User,
  CalendarCheck,
  UtensilsCrossed,
  BarChart3,
  ClipboardList,
  ArrowUpRight,
} from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Saúde no Trabalho',
    desc: 'Fichas clínicas digitais, aptidões, agendamento inteligente e assinaturas digitais.',
    href: '/modulos/saude-no-trabalho',
    featured: true,
  },
  {
    icon: Shield,
    title: 'Segurança no Trabalho',
    desc: 'Auditorias, mapeamento geográfico de rotas, relatórios personalizáveis.',
    href: '/modulos/seguranca-no-trabalho',
    featured: true,
  },
  {
    icon: AlertTriangle,
    title: 'Acidentes de Trabalho',
    desc: 'Registo de incidentes, relatórios de investigação, rastreabilidade completa.',
    href: '/modulos/acidentes-de-trabalho',
  },
  {
    icon: HardHat,
    title: 'Gestão de EPI',
    desc: 'Distribuição, alertas de validade, ciclo de vida dos equipamentos.',
    href: '/modulos/gestao-epi',
  },
  {
    icon: Beaker,
    title: 'Produtos Químicos',
    desc: 'Gestão de FDS, controlo de exposição, classificações CMR.',
    href: '/modulos/produtos-quimicos',
  },
  {
    icon: User,
    title: 'My Safemed',
    desc: 'Portal self-service para trabalhadores consultarem documentos e reportarem.',
    href: '/modulos/my-safemed',
  },
  {
    icon: CalendarCheck,
    title: 'Easy Booking',
    desc: 'Agendamento autónomo de consultas com lembretes SMS e email.',
    href: '/modulos/easy-booking',
  },
  {
    icon: UtensilsCrossed,
    title: 'Segurança Alimentar',
    desc: 'Mapeamento de visitas, otimização de rotas, gestão documental.',
    href: '/modulos/seguranca-alimentar',
  },
  {
    icon: BarChart3,
    title: 'Kube Analytics',
    desc: 'Business intelligence, estudos epidemiológicos e relatórios personalizados.',
    href: '/modulos/kube',
  },
  {
    icon: ClipboardList,
    title: 'Quizzer',
    desc: 'Inquéritos em massa, análise estatística, distribuição automatizada.',
    href: '/modulos/quizzer',
  },
]

export function ServicesGrid() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
            Módulos
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">
            Uma plataforma,
            <br />
            todas as necessidades de SST
          </h2>
          <p className="mt-4 text-lg text-surface-500 leading-relaxed">
            Cada módulo funciona de forma independente mas integra-se perfeitamente com os restantes. Escolha apenas o que precisa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <div
              key={service.href}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: `${index * 60}ms`,
              }}
            >
              <Link
                href={service.href}
                className={`group block p-5 rounded-2xl border transition-all duration-300 h-full ${
                  service.featured
                    ? 'border-safemed-200 bg-safemed-50/40 hover:shadow-md hover:border-safemed-300'
                    : 'border-surface-200 bg-white hover:border-safemed-200 hover:shadow-md'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  service.featured
                    ? 'bg-safemed-100/80 group-hover:bg-safemed-200/80'
                    : 'bg-surface-50 group-hover:bg-safemed-50'
                }`}>
                  <service.icon className={`w-5 h-5 ${
                    service.featured ? 'text-safemed-600' : 'text-surface-500 group-hover:text-safemed-600'
                  } transition-colors`} />
                </div>

                <h3 className="font-semibold text-surface-900 mb-2 flex items-center gap-1.5 group-hover:text-safemed-700 transition-colors">
                  {service.title}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>

                <p className="text-sm text-surface-500 leading-relaxed">
                  {service.desc}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
