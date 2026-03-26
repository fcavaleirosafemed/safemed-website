import type { Metadata } from 'next'
import { ModulePage } from '@/components/modules/ModulePage'

export const metadata: Metadata = {
  title: 'My Safemed',
  description:
    'Portal do trabalhador para consulta de fichas de aptidão, histórico de exames, riscos ocupacionais e reporte de incidentes. Acesso self-service com o My Safemed.',
  openGraph: {
    title: 'My Safemed — Safemed',
    description:
      'Toda a informação na mão dos trabalhadores. Portal self-service para colaboradores.',
  },
}

const features = [
  {
    icon: 'UserCircle',
    title: 'Acesso Personalizado',
    description:
      'Consulta de fichas de aptidão, histórico de exames e pedidos de agendamento diretamente pelo trabalhador.',
  },
  {
    icon: 'MessageCircle',
    title: 'Comunicação Simplificada',
    description:
      'Ferramentas para reportar incidentes e consultar documentos relevantes de forma prática e imediata.',
  },
  {
    icon: 'ShieldAlert',
    title: 'Consulta dos Riscos',
    description:
      'Visualização dos riscos associados ao posto de trabalho e medidas preventivas recomendadas.',
  },
  {
    icon: 'Eye',
    title: 'Capacitação e Transparência',
    description:
      'Promove maior envolvimento e responsabilidade dos trabalhadores na gestão da sua segurança e saúde.',
  },
]

export default function MySafemedPage() {
  return (
    <ModulePage
      title="My Safemed"
      subtitle="Toda a informação na mão dos trabalhadores."
      description="O portal My Safemed é uma plataforma intuitiva e acessível, projetada para envolver diretamente os colaboradores na gestão da sua segurança e saúde no trabalho. Permite acesso a fichas de aptidão, agendamento de consultas, histórico de exames e alertas personalizados."
      heroImage="/images/about/about-office.jpg"
      heroImageAlt="My Safemed - Portal do Trabalhador"
      features={features}
      featuresHeading="O trabalhador no centro da gestão"
      featuresSubheading="Acesso direto à informação de segurança e saúde, promovendo transparência e responsabilidade."
      highlight={{
        heading: 'O envolvimento direto dos trabalhadores melhora a cultura de segurança?',
        text: 'Quando os trabalhadores têm acesso à sua informação e podem reportar incidentes diretamente, a comunicação com a empresa torna-se mais eficiente e a prevenção de riscos mais eficaz.',
        bullets: [
          'Fichas de aptidão acessíveis 24/7',
          'Reporte de incidentes em tempo real',
          'Consulta de riscos do posto de trabalho',
        ],
      }}
    />
  )
}
