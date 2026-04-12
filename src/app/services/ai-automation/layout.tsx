import type { Metadata } from 'next'

const BASE_URL = 'https://digitaliq.agency'

export const metadata: Metadata = {
  title: 'AI & Automation Engine — Intelligent Marketing Systems',
  description:
    'DigitalIQ\'s AI & Automation Engine builds intelligent workflows — AI chat agents, automated follow-up, lead qualification, and CRM integrations that scale without adding headcount.',
  alternates: { canonical: `${BASE_URL}/services/ai-automation` },
  openGraph: {
    title: 'AI & Automation Engine — Intelligent Marketing Systems | DigitalIQ',
    description:
      'Not tools. An intelligent infrastructure layer — AI agents, booking workflows, and automation systems built around real customer journeys.',
    url: `${BASE_URL}/services/ai-automation`,
    type: 'website',
  },
  twitter: {
    title: 'AI & Automation Engine | DigitalIQ',
    description: 'Intelligent marketing systems — AI agents, automation, and CRM integrations that scale.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI & Automation Engine',
  alternateName: 'Marketing Automation Agency Egypt',
  description:
    'An intelligent infrastructure layer for Egyptian brands — AI chat agents, automated follow-up systems, lead qualification, and CRM integrations that scale operations without adding headcount.',
  provider: { '@type': 'Organization', name: 'DigitalIQ', url: BASE_URL },
  areaServed: [
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'AdministrativeArea', name: 'MENA' },
  ],
  serviceType: 'Marketing Automation',
  url: `${BASE_URL}/services/ai-automation`,
}

export default function AIAutomationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  )
}
