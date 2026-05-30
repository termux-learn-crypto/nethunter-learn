import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Sitemap() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const pages = [
    { path: '/', label: 'Home', desc: 'Nethunter learning platform ka main page' },
    { path: '/installation', label: 'Installation Guide', desc: 'Kali Nethunter install karne ka complete guide' },
    { path: '/wifi', label: 'WiFi Hacking', desc: 'WiFi security testing tutorials' },
    { path: '/bluetooth', label: 'Bluetooth Hacking', desc: 'Bluetooth security testing tutorials' },
    { path: '/payloads', label: 'Payloads & Attacks', desc: 'Metasploit, payloads, aur attack techniques' },
    { path: '/tools', label: 'Tools Reference', desc: '75+ security tools ka complete reference' },
    { path: '/tool/aircrack-ng', label: 'aircrack-ng', desc: 'WiFi network security assessment suite' },
    { path: '/tool/nmap', label: 'nmap', desc: 'Network exploration aur security auditing' },
    { path: '/tool/metasploit-framework', label: 'metasploit-framework', desc: 'Penetration testing framework' },
    { path: '/tool/bettercap', label: 'bettercap', desc: 'Network attacks ke liye Swiss army knife' },
    { path: '/tool/wifite', label: 'wifite', desc: 'Automated WiFi attack tool' },
    { path: '/tool/sqlmap', label: 'sqlmap', desc: 'SQL injection detection aur exploitation' },
    { path: '/tool/hydra', label: 'hydra', desc: 'Fast network login cracker' },
    { path: '/tool/john', label: 'john', desc: 'Password hash cracker' },
    { path: '/tool/hashcat', label: 'hashcat', desc: 'GPU-accelerated password recovery' },
    { path: '/tool/nikto', label: 'nikto', desc: 'Web server scanner' },
    { path: '/tool/burpsuite', label: 'burpsuite', desc: 'Web application security testing' },
    { path: '/tool/wireshark', label: 'wireshark', desc: 'Network protocol analyzer' },
    { path: '/tool/setoolkit', label: 'setoolkit', desc: 'Social-Engineer Toolkit' },
    { path: '/tool/responder', label: 'responder', desc: 'LLMNR/NBT-NS/MDNS poisoner' },
    { path: '/tool/gobuster', label: 'gobuster', desc: 'Directory and file brute forcing' },
    { path: '/tool/wpscan', label: 'wpscan', desc: 'WordPress security scanner' },
    { path: '/tool/sherlock', label: 'sherlock', desc: 'Username enumeration across social networks' },
    { path: '/tool/mitmproxy', label: 'mitmproxy', desc: 'Interactive HTTPS proxy' },
    { path: '/tool/crunch', label: 'crunch', desc: 'Wordlist generator' },
    { path: '/tool/macchanger', label: 'macchanger', desc: 'MAC address spoofing tool' },
    { path: '/tool/enum4linux', label: 'enum4linux', desc: 'SMB/NetBIOS enumeration' },
    { path: '/tool/dnsenum', label: 'dnsenum', desc: 'DNS enumeration tool' },
    { path: '/tool/theharvester', label: 'theharvester', desc: 'Email and subdomain harvester' },
    { path: '/tool/dirb', label: 'dirb', desc: 'Web content scanner' },
    { path: '/tool/arp-scan', label: 'arp-scan', desc: 'ARP-based network scanner' },
    { path: '/tool/cewl', label: 'cewl', desc: 'Custom wordlist generator from websites' },
    { path: '/tool/kismet', label: 'kismet', desc: 'Wireless network detector and sniffer' },
    { path: '/tool/eaphammer', label: 'eaphammer', desc: 'WPA-Enterprise attack tool' },
    { path: '/tool/sslstrip', label: 'sslstrip', desc: 'SSL stripping attack tool' },
    { path: '/tool/recon-ng', label: 'recon-ng', desc: 'Web reconnaissance framework' },
    { path: '/tool/whois', label: 'whois', desc: 'Domain information lookup' },
    { path: '/tool/dnsrecon', label: 'dnsrecon', desc: 'DNS enumeration and reconnaissance' },
    { path: '/tool/mimikatz', label: 'mimikatz', desc: 'Windows credential extraction' },
    { path: '/tool/bloodhound', label: 'bloodhound', desc: 'Active Directory attack path analysis' },
    { path: '/tool/apktool', label: 'apktool', desc: 'Android APK reverse engineering' },
    { path: '/tool/pixiewps', label: 'pixiewps', desc: 'WPS Pixie Dust attack tool' },
    { path: '/tool/hostapd-mana', label: 'hostapd-mana', desc: 'Evil twin access point tool' },
    { path: '/tool/yersinia', label: 'yersinia', desc: 'Layer 2 network attack tool' },
    { path: '/tool/impacket', label: 'impacket', desc: 'Python network protocol toolkit' },
    { path: '/tool/crackmapexec', label: 'crackmapexec', desc: 'Post-exploitation and lateral movement' },
    { path: '/tool/reaver', label: 'reaver', desc: 'WPS brute force attack tool' },
    { path: '/tool/netcat', label: 'netcat', desc: 'Network Swiss army knife' },
    { path: '/tool/masscan', label: 'masscan', desc: 'Fast port scanner' },
    { path: '/tool/hcxdumptool', label: 'hcxdumptool', desc: 'WiFi packet capture tool' },
    { path: '/tool/frida', label: 'frida', desc: 'Dynamic instrumentation toolkit' },
    { path: '/tool/drozer', label: 'drozer', desc: 'Android security testing framework' },
    { path: '/tool/objection', label: 'objection', desc: 'Mobile exploration toolkit' },
    { path: '/tool/maltego', label: 'maltego', desc: 'Open source intelligence and forensics' },
    { path: '/tool/lynis', label: 'lynis', desc: 'Security auditing tool for Linux' },
    { path: '/tool/chisel', label: 'chisel', desc: 'TCP/UDP tunnel over HTTP' },
    { path: '/tool/evil-winrm', label: 'evil-winrm', desc: 'WinRM shell for pentesting' },
    { path: '/tool/subfinder', label: 'subfinder', desc: 'Passive subdomain discovery' },
    { path: '/tool/ffuf', label: 'ffuf', desc: 'Fast web fuzzer' },
    { path: '/tool/trivy', label: 'trivy', desc: 'Vulnerability scanner for containers' },
    { path: '/tool/naabu', label: 'naabu', desc: 'Fast port scanner' },
    { path: '/tool/nuclei', label: 'nuclei', desc: 'Vulnerability scanner using templates' },
    { path: '/tool/katana', label: 'katana', desc: 'Web crawler and spider' },
    { path: '/tool/tcpdump', label: 'tcpdump', desc: 'Command-line packet analyzer' },
    { path: '/tool/amass', label: 'amass', desc: 'Attack surface mapping tool' },
    { path: '/tool/commix', label: 'commix', desc: 'Command injection exploiter' },
    { path: '/tool/searchsploit', label: 'searchsploit', desc: 'Exploit-DB search tool' },
    { path: '/tool/proxychains', label: 'proxychains', desc: 'Proxy chaining tool' },
    { path: '/tool/beef-xss', label: 'beef-xss', desc: 'Browser Exploitation Framework' },
    { path: '/tool/wafw00f', label: 'wafw00f', desc: 'Web Application Firewall detection' },
    { path: '/tool/socat', label: 'socat', desc: 'Advanced networking Swiss army knife' },
    { path: '/tool/dnscat2', label: 'dnscat2', desc: 'DNS tunneling C2 tool' },
    { path: '/tool/empire', label: 'empire', desc: 'Post-exploitation framework' },
    { path: '/tool/netdiscover', label: 'netdiscover', desc: 'ARP scanner for network discovery' },
    { path: '/tool/medusa', label: 'medusa', desc: 'Parallel login brute forcer' },
    { path: '/tool/airgeddon', label: 'airgeddon', desc: 'Multi-use WiFi security audit tool' },
    { path: '/tool/hping3', label: 'hping3', desc: 'Network packet crafting tool' },
    { path: '/tool/binwalk', label: 'binwalk', desc: 'Firmware analysis tool' },
    { path: '/tool/volatility', label: 'volatility', desc: 'Memory forensics framework' },
    { path: '/tool/msfvenom', label: 'msfvenom', desc: 'Payload generator' },
    { path: '/tool/radare2', label: 'radare2', desc: 'Reverse engineering framework' },
    { path: '/tool/sqlninja', label: 'sqlninja', desc: 'MS SQL Server exploitation tool' },
    { path: '/tool/weevely', label: 'weevely', desc: 'Web shell management tool' },
    { path: '/about', label: 'About Nethunter', desc: 'Kya hai Nethunter aur ethical hacking ke baare mein' },
    { path: '/privacy-policy', label: 'Privacy Policy', desc: 'Hamari privacy policy aur data practices' },
    { path: '/terms', label: 'Terms of Service', desc: 'Website use ki terms aur conditions' },
    { path: '/disclaimer', label: 'Disclaimer', desc: 'Educational content ka legal disclaimer' },
    { path: '/dmca', label: 'DMCA Policy', desc: 'Copyright infringement reporting policy' },
    { path: '/contact', label: 'Contact Us', desc: 'Humse contact karein' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/" className="text-gray-500 hover:text-neon-green text-sm font-mono mb-6 inline-block">← Home</Link>
      <h1 className="text-4xl font-heading font-bold text-white mb-2">Sitemap</h1>
      <p className="text-gray-500 text-sm mb-8">Website ki sabhi pages ki list</p>

      <div className="space-y-3">
        {pages.map(page => (
          <Link key={page.path} to={page.path} className="block glass-card p-4 hover:border-neon-green/40 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-neon-green font-mono font-bold">{page.label}</h3>
                <p className="text-gray-500 text-sm mt-1">{page.desc}</p>
              </div>
              <span className="text-gray-600 text-xs font-mono">{page.path}</span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}
