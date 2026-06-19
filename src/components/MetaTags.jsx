import { useEffect } from 'react'

const siteName = 'Nethunter Learn'
const siteUrl = 'https://nethunter-learn.vercel.app'
const defaultDesc = 'Hindi me ethical hacking seekhein. WiFi hacking, penetration testing, Kali Nethunter tutorials.'
const ogImage = `${siteUrl}/og-image.svg`

function upsertMeta(attr, name, content, isProperty = false) {
  const key = isProperty ? 'property' : 'name'
  let el = document.querySelector(`meta[${key}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(key, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function removeJsonLd() {
  const el = document.querySelector('#json-ld')
  if (el) el.remove()
}

function addJsonLd(json) {
  removeJsonLd()
  const el = document.createElement('script')
  el.id = 'json-ld'
  el.type = 'application/ld+json'
  el.textContent = JSON.stringify(json)
  document.head.appendChild(el)
}

export default function MetaTags({ title, description, keywords, url, type = 'website', publishedTime, author = 'Nethunter Learn', image }) {
  const pageUrl = url || siteUrl
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Ethical Hacking Tutorials`
  const desc = description || defaultDesc
  const pageImage = image || ogImage

  useEffect(() => {
    document.title = fullTitle

    upsertMeta('name', 'description', desc)
    if (keywords) upsertMeta('name', 'keywords', keywords)

    upsertMeta('property', 'og:title', fullTitle, true)
    upsertMeta('property', 'og:description', desc, true)
    upsertMeta('property', 'og:url', pageUrl, true)
    upsertMeta('property', 'og:type', type, true)
    upsertMeta('property', 'og:site_name', siteName, true)
    upsertMeta('property', 'og:image', pageImage, true)
    upsertMeta('property', 'og:image:alt', `${fullTitle} - Nethunter Learn`, true)
    upsertMeta('property', 'og:locale', 'hi_IN', true)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', desc)
    upsertMeta('name', 'twitter:image', pageImage)

    upsertLink('canonical', pageUrl)

    if (type === 'article' && publishedTime) {
      addJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: desc,
        author: { '@type': 'Person', name: author },
        publisher: {
          '@type': 'Organization',
          name: siteName,
          logo: { '@type': 'ImageObject', url: ogImage },
        },
        datePublished: publishedTime,
        url: pageUrl,
        inLanguage: 'hi',
      })
    } else if (type === 'website' && title && !title.includes(siteName)) {
      addJsonLd({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: title,
        description: desc,
        author: { '@type': 'Person', name: author },
        publisher: {
          '@type': 'Organization',
          name: siteName,
          logo: { '@type': 'ImageObject', url: ogImage },
        },
        url: pageUrl,
        inLanguage: 'hi',
      })
    } else {
      addJsonLd({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
        description: defaultDesc,
        inLanguage: 'hi',
      })
    }
  }, [fullTitle, desc, keywords, pageUrl, type, publishedTime, author, title, pageImage])

  return null
}
