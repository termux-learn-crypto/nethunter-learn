import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const popularPages = [
  { path: '/installation', label: 'Installation Guide', icon: '📱' },
  { path: '/wifi', label: 'WiFi Hacking', icon: '📡' },
  { path: '/bluetooth', label: 'Bluetooth Hacking', icon: '📶' },
  { path: '/tools', label: 'All Tools', icon: '🔧' },
  { path: '/blog', label: 'Blog', icon: '📝' },
  { path: '/learning-paths', label: 'Learning Paths', icon: '🗺️' },
]

export default function NotFound() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate('/tools')
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="text-[150px] md:text-[200px] font-orbitron font-bold text-neon-green/20 leading-none select-none">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-orbitron font-bold text-white -mt-8 md:-mt-12 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Yeh page exist nahi karta. Shayad galat URL type kiya ya page hata diya gaya hai.
        </p>

        {/* Search */}
        <form onSubmit={handleSearch} className="max-w-md mx-auto mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Tools ya pages search karein..."
              className="flex-1 px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-neon-green/50 focus:outline-none"
            />
            <button type="submit" className="btn-primary px-6 py-3 rounded-lg font-semibold text-dark-900">
              Search
            </button>
          </div>
        </form>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {popularPages.map(page => (
            <Link
              key={page.path}
              to={page.path}
              className="glass-card p-3 text-center hover:border-neon-green/40 transition-all"
            >
              <span className="text-2xl block mb-1">{page.icon}</span>
              <span className="text-gray-300 text-sm">{page.label}</span>
            </Link>
          ))}
        </div>

        <Link
          to="/"
          className="btn-primary px-8 py-3 rounded-lg font-semibold text-dark-900 inline-block"
        >
          Home Page Par Jayein
        </Link>
      </div>
    </div>
  )
}
