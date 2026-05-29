import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Masscan() {
  return (
    <TutorialLayout
      title="masscan"
      subtitle="सबसे तेज़ इंटरनेट पोर्ट स्कैनर — 10 मिलियन पैकेट्स प्रति सेकंड"
      icon="⚡"
      prev={{ to: '/tool/netcat', label: 'netcat' }}
      next={{ to: '/tool/hcxdumptool', label: 'hcxdumptool' }}
    >
      <h2>What is Masscan?</h2>
      <p>
        Masscan दुनिया का सबसे तेज़ इंटरनेट पोर्ट स्कैनर है। यह 10 मिलियन पैकेट्स प्रति सेकंड भेज सकता है जिससे पूरी इंटरनेट (IPv4) को सिंगल स्कैन में 6 मिनट में स्कैन कर सकता है। यह Nmap से लगभग 100 गुना तेज़ है और लार्ज-स्केल नेटवर्क रेकन के लिए डिज़ाइन किया गया है। Masscan एक कस्टम TCP/IP स्टैक इस्तेमाल करता है जो सीधे रॉ सॉकेट्स से पैकेट्स भेजता है, इसलिए यह बहुत एफ़िशिएंट और तेज़ है।
      </p>
      <p>
        Masscan असिंक्रोनस SYN स्कैनिंग करता है — यानी पैकेट भेजने और रिसीव करने का काम अलग-अलग थ्रेड्स में होता है। यह टूल बग बाउंटी हंटर्स, सिक्योरिटी रिसर्चर्स, और नेटवर्क एडमिनिस्ट्रेटर्स के लिए बहुत उपयोगी है। बड़े नेटवर्क ब्लॉक्स जैसे /8 (16 मिलियन IPs) या /16 (65,000 IPs) को मिनट्स में स्कैन कर सकता है।
      </p>
      <p>
        Masscan की आर्किटेक्चर बहुत इंटरेस्टिंग है — यह Linux के डिफ़ॉल्ट नेटवर्क स्टैक का इस्तेमाल नहीं करता। इसकी जगह यह अपना कस्टम TCP/IP इम्प्लीमेंटेशन लिखता है जो सीधे नेटवर्क इंटरफेस से पैकेट्स भेजता है। इससे कर्नेल का ओवरहेड नहीं होता और स्पीड बहुत बढ़ जाती है। यह टूल C भाषा में लिखा गया है और Linux, macOS, और Windows पर चलता है।
      </p>
      <p>
        Masscan न सिर्फ पोर्ट्स स्कैन करता है बल्कि बैनर ग्रैबिंग भी कर सकता है। HTTP headers, SSH versions, FTP banners, SMTP greetings — सब कुछ निकाल सकता है। बाइनरी आउटपुट फॉर्मेट सपोर्ट करता है जिससे बड़े स्कैन्स को पॉज़ और रिज़्यूम कर सकते हो। JSON, XML, और grepable फॉर्मेट्स भी सपोर्ट करता है जिससे रिजल्ट्स को दूसरे टूल्स में इम्पोर्ट करना आसान होता है।
      </p>
      <p>
        Masscan का इस्तेमाल Shodan, Censys, और BinaryEdge जैसे इंटरनेट स्कैनिंग प्रोजेक्ट्स ने भी किया है। यह टूल इंटरनेट की पूरी मैपिंग करने में सक्षम है — कौन से पोर्ट्स ओपन हैं, कौन सी सर्विसेज़ चल रही हैं, कहाँ वल्नरेबिलिटीज़ हैं। हालांकि, Nmap जितना डिटेल्ड नहीं देता — सर्विस डिटेक्शन और NSE स्क्रिप्ट्स नहीं हैं, इसलिए Masscan और Nmap को साथ में इस्तेमाल करना सबसे अच्छा वर्कफ़्लो है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Masscan केवल अधिकृत सुरक्षा परीक्षण और शोध के लिए उपयोग करें। बिना अनुमति के इंटरनेट-वाइड स्कैनिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क स्कैनिंग अपराध हो सकता है — 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है।
      </div>

      <h2>History of Masscan</h2>
      <p>
        Masscan को Robert David Graham ने 2013 में बनाया था। Robert एक प्रसिद्ध सिक्योरिटी रिसर्चर हैं जिन्होंने पहले भी कई नेटवर्किंग टूल्स बनाए हैं — जैसे scanrand, जो 1990s में ही असिंक्रोनस स्कैनिंग करता था। Masscan बनाने का उद्देश्य था कि इंटरनेट-वाइड स्कैनिंग को तेज़ और आसान बनाया जाए।
      </p>
      <p>
        2014 में इसमें बैनर ग्रैबिंग जोड़ी गई जिससे सर्विस वर्जन पता चलता है। 2015 में IPv6 सपोर्ट आया जो इसे भविष्य के लिए तैयार बनाता है। 2017 में UDP स्कैनिंग सपोर्ट जोड़ा गया। 2019 में बेहतर एडेप्टिव रेट कंट्रोल आया जो नेटवर्क कंडीशंस के हिसाब से रेट एडजस्ट करता है। आज GitHub पर 23,000+ स्टार्स के साथ यह सबसे पॉपुलर पोर्ट स्कैनर्स में से एक है।
      </p>
      <p>
        Masscan का नाम "Mass Scanner" से आया है — यह मास (बड़े पैमाने पर) स्कैनिंग करता है। Robert Graham ने इसे C भाषा में लिखा है और इसका कोड बहुत ऑप्टिमाइज़्ड है। यह टूल Shodan और Censys जैसे इंटरनेट स्कैनिंग प्रोजेक्ट्स को भी प्रेरित करता है। Black Hat और DEF CON conferences में इसे कई बार प्रदर्शित किया गया है।
      </p>

      <h2>How Masscan Works?</h2>
      <p>
        Masscan का काम करने का तरीका बहुत यूनीक है — यह Linux के डिफ़ॉल्ट नेटवर्क स्टैक को बायपास करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">कस्टम TCP/IP स्टैक:</strong> Linux कर्नेल के बजाय अपना TCP/IP इम्प्लीमेंटेशन इस्तेमाल करता है — कर्नेल ओवरहेड नहीं</li>
        <li><strong className="text-white">रॉ सॉकेट्स:</strong> सीधे नेटवर्क इंटरफेस से पैकेट्स भेजता है — libpcap से रिसीव करता है</li>
        <li><strong className="text-white">असिंक्रोनस स्कैनिंग:</strong> पैकेट भेजने और रिसीव करने अलग-अलग थ्रेड्स में — पैरेलल प्रोसेसिंग</li>
        <li><strong className="text-white">एडेप्टिव रेट कंट्रोल:</strong> नेटवर्क कंडीशंस के हिसाब से रेट एडजस्ट करता है</li>
        <li><strong className="text-white">शफ़ल्ड स्कैनिंग:</strong> IP एड्रेसेज़ को रैंडम ऑर्डर में स्कैन करता है — IDS से बचने के लिए</li>
        <li><strong className="text-white">बाइनरी आउटपुट:</strong> रिजल्ट्स को बाइनरी फॉर्मेट में सेव करता है — बाद में रिज़्यूम कर सकते हो</li>
        <li><strong className="text-white">मल्टी-प्रोटोकॉल:</strong> TCP SYN, TCP ACK, UDP — तीनों तरह के स्कैन सपोर्ट</li>
        <li><strong className="text-white">NIC बाइंडिंग:</strong> स्पेसिफिक नेटवर्क इंटरफेस से बाइंड कर सकता है</li>
      </ul>
      <p>
        Masscan का इंटरनल आर्किटेक्चर बहुत ऑप्टिमाइज़्ड है — यह एक ही थ्रेड में पैकेट भेजता और रिसीव करता है। यह ring buffer यूज़ करता है जो मेमोरी allocation को minimize करता है। बड़े स्कैन्स के लिए यह बहुत ज़रूरी है क्योंकि मिलियन्स of packets handle करने होते हैं। Masscan का TCP/IP stack connection tracking नहीं करता — सिर्फ SYN भेजता है और SYN-ACK रिसीव करता है। इससे मेमोरी usage बहुत कम रहता है।
      </p>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Masscan उपलब्ध है। अगर किसी कारण से नहीं है तो कई तरीकों से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="Masscan इंस्टॉलेशन"
        code={`# काली लिनक्स/नेटहंटर में:
sudo apt update
sudo apt install masscan

# वर्जन चेक:
masscan --version

# सोर्स से बिल्ड (नवीनतम वर्जन):
git clone https://github.com/robertdavidgraham/masscan.git
cd masscan
make -j
sudo make install

# Docker से:
docker run --net=host -it masscan masscan --version

# सहायता:
masscan --help

# डिपेंडेंसी:
# Linux, macOS, Windows — सब पर चलता है
# root/Sudo ज़रूरी — रॉ सॉकेट्स के लिए
# libpcap — पैकेट कैप्चर के लिए (Linux में बिल्ट-इन)`}
      />

      <h2>Basic Usage</h2>
      <p>
        Masscan का बेसिक इस्तेमाल बहुत आसान है — टार्गेट IP या रेंज दो और पोर्ट्स बताओ।
      </p>
      <CodeBlock
        title="बेसिक स्कैन"
        code={`# सिंगल IP स्कैन:
sudo masscan 192.168.1.1 -p 80,443

# /24 रेंज स्कैन (256 IPs):
sudo masscan 192.168.1.0/24 -p 80,443

# /16 रेंज स्कैन (65,536 IPs):
sudo masscan 10.0.0.0/16 -p 80

# सभी पोर्ट्स (0-65535):
sudo masscan 192.168.1.0/24 -p 0-65535

# टॉप 100 पोर्ट्स:
sudo masscan 192.168.1.0/24 --top-ports 100

# कई पोर्ट्स:
sudo masscan 192.168.1.0/24 -p 22,80,443,8080,8443

# IP लिस्ट फाइल:
sudo masscan -iL targets.txt -p 80,443

# रेट सेट करके:
sudo masscan 192.168.1.0/24 -p 80 --rate 10000

# बैनर ग्रैब के साथ:
sudo masscan 192.168.1.0/24 -p 22,80,443 --banners

# JSON आउटपुट:
sudo masscan 192.168.1.0/24 -p 80 -oJ scan.json`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">पोर्ट(s) स्पेसिफाई</td><td className="py-2 px-3 font-mono text-xs">-p 80,443</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--rate</td><td className="py-2 px-3">पैकेट्स प्रति सेकंड</td><td className="py-2 px-3 font-mono text-xs">--rate 10000</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--top-ports</td><td className="py-2 px-3">टॉप N पोर्ट्स स्कैन करें</td><td className="py-2 px-3 font-mono text-xs">--top-ports 1000</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-oB</td><td className="py-2 px-3">बाइनरी आउटपुट (resume करने योग्य)</td><td className="py-2 px-3 font-mono text-xs">-oB scan.bin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-oL</td><td className="py-2 px-3">लिस्ट टेक्स्ट आउटपुट</td><td className="py-2 px-3 font-mono text-xs">-oL results.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-oJ</td><td className="py-2 px-3">JSON आउटपुट</td><td className="py-2 px-3 font-mono text-xs">-oJ scan.json</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-oX</td><td className="py-2 px-3">XML आउटपुट</td><td className="py-2 px-3 font-mono text-xs">-oX scan.xml</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-oG</td><td className="py-2 px-3">Grepable आउटपुट</td><td className="py-2 px-3 font-mono text-xs">-oG scan.grep</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--banners</td><td className="py-2 px-3">बैनर ग्रैब (सर्विस वर्जन)</td><td className="py-2 px-3 font-mono text-xs">--banners</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--source-port</td><td className="py-2 px-3">सोर्स पोर्ट स्पूफ</td><td className="py-2 px-3 font-mono text-xs">--source-port 61000</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e</td><td className="py-2 px-3">नेटवर्क इंटरफेस स्पेसिफाई</td><td className="py-2 px-3 font-mono text-xs">-e eth0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-iL</td><td className="py-2 px-3">IP लिस्ट फाइल</td><td className="py-2 px-3 font-mono text-xs">-iL targets.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--exclude</td><td className="py-2 px-3">IP/रेंज एक्सक्लूड करें</td><td className="py-2 px-3 font-mono text-xs">--exclude 192.168.1.1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--excludefile</td><td className="py-2 px-3">एक्सक्लूड लिस्ट फाइल</td><td className="py-2 px-3 font-mono text-xs">--excludefile exclude.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--resume</td><td className="py-2 px-3">पॉज़्ड स्कैन रिज़्यूम करें</td><td className="py-2 px-3 font-mono text-xs">--resume scan.bin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--retries</td><td className="py-2 px-3">पैकेट रीट्राई काउंट</td><td className="py-2 px-3 font-mono text-xs">--retries 2</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--adapter-ip</td><td className="py-2 px-3">सोर्स IP सेट करें</td><td className="py-2 px-3 font-mono text-xs">--adapter-ip 10.0.0.1</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--open-only</td><td className="py-2 px-3">सिर्फ ओपन पोर्ट्स दिखाएं</td><td className="py-2 px-3 font-mono text-xs">--open-only</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Port Scanning Techniques</h2>
      <p>
        Masscan विभिन्न तरीकों से पोर्ट्स स्कैन कर सकता है — सिंगल पोर्ट, रेंज, या टॉप पोर्ट्स।
      </p>
      <CodeBlock
        title="पोर्ट स्कैनिंग तकनीकें"
        code={`# सिंगल पोर्ट:
sudo masscan 192.168.1.0/24 -p 80

# कई पोर्ट्स:
sudo masscan 192.168.1.0/24 -p 22,80,443,3306,8080

# पोर्ट रेंज:
sudo masscan 192.168.1.0/24 -p 1-1024

# सभी पोर्ट्स:
sudo masscan 192.168.1.0/24 -p 0-65535

# टॉप N पोर्ट्स (Nmap फ़्रीक्वेंसी डेटा):
sudo masscan 192.168.1.0/24 --top-ports 100
sudo masscan 192.168.1.0/24 --top-ports 1000

# TCP और UDP दोनों:
sudo masscan 192.168.1.0/24 -p U:53,67,68,161 T:22,80,443

# सिर्फ ओपन पोर्ट्स:
sudo masscan 192.168.1.0/24 -p 80,443 --open-only

# TCP SYN scan (डिफ़ॉल्ट):
sudo masscan 192.168.1.0/24 -p 80 --rate 10000

# TCP ACK scan (फ़ायरवॉल टेस्ट):
sudo masscan 192.168.1.0/24 -p 80 --rate 1000 -sA`}
      />

      <h2>Banner Grabbing</h2>
      <p>
        Masscan बैनर ग्रैबिंग कर सकता है जिससे सर्विस वर्जन पता चलता है।
      </p>
      <CodeBlock
        title="बैनर ग्रैबिंग"
        code={`# बैनर ग्रैब इनेबल:
sudo masscan 192.168.1.0/24 -p 80,443 --banners

# HTTP बैनर (वर्जन, हेडर्स):
sudo masscan 192.168.1.0/24 -p 80 --banners --http-user-agent "Mozilla/5.0"

# SSH बैनर:
sudo masscan 192.168.1.0/24 -p 22 --banners

# FTP बैनर:
sudo masscan 192.168.1.0/24 -p 21 --banners

# SMTP बैनर:
sudo masscan 192.168.1.0/24 -p 25 --banners

# बैनर के साथ JSON आउटपुट:
sudo masscan 192.168.1.0/24 -p 80,443 --banners -oJ banners.json

# कस्टम HTTP रिक्वेस्ट:
sudo masscan 192.168.1.0/24 -p 80 --banners --http-method GET --http-uri /api/version

# बैनर से वर्जन निकालना:
# HTTP: Server header से Apache/Nginx version
# SSH: SSH-2.0-OpenSSH_8.9p1
# FTP: 220 ProFTPD 1.3.7
# SMTP: 220 mail.example.com ESMTP Postfix`}
      />

      <h2>Rate Limiting and Speed Control</h2>
      <p>
        Masscan की स्पीड को रेट लिमिटिंग से कंट्रोल किया जा सकता है। सही रेट चुनना बहुत ज़रूरी है।
      </p>
      <CodeBlock
        title="रेट कंट्रोल"
        code={`# डिफ़ॉल्ट रेट: 100 पैकेट्स/सेकंड (धीमा, सुरक्षित)
sudo masscan 192.168.1.0/24 -p 80

# मीडियम रेट (1,000 pps):
sudo masscan 192.168.1.0/24 -p 80 --rate 1000

# फ़ास्ट रेट (10,000 pps):
sudo masscan 192.168.1.0/24 -p 80 --rate 10000

# बहुत तेज़ (100,000 pps — सावधान!):
sudo masscan 192.168.1.0/24 -p 80 --rate 100000

# अल्ट्रा फ़ास्ट (1,000,000 pps — केवल लोकल नेटवर्क):
sudo masscan 192.168.1.0/24 -p 80 --rate 1000000

# रेट गाइड:
# 100-1000 pps   → सुरक्षित, IDS friendly
# 1000-10000 pps → तेज़, कुछ अलर्ट्स हो सकते हैं
# 10000-100000   → बहुत तेज़, नेटवर्क कंजेशन
# 100000+        → लोकल नेटवर्क या dedicated interface

# रीट्राई कंट्रोल:
sudo masscan 192.168.1.0/24 -p 80 --rate 10000 --retries 0
# retries=0 → जो मिल गया वो मिल गया, दोबारा न भेजो

# एडेप्टिव रेट (ऑटो एडजस्ट):
sudo masscan 192.168.1.0/24 -p 80 --rate 10000 --retries 2`}
      />

      <h2>Output Formats</h2>
      <p>
        Masscan कई आउटपुट फॉर्मेट्स सपोर्ट करता है — हर फॉर्मेट का अपना उपयोग है।
      </p>
      <CodeBlock
        title="आउटपुट फॉर्मेट्स"
        code={`# बाइनरी (सबसे छोटा, resume करने योग्य):
sudo masscan 192.168.1.0/24 -p 80 -oB scan.bin

# लिस्ट (सादा टेक्स्ट):
sudo masscan 192.168.1.0/24 -p 80 -oL scan.txt

# JSON (प्रोग्रामेटिक यूज़):
sudo masscan 192.168.1.0/24 -p 80 -oJ scan.json

# XML (Nmap-कम्पैटिबल):
sudo masscan 192.168.1.0/24 -p 80 -oX scan.xml

# Grepable (grep/awk के लिए):
sudo masscan 192.168.1.0/24 -p 80 -oG scan.grep

# बाइनरी फाइल को टेक्स्ट में कन्वर्ट:
masscan --read scan.bin -oL converted.txt

# पॉज़्ड स्कैन रिज़्यूम:
sudo masscan --resume scan.bin

# कई फॉर्मेट्स एक साथ:
sudo masscan 192.168.1.0/24 -p 80 -oB scan.bin -oL scan.txt -oJ scan.json

# stdout पर (पाइपिंग):
sudo masscan 192.168.1.0/24 -p 80 -oL - | grep "open"`}
      />

      <h2>Exclude and Include Lists</h2>
      <CodeBlock
        title="एक्सक्लूड ऑप्शंस"
        code={`# सिंगल IP एक्सक्लूड:
sudo masscan 192.168.1.0/24 -p 80 --exclude 192.168.1.1

# रेंज एक्सक्लूड:
sudo masscan 10.0.0.0/8 -p 80 --exclude 10.0.0.0/16

# कई IPs एक्सक्लूड:
sudo masscan 192.168.1.0/24 -p 80 --exclude 192.168.1.1,192.168.1.254

# एक्सक्लूड फाइल:
echo "192.168.1.1" > exclude.txt
echo "10.0.0.0/8" >> exclude.txt
sudo masscan 192.168.1.0/24 -p 80 --excludefile exclude.txt

# RFC 1918 प्राइवेट रेंजेज़ एक्सक्लूड (इंटरनेट स्कैन):
sudo masscan 0.0.0.0/0 -p 80 --exclude 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16

# IP लिस्ट फाइल:
echo "192.168.1.1" > targets.txt
echo "192.168.1.100" >> targets.txt
sudo masscan -iL targets.txt -p 80,443`}
      />

      <h2>Masscan + Nmap Combo Workflow</h2>
      <p>
        Masscan और Nmap को साथ में इस्तेमाल करना सबसे अच्छा वर्कफ़्लो है। Masscan से तेज़ी से ओपन पोर्ट्स ढूंढो, फिर Nmap से डिटेल्ड स्कैन करो।
      </p>
      <CodeBlock
        title="Masscan + Nmap वर्कफ़्लो"
        code={`# स्टेप 1: Masscan से तेज़ स्कैन — ओपन पोर्ट्स ढूंढें:
sudo masscan 192.168.1.0/24 -p 1-65535 --rate 5000 -oL open_ports.txt

# स्टेप 2: Nmap से डिटेल्ड स्कैन — सर्विसेज़ डिटेक्ट करें:
nmap -sV -sC -iL open_ports.txt -oA detailed_scan

# स्टेप 3: स्क्रिप्ट्स से वल्नरेबिलिटी चेक:
nmap --script vuln -iL open_ports.txt -oA vuln_scan

# Masscan तेज़ है लेकिन सर्विस डिटेक्ट नहीं करता
# Nmap धीमा है लेकिन डिटेल्ड इन्फो देता है
# दोनों कॉम्बो सबसे अच्छा है!`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Masscan + Nmap ऑटोमेशन"
        code={`#!/bin/bash
# Masscan + Nmap ऑटोमेशन स्क्रिप्ट

TARGET="192.168.1.0/24"
RATE=5000
OUTPUT_DIR="scan_results"

mkdir -p $OUTPUT_DIR

echo "[+] Masscan शुरू हो रहा है..."
sudo masscan $TARGET -p 1-65535 --rate $RATE -oL "$OUTPUT_DIR/masscan_results.txt"

echo "[+] ओपन पोर्ट्स निकाले जा रहे हैं..."
grep "open" "$OUTPUT_DIR/masscan_results.txt" | awk '{print $4}' | sort -u > "$OUTPUT_DIR/open_hosts.txt"

echo "[+] Nmap डिटेल्ड स्कैन..."
nmap -sV -sC -iL "$OUTPUT_DIR/open_hosts.txt" -oA "$OUTPUT_DIR/nmap_detailed"

echo "[+] स्कैन पूरा! रिजल्ट्स: $OUTPUT_DIR/"`}
      />

      <CodeBlock
        title="Python स्क्रिप्ट — JSON पार्सिंग"
        code={`#!/usr/bin/env python3
# Masscan JSON आउटपुट पार्स करें

import json

# JSON आउटपुट पार्स:
with open('scan.json', 'r') as f:
    data = json.load(f)

open_ports = {}
for entry in data:
    ip = entry['ip']
    port = entry['ports'][0]['port']
    proto = entry['ports'][0]['proto']
    if ip not in open_ports:
        open_ports[ip] = []
    open_ports[ip].append(f"{port}/{proto}")

# रिजल्ट्स प्रिंट:
for ip, ports in sorted(open_ports.items()):
    print(f"{ip}: {', '.join(ports)}")

# Nmap कमांड जनरेट:
for ip, ports in sorted(open_ports.items()):
    port_list = ','.join([p.split('/')[0] for p in ports])
    print(f"nmap -sV -sC -p {port_list} {ip}")`}
      />

      <CodeBlock
        title="बैश स्क्रिप्ट — बल्क स्कैन"
        code={`#!/bin/bash
# कई नेटवर्क ब्लॉक्स स्कैन करें

TARGETS="targets.txt"  # हर लाइन: CIDR रेंज
PORTS="22,80,443,3306,8080,8443"
RATE=10000
OUTPUT="bulk_results"

mkdir -p $OUTPUT

while IFS= read -r target; do
  echo "[+] स्कैनिंग: $target"
  filename=$(echo $target | tr '/' '_')
  sudo masscan $target -p $PORTS --rate $RATE -oJ "$OUTPUT/$filename.json"
  echo "[+] पूरा: $filename"
done < "$TARGETS"

# सभी JSON रिजल्ट्स मर्ज करें:
echo "[" > "$OUTPUT/all_results.json"
for f in $OUTPUT/*.json; do
  cat "$f" >> "$OUTPUT/all_results.json"
done
echo "]" >> "$OUTPUT/all_results.json"`}
      />

      <h2>Masscan vs Nmap vs Zmap vs Unicornscan</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Masscan</th>
              <th className="text-left py-2 px-3 text-neon-green">Nmap</th>
              <th className="text-left py-2 px-3 text-neon-green">Zmap</th>
              <th className="text-left py-2 px-3 text-neon-green">Unicornscan</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्पीड</td><td className="py-2 px-3">10M pps</td><td className="py-2 px-3">10K pps</td><td className="py-2 px-3">1.4M pps</td><td className="py-2 px-3">मीडियम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">सर्विस डिटेक्ट</td><td className="py-2 px-3">बेसिक (बैनर)</td><td className="py-2 px-3">फुल (-sV)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">बेसिक</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्क्रिप्ट्स</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">NSE स्क्रिप्ट्स</td><td className="py-2 px-3">प्रोब मॉड्यूल्स</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">OS डिटेक्ट</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सीमित</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">UDP</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">IPv6</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">रिज़्यूम</td><td className="py-2 px-3">हाँ (बाइनरी)</td><td className="py-2 px-3">हाँ (XML)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कस्टम TCP/IP</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं (कर्नेल)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white">बेस्ट फॉर</td><td className="py-2 px-3">लार्ज स्केल स्कैन</td><td className="py-2 px-3">डिटेल्ड स्कैन</td><td className="py-2 px-3">रिसर्च स्कैन</td><td className="py-2 px-3">फ़्लेक्सिबल स्कैन</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'रूट प्रिविलेज चाहिए — Permission denied', a: 'Masscan रॉ सॉकेट्स इस्तेमाल करता है इसलिए root चाहिए। हमेशा sudo से चलाएं: sudo masscan 192.168.1.0/24 -p 80' },
          { q: 'नेटवर्क कंजेशन हो रहा है', a: 'रेट कम करें — --rate 1000 से शुरू करें। लोकल नेटवर्क पर --rate 10000 ठीक है, इंटरनेट पर --rate 1000 से ज़्यादा न करें।' },
          { q: 'पैकेट्स लॉस हो रहे हैं', a: 'NIC (नेटवर्क कार्ड) लिमिटेशन हो सकती है। रेट कम करें। अलग नेटवर्क इंटरफेस try करें। --retries 0 से retries बंद करें।' },
          { q: 'स्कैन रिज़्यूम नहीं हो रहा', a: 'केवल बाइनरी आउटपुट (-oB) resume कर सकते हैं। टेक्स्ट/JSON/XML resume नहीं होते। --resume scan.bin कमांड यूज़ करें।' },
          { q: 'अलर्ट्स आ रहे हैं — IDS ने डिटेक्ट किया', a: 'रेट कम करें। --source-port स्पूफ करें। --adapter-ip और --adapter-mac भी सेट करें। शफ़ल्ड स्कैनिंग डिफ़ॉल्ट है।' },
          { q: 'बहुत धीमा स्कैन हो रहा है', a: 'डिफ़ॉल्ट रेट 100 pps है — --rate 10000 सेट करें। नेटवर्क इंटरफेस चेक करें। --retries 0 से retries बंद करें।' },
          { q: 'बैनर नहीं आ रहे', a: '--banners फ़्लैग ज़रूरी है। फ़ायरवॉल बैनर रिक्वेस्ट ब्लॉक कर सकता है। --rate कम करें।' },
          { q: 'इंटरफेस नहीं मिल रहा', a: '-e eth0 से इंटरफेस स्पेसिफाई करें। ifconfig या ip a से इंटरफेस नेम चेक करें।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Masscan स्कैन कैसे डिटेक्ट और ब्लॉक करें:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">IDS/IPS:</strong> Snort या Suricata से Masscan के SYN फ्लड pattern डिटेक्ट करें — बहुत सारे पोर्ट्स पर एक साथ SYN</li>
        <li><strong className="text-white">रेट लिमिटिंग:</strong> फ़ायरवॉल पर SYN रेट लिमिट लगाएं — एक IP से बहुत ज़्यादा SYN ब्लॉक करें</li>
        <li><strong className="text-white">पोर्ट नॉइज़ डिटेक्शन:</strong> बहुत सारे पोर्ट्स पर एक साथ SYN — Masscan का signature है</li>
        <li><strong className="text-white">हनीपॉट:</strong> हनीपॉट लगाएं — Masscan स्कैनर फँसेंगे</li>
        <li><strong className="text-white">नेटवर्क सेगमेंटेशन:</strong> क्रिटिकल सिस्टम्स को अलग VLAN में रखें</li>
        <li><strong className="text-white">लॉग मॉनिटरिंग:</strong> फ़ायरवॉल लॉग्स में अन्योन्याश्रित SYN patterns देखें</li>
        <li><strong className="text-white">GeoIP ब्लॉकिंग:</strong> अनजान देशों से आने वाले ट्रैफ़िक को ब्लॉक करें</li>
        <li><strong className="text-white">SYN Cookies:</strong> कर्नेल SYN cookies इनेबल करें — SYN फ्लड से बचाव</li>
        <li><strong className="text-white">कनेक्शन लिमिट:</strong> प्रति IP कनेक्शन लिमिट सेट करें</li>
        <li><strong className="text-white">पोर्ट नॉइज़ स्कोरिंग:</strong> हर IP का "पोर्ट नॉइज़ स्कोर" कैलकुलेट करें — ज़्यादा पोर्ट्स = स्कैनर</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Masscan practice के लिए safe lab environment setup करना ज़रूरी है। Multiple VMs और practice targets से scanning techniques develop कर सकते हो।
      </p>
      <CodeBlock
        title="Complete Lab Setup"
        code={`# VirtualBox/Vmware में lab:

# 1. Kali Linux VM (attacker):
sudo apt install masscan nmap

# 2. Metasploitable VM (target):
# https://sourceforge.net/projects/metasploitable/
# Multiple open ports for practice

# 3. Ubuntu VM (custom services):
sudo apt install apache2 openssh-server vsftpd

# Network: Host-Only Adapter (192.168.56.0/24)

# Practice workflow:
sudo masscan 192.168.56.0/24 --top-ports 100 --rate 1000
sudo masscan 192.168.56.0/24 -p 0-65535 --rate 5000 -oB full.bin
sudo masscan 192.168.56.0/24 -p 22,80,21 --banners -oJ banners.json

# इंटरनेट स्कैन कभी न करें!
# केवल अपने लैब में प्रैक्टिस करें`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड Masscan"
        code={`# IPv6 स्कैनिंग:
sudo masscan ::ffff:192.168.1.0/120 -p 80

# UDP स्कैनिंग:
sudo masscan 192.168.1.0/24 -p U:53,67,68,161,162,500,514

# कस्टम सोर्स IP/MAC:
sudo masscan 192.168.1.0/24 -p 80 --adapter-ip 192.168.1.100 --adapter-mac 00:11:22:33:44:55

# एडेप्टिव स्कैन (ऑटो रेट एडजस्ट):
sudo masscan 192.168.1.0/24 -p 80 --rate 10000 --retries 2

# कस्टम HTTP रिक्वेस्ट (banner grabbing):
sudo masscan 192.168.1.0/24 -p 80 --banners --http-method GET --http-uri / --http-user-agent "Mozilla/5.0"

# पैरेलल स्कैन (कई इंटरफेस):
sudo masscan 192.168.1.0/24 -p 80 -e eth0 &
sudo masscan 10.0.0.0/24 -p 80 -e eth1 &

# इंटरनेट-वाइड स्कैन (केवल अधिकृत!):
sudo masscan 0.0.0.0/0 -p 80 --rate 100 --excludefile exclude.txt -oB internet.bin

# बाइनरी से विभिन्न फॉर्मेट्स में कन्वर्ट:
masscan --read scan.bin -oL scan.txt
masscan --read scan.bin -oJ scan.json
masscan --read scan.bin -oX scan.xml`}
      />

      <h2>Advanced Scanning Strategies</h2>
      <p>
        Large-scale reconnaissance में Masscan को strategically use करना ज़रूरी है। Random scanning से better results नहीं मिलते — targeted approach ज़्यादा effective है।
      </p>
      <CodeBlock
        title="Tiered Scanning Strategy"
        code={`# Tier 1: Quick sweep — top ports, high rate
sudo masscan 10.0.0.0/8 --top-ports 20 --rate 50000 -oB tier1.bin

# Tier 2: Full port scan on live hosts
masscan --read tier1.bin -oL live_hosts.txt
sudo masscan -iL live_hosts.txt -p 0-65535 --rate 10000 -oB tier2.bin

# Tier 3: Banner grab on open ports
masscan --read tier2.bin -oL open_ports.txt
sudo masscan -iL open_ports.txt -p $(cat open_ports.txt | awk '{print $3}' | sort -u | tr '\\n' ',') --banners --rate 5000 -oJ tier3.json

# Benefits:
# - Fast initial discovery
# - Detailed follow-up only on live hosts
# - Banner grabbing on confirmed open ports
# - Resource efficient`}
      />
      <CodeBlock
        title="Cloud Infrastructure Scanning"
        code={`# AWS IP ranges scan:
# https://ip-ranges.amazonaws.com/ip-ranges.json से ranges download करो

# AWS range scan (authorized only!):
sudo masscan 52.0.0.0/8 -p 22,80,443,3389,8080 --rate 1000 -oJ aws_scan.json

# Azure ranges:
# https://www.microsoft.com/en-us/download/details.aspx?id=56519

# GCP ranges:
# https://www.gstatic.com/ipranges/cloud.json

# Cloud service detection:
# SSH banners → EC2 instance types
# HTTP headers → CloudFront, S3, Azure Blob
# TLS certificates → *.amazonaws.com, *.azurewebsites.net

# Warning: केवल authorized targets scan करें!
# Cloud providers IDS detect करते हैं mass scanning`}
      />

      <h2>Firewall and IDS Evasion</h2>
      <p>
        Masscan की built-in evasion features से firewall और IDS bypass करने की कोशिश कर सकते हो:
      </p>
      <CodeBlock
        title="Evasion Techniques"
        code={`# Source port spoofing (DNS port):
sudo masscan 192.168.1.0/24 -p 80 --source-port 53

# Custom source IP:
sudo masscan 192.168.1.0/24 -p 80 --adapter-ip 192.168.1.200

# Shuffled scanning (default है):
# IPs random order में scan होते हैं
sudo masscan 192.168.1.0/24 -p 80 --rate 1000

# Slow rate (IDS friendly):
sudo masscan 192.168.1.0/24 -p 80 --rate 100 --retries 1

# Exclude honeypots:
sudo masscan 192.168.1.0/24 -p 80 --exclude 192.168.1.100

# Fragment packets (some firewalls):
# Masscan doesn't support fragmentation natively
# Use iptables instead:
sudo iptables -A OUTPUT -p tcp --tcp-flags SYN SYN -m length --length 40 -j NFQUEUE

# Multiple source ports:
sudo masscan 192.168.1.0/24 -p 80 --source-port 0
# Random source port each time`}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        Masscan को दूसरे tools के साथ integrate करके complete reconnaissance pipeline बना सकते हो:
      </p>
      <CodeBlock
        title="Masscan + httpx + Nuclei Pipeline"
        code={`#!/bin/bash
# Complete recon pipeline

TARGET="192.168.1.0/24"
OUTDIR="recon_$(date +%Y%m%d)"
mkdir -p $OUTDIR

# Step 1: Masscan — port discovery
echo "[1/4] Port scanning..."
sudo masscan $TARGET -p 80,443,8080,8443 --rate 10000 -oL "$OUTDIR/ports.txt"

# Step 2: httpx — HTTP service detection
echo "[2/4] HTTP detection..."
cat "$OUTDIR/ports.txt" | awk '{print $4}' | sort -u | httpx -silent > "$OUTDIR/http_services.txt"

# Step 3: Nuclei — vulnerability scanning
echo "[3/4] Vulnerability scanning..."
nuclei -l "$OUTDIR/http_services.txt" -t cves/ -o "$OUTDIR/vulns.txt"

# Step 4: Report
echo "[4/4] Report:"
echo "Open ports: $(wc -l < "$OUTDIR/ports.txt")"
echo "HTTP services: $(wc -l < "$OUTDIR/http_services.txt")"
echo "Vulnerabilities: $(wc -l < "$OUTDIR/vulns.txt")"`}
      />
      <CodeBlock
        title="Masscan + Shodan Correlation"
        code={`#!/bin/bash
# Masscan results + Shodan data correlation

# Step 1: Masscan scan
sudo masscan 192.168.1.0/24 -p 22,80,443 --banners -oJ masscan.json

# Step 2: Shodan lookup (API key चाहिए):
# pip install shodan
# shodan init YOUR_API_KEY

# Step 3: Python correlation script
python3 << 'EOF'
import json, shodan

api = shodan.Shodan("YOUR_API_KEY")

with open("masscan.json") as f:
    data = json.load(f)

for entry in data:
    ip = entry["ip"]
    try:
        host = api.host(ip)
        print(f"{ip}: {host['os']}, Ports: {host['ports']}")
    except:
        print(f"{ip}: Not in Shodan database")
EOF`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Masscan को maximum performance पर run करने के लिए system-level optimizations ज़रूरी हैं:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">NIC Selection:</strong> Dedicated network interface use करो — management traffic अलग रखो। 10Gbps NIC best performance देता है</li>
        <li><strong className="text-white">Ring Buffer:</strong> NIC ring buffer size increase करो: ethtool -G eth0 4096 — packet loss कम होगा</li>
        <li><strong className="text-white">IRQ Affinity:</strong> Network interrupts specific CPU cores पर pin करो — performance consistent रहेगी</li>
        <li><strong className="text-white">Huge Pages:</strong> Memory management optimize करो — sysctl vm.nr_hugepages=1024</li>
        <li><strong className="text-white">Rate Matching:</strong> Network bandwidth के हिसाब से rate set करो — 1Gbps link पर ~1M pps safe है</li>
        <li><strong className="text-white">Retries:</strong> --retries 0 से speed बढ़ता है — packet loss acceptable हो तो</li>
        <li><strong className="text-white">Exclude File:</strong> --excludefile से unnecessary ranges skip करो — scan time कम होगा</li>
        <li><strong className="text-white">Parallel Instances:</strong> Multiple interfaces से parallel scan करो — aggregate speed बढ़ेगी</li>
      </ul>

      <h2>Reporting and Output Analysis</h2>
      <p>
        Masscan scan results को analyze करने के लिए multiple approaches हैं:
      </p>
      <CodeBlock
        title="Results Analysis Script"
        code={`#!/usr/bin/env python3
# Masscan JSON results analyze करो

import json
from collections import Counter

with open("scan.json") as f:
    data = json.load(f)

# Stats:
total_ips = len(set(e["ip"] for e in data))
total_ports = len(data)
port_counts = Counter()
service_counts = Counter()

for entry in data:
    for port in entry["ports"]:
        port_counts[port["port"]] += 1
        if "service" in port:
            service_counts[port["service"]["name"]] += 1

print(f"Total unique IPs: {total_ips}")
print(f"Total open ports: {total_ports}")
print(f"\\nTop 10 open ports:")
for port, count in port_counts.most_common(10):
    print(f"  Port {port}: {count} hosts")
print(f"\\nTop services:")
for svc, count in service_counts.most_common(10):
    print(f"  {svc}: {count}")

# Nmap commands generate:
with open("nmap_commands.sh", "w") as f:
    for ip in set(e["ip"] for e in data):
        ports = ",".join(str(p["port"]) for e in data if e["ip"]==ip for p in e["ports"])
        f.write(f"nmap -sV -sC -p {ports} {ip}\\n")`}
      />
      <CodeBlock
        title="Binary to CSV Conversion"
        code={`# Binary results to CSV:
masscan --read scan.bin -oL scan.txt

# CSV with timestamps:
awk '{print strftime("%Y-%m-%d %H:%M:%S"), $0}' scan.txt > scan_with_time.csv

# Grepable format analysis:
grep "open" scan.grep | awk -F/ '{print $1}' | sort | uniq -c | sort -rn

# Quick stats:
echo "=== Scan Summary ==="
echo "Total open ports: $(grep -c 'open' scan.txt 2>/dev/null || echo 0)"
echo "Unique hosts: $(awk '{print $4}' scan.txt | sort -u | wc -l)"
echo "Top ports: $(awk '{print $3}' scan.txt | sort | uniq -c | sort -rn | head -5)"`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Masscan real-world security research में extensively use होता है। 2017 में security researcher ने Masscan से पूरी IPv4 space scan करके exposed Elasticsearch clusters ढूंढे — 50,000+ instances मिले जो sensitive data expose कर रहे थे। इस research से companies को अपने databases secure करने में मदद मिली।
      </p>
      <p>
        एक bug bounty hunter ने Masscan + Nuclei combo use करके cloud infrastructure में exposed admin panels ढूंढे। Masscan से /16 range scan करके open ports identify किए, फिर Nuclei से vulnerability confirm की। $10,000+ bounties मिले responsible disclosure से।
      </p>
      <p>
        Incident response team ने Masscan को compromised network scan करने के लिए use किया — attacker के backdoor ports (4444, 5555, 31337) identify करने के लिए। Quick scan से सभी affected machines minutes में मिल गईं जो Nmap से hours लेता।
      </p>

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Masscan vs Nmap — कौन सा बेहतर है?', a: 'दोनों का अलग उपयोग है। Masscan तेज़ है लार्ज स्कैन के लिए, Nmap डिटेल्ड है छोटे स्कैन के लिए। दोनों साथ में इस्तेमाल करो — Masscan से पोर्ट्स ढूंढो, Nmap से डिटेल्ड जानकारी लो।' },
          { q: 'क्या Masscan फ्री है?', a: 'हाँ, Masscan पूरी तरह फ्री और ओपन सोर्स (AGPL) है। GitHub से डाउनलोड कर सकते हो।' },
          { q: 'इंटरनेट स्कैन करना सुरक्षित है?', a: 'नहीं! बिना अनुमति के इंटरनेट स्कैन अवैध है। केवल अपने लैब या अधिकृत टार्गेट्स पर ही स्कैन करें।' },
          { q: 'स्कैन कितनी तेज़ी से होता है?', a: '--rate 1000000 पर पूरी /24 रेंज (256 IPs) सेकंड्स में स्कैन हो जाती है। /8 (16M IPs) मिनट्स में।' },
          { q: 'Masscan Nmap से ज़्यादा तेज़ क्यों है?', a: 'कस्टम TCP/IP स्टैक — कर्नेल को बायपास करता है। असिंक्रोनस I/O — पैरेलल प्रोसेसिंग। C में लिखा — बहुत ऑप्टिमाइज़्ड।' },
          { q: 'Windows पर चलता है?', a: 'हाँ, लेकिन Linux पर बेस्ट काम करता है। Windows पर WinPcap/Npcap चाहिए। macOS पर भी चलता है।' },
          { q: 'क्या Masscan वेबसाइट हैक कर सकता है?', a: 'नहीं! Masscan सिर्फ पोर्ट्स स्कैन करता है — एक्सप्लॉइट नहीं करता। यह रेकन टूल है, अटैक टूल नहीं।' },
          { q: 'Shodan और Masscan में क्या फ़र्क है?', a: 'Masscan आपका खुद का स्कैनर है — आप स्कैन करते हो। Shodan एक सर्विस है जिसने पहले से इंटरनेट स्कैन कर रखा है। दोनों अलग-अलग उपयोग के लिए हैं।' },
          { q: 'IPv6 स्कैन कैसे करें?', a: 'IPv6 supported है: sudo masscan ::ffff:192.168.1.0/120 -p 80। IPv6 ranges बहुत बड़ी हैं इसलिए targeted scanning ज़रूरी है।' },
          { q: 'UDP scanning कैसे करें?', a: 'U: prefix use करो: -p U:53,67,68,161। UDP scanning slower है और false positives ज़्यादा आते हैं। --banners से UDP service detection भी होता है।' },
          { q: 'Scan results कैसे visualize करें?', a: 'JSON output (-oJ) को Python/R से parse करके charts बनाओ। matplotlib या gnuplot use कर सकते हो। CSV convert करके Excel में भी analyze कर सकते हो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        Masscan रियल-वर्ल्ड सिक्योरिटी रिसर्च में बहुत इस्तेमाल होता है। यहाँ कुछ उदाहरण हैं जहाँ Masscan ने अहम भूमिका निभाई:
      </p>
      <p>
        2017 में सिक्योरिटी रिसर्चर Dan Tentler ने Masscan से इंटरनेट पर exposed ICS/SCADA systems ढूंढे — पावर ग्रिड, वॉटर ट्रीटमेंट प्लांट्स, और बिल्डिंग ऑटोमेशन सिस्टम्स publicly accessible थे। इस रिसर्च ने क्रिटिकल इंफ्रास्ट्रक्चर सिक्योरिटी पर बड़ी बहस छेड़ दी। Masscan की स्पीड की वजह से यह स्कैन कुछ ही घंटों में पूरा हो गया।
      </p>
      <p>
        2019 में Masscan + Shodan combo से रिसर्चर्स ने इंटरनेट पर exposed databases ढूंढीं — MongoDB, Elasticsearch, CouchDB instances बिना authentication के publicly accessible थे। लाखों records exposed थे। इस रिसर्च के बाद कई companies ने अपनी databases को secure किया। Masscan से initial discovery हुई, फिर Nmap से detailed verification किया गया।
      </p>
      <p>
        Bug bounty programs में Masscan subdomain enumeration के बाद port scanning के लिए इस्तेमाल होता है। बड़े scope वाले programs (जैसे government domains) में Masscan से पहले सभी open ports ढूंढे जाते हैं, फिर Nuclei, Nmap, और दूसरे tools से vulnerability scanning होता है। Masscan + Nuclei combo बहुत popular workflow है bug bounty में।
      </p>
      <p>
        Censys project (University of Michigan) ने Masscan के concepts का इस्तेमाल करके इंटरनेट की complete map बनाई। यह project SSL certificates, open ports, और running services का database maintain करता है। researchers इस data को use करके vulnerable systems identify करते हैं। Masscan ने internet-wide scanning research को mainstream बनाया।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Masscan अकेले limited है — इसे दूसरे tools के साथ combine करना ज़रूरी है complete assessment के लिए:
      </p>
      <CodeBlock
        title="Masscan + Nmap + Nuclei Complete Pipeline"
        code={`#!/bin/bash
# Complete recon pipeline — Masscan + Nmap + Nuclei

TARGET="$1"
OUTPUT_DIR="recon_$(date +%Y%m%d_%H%M%S)"
mkdir -p $OUTPUT_DIR

echo "[+] Step 1: Masscan — Fast port discovery"
sudo masscan $TARGET -p 1-65535 --rate 10000 -oL "$OUTPUT_DIR/masscan.txt"

echo "[+] Step 2: Extract open ports"
grep "open" "$OUTPUT_DIR/masscan.txt" | awk '{print $3":"$4}' | sort -u > "$OUTPUT_DIR/open_services.txt"

echo "[+] Step 3: Nmap — Detailed service detection"
nmap -sV -sC --min-rate 5000 -iL "$OUTPUT_DIR/open_services.txt" -oA "$OUTPUT_DIR/nmap_detailed"

echo "[+] Step 4: Nuclei — Vulnerability scanning"
cat "$OUTPUT_DIR/open_services.txt" | nuclei -o "$OUTPUT_DIR/nuclei_results.txt"

echo "[+] Step 5: httpx — HTTP service detection"
cat "$OUTPUT_DIR/open_services.txt" | httpx -o "$OUTPUT_DIR/http_services.txt"

echo "[+] Results: $OUTPUT_DIR/"`}
      />
      <CodeBlock
        title="Masscan + Metasploit Integration"
        code={`# Masscan results को Metasploit में import करें:
# Step 1: XML output generate करो
sudo masscan 192.168.1.0/24 -p 22,80,443,445,3389 --rate 5000 -oX masscan.xml

# Step 2: Metasploit में import
msfconsole -q -x "
db_import masscan.xml
hosts
services
exit
"

# Step 3: Vulnerability scanning
msfconsole -q -x "
db_import masscan.xml
services -p 445
use auxiliary/scanner/smb/smb_ms17_010
set RHOSTS file:masscan_targets.txt
run
exit
"`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Masscan की performance optimize करने के लिए कई techniques हैं:
      </p>
      <CodeBlock
        title="Performance Optimization"
        code={`# NIC ring buffer बढ़ाओ (packet loss कम करने के लिए):
sudo ethtool -G eth0 rx 4096 tx 4096

# NIC offloading disable करो:
sudo ethtool -K eth0 rx off tx off gso off gro off tso off

# IRQ affinity set करो (specific CPU core):
echo 2 | sudo tee /proc/irq/IRQ_NUMBER/smp_affinity

# Network buffer size बढ़ाओ:
sudo sysctl -w net.core.rmem_max=134217728
sudo sysctl -w net.core.wmem_max=134217728
sudo sysctl -w net.core.netdev_max_backlog=10000

# Masscan specific tuning:
# --rate सही सेट करो — NIC capacity के हिसाब से
# --retries 0 — fast scan, no retries
# --open-only — सिर्फ open ports report करो
# -e interface — specific NIC specify करो

# 10Gbps NIC पर:
sudo masscan 0.0.0.0/0 -p 80 --rate 1000000 -e eth0 --retries 0`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Masscan के results को analyze करना और report बनाना:
      </p>
      <CodeBlock
        title="Output Analysis Scripts"
        code={`#!/bin/bash
# Masscan results analysis

SCAN_FILE="$1"
echo "=== Masscan Scan Report ==="
echo "Scan file: $SCAN_FILE"
echo ""

# Total open ports count:
echo "Total open ports found:"
grep -c "open" "$SCAN_FILE"

# Unique IPs:
echo "Unique hosts with open ports:"
grep "open" "$SCAN_FILE" | awk '{print $4}' | sort -u | wc -l

# Port distribution:
echo "Port distribution (top 20):"
grep "open" "$SCAN_FILE" | awk '{print $3}' | sort | uniq -c | sort -rn | head -20

# Service distribution:
echo "Service distribution:"
grep "open" "$SCAN_FILE" | awk '{print $5}' | sort | uniq -c | sort -rn

# Generate Nmap commands for detailed scan:
echo "Nmap commands for verification:"
grep "open" "$SCAN_FILE" | awk '{print $4}' | sort -u | while read ip; do
    ports=$(grep "$ip" "$SCAN_FILE" | awk '{print $3}' | paste -sd,)
    echo "nmap -sV -sC -p $ports $ip"
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nmap</td><td className="py-2 px-3">नेटवर्क स्कैनिंग</td><td className="py-2 px-3">सबसे कंप्लीट — सर्विस, OS, NSE</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Zmap</td><td className="py-2 px-3">इंटरनेट स्कैनिंग</td><td className="py-2 px-3">रिसर्च के लिए, 1.4M pps</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Unicornscan</td><td className="py-2 px-3">पोर्ट स्कैनिंग</td><td className="py-2 px-3">फ़्लेक्सिबल, असिंक्रोनस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Naabu</td><td className="py-2 px-3">पोर्ट स्कैनिंग</td><td className="py-2 px-3">Go-based, ProjectDiscovery</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">RustScan</td><td className="py-2 px-3">पोर्ट स्कैनिंग</td><td className="py-2 px-3">Rust-based, Nmap इंटीग्रेशन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nabla</td><td className="py-2 px-3">पोर्ट स्कैनिंग</td><td className="py-2 px-3">Go-based, Masscan जैसा</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Scanrand</td><td className="py-2 px-3">असिंक्रोनस स्कैन</td><td className="py-2 px-3">पुराना लेकिन फ़ास्ट</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">httpx</td><td className="py-2 px-3">HTTP सर्विस डिटेक्शन</td><td className="py-2 px-3">ProjectDiscovery, तेज़</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <br />1. Masscan + Nmap = बेस्ट वर्कफ़्लो — Masscan से पोर्ट्स ढूंढो, Nmap से डिटेल्ड स्कैन करो
        <br />2. हमेशा बाइनरी आउटपुट (-oB) यूज़ करो — स्कैन रिज़्यूम कर सकते हो
        <br />3. --banners फ़्लैग से सर्विस वर्जन भी मिल जाता है
        <br />4. इंटरनेट स्कैन में --rate 1000 से ज़्यादा न करें
        <br />5. --exclude से अपने सर्वर्स को हमेशा एक्सक्लूड करो
        <br />6. JSON आउटपुट (-oJ) प्रोग्रामेटिक प्रोसेसिंग के लिए बेस्ट है
        <br />7. --top-ports से सिर्फ कॉमन पोर्ट्स स्कैन करो — टाइम बचता है
        <br />8. पैरेलल स्कैन — कई इंटरफेस से एक साथ स्कैन करो
        <br />9. Tiered scanning strategy — quick sweep first, detailed scan on live hosts only
        <br />10. NIC ring buffer increase करो (ethtool -G eth0 4096) — packet loss कम होगा
        <br />11. --excludefile से unnecessary ranges skip करो — scan time बचाओ
        <br />12. Cloud IP ranges targeted scan — AWS/Azure/GCP ranges separately scan करो
        <br />13. Shodan + Masscan correlation — comprehensive recon के लिए
        <br />14. Binary output + resume — interrupted scans waste नहीं होंगे
        <br />15. कस्टम seed से reproducible scan order — debugging के लिए useful
        <br />16. --banners + --http-user-agent से stealthy banner grabbing
        <br />17. Parallel interfaces से scan speed double — eth0 + eth1 simultaneously
        <br />18. JSON output jq से parse करो — automated pipelines बनाओ
        <br />19. --seed से reproducible scan order — debugging और verification के लिए
        <br />20. sudo setcap cap_net_raw+ep /usr/bin/masscan — root के बिना चलाओ
        <br />21. --max-rate से absolute speed limit — accidental network flooding रोको
        <br />22. masscan --read scan.bin -oJ - | jq '.[] | .ip' — quick IP extraction
        <br />23. स्कैन से पहले --echo flag से dry-run — क्या स्कैन होगा वो देखो
        <br />24. --rate और --retries का balance — high rate + low retries = fastest scan
        <br />25. बड़े स्कैन्स को chunks में तोड़ो — /8 को /16 में divide करो
        <br />26. masscan --pfring — PF_RING support से और तेज़ scanning
        <br />27. --open-only flag हमेशा यूज़ करो — closed ports skip करो, output छोटा
        <br />28. स्कैन results को timestamped directory में save करो — historical comparison
        <br />29. AWS/Azure में scan करो तो security groups चेक करो — outbound allow होना चाहिए
        <br />30. --adapter-ip spoof करके decoy scanning — multiple source IPs simulate करो
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Masscan एक बहुत शक्तिशाली नेटवर्क स्कैनिंग टूल है। इसका इस्तेमाल केवल अधिकृत सुरक्षा परीक्षण और शोध के लिए करें। बिना अनुमति के इंटरनेट-वाइड स्कैनिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क स्कैनिंग अपराध हो सकता है — 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है। कभी भी बिना लिखित अनुमति के पूरी इंटरनेट स्कैन न करें।
      </div>
    </TutorialLayout>
  )
}
