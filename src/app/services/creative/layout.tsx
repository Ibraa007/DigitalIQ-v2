import type { Metadata } from 'next'

const BASE_URL = 'https://digitaliq.agency'

export const metadata: Metadata = {
  title: 'Creative Engine — Performance-Aware Creative System',
  description:
    'DigitalIQ\'s Creative Engine builds messaging frameworks and content that move audiences — not aesthetics. Creative held accountable for what it does, not how it looks.',
  alternates: { canonical: `${BASE_URL}/services/creative` },
  openGraph: {
    title: 'Creative Engine — Performance-Aware Creative System | DigitalIQ',
    description:
      'Not content production. A structured creative system where every asset is built with a role inside the larger growth model.',
    url: `${BASE_URL}/services/creative`,
    type: 'website',
  },
  twitter: {
    title: 'Creative Engine | DigitalIQ',
    description: 'Creativity held accountable — not for how it looks, but for what it does.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Creative Engine',
  alternateName: 'Creative Marketing Agency Egypt',
  description:
    'A performance-aware creative system built to shape perception, influence decisions, and turn attention into measurable action for Egyptian and MENA brands.',
  provider: { '@type': 'Organization', name: 'DigitalIQ', url: BASE_URL },
  areaServed: [
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'AdministrativeArea', name: 'MENA' },
  ],
  serviceType: 'Creative Marketing',
  url: `${BASE_URL}/services/creative`,
}

export default function CreativeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  )
}
