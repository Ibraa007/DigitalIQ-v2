import type { Metadata } from 'next'

const BASE_URL = 'https://digitaliq.agency'

export const metadata: Metadata = {
  title: 'Influence Engine — Strategic Influencer Marketing',
  description:
    'DigitalIQ\'s Influence Engine connects brands with aligned voices — structured influencer campaigns designed to build real authority and trust, not just reach and awareness.',
  alternates: { canonical: `${BASE_URL}/services/influence` },
  openGraph: {
    title: 'Influence Engine — Strategic Influencer Marketing | DigitalIQ',
    description:
      'Not influencer discovery. An influence system — structured around brand alignment, commercial intent, and measurable authority building.',
    url: `${BASE_URL}/services/influence`,
    type: 'website',
  },
  twitter: {
    title: 'Influence Engine | DigitalIQ',
    description: 'Influencer marketing built on alignment and commercial intent — not just reach.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Influence Engine',
  alternateName: 'Influencer Marketing Agency Egypt',
  description:
    'A strategic influence system that connects Egyptian brands with aligned voices — campaigns designed to build trust, authority, and measurable commercial outcomes.',
  provider: { '@type': 'Organization', name: 'DigitalIQ', url: BASE_URL },
  areaServed: [
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'AdministrativeArea', name: 'MENA' },
  ],
  serviceType: 'Influencer Marketing',
  url: `${BASE_URL}/services/influence`,
}

export default function InfluenceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  )
}
