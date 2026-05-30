import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MONTHLY_LIMIT = 200
const COOLDOWN_SEC = 60
const WEB3FORMS_KEY = '6fa7bb07-9977-4698-a6f5-e8dd425afdeb'

const TRUSTED_DOMAINS = [
  'gmail.com', 'yahoo.com', 'yahoo.co.in', 'yahoo.co.uk', 'outlook.com',
  'hotmail.com', 'live.com', 'msn.com', 'protonmail.com', 'proton.me',
  'icloud.com', 'me.com', 'mac.com', 'aol.com', 'zoho.com', 'yandex.com',
  'mail.com', 'gmx.com', 'fastmail.com', 'tutanota.com', 'tuta.com',
  'rediffmail.com', 'edu', 'ac.in', 'gov.in', 'gov',
]

function isValidEmail(email) {
  const parts = email.split('@')
  if (parts.length !== 2) return false
  const domain = parts[1].toLowerCase()
  return TRUSTED_DOMAINS.some(d => domain === d || domain.endsWith('.' + d))
}

function getMonthKey() {
  const d = new Date()
  return `contact_${d.getFullYear()}_${d.getMonth()}`
}

function getCount() {
  const key = getMonthKey()
  const data = JSON.parse(localStorage.getItem(key) || '{"count":0}')
  return data.count
}

function incrementCount() {
  const key = getMonthKey()
  const data = JSON.parse(localStorage.getItem(key) || '{"count":0}')
  data.count += 1
  localStorage.setItem(key, JSON.stringify(data))
  return data.count
}

function getLastSubmit() {
  return parseInt(localStorage.getItem('contact_last_submit') || '0')
}

function setLastSubmit() {
  localStorage.setItem('contact_last_submit', String(Date.now()))
}

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [msgCount, setMsgCount] = useState(getCount())
  const limitReached = msgCount >= MONTHLY_LIMIT

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (limitReached) return

    // Cooldown check
    const elapsed = (Date.now() - getLastSubmit()) / 1000
    if (elapsed < COOLDOWN_SEC) {
      setError(`Spam rokne ke liye ${Math.ceil(COOLDOWN_SEC - elapsed)}s wait karein.`)
      return
    }

    setSending(true)
    setError('')
    const form = e.target
    const name = form.querySelector('[name="name"]').value.trim()
    const email = form.querySelector('[name="email"]').value.trim()
    const subject = form.querySelector('[name="subject"]').value
    const message = form.querySelector('[name="message"]').value.trim()

    // Honeypot check
    const honeypot = form.querySelector('[name="website"]').value
    if (honeypot) {
      setSending(false)
      return
    }

    // Validation
    if (name.length < 2) {
      setError('Naam kam se kam 2 characters ka hona chahiye.')
      setSending(false)
      return
    }
    if (!isValidEmail(email)) {
      setError('Sirf real email providers allowed hain (Gmail, Outlook, Yahoo, ProtonMail, etc).')
      setSending(false)
      return
    }
    if (message.length < 10) {
      setError('Message kam se kam 10 characters ka hona chahiye.')
      setSending(false)
      return
    }
    if (message.length > 5000) {
      setError('Message 5000 characters se zyada nahi ho sakta.')
      setSending(false)
      return
    }

    const data = {
      access_key: WEB3FORMS_KEY,
      botcheck: honeypot,
      name,
      email,
      subject,
      message,
    }
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        incrementCount()
        setMsgCount(getCount())
        setLastSubmit()
        setSubmitted(true)
      } else {
        setError('Message send nahi hua. Dobara try karein.')
      }
    } catch {
      setError('Network error. Check karein aur dobara try karein.')
    }
    setSending(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/" className="text-gray-500 hover:text-neon-green text-sm font-mono mb-6 inline-block">← Home</Link>
      <h1 className="text-4xl font-heading font-bold text-white mb-2">Contact Us</h1>
      <p className="text-gray-500 text-sm mb-8">Humse baat karein — hum 24-48 hours mein jawab dete hain</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-neon-green font-heading font-bold mb-4">Get in Touch</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-start space-x-3">
                <span className="text-neon-green text-lg">📧</span>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a href="mailto:contact@nethunter-learn.vercel.app" className="text-neon-green hover:underline">contact@nethunter-learn.vercel.app</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-neon-green text-lg">⏰</span>
                <div>
                  <p className="text-white font-semibold">Response Time</p>
                  <p>24-48 business hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-neon-green text-lg">🌐</span>
                <div>
                  <p className="text-white font-semibold">Social Media</p>
                  <p>Humse social media par bhi connect karein</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-neon-cyan font-heading font-bold mb-4">FAQ</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-white font-semibold">Kya yeh website free hai?</p>
                <p className="text-gray-500">Haan, sab tutorials bilkul free hain.</p>
              </div>
              <div>
                <p className="text-white font-semibold">Kya aap mentorship dete hain?</p>
                <p className="text-gray-500">Filhaal nahi, lekin future mein plan hai.</p>
              </div>
              <div>
                <p className="text-white font-semibold">Kya main guest post kar sakta hoon?</p>
                <p className="text-gray-500">Haan! Email karein apne topic idea ke saath.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-6">
          {submitted ? (
            <div className="text-center py-12">
              <span className="text-5xl">✅</span>
              <h3 className="text-neon-green font-heading font-bold text-xl mt-4">Message Bhej Diya!</h3>
              <p className="text-gray-400 mt-2">Hum jaldi se jaldi aapko reply karenge.</p>
            </div>
          ) : limitReached ? (
            <div className="text-center py-12">
              <span className="text-5xl">🚫</span>
              <h3 className="text-red-400 font-heading font-bold text-xl mt-4">Monthly Limit Reached</h3>
              <p className="text-gray-400 mt-2">Is month ke {MONTHLY_LIMIT} messages ho gaye. Next month try karein.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute opacity-0 h-0 w-0" aria-hidden="true" />
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-neon-green font-heading font-bold">Send a Message</h3>
                <span className="text-gray-500 text-xs font-mono">{msgCount}/{MONTHLY_LIMIT} this month</span>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Aapka Naam *</label>
                <input type="text" name="name" required className="w-full px-4 py-2.5 bg-dark-800 border border-neon-green/30 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-neon-green" placeholder="Apna naam likhein" />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Email Address *</label>
                <input type="email" name="email" required className="w-full px-4 py-2.5 bg-dark-800 border border-neon-green/30 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-neon-green" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Subject *</label>
                <select name="subject" required className="w-full px-4 py-2.5 bg-dark-800 border border-neon-green/30 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-neon-green">
                  <option value="">Select karein...</option>
                  <option value="general">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="bug">Bug Report</option>
                  <option value="content">Content Suggestion</option>
                  <option value="dmca">DMCA Notice</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Message *</label>
                <textarea name="message" required rows={5} className="w-full px-4 py-2.5 bg-dark-800 border border-neon-green/30 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-neon-green resize-none" placeholder="Apna message likhein..." />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-50">{sending ? 'Sending...' : 'Send Message →'}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
