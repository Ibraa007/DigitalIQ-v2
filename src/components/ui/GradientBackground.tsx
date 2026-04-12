'use client'

import { useEffect, useRef, useState } from 'react'

// DigitalIQ brand palette — dark reds on black
// Using RGB strings so they compose cleanly into radial-gradient rgba() calls
const C = {
  first:   '255, 22, 0',    // pure accent — the dominant blob
  second:  '160, 14, 0',    // dark red — secondary
  third:   '90,  7,  0',    // deep dark red — recedes
  fourth:  '210, 18, 0',    // warm red — orbits wide
  fifth:   '120, 10, 0',    // brownish-red — fills gaps
  pointer: '255, 30, 0',    // mouse-follow — stays on-brand
}

export default function GradientBackground({ interactive = true }: { interactive?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const interactiveRef = useRef<HTMLDivElement>(null)
  const curX = useRef(0)
  const curY = useRef(0)
  const tgX = useRef(0)
  const tgY = useRef(0)
  const rafRef = useRef<number | null>(null)
  const [isSafari, setIsSafari] = useState(false)

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
  }, [])

  useEffect(() => {
    if (!interactive) return
    function move() {
      if (!interactiveRef.current) {
        rafRef.current = requestAnimationFrame(move)
        return
      }
      curX.current += (tgX.current - curX.current) / 20
      curY.current += (tgY.current - curY.current) / 20
      interactiveRef.current.style.transform = `translate(${Math.round(curX.current)}px, ${Math.round(curY.current)}px)`
      rafRef.current = requestAnimationFrame(move)
    }
    rafRef.current = requestAnimationFrame(move)
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current) }
  }, [interactive])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    tgX.current = e.clientX - rect.left
    tgY.current = e.clientY - rect.top
  }

  const blobFilter = isSafari ? 'blur(48px)' : 'url(#diq-goo) blur(48px)'

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      aria-hidden
    >
      {/* Goo SVG filter — blends blobs into organic shapes */}
      <svg className="hidden">
        <defs>
          <filter id="diq-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Blob container */}
      <div className="absolute inset-0 w-full h-full" style={{ filter: blobFilter }}>

        {/* 01 — primary red, centered, dominant */}
        <div
          className="absolute w-[70%] h-[70%] top-[15%] left-[15%] rounded-full opacity-90 animate-grad-first"
          style={{
            background: `radial-gradient(circle at center, rgba(${C.first}, 0.9) 0%, rgba(${C.first}, 0) 55%) no-repeat`,
            mixBlendMode: 'screen',
            transformOrigin: 'center center',
          }}
        />

        {/* 02 — dark red, orbits upper-left */}
        <div
          className="absolute w-[65%] h-[65%] top-[17%] left-[17%] rounded-full opacity-80 animate-grad-second"
          style={{
            background: `radial-gradient(circle at center, rgba(${C.second}, 0.85) 0%, rgba(${C.second}, 0) 50%) no-repeat`,
            mixBlendMode: 'screen',
            transformOrigin: 'calc(50% - 360px)',
          }}
        />

        {/* 03 — deep red, wide orbit upper-right */}
        <div
          className="absolute w-[60%] h-[60%] top-[20%] left-[20%] rounded-full opacity-70 animate-grad-third"
          style={{
            background: `radial-gradient(circle at center, rgba(${C.third}, 0.8) 0%, rgba(${C.third}, 0) 50%) no-repeat`,
            mixBlendMode: 'screen',
            transformOrigin: 'calc(50% + 360px)',
          }}
        />

        {/* 04 — warm red, orbits lower */}
        <div
          className="absolute w-[55%] h-[55%] top-[22%] left-[22%] rounded-full opacity-75 animate-grad-fourth"
          style={{
            background: `radial-gradient(circle at center, rgba(${C.fourth}, 0.75) 0%, rgba(${C.fourth}, 0) 50%) no-repeat`,
            mixBlendMode: 'screen',
            transformOrigin: 'calc(50% - 180px)',
          }}
        />

        {/* 05 — brownish-red, wide diagonal orbit */}
        <div
          className="absolute w-[60%] h-[60%] top-[20%] left-[20%] rounded-full opacity-65 animate-grad-fifth"
          style={{
            background: `radial-gradient(circle at center, rgba(${C.fifth}, 0.7) 0%, rgba(${C.fifth}, 0) 50%) no-repeat`,
            mixBlendMode: 'screen',
            transformOrigin: 'calc(50% - 700px) calc(50% + 700px)',
          }}
        />

        {/* Interactive mouse blob */}
        {interactive && (
          <div
            ref={interactiveRef}
            className="absolute w-full h-full -top-1/2 -left-1/2 rounded-full opacity-60"
            style={{
              background: `radial-gradient(circle at center, rgba(${C.pointer}, 0.7) 0%, rgba(${C.pointer}, 0) 50%) no-repeat`,
              mixBlendMode: 'screen',
            }}
          />
        )}
      </div>
    </div>
  )
}
