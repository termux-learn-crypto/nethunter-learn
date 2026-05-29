import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-800 border-t border-neon-green/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🐉</span>
              <span className="font-heading font-bold text-lg text-neon-green">
                NETHUNTER<span className="text-neon-cyan">.learn</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Kali Nethunter seekhne ka sabse acha platform. Ethical hacking tutorials Hindi mein — educational purposes ke liye.
            </p>
            <div className="flex space-x-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-dark-600 rounded-lg flex items-center justify-center text-gray-500 hover:text-neon-green hover:bg-dark-500 transition-all" aria-label="GitHub">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-dark-600 rounded-lg flex items-center justify-center text-gray-500 hover:text-neon-cyan hover:bg-dark-500 transition-all" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-dark-600 rounded-lg flex items-center justify-center text-gray-500 hover:text-neon-red hover:bg-dark-500 transition-all" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-dark-600 rounded-lg flex items-center justify-center text-gray-500 hover:text-neon-cyan hover:bg-dark-500 transition-all" aria-label="Telegram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
            </div>
          </div>

          {/* Tutorials */}
          <div>
            <h3 className="font-heading text-neon-cyan text-sm uppercase tracking-wider mb-4">Tutorials</h3>
            <div className="space-y-2">
              <Link to="/installation" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">Installation Guide</Link>
              <Link to="/wifi" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">WiFi Hacking</Link>
              <Link to="/bluetooth" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">Bluetooth Hacking</Link>
              <Link to="/payloads" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">Payloads & Attacks</Link>
              <Link to="/tools" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">Tools Reference</Link>
              <Link to="/about" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">About Nethunter</Link>
            </div>
          </div>

          {/* Legal & Policy */}
          <div>
            <h3 className="font-heading text-neon-cyan text-sm uppercase tracking-wider mb-4">Legal & Policy</h3>
            <div className="space-y-2">
              <Link to="/privacy-policy" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">Terms of Service</Link>
              <Link to="/disclaimer" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">Disclaimer</Link>
              <Link to="/dmca" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">DMCA Policy</Link>
              <Link to="/contact" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">Contact Us</Link>
              <Link to="/sitemap" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">Sitemap</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading text-neon-cyan text-sm uppercase tracking-wider mb-4">Resources</h3>
            <div className="space-y-2">
              <a href="https://www.kali.org/" target="_blank" rel="noopener noreferrer" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">Kali Linux Official</a>
              <a href="https://www.offsec.com/" target="_blank" rel="noopener noreferrer" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">Offensive Security</a>
              <a href="https://www.hackthebox.com/" target="_blank" rel="noopener noreferrer" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">HackTheBox</a>
              <a href="https://tryhackme.com/" target="_blank" rel="noopener noreferrer" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">TryHackMe</a>
              <a href="https://owasp.org/" target="_blank" rel="noopener noreferrer" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">OWASP</a>
              <a href="https://nethunter.kali.org/" target="_blank" rel="noopener noreferrer" className="block text-gray-500 hover:text-neon-green text-sm transition-colors">Nethunter Official</a>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Bar */}
      <div className="border-t border-dark-600 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-gray-600 text-xs leading-relaxed text-center">
            <span className="text-neon-red">⚠️ Disclaimer:</span> Yeh website sirf educational purposes ke liye hai. Bina permission ke kisi bhi system ya network par hacking karna illegal hai. Hum kisi bhi illegal activity ko support nahi karte. Aap apni zimmedari par karein.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-600">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-600 text-xs font-mono">
                © {currentYear} NethunterLearn.in — All Rights Reserved
              </p>
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-600">
              <Link to="/privacy-policy" className="hover:text-neon-green transition-colors">Privacy</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-neon-green transition-colors">Terms</Link>
              <span>|</span>
              <Link to="/disclaimer" className="hover:text-neon-green transition-colors">Disclaimer</Link>
              <span>|</span>
              <Link to="/contact" className="hover:text-neon-green transition-colors">Contact</Link>
            </div>
            <div className="text-gray-600 text-xs font-mono">
              <span className="text-neon-green">$</span> hack responsibly
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
