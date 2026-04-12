'use client'

import { useState, useCallback } from 'react'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LogoIntro from '@/components/ui/LogoIntro'
import CustomCursor from '@/components/ui/CustomCursor'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [pageReady, setPageReady] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setPageReady(true)
  }, [])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>DigitalIQ — Marketing Built on Structure</title>
        <meta
          name="description"
          content="DigitalIQ builds the structure behind marketing that compounds — for Egyptian founders who are done paying for motion and ready for disciplined growth."
        />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/logo-black.png" type="image/png" />
      </head>
      <body className="bg-surface-01 text-text-primary font-inter">
        <LogoIntro onComplete={handleIntroComplete} />
        <CustomCursor />

        <div
          data-page-wrapper
          className="relative z-10 transition-opacity duration-500"
          style={{ opacity: pageReady ? 1 : 0 }}
        >
          <Navbar />
          <main className="pt-[72px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
