import type { Metadata } from 'next'
import { ModulePage } from '@/components/modules/ModulePage'

export const metadata: Metadata = {
  title: 'Kube Analytics',
  description:
    'Recolha e tratamento de dados dos trabalhadores. Estudos epidemiológicos, relatórios avançados, planeamento e sistema de filtros com o Kube Analytics.',
  openGraph: {
    title: 'Kube Analytics — Safemed',
    description:
      'Recolha e tratamento dos dados dos trabalhadores com analytics avançado e relatórios personalizados.',
  },
}

const features = [
  {
    icon: 'History',
    title: 'Histórico Detalhado de Operações',
    description:
      'O que foi feito? Por quem? A execução corresponde com o forecast? Todas as respostas num só lugar.',
  },
  {
    icon: 'CalendarRange',
    title: 'Planeamento Simples',
    description:
      'Onde está o maior atraso na execução de serviços? Quais os distritos/clientes/segmentos mais afetados?',
  },
  {
    icon: 'Microscope',
    title: 'Estudos Epidemiológicos',
    description:
      'Análise detalhada de comportamentos de risco por cliente, com dados cruzados para insights profundos.',
  },
  {
    icon: 'Users',
    title: 'Família Safemed',
    description:
      'Mesmo login, mesma fonte de dados. Integração total com o ecossistema Safemed.',
  },
  {
    icon: 'Plug',
    title: 'Integração',
    description:
      'Possibilidade de integração com outras ferramentas e sistemas de gestão existentes.',
  },
  {
    icon: 'FileBarChart',
    title: 'Relatórios',
    description:
      'Desenvolvimento rápido de novos reports, adaptados às necessidades específicas da sua organização.',
  },
  {
    icon: 'SlidersHorizontal',
    title: 'Sistema de Filtros',
    description:
      'Possibilidade de combinação de inúmeros filtros para análises detalhadas e personalizadas.',
  },
]

export default function KubePage() {
  return (
    <ModulePage
      title="Kube Analytics"
      subtitle="Recolha e tratamento dos dados dos trabalhadores."
      description="O KUBE é uma ferramenta cloud para recolha e tratamento de dados dos trabalhadores. Com dashboards avançados e relatórios personalizáveis, transforma dados em insights acionáveis para a gestão de segurança e saúde ocupacional."
      heroIcon="BarChart3"
      heroImageAlt="Kube Analytics - Safemed"
      features={features}
      featuresHeading="Dados que impulsionam decisões"
      featuresSubheading="De estudos epidemiológicos a relatórios de gestão, o Kube transforma dados em ações."
      additionalBenefits={[
        'Análise detalhada dos dados',
        'Estudos clínicos simplificados',
        'Extração simples de relatórios de gestão',
        'Métricas sobre acidentes de trabalho',
        'Execução de atividades',
        'Aplicação de múltiplos filtros',
      ]}
      highlight={{
        heading: 'A análise de dados pode antecipar riscos antes de se tornarem acidentes?',
        text: 'Com o Kube, é possível identificar padrões e comportamentos de risco através de estudos epidemiológicos, permitindo às organizações tomar medidas preventivas baseadas em dados concretos e não apenas em intuição.',
        stats: [
          { value: 'Cloud', label: 'Plataforma' },
          { value: 'Real-time', label: 'Dados atualizados' },
          { value: '100+', label: 'Tipos de filtros' },
        ],
      }}
    />
  )
}
