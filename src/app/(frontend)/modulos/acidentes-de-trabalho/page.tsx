import type { Metadata } from 'next'
import { ModulePage } from '@/components/modules/ModulePage'

export const metadata: Metadata = {
  title: 'Acidentes de Trabalho',
  description:
    'Registo completo, investigação, rastreabilidade e relatórios personalizados de acidentes de trabalho. Gestão eficaz com o Safemed.',
  openGraph: {
    title: 'Acidentes de Trabalho — Safemed',
    description:
      'Gestão dos acidentes de forma fácil e eficaz com documentação detalhada e integração com outros módulos.',
  },
}

const features = [
  {
    icon: 'FileWarning',
    title: 'Registo Completo de Acidentes',
    description:
      'Documentação detalhada de cada incidente, incluindo data, local e descrição, além de campos adicionais para futuro tratamento estatístico.',
  },
  {
    icon: 'Pencil',
    title: 'Edição e Atualizações',
    description:
      'Permite alterações a registos existentes e acompanhamento por diversos intervenientes, garantindo a precisão da informação.',
  },
  {
    icon: 'FileSearch',
    title: 'Relatórios de Investigação Personalizados',
    description:
      'Geração de relatórios de investigação de acidentes e documentação relevante para acompanhamento de participações.',
  },
  {
    icon: 'Link2',
    title: 'Integração com Outros Módulos',
    description:
      'Ligação direta com ferramentas de segurança e saúde, garantindo uma gestão centralizada e eficiente de todos os processos.',
  },
]

export default function AcidentesDeTrabalhoPage() {
  return (
    <ModulePage
      title="Acidentes de Trabalho"
      subtitle="Gestão dos acidentes de forma fácil e eficaz."
      description="O módulo de acidentes de trabalho do Safemed é uma ferramenta robusta e intuitiva que permite a gestão eficaz de registos e análise de incidentes no local de trabalho. Inclui documentação detalhada, edição de dados, rastreabilidade de alterações e geração de relatórios personalizados."
      heroImage="/images/modules/modulos-hero-meeting.jpg"
      heroImageAlt="Acidentes de Trabalho - Safemed"
      features={features}
      featuresHeading="Registo, análise e prevenção de acidentes"
      featuresSubheading="Ferramentas completas para gerir todo o ciclo de vida de um acidente de trabalho."
      highlight={{
        heading: 'A rastreabilidade completa de alterações garante total transparência?',
        text: 'Cada alteração a um registo de acidente é documentada automaticamente, permitindo saber quem fez o quê e quando. Esta funcionalidade facilita o acompanhamento e a implementação de medidas preventivas eficazes.',
        stats: [
          { value: '100%', label: 'Rastreabilidade' },
          { value: 'Real-time', label: 'Atualizações' },
          { value: '360°', label: 'Visão integrada' },
        ],
      }}
    />
  )
}
