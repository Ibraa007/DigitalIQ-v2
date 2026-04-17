'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { staggerContainer, staggerItem } from '@/lib/motion'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function EnginesOverview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t, isAr, href } = useLanguage()
  const { system } = t.homeContent

  return (
    <section ref={ref} className="py-section-lg bg-surface-01">
      <div className="container-site">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <motion.div variants={staggerItem} className="mb-6">
            <span className="text-label-md font-satoshi uppercase tracking-widest text-text-muted">{system.label}</span>
          </motion.div>

          {/* Headline — split into two lines */}
          <motion.h2
            variants={staggerItem}
            className="text-display-lg font-satoshi text-text-primary"
          >
            <span className="block">{isAr ? 'خمس محركات.' : 'Five engines.'}</span>
            <span className="block text-accent">{isAr ? 'طبقة ذكاء واحدة.' : 'One Intelligence Layer.'}</span>
          </motion.h2>
        </motion.div>

        {/* Two-panel layout */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-0 items-start">

          {/* Left — Intelligence Layer (sticky) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[38%] lg:sticky lg:top-28 flex-shrink-0 lg:pr-10"
          >
            <div className="relative bg-surface-02 border border-accent/25 rounded-2xl p-8 md:p-10 shadow-accent-sm overflow-hidden">
              {/* Ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,30,0,0.06) 0%, transparent 65%)',
                }}
              />

              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

              <div className="relative z-10">
                <span className="block text-label-md font-satoshi text-accent uppercase tracking-widest mb-6">
                  {system.intelligenceLayer.label}
                </span>

                <h3 className="text-heading-xl font-satoshi text-text-primary mb-4 leading-tight">
                  {system.intelligenceLayer.headline}
                </h3>

                <p className="text-body-md text-text-secondary leading-relaxed mb-8">
                  {system.intelligenceLayer.body}
                </p>

                <div className="flex flex-col gap-3">
                  {(isAr
                    ? ['القرارات بتفضل متصلة.', 'الأولويات بتفضل واضحة.', 'التنفيذ بيفضل متوافق.']
                    : ['Decisions stay connected.', 'Priorities stay clear.', 'Execution stays aligned.']
                  ).map((line, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="block w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-body-sm text-text-secondary">{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual bridge — dotted line + arrow pointing right toward engines */}
            <div className="hidden lg:flex items-center gap-3 mt-6 pl-2">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="block w-1.5 h-px bg-accent/30" />
                ))}
              </div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="rgba(255,30,0,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-label-md text-text-muted font-satoshi uppercase tracking-widest">
                {isAr ? 'مدعوم بـ' : 'Powered by'}
              </span>
            </div>
          </motion.div>

          {/* Right — Five engines as stacked rows */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="w-full lg:w-[62%] flex flex-col divide-y divide-surface-border border-t border-b border-surface-border"
          >
            {system.engines.map((engine) => (
              <motion.div key={engine.number} variants={staggerItem}>
                <Link
                  href={href(engine.href)}
                  className="group relative flex items-start gap-5 py-7 px-4 hover:bg-surface-02/50 transition-colors duration-250 overflow-hidden"
                >
                  {/* Left accent bar — slides in on hover */}
                  <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-350 ease-premium origin-top" />

                  {/* Number — larger, more defined */}
                  <div className="relative flex-shrink-0 w-10 pt-0.5">
                    <span
                      className="absolute -top-2 -left-1 text-[3rem] font-satoshi font-black leading-none select-none pointer-events-none transition-colors duration-250"
                      style={{ color: 'rgba(255,30,0,0.06)' }}
                      aria-hidden
                    >
                      {engine.number}
                    </span>
                    <span className="relative text-label-md font-satoshi text-text-muted group-hover:text-accent transition-colors duration-250">
                      {engine.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-heading-md font-satoshi text-text-primary group-hover:text-accent transition-colors duration-250 mb-1.5">
                      {engine.name}
                    </h4>
                    <p className="text-body-sm text-text-secondary leading-relaxed">
                      {engine.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 pt-1 text-text-muted group-hover:text-accent transition-[color,transform] duration-250 group-hover:translate-x-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <Button href={href(system.cta.href)} variant="ghost">
            {system.cta.label}
            <span className="ml-1 text-accent">→</span>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
