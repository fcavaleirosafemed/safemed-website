'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Shield, Sparkles, Building2, Blocks, Globe } from 'lucide-react'
import { HeroChat } from './HeroChat'

export function HeroSection() {
  const [chartsReady, setChartsReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setChartsReady(true), 800)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Subtle radial gradient accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          right: '-5%',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(28,128,174,0.04) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '0%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(28,128,174,0.03) 0%, transparent 70%)',
        }}
      />

      {/* ========== CHAT BAR — Full width, prominent position ========== */}
      <div className="relative z-10 w-full pt-24 pb-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-center text-xl sm:text-2xl font-display font-semibold text-surface-800 mb-5">
            Pergunte-nos o que precisar — o nosso assistente conhece toda a plataforma
          </h2>
          <HeroChat />
        </div>
      </div>

      {/* ========== HERO CONTENT ========== */}
      <div className="relative flex-1 flex items-center w-full">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 pt-4 lg:pt-6 pb-8 lg:pb-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Column: Copy */}
            <div className="max-w-xl">
              {/* Badge */}
              <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safemed-50/80 border border-safemed-100/60 mb-8">
                  <Sparkles className="w-3.5 h-3.5 text-safemed-500" />
                  <span className="text-xs font-medium text-safemed-700 tracking-wide">
                    Plataforma líder em SST
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1
                className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] tracking-tight text-surface-950 animate-fade-in-up"
                style={{ animationDelay: '500ms' }}
              >
                <span className="font-normal">Gestão de Segurança e </span>
                <span className="font-normal">Saúde no Trabalho,</span>
                <br />
                <span
                  className="font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #1c80ae 0%, #3da5d9 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  reinventada
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className="mt-6 text-lg text-surface-500 leading-relaxed max-w-lg font-normal animate-fade-in-up"
                style={{ animationDelay: '600ms' }}
              >
                Plataforma modular que digitaliza toda a gestão de SST. Da saúde
                ocupacional à segurança alimentar, com IA integrada.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-5 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-surface-950 text-white text-sm font-semibold rounded-full hover:bg-surface-800 transition-all duration-300 hover:shadow-xl hover:shadow-surface-950/15 active:scale-[0.98]"
                >
                  Pedir Demonstração
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
                <button className="group inline-flex items-center gap-2.5 text-sm text-surface-600 font-medium hover:text-surface-900 transition-colors duration-200">
                  <div className="w-9 h-9 rounded-full bg-safemed-50 border border-safemed-100/60 flex items-center justify-center group-hover:bg-safemed-100 transition-colors duration-200">
                    <Play className="w-3.5 h-3.5 text-safemed-600 ml-0.5" />
                  </div>
                  Ver como funciona
                </button>
              </div>

              {/* Trust Stats */}
              <div className="mt-12 flex items-center gap-8 text-sm animate-fade-in-up" style={{ animationDelay: '850ms' }}>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-safemed-500" />
                  <span className="text-surface-500">
                    <span className="font-semibold text-surface-800">500+</span> Empresas
                  </span>
                </div>
                <div className="w-px h-4 bg-surface-200" />
                <div className="flex items-center gap-2">
                  <Blocks className="w-4 h-4 text-safemed-500" />
                  <span className="text-surface-500">
                    <span className="font-semibold text-surface-800">10</span> Módulos
                  </span>
                </div>
                <div className="w-px h-4 bg-surface-200" />
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-safemed-500" />
                  <span className="text-surface-500">
                    <span className="font-semibold text-surface-800">4</span> Idiomas
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Dashboard Mockup */}
            <div className="relative animate-fade-in-right" style={{ animationDelay: '600ms' }}>
              {/* Dashboard Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-surface-950/[0.08] border border-surface-200/80 bg-white">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-surface-50/80 border-b border-surface-100/60">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-300/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-300/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-300/60" />
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="bg-white rounded-md px-3 py-1 text-[11px] text-surface-400 flex items-center gap-1.5 border border-surface-100/60">
                      <Shield className="w-3 h-3 text-emerald-500" />
                      app.safemed.solutions
                    </div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-5 space-y-3.5">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { label: 'Consultas Hoje', value: '24', bg: 'bg-safemed-50/70', text: 'text-safemed-700', accent: 'text-safemed-600' },
                      { label: 'Aptidões Pendentes', value: '8', bg: 'bg-amber-50/70', text: 'text-amber-700', accent: 'text-amber-600' },
                      { label: 'Conformidade', value: '96%', bg: 'bg-emerald-50/70', text: 'text-emerald-700', accent: 'text-emerald-600' },
                    ].map((stat) => (
                      <div key={stat.label} className={`p-3 rounded-xl ${stat.bg}`}>
                        <div className={`text-xl font-bold font-display ${stat.accent}`}>{stat.value}</div>
                        <div className={`text-[10px] mt-0.5 ${stat.text} opacity-60`}>{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="bg-surface-50/60 rounded-xl p-3.5 h-32 flex items-end gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm transition-[height] duration-500"
                        style={{
                          height: chartsReady ? `${h}%` : '0%',
                          background: 'linear-gradient(to top, #1c80ae, #7cc4e8)',
                          transitionDelay: `${i * 50}ms`,
                          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                      />
                    ))}
                  </div>

                  {/* Activity rows */}
                  <div className="space-y-2">
                    {[
                      { text: 'Consulta periódica — João Silva', tag: 'Concluída', tagBg: 'bg-emerald-50', tagText: 'text-emerald-700' },
                      { text: 'Auditoria de segurança — Armazém B', tag: 'Em curso', tagBg: 'bg-safemed-50', tagText: 'text-safemed-700' },
                    ].map((row) => (
                      <div key={row.text} className="flex items-center justify-between p-2.5 bg-surface-50/60 rounded-lg">
                        <span className="text-[11px] text-surface-600 font-medium">{row.text}</span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${row.tagBg} ${row.tagText}`}>
                          {row.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-3 -right-3 bg-white rounded-xl border border-surface-200/80 p-2.5 shadow-lg shadow-surface-950/[0.04] animate-fade-in-up" style={{ animationDelay: '1100ms' }}>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-safemed-50 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-safemed-600" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-surface-900">IA Integrada</div>
                    <div className="text-[10px] text-surface-400">Mivo Assistant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
