import { MapPin, CheckCircle, ArrowRight } from 'lucide-react'
import { CONSULTATION_URL } from '../lib/constants'
import { asset } from '../lib/assets'
import { useFadeUp, useStaggerReveal } from '../hooks/useGSAP'
import SEOHead from '../components/shared/SEOHead'
import Container from '../components/ui/Container'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'

const coverageAreas = [
  'Punta Cana',
  'Santo Domingo',
  'Santiago',
  'Puerto Plata',
  'Samaná',
  'La Romana',
]

export default function AboutPage() {
  const heroRef = useFadeUp()
  const areasRef = useStaggerReveal('.area-item')

  return (
    <>
      <SEOHead
        title="About Gonzalo Sánchez - Independent Real Estate Attorney"
        description="Gonzalo Sánchez is a licensed Dominican attorney with over 10 years of experience advising foreign investors on real estate legal due diligence throughout the Dominican Republic."
        canonicalPath="/about"
      />

      {/* Hero */}
      <section className="pt-36 pb-16">
        <Container>
          <div ref={heroRef} className="max-w-3xl">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
              About Cana Law
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Independent Legal Authority for Foreign Real Estate Investors
            </h1>
            <p className="text-lg text-body/70 leading-relaxed">
              When you choose Cana Law, you work directly with Gonzalo Sánchez — a licensed
              Dominican attorney who has spent over a decade protecting foreign investors
              in the Dominican Republic real estate market.
            </p>
          </div>
        </Container>
      </section>

      {/* Attorney Profile */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={asset('/images/4.jpeg')}
                alt="Gonzalo Sánchez - Managing Partner at Cana Law"
                className="w-full max-w-md mx-auto rounded-2xl object-cover aspect-[3/4]"
                loading="eager"
              />
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-navy mb-2">
                Gonzalo Sánchez
              </h2>
              <p className="text-gold font-medium mb-6">Managing Partner</p>

              <div className="space-y-4 text-body/70 leading-relaxed">
                <p>
                  Gonzalo is a licensed Dominican attorney holding a Master&rsquo;s degree in Civil
                  Procedure with a specialization in Litigation. For over 10 years, he has
                  focused exclusively on advising foreign investors navigating the Dominican
                  Republic real estate market.
                </p>
                <p>
                  His practice is built on independence — Cana Law is not affiliated with
                  developers, real estate agents, or brokers. Every legal analysis is objective,
                  every recommendation serves the client&rsquo;s interest alone.
                </p>
                <p>
                  From pre-construction due diligence to contract negotiation and closing,
                  Gonzalo has guided hundreds of international clients through the legal
                  complexities of Dominican real estate.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-soft-white rounded-lg px-4 py-3 text-center border border-navy/8">
                  <div className="font-display text-xl font-bold text-gold">10+</div>
                  <div className="text-xs text-body/60">Years Experience</div>
                </div>
                <div className="bg-soft-white rounded-lg px-4 py-3 text-center border border-navy/8">
                  <div className="font-display text-xl font-bold text-gold">Master&rsquo;s</div>
                  <div className="text-xs text-body/60">Civil Procedure</div>
                </div>
                <div className="bg-soft-white rounded-lg px-4 py-3 text-center border border-navy/8">
                  <div className="font-display text-xl font-bold text-gold">100%</div>
                  <div className="text-xs text-body/60">Independent</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-20 bg-warm-beige">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-navy mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-body/70 leading-relaxed mb-4">
              To provide clear, independent legal insight that enables foreign investors
              to make confident real estate decisions in the Dominican Republic.
            </p>
            <p className="text-body/60 leading-relaxed">
              We believe in prevention over reaction. Our role is to identify and communicate
              legal risks before capital is committed — so you can invest with clarity,
              not uncertainty.
            </p>
          </div>
        </Container>
      </section>

      {/* Coverage Areas */}
      <section className="py-20">
        <Container>
          <h2 className="font-display text-3xl font-bold text-navy mb-4">
            Nationwide Coverage
          </h2>
          <p className="text-body/70 mb-12 max-w-2xl">
            We provide legal due diligence services throughout the Dominican Republic,
            covering all major investment regions.
          </p>

          <div ref={areasRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {coverageAreas.map((area) => (
              <GlassCard key={area} className="area-item text-center py-6">
                <MapPin size={20} className="text-gold mx-auto mb-3" />
                <p className="text-sm font-medium text-navy">{area}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warm-beige">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy mb-4">
              Work Directly with Your Attorney
            </h2>
            <p className="text-body/70 mb-8">
              No intermediaries, no delegation. Schedule a consultation with
              Gonzalo Sánchez to discuss your investment.
            </p>
            <Button href={CONSULTATION_URL} size="lg">
              Schedule a Consultation
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
