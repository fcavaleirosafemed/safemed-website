'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Factory, Building2, Hammer, Plane, Briefcase, GraduationCap, ArrowRight } from 'lucide-react'

const industries = [
  { icon: Briefcase, name: 'Prestadores de Serviços', desc: 'Gestão multi-cliente eficiente para empresas de SST externas.', href: '/setores/prestadores-servicos', color: 'from-blue-500/10 to-cyan-500/10' },
  { icon: Building2, name: 'Centros Hospitalares', desc: 'Conformidade regulatória e gestão de saúde ocupacional hospitalar.', href: '/setores/centros-hospitalares', color: 'from-emerald-500/10 to-teal-500/10' },
  { icon: Factory, name: 'Indústria', desc: 'Segurança industrial, gestão de EPI e produtos químicos.', href: '/setores/industria', color: 'from-amber-500/10 to-orange-500/10' },
  { icon: Hammer, name: 'Construção', desc: 'Gestão de obra, segurança em estaleiro e acidentes.', href: '/setores/construcao', color: 'from-red-500/10 to-rose-500/10' },
  { icon: Plane, name: 'Aviação Civil', desc: 'Requisitos específicos de segurança e saúde aeronáutica.', href: '/setores/aviacao-civil', color: 'from-violet-500/10 to-purple-500/10' },
  { icon: GraduationCap, name: 'Ensino', desc: 'Segurança em estabelecimentos de ensino e investigação.', href: '/setores/ensino', color: 'from-pink-500/10 to-fuchsia-500/10' },
]

export function IndustriesSection() {
  const [headerRef, setHeaderRef] = useState<HTMLElement | null>(null)
  const [headerVisible, setHeaderVisible] = useState(false)
  useEffect(() => {
    if (!headerRef) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true) },
      { threshold: 0.1 }
    )
    observer.observe(headerRef)
    return () => observer.disconnect()
  }, [headerRef])

  const [gridRef, setGridRef] = useState<HTMLElement | null>(null)
  const [gridVisible, setGridVisible] = useState(false)
  useEffect(() => {
    if (!gridRef) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setGridVisible(true) },
      { threshold: 0.1 }
    )
    observer.observe(gridRef)
    return () => observer.disconnect()
  }, [gridRef])

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={setHeaderRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <div>
            <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">Setores</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950">
              Adaptado ao seu setor
            </h2>
            <p className="mt-4 text-lg text-surface-500 max-w-lg">
              Cada indústria tem desafios únicos. O Safemed adapta-se a todos.
            </p>
          </div>
          <Link href="/setores" className="group inline-flex items-center gap-2 text-sm font-semibold text-safemed-600 hover:text-safemed-700 transition-colors">
            Ver todos os setores
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div ref={setGridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <div
              key={ind.href}
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 700ms cubic-bezier(0.22,1,0.36,1)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <Link
                href={ind.href}
                className="group block p-6 rounded-2xl border border-surface-200 bg-white hover:border-surface-300 hover:shadow-sm transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <ind.icon className="w-6 h-6 text-surface-700" />
                </div>
                <h3 className="font-semibold text-surface-900 text-lg mb-2 group-hover:text-safemed-600 transition-colors">
                  {ind.name}
                </h3>
                <p className="text-sm text-surface-500 leading-relaxed">{ind.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
