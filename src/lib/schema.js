import { SITE, CONTACT } from './constants'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: SITE.name,
    description: 'Independent real estate legal due diligence in the Dominican Republic',
    url: SITE.url,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address,
      addressLocality: 'Punta Cana',
      addressCountry: 'DO',
      postalCode: CONTACT.postalCode,
    },
    founder: {
      '@type': 'Person',
      name: 'Gonzalo Sánchez',
      jobTitle: 'Attorney at Law',
    },
    areaServed: [
      { '@type': 'City', name: 'Punta Cana' },
      { '@type': 'City', name: 'Santo Domingo' },
      { '@type': 'City', name: 'Santiago' },
      { '@type': 'City', name: 'Puerto Plata' },
      { '@type': 'City', name: 'Samaná' },
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  }
}

export function legalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Real Estate Legal Due Diligence - Dominican Republic',
    provider: {
      '@type': 'LegalService',
      name: SITE.name,
      url: SITE.url,
    },
    serviceType: 'Real Estate Due Diligence',
    areaServed: {
      '@type': 'Country',
      name: 'Dominican Republic',
    },
    description: 'Independent legal due diligence for foreign real estate investors in the Dominican Republic. Title search, lien verification, developer vetting, contract review, and compliance analysis.',
  }
}

export function propertySchema(property) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: property.title,
    description: property.description,
    url: `${SITE.url}/properties/${property.slug}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressRegion: property.region,
      addressCountry: 'DO',
    },
    geo: property.coords ? {
      '@type': 'GeoCoordinates',
      latitude: property.coords.lat,
      longitude: property.coords.lng,
    } : undefined,
    offers: {
      '@type': 'Offer',
      price: property.priceUSD,
      priceCurrency: 'USD',
    },
  }
}
