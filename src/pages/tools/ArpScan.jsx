import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function ArpScan() {
  return (
    <TutorialLayout
      title="arp-scan"
      subtitle="ARP protocol से local network scan — fast, stealthy, vendor identification"
      icon="📡"
      prev={{ to: '/tool/dirb', label: 'dirb' }}
      next={{ to: '/tools', label: 'All Tools' }}
    >
      <h2>What is arp-scan?</h2>
      <p>
        arp-scan एक powerful network discovery tool है जो ARP (Address Resolution Protocol) का उपयोग करके local network के सभी connected devices को detect करता है। यह tool network administrators, penetration testers, और security researchers के लिए बनाया गया है जिन्हें network पर मौजूद सभी devices की जानकारी चाहिए — उनके IP addresses, MAC addresses, और manufacturers के बारे में।
      </p>
      <p>
        arp-scan की सबसे बड़ी खासियत यह है कि यह Layer 2 (Data Link Layer) पर काम करता है। इसका मतलब यह है कि firewalls और packet filters जो Layer 3/4 पर काम करते हैं, वो arp-scan को नहीं रोक पाते। अगर कोई device ping का reply नहीं देता (ICMP blocked), तब भी arp-scan उसे detect कर सकता है — बशर्ते वो device उसी local network पर हो।
      </p>
      <p>
        यह tool C language में लिखा गया है और बहुत fast है — एक /24 network (256 hosts) को 2 सेकंड से भी कम समय में scan कर सकता है। arp-scan built-in MAC vendor database के साथ आता है जो OUI (Organizationally Unique Identifier) से manufacturer का नाम बताता है। यह feature IoT device identification में बहुत काम आता है।
      </p>
      <p>
        arp-scan Roy Hills ने बनाया है और यह open source है (GPLv3 license)। यह Linux, macOS, और BSD systems पर चलता है। Kali Linux में यह pre-installed आता है। यह tool network auditing, device inventory, rogue device detection, और penetration testing में extensively इस्तेमाल होता है।
      </p>
      <p>
        arp-scan का एक और advantage यह है कि यह passive mode भी support करता है — जिसमें यह कोई packet नहीं भेजता, बल्कि सिर्फ network पर होने वाले ARP traffic को monitor करता है। यह completely stealthy है और किसी भी IDS/IPS को trigger नहीं करता।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> arp-scan केवल अपने नेटवर्क या अधिकृत परीक्षण के लिए उपयोग करें। बिना अनुमति के नेटवर्क स्कैनिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क स्कैनिंग अपराध हो सकता है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of arp-scan</h2>
      <p>
        arp-scan को Roy Hills ने 2005 में बनाना शुरू किया था। Roy एक network security consultant थे जिन्हें network discovery के लिए एक reliable और fast tool की ज़रूरत थी। उस समय existing tools या तो बहुत slow थे या फिर बहुत limited features थे। Roy ने C language में arp-scan लिखा जो ARP protocol का पूरा फायदा उठाता था।
      </p>
      <p>
        2006 में arp-scan का पहला stable release आया। तब से इसमें कई improvements हुए — MAC vendor database, JSON output, passive mode, और performance optimizations। 2010 में इसे Kali Linux (उस समय BackTrack) में शामिल किया गया। आज यह network discovery के लिए standard tool माना जाता है।
      </p>
      <p>
        arp-scan का development actively जारी है। GitHub पर इसके regular updates आते हैं और MAC vendor database भी regularly update होती है। यह tool OUI database IEEE से automatically download करता है ताकि latest vendor information मिलती रहे।
      </p>

      <h2>How arp-scan Works?</h2>
      <p>
        arp-scan ARP protocol का उपयोग करके network discovery करता है। ARP (Address Resolution Protocol) TCP/IP network का fundamental protocol है जो IP addresses को MAC addresses में map करता है। यह Layer 2 (Data Link Layer) पर काम करता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">ARP Request Broadcast:</strong> arp-scan हर IP address के लिए एक ARP Request packet broadcast करता है — "Who has 192.168.1.1? Tell 192.168.1.100"</li>
        <li><strong className="text-white">ARP Reply Unicast:</strong> जिस device का वो IP है, वो ARP Reply भेजता है — "192.168.1.1 is at aa:bb:cc:dd:ee:ff"</li>
        <li><strong className="text-white">Result Collection:</strong> arp-scan सभी replies collect करता है और IP-MAC pairs बनाता है</li>
        <li><strong className="text-white">Vendor Identification:</strong> MAC address के first 3 bytes (OUI) से manufacturer identify करता है</li>
        <li><strong className="text-white">Layer 2 Advantage:</strong> ARP packets firewalls और Layer 3/4 filters को bypass करते हैं</li>
        <li><strong className="text-white">Broadcast Nature:</strong> ARP broadcast होता है — इसलिए switches भी इसे forward करते हैं</li>
        <li><strong className="text-white">No IP Stack Dependency:</strong> ICMP (ping) blocked हो तो भी ARP काम करता है</li>
        <li><strong className="text-white">Speed:</strong> ARP packets बहुत छोटे होते हैं — इसलिए scanning बहुत fast है</li>
      </ul>

      <h2>ARP Protocol Deep Dive</h2>
      <p>
        ARP protocol को समझना ज़रूरी है तभी arp-scan की power समझ आएगी:
      </p>
      <CodeBlock
        title="ARP Protocol Explained"
        code={`# ARP कैसे काम करता है:

# 1. Device A (192.168.1.100) को Device B (192.168.1.1) से बात करनी है
# 2. Device A को Device B का MAC address नहीं पता
# 3. Device A ARP Request broadcast करता है:
#    "Who has 192.168.1.1? Tell 192.168.1.100"
# 4. Network पर सभी devices यह packet receive करते हैं
# 5. सिर्फ Device B (192.168.1.1) reply करता है:
#    "192.168.1.1 is at 00:11:22:33:44:55"
# 6. Device A अब Device B का MAC address जानता है
# 7. यह information ARP cache में store होती है (timeout के साथ)

# ARP Packet Structure:
# - Hardware Type: Ethernet (0x0001)
# - Protocol Type: IPv4 (0x0800)
# - Hardware Size: 6 (MAC address length)
# - Protocol Size: 4 (IPv4 address length)
# - Operation: 1=Request, 2=Reply
# - Sender MAC: भेजने वाले का MAC
# - Sender IP: भेजने वाले का IP
# - Target MAC: 00:00:00:00:00:00 (request में)
# - Target IP: जिसका MAC चाहिए`}
      />

      <h2>Installation</h2>
      <p>
        arp-scan ज़्यादातर Linux distributions में repository में available है। Kali Linux में यह pre-installed आता है।
      </p>
      <CodeBlock
        title="arp-scan Installation"
        code={`# Kali Linux (pre-installed):
sudo apt update
sudo apt install arp-scan

# Ubuntu/Debian:
sudo apt update
sudo apt install arp-scan

# Fedora/RHEL:
sudo dnf install arp-scan

# Arch Linux:
sudo pacman -S arp-scan

# macOS (Homebrew):
brew install arp-scan

# From source (latest version):
git clone https://github.com/royhills/arp-scan.git
cd arp-scan
autoreconf --install
./configure
make
sudo make install

# Version check:
arp-scan --version

# Help:
arp-scan --help

# MAC vendor database update:
sudo arp-scan --ouifile=/usr/share/arp-scan/ieee-oui.txt --localnet`}
      />

      <h2>Basic Usage</h2>
      <p>
        arp-scan का basic usage बहुत simple है — बस interface और target range specify करो।
      </p>
      <CodeBlock
        title="Basic arp-scan Commands"
        code={`# Local network auto-detect और scan:
sudo arp-scan -l

# Specific network range scan:
sudo arp-scan 192.168.1.0/24

# Specific interface use करें:
sudo arp-scan -I wlan0 -l

# Interface + Range dono specify:
sudo arp-scan -I eth0 192.168.1.0/24

# CIDR notation (large network):
sudo arp-scan 10.0.0.0/16

# Specific IPs (comma separated):
sudo arp-scan 192.168.1.1,192.168.1.2,192.168.1.3

# IP Range (dash notation):
sudo arp-scan 192.168.1.1-192.168.1.50

# Multiple ranges:
sudo arp-scan 192.168.1.0/24 192.168.2.0/24

# Verbose output:
sudo arp-scan -v 192.168.1.0/24

# With vendor names:
sudo arp-scan -N 192.168.1.0/24`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Flag</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-l</td><td className="py-2 px-3">Local interface का network scan करें</td><td className="py-2 px-3 font-mono text-xs">sudo arp-scan -l</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-I interface</td><td className="py-2 px-3">Specific network interface specify करें</td><td className="py-2 px-3 font-mono text-xs">sudo arp-scan -I wlan0 -l</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-N</td><td className="py-2 px-3">MAC vendor name resolve करें</td><td className="py-2 px-3 font-mono text-xs">sudo arp-scan -N -l</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">Verbose output — detail में दिखाएं</td><td className="py-2 px-3 font-mono text-xs">sudo arp-scan -v 192.168.1.0/24</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-g</td><td className="py-2 px-3">JSON format में output</td><td className="py-2 px-3 font-mono text-xs">sudo arp-scan -g 192.168.1.0/24</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-x</td><td className="py-2 px-3">XML format में output</td><td className="py-2 px-3 font-mono text-xs">sudo arp-scan -x 192.168.1.0/24</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--retry N</td><td className="py-2 px-3">Kitni baar retry करें (default: 2)</td><td className="py-2 px-3 font-mono text-xs">sudo arp-scan --retry=5 -l</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--timeout N</td><td className="py-2 px-3">Response wait time (milliseconds)</td><td className="py-2 px-3 font-mono text-xs">sudo arp-scan --timeout=2000 -l</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--interval N</td><td className="py-2 px-3">Packets ke बीच delay</td><td className="py-2 px-3 font-mono text-xs">sudo arp-scan --interval=100ms -l</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-b N</td><td className="py-2 px-3">Bandwidth limit (bits/sec)</td><td className="py-2 px-3 font-mono text-xs">sudo arp-scan -b 1000000 -l</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f</td><td className="py-2 px-3">Fast mode — कम packets भेजें</td><td className="py-2 px-3 font-mono text-xs">sudo arp-scan -f 192.168.1.0/24</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-q</td><td className="py-2 px-3">Quiet mode — banner suppress</td><td className="py-2 px-3 font-mono text-xs">sudo arp-scan -q -l</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e</td><td className="py-2 px-3">Don't display empty results</td><td className="py-2 px-3 font-mono text-xs">sudo arp-scan -e 192.168.1.0/24</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--plain</td><td className="py-2 px-3">Output में सिर्फ host information</td><td className="py-2 px-3 font-mono text-xs">sudo arp-scan --plain -l</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--write FILE</td><td className="py-2 px-3">Output file में save करें</td><td className="py-2 px-3 font-mono text-xs">sudo arp-scan --write=results.txt -l</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Output Interpretation</h2>
      <p>
        arp-scan का output समझना ज़रूरी है — हर line में important information होती है।
      </p>
      <CodeBlock
        title="Sample Output Analysis"
        code={`# arp-scan output:
# 192.168.1.1     00:11:22:33:44:55     TP-Link Technologies Co., Ltd.
# 192.168.1.100   aa:bb:cc:11:22:33     Samsung Electronics Co., Ltd.
# 192.168.1.101   dd:ee:ff:44:55:66     Apple, Inc.
# 192.168.1.102   11:22:33:44:55:66     Xiaomi Communications Co Ltd
# 192.168.1.103   99:88:77:66:55:44     (Unknown vendor)

# हर line का मतलब:
# Column 1: IP Address — device का network address
# Column 2: MAC Address — device का hardware address (unique)
# Column 3: Vendor Name — manufacturer का नाम (OUI database से)

# Bottom statistics:
# 4 packets received by filter, 0 dropped by kernel
# Ending arp-scan: 256 hosts scanned in 1.458 seconds (175.58 hosts/sec)
# ↑ 256 IPs scan हुईं, 1.458 seconds लगे, 175 hosts/sec speed

# Multiple responses (one IP, multiple MACs):
# 192.168.1.100   aa:bb:cc:11:22:33     Device1
# 192.168.1.100   dd:ee:ff:44:55:66     Device2
# ↑ यह duplicate IP conflict दिखाता है — दो devices same IP use कर रहे हैं`}
      />

      <h2>Local Network Scan</h2>
      <p>
        arp-scan का primary use case local network scanning है। यह same subnet पर मौजूद सभी active devices को detect करता है।
      </p>
      <CodeBlock
        title="Local Network Scanning"
        code={`# Auto-detect local network:
sudo arp-scan --localnet
# यह automatically आपका local network range detect करता है

# Specific interface से scan:
sudo arp-scan -I eth0 -l
# eth0 interface का network scan करता है

# WiFi interface:
sudo arp-scan -I wlan0 -l

# All interfaces:
for iface in $(ip -o link show | awk -F': ' '{print $2}' | grep -v lo); do
    echo "[*] Scanning interface: $iface"
    sudo arp-scan -I $iface -l
    echo ""
done

# Fast local scan:
sudo arp-scan -f -l

# Local scan with vendor info:
sudo arp-scan -N -l

# Local scan JSON output:
sudo arp-scan -g -l > local_devices.json`}
      />

      <h2>Remote Network Scan</h2>
      <p>
        ARP protocol सिर्फ local network (same broadcast domain) पर काम करता है। Remote networks scan करने के लिए अलग approach चाहिए।
      </p>
      <CodeBlock
        title="Remote Network Considerations"
        code={`# ARP सिर्फ local network पर काम करता है:
# - Same subnet (broadcast domain) में होना ज़रूरी है
# - Router ARP requests forward नहीं करते
# - VLAN boundaries ARP packets block करते हैं

# Remote network scan के alternatives:
# 1. Nmap (ICMP + TCP):
nmap -sn 10.0.0.0/24

# 2. Masscan (SYN scan):
masscan 10.0.0.0/24 -p80 --rate=1000

# 3. VPN से connect करके ARP scan:
# VPN connect करो → फिर arp-scan चलाओ
# अब आप remote network के broadcast domain में हो

# 4. SSH tunnel:
ssh -D 1080 user@remote_host
# फिर proxychains से scan

# Multiple subnets scan:
for subnet in 192.168.1 192.168.2 192.168.3; do
    echo "[*] Scanning $subnet.0/24..."
    sudo arp-scan $subnet.0/24
done`}
      />

      <h2>MAC Vendor Identification</h2>
      <p>
        arp-scan की vendor identification feature बहुत useful है — यह MAC address के first 3 bytes (OUI) से manufacturer का नाम बताता है।
      </p>
      <CodeBlock
        title="Vendor Identification"
        code={`# Vendor names के साथ scan:
sudo arp-scan -N -l

# Common OUI prefixes:
# 00:50:56 — VMware
# 08:00:27 — VirtualBox
# 00:0C:29 — VMware ESXi
# B8:27:EB — Raspberry Pi
# DC:A6:32 — Raspberry Pi (newer)
# 00:1A:11 — Google
# F0:18:98 — Apple
# 3C:22:FB — Apple
# 00:15:5D — Microsoft (Hyper-V)
# 52:54:00 — KVM/QEMU

# Vendor database update:
sudo wget -O /usr/share/arp-scan/ieee-oui.txt https://standards-oui.ieee.org/oui/oui.txt

# Custom vendor database:
sudo arp-scan --ouifile=/path/to/custom_oui.txt -l

# Filter specific vendors:
sudo arp-scan -N -l | grep -i "apple"
sudo arp-scan -N -l | grep -i "samsung"
sudo arp-scan -N -l | grep -i "vmware"

# IoT device identification:
sudo arp-scan -N -l | grep -iE "hikvision|dahua|tuya|sonoff|shelly|xiaomi"`}
      />

      <h2>Interface Selection</h2>
      <p>
        Multi-interface systems पर सही interface select करना ज़रूरी है।
      </p>
      <CodeBlock
        title="Interface Management"
        code={`# सभी interfaces list करें:
ip link show
# ya
ifconfig -a

# Specific interface:
sudo arp-scan -I eth0 -l        # Ethernet
sudo arp-scan -I wlan0 -l       # WiFi
sudo arp-scan -I tun0 -l        # VPN tunnel
sudo arp-scan -I br0 -l         # Bridge

# Virtual interfaces:
sudo arp-scan -I docker0 -l     # Docker network
sudo arp-scan -I virbr0 -l      # KVM/QEMU bridge
sudo arp-scan -I vboxnet0 -l    # VirtualBox

# Auto-detect (default):
sudo arp-scan -l
# यह default interface (route table से) use करता है

# Multiple interfaces:
for iface in eth0 wlan0; do
    echo "[*] Interface: $iface"
    sudo arp-scan -I $iface -l
done`}
      />

      <h2>VLAN Scanning</h2>
      <p>
        VLAN environments में ARP scanning के limitations और techniques:
      </p>
      <CodeBlock
        title="VLAN Considerations"
        code={`# VLAN boundaries ARP packets block करते हैं:
# - हर VLAN अलग broadcast domain है
# - एक VLAN से दूसरे VLAN के devices ARP से नहीं दिखेंगे
# - Router/switch VLAN tagging handle करता है

# VLAN tagged interface बनाओ:
sudo ip link add link eth0 name eth0.100 type vlan id 100
sudo ip link set dev eth0.100 up
sudo arp-scan -I eth0.100 -l

# Multiple VLANs scan:
for vlan in 10 20 30 100; do
    sudo ip link add link eth0 name eth0.$vlan type vlan id $vlan
    sudo ip link set dev eth0.$vlan up
    echo "[*] VLAN $vlan:"
    sudo arp-scan -I eth0.$vlan -l
    sudo ip link delete eth0.$vlan
done

# Alternative: Nmap से VLAN scan:
nmap -sn 192.168.10.0/24    # VLAN 10
nmap -sn 192.168.20.0/24    # VLAN 20`}
      />

      <h2>Output Formats</h2>
      <p>
        arp-scan multiple output formats support करता है — scripting और automation के लिए।
      </p>
      <CodeBlock
        title="Output Format Options"
        code={`# Default text output:
sudo arp-scan -l
# 192.168.1.1   00:11:22:33:44:55   TP-Link Technologies

# JSON output:
sudo arp-scan -g 192.168.1.0/24 > results.json
# Machine-readable format — Python/Node.js में parse कर सकते हो

# XML output:
sudo arp-scan -x 192.168.1.0/24 > results.xml
# Nmap-compatible format

# Plain output (सिर्फ host info, no banner):
sudo arp-scan --plain 192.168.1.0/24

# File output:
sudo arp-scan --write=scan_results.txt 192.168.1.0/24

# Grepable output (pipe-friendly):
sudo arp-scan -l -N | awk '{print $1","$2","$3}'

# CSV format:
sudo arp-scan -l -N | awk 'BEGIN{print "IP,MAC,Vendor"} {print $1","$2","$3}'

# JSON parse करें (Python):
# sudo arp-scan -g 192.168.1.0/24 | python3 -c "
# import json, sys
# data = json.load(sys.stdin)
# for host in data['hosts']:
#     print(f'{host[\"ip\"]} - {host[\"mac\"]} - {host.get(\"vendor\",\"Unknown\")}')
# "`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Large networks या constrained environments में performance tuning ज़रूरी है।
      </p>
      <CodeBlock
        title="Performance Optimization"
        code={`# Fast mode (कम packets, less accurate):
sudo arp-scan -f 192.168.1.0/24

# Bandwidth limit (network flooding रोकें):
sudo arp-scan -b 1000000 192.168.1.0/24    # 1 Mbps limit
sudo arp-scan -b 500000 192.168.1.0/24     # 500 Kbps limit

# Interval control (packets ke बीच delay):
sudo arp-scan --interval=100ms 192.168.1.0/24   # 100ms delay
sudo arp-scan --interval=1s 192.168.1.0/24      # 1 second delay

# Retry count (missed devices के लिए):
sudo arp-scan --retry=5 192.168.1.0/24
# Default: 2 retries — unreliable networks पर बढ़ाओ

# Timeout (response wait time):
sudo arp-scan --timeout=2000 192.168.1.0/24  # 2 seconds

# Large network scan (/16 = 65536 hosts):
sudo arp-scan -f 10.0.0.0/16
# Fast mode + bandwidth limit ज़रूरी है

# Parallel scans (multiple subnets):
for subnet in 192.168.{1..10}; do
    sudo arp-scan -f $subnet.0/24 &
done
wait`}
      />

      <h2>Passive ARP Monitoring</h2>
      <p>
        Passive mode में arp-scan कोई packet नहीं भेजता — सिर्फ network पर होने वाले ARP traffic को monitor करता है। यह completely stealthy है।
      </p>
      <CodeBlock
        title="Passive Mode"
        code={`# Passive monitoring (कोई packet नहीं भेजता):
sudo arp-scan --passive

# Interface specify करें:
sudo arp-scan --passive -I wlan0

# Passive monitoring with logging:
sudo arp-scan --passive -I eth0 --write=passive_arp.log

# Real-time passive monitoring:
sudo arp-scan --passive -I wlan0 -v

# New device detection (passive):
# Script लिखो जो passive ARP monitor करे
# नया MAC address दिखे तो alert करे

# Passive mode advantages:
# - कोई packet नहीं भेजता — IDS/IPS trigger नहीं होता
# - Network traffic disturb नहीं होता
# - Completely stealthy reconnaissance
# - लंबे समय तक monitor कर सकते हो

# Passive mode limitations:
# - सिर्फ वही devices दिखेंगे जो actively ARP use कर रहे हैं
# - Quiet devices miss हो सकते हैं
# - Speed depends on network activity`}
      />

      <h2>IoT Device Discovery</h2>
      <p>
        arp-scan IoT device discovery के लिए बहुत useful है — vendor identification से devices easily identify होते हैं।
      </p>
      <CodeBlock
        title="IoT Device Identification"
        code={`# Smart home devices:
sudo arp-scan -N -l | grep -iE "amazon|google|roku|chromecast|alexa|nest"

# IP Cameras:
sudo arp-scan -N -l | grep -iE "hikvision|dahua|axis|amcrest|reolink|wyze"

# Smart TVs:
sudo arp-scan -N -l | grep -iE "samsung|lg|sony|tcl|hisense|vizio"

# Printers:
sudo arp-scan -N -l | grep -iE "hp|canon|epson|brother|xerox|ricoh"

# Network equipment:
sudo arp-scan -N -l | grep -iE "cisco|tp-link|netgear|ubiquiti|mikrotik|d-link"

# Mobile devices:
sudo arp-scan -N -l | grep -iE "samsung|apple|xiaomi|huawei|oneplus|oppo"

# Virtual machines:
sudo arp-scan -N -l | grep -iE "vmware|virtualbox|qemu|hyper-v|kvm"

# Unknown/Unauthorized devices:
sudo arp-scan -N -l | grep -i "unknown"
# ↑ Unknown vendors = potentially rogue devices

# Complete IoT inventory script:
sudo arp-scan -N -l | awk '{
    if ($3 ~ /samsung|apple|xiaomi|hikvision|amazon|google/i)
        print "[IoT] "$1" "$2" "$3
    else if ($3 == "(Unknown)")
        print "[???] "$1" "$2" UNKNOWN VENDOR"
    else
        print "[NET] "$1" "$2" "$3
}'`}
      />

      <h2>arp-scan vs Other Discovery Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">arp-scan</th>
              <th className="text-left py-2 px-3 text-neon-green">Netdiscover</th>
              <th className="text-left py-2 px-3 text-neon-green">Nmap -sn</th>
              <th className="text-left py-2 px-3 text-neon-green">nbtscan</th>
              <th className="text-left py-2 px-3 text-neon-green">Bettercap</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Protocol</td><td className="py-2 px-3">ARP (Layer 2)</td><td className="py-2 px-3">ARP (Layer 2)</td><td className="py-2 px-3">ICMP + ARP</td><td className="py-2 px-3">NetBIOS (Layer 7)</td><td className="py-2 px-3">ARP + WiFi</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">बहुत fast</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Slow</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Hidden devices</td><td className="py-2 px-3">Detect करता है</td><td className="py-2 px-3">Detect करता है</td><td className="py-2 px-3">Miss हो सकता है</td><td className="py-2 px-3">N/A</td><td className="py-2 px-3">Detect करता है</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Vendor info</td><td className="py-2 px-3">हाँ (built-in)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Passive mode</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Remote scan</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ (TCP)</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Output formats</td><td className="py-2 px-3">Text, JSON, XML</td><td className="py-2 px-3">Text only</td><td className="py-2 px-3">Text, XML, grepable</td><td className="py-2 px-3">Text</td><td className="py-2 px-3">JSON, CSV</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Bandwidth control</td><td className="py-2 px-3">हाँ (-b flag)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (--max-rate)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WiFi support</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (best)</td></tr>
            <tr><td className="py-2 px-3 text-white">Ease of use</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Hard</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scripting and Automation</h2>
      <p>
        arp-scan को scripts में integrate करके automated network monitoring कर सकते हो।
      </p>
      <CodeBlock
        title="Network Discovery Script"
        code={`#!/bin/bash
# Complete network discovery script

INTERFACE=$1
RANGE=$2

if [ -z "$INTERFACE" ] || [ -z "$RANGE" ]; then
    echo "Usage: $0 <interface> <range>"
    echo "Example: $0 wlan0 192.168.1.0/24"
    exit 1
fi

echo "[*] === ARP SCAN ==="
echo "[*] Scanning $RANGE on $INTERFACE..."
sudo arp-scan -I $INTERFACE $RANGE -N

echo ""
echo "[*] === COMPARISON ==="
echo "[*] Devices found by arp-scan vs nmap..."

# arp-scan results
ARP_COUNT=$(sudo arp-scan -I $INTERFACE $RANGE -N 2>/dev/null | grep -cE "^[0-9]")
echo "[+] arp-scan found: $ARP_COUNT devices"

# nmap results
NMAP_COUNT=$(nmap -sn $RANGE 2>/dev/null | grep -c "Nmap scan report")
echo "[+] nmap found: $NMAP_COUNT devices"

# Hidden devices
HIDDEN=$((ARP_COUNT - NMAP_COUNT))
if [ $HIDDEN -gt 0 ]; then
    echo "[!] Hidden devices detected: $HIDDEN"
    echo "[!] These devices block ping but respond to ARP"
fi`}
      />

      <CodeBlock
        title="Rogue Device Detection Script"
        code={`#!/bin/bash
# Rogue device detection — unknown MAC addresses alert

KNOWN_DEVICES="/etc/arp-scan/known_devices.txt"
LOG_FILE="/var/log/arp-scan.log"

echo "[*] Scanning network for rogue devices..."
RESULTS=$(sudo arp-scan -N -l 2>/dev/null)

while IFS= read -r line; do
    IP=$(echo "$line" | awk '{print $1}')
    MAC=$(echo "$line" | awk '{print $2}')
    VENDOR=$(echo "$line" | awk '{print $3}')

    if [ -z "$MAC" ]; then continue; fi

    # Check if MAC is in known devices
    if grep -qi "$MAC" "$KNOWN_DEVICES" 2>/dev/null; then
        echo "[OK] $IP $MAC $VENDOR"
    else
        echo "[ALERT] UNKNOWN DEVICE: $IP $MAC $VENDOR"
        echo "$(date) UNKNOWN: $IP $MAC $VENDOR" >> "$LOG_FILE"
    fi
done <<< "$RESULTS"`}
      />

      <CodeBlock
        title="Automated Network Monitoring"
        code={`#!/bin/bash
# Continuous network monitoring — new device alerts

BASELINE="/tmp/arp_baseline.txt"
INTERFACE="wlan0"

# Create baseline
echo "[*] Creating network baseline..."
sudo arp-scan -I $INTERFACE -l -N | grep -E "^[0-9]" | awk '{print $1","$2","$3}' > $BASELINE
echo "[+] Baseline created with $(wc -l < $BASELINE) devices"

while true; do
    echo "[*] Scanning..."
    CURRENT=$(sudo arp-scan -I $INTERFACE -l -N 2>/dev/null | grep -E "^[0-9]" | awk '{print $1","$2","$3}')

    while IFS= read -r device; do
        if ! grep -q "$device" "$BASELINE" 2>/dev/null; then
            echo "[ALERT] NEW DEVICE DETECTED: $device"
            echo "$(date) NEW: $device" >> /var/log/arp_monitor.log
            # Add to baseline
            echo "$device" >> "$BASELINE"
        fi
    done <<< "$CURRENT"

    sleep 300  # 5 minute interval
done`}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        arp-scan अकेले powerful है, लेकिन दूसरे tools के साथ combine करने और भी बेहतर results मिलते हैं।
      </p>
      <CodeBlock
        title="Tool Integration"
        code={`# arp-scan + Nmap combo (सबसे popular):
# Step 1: arp-scan से devices ढूंढो
sudo arp-scan 192.168.1.0/24 -N > arp_results.txt

# Step 2: Nmap से detailed port scan
nmap -sV -O -iL <(awk '{print $1}' arp_results.txt) -oX nmap_results.xml

# arp-scan + Masscan combo:
sudo arp-scan 192.168.1.0/24 | awk '{print $1}' > ips.txt
masscan -iL ips.txt -p0-65535 --rate=1000

# arp-scan + Metasploit:
# MSF में ARP scan module use करो
# use auxiliary/scanner/discovery/arp_sweep

# JSON output → Python processing:
sudo arp-scan -g 192.168.1.0/24 | python3 -c "
import json, sys
data = json.load(sys.stdin)
for host in data.get('hosts', []):
    print(f'{host.get(\"ip\")} - {host.get(\"mac\")} - {host.get(\"vendor\", \"Unknown\")}')
"

# arp-scan + grep automation:
# Specific device types ढूंढो:
sudo arp-scan -N -l | grep -iE "samsung|apple|xiaomi"
sudo arp-scan -N -l | grep -iE "vmware|virtualbox|qemu"
sudo arp-scan -N -l | grep -iE "cisco|tp-link|mikrotik"`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Permission Denied error आ रहा है', a: 'arp-scan को raw packets भेजने के लिए root privileges चाहिए। sudo use करो, या CAP_NET_RAW capability set करो: sudo setcap cap_net_raw+ep $(which arp-scan)। फिर बिना sudo चलेगा।' },
          { q: 'कोई results नहीं आ रहे', a: 'सबसे पहले interface check करो — ip link show से देखो कौन सा interface up है। फिर सही interface specify करो: sudo arp-scan -I eth0 -l। अगर WiFi है तो wlan0 try करो। Network connectivity भी check करो — ping -c 1 192.168.1.1' },
          { q: 'Timeout हो रहा है — responses नहीं आ रहे', a: 'Network unreliable हो सकता है। Timeout बढ़ाओ: sudo arp-scan --timeout=2000 --retry=5 -l। Bandwidth भी कम करो: sudo arp-scan -b 500000 -l। WiFi interference भी cause हो सकता है — wired connection try करो।' },
          { q: 'कुछ devices miss हो रहे हैं', a: 'Retry count बढ़ाओ: sudo arp-scan --retry=5 -l। Fast mode (-f) disable करो — यह कम packets भेजता है। Interval बढ़ाओ: sudo arp-scan --interval=200ms -l। Multiple बार scan करो — कुछ devices slow respond करते हैं।' },
          { q: 'Vendor name "Unknown" दिखा रहा है', a: 'MAC vendor database outdated हो सकती है। Update करो: sudo arp-scan --ouifile=/usr/share/arp-scan/ieee-oui.txt -l। या IEEE से latest OUI database download करो। Custom devices (esp32, Arduino) का OUI database में entry नहीं होती।' },
          { q: 'arp-scan बहुत slow है', a: 'Fast mode use करो: sudo arp-scan -f -l। Bandwidth limit बढ़ाओ। Retry count कम करो: --retry=1। Timeout कम करो: --timeout=500। /24 range को /25 में split करो।' },
          { q: 'VPN पर ARP scan काम नहीं कर रहा', a: 'VPN virtual interface use करता है — उसी interface से scan करो: sudo arp-scan -I tun0 -l। VPN अगर split tunnel है तो सिर्फ VPN subnet scan होगा। Full tunnel में remote network भी scan हो सकता है।' },
          { q: 'Docker containers नहीं दिख रहे', a: 'Docker bridge network अलग broadcast domain है। Docker interface से scan करो: sudo arp-scan -I docker0 -l। Host network containers host interface पर दिखेंगे। Docker network inspect भी use करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Network administrators के लिए — ARP scans को detect और block कैसे करें:
      </p>
      <CodeBlock
        title="ARP Scan Detection"
        code={`# ARP monitoring tools install करो:
sudo apt install arpwatch

# ARPwatch — ARP activity monitor:
sudo systemctl start arpwatch
# यह new MAC addresses detect करके email alert भेजता है

# ARP table monitoring:
watch -n 1 "arp -a"

# Static ARP entries (ARP spoofing prevention):
sudo arp -s 192.168.1.1 00:11:22:33:44:55
# यह ARP table entry fix करता है — changes detect होंगे

# Dynamic ARP Inspection (DAI) — Cisco switches:
# configure terminal
# ip arp inspection vlan 100
# ip arp inspection validate src-mac dst-mac ip

# Port Security — MAC limit per port:
# interface GigabitEthernet0/1
# switchport port-security
# switchport port-security maximum 2
# switchport port-security violation shutdown

# Network Access Control (NAC):
# 802.1X authentication enable करो
# Unknown devices network access नहीं मिलेगा

# IDS rules (Snort/Suricata):
# alert arp any any -> any any (msg:"ARP Scan Detected"; \
#   threshold: type both, track by_src, count 20, seconds 60; sid:1000001;)`}
      />

      <h2>Detailed Defense Techniques</h2>
      <p>
        ARP-based attacks (scanning, spoofing, MITM) से बचने के comprehensive techniques:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">ARPwatch:</strong> ARP table changes monitor करता है — new devices या MAC changes पर alert</li>
        <li><strong className="text-white">Static ARP Entries:</strong> Important devices (gateway, servers) के लिए static ARP entries set करो</li>
        <li><strong className="text-white">Dynamic ARP Inspection (DAI):</strong> Managed switches पर DAI enable करो — ARP packets validate होंगे</li>
        <li><strong className="text-white">Port Security:</strong> हर switch port पर MAC address limit set करो — unauthorized devices block होंगे</li>
        <li><strong className="text-white">802.1X Authentication:</strong> Network Access Control — devices को authenticate होना पड़ेगा</li>
        <li><strong className="text-white">VLAN Segmentation:</strong> Critical devices अलग VLAN में — ARP broadcast scope limited</li>
        <li><strong className="text-white">Private VLAN:</strong> Switch-level isolation — devices आपस में directly communicate नहीं कर सकते</li>
        <li><strong className="text-white">IDS/IPS Rules:</strong> Snort/Suricata rules से ARP scan patterns detect करो</li>
        <li><strong className="text-white">Network Monitoring:</strong> SIEM में ARP logs aggregate करो — anomalous patterns detect करो</li>
        <li><strong className="text-white">Encryption:</strong> ARP spoofing MITM attack है — encrypted protocols (HTTPS, SSH, VPN) use करो</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        arp-scan practice के लिए safe lab environment बनाओ:
      </p>
      <CodeBlock
        title="Practice Lab Setup"
        code={`# Virtual Network Lab:

# 1. VirtualBox/VMware में VMs बनाओ:
#    - Kali Linux (attacker — arp-scan यहाँ चलेगा)
#    - Ubuntu (target — web server)
#    - Windows (target — different vendor MAC)
#    - Router VM (optional — VyOS/pfSense)

# 2. Network configure करो:
#    - सभी VMs same Host-Only Network पर
#    - या Internal Network (isolated)
#    - Gateway: 192.168.1.1

# 3. Practice exercises:

# Exercise 1: Basic scan
sudo arp-scan 192.168.1.0/24
# सभी VMs दिखने चाहिए

# Exercise 2: Vendor identification
sudo arp-scan -N 192.168.1.0/24
# VirtualBox: 08:00:27
# VMware: 00:50:56
# Identify करो कौन सा VM किस platform पर है

# Exercise 3: Hidden device detection
# Ubuntu VM पर firewall enable करो:
sudo ufw enable
sudo ufw default deny incoming
# ping blocked — लेकिन ARP अभी भी काम करेगा
# arp-scan vs nmap compare करो

# Exercise 4: Passive monitoring
sudo arp-scan --passive -I eth0
# दूसरे terminal से traffic generate करो
# Passive mode में दिखेगा

# Exercise 5: Rogue device detection
# नया VM start करो — unknown device detect होगा
# Script से automated alert setup करो`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced arp-scan Usage"
        code={`# Custom OUI database:
# अपनी organization का OUI file बनाओ
echo "AA:BB:CC My Custom Device" > custom_oui.txt
sudo arp-scan --ouifile=custom_oui.txt -l

# MAC address spoofing detection:
# Scan करो, results save करो
sudo arp-scan -N -l > scan1.txt
sleep 60
sudo arp-scan -N -l > scan2.txt
# Compare करो — MAC changes detect होंगे
diff scan1.txt scan2.txt

# Duplicate IP detection:
# एक IP के लिए multiple MAC addresses = duplicate IP
sudo arp-scan 192.168.1.0/24 | awk '{print $1}' | sort | uniq -d

# ARP cache poisoning detection:
sudo arp-scan -N -l | while read ip mac vendor; do
    cached_mac=$(arp -n $ip 2>/dev/null | awk '{print $3}')
    if [ -n "$cached_mac" ] && [ "$mac" != "$cached_mac" ]; then
        echo "[!] ARP Mismatch: $ip — scan=$mac cache=$cached_mac"
    fi
done

# Network mapping script:
sudo arp-scan -g 192.168.1.0/24 | python3 -c "
import json, sys
data = json.load(sys.stdin)
print('Network Map:')
print('=' * 60)
for host in sorted(data.get('hosts', []), key=lambda x: x.get('ip','')):
    ip = host.get('ip', 'Unknown')
    mac = host.get('mac', 'Unknown')
    vendor = host.get('vendor', 'Unknown')
    print(f'  {ip:15} {mac:18} {vendor}')
print(f'Total devices: {len(data.get(\"hosts\", []))}')
" `}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'arp-scan vs netdiscover — कौन सा better है?', a: 'दोनों similar काम करते हैं। arp-scan ज़्यादा options देता है — JSON/XML output, bandwidth control, custom OUI file। netdiscover simpler है और passive mode बेहतर है। Pipeline automation के लिए arp-scan better है। Interactive monitoring के लिए netdiscover better है।' },
          { q: 'क्या arp-scan remote networks scan कर सकता है?', a: 'नहीं, ARP सिर्फ local network (same broadcast domain) पर काम करता है। Router ARP packets forward नहीं करते। Remote networks के लिए Nmap, Masscan, या Zmap use करो। VPN से connect करके remote network को local बना सकते हो।' },
          { q: 'क्या arp-scan detectable है?', a: 'हाँ, ARP traffic monitor किया जा सकता है। ARPwatch जैसे tools ARP activity detect करते हैं। Passive mode से completely stealthy हो सकते हो — कोई packet नहीं भेजता। लेकिन passive mode में quiet devices miss हो सकते हैं।' },
          { q: 'Root access ज़रूरी है?', a: 'हाँ, raw packets भेजने के लिए root चाहिए। sudo use करो, या capability set करो: sudo setcap cap_net_raw+ep $(which arp-scan)। फिर बिना sudo चलेगा। Passive mode के लिए भी root चाहिए।' },
          { q: 'WiFi पर काम करता है?', a: 'हाँ, WiFi interface (wlan0) से ARP scan कर सकते हो। लेकिन WiFi promiscuous mode support ज़रूरी है। Monitor mode में भी काम करता है। VirtualBox/VMware WiFi adapter pass-through भी काम करता है।' },
          { q: 'Large networks (/16) scan कर सकता है?', a: 'Technically हाँ, लेकिन /16 = 65536 hosts हैं — fast mode (-f) और bandwidth limit (-b) use करना ज़रूरी है। /24 ranges में split करके parallel scan करो। /16 scan में fast mode में भी 5-10 minute लग सकते हैं।' },
          { q: 'क्या arp-scan IPv6 support करता है?', a: 'नहीं, arp-scan सिर्फ IPv4 ARP protocol use करता है। IPv6 NDP (Neighbor Discovery Protocol) के लिए अलग tools हैं — जैसे ndisc6, nmap -6। IPv6 में ARP की जगह NDP use होता है।' },
          { q: 'VMs detect होते हैं?', a: 'हाँ! VirtualBox (08:00:27), VMware (00:50:56), QEMU (52:54:00) सब detect होते हैं। Vendor MAC prefix से VM platform identify हो जाता है। NAT network में host interface पर detect होंगे।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        Corporate environment में ARP scanning daily security audit का हिस्सा होना चाहिए। एक real incident में attacker ने rogue Raspberry Pi connect किया office network में — IT team को 3 हफ्ते तक पता नहीं चला। जब daily arp-scan comparison script run हुई तो unknown MAC address detect हुआ और device physically remove किया गया।
      </p>
      <p>
        एक और case में company merger के बाद two networks merge किए गए। Duplicate IPs cause कर रहे थे intermittent connectivity issues। arp-scan से duplicate IP detection script run की — 17 duplicate IPs मिले जिन्हें manually fix किया गया। बिना arp-scan के यह problem weeks तक बनी रहती।
      </p>
      <p>
        Penetration testing engagement में arp-scan use करके hidden network segments discover हुए जो firewall rules से externally invisible थे। Internal network mapping के लिए ARP-based discovery सबसे reliable method है क्योंकि ARP traffic को routers block नहीं करते same broadcast domain में।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        arp-scan को दूसरे tools के साथ combine करके complete network assessment workflow बना सकते हो। Nmap, Masscan, और custom scripts के साथ integration बहुत powerful है।
      </p>
      <CodeBlock
        title="arp-scan + Nmap Integration"
        code={`# Step 1: arp-scan से hosts discover करो
sudo arp-scan -N -l -g > hosts.json

# Step 2: Nmap से detailed scan करो discover हुए hosts पर
sudo arp-scan -N -l | awk '{print $1}' | grep -v '^$' > live_hosts.txt
nmap -sV -sC -iL live_hosts.txt -oA detailed_scan

# Step 3: Results combine करो
echo "=== Network Assessment Report ==="
echo "Date: $(date)"
echo ""
echo "--- ARP Discovery ---"
cat hosts.json
echo ""
echo "--- Nmap Details ---"
cat detailed_scan.txt`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Daily automated network monitoring के लिए cron jobs setup कर सकते हो। New device detection, rogue device alerting, और network inventory tracking सब automate हो सकता है।
      </p>
      <CodeBlock
        title="Automated Device Monitoring Script"
        code={`#!/bin/bash
# Daily network monitoring script
BASELINE="/var/log/arp-baseline.txt"
CURRENT="/var/log/arp-current.txt"
ALERT_LOG="/var/log/arp-alerts.log"

# Current scan
sudo arp-scan -N -l > $CURRENT

# Baseline compare
if [ -f $BASELINE ]; then
    NEW_DEVICES=$(diff $BASELINE $CURRENT | grep '^>' | wc -l)
    if [ "$NEW_DEVICES" -gt 0 ]; then
        echo "[ALERT] $(date): $NEW_DEVICES new devices detected!" >> $ALERT_LOG
        diff $BASELINE $CURRENT | grep '^>' >> $ALERT_LOG
    fi
fi

# Update baseline
cp $CURRENT $BASELINE`}
      />

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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Netdiscover</td><td className="py-2 px-3">ARP-based network discovery</td><td className="py-2 px-3">Simple, passive mode बेहतर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nmap</td><td className="py-2 px-3">Network scanner (multi-protocol)</td><td className="py-2 px-3">Remote scan, port scan, OS detection</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Masscan</td><td className="py-2 px-3">Fast SYN scanner</td><td className="py-2 px-3">Internet-wide scanning, extreme speed</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">nbtscan</td><td className="py-2 px-3">NetBIOS scanner</td><td className="py-2 px-3">Windows machine names, shares</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Bettercap</td><td className="py-2 px-3">Network attack framework</td><td className="py-2 px-3">ARP spoofing, WiFi attacks, MITM</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">arpwatch</td><td className="py-2 px-3">ARP activity monitor</td><td className="py-2 px-3">Defensive — new device alerts</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">arping</td><td className="py-2 px-3">ARP-based ping</td><td className="py-2 px-3">Single host ARP check</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">fping</td><td className="py-2 px-3">Fast parallel ping</td><td className="py-2 px-3">ICMP-based, fast host discovery</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>arp-scan + Nmap combo use करो — कोई device miss नहीं होगा</li>
          <li>-N flag से vendor names मिलेंगे — IoT devices easily identify होंगे</li>
          <li>Hidden devices ढूंढने के लिए arp-scan best है (firewall bypass)</li>
          <li>-g flag से JSON output मिलेगा — pipeline में use कर सकते हो</li>
          <li>Passive mode से completely stealthy monitoring हो सकती है</li>
          <li>IoT device discovery के लिए vendor filter use करो</li>
          <li>Large networks के लिए -f (fast) mode use करो</li>
          <li>Hamesha authorized permission के साथ ही scan करो</li>
          <li>arpwatch install करो defensive side पर — new devices alert मिलेगा</li>
          <li>Duplicate IP detection के लिए multiple scans compare करो</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ Final Warning:</strong> ARP scanning सिर्फ local network पर काम करता है। Corporate networks पर बिना permission scanning job loss या legal action का कारण बन सकता है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क स्कैनिंग अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। हमेशा लिखित authorization लो। सब कुछ document करो।
      </div>
    </TutorialLayout>
  )
}
