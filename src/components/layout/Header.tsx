'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ChevronDown,
  Menu,
  X,
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
  Factory,
  Building2,
  Hammer,
  Plane,
  Briefcase,
  GraduationCap,
} from 'lucide-react'

const modules = [
  { name: 'Saúde no Trabalho', href: '/modulos/saude-no-trabalho', icon: Heart, desc: 'Fichas clínicas, aptidões e agendamento' },
  { name: 'Segurança no Trabalho', href: '/modulos/seguranca-no-trabalho', icon: Shield, desc: 'Auditorias, relatórios e gestão documental' },
  { name: 'Acidentes de Trabalho', href: '/modulos/acidentes-de-trabalho', icon: AlertTriangle, desc: 'Registo, investigação e rastreabilidade' },
  { name: 'Gestão de EPI', href: '/modulos/gestao-epi', icon: HardHat, desc: 'Distribuição, alertas e ciclo de vida' },
  { name: 'Produtos Químicos', href: '/modulos/produtos-quimicos', icon: Beaker, desc: 'FDS, exposição e classificação CMR' },
  { name: 'My Safemed', href: '/modulos/my-safemed', icon: User, desc: 'Portal do trabalhador self-service' },
  { name: 'Easy Booking', href: '/modulos/easy-booking', icon: CalendarCheck, desc: 'Agendamento autónomo de consultas' },
  { name: 'Segurança Alimentar', href: '/modulos/seguranca-alimentar', icon: UtensilsCrossed, desc: 'Visitas, rotas e gestão documental' },
  { name: 'Kube', href: '/modulos/kube', icon: BarChart3, desc: 'Analytics e business intelligence' },
  { name: 'Quizzer', href: '/modulos/quizzer', icon: ClipboardList, desc: 'Inquéritos em massa com análise estatística' },
]

const industries = [
  { name: 'Prestadores de Serviços', href: '/setores/prestadores-servicos', icon: Briefcase },
  { name: 'Centros Hospitalares', href: '/setores/centros-hospitalares', icon: Building2 },
  { name: 'Indústria', href: '/setores/industria', icon: Factory },
  { name: 'Construção', href: '/setores/construcao', icon: Hammer },
  { name: 'Aviação Civil', href: '/setores/aviacao-civil', icon: Plane },
  { name: 'Ensino', href: '/setores/ensino', icon: GraduationCap },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-lg shadow-black/[0.03]'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-safemed-600 to-safemed-400 flex items-center justify-center shadow-lg shadow-safemed-600/20 group-hover:shadow-safemed-600/40 transition-shadow">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-surface-900 tracking-tight">
                safe<span className="text-safemed-600">med</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Módulos Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('modulos')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-surface-800 hover:text-safemed-600 transition-colors rounded-lg hover:bg-safemed-50/50">
                  Módulos
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'modulos' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'modulos' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                    >
                      <div className="glass rounded-2xl shadow-xl shadow-black/[0.08] p-4 w-[640px] grid grid-cols-2 gap-1">
                        {modules.map((mod) => (
                          <Link
                            key={mod.href}
                            href={mod.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-safemed-50/80 transition-colors group/item"
                          >
                            <div className="w-9 h-9 rounded-lg bg-safemed-50 flex items-center justify-center shrink-0 group-hover/item:bg-safemed-100 transition-colors">
                              <mod.icon className="w-4.5 h-4.5 text-safemed-600" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-surface-900 group-hover/item:text-safemed-600 transition-colors">
                                {mod.name}
                              </div>
                              <div className="text-xs text-surface-500 mt-0.5 leading-relaxed">
                                {mod.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Setores Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('setores')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-surface-800 hover:text-safemed-600 transition-colors rounded-lg hover:bg-safemed-50/50">
                  Setores
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'setores' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'setores' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                    >
                      <div className="glass rounded-2xl shadow-xl shadow-black/[0.08] p-4 w-[320px] space-y-1">
                        {industries.map((ind) => (
                          <Link
                            key={ind.href}
                            href={ind.href}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-safemed-50/80 transition-colors group/item"
                          >
                            <ind.icon className="w-4.5 h-4.5 text-safemed-600" />
                            <span className="text-sm font-medium text-surface-800 group-hover/item:text-safemed-600 transition-colors">
                              {ind.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/sobre" className="px-4 py-2 text-sm font-medium text-surface-800 hover:text-safemed-600 transition-colors rounded-lg hover:bg-safemed-50/50">
                Sobre Nós
              </Link>
              <Link href="/blog" className="px-4 py-2 text-sm font-medium text-surface-800 hover:text-safemed-600 transition-colors rounded-lg hover:bg-safemed-50/50">
                Blog
              </Link>
              <Link href="/carreiras" className="px-4 py-2 text-sm font-medium text-surface-800 hover:text-safemed-600 transition-colors rounded-lg hover:bg-safemed-50/50">
                Carreiras
              </Link>
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contacto"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-surface-900 text-white text-sm font-semibold rounded-full hover:bg-surface-800 transition-all hover:shadow-lg hover:shadow-surface-900/20 active:scale-[0.98]"
              >
                Fale Connosco
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-surface-100 transition-colors"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="pt-24 px-6 pb-8 h-full overflow-y-auto">
              <nav className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-3">Módulos</p>
                  <div className="space-y-1">
                    {modules.map((mod) => (
                      <Link
                        key={mod.href}
                        href={mod.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-safemed-50 transition-colors"
                      >
                        <mod.icon className="w-5 h-5 text-safemed-600" />
                        <span className="text-sm font-medium">{mod.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-3">Setores</p>
                  <div className="space-y-1">
                    {industries.map((ind) => (
                      <Link
                        key={ind.href}
                        href={ind.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-safemed-50 transition-colors"
                      >
                        <ind.icon className="w-5 h-5 text-safemed-600" />
                        <span className="text-sm font-medium">{ind.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  {[
                    { name: 'Sobre Nós', href: '/sobre' },
                    { name: 'Blog', href: '/blog' },
                    { name: 'Carreiras', href: '/carreiras' },
                    { name: 'Contacto', href: '/contacto' },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block p-3 text-sm font-medium rounded-xl hover:bg-safemed-50 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <Link
                  href="/contacto"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-6 py-3.5 bg-surface-900 text-white font-semibold rounded-full hover:bg-surface-800 transition-colors"
                >
                  Fale Connosco
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
