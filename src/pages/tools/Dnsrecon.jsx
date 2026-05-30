import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Dnsrecon() {
  return (
    <TutorialLayout
      title="dnsrecon"
      subtitle="DNS reconnaissance टूल — रिकॉर्ड्स, ज़ोन ट्रांसफर, सबडोमेन्स"
      icon="🌐"
      prev={{ to: '/tool/ffuf', label: 'ffuf' }}
      next={{ to: '/tool/kismet', label: 'kismet' }}
    >
      <h2>What is DNSRecon?</h2>
      <p>
        DNSRecon एक शक्तिशाली DNS reconnaissance टूल है जो Python में लिखा गया है। यह DNS रिकॉर्ड्स, ज़ोन ट्रांसफर, सबडोमेन ब्रूट फोर्स, कैश स्नूपिंग, और रिवर्स लुकअप जैसे कई प्रकार के स्कैन कर सकता है। यह टूल पेनेट्रेशन टेस्टिंग और बग बाउंटी के लिए बहुत उपयोगी है क्योंकि DNS से टार्गेट के बारे में बहुत सारी जानकारी मिलती है।
      </p>
      <p>
        DNSRecon Carlos Perez ने बनाया है और यह Kali Linux में प्री-इंस्टॉल्ड आता है। यह dnsenum का मॉडर्न अल्टरनेटिव है जिसमें ज़्यादा फीचर्स हैं और एक्टिवली मेंटेन्ड है। DNSRecon एक ही स्कैन में कई तरह की DNS जानकारी इकट्ठा कर सकता है — स्टैंडर्ड रिकॉर्ड्स, ज़ोन ट्रांसफर, सबडोमेन एन्यूमरेशन, और DNSSEC वैलिडेशन।
      </p>
      <p>
        OSINT और रेकन फेज़ में DNSRecon बहुत इम्पोर्टेंट है। टार्गेट के DNS इंफ्रास्ट्रक्चर को समझने से अटैक सर्फ़ेस का पता चलता है। उदाहरण के लिए, MX रिकॉर्ड्स से मेल सर्वर का पता चलता है, NS रिकॉर्ड्स से नेम सर्वर्स का, और TXT रिकॉर्ड्स में कभी-कभी API keys या वेरिफिकेशन टोकन्स मिल जाते हैं।
      </p>
      <p>
        DNSRecon का सबसे बड़ा फ़ायदा यह है कि यह एक ही स्कैन में कई तरह की जानकारी देता है — बेसिक DNS रिकॉर्ड्स, सबडोमेन्स, ज़ोन ट्रांसफर, रिवर्स DNS, कैश स्नूपिंग, और DNSSEC ज़ोन वॉक। अलग-अलग टूल इस्तेमाल करने की ज़रूरत नहीं। यह Python 3 में लिखा गया है और क्रॉस-प्लेटफ़ॉर्म है।
      </p>
      <p>
        DNSRecon बग बाउंटी हंटर्स, पेनेट्रेशन टेस्टर्स, और सिक्योरिटी रिसर्चर्स के बीच बहुत पॉपुलर है। यह टूल रेड टीम ऑपरेशंस में भी इस्तेमाल होता है क्योंकि यह टार्गेट के DNS इंफ्रास्ट्रक्चर की पूरी तस्वीर देता है। DNS reconnaissance penetration testing का पहला और सबसे ज़रूरी कदम है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> DNSRecon केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए उपयोग करें। बिना अनुमति के DNS रेकन करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत रेकन अपराध हो सकता है। साइबर अपराध गंभीर परिणामों का कारण बन सकता है — जुर्माना और जेल दोनों हो सकते हैं। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of DNSRecon</h2>
      <p>
        DNSRecon को Carlos Perez ने 2010 में बनाया था। Carlos Perez एक प्रसिद्ध सिक्योरिटी रिसर्चर हैं जो Kali Linux टीम के सदस्य भी हैं। यह मूल रूप से Python 2 में लिखा गया था, लेकिन बाद में Python 3 में पोर्ट किया गया। यह टूल Kali Linux का डिफ़ॉल्ट DNS reconnaissance टूल है और इसे GitHub पर एक्टिवली मेंटेन किया जाता है।
      </p>
      <p>
        DNSRecon का डिज़ाइन दर्शन यह है कि एक ही टूल से सभी DNS-related जानकारी इकट्ठा की जाए। पहले अलग-अलग टूल्स इस्तेमाल करने पड़ते थे — dig, nslookup, host, zone transfer tools — लेकिन DNSRecon सब कुछ एक जगह करता है। यह टूल इंडस्ट्री में बहुत लोकप्रिय हो गया क्योंकि यह कई तरह के DNS स्कैन एक ही कमांड से कर सकता है।
      </p>
      <p>
        2012 में DNSRecon को BackTrack Linux में शामिल किया गया और बाद में Kali Linux में भी प्री-इंस्टॉल्ड आने लगा। इसे Offensive Security टीम ने अपने टूलसेट में शामिल किया। आज DNSRecon GitHub पर सबसे पॉपुलर Python-based DNS reconnaissance टूल है। इसकी कम्युनिटी एक्टिव है और रेगुलर अपडेट्स आते रहते हैं।
      </p>
      <p>
        DNSRecon की development history काफी interesting है। Carlos Perez ने originally यह tool अपने internal penetration testing projects के लिए बनाया था। जब उन्होंने इसे Kali Linux team के साथ share किया, तो उन्होंने realize किया कि यह tool community के लिए बहुत valuable होगा। 2011 में इसे open source कर दिया गया और GitHub पर release किया गया।
      </p>
      <p>
        DNSRecon का design philosophy यह है कि DNS reconnaissance के लिए एक ही tool काफी होना चाहिए। पहले penetration testers को dig, nslookup, host, dnsenum, fierce जैसे अलग-अलग tools use करने पड़ते थे। DNSRecon ने इस समस्या को solve किया — एक tool से सब कुछ। यह approach इतनी successful रही कि बाद में Amass और Subfinder जैसे modern tools ने भी इसी philosophy को follow किया।
      </p>
      <p>
        2015 में DNSRecon ने JSON output support add किया जिससे दूसरे tools के साथ integration आसान हो गई। 2018 में Python 3 migration complete हुई। 2020 में DNSSEC zone walk feature improve हुआ। आज DNSRecon red team operations, bug bounty hunting, और security audits में standard tool है। SANS SEC560 course में भी DNSRecon को recommend किया जाता है।
      </p>

      <h2>How DNSRecon Works?</h2>
      <p>
        DNSRecon कई तरीकों से DNS जानकारी इकट्ठा करता है। हर स्कैन टाइप अलग तरह से काम करता है और अलग जानकारी देता है। DNSRecon का आंतरिक आर्किटेक्चर मॉड्यूलर है — हर स्कैन टाइप एक अलग फंक्शन की तरह काम करता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">स्टैंडर्ड रिकॉर्ड्स:</strong> A, AAAA, MX, NS, SOA, TXT, CNAME, SRV रिकॉर्ड्स क्वेरी करता है</li>
        <li><strong className="text-white">ज़ोन ट्रांसफर:</strong> AXFR रिक्वेस्ट भेजकर DNS सर्वर से सभी रिकॉर्ड्स डंप करता है</li>
        <li><strong className="text-white">ब्रूट फोर्स:</strong> वर्डलिस्ट से सबडोमेन्स गेस करता है</li>
        <li><strong className="text-white">कैश स्नूपिंग:</strong> DNS कैश चेक करता है कि कौन सी साइट्स विज़िट की गई हैं</li>
        <li><strong className="text-white">Google एन्यूमरेशन:</strong> Google सर्च से सबडोमेन्स ढूंढता है</li>
        <li><strong className="text-white">DNSSEC ज़ोन वॉक:</strong> NSEC रिकॉर्ड्स से सभी सबडोमेन्स निकालता है</li>
        <li><strong className="text-white">रिवर्स लुकअप:</strong> IP रेंज से डोमेन नाम ढूंढता है</li>
        <li><strong className="text-white">टीएलडी एक्सपैंशन:</strong> टॉप-लेवल डोमेन वेरिएशन्स चेक करता है</li>
      </ul>
      <p>
        DNSRecon का काम करने का तरीका यह है कि यह सबसे पहले टार्गेट डोमेन का NS रिकॉर्ड पता करता है। फिर उन NS सर्वर्स से बाकी रिकॉर्ड्स निकालता है। अगर NS सर्वर ज़ोन ट्रांसफर अलाउ करता है, तो सब कुछ मिल जाता है। नहीं तो ब्रूट फोर्स और Google स्क्रैपिंग से सबडोमेन्स ढूंढता है। यह dnspython लाइब्रेरी का उपयोग करता है DNS क्वेरीज़ के लिए।
      </p>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में DNSRecon प्री-इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो आसानी से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="DNSRecon इंस्टॉलेशन"
        code={`# apt से:
sudo apt update
sudo apt install dnsrecon

# pip से:
pip3 install dnsrecon

# सोर्स से:
git clone https://github.com/darkoperator/dnsrecon.git
cd dnsrecon
pip3 install -r requirements.txt

# वर्जन चेक:
dnsrecon --version

# सहायता:
dnsrecon -h

# डिपेंडेंसी:
# dnspython, lxml, netaddr`}
      />

      <h2>Basic Usage</h2>
      <p>
        DNSRecon का बेसिक इस्तेमाल बहुत आसान है — बस डोमेन दो।
      </p>
      <CodeBlock
        title="DNSRecon बेसिक स्कैन"
        code={`# स्टैंडर्ड DNS स्कैन:
dnsrecon -d target.com

# स्टैंडर्ड रिकॉर्ड्स:
dnsrecon -d target.com -t std

# ज़ोन ट्रांसफर टेस्ट:
dnsrecon -d target.com -t axfr

# ब्रूट फोर्स सबडोमेन्स:
dnsrecon -d target.com -t brt -D /usr/share/wordlists/dns/subdomains-top1million-5000.txt

# कैश स्नूपिंग:
dnsrecon -d target.com -t snoop -D wordlist.txt -n ns1.target.com

# सभी टाइप्स एक साथ:
dnsrecon -d target.com -a

# वर्बोज़ आउटपुट:
dnsrecon -d target.com -v

# कस्टम DNS सर्वर:
dnsrecon -d target.com -n 8.8.8.8`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d</td><td className="py-2 px-3">टार्गेट डोमेन</td><td className="py-2 px-3 font-mono text-xs">-d target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t</td><td className="py-2 px-3">स्कैन टाइप (std, axfr, brt, snoop, zonewalk, goo)</td><td className="py-2 px-3 font-mono text-xs">-t axfr</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-D</td><td className="py-2 px-3">सबडोमेन वर्डलिस्ट फाइल</td><td className="py-2 px-3 font-mono text-xs">-D wordlist.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-n</td><td className="py-2 px-3">स्पेसिफिक DNS सर्वर</td><td className="py-2 px-3 font-mono text-xs">-n 8.8.8.8</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-a</td><td className="py-2 px-3">सभी स्कैन टाइप्स रन करें</td><td className="py-2 px-3 font-mono text-xs">-a</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r</td><td className="py-2 px-3">रिवर्स लुकअप रेंज</td><td className="py-2 px-3 font-mono text-xs">-r 192.168.1.0/24</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c</td><td className="py-2 px-3">CSV आउटपुट फाइल</td><td className="py-2 px-3 font-mono text-xs">-c results.csv</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--json</td><td className="py-2 px-3">JSON आउटपुट फाइल</td><td className="py-2 px-3 font-mono text-xs">--json results.json</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--xml</td><td className="py-2 px-3">XML आउटपुट फाइल</td><td className="py-2 px-3 font-mono text-xs">--xml results.xml</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--db</td><td className="py-2 px-3">SQLite डेटाबेस आउटपुट</td><td className="py-2 px-3 font-mono text-xs">--db results.db</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">वर्बोज़ आउटपुट</td><td className="py-2 px-3 font-mono text-xs">-v</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--threads</td><td className="py-2 px-3">थ्रेड्स की संख्या</td><td className="py-2 px-3 font-mono text-xs">--threads 10</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--lifetime</td><td className="py-2 px-3">DNS क्वेरी टाइमआउट</td><td className="py-2 px-3 font-mono text-xs">--lifetime 5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f</td><td className="py-2 px-3">सभी TTL फ़िल्टर</td><td className="py-2 px-3 font-mono text-xs">-f</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-s</td><td className="py-2 px-3">स्कैन डिले (सेकंड)</td><td className="py-2 px-3 font-mono text-xs">-s 0.5</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scan Types</h2>
      <p>
        DNSRecon कई तरह के स्कैन सपोर्ट करता है — हर स्कैन का अपना उद्देश्य है।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Type</th>
              <th className="text-left py-2 px-3 text-neon-green">Flag</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Standard</td><td className="py-2 px-3 font-mono text-xs">-t std</td><td className="py-2 px-3">A, AAAA, MX, NS, SOA रिकॉर्ड्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Zone Transfer</td><td className="py-2 px-3 font-mono text-xs">-t axfr</td><td className="py-2 px-3">ज़ोन ट्रांसफर टेस्ट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Brute Force</td><td className="py-2 px-3 font-mono text-xs">-t brt</td><td className="py-2 px-3">सबडोमेन ब्रूट फोर्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Cache Snooping</td><td className="py-2 px-3 font-mono text-xs">-t snoop</td><td className="py-2 px-3">DNS कैश चेक</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Zone Walk</td><td className="py-2 px-3 font-mono text-xs">-t zonewalk</td><td className="py-2 px-3">DNSSEC ज़ोन वॉक</td></tr>
            <tr><td className="py-2 px-3 text-white">Google Enum</td><td className="py-2 px-3 font-mono text-xs">-t goo</td><td className="py-2 px-3">Google से सबडोमेन्स</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Standard Scan</h2>
      <p>
        स्टैंडर्ड स्कैन सबसे पहले चलाना चाहिए — यह बेसिक DNS रिकॉर्ड्स निकालता है।
      </p>
      <CodeBlock
        title="स्टैंडर्ड DNS स्कैन"
        code={`# बेसिक स्टैंडर्ड स्कैन:
dnsrecon -d target.com -t std

# यह निकालेगा:
# A Records — IPv4 एड्रेसेज़
# AAAA Records — IPv6 एड्रेसेज़
# MX Records — मेल सर्वर्स
# NS Records — नेम सर्वर्स
# SOA Records — स्टार्ट ऑफ़ अथॉरिटी
# TXT Records — टेक्स्ट रिकॉर्ड्स (SPF, DKIM)
# CNAME Records — कैनोनिकल नाम

# स्पेसिफिक DNS सर्वर के साथ:
dnsrecon -d target.com -t std -n 8.8.8.8

# वर्बोज़ आउटपुट:
dnsrecon -d target.com -t std -v

# सभी DNS सर्वर्स पर टेस्ट:
dnsrecon -d target.com -t std -n 1.1.1.1`}
      />

      <h2>Zone Transfer</h2>
      <p>
        ज़ोन ट्रांसफर (AXFR) DNS का सबसे बड़ा वल्नरेबिलिटी है अगर मिसकॉन्फ़िगर हो। सभी DNS रिकॉर्ड्स एक साथ डंप हो जाते हैं।
      </p>
      <CodeBlock
        title="ज़ोन ट्रांसफर"
        code={`# ज़ोन ट्रांसफर टेस्ट:
dnsrecon -d target.com -t axfr

# सभी नेम सर्वर्स पर टेस्ट:
dnsrecon -d target.com -t axfr -n ns1.target.com

# अगर ज़ोन ट्रांसफर ओपन है:
# — सभी सबडोमेन्स मिल जाएंगे
# — सभी IP एड्रेसेज़ मिल जाएंगे
# — मेल सर्वर्स, नेम सर्वर्स सब

# मैनुअली ज़ोन ट्रांसफर:
dig axfr target.com @ns1.target.com

# nslookup से:
nslookup
> server ns1.target.com
> set type=AXFR
> target.com

# हर NS सर्वर पर टेस्ट करो:
dnsrecon -d target.com -t axfr -n ns1.target.com
dnsrecon -d target.com -t axfr -n ns2.target.com`}
      />

      <h2>Cache Snooping</h2>
      <p>
        कैश स्नूपिंग से पता चलता है कि DNS सर्वर ने कौन सी साइट्स विज़िट की हैं। यह प्राइवेसी और फ़ोरेंसिक्स में उपयोगी है।
      </p>
      <CodeBlock
        title="DNS कैश स्नूपिंग"
        code={`# कैश स्नूपिंग:
dnsrecon -d target.com -t snoop -D wordlist.txt -n ns1.target.com

# कैश स्नूपिंग कैसे काम करता है:
# 1. DNS सर्वर को रिकॉर्ड के लिए क्वेरी करो
# 2. अगर रिकॉर्ड कैश में है तो जल्दी रिस्पॉन्स आएगा
# 3. अगर कैश में नहीं है तो सर्वर को रिज़ॉल्व करना पड़ेगा
# 4. इससे पता चलता है कि कौन सी साइट्स विज़िट की गई हैं

# कॉमन वर्डलिस्ट:
# /usr/share/wordlists/dns/subdomains-top1million-5000.txt

# कैश स्नूपिंग का उपयोग:
# — फ़ोरेंसिक्स में पता करना कि कर्मचारी कौन सी साइट्स विज़िट करते हैं
# — प्राइवेसी ऑडिट में
# — मालवेयर एनालिसिस में C2 सर्वर का पता लगाने में`}
      />

      <h2>Google Enumeration</h2>
      <p>
        Google सर्च से सबडोमेन्स ढूंढना — यह पैसिव रेकन है।
      </p>
      <CodeBlock
        title="Google एन्यूमरेशन"
        code={`# Google से सबडोमेन्स:
dnsrecon -d target.com -t goo

# यह Google के site: ऑपरेटर का उपयोग करता है
# site:target.com से सबडोमेन्स मिलते हैं

# यह पैसिव रेकन है — टार्गेट को कोई रिक्वेस्ट नहीं जाती
# लेकिन Google रेट लिमिट कर सकता है

# Google एन्यूमरेशन का फ़ायदा:
# — पैसिव — टार्गेट को पता नहीं चलता
# — इंडेक्सेड पेजेज़ मिलते हैं
# — सबडोमेन्स के साथ URL भी मिलते हैं`}
      />

      <h2>Reverse Lookup</h2>
      <p>
        रिवर्स लुकअप से IP रेंज में कौन से डोमेन्स हैं वो पता चलता है।
      </p>
      <CodeBlock
        title="रिवर्स DNS लुकअप"
        code={`# रिवर्स लुकअप रेंज:
dnsrecon -r 192.168.1.0/24

# स्पेसिफिक रेंज:
dnsrecon -r 192.168.1.1-192.168.1.254

# यह पता चलेगा कि IP रेंज में कौन से डोमेन्स हैं
# उदाहरण:
# 192.168.1.10 → web.target.com
# 192.168.1.20 → mail.target.com
# 192.168.1.30 → ftp.target.com

# रिवर्स लुकअप का उपयोग:
# — पता करना कि IP पर कौन से डोमेन्स होस्ट हैं
# — वर्चुअल होस्टिंग डिस्कवर करना
# — हिडन सबडोमेन्स ढूंढना`}
      />

      <h2>Output Options</h2>
      <CodeBlock
        title="रिजल्ट्स सेव करें"
        code={`# CSV आउटपुट:
dnsrecon -d target.com -c results.csv

# JSON आउटपुट:
dnsrecon -d target.com --json results.json

# XML आउटपुट:
dnsrecon -d target.com --xml results.xml

# SQLite डेटाबेस:
dnsrecon -d target.com --db results.db

# यह रिजल्ट्स बाद में एनालाइज़ करने के लिए उपयोगी हैं
# JSON आउटपुट दूसरे टूल्स के साथ पाइप कर सकते हो

# JSON से सबडोमेन्स निकालो:
cat results.json | python3 -c "
import json, sys
data = json.load(sys.stdin)
for record in data:
    if 'name' in record:
        print(record['name'])
" | sort -u`}
      />

      <h2>DNS Record Types</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Record</th>
              <th className="text-left py-2 px-3 text-neon-green">उद्देश्य</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">A</td><td className="py-2 px-3">IPv4 एड्रेस</td><td className="py-2 px-3 font-mono text-xs">target.com → 1.2.3.4</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">AAAA</td><td className="py-2 px-3">IPv6 एड्रेस</td><td className="py-2 px-3 font-mono text-xs">target.com → 2001:db8::1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">MX</td><td className="py-2 px-3">मेल सर्वर</td><td className="py-2 px-3 font-mono text-xs">mail.target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">NS</td><td className="py-2 px-3">नेम सर्वर</td><td className="py-2 px-3 font-mono text-xs">ns1.target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SOA</td><td className="py-2 px-3">स्टार्ट ऑफ़ अथॉरिटी</td><td className="py-2 px-3 font-mono text-xs">ns1.target.com admin.target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">TXT</td><td className="py-2 px-3">टेक्स्ट रिकॉर्ड्स</td><td className="py-2 px-3 font-mono text-xs">SPF, DKIM, वेरिफिकेशन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CNAME</td><td className="py-2 px-3">कैनोनिकल नाम</td><td className="py-2 px-3 font-mono text-xs">www → target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SRV</td><td className="py-2 px-3">सर्विस रिकॉर्ड्स</td><td className="py-2 px-3 font-mono text-xs">_sip._tcp.target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">PTR</td><td className="py-2 px-3">रिवर्स DNS</td><td className="py-2 px-3 font-mono text-xs">4.3.2.1 → host.target.com</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">NSEC/NSEC3</td><td className="py-2 px-3">DNSSEC ज़ोन वॉक</td><td className="py-2 px-3 font-mono text-xs">ज़ोन वॉक के लिए</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="DNSRecon ऑटोमेशन स्क्रिप्ट"
        code={`#!/bin/bash
# ऑटोमैटिक DNS रेकन स्क्रिप्ट

DOMAIN=$1
OUTPUT_DIR="dnsrecon_results"

mkdir -p $OUTPUT_DIR

echo "[+] टार्गेट: $DOMAIN"
echo "[+] DNSRecon स्कैन शुरू..."

# सभी स्कैन रन करो:
dnsrecon -d $DOMAIN -a --json $OUTPUT_DIR/full_scan.json

# ज़ोन ट्रांसफर:
dnsrecon -d $DOMAIN -t axfr --json $OUTPUT_DIR/zone_transfer.json

# ब्रूट फोर्स:
dnsrecon -d $DOMAIN -t brt -D /usr/share/wordlists/dns/subdomains-top1million-5000.txt --json $OUTPUT_DIR/bruteforce.json

# Google एन्यूमरेशन:
dnsrecon -d $DOMAIN -t goo --json $OUTPUT_DIR/google.json

echo "[+] रिजल्ट्स $OUTPUT_DIR में सेव हो गए"

# JSON से सबडोमेन्स निकालो:
cat $OUTPUT_DIR/full_scan.json | python3 -c "
import json, sys
data = json.load(sys.stdin)
for record in data:
    if 'name' in record:
        print(record['name'])
" | sort -u > $OUTPUT_DIR/subdomains.txt

echo "[+] सबडोमेन्स: $(wc -l < $OUTPUT_DIR/subdomains.txt) मिले"`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        DNSRecon के एडवांस्ड फीचर्स जो ज़्यादातर लोग नहीं जानते:
      </p>
      <CodeBlock
        title="एडवांस्ड टेक्निक्स"
        code={`# DNSSEC ज़ोन वॉक:
# NSEC रिकॉर्ड्स से सभी सबडोमेन्स निकालता है
dnsrecon -d target.com -t zonewalk

# यह कैसे काम करता है:
# DNSSEC में NSEC रिकॉर्ड्स एक चेन बनाते हैं
# हर NSEC रिकॉर्ड अगले एक्सिस्टिंग रिकॉर्ड की ओर पॉइंट करता है
# इस चेन को फॉलो करके सभी रिकॉर्ड्स मिल जाते हैं

# वाइल्डकार्ड डिटेक्शन:
# अगर DNS सर्वर वाइल्डकार्ड (*) यूज़ करता है
# तो हर सबडोमेन एक ही IP पर रिज़ॉल्व होगा
# यह ब्रूट फोर्स रिजल्ट्स को अनरिलाएबल बनाता है

# कस्टम DNS सर्वर:
dnsrecon -d target.com -n 1.1.1.1

# डिफ़ॉल्ट DNS सर्वर बदलने से अलग रिजल्ट्स मिल सकते हैं

# मल्टी-डोमेन स्कैन:
for domain in $(cat domains.txt); do
    echo "[+] Scanning: $domain"
    dnsrecon -d $domain -a --json "results_$domain.json"
    sleep 5
done`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        DNSRecon-based reconnaissance real engagements में कई बार critical findings दिलाता है। यहां कुछ practical scenarios हैं:
      </p>
      <p>
        <strong className="text-white">Case Study 1 — Open Zone Transfer:</strong> एक penetration test में DNSRecon ने target company के DNS सर्वर पर open zone transfer detect किया। AXFR request से company के सभी internal subdomains मिल गए — admin.target.com, vpn.target.com, staging.target.com, db.target.com। यह information attack surface mapping के लिए critical थी। Staging server पर default credentials मिले जिससे tester ने internal network access पा लिया।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — DNSSEC Zone Walk:</strong> एक bug bounty program में researcher ने DNSRecon का zone walk feature use किया। Target domain DNSSEC-enabled था लेकिन NSEC records properly configured नहीं थे। Zone walk से 50+ hidden subdomains मिले जो brute force से नहीं मिलते। इनमें से एक internal API server था जिसमें SQL injection vulnerability थी — $5000 bounty मिली।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — Cache Snooping Attack:</strong> एक red team engagement में DNSRecon की cache snooping feature से पता चला कि company employees किन websites visit करते हैं। Cache में competitors की websites, job portals, और specific SaaS platforms के records मिले। यह information social engineering attack plan करने में useful थी — target employees की interests और habits पता चलीं।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        DNSRecon अकेले powerful है लेकिन दूसरे tools के साथ combine करने पर comprehensive recon pipeline बनती है।
      </p>

      <h3>DNSRecon + Nmap</h3>
      <CodeBlock
        title="DNSRecon + Nmap Combo"
        code={`# Step 1: DNSRecon से subdomains निकालो:
dnsrecon -d target.com -a --json dnsrecon_results.json

# Step 2: JSON से subdomains extract करो:
cat dnsrecon_results.json | python3 -c "
import json, sys
data = json.load(sys.stdin)
for record in data:
    if 'name' in record and 'type' in record:
        if record['type'] in ['A', 'AAAA']:
            print(record['name'])
" | sort -u > subdomains.txt

# Step 3: Nmap से port scan करो:
nmap -iL subdomains.txt -sV -oA nmap_scan

# Step 4: HTTP services identify करो:
nmap -iL subdomains.txt -p 80,443,8080,8443 --open -oG http_hosts.txt`}
      />

      <h3>DNSRecon + Subfinder + httpx</h3>
      <CodeBlock
        title="Complete Recon Pipeline"
        code={`#!/bin/bash
# Complete DNS recon pipeline
DOMAIN=$1
OUTPUT_DIR="recon_$DOMAIN"
mkdir -p $OUTPUT_DIR

echo "[*] Phase 1: DNSRecon full scan..."
dnsrecon -d $DOMAIN -a --json $OUTPUT_DIR/dnsrecon.json

echo "[*] Phase 2: Subfinder passive recon..."
subfinder -d $DOMAIN -o $OUTPUT_DIR/subfinder.txt

echo "[*] Phase 3: Combine subdomains..."
cat $OUTPUT_DIR/dnsrecon.json | python3 -c "
import json, sys
data = json.load(sys.stdin)
for r in data:
    if 'name' in r and r.get('type') in ['A','AAAA']:
        print(r['name'])
" > $OUTPUT_DIR/dnsrecon_subs.txt
cat $OUTPUT_DIR/dnsrecon_subs.txt $OUTPUT_DIR/subfinder.txt | sort -u > $OUTPUT_DIR/all_subs.txt
echo "[+] Total subdomains: $(wc -l < $OUTPUT_DIR/all_subs.txt)"

echo "[*] Phase 4: httpx live host check..."
cat $OUTPUT_DIR/all_subs.txt | httpx -o $OUTPUT_DIR/live_hosts.txt

echo "[*] Phase 5: Nmap scan..."
nmap -iL $OUTPUT_DIR/live_hosts.txt -sV -oA $OUTPUT_DIR/nmap_results

echo "[+] Results saved in: $OUTPUT_DIR/"`}
      />

      <h3>DNSRecon + Amass</h3>
      <CodeBlock
        title="DNSRecon + Amass Deep Recon"
        code={`# DNSRecon (active) + Amass (passive) combo:
# Step 1: Amass passive enumeration:
amass enum -passive -d target.com -o amass_passive.txt

# Step 2: DNSRecon active scan:
dnsrecon -d target.com -a --json dnsrecon_active.json

# Step 3: Amass active enumeration:
amass enum -active -d target.com -o amass_active.txt

# Step 4: Combine all results:
cat amass_passive.txt amass_active.txt > amass_combined.txt
cat dnsrecon_active.json | python3 -c "
import json, sys
data = json.load(sys.stdin)
for r in data:
    if 'name' in r:
        print(r['name'])
" > dnsrecon_subs.txt
cat amass_combined.txt dnsrecon_subs.txt | sort -u > final_subdomains.txt
echo "[+] Final unique subdomains: $(wc -l < final_subdomains.txt)"`}
      />

      <h3>DNSRecon + Metasploit</h3>
      <CodeBlock
        title="DNSRecon + MSF Integration"
        code={`# Metasploit में DNSRecon results import करो:
# Step 1: DNSRecon से scan करो:
dnsrecon -d target.com -a --xml results.xml

# Step 2: Metasploit में import:
msfconsole
msf > db_import results.xml

# Step 3: Results check करो:
msf > hosts
msf > services

# Step 4: DNS-based attacks:
msf > use auxiliary/gather/enum_dns
msf > set DOMAIN target.com
msf > run

# Step 5: DNS cache snooping:
msf > use auxiliary/gather/dns_cache_snoop
msf > set DOMAIN target.com
msf > run`}
      />

      <h2>Performance Tuning</h2>
      <p>
        DNSRecon को efficiently use करने के लिए performance tuning ज़रूरी है — खासकर बड़े engagements में।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Thread Count:</strong> --threads flag से parallel queries set करो। Default 10 threads है — fast networks पर 20-30 तक बढ़ा सकते हो</li>
        <li><strong className="text-white">Scan Type Selection:</strong> सभी scans एक साथ (-a) slow हो सकता है। Specific scan types use करो जो ज़रूरी हैं</li>
        <li><strong className="text-white">DNS Server Selection:</strong> Fast DNS server use करो (-n 8.8.8.8) — ISP DNS से faster response मिलता है</li>
        <li><strong className="text-white">Wordlist Size:</strong> Brute force के लिए छोटी wordlist से शुरू करो — subdomains-top1million-5000.txt</li>
        <li><strong className="text-white">Timeout Adjustment:</strong> --lifetime flag से query timeout control करो — slow networks पर बढ़ाओ</li>
        <li><strong className="text-white">Scan Delay:</strong> -s flag से delay set करो — rate limiting avoid करने के लिए</li>
        <li><strong className="text-white">Output Format:</strong> JSON output use करो — CSV से processing faster है</li>
        <li><strong className="text-white">Parallel Domains:</strong> Multiple domains को GNU parallel से scan करो</li>
      </ul>
      <CodeBlock
        title="Performance Optimization"
        code={`# Fast scan (high threads, specific types):
dnsrecon -d target.com -t std,axfr --threads 20 --lifetime 3

# Custom DNS server (faster resolution):
dnsrecon -d target.com -a -n 8.8.8.8 --threads 15

# Scan with delay (rate limit safe):
dnsrecon -d target.com -t brt -D wordlist.txt -s 0.5 --threads 5

# Parallel multi-domain scan:
cat domains.txt | parallel -j5 "dnsrecon -d {} -a --json results_{}.json"

# Timeout control:
dnsrecon -d target.com -a --lifetime 5 --threads 10

# Quick zone transfer test only:
dnsrecon -d target.com -t axfr --lifetime 2

# Memory-efficient large scan:
dnsrecon -d target.com -t brt -D /usr/share/wordlists/dns/subdomains-top1million-20000.txt --threads 10 --json brt_results.json`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        DNSRecon results को analyze करना और report बनाना engagement का important part है।
      </p>
      <CodeBlock
        title="DNSRecon Results Analysis"
        code={`#!/usr/bin/env python3
# DNSRecon JSON Results Analyzer
import json
import sys
from collections import Counter

json_file = sys.argv[1]

with open(json_file) as f:
    data = json.load(f)

# Record type statistics:
type_counter = Counter()
for record in data:
    if 'type' in record:
        type_counter[record['type']] += 1

print("=== DNSRecon Results Analysis ===")
print(f"Total records: {len(data)}")
print()
print("[*] Record type distribution:")
for rtype, count in type_counter.most_common():
    print(f"    {rtype}: {count}")

# Extract unique hosts:
hosts = set()
for record in data:
    if 'name' in record and record.get('type') in ['A', 'AAAA']:
        hosts.add(record['name'])
print(f"\\n[*] Unique hosts: {len(hosts)}")

# Extract IP addresses:
ips = set()
for record in data:
    if 'address' in record:
        ips.add(record['address'])
print(f"[*] Unique IPs: {len(ips)}")

# Zone transfer findings:
axfr_records = [r for r in data if r.get('type') == 'AXFR']
if axfr_records:
    print(f"\\n[!] Zone transfer OPEN: {len(axfr_records)} records exposed!")

# Save hosts to file:
with open("discovered_hosts.txt", "w") as f:
    for host in sorted(hosts):
        f.write(host + "\\n")
print(f"\\n[+] Hosts saved: discovered_hosts.txt")`}
      />
      <CodeBlock
        title="CSV Export and Filtering"
        code={`#!/bin/bash
# DNSRecon CSV analysis
CSV_FILE=$1

echo "=== DNSRecon CSV Analysis ==="
echo "File: $CSV_FILE"
echo ""

# Total records:
echo "[*] Total records: $(wc -l < $CSV_FILE)"

# Record types:
echo "[*] Record types:"
tail -n +2 $CSV_FILE | cut -d',' -f3 | sort | uniq -c | sort -rn

# Unique domains:
echo "[*] Unique domains:"
tail -n +2 $CSV_FILE | cut -d',' -f1 | sort -u | wc -l

# A records (IPv4):
echo "[*] A records:"
grep ",A," $CSV_FILE | wc -l

# MX records:
echo "[*] MX records:"
grep ",MX," $CSV_FILE | cut -d',' -f5 | sort -u

# NS records:
echo "[*] NS records:"
grep ",NS," $CSV_FILE | cut -d',' -f5 | sort -u

# TXT records (often contain useful info):
echo "[*] TXT records:"
grep ",TXT," $CSV_FILE | cut -d',' -f5

# Export clean host list:
grep ",A," $CSV_FILE | cut -d',' -f1 | sort -u > clean_hosts.txt
echo "[+] Clean hosts: $(wc -l < clean_hosts.txt)"`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        DNSRecon के एडवांस्ड फीचर्स जो ज़्यादातर लोग नहीं जानते:
      </p>

      <h3>Wildcard Detection</h3>
      <CodeBlock
        title="DNS Wildcard Detection"
        code={`# Wildcard DNS detection:
# अगर DNS सर्वर wildcard (*) use करता है
# तो हर subdomain एक ही IP पर resolve होगा

# Test wildcard:
random_sub="thisshouldnotexist$(date +%s)"
result=$(dig +short $random_sub.target.com)
if [ -n "$result" ]; then
    echo "[!] Wildcard DNS detected: $result"
    echo "[!] Brute force results unreliable!"
else
    echo "[+] No wildcard detected"
fi

# DNSRecon with wildcard awareness:
# First check wildcard, then decide scan type
dnsrecon -d target.com -t std
# If wildcard detected, use passive methods:
dnsrecon -d target.com -t goo
# Or use zone walk (bypasses wildcard):
dnsrecon -d target.com -t zonewalk`}
      />

      <h3>DNSSEC Analysis</h3>
      <CodeBlock
        title="Deep DNSSEC Analysis"
        code={`# DNSSEC zone walk:
dnsrecon -d target.com -t zonewalk

# DNSSEC validation check:
dig +dnssec target.com
dig +dnssec +cd target.com  # Check disabled

# NSEC/NSEC3 analysis:
# NSEC records chain — follow to enumerate all records:
dig NSEC target.com @ns1.target.com

# NSEC3 (hashed) — harder to walk:
dig NSEC3 target.com @ns1.target.com

# DNSKEY records:
dig DNSKEY target.com

# DS records:
dig DS target.com

# RRSIG validation:
dig +rrsig target.com

# Manual zone walk (if DNSRecon fails):
# NSEC chain follow:
current="target.com"
while true; do
    next=$(dig +short NSEC $current | head -1)
    echo "$current -> $next"
    if [ "$next" = "$current" ] || [ -z "$next" ]; then
        break
    fi
    current=$next
done`}
      />

      <h3>Multi-Domain Enumeration</h3>
      <CodeBlock
        title="Enterprise DNS Recon"
        code={`#!/bin/bash
# Enterprise-level DNS recon
# Target: multiple domains of same organization

DOMAINS="target.com
target.co.uk
target.de
target.co.in
target-group.com"

OUTPUT_DIR="enterprise_dns"
mkdir -p $OUTPUT_DIR

echo "[*] Enterprise DNS Recon"
echo "[*] Domains: $(echo "$DOMAINS" | wc -l)"

while read domain; do
    echo "[+] Scanning: $domain"

    # Standard scan:
    dnsrecon -d $domain -t std --json $OUTPUT_DIR/\\${domain}_std.json 2>/dev/null

    # Zone transfer test:
    dnsrecon -d $domain -t axfr --json $OUTPUT_DIR/\\${domain}_axfr.json 2>/dev/null

    # Google enumeration:
    dnsrecon -d $domain -t goo --json $OUTPUT_DIR/\\${domain}_goo.json 2>/dev/null

    # Brute force (small wordlist):
    dnsrecon -d $domain -t brt -D /usr/share/wordlists/dns/subdomains-top1million-5000.txt --json $OUTPUT_DIR/\\${domain}_brt.json 2>/dev/null

    sleep 2  # Rate limiting
done <<< "$DOMAINS"

# Combine all subdomains:
for f in $OUTPUT_DIR/*.json; do
    cat "$f" | python3 -c "
import json, sys
try:
    data = json.load(sys.stdin)
    for r in data:
        if 'name' in r and r.get('type') in ['A','AAAA']:
            print(r['name'])
except: pass
"
done | sort -u > $OUTPUT_DIR/all_subdomains.txt
echo "[+] Total unique subdomains: $(wc -l < $OUTPUT_DIR/all_subdomains.txt)"`}
      />

      <h3>Passive DNS Techniques</h3>
      <CodeBlock
        title="Passive DNS Reconnaissance"
        code={`# DNSRecon Google enumeration (passive):
dnsrecon -d target.com -t goo

# Additional passive sources (manual):
# 1. Certificate Transparency Logs:
curl -s "https://crt.sh/?q=%25.target.com&output=json" | python3 -c "
import json, sys
data = json.load(sys.stdin)
for entry in data:
    for name in entry.get('name_value','').split('\\n'):
        print(name)
" | sort -u > crt_subdomains.txt

# 2. VirusTotal:
curl -s "https://www.virustotal.com/api/v3/domains/target.com/subdomains" \\
    -H "x-apikey: YOUR_API_KEY" | python3 -c "
import json, sys
data = json.load(sys.stdin)
for sub in data.get('data',[]):
    print(sub['id'])
" > vt_subdomains.txt

# 3. SecurityTrails:
curl -s "https://api.securitytrails.com/v1/domain/target.com/subdomains" \\
    -H "apikey: YOUR_API_KEY" | python3 -c "
import json, sys
data = json.load(sys.stdin)
for sub in data.get('subdomains',[]):
    print(f'{sub}.target.com')
" > st_subdomains.txt

# Combine passive sources:
cat crt_subdomains.txt vt_subdomains.txt st_subdomains.txt | sort -u > passive_subs.txt
echo "[+] Passive subdomains: $(wc -l < passive_subs.txt)"`}
      />

      <h2>DNSRecon vs अन्य टूल्स</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">DNSRecon</th>
              <th className="text-left py-2 px-3 text-neon-green">DNSenum</th>
              <th className="text-left py-2 px-3 text-neon-green">fierce</th>
              <th className="text-left py-2 px-3 text-neon-green">Amass</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">ज़ोन ट्रांसफर</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">ब्रूट फोर्स</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कैश स्नूपिंग</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Google एन्यूमरेशन</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">DNSSEC ज़ोन वॉक</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">रिवर्स लुकअप</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">JSON आउटपुट</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr><td className="py-2 px-3 text-white">50+ डेटा सोर्सेज़</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'ज़ोन ट्रांसफर फ़ेल हो रहा है', a: 'ज़्यादातर DNS सर्वर्स ज़ोन ट्रांसफर ब्लॉक करते हैं। यह नॉर्मल है — दूसरे स्कैन टाइप्स ट्राई करो।' },
          { q: 'ब्रूट फोर्स बहुत स्लो है', a: 'छोटी वर्डलिस्ट यूज़ करो। subdomains-top1million-5000.txt से शुरू करो, बड़ी वर्डलिस्ट बाद में।' },
          { q: 'कैश स्नूपिंग काम नहीं कर रही', a: 'DNS सर्वर recursive queries ब्लॉक कर रहा होगा। -n फ्लैग से सही DNS सर्वर स्पेसिफाई करो।' },
          { q: 'Google एन्यूमरेशन में एरर आ रही है', a: 'Google रेट लिमिट कर सकता है। प्रॉक्सी यूज़ करो या बाद में ट्राई करो।' },
          { q: 'कोई सबडोमेन नहीं मिल रहा', a: 'डोमेन सही है चेक करो। DNS सर्वर स्पेसिफाई करो (-n)। अलग-अलग स्कैन टाइप्स ट्राई करो।' },
          { q: 'Python एरर आ रही है', a: 'Python 3 और dependencies इंस्टॉल करो: pip3 install -r requirements.txt' },
          { q: 'DNSSEC ज़ोन वॉक काम नहीं कर रहा', a: 'टार्गेट डोमेन DNSSEC-enabled होना चाहिए। बिना DNSSEC के NSEC रिकॉर्ड्स नहीं मिलेंगे।' },
          { q: 'JSON पार्सिंग में एरर', a: 'JSON फाइल करप्ट हो सकती है। स्कैन दोबारा रन करो और --json फ्लैग सही से यूज़ करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        DNSRecon का इस्तेमाल अटैकर्स भी करते हैं — इसलिए DNS सुरक्षा ज़रूरी है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>ज़ोन ट्रांसफर ब्लॉक करें — सिर्फ अधिकृत सर्वर्स को AXFR की अनुमति दें</li>
        <li>रिकर्सिव क्वेरीज़ लिमिट करें — सिर्फ इंटरनल नेटवर्क को</li>
        <li>रेट लिमिटिंग — DNS क्वेरीज़ की संख्या सीमित करें</li>
        <li>DNSSEC लागू करें — ज़ोन वॉक से बचाव</li>
        <li>DNS लॉगिंग — सभी क्वेरीज़ लॉग करें</li>
        <li>Response Rate Limiting (RRL) — DNS amplification अटैक से बचाव</li>
        <li>स्प्लिट DNS — इंटरनल और एक्सटर्नल DNS अलग रखें</li>
        <li>DNS फ़ायरवॉल — सस्पीशियस क्वेरीज़ ब्लॉक करें</li>
        <li>DNS-over-HTTPS (DoH) या DNS-over-TLS (DoT) इनेबल करें</li>
        <li>नेम सर्वर्स को हार्डन करें — अनावश्यक इन्फॉर्मेशन न दें</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        DNS reconnaissance प्रैक्टिस के लिए सेफ लैब बनाना ज़रूरी है:
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# लोकल DNS सर्वर बनाएं (BIND9):
sudo apt install bind9

# ज़ोन फाइल क्रिएट करें:
# /etc/bind/db.target.local

# टेस्ट डोमेन:
# target.local A 192.168.1.100
# www.target.local CNAME target.local
# mail.target.local A 192.168.1.200
# ns1.target.local A 192.168.1.1

# DNSRecon से टेस्ट:
dnsrecon -d target.local

# ऑनलाइन टेस्ट (अधिकृत टार्गेट्स):
# — अपने खुद के डोमेन पर टेस्ट करो
# — बग बाउंटी प्रोग्राम्स में टेस्ट करो`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या DNSRecon फ्री है?', a: 'हाँ, पूरी तरह फ्री और ओपन सोर्स (GPLv2)।' },
          { q: 'dnsenum से बेहतर है?', a: 'DNSRecon में ज़्यादा फीचर्स हैं — कैश स्नूपिंग, Google एन्यूमरेशन, DNSSEC ज़ोन वॉक। dnsenum सिंपल है लेकिन कम फीचर्स हैं।' },
          { q: 'क्या यह पैसिव रेकन कर सकता है?', a: 'Google एन्यूमरेशन (-t goo) पैसिव है। बाकी स्कैन एक्टिव हैं — टार्गेट को रिक्वेस्ट जाती है।' },
          { q: 'JSON आउटपुट कैसे यूज़ करें?', a: 'JSON आउटपुट दूसरे टूल्स (nmap, httpx, nuclei) के साथ पाइप कर सकते हो। Python से पार्स करके एनालाइज़ कर सकते हो।' },
          { q: 'DNSSEC ज़ोन वॉक क्या है?', a: 'DNSSEC में NSEC रिकॉर्ड्स एक चेन बनाते हैं। इस चेन को फॉलो करके सभी रिकॉर्ड्स निकाले जा सकते हैं — बिना ब्रूट फोर्स के।' },
          { q: 'क्या कैश स्नूपिंग अवैध है?', a: 'DNS सर्वर अगर पब्लिक है तो कैश स्नूपिंग ग्रे एरिया है। प्राइवेट DNS सर्वर पर अनधिकृत एक्सेस अवैध है।' },
          { q: 'क्या Windows पर चलता है?', a: 'हाँ, Python 3 इंस्टॉल होने पर Windows पर भी चलता है। लेकिन Kali Linux पर प्री-इंस्टॉल्ड आता है।' },
          { q: 'कितना तेज़ है?', a: 'स्टैंडर्ड स्कैन कुछ सेकंड में हो जाता है। ब्रूट फोर्स वर्डलिस्ट के साइज़ पर डिपेंड करता है।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DNSenum</td><td className="py-2 px-3">DNS एन्यूमरेशन</td><td className="py-2 px-3">सिंपल और तेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">fierce</td><td className="py-2 px-3">DNS रेकन</td><td className="py-2 px-3">मॉडर्न, एक्टिवली मेंटेन्ड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Amass</td><td className="py-2 px-3">अटैक सर्फ़ेस मैपिंग</td><td className="py-2 px-3">50+ डेटा सोर्सेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Subfinder</td><td className="py-2 px-3">पैसिव सबडोमेन डिस्कवरी</td><td className="py-2 px-3">30+ सोर्सेज़, तेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Knockpy</td><td className="py-2 px-3">सबडोमेन एन्यूमरेशन</td><td className="py-2 px-3">सिंपल Python टूल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">MassDNS</td><td className="py-2 px-3">हाई-परफॉर्मेंस DNS रिज़ॉल्वर</td><td className="py-2 px-3">बहुत तेज़, बल्क स्कैनिंग</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">dnsx</td><td className="py-2 px-3">DNS टूल (ProjectDiscovery)</td><td className="py-2 px-3">Go में, पाइपलाइन फ्रेंडली</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>DNSRecon + Nmap DNS स्क्रिप्ट्स कॉम्बो इस्तेमाल करो</li>
          <li>पहले dnsrecon से रिकॉर्ड्स निकालो, फिर Nmap के dns-brute, dns-zone-transfer, dns-nsid स्क्रिप्ट्स से डीप स्कैन करो</li>
          <li>TXT रिकॉर्ड्स में कभी-कभी API keys या वेरिफिकेशन टोकन्स मिल जाते हैं — उन्हें ज़रूर चेक करो</li>
          <li>JSON आउटपुट यूज़ करो — बाद में एनालिसिस के लिए बहुत उपयोगी है</li>
          <li>हर NS सर्वर पर अलग से ज़ोन ट्रांसफर टेस्ट करो</li>
          <li>DNSSEC ज़ोन वॉक ज़रूर ट्राई करो — बिना ब्रूट फोर्स के सबडोमेन्स मिल सकते हैं</li>
          <li>SOA record में primary NS और admin email मिलता है — यह OSINT के लिए useful है</li>
          <li>MX records से mail server infrastructure पता चलता है — Google Workspace, Microsoft 365, ya self-hosted</li>
          <li>SPF record (TXT) में authorized mail servers listed होते हैं — infrastructure mapping के लिए</li>
          <li>SRV records से internal services discover होती हैं — LDAP, Kerberos, SIP जैसी</li>
          <li>Wildcard DNS check करो पहले — brute force results unreliable हो सकते हैं</li>
          <li>Certificate Transparency logs (crt.sh) से passive subdomain discovery करो — DNSRecon के साथ combine करो</li>
          <li>हर engagement में DNSRecon का output save करो — baseline के लिए future scans से compare कर सकते हो</li>
          <li>Multiple DNS servers (8.8.8.8, 1.1.1.1, 9.9.9.9) पर same scan run करो — अलग results मिल सकते हैं</li>
          <li>Reverse DNS lookup से IP range में hidden hosts मिलते हैं — internal network mapping के लिए</li>
          <li>DNSRecon को regularly update करो — new features और bug fixes आते रहते हैं</li>
          <li>Scan results को database (--db) में save करो — large engagements में querying आसान होती है</li>
          <li>Rate limiting handle करने के लिए -s flag से delay set करो — especially brute force scans में</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> DNSRecon एक शक्तिशाली DNS reconnaissance टूल है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए करें। बिना अनुमति के DNS रेकन करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत रेकन अपराध हो सकता है। केवल अपने लैब वातावरण या अधिकृत टार्गेट्स पर ही इस्तेमाल करें।
      </div>
    </TutorialLayout>
  )
}
