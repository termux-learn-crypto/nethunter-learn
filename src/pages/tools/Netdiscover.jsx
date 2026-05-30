import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Netdiscover() {
  return (
    <TutorialLayout
      title="netdiscover"
      subtitle="ARP-based नेटवर्क एड्रेस डिस्कवरी टूल — लोकल नेटवर्क के सभी डिवाइसेज़ खोजें"
      icon="📡"
      prev={{ to: '/tool/pixiewps', label: 'pixiewps' }}
      next={{ to: '/tool/enum4linux', label: 'enum4linux' }}
    >
      <h2>What is Netdiscover?</h2>
      <p>
        नेटडिस्कवर एक ARP-आधारित नेटवर्क डिस्कवरी टूल है जो लोकल नेटवर्क पर मौजूद सभी डिवाइसेज़ को खोजता है। यह टूल ARP (Address Resolution Protocol) रिक्वेस्ट्स भेजकर या सुनकर नेटवर्क पर लाइव होस्ट्स का पता लगाता है। हर डिवाइस का IP एड्रेस, MAC एड्रेस, और निर्माता (vendor) की जानकारी मिलती है। पेनेट्रेशन टेस्टिंग और नेटवर्क एडमिनिस्ट्रेशन में यह एक अनिवार्य टूल है।
      </p>
      <p>
        वायरलेस नेटवर्क्स में यह टूल बहुत उपयोगी है जहां DHCP लॉग्स तक पहुंच नहीं होती। पेनेट्रेशन टेस्टिंग का पहला कदम होता है — यह जानना कि नेटवर्क पर कौन-कौन से डिवाइस हैं। बिना इस जानकारी के कोई भी सुरक्षा परीक्षण अधूरा है। काली नेटहंटर में यह प्री-इंस्टॉल्ड आता है और तुरंत इस्तेमाल के लिए तैयार होता है।
      </p>
      <p>
        नेटडिस्कवर की सबसे बड़ी खासियत है कि यह पैसिव और एक्टिव दोनों मोड्स में काम करता है। पैसिव मोड में यह सिर्फ सुनता है — कोई पैकेट नहीं भेजता — इसलिए डिटेक्ट होना लगभग असंभव है। एक्टिव मोड में ARP रिक्वेस्ट्स भेजकर तेज़ी से सभी होस्ट्स खोजता है। यह IoT डिवाइसेज़, स्मार्ट टीवी, कैमरे, और राउटर्स को खोजने में विशेष रूप से प्रभावी है।
      </p>
      <p>
        नेटडिस्कवर C भाषा में लिखा गया है और libnet तथा libpcap लाइब्रेरीज़ का उपयोग करता है। यह बहुत हल्का और तेज़ टूल है — मिनिमल डिपेंडेंसीज़ और कम CPU उपयोग। यह Linux, macOS, और BSD सिस्टम्स पर चलता है। इसका आउटपुट सरल और पढ़ने में आसान है — हर होस्ट का IP, MAC, और vendor name एक लाइन में मिलता है।
      </p>
      <p>
        प्रोफेशनल पेनेट्रेशन टेस्टर्स नेटडिस्कवर को पसंद करते हैं क्योंकि यह बहुत तेज़ है और कम डिटेक्शन का जोखिम है। Nmap की तुलना में यह सिर्फ ARP लेवल पर काम करता है जो फ़ायरवॉल से पहले होता है। इसलिए यह उन डिवाइसेज़ को भी खोज लेता है जो ICMP (ping) ब्लॉक करते हैं। यही इसे नेटवर्क रेकन का सबसे भरोसेमंद टूल बनाता है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> नेटडिस्कवर केवल अपने नेटवर्क या अधिकृत पेनेट्रेशन टेस्टिंग में ही इस्तेमाल करें। बिना अनुमति के नेटवर्क स्कैनिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क स्कैनिंग अपराध हो सकता है। साइबर अपराध गंभीर परिणामों का कारण बन सकता है — जुर्माना और जेल दोनों हो सकते हैं। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of Netdiscover</h2>
      <p>
        नेटडिस्कवर को जेम्स कामिंस (Jms) ने विकसित किया था। यह टूल मूल रूप से लिनक्स के लिए बनाया गया था और C भाषा में लिखा गया है। इसका मुख्य उद्देश्य वायरलेस नेटवर्क्स में होस्ट्स को जल्दी से खोजना था जहां पारंपरिक टूल्स धीमे या अप्रभावी होते हैं। 2005 में पहला वर्जन रिलीज़ हुआ और तब से यह काली लिनक्स का अभिन्न हिस्सा है।
      </p>
      <p>
        शुरुआत में नेटडिस्कवर सिर्फ एक्टिव मोड में काम करता था। बाद में पैसिव मोड जोड़ा गया ताकि स्टील्थी रेकन किया जा सके। 2010 में MAC वेंडर लुकअप फ़ीचर जोड़ा गया जिससे डिवाइस का निर्माता भी पता चलता है। यह फ़ीचर पेनेट्रेशन टेस्टर्स के लिए बहुत उपयोगी है — अगर Hikvision कैमरा मिले तो उसकी डिफ़ॉल्ट क्रेडेंशियल्स ट्राई कर सकते हो।
      </p>
      <p>
        नेटडिस्कवर का डिज़ाइन दर्शन सरलता है — कम कमांड्स, तेज़ रिजल्ट्स, और मिनिमल डिपेंडेंसीज़। यही कारण है कि पेनेट्रेशन टेस्टर्स इसे पसंद करते हैं। Nmap जैसे भारी टूल्स की तुलना में नेटडिस्कवर तुरंत रिजल्ट देता है। कमांड टाइप करो, सेकंडों में पूरे नेटवर्क का नक्शा मिल जाता है।
      </p>

      <h2>How Netdiscover Works?</h2>
      <p>
        नेटडिस्कवर ARP (Address Resolution Protocol) का उपयोग करता है। ARP वह प्रोटोकॉल है जो IP एड्रेस को MAC एड्रेस से मैप करता है। जब कोई डिवाइस नेटवर्क पर होता है, तो उसका एक IP और एक MAC एड्रेस होता है। नेटडिस्कवर इन दोनों को खोजता है। ARP प्रोटोकॉल लेयर 2 (Data Link Layer) पर काम करता है जो फ़ायरवॉल से पहले होता है।
      </p>
      <p>
        एक्टिव मोड में नेटडिस्कवर ब्रॉडकास्ट ARP रिक्वेस्ट भेजता है। यह रिक्वेस्ट "Who has this IP?" पूछता है। जिस डिवाइस का वह IP है, वह अपना MAC एड्रेस भेजकर जवाब देता है। नेटडिस्कवर सभी जवाबों को रिकॉर्ड करता है और एक लिस्ट बनाता है। यह प्रोसेस बहुत तेज़ है — /24 नेटवर्क (254 होस्ट्स) कुछ ही सेकंड्स में स्कैन हो जाता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">एक्टिव मोड:</strong> ARP रिक्वेस्ट्स ब्रॉडकास्ट करता है और जवाबों से होस्ट्स खोजता है — तेज़ लेकिन डिटेक्टेबल</li>
        <li><strong className="text-white">पैसिव मोड:</strong> नेटवर्क ट्रैफ़िक सुनता है और ARP पैकेट्स से होस्ट्स पहचानता है — स्टील्थी</li>
        <li><strong className="text-white">MAC वेंडर लुकअप:</strong> MAC एड्रेस के पहले 3 बाइट्स (OUI) से निर्माता पहचानता है</li>
        <li><strong className="text-white">स्क्रीन मोड:</strong> ऑटो-रिफ्रेश डिस्प्ले से रियल-टाइम मॉनिटरिंग करता है</li>
        <li><strong className="text-white">पार्सेबल आउटपुट:</strong> आउटपुट को फ़ाइल में सेव करके बाद में एनालाइज़ कर सकते हो</li>
        <li><strong className="text-white">इंटरफ़ेस सिलेक्शन:</strong> किसी भी नेटवर्क इंटरफ़ेस पर काम कर सकता है — eth0, wlan0, usb0</li>
      </ul>
      <p>
        पैसिव मोड में नेटडिस्कवर कुछ भी नहीं भेजता — सिर्फ सुनता है। जब कोई डिवाइस ARP रिक्वेस्ट या रिप्लाई भेजता है, नेटडिस्कवर उसे कैप्चर करके रिकॉर्ड करता है। यह बहुत स्टील्थी है — IDS/IPS इसे डिटेक्ट नहीं कर सकते। हालांकि, इसमें समय लगता है क्योंकि नेटवर्क पर ट्रैफ़िक होना चाहिए। बिज़ी नेटवर्क पर मिनटों में, शांत नेटवर्क पर घंटों लग सकते हैं।
      </p>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में नेटडिस्कवर प्री-इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो कई तरीकों से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="नेटडिस्कवर इंस्टॉलेशन"
        code={`# apt से इंस्टॉल (सबसे आसान):
sudo apt update
sudo apt install netdiscover

# वर्जन चेक:
netdiscover --version

# सहायता:
netdiscover --help

# सोर्स से इंस्टॉल (नवीनतम वर्जन):
git clone https://github.com/netdiscover-scanner/netdiscover.git
cd netdiscover
autoreconf -fi
./configure
make
sudo make install

# डिपेंडेंसीज़ इंस्टॉल करें (अगर ज़रूरत हो):
sudo apt install libnet1-dev libpcap-dev autoconf automake

# Docker से:
docker pull netdiscover
docker run --rm --net=host netdiscover -r 192.168.1.0/24`}
      />

      <h2>Basic Usage</h2>
      <p>
        नेटडिस्कवर का बेसिक इस्तेमाल बहुत आसान है। बस सही कमांड और रेंज दो। यह तुरंत स्कैन शुरू कर देता है और सेकंडों में रिजल्ट्स दिखाता है।
      </p>
      <CodeBlock
        title="बेसिक स्कैन"
        code={`# ऑटो स्कैन (डिफ़ॉल्ट रेंज):
sudo netdiscover

# स्पेसिफिक रेंज स्कैन:
sudo netdiscover -r 192.168.1.0/24

# सिंगल IP चेक:
sudo netdiscover -r 192.168.1.1/32

# बड़ी रेंज:
sudo netdiscover -r 10.0.0.0/16

# स्पेसिफिक इंटरफ़ेस:
sudo netdiscover -r 192.168.1.0/24 -i wlan0

# फ़ास्ट मोड:
sudo netdiscover -r 192.168.1.0/24 -f

# पार्सेबल आउटपुट:
sudo netdiscover -r 192.168.1.0/24 -P

# स्क्रीन मोड:
sudo netdiscover -r 192.168.1.0/24 -S`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r range</td><td className="py-2 px-3">स्कैन रेंज स्पेसिफाई करें</td><td className="py-2 px-3 font-mono text-xs">-r 192.168.1.0/24</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-i interface</td><td className="py-2 px-3">नेटवर्क इंटरफ़ेस चुनें</td><td className="py-2 px-3 font-mono text-xs">-i wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">पैसिव मोड — सिर्फ सुनें, कुछ न भेजें</td><td className="py-2 px-3 font-mono text-xs">-p</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f</td><td className="py-2 px-3">फ़ास्ट मोड — कम पैकेट्स, तेज़ स्कैन</td><td className="py-2 px-3 font-mono text-xs">-f</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c count</td><td className="py-2 px-3">कितने ARP पैकेट्स भेजें</td><td className="py-2 px-3 font-mono text-xs">-c 50</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-S</td><td className="py-2 px-3">स्क्रीन मोड — ऑटो-रिफ्रेश डिस्प्ले</td><td className="py-2 px-3 font-mono text-xs">-S</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-P</td><td className="py-2 px-3">पार्सेबल आउटपुट — फ़ाइल में सेव करने योग्य</td><td className="py-2 px-3 font-mono text-xs">-P</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-N</td><td className="py-2 px-3">नो ऑटो-स्कैन — सिर्फ पासिव मोड</td><td className="py-2 px-3 font-mono text-xs">-N</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d delay</td><td className="py-2 px-3">ऑटो-स्कैन डिले (मिलीसेकंड में)</td><td className="py-2 px-3 font-mono text-xs">-d 1000</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-l</td><td className="py-2 px-3">स्कैन के बाद भी स्कैन करते रहें</td><td className="py-2 px-3 font-mono text-xs">-l</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Active Scanning</h2>
      <p>
        एक्टिव मोड में नेटडिस्कवर ARP रिक्वेस्ट्स ब्रॉडकास्ट करता है। हर होस्ट जो नेटवर्क पर लाइव है, वह जवाब देता है। यह तेज़ है लेकिन डिटेक्ट हो सकता है। एक्टिव मोड सबसे ज़्यादा इस्तेमाल होता है क्योंकि यह तुरंत रिजल्ट देता है।
      </p>
      <CodeBlock
        title="एक्टिव स्कैन"
        code={`# बेसिक एक्टिव स्कैन:
sudo netdiscover -r 192.168.1.0/24

# फ़ास्ट स्कैन (कम पैकेट्स):
sudo netdiscover -r 192.168.1.0/24 -f

# 50 पैकेट्स भेजकर स्कैन:
sudo netdiscover -r 192.168.1.0/24 -c 50

# eth0 इंटरफ़ेस पर:
sudo netdiscover -r 192.168.1.0/24 -i eth0

# स्क्रीन मोड (लाइव डिस्प्ले):
sudo netdiscover -r 192.168.1.0/24 -S

# फ़ास्ट + स्क्रीन मोड:
sudo netdiscover -r 192.168.1.0/24 -f -S

# आउटपुट फ़ाइल में:
sudo netdiscover -r 192.168.1.0/24 -P > results.txt

# कई रेंज स्कैन:
sudo netdiscover -r 192.168.1.0/24
sudo netdiscover -r 192.168.2.0/24
sudo netdiscover -r 10.0.0.0/24`}
      />

      <h2>Passive Scanning</h2>
      <p>
        पैसिव मोड सबसे स्टील्थी है। नेटडिस्कवर सिर्फ नेटवर्क ट्रैफ़िक सुनता है और ARP पैकेट्स से होस्ट्स पहचानता है। कोई पैकेट नहीं भेजता — इसलिए IDS/IPS से बचता है। पैसिव मोड उन स्थितियों में इस्तेमाल करें जहां डिटेक्शन का जोखिम कम रखना है।
      </p>
      <CodeBlock
        title="पैसिव मोड"
        code={`# पैसिव स्कैन:
sudo netdiscover -p

# स्पेसिफिक इंटरफ़ेस:
sudo netdiscover -p -i wlan0

# पैसिव + फ़ास्ट:
sudo netdiscover -p -f

# पैसिव + स्क्रीन मोड:
sudo netdiscover -p -S

# पैसिव + आउटपुट:
sudo netdiscover -p -P > passive_results.txt

# जब ट्रैफ़िक आता है तो रिजल्ट्स ऑटो-डिस्प्ले होते हैं
# धैर्य रखें — कुछ समय लग सकता है

# बिज़ी नेटवर्क पर तेज़, शांत नेटवर्क पर धीमा

# पैसिव मोड का उपयोग:
# 1. स्टील्थी रेकन
# 2. नेटवर्क ट्रैफ़िक एनालिसिस
# 3. नए डिवाइसेज़ का पता लगाना`}
      />

      <h2>Custom Range Scanning</h2>
      <p>
        नेटडिस्कवर विभिन्न IP रेंज में स्कैन कर सकता है। सही रेंज चुनना ज़रूरी है — गलत रेंज से समय बर्बाद होता है।
      </p>
      <CodeBlock
        title="कस्टम रेंज स्कैन"
        code={`# /24 रेंज (254 होस्ट्स):
sudo netdiscover -r 192.168.1.0/24

# /16 रेंज (65,534 होस्ट्स — बहुत बड़ा):
sudo netdiscover -r 10.0.0.0/16

# /28 रेंज (14 होस्ट्स — छोटा):
sudo netdiscover -r 192.168.1.0/28

# सिंगल IP:
sudo netdiscover -r 192.168.1.100/32

# कस्टम सबनेट:
sudo netdiscover -r 172.16.0.0/12

# मल्टीपल सबनेट्स:
for net in 192.168.{1..5}.0/24; do
  echo "[*] स्कैनिंग: $net"
  sudo netdiscover -r $net -f -P
done`}
      />

      <h2>Output and Logging</h2>
      <p>
        रिजल्ट्स को फ़ाइल में सेव करना और बाद में एनालाइज़ करना ज़रूरी है। पार्सेबल आउटपुट से डेटा को दूसरे टूल्स में इम्पोर्ट कर सकते हो।
      </p>
      <CodeBlock
        title="आउटपुट ऑप्शंस"
        code={`# फ़ाइल में सेव (पार्सेबल):
sudo netdiscover -r 192.168.1.0/24 -P > results.txt

# मशीन-रीडेबल फॉर्मेट:
sudo netdiscover -r 192.168.1.0/24 -P | grep -v "^$\|Starting\|Currently"

# CSV फॉर्मेट में:
sudo netdiscover -r 192.168.1.0/24 -P | tee scan_results.csv

# टाइमस्टैम्प के साथ:
sudo netdiscover -r 192.168.1.0/24 -P > scan_$(date +%Y%m%d_%H%M%S).txt

# रिजल्ट्स काउंट करें:
sudo netdiscover -r 192.168.1.0/24 -P | wc -l

# सिर्फ IPs निकालें:
sudo netdiscover -r 192.168.1.0/24 -P | awk '{print $1}' | grep -E '^[0-9]'

# JSON फॉर्मेट में कन्वर्ट:
sudo netdiscover -r 192.168.1.0/24 -P | awk '{
  if ($1 ~ /^[0-9]/) print "{\"ip\":\""$1"\",\"mac\":\""$2"\",\"vendor\":\""$3"\"}"
}'`}
      />

      <h2>Understanding Output</h2>
      <p>
        नेटडिस्कवर का आउटपुट सरल है — हर होस्ट की जानकारी एक लाइन में मिलती है। इसे समझना ज़रूरी है।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">कॉलम</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या बताता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">IP</td><td className="py-2 px-3">डिवाइस का IP एड्रेस</td><td className="py-2 px-3 font-mono text-xs">192.168.1.5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">MAC</td><td className="py-2 px-3">डिवाइस का हार्डवेयर एड्रेस</td><td className="py-2 px-3 font-mono text-xs">AA:BB:CC:DD:EE:FF</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Count</td><td className="py-2 px-3">कितने पैकेट्स मिले</td><td className="py-2 px-3 font-mono text-xs">42</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">MAC Vendor</td><td className="py-2 px-3">डिवाइस निर्माता</td><td className="py-2 px-3 font-mono text-xs">Samsung Electronics</td></tr>
          </tbody>
        </table>
      </div>

      <h2>MAC Vendor Identification</h2>
      <p>
        MAC एड्रेस के पहले 3 बाइट्स (OUI - Organizationally Unique Identifier) से डिवाइस का निर्माता पता चलता है। यह जानकारी पेनेट्रेशन टेस्टिंग में बहुत काम आती है — अगर Hikvision कैमरा मिले तो डिफ़ॉल्ट क्रेडेंशियल्स ट्राई कर सकते हो।
      </p>
      <CodeBlock
        title="MAC वेंडर से डिवाइस पहचानें"
        code={`# कॉमन MAC वेंडर्स और उनके डिवाइस:
# Samsung (A0:AB:1B) — मोबाइल फ़ोन, टैबलेट
# Apple (A4:83:E7) — iPhone, iPad, Mac
# Intel (F8:63:3F) — लैपटॉप WiFi कार्ड
# TP-Link (50:C7:BF) — राउटर, एक्सेस पॉइंट
# Xiaomi (28:6C:07) — IoT डिवाइसेज़, फ़ोन
# Huawei (CC:A2:23) — मोबाइल, नेटवर्क उपकरण
# Raspberry Pi (B8:27:EB) — IoT प्रोजेक्ट्स
# Hikvision (28:57:BE) — सर्विलांस कैमरे
# Amazon (FC:65:DE) — Echo, Fire TV
# Google (54:60:09) — Chromecast, Nest

# OUI डेटाबेस लुकअप:
# https://macvendors.com पर MAC एड्रेस डालो
# https://maclookup.app पर भी चेक कर सकते हो

# कमांड लाइन से वेंडर चेक:
arp -a | grep 192.168.1
# फिर MAC एड्रेस macvendors.com पर सर्च करो

# Python से OUI लुकअप:
python3 -c "
mac = 'AA:BB:CC:DD:EE:FF'
oui = mac[:8].upper()
print(f'OUI: {oui}')
# ऑनलाइन डेटाबेस में सर्च करो')
`}
      />

      <h2>Practical Workflow</h2>
      <p>
        पेनेट्रेशन टेस्टिंग में नेटडिस्कवर का इस्तेमाल एक व्यवस्थित वर्कफ़्लो में करें। पहले नेटवर्क डिस्कवरी, फिर टार्गेट सिलेक्शन, फिर डिटेल्ड स्कैन।
      </p>
      <CodeBlock
        title="पेनेट्रेशन टेस्टिंग स्टेप्स"
        code={`# स्टेप 1: नेटवर्क डिस्कवरी:
sudo netdiscover -r 192.168.1.0/24 -P > hosts.txt

# स्टेप 2: टार्गेट्स नोट करें:
# 192.168.1.1 — राउटर (TP-Link)
# 192.168.1.5 — मोबाइल (Samsung)
# 192.168.1.10 — लैपटॉप (Intel)
# 192.168.1.15 — IoT कैमरा (Hikvision)
# 192.168.1.20 — स्मार्ट टीवी (Samsung)

# स्टेप 3: Nmap से डिटेल्ड स्कैन:
nmap -sV -O 192.168.1.1
nmap -sV -O 192.168.1.15

# स्टेप 4: वल्नरेबिलिटी स्कैन:
nmap --script vuln 192.168.1.15

# स्टेप 5: एक्सप्लॉइट:
# मिली वल्नरेबिलिटीज़ पर काम करें

# स्टेप 6: रिपोर्ट बनाएं:
# सभी रिजल्ट्स को एक रिपोर्ट में कम्पाइल करें`}
      />

      <h2>Network Mapping</h2>
      <p>
        नेटडिस्कवर से नेटवर्क का पूरा नक्शा बना सकते हो। सभी डिवाइसेज़, उनके IPs, MAC addresses, और vendors — सब एक जगह।
      </p>
      <CodeBlock
        title="नेटवर्क मैपिंग"
        code={`# नेटवर्क टोपोलॉजी बनाएं:
sudo netdiscover -r 192.168.1.0/24 -P > network_map.txt

# सभी होस्ट्स की लिस्ट:
cat network_map.txt | awk '{print $1}' | grep -E '^[0-9]' > ips.txt

# वेंडर के हिसाब से ग्रुप:
cat network_map.txt | awk '{print $3}' | sort | uniq -c | sort -rn

# नए डिवाइसेज़ ट्रैक करें:
# पहले स्कैन:
sudo netdiscover -r 192.168.1.0/24 -P > scan1.txt
# बाद में स्कैन:
sudo netdiscover -r 192.168.1.0/24 -P > scan2.txt
# तुलना:
diff scan1.txt scan2.txt

# Zenmap में इम्पोर्ट:
# ips.txt को Zenmap में लोड करो`}
      />

      <h2>Wireless Scanning</h2>
      <p>
        वायरलेस नेटवर्क्स में नेटडिस्कवर विशेष रूप से उपयोगी है। DHCP लॉग्स तक पहुंच न होने पर यह सबसे अच्छा विकल्प है।
      </p>
      <CodeBlock
        title="वायरलेस नेटवर्क स्कैन"
        code={`# वायरलेस इंटरफ़ेस पर स्कैन:
sudo netdiscover -r 192.168.1.0/24 -i wlan0

# मॉनिटर मोड इंटरफ़ेस:
# पहले मॉनिटर मोड सेट करो:
sudo airmon-ng start wlan0
sudo netdiscover -r 192.168.1.0/24 -i wlan0mon

# वायरलेस नेटवर्क पर पैसिव मोड:
sudo netdiscover -p -i wlan0

# वायरलेस क्लाइंट्स खोजें:
sudo netdiscover -r 192.168.1.0/24 -i wlan0 -S

# गेस्ट नेटवर्क स्कैन:
sudo netdiscover -r 192.168.2.0/24 -i wlan0`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        नेटडिस्कवर को स्क्रिप्ट्स में इस्तेमाल करके ऑटोमेशन कर सकते हो। नेटवर्क मॉनिटरिंग, शेड्यूल्ड स्कैनिंग, और रिपोर्टिंग सब ऑटोमेटिक हो सकता है।
      </p>
      <CodeBlock
        title="बैश स्क्रिप्ट — ऑटोमैटिक डिस्कवरी"
        code={`#!/bin/bash
# नेटवर्क डिस्कवरी स्क्रिप्ट

RANGE="192.168.1.0/24"
OUTPUT="network_scan_$(date +%Y%m%d_%H%M%S).txt"

echo "[*] नेटवर्क स्कैन शुरू: $RANGE"
echo "[*] आउटपुट: $OUTPUT"

# स्कैन रन करें:
sudo netdiscover -r $RANGE -P > $OUTPUT 2>&1

# रिजल्ट्स काउंट करें:
HOSTS=$(grep -c "^[0-9]" $OUTPUT)
echo "[+] $HOSTS होस्ट्स मिले"

# हर होस्ट पर Nmap स्कैन:
while IFS= read -r line; do
  IP=$(echo "$line" | awk '{print $1}')
  if [[ $IP =~ ^[0-9] ]]; then
    echo "[*] Nmap स्कैन: $IP"
    nmap -sV -O "$IP" >> "\${OUTPUT}_nmap.txt"
  fi
done < "$OUTPUT"

echo "[+] स्कैन पूरा!"`}
      />

      <CodeBlock
        title="कंटीन्यूअस मॉनिटरिंग"
        code={`#!/bin/bash
# नेटवर्क मॉनिटरिंग स्क्रिप्ट — नए डिवाइसेज़ डिटेक्ट

LOGFILE="network_monitor.log"
KNOWN_HOSTS="known_hosts.txt"

echo "[*] नेटवर्क मॉनिटरिंग शुरू..."
echo "[*] लॉग: $LOGFILE"

while true; do
  # पैसिव स्कैन (10 सेकंड):
  timeout 10 sudo netdiscover -p -f -P > /tmp/current_scan.txt 2>/dev/null

  # नए होस्ट्स चेक करें:
  while IFS= read -r line; do
    IP=$(echo "$line" | awk '{print $1}')
    if [[ $IP =~ ^[0-9] ]]; then
      if ! grep -q "$IP" "$KNOWN_HOSTS" 2>/dev/null; then
        echo "[!] नया होस्ट मिला: $line"
        echo "$(date): नया होस्ट: $line" >> "$LOGFILE"
        echo "$IP" >> "$KNOWN_HOSTS"
      fi
    fi
  done < /tmp/current_scan.txt

  sleep 5
done`}
      />

      <CodeBlock
        title="शेड्यूल्ड स्कैनिंग"
        code={`#!/bin/bash
# हर घंटे स्कैन करें और रिपोर्ट बनाएं

RANGE="192.168.1.0/24"
REPORT_DIR="network_reports"
mkdir -p $REPORT_DIR

while true; do
  TIMESTAMP=$(date +%Y%m%d_%H%M%S)
  OUTPUT="$REPORT_DIR/scan_$TIMESTAMP.txt"

  echo "[*] शेड्यूल्ड स्कैन: $(date)"
  sudo netdiscover -r $RANGE -f -P > $OUTPUT 2>&1

  HOSTS=$(grep -c "^[0-9]" $OUTPUT)
  echo "[+] $HOSTS होस्ट्स मिले"

  # अगर नए होस्ट्स हैं तो अलर्ट:
  if [ -f "$REPORT_DIR/last_scan.txt" ]; then
    NEW=$(diff "$REPORT_DIR/last_scan.txt" $OUTPUT | grep "^>" | wc -l)
    if [ $NEW -gt 0 ]; then
      echo "[!] $NEW नए होस्ट्स मिले!"
      echo "$(date): $NEW नए होस्ट्स" >> alerts.log
    fi
  fi

  cp $OUTPUT "$REPORT_DIR/last_scan.txt"
  sleep 3600  # हर घंटे
done`}
      />

      <h2>Netdiscover vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Netdiscover</th>
              <th className="text-left py-2 px-3 text-neon-green">Nmap</th>
              <th className="text-left py-2 px-3 text-neon-green">arp-scan</th>
              <th className="text-left py-2 px-3 text-neon-green">arpwatch</th>
              <th className="text-left py-2 px-3 text-neon-green">Bettercap</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">प्रोटोकॉल</td><td className="py-2 px-3">ARP</td><td className="py-2 px-3">ARP/ICMP/TCP</td><td className="py-2 px-3">ARP</td><td className="py-2 px-3">ARP</td><td className="py-2 px-3">ARP/ICMP</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">पैसिव मोड</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">MAC वेंडर</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्पीड</td><td className="py-2 px-3">तेज़</td><td className="py-2 px-3">मध्यम</td><td className="py-2 px-3">तेज़</td><td className="py-2 px-3">धीमा</td><td className="py-2 px-3">तेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्टील्थ</td><td className="py-2 px-3">हाँ (पैसिव)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GUI</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">Zenmap</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">Web UI</td></tr>
            <tr><td className="py-2 px-3 text-white">उपयोग</td><td className="py-2 px-3">तेज़ डिस्कवरी</td><td className="py-2 px-3">फुल स्कैन</td><td className="py-2 px-3">ARP स्कैन</td><td className="py-2 px-3">मॉनिटरिंग</td><td className="py-2 px-3">MITM</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'कोई होस्ट नहीं मिल रहा', a: 'इंटरफ़ेस चेक करो — ifconfig wlan0। रेंज सही है? /24 का मतलब 254 होस्ट्स। Root से चला रहे हो? sudo लगाओ। इंटरफ़ेस UP है? ip link set wlan0 up करो।' },
          { q: 'Permission denied एरर', a: 'नेटडिस्कवर को root प्रिविलेज चाहिए। sudo लगाकर चलाओ: sudo netdiscover -r 192.168.1.0/24। बिना sudo काम नहीं करेगा।' },
          { q: 'स्कैन बहुत धीमा है', a: '-f फ्लैग यूज़ करो (फ़ास्ट मोड)। छोटी रेंज स्कैन करो (/28 instead of /16)। -c फ्लैग से पैकेट काउंट लिमिट करो।' },
          { q: 'गलत MAC वेंडर दिखा रहा है', a: 'OUI डेटाबेस पुराना हो सकता है। नया डेटाबेस डाउनलोड करो या macvendors.com पर वेरिफाई करो। कुछ डिवाइसेज़ रैंडम MAC यूज़ करते हैं।' },
          { q: 'पैसिव मोड में कुछ नहीं दिख रहा', a: 'नेटवर्क पर ट्रैफ़िक होना चाहिए। दूसरे डिवाइस से ट्रैफ़िक जनरेट करो — ब्राउज़िंग, पिंग आदि। शांत नेटवर्क पर घंटों लग सकते हैं।' },
          { q: 'सिर्फ अपना IP दिख रहा है', a: 'नेटवर्क आइसोलेशन हो सकता है। AP आइसोलेशन चेक करो। वायर्ड नेटवर्क पर ट्राई करो। VLAN आइसोलेशन भी कारण हो सकता है।' },
          { q: 'Interface not found एरर', a: 'इंटरफ़ेस नाम चेक करो: ip link show। वायरलेस कार्ड प्लग है? lsusb से चेक करो। ड्राइवर इंस्टॉल है? iwconfig से देखो।' },
          { q: 'स्कैन रुक नहीं रहा', a: 'Ctrl+C से रोको। -c फ्लैग से पैकेट लिमिट सेट करो। -d फ्लैग से डिले बढ़ाओ।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Netdiscover for Network Administration</h2>
      <p>
        नेटडिस्कवर सिर्फ पेनेट्रेशन टेस्टिंग के लिए नहीं है — नेटवर्क एडमिनिस्ट्रेशन में भी बहुत useful है। रोज़मर्रा के नेटवर्क मैनेजमेंट tasks में इसका इस्तेमाल कर सकते हो।
      </p>
      <p>
        <strong className="text-white">IP Address Management (IPAM):</strong> नेटडिस्कवर से पता चलता है कि कौन से IPs use में हैं और कौन से free हैं। DHCP server configure करते समय यह information ज़रूरी है — existing devices के IPs exclude करने होते हैं। Regular scanning से IP conflicts detect होते हैं।
      </p>
      <p>
        <strong className="text-white">Unauthorized Device Detection:</strong> हर हफ़्ते scan करो और results compare करो। नए devices automatically detect होंगे — unauthorized laptops, mobile hotspots, IoT devices सब पकड़ में आएंगे। Corporate security policy enforce करने का यह simplest तरीका है।
      </p>
      <p>
        <strong className="text-white">Network Documentation:</strong> नेटडिस्कवर का output network documentation बनाने में use करो। हर device का IP, MAC, vendor — सब एक जगह। नेटवर्क टोपोलॉजी डायग्राम बनाने में यह data base होता है। नए admins को network समझाने का यह easiest तरीका है।
      </p>

      <h2>Detection and Defense</h2>
      <p>
        नेटडिस्कवर के एक्टिव स्कैन को डिटेक्ट किया जा सकता है। डिफेंडर्स को यह पता होना चाहिए कि उनके नेटवर्क पर कौन ARP स्कैन कर रहा है। पैसिव मोड डिटेक्ट करना मुश्किल है लेकिन एक्टिव मोड को रोका जा सकता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">ARP मॉनिटरिंग:</strong> arpwatch या XArp से ARP ट्रैफ़िक मॉनिटर करें — असामान्य ARP रिक्वेस्ट्स अलर्ट करें</li>
        <li><strong className="text-white">स्टैटिक ARP एंट्रीज़:</strong> महत्वपूर्ण डिवाइसेज़ के लिए स्टैटिक ARP सेट करें: arp -s 192.168.1.1 AA:BB:CC:DD:EE:FF</li>
        <li><strong className="text-white">नेटवर्क सेगमेंटेशन:</strong> VLANs से नेटवर्क को छोटे हिस्सों में बांटें — ARP ब्रॉडकास्ट सीमित होगा</li>
        <li><strong className="text-white">IDS/IPS:</strong> Snort या Suricata से ARP स्कैन डिटेक्ट करें — ARP फ्लड अलर्ट सेट करें</li>
        <li><strong className="text-white">802.1X:</strong> नेटवर्क एक्सेस कंट्रोल लागू करें — अनधिकृत डिवाइसेज़ नेटवर्क जॉइन नहीं कर पाएंगे</li>
        <li><strong className="text-white">DHCP स्नूपिंग:</strong> ARP स्पूफिंग रोकें — स्विच पर DHCP स्नूपिंग इनेबल करें</li>
        <li><strong className="text-white">DAI (Dynamic ARP Inspection):</strong> स्विच पर DAI इनेबल करें — फ़र्जी ARP पैकेट्स ब्लॉक होंगे</li>
        <li><strong className="text-white">लॉगिंग:</strong> सभी ARP रिक्वेस्ट्स लॉग करें और एनालाइज़ करें — असामान्य पैटर्न ढूंढें</li>
        <li><strong className="text-white">पोर्ट सिक्योरिटी:</strong> स्विच पोर्ट्स पर MAC लिमिट सेट करें — हर पोर्ट पर सिर्फ एक MAC</li>
        <li><strong className="text-white">नेटवर्क NAC:</strong> Network Access Control सिस्टम लगाएं — केवल authorized डिवाइसेज़ को एक्सेस</li>
        <li><strong className="text-white">ARP Cache Monitoring:</strong> नियमित रूप से ARP cache check करें — duplicate MAC addresses suspicious हैं</li>
        <li><strong className="text-white">Network Segmentation:</strong> VLANs, firewalls, और ACLs से ARP broadcast scope सीमित करें</li>
        <li><strong className="text-white">Switch Port Security:</strong> हर switch port पर maximum MAC addresses limit करें — ARP scanning tools detect होंगे</li>
        <li><strong className="text-white">Anomaly Detection:</strong> Machine learning-based network anomaly detection deploy करें — ARP patterns analyze होंगे</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        नेटवर्क डिस्कवरी सीखने के लिए सेफ लैब बनाएं। कभी भी प्रोडक्शन नेटवर्क पर बिना अनुमति स्कैन न करें।
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# वर्चुअल नेटवर्क बनाएं (VirtualBox):
# 1. File > Host-only Network Manager
# 2. नया Adaptor बनाएं (vboxnet0)
# 3. IP रेंज सेट करें (192.168.56.0/24)
# 4. DHCP सर्वर स्टार्ट करें

# कई VMs बनाएं:
# - Kali Linux (attacker)
# - Ubuntu (target)
# - Windows 10 (target)
# - CentOS (target)
# सबको Host-only Adapter से कनेक्ट करें

# IoT डिवाइसेज़ सिम्युलेट करें:
# - Raspberry Pi VM
# - Router VM (OpenWrt)

# टेस्ट स्कैन:
sudo netdiscover -r 192.168.56.0/24

# विभिन्न मोड्स ट्राई करें:
# एक्टिव, पैसिव, फ़ास्ट, स्क्रीन

# रिजल्ट्स एनालाइज़ करें:
# कौन सा डिवाइस किस वेंडर का है?
# कौन से डिवाइसेज़ इंटरेस्टिंग हैं?
# Nmap से डिटेल्ड स्कैन करें`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        नेटडिस्कवर को दूसरे टूल्स के साथ कॉम्बिन करके ज़्यादा पावरफुल बना सकते हो।
      </p>
      <CodeBlock
        title="एडवांस्ड यूज़"
        code={`# कस्टम ARP पैकेट (Scapy के साथ):
python3 -c "
from scapy.all import *
ans = sr1(ARP(pdst='192.168.1.1'), timeout=2)
if ans:
    print(ans.psrc, ans.hwsrc)
"

# नेटवर्क मैपिंग (Netdiscover + Nmap):
sudo netdiscover -r 192.168.1.0/24 -P | \\
  awk '{print \$1}' | grep -E '^[0-9]' | \\
  xargs -I {} nmap -sV {}

# ARP कैश चेक:
arp -a
ip neigh show

# मैनुअल ARP रिक्वेस्ट:
arping -c 4 192.168.1.1

# नेटवर्क टोपोलॉजी मैप:
sudo netdiscover -r 192.168.1.0/24 -P > hosts.txt
# फिर Zenmap में इम्पोर्ट करो

# Netdiscover + Bettercap कॉम्बो:
# Netdiscover से होस्ट्स खोजो
# Bettercap से MITM अटैक करो

# Netdiscover + Nmap + Nikto पाइपलाइन:
sudo netdiscover -r 192.168.1.0/24 -P | \\
  awk '{print \$1}' | grep -E '^[0-9]' | \\
  xargs -I {} sh -c 'nmap -p 80,443 {} && nikto -h {}'`}
      />
      <CodeBlock
        title="ऑटोमेटेड मॉनिटरिंग स्क्रिप्ट"
        code={`#!/bin/bash
# नेटवर्क चेंज मॉनिटरिंग:
BASELINE="baseline.txt"
CURRENT="current.txt"

echo "[*] Creating baseline..."
sudo netdiscover -r 192.168.1.0/24 -c 30 -P | \\
  awk '{if ($1 ~ /^[0-9]/) print $1","$2","$3}' | \\
  sort > $BASELINE

while true; do
  echo "[*] Scanning..."
  sudo netdiscover -r 192.168.1.0/24 -c 30 -P | \\
    awk '{if ($1 ~ /^[0-9]/) print $1","$2","$3}' | \\
    sort > $CURRENT

  # नए devices find करो:
  NEW=$(comm -13 $BASELINE $CURRENT)
  if [ -n "$NEW" ]; then
    echo "[!] NEW DEVICES FOUND:"
    echo "$NEW"
    echo "$NEW" >> alert_log.txt
    notify-send "New Device Detected" "$NEW"
  fi

  # गायब devices find करो:
  GONE=$(comm -23 $BASELINE $CURRENT)
  if [ -n "$GONE" ]; then
    echo "[!] DEVICES GONE:"
    echo "$GONE"
  fi

  cp $CURRENT $BASELINE
  sleep 3600  # हर घंटे check करो
done`}
      />
      <CodeBlock
        title="नेटवर्क इन्वेंटरी डैशबोर्ड"
        code={`#!/bin/bash
# HTML dashboard बनाओ:
echo "<html><body><h1>Network Inventory</h1>" > dashboard.html
echo "<table border=1><tr><th>IP</th><th>MAC</th><th>Vendor</th><th>Status</th></tr>" >> dashboard.html

sudo netdiscover -r 192.168.1.0/24 -P | \\
  awk '{if ($1 ~ /^[0-9]/) print "<tr><td>"$1"</td><td>"$2"</td><td>"$3"</td><td>Active</td></tr>"}' >> dashboard.html

echo "</table></body></html>" >> dashboard.html
echo "[+] Dashboard: dashboard.html"

# CSV database maintain करो:
DATE=$(date +%Y-%m-%d)
sudo netdiscover -r 192.168.1.0/24 -P | \\
  awk -v d="$DATE" '{if ($1 ~ /^[0-9]/) print d","$1","$2","$3}' >> network_history.csv

# Historical analysis:
echo "=== Historical Summary ==="
echo "Total scans: $(wc -l < network_history.csv)"
echo "Unique devices: $(awk -F, '{print $2}' network_history.csv | sort -u | wc -l)"
echo "Unique vendors: $(awk -F, '{print $4}' network_history.csv | sort -u | wc -l)"`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या नेटडिस्कवर वायरलेस नेटवर्क पर काम करता है?', a: 'हाँ, बिल्कुल। वायरलेस नेटवर्क्स के लिए ही बनाया गया है। wlan0 इंटरफ़ेस यूज़ करो। मॉनिटर मोड इंटरफ़ेस भी सपोर्ट करता है।' },
          { q: 'पैसिव मोड में कितना समय लगता है?', a: 'ट्रैफ़िक पर निर्भर करता है। बिज़ी नेटवर्क पर मिनटों में, शांत नेटवर्क पर घंटों लग सकते हैं। ट्रैफ़िक जनरेट करो (ping, browsing) तो तेज़ मिलेगा।' },
          { q: 'क्या यह इंटरनेट पर काम करता है?', a: 'नहीं, यह सिर्फ लोकल नेटवर्क (LAN) पर काम करता है। ARP प्रोटोकॉल सिर्फ लोकल सेगमेंट में काम करता है।' },
          { q: 'Nmap से बेहतर है?', a: 'दोनों अलग काम करते हैं। नेटडिस्कवर तेज़ होस्ट डिस्कवरी के लिए, Nmap पोर्ट स्कैनिंग के लिए। दोनों का कॉम्बो बेस्ट है।' },
          { q: 'क्या यह फ़ायरवॉल को बायपास कर सकता है?', a: 'ARP लेयर 2 पर काम करता है — फ़ायरवॉल (लेयर 3/4) से पहले। अगर एक ही LAN में हो तो फ़ायरवॉल से बच सकते हो।' },
          { q: 'IPv6 पर काम करता है?', a: 'नहीं, नेटडिस्कवर सिर्फ IPv4 ARP पर काम करता है। IPv6 के लिए NDP (Neighbor Discovery Protocol) यूज़ करो — nmap -6 या ndisc6।' },
          { q: 'क्या यह VLAN पार कर सकता है?', a: 'नहीं, ARP ब्रॉडकास्ट VLAN बाउंड्रीज़ को पार नहीं करता। हर VLAN को अलग से स्कैन करना होगा।' },
          { q: 'वर्चुअल मशीन पर काम करता है?', a: 'हाँ, लेकिन VM का नेटवर्क एडाप्टर Host-only या Bridged मोड में होना चाहिए। NAT मोड में काम नहीं करेगा।' },
          { q: 'Docker में कैसे चलाएं?', a: '--net=host flag ज़रूरी है: docker run --rm --net=host netdiscover -r 192.168.1.0/24। बिना host networking के ARP काम नहीं करेगा।' },
          { q: 'मल्टीपल VLAN पर कैसे स्कैन करें?', a: 'हर VLAN को अलग-अलग स्कैन करना होगा। VLAN interface बनाओ: ip link add link eth0 name eth0.10 type vlan id 10। फिर netdiscover -r 192.168.10.0/24 -i eth0.10' },
          { q: 'Windows पर चलता है?', a: 'नहीं, नेटडिस्कवर सिर्फ Linux/BSD/macOS पर चलता है। Windows पर Angry IP Scanner या Advanced IP Scanner use करो।' },
          { q: 'स्कैन का टाइम कैसे कम करें?', a: '-f (fast mode) + -c 20 (packet limit) + छोटी range (/28 instead of /24)। वायर्ड connection वायरलेस से तेज़ है।' },
          { q: 'IoT devices कैसे खोजें?', a: 'MAC vendor identification use करो। Hikvision (28:57:BE), Raspberry Pi (B8:27:EB), TP-Link (50:C7:BF) — यह vendors IoT devices बनाते हैं। passive mode में भी vendor detect होता है।' },
          { q: 'क्या यह DHCP server detect करता है?', a: 'नहीं, नेटडिस्कवर सिर्फ ARP-based detection करता है। DHCP server find करने के लिए nmap --script broadcast-dhcp-discover use करो।' },
          { q: 'Mobile hotspot पर काम करता है?', a: 'हाँ, लेकिन limited। Mobile hotspot usually /24 subnet use करता है और client isolation enable हो सकता है। USB tethering better results देता है।' },
          { q: 'Captive portal networks पर?', a: 'Captive portal (hotel, airport WiFi) पर ARP layer 2 पर काम करता है — portal authentication से पहले भी devices detect हो सकते हैं। लेकिन internet access नहीं मिलेगा।' },
          { q: 'Mesh networks पर काम करता है?', a: 'Mesh networks (Google Wifi, Eero) पर ARP broadcast propagate होता है — devices detect होंगे। लेकिन mesh nodes अलग-अलग subnets में हो सकते हैं — हर subnet अलग scan करो।' },
          { q: 'Ethernet bonding/teaming पर?', a: 'Bonded interfaces (bond0, team0) पर काम करता है — सही interface name specify करो। ip link show से bonded interface name पता करो।' },
          { q: 'Cloud VMs पर काम करता है?', a: 'AWS, GCP, Azure VMs पर ARP scanning limited है — VPC networking ARP broadcast filter करता है। Same subnet में limited results मिलेंगे। Cloud environments में Nmap better है।' },
          { q: 'Network bridge पर?', a: 'Bridged interfaces (br0) पर काम करता है। VirtualBox/VMware bridge networking में host और VMs दोनों detect होंगे। bridge interface specify करो: -i br0' },
          { q: '802.1X networks पर?', a: '802.1X authenticated networks पर ARP scanning authentication के बाद ही possible है। Unauthorized devices network join नहीं कर पाएंगे। MAC bypass attacks try करो।' },
          { q: 'WiFi Pineapple के साथ?', a: 'WiFi Pineapple पर netdiscover run करके connected clients detect कर सकते हो। Pineapple का wlan1 interface use करो: netdiscover -r 172.16.42.0/24 -i wlan1' },
          { q: 'Kali NetHunter पर कैसे use करें?', a: 'Kali NetHunter में netdiscover pre-installed है। OTG cable से external WiFi adapter connect करो। wlan1 interface use करो: sudo netdiscover -r 192.168.1.0/24 -i wlan1' },
          { q: 'Monitor mode interface पर?', a: 'Monitor mode interfaces (wlan0mon) पर netdiscover limited काम करता है — ARP requires managed mode। Monitor mode सिर्फ 802.11 frames capture करता है, ARP requests नहीं भेज सकता।' },
          { q: 'Subnet mask कैसे specify करें?', a: 'CIDR notation use करो: /24 = 256 hosts, /16 = 65536 hosts, /28 = 16 hosts। छोटी range = तेज़ scan। बड़ी range = ज़्यादा time but complete coverage।' },
          { q: 'IPv6 devices detect कैसे करें?', a: 'Netdiscover सिर्फ IPv4 ARP use करता है। IPv6 के लिए ping6, nmap -6, या ndisc6 use करो। IPv6 neighbor discovery ARP equivalent है।' },
          { q: 'Switch port mapping कैसे करें?', a: 'Netdiscover MAC addresses देता है। Switch MAC table (show mac address-table) से compare करो। CDP/LLDP packets भी check करो — switch port info मिलेगी।' },
          { q: 'Security audit में netdiscover कहाँ fit है?', a: 'Reconnaissance phase में — पहला step। Network inventory बनाओ, unauthorized devices find करो, attack surface map करो। Nmap port scanning अगला step है।' },
          { q: 'Wired vs wireless scanning?', a: 'Wired: तेज़, reliable, complete results। Wireless: slower, client isolation issues, MAC randomization। Wired connection prefer करो accurate results के लिए।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        पेनेट्रेशन टेस्टिंग में नेटडिस्कवर का इस्तेमाल कई रियल-वर्ल्ड सिनेरियोज़ में होता है। यह केस स्टडीज़ दिखाती हैं कि कैसे एक सिंपल ARP स्कैन बड़ी सिक्योरिटी फाइंडिंग्स की शुरुआत हो सकता है।
      </p>
      <p>
        <strong className="text-white">केस 1 — IoT डिवाइस डिस्कवरी:</strong> एक कॉर्पोरेट ऑफ़िस में पेनेट्रेशन टेस्ट के दौरान नेटडिस्कवर ने 47 IoT डिवाइसेज़ खोजीं जो IT टीम को पता नहीं थीं — IP कैमरे, स्मार्ट टीवी, प्रिंटर, और VoIP फ़ोन्स। इनमें से 12 डिवाइसेज़ डिफ़ॉल्ट क्रेडेंशियल्स पर चल रही थीं और 3 कैमरे इंटरनेट पर एक्सेसिबल थे। नेटडिस्कवर का MAC वेंडर फ़ीचर इन डिवाइसेज़ को पहचानने में critical था।
      </p>
      <p>
        <strong className="text-white">केस 2 — नेटवर्क ऑडिट:</strong> एक बैंक के नेटवर्क ऑडिट में नेटडिस्कवर ने 23 unauthorized डिवाइसेज़ ढूंढीं — पर्सनल लैपटॉप्स, मोबाइल हॉटस्पॉट्स, और एक unauthorized राउटर। यह डिवाइसेज़ बैंक के NAC (Network Access Control) सिस्टम को बायपास कर रही थीं। पैसिव मोड में स्कैन करने से किसी को पता नहीं चला।
      </p>
      <p>
        <strong className="text-white">केस 3 — WiFi पेनेट्रेशन टेस्ट:</strong> एक होटल के WiFi नेटवर्क पर पेनेट्रेशन टेस्ट में नेटडिस्कवर ने गेस्ट नेटवर्क से 150+ डिवाइसेज़ खोजीं — गेस्ट के फ़ोन्स, लैपटॉप्स, और IoT डिवाइसेज़। VLAN आइसोलेशन कमज़ोर था और गेस्ट नेटवर्क से होटल के internal सिस्टम्स (POS, CCTV) एक्सेसिबल थे। नेटडिस्कवर ने यह cross-VLAN visibility दिखाई।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        नेटडिस्कवर अकेले limited है — इसे दूसरे टूल्स के साथ integrate करके full penetration testing pipeline बनाओ।
      </p>
      <CodeBlock
        title="नेटडिस्कवर + Nmap + Nikto पाइपलाइन"
        code={`# स्टेप 1: Netdiscover से होस्ट्स खोजो
sudo netdiscover -r 192.168.1.0/24 -P > hosts.txt

# स्टेप 2: IPs एक्स्ट्रैक्ट करो
cat hosts.txt | awk '{print $1}' | grep -E '^[0-9]' > ips.txt

# स्टेप 3: Nmap से पोर्ट स्कैन
nmap -sV -iL ips.txt -oX nmap_results.xml

# स्टेप 4: Web सर्वर्स पर Nikto रन करो
cat ips.txt | xargs -I {} nikto -h {}

# स्टेप 5: Metasploit में इम्पोर्ट
# msfconsole में: db_import nmap_results.xml

# पूरा ऑटोमेटेड वर्कफ़्लो:
#!/bin/bash
TARGET="192.168.1.0/24"
echo "[*] Phase 1: Discovery"
sudo netdiscover -r $TARGET -f -P > hosts.txt
IPS=$(cat hosts.txt | awk '{print $1}' | grep -E '^[0-9]')
echo "[*] Phase 2: Port Scan"
for ip in $IPS; do
  nmap -sV --top-ports 1000 $ip >> nmap_scan.txt
done
echo "[*] Phase 3: Web Scan"
grep -l "80/tcp\\|443/tcp" nmap_scan.txt | \\
  xargs -I {} nikto -h {} >> nikto_scan.txt
echo "[+] Done!"`}
      />
      <CodeBlock
        title="नेटडिस्कवर + Bettercap MITM"
        code={`# Netdiscover से होस्ट्स खोजो
sudo netdiscover -r 192.168.1.0/24 -P > hosts.txt

# Bettercap में MITM अटैक:
sudo bettercap -iface eth0

# bettercap कंसोल में:
# net.probe on          ← होस्ट्स खोजो
# net.show              ← होस्ट्स देखो
# arp.spoof on          ← ARP स्पूफिंग शुरू
# net.sniff on          ← ट्रैफ़िक कैप्चर
# dns.spoof on          ← DNS स्पूफिंग

# Bettercap के साथ कॉम्बो:
# 1. Netdiscover → होस्ट्स खोजो
# 2. Bettercap → MITM अटैक
# 3. Wireshark → ट्रैफ़िक एनालाइज़
# 4. Burp Suite → Web ट्रैफ़िक`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        पेनेट्रेशन टेस्ट के बाद रिपोर्ट बनाना ज़रूरी है। नेटडिस्कवर के आउटपुट को रिपोर्ट-रेडी फॉर्मेट में कन्वर्ट करो।
      </p>
      <CodeBlock
        title="रिपोर्ट जनरेशन"
        code={`# CSV रिपोर्ट बनाओ:
echo "IP Address,MAC Address,Vendor,First Seen" > report.csv
sudo netdiscover -r 192.168.1.0/24 -P | \\
  awk '{if ($1 ~ /^[0-9]/) print $1","$2","$3","systime()}' >> report.csv

# HTML रिपोर्ट:
cat > report.html << 'EOF'
<html><head><title>Network Discovery Report</title>
<style>table{border-collapse:collapse;width:100%}
th,td{border:1px solid #ddd;padding:8px;text-align:left}
th{background:#333;color:white}</style></head>
<body>
<h1>Network Discovery Report</h1>
<p>Date: $(date)</p>
<table>
<tr><th>IP</th><th>MAC</th><th>Vendor</th><th>Status</th></tr>
EOF

sudo netdiscover -r 192.168.1.0/24 -P | \\
  awk '{if ($1 ~ /^[0-9]/) print "<tr><td>"$1"</td><td>"$2"</td><td>"$3"</td><td>Active</td></tr>"}' >> report.html

echo "</table></body></html>" >> report.html

# JSON फॉर्मेट:
sudo netdiscover -r 192.168.1.0/24 -P | \\
  awk 'BEGIN{print "["}
  {if ($1 ~ /^[0-9]/) print "{\\"ip\\":\\"" $1 "\\",\\"mac\\":\\"" $2 "\\",\\"vendor\\":\\"" $3 "\\"},"}
  END{print "]"}' > results.json

# समरी स्टैट्स:
echo "=== Network Discovery Summary ==="
echo "Total hosts: $(cat hosts.txt | grep -c '^[0-9]')"
echo "Unique vendors: $(cat hosts.txt | awk '{print $3}' | sort -u | wc -l)"
echo "Scan date: $(date)"`}
      />

      <h2>Performance Tuning</h2>
      <p>
        बड़े नेटवर्क्स पर नेटडिस्कवर को ऑप्टिमाइज़ करना ज़रूरी है। सही flags और settings से स्कैन टाइम काफ़ी कम हो सकता है।
      </p>
      <CodeBlock
        title="परफ़ॉर्मेंस ऑप्टिमाइज़ेशन"
        code={`# फ़ास्ट स्कैन (बड़े नेटवर्क के लिए):
sudo netdiscover -r 192.168.1.0/24 -f
# -f = कम पैकेट्स, तेज़ रिजल्ट

# पैकेट लिमिट सेट करो:
sudo netdiscover -r 192.168.1.0/24 -c 20
# -c 20 = सिर्फ 20 ARP पैकेट्स भेजो

# डिले सेट करो (नेटवर्क लोड कम करने के लिए):
sudo netdiscover -r 192.168.1.0/24 -d 500
# -d 500 = 500ms डिले between पैकेट्स

# /16 रेंज को /24 ब्लॉक्स में तोड़ो:
for i in $(seq 1 254); do
  echo "[*] Scanning 10.0.$i.0/24"
  sudo netdiscover -r 10.0.$i.0/24 -f -P >> results.txt
done

# स्पेसिफिक इंटरफ़ेस (फ़ास्ट ईथरनेट):
sudo netdiscover -r 192.168.1.0/24 -i eth0
# वायरलेस से ईथरनेट ज़्यादा तेज़ है

# मल्टीपल इंटरफ़ेस:
sudo netdiscover -r 192.168.1.0/24 -i eth0 &
sudo netdiscover -r 10.0.0.0/24 -i eth1 &
wait`}
      />

      <h2>Netdiscover in Enterprise Environments</h2>
      <p>
        एंटरप्राइज़ नेटवर्क्स में नेटडिस्कवर का इस्तेमाल अलग तरीके से करना पड़ता है। बड़े नेटवर्क्स में VLANs, firewalls, और ACLs होते हैं जो ARP ब्रॉडकास्ट को सीमित करते हैं। इन situations में नेटडिस्कवर को segment-by-segment scan करना पड़ता है।
      </p>
      <p>
        एंटरप्राइज़ नेटवर्क में नेटडिस्कवर run करने से पहले IT टीम को inform करो। Unauthorized ARP scanning SOC (Security Operations Center) को alert trigger कर सकता है। Written authorization लो और scan window define करो। Business hours के बाद scan करो ताकि network performance affect न हो।
      </p>
      <p>
        एंटरप्राइज़ environments में DHCP snooping और Dynamic ARP Inspection (DAI) enable हो सकते हैं। ये security features ARP scanning को detect और block कर सकते हैं। ऐसे cases में passive mode use करो या network admin से exception लो। कुछ switches ARP rate limiting use करते हैं — इसलिए -d flag से delay बढ़ाओ।
      </p>

      <h2>Troubleshooting Guide</h2>
      <p>
        नेटडिस्कवर इस्तेमाल करते समय कुछ common issues आ सकते हैं। यह troubleshooting guide हर problem का solution बताती है।
      </p>
      <CodeBlock
        title="कॉमन इश्यूज़ और फ़िक्स"
        code={`# Issue 1: "No such device" error
# फ़िक्स: इंटरफ़ेस नाम चेक करो
ip link show
# सही इंटरफ़ेस नाम use करो (eth0, wlan0, ens33)

# Issue 2: "Operation not permitted"
# फ़िक्स: root privileges चाहिए
sudo netdiscover -r 192.168.1.0/24

# Issue 3: स्कैन रुक नहीं रहा
# फ़िक्स: Ctrl+C से रोको, -c flag use करो
sudo netdiscover -r 192.168.1.0/24 -c 50

# Issue 4: सिर्फ अपना IP दिख रहा है
# फ़िक्स: इंटरफ़ेस UP है?
ip link set eth0 up
# AP isolation check करो
# वायर्ड connection try करो

# Issue 5: बहुत slow है
# फ़िक्स: -f flag use करो
sudo netdiscover -r 192.168.1.0/24 -f
# छोटी range scan करो
# -d flag से delay कम करो

# Issue 6: MAC vendor "Unknown" दिखा रहा है
# फ़िक्स: OUI database update
# macvendors.com पर manually check करो
# Random MAC devices (iOS 14+, Android 10+) में vendor hide होता है

# Issue 7: VPN connection पर काम नहीं कर रहा
# फ़िक्स: VPN interface specify करो
sudo netdiscover -r 10.0.0.0/24 -i tun0
# VPN split tunneling check करो

# Issue 8: Docker/container environment में
# फ़िक्स: host networking use करो
docker run --rm --net=host netdiscover -r 192.168.1.0/24`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nmap</td><td className="py-2 px-3">नेटवर्क स्कैनिंग</td><td className="py-2 px-3">सबसे पूरा टूल — होस्ट + पोर्ट + OS</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">arp-scan</td><td className="py-2 px-3">ARP स्कैनिंग</td><td className="py-2 px-3">सिंपल, तेज़, कस्टमाइज़ेबल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">arpwatch</td><td className="py-2 px-3">ARP मॉनिटरिंग</td><td className="py-2 px-3">लॉगिंग और अलर्टिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">fping</td><td className="py-2 px-3">फ़ास्ट पिंग स्वीप</td><td className="py-2 px-3">ICMP-आधारित होस्ट डिस्कवरी</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Angry IP Scanner</td><td className="py-2 px-3">GUI नेटवर्क स्कैनर</td><td className="py-2 px-3">शुरुआती लोगों के लिए आसान</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Bettercap</td><td className="py-2 px-3">MITM फ्रेमवर्क</td><td className="py-2 px-3">ARP स्कैन + MITM + WiFi</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">masscan</td><td className="py-2 px-3">इंटरनेट-स्केल स्कैन</td><td className="py-2 px-3">बहुत तेज़, बड़ी रेंज</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">nbtscan</td><td className="py-2 px-3">NetBIOS स्कैन</td><td className="py-2 px-3">Windows नेटवर्क के लिए</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>हर पेनेट्रेशन टेस्ट में पहला कदम नेटवर्क डिस्कवरी है — netdiscover + nmap कॉम्बो से कोई डिवाइस मिस नहीं होगा</li>
          <li>IoT डिवाइसेज़ (कैमरे, स्मार्ट टीवी, राउटर) हमेशा इंटरेस्टिंग टार्गेट्स हैं — इनमें वल्नरेबिलिटीज़ ज़्यादा मिलती हैं</li>
          <li>पैसिव मोड से शुरू करो — स्टील्थी और सेफ। फिर एक्टिव मोड से कन्फर्म करो</li>
          <li>MAC वेंडर से डिवाइस टाइप पता चलता है — Hikvision कैमरा मिले तो डिफ़ॉल्ट क्रेडेंशियल्स ट्राई करो</li>
          <li>-P फ्लैग हमेशा यूज़ करो — आउटपुट फ़ाइल में सेव होगा, बाद में काम आएगा</li>
          <li>स्कैन के बाद हमेशा diff करो — नए डिवाइसेज़ पता चलेंगे</li>
          <li>बड़ी रेंज (/16) में -f फ्लैग ज़रूरी है — वर्ना बहुत समय लगेगा</li>
          <li>वायरलेस नेटवर्क में वायर्ड से ज़्यादा डिवाइसेज़ मिलते हैं — मोबाइल, टैबलेट, IoT</li>
          <li>Enterprise environments में passive mode से शुरू करो — SOC alerts से बचोगे</li>
          <li>MAC randomization (iOS 14+, Android 10+) की वजह से vendor identification miss हो सकती है</li>
          <li>Docker environments में --net=host ज़रूरी है — बिना इसके ARP काम नहीं करेगा</li>
          <li>VPN connections पर split tunneling check करो — full tunnel VPN में local network visible नहीं होगा</li>
          <li>नेटवर्क मैपिंग के बाद हमेशा diff करो — unauthorized devices तुरंत पकड़ में आएंगे</li>
          <li>IoT security audits में netdiscover + Nmap + default credentials checklist = complete assessment</li>
          <li>Passive mode को IDS/IPS detect नहीं कर सकते — stealth reconnaissance के लिए best option</li>
          <li>बड़े /16 networks को /24 blocks में तोड़कर scan करो — parallel processing possible होती है</li>
          <li>WiFi penetration tests में netdiscover first tool होना चाहिए — network layout समझने के लिए</li>
          <li>Netdiscover results को Nmap XML format में convert करके Metasploit में import कर सकते हो</li>
          <li>Corporate environments में scan schedule define करो — regular audits automated करो</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> नेटडिस्कवर एक शक्तिशाली नेटवर्क डिस्कवरी टूल है। इसका इस्तेमाल केवल अपने नेटवर्क या अधिकृत पेनेट्रेशन टेस्टिंग में ही करें। बिना अनुमति के नेटवर्क स्कैनिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क स्कैनिंग अपराध हो सकता है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल शैक्षिक उद्देश्यों और अपने लैब वातावरण में ही इस्तेमाल करें।
      </div>
    </TutorialLayout>
  )
}
