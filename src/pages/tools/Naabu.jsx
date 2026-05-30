import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Naabu() {
  return (
    <TutorialLayout
      title="naabu"
      subtitle="ProjectDiscovery का तेज़ पोर्ट स्कैनर — SYN, TCP, UDP स्कैन सपोर्ट"
      icon="⚡"
      prev={{ to: '/tool/trivy', label: 'trivy' }}
      next={{ to: '/tool/nuclei', label: 'nuclei' }}
    >
      <h2>What is Naabu?</h2>
      <p>
        Naabu ProjectDiscovery टीम द्वारा विकसित एक उच्च-प्रदर्शन पोर्ट स्कैनर है जो Go भाषा में लिखा गया है। यह टूल नेटवर्क पोर्ट्स को बहुत तेज़ी से स्कैन करने के लिए डिज़ाइन किया गया है और SYN scan, CONNECT scan, और UDP scan जैसी विभिन्न स्कैनिंग तकनीकों को सपोर्ट करता है। यह टूल विशेष रूप से bug bounty hunters, penetration testers, और red team operators के लिए बनाया गया है जिन्हें तेज़ और विश्वसनीय पोर्ट स्कैनिंग की आवश्यकता होती है।
      </p>
      <p>
        Naabu की सबसे बड़ी खासियत इसकी गति है — यह Nmap की तुलना में कई गुना तेज़ है। Go की concurrency का फायदा उठाकर यह हज़ारों पोर्ट्स को पैरेलल में स्कैन करता है। यह टूल silent mode support करता है जिससे इसे pipeline में आसानी से integrate किया जा सकता है — subfinder, httpx, nuclei, और katana जैसे अन्य ProjectDiscovery टूल्स के साथ। यह Go modules और cross-platform compilation को सपोर्ट करता है।
      </p>
      <p>
        Naabu का आर्किटेक्चर मॉड्यूलर है — यह अलग-अलग स्कैनिंग इंजन्स का उपयोग करता है। SYN scan engine raw sockets का उपयोग करता है, CONNECT engine standard TCP connections बनाता है, और UDP engine ICMP unreachable messages को analyze करता है। यह टूल बहुत कम memory और CPU का उपयोग करता है जिससे यह resource-constrained environments में भी चल सकता है। Kali Linux, Parrot OS, और अन्य penetration testing distributions में यह प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        Naabu का डिज़ाइन दर्शन यह है कि पोर्ट स्कैनिंग सरल, तेज़, और विश्वसनीय होनी चाहिए। यह टूल complex configuration की आवश्यकता नहीं रखता — बस target दो और यह open ports ढूंढ लेगा। यह JSON, CSV, और text output formats को सपोर्ट करता है जिससे results को अन्य टूल्स में आसानी से parse किया जा सकता है। ProjectDiscovery ecosystem का हिस्सा होने के कारण यह अन्य टूल्स के साथ seamlessly integrate होता है।
      </p>
      <p>
        Naabu bug bounty automation में बहुत popular है। जब आपको हज़ारों subdomains के open ports ढूंढने हों, तो Nmap बहुत धीमा हो जाता है। Naabu इस काम को मिनटों में कर देता है। यह टूल continuous integration (CI/CD) pipelines में भी integrate किया जा सकता है जिससे automated security testing possible होती है। GitHub पर इसके 2,500+ stars हैं और active community support है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Naabu केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए उपयोग करें। बिना अनुमति के पोर्ट स्कैनिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत पोर्ट स्कैनिंग अपराध हो सकता है। साइबर अपराध गंभीर परिणामों का कारण बन सकता है — जुर्माना और जेल दोनों हो सकते हैं। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of Naabu</h2>
      <p>
        Naabu को ProjectDiscovery टीम ने 2020 में विकसित किया था। ProjectDiscovery एक साइबर सिक्योरिटी कंपनी है जो nuclei, subfinder, httpx, katana, और uncover जैसे लोकप्रिय ओपन सोर्स टूल्स बनाती है। इस टीम का मिशन सिक्योरिटी टेस्टिंग को ऑटोमेट और सरल बनाना है। Naabu इसी मिशन का हिस्सा है।
      </p>
      <p>
        Naabu से पहले पोर्ट स्कैनिंग के लिए Nmap, Masscan, और Unicornscan जैसे टूल्स इस्तेमाल होते थे। लेकिन इनमें कुछ कमियां थीं — Nmap धीमा था, Masscan बहुत loud था, और Unicornscan में pipeline support नहीं था। ProjectDiscovery ने इन कमियों को दूर करने के लिए Naabu बनाया — तेज़, silent, और pipeline-friendly।
      </p>
      <p>
        Naabu v2 में कई महत्वपूर्ण सुधार किए गए — UDP scan support, बेहतर error handling, और JSON output जोड़ा गया। आज Naabu ProjectDiscovery ecosystem का अभिन्न हिस्सा है और recon automation में सबसे popular पोर्ट स्कैनर है। यह Go modules का उपयोग करता है जिससे installation और updates बहुत आसान हैं।
      </p>

      <h2>How Naabu Works?</h2>
      <p>
        Naabu विभिन्न प्रकार की स्कैनिंग तकनीकों का उपयोग करके open ports की पहचान करता है। यह टूल Go की concurrency capabilities का पूरा फायदा उठाता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">SYN Scan Engine:</strong> Raw sockets का उपयोग करके half-open scan करता है। TCP SYN packet भेजता है — SYN-ACK आया तो port open, RST आया तो closed। Connection complete नहीं होता</li>
        <li><strong className="text-white">CONNECT Scan Engine:</strong> Standard TCP connections बनाता है। Full handshake complete होता है। Root privileges नहीं चाहिए लेकिन stealthy नहीं है</li>
        <li><strong className="text-white">UDP Scan Engine:</strong> UDP packets भेजता है और ICMP unreachable messages analyze करता है। DNS, SNMP, TFTP जैसे UDP services detect करता है</li>
        <li><strong className="text-white">Host Discovery:</strong> Ping sweep करके alive hosts पहचानता है। ICMP, TCP SYN, और ACK ping methods support करता है</li>
        <li><strong className="text-white">Parallel Processing:</strong> Go routines के ज़रिए हज़ारों connections एक साथ handle करता है। Configurable concurrency (-c flag)</li>
        <li><strong className="text-white">Rate Limiting:</strong> Packets per second control करके firewall evasion possible है। -rate flag से customize कर सकते हो</li>
        <li><strong className="text-white">Port Verification:</strong> Open ports को verify करता है false positives कम करने के लिए। -verify flag से enable होता है</li>
        <li><strong className="text-white">Output Engine:</strong> Text, JSON, CSV formats में results output करता है। -silent flag से pipe-friendly output देता है</li>
      </ul>
      <p>
        Naabu का scan process इस तरह काम करता है — पहले target resolve होता है (DNS lookup), फिर host discovery होता है (ping), फिर specified ports scan होते हैं, और finally results output होते हैं। यह पूरा process Go routines के ज़रिए parallel चलता है जिससे बहुत तेज़ results मिलते हैं।
      </p>

      <h2>Installation</h2>
      <p>
        Naabu को कई तरीकों से इंस्टॉल कर सकते हैं। Go install सबसे recommended तरीका है क्योंकि इससे हमेशा latest version मिलता है।
      </p>
      <CodeBlock
        title="Naabu Installation"
        code={`# Go से इंस्टॉल (सबसे recommended):
go install -v github.com/projectdiscovery/naabu/v2/cmd/naabu@latest

# वर्जन चेक:
naabu -version

# apt से (Kali Linux):
sudo apt update
sudo apt install naabu

# Docker से:
docker pull projectdiscovery/naabu:latest
docker run -it projectdiscovery/naabu:latest -host target.com

# Binary download:
# GitHub releases से download करें
# https://github.com/projectdiscovery/naabu/releases

# Go installation verify:
go version
# Go 1.17+ चाहिए

# PATH में Go binaries add करें:
export PATH=$PATH:$(go env GOPATH)/bin
echo 'export PATH=$PATH:$(go env GOPATH)/bin' >> ~/.bashrc`}
      />

      <h2>Basic Usage</h2>
      <p>
        Naabu का बेसिक इस्तेमाल बहुत आसान है — बस target host दो और यह open ports ढूंढ लेगा।
      </p>
      <CodeBlock
        title="Naabu Basic Commands"
        code={`# Basic port scan:
naabu -host target.com

# IP address scan:
naabu -host 192.168.1.1

# Specific ports:
naabu -host target.com -p 80,443,8080

# Port range:
naabu -host target.com -p 1-1000

# Top 100 ports:
naabu -host target.com -top-ports 100

# Top 1000 ports:
naabu -host target.com -top-ports 1000

# Output file में save:
naabu -host target.com -o ports.txt

# Silent mode (pipeline use):
naabu -host target.com -silent

# Verbose output:
naabu -host target.com -v

# All 65535 ports:
naabu -host target.com -p -`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-host</td><td className="py-2 px-3">Target host (IP ya domain)</td><td className="py-2 px-3 font-mono text-xs">-host target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-list</td><td className="py-2 px-3">Target list file</td><td className="py-2 px-3 font-mono text-xs">-list targets.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">Specific ports ya range</td><td className="py-2 px-3 font-mono text-xs">-p 80,443,8080</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-top-ports</td><td className="py-2 px-3">Top N ports scan करें</td><td className="py-2 px-3 font-mono text-xs">-top-ports 1000</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-sS</td><td className="py-2 px-3">SYN scan (root required)</td><td className="py-2 px-3 font-mono text-xs">sudo naabu -sS</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-sC</td><td className="py-2 px-3">CONNECT scan (no root)</td><td className="py-2 px-3 font-mono text-xs">naabu -sC</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-sU</td><td className="py-2 px-3">UDP scan</td><td className="py-2 px-3 font-mono text-xs">sudo naabu -sU</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c</td><td className="py-2 px-3">Parallel connections (default 25)</td><td className="py-2 px-3 font-mono text-xs">-c 50</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-rate</td><td className="py-2 px-3">Packets per second rate limit</td><td className="py-2 px-3 font-mono text-xs">-rate 1000</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-timeout</td><td className="py-2 px-3">Connection timeout (ms)</td><td className="py-2 px-3 font-mono text-xs">-timeout 500</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-retries</td><td className="py-2 px-3">Retry count (default 1)</td><td className="py-2 px-3 font-mono text-xs">-retries 3</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-verify</td><td className="py-2 px-3">Open ports verify करें</td><td className="py-2 px-3 font-mono text-xs">-verify</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-silent</td><td className="py-2 px-3">Silent mode (pipeline friendly)</td><td className="py-2 px-3 font-mono text-xs">-silent</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o</td><td className="py-2 px-3">Output file</td><td className="py-2 px-3 font-mono text-xs">-o results.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-json</td><td className="py-2 px-3">JSON output format</td><td className="py-2 px-3 font-mono text-xs">-json -o results.json</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-exclude-ports</td><td className="py-2 px-3">Specific ports exclude करें</td><td className="py-2 px-3 font-mono text-xs">-exclude-ports 80,443</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scan Types Detail</h2>

      <h3>SYN Scan (Default)</h3>
      <p>
        SYN scan सबसे fast और common scan type है। यह TCP SYN packet भेजता है — अगर SYN-ACK आया तो port open है, RST आया तो port closed है। Connection complete नहीं होता इसलिए यह stealthy है।
      </p>
      <CodeBlock
        title="SYN Scan"
        code={`# SYN scan (default, root required):
sudo naabu -host target.com -sS

# SYN scan with specific ports:
sudo naabu -host target.com -sS -p 22,80,443,8080

# SYN scan output:
sudo naabu -host target.com -sS -o syn_results.txt

# Verbose SYN scan:
sudo naabu -host target.com -sS -v

# SYN scan with rate limiting:
sudo naabu -host target.com -sS -rate 500

# SYN scan with verification:
sudo naabu -host target.com -sS -verify`}
      />

      <h3>CONNECT Scan</h3>
      <p>
        CONNECT scan full TCP handshake करता है। Root privileges नहीं चाहिए लेकिन stealthy नहीं है। Firewall आसानी से detect कर लेता है।
      </p>
      <CodeBlock
        title="CONNECT Scan"
        code={`# CONNECT scan (root not required):
naabu -host target.com -sC

# Custom port range:
naabu -host target.com -sC -p 1-65535

# Quick top ports:
naabu -host target.com -sC -top-ports 1000

# CONNECT scan with output:
naabu -host target.com -sC -o connect_results.txt`}
      />

      <h3>UDP Scan</h3>
      <CodeBlock
        title="UDP Scan"
        code={`# UDP scan:
sudo naabu -host target.com -sU

# Specific UDP ports:
sudo naabu -host target.com -sU -p 53,67,68,69,123,161,162,500,514

# Combined TCP + UDP:
sudo naabu -host target.com -sS -sU -p 80,443,53,161

# UDP scan with verbose output:
sudo naabu -host target.com -sU -v -o udp_results.txt`}
      />

      <h2>Multiple Targets</h2>
      <CodeBlock
        title="Bulk Scanning"
        code={`# File se targets:
naabu -list targets.txt -o all_ports.txt

# Multiple hosts:
naabu -host 192.168.1.1,192.168.1.2,192.168.1.3

# CIDR range:
naabu -host 192.168.1.0/24 -o network_ports.txt

# Pipeline se (subfinder):
subfinder -d target.com -silent | naabu -silent

# httpx se alive check:
subfinder -d target.com -silent | naabu -silent | httpx -silent

# File se targets + output:
naabu -list live_hosts.txt -o open_ports.txt -silent

# Multiple CIDR ranges:
naabu -host 10.0.0.0/24,172.16.0.0/24 -top-ports 100`}
      />

      <h2>Recon Pipeline</h2>
      <p>
        Naabu अकेले use नहीं होता — यह recon pipeline का हिस्सा है। Subfinder से subdomains, Naabu से ports, Nuclei से vulnerabilities scan होते हैं।
      </p>
      <CodeBlock
        title="Full Automation Pipeline"
        code={`# Subfinder → Naabu → Nuclei pipeline:

# Step 1: Subdomains find करो:
subfinder -d target.com -silent > subs.txt

# Step 2: Open ports check करो:
naabu -list subs.txt -silent > ports.txt

# Step 3: Nuclei vulnerability scan:
nuclei -list ports.txt -o vulns.txt

# One-liner pipeline:
subfinder -d target.com -silent | naabu -silent | nuclei -silent

# httpx se alive hosts:
subfinder -d target.com -silent | httpx -silent | naabu -silent

# Full recon script:
#!/bin/bash
DOMAIN=$1
echo "[*] Finding subdomains for $DOMAIN..."
subfinder -d $DOMAIN -silent > subs.txt
echo "[*] Found $(wc -l < subs.txt) subdomains"

echo "[*] Scanning ports..."
naabu -list subs.txt -silent > ports.txt
echo "[*] Found $(wc -l < ports.txt) open ports"

echo "[*] Running vulnerability scan..."
nuclei -list ports.txt -o vulns.txt -silent
echo "[*] Results saved to vulns.txt"`}
      />

      <h2>Output Formats</h2>
      <CodeBlock
        title="Output Options"
        code={`# Simple text output:
naabu -host target.com -o ports.txt

# JSON output:
naabu -host target.com -json -o ports.json

# CSV output:
naabu -host target.com -csv -o ports.csv

# Silent output (pipe friendly):
naabu -host target.com -silent

# Append to file:
naabu -host target.com -oA results

# Output format (ip:port):
naabu -host target.com -silent
# Output: 192.168.1.1:80
# Output: 192.168.1.1:443

# JSON format example:
naabu -host target.com -json
# {"host":"target.com","ip":"93.184.216.34","port":80}
# {"host":"target.com","ip":"93.184.216.34","port":443}`}
      />

      <h2>Performance Tuning</h2>
      <CodeBlock
        title="Speed Optimization"
        code={`# Parallel connections बढ़ाओ:
naabu -host target.com -c 50

# Rate limit set करो (packets per second):
naabu -host target.com -rate 1000

# Timeout कम करो (fast networks):
naabu -host target.com -timeout 500

# Retries बढ़ाओ (unreliable networks):
naabu -host target.com -retries 3

# Top ports only (fast scan):
naabu -host target.com -top-ports 100

# Exclude unnecessary ports:
naabu -host target.com -exclude-ports 80,443

# Large network scan:
naabu -host 10.0.0.0/8 -c 100 -rate 5000 -top-ports 1000 -o results.txt

# Fastest possible scan:
sudo naabu -host target.com -sS -c 100 -rate 10000 -timeout 300 -top-ports 100`}
      />

      <h2>Service Identification with httpx</h2>
      <CodeBlock
        title="Service Fingerprinting"
        code={`# Naabu + httpx combo:
naabu -host target.com -silent | httpx -title -status -tech-detect

# Detailed output:
naabu -host target.com -silent | httpx -json -o detailed.json

# Only alive web services:
naabu -host target.com -silent | httpx -silent -mc 200

# With screenshot:
naabu -host target.com -silent | httpx -screenshot -o screenshots/

# Tech detection:
naabu -host target.com -silent | httpx -tech-detect -o tech.json`}
      />

      <h2>Scan Chaining</h2>
      <CodeBlock
        title="Multi-tool Pipeline"
        code={`# Full recon chain:
# 1. Subdomains
subfinder -d target.com -silent > subs.txt

# 2. Alive hosts
httpx -list subs.txt -silent > alive.txt

# 3. Port scan
naabu -list alive.txt -silent > ports.txt

# 4. Vulnerability scan
nuclei -list ports.txt -o vulns.txt

# 5. Directory scan
cat ports.txt | httpx | katana -jc -d 3 -silent > urls.txt

# 6. URL vulnerability scan
nuclei -list urls.txt -o url_vulns.txt

# One-liner full recon:
subfinder -d target.com -silent | httpx -silent | naabu -silent | nuclei -silent`}
      />

      <h2>Network Mapping</h2>
      <CodeBlock
        title="Internal Network Scan"
        code={`# Internal network port scan:
sudo naabu -host 192.168.1.0/24 -top-ports 100 -o internal.txt

# Specific service ports:
sudo naabu -host 192.168.1.0/24 -p 22,80,443,3389,5900 -o services.txt

# Network services map:
#!/bin/bash
for port in 22 80 443 3306 3389 5900 8080; do
    echo "[*] Scanning port $port..."
    naabu -host 192.168.1.0/24 -p $port -silent
done

# WiFi network scan:
sudo naabu -host 192.168.0.0/16 -top-ports 20 -o wifi_scan.txt`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated Scan Script"
        code={`#!/bin/bash
# Automated port scan script

DOMAIN=$1
OUTPUT_DIR="scan_results_$(date +%Y%m%d)"
mkdir -p $OUTPUT_DIR

echo "[*] Starting port scan for $DOMAIN..."

# Subdomains find:
echo "[*] Finding subdomains..."
subfinder -d $DOMAIN -silent > $OUTPUT_DIR/subdomains.txt
SUBS=$(wc -l < $OUTPUT_DIR/subdomains.txt)
echo "[+] Found $SUBS subdomains"

# Alive check:
echo "[*] Checking alive hosts..."
httpx -list $OUTPUT_DIR/subdomains.txt -silent > $OUTPUT_DIR/alive.txt
ALIVE=$(wc -l < $OUTPUT_DIR/alive.txt)
echo "[+] Found $ALIVE alive hosts"

# Port scan:
echo "[*] Scanning ports..."
naabu -list $OUTPUT_DIR/alive.txt -silent -o $OUTPUT_DIR/ports.txt
PORTS=$(wc -l < $OUTPUT_DIR/ports.txt)
echo "[+] Found $PORTS open ports"

# Results summary:
echo ""
echo "=== SCAN SUMMARY ==="
echo "Domain: $DOMAIN"
echo "Subdomains: $SUBS"
echo "Alive hosts: $ALIVE"
echo "Open ports: $PORTS"
echo "Results: $OUTPUT_DIR/"`}
      />

      <CodeBlock
        title="Continuous Monitoring Script"
        code={`#!/bin/bash
# Port monitoring script — changes detect करता है

DOMAIN=$1
BASELINE="baseline_ports.txt"
CURRENT="current_ports.txt"

# Initial baseline बनाओ:
echo "[*] Creating baseline..."
naabu -host $DOMAIN -silent -o $BASELINE

while true; do
    echo "[*] Scanning at $(date)..."
    naabu -host $DOMAIN -silent -o $CURRENT

    # Compare करो:
    NEW_PORTS=$(comm -13 <(sort $BASELINE) <(sort $CURRENT))
    CLOSED_PORTS=$(comm -23 <(sort $BASELINE) <(sort $CURRENT))

    if [ -n "$NEW_PORTS" ]; then
        echo "[!] NEW OPEN PORTS:"
        echo "$NEW_PORTS"
    fi

    if [ -n "$CLOSED_PORTS" ]; then
        echo "[!] CLOSED PORTS:"
        echo "$CLOSED_PORTS"
    fi

    sleep 3600  # हर घंटे check करो
done`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Naabu real-world Red Team engagements aur bug bounty programs में extensively use होता है। एक typical scenario यह है कि bug bounty hunter को target domain के हज़ारों subdomains मिलते हैं — subfinder और amass से। अब हर subdomain पर open ports ढूंढने हैं। Nmap बहुत धीमा होगा इतने targets पर। Naabu इस काम को minutes में कर देता है — silent mode में pipeline में integrate करके।
      </p>
      <p>
        एक असली case में, एक Red Team engagement में team ने subfinder से 5,000 subdomains discover किए। Naabu से scan करने पर 2,300 hosts पर open ports मिले — जिनमें से 45 पर management interfaces (8080, 8443, 9090) exposed थे। इन interfaces में से 12 पर default credentials काम कर गए। यह सब Naabu की fast scanning की वजह से possible हुआ — Nmap से यही काम घंटों लगता।
      </p>
      <p>
        Bug bounty programs में Naabu + httpx + nuclei combination सबसे popular है। Recon automation scripts में Naabu पहला step है — open ports मिलने के बाद httpx से web services identify होती हैं, और nuclei से vulnerability scanning होता है। यह pipeline automated चलती है और results JSON format में store होते हैं। कई bug bounty hunters ने इस pipeline से critical vulnerabilities discover किए हैं।
      </p>
      <p>
        Internal network assessments में भी Naabu बहुत useful है। जब client internal network access देता है, तो Naabu से quickly सभी hosts के open ports map कर सकते हो। यह network diagram बनाने, critical services identify करने, और attack surface assess करने में मदद करता है। Corporate environments में अक्सर unexpected ports open मिलते हैं — management interfaces, database ports, और development servers।
      </p>

      <h2>Reporting and Output Analysis</h2>
      <p>
        Naabu की output को analyze करना और report बनाना penetration testing का important part है। Naabu multiple output formats support करता है — text, JSON, CSV। JSON format सबसे useful है क्योंकि इसे parse करना आसान है और दूसरे tools के साथ integrate कर सकते हो।
      </p>
      <CodeBlock
        title="Report Generation Script"
        code={`#!/bin/bash
# Naabu scan report generate करो

TARGET=$1
DATE=$(date +%Y%m%d_%H%M%S)
REPORT_DIR="reports/$TARGET/$DATE"
mkdir -p $REPORT_DIR

echo "[*] Starting scan for $TARGET..."

# JSON output scan:
naabu -host $TARGET -top-ports 1000 -json -o $REPORT_DIR/ports.json -silent

# Text output scan:
naabu -host $TARGET -top-ports 1000 -o $REPORT_DIR/ports.txt -silent

# CSV output scan:
naabu -host $TARGET -top-ports 1000 -csv -o $REPORT_DIR/ports.csv -silent

# Results summary:
TOTAL_HOSTS=$(cat $REPORT_DIR/ports.json | jq -r '.host' | sort -u | wc -l)
TOTAL_PORTS=$(cat $REPORT_DIR/ports.json | wc -l)

echo "=== Scan Report ===" > $REPORT_DIR/summary.txt
echo "Target: $TARGET" >> $REPORT_DIR/summary.txt
echo "Date: $DATE" >> $REPORT_DIR/summary.txt
echo "Total hosts with open ports: $TOTAL_HOSTS" >> $REPORT_DIR/summary.txt
echo "Total open ports found: $TOTAL_PORTS" >> $REPORT_DIR/summary.txt
echo "" >> $REPORT_DIR/summary.txt
echo "Top open ports:" >> $REPORT_DIR/summary.txt
cat $REPORT_DIR/ports.json | jq -r '.port' | sort | uniq -c | sort -rn | head -10 >> $REPORT_DIR/summary.txt

echo "[+] Report saved to $REPORT_DIR/"`}
      />

      <h2>Common Problems and Solutions</h2>

      <h3>Problem 1: Permission Denied</h3>
      <p>
        SYN scan के लिए root privileges चाहिए। अगर root access नहीं है तो CONNECT scan use करो।
      </p>
      <CodeBlock
        title="Root Access"
        code={`# SYN scan के लिए root चाहिए:
sudo naabu -host target.com -sS

# Ya CONNECT scan use करो (no root):
naabu -host target.com -sC

# CAP_NET_RAW capability set करो:
sudo setcap cap_net_raw+ep $(which naabu)

# Verify capability:
getcap $(which naabu)`}
      />

      <h3>Problem 2: Slow Scanning</h3>
      <p>
        Large networks में scan slow हो सकता है। Parallel connections और rate limit optimize करो।
      </p>
      <CodeBlock
        title="Speed Fix"
        code={`# Parallel connections बढ़ाओ:
naabu -host target.com -c 50

# Rate limit बढ़ाओ:
naabu -host target.com -rate 5000

# Top ports only:
naabu -host target.com -top-ports 100

# Timeout कम करो:
naabu -host target.com -timeout 500

# SYN scan use करो (CONNECT से तेज़):
sudo naabu -host target.com -sS`}
      />

      <h3>Problem 3: No Results</h3>
      <p>
        अगर कोई open port नहीं मिल रहा तो network connectivity और firewall check करो।
      </p>
      <CodeBlock
        title="Debug Scan"
        code={`# Verbose mode:
naabu -host target.com -v

# Verify open ports:
naabu -host target.com -verify

# Network connectivity check:
ping -c 3 target.com

# DNS resolution check:
nslookup target.com

# Specific port test:
naabu -host target.com -p 80 -v

# Firewall check:
nmap -Pn target.com`}
      />

      <h3>Problem 4: Firewall Blocking</h3>
      <p>
        Firewall scan block कर रहा है तो rate limiting और retries adjust करो।
      </p>
      <CodeBlock
        title="Firewall Bypass"
        code={`# Slow scan करो (rate limit):
sudo naabu -host target.com -rate 100

# Retries बढ़ाओ:
sudo naabu -host target.com -retries 3

# Specific ports only:
sudo naabu -host target.com -p 80,443

# CONNECT scan try करो:
naabu -host target.com -sC

# Different source port:
sudo naabu -host target.com -source-port 53`}
      />

      <h3>Problem 5: DNS Resolution Failed</h3>
      <p>
        DNS resolve नहीं हो रहा तो DNS settings check करो या IP address directly use करो।
      </p>
      <CodeBlock
        title="DNS Fix"
        code={`# IP address directly use करो:
naabu -host 93.184.216.34

# Custom DNS server:
naabu -host target.com -r 8.8.8.8

# DNS resolution verify:
dig target.com
nslookup target.com`}
      />

      <h3>Problem 6: High Memory Usage</h3>
      <p>
        Large scans में memory usage बढ़ सकता है। Concurrency कम करो।
      </p>
      <CodeBlock
        title="Memory Optimization"
        code={`# Concurrency कम करो:
naabu -host target.com -c 10

# Rate limit set करो:
naabu -host target.com -rate 500

# Top ports use करो:
naabu -host target.com -top-ports 100`}
      />

      <h2>Naabu vs Other Port Scanners</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">Naabu</th>
              <th className="text-left py-2 px-3 text-neon-green">Nmap</th>
              <th className="text-left py-2 px-3 text-neon-green">Masscan</th>
              <th className="text-left py-2 px-3 text-neon-green">RustScan</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Language</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">C</td><td className="py-2 px-3">C</td><td className="py-2 px-3">Rust</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Very Fast</td><td className="py-2 px-3">Very Fast</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Scan Types</td><td className="py-2 px-3">SYN, CONNECT, UDP</td><td className="py-2 px-3">20+ types</td><td className="py-2 px-3">SYN only</td><td className="py-2 px-3">SYN, CONNECT</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Service Detection</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (-sV)</td><td className="py-2 px-3">Banner grab</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">OS Detection</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (-O)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Scripting</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">NSE scripts</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">Nmap integration</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Pipeline Support</td><td className="py-2 px-3">Built-in</td><td className="py-2 px-3">Piping</td><td className="py-2 px-3">Output</td><td className="py-2 px-3">Nmap pipe</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Stealth</td><td className="py-2 px-3">High (SYN)</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Low (loud)</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Use Case</td><td className="py-2 px-3">Automation</td><td className="py-2 px-3">Deep scan</td><td className="py-2 px-3">Internet-wide</td><td className="py-2 px-3">Fast recon</td></tr>
            <tr><td className="py-2 px-3 text-white">Best For</td><td className="py-2 px-3">Bug bounty</td><td className="py-2 px-3">Penetration testing</td><td className="py-2 px-3">Mass scanning</td><td className="py-2 px-3">CTF, recon</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Integration with Other Tools</h2>
      <p>
        Naabu अकेले use नहीं होता — यह recon pipeline का हिस्सा है। ProjectDiscovery ecosystem के tools के साथ seamlessly integrate होता है। Subfinder से subdomains, Naabu से ports, httpx से web services, nuclei से vulnerabilities — यह complete recon pipeline है।
      </p>
      <CodeBlock
        title="Integration Examples"
        code={`# Naabu + httpx (service identification):
naabu -host target.com -silent | httpx -title -status -tech-detect

# Naabu + Nmap (detailed scan):
naabu -host target.com -silent | xargs -I {} nmap -sV -p {} target.com

# Naabu + Nuclei (vulnerability scan):
naabu -host target.com -silent | nuclei -t cves/

# Naabu + ffuf (directory scan):
naabu -host target.com -silent | httpx -silent | xargs -I {} ffuf -u {}/FUZZ -w wordlist.txt

# Full pipeline script:
#!/bin/bash
DOMAIN=$1
echo "[*] Subfinder: Finding subdomains..."
subfinder -d $DOMAIN -silent > subs.txt

echo "[*] Naabu: Scanning ports..."
naabu -list subs.txt -silent > ports.txt

echo "[*] httpx: Identifying web services..."
cat ports.txt | httpx -silent -title > web_services.txt

echo "[*] Nuclei: Vulnerability scanning..."
cat web_services.txt | nuclei -silent > vulns.txt

echo "[+] Pipeline complete!"
echo "Subdomains: $(wc -l < subs.txt)"
echo "Open ports: $(wc -l < ports.txt)"
echo "Web services: $(wc -l < web_services.txt)"
echo "Vulnerabilities: $(wc -l < vulns.txt)"`}
      />

      <h2>Detection and Defense</h2>
      <p>
        Network administrators के लिए, port scans को detect और block करना महत्वपूर्ण है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Rate Limiting:</strong> iptables से SYN packets की rate limit set करो — excessive connections block होंगे</li>
        <li><strong className="text-white">IDS/IPS:</strong> Snort या Suricata install करो — port scan patterns detect करते हैं</li>
        <li><strong className="text-white">Fail2Ban:</strong> Multiple failed connections पर IP ban करता है — port scanners को रोकता है</li>
        <li><strong className="text-white">Firewall Rules:</strong> Unnecessary ports block करो — attack surface कम होगा</li>
        <li><strong className="text-white">Network Monitoring:</strong> Unusual traffic patterns monitor करो — port scans detect होंगे</li>
        <li><strong className="text-white">Honeypots:</strong> Fake open ports बनाओ — attackers को track कर सकते हो</li>
        <li><strong className="text-white">Connection Logging:</strong> सभी incoming connections log करो — forensic analysis के लिए</li>
        <li><strong className="text-white">GeoIP Blocking:</strong> Unnecessary countries से traffic block करो</li>
        <li><strong className="text-white">Port Knocking:</strong> Specific sequence से ports open होते हैं — unauthorized access रुकता है</li>
        <li><strong className="text-white">Regular Auditing:</strong> अपने खुद के network पर Naabu run करो — unnecessary open ports बंद करो</li>
        <li><strong className="text-white">Network Segmentation:</strong> Critical systems को separate VLAN में रखो — lateral movement रुकेगी</li>
        <li><strong className="text-white">Zero Trust Model:</strong> हर connection verify करो — implicit trust मत करो</li>
        <li><strong className="text-white">Patch Management:</strong> Open ports पर running services को regularly update करो</li>
        <li><strong className="text-white">Service Minimization:</strong> ज़रूरी services ही चलाओ — unnecessary ports बंद करो</li>
        <li><strong className="text-white">Intrusion Prevention:</strong> IPS deploy करो — automated port scan blocking</li>
      </ul>
      <CodeBlock
        title="Port Scan Detection"
        code={`# iptables se rate limiting:
iptables -A INPUT -p tcp --syn -m limit --limit 1/s -j ACCEPT
iptables -A INPUT -p tcp --syn -j DROP

# Port scan detection script:
#!/bin/bash
# SYN flood detection
tcpdump -i eth0 'tcp[tcpflags] & (tcp-syn) != 0' -c 100 | \
  awk '{print $3}' | cut -d. -f1-4 | sort | uniq -c | sort -rn

# IDS/IPS setup:
# Snort ya Suricata install करो
sudo apt install snort

# Fail2Ban se port scan protection:
sudo apt install fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban`}
      />

      <h2>Lab Environment Setup</h2>
      <p>
        Naabu practice के लिए safe lab बनाना ज़रूरी है:
      </p>
      <CodeBlock
        title="Practice Lab"
        code={`# VirtualBox/VMware में lab setup:

# 1. Kali Linux VM (attacker):
# Naabu pre-installed आता है

# 2. Metasploitable2 (target):
# Intentionally vulnerable VM
# Download: sourceforge.net/projects/metasploitable

# 3. Network setup:
# Host-Only Adapter use करो
# दोनों VMs same subnet पर हों

# Practice exercises:
# Exercise 1: Basic port scan
naabu -host 192.168.56.101

# Exercise 2: Top ports scan
naabu -host 192.168.56.101 -top-ports 100

# Exercise 3: Specific service ports
naabu -host 192.168.56.101 -p 21,22,23,25,80,443,3306,5432

# Exercise 4: Pipeline use
echo "192.168.56.101" | naabu -silent | httpx -title

# Exercise 5: Network range scan
naabu -host 192.168.56.0/24 -top-ports 20 -o lab_results.txt`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Naabu Usage"
        code={`# Custom source port:
sudo naabu -host target.com -source-port 53

# Exclude CDN ports:
naabu -host target.com -exclude-ports 80,443,8080,8443

# Scan with custom DNS:
naabu -host target.com -r 1.1.1.1

# Proxy support:
naabu -host target.com -proxy socks5://127.0.0.1:1080

# Interface selection:
sudo naabu -host target.com -interface eth0

# Custom packet rate:
sudo naabu -host target.com -packet-rate 5000

# Scan specific IP from file:
naabu -list ips.txt -p 22,80,443 -o results.txt

# Combine with nuclei templates:
subfinder -d target.com -silent | naabu -silent | httpx -silent | nuclei -t cves/`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Naabu vs Nmap kaunsa use करें?', a: 'Quick port scanning aur automation के लिए Naabu। Detailed scanning, service detection, OS fingerprinting के लिए Nmap। Pipeline में Naabu better है।' },
          { q: 'क्या Naabu stealthy है?', a: 'SYN scan half-open होता है — connection complete नहीं होता। लेकिन IDS/IPS detect कर सकता है। Rate limiting से stealthy बना सकते हो।' },
          { q: 'Root चाहिए क्या?', a: 'SYN scan (-sS) के लिए हाँ। CONNECT scan (-sC) के लिए नहीं। CAP_NET_RAW capability भी set कर सकते हो।' },
          { q: 'कितने ports एक साथ scan कर सकता हूं?', a: '65535 ports scan कर सकते हो (-p -)। लेकिन time बहुत लगेगा। Top 1000 ports से start करो।' },
          { q: 'क्या Naabu vulnerability scan करता है?', a: 'नहीं, Naabu सिर्फ open ports ढूंढता है। Vulnerability scan के लिए Nuclei use करो। दोनों pipeline में काम करते हैं।' },
          { q: 'UDP ports scan होते हैं?', a: 'हाँ, -sU flag से UDP scan कर सकते हो। लेकिन UDP scan slower है और ICMP unreachable check करता है।' },
          { q: 'Output कैसे parse करें?', a: 'JSON output (-json) use करो — jq से parse कर सकते हो। Silent mode (-silent) pipeline में use करो।' },
          { q: 'Firewall bypass कैसे करें?', a: 'Rate limit कम करो (-rate 100), retries बढ़ाओ (-retries 3), और specific ports scan करो। CONNECT scan try करो अगर SYN block है।' },
          { q: 'क्या Naabu IPv6 support करता है?', a: 'Haan, Naabu IPv6 support करता है। -host flag में IPv6 address दो। लेकिन IPv6 scanning slower हो सकता है क्योंकि address space बहुत बड़ा है।' },
          { q: 'Output file empty क्यों आ रहा है?', a: 'Target unreachable हो सकता है। Ping check करो पहले। Firewall block कर रहा हो। -v flag से verbose output देखो। DNS resolution check करो।' },
          { q: 'कैसे पता करें कि port पर क्या service चल रही है?', a: 'Naabu सिर्फ open ports ढूंढता है। Service detection के लिए httpx (web), nmap -sV (detailed), ya banner grab करो। Pipeline में combine करो।' },
          { q: 'Multiple interfaces पर scan कैसे करें?', a: '-interface flag से specific interface select करो। Default interface use होता है। VPN पर scan करने के लिए VPN interface specify करो।' },
          { q: 'Scan interrupt हो गया — resume कैसे करें?', a: 'Naabu में built-in resume support नहीं है। Scan restart करना पड़ेगा। Large scans के लिए -top-ports use करो ताकि scan जल्दी complete हो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Integration with Other Tools</h2>
      <p>
        Naabu अकेले use नहीं होता — यह ProjectDiscovery ecosystem का हिस्सा है। Subfinder, httpx, nuclei, katana — ये सब Naabu के साथ pipeline में integrate होते हैं। इसके अलावा Nmap, Masscan, और दूसरे scanners के साथ भी combine कर सकते हो।
      </p>
      <CodeBlock
        title="Naabu + Nmap Detailed Scan"
        code={`# Naabu से fast port discovery, Nmap से detailed scan:

# Step 1: Naabu से open ports find करो
naabu -host target.com -top-ports 1000 -silent > ports.txt

# Step 2: Nmap से service detection
nmap -sV -iL ports.txt -oX nmap_detailed.xml

# Step 3: Nmap scripts run करो
nmap --script=vuln -iL ports.txt -oN vuln_scan.txt

# One-liner:
naabu -host target.com -silent | xargs -I {} nmap -sV -p {} target.com

# Naabu + Masscan combo:
# Masscan से fast initial scan
masscan 192.168.1.0/24 -p 1-65535 --rate 10000 -oL masscan.txt
# Naabu से verify
naabu -host 192.168.1.0/24 -verify -o verified_ports.txt`}
      />
      <CodeBlock
        title="Full Recon Automation Script"
        code={`#!/bin/bash
# Complete recon automation with Naabu

DOMAIN=$1
OUTPUT="recon_$(date +%Y%m%d_%H%M%S)"
mkdir -p $OUTPUT

echo "[*] Phase 1: Subdomain enumeration"
subfinder -d $DOMAIN -silent > $OUTPUT/subdomains.txt
echo "[+] Found $(wc -l < $OUTPUT/subdomains.txt) subdomains"

echo "[*] Phase 2: Alive host check"
httpx -list $OUTPUT/subdomains.txt -silent > $OUTPUT/alive.txt
echo "[+] Found $(wc -l < $OUTPUT/alive.txt) alive hosts"

echo "[*] Phase 3: Port scanning"
naabu -list $OUTPUT/alive.txt -top-ports 1000 -silent -o $OUTPUT/ports.txt
echo "[+] Found $(wc -l < $OUTPUT/ports.txt) open ports"

echo "[*] Phase 4: Service detection"
nmap -sV -iL $OUTPUT/ports.txt -oX $OUTPUT/services.xml

echo "[*] Phase 5: Vulnerability scan"
nuclei -list $OUTPUT/ports.txt -o $OUTPUT/vulns.txt

echo "[+] Recon complete! Results in $OUTPUT/"`}
      />
      <CodeBlock
        title="CI/CD Integration"
        code={`# GitLab CI/CD में Naabu integrate करो:

# .gitlab-ci.yml:
# security_scan:
#   stage: test
#   image: projectdiscovery/naabu:latest
#   script:
#     - naabu -host $TARGET_DOMAIN -top-ports 100 -json -o ports.json
#     - cat ports.json | jq '.port' | sort -u
#   artifacts:
#     paths:
#       - ports.json
#   only:
#     - main

# GitHub Actions:
# - name: Port Scan
#   run: |
#     docker run projectdiscovery/naabu -host \${{ secrets.TARGET }} -silent > ports.txt
#     cat ports.txt

# Jenkins Pipeline:
# stage('Port Scan') {
#     sh 'naabu -host \${TARGET} -top-ports 1000 -o ports.txt'
#     archiveArtifacts 'ports.txt'
# }`}
      />

      <h2>Naabu for Bug Bounty Automation</h2>
      <p>
        Bug bounty programs में Naabu automation bahut important है। Thousands of subdomains ke ports scan karna manual impossible hai. Naabu + subfinder + httpx + nuclei pipeline automated scanning karti hai jo continuously chal sakti hai.
      </p>
      <CodeBlock
        title="Bug Bounty Automation Script"
        code={`#!/bin/bash
# Bug bounty continuous recon script

DOMAIN=$1
SLACK_WEBHOOK="$2"
SEEN_FILE="seen_ports.txt"

touch $SEEN_FILE

while true; do
    echo "[*] $(date) - Starting scan cycle"

    # Subdomains find करो
    subfinder -d $DOMAIN -silent | sort -u > subs.txt

    # Alive hosts
    httpx -list subs.txt -silent > alive.txt

    # Port scan
    naabu -list alive.txt -top-ports 100 -silent > current_ports.txt

    # New ports detect करो
    NEW_PORTS=$(comm -13 <(sort $SEEN_FILE) <(sort current_ports.txt))

    if [ -n "$NEW_PORTS" ]; then
        echo "[!] New ports found!"
        echo "$NEW_PORTS"

        # Slack notification:
        curl -X POST "$SLACK_WEBHOOK" \
          -H 'Content-type: application/json' \
          -d "{\"text\":\"New ports found:\\n$NEW_PORTS\"}"

        # Update seen file:
        cat current_ports.txt >> $SEEN_FILE
        sort -u $SEEN_FILE -o $SEEN_FILE
    fi

    echo "[*] Cycle complete. Sleeping 6 hours..."
    sleep 21600
done`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nmap</td><td className="py-2 px-3">Network exploration और security auditing</td><td className="py-2 px-3">20+ scan types, NSE scripts, service detection</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Masscan</td><td className="py-2 px-3">Internet-wide port scanning</td><td className="py-2 px-3">सबसे तेज़, custom TCP/IP stack</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">RustScan</td><td className="py-2 px-3">Fast port scanner</td><td className="py-2 px-3">Rust-based, Nmap integration</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Unicornscan</td><td className="py-2 px-3">Asynchronous port scanner</td><td className="py-2 px-3">Stateless scanning</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ZMap</td><td className="py-2 px-3">Internet-wide network scanner</td><td className="py-2 px-3">Single packet scan, IPv4/IPv6</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Angry IP Scanner</td><td className="py-2 px-3">Network scanner</td><td className="py-2 px-3">GUI interface, cross-platform</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Netcat</td><td className="py-2 px-3">TCP/UDP Swiss army knife</td><td className="py-2 px-3">Simple port check, file transfer</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Hping3</td><td className="py-2 px-3">Packet crafting tool</td><td className="py-2 px-3">Custom packets, firewall testing</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Recon pipeline में Naabu use करो — subfinder + naabu + nuclei</li>
          <li>-silent flag pipeline के लिए ज़रूरी है</li>
          <li>Large networks के लिए -top-ports 100 से start करो</li>
          <li>SYN scan fast है लेकिन root चाहिए</li>
          <li>-verify flag से false positives कम होते हैं</li>
          <li>Rate limit set करो ताकि firewall block न करे</li>
          <li>Service detection के लिए httpx के साथ combine करो</li>
          <li>हमेशा authorized permission के साथ ही scan करो</li>
          <li>JSON output use करो — parse करना आसान है और automation में काम आता है</li>
          <li>Large networks में pehle top-ports 100 scan करो, फिर detailed scan</li>
          <li>Exclude CDN ports (80, 443) अगर CDN behind scan नहीं करना</li>
          <li>Continuous monitoring script बनाओ — port changes detect होंगे</li>
          <li>Rate limit respect करो — target server overload न हो</li>
          <li>SYN scan fast है लेकिन root चाहिए — CONNECT scan no-root option है</li>
          <li>-verify flag से false positives कम होते हैं — accuracy बढ़ती है</li>
          <li>Docker container में Naabu run करो — isolated environment मिलेगा</li>
          <li>CI/CD pipeline में integrate करो — automated security testing</li>
          <li>Multiple output formats use करो — text, JSON, CSV सब maintain करो</li>
        </ul>
      </div>

      <h2>Performance Tuning — Detailed Guide</h2>
      <p>
        Naabu की performance tune करना large-scale scanning के लिए बहुत important है। Default settings small networks के लिए ठीक हैं, लेकिन thousands of hosts scan करने के लिए optimization ज़रूरी है। Concurrency, rate limiting, timeout, और retries — ये सभी parameters scan speed और accuracy affect करते हैं।
      </p>
      <CodeBlock
        title="Performance Optimization Guide"
        code={`# Concurrency tuning:
# Default: 25 parallel connections
# Small network: -c 25 (default)
# Medium network: -c 50
# Large network: -c 100
# Very large: -c 256 (max recommended)

# Rate limiting:
# Default: no rate limit
# Stealthy scan: -rate 100
# Normal scan: -rate 1000
# Aggressive scan: -rate 5000
# Max speed: -rate 10000

# Timeout tuning:
# Fast network: -timeout 300
# Normal network: -timeout 500 (default)
# Slow network: -timeout 1000
# Unreliable network: -timeout 2000

# Retry tuning:
# Stable network: -retries 1 (default)
# Unreliable network: -retries 3
# Very unreliable: -retries 5

# Scan strategy:
# Step 1: Quick scan top 100 ports
naabu -host target.com -top-ports 100 -o quick.txt

# Step 2: Detailed scan on found ports
naabu -host target.com -p $(cat quick.txt | cut -d: -f2 | sort -u | tr '\n' ',') -o detailed.txt

# Step 3: Full scan on interesting hosts only
naabu -list interesting_hosts.txt -p - -o full.txt`}
      />
      <CodeBlock
        title="Large Network Scanning"
        code={`# 10,000+ hosts scan करने के लिए:

# Step 1: Alive hosts find करो (fast):
naabu -list all_hosts.txt -top-ports 20 -c 100 -rate 5000 -silent > alive.txt

# Step 2: Alive hosts पर detailed scan:
naabu -list alive.txt -top-ports 1000 -c 50 -rate 2000 -o detailed.txt

# Step 3: Interesting ports पर deep scan:
naabu -list alive.txt -p 22,80,443,3306,5432,8080,8443 -c 25 -o deep.txt

# Memory optimization:
# Large scans memory consume करते हैं
# -c flag कम करो memory issues पर
naabu -list hosts.txt -c 10 -rate 500 -o results.txt

# Background scan (nohup):
nohup naabu -list hosts.txt -top-ports 1000 -o results.txt &
# Screen/tmux में run करो long scans के लिए`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Naabu को scripting और automation में use करना बहुत आसान है। यह CLI-based tool है इसलिए shell scripts, Python scripts, और CI/CD pipelines में seamlessly integrate होता है। Silent mode (-silent) JSON output (-json) और exit codes — ये सभी features automation को support करते हैं।
      </p>
      <CodeBlock
        title="Automation Script Examples"
        code={`#!/bin/bash
# Daily port monitoring script
TARGET="target.com"
LOG_DIR="logs/$(date +%Y%m%d)"
mkdir -p $LOG_DIR

# Current scan:
naabu -host $TARGET -top-ports 1000 -json -silent > $LOG_DIR/current.json

# Previous scan compare करो:
if [ -f "logs/previous.json" ]; then
    diff <(jq -r '.host + ":" + .port' logs/previous.json | sort) \\
         <(jq -r '.host + ":" + .port' $LOG_DIR/current.json | sort) > $LOG_DIR/changes.txt

    if [ -s $LOG_DIR/changes.txt ]; then
        echo "[!] Port changes detected!"
        cat $LOG_DIR/changes.txt
        # Alert send करो (email, Slack, etc.)
    fi
fi

cp $LOG_DIR/current.json logs/previous.json
echo "[*] Scan complete: $(date)"`}
      />
      <CodeBlock
        title="Python Automation"
        code={`#!/usr/bin/env python3
import subprocess
import json
import sys

def scan_target(host, ports="top-ports 1000"):
    cmd = f"naabu -host {host} -{ports} -json -silent"
    result = subprocess.run(cmd.split(), capture_output=True, text=True)

    ports_found = []
    for line in result.stdout.strip().split('\n'):
        if line:
            ports_found.append(json.loads(line))

    return ports_found

# Multiple targets scan करो:
targets = ["target1.com", "target2.com", "target3.com"]
all_results = {}

for target in targets:
    print(f"[*] Scanning {target}...")
    results = scan_target(target)
    all_results[target] = results
    print(f"    Found {len(results)} open ports")

# Results save करो:
with open("scan_results.json", "w") as f:
    json.dump(all_results, f, indent=2)

print(f"[+] Total: {sum(len(v) for v in all_results.values())} ports found")`}
      />

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Port scanning network traffic generate करता है। IDS/IPS detect कर सकता है। Corporate networks पर बिना permission scan करना job loss या legal action का कारण बन सकता है। हमेशा written authorization लो। Rate limit respect करो। Document everything। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत पोर्ट स्कैनिंग अपराध हो सकता है।
      </div>
    </TutorialLayout>
  )
}
