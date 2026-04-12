import type { Metadata } from 'next'

const BASE_URL = 'https://digitaliq.agency'

export const metadata: Metadata = {
  title: 'About DigitalIQ — The Agency Behind the System',
  description:
    'DigitalIQ was founded by Ibrahim Mubarak out of frustration with disconnected marketing. Learn how Egypt\'s most structured marketing agency was built — and why.',
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: 'About DigitalIQ — The Agency Behind the System',
    description:
      'Founded by Ibrahim Mubarak. Built on the belief that growth compounds when the structure beneath it is right. Learn the story behind DigitalIQ.',
    url: `${BASE_URL}/about`,
    type: 'website',
  },
  twitter: {
    title: 'About DigitalIQ — The Agency Behind the System',
    description:
      'Founded by Ibrahim Mubarak. Built on the belief that growth compounds when the structure beneath it is right.',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ibrahim Mubarak',
  jobTitle: 'Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'DigitalIQ',
    url: BASE_URL,
  },
  url: `${BASE_URL}/about`,
  knowsAbout: [
    'Marketing Strategy',
    'Growth Systems',
    'Performance Marketing',
    'Brand Building',
    'Digital Marketing Egypt',
  ],
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {children}
    </>
  )
}
