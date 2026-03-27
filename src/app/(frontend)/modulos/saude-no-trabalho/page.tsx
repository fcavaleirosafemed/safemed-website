import type { Metadata } from 'next'
import { ModulePage } from '@/components/modules/ModulePage'

export const metadata: Metadata = {
  title: 'Saúde no Trabalho',
  description:
    'Fichas clínicas parametrizáveis, aptidões digitais, agendamentos e assinatura digital certificada. Gestão integrada de saúde ocupacional com o Safemed.',
  openGraph: {
    title: 'Saúde no Trabalho — Safemed',
    description:
      'Um software adaptado para responder a todas as necessidades de Saúde do Trabalho e dos seus trabalhadores.',
  },
}

const features = [
  {
    icon: 'FileText',
    title: 'Ficha Clínica Parametrizável',
    description:
      'Todo o processo clínico do trabalhador num único local, de forma dinâmica. O Safemed permite a parametrização da Ficha Clínica consoante as necessidades do corpo clínico.',
  },
  {
    icon: 'ClipboardCheck',
    title: 'Ficha de Aptidão Digital',
    description:
      'Acabe com o papel digitalizando na totalidade a ficha de aptidão para o trabalho. Todo o preenchimento é feito de forma digital, permitindo a recolha de assinatura dos diversos intervenientes.',
  },
  {
    icon: 'CalendarClock',
    title: 'Agendamentos',
    description:
      'Com o Safemed, as fichas de aptidão expiradas deixam de ser uma realidade. Alertas para agendamentos e convocatórias por e-mail ou SMS automatizado.',
  },
  {
    icon: 'CalendarDays',
    title: 'Gestão de Calendários de Médicos e Enfermeiros',
    description:
      'Faça a gestão dos calendários dos profissionais de saúde, registando disponibilidades para otimizar a eficiência dos agendamentos.',
  },
  {
    icon: 'ShieldAlert',
    title: 'Riscos por Posto de Trabalho',
    description:
      'Visão imediata dos riscos a que o trabalhador está exposto, transpondo-os automaticamente para a ficha de aptidão. Informação disponível para médico, técnico e trabalhador.',
  },
  {
    icon: 'History',
    title: 'Histórico de Consultas',
    description:
      'Perceba todas as consultas e exames executados num determinado período, por quem e qual o seu resultado. Acompanhamento rápido e direto.',
  },
  {
    icon: 'PenTool',
    title: 'Assinatura Digital Certificada',
    description:
      'Assinatura com cartão de cidadão, cartão da Ordem dos Médicos e mesas digitalizadoras. Acabe com as fichas de aptidão em papel.',
  },
  {
    icon: 'MessageSquare',
    title: 'Notificação por SMS',
    description:
      'Envie, com apenas um clique, um SMS a todos os trabalhadores com consulta/exames agendados. Envio de lembretes de agendamentos já efetuados.',
  },
  {
    icon: 'Clock',
    title: 'Declarações de Presença',
    description:
      'Emissão de documento com formato editável, contendo a hora de chegada e de saída do trabalhador no local da consulta ou exame.',
  },
]

export default function SaudeNoTrabalhoPage() {
  return (
    <ModulePage
      title="Saúde no Trabalho"
      subtitle="Um software adaptado para responder a todas as necessidades de Saúde do Trabalho e dos seus trabalhadores."
      description="A saúde no trabalho tem como objetivo salvaguardar o bem-estar global dos trabalhadores, abordando fatores físicos, mentais e sociais no ambiente laboral. Procura também identificar e mitigar riscos ocupacionais, promovendo práticas seguras."
      heroImage="/images/modules/saude-trabalho-hero.jpg"
      heroImageAlt="Saúde no Trabalho - Safemed"
      features={features}
      featuresHeading="Tudo o que precisa para gerir a saúde ocupacional"
      featuresSubheading="Desde fichas clínicas até assinatura digital, o Safemed cobre todas as áreas da saúde no trabalho."
      highlight={{
        heading: 'A digitalização da ficha de aptidão reduz até 80% o tempo administrativo?',
        text: 'Com o Safemed, o trabalhador pode aceder à sua ficha de aptidão de forma totalmente digital, sem intervenção de terceiros. Toda a assinatura é feita eletronicamente, eliminando o papel e acelerando o processo.',
        bullets: [
          'Assinatura com Cartão de Cidadão',
          'Notificação automática por SMS e email',
          'Acesso direto pelo trabalhador',
        ],
      }}
    />
  )
}
