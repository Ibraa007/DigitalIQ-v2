import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'DigitalIQ — Marketing Built on Structure'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080808',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 90px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: '#FF1E00',
          }}
        />

        {/* Ghost "IQ" — depth layer */}
        <div
          style={{
            position: 'absolute',
            right: '-40px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '400px',
            fontWeight: 900,
            color: 'rgba(255,30,0,0.05)',
            lineHeight: 1,
            letterSpacing: '-0.05em',
          }}
        >
          IQ
        </div>

        {/* Label row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '36px',
          }}
        >
          <div style={{ width: '20px', height: '1px', background: '#FF1E00' }} />
          <span
            style={{
              color: '#555555',
              fontSize: '13px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            Marketing Agency · Egypt & MENA
          </span>
        </div>

        {/* Brand name */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            marginBottom: '28px',
            lineHeight: 1,
          }}
        >
          <span style={{ fontSize: '100px', fontWeight: 900, color: '#f0f0f0' }}>
            Digital
          </span>
          <span style={{ fontSize: '100px', fontWeight: 900, color: '#FF1E00' }}>
            IQ
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: '26px',
            color: '#8a8a8a',
            margin: 0,
            lineHeight: 1.5,
            maxWidth: '560px',
          }}
        >
          Marketing built on structure.
        </p>

        {/* Bottom domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '44px',
            left: '90px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div style={{ width: '6px', height: '6px', background: '#FF1E00', borderRadius: '50%' }} />
          <span style={{ color: '#333333', fontSize: '13px', letterSpacing: '0.08em' }}>
            digitaliq.agency
          </span>
        </div>
      </div>
    ),
    { ...size },
  )
}
