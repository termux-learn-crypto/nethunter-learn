import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import blogPosts from '../data/blogPosts'
import MetaTags from '../components/MetaTags'

const WEB3FORMS_KEY = '6fa7bb07-9977-4698-a6f5-e8dd425afdeb'

const categories = ['सभी', 'रोडमैप', 'ट्यूटोरियल', 'सीवीई अलर्ट', 'तुलना', 'करियर', 'टूल्स', 'सिक्यूरिटी', 'सीटीएफ']

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

const sortOptions = [
  { value: 'newest', label: 'नया पहले' },
  { value: 'oldest', label: 'पुराना पहले' },
  { value: 'readtime', label: 'पढ़ने का समय' },
]

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('सभी')
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [selectedTag, setSelectedTag] = useState(null)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState(null) // 'success' | 'error' | null
  const [newsletterMsg, setNewsletterMsg] = useState('')
  const [newsletterSending, setNewsletterSending] = useState(false)

  const handleNewsletter = async (e) => {
    e.preventDefault()
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error')
      setNewsletterMsg('Valid email address likhein.')
      return
    }

    setNewsletterSending(true)
    setNewsletterStatus(null)
    setNewsletterMsg('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          email: newsletterEmail,
          subject: 'Newsletter Subscribe - Nethunter Learn',
          message: `Newsletter subscription request from: ${newsletterEmail}`,
        }),
      })
      const json = await res.json()
      if (json.success) {
        setNewsletterStatus('success')
        setNewsletterMsg('Subscribed! Aapko naye articles ki notification milegi.')
        setNewsletterEmail('')
      } else {
        setNewsletterStatus('error')
        setNewsletterMsg('Subscribe nahi hua. Dobara try karein.')
      }
    } catch {
      setNewsletterStatus('error')
      setNewsletterMsg('Network error. Check karein aur dobara try karein.')
    }
    setNewsletterSending(false)
  }

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(searchQuery), 300)
    return () => clearTimeout(timer)
  }, [searchQuery])

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set()
    blogPosts.forEach(p => p.tags.forEach(t => tags.add(t)))
    return [...tags]
  }, [])

  const filteredPosts = useMemo(() => {
    let result = blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'सभी' || post.category === selectedCategory
      const query = debouncedQuery.toLowerCase()
      const matchesSearch = !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      const matchesTag = !selectedTag || post.tags.includes(selectedTag)
      return matchesCategory && matchesSearch && matchesTag
    })

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.date) - new Date(a.date)
      if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date)
      if (sortBy === 'readtime') {
        const getMin = (t) => parseInt(t) || 0
        return getMin(a.readTime) - getMin(b.readTime)
      }
      return 0
    })

    return result
  }, [debouncedQuery, selectedCategory, sortBy, selectedTag])

  const featuredPosts = filteredPosts.filter(p => p.featured)
  const regularPosts = filteredPosts.filter(p => !p.featured)
  const hasActiveFilters = debouncedQuery || selectedCategory !== 'सभी' || selectedTag

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('सभी')
    setSelectedTag(null)
    setSortBy('newest')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <MetaTags
        title="Blog & Articles"
        description="Ethical hacking, security news, CVE alerts aur tutorials Hindi me. Cybersecurity seekhein asaan bhasha me."
        keywords="ethical hacking blog, cybersecurity hindi, CVE alerts, security tutorials"
        url="https://nethunter-learn.vercel.app/blog"
      />
      <div className="text-center mb-12">
        <h1 className="section-title">Blog & Articles</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Ethical hacking, security news, tutorials aur latest CVE alerts.
          Sab kuch Hindi me padhein.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Title, category ya tag se search karein..."
              className="w-full pl-10 pr-10 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-neon-green/50 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-neon-green/20 text-neon-green border border-neon-green/40'
                  : 'bg-dark-800 text-gray-400 border border-dark-600 hover:border-neon-green/30 hover:text-neon-green'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort + Tag filter + Clear */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="px-3 py-2 bg-dark-800 border border-dark-600 rounded-lg text-gray-300 text-sm focus:border-neon-green/50 focus:outline-none"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          <select
            value={selectedTag || ''}
            onChange={e => setSelectedTag(e.target.value || null)}
            className="px-3 py-2 bg-dark-800 border border-dark-600 rounded-lg text-gray-300 text-sm focus:border-neon-green/50 focus:outline-none"
          >
            <option value="">सभी टैग्स</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>#{tag}</option>
            ))}
          </select>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-3 py-2 text-sm text-neon-red border border-neon-red/30 rounded-lg hover:bg-neon-red/10 transition-all"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Result count */}
        <p className="text-center text-gray-500 text-sm">
          {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} mile
          {hasActiveFilters && ` (${blogPosts.length} total me se)`}
        </p>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-heading text-neon-cyan mb-6">Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map(post => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="glass-card p-6 card-hover group block"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-0.5 text-xs rounded border ${categoryColors[post.category] || 'bg-gray-500/10 text-gray-400 border-gray-500/30'}`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-neon-green transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{post.date}</span>
                  <span className="text-neon-green text-sm group-hover:translate-x-1 transition-transform">
                    Padhein →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts */}
      <div>
        <h2 className="text-xl font-heading text-neon-cyan mb-6">Sabhi Articles</h2>
        {regularPosts.length === 0 && featuredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Koi article nahi mila</p>
            <p className="text-gray-600 text-sm mt-2">Try a different search term or category</p>
            {hasActiveFilters && (
              <button onClick={clearFilters} className="mt-4 text-neon-green hover:underline text-sm">
                Saare filters clear karein
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {regularPosts.map(post => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="glass-card p-6 flex flex-col md:flex-row gap-4 card-hover group block"
              >
                <div className="md:w-48 shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 text-xs rounded border ${categoryColors[post.category] || 'bg-gray-500/10 text-gray-400 border-gray-500/30'}`}>
                      {post.category}
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs">{post.date}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white group-hover:text-neon-green transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span
                          key={tag}
                          onClick={(e) => {
                            e.preventDefault()
                            setSelectedTag(tag)
                          }}
                          className="text-xs text-gray-500 bg-dark-700 px-2 py-0.5 rounded hover:text-neon-green hover:bg-dark-600 cursor-pointer transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-500 text-xs ml-auto">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter */}
      <div className="mt-16 glass-card p-8 text-center">
        <h2 className="text-2xl font-heading text-neon-green mb-4">Newsletter Subscribe Karein</h2>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto">
          Naye articles, CVE alerts aur tutorials seedha email par. Spam nahi karenge, promise!
        </p>
        {newsletterStatus === 'success' ? (
          <div className="max-w-md mx-auto">
            <span className="text-4xl block mb-3">&#10003;</span>
            <p className="text-neon-green font-semibold">{newsletterMsg}</p>
          </div>
        ) : (
          <form onSubmit={handleNewsletter} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                placeholder="aapka@email.com"
                required
                className="flex-1 px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-neon-green/50 focus:outline-none"
              />
              <button
                type="submit"
                disabled={newsletterSending}
                className="btn-primary px-6 py-3 rounded-lg font-semibold text-dark-900 whitespace-nowrap disabled:opacity-50"
              >
                {newsletterSending ? 'Sending...' : 'Subscribe'}
              </button>
            </div>
            {newsletterMsg && (
              <p className={`text-sm mt-3 ${newsletterStatus === 'error' ? 'text-neon-red' : 'text-neon-green'}`}>
                {newsletterMsg}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  )
}
