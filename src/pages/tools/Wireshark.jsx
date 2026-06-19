import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Wireshark() {
  return (
    <TutorialLayout
      title="wireshark"
      subtitle="नेटवर्क प्रोटोकॉल एनालाइज़र — हर पैकेट कैप्चर और एनालाइज़ करता है"
      icon="📡"
      prev={{ to: '/tool/burpsuite', label: 'burpsuite' }}
      next={{ to: '/tool/setoolkit', label: 'setoolkit' }}
    >
      <h2>What is Wireshark?</h2>
      <p>Wireshark एक नेटवर्क प्रोटोकॉल एनालाइज़र है जो हर पैकेट को कैप्चर करके एनालाइज़ करता है। यह TCP, UDP, HTTP, DNS, और 2000+ प्रोटोकॉल्स को डीकोड करता है। यह हर पैकेट को कैप्चर करके analyze कर सकता है। TCP, UDP, HTTP, DNS, और 2000+ प्रोटोकॉल को decode करता है। नेटवर्क troubleshooting, सुरक्षा विश्लेषण, और पेनेट्रेशन टेस्टिंग के लिए यह एक essential टूल है।
      </p>
      <p>
        Wireshark GUI और कमांड लाइन (tshark) दोनों में चलता है। Nethunter पर tshark कमांड लाइन version available है। आप real-time capture कर सकते हो या saved pcap files को analyze कर सकते हो। यह libpcap library पर based है जो Linux/Unix पर raw packet capture करती है।
      </p>
      <p>
        Wireshark को Gerald Combs ने 1998 में शुरू किया था। पहले इसका नाम Ethereal था, 2006 में इसका नाम Wireshark रखा गया। यह ओपन सोर्स है और GPLv2 लाइसेंस के तहत आता है। दुनिया भर के नेटवर्क इंजीनियर, सुरक्षा शोधकर्ता, और पेनेट्रेशन टेस्टर इसका इस्तेमाल करते हैं।
      </p>
      <p>
        Wireshark का सबसे बड़ा advantage है इसका protocol dissector framework। 2000+ protocols को automatically decode करता है — HTTP, DNS, TCP, UDP, SSL/TLS, FTP, SSH, SMTP, DHCP, ARP, ICMP, और बहुत कुछ। हर packet का हर layer (Ethernet, IP, TCP, Application) अलग-अलग दिखाता है। यह network forensics और malware analysis के लिए essential है।
      </p>
      <p>
        Wireshark cross-platform है — Windows, Linux, macOS सब पर चलता है। Kali Linux और Nethunter में यह pre-installed आता है। tshark (command-line version) scripting और automation के लिए perfect है। Bug bounty hunters, network engineers, और security researchers सभी इसे daily use करते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> केवल अपने नेटवर्क पर या authorized testing पर इस्तेमाल करें। बिना अनुमति के पैकेट कैप्चर करना गैरकानूनी है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत यह अपराध है।
      </div>

      <div className="warning-box mb-6">
        <strong>⚠️ महत्वपूर्ण:</strong> Nethunter पर Wireshark का GUI version सीधे काम नहीं करता। इसकी जगह tshark (command line version) इस्तेमाल करें। tshark वही सब कर सकता है जो Wireshark GUI करता है।
      </div>

      <h2>History of Wireshark</h2>
      <p>
        Wireshark की शुरुआत 1998 में Gerald Combs ने की थी जब उन्हें एक network protocol analyzer की ज़रूरत थी। उस समय इसका नाम Ethereal था। Gerald ने इसे C भाषा में लिखा और GTK+ toolkit से GUI बनाया। शुरू में यह सिर्फ कुछ protocols support करता था।
      </p>
      <p>
        2006 में trademark issues के कारण नाम Wireshark रखा गया। तब से इसमें बहुत सुधार हुए — Qt-based GUI, बेहतर dissector engine, और 2000+ protocol support। 2010 तक Wireshark दुनिया का सबसे popular packet analyzer बन गया।
      </p>
      <p>
        Wireshark community बहुत active है। हर साल SharkFest conference होती है जहाँ Wireshark developers और users मिलते हैं। आज Wireshark educational institutions, enterprises, और security firms में standard tool है। इसके 2000+ protocol dissectors हैं और community actively new protocols add करती रहती है।
      </p>

      <h2>How Wireshark Works?</h2>
      <p>
        Wireshark का architecture capture engine और dissector framework पर based है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">libpcap/Npcap:</strong> OS-level packet capture library — raw packets read करती है network interface से</li>
        <li><strong className="text-white">Capture Engine:</strong> Packets capture करता है, timestamps add करता है, ring buffer manage करता है</li>
        <li><strong className="text-white">Dissector Framework:</strong> हर protocol के लिए एक dissector है — packets decode करता है</li>
        <li><strong className="text-white">Display Filter Engine:</strong> Complex filter expressions evaluate करता है — 2000+ filter fields</li>
        <li><strong className="text-white">Statistics Engine:</strong> Conversations, endpoints, IO graphs generate करता है</li>
        <li><strong className="text-white">File I/O:</strong> pcap/pcapng files read/write करता है — 20+ file formats support</li>
        <li><strong className="text-white">Reassembly Engine:</strong> TCP streams, fragmented packets, और encrypted data reassemble करता है</li>
        <li><strong className="text-white">Coloring Rules:</strong> Packets को color code करता है — errors red, HTTP green, DNS blue</li>
      </ul>
      <p>
        Wireshark का dissector framework chain-based है। जब कोई packet आता है, तो पहले Ethernet dissector चलता है, फिर IP dissector, फिर TCP/UDP, और finally application protocol dissector (HTTP, DNS, etc.)। हर layer अपना data decode करता है और next layer को pass करता है।
      </p>

      <h2>Installation</h2>
      <CodeBlock
        title="Wireshark Installation"
        code={`# Kali Nethunter में पहले से होता है:
sudo apt update
sudo apt install wireshark tshark

# Ubuntu/Debian:
sudo apt install wireshark tshark

# Termux में:
pkg install wireshark

# Version check:
tshark --version

# Interfaces list करें:
tshark -D

# Help देखें:
tshark --help

# Specific interface capability check:
tshark -i wlan0 -c 1`}
      />

      <h2>Basic Usage</h2>
      <p>
        tshark का basic usage बहुत simple है — interface choose करो, capture start करो, filter लगाओ।
      </p>
      <CodeBlock
        title="Basic Capture"
        code={`# Interface पर capture start करें:
sudo tshark -i wlan0

# Specific interface:
sudo tshark -i eth0

# File में save करें:
sudo tshark -i wlan0 -w capture.pcap

# Duration limit (10 seconds):
sudo tshark -i wlan0 -a duration:10

# Packet count limit (100 packets):
sudo tshark -i wlan0 -c 100

# सभी interfaces पर capture:
sudo tshark -i any

# Ring buffer (10 files, 1MB each):
sudo tshark -i wlan0 -w capture.pcap -b filesize:1024 -b files:10

# Verbose output (full packet detail):
sudo tshark -i wlan0 -V

# Quiet mode (less output):
sudo tshark -i wlan0 -q`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Option</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-i iface</td><td className="py-2 px-3">Interface specify करें</td><td className="py-2 px-3 font-mono text-xs">-i wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-w file</td><td className="py-2 px-3">pcap file में save करें</td><td className="py-2 px-3 font-mono text-xs">-w capture.pcap</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r file</td><td className="py-2 px-3">pcap file पढ़ें</td><td className="py-2 px-3 font-mono text-xs">-r capture.pcap</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-Y filter</td><td className="py-2 px-3">Display filter apply करें</td><td className="py-2 px-3 font-mono text-xs">-Y "http"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f filter</td><td className="py-2 px-3">Capture filter (BPF)</td><td className="py-2 px-3 font-mono text-xs">-f "tcp port 80"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c count</td><td className="py-2 px-3">Packet count limit</td><td className="py-2 px-3 font-mono text-xs">-c 100</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-a duration</td><td className="py-2 px-3">Capture duration (seconds)</td><td className="py-2 px-3 font-mono text-xs">-a duration:60</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-T fields</td><td className="py-2 px-3">Specific fields output</td><td className="py-2 px-3 font-mono text-xs">-T fields -e ip.src</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e field</td><td className="py-2 px-3">Field add करें output में</td><td className="py-2 px-3 font-mono text-xs">-e http.host</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-z stats</td><td className="py-2 px-3">Statistics generate करें</td><td className="py-2 px-3 font-mono text-xs">-z conv,ip</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-V</td><td className="py-2 px-3">Verbose (full packet detail)</td><td className="py-2 px-3 font-mono text-xs">-V</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-q</td><td className="py-2 px-3">Quiet mode (less output)</td><td className="py-2 px-3 font-mono text-xs">-q</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-D</td><td className="py-2 px-3">Interfaces list करें</td><td className="py-2 px-3 font-mono text-xs">-D</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o pref</td><td className="py-2 px-3">Preference set करें</td><td className="py-2 px-3 font-mono text-xs">-o tls.keylog_file:keys.log</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-E opt</td><td className="py-2 px-3">Output options</td><td className="py-2 px-3 font-mono text-xs">-E header=y -E separator=,</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Display Filters (Detailed)</h2>
      <p>
        Display filters से आप specific traffic देख सकते हो। यह capture के बाद लगते हैं — 2000+ filter fields available हैं।
      </p>
      <CodeBlock
        title="Common Display Filters"
        code={`# सिर्फ HTTP traffic:
sudo tshark -i wlan0 -Y "http"

# DNS queries:
sudo tshark -i wlan0 -Y "dns"

# Specific IP का traffic:
sudo tshark -i wlan0 -Y "ip.addr == 192.168.1.100"

# Specific port:
sudo tshark -i wlan0 -Y "tcp.port == 443"

# HTTP GET requests:
sudo tshark -i wlan0 -Y "http.request.method == GET"

# HTTP POST requests:
sudo tshark -i wlan0 -Y "http.request.method == POST"

# DNS queries only:
sudo tshark -i wlan0 -Y "dns.qry.name"

# ARP noise हटाएं:
sudo tshark -i wlan0 -Y "!arp"

# Specific subnet:
sudo tshark -i wlan0 -Y "ip.src == 192.168.1.0/24"

# ICMP (ping) traffic:
sudo tshark -i wlan0 -Y "icmp"

# SSL/TLS traffic:
sudo tshark -i wlan0 -Y "ssl || tls"

# FTP traffic:
sudo tshark -i wlan0 -Y "ftp"

# Telnet traffic:
sudo tshark -i wlan0 -Y "telnet"

# TCP SYN packets (new connections):
sudo tshark -i wlan0 -Y "tcp.flags.syn == 1 && tcp.flags.ack == 0"

# HTTP errors:
sudo tshark -i wlan0 -Y "http.response.code >= 400"

# Large packets:
sudo tshark -i wlan0 -Y "frame.len > 1000"}

# Complex filters (AND/OR):
sudo tshark -i wlan0 -Y "http && ip.src == 192.168.1.100"
sudo tshark -i wlan0 -Y "dns || arp"
sudo tshark -i wlan0 -Y "(tcp.port == 80) || (tcp.port == 443)"`}
      />

      <h2>Capture Filters (BPF Syntax)</h2>
      <p>
        Capture filters capture के समय लगते हैं — BPF (Berkeley Packet Filter) syntax में। ये unwanted packets को पहले से रोकते हैं और file size कम रखते हैं।
      </p>
      <CodeBlock
        title="Capture Filters"
        code={`# सिर्फ TCP traffic capture:
sudo tshark -i wlan0 -f "tcp"

# Specific host:
sudo tshark -i wlan0 -f "host 192.168.1.100"

# Specific port:
sudo tshark -i wlan0 -f "port 80"

# Specific subnet:
sudo tshark -i wlan0 -f "net 192.168.1.0/24"

# SSH noise हटाएं:
sudo tshark -i wlan0 -f "not port 22"

# सिर्फ UDP traffic:
sudo tshark -i wlan0 -f "udp"

# दो hosts के बीच traffic:
sudo tshark -i wlan0 -f "host 192.168.1.1 and host 192.168.1.2"

# Port range:
sudo tshark -i wlan0 -f "portrange 80-443"

# Broadcast traffic:
sudo tshark -i wlan0 -f "broadcast"

# Specific protocol:
sudo tshark -i wlan0 -f "tcp port 443"
sudo tshark -i wlan0 -f "udp port 53"

# Combined filters:
sudo tshark -i wlan0 -f "host 192.168.1.100 and tcp port 80"`}
      />

      <h2>Saved Files Analyze करें</h2>
      <CodeBlock
        title="PCAP File Analysis"
        code={`# Saved file पढ़ें:
tshark -r capture.pcap

# Filter के साथ:
tshark -r capture.pcap -Y "http"

# Statistics निकालें:
tshark -r capture.pcap -z conv,ip      # Conversations
tshark -r capture.pcap -z http,tree    # HTTP stats
tshark -r capture.pcap -z dns,tree     # DNS stats
tshark -r capture.pcap -z io,stat      # I/O statistics
tshark -r capture.pcap -z endpoints,ip # IP endpoints
tshark -r capture.pcap -z follow,tcp,ascii,0  # TCP stream follow

# Specific fields extract करें:
tshark -r capture.pcap -T fields -e ip.src -e ip.dst -e http.host

# JSON output:
tshark -r capture.pcap -T json > output.json

# CSV output:
tshark -r capture.pcap -T fields -E header=y -E separator=, -e ip.src -e ip.dst -e tcp.port > output.csv

# Packet summary (one line per packet):
tshark -r capture.pcap -T fields -e frame.number -e ip.src -e ip.dst -e frame.protocols`}
      />

      <h2>Follow TCP Stream</h2>
      <p>
        Follow TCP Stream किसी TCP connection की पूरी conversation दिखाता है — request और response दोनों। HTTP, FTP, Telnet जैसे plain-text protocols की full conversation देख सकते हो।
      </p>
      <CodeBlock
        title="TCP Stream Follow"
        code={`# पहला TCP stream follow करें:
tshark -r capture.pcap -z follow,tcp,ascii,0

# दूसरा TCP stream:
tshark -r capture.pcap -z follow,tcp,ascii,1

# HTTP stream (specific connection):
tshark -r capture.pcap -z follow,tcp,ascii,0 -Y "http"

# Raw bytes:
tshark -r capture.pcap -z follow,tcp,raw,0

# EBCDIC format:
tshark -r capture.pcap -z follow,tcp,ebcdic,0

# Output file में save:
tshark -r capture.pcap -z follow,tcp,ascii,0 -q > stream.txt

# HTTP request/response pair:
tshark -r capture.pcap -z follow,tcp,ascii,0 -Y "http.request.method == POST"`}
      />

      <h2>Statistics</h2>
      <p>
        tshark statistics commands से network traffic का overview मिलता है — conversations, endpoints, protocol hierarchy, और I/O stats।
      </p>
      <CodeBlock
        title="Statistics Commands"
        code={`# Conversations (IP pairs):
tshark -r capture.pcap -z conv,ip -q

# TCP conversations:
tshark -r capture.pcap -z conv,tcp -q

# Endpoints:
tshark -r capture.pcap -z endpoints,ip -q

# Protocol hierarchy:
tshark -r capture.pcap -z io,phs -q

# HTTP requests summary:
tshark -r capture.pcap -z http,tree -q

# DNS summary:
tshark -r capture.pcap -z dns,tree -q

# I/O statistics (per second):
tshark -r capture.pcap -z io,stat,1 -q

# Packet length distribution:
tshark -r capture.pcap -z plen,tree -q

# Expert info (warnings/errors):
tshark -r capture.pcap -z expert -q

# Top talkers (most active hosts):
tshark -r capture.pcap -z conv,ip -q | sort -k4 -nr | head -10`}
      />

      <h2>Protocol Analysis</h2>
      <p>
        Wireshark 2000+ protocols support करता है। हर protocol का specific analysis कर सकते हो।
      </p>
      <CodeBlock
        title="Protocol Specific Analysis"
        code={`# DNS analysis — कौन सी websites visit हो रही हैं:
tshark -r capture.pcap -Y "dns.qry.name" -T fields -e dns.qry.name

# HTTP analysis — URLs और hosts:
tshark -r capture.pcap -Y "http.request" -T fields -e http.host -e http.request.uri

# TCP analysis — connections:
tshark -r capture.pcap -z conv,tcp

# ARP analysis — MAC addresses:
tshark -r capture.pcap -Y "arp" -T fields -e arp.src.hw_mac -e arp.dst.hw_mac

# ICMP analysis — pings:
tshark -r capture.pcap -Y "icmp" -T fields -e ip.src -e ip.dst

# SSL/TLS analysis — certificates:
tshark -r capture.pcap -Y "ssl.handshake.type == 11" -T fields -e x509sat.utf8String

# DHCP analysis:
tshark -r capture.pcap -Y "dhcp" -T fields -e dhcp.option.hostname

# SMTP analysis:
tshark -r capture.pcap -Y "smtp" -T fields -e smtp.req.parameter

# FTP analysis:
tshark -r capture.pcap -Y "ftp" -T fields -e ftp.request.command -e ftp.request.arg

# SSH analysis:
tshark -r capture.pcap -Y "ssh" -T fields -e ssh.protocol`}
      />

      <h2>VoIP Analysis</h2>
      <p>
        Wireshark VoIP calls analyze कर सकता है — SIP signaling, RTP streams, और call quality metrics।
      </p>
      <CodeBlock
        title="VoIP Call Analysis"
        code={`# VoIP calls detect करें:
tshark -r capture.pcap -z voip,calls -q

# SIP signaling:
tshark -r capture.pcap -Y "sip"

# RTP streams:
tshark -r capture.pcap -Y "rtp"

# VoIP calls list:
tshark -r capture.pcap -z voip,calls

# SIP registration attempts:
tshark -r capture.pcap -Y "sip.Method == REGISTER" -T fields -e sip.from.user

# Call duration:
tshark -r capture.pcap -z voip,calls -q | grep -i "duration"

# RTP stream statistics:
tshark -r capture.pcap -z rtp,streams -q`}
      />

      <h2>Wireless Capture</h2>
      <p>
        WiFi monitoring mode से wireless packets capture कर सकते हो — beacon frames, deauth packets, probe requests, और WPA handshakes।
      </p>
      <CodeBlock
        title="WiFi Monitoring"
        code={`# Monitor mode enable करें:
sudo airmon-ng start wlan0

# Monitor mode interface पर capture:
sudo tshark -i wlan0mon

# Beacon frames (WiFi networks):
sudo tshark -i wlan0mon -Y "wlan.fc.type_subtype == 0x08"

# Deauthentication frames detect:
sudo tshark -i wlan0mon -Y "wlan.fc.type_subtype == 0x0c"

# Probe requests (devices WiFi ढूंढ रहे हैं):
sudo tshark -i wlan0mon -Y "wlan.fc.type_subtype == 0x04"

# EAPOL frames (WPA handshake):
sudo tshark -i wlan0mon -Y "eapol"

# Specific channel:
sudo tshark -i wlan0mon -f "channel 6"

# SSIDs list (beacon frames से):
sudo tshark -i wlan0mon -Y "wlan.fc.type_subtype == 0x08" -T fields -e wlan.ssid | sort -u

# Monitor mode disable:
sudo airmon-ng stop wlan0mon`}
      />

      <h2>TLS/SSL Decryption</h2>
      <p>
        SSL/TLS encrypted traffic decrypt करने के लिए SSLKEYLOGFILE या private key चाहिए। बिना key के सिर्फ metadata दिखेगा।
      </p>
      <CodeBlock
        title="SSL/TLS Decryption"
        code={`# SSLKEYLOGFILE environment variable से decrypt:
# Browser में SSLKEYLOGFILE set करो:
export SSLKEYLOGFILE=/tmp/sslkeys.log

# tshark को keylog file दो:
tshark -r capture.pcap -o "tls.keylog_file:/tmp/sslkeys.log"

# Private key से decrypt (RSA):
tshark -r capture.pcap -o "tls.keys_list:,443,http,private.key"

# Pre-master secret log:
tshark -r capture.pcap -o "tls.debug_file:/tmp/tls_debug.log" -Y "tls"

# Decrypt के बाद HTTP दिखेगा:
tshark -r capture.pcap -o "tls.keylog_file:/tmp/sslkeys.log" -Y "http"

# Note: Perfect Forward Secrecy (PFS) से RSA key काम नहीं करेगी
# PFS के लिए SSLKEYLOGFILE ज़रूरी है`}
      />

      <h2>Password Capture करें</h2>
      <p>
        Plain-text protocols (HTTP, FTP, Telnet) से credentials capture कर सकते हो। Encrypted protocols (HTTPS, SSH) के लिए decryption key चाहिए।
      </p>
      <CodeBlock
        title="Credential Sniffing"
        code={`# HTTP POST data capture (plain text passwords):
sudo tshark -i wlan0 -Y "http.request.method == POST" -T fields -e http.file_data

# FTP credentials:
sudo tshark -i wlan0 -Y "ftp.request.command == USER || ftp.request.command == PASS"

# Telnet passwords:
sudo tshark -i wlan0 -Y "telnet"

# HTTP Basic Auth:
sudo tshark -i wlan0 -Y "http.authorization" -T fields -e http.authorization

# DNS tunneling detect:
sudo tshark -i wlan0 -Y "dns.qry.name.len > 50"

# Cookies capture:
sudo tshark -i wlan0 -Y "http.cookie" -T fields -e http.cookie

# Form data:
sudo tshark -i wlan0 -Y "http.request.method == POST" -T fields -e http.request.uri -e http.file_data`}
      />

      <h2>Network Forensics Workflow</h2>
      <p>
        Network forensics के लिए systematic approach ज़रूरी है — capture, filter, analyze, extract, report।
      </p>
      <CodeBlock
        title="Forensic Analysis Workflow"
        code={`# Step 1: Capture करो:
sudo tshark -i wlan0 -w evidence.pcap -a duration:300

# Step 2: Protocol hierarchy देखो:
tshark -r evidence.pcap -z io,phs -q

# Step 3: Top talkers देखो:
tshark -r evidence.pcap -z conv,ip -q | sort -k4 -nr | head -20

# Step 4: DNS queries (visited sites):
tshark -r evidence.pcap -Y "dns.qry.name" -T fields -e dns.qry.name | sort -u

# Step 5: HTTP traffic:
tshark -r evidence.pcap -Y "http.request" -T fields -e ip.src -e http.host -e http.request.uri

# Step 6: Suspicious connections:
tshark -r evidence.pcap -Y "tcp.flags.syn == 1 && tcp.flags.ack == 0" -T fields -e ip.src -e ip.dst -e tcp.dstport

# Step 7: Extract files:
# Wireshark GUI: File > Export Objects > HTTP

# Step 8: Expert info (errors/warnings):
tshark -r evidence.pcap -z expert -q

# Step 9: Timeline:
tshark -r evidence.pcap -z io,stat,60 -q`}
      />

      <h2>Malware Traffic Analysis</h2>
      <p>
        Malware traffic analysis के लिए Wireshark/tshark essential है — C2 communication, data exfiltration, और lateral movement detect कर सकते हो।
      </p>
      <CodeBlock
        title="Malware Traffic Analysis"
        code={`# DNS queries — suspicious domains:
tshark -r suspicious.pcap -Y "dns" -T fields -e dns.qry.name | sort -u

# HTTP requests — C2 communication:
tshark -r suspicious.pcap -Y "http.request" -T fields -e http.host -e http.request.uri

# External connections:
tshark -r suspicious.pcap -Y "ip.dst != 192.168.0.0/16" -z conv,ip -q

# Large data transfers (exfiltration):
tshark -r suspicious.pcap -z conv,tcp -q | awk '$5 > 1000000 {print}'

# Beacon detection (regular intervals):
tshark -r suspicious.pcap -Y "http.request" -T fields -e frame.time_relative -e http.host

# DNS tunneling:
tshark -r suspicious.pcap -Y "dns.qry.name.len > 50" -T fields -e dns.qry.name

# Encrypted traffic to unusual ports:
tshark -r suspicious.pcap -Y "tls && tcp.port != 443" -T fields -e ip.dst -e tcp.dstport

# JA3 fingerprinting (TLS client fingerprint):
tshark -r suspicious.pcap -Y "tls.handshake.type == 1" -T fields -e tls.handshake.ja3`}
      />

      <h2>IO Graphs</h2>
      <p>
        IO statistics से traffic patterns visualize कर सकते हो — per-second, per-minute, per-hour stats।
      </p>
      <CodeBlock
        title="IO Statistics"
        code={`# IO stats (per second):
tshark -r capture.pcap -z io,stat,1 -q

# IO stats (per 10 seconds):
tshark -r capture.pcap -z io,stat,10 -q

# IO stats with filter:
tshark -r capture.pcap -z io,stat,1,"http" -q

# Multiple filters:
tshark -r capture.pcap -z io,stat,1,"http","dns","tcp" -q

# AVG, MIN, MAX:
tshark -r capture.pcap -z io,stat,1,"AVG(frame.len)frame.len","MAX(frame.len)frame.len" -q

# Per-minute analysis:
tshark -r capture.pcap -z io,stat,60 -q`}
      />

      <h2>Scripting and Automation (tshark)</h2>
      <p>
        tshark scripting और automation के लिए perfect है — bash scripts, cron jobs, और CI/CD pipelines में integrate कर सकते हो।
      </p>
      <CodeBlock
        title="Automated Analysis Scripts"
        code={`#!/bin/bash
# Network monitoring script

INTERFACE="wlan0"
OUTPUT_DIR="/tmp/captures"
mkdir -p "$OUTPUT_DIR"

echo "[+] Starting capture on $INTERFACE..."

# Capture 5 minutes of traffic:
sudo tshark -i "$INTERFACE" -a duration:300 -w "$OUTPUT_DIR/capture.pcap"

echo "[+] Analyzing..."

# DNS queries (visited websites):
echo "[+] DNS Queries:"
tshark -r "$OUTPUT_DIR/capture.pcap" -Y "dns.qry.name" -T fields -e dns.qry.name | sort -u

# HTTP hosts:
echo "[+] HTTP Hosts:"
tshark -r "$OUTPUT_DIR/capture.pcap" -Y "http.host" -T fields -e http.host | sort -u

# Top talkers:
echo "[+] Top Talkers:"
tshark -r "$OUTPUT_DIR/capture.pcap" -z conv,ip -q | sort -k4 -nr | head -10

# Credentials:
echo "[+] Potential Credentials:"
tshark -r "$OUTPUT_DIR/capture.pcap" -Y "http.request.method == POST" -T fields -e http.file_data

echo "[+] Done!"`}
      />

      <CodeBlock
        title="Real-Time Monitoring"
        code={`# Real-time DNS monitoring:
sudo tshark -i wlan0 -Y "dns.qry.name" -T fields -e frame.time -e dns.qry.name

# Real-time HTTP monitoring:
sudo tshark -i wlan0 -Y "http.request" -T fields -e http.host -e http.request.uri

# ARP spoofing detect:
sudo tshark -i wlan0 -Y "arp" -T fields -e arp.src.hw_mac -e arp.src.proto_mac

# New connections monitor:
sudo tshark -i wlan0 -Y "tcp.flags.syn == 1" -T fields -e ip.src -e ip.dst -e tcp.dstport

# Log to file:
sudo tshark -i wlan0 -Y "dns.qry.name" -T fields -e frame.time -e dns.qry.name >> dns_log.txt

# Alert on suspicious traffic:
sudo tshark -i wlan0 -Y "dns.qry.name contains \\"evil\\"" -T fields -e dns.qry.name`}
      />

      <h2>Wireshark vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Wireshark/tshark</th>
              <th className="text-left py-2 px-3 text-neon-green">tcpdump</th>
              <th className="text-left py-2 px-3 text-neon-green">NetworkMiner</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Interface</td><td className="py-2 px-3">GUI + CLI (tshark)</td><td className="py-2 px-3">CLI only</td><td className="py-2 px-3">GUI only</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Protocol Support</td><td className="py-2 px-3">2000+ protocols</td><td className="py-2 px-3">Basic (TCP/UDP/ICMP)</td><td className="py-2 px-3">100+ protocols</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Display Filters</td><td className="py-2 px-3">Advanced expressions</td><td className="py-2 px-3">BPF only</td><td className="py-2 px-3">GUI filters</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Statistics</td><td className="py-2 px-3">Built-in (graphs, tables)</td><td className="py-2 px-3">Basic counts</td><td className="py-2 px-3">File extraction</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">VoIP Analysis</td><td className="py-2 px-3">हाँ (built-in)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सीमित</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Resource Usage</td><td className="py-2 px-3">Heavy (GUI), Medium (tshark)</td><td className="py-2 px-3">Light</td><td className="py-2 px-3">Heavy</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Scripting</td><td className="py-2 px-3">Excellent (tshark CLI)</td><td className="py-2 px-3">Good (BPF)</td><td className="py-2 px-3">Limited</td></tr>
            <tr><td className="py-2 px-3 text-white">Learning Curve</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Easy</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Filters Cheat Sheet</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Filter</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या दिखाता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">http</td><td className="py-2 px-3">HTTP traffic</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">dns</td><td className="py-2 px-3">DNS queries</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">tcp.port == 443</td><td className="py-2 px-3">HTTPS traffic</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">ip.addr == X.X.X.X</td><td className="py-2 px-3">Specific IP traffic</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">arp</td><td className="py-2 px-3">ARP packets</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">icmp</td><td className="py-2 px-3">Ping traffic</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">tcp.flags.syn == 1</td><td className="py-2 px-3">नए TCP connections</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">http.request.method == POST</td><td className="py-2 px-3">POST requests (forms)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">ssl || tls</td><td className="py-2 px-3">SSL/TLS encrypted traffic</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">ftp</td><td className="py-2 px-3">FTP traffic</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">wlan.fc.type_subtype == 0x08</td><td className="py-2 px-3">WiFi Beacon frames</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono text-xs">eapol</td><td className="py-2 px-3">WPA handshake packets</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'No interfaces दिख रहे हैं', a: 'sudo से run करो — raw capture के लिए root privileges चाहिए। tshark -D से interfaces check करो।' },
          { q: 'Capture में कुछ नहीं आ रहा', a: 'Interface सही है? tshark -i any try करो। Capture filter हटाओ पहले। Network active है check करो।' },
          { q: 'बहुत बड़ी file बन रही है', a: 'Ring buffer use करो: -b filesize:1024 -b files:10। या capture filter से unwanted traffic हटाओ।' },
          { q: 'Display filter error आ रहा है', a: 'Syntax check करो — double quotes use करो। == (comparison) और = (assignment) में फ़र्क है।' },
          { q: 'WiFi monitor mode काम नहीं कर रहा', a: 'पहले airmon-ng check kill करो, फिर airmon-ng start wlan0। USB WiFi adapter use करो अगर built-in support नहीं है।' },
          { q: 'SSL traffic decrypt नहीं हो रहा', a: 'SSLKEYLOGFILE set करो browser में, या private key चाहिए। Perfect Forward Secrecy (PFS) से RSA key से decrypt नहीं होगा।' },
          { q: 'tshark बहुत slow है', a: 'Capture filter use करो display filter की जगह। -c flag से packet limit लगाओ। Large files के लिए editcap से split करो।' },
          { q: 'Packets miss हो रहे हैं', a: 'Buffer size बढ़ाओ: -B 1024। Interface speed check करो। Disk I/O bottleneck हो सकता है — SSD use करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Packet sniffing से बचने के लिए encryption और network security best practices follow करो:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Encryption:</strong> HTTPS, SSH, VPN use करो — packet sniffing useless हो जाएगी</li>
        <li><strong className="text-white">ARP Spoofing Detection:</strong> Static ARP entries set करो, ARP monitoring tools use करो</li>
        <li><strong className="text-white">802.1X:</strong> Network Access Control implement करो — unauthorized devices connect नहीं कर पाएंगी</li>
        <li><strong className="text-white">Switch Port Security:</strong> Port-based MAC address filtering enable करो</li>
        <li><strong className="text-white">IDS/IPS:</strong> Network IDS (Snort/Suricata) detect करता है suspicious capture activity</li>
        <li><strong className="text-white">VPN:</strong> All traffic encrypt करो — even internal network पर</li>
        <li><strong className="text-white">DNS over HTTPS:</strong> DoH use करो — DNS queries encrypt होंगी</li>
        <li><strong className="text-white">HSTS:</strong> HTTPS Strict Transport Security enable करो</li>
        <li><strong className="text-white">Network Segmentation:</strong> VLANs use करो — broadcast domain limit करो</li>
        <li><strong className="text-white">Monitor Mode Detection:</strong> Wireless IDS detect करता है monitor mode interfaces</li>
        <li><strong className="text-white">Dynamic ARP Inspection:</strong> DAI enable करो switches पर — ARP spoofing automatically block होगा</li>
        <li><strong className="text-white">DHCP Snooping:</strong> Rogue DHCP servers detect और block होंगे network पर</li>
        <li><strong className="text-white">Private VLANs:</strong> Isolated ports से same subnet पर भी sniffing possible नहीं होगा</li>
        <li><strong className="text-white">MACsec (802.1AE):</strong> Layer 2 encryption — switch-to-switch traffic encrypt होगा</li>
        <li><strong className="text-white">Encrypted DNS:</strong> DoH/DoT enable करो endpoints पर — DNS query sniffing prevent होगी</li>
        <li><strong className="text-white">Certificate Pinning:</strong> Mobile apps में SSL pinning implement करो — MITM decrypt prevent होगा</li>
        <li><strong className="text-white">Zero Trust Architecture:</strong> Microsegmentation और mutual TLS — internal sniffing impact minimize होगा</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Packet analysis practice के लिए safe lab बनाओ — practice pcap files और virtual environment use करो।
      </p>
      <CodeBlock
        title="Practice Lab"
        code={`# Practice pcap files download करो:
# - Wireshark Sample Captures: wiki.wireshark.org/SampleCaptures
# - malware-traffic-analysis.net
# - NETRESEC pcap files
# - CTF challenges

# Basic practice:
# 1. tshark से capture करो:
sudo tshark -i wlan0 -w practice.pcap -a duration:60

# 2. Filters apply करो:
tshark -r practice.pcap -Y "http"
tshark -r practice.pcap -Y "dns"

# 3. Statistics निकालो:
tshark -r practice.pcap -z conv,ip -q
tshark -r practice.pcap -z io,phs -q

# 4. Follow streams:
tshark -r practice.pcap -z follow,tcp,ascii,0

# 5. Export data:
tshark -r practice.pcap -T fields -e ip.src -e ip.dst -e http.host > output.csv

# CTF practice:
# - picoCTF network challenges
# - OverTheWire bandit
# - TryHackMe Wireshark rooms`}
      />

      <h2>Performance Tuning</h2>
      <p>
        बड़े networks पर packet capture memory और disk space consume करता है। Proper tuning से performance improve होती है और data loss avoid होता है। Capture ring buffer, filter optimization, और storage management ज़रूरी हैं।
      </p>
      <CodeBlock
        title="Performance Optimization"
        code={`# Ring buffer — disk space control के लिए:
# 10 files × 100MB each = 1GB max storage
tshark -i eth0 -b filesize:100000 -b files:10 -w capture.pcap

# Capture filter से irrelevant packets skip करो:
# सिर्फ HTTP traffic:
tshark -i eth0 -f "tcp port 80" -w http_only.pcap

# Buffer size increase करो high traffic पर:
tshark -i eth0 -B 10 -w capture.pcap

# Snap length limit करो — headers only capture करो:
tshark -i eth0 -s 128 -w headers_only.pcap

# Multiple interfaces simultaneously:
tshark -i eth0 -i wlan0 -w multi_iface.pcap

# Compress on-the-fly:
tshark -i eth0 -w - | gzip > capture.pcap.gz`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        Advanced tshark usage — custom fields, expert info, conversation matrix, और malware traffic analysis।
      </p>
      <CodeBlock
        title="Advanced tshark Usage"
        code={`# Custom field extraction:
tshark -r capture.pcap -T fields -E separator="|" -e ip.src -e ip.dst -e tcp.srcport -e tcp.dstport -e http.host -e http.request.uri

# Expert info (errors, warnings, notes):
tshark -r capture.pcap -z expert -q

# Protocol hierarchy (complete):
tshark -r capture.pcap -z io,phs -q

# Conversation matrix:
tshark -r capture.pcap -z conv,ip,tcp -q

# HTTP request/response matching:
tshark -r capture.pcap -Y "http.request || http.response" -T fields -e http.request.method -e http.request.uri -e http.response.code

# Time-based analysis:
tshark -r capture.pcap -z io,stat,10,"http","dns","tcp" -q

# Malware traffic analysis:
tshark -r suspicious.pcap -Y "dns" -T fields -e dns.qry.name | sort -u
tshark -r suspicious.pcap -Y "http.request" -T fields -e http.host -e http.request.uri
tshark -r suspicious.pcap -Y "ip.addr != 192.168.1.0/24" -z conv,ip -q

# JA3 fingerprinting:
tshark -r capture.pcap -Y "tls.handshake.type == 1" -T fields -e tls.handshake.ja3

# GeoIP enrichment (with MaxMind DB):
tshark -r capture.pcap -T fields -e ip.src -e ip.dst -e ip.geoip.src_country -e ip.geoip.dst_country`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Wireshark और tshark में क्या फ़र्क है?', a: 'Wireshark GUI version है, tshark CLI version। दोनों same engine use करते हैं। Nethunter पर tshark use करो।' },
          { q: 'क्या encrypted traffic देख सकते हैं?', a: 'SSLKEYLOGFILE या private key से — हाँ। बिना key के सिर्फ metadata दिखेगा (IP, port, timing)।' },
          { q: 'Monitor mode क्यों ज़रूरी है WiFi के लिए?', a: 'Normal mode में सिर्फ अपने AP का traffic दिखता है। Monitor mode में सभी nearby WiFi packets capture होते हैं।' },
          { q: 'Display filter और capture filter में क्या फ़र्क है?', a: 'Capture filter (BPF) capture के समय लगता है — packets रोकता है। Display filter बाद में लगता है — packets display करता है।' },
          { q: 'बड़ी pcap files कैसे handle करें?', a: 'Ring buffer use करो, capture filter से size कम करो, या editcap से file split करो।' },
          { q: 'VoIP calls सुन सकते हैं?', a: 'Wireshark GUI में Telephony > VoIP Calls से audio extract और play कर सकते हो। tshark में सिर्फ metadata मिलता है।' },
          { q: 'क्या wireless packets capture कर सकते हैं?', a: 'हाँ, monitor mode interface के साथ। airmon-ng start wlan0 से enable करो, फिर tshark -i wlan0mon से capture करो।' },
          { q: 'tshark से files extract कर सकते हैं?', a: 'Wireshark GUI से File > Export Objects > HTTP/TFTP/IMF/SMB से files extract कर सकते हो। tshark में --export-objects option use करो।' },
          { q: 'Wireshark कितना RAM use करता है?', a: 'Large captures में 2-4GB RAM use हो सकता है। Ring buffer और capture filters से memory control करो। 64-bit version use करो — 32-bit में 2GB limit है।' },
          { q: 'क्या Bluetooth packets capture कर सकते हैं?', a: 'हाँ, Ubertooth या compatible Bluetooth adapter से। Wireshark BT HCI, L2CAP, RFCOMM protocols dissect कर सकता है। Linux पर btmon + Wireshark combination use करो।' },
          { q: 'Custom dissectors कैसे बनाएं?', a: 'Lua scripting से custom protocol dissectors बना सकते हो। Tools > Lua > Evaluate में test करो। Wireshark plugin directory में .lua file place करो। Wireshark documentation में Lua API reference available है।' },
          { q: 'Encrypted DNS (DoH/DoT) analyze कर सकते हैं?', a: 'DoH (DNS over HTTPS) decrypt करना difficult है — browser key log से possible है। DoT (DNS over TLS) port 853 पर capture करो — metadata दिखेगा। Decryption के बिना सिर्फ timing analysis possible है।' },
          { q: 'Remote capture कैसे करें?', a: 'SSH tunnel से: ssh user@remote "tcpdump -w -" | wireshark -k -i -। rpcapd daemon भी use कर सकते हो — remote host पर rpcapd start करो, Wireshark में rpcap://remote:2002 से connect करो।' },
          { q: 'pcap files merge कैसे करें?', a: 'mergecap tool use करो: mergecap -w merged.pcap file1.pcap file2.pcap file3.pcap। -a flag से time-based merge होता है। Wireshark GUI में भी File > Merge available है।' },
          { q: 'क्या tshark output JSON format में ले सकते हैं?', a: 'हाँ, -T json flag use करो: tshark -r capture.pcap -T json। Specific fields: -T ek (Elasticsearch format) या -T jsonraw। JSON output scripting और automation के लिए ideal है।' },
          { q: 'IO graphs कैसे बनाएं CLI पर?', a: 'tshark -r capture.pcap -z io,stat,1 — हर second packet count मिलेगा। -z io,stat,10,"http","dns" से protocol-wise statistics। Output CSV में redirect करके Excel/Python से graph बना सकते हो।' },
          { q: 'Expert info levels क्या हैं?', a: 'Chat (normal events), Note (unusual), Warning (potential problem), Error (serious problem)। Red errors typically malformed packets indicate करते हैं। Yellow warnings network issues suggest करते हैं। tshark -z expert -q से CLI पर देख सकते हो।' },
          { q: 'Capture rotation कैसे setup करें?', a: 'tshark -i eth0 -b filesize:100000 -b files:10 -w capture.pcap — 10 files × 100MB ring buffer। -b interval:3600 से hourly rotation। -b duration:86400 से daily rotation।' },
          { q: 'SSLKEYLOGFILE कैसे setup करें?', a: 'Firefox/Chrome में: export SSLKEYLOGFILE=/tmp/keys.log। Browser restart करो। Wireshark में: Edit > Preferences > Protocols > TLS > (Pre)-Master-Secret log filename में path डालो। Encrypted traffic decrypt हो जाएगा।' },
          { q: 'Network latency measure कैसे करें?', a: 'tshark -r capture.pcap -z conv,tcp -q से TCP stream stats देखो। IO graphs में time delta plot करो। Expert info में retransmissions check करो — high retransmission rate = high latency/loss।' },
          { q: 'Capture file format कौन सा best है?', a: 'pcapng (default) best है — metadata, interface info, multiple captures support करता है। pcap older format है — compatibility के लिए use करो। pcapng से pcap convert: editcap -F pcap input.pcapng output.pcap' },
          { q: 'क्या Wireshark IPv6 analyze कर सकता है?', a: 'हाँ, पूरा IPv6 support है — ICMPv6, NDP, DHCPv6, OSPFv3 सब dissect होते हैं। Display filter: ipv6, ipv6.addr, ipv6.nxt। IPv6 transition mechanisms (6to4, Teredo) भी support हैं।' },
          { q: ' coloring rules customize कैसे करें?', a: 'View > Coloring Rules में custom rules बना सकते हो। Example: http.response.code >= 400 → red background। Rules priority-based apply होती हैं। अलग-अलग profiles save कर सकते हो।' },
          { q: 'tshark output Python में कैसे parse करें?', a: 'subprocess से tshark run करो capture_output=True के साथ। -T json output को json.loads() से parse करो। -T fields -E separator="," से CSV output भी ले सकते हो pandas से parse करने के लिए।' },
          { q: 'Wireshark profiles क्या हैं?', a: 'Profiles से different analysis configurations save कर सकते हो — column layouts, coloring rules, filter buttons, display settings सब। Edit > Configuration Profiles में create करो। Security analysis, network troubleshooting, VoIP debugging — अलग profiles बनाओ।' },
          { q: 'Packet comments कैसे add करें?', a: 'Right-click packet > Packet Comment — comment pcapng file में save होता है। Analyze > Expert Information में भी notes add कर सकते हो। Team collaboration के लिए useful है — investigation context preserve रहता है।' },
          { q: 'Wireshark keyboard shortcuts कौन से important हैं?', a: 'Ctrl+K start capture, Ctrl+E stop, Ctrl+F find, Ctrl+G go to packet, Ctrl+Mark packet mark करता है, Enter packet expand/collapse। Display filter toolbar पर Ctrl+Shift+D से display filter expression builder open होता है।' },
          { q: 'Decryption keys manage कैसे करें?', a: 'RSA keys: Edit > Preferences > Protocols > TLS > RSA keys list में add करो। Pre-shared keys और SSLKEYLOGFILE दोनों support हैं। Per-session keys assign कर सकते हो — IP, port, protocol specify करके।' },
          { q: 'Wireless 802.11 capture कैसे करें?', a: 'Monitor mode interface चाहिए: airmon-ng start wlan0। Wireshark में wlan0mon interface select करो। Channel hopping: Edit > Preferences > IEEE 802.11 > Channel set करो। WPA2 key add करो: Edit > Preferences > Protocols > IEEE 802.11 > Decryption keys में।' },
          { q: 'Display filter syntax क्या है?', a: 'Protocol.field operator value — जैसे http.request.method == "GET", ip.addr == 192.168.1.1, tcp.port == 80। Logical operators: and, or, not। Parentheses group कर सकते हो। Expression button से GUI filter builder भी available है।' },
          { q: 'Packet length filter कैसे लगाएं?', a: 'frame.len > 1000 — बड़े packets filter होंगे। tcp.len > 0 — data-carrying TCP packets। udp.length — UDP packet size। Large packet analysis के लिए useful — file transfers, data exfiltration detect करने में।' },
          { q: 'Expert info levels क्या हैं?', a: 'Chat (normal events), Note (unusual), Warning (potential problem), Error (serious problem)। Red errors typically malformed packets indicate करते हैं। Yellow warnings network issues suggest करते हैं। tshark -z expert -q से CLI पर देख सकते हो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        एक corporate network में employees के devices randomly disconnect हो रहे थे। IT team weeks तक problem नहीं ढूंढ पाई। जब Wireshark से network capture किया गया तो पता चला कि एक faulty network switch duplicate ARP replies भेज रहा था जो ARP table corruption cause कर रहा था। Wireshark के expert info feature ने automatically इस anomaly flag कर दिया।
      </p>
      <p>
        Incident response team को एक malware infection investigate करना था। tshark से DNS queries analyze कीं — suspicious domain names मिले जो known C2 servers से match हो रहे थे। HTTP export objects feature से malicious payloads extract हुए। JA3 fingerprinting से malware family identify हुई। बिना Wireshark के यह investigation days लेती, लेकिन tshark automation से hours में complete हुई।
      </p>
      <p>
        VoIP quality issues debug करने के लिए Wireshark का RTP analysis use किया गया। Packet loss, jitter, और latency measurements से root cause पता चला — overloaded VoIP server था। Telephony &gt; RTP Streams feature से real-time audio quality metrics मिले जिनसे management को convincingly problem present किया गया।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        tshark को scripting languages और security tools के साथ integrate करके powerful automated analysis pipelines बना सकते हो। Python, Bash, और Zeek/Suricata के साथ combination बहुत effective है।
      </p>
      <CodeBlock
        title="tshark + Python Integration"
        code={`# Python script — automated pcap analysis:
import subprocess, json

def analyze_pcap(pcap_file):
    # DNS queries extract करो
    dns_cmd = ['tshark', '-r', pcap_file, '-Y', 'dns',
               '-T', 'fields', '-e', 'dns.qry.name']
    dns_result = subprocess.run(dns_cmd, capture_output=True, text=True)
    domains = set(dns_result.stdout.strip().split('\\n'))

    # HTTP hosts extract करो
    http_cmd = ['tshark', '-r', pcap_file, '-Y', 'http.request',
                '-T', 'fields', '-e', 'http.host']
    http_result = subprocess.run(http_cmd, capture_output=True, text=True)
    hosts = set(http_result.stdout.strip().split('\\n'))

    # Results:
    print(f"Unique DNS domains: {len(domains)}")
    print(f"Unique HTTP hosts: {len(hosts)}")
    return {'dns': list(domains), 'http': list(hosts)}

analyze_pcap('capture.pcap')`}
      />
      <CodeBlock
        title="tshark + Suricata Integration"
        code={`# Suricata alerts correlate करो tshark capture से:
# Step 1: tshark capture start करो
tshark -i eth0 -w /tmp/capture.pcap -a duration:3600 &

# Step 2: Suricata run करो same interface पर
suricata -c /etc/suricata/suricata.yaml -i eth0 &

# Step 3: Alerts के timestamps match करो pcap से
# Alert timestamp मिलने पर pcap slice करो:
editcap -A "2024-01-15 10:30:00" -B "2024-01-15 10:35:00" \\
  /tmp/capture.pcap incident.pcap

# Step 4: Incident pcap analyze करो
tshark -r incident.pcap -Y "ip.addr == suspicious_ip" -z conv,ip`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">tcpdump</td><td className="py-2 px-3">CLI packet capture</td><td className="py-2 px-3">Lightweight, fast, BPF filters</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">tshark</td><td className="py-2 px-3">CLI Wireshark</td><td className="py-2 px-3">Same engine, scriptable</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">NetworkMiner</td><td className="py-2 px-3">Network forensic analyzer</td><td className="py-2 px-3">File extraction, host identification</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Zeek (Bro)</td><td className="py-2 px-3">Network security monitor</td><td className="py-2 px-3">Scripting, log generation</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Snort</td><td className="py-2 px-3">Intrusion detection</td><td className="py-2 px-3">Real-time alerting, rules</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Suricata</td><td className="py-2 px-3">IDS/IPS</td><td className="py-2 px-3">Multi-threaded, EVE JSON output</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ngrep</td><td className="py-2 px-3">Network grep</td><td className="py-2 px-3">Pattern matching in packets</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">ettercap</td><td className="py-2 px-3">MITM framework</td><td className="py-2 px-3">ARP spoofing, packet manipulation</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>पहले broad capture करो, फिर filters लगाओ — missing packets avoid होंगे</li>
          <li>tshark commands याद रखो — Nethunter पर यही सबसे ज़्यादा काम आएगा</li>
          <li>SSLKEYLOGFILE set करो browser में — HTTPS traffic automatically decrypt हो जाएगी</li>
          <li>DNS queries से सबसे ज़्यादा intelligence मिलती है — कौन सी sites visit हो रही हैं</li>
          <li>Ring buffer use करो long captures के लिए — disk space भरने से बचोगे</li>
          <li>Expert info (tshark -z expert) से network problems automatically detect होते हैं</li>
          <li>Practice pcap files download करो — malware-traffic-analysis.net best resource है</li>
          <li>Custom columns बनाओ frequently used fields के लिए — analysis speed बढ़ जाएगी</li>
          <li>Wireshark profiles save करो अलग-अलग analysis types के लिए — network troubleshooting, security, VoIP</li>
          <li>Conversation filters (right-click {'>'} Conversation) से specific session isolate करो</li>
          <li>Protocol dissection customize करो — Analyze {'>'} Decode As से non-standard ports handle करो</li>
          <li> coloring rules use करो suspicious traffic visually highlight करने के लिए</li>
          <li>Statistics &gt; Endpoint List से top talkers identify करो quickly</li>
          <li>GeoIP database configure करो — country-level mapping automatically हो जाएगी</li>
          <li>Follow TCP/UDP Stream से complete conversation reconstruct करो ek click में</li>
          <li>Display filter macros बनाओ frequently used complex filters के लिए — time save होगा</li>
          <li>Export specified packets (File &gt; Export Specified Packets) से filtered subset save करो</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Wireshark/tshark एक powerful packet analyzer है। इसका इस्तेमाल केवल अपने नेटवर्क पर या authorized testing में ही करें। बिना अनुमति के packet capture करना illegal है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized network monitoring अपराध हो सकता है। केवल अपने लैब वातावरण में ही practice करें।
      </div>
    
      <h2>Wireshark ka Advanced Upyog aur Tips</h2>
      <p>Wireshark ek network security testing tool hai jiska sahi tarike se upyog karne ke liye kuch advanced concepts aur techniques samajhna zaroori hai. Is section mein hum Wireshark ke advanced features, best practices aur professional tips par baat karenge jo aapko ek better penetration tester banane mein madad karenge.</p>
      <p>Wireshark ke advanced features mein se ek hai iski customization capability. Aap tool ke behavior ko modify kar sakte hain specific testing requirements ke according. Iske liye configuration files, command-line flags aur environment variables ka combination use kiya jata hai.</p>

      <h3>Professional Tips Wireshark ke Liye</h3>
      <ul>
        <li><strong>Automation:</strong> Wireshark ko shell scripts mein integrate karke repetitive tasks ko automate karein. Isse aapka time bachega aur efficiency badhegi.</li>
        <li><strong>Integration:</strong> Wireshark ko other Kali Linux tools ke saath combine karke comprehensive security assessments karein. Multiple tools ka data cross-reference karke better insights milte hain.</li>
        <li><strong>Reporting:</strong> Wireshark ke output ko structured format mein save karein aur professional penetration testing reports banane ke liye use karein.</li>
        <li><strong>Continuous Learning:</strong> Wireshark ke official documentation, GitHub repository aur community forums ko regularly check karte rahein naye features aur techniques ke liye.</li>
        <li><strong>Ethical Practices:</strong> Hamesha responsible disclosure follow karein aur kabhi bhi unauthorized targets par test na karein.</li>
      </ul>

      <h3>Wireshark ke Sath Common Mistakes</h3>
      <p>Wireshark ka upyog karte waqt kuch common mistakes hoti hain jinse beginners ko bachna chahiye. Sabse common mistake hai bina proper authorization ke testing karna. Doosri common mistake hai results ko blindly trust karna bina manual verification ke. Third mistake hai tool ko update na karna jiski vajah se naye vulnerabilities detect nahi hoti.</p>
      <p>Wireshark ke effective upyog ke liye patience aur practice dono zaroori hain. Pehle virtual labs mein practice karein, documentation padhein, aur phir real-world assessments mein iska upyog karein. Hamesha updated version use karein aur best practices follow karein.</p>

      <h3>Wireshark ke Sath Career Growth</h3>
      <p>Wireshark jaise network security testing tools ki knowledge aapke cybersecurity career mein bahut valuable hai. Companies network security professionals ko hire karti hain jo in tools ka effective upyog kar sake. Wireshark ki expertise aapko bug bounty programs, penetration testing roles aur security auditor positions mein advantage deti hai.</p>
      <p>Network security testing skills develop karne ke liye Wireshark ek starting point ho sakta hai. Iske baad aap more advanced tools aur techniques explore kar sakte hain. OSCP, CEH aur other cybersecurity certifications network security concepts ko cover karte hain aur Wireshark in concepts ko practical way mein samajhne mein madad karta hai.</p>

      <div className="info-box">
        💡 <strong>Pro Tip:</strong> Wireshark ke saath practical experience lene ke liye TryHackMe, HackTheBox aur VulnHub jaise platforms ka use karein. Ye platforms safe aur legal environment provide karte hain jahan aap apni skills practice kar sakte hain bina kisi legal concern ke.
      </div>

    
      <h2>Wireshark का उन्नत उपयोग और सुझाव</h2>
      <p>Wireshark एक network सुरक्षा परीक्षण टूल है जिसका सही तरीके से उपयोग करने के लिए कुछ उन्नत अवधारणाओं और तकनीकों को समझना ज़रूरी है। इस अनुभाग में हम Wireshark के उन्नत सुविधाओं, सर्वोत्तम अभ्यासों और पेशेवर सुझावों पर बात करेंगे जो आपको एक बेहतर पेनिट्रेशन टेस्टर बनने में मदद करेंगे।</p>
      <p>Wireshark की उन्नत विशेषताओं में से एक है इसकी अनुकूलन क्षमता। आप टूल के व्यवहार को संशोधित कर सकते हैं विशिष्ट परीक्षण आवश्यकताओं के अनुसार। इसके लिए कॉन्फ़िगरेशन फ़ाइलों, कमांड-लाइन फ्लैग और पर्यावरण चरों का संयोजन उपयोग किया जाता है। उन्नत उपयोगकर्ता कस्टम स्क्रिप्ट और प्लगइन्स भी बना सकते हैं।</p>

      <h3>पेशेवर सुझाव Wireshark के लिए</h3>
      <ul>
        <li><strong>ऑटोमेशन:</strong> Wireshark को शेल स्क्रिप्ट में इंटीग्रेट करके पुनरावर्ती कार्यों को स्वचालित करें। इससे आपका समय बचेगा और दक्षता बढ़ेगी।</li>
        <li><strong>एकीकरण:</strong> Wireshark को अन्य काली लिनक्स टूल्स के साथ जोड़कर व्यापक सुरक्षा मूल्यांकन करें। कई टूल्स के डेटा को क्रॉस-रेफरेंस करके बेहतर जानकारी मिलती है।</li>
        <li><strong>रिपोर्टिंग:</strong> Wireshark के आउटपुट को संरचित फॉर्मेट में सहेजें और पेशेवर पेनिट्रेशन टेस्टिंग रिपोर्ट बनाने के लिए उपयोग करें।</li>
        <li><strong>निरंतर सीखना:</strong> Wireshark के आधिकारिक दस्तावेज़ीकरण, GitHub रिपॉजिटरी और सामुदायिक फोरम को नियमित रूप से चेक करते रहें नई सुविधाओं और तकनीकों के लिए।</li>
      </ul>

      <h3>Wireshark के साथ सामान्य गलतियाँ</h3>
      <p>Wireshark का उपयोग करते समय कुछ सामान्य गलतियाँ होती हैं जिनसे शुरुआती लोगों को बचना चाहिए। सबसे आम गलती है बिना उचित प्राधिकरण के परीक्षण करना। दूसरी आम गलती है परिणामों को आंख मूंदकर विश्वास करना बिना मैन्युअल सत्यापन के। तीसरी गलती है टूल को अपडेट न करना जिसके कारण नई कमजोरियां पता नहीं चलतीं।</p>
      <p>Wireshark के प्रभावी उपयोग के लिए धैर्य और अभ्यास दोनों ज़रूरी हैं। पहले वर्चुअल लैब्स में अभ्यास करें, दस्तावेज़ीकरण पढ़ें, और फिर वास्तविक दुनिया के मूल्यांकनों में इसका उपयोग करें। हमेशा अपडेटेड वर्जन उपयोग करें और सर्वोत्तम अभ्यासों का पालन करें।</p>

      <h3>Wireshark के साथ करियर विकास</h3>
      <p>Wireshark जैसे network सुरक्षा परीक्षण टूल्स का ज्ञान आपके साइबर सुरक्षा करियर में बहुत मूल्यवान है। कंपनियां network सुरक्षा पेशेवरों को काम पर रखती हैं जो इन टूल्स का प्रभावी उपयोग कर सकें। Wireshark की विशेषज्ञता आपको बग बाउंटी प्रोग्राम, पेनिट्रेशन टेस्टिंग भूमिकाओं और सुरक्षा ऑडिटर पदों में लाभ देती है।</p>
      <p>Network सुरक्षा परीक्षण कौशल विकसित करने के लिए Wireshark एक शुरुआती बिंदु हो सकता है। इसके बाद आप और अधिक उन्नत टूल्स और तकनीकों का पता लगा सकते हैं। OSCP, CEH और अन्य साइबर सुरक्षा प्रमाणपत्र इन अवधारणाओं को व्यावहारिक तरीके से समझने में मदद करते हैं।</p>

      <div className="info-box">
        💡 <strong>विशेषज्ञ सुझाव:</strong> व्यावहारिक अनुभव लेने के लिए TryHackMe, HackTheBox और VulnHub जैसे प्लेटफॉर्म का उपयोग करें। ये प्लेटफॉर्म सुरक्षित और कानूनी वातावरण प्रदान करते हैं जहां आप बिना किसी कानूनी चिंता के अपने कौशल का अभ्यास कर सकते हैं।
      </div>

    
      

    
      <h2>महत्वपूर्ण नोट्स और निष्कर्ष</h2>
      <p>Wireshark एक शक्तिशाली सुरक्षा परीक्षण उपकरण है जो काली लिनक्स में उपलब्ध है। इस टूल का सही तरीके से उपयोग करके आप अपने नेटवर्क और सिस्टम की सुरक्षा को मजबूत कर सकते हैं। Wireshark का नियमित रूप से उपयोग करने से आप नई कमजोरियों को पहचान सकते हैं और उन्हें समय रहते ठीक कर सकते हैं। यह टूल विशेष रूप से सुरक्षा मूल्यांकन के लिए डिज़ाइन किया गया है और नियमित अभ्यास आवश्यक है।</p>
      <p>Wireshark के साथ काम करते समय हमेशा निम्नलिखित बातों का ध्यान रखें:</p>
      <ul>
        <li>हमेशा अद्यतन संस्करण का उपयोग करें ताकि नवीनतम सुविधाओं और सुरक्षा पैच का लाभ मिल सके</li>
        <li>परीक्षण से पहले लक्ष्य प्रणाली के मालिक से स्पष्ट अनुमति प्राप्त करें</li>
        <li>परिणामों का सावधानीपूर्वक विश्लेषण करें और गलत सकारात्मक परिणामों की पहचान करें</li>
        <li>सुरक्षा कमजोरियों की खोज करने पर जिम्मेदार प्रकटीकरण का पालन करें</li>
        <li>अपने कौशल को लगातार बेहतर बनाने के लिए नियमित अभ्यास करते रहें</li>
        <li>दस्तावेज़ीकरण और सामुदायिक मंचों पर सक्रिय रहें</li>
        <li>विभिन्न परिदृश्यों में परीक्षण करें ताकि क्षमताओं की पूरी समझ हो सके</li>
        <li>अन्य सुरक्षा उपकरणों के साथ एकीकरण करके अधिक व्यापक मूल्यांकन करें</li>
      </ul>
      <p>साइबर सुरक्षा के क्षेत्र में Wireshark जैसे उपकरणों का ज्ञान होना बहुत महत्वपूर्ण है। यह न केवल आपको सुरक्षा कमजोरियों की पहचान करने में मदद करता है बल्कि आपको एक जिम्मेदार सुरक्षा पेशेवर बनने में भी सहायता करता है। TryHackMe, HackTheBox और VulnHub जैसे प्लेटफॉर्म सुरक्षित अभ्यास वातावरण प्रदान करते हैं। नियमित अभ्यास से आप सभी विशेषताओं में महारत हासिल कर सकते हैं।</p>
      <p>साइबर सुरक्षा एक सतत सीखने की प्रक्रिया है। नई तकनीकों, उपकरणों और खतरों के बारे में अपडेट रहना जरूरी है। विभिन्न उपकरणों और तकनीकों का ज्ञान आपको एक बेहतर सुरक्षा पेशेवर बनाएगा। साइबर सुरक्षा समुदाय में सक्रिय रहें, ज्ञान साझा करें और दूसरों से सीखते रहें। यह क्षेत्र तेजी से बदलता है और निरंतर सीखने की आवश्यकता होती है। अपडेटेड रहने के लिए सुरक्षा ब्लॉग, समाचार और शोध पत्र पढ़ते रहें।</p>

      <div className="warning-box">
        ⚠️ <strong>अंतिम चेतावनी:</strong> इस टूल का उपयोग केवल शैक्षिक और अधिकृत सुरक्षा परीक्षण के लिए करें। दुरुपयोग गंभीर कानूनी परिणामों का कारण बन सकता है। हमेशा नैतिक दिशानिर्देशों का पालन करें और दूसरों की गोपनीयता का सम्मान करें। साइबर सुरक्षा एक जिम्मेदारी है, इसे गंभीरता से लें और अपने ज्ञान का उपयोग सकारात्मक बदलाव लाने के लिए करें।
      </div>

    </TutorialLayout>
  )
}
