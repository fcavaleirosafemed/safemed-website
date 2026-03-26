import type { Metadata } from 'next'
import { ModulePage } from '@/components/modules/ModulePage'

export const metadata: Metadata = {
  title: 'Gestão de EPI',
  description:
    'Rastreabilidade, alertas automáticos, integração e otimização de recursos para equipamentos de proteção individual. Gestão completa de EPI com o Safemed.',
  openGraph: {
    title: 'Gestão de EPI — Safemed',
    description:
      'A gestão de atribuições mais fácil e integrada para Equipamentos de Proteção Individual.',
  },
}

const features = [
  {
    icon: 'ScanSearch',
    title: 'Rastreabilidade Completa',
    description:
      'Registo detalhado da distribuição e uso de EPIs por trabalhador, garantindo total controlo sobre cada equipamento atribuído.',
  },
  {
    icon: 'BellRing',
    title: 'Alertas Automáticos',
    description:
      'Notificações para substituição ou renovação de EPIs vencidos, garantindo que nenhum equipamento fica fora de validade.',
  },
  {
    icon: 'Link2',
    title: 'Integração com Restantes Processos',
    description:
      'Ligação com os restantes processos do Safemed de segurança e saúde para uma gestão centralizada e eficiente.',
  },
  {
    icon: 'Recycle',
    title: 'Otimização de Recursos',
    description:
      'Gestão eficiente para evitar desperdícios e assegurar a disponibilidade de EPIs quando e onde são necessários.',
  },
]

export default function GestaoEpiPage() {
  return (
    <ModulePage
      title="Gestão de EPI"
      subtitle="A gestão de atribuições mais fácil e integrada para Equipamentos de Proteção Individual."
      description="O módulo permite às organizações registar, monitorizar e controlar a distribuição de EPIs, garantindo que os trabalhadores tenham o equipamento adequado. Oferece alertas para renovação e substituição, assegura conformidade legal e reduz desperdícios."
      heroImage="/images/modules/modulos-people-leaning.jpg"
      heroImageAlt="Gestão de EPI - Safemed"
      features={features}
      featuresHeading="Controlo total dos equipamentos de proteção"
      featuresSubheading="Da atribuição à substituição, gerencie todo o ciclo de vida dos EPIs de forma inteligente."
      highlight={{
        heading: 'A gestão eficiente de EPIs pode reduzir custos operacionais até 25%?',
        text: 'Com o acompanhamento do ciclo de vida de cada EPI, é possível antecipar substituições, evitar desperdícios e garantir que todos os trabalhadores estão devidamente protegidos, em total conformidade com a legislação vigente.',
        bullets: [
          'Ciclo de vida completo de cada EPI',
          'Conformidade legal garantida',
          'Redução de desperdícios comprovada',
        ],
      }}
    />
  )
}
