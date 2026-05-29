import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Macchanger() {
  return (
    <TutorialLayout
      title="macchanger"
      subtitle="MAC address बदलने का टूल — पहचान छुपाओ, नेटवर्क anonymity पाओ"
      icon="🎭"
      prev={{ to: '/tool/crunch', label: 'crunch' }}
      next={{ to: '/tools', label: 'All Tools' }}
    >
      <h2>What is Macchanger?</h2>
      <p>
        MAC (Media Access Control) address हर नेटवर्क डिवाइस का unique identifier होता है जो manufacturer set करता है। यह 48-bit का होता है और 6 pairs में लिखा जाता है — जैसे AA:BB:CC:DD:EE:FF। पहले 3 pairs manufacturer को identify करते हैं (OUI - Organizationally Unique Identifier) और बाकी 3 pairs device को unique बनाते हैं। Macchanger एक ऐसा टूल है जो आपके नेटवर्क इंटरफ़ेस का MAC address बदल देता है। इसे MAC spoofing कहते हैं।
      </p>
      <p>
        WiFi networks MAC addresses को track करते हैं — cafes, airports, hotels, shopping malls सब जगह। जब आप किसी WiFi से connect होते हो तो आपका MAC address उनके database में save हो जाता है। MAC change करके आप anonymous रह सकते हो। Kali Nethunter में macchanger पहले से install आता है। MAC address spoofing का concept नया नहीं है — बहुत से operating systems जैसे Windows, Linux, macOS सभी MAC address change करने की सुविधा देते हैं।
      </p>
      <p>
        macchanger इस काम को बहुत आसान और fast बनाता है। यह random MAC generate कर सकता है, specific vendor का MAC set कर सकता है, और original MAC restore कर सकता है। यह OUI database जानता है जिससे realistic MAC addresses generate होते हैं जो किसी real manufacturer के लगते हैं। पेनेट्रेशन टेस्टिंग, WiFi hacking, और privacy protection — सब में macchanger ज़रूरी है।
      </p>
      <p>
        MAC address spoofing cybersecurity की दुनिया में एक fundamental skill है। जब आप WiFi attack करते हो तो आपका real MAC address logs में save हो जाता है। अगर आप पकड़े जाते हो तो MAC address से आपकी device identify हो सकती है। MAC change करके आप अपनी पहचान छुपा सकते हो। यह technique red teamers, bug bounty hunters, और privacy-conscious users सभी के लिए ज़रूरी है।
      </p>
      <p>
        macchanger C भाषा में लिखा गया है और Linux kernel की network interface capabilities का फायदा उठाता है। यह ioctl() system call से directly NIC driver को MAC address set करता है। यह tool lightweight है, fast है, और command-line interface provide करता है। GUI की ज़रूरत नहीं — बस एक command और MAC change!
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> MAC spoofing अपने डिवाइस पर legal है लेकिन किसी नेटवर्क को bypass करने के लिए इस्तेमाल करना illegal हो सकता है। भारत में IT एक्ट 2000 की धारा 43 और 66 के तहत नेटवर्क सुरक्षा bypass करना अपराध है। केवल अपने डिवाइस और authorized testing पर ही इस्तेमाल करें।
      </div>

      <h2>History of Macchanger</h2>
      <p>
        macchanger को 2003 में Alvaro Lopez Ortega ने बनाया था। यह C भाषा में लिखा गया है और Linux systems के लिए design किया गया है। शुरू में यह एक simple script था जो ifconfig commands use करके MAC change करता था, लेकिन बाद में इसमें OUI database, vendor matching, और random generation features add किए गए।
      </p>
      <p>
        2010 में macchanger-ng fork बनाया गया जिसमें कुछ extra features थे, लेकिन original macchanger ज़्यादा popular रहा। आज यह Kali Linux, Parrot OS, BlackArch, और लगभग सभी security-focused Linux distributions में pre-installed आता है। GitHub पर इसके active contributors हैं और regular updates आते रहते हैं।
      </p>
      <p>
        MAC spoofing का इतिहास बहुत पुराना है। 1990 के दशक में network administrators ने MAC filtering implement किया था ताकि unauthorized devices network access न ले सकें। लेकिन जल्दी ही पता चला कि MAC addresses software level पर change किए जा सकते हैं। तब से MAC spoofing एक common technique बन गई है। Windows, Linux, macOS — सभी operating systems MAC change करने की capability रखते हैं।
      </p>
      <p>
        2020 में Apple ने iOS 14 में Private WiFi Address feature introduce किया जो automatically हर WiFi network के लिए random MAC use करता है। Google ने भी Android 10 में MAC randomization enable किया। यह privacy protection के लिए बड़ा कदम था। आज सभी modern devices MAC randomization support करते हैं, लेकिन Linux पर macchanger अभी भी सबसे powerful और flexible tool है।
      </p>

      <h2>How Macchanger Works?</h2>
      <p>
        macchanger network interface के driver level पर MAC address change करता है। यह Linux kernel की network interface capabilities का फायदा उठाता है। जब आप MAC change करते हो तो NIC (Network Interface Card) का hardware MAC वही रहता है, लेकिन operating system नया MAC use करता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Interface Control:</strong> Network interface को down करके MAC change करता है — यह ज़रूरी है क्योंकि active interface का MAC change नहीं हो सकता</li>
        <li><strong className="text-white">OUI Database:</strong> 20,000+ manufacturer OUI codes जानता है — realistic MAC generate करता है जो किसी real vendor का लगता है</li>
        <li><strong className="text-white">Random Generation:</strong> Cryptographically random bytes से MAC generate करता है — हर बार different MAC आता है</li>
        <li><strong className="text-white">Vendor Matching:</strong> Same vendor का different MAC generate कर सकता है (-a flag) — detection से बचने के लिए useful</li>
        <li><strong className="text-white">Permanent Storage:</strong> Original MAC hardware में store होता है — -p flag से restore होता है</li>
        <li><strong className="text-white">Kernel Integration:</strong> ioctl() system call से directly driver को MAC set करता है — fast और reliable</li>
        <li><strong className="text-white">Locally Administered Bit:</strong> MAC address के second nibble का second bit locally administered होता है — macchanger यह properly set करता है</li>
        <li><strong className="text-white">Multicast Bit Prevention:</strong> Unicast MAC generate करता है — multicast bit (first nibble का first bit) 0 रखता है</li>
      </ul>
      <p>
        MAC address change होने पर switch और access point आपके device को एक नए device की तरह treat करते हैं। यही MAC spoofing की power है — आपका physical device वही है लेकिन network पर एक नई identity है। Router के connected devices list में नया device दिखेगा। DHCP server नया IP assign करेगा। ARP tables update होंगे। सब कुछ ऐसे होगा जैसे नया device network में आया हो।
      </p>

      <h2>Installation</h2>
      <p>
        Kali Nethunter और Kali Linux में macchanger पहले से install आता है। अगर किसी कारण से नहीं है तो आसानी से install कर सकते हो।
      </p>
      <CodeBlock
        title="macchanger इंस्टॉलेशन"
        code={`# Kali Nethunter / Kali Linux में (pre-installed):
sudo apt update
sudo apt install macchanger

# Ubuntu / Debian में:
sudo apt install macchanger

# Arch Linux में:
sudo pacman -S macchanger

# Fedora में:
sudo dnf install macchanger

# Termux में:
pkg install macchanger

# सोर्स से install:
git clone https://github.com/alobato/macchanger.git
cd macchanger
./configure
make
sudo make install

# Version check:
macchanger --version

# Help देखें:
macchanger --help

# सभी known MAC vendors list:
macchanger -l | head -20

# Total vendors count:
macchanger -l | wc -l`}
      />

      <h2>Basic Usage</h2>
      <p>
        macchanger के basic commands बहुत simple हैं। आप current MAC देख सकते हो, random MAC set कर सकते हो, specific MAC set कर सकते हो, और original MAC restore कर सकते हो। हर command एक specific purpose के लिए है।
      </p>
      <CodeBlock
        title="MAC Address Operations"
        code={`# Current MAC address देखें:
macchanger -s wlan0
# ya
ifconfig wlan0 | grep ether
# ya
ip link show wlan0 | grep ether

# Random MAC set करें (किसी भी vendor का):
sudo macchanger -r wlan0

# Random MAC of same vendor (same manufacturer का):
sudo macchanger -a wlan0

# Specific MAC set करें:
sudo macchanger -m AA:BB:CC:DD:EE:FF wlan0

# Original MAC restore करें:
sudo macchanger -p wlan0

# सभी known MAC vendors list:
macchanger -l | head -50

# Specific vendor के MAC ढूंढें:
macchanger -l | grep -i "samsung"
macchanger -l | grep -i "apple"
macchanger -l | grep -i "cisco"

# Different vendor का random MAC:
sudo macchanger -e wlan0

# Any vendor random MAC:
sudo macchanger -A wlan0`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-s</td><td className="py-2 px-3">Current MAC address दिखाएं</td><td className="py-2 px-3 font-mono text-xs">macchanger -s wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r</td><td className="py-2 px-3">Random MAC address set करें (किसी भी vendor का)</td><td className="py-2 px-3 font-mono text-xs">sudo macchanger -r wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-a</td><td className="py-2 px-3">Random MAC same vendor का (same manufacturer)</td><td className="py-2 px-3 font-mono text-xs">sudo macchanger -a wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-m MAC</td><td className="py-2 px-3">Specific MAC address set करें</td><td className="py-2 px-3 font-mono text-xs">sudo macchanger -m AA:BB:CC:DD:EE:FF wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">Original (permanent) MAC restore करें</td><td className="py-2 px-3 font-mono text-xs">sudo macchanger -p wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-l</td><td className="py-2 px-3">सभी known MAC vendors list देखें</td><td className="py-2 px-3 font-mono text-xs">macchanger -l | head -50</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e</td><td className="py-2 px-3">Vendor-specific random MAC (अलग vendor)</td><td className="py-2 px-3 font-mono text-xs">sudo macchanger -e wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-A</td><td className="py-2 px-3">Any vendor random MAC</td><td className="py-2 px-3 font-mono text-xs">sudo macchanger -A wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-b</td><td className="py-2 px-3">Setbia MAC (bia flag — unknown vendor)</td><td className="py-2 px-3 font-mono text-xs">sudo macchanger -b wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-i</td><td className="py-2 px-3">Show permanent MAC (hardware burned)</td><td className="py-2 px-3 font-mono text-xs">macchanger -i wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--show</td><td className="py-2 px-3">Current MAC show करें (alternative to -s)</td><td className="py-2 px-3 font-mono text-xs">macchanger --show wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-L</td><td className="py-2 px-3">Long format vendor list</td><td className="py-2 px-3 font-mono text-xs">macchanger -L | head -30</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--end</td><td className="py-2 px-3">Setbia MAC end bytes</td><td className="py-2 px-3 font-mono text-xs">sudo macchanger --end wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">Verbose output — detailed info</td><td className="py-2 px-3 font-mono text-xs">sudo macchanger -rv wlan0</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-V</td><td className="py-2 px-3">Version info</td><td className="py-2 px-3 font-mono text-xs">macchanger -V</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Step by Step MAC Spoofing</h2>
      <p>
        MAC address change करने का सही तरीका यह है। पहले interface को down करो, फिर MAC change करो, फिर interface को up करो। बिना interface down किए MAC change नहीं होगा — यह सबसे common mistake है।
      </p>
      <CodeBlock
        title="Complete MAC Spoofing Process"
        code={`# Step 1: Current MAC note करें:
macchanger -s wlan0
# Current MAC: AA:BB:CC:11:22:33 (Intel Corporate)

# Step 2: Interface बंद करें:
sudo ifconfig wlan0 down
# ya
sudo ip link set wlan0 down

# Step 3: MAC address change करें:
sudo macchanger -r wlan0
# Output: Current MAC:   AA:BB:CC:11:22:33 (Intel Corporate)
# Output: Permanent MAC: AA:BB:CC:11:22:33 (Intel Corporate)
# Output: New MAC:       00:11:22:33:44:55 (Cimsys Inc)

# Step 4: Interface वापस चालू करें:
sudo ifconfig wlan0 up
# ya
sudo ip link set wlan0 up

# Step 5: Verify करें:
macchanger -s wlan0
# Current MAC: 00:11:22:33:44:55 (Cimsys Inc)
# नया MAC address दिखेगा!

# Alternative — एक command में सब:
sudo ifconfig wlan0 down && sudo macchanger -r wlan0 && sudo ifconfig wlan0 up && macchanger -s wlan0

# Interface names check करें (अगर wlan0 काम न करे):
ip link show
# eth0, wlan0, wlan1, wlp2s0, enp0s3 — सही name use करें`}
      />

      <h2>WiFi Monitor Mode + MAC Spoofing</h2>
      <p>
        WiFi hacking से पहले MAC address change करना बहुत ज़रूरी है। अगर आप बिना MAC change किए WiFi attack करते हो और पकड़े जाते हो, तो आपका real MAC address से पहचान हो सकती है। Monitor mode में जाने से पहले MAC change करें। यह WiFi pentesting का standard practice है।
      </p>
      <CodeBlock
        title="WiFi Hacking के लिए Setup"
        code={`# WiFi adapter को monitor mode + नया MAC:

# Step 1: Interface down:
sudo ifconfig wlan0 down

# Step 2: Random MAC:
sudo macchanger -r wlan0

# Step 3: Monitor mode on:
sudo airmon-ng start wlan0

# Step 4: Verify:
macchanger -s wlan0mon

# अब आपका real MAC address hide है!
# अगर कोई WiFi log check करे तो नया MAC दिखेगा

# Attack complete होने के बाद:
sudo airmon-ng stop wlan0mon
sudo ifconfig wlan0 down
sudo macchanger -p wlan0
sudo ifconfig wlan0 up

# One-liner:
sudo ifconfig wlan0 down && sudo macchanger -r wlan0 && sudo airmon-ng start wlan0 && macchanger -s wlan0mon

# WiFi attack workflow:
# 1. MAC change करो
# 2. Monitor mode on करो
# 3. Target scan करो (airodump-ng)
# 4. Attack करो (aireplay-ng, aircrack-ng)
# 5. Original MAC restore करो`}
      />

      <h2>Vendor-specific MAC Spoofing</h2>
      <p>
        अगर आप realistic MAC address चाहते हो तो vendor-specific MAC use करो। यह detection से बचने में मदद करता है क्योंकि MAC address किसी real manufacturer का लगता है। Random MAC suspicious लग सकता है अगर admin OUI check करे।
      </p>
      <CodeBlock
        title="Vendor-specific MAC"
        code={`# Same vendor का random MAC (-a flag):
# आपके current NIC vendor का अलग MAC generate होगा
sudo macchanger -a wlan0

# Different vendor का random MAC (-e flag):
sudo macchanger -e wlan0

# Specific vendor OUI से MAC बनाएं:
# पहले vendor OUI ढूंढो:
macchanger -l | grep -i "intel"
# Output: 00:1B:21   Intel Corporate

# फिर उस OUI से MAC set करो:
sudo macchanger -m 00:1B:21:XX:YY:ZZ wlan0
# XX:YY:ZZ कोई भी random hex values

# Common vendor OUIs:
# Intel:    00:1B:21, 00:1E:65, 00:24:D6
# Broadcom: 00:10:18, 00:14:BF, 00:1A:2B
# Qualcomm: 00:03:7F, 00:17:CB, 00:1E:10
# Realtek:  00:E0:4C, 52:54:00
# Apple:    00:03:93, 00:0A:27, 00:1B:63
# Samsung:  00:16:32, 00:18:AF, 00:1A:8A
# TP-Link:  50:C7:BF, 54:C8:0F, 64:70:02
# D-Link:   00:1B:11, 00:1E:58, 00:22:B0
# Cisco:    00:00:0C, 00:01:42, 00:01:43

# Realistic MAC generate script:
#!/bin/bash
OUI="00:1B:21"
RANDOM_SUFFIX=$(printf '%02X:%02X:%02X' $((RANDOM%256)) $((RANDOM%256)) $((RANDOM%256)))
sudo macchanger -m "$OUI:$RANDOM_SUFFIX" wlan0`}
      />

      <h2>Permanent MAC Change</h2>
      <p>
        अगर आप चाहते हो कि हर बार WiFi connect होने पर random MAC आए, तो NetworkManager config edit कर सकते हो। यह persistent change है — reboot के बाद भी रहेगा। Privacy-focused users के लिए यह best practice है।
      </p>
      <CodeBlock
        title="Boot पर Automatic MAC Change"
        code={`# Method 1: NetworkManager config edit करें:
sudo nano /etc/NetworkManager/conf.d/mac.conf

# ये lines add करें:
[connection]
wifi.cloned-mac-address=random
ethernet.cloned-mac-address=random

# NetworkManager restart करें:
sudo systemctl restart NetworkManager

# अब हर बार WiFi connect होने पर random MAC आएगा!

# Method 2: Systemd service बनाएं:
sudo nano /etc/systemd/system/macchanger.service

# Content:
[Unit]
Description=MAC Address Randomization
After=network-pre.target
Before=NetworkManager.service

[Service]
Type=oneshot
ExecStart=/usr/bin/macchanger -r wlan0
ExecStartPost=/usr/bin/macchanger -r eth0
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target

# Enable करें:
sudo systemctl enable macchanger.service
sudo systemctl start macchanger.service

# Verify:
sudo systemctl status macchanger.service
macchanger -s wlan0

# Method 3: udev rule (interface up होने पर):
sudo nano /etc/udev/rules.d/99-mac-random.rules

# Content:
ACTION=="add", SUBSYSTEM=="net", RUN+="/usr/bin/macchanger -r %k"

# udev reload:
sudo udevadm control --reload-rules
sudo udevadm trigger`}
      />

      <h2>Multiple Interfaces</h2>
      <p>
        अगर आपके पास कई network interfaces हैं तो सबका MAC change कर सकते हो। हर interface का अलग MAC होना चाहिए।
      </p>
      <CodeBlock
        title="Multiple Interfaces MAC Spoofing"
        code={`# सभी interfaces की list:
ip link show

# हर interface का MAC change:
sudo ifconfig eth0 down && sudo macchanger -r eth0 && sudo ifconfig eth0 up
sudo ifconfig wlan0 down && sudo macchanger -r wlan0 && sudo ifconfig wlan0 up
sudo ifconfig wlan1 down && sudo macchanger -r wlan1 && sudo ifconfig wlan1 up

# Script — सभी interfaces एक साथ:
#!/bin/bash
for iface in $(ip -br link show | awk '{print $1}' | grep -v lo); do
    sudo ip link set $iface down
    sudo macchanger -r $iface
    sudo ip link set $iface up
    echo "[+] $iface: $(macchanger -s $iface | grep 'Current')"
done

# USB WiFi adapters:
# wlan0 — built-in WiFi
# wlan1 — USB adapter 1
# wlan2 — USB adapter 2
# हर adapter का अलग MAC होना चाहिए`}
      />

      <h2>MAC Spoofing Use Cases</h2>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Privacy Protection:</strong> WiFi hotspots MAC track करते हैं — change करके anonymous रहो। Cafes, airports, hotels सब जगह MAC logging होती है</li>
        <li><strong className="text-white">MAC Filtering Bypass:</strong> अगर नेटवर्क सिर्फ allowed MAC addresses leta है तो allowed MAC set करके bypass कर सकते हो</li>
        <li><strong className="text-white">WiFi Hacking:</strong> Monitor mode के साथ real MAC hide करना ज़रूरी है — logs में real MAC नहीं आना चाहिए</li>
        <li><strong className="text-white">Penetration Testing:</strong> अलग MAC से नेटवर्क test करो ताकि track न हो — हर engagement के लिए different MAC</li>
        <li><strong className="text-white">Multiple Accounts:</strong> एक ही डिवाइस से multiple accounts बनाने के लिए — websites MAC-based fingerprinting use करती हैं</li>
        <li><strong className="text-white">Network Testing:</strong> नेटवर्क administrators MAC filtering test करने के लिए — क्या filtering properly काम कर रही है</li>
        <li><strong className="text-white">Anonymity:</strong> Public WiFi पर अपनी पहचान छुपाने के लिए — MAC + VPN + Tor = strong anonymity</li>
        <li><strong className="text-white">Device Cloning:</strong> किसी authorized device का MAC copy करके network access पाने के लिए (authorized testing only)</li>
        <li><strong className="text-white">Forensics Avoidance:</strong> Incident response में MAC logs check होते हैं — random MAC से forensic investigation मुश्किल होती है</li>
        <li><strong className="text-white">IoT Testing:</strong> IoT devices की security test करते समय MAC change करना — device fingerprinting bypass</li>
      </ul>

      <h2>Macchanger vs Other Methods</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">macchanger</th>
              <th className="text-left py-2 px-3 text-neon-green">ifconfig/ip link</th>
              <th className="text-left py-2 px-3 text-neon-green">NetworkManager</th>
              <th className="text-left py-2 px-3 text-neon-green">macchanger-ng</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Random MAC</td><td className="py-2 px-3">हाँ (-r flag)</td><td className="py-2 px-3">नहीं (manual)</td><td className="py-2 px-3">हाँ (config)</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Same Vendor MAC</td><td className="py-2 px-3">हाँ (-a flag)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">OUI Database</td><td className="py-2 px-3">20,000+ vendors</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">20,000+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Easy Restore</td><td className="py-2 px-3">हाँ (-p flag)</td><td className="py-2 px-3">Manual</td><td className="py-2 px-3">Auto (reconnect)</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Vendor Lookup</td><td className="py-2 px-3">हाँ (-l flag)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Persistent</td><td className="py-2 px-3">नहीं (manual)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (config)</td><td className="py-2 px-3">नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3">बहुत आसान</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Easy (GUI)</td><td className="py-2 px-3">आसान</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: '"Network interface not found" error आ रहा है', a: 'Interface name check करें: ip link show से सभी interfaces दिखेंगे। wlan0, eth0, wlp2s0, enp0s3 — सही name use करें। USB WiFi adapter है तो wlan1 या wlan2 भी हो सकता है। nmcli device status से भी check कर सकते हो।' },
          { q: '"Operation not permitted" error आ रहा है', a: 'sudo use करें: sudo macchanger -r wlan0। MAC change करने के लिए root privileges ज़रूरी हैं। sudoers file check करें अगर sudo काम न करे। su - से root बनकर भी try कर सकते हो।' },
          { q: '"Device or resource busy" error आ रहा है', a: 'पहले interface down करें: sudo ifconfig wlan0 down। फिर MAC change करें। Interface up status में MAC change नहीं हो सकता। NetworkManager भी बंद करना पड़ सकता है: sudo systemctl stop NetworkManager' },
          { q: 'MAC change हो रहा है लेकिन WiFi connect नहीं हो रहा', a: 'Network MAC filtering enable हो सकती है। Original MAC restore करें: sudo macchanger -p wlan0। फिर NetworkManager restart करें: sudo systemctl restart NetworkManager। DHCP lease renew करें: sudo dhclient -r wlan0 && sudo dhclient wlan0' },
          { q: 'Monitor mode में MAC change नहीं हो रहा', a: 'पहले monitor mode बंद करें: sudo airmon-ng stop wlan0mon। फिर MAC change करें: sudo macchanger -r wlan0। फिर वापस monitor mode on करें: sudo airmon-ng start wlan0' },
          { q: 'Reboot के बाद MAC वापस original हो जाता है', a: 'यह normal behavior है। Persistent change के लिए NetworkManager config edit करें या systemd service बनाएं (ऊपर देखें)। /etc/NetworkManager/conf.d/mac.conf में wifi.cloned-mac-address=random add करें।' },
          { q: 'Random MAC generate हो रहा है लेकिन suspicious लगता है', a: 'Same vendor MAC use करें: sudo macchanger -a wlan0। या specific vendor OUI से MAC बनाएं जो common हो (Intel, Broadcom)। Locally administered bit (second nibble) check करें — 2, 6, A, E होना चाहिए।' },
          { q: 'क्या MAC spoofing detect हो सकता है?', a: 'हाँ, NAC systems, 802.1X, DHCP snooping, duplicate MAC detection से detect हो सकता है। Behavioral analysis से भी — MAC change के बाद traffic pattern suspicious लगे तो। Enterprise networks में ज़्यादा risk है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        MAC spoofing detect करने और रोकने के तरीके:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Network Access Control (NAC):</strong> 802.1X authentication — MAC address से ज़्यादा secure identity verify करता है। Certificate-based auth best है</li>
        <li><strong className="text-white">DHCP Snooping:</strong> Switch level पर MAC-IP binding verify करता है। ARP spoofing detect करता है</li>
        <li><strong className="text-white">Dynamic ARP Inspection:</strong> ARP spoofing और MAC spoofing detect करता है। Switch पर enable करना होता है</li>
        <li><strong className="text-white">Port Security:</strong> Switch port पर allowed MAC addresses limit करता है। Sticky MAC — पहला MAC lock हो जाता है</li>
        <li><strong className="text-white">Wireless IDS/IPS:</strong> Duplicate MAC detection — एक MAC दो devices पर दिखे तो alert। Rogue device detection</li>
        <li><strong className="text-white">Behavioral Analysis:</strong> MAC change के बाद traffic pattern analysis — suspicious behavior detect। Anomaly detection systems</li>
        <li><strong className="text-white">Certificate-based Auth:</strong> MAC address पर depend न करो — certificates use करो। EAP-TLS authentication</li>
        <li><strong className="text-white">RADIUS/TACACS+:</strong> Centralized authentication — MAC spoofing irrelevant हो जाता है</li>
        <li><strong className="text-white">MAC Address Filtering:</strong> Whitelist-based access — सिर्फ allowed MAC addresses network access ले सकते हैं</li>
        <li><strong className="text-white">Network Monitoring:</strong> SIEM integration — MAC change events log करो और alert generate करो</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        MAC spoofing practice के लिए safe lab बनाओ:
      </p>
      <CodeBlock
        title="Practice Lab"
        code={`# VirtualBox / VMware में Kali VM:
# Network adapter: NAT या Bridged
# USB WiFi adapter attach करें (अगर wireless test करना है)

# Practice steps:
# 1. Current MAC check करें:
macchanger -s wlan0

# 2. Random MAC set करें:
sudo ifconfig wlan0 down
sudo macchanger -r wlan0
sudo ifconfig wlan0 up
macchanger -s wlan0

# 3. Same vendor MAC try करें:
sudo ifconfig wlan0 down
sudo macchanger -a wlan0
sudo ifconfig wlan0 up

# 4. Specific MAC set करें:
sudo ifconfig wlan0 down
sudo macchanger -m 00:11:22:33:44:55 wlan0
sudo ifconfig wlan0 up

# 5. Original restore करें:
sudo ifconfig wlan0 down
sudo macchanger -p wlan0
sudo ifconfig wlan0 up

# WiFi monitoring practice:
# Router admin panel खोलें → connected devices देखें
# MAC change करें → फिर check करें — नया device दिखेगा

# Advanced lab:
# 1. Two VMs बनाएं (attacker + target)
# 2. Router admin panel monitor करें
# 3. MAC spoofing करके device identity change देखें
# 4. MAC filtering enable करके bypass test करें`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced MAC Spoofing"
        code={`# Automated MAC rotation script:
#!/bin/bash
# हर 5 मिनट में MAC change करें
while true; do
    sudo ifconfig wlan0 down
    sudo macchanger -r wlan0
    sudo ifconfig wlan0 up
    echo "[+] New MAC: $(macchanger -s wlan0 | grep 'Current')"
    sleep 300
done

# Vendor-specific rotation (realistic):
#!/bin/bash
VENDORS=("00:1B:21" "00:0C:29" "00:50:56" "00:1A:2B" "B8:27:EB")
for vendor in "\${VENDORS[@]}"; do
    RANDOM_SUFFIX=$(printf '%02X:%02X:%02X' $((RANDOM%256)) $((RANDOM%256)) $((RANDOM%256)))
    MAC="$vendor:$RANDOM_SUFFIX"
    sudo ifconfig wlan0 down
    sudo macchanger -m $MAC wlan0
    sudo ifconfig wlan0 up
    echo "[+] MAC set to: $MAC"
    sleep 60
done

# NetworkManager dispatcher script:
# /etc/NetworkManager/dispatcher.d/99-macchanger
#!/bin/bash
if [ "$2" = "up" ]; then
    macchanger -r "$1"
fi

# WiFi probe request tracking avoidance:
# Random MAC + randomized probe requests
# Android 10+ और iOS 14+ में built-in है

# MAC address validation script:
#!/bin/bash
MAC=$(macchanger -s wlan0 | grep 'Current' | awk '{print $3}')
# Locally administered bit check
FIRST_OCTET=$(echo $MAC | cut -d: -f1)
SECOND_NIBBLE=$(echo $FIRST_OCTET | cut -c2)
if [[ "$SECOND_NIBBLE" =~ [26AEae] ]]; then
    echo "[+] Valid locally administered MAC: $MAC"
else
    echo "[-] Suspicious MAC (not locally administered): $MAC"
fi

# Multiple WiFi adapters — different MACs:
#!/bin/bash
for iface in wlan0 wlan1 wlan2; do
    sudo ip link set $iface down
    sudo macchanger -r $iface
    sudo ip link set $iface up
    echo "[+] $iface: $(macchanger -s $iface | grep 'Current')"
done`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या MAC spoofing illegal है?', a: 'अपने डिवाइस पर MAC change करना generally legal है। लेकिन किसी नेटवर्क की security bypass करने के लिए MAC spoofing करना illegal हो सकता है। भारत में IT Act 2000 Section 43 और 66 के तहत unauthorized network access अपराध है।' },
          { q: 'MAC spoofing से ISP track हो सकता है?', a: 'नहीं। ISP आपको IP address से track करता है, MAC address से नहीं। MAC address local network layer (Layer 2) पर ही काम करता है। Router से बाहर जाते ही MAC address change हो जाता है। पूर्ण anonymity के लिए VPN या Tor use करें।' },
          { q: 'Random MAC vs Same Vendor MAC — कौन सा बेहतर?', a: 'Privacy के लिए random MAC (-r) अच्छा है। लेकिन detection से बचने के लिए same vendor MAC (-a) बेहतर है क्योंकि यह realistic लगता है। अगर network admin OUI check करे तो random MAC suspicious लग सकता है।' },
          { q: 'क्या Windows पर macchanger काम करता है?', a: 'नहीं, macchanger सिर्फ Linux के लिए है। Windows पर TMAC (Technitium MAC Address Changer) या registry edit से MAC change कर सकते हो। macOS पर System Preferences → Network → Advanced → Hardware से change होता है।' },
          { q: 'MAC change करने पर WiFi disconnect क्यों होता है?', a: 'जब MAC change होता है तो network आपके device को नए device की तरह treat करता है। Router को重新 authenticate करना पड़ता है। यह normal behavior है। Interface down/up करने पर reconnect automatic होना चाहिए।' },
          { q: 'क्या MAC address hardware में permanently burned है?', a: 'हाँ, NIC (Network Interface Card) में factory MAC address permanently store होता है। macchanger सिर्फ software level पर change करता है — hardware MAC वही रहता है। -p flag से hardware MAC restore हो जाता है। कुछ NICs में EEPROM होता है जिसमें MAC physically write भी कर सकते हो (advanced)।' },
          { q: 'क्या मोबाइल पर MAC change कर सकते हैं?', a: 'Android 10+ में MAC randomization built-in है — हर WiFi network के लिए random MAC use होता है। Settings → WiFi → Advanced → Privacy से change कर सकते हो। Rooted Android पर macchanger app use कर सकते हो। iOS 14+ में Private WiFi Address feature है।' },
          { q: 'MAC spoofing से completely anonymous हो सकते हैं?', a: 'नहीं। MAC spoofing सिर्फ local network layer पर काम करता है। पूर्ण anonymity के लिए MAC + VPN + Tor + no login combination चाहिए। Browser fingerprinting, cookies, और behavioral analysis से भी track हो सकता है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        MAC spoofing real-world scenarios में बहुत commonly use होता है। एक penetration tester को retail chain के WiFi network का security audit करना था। उन्होंने macchanger से MAC change करके network में connect किया — MAC filtering bypass हो गई। फिर उन्होंने network scan करके 15 unauthorized devices find कीं जो MAC filtering policy violate कर रही थीं। Report में उन्होंने MAC filtering की weakness demonstrate की और 802.1X authentication recommend किया।
      </p>
      <p>
        एक privacy researcher ने airport WiFi networks पर MAC tracking study की। उन्होंने macchanger से हर 30 मिनट में MAC change किया और track किया कि network कैसे new device treat करता है। Study से पता चला कि 80% public WiFi networks MAC-based tracking use करती हैं — user consent के बिना। यह research privacy regulations बनाने में helpful रही।
      </p>
      <p>
        एक incident response team को corporate network में rogue access point detect करना था। उन्होंने macchanger से known vendor MAC (Cisco) set करके rogue AP से connect किया। Rogue AP MAC filtering use कर रहा था जो सिर्फ Cisco devices allow करता था। MAC spoofing से team ने rogue AP का traffic capture किया और attacker identify किया। यह case study MAC filtering की limitations clearly demonstrate करता है।
      </p>
      <p>
        एक security analyst ने hotel WiFi network का assessment किया। Hotel guest isolation implement कर रहा था — guests एक-दूसरे को नहीं देख सकते थे। MAC spoofing से analyst ने another guest का MAC copy करके उसके device की network identity assume की। इससे guest isolation bypass हो गई और analyst ने network traffic access कर लिया। Hotel को VLAN-based isolation implement करना पड़ा।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        MAC spoofing अकेले rarely use होता है — यह usually other security tools के साथ combine होता है। WiFi hacking workflow में macchanger पहला step है। Aircrack-ng, Wifite, Bettercap, Nmap — सबके साथ macchanger use कर सकते हो।
      </p>
      <CodeBlock
        title="Aircrack-ng + Macchanger Combo"
        code={`# Complete WiFi pentesting workflow:

# Step 1: MAC change करो:
sudo ifconfig wlan0 down
sudo macchanger -r wlan0
sudo ifconfig wlan0 up

# Step 2: Monitor mode on:
sudo airmon-ng check kill
sudo airmon-ng start wlan0

# Step 3: Target scan करो:
sudo airodump-ng wlan0mon

# Step 4: Specific target lock:
sudo airodump-ng --bssid AA:BB:CC:DD:EE:FF -c 6 -w capture wlan0mon

# Step 5: WPA handshake capture (deauth attack):
sudo aireplay-ng --deauth 10 -a AA:BB:CC:DD:EE:FF wlan0mon

# Step 6: Handshake crack करो:
airrock-ng -w wordlist.txt capture-01.cap

# Step 7: Original MAC restore:
sudo airmon-ng stop wlan0mon
sudo ifconfig wlan0 down
sudo macchanger -p wlan0
sudo ifconfig wlan0 up

# One-liner setup:
sudo ifconfig wlan0 down && sudo macchanger -r wlan0 && sudo airmon-ng check kill && sudo airmon-ng start wlan0`}
      />
      <CodeBlock
        title="Bettercap + Macchanger Combo"
        code={`# Bettercap MITM attack setup:

# Step 1: MAC change:
sudo ifconfig wlan0 down
sudo macchanger -r wlan0
sudo ifconfig wlan0 up

# Step 2: Bettercap start:
sudo bettercap -iface wlan0

# Step 3: Network scan:
net.probe on

# Step 4: ARP spoofing:
set arp.spoof.targets 192.168.1.100
arp.spoof on

# Step 5: Packet capture:
net.sniff on

# Step 6: DNS spoofing (optional):
set dns.spoof.domains target.com
set dns.spoof.address 192.168.1.50
dns.spoof on

# Bettercap + macchanger automated script:
#!/bin/bash
sudo ifconfig wlan0 down
sudo macchanger -r wlan0
sudo ifconfig wlan0 up
sudo bettercap -iface wlan0 -caplet caplets/arp-spoof.cap`}
      />
      <CodeBlock
        title="Nmap Stealth Scanning + MAC Spoofing"
        code={`# Stealth scanning — MAC change + Nmap combo:

# Step 1: Random MAC set करो:
sudo ifconfig eth0 down
sudo macchanger -r eth0
sudo ifconfig eth0 up

# Step 2: Stealth scan:
sudo nmap -sS -T2 -D RND:10 192.168.1.0/24
# -sS = SYN scan (half-open)
# -T2 = Slow timing (stealthy)
# -D RND:10 = 10 random decoys

# Step 3: Service detection:
sudo nmap -sV -O 192.168.1.100

# Step 4: Original MAC restore:
sudo ifconfig eth0 down
sudo macchanger -p eth0
sudo ifconfig eth0 up

# Nmap with spoofed MAC:
sudo nmap --spoof-mac AA:BB:CC:DD:EE:FF 192.168.1.0/24
# Nmap built-in MAC spoofing (limited)
# macchanger ज़्यादा flexible है`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        MAC spoofing को automate करने के कई तरीके हैं। Bash scripts, Python scripts, systemd services — सब use कर सकते हो। Automation सबसे ज़्यादा useful है WiFi pentesting workflows में जहाँ हर बार same steps repeat होते हैं।
      </p>
      <CodeBlock
        title="Python MAC Automation Script"
        code={`#!/usr/bin/env python3
# mac_auto.py — Automated MAC spoofing with logging

import subprocess
import re
import random
import time
from datetime import datetime

def get_current_mac(interface):
    result = subprocess.run(["macchanger", "-s", interface], capture_output=True, text=True)
    match = re.search(r"Current MAC:\\s+([0-9a-f:]{17})", result.stdout)
    return match.group(1) if match else None

def get_permanent_mac(interface):
    result = subprocess.run(["macchanger", "-s", interface], capture_output=True, text=True)
    match = re.search(r"Permanent MAC:\\s+([0-9a-f:]{17})", result.stdout)
    return match.group(1) if match else None

def generate_random_mac():
    first_octet = random.randint(0x00, 0xff) & 0xFE | 0x02
    return "{:02x}:{:02x}:{:02x}:{:02x}:{:02x}:{:02x}".format(
        first_octet, random.randint(0, 255), random.randint(0, 255),
        random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))

def change_mac(interface, new_mac):
    subprocess.run(["ip", "link", "set", interface, "down"], check=True)
    subprocess.run(["macchanger", "-m", new_mac, interface], check=True)
    subprocess.run(["ip", "link", "set", interface, "up"], check=True)
    return get_current_mac(interface)

def log_change(interface, old_mac, new_mac):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open("/var/log/mac_changes.log", "a") as f:
        f.write(f"{timestamp} | {interface} | {old_mac} -> {new_mac}\\n")

# Main execution
interface = "wlan0"
old_mac = get_current_mac(interface)
new_mac = generate_random_mac()
result_mac = change_mac(interface, new_mac)
log_change(interface, old_mac, result_mac)
print(f"[+] MAC changed: {old_mac} -> {result_mac}")`}
      />
      <CodeBlock
        title="WiFi Pentest Automation Script"
        code={`#!/bin/bash
# wifi_pentest_setup.sh — One script for full WiFi pentest setup

INTERFACE="wlan0"
MONITOR_INTERFACE="wlan0mon"

echo "[*] WiFi Pentest Setup Starting..."

# Step 1: MAC change
echo "[*] Changing MAC address..."
sudo ip link set $INTERFACE down
sudo macchanger -r $INTERFACE
sudo ip link set $INTERFACE up
CURRENT_MAC=$(macchanger -s $INTERFACE | grep "Current" | awk '{print $3}')
echo "[+] New MAC: $CURRENT_MAC"

# Step 2: Kill conflicting processes
echo "[*] Killing conflicting processes..."
sudo airmon-ng check kill

# Step 3: Enable monitor mode
echo "[*] Enabling monitor mode..."
sudo airmon-ng start $INTERFACE

# Step 4: Verify
echo "[*] Monitor mode interface: $MONITOR_INTERFACE"
macchanger -s $MONITOR_INTERFACE

echo "[*] Setup complete! Ready for scanning."
echo "[*] Next steps:"
echo "    sudo airodump-ng $MONITOR_INTERFACE"
echo "    sudo airodump-ng --bssid TARGET_BSSID -c CHANNEL -w capture $MONITOR_INTERFACE"

# Cleanup function
cleanup() {
    echo "[*] Cleaning up..."
    sudo airmon-ng stop $MONITOR_INTERFACE
    sudo ip link set $INTERFACE down
    sudo macchanger -p $INTERFACE
    sudo ip link set $INTERFACE up
    sudo systemctl start NetworkManager
    echo "[+] Original MAC restored"
}

trap cleanup EXIT`}
      />
      <CodeBlock
        title="NetworkManager Dispatcher Script"
        code={`# /etc/NetworkManager/dispatcher.d/99-macchanger
# हर बार WiFi connect होने पर automatically MAC change

#!/bin/bash

INTERFACE=$1
ACTION=$2

if [ "$ACTION" = "up" ]; then
    # WiFi connect होने पर random MAC set करो
    /usr/bin/macchanger -r "$INTERFACE" >> /var/log/macchanger.log 2>&1
    echo "$(date): MAC changed for $INTERFACE" >> /var/log/macchanger.log
fi

# Permissions:
sudo chmod +x /etc/NetworkManager/dispatcher.d/99-macchanger

# Log check:
tail -f /var/log/macchanger.log

# Alternative — pre-up hook (connect से पहले):
# /etc/NetworkManager/dispatcher.d/pre-up.d/99-macchanger`}
      />

      <h2>Performance Tuning</h2>
      <p>
        MAC change operation बहुत fast है — usually 1-2 seconds में complete हो जाता है। लेकिन कुछ scenarios में optimization ज़रूरी है। Automated scripts में delay minimize करने के लिए proper technique use करो।
      </p>
      <CodeBlock
        title="Fast MAC Rotation"
        code={`# Fastest method — direct kernel interface:
# ifconfig/ip link + macchanger combo

# Speed comparison:
# Method 1: macchanger only (with auto down/up):
time sudo macchanger -r wlan0
# ~1.5 seconds

# Method 2: Manual interface control:
time sudo ip link set wlan0 down && sudo macchanger -r wlan0 && sudo ip link set wlan0 up
# ~0.8 seconds

# Method 3: Direct ip link (fastest):
time sudo ip link set wlan0 down && sudo ip link set wlan0 address $(python3 -c "import random; print('02:%02x:%02x:%02x:%02x:%02x' % tuple(random.randint(0,255) for _ in range(5)))") && sudo ip link set wlan0 up
# ~0.3 seconds

# For automated scripts — minimize interface down time:
#!/bin/bash
# Quick MAC rotate
NEW_MAC=$(printf '02:%02X:%02X:%02X:%02X:%02X' $RANDOM $RANDOM $RANDOM $RANDOM $RANDOM)
sudo ip link set wlan0 down
sudo ip link set wlan0 address $NEW_MAC
sudo ip link set wlan0 up
echo "MAC: $NEW_MAC"

# Batch MAC change (multiple interfaces):
for iface in wlan0 eth0 wlan1; do
    sudo ip link set $iface down
    sudo macchanger -r $iface > /dev/null 2>&1
    sudo ip link set $iface up
done`}
      />
      <CodeBlock
        title="Memory-efficient Rotation"
        code={`# Long-running MAC rotation — minimize memory leaks:

# Bash script with minimal memory footprint:
#!/bin/bash
INTERFACES=("wlan0" "eth0")
while true; do
    for iface in "\${INTERFACES[@]}"; do
        sudo ip link set $iface down
        MAC=$(printf '02:%02X:%02X:%02X:%02X:%02X' $RANDOM $RANDOM $RANDOM $RANDOM $RANDOM)
        sudo ip link set $iface address $MAC
        sudo ip link set $iface up
    done
    sleep 300
done

# Cron job approach (lowest overhead):
# crontab -e
# */5 * * * * /usr/bin/macchanger -r wlan0

# Systemd timer (most reliable):
# /etc/systemd/system/mac-rotate.timer
# [Timer]
# OnBootSec=300
# OnUnitActiveSec=300

# /etc/systemd/system/mac-rotate.service
# [Service]
# Type=oneshot
# ExecStart=/usr/bin/macchanger -r wlan0`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Penetration testing reports में MAC spoofing activities document करना ज़रूरी है। Client को दिखाना होता है कि MAC filtering bypass हो सकती है। Logs maintain करो और screenshots लो।
      </p>
      <CodeBlock
        title="MAC Change Logging"
        code={`# Comprehensive logging script:
#!/bin/bash

LOG_FILE="/var/log/mac_spoofing_audit.log"
INTERFACE="wlan0"

# Current state log:
echo "=== MAC Spoofing Audit Log ===" >> $LOG_FILE
echo "Date: $(date)" >> $LOG_FILE
echo "User: $(whoami)" >> $LOG_FILE
echo "Interface: $INTERFACE" >> $LOG_FILE
echo "Original MAC: $(macchanger -s $INTERFACE | grep 'Permanent' | awk '{print $3}')" >> $LOG_FILE
echo "Current MAC: $(macchanger -s $INTERFACE | grep 'Current' | awk '{print $3}')" >> $LOG_FILE

# Change MAC and log:
OLD_MAC=$(macchanger -s $INTERFACE | grep 'Current' | awk '{print $3}')
sudo ip link set $INTERFACE down
sudo macchanger -r $INTERFACE
sudo ip link set $INTERFACE up
NEW_MAC=$(macchanger -s $INTERFACE | grep 'Current' | awk '{print $3}')

echo "MAC Change: $OLD_MAC -> $NEW_MAC" >> $LOG_FILE
echo "Vendor: $(macchanger -s $INTERFACE | grep 'Current' | cut -d'(' -f2 | cut -d')' -f1)" >> $LOG_FILE
echo "================================" >> $LOG_FILE

# Generate report:
echo "[+] Change logged to $LOG_FILE"
cat $LOG_FILE`}
      />
      <CodeBlock
        title="MAC Vendor Analysis Report"
        code={`#!/bin/bash
# Vendor analysis — which MACs are most common in area

LOG_DIR="/var/log/mac_audits"
mkdir -p $LOG_DIR

# Scan WiFi networks and collect MACs:
sudo airodump-ng wlan0mon --output-format csv -w $LOG_DIR/scan &
SCAN_PID=$!
sleep 120
kill $SCAN_PID

# Extract vendor info:
echo "=== MAC Vendor Analysis ===" > $LOG_DIR/report.txt
echo "Scan Date: $(date)" >> $LOG_DIR/report.txt
echo "" >> $LOG_DIR/report.txt

# Parse CSV and count vendors:
awk -F',' '{print $7}' $LOG_DIR/scan-01.csv | sort | uniq -c | sort -rn | head -20 >> $LOG_DIR/report.txt

echo "[+] Report saved to $LOG_DIR/report.txt"

# Common vendor OUIs for reference:
echo "=== Vendor Reference ===" >> $LOG_DIR/report.txt
echo "Intel:    00:1B:21, 00:1E:65" >> $LOG_DIR/report.txt
echo "Apple:    00:03:93, 00:0A:27" >> $LOG_DIR/report.txt
echo "Samsung:  00:16:32, 00:18:AF" >> $LOG_DIR/report.txt
echo "TP-Link:  50:C7:BF, 54:C8:0F" >> $LOG_DIR/report.txt

# Cleanup:
rm -f $LOG_DIR/scan-01.csv`}
      />

      <h2>Alternatives</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">टूल / Method</th>
              <th className="text-left py-2 px-3 text-neon-green">Platform</th>
              <th className="text-left py-2 px-3 text-neon-green">खासियत</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ifconfig / ip link</td><td className="py-2 px-3">Linux</td><td className="py-2 px-3">Built-in, manual MAC set, random नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">TMAC</td><td className="py-2 px-3">Windows</td><td className="py-2 px-3">GUI, random MAC, vendor list, profiles</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">macchanger-ng</td><td className="py-2 px-3">Linux</td><td className="py-2 px-3">Enhanced fork, extra features, active dev</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">NetworkManager</td><td className="py-2 px-3">Linux</td><td className="py-2 px-3">Built-in random MAC per connection</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">System Preferences</td><td className="py-2 px-3">macOS</td><td className="py-2 px-3">Built-in, manual MAC set</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Android Settings</td><td className="py-2 px-3">Android 10+</td><td className="py-2 px-3">Built-in per-network randomization</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">macchanger app</td><td className="py-2 px-3">Rooted Android</td><td className="py-2 px-3">CLI tool, same as Linux version</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Registry Edit</td><td className="py-2 px-3">Windows</td><td className="py-2 px-3">Manual, advanced, no extra software</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>WiFi hacking से पहले हमेशा MAC change करो — अगर पकड़े जाओ तो real MAC से identify हो सकते हो</li>
          <li>Random MAC सबसे अच्छा है (-r flag)। Same vendor MAC (-a flag) और realistic लगता है और detection से बचाता है</li>
          <li>Public WiFi पर हमेशा MAC randomization on रखो — Android/iOS में built-in feature enable करो</li>
          <li>एक script बनाओ जो boot पर automatically MAC change करे — systemd service best है</li>
          <li>Enterprise networks में MAC spoofing risky है — NAC, 802.1X, DHCP snooping detect कर सकते हैं</li>
          <li>हमेशा original MAC note रखो — कुछ गड़बड़ हो तो restore कर सको</li>
          <li>Multiple WiFi adapters हों तो हर adapter का अलग MAC रखो — same MAC suspicious है</li>
          <li>MAC + VPN + Tor = strong anonymity layer combination</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> macchanger एक powerful privacy और security testing टूल है। इसका इस्तेमाल केवल अपने डिवाइस और authorized testing पर ही करें। बिना अनुमति के नेटवर्क access bypass करना अवैध है। भारत में IT एक्ट 2000 की धारा 43 और 66 के तहत नेटवर्क सुरक्षा bypass करना अपराध है। MAC spoofing सिर्फ local network layer पर काम करता है — पूर्ण anonymity के लिए VPN या Tor भी इस्तेमाल करें।
      </div>
    </TutorialLayout>
  )
}
