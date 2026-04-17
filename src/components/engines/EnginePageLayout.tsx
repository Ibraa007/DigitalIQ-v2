'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { staggerContainer, staggerItem } from '@/lib/motion'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import type { EngineContent } from '@/lib/content'
import { useLanguage } from '@/contexts/LanguageContext'

// Engine number map — used in hero decoration and label
const engineNumbers: Record<string, string> = {
  performance: '01',
  creative: '02',
  social: '03',
  influence: '04',
  'ai-automation': '05',
}

interface EnginePageLayoutProps {
  engine: EngineContent
}

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StaggerList({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function EnginePageLayout({ engine }: EnginePageLayoutProps) {
  const { t, isAr } = useLanguage()
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const num = engineNumbers[engine.id] ?? ''
  const startNowContent = t.startNowContent

  return (
    <>
      {/* ─── Hero ───────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative py-section-xl bg-surface-base overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 65% 50% at 20% 50%, rgba(255,30,0,0.04) 0%, transparent 65%)' }}
        />

        {/* Oversized background engine number */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none font-satoshi font-black leading-none hidden lg:block"
          style={{ fontSize: 'clamp(10rem, 22vw, 20rem)', color: 'rgba(255,30,0,0.04)', letterSpacing: '-0.06em' }}
          aria-hidden
        >
          {num}
        </div>

        <div className="container-site relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            className="max-w-[700px]"
          >
            {/* Engine number label — replaces generic "Services" */}
            <motion.div variants={staggerItem} className="flex items-center gap-3 mb-7">
              <Link
                href="/services"
                className="text-label-md font-satoshi text-text-muted uppercase tracking-widest hover:text-accent transition-colors duration-250"
              >
                {isAr ? 'الخدمات' : 'Services'}
              </Link>
              <span className="text-text-muted opacity-40">/</span>
              <span className="text-label-md font-satoshi text-accent uppercase tracking-widest">
                {isAr ? `المحرك ${num}` : `Engine ${num}`}
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-display-lg font-satoshi text-text-primary mb-4"
            >
              {engine.name}
            </motion.h1>

            {/* Engine tagline — accent, display-scale hook */}
            <motion.p
              variants={staggerItem}
              className="text-display-lg font-satoshi text-accent mb-2 leading-tight"
            >
              {engine.label}
            </motion.p>

            <motion.div variants={staggerItem} className="w-10 h-px bg-accent mt-4 mb-8" />

            <motion.p
              variants={staggerItem}
              className="text-body-lg text-text-secondary max-w-[560px] mb-10 leading-relaxed"
            >
              {engine.intro}
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
              <Button href="/start-now" variant="primary">{isAr ? 'ابدأ التشخيص' : 'Start the Diagnosis'}</Button>
              <Button href="/start-now" variant="ghost">{isAr ? 'كلم فريقنا' : 'Talk to Our Team'}</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── What It Is ─────────────────────────────────────────────────── */}
      <section className="py-section-md bg-surface-01">
        <div className="container-site">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <h2 className="text-heading-xl font-satoshi text-text-primary lg:sticky lg:top-28">
                {isAr ? 'إيه ده؟' : 'What It Is'}
              </h2>
              <div className="space-y-5">
                {engine.whatItIs.body.map((para, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed ${
                      i === 0
                        ? 'text-body-lg font-satoshi text-text-primary'
                        : 'text-body-lg text-text-secondary'
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── How It Operates ────────────────────────────────────────────── */}
      <section className="py-section-md bg-surface-02">
        <div className="container-site">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-heading-xl font-satoshi text-text-primary mb-6">
                  {isAr ? 'إزاي بيشتغل؟' : 'How It Operates'}
                </h2>
                <p className="text-body-lg text-text-secondary leading-relaxed">
                  {engine.howItOperates.intro}
                </p>
              </div>
              <StaggerList className="lg:pt-16">
                {engine.howItOperates.bullets.map((bullet, i) => (
                  <motion.div key={i} variants={staggerItem} className="flex items-start gap-4 py-3 border-b border-surface-border last:border-0">
                    <span className="flex-shrink-0 mt-[10px] w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-body-md text-text-secondary">{bullet}</span>
                  </motion.div>
                ))}
              </StaggerList>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── When This Engine Becomes Necessary ─────────────────────────── */}
      <section className="py-section-md bg-surface-01">
        <div className="container-site">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <h2 className="text-heading-xl font-satoshi text-text-primary lg:sticky lg:top-28">
                {isAr ? 'امتى المحرك ده بيبقى ضروري' : 'When This Engine Becomes Necessary'}
              </h2>
              <StaggerList>
                {engine.builtFor.map((item, i) => (
                  <motion.div key={i} variants={staggerItem} className="flex items-start gap-4 py-4 border-b border-surface-border last:border-0">
                    <span className="flex-shrink-0 mt-[10px] w-1.5 h-1.5 rounded-full bg-accent" />
                    <p className="text-body-lg text-text-primary">{item}</p>
                  </motion.div>
                ))}
              </StaggerList>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── What This Engine Helps Create ──────────────────────────────── */}
      <section className="py-section-md bg-surface-02">
        <div className="container-site">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-heading-xl font-satoshi text-text-primary mb-6">
                  {isAr ? 'إيه اللي المحرك ده بيساعد يخلق' : 'What This Engine Helps Create'}
                </h2>
                <p className="text-body-lg text-text-secondary leading-relaxed">
                  {engine.whatItCreates.intro}
                </p>
              </div>
              <div>
                <StaggerList className="mb-8">
                  {engine.whatItCreates.bullets.map((bullet, i) => (
                    <motion.div key={i} variants={staggerItem} className="flex items-start gap-4 py-4 border-b border-surface-border last:border-0">
                      <span className="flex-shrink-0 mt-[10px] w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-body-md text-text-primary">{bullet}</span>
                    </motion.div>
                  ))}
                </StaggerList>
                <p className="text-body-md text-text-muted italic pl-5 border-l border-surface-border">
                  {engine.whatItCreates.closing}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Why It Matters ─────────────────────────────────────────────── */}
      <section className="py-section-md bg-surface-01">
        <div className="container-site">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <h2 className="text-heading-xl font-satoshi text-text-primary lg:sticky lg:top-28">
                {isAr ? 'ليه ده مهم' : 'Why It Matters'}
              </h2>
              <div>
                <div className="space-y-5 mb-10">
                  {engine.whyItMatters.body.map((para, i) => (
                    <p key={i} className="text-body-lg text-text-secondary leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                {engine.whyItMatters.pullQuote && (
                  <blockquote className="pl-6 border-l-2 border-accent">
                    <p className="text-display-lg font-satoshi text-text-primary leading-tight">
                      "{engine.whyItMatters.pullQuote}"
                    </p>
                  </blockquote>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Questions That Usually Come Up (Performance only) ──────────── */}
      {engine.faq && engine.faq.length > 0 && (
        <section className="py-section-md bg-surface-02">
          <div className="container-site">
            <AnimatedSection>
              <h2 className="text-heading-xl font-satoshi text-text-primary mb-12">
                {isAr ? 'أسئلة بتيجي عادةً' : 'Questions That Usually Come Up'}
              </h2>
              <div className="space-y-4 max-w-[760px]">
                {engine.faq.map((item, i) => (
                  <div
                    key={i}
                    className="bg-surface-03 border border-surface-border rounded-xl p-6 md:p-8 border-l-2 border-l-accent"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 text-label-md font-satoshi text-accent tracking-widest mt-1">
                        0{i + 1}
                      </span>
                      <div>
                        <h4 className="text-heading-md font-satoshi text-text-primary mb-3">
                          {item.question}
                        </h4>
                        <p className="text-body-md text-text-secondary leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ─── CTA ────────────────────────────────────────────────────────── */}
      <section className="relative py-section-xl bg-surface-base overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(255,30,0,0.05) 0%, transparent 65%)' }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="container-site relative z-10">
          <AnimatedSection className="max-w-[640px]">
            <SectionLabel accent className="mb-6">{isAr ? 'ابدأ من هنا' : 'Begin Here'}</SectionLabel>
            <h2 className="text-display-lg font-satoshi text-text-primary mb-4">
              {startNowContent.hero.headline}
            </h2>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-10 max-w-[520px]">
              {startNowContent.hero.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/start-now" variant="primary" size="lg">{isAr ? 'ابدأ التشخيص' : 'Start the Diagnosis'}</Button>
              <Button href="/start-now" variant="ghost" size="lg">{isAr ? 'كلم فريقنا' : 'Talk to Our Team'}</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
