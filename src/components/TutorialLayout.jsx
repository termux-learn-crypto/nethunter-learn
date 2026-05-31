import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReadingProgress from './ReadingProgress'
import MetaTags from './MetaTags'
import Quiz from './Quiz'
import relatedToolsMap from '../data/relatedTools'
import quizData from '../data/quizData'
import { useProgress } from '../context/ProgressContext'
import { useBookmarks } from '../context/BookmarkContext'

const toolNames = {
  '/tool/aircrack-ng': 'aircrack-ng', '/tool/nmap': 'nmap', '/tool/metasploit-framework': 'metasploit',
  '/tool/bettercap': 'bettercap', '/tool/wifite': 'wifite', '/tool/sqlmap': 'sqlmap',
  '/tool/hydra': 'hydra', '/tool/john': 'john', '/tool/hashcat': 'hashcat', '/tool/nikto': 'nikto',
  '/tool/burpsuite': 'burpsuite', '/tool/wireshark': 'wireshark', '/tool/setoolkit': 'setoolkit',
  '/tool/responder': 'responder', '/tool/gobuster': 'gobuster', '/tool/wpscan': 'wpscan',
  '/tool/sherlock': 'sherlock', '/tool/mitmproxy': 'mitmproxy', '/tool/crunch': 'crunch',
  '/tool/macchanger': 'macchanger', '/tool/enum4linux': 'enum4linux', '/tool/dnsenum': 'dnsenum',
  '/tool/theharvester': 'theharvester', '/tool/dirb': 'dirb', '/tool/arp-scan': 'arp-scan',
  '/tool/cewl': 'cewl', '/tool/kismet': 'kismet', '/tool/eaphammer': 'eaphammer',
  '/tool/sslstrip': 'sslstrip', '/tool/recon-ng': 'recon-ng', '/tool/whois': 'whois',
  '/tool/dnsrecon': 'dnsrecon', '/tool/mimikatz': 'mimikatz', '/tool/bloodhound': 'bloodhound',
  '/tool/apktool': 'apktool', '/tool/pixiewps': 'pixiewps', '/tool/hostapd-mana': 'hostapd-mana',
  '/tool/yersinia': 'yersinia', '/tool/impacket': 'impacket', '/tool/crackmapexec': 'crackmapexec',
  '/tool/reaver': 'reaver', '/tool/netcat': 'netcat', '/tool/masscan': 'masscan',
  '/tool/hcxdumptool': 'hcxdumptool', '/tool/frida': 'frida', '/tool/drozer': 'drozer',
  '/tool/objection': 'objection', '/tool/maltego': 'maltego', '/tool/lynis': 'lynis',
  '/tool/chisel': 'chisel', '/tool/evil-winrm': 'evil-winrm', '/tool/subfinder': 'subfinder',
  '/tool/ffuf': 'ffuf', '/tool/trivy': 'trivy', '/tool/naabu': 'naabu', '/tool/nuclei': 'nuclei',
  '/tool/katana': 'katana', '/tool/tcpdump': 'tcpdump', '/tool/amass': 'amass',
  '/tool/commix': 'commix', '/tool/searchsploit': 'searchsploit', '/tool/proxychains': 'proxychains',
  '/tool/beef-xss': 'beef-xss', '/tool/wafw00f': 'wafw00f', '/tool/socat': 'socat',
  '/tool/dnscat2': 'dnscat2', '/tool/empire': 'empire', '/tool/netdiscover': 'netdiscover',
  '/tool/medusa': 'medusa', '/tool/airgeddon': 'airgeddon', '/tool/hping3': 'hping3',
  '/tool/binwalk': 'binwalk', '/tool/volatility': 'volatility', '/tool/msfvenom': 'msfvenom',
  '/tool/radare2': 'radare2', '/tool/sqlninja': 'sqlninja', '/tool/weevely': 'weevely',
}

