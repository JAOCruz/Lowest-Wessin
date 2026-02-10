import { Helmet } from 'react-helmet-async'

export default function SEOHead({ title, description, schema, canonicalPath }) {
  return (
    <Helmet>
      <title>{title} | Cana Law</title>
      <meta name="description" content={description} />
      {canonicalPath && (
        <link rel="canonical" href={`https://cana.law${canonicalPath}`} />
      )}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}
