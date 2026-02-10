import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-gold text-navy font-semibold hover:bg-gold-light focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy',
  outline:
    'border border-gold text-gold hover:bg-gold/10 focus-visible:ring-2 focus-visible:ring-gold',
  ghost:
    'text-gold hover:text-gold-light focus-visible:ring-2 focus-visible:ring-gold',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded-lg transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
