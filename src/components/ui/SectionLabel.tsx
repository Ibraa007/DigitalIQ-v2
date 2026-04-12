interface SectionLabelProps {
  children: React.ReactNode
  accent?: boolean
  className?: string
}

export default function SectionLabel({ children, accent = false, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        className={[
          'block w-5 h-px',
          accent ? 'bg-accent' : 'bg-text-muted',
        ].join(' ')}
      />
      <span
        className={[
          'text-label-md font-satoshi uppercase tracking-widest',
          accent ? 'text-accent' : 'text-text-muted',
        ].join(' ')}
      >
        {children}
      </span>
    </div>
  )
}
