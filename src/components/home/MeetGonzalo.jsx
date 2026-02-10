import { ArrowRight } from 'lucide-react'
import { CONSULTATION_URL } from '../../lib/constants'
import { useFadeUp } from '../../hooks/useGSAP'
import Button from '../ui/Button'
import Container from '../ui/Container'

export default function MeetGonzalo() {
  const ref = useFadeUp()

  return (
    <section ref={ref} className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <img
              src="/images/4.jpeg"
              alt="Gonzalo Sánchez - Dominican Real Estate Attorney"
              className="w-full max-w-sm mx-auto rounded-2xl object-cover aspect-[3/4]"
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Meet Gonzalo Sánchez
            </h2>
            <p className="text-lg text-body leading-relaxed mb-4">
              Dominican real estate attorney with 10+ years advising international investors.
              I founded Cana Law to protect buyers with independent legal due diligence and
              to share exclusive, below-market opportunities that cross my desk as an attorney.
            </p>
            <p className="text-body/70 leading-relaxed mb-8">
              With a Master&rsquo;s degree in Civil Procedure and specialization in Litigation,
              I&rsquo;ve helped hundreds of international clients navigate the Dominican real
              estate market safely and profitably.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={CONSULTATION_URL}>
                Book Your Investor Consultation
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button to="/about" variant="outline">
                Learn More About Me
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
