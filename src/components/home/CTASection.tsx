'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-safemed-600 via-safemed-700 to-safemed-900" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-safemed-400/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-5xl font-display font-bold tracking-tight text-white">
            Pronto para digitalizar
            <br />
            a SST da sua empresa?
          </h2>
          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
            Junte-se a centenas de empresas que já confiam no Safemed.
            Sem compromisso, sem instalação.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-safemed-700 font-semibold rounded-full hover:bg-surface-50 transition-all hover:shadow-xl hover:shadow-white/20 active:scale-[0.98]"
            >
              Pedir Demonstração Gratuita
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-4 text-white/80 font-medium rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com a equipa
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
