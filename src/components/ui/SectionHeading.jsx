export default function SectionHeading({ title, subtitle, align = 'center', className = '' }) {
  const alignment = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-body/70 max-w-2xl mx-auto font-body">
          {subtitle}
        </p>
      )}
    </div>
  )
}
