import { CheckCircle, BookOpen } from 'lucide-react'
import { LEGAL_GUIDE_URL } from '../../lib/constants'
import { useFadeUp } from '../../hooks/useGSAP'
import Button from '../ui/Button'
import Container from '../ui/Container'

const steps = [
  'Title verification and lien checks',
  'Developer background verification',
  'Contract protection clauses',
  'Tax implications and CONFOTUR benefits',
  'Closing cost breakdown',
  'Power of attorney considerations',
  'Post-purchase legal obligations',
]

export default function LeadMagnet() {
  const ref = useFadeUp()

  return (
    <section className="py-24 bg-navy">
      <Container>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
              Free Legal Guide
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold !text-white mb-6">
              7 Urgent Steps Foreigners MUST Take Before Buying Property in the DR
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Protect your investment from the start. This checklist covers the essential
              legal steps every foreign buyer should take before committing capital to
              Dominican Republic real estate.
            </p>
            <Button href={LEGAL_GUIDE_URL} size="lg">
              <BookOpen size={18} className="mr-2" />
              Get the Free Legal Guide
            </Button>
            <p className="text-white/30 text-xs mt-4">
              No spam. We respect your privacy.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={16} className="text-gold" />
                </div>
                <span className="text-white/80 text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
