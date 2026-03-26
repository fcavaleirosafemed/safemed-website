'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Shield, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-grid">
      {/* Ambient gradients */}
      <div className="absolute top-20 -left-40 w-[600px] h-[600px] bg-safemed-200/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-safemed-100/40 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-safemed-50/50 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safemed-50 border border-safemed-100 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-safemed-600" />
              <span className="text-xs font-semibold text-safemed-700 tracking-wide">
                Plataforma com IA integrada
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-extrabold leading-[1.1] tracking-tight text-surface-950"
            >
              A segurança e saúde{' '}
              <br className="hidden sm:block" />
              no trabalho,{' '}
              <span className="relative inline-block">
                <span className="gradient-text">simplificada</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="url(#underline-grad)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="underline-grad" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#1c80ae" />
                      <stop offset="1" stopColor="#51b3ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg text-surface-600 leading-relaxed max-w-lg"
            >
              Plataforma modular que digitaliza toda a gestão de SST da sua organização.
              Da saúde ocupacional à segurança alimentar, tudo num só lugar.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contacto"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-surface-900 text-white font-semibold rounded-full hover:bg-surface-800 transition-all hover:shadow-xl hover:shadow-surface-900/20 active:scale-[0.98]"
              >
                Pedir Demonstração
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <button className="group inline-flex items-center gap-2 px-6 py-3.5 text-surface-700 font-medium rounded-full hover:bg-surface-50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-safemed-50 flex items-center justify-center group-hover:bg-safemed-100 transition-colors">
                  <Play className="w-4 h-4 text-safemed-600 ml-0.5" />
                </div>
                Ver como funciona
              </button>
            </motion.div>
          </div>

          {/* Right: Platform Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main dashboard mockup */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-surface-900/10 border border-surface-200/60">
              <div className="bg-gradient-to-br from-surface-50 to-white p-1">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-surface-50 rounded-t-xl">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-surface-200" />
                    <div className="w-3 h-3 rounded-full bg-surface-200" />
                    <div className="w-3 h-3 rounded-full bg-surface-200" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-lg px-4 py-1.5 text-xs text-surface-400 flex items-center gap-2">
                      <Shield className="w-3 h-3 text-accent-500" />
                      app.safemed.solutions
                    </div>
                  </div>
                </div>
                {/* Dashboard content */}
                <div className="bg-white rounded-b-xl p-6 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Consultas Hoje', value: '24', color: 'bg-safemed-50 text-safemed-700' },
                      { label: 'Aptidões Pendentes', value: '8', color: 'bg-amber-50 text-amber-700' },
                      { label: 'Taxa de Conformidade', value: '96%', color: 'bg-emerald-50 text-emerald-700' },
                    ].map((stat) => (
                      <div key={stat.label} className={`p-3.5 rounded-xl ${stat.color}`}>
                        <div className="text-2xl font-bold font-display">{stat.value}</div>
                        <div className="text-xs mt-1 opacity-70">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Chart placeholder */}
                  <div className="bg-surface-50 rounded-xl p-4 h-40 flex items-end gap-1.5">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: 0.6 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 bg-gradient-to-t from-safemed-500 to-safemed-300 rounded-t-md"
                      />
                    ))}
                  </div>
                  {/* Activity rows */}
                  <div className="space-y-2">
                    {[
                      { text: 'Consulta periódica — João Silva', tag: 'Concluída', tagColor: 'bg-emerald-50 text-emerald-700' },
                      { text: 'Auditoria de segurança — Armazém B', tag: 'Em curso', tagColor: 'bg-safemed-50 text-safemed-700' },
                    ].map((row) => (
                      <div key={row.text} className="flex items-center justify-between p-3 bg-surface-50 rounded-xl">
                        <span className="text-xs text-surface-600 font-medium">{row.text}</span>
                        <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${row.tagColor}`}>{row.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-4 -left-8 glass rounded-xl p-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-surface-900">100% Conforme</div>
                  <div className="text-[10px] text-surface-500">RGPD & Legislação SST</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-4 -right-4 glass rounded-xl p-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-safemed-50 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-safemed-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-surface-900">IA Assistente</div>
                  <div className="text-[10px] text-surface-500">Mivo integrado</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
