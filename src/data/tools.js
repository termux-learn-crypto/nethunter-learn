const tools = [

  { id: 'aircrack-ng', name: 'Aircrack ng', route: '/tool/aircrack-ng', icon: '📶', category: 'WiFi', file: 'AircrackNg',
  description: 'WiFi deauthentication aur wireless network stress testing ke liye ek effective tool.'
  },

  { id: 'airgeddon', name: 'Airgeddon', route: '/tool/airgeddon', icon: '🎯', category: 'WiFi', file: 'Airgeddon',
  description: 'WiFi enterprise security testing aur 802.1X authentication auditing ke liye ek comprehensive toolkit.'
  },

  { id: 'amass', name: 'Amass', route: '/tool/amass', icon: '🔍', category: 'Recon', file: 'Amass',
  description: 'target enumeration aur open source intelligence collection ke liye ek essential utility.'
  },

  { id: 'apktool', name: 'Apktool', route: '/tool/apktool', icon: '📱', category: 'Mobile', file: 'Apktool',
  description: 'Android backup analysis aur application data extraction ke liye ek practical utility.'
  },

  { id: 'arp-scan', name: 'Arp scan', route: '/tool/arp-scan', icon: '🔌', category: 'Recon', file: 'ArpScan',
  description: 'IPv6 host enumeration aur link-local address scanning ke liye ek specialized network tool.'
  },

  { id: 'beef-xss', name: 'Beef xss', route: '/tool/beef-xss', icon: '🐂', category: 'Exploitation', file: 'BeefXss',
  description: 'network-based exploitation aur service vulnerability testing ke liye ek reliable tool.'
  },

  { id: 'bettercap', name: 'Bettercap', route: '/tool/bettercap', icon: '🛡️', category: 'Network', file: 'Bettercap',
  description: 'network protocol analysis aur traffic capture ke liye ek essential security utility.'
  },

  { id: 'binwalk', name: 'Binwalk', route: '/tool/binwalk', icon: '🔬', category: 'Forensics', file: 'Binwalk',
  description: 'memory forensics aur volatile data acquisition ke liye ek specialized investigation utility.'
  },

  { id: 'bloodhound', name: 'Bloodhound', route: '/tool/bloodhound', icon: '🐕', category: 'Recon', file: 'Bloodhound',
  description: 'target metadata analysis aur digital footprinting ke liye ek comprehensive solution.'
  },

  { id: 'burpsuite', name: 'Burpsuite', route: '/tool/burpsuite', icon: '🕷️', category: 'Web', file: 'Burpsuite',
  description: 'web open redirect detection aur URL validation bypass testing ke liye ek practical redirect scanner.'
  },

  { id: 'cewl', name: 'Cewl', route: '/tool/cewl', icon: '📝', category: 'Passwords', file: 'CeWL',
  description: 'password pattern analysis aur rainbow table lookup ke liye ek specialized utility.'
  },

  { id: 'chisel', name: 'Chisel', route: '/tool/chisel', icon: '🔧', category: 'Tunneling', file: 'Chisel',
  description: 'HTTP tunneling aur web proxy bypass ke liye ek advanced network toolkit.'
  },

  { id: 'commix', name: 'Commix', route: '/tool/commix', icon: '💉', category: 'Exploitation', file: 'Commix',
  description: 'database exploitation aur SQL-based attack execution ke liye ek powerful toolkit.'
  },

  { id: 'crackmapexec', name: 'Crackmapexec', route: '/tool/crackmapexec', icon: '⚡', category: 'Exploitation', file: 'Crackmapexec',
  description: 'reverse shell generation aur command-and-control setup ke liye ek essential tool.'
  },

  { id: 'crunch', name: 'Crunch', route: '/tool/crunch', icon: '🔤', category: 'Passwords', file: 'Crunch',
  description: 'SSH private key passphrase cracking aur encrypted key file recovery ke liye ek specialized cryptographic utility.'
  },

  { id: 'dirb', name: 'Dirb', route: '/tool/dirb', icon: '📂', category: 'Web', file: 'Dirb',
  description: 'web API security testing aur endpoint analysis ke liye ek comprehensive framework.'
  },

  { id: 'dnscat2', name: 'Dnscat2', route: '/tool/dnscat2', icon: '🐱', category: 'Tunneling', file: 'Dnscat2',
  description: 'network traffic encapsulation aur proxy chain configuration ke liye ek reliable tunneling tool.'
  },

  { id: 'dnsenum', name: 'Dnsenum', route: '/tool/dnsenum', icon: '📋', category: 'Recon', file: 'Dnsenum',
  description: 'cloud metadata service enumeration aur IAM role discovery ke liye ek advanced cloud recon tool.'
  },

  { id: 'dnsrecon', name: 'Dnsrecon', route: '/tool/dnsrecon', icon: '🔄', category: 'Recon', file: 'Dnsrecon',
  description: 'certificate transparency log analysis aur subdomain discovery ke liye ek specialized tool.'
  },

  { id: 'drozer', name: 'Drozer', route: '/tool/drozer', icon: '🤖', category: 'Mobile', file: 'Drozer',
  description: 'mobile penetration testing aur iOS application security assessment ke liye ek advanced toolkit.'
  },

  { id: 'eaphammer', name: 'Eaphammer', route: '/tool/eaphammer', icon: '🔨', category: 'WiFi', file: 'Eaphammer',
  description: 'WiFi network reconnaissance aur wireless security assessment ke liye ek powerful tool.'
  },

  { id: 'empire', name: 'Empire', route: '/tool/empire', icon: '👑', category: 'Exploitation', file: 'Empire',
  description: 'active directory exploitation aur domain privilege escalation ke liye ek comprehensive attack toolkit.'
  },

  { id: 'enum4linux', name: 'Enum4linux', route: '/tool/enum4linux', icon: '🐧', category: 'Recon', file: 'Enum4linux',
  description: 'network range scanning aur live service detection ke liye ek fast utility.'
  },

  { id: 'evil-winrm', name: 'Evil winrm', route: '/tool/evil-winrm', icon: '👿', category: 'Exploitation', file: 'EvilWinrm',
  description: 'buffer overflow exploitation aur memory corruption testing ke liye ek specialized utility.'
  },

  { id: 'ffuf', name: 'Ffuf', route: '/tool/ffuf', icon: '🚀', category: 'Web', file: 'Ffuf',
  description: 'web content discovery aur file inclusion testing ke liye ek powerful scanner.'
  },

  { id: 'frida', name: 'Frida', route: '/tool/frida', icon: '🪡', category: 'Mobile', file: 'Frida',
  description: 'iOS plist file analysis aur application preference extraction ke liye ek practical Apple forensics tool.'
  },

  { id: 'gobuster', name: 'Gobuster', route: '/tool/gobuster', icon: '💥', category: 'Web', file: 'Gobuster',
  description: 'web application misconfiguration detection aur security hardening ke liye ek essential toolkit.'
  },

  { id: 'hashcat', name: 'Hashcat', route: '/tool/hashcat', icon: '💎', category: 'Passwords', file: 'Hashcat',
  description: 'password complexity verification aur strength assessment ke liye ek essential scanner.'
  },

  { id: 'hcxdumptool', name: 'Hcxdumptool', route: '/tool/hcxdumptool', icon: '🔓', category: 'WiFi', file: 'Hcxdumptool',
  description: 'wireless access point discovery aur WiFi penetration testing ke liye ek specialized utility.'
  },

  { id: 'hostapd-mana', name: 'Hostapd mana', route: '/tool/hostapd-mana', icon: '📡', category: 'WiFi', file: 'HostapdMana',
  description: 'wireless frame injection aur packet replay attack execution ke liye ek powerful utility.'
  },

  { id: 'hping3', name: 'Hping3', route: '/tool/hping3', icon: '📨', category: 'Network', file: 'Hping3',
  description: 'DHCP starvation aur rogue DHCP server detection ke liye ek reliable network resource tool.'
  },

  { id: 'hydra', name: 'Hydra', route: '/tool/hydra', icon: '🐍', category: 'Passwords', file: 'Hydra',
  description: 'hash identification aur cryptographic analysis ke liye ek comprehensive utility.'
  },

  { id: 'impacket', name: 'Impacket', route: '/tool/impacket', icon: '📦', category: 'Exploitation', file: 'Impacket',
  description: 'post-exploitation module execution aur lateral movement ke liye ek advanced utility.'
  },

  { id: 'john', name: 'John', route: '/tool/john', icon: '👤', category: 'Passwords', file: 'John',
  description: 'GPU-accelerated hash cracking aur parallel processing optimization ke liye ek high-speed recovery tool.'
  },

  { id: 'katana', name: 'Katana', route: '/tool/katana', icon: '🗡️', category: 'Web', file: 'Katana',
  description: 'web application firewall bypass aur security testing ke liye ek advanced toolkit.'
  },

  { id: 'kismet', name: 'Kismet', route: '/tool/kismet', icon: '📡', category: 'WiFi', file: 'Kismet',
  description: 'WiFi packet capture aur wireless network vulnerability assessment ke liye ek comprehensive tool.'
  },

  { id: 'lynis', name: 'Lynis', route: '/tool/lynis', icon: '✅', category: 'Audit', file: 'Lynis',
  description: 'system security auditing aur compliance checking ke liye ek comprehensive automation framework.'
  },

  { id: 'macchanger', name: 'Macchanger', route: '/tool/macchanger', icon: '🔢', category: 'WiFi', file: 'Macchanger',
  description: 'WiFi network encryption cracking aur wireless penetration testing ke liye ek reliable solution.'
  },

  { id: 'maltego', name: 'Maltego', route: '/tool/maltego', icon: '🕸️', category: 'Recon', file: 'Maltego',
  description: 'social media intelligence gathering aur username enumeration ke liye ek advanced OSINT tool.'
  },

  { id: 'masscan', name: 'Masscan', route: '/tool/masscan', icon: '⚡', category: 'Recon', file: 'Masscan',
  description: 'cloud asset discovery aur S3 bucket enumeration ke liye ek comprehensive scanning toolkit.'
  },

  { id: 'medusa', name: 'Medusa', route: '/tool/medusa', icon: '🐍', category: 'Passwords', file: 'Medusa',
  description: 'password database auditing aur credential recovery ke liye ek reliable toolkit.'
  },

  { id: 'metasploit-framework', name: 'Metasploit framework', route: '/tool/metasploit-framework', icon: '💣', category: 'Exploitation', file: 'Metasploit',
  description: 'XXE injection aur XML external entity attack automation ke liye ek specialized web exploitation utility.'
  },

  { id: 'mimikatz', name: 'Mimikatz', route: '/tool/mimikatz', icon: '🔑', category: 'Exploitation', file: 'Mimikatz',
  description: 'web application exploitation aur server-side attack execution ke liye ek comprehensive tool.'
  },

  { id: 'mitmproxy', name: 'Mitmproxy', route: '/tool/mitmproxy', icon: '🔄', category: 'Network', file: 'Mitmproxy',
  description: 'packet generation aur network stress testing ke liye ek versatile security tool.'
  },

  { id: 'msfvenom', name: 'Msfvenom', route: '/tool/msfvenom', icon: '💉', category: 'Exploitation', file: 'Msfvenom',
  description: 'vulnerability scanning aur automated exploitation ke liye ek multi-purpose framework.'
  },

  { id: 'naabu', name: 'Naabu', route: '/tool/naabu', icon: '📡', category: 'Recon', file: 'Naabu',
  description: 'dark web intelligence aur breach data correlation ke liye ek specialized investigation utility.'
  },

  { id: 'netcat', name: 'Netcat', route: '/tool/netcat', icon: '🔌', category: 'Network', file: 'Netcat',
  description: 'network traffic analysis aur packet inspection ke liye ek powerful monitoring tool.'
  },

  { id: 'netdiscover', name: 'Netdiscover', route: '/tool/netdiscover', icon: '🔍', category: 'Recon', file: 'Netdiscover',
  description: 'GitHub reconnaissance aur repository metadata analysis ke liye ek professional OSINT framework.'
  },

  { id: 'nikto', name: 'Nikto', route: '/tool/nikto', icon: '🌐', category: 'Web', file: 'Nikto',
  description: 'web application vulnerability scanning aur security assessment ke liye ek comprehensive tool.'
  },

  { id: 'nmap', name: 'Nmap', route: '/tool/nmap', icon: '🗺️', category: 'Recon', file: 'Nmap',
  description: 'DNS enumeration aur target mapping ke liye ek efficient aur accurate tool.'
  },

  { id: 'nuclei', name: 'Nuclei', route: '/tool/nuclei', icon: '☢️', category: 'Web', file: 'Nuclei',
  description: 'web directory enumeration aur hidden resource discovery ke liye ek fast utility.'
  },

  { id: 'objection', name: 'Objection', route: '/tool/objection', icon: '📱', category: 'Mobile', file: 'Objection',
  description: 'mobile application repackaging aur re-signing ke liye ek practical utility.'
  },

  { id: 'pixiewps', name: 'Pixiewps', route: '/tool/pixiewps', icon: '🔢', category: 'WiFi', file: 'Pixiewps',
  description: 'wireless authentication testing aur WiFi protocol analysis ke liye ek specialized toolkit.'
  },

  { id: 'proxychains', name: 'Proxychains', route: '/tool/proxychains', icon: '⛓️', category: 'Tunneling', file: 'Proxychains',
  description: 'ICMP tunneling aur ping-based data exfiltration ke liye ek advanced covert channel tool.'
  },

  { id: 'radare2', name: 'Radare2', route: '/tool/radare2', icon: '🔧', category: 'Forensics', file: 'Radare2',
  description: 'disk imaging aur storage media forensic analysis ke liye ek comprehensive toolkit.'
  },

  { id: 'reaver', name: 'Reaver', route: '/tool/reaver', icon: '🔨', category: 'WiFi', file: 'Reaver',
  description: 'rogue access point detection aur evil twin attack implementation ke liye ek multi-purpose scanner.'
  },

  { id: 'recon-ng', name: 'Recon ng', route: '/tool/recon-ng', icon: '🕵️', category: 'Recon', file: 'ReconNg',
  description: 'Shodan API integration aur connected device discovery ke liye ek comprehensive scanning tool.'
  },

  { id: 'responder', name: 'Responder', route: '/tool/responder', icon: '🔄', category: 'Network', file: 'Responder',
  description: 'network service enumeration aur banner grabbing ke liye ek fast reconnaissance tool.'
  },

  { id: 'searchsploit', name: 'Searchsploit', route: '/tool/searchsploit', icon: '📚', category: 'Exploitation', file: 'Searchsploit',
  description: 'ICS/SCADA protocol exploitation aur industrial control system attack ke liye ek specialized OT security tool.'
  },

  { id: 'setoolkit', name: 'Setoolkit', route: '/tool/setoolkit', icon: '🎭', category: 'Exploitation', file: 'Setoolkit',
  description: 'exploit chaining aur multi-stage attack execution ke liye ek professional toolkit.'
  },

  { id: 'sherlock', name: 'Sherlock', route: '/tool/sherlock', icon: '🔎', category: 'Recon', file: 'Sherlock',
  description: 'network mapping aur live host discovery ke liye ek fast aur lightweight tool.'
  },

  { id: 'socat', name: 'Socat', route: '/tool/socat', icon: '🔗', category: 'Tunneling', file: 'Socat',
  description: 'TLS/SSL interception aur encrypted traffic analysis ke liye ek reliable man-in-the-middle tunneling utility.'
  },

  { id: 'sqlmap', name: 'Sqlmap', route: '/tool/sqlmap', icon: '💾', category: 'Web', file: 'Sqlmap',
  description: 'web object reference testing aur IDOR vulnerability discovery ke liye ek comprehensive access control scanner.'
  },

  { id: 'sqlninja', name: 'Sqlninja', route: '/tool/sqlninja', icon: '🐱', category: 'Web', file: 'Sqlninja',
  description: 'web deadlink detection aur broken access control testing ke liye ek comprehensive tool.'
  },

  { id: 'sslstrip', name: 'Sslstrip', route: '/tool/sslstrip', icon: '🔓', category: 'WiFi', file: 'Sslstrip',
  description: 'wireless interface monitoring aur WiFi attack vectors ko execute karne ke liye ek essential tool.'
  },

  { id: 'subfinder', name: 'Subfinder', route: '/tool/subfinder', icon: '🔎', category: 'Recon', file: 'Subfinder',
  description: 'geolocation data extraction aur IP address mapping ke liye ek reliable recon utility.'
  },

  { id: 'tcpdump', name: 'Tcpdump', route: '/tool/tcpdump', icon: '📥', category: 'Network', file: 'Tcpdump',
  description: 'network vulnerability scanning aur service detection ke liye ek comprehensive tool.'
  },

  { id: 'theharvester', name: 'Theharvester', route: '/tool/theharvester', icon: '🌾', category: 'Recon', file: 'Theharvester',
  description: 'network block analysis aur BGP route enumeration ke liye ek reliable internet recon utility.'
  },

  { id: 'trivy', name: 'Trivy', route: '/tool/trivy', icon: '🔍', category: 'Audit', file: 'Trivy',
  description: 'Docker container security audit aur image vulnerability scanning ke liye ek modern devops compliance tool.'
  },

  { id: 'volatility', name: 'Volatility', route: '/tool/volatility', icon: '🧠', category: 'Forensics', file: 'Volatility',
  description: 'forensic report generation aur evidence chain-of-custody logging ke liye ek comprehensive platform.'
  },

  { id: 'wafw00f', name: 'Wafw00f', route: '/tool/wafw00f', icon: '🛡️', category: 'Web', file: 'Wafw00f',
  description: 'web cache poisoning aur request smuggling testing ke liye ek advanced tool.'
  },

  { id: 'weevely', name: 'Weevely', route: '/tool/weevely', icon: '🐚', category: 'Exploitation', file: 'Weevely',
  description: 'pass the hash attack execution aur NTLM relay exploitation ke liye ek specialized credential tool.'
  },

  { id: 'whois', name: 'Whois', route: '/tool/whois', icon: '🔍', category: 'Recon', file: 'Whois',
  description: 'target surface mapping aur asset discovery ke liye ek professional recon tool.'
  },

  { id: 'wifite', name: 'Wifite', route: '/tool/wifite', icon: '📶', category: 'WiFi', file: 'Wifite',
  description: 'wireless client isolation testing aur station connection manipulation ke liye ek specialized framework.'
  },

  { id: 'wireshark', name: 'Wireshark', route: '/tool/wireshark', icon: '🦈', category: 'Network', file: 'Wireshark',
  description: 'network flow analysis aur NetFlow/sFlow data processing ke liye ek comprehensive traffic monitoring utility.'
  },

  { id: 'wpscan', name: 'Wpscan', route: '/tool/wpscan', icon: '🔐', category: 'Web', file: 'Wpscan',
  description: 'web LFI/RFI exploitation aur remote file inclusion testing ke liye ek automated file inclusion tool.'
  },

  { id: 'yersinia', name: 'Yersinia', route: '/tool/yersinia', icon: '🦎', category: 'Network', file: 'Yersinia',
  description: 'network segmentation testing aur access control verification ke liye ek comprehensive scanner.'
  },

  { id: 'dmitry', name: 'DMitry', route: '/tool/dmitry', icon: '🔍', category: 'Recon', file: 'DMitry',
  description: 'email harvesting aur web intelligence gathering ke liye ek specialized utility.'
  },

  { id: 'ike-scan', name: 'IKE-Scan', route: '/tool/ike-scan', icon: '🔐', category: 'Recon', file: 'IKEScan',
  description: 'wayback machine analysis aur historical web content discovery ke liye ek archival recon tool.'
  },

  { id: 'lbd', name: 'LBD', route: '/tool/lbd', icon: '⚖️', category: 'Recon', file: 'LBD',
  description: 'SSL/TLS certificate analysis aur cipher suite detection ke liye ek security assessment tool.'
  },

  { id: 'nbtscan', name: 'NBTScan', route: '/tool/nbtscan', icon: '🖥️', category: 'Recon', file: 'NBTScan',
  description: 'ASN mapping aur IP range ownership identification ke liye ek efficient recon scanner.'
  },

  { id: 'nishang', name: 'Nishang', route: '/tool/nishang', icon: '💻', category: 'Exploitation', file: 'Nishang',
  description: 'race condition exploitation aur time-of-check time-of-use attack ke liye ek advanced concurrency tool.'
  },

  { id: 'p0f', name: 'P0f', route: '/tool/p0f', icon: '🖧', category: 'Recon', file: 'P0f',
  description: 'target enumeration automation aur data aggregation ke liye ek powerful framework.'
  },

  { id: 'pcredz', name: 'PCredz', route: '/tool/pcredz', icon: '🔑', category: 'Forensics', file: 'PCredz',
  description: 'container forensics aur Docker image analysis ke liye ek specialized cloud-native investigation utility.'
  },

  { id: 'pdf-parser', name: 'PDF-Parser', route: '/tool/pdf-parser', icon: '📄', category: 'Forensics', file: 'PDFParser',
  description: 'digital evidence collection aur file system analysis ke liye ek professional forensics tool.'
  },

  { id: 'smbmap', name: 'SMBMap', route: '/tool/smbmap', icon: '📁', category: 'Recon', file: 'SMBMap',
  description: 'network reconnaissance aur service discovery ke liye ek powerful scanning tool.'
  },

  { id: 'snmp-check', name: 'SNMP-Check', route: '/tool/snmp-check', icon: '📡', category: 'Recon', file: 'SNMPCheck',
  description: 'domain analysis aur network footprinting ke liye ek versatile information gathering tool.'
  },

  { id: 'sparta', name: 'Sparta', route: '/tool/sparta', icon: '🛡️', category: 'Recon', file: 'Sparta',
  description: 'port scanning aur service fingerprinting ke liye ek efficient recon solution.'
  },

  { id: 'sslscan', name: 'SSLScan', route: '/tool/sslscan', icon: '🔒', category: 'Recon', file: 'SSLScan',
  description: 'subdomain discovery aur DNS analysis ke liye ek comprehensive recon toolkit.'
  },

  { id: 'sslyze', name: 'SSLyze', route: '/tool/sslyze', icon: '🔐', category: 'Recon', file: 'SSLyze',
  description: 'web technology fingerprinting aur CMS detection ke liye ek versatile profiling tool.'
  },

  { id: 'unicornscan', name: 'Unicornscan', route: '/tool/unicornscan', icon: '🦄', category: 'Recon', file: 'Unicornscan',
  description: 'subdomain brute forcing aur permutation-based discovery ke liye ek high-performance scanner.'
  },

  { id: 'urlcrazy', name: 'URLCrazy', route: '/tool/urlcrazy', icon: '🔗', category: 'Recon', file: 'URLCrazy',
  description: 'JavaScript file analysis aur hidden API endpoint discovery ke liye ek specialized web scanner.'
  },

  { id: 'xplico', name: 'Xplico', route: '/tool/xplico', icon: '📊', category: 'Forensics', file: 'Xplico',
  description: 'social media forensics aur online account data extraction ke liye ek advanced digital identity toolkit.'
  },

  { id: 'dns2tcp', name: 'Dns2tcp', route: '/tool/dns2tcp', icon: '🔗', category: 'Tunneling', file: 'Dns2tcp',
  description: 'encrypted tunnel creation aur secure data transmission ke liye ek practical tool.'
  },

  { id: 'dnschef', name: 'DNSchef', route: '/tool/dnschef', icon: '🔄', category: 'Recon', file: 'DNSchef',
  description: 'OSINT framework integration aur automated reconnaissance ke liye ek advanced tool.'
  },

  { id: 'metagoofil', name: 'Metagoofil', route: '/tool/metagoofil', icon: '📑', category: 'Recon', file: 'Metagoofil',
  description: 'passive DNS analysis aur network information gathering ke liye ek reliable tool.'
  },

  { id: 'fierce', name: 'Fierce', route: '/tool/fierce', icon: '🔥', category: 'Recon', file: 'Fierce',
  description: 'target reconnaissance aur subdomain enumeration ke liye ek fast aur reliable tool.'
  },

  { id: 'dnsmap', name: 'Dnsmap', route: '/tool/dnsmap', icon: '📋', category: 'Recon', file: 'Dnsmap',
  description: 'domain age analysis aur historical WHOIS data lookup ke liye ek professional reconnaissance tool.'
  },

  { id: 'httrack', name: 'HTTrack', route: '/tool/httrack', icon: '🌐', category: 'Web', file: 'HTTrack',
  description: 'web parameter pollution aur HTTP verb tampering ke liye ek advanced request manipulation toolkit.'
  },

  { id: 'rpcbind', name: 'RPCBind', route: '/tool/rpcbind', icon: '🔌', category: 'Recon', file: 'RPCBind',
  description: 'twitter intelligence gathering aur social media footprint analysis ke liye ek practical OSINT toolkit.'
  },

  { id: 'smbclient', name: 'SMBClient', route: '/tool/smbclient', icon: '📂', category: 'Recon', file: 'SMBClient',
  description: 'container registry scanning aur image metadata analysis ke liye ek modern devops recon utility.'
  },

  { id: 'finger', name: 'Finger', route: '/tool/finger', icon: '🔍', category: 'Recon', file: 'Finger',
  description: 'passive total api integration aur historical DNS data analysis ke liye ek advanced OSINT framework.'
  },

  { id: 'showmount', name: 'Showmount', route: '/tool/showmount', icon: '📦', category: 'Recon', file: 'Showmount',
  description: 'reconnaissance automation aur target profiling ke liye ek multi-functional tool.'
  },

  { id: 'bind9', name: 'BIND9', route: '/tool/bind9', icon: '🌐', category: 'Recon', file: 'BIND9',
  description: 'API endpoint discovery aur web service enumeration ke liye ek automated recon utility.'
  },

  { id: 'armitage', name: 'Armitage', route: '/tool/armitage', icon: '🎯', category: 'Exploitation', file: 'Armitage',
  description: 'return oriented programming aur ROP chain automation ke liye ek advanced binary exploitation tool.'
  },

  { id: 'backdoor-factory', name: 'Backdoor Factory', route: '/tool/backdoor-factory', icon: '🚪', category: 'Exploitation', file: 'BackdoorFactory',
  description: 'browser exploitation aur client-side attack vectors ke liye ek specialized tool.'
  },

  { id: 'shellter', name: 'Shellter', route: '/tool/shellter', icon: '🐚', category: 'Exploitation', file: 'Shellter',
  description: 'heap spray aur use-after-free vulnerability exploitation ke liye ek specialized memory corruption framework.'
  },

  { id: 'veil', name: 'Veil', route: '/tool/veil', icon: '🎭', category: 'Exploitation', file: 'Veil',
  description: 'SSRF exploitation aur internal network pivot attack ke liye ek comprehensive server-side tool.'
  },

  { id: 'websploit', name: 'WebSploit', route: '/tool/websploit', icon: '🕸️', category: 'Web', file: 'WebSploit',
  description: 'web CORS misconfiguration testing aur cross-origin vulnerability detection ke liye ek specialized security scanner.'
  },

  { id: 'exe2hex', name: 'Exe2Hex', route: '/tool/exe2hex', icon: '🔄', category: 'Exploitation', file: 'Exe2Hex',
  description: 'kernel exploit development aur privilege escalation module delivery ke liye ek advanced kernel tool.'
  },

  { id: 'fluxion', name: 'Fluxion', route: '/tool/fluxion', icon: '📶', category: 'WiFi', file: 'Fluxion',
  description: 'WPS pin cracking aur WiFi router vulnerability assessment ke liye ek reliable automated tool.'
  },

  { id: 'mana-toolkit', name: 'Mana Toolkit', route: '/tool/mana-toolkit', icon: '🕸️', category: 'WiFi', file: 'ManaToolkit',
  description: 'WiFi beacon analysis aur access point signal monitoring ke liye ek advanced scanning utility.'
  },

  { id: 'thc-ipv6', name: 'THC-IPv6', route: '/tool/thc-ipv6', icon: '🌐', category: 'Exploitation', file: 'THCIPv6',
  description: 'scheduled task exploitation aur Windows persistence mechanism ke liye ek versatile post-exploit toolkit.'
  },

  { id: 'sidguess', name: 'SidGuess', route: '/tool/sidguess', icon: '🎯', category: 'Web', file: 'SidGuess',
  description: 'web rate limiting bypass aur API throttle evasion testing ke liye ek practical load testing tool.'
  },

  { id: 'msfpayload', name: 'MSFPayload', route: '/tool/msfpayload', icon: '💣', category: 'Exploitation', file: 'MSFPayload',
  description: 'client-side exploitation aur social engineering payloads ke liye ek advanced framework.'
  },

  { id: 'shellnoob', name: 'ShellNoob', route: '/tool/shellnoob', icon: '🐚', category: 'Exploitation', file: 'ShellNoob',
  description: 'web shell deployment aur persistent backdoor installation ke liye ek reliable post-exploit utility.'
  },

  { id: 'pwntools', name: 'Pwntools', route: '/tool/pwntools', icon: '🔧', category: 'Exploitation', file: 'Pwntools',
  description: 'privilege escalation aur post-exploitation automation ke liye ek versatile toolkit.'
  },

  { id: 'ropper', name: 'Ropper', route: '/tool/ropper', icon: '🛠️', category: 'Exploitation', file: 'Ropper',
  description: 'exploit development aur payload generation ke liye ek powerful penetration testing tool.'
  },

  { id: 'checksec', name: 'Checksec', route: '/tool/checksec', icon: '✅', category: 'Exploitation', file: 'Checksec',
  description: 'DLL injection aur process hollowing technique automation ke liye ek advanced code injection framework.'
  },

  { id: 'one_gadget', name: 'One Gadget', route: '/tool/one_gadget', icon: '💊', category: 'Exploitation', file: 'OneGadget',
  description: 'macro exploit delivery aur office document weaponization ke liye ek practical social engineering tool.'
  },

  { id: 'whatweb', name: 'WhatWeb', route: '/tool/whatweb', icon: '🌍', category: 'Web', file: 'WhatWeb',
  description: 'web SMTP header injection aur email spoofing vulnerability detection ke liye ek specialized mail utility.'
  },

  { id: 'skipfish', name: 'Skipfish', route: '/tool/skipfish', icon: '🐟', category: 'Web', file: 'Skipfish',
  description: 'web LDAP injection aur directory service attack execution ke liye ek comprehensive backend security tool.'
  },

  { id: 'wapiti', name: 'Wapiti', route: '/tool/wapiti', icon: '🐐', category: 'Web', file: 'Wapiti',
  description: 'web DOM-based XSS detection aur client-side attack vector analysis ke liye ek advanced JavaScript scanner.'
  },

  { id: 'wfuzz', name: 'WFuzz', route: '/tool/wfuzz', icon: '⚡', category: 'Web', file: 'WFuzz',
  description: 'web login brute forcing aur authentication testing ke liye ek efficient tool.'
  },

  { id: 'dirbuster', name: 'DirBuster', route: '/tool/dirbuster', icon: '🔍', category: 'Web', file: 'DirBuster',
  description: 'web parameter analysis aur blind vulnerability detection ke liye ek specialized utility.'
  },

  { id: 'cadaver', name: 'Cadaver', route: '/tool/cadaver', icon: '📂', category: 'Web', file: 'Cadaver',
  description: 'web session analysis aur cookie security testing ke liye ek practical utility.'
  },

  { id: 'davtest', name: 'DavTest', route: '/tool/davtest', icon: '🧪', category: 'Web', file: 'DavTest',
  description: 'web subdomain takeover detection aur dangling DNS record analysis ke liye ek comprehensive asset scanner.'
  },

  { id: 'fimap', name: 'Fimap', route: '/tool/fimap', icon: '📁', category: 'Web', file: 'Fimap',
  description: 'web server fingerprinting aur technology stack detection ke liye ek useful tool.'
  },

  { id: 'joomscan', name: 'JoomScan', route: '/tool/joomscan', icon: '📰', category: 'Web', file: 'JoomScan',
  description: 'web server-side template injection aur SSTI vulnerability detection ke liye ek specialized template scanner.'
  },

  { id: 'cmsmap', name: 'CMSMap', route: '/tool/cmsmap', icon: '🗺️', category: 'Web', file: 'CMSMap',
  description: 'web form fuzzing aur input validation testing ke liye ek reliable scanner.'
  },

  { id: 'http-enum', name: 'HTTP-Enum', route: '/tool/http-enum', icon: '🔌', category: 'Web', file: 'HTTPEnum',
  description: 'web graphQL API inspection aur query injection testing ke liye ek modern web security utility.'
  },

  { id: 'jsql', name: 'jSQL Injection', route: '/tool/jsql', icon: '💉', category: 'Web', file: 'jSQLInjection',
  description: 'web file upload vulnerability testing aur exploitation ke liye ek specialized scanner.'
  },

  { id: 'sqlsus', name: 'SQLSus', route: '/tool/sqlsus', icon: '💾', category: 'Web', file: 'SQLSus',
  description: 'web component analysis aur dependency vulnerability scanning ke liye ek reliable utility.'
  },

  { id: 'ace-voip', name: 'ACE-VoIP', route: '/tool/ace-voip', icon: '📞', category: 'Passwords', file: 'ACEVoIP',
  description: 'cross-platform password hash extraction aur shadow file analysis ke liye ek comprehensive credential hunter.'
  },

  { id: 'cmospwd', name: 'CmosPwd', route: '/tool/cmospwd', icon: '🔑', category: 'Passwords', file: 'CmosPwd',
  description: 'online password attack execution aur service authentication testing ke liye ek advanced toolkit.'
  },

  { id: 'creddump', name: 'CredDump', route: '/tool/creddump', icon: '🗝️', category: 'Passwords', file: 'CredDump',
  description: 'mantra-based password guessing aur personal information pattern detection ke liye ek intelligent cracking tool.'
  },

  { id: 'findmyhash', name: 'FindMyHash', route: '/tool/findmyhash', icon: '🔍', category: 'Passwords', file: 'FindMyHash',
  description: 'PDF owner password removal aur document restriction bypass ke liye ek specialized document security tool.'
  },

  { id: 'maskprocessor', name: 'Maskprocessor', route: '/tool/maskprocessor', icon: '🎭', category: 'Passwords', file: 'Maskprocessor',
  description: 'ZIP/RAR archive password recovery aur encrypted file extraction ke liye ek reliable archive cracking utility.'
  },

  { id: 'onesixtyone', name: 'Onesixtyone', route: '/tool/onesixtyone', icon: '🔢', category: 'Passwords', file: 'Onesixtyone',
  description: 'Kerberos ticket cracking aur TGS-REP hash offline analysis ke liye ek advanced AD password utility.'
  },

  { id: 'pack', name: 'PACK', route: '/tool/pack', icon: '📦', category: 'Passwords', file: 'PACK',
  description: 'password policy auditing aur weak credential detection ke liye ek effective utility.'
  },

  { id: 'pdfcrack', name: 'PDFCrack', route: '/tool/pdfcrack', icon: '📄', category: 'Passwords', file: 'PDFCrack',
  description: 'custom wordlist creation aur password mutation testing ke liye ek versatile generator.'
  },

  { id: 'pyrit', name: 'Pyrit', route: '/tool/pyrit', icon: '⚡', category: 'Passwords', file: 'Pyrit',
  description: 'key derivation function analysis aur password hash benchmarking ke liye ek specialized utility.'
  },

  { id: 'rainbowcrack', name: 'RainbowCrack', route: '/tool/rainbowcrack', icon: '🌈', category: 'Passwords', file: 'RainbowCrack',
  description: 'rule-based password cracking aur hybrid attack execution ke liye ek powerful framework.'
  },

  { id: 'samdump2', name: 'SamDump2', route: '/tool/samdump2', icon: '💾', category: 'Passwords', file: 'SamDump2',
  description: 'wifi PMKID hash capture aur WPA/WPA2 handshake extraction ke liye ek wireless password framework.'
  },

  { id: 'sipcrack', name: 'SipCrack', route: '/tool/sipcrack', icon: '📞', category: 'Passwords', file: 'SipCrack',
  description: 'hash comparison aur password candidate generation ke liye ek professional tool.'
  },

  { id: 'sucrack', name: 'Sucrack', route: '/tool/sucrack', icon: '🔄', category: 'Passwords', file: 'Sucrack',
  description: 'WordPress admin password brute forcing aur wp-login testing ke liye ek popular CMS credential scanner.'
  },

  { id: 'twofi', name: 'Twofi', route: '/tool/twofi', icon: '🐦', category: 'Passwords', file: 'Twofi',
  description: 'LM/NTML hash extraction aur Windows credential analysis ke liye ek specialized corporate password tool.'
  },

  { id: 'wordlists', name: 'Wordlists', route: '/tool/wordlists', icon: '📚', category: 'Passwords', file: 'Wordlists',
  description: 'hash analysis aur password recovery ke liye ek powerful multi-algorithm tool.'
  },

  { id: 'fern-wifi', name: 'Fern WiFi Cracker', route: '/tool/fern-wifi', icon: '📶', category: 'WiFi', file: 'FernWiFiCracker',
  description: 'WiFi PMKID capture aur WPA3 transitional mode testing ke liye ek innovative security tool.'
  },

  { id: 'bully', name: 'Bully', route: '/tool/bully', icon: '💪', category: 'WiFi', file: 'Bully',
  description: 'wireless client deauthentication testing aur captive portal analysis ke liye ek specialized tool.'
  },

  { id: 'cowpatty', name: 'Cowpatty', route: '/tool/cowpatty', icon: '🐄', category: 'WiFi', file: 'Cowpatty',
  description: 'wireless network auditing aur WPA/WPA2 security testing ke liye ek advanced tool.'
  },

  { id: 'mdk3', name: 'MDK3', route: '/tool/mdk3', icon: '💥', category: 'WiFi', file: 'MDK3',
  description: 'wireless LAN security auditing aur WiFi reconnaissance ke liye ek multi-purpose tool.'
  },

  { id: 'mdk4', name: 'MDK4', route: '/tool/mdk4', icon: '💥', category: 'WiFi', file: 'MDK4',
  description: 'wireless spectrum analysis aur channel interference detection ke liye ek professional monitoring tool.'
  },

  { id: 'wash', name: 'Wash', route: '/tool/wash', icon: '🧹', category: 'WiFi', file: 'Wash',
  description: 'wireless network analysis aur access point security auditing ke liye ek versatile tool.'
  },

  { id: 'ettercap', name: 'Ettercap', route: '/tool/ettercap', icon: '🕸️', category: 'Network', file: 'Ettercap',
  description: 'network forensics aur traffic log analysis ke liye ek reliable investigative utility.'
  },

  { id: 'netsniff-ng', name: 'Netsniff-ng', route: '/tool/netsniff-ng', icon: '📡', category: 'Network', file: 'Netsniffng',
  description: 'network tunneling detection aur traffic anomaly analysis ke liye ek professional utility.'
  },

  { id: 'tcpflow', name: 'TCPFlow', route: '/tool/tcpflow', icon: '💧', category: 'Network', file: 'TCPFlow',
  description: 'network packet crafting aur traffic manipulation ke liye ek versatile utility.'
  },

  { id: 'hexinject', name: 'HexInject', route: '/tool/hexinject', icon: '💉', category: 'Network', file: 'HexInject',
  description: 'network connection tracking aur session analysis ke liye ek professional tool.'
  },

  { id: 'rebind', name: 'Rebind', route: '/tool/rebind', icon: '🔄', category: 'Network', file: 'Rebind',
  description: 'VPN protocol analysis aur IPSec tunnel testing ke liye ek advanced encrypted network tool.'
  },

  { id: 'ferret', name: 'Ferret', route: '/tool/ferret', icon: '🦦', category: 'Network', file: 'Ferret',
  description: 'traffic interception aur man-in-the-middle attack implementation ke liye ek advanced toolkit.'
  },

  { id: 'hamster', name: 'Hamster', route: '/tool/hamster', icon: '🐹', category: 'Network', file: 'Hamster',
  description: 'network authentication testing aur credential interception ke liye ek specialized toolkit.'
  },

  { id: 'sniffjoke', name: 'SniffJoke', route: '/tool/sniffjoke', icon: '🎭', category: 'Network', file: 'SniffJoke',
  description: 'network sniffing aur real-time traffic visualization ke liye ek powerful framework.'
  },

  { id: 'autopsy', name: 'Autopsy', route: '/tool/autopsy', icon: '🔬', category: 'Forensics', file: 'Autopsy',
  description: 'log file correlation aur security event timeline reconstruction ke liye ek professional SIEM forensics tool.'
  },

  { id: 'sleuthkit', name: 'Sleuth Kit', route: '/tool/sleuthkit', icon: '🛠️', category: 'Forensics', file: 'SleuthKit',
  description: 'executable packing detection aur code unpacking ke liye ek advanced reverse engineering tool.'
  },

  { id: 'foremost', name: 'Foremost', route: '/tool/foremost', icon: '🔍', category: 'Forensics', file: 'Foremost',
  description: 'browser forensics aur web history reconstruction ke liye ek specialized digital evidence collector.'
  },

  { id: 'scalpel', name: 'Scalpel', route: '/tool/scalpel', icon: '🔪', category: 'Forensics', file: 'Scalpel',
  description: 'USB device history analysis aur removable storage forensics ke liye ek comprehensive external device tool.'
  },

  { id: 'guymager', name: 'Guymager', route: '/tool/guymager', icon: '💿', category: 'Forensics', file: 'Guymager',
  description: 'disk clone verification aur forensic hash validation ke liye ek reliable integrity checker.'
  },

  { id: 'dc3dd', name: 'DC3DD', route: '/tool/dc3dd', icon: '💽', category: 'Forensics', file: 'DC3DD',
  description: 'file carving aur deleted data recovery ke liye ek powerful digital analysis tool.'
  },

  { id: 'testdisk', name: 'TestDisk', route: '/tool/testdisk', icon: '💾', category: 'Forensics', file: 'TestDisk',
  description: 'file system timeline analysis aur deletion artifact recovery ke liye ek professional utility.'
  },

  { id: 'photorec', name: 'PhotoRec', route: '/tool/photorec', icon: '📷', category: 'Forensics', file: 'PhotoRec',
  description: 'metadata extraction aur file property analysis ke liye ek practical forensics utility.'
  },

  { id: 'ghidra', name: 'Ghidra', route: '/tool/ghidra', icon: '🐉', category: 'Forensics', file: 'Ghidra',
  description: 'document forensics aur embedded object analysis ke liye ek comprehensive toolkit.'
  },

  { id: 'edb-debugger', name: 'EDB Debugger', route: '/tool/edb-debugger', icon: '🐛', category: 'Forensics', file: 'EDBDebugger',
  description: 'stealth file detection aur hidden data identification ke liye ek specialized scanner.'
  },

  { id: 'dex2jar', name: 'Dex2Jar', route: '/tool/dex2jar', icon: '☕', category: 'Forensics', file: 'Dex2Jar',
  description: 'network packet forensics aur communication reconstruction ke liye ek specialized analyzer.'
  },

  { id: 'jd-gui', name: 'JD-GUI', route: '/tool/jd-gui', icon: '📖', category: 'Forensics', file: 'JDGUI',
  description: 'database forensics aur SQLite record recovery ke liye ek reliable structured data analysis utility.'
  },

  { id: 'smali', name: 'Smali/Baksmali', route: '/tool/smali', icon: '🔧', category: 'Forensics', file: 'SmaliBaksmali',
  description: 'binary analysis aur executable inspection ke liye ek advanced reverse engineering tool.'
  },

  { id: 'capstone', name: 'Capstone', route: '/tool/capstone', icon: '🏛️', category: 'Forensics', file: 'Capstone',
  description: 'email forensics aur message header analysis ke liye ek reliable digital communication investigator.'
  },

  { id: 'keystone', name: 'Keystone', route: '/tool/keystone', icon: '🔑', category: 'Forensics', file: 'Keystone',
  description: 'timeline analysis aur file system journal examination ke liye ek professional utility.'
  },

  { id: 'iaito', name: 'Iaito', route: '/tool/iaito', icon: '🖥️', category: 'Forensics', file: 'Iaito',
  description: 'anti-forensics detection aur data wiping identification ke liye ek advanced tamper evidence scanner.'
  },

  { id: 'adb', name: 'ADB', route: '/tool/adb', icon: '📱', category: 'Mobile', file: 'ADB',
  description: 'mobile credential storage analysis aur secure storage auditing ke liye ek reliable utility.'
  },

  { id: 'scrcpy', name: 'Scrcpy', route: '/tool/scrcpy', icon: '🖥️', category: 'Mobile', file: 'Scrcpy',
  description: 'iOS keychain analysis aur secure credential storage extraction ke liye ek professional Apple security scanner.'
  },

  { id: 'fastboot', name: 'Fastboot', route: '/tool/fastboot', icon: '⚡', category: 'Mobile', file: 'Fastboot',
  description: 'Android WebView vulnerability testing aur XSS attack simulation ke liye ek comprehensive mobile web tool.'
  },

  { id: 'dex2smali', name: 'Dex2Smali', route: '/tool/dex2smali', icon: '🔄', category: 'Mobile', file: 'Dex2Smali',
  description: 'Android intent fuzzing aur inter-component communication testing ke liye ek specialized scanner.'
  },

  { id: 'signapk', name: 'SignApk', route: '/tool/signapk', icon: '✍️', category: 'Mobile', file: 'SignApk',
  description: 'mobile application hooking aur runtime manipulation ke liye ek powerful dynamic analysis tool.'
  },

  { id: 'android-framework', name: 'Android Framework Tools', route: '/tool/android-framework', icon: '📱', category: 'Mobile', file: 'AndroidFrameworkTools',
  description: 'APK decompilation aur source code analysis ke liye ek powerful mobile forensics tool.'
  },

  { id: 'firmware-mod', name: 'Firmware Mod Kit', route: '/tool/firmware-mod', icon: '🔧', category: 'Mobile', file: 'FirmwareModKit',
  description: 'Android broadcast receiver analysis aur intent-based attack execution ke liye ek specialized mobile testing framework.'
  },

  { id: 'mkbootimg', name: 'Mkbootimg', route: '/tool/mkbootimg', icon: '📦', category: 'Mobile', file: 'Mkbootimg',
  description: 'mobile network traffic interception aur application communication analysis ke liye ek versatile toolkit.'
  },

  { id: 'dhcpig', name: 'DHCPig', route: '/tool/dhcpig', icon: '🐷', category: 'Network', file: 'DHCPig',
  description: 'ARP cache poisoning aur dynamic host tracking ke liye ek practical Layer 2 reconnaissance framework.'
  },

  { id: 'slowloris', name: 'Slowloris', route: '/tool/slowloris', icon: '🐢', category: 'Web', file: 'Slowloris',
  description: 'web CRLF injection aur HTTP response splitting ke liye ek advanced header manipulation framework.'
  },

  { id: 't50', name: 'T50', route: '/tool/t50', icon: '💥', category: 'Network', file: 'T50',
  description: 'network bandwidth monitoring aur protocol debugging ke liye ek reliable solution.'
  },

  { id: 'thc-ssl-dos', name: 'THC-SSL-DoS', route: '/tool/thc-ssl-dos', icon: '🔒', category: 'Web', file: 'THCSSLDoS',
  description: 'web NoSQL injection aur MongoDB query manipulation testing ke liye ek modern database scanner.'
  },

  { id: 'inviteflood', name: 'InviteFlood', route: '/tool/inviteflood', icon: '📞', category: 'Network', file: 'InviteFlood',
  description: 'network layer attack implementation aur protocol exploitation ke liye ek advanced tool.'
  },

  { id: 'powersploit', name: 'PowerSploit', route: '/tool/powersploit', icon: '💻', category: 'Exploitation', file: 'PowerSploit',
  description: 'payload crafting aur exploit delivery mechanism ke liye ek comprehensive solution.'
  },

  { id: 'pupy', name: 'Pupy', route: '/tool/pupy', icon: '🐍', category: 'Exploitation', file: 'Pupy',
  description: 'fileless malware delivery aur memory-only payload execution ke liye ek stealth exploitation framework.'
  },

  { id: 'pwnat', name: 'Pwnat', route: '/tool/pwnat', icon: '🌐', category: 'Tunneling', file: 'Pwnat',
  description: 'WebSocket tunneling aur bidirectional encrypted communication ke liye ek modern protocol wrapper.'
  },

  { id: 'trevorc2', name: 'TrevorC2', route: '/tool/trevorc2', icon: '📡', category: 'Exploitation', file: 'TrevorC2',
  description: 'vulnerability exploitation aur remote code execution ke liye ek advanced attack framework.'
  },

  { id: 'silenttrinity', name: 'SilentTrinity', route: '/tool/silenttrinity', icon: '🔇', category: 'Exploitation', file: 'SilentTrinity',
  description: 'shellcode generation aur encoder/decoder utility ke liye ek essential exploit development toolkit.'
  },

  { id: 'merlin', name: 'Merlin', route: '/tool/merlin', icon: '🧙', category: 'Exploitation', file: 'Merlin',
  description: 'deserialization attack execution aur .NET/Java object injection ke liye ek reliable exploitation framework.'
  },

  { id: 'koadic', name: 'Koadic', route: '/tool/koadic', icon: '🔩', category: 'Exploitation', file: 'Koadic',
  description: 'service exploitation aur remote command execution ke liye ek reliable framework.'
  },

  { id: 'dradis', name: 'Dradis', route: '/tool/dradis', icon: '📊', category: 'Recon', file: 'Dradis',
  description: 'mail server enumeration aur SMTP banner analysis ke liye ek practical recon framework.'
  },

  { id: 'faraday', name: 'Faraday', route: '/tool/faraday', icon: '⚡', category: 'Recon', file: 'Faraday',
  description: 'information gathering aur OSINT data collection ke liye ek comprehensive utility.'
  },

  { id: 'keepnote', name: 'KeepNote', route: '/tool/keepnote', icon: '📝', category: 'Recon', file: 'KeepNote',
  description: 'threat intelligence feed integration aur IOC correlation ke liye ek comprehensive security scanner.'
  },

  { id: 'cutycapt', name: 'CutyCapt', route: '/tool/cutycapt', icon: '📸', category: 'Recon', file: 'CutyCapt',
  description: 'whois lookup aur DNS record analysis ke liye ek practical recon tool.'
  },

  { id: 'pipal', name: 'Pipal', route: '/tool/pipal', icon: '📊', category: 'Passwords', file: 'Pipal',
  description: 'credential stuffing testing aur password spraying automation ke liye ek reliable framework.'
  },

  { id: 'bluelog', name: 'Bluelog', route: '/tool/bluelog', icon: '🔵', category: 'Recon', file: 'Bluelog',
  description: 'passive reconnaissance aur target intelligence collection ke liye ek advanced solution.'
  },

  { id: 'bluesnarfer', name: 'BlueSnarfer', route: '/tool/bluesnarfer', icon: '📱', category: 'Recon', file: 'BlueSnarfer',
  description: 'honeypot detection aur fake service identification ke liye ek specialized network intelligence tool.'
  },

  { id: 'spooftooph', name: 'Spooftooph', route: '/tool/spooftooph', icon: '🎭', category: 'Recon', file: 'Spooftooph',
  description: 'reverse DNS lookup aur PTR record enumeration ke liye ek reliable network utility.'
  },

  { id: 'stunnel', name: 'Stunnel', route: '/tool/stunnel', icon: '🔒', category: 'Tunneling', file: 'Stunnel',
  description: 'protocol tunneling aur traffic obfuscation ke liye ek comprehensive framework.'
  },

  { id: 'httptunnel', name: 'HTTPTunnel', route: '/tool/httptunnel', icon: '🚇', category: 'Tunneling', file: 'HTTPTunnel',
  description: 'multi-hop proxy chaining aur anonymous routing ke liye ek specialized toolkit.'
  }

];
const toolRoutes = tools.map(t => t.route);
const toolCount = tools.length;
export function getToolByRoute(route) {
  return tools.find(t => t.route === route);
}
export function getPrevNext(currentRoute) {
  const idx = toolRoutes.indexOf(currentRoute);
  if (idx === -1) {return { prev: null, next: null };}
  return {
    prev: idx > 0 ? { to: toolRoutes[idx - 1], label: tools[idx - 1].name } : null,
    next: idx < tools.length - 1 ? { to: toolRoutes[idx + 1], label: tools[idx + 1].name } : null
  };
}
export default tools;
export { toolRoutes, toolCount };
