'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const { lang, toggle, isAr } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

  const engineLinks = [
    { label: isAr ? 'محرك الأداء' : 'Performance Engine', href: '/services/performance', number: '01' },
    { label: isAr ? 'محرك الكريتيف' : 'Creative Engine', href: '/services/creative', number: '02' },
    { label: isAr ? 'محرك السوشيال' : 'Social Engine', href: '/services/social', number: '03' },
    { label: isAr ? 'محرك الإنفلوينسر' : 'Influence Engine', href: '/services/influence', number: '04' },
    { label: isAr ? 'محرك الـ AI والأتمتة' : 'AI & Automation Engine', href: '/services/ai-automation', number: '05' },
  ]

  const navLinks = [
    { label: isAr ? 'الرئيسية' : 'Home', href: '/' },
    { label: isAr ? 'عن DigitalIQ' : 'About', href: '/about' },
    { label: isAr ? 'المنهجية' : 'Method', href: '/method' },
    { label: isAr ? 'الخدمات' : 'Services', href: '/services', hasDropdown: true },
  ]

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      setScrolled(current > 60)
      if (current < 10) {
        setVisible(true)
      } else if (current < lastScrollY.current) {
        setVisible(true)
      } else if (current > lastScrollY.current + 8) {
        setVisible(false)
        setServicesOpen(false)
      }
      lastScrollY.current = current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const isActive = (href: string) =>
    href === '/services'
      ? pathname.startsWith('/services')
      : href === '/'
      ? pathname === '/'
      : pathname === href

  return (
    <motion.header
      animate={{ y: visible ? 0 : '-110%' }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-350',
        scrolled
          ? 'bg-surface-02/90 backdrop-blur-xl border-b border-surface-border'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="container-site flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 relative">
          <Image
            src="/logo-white.png"
            alt="DigitalIQ"
            width={140}
            height={40}
            priority
            className="h-[150px] w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.href} className="relative" ref={dropdownRef}>
                <button
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onClick={() => setServicesOpen((v) => !v)}
                  className={[
                    'relative flex items-center gap-1 text-label-lg font-satoshi uppercase tracking-widest transition-colors duration-250',
                    isActive(link.href)
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary',
                  ].join(' ')}
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`transition-transform duration-250 ${servicesOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[280px] bg-surface-03 border border-surface-border rounded-xl shadow-elev-3 overflow-hidden"
                    >
                      <div className="p-2">
                        <Link
                          href="/services"
                          className="block px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-04 transition-colors duration-200 text-body-sm font-inter mb-1"
                        >
                          <span className="block text-label-md text-accent uppercase tracking-widest mb-0.5">
                            {isAr ? 'نظرة عامة' : 'Overview'}
                          </span>
                          {isAr ? 'كل الخدمات' : 'All Services'}
                        </Link>
                        <div className="h-px bg-surface-border my-2" />
                        {engineLinks.map((engine) => (
                          <Link
                            key={engine.href}
                            href={engine.href}
                            className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-surface-04 transition-colors duration-200 group"
                          >
                            <span className="text-label-md text-text-muted font-satoshi group-hover:text-accent transition-colors duration-200">
                              {engine.number}
                            </span>
                            <span className="text-body-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                              {engine.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'relative text-label-lg font-satoshi uppercase tracking-widest transition-colors duration-250 group',
                  isActive(link.href)
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text-primary',
                ].join(' ')}
              >
                {link.label}
                <span
                  className={[
                    'absolute -bottom-0.5 left-0 h-px bg-accent transition-[width] duration-350 ease-premium',
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full',
                  ].join(' ')}
                />
              </Link>
            )
          )}

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="text-label-lg font-satoshi uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors duration-250 border border-surface-border px-3 py-1 rounded-md hover:border-text-muted"
            aria-label={isAr ? 'Switch to English' : 'التبديل للعربية'}
          >
            {lang === 'en' ? 'ع' : 'EN'}
          </button>

          <Link
            href="/start-now"
            className={[
              'ml-2 px-5 py-2 text-label-lg font-satoshi uppercase tracking-widest rounded-md border transition-colors duration-250',
              pathname === '/start-now'
                ? 'bg-accent text-text-inverse border-accent'
                : 'border-accent text-accent hover:bg-accent hover:text-text-inverse',
            ].join(' ')}
          >
            {isAr ? 'ابدأ' : 'Start Now'}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-label-md font-satoshi text-text-muted hover:text-text-primary transition-colors duration-250 border border-surface-border px-2 py-1 rounded"
            aria-label={isAr ? 'Switch to English' : 'التبديل للعربية'}
          >
            {lang === 'en' ? 'ع' : 'EN'}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex flex-col gap-1.5 p-2 text-text-primary"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-px bg-current"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-px bg-current"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-px bg-current"
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-full left-0 right-0 bg-surface-02/95 backdrop-blur-xl border-b border-surface-border"
          >
            <nav className="container-site py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    'py-3 text-heading-md font-satoshi border-b border-surface-border transition-colors duration-200',
                    isActive(link.href) ? 'text-accent' : 'text-text-primary',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-2 pb-1">
                <p className="text-label-md text-text-muted uppercase tracking-widest mb-3">
                  {isAr ? 'الخدمات' : 'Services'}
                </p>
                {engineLinks.map((engine) => (
                  <Link
                    key={engine.href}
                    href={engine.href}
                    className="flex items-center gap-3 py-2.5 border-b border-surface-divider text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    <span className="text-label-md text-text-muted font-satoshi w-6">{engine.number}</span>
                    <span className="text-body-sm">{engine.label}</span>
                  </Link>
                ))}
              </div>

              <Link
                href="/start-now"
                className="mt-4 py-3 text-center text-label-lg font-satoshi uppercase tracking-widest bg-accent text-text-inverse rounded-md"
              >
                {isAr ? 'ابدأ' : 'Start Now'}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
