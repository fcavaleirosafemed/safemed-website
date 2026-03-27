import type { Metadata } from 'next'
import { ModulePage } from '@/components/modules/ModulePage'

export const metadata: Metadata = {
  title: 'Segurança Alimentar',
  description:
    'Agendamentos, mapas de visitas, gestão de rotas, notificações e histórico de visitas para segurança alimentar. Gestão HACCP integrada com o Safemed.',
  openGraph: {
    title: 'Segurança Alimentar — Safemed',
    description:
      'Um software adaptado para responder a todas as necessidades de Segurança Alimentar dos seus clientes.',
  },
}

const features = [
  {
    icon: 'CalendarClock',
    title: 'Agendamentos',
    description:
      'Gestão de todos os agendamentos relacionados com segurança alimentar, garantindo cumprimento dos prazos legais.',
  },
  {
    icon: 'MapPin',
    title: 'Mapa de Visitas',
    description:
      'Visualize facilmente todos os agendamentos para determinado dia e deixe que o Safemed lhe diga qual a rota mais eficaz, poupando tempo e dinheiro.',
  },
  {
    icon: 'Route',
    title: 'Gestão de Visitas Fora de Rota',
    description:
      'Mecanismo inteligente de auto-sugestão para visitas não agendadas dentro de rotas existentes, maximizando eficiência.',
  },
  {
    icon: 'Bell',
    title: 'Notificação de Marcação de Visitas',
    description:
      'Notificações automáticas de marcação de visitas, para uma melhor gestão da agenda dos técnicos.',
  },
  {
    icon: 'Paperclip',
    title: 'Anexação de Documentos',
    description:
      'Aceda a todos os documentos do cliente de forma fácil, intuitiva e preservando o ambiente. Tudo digital.',
  },
  {
    icon: 'History',
    title: 'Histórico de Visitas',
    description:
      'Análise de dados de visitas anteriores, mostrando alterações de valores e acompanhamento de melhorias ao longo do tempo.',
  },
]

export default function SegurancaAlimentarPage() {
  return (
    <ModulePage
      title="Segurança Alimentar"
      subtitle="Um software adaptado para responder a todas as necessidades de Segurança Alimentar dos seus clientes."
      description="A segurança alimentar abrange práticas desde a produção até ao consumo, com ênfase em controlos de higiene, análise de riscos e conformidade regulamentar. O Safemed oferece todas as ferramentas necessárias para uma gestão eficaz."
      heroImage="/images/modules/modulos-hero-meeting.jpg"
      heroImageAlt="Segurança Alimentar - Safemed"
      features={features}
      featuresHeading="Gestão integrada de segurança alimentar"
      featuresSubheading="De agendamentos a histórico de visitas, todas as ferramentas para conformidade HACCP e normas alimentares."
      highlight={{
        heading: 'A otimização de rotas pode reduzir significativamente os custos de deslocação?',
        text: 'O mapa de visitas do Safemed permite planear e otimizar as rotas dos técnicos de segurança alimentar, com sugestões inteligentes para visitas fora de rota e notificações automáticas para todas as partes envolvidas.',
        bullets: [
          'Rotas otimizadas com geolocalização',
          'Sugestões inteligentes para visitas extra',
          'Histórico completo para análise de melhorias',
        ],
      }}
    />
  )
}
