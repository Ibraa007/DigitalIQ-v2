import type { Metadata } from 'next'

const BASE_URL = 'https://digitaliq.agency'

export const metadata: Metadata = {
  title: 'Start Now — Book Your Growth Alignment Call',
  description:
    'Begin with clarity. DigitalIQ\'s structured onboarding starts with an Alignment Call, followed by a full Diagnosis and a custom Growth System design for your brand.',
  alternates: { canonical: `${BASE_URL}/start-now` },
  openGraph: {
    title: 'Start Now — Book Your Growth Alignment Call | DigitalIQ',
    description:
      'Every serious growth system begins with clarity. Not a pitch — a direct conversation about where your brand stands and what it actually needs.',
    url: `${BASE_URL}/start-now`,
    type: 'website',
  },
  twitter: {
    title: 'Start Now — Book Your Growth Alignment Call | DigitalIQ',
    description:
      'Begin with clarity. An Alignment Call. A Diagnosis. A custom Growth System — in that order.',
  },
}

export default function StartNowLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
