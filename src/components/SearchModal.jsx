import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import tools from '../data/tools'
import blogPosts from '../data/blogPosts'

const pages = [
  { title: 'Home', path: '/', category: 'Page', desc: 'Nethunter Learn - Seekho Ethical Hacking' },
  { title: 'Installation Guide', path: '/installation', category: 'Tutorial', desc: 'Kali Nethunter install kaise karein' },
  { title: 'WiFi Hacking', path: '/wifi', category: 'Tutorial', desc: 'WiFi security testing aur attacks' },
  { title: 'Bluetooth Hacking', path: '/bluetooth', category: 'Tutorial', desc: 'Bluetooth aur BLE security testing' },
  { title: 'Payloads', path: '/payloads', category: 'Tutorial', desc: 'Metasploit payloads aur social engineering' },
  { title: 'Tools', path: '/tools', category: 'Page', desc: 'Sabhi ethical hacking tools ki list' },
  { title: 'About', path: '/about', category: 'Page', desc: 'Nethunter Learn ke baare me' },
  { title: 'Contact', path: '/contact', category: 'Page', desc: 'Humse sampark karein' },
  { title: 'Privacy Policy', path: '/privacy-policy', category: 'Legal', desc: 'Privacy policy padhein' },
  { title: 'Terms of Service', path: '/terms', category: 'Legal', desc: 'Terms and conditions' },
  { title: 'Disclaimer', path: '/disclaimer', category: 'Legal', desc: 'Legal disclaimer' },
  { title: 'DMCA', path: '/dmca', category: 'Legal', desc: 'DMCA copyright policy' },
  { title: 'Sitemap', path: '/sitemap', category: 'Page', desc: 'Poori site ki sitemap' },
  { title: 'Blog', path: '/blog', category: 'Page', desc: 'Ethical hacking blog' },
  { title: 'Learning Paths', path: '/learning-paths', category: 'Page', desc: 'Structured learning paths' },
  { title: 'Tool Compare', path: '/compare', category: 'Page', desc: 'Compare ethical hacking tools' },
]

const toolItems = tools.map(t => ({
  title: t.name,
  path: t.route,
  category: t.category,
  desc: t.description || `${t.name} - ${t.category} tool in Kali Linux`,
}))

const blogItems = blogPosts.map(p => ({
  title: p.title,
  path: `/blog/${p.id}`,
  category: p.category,
  desc: p.excerpt,
}))

const searchData = [...pages, ...toolItems, ...blogItems]

