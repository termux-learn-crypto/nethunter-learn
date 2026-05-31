import { useState } from 'react'
import { Link } from 'react-router-dom'

const toolsData = {
  'nmap': {
    name: 'Nmap',
    category: 'Recon',
    path: '/tool/nmap',
    desc: 'Network exploration and security auditing tool',
    features: ['Port scanning', 'OS detection', 'Service detection', 'Script engine (NSE)', 'Firewall evasion'],
    pros: ['Industry standard', 'Highly flexible', 'Great documentation', 'Active community'],
    cons: ['Can be slow on large networks', 'Noisy on network', 'Learning curve for NSE'],
    useCase: 'Jab aapko network ka overview chahiye - kaunse ports open hain, kaunsa service chal raha hai.',
    difficulty: 'Beginner',
  },
  'masscan': {
    name: 'Masscan',
    category: 'Recon',
    path: '/tool/masscan',
    desc: 'Fastest Internet port scanner',
    features: ['Ultra-fast scanning', 'Asynchronous scanning', 'Banner grabbing', 'Custom output formats'],
    pros: ['Extremely fast', 'Low resource usage', 'Simple syntax'],
    cons: ['Less accurate than Nmap', 'No OS detection', 'No script engine', 'Can overwhelm networks'],
    useCase: 'Jab aapko poora internet scan karna ho ya bahut bade networks pe speed chahiye.',
    difficulty: 'Intermediate',
  },
  'wireshark': {
    name: 'Wireshark',
    category: 'Network',
    path: '/tool/wireshark',
    desc: 'Network protocol analyzer',
    features: ['Deep packet inspection', 'Protocol dissection', 'Live capture', 'Display filters', 'Statistics'],
    pros: ['Most detailed analysis', 'GUI based', 'Supports 1000+ protocols', 'Free and open source'],
    cons: ['Can be overwhelming', 'Large capture files', 'Requires root/admin', 'Not for active attacks'],
    useCase: 'Jab aapko network traffic deeply analyze karna ho ya packets ka content dekhna ho.',
    difficulty: 'Intermediate',
  },
  'bettercap': {
    name: 'Bettercap',
    category: 'Network',
    path: '/tool/bettercap',
    desc: 'Network attack and monitoring framework',
    features: ['MITM attacks', 'ARP spoofing', 'DNS spoofing', 'WiFi deauth', 'Packet injection'],
    pros: ['All-in-one tool', 'Modern interface', 'Scriptable', 'Active development'],
    cons: ['Complex setup', 'Can be unstable', 'Requires good hardware'],
    useCase: 'Jab aapko network pe active attacks karne ho - MITM, spoofing, packet manipulation.',
    difficulty: 'Advanced',
  },
  'sqlmap': {
    name: 'SQLMap',
    category: 'Web',
    path: '/tool/sqlmap',
    desc: 'Automatic SQL injection tool',
    features: ['Auto SQL injection', 'Database enumeration', 'Data extraction', 'File access', 'OS shell'],
    pros: ['Fully automated', 'Supports all major DBs', 'Very reliable', 'Regular updates'],
    cons: ['Can be slow', 'Noisy', 'May damage data', 'Only for SQL injection'],
    useCase: 'Jab aapko SQL injection find aur exploit karna ho web applications me.',
    difficulty: 'Beginner',
  },
  'burpsuite': {
    name: 'Burp Suite',
    category: 'Web',
    path: '/tool/burpsuite',
    desc: 'Web application security testing platform',
    features: ['Proxy interceptor', 'Scanner', 'Intruder', 'Repeater', 'Decoder', 'Comparer'],
    pros: ['Complete web testing platform', 'Industry standard', 'Great UI', 'Extensible'],
    cons: ['Expensive (Pro version)', 'Java based (heavy)', 'Learning curve'],
    useCase: 'Jab aapko web applications thoroughly test karne ho - intercept, modify, scan, repeat.',
    difficulty: 'Intermediate',
  },
  'hydra': {
    name: 'Hydra',
    category: 'Passwords',
    path: '/tool/hydra',
    desc: 'Fast network login cracker',
    features: ['Brute-force attacks', 'Dictionary attacks', '50+ protocols', 'Parallel connections', 'Resume support'],
    pros: ['Fast', 'Many protocols', 'Simple syntax', 'Widely available'],
    cons: ['Noisy', 'Account lockout risk', 'No hash cracking'],
    useCase: 'Jab aapko login credentials brute-force karne ho SSH, FTP, HTTP jaise services pe.',
    difficulty: 'Beginner',
  },
  'hashcat': {
    name: 'Hashcat',
    category: 'Passwords',
    path: '/tool/hashcat',
    desc: 'Advanced password recovery utility',
    features: ['GPU acceleration', '300+ hash types', 'Rule-based attacks', 'Mask attacks', 'Combination attacks'],
    pros: ['Fastest hash cracker', 'GPU support', 'Very flexible', 'Active development'],
    cons: ['Needs good GPU', 'Complex syntax', 'No online attacks'],
    useCase: 'Jab aapke paas password hashes hain aur unhe crack karna ho offline.',
    difficulty: 'Intermediate',
  },
  'metasploit': {
    name: 'Metasploit',
    category: 'Exploitation',
    path: '/tool/metasploit-framework',
    desc: 'Penetration testing framework',
    features: ['Exploit modules', 'Payload generation', 'Post-exploitation', 'Auxiliary modules', 'Database'],
    pros: ['Most comprehensive framework', 'Huge exploit database', 'Well documented', 'Industry standard'],
    cons: ['Heavy resource usage', 'Complex for beginners', 'Signature detected by AV'],
    useCase: 'Jab aapko systems exploit karna ho ya post-exploitation activities karne ho.',
    difficulty: 'Intermediate',
  },
  'aircrack-ng': {
    name: 'Aircrack-ng',
    category: 'WiFi',
    path: '/tool/aircrack-ng',
    desc: 'WiFi network security auditing toolsuite',
    features: ['Monitor mode', 'Packet capture', 'WEP/WPA cracking', 'Deauthentication', 'Fake AP'],
    pros: ['Complete WiFi toolkit', 'Well established', 'Works on most adapters'],
    cons: ['Command line only', 'Complex workflow', 'Needs compatible adapter'],
    useCase: 'Jab aapko WiFi networks audit karne ho - handshake capture, password cracking.',
    difficulty: 'Intermediate',
  },
  'wifite': {
    name: 'Wifite',
    category: 'WiFi',
    path: '/tool/wifite',
    desc: 'Automated wireless attack tool',
    features: ['Auto target selection', 'WPA/WEP/WPS attacks', 'PMKID capture', 'Evil twin', 'Automated workflow'],
    pros: ['Fully automated', 'Easy to use', 'Multiple attack methods', 'Good for beginners'],
    cons: ['Less control', 'May miss targets', 'Not always reliable'],
    useCase: 'Jab aapko WiFi hacking automate karna ho ya beginners ke liye easy tool chahiye.',
    difficulty: 'Beginner',
  },
}

