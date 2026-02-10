import { useState, useEffect } from 'react'

const DATA_URL = '/data/properties.json'
const INDEX_URL = '/data/properties-index.json'
const FILE_BASE = '/data/properties/'

let cachedProperties = null

async function fetchPropertiesData() {
  if (cachedProperties) return cachedProperties

  try {
    const res = await fetch(DATA_URL, { cache: 'no-cache' })
    if (res.ok) {
      const data = await res.json()
      const list = Array.isArray(data)
        ? data
        : Array.isArray(data.properties)
          ? data.properties
          : Array.isArray(data.items)
            ? data.items
            : []
      if (list.length) {
        cachedProperties = list
        return list
      }
    }
  } catch {
    // fall through to index-based loading
  }

  try {
    const res = await fetch(INDEX_URL, { cache: 'no-cache' })
    if (!res.ok) return []
    const idx = await res.json()
    const slugs = Array.isArray(idx)
      ? idx
      : Array.isArray(idx.slugs)
        ? idx.slugs
        : Array.isArray(idx.items)
          ? idx.items
          : []
    if (!slugs.length) return []
    const files = await Promise.all(
      slugs.map(async (slug) => {
        try {
          const fr = await fetch(`${FILE_BASE}${encodeURIComponent(slug)}.json`, { cache: 'no-cache' })
          return fr.ok ? await fr.json() : null
        } catch {
          return null
        }
      })
    )
    cachedProperties = files.filter(Boolean)
    return cachedProperties
  } catch {
    return []
  }
}

export function useProperties({ featured = false, region = null } = {}) {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPropertiesData()
      .then((all) => {
        let filtered = all.filter((p) => p.status === 'published')
        if (featured) filtered = filtered.filter((p) => p.featured)
        if (region) filtered = filtered.filter((p) => p.region === region)
        setProperties(filtered)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [featured, region])

  return { properties, loading, error }
}

export function useProperty(slug) {
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!slug) {
      setLoading(false)
      return
    }
    fetchPropertiesData()
      .then((all) => {
        const found = all.find((p) => p.slug === slug)
        setProperty(found || null)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [slug])

  return { property, loading, error }
}
