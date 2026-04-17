'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BrandName } from '@/components/ui/BrandText'
import { useLanguage } from '@/contexts/LanguageContext'

const engineLinks = [
  { labelEn: 'Performance Engine', labelAr: 'محرك الأداء', href: '/services/performance' },
  { labelEn: 'Creative Engine', labelAr: 'محرك الكريتيف', href: '/services/creative' },
  { labelEn: 'Social Engine', labelAr: 'محرك السوشيال', href: '/services/social' },
  { labelEn: 'Influence Engine', labelAr: 'محرك الإنفلوينسر', href: '/services/influence' },
  { labelEn: 'AI & Automation Engine', labelAr: 'محرك الـ AI والأتمتة', href: '/services/ai-automation' },
]

const pageLinks = [
  { labelEn: 'Home', labelAr: 'الرئيسية', href: '/' },
  { labelEn: 'About', labelAr: 'عن DigitalIQ', href: '/about' },
  { labelEn: 'Method', labelAr: 'المنهجية', href: '/method' },
  { labelEn: 'Services', labelAr: 'الخدمات', href: '/services' },
  { labelEn: 'Start Now', labelAr: 'ابدأ دلوقتي', href: '/start-now' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/digitaliqglobal',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@digitaliqglobal',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1DVfVFKz8N/?mibextid=wwXIfr',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/201000280071',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const { isAr } = useLanguage()

  return (
    <footer className="relative border-t border-surface-border mt-section-lg">
      {/* Accent rule at very top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container-site py-16 md:py-20">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">

          {/* Pages col */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="block w-4 h-px bg-accent flex-shrink-0" />
              <p className="text-label-md text-text-muted uppercase tracking-widest font-satoshi">
                {isAr ? 'الصفحات' : 'Pages'}
              </p>
            </div>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative inline-block text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-250"
                  >
                    {isAr ? link.labelAr : link.labelEn}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent group-hover:w-full transition-[width] duration-350 ease-premium" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engines col */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="block w-4 h-px bg-accent flex-shrink-0" />
              <p className="text-label-md text-text-muted uppercase tracking-widest font-satoshi">
                {isAr ? 'الخدمات' : 'Services'}
              </p>
            </div>
            <ul className="space-y-3">
              {engineLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative inline-block text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-250"
                  >
                    {isAr ? link.labelAr : link.labelEn}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent group-hover:w-full transition-[width] duration-350 ease-premium" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="block w-4 h-px bg-accent flex-shrink-0" />
              <p className="text-label-md text-text-muted uppercase tracking-widest font-satoshi">
                {isAr ? 'تواصل' : 'Contact'}
              </p>
            </div>
            <ul className="space-y-4">
              <li>
                <Link
                  href="mailto:Hello@DigitalIQ.agency"
                  className="group flex items-start gap-2.5 text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-250"
                >
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                  Hello@DigitalIQ.agency
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+201000280071"
                  className="flex items-start gap-2.5 text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-250"
                >
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.17 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.19 7.76a16 16 0 006.06 6.06l1.13-1.13a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  +20 1000 280071
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+20233809486"
                  className="flex items-start gap-2.5 text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-250"
                >
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.17 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.19 7.76a16 16 0 006.06 6.06l1.13-1.13a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  02 33809486
                </Link>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-body-sm text-text-secondary">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="leading-snug">
                    {isAr ? 'شارع الأمل 3أ،\nالشيخ زايد، الجيزة' : '3A El-Amal Street,\nEl Shiekh Zayed, Giza'}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA col */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="block w-4 h-px bg-accent flex-shrink-0" />
              <p className="text-label-md text-text-muted uppercase tracking-widest font-satoshi">
                {isAr ? 'ابدأ من هنا' : 'Start Here'}
              </p>
            </div>
            <p className="text-body-sm text-text-secondary mb-6 leading-relaxed">
              {isAr ? 'كل منظومة نمو جدية بتبدأ بالوضوح.' : 'Every serious growth system begins with clarity.'}
            </p>
            <Link
              href="/start-now"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-label-lg font-satoshi uppercase tracking-widest bg-accent text-text-inverse rounded-md hover:bg-accent-hover transition-colors duration-250"
            >
              {isAr ? 'ابدأ' : 'Start Now'}
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
                <path d="M2 9L9 2M9 2H3.5M9 2V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Logo — centered below the columns with full-width separator */}
        <div className="relative flex flex-col items-center mt-20">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-surface-border to-transparent mb-16" />

          <div
            className="absolute pointer-events-none"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '700px',
              height: '320px',
              background: 'radial-gradient(ellipse 55% 50% at 50% 50%, rgba(255,30,0,0.05) 0%, transparent 70%)',
            }}
          />

          <Link href="/" className="relative">
            <Image
              src="/logo-white.png"
              alt="DigitalIQ"
              width={560}
              height={160}
              className="h-[200px] w-auto opacity-90 hover:opacity-100 transition-opacity duration-350"
            />
          </Link>

          <p className="mt-5 text-label-md text-text-muted font-satoshi tracking-widest text-center">
            {isAr ? 'الهيكل اللي التسويق بيتاكمي عليه.' : 'The structure behind marketing that compounds.'}
          </p>

          <div className="flex items-center gap-3 mt-8 mb-10">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-surface-border text-text-muted hover:text-accent hover:border-accent/50 transition-[color,border-color] duration-250"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-6 border-t border-surface-border flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-label-md text-text-muted">
            © {new Date().getFullYear()} <BrandName />. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
          <p className="text-label-md text-text-muted font-satoshi">
            {isAr ? 'مبني على هيكل.' : 'Built on structure.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
