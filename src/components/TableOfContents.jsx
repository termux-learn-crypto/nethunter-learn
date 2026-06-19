import { useState, useEffect } from 'react'

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )
    for (const { slug } of headings) {
      const el = document.getElementById(slug)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [headings])

  return (
    <nav className="glass-card p-4 mb-8 sticky top-20" aria-label="Table of Contents">
      <h3 className="text-neon-green font-heading font-bold text-sm mb-3">📑 इस पेज में</h3>
      <ul className="space-y-1">
        {headings.map((h, i) => (
          <li key={i}>
            <a
              href={`#${h.slug}`}
              className={`block text-sm transition-colors py-0.5 ${
                h.level === 3 ? 'pl-4' : ''
              } ${
                activeId === h.slug
                  ? 'text-neon-green'
                  : 'text-gray-400 hover:text-neon-cyan'
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
