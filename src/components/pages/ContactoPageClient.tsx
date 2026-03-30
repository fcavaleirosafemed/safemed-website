'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Globe,
  ExternalLink,
  Facebook,
  Linkedin,
  Youtube,
} from 'lucide-react'

function resolveImage(img: any, fallback: string): string {
  if (!img) return fallback
  if (typeof img === 'object' && img.url) return img.url
  if (typeof img === 'string') return img
  return fallback
}

export interface ContactoPageProps {
  heroTitle?: string
  heroDescription?: string
  email?: string
  phone?: string
  address?: string
  partnerName?: string
  partnerDescription?: string
  partnerWebsite?: string
  partnerEmail?: string
  partnerPhone?: string
  mapEmbed?: string
}

export function ContactoPageClient({
  heroTitle = 'Fale connosco',
  heroDescription = 'Quer saber mais sobre o Safemed ou pedir uma demonstração? Estamos disponíveis para ajudar.',
  email = 'info@safemed.solutions',
  phone = '+351 22 093 00 55',
  address = 'Rua de Azevedo Coutinho 39, 4100-100 Porto',
  partnerName = 'BesTeam',
  partnerDescription = 'O nosso parceiro na Suíça para o mercado de SST europeu. A BesTeam complementa a nossa oferta com serviços de consultoria e implementação no mercado helvético.',
  partnerWebsite = 'https://www.besteam.ch',
  partnerEmail = 'mjanelas@besteam.ch',
  partnerPhone = '+41 79 276 67 04',
  mapEmbed = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.5!2d-8.6308!3d41.1537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464e18b21e92b%3A0x0!2sRua+de+Azevedo+Coutinho+39%2C+Porto!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt',
}: ContactoPageProps) {
  const [formState, setFormState] = useState({
    name: '', email: '', company: '', phone: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.removeProperty('opacity')
            el.classList.add('animate-fade-in-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    sectionsRef.current.forEach((el) => {
      if (el) { el.style.opacity = '0'; observer.observe(el) }
    })
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="animate-fade-in-up">
              <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">Contacto</span>
              <h1 className="mt-3 text-4xl lg:text-5xl font-display font-bold tracking-tight text-surface-950">{heroTitle}</h1>
              <p className="mt-6 text-lg text-surface-500 leading-relaxed max-w-lg">{heroDescription}</p>
              <div className="mt-12 space-y-6">
                <a href={`mailto:${email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-safemed-50 flex items-center justify-center group-hover:bg-safemed-100 transition-colors"><Mail className="w-5 h-5 text-safemed-600" /></div>
                  <div><div className="text-sm font-medium text-surface-900">Email</div><div className="text-sm text-surface-500">{email}</div></div>
                </a>
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-safemed-50 flex items-center justify-center group-hover:bg-safemed-100 transition-colors"><Phone className="w-5 h-5 text-safemed-600" /></div>
                  <div><div className="text-sm font-medium text-surface-900">Telefone</div><div className="text-sm text-surface-500">{phone}</div></div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-safemed-50 flex items-center justify-center"><MapPin className="w-5 h-5 text-safemed-600" /></div>
                  <div><div className="text-sm font-medium text-surface-900">Morada</div><div className="text-sm text-surface-500">{address}</div></div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-surface-200">
                <div className="text-sm font-medium text-surface-900 mb-4">Siga-nos</div>
                <div className="flex items-center gap-3">
                  <a href="https://www.facebook.com/safemedSolutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-surface-100 flex items-center justify-center hover:bg-safemed-50 hover:text-safemed-600 transition-colors text-surface-500" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
                  <a href="https://www.linkedin.com/company/safemed-solutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-surface-100 flex items-center justify-center hover:bg-safemed-50 hover:text-safemed-600 transition-colors text-surface-500" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
                  <a href="https://www.youtube.com/@safemedSolutions" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-surface-100 flex items-center justify-center hover:bg-safemed-50 hover:text-safemed-600 transition-colors text-surface-500" aria-label="YouTube"><Youtube className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {submitted ? (
                <div className="bg-emerald-50 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6"><Send className="w-7 h-7 text-emerald-600" /></div>
                  <h3 className="text-xl font-display font-bold text-surface-900 mb-2">Mensagem Enviada!</h3>
                  <p className="text-surface-600">Entraremos em contacto consigo brevemente.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-surface-50 rounded-2xl p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-surface-700 mb-1.5">Nome *</label><input type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-4 py-3 bg-white rounded-xl border border-surface-200 text-sm focus:outline-none focus:ring-2 focus:ring-safemed-200 focus:border-safemed-300 transition-all" /></div>
                    <div><label className="block text-sm font-medium text-surface-700 mb-1.5">Email *</label><input type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-4 py-3 bg-white rounded-xl border border-surface-200 text-sm focus:outline-none focus:ring-2 focus:ring-safemed-200 focus:border-safemed-300 transition-all" /></div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-surface-700 mb-1.5">Empresa</label><input type="text" value={formState.company} onChange={(e) => setFormState({ ...formState, company: e.target.value })} className="w-full px-4 py-3 bg-white rounded-xl border border-surface-200 text-sm focus:outline-none focus:ring-2 focus:ring-safemed-200 focus:border-safemed-300 transition-all" /></div>
                    <div><label className="block text-sm font-medium text-surface-700 mb-1.5">Telefone</label><input type="tel" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} className="w-full px-4 py-3 bg-white rounded-xl border border-surface-200 text-sm focus:outline-none focus:ring-2 focus:ring-safemed-200 focus:border-safemed-300 transition-all" /></div>
                  </div>
                  <div><label className="block text-sm font-medium text-surface-700 mb-1.5">Mensagem</label><textarea rows={5} value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} placeholder="Descreva como podemos ajudar..." className="w-full px-4 py-3 bg-white rounded-xl border border-surface-200 text-sm focus:outline-none focus:ring-2 focus:ring-safemed-200 focus:border-safemed-300 transition-all resize-none" /></div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-900 text-white font-semibold rounded-xl hover:bg-surface-800 transition-colors active:scale-[0.99]">Enviar Mensagem <ArrowRight className="w-4 h-4" /></button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Swiss Partner */}
      <section className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={(el) => { sectionsRef.current[0] = el }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-sm font-semibold text-safemed-600 tracking-wide uppercase">Parceiro Internacional</span>
              <h2 className="mt-3 text-2xl lg:text-3xl font-display font-bold tracking-tight text-surface-950">Suíça - {partnerName}</h2>
            </div>
            <div className="bg-white rounded-xl border border-surface-200/80 p-8 lg:p-10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-safemed-50 flex items-center justify-center shrink-0"><Globe className="w-6 h-6 text-safemed-600" /></div>
                <div>
                  <h3 className="text-lg font-display font-bold text-surface-950 mb-2">{partnerName}</h3>
                  <p className="text-surface-500 text-sm leading-relaxed mb-6">{partnerDescription}</p>
                  <div className="space-y-3">
                    {partnerWebsite && <a href={partnerWebsite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-surface-600 hover:text-safemed-600 transition-colors"><ExternalLink className="w-4 h-4 shrink-0" />{partnerWebsite.replace('https://', '')}</a>}
                    {partnerEmail && <a href={`mailto:${partnerEmail}`} className="flex items-center gap-3 text-sm text-surface-600 hover:text-safemed-600 transition-colors"><Mail className="w-4 h-4 shrink-0" />{partnerEmail}</a>}
                    {partnerPhone && <a href={`tel:${partnerPhone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-surface-600 hover:text-safemed-600 transition-colors"><Phone className="w-4 h-4 shrink-0" />{partnerPhone}</a>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={(el) => { sectionsRef.current[1] = el }}>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-display font-bold tracking-tight text-surface-950">Onde estamos</h2>
            <p className="mt-2 text-surface-500">{address}, Portugal</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-surface-200/80 shadow-lg">
            <iframe src={mapEmbed} width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização Safemed - Porto" />
          </div>
        </div>
      </section>
    </>
  )
}
