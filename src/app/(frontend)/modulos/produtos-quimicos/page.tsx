import type { Metadata } from 'next'
import { ModulePage } from '@/components/modules/ModulePage'

export const metadata: Metadata = {
  title: 'Produtos Químicos',
  description:
    'Fichas de dados de segurança, controlo de exposição CMR, alertas automáticos e integração centralizada. Gestão de produtos químicos com o Safemed.',
  openGraph: {
    title: 'Produtos Químicos — Safemed',
    description:
      'Gestão de produtos químicos de forma integrada e dinâmica, garantindo segurança e conformidade.',
  },
}

const features = [
  {
    icon: 'ClipboardList',
    title: 'Registo Detalhado',
    description:
      'Catalogação completa de produtos químicos com informações essenciais e respetivas fichas de segurança (FDS).',
  },
  {
    icon: 'BellRing',
    title: 'Alertas Automáticos',
    description:
      'Notificações para revisões de fichas, validade de produtos e requisitos legais, garantindo conformidade permanente.',
  },
  {
    icon: 'Users',
    title: 'Controlo de Exposição',
    description:
      'Relação entre produto químico e substâncias perigosas (como CMR) com o posto de trabalho, função e trabalhador.',
  },
  {
    icon: 'Link2',
    title: 'Integração Centralizada',
    description:
      'Ligação direta com outros módulos do Safemed para uma gestão global e eficiente de toda a segurança química.',
  },
]

export default function ProdutosQuimicosPage() {
  return (
    <ModulePage
      title="Produtos Químicos"
      subtitle="Gestão de produtos químicos de forma integrada e dinâmica."
      description="Uma ferramenta essencial para garantir a segurança e conformidade na manipulação de substâncias perigosas. Com funcionalidades avançadas para registo, catalogação, gestão de fichas de segurança e controlo de exposição dos trabalhadores."
      heroIcon="FlaskConical"
      heroImageAlt="Produtos Químicos - Safemed"
      features={features}
      featuresHeading="Segurança química sem compromissos"
      featuresSubheading="Controle total sobre substâncias perigosas, fichas de segurança e exposição dos trabalhadores."
      highlight={{
        heading: 'A correta gestão de substâncias CMR é uma obrigação legal?',
        text: 'Com o Safemed, pode relacionar automaticamente cada produto químico com as substâncias perigosas que contém, o posto de trabalho onde é utilizado e os trabalhadores expostos, garantindo total conformidade regulamentar.',
        bullets: [
          'Fichas de segurança sempre atualizadas',
          'Alertas de validade de produtos',
          'Relação produto-trabalhador-posto de trabalho',
        ],
      }}
    />
  )
}
