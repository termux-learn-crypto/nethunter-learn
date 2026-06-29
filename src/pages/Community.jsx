import { useState } from 'react'
import MetaTags from '../components/MetaTags'
import { WEB3FORMS_KEY } from '../lib/config'
import Spinner from '../components/Spinner'
import AdUnit from '../components/AdUnit'

const categories = [
  { title: 'Query', desc: 'Koi sawal hai? Poochhiye.', icon: '❓' },
  { title: 'Discussion', desc: 'Topic par baat karein.', icon: '💬' },
  { title: 'Bug Report', desc: 'Koi tool ka bug mila? Batayein.', icon: '🐛' },
  { title: 'Show & Tell', desc: 'Apna project dikhayein.', icon: '🎯' },
  { title: 'Resource', desc: 'Koi useful link share karein.', icon: '📚' },
]

export default function Community() {
  const [formData, setFormData] = useState({ name: '', email: '', category: 'Discussion', title: '', message: '' })
  const [status, setStatus] = useState(null)
  const [msg, setMsg] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)
    setMsg('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          ...formData,
          subject: `[Community] ${formData.category}: ${formData.title}`,
        }),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        setMsg('Aapka post submit ho gaya! Yahan display hoga jald.')
        setFormData({ name: '', email: '', category: 'Discussion', title: '', message: '' })
      } else {
        setStatus('error')
        setMsg('Submit nahi hua. Dobara try karein.')
      }
    } catch {
      setStatus('error')
      setMsg('Network error.')
    }
    setSending(false)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <MetaTags
        title="Community"
        description="Nethunter Learn community forum. Sawal poochhiye, discussions karein, aur script share karein."
        keywords="hacking community, forum, discussion, hindi"
        url="https://nethunter-learn.vercel.app/community"
      />
      <div className="text-center mb-10">
        <h1 className="section-title">Community Forum</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Sawal poochhiye, experiences share karein, aur community se seekhein. Ye ek open community hai — sabhi posts yahan public hain.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat.title}
            onClick={() => setFormData(prev => ({ ...prev, category: cat.title }))}
            className={`p-4 rounded-xl border-2 text-center transition-all ${
              formData.category === cat.title
                ? 'bg-neon-green/10 border-neon-green text-neon-green'
                : 'bg-dark-800 border-dark-600 text-gray-400 hover:border-neon-green/30'
            }`}
          >
            <div className="text-2xl mb-1">{cat.icon}</div>
            <div className="font-semibold text-sm">{cat.title}</div>
            <div className="text-xs opacity-60 mt-1">{cat.desc}</div>
          </button>
        ))}
      </div>

      {/* New Post Form */}
      <div className="glass-card p-6 mb-10">
        <h2 className="text-lg font-heading text-neon-cyan mb-4">Naya Post Likhein</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="text" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} placeholder="Aapka naam" required className="px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-neon-green/50 focus:outline-none" />
            <input type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} placeholder="Email (public nahi dikhega)" required className="px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-neon-green/50 focus:outline-none" />
          </div>
          <input type="text" value={formData.title} onChange={e => setFormData(p => ({ ...p, title: e.target.value }))} placeholder="Post title" required className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-neon-green/50 focus:outline-none" />
          <textarea value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} placeholder="Aapka message..." rows={5} required className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-neon-green/50 focus:outline-none" />
          <button type="submit" disabled={sending} className="btn-primary px-6 py-3 rounded-lg font-semibold text-dark-900 disabled:opacity-50 inline-flex items-center gap-2">{sending && <Spinner />}{sending ? 'Posting...' : 'Post Karein'}</button>
          {msg && <p className={`text-sm ${status === 'error' ? 'text-neon-red' : 'text-neon-green'}`}>{msg}</p>}
        </form>
      </div>

      {/* Sample Posts */}
      <div className="space-y-4">
        <h2 className="text-lg font-heading text-neon-cyan mb-4">Recent Discussions</h2>

        {[
          { name: 'Karan', cat: 'Discussion', title: 'Nmap ke saath WAF bypass kaise karein?', date: '2 din pehle', preview: 'Mujhe ek target mila jahan Cloudflare WAF hai. Nmap scan pe rate limit ho raha hai. Koi solution?' },
          { name: 'Raj', cat: 'Resource', title: 'OSCP prep ke liye best resources', date: '3 din pehle', preview: 'Maine OSCP diya aur pass hua. Yeh resources bahut helpful the: PWK course, TryHackMe Offensive Path, Outers role and tjnull list.' },
          { name: 'Priya', cat: 'Show & Tell', title: 'Mera pehla bug bounty - $500 earn kiye!', date: '5 din pehle', preview: 'Aaj mujhe HackerOne pe apna pehla valid bug mila! Reflected XSS tha ek subdomain pe. Report accepted aur $500 bounty mila.' },
          { name: 'Amit', cat: 'Query', title: 'NetHunter Rootless vs Root version mein kya difference?', date: '1 hafta pehle', preview: 'Mera phone root nahi hai. Kya rootless version se full WiFi attacks possible hain?' },
          { name: 'Vikas', cat: 'Bug Report', title: 'Aircrack-ng NetHunter pe crash ho raha', date: '1 hafta pehle', preview: 'NetHunter Rootless pe aircrack-ng run karte time segmentation fault aa raha hai. Kisi ko solution pata hai?' },
        ].map((post, i) => (
          <div key={i} className="glass-card p-5">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-neon-green/20 flex items-center justify-center text-neon-green text-sm font-bold shrink-0">{post.name[0]}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-white font-semibold">{post.title}</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-dark-700 text-gray-400">{post.cat}</span>
                  <span className="text-xs text-gray-600">{post.date}</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">{post.preview}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span>by {post.name}</span>
                  <button className="hover:text-neon-green transition-colors">Like</button>
                  <button className="hover:text-neon-green transition-colors">Reply</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Join CTA */}
      <div className="mt-10 glass-card p-6 text-center">
        <h2 className="text-lg font-heading text-neon-cyan mb-2">Community Rules</h2>
        <div className="text-gray-400 text-sm space-y-1 mb-4">
          <p>✓ Respectful rahein — kisi ko personally attack na karein</p>
          <p>✓ Illegal activities promote na karein</p>
          <p>✓ Spam nahi karein — relevant posts daalein</p>
          <p>✓ English ya Hindi — dono chalegi</p>
        </div>
        <p className="text-xs text-gray-500">Community moderators Vilas hain. Koi issue ho toh contact@nethunter-learn.vercel.app pe email karein.</p>
      </div>
      <AdUnit slot="7546303747" />
    </div>
  )
}
