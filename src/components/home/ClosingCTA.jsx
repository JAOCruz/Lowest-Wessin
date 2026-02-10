import { ArrowRight } from 'lucide-react'
import { CONSULTATION_URL } from '../../lib/constants'
import { useFadeUp } from '../../hooks/useGSAP'
import Button from '../ui/Button'
import Container from '../ui/Container'

export default function ClosingCTA() {
  const ref = useFadeUp()

  return (
    <section className="py-24 bg-navy">
      <Container>
        <div ref={ref} className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold !text-white mb-4">
            Clarity First. Commitment Second.
          </h2>
          <p className="text-lg text-white/70 mb-10 font-body">
            Understand the legal landscape of your investment before you commit.
            Schedule a consultation and receive a tailored proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={CONSULTATION_URL} size="lg">
              Schedule a Consultation
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button to="/services" variant="outline" size="lg" className="!text-white !border-white/40 hover:!bg-white/10">
              Explore Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
