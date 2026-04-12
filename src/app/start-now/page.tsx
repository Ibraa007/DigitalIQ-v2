'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { staggerContainer, staggerItem } from '@/lib/motion'
import { startNowContent } from '@/lib/content'

const contactInfo = {
  phones: [
    { display: '+20 1000 280071', href: 'tel:+201000280071' },
    { display: '02 33809486', href: 'tel:+20233809486' },
  ],
}

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/digitaliqglobal',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@digitaliqglobal',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.52V6.75a4.85 4.85 0 01-1.02-.06z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1DVfVFKz8N/?mibextid=wwXIfr',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/201000280071',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
]

// Hero process strip
const heroStrip = [
  { num: '01', label: 'Alignment Call' },
  { num: '02', label: 'Diagnosis' },
  { num: '03', label: 'System Design' },
]

// "What Start Now Means" broken into short statements
const whatItMeansStatements = [
  'DigitalIQ does not begin with packages.',
  'It begins by understanding the real state of the business.',
  'That means looking past the dashboard version to what is actually happening underneath the marketing.',
  'This is not a sales ritual. It is the beginning of a serious evaluation.',
]

// "THE OUTCOME" per step — derived from step content
const stepOutcomes: Record<string, string[]> = {
  'STEP 01': [
    'A clear picture of where the brand stands today',
    'Honest assessment of whether DigitalIQ is the right fit',
    'A defined next step if there is alignment',
  ],
  'STEP 02': [
    'A map of what is working and what is not',
    'The real reasons growth is slowing or stalling',
    'A ranked list of what needs attention first',
  ],
  'STEP 03': [
    'A custom growth model built around your brand',
    'A defined sequence: which engines, in what order',
    'A scope grounded in business reality, not packages',
  ],
}

interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
}

