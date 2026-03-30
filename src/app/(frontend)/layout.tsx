import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MivoChatWidget } from '@/components/chat/MivoChatWidget'
import { CookieConsent } from '@/components/ui/CookieConsent'
import { TrackingLoader } from '@/components/tracking/TrackingLoader'
import { VisitorTracker } from '@/components/tracking/VisitorTracker'

export const metadata: Metadata = {
  title: {
    default: 'Safemed — Software de Segurança e Saúde no Trabalho',
    template: '%s — Safemed',
  },
  description: 'Plataforma líder em software de segurança e saúde ocupacional. Gestão integrada de saúde no trabalho, segurança, EPI, produtos químicos e muito mais.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://safemed.solutions'),
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    siteName: 'Safemed',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-surface-900 font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MivoChatWidget />
        <CookieConsent />
        <TrackingLoader />
        <VisitorTracker />
      </body>
    </html>
  )
}