const comparisonPresets = [
  { label: 'Nmap vs Masscan', tools: ['nmap', 'masscan'], desc: 'Network scanners compare karein' },
  { label: 'Wireshark vs Bettercap', tools: ['wireshark', 'bettercap'], desc: 'Network analysis tools' },
  { label: 'SQLMap vs Burp Suite', tools: ['sqlmap', 'burpsuite'], desc: 'Web application testing tools' },
  { label: 'Hydra vs Hashcat', tools: ['hydra', 'hashcat'], desc: 'Password cracking tools' },
  { label: 'Aircrack-ng vs Wifite', tools: ['aircrack-ng', 'wifite'], desc: 'WiFi hacking tools' },
]

const difficultyColors = {
  'Beginner': 'text-neon-green bg-neon-green/10 border-neon-green/30',
  'Intermediate': 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/30',
  'Advanced': 'text-neon-red bg-neon-red/10 border-neon-red/30',
}

export default function ToolCompare() {
  const [selectedTools, setSelectedTools] = useState(['nmap', 'masscan'])
  const [selectorOpen, setSelectorOpen] = useState(null)

  const handleSelectTool = (slot, toolKey) => {
    const newTools = [...selectedTools]
    newTools[slot] = toolKey
    setSelectedTools(newTools)
    setSelectorOpen(null)
  }

  const loadPreset = (preset) => {
    setSelectedTools(preset.tools)
  }

  const tool1 = toolsData[selectedTools[0]]
  const tool2 = toolsData[selectedTools[1]]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="section-title">Tool Comparison</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Do tools ko side-by-side compare karein. Features, pros-cons, aur use cases dekhein.
        </p>
      </div>

      {/* Quick Presets */}
      <div className="mb-8">
        <h2 className="text-lg font-heading text-neon-cyan mb-4 text-center">Quick Compare</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {comparisonPresets.map((preset, i) => (
            <button
              key={i}
              onClick={() => loadPreset(preset)}
              className={`px-4 py-2 rounded-lg text-sm border transition-all ${
                selectedTools[0] === preset.tools[0] && selectedTools[1] === preset.tools[1]
                  ? 'bg-neon-green/20 text-neon-green border-neon-green/40'
                  : 'bg-dark-800 text-gray-400 border-dark-600 hover:border-neon-green/30 hover:text-neon-green'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tool Selectors */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[0, 1].map(slot => (
          <div key={slot} className="relative">
            <button
              onClick={() => setSelectorOpen(selectorOpen === slot ? null : slot)}
              className="w-full glass-card p-4 text-left flex items-center justify-between hover:border-neon-green/40 transition-all"
            >
              <div>
                <span className="text-xs text-gray-500">Tool {slot + 1}</span>
                <p className="text-white font-semibold">{toolsData[selectedTools[slot]].name}</p>
                <p className="text-gray-400 text-sm">{toolsData[selectedTools[slot]].category}</p>
              </div>
              <svg className={`w-5 h-5 text-gray-400 transition-transform ${selectorOpen === slot ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {selectorOpen === slot && (
              <div className="absolute z-20 w-full mt-2 bg-dark-800 border border-dark-600 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                {Object.entries(toolsData).map(([key, tool]) => (
                  <button
                    key={key}
                    onClick={() => handleSelectTool(slot, key)}
                    className={`w-full text-left px-4 py-2 hover:bg-neon-green/5 transition-colors flex items-center justify-between ${
                      selectedTools[slot] === key ? 'bg-neon-green/10 text-neon-green' : 'text-gray-300'
                    }`}
                  >
                    <span>{tool.name}</span>
                    <span className="text-xs text-gray-500">{tool.category}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Tool 1 */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-heading font-bold text-neon-green">{tool1.name}</h2>
              <p className="text-gray-400 text-sm">{tool1.desc}</p>
            </div>
            <span className={`px-2 py-0.5 text-xs rounded border ${difficultyColors[tool1.difficulty]}`}>
              {tool1.difficulty}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-neon-cyan mb-2">Features</h3>
              <ul className="space-y-1">
                {tool1.features.map((f, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-green-400 mb-2">Pros</h3>
              <ul className="space-y-1">
                {tool1.pros.map((p, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="text-green-400">+</span> {p}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-red-400 mb-2">Cons</h3>
              <ul className="space-y-1">
                {tool1.cons.map((c, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="text-red-400">-</span> {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-dark-600">
              <h3 className="text-sm font-semibold text-yellow-400 mb-1">Kab Use Karein</h3>
              <p className="text-gray-400 text-sm">{tool1.useCase}</p>
            </div>

            <Link
              to={tool1.path}
              className="inline-block mt-2 text-neon-green text-sm hover:underline"
            >
              Full tutorial padhein →
            </Link>
          </div>
        </div>

        {/* Tool 2 */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-heading font-bold text-neon-cyan">{tool2.name}</h2>
              <p className="text-gray-400 text-sm">{tool2.desc}</p>
            </div>
            <span className={`px-2 py-0.5 text-xs rounded border ${difficultyColors[tool2.difficulty]}`}>
              {tool2.difficulty}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-neon-cyan mb-2">Features</h3>
              <ul className="space-y-1">
                {tool2.features.map((f, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-green-400 mb-2">Pros</h3>
              <ul className="space-y-1">
                {tool2.pros.map((p, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="text-green-400">+</span> {p}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-red-400 mb-2">Cons</h3>
              <ul className="space-y-1">
                {tool2.cons.map((c, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="text-red-400">-</span> {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-dark-600">
              <h3 className="text-sm font-semibold text-yellow-400 mb-1">Kab Use Karein</h3>
              <p className="text-gray-400 text-sm">{tool2.useCase}</p>
            </div>

            <Link
              to={tool2.path}
              className="inline-block mt-2 text-neon-cyan text-sm hover:underline"
            >
              Full tutorial padhein →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-400 mb-4">Dono tools ke baare me detail me jaanna hai?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/tools" className="btn-outline px-6 py-3 rounded-lg text-neon-green border-neon-green/30 hover:bg-neon-green/10">
            Sab Tools Dekhein
          </Link>
          <Link to="/learning-paths" className="btn-primary px-6 py-3 rounded-lg text-dark-900">
            Learning Path Shuru Karein
          </Link>
        </div>
      </div>
    </div>
  )
}
