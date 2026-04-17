'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { staggerContainer, staggerItem } from '@/lib/motion'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MethodPreview() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { t, isAr, href } = useLanguage()
  const { method } = t.homeContent

  return (
    <section ref={ref} className="py-section-lg bg-surface-02">
      <div className="container-site">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <motion.div variants={staggerItem} className="mb-6">
            <span className="text-label-md font-satoshi uppercase tracking-widest text-text-muted">{method.label}</span>
          </motion.div>

          <motion.h2
            variants={staggerItem}
            className="font-satoshi text-text-primary text-heading-xl mb-4"
          >
            {(isAr
              ? ['أربع مراحل.', 'تسلسل واحد.', 'بدون تخمين.']
              : ['Four stages.', 'One sequence.', 'No guesswork.']
            ).map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-body-md text-text-secondary max-w-[520px] leading-relaxed"
          >
            {method.subheadline}
          </motion.p>
        </motion.div>

        {/* Stage cards + connectors */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14"
        >
          {method.stages.map((stage, i) => (
            <div key={stage.number} className="relative flex items-stretch">
              {/* Card */}
              <motion.div
                variants={staggerItem}
                className="relative group flex-1 bg-surface-03 border border-surface-border rounded-xl p-6 shadow-elev-2 hover:shadow-elev-3 hover:border-accent/40 transition-[box-shadow,border-color] duration-350 ease-premium overflow-hidden"
              >
                {/* Background number — accent tinted */}
                <span
                  className="absolute top-3 right-4 text-[4rem] font-satoshi font-black leading-none select-none pointer-events-none"
                  style={{ color: 'rgba(255,255,255,0.05)' }}
                  aria-hidden
                >
                  {stage.number}
                </span>

                {/* Content */}
                <div className="relative z-10">
                  <span className="block text-label-md font-satoshi text-text-muted uppercase tracking-widest mb-2">
                    {stage.number}
                  </span>
                  <h3 className="text-heading-lg font-satoshi text-accent mb-3">
                    {stage.name}
                  </h3>
                  <p className="text-body-sm text-text-secondary leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Hover accent bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-350 ease-premium origin-left" />
              </motion.div>

              {/* Connector arrow — desktop only, between cards (not after last) */}
              {i < method.stages.length - 1 && (
                <div className="hidden lg:flex items-center justify-center w-0 overflow-visible z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -4 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -4 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute"
                    style={{ left: '100%', transform: 'translateX(-50%)' }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="rgba(255,30,0,0.35)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA — separated */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="pt-8 border-t border-surface-border"
        >
          <Button href={href(method.cta.href)} variant="ghost" size="md">
            {method.cta.label}
            <span className="ml-1.5 text-accent">→</span>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
