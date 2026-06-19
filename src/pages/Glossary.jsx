import { useState } from 'react'
import MetaTags from '../components/MetaTags'
import { Link } from 'react-router-dom'

const terms = [
  { term: 'असिमेट्रिक एन्क्रिप्शन', en: 'Asymmetric Encryption', category: 'क्रिप्टोग्राफी', desc: 'Do alag keys use hoti hain — ek public, ek private. Public se encrypt, private se decrypt. Jaise RSA, ECC.' },
  { term: 'बैकडोर', en: 'Backdoor', category: 'एक्सप्लॉइटेशन', desc: 'Malware ya compromised system mein hidden entry point. Attacker baad mein direct access kar sakta hai.' },
  { term: 'बैनर ग्रैबिंग', en: 'Banner Grabbing', category: 'रीकॉन', desc: 'Service ke banner se version info nikalna. Jaise FTP server version, web server type pata karna.' },
  { term: 'बॉटनेट', en: 'Botnet', category: 'मालवेयर', desc: 'Compromised devices ka network jo attacker control karta hai. DDoS attacks ke liye use hota hai.' },
  { term: 'बफर ओवरफ्लो', en: 'Buffer Overflow', category: 'एक्सप्लॉइटेशन', desc: 'Memory mein zyada data write karne se control hijack karna. Purana but dangerous attack.' },
  { term: 'बर्गलरी', en: 'Brute Force', category: 'पासवर्ड', desc: 'Saare possible combinations try karke password todna. Hydra, Medusa jaise tools use hote hain.' },
  { term: 'सीएनएस', en: 'C2 (Command & Control)', category: 'मालवेयर', desc: 'Attacker ka server jo compromised systems ko control karta hai. Commands bhejta hai, data collect karta hai.' },
  { term: 'सीएसआरएफ', en: 'CSRF', category: 'वेब', desc: 'Cross-Site Request Forgery — user ko fake request bhejne ke liye force karna. Tab hijacking ya action perform karwana.' },
  { term: 'सीवीई', en: 'CVE', category: 'जनरल', desc: 'Common Vulnerabilities and Exposures — known vulnerabilities ka unique identifier. CVE-2024-1234 format.' },
  { term: 'सीवीएसएस', en: 'CVSS', category: 'जनरल', desc: 'Common Vulnerability Scoring System — vulnerability severity measure karta hai. 0-10 scale.' },
  { term: 'डीडीओएस', en: 'DDoS', category: 'नेटवर्क', desc: 'Distributed Denial of Service — multiple systems se target ko traffic flood karke crash karna.' },
  { term: 'डीएनएस स्पूफिंग', en: 'DNS Spoofing', category: 'नेटवर्क', desc: 'Fake DNS records bana ke user ko fake website pe redirect karna. Bettercap jaise tools use hote hain.' },
  { term: 'ड्रॉपर', en: 'Dropper', category: 'मालवेयर', desc: 'Small program jo malware download karta hai. Antivirus ko bypass karne ke liye use hota hai.' },
  { term: 'ईथिकल हैकिंग', en: 'Ethical Hacking', category: 'जनरल', desc: 'Authorized permission se systems test karke vulnerabilities find karna. Legal hacking.' },
  { term: 'एक्सफिल्ट्रेशन', en: 'Exfiltration', category: 'पोस्ट-एक्सप्लॉइट', desc: 'Compromised system se sensitive data churakar bhejna. Data theft ka final step.' },
  { term: 'एक्सप्लॉइट', en: 'Exploit', category: 'जनरल', desc: 'Code ya technique jo vulnerability ko use karke system ko compromise kare.' },
  { term: 'फिशिंग', en: 'Phishing', category: 'सोशल इंजीनियरिंग', desc: 'Fake email ya message bhejke sensitive information nikalna. Sabse common attack.' },
  { term: 'फुटप्रिंटिंग', en: 'Footprinting', category: 'रीकॉन', desc: 'Target ke baare mein maximum information collect karna. Passive recon ka part.' },
  { term: 'फोरेंसिक्स', en: 'Forensics', category: 'जनरल', desc: 'Cyber crime investigate karna. Evidence collect, preserve, aur analyze karna.' },
  { term: 'हैश', en: 'Hash', category: 'क्रिप्टोग्राफी', desc: 'One-way mathematical function jo data ko fixed-length string mein convert kare. MD5, SHA-256.' },
  { term: 'आईडीएस/आईपीएस', en: 'IDS/IPS', category: 'डिफेंस', desc: 'Intrusion Detection/Prevention System — network traffic monitor karta hai aur suspicious activity detect/block karta hai.' },
  { term: 'की-लॉगर', en: 'Keylogger', category: 'मालवेयर', desc: 'Har key press record karta hai. Passwords, credit cards sab capture ho jate hain.' },
  { term: 'मैन-इन-द-मिडल', en: 'MITM', category: 'नेटवर्क', desc: 'Attacker do parties ke beech communication intercept karta hai. ARP spoofing, DNS spoofing use karta hai.' },
  { term: 'मीटरप्रेटर', en: 'Meterpreter', category: 'एक्सप्लॉइटेशन', desc: 'Metasploit ka advanced payload. Dynamic commands, privilege escalation, screenshot sab kar sakta hai.' },
  { term: 'नेटवर्क मैपिंग', en: 'Network Mapping', category: 'रीकॉन', desc: 'Network topology discover karna. Kaunse devices connected hain, ports open hain.' },
  { term: 'ओएस आईएनटी', en: 'OSINT', category: 'रीकॉन', desc: 'Open Source Intelligence — publicly available info collect karna. Social media, websites, public records.' },
  { term: 'पेलोड', en: 'Payload', category: 'एक्सप्लॉइटेशन', desc: 'Malicious code jo exploit ke baad run hota hai. Reverse shell, bind shell, meterpreter.' },
  { term: 'पेनिट्रेशन टेस्टिंग', en: 'Penetration Testing', category: 'जनरल', desc: 'Authorized simulated attack jo system ki security test kare.' },
  { term: 'पोस्ट-एक्सप्लॉइटेशन', en: 'Post-Exploitation', category: 'एक्सप्लॉइटेशन', desc: 'System compromise karne ke baad ki activities. Persistence, lateral movement, data collection.' },
  { term: 'प्रिविलेज एस्केलेशन', en: 'Privilege Escalation', category: 'एक्सप्लॉइटेशन', desc: 'Low privilege se high privilege (root/admin) mein jana. Linux ya Windows pe.' },
  { term: 'प्रॉक्सी', en: 'Proxy', category: 'नेटवर्क', desc: 'Intermediate server jo aapki real IP hide kare. Burp Suite proxy intercept modification ke liye.' },
  { term: 'रैनसमवेयर', en: 'Ransomware', category: 'मालवेयर', desc: 'Files encrypt karke ransom demand karta hai. WannaCry, LockBit — sabse dangerous malware.' },
  { term: 'रीकॉन', en: 'Reconnaissance', category: 'रीकॉन', desc: 'Information gathering phase. Target ke baare mein maximum data collect karna.' },
  { term: 'रिवर्स शेल', en: 'Reverse Shell', category: 'एक्सप्लॉइटेशन', desc: 'Target system se attacker ke system pe connection initiate hota hai. Firewall bypass ke liye useful.' },
  { term: 'रूटकिट', en: 'Rootkit', category: 'मालवेयर', desc: 'Os mein deep hide hota hai. Detection avoid karta hai. Kernel level access.' },
  { term: 'सोशल इंजीनियरिंग', en: 'Social Engineering', category: 'सोशल इंजीनियरिंग', desc: 'Psychological manipulation se sensitive info nikalna. Technology nahi, insaan ko target karna.' },
  { term: 'स्पूफिंग', en: 'Spoofing', category: 'नेटवर्क', desc: 'Fake identity use karke system ko fool karna. ARP spoofing, IP spoofing, MAC spoofing.' },
  { term: 'एसक्यूएल इंजेक्शन', en: 'SQL Injection', category: 'वेब', desc: 'Web application ke database mein malicious SQL query inject karna. Data leak, delete, modify.' },
  { term: 'एसएसएल स्ट्रिपिंग', en: 'SSL Stripping', category: 'नेटवर्क', desc: 'HTTPS connection ko HTTP mein downgrade karna. SSLstrip tool use karta hai.' },
  { term: 'थ्रेट इंटेलिजेंस', en: 'Threat Intelligence', category: 'डिफेंस', desc: 'Cyber threats ke baare mein data collect karke proactive defense lagna.' },
  { term: 'ट्रोजन', en: 'Trojan', category: 'मालवेयर', desc: 'Legitimate software ka disguise mein malware. Backdoor access deta hai attacker ko.' },
  { term: 'वल्नरेबिलिटी', en: 'Vulnerability', category: 'जनरल', desc: 'System ya application mein weakness jo exploit ki ja sakti hai.' },
  { term: 'वॉक्स', en: 'VoIP', category: 'नेटवर्क', desc: 'Voice over IP — internet ke through calling. Vishing attacks VoIP pe hote hain.' },
  { term: 'वीपीएन', en: 'VPN', category: 'नेटवर्क', desc: 'Virtual Private Network — encrypted tunnel between device and server. Privacy aur security ke liye.' },
  { term: 'डब्ल्यूपीए क्रैकिंग', en: 'WPA Cracking', category: 'वाईफाई', desc: 'WiFi Protected Access password todna. Handshake capture karke dictionary ya brute force.' },
  { term: 'एक्सएसएस', en: 'XSS', category: 'वेब', desc: 'Cross-Site Scripting — malicious script inject karna. Stored, reflected, DOM-based types.' },
  { term: 'जीरो-डे', en: 'Zero-Day', category: 'जनरल', desc: 'Nayi vulnerability jiska patch available nahi hai. Sabse dangerous — no defense available.' },
  { term: 'डार्क वेब', en: 'Dark Web', category: 'जनरल', desc: 'Tor browser se accessible hidden websites. Illegal activities ke liye bhi use hota hai.' },
  { term: 'एंडपॉइंट सिक्योरिटी', en: 'Endpoint Security', category: 'डिफेंस', desc: 'Devices (laptop, mobile) ko protect karna. Antivirus, EDR, firewall.' },
  { term: 'फ़ायरवॉल', en: 'Firewall', category: 'डिफेंस', desc: 'Network traffic filter karta hai. Rules ke hisaab se allowed/blocked traffic.' },
  { term: 'जीपीजी', en: 'GPG', category: 'क्रिप्टोग्राफी', desc: 'GNU Privacy Guard — encryption aur signing ke liye. PGP ka open source version.' },
  { term: 'हनीपॉट', en: 'Honeypot', category: 'डिफेंस', desc: 'Fake system jo attackers ko attract kare. Attack patterns study karne ke liye.' },
  { term: 'आईपी रिपुटेशन', en: 'IP Reputation', category: 'डिफेंस', desc: 'IP address ka trust score. Known malicious IPs block kiye jate hain.' },
  { term: 'जावास्क्रिप्ट डिओब्फस्केशन', en: 'JS Deobfuscation', category: 'मालवेयर', desc: 'Obfuscated JavaScript code ko readable banana. Malware analysis mein use hota hai.' },
  { term: 'केर्बेरोस', en: 'Kerberos', category: 'नेटवर्क', desc: 'Network authentication protocol. Windows Active Directory use karta hai. Silver/golden ticket attacks.' },
  { term: 'लैटरल मूवमेंट', en: 'Lateral Movement', category: 'पोस्ट-एक्सप्लॉइट', desc: 'Network mein ek system se doosre system mein move karna. Post-exploitation ka part.' },
  { term: 'मैक फ्लडिंग', en: 'MAC Flooding', category: 'नेटवर्क', desc: 'Switch ki CAM table overload karke traffic sniff karna. MACOF tool use hota hai.' },
  { term: 'एनएलएम हैश', en: 'NTLM Hash', category: 'पासवर्ड', desc: 'Windows authentication hash. Mimikatz se dump karke crack kiya ja sakta hai.' },
  { term: 'ओएसीसीपी', en: 'OSCP', category: 'सर्टिफिकेशन', desc: 'Offensive Security Certified Professional — 24-hour practical exam. Most respected pentesting cert.' },
  { term: 'पैकेट स्निफिंग', en: 'Packet Sniffing', category: 'नेटवर्क', desc: 'Network traffic capture karke analyze karna. Wireshark, tcpdump use hote hain.' },
  { term: 'क्वांटम कंप्यूटिंग', en: 'Quantum Computing', category: 'जनरल', desc: 'Advanced computing jo current encryption tod sakti hai. Future threat for cryptography.' },
  { term: 'रेड टीम', en: 'Red Team', category: 'जनरल', desc: 'Ethical hackers jo organization ke defense test karein. Real attacks simulate karte hain.' },
  { term: 'एसडीएलसी', en: 'SDLC', category: 'डिफेंस', desc: 'Secure Development Lifecycle — development ke har phase mein security integrate karna.' },
  { term: 'टाइम-बेस्ड ब्लाइंड', en: 'Time-Based Blind', category: 'वेब', desc: 'SQL injection type jisme response time se data guess karte hain. SLEEP() function use karta hai.' },
  { term: 'यूएसी बाईपास', en: 'UAC Bypass', category: 'एक्सप्लॉइटेशन', desc: 'Windows User Account Control bypass karke admin privileges lena.' },
  { term: 'वीपीएन टनल', en: 'VPN Tunnel', category: 'नेटवर्क', desc: 'Encrypted connection between two networks. OpenVPN, WireGuard protocols.' },
  { term: 'वेब शेल', en: 'Web Shell', category: 'एक्सप्लॉइटेशन', desc: 'PHP/ASP script jo web server pe upload karke remote access de. Weevely, b374k.' },
  { term: 'एक्सएमएल एक्सटर्नल एंटिटी', en: 'XXE', category: 'वेब', desc: 'XML External Entity — XML parser vulnerability jo file read, SSRF, ya DoS cause kare.' },
  { term: 'वाईएआरए नियम', en: 'YARA Rules', category: 'फोरेंसिक्स', desc: 'Malware detection ke liye pattern-based rules. File signatures identify karte hain.' },
  { term: 'जोंबी', en: 'Zombie', category: 'मालवेयर', desc: 'Compromised system jo attacker control karta hai. Botnet ka part.' },
]

