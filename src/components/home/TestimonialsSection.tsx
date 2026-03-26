'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'O Safemed transformou completamente a forma como gerimos a saúde ocupacional dos nossos 3.000 colaboradores. A digitalização dos processos reduziu o tempo administrativo em 60%.',
    name: 'Maria Santos',
    role: 'Diretora de RH',
    company: 'Grupo Industrial',
    rating: 5,
  },
  {
    quote: 'Como prestador de serviços de SST, o módulo multi-cliente do Safemed é essencial. Gerimos 150 empresas a partir de uma única plataforma.',
    name: 'Dr. António Ferreira',
    role: 'Diretor Técnico',
    company: 'Prestador de Serviços SST',
    rating: 5,
  },
  {
    quote: 'A integração da IA com o assistente Mivo mudou a forma como tomamos decisões. Temos dados em tempo real e insights que antes demoravam semanas a obter.',
    name: 'Joana Mendes',
    role: 'Coordenadora de Segurança',
    company: 'Centro Hospitalar',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-surface-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">Testemunhos</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">
            O que dizem os nossos clientes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-surface-100 hover:shadow-lg transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-safemed-100" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-surface-700 leading-relaxed mb-8 text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-safemed-100 to-safemed-200 flex items-center justify-center text-safemed-700 font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm text-surface-900">{t.name}</div>
                  <div className="text-xs text-surface-500">{t.role} — {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
