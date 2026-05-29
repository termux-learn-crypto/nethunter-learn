import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Searchsploit() {
  return (
    <TutorialLayout
      title="searchsploit"
      subtitle="Exploit-DB कमांड-लाइन सर्च टूल — ऑफ़लाइन एक्सप्लॉइट डेटाबेस"
      icon="🔎"
      prev={{ to: '/tool/commix', label: 'commix' }}
      next={{ to: '/tool/proxychains', label: 'proxychains' }}
    >
      <h2>What is SearchSploit?</h2>
      <p>
        SearchSploit दुनिया के सबसे बड़े पब्लिक एक्सप्लॉइट डेटाबेस — Exploit-DB का ऑफ़िशियल कमांड-लाइन सर्च टूल है। इसमें 50,000+ एक्सप्लॉइट्स, शेलकोड्स, और सिक्योरिटी पेपर्स शामिल हैं। यह Offensive Security टीम ने बनाया है और Kali Linux तथा Kali Nethunter दोनों में प्री-इंस्टॉल्ड आता है। SearchSploit की सबसे बड़ी खासियत यह है कि यह पूरी तरह ऑफ़लाइन काम करता है — इंटरनेट कनेक्शन की कोई ज़रूरत नहीं। पूरा डेटाबेस लोकल मशीन पर स्टोर होता है और तुरंत सर्च रिजल्ट्स मिलते हैं।
      </p>
      <p>
        जब आप किसी सॉफ़्टवेयर या सर्विस में वल्नरेबिलिटी ढूंढते हो तो SearchSploit सबसे पहला टूल है जो इस्तेमाल होता है। Nmap से सर्विस वर्जन पता करो, फिर SearchSploit से एक्सप्लॉइट ढूंढो, फिर Metasploit या मैनुअल तरीके से एक्सप्लॉइट करो। यह पेनेट्रेशन टेस्टिंग का सबसे बेसिक और ज़रूरी वर्कफ़्लो है। बिना SearchSploit के पेनेट्रेशन टेस्टिंग अधूरी है।
      </p>
      <p>
        Exploit-DB में सिर्फ वेरिफ़ाइड एक्सप्लॉइट्स होते हैं जो असली में काम करते हैं। हर एक्सप्लॉइट में CVE नंबर, अफ़ेक्टेड वर्जन, प्लेटफ़ॉर्म, और टाइप (local/remote/webapp) की जानकारी होती है। SearchSploit इस सब जानकारी को बहुत तेज़ी से सर्च करता है। बग बाउंटी हंटर्स, सिक्योरिटी रिसर्चर्स, और पेनेट्रेशन टेस्टर्स सभी के लिए यह एसेंशियल टूल है।
      </p>
      <p>
        SearchSploit का सबसे बड़ा फ़ायदा यह है कि यह Python में लिखा गया है और क्रॉस-प्लेटफ़ॉर्म है — Linux, macOS, Windows सब पर चलता है। इसका आउटपुट JSON, XML, और CSV फ़ॉर्मेट में भी मिल सकता है जो ऑटोमेशन और टूल इंटीग्रेशन के लिए बहुत उपयोगी है। Nmap के XML आउटपुट को सीधे फ़ीड कर सकते हो और ऑटोमैटिकली एक्सप्लॉइट्स ढूंढ सकते हो। यह पेनेट्रेशन टेस्टिंग ऑटोमेशन का आधार है।
      </p>
      <p>
        SearchSploit और Exploit-DB दोनों Offensive Security के प्रोडक्ट्स हैं जो OSCP, OSCE, और अन्य सर्टिफ़िकेशन एग्ज़ाम्स में भी इस्तेमाल होते हैं। अगर आप OSCP की तैयारी कर रहे हो तो SearchSploit का इस्तेमाल ज़रूरी है — यह एग्ज़ाम में Metasploit के लिमिटेड इस्तेमाल के कारण सबसे भरोसेमंद टूल है। यह टूल सिखाता है कि कैसे पब्लिक एक्सप्लॉइट्स को ढूंढकर, समझकर, और मॉडिफ़ाई करके इस्तेमाल किया जाए।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> SearchSploit केवल अधिकृत सुरक्षा परीक्षण और शोध के लिए उपयोग करें। बिना अनुमति के एक्सप्लॉइट्स का इस्तेमाल अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत सिस्टम एक्सेस अपराध हो सकता है। एक्सप्लॉइट्स का इस्तेमाल केवल अपने लैब या लिखित अनुमति वाले टार्गेट्स पर ही करें।
      </div>

      <h2>History of SearchSploit</h2>
      <p>
        Exploit-DB की शुरुआत 2004 में HD Moore (Metasploit के क्रिएटर) ने की थी। बाद में Offensive Security ने इसे अपने अंडर ले लिया और इसे दुनिया का सबसे बड़ा पब्लिक एक्सप्लॉइट डेटाबेस बनाया। SearchSploit कमांड-लाइन टूल बाद में बनाया गया ताकि इस डेटाबेस को टर्मिनल से तेज़ी से एक्सेस किया जा सके।
      </p>
      <p>
        SearchSploit Python में लिखा गया है और यह Exploit-DB की लोकल कॉपी पर काम करता है। हर हफ़्ते डेटाबेस अपडेट होता है और नए एक्सप्लॉइट्स जुड़ते हैं। आज Exploit-DB में 50,000+ एक्सप्लॉइट्स हैं जिनमें Linux, Windows, macOS, Android, iOS, और वेब एप्लिकेशन सभी प्लेटफ़ॉर्म्स शामिल हैं। Offensive Security टीम हर एक्सप्लॉइट को वेरिफ़ाई करती है इससे पहले कि उसे डेटाबेस में शामिल किया जाए।
      </p>
      <p>
        SearchSploit का विकास लगातार हो रहा है। पहले यह सिर्फ बेसिक सर्च कर सकता था, लेकिन अब इसमें Nmap XML इंटीग्रेशन, JSON/XML आउटपुट, एक्सप्लॉइट कॉपी/मिरर, और एडवांस्ड फ़िल्टरिंग जैसे फ़ीचर्स हैं। 2019 में --nmap फ़ीचर जोड़ा गया जो Nmap के XML आउटपुट को सीधे पार्स करके ऑटोमैटिकली एक्सप्लॉइट्स ढूंढता है। यह फ़ीचर पेनेट्रेशन टेस्टिंग ऑटोमेशन में गेम-चेंजर रहा है।
      </p>
      <p>
        Exploit-DB की community बहुत बड़ी है — दुनिया भर के सिक्योरिटी रिसर्चर्स एक्सप्लॉइट्स अपलोड करते हैं। Offensive Security टीम हर एक्सप्लॉइट को रिव्यू करती है और वेरिफ़ाई करने के बाद ही डेटाबेस में शामिल करती है। यह quality control Exploit-DB को दूसरे एक्सप्लॉइट सोर्सेज़ से बेहतर बनाता है। 2020 में COVID-19 के दौरान Exploit-DB ने remote work से जुड़े वल्नरेबिलिटीज़ पर फ़ोकस किया — VPN, RDP, और collaboration tools के एक्सप्लॉइट्स तेज़ी से जोड़े गए।
      </p>
      <p>
        SearchSploit का भविष्य ऑटोमेशन और AI इंटीग्रेशन की तरफ़ बढ़ रहा है। कई टूल्स जैसे AutoSploit, Pompem, और Findsploit SearchSploit के ऊपर built हैं। OWASP, PTES, और NIST जैसे फ़्रेमवर्क्स में SearchSploit को recommended tool के रूप में mention किया गया है। यह टूल पेनेट्रेशन टेस्टिंग की दुनिया में एक institution बन चुका है।
      </p>

      <h2>How SearchSploit Works?</h2>
      <p>
        SearchSploit Exploit-DB की लोकल कॉपी पर सर्च करता है — कोई API कॉल या इंटरनेट कनेक्शन नहीं लगता। यह बहुत तेज़ है क्योंकि सारा डेटा लोकल डिस्क पर होता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">लोकल डेटाबेस:</strong> /usr/share/exploitdb/ में सभी एक्सप्लॉइट्स CSV और फ़ाइल्स में स्टोर होते हैं</li>
        <li><strong className="text-white">CSV इंडेक्स:</strong> files_exploits.csv और files_shellcodes.csv में मेटाडेटा होता है — ID, टाइटल, डेट, ऑथर, प्लेटफ़ॉर्म, टाइप, CVE</li>
        <li><strong className="text-white">फ़ाइल सिस्टम:</strong> exploits/ फ़ोल्डर में असली एक्सप्लॉइट कोड (.py, .rb, .c, .txt) स्टोर होता है</li>
        <li><strong className="text-white">ग्रेप सर्च:</strong> CSV फ़ाइल्स में टर्म सर्च करके मैचिंग एक्सप्लॉइट्स ढूंढता है — बहुत तेज़</li>
        <li><strong className="text-white">फ़िल्टरिंग:</strong> प्लेटफ़ॉर्म, टाइप, ऑथर, CVE के हिसाब से फ़िल्टर कर सकते हो</li>
        <li><strong className="text-white">कॉपी/मिरर:</strong> एक्सप्लॉइट को करंट डायरेक्ट्री में कॉपी कर सकते हो — एडिट करने के लिए</li>
        <li><strong className="text-white">Nmap इंटीग्रेशन:</strong> Nmap XML आउटपुट से सर्विस वर्जन ऑटोमैटिकली पार्स करके सर्च करता है</li>
        <li><strong className="text-white">आउटपुट फ़ॉर्मेट:</strong> टेक्स्ट, JSON, XML — ऑटोमेशन के लिए किसी भी फ़ॉर्मेट में आउटपुट ले सकते हो</li>
      </ul>
      <p>
        SearchSploit का आंतरिक काम करने का तरीका बहुत सिंपल है — यह CSV फ़ाइल्स में grep जैसा सर्च करता है। जब आप searchsploit apache टाइप करते हो, तो यह files_exploits.csv के सभी कॉलम्स में "apache" शब्द ढूंढता है। मैचिंग लाइन्स को फ़ॉर्मेट करके टर्मिनल पर दिखाता है। --nmap फ़ीचर Nmap के XML को पार्स करता है और हर सर्विस के लिए अलग-अलग सर्च करता है।
      </p>

      <h2>Installation</h2>
      <p>
        Kali Linux और Kali Nethunter में SearchSploit प्री-इंस्टॉल्ड आता है। अगर नहीं है तो आसानी से इंस्टॉल कर सकते हो।
      </p>
      <CodeBlock
        title="SearchSploit इंस्टॉलेशन"
        code={`# Kali/Nethunter में (पहले से है चेक करें):
searchsploit --version

# apt से इंस्टॉल:
sudo apt update
sudo apt install exploitdb

# Git से (सबसे लेटेस्ट):
git clone https://gitlab.com/exploit-database/exploitdb.git /opt/exploitdb
cd /opt/exploitdb
# पाथ सेट करो:
export PATH="$PATH:/opt/exploitdb"
echo 'export PATH="$PATH:/opt/exploitdb"' >> ~/.bashrc

# डेटाबेस अपडेट करें:
searchsploit -u

# वर्जन चेक:
searchsploit --version

# डेटाबेस लोकेशन चेक करें:
searchsploit -p
# /usr/share/exploitdb/ — डिफ़ॉल्ट लोकेशन`}
      />

      <h2>Basic Usage</h2>
      <p>
        SearchSploit में सर्च करना बहुत आसान है — बस सॉफ़्टवेयर का नाम या कीवर्ड लिखो।
      </p>
      <CodeBlock
        title="बेसिक सर्च"
        code={`# सॉफ़्टवेयर नाम से सर्च:
searchsploit apache

# स्पेसिफ़िक वर्जन:
searchsploit apache 2.4

# कई टर्म्स:
searchsploit wordpress plugin

# एग्ज़ैक्ट मैच:
searchsploit -e "remote code execution"

# केस सेंसिटिव:
searchsploit -c Apache

# सभी रिजल्ट्स देखें (नो ट्रंकेशन):
searchsploit --colour apache

# वर्डलिस्ट से सर्च:
searchsploit -w wordpress

# सिर्फ टाइटल में सर्च:
searchsploit -t "remote code execution"

# प्लेटफ़ॉर्म फ़िल्टर:
searchsploit apache linux

# CVE से सर्च:
searchsploit CVE-2021-44228`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e</td><td className="py-2 px-3">एग्ज़ैक्ट मैच (पूरा शब्द)</td><td className="py-2 px-3 font-mono text-xs">searchsploit -e "apache 2.4.49"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c</td><td className="py-2 px-3">केस सेंसिटिव सर्च</td><td className="py-2 px-3 font-mono text-xs">searchsploit -c Apache</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t</td><td className="py-2 px-3">सिर्फ टाइटल में सर्च</td><td className="py-2 px-3 font-mono text-xs">searchsploit -t "remote code"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-w</td><td className="py-2 px-3">वर्डलिस्ट (टर्म्स को स्पेस से स्प्लिट)</td><td className="py-2 px-3 font-mono text-xs">searchsploit -w wordpress</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">पाथ दिखाएं (फ़ाइल लोकेशन)</td><td className="py-2 px-3 font-mono text-xs">searchsploit -p 42031</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-m</td><td className="py-2 px-3">करंट डायरेक्ट्री में मिरर/कॉपी</td><td className="py-2 px-3 font-mono text-xs">searchsploit -m 42031</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-x</td><td className="py-2 px-3">एक्सप्लॉइट का कोड दिखाएं (व्यू)</td><td className="py-2 px-3 font-mono text-xs">searchsploit -x 42031</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-j</td><td className="py-2 px-3">JSON फ़ॉर्मेट में आउटपुट</td><td className="py-2 px-3 font-mono text-xs">searchsploit -j apache</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--xml</td><td className="py-2 px-3">XML फ़ॉर्मेट में आउटपुट</td><td className="py-2 px-3 font-mono text-xs">searchsploit --xml apache</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-u</td><td className="py-2 px-3">डेटाबेस अपडेट करें</td><td className="py-2 px-3 font-mono text-xs">searchsploit -u</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--colour</td><td className="py-2 px-3">कलर आउटपुट (हाइलाइट)</td><td className="py-2 px-3 font-mono text-xs">searchsploit --colour apache</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--nmap</td><td className="py-2 px-3">Nmap XML आउटपुट से सर्च</td><td className="py-2 px-3 font-mono text-xs">searchsploit --nmap scan.xml</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">वर्बोज़ (URL भी दिखाएं)</td><td className="py-2 px-3 font-mono text-xs">searchsploit -v apache</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--id</td><td className="py-2 px-3">सिर्फ EDB-ID से सर्च</td><td className="py-2 px-3 font-mono text-xs">searchsploit --id 42031</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--exclude</td><td className="py-2 px-3">टर्म एक्सक्लूड करें</td><td className="py-2 px-3 font-mono text-xs">searchsploit apache --exclude dos</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Search Techniques</h2>
      <p>
        SearchSploit में कई तरह से सर्च कर सकते हो — हर तरीके का अपना फ़ायदा है। सही तरीके से सर्च करने से बेहतर रिजल्ट्स मिलते हैं।
      </p>
      <CodeBlock
        title="सर्च टेक्निक्स"
        code={`# डिफ़ॉल्ट सर्च (सभी कॉलम में):
searchsploit apache 2.4

# एग्ज़ैक्ट मैच (पूरा शब्द मैच हो):
searchsploit -e "apache 2.4.49"

# केस सेंसिटिव (A ≠ a):
searchsploit -c Apache

# सिर्फ टाइटल में सर्च (फ़ास्ट):
searchsploit -t "remote code execution"

# कई टर्म्स के साथ:
searchsploit linux kernel 5.8

# CVE से सर्च:
searchsploit CVE-2021-44228

# वर्जन रेंज:
searchsploit apache 2.4
# यह 2.4.x सभी वर्जन्स दिखाएगा

# प्लेटफ़ॉर्म + टाइप कॉम्बो:
searchsploit linux local privilege escalation
searchsploit windows remote code execution

# एक्सक्लूड फ़िल्टर:
searchsploit apache --exclude dos
# DoS एक्सप्लॉइट्स हटाकर दिखाएगा`}
      />

      <h2>Platform and Type Filtering</h2>
      <p>
        स्पेसिफ़िक प्लेटफ़ॉर्म या टाइप के एक्सप्लॉइट्स ढूंढने के लिए फ़िल्टर इस्तेमाल करो।
      </p>
      <CodeBlock
        title="प्लेटफ़ॉर्म और टाइप फ़िल्टर"
        code={`# Linux एक्सप्लॉइट्स:
searchsploit linux local
searchsploit linux remote

# Windows एक्सप्लॉइट्स:
searchsploit windows remote
searchsploit windows local privilege

# Android एक्सप्लॉइट्स:
searchsploit android local
searchsploit android dos

# macOS एक्सप्लॉइट्स:
searchsploit macosx local

# PHP वेब एप्लिकेशन:
searchsploit php webapps

# वर्डप्रेस:
searchsploit wordpress webapps

# Hardware/IoT:
searchsploit hardware remote

# Multi-Platform:
searchsploit multi remote

# शेलकोड्स:
searchsploit shellcode linux x86
searchsploit shellcode windows x64

# पेपर्स/रिसर्च:
searchsploit papers`}
      />

      <h2>JSON and XML Output</h2>
      <p>
        ऑटोमेशन और टूल इंटीग्रेशन के लिए JSON/XML आउटपुट बहुत काम आता है।
      </p>
      <CodeBlock
        title="आउटपुट फ़ॉर्मेट"
        code={`# JSON आउटपुट:
searchsploit -j apache
# पाइप करके jq से पार्स:
searchsploit -j apache | jq '.RESULTS_EXPLOIT[]'

# सिर्फ टाइटल्स:
searchsploit -j apache | jq '.RESULTS_EXPLOIT[].Title'

# सिर्फ EDB-ID:
searchsploit -j apache | jq '.RESULTS_EXPLOIT[]["EDB-ID"]'

# XML आउटपुट:
searchsploit --xml apache

# JSON फ़ाइल में सेव:
searchsploit -j apache > apache_exploits.json

# Nmap XML से सर्च (ऑटोमैटिक):
searchsploit --nmap scan.xml
# Nmap आउटपुट से ऑटोमैटिकली सर्विस वर्जन निकालकर सर्च करता है`}
      />

      <h2>Exploit Categories and Types</h2>
      <p>
        Exploit-DB में कई तरह के exploits store होते हैं। हर category का अपना use case और risk level है:
      </p>
      <CodeBlock
        title="Exploit Types Reference"
        code={`# Remote Exploits — दूर से target system पर attack:
searchsploit apache remote
searchsploit openssh remote
searchsploit samba remote
# यह सबसे dangerous category है — network access से exploit होता है

# Local Exploits — target system पर already access चाहिए:
searchsploit linux local privilege escalation
searchsploit windows local privilege escalation
# Privilege escalation के लिए use होते हैं

# Web Application Exploits — web apps के लिए:
searchsploit wordpress webapps
searchsploit joomla webapps
searchsploit drupal webapps
searchsploit php webapps
# SQL injection, XSS, RCE, LFI सब शामिल

# DoS Exploits — Denial of Service:
searchsploit apache dos
searchsploit nginx dos
# Service crash करने के लिए — production में use मत करो

# Shellcode — payload code:
searchsploit shellcode linux x86
searchsploit shellcode windows x64
# Custom exploits बनाने के लिए use होते हैं

# Papers — security research:
searchsploit papers
# Whitepapers, advisories, research documents

# Exploit-DB में total categories:
# - exploits/ (main exploit code)
# - shellcodes/ (payload code)
# - papers/ (research documents)`}
      />

      <h2>Exploit Copy and Edit</h2>
      <p>
        एक्सप्लॉइट मिलने के बाद उसे कॉपी करके कस्टमाइज़ करो — LHOST, LPORT, TARGET बदलो।
      </p>
      <CodeBlock
        title="एक्सप्लॉइट कॉपी और एडिट"
        code={`# करंट डायरेक्ट्री में कॉपी:
searchsploit -m 42031

# स्पेसिफ़िक डायरेक्ट्री में:
searchsploit -m 42031 /tmp/exploit/

# पाथ देखें (कहाँ स्टोर है):
searchsploit -p 42031

# एक्सप्लॉइट का कोड देखें:
searchsploit -x 42031

# मिरर — पूरा फ़ोल्डर कॉपी:
searchsploit -m 42031

# एक्सप्लॉइट एग्ज़ामिन करें:
cat $(searchsploit -p 42031 | awk '{print $NF}')

# कस्टमाइज़ करें:
nano 42031.py
# LHOST, LPORT, TARGET_IP बदलें

# कई एक्सप्लॉइट्स एक साथ कॉपी:
for id in 42031 50383 49757; do
  searchsploit -m $id /tmp/exploits/
done`}
      />

      <h2>Nmap Integration</h2>
      <p>
        SearchSploit का Nmap इंटीग्रेशन सबसे पावरफुल फ़ीचर है — ऑटोमैटिकली सर्विस वर्जन से एक्सप्लॉइट्स ढूंढता है।
      </p>
      <CodeBlock
        title="Nmap + SearchSploit वर्कफ़्लो"
        code={`# Step 1: Nmap से सर्विस वर्जन डिटेक्ट करें (XML आउटपुट):
nmap -sV -O -oX scan.xml target_ip

# Step 2: SearchSploit से ऑटोमैटिक सर्च:
searchsploit --nmap scan.xml

# Step 3: JSON आउटपुट में:
searchsploit --nmap scan.xml -j > nmap_exploits.json

# यह ऑटोमैटिकली:
# - Nmap XML पार्स करता है
# - हर सर्विस वर्जन निकालता है
# - हर सर्विस के लिए एक्सप्लॉइट्स ढूंढता है
# - रिजल्ट्स दिखाता है

# उदाहरण — Nmap आउटपुट:
# PORT   STATE SERVICE VERSION
# 21/tcp open  ftp     vsftpd 2.3.4
# 22/tcp open  ssh     OpenSSH 7.6p1
# 80/tcp open  http    Apache httpd 2.4.49

# searchsploit --nmap scan.xml इन सभी के लिए एक्सप्लॉइट्स ढूंढेगा`}
      />

      <h2>Comparison Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">SearchSploit</th>
              <th className="text-left py-2 px-3 text-neon-green">Metasploit Search</th>
              <th className="text-left py-2 px-3 text-neon-green">NVD (NIST)</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">ऑफ़लाइन</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">एक्सप्लॉइट कोड</td><td className="py-2 px-3">हाँ (फ़ाइल)</td><td className="py-2 px-3">हाँ (मॉड्यूल)</td><td className="py-2 px-3">नहीं (सिर्फ मेटाडेटा)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">CVE Coverage</td><td className="py-2 px-3">कम (पब्लिक एक्सप्लॉइट्स)</td><td className="py-2 px-3">कम</td><td className="py-2 px-3">सबसे ज़्यादा</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">JSON/XML आउटपुट</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">API</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Nmap इंटीग्रेशन</td><td className="py-2 px-3">हाँ (--nmap)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्पीड</td><td className="py-2 px-3">बहुत तेज़</td><td className="py-2 px-3">मीडियम</td><td className="py-2 px-3">स्लो (API)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">एक्सप्लॉइट कॉपी</td><td className="py-2 px-3">हाँ (-m)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">शेलकोड्स</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">एक्सप्लॉइट व्यू</td><td className="py-2 px-3">हाँ (-x)</td><td className="py-2 px-3">हाँ (info)</td><td className="py-2 px-3">नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white">लर्निंग कर्व</td><td className="py-2 px-3">आसान</td><td className="py-2 px-3">मीडियम</td><td className="py-2 px-3">आसान</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scripting and Automation</h2>
      <p>
        SearchSploit को ऑटोमेशन स्क्रिप्ट्स में इस्तेमाल कर सकते हो — पेनेट्रेशन टेस्टिंग वर्कफ़्लो को ऑटोमेट करने के लिए।
      </p>
      <CodeBlock
        title="Nmap + SearchSploit ऑटोमेशन"
        code={`#!/bin/bash
# Nmap + SearchSploit ऑटोमेशन स्क्रिप्ट

TARGET=$1
echo "[+] टार्गेट: $TARGET"

# Step 1: Nmap से सर्विस वर्जन डिटेक्ट करें
echo "[+] सर्विस वर्जन डिटेक्ट कर रहे हैं..."
nmap -sV -O -oX scan.xml $TARGET > /dev/null 2>&1

# Step 2: SearchSploit से एक्सप्लॉइट्स ढूंढें
echo "[+] एक्सप्लॉइट्स सर्च कर रहे हैं..."
searchsploit --nmap scan.xml > exploits.txt

# Step 3: JSON आउटपुट
searchsploit --nmap scan.xml -j > exploits.json

echo "[+] $(grep -c 'Exploit' exploits.txt) एक्सप्लॉइट्स मिले"
echo "[+] exploits.txt में सेव हुआ"
cat exploits.txt`}
      />

      <CodeBlock
        title="बल्क सर्च स्क्रिप्ट"
        code={`#!/bin/bash
# कई सर्विसेज़ के लिए एक साथ सर्च

SERVICES=("apache 2.4" "nginx 1.18" "openssh 8.2" "samba 4.11")

for svc in "\${SERVICES[@]}"; do
  echo "[+] सर्च कर रहे हैं: $svc"
  COUNT=$(searchsploit $svc 2>/dev/null | wc -l)
  echo "    $COUNT रिजल्ट्स मिले"
  searchsploit $svc -j > "\${svc// /_}.json" 2>/dev/null
done`}
      />

      <CodeBlock
        title="एक्सप्लॉइट ऑटो-कॉपी स्क्रिप्ट"
        code={`#!/bin/bash
# सभी एक्सप्लॉइट्स कॉपी करो

TARGET=$1
mkdir -p /tmp/exploits_$TARGET

# Nmap स्कैन:
nmap -sV -oX /tmp/scan.xml $TARGET

# एक्सप्लॉइट IDs निकालो:
IDS=$(searchsploit --nmap /tmp/scan.xml -j | jq -r '.RESULTS_EXPLOIT[]["EDB-ID"]')

# हर एक्सप्लॉइट कॉपी करो:
for id in $IDS; do
  echo "[+] कॉपी कर रहे हैं: $id"
  searchsploit -m $id /tmp/exploits_$TARGET/
done

echo "[+] सभी एक्सप्लॉइट्स /tmp/exploits_$TARGET/ में कॉपी हुए"`}
      />

      <h2>Practical Workflow</h2>
      <p>
        यह रियल-वर्ल्ड वर्कफ़्लो है जो पेनेट्रेशन टेस्टिंग में सबसे ज़्यादा इस्तेमाल होता है।
      </p>
      <CodeBlock
        title="Real-World Workflow"
        code={`# स्टेप 1: Nmap से सर्विस वर्जन डिटेक्ट करें
nmap -sV -O -oX scan.xml target_ip

# स्टेप 2: SearchSploit से एक्सप्लॉइट्स ढूंढें
searchsploit --nmap scan.xml

# स्टेप 3: स्पेसिफ़िक सर्विस के लिए सर्च
searchsploit apache 2.4.49
searchsploit openssh 8.2
searchsploit proftpd 1.3.5

# स्टेप 4: एक्सप्लॉइट कॉपी करें
searchsploit -m 50383

# स्टेप 5: कोड रिव्यू करें
cat 50383.py
# LHOST, LPORT, TARGET बदलें

# स्टेप 6: एक्सप्लॉइट रन करें
python3 50383.py target_ip

# Metasploit के साथ:
msfconsole
search apache 2.4.49
use exploit/...

# स्टेप 7: रिजल्ट डॉक्यूमेंट करें
searchsploit --nmap scan.xml -j > report.json`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड यूज़"
        code={`# Nmap XML से ऑटोमैटिक सर्च:
nmap -sV -oX scan.xml target_ip
searchsploit --nmap scan.xml

# grep के साथ पाइप:
searchsploit apache | grep "Remote"

# awk से सिर्फ ID निकालो:
searchsploit apache | awk '{print $1}'

# JSON से ऑटोमेशन:
searchsploit -j apache | jq '.RESULTS_EXPLOIT[].Title'

# कई एक्सप्लॉइट्स एक साथ कॉपी:
for id in 42031 50383 49757; do
  searchsploit -m $id /tmp/exploits/
done

# Exploit-DB वेबसाइट से डायरेक्ट डाउनलोड (अगर ऑनलाइन हो):
# https://www.exploit-db.com/exploits/42031

# वर्डलिस्ट से सर्च (फ़ाइल से):
cat services.txt | while read svc; do
  searchsploit "$svc"
done

# डेटाबेस डायरेक्ट ब्राउज़ करें:
ls /usr/share/exploitdb/exploits/
ls /usr/share/exploitdb/exploits/linux/
ls /usr/share/exploitdb/exploits/windows/`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'डेटाबेस पुराना है — नए एक्सप्लॉइट्स नहीं मिल रहे', a: 'searchsploit -u रन करो। Git clone फिर से करो: git clone https://gitlab.com/exploit-database/exploitdb.git /opt/exploitdb। रेगुलरली अपडेट करो — हर हफ़्ते नए एक्सप्लॉइट्स जुड़ते हैं।' },
          { q: 'सर्च रिजल्ट बहुत ज़्यादा आ रहे हैं', a: '-e (एग्ज़ैक्ट मैच) और -t (टाइटल ओनली) फ़्लैग्स यूज़ करो। वर्जन नंबर स्पेसिफ़ाई करो। प्लेटफ़ॉर्म फ़िल्टर लगाओ: searchsploit -t apache 2.4 linux' },
          { q: 'एक्सप्लॉइट कॉपी नहीं हो रहा', a: 'पाथ चेक करो: searchsploit -p ID_NUMBER। /usr/share/exploitdb/ फ़ोल्डर की परमिशन चेक करो। sudo से try करो।' },
          { q: 'Nmap XML से सर्च नहीं हो रहा', a: 'Nmap को -oX फ़्लैग से XML आउटपुट सेव करो: nmap -sV -oX scan.xml target। फिर searchsploit --nmap scan.xml रन करो।' },
          { q: 'कलर आउटपुट नहीं दिख रहा', a: '--colour फ़्लैग यूज़ करो: searchsploit --colour apache। टर्मिनल कलर सपोर्ट चेक करो।' },
          { q: 'बहुत स्लो सर्च हो रही है', a: 'डेटाबेस बड़ा है — स्पेसिफ़िक टर्म्स यूज़ करो। टाइटल-ओनली (-t) फ़ास्ट होता है। SSD पर डेटाबेस स्टोर करो।' },
          { q: 'JSON पार्स नहीं हो रहा', a: 'jq इंस्टॉल करो: sudo apt install jq। फिर searchsploit -j apache | jq यूज़ करो।' },
          { q: 'Exploit-DB साइट से मैच नहीं कर रहा', a: 'डेटाबेस अपडेट करो: searchsploit -u। लोकल कॉपी पुरानी हो सकती है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        SearchSploit डिफ़ेंस टीम के लिए भी उपयोगी है — अपने सिस्टम की ज्ञात वल्नरेबिलिटीज़ ढूंढने के लिए।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">वल्नरेबिलिटी ऑडिट:</strong> अपने सर्वर का वर्जन सर्च करो — पब्लिक एक्सप्लॉइट्स मिलें तो तुरंत पैच करो</li>
        <li><strong className="text-white">पैच मैनेजमेंट:</strong> सभी सॉफ़्टवेयर अपडेट रखो — Exploit-DB में जो एक्सप्लॉइट है वो अटैकर्स के पास भी है</li>
        <li><strong className="text-white">WAF रूल्स:</strong> पब्लिक एक्सप्लॉइट्स के पैटर्न्स के खिलाफ़ WAF रूल्स बनाओ</li>
        <li><strong className="text-white">मॉनिटरिंग:</strong> Exploit-DB अपडेट्स फ़ॉलो करो — नए CVE तुरंत पैच करो</li>
        <li><strong className="text-white">एंटीवायरस/EDR:</strong> पब्लिक एक्सप्लॉइट्स के सिग्नेचर्स डिटेक्ट करते हैं — AV अपडेट रखो</li>
        <li><strong className="text-white">लीस्ट प्रिविलेज:</strong> सर्विसेज़ को मिनिमम परमिशन दो — एक्सप्लॉइट का असर कम होगा</li>
        <li><strong className="text-white">इंट्रूज़न डिटेक्शन:</strong> पब्लिक एक्सप्लॉइट्स के नेटवर्क पैटर्न्स के लिए IDS रूल्स बनाओ</li>
        <li><strong className="text-white">सिक्योरिटी ऑटोमेशन:</strong> रेगुलरली अपने सिस्टम का Nmap स्कैन करो और SearchSploit से चेक करो</li>
        <li><strong className="text-white">बग बाउंटी:</strong> अपने प्रोडक्ट के लिए बग बाउंटी प्रोग्राम चलाओ — रिसर्चर्स वल्नरेबिलिटीज़ रिपोर्ट करेंगे</li>
        <li><strong className="text-white">इंसिडेंट रिस्पांस:</strong> जब कोई CVE पब्लिक हो, तो तुरंत चेक करो कि तुम्हारे सिस्टम अफ़ेक्टेड हैं या नहीं</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        SearchSploit प्रैक्टिस के लिए सेफ लैब बनाओ:
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# वल्नरेबल मशीन्स (प्रैक्टिस के लिए):
# Metasploitable2 — बहुत सारी वल्नरेबिलिटीज़
# VulnHub VMs — फ्री डाउनलोड
# TryHackMe/HackTheBox — ऑनलाइन लैब्स

# वर्कफ़्लो:
# 1. Nmap से स्कैन करो
nmap -sV -O target_ip

# 2. SearchSploit से एक्सप्लॉइट्स ढूंढो
searchsploit apache 2.4.49
searchsploit vsftpd 2.3.4

# 3. एक्सप्लॉइट कॉपी और कस्टमाइज़ करो
searchsploit -m 50383

# 4. Metasploit या मैनुअली एक्सप्लॉइट करो

# डेटाबेस एक्सप्लोर करें:
ls /usr/share/exploitdb/exploits/
ls /usr/share/exploitdb/exploits/linux/remote/
ls /usr/share/exploitdb/exploits/windows/remote/`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'SearchSploit और Exploit-DB में क्या फ़र्क है?', a: 'Exploit-DB वेबसाइट (exploit-db.com) है जहाँ एक्सप्लॉइट्स अपलोड होते हैं। SearchSploit कमांड-लाइन टूल है जो उसी डेटाबेस की लोकल कॉपी से सर्च करता है।' },
          { q: 'क्या ऑफ़लाइन काम करता है?', a: 'हाँ! यही सबसे बड़ी खासियत है। पूरा डेटाबेस लोकल मशीन पर स्टोर होता है। सिर्फ अपडेट के लिए इंटरनेट चाहिए।' },
          { q: 'डेटाबेस कितनी बार अपडेट होता है?', a: 'Exploit-DB में डेली नए एक्सप्लॉइट्स जुड़ते हैं। searchsploit -u रन करके अपडेट करो। रेगुलरली अपडेट करना ज़रूरी है।' },
          { q: 'CVE नंबर से सर्च कैसे करें?', a: 'searchsploit CVE-2021-44228 टाइप करो। यह Log4j के एक्सप्लॉइट्स ढूंढेगा।' },
          { q: 'क्या एक्सप्लॉइट्स वेरिफ़ाइड होते हैं?', a: 'Exploit-DB में ज़्यादातर एक्सप्लॉइट्स वेरिफ़ाइड होते हैं लेकिन सभी नहीं। एक्सप्लॉइट इस्तेमाल करने से पहले कोड रिव्यू ज़रूर करो।' },
          { q: 'Metasploit से कैसे कनेक्ट करें?', a: 'SearchSploit से एक्सप्लॉइट ढूंढो → exploit ID नोट करो → Metasploit में "search" कमांड से वही एक्सप्लॉइट मॉड्यूल ढूंढो।' },
          { q: 'OSCP एग्ज़ाम में SearchSploit कैसे यूज़ करें?', a: 'OSCP में Metasploit लिमिटेड है — SearchSploit से एक्सप्लॉइट ढूंढो, कॉपी करो, मैनुअली मॉडिफ़ाई करो और चलाओ। यह सबसे भरोसेमंद तरीका है।' },
          { q: 'शेलकोड्स कैसे ढूंढें?', a: 'searchsploit shellcode linux x86 या searchsploit shellcode windows x64 टाइप करो। शेलकोड्स अलग फ़ोल्डर में स्टोर होते हैं।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        SearchSploit रियल-वर्ल्ड पेनेट्रेशन टेस्टिंग में बहुत important role निभाता है। यहाँ कुछ practical scenarios हैं जहाँ SearchSploit सबसे ज़्यादा उपयोगी है:
      </p>
      <p>
        <strong className="text-white">Case Study 1 — Apache Log4j (CVE-2021-44228):</strong> जब Log4Shell vulnerability public हुई, तो SearchSploit में तुरंत exploit available हो गया। Penetration testers ने अपने clients के systems को scan किया, SearchSploit से exploit ढूंढा, और vulnerable systems को identify किया। इस vulnerability का impact इतना बड़ा था कि दुनिया भर की companies ने emergency patches release किए। SearchSploit ने defenders को भी help किया — उन्होंने अपने systems को scan करके vulnerable versions को identify किया।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — EternalBlue (MS17-010):</strong> WannaCry ransomware ने 2017 में दुनिया भर में तबाही मचाई। यह exploit SMB vulnerability (EternalBlue) use करता था। SearchSploit में यह exploit पहले से available था। Penetration testers ने इसे use करके clients के networks में lateral movement demonstrate किया। Defense teams ने SearchSploit से vulnerable systems को identify करके patches apply किए।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — OSCP Exam:</strong> OSCP certification में Metasploit का use limited है — एक ही target पर। इसलिए students SearchSploit से exploits ढूंढते हैं, manually modify करते हैं, और run करते हैं। यह approach OSCP का core methodology है। हर OSCP student को SearchSploit expert होना ज़रूरी है।
      </p>
      <p>
        <strong className="text-white">Case Study 4 — Bug Bounty:</strong> Bug bounty hunters SearchSploit को reconnaissance phase में use करते हैं। जब कोई software version detect होता है, तो तुरंत SearchSploit से known exploits check करते हैं। अगर exploit मिलता है, तो यह high-severity finding होता है। HackerOne और Bugcrowd पर कई bounties SearchSploit से मिले exploits की वजह से मिले हैं।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        SearchSploit को दूसरे security tools के साथ integrate करके powerful automation pipelines बना सकते हो:
      </p>
      <CodeBlock
        title="Nikto + SearchSploit Integration"
        code={`#!/bin/bash
# Nikto web scan + SearchSploit combo

TARGET=$1
echo "[+] Web scan: $TARGET"

# Nikto से web technologies detect करो:
nikto -h $TARGET -o /tmp/nikto_scan.txt

# Technologies extract करो:
TECHS=$(grep "Server:" /tmp/nikto_scan.txt | awk '{print $2}')
echo "[+] Detected: $TECHS"

# हर technology के लिए SearchSploit से exploits ढूंढो:
for tech in $TECHS; do
    echo "[+] Searching exploits for: $tech"
    searchsploit $tech | head -10
done`}
      />
      <CodeBlock
        title="Masscan + SearchSploit Pipeline"
        code={`#!/bin/bash
# Masscan fast scan + SearchSploit

TARGET=$1
echo "[+] Fast scanning: $TARGET"

# Masscan से quick port scan:
masscan $TARGET -p1-65535 --rate=1000 -oL /tmp/masscan.txt

# Open ports extract करो:
PORTS=$(awk '/open/ {print $3}' /tmp/masscan.txt | sort -u)
echo "[+] Open ports: $PORTS"

# Nmap service detection on open ports:
for port in $PORTS; do
    nmap -sV -p $port $TARGET -oX /tmp/nmap_$port.xml
    searchsploit --nmap /tmp/nmap_$port.xml
done`}
      />
      <CodeBlock
        title="Metasploit + SearchSploit Workflow"
        code={`# Metasploit में SearchSploit results use करो:

# Step 1: SearchSploit से exploit ढूंढो:
searchsploit apache 2.4.49

# Step 2: EDB-ID note करो (जैसे: 50383)

# Step 3: Metasploit में equivalent module ढूंढो:
msfconsole
search apache 2.4.49
use exploit/linux/http/apache_normalize_path_rce

# Step 4: Configure करो:
set RHOSTS target_ip
set LHOST your_ip
exploit

# अगर Metasploit में module नहीं है:
# SearchSploit से exploit कॉपी करो और manually run करो
searchsploit -m 50383
python3 50383.py target_ip`}
      />

      <h2>Performance Tuning</h2>
      <p>
        SearchSploit की speed optimize करने के लिए कुछ tips:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">SSD Use करो:</strong> Database SSD पर store करो — HDD से 5-10x fast search होगी</li>
        <li><strong className="text-white">Title-Only Search:</strong> -t flag use करो — सिर्फ title column में search होता है, बहुत fast</li>
        <li><strong className="text-white">Specific Terms:</strong> Broad terms (apache) की जगह specific terms (apache 2.4.49) use करो — fewer results, faster</li>
        <li><strong className="text-white">Exclude Filter:</strong> --exclude dos flag से unwanted results हटाओ — cleaner output</li>
        <li><strong className="text-white">Local Database:</strong> हमेशा local database use करो — online API calls slow होती हैं</li>
        <li><strong className="text-white">Regular Updates:</strong> Database outdated होने पर irrelevant results आते हैं — weekly update करो</li>
        <li><strong className="text-white">JSON Output:</strong> Large result sets के लिए JSON output use करो — jq से fast parsing होती है</li>
        <li><strong className="text-white">Cache Results:</strong> Repeated searches के results file में save करो — duplicate search avoid होगी</li>
      </ul>

      <h2>Reporting and Output Analysis</h2>
      <p>
        SearchSploit के results को properly analyze और report करना penetration testing का important part है:
      </p>
      <CodeBlock
        title="Report Generation Script"
        code={`#!/bin/bash
# SearchSploit results से HTML report बनाओ

TARGET=$1
REPORT="/tmp/exploit_report_$TARGET.html"

echo "<html><head><title>Exploit Report: $TARGET</title></head>" > $REPORT
echo "<body><h1>Exploit Report: $TARGET</h1>" >> $REPORT
echo "<h2>Generated: $(date)</h2>" >> $REPORT

# Nmap scan:
nmap -sV -oX /tmp/scan.xml $TARGET
searchsploit --nmap /tmp/scan.xml -j > /tmp/exploits.json

# JSON parse करके report में add करो:
echo "<h2>Found Exploits</h2><table border='1'>" >> $REPORT
echo "<tr><th>EDB-ID</th><th>Title</th><th>Type</th><th>Platform</th></tr>" >> $REPORT

cat /tmp/exploits.json | jq -r '
  .RESULTS_EXPLOIT[] |
  "<tr><td>" + .["EDB-ID"] + "</td><td>" + .Title +
  "</td><td>" + .Type + "</td><td>" + .Platform + "</td></tr>"
' >> $REPORT

echo "</table></body></html>" >> $REPORT
echo "[+] Report saved: $REPORT"`}
      />
      <CodeBlock
        title="Exploit Analysis Helper"
        code={`# एक्सप्लॉइट analyze करने के steps:

# 1. एक्सप्लॉइट का code देखो:
searchsploit -x 50383

# 2. Code review करो:
# - क्या language में लिखा है? (Python, Ruby, C, Shell)
# - क्या dependencies चाहिए?
# - LHOST/LPORT/TARGET variables कहाँ हैं?
# - क्या payload encode है?

# 3. Copy करो और modify करो:
searchsploit -m 50383
nano 50383.py
# Variables change करो

# 4. Test करो (lab environment में):
python3 50383.py target_ip

# 5. अगर काम नहीं कर रहा:
# - Version mismatch check करो
# - Dependencies install करो
# - Firewall/IDS block check करो
# - Alternative exploit try करो`}
      />

      <h2>Lab Environment Setup</h2>
      <p>
        SearchSploit practice करने के लिए safe lab environment बनाना ज़रूरी है। कभी भी production systems पर test मत करो — बिना authorization के exploit test करना illegal है।
      </p>
      <CodeBlock
        title="SearchSploit Practice Lab"
        code={`# Lab Setup — Vulnerable VMs:

# 1. Metasploitable2 (बहुत popular):
# Download: https://sourceforge.net/projects/metasploitable/
# VMware/VirtualBox में import करो
# Default credentials: msfadmin/msfadmin

# 2. DVWA (Damn Vulnerable Web Application):
git clone https://github.com/digininja/DVWA.git
cd DVWA
# Docker से run:
docker run --rm -it -p 80:80 vulnerables/web-dvwa

# 3. VulnHub VMs:
# https://www.vulnhub.com से download करो
# बहुत सारे vulnerable VMs available हैं

# Lab workflow:
# Step 1: Nmap से scan करो:
nmap -sV -oX scan.xml target_ip

# Step 2: SearchSploit से exploits ढूंढो:
searchsploit --nmap scan.xml

# Step 3: Exploit analyze करो:
searchsploit -x exploit_id

# Step 4: Copy करो और test करो:
searchsploit -m exploit_id
python3 exploit.py target_ip

# Safe practice rules:
# - केवल lab environment में test करो
# - VPN से connect करो (अगर remote lab)
# - Network isolate करो — lab network अलग रखो
# - Screenshots लो — learning के लिए useful

# Additional vulnerable targets:
# 4. OWASP WebGoat:
docker run -p 8080:8080 webgoat/webgoat

# 5. HackTheBox (online lab):
# https://www.hackthebox.com — free tier available

# 6. TryHackMe (beginner friendly):
# https://tryhackme.com — guided rooms

# Practice challenge:
# Metasploitable2 पर try करो:
# 1. vsftpd 2.3.4 backdoor (port 21)
# 2. Apache 2.2.8 (CVE-2011-3192)
# 3. Samba 3.x (CVE-2007-2447)
# 4. Tomcat default credentials
# SearchSploit से हर service के exploits ढूंढो`}
      />

      <h2>Detection and Defense</h2>
      <p>
        SearchSploit का उपयोग defense के लिए भी कर सकते हो — proactive vulnerability management:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Vulnerability Scanning:</strong> अपने systems को regularly scan करो — SearchSploit से known exploits check करो</li>
        <li><strong className="text-white">Patch Management:</strong> Exploit-DB check करके patches prioritize करो — जिस exploit का code available है उसे पहले patch करो</li>
        <li><strong className="text-white">Version Inventory:</strong> सभी software versions maintain करो — SearchSploit से cross-reference करो</li>
        <li><strong className="text-white">Threat Intelligence:</strong> Exploit-DB RSS feed subscribe करो — new exploits की तुरंत notification मिलेगी</li>
        <li><strong className="text-white">WAF Rules:</strong> Web application exploits के लिए WAF rules बनाओ — SQL injection, XSS patterns block करो</li>
        <li><strong className="text-white">Network Segmentation:</strong> Vulnerable systems को isolate करो — exploit होने पर blast radius limited</li>
        <li><strong className="text-white">IDS Signatures:</strong> Exploit traffic patterns के लिए IDS signatures बनाओ — Snort/Suricata rules</li>
        <li><strong className="text-white">Security Audits:</strong> Quarterly security audit में SearchSploit use करो — compliance requirements</li>
      </ul>

      <h2>Exploit Modification Guide</h2>
      <p>
        SearchSploit से मिले exploits हमेशा directly काम नहीं करते — target environment के हिसाब से modify करना पड़ता है। यह skill OSCP और real-world penetration testing में बहुत important है। हर exploit अलग language में लिखा होता है — Python, Ruby, C, Perl, Shell — इसलिए basic programming knowledge ज़रूरी है। Exploit comments में usage instructions और requirements लिखी होती हैं — हमेशा पहले पढ़ो।
      </p>
      <CodeBlock
        title="Common Exploit Modifications"
        code={`# Exploit modify करने के common steps:

# Step 1: Exploit download करो:
searchsploit -m 50383
# यह exploit.py current directory में copy करेगा

# Step 2: Code पढ़ो:
cat 50383.py
# Variables ढूंढो: RHOST, LHOST, RPORT, LPORT, TARGET

# Step 3: Variables change करो:
# Python exploit में:
RHOST = "target_ip"    # Target IP change करो
LHOST = "your_ip"      # अपनी IP set करो
LPORT = 4444           # Listener port
TARGET = "/path"       # Target path

# Step 4: Version check करो:
# Exploit comments में version info होता है
# Target software version match check करो

# Step 5: Dependencies install करो:
pip install requests pycryptodome  # जो भी चाहिए

# Step 6: Test करो:
python3 50383.py
# Error आए तो debug करो — print statements add करो

# Common modifications:
# - User-Agent change (WAF bypass)
# - Timeout values adjust
# - SSL verification disable (self-signed certs)
# - Proxy settings add (Burp Suite integration)
# - Payload encoding change (AV evasion)`}
      />

      <h2>Bug Bounty Workflow</h2>
      <p>
        Bug bounty programs में SearchSploit essential tool है। Reconnaissance phase में software versions detect करके SearchSploit से known exploits ढूंढना सबसे पहला step है। HackerOne, Bugcrowd, और Intigriti जैसे platforms पर hunters SearchSploit daily use करते हैं।
      </p>
      <p>
        Bug bounty में SearchSploit का use सिर्फ exploits ढूंढने के लिए नहीं — vulnerability confirmation के लिए भी होता है। अगर कोई software version detect होता है और SearchSploit में exploit available है, तो यह high-severity finding हो सकता है। Report में CVE number, exploit link, और impact analysis include करो।
      </p>
      <CodeBlock
        title="Bug Bounty SearchSploit Workflow"
        code={`#!/bin/bash
# Bug Bounty Reconnaissance Script

TARGET=$1
echo "[*] Bug Bounty Recon: $TARGET"

# Step 1: Subdomain enumeration:
subfinder -d $TARGET -o /tmp/subdomains.txt
cat /tmp/subdomains.txt | httpx -o /tmp/live_hosts.txt

# Step 2: Technology detection:
whatweb -i /tmp/live_hosts.txt --log-json=/tmp/whatweb.json

# Step 3: Service version detection:
nmap -sV -iL /tmp/live_hosts.txt -oX /tmp/nmap_scan.xml

# Step 4: SearchSploit automation:
echo "[*] Nmap-based exploit search:"
searchsploit --nmap /tmp/nmap_scan.xml

# Step 5: Web technology exploits:
echo "[*] Web technology exploits:"
cat /tmp/whatweb.json | jq -r '.[] | .plugins | keys[]' | sort -u | while read tech; do
    echo "[+] Searching: $tech"
    searchsploit "$tech" | head -5
done

# Step 6: CVE check:
echo "[*] CVE-based search:"
cat /tmp/whatweb.json | jq -r '.[] | .plugins | to_entries[] | select(.value.version != null) | .key + " " + .value.version' | while read name version; do
    searchsploit "$name $version" | head -3
done

echo "[*] Recon complete. Check results above."`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Metasploit Search</td><td className="py-2 px-3">इन-बिल्ट एक्सप्लॉइट सर्च</td><td className="py-2 px-3">डायरेक्ट एक्सप्लॉइट — सर्च से रन तक</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">NVD (NIST)</td><td className="py-2 px-3">CVE डेटाबेस</td><td className="py-2 px-3">सबसे कंप्लीट CVE कवरेज</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Vulners</td><td className="py-2 px-3">वल्नरेबिलिटी सर्च इंजन</td><td className="py-2 px-3">API + Nmap स्क्रिप्ट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Rapid7 DB</td><td className="py-2 px-3">Metasploit डेटाबेस</td><td className="py-2 px-3">वेरिफ़ाइड एक्सप्लॉइट्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Sploitus</td><td className="py-2 px-3">ऑनलाइन एक्सप्लॉइट सर्च</td><td className="py-2 px-3">मल्टी-सोर्स सर्च</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Packet Storm</td><td className="py-2 px-3">सिक्योरिटी एक्सप्लॉइट्स</td><td className="py-2 px-3">प्रूफ़-ऑफ़-कॉन्सेप्ट कोड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">0day.today</td><td className="py-2 px-3">एक्सप्लॉइट मार्केटप्लेस</td><td className="py-2 px-3">नए और अनपब्लिश्ड एक्सप्लॉइट्स</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">VulDB</td><td className="py-2 px-3">वल्नरेबिलिटी डेटाबेस</td><td className="py-2 px-3">रिस्क स्कोरिंग और एनालिसिस</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>SearchSploit को Nmap के साथ कॉम्बाइन करो — यह सबसे पावरफुल वर्कफ़्लो है। पहले Nmap से सर्विस वर्जन डिटेक्ट करो (nmap -sV -oX scan.xml), फिर searchsploit --nmap scan.xml से ऑटोमैटिकली एक्सप्लॉइट्स ढूंढो</li>
          <li>JSON आउटपुट (-j) ऑटोमेशन स्क्रिप्ट्स में यूज़ करो — jq के साथ पार्स करो</li>
          <li>डेटाबेस हमेशा अपडेट रखो — searchsploit -u वीकली रन करो</li>
          <li>OSCP की तैयारी कर रहे हो तो SearchSploit + Metasploit का कॉम्बो सीखो — एग्ज़ाम में बहुत काम आएगा</li>
          <li>--exclude फ़्लैग से DoS एक्सप्लॉइट्स हटाओ — सिर्फ RCE और LFI रिजल्ट्स देखो</li>
          <li>Exploit को use करने से पहले हमेशा code review करो — malicious code हो सकता है</li>
          <li>CVE number से search करो — ज़्यादा accurate results मिलते हैं</li>
          <li>Bulk scanning के लिए Nmap XML output को file में save करो और batch process करो</li>
          <li>एक्सप्लॉइट modify करते समय comments पढ़ो — developer ने usage instructions लिखी होती हैं</li>
          <li>Web application exploits के लिए "webapps" platform filter use करो — targeted results मिलेंगे</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> SearchSploit सिर्फ एक सर्च टूल है — एक्सप्लॉइट्स ढूंढता है, एक्सप्लॉइट नहीं करता। लेकिन मिले हुए एक्सप्लॉइट्स का गलत इस्तेमाल गंभीर कानूनी परिणामों का कारण बन सकता है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत सिस्टम एक्सेस अपराध है। केवल अपने लैब या लिखित अनुमति वाले टार्गेट्स पर ही एक्सप्लॉइट्स टेस्ट करें।
      </div>
    </TutorialLayout>
  )
}
