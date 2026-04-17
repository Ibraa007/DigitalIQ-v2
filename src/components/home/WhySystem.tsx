'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function WhySystem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { t } = useLanguage()
  const { builtFor } = t.homeContent

  return (
    <section ref={ref} className="py-section-lg bg-surface-01">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left — vertical accent line */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="origin-top w-px bg-accent self-stretch"
            />
          </div>

          {/* Right — content */}
          <div className="lg:col-span-11">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              {/* Label */}
              <motion.div variants={staggerItem} className="mb-5">
                <span className="text-label-md font-satoshi uppercase tracking-widest text-accent">{builtFor.label}</span>
              </motion.div>

              {/* Headline — one step down from display-lg */}
              <motion.h2
                variants={staggerItem}
                className="text-heading-xl font-satoshi text-text-primary mb-8 max-w-[560px]"
              >
                {builtFor.headline}
              </motion.h2>

              {/* Pull quote — the core diagnostic statement */}
              <motion.div
                variants={staggerItem}
                className="relative mb-8 pl-5 border-l-2 border-accent"
              >
                <p className="text-heading-xl font-satoshi text-text-primary leading-snug">
                  {builtFor.pullQuote}
                </p>
              </motion.div>

              {/* Symptom list — numbered diagnostic format */}
              <motion.ul
                variants={staggerItem}
                className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4"
              >
                {builtFor.symptoms.map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3 py-1 border-b border-surface-border last:border-0">
                    <span
                      className="flex-shrink-0 mt-px text-label-md font-satoshi font-black tracking-widest leading-tight"
                      style={{ color: 'rgba(255,30,0,0.30)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-body-sm text-text-secondary leading-relaxed">{symptom}</span>
                  </li>
                ))}
              </motion.ul>

              {/* Body paragraphs */}
              <div className="max-w-[580px] space-y-4">
                {builtFor.body.map((para, i) => (
                  <motion.p
                    key={i}
                    variants={staggerItem}
                    className="text-body-md text-text-secondary leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
