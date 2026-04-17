'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { staggerContainer, staggerItem } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ServicesPage() {
  const { t, isAr } = useLanguage()
  const servicesContent = t.servicesContent
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const howRef = useRef(null)
  const howInView = useInView(howRef, { once: true, margin: '-80px' })
  const ilRef = useRef(null)
  const ilInView = useInView(ilRef, { once: true, margin: '-80px' })
  const enginesRef = useRef(null)
  const enginesInView = useInView(enginesRef, { once: true, margin: '-60px' })
  const whyRef = useRef(null)
  const whyInView = useInView(whyRef, { once: true, margin: '-80px' })
  const resultRef = useRef(null)
  const resultInView = useInView(resultRef, { once: true, margin: '-80px' })
  const decideRef = useRef(null)
  const decideInView = useInView(decideRef, { once: true, margin: '-80px' })

  return (
    <>
      {/* ─── 1. Hero ────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative py-section-xl bg-surface-base overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,30,0,0.04) 0%, transparent 65%)' }}
        />
        <div className="container-site relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            className="max-w-[720px]"
          >
            <motion.div variants={staggerItem} className="mb-7">
              <SectionLabel accent>{isAr ? 'الخدمات' : 'Services'}</SectionLabel>
            </motion.div>
            <motion.h1
              variants={staggerItem}
              className="text-display-lg font-satoshi text-text-primary mb-2"
            >
              {servicesContent.hero.headline}
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-display-lg font-satoshi text-accent mb-8"
            >
              {servicesContent.hero.headlineLine2}
            </motion.p>
            <motion.div variants={staggerItem} className="w-12 h-px bg-accent mb-8" />
            <motion.p
              variants={staggerItem}
              className="text-body-lg text-text-secondary max-w-[560px] mb-10 leading-relaxed"
            >
              {servicesContent.hero.body}
            </motion.p>
            <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
              {servicesContent.hero.ctas.map((cta) => (
                <Button key={cta.href + cta.label} href={cta.href} variant={cta.variant}>
                  {cta.label}
                </Button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. How The Model Works (moved up from 3rd) ─────────────────── */}
      <section ref={howRef} className="py-section-md bg-surface-01">
        <div className="container-site">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={howInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
          >
            <motion.h2
              variants={staggerItem}
              className="text-heading-xl font-satoshi text-text-primary"
            >
              {isAr ? 'إزاي النموذج بيشتغل' : 'How The Model Works'}
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-body-lg text-text-secondary leading-relaxed"
            >
              {servicesContent.howModelWorks.body}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. Intelligence Layer (moved from 2nd) ─────────────────────── */}
      <section ref={ilRef} className="py-section-md bg-surface-base">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={ilInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Elevated card */}
            <div className="relative bg-surface-02 border border-accent/20 rounded-2xl p-8 md:p-12 shadow-accent-md overflow-hidden mb-10">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 80% at 5% 50%, rgba(255,30,0,0.05) 0%, transparent 55%)' }}
              />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent/40 via-accent/20 to-transparent" />
              <div className="relative z-10 max-w-[680px]">
                <span className="block text-label-md font-satoshi uppercase tracking-widest text-accent mb-6">{isAr ? 'طبقة الذكاء' : 'The Intelligence Layer'}</span>
                <h2 className="text-display-lg font-satoshi text-text-primary mb-6">
                  {servicesContent.intelligenceLayer.headline}
                </h2>
                <p className="text-body-lg text-text-secondary leading-relaxed mb-4">
                  {servicesContent.intelligenceLayer.body[0]}
                </p>
                <p className="text-body-lg text-text-secondary leading-relaxed">
                  {servicesContent.intelligenceLayer.body[1]}
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ─── 4. Five Engines ────────────────────────────────────────────── */}
      <section ref={enginesRef} className="py-section-md bg-surface-01">
        <div className="container-site">

          {/* Section headline + engine strip */}
          <div className="mb-12">
            <h2 className="text-heading-xl font-satoshi text-text-primary mb-8">
              {isAr ? 'خمس محركات. خمس أدوار. منطق تشغيلي واحد.' : 'Five Engines. Five Roles. One Operating Logic.'}
            </h2>

            {/* Engine overview strip */}
            <div className="flex flex-wrap items-center gap-3">
              {servicesContent.engines.map((engine, i) => (
                <div key={engine.id} className="flex items-center gap-3">
                  <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-surface-border bg-surface-02">
                    <span className="text-label-md font-satoshi text-accent tracking-widest">
                      {engine.number.replace('ENGINE ', '')}
                    </span>
                    <span className="text-label-md font-satoshi text-text-secondary tracking-wide">
                      {engine.name.replace('The ', '').replace(' Engine', '')}
                    </span>
                  </div>
                  {i < servicesContent.engines.length - 1 && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="text-accent/50 flex-shrink-0">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Engine cards — vertically stacked with connectors */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={enginesInView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Vertical connector line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(to bottom, transparent, var(--accent) 10%, var(--accent) 90%, transparent)' }}
            />

            <div className="space-y-4">
              {servicesContent.engines.map((engine, i) => (
                <motion.div key={engine.id} variants={staggerItem} className="relative">
                  {/* Connector dot */}
                  <div className="absolute left-[28px] top-8 w-4 h-4 rounded-full border border-accent bg-surface-01 hidden md:flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>

                  <div className={`md:ml-20 group bg-surface-02 rounded-xl p-6 md:p-8 hover:border-accent/30 hover:shadow-elev-3 transition-[border-color,box-shadow] duration-350 ease-premium border ${i === 0 ? 'border-accent/20 shadow-elev-2' : 'border-surface-border'}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                      {/* Header */}
                      <div className="lg:col-span-4">
                        <span className="block text-label-md font-satoshi text-text-muted uppercase tracking-widest mb-2 group-hover:text-accent transition-colors duration-250">
                          {engine.number}
                        </span>
                        <h3 className="text-heading-xl font-satoshi text-text-primary mb-2">
                          {engine.name}
                        </h3>
                        <p className="text-body-sm text-text-secondary italic">
                          {engine.label}
                        </p>
                      </div>

                      {/* Bullets */}
                      <div className="lg:col-span-5">
                        <ul className="space-y-2">
                          {engine.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                              <span className="flex-shrink-0 mt-2 w-1 h-1 rounded-full bg-accent opacity-60" />
                              <span className="text-body-sm text-text-secondary">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact + CTA */}
                      <div className="lg:col-span-3 flex flex-col justify-between gap-4">
                        <div className="bg-surface-03 rounded-lg p-4 border-l-2 border-accent/40">
                          <p className="text-label-md font-satoshi text-accent uppercase tracking-widest mb-1">
                            {isAr ? 'التأثير' : 'Impact'}
                          </p>
                          <p className="text-body-sm text-text-secondary">{engine.impact}</p>
                        </div>
                        <Link
                          href={engine.href}
                          className="inline-flex items-center gap-2 text-label-lg font-satoshi uppercase tracking-widest text-text-secondary hover:text-accent transition-colors duration-250"
                        >
                          {isAr ? 'اعرف أكتر' : 'Learn More'}
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden className="text-accent">
                            <path d="M2 11L11 2M11 2H4.5M11 2V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 5. Why The Model Is Built This Way ─────────────────────────── */}
      <section ref={whyRef} className="py-section-md bg-surface-02">
        <div className="container-site">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={whyInView ? 'visible' : 'hidden'}
          >
            <motion.h2
              variants={staggerItem}
              className="text-heading-xl font-satoshi text-text-primary mb-6"
            >
              {isAr ? 'ليه النموذج اتبنى كده' : 'Why The Model Is Built This Way'}
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-body-lg text-text-secondary leading-relaxed mb-10 max-w-[640px]"
            >
              {servicesContent.whyBuiltThisWay.body}
            </motion.p>
            <motion.div variants={staggerItem} className="space-y-0">
              {servicesContent.whyBuiltThisWay.connections.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-5 border-b border-surface-border last:border-0"
                >
                  <span className="flex-shrink-0 mt-[10px] w-1.5 h-1.5 rounded-full bg-accent" />
                  <p className="text-body-lg text-text-primary">{item}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── 6. The Result ──────────────────────────────────────────────── */}
      <section ref={resultRef} className="py-section-md bg-surface-01">
        <div className="container-site">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={resultInView ? 'visible' : 'hidden'}
          >
            <motion.h2
              variants={staggerItem}
              className="text-heading-xl font-satoshi text-text-primary mb-12"
            >
              {isAr ? 'النتيجة' : 'The Result'}
            </motion.h2>
            <motion.div variants={staggerItem} className="space-y-0">
              {servicesContent.result.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 py-5 border-b border-surface-border last:border-0"
                  style={{ paddingLeft: `${i * 1.25}rem` }}
                >
                  <span
                    className="flex-shrink-0 font-satoshi font-black text-label-md tracking-widest"
                    style={{ color: 'rgba(255,30,0,0.35)' }}
                  >
                    0{i + 1}
                  </span>
                  <p className="text-heading-lg font-satoshi text-text-primary">{item}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── 7. How We Decide What You Need ─────────────────────────────── */}
      <section ref={decideRef} className="relative py-section-lg bg-surface-base overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(255,30,0,0.05) 0%, transparent 65%)' }}
        />
        <div className="container-site relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={decideInView ? 'visible' : 'hidden'}
            className="max-w-[720px]"
          >
            <motion.h2
              variants={staggerItem}
              className="text-heading-xl font-satoshi text-text-primary mb-6"
            >
              {isAr ? 'إزاي بنقرر محتاج إيه' : 'How We Decide What You Need'}
            </motion.h2>

            {/* Strong subheadline */}
            <motion.p
              variants={staggerItem}
              className="text-display-lg font-satoshi text-text-primary mb-8 leading-tight"
            >
              {servicesContent.howWeDecide.headline}
            </motion.p>

            <motion.div variants={staggerItem} className="w-10 h-px bg-accent mb-8" />

            <motion.p
              variants={staggerItem}
              className="text-body-lg text-text-secondary leading-relaxed mb-10"
            >
              {servicesContent.howWeDecide.body}
            </motion.p>
            <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
              {servicesContent.ctas.map((cta) => (
                <Button key={cta.href + cta.label} href={cta.href} variant={cta.variant}>
                  {cta.label}
                </Button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
