export default function JsonLd({ data }) {
  if (!data) {return null}
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
    description: 'Hindi mein ethical hacking aur Kali Nethunter tutorials — free cybersecurity education.',
    founder: {
      '@type': 'Person',
      name: 'Vilas Mane',
      url: 'https://nethunter-learn.vercel.app/about',
      jobTitle: 'Cybersecurity Educator & Ethical Hacker',
    },
    sameAs: [
      'https://x.com/nethunterlearn',
      'https://youtube.com/@nethunterlearn',
      'https://github.com/vilasgit',
    ],
  }
}

export function authorJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vilas Mane',
    url: 'https://nethunter-learn.vercel.app/about',
    jobTitle: 'Cybersecurity Educator & Ethical Hacker',
    description: '5+ years experience in penetration testing, network security, aur vulnerability assessment. Hindi mein cybersecurity education provide karta hoon.',
    knowsAbout: [
      'Kali Linux', 'Kali Nethunter', 'Penetration Testing',
      'Network Security', 'WiFi Security', 'Ethical Hacking',
      'Metasploit', 'Burp Suite', 'OWASP Top 10',
      'Mobile Security', 'Android Security',
    ],
    sameAs: [
      'https://github.com/vilasgit',
      'https://x.com/nethunterlearn',
      'https://youtube.com/@nethunterlearn',
    ],
  }
}
