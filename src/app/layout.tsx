import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import ClientLayout from '@/components/layout/ClientLayout'

const BASE_URL = 'https://digitaliq.agency'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'DigitalIQ — Marketing Built on Structure',
    template: '%s | DigitalIQ',
  },
  description:
    "DigitalIQ is Egypt's structured marketing agency. We build growth systems — not campaigns. Five specialized engines, one intelligence layer, for brands ready to compound.",
  keywords: [
    'marketing agency Egypt',
    'structured marketing',
    'growth system',
    'digital marketing Egypt',
    'performance marketing Egypt',
    'marketing strategy MENA',
    'DigitalIQ',
  ],
  authors: [{ name: 'DigitalIQ', url: BASE_URL }],
  creator: 'DigitalIQ',
  publisher: 'DigitalIQ',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_EG',
    url: BASE_URL,
    siteName: 'DigitalIQ',
    title: 'DigitalIQ — Marketing Built on Structure',
    description:
      "DigitalIQ is Egypt's structured marketing agency. Five specialized engines. One intelligence layer. Built for brands ready to compound.",
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'DigitalIQ — Marketing Built on Structure' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigitalIQ — Marketing Built on Structure',
    description:
      "Egypt's structured marketing agency. Five engines. One intelligence layer. Built for brands ready to compound.",
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: BASE_URL,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DigitalIQ',
  url: BASE_URL,
  logo: `${BASE_URL}/logo-white.png`,
  description:
    "DigitalIQ is Egypt's precision marketing agency. We build structured growth systems — five specialized engines coordinated by one intelligence layer — for Egyptian and MENA brands.",
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'EG',
    addressLocality: 'Cairo',
  },
  email: 'Hello@DigitalIQ.agency',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+20-1000-280071',
    email: 'Hello@DigitalIQ.agency',
    contactType: 'customer service',
    areaServed: ['EG', 'MENA'],
    availableLanguage: ['English', 'Arabic'],
  },
  sameAs: [
    'https://digitaliq.agency',
    'https://www.instagram.com/digitaliqglobal',
    'https://www.tiktok.com/@digitaliqglobal',
    'https://www.facebook.com/share/1DVfVFKz8N/',
    'https://wa.me/201000280071',
  ],
  areaServed: [
    { '@type': 'Country', name: 'Egypt' },
    { '@type': 'AdministrativeArea', name: 'MENA' },
  ],
  knowsAbout: [
    'Performance Marketing',
    'Brand Strategy',
    'Social Media Marketing',
    'Influencer Marketing',
    'Marketing Automation',
    'AI Marketing',
    'Growth Systems',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DigitalIQ',
  url: BASE_URL,
  description: "Egypt's structured marketing agency. Five engines. One intelligence layer.",
  publisher: { '@type': 'Organization', name: 'DigitalIQ' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo-black.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-surface-01 text-text-primary font-inter">
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
