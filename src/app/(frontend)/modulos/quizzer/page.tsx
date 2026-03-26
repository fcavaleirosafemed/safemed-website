import type { Metadata } from 'next'
import { ModulePage } from '@/components/modules/ModulePage'

export const metadata: Metadata = {
  title: 'Quizzer',
  description:
    'Questionários dinâmicos em massa, tratamento estatístico de respostas e consulta anual aos trabalhadores. Envio automatizado com o Safemed Quizzer.',
  openGraph: {
    title: 'Quizzer — Safemed',
    description:
      'Ferramenta de questionários para recolha e análise de dados dos trabalhadores de forma eficiente.',
  },
}

const features = [
  {
    icon: 'FormInput',
    title: 'Questionários Dinâmicos',
    description:
      'Crie os questionários à sua medida, com todos os tipos de campos criados de forma dinâmica e adaptável.',
  },
  {
    icon: 'BarChart3',
    title: 'Tratamento Estatístico de Respostas',
    description:
      'Faça o tratamento estatístico das respostas, obtendo dados organizados e elementos gráficos para ajudar na análise.',
  },
  {
    icon: 'Users',
    title: 'Consulta aos Trabalhadores',
    description:
      'Crie anualmente formulários de consulta aos trabalhadores, disponibilizando-os automaticamente por email.',
  },
  {
    icon: 'Send',
    title: 'Envio Automatizado dos Questionários',
    description:
      'Com a integração direta com a base de dados Safemed, os questionários podem ser disponibilizados de forma automática.',
  },
]

export default function QuizzerPage() {
  return (
    <ModulePage
      title="Quizzer"
      subtitle="Ferramenta de questionários para recolha e análise de dados."
      description="O Quizzer é um addon do Safemed que permite o envio de questionários em massa para os trabalhadores e efetuar o respetivo tratamento de respostas. Ideal para consultas anuais, avaliações de risco e inquéritos de satisfação."
      heroIcon="ClipboardList"
      heroImageAlt="Quizzer - Safemed"
      features={features}
      featuresHeading="Questionários inteligentes e automatizados"
      featuresSubheading="Da criação ao envio e análise, tudo num único fluxo integrado com o Safemed."
      highlight={{
        heading: 'A consulta regular aos trabalhadores é uma obrigação legal?',
        text: 'Com o Quizzer, pode criar e enviar automaticamente os formulários de consulta anual aos trabalhadores, com tratamento estatístico das respostas e gráficos de apoio à análise, cumprindo as obrigações legais de forma simples.',
        bullets: [
          'Campos dinâmicos e personalizáveis',
          'Envio automático por email',
          'Gráficos e estatísticas em tempo real',
        ],
      }}
    />
  )
}
