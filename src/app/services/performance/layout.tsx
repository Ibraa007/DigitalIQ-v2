import type { Metadata } from 'next'

const BASE_URL = 'https://digitaliq.agency'

export const metadata: Metadata = {
  title: 'Performance Marketing Engine — Paid Media Built on Structure',
  description:
    'DigitalIQ\'s Performance Engine manages paid media across Meta, Google, TikTok, and Snapchat — structured testing, clear acquisition signals, and compounding results for Egyptian brands.',
  alternates: { canonical: `${BASE_URL}/services/performance` },
  openGraph: {
    title: 'Performance Marketing Engine — Paid Media Built on Structure | DigitalIQ',
    description:
      'Not campaign management. A continuous acquisition system — structured to turn spend into clearer signals, better decisions, and more predictable growth.',
    url: `${BASE_URL}/services/performance`,
    type: 'website',
  },
  twitter: {
    title: 'Performance Marketing Engine | DigitalIQ',
    description:
      'Paid media built on structure. Meta, Google, TikTok, Snapchat — engineered for acquisition, not estimation.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Performance Marketing Engine',
  alternateName: 'Paid Media Management Egypt',
  description:
    'A structured paid media and acquisition system for Egyptian brands — built to turn spend into clearer signals and more predictable growth across Meta, Google, TikTok, and Snapchat.',
  provider: { '@type': 'Organization', name: 'DigitalIQ', url: BASE_URL },
  areaServed: [
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'AdministrativeArea', name: 'MENA' },
  ],
  serviceType: 'Performance Marketing',
  url: `${BASE_URL}/services/performance`,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Performance Engine Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance architecture and media strategy' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cross-platform execution — Meta, Google, TikTok, Snapchat' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structured testing and learning cycles' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Budget and efficiency management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Funnel diagnostics and analytics' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Scaling frameworks for winning campaigns' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long before we start seeing results from performance marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clarity typically begins to emerge in the first optimization cycle. Stronger performance comes as testing matures, signals sharpen, and the system starts learning in a structured way. The goal is not a short spike — it is a performance model that improves every cycle and compounds over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the Performance Engine work on its own without other services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. It can run independently when paid media is the clearest growth priority. Its impact becomes even stronger when aligned with the Creative Engine, because better creative improves signal quality, conversion efficiency, and scaling potential.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes DigitalIQ\'s performance marketing different from standard ad management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most ad management focuses on campaign activity. The Performance Engine focuses on acquisition architecture — clearer intent behind the account structure, better testing logic, more disciplined optimization, and decisions connected to the larger business objective, not just platform movement.',
      },
    },
  ],
}

export default function PerformanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  )
}
