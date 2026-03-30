import { getPayload } from 'payload'
import config from '@payload-config'
import { ContactoPageClient } from '@/components/pages/ContactoPageClient'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config })
  const content = await payload.findGlobal({ slug: 'page-content' }) as any
  return {
    title: content?.contactoHeroTitle || 'Contacto — Safemed',
    description: content?.contactoHeroDescription || 'Entre em contacto com a Safemed. Estamos disponíveis para ajudar.',
  }
}

export default async function ContactoPage() {
  const payload = await getPayload({ config })
  const [content, settings] = await Promise.all([
    payload.findGlobal({ slug: 'page-content' }),
    payload.findGlobal({ slug: 'site-settings' }),
  ]) as [any, any]

  return (
    <ContactoPageClient
      heroTitle={content?.contactoHeroTitle}
      heroDescription={content?.contactoHeroDescription}
      email={settings?.email}
      phone={settings?.phone}
      address={settings?.address}
      partnerName={content?.contactoPartnerName}
      partnerDescription={content?.contactoPartnerDescription}
      partnerWebsite={content?.contactoPartnerWebsite}
      partnerEmail={content?.contactoPartnerEmail}
      partnerPhone={content?.contactoPartnerPhone}
      mapEmbed={content?.contactoMapEmbed}
    />
  )
}
