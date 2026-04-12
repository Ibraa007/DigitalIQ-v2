interface DividerProps {
  className?: string
  accent?: boolean
}

export default function Divider({ className = '', accent = false }: DividerProps) {
  if (accent) {
    return (
      <div
        className={`h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent ${className}`}
      />
    )
  }
  return (
    <div
      className={`h-px bg-surface-border ${className}`}
    />
  )
}
