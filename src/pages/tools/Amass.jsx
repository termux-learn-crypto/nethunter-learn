import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Amass() {
  return (
    <TutorialLayout
      title="amass"
      subtitle="अटैक सर्फ़ेस मैपिंग और एसेट डिस्कवरी टूल"
      icon="🌐"
      prev={{ to: '/tool/tcpdump', label: 'tcpdump' }}
      next={{ to: '/tool/commix', label: 'commix' }}
    >
      <h2>What is Amass?</h2>
      <p>
        Amass OWASP (Open Web Application Security Project) का ऑफिशियल अटैक सर्फ़ेस मैपिंग टूल है। यह टूल डोमेन के सभी सबडोमेन्स, आईपी एड्रेसेज़, और डिजिटल एसेट्स को खोजने के लिए डिज़ाइन किया गया है। यह 50+ डेटा सोर्सेज़ से एक साथ डेटा कलेक्ट करता है — VirusTotal, Shodan, Censys, Certificate Transparency लॉग्स, DNS रिज़ॉल्यूशन, और बहुत कुछ। बग बाउंटी हंटर्स, सिक्योरिटी रिसर्चर्स, और रेड टीम ऑपरेटर्स के लिए यह एक एसेंशियल टूल है।
      </p>
      <p>
        Amass एक्टिव और पैसिव दोनों तरह की एन्यूमरेशन कर सकता है। पैसिव मोड में टार्गेट को कोई रिक्वेस्ट नहीं जाती — यह सबसे सुरक्षित तरीका है क्योंकि टार्गेट को पता नहीं चलता कि उसे रेकन किया जा रहा है। एक्टिव मोड में DNS रिज़ॉल्यूशन, ज़ोन ट्रांसफर, और ब्रूट फोर्स तकनीकें इस्तेमाल होती हैं। एक्टिव मोड ज़्यादा रिजल्ट्स देता है लेकिन टार्गेट को पता चल सकता है।
      </p>
      <p>
        Amass Go भाषा में लिखा गया है जो इसे बहुत तेज़ और एफिशिएंट बनाता है। यह क्रॉस-प्लेटफ़ॉर्म है — Linux, macOS, Windows सब पर चलता है। OWASP प्रोजेक्ट होने के कारण इसकी कम्युनिटी बहुत बड़ी है और रेगुलर अपडेट्स आते रहते हैं। काली नेटहंटर में यह प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        Amass का architecture modular है — data sources, resolvers, और output handlers सब plug-in based हैं। नए data sources add करना आसान है। SQLite database में सारा data store होता है जिसे बाद में query कर सकते हो। Visualization engine d3.js use करता है जो interactive graphs बनाता है — subdomains के relationships visually दिखते हैं।
      </p>
      <p>
        Bug bounty hunting में Amass पहला tool है जो run होता है। Reconnaissance phase में जितने ज़्यादा subdomains मिलें, उतना बड़ा attack surface। हर subdomain एक potential entry point है — staging servers, test environments, forgotten APIs, legacy applications। Amass ये सब ढूंढ लेता है।
      </p>
      <p>
        Enterprise security teams भी Amass इस्तेमाल करते हैं — अपने attack surface को continuously monitor करने के लिए। अगर कोई unauthorized subdomain pop up हो, तो तुरंत alert मिलता है। यह proactive security का हिस्सा है — attackers से पहले अपने assets जानो।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Amass केवल अधिकृत टार्गेट्स पर ही इस्तेमाल करें। बिना अनुमति के रेकन अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत रेकन अपराध हो सकता है। साइबर अपराध गंभीर परिणामों का कारण बन सकता है — जुर्माना और जेल दोनों हो सकते हैं। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of Amass</h2>
      <p>
        Amass की शुरुआत 2017 में हुई थी जब OWASP ने अटैक सर्फ़ेस मैपिंग की ज़रूरत को पहचाना। Jeff Foley ने इस प्रोजेक्ट को शुरू किया और इसे OWASP के ऑफिशियल प्रोजेक्ट के रूप में मान्यता मिली। शुरू में यह सिर्फ सबडोमेन एन्यूमरेशन पर फोकस करता था, लेकिन बाद में इसमें पूरी अटैक सर्फ़ेस मैपिंग क्षमता जोड़ी गई।
      </p>
      <p>
        2019 में Amass को Go भाषा में रीराइट किया गया जिससे परफ़ॉर्मेंस में बड़ा सुधार हुआ। Go की concurrency capabilities से parallel data collection possible हुई। 2020 में इसे OWASP का टॉप लेवल प्रोजेक्ट बनाया गया — यह OWASP की सबसे prestigious category है।
      </p>
      <p>
        2021 में Amass v4 release हुई जिसमें major architecture overhaul हुआ। नए version में data source management बेहतर हुआ, API keys का handling improve हुआ, और visualization engine upgrade हुआ। Community contributions बढ़ीं और नए data sources add हुए। आज यह सबसे पॉपुलर ओपन सोर्स सबडोमेन एन्यूमरेशन टूल है — GitHub पर 12,000+ स्टार्स और active development जारी है।
      </p>
      <p>
        Amass की success का कारण इसका comprehensive approach है। दूसरे tools सिर्फ DNS brute force या passive sources use करते हैं, लेकिन Amass दोनों combine करता है। 50+ data sources से data collect करके deduplicate करता है और structured output देता है। OWASP backing से enterprise adoption भी बढ़ी है।
      </p>
      <p>
        Amass का future bright है — OWASP actively maintain कर रहा है। New data sources regular add हो रहे हैं। Cloud environment support improve हो रहा है। Community contributions बढ़ रही हैं। Bug bounty industry के साथ-साथ Amass की demand भी बढ़ रही है। Enterprise security teams भी इसे adopt कर रहे हैं continuous attack surface monitoring के लिए।
      </p>
      <p>
        Amass का डिज़ाइन दर्शन यह है कि अटैक सर्फ़ेस की पूरी तस्वीर मिलनी चाहिए। सिर्फ सबडोमेन्स ही नहीं, बल्कि IP एड्रेसेज़, ASNs, NET ब्लॉक्स, सबनेट्स — सब कुछ। यह ऑर्गेनाइज़ेशन के पूरे डिजिटल फुटप्रिंट को मैप करता है।
      </p>
      <p>
        Amass v4 में major architecture changes आए। नया version ज़्यादा modular है और data sources को independently configure कर सकते हो। API keys management बेहतर हुआ है। Performance improvements के साथ-साथ new data sources भी add हुए हैं। Community contributions बढ़ रही हैं और documentation भी comprehensive है।
      </p>

      <h2>How Amass Works?</h2>
      <p>
        Amass दो तरह से काम करता है — पैसिव एन्यूमरेशन और एक्टिव एन्यूमरेशन। पैसिव में यह थर्ड-पार्टी डेटा सोर्सेज़ से जानकारी इकट्ठा करता है बिना टार्गेट को कोई रिक्वेस्ट भेजे। एक्टिव में यह सीधे DNS सर्वर्स से रिज़ॉल्यूशन करता है, ज़ोन ट्रांसफर ट्राई करता है, और ब्रूट फोर्स तकनीकें इस्तेमाल करता है।
      </p>
      <p>
        Amass 50+ डेटा सोर्सेज़ से डेटा कलेक्ट करता है। इनमें VirusTotal, Shodan, Censys, AlienVault, SecurityTrails, Certificate Transparency लॉग्स, DNS डेटाबेस, सर्च इंजन, और बहुत सारे अन्य सोर्सेज़ शामिल हैं। हर सोर्स से अलग-अलग तरह की जानकारी मिलती है, और Amass सबको मिलाकर यूनिक रिजल्ट्स देता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">डेटा कलेक्शन इंजन:</strong> 50+ सोर्सेज़ से एक साथ डेटा कलेक्ट करता है</li>
        <li><strong className="text-white">DNS रिज़ॉल्यूशन:</strong> A, AAAA, CNAME, MX, NS, TXT, SRV रिकॉर्ड्स रिज़ॉल्व करता है</li>
        <li><strong className="text-white">ब्रूट फोर्स इंजन:</strong> वर्डलिस्ट से सबडोमेन्स गेस करता है</li>
        <li><strong className="text-white">डेटाबेस:</strong> SQLite में सभी रिजल्ट्स स्टोर करता है</li>
        <li><strong className="text-white">विज़ुअलाइज़ेशन:</strong> d3.js ग्राफ़ जनरेट करता है</li>
        <li><strong className="text-white">API Integration:</strong> REST API से programmatic access मिलता है</li>
        <li><strong className="text-white">Multi-threading:</strong> Go की concurrency से parallel data collection</li>
        <li><strong className="text-white">Plugin System:</strong> Custom data sources add कर सकते हो</li>
        <li><strong className="text-white">SQLite Storage:</strong> सारा data structured database में store होता है</li>
        <li><strong className="text-white">JSON Export:</strong> Programmatic processing के लिए structured output</li>
        <li><strong className="text-white">Wordlists:</strong> Built-in wordlists plus custom wordlist support</li>
        <li><strong className="text-white">Intel Module:</strong> WHOIS, ASN, और network information gathering</li>
        <li><strong className="text-white">Track Module:</strong> समय के साथ changes track करना</li>
        <li><strong className="text-white">DB Module:</strong> Database management और previous scans access</li>
        <li><strong className="text-white">Viz Module:</strong> Interactive graph visualization (d3.js, Graphviz, JSON)</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Amass प्री-इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो कई तरीकों से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="Amass इंस्टॉलेशन"
        code={`# apt से इंस्टॉल (सबसे आसान):
sudo apt update
sudo apt install amass

# Go से इंस्टॉल (नवीनतम वर्जन):
go install -v github.com/owasp-amass/amass/v4/...@master

# Snap से:
sudo snap install amass

# Docker से:
docker pull owasp/amass
docker run -it owasp/amass amass enum -d example.com

# सोर्स से बिल्ड:
git clone https://github.com/owasp-amass/amass.git
cd amass
go install ./...

# वर्जन चेक:
amass -version

# सभी कमांड्स देखें:
amass -help`}
      />

      <h2>Basic Usage</h2>
      <p>
        Amass का बेसिक इस्तेमाल बहुत आसान है — बस डोमेन दो और यह सबडोमेन्स ढूंढ लेगा।
      </p>
      <CodeBlock
        title="Amass बेसिक कमांड्स"
        code={`# पैसिव सबडोमेन डिस्कवरी:
amass enum -passive -d target.com

# एक्टिव स्कैन (DNS रिज़ॉल्यूशन के साथ):
amass enum -d target.com

# ब्रूट फोर्स:
amass enum -d target.com -brute

# वर्बोज़ आउटपुट:
amass enum -v -d target.com

# फाइल में सेव:
amass enum -d target.com -o subdomains.txt

# JSON आउटपुट:
amass enum -d target.com -json output.json

# कई डोमेन्स:
amass enum -dL domains.txt -o all_subs.txt`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Flag</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">enum</td><td className="py-2 px-3">एन्यूमरेशन मोड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d</td><td className="py-2 px-3">टार्गेट डोमेन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-dL</td><td className="py-2 px-3">डोमेन लिस्ट फाइल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-passive</td><td className="py-2 px-3">पैसिव मोड (कोई रिक्वेस्ट नहीं)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-brute</td><td className="py-2 px-3">ब्रूट फोर्स इनेबल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-w</td><td className="py-2 px-3">कस्टम वर्डलिस्ट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o</td><td className="py-2 px-3">आउटपुट फाइल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-json</td><td className="py-2 px-3">JSON आउटपुट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">वर्बोज़ आउटपुट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-src</td><td className="py-2 px-3">सोर्स दिखाएं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-ip</td><td className="py-2 px-3">IP एड्रेस रिज़ॉल्व करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-config</td><td className="py-2 px-3">कॉन्फ़िग फाइल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-timeout</td><td className="py-2 px-3">टाइमआउट (मिनट)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-max-dns-queries</td><td className="py-2 px-3">मैक्सिमम DNS क्वेरीज़</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-dir</td><td className="py-2 px-3">आउटपुट डायरेक्ट्री</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Passive Enumeration</h2>
      <p>
        पैसिव एन्यूमरेशन में Amass टार्गेट को कोई रिक्वेस्ट नहीं भेजता। यह थर्ड-पार्टी डेटा सोर्सेज़ से जानकारी इकट्ठा करता है — VirusTotal, Shodan, Censys, Certificate Transparency लॉग्स सब। यह सबसे सुरक्षित तरीका है क्योंकि टार्गेट को पता नहीं चलता।
      </p>
      <CodeBlock
        title="पैसिव एन्यूमरेशन"
        code={`# बेसिक पैसिव स्कैन:
amass enum -passive -d target.com

# सोर्सेज़ के साथ:
amass enum -passive -d target.com -src

# कई डोमेन्स:
amass enum -passive -dL domains.txt

# फाइल में सेव:
amass enum -passive -d target.com -o passive_subs.txt

# JSON में:
amass enum -passive -d target.com -json passive.json

# वर्बोज़:
amass enum -v -passive -d target.com

# नोट: पैसिव मोड में ब्रूट फोर्स काम नहीं करता
# सिर्फ डेटा सोर्सेज़ से मिले सबडोमेन्स आएंगे`}
      />

      <h2>Active Enumeration</h2>
      <p>
        एक्टिव एन्यूमरेशन में Amass सीधे DNS सर्वर्स से रिज़ॉल्यूशन करता है, ज़ोन ट्रांसफर ट्राई करता है, और ब्रूट फोर्स तकनीकें इस्तेमाल करता है। यह ज़्यादा रिजल्ट्स देता है लेकिन टार्गेट को पता चल सकता है।
      </p>
      <CodeBlock
        title="एक्टिव एन्यूमरेशन"
        code={`# एक्टिव स्कैन (DNS रिज़ॉल्यूशन):
amass enum -d target.com

# ब्रूट फोर्स के साथ:
amass enum -d target.com -brute

# कस्टम वर्डलिस्ट:
amass enum -d target.com -brute -w /usr/share/wordlists/subdomains.txt

# सोर्सेज़ दिखाएं:
amass enum -d target.com -src

# IP रिज़ॉल्व करें:
amass enum -d target.com -ip

# सबनेट डिस्कवरी:
amass enum -d target.com -asn 12345

# स्पेसिफिक DNS सर्वर:
amass enum -d target.com -r 8.8.8.8

# मैक्सिमम DNS क्वेरीज़ लिमिट:
amass enum -d target.com -max-dns-queries 1000`}
      />

      <h2>Database Management</h2>
      <p>
        Amass सभी रिजल्ट्स को SQLite डेटाबेस में स्टोर करता है। आप बाद में इन रिजल्ट्स को देख, एक्सपोर्ट, और एनालाइज़ कर सकते हैं।
      </p>
      <CodeBlock
        title="डेटाबेस कमांड्स"
        code={`# सेव्ड रिजल्ट्स देखें:
amass db -d target.com

# सिर्फ नाम:
amass db -d target.com -names

# JSON एक्सपोर्ट:
amass db -d target.com -json export.json

# डेटाबेस की जानकारी:
amass db -d target.com -show

# सभी डोमेन्स के रिजल्ट्स:
amass db -names

# आउटपुट डायरेक्ट्री स्पेसिफाई:
amass db -d target.com -dir /path/to/output`}
      />

      <h2>Configuration</h2>
      <p>
        Amass को और पावरफुल बनाने के लिए API keys कॉन्फ़िग कर सकते हैं। बिना keys के भी काम करता है लेकिन कुछ सोर्सेज़ काम नहीं करेंगे।
      </p>
      <CodeBlock
        title="API Keys कॉन्फ़िगरेशन"
        code={`# कॉन्फ़िग फाइल लोकेशन:
# ~/.config/amass/config.ini

# कॉन्फ़िग फाइल बनाएं:
mkdir -p ~/.config/amass
cat > ~/.config/amass/config.ini << 'EOF'
# VirusTotal API key:
[data_sources.VirusTotal]
apikey = YOUR_VIRUSTOTAL_API_KEY

# Shodan API key:
[data_sources.Shodan]
apikey = YOUR_SHODAN_API_KEY

# Censys API:
[data_sources.Censys]
apikey = YOUR_CENSYS_API_ID
secret = YOUR_CENSYS_API_SECRET

# SecurityTrails:
[data_sources.SecurityTrails]
apikey = YOUR_SECURITYTRAILS_API_KEY
EOF

# कॉन्फ़िग के साथ रन करें:
amass enum -d target.com -config ~/.config/amass/config.ini

# नोट: बिना API keys के भी काम करता है
# लेकिन कम डेटा सोर्सेज़ उपलब्ध होंगे`}
      />

      <h2>Visualization</h2>
      <p>
        Amass d3.js ग्राफ़ जनरेट कर सकता है जो सबडोमेन्स और उनके रिलेशनशिप्स को विज़ुअलाइज़ करता है।
      </p>
      <CodeBlock
        title="ग्राफ़ विज़ुअलाइज़ेशन"
        code={`# ग्राफ़ डेटा जनरेट:
amass viz -d target.com

# सभी फ़ॉर्मेट्स:
amass viz -d target.com -o graph.html

# D3.js ग्राफ़:
amass viz -d target.com -d3

# ओपन सोर्स इंटेल:
amass viz -d target.com -o graph.json -json

# नोट: ग्राफ़ देखने के लिए ब्राउज़र में ओपन करें
# नोड्स = सबडोमेन्स, एजेस = रिलेशनशिप्स`}
      />

      <h2>Wordlist Customization</h2>
      <p>
        Amass की brute force capability को wordlists customize करके बेहतर बना सकते हो। Default wordlist अच्छा है लेकिन industry-specific words add करने से ज़्यादा results मिलते हैं।
      </p>
      <CodeBlock
        title="Wordlist Management"
        code={`# Default wordlist location:
# /usr/share/amass/wordlists/

# Custom wordlist create करो:
cat > custom_subs.txt << 'EOF'
admin
dev
staging
test
api
mail
vpn
portal
app
beta
demo
internal
intranet
extranet
cloud
cdn
ftp
ssh
db
database
EOF

# Custom wordlist use करो:
amass enum -d target.com -brute -w custom_subs.txt

# Multiple wordlists merge करो:
cat wordlist1.txt wordlist2.txt | sort -u > merged.txt
amass enum -d target.com -brute -w merged.txt

# Industry-specific words add करो:
# Finance: banking, payments, wallet, transactions
# Healthcare: patient, emr, ehr, fhir, hl7
# E-commerce: shop, cart, checkout, payment, orders`}
      />

      <h2>OWASP Amass Pro vs Community</h2>
      <p>
        Amass दो वर्जन्स में आता है — Community (फ्री) और Pro (पेड)। Community वर्जन में बेसिक फीचर्स हैं जबकि Pro वर्जन में एडवांस्ड फीचर्स और ज़्यादा डेटा सोर्सेज़ हैं।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Community</th>
              <th className="text-left py-2 px-3 text-neon-green">Pro</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">प्राइस</td><td className="py-2 px-3">फ्री</td><td className="py-2 px-3">पेड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">डेटा सोर्सेज़</td><td className="py-2 px-3">30+</td><td className="py-2 px-3">50+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ब्रूट फोर्स</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">विज़ुअलाइज़ेशन</td><td className="py-2 px-3">बेसिक</td><td className="py-2 px-3">एडवांस्ड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">कमर्शियल यूज़</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">सपोर्ट</td><td className="py-2 px-3">कम्युनिटी</td><td className="py-2 px-3">प्राथमिकता</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Pipeline Workflows</h2>
      <p>
        Amass को दूसरे टूल्स के साथ पाइपलाइन में इस्तेमाल करना सबसे अच्छा है। यह बग बाउंटी हंटर्स का स्टैंडर्ड वर्कफ़्लो है।
      </p>
      <CodeBlock
        title="Amass + Nmap कॉम्बो"
        code={`# Amass से सबडोमेन्स ढूंढो, Nmap से पोर्ट स्कैन करो:
amass enum -d target.com | nmap -iL - -sV

# स्टेप-बाय-स्टेप:
amass enum -d target.com -o subs.txt
nmap -iL subs.txt -sV -oN nmap_results.txt

# स्पेसिफिक पोर्ट्स:
amass enum -d target.com | nmap -iL - -p 80,443,8080`}
      />
      <CodeBlock
        title="Amass + httpx + nuclei"
        code={`# कंप्लीट रेकन पाइपलाइन:
# स्टेप 1: सबडोमेन्स ढूंढो
amass enum -d target.com -o subs.txt

# स्टेप 2: लाइव सबडोमेन्स चेक करो
httpx -l subs.txt -silent > live.txt

# स्टेप 3: वल्नरेबिलिटी स्कैन
nuclei -l live.txt -o vulns.txt

# वन-लाइनर:
amass enum -d target.com | httpx -silent | nuclei`}
      />
      <CodeBlock
        title="Amass + Subfinder कॉम्बो"
        code={`# दोनों टूल्स से मैक्सिमम सबडोमेन्स:
amass enum -passive -d target.com > amass_subs.txt
subfinder -d target.com -silent > subfinder_subs.txt
cat amass_subs.txt subfinder_subs.txt | sort -u > all_subs.txt

# स्क्रिप्ट बनाओ:
#!/bin/bash
DOMAIN=$1
echo "Amass से स्कैन हो रहा है..."
amass enum -passive -d $DOMAIN > /tmp/amass.txt
echo "Subfinder से स्कैन हो रहा है..."
subfinder -d $DOMAIN -silent > /tmp/subfinder.txt
echo "रिजल्ट्स मिला रहे हैं..."
cat /tmp/amass.txt /tmp/subfinder.txt | sort -u > \${DOMAIN}_subs.txt
echo "$(wc -l < \${DOMAIN}_subs.txt) यूनिक सबडोमेन्स मिले!"`}
      />

      <h2>Scripting & Automation</h2>
      <p>
        Amass को स्क्रिप्ट्स में इस्तेमाल करके ऑटोमेटेड रेकन सेटअप बना सकते हैं।
      </p>
      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट"
        code={`#!/bin/bash
# ऑटोमेटेड रेकन स्क्रिप्ट
DOMAIN=$1
OUTPUT_DIR="recon_$DOMAIN"

mkdir -p $OUTPUT_DIR

echo "[*] Amass पैसिव स्कैन..."
amass enum -passive -d $DOMAIN > $OUTPUT_DIR/passive.txt

echo "[*] Amass एक्टिव स्कैन..."
amass enum -d $DOMAIN -brute > $OUTPUT_DIR/active.txt

echo "[*] रिजल्ट्स मिला रहे हैं..."
cat $OUTPUT_DIR/passive.txt $OUTPUT_DIR/active.txt | sort -u > $OUTPUT_DIR/all_subs.txt

echo "[*] लाइव चेक..."
httpx -l $OUTPUT_DIR/all_subs.txt -silent > $OUTPUT_DIR/live.txt

TOTAL=$(wc -l < $OUTPUT_DIR/all_subs.txt)
LIVE=$(wc -l < $OUTPUT_DIR/live.txt)
echo "[+] कुल सबडोमेन्स: $TOTAL"
echo "[+] लाइव: $LIVE"`}
      />
      <CodeBlock
        title="क्रॉन जॉब - रेगुलर स्कैन"
        code={`# क्रॉन में डेली स्कैन सेट करें:
# crontab -e

# हर रात 2 बजे स्कैन:
0 2 * * * /path/to/recon.sh target.com >> /var/log/amass.log 2>&1

# हर हफ़्ते:
0 3 * * 1 /path/to/weekly_recon.sh >> /var/log/amass_weekly.log 2>&1

# कई डोमेन्स के लिए:
while read domain; do
    amass enum -d $domain -o results/$domain.txt
done < domains.txt`}
      />

      <h2>Comparison Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">टूल</th>
              <th className="text-left py-2 px-3 text-neon-green">सोर्सेज़</th>
              <th className="text-left py-2 px-3 text-neon-green">स्पीड</th>
              <th className="text-left py-2 px-3 text-neon-green">ब्रूट फोर्स</th>
              <th className="text-left py-2 px-3 text-neon-green">विज़ुअलाइज़ेशन</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Amass</td><td className="py-2 px-3">50+</td><td className="py-2 px-3">तेज़</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">d3.js ग्राफ़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Subfinder</td><td className="py-2 px-3">30+</td><td className="py-2 px-3">बहुत तेज़</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DNSRecon</td><td className="py-2 px-3">कम</td><td className="py-2 px-3">मध्यम</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Recon-ng</td><td className="py-2 px-3">20+</td><td className="py-2 px-3">मध्यम</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">रिपोर्ट</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">knockpy</td><td className="py-2 px-3">कम</td><td className="py-2 px-3">तेज़</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-4 mt-4">
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">समस्या: "No results found"</h4>
          <p className="text-gray-400 text-sm">पैसिव मोड में कोई रिजल्ट नहीं आ रहा।</p>
          <p className="text-gray-300 text-sm mt-2">समाधान: API keys कॉन्फ़िग करें। बिना keys के बहुत कम सोर्सेज़ काम करते हैं। `-v` फ्लैग से देखें कि कौन से सोर्स काम कर रहे हैं।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">समस्या: "Rate limit exceeded"</h4>
          <p className="text-gray-400 text-sm">API रेट लिमिट क्रॉस हो गई।</p>
          <p className="text-gray-300 text-sm mt-2">समाधान: `-timeout` बढ़ाएं या `-max-dns-queries` कम करें। कुछ देर बाद दोबारा ट्राई करें।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">समस्या: "Connection timeout"</h4>
          <p className="text-gray-400 text-sm">DNS रिज़ॉल्यूशन टाइमआउट हो रहा है।</p>
          <p className="text-gray-300 text-sm mt-2">समाधान: `-r 8.8.8.8` से DNS सर्वर बदलें। नेटवर्क कनेक्शन चेक करें।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">समस्या: "Database locked"</h4>
          <p className="text-gray-400 text-sm">डेटाबेस लॉक हो गया है।</p>
          <p className="text-gray-300 text-sm mt-2">समाधान: पिछला Amass प्रोसेस बंद करें। या `-dir` से अलग आउटपुट डायरेक्ट्री दें।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">समस्या: "Memory error"</h4>
          <p className="text-gray-400 text-sm">बड़े डोमेन्स पर मेमोरी एरर।</p>
          <p className="text-gray-300 text-sm mt-2">समाधान: `-max-dns-queries` कम करें। स्कैन को छोटे हिस्सों में तोड़ें।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">समस्या: "API key invalid"</h4>
          <p className="text-gray-400 text-sm">API key काम नहीं कर रही।</p>
          <p className="text-gray-300 text-sm mt-2">समाधान: config.ini में key format चेक करो। Extra spaces या quotes हटाओ। Key regenerate करो provider की website से।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">समस्या: "Scan takes too long"</h4>
          <p className="text-gray-400 text-sm">स्कैन बहुत धीमा है और घंटों लग रहे हैं।</p>
          <p className="text-gray-300 text-sm mt-2">समाधान: `-passive` मोड use करो पहले। `-max-dns-queries 500` से limit करो। `-timeout 10` से timeout कम करो। ब्रूट फोर्स disable करो अगर ज़रूरी नहीं।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">समस्या: "Duplicate results"</h4>
          <p className="text-gray-400 text-sm">बहुत सारे duplicate subdomains आ रहे हैं।</p>
          <p className="text-gray-300 text-sm mt-2">समाधान: `sort -u` से unique results निकालो। `-dir` flag से fresh database use करो। पुरानी database delete करो।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">समस्या: "No results found"</h4>
          <p className="text-gray-400 text-sm">कोई subdomain नहीं मिल रहा।</p>
          <p className="text-gray-300 text-sm mt-2">समाधान: पहले passive mode try करो। API keys configure करो — बिना keys के limited results आते हैं। Domain spelling check करो। Firewall block कर सकता है — VPN try करो।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">समस्या: "Rate limited by API"</h4>
          <p className="text-gray-400 text-sm">API rate limit exceed हो गया।</p>
          <p className="text-gray-300 text-sm mt-2">समाधान: `-max-dns-queries` कम करो। Paid API keys use करो ज़्यादा limits के लिए। Scan को छोटे batches में तोड़ो।</p>
        </div>
      </div>

      <h2>Legal and Ethical Considerations</h2>
      <p>
        Amass एक powerful reconnaissance tool है जिसे responsible use करना ज़रूरी है। Unauthorized reconnaissance भारतीय कानून के तहत अपराध है। हमेशा written authorization लो और scope define करो।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Written Authorization:</strong> बिना permission के कभी भी scan न करो — email या contract ज़रूरी है</li>
        <li><strong className="text-white">Scope Definition:</strong> कौन से domains scan करने हैं यह पहले से define करो</li>
        <li><strong className="text-white">Passive First:</strong> पहले passive mode use करो — active scan से पहले client को inform करो</li>
        <li><strong className="text-white">Data Handling:</strong> Scan results sensitive data है — encrypted store करो और authorized लोगों को ही share करो</li>
        <li><strong className="text-white">Bug Bounty Rules:</strong> Bug bounty programs में scope और rules follow करो — out-of-scope targets पर scan न करो</li>
        <li><strong className="text-white">Rate Limiting:</strong> Aggressive scanning से target की services down हो सकती हैं — responsible rate रखो</li>
        <li><strong className="text-white">Disclosure Policy:</strong> Vulnerabilities मिलने पर responsible disclosure follow करो — direct exploit न करो</li>
        <li><strong className="text-white">Documentation:</strong> सभी scans document करो — authorization, scope, results, timeline सब record रखो</li>
      </ul>

      <h2>Detection and Defense</h2>
      <p>
        अगर आप डिफेंडर हैं तो Amass जैसे टूल्स से बचने के लिए ये उपाय करें:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">टेक्निक</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करें</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DNS लॉगिंग</td><td className="py-2 px-3">सभी DNS क्वेरीज़ लॉग करें और मॉनिटर करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">रेट लिमिटिंग</td><td className="py-2 px-3">DNS सर्वर पर रेट लिमिट लगाएं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ज़ोन ट्रांसफर</td><td className="py-2 px-3">ज़ोन ट्रांसफर डिसेबल करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">सबडोमेन मिनिमलिज़्म</td><td className="py-2 px-3">ज़रूरी सबडोमेन्स ही रखें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">WAF</td><td className="py-2 px-3">Web Application Firewall लगाएं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Certificate Monitoring</td><td className="py-2 px-3">CT logs monitor करो — unauthorized certificates detect होंगे</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Subdomain Takeover</td><td className="py-2 px-3">Unused subdomains हटाओ — takeover attacks prevent होंगे</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Lab Environment</h2>
      <p>
        Amass सीखने के लिए अपना लैब बनाएं। कभी भी प्रोडक्शन सिस्टम पर प्रैक्टिस न करें।
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# अपना DNS सर्वर बनाएं:
sudo apt install bind9

# टेस्ट ज़ोन फाइल बनाएं:
sudo nano /etc/bind/db.lab.local

# Amass से स्कैन करें:
amass enum -d lab.local

# अपना सबडोमेन सर्वर:
# Python HTTP सर्वर:
python3 -m http.server 80

# कई सबडोमेन्स बनाएं:
# admin.lab.local
# dev.lab.local
# staging.lab.local

# Amass से चेक करें कि सब मिल रहे हैं:`}
      />

      <h2>Common Attack Scenarios</h2>
      <p>
        Amass के results से क्या-क्या attack vectors मिल सकते हैं, यह समझना ज़रूरी है। हर subdomain एक potential attack surface है।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Scenario</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या मिलता है</th>
              <th className="text-left py-2 px-3 text-neon-green">Risk Level</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Staging Servers</td><td className="py-2 px-3">staging.target.com — production copy with weaker security</td><td className="py-2 px-3 text-red-400">High</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Test Environments</td><td className="py-2 px-3">test.target.com — debug mode enabled, default credentials</td><td className="py-2 px-3 text-red-400">High</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Admin Panels</td><td className="py-2 px-3">admin.target.com — management interface exposed</td><td className="py-2 px-3 text-red-400">Critical</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Forgotten Subdomains</td><td className="py-2 px-3">old.target.com — unmaintained, vulnerable software</td><td className="py-2 px-3 text-yellow-400">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Cloud Misconfig</td><td className="py-2 px-3">s3.target.com — exposed cloud storage buckets</td><td className="py-2 px-3 text-red-400">Critical</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">API Endpoints</td><td className="py-2 px-3">api.target.com — undocumented APIs, no rate limiting</td><td className="py-2 px-3 text-yellow-400">Medium</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Third-party Services</td><td className="py-2 px-3">vendor.target.com — third-party integrations with weaker security</td><td className="py-2 px-3 text-yellow-400">Medium</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Advanced Techniques</h2>
      <p>
        Amass के एडवांस्ड फीचर्स इस्तेमाल करके और गहरी रेकन कर सकते हैं।
      </p>
      <CodeBlock
        title="एडवांस्ड टेक्निक्स"
        code={`# ASN से सबनेट डिस्कवरी:
amass enum -d target.com -asn 12345

# स्पेसिफिक सोर्सेज़:
amass enum -d target.com -src

# कस्टम रिज़ॉल्वर्स:
amass enum -d target.com -r 8.8.8.8,1.1.1.1

# टाइमआउट बढ़ाएं:
amass enum -d target.com -timeout 30

# मैक्सिमम DNS क्वेरीज़:
amass enum -d target.com -max-dns-queries 5000

# कई डोमेन्स एक साथ:
amass enum -dL domains.txt -o all_results.txt

# सबडोमेन ऑफ सबडोमेन:
amass enum -d sub.target.com`}
      />
      <CodeBlock
        title="Source-Specific Enumeration"
        code={`# सिर्फ Certificate Transparency:
amass enum -d target.com -src -include CertificateTransparency

# सिर्फ passive sources (no DNS):
amass enum -passive -d target.com -include AlienVault,SecurityTrails

# Specific sources exclude करो:
amass enum -d target.com -exclude Shodan,Censys

# Available sources list:
amass enum -d target.com -src 2>&1 | grep "data source"

# API-based sources (keys required):
# VirusTotal, Shodan, Censys, SecurityTrails
# config.ini में keys add करो पहले`}
      />
      <CodeBlock
        title="Advanced Pipeline Workflows"
        code={`# Complete recon pipeline:
#!/bin/bash
TARGET=$1
mkdir -p recon_$TARGET

# Step 1: Passive enumeration
amass enum -passive -d $TARGET -o recon_$TARGET/passive.txt

# Step 2: Active enumeration
amass enum -d $TARGET -brute -o recon_$TARGET/active.txt

# Step 3: Merge and deduplicate
cat recon_$TARGET/passive.txt recon_$TARGET/active.txt | sort -u > recon_$TARGET/all.txt

# Step 4: Live host check
httpx -l recon_$TARGET/all.txt -silent > recon_$TARGET/live.txt

# Step 5: Port scan
nmap -iL recon_$TARGET/live.txt -T4 -oN recon_$TARGET/ports.txt

# Step 6: Vulnerability scan
nuclei -l recon_$TARGET/live.txt -o recon_$TARGET/vulns.txt

# Step 7: Report
echo "=== Recon Report: $TARGET ==="
echo "Total subdomains: $(wc -l < recon_$TARGET/all.txt)"
echo "Live hosts: $(wc -l < recon_$TARGET/live.txt)"
echo "Vulnerabilities: $(wc -l < recon_$TARGET/vulns.txt)"`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-4 mt-4">
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">Q: Amass कितना सुरक्षित है?</h4>
          <p className="text-gray-400 text-sm">पैसिव मोड में बहुत सुरक्षित — टार्गेट को कोई रिक्वेस्ट नहीं जाती। एक्टिव मोड में DNS लॉग्स में दिख सकता है।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">Q: API keys ज़रूरी हैं?</h4>
          <p className="text-gray-400 text-sm">नहीं, बिना keys के भी काम करता है। लेकिन API keys से ज़्यादा सोर्सेज़ और ज़्यादा रिजल्ट्स मिलते हैं।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">Q: Amass vs Subfinder — कौन बेहतर?</h4>
          <p className="text-gray-400 text-sm">दोनों अच्छे हैं। Amass ज़्यादा कंप्लीट है (विज़ुअलाइज़ेशन, डेटाबेस), Subfinder ज़्यादा तेज़ है। दोनों मिलाकर इस्तेमाल करो।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">Q: क्या Amass प्रोडक्शन में इस्तेमाल कर सकते हैं?</h4>
          <p className="text-gray-400 text-sm">हाँ, OWASP का ऑफिशियल प्रोजेक्ट है। कमर्शियल यूज़ के लिए Community वर्जन फ्री है।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">Q: Amass कितना तेज़ है?</h4>
          <p className="text-gray-400 text-sm">Go में लिखा गया है, बहुत तेज़ है। लेकिन 50+ सोर्सेज़ से डेटा कलेक्ट करने में समय लगता है — 5-30 मिनट।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">Q: क्या Amass IPv6 सपोर्ट करता है?</h4>
          <p className="text-gray-400 text-sm">हाँ, Amass IPv6 AAAA रिकॉर्ड्स भी रिज़ॉल्व करता है।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">Q: Amass की database कहाँ स्टोर होती है?</h4>
          <p className="text-gray-400 text-sm">SQLite database `~/.config/amass/` directory में स्टोर होती है। `-dir` flag से custom directory specify कर सकते हो।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">Q: क्या Amass recursive enumeration करता है?</h4>
          <p className="text-gray-400 text-sm">हाँ, Amass subdomain of subdomain भी ढूंढ सकता है। `amass enum -d sub.target.com` से deeper enumeration करो।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">Q: Amass vs Subfinder — कौन बेहतर है?</h4>
          <p className="text-gray-400 text-sm">दोनों अच्छे हैं। Amass ज़्यादा कंप्लीट है (विज़ुअलाइज़ेशन, डेटाबेस), Subfinder ज़्यादा तेज़ है। दोनों मिलाकर इस्तेमाल करो — मैक्सिमम coverage मिलेगी।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">Q: क्या Amass cloud environments scan कर सकता है?</h4>
          <p className="text-gray-400 text-sm">हाँ, Amass AWS, Azure, GCP के cloud assets भी discover कर सकता है। Cloud-specific data sources configure करो।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">Q: Amass कितने domains एक साथ scan कर सकता है?</h4>
          <p className="text-gray-400 text-sm">Technically unlimited। `-dL` flag से domains file pass करो। लेकिन resources के हिसाब से 50-100 domains तक practical limit है।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">Q: क्या Amass real-time monitoring कर सकता है?</h4>
          <p className="text-gray-400 text-sm">Directly नहीं, लेकिन cron job setup करके daily scans run करो और `amass track` से changes detect करो।</p>
        </div>
      </div>

      <h2>Real-World Use Cases</h2>
      <div className="space-y-3 mt-4">
        {[
          { step: '1', title: 'Bug Bounty Recon', desc: 'टार्गेट ऑर्गेनाइज़ेशन के सभी सबडोमेन्स ढूंढो — हर सबडोमेन एक नया अटैक सर्फ़ेस है। Amass + Subfinder + httpx + nuclei कॉम्बो इस्तेमाल करो।' },
          { step: '2', title: 'Red Team Infrastructure', desc: 'क्लाइंट के पूरे डिजिटल फुटप्रिंट को मैप करो — सबडोमेन्स, IP एड्रेसेज़, ASN, सबनेट्स सब। अटैक प्लान बनाने में मदद मिलती है।' },
          { step: '3', title: 'Asset Discovery', desc: 'ऑर्गेनाइज़ेशन के अपने एसेट्स ट्रैक करो — भूले हुए सबडोमेन्स, टेस्ट सर्वर्स, स्टेजिंग एनवायरनमेंट्स। ये अक्सर सबसे कमज़ोर होते हैं।' },
          { step: '4', title: 'Shadow IT Detection', desc: 'ऑर्गेनाइज़ेशन में बिना IT विभाग की जानकारी के बनाए गए सबडोमेन्स और सर्वर्स खोजो — सिक्योरिटी रिस्क कम होता है।' },
          { step: '5', title: 'Incident Response', desc: 'सिक्योरिटी इंसिडेंट के बाद टार्गेट का पूरा मैप बनाओ — कौन से सबडोमेन्स एक्सपोज़्ड हैं, कहाँ और वल्नरेबिलिटीज़ हो सकती हैं।' },
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

      <h2 className="mt-8">Data Sources Breakdown</h2>
      <p>
        Amass 50+ डेटा सोर्सेज़ से डेटा कलेक्ट करता है। यहाँ सबसे इम्पोर्टेंट सोर्सेज़ हैं:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">सोर्स</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या मिलता है</th>
              <th className="text-left py-2 px-3 text-neon-green">API Key ज़रूरी?</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Certificate Transparency</td><td className="py-2 px-3">SSL सर्टिफ़िकेट्स से सबडोमेन्स</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">VirusTotal</td><td className="py-2 px-3">सबडोमेन्स, DNS रिकॉर्ड्स</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Shodan</td><td className="py-2 px-3">सबडोमेन्स, सर्विसेज़, पोर्ट्स</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Censys</td><td className="py-2 px-3">सर्टिफ़िकेट्स, होस्ट्स</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SecurityTrails</td><td className="py-2 px-3">DNS हिस्ट्री, सबडोमेन्स</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">AlienVault OTX</td><td className="py-2 px-3">सबडोमेन्स, IP रिलेशन्स</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DNS Brute Force</td><td className="py-2 px-3">वर्डलिस्ट से सबडोमेन्स</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Reverse DNS</td><td className="py-2 px-3">IP से डोमेन नाम</td><td className="py-2 px-3">नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Wayback Machine</td><td className="py-2 px-3">हिस्टोरिकल URL और सबडोमेन्स</td><td className="py-2 px-3">नहीं</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Performance Tuning</h2>
      <p>
        Amass को बड़े डोमेन्स पर चलाते समय परफ़ॉर्मेंस optimize करना ज़रूरी है। सही settings से स्कैन तेज़ होता है और resources कम लगते हैं।
      </p>
      <CodeBlock
        title="Performance Optimization"
        code={`# DNS queries limit करो (तेज़ स्कैन):
amass enum -d target.com -max-dns-queries 200

# Timeout कम करो:
amass enum -d target.com -timeout 10

# सिर्फ passive mode (सबसे तेज़):
amass enum -passive -d target.com

# Specific sources use करो (सब सोर्सेज़ नहीं):
amass enum -d target.com -src -include Alienvault,CertificateTransparency

# Specific sources exclude करो:
amass enum -d target.com -exclude Shodan,VirusTotal

# Database cache use करो:
# पहले का स्कैन data reuse होता है
# Fresh scan के लिए database delete करो

# Parallel domains:
# domains.txt में एक per line:
amass enum -dL domains.txt -max-dns-queries 500`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Amass के results को analyze करके meaningful reports बनाना ज़रूरी है। Clients को attack surface की clear picture दिखाने के लिए structured reports चाहिए।
      </p>
      <CodeBlock
        title="Report Generation Script"
        code={`#!/bin/bash
# Amass report generator
DOMAIN=$1
OUTPUT_DIR="report_$DOMAIN"

mkdir -p $OUTPUT_DIR

# Full scan:
amass enum -d $DOMAIN -o $OUTPUT_DIR/subdomains.txt -json $OUTPUT_DIR/details.json

# Statistics:
TOTAL=$(wc -l < $OUTPUT_DIR/subdomains.txt)
echo "=== Amass Report: $DOMAIN ==="
echo "Total Subdomains: $TOTAL"
echo "Date: $(date)"
echo ""

# IP resolution:
amass enum -d $DOMAIN -ip -o $OUTPUT_DIR/with_ips.txt

# Live check:
cat $OUTPUT_DIR/subdomains.txt | httpx -silent > $OUTPUT_DIR/live.txt
LIVE=$(wc -l < $OUTPUT_DIR/live.txt)
echo "Live Subdomains: $LIVE"

# Per-source breakdown:
amass enum -passive -d $DOMAIN -src | awk '{print $1}' | sort | uniq -c | sort -rn > $OUTPUT_DIR/sources.txt

echo ""
echo "=== Top Sources ==="
head -10 $OUTPUT_DIR/sources.txt`}
      />
      <CodeBlock
        title="JSON Data Analysis"
        code={`# Amass JSON output analyze करो:
amass enum -d target.com -json output.json

# Python से parse करो:
python3 << 'PYEOF'
import json

with open("output.json") as f:
    for line in f:
        data = json.loads(line)
        name = data.get("name", "")
        domain = data.get("domain", "")
        addresses = data.get("addresses", [])
        sources = data.get("sources", [])
        print(f"  {name}.{domain}")
        for addr in addresses:
            print(f"    IP: {addr.get('ip', '')}")
        print(f"    Sources: {', '.join(sources)}")
PYEOF

# Unique IPs extract करो:
cat output.json | python3 -c "
import sys, json
ips = set()
for line in sys.stdin:
    data = json.loads(line)
    for addr in data.get('addresses', []):
        ips.add(addr.get('ip', ''))
for ip in sorted(ips):
    print(ip)
" > unique_ips.txt`}
      />

      <h2>Quick Reference Commands</h2>
      <p>
        Amass के सबसे ज़्यादा इस्तेमाल होने वाले commands का quick reference:
      </p>
      <CodeBlock
        title="Essential Commands"
        code={`# Basic passive enumeration:
amass enum -passive -d target.com

# Active enumeration with brute force:
amass enum -d target.com -brute

# Save to file with JSON:
amass enum -d target.com -o subs.txt -json details.json

# Show data sources:
amass enum -d target.com -src

# Multiple domains:
amass enum -dL domains.txt -o all_subs.txt

# IP resolution included:
amass enum -d target.com -ip

# Visualization:
amass viz -d target.com -d3

# Database management:
amass db -list  # List all scans
amass db -d target.com -show  # Show specific scan

# Intel gathering:
amass intel -d target.com -whois

# Track changes over time:
amass track -d target.com`}
      />

      <h2>Alternatives</h2>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Subfinder</strong> — पैसिव सबडोमेन डिस्कवरी के लिए सबसे तेज़</li>
        <li><strong className="text-white">DNSRecon</strong> — DNS enumeration और ज़ोन ट्रांसफर</li>
        <li><strong className="text-white">Recon-ng</strong> — फुल-फ़ीचर्ड वेब रेकन फ्रेमवर्क</li>
        <li><strong className="text-white">knockpy</strong> — सिंपल सबडोमेन ब्रूट फोर्स</li>
        <li><strong className="text-white">Sublist3r</strong> — पैसिव सबडोमेन डिस्कवरी</li>
        <li><strong className="text-white">MassDNS</strong> — हाई-परफ़ॉर्मेंस DNS रिज़ॉल्यूशन</li>
      </ul>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Amass + Subfinder कॉम्बो सबसे ज़्यादा सबडोमेन्स ढूंढता है — दोनों के results मिलाकर sort -u करो</li>
          <li>पहले passive mode चलाओ, फिर active — passive में stealth रहता है</li>
          <li>API keys configure करो — बिना keys के 50% से कम sources काम करते हैं</li>
          <li>httpx से live check करो, nuclei से vulnerability scan — complete recon pipeline</li>
          <li>JSON output use करो — parse करना आसान है और structured data मिलता है</li>
          <li>Cron job setup करो — daily scan से new subdomains automatically detect होंगे</li>
          <li>Database reuse करो — same domain बार-बार scan में previous data cache से आता है</li>
          <li>Wordlists customize करो — industry-specific words add करो brute force के लिए</li>
          <li>d3.js visualization से client presentation के लिए impressive graphs बनाओ</li>
          <li>Multiple domains scan करो — `-dL` flag से parent company के सभी domains एक साथ</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ अंतिम चेतावनी:</strong> Amass केवल अधिकृत सुरक्षा परीक्षण और शैक्षिक उद्देश्यों के लिए है। बिना अनुमति के किसी भी सिस्टम की रेकन करना भारतीय साइबर कानून के तहत अपराध है। अपने लैब में प्रैक्टिस करें या लिखित अनुमति लें। साइबर अपराध गंभीर परिणामों का कारण बन सकता है।
      </div>
    </TutorialLayout>
  )
}
