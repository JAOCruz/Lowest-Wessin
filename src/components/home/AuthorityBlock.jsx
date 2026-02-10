import { Scale, Clock, Star } from 'lucide-react'
import { GOOGLE_REVIEWS_URL } from '../../lib/constants'
import { useCountUp, useStaggerReveal } from '../../hooks/useGSAP'
import GlassCard from '../ui/GlassCard'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

function StatCard({ icon: Icon, value, label, isCounter, suffix = '' }) {
  const counterRef = useCountUp(isCounter ? value : 0)

  return (
    <GlassCard className="stagger-child text-center">
      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
        <Icon size={24} className="text-gold" />
      </div>
      <div className="font-display text-3xl font-bold text-navy mb-2">
        {isCounter ? (
          <><span ref={counterRef}>0</span>{suffix}</>
        ) : (
          value
        )}
      </div>
      <p className="text-sm text-body/60">{label}</p>
    </GlassCard>
  )
}

export default function AuthorityBlock() {
  const containerRef = useStaggerReveal('.stagger-child')

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          title="Trusted by Foreign Investors for Over 10 Years"
          subtitle="Licensed Dominican attorney providing independent legal analysis for international real estate investors."
        />

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard
            icon={Scale}
            value="Licensed"
            label="Dominican Attorney"
          />
          <StatCard
            icon={Clock}
            value={10}
            suffix="+"
            label="Years of Experience"
            isCounter
          />
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="block">
            <GlassCard className="stagger-child text-center hover:border-gold/30 transition-all duration-300 h-full">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Star size={24} className="text-gold" />
              </div>
              <div className="font-display text-3xl font-bold text-navy mb-1">4.9/5</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-body/60">Google Reviews</p>
            </GlassCard>
          </a>
        </div>
      </Container>
    </section>
  )
}
