import { FileSearch, FileText, Briefcase, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useStaggerReveal } from '../../hooks/useGSAP'
import GlassCard from '../ui/GlassCard'
import Badge from '../ui/Badge'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const services = [
  {
    icon: FileSearch,
    title: 'Real Estate Legal Due Diligence',
    description:
      'Comprehensive legal analysis of any property before you commit capital. Title search, lien verification, developer vetting, permits review, and compliance check.',
    primary: true,
    badge: 'Primary Service',
  },
  {
    icon: FileText,
    title: 'Contract Review Only',
    description:
      'Independent review of purchase agreements, identifying red flags, unfavorable clauses, and missing protections before you sign.',
  },
  {
    icon: Briefcase,
    title: 'Full Legal Representation',
    description:
      'End-to-end legal support from negotiation through closing. Available for ready properties with clear title only.',
    badge: 'Limited Availability',
  },
]

export default function ServicesOverview() {
  const containerRef = useStaggerReveal('.stagger-child')

  return (
    <section className="py-24 bg-soft-white">
      <Container>
        <SectionHeading
          title="Legal Services"
          subtitle="Objective legal analysis to protect your investment. Every engagement begins with a consultation."
        />

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.title} to="/services" className="block group">
              <GlassCard
                className={`stagger-child h-full transition-all duration-300 hover:shadow-lg ${
                  service.primary ? 'lg:scale-105 ring-2 ring-gold/20' : ''
                }`}
              >
                {service.badge && (
                  <Badge variant={service.primary ? 'gold' : 'tan'} className="mb-4">
                    {service.badge}
                  </Badge>
                )}

                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <service.icon size={24} className="text-gold" />
                </div>

                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-body/60 leading-relaxed mb-6">
                  {service.description}
                </p>

                <span className="inline-flex items-center text-sm text-gold font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </span>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
