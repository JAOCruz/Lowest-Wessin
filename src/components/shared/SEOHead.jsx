import { Helmet } from 'react-helmet-async'
import { SITE } from '../../lib/constants'

const DEFAULT_OG_IMAGE = 'https://cana.law/images/og-default.jpg'

export default function SEOHead({
  title,
  description,
  schema,
  canonicalPath,
  ogImage,
  ogType = 'website',
}) {
  const fullTitle = `${title} | Cana Law`
  const canonical = canonicalPath ? `${SITE.url}${canonicalPath}` : SITE.url
  const imageUrl = ogImage || DEFAULT_OG_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Schema */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}
