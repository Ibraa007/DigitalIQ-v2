'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const dotX = useSpring(mouseX, { stiffness: 900, damping: 40 })
  const dotY = useSpring(mouseY, { stiffness: 900, damping: 40 })
  const ringX = useSpring(mouseX, { stiffness: 220, damping: 28 })
  const ringY = useSpring(mouseY, { stiffness: 220, damping: 28 })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!mediaQuery.matches) return

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const onEnterInteractive = () => setIsHovering(true)
    const onLeaveInteractive = () => setIsHovering(false)
    const onMouseDown = () => setIsClicking(true)
    const onMouseUp = () => setIsClicking(false)
    const onLeaveWindow = () => setIsVisible(false)
    const onEnterWindow = () => setIsVisible(true)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseleave', onLeaveWindow)
    document.addEventListener('mouseenter', onEnterWindow)

    const addListeners = () => {
      const els = document.querySelectorAll<HTMLElement>(
        'a, button, [role="button"], label, input, select, textarea'
      )
      els.forEach((el) => {
        el.addEventListener('mouseenter', onEnterInteractive)
        el.addEventListener('mouseleave', onLeaveInteractive)
      })
    }
    addListeners()

    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseleave', onLeaveWindow)
      document.removeEventListener('mouseenter', onEnterWindow)
      observer.disconnect()
    }
  }, [mouseX, mouseY, isVisible])

  if (!isVisible) return null

  const dotSize = isClicking ? 6 : 8
  const ringSize = isHovering ? 48 : 32

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999]"
        aria-hidden
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: '#FF1E00',
          width: dotSize,
          height: dotSize,
          mixBlendMode: 'difference',
        }}
      />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99998]"
        aria-hidden
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: isHovering ? 0.7 : 0.5,
          borderColor: isHovering ? 'rgba(255,30,0,0.9)' : 'rgba(255,30,0,0.5)',
        }}
        transition={{ duration: 0.2 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          border: '1px solid rgba(255,30,0,0.5)',
        }}
      />
    </>
  )
}
