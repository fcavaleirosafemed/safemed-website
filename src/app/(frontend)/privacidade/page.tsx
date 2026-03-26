import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade da Safemed. Saiba como tratamos os seus dados pessoais.',
}

export default function PrivacidadePage() {
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
          Política de Privacidade
        </h1>

        <div className="prose prose-surface max-w-none">
          <p className="text-lg text-surface-500 leading-relaxed">
            A Safemed compromete-se a proteger a privacidade dos utilizadores do seu website e dos seus serviços.
          </p>

          <div className="mt-8 bg-surface-50 rounded-2xl p-8 text-center">
            <p className="text-surface-400 text-sm">
              Política de privacidade detalhada em preparação.
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
