import { Link } from 'react-router-dom'

const labels = {
  '/': 'Home',
  '/installation': 'Installation',
  '/wifi': 'WiFi Hacking',
  '/bluetooth': 'Bluetooth Hacking',
  '/payloads': 'Payloads',
  '/tools': 'Tools',
  '/about': 'About',
  '/contact': 'Contact',
  '/privacy-policy': 'Privacy Policy',
  '/terms': 'Terms',
  '/disclaimer': 'Disclaimer',
  '/dmca': 'DMCA',
  '/blog': 'Blog',
  '/sitemap': 'Sitemap',
  '/learning-paths': 'Learning Paths',
  '/compare': 'Compare Tools',
  '/glossary': 'Glossary',
  '/cheatsheets': 'Cheatsheets',
  '/news': 'News',
  '/community': 'Community',
}

export default function Breadcrumbs({ items, className = '' }) {
  if (items && items.length > 0) {
    return (
      <nav aria-label="Breadcrumb" className={`mb-6 ${className}`}>
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && (
                <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {item.to && i < items.length - 1 ? (
                <Link to={item.to} className="hover:text-neon-green transition-colors">{item.label}</Link>
              ) : (
                <span className={i === items.length - 1 ? 'text-neon-green' : ''}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  }

  return null
}
