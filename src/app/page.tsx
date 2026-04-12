import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import WhySystem from '@/components/home/WhySystem'
import MethodPreview from '@/components/home/MethodPreview'
import EnginesOverview from '@/components/home/EnginesOverview'
import WhatChanges from '@/components/home/WhatChanges'
import SystemCTA from '@/components/home/SystemCTA'

export const metadata: Metadata = {
  // Bypass the `%s | DigitalIQ` template for the home page
  title: { absolute: 'DigitalIQ — Marketing Built on Structure' },
  description:
    'DigitalIQ is Egypt\'s structured marketing agency. Five specialized engines — Performance, Creative, Social, Influence, and AI Automation — coordinated by one Intelligence Layer. Built for brands ready to compound.',
  alternates: { canonical: 'https://digitaliq.agency' },
  openGraph: {
    url: 'https://digitaliq.agency',
    title: 'DigitalIQ — Marketing Built on Structure',
    description:
      'Five engines. One intelligence layer. Built for Egyptian brands that are done guessing and ready for a system that compounds.',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhySystem />
      <MethodPreview />
      <EnginesOverview />
      <WhatChanges />
      <SystemCTA />
    </>
  )
}
