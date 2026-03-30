import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { ModulePage } from '@/components/modules/ModulePage'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ slug: string }>
}

/** Normalize slug: remove accents so URL without accents matches CMS slug with accents */
function normalizeSlug(s: string): string {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

async function getIndustry(slug: string) {
  const payload = await getPayload({ config })

  // First try exact match
  let result = await payload.find({
    collection: 'industries',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  // If not found, try matching with normalized slugs (handles accents)
  if (result.docs.length === 0) {
    const all = await payload.find({ collection: 'industries', limit: 50 })
    const normalized = normalizeSlug(slug)
    const match = all.docs.find((d) => normalizeSlug(d.slug) === normalized)
    if (match) return match
  }

  return result.docs[0] || null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const industry = await getIndustry(slug)
  if (!industry) return { title: 'Setor não encontrado' }

  return {
    title: industry.title,
    description: industry.excerpt || industry.subtitle,
    openGraph: {
      title: `${industry.title} — Safemed`,
      description: industry.subtitle || industry.excerpt || '',
    },
  }
}

export default async function SetorPage({ params }: Props) {
  const { slug } = await params
  const industry = await getIndustry(slug)
  if (!industry) notFound()

  // Resolve hero image: prefer CMS upload, fallback to URL field, then default
  const heroImageSrc =
    (typeof industry.heroImage === 'object' && (industry as any).heroImage?.url) ||
    (industry as any).heroImageUrl ||
    '/images/modules/modulos-hero-meeting.jpg'

  // Map Payload data to ModulePage props
  const features = ((industry as any).features || []).map((f: any) => ({
    icon: f.icon || 'FileText',
    title: f.title,
    description: f.description || '',
  }))

  const highlight = (industry as any).highlight?.heading
    ? {
        heading: (industry as any).highlight.heading,
        text: (industry as any).highlight.text || '',
        bullets: ((industry as any).highlight.bullets || []).map((b: any) => b.text),
      }
    : undefined

  return (
    <ModulePage
      title={industry.title}
      subtitle={(industry as any).subtitle || industry.excerpt || ''}
      description={(industry as any).descriptionText || ''}
      heroImage={heroImageSrc}
      heroImageAlt={`${industry.title} - Safemed`}
      features={features}
      featuresHeading={(industry as any).featuresHeading || `Funcionalidades para ${industry.title}`}
      featuresSubheading={(industry as any).featuresSubheading || ''}
      highlight={highlight}
      label="Setor"
      backHref="/setores"
      backLabel="Todos os setores"
    />
  )
}
