import { Link } from 'react-router-dom'
import { MapPin, BedDouble, Bath, Maximize2 } from 'lucide-react'
import { useProperties } from '../hooks/useProperties'
import { formatUSD, formatArea } from '../lib/formatters'
import { useFadeUp, useStaggerReveal } from '../hooks/useGSAP'
import SEOHead from '../components/shared/SEOHead'
import Container from '../components/ui/Container'
import GlassCard from '../components/ui/GlassCard'
import Badge from '../components/ui/Badge'

function getImageUrl(property) {
  if (!property.images || !property.images.length) return '/images/hero_bg_1.jpg'
  const first = property.images[0]
  return typeof first === 'string' ? first : first.url || first.src || '/images/hero_bg_1.jpg'
}

function PropertyCard({ property }) {
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

export default function PropertiesPage() {
  const { properties, loading } = useProperties()
  const heroRef = useFadeUp()
  const gridRef = useStaggerReveal('.stagger-child')

  return (
    <>
      <SEOHead
        title="Properties"
        description="Explore vetted property listings in the Dominican Republic. Every property has undergone legal due diligence by Cana Law."
        canonicalPath="/properties"
      />

      <section className="pt-36 pb-16">
        <Container>
          <div ref={heroRef} className="max-w-3xl">
            <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
              Property Listings
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Vetted Investment Opportunities
            </h1>
            <p className="text-lg text-body/70 leading-relaxed">
              Each property listed has been reviewed by our legal team. Contact us for
              a full due diligence report on any listing.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl h-96 animate-pulse border border-navy/8" />
              ))}
            </div>
          ) : properties.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-body/60 text-lg">No properties available at this time.</p>
            </div>
          ) : (
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((p) => (
                <PropertyCard key={p.id || p.slug} property={p} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
