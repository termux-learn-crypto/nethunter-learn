import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
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
                  <p>contact@nethunterlearn.in</p>
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
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-neon-green font-heading font-bold mb-4">Send a Message</h3>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Aapka Naam *</label>
                <input type="text" required className="w-full px-4 py-2.5 bg-dark-800 border border-neon-green/30 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-neon-green" placeholder="Apna naam likhein" />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Email Address *</label>
                <input type="email" required className="w-full px-4 py-2.5 bg-dark-800 border border-neon-green/30 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-neon-green" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1">Subject *</label>
                <select required className="w-full px-4 py-2.5 bg-dark-800 border border-neon-green/30 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-neon-green">
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
                <textarea required rows={5} className="w-full px-4 py-2.5 bg-dark-800 border border-neon-green/30 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-neon-green resize-none" placeholder="Apna message likhein..." />
              </div>
              <button type="submit" className="btn-primary w-full">Send Message →</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
