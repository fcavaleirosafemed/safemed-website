'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    modules: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: integrate with Mivo CRM leads API or email service
    setSubmitted(true)
  }

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">
              Contacto
            </span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-display font-bold tracking-tight text-surface-950">
              Fale connosco
            </h1>
            <p className="mt-6 text-lg text-surface-500 leading-relaxed max-w-lg">
              Quer saber mais sobre o Safemed ou pedir uma demonstração? Estamos disponíveis para ajudar.
            </p>

            <div className="mt-12 space-y-6">
              <a href="mailto:info@safemed.solutions" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-safemed-50 flex items-center justify-center group-hover:bg-safemed-100 transition-colors">
                  <Mail className="w-5 h-5 text-safemed-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-surface-900">Email</div>
                  <div className="text-sm text-surface-500">info@safemed.solutions</div>
                </div>
              </a>
              <a href="tel:+351220930055" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-safemed-50 flex items-center justify-center group-hover:bg-safemed-100 transition-colors">
                  <Phone className="w-5 h-5 text-safemed-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-surface-900">Telefone</div>
                  <div className="text-sm text-surface-500">+351 22 093 00 55</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-safemed-50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-safemed-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-surface-900">Morada</div>
                  <div className="text-sm text-surface-500">Rua de Azevedo Coutinho 39, 4100-100 Porto</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-emerald-50 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-surface-900 mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-surface-600">
                  Entraremos em contacto consigo brevemente.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-surface-50 rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">Nome *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-surface-200 text-sm focus:outline-none focus:ring-2 focus:ring-safemed-200 focus:border-safemed-300 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-surface-200 text-sm focus:outline-none focus:ring-2 focus:ring-safemed-200 focus:border-safemed-300 transition-all"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">Empresa</label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-surface-200 text-sm focus:outline-none focus:ring-2 focus:ring-safemed-200 focus:border-safemed-300 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-700 mb-1.5">Telefone</label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-surface-200 text-sm focus:outline-none focus:ring-2 focus:ring-safemed-200 focus:border-safemed-300 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">Módulos de Interesse</label>
                  <select
                    value={formState.modules}
                    onChange={(e) => setFormState({ ...formState, modules: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-surface-200 text-sm focus:outline-none focus:ring-2 focus:ring-safemed-200 focus:border-safemed-300 transition-all"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="saude">Saúde no Trabalho</option>
                    <option value="seguranca">Segurança no Trabalho</option>
                    <option value="acidentes">Acidentes de Trabalho</option>
                    <option value="epi">Gestão de EPI</option>
                    <option value="quimicos">Produtos Químicos</option>
                    <option value="completo">Solução Completa</option>
                    <option value="outro">Outro / Não sei</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-1.5">Mensagem</label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-surface-200 text-sm focus:outline-none focus:ring-2 focus:ring-safemed-200 focus:border-safemed-300 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-900 text-white font-semibold rounded-xl hover:bg-surface-800 transition-colors active:scale-[0.99]"
                >
                  Enviar Mensagem
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
