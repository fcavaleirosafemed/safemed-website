'use client'

import Link from 'next/link'
import { SafemedLogo } from '@/components/ui/SafemedLogo'
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  modulos: [
    { name: 'Saúde no Trabalho', href: '/modulos/saude-no-trabalho' },
    { name: 'Segurança no Trabalho', href: '/modulos/seguranca-no-trabalho' },
    { name: 'Acidentes de Trabalho', href: '/modulos/acidentes-de-trabalho' },
    { name: 'Gestão de EPI', href: '/modulos/gestao-epi' },
    { name: 'Produtos Químicos', href: '/modulos/produtos-quimicos' },
    { name: 'My Safemed', href: '/modulos/my-safemed' },
    { name: 'Easy Booking', href: '/modulos/easy-booking' },
    { name: 'Kube Analytics', href: '/modulos/kube' },
  ],
  empresa: [
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Carreiras', href: '/carreiras' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ],
  legal: [
    { name: 'Política de Privacidade', href: '/privacidade' },
    { name: 'Termos de Utilização', href: '/termos' },
    { name: 'Política de Cookies', href: '/cookies' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-surface-950 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-safemed-600/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-safemed-400/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="py-16 border-b border-white/10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">
                Pronto para transformar a
                <br />
                <span className="gradient-text">segurança da sua empresa?</span>
              </h2>
              <p className="mt-4 text-surface-200/60 text-lg max-w-lg">
                Descubra como o Safemed pode simplificar a gestão de SST na sua organização.
              </p>
            </div>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-surface-900 font-semibold rounded-full hover:bg-surface-100 transition-all hover:shadow-xl hover:shadow-white/10 active:scale-[0.98] shrink-0"
            >
              Pedir Demonstração
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <SafemedLogo className="h-8 w-auto" color="#ffffff" />
            </Link>
            <p className="text-sm text-surface-200/50 leading-relaxed mb-6">
              Software líder em segurança e saúde ocupacional em Portugal.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@safemed.solutions" className="flex items-center gap-2 text-sm text-surface-200/60 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@safemed.solutions
              </a>
              <a href="tel:+351220930055" className="flex items-center gap-2 text-sm text-surface-200/60 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +351 22 093 00 55
              </a>
              <p className="flex items-start gap-2 text-sm text-surface-200/60">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                Rua de Azevedo Coutinho 39, 4100-100 Porto
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Módulos</h3>
            <ul className="space-y-2.5">
              {footerLinks.modulos.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-surface-200/50 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-2.5">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-surface-200/50 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-surface-200/50 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-200/40">
            © {new Date().getFullYear()} Safemed. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/5 transition-colors text-surface-200/40 hover:text-white">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
