import type { Metadata } from 'next'

const BASE_URL = 'https://digitaliq.agency'

export const metadata: Metadata = {
  title: 'Social Media Engine — Governed Brand Presence',
  description:
    'DigitalIQ\'s Social Engine builds consistent, governed brand presence across social platforms — with structured publishing rhythm, communication discipline, and measurable direction.',
  alternates: { canonical: `${BASE_URL}/services/social` },
  openGraph: {
    title: 'Social Media Engine — Governed Brand Presence | DigitalIQ',
    description:
      'Not a posting service. A communication system — structured to ensure every message reinforces the direction of the brand.',
    url: `${BASE_URL}/services/social`,
    type: 'website',
  },
  twitter: {
    title: 'Social Media Engine | DigitalIQ',
    description: 'Brand presence governed, not improvised — across every platform.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Social Media Engine',
  alternateName: 'Social Media Management Egypt',
  description:
    'A structured social communication system that gives Egyptian brands more consistency, clarity, and control over how they show up across platforms.',
  provider: { '@type': 'Organization', name: 'DigitalIQ', url: BASE_URL },
  areaServed: [
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'AdministrativeArea', name: 'MENA' },
  ],
  serviceType: 'Social Media Marketing',
  url: `${BASE_URL}/services/social`,
}

export default function SocialLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  )
}
