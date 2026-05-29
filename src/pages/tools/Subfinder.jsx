import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Subfinder() {
  return (
    <TutorialLayout
      title="subfinder"
      subtitle="पैसिव सबडोमेन डिस्कवरी — 30+ सोर्सेज़ से सबडोमेन्स कलेक्ट"
      icon="🔎"
      prev={{ to: '/tool/evil-winrm', label: 'evil-winrm' }}
      next={{ to: '/tool/ffuf', label: 'ffuf' }}
    >
      <h2>What is Subfinder?</h2>
      <p>
        Subfinder एक पैसिव सबडोमेन डिस्कवरी टूल है जो 30+ अलग-अलग सोर्सेज़ से सबडोमेन्स कलेक्ट करता है। यह VirusTotal, Shodan, Censys, ThreatCrowd, Certificate Transparency लॉग्स, DNSDumpster, और बहुत सारे ओपन सोर्स इंटेलिजेंस प्लेटफॉर्म्स से डेटा इकट्ठा करता है। Subfinder बग बाउंटी हंटर्स और सिक्योरिटी रिसर्चर्स के बीच सबसे पॉपुलर सबडोमेन डिस्कवरी टूल है।
      </p>
      <p>
        Subfinder Go में लिखा गया है ProjectDiscovery टीम द्वारा। यह पैसिव रेकन करता है — टार्गेट को सीधे कोई भी रिक्वेस्ट नहीं जाती। यह बहुत महत्वपूर्ण है क्योंकि एक्टिव स्कैनिंग से टार्गेट को पता चल सकता है कि उसे स्कैन किया जा रहा है। पैसिव रेकन में सारा डेटा पहले से मौजूद सोर्सेज़ से आता है — जैसे सर्च इंजन, सर्टिफिकेट ट्रांसपरेंसी लॉग्स, और थर्ड-पार्टी API।
      </p>
      <p>
        Subfinder की सबसे बड़ी खासियत यह है कि यह कई सोर्सेज़ से एक साथ सबडोमेन्स कलेक्ट करता है और डुप्लिकेट्स हटाकर यूनिक रिजल्ट्स देता है। इससे आपको ज़्यादा कंप्लीट रिजल्ट्स मिलते हैं। किसी भी एक सिंगल सोर्स से ज़्यादा सबडोमेन्स मिलते हैं। यह काली नेटहंटर में प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        Subfinder v2 में बहुत सुधार हुए हैं — बेहतर error handling, ज़्यादा सोर्सेज़ का सपोर्ट, JSON output, और multiple output formats। यह Go की concurrency का फायदा उठाकर सभी सोर्सेज़ से एक साथ रिक्वेस्ट भेजता है जिससे स्कैन बहुत तेज़ होता है। एक typical scan 30 सेकंड से 2 मिनट में पूरा हो जाता है।
      </p>
      <p>
        बग बाउंटी में सबडोमेन डिस्कवरी पहला और सबसे महत्वपूर्ण स्टेप है। जितने ज़्यादा सबडोमेन्स मिलेंगे, उतने ज़्यादा attack surface मिलेंगे। Subfinder यह काम बहुत तेज़ी और accuracy से करता है। यह tool हर bug bounty hunter के toolkit में होना चाहिए।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Subfinder केवल अधिकृत सुरक्षा परीक्षण और शोध के लिए उपयोग करें। बिना अनुमति के किसी भी डोमेन का रेकन करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत रेकन अपराध हो सकता है।
      </div>

      <h2>History of Subfinder</h2>
      <p>
        Subfinder को ProjectDiscovery टीम ने विकसित किया है। यह टीम साइबर सिक्योरिटी टूल्स बनाने के लिए प्रसिद्ध है — nuclei, httpx, naabu, katana जैसे कई लोकप्रिय टूल्स इन्हीं के बनाए हुए हैं। Subfinder का पहला संस्करण 2018 में रिलीज़ हुआ था।
      </p>
      <p>
        पहले सबडोमेन डिस्कवरी के लिए Sublist3r और knockpy जैसे टूल्स इस्तेमाल होते थे, लेकिन Subfinder ने सभी को पीछे छोड़ दिया क्योंकि यह ज़्यादा सोर्सेज़ सपोर्ट करता है, तेज़ है, और Go में लिखा होने के कारण क्रॉस-प्लेटफॉर्म है। Go की concurrency का फायदा उठाकर सभी सोर्सेज़ से एक साथ रिक्वेस्ट भेजता है।
      </p>
      <p>
        Subfinder v2 में बहुत सुधार हुए — बेहतर error handling, ज़्यादा सोर्सेज़, JSON output support, और provider-config.yaml से API key management। आज GitHub पर 10,000+ stars के साथ सबसे पॉपुलर सबडोमेन डिस्कवरी टूल है।
      </p>
      <p>
        Subfinder का डेवलपमेंट ProjectDiscovery की फिलॉसफी पर based है — modular, fast, और pipeline-friendly। हर नए release में नए सोर्सेज़ add होते हैं और bugs fix होते हैं। Community contributions भी accept होती हैं — आप अपना custom source भी add कर सकते हो। 2023 में Subfinder v2.6 में recursive enumeration add हुई जो subdomain-of-subdomain discovery करती है।
      </p>
      <p>
        Subfinder का architecture plugin-based है — हर source एक independent plugin है। नया source add करने के लिए Go interface implement करना होता है। यह design pattern code maintainability बढ़ाता है और community contributions आसान बनाता है। ProjectDiscovery ने subfinder के साथ-साथ httpx, nuclei, naabu जैसे tools भी बनाए हैं जो together एक complete recon pipeline बनाते हैं।
      </p>
      <p>
        Bug bounty community में Subfinder standard tool बन चुका है। HackerOne और Bugcrowd के top hunters इसे daily use करते हैं। कई bug bounty automation frameworks (जैसे rengine, automatize) Subfinder को default subdomain enumerator के रूप में integrate करते हैं। इसकी speed और accuracy इसे industry standard बनाती है।
      </p>

      <h2>How Subfinder Works?</h2>
      <p>
        Subfinder जब चलता है तो एक साथ सभी उपलब्ध सोर्सेज़ को क्वेरी करता है। हर सोर्स एक अलग Go routine में चलता है, इसलिए सभी सोर्सेज़ पैरेलल में रिक्वेस्ट भेजते हैं।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">सोर्स एग्रीगेशन:</strong> 30+ सोर्सेज़ से डेटा एकत्रित करना — VirusTotal, Shodan, Censys, CT लॉग्स</li>
        <li><strong className="text-white">पैरेलल प्रोसेसिंग:</strong> Go routines के ज़रिए सभी सोर्सेज़ एक साथ क्वेरी होते हैं</li>
        <li><strong className="text-white">डुप्लिकेट रिमूवल:</strong> सभी रिजल्ट्स में से डुप्लिकेट्स हटाए जाते हैं</li>
        <li><strong className="text-white">वैलिडेशन:</strong> रिजल्ट्स को सॉर्ट और क्लीन किया जाता है</li>
        <li><strong className="text-white">आउटपुट फ़ॉर्मेटिंग:</strong> फाइल या stdout में क्लीन आउटपुट दिया जाता है</li>
        <li><strong className="text-white">API Key Management:</strong> provider-config.yaml से keys manage होती हैं</li>
        <li><strong className="text-white">रिज़ॉल्यूशन:</strong> -r फ्लैग से सबडोमेन्स को रिज़ॉल्व भी कर सकता है</li>
        <li><strong className="text-white">Recursive Enumeration:</strong> मिले हुए सबडोमेन्स पर दोबारा स्कैन कर सकता है</li>
      </ul>

      <h2>Installation</h2>
      <CodeBlock
        title="Subfinder इंस्टॉलेशन"
        code={`# Go से इंस्टॉल (सबसे आसान):
go install -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest

# apt से (काली लिनक्स):
sudo apt update
sudo apt install subfinder

# snap से:
sudo snap install subfinder

# Docker से:
docker pull projectdiscovery/subfinder:latest
docker run projectdiscovery/subfinder:latest -d example.com

# Binary release से:
# https://github.com/projectdiscovery/subfinder/releases
# अपने OS के हिसाब से binary download करो

# वर्जन चेक:
subfinder -version

# सहायता:
subfinder -h`}
      />

      <h2>Basic Usage</h2>
      <CodeBlock
        title="Subfinder बेसिक कमांड्स"
        code={`# सिंपल सबडोमेन डिस्कवरी:
subfinder -d target.com

# वर्बोज़ आउटपुट:
subfinder -d target.com -v

# फाइल में सेव:
subfinder -d target.com -o subdomains.txt

# JSON आउटपुट:
subfinder -d target.com -oJ output.json

# कई डोमेन्स एक साथ:
subfinder -d domain1.com,domain2.com,domain3.com

# डोमेन लिस्ट फाइल से:
subfinder -dL domains.txt -o all_subs.txt

# सिर्फ सबडोमेन्स (कोई extra info नहीं):
subfinder -d target.com -silent

# पाइपलाइन में इस्तेमाल:
subfinder -d target.com -silent | httpx -silent

# Recursive enumeration:
subfinder -d target.com -recursive

# सभी सोर्सेज़ देखें:
subfinder -ls`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d domain</td><td className="py-2 px-3">टार्गेट डोमेन</td><td className="py-2 px-3 font-mono text-xs">-d example.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-dL file</td><td className="py-2 px-3">डोमेन लिस्ट फाइल</td><td className="py-2 px-3 font-mono text-xs">-dL domains.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o file</td><td className="py-2 px-3">आउटपुट फाइल</td><td className="py-2 px-3 font-mono text-xs">-o subs.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-oJ file</td><td className="py-2 px-3">JSON आउटपुट</td><td className="py-2 px-3 font-mono text-xs">-oJ output.json</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">वर्बोज़ आउटपुट</td><td className="py-2 px-3 font-mono text-xs">-v</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-silent</td><td className="py-2 px-3">सिर्फ सबडोमेन्स प्रिंट</td><td className="py-2 px-3 font-mono text-xs">-silent</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-all</td><td className="py-2 px-3">सभी सोर्सेज़ इस्तेमाल करो</td><td className="py-2 px-3 font-mono text-xs">-all</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-recursive</td><td className="py-2 px-3">रिकर्सिव एन्यूमरेशन</td><td className="py-2 px-3 font-mono text-xs">-recursive</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t threads</td><td className="py-2 px-3">थ्रेड्स की संख्या</td><td className="py-2 px-3 font-mono text-xs">-t 50</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-timeout sec</td><td className="py-2 px-3">टाइमआउट (सेकंड)</td><td className="py-2 px-3 font-mono text-xs">-timeout 30</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-max-time min</td><td className="py-2 px-3">मैक्सिमम स्कैन टाइम</td><td className="py-2 px-3 font-mono text-xs">-max-time 10</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-sources list</td><td className="py-2 px-3">स्पेसिफिक सोर्सेज़</td><td className="py-2 px-3 font-mono text-xs">-sources virustotal,shodan</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-exclude-sources</td><td className="py-2 px-3">सोर्सेज़ एक्सक्लूड करो</td><td className="py-2 px-3 font-mono text-xs">-exclude-sources dnsdumpster</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-config file</td><td className="py-2 px-3">कॉन्फ़िग फाइल</td><td className="py-2 px-3 font-mono text-xs">-config config.yaml</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-ls</td><td className="py-2 px-3">सभी सोर्सेज़ लिस्ट करो</td><td className="py-2 px-3 font-mono text-xs">-ls</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Supported Sources</h2>
      <p>
        Subfinder 30+ सोर्सेज़ सपोर्ट करता है। कुछ बिना API key के काम करते हैं, कुछ के लिए key ज़रूरी है।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">सोर्स</th>
              <th className="text-left py-2 px-3 text-neon-green">API Key</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">alienvault</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">OTX थ्रेट इंटेलिजेंस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">anubis</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">Anubis-DB</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">binaryedge</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">BinaryEdge इंटरनेट स्कैनिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">censys</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">Censys सर्टिफिकेट सर्च</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">certspotter</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">Certificate Transparency</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">chaos</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">ProjectDiscovery Chaos DB</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">commoncrawl</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">Common Crawl वेब आर्काइव</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">crtsh</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">crt.sh सर्टिफिकेट ट्रांसपरेंसी</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dnsdb</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">DNSDB DNS डेटाबेस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dnsdumpster</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">DNSdumpster स्कैनिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">fofa</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">FOFA सर्च इंजन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">fullhunt</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">FullHunt अटैक सर्फ़ेस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">github</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">GitHub कोड सर्च</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hackertarget</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">HackerTarget स्कैनिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">intelx</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">IntelX इंटेलिजेंस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">passivedns</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">PassiveDNS डेटाबेस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">rapiddns</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">RapidDNS सर्च</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">securitytrails</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">SecurityTrails DNS डेटा</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">shodan</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">Shodan सर्च इंजन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">threatcrowd</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">ThreatCrowd OSINT</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">virustotal</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">VirusTotal DNS डेटा</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">waybackarchive</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">Wayback Machine आर्काइव</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">zoomeye</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">ZoomEye सर्च इंजन</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Source Configuration</h2>
      <p>
        API keys के लिए provider-config.yaml फाइल इस्तेमाल होती है। यह फाइल ~/.config/subfinder/ में होती है।
      </p>
      <CodeBlock
        title="API Keys कॉन्फ़िगर करें"
        code={`# कॉन्फ़िग फाइल एडिट करें:
nano ~/.config/subfinder/provider-config.yaml

# फाइल का फ़ॉर्मेट:
# virustotal:
#   - YOUR_VIRUSTOTAL_API_KEY
# shodan:
#   - YOUR_SHODAN_API_KEY
# censys:
#   - YOUR_CENSYS_API_ID
#   - YOUR_CENSYS_API_SECRET
# securitytrails:
#   - YOUR_SECURITYTRAILS_API_KEY
# github:
#   - YOUR_GITHUB_TOKEN
# binaryedge:
#   - YOUR_BINARYEDGE_API_KEY

# कॉन्फ़िग फाइल टेम्पलेट:
cat > ~/.config/subfinder/provider-config.yaml << 'EOF'
virustotal:
  - YOUR_VIRUSTOTAL_API_KEY
shodan:
  - YOUR_SHODAN_API_KEY
censys:
  - YOUR_CENSYS_API_ID
  - YOUR_CENSYS_API_SECRET
securitytrails:
  - YOUR_SECURITYTRAILS_API_KEY
github:
  - YOUR_GITHUB_TOKEN
chaos:
  - YOUR_CHAOS_API_KEY
EOF

# API keys बिना भी काम करता है — कम रिजल्ट्स मिलेंगे`}
      />

      <h2>Pipeline Workflows</h2>
      <p>
        Subfinder को दूसरे टूल्स के साथ पाइपलाइन में इस्तेमाल करना बहुत आम है।
      </p>
      <CodeBlock
        title="पॉपुलर पाइपलाइन्स"
        code={`# Subfinder + httpx (लाइव सबडोमेन्स ढूंढो):
subfinder -d target.com -silent | httpx -silent -status-code

# Subfinder + httpx + nuclei (वल्नरेबिलिटी स्कैन):
subfinder -d target.com -silent | httpx -silent | nuclei -t vulnerabilities/

# Subfinder + nmap (पोर्ट स्कैन):
subfinder -d target.com -silent | nmap -iL - -sV

# Subfinder + amass (कंबाइन रिजल्ट्स):
subfinder -d target.com -silent > subs1.txt
amass enum -passive -d target.com > subs2.txt
sort -u subs1.txt subs2.txt > all_subs.txt

# Subfinder + waybackurls (URL डिस्कवरी):
subfinder -d target.com -silent | waybackurls > urls.txt

# Recursive + httpx (डीप स्कैन):
subfinder -d target.com -recursive -silent | httpx -silent -title -status-code`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Subfinder को automate करना बहुत आसान है। यह CLI-friendly tool है जो scripts और pipelines में seamlessly integrate होता है। Bash, Python, Go — किसी भी language से wrapper बना सकते हो।
      </p>
      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट"
        code={`#!/bin/bash
# सबडोमेन एन्यूमरेशन ऑटोमेशन
DOMAIN=$1
OUTPUT_DIR="recon_$DOMAIN"

mkdir -p $OUTPUT_DIR

echo "[+] Subfinder से सबडोमेन्स निकाल रहे हैं..."
subfinder -d $DOMAIN -o $OUTPUT_DIR/subfinder_subs.txt -silent

echo "[+] Amass से सबडोमेन्स निकाल रहे हैं..."
amass enum -passive -d $DOMAIN -o $OUTPUT_DIR/amass_subs.txt

echo "[+] रिजल्ट्स मर्ज कर रहे हैं..."
cat $OUTPUT_DIR/subfinder_subs.txt $OUTPUT_DIR/amass_subs.txt | sort -u > $OUTPUT_DIR/all_subs.txt

echo "[+] लाइव सबडोमेन्स चेक कर रहे हैं..."
cat $OUTPUT_DIR/all_subs.txt | httpx -silent -o $OUTPUT_DIR/live_subs.txt

echo "[+] पोर्ट स्कैन कर रहे हैं..."
nmap -iL $OUTPUT_DIR/live_subs.txt -T4 -oN $OUTPUT_DIR/nmap_results.txt

echo "[+] कुल सबडोमेन्स: $(wc -l < $OUTPUT_DIR/all_subs.txt)"
echo "[+] लाइव सबडोमेन्स: $(wc -l < $OUTPUT_DIR/live_subs.txt)"`}
      />
      <CodeBlock
        title="Python स्क्रिप्ट"
        code={`#!/usr/bin/env python3
# Subfinder Python wrapper
import subprocess
import json
import sys

def run_subfinder(domain):
    cmd = ["subfinder", "-d", domain, "-oJ", "/tmp/subs.json", "-silent"]
    result = subprocess.run(cmd, capture_output=True, text=True)

    with open("/tmp/subs.json", "r") as f:
        subs = [json.loads(line)["host"] for line in f if line.strip()]

    return sorted(set(subs))

if __name__ == "__main__":
    domain = sys.argv[1]
    subs = run_subfinder(domain)

    for sub in subs:
        print(sub)

    print(f"\n[+] कुल: {len(subs)} सबडोमेन्स मिले")`}
      />
      <CodeBlock
        title="मल्टी-डोमेन स्कैन"
        code={`#!/bin/bash
# कई डोमेन्स के लिए ऑटोमेटेड स्कैन
while read domain; do
    echo "[+] स्कैन कर रहे हैं: $domain"
    subfinder -d $domain -silent -o "subs_$domain.txt"

    # रेट लिमिटिंग के लिए डिले
    sleep 2
done < domains.txt

echo "[+] सभी स्कैन पूरे हुए!"`}
      />
      <CodeBlock
        title="Cron Job Automation"
        code={`# Daily automated recon (crontab):
# crontab -e

# हर रोज़ सुबह 2 बजे scan:
0 2 * * * /path/to/scan_script.sh target.com >> /var/log/recon.log

# Weekly full scan:
0 3 * * 0 /path/to/full_scan.sh >> /var/log/full_recon.log

# Scan script (scan_script.sh):
#!/bin/bash
DOMAIN=$1
DATE=$(date +%Y%m%d)
OUTPUT_DIR="/recon/$DOMAIN/$DATE"
mkdir -p $OUTPUT_DIR

subfinder -d $DOMAIN -all -silent -o $OUTPUT_DIR/subs.txt
cat $OUTPUT_DIR/subs.txt | httpx -silent -o $OUTPUT_DIR/live.txt

# Previous day से compare:
PREV_DIR="/recon/$DOMAIN/$(date -d yesterday +%Y%m%d)"
if [ -d "$PREV_DIR" ]; then
    NEW=$(comm -13 <(sort $PREV_DIR/subs.txt) <(sort $OUTPUT_DIR/subs.txt))
    echo "New subdomains: $NEW" >> $OUTPUT_DIR/diff.txt
fi`}
      />

      <h2>Comparison Table</h2>
      <p>
        Subfinder vs other subdomain discovery tools — कौन सा tool किस situation में best है। Multiple tools use करना हमेशा बेहतर results देता है।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Subfinder</th>
              <th className="text-left py-2 px-3 text-neon-green">Amass</th>
              <th className="text-left py-2 px-3 text-neon-green">DNSRecon</th>
              <th className="text-left py-2 px-3 text-neon-green">Sublist3r</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">भाषा</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">Python</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">सोर्सेज़</td><td className="py-2 px-3">30+</td><td className="py-2 px-3">50+</td><td className="py-2 px-3">10+</td><td className="py-2 px-3">15+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्पीड</td><td className="py-2 px-3">बहुत तेज़</td><td className="py-2 px-3">तेज़</td><td className="py-2 px-3">मध्यम</td><td className="py-2 px-3">मध्यम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">पैसिव</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">एक्टिव</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">JSON आउटपुट</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">पाइपलाइन</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">रिकर्सिव</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">मेंटेनेंस</td><td className="py-2 px-3">एक्टिव</td><td className="py-2 px-3">एक्टिव</td><td className="py-2 px-3">कम</td><td className="py-2 px-3">कम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">API Key मैनेजमेंट</td><td className="py-2 px-3">यामल फाइल</td><td className="py-2 px-3">कॉन्फ़िग फाइल</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">सबसे अच्छा</td><td className="py-2 px-3">पैसिव रेकन</td><td className="py-2 px-3">फुल रेकन</td><td className="py-2 px-3">DNS ऑडिट</td><td className="py-2 px-3">क्विक स्कैन</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'कोई सबडोमेन नहीं मिल रहा', a: 'डोमेन सही है? DNS चेक करें। अगर नया डोमेन है तो कुछ सोर्सेज़ में डेटा नहीं होगा। -all फ्लैग यूज़ करें सभी सोर्सेज़ के लिए।' },
          { q: 'API key एरर आ रहा है', a: 'provider-config.yaml चेक करें — की सही है? एक्सपायर्ड तो नहीं? बिना की के भी काम करता है लेकिन कम रिजल्ट्स मिलेंगे।' },
          { q: 'स्कैन बहुत स्लो है', a: '-t 50 फ्लैग से थ्रेड्स बढ़ाओ। -timeout 10 से टाइमआउट कम करो। कुछ सोर्सेज़ स्लो होते हैं — उन्हें एक्सक्लूड करो।' },
          { q: 'डुप्लिकेट सबडोमेन्स आ रहे हैं', a: 'Subfinder ऑटोमैटिकली डुप्लिकेट्स हटाता है। अगर फिर भी आ रहे हैं तो sort -u से पाइप करो।' },
          { q: 'कुछ सोर्सेज़ काम नहीं कर रहे', a: 'वो सोर्सेज़ डाउन हो सकते हैं या API बदल गया होगा। -v फ्लैग से देखो कौन सा सोर्स फेल हो रहा है।' },
          { q: 'Go इंस्टॉल नहीं है', a: 'apt से भी इंस्टॉल कर सकते हो: sudo apt install subfinder। Go की ज़रूरत नहीं।' },
          { q: 'परमिशन एरर आ रहा है', a: '~/.config/subfinder/ डायरेक्ट्री की परमिशन चेक करो। chmod 755 करो।' },
          { q: 'JSON पार्स नहीं हो रहा', a: 'jq इंस्टॉल करो: sudo apt install jq। फिर: cat output.json | jq .host' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Subfinder पैसिव टूल है — इसे डिटेक्ट करना मुश्किल है, लेकिन डिफेंस संभव है। आप अपने domain की subdomain exposure monitor कर सकते हो और unauthorized subdomains को detect कर सकते हो।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Certificate Transparency मॉनिटरिंग:</strong> crt.sh पर अपने डोमेन के सर्टिफिकेट्स मॉनिटर करो — नए सबडोमेन्स पता चलेंगे</li>
        <li><strong className="text-white">DNS Monitoring:</strong> अपने DNS रिकॉर्ड्स पर नज़र रखो — unauthorized changes डिटेक्ट होंगे</li>
        <li><strong className="text-white">अनावश्यक सबडोमेन्स हटाओ:</strong> जो सबडोमेन्स इस्तेमाल नहीं हो रहे उन्हें DNS से हटा दो</li>
        <li><strong className="text-white">WAF लगाओ:</strong> सभी सबडोमेन्स पर Web Application Firewall कॉन्फ़िगर करो</li>
        <li><strong className="text-white">Access Logging:</strong> सभी DNS क्वेरीज़ लॉग करो — suspicious patterns डिटेक्ट होंगे</li>
        <li><strong className="text-white">Subdomain Takeover प्रिवेंशन:</strong> dangling CNAME रिकॉर्ड्स चेक करो और हटाओ</li>
        <li><strong className="text-white">Wildcard DNS:</strong> wildcard DNS रिकॉर्ड से enumeration मुश्किल होती है</li>
        <li><strong className="text-white">OSINT मॉनिटरिंग:</strong> अपने डोमेन के leaked सबडोमेन्स के लिए ऑटोमेटेड alerts सेट करो</li>
        <li><strong className="text-white">Rate Limiting:</strong> DNS सर्वर पर rate limiting लगाओ</li>
        <li><strong className="text-white">Incident Response:</strong> unauthorized subdomain discovery होने पर IR प्लान activate करो</li>
      </ul>
      <CodeBlock
        title="Subdomain Monitoring Script"
        code={`#!/bin/bash
# अपने domain की subdomain monitoring
DOMAIN="yourdomain.com"
BASELINE="baseline_subs.txt"
CURRENT="current_subs.txt"

# Baseline बनाओ (पहली बार):
subfinder -d $DOMAIN -all -silent -o $BASELINE

# Daily check (cron में डालो):
subfinder -d $DOMAIN -all -silent -o $CURRENT

# नए subdomains find करो:
NEW=$(comm -13 <(sort $BASELINE) <(sort $CURRENT))
if [ -n "$NEW" ]; then
    echo "[ALERT] नए subdomains मिले:"
    echo "$NEW"
    # Email/Slack alert भेजो
fi

# Unauthorized subdomains detect करो:
# जो subdomains आपने नहीं बनाए वो suspicious हैं`}
      />

      <h2>Lab Environment Setup</h2>
      <p>
        Subfinder practice के लिए safe lab setup करो। अपने domain पर practice करो या bug bounty platforms use करो। कभी भी unauthorized targets पर scan मत करो। Practice से tool mastery आती है।
      </p>
      <CodeBlock
        title="प्रैक्टिस लैब"
        code={`# अपना टेस्ट डोमेन बनाओ:
# 1. एक डोमेन रजिस्टर करो (जैसे testyourdomain.com)
# 2. कुछ सबडोमेन्स बनाओ:
#    - api.testyourdomain.com
#    - admin.testyourdomain.com
#    - staging.testyourdomain.com
#    - dev.testyourdomain.com

# अपने डोमेन पर प्रैक्टिस करो:
subfinder -d testyourdomain.com -v

# टेस्ट करें कि कितने सबडोमेन्स मिलते हैं:
subfinder -d testyourdomain.com -o found_subs.txt
cat found_subs.txt | wc -l

# OWASP Juice Shop या DVWA जैसे लैब में प्रैक्टिस करो

# Bug bounty प्रोग्राम्स पर प्रैक्टिस:
# HackerOne, Bugcrowd पर authorized targets`}
      />
      <CodeBlock
        title="Docker Lab Setup"
        code={`# Docker में Subfinder run करो:
docker pull projectdiscovery/subfinder:latest

# Single domain scan:
docker run projectdiscovery/subfinder:latest -d target.com

# With config file:
docker run -v ~/.config/subfinder:/root/.config/subfinder \
    projectdiscovery/subfinder:latest -d target.com

# Docker compose (full recon lab):
# docker-compose.yml:
# version: '3'
# services:
#   subfinder:
#     image: projectdiscovery/subfinder:latest
#     command: -d target.com -o /output/subs.txt
#     volumes:
#       - ./output:/output

# Local Docker build:
git clone https://github.com/projectdiscovery/subfinder.git
cd subfinder/v2/cmd/subfinder
docker build -t subfinder .`}
      />
      <CodeBlock
        title="Practice Workflow"
        code={`# Step-by-step practice workflow:

# Step 1: Basic scan
subfinder -d target.com -o step1_basic.txt

# Step 2: All sources
subfinder -d target.com -all -o step2_all_sources.txt

# Step 3: Recursive
subfinder -d target.com -recursive -o step3_recursive.txt

# Step 4: Compare results
echo "Basic: $(wc -l < step1_basic.txt)"
echo "All Sources: $(wc -l < step2_all_sources.txt)"
echo "Recursive: $(wc -l < step3_recursive.txt)"

# Step 5: Find unique subdomains
comm -13 <(sort step1_basic.txt) <(sort step2_all_sources.txt) > new_subs.txt
echo "New subs from all sources: $(wc -l < new_subs.txt)"

# Step 6: Verify with httpx
cat step2_all_sources.txt | httpx -silent -o live_subs.txt`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड सोर्स सिलेक्शन"
        code={`# सिर्फ स्पेसिफिक सोर्सेज़:
subfinder -d target.com -sources virustotal,shodan,censys

# कुछ सोर्सेज़ एक्सक्लूड:
subfinder -d target.com -exclude-sources dnsdumpster

# सिर्फ free sources (API key नहीं चाहिए):
subfinder -d target.com -sources alienvault,anubis,certspotter,commoncrawl,crtsh,dnsdumpster,hackertarget,passivedns,rapiddns,threatcrowd,waybackarchive

# मैक्सिमम रिजल्ट्स:
subfinder -d target.com -all -t 100 -timeout 60

# कस्टम कॉन्फ़िग फाइल:
subfinder -d target.com -config custom_config.yaml

# DNS रिज़ॉल्यूशन के साथ:
subfinder -d target.com -resolve

# Multiple output formats:
subfinder -d target.com -o subs.txt -oJ subs.json`}
      />
      <CodeBlock
        title="Stealth Recon Techniques"
        code={`# Passive-only (कोई request target को नहीं):
subfinder -d target.com -silent

# Rate limiting के साथ (slow but safe):
subfinder -d target.com -t 5 -timeout 60

# सिर्फ CT logs (सबसे passive):
subfinder -d target.com -sources crtsh,certspotter

# Historical data (Wayback Machine):
subfinder -d target.com -sources waybackarchive,commoncrawl

# Output को directly file में (stdout पर नहीं):
subfinder -d target.com -o /tmp/subs.txt 2>/dev/null

# Background में run करो:
nohup subfinder -d target.com -o subs.txt &
echo "PID: $!"`}
      />
      <CodeBlock
        title="Mass Scanning Script"
        code={`#!/bin/bash
# Multiple targets के लिए mass scan
INPUT_FILE=$1
OUTPUT_DIR="mass_recon"
mkdir -p $OUTPUT_DIR

while read domain; do
    echo "[+] Scanning: $domain"
    subfinder -d $domain -silent -o "$OUTPUT_DIR/$domain.txt" -t 50

    # Rate limiting — API bans से बचने:
    sleep 3

    # Progress tracking:
    echo "[+] Done: $domain ($(wc -l < $OUTPUT_DIR/$domain.txt) subs)"
done < $INPUT_FILE

# Combine all results:
cat $OUTPUT_DIR/*.txt | sort -u > $OUTPUT_DIR/all_subdomains.txt
echo "[+] Total unique subdomains: $(wc -l < $OUTPUT_DIR/all_subdomains.txt)"`}
      />
      <CodeBlock
        title="Custom Source Plugin"
        code={`# Subfinder में custom source add करना (Go):
# यह एक Go interface implement करता है

# Source interface:
# type Source interface {
#     Name() string
#     NeedsKey() bool
#     AddApiKeys([]string)
#     Run(ctx context.Context, domain string) <-chan string
# }

# Custom source example (pseudo-code):
# 1. source.go file बनाओ
# 2. Source interface implement करो
# 3. subfinder में register करो
# 4. Build करो: go build ./cmd/subfinder

# Community sources check करो:
# https://github.com/projectdiscovery/subfinder/tree/main/v2/pkg/subscraping/sources`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Subfinder फ्री है?', a: 'हाँ, पूरी तरह फ्री और ओपन सोर्स (MIT License)। कुछ सोर्सेज़ के लिए API keys चाहिए जो फ्री टियर में मिलती हैं।' },
          { q: 'API keys ज़रूरी हैं?', a: 'नहीं, बिना keys के भी काम करता है। लेकिन keys से ज़्यादा रिजल्ट्स मिलते हैं। VirusTotal और Shodan की keys ज़रूर लगाओ।' },
          { q: 'Amass से बेहतर है?', a: 'Subfinder तेज़ है और ज़्यादा पैसिव सोर्सेज़ हैं। Amass में एक्टिव स्कैनिंग भी है। दोनों यूज़ करो — बेस्ट रिजल्ट्स मिलेंगे।' },
          { q: 'क्या यह एक्टिव स्कैनिंग करता है?', a: 'नहीं, Subfinder सिर्फ पैसिव है। एक्टिव स्कैनिंग के लिए Amass या DNSRecon यूज़ करो।' },
          { q: 'Output कैसे पार्स करें?', a: '-silent फ्लैग से सिर्फ सबडोमेन्स मिलते हैं। JSON के लिए -oJ और jq यूज़ करो।' },
          { q: 'Rate limiting से कैसे बचें?', a: '-t कम करो, -timeout बढ़ाओ, कई API keys रोटेट करो।' },
          { q: 'Recursive mode क्या है?', a: 'मिले हुए सबडोमेन्स पर दोबारा स्कैन — api.target.com के subdomains भी मिलेंगे।' },
          { q: 'कितने सबडोमेन्स मिल सकते हैं?', a: 'डोमेन पर निर्भर — बड़े डोमेन्स पर हज़ारों मिल सकते हैं। छोटे डोमेन्स पर 10-50।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Passive Sources Deep Dive</h2>
      <p>
        Subfinder 30+ passive sources use करता है। हर source अलग data provide करता है। कुछ sources certificate transparency logs से data निकालते हैं, कुछ search engines से, और कुछ threat intelligence platforms से। Best results के लिए सभी sources enable रखो और API keys configure करो।
      </p>
      <p>
        Certificate Transparency (CT) logs सबसे reliable sources में से एक हैं। जब भी कोई SSL/TLS certificate issue होता है, तो CT logs में record हो जाता है। crt.sh और certspotter यही data provide करते हैं। ये sources बिना API key के भी काम करते हैं और historical data भी मिलता है।
      </p>
      <CodeBlock
        title="स्पेसिफिक सोर्सेज़ इस्तेमाल करें"
        code={`# सिर्फ CT log sources:
subfinder -d target.com -sources crtsh,certspotter

# सिर्फ threat intelligence sources:
subfinder -d target.com -sources virustotal,alienvault,threatcrowd

# सिर्फ search engine sources:
subfinder -d target.com -sources shodan,zoomeye,fofa

# सभी free sources (बिना API key):
subfinder -d target.com -sources alienvault,anubis,certspotter,commoncrawl,crtsh,dnsdumpster,hackertarget,passivedns,rapiddns,threatcrowd,waybackarchive

# सभी sources list करो:
subfinder -ls

# एक source का output check करो (debugging):
subfinder -d target.com -sources crtsh -v`}
      />

      <h2>API Key Management</h2>
      <p>
        API keys configure करने से ज़्यादा sources available होते हैं और rate limiting कम होती है। VirusTotal, Shodan, Censys, SecurityTrails — ये सब free API keys provide करते हैं। एक बार keys configure कर दो तो Subfinder automatically उन्हें use करता है।
      </p>
      <p>
        Rate limiting से बचने के लिए कई strategies हैं। एक ही source की multiple API keys बनाओ और provider-config.yaml में सब add करो। Subfinder randomly keys rotate करता है। अगर कोई source rate limited हो जाए तो उसे temporarily exclude कर सकते हो।
      </p>
      <CodeBlock
        title="एडवांस्ड API कॉन्फ़िगरेशन"
        code={`# Provider config का पूरा फ़ॉर्मेट:
cat > ~/.config/subfinder/provider-config.yaml << 'EOF'
virustotal:
  - API_KEY_1
  - API_KEY_2
  - API_KEY_3
shodan:
  - SHODAN_API_KEY_1
  - SHODAN_API_KEY_2
censys:
  - CENSYS_API_ID:CENSYS_API_SECRET
securitytrails:
  - ST_API_KEY
github:
  - ghp_YOUR_GITHUB_TOKEN
binaryedge:
  - BE_API_KEY
chaos:
  - CHAOS_API_KEY
intelx:
  - INTELX_API_KEY
fofa:
  - FOFA_EMAIL:FOFA_KEY
fullhunt:
  - FH_API_KEY
zoomeye:
  - ZE_API_KEY
dnsdb:
  - DNSDB_API_KEY
EOF

# Environment variables से भी set कर सकते हो:
export SUBFINDER_VIRUSTOTAL_APIKEY=your_key
export SUBFINDER_SHODAN_APIKEY=your_key

# Config file verify करो:
subfinder -d test.com -v 2>&1 | grep -i "key"`}
      />

      <h2>Recursive Enumeration</h2>
      <p>
        Recursive enumeration Subfinder v2.6+ में add हुई feature है। यह मिले हुए subdomains पर दोबारा scan करती है — जैसे api.target.com के subdomains (v1.api.target.com, v2.api.target.com) भी discover होते हैं। यह deep enumeration के लिए बहुत useful है।
      </p>
      <p>
        Recursive mode में scan time बढ़ जाता है क्योंकि हर level पर नए subdomains मिलते हैं और उन पर भी scan होता है। इसलिए -max-time flag से time limit set करना अच्छा रहता है। बड़े domains पर recursive scan hours ले सकता है।
      </p>
      <CodeBlock
        title="Recursive Enumeration"
        code={`# Basic recursive scan:
subfinder -d target.com -recursive

# Recursive + silent (pipeline के लिए):
subfinder -d target.com -recursive -silent

# Recursive + time limit:
subfinder -d target.com -recursive -max-time 10

# Recursive + all sources:
subfinder -d target.com -recursive -all

# Recursive + output:
subfinder -d target.com -recursive -o recursive_subs.txt

# Recursive + JSON output:
subfinder -d target.com -recursive -oJ recursive_subs.json

# Depth control — कितने levels deep जाना है:
# (Subfinder currently auto-limits depth)
subfinder -d target.com -recursive -v`}
      />

      <h2>Output Filtering and Processing</h2>
      <p>
        Subfinder का output filter करने के कई तरीके हैं। -silent flag से सिर्फ subdomains मिलते हैं। JSON output से structured data मिलता है। अलग-अलग output formats अलग-अलग use cases के लिए हैं।
      </p>
      <CodeBlock
        title="Output Processing"
        code={`# Silent output (सिर्फ subdomains):
subfinder -d target.com -silent

# JSON output (structured data):
subfinder -d target.com -oJ output.json

# JSON parse करो (jq से):
cat output.json | jq -r '.host'

# Duplicate removal:
subfinder -d target.com -silent | sort -u

# Filter by pattern:
subfinder -d target.com -silent | grep "api"

# Count subdomains:
subfinder -d target.com -silent | wc -l

# Multiple domains + combined output:
for domain in target1.com target2.com target3.com; do
    subfinder -d $domain -silent
done | sort -u > all_subs.txt

# Output with source info (verbose):
subfinder -d target.com -v 2>&1 | grep "\\[\\+\\]"

# Save both stdout and stderr:
subfinder -d target.com -v 2>&1 | tee scan_log.txt`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Bug bounty में subdomain discovery सबसे पहला step है। एक real case में, researcher ने Subfinder से 500+ subdomains discover किए एक fintech company के। उनमें से एक staging.company.com था जो production जैसा ही था लेकिन weak authentication था। इससे researcher ने critical vulnerability find की।
      </p>
      <p>
        एक और case में, Subfinder ने एक subdomain discover किया जो AWS S3 bucket पर point कर रहा था। वो bucket publically accessible था और sensitive data contain कर रहा था। यह subdomain takeover vulnerability थी — dangling CNAME record के कारण। Subfinder + httpx + nuclei pipeline से यह automatically detect हो गया।
      </p>
      <p>
        Corporate recon में Subfinder invaluable है। एक penetration test में, client ने कहा कि उनके सिर्फ 10 subdomains हैं। Subfinder ने 200+ subdomains discover किए जिनमें से 50+ live थे। इनमें से कई development, staging, और old servers थे जो unpatched थे। यह real attack surface client को पता ही नहीं था।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Subfinder अकेले use करने से बेहतर है इसे pipeline में use करना। ProjectDiscovery के tools (httpx, nuclei, naabu) के साथ integration seamless है। यह Unix philosophy follow करता है — एक tool एक काम करे, pipes से connect करो।
      </p>
      <CodeBlock
        title="Complete Recon Pipeline"
        code={`#!/bin/bash
# Full recon pipeline — Subfinder based
DOMAIN=$1
OUTDIR="recon_$DOMAIN"
mkdir -p $OUTDIR

echo "[+] Step 1: Subdomain Discovery"
subfinder -d $DOMAIN -all -silent -o $OUTDIR/subs_subfinder.txt
amass enum -passive -d $DOMAIN -o $OUTDIR/subs_amass.txt 2>/dev/null
cat $OUTDIR/subs_*.txt | sort -u > $OUTDIR/all_subs.txt
echo "[+] Total subdomains: $(wc -l < $OUTDIR/all_subs.txt)"

echo "[+] Step 2: Live Host Detection"
cat $OUTDIR/all_subs.txt | httpx -silent -status-code -title -o $OUTDIR/live_hosts.txt
echo "[+] Live hosts: $(wc -l < $OUTDIR/live_hosts.txt)"

echo "[+] Step 3: Port Scanning"
cat $OUTDIR/all_subs.txt | naabu -silent -o $OUTDIR/ports.txt

echo "[+] Step 4: URL Extraction"
cat $OUTDIR/live_hosts.txt | awk '{print $1}' | waybackurls >> $OUTDIR/urls.txt
cat $OUTDIR/live_hosts.txt | awk '{print $1}' | gau >> $OUTDIR/urls.txt
cat $OUTDIR/urls.txt | sort -u > $OUTDIR/all_urls.txt

echo "[+] Step 5: Vulnerability Scanning"
cat $OUTDIR/live_hosts.txt | awk '{print $1}' | nuclei -t vulnerabilities/ -o $OUTDIR/vulns.txt

echo "[+] Done! Results in $OUTDIR/"`}
      />
      <CodeBlock
        title="Subfinder + httpx + nuclei Combo"
        code={`# One-liner: discover + verify + scan
subfinder -d target.com -silent | httpx -silent | nuclei -t cves/

# With more httpx info:
subfinder -d target.com -silent | httpx -silent -title -status-code -tech-detect

# Subfinder + nmap port scan:
subfinder -d target.com -silent | nmap -iL - -sV -sC -oN nmap_results.txt

# Subfinder + masscan:
subfinder -d target.com -silent | masscan -p 1-65535 --rate 10000

# Subfinder + dirsearch:
subfinder -d target.com -silent | httpx -silent | xargs -I {} dirsearch -u {}

# Subfinder + subjack (takeover check):
subfinder -d target.com -silent | subjack -w /dev/stdin -t 100 -timeout 30`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Subfinder inherently fast है लेकिन कुछ optimizations से और तेज़ हो सकता है। Thread count बढ़ाना, timeout कम करना, और slow sources exclude करना — ये सब performance improve करते हैं।
      </p>
      <CodeBlock
        title="Performance Optimization"
        code={`# Threads बढ़ाओ (default 30):
subfinder -d target.com -t 100

# Timeout कम करो (default 30s):
subfinder -d target.com -timeout 10

# Max time limit:
subfinder -d target.com -max-time 5

# Slow sources exclude करो:
subfinder -d target.com -exclude-sources commoncrawl,waybackarchive

# सिर्फ fast sources:
subfinder -d target.com -sources crtsh,alienvault,anubis,hackertarget

# DNS resolution skip करो (faster):
subfinder -d target.com -nW

# Multiple domains parallel में:
cat domains.txt | xargs -P 5 -I {} subfinder -d {} -silent -o subs_{}.txt

# Resource monitoring:
time subfinder -d target.com -silent > /dev/null`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Subfinder का output analyze करना ज़रूरी है। Raw subdomains list से ज़्यादा valuable insights निकालने के लिए post-processing करो। Pattern analysis, technology fingerprinting, और prioritization — ये सब important steps हैं।
      </p>
      <CodeBlock
        title="Output Analysis"
        code={`# Subdomain statistics:
echo "Total subdomains: $(wc -l < subs.txt)"
echo "Unique TLDs: $(awk -F. '{print $(NF-1)"."$NF}' subs.txt | sort -u | wc -l)"

# Subdomain pattern analysis:
cat subs.txt | awk -F. '{print $1}' | sort | uniq -c | sort -rn | head -20

# Environment-based sorting:
cat subs.txt | grep -iE "(dev|staging|test|qa|uat|beta|pre)" > env_subs.txt
cat subs.txt | grep -iE "(api|admin|portal|login|auth)" > sensitive_subs.txt
cat subs.txt | grep -iE "(cdn|static|assets|media)" > cdn_subs.txt

# Cloud service detection:
cat subs.txt | grep -iE "(aws|azure|gcp|cloud|s3|ec2)" > cloud_subs.txt

# JSON analysis:
cat output.json | jq -r '.source' | sort | uniq -c | sort -rn

# Generate report:
echo "=== Subdomain Recon Report ===" > report.txt
echo "Target: $DOMAIN" >> report.txt
echo "Date: $(date)" >> report.txt
echo "Total: $(wc -l < subs.txt)" >> report.txt
echo "Live: $(wc -l < live_subs.txt)" >> report.txt
echo "Dev/Staging: $(wc -l < env_subs.txt)" >> report.txt`}
      />

      <h2>Common Problems and Solutions</h2>
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Amass</td><td className="py-2 px-3">अटैक सर्फ़ेस मैपिंग</td><td className="py-2 px-3">50+ सोर्सेज़, एक्टिव+पैसिव</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DNSRecon</td><td className="py-2 px-3">DNS रिकॉन</td><td className="py-2 px-3">ज़ोन ट्रांसफर, ब्रूट फोर्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Sublist3r</td><td className="py-2 px-3">सबडोमेन एन्यूमरेशन</td><td className="py-2 px-3">सिंपल, पाइथन बेस्ड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Knockpy</td><td className="py-2 px-3">सबडोमेन स्कैन</td><td className="py-2 px-3">सिंपल, फास्ट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DNSenum</td><td className="py-2 px-3">DNS एन्यूमरेशन</td><td className="py-2 px-3">ज़ोन ट्रांसफर, ब्रूट फोर्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">MassDNS</td><td className="py-2 px-3">हाई-परफॉर्मेंस DNS</td><td className="py-2 px-3">मिलियन क्वेरीज़ प्रति सेकंड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Assetfinder</td><td className="py-2 px-3">एसेट डिस्कवरी</td><td className="py-2 px-3">सिंपल, तेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Findomain</td><td className="py-2 px-3">सबडोमेन फाइंडर</td><td className="py-2 px-3">रस्ट बेस्ड, तेज़</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>हमेशा Subfinder + Amass दोनों यूज़ करो — ज़्यादा रिजल्ट्स मिलेंगे</li>
          <li>VirusTotal API key ज़रूर लगाओ — सबसे ज़्यादा डेटा यहीं से आता है</li>
          <li>-silent फ्लैग पाइपलाइन में यूज़ करो — सिर्फ सबडोमेन्स मिलेंगे</li>
          <li>Recursive mode से deep enumeration होती है लेकिन टाइम ज़्यादा लगता है</li>
          <li>पहले पैसिव स्कैन करो, फिर एक्टिव — stealth बनी रहेगी</li>
          <li>JSON output यूज़ करो automation के लिए — पार्सिंग आसान होती है</li>
          <li>Regular basis पर स्कैन करो — नए सबडोमेन्स बनते रहते हैं</li>
          <li>रिजल्ट्स को httpx से वेरिफाई करो — सिर्फ लाइव सबडोमेन्स पर काम करो</li>
          <li>Multiple API keys बनाओ और provider-config.yaml में rotate करो — rate limiting bypass होगी</li>
          <li>कुछ सोर्सेज़ (जैसे commoncrawl) slow होते हैं — time-sensitive scans में exclude करो</li>
          <li>Output को always file में save करो — बाद में comparison और analysis के लिए</li>
          <li>Nuclei templates के साथ pipeline बनाओ — subdomain discovery से vulnerability scanning तक automated</li>
          <li>Wayback Machine source historical subdomains ढूंढता है — old/deprecated subdomains भी मिलते हैं</li>
          <li>Subfinder को cron job में डालो — daily automated recon होता रहेगा</li>
        </ul>
      </div>

      <h2>Legal and Ethical Considerations</h2>
      <p>
        सबडोमेन एन्यूमरेशन कानूनी रूप से sensitive area है। Passive enumeration भले ही target को directly touch नहीं करता, लेकिन फिर भी unauthorized recon illegal हो सकता है। हमेशा written authorization लेकर काम करो। Bug bounty programs में scope clearly define होता है — scope के बाहर testing मत करो।
      </p>
      <p>
        Responsible disclosure follow करो — अगर sensitive subdomains मिलें तो company को report करो। Public disclosure से पहले company को fix करने का मौका दो। Subfinder का output confidential रखो — third parties के साथ share मत करो बिना permission के। India में IT Act 2000 की धारा 43 और 66 unauthorized access और reconnaissance cover करती है।
      </p>
      <CodeBlock
        title="Ethical Usage Guidelines"
        code={`# हमेशा यह verify करो:
# 1. Bug bounty program active है?
# 2. Scope में subdomain enumeration allowed है?
# 3. Written authorization मिला है?
# 4. Rate limits specified हैं?

# Safe testing workflow:
# 1. Program rules पढ़ो
# 2. Scope confirm करो
# 3. Passive recon करो (Subfinder)
# 4. Findings report करो
# 5. Company को fix करने दो
# 6. Public disclosure (अगर allowed है)

# कभी मत करो:
# - Unauthorized targets पर scanning
# - Denial of service attacks
# - Data exfiltration`}
      />

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Subfinder एक पॉवरफुल पैसिव रेकन टूल है। इसका इस्तेमाल केवल अधिकृत टार्गेट्स पर ही करें। बिना अनुमति के सबडोमेन एन्यूमरेशन अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत रेकन अपराध हो सकता है। केवल अपने लैब वातावरण या लिखित प्राधिकरण के साथ ही उपयोग करें।
      </div>
    </TutorialLayout>
  )
}
