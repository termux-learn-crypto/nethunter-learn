import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Tcpdump() {
  return (
    <TutorialLayout
      title="tcpdump"
      subtitle="कमांड-लाइन नेटवर्क पैकेट एनालाइज़र — रॉ ट्रैफिक कैप्चर और एनालिसिस"
      icon="📡"
      prev={{ to: '/tool/sherlock', label: 'sherlock' }}
      next={{ to: '/tool/responder', label: 'responder' }}
    >
      <h2>What is Tcpdump?</h2>
      <p>
        tcpdump एक कमांड-लाइन पैकेट एनालाइज़र है जो नेटवर्क ट्रैफिक को रियल-टाइम में कैप्चर और एनालाइज़ करता है। यह libpcap लाइब्रेरी पर based है जो raw socket interface का उपयोग करके नेटवर्क पैकेट्स को सीधे OS kernel से पढ़ता है। हर Linux, macOS, और BSD सिस्टम पर यह प्री-इंस्टॉल्ड आता है — यह नेटवर्क ट्रबलशूटिंग और सिक्योरिटी एनालिसिस का सबसे बेसिक और ज़रूरी टूल है।
      </p>
      <p>
        tcpdump BPF (Berkeley Packet Filter) सिंटैक्स इस्तेमाल करता है जो बहुत powerful filtering capability देता है। आप स्पेसिफिक प्रोटोकॉल, IP एड्रेस, पोर्ट, फ्लैग्स — किसी भी पैकेट फ़ील्ड पर फ़िल्टर लगा सकते हो। कैप्चर किए गए पैकेट्स को pcap फाइल में सेव करके बाद में Wireshark में एनालाइज़ कर सकते हो। यह network forensics और incident response में भी बहुत काम आता है।
      </p>
      <p>
        tcpdump 1988 में Van Jacobson और उनकी टीम ने Lawrence Berkeley National Laboratory में बनाया था। यह C भाषा में लिखा गया है और आज भी 35+ साल बाद नेटवर्क इंजीनियर्स और सिक्योरिटी रिसर्चर्स का सबसे भरोसेमंद टूल है। इसकी सबसे बड़ी ताकत है simplicity और reliability — बिना किसी GUI के, सिर्फ कमांड लाइन से पूरा नेटवर्क ट्रैफिक एनालाइज़ कर सकते हो।
      </p>
      <p>
        tcpdump का उपयोग नेटवर्क एडमिनिस्ट्रेटर्स, सिक्योरिटी रिसर्चर्स, पेनेट्रेशन टेस्टर्स, और डेवलपर्स सभी करते हैं। यह lightweight है — remote servers पर SSH से connect करके भी चला सकते हो। Production servers पर भी बिना performance impact के ट्रैफिक मॉनिटर कर सकते हो। pcap format में save करके बाद में detailed analysis कर सकते हो। यह टूल हर नेटवर्क इंजीनियर के toolkit में होना चाहिए।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> tcpdump केवल अपने नेटवर्क और अधिकृत टेस्टिंग में ही इस्तेमाल करें। बिना अनुमति के नेटवर्क ट्रैफिक कैप्चर करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क मॉनिटरिंग अपराध हो सकता है। साइबर अपराध गंभीर परिणामों का कारण बन सकता है — जुर्माना और जेल दोनों हो सकते हैं। केवल अपने लैब वातावरण या लिखित प्राधिकरण के साथ ही उपयोग करें।
      </div>

      <h2>History of Tcpdump</h2>
      <p>
        tcpdump की शुरुआत 1988 में हुई जब Van Jacobson, Steve McCanne, और LBNL की टीम ने इसे network debugging tool के रूप में बनाया। उस समय नेटवर्क में क्या हो रहा है यह देखने का कोई आसान तरीका नहीं था। TCP/IP protocol stack debug करना बहुत मुश्किल था। Van Jacobson ने इस समस्या को हल करने के लिए tcpdump बनाया — यह पैकेट्स को human-readable format में दिखाता था।
      </p>
      <p>
        1992 में libpcap (packet capture library) अलग से release हुई जो tcpdump का core engine थी। Steve McCanne और Van Jacobson ने इसे cross-platform बनाया। यह library बाद में Wireshark, Nmap, Snort, और दूसरे नेटवर्क टूल्स में भी इस्तेमाल हुई। tcpdump.org project आज भी actively maintained है। यह open source (BSD license) है और इसका source code सबके लिए उपलब्ध है।
      </p>
      <p>
        tcpdump का BPF (Berkeley Packet Filter) filter engine बहुत innovative था। यह kernel-level filtering करता था — सिर्फ matching packets ही userspace में आते थे, बाकी kernel में ही discard हो जाते थे। इससे performance बहुत अच्छी रहती थी। आज भी ज़्यादातर packet capture tools BPF use करते हैं। tcpdump ने packet analysis को democratic बना दिया — पहले जो काम expensive hardware analyzers से होता था, अब किसी भी Linux machine पर हो जाता है।
      </p>

      <h2>How Tcpdump Works?</h2>
      <p>
        tcpdump का architecture तीन layers पर काम करता है — kernel space, library layer, और user space। यह design बहुत efficient है और high-speed networks पर भी अच्छा perform करता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Raw Socket Interface:</strong> OS kernel से raw packets पढ़ता है — NIC (Network Interface Card) पर आने वाले सभी फ्रेम्स कैप्चर होते हैं</li>
        <li><strong className="text-white">libpcap Library:</strong> Cross-platform packet capture library जो Linux, macOS, Windows (Npcap) सब पर काम करती है</li>
        <li><strong className="text-white">BPF Filter Engine:</strong> Kernel-level filtering — बिना CPU waste किए सिर्फ ज़रूरी पैकेट्स userspace में आते हैं</li>
        <li><strong className="text-white">Packet Decoder:</strong> Ethernet, IP, TCP/UDP, HTTP headers parse करके human-readable format में दिखाता है</li>
        <li><strong className="text-white">Output Formatter:</strong> अलग-अलग formats में output — verbose, hex dump, ASCII, timestamps</li>
        <li><strong className="text-white">pcap Writer:</strong> कैप्चर किए गए पैकेट्स को standard pcap format में file में save करता है</li>
        <li><strong className="text-white">Promiscuous Mode:</strong> NIC को promiscuous mode में डालता है ताकि सभी packets capture हों — सिर्फ अपने नहीं</li>
        <li><strong className="text-white">Timestamp Engine:</strong> हर packet पर high-resolution timestamp लगाता है — microsecond accuracy</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर और ज़्यादातर Linux distributions में tcpdump प्री-इंस्टॉल्ड आता है। अगर नहीं है तो आसानी से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="tcpdump इंस्टॉलेशन"
        code={`# वर्जन चेक (पहले से है या नहीं):
tcpdump --version

# Debian/Ubuntu/Kali में इंस्टॉल:
sudo apt update
sudo apt install tcpdump

# CentOS/RHEL/Fedora में:
sudo yum install tcpdump
# या
sudo dnf install tcpdump

# Arch Linux में:
sudo pacman -S tcpdump

# macOS में (प्री-इंस्टॉल्ड):
# अगर नहीं है तो Homebrew से:
brew install tcpdump

# सोर्स से (latest version):
wget https://www.tcpdump.org/release/tcpdump-4.99.4.tar.gz
tar xzf tcpdump-4.99.4.tar.gz
cd tcpdump-4.99.4
./configure
make
sudo make install

# इंस्टॉल verify करें:
which tcpdump
tcpdump --version

# libpcap dependency check:
ldd $(which tcpdump) | grep pcap`}
      />

      <h2>Basic Usage</h2>
      <p>
        tcpdump का basic usage बहुत simple है — interface select करो, filter लगाओ, capture शुरू करो। यह तुरंत packets दिखाने लगता है।
      </p>
      <CodeBlock
        title="बेसिक कमांड्स"
        code={`# उपलब्ध इंटरफेस देखें:
tcpdump -D

# इंटरफेस पर ट्रैफिक कैप्चर:
sudo tcpdump -i wlan0

# किसी भी इंटरफेस पर:
sudo tcpdump -i any

# वर्बोज़ आउटपुट के साथ:
sudo tcpdump -vvv -i wlan0

# DNS resolution बंद करें (तेज़ output):
sudo tcpdump -n -i wlan0

# DNS और पोर्ट दोनों बंद:
sudo tcpdump -nn -i wlan0

# 100 पैकेट्स कैप्चर करें:
sudo tcpdump -i wlan0 -c 100

# Quick summary (compact output):
sudo tcpdump -q -i wlan0

# कैप्चर बंद करने के लिए: Ctrl+C`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-i iface</td><td className="py-2 px-3">इंटरफेस specify करें</td><td className="py-2 px-3 font-mono text-xs">-i wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-w file</td><td className="py-2 px-3">पैकेट्स को pcap फाइल में सेव करें</td><td className="py-2 px-3 font-mono text-xs">-w capture.pcap</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r file</td><td className="py-2 px-3">pcap फाइल से पढ़ें</td><td className="py-2 px-3 font-mono text-xs">-r capture.pcap</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c count</td><td className="py-2 px-3">N पैकेट्स कैप्चर करके रुकें</td><td className="py-2 px-3 font-mono text-xs">-c 1000</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-n</td><td className="py-2 px-3">DNS resolution बंद करें</td><td className="py-2 px-3 font-mono text-xs">-n</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-nn</td><td className="py-2 px-3">DNS और पोर्ट दोनों बंद</td><td className="py-2 px-3 font-mono text-xs">-nn</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v/-vv/-vvv</td><td className="py-2 px-3">Verbose output</td><td className="py-2 px-3 font-mono text-xs">-vvv</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-s snaplen</td><td className="py-2 px-3">पैकेट साइज़ लिमिट (0=full)</td><td className="py-2 px-3 font-mono text-xs">-s 0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-X</td><td className="py-2 px-3">Hex + ASCII payload</td><td className="py-2 px-3 font-mono text-xs">-X</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-A</td><td className="py-2 px-3">ASCII payload</td><td className="py-2 px-3 font-mono text-xs">-A</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e</td><td className="py-2 px-3">MAC हेडर दिखाएं</td><td className="py-2 px-3 font-mono text-xs">-e</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-tttt</td><td className="py-2 px-3">Human-readable timestamp</td><td className="py-2 px-3 font-mono text-xs">-tttt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-C size</td><td className="py-2 px-3">फाइल रोटेशन (MB)</td><td className="py-2 px-3 font-mono text-xs">-C 100</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-G sec</td><td className="py-2 px-3">टाइम-based rotation</td><td className="py-2 px-3 font-mono text-xs">-G 3600</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-D</td><td className="py-2 px-3">इंटरफेस लिस्ट</td><td className="py-2 px-3 font-mono text-xs">-D</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Protocol Filters</h2>
      <p>
        BPF (Berkeley Packet Filter) सिंटैक्स से स्पेसिफिक प्रोटोकॉल का ट्रैफिक कैप्चर करो। यह kernel-level filtering है — performance बहुत अच्छी रहती है।
      </p>
      <CodeBlock
        title="प्रोटोकॉल फ़िल्टर"
        code={`# TCP पैकेट्स:
sudo tcpdump -i wlan0 tcp

# UDP पैकेट्स:
sudo tcpdump -i wlan0 udp

# ICMP (ping) पैकेट्स:
sudo tcpdump -i wlan0 icmp

# ARP पैकेट्स:
sudo tcpdump -i wlan0 arp

# IPv6 ट्रैफिक:
sudo tcpdump -i wlan0 ip6

# DNS ट्रैफिक (पोर्ट 53):
sudo tcpdump -i wlan0 port 53

# HTTP ट्रैफिक (पोर्ट 80):
sudo tcpdump -i wlan0 port 80

# HTTPS ट्रैफिक (पोर्ट 443):
sudo tcpdump -i wlan0 port 443

# SSH ट्रैफिक (पोर्ट 22):
sudo tcpdump -i wlan0 port 22

# FTP ट्रैफिक (पोर्ट 21):
sudo tcpdump -i wlan0 port 21

# SMTP ट्रैफिक (पोर्ट 25):
sudo tcpdump -i wlan0 port 25

# DHCP ट्रैफिक (पोर्ट 67-68):
sudo tcpdump -i wlan0 portrange 67-68`}
      />

      <h2>Host and Port Filters</h2>
      <p>
        स्पेसिफिक होस्ट, IP, और पोर्ट पर फ़िल्टर लगाओ। Combination filters से precise capture possible है।
      </p>
      <CodeBlock
        title="होस्ट और पोर्ट फ़िल्टर"
        code={`# स्पेसिफिक होस्ट का ट्रैफिक:
sudo tcpdump -i wlan0 host 192.168.1.1

# सोर्स IP से ट्रैफिक:
sudo tcpdump -i wlan0 src 192.168.1.100

# डेस्टिनेशन IP का ट्रैफिक:
sudo tcpdump -i wlan0 dst 10.0.0.1

# सोर्स पोर्ट:
sudo tcpdump -i wlan0 src port 80

# डेस्टिनेशन पोर्ट:
sudo tcpdump -i wlan0 dst port 443

# पोर्ट रेंज:
sudo tcpdump -i wlan0 portrange 80-100

# कई पोर्ट्स:
sudo tcpdump -i wlan0 port 80 or port 443 or port 8080

# सबनेट:
sudo tcpdump -i wlan0 net 192.168.1.0/24

# होस्ट और पोर्ट combination:
sudo tcpdump -i wlan0 host 192.168.1.1 and port 80

# MAC एड्रेस से:
sudo tcpdump -i wlan0 ether host aa:bb:cc:dd:ee:ff

# Broadcast traffic:
sudo tcpdump -i wlan0 broadcast`}
      />

      <h2>TCP Flag Filters</h2>
      <p>
        TCP flags पर फ़िल्टर लगाकर स्पेसिफिक connection states देख सकते हो। Port scanning detection के लिए यह बहुत useful है।
      </p>
      <CodeBlock
        title="TCP फ्लैग फ़िल्टर"
        code={`# SYN पैकेट्स (नए कनेक्शन):
sudo tcpdump -i wlan0 'tcp[tcpflags] & tcp-syn != 0'

# सिर्फ SYN (half-open):
sudo tcpdump -i wlan0 'tcp[tcpflags] == tcp-syn'

# SYN-ACK (connection accepted):
sudo tcpdump -i wlan0 'tcp[tcpflags] == (tcp-syn|tcp-ack)'

# FIN पैकेट्स (connection close):
sudo tcpdump -i wlan0 'tcp[tcpflags] & tcp-fin != 0'

# RST पैकेट्स (connection reset):
sudo tcpdump -i wlan0 'tcp[tcpflags] & tcp-rst != 0'

# ACK पैकेट्स:
sudo tcpdump -i wlan0 'tcp[tcpflags] & tcp-ack != 0'

# XMAS scan detect (FIN+PSH+URG):
sudo tcpdump -i wlan0 'tcp[tcpflags] & (tcp-fin|tcp-push|tcp-urg) != 0'

# NULL scan detect (कोई फ्लैग नहीं):
sudo tcpdump -i wlan0 'tcp[tcpflags] == 0'

# Window size 0 (flow control):
sudo tcpdump -i wlan0 'tcp[14:2] = 0'

# TCP sequence number tracking:
sudo tcpdump -i wlan0 -nn 'tcp[tcpflags] & tcp-syn != 0' -tttt`}
      />

      <h2>Save and Read Capture Files</h2>
      <p>
        पैकेट्स को pcap फॉर्मेट में सेव करो ताकि बाद में Wireshark में एनालाइज़ कर सको। pcap standard format है जो सभी packet analysis tools support करते हैं।
      </p>
      <CodeBlock
        title="pcap फाइल ऑपरेशंस"
        code={`# पैकेट्स फाइल में सेव:
sudo tcpdump -i wlan0 -w capture.pcap

# स्पेसिफिक नंबर पैकेट्स सेव करें:
sudo tcpdump -i wlan0 -w capture.pcap -c 1000

# फ़िल्टर के साथ सेव:
sudo tcpdump -i wlan0 -w http.pcap port 80

# फुल पैकेट साइज़ सेव करें:
sudo tcpdump -i wlan0 -w full.pcap -s 0

# pcap फाइल से पढ़ें:
tcpdump -r capture.pcap

# फाइल में फ़िल्टर लगाएं:
tcpdump -r capture.pcap host 192.168.1.1
tcpdump -r capture.pcap port 80
tcpdump -r capture.pcap -n -X

# फाइल rotation (100MB बाद नई फाइल):
sudo tcpdump -i wlan0 -w capture.pcap -C 100

# टाइम-based rotation (हर 1 घंटे):
sudo tcpdump -i wlan0 -w "capture_%Y%m%d_%H%M%S.pcap" -G 3600

# रिंग बफर (10 फाइलें, हर 100MB):
sudo tcpdump -i wlan0 -w capture.pcap -C 100 -W 10

# pcap statistics:
tcpdump -r capture.pcap -c 100 2>&1 | tail -1`}
      />

      <h2>Output Formats</h2>
      <p>
        tcpdump कई output formats support करता है — hex dump, ASCII, compact, verbose। हर format का अपना use case है।
      </p>
      <CodeBlock
        title="आउटपुट फॉर्मेट"
        code={`# हेक्स डंप (payload देखें):
sudo tcpdump -i wlan0 -X

# ASCII में payload:
sudo tcpdump -i wlan0 -A

# MAC एड्रेसेज़ के साथ:
sudo tcpdump -i wlan0 -e

# टाइमस्टैम्प के साथ:
sudo tcpdump -i wlan0 -tttt

# कॉम्पैक्ट आउटपुट (एक लाइन):
sudo tcpdump -i wlan0 -q

# लाइन नंबर के साथ:
sudo tcpdump -i wlan0 -#

# वर्बोज़ लेवल:
sudo tcpdump -i wlan0 -v      # Normal verbose
sudo tcpdump -i wlan0 -vv     # More verbose
sudo tcpdump -i wlan0 -vvv    # Maximum verbose

# पैकेट नंबर के साथ:
sudo tcpdump -i wlan0 -#

# Human-readable टाइमस्टैम्प + verbose:
sudo tcpdump -i wlan0 -tttt -v`}
      />

      <h2>Advanced Filtering</h2>
      <p>
        BPF सिंटैक्स की power — complex expressions बनाओ। AND, OR, NOT operators से precise filters बना सकते हो।
      </p>
      <CodeBlock
        title="एडवांस्ड फ़िल्टर"
        code={`# AND operator:
sudo tcpdump -i wlan0 host 192.168.1.1 and port 80

# OR operator:
sudo tcpdump -i wlan0 port 80 or port 443

# NOT operator:
sudo tcpdump -i wlan0 not port 22

# Complex expression:
sudo tcpdump -i wlan0 '(host 192.168.1.1 or host 10.0.0.1) and port 80'

# VLAN tagged traffic:
sudo tcpdump -i wlan0 'vlan and port 80'

# Payload में string search:
sudo tcpdump -i wlan0 -A 'tcp port 80 and tcp[((tcp[12:1] & 0xf0) >> 2):4] = 0x47455420'
# यह "GET " (HTTP GET) search करता है

# Small packets (scanning detect):
sudo tcpdump -i wlan0 'ip[2:2] < 40'

# Fragmented packets:
sudo tcpdump -i wlan0 'ip[6:2] & 0x1fff != 0'

# Specific TTL range:
sudo tcpdump -i wlan0 'ip[8:1] < 10'

# IP ID tracking:
sudo tcpdump -i wlan0 'ip[4:2] = 12345'

# TCP urgent pointer:
sudo tcpdump -i wlan0 'tcp[18:2] != 0'`}
      />

      <h2>Practical Use Cases</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Use Case</th>
              <th className="text-left py-2 px-3 text-neon-green">कमांड</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">DNS क्वेरीज़ मॉनिटर</td><td className="font-mono text-xs">tcpdump -i wlan0 port 53 -n</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">HTTP रिक्वेस्ट्स देखें</td><td className="font-mono text-xs">tcpdump -i wlan0 port 80 -A</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">FTP क्रेडेंशियल्स</td><td className="font-mono text-xs">tcpdump -i wlan0 port 21 -A</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">ARP स्पूफ़िंग डिटेक्ट</td><td className="font-mono text-xs">tcpdump -i wlan0 arp -n -e</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Port scan detect</td><td className="font-mono text-xs">tcpdump 'tcp[tcpflags] == tcp-syn'</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">DDoS ट्रैफिक</td><td className="font-mono text-xs">tcpdump -i eth0 'ip[2:2] &gt; 1000'</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Wireshark के लिए सेव</td><td className="font-mono text-xs">tcpdump -i wlan0 -w out.pcap -s 0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">नेटवर्क latency</td><td className="font-mono text-xs">tcpdump -i wlan0 'tcp[tcpflags] & tcp-syn != 0' -tttt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">DHCP transactions</td><td className="font-mono text-xs">tcpdump -i wlan0 portrange 67-68 -n</td></tr>
            <tr><td className="py-2 px-3 text-white">SSH brute force</td><td className="font-mono text-xs">tcpdump -i wlan0 port 22 -n -c 100</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scripting and Automation</h2>
      <p>
        tcpdump को scripts में integrate करके automated network monitoring build कर सकते हो।
      </p>
      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट्स"
        code={`#!/bin/bash
# ऑटोमैटिक नेटवर्क मॉनिटरिंग स्क्रिप्ट

INTERFACE="wlan0"
CAPTURE_DIR="/tmp/captures"
DURATION=300  # 5 मिनट

mkdir -p $CAPTURE_DIR

while true; do
    TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    FILENAME="$CAPTURE_DIR/capture_$TIMESTAMP.pcap"

    echo "[+] कैप्चर शुरू: $FILENAME"

    # HTTP ट्रैफिक कैप्चर:
    timeout $DURATION tcpdump -i $INTERFACE -w $FILENAME port 80 or port 443 -s 0

    echo "[+] कैप्चर पूरा: $FILENAME"

    # पुरानी फाइलें हटाएं (7 दिन से पुरानी):
    find $CAPTURE_DIR -name "*.pcap" -mtime +7 -delete
done`}
      />

      <CodeBlock
        title="सिक्योरिटी मॉनिटरिंग"
        code={`#!/bin/bash
# सस्पीशियस एक्टिविटी डिटेक्ट करें

INTERFACE="wlan0"

# ARP स्पूफ़िंग डिटेक्ट:
tcpdump -i $INTERFACE arp -n -l | grep -v "who-has" | while read line; do
    echo "[ALERT] संभावित ARP स्पूफ़: $line"
done

# SYN flood detect:
tcpdump -i $INTERFACE 'tcp[tcpflags] == tcp-syn' -c 1000 -l | awk '{print $3}' | cut -d. -f1-4 | sort | uniq -c | while read count ip; do
    if [ $count -gt 50 ]; then
        echo "[ALERT] SYN flood से: $ip ($count पैकेट्स)"
    fi
done

# DNS tunneling detect:
tcpdump -i $INTERFACE port 53 -n -l | awk '{print $NF}' | while read domain; do
    if [ $(echo $domain | wc -c) -gt 50 ]; then
        echo "[ALERT] लंबा DNS क्वेरी (tunneling?): $domain"
    fi
done`}
      />

      <h2>Tcpdump vs Wireshark vs tshark</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">tcpdump</th>
              <th className="text-left py-2 px-3 text-neon-green">Wireshark</th>
              <th className="text-left py-2 px-3 text-neon-green">tshark</th>
              <th className="text-left py-2 px-3 text-neon-green">netsniff-ng</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">इंटरफ़ेस</td><td className="py-2 px-3">CLI</td><td className="py-2 px-3">GUI</td><td className="py-2 px-3">CLI</td><td className="py-2 px-3">CLI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">परफॉर्मेंस</td><td className="py-2 px-3">बहुत तेज़</td><td className="py-2 px-3">भारी (GUI)</td><td className="py-2 px-3">तेज़</td><td className="py-2 px-3">सबसे तेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">फ़िल्टरिंग</td><td className="py-2 px-3">BPF (कैप्चर)</td><td className="py-2 px-3">BPF + Display</td><td className="py-2 px-3">BPF + Display</td><td className="py-2 px-3">BPF</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Protocol Decode</td><td className="py-2 px-3">बेसिक</td><td className="py-2 px-3">1000+ प्रोटोकॉल</td><td className="py-2 px-3">1000+ प्रोटोकॉल</td><td className="py-2 px-3">बेसिक</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्क्रिप्टिंग</td><td className="py-2 px-3">Bash pipe</td><td className="py-2 px-3">Lua dissectors</td><td className="py-2 px-3">tshark -T fields</td><td className="py-2 px-3">Bash</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">रिमोट सर्वर</td><td className="py-2 px-3">हाँ (SSH)</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">हाँ (SSH)</td><td className="py-2 px-3">हाँ (SSH)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Zero-copy</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr><td className="py-2 px-3 text-white">सीखना</td><td className="py-2 px-3">आसान</td><td className="py-2 px-3">मध्यम</td><td className="py-2 px-3">मध्यम</td><td className="py-2 px-3">कठिन</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Permission denied आ रहा है', a: 'Root/Administrator privileges चाहिए। sudo लगाओ: sudo tcpdump -i wlan0। या sudo group में user add करो: sudo usermod -aG wireshark $USER' },
          { q: 'कोई पैकेट कैप्चर नहीं हो रहा', a: 'इंटरफेस सही है? tcpdump -D से चेक करो। Interface up है? ip link show wlan0। Monitor mode में हो तो managed mode पर switch करो।' },
          { q: 'बहुत ज़्यादा ट्रैफिक आ रहा है', a: 'फ़िल्टर लगाओ — port, host, protocol specify करो। -n flag DNS resolution बंद करता है जो output तेज़ करता है। -c flag से packet count limit करो।' },
          { q: 'pcap फाइल बहुत बड़ी हो रही है', a: '-C flag से file rotation use करो (100MB)। -W flag से max files limit करो। Snaplen (-s) कम करो अगर full packet नहीं चाहिए।' },
          { q: 'Wireless monitor mode में कैप्चर', a: 'पहले airmon-ng start wlan0 से monitor mode enable करो। फिर tcpdump -i wlan0mon से कैप्चर करो। 802.11 headers भी दिखेंगे।' },
          { q: 'IPv6 ट्रैफिक नहीं दिख रहा', a: 'ip6 filter use करो: tcpdump -i eth0 ip6। या ip or ip6 दोनों कैप्चर करो। IPv6 specific addresses: tcpdump -i eth0 ip6 host fe80::1' },
          { q: 'pcap फाइल corrupt हो गई', a: 'Incomplete writes से corrupt हो सकती है। -W flag use करो proper rotation के लिए। Power failure से बचने के लिए UPS use करो।' },
          { q: 'High-speed network पर packet drops', a: 'Ring buffer बढ़ाओ: sysctl -w net.core.rmem_max=134217728। -s flag से snaplen कम करो। Multiple instances चलाओ different interfaces पर।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        tcpdump का defensive use — नेटवर्क को secure कैसे रखें:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">नेटवर्क बेसलाइन:</strong> Normal traffic pattern establish करो — anomalies जल्दी detect होंगी</li>
        <li><strong className="text-white">IDS/IPS:</strong> Snort या Suricata tcpdump-style capture use करते हैं — automated detection</li>
        <li><strong className="text-white">ARP Monitoring:</strong> ARP spoofing detect करने के लिए regular ARP traffic monitor करो</li>
        <li><strong className="text-white">DNS Monitoring:</strong> Suspicious DNS queries detect करो — tunneling, DGA domains</li>
        <li><strong className="text-white">Port Scan Detection:</strong> SYN packets monitor करो — port scanning activity detect होगी</li>
        <li><strong className="text-white">Encrypted Traffic Analysis:</strong> HTTPS metadata (IP, port, timing) से भी बहुत कुछ पता चलता है</li>
        <li><strong className="text-white">Packet Capture for Forensics:</strong> Incident response में pcap files evidence का काम करती हैं</li>
        <li><strong className="text-white">Baseline Comparison:</strong> Normal vs abnormal traffic patterns compare करो</li>
        <li><strong className="text-white">Alert Generation:</strong> tcpdump output pipe करके automated alerts generate करो</li>
        <li><strong className="text-white">Long-term Monitoring:</strong> pcap files archive करो — historical analysis के लिए</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        tcpdump practice के लिए safe lab बनाओ:
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# VirtualBox/VMware में:
# 1. Kali Linux VM (attacker/monitor)
# 2. Ubuntu/Windows target VM
# 3. Internal network adapter (दोनों VMs connected)

# tcpdump से कैप्चर शुरू करो:
sudo tcpdump -i eth0 -w lab.pcap

# दूसरी VM से traffic generate करो:
curl http://target-vm/
ping target-vm
nmap -sS target-vm

# pcap file analyze करो:
tcpdump -r lab.pcap -n
tcpdump -r lab.pcap host target-vm

# Wireshark में open करो (detailed analysis):
wireshark lab.pcap

# Practice exercises:
# 1. HTTP credentials capture
# 2. DNS queries analyze
# 3. Port scan detect करो
# 4. ARP spoofing detect करो
# 5. FTP credentials capture
# 6. TCP handshake observe करो`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड tcpdump"
        code={`# रिंग बफर (continuous capture):
sudo tcpdump -i wlan0 -w /tmp/capture.pcap -C 50 -W 20
# 50MB per file, 20 files max = 1GB total

# टाइम-based rotation (हर घंटे नई फाइल):
sudo tcpdump -i wlan0 -w "capture_%Y%m%d_%H%M%S.pcap" -G 3600

# Remote capture (SSH tunnel):
ssh user@remote "sudo tcpdump -i eth0 -w - port 80" | wireshark -k -i -

# tshark-style field extraction:
sudo tcpdump -i wlan0 -nn -l port 80 | awk '{print $3}' | cut -d. -f1-4 | sort | uniq -c | sort -rn

# VLAN tagged traffic:
sudo tcpdump -i eth0 -e vlan

# MPLS traffic:
sudo tcpdump -i eth0 mpls

# Multiple interfaces:
sudo tcpdump -i eth0 -w eth0.pcap &
sudo tcpdump -i wlan0 -w wlan0.pcap &

# GeoIP enrichment:
tcpdump -r capture.pcap -n | awk '{print $3}' | cut -d. -f1-4 | sort -u | while read ip; do
    geoiplookup $ip 2>/dev/null
done

# Merge pcap files:
mergecap -w merged.pcap file1.pcap file2.pcap

# Extract specific streams:
tcpdump -r capture.pcap -w extracted.pcap host 192.168.1.1 and port 80`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'tcpdump और Wireshark में क्या फ़र्क है?', a: 'tcpdump CLI-based है — lightweight, fast, remote servers पर perfect। Wireshark GUI-based है — detailed protocol analysis के लिए बेहतर। Best workflow: tcpdump से कैप्चर करो, Wireshark में analyze करो।' },
          { q: 'pcap फाइल कैसे analyze करूं?', a: 'tcpdump -r file.pcap से पढ़ो। Detailed analysis के लिए Wireshark में खोलो। tshark भी use कर सकते हो CLI analysis के लिए।' },
          { q: 'बिना root के कैप्चर कर सकते हैं?', a: 'नहीं, raw packet capture के लिए root/Administrator चाहिए। Alternative: sudo group में user add करो, या setcap capability use करो।' },
          { q: 'HTTPS traffic decrypt कर सकते हैं?', a: 'tcpdump से नहीं — सिर्फ encrypted packets दिखेंगे। Decrypt करने के लिए MITM proxy (mitmproxy, Burp Suite) चाहिए जो SSL terminate करे।' },
          { q: 'WiFi monitor mode में कैप्चर कैसे करें?', a: 'पहले airmon-ng start wlan0 से monitor mode enable करो। फिर tcpdump -i wlan0mon से 802.11 फ्रेम्स कैप्चर होंगे।' },
          { q: 'कैप्चर performance impact कितना है?', a: 'Minimal — tcpdump बहुत lightweight है। High-traffic environments में BPF filters लगाओ ताकि सिर्फ ज़रूरी पैकेट्स process हों।' },
          { q: 'pcap files कितनी बड़ी हो सकती हैं?', a: 'Full capture में 1GB/min तक हो सकता है high-speed networks पर। -C flag से rotation use करो। -s flag से snaplen कम करो।' },
          { q: 'tcpdump से packet loss detect कैसे करें?', a: 'Verbose mode (-vvv) में packet drop statistics दिखती है। Ctrl+C press करने पर summary आती है। Ring buffer use करो continuous monitoring के लिए।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        tcpdump network forensics और incident response में critical tool है। Real-world security incidents में pcap evidence court में भी admissible होती है। Network administrators और security teams daily basis पर tcpdump use करते हैं traffic analysis और troubleshooting के लिए।
      </p>
      <p>
        एक famous incident 2020 में हुआ जब एक company के network में data exfiltration detect हुई। Security team ने tcpdump से 24 घंटे का traffic capture किया। Analysis में पता चला कि compromised server से regular intervals पर DNS queries जा रही थीं encoded data के साथ — DNS tunneling attack था। tcpdump + Wireshark combination से complete attack chain reconstruct हुई।
      </p>
      <p>
        एक और case में ISP ने customer complaints investigate की — slow internet speeds। tcpdump से traffic capture करने पर पता चला कि एक compromised IoT device massive UDP flood generate कर रहा था internal network पर। ARP monitoring से device identify हुआ। pcap evidence legal action के लिए use हुई।
      </p>
      <p>
        Penetration testing engagements में tcpdump passive information collection के लिए use होता है। Wireless assessments में monitor mode capture से nearby devices, connected clients, और open networks detect होते हैं। CTF competitions में network challenges tcpdump और pcap analysis पर based होती हैं — protocol reverse engineering, hidden data extraction, और traffic reconstruction common tasks हैं।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        tcpdump standalone powerful है लेकिन दूसरे tools के साथ combine करने पर network analysis workflow बहुत comprehensive हो जाता है। Packet capture और analysis pipeline में tcpdump foundation tool है।
      </p>
      <CodeBlock
        title="Integration Examples"
        code={`# Wireshark + tcpdump (capture → analysis):
# Remote server पर capture:
ssh user@server "sudo tcpdump -i eth0 -w - port 443" > remote.pcap
# Local Wireshark में analyze:
wireshark remote.pcap

# Snort/Suricata + tcpdump (IDS):
# tcpdump-style capture IDS engine में feed:
tcpdump -i eth0 -w - -s 0 | snort -c /etc/snort/snort.conf -r -

# Nmap + tcpdump (scan verification):
# Nmap scan के दौरान capture:
sudo tcpdump -i wlan0 -w nmap_scan.pcap &
nmap -sS target.com
# Scan traffic verify करो pcap में

# Scapy + tcpdump (packet crafting):
# tcpdump filter use करके Scapy packets capture:
sudo tcpdump -i lo -w scapy_test.pcap port 9999 &
python3 -c "from scapy.all import *; send(IP(dst='127.0.0.1')/TCP(dport=9999))"

# Zeek/Bro + tcpdump (network monitoring):
# tcpdump pcap feed Zeek analyzer:
zeek -r capture.pcap

# tshark + tcpdump (CLI analysis):
# tcpdump से capture, tshark से field extraction:
tcpdump -r capture.pcap -w - | tshark -r - -T fields -e ip.src -e tcp.dstport

# ELK Stack + tcpdump (log aggregation):
# tcpdump output Logstash में feed:
tcpdump -i eth0 -l -nn | logstash -f tcpdump_pipeline.conf`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Network forensics और incident response में pcap analysis results properly document करना ज़रूरी है। Courts में digital evidence admissible होने के लिए chain of custody maintain करना पड़ता है। tcpdump output structured format में export करके reports बना सकते हो।
      </p>
      <CodeBlock
        title="Reporting and Analysis"
        code={`# pcap file statistics:
tcpdump -r capture.pcap 2>&1 | tail -5
# Packet count, drop count दिखाता है

# Connection summary:
tcpdump -r capture.pcap -nn 'tcp[tcpflags] & (tcp-syn|tcp-fin) != 0' | \\
  awk '{print $3, $5}' | sort | uniq -c | sort -rn | head -20

# Top talkers (most active hosts):
tcpdump -r capture.pcap -nn | awk '{print $3}' | \\
  cut -d. -f1-4 | sort | uniq -c | sort -rn | head -10

# Protocol distribution:
tcpdump -r capture.pcap -nn | awk '{print $5}' | \\
  cut -d. -f2 | sort | uniq -c | sort -rn

# DNS query log:
tcpdump -r capture.pcap port 53 -n | \\
  awk '/A\?/ {print $NF}' | sort | uniq -c | sort -rn

# Timeline analysis:
tcpdump -r capture.pcap -tttt -nn 'host 192.168.1.100' > timeline.txt

# Evidence packaging:
# Hash verification (integrity):
sha256sum capture.pcap > capture.pcap.sha256
# Chain of custody document:
echo "Captured by: $(whoami)" > evidence.txt
echo "Date: $(date)" >> evidence.txt
echo "Interface: eth0" >> evidence.txt
echo "SHA256: $(sha256sum capture.pcap | awk '{print $1}')" >> evidence.txt

# Export to CSV (spreadsheet analysis):
tcpdump -r capture.pcap -nn -tttt | awk -F' ' '{
  print $1","$2","$3","$5","$7
}' > traffic_report.csv`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wireshark</td><td className="py-2 px-3">GUI packet analyzer</td><td className="py-2 px-3">1000+ protocol decoders, visual analysis</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">tshark</td><td className="py-2 px-3">CLI version of Wireshark</td><td className="py-2 px-3">Wireshark power + CLI scripting</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">netsniff-ng</td><td className="py-2 px-3">High-performance toolkit</td><td className="py-2 px-3">Zero-copy, बहुत तेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ngrep</td><td className="py-2 px-3">Network grep</td><td className="py-2 px-3">Payload pattern matching</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ethtool</td><td className="py-2 px-3">NIC diagnostics</td><td className="py-2 px-3">Hardware-level info</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">iftop</td><td className="py-2 px-3">Bandwidth monitor</td><td className="py-2 px-3">Real-time bandwidth per connection</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">nethogs</td><td className="py-2 px-3">Per-process bandwidth</td><td className="py-2 px-3">Process-level network usage</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">ss</td><td className="py-2 px-3">Socket statistics</td><td className="py-2 px-3">Active connections, ports</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Forensic Analysis Techniques</h2>
      <p>
        Network forensics में tcpdump बहुत important tool है। pcap files evidence का काम करती हैं और court में भी acceptable होती हैं।
      </p>
      <CodeBlock
        title="फोरेंसिक एनालिसिस"
        code={`# Timestamp के साथ full capture:
sudo tcpdump -i wlan0 -w forensic.pcap -s 0 -tttt

# Specific time window:
# capture.pcap से specific time range extract करो
tcpdump -r capture.pcap -tttt 'src host 192.168.1.100' > suspicious.txt

# HTTP request reconstruction:
tcpdump -r capture.pcap -A port 80 | grep -E "^(GET|POST|PUT|DELETE|HEAD)"

# FTP session reconstruction:
tcpdump -r capture.pcap -A port 21 | grep -E "^(USER|PASS|RETR|STOR)"

# Email headers capture:
tcpdump -r capture.pcap -A port 25 | grep -E "^(From|To|Subject|Date)"

# DNS query log:
tcpdump -r capture.pcap port 53 -n | awk '{print $3, $5, $6, $7}'

# Connection tracking:
tcpdump -r capture.pcap -nn 'tcp[tcpflags] & (tcp-syn|tcp-fin|tcp-rst) != 0'

# Bandwidth per host:
tcpdump -r capture.pcap -nn | awk '{print $3}' | cut -d. -f1-4 | sort | uniq -c | sort -rn

# Extract files from pcap (binwalk):
binwalk --dd='.*' capture.pcap`}
      />

      <h2>Performance Optimization</h2>
      <p>
        High-speed networks पर tcpdump efficiently चलाने के लिए optimization ज़रूरी है।
      </p>
      <CodeBlock
        title="परफॉर्मेंस ऑप्टिमाइज़ेशन"
        code={`# Ring buffer (memory efficient):
sudo tcpdump -i wlan0 -w capture.pcap -C 50 -W 100
# 50MB per file, 100 files max = 5GB total

# Snaplen कम करो (headers only):
sudo tcpdump -i wlan0 -w capture.pcap -s 96
# सिर्फ headers capture होंगे — तेज़ और छोटी files

# Buffer size बढ़ाओ:
sudo tcpdump -i wlan0 -w capture.pcap -B 4096
# 4MB buffer — high-speed capture के लिए

# Kernel buffer optimization:
sudo sysctl -w net.core.rmem_max=134217728
sudo sysctl -w net.core.netdev_max_backlog=5000

# Multiple interfaces (parallel):
sudo tcpdump -i eth0 -w eth0.pcap -B 4096 &
sudo tcpdump -i wlan0 -w wlan0.pcap -B 4096 &
wait

# Compress pcap files:
gzip capture.pcap
# .pcap.gz files Wireshark directly open कर सकता है

# Merge pcap files:
mergecap -w merged.pcap file1.pcap file2.pcap file3.pcap

# Statistics check:
tcpdump -r capture.pcap 2>&1 | tail -3`}
      />

      <h2>Security Monitoring Use Cases</h2>
      <p>
        tcpdump का defensive security monitoring में बहुत important role है।
      </p>
      <CodeBlock
        title="सिक्योरिटी मॉनिटरिंग"
        code={`# IDS-style monitoring:
# Snort/Suricata tcpdump-style capture use करते हैं

# Real-time alert generation:
tcpdump -i wlan0 -l 'tcp[tcpflags] == tcp-syn' | while read line; do
    echo "[SCAN] $line" >> /var/log/scan_alerts.log
done

# DNS exfiltration detect:
tcpdump -i wlan0 port 53 -n -l | awk '{print $NF}' | while read domain; do
    len=$(echo $domain | wc -c)
    if [ $len -gt 50 ]; then
        echo "[ALERT] DNS exfiltration suspect: $domain"
    fi
done

# Beaconing detection (regular intervals):
tcpdump -i wlan0 -n -l 'host 10.0.0.1' | awk '{print $1}' | while read ts; do
    echo $ts >> /tmp/beacon_times.txt
    # Check for regular intervals
done

# Certificate monitoring:
tcpdump -i wlan0 port 443 -w - -s 0 | openssl x509 -text -noout 2>/dev/null

# DDoS detection:
tcpdump -i eth0 -n -l 'ip[2:2] > 1500' | awk '{print $3}' | cut -d. -f1-4 | sort | uniq -c | sort -rn | head -10`}
      />

      <h2>Network Forensics Deep Dive</h2>
      <p>
        Network forensics में tcpdump बहुत critical tool है। Incident response teams compromised networks का traffic capture करके attack timeline reconstruct करती हैं। pcap files digital evidence का काम करती हैं और properly handled होने पर court में भी admissible होती हैं। Forensic methodology follow करना essential है — evidence integrity, chain of custody, और proper documentation।
      </p>
      <CodeBlock
        title="Forensic Capture Techniques"
        code={`# Evidence-grade capture (full packets + timestamps):
sudo tcpdump -i eth0 -w evidence.pcap -s 0 -tttt -n

# Time-bounded capture (incident window):
sudo tcpdump -i eth0 -w incident_$(date +%Y%m%d_%H%M%S).pcap -s 0 -G 3600 -W 24
# 24 hours, 1 file per hour

# Selective forensic capture (suspicious host):
sudo tcpdump -i eth0 -w suspect.pcap host 10.0.0.50 and not port 22

# Encrypted traffic metadata:
sudo tcpdump -i eth0 -w tls_meta.pcap port 443 -tttt -e

# ARP table snapshot (for correlation):
tcpdump -r capture.pcap arp -n | awk '{print $3, $5, $7, $9}' > arp_table.txt

# TCP session reconstruction:
tcpdump -r capture.pcap -nn 'tcp[tcpflags] & (tcp-syn|tcp-fin|tcp-rst) != 0' | \\
  awk '{print $1, $2, $3, $5, $6}' > sessions.txt

# DNS forensics (DGA detection):
tcpdump -r capture.pcap port 53 -n | awk '/A\?/ {print $NF}' | \\
  sort | uniq | while read domain; do
    len=$(echo $domain | wc -c)
    entropy=$(echo $domain | fold -w1 | sort | uniq -c | wc -l)
    if [ $len -gt 50 ] || [ $entropy -lt 5 ]; then
      echo "[SUSPICIOUS] $domain (len=$len entropy=$entropy)"
    fi
  done

# Data exfiltration detection:
tcpdump -r capture.pcap -nn 'ip[2:2] > 1000' | \\
  awk '{print $3}' | cut -d. -f1-4 | sort | uniq -c | sort -rn`}
      />

      <h2>Wireless Network Analysis</h2>
      <p>
        tcpdump wireless networks को भी analyze कर सकता है — WiFi monitor mode में 802.11 frames capture होते हैं। Wireless security assessments में tcpdump passive information collection के लिए use होता है। Connected clients, access points, और probe requests सब capture होते हैं। Wireless forensics में pcap files evidence का काम करती हैं।
      </p>
      <CodeBlock
        title="Wireless Capture"
        code={`# Monitor mode enable करो:
sudo airmon-ng start wlan0

# Beacon frames (access points):
sudo tcpdump -i wlan0mon 'type mgt subtype beacon' -nn

# Probe requests (client devices):
sudo tcpdump -i wlan0mon 'type mgt subtype probe-req' -nn

# Deauthentication frames (attack detect):
sudo tcpdump -i wlan0mon 'type mgt subtype deauth' -nn

# EAPOL frames (WPA handshake capture):
sudo tcpdump -i wlan0mon 'ether proto 0x888e' -w handshake.pcap`}
      />

      <h2>Legal and Ethical Considerations</h2>
      <p>
        tcpdump network packet capture tool है जो legitimate troubleshooting और security monitoring में essential है। लेकिन बिना authorization के network traffic capture करना illegal है। Corporate environments में monitoring policy follow करें। Personal networks पर ही capture करें। Wireless networks का monitoring भी authorization ज़रूरी है।
      </p>
      <p>
        भारत में IT Act 2000 की धारा 43 और 66 के तहत unauthorized network monitoring अपराध है। tcpdump का use केवल अपने infrastructure, authorized penetration testing, और incident response में करें। Forensic evidence collection के लिए chain of custody maintain करें — timestamps, hash values, और access logs document करें।
      </p>
      <p>
        Professional certifications like CEH, OSCP, GCIA network analysis validate करती हैं। Corporate SOC teams tcpdump for defensive monitoring use करती हैं। Responsible disclosure important है — traffic analysis से discover की गई vulnerabilities vendor को privately report करें। Network forensics skills cybersecurity professionals के लिए highly valued हैं।
      </p>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>tcpdump से पैकेट्स कैप्चर करो (-w) और Wireshark में analyze करो — best workflow</li>
          <li>Remote server पर tcpdump चलाओ, pcap फाइल download करो, Wireshark में खोलो</li>
          <li>-n flag हमेशा use करो — DNS resolution slow करता है</li>
          <li>-s 0 से full packets capture करो ताकि कोई data miss न हो</li>
          <li>-nn flag सबसे fast output देता है — दोनों resolution बंद</li>
          <li>pcap files archive करो — incident response में evidence का काम करती हैं</li>
          <li>BPF filters kernel-level पर काम करते हैं — performance best रहती है</li>
          <li>tcpdump + Wireshark + tshark combo सबसे powerful है</li>
          <li>Capture files का SHA256 hash maintain करो — forensic integrity के लिए</li>
          <li>Ring buffer (-C -W) continuous monitoring के लिए essential है</li>
          <li>Remote capture SSH tunnel से करो — SSH + tcpdump + Wireshark pipeline</li>
          <li>TCP flags filter port scanning detection के लिए सबसे useful technique है</li>
          <li>Output formats experiment करो — hex dump (-X), ASCII (-A), verbose (-vvv)</li>
          <li>Network baseline establish करो — normal traffic pattern पहले record करो</li>
          <li>pcap rotation strategy बनाओ — time-based (-G) या size-based (-C)</li>
          <li>High-speed networks पर -B flag से buffer size बढ़ाओ — packet drops कम होंगे</li>
          <li>Forensic captures में हमेशा -s 0 use करो — full packets preserve हों evidence के लिए</li>
          <li>Suspicious traffic detect करने के लिए DNS queries monitor करो — tunneling और DGA domains catch होंगे</li>
          <li>ARP traffic regular basis पर check करो — ARP spoofing early stage में detect हो जाती है</li>
          <li>Multiple interfaces को parallel में capture करो — comprehensive network view मिलती है</li>
          <li>pcap files को compress करके store करो — gzip से size 90% तक कम हो जाती है और Wireshark directly .pcap.gz open कर सकता है</li>
          <li>SSH tunnel से remote capture करो — encrypted channel से pcap data securely transfer होता है</li>
          <li>VLAN tagged traffic capture करने के लिए -e flag use करो — MAC addresses और VLAN IDs दिखेंगे</li>
          <li>Connection tracking के लिए SYN, FIN, RST packets monitor करो — session lifecycle reconstruct हो जाता है</li>
          <li>Network baseline establish करो normal conditions में — anomalies जल्दी detect होंगी</li>
          <li>tcpdump output को awk/sed से parse करो — automated analysis pipeline बनाओ</li>
          <li>Production servers पर tcpdump carefully use करो — high-traffic interfaces पर performance impact हो सकता है</li>
          <li>DNS exfiltration detect करने के लिए long domain names और high query frequency monitor करो</li>
          <li>TCP retransmissions count करो — network quality issues identify होंगे</li>
          <li>ICMP traffic analyze करो — ping sweeps और traceroute attempts detect होते हैं</li>
          <li>DHCP traffic monitor करो — rogue DHCP servers और unauthorized devices detect होंगे</li>
          <li>ARP cache snapshots regular intervals पर लो — ARP poisoning patterns identify होंगे</li>
          <li>pcap files को timeline format में analyze करो — attack sequence reconstruct हो जाता है</li>
          <li>Network forensics certification (GCIA, GNFA) pursue करो — structured packet analysis skills develop होंगे</li>
          <li>tcpdump + Nmap combo port scanning analysis के लिए best है — scan patterns clearly दिखते हैं</li>
          <li>Encrypted traffic analysis से malware C2 communication detect होती है — beaconing patterns देखो</li>
          <li>Network monitoring automation के लिए tcpdump + Python/scapy combo use करो — custom detection rules बनाओ</li>
          <li>Incident response playbook में tcpdump commands pre-written रखो — emergency में तुरंत capture शुरू कर सको</li>
          <li>Network segmentation verify करने के लिए cross-VLAN traffic capture करो — unauthorized access detect होगी</li>
          <li>VoIP traffic analysis के लिए RTP packets capture करो — call quality issues और eavesdropping detect होंगे</li>
          <li>IoT device communication patterns monitor करो — anomalous behavior malware infection indicate कर सकता है</li>
          <li>HTTPS metadata analysis से C2 beaconing detect होती है — regular interval patterns suspicious हैं</li>
          <li>Network capacity planning के लिए bandwidth utilization data collect करो — peak hours identify करो</li>
          <li>Cloud environments में VPC flow logs tcpdump alternative है — AWS, Azure, GCP सब support करते हैं</li>
          <li>tcpdump skills CTF competitions में बहुत काम आती हैं — network challenges common हैं</li>
          <li>Protocol reverse engineering के लिए unknown traffic hex dump analyze करो — undocumented protocols समझ आ जाएंगे</li>
          <li>Security audit reports में pcap evidence attach करो — findings को verifiable बनाओ</li>
          <li>tcpdump को systemd service बनाओ — automatic startup capture for critical interfaces</li>
          <li>Bandwidth abuse detect करने के लिए per-host traffic statistics generate करो — top talkers identify करो</li>
          <li>VPN tunnel health verify करने के लिए encrypted tunnel traffic capture करो — handshake और data flow check करो</li>
          <li>DNS cache poisoning detect करने के लिए DNS responses monitor करो — unexpected IP mappings suspicious हैं</li>
          <li>Network forensics lab setup करो — regular practice से skills sharp रहेंगे</li>
          <li>tcpdump + Suricata IDS combo real-time threat detection के लिए best है — automated alerting मिलती है</li>
          <li>Network anomaly detection के लिए statistical baselines establish करो — deviation alerts generate करो</li>
          <li>Zero-trust architecture verify करने के लिए micro-segmentation traffic analysis करो</li>
          <li>Container networking debug करने के लिए Docker bridge interfaces पर tcpdump run करो</li>
          <li>Wireless security audits में monitor mode capture essential है — deauth attacks detect होते हैं</li>
          <li>tcpdump skills resume में add करो — network analysis roles में highly valued हैं</li>
          <li>Compliance audits (PCI-DSS, HIPAA) में network monitoring evidence required है — pcap files maintain करो</li>
          <li>Network forensics tools (NetworkMiner, Zeek) tcpdump pcap files support करते हैं — interoperability advantage</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> tcpdump एक powerful नेटवर्क analysis tool है। इसका इस्तेमाल केवल अपने नेटवर्क और अधिकृत टेस्टिंग में ही करें। बिना अनुमति के नेटवर्क ट्रैफिक कैप्चर करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क मॉनिटरिंग अपराध हो सकता है। केवल authorized testing और अपने infrastructure पर ही use करें। साइबर अपराध गंभीर परिणामों का कारण बन सकता है — जुर्माना और जेल दोनों हो सकते हैं।
      </div>
    </TutorialLayout>
  )
}
