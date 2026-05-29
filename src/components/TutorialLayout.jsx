import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TutorialLayout({ title, subtitle, icon, children, prev, next }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link to="/" className="text-gray-500 hover:text-neon-green text-sm font-mono mb-4 inline-block">
          ← Back to Home
        </Link>
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-5xl">{icon}</span>
          <div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white">{title}</h1>
            {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
          </div>
        </div>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full" />
      </div>

      {/* Warning */}
      <div className="warning-box mb-8">
        <div className="flex items-start space-x-2">
          <span className="text-xl">⚠️</span>
          <div>
            <strong className="text-red-400">Educational Purpose Only</strong>
            <p className="text-red-300/80 text-sm mt-1">
              These tutorials are meant for learning in controlled lab environments. Always get written permission before testing on any system you don't own. Unauthorized access is a criminal offense.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="tutorial-content">
        {children}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-16 pt-8 border-t border-dark-600">
        {prev ? (
          <Link to={prev.to} className="group flex items-center space-x-2 text-gray-400 hover:text-neon-green transition-colors">
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <div>
              <div className="text-xs text-gray-600">Previous</div>
              <div className="font-medium">{prev.label}</div>
            </div>
          </Link>
        ) : <div />}
        {next ? (
          <Link to={next.to} className="group flex items-center space-x-2 text-gray-400 hover:text-neon-green transition-colors text-right">
            <div>
              <div className="text-xs text-gray-600">Next</div>
              <div className="font-medium">{next.label}</div>
            </div>
            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}
