'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, staggerItem } from '@/lib/motion'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function SystemCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t } = useLanguage()
  const { systemCta } = t.homeContent

  return (
    <section
      ref={ref}
      className="relative py-section-xl bg-surface-base overflow-hidden"
    >

      {/* Horizontal accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container-site relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-[720px]"
        >
          {/* Signature accent mark — deliberate pause before the statement */}
          <motion.div variants={staggerItem} className="flex items-center gap-2 mb-12">
            <span className="block w-1.5 h-1.5 bg-accent flex-shrink-0" />
            <span className="block w-12 h-px bg-accent" />
          </motion.div>

          <motion.h2
            variants={staggerItem}
            className="text-display-xl font-satoshi text-text-primary mb-3"
          >
            {systemCta.headline}
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-display-xl font-satoshi text-accent mb-10"
          >
            {systemCta.subheadline}
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap gap-4"
          >
            {systemCta.ctas.map((cta) => (
              <Button key={cta.href + cta.label} href={cta.href} variant={cta.variant} size="lg">
                {cta.label}
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
