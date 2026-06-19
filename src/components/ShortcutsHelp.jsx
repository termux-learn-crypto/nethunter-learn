import { useState, useEffect } from 'react'

const keys = [
  { key: 'g + h', label: 'Home' },
  { key: 'g + b', label: 'Blog' },
  { key: 'g + t', label: 'Tools' },
  { key: 'g + i', label: 'Installation' },
  { key: 'g + w', label: 'WiFi Hacking' },
  { key: 'g + l', label: 'Learning Paths' },
  { key: 'g + n', label: 'News' },
  { key: 'g + c', label: 'Tool Compare' },
  { key: 'g + g', label: 'Glossary' },
  { key: 'g + s', label: 'Cheatsheets' },
  { key: '?', label: 'Show this help' },
]

export default function ShortcutsHelp() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(v => !v)
    window.addEventListener('toggle-shortcuts-help', handler)
    return () => window.removeEventListener('toggle-shortcuts-help', handler)
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Keyboard shortcuts">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative glass-card p-6 max-w-md w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-heading font-bold text-neon-green">⌨️ Keyboard Shortcuts</h2>
          <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white" aria-label="Close">&times;</button>
        </div>
        <div className="space-y-2">
          {keys.map(({ key, label }) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">{label}</span>
              <kbd className="px-2 py-1 bg-dark-800 border border-dark-600 rounded text-xs font-mono text-neon-green">{key}</kbd>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-xs mt-4">Press <kbd className="px-1.5 py-0.5 bg-dark-800 border border-dark-600 rounded text-xs font-mono">?</kbd> to toggle</p>
      </div>
    </div>
  )
}
