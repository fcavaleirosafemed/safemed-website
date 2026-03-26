import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Termos de Utilização',
  description: 'Termos e condições de utilização do website e serviços Safemed.',
}

export default function TermosPage() {
  return (
    <section className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-safemed-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>

        <h1 className="text-3xl lg:text-4xl font-display font-bold tracking-tight text-surface-950 mb-8">
          Termos de Utilização
        </h1>

        <div className="prose prose-surface max-w-none">
          <p className="text-lg text-surface-500 leading-relaxed">
            Estes termos regulam a utilização do website e dos serviços prestados pela Safemed.
          </p>

          <div className="mt-8 bg-surface-50 rounded-2xl p-8 text-center">
            <p className="text-surface-400 text-sm">
              Termos de utilização detalhados em preparação.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-surface-900 text-white text-sm font-semibold rounded-full hover:bg-surface-800 transition-colors"
            >
              Contactar para mais informações
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
