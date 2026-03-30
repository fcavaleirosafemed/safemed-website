import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { ModulePage } from '@/components/modules/ModulePage'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ slug: string }>
}

async function getService(slug: string) {
  const payload = await getPayload({ config })
  const result = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return result.docs[0] || null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = await getService(slug)
  if (!service) return { title: 'Módulo não encontrado' }

  return {
    title: service.title,
    description: service.excerpt,
    openGraph: {
      title: `${service.title} — Safemed`,
      description: service.subtitle || service.excerpt,
    },
  }
}

export default async function ModuloPage({ params }: Props) {
  const { slug } = await params
  const service = await getService(slug)
  if (!service) notFound()

  // Resolve hero image: prefer CMS upload, fallback to URL field, then default
  const heroImageSrc =
    (typeof service.heroImage === 'object' && service.heroImage?.url) ||
    service.heroImageUrl ||
    '/images/modules/modulos-hero-meeting.jpg'

  // Map Payload data to ModulePage props
  const features = (service.features || []).map((f: any) => ({
    icon: f.icon || 'FileText',
    title: f.title,
    description: f.description || '',
  }))

  const highlight = service.highlight?.heading
    ? {
        heading: service.highlight.heading,
        text: service.highlight.text || '',
        bullets: (service.highlight.bullets || []).map((b: any) => b.text),
      }
    : undefined

  return (
    <ModulePage
      title={service.title}
      subtitle={service.subtitle || service.excerpt}
      description={service.descriptionText || ''}
      heroImage={heroImageSrc}
      heroImageAlt={`${service.title} - Safemed`}
      features={features}
      featuresHeading={service.featuresHeading || `Funcionalidades de ${service.title}`}
      featuresSubheading={service.featuresSubheading || ''}
      highlight={highlight}
    />
  )
}
