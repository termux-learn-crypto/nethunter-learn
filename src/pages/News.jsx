import { useState } from 'react'
import { Link } from 'react-router-dom'
import MetaTags from '../components/MetaTags'
import AdUnit from '../components/AdUnit'

const newsItems = [
  {
    title: 'CVE-2026-3478: Critical RCE in OpenSSH Server',
    date: '2026-06-28',
    source: 'NVD',
    severity: 'Critical',
    severityColor: 'text-neon-red bg-neon-red/10 border-neon-red/30',
    desc: 'OpenSSH server me pre-authentication remote code execution vulnerability. Saare major SSH implementations affected. Turant patch karein.',
    link: 'https://nvd.nist.gov/vuln/detail/CVE-2026-3478',
  },
  {
    title: 'Windows Zero-Day: CVE-2026-2912 - Print Spooler RCE',
    date: '2026-06-25',
    source: 'Microsoft',
    severity: 'Critical',
    severityColor: 'text-neon-red bg-neon-red/10 border-neon-red/30',
    desc: 'Windows Print Spooler me naya zero-day vulnerability. Remote code execution possible through specially crafted print request.',
    link: 'https://msrc.microsoft.com/',
  },
  {
    title: 'Kali Linux 2026.2 Released',
    date: '2026-06-20',
    source: 'Kali',
    severity: 'Info',
    severityColor: 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/30',
    desc: 'Kali Linux 2026.2 release mein 10+ naye tools, kernel update, aur NetHunter improvements. Updated tool packages ke saath.',
    link: 'https://www.kali.org/blog/',
  },
  {
    title: 'Apache HTTP Server 2.4.62 Update - Multiple Vulns Fixed',
    date: '2026-06-18',
    source: 'Apache',
    severity: 'Medium',
    severityColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
    desc: 'Apache HTTP Server 2.4.62 release mein 5 vulnerabilities fixed. Path traversal, XSS, aur request smuggling vulnerabilities.',
    link: 'https://httpd.apache.org/security_report.html',
  },
  {
    title: 'Google Chrome 126 Emergency Security Update',
    date: '2026-06-15',
    source: 'Google',
    severity: 'Critical',
    severityColor: 'text-neon-red bg-neon-red/10 border-neon-red/30',
    desc: 'Chrome 126 emergency update mein 8 security fixes. Inme se 2 critical zero-day vulnerabilities jo actively exploited ho rahi hain.',
    link: 'https://chromereleases.googleblog.com/',
  },
  {
    title: 'Nethunter 2026.1 - Major Update',
    date: '2026-06-10',
    source: 'Offensive Security',
    severity: 'Info',
    severityColor: 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/30',
    desc: 'Kali NetHunter 2026.1 release. Android 15 support, naye WiFi drivers, improved HID attacks, aur updated tool packages.',
    link: 'https://www.kali.org/get-kali/#kali-mobile',
  },
  {
    title: 'Mozilla Firefox 128 - Enhanced Tracking Protection',
    date: '2026-06-08',
    source: 'Mozilla',
    severity: 'Low',
    severityColor: 'text-green-400 bg-green-500/10 border-green-500/30',
    desc: 'Firefox 128 mein Enhanced Tracking Protection 3.0, improved DNS-over-HTTPS, aur Total Cookie Protection by default.',
    link: 'https://www.mozilla.org/en-US/firefox/128.0/releasenotes/',
  },
  {
    title: 'Cisco IOS XE - Multiple Vulnerabilities',
    date: '2026-06-05',
    source: 'Cisco',
    severity: 'High',
    severityColor: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    desc: 'Cisco IOS XE me 7 vulnerabilities. DoS, privilege escalation, aur information disclosure. Affects 100+ switch and router models.',
    link: 'https://tools.cisco.com/security/center/',
  },
  {
    title: 'WhatsApp Naya Zero-Click Vulnerability Patch',
    date: '2026-06-02',
    source: 'Meta',
    severity: 'Critical',
    severityColor: 'text-neon-red bg-neon-red/10 border-neon-red/30',
    desc: 'WhatsApp me zero-click remote code execution vulnerability fix. Users ko interact kiye bina device compromise ho sakta tha.',
    link: 'https://www.whatsapp.com/security/',
  },
  {
    title: 'GDPR Fine: Company ₹50 Crore Data Leak Penalty',
    date: '2026-05-28',
    source: 'GDPR',
    severity: 'High',
    severityColor: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
    desc: 'European company pe ₹50 crore fine data breach ke liye. 10 lakh+ users ka personal data leak hua tha inadequate security ke karan.',
    link: 'https://gdpr.eu/fines/',
  },
]

export default function News() {
  const [filter, setFilter] = useState('All')

  const severities = ['All', 'Critical', 'High', 'Medium', 'Low', 'Info']

  const filtered = filter === 'All' ? newsItems : newsItems.filter(n => n.severity === filter)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <MetaTags
        title="Cybersecurity News"
        description="Latest cybersecurity news, CVE alerts, data breaches aur security updates Hindi mein."
        keywords="cybersecurity news, CVE alerts, data breaches, security updates, hindi"
        url="https://nethunter-learn.vercel.app/news"
      />
      <div className="text-center mb-10">
        <h1 className="section-title">Cybersecurity News</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Latest cybersecurity news, CVE alerts, aur security updates. Regularly updated.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {severities.map(s => (
          <button key={s} onClick={() => setFilter(s)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === s ? 'bg-neon-green/20 text-neon-green border border-neon-green/40' : 'bg-dark-800 text-gray-400 border border-dark-600 hover:border-neon-green/30'}`}>{s}</button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((item, i) => (
          <div key={i} className="glass-card p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-white font-semibold">{item.title}</h3>
              <span className={`px-2 py-0.5 text-xs rounded border shrink-0 ${item.severityColor}`}>{item.severity}</span>
            </div>
            <p className="text-gray-400 text-sm mb-3">{item.desc}</p>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">{item.date} · Source: {item.source}</span>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">Details →</a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 glass-card p-6 text-center">
        <h2 className="text-lg font-heading text-neon-cyan mb-2">Newsletter Subscribe Karein</h2>
        <p className="text-gray-400 text-sm mb-4">Latest CVE alerts aur security news directly email par.</p>
        <Link to="/blog" className="btn-primary px-6 py-2 rounded-lg text-dark-900 font-semibold text-sm">Blog Padhein</Link>
      </div>
      <AdUnit slot="7546303747" />
    </div>
  )
}
