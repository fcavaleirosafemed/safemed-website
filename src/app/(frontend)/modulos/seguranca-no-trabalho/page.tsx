import type { Metadata } from 'next'
import { ModulePage } from '@/components/modules/ModulePage'

export const metadata: Metadata = {
  title: 'Segurança no Trabalho',
  description:
    'Auditorias, relatórios parametrizáveis, gestão de EPI, acidentes e medidas de autoproteção. Gestão completa da segurança ocupacional com o Safemed.',
  openGraph: {
    title: 'Segurança no Trabalho — Safemed',
    description:
      'Um software dinâmico para dar resposta às maiores necessidades de Segurança do Trabalho na sua empresa.',
  },
}

const features = [
  {
    icon: 'ClipboardList',
    title: 'Gestão de Auditorias',
    description:
      'Controlo de auditorias e do plano anual de atividades. Auditorias de avaliação de risco, conformidades, avaliação de máquinas e muitos outros tipos, sempre em dia.',
  },
  {
    icon: 'CalendarClock',
    title: 'Agendamentos',
    description:
      'Alerta para convocatórias a executar de acordo com as regras legais. Mecanismo inteligente de gestão de agendamentos por drag&drop, por médico, enfermeiro ou sala.',
  },
  {
    icon: 'MapPin',
    title: 'Mapa com Localização Geográfica de Visitas',
    description:
      'Visualize facilmente todos os agendamentos para determinado dia e deixe que o Safemed lhe diga qual a rota mais eficaz, poupando tempo e dinheiro.',
  },
  {
    icon: 'FileBarChart',
    title: 'Relatórios Parametrizáveis',
    description:
      'Sistematize os relatórios de risco, conformidade e outros consoante os objetivos e necessidades da sua empresa. Visualize os dados em tempo real.',
  },
  {
    icon: 'Bell',
    title: 'Notificação de Marcação de Visitas e Auditorias',
    description:
      'Saiba que atividades desempenhar, quando e onde. Notificações automáticas para melhor gestão da agenda dos Técnicos de Segurança.',
  },
  {
    icon: 'Paperclip',
    title: 'Anexação de Documentos',
    description:
      'Armazene e organize toda a documentação de Segurança da empresa de forma intuitiva. Anexe e disponibilize documentos diretamente no sistema.',
  },
  {
    icon: 'HardHat',
    title: 'Gestão de EPI',
    description:
      'Gestão de atribuição de EPI pelos trabalhadores. Relação entre EPI, Posto de Trabalho e Tarefa. Produção de documento de receção com assinatura.',
  },
  {
    icon: 'AlertTriangle',
    title: 'Gestão de Acidentes de Trabalho',
    description:
      'Caracterização e registo de acidentes e incidentes de trabalho. Fluxos de aprovação, produção de relatório e registo pelo trabalhador.',
  },
  {
    icon: 'Shield',
    title: 'Gestão de Medidas de Auto Proteção',
    description:
      'Criação do plano de medidas de autoproteção, registos dinâmicos, acompanhamento de vistorias, formações e simulacros.',
  },
]

export default function SegurancaNoTrabalhoPage() {
  return (
    <ModulePage
      title="Segurança no Trabalho"
      subtitle="Um software dinâmico para dar resposta às maiores necessidades de Segurança do Trabalho na sua empresa."
      description="A segurança no trabalho visa identificar, avaliar e controlar riscos que possam causar acidentes, lesões ou danos à saúde dos trabalhadores. Através de normas, procedimentos e formação, cria ambientes de trabalho mais seguros."
      heroImage="/images/modules/seguranca-trabalho-hero.jpg"
      heroImageAlt="Segurança no Trabalho - Safemed"
      features={features}
      featuresHeading="Gestão completa da segurança ocupacional"
      featuresSubheading="De auditorias a medidas de autoproteção, todas as ferramentas de que precisa para garantir a segurança."
      highlight={{
        heading: 'O planeamento inteligente de rotas pode poupar até 30% em deslocações?',
        text: 'Com o mapa de visitas do Safemed, os técnicos de segurança podem visualizar todas as visitas agendadas e otimizar as rotas automaticamente, reduzindo custos e tempo de deslocação.',
        bullets: [
          'Rotas otimizadas com geolocalização',
          'Drag&drop para gestão de agendamentos',
          'Notificações automáticas para todas as partes',
        ],
      }}
    />
  )
}
