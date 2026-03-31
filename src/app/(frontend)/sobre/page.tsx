import { getPayload } from 'payload'
import config from '@payload-config'
import { SobrePageClient } from '@/components/pages/SobrePageClient'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

async function getContent() {
  try {
    const payload = await getPayload({ config })
    return await payload.findGlobal({ slug: 'page-content' }) as any
  } catch {
    return null
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent()
  return {
    title: content?.sobreHeroTitle || 'Sobre Nós — Safemed',
    description: content?.sobreHeroDescription || 'A Safemed Solutions é uma empresa jovem e inovadora, especialista em soluções SaaS de gestão de saúde, segurança e bem-estar no trabalho.',
  }
}

export default async function SobrePage() {
  const content = await getContent()

  return (
    <SobrePageClient
      heroLabel={content?.sobreHeroLabel}
      heroTitle={content?.sobreHeroTitle}
      heroDescription={content?.sobreHeroDescription}
      heroImage={content?.sobreHeroImage}
      missionTitle={content?.sobreMissionTitle}
      missionText1={content?.sobreMissionText1}
      missionText2={content?.sobreMissionText2}
      missionImage={content?.sobreMissionImage}
      stats={content?.sobreStats}
      valuesHeading={content?.sobreValuesHeading}
      values={content?.sobreValues}
      versionsHeading={content?.sobreVersionsHeading}
      versionsSubheading={content?.sobreVersionsSubheading}
      versions={content?.sobreVersions}
      teamTitle={content?.sobreTeamTitle}
      teamText1={content?.sobreTeamText1}
      teamText2={content?.sobreTeamText2}
      teamImage={content?.sobreTeamImage}
      ctaTitle={content?.sobreCtaTitle}
      ctaText={content?.sobreCtaText}
    />
  )
}
