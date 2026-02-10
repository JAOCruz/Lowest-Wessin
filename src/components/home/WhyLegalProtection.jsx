import { Search, Building, FileCheck, AlertTriangle } from 'lucide-react'
import { useStaggerReveal } from '../../hooks/useGSAP'
import GlassCard from '../ui/GlassCard'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const features = [
  {
    icon: Search,
    title: 'Title & Compliance Check',
    desc: 'We perform a complete title search including the chain of ownership to ensure the seller has the right to sell and that no liens or encumbrances exist.',
  },
  {
    icon: Building,
    title: 'Developer Vetting',
    desc: 'We investigate the developer\'s background, financial stability, licenses, permits, and past projects to confirm legitimacy before you invest.',
  },
  {
    icon: FileCheck,
    title: 'Contract Protection',
    desc: 'We review and negotiate purchase agreements to identify red flags, unfavorable clauses, and ensure your interests are protected.',
  },
]

export default function WhyLegalProtection() {
  const containerRef = useStaggerReveal('.stagger-child')

  return (
    <section className="py-24 bg-warm-beige">
      <Container>
        <SectionHeading
          title="Why Legal Protection Matters"
          subtitle="The Dominican Republic real estate market is largely unregulated. Without independent legal guidance, buyers risk losing their investment."
        />

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature) => (
            <GlassCard key={feature.title} className="stagger-child h-full">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <feature.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-body/60 leading-relaxed">
                {feature.desc}
              </p>
            </GlassCard>
          ))}
        </div>

        <div className="flex items-start gap-3 bg-gold/10 border border-gold/20 rounded-xl p-4 max-w-2xl mx-auto">
          <AlertTriangle size={20} className="text-gold flex-shrink-0 mt-0.5" />
          <p className="text-sm text-navy leading-relaxed">
            <strong>Important:</strong> The Dominican Republic does not use title insurance.
            Legal due diligence is the only way to verify ownership and protect your investment.
          </p>
        </div>
      </Container>
    </section>
  )
}
