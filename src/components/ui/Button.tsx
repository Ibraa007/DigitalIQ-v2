import Link from 'next/link'

type Variant = 'primary' | 'ghost' | 'text'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  children: React.ReactNode
  className?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const variantClasses: Record<Variant, string> = {
  primary: [
    'bg-accent text-text-inverse font-satoshi',
    'hover:bg-accent-hover hover:shadow-accent-sm',
    'active:scale-[0.97]',
    'border border-transparent',
    'transition-[background-color,box-shadow,transform] duration-250 ease-premium',
  ].join(' '),
  ghost: [
    'bg-transparent text-text-primary font-satoshi',
    'border border-surface-border',
    'hover:border-accent-border hover:text-accent',
    'active:scale-[0.97]',
    'transition-[border-color,color,transform] duration-250 ease-premium',
  ].join(' '),
  text: [
    'bg-transparent text-text-secondary font-inter',
    'hover:text-text-primary',
    'relative group',
    'transition-colors duration-250 ease-premium',
  ].join(' '),
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-label-md rounded-md',
  md: 'px-6 py-3 text-label-lg rounded-md',
  lg: 'px-8 py-4 text-body-sm rounded-lg',
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  external = false,
  type = 'button',
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 select-none uppercase tracking-widest',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ')

  const inner = (
    <>
      {children}
      {variant === 'text' && (
        <span className="absolute bottom-0 left-0 h-px bg-accent w-0 group-hover:w-full transition-[width] duration-350 ease-premium" />
      )}
    </>
  )

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {inner}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {inner}
    </button>
  )
}
