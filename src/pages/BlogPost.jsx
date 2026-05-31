import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import blogPosts from '../data/blogPosts'
import ReadingProgress from '../components/ReadingProgress'
import MetaTags from '../components/MetaTags'
import { useBookmarks } from '../context/BookmarkContext'

const categoryColors = {
  'रोडमैप': 'bg-neon-green/10 text-neon-green border-neon-green/30',
  'ट्यूटोरियल': 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30',
  'सीवीई अलर्ट': 'bg-neon-red/10 text-neon-red border-neon-red/30',
  'तुलना': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  'करियर': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  'टूल्स': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'सिक्यूरिटी': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  'सीटीएफ': 'bg-pink-500/10 text-pink-400 border-pink-500/30',
}

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = blogPosts.find(p => p.id === slug)
  const { isBookmarked, toggleBookmark } = useBookmarks()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-heading text-white mb-4">लेख नहीं मिला</h1>
        <p className="text-gray-400 mb-8">यह लेख मौजूद नहीं है या हटा दिया गया है।</p>
        <Link to="/blog" className="btn-primary px-6 py-3 rounded-lg text-dark-900">
          ब्लॉग पर जाएं
        </Link>
      </div>
    )
  }

  const currentIndex = blogPosts.findIndex(p => p.id === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  const relatedPosts = blogPosts
    .filter(p => p.id !== slug && p.tags.some(t => post.tags.includes(t)))
    .slice(0, 3)

  const renderContent = (content) => {
    const lines = content.trim().split('\n')
    const elements = []
    let inList = false
    let listItems = []

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            ))}
          </ul>
        )
        listItems = []
      }
      inList = false
    }

    const formatInline = (text) => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
        .replace(/`(.*?)`/g, '<code class="bg-dark-700 px-1.5 py-0.5 rounded text-neon-green text-sm">$1</code>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-neon-cyan hover:underline">$1</a>')
    }

    lines.forEach((line, i) => {
      const trimmed = line.trim()

      if (!trimmed) {
        flushList()
        return
      }

      if (trimmed.startsWith('## ')) {
        flushList()
        elements.push(
          <h2 key={i} className="text-2xl font-heading text-neon-green mt-8 mb-4">
            {trimmed.slice(3)}
          </h2>
        )
      } else if (trimmed.startsWith('### ')) {
        flushList()
        elements.push(
          <h3 key={i} className="text-xl font-semibold text-neon-cyan mt-6 mb-3">
            {trimmed.slice(4)}
          </h3>
        )
      } else if (trimmed.startsWith('- **')) {
        inList = true
        listItems.push(trimmed.slice(2))
      } else if (trimmed.startsWith('- ')) {
        inList = true
        listItems.push(trimmed.slice(2))
      } else if (trimmed.startsWith('| ')) {
        flushList()
        // Table handling
        if (!elements.some(e => e?.key === `table-${i}`)) {
          const tableLines = lines.filter(l => l.trim().startsWith('| '))
          const headers = tableLines[0]?.split('|').filter(Boolean).map(h => h.trim())
          const rows = tableLines.slice(2).map(r => r.split('|').filter(Boolean).map(c => c.trim()))

          elements.push(
            <div key={`table-${i}`} className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {headers?.map((h, hi) => (
                      <th key={hi} className="border border-dark-600 px-4 py-2 bg-dark-700 text-neon-green text-left">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="border border-dark-600 px-4 py-2 text-gray-300">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
      } else if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ')) {
        inList = true
        listItems.push(trimmed.replace(/^\d+\.\s*/, ''))
      } else {
        flushList()
        elements.push(
          <p key={i} className="text-gray-300 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
        )
      }
    })

    flushList()
    return elements
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <MetaTags
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        url={`https://nethunter-learn.vercel.app/blog/${post.id}`}
      />
      <ReadingProgress />
      {/* Back link */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        ब्लॉग पर वापस जाएं
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className={`px-3 py-1 text-sm rounded border ${categoryColors[post.category] || 'bg-gray-500/10 text-gray-400 border-gray-500/30'}`}>
            {post.category}
          </span>
          <span className="text-gray-500 text-sm">{post.readTime} पढ़ने का समय</span>
          <button
            onClick={() => toggleBookmark(`/blog/${post.id}`, post.title, 'blog')}
            className={`flex items-center gap-1 px-3 py-1 text-sm rounded border transition-all ${
              isBookmarked(`/blog/${post.id}`)
                ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40'
                : 'bg-dark-800 text-gray-400 border-dark-600 hover:border-yellow-500/30 hover:text-yellow-400'
            }`}
          >
            <svg className="w-4 h-4" fill={isBookmarked(`/blog/${post.id}`) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            {isBookmarked(`/blog/${post.id}`) ? 'Bookmarked' : 'Bookmark'}
          </button>
        </div>

        <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{post.date}</span>
          <span>|</span>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="bg-dark-700 px-2 py-0.5 rounded text-xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Warning box */}
      <div className="warning-box mb-8">
        <strong>कानूनी चेतावनी:</strong> यह लेख केवल शैक्षिक उद्देश्यों के लिए है। बिना अनुमति के किसी भी सिस्टम पर हमला करना गैरकानूनी है।
      </div>

      {/* Content */}
      <article className="tutorial-content">
        {renderContent(post.content)}
      </article>

      {/* Share & Navigation */}
      <div className="mt-12 pt-8 border-t border-dark-600">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <p className="text-gray-400">लेख अच्छा लगा? शेयर करें:</p>
          <div className="flex gap-3">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600/20 border border-green-600/40 rounded-lg text-green-400 hover:bg-green-600/30 transition-all text-sm"
            >
              WhatsApp
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600/20 border border-blue-600/40 rounded-lg text-blue-400 hover:bg-blue-600/30 transition-all text-sm"
            >
              Twitter
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                alert('लिंक कॉपी हो गया!')
              }}
              className="px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-gray-300 hover:text-neon-green hover:border-neon-green/30 transition-all text-sm"
            >
              लिंक कॉपी करें
            </button>
          </div>
        </div>

        {/* Prev/Next */}
        <div className="grid sm:grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              to={`/blog/${prevPost.id}`}
              className="glass-card p-4 hover:border-neon-green/40 transition-all group"
            >
              <span className="text-xs text-gray-500">पिछला लेख</span>
              <p className="text-gray-300 group-hover:text-neon-green transition-colors mt-1">
                {prevPost.title}
              </p>
            </Link>
          ) : <div />}

          {nextPost ? (
            <Link
              to={`/blog/${nextPost.id}`}
              className="glass-card p-4 hover:border-neon-cyan/40 transition-all group text-right"
            >
              <span className="text-xs text-gray-500">अगला लेख</span>
              <p className="text-gray-300 group-hover:text-neon-cyan transition-colors mt-1">
                {nextPost.title}
              </p>
            </Link>
          ) : <div />}
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-heading text-neon-cyan mb-6">संबंधित लेख</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedPosts.map(rp => (
              <Link
                key={rp.id}
                to={`/blog/${rp.id}`}
                className="glass-card p-4 hover:border-neon-green/40 transition-all group"
              >
                <span className={`inline-block px-2 py-0.5 text-xs rounded border mb-2 ${categoryColors[rp.category] || ''}`}>
                  {rp.category}
                </span>
                <h3 className="text-sm text-gray-300 group-hover:text-neon-green transition-colors line-clamp-2">
                  {rp.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
