'use client'

import { useState, useCallback } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import LogoIntro from '@/components/ui/LogoIntro'
import CustomCursor from '@/components/ui/CustomCursor'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [pageReady, setPageReady] = useState(false)
  const handleIntroComplete = useCallback(() => setPageReady(true), [])

  return (
    <LanguageProvider>
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
    </LanguageProvider>
  )
}
