const tools = [

  { id: 'aircrack-ng', name: 'Aircrack ng', route: '/tool/aircrack-ng', icon: '📶', category: 'WiFi', file: 'AircrackNg',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'airgeddon', name: 'Airgeddon', route: '/tool/airgeddon', icon: '🎯', category: 'WiFi', file: 'Airgeddon',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'amass', name: 'Amass', route: '/tool/amass', icon: '🔍', category: 'Recon', file: 'Amass',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'apktool', name: 'Apktool', route: '/tool/apktool', icon: '📱', category: 'Mobile', file: 'Apktool',
  description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.'
  },
  { id: 'arp-scan', name: 'Arp scan', route: '/tool/arp-scan', icon: '🔌', category: 'Recon', file: 'ArpScan',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'beef-xss', name: 'Beef xss', route: '/tool/beef-xss', icon: '🐂', category: 'Exploitation', file: 'BeefXss',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'bettercap', name: 'Bettercap', route: '/tool/bettercap', icon: '🛡️', category: 'Network', file: 'Bettercap',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'binwalk', name: 'Binwalk', route: '/tool/binwalk', icon: '🔬', category: 'Forensics', file: 'Binwalk',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'bloodhound', name: 'Bloodhound', route: '/tool/bloodhound', icon: '🐕', category: 'Recon', file: 'Bloodhound',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'burpsuite', name: 'Burpsuite', route: '/tool/burpsuite', icon: '🕷️', category: 'Web', file: 'Burpsuite',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'cewl', name: 'Cewl', route: '/tool/cewl', icon: '📝', category: 'Passwords', file: 'CeWL',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'chisel', name: 'Chisel', route: '/tool/chisel', icon: '🔧', category: 'Tunneling', file: 'Chisel',
  description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.'
  },
  { id: 'commix', name: 'Commix', route: '/tool/commix', icon: '💉', category: 'Exploitation', file: 'Commix',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'crackmapexec', name: 'Crackmapexec', route: '/tool/crackmapexec', icon: '⚡', category: 'Exploitation', file: 'Crackmapexec',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'crunch', name: 'Crunch', route: '/tool/crunch', icon: '🔤', category: 'Passwords', file: 'Crunch',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'dirb', name: 'Dirb', route: '/tool/dirb', icon: '📂', category: 'Web', file: 'Dirb',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'dnscat2', name: 'Dnscat2', route: '/tool/dnscat2', icon: '🐱', category: 'Tunneling', file: 'Dnscat2',
  description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.'
  },
  { id: 'dnsenum', name: 'Dnsenum', route: '/tool/dnsenum', icon: '📋', category: 'Recon', file: 'Dnsenum',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'dnsrecon', name: 'Dnsrecon', route: '/tool/dnsrecon', icon: '🔄', category: 'Recon', file: 'Dnsrecon',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'drozer', name: 'Drozer', route: '/tool/drozer', icon: '🤖', category: 'Mobile', file: 'Drozer',
  description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.'
  },
  { id: 'eaphammer', name: 'Eaphammer', route: '/tool/eaphammer', icon: '🔨', category: 'WiFi', file: 'Eaphammer',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'empire', name: 'Empire', route: '/tool/empire', icon: '👑', category: 'Exploitation', file: 'Empire',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'enum4linux', name: 'Enum4linux', route: '/tool/enum4linux', icon: '🐧', category: 'Recon', file: 'Enum4linux',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'evil-winrm', name: 'Evil winrm', route: '/tool/evil-winrm', icon: '👿', category: 'Exploitation', file: 'EvilWinrm',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'ffuf', name: 'Ffuf', route: '/tool/ffuf', icon: '🚀', category: 'Web', file: 'Ffuf',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'frida', name: 'Frida', route: '/tool/frida', icon: '🪡', category: 'Mobile', file: 'Frida',
  description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.'
  },
  { id: 'gobuster', name: 'Gobuster', route: '/tool/gobuster', icon: '💥', category: 'Web', file: 'Gobuster',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'hashcat', name: 'Hashcat', route: '/tool/hashcat', icon: '💎', category: 'Passwords', file: 'Hashcat',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'hcxdumptool', name: 'Hcxdumptool', route: '/tool/hcxdumptool', icon: '🔓', category: 'WiFi', file: 'Hcxdumptool',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'hostapd-mana', name: 'Hostapd mana', route: '/tool/hostapd-mana', icon: '📡', category: 'WiFi', file: 'HostapdMana',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'hping3', name: 'Hping3', route: '/tool/hping3', icon: '📨', category: 'Network', file: 'Hping3',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'hydra', name: 'Hydra', route: '/tool/hydra', icon: '🐍', category: 'Passwords', file: 'Hydra',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'impacket', name: 'Impacket', route: '/tool/impacket', icon: '📦', category: 'Exploitation', file: 'Impacket',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'john', name: 'John', route: '/tool/john', icon: '👤', category: 'Passwords', file: 'John',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'katana', name: 'Katana', route: '/tool/katana', icon: '🗡️', category: 'Web', file: 'Katana',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'kismet', name: 'Kismet', route: '/tool/kismet', icon: '📡', category: 'WiFi', file: 'Kismet',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'lynis', name: 'Lynis', route: '/tool/lynis', icon: '✅', category: 'Audit', file: 'Lynis',
  description: 'security auditing aur compliance checking ke liye ek comprehensive tool.'
  },
  { id: 'macchanger', name: 'Macchanger', route: '/tool/macchanger', icon: '🔢', category: 'WiFi', file: 'Macchanger',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'maltego', name: 'Maltego', route: '/tool/maltego', icon: '🕸️', category: 'Recon', file: 'Maltego',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'masscan', name: 'Masscan', route: '/tool/masscan', icon: '⚡', category: 'Recon', file: 'Masscan',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'medusa', name: 'Medusa', route: '/tool/medusa', icon: '🐍', category: 'Passwords', file: 'Medusa',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'metasploit-framework', name: 'Metasploit framework', route: '/tool/metasploit-framework', icon: '💣', category: 'Exploitation', file: 'Metasploit',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'mimikatz', name: 'Mimikatz', route: '/tool/mimikatz', icon: '🔑', category: 'Exploitation', file: 'Mimikatz',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'mitmproxy', name: 'Mitmproxy', route: '/tool/mitmproxy', icon: '🔄', category: 'Network', file: 'Mitmproxy',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'msfvenom', name: 'Msfvenom', route: '/tool/msfvenom', icon: '💉', category: 'Exploitation', file: 'Msfvenom',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'naabu', name: 'Naabu', route: '/tool/naabu', icon: '📡', category: 'Recon', file: 'Naabu',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'netcat', name: 'Netcat', route: '/tool/netcat', icon: '🔌', category: 'Network', file: 'Netcat',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'netdiscover', name: 'Netdiscover', route: '/tool/netdiscover', icon: '🔍', category: 'Recon', file: 'Netdiscover',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'nikto', name: 'Nikto', route: '/tool/nikto', icon: '🌐', category: 'Web', file: 'Nikto',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'nmap', name: 'Nmap', route: '/tool/nmap', icon: '🗺️', category: 'Recon', file: 'Nmap',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'nuclei', name: 'Nuclei', route: '/tool/nuclei', icon: '☢️', category: 'Web', file: 'Nuclei',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'objection', name: 'Objection', route: '/tool/objection', icon: '📱', category: 'Mobile', file: 'Objection',
  description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.'
  },
  { id: 'pixiewps', name: 'Pixiewps', route: '/tool/pixiewps', icon: '🔢', category: 'WiFi', file: 'Pixiewps',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'proxychains', name: 'Proxychains', route: '/tool/proxychains', icon: '⛓️', category: 'Tunneling', file: 'Proxychains',
  description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.'
  },
  { id: 'radare2', name: 'Radare2', route: '/tool/radare2', icon: '🔧', category: 'Forensics', file: 'Radare2',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'reaver', name: 'Reaver', route: '/tool/reaver', icon: '🔨', category: 'WiFi', file: 'Reaver',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'recon-ng', name: 'Recon ng', route: '/tool/recon-ng', icon: '🕵️', category: 'Recon', file: 'ReconNg',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'responder', name: 'Responder', route: '/tool/responder', icon: '🔄', category: 'Network', file: 'Responder',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'searchsploit', name: 'Searchsploit', route: '/tool/searchsploit', icon: '📚', category: 'Exploitation', file: 'Searchsploit',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'setoolkit', name: 'Setoolkit', route: '/tool/setoolkit', icon: '🎭', category: 'Exploitation', file: 'Setoolkit',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'sherlock', name: 'Sherlock', route: '/tool/sherlock', icon: '🔎', category: 'Recon', file: 'Sherlock',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'socat', name: 'Socat', route: '/tool/socat', icon: '🔗', category: 'Tunneling', file: 'Socat',
  description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.'
  },
  { id: 'sqlmap', name: 'Sqlmap', route: '/tool/sqlmap', icon: '💾', category: 'Web', file: 'Sqlmap',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'sqlninja', name: 'Sqlninja', route: '/tool/sqlninja', icon: '🐱', category: 'Web', file: 'Sqlninja',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'sslstrip', name: 'Sslstrip', route: '/tool/sslstrip', icon: '🔓', category: 'WiFi', file: 'Sslstrip',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'subfinder', name: 'Subfinder', route: '/tool/subfinder', icon: '🔎', category: 'Recon', file: 'Subfinder',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'tcpdump', name: 'Tcpdump', route: '/tool/tcpdump', icon: '📥', category: 'Network', file: 'Tcpdump',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'theharvester', name: 'Theharvester', route: '/tool/theharvester', icon: '🌾', category: 'Recon', file: 'Theharvester',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'trivy', name: 'Trivy', route: '/tool/trivy', icon: '🔍', category: 'Audit', file: 'Trivy',
  description: 'security auditing aur compliance checking ke liye ek comprehensive tool.'
  },
  { id: 'volatility', name: 'Volatility', route: '/tool/volatility', icon: '🧠', category: 'Forensics', file: 'Volatility',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'wafw00f', name: 'Wafw00f', route: '/tool/wafw00f', icon: '🛡️', category: 'Web', file: 'Wafw00f',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'weevely', name: 'Weevely', route: '/tool/weevely', icon: '🐚', category: 'Exploitation', file: 'Weevely',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'whois', name: 'Whois', route: '/tool/whois', icon: '🔍', category: 'Recon', file: 'Whois',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'wifite', name: 'Wifite', route: '/tool/wifite', icon: '📶', category: 'WiFi', file: 'Wifite',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'wireshark', name: 'Wireshark', route: '/tool/wireshark', icon: '🦈', category: 'Network', file: 'Wireshark',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'wpscan', name: 'Wpscan', route: '/tool/wpscan', icon: '🔐', category: 'Web', file: 'Wpscan',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'yersinia', name: 'Yersinia', route: '/tool/yersinia', icon: '🦎', category: 'Network', file: 'Yersinia',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'dmitry', name: 'DMitry', route: '/tool/dmitry', icon: '🔍', category: 'Recon', file: 'DMitry',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'ike-scan', name: 'IKE-Scan', route: '/tool/ike-scan', icon: '🔐', category: 'Recon', file: 'IKEScan',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'lbd', name: 'LBD', route: '/tool/lbd', icon: '⚖️', category: 'Recon', file: 'LBD',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'nbtscan', name: 'NBTScan', route: '/tool/nbtscan', icon: '🖥️', category: 'Recon', file: 'NBTScan',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'nishang', name: 'Nishang', route: '/tool/nishang', icon: '💻', category: 'Exploitation', file: 'Nishang',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'p0f', name: 'P0f', route: '/tool/p0f', icon: '🖧', category: 'Recon', file: 'P0f',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'pcredz', name: 'PCredz', route: '/tool/pcredz', icon: '🔑', category: 'Forensics', file: 'PCredz',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'pdf-parser', name: 'PDF-Parser', route: '/tool/pdf-parser', icon: '📄', category: 'Forensics', file: 'PDFParser',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'smbmap', name: 'SMBMap', route: '/tool/smbmap', icon: '📁', category: 'Recon', file: 'SMBMap',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'snmp-check', name: 'SNMP-Check', route: '/tool/snmp-check', icon: '📡', category: 'Recon', file: 'SNMPCheck',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'sparta', name: 'Sparta', route: '/tool/sparta', icon: '🛡️', category: 'Recon', file: 'Sparta',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'sslscan', name: 'SSLScan', route: '/tool/sslscan', icon: '🔒', category: 'Recon', file: 'SSLScan',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'sslyze', name: 'SSLyze', route: '/tool/sslyze', icon: '🔐', category: 'Recon', file: 'SSLyze',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'unicornscan', name: 'Unicornscan', route: '/tool/unicornscan', icon: '🦄', category: 'Recon', file: 'Unicornscan',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'urlcrazy', name: 'URLCrazy', route: '/tool/urlcrazy', icon: '🔗', category: 'Recon', file: 'URLCrazy',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'xplico', name: 'Xplico', route: '/tool/xplico', icon: '📊', category: 'Forensics', file: 'Xplico',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'dns2tcp', name: 'Dns2tcp', route: '/tool/dns2tcp', icon: '🔗', category: 'Tunneling', file: 'Dns2tcp',
  description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.'
  },
  { id: 'dnschef', name: 'DNSchef', route: '/tool/dnschef', icon: '🔄', category: 'Recon', file: 'DNSchef',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'metagoofil', name: 'Metagoofil', route: '/tool/metagoofil', icon: '📑', category: 'Recon', file: 'Metagoofil',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'fierce', name: 'Fierce', route: '/tool/fierce', icon: '🔥', category: 'Recon', file: 'Fierce',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'dnsmap', name: 'Dnsmap', route: '/tool/dnsmap', icon: '📋', category: 'Recon', file: 'Dnsmap',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'httrack', name: 'HTTrack', route: '/tool/httrack', icon: '🌐', category: 'Web', file: 'HTTrack',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'rpcbind', name: 'RPCBind', route: '/tool/rpcbind', icon: '🔌', category: 'Recon', file: 'RPCBind',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'smbclient', name: 'SMBClient', route: '/tool/smbclient', icon: '📂', category: 'Recon', file: 'SMBClient',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'finger', name: 'Finger', route: '/tool/finger', icon: '🔍', category: 'Recon', file: 'Finger',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'showmount', name: 'Showmount', route: '/tool/showmount', icon: '📦', category: 'Recon', file: 'Showmount',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'bind9', name: 'BIND9', route: '/tool/bind9', icon: '🌐', category: 'Recon', file: 'BIND9',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'armitage', name: 'Armitage', route: '/tool/armitage', icon: '🎯', category: 'Exploitation', file: 'Armitage',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'backdoor-factory', name: 'Backdoor Factory', route: '/tool/backdoor-factory', icon: '🚪', category: 'Exploitation', file: 'BackdoorFactory',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'shellter', name: 'Shellter', route: '/tool/shellter', icon: '🐚', category: 'Exploitation', file: 'Shellter',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'veil', name: 'Veil', route: '/tool/veil', icon: '🎭', category: 'Exploitation', file: 'Veil',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'websploit', name: 'WebSploit', route: '/tool/websploit', icon: '🕸️', category: 'Web', file: 'WebSploit',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'exe2hex', name: 'Exe2Hex', route: '/tool/exe2hex', icon: '🔄', category: 'Exploitation', file: 'Exe2Hex',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'fluxion', name: 'Fluxion', route: '/tool/fluxion', icon: '📶', category: 'WiFi', file: 'Fluxion',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'mana-toolkit', name: 'Mana Toolkit', route: '/tool/mana-toolkit', icon: '🕸️', category: 'WiFi', file: 'ManaToolkit',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'thc-ipv6', name: 'THC-IPv6', route: '/tool/thc-ipv6', icon: '🌐', category: 'Exploitation', file: 'THCIPv6',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'sidguess', name: 'SidGuess', route: '/tool/sidguess', icon: '🎯', category: 'Web', file: 'SidGuess',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'msfpayload', name: 'MSFPayload', route: '/tool/msfpayload', icon: '💣', category: 'Exploitation', file: 'MSFPayload',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'shellnoob', name: 'ShellNoob', route: '/tool/shellnoob', icon: '🐚', category: 'Exploitation', file: 'ShellNoob',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'pwntools', name: 'Pwntools', route: '/tool/pwntools', icon: '🔧', category: 'Exploitation', file: 'Pwntools',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'ropper', name: 'Ropper', route: '/tool/ropper', icon: '🛠️', category: 'Exploitation', file: 'Ropper',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'checksec', name: 'Checksec', route: '/tool/checksec', icon: '✅', category: 'Exploitation', file: 'Checksec',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'one_gadget', name: 'One Gadget', route: '/tool/one_gadget', icon: '💊', category: 'Exploitation', file: 'OneGadget',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'whatweb', name: 'WhatWeb', route: '/tool/whatweb', icon: '🌍', category: 'Web', file: 'WhatWeb',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'skipfish', name: 'Skipfish', route: '/tool/skipfish', icon: '🐟', category: 'Web', file: 'Skipfish',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'wapiti', name: 'Wapiti', route: '/tool/wapiti', icon: '🐐', category: 'Web', file: 'Wapiti',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'wfuzz', name: 'WFuzz', route: '/tool/wfuzz', icon: '⚡', category: 'Web', file: 'WFuzz',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'dirbuster', name: 'DirBuster', route: '/tool/dirbuster', icon: '🔍', category: 'Web', file: 'DirBuster',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'cadaver', name: 'Cadaver', route: '/tool/cadaver', icon: '📂', category: 'Web', file: 'Cadaver',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'davtest', name: 'DavTest', route: '/tool/davtest', icon: '🧪', category: 'Web', file: 'DavTest',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'fimap', name: 'Fimap', route: '/tool/fimap', icon: '📁', category: 'Web', file: 'Fimap',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'joomscan', name: 'JoomScan', route: '/tool/joomscan', icon: '📰', category: 'Web', file: 'JoomScan',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'cmsmap', name: 'CMSMap', route: '/tool/cmsmap', icon: '🗺️', category: 'Web', file: 'CMSMap',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'http-enum', name: 'HTTP-Enum', route: '/tool/http-enum', icon: '🔌', category: 'Web', file: 'HTTPEnum',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'jsql', name: 'jSQL Injection', route: '/tool/jsql', icon: '💉', category: 'Web', file: 'jSQLInjection',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'sqlsus', name: 'SQLSus', route: '/tool/sqlsus', icon: '💾', category: 'Web', file: 'SQLSus',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'ace-voip', name: 'ACE-VoIP', route: '/tool/ace-voip', icon: '📞', category: 'Passwords', file: 'ACEVoIP',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'cmospwd', name: 'CmosPwd', route: '/tool/cmospwd', icon: '🔑', category: 'Passwords', file: 'CmosPwd',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'creddump', name: 'CredDump', route: '/tool/creddump', icon: '🗝️', category: 'Passwords', file: 'CredDump',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'findmyhash', name: 'FindMyHash', route: '/tool/findmyhash', icon: '🔍', category: 'Passwords', file: 'FindMyHash',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'maskprocessor', name: 'Maskprocessor', route: '/tool/maskprocessor', icon: '🎭', category: 'Passwords', file: 'Maskprocessor',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'onesixtyone', name: 'Onesixtyone', route: '/tool/onesixtyone', icon: '🔢', category: 'Passwords', file: 'Onesixtyone',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'pack', name: 'PACK', route: '/tool/pack', icon: '📦', category: 'Passwords', file: 'PACK',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'pdfcrack', name: 'PDFCrack', route: '/tool/pdfcrack', icon: '📄', category: 'Passwords', file: 'PDFCrack',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'pyrit', name: 'Pyrit', route: '/tool/pyrit', icon: '⚡', category: 'Passwords', file: 'Pyrit',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'rainbowcrack', name: 'RainbowCrack', route: '/tool/rainbowcrack', icon: '🌈', category: 'Passwords', file: 'RainbowCrack',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'samdump2', name: 'SamDump2', route: '/tool/samdump2', icon: '💾', category: 'Passwords', file: 'SamDump2',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'sipcrack', name: 'SipCrack', route: '/tool/sipcrack', icon: '📞', category: 'Passwords', file: 'SipCrack',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'sucrack', name: 'Sucrack', route: '/tool/sucrack', icon: '🔄', category: 'Passwords', file: 'Sucrack',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'twofi', name: 'Twofi', route: '/tool/twofi', icon: '🐦', category: 'Passwords', file: 'Twofi',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'wordlists', name: 'Wordlists', route: '/tool/wordlists', icon: '📚', category: 'Passwords', file: 'Wordlists',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'fern-wifi', name: 'Fern WiFi Cracker', route: '/tool/fern-wifi', icon: '📶', category: 'WiFi', file: 'FernWiFiCracker',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'bully', name: 'Bully', route: '/tool/bully', icon: '💪', category: 'WiFi', file: 'Bully',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'cowpatty', name: 'Cowpatty', route: '/tool/cowpatty', icon: '🐄', category: 'WiFi', file: 'Cowpatty',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'mdk3', name: 'MDK3', route: '/tool/mdk3', icon: '💥', category: 'WiFi', file: 'MDK3',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'mdk4', name: 'MDK4', route: '/tool/mdk4', icon: '💥', category: 'WiFi', file: 'MDK4',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'wash', name: 'Wash', route: '/tool/wash', icon: '🧹', category: 'WiFi', file: 'Wash',
  description: 'wireless network penetration testing aur WiFi security auditing ke liye ek powerful tool.'
  },
  { id: 'ettercap', name: 'Ettercap', route: '/tool/ettercap', icon: '🕸️', category: 'Network', file: 'Ettercap',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'netsniff-ng', name: 'Netsniff-ng', route: '/tool/netsniff-ng', icon: '📡', category: 'Network', file: 'Netsniffng',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'tcpflow', name: 'TCPFlow', route: '/tool/tcpflow', icon: '💧', category: 'Network', file: 'TCPFlow',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'hexinject', name: 'HexInject', route: '/tool/hexinject', icon: '💉', category: 'Network', file: 'HexInject',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'rebind', name: 'Rebind', route: '/tool/rebind', icon: '🔄', category: 'Network', file: 'Rebind',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'ferret', name: 'Ferret', route: '/tool/ferret', icon: '🦦', category: 'Network', file: 'Ferret',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'hamster', name: 'Hamster', route: '/tool/hamster', icon: '🐹', category: 'Network', file: 'Hamster',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'sniffjoke', name: 'SniffJoke', route: '/tool/sniffjoke', icon: '🎭', category: 'Network', file: 'SniffJoke',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'autopsy', name: 'Autopsy', route: '/tool/autopsy', icon: '🔬', category: 'Forensics', file: 'Autopsy',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'sleuthkit', name: 'Sleuth Kit', route: '/tool/sleuthkit', icon: '🛠️', category: 'Forensics', file: 'SleuthKit',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'foremost', name: 'Foremost', route: '/tool/foremost', icon: '🔍', category: 'Forensics', file: 'Foremost',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'scalpel', name: 'Scalpel', route: '/tool/scalpel', icon: '🔪', category: 'Forensics', file: 'Scalpel',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'guymager', name: 'Guymager', route: '/tool/guymager', icon: '💿', category: 'Forensics', file: 'Guymager',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'dc3dd', name: 'DC3DD', route: '/tool/dc3dd', icon: '💽', category: 'Forensics', file: 'DC3DD',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'testdisk', name: 'TestDisk', route: '/tool/testdisk', icon: '💾', category: 'Forensics', file: 'TestDisk',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'photorec', name: 'PhotoRec', route: '/tool/photorec', icon: '📷', category: 'Forensics', file: 'PhotoRec',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'ghidra', name: 'Ghidra', route: '/tool/ghidra', icon: '🐉', category: 'Forensics', file: 'Ghidra',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'edb-debugger', name: 'EDB Debugger', route: '/tool/edb-debugger', icon: '🐛', category: 'Forensics', file: 'EDBDebugger',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'dex2jar', name: 'Dex2Jar', route: '/tool/dex2jar', icon: '☕', category: 'Forensics', file: 'Dex2Jar',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'jd-gui', name: 'JD-GUI', route: '/tool/jd-gui', icon: '📖', category: 'Forensics', file: 'JDGUI',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'smali', name: 'Smali/Baksmali', route: '/tool/smali', icon: '🔧', category: 'Forensics', file: 'SmaliBaksmali',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'capstone', name: 'Capstone', route: '/tool/capstone', icon: '🏛️', category: 'Forensics', file: 'Capstone',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'keystone', name: 'Keystone', route: '/tool/keystone', icon: '🔑', category: 'Forensics', file: 'Keystone',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'iaito', name: 'Iaito', route: '/tool/iaito', icon: '🖥️', category: 'Forensics', file: 'Iaito',
  description: 'digital forensics aur data analysis ke liye ek professional tool.'
  },
  { id: 'adb', name: 'ADB', route: '/tool/adb', icon: '📱', category: 'Mobile', file: 'ADB',
  description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.'
  },
  { id: 'scrcpy', name: 'Scrcpy', route: '/tool/scrcpy', icon: '🖥️', category: 'Mobile', file: 'Scrcpy',
  description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.'
  },
  { id: 'fastboot', name: 'Fastboot', route: '/tool/fastboot', icon: '⚡', category: 'Mobile', file: 'Fastboot',
  description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.'
  },
  { id: 'dex2smali', name: 'Dex2Smali', route: '/tool/dex2smali', icon: '🔄', category: 'Mobile', file: 'Dex2Smali',
  description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.'
  },
  { id: 'signapk', name: 'SignApk', route: '/tool/signapk', icon: '✍️', category: 'Mobile', file: 'SignApk',
  description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.'
  },
  { id: 'android-framework', name: 'Android Framework Tools', route: '/tool/android-framework', icon: '📱', category: 'Mobile', file: 'AndroidFrameworkTools',
  description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.'
  },
  { id: 'firmware-mod', name: 'Firmware Mod Kit', route: '/tool/firmware-mod', icon: '🔧', category: 'Mobile', file: 'FirmwareModKit',
  description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.'
  },
  { id: 'mkbootimg', name: 'Mkbootimg', route: '/tool/mkbootimg', icon: '📦', category: 'Mobile', file: 'Mkbootimg',
  description: 'mobile application security testing aur Android/iOS analysis ke liye ek specialized tool.'
  },
  { id: 'dhcpig', name: 'DHCPig', route: '/tool/dhcpig', icon: '🐷', category: 'Network', file: 'DHCPig',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'slowloris', name: 'Slowloris', route: '/tool/slowloris', icon: '🐢', category: 'Web', file: 'Slowloris',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 't50', name: 'T50', route: '/tool/t50', icon: '💥', category: 'Network', file: 'T50',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'thc-ssl-dos', name: 'THC-SSL-DoS', route: '/tool/thc-ssl-dos', icon: '🔒', category: 'Web', file: 'THCSSLDoS',
  description: 'web application security testing aur vulnerability detection ke liye ek useful tool.'
  },
  { id: 'inviteflood', name: 'InviteFlood', route: '/tool/inviteflood', icon: '📞', category: 'Network', file: 'InviteFlood',
  description: 'network security testing aur traffic analysis ke liye ek essential tool.'
  },
  { id: 'powersploit', name: 'PowerSploit', route: '/tool/powersploit', icon: '💻', category: 'Exploitation', file: 'PowerSploit',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'pupy', name: 'Pupy', route: '/tool/pupy', icon: '🐍', category: 'Exploitation', file: 'Pupy',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'pwnat', name: 'Pwnat', route: '/tool/pwnat', icon: '🌐', category: 'Tunneling', file: 'Pwnat',
  description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.'
  },
  { id: 'trevorc2', name: 'TrevorC2', route: '/tool/trevorc2', icon: '📡', category: 'Exploitation', file: 'TrevorC2',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'silenttrinity', name: 'SilentTrinity', route: '/tool/silenttrinity', icon: '🔇', category: 'Exploitation', file: 'SilentTrinity',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'merlin', name: 'Merlin', route: '/tool/merlin', icon: '🧙', category: 'Exploitation', file: 'Merlin',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'koadic', name: 'Koadic', route: '/tool/koadic', icon: '🔩', category: 'Exploitation', file: 'Koadic',
  description: 'vulnerability exploitation aur penetration testing ke liye ek advanced tool.'
  },
  { id: 'dradis', name: 'Dradis', route: '/tool/dradis', icon: '📊', category: 'Recon', file: 'Dradis',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'faraday', name: 'Faraday', route: '/tool/faraday', icon: '⚡', category: 'Recon', file: 'Faraday',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'keepnote', name: 'KeepNote', route: '/tool/keepnote', icon: '📝', category: 'Recon', file: 'KeepNote',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'cutycapt', name: 'CutyCapt', route: '/tool/cutycapt', icon: '📸', category: 'Recon', file: 'CutyCapt',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'pipal', name: 'Pipal', route: '/tool/pipal', icon: '📊', category: 'Passwords', file: 'Pipal',
  description: 'password cracking aur hash analysis ke liye ek effective tool.'
  },
  { id: 'bluelog', name: 'Bluelog', route: '/tool/bluelog', icon: '🔵', category: 'Recon', file: 'Bluelog',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'bluesnarfer', name: 'BlueSnarfer', route: '/tool/bluesnarfer', icon: '📱', category: 'Recon', file: 'BlueSnarfer',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'spooftooph', name: 'Spooftooph', route: '/tool/spooftooph', icon: '🎭', category: 'Recon', file: 'Spooftooph',
  description: 'reconnaissance aur information gathering ke liye ek important tool jo target ke baare mein data collect karta hai.'
  },
  { id: 'stunnel', name: 'Stunnel', route: '/tool/stunnel', icon: '🔒', category: 'Tunneling', file: 'Stunnel',
  description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.'
  },
  { id: 'httptunnel', name: 'HTTPTunnel', route: '/tool/httptunnel', icon: '🚇', category: 'Tunneling', file: 'HTTPTunnel',
  description: 'network tunneling aur traffic encapsulation ke liye ek reliable tool.'
  },

];
const toolRoutes = tools.map(t => t.route);
const toolCount = tools.length;
export function getToolByRoute(route) {
  return tools.find(t => t.route === route);
}
export function getPrevNext(currentRoute) {
  const idx = toolRoutes.indexOf(currentRoute);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? { to: toolRoutes[idx - 1], label: tools[idx - 1].name } : null,
    next: idx < tools.length - 1 ? { to: toolRoutes[idx + 1], label: tools[idx + 1].name } : null
  };
}
export default tools;
export { toolRoutes, toolCount };
