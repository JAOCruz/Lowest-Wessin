import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'
import { CONSULTATION_URL } from '../../lib/constants'
import Button from '../ui/Button'
import Container from '../ui/Container'

const heroImages = [
  '/images/propertiesrd/1/1.jpg',
  '/images/propertiesrd/2/3.jpg',
  '/images/propertiesrd/3/5.jpg',
]

export default function HeroSection() {
  const sectionRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      tl.from('.hero-overline', { y: 20, opacity: 0, duration: 0.6 })
        .from('.hero-title', { y: 30, opacity: 0, duration: 0.8 }, '-=0.3')
        .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-text', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.hero-trust', { y: 10, opacity: 0, duration: 0.4 }, '-=0.2')
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center">
      {/* Sliding background images */}
      {heroImages.map((img, i) => (
        <div
          key={img}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img})`,
            opacity: i === currentSlide ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 hero-overlay" />

      <Container className="relative z-10 py-20">
        <div className="max-w-3xl text-center mx-auto">
          <p className="hero-overline text-gold font-medium text-sm tracking-widest uppercase mb-6">
            Independent Legal Advisory
          </p>

          <h1 className="hero-title font-display text-4xl sm:text-5xl md:text-6xl font-bold !text-white leading-tight mb-6">
            Independent Real Estate Legal Due Diligence{' '}
            <span className="text-gold">Dominican Republic</span>
          </h1>

          <h2 className="hero-subtitle text-xl md:text-2xl text-white/80 font-body font-light mb-6">
            Clear legal insight before you commit capital to a property investment.
          </h2>

          <p className="hero-text text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            For over a decade, Cana Law has advised foreign investors on legal risk,
            project verification, and real estate decision-making throughout the
            Dominican Republic.
          </p>

          <div className="hero-cta flex flex-wrap justify-center gap-4 mb-8">
            <Button href={CONSULTATION_URL} size="lg">
              Schedule a Legal Consultation
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button to="/services" variant="outline" size="lg" className="!text-white !border-white/40 hover:!bg-white/10">
              Explore Services
            </Button>
          </div>

          <div className="hero-trust flex items-center justify-center gap-2 text-white/50 text-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold">&#9733;</span>
              ))}
            </div>
            <span>4.9/5 Google Reviews &middot; Trusted by hundreds of international investors</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
