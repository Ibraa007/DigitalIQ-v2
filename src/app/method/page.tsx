'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, Fragment } from 'react'
import { staggerContainer, staggerItem } from '@/lib/motion'
import Button from '@/components/ui/Button'
import { BrandName } from '@/components/ui/BrandText'
import { methodContent } from '@/lib/content'

// ─── Stage Card ───────────────────────────────────────────────────────────────
function StageCard({
  stage,
  index,
  isLast,
}: {
  stage: typeof methodContent.stages[0]
  index: number
  isLast: boolean
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isEven = index % 2 === 0

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -40 : 40 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`relative py-16 md:py-20 ${!isLast ? 'border-b border-surface-border' : ''}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Oversized number — alternates side */}
          <div className={`lg:col-span-2 flex items-start justify-start ${isEven ? '' : 'lg:order-last'}`}>
            <span
              className="text-[6rem] md:text-[8rem] font-satoshi font-black leading-none select-none"
              style={{ color: 'rgba(255,30,0,0.15)' }}
            >
              {stage.number}
            </span>
          </div>

          {/* Content */}
          <div className={`lg:col-span-10 ${isEven ? '' : 'lg:order-first'}`}>
            <div className="mb-6">
              <span className="text-label-md font-satoshi uppercase tracking-widest text-accent">{stage.label}</span>
            </div>
            <h3 className="text-display-lg font-satoshi text-text-primary mb-6">
              {stage.name}
            </h3>
            <p className="text-body-lg text-text-secondary max-w-[600px] mb-8 leading-relaxed">
              {stage.body}
            </p>

            {/* "What Becomes Clear" callout */}
            <div className="relative bg-surface-02 border border-surface-border border-l-2 border-l-accent rounded-lg px-6 py-5 max-w-[560px]">
              <p className="text-label-md font-satoshi uppercase tracking-widest text-accent mb-2">
                What Becomes Clear
              </p>
              <p className="text-body-md text-text-secondary leading-relaxed">
                {stage.outcome}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ─── Stage connector ─────────────────────────────────────────────
          Centered arrow between cards — reinforces sequence visually   */}
      {!isLast && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 hidden md:flex">
          <div className="w-8 h-8 rounded-full bg-surface-01 border border-accent/40 flex items-center justify-center shadow-accent-sm">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
              className="text-accent/60"
            >
              <path
                d="M6 2v8M3 7l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Method Page ──────────────────────────────────────────────────────────────
export default function MethodPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const whyRef = useRef(null)
  const whyInView = useInView(whyRef, { once: true, margin: '-80px' })
  const seqRef = useRef(null)
  const seqInView = useInView(seqRef, { once: true, margin: '-80px' })
  const resultRef = useRef(null)
  const resultInView = useInView(resultRef, { once: true, margin: '-80px' })

  // "Why" section content — structured for display
  const whyProblems = [
    'Execution starts before the diagnosis is complete.',
    'Budgets are spent before priorities are clear.',
    'Content is produced before messaging is aligned.',
    'Teams move before the system underneath them is ready to hold.',
  ]
  const whySolution = [
    { left: 'We do not begin with output.', right: 'We begin with truth.' },
    { left: 'We do not begin with tactics.', right: 'We begin with clarity.' },
  ]

  return (
    <>
      {/* ─── Hero ───────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative py-section-xl bg-surface-base overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,30,0,0.04) 0%, transparent 65%)' }}
        />
        {/* Ghost word — visual depth behind headline */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none font-satoshi font-black uppercase leading-none hidden lg:block"
          style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'rgba(255,30,0,0.04)', letterSpacing: '-0.05em' }}
          aria-hidden
        >
          METHOD
        </div>
        <div className="container-site relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            className="max-w-[720px]"
          >
            <motion.div variants={staggerItem} className="mb-7">
              <span className="text-label-md font-satoshi uppercase tracking-widest text-accent">The Method</span>
            </motion.div>
            <motion.h1 variants={staggerItem} className="text-display-lg font-satoshi text-text-primary mb-2">
              Growth does not compound by accident.
            </motion.h1>
            <motion.h1 variants={staggerItem} className="text-display-lg font-satoshi text-accent mb-8">
              It compounds by sequence.
            </motion.h1>
            <motion.div variants={staggerItem} className="w-12 h-px bg-accent mb-8" />
            <motion.p variants={staggerItem} className="text-body-lg text-text-secondary max-w-[560px] leading-relaxed">
              {methodContent.hero.body}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Why The Method Exists ──────────────────────────────────────── */}
      <section ref={whyRef} className="py-section-md bg-surface-01">
        <div className="container-site">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={whyInView ? 'visible' : 'hidden'}
            className="max-w-[760px]"
          >
            {/* Headline */}
            <motion.h2
              variants={staggerItem}
              className="text-heading-xl font-satoshi text-text-primary mb-10"
            >
              Why The Method Exists
            </motion.h2>

            {/* Lead */}
            <motion.p
              variants={staggerItem}
              className="text-body-lg text-text-secondary mb-8 leading-relaxed"
            >
              Most marketing in this market begins too late.
            </motion.p>

            {/* Problem list — each statement enters individually */}
            <div className="space-y-0 mb-10">
              {whyProblems.map((problem, i) => (
                <motion.div
                  key={problem}
                  initial={{ opacity: 0, y: 16 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 py-4 border-b border-surface-border first:border-t"
                >
                  <span className="flex-shrink-0 mt-[6px] w-1.5 h-1.5 rounded-full bg-accent" />
                  <p className="text-heading-lg font-satoshi text-text-primary">{problem}</p>
                </motion.div>
              ))}
            </div>

            {/* Result statement — pulled out with accent treatment */}
            <motion.div
              variants={staggerItem}
              className="pl-5 border-l-2 border-accent mb-10"
            >
              <p className="text-heading-lg font-satoshi text-text-primary">
                That is why so much activity fails to compound.
              </p>
            </motion.div>

            {/* Accent separator */}
            <motion.div variants={staggerItem} className="w-10 h-px bg-accent mb-10" />

            {/* Pivot declaration */}
            <motion.p
              variants={staggerItem}
              className="text-heading-xl font-satoshi text-text-primary mb-10"
            >
              The <BrandName /> Method exists to correct that sequence.
            </motion.p>

            {/* Solution — paired statements */}
            <motion.div variants={staggerItem} className="space-y-4 mb-6">
              {whySolution.map((pair, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 items-baseline">
                  <p className="text-body-lg text-text-muted">{pair.left}</p>
                  <p className="text-heading-xl font-satoshi text-text-primary">{pair.right}</p>
                </div>
              ))}
            </motion.div>
            <motion.p
              variants={staggerItem}
              className="text-body-lg text-text-secondary italic leading-relaxed"
            >
              Because when the order is wrong, even good work loses power.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Four stages ────────────────────────────────────────────────── */}
      <section className="bg-surface-01">
        <div className="container-site">
          <div className="pt-section-md mb-10">
            <h2 className="text-heading-xl font-satoshi text-text-primary mb-8">
              Four Stages. One Sequence. No Guesswork.
            </h2>

            {/* Stage flow strip */}
            <div className="flex flex-wrap items-center gap-3 pb-12 border-b border-surface-border">
              {methodContent.stages.map((stage, i) => (
                <div key={stage.number} className="flex items-center gap-3">
                  <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-surface-border bg-surface-02">
                    <span className="text-label-md font-satoshi text-accent tracking-widest">{stage.number}</span>
                    <span className="text-label-md font-satoshi text-text-secondary tracking-wide">{stage.name}</span>
                  </div>
                  {i < methodContent.stages.length - 1 && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="text-accent/50 flex-shrink-0">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Stage cards with connectors */}
          {methodContent.stages.map((stage, i) => (
            <StageCard
              key={stage.number}
              stage={stage}
              index={i}
              isLast={i === methodContent.stages.length - 1}
            />
          ))}
        </div>
      </section>

      {/* ─── Why The Sequence Matters ───────────────────────────────────── */}
      <section ref={seqRef} className="py-section-lg bg-surface-02 overflow-hidden">
        <div className="container-site">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={seqInView ? 'visible' : 'hidden'}
          >
            {/* Headline + body — two columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-20">
              <motion.div variants={staggerItem}>
                <h2 className="text-heading-xl font-satoshi text-text-primary mb-6">
                  Why The Sequence Matters
                </h2>
              </motion.div>
              <motion.div variants={staggerItem}>
                <p className="text-body-lg text-text-secondary leading-relaxed">
                  {methodContent.whySequence.body}
                </p>
              </motion.div>
            </div>

            {/* Full-width display moment: "Not speed. Not volume. Sequence." */}
            <div className="relative border-t border-surface-border pt-16">
              <div
                className="absolute inset-0 flex items-center justify-end pointer-events-none select-none overflow-hidden"
                aria-hidden
              >
                <span
                  className="font-satoshi font-black uppercase"
                  style={{ fontSize: 'clamp(6rem, 18vw, 16rem)', color: 'rgba(255,30,0,0.04)', letterSpacing: '-0.04em', lineHeight: 1 }}
                >
                  SEQUENCE
                </span>
              </div>

              <div className="relative z-10 space-y-2">
                {methodContent.whySequence.pullQuote.split('\n').map((line, i, arr) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={seqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className={`text-display-xl font-satoshi leading-tight ${i === arr.length - 1 ? 'text-accent' : 'text-text-primary'}`}
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── The Result — crescendo closer ──────────────────────────────── */}
      <section ref={resultRef} className="relative py-section-lg bg-surface-base overflow-hidden">
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{ height: '60%', background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(255,30,0,0.05) 0%, transparent 70%)' }}
        />
        <div className="container-site relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={resultInView ? 'visible' : 'hidden'}
          >
            <motion.h2
              variants={staggerItem}
              className="text-heading-xl font-satoshi text-text-primary mb-14"
            >
              The Result
            </motion.h2>

            {/* Result items — building crescendo, each staggers in */}
            <div className="mb-16">
              {methodContent.result.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={resultInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center gap-6 py-6 border-b border-surface-border last:border-0"
                  style={{ paddingLeft: `${i * 1.5}rem` }}
                >
                  <span
                    className="flex-shrink-0 font-satoshi font-black text-label-md tracking-widest"
                    style={{ color: 'rgba(255,30,0,0.35)' }}
                  >
                    0{i + 1}
                  </span>
                  <p className="text-heading-xl font-satoshi text-text-primary">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Closing pull quote + CTAs */}
            <motion.div variants={staggerItem} className="flex flex-col items-start gap-10">
              <blockquote className="pl-6 border-l-2 border-accent max-w-[480px]">
                <p className="text-body-lg text-text-secondary italic leading-relaxed">
                  {methodContent.result.body}
                </p>
              </blockquote>
              <div className="flex flex-wrap gap-4">
                {methodContent.ctas.map((cta) => (
                  <Button key={cta.href + cta.label} href={cta.href} variant={cta.variant}>
                    {cta.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
