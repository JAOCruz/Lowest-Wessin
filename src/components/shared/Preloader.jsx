import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const overlayRef = useRef(null)
  const barRef = useRef(null)
  const logoRef = useRef(null)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline()

    // Animate progress bar
    tl.to(barRef.current, {
      scaleX: 1,
      duration: 1.2,
      ease: 'power2.inOut',
    })
    // Fade logo
    .from(logoRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=1.2')

    // Slide out overlay
    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.7,
      ease: 'power3.inOut',
      onComplete: () => {
        setHidden(true)
        if (onComplete) onComplete()
      },
    }, '+=0.15')

    return () => tl.kill()
  }, [])

  if (hidden) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: '#10284d' }}
      aria-hidden="true"
    >
      {/* Logo / wordmark */}
      <div ref={logoRef} className="text-center mb-8">
        <p className="text-gold font-medium text-xs tracking-[0.35em] uppercase mb-3 opacity-60">
          Independent Legal Advisory
        </p>
        <h1
          className="font-display text-4xl font-bold"
          style={{ color: '#F5F5F0', fontFamily: "'Playfair Display', serif" }}
        >
          Cana Law
        </h1>
      </div>

      {/* Progress bar */}
      <div className="w-40 h-px bg-white/10 overflow-hidden rounded-full">
        <div
          ref={barRef}
          className="h-full rounded-full origin-left"
          style={{
            transform: 'scaleX(0)',
            backgroundColor: '#CBA135',
          }}
        />
      </div>
    </div>
  )
}
