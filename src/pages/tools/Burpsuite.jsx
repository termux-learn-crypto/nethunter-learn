import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Burpsuite() {
  return (
    <TutorialLayout
      title="burpsuite"
      subtitle="वेब एप्लिकेशन सिक्योरिटी टेस्टिंग का इंटीग्रेटेड प्लेटफॉर्म"
      icon="🔒"
      prev={{ to: '/tools', label: 'All Tools' }}
      next={{ to: '/tool/wireshark', label: 'wireshark' }}
    >
      <h2>What is Burp Suite?</h2>
      <p>
        Burp Suite दुनिया का सबसे लोकप्रिय वेब एप्लिकेशन सिक्योरिटी टेस्टिंग प्लेटफॉर्म है। PortSwigger कंपनी ने इसे बनाया है और यह वेब पेनेट्रेशन टेस्टिंग का इंडस्ट्री स्टैंडर्ड बन चुका है। इसमें प्रॉक्सी, स्कैनर, इन्ट्रूडर, रिपीटर, डिकोडर, कम्पेयरर, सीक्वेंसर — सब एक ही जगह है। HTTP/HTTPS ट्रैफिक इंटरसेप्ट और मॉडिफाई कर सकता है। दुनिया भर के बग बाउंटी हंटर्स, सिक्योरिटी रिसर्चर्स, और रेड टीम ऑपरेटर्स इसे इस्तेमाल करते हैं।
      </p>
      <p>
        Burp Suite Java में लिखा गया है और यह एक इंटरसेप्टिंग प्रॉक्सी के रूप में काम करता है — ब्राउज़र और टार्गेट सर्वर के बीच बैठकर सारा ट्रैफिक कैप्चर करता है। आप रिक्वेस्ट्स को रोक सकते हैं, मॉडिफाई कर सकते हैं, और फिर फॉरवर्ड कर सकते हैं। यह वेब सिक्योरिटी टेस्टिंग का सबसे पावरफुल और कंप्लीट टूल है।
      </p>
      <p>
        Burp Suite दो वर्जन्स में आता है — Community Edition (फ्री, लिमिटेड फीचर्स) और Professional Edition (paid, फुल फीचर्स)। Community में प्रॉक्सी, रिपीटर, डिकोडर, कम्पेयरर सब है लेकिन इन्ट्रूडर स्लो है और स्कैनर नहीं है। Professional में ऑटोमैटिक स्कैनर, फास्ट इन्ट्रूडर, और एडवांस्ड रिपोर्टिंग है। काली नेटहंटर में Community वर्जन प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        Burp Suite की खासियत है इसका एक्सटेंशन सिस्टम — BApp Store में 200+ कम्युनिटी एक्सटेंशन्स हैं जो Burp की क्षमता बहुत बढ़ा देते हैं। Autorize एक्सटेंशन से IDOR टेस्टिंग, JWT Editor से JWT टोकन मैनिपुलेशन, Turbo Intruder से फास्ट अटैक — सब कुछ एक्सटेंशन से possible है। Burp Suite का Collaborator feature out-of-band testing support करता है — blind SQLi, SSRF जैसी vulnerabilities detect करने के लिए।
      </p>
      <p>
        Burp Suite का Web Sockets support भी बहुत अच्छा है — real-time applications जैसे chat apps, live feeds, और gaming platforms को टेस्ट कर सकते हो। Infiltrator module HTTP/2 protocol को भी support करता है। Burp Suite का macro system complex authentication flows को automate कर सकता है — multi-step login, OAuth flows, SAML authentication सब handle होता है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Burp Suite केवल अपनी वेबसाइट या अधिकृत पेनेट्रेशन टेस्टिंग में ही इस्तेमाल करें। बिना अनुमति के ट्रैफिक इंटरसेप्ट करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत ट्रैफिक इंटरसेप्शन अपराध हो सकता है। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of Burp Suite</h2>
      <p>
        Burp Suite को Dafydd Stuttard ने 2003 में बनाया था। वे PortSwigger Web Security कंपनी के फाउंडर हैं। शुरू में यह एक सिंपल HTTP प्रॉक्सी था, लेकिन धीरे-धीरे इसमें रिपीटर, इन्ट्रूडर, स्कैनर जैसे टूल्स जुड़ते गए। 2010 में Professional वर्जन लॉन्च हुआ जिसमें ऑटोमैटिक स्कैनिंग थी।
      </p>
      <p>
        2015 में Burp Suite ने BApp Store लॉन्च किया जहां कम्युनिटी एक्सटेंशन्स share कर सकते हैं। 2018 में Collaborator feature add हुआ जो out-of-band testing support करता है। 2020 में HTTP/2 support add हुआ। 2022 में Burp Suite Enterprise Edition लॉन्च हुआ जो CI/CD pipeline में integrate होता है। आज Burp Suite 100+ देशों में 50,000+ से ज़्यादा सिक्योरिटी प्रोफेशनल्स इस्तेमाल करते हैं।
      </p>
      <p>
        PortSwigger ने Web Security Academy भी बनाई है जहां फ्री में वेब सिक्योरिटी सीख सकते हो। यह Burp Suite के साथ integrate है — लैब्स directly Burp में open होती हैं। PortSwigger का research blog भी बहुत famous है — नई vulnerabilities और techniques यहां publish होती हैं।
      </p>

      <h2>How Burp Suite Works?</h2>
      <p>
        Burp Suite एक इंटरसेप्टिंग प्रॉक्सी के रूप में काम करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">प्रॉक्सी इंटरसेप्शन:</strong> ब्राउज़र और सर्वर के बीच बैठकर HTTP/HTTPS ट्रैफिक कैप्चर करता है</li>
        <li><strong className="text-white">रिक्वेस्ट मॉडिफिकेशन:</strong> कैप्चर की गई रिक्वेस्ट को एडिट करके वापस भेज सकते हो</li>
        <li><strong className="text-white">साइट मैप:</strong> टार्गेट एप्लिकेशन का पूरा मैप बनाता है — सभी URL, पैरामीटर्स, फॉर्म्स</li>
        <li><strong className="text-white">स्कोप कंट्रोल:</strong> सिर्फ टार्गेट डोमेन का ट्रैफिक कैप्चर करता है, बाकी इग्नोर</li>
        <li><strong className="text-white">एन्क्रिप्शन हैंडलिंग:</strong> HTTPS ट्रैफिक को डिक्रिप्ट करके दिखाता है (CA सर्टिफिकेट से)</li>
        <li><strong className="text-white">वेब सॉकेट:</strong> WebSocket ट्रैफिक भी कैप्चर और मॉडिफाई कर सकता है</li>
        <li><strong className="text-white">HTTP/2 Support:</strong> Modern web protocols भी support करता है</li>
        <li><strong className="text-white">Collaborator:</strong> Out-of-band testing — blind vulnerabilities detect करता है</li>
        <li><strong className="text-white">Macro System:</strong> Complex authentication flows automate कर सकता है</li>
        <li><strong className="text-white">एक्सटेंशन API:</strong> Python/Java में custom extensions लिख सकते हो</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Burp Suite Community प्री-इंस्टॉल्ड आता है। Professional वर्जन PortSwigger की वेबसाइट से डाउनलोड करना होता है।
      </p>
      <CodeBlock
        title="Burp Suite इंस्टॉलेशन"
        code={`# काली में प्री-इंस्टॉल्ड है:
burpsuite

# अगर नहीं है तो:
sudo apt update
sudo apt install burpsuite

# Professional वर्जन (PortSwigger से):
# https://portswigger.net/burp/downloads
# डाउनलोड करके रन करें:
chmod +x burpsuite_pro_linux.sh
./burpsuite_pro_linux.sh

# हेडलेस मोड (GUI बिना):
# अगर सर्वर पर चलाना है:
java -jar burpsuite_pro.jar --headless=true

# JAR फाइल से रन:
java -jar /usr/share/burpsuite/burpsuite.jar

# Docker से:
docker run --rm -it -p 8080:8080 portswigger/burpsuite

# Memory settings (बड़े स्कैन्स के लिए):
java -Xmx4g -jar burpsuite.jar`}
      />

      <h2>Basic Setup</h2>
      <p>
        Burp Suite का इस्तेमाल शुरू करने के लिए तीन चीज़ें सेटअप करनी होती हैं — Burp लॉन्च, ब्राउज़र प्रॉक्सी, और CA सर्टिफिकेट।
      </p>
      <CodeBlock
        title="पूरा सेटअप"
        code={`# स्टेप 1: Burp Suite लॉन्च करें:
burpsuite

# स्टेप 2: Temporary project → Next → Start Burp

# स्टेप 3: Firefox प्रॉक्सी सेट करें:
# Firefox → Settings → Network Settings → Manual Proxy:
# HTTP Proxy: 127.0.0.1    Port: 8080
# "Also use this proxy for HTTPS" चेक करें

# स्टेप 4: CA सर्टिफिकेट इंस्टॉल करें:
# ब्राउज़र में http://burp ओपन करें
# "CA Certificate" क्लिक करें → डाउनलोड होगी
# Firefox → Settings → Certificates → Import
# डाउनलोड की गई .der फाइल सेलेक्ट करें
# "Trust this CA to identify websites" चेक करें

# अब सारा ब्राउज़र ट्रैफिक Burp से होकर जाएगा

# FoxyProxy Extension (Firefox):
# FoxyProxy install करें → Burp profile बनाएं
# एक क्लिक में proxy on/off कर सकते हो`}
      />

      <h2>Important Tabs</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Tab</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">कब इस्तेमाल करें</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Target</td><td className="py-2 px-3">टार्गेट मैनेजमेंट और साइट मैप</td><td className="py-2 px-3">स्कोप सेट करने और ऐप स्ट्रक्चर देखने के लिए</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Proxy</td><td className="py-2 px-3">HTTP/HTTPS ट्रैफिक इंटरसेप्ट</td><td className="py-2 px-3">रिक्वेस्ट/रिस्पॉन्स देखने और मॉडिफाई करने के लिए</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Repeater</td><td className="py-2 px-3">मैनुअल HTTP रिक्वेस्ट भेजना</td><td className="py-2 px-3">SQLi, XSS, IDOR जैसे मैनुअल टेस्ट के लिए</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Intruder</td><td className="py-2 px-3">ऑटोमेटेड अटैक (ब्रूट फोर्स, फज़िंग)</td><td className="py-2 px-3">पासवर्ड अटैक, पैरामीटर फज़िंग के लिए</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Scanner</td><td className="py-2 px-3">ऑटोमैटिक वल्नरेबिलिटी स्कैनिंग (Pro)</td><td className="py-2 px-3">ऑटोमैटिक वल्नरेबिलिटीज़ ढूंढने के लिए</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Decoder</td><td className="py-2 px-3">एन्कोडिंग/डिकोडिंग (Base64, URL, HTML)</td><td className="py-2 px-3">एन्कोडेड डेटा डिकोड करने के लिए</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Comparer</td><td className="py-2 px-3">दो रिक्वेस्ट/रिस्पॉन्स कम्पेयर</td><td className="py-2 px-3">रिस्पॉन्स डिफरेंस ढूंढने के लिए</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Sequencer</td><td className="py-2 px-3">टोकन रैंडमनेस एनालिसिस</td><td className="py-2 px-3">सेशन टोकन प्रेडिक्टेबिलिटी टेस्ट के लिए</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Proxy Intercept</h2>
      <p>
        प्रॉक्सी टैब Burp Suite का सबसे बेसिक और सबसे ज़रूरी फीचर है। यहां आप रियल-टाइम HTTP रिक्वेस्ट्स इंटरसेप्ट कर सकते हैं, मॉडिफाई कर सकते हैं, और फिर फॉरवर्ड कर सकते हैं।
      </p>
      <CodeBlock
        title="Proxy Intercept Usage"
        code={`# प्रॉक्सी टैब में जाएं:
# "Intercept is on" बटन दबाएं (हरा = ऑन)

# अब ब्राउज़र में कोई URL खोलें:
# रिक्वेस्ट Burp में रुक जाएगी
# रिक्वेस्ट एडिट कर सकते हैं:
# - URL/पाथ बदलें
# - हेडर्स मॉडिफाई करें
# - बॉडी/पैरामीटर्स बदलें
# - कुकीज़ एडिट करें

# "Forward" → रिक्वेस्ट सर्वर को भेज दो
# "Drop" → रिक्वेस्ट डिस्कार्ड कर दो

# HTTP History टैब:
# सारा ट्रैफिक लॉग होता है
# रिक्वेस्ट और रिस्पॉन्स दोनों देख सकते हैं
# फ़िल्टर लगाएं: हेडर, MIME टाइप, स्टेटस कोड

# WebSockets टैब:
# WebSocket messages भी कैप्चर होती हैं
# Real-time apps टेस्ट करने के लिए`}
      />

      <h2>Repeater</h2>
      <p>
        रिपीटर में मैनुअली HTTP रिक्वेस्ट्स भेज सकते हैं और रिस्पॉन्स देख सकते हैं। SQL इंजेक्शन, XSS, IDOR — सभी मैनुअल टेस्टिंग यहां होती है। यह वेब पेनेट्रेशन टेस्टिंग का सबसे ज़रूरी टैब है।
      </p>
      <CodeBlock
        title="Repeater Usage"
        code={`# प्रॉक्सी हिस्ट्री से रिक्वेस्ट:
# राइट-क्लिक → "Send to Repeater" (Ctrl+R)

# रिपीटर टैब में रिक्वेस्ट एडिट करें:
# - URL/पाथ बदलें
# - पैरामीटर्स मॉडिफाई करें
# - हेडर्स जोड़ें/हटाएं
# - बॉडी बदलें

# "Send" बटन दबाएं → रिस्पॉन्स दिखेगा

# SQL इंजेक्शन टेस्ट:
# ' OR 1=1-- पैरामीटर में डालें
# रिस्पॉन्स में एरर या डेटा चेक करें

# XSS टेस्ट:
# <script>alert(1)</script> पैरामीटर में डालें
# रिस्पॉन्स में रिफ्लेक्टेड दिखे या नहीं

# IDOR:
# ID बदलकर दूसरे यूज़र का डेटा एक्सेस करें

# CSRF टोकन टेस्ट:
# टोकन हटाकर रिक्वेस्ट भेजें
# अगर काम करे → CSRF vulnerability है`}
      />

      <h2>Intruder</h2>
      <p>
        इन्ट्रूडर ऑटोमेटेड अटैक टूल है — ब्रूट फोर्स, फज़िंग, एन्यूमरेशन सब। Community वर्जन में यह जानबूझकर स्लो किया गया है, Professional में फुल स्पीड पर काम करता है।
      </p>
      <CodeBlock
        title="Intruder Attack Types"
        code={`# रिक्वेस्ट राइट-क्लिक → "Send to Intruder" (Ctrl+I)

# Positions टैब:
# § सिंबल्स से मार्क करें कहां अटैक करना है
# उदाहरण: user=§admin§&pass=§test§

# Payloads टैब:
# Payload set 1 (user): यूज़रनेम वर्डलिस्ट लोड करें
# Payload set 2 (pass): पासवर्ड वर्डलिस्ट लोड करें

# Attack Types:
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Sniper — सिंगल पेलोड सेट, एक पोज़िशन
#   → एक-एक करके हर पोज़िशन पर टेस्ट करता है
#
# Battering Ram — सिंगल पेलोड, सभी पोज़िशन्स
#   → एक ही पेलोड सभी पोज़िशन्स पर एक साथ
#
# Pitchfork — मल्टीपल पेलोड, पेयर-वाइज़
#   → पेलोड 1 का पहला + पेलोड 2 का पहला
#
# Cluster Bomb — मल्टीपल पेलोड, सभी कॉम्बिनेशन
#   → सभी possible कॉम्बिनेशन टेस्ट करता है

# Payload Types:
# Simple list — वर्डलिस्ट फाइल
# Numbers — नंबर रेंज (1-1000)
# Dates — तारीख रेंज
# Brute forcer — कैरेक्टर कॉम्बिनेशन
# Null payloads — रिपीटेड रिक्वेस्ट्स`}
      />

      <h2>Scanner (Pro Only)</h2>
      <p>
        Professional वर्जन में ऑटोमैटिक वल्नरेबिलिटी स्कैनर है। यह OWASP Top 10 वल्नरेबिलिटीज़ ऑटोमैटिकली ढूंढता है — SQLi, XSS, CSRF, और बहुत कुछ।
      </p>
      <CodeBlock
        title="Scanner Usage"
        code={`# Professional में एक्टिव स्कैनिंग:
# साइट मैप में राइट-क्लिक → "Do active scan"
# Burp ऑटोमैटिकली सभी URL स्कैन करेगा

# Community में मैनुअल स्कैनिंग:
# 1. प्रॉक्सी से ट्रैफिक देखें
# 2. इंटरेस्टिंग एंडपॉइंट्स नोट करें
# 3. रिपीटर में टेस्ट करें:
#    - SQL इंजेक्शन पेलोड्स
#    - XSS पेलोड्स
#    - पाथ ट्रैवर्सल (../../etc/passwd)
#    - IDOR (ID बदलकर दूसरे का डेटा)
#    - ऑथेंटिकेशन बायपास

# Live Scanning:
# Proxy → Options → Live Scanning → "Use live scanning"
# ऑटोमैटिकली रिक्वेस्ट्स स्कैन करेगा

# Scan Queue:
# Dashboard → Scan Queue में progress देख सकते हो
# Issue Activity में found vulnerabilities दिखती हैं`}
      />

      <h2>Decoder</h2>
      <p>
        डिकोडर टैब में एन्कोडेड डेटा को डिकोड और एन्कोड कर सकते हो। यह वेब टेस्टिंग में बहुत काम आता है।
      </p>
      <CodeBlock
        title="Decoder Usage"
        code={`# डिकोडर टैब में डेटा पेस्ट करें:
# ऑटो-डिटेक्ट: Base64, URL, HTML, Hex, GZIP

# मैनुअल डिकोडिंग:
# Select data → Decode as → Base64
# Select data → Decode as → URL
# Select data → Decode as → HTML

# एन्कोडिंग:
# Select data → Encode as → Base64
# Select data → Encode as → URL

# Smart Decode:
# ऑटोमैटिकली multiple layers डिकोड करता है
# उदाहरण: Base64 → URL encoded → HTML entities

# Hashing:
# Select data → Hash as → MD5/SHA-1/SHA-256
# पासवर्ड हैश verify करने के लिए`}
      />

      <h2>Comparer</h2>
      <p>
        कम्पेयरर दो रिक्वेस्ट या रिस्पॉन्स को साइड-बाय-साइड कम्पेयर करता है। ब्रूट फोर्स अटैक में सही और गलत रिस्पॉन्स का फ़र्क ढूंढने में बहुत उपयोगी है।
      </p>
      <CodeBlock
        title="Comparer Usage"
        code={`# दो रिक्वेस्ट/रिस्पॉन्स सेलेक्ट करें:
# Proxy History से → राइट-क्लिक → "Send to Comparer"

# दो तरीके:
# 1. Words — टेक्स्ट कम्पेयर (HTML, JSON, etc.)
# 2. Bytes — बाइनरी कम्पेयर

# कम्पेयर करें:
# Comparer tab → दोनों items सेलेक्ट करें
# "Compare" बटन दबाएं

# ब्रूट फोर्स में उपयोग:
# सही पासवर्ड → रिस्पॉन्स "Welcome admin"
# गलत पासवर्ड → रिस्पॉन्स "Invalid credentials"
# Comparer से फ़र्क ढूंढें → फ़िल्टर बनाएं`}
      />

      <h2>Sequencer</h2>
      <p>
        सीक्वेंसर टोकन रैंडमनेस एनालिसिस करता है — सेशन ID, CSRF टोकन, पासवर्ड रीसेट टोकन कितने प्रेडिक्टेबल हैं। यह सिक्योरिटी ऑडिट में बहुत महत्वपूर्ण है।
      </p>
      <CodeBlock
        title="Sequencer Usage"
        code={`# टोकन सैंपल कलेक्ट करें:
# Proxy History → टोकन वाला रिक्वेस्ट → राइट-क्लिक
# "Send to Sequencer"

# Live Capture:
# Sequencer tab → "Start live capture"
# Burp बार-बार रिक्वेस्ट भेजेगा और टोकन्स कलेक्ट करेगा

# एनालिसिस:
# "Analyze now" बटन दबाएं
# रिजल्ट: Effective Entropy, Reliability Rating

# अगर entropy कम है → टोकन प्रेडिक्टेबल है
# Session ID guess करके session hijacking possible है`}
      />

      <h2>BApp Store Extensions</h2>
      <p>
        Burp Suite का BApp Store है जहां कम्युनिटी बनाए एक्सटेंशन्स मिलते हैं। ये एक्सटेंशन्स Burp की क्षमता बहुत बढ़ा देते हैं।
      </p>
      <CodeBlock
        title="ज़रूरी Extensions"
        code={`# BApp Store से इंस्टॉल करें:
# Burp → Extender → BApp Store

# ज़रूरी एक्सटेंशन्स:
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Autorize — ऑथोराइज़ेशन टेस्टिंग (IDOR)
# Logger++ — एडवांस्ड लॉगिंग
# Active Scan++ — बेहतर स्कैनिंग
# JSON Beautifier — JSON फॉर्मेटिंग
# JWT Editor — JWT टोकन एडिटिंग
# Turbo Intruder — फास्ट अटैक (Python)
# Param Miner — हिडन पैरामीटर ढूंढना
# Collaborator Everywhere — OOB टेस्टिंग
# InQL — GraphQL टेस्टिंग
# Hackvertor — एडवांस्ड एन्कोडिंग/डिकोडिंग
# Software Vulnerability Scanner — CVE चेकिंग
# JS Link Finder — JavaScript endpoints ढूंढना`}
      />

      <h2>Authenticated Scanning</h2>
      <p>
        लॉगिन के बाद के पेजेज़ स्कैन करने के लिए ऑथेंटिकेशन सेटअप करना ज़रूरी है।
      </p>
      <CodeBlock
        title="Authentication Setup"
        code={`# स्टेप 1: लॉगिन करें और प्रॉक्सी में रिक्वेस्ट कैप्चर करें

# स्टेप 2: सेशन हैंडलिंग रूल्स सेट करें:
# Project Options → Sessions → Session Handling Rules
# "Add" → Rule Actions → "Check session is valid"
# फिर "If session invalid" → "Perform macro"

# स्टेप 3: मैक्रो रिकॉर्ड करें:
# Project Options → Sessions → Macros → Add
# लॉगिन रिक्वेस्ट सेलेक्ट करें → OK

# स्टेप 4: स्कोप सेट करें:
# Target → Scope → टार्गेट URL ऐड करें

# अब Burp ऑटोमैटिकली लॉगिन मैनेज करेगा`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Burp Suite को Python से एक्सटेंशन्स लिखकर ऑटोमेट कर सकते हो।
      </p>
      <CodeBlock
        title="Burp Extension (Python)"
        code={`# Burp Suite Python Extension:
from burp import IBurpExtender
from burp import IHttpListener

class BurpExtender(IBurpExtender, IHttpListener):
    def registerExtenderCallbacks(self, callbacks):
        self._callbacks = callbacks
        self._helpers = callbacks.getHelpers()
        callbacks.setExtensionName("Auto Tester")
        callbacks.registerHttpListener(self)
        print("[+] Extension loaded!")

    def processHttpMessage(self, toolFlag, messageIsRequest, messageInfo):
        if messageIsRequest:
            # हर रिक्वेस्ट में custom हेडर जोड़ें:
            requestInfo = self._helpers.analyzeRequest(messageInfo)
            headers = list(requestInfo.getHeaders())
            headers.add("X-Test-Header: injected")
            body = messageInfo.getRequest()[requestInfo.getBodyOffset():]
            messageInfo.setRequest(
                self._helpers.buildHttpMessage(headers, body)
            )`}
      />

      <CodeBlock
        title="Automation Script (Python)"
        code={`# Burp Suite REST API automation:
import requests

BURP_API = "http://127.0.0.1:1337"

# स्कैन शुरू करें:
def start_scan(url):
    data = {
        "urls": [url],
        "scan_configuration": "Crawl and audit"
    }
    resp = requests.post(f"{BURP_API}/v0.1/scan", json=data)
    return resp.json()

# स्कैन रिजल्ट्स लें:
def get_results(scan_id):
    resp = requests.get(f"{BURP_API}/v0.1/scan/{scan_id}")
    return resp.json()

# Issue रिपोर्ट:
def get_issues(url):
    resp = requests.get(f"{BURP_API}/v0.1/issue")
    issues = resp.json()
    for issue in issues:
        if url in issue.get("url", ""):
            print(f"[!] {issue['type']}: {issue['url']}")`}
      />

      <h2>Comparison Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Burp Suite</th>
              <th className="text-left py-2 px-3 text-neon-green">OWASP ZAP</th>
              <th className="text-left py-2 px-3 text-neon-green">Caido</th>
              <th className="text-left py-2 px-3 text-neon-green">mitmproxy</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कीमत</td><td className="py-2 px-3">Free / Pro ($449/yr)</td><td className="py-2 px-3">फ्री (ओपन सोर्स)</td><td className="py-2 px-3">Free / Pro ($99/yr)</td><td className="py-2 px-3">फ्री (ओपन सोर्स)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्कैनर</td><td className="py-2 px-3">Pro में बेस्ट</td><td className="py-2 px-3">फ्री में भी है</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">इन्ट्रूडर</td><td className="py-2 px-3">Pro में फास्ट</td><td className="py-2 px-3">Fuzzer है</td><td className="py-2 px-3">Repeater है</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">एक्सटेंशन्स</td><td className="py-2 px-3">BApp Store (200+)</td><td className="py-2 px-3">Marketplace (100+)</td><td className="py-2 px-3">लिमिटेड</td><td className="py-2 px-3">Python addons</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">UI</td><td className="py-2 px-3">Java Swing (भारी)</td><td className="py-2 px-3">Java Swing</td><td className="py-2 px-3">मॉडर्न UI</td><td className="py-2 px-3">CLI / Web UI</td></tr>
            <tr><td className="py-2 px-3 text-white">बेस्ट फॉर</td><td className="py-2 px-3">प्रोफेशनल पेन टेस्टिंग</td><td className="py-2 px-3">फ्री ऑल्टरनेटिव</td><td className="py-2 px-3">लाइटवेट ऑप्शन</td><td className="py-2 px-3">CLI-based automation</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'HTTPS साइट्स नहीं खुल रहीं', a: 'Burp CA सर्टिफिकेट इंस्टॉल करें। http://burp से CA डाउनलोड करें और ब्राउज़र में इम्पोर्ट करें। "Trust this CA to identify websites" चेक करें।' },
          { q: 'ब्राउज़र कनेक्ट नहीं हो रहा', a: 'प्रॉक्सी सेटिंग्स चेक करें — 127.0.0.1:8080 सही है या नहीं। Burp Suite चल रहा है या नहीं। फ़ायरवॉल ब्लॉक तो नहीं कर रही।' },
          { q: 'इन्ट्रूडर बहुत स्लो है', a: 'Community वर्जन में जानबूझकर स्लो है। Professional वर्जन या Hydra (कमांड लाइन) इस्तेमाल करें। Turbo Intruder extension भी try करें।' },
          { q: 'WebSocket ट्रैफिक नहीं दिख रहा', a: 'Proxy → Options → WebSocket → "Enable WebSocket messaging" चेक करें।' },
          { q: 'बहुत ज़्यादा ट्रैफिक आ रहा है', a: 'Target → Scope में सिर्फ टार्गेट URL ऐड करें। प्रॉक्सी → Options में फ़िल्टर लगाएं — MIME टाइप, स्टेटस कोड से।' },
          { q: 'स्कैनर रिजल्ट्स बहुत नॉइज़ी हैं', a: 'Issue Types फ़िल्टर करें — सिर्फ High/Medium severity दिखाएं। False positives को "Not an issue" मार्क करें।' },
          { q: 'मोबाइल ऐप ट्रैफिक कैप्चर नहीं हो रहा', a: 'Phone के Wi-Fi settings में proxy सेट करें Burp के IP पर। CA सर्टिफिकेट install करें। Android 7+ में network_security_config.xml bypass करना पड़ेगा।' },
          { q: 'GraphQL queries capture नहीं हो रहीं', a: 'Content-Type application/graphql होना चाहिए। InQL extension install करें BApp Store से।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Burp Suite के अटैक्स से कैसे बचें (डेवलपर्स के लिए):
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">WAF:</strong> Web Application Firewall — Burp के स्कैनिंग पैटर्न डिटेक्ट करता है</li>
        <li><strong className="text-white">रेट लिमिटिंग:</strong> IP-based रेट लिमिट — ब्रूट फोर्स अटैक रोकता है</li>
        <li><strong className="text-white">इनपुट वैलिडेशन:</strong> सभी यूज़र इनपुट को सर्वर-साइड वैलिडेट करें</li>
        <li><strong className="text-white">CSRF टोकन:</strong> हर फॉर्म सबमिशन पर CSRF टोकन वैलिडेट करें</li>
        <li><strong className="text-white">सेशन मैनेजमेंट:</strong> स्ट्रॉन्ग सेशन ID जनरेशन — Sequencer से टेस्ट करें</li>
        <li><strong className="text-white">लॉगिंग और मॉनिटरिंग:</strong> सस्पीशियस रिक्वेस्ट पैटर्न डिटेक्ट करें</li>
        <li><strong className="text-white">Content Security Policy:</strong> CSP हेडर सेट करें — XSS mitigate होता है</li>
        <li><strong className="text-white">CORS Configuration:</strong> सही CORS पॉलिसी सेट करें</li>
        <li><strong className="text-white">पैरामीटराइज़्ड क्वेरीज़:</strong> SQL injection prevent करने के लिए</li>
        <li><strong className="text-white">Dependency Updates:</strong> सभी libraries updated रखें — known CVEs patch करें</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Burp Suite प्रैक्टिस के लिए सेफ लैब बनाओ:
      </p>
      <CodeBlock
        title="Practice Lab"
        code={`# Practice apps:
# 1. DVWA (Damn Vulnerable Web Application)
#    docker run --rm -it -p 80:80 vulnerables/web-dvwa

# 2. Juice Shop (OWASP)
#    docker run --rm -p 3000:3000 bkimminich/juice-shop

# 3. WebGoat (OWASP)
#    docker run --rm -p 8080:8080 webgoat/webgoat

# 4. PortSwigger Labs (फ्री):
#    https://portswigger.net/web-security/all-labs

# लैब सेटअप:
# 1. Burp Suite लॉन्च करें
# 2. प्रॉक्सी सेट करें
# 3. Practice app ओपन करें
# 4. ट्रैफिक कैप्चर करें
# 5. वल्नरेबिलिटीज़ ढूंढें

# Pentester Lab (advanced):
# https://pentesterlab.com — paid, लेकिन बहुत अच्छा`}
      />

      <h2>Burp Collaborator</h2>
      <p>
        Burp Collaborator Professional वर्जन का एक powerful feature है जो out-of-band testing support करता है। यह unique subdomains generate करता है — अगर उस subdomain पर request आए तो vulnerability confirmed होती है। Blind SQL injection, SSRF, out-of-band XXE जैसी vulnerabilities detect करने में यह बहुत useful है।
      </p>
      <CodeBlock
        title="Collaborator Usage"
        code={`# Collaborator Client:
# Burp → Collaborator → Copy to clipboard
# एक unique subdomain मिलेगा: xyz.burpcollaborator.net

# Blind SQL Injection टेस्ट:
# Repeater में payload:
# '; EXEC xp_dirtree '//xyz.burpcollaborator.net'--
# अगर Collaborator में DNS request आए → SQLi confirmed

# SSRF Detection:
# URL parameter में: http://xyz.burpcollaborator.net
# अगर request आए → SSRF vulnerability

# Out-of-band XXE:
# XML payload में: <!ENTITY xxe SYSTEM "http://xyz.burpcollaborator.net">
# अगर request आए → XXE confirmed

# Collaborator Everywhere Extension:
# BApp Store से install करें
# हर request में automatically Collaborator payloads inject करता है`}
      />

      <h2>Macro System</h2>
      <p>
        Burp Suite का macro system complex multi-step workflows को automate करता है। यह authenticated scanning, session handling, और rate-limited testing में बहुत useful है।
      </p>
      <CodeBlock
        title="Macro Setup"
        code={`# Macro बनाएं:
# Project Options → Sessions → Macros → Add
# रिक्वेस्ट्स सेलेक्ट करें (लॉगिन flow)
# हर step में parameters extract करें

# Multi-step Login Macro:
# Step 1: GET /login → CSRF token extract करें
# Step 2: POST /login → username, password, csrf_token
# Step 3: GET /dashboard → session verify करें

# Session Handling Rule:
# Project Options → Sessions → Add Rule
# Rule Actions: "Check session is valid"
# → "If session invalid → Run macro"
# Scope: URLs in suite scope

# OAuth Flow Macro:
# GET /authorize → state parameter extract
# POST /login → credentials submit
# GET /callback → code parameter extract
# POST /token → access token receive`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Burp Usage"
        code={`# मैक्रोज़ और सेशन हैंडलिंग:
# लॉगिन के बाद के पेजेज़ स्कैन करने के लिए
# Project Options → Sessions → Add Rule
# "Check session validity" → "If invalid → Run macro"

# रेक्स मैचिंग और रिप्लेस:
# Proxy → Options → Match and Replace
# Request: Cookie: session=old → session=new
# Response: <title>Admin</title> → <title>User</title>

# इन्विसिबल प्रॉक्सी:
# ब्राउज़र एक्सटेंशन के बिना भी Burp चला सकते हो
# Proxy → Options → Proxy Listeners → Import CA certificate

# Collaborator (Pro):
# Out-of-band testing — Blind SQLi, SSRF detect करने के लिए
# Burp Collaborator generate करता है unique subdomain
# अगर उस subdomain पर request आए → vulnerability confirmed

# Intruder Grep-Match:
# Options → Grep-Match → "admin" add करें
# अब हर response में "admin" highlight होगा
# ब्रूट फोर्स में सही पासवर्ड पहचानने में काम आता है

# Resource Pool:
# Project Options → Resource Pool → थ्रेड्स सेट करें
# Rate limiting avoid करने के लिए`}
      />

      <h2>Burp Extensions Development</h2>
      <p>
        Burp Suite का extension system इसे सबसे powerful बनाता है। आप Python या Java में custom extensions लिखकर Burp की functionality बढ़ा सकते हो। Extensions HTTP requests/responses intercept कर सकती हैं, custom scan checks implement कर सकती हैं, और UI elements add कर सकती हैं।
      </p>
      <CodeBlock
        title="Python Extension Template"
        code={`# Burp Suite Python Extension — Template
from burp import IBurpExtender
from burp import IScannerCheck
from burp import IHttpListener

class BurpExtender(IBurpExtender, IHttpListener):
    def registerExtenderCallbacks(self, callbacks):
        self._callbacks = callbacks
        self._helpers = callbacks.getHelpers()
        callbacks.setExtensionName("My Extension")
        callbacks.registerHttpListener(self)
        print("[+] Extension loaded successfully!")

    def processHttpMessage(self, toolFlag, messageIsRequest, messageInfo):
        if messageIsRequest:
            # हर outgoing request modify करो
            requestInfo = self._helpers.analyzeRequest(messageInfo)
            headers = list(requestInfo.getHeaders())
            # Custom header add करो
            headers.append("X-My-Header: test-value")
            body = messageInfo.getRequest()[requestInfo.getBodyOffset():]
            messageInfo.setRequest(
                self._helpers.buildHttpMessage(headers, body)
            )
        else:
            # Response analyze करो
            responseInfo = self._helpers.analyzeResponse(messageInfo.getResponse())
            status_code = responseInfo.getStatusCode()
            if status_code == 500:
                print(f"[!] Server Error: {messageInfo.getHttpService().getHost()}")


# Custom Scanner Check:
class CustomScanner(IScannerCheck):
    def doActiveScan(self, basePair, insertionPoint):
        # Custom vulnerability checks
        # SQL injection, XSS, SSRF — कुछ भी
        issues = []
        # ... test logic ...
        return issues`}
      />
      <CodeBlock
        title="BApp Store से Extensions Manage करें"
        code={`# Extensions install करें:
# Burp → Extensions → BApp Store
# Search करें → Install बटन दबाएं

# Manual extension load:
# Burp → Extensions → Add
# Extension type: Python/Java
# Extension file: /path/to/extension.py

# Extensions enable/disable:
# Burp → Extensions → Installed
# Checkbox से toggle करें

# Extension logs देखें:
# Burp → Extensions → Output
# यहां extension के print statements दिखते हैं

# Extension errors debug करें:
# Burp → Extensions → Errors
# Python tracebacks यहां मिलते हैं`}
      />

      <h2>REST API Automation</h2>
      <p>
        Burp Suite Professional में REST API available है जिससे scans automate कर सकते हो। CI/CD pipeline में integrate करने के लिए यह feature बहुत useful है।
      </p>
      <CodeBlock
        title="REST API Commands"
        code={`# Burp REST API (Professional):
# Default: http://127.0.0.1:1337

# Scan शुरू करें:
curl -X POST "http://127.0.0.1:1337/v0.1/scan" \\
  -H "Content-Type: application/json" \\
  -d '{"urls":["https://target.com"],"scan_configuration":"Crawl and audit"}'

# Scan status check करें:
curl "http://127.0.0.1:1337/v0.1/scan/{scan_id}"

# Issues list करें:
curl "http://127.0.0.1:1337/v0.1/issue"

# Scan cancel करें:
curl -X DELETE "http://127.0.0.1:1337/v0.1/scan/{scan_id}"

# Site map data:
curl "http://127.0.0.1:1337/v0.1/sitemap?url-prefix=https://target.com"`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Burp Suite फ्री है?', a: 'Community Edition फ्री है — प्रॉक्सी, रिपीटर, डिकोडर सब है। Professional ($449/yr) में स्कैनर, फास्ट इन्ट्रूडर, और रिपोर्टिंग है।' },
          { q: 'OWASP ZAP या Burp — कौन बेहतर?', a: 'Burp Pro सबसे बेस्ट है। Community vs ZAP में ZAP बेहतर है क्योंकि फ्री में स्कैनर भी है।' },
          { q: 'हेडलेस सर्वर पर चला सकते हैं?', a: 'हाँ, java -jar burpsuite.jar --headless=true से। लेकिन GUI ज़्यादा convenient है।' },
          { q: 'क्या Android ट्रैफिक कैप्चर कर सकता है?', a: 'हाँ! Android डिवाइस में Wi-Fi प्रॉक्सी सेट करें Burp के IP पर। CA सर्टिफिकेट इंस्टॉल करें।' },
          { q: 'WebSocket ट्रैफिक कैप्चर होता है?', a: 'हाँ, Burp WebSocket सपोर्ट करता है। Proxy → Options → WebSocket settings enable करें।' },
          { q: 'क्या GraphQL API टेस्ट कर सकता है?', a: 'हाँ! Repeater में GraphQL क्वेरीज़ भेज सकते हो। InQL एक्सटेंशन भी है BApp Store में।' },
          { q: 'REST API कैसे टेस्ट करें?', a: 'Repeater में JSON body के साथ request भेजो। Content-Type: application/json हेडर सेट करो। Intruder से API endpoint fuzzing करो।' },
          { q: 'स्कैन रिपोर्ट कैसे जनरेट करें?', a: 'Professional में: Target → Report Issues → HTML/XML report। Community में manually findings document करने पड़ते हैं।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        Burp Suite real-world web application security testing में industry standard tool है। Bug bounty hunters, red teamers, और security auditors सभी इसे daily use करते हैं। PortSwigger के research team ने कई critical vulnerabilities discover की हैं Burp Suite का उपयोग करके जो global web security को प्रभावित करती हैं।
      </p>
      <p>
        एक famous case study है — 2019 में एक security researcher ने Burp Suite का उपयोग करके एक major e-commerce platform में critical IDOR vulnerability discover की। Autorize extension से authorization testing करते हुए उसने पाया कि API endpoints पर ID change करने से दूसरे users का data access हो रहा था। Burp Collaborator से out-of-band data exfiltration confirm हुई। $15,000 bounty मिली।
      </p>
      <p>
        एक और case में penetration testing team ने Burp Suite Scanner use करके एक banking application में blind SQL injection discover की। Collaborator DNS interaction confirm करने पर manually Repeater से exploit develop किया। Report में detailed evidence था — request, response, और impact analysis। Client ने critical severity assign किया और 48 hours में patch deploy किया।
      </p>
      <p>
        Enterprise environments में Burp Suite Enterprise Edition CI/CD pipeline में integrate होता है। हर code commit पर automatic security scan run होता है। एक fintech company ने बताया कि Burp Enterprise integration के बाद production में vulnerabilities 70% कम हो गईं। Developers को real-time feedback मिलता है और security issues shift-left approach से fix होते हैं।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Burp Suite standalone powerful है लेकिन दूसरे tools के साथ integrate करने पर testing workflow बहुत efficient हो जाता है। Modern penetration testing methodology में tool chaining essential है।
      </p>
      <CodeBlock
        title="Integration Examples"
        code={`# Nmap + Burp Suite (recon → testing):
# Nmap से services discover करो:
nmap -sV -sC target.com -oX scan.xml
# Burp में discovered URLs import करो:
# Target → Site map → Import → Select scan.xml

# Sqlmap + Burp (SQLi automation):
# Burp Proxy log से request export करो:
# Proxy → HTTP History → Right-click → Copy as curl command
# Sqlmap में paste करो:
sqlmap -u "https://target.com/page?id=1" --cookie="session=abc"

# OWASP ZAP + Burp (dual scanning):
# Burp proxy through ZAP:
# ZAP → localhost:8090 → Burp → localhost:8080 → Target
# दोनों tools के results compare करो

# Metasploit + Burp (exploit development):
# Burp में vulnerability find करो
# Metasploit में exploit module develop करो
# Burp Repeater से manual verification

# Ffuf + Burp (directory fuzzing):
# Ffuf से directories find करो:
ffuf -u https://target.com/FUZZ -w wordlist.txt -o output.json
# Results Burp में import करो detailed testing के लिए

# Nikto + Burp (server scanning):
# Nikto through Burp proxy:
nikto -h target.com -useproxy http://127.0.0.1:8080
# दोनों tools के findings correlate करो`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Burp Suite Java-based application है इसलिए memory और CPU optimization important है। Large applications scan करते समय performance issues आ सकते हैं। Enterprise environments में efficient scanning critical है।
      </p>
      <CodeBlock
        title="Performance Optimization"
        code={`# Memory increase (बड़े scans के लिए):
java -Xmx8g -jar burpsuite.jar
# 8GB RAM allocate करो Burp को

# Project file optimization:
# Project → Project Options → Misc → Scheduled Tasks
# Auto-save interval increase करो (performance improve होगी)

# Scope optimization:
# Target → Scope → सिर्फ target domains add करो
# बाकी traffic ignore होगा → memory save

# Scanner throttle:
# Dashboard → Scan Configuration → Throttle
# Rate limiting avoid करने के लिए requests per second limit करो

# Resource Pool management:
# Project Options → Resource Pool
# Parallel connections limit करो (10-20 recommended)
# Throttle delay set करो (100-500ms)

# Connection pooling:
# Project Options → Connections → Connection Pool
# Pool size: 32 (default), increase if needed

# JVM garbage collection tuning:
java -XX:+UseG1GC -XX:MaxGCPauseMillis=200 -Xmx4g -jar burpsuite.jar

# SSD optimization:
# Burp project file SSD पर store करो
# Temporary files SSD पर redirect करो`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Professional penetration testing में detailed reporting बहुत important है। Burp Suite Professional में built-in reporting है लेकिन Community Edition में manually document करना पड़ता है। Proper evidence collection और documentation client communication के लिए essential है।
      </p>
      <CodeBlock
        title="Reporting Workflow"
        code={`# Professional Report Generation:
# Target → Report Issues → Select issues
# Format: HTML, XML
# Include: Request/Response, Screenshots, Remediation

# Community Edition Reporting:
# 1. Proxy History export करो:
# Proxy → HTTP History → Select → Copy to file

# 2. Findings document करो:
# हर vulnerability के लिए:
# - Title (OWASP category)
# - Affected URL
# - Request/Response (sanitized)
# - Impact description
# - Remediation steps
# - CVSS score

# 3. Screenshot evidence:
# हर finding का screenshot लो
# Burp → Repeater → Response tab screenshot

# 4. Site map export:
# Target → Site map → Right-click → Copy URLs
# यह complete application structure देता है

# Automation:
# Burp REST API से automated report generation:
curl "http://127.0.0.1:1337/v0.1/issue" > findings.json

# Custom report template:
# Markdown template use करो:
echo "## Finding: SQL Injection" >> report.md
echo "- URL: https://target.com/login" >> report.md
echo "- Severity: Critical" >> report.md
echo "- Payload: ' OR 1=1--" >> report.md`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">OWASP ZAP</td><td className="py-2 px-3">वेब सिक्योरिटी स्कैनर</td><td className="py-2 px-3">फ्री, ओपन सोर्स, ऑटोमैटिक स्कैनिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Caido</td><td className="py-2 px-3">मॉडर्न वेब प्रॉक्सी</td><td className="py-2 px-3">लाइटवेट, फास्ट, मॉडर्न UI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">mitmproxy</td><td className="py-2 px-3">कमांड-लाइन प्रॉक्सी</td><td className="py-2 px-3">Python स्क्रिप्टेबल, CLI-based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nikto</td><td className="py-2 px-3">वेब सर्वर स्कैनर</td><td className="py-2 px-3">सिंपल, तेज़, कमांड-लाइन</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Sqlmap</td><td className="py-2 px-3">SQL इंजेक्शन ऑटोमेशन</td><td className="py-2 px-3">SQLi के लिए बेस्ट ऑटोमेटेड टूल</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Bug Bounty Workflow</h2>
      <p>
        Burp Suite bug bounty hunting का primary tool है। Professional bug bounty hunters standardized workflow follow करते हैं जो Burp Suite के features पर based होता है। Reconnaissance से लेकर exploitation और reporting तक — हर step में Burp use होता है।
      </p>
      <CodeBlock
        title="Bug Bounty Workflow"
        code={`# Step 1: Reconnaissance
# Target scope define करो:
# Target → Scope → Add URL prefix: https://target.com
# Include: *.target.com
# Exclude: *.static.target.com, *.cdn.target.com

# Step 2: Content Discovery
# Site map populate करो:
# Browser में target browse करो (proxy through Burp)
# Target → Site map → Right-click → Engage all tools
# या Crawl (Pro) run करो

# Step 3: Parameter Mining
# Param Miner extension use करो:
# BApp Store → Param Miner → Install
# Right-click → Guess hidden parameters
# या manual: Repeater में parameters test करो

# Step 4: Vulnerability Testing
# Repeater में endpoints test करो:
# - SQLi: ', " OR 1=1, UNION SELECT, time-based
# - XSS: <script>, <img onerror>, SVG onload
# - IDOR: IDs change करके दूसरे users का data
# - SSRF: internal URLs, file://, gopher://
# - XXE: XML entities inject करो
# - Race conditions: Turbo Intruder से parallel requests

# Step 5: Authentication Testing
# Autorize extension:
# एक request "Access authorized" mark करो
# दूसरी request "Access unauthenticated" mark करो
# Autorize automatically IDOR check करेगा

# Step 6: Report Preparation
# हर finding के लिए:
# - Clear title
# - Affected URL + parameters
# - Steps to reproduce
# - Request/Response evidence
# - Impact (what can an attacker do?)
# - Remediation suggestion`}
      />

      <h2>Legal and Ethical Considerations</h2>
      <p>
        Burp Suite web application testing का सबसे powerful tool है लेकिन इसका misuse serious legal consequences दे सकता है। HTTP/HTTPS traffic intercept करना, requests modify करना, automated attacks चलाना — सब authorized testing में ही करें। Bug bounty programs में rules of engagement strictly follow करें।
      </p>
      <p>
        भारत में IT Act 2000 की धारा 43 और 66 के तहत unauthorized web application testing अपराध है। Burp Suite का Proxy, Intruder, Scanner — सभी offensive capabilities हैं। Written authorization हमेशा रखें। Scope clearly define करें — कौन से URLs, कौन से attacks allowed हैं। Production data access करने से बचें। Findings responsibly disclose करें।
      </p>
      <p>
        PortSwigger Web Security Academy free resources provide करता है ethical hacking सीखने के लिए। Burp Suite के साथ hands-on labs available हैं। OWASP Testing Guide follow करें methodology के लिए। Professional certifications like OSCP, OSWE, GWAPT ethical hacking validate करती हैं। Responsible use cybersecurity community को stronger बनाता है।
      </p>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Burp Suite वेब टेस्टिंग का किंग है — Proxy, Repeater, Intruder तीन मास्टर कर लो</li>
          <li>PortSwigger Web Security Academy से फ्री में सीखो — hands-on labs हैं</li>
          <li>BApp Store से Autorize, Logger++, Turbo Intruder ज़रूर इंस्टॉल करो</li>
          <li>FoxyProxy extension से proxy on/off एक click में करो</li>
          <li>Repeater में Ctrl+R से request भेजो — fastest workflow</li>
          <li>Target → Scope में सिर्फ target URL add करो — noise reduce होगी</li>
          <li>Match and Replace rules से automatic request/response modification करो</li>
          <li>Macro system complex authentication flows automate करता है</li>
          <li>Collaborator blind vulnerabilities detect करता है — Pro feature</li>
          <li>Turbo Intruder (BApp) Community में Intruder की speed problem solve करता है</li>
          <li>Logger++ extension से comprehensive traffic logging होती है</li>
          <li>Param Miner hidden parameters automatically discover करता है</li>
          <li>Comparer tab brute force में correct/incorrect responses differentiate करने में useful है</li>
          <li>Sequencer session token randomness analyze करता है — critical security audit</li>
          <li>REST API automation CI/CD pipeline में Burp integrate करने के लिए</li>
          <li>Headless mode में Burp server पर भी चला सकते हो — automated scanning के लिए</li>
          <li>GraphQL testing InQL extension से करो — queries, mutations, schema discovery</li>
          <li>WebSocket messages Repeater से manually test कर सकते हो</li>
          <li>Resource Pool में threads limit करो — rate limiting avoid होगी</li>
          <li>Project file compress करो disk space save करने के लिए</li>
          <li>Bug bounty programs में Burp findings + proof of concept attach करो — bounty amount increase हो सकती है</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Burp Suite एक बहुत शक्तिशाली वेब सिक्योरिटी टूल है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और शैक्षिक उद्देश्यों के लिए करें। बिना अनुमति के किसी भी वेबसाइट का ट्रैफिक इंटरसेप्ट करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत ट्रैफिक इंटरसेप्शन अपराध हो सकता है।
      </div>
    </TutorialLayout>
  )
}
