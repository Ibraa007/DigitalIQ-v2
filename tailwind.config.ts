import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'surface-base': '#080808',
        'surface-01': '#0f0f0f',
        'surface-02': '#141414',
        'surface-03': '#1a1a1a',
        'surface-04': '#222222',
        'surface-border': '#2a2a2a',
        'surface-divider': '#1f1f1f',
        'text-primary': '#f0f0f0',
        'text-secondary': '#8a8a8a',
        'text-muted': '#555555',
        'text-inverse': '#080808',
        'accent': '#FF1E00',
        'accent-hover': '#FF3A1A',
        'accent-dim': 'rgba(255,30,0,0.08)',
        'accent-border': 'rgba(255,30,0,0.25)',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem,7vw,6.5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'display-xl':  ['clamp(2.5rem,5.5vw,5rem)', { lineHeight: '1.04', letterSpacing: '-0.025em' }],
        'display-lg':  ['clamp(1.875rem,3.5vw,3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-xl':  ['clamp(1.5rem,2.5vw,2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'heading-lg':  ['clamp(1.25rem,2vw,1.875rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-md':  ['1.25rem', { lineHeight: '1.3' }],
        'body-lg':     ['1.125rem', { lineHeight: '1.75' }],
        'body-md':     ['1rem', { lineHeight: '1.7' }],
        'body-sm':     ['0.9375rem', { lineHeight: '1.65' }],
        'label-lg':    ['0.875rem', { lineHeight: '1', letterSpacing: '0.1em' }],
        'label-md':    ['0.8125rem', { lineHeight: '1', letterSpacing: '0.12em' }],
      },
      boxShadow: {
        'elev-1': '0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.5)',
        'elev-2': '0 4px 16px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.4)',
        'elev-3': '0 12px 40px rgba(0,0,0,0.6), 0 4px 12px rgba(0,0,0,0.5)',
        'elev-4': '0 24px 80px rgba(0,0,0,0.7), 0 8px 24px rgba(0,0,0,0.5)',
        'accent-sm': '0 0 12px rgba(255,30,0,0.18)',
        'accent-md': '0 0 30px rgba(255,30,0,0.22)',
        'accent-lg': '0 0 60px rgba(255,30,0,0.28)',
        'inset-depth': 'inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.3)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'reveal': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '500': '500ms',
        '700': '700ms',
      },
      maxWidth: {
        'container': '1280px',
      },
      spacing: {
        'section-xl': 'clamp(4rem, 10vw, 10rem)',
        'section-lg': 'clamp(3rem, 7vw, 7.5rem)',
        'section-md': 'clamp(2rem, 5vw, 5rem)',
        'section-sm': 'clamp(1.25rem, 3vw, 3rem)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'accent-pulse': {
          '0%, 100%': { boxShadow: '0 0 12px rgba(255,30,0,0.18)' },
          '50%': { boxShadow: '0 0 30px rgba(255,30,0,0.38)' },
        },
        'grad-first': {
          '0%':   { transform: 'translate(0, 0) scale(1)' },
          '33%':  { transform: 'translate(-6%, 8%) scale(1.06)' },
          '66%':  { transform: 'translate(6%, -6%) scale(0.94)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        'grad-second': {
          '0%':   { transform: 'translate(0, 0) scale(1)' },
          '33%':  { transform: 'translate(8%, -8%) scale(0.95)' },
          '66%':  { transform: 'translate(-8%, 6%) scale(1.05)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        'grad-third': {
          '0%':   { transform: 'translate(0, 0) scale(1)' },
          '33%':  { transform: 'translate(-12%, -6%) scale(1.08)' },
          '66%':  { transform: 'translate(10%, 8%) scale(0.92)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        'grad-fourth': {
          '0%':   { transform: 'translate(0, 0) scale(1)' },
          '33%':  { transform: 'translate(10%, 6%) scale(0.96)' },
          '66%':  { transform: 'translate(-10%, -8%) scale(1.04)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        'grad-fifth': {
          '0%':   { transform: 'translate(0, 0) scale(1)' },
          '33%':  { transform: 'translate(-6%, 12%) scale(1.03)' },
          '66%':  { transform: 'translate(8%, -10%) scale(0.97)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'accent-pulse': 'accent-pulse 2.5s ease-in-out infinite',
        'grad-first':  'grad-first  20s linear infinite',
        'grad-second': 'grad-second 26s linear infinite',
        'grad-third':  'grad-third  17s linear infinite',
        'grad-fourth': 'grad-fourth 30s linear infinite',
        'grad-fifth':  'grad-fifth  23s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
