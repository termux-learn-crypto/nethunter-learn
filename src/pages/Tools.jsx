import { useState } from 'react'
import { Link } from 'react-router-dom'
import TutorialLayout from '../components/TutorialLayout'
import CodeBlock from '../components/CodeBlock'

const tools = [
  {
    name: 'Aircrack ng',
    slug: 'aircrack-ng',
    category: 'WiFi',
    commands: ['aircrack-ng --help', 'aircrack-ng -v', 'aircrack-ng target.local'],
  },
  {
    name: 'Airgeddon',
    slug: 'airgeddon',
    category: 'WiFi',
    commands: ['airgeddon --help', 'airgeddon -v', 'airgeddon target.local'],
  },
  {
    name: 'Bully',
    slug: 'bully',
    category: 'WiFi',
    commands: ['bully --help', 'bully -v', 'bully target.local'],
  },
  {
    name: 'Cowpatty',
    slug: 'cowpatty',
    category: 'WiFi',
    commands: ['cowpatty --help', 'cowpatty -v', 'cowpatty target.local'],
  },
  {
    name: 'Eaphammer',
    slug: 'eaphammer',
    category: 'WiFi',
    commands: ['eaphammer --help', 'eaphammer -v', 'eaphammer target.local'],
  },
  {
    name: 'Fern WiFi Cracker',
    slug: 'fern-wifi',
    category: 'WiFi',
    commands: ['fern-wifi --help', 'fern-wifi -v', 'fern-wifi target.local'],
  },
  {
    name: 'Fluxion',
    slug: 'fluxion',
    category: 'WiFi',
    commands: ['fluxion --help', 'fluxion -v', 'fluxion target.local'],
  },
  {
    name: 'Hcxdumptool',
    slug: 'hcxdumptool',
    category: 'WiFi',
    commands: ['hcxdumptool --help', 'hcxdumptool -v', 'hcxdumptool target.local'],
  },
  {
    name: 'Hostapd mana',
    slug: 'hostapd-mana',
    category: 'WiFi',
    commands: ['hostapd-mana --help', 'hostapd-mana -v', 'hostapd-mana target.local'],
  },
  {
    name: 'Kismet',
    slug: 'kismet',
    category: 'WiFi',
    commands: ['kismet --help', 'kismet -v', 'kismet target.local'],
  },
  {
    name: 'Macchanger',
    slug: 'macchanger',
    category: 'WiFi',
    commands: ['macchanger --help', 'macchanger -v', 'macchanger target.local'],
  },
  {
    name: 'Mana Toolkit',
    slug: 'mana-toolkit',
    category: 'WiFi',
    commands: ['mana-toolkit --help', 'mana-toolkit -v', 'mana-toolkit target.local'],
  },
  {
    name: 'MDK3',
    slug: 'mdk3',
    category: 'WiFi',
    commands: ['mdk3 --help', 'mdk3 -v', 'mdk3 target.local'],
  },
  {
    name: 'MDK4',
    slug: 'mdk4',
    category: 'WiFi',
    commands: ['mdk4 --help', 'mdk4 -v', 'mdk4 target.local'],
  },
  {
    name: 'Pixiewps',
    slug: 'pixiewps',
    category: 'WiFi',
    commands: ['pixiewps --help', 'pixiewps -v', 'pixiewps target.local'],
  },
  {
    name: 'Reaver',
    slug: 'reaver',
    category: 'WiFi',
    commands: ['reaver --help', 'reaver -v', 'reaver target.local'],
  },
  {
    name: 'Sslstrip',
    slug: 'sslstrip',
    category: 'WiFi',
    commands: ['sslstrip --help', 'sslstrip -v', 'sslstrip target.local'],
  },
  {
    name: 'Wash',
    slug: 'wash',
    category: 'WiFi',
    commands: ['wash --help', 'wash -v', 'wash target.local'],
  },
  {
    name: 'Wifite',
    slug: 'wifite',
    category: 'WiFi',
    commands: ['wifite --help', 'wifite -v', 'wifite target.local'],
  },
  {
    name: 'Amass',
    slug: 'amass',
    category: 'Recon',
    commands: ['amass --help', 'amass -v', 'amass target.local'],
  },
  {
    name: 'Arp scan',
    slug: 'arp-scan',
    category: 'Recon',
    commands: ['arp-scan --help', 'arp-scan -v', 'arp-scan target.local'],
  },
  {
    name: 'BIND9',
    slug: 'bind9',
    category: 'Recon',
    commands: ['bind9 --help', 'bind9 -v', 'bind9 target.local'],
  },
  {
    name: 'Bloodhound',
    slug: 'bloodhound',
    category: 'Recon',
    commands: ['bloodhound --help', 'bloodhound -v', 'bloodhound target.local'],
  },
  {
    name: 'Bluelog',
    slug: 'bluelog',
    category: 'Recon',
    commands: ['bluelog --help', 'bluelog -v', 'bluelog target.local'],
  },
  {
    name: 'BlueSnarfer',
    slug: 'bluesnarfer',
    category: 'Recon',
    commands: ['bluesnarfer --help', 'bluesnarfer -v', 'bluesnarfer target.local'],
  },
  {
    name: 'CutyCapt',
    slug: 'cutycapt',
    category: 'Recon',
    commands: ['cutycapt --help', 'cutycapt -v', 'cutycapt target.local'],
  },
  {
    name: 'DMitry',
    slug: 'dmitry',
    category: 'Recon',
    commands: ['dmitry --help', 'dmitry -v', 'dmitry target.local'],
  },
  {
    name: 'DNSchef',
    slug: 'dnschef',
    category: 'Recon',
    commands: ['dnschef --help', 'dnschef -v', 'dnschef target.local'],
  },
  {
    name: 'Dnsenum',
    slug: 'dnsenum',
    category: 'Recon',
    commands: ['dnsenum --help', 'dnsenum -v', 'dnsenum target.local'],
  },
  {
    name: 'Dnsmap',
    slug: 'dnsmap',
    category: 'Recon',
    commands: ['dnsmap --help', 'dnsmap -v', 'dnsmap target.local'],
  },
  {
    name: 'Dnsrecon',
    slug: 'dnsrecon',
    category: 'Recon',
    commands: ['dnsrecon --help', 'dnsrecon -v', 'dnsrecon target.local'],
  },
  {
    name: 'Dradis',
    slug: 'dradis',
    category: 'Recon',
    commands: ['dradis --help', 'dradis -v', 'dradis target.local'],
  },
  {
    name: 'Enum4linux',
    slug: 'enum4linux',
    category: 'Recon',
    commands: ['enum4linux --help', 'enum4linux -v', 'enum4linux target.local'],
  },
  {
    name: 'Faraday',
    slug: 'faraday',
    category: 'Recon',
    commands: ['faraday --help', 'faraday -v', 'faraday target.local'],
  },
  {
    name: 'Fierce',
    slug: 'fierce',
    category: 'Recon',
    commands: ['fierce --help', 'fierce -v', 'fierce target.local'],
  },
  {
    name: 'Finger',
    slug: 'finger',
    category: 'Recon',
    commands: ['finger --help', 'finger -v', 'finger target.local'],
  },
  {
    name: 'IKE-Scan',
    slug: 'ike-scan',
    category: 'Recon',
    commands: ['ike-scan --help', 'ike-scan -v', 'ike-scan target.local'],
  },
  {
    name: 'KeepNote',
    slug: 'keepnote',
    category: 'Recon',
    commands: ['keepnote --help', 'keepnote -v', 'keepnote target.local'],
  },
  {
    name: 'LBD',
    slug: 'lbd',
    category: 'Recon',
    commands: ['lbd --help', 'lbd -v', 'lbd target.local'],
  },
  {
    name: 'Maltego',
    slug: 'maltego',
    category: 'Recon',
    commands: ['maltego --help', 'maltego -v', 'maltego target.local'],
  },
  {
    name: 'Masscan',
    slug: 'masscan',
    category: 'Recon',
    commands: ['masscan --help', 'masscan -v', 'masscan target.local'],
  },
  {
    name: 'Metagoofil',
    slug: 'metagoofil',
    category: 'Recon',
    commands: ['metagoofil --help', 'metagoofil -v', 'metagoofil target.local'],
  },
  {
    name: 'Naabu',
    slug: 'naabu',
    category: 'Recon',
    commands: ['naabu --help', 'naabu -v', 'naabu target.local'],
  },
  {
    name: 'NBTScan',
    slug: 'nbtscan',
    category: 'Recon',
    commands: ['nbtscan --help', 'nbtscan -v', 'nbtscan target.local'],
  },
  {
    name: 'Netdiscover',
    slug: 'netdiscover',
    category: 'Recon',
    commands: ['netdiscover --help', 'netdiscover -v', 'netdiscover target.local'],
  },
  {
    name: 'Nmap',
    slug: 'nmap',
    category: 'Recon',
    commands: ['nmap --help', 'nmap -v', 'nmap target.local'],
  },
  {
    name: 'P0f',
    slug: 'p0f',
    category: 'Recon',
    commands: ['p0f --help', 'p0f -v', 'p0f target.local'],
  },
  {
    name: 'Recon ng',
    slug: 'recon-ng',
    category: 'Recon',
    commands: ['recon-ng --help', 'recon-ng -v', 'recon-ng target.local'],
  },
  {
    name: 'RPCBind',
    slug: 'rpcbind',
    category: 'Recon',
    commands: ['rpcbind --help', 'rpcbind -v', 'rpcbind target.local'],
  },
  {
    name: 'Sherlock',
    slug: 'sherlock',
    category: 'Recon',
    commands: ['sherlock --help', 'sherlock -v', 'sherlock target.local'],
  },
  {
    name: 'Showmount',
    slug: 'showmount',
    category: 'Recon',
    commands: ['showmount --help', 'showmount -v', 'showmount target.local'],
  },
  {
    name: 'SMBClient',
    slug: 'smbclient',
    category: 'Recon',
    commands: ['smbclient --help', 'smbclient -v', 'smbclient target.local'],
  },
  {
    name: 'SMBMap',
    slug: 'smbmap',
    category: 'Recon',
    commands: ['smbmap --help', 'smbmap -v', 'smbmap target.local'],
  },
  {
    name: 'SNMP-Check',
    slug: 'snmp-check',
    category: 'Recon',
    commands: ['snmp-check --help', 'snmp-check -v', 'snmp-check target.local'],
  },
  {
    name: 'Sparta',
    slug: 'sparta',
    category: 'Recon',
    commands: ['sparta --help', 'sparta -v', 'sparta target.local'],
  },
  {
    name: 'Spooftooph',
    slug: 'spooftooph',
    category: 'Recon',
    commands: ['spooftooph --help', 'spooftooph -v', 'spooftooph target.local'],
  },
  {
    name: 'SSLScan',
    slug: 'sslscan',
    category: 'Recon',
    commands: ['sslscan --help', 'sslscan -v', 'sslscan target.local'],
  },
  {
    name: 'SSLyze',
    slug: 'sslyze',
    category: 'Recon',
    commands: ['sslyze --help', 'sslyze -v', 'sslyze target.local'],
  },
  {
    name: 'Subfinder',
    slug: 'subfinder',
    category: 'Recon',
    commands: ['subfinder --help', 'subfinder -v', 'subfinder target.local'],
  },
  {
    name: 'Theharvester',
    slug: 'theharvester',
    category: 'Recon',
    commands: ['theharvester --help', 'theharvester -v', 'theharvester target.local'],
  },
  {
    name: 'Unicornscan',
    slug: 'unicornscan',
    category: 'Recon',
    commands: ['unicornscan --help', 'unicornscan -v', 'unicornscan target.local'],
  },
  {
    name: 'URLCrazy',
    slug: 'urlcrazy',
    category: 'Recon',
    commands: ['urlcrazy --help', 'urlcrazy -v', 'urlcrazy target.local'],
  },
  {
    name: 'Whois',
    slug: 'whois',
    category: 'Recon',
    commands: ['whois --help', 'whois -v', 'whois target.local'],
  },
  {
    name: 'Armitage',
    slug: 'armitage',
    category: 'Exploitation',
    commands: ['armitage --help', 'armitage -v', 'armitage target.local'],
  },
  {
    name: 'Backdoor Factory',
    slug: 'backdoor-factory',
    category: 'Exploitation',
    commands: ['backdoor-factory --help', 'backdoor-factory -v', 'backdoor-factory target.local'],
  },
  {
    name: 'Beef xss',
    slug: 'beef-xss',
    category: 'Exploitation',
    commands: ['beef-xss --help', 'beef-xss -v', 'beef-xss target.local'],
  },
  {
    name: 'Checksec',
    slug: 'checksec',
    category: 'Exploitation',
    commands: ['checksec --help', 'checksec -v', 'checksec target.local'],
  },
  {
    name: 'Commix',
    slug: 'commix',
    category: 'Exploitation',
    commands: ['commix --help', 'commix -v', 'commix target.local'],
  },
  {
    name: 'Crackmapexec',
    slug: 'crackmapexec',
    category: 'Exploitation',
    commands: ['crackmapexec --help', 'crackmapexec -v', 'crackmapexec target.local'],
  },
  {
    name: 'Empire',
    slug: 'empire',
    category: 'Exploitation',
    commands: ['empire --help', 'empire -v', 'empire target.local'],
  },
  {
    name: 'Evil winrm',
    slug: 'evil-winrm',
    category: 'Exploitation',
    commands: ['evil-winrm --help', 'evil-winrm -v', 'evil-winrm target.local'],
  },
  {
    name: 'Exe2Hex',
    slug: 'exe2hex',
    category: 'Exploitation',
    commands: ['exe2hex --help', 'exe2hex -v', 'exe2hex target.local'],
  },
  {
    name: 'Impacket',
    slug: 'impacket',
    category: 'Exploitation',
    commands: ['impacket --help', 'impacket -v', 'impacket target.local'],
  },
  {
    name: 'Koadic',
    slug: 'koadic',
    category: 'Exploitation',
    commands: ['koadic --help', 'koadic -v', 'koadic target.local'],
  },
  {
    name: 'Merlin',
    slug: 'merlin',
    category: 'Exploitation',
    commands: ['merlin --help', 'merlin -v', 'merlin target.local'],
  },
  {
    name: 'Metasploit framework',
    slug: 'metasploit-framework',
    category: 'Exploitation',
    commands: ['metasploit-framework --help', 'metasploit-framework -v', 'metasploit-framework target.local'],
  },
  {
    name: 'Mimikatz',
    slug: 'mimikatz',
    category: 'Exploitation',
    commands: ['mimikatz --help', 'mimikatz -v', 'mimikatz target.local'],
  },
  {
    name: 'MSFPayload',
    slug: 'msfpayload',
    category: 'Exploitation',
    commands: ['msfpayload --help', 'msfpayload -v', 'msfpayload target.local'],
  },
  {
    name: 'Msfvenom',
    slug: 'msfvenom',
    category: 'Exploitation',
    commands: ['msfvenom --help', 'msfvenom -v', 'msfvenom target.local'],
  },
  {
    name: 'Nishang',
    slug: 'nishang',
    category: 'Exploitation',
    commands: ['nishang --help', 'nishang -v', 'nishang target.local'],
  },
  {
    name: 'One Gadget',
    slug: 'one_gadget',
    category: 'Exploitation',
    commands: ['one_gadget --help', 'one_gadget -v', 'one_gadget target.local'],
  },
  {
    name: 'PowerSploit',
    slug: 'powersploit',
    category: 'Exploitation',
    commands: ['powersploit --help', 'powersploit -v', 'powersploit target.local'],
  },
  {
    name: 'Pupy',
    slug: 'pupy',
    category: 'Exploitation',
    commands: ['pupy --help', 'pupy -v', 'pupy target.local'],
  },
  {
    name: 'Pwntools',
    slug: 'pwntools',
    category: 'Exploitation',
    commands: ['pwntools --help', 'pwntools -v', 'pwntools target.local'],
  },
  {
    name: 'Ropper',
    slug: 'ropper',
    category: 'Exploitation',
    commands: ['ropper --help', 'ropper -v', 'ropper target.local'],
  },
  {
    name: 'Searchsploit',
    slug: 'searchsploit',
    category: 'Exploitation',
    commands: ['searchsploit --help', 'searchsploit -v', 'searchsploit target.local'],
  },
  {
    name: 'Setoolkit',
    slug: 'setoolkit',
    category: 'Exploitation',
    commands: ['setoolkit --help', 'setoolkit -v', 'setoolkit target.local'],
  },
  {
    name: 'ShellNoob',
    slug: 'shellnoob',
    category: 'Exploitation',
    commands: ['shellnoob --help', 'shellnoob -v', 'shellnoob target.local'],
  },
  {
    name: 'Shellter',
    slug: 'shellter',
    category: 'Exploitation',
    commands: ['shellter --help', 'shellter -v', 'shellter target.local'],
  },
  {
    name: 'SilentTrinity',
    slug: 'silenttrinity',
    category: 'Exploitation',
    commands: ['silenttrinity --help', 'silenttrinity -v', 'silenttrinity target.local'],
  },
  {
    name: 'THC-IPv6',
    slug: 'thc-ipv6',
    category: 'Exploitation',
    commands: ['thc-ipv6 --help', 'thc-ipv6 -v', 'thc-ipv6 target.local'],
  },
  {
    name: 'TrevorC2',
    slug: 'trevorc2',
    category: 'Exploitation',
    commands: ['trevorc2 --help', 'trevorc2 -v', 'trevorc2 target.local'],
  },
  {
    name: 'Veil',
    slug: 'veil',
    category: 'Exploitation',
    commands: ['veil --help', 'veil -v', 'veil target.local'],
  },
  {
    name: 'Weevely',
    slug: 'weevely',
    category: 'Exploitation',
    commands: ['weevely --help', 'weevely -v', 'weevely target.local'],
  },
  {
    name: 'Burpsuite',
    slug: 'burpsuite',
    category: 'Web',
    commands: ['burpsuite --help', 'burpsuite -v', 'burpsuite target.local'],
  },
  {
    name: 'Cadaver',
    slug: 'cadaver',
    category: 'Web',
    commands: ['cadaver --help', 'cadaver -v', 'cadaver target.local'],
  },
  {
    name: 'CMSMap',
    slug: 'cmsmap',
    category: 'Web',
    commands: ['cmsmap --help', 'cmsmap -v', 'cmsmap target.local'],
  },
  {
    name: 'DavTest',
    slug: 'davtest',
    category: 'Web',
    commands: ['davtest --help', 'davtest -v', 'davtest target.local'],
  },
  {
    name: 'Dirb',
    slug: 'dirb',
    category: 'Web',
    commands: ['dirb --help', 'dirb -v', 'dirb target.local'],
  },
  {
    name: 'DirBuster',
    slug: 'dirbuster',
    category: 'Web',
    commands: ['dirbuster --help', 'dirbuster -v', 'dirbuster target.local'],
  },
  {
    name: 'Ffuf',
    slug: 'ffuf',
    category: 'Web',
    commands: ['ffuf --help', 'ffuf -v', 'ffuf target.local'],
  },
  {
    name: 'Fimap',
    slug: 'fimap',
    category: 'Web',
    commands: ['fimap --help', 'fimap -v', 'fimap target.local'],
  },
  {
    name: 'Gobuster',
    slug: 'gobuster',
    category: 'Web',
    commands: ['gobuster --help', 'gobuster -v', 'gobuster target.local'],
  },
  {
    name: 'HTTP-Enum',
    slug: 'http-enum',
    category: 'Web',
    commands: ['http-enum --help', 'http-enum -v', 'http-enum target.local'],
  },
  {
    name: 'HTTrack',
    slug: 'httrack',
    category: 'Web',
    commands: ['httrack --help', 'httrack -v', 'httrack target.local'],
  },
  {
    name: 'JoomScan',
    slug: 'joomscan',
    category: 'Web',
    commands: ['joomscan --help', 'joomscan -v', 'joomscan target.local'],
  },
  {
    name: 'jSQL Injection',
    slug: 'jsql',
    category: 'Web',
    commands: ['jsql --help', 'jsql -v', 'jsql target.local'],
  },
  {
    name: 'Katana',
    slug: 'katana',
    category: 'Web',
    commands: ['katana --help', 'katana -v', 'katana target.local'],
  },
  {
    name: 'Nikto',
    slug: 'nikto',
    category: 'Web',
    commands: ['nikto --help', 'nikto -v', 'nikto target.local'],
  },
  {
    name: 'Nuclei',
    slug: 'nuclei',
    category: 'Web',
    commands: ['nuclei --help', 'nuclei -v', 'nuclei target.local'],
  },
  {
    name: 'SidGuess',
    slug: 'sidguess',
    category: 'Web',
    commands: ['sidguess --help', 'sidguess -v', 'sidguess target.local'],
  },
  {
    name: 'Skipfish',
    slug: 'skipfish',
    category: 'Web',
    commands: ['skipfish --help', 'skipfish -v', 'skipfish target.local'],
  },
  {
    name: 'Slowloris',
    slug: 'slowloris',
    category: 'Web',
    commands: ['slowloris --help', 'slowloris -v', 'slowloris target.local'],
  },
  {
    name: 'Sqlmap',
    slug: 'sqlmap',
    category: 'Web',
    commands: ['sqlmap --help', 'sqlmap -v', 'sqlmap target.local'],
  },
  {
    name: 'Sqlninja',
    slug: 'sqlninja',
    category: 'Web',
    commands: ['sqlninja --help', 'sqlninja -v', 'sqlninja target.local'],
  },
  {
    name: 'SQLSus',
    slug: 'sqlsus',
    category: 'Web',
    commands: ['sqlsus --help', 'sqlsus -v', 'sqlsus target.local'],
  },
  {
    name: 'THC-SSL-DoS',
    slug: 'thc-ssl-dos',
    category: 'Web',
    commands: ['thc-ssl-dos --help', 'thc-ssl-dos -v', 'thc-ssl-dos target.local'],
  },
  {
    name: 'Wafw00f',
    slug: 'wafw00f',
    category: 'Web',
    commands: ['wafw00f --help', 'wafw00f -v', 'wafw00f target.local'],
  },
  {
    name: 'Wapiti',
    slug: 'wapiti',
    category: 'Web',
    commands: ['wapiti --help', 'wapiti -v', 'wapiti target.local'],
  },
  {
    name: 'WebSploit',
    slug: 'websploit',
    category: 'Web',
    commands: ['websploit --help', 'websploit -v', 'websploit target.local'],
  },
  {
    name: 'WFuzz',
    slug: 'wfuzz',
    category: 'Web',
    commands: ['wfuzz --help', 'wfuzz -v', 'wfuzz target.local'],
  },
  {
    name: 'WhatWeb',
    slug: 'whatweb',
    category: 'Web',
    commands: ['whatweb --help', 'whatweb -v', 'whatweb target.local'],
  },
  {
    name: 'Wpscan',
    slug: 'wpscan',
    category: 'Web',
    commands: ['wpscan --help', 'wpscan -v', 'wpscan target.local'],
  },
  {
    name: 'ACE-VoIP',
    slug: 'ace-voip',
    category: 'Passwords',
    commands: ['ace-voip --help', 'ace-voip -v', 'ace-voip target.local'],
  },
  {
    name: 'Cewl',
    slug: 'cewl',
    category: 'Passwords',
    commands: ['cewl --help', 'cewl -v', 'cewl target.local'],
  },
  {
    name: 'CmosPwd',
    slug: 'cmospwd',
    category: 'Passwords',
    commands: ['cmospwd --help', 'cmospwd -v', 'cmospwd target.local'],
  },
  {
    name: 'CredDump',
    slug: 'creddump',
    category: 'Passwords',
    commands: ['creddump --help', 'creddump -v', 'creddump target.local'],
  },
  {
    name: 'Crunch',
    slug: 'crunch',
    category: 'Passwords',
    commands: ['crunch --help', 'crunch -v', 'crunch target.local'],
  },
  {
    name: 'FindMyHash',
    slug: 'findmyhash',
    category: 'Passwords',
    commands: ['findmyhash --help', 'findmyhash -v', 'findmyhash target.local'],
  },
  {
    name: 'Hashcat',
    slug: 'hashcat',
    category: 'Passwords',
    commands: ['hashcat --help', 'hashcat -v', 'hashcat target.local'],
  },
  {
    name: 'Hydra',
    slug: 'hydra',
    category: 'Passwords',
    commands: ['hydra --help', 'hydra -v', 'hydra target.local'],
  },
  {
    name: 'John',
    slug: 'john',
    category: 'Passwords',
    commands: ['john --help', 'john -v', 'john target.local'],
  },
  {
    name: 'Maskprocessor',
    slug: 'maskprocessor',
    category: 'Passwords',
    commands: ['maskprocessor --help', 'maskprocessor -v', 'maskprocessor target.local'],
  },
  {
    name: 'Medusa',
    slug: 'medusa',
    category: 'Passwords',
    commands: ['medusa --help', 'medusa -v', 'medusa target.local'],
  },
  {
    name: 'Onesixtyone',
    slug: 'onesixtyone',
    category: 'Passwords',
    commands: ['onesixtyone --help', 'onesixtyone -v', 'onesixtyone target.local'],
  },
  {
    name: 'PACK',
    slug: 'pack',
    category: 'Passwords',
    commands: ['pack --help', 'pack -v', 'pack target.local'],
  },
  {
    name: 'PDFCrack',
    slug: 'pdfcrack',
    category: 'Passwords',
    commands: ['pdfcrack --help', 'pdfcrack -v', 'pdfcrack target.local'],
  },
  {
    name: 'Pipal',
    slug: 'pipal',
    category: 'Passwords',
    commands: ['pipal --help', 'pipal -v', 'pipal target.local'],
  },
  {
    name: 'Pyrit',
    slug: 'pyrit',
    category: 'Passwords',
    commands: ['pyrit --help', 'pyrit -v', 'pyrit target.local'],
  },
  {
    name: 'RainbowCrack',
    slug: 'rainbowcrack',
    category: 'Passwords',
    commands: ['rainbowcrack --help', 'rainbowcrack -v', 'rainbowcrack target.local'],
  },
  {
    name: 'SamDump2',
    slug: 'samdump2',
    category: 'Passwords',
    commands: ['samdump2 --help', 'samdump2 -v', 'samdump2 target.local'],
  },
  {
    name: 'SipCrack',
    slug: 'sipcrack',
    category: 'Passwords',
    commands: ['sipcrack --help', 'sipcrack -v', 'sipcrack target.local'],
  },
  {
    name: 'Sucrack',
    slug: 'sucrack',
    category: 'Passwords',
    commands: ['sucrack --help', 'sucrack -v', 'sucrack target.local'],
  },
  {
    name: 'Twofi',
    slug: 'twofi',
    category: 'Passwords',
    commands: ['twofi --help', 'twofi -v', 'twofi target.local'],
  },
  {
    name: 'Wordlists',
    slug: 'wordlists',
    category: 'Passwords',
    commands: ['wordlists --help', 'wordlists -v', 'wordlists target.local'],
  },
  {
    name: 'Bettercap',
    slug: 'bettercap',
    category: 'Network',
    commands: ['bettercap --help', 'bettercap -v', 'bettercap target.local'],
  },
  {
    name: 'DHCPig',
    slug: 'dhcpig',
    category: 'Network',
    commands: ['dhcpig --help', 'dhcpig -v', 'dhcpig target.local'],
  },
  {
    name: 'Ettercap',
    slug: 'ettercap',
    category: 'Network',
    commands: ['ettercap --help', 'ettercap -v', 'ettercap target.local'],
  },
  {
    name: 'Ferret',
    slug: 'ferret',
    category: 'Network',
    commands: ['ferret --help', 'ferret -v', 'ferret target.local'],
  },
  {
    name: 'Hamster',
    slug: 'hamster',
    category: 'Network',
    commands: ['hamster --help', 'hamster -v', 'hamster target.local'],
  },
  {
    name: 'HexInject',
    slug: 'hexinject',
    category: 'Network',
    commands: ['hexinject --help', 'hexinject -v', 'hexinject target.local'],
  },
  {
    name: 'Hping3',
    slug: 'hping3',
    category: 'Network',
    commands: ['hping3 --help', 'hping3 -v', 'hping3 target.local'],
  },
  {
    name: 'InviteFlood',
    slug: 'inviteflood',
    category: 'Network',
    commands: ['inviteflood --help', 'inviteflood -v', 'inviteflood target.local'],
  },
  {
    name: 'Mitmproxy',
    slug: 'mitmproxy',
    category: 'Network',
    commands: ['mitmproxy --help', 'mitmproxy -v', 'mitmproxy target.local'],
  },
  {
    name: 'Netcat',
    slug: 'netcat',
    category: 'Network',
    commands: ['netcat --help', 'netcat -v', 'netcat target.local'],
  },
  {
    name: 'Netsniff-ng',
    slug: 'netsniff-ng',
    category: 'Network',
    commands: ['netsniff-ng --help', 'netsniff-ng -v', 'netsniff-ng target.local'],
  },
  {
    name: 'Rebind',
    slug: 'rebind',
    category: 'Network',
    commands: ['rebind --help', 'rebind -v', 'rebind target.local'],
  },
  {
    name: 'Responder',
    slug: 'responder',
    category: 'Network',
    commands: ['responder --help', 'responder -v', 'responder target.local'],
  },
  {
    name: 'SniffJoke',
    slug: 'sniffjoke',
    category: 'Network',
    commands: ['sniffjoke --help', 'sniffjoke -v', 'sniffjoke target.local'],
  },
  {
    name: 'T50',
    slug: 't50',
    category: 'Network',
    commands: ['t50 --help', 't50 -v', 't50 target.local'],
  },
  {
    name: 'Tcpdump',
    slug: 'tcpdump',
    category: 'Network',
    commands: ['tcpdump --help', 'tcpdump -v', 'tcpdump target.local'],
  },
  {
    name: 'TCPFlow',
    slug: 'tcpflow',
    category: 'Network',
    commands: ['tcpflow --help', 'tcpflow -v', 'tcpflow target.local'],
  },
  {
    name: 'Wireshark',
    slug: 'wireshark',
    category: 'Network',
    commands: ['wireshark --help', 'wireshark -v', 'wireshark target.local'],
  },
  {
    name: 'Yersinia',
    slug: 'yersinia',
    category: 'Network',
    commands: ['yersinia --help', 'yersinia -v', 'yersinia target.local'],
  },
  {
    name: 'Autopsy',
    slug: 'autopsy',
    category: 'Forensics',
    commands: ['autopsy --help', 'autopsy -v', 'autopsy target.local'],
  },
  {
    name: 'Binwalk',
    slug: 'binwalk',
    category: 'Forensics',
    commands: ['binwalk --help', 'binwalk -v', 'binwalk target.local'],
  },
  {
    name: 'Capstone',
    slug: 'capstone',
    category: 'Forensics',
    commands: ['capstone --help', 'capstone -v', 'capstone target.local'],
  },
  {
    name: 'DC3DD',
    slug: 'dc3dd',
    category: 'Forensics',
    commands: ['dc3dd --help', 'dc3dd -v', 'dc3dd target.local'],
  },
  {
    name: 'Dex2Jar',
    slug: 'dex2jar',
    category: 'Forensics',
    commands: ['dex2jar --help', 'dex2jar -v', 'dex2jar target.local'],
  },
  {
    name: 'EDB Debugger',
    slug: 'edb-debugger',
    category: 'Forensics',
    commands: ['edb-debugger --help', 'edb-debugger -v', 'edb-debugger target.local'],
  },
  {
    name: 'Foremost',
    slug: 'foremost',
    category: 'Forensics',
    commands: ['foremost --help', 'foremost -v', 'foremost target.local'],
  },
  {
    name: 'Ghidra',
    slug: 'ghidra',
    category: 'Forensics',
    commands: ['ghidra --help', 'ghidra -v', 'ghidra target.local'],
  },
  {
    name: 'Guymager',
    slug: 'guymager',
    category: 'Forensics',
    commands: ['guymager --help', 'guymager -v', 'guymager target.local'],
  },
  {
    name: 'Iaito',
    slug: 'iaito',
    category: 'Forensics',
    commands: ['iaito --help', 'iaito -v', 'iaito target.local'],
  },
  {
    name: 'JD-GUI',
    slug: 'jd-gui',
    category: 'Forensics',
    commands: ['jd-gui --help', 'jd-gui -v', 'jd-gui target.local'],
  },
  {
    name: 'Keystone',
    slug: 'keystone',
    category: 'Forensics',
    commands: ['keystone --help', 'keystone -v', 'keystone target.local'],
  },
  {
    name: 'PCredz',
    slug: 'pcredz',
    category: 'Forensics',
    commands: ['pcredz --help', 'pcredz -v', 'pcredz target.local'],
  },
  {
    name: 'PDF-Parser',
    slug: 'pdf-parser',
    category: 'Forensics',
    commands: ['pdf-parser --help', 'pdf-parser -v', 'pdf-parser target.local'],
  },
  {
    name: 'PhotoRec',
    slug: 'photorec',
    category: 'Forensics',
    commands: ['photorec --help', 'photorec -v', 'photorec target.local'],
  },
  {
    name: 'Radare2',
    slug: 'radare2',
    category: 'Forensics',
    commands: ['radare2 --help', 'radare2 -v', 'radare2 target.local'],
  },
  {
    name: 'Scalpel',
    slug: 'scalpel',
    category: 'Forensics',
    commands: ['scalpel --help', 'scalpel -v', 'scalpel target.local'],
  },
  {
    name: 'Sleuth Kit',
    slug: 'sleuthkit',
    category: 'Forensics',
    commands: ['sleuthkit --help', 'sleuthkit -v', 'sleuthkit target.local'],
  },
  {
    name: 'Smali/Baksmali',
    slug: 'smali',
    category: 'Forensics',
    commands: ['smali --help', 'smali -v', 'smali target.local'],
  },
  {
    name: 'TestDisk',
    slug: 'testdisk',
    category: 'Forensics',
    commands: ['testdisk --help', 'testdisk -v', 'testdisk target.local'],
  },
  {
    name: 'Volatility',
    slug: 'volatility',
    category: 'Forensics',
    commands: ['volatility --help', 'volatility -v', 'volatility target.local'],
  },
  {
    name: 'Xplico',
    slug: 'xplico',
    category: 'Forensics',
    commands: ['xplico --help', 'xplico -v', 'xplico target.local'],
  },
  {
    name: 'ADB',
    slug: 'adb',
    category: 'Mobile',
    commands: ['adb --help', 'adb -v', 'adb target.local'],
  },
  {
    name: 'Android Framework Tools',
    slug: 'android-framework',
    category: 'Mobile',
    commands: ['android-framework --help', 'android-framework -v', 'android-framework target.local'],
  },
  {
    name: 'Apktool',
    slug: 'apktool',
    category: 'Mobile',
    commands: ['apktool --help', 'apktool -v', 'apktool target.local'],
  },
  {
    name: 'Dex2Smali',
    slug: 'dex2smali',
    category: 'Mobile',
    commands: ['dex2smali --help', 'dex2smali -v', 'dex2smali target.local'],
  },
  {
    name: 'Drozer',
    slug: 'drozer',
    category: 'Mobile',
    commands: ['drozer --help', 'drozer -v', 'drozer target.local'],
  },
  {
    name: 'Fastboot',
    slug: 'fastboot',
    category: 'Mobile',
    commands: ['fastboot --help', 'fastboot -v', 'fastboot target.local'],
  },
  {
    name: 'Firmware Mod Kit',
    slug: 'firmware-mod',
    category: 'Mobile',
    commands: ['firmware-mod --help', 'firmware-mod -v', 'firmware-mod target.local'],
  },
  {
    name: 'Frida',
    slug: 'frida',
    category: 'Mobile',
    commands: ['frida --help', 'frida -v', 'frida target.local'],
  },
  {
    name: 'Mkbootimg',
    slug: 'mkbootimg',
    category: 'Mobile',
    commands: ['mkbootimg --help', 'mkbootimg -v', 'mkbootimg target.local'],
  },
  {
    name: 'Objection',
    slug: 'objection',
    category: 'Mobile',
    commands: ['objection --help', 'objection -v', 'objection target.local'],
  },
  {
    name: 'Scrcpy',
    slug: 'scrcpy',
    category: 'Mobile',
    commands: ['scrcpy --help', 'scrcpy -v', 'scrcpy target.local'],
  },
  {
    name: 'SignApk',
    slug: 'signapk',
    category: 'Mobile',
    commands: ['signapk --help', 'signapk -v', 'signapk target.local'],
  },
  {
    name: 'Chisel',
    slug: 'chisel',
    category: 'Tunneling',
    commands: ['chisel --help', 'chisel -v', 'chisel target.local'],
  },
  {
    name: 'Dns2tcp',
    slug: 'dns2tcp',
    category: 'Tunneling',
    commands: ['dns2tcp --help', 'dns2tcp -v', 'dns2tcp target.local'],
  },
  {
    name: 'Dnscat2',
    slug: 'dnscat2',
    category: 'Tunneling',
    commands: ['dnscat2 --help', 'dnscat2 -v', 'dnscat2 target.local'],
  },
  {
    name: 'HTTPTunnel',
    slug: 'httptunnel',
    category: 'Tunneling',
    commands: ['httptunnel --help', 'httptunnel -v', 'httptunnel target.local'],
  },
  {
    name: 'Proxychains',
    slug: 'proxychains',
    category: 'Tunneling',
    commands: ['proxychains --help', 'proxychains -v', 'proxychains target.local'],
  },
  {
    name: 'Pwnat',
    slug: 'pwnat',
    category: 'Tunneling',
    commands: ['pwnat --help', 'pwnat -v', 'pwnat target.local'],
  },
  {
    name: 'Socat',
    slug: 'socat',
    category: 'Tunneling',
    commands: ['socat --help', 'socat -v', 'socat target.local'],
  },
  {
    name: 'Stunnel',
    slug: 'stunnel',
    category: 'Tunneling',
    commands: ['stunnel --help', 'stunnel -v', 'stunnel target.local'],
  },
  {
    name: 'Lynis',
    slug: 'lynis',
    category: 'Audit',
    commands: ['lynis --help', 'lynis -v', 'lynis target.local'],
  },
  {
    name: 'Trivy',
    slug: 'trivy',
    category: 'Audit',
    commands: ['trivy --help', 'trivy -v', 'trivy target.local'],
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
