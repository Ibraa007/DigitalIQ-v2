import type { Metadata } from 'next'

const BASE_URL = 'https://digitaliq.agency'

export const metadata: Metadata = {
  title: 'Marketing Services — Five Engines, One Growth Model',
  description:
    'DigitalIQ offers five connected marketing engines — Performance, Creative, Social, Influence, and AI Automation — all coordinated by one Intelligence Layer for Egyptian and MENA brands.',
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: 'Marketing Services — Five Engines, One Growth Model | DigitalIQ',
    description:
      'Five connected engines. One intelligence layer. Not scattered services — a structured growth model built for Egyptian brands.',
    url: `${BASE_URL}/services`,
    type: 'website',
  },
  twitter: {
    title: 'Marketing Services — Five Engines, One Growth Model | DigitalIQ',
    description:
      'Five connected marketing engines. One intelligence layer. Built for brands that need marketing to compound.',
  },
}

const serviceListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'DigitalIQ Marketing Services',
  description: 'Five connected marketing engines coordinated by the DigitalIQ Intelligence Layer.',
  url: `${BASE_URL}/services`,
  numberOfItems: 5,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Performance Engine',
      description: 'Structured paid media across Meta, Google, TikTok, and Snapchat.',
      url: `${BASE_URL}/services/performance`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Creative Engine',
      description: 'Performance-aware creative system — messaging frameworks and content that move audiences.',
      url: `${BASE_URL}/services/creative`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Social Engine',
      description: 'Governed social media presence with structured publishing rhythm and communication discipline.',
      url: `${BASE_URL}/services/social`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Influence Engine',
      description: 'Strategic influencer marketing that builds authority through aligned voices.',
      url: `${BASE_URL}/services/influence`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'AI & Automation Engine',
      description: 'Intelligent workflows — AI agents, automated follow-up, and CRM integrations that scale.',
      url: `${BASE_URL}/services/ai-automation`,
    },
  ],
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      {children}
    </>
  )
}
