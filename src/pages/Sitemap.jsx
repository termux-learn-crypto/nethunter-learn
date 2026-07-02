import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import MetaTags from '../components/MetaTags'
import tools from '../data/tools'

export default function Sitemap() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const staticPages = [
    { path: '/', label: 'Home', desc: 'Nethunter learning platform ka main page' },
    { path: '/installation', label: 'Installation Guide', desc: 'Kali Nethunter install karne ka complete guide' },
    { path: '/wifi', label: 'WiFi Hacking', desc: 'WiFi security testing tutorials' },
    { path: '/bluetooth', label: 'Bluetooth Hacking', desc: 'Bluetooth security testing tutorials' },
    { path: '/payloads', label: 'Payloads & Attacks', desc: 'Metasploit, payloads, aur attack techniques' },
    { path: '/tools', label: 'Tools Reference', desc: `${tools.length}+ security tools ka complete reference` },
    { path: '/blog', label: 'Blog', desc: 'Cybersecurity articles aur guides' },
    { path: '/learning-paths', label: 'Learning Paths', desc: 'Structured learning pathways' },
    { path: '/compare', label: 'Tool Compare', desc: 'Tools ki aapas mein tulna' },
    { path: '/glossary', label: 'Glossary', desc: 'Cybersecurity terms aur definitions' },
    { path: '/cheatsheets', label: 'Cheatsheets', desc: 'Quick reference guides aur command cheatsheets' },
    { path: '/news', label: 'News', desc: 'Cybersecurity news aur updates' },
    { path: '/community', label: 'Community', desc: 'Nethunter community aur forums' },
    { path: '/about', label: 'About Nethunter', desc: 'Kya hai Nethunter aur ethical hacking ke baare mein' },
    { path: '/privacy-policy', label: 'Privacy Policy', desc: 'Hamari privacy policy aur data practices' },
    { path: '/terms', label: 'Terms of Service', desc: 'Website use ki terms aur conditions' },
    { path: '/disclaimer', label: 'Disclaimer', desc: 'Educational content ka legal disclaimer' },
    { path: '/dmca', label: 'DMCA Policy', desc: 'Copyright infringement reporting policy' },
    { path: '/contact', label: 'Contact Us', desc: 'Humse contact karein' },
    { path: '/sitemap', label: 'Sitemap', desc: 'Website ka complete structure aur sabhi pages ki links' },
  ]

  const toolPages = tools.map(t => ({
    path: t.route,
    label: t.name,
    desc: t.description,
  }))

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <MetaTags
        title="Sitemap"
        description="Nethunter Learn sitemap — website ka complete structure aur sabhi pages ki links."
        url="https://nethunter-learn.vercel.app/sitemap"
      />
      <Link to="/" className="text-gray-500 hover:text-neon-green text-sm font-mono mb-6 inline-block">← Home</Link>
      <h1 className="text-4xl font-heading font-bold text-white mb-2">Sitemap</h1>
      <p className="text-gray-500 text-sm mb-8">Website ki sabhi pages ki list</p>

      <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">Main Pages</h2>
      <div className="space-y-3 mb-12">
        {staticPages.map(page => (
          <Link key={page.path} to={page.path} className="block glass-card p-4 hover:border-neon-green/40 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-neon-green font-mono font-bold">{page.label}</h3>
                <p className="text-gray-500 text-sm mt-1">{page.desc}</p>
              </div>
              <span className="text-gray-600 text-xs font-mono">{page.path}</span>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-heading font-bold text-white mt-10 mb-4">Tools ({toolPages.length})</h2>
      <div className="space-y-3">
        {toolPages.map(page => (
          <Link key={page.path} to={page.path} className="block glass-card p-4 hover:border-neon-green/40 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-neon-green font-mono font-bold">{page.label}</h3>
                <p className="text-gray-500 text-sm mt-1">{page.desc}</p>
              </div>
              <span className="text-gray-600 text-xs font-mono">{page.path}</span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}
