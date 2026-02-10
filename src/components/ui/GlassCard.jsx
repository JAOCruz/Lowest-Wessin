export default function GlassCard({ children, className = '', dark = false, ...props }) {
  const base = dark
    ? 'glass rounded-2xl p-6'
    : 'bg-white rounded-2xl p-6 border border-navy/8 shadow-sm'

  return (
    <div className={`${base} ${className}`} {...props}>
      {children}
    </div>
  )
}
