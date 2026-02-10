import {
  FileSearch, FileText, Briefcase, ArrowRight,
  CheckCircle, Search, Building, FileCheck, ShieldCheck, Landmark,
} from 'lucide-react'
import { CONSULTATION_URL } from '../lib/constants'
import { legalServiceSchema } from '../lib/schema'
import { useFadeUp, useStaggerReveal } from '../hooks/useGSAP'
import SEOHead from '../components/shared/SEOHead'
import Container from '../components/ui/Container'
import GlassCard from '../components/ui/GlassCard'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

const dueDiligenceChecklist = [
  { icon: Search, label: 'Title search and chain of ownership' },
  { icon: ShieldCheck, label: 'Lien and encumbrance verification' },
  { icon: Building, label: 'Developer background and financial stability' },
  { icon: FileCheck, label: 'Construction permits and approvals' },
  { icon: Landmark, label: 'CONFOTUR eligibility analysis' },
  { icon: CheckCircle, label: 'Tax status and obligations review' },
]

export default function ServicesPage() {
  const heroRef = useFadeUp()
  const checklistRef = useStaggerReveal('.checklist-item')

  return (
    <>
      <SEOHead
        title="Legal Services"
        description="Independent real estate legal services for foreign investors in the Dominican Republic. Due diligence, contract review, and legal representation."
        canonicalPath="/services"
        schema={legalServiceSchema()}
      />

      <section className="pt-36 pb-16">
        <Container>
          <div ref={heroRef} className="max-w-3xl">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
              Legal Services
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Protect Your Investment with Independent Legal Analysis
            </h1>
            <p className="text-lg text-body/70 leading-relaxed">
              Every engagement begins with a consultation. After understanding your situation,
              we provide a tailored proposal with a clear scope of work.
            </p>
          </div>
        </Container>
      </section>

      {/* Service 1: Due Diligence - Hero Treatment */}
      <section className="py-16">
        <Container>
          <GlassCard className="border-gold/20 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Badge variant="gold" className="mb-4">Primary Service</Badge>
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <FileSearch size={28} className="text-gold" />
                </div>
                <h2 className="font-display text-3xl font-bold text-navy mb-4">
                  Real Estate Legal Due Diligence
                </h2>
                <p className="text-body/70 leading-relaxed mb-6">
                  A comprehensive legal analysis of any property you are considering in the
                  Dominican Republic. We examine every legal aspect of the transaction to identify
                  risks before you commit capital.
                </p>
                <p className="text-body/70 leading-relaxed mb-8">
                  Our due diligence report gives you a clear, objective assessment
                  so you can make an informed investment decision with confidence.
                </p>
                <Button href={CONSULTATION_URL}>
                  Schedule a Consultation
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>

              <div ref={checklistRef}>
                <h3 className="font-display text-lg font-bold text-navy mb-6">
                  What We Analyze
                </h3>
                <div className="space-y-4">
                  {dueDiligenceChecklist.map((item) => (
                    <div key={item.label} className="checklist-item flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-gold" />
                      </div>
                      <span className="text-body/80 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </Container>
      </section>

      {/* Service 2 & 3 */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard className="h-full">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <FileText size={24} className="text-gold" />
              </div>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">
                Contract Review Only
              </h2>
              <p className="text-body/70 leading-relaxed mb-6">
                Already have a property in mind? We review your purchase agreement
                independently, identifying red flags, unfavorable clauses, and missing
                protections. You receive a clear report with actionable recommendations.
              </p>
              <Button href={CONSULTATION_URL} variant="outline">
                Request a Contract Review
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </GlassCard>

            <GlassCard className="h-full">
              <Badge variant="tan" className="mb-4">Limited Availability</Badge>
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <Briefcase size={24} className="text-gold" />
              </div>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">
                Full Legal Representation
              </h2>
              <p className="text-body/70 leading-relaxed mb-6">
                End-to-end legal support from negotiation through closing and title transfer.
                Available for ready properties with clear title only. We handle every legal
                aspect of the transaction on your behalf.
              </p>
              <Button href={CONSULTATION_URL} variant="outline">
                Inquire About Representation
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </GlassCard>
          </div>
        </Container>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-warm-beige">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-navy mb-4">
              How It Works
            </h2>
            <p className="text-body/70">
              A clear, transparent process from first contact to engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Consultation', desc: 'Share your situation and investment goals. We assess how we can help.' },
              { step: '02', title: 'Tailored Proposal', desc: 'Receive a detailed proposal with scope of work, timeline, and fee structure.' },
              { step: '03', title: 'Engagement', desc: 'Once approved, we begin work immediately and keep you informed throughout.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="font-display text-4xl font-bold text-gold/30 mb-3">{item.step}</div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-body/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
