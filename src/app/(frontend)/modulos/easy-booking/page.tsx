import type { Metadata } from 'next'
import { ModulePage } from '@/components/modules/ModulePage'

export const metadata: Metadata = {
  title: 'Easy Booking',
  description:
    'Auto-agendamento de consultas e exames de saúde no trabalho. Interface intuitiva, notificações automáticas e gestão de disponibilidades com o Easy Booking.',
  openGraph: {
    title: 'Easy Booking — Safemed',
    description:
      'Uma solução de auto-agendamento que revoluciona a gestão dos exames de saúde no trabalho.',
  },
}

const features = [
  {
    icon: 'CalendarCheck',
    title: 'Agendamento Simplificado',
    description:
      'Interface intuitiva para marcar consultas e exames em poucos cliques, sem intervenção de terceiros.',
  },
  {
    icon: 'CalendarClock',
    title: 'Gestão de Disponibilidades',
    description:
      'Integração com horários de profissionais e salas para otimizar recursos e evitar conflitos de agenda.',
  },
  {
    icon: 'BellRing',
    title: 'Notificações Automatizadas',
    description:
      'Lembretes por email ou SMS para confirmar ou alterar agendamentos, relembrando a altura indicada para agendar exame.',
  },
  {
    icon: 'Activity',
    title: 'Acompanhamento em Tempo Real',
    description:
      'Atualizações instantâneas sobre marcações e estados de eventos, para total visibilidade do processo.',
  },
]

export default function EasyBookingPage() {
  return (
    <ModulePage
      title="Easy Booking"
      subtitle="Uma solução de auto-agendamento que revoluciona a gestão dos exames de saúde no trabalho."
      description="O Easy Booking do Safemed simplifica o processo de agendamento de consultas, exames e outros eventos. Com uma interface intuitiva, permite gerir marcações de forma rápida e eficiente, integrando horários de profissionais, salas e recursos disponíveis."
      heroImage="/images/about/about-office-2.jpg"
      heroImageAlt="Easy Booking - Agendamento Simplificado"
      features={features}
      featuresHeading="Agendamento inteligente e eficiente"
      featuresSubheading="Da marcação à confirmação, todo o processo de agendamento é simplificado e automatizado."
      highlight={{
        heading: 'O auto-agendamento pode reduzir até 60% o tempo de gestão administrativa?',
        text: 'Com o Easy Booking, os trabalhadores podem agendar os seus próprios exames de saúde no trabalho de forma autónoma, respeitando as obrigatoriedades legais e libertando tempo à equipa administrativa.',
        bullets: [
          'Agendamento autónomo pelo trabalhador',
          'Cumprimento automático de prazos legais',
          'Lembretes por SMS e email',
        ],
      }}
    />
  )
}
