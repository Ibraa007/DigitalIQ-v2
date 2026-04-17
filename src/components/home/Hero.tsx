'use client'

import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/motion'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

const HEADLINE_LINES_EN = [
  'Marketing without',
  'structure does not',
  'compound.',
]

const HEADLINE_LINES_AR = [
  'التسويق بدون هيكل',
  'ما بيتراكمش.',
]

// ─── Floating shape ────────────────────────────────────────────────────────────
function FloatingShape({
  className = '',
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  accentOpacity = 0.12,
  floatY = 30,
  floatX = 12,
  durationY = 16,
  durationX = 22,
  rotateDrift = 2,
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  accentOpacity?: number
  floatY?: number
  floatX?: number
  durationY?: number
  durationX?: number
  rotateDrift?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -140, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ x: [0, floatX, 0, -floatX * 0.6, 0] }}
        transition={{
          duration: durationX,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay * 0.5,
        }}
      >
        <motion.div
          animate={{
            y: [0, -floatY * 0.5, -floatY, -floatY * 0.6, 0, floatY * 0.3, 0],
            rotate: [0, rotateDrift * 0.5, rotateDrift, rotateDrift * 0.4, 0, -rotateDrift * 0.3, 0],
            scale: [1, 1.012, 1.02, 1.014, 1.004, 1],
          }}
          transition={{
            duration: durationY,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.18, 0.42, 0.62, 0.75, 0.88, 1],
            delay: delay * 0.3,
          }}
          style={{ width, height }}
          className="relative"
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(135deg, rgba(255,30,0,${accentOpacity}) 0%, rgba(255,30,0,${accentOpacity * 0.35}) 55%, transparent 100%)`,
              border: `1px solid rgba(255,30,0,${accentOpacity * 0.7})`,
              boxShadow: `0 12px 48px rgba(255,30,0,${accentOpacity * 0.5}), 0 4px 16px rgba(255,30,0,${accentOpacity * 0.3}), inset 0 1px 0 rgba(255,30,0,${accentOpacity * 0.45})`,
            }}
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(ellipse 50% 45% at 28% 30%, rgba(255,30,0,${accentOpacity * 0.4}), transparent 65%)`,
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const { t, isAr } = useLanguage()
  const { hero } = t.homeContent
  const HEADLINE_LINES = isAr ? HEADLINE_LINES_AR : HEADLINE_LINES_EN

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-surface-base">

      {/* ── Five floating shapes ─────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>

        {/* 01 — Large, upper-right */}
        <FloatingShape
          delay={0.3}
          width={580}
          height={130}
          rotate={12}
          accentOpacity={0.13}
          floatY={22}
          floatX={10}
          durationY={23}
          durationX={33}
          rotateDrift={1.8}
          className="right-[-6%] top-[12%]"
        />

        {/* 02 — Medium, lower-right */}
        <FloatingShape
          delay={0.5}
          width={420}
          height={100}
          rotate={-14}
          accentOpacity={0.1}
          floatY={32}
          floatX={-14}
          durationY={19}
          durationX={27}
          rotateDrift={-3.5}
          className="right-[6%] bottom-[16%]"
        />

        {/* 03 — Medium, left-center */}
        <FloatingShape
          delay={0.42}
          width={340}
          height={82}
          rotate={-10}
          accentOpacity={0.07}
          floatY={36}
          floatX={16}
          durationY={17}
          durationX={25}
          rotateDrift={4}
          className="left-[2%] top-[30%]"
        />

        {/* 04 — Small, upper-center */}
        <FloatingShape
          delay={0.62}
          width={200}
          height={55}
          rotate={18}
          accentOpacity={0.1}
          floatY={42}
          floatX={-16}
          durationY={13}
          durationX={19}
          rotateDrift={-5}
          className="left-[38%] top-[6%]"
        />

        {/* 05 — Small, lower-left */}
        <FloatingShape
          delay={0.75}
          width={160}
          height={46}
          rotate={-22}
          accentOpacity={0.08}
          floatY={38}
          floatX={12}
          durationY={11}
          durationX={17}
          rotateDrift={3.5}
          className="left-[22%] bottom-[12%]"
        />
      </div>

      {/* Radial glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(255,30,0,0.05) 0%, transparent 65%)',
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Bracket detail */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none" aria-hidden>
        <svg
          className="absolute right-[10%] top-1/2 -translate-y-1/2 opacity-[0.06]"
          width="120"
          height="220"
          viewBox="0 0 120 220"
          fill="none"
        >
          <path d="M 60 14 L 14 14 L 14 206 L 60 206" stroke="#FF1E00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 80 40 L 106 40 L 106 180 L 80 180" stroke="#FF1E00" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
        </svg>
      </div>

      {/* Hero content */}
      <div className="container-site relative z-10 py-section-xl">
        <div className="max-w-[680px]">

          {/* Headline */}
          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-display-lg font-satoshi text-text-primary mb-5"
          >
            {HEADLINE_LINES.map((line, i) => (
              <motion.span key={i} variants={staggerItem} className="block">
                {line}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-md text-text-secondary max-w-[480px] mb-9 leading-relaxed"
          >
            {hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            {hero.ctas.map((cta) => (
              <Button key={cta.href} href={cta.href} variant={cta.variant} size="md">
                {cta.label}
              </Button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-transparent to-text-muted"
        />
      </motion.div>

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        aria-hidden
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(8,8,8,0.8))' }}
      />
    </section>
  )
}