const categories = [...new Set(terms.map(t => t.category))]

export default function Glossary() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('सभी')

  const filtered = terms.filter(t => {
    const matchSearch = !search || t.term.toLowerCase().includes(search.toLowerCase()) || t.en.toLowerCase().includes(search.toLowerCase())
    const matchCat = selectedCategory === 'सभी' || t.category === selectedCategory
    return matchSearch && matchCat
  })

  const categoryColors = {
    'जनरल': 'bg-neon-green/10 text-neon-green border-neon-green/30',
    'रीकॉन': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    'नेटवर्क': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    'वेब': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    'पासवर्ड': 'bg-red-500/10 text-red-400 border-red-500/30',
    'एक्सप्लॉइटेशन': 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    'मालवेयर': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    'सोशल इंजीनियरिंग': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    'क्रिप्टोग्राफी': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    'डिफेंस': 'bg-green-500/10 text-green-400 border-green-500/30',
    'सर्टिफिकेशन': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    'पोस्ट-एक्सप्लॉइट': 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    'वाईफाई': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    'फोरेंसिक्स': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <MetaTags
        title="Cybersecurity Glossary"
        description="Cybersecurity terms glossary Hindi mein. Ethical hacking, networking, aur security terms ka complete dictionary."
        keywords="cybersecurity glossary, hacking terms, security dictionary, hindi"
        url="https://nethunter-learn.vercel.app/glossary"
      />
      <div className="text-center mb-10">
        <h1 className="section-title">Cybersecurity Glossary</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          60+ cybersecurity terms Hindi aur English mein. Meanings aur explanations ke saath.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Term search karein..."
          className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-neon-green/50 focus:outline-none"
        />
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setSelectedCategory('सभी')} className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${selectedCategory === 'सभी' ? 'bg-neon-green/20 text-neon-green border-neon-green/40' : 'bg-dark-800 text-gray-400 border-dark-600 hover:border-neon-green/30'}`}>सभी</button>
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${selectedCategory === cat ? 'bg-neon-green/20 text-neon-green border-neon-green/40' : 'bg-dark-800 text-gray-400 border-dark-600 hover:border-neon-green/30'}`}>{cat}</button>
          ))}
        </div>
        <p className="text-gray-500 text-sm">{filtered.length} terms mile</p>
      </div>

      <div className="space-y-3">
        {filtered.map(t => (
          <div key={t.en} className="glass-card p-4">
            <div className="flex items-start justify-between gap-3 mb-1">
              <h3 className="text-white font-semibold">{t.term}</h3>
              <span className={`px-2 py-0.5 text-xs rounded border shrink-0 ${categoryColors[t.category] || ''}`}>{t.category}</span>
            </div>
            <p className="text-neon-cyan text-xs font-mono mb-2">{t.en}</p>
            <p className="text-gray-400 text-sm">{t.desc}</p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Koi term nahi mila "{search}" ke liye</p>
        </div>
      )}
    </div>
  )
}
