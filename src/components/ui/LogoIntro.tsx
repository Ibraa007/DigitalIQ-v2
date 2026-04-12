'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { logoReveal, introOverlay } from '@/lib/motion'

const STORAGE_KEY = 'diq_intro_seen'

interface LogoIntroProps {
  onComplete: () => void
}

export default function LogoIntro({ onComplete }: LogoIntroProps) {
  // null = pre-hydration, true = visible, false = animating out
  const [show, setShow] = useState<null | boolean>(null)
  // done = exit animation fully finished — safe to remove from tree
  const [done, setDone] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY)
    if (seen) {
      // Returning visitor — skip immediately, unblock page
      setShow(false)
      setDone(true)
      onComplete()
    } else {
      setShow(true)
    }
  }, [onComplete])

  const handleExitComplete = () => {
    // Exit animation fully done — persist key and remove component
    localStorage.setItem(STORAGE_KEY, '1')
    setDone(true)
  }

  // Pre-hydration: no DOM output
  if (show === null) return null

  // Component fully done: remove from tree
  if (done) return null

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {show && (
        <motion.div
          key="intro-overlay"
          variants={introOverlay}
          initial="initial"
          animate="initial"
          exit="exit"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-surface-base"
        >
          {/* Subtle radial glow behind logo */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,30,0,0.04) 0%, transparent 70%)',
            }}
          />

          <motion.div
            variants={logoReveal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationComplete={(def) => {
              if (def === 'visible') {
                // Hold logo 800ms, then start exit — unblock page content
                // at the same moment so they cross-fade
                setTimeout(() => {
                  setShow(false)
                  onComplete()
                }, 800)
              }
            }}
            className="relative w-[70vw] sm:w-[52vw] md:w-[42vw] max-w-[640px]"
          >
            <Image
              src="/logo-white.png"
              alt="DigitalIQ"
              width={280}
              height={80}
              priority
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