export default function TutorialLayout({ title, subtitle, icon, children, prev, next }) {
  const location = useLocation()
  const related = relatedToolsMap[location.pathname] || []
  const { isLearned, toggleLearned, getStats } = useProgress()
  const { isBookmarked, toggleBookmark } = useBookmarks()
  const learned = isLearned(location.pathname)
  const bookmarked = isBookmarked(location.pathname)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <MetaTags
        title={`${title} Tutorial`}
        description={`${title} ethical hacking tool ka complete Hindi tutorial. Seekhein kaise use karein ${title} ko security testing ke liye.`}
        keywords={`${title}, ethical hacking, hindi tutorial, cybersecurity, kali nethunter`}
        url={`https://nethunter-learn.vercel.app${location.pathname}`}
      />
      <ReadingProgress />
      {/* Header */}
      <div className="mb-12">
        <Link to="/" className="text-gray-500 hover:text-neon-green text-sm font-mono mb-4 inline-block">
          ← Back to Home
        </Link>
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-5xl">{icon}</span>
          <div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white">{title}</h1>
            {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
          </div>
        </div>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full" />
      </div>

      {/* Progress Tracker & Bookmark */}
      <div className="mb-8 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => toggleLearned(location.pathname)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              learned
                ? 'bg-neon-green/20 text-neon-green border border-neon-green/40'
                : 'bg-dark-800 text-gray-400 border border-dark-600 hover:border-neon-green/30 hover:text-neon-green'
            }`}
          >
            {learned ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Seekh Liya!
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Mark as Learned
              </>
            )}
          </button>

          <button
            onClick={() => toggleBookmark(location.pathname, title)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              bookmarked
                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40'
                : 'bg-dark-800 text-gray-400 border border-dark-600 hover:border-yellow-500/30 hover:text-yellow-400'
            }`}
          >
            <svg className="w-5 h-5" fill={bookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            {bookmarked ? 'Bookmarked' : 'Bookmark'}
          </button>
        </div>
        <span className="text-gray-500 text-sm">
          {getStats().total}/77 tools learned ({getStats().percentage}%)
        </span>
      </div>

      {/* Warning */}
      <div className="warning-box mb-8">
        <div className="flex items-start space-x-2">
          <span className="text-xl">⚠️</span>
          <div>
            <strong className="text-red-400">Educational Purpose Only</strong>
            <p className="text-red-300/80 text-sm mt-1">
              These tutorials are meant for learning in controlled lab environments. Always get written permission before testing on any system you don't own. Unauthorized access is a criminal offense.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="tutorial-content">
        {children}
      </div>

      {/* Quiz */}
      {quizData[title.toLowerCase()] && (
        <Quiz questions={quizData[title.toLowerCase()]} toolName={title} />
      )}

      {/* Related Tools */}
      {related.length > 0 && (
        <div className="mt-12 pt-8 border-t border-dark-600">
          <h2 className="text-xl font-heading text-neon-cyan mb-4">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {related.map(path => (
              <Link
                key={path}
                to={path}
                className="px-4 py-2 bg-dark-800 border border-dark-600 rounded-lg text-gray-300 hover:text-neon-green hover:border-neon-green/30 transition-all text-sm font-mono"
              >
                {toolNames[path] || path.split('/').pop()}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center mt-16 pt-8 border-t border-dark-600">
        {prev ? (
          <Link to={prev.to} className="group flex items-center space-x-2 text-gray-400 hover:text-neon-green transition-colors">
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <div>
              <div className="text-xs text-gray-600">Previous</div>
              <div className="font-medium">{prev.label}</div>
            </div>
          </Link>
        ) : <div />}
        {next ? (
          <Link to={next.to} className="group flex items-center space-x-2 text-gray-400 hover:text-neon-green transition-colors text-right">
            <div>
              <div className="text-xs text-gray-600">Next</div>
              <div className="font-medium">{next.label}</div>
            </div>
            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}
