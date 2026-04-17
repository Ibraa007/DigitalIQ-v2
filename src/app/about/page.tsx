'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { BrandName, BrandText } from '@/components/ui/BrandText'
import { useLanguage } from '@/contexts/LanguageContext'

// ─── Origin Panel ─────────────────────────────────────────────────────────────
function OriginPanel({ panel, index }: { panel: { label: string; headline: string; body: string; pullQuote?: string }; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="border-b border-surface-border last:border-0 overflow-hidden">
      <div className="container-site py-16 md:py-20">
        <div className="relative">
          {/* Oversized background label */}
          <div
            className="absolute -top-4 left-0 select-none pointer-events-none font-satoshi font-black uppercase leading-none"
            style={{
              fontSize: 'clamp(3rem, 11vw, 9rem)',
              color: 'rgba(255,255,255,0.022)',
              letterSpacing: '-0.03em',
              whiteSpace: 'nowrap',
            }}
            aria-hidden
          >
            {panel.label}
          </div>

          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            {/* Label + headline + body */}
            <div className="max-w-[640px]">
              <span className="text-label-md font-satoshi uppercase tracking-widest text-text-muted mb-5 block">{panel.label}</span>
              <h3 className="text-heading-xl font-satoshi text-text-primary mb-5">
                {panel.headline}
              </h3>
              <p className="text-body-lg text-text-secondary leading-relaxed">
                {panel.body}
              </p>
            </div>

            {/* Pull quote — full-width statement below prose */}
            {panel.pullQuote && (
              <div className="mt-10 pt-8 border-t border-surface-border">
                <blockquote className="pl-6 border-l-2 border-accent">
                  <p className="text-display-lg font-satoshi text-text-primary leading-tight">
                    {panel.pullQuote}
                  </p>
                </blockquote>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// ─── About Page ───────────────────────────────────────────────────────────────
export default function AboutPage() {
  const { t, isAr, href } = useLanguage()
  const aboutContent = t.aboutContent
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const founderRef = useRef(null)
  const founderInView = useInView(founderRef, { once: true, margin: '-80px' })
  const teamRef = useRef(null)
  const teamInView = useInView(teamRef, { once: true, margin: '-80px' })
  const standardRef = useRef(null)
  const standardInView = useInView(standardRef, { once: true, margin: '-80px' })

  return (
    <>
      {/* ─── Hero ───────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative py-section-xl bg-surface-base overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 30% 50%, rgba(255,30,0,0.04) 0%, transparent 65%)' }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="container-site relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            className="max-w-[720px]"
          >
            <motion.div variants={staggerItem} className="mb-7">
              <span className="text-label-md font-satoshi uppercase tracking-widest text-accent">{isAr ? 'عن' : 'About'} <BrandName /></span>
            </motion.div>
            <motion.h1
              variants={staggerItem}
              className="text-display-lg font-satoshi text-text-primary mb-2"
            >
              {aboutContent.hero.headline}
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-display-lg font-satoshi text-accent mb-8"
            >
              <BrandText text={aboutContent.hero.headlineLine2} />
            </motion.p>
            <motion.div variants={staggerItem} className="w-12 h-px bg-accent mb-8" />
            <motion.p
              variants={staggerItem}
              className="text-body-lg text-text-secondary max-w-[560px] leading-relaxed"
            >
              {aboutContent.hero.body}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Founder ────────────────────────────────────────────────────── */}
      <section ref={founderRef} className="py-section-lg bg-surface-01">
        <div className="container-site">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={founderInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            {/* Narrative — LEFT (8 cols) */}
            <motion.div variants={staggerItem} className="lg:col-span-8 lg:order-1">
              <span className="text-label-md font-satoshi uppercase tracking-widest text-text-muted mb-8 block">{aboutContent.founder.label}</span>

              {/* Lead paragraph — larger, pulls the reader in */}
              <p className="text-heading-lg font-satoshi text-text-primary leading-relaxed mb-6">
                {aboutContent.founder.body[0]}
              </p>

              {/* Remaining paragraphs */}
              <div className="space-y-5 mb-10">
                {aboutContent.founder.body.slice(1).map((para, i) => (
                  <p key={i} className="text-body-lg text-text-secondary leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Pull quote */}
              <blockquote className="relative pl-6 border-l-2 border-accent">
                <p className="text-heading-xl font-satoshi text-text-primary italic leading-snug">
                  "{aboutContent.founder.pullQuote}"
                </p>
              </blockquote>
            </motion.div>

            {/* Portrait — RIGHT (4 cols) */}
            <motion.div
              className="lg:col-span-4 lg:order-2"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={founderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full max-w-[300px] lg:max-w-none aspect-[3/4] rounded-xl overflow-hidden shadow-elev-3">
                <Image
                  src="/founder.png"
                  alt={aboutContent.founder.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 300px, 33vw"
                />
                {/* Subtle accent overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-base/70 via-transparent to-transparent" />
                {/* Accent corner accent */}
                <div className="absolute top-0 right-0 w-12 h-px bg-accent" />
                <div className="absolute top-0 right-0 w-px h-12 bg-accent" />
                {/* Name caption at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="w-6 h-px bg-accent mb-2" />
                  <p className="text-label-lg font-satoshi text-text-primary uppercase tracking-widest">
                    {aboutContent.founder.name}
                  </p>
                  <p className="text-label-md text-text-muted mt-0.5">{isAr ? 'المؤسس،' : 'Founder,'} <BrandName /></p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Origin story — 3 panels ────────────────────────────────────── */}
      <section className="bg-surface-02">
        {aboutContent.origin.map((panel, i) => (
          <OriginPanel key={panel.label} panel={panel} index={i} />
        ))}
      </section>

      {/* ─── Team ───────────────────────────────────────────────────────── */}
      <section ref={teamRef} className="py-section-lg bg-surface-01">
        <div className="container-site">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Two-column: photo LEFT, text RIGHT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Photo — left */}
              <div className="relative rounded-2xl overflow-hidden shadow-elev-4">
                <Image
                  src="/team.png"
                  alt="The team behind DigitalIQ"
                  width={1600}
                  height={900}
                  className="w-full h-auto block"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle bottom vignette */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-surface-base/60 to-transparent" />
                {/* Accent corner mark */}
                <div className="absolute top-0 left-0 w-16 h-px bg-accent" />
                <div className="absolute top-0 left-0 w-px h-16 bg-accent" />
              </div>

              {/* Text — right */}
              <div>
                <span className="text-label-md font-satoshi uppercase tracking-widest text-text-muted mb-6 block">{aboutContent.team.label}</span>
                <h2 className="text-display-lg font-satoshi text-text-primary mb-6">
                  <BrandText text={aboutContent.team.headline} />
                </h2>
                <p className="text-body-lg text-text-secondary leading-relaxed">
                  {aboutContent.team.body}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── The Standard — brand manifesto close ───────────────────────── */}
      <section ref={standardRef} className="relative py-section-lg bg-surface-base overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 80%, rgba(255,30,0,0.05) 0%, transparent 65%)' }}
        />
        <div className="container-site relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={standardInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={staggerItem} className="mb-10">
              <span className="text-label-md font-satoshi uppercase tracking-widest text-accent">{aboutContent.standard.label}</span>
            </motion.div>

            {/* Standard items — stacked numbered list */}
            <div className="mb-20 max-w-[680px]">
              {aboutContent.standard.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={standardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-6 py-5 border-b border-surface-border last:border-0"
                >
                  <span
                    className="flex-shrink-0 font-satoshi font-black text-label-md tracking-widest mt-1"
                    style={{ color: 'rgba(255,30,0,0.35)' }}
                  >
                    0{i + 1}
                  </span>
                  <p className="text-heading-lg font-satoshi text-text-primary">{item}</p>
                </motion.div>
              ))}
            </div>

            {/* Manifesto close */}
            <motion.div variants={staggerItem} className="text-center">
              {/* Accent separator */}
              <div className="w-12 h-px bg-accent mx-auto mb-10" />

              <p className="text-body-lg text-text-secondary max-w-[520px] mx-auto mb-10 leading-relaxed">
                {isAr
                  ? aboutContent.standard.closing.replace('المعيار ده بقى DigitalIQ.', '').trim()
                  : aboutContent.standard.closing.replace('That standard became DigitalIQ.', '').trim()}
              </p>

              <h2 className="text-display-xl font-satoshi text-text-primary mb-12">
                {isAr ? 'المعيار ده بقى' : 'That standard became'} <BrandName />.
              </h2>

              <Link
                href={href('/start-now')}
                className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-[#080808] text-label-lg font-satoshi uppercase tracking-widest rounded-lg hover:bg-accent-hover transition-colors duration-250"
              >
                {isAr ? 'ابدأ التشخيص' : 'Start the Diagnosis'}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                  <path d="M2 11L11 2M11 2H4.5M11 2V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
