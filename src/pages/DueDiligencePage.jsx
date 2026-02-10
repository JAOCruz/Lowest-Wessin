import {
  AlertTriangle, Search, FileCheck, Building, ShieldCheck, Landmark,
  Users, Globe, ArrowRight, CheckCircle, Clock, Scale,
} from 'lucide-react'
import { CONSULTATION_URL } from '../lib/constants'
import { legalServiceSchema } from '../lib/schema'
import { useFadeUp, useStaggerReveal } from '../hooks/useGSAP'
import SEOHead from '../components/shared/SEOHead'
import Container from '../components/ui/Container'
import GlassCard from '../components/ui/GlassCard'
import Button from '../components/ui/Button'

const risks = [
  {
    icon: AlertTriangle,
    title: 'No Title Insurance',
    desc: 'The Dominican Republic does not have a title insurance system. Due diligence is the only way to verify ownership and uncover liens.',
  },
  {
    icon: Users,
    title: 'Unregulated Agents',
    desc: 'Real estate agents in the DR are not required to be licensed or bonded. Buyers need independent legal verification.',
  },
  {
    icon: FileCheck,
    title: 'Seller-Favoring Contracts',
    desc: 'Standard purchase agreements are often drafted by developers and favor the seller. Independent review is essential.',
  },
  {
    icon: Building,
    title: 'Pre-Construction Risks',
    desc: 'Many projects are sold before construction begins. Developer financial stability and permits must be verified.',
  },
]

const analysisItems = [
  { icon: Search, label: 'Title search and complete chain of ownership verification' },
  { icon: ShieldCheck, label: 'Lien, mortgage, and encumbrance check' },
  { icon: Building, label: 'Developer background, financials, and track record' },
  { icon: FileCheck, label: 'Construction permits, zoning, and environmental approvals' },
  { icon: Landmark, label: 'CONFOTUR tax exemption eligibility and status' },
  { icon: Scale, label: 'Tax obligations and annual property tax assessment' },
  { icon: FileCheck, label: 'Purchase contract review and negotiation points' },
  { icon: CheckCircle, label: 'Closing process guidance and timeline' },
]

const audienceItems = [
  { icon: Globe, title: 'Foreign Investors', desc: 'International buyers purchasing their first property in the Dominican Republic.' },
  { icon: Users, title: 'Diaspora Investors', desc: 'Dominican nationals living abroad looking to invest back home.' },
  { icon: Building, title: 'Pre-Construction Buyers', desc: 'Anyone considering a pre-construction project that requires developer vetting.' },
  { icon: Clock, title: 'Due Diligence Seekers', desc: 'Buyers who already have a property in mind and need legal verification before committing.' },
]

export default function DueDiligencePage() {
  const heroRef = useFadeUp()
  const risksRef = useStaggerReveal('.risk-card')
  const analysisRef = useStaggerReveal('.analysis-item')
  const audienceRef = useStaggerReveal('.audience-card')

  return (
    <>
      <SEOHead
        title="Real Estate Due Diligence in the Dominican Republic"
        description="Independent legal due diligence for property purchases in the Dominican Republic. Title search, developer vetting, contract review, and compliance analysis for foreign investors."
        canonicalPath="/real-estate-due-diligence-dominican-republic"
        schema={legalServiceSchema()}
      />

      {/* Hero */}
      <section className="pt-36 pb-16">
        <Container>
          <div ref={heroRef} className="max-w-3xl">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
              Legal Due Diligence
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Real Estate Due Diligence in the{' '}
              <span className="text-gold">Dominican Republic</span>
            </h1>
            <p className="text-lg text-body/70 leading-relaxed">
              Before committing capital to a property investment in the Dominican Republic,
              independent legal due diligence is the single most important step you can take
              to protect your investment.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Due Diligence Matters */}
      <section className="py-20 bg-warm-beige">
        <Container>
          <h2 className="font-display text-3xl font-bold text-navy mb-4">
            Why Due Diligence Matters
          </h2>
          <p className="text-body/70 mb-12 max-w-2xl">
            The Dominican Republic real estate market presents unique risks that do not exist
            in the US, Canada, or Europe. Understanding these risks is the first step to protecting
            your investment.
          </p>

          <div ref={risksRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {risks.map((risk) => (
              <GlassCard key={risk.title} className="risk-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <risk.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy mb-2">{risk.title}</h3>
                    <p className="text-sm text-body/60 leading-relaxed">{risk.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* What We Analyze */}
      <section className="py-20">
        <Container>
          <h2 className="font-display text-3xl font-bold text-navy mb-4">
            What We Analyze
          </h2>
          <p className="text-body/70 mb-12 max-w-2xl">
            Our due diligence report covers every legal aspect of the property and transaction,
            giving you a complete picture before you make a decision.
          </p>

          <div ref={analysisRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analysisItems.map((item) => (
              <div key={item.label} className="analysis-item flex items-center gap-4 p-4 rounded-xl hover:bg-navy/5 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-gold" />
                </div>
                <span className="text-body/80 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Who This Service Is For */}
      <section className="py-20 bg-warm-beige">
        <Container>
          <h2 className="font-display text-3xl font-bold text-navy mb-4">
            Who This Service Is For
          </h2>
          <p className="text-body/70 mb-12 max-w-2xl">
            Our due diligence service is designed for anyone making a significant property
            investment in the Dominican Republic.
          </p>

          <div ref={audienceRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audienceItems.map((item) => (
              <GlassCard key={item.title} className="audience-card text-center">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-gold" />
                </div>
                <h3 className="font-display text-base font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-xs text-body/60">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Cana Law */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-navy mb-6">
                Why Cana Law
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle size={20} className="text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy mb-1">Independent Attorney</h3>
                    <p className="text-sm text-body/60">Not affiliated with developers, agents, or brokers. Our analysis is objective.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle size={20} className="text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy mb-1">10+ Years Experience</h3>
                    <p className="text-sm text-body/60">Specializing exclusively in Dominican Republic real estate law for foreign investors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle size={20} className="text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy mb-1">Nationwide Coverage</h3>
                    <p className="text-sm text-body/60">Punta Cana, Santo Domingo, Santiago, Puerto Plata, and Samaná.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle size={20} className="text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy mb-1">Direct Attorney Relationship</h3>
                    <p className="text-sm text-body/60">Work directly with Gonzalo Sánchez. No intermediaries, no delegation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <GlassCard className="border-gold/20">
                <h3 className="font-display text-2xl font-bold text-navy mb-4">
                  Ready to Protect Your Investment?
                </h3>
                <p className="text-body/70 mb-8">
                  Schedule a consultation and receive a tailored due diligence proposal.
                </p>
                <Button href={CONSULTATION_URL} size="lg" className="w-full">
                  Schedule a Consultation
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </GlassCard>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
