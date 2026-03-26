'use client'

import { motion } from 'framer-motion'
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
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
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {services.map((service) => (
            <motion.div key={service.href} variants={itemVariants}>
              <Link
                href={service.href}
                className={`group block p-5 rounded-2xl border transition-all duration-300 h-full ${
                  service.featured
                    ? 'border-safemed-100 bg-gradient-to-br from-safemed-50/80 to-white hover:shadow-xl hover:shadow-safemed-100/40 xl:col-span-1 sm:col-span-1'
                    : 'border-surface-100 bg-white hover:border-safemed-100 hover:shadow-lg hover:shadow-surface-100/60'
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
