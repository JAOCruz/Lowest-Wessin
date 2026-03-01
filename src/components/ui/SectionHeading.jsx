export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
  accent = true,
}) {
  const alignment = align === 'center' ? 'text-center' : 'text-left'
  const accentAlign = align === 'center' ? 'mx-auto' : ''

  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
        {title}
      </h2>
      {accent && (
        <div
          className={`h-0.5 w-12 rounded-full mb-4 ${accentAlign}`}
          style={{ background: 'linear-gradient(90deg, #CBA135, #d9b94e)' }}
          aria-hidden="true"
        />
      )}
      {subtitle && (
        <p className="text-lg text-body/70 max-w-2xl mx-auto font-body">
          {subtitle}
        </p>
      )}
    </div>
  )
}
