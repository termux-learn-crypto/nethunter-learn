import { useEffect } from 'react'

export default function MetaTags({ title, description, keywords, url }) {
  const siteName = 'Nethunter Learn'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Ethical Hacking Tutorials`
  const defaultDesc = 'Hindi me ethical hacking seekhein. WiFi hacking, penetration testing, Kali Nethunter tutorials.'
  const desc = description || defaultDesc
  const siteUrl = url || 'https://nethunter-learn.vercel.app'

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (name, content, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', desc)
    if (keywords) setMeta('keywords', keywords)
    setMeta('og:title', fullTitle, true)
    setMeta('og:description', desc, true)
    setMeta('og:url', siteUrl, true)
    setMeta('og:type', 'website', true)
    setMeta('og:site_name', siteName, true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', desc)
  }, [fullTitle, desc, keywords, siteUrl])

  return null
}
