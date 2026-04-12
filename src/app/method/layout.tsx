import type { Metadata } from 'next'

const BASE_URL = 'https://digitaliq.agency'

export const metadata: Metadata = {
  title: 'The DigitalIQ Method — Four Stages to Compounding Growth',
  description:
    'Diagnose, Strategize, Execute, Drive. The DigitalIQ Method is a four-stage marketing sequence that eliminates guesswork and makes growth compound over time.',
  alternates: { canonical: `${BASE_URL}/method` },
  openGraph: {
    title: 'The DigitalIQ Method — Four Stages to Compounding Growth',
    description:
      'Four stages. One sequence. No guesswork. How DigitalIQ structures marketing to compound — not spike.',
    url: `${BASE_URL}/method`,
    type: 'website',
  },
  twitter: {
    title: 'The DigitalIQ Method — Four Stages to Compounding Growth',
    description:
      'Diagnose. Strategize. Execute. Drive. The sequence that makes marketing compound over time.',
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'The DigitalIQ Method: Four Stages to Compounding Growth',
  description:
    'A four-stage marketing methodology that removes guesswork and builds a growth system that compounds over time.',
  provider: {
    '@type': 'Organization',
    name: 'DigitalIQ',
    url: BASE_URL,
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Diagnose',
      text: 'Audit the real state of the business, market, funnel, and brand communication. Establish clarity on where growth is breaking down.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Strategize',
      text: 'Build the architecture the brand will scale with. Order priorities by impact. Select the right engines. Align all channels under one growth logic.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Execute',
      text: 'Strategy becomes coordinated, intentional action. Every campaign has a role. Every move is measured against the architecture behind it.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Drive',
      text: 'The system matures. Patterns become signals. Performance compounds. Growth becomes more predictable because the structure holds.',
    },
  ],
}

export default function MethodLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {children}
    </>
  )
}
