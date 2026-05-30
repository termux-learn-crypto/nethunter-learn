import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Proxychains() {
  return (
    <TutorialLayout
      title="proxychains"
      subtitle="किसी भी Linux tool का traffic proxy servers के through route करो"
      icon="🔗"
      prev={{ to: '/tool/beef-xss', label: 'beef-xss' }}
      next={{ to: '/tool/hcxdumptool', label: 'hcxdumptool' }}
    >
      <h2>What is ProxyChains?</h2>
      <p>
        ProxyChains एक powerful command-line tool है जो किसी भी Linux program का network traffic proxy servers के through route करता है। यह SOCKS4, SOCKS5, HTTP, और HTTPS proxies support करता है। कोई भी tool — Nmap, Nikto, curl, wget, Firefox, Metasploit — सबको proxy के पीछे चला सकते हो। Identity hide करने, geo-restrictions bypass करने, और network restrictions overcome करने के लिए यह essential tool है।
      </p>
      <p>
        ProxyChains Linux kernel के LD_PRELOAD feature use करता है — यह dynamically library injection technique है जो network calls को intercept करती है। जब भी कोई program connect() system call करता है, ProxyChains उस call को hook करके configured proxy servers के through redirect कर देता है। यह transparent proxying provide करता है — tool को पता भी नहीं चलता कि वह proxy से होकर जा रहा है। Tor integration सबसे popular use case है — anonymous reconnaissance और scanning के लिए।
      </p>
      <p>
        ProxyChains को rofl0r ने 2012 में ProxyChains-NG (New Generation) के रूप में rewrite किया था। Original ProxyChains को haad ने 2006 में बनाया था लेकिन उसमें कई bugs थे और maintenance बंद हो गई। ProxyChains-NG actively maintained है और bug fixes, new features regular आते हैं। यह C language में लिखा गया है और GitHub पर open source (GPLv2) है। Penetration testing, red teaming, और OSINT में anonymity maintain करना बहुत ज़रूरी है — ProxyChains यह काम आसान बनाता है।
      </p>
      <p>
        ProxyChains की सबसे बड़ी खासियत है इसकी simplicity — बस tool name से पहले proxychains4 लगाओ और traffic automatically proxy से route हो जाएगा। कोई complex configuration नहीं, कोई additional software नहीं। यह multi-proxy chaining support करता है जिससे traffic कई proxy servers से होकर जाता है — इससे tracking लगभग impossible हो जाती है। Red teamers, bug bounty hunters, और privacy-conscious users सभी इस tool का daily use करते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> ProxyChains केवल authorized testing और privacy protection के लिए use करें। बिना अनुमति के anonymous scanning अवैध हो सकता है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized network access अपराध हो सकता है। Proxy use करने से illegal activities legal नहीं हो जातीं।
      </div>

      <h2>History of ProxyChains</h2>
      <p>
        Original ProxyChains को haad ने 2006 में बनाया था। यह LD_PRELOAD technique use करके किसी भी program का traffic proxy से route करने वाला पहला general-purpose tool था। उस समय anonymity tools बहुत limited थे — Tor अभी early stage में था और VPN services common नहीं थे। ProxyChains ने penetration testers को एक simple solution दिया अपनी identity hide करने के लिए।
      </p>
      <p>
        2012 में rofl0r ने ProxyChains-NG (New Generation) release किया — पूरा codebase rewrite किया गया। Better error handling, DNS leak prevention, SOCKS5 authentication support, और more proxy types support जोड़ा गया। Memory leaks और crash bugs fix किए गए। आज ProxyChains-NG ही standard version है जो सभी major Linux distributions में install होता है — Kali Linux, Parrot OS, Ubuntu, Arch Linux, Fedora सब में यही version मिलता है।
      </p>
      <p>
        ProxyChains का evolution Tor network के साथ closely linked है। जैसे-जैसे Tor popular हुआ, ProxyChains का use भी बढ़ा। आज यह Kali Linux के pre-installed tools में शामिल है और almost हर penetration testing tutorial में इसका ज़िक्र आता है। यह anonymity ecosystem का fundamental building block बन गया है।
      </p>

      <h2>How ProxyChains Works?</h2>
      <p>
        ProxyChains LD_PRELOAD library injection technique use करता है जो Linux kernel की dynamic linking mechanism पर based है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">LD_PRELOAD Injection:</strong> ProxyChains target program के साथ एक shared library (libproxychains4.so) load करता है जो सभी other libraries से पहले load होती है</li>
        <li><strong className="text-white">connect() System Call Hook:</strong> यह library connect() function को override करती है — जब भी program network connection बनाने की कोशिश करे, ProxyChains का version call होता है</li>
        <li><strong className="text-white">Proxy Chain Construction:</strong> Original destination की जगह configured proxy server से connection बनता है, फिर proxy server destination तक forward करता है</li>
        <li><strong className="text-white">Protocol Negotiation:</strong> ProxyChains proxy protocol (SOCKS4/5, HTTP CONNECT) handle करता है — authentication, connection request, data relay सब</li>
        <li><strong className="text-white">Multi-Proxy Chaining:</strong> कई proxies configure कर सकते हो — traffic sequential order में एक से दूसरे proxy से होकर जाता है</li>
        <li><strong className="text-white">DNS Leak Prevention:</strong> proxy_dns option enable करने पर DNS queries भी proxy से route होती हैं — ISP को पता नहीं चलता कि कौन सी site visit कर रहे हो</li>
        <li><strong className="text-white">Transparent Operation:</strong> Target tool को कोई modification नहीं चाहिए — ProxyChains completely transparent है</li>
        <li><strong className="text-white">TCP Only Limitation:</strong> यह सिर्फ TCP connections intercept करता है — UDP, ICMP, raw sockets bypass हो जाते हैं क्योंकि वे connect() call use नहीं करते</li>
      </ul>
      <p>
        जब तुम proxychains4 prefix के साथ कोई tool run करते हो, तो ProxyChains पहले LD_PRELOAD environment variable set करता है। फिर target program को execve() system call से launch करता है। Program start होते ही libproxychains4.so load हो जाती है और connect() function hook हो जाता है। अब program जब भी network connection बनाएगा, ProxyChains का code run होगा और traffic proxy servers से होकर जाएगा।
      </p>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में ProxyChains pre-installed आता है। अगर किसी कारण से नहीं है तो कई तरीकों से install कर सकते हो।
      </p>
      <CodeBlock
        title="ProxyChains Installation"
        code={`# Kali/Parrot में pre-installed होता है:
sudo apt update
sudo apt install proxychains4

# Ubuntu/Debian पर:
sudo apt update
sudo apt install proxychains4

# Fedora पर:
sudo dnf install proxychains-ng

# Arch Linux पर:
sudo pacman -S proxychains-ng

# Source से install (latest version):
git clone https://github.com/rofl0r/proxychains-ng.git
cd proxychains-ng
./configure --prefix=/usr --sysconfdir=/etc
make
sudo make install
sudo make install-config

# macOS (Homebrew):
brew install proxychains-ng

# वर्जन चेक:
proxychains4 --version

# Config file location:
ls -la /etc/proxychains4.conf

# Default config backup:
sudo cp /etc/proxychains4.conf /etc/proxychains4.conf.backup`}
      />

      <h2>Basic Usage</h2>
      <p>
        ProxyChains का usage बहुत simple है — बस tool name से पहले proxychains4 लगाओ। कोई भी TCP-based tool proxy के through चल सकता है।
      </p>
      <CodeBlock
        title="Basic ProxyChains Commands"
        code={`# Basic syntax:
proxychains4 <tool> <arguments>

# Nmap TCP connect scan through proxy:
proxychains4 nmap -sT -Pn target.com

# curl through proxy:
proxychains4 curl http://target.com

# wget file download through proxy:
proxychains4 wget http://target.com/file.txt

# Firefox browser through proxy:
proxychains4 firefox

# SSH through proxy:
proxychains4 ssh user@target.com

# Python script through proxy:
proxychains4 python3 script.py

# Metasploit through proxy:
proxychains4 msfconsole

# Nikto web scanner through proxy:
proxychains4 nikto -h http://target.com

# Custom config file use करो:
proxychains4 -f /path/to/custom-config.conf curl http://target.com

# Quiet mode — banner hide:
proxychains4 -q curl http://target.com

# Log file में save:
proxychains4 -l /tmp/proxy.log curl http://target.com`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Option</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f config</td><td className="py-2 px-3">Custom config file path specify करो</td><td className="py-2 px-3 font-mono text-xs">-f ~/my-proxy.conf</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-q</td><td className="py-2 px-3">Quiet mode — banner और version info hide</td><td className="py-2 px-3 font-mono text-xs">-q</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-l logfile</td><td className="py-2 px-3">Output log file में save करो</td><td className="py-2 px-3 font-mono text-xs">-l /tmp/proxy.log</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dynamic_chain</td><td className="py-2 px-3">Dead proxies skip करो, alive proxies use करो</td><td className="py-2 px-3 font-mono text-xs">config में set करो</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">strict_chain</td><td className="py-2 px-3">सभी proxies alive होने चाहिए, sequential order</td><td className="py-2 px-3 font-mono text-xs">config में set करो</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">random_chain</td><td className="py-2 px-3">Random proxy order — हर बार different path</td><td className="py-2 px-3 font-mono text-xs">config में set करो</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">round_robin_chain</td><td className="py-2 px-3">Round-robin proxy selection — load balance</td><td className="py-2 px-3 font-mono text-xs">config में set करो</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">proxy_dns</td><td className="py-2 px-3">DNS requests भी proxy से route करो — leak prevent</td><td className="py-2 px-3 font-mono text-xs">config में set करो</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">chain_len</td><td className="py-2 px-3">Random chain में कितने proxies use करें</td><td className="py-2 px-3 font-mono text-xs">chain_len = 3</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">tcp_read_time_out</td><td className="py-2 px-3">TCP read timeout (milliseconds)</td><td className="py-2 px-3 font-mono text-xs">tcp_read_time_out 15000</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">tcp_connect_time_out</td><td className="py-2 px-3">TCP connect timeout (milliseconds)</td><td className="py-2 px-3 font-mono text-xs">tcp_connect_time_out 8000</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">quiet_mode</td><td className="py-2 px-3">Config में quiet mode enable करो</td><td className="py-2 px-3 font-mono text-xs">config में uncomment करो</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">proxy_read_only</td><td className="py-2 px-3">सिर्फ proxy responses read करो</td><td className="py-2 px-3 font-mono text-xs">config में set करो</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">localnet</td><td className="py-2 px-3">Local network ranges proxy से bypass करो</td><td className="py-2 px-3 font-mono text-xs">localnet 127.0.0.0/255.0.0.0</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">PROXYCHAINS_CONF_FILE</td><td className="py-2 px-3">Environment variable से config path set करो</td><td className="py-2 px-3 font-mono text-xs">export PROXYCHAINS_CONF_FILE=~/conf</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Configuration File</h2>
      <p>
        ProxyChains की configuration file /etc/proxychains4.conf में होती है। इसमें chain type, DNS settings, timeouts, और proxy list define होती है।
      </p>
      <CodeBlock
        title="Complete Configuration File"
        code={`# /etc/proxychains4.conf — Full Configuration

# ==================== CHAIN TYPE ====================
# सिर्फ एक uncomment रखो — बाकी comment कर दो:

# Dynamic — dead proxies skip, alive use करो:
dynamic_chain

# Strict — सभी proxies sequential order में:
# strict_chain

# Random — हर connection पर random order:
# random_chain

# Round Robin — proxy rotate करो:
# round_robin_chain

# ==================== GENERAL SETTINGS ====================
# Quiet mode — banner hide:
quiet_mode

# DNS leak prevention — DNS भी proxy से route:
proxy_dns

# TCP timeouts (milliseconds):
tcp_read_time_out 15000
tcp_connect_time_out 8000

# Random chain length (कितने proxies use करें):
# chain_len = 3

# ==================== LOCAL NETWORK BYPASS ====================
# Local addresses proxy से bypass:
localnet 127.0.0.0/255.0.0.0
localnet 10.0.0.0/255.0.0.0
localnet 172.16.0.0/255.240.0.0
localnet 192.168.0.0/255.255.0.0

# ==================== PROXY LIST ====================
[ProxyList]
# Format: type  host  port  [username]  [password]

# Tor default:
socks5  127.0.0.1  9050

# Custom SOCKS5 proxy:
# socks5  proxy.example.com  1080  myuser  mypass

# HTTP proxy:
# http    10.0.0.1  8080

# Multiple proxies for chaining:
# socks5  192.168.1.100  1080
# http    10.0.0.1       8080`}
      />

      <h2>Proxy Types</h2>
      <p>
        ProxyChains चार तरह के proxies support करता है। हर type का अपना use case और limitations हैं:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Proxy Type</th>
              <th className="text-left py-2 px-3 text-neon-green">Default Port</th>
              <th className="text-left py-2 px-3 text-neon-green">Features</th>
              <th className="text-left py-2 px-3 text-neon-green">Use Case</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">socks4</td><td className="py-2 px-3">1080</td><td className="py-2 px-3">TCP only, no auth, no UDP</td><td className="py-2 px-3">Basic proxying, fastest option</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">socks5</td><td className="py-2 px-3">1080</td><td className="py-2 px-3">TCP+UDP, auth support, DNS proxy</td><td className="py-2 px-3">Tor, SSH tunnels, secure proxy</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">http</td><td className="py-2 px-3">8080</td><td className="py-2 px-3">HTTP CONNECT method</td><td className="py-2 px-3">Corporate proxies, web filtering bypass</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">https</td><td className="py-2 px-3">443</td><td className="py-2 px-3">Encrypted HTTP proxy</td><td className="py-2 px-3">Secure corporate environments</td></tr>
          </tbody>
        </table>
      </div>
      <CodeBlock
        title="Proxy Format Examples"
        code={`# Config file में [ProxyList] section:
[ProxyList]
# Format: type  host  port  [username]  [password]

# SOCKS4 proxy (basic):
socks4  127.0.0.1  1080

# SOCKS5 proxy (Tor):
socks5  127.0.0.1  9050

# SOCKS5 with authentication:
socks5  proxy.example.com  1080  myuser  mypassword

# HTTP proxy:
http    10.0.0.1  8080

# HTTP proxy with auth:
http    proxy.corp.com  8080  admin  secret123

# HTTPS proxy:
https   secure-proxy.example.com  443

# Remote server proxy:
socks5  203.0.113.50  1080`}
      />

      <h2>Dynamic Chain</h2>
      <p>
        Dynamic chain सबसे flexible mode है — dead proxies automatically skip हो जाते हैं। अगर proxy list में कुछ proxies down हैं तो भी connection work करेगा। Production use के लिए recommended mode है।
      </p>
      <CodeBlock
        title="Dynamic Chain Configuration"
        code={`# /etc/proxychains4.conf में set करो:
dynamic_chain
# strict_chain और random_chain को comment कर दो

# Example proxy list:
[ProxyList]
socks5  127.0.0.1  9050      # Tor (usually alive)
socks5  192.168.1.100  1080   # Custom proxy (maybe down)
http    10.0.0.1   8080       # Another proxy (maybe down)
socks5  172.16.0.1  1080      # Backup proxy

# Dynamic chain behavior:
# - सभी proxies sequential order में try करता है
# - अगर कोई proxy down है → skip, next try करो
# - कम से कम एक proxy alive होना चाहिए
# - सभी dead → connection error

# Test command:
proxychains4 curl https://api.ipify.org
# Alive proxy का IP दिखना चाहिए`}
      />

      <h2>Strict Chain</h2>
      <p>
        Strict chain में सभी proxies sequential order में use होते हैं। एक भी proxy down हो तो पूरा connection fail हो जाता है। Maximum anonymity के लिए use करो — guaranteed multi-hop routing।
      </p>
      <CodeBlock
        title="Strict Chain Configuration"
        code={`# /etc/proxychains4.conf में:
strict_chain
# dynamic_chain और random_chain comment करो

[ProxyList]
socks5  127.0.0.1  9050      # Step 1: Tor
socks5  192.168.1.100  1080   # Step 2: Second proxy
http    10.0.0.1   8080       # Step 3: Third proxy

# Strict chain behavior:
# - Traffic guaranteed through ALL proxies
# - Order: You → Tor → SOCKS Proxy → HTTP Proxy → Target
# - एक भी down → connection fail
# - Maximum anonymity, maximum latency

# Use cases:
# - High-security testing
# - Multi-jurisdiction routing
# - Avoiding single point of failure in anonymity`}
      />

      <h2>Random Chain</h2>
      <p>
        Random chain हर connection के लिए random proxy order use करता है। Forensic analysis में pattern detection difficult हो जाता है। Mass scanning में detection avoid करने के लिए best है।
      </p>
      <CodeBlock
        title="Random Chain Configuration"
        code={`# /etc/proxychains4.conf में:
random_chain
chain_len = 3  # 3 random proxies use करो हर connection पर

[ProxyList]
socks5  127.0.0.1  9050
socks5  192.168.1.100  1080
socks5  10.0.0.1   1080
http    172.16.0.1  8080
socks4  192.168.2.1  1080
socks5  203.0.113.1  1080

# Random chain behavior:
# - हर connection के लिए random proxy order select होता है
# - chain_len = 3 मतलब 3 random proxies use होंगे
# - Pattern analysis nearly impossible
# - Detection avoidance best है

# Mass scanning example:
# Nmap 100 ports scan → हर port different proxy route
# Firewall logs में pattern नहीं दिखेगा`}
      />

      <h2>Tor Integration</h2>
      <p>
        ProxyChains का सबसे popular use case Tor network integration है। Tor से traffic 3 encrypted hops से होकर जाता है — complete anonymity मिलती है।
      </p>
      <CodeBlock
        title="ProxyChains + Tor Setup"
        code={`# Step 1: Tor install और start:
sudo apt update
sudo apt install tor
sudo systemctl start tor
sudo systemctl enable tor

# Step 2: Tor status verify:
sudo systemctl status tor
# Active (running) दिखना चाहिए

# Step 3: Config file edit:
sudo nano /etc/proxychains4.conf

# यह settings set करो:
# dynamic_chain
# proxy_dns
# quiet_mode
# [ProxyList]
# socks5 127.0.0.1 9050

# Step 4: Verify Tor connection:
proxychains4 curl https://check.torproject.org/api/ip
# {"IsTor":true,"IP":"xxx.xxx.xxx.xxx"} दिखना चाहिए

# Step 5: Tools through Tor:
proxychains4 nmap -sT -Pn target.com
proxychains4 nikto -h http://target.com
proxychains4 gobuster dir -u http://target.com -w wordlist.txt

# Step 6: Tor circuit change (new IP):
sudo systemctl restart tor
sleep 5
proxychains4 curl https://api.ipify.org
# नया IP दिखना चाहिए`}
      />

      <h2>DNS Leak Prevention</h2>
      <p>
        DNS leak सबसे common और dangerous mistake है। अगर proxy_dns enable नहीं है तो DNS queries ISP के DNS server पर जाएंगी — real IP leak हो जाएगा।
      </p>
      <CodeBlock
        title="DNS Leak Prevention"
        code={`# Config file में proxy_dns enable करो:
sudo nano /etc/proxychains4.conf

# यह line uncomment करो:
proxy_dns

# यह क्या करता है:
# - DNS queries भी proxy/Tor से route होती हैं
# - Real DNS server (ISP) पर query नहीं जाती
# - Website तुम्हारा real IP DNS से trace नहीं कर सकती

# DNS leak verify करो:
proxychains4 curl https://ipleak.net/json/
# "dns_ip" field में Tor exit node IP दिखना चाहिए
# अगर ISP DNS server IP दिख रहा है → LEAK!

# Alternative DNS leak test:
proxychains4 curl https://dnsleaktest.com/test

# Additional DNS leak prevention:
# /etc/resolv.conf में public DNS set करो:
sudo nano /etc/resolv.conf
# nameserver 1.1.1.1
# nameserver 8.8.8.8`}
      />

      <h2>Proxy Rotation</h2>
      <p>
        Multiple proxies rotate करके detection avoid कर सकते हो — हर scan different proxy से करो:
      </p>
      <CodeBlock
        title="Proxy Rotation Script"
        code={`#!/bin/bash
# Proxy rotation — हर scan different proxy

TARGET=$1
PROXIES=(
  "socks5 127.0.0.1 9050"
  "socks5 192.168.1.100 1080"
  "http 10.0.0.1 8080"
  "socks5 172.16.0.1 1080"
)

for i in {1..5}; do
  # Random proxy select:
  PROXY=\${PROXIES[$RANDOM % \${#PROXIES[@]}]}

  # Temporary config create:
  cat > /tmp/proxychains_$i.conf << EOF
dynamic_chain
proxy_dns
quiet_mode
[ProxyList]
$PROXY
EOF

  echo "[+] Scan $i with: $PROXY"
  proxychains4 -f /tmp/proxychains_$i.conf nmap -sT -Pn -F $TARGET

  # Tor restart for new circuit:
  sudo systemctl restart tor
  sleep 3
done

# Cleanup:
rm -f /tmp/proxychains_*.conf`}
      />

      <h2>SOCKS Proxy via SSH</h2>
      <p>
        SSH tunnel से SOCKS5 proxy बना सकते हो — encrypted, secure, और reliable:
      </p>
      <CodeBlock
        title="SSH SOCKS Proxy"
        code={`# SSH SOCKS5 proxy create करो:
ssh -D 1080 -f -C -q -N user@remote-server

# Flag explanation:
# -D 1080: Dynamic port forwarding (SOCKS proxy)
# -f: Background में run
# -C: Compression enable
# -q: Quiet mode
# -N: No remote command execute

# Config file में add करो:
[ProxyList]
socks5 127.0.0.1 1080

# Test:
proxychains4 curl https://api.ipify.org
# Remote server का IP दिखना चाहिए

# Multiple SSH proxies:
ssh -D 1080 user@server1 &
ssh -D 1081 user@server2 &
ssh -D 1082 user@server3 &

# Config में chain:
[ProxyList]
socks5 127.0.0.1 1080
socks5 127.0.0.1 1081
socks5 127.0.0.1 1082

# Kill SSH tunnel:
kill $(pgrep -f "ssh -D")`}
      />

      <h2>ProxyChains vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">ProxyChains</th>
              <th className="text-left py-2 px-3 text-neon-green">tsocks</th>
              <th className="text-left py-2 px-3 text-neon-green">redsocks</th>
              <th className="text-left py-2 px-3 text-neon-green">gost</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Proxy Types</td><td className="py-2 px-3">SOCKS4/5, HTTP</td><td className="py-2 px-3">SOCKS4/5 only</td><td className="py-2 px-3">SOCKS4/5, HTTP</td><td className="py-2 px-3">SOCKS4/5, HTTP, SS</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Chain Support</td><td className="py-2 px-3">हाँ (multi-hop)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">DNS Leak Prevention</td><td className="py-2 px-3">हाँ (proxy_dns)</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Random Chain</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">System-wide</td><td className="py-2 px-3">नहीं (per-app)</td><td className="py-2 px-3">नहीं (per-app)</td><td className="py-2 px-3">हाँ (iptables)</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">UDP Support</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3">Easy (prefix)</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Medium (iptables)</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Language</td><td className="py-2 px-3">C</td><td className="py-2 px-3">C</td><td className="py-2 px-3">C</td><td className="py-2 px-3">Go</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Platform</td><td className="py-2 px-3">Linux/macOS</td><td className="py-2 px-3">Linux</td><td className="py-2 px-3">Linux</td><td className="py-2 px-3">Cross-platform</td></tr>
            <tr><td className="py-2 px-3 text-white">Kali Pre-installed</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated Anonymous Scanning"
        code={`#!/bin/bash
# Full anonymous recon script

TARGET=$1
WORDLIST="/usr/share/wordlists/dirb/common.txt"

echo "[*] Target: $TARGET"
echo "[*] Verifying anonymity..."

# Step 1: Verify proxy working
REAL_IP=$(curl -s https://api.ipify.org)
PROXY_IP=$(proxychains4 -q curl -s https://api.ipify.org)

echo "[+] Real IP: $REAL_IP"
echo "[+] Proxy IP: $PROXY_IP"

if [ "$REAL_IP" = "$PROXY_IP" ]; then
  echo "[-] ERROR: Proxy not working! Aborting."
  exit 1
fi

# Step 2: Anonymous port scan
echo "[*] Starting anonymous port scan..."
proxychains4 -q nmap -sT -Pn -F -oN nmap_$TARGET.txt $TARGET

# Step 3: Anonymous web scan
echo "[*] Starting Nikto scan..."
proxychains4 -q nikto -h http://$TARGET -o nikto_$TARGET.txt

# Step 4: Anonymous directory brute force
echo "[*] Starting directory scan..."
proxychains4 -q gobuster dir -u http://$TARGET -w $WORDLIST -o gobuster_$TARGET.txt

echo "[+] All scans complete! Results saved."`}
      />

      <CodeBlock
        title="Multi-Target Anonymous Scanner"
        code={`#!/bin/bash
# Multiple targets through proxy

TARGETS_FILE=$1

while IFS= read -r target; do
  echo "[+] Scanning: $target"

  # Tor circuit change for each target:
  sudo systemctl restart tor
  sleep 3

  # Verify proxy:
  IP=$(proxychains4 -q curl -s https://api.ipify.org)
  echo "  Proxy IP: $IP"

  # Scan:
  proxychains4 -q nmap -sT -Pn -F --open -oN "scan_$target.txt" $target

  echo "  Done: $target"
  sleep 2
done < "$TARGETS_FILE"`}
      />

      <CodeBlock
        title="Proxy Health Check Script"
        code={`#!/bin/bash
# Check which proxies are alive

PROXIES=(
  "socks5 127.0.0.1 9050"
  "socks5 192.168.1.100 1080"
  "http 10.0.0.1 8080"
  "socks5 172.16.0.1 1080"
)

for proxy in "\${PROXIES[@]}"; do
  # Config create:
  cat > /tmp/test_proxy.conf << EOF
dynamic_chain
proxy_dns
quiet_mode
[ProxyList]
$proxy
EOF

  # Test:
  RESULT=$(proxychains4 -f /tmp/test_proxy.conf curl -s --connect-timeout 10 https://api.ipify.org 2>/dev/null)

  if [ -n "$RESULT" ]; then
    echo "[+] ALIVE: $proxy → IP: $RESULT"
  else
    echo "[-] DEAD:  $proxy"
  fi
done

rm -f /tmp/test_proxy.conf`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Connection timeout हो रहा है', a: 'Proxy server down हो सकता है। dynamic_chain mode use करो — dead proxies automatically skip होंगे। Timeout values बढ़ाओ config में: tcp_read_time_out 30000 और tcp_connect_time_out 15000। Tor use कर रहे हो तो Tor service check करो: sudo systemctl status tor' },
          { q: 'DNS leak हो रहा है', a: 'proxy_dns option enable करो config में। यह DNS requests भी proxy/Tor से route करता है। ipleak.net पर verify करो — DNS server IP Tor exit node का दिखना चाहिए, ISP का नहीं।' },
          { q: 'Static binaries काम नहीं कर रहे', a: 'Static binaries (Go programs, Rust binaries) LD_PRELOAD support नहीं करते क्योंकि वे libc dynamically link नहीं करते। redsocks या gost use करो — iptables-based है, LD_PRELOAD independent।' },
          { q: 'Nmap SYN scan काम नहीं कर रहा', a: 'ProxyChains सिर्फ TCP connect() calls intercept करता है। SYN scan raw sockets use करता है जो LD_PRELOAD से intercept नहीं होते। -sT -Pn flags use करो। -Pn ज़रूरी है क्योंकि ICMP भी proxy से नहीं जाता।' },
          { q: 'Speed बहुत slow है', a: 'Proxy chain length और distance पर depend करता है। Tor inherently slow है (3 hops)। chain_len कम करो random_chain में। Dedicated SOCKS proxy (paid) ज़्यादा fast होते हैं। नज़दीकी proxy servers choose करो।' },
          { q: 'Config changes apply नहीं हो रहे', a: 'ProxyChains हर run पर fresh config read करता है — लेकिन file save होना चाहिए। -f flag से custom config specify करो। environment variable PROXYCHAINS_CONF_FILE भी set कर सकते हो।' },
          { q: 'Some tools error दे रहे हैं', a: 'UDP-based tools (DNS queries without proxy_dns, SNMP, VoIP) काम नहीं करेंगे — ProxyChains TCP only है। ICMP (ping) भी काम नहीं करेगा। IPv6 support limited है।' },
          { q: 'Permission denied error आ रहा है', a: 'Tor service start करने के लिए sudo चाहिए। Config file edit करने के लिए भी sudo। ProxyChains run करने के लिए normal user sufficient है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Proxy/Tor usage detect कैसे करें और defend कैसे करें:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Proxy IP Blocklists:</strong> Known Tor exit nodes और public proxy IPs block करो — publicly available lists हैं (dan.me.uk/torlist, check.torproject.org/torbulkexitlist)</li>
        <li><strong className="text-white">Traffic Latency Analysis:</strong> Proxy chains extra latency add करते हैं — unusual delay patterns detect करो</li>
        <li><strong className="text-white">DNS Leak Detection:</strong> DNS requests source IP check करो — अगर request source proxy IP है लेकिन DNS query ISP IP से आ रही है → leak</li>
        <li><strong className="text-white">WebRTC Leak:</strong> Browser WebRTC से real IP leak हो सकता है even with proxy — server-side WebRTC check implement करो</li>
        <li><strong className="text-white">JA3/JA3S TLS Fingerprinting:</strong> TLS handshake fingerprint से proxy/Tor traffic identify करो — Tor Browser का distinctive fingerprint होता है</li>
        <li><strong className="text-white">Connection Pattern Analysis:</strong> Multiple requests from same proxy IP but different timing patterns → automated tool suspected</li>
        <li><strong className="text-white">GeoIP Mismatch:</strong> User profile (language, timezone) और IP location mismatch detect करो</li>
        <li><strong className="text-white">Rate Limiting:</strong> Proxy/Tor IPs पर aggressive rate limiting लगाओ — brute force prevent</li>
        <li><strong className="text-white">CAPTCHA Challenges:</strong> Suspicious proxy IPs पर CAPTCHA require करो — bots block होंगे</li>
        <li><strong className="text-white">Behavioral Analysis:</strong> Mouse movements, typing patterns, page interaction से bot vs human detect करो</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        ProxyChains practice के लिए safe lab setup:
      </p>
      <CodeBlock
        title="Practice Lab Setup"
        code={`# Step 1: Tor install और configure:
sudo apt update
sudo apt install tor
sudo systemctl start tor
sudo systemctl enable tor

# Step 2: ProxyChains config setup:
sudo cp /etc/proxychains4.conf /etc/proxychains4.conf.backup
sudo nano /etc/proxychains4.conf

# Recommended settings:
# dynamic_chain
# proxy_dns
# quiet_mode
# tcp_read_time_out 15000
# tcp_connect_time_out 8000
# localnet 127.0.0.0/255.0.0.0
# localnet 192.168.0.0/255.255.0.0
# [ProxyList]
# socks5 127.0.0.1 9050

# Step 3: Test anonymity:
proxychains4 curl https://api.ipify.org
# Tor exit node IP दिखना चाहिए

# Step 4: DNS leak test:
proxychains4 curl https://ipleak.net/json/
# DNS IP भी Tor exit node का होना चाहिए

# Step 5: Test with various tools:
proxychains4 nmap -sT -Pn scanme.nmap.org
proxychains4 curl -I http://testphp.vulnweb.com

# Step 6: Advanced — multiple configs:
mkdir ~/proxy-configs
# अलग-अलग configs बनाओ different scenarios के लिए`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced ProxyChains Usage"
        code={`# 1. Tor + VPN double layer:
# पहले VPN connect करो, फिर Tor through proxychains
# Traffic: You → VPN → Tor → Target
# ISP देखेगा VPN connection, Tor entry node देखेगा VPN exit

# 2. Custom config per tool:
proxychains4 -f ~/configs/fast-proxy.conf curl http://target.com
proxychains4 -f ~/configs/anonymous-proxy.conf nmap -sT -Pn target.com

# 3. Authenticated proxies:
# Config में:
# [ProxyList]
# socks5 proxy.example.com 1080 username password

# 4. Environment variable config:
export PROXYCHAINS_CONF_FILE=~/my-proxychains.conf
proxychains4 curl http://target.com

# 5. Background anonymous scanning:
nohup proxychains4 nmap -sT -Pn -oN scan.txt target.com &

# 6. Proxy speed test:
for proxy in "socks5 1.2.3.4 1080" "socks5 5.6.7.8 1080"; do
  echo -n "Testing $proxy: "
  cat > /tmp/test.conf << EOF
dynamic_chain
proxy_dns
[ProxyList]
$proxy
EOF
  time proxychains4 -f /tmp/test.conf curl -s https://api.ipify.org
done

# 7. Chaining SSH tunnels:
ssh -D 1080 user@server1 &
sleep 2
# Config: socks5 127.0.0.1 1080
proxychains4 curl https://api.ipify.org

# 8. Proxy with specific DNS:
# Config में localnet से local DNS bypass:
localnet 10.0.0.0/255.0.0.0
# फिर internal tools proxy bypass करेंगे`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या ProxyChains free है?', a: 'हाँ, ProxyChains open source (GPLv2) और completely free है। Kali Linux में pre-installed आता है। Commercial use भी free। GitHub पर source code available है।' },
          { q: 'UDP traffic support करता है?', a: 'नहीं, ProxyChains सिर्फ TCP traffic support करता है। UDP के लिए redsocks या gost use करो — ये iptables-based हैं और UDP handle करते हैं। SOCKS5 protocol UDP associate support करता है लेकिन ProxyChains implementation में नहीं।' },
          { q: 'Windows पर काम करता है?', a: 'नहीं, ProxyChains LD_PRELOAD technique use करता है जो Linux/macOS specific है। Windows के लिए Proxifier, SocksCap64, या ProxyCap use करो — ये similar functionality provide करते हैं।' },
          { q: 'VPN vs ProxyChains क्या use करें?', a: 'VPN system-wide encryption देता है — सारा traffic encrypted tunnel से जाता है। ProxyChains per-app proxying देता है — specific tools के लिए। दोनों साथ में use कर सकते हो — extra anonymity layer। VPN speed generally better होती है।' },
          { q: 'Nmap SYN scan क्यों नहीं चलता?', a: 'ProxyChains connect() system call intercept करता है। SYN scan (-sS) raw sockets use करता है जो connect() bypass करते हैं। TCP connect scan (-sT) connect() use करता है इसलिए proxy से काम करता है। -Pn भी लगाओ क्योंकि ICMP ping भी proxy से नहीं जाता।' },
          { q: 'क्या ISP पता लगा सकता है?', a: 'ISP देख सकता है कि तुम Tor/VPN से connect हो, लेकिन actual traffic content और final destination नहीं देख सकता। Tor bridges use करो DPI (Deep Packet Inspection) bypass के लिए। obfs4 bridges सबसे effective हैं।' },
          { q: 'कितने proxies chain कर सकते हैं?', a: 'Technically limit नहीं है, लेकिन हर proxy extra latency add करता है। 3-5 proxies practical limit है। ज़्यादा proxies = ज़्यादा latency = ज़्यादा chance of failure। Tor already 3 hops use करता है, ऊपर से 1-2 और add करो maximum।' },
          { q: 'क्या ProxyChains detect हो सकता है?', a: 'हाँ, server side detect कर सकता है — proxy/Tor exit node IP, JA3 fingerprint, latency analysis, behavioral patterns। 100% anonymity guarantee कोई नहीं दे सकता। Layered approach best है: VPN + Tor + ProxyChains + safe browsing habits।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        ProxyChains real-world penetration testing और red team operations में anonymity maintain करने के लिए daily use होता है:
      </p>
      <p>
        <strong className="text-white">Case Study 1 — Red Team External Assessment:</strong> एक red team engagement में team को company के external infrastructure को assess करना था। Company SOC active monitoring कर रही थी — IP-based blocking aggressive था। ProxyChains + Tor use करके reconnaissance किया — हर 10 minutes में Tor circuit change किया। Nmap scans, directory bruteforce, और subdomain enumeration सब proxy से किया। SOC team ने 50+ different Tor exit nodes block किए लेकin team को access मिलता रहा। Final report में 12 critical vulnerabilities मिले।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — OSINT Investigation:</strong> Law enforcement agency ने dark web marketplace investigate करने के लिए ProxyChains use किया। Tor + SSH tunnel double layer setup किया — ISP logs में सिर्फ VPN connection दिख रही थी। ProxyChains से curl, wget, और custom scripts run किए। Evidence collection forensically sound था — proxy logs maintain किए गए। Investigation 3 months चली — final evidence court में present हुआ।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — Bug Bounty Automation:</strong> Bug bounty hunter ने multiple targets scan करने थे बिना IP banned हुए। ProxyChains + random_chain mode use किया — हर request different proxy route से गई। Automated script बनाया जो 50+ targets scan करता था proxy rotation के साथ। 30 days में $25,000+ bounties earned — किसी ने IP block नहीं किया। Proxy health check script ensure करता था कि dead proxies skip हों।
      </p>

      <h2>Performance Tuning</h2>
      <p>
        ProxyChains efficiently use करने के लिए optimization tips:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Timeout Values:</strong> tcp_read_time_out और tcp_connect_time_out adjust करो network conditions के according। Fast network: 5000ms, Slow/Tor: 15000-30000ms।</li>
        <li><strong className="text-white">Chain Length:</strong> random_chain में chain_len कम रखो (2-3) — latency कम होगी। ज़्यादा proxies = ज़्यादा latency।</li>
        <li><strong className="text-white">Local Network Bypass:</strong> localnet directive properly configure करो — internal targets proxy से bypass होंगे, faster access।</li>
        <li><strong className="text-white">DNS Caching:</strong> proxy_dns enable होने पर DNS queries भी proxy से जाती हैं — जहाँ possible local DNS cache use करो।</li>
        <li><strong className="text-white">Quiet Mode:</strong> quiet_mode enable करो — banner output skip होगा, processing faster।</li>
        <li><strong className="text-white">Proxy Selection:</strong> Geographically close proxies choose करो — latency कम होगी। Paid SOCKS proxies generally faster होते हैं Tor से।</li>
        <li><strong className="text-white">Connection Pooling:</strong> Long-running tasks के लिए persistent connections use करो — new connection overhead बचेगा।</li>
        <li><strong className="text-white">Parallel Execution:</strong> Multiple targets के लिए parallel proxychains processes run करो — लेकिन proxy server load monitor करो।</li>
      </ul>

      <h2>Reporting and Output Analysis</h2>
      <p>
        ProxyChains operations के results को log और analyze करना important है:
      </p>
      <CodeBlock
        title="Logging and Analysis"
        code={`# ProxyChains output log करो:
proxychains4 -l /tmp/proxychains.log nmap -sT -Pn target.com

# Connection log analysis:
cat /tmp/proxychains.log | grep -i "connect"
# Successful connections और failed attempts दिखेंगे

# Proxy IP verification:
proxychains4 -q curl -s https://api.ipify.org > proxy_ip.txt
echo "Proxy IP used: $(cat proxy_ip.txt)"

# Scan results with proxy metadata:
echo "=== Scan Report ===" > report.txt
echo "Date: $(date)" >> report.txt
echo "Proxy IP: $(cat proxy_ip.txt)" >> report.txt
echo "Target: target.com" >> report.txt
proxychains4 -q nmap -sT -Pn -F target.com >> report.txt

# DNS leak verification:
proxychains4 -q curl -s https://ipleak.net/json/ | tee dns_check.json
# dns_ip field check करो — Tor exit node का होना चाहिए

# Tor circuit info:
curl -s https://check.torproject.org/api/ip
# Current exit node IP और country दिखेगा

# Proxy chain visualization:
# Config में debug mode enable करो (temporary):
# फिर connection log में proxy path दिखेगा

# Session summary:
echo "=== Session Summary ===" > session_summary.txt
echo "Total scans: $(grep -c 'nmap' /tmp/proxychains.log)" >> session_summary.txt
echo "Proxies used: $(grep -o 'socks[45]\|http' /tmp/proxychains.log | sort | uniq -c)" >> session_summary.txt
echo "DNS queries proxied: $(grep -c 'proxy_dns' /tmp/proxychains.log)" >> session_summary.txt`}
      />

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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">tsocks</td><td className="py-2 px-3">SOCKS proxy wrapper</td><td className="py-2 px-3">Lightweight, simple, SOCKS only, LD_PRELOAD based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">redsocks</td><td className="py-2 px-3">Transparent proxy redirector</td><td className="py-2 px-3">iptables-based, system-wide, UDP support, no LD_PRELOAD</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">gost</td><td className="py-2 px-3">Go proxy tunnel</td><td className="py-2 px-3">Multi-protocol, chain support, web UI, cross-platform</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">sshuttle</td><td className="py-2 px-3">SSH-based VPN</td><td className="py-2 px-3">VPN over SSH, no root required, transparent</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nipe</td><td className="py-2 px-3">Tor anonymizer</td><td className="py-2 px-3">All traffic through Tor, iptables-based, Perl</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Shadowsocks</td><td className="py-2 px-3">Encrypted proxy</td><td className="py-2 px-3">SOCKS5, encryption, censorship bypass</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Torsocks</td><td className="py-2 px-3">Tor SOCKS wrapper</td><td className="py-2 px-3">Tor-specific, LD_PRELOAD, DNS leak prevention</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Dante</td><td className="py-2 px-3">SOCKS server</td><td className="py-2 px-3">Enterprise SOCKS server, access control, logging</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>ProxyChains + Tor सबसे popular anonymity combo है। लेकिन Tor exit nodes commonly blacklisted होते हैं — dedicated SOCKS proxies ज़्यादा reliable हैं।</li>
          <li>Nmap scan के लिए हमेशा -sT -Pn flags use करो — SYN scan proxy से नहीं चलता।</li>
          <li>DNS leak के लिए proxy_dns हमेशा enable रखो — सबसे common और dangerous mistake है।</li>
          <li>Random chain mode use करो mass scanning में — detection avoid होता है।</li>
          <li>SSH SOCKS proxy (-D flag) सबसे secure method है — encrypted tunnel, reliable, fast।</li>
          <li>Dynamic chain production use करो — dead proxies automatically skip हो जाते हैं।</li>
          <li>Proxy health check script बनाओ — regularly verify करो कि proxies alive हैं।</li>
          <li>Multiple config files रखो — different scenarios के लिए (fast, anonymous, multi-hop)।</li>
          <li>SOCKS5 proxy authentication support करता है — config में username password add करो: socks5 host port user pass। Corporate proxies के लिए useful।</li>
          <li>Tor bridges use करो DPI bypass के लिए — obfs4 bridges ISP को Tor traffic hide करते हैं। Tor Browser से bridges get करो।</li>
          <li>ProxyChains environment variable set करो har session के लिए: export PROXYCHAINS_CONF_FILE=~/custom.conf। Multiple configs manage आसान हो जाएगी।</li>
          <li>IPv6 traffic proxy bypass हो सकता है — /etc/gai.conf में IPv6 prefer करो या firewall से IPv6 block करो।</li>
          <li>WebRTC browser leak prevent करो — about:config में media.peerconnection.enabled false करो Firefox में।</li>
          <li>ProxyChains + Nmap combo: हमेशा -sT (TCP connect) use करो, -sS (SYN) raw sockets use करता है जो LD_PRELOAD से intercept नहीं होते।</li>
          <li>Corporate network में HTTP proxy use करो — config में: http proxy.corp.com 8080 user pass। SOCKS proxy block हो सकता है।</li>
          <li>Tor circuit refresh करो new IP के लिए: sudo systemctl restart tor, sleep 5, फिर verify: proxychains4 curl https://api.ipify.org।</li>
          <li>ProxyChains logging enable करो troubleshooting के लिए: -l /tmp/proxychains.log flag use करो। Connection failures और proxy errors log में दिखेंगे।</li>
          <li>Go/Rust binaries (statically linked) LD_PRELOAD support नहीं करते — उनके लिए redsocks या gost use करो जो iptables-based हैं।</li>
          <li>ProxyChains केवल TCP intercept करता है — UDP (DNS queries without proxy_dns, SNMP, VoIP) bypass हो जाते हैं। UDP चाहिए तो gost या redsocks use करो।</li>
          <li>MacOS पर SIP (System Integrity Protection) LD_PRELOAD block कर सकता है — SIP disable करना पड़ सकता है (risky)। Homebrew version generally काम करता है।</li>
          <li>Multiple proxy configs maintain करो — ~/proxies/fast.conf (speed), ~/proxies/anonymous.conf (Tor), ~/proxies/multihop.conf (maximum anonymity)। -f flag से specify करो।</li>
          <li>ProxyChains + curl combination API testing के लिए excellent है — rate limiting bypass करो, geo-restricted APIs access करो, anonymous API enumeration करो।</li>
          <li>Tor hidden services access कर सकते हो ProxyChains से — .onion URLs directly काम करते हैं: proxychains4 curl http://abc123.onion। Tor running होना चाहिए।</li>
          <li>Proxy speed test script बनाओ: time proxychains4 -q curl -s https://api.ipify.org — latency measure होगी। Different proxies compare करो fastest choose करने के लिए।</li>
          <li>ProxyChains + Metasploit combo: proxychains4 msfconsole — सभी Metasploit modules proxy से traffic भेजेंगे। Exploitation anonymous हो जाएगी।</li>
          <li>Firewall rules को proxy-aware बनाओ — localnet directive properly configure करो ताकि internal tools (AD queries, internal scans) proxy bypass करें।</li>
          <li>ProxyChains sudo के साथ use करो: sudo proxychains4 tool — root-level tools (nmap SYN scan alternatives) भी proxy से चलेंगे। LD_PRELOAD root context में भी काम करता है।</li>
          <li>Tor hidden service बनाओ ProxyChains से access करने के लिए — SSH server hidden service पर expose करो, फिर proxychains4 ssh user@.onion से connect करो।</li>
          <li>Proxy chains monitor करो — connection established होने पर /proc/net/tcp से active connections check करो। Suspicious outbound connections detect होंगी।</li>
          <li>ProxyChains config version control में रखो — git repo में different configs track करो। Team collaboration में useful — सबको same proxy setup मिलेगा।</li>
          <li>ISP throttling bypass कर सकते हो ProxyChains से — encrypted proxy traffic ISP को content नहीं दिखता। Torrenting, streaming, और downloads पर throttling avoid होगी।</li>
          <li>ProxyChains + wget combination file download के लिए excellent है — proxychains4 wget http://target.com/file.zip — anonymous file retrieval। Resume support (-c flag) भी काम करता है।</li>
          <li>WiFi captive portals bypass कर सकते हो — proxychains4 curl से portal authentication skip हो सकती है (network dependent)। Hotel, airport WiFi के लिए useful trick।</li>
          <li>Geo-restricted content access करो — proxy server country change करके streaming services, news sites, और region-locked APIs access कर सकते हो।</li>
        </ul>
      </div>

      <h2>Anonymity Best Practices</h2>
      <p>
        ProxyChains से maximum anonymity achieve करने के लिए comprehensive best practices:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Layered Anonymity:</strong> VPN + Tor + ProxyChains triple layer use करो — ISP VPN देखता है, VPN provider Tor देखता है, Tor exit node target देखता है। कोई single point identity reveal नहीं कर सकता।</li>
        <li><strong className="text-white">Behavioral Discipline:</strong> Same session में personal और anonymous activities mix मत करो। Browser fingerprinting से बचो — Tor Browser use करो, JavaScript disable करो, cookies clear करो।</li>
        <li><strong className="text-white">Time Zone Fingerprint:</strong> System timezone Tor exit node country से match करो — mismatch suspicious लगता है। TZ environment variable set करो: export TZ=Europe/Berlin।</li>
        <li><strong className="text-white">Language Fingerprint:</strong> Accept-Language header Tor exit node country की language set करो — curl -H "Accept-Language: de-DE"। Browser language settings भी change करो।</li>
        <li><strong className="text-white">DNS Leak Prevention:</strong> proxy_dns always enable रखो। System DNS resolver verify करो — /etc/resolv.conf में 127.0.0.1 (Tor DNS port) होना चाहिए।</li>
        <li><strong className="text-white">Traffic Pattern Analysis:</strong> Regular intervals में requests मत भेजो — random delays add करो। Human-like browsing patterns mimic करो, automated scanning patterns avoid करो।</li>
        <li><strong className="text-white">Session Isolation:</strong> Different tasks के लिए different proxy chains use करो। एक identity से multiple targets मत scan करो — correlation risk बढ़ता है।</li>
        <li><strong className="text-white">Metadata Scrubbing:</strong> Uploaded files से metadata remove करो — EXIF data, document properties, hidden data। ExifTool use करो: exiftool -all= file.pdf।</li>
        <li><strong className="text-white">Communication Security:</strong> Anonymous email use करो (ProtonMail, Tutanota)। PGP encryption से messages encrypt करो। Secure messaging (Signal) use करो coordination के लिए।</li>
        <li><strong className="text-white">Physical Security:</strong> Public WiFi use करो (coffee shops, libraries)। Burner devices use करो sensitive operations के लिए। MAC address randomize करो: macchanger -r wlan0।</li>
        <li><strong className="text-white">Proxy Rotation Schedule:</strong> Har 15-30 minutes में proxy/Tor circuit change करो। Automated script बनाओ जो cron job से rotate करे। Correlation attacks window minimize होगी।</li>
        <li><strong className="text-white">Network Fingerprint:</strong> TTL values, TCP window size, और MTU settings adjust करो OS fingerprinting रोकने के लिए। iptables rules से TTL normalize करो।</li>
        <li><strong className="text-white">SSL/TLS Fingerprint:</strong> JA3 fingerprint randomize करो — curl और Firefox के different fingerprints होते हैं। HttpsClientHello randomization extension use करो।</li>
        <li><strong className="text-white">Storage Encryption:</strong> Proxy config files, logs, और scan results encrypted store करो — LUKS, VeraCrypt, और GPG use करो। Unencrypted evidence files risk हैं।</li>
        <li><strong className="text-white">Exit Strategy:</strong> Operation complete होने पर सभी proxy configs, logs, और temporary files securely delete करो — shred -vfz -n 5। Proxy credentials rotate करो।</li>
        <li><strong className="text-white">Counter-Surveillance:</strong> Network traffic monitoring detect करो — Wireshark से outbound connections verify करो। Unexpected connections block करो iptables से।</li>
        <li><strong className="text-white">Browser Fingerprint:</strong> Canvas fingerprint, WebGL fingerprint, और AudioContext fingerprint randomize करो। Firefox + CanvasBlocker extension best है। Tor Browser built-in protection देता है।</li>
        <li><strong className="text-white">Email Security:</strong> Anonymous registration के लिए temporary email services use करो। ProtonMail + Tor combination best है। Phone verification bypass करने के लिए virtual numbers use करो।</li>
        <li><strong className="text-white">Payment Anonymity:</strong> Proxy services purchase करने के लिए cryptocurrency (Monero best) use करो। Prepaid cards, gift cards भी option हैं। Credit card से direct payment avoid करो।</li>
        <li><strong className="text-white">Social Engineering Prevention:</strong> Anonymous identity consistent रखो — same username, same profile, same behavior pattern across sessions। Mixing identities correlation risk बढ़ाता है।</li>
        <li><strong className="text-white">Hardware Considerations:</strong> TPM chip, BIOS serial number, और hardware UUID leak हो सकते हैं। VM use करो with randomized hardware settings। Qubes OS maximum isolation provide करता है।</li>
        <li><strong className="text-white">Mobile Anonymity:</strong> Mobile devices avoid करो — IMSI, IMEI, cell tower tracking possible। अगर mobile use करना ही है तो burner phone + prepaid SIM + public WiFi use करो।</li>
        <li><strong className="text-white">Documentation Security:</strong> Scan results, notes, और evidence encrypted store करो। Paper notes cross-cut shredder से destroy करो। Digital notes VeraCrypt volume में रखो।</li>
        <li><strong className="text-white">Network Isolation:</strong> Dedicated VM use करो proxy operations के लिए — host OS से completely isolated। Snapshot restore करो after each session — clean state guaranteed।</li>
        <li><strong className="text-white">Traffic Obfuscation:</strong> Normal browsing traffic mix करो proxy traffic के साथ — pattern detection difficult होगी। Random intervals में normal websites visit करो।</li>
        <li><strong className="text-white">Credential Hygiene:</strong> Anonymous accounts के credentials password manager में separate vault में रखो। Main credentials से cross-contamination avoid करो।</li>
        <li><strong className="text-white">Update Discipline:</strong> ProxyChains और Tor regularly update करो — security patches important हैं। Outdated versions known vulnerabilities रखते हैं जो anonymity break कर सकते हैं।</li>
        <li><strong className="text-white">Legal Awareness:</strong> Proxy use laws country-specific हैं — India, US, EU अलग-अलग rules हैं। Legal counsel लो before high-risk operations। Documentation maintain करो authorized testing की।</li>
        <li><strong className="text-white">Team Coordination:</strong> Red team operations में shared proxy infrastructure use करो — individual IPs reduce होंगे। Communication encrypted channels पर करो — Signal, Wire, या PGP email।</li>
        <li><strong className="text-white">Incident Response:</strong> Proxy compromise detect होने पर immediate action — Tor circuits restart, proxy credentials rotate, scan results verify, alternate infrastructure activate करो।</li>
        <li><strong className="text-white">Audit Trail:</strong> Authorized testing documentation maintain करो — dates, scope, proxies used, findings। Legal proceedings में evidence के रूप में use हो सकता है।</li>
        <li><strong className="text-white">Redundancy Planning:</strong> Multiple proxy providers use करो — एक fail होने पर backup available। Config में fallback proxies add करो dynamic_chain mode में।</li>
        <li><strong className="text-white">Performance Monitoring:</strong> Proxy latency continuously monitor करो — degraded performance detect करो। Automated health checks setup करो: cron job every 5 minutes proxy test करे।</li>
        <li><strong className="text-white">Scope Limitation:</strong> ProxyChains सिर्फ authorized scope में use करो — out-of-scope traffic block करो। Firewall rules से target IPs whitelist करो, बाकी block।</li>
        <li><strong className="text-white">Evidence Integrity:</strong> Scan results की hash values maintain करो — SHA256 checksums। Tampering detect होगी। Chain of custody document करो forensic validity के लिए।</li>
        <li><strong className="text-white">Communication Protocols:</strong> Pre-defined code words use करो team communication में। Emergency stop signals define करो — compromised identity पर immediate action।</li>
        <li><strong className="text-white">Post-Operation Cleanup:</strong> Operation complete होने पर full system audit करो। Proxy credentials revoke करो, temporary files wipe करो, logs archive करो encrypted storage में।</li>
        <li><strong className="text-white">Continuous Learning:</strong> ProxyChains updates track करो — new features, security patches, compatibility changes। Community forums और GitHub issues monitor करो।</li>
        <li><strong className="text-white">Legal Documentation:</strong> Authorization letters, scope documents, और engagement contracts securely store करो। Legal team से regular consultation लो compliance ensure करने के लिए।</li>
        <li><strong className="text-white">Insurance Considerations:</strong> Professional liability insurance लो penetration testing के लिए। E&O (Errors and Omissions) coverage important है — accidental damage से protection मिलेगी।</li>
        <li><strong className="text-white">Proxy Provider Vetting:</strong> Proxy service providers thoroughly vet करो — logging policy, jurisdiction, reputation, और uptime guarantee check करो। Free proxies avoid करो — data harvesting risk high है।</li>
        <li><strong className="text-white">Encryption Layers:</strong> Proxy traffic के अलावा application-level encryption use करो — HTTPS everywhere, encrypted file transfer, VPN tunnel। Defense in depth approach safest है।</li>
        <li><strong className="text-white">Compartmentalization:</strong> Different operations के लिए different identities और proxy chains use करो। एक identity compromise होने पर दूसरी operations safe रहेंगी।</li>
        <li><strong className="text-white">Testing Environment:</strong> ProxyChains configuration test करो production use से पहले — dummy targets पर verify करो कि traffic properly route हो रहा है। Misconfiguration detection important है।</li>
        <li><strong className="text-white">Bandwidth Monitoring:</strong> Proxy bandwidth usage track करो — unexpected spikes proxy compromise indicate कर सकते हैं। Network monitoring tools (iftop, nethogs) use करो।</li>
        <li><strong className="text-white">Fallback Mechanisms:</strong> Primary proxy fail होने पर automatic fallback setup करो — dynamic_chain mode best है। Emergency direct connection option भी रखो critical operations के लिए।</li>
        <li><strong className="text-white">Compliance Requirements:</strong> Industry regulations (PCI-DSS, HIPAA, GDPR) proxy use को affect कर सकते हैं। Compliance team से proxy infrastructure approve कराओ। Regular audits schedule करो।</li>
        <li><strong className="text-white">Documentation Templates:</strong> Standardized templates use करो proxy configuration, testing results, और incident reports के लिए। Consistency maintain होगी और audit process smooth होगा।</li>
        <li><strong className="text-white">Vendor Assessment:</strong> Third-party proxy services का security assessment करो — penetration test reports मांगो, SOC 2 compliance verify करो, data handling practices review करो।</li>
        <li><strong className="text-white">Knowledge Sharing:</strong> Team में proxy configurations और best practices document करो। Internal wiki maintain करो — new team members quickly onboard हो सकें। Lessons learned sessions regular करो।</li>
        <li><strong className="text-white">Infrastructure Review:</strong> Quarterly proxy infrastructure review करो — performance metrics, security incidents, compliance status, और cost optimization assess करो। Continuous improvement mindset maintain करो।</li>
        <li><strong className="text-white">Emergency Procedures:</strong> Proxy infrastructure compromise होने पर emergency playbook ready रखो — immediate actions, communication plan, forensic preservation, और recovery steps documented हों।</li>
        <li><strong className="text-white">Skill Development:</strong> ProxyChains और anonymity techniques पर regular training करो। Red team certifications (OSCP, CRTO) proxy usage cover करती हैं। Hands-on practice labs setup करो।</li>
        <li><strong className="text-white">Community Engagement:</strong> Open-source proxy tools के community में actively participate करो — bug reports, feature requests, code contributions। Community involvement से latest techniques और tools पता चलते हैं।</li>
      </ul>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> ProxyChains एक powerful anonymity tool है। इसका इस्तेमाल केवल authorized testing और legitimate privacy protection के लिए करें। Proxy use करने से illegal activities legal नहीं हो जातीं। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized network access अपराध है — 3 साल तक की जेल और जुर्माना हो सकता है। केवल authorized targets पर ही use करें। ProxyChains anonymity guarantee नहीं करता — determined adversary traffic analysis, timing correlation, और other techniques से identity reveal कर सकता है। Layered approach best है: VPN + Tor + ProxyChains + safe browsing habits। कभी भी real credentials proxy traffic में मत भेजो — proxy servers traffic log कर सकते हैं। Tor exit nodes malicious हो सकते हैं — unencrypted HTTP traffic modify हो सकता है। Always HTTPS use करो proxy traffic में। Proxy servers trust मत करो — sensitive data (passwords, financial info) proxy से मत भेजो बिना end-to-end encryption के। Corporate environments में proxy use policy check करो — unauthorized proxy use termination का कारण बन सकता है।
      </div>
    </TutorialLayout>
  )
}
