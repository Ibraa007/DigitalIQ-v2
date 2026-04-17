'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function WhatChanges() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useLanguage()
  const { whatChanges } = t.homeContent

  return (
    <section ref={ref} className="py-section-lg bg-surface-02">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={staggerItem} className="mb-6">
              <span className="text-label-md font-satoshi uppercase tracking-widest text-text-muted">{whatChanges.label}</span>
            </motion.div>
            <motion.h2
              variants={staggerItem}
              className="text-display-lg font-satoshi text-text-primary"
            >
              {whatChanges.headline}
            </motion.h2>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-0"
          >
            {whatChanges.items.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="flex items-start gap-4 py-5 border-b border-surface-border last:border-0"
              >
                <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-accent" />
                <p className="text-body-lg text-text-secondary">{item}</p>
              </motion.div>
            ))}

            <motion.p
              variants={staggerItem}
              className="pt-6 text-body-md text-text-muted italic"
            >
              {whatChanges.body}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
