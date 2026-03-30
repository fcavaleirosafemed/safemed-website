import { getPayload } from 'payload'
import config from '@payload-config'
import { CarreirasPageClient } from '@/components/pages/CarreirasPageClient'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const content = await payload.findGlobal({ slug: 'page-content' }) as any
  return {
    title: content?.carreirasHeroTitle || 'Carreiras — Safemed',
    description: content?.carreirasHeroDescription || 'Junte-se à equipa Safemed. Estamos a construir o futuro da segurança e saúde no trabalho.',
  }
}

export default async function CarreirasPage() {
  const payload = await getPayload({ config })
  const [content, positionsResult] = await Promise.all([
    payload.findGlobal({ slug: 'page-content' }),
    payload.find({
      collection: 'job-positions',
      where: { active: { equals: true } },
      sort: 'order',
      limit: 50,
    }),
  ]) as [any, any]

  const positions = positionsResult.docs.map((p: any) => ({
    title: p.title,
    department: p.department,
    location: p.location,
    type: p.type,
    description: p.description,
    responsibilities: p.responsibilities?.map((r: any) => ({ text: r.text })),
    requirements: p.requirements?.map((r: any) => ({ text: r.text })),
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
