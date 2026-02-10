import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { GOOGLE_REVIEWS_URL } from '../../lib/constants'
import { useFadeUp } from '../../hooks/useGSAP'
import GlassCard from '../ui/GlassCard'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const testimonials = [
  {
    quote:
      'Gonzalo identified critical title issues that the developer had not disclosed. His due diligence report saved us from a costly mistake.',
    name: 'Michael R.',
    role: 'Investor, USA',
    rating: 5,
  },
  {
    quote:
      'Clear, objective analysis without any pressure. He laid out the risks and let us make an informed decision. Exactly what we needed.',
    name: 'Sarah & James T.',
    role: 'Investors, Canada',
    rating: 5,
  },
  {
    quote:
      'After working with Cana Law, I understood every clause in my purchase agreement. The contract review was thorough and actionable.',
    name: 'David L.',
    role: 'Investor, UK',
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const ref = useFadeUp()

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section ref={ref} className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="What Investors Say"
          subtitle="Hear from foreign investors who trusted Cana Law with their due diligence."
        />

        <div className="max-w-2xl mx-auto">
          <GlassCard className="text-center">
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={18} className="fill-gold text-gold" />
              ))}
            </div>

            <blockquote className="text-lg text-navy leading-relaxed mb-8 font-body">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <div className="mb-6">
              <p className="font-display font-bold text-navy">{t.name}</p>
              <p className="text-sm text-body/50">{t.role}</p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy/50 hover:text-gold hover:border-gold/30 transition-colors focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === current ? 'bg-gold w-6' : 'bg-navy/15'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy/50 hover:text-gold hover:border-gold/30 transition-colors focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </GlassCard>

          <div className="text-center mt-6">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gold hover:text-gold-dark transition-colors"
            >
              See all reviews on Google &rarr;
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
