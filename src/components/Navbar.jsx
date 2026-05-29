import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/installation', label: 'Install' },
  { path: '/wifi', label: 'WiFi' },
  { path: '/bluetooth', label: 'Bluetooth' },
  { path: '/payloads', label: 'Payloads' },
  { path: '/tools', label: 'Tools' },
  { path: '/about', label: 'About' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-dark-900/95 backdrop-blur-md border-b border-neon-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-2xl">🐉</span>
            <span className="font-heading font-bold text-xl text-neon-green group-hover:text-neon-cyan transition-colors">
              NETHUNTER<span className="text-neon-cyan">.learn</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-neon-green/10 text-neon-green'
                    : 'text-gray-400 hover:text-neon-green hover:bg-neon-green/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-neon-green p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === item.path
                    ? 'bg-neon-green/10 text-neon-green'
                    : 'text-gray-400 hover:text-neon-green hover:bg-neon-green/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
