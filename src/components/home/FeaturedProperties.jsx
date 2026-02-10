import { Link } from 'react-router-dom'
import { MapPin, BedDouble, Bath, Maximize2, ArrowRight } from 'lucide-react'
import { useProperties } from '../../hooks/useProperties'
import { formatUSD, formatArea } from '../../lib/formatters'
import { asset } from '../../lib/assets'
import { useStaggerReveal } from '../../hooks/useGSAP'
import GlassCard from '../ui/GlassCard'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

function getImageUrl(property) {
  if (!property.images || !property.images.length) return asset('/images/hero_bg_1.jpg')
  const first = property.images[0]
  const url = typeof first === 'string' ? first : first.url || first.src || '/images/hero_bg_1.jpg'
  return url.startsWith('/') ? asset(url) : url
}

function FeaturedCard({ property }) {
  return (
    <Link to={`/properties/${property.slug}`} className="block group">
      <GlassCard className="stagger-child overflow-hidden p-0 h-full hover:border-gold/30 transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={getImageUrl(property)}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {property.confotur && (
            <Badge variant="gold" className="absolute top-4 left-4">CONFOTUR</Badge>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-body/50 text-xs mb-2">
            <MapPin size={12} />
            <span>{property.region}</span>
          </div>

          <h3 className="font-display text-lg font-bold text-navy mb-3 group-hover:text-gold transition-colors">
            {property.title}
          </h3>

          <div className="font-display text-2xl font-bold text-gold mb-4">
            {formatUSD(property.priceUSD)}
          </div>

          <div className="flex items-center gap-4 text-sm text-body/60">
            {property.beds && (
              <div className="flex items-center gap-1.5">
                <BedDouble size={14} />
                <span>{property.beds} bed{property.beds !== 1 ? 's' : ''}</span>
              </div>
            )}
            {property.baths && (
              <div className="flex items-center gap-1.5">
                <Bath size={14} />
                <span>{property.baths} bath{property.baths !== 1 ? 's' : ''}</span>
              </div>
            )}
            {property.sizeM2 && (
              <div className="flex items-center gap-1.5">
                <Maximize2 size={14} />
                <span>{formatArea(property.sizeM2)}</span>
              </div>
            )}
          </div>
        </div>
      </GlassCard>
    </Link>
  )
}

export default function FeaturedProperties() {
  const { properties, loading } = useProperties({ featured: true })
  const containerRef = useStaggerReveal('.stagger-child')

  // Show up to 3 featured properties (or first 3 if none marked featured)
  const featured = properties.slice(0, 3)

  if (loading) {
    return (
      <section className="py-24 bg-soft-white">
        <Container>
          <SectionHeading title="Featured Opportunities" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl h-80 animate-pulse border border-navy/8" />
            ))}
          </div>
        </Container>
      </section>
    )
  }

  if (featured.length === 0) return null

  return (
    <section className="py-24 bg-soft-white">
      <Container>
        <SectionHeading
          title="Featured Opportunities"
          subtitle="Legally vetted properties currently available. Every listing has undergone due diligence by our legal team."
        />

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <FeaturedCard key={p.id || p.slug} property={p} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Button to="/properties" variant="outline">
            View All Properties
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
