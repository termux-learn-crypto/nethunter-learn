import { useState } from 'react'
import { Link } from 'react-router-dom'

const paths = [
  {
    id: 'beginner',
    title: 'Beginner',
    subtitle: 'Naya Hacker',
    description: 'Agar aap bilkul naye hain toh yahan se shuru karein. Basics seekhne ke liye perfect path.',
    color: 'neon-green',
    icon: '🌱',
    duration: '4-6 weeks',
    steps: [
      {
        title: 'Linux Basics Seekhein',
        desc: 'Terminal commands, file system, permissions - yeh sab sabse pehle seekhein.',
        tools: ['Linux Terminal'],
        link: '/installation',
      },
      {
        title: 'Nethunter Install Karein',
        desc: 'Apne phone me Kali Nethunter install karein aur setup complete karein.',
        tools: ['Nethunter', 'Magisk', 'TWRP'],
        link: '/installation',
      },
      {
        title: 'Networking Basics',
        desc: 'IP addresses, subnetting, ports, protocols - networking ki fundamentals seekhein.',
        tools: ['Nmap', 'Netdiscover'],
        link: '/tool/nmap',
      },
      {
        title: 'WiFi Security Basics',
        desc: 'WiFi encryption types, monitor mode, packet capture seekhein.',
        tools: ['Aircrack-ng', 'Wifite'],
        link: '/wifi',
      },
      {
        title: 'Pehla Reconnaissance',
        desc: 'Information gathering seekhein - target ke baare me jaankari collect karna.',
        tools: ['Nmap', 'Whois', 'DNSenum'],
        link: '/tool/whois',
      },
    ],
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    subtitle: 'Experienced Hacker',
    description: 'Jab basics aa jayein toh yeh path follow karein. Real-world attacks aur techniques seekhein.',
    color: 'neon-cyan',
    icon: '🔥',
    duration: '8-12 weeks',
    steps: [
      {
        title: 'Network Attacks',
        desc: 'Man-in-the-middle, ARP spoofing, packet injection jaise attacks seekhein.',
        tools: ['Bettercap', 'Wireshark', 'MITMf'],
        link: '/tool/bettercap',
      },
      {
        title: 'Web Application Hacking',
        desc: 'SQL injection, XSS, directory brute-forcing - web apps hack karna seekhein.',
        tools: ['SQLMap', 'Burp Suite', 'Gobuster'],
        link: '/tool/sqlmap',
      },
      {
        title: 'Password Cracking',
        desc: 'Hash cracking, brute-force, dictionary attacks - passwords todna seekhein.',
        tools: ['Hashcat', 'John', 'Hydra'],
        link: '/tool/hashcat',
      },
      {
        title: 'Exploitation Framework',
        desc: 'Metasploit use karke systems exploit karna seekhein.',
        tools: ['Metasploit', 'Msfvenom', 'SET'],
        link: '/tool/metasploit-framework',
      },
      {
        title: 'Wireless Attacks Advanced',
        desc: 'Evil twin, WPA enterprise attacks, rogue AP setup seekhein.',
        tools: ['EAPHammer', 'Hostapd-MANA', 'Kismet'],
        link: '/tool/eaphammer',
      },
      {
        title: 'Social Engineering',
        desc: 'Phishing, payload delivery, social engineering attacks seekhein.',
        tools: ['SET', 'BeEF XSS'],
        link: '/tool/setoolkit',
      },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced',
    subtitle: 'Expert Hacker',
    description: 'Expert level attacks, Active Directory, post-exploitation aur advanced techniques.',
    color: 'neon-red',
    icon: '💀',
    duration: '12-16 weeks',
    steps: [
      {
        title: 'Active Directory Attacks',
        desc: 'Windows domain environments me attack karna seekhein.',
        tools: ['BloodHound', 'CrackMapExec', 'Evil-WinRM'],
        link: '/tool/bloodhound',
      },
      {
        title: 'Post-Exploitation',
        desc: 'System compromise karne ke baad kya karna hai - persistence, lateral movement.',
        tools: ['Empire', 'Mimikatz', 'Impacket'],
        link: '/tool/empire',
      },
      {
        title: 'Mobile Security',
        desc: 'Android app reverse engineering, runtime manipulation seekhein.',
        tools: ['APKTool', 'Frida', 'Drozer'],
        link: '/tool/apktool',
      },
      {
        title: 'Tunneling & Pivoting',
        desc: 'Network me deeper jaane ke liye tunnels aur pivots setup karna seekhein.',
        tools: ['Chisel', 'DNScat2', 'Proxychains'],
        link: '/tool/chisel',
      },
      {
        title: 'Forensics & Analysis',
        desc: 'Memory forensics, firmware analysis, reverse engineering seekhein.',
        tools: ['Volatility', 'Binwalk', 'Radare2'],
        link: '/tool/volatility',
      },
      {
        title: 'Bug Bounty & CTF',
        desc: 'Real-world bug bounty programs aur CTF competitions me participate karein.',
        tools: ['Nuclei', 'Subfinder', 'Amass'],
        link: '/tool/nuclei',
      },
    ],
  },
]

const colorMap = {
  'neon-green': {
    bg: 'bg-neon-green/10',
    border: 'border-neon-green/30',
    text: 'text-neon-green',
    hover: 'hover:border-neon-green/60',
    dot: 'bg-neon-green',
    line: 'bg-neon-green/30',
  },
  'neon-cyan': {
    bg: 'bg-neon-cyan/10',
    border: 'border-neon-cyan/30',
    text: 'text-neon-cyan',
    hover: 'hover:border-neon-cyan/60',
    dot: 'bg-neon-cyan',
    line: 'bg-neon-cyan/30',
  },
  'neon-red': {
    bg: 'bg-neon-red/10',
    border: 'border-neon-red/30',
    text: 'text-neon-red',
    hover: 'hover:border-neon-red/60',
    dot: 'bg-neon-red',
    line: 'bg-neon-red/30',
  },
}

export default function LearningPaths() {
  const [activePath, setActivePath] = useState('beginner')
  const currentPath = paths.find(p => p.id === activePath)
  const colors = colorMap[currentPath.color]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="section-title">Learning Paths</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Structured roadmap jo aapko step-by-step ethical hacking sikhayega.
          Apna level choose karein aur shuru ho jayein.
        </p>
      </div>

      {/* Path Selector */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
        {paths.map(path => {
          const c = colorMap[path.color]
          return (
            <button
              key={path.id}
              onClick={() => setActivePath(path.id)}
              className={`flex-1 max-w-xs p-6 rounded-xl border-2 transition-all ${
                activePath === path.id
                  ? `${c.bg} ${c.border} ${c.text}`
                  : 'bg-dark-800 border-dark-600 text-gray-400 hover:border-gray-500'
              }`}
            >
              <div className="text-3xl mb-2">{path.icon}</div>
              <h3 className="text-xl font-heading font-bold">{path.title}</h3>
              <p className="text-sm mt-1 opacity-80">{path.subtitle}</p>
              <p className="text-xs mt-2 opacity-60">{path.duration}</p>
            </button>
          )
        })}
      </div>

      {/* Active Path Details */}
      <div className="glass-card p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{currentPath.icon}</span>
          <div>
            <h2 className={`text-2xl font-heading font-bold ${colors.text}`}>
              {currentPath.title} Path
            </h2>
            <p className="text-gray-400">{currentPath.description}</p>
          </div>
        </div>
        <div className={`inline-block px-3 py-1 rounded-full text-sm ${colors.bg} ${colors.text} border ${colors.border}`}>
          Duration: {currentPath.duration}
        </div>
      </div>

      {/* Steps Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className={`absolute left-6 top-0 bottom-0 w-0.5 ${colors.line} hidden md:block`} />

        <div className="space-y-6">
          {currentPath.steps.map((step, i) => (
            <div key={i} className="relative flex gap-6">
              {/* Dot */}
              <div className={`hidden md:flex items-start pt-6`}>
                <div className={`w-12 h-12 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center ${colors.text} font-bold text-lg z-10`}>
                  {i + 1}
                </div>
              </div>

              {/* Card */}
              <Link
                to={step.link}
                className={`flex-1 glass-card p-6 ${colors.hover} transition-all hover:shadow-lg group`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className={`md:hidden inline-block w-8 h-8 rounded-full ${colors.bg} border ${colors.border} ${colors.text} text-sm font-bold text-center leading-8 mr-3`}>
                      {i + 1}
                    </span>
                    <h3 className={`text-lg font-semibold ${colors.text} group-hover:text-white transition-colors inline`}>
                      {step.title}
                    </h3>
                  </div>
                  <svg className={`w-5 h-5 ${colors.text} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm mb-3">{step.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {step.tools.map(tool => (
                    <span key={tool} className="text-xs px-2 py-1 rounded bg-dark-700 text-gray-300 border border-dark-600">
                      {tool}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-neon-green mb-2">Practice Zaroori Hai</h3>
          <p className="text-gray-400 text-sm">
            Sirf padhne se kuch nahi hoga. Har tool ko khud use karein, practice karein, experiments karein.
          </p>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-neon-cyan mb-2">Legal Rahiye</h3>
          <p className="text-gray-400 text-sm">
            Kabhi bhi bina permission ke kisi system pe attack na karein. Lab environments aur CTFs use karein.
          </p>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-neon-red mb-2">Community Join Karein</h3>
          <p className="text-gray-400 text-sm">
            HackTheBox, TryHackMe, CTFtime jaise platforms pe community join karein aur seekhte rahein.
          </p>
        </div>
      </div>
    </div>
  )
}
