import { getPayload } from 'payload'
import config from '@payload-config'
import { CarreirasPageClient } from '@/components/pages/CarreirasPageClient'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

async function getContent() {
  try {
    const payload = await getPayload({ config })
    const [content, positionsResult] = await Promise.all([
      payload.findGlobal({ slug: 'page-content' }),
      payload.find({
        collection: 'job-positions',
        where: { active: { equals: true } },
        sort: 'order',
        limit: 50,
      }),
    ])
    return { content: content as any, positions: positionsResult.docs }
  } catch {
    return { content: null, positions: [] }
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const { content } = await getContent()
  return {
    title: content?.carreirasHeroTitle || 'Carreiras — Safemed',
    description: content?.carreirasHeroDescription || 'Junte-se à equipa Safemed. Estamos a construir o futuro da segurança e saúde no trabalho.',
  }
}

export default async function CarreirasPage() {
  const { content, positions: rawPositions } = await getContent()

  const positions = (rawPositions as any[]).map((p: any) => ({
    title: p.title,
    department: p.department,
    location: p.location,
    type: p.type,
    description: p.description,
    responsibilities: p.responsibilities,
    requirements: p.requirements,
  }))

  return (
    <CarreirasPageClient
      heroTitle={content?.carreirasHeroTitle}
      heroDescription={content?.carreirasHeroDescription}
      heroImage={content?.carreirasHeroImage}
      cultureHeading={content?.carreirasCultureHeading}
      cultureSubheading={content?.carreirasCultureSubheading}
      cultureValues={content?.carreirasCultureValues}
      benefitsTitle={content?.carreirasBenefitsTitle}
      benefitsImage={content?.carreirasBenefitsImage}
      benefits={content?.carreirasBenefits}
      positionsHeading={content?.carreirasPositionsHeading}
      positions={positions.length > 0 ? positions : undefined}
      ctaTitle={content?.carreirasCtaTitle}
      ctaText={content?.carreirasCtaText}
      ctaEmail={content?.carreirasCtaEmail}
    />
  )
}
