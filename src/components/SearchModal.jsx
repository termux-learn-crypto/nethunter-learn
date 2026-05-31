import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const searchData = [
  { title: 'Home', path: '/', category: 'Page', desc: 'Nethunter Learn - Seekho Ethical Hacking' },
  { title: 'Installation Guide', path: '/installation', category: 'Tutorial', desc: 'Kali Nethunter install kaise karein' },
  { title: 'WiFi Hacking', path: '/wifi', category: 'Tutorial', desc: 'WiFi security testing aur attacks' },
  { title: 'Bluetooth Hacking', path: '/bluetooth', category: 'Tutorial', desc: 'Bluetooth aur BLE security testing' },
  { title: 'Payloads', path: '/payloads', category: 'Tutorial', desc: 'Metasploit payloads aur social engineering' },
  { title: 'Tools', path: '/tools', category: 'Page', desc: 'Sabhi ethical hacking tools ki list' },
  { title: 'About', path: '/about', category: 'Page', desc: 'Nethunter Learn ke baare me' },
  { title: 'Contact', path: '/contact', category: 'Page', desc: 'Humse sampark karein' },
  { title: 'Privacy Policy', path: '/privacy-policy', category: 'Legal', desc: 'Privacy policy padhein' },
  { title: 'Terms of Service', path: '/terms', category: 'Legal', desc: 'Terms and conditions' },
  { title: 'Disclaimer', path: '/disclaimer', category: 'Legal', desc: 'Legal disclaimer' },
  { title: 'DMCA', path: '/dmca', category: 'Legal', desc: 'DMCA copyright policy' },
  { title: 'Sitemap', path: '/sitemap', category: 'Page', desc: 'Poori site ki sitemap' },
  { title: 'Aircrack-ng', path: '/tool/aircrack-ng', category: 'WiFi', desc: 'WiFi password cracking tool' },
  { title: 'Airgeddon', path: '/tool/airgeddon', category: 'WiFi', desc: 'Multi-use bash script for WiFi audits' },
  { title: 'Wifite', path: '/tool/wifite', category: 'WiFi', desc: 'Automated WiFi attack tool' },
  { title: 'Kismet', path: '/tool/kismet', category: 'WiFi', desc: 'Wireless detector, sniffer, and IDS' },
  { title: 'EAPHammer', path: '/tool/eaphammer', category: 'WiFi', desc: 'WPA-Enterprise attack tool' },
  { title: 'PixieWPS', path: '/tool/pixiewps', category: 'WiFi', desc: 'WPS offline brute-force attack' },
  { title: 'Hostapd-MANA', path: '/tool/hostapd-mana', category: 'WiFi', desc: 'Rogue access point tool' },
  { title: 'HCXDUMPTOOL', path: '/tool/hcxdumptool', category: 'WiFi', desc: 'WiFi packet capture tool' },
  { title: 'Nmap', path: '/tool/nmap', category: 'Recon', desc: 'Network scanner aur discovery tool' },
  { title: 'Masscan', path: '/tool/masscan', category: 'Recon', desc: 'Fast port scanner' },
  { title: 'Netdiscover', path: '/tool/netdiscover', category: 'Recon', desc: 'ARP scanner for network discovery' },
  { title: 'Naabu', path: '/tool/naabu', category: 'Recon', desc: 'Fast port scanner in Go' },
  { title: 'ARP Scan', path: '/tool/arp-scan', category: 'Network', desc: 'ARP protocol scanner' },
  { title: 'Enum4linux', path: '/tool/enum4linux', category: 'Recon', desc: 'SMB enumeration tool' },
  { title: 'DNSenum', path: '/tool/dnsenum', category: 'Recon', desc: 'DNS enumeration tool' },
  { title: 'DNSrecon', path: '/tool/dnsrecon', category: 'Recon', desc: 'DNS reconnaissance tool' },
  { title: 'Whois', path: '/tool/whois', category: 'Recon', desc: 'Domain information lookup' },
  { title: 'TheHarvester', path: '/tool/theharvester', category: 'Recon', desc: 'Email, subdomain, name harvester' },
  { title: 'Sherlock', path: '/tool/sherlock', category: 'Recon', desc: 'Social media username search' },
  { title: 'Recon-ng', path: '/tool/recon-ng', category: 'Recon', desc: 'Web reconnaissance framework' },
  { title: 'Subfinder', path: '/tool/subfinder', category: 'Recon', desc: 'Subdomain discovery tool' },
  { title: 'Amass', path: '/tool/amass', category: 'Recon', desc: 'Network mapping and attack surface' },
  { title: 'Maltego', path: '/tool/maltego', category: 'Recon', desc: 'Open source intelligence gathering' },
  { title: 'Katana', path: '/tool/katana', category: 'Recon', desc: 'Web crawler and spider' },
  { title: 'Metasploit', path: '/tool/metasploit-framework', category: 'Exploitation', desc: 'Penetration testing framework' },
  { title: 'Msfvenom', path: '/tool/msfvenom', category: 'Exploitation', desc: 'Payload generator' },
  { title: 'SET', path: '/tool/setoolkit', category: 'Exploitation', desc: 'Social Engineering Toolkit' },
  { title: 'Impacket', path: '/tool/impacket', category: 'Exploitation', desc: 'Network protocols toolkit' },
  { title: 'CrackMapExec', path: '/tool/crackmapexec', category: 'Exploitation', desc: 'Network pentesting tool' },
  { title: 'BloodHound', path: '/tool/bloodhound', category: 'Exploitation', desc: 'Active Directory attack path' },
  { title: 'Evil-WinRM', path: '/tool/evil-winrm', category: 'Exploitation', desc: 'WinRM shell for pentesting' },
  { title: 'SearchSploit', path: '/tool/searchsploit', category: 'Exploitation', desc: 'Exploit database search' },
  { title: 'BeEF XSS', path: '/tool/beef-xss', category: 'Exploitation', desc: 'Browser exploitation framework' },
  { title: 'Empire', path: '/tool/empire', category: 'Exploitation', desc: 'Post-exploitation framework' },
  { title: 'Medusa', path: '/tool/medusa', category: 'Exploitation', desc: 'Parallel login brute-forcer' },
  { title: 'SQLMap', path: '/tool/sqlmap', category: 'Web', desc: 'SQL injection automation tool' },
  { title: 'SQLNinja', path: '/tool/sqlninja', category: 'Web', desc: 'SQL server injection tool' },
  { title: 'Nikto', path: '/tool/nikto', category: 'Web', desc: 'Web server scanner' },
  { title: 'Burp Suite', path: '/tool/burpsuite', category: 'Web', desc: 'Web application security testing' },
  { title: 'Gobuster', path: '/tool/gobuster', category: 'Web', desc: 'Directory and file brute-forcer' },
  { title: 'FFuF', path: '/tool/ffuf', category: 'Web', desc: 'Fast web fuzzer' },
  { title: 'Dirb', path: '/tool/dirb', category: 'Web', desc: 'URL brute-forcer' },
  { title: 'WPScan', path: '/tool/wpscan', category: 'Web', desc: 'WordPress security scanner' },
  { title: 'Nuclei', path: '/tool/nuclei', category: 'Web', desc: 'Vulnerability scanner' },
  { title: 'Commix', path: '/tool/commix', category: 'Web', desc: 'Command injection exploiter' },
  { title: 'Wafw00f', path: '/tool/wafw00f', category: 'Web', desc: 'Web application firewall detector' },
  { title: 'Weevely', path: '/tool/weevely', category: 'Web', desc: 'Web shell management tool' },
  { title: 'Hydra', path: '/tool/hydra', category: 'Passwords', desc: 'Password brute-force tool' },
  { title: 'John the Ripper', path: '/tool/john', category: 'Passwords', desc: 'Password cracker' },
  { title: 'Hashcat', path: '/tool/hashcat', category: 'Passwords', desc: 'Advanced password recovery' },
  { title: 'Crunch', path: '/tool/crunch', category: 'Passwords', desc: 'Wordlist generator' },
  { title: 'CeWL', path: '/tool/cewl', category: 'Passwords', desc: 'Custom wordlist generator' },
  { title: 'Mimikatz', path: '/tool/mimikatz', category: 'Passwords', desc: 'Windows credential extraction' },
  { title: 'Wireshark', path: '/tool/wireshark', category: 'Network', desc: 'Network protocol analyzer' },
  { title: 'Bettercap', path: '/tool/bettercap', category: 'Network', desc: 'Network attack and monitoring' },
  { title: 'Responder', path: '/tool/responder', category: 'Network', desc: 'LLMNR/NBT-NS/MDNS poisoner' },
  { title: 'MITMf', path: '/tool/mitmproxy', category: 'Network', desc: 'Man-in-the-middle framework' },
  { title: 'Macchanger', path: '/tool/macchanger', category: 'Network', desc: 'MAC address changer' },
  { title: 'SSLstrip', path: '/tool/sslstrip', category: 'Network', desc: 'HTTPS stripping attack tool' },
  { title: 'Yersinia', path: '/tool/yersinia', category: 'Network', desc: 'Layer 2 attack framework' },
  { title: 'Netcat', path: '/tool/netcat', category: 'Network', desc: 'Networking utility (Swiss army knife)' },
  { title: 'Proxychains', path: '/tool/proxychains', category: 'Network', desc: 'Force traffic through proxy' },
  { title: 'Socat', path: '/tool/socat', category: 'Network', desc: 'Multipurpose relay tool' },
  { title: 'Hping3', path: '/tool/hping3', category: 'Network', desc: 'Packet generator and analyzer' },
  { title: 'Tcpdump', path: '/tool/tcpdump', category: 'Network', desc: 'Command-line packet analyzer' },
  { title: 'Chisel', path: '/tool/chisel', category: 'Tunneling', desc: 'TCP/UDP tunnel over HTTP' },
  { title: 'DNScat2', path: '/tool/dnscat2', category: 'Tunneling', desc: 'DNS tunnel tool' },
  { title: 'APKTool', path: '/tool/apktool', category: 'Mobile', desc: 'Android APK reverse engineering' },
  { title: 'Frida', path: '/tool/frida', category: 'Mobile', desc: 'Dynamic instrumentation toolkit' },
  { title: 'Drozer', path: '/tool/drozer', category: 'Mobile', desc: 'Android security testing framework' },
  { title: 'Objection', path: '/tool/objection', category: 'Mobile', desc: 'Runtime mobile exploration' },
  { title: 'Lynis', path: '/tool/lynis', category: 'Audit', desc: 'Security auditing tool' },
  { title: 'Trivy', path: '/tool/trivy', category: 'Audit', desc: 'Vulnerability scanner for containers' },
  { title: 'Binwalk', path: '/tool/binwalk', category: 'Forensics', desc: 'Firmware analysis tool' },
  { title: 'Volatility', path: '/tool/volatility', category: 'Forensics', desc: 'Memory forensics framework' },
  { title: 'Radare2', path: '/tool/radare2', category: 'Forensics', desc: 'Reverse engineering framework' },
]

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setResults([])
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }
    const q = query.toLowerCase()
    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    ).slice(0, 12)
    setResults(filtered)
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        if (!isOpen) {
          // Parent will handle opening
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const handleSelect = (path) => {
    navigate(path)
    onClose()
  }

  if (!isOpen) return null

  const categoryColors = {
    Page: 'text-neon-cyan',
    Tutorial: 'text-neon-green',
    Legal: 'text-gray-400',
    WiFi: 'text-yellow-400',
    Network: 'text-blue-400',
    Recon: 'text-purple-400',
    Web: 'text-orange-400',
    Passwords: 'text-red-400',
    Exploitation: 'text-pink-400',
    Mobile: 'text-emerald-400',
    Tunneling: 'text-cyan-400',
    Audit: 'text-lime-400',
    Forensics: 'text-amber-400',
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-2xl mx-4 bg-dark-800 border border-neon-green/30 rounded-xl shadow-2xl shadow-neon-green/10 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center px-4 border-b border-dark-700">
          <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Tools, pages, tutorials search karein..."
            className="w-full px-3 py-4 bg-transparent text-white placeholder-gray-500 outline-none"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs text-gray-500 bg-dark-700 rounded border border-dark-600 shrink-0">
            ESC
          </kbd>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query && results.length === 0 && (
            <div className="px-4 py-8 text-center text-gray-500">
              <p className="text-lg mb-1">Kuch nahi mila</p>
              <p className="text-sm">"{query}" ke liye koi result nahi</p>
            </div>
          )}

          {!query && (
            <div className="px-4 py-6 text-center text-gray-500">
              <p>Type karke search karein...</p>
              <p className="text-xs mt-2">Tools, tutorials, pages sab search kar sakte hain</p>
            </div>
          )}

          {results.map((item, i) => (
            <button
              key={i}
              onClick={() => handleSelect(item.path)}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-neon-green/5 transition-colors text-left border-b border-dark-700/50 last:border-0"
            >
              <span className={`text-xs font-mono px-2 py-0.5 rounded bg-dark-700 ${categoryColors[item.category] || 'text-gray-400'}`}>
                {item.category}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-white font-medium truncate">{item.title}</p>
                <p className="text-gray-500 text-sm truncate">{item.desc}</p>
              </div>
              <svg className="w-4 h-4 text-gray-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>

        <div className="px-4 py-2 border-t border-dark-700 flex items-center justify-between text-xs text-gray-600">
          <span>{results.length > 0 ? `${results.length} results` : 'Search karein'}</span>
          <div className="flex items-center gap-2">
            <kbd className="px-1.5 py-0.5 bg-dark-700 rounded border border-dark-600">↑↓</kbd>
            <span>Navigate</span>
            <kbd className="px-1.5 py-0.5 bg-dark-700 rounded border border-dark-600">Enter</kbd>
            <span>Select</span>
          </div>
        </div>
      </div>
    </div>
  )
}
