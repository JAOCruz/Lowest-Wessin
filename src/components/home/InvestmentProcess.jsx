import { ArrowRight } from 'lucide-react'
import { useStaggerReveal } from '../../hooks/useGSAP'
import Button from '../ui/Button'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  {
    step: '01',
    title: 'Receive Vetted Opportunities',
    desc: 'Browse properties that have been pre-screened by our legal team. Each listing includes a legal summary and risk assessment.',
  },
  {
    step: '02',
    title: 'Review Legal Summary',
    desc: 'Our due diligence report covers title verification, developer vetting, lien searches, and compliance checks — giving you clarity before you commit.',
  },
  {
    step: '03',
    title: 'Secure Contract Terms',
    desc: 'We review and negotiate the purchase agreement on your behalf, ensuring your interests are protected with proper contract clauses.',
  },
  {
    step: '04',
    title: 'Close with Clear Title',
    desc: 'We guide you through the closing process, verifying all documents and monetary transactions so you receive a clean title deed.',
  },
]

export default function InvestmentProcess() {
  const containerRef = useStaggerReveal('.step-card')

  return (
    <section className="py-24 bg-warm-beige">
      <Container>
        <SectionHeading
          title="Our Investment Process"
          subtitle="A clear, attorney-guided approach from discovery to closing."
        />

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((item) => (
            <div key={item.step} className="step-card text-center">
              <div className="font-display text-5xl font-bold text-gold/25 mb-3">{item.step}</div>
              <h3 className="font-display text-lg font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-sm text-body/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/services" variant="outline">
            Learn More About Our Process
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
