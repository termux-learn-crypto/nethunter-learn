export default function JsonLd({ data }) {
  if (!data) return null
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nethunter Learn',
    url: 'https://nethunter-learn.vercel.app',
    description: 'Kali Nethunter seekhne ka sabse acha platform. Ethical hacking tutorials Hindi mein.',
    inLanguage: 'hi',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://nethunter-learn.vercel.app/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nethunter Learn',
    url: 'https://nethunter-learn.vercel.app',
    logo: 'https://nethunter-learn.vercel.app/og-image.svg',
    sameAs: [
      'https://x.com/nethunterlearn',
      'https://youtube.com/@nethunterlearn',
      'https://github.com/vilasgit',
    ],
  }
}
