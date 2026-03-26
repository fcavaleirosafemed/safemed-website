'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check, Zap, Cloud, Lock, Cpu } from 'lucide-react'

const features = [
  {
    id: 'cloud',
    icon: Cloud,
    title: '100% Cloud',
    desc: 'Aceda de qualquer lugar, a qualquer momento. Sem instalações, sem manutenção de servidores.',
  },
  {
    id: 'ai',
    icon: Cpu,
    title: 'IA Integrada',
    desc: 'Assistente inteligente que ajuda na tomada de decisão e automatiza tarefas repetitivas.',
  },
  {
    id: 'security',
    icon: Lock,
    title: 'Segurança Máxima',
    desc: 'Encriptação end-to-end, RGPD compliant, backups automáticos e autenticação multi-fator.',
  },
  {
    id: 'fast',
    icon: Zap,
    title: 'Implementação Rápida',
    desc: 'Comece a usar em dias, não em meses. Migração de dados e formação incluídas.',
  },
]

const editions = [
  {
    name: 'Lite',
    desc: 'Para empresas com gestão interna de SST simplificada',
    features: ['Saúde no Trabalho', 'My Safemed', 'Easy Booking', 'Suporte email'],
  },
  {
    name: 'Pro',
    desc: 'Para prestadores de serviços e empresas com necessidades avançadas',
    features: ['Tudo do Lite', 'Segurança no Trabalho', 'Acidentes', 'Gestão de EPI', 'Produtos Químicos', 'Kube Analytics', 'Suporte prioritário'],
  },
  {
    name: 'Gestão Interna',
    desc: 'Solução completa para grandes organizações',
    features: ['Tudo do Pro', 'Segurança Alimentar', 'Quizzer', 'API dedicada', 'Gestor de conta', 'SLA personalizado'],
  },
]

export function PlatformShowcase() {
  const [activeEdition, setActiveEdition] = useState(1)

  return (
    <section className="py-24 lg:py-32 bg-surface-950 text-white relative overflow-hidden noise">
      {/* Ambient */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-safemed-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-safemed-400/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-safemed-400 tracking-wide uppercase">
            Plataforma
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold tracking-tight">
            Tecnologia que faz a diferença
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-dark rounded-2xl p-6 hover:border-safemed-500/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-safemed-600/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-safemed-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-surface-200/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Editions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl lg:text-3xl font-display font-bold tracking-tight">
            Escolha a edição certa para si
          </h3>
          <p className="mt-3 text-surface-200/60 max-w-lg mx-auto">
            Três versões adaptadas a diferentes necessidades. Todas escaláveis e sem compromisso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {editions.map((edition, i) => (
            <motion.div
              key={edition.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-6 transition-all cursor-pointer ${
                activeEdition === i
                  ? 'glass-dark border-safemed-500/30 shadow-lg shadow-safemed-500/10 scale-[1.02]'
                  : 'glass-dark hover:border-white/10'
              }`}
              onClick={() => setActiveEdition(i)}
            >
              <h4 className="font-display font-bold text-xl mb-1">{edition.name}</h4>
              <p className="text-xs text-surface-200/50 mb-6">{edition.desc}</p>
              <ul className="space-y-2.5">
                {edition.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-surface-200/80">
                    <Check className="w-3.5 h-3.5 text-safemed-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
