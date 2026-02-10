export default function Badge({ children, variant = 'gold', className = '' }) {
  const styles = {
    gold: 'bg-gold/20 text-gold border-gold/30',
    tan: 'bg-tan/20 text-tan border-tan/30',
    white: 'bg-white/10 text-white border-white/20',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${styles[variant]} ${className}`}>
      {children}
    </span>
  )
}