const categoryColors = {
  Page: 'text-neon-cyan',
  Tutorial: 'text-neon-green',
  Legal: 'text-gray-400',
  WiFi: 'text-yellow-400',
  Network: 'text-blue-400',
  Recon: 'text-purple-400',
  Web: 'text-orange-400',
  Passwords: 'text-red-400',
  Exploitation: 'text-pink-400',
  Mobile: 'text-emerald-400',
  Tunneling: 'text-cyan-400',
  Audit: 'text-lime-400',
  Forensics: 'text-amber-400',
  'रोडमैप': 'text-neon-green',
  'ट्यूटोरियल': 'text-neon-cyan',
  'सीवीई अलर्ट': 'text-neon-red',
  'तुलना': 'text-purple-400',
  'करियर': 'text-yellow-400',
  'टूल्स': 'text-blue-400',
  'सिक्यूरिटी': 'text-orange-400',
  'सीटीएफ': 'text-pink-400',
  'वाईफाई': 'text-yellow-400',
  'नेटवर्क': 'text-blue-400',
  'वेब सिक्यूरिटी': 'text-orange-400',
  'एंड्रॉयड': 'text-emerald-400',
  'पासवर्ड': 'text-red-400',
  'एक्सप्लॉइटेशन': 'text-pink-400',
  'सोशल इंजीनियरिंग': 'text-cyan-400',
  'फोरेंसिक': 'text-amber-400',
  'क्लाउड': 'text-sky-400',
  'रिवर्स इंजीनियरिंग': 'text-indigo-400',
  'ब्लूटूथ': 'text-blue-500',
  'बग बाउंटी': 'text-lime-400',
}

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [activeIdx, setActiveIdx] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setResults([])
      setActiveIdx(0)
      const timer = setTimeout(() => inputRef.current?.focus(), 100)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }
    const q = query.toLowerCase()
    const filtered = searchData.filter(item =>
      (item.title && item.title.toLowerCase().includes(q)) ||
      (item.desc && item.desc.toLowerCase().includes(q)) ||
      (item.category && item.category.toLowerCase().includes(q))
    ).slice(0, 12)
    setResults(filtered)
    setActiveIdx(0)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) {return}
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (results.length === 0) {return}
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIdx(i => (i + 1) % results.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIdx(i => (i - 1 + results.length) % results.length)
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (results[activeIdx]) {
          onClose()
          navigate(results[activeIdx].path)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, activeIdx, onClose, navigate])

  useEffect(() => {
    if (listRef.current) {
      const active = listRef.current.querySelector('[data-active="true"]')
      if (active) {
        active.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [activeIdx])

  useEffect(() => {
    if (!isOpen) {return}
    const handleTab = (e) => {
      if (e.key === 'Tab') {
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', handleTab)
    return () => window.removeEventListener('keydown', handleTab)
  }, [isOpen])

  if (!isOpen) {return null}

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search tools and pages"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-2xl mx-4 bg-dark-800 border border-neon-green/30 rounded-xl shadow-2xl shadow-neon-green/10 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center px-4 border-b border-dark-700">
          <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Tools, pages, tutorials search karein..."
            className="w-full px-3 py-4 bg-transparent text-white placeholder-gray-500 outline-none"
            aria-label="Search input"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs text-gray-500 bg-dark-700 rounded border border-dark-600 shrink-0">
            ESC
          </kbd>
        </div>

        <div className="max-h-[60vh] overflow-y-auto" ref={listRef} role="listbox" aria-label="Search results">
          {query && results.length === 0 && (
            <div className="px-4 py-8 text-center text-gray-500">
              <p className="text-lg mb-1">Kuch nahi mila</p>
              <p className="text-sm">"{query}" ke liye koi result nahi</p>
            </div>
          )}

          {!query && (
            <div className="px-4 py-6 text-center text-gray-500">
              <p>Type karke search karein...</p>
              <p className="text-xs mt-2">Tools, tutorials, pages sab search kar sakte hain</p>
            </div>
          )}

          {results.map((item, i) => (
            <button
              key={`${item.path}-${i}`}
              onClick={() => { onClose(); navigate(item.path) }}
              data-active={i === activeIdx}
              role="option"
              aria-selected={i === activeIdx}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-colors text-left border-b border-dark-700/50 last:border-0 ${
                i === activeIdx ? 'bg-neon-green/10' : 'hover:bg-neon-green/5'
              }`}
            >
              <span className={`text-xs font-mono px-2 py-0.5 rounded bg-dark-700 ${categoryColors[item.category] || 'text-gray-400'}`}>
                {item.category}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-white font-medium truncate">{item.title}</p>
                <p className="text-gray-500 text-sm truncate">{item.desc}</p>
              </div>
              <svg className="w-4 h-4 text-gray-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>

        <div className="px-4 py-2 border-t border-dark-700 flex items-center justify-between text-xs text-gray-600">
          <span>{results.length > 0 ? `${results.length} results` : 'Search karein'}</span>
          <div className="flex items-center gap-2">
            <kbd className="px-1.5 py-0.5 bg-dark-700 rounded border border-dark-600">↑↓</kbd>
            <span>Navigate</span>
            <kbd className="px-1.5 py-0.5 bg-dark-700 rounded border border-dark-600">Enter</kbd>
            <span>Select</span>
          </div>
        </div>
      </div>
    </div>
  )
}