export default function StartNowPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const meansRef = useRef(null)
  const meansInView = useInView(meansRef, { once: true, margin: '-60px' })
  const stepsRef = useRef(null)
  const stepsInView = useInView(stepsRef, { once: true, margin: '-60px' })
  const honestyRef = useRef(null)
  const honestyInView = useInView(honestyRef, { once: true, margin: '-80px' })
  const contactRef = useRef(null)
  const contactInView = useInView(contactRef, { once: true, margin: '-60px' })

  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors: FormErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required.'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.'
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative py-section-xl bg-surface-base overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,30,0,0.05) 0%, transparent 65%)' }}
        />
        {/* Ghost word — visual depth, restrained */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none font-satoshi font-black uppercase leading-none hidden lg:block"
          style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', color: 'rgba(255,30,0,0.04)', letterSpacing: '-0.05em' }}
          aria-hidden
        >
          CLARITY
        </div>
        <div className="container-site relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            className="max-w-[680px]"
          >
            <motion.div variants={staggerItem} className="mb-6">
              <span className="text-label-md font-satoshi uppercase tracking-widest text-accent">Start Now</span>
            </motion.div>
            <motion.h1
              variants={staggerItem}
              className="text-display-lg font-satoshi text-text-primary mb-6"
            >
              {startNowContent.hero.headline}
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-body-lg text-text-secondary max-w-[520px] leading-relaxed mb-12"
            >
              {startNowContent.hero.body}
            </motion.p>

            {/* Process strip */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-3"
            >
              {heroStrip.map((item, i) => (
                <div key={item.num} className="flex items-center gap-3">
                  <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-surface-border bg-surface-02">
                    <span className="text-label-md font-satoshi text-accent tracking-widest">{item.num}</span>
                    <span className="text-label-md font-satoshi text-text-secondary tracking-wide">{item.label}</span>
                  </div>
                  {i < heroStrip.length - 1 && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="text-accent flex-shrink-0">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── What Start Now Actually Means ───────────────────────────────── */}
      <section ref={meansRef} className="py-section-md bg-surface-01">
        <div className="container-site">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={meansInView ? 'visible' : 'hidden'}
            className="max-w-[720px]"
          >
            <motion.h2 variants={staggerItem} className="text-heading-xl font-satoshi text-text-primary mb-10">
              What Start Now Actually Means
            </motion.h2>

            <div className="space-y-0">
              {whatItMeansStatements.map((statement, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex items-start gap-5 py-5 border-b border-surface-border last:border-0"
                >
                  <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-accent" />
                  <p className="text-body-lg text-text-secondary leading-relaxed">{statement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Three steps ─────────────────────────────────────────────────── */}
      <section ref={stepsRef} className="py-section-md bg-surface-01">
        <div className="container-site">
          <div className="mb-14">
            <h2 className="text-heading-xl font-satoshi text-text-primary">
              A Structured Beginning. No Guesswork.
            </h2>
          </div>

          <div className="relative">
            {/* Accent connector line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(to bottom, transparent, var(--accent) 20%, var(--accent) 80%, transparent)' }}
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={stepsInView ? 'visible' : 'hidden'}
              className="space-y-0"
            >
              {startNowContent.steps.map((step, stepIndex) => (
                <motion.div
                  key={step.number}
                  variants={staggerItem}
                  className="relative border-b border-surface-border last:border-0 py-10 md:py-12"
                >
                  {/* Connector dot */}
                  <div className="absolute left-[12px] top-10 w-6 h-6 rounded-full bg-surface-base border border-accent items-center justify-center hidden md:flex z-10">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>

                  <div className="md:pl-16">
                    {/* Oversized background number */}
                    <div
                      className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none font-satoshi font-black leading-none hidden lg:block"
                      style={{ fontSize: '9rem', color: 'rgba(255,30,0,0.04)' }}
                      aria-hidden
                    >
                      {step.number.replace('STEP ', '')}
                    </div>

                    <div className={`relative z-10 max-w-[640px] ${stepIndex === 1 ? 'bg-surface-02 border border-accent/20 rounded-xl px-6 py-6 shadow-elev-2 overflow-hidden' : ''}`}>
                      {stepIndex === 1 && (
                        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                      )}
                      <p className="text-label-md font-satoshi text-accent uppercase tracking-widest mb-3">
                        {step.number}
                      </p>
                      <h3 className="text-heading-xl font-satoshi text-text-primary mb-5">
                        {step.name}
                      </h3>
                      <p className="text-body-lg text-text-secondary leading-relaxed mb-6">
                        {step.body}
                      </p>
                      {step.notes && (
                        <div className="space-y-2 pl-4 border-l-2 border-surface-border mb-6">
                          {step.notes.map((note) => (
                            <p key={note} className="text-body-md text-text-muted italic">
                              {note}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* "THE OUTCOME" callout */}
                      {stepOutcomes[step.number] && (
                        <div className="relative pl-4 border-l-2 border-accent bg-surface-02 rounded-r-lg py-4 pr-4">
                          <p className="text-label-md font-satoshi text-accent uppercase tracking-widest mb-3">
                            THE OUTCOME
                          </p>
                          <ul className="space-y-2">
                            {stepOutcomes[step.number].map((outcome) => (
                              <li key={outcome} className="flex items-start gap-3">
                                <span className="flex-shrink-0 mt-[7px] w-1 h-1 rounded-full bg-accent" />
                                <span className="text-body-md text-text-secondary">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Why This Process Exists ──────────────────────────────────────── */}
      <section className="py-section-md bg-surface-02">
        <div className="container-site">
          <div className="max-w-[680px]">
            <h2 className="text-heading-xl font-satoshi text-text-primary mb-6">
              Why This Process Exists
            </h2>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              {startNowContent.whyProcess.body}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Honesty block ───────────────────────────────────────────────── */}
      <section ref={honestyRef} className="relative py-section-lg bg-surface-base overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 40% 50% at 50% 50%, rgba(255,30,0,0.04) 0%, transparent 65%)' }}
        />
        <div className="container-site relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={honestyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-surface-02 border border-surface-border rounded-2xl p-8 md:p-12 max-w-[760px] mx-auto shadow-elev-3"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent rounded-t-2xl" />

            <span className="block text-label-md font-satoshi uppercase tracking-widest text-accent mb-6">{startNowContent.honesty.label}</span>

            <div className="space-y-5 mb-8">
              {startNowContent.honesty.items.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-accent" />
                  <p className="text-heading-md font-satoshi text-text-primary">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-body-md text-text-secondary leading-relaxed">
              {startNowContent.honesty.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact Section ─────────────────────────────────────────────── */}
      <section id="contact" ref={contactRef} className="py-section-lg bg-surface-01">
        <div className="container-site">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={contactInView ? 'visible' : 'hidden'}
          >
            {/* Section heading */}
            <motion.div variants={staggerItem} className="mb-14">
              <span className="block text-label-md font-satoshi uppercase tracking-widest text-text-muted mb-5">Get In Touch</span>
              <h2 className="text-display-lg font-satoshi text-text-primary max-w-[480px]">
                Start the conversation.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">

              {/* ─── Left: Contact info ─────────────────────────────────── */}
              <motion.div variants={staggerItem} className="space-y-8">

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface-02 border border-surface-border flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m2 7 10 7 10-7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-label-md text-text-muted uppercase tracking-widest font-satoshi mb-1">Email</p>
                    <Link
                      href="mailto:Hello@DigitalIQ.agency"
                      className="text-body-md text-text-secondary hover:text-accent transition-colors duration-250"
                    >
                      Hello@DigitalIQ.agency
                    </Link>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface-02 border border-surface-border flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.17 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.19 7.76a16 16 0 006.06 6.06l1.13-1.13a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-label-md text-text-muted uppercase tracking-widest font-satoshi mb-1">Phone</p>
                    <div className="space-y-1">
                      {contactInfo.phones.map((p) => (
                        <Link
                          key={p.href}
                          href={p.href}
                          className="block text-body-md text-text-secondary hover:text-accent transition-colors duration-250"
                        >
                          {p.display}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface-02 border border-surface-border flex items-center justify-center">
                    <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-label-md text-text-muted uppercase tracking-widest font-satoshi mb-1">Address</p>
                    <p className="text-body-md text-text-secondary leading-snug">
                      3A El-Amal Street,<br />El Shiekh Zayed, Giza
                    </p>
                  </div>
                </div>

                {/* WhatsApp quick CTA */}
                <Link
                  href="https://wa.me/201000280071"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-accent/40 bg-accent/5 text-text-primary hover:bg-accent/10 hover:border-accent/60 transition-[background-color,border-color] duration-250"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-accent flex-shrink-0" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="text-body-md font-satoshi">Chat on WhatsApp</span>
                </Link>

                {/* Social links */}
                <div>
                  <p className="text-label-md text-text-muted uppercase tracking-widest font-satoshi mb-4">Follow Us</p>
                  <div className="flex items-center gap-3">
                    {socialLinks.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-surface-border text-text-muted hover:text-accent hover:border-accent/50 transition-[color,border-color] duration-250"
                      >
                        {s.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* ─── Right: Contact form ─────────────────────────────────── */}
              <motion.div variants={staggerItem}>
                <div className="relative bg-surface-02 border border-surface-border rounded-2xl p-8 md:p-10 shadow-elev-3">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent rounded-t-2xl" />

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="py-12 flex flex-col items-center text-center gap-5"
                    >
                      <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                        <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-heading-lg font-satoshi text-text-primary mb-2">Message received.</h3>
                        <p className="text-body-md text-text-secondary">We will be in touch within 24 hours to schedule the Alignment Call.</p>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      {/* Name + Phone row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-label-md font-satoshi text-text-secondary uppercase tracking-widest mb-2">
                            Full Name <span className="text-accent">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className={[
                              'w-full bg-surface-03 border rounded-lg px-4 py-3 text-body-md text-text-primary placeholder:text-text-muted',
                              'focus:outline-none focus:border-accent/60 transition-[border-color] duration-250',
                              errors.name ? 'border-red-500/60' : 'border-surface-border',
                            ].join(' ')}
                          />
                          {errors.name && (
                            <p className="mt-1.5 text-label-md text-red-400">{errors.name}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-label-md font-satoshi text-text-secondary uppercase tracking-widest mb-2">
                            Phone <span className="text-accent">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+20 ..."
                            className={[
                              'w-full bg-surface-03 border rounded-lg px-4 py-3 text-body-md text-text-primary placeholder:text-text-muted',
                              'focus:outline-none focus:border-accent/60 transition-[border-color] duration-250',
                              errors.phone ? 'border-red-500/60' : 'border-surface-border',
                            ].join(' ')}
                          />
                          {errors.phone && (
                            <p className="mt-1.5 text-label-md text-red-400">{errors.phone}</p>
                          )}
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-label-md font-satoshi text-text-secondary uppercase tracking-widest mb-2">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full bg-surface-03 border border-surface-border rounded-lg px-4 py-3 text-body-md text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/60 transition-[border-color] duration-250"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-label-md font-satoshi text-text-secondary uppercase tracking-widest mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your brand and where you are trying to go."
                          className="w-full bg-surface-03 border border-surface-border rounded-lg px-4 py-3 text-body-md text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/60 transition-[border-color] duration-250 resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-[#080808] text-label-lg font-satoshi uppercase tracking-widest rounded-lg hover:bg-accent-hover transition-colors duration-250"
                      >
                        Send Message
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
                          <path d="M2 11L11 2M11 2H4.5M11 2V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      <p className="text-label-md text-text-muted text-center">
                        We respond within 24 hours. No pitch, no pressure.
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
