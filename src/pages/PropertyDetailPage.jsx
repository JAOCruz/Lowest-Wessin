import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  MapPin, BedDouble, Bath, Maximize2, ChevronLeft, ChevronRight,
  ArrowLeft, ArrowRight, CheckCircle, ExternalLink,
} from 'lucide-react'
import { useProperty } from '../hooks/useProperties'
import { formatUSD, formatArea } from '../lib/formatters'
import { asset } from '../lib/assets'
import { propertySchema } from '../lib/schema'
import { useFadeUp } from '../hooks/useGSAP'
import { CONSULTATION_URL } from '../lib/constants'
import SEOHead from '../components/shared/SEOHead'
import Container from '../components/ui/Container'
import GlassCard from '../components/ui/GlassCard'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

function getImageUrls(property) {
  if (!property.images || !property.images.length) return [asset('/images/hero_bg_1.jpg')]
  return property.images.map((img) => {
    const url = typeof img === 'string' ? img : img.url || img.src || '/images/hero_bg_1.jpg'
    return url.startsWith('/') ? asset(url) : url
  })
}

function ImageGallery({ images }) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
        <img
          src={images[current]}
          alt={`Property image ${current + 1}`}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-gold transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass rounded-full px-3 py-1.5 text-xs text-white">
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                i === current ? 'border-gold' : 'border-transparent opacity-60 hover:opacity-80'
              }`}
            >
              <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function PropertyDetailPage() {
  const { slug } = useParams()
  const { property, loading } = useProperty(slug)
  const ref = useFadeUp()

  if (loading) {
    return (
      <div className="pt-32 pb-24">
        <Container>
          <div className="bg-white rounded-2xl h-96 animate-pulse border border-navy/8" />
        </Container>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="pt-32 pb-24">
        <Container>
          <div className="text-center py-20">
            <h1 className="font-display text-3xl font-bold text-navy mb-4">
              Property Not Found
            </h1>
            <p className="text-body/60 mb-8">
              The property you are looking for does not exist or has been removed.
            </p>
            <Button to="/properties" variant="outline">
              <ArrowLeft size={16} className="mr-2" />
              Back to Properties
            </Button>
          </div>
        </Container>
      </div>
    )
  }

  const images = getImageUrls(property)

  return (
    <>
      <SEOHead
        title={property.seoTitle || property.title}
        description={property.seoDescription || property.description || `${property.title} in ${property.region}, Dominican Republic`}
        canonicalPath={`/properties/${property.slug}`}
        schema={propertySchema(property)}
      />

      <div className="pt-36 pb-24">
        <Container>
          <Link
            to="/properties"
            className="inline-flex items-center text-sm text-body/60 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Properties
          </Link>

          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Gallery */}
            <div className="lg:col-span-2">
              <ImageGallery images={images} />

              {/* Description */}
              {property.description && (
                <div className="mt-8">
                  <h2 className="font-display text-xl font-bold text-navy mb-4">
                    About This Property
                  </h2>
                  <p className="text-body/70 leading-relaxed">{property.description}</p>
                </div>
              )}

              {/* Features */}
              {property.features && property.features.length > 0 && (
                <div className="mt-8">
                  <h2 className="font-display text-xl font-bold text-navy mb-4">Features</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {property.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-gold flex-shrink-0" />
                        <span className="text-sm text-body/70">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Amenities */}
              {property.amenities && property.amenities.length > 0 && (
                <div className="mt-8">
                  <h2 className="font-display text-xl font-bold text-navy mb-4">Amenities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {property.amenities.map((a) => (
                      <div key={a} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-gold flex-shrink-0" />
                        <span className="text-sm text-body/70">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <GlassCard className="border-gold/20">
                <h1 className="font-display text-2xl font-bold text-navy mb-2">
                  {property.title}
                </h1>

                <div className="flex items-center gap-2 text-body/50 text-sm mb-4">
                  <MapPin size={14} />
                  <span>{property.address || property.region}</span>
                </div>

                <div className="font-display text-3xl font-bold text-gold mb-6">
                  {formatUSD(property.priceUSD)}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {property.beds && (
                    <div className="text-center">
                      <BedDouble size={20} className="text-gold mx-auto mb-1" />
                      <div className="text-sm font-bold text-navy">{property.beds}</div>
                      <div className="text-xs text-body/50">Beds</div>
                    </div>
                  )}
                  {property.baths && (
                    <div className="text-center">
                      <Bath size={20} className="text-gold mx-auto mb-1" />
                      <div className="text-sm font-bold text-navy">{property.baths}</div>
                      <div className="text-xs text-body/50">Baths</div>
                    </div>
                  )}
                  {property.sizeM2 && (
                    <div className="text-center">
                      <Maximize2 size={20} className="text-gold mx-auto mb-1" />
                      <div className="text-sm font-bold text-navy">{formatArea(property.sizeM2)}</div>
                      <div className="text-xs text-body/50">Total</div>
                    </div>
                  )}
                </div>

                {property.confotur && (
                  <Badge variant="gold" className="mb-4">CONFOTUR Eligible</Badge>
                )}

                {/* Size breakdown */}
                {(property.apartmentM2 || property.parkingM2 || property.storageM2) && (
                  <div className="border-t border-navy/10 pt-4 mb-6 space-y-2">
                    {property.apartmentM2 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-body/60">Apartment</span>
                        <span className="text-navy">{formatArea(property.apartmentM2)}</span>
                      </div>
                    )}
                    {property.parkingM2 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-body/60">Parking</span>
                        <span className="text-navy">{formatArea(property.parkingM2)}</span>
                      </div>
                    )}
                    {property.storageM2 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-body/60">Storage</span>
                        <span className="text-navy">{formatArea(property.storageM2)}</span>
                      </div>
                    )}
                  </div>
                )}

                <Button href={CONSULTATION_URL} className="w-full mb-3">
                  Inquire About This Property
                  <ArrowRight size={16} className="ml-2" />
                </Button>

                {property.appraisalUrl && (
                  <a
                    href={property.appraisalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
                  >
                    <ExternalLink size={14} />
                    View Appraisal Report
                  </a>
                )}
              </GlassCard>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
