import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookie_consent')
    if (!accepted) {setVisible(true)}
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie_consent', 'rejected')
    setVisible(false)
  }

  if (!visible) {return null}

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className="max-w-4xl mx-auto bg-dark-800 border border-neon-green/30 rounded-xl p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1 text-sm text-gray-300">
          <span className="text-neon-green font-semibold">🍪 Cookie Consent</span>
          <p className="mt-1">
            Hum Google Analytics aur AdSense ke liye cookies use karte hain. Continue karke aap humari{' '}
            <a href="/privacy-policy" className="text-neon-cyan underline">Privacy Policy</a> se agree karte hain.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={accept}
            className="btn-primary px-5 py-2 text-sm rounded-lg font-semibold whitespace-nowrap"
          >
            Accept Cookies
          </button>
          <button
            onClick={reject}
            className="px-5 py-2 text-sm rounded-lg border border-red-500/40 text-red-400 hover:text-white hover:bg-red-500/20 hover:border-red-500 transition-all whitespace-nowrap"
          >
            Cancel
          </button>
          <a
            href="/privacy-policy"
            className="px-5 py-2 text-sm rounded-lg border border-dark-600 text-gray-400 hover:text-white hover:border-neon-green/30 transition-all whitespace-nowrap"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}
