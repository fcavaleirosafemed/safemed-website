'use client'

import { HeroSection } from '@/components/home/HeroSection'
import { TrustBar } from '@/components/home/TrustBar'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { PlatformShowcase } from '@/components/home/PlatformShowcase'
import { StatsSection } from '@/components/home/StatsSection'
import { IndustriesSection } from '@/components/home/IndustriesSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { CTASection } from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <PlatformShowcase />
      <StatsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
