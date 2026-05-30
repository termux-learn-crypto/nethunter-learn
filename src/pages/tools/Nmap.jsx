import { Link } from 'react-router-dom'
import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Nmap() {
  return (
    <TutorialLayout
      title="nmap"
      subtitle="नेटवर्क एक्सप्लोरेशन और सिक्योरिटी ऑडिटिंग टूल"
      icon="🔍"
      prev={{ to: '/tool/aircrack-ng', label: 'aircrack-ng' }}
      next={{ to: '/tool/metasploit-framework', label: 'metasploit-framework' }}
    >
      <h2>What is Nmap?</h2>
      <p>
        Nmap (Network Mapper) दुनिया का सबसे लोकप्रिय नेटवर्क स्कैनिंग टूल है। इसे Fyodor (Gordon Lyon) ने 1997 में बनाया था और आज यह साइबर सुरक्षा उद्योग का सबसे ज़्यादा इस्तेमाल होने वाला टूल है। Nmap से आप नेटवर्क पर कौन-से डिवाइस हैं, कौन-से पोर्ट्स ओपन हैं, कौन-सी सर्विसेज़ चल रही हैं, और ऑपरेटिंग सिस्टम क्या है — यह सब पता कर सकते हैं।
      </p>
      <p>
        हर पेनेट्रेशन टेस्ट की शुरुआत Nmap से ही होती है। यह रेकन (Reconnaissance) फेज़ का सबसे महत्वपूर्ण टूल है। बिना नेटवर्क की जानकारी के कोई भी अटैक करना संभव नहीं है — और Nmap वह जानकारी देता है। यह फ्री और ओपन सोर्स है और Linux, Windows, Mac सभी पर चलता है। काली नेटहंटर में यह प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        Nmap सिर्फ पोर्ट स्कैनिंग तक सीमित नहीं है। इसमें NSE (Nmap Scripting Engine) है जिससे वल्नरेबिलिटी डिटेक्शन, ब्रूट फोर्स, मालवेयर डिटेक्शन, और बहुत कुछ किया जा सकता है। NSE स्क्रिप्ट्स Lua भाषा में लिखी गई हैं और हज़ारों स्क्रिप्ट्स उपलब्ध हैं। सुरक्षा शोधकर्ता, एथिकल हैकर, और सिस्टम एडमिनिस्ट्रेटर — सभी इसका इस्तेमाल करते हैं।
      </p>
      <p>
        Nmap का इतिहास बहुत पुराना है। Gordon Lyon ने 1997 में पहला वर्जन रिलीज़ किया था। उस समय नेटवर्क स्कैनिंग के लिए कोई अच्छा ओपन सोर्स टूल नहीं था। Nmap ने इस कमी को पूरा किया और जल्दी ही सिक्योरिटी कम्युनिटी में लोकप्रिय हो गया। आज Nmap GitHub पर 10,000+ स्टार्स के साथ सबसे ज़्यादा डाउनलोड किया जाने वाला सिक्योरिटी टूल है।
      </p>
      <p>
        Nmap की सबसे बड़ी खासियत है इसका NSE (Nmap Scripting Engine)। यह Lua स्क्रिप्टिंग लैंग्वेज पर आधारित है और हज़ारों स्क्रिप्ट्स उपलब्ध हैं। वल्नरेबिलिटी डिटेक्शन, ब्रूट फोर्स, एन्यूमरेशन, मालवेयर डिटेक्शन — सब कुछ NSE स्क्रिप्ट्स से किया जा सकता है। आप अपनी खुद की स्क्रिप्ट भी लिख सकते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> केवल अपने नेटवर्क या जिस पर आपको लिखित अनुमति मिली हो उसी को स्कैन करें। बिना अनुमति के किसी भी नेटवर्क को स्कैन करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत इसमें 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है। केवल शैक्षिक उद्देश्यों के लिए ही इसका उपयोग करें।
      </div>

      <h2>History of Nmap</h2>
      <p>
        Nmap की शुरुआत 1997 में हुई जब Gordon Lyon (उर्फ Fyodor) ने Phrack मैगज़ीन में एक आर्टिकल पब्लिश किया। उस आर्टिकल में उन्होंने एक नेटवर्क स्कैनर की कॉन्सेप्ट बताई जो TCP/IP स्टैक की कमज़ोरियों का फायदा उठाकर पोर्ट्स की जानकारी निकाल सकता है। यही Nmap की शुरुआत थी।
      </p>
      <p>
        1998 में Fyodor ने Nmap को ओपन सोर्स कर दिया और जल्दी ही यह सिक्योरिटी कम्युनिटी में लोकप्रिय हो गया। 2000 में NSE (Nmap Scripting Engine) जोड़ा गया जिससे Nmap की क्षमताएं कई गुना बढ़ गईं। 2007 में "Nmap Network Scanning" नाम की किताब पब्लिश हुई जो आज भी नेटवर्क स्कैनिंग की बाइबल मानी जाती है।
      </p>
      <p>
        आज Nmap 25+ साल पुराना है लेकिन अभी भी सबसे ज़्यादा इस्तेमाल होने वाला नेटवर्क स्कैनर है। इसे CVE, OWASP, और कई सिक्योरिटी ऑर्गेनाइज़ेशन्स रेकमेंड करते हैं। Nmap प्रोजेक्ट में 500+ कंट्रीब्यूटर्स हैं और हर महीने नई स्क्रिप्ट्स और फीचर्स जुड़ते रहते हैं।
      </p>

      <h2>How Nmap Works?</h2>
      <p>
        Nmap TCP/IP प्रोटोकॉल स्टैक की विभिन्न विशेषताओं का उपयोग करके नेटवर्क जानकारी एकत्र करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Host Discovery:</strong> ARP, ICMP, TCP, UDP पैकेट्स भेजकर एक्टिव होस्ट्स ढूंढता है</li>
        <li><strong className="text-white">Port Scanning:</strong> TCP SYN, ACK, UDP, और अन्य तकनीकों से ओपन पोर्ट्स पता करता है</li>
        <li><strong className="text-white">Service Detection:</strong> Banner grabbing और probe response analysis से सर्विस वर्जन पता करता है</li>
        <li><strong className="text-white">OS Fingerprinting:</strong> TCP/IP स्टैक बिहेवियर से ऑपरेटिंग सिस्टम पहचानता है</li>
        <li><strong className="text-white">NSE Scripts:</strong> Lua स्क्रिप्ट्स से एडवांस्ड स्कैनिंग करता है</li>
        <li><strong className="text-white">Firewall Evasion:</strong> फ्रैगमेंटेशन, डिकॉय, स्पूफिंग से फ़ायरवॉल बायपास करता है</li>
        <li><strong className="text-white">Timing Control:</strong> T0-T5 टेम्पलेट्स से स्कैन स्पीड कंट्रोल करता है</li>
        <li><strong className="text-white">Output Formats:</strong> Normal, XML, Grepable फॉर्मेट्स में रिजल्ट्स सेव करता है</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर और काली लिनक्स में Nmap पहले से इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो आसानी से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="Nmap इंस्टॉलेशन"
        code={`# काली लिनक्स/नेटहंटर में (पहले से है चेक करें):
nmap --version

# Debian/Ubuntu में इंस्टॉल:
sudo apt update
sudo apt install nmap

# Fedora/RHEL में:
sudo dnf install nmap

# Arch Linux में:
sudo pacman -S nmap

# Termux (Android) में:
pkg install nmap

# लेटेस्ट वर्जन सोर्स से बिल्ड:
git clone https://github.com/nmap/nmap.git
cd nmap
./configure
make
sudo make install

# NSE स्क्रिप्ट्स अपडेट करें:
nmap --script-updatedb`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-sn</td><td className="py-2 px-3">पिंग स्कैन (होस्ट डिस्कवरी)</td><td className="py-2 px-3 font-mono text-xs">nmap -sn 192.168.1.0/24</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-sS</td><td className="py-2 px-3">TCP SYN स्कैन (स्टील्थी)</td><td className="py-2 px-3 font-mono text-xs">nmap -sS target</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-sT</td><td className="py-2 px-3">TCP Connect स्कैन</td><td className="py-2 px-3 font-mono text-xs">nmap -sT target</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-sU</td><td className="py-2 px-3">UDP स्कैन</td><td className="py-2 px-3 font-mono text-xs">nmap -sU target</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-sV</td><td className="py-2 px-3">सर्विस वर्जन डिटेक्शन</td><td className="py-2 px-3 font-mono text-xs">nmap -sV target</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-O</td><td className="py-2 px-3">OS डिटेक्शन</td><td className="py-2 px-3 font-mono text-xs">nmap -O target</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-A</td><td className="py-2 px-3">एग्रेसिव स्कैन (OS+Service+Scripts+Traceroute)</td><td className="py-2 px-3 font-mono text-xs">nmap -A target</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p-</td><td className="py-2 px-3">सभी 65535 पोर्ट्स</td><td className="py-2 px-3 font-mono text-xs">nmap -p- target</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p 22,80</td><td className="py-2 px-3">स्पेसिफिक पोर्ट्स</td><td className="py-2 px-3 font-mono text-xs">nmap -p 22,80,443 target</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-sC</td><td className="py-2 px-3">डिफ़ॉल्ट NSE स्क्रिप्ट्स</td><td className="py-2 px-3 font-mono text-xs">nmap -sC target</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--script</td><td className="py-2 px-3">स्पेसिफिक NSE स्क्रिप्ट</td><td className="py-2 px-3 font-mono text-xs">nmap --script vuln target</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-T4</td><td className="py-2 px-3">तेज़ टाइमिंग</td><td className="py-2 px-3 font-mono text-xs">nmap -T4 target</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f</td><td className="py-2 px-3">पैकेट फ्रैगमेंटेशन</td><td className="py-2 px-3 font-mono text-xs">nmap -f target</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-D</td><td className="py-2 px-3">डिकॉय स्पूफिंग</td><td className="py-2 px-3 font-mono text-xs">nmap -D RND:10 target</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-oA</td><td className="py-2 px-3">सभी फॉर्मेट्स में आउटपुट</td><td className="py-2 px-3 font-mono text-xs">nmap -oA scan target</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Port Scanning Techniques</h2>
      <p>
        पोर्ट्स का मतलब है कि डिवाइस पर कौन-सी सर्विसेज़ चल रही हैं। जैसे पोर्ट 80 = वेब सर्वर, पोर्ट 22 = SSH, पोर्ट 445 = SMB। हर सर्विस एक विशेष पोर्ट पर लिसन करती है।
      </p>
      <CodeBlock
        title="Port Scan Types"
        code={`# सभी पोर्ट्स स्कैन करें (1-65535):
nmap -p- target_ip

# टॉप 1000 पोर्ट्स स्कैन (डिफ़ॉल्ट):
nmap target_ip

# TCP SYN scan (तेज़, स्टील्थी):
nmap -sS target_ip

# TCP Connect scan (पूरा कनेक्शन):
nmap -sT target_ip

# UDP scan:
nmap -sU target_ip

# TCP + UDP दोनों:
nmap -sS -sU target_ip

# NULL scan (कोई फ्लैग नहीं):
nmap -sN target_ip

# FIN scan:
nmap -sF target_ip

# XMAS scan (FIN+PSH+URG):
nmap -sX target_ip

# ACK scan (फ़ायरवॉल रूल्स पता करें):
nmap -sA target_ip

# Window scan:
nmap -sW target_ip

# Idle scan (सबसे स्टील्थी):
nmap -sI zombie_host:port target_ip`}
      />

      <div className="info-box mb-6">
        <strong>💡 स्कैन टाइप समझें:</strong>
        <ul className="mt-2 text-gray-400 text-sm space-y-1">
          <li><strong>-sS (SYN scan):</strong> सबसे लोकप्रिय — तेज़ और स्टील्थी। पूरा कनेक्शन नहीं बनाता। रूट प्रिविलेज चाहिए।</li>
          <li><strong>-sT (Connect scan):</strong> पूरा TCP कनेक्शन बनाता है। रूट की ज़रूरत नहीं लेकिन लॉग में आसानी से दिखता है।</li>
          <li><strong>-sU (UDP scan):</strong> UDP सर्विसेज़ (DNS, SNMP, DHCP) के लिए। धीमा होता है।</li>
          <li><strong>-sN/-sF/-sX:</strong> फ़ायरवॉल बायपास करने के लिए। कुछ सिस्टम्स पर काम नहीं करते।</li>
          <li><strong>-sI (Idle scan):</strong> सबसे स्टील्थी — ज़ॉम्बी होस्ट का इस्तेमाल करता है।</li>
        </ul>
      </div>

      <h2>OS Detection</h2>
      <p>
        OS डिटेक्शन TCP/IP स्टैक फिंगरप्रिंटिंग पर आधारित है। हर ऑपरेटिंग सिस्टम TCP/IP पैकेट्स को अलग तरह से हैंडल करता है — TTL, window size, TCP options, और अन्य फ़ील्ड्स अलग-अलग होते हैं। Nmap इन differences को analyze करके OS पहचानता है।
      </p>
      <CodeBlock
        title="OS Detection"
        code={`# OS डिटेक्ट करें (रूट चाहिए):
sudo nmap -O target_ip

# एग्रेसिव OS डिटेक्शन:
sudo nmap -A target_ip

# मैक्सिमम OS डिटेक्शन ट्राई:
sudo nmap -O --osscan-guess target_ip

# लिमिट OS डिटेक्शन (तेज़):
sudo nmap -O --osscan-limit target_ip

# OS डिटेक्शन + सर्विस डिटेक्शन:
sudo nmap -O -sV target_ip

# कस्टम OS फिंगरप्रिंट:
sudo nmap -O --max-os-tries 2 target_ip`}
      />

      <h2>Service Detection</h2>
      <p>
        सर्विस डिटेक्शन banner grabbing और probe response analysis पर आधारित है। हर सर्विस अपना वर्जन और अन्य जानकारी banner में देती है। Nmap इस information को analyze करके सर्विस और वर्जन पहचानता है।
      </p>
      <CodeBlock
        title="Service Detection"
        code={`# सर्विस वर्जन डिटेक्ट करें:
nmap -sV target_ip

# वर्जन डिटेक्शन इंटेंसिटी (0-9):
nmap -sV --version-intensity 9 target_ip

# लाइट वर्जन डिटेक्शन (तेज़):
nmap -sV --version-light target_ip

# ऑल पोर्ट्स + सर्विस डिटेक्शन:
nmap -sV -p- target_ip

# बैनर ग्रैबिंग:
nmap -sV --version-all target_ip

# सर्विस डिटेक्शन + OS डिटेक्शन:
nmap -sV -O target_ip`}
      />

      <h2>NSE Scripts (Nmap Scripting Engine)</h2>
      <p>
        Nmap का सबसे शक्तिशाली फीचर NSE है। NSE स्क्रिप्ट्स से एडवांस्ड स्कैनिंग की जा सकती है — वल्नरेबिलिटी डिटेक्शन, ब्रूट फोर्स, एन्यूमरेशन, मालवेयर डिटेक्शन — सब कुछ।
      </p>
      <CodeBlock
        title="NSE Scripts"
        code={`# वल्नरेबिलिटी स्कैन:
nmap --script vuln target_ip

# डिफ़ॉल्ट स्क्रिप्ट्स:
nmap -sC target_ip

# स्पेसिफिक स्क्रिप्ट:
nmap --script http-enum target_ip

# SMB स्क्रिप्ट्स:
nmap --script smb-enum-shares,smb-enum-users target_ip

# DNS स्क्रिप्ट्स:
nmap --script dns-brute target.com

# HTTP स्क्रिप्ट्स:
nmap --script http-title,http-headers target_ip

# SSL/TLS स्क्रिप्ट्स:
nmap --script ssl-enum-ciphers -p 443 target_ip

# SSH स्क्रिप्ट्स:
nmap --script ssh-auth-methods,ssh2-enum-algos -p 22 target_ip

# FTP स्क्रिप्ट्स:
nmap --script ftp-anon,ftp-bounce -p 21 target_ip

# सभी उपलब्ध स्क्रिप्ट्स देखें:
ls /usr/share/nmap/scripts/

# स्क्रिप्ट अपडेट करें:
nmap --script-updatedb`}
      />

      <h2>NSE Script Categories</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Category</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करती है</th>
              <th className="text-left py-2 px-3 text-neon-green">जोखिम स्तर</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">safe</td><td className="py-2 px-3">टार्गेट को नुकसान नहीं पहुंचाती</td><td className="py-2 px-3 text-green-400">कम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">default</td><td className="py-2 px-3">डिफ़ॉल्ट स्कैन में चलती हैं (-sC)</td><td className="py-2 px-3 text-green-400">कम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">discovery</td><td className="py-2 px-3">नेटवर्क और सर्विसेज़ ढूंढती हैं</td><td className="py-2 px-3 text-yellow-400">मध्यम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">vuln</td><td className="py-2 px-3">ज्ञात कमज़ोरियां चेक करती हैं</td><td className="py-2 px-3 text-yellow-400">मध्यम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">auth</td><td className="py-2 px-3">ऑथेंटिकेशन चेक करती हैं</td><td className="py-2 px-3 text-yellow-400">मध्यम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">brute</td><td className="py-2 px-3">ब्रूट फोर्स अटैक</td><td className="py-2 px-3 text-orange-400">उच्च</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">exploit</td><td className="py-2 px-3">ज्ञात कमज़ोरियों का फायदा उठाती हैं</td><td className="py-2 px-3 text-red-400">बहुत उच्च</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">intrusive</td><td className="py-2 px-3">टार्गेट पर असर डाल सकती हैं</td><td className="py-2 px-3 text-red-400">बहुत उच्च</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">malware</td><td className="py-2 px-3">मालवेयर चेक करती हैं</td><td className="py-2 px-3 text-yellow-400">मध्यम</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">dos</td><td className="py-2 px-3">डिनायल ऑफ़ सर्विस टेस्ट</td><td className="py-2 px-3 text-red-400">बहुत उच्च</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Firewall Evasion</h2>
      <p>
        कई नेटवर्क्स पर फ़ायरवॉल और IDS होते हैं जो Nmap स्कैन्स को ब्लॉक या डिटेक्ट कर सकते हैं। Nmap में कई तकनीकें हैं जो फ़ायरवॉल को बायपास करने में मदद करती हैं।
      </p>
      <CodeBlock
        title="Firewall Evasion Techniques"
        code={`# फ्रैगमेंटेशन (पैकेट्स तोड़ें):
nmap -f target_ip

# छोटे फ्रैगमेंट्स:
nmap -f -f target_ip

# कस्टम MTU:
nmap --mtu 24 target_ip

# डिकॉय स्पूफिंग (फेक सोर्स IP):
nmap -D RND:10 target_ip

# स्पेसिफिक डिकॉय:
nmap -D decoy1,decoy2,ME target_ip

# सोर्स पोर्ट स्पूफिंग:
nmap --source-port 53 target_ip

# रैंडम होस्ट्स:
nmap --randomize-hosts 192.168.1.0/24

# MAC एड्रेस स्पूफिंग:
nmap --spoof-mac 00:11:22:33:44:55 target_ip

# डेटा पेलोड साइज बदलें:
nmap --data-length 25 target_ip

# TTL बदलें:
nmap --ttl 100 target_ip

# बैड सम चेकसम:
nmap --badsum target_ip

# ICMP बायपास:
nmap -Pn target_ip`}
      />

      <h2>Timing and Performance</h2>
      <CodeBlock
        title="Timing Templates"
        code={`# डिफ़ॉल्ट (T3):
nmap target_ip

# तेज़ स्कैन (T4):
nmap -T4 target_ip

# सबसे तेज़ (T5):
nmap -T5 target_ip

# धीमा और स्टील्थी (T1):
nmap -T1 target_ip

# पैरानॉइड (T0):
nmap -T0 target_ip

# कस्टम टाइमिंग:
nmap --min-rate 1000 target_ip
nmap --max-retries 2 target_ip
nmap --host-timeout 30s target_ip

# पैरलल स्कैन:
nmap --min-parallelism 50 target_ip

# DNS रिज़ॉल्व बंद करें (तेज़):
nmap -n target_ip`}
      />

      <h2>Output Formats</h2>
      <CodeBlock
        title="Output Formats"
        code={`# नॉर्मल टेक्स्ट फाइल:
nmap target_ip -oN scan.txt

# XML फॉर्मेट (Metasploit में इम्पोर्ट):
nmap target_ip -oX scan.xml

# Grepable फॉर्मेट:
nmap target_ip -oG scan.grep

# सभी फॉर्मेट्स एक साथ:
nmap target_ip -oA scan_results

# वर्बोज़ आउटपुट:
nmap -v target_ip

# डीबग लेवल:
nmap -d target_ip`}
      />

      <h2>Practical Examples</h2>
      <CodeBlock
        title="रियल-वर्ल्ड उदाहरण"
        code={`# वेब सर्वर स्कैन:
nmap -sV -p 80,443,8080,8443 target_ip

# SMB स्कैन (Windows नेटवर्क):
nmap -p 135,139,445 --script smb-* target_ip

# SSH सर्वर स्कैन:
nmap -p 22 --script ssh-auth-methods target_ip

# DNS सर्वर स्कैन:
nmap -p 53 --script dns-* target_ip

# FTP सर्वर स्कैन:
nmap -p 21 --script ftp-* target_ip

# डेटाबेस सर्वर स्कैन:
nmap -p 3306,5432,1433,27017 target_ip

# IoT डिवाइस स्कैन:
nmap -sV -O --script banner target_ip

# वाईफाई राउटर स्कैन:
nmap -A -T4 192.168.1.1

# पूरा नेटवर्क ऑडिट:
nmap -A -T4 -p- --script vuln 192.168.1.0/24 -oA network_audit`}
      />

      <h2>Nmap with Metasploit</h2>
      <CodeBlock
        title="Nmap + Metasploit Integration"
        code={`# XML आउटपुट में स्कैन करें:
nmap -A -oX scan.xml target_ip

# Metasploit में इम्पोर्ट करें:
msfconsole
db_import scan.xml

# या सीधे Metasploit में Nmap चलाएं:
msfconsole
db_nmap -A target_ip

# होस्ट्स देखें:
hosts

# सर्विसेज़ देखें:
services

# पोर्ट्स देखें:
services -p 22`}
      />

      <h2>Scripting & Automation</h2>
      <CodeBlock
        title="ऑटोमेटिक नेटवर्क ऑडिट"
        code={`#!/bin/bash
# ऑटोमेटिक नेटवर्क ऑडिट स्क्रिप्ट

TARGET="192.168.1.0/24"
OUTPUT_DIR="nmap_audit_$(date +%Y%m%d)"

mkdir -p $OUTPUT_DIR

echo "[*] होस्ट डिस्कवरी शुरू..."
nmap -sn $TARGET -oN $OUTPUT_DIR/hosts.txt

echo "[*] पोर्ट स्कैन शुरू..."
nmap -sS -T4 -p- $TARGET -oN $OUTPUT_DIR/ports.txt

echo "[*] सर्विस डिटेक्शन शुरू..."
nmap -sV -O $TARGET -oN $OUTPUT_DIR/services.txt

echo "[*] वल्नरेबिलिटी स्कैन शुरू..."
nmap --script vuln $TARGET -oN $OUTPUT_DIR/vulns.txt

echo "[*] ऑडिट पूरा हुआ!"`}
      />
      <CodeBlock
        title="कंटीन्यूअस मॉनिटरिंग"
        code={`#!/bin/bash
# नेटवर्क चेंज मॉनिटरिंग — हर घंटे स्कैन करो

TARGET="192.168.1.0/24"
BASELINE="baseline.xml"
CURRENT="current.xml"

# पहली बार बेसलाइन बनाओ:
nmap -sS -sV -O $TARGET -oX $BASELINE

# हर घंटे कम्पेयर करो:
while true; do
    nmap -sS -sV -O $TARGET -oX $CURRENT
    DIFF=$(ndiff $BASELINE $CURRENT)
    if [ -n "$DIFF" ]; then
        echo "[!] चेंज डिटेक्टेड:"
        echo "$DIFF"
        echo "$DIFF" | mail -s "Network Change Alert" admin@company.com
        cp $CURRENT $BASELINE  # बेसलाइन अपडेट
    fi
    sleep 3600  # 1 घंटा वेट
done`}
      />

      <h2>Nmap Scripting Engine (NSE) Deep Dive</h2>
      <p>
        NSE स्क्रिप्ट्स Nmap की सबसे पावरफुल फीचर है — यहाँ डीप डाइव है।
      </p>
      <CodeBlock
        title="NSE एडवांस्ड"
        code={`# स्क्रिप्ट कैटेगरीज़:
# safe — टार्गेट को नुकसान नहीं
# default — डिफ़ॉल्ट स्कैन में चलती हैं
# discovery — नेटवर्क और सर्विसेज़ ढूंढती हैं
# vuln — ज्ञात कमज़ोरियां चेक करती हैं
# auth — ऑथेंटिकेशन चेक करती हैं
# brute — ब्रूट फोर्स अटैक
# exploit — ज्ञात कमज़ोरियों का फायदा उठाती हैं
# intrusive — टार्गेट पर असर डाल सकती हैं
# malware — मालवेयर चेक करती हैं
# dos — डिनायल ऑफ़ सर्विस टेस्ट

# कई स्क्रिप्ट्स एक साथ:
nmap --script "safe and vuln" target_ip
nmap --script "default or discovery" target_ip
nmap --script "not intrusive" target_ip

# स्क्रिप्ट आर्ग्यूमेंट्स:
nmap --script http-brute --script-args userdb=users.txt,passdb=pass.txt target_ip
nmap --script dns-brute --script-args dns-brute.threads=10 target.com

# स्क्रिप्ट टाइमआउट:
nmap --script-timeout 30s target_ip

# स्क्रिप्ट ट्रेस (डीबग):
nmap --script-trace --script http-enum target_ip

# कस्टम NSE स्क्रिप्ट लिखें:
# /usr/share/nmap/scripts/my_script.nse:
# local nmap = require "nmap"
# local shortport = require "shortport"
# description = [[Custom security test]]
# portrule = shortport.port_or_service(80, "http")
# action = function(host, port)
#     return "Custom test result"
# end`}
      />

      <h2>Network Mapping</h2>
      <p>
        Nmap से पूरे नेटवर्क का मैप बनाओ — टोपोलॉजी, होस्ट्स, सर्विसेज़।
      </p>
      <CodeBlock
        title="नेटवर्क मैपिंग"
        code={`# नेटवर्क टोपोलॉजी:
nmap --traceroute -A target_ip

# सबनेट डिस्कवरी:
nmap -sn 192.168.1.0/24 | grep "report" | awk '{print $5}'

# लाइव होस्ट्स मैप:
nmap -sn 192.168.1.0/24 -oX hosts.xml
# XML को विज़ुअलाइज़ करो:
# Zenmap में इम्पोर्ट करो — टोपोलॉजी व्यू मिलेगा

# राउटर मैपिंग:
nmap --traceroute -sV target_ip
# हॉप्स देखो — नेटवर्क पाथ पता चलेगा

# VLAN डिस्कवरी:
nmap -sn 10.0.0.0/8 | grep "report" | awk '{print $5}' | cut -d. -f1-3 | sort -u

# फ़ायरवॉल मैपिंग:
nmap -sA target_ip  # ACK स्कैन — फ़ायरवॉल रूल्स पता चलते हैं
nmap -sW target_ip  # Window स्कैन`}
      />

      <CodeBlock
        title="Python Nmap Automation"
        code={`#!/usr/bin/env python3
# Python-nmap स्क्रिप्ट

import nmap

nm = nmap.PortScanner()

# होस्ट डिस्कवरी:
nm.scan(hosts='192.168.1.0/24', arguments='-sn')
for host in nm.all_hosts():
    print(f"Active: {host}")

# पोर्ट स्कैन:
nm.scan('192.168.1.1', '22,80,443')
for host in nm.all_hosts():
    for proto in nm[host].all_protocols():
        ports = nm[host][proto].keys()
        for port in ports:
            print(f"Port {port}: {nm[host][proto][port]['state']}")`}
      />

      <h2>Nmap vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Nmap</th>
              <th className="text-left py-2 px-3 text-neon-green">Masscan</th>
              <th className="text-left py-2 px-3 text-neon-green">Zmap</th>
              <th className="text-left py-2 px-3 text-neon-green">Unicornscan</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्पीड</td><td className="py-2 px-3">मध्यम</td><td className="py-2 px-3">बहुत तेज़</td><td className="py-2 px-3">बहुत तेज़</td><td className="py-2 px-3">तेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">OS डिटेक्शन</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सीमित</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">NSE स्क्रिप्ट्स</td><td className="py-2 px-3">हाँ (600+)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">सर्विस डिटेक्शन</td><td className="py-2 px-3">हाँ (बेस्ट)</td><td className="py-2 px-3">बैनर</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">बैनर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">फ़ायरवॉल एवेशन</td><td className="py-2 px-3">हाँ (बेस्ट)</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सीमित</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GUI</td><td className="py-2 px-3">Zenmap</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कीमत</td><td className="py-2 px-3">फ्री</td><td className="py-2 px-3">फ्री</td><td className="py-2 px-3">फ्री</td><td className="py-2 px-3">फ्री</td></tr>
            <tr><td className="py-2 px-3 text-white">बेस्ट फॉर</td><td className="py-2 px-3">जनरल पर्पस</td><td className="py-2 px-3">बड़े नेटवर्क्स</td><td className="py-2 px-3">इंटरनेट स्केल</td><td className="py-2 px-3">रिसर्च</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'स्कैन बहुत धीमा है', a: 'टाइमिंग टेम्पलेट बढ़ाएं (-T4)। UDP स्कैन स्किप करें। पोर्ट रेंज कम करें। DNS रिज़ॉल्व बंद करें (-n)।' },
          { q: 'कोई पोर्ट नहीं दिख रहा', a: 'होस्ट एक्टिव है चेक करें (-sn)। फ़ायरवॉल है तो -Pn या -f ट्राई करें। सभी पोर्ट्स स्कैन करें (-p-)।' },
          { q: 'OS डिटेक्शन काम नहीं कर रहा', a: 'रूट/सूडो से चलाएं। --osscan-guess ट्राई करें। फ़ायरवॉल OS पैकेट्स ब्लॉक कर रहा होगा।' },
          { q: 'NSE स्क्रिप्ट नहीं मिल रही', a: 'nmap --script-updatedb रन करें। /usr/share/nmap/scripts/ चेक करें। लेटेस्ट Nmap इंस्टॉल करें।' },
          { q: 'स्कैन डिटेक्ट हो रहा है', a: '-T1 (स्नीकी) या -T0 (पैरानॉइड) यूज़ करें। -f (फ्रैगमेंटेशन) और -D (डिकॉय) ट्राई करें।' },
          { q: 'बहुत ज़्यादा false positives आ रहे हैं', a: '--max-retries कम करें। -sV (सर्विस डिटेक्शन) से कन्फर्म करें। --script vuln से वेरिफाई करें। हर फाइंडिंग मैनुअली वेरिफाई करो।' },
          { q: 'IPv6 स्कैन नहीं हो रहा', a: '-6 फ्लैग यूज़ करें। IPv6 एड्रेस फॉर्मेट सही है चेक करें। नेटवर्क IPv6 सपोर्ट करता है कन्फर्म करें।' },
          { q: 'Nmap permission denied दिखा रहा है', a: 'sudo से रन करें — SYN scan, OS detection, और NSE स्क्रिप्ट्स को रूट प्रिविलेज चाहिए।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Nmap स्कैन्स से कैसे बचें और अपने नेटवर्क को कैसे सिक्योर करें:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">IDS/IPS:</strong> Snort, Suricata जैसे टूल्स से Nmap स्कैन डिटेक्ट करें — रियल-टाइम अलर्ट मिलेंगे</li>
        <li><strong className="text-white">पोर्ट फ़िल्टरिंग:</strong> फ़ायरवॉल से अनावश्यक पोर्ट्स ब्लॉक करें — सिर्फ़ ज़रूरी पोर्ट्स खोलो</li>
        <li><strong className="text-white">रेट लिमिटिंग:</strong> कनेक्शन रेट लिमिट सेट करें — iptables या nftables से</li>
        <li><strong className="text-white">लॉग मॉनिटरिंग:</strong> नेटवर्क लॉग्स में संदिग्ध एक्टिविटी चेक करें — ELK Stack यूज़ करो</li>
        <li><strong className="text-white">हनीपॉट:</strong> फेक सर्विसेज़ सेट करें जो अटैकर्स को ट्रैप करें — Cowrie, Kippo यूज़ करो</li>
        <li><strong className="text-white">फ़ायरवॉल रूल्स:</strong> SYN flood प्रोटेक्शन और कनेक्शन लिमिटिंग — iptables से</li>
        <li><strong className="text-white">नेटवर्क सेगमेंटेशन:</strong> क्रिटिकल सिस्टम्स को अलग नेटवर्क पर रखें — VLAN यूज़ करो</li>
        <li><strong className="text-white">पोर्ट नॉकिंग:</strong> सीक्रेट पोर्ट सीक्वेंस से असली सर्विसेज़ ओपन करें — fwknop यूज़ करो</li>
        <li><strong className="text-white">एन्क्रिप्शन:</strong> सभी सर्विसेज़ पर TLS/SSL इनेबल करें — सर्टिफ़िकेट मैनेजमेंट ज़रूरी है</li>
        <li><strong className="text-white">रेगुलर ऑडिट:</strong> खुद Nmap से अपना नेटवर्क स्कैन करें और कमज़ोरियां ठीक करें — हर महीने करो</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Nmap प्रैक्टिस के लिए सेफ लैब बनाएं:
      </p>
      <CodeBlock
        title="Lab Setup"
        code={`# वर्चुअल मशीन सेटअप:
# VirtualBox में Kali Linux और Metasploitable2 इंस्टॉल करें

# Metasploitable2 डाउनलोड:
# SourceForge से VM इमेज डाउनलोड करें

# नेटवर्क कॉन्फ़िगरेशन:
# दोनों VMs को Host-Only Adapter पर रखें

# प्रैक्टिस स्कैन:
nmap -sn 192.168.56.0/24
nmap -A 192.168.56.101
nmap --script vuln 192.168.56.101

# ऑनलाइन प्रैक्टिस:
# scanme.nmap.org (Nmap का ऑफिशियल टेस्ट टार्गेट)
nmap scanme.nmap.org`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड Nmap"
        code={`# IPv6 स्कैन:
nmap -6 target_ipv6

# ट्रेसरूट:
nmap --traceroute target_ip

# प्रोटोकॉल स्कैन:
nmap -sO target_ip

# SCTP स्कैन:
nmap -sY target_ip

# FTP बाउंस स्कैन:
nmap -b user@ftp_server target_ip

# रिजल्ट्स कम्पेयर (ndiff):
ndiff scan1.xml scan2.xml

# NSE कस्टम स्क्रिप्ट लिखें:
# /usr/share/nmap/scripts/ में .nse फाइल बनाएं

# मल्टीपल टार्गेट्स ऑप्टिमाइज़ेशन:
nmap --min-parallelism 100 192.168.1.0/24`}
      />

      <h2>Network Scanning Workflows</h2>
      <p>
        प्रोफेशनल पेनेट्रेशन टेस्टिंग में Nmap को सिस्टमैटिक तरीके से यूज़ करना ज़रूरी है।
      </p>
      <CodeBlock
        title="प्रोफेशनल स्कैनिंग वर्कफ़्लो"
        code={`#!/bin/bash
# फेज़ 1: होस्ट डिस्कवरी
echo "[*] फेज़ 1: होस्ट डिस्कवरी..."
nmap -sn 192.168.1.0/24 -oN hosts_discovery.txt
# एक्टिव होस्ट्स की लिस्ट बनाओ

# फेज़ 2: पोर्ट स्कैनिंग
echo "[*] फेज़ 2: पोर्ट स्कैनिंग..."
for host in $(grep "Up" hosts_discovery.txt | awk '{print $2}'); do
    echo "[+] स्कैनिंग $host..."
    nmap -sS -T4 -p- $host -oN "ports_\\${host}.txt"
done

# फेज़ 3: सर्विस डिटेक्शन
echo "[*] फेज़ 3: सर्विस डिटेक्शन..."
for host in $(grep "Up" hosts_discovery.txt | awk '{print $2}'); do
    PORTS=$(grep "open" "ports_\\${host}.txt" | cut -d'/' -f1 | tr '\\n' ',' | sed 's/,$//')
    nmap -sV -sC -p $PORTS $host -oN "services_\\${host}.txt"
done

# फेज़ 4: OS डिटेक्शन
echo "[*] फेज़ 4: OS डिटेक्शन..."
for host in $(grep "Up" hosts_discovery.txt | awk '{print $2}'); do
    sudo nmap -O --osscan-guess $host -oN "os_\\${host}.txt"
done

# फेज़ 5: वल्नरेबिलिटी स्कैन
echo "[*] फेज़ 5: वल्नरेबिलिटी स्कैन..."
for host in $(grep "Up" hosts_discovery.txt | awk '{print $2}'); do
    nmap --script vuln $host -oN "vulns_\\${host}.txt"
done

echo "[+] सभी स्कैन पूरे हुए!"`}
      />

      <h2>Service Enumeration</h2>
      <p>
        हर सर्विस के लिए स्पेसिफ़िक एन्यूमरेशन तकनीकें — NSE स्क्रिप्ट्स से।
      </p>
      <CodeBlock
        title="सर्विस-स्पेसिफ़िक एन्यूमरेशन"
        code={`# SMB एन्यूमरेशन (Windows):
nmap -p 445 --script smb-enum-shares,smb-enum-users,smb-os-discovery target_ip
nmap -p 445 --script smb-vuln-ms17-010 target_ip  # EternalBlue

# DNS एन्यूमरेशन:
nmap -p 53 --script dns-brute,dns-zone-transfer target.com
nmap -p 53 --script dns-srv-enum target.com

# HTTP एन्यूमरेशन:
nmap -p 80,443 --script http-enum,http-headers,http-methods target_ip
nmap -p 80,443 --script http-title,http-server-header target_ip

# SNMP एन्यूमरेशन:
nmap -p 161 --script snmp-brute,snmp-info,snmp-sysdescr target_ip

# LDAP एन्यूमरेशन:
nmap -p 389 --script ldap-brute,ldap-search target_ip

# MySQL एन्यूमरेशन:
nmap -p 3306 --script mysql-info,mysql-enum,mysql-brute target_ip

# SMTP एन्यूमरेशन:
nmap -p 25 --script smtp-enum-users,smtp-open-relay target_ip

# RPC एन्यूमरेशन:
nmap -p 111 --script rpcinfo,rpc-grind target_ip

# NFS एन्यूमरेशन:
nmap -p 2049 --script nfs-showmount,nfs-ls target_ip`}
      />

      <h2>Stealth Scanning</h2>
      <p>
        IDS/IPS से बचने के लिए स्टील्दी स्कैनिंग तकनीकें।
      </p>
      <CodeBlock
        title="स्टील्दी स्कैनिंग"
        code={`# स्लो स्कैन (IDS बायपास):
nmap -T1 -f --data-length 25 target_ip

# डिकॉय स्पूफिंग:
nmap -D RND:5 target_ip  # 5 रैंडम डिकॉय
nmap -D 10.0.0.1,10.0.0.2,ME target_ip  # स्पेसिफ़िक डिकॉय

# सोर्स पोर्ट स्पूफिंग (DNS/FTP):
nmap --source-port 53 target_ip  # DNS पोर्ट से
nmap --source-port 20 target_ip  # FTP डेटा पोर्ट से

# आइडल स्कैन (सबसे स्टील्थी):
nmap -sI zombie_host:port target_ip
# ज़ॉम्बी होस्ट ढूंढो:
nmap -sS -p 80 --script ipidseq 192.168.1.0/24

# रैंडमाइज़ेशन:
nmap --randomize-hosts 192.168.1.0/24
nmap --scan-delay 1s target_ip

# MAC स्पूफिंग:
nmap --spoof-mac 0 target_ip  # रैंडम MAC
nmap --spoof-mac Apple target_ip  # Apple MAC

# IPv6 स्कैन (कम डिटेक्ट होता है):
nmap -6 target_ipv6`}
      />

      <h2>Vulnerability Scanning</h2>
      <p>
        NSE स्क्रिप्ट्स से वल्नरेबिलिटी स्कैनिंग — कैसे करें।
      </p>
      <CodeBlock
        title="वल्नरेबिलिटी स्कैनिंग"
        code={`# ऑल-इन-वन वल्नरेबिलिटी स्कैन:
nmap --script vuln target_ip

# स्पेसिफ़िक वल्नरेबिलिटी:
nmap --script smb-vuln-ms17-010 -p 445 target_ip  # EternalBlue
nmap --script ssl-heartbleed -p 443 target_ip  # Heartbleed
nmap --script http-shellshock --script-args uri=/cgi-bin/test.cgi target_ip
nmap --script vulners -sV target_ip  # CVE डेटाबेस से

# वेब एप वल्नरेबिलिटी:
nmap --script http-sql-injection target_ip
nmap --script http-xssed target_ip
nmap --script http-csrf target_ip

# SSL/TLS वल्नरेबिलिटी:
nmap --script ssl-enum-ciphers -p 443 target_ip
nmap --script ssl-poodle -p 443 target_ip
nmap --script ssl-ccs-injection -p 443 target_ip

# डिफ़ॉल क्रेडेंशियल्स:
nmap --script http-brute -p 80 target_ip
nmap --script ftp-brute -p 21 target_ip
nmap --script ssh-brute -p 22 target_ip
nmap --script mysql-brute -p 3306 target_ip

# वल्नरेबिलिटी रिपोर्ट:
nmap --script vuln target_ip -oX vuln_report.xml
# XML को HTML में कन्वर्ट:
xsltproc vuln_report.xml -o vuln_report.html`}
      />

      <h2>Real-World Scenarios</h2>
      <div className="space-y-3 mt-4">
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 1: वेब सर्वर ऑडिट</h4>
          <p className="text-gray-400 text-sm">
            वेब सर्वर का कॉम्प्रिहेन्सिव ऑडिट। पोर्ट्स 80, 443, 8080, 8443 पर स्कैन। HTTP मेथड्स, हेडर्स, टाइटल चेक। SSL/TLS कॉन्फ़िगरेशन वेरिफाई। वेब एप वल्नरेबिलिटी (SQLi, XSS) चेक। डिफ़ॉल क्रेडेंशियल्स ट्राई।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 2: Windows नेटवर्क</h4>
          <p className="text-gray-400 text-sm">
            Windows डोमेन नेटवर्क का ऑडिट। SMB (445), RPC (135), LDAP (389), Kerberos (88) पोर्ट्स स्कैन। EternalBlue (MS17-010), MS08-067 चेक। यूज़र एन्यूमरेशन, शेयर्स लिस्ट, ग्रुप पॉलिसी चेक।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 3: IoT डिवाइस</h4>
          <p className="text-gray-400 text-sm">
            IoT डिवाइस (कैमरा, राउटर, NAS) का ऑडिट। Telnet (23), SSH (22), HTTP (80) पोर्ट्स। डिफ़ॉल क्रेडेंशियल्स चेक। फ़र्मवेयर वर्जन डिटेक्ट। नॉन-स्टैंडर्ड पोर्ट्स पर सर्विसेज़।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 4: क्लाउड इंफ़्रा</h4>
          <p className="text-gray-400 text-sm">
            AWS/Azure/GCP इंस्टेंसेस का ऑडिट। सिक्योरिटी ग्रुप्स वेरिफाई — कौन-से पोर्ट्स ओपन हैं। इंटरनल नेटवर्क स्कैनिंग। लोड बैलेंसर, RDS, S3 बकेट एक्सेस चेक।
          </p>
        </div>
      </div>

      <h2>Common Mistakes</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'डिफ़ॉल्ट स्कैन पर भरोसा करना', a: 'डिफ़ॉल्ट स्कैन सिर्फ़ टॉप 1000 पोर्ट्स दिखाता है। हमेशा -p- से सभी पोर्ट्स स्कैन करो — बाकी 64535 पोर्ट्स मिस हो सकते हैं।' },
          { q: 'बिना -sV के सर्विस डिटेक्शन', a: 'सिर्फ़ पोर्ट ओपन देखना काफ़ी नहीं — -sV से सर्विस वर्जन पता करो। वल्नरेबिलिटी वर्जन-स्पेसिफ़िक होती है।' },
          { q: 'NSE स्क्रिप्ट्स नहीं यूज़ करना', a: 'NSE स्क्रिप्ट्स Nmap की सबसे बड़ी ताक़त हैं। --script vuln से वल्नरेबिलिटी मिलती हैं जो मैनुअली नहीं मिलेंगी।' },
          { q: 'रूट से नहीं चलाना', a: 'SYN scan, OS detection, NSE स्क्रिप्ट्स — सबको रूट प्रिविलेज चाहिए। sudo हमेशा यूज़ करो।' },
          { q: 'लॉग सेव नहीं करना', a: '-oA हमेशा यूज़ करो — बाद में एनालिसिस, कम्पेरिज़न, और रिपोर्टिंग के लिए ज़रूरी है।' },
          { q: 'एक ही बार स्कैन करना', a: 'रेगुलर स्कैन करो — ndiff से कम्पेयर करो। नए ओपन पोर्ट्स, नई सर्विसेज़ डिटेक्ट होंगी।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">❌ {item.q}</h4>
            <p className="text-gray-400 text-sm">✅ {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Reporting and Documentation</h2>
      <p>
        पेनेट्रेशन टेस्टिंग में Nmap रिपोर्टिंग — कैसे करें।
      </p>
      <CodeBlock
        title="रिपोर्टिंग"
        code={`# सभी फॉर्मेट्स में स्कैन:
nmap -A -sV --script vuln target_ip -oA full_scan

# XML से HTML रिपोर्ट:
xsltproc full_scan.xml -o full_scan.html

# रिजल्ट्स पार्स करो:
# ओपन पोर्ट्स:
grep "open" full_scan.nmap | wc -l

# सर्विसेज़:
grep "open" full_scan.nmap | awk '{print $3}' | sort | uniq -c

# वल्नरेबिलिटीज़:
grep -i "vuln\|VULNERABLE" full_scan.nmap

# एग्जीक्यूटिव समरी:
cat > summary.txt << EOF
=== Nmap Scan Report ===
Date: $(date)
Target: target_ip
Open Ports: $(grep -c "open" full_scan.nmap)
Services: $(grep "open" full_scan.nmap | awk '{print $3}' | sort -u | tr '\\n' ', ')
OS: $(grep "OS details" full_scan.nmap | cut -d: -f2)
Vulnerabilities: $(grep -c "VULNERABLE" full_scan.nmap)
EOF

# स्कैन कम्पेरिज़न (ndiff):
ndiff scan_old.xml scan_new.xml > diff.txt`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Nmap फ्री है?', a: 'हाँ, Nmap पूरी तरह फ्री और ओपन सोर्स है। GPL लाइसेंस के तहत रिलीज़ हुआ है।' },
          { q: 'Nmap से नेटवर्क को नुकसान हो सकता है?', a: 'सामान्य स्कैन से नहीं। लेकिन DoS स्क्रिप्ट्स और इन्ट्रूसिव स्कैन से सर्विसेज़ क्रैश हो सकती हैं। हमेशा safe कैटेगरी से शुरू करें।' },
          { q: 'सबसे तेज़ स्कैन कैसे करें?', a: 'nmap -T5 -n --min-rate 1000 --max-retries 1 target_ip — लेकिन accuracy कम होगी। बैलेंस्ड स्कैन के लिए -T4 यूज़ करें।' },
          { q: 'क्या Nmap Windows पर चलता है?', a: 'हाँ, Nmap Windows, Linux, macOS सभी पर चलता है। Windows पर Zenmap GUI भी मिलता है।' },
          { q: 'NSE स्क्रिप्ट कैसे लिखें?', a: 'Lua भाषा में लिखी जाती हैं। Nmap की ऑफिशियल डॉक्यूमेंटेशन और उदाहरण देखें। /usr/share/nmap/scripts/ में मौजूदा स्क्रिप्ट्स से सीखें।' },
          { q: 'Nmap का लॉग कैसे छुपाएं?', a: 'पूरी तरह छुपाना मुश्किल है। -T0 (पैरानॉइड), -f (फ्रैगमेंटेशन), -D (डिकॉय), --spoof-mac ट्राई करें। लेकिन कोई गारंटी नहीं — IDS फिर भी डिटेक्ट कर सकता है।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Masscan</td><td className="py-2 px-3">तेज़ पोर्ट स्कैनर</td><td className="py-2 px-3">इंटरनेट स्केल स्कैनिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Zmap</td><td className="py-2 px-3">नेटवर्क स्कैनर</td><td className="py-2 px-3">पूरा इंटरनेट 5 मिनट में</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Unicornscan</td><td className="py-2 px-3">एडवांस्ड स्कैनर</td><td className="py-2 px-3">रिसर्च और परफॉर्मेंस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Zenmap</td><td className="py-2 px-3">Nmap का GUI</td><td className="py-2 px-3">विज़ुअल इंटरफ़ेस</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Rustscan</td><td className="py-2 px-3">तेज़ पोर्ट स्कैनर</td><td className="py-2 px-3">Rust में लिखा, Nmap इंटीग्रेशन</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="mt-2 text-gray-400 text-sm space-y-1">
          <li>• हमेशा -T4 यूज़ करें — T3 बहुत धीमा है</li>
          <li>• पहले -sn से होस्ट डिस्कवरी करें, फिर स्पेसिफिक होस्ट्स स्कैन करें</li>
          <li>• -oA हमेशा यूज़ करें — सभी फॉर्मेट्स में आउटपुट मिलेगा</li>
          <li>• NSE स्क्रिप्ट्स से पहले safe कैटेगरी से शुरू करें</li>
          <li>• -n फ्लैग से DNS रिज़ॉल्च बंद करें — स्कैन तेज़ होगा</li>
          <li>• Metasploit के साथ इंटीग्रेट करें — db_import से Nmap XML इम्पोर्ट करें</li>
          <li>• रेगुलरली Nmap अपडेट करें — नई स्क्रिप्ट्स और फीचर्स जुड़ते रहते हैं</li>
          <li>• अपने नेटवर्क को खुद स्कैन करें — कमज़ोरियां पहले खुद खोजें</li>
          <li>• ndiff से स्कैन कम्पेयर करो — चेंजेस ट्रैक होंगी</li>
          <li>• स्क्रिप्ट आर्ग्यूमेंट्स यूज़ करो — डिफ़ॉल्ट सेटिंग्स हमेशा बेस्ट नहीं</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Nmap एक शक्तिशाली नेटवर्क स्कैनिंग टूल है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए करें। बिना अनुमति के नेटवर्क स्कैनिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क एक्सेस अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें। सभी रिजल्ट्स को एन्क्रिप्टेड रखो और अधिकृत लोगों के साथ ही शेयर करो।
      </div>

      <div className="info-box mt-6">
        <strong>💡 अगला कदम:</strong> Nmap से नेटवर्क स्कैनिंग सीखने के बाद{' '}
        <Link to="/tool/metasploit-framework" className="text-neon-green underline">Metasploit</Link> सेक्शन में जाएं
        और एक्सप्लॉइटेशन सीखें! Nmap से मिली जानकारी का इस्तेमाल Metasploit में करो — db_import से XML इम्पोर्ट करो।
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ इम्पोर्टेन्ट रिमाइंडर:</strong> Nmap का इस्तेमाल हमेशा अधिकृत परमिशन के साथ करो। बिना परमिशन के स्कैनिंग अवैध है। भारत में आईटी एक्ट 2000 के तहत सज़ा हो सकती है। हमेशा लैब एनवायरनमेंट में प्रैक्टिस करो। Nmap के साथ Metasploit, Nikto, और दूसरे टूल्स भी सीखो — पूरा पेनेट्रेशन टेस्टिंग वर्कफ़्लो समझो।
      </div>
    </TutorialLayout>
  )
}
