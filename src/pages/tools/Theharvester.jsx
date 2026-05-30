import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Theharvester() {
  return (
    <TutorialLayout
      title="theharvester"
      subtitle="ईमेल, सबडोमेन, और नाम का OSINT टूल — पब्लिक सोर्सेज़ से डेटा कलेक्ट"
      icon="📮"
      prev={{ to: '/tool/dnsenum', label: 'dnsenum' }}
      next={{ to: '/tool/dirb', label: 'dirb' }}
    >
      <h2>What is TheHarvester?</h2>
      <p>
        TheHarvester एक शक्तिशाली OSINT (Open Source Intelligence) टूल है जो पब्लिकली उपलब्ध डेटा सोर्सेज़ से ईमेल एड्रेसेज़, सबडोमेन्स, IP एड्रेसेज़, एंप्लॉई नेम्स, और ओपन पोर्ट्स की जानकारी इकट्ठा करता है। यह टूल पेनेट्रेशन टेस्टिंग और बग बाउंटी हंटिंग के रेकन फेज़ में सबसे पहले इस्तेमाल होता है — टार्गेट के बारे में जितनी ज़्यादा जानकारी होगी, उतना बेहतर हमला होगा।
      </p>
      <p>
        TheHarvester Christian Martorella ने बनाया था और यह Python में लिखा गया है। यह 30+ अलग-अलग डेटा सोर्सेज़ सपोर्ट करता है — Google, Bing, DuckDuckGo, Yahoo, LinkedIn, Hunter.io, Shodan, VirusTotal, Censys, Certificate Transparency (crt.sh), PGP की सर्वर्स, ThreatCrowd, DNSDumpster, और बहुत कुछ। हर सोर्स से अलग-अलग तरह की जानकारी मिलती है और TheHarvester सबको मिलाकर एक कंप्लीट रिपोर्ट बनाता है।
      </p>
      <p>
        TheHarvester की सबसे बड़ी खासियत यह है कि यह सिर्फ पैसिव रेकन करता है — टार्गेट को सीधे कोई रिक्वेस्ट नहीं जाती। सारा डेटा पहले से मौजूद सोर्सेज़ से आता है जैसे सर्च इंजन कैश, सर्टिफिकेट ट्रांसपरेंसी लॉग्स, और थर्ड-पार्टी API। यह टूल काली लिनक्स और काली नेटहंटर दोनों में प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        सोशल इंजीनियरिंग, स्पीयर फिशिंग, और अटैक प्लानिंग के लिए यह डेटा बहुत काम आता है। TheHarvester सिर्फ डेटा कलेक्ट करता है — उसे exploit नहीं करता। यह reconnaissance का सबसे सुरक्षित तरीका है। बड़ी कंपनियों के लिए भी यह टूल useful है — अपने डोमेन की public footprint check करने के लिए।
      </p>
      <p>
        TheHarvester v4 में Python asyncio का उपयोग करता है जिससे सभी सोर्सेज़ पैरेलल में क्वेरी होते हैं। यह बहुत तेज़ है — 30+ सोर्सेज़ से डेटा कुछ ही मिनटों में आ जाता है। HTML, XML, JSON — किसी भी फॉर्मेट में रिपोर्ट बन सकती है। बग बाउंटी हंटर्स, रेड टीमर्स, और ब्लू टीम सभी इसे इस्तेमाल करते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> TheHarvester केवल अधिकृत सुरक्षा परीक्षण और शोध के लिए उपयोग करें। यह सिर्फ पब्लिकली उपलब्ध डेटा कलेक्ट करता है, लेकिन इसका दुरुपयोग (फिशिंग, स्पैम, सोशल इंजीनियरिंग) अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत रेकन अपराध हो सकता है। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of TheHarvester</h2>
      <p>
        TheHarvester का विकास 2009 में Christian Martorella (Edge-Security) ने शुरू किया था। उस समय ईमेल और सबडोमेन एन्यूमरेशन के लिए अलग-अलग टूल्स इस्तेमाल करने पड़ते थे। Christian ने सोचा कि क्यों न एक ही टूल बनाया जाए जो सभी सोर्सेज़ से डेटा कलेक्ट करे। TheHarvester यही काम करता है।
      </p>
      <p>
        2012 में TheHarvester को BackTrack Linux में शामिल किया गया और बाद में Kali Linux में भी प्री-इंस्टॉल्ड आने लगा। समय के साथ इसमें कई नए सोर्सेज़ जोड़े गए — Shodan, Hunter.io, Censys, crt.sh सब। TheHarvester v4 में async/await support जोड़ा गया जिससे सभी सोर्सेज़ पैरेलल में क्वेरी होते हैं और स्कैन बहुत तेज़ हो गया। आज यह GitHub पर 10,000+ stars के साथ सबसे पॉपुलर OSINT टूल्स में से एक है।
      </p>
      <p>
        Christian Martorella ने TheHarvester को बनाने से पहले कई सिक्योरिटी कंसल्टिंग प्रोजेक्ट्स पर काम किया था। उन्होंने देखा कि penetration testers को रेकन के लिए बहुत सारे अलग-अलग टूल्स चलाने पड़ते हैं। यह समय लेने वाला और tedious काम था। इसलिए उन्होंने TheHarvester बनाया — एक ही टूल जो सब करे।
      </p>
      <p>
        TheHarvester का कोड open source है और GitHub पर उपलब्ध है। Community ने इसमें बहुत योगदान दिया है — नए सोर्सेज़ जोड़े, bugs fix किए, performance improve की। यह Python 3 में लिखा गया है और cross-platform है — Linux, macOS, Windows सब पर चलता है। Kali Linux के अलावा Parrot OS, BlackArch में भी उपलब्ध है।
      </p>

      <h2>How TheHarvester Works?</h2>
      <p>
        TheHarvester का काम करने का तरीका सीधा है — आप डोमेन और सोर्स बताते हो, और यह उन सोर्सेज़ से डेटा निकालता है। यह event-driven architecture use करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">सर्च इंजन क्वेरी:</strong> Google, Bing, DuckDuckGo, Yahoo पर "site:target.com" क्वेरीज़ भेजता है</li>
        <li><strong className="text-white">Certificate Transparency:</strong> crt.sh से SSL सर्टिफिकेट लॉग्स में सबडोमेन्स ढूंढता है</li>
        <li><strong className="text-white">PGP की सर्वर्स:</strong> pgp.mit.edu जैसे सर्वर्स से ईमेल एड्रेसेज़ निकालता है</li>
        <li><strong className="text-white">LinkedIn Scraping:</strong> LinkedIn से एंप्लॉई नेम्स और जॉब टाइटल्स</li>
        <li><strong className="text-white">API Integration:</strong> Hunter.io, Shodan, VirusTotal, Censys API से डेटा</li>
        <li><strong className="text-white">DNS Enumeration:</strong> सबडोमेन्स को DNS रिज़ॉल्व करके IP एड्रेसेज़ निकालता है</li>
        <li><strong className="text-white">डुप्लिकेट रिमूवल:</strong> सभी सोर्सेज़ से आए डेटा में duplicates हटाता है</li>
        <li><strong className="text-white">रिपोर्ट जनरेशन:</strong> HTML, XML, JSON फॉर्मेट में रिपोर्ट बनाता है</li>
        <li><strong className="text-white">Async Processing:</strong> v4 में Python asyncio से सभी सोर्सेज़ पैरेलल में क्वेरी होते हैं</li>
        <li><strong className="text-white">DNS Verification:</strong> -v flag से मिले होस्टनेम्स को DNS resolve करके verify करता है</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर और काली लिनक्स में TheHarvester प्री-इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो कई तरीकों से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="TheHarvester इंस्टॉलेशन"
        code={`# काली लिनक्स/नेटहंटर में चेक करें:
theHarvester --help

# apt से (सबसे आसान):
sudo apt update
sudo apt install theharvester

# pip से इंस्टॉल:
pip3 install theHarvester

# GitHub से (सबसे लेटेस्ट):
git clone https://github.com/laramies/theHarvester.git
cd theHarvester
pip3 install -r requirements.txt

# Docker से:
docker pull theharvester/theharvester
docker run -it theharvester/theharvester -d example.com -b all

# वर्जन चेक:
theHarvester --version

# सहायता:
theHarvester --help

# API keys सेट करें (optional):
# /etc/theHarvester/api-keys.yaml में edit करो`}
      />

      <h2>Basic Usage</h2>
      <p>
        TheHarvester का बेसिक इस्तेमाल बहुत आसान है — बस डोमेन दो और सोर्स बताओ।
      </p>
      <CodeBlock
        title="बेसिक कमांड्स"
        code={`# Google से ईमेल्स ढूंढें:
theHarvester -d target.com -b google

# Bing से:
theHarvester -d target.com -b bing

# कई सोर्सेज़ से:
theHarvester -d target.com -b google,bing,pgp

# सभी सोर्सेज़ से:
theHarvester -d target.com -b all

# रिजल्ट्स लिमिट करें:
theHarvester -d target.com -b google -l 200

# HTML रिपोर्ट बनाएं:
theHarvester -d target.com -b all -f report.html

# वर्बोज़ आउटपुट:
theHarvester -d target.com -b all -v

# DNS वेरिफिकेशन:
theHarvester -d target.com -b all -v

# Shodan integration:
theHarvester -d target.com -b all -s

# DNS सर्वर स्पेसिफाई:
theHarvester -d target.com -b all -e 8.8.8.8

# Brave सर्च इंजन:
theHarvester -d target.com -b brave`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-b</td><td className="py-2 px-3">डेटा सोर्स (google, bing, all)</td><td className="py-2 px-3 font-mono text-xs">-b google,bing</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-l</td><td className="py-2 px-3">रिजल्ट लिमिट</td><td className="py-2 px-3 font-mono text-xs">-l 200</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f</td><td className="py-2 px-3">आउटपुट फाइल (HTML/XML/JSON)</td><td className="py-2 px-3 font-mono text-xs">-f report.html</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">होस्टनेम वेरिफाई (DNS चेक)</td><td className="py-2 px-3 font-mono text-xs">-v</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-s</td><td className="py-2 px-3">Shodan सर्च (IP info)</td><td className="py-2 px-3 font-mono text-xs">-s</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-n</td><td className="py-2 px-3">DNS रिवर्स लुकअप</td><td className="py-2 px-3 font-mono text-xs">-n</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c</td><td className="py-2 px-3">Brave सर्च इंजन</td><td className="py-2 px-3 font-mono text-xs">-c</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e</td><td className="py-2 px-3">DNS सर्वर स्पेसिफाई</td><td className="py-2 px-3 font-mono text-xs">-e 8.8.8.8</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--dns-lookup</td><td className="py-2 px-3">DNS lookup enable</td><td className="py-2 px-3 font-mono text-xs">--dns-lookup</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--dns-server</td><td className="py-2 px-3">Custom DNS server</td><td className="py-2 px-3 font-mono text-xs">--dns-server 1.1.1.1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--take-over</td><td className="py-2 px-3">Subdomain takeover check</td><td className="py-2 px-3 font-mono text-xs">--take-over</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">Verbose output</td><td className="py-2 px-3 font-mono text-xs">-v</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">Port scan discovered hosts</td><td className="py-2 px-3 font-mono text-xs">-p</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-t</td><td className="py-2 px-3">TLD expansion</td><td className="py-2 px-3 font-mono text-xs">-t</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Data Sources</h2>
      <p>
        TheHarvester 30+ डेटा सोर्सेज़ सपोर्ट करता है। हर सोर्स का अपना फायदा है। कुछ बिना API key के काम करते हैं, कुछ के लिए free API key चाहिए:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">सोर्स</th>
              <th className="text-left py-2 px-3 text-neon-green">API Key</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या मिलता है</th>
              <th className="text-left py-2 px-3 text-neon-green">विवरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">google</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सबडोमेन्स, ईमेल्स</td><td className="py-2 px-3">Google search scraping — site: operator</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">bing</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सबडोमेन्स, ईमेल्स</td><td className="py-2 px-3">Bing search — Google से different results</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">bingapi</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">सबडोमेन्स, ईमेल्स</td><td className="py-2 px-3">Bing API — rate limiting कम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">duckduckgo</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सबडोमेन्स</td><td className="py-2 px-3">DuckDuckGo — privacy-focused search</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">pgp</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">ईमेल्स (PGP keys)</td><td className="py-2 px-3">PGP key servers — pgp.mit.edu</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">crtsh</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सबडोमेन्स (SSL certs)</td><td className="py-2 px-3">Certificate Transparency — best for subs</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hunter</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">ईमेल्स, पैटर्न</td><td className="py-2 px-3">Hunter.io — email patterns, verification</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hunterhow</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">सबडोमेन्स</td><td className="py-2 px-3">HunterHow search engine</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">shodan</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">ओपन पोर्ट्स, सर्विसेज़</td><td className="py-2 px-3">Shodan — internet-connected devices</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">virustotal</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">सबडोमेन्स</td><td className="py-2 px-3">VirusTotal — passive DNS data</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">censys</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">सर्टिफिकेट्स, होस्ट्स</td><td className="py-2 px-3">Censys — certificate and host search</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">linkedin</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">एंप्लॉई नेम्स</td><td className="py-2 px-3">LinkedIn scraping (limited now)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">threatcrowd</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सबडोमेन्स, ईमेल्स</td><td className="py-2 px-3">ThreatCrowd — threat intelligence</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dnsdumpster</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सबडोमेन्स</td><td className="py-2 px-3">DNSDumpster — DNS recon</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">otx</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">सबडोमेन्स, IP</td><td className="py-2 px-3">AlienVault OTX — threat intelligence</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">anubis</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सबडोमेन्स</td><td className="py-2 px-3">Anubis-DB — subdomain database</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Email Harvesting</h2>
      <p>
        ईमेल हार्वेस्टिंग TheHarvester का मुख्य काम है। टार्गेट कंपनी के एंप्लॉइज़ के ईमेल एड्रेसेज़ निकालो — फिशिंग और स्पीयर फिशिंग के लिए टार्गेट्स मिलेंगे। ईमेल हार्वेस्टिंग social engineering attacks का पहला step है।
      </p>
      <p>
        ईमेल addresses कई sources से मिलते हैं — Google search cache, PGP key servers, Hunter.io API, LinkedIn scraping, और Certificate Transparency logs। हर source different emails देता है। Multiple sources combine करने से comprehensive email list बनती है। Email patterns identify करना भी important है — firstname.lastname@company.com pattern मिलने पर additional emails guess कर सकते हो।
      </p>
      <p>
        TheHarvester से मिले emails को verify करना ज़रूरी है — सभी emails valid नहीं होते। Hunter.io email verification API से validity check करो। Catch-all domains detect करो — अगर domain catch-all है तो सभी emails valid लगेंगे लेकिन actually नहीं होंगे। Bounced emails list से हटाओ — clean list रखो। Email verification phishing campaign success rate बढ़ाती है।
      </p>
      <CodeBlock
        title="ईमेल हार्वेस्टिंग"
        code={`# Google से ईमेल्स:
theHarvester -d target.com -b google

# PGP की सर्वर्स से:
theHarvester -d target.com -b pgp

# Hunter.io से (API key चाहिए):
theHarvester -d target.com -b hunter

# सभी सोर्सेज़ से ईमेल्स:
theHarvester -d target.com -b all -f emails.html

# ईमेल पैटर्न डिस्कवरी:
# Hunter.io बताएगा कि कंपनी किस फॉर्मेट यूज़ करती है
# firstname.lastname@target.com
# f.lastname@target.com
# firstlast@target.com

# ईमेल वेरिफिकेशन:
# Hunter.io API से email validity check करो
# Catch-all detection — क्या domain catch-all है?

# स्पीयर फिशिंग टार्गेट्स:
# TheHarvester → ईमेल्स → LinkedIn → जॉब टाइटल
# HR, Finance, IT admins — high-value targets`}
      />

      <h2>Subdomain Discovery</h2>
      <p>
        TheHarvester सबडोमेन्स ढूंढने में भी बहुत अच्छा है — खासकर Certificate Transparency और सर्च इंजन्स से। सबडोमेन्स attack surface बढ़ाते हैं — जितने ज़्यादा सबडोमेन्स, उतने ज़्यादा targets।
      </p>
      <p>
        Certificate Transparency (crt.sh) सबसे reliable subdomain source है। जब भी कोई SSL certificate issue होता है, वो public CT logs में record होता है। TheHarvester इन logs से subdomains extract करता है। यह passive method है — target को कोई request नहीं जाती। crt.sh से forgotten subdomains भी मिलते हैं जो old servers पर point कर रहे होते हैं — ये often less secure होते हैं।
      </p>
      <p>
        DNS brute force additional subdomains discover करता है — common names (www, mail, api, dev, staging, test) try करके live hosts ढूंढता है। -v flag DNS verification enable करता है — सिर्फ live subdomains दिखाता है जो actually resolve होते हैं। DNS verification slow है लेकिन accurate results देता है। Production use में -v flag recommended है — false positives eliminate होते हैं।
      </p>
      <CodeBlock
        title="सबडोमेन डिस्कवरी"
        code={`# Certificate Transparency से:
theHarvester -d target.com -b crtsh

# सभी सोर्सेज़ से सबडोमेन्स:
theHarvester -d target.com -b all

# DNS वेरिफिकेशन के साथ (-v):
theHarvester -d target.com -b all -v
# -v flag DNS चेक करता है — सिर्फ लाइव सबडोमेन्स दिखाएगा

# सबडोमेन्स फाइल में सेव:
theHarvester -d target.com -b all -f subdomains.html

# IP एड्रेसेज़ के साथ:
theHarvester -d target.com -b all -v
# DNS resolve करके IP addresses भी दिखाएगा

# Shodan से ओपन पोर्ट्स:
theHarvester -d target.com -b all -s

# सबडोमेन takeover check:
theHarvester -d target.com -b all --take-over`}
      />

      <h2>IP Discovery and DNS</h2>
      <p>
        TheHarvester सबडोमेन्स को DNS resolve करके IP addresses निकालता है। यह IP ranges और netblocks की जानकारी भी देता है।
      </p>
      <CodeBlock
        title="IP Discovery"
        code={`# IP addresses के साथ स्कैन:
theHarvester -d target.com -b all -v
# -v flag DNS resolution करता है

# DNS reverse lookup:
theHarvester -d target.com -b all -n

# Custom DNS server:
theHarvester -d target.com -b all -e 8.8.8.8

# IP ranges identify करो:
# TheHarvester → IP addresses → whois → netblocks

# Shodan से IP info:
theHarvester -d target.com -b all -s
# ओपन पोर्ट्स, सर्विसेज़, वल्नरेबिलिटीज़`}
      />

      <h2>DNS Brute Force</h2>
      <p>
        TheHarvester DNS brute force भी कर सकता है — common subdomain names try करके लाइव hosts ढूंढता है।
      </p>
      <CodeBlock
        title="DNS Brute Force"
        code={`# DNS brute force:
theHarvester -d target.com -b all -v

# Common subdomains try होते हैं:
# www, mail, ftp, smtp, pop, ns1, ns2, mx,
# webmail, portal, admin, dev, staging, test,
# api, app, blog, shop, store, cdn, vpn

# Custom wordlist (अगर support हो):
# /usr/share/theHarvester/wordlists/ में check करो

# TLD expansion:
theHarvester -d target.com -b all -t
# .com, .net, .org, .in सब try करेगा`}
      />

      <h2>Shodan Integration</h2>
      <p>
        Shodan से ओपन पोर्ट्स और सर्विसेज़ की जानकारी मिलती है — IP एड्रेसेज़ पर कौन से पोर्ट्स ओपन हैं। Shodan internet-connected devices का search engine है।
      </p>
      <CodeBlock
        title="Shodan से Extra Info"
        code={`# Shodan API key सेट करें:
# /etc/theHarvester/api-keys.yaml में:
# shodan:
#   api_key: YOUR_API_KEY

# Shodan से ओपन पोर्ट्स:
theHarvester -d target.com -b shodan

# Shodan बताएगा:
# - ओपन पोर्ट्स (80, 443, 22, 21, etc.)
# - रनिंग सर्विसेज़ (Apache, nginx, IIS)
# - सर्वर बैनर्स
# - SSL सर्टिफिकेट इन्फो
# - वल्नरेबिलिटीज़ (अगर हों)

# Shodan + TheHarvester workflow:
# 1. TheHarvester से IP addresses निकालो
# 2. Shodan पर हर IP search करो
# 3. ओपन पोर्ट्स और सर्विसेज़ map करो
# 4. वल्नरेबिलिटीज़ identify करो`}
      />

      <h2>Virtual Hosts Discovery</h2>
      <p>
        TheHarvester virtual hosts भी ढूंढ सकता है — एक ही IP पर hosted multiple websites।
      </p>
      <CodeBlock
        title="Virtual Hosts"
        code={`# Virtual hosts discovery:
theHarvester -d target.com -b all

# Virtual hosts क्या हैं?
# एक ही सर्वर/IP पर कई websites host हो सकती हैं
# Apache/NGINX में VirtualHost directive से configure होता है

# TheHarvester से मिले subdomains check करो:
# सबको same IP resolve हो रहे हैं?
# अगर हाँ → virtual hosting environment

# Manual verification:
# हर subdomain पर HTTP request भेजो
# अलग-अलग content आ रहा है?
# Host header change करके check करो`}
      />

      <h2>Output Formats</h2>
      <p>
        TheHarvester कई आउटपुट फॉर्मेट्स सपोर्ट करता है। HTML report सबसे visual है, JSON programmatic processing के लिए best है।
      </p>
      <CodeBlock
        title="आउटपुट ऑप्शंस"
        code={`# HTML रिपोर्ट (ब्राउज़र में खुलेगी):
theHarvester -d target.com -b all -f report.html

# XML फाइल (प्रोग्रामेटिक प्रोसेसिंग):
theHarvester -d target.com -b all -f report.xml

# JSON फाइल (API integration):
theHarvester -d target.com -b all -f report.json

# स्क्रीन आउटपुट (डिफ़ॉल्ट):
theHarvester -d target.com -b all

# DNS रिज़ॉल्वर स्पेसिफाई:
theHarvester -d target.com -b all -e 8.8.8.8

# JSON parsing:
cat report.json | jq '.emails'
cat report.json | jq '.hosts'
cat report.json | jq '.ips'`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="बैश स्क्रिप्ट — OSINT ऑटोमेशन"
        code={`#!/bin/bash
# TheHarvester ऑटोमेशन स्क्रिप्ट
# उपयोग: ./harvest.sh target.com

TARGET=$1
OUTPUT_DIR="/tmp/osint/$TARGET"
mkdir -p "$OUTPUT_DIR"

echo "[+] टार्गेट: $TARGET"
echo "[+] आउटपुट डायरेक्ट्री: $OUTPUT_DIR"

# सभी सोर्सेज़ से स्कैन:
echo "[+] सभी सोर्सेज़ से डेटा कलेक्ट कर रहे हैं..."
theHarvester -d "$TARGET" -b all -f "$OUTPUT_DIR/report.html" -l 500

# ईमेल्स अलग से:
echo "[+] ईमेल्स निकाल रहे हैं..."
theHarvester -d "$TARGET" -b google,bing,pgp,hunter -l 500 > "$OUTPUT_DIR/emails.txt"

# सबडोमेन्स अलग से:
echo "[+] सबडोमेन्स निकाल रहे हैं..."
theHarvester -d "$TARGET" -b crtsh,virustotal,censys -v > "$OUTPUT_DIR/subdomains.txt"

# Shodan info:
echo "[+] Shodan से डेटा निकाल रहे हैं..."
theHarvester -d "$TARGET" -b shodan > "$OUTPUT_DIR/shodan.txt"

# Results summary:
echo ""
echo "[+] रिजल्ट्स:"
echo "    ईमेल्स: $(wc -l < "$OUTPUT_DIR/emails.txt")"
echo "    सबडोमेन्स: $(wc -l < "$OUTPUT_DIR/subdomains.txt")"
echo "    HTML रिपोर्ट: $OUTPUT_DIR/report.html"
echo "[+] डन!"`}
      />

      <CodeBlock
        title="Python स्क्रिप्ट — API से डेटा"
        code={`#!/usr/bin/env python3
# TheHarvester Python API usage
# pip install theHarvester

import asyncio
from theHarvester.discovery import *
from theHarvester.discovery.constants import *

async def harvest(domain, source):
    """एक सोर्स से डेटा कलेक्ट करो"""
    if source == "google":
        search = searchgoogle.SearchGoogle(domain, 200)
    elif source == "bing":
        search = searchbing.SearchBing(domain, 200)
    elif source == "crtsh":
        search = searchcrtsh.SearchCrtsh(domain)

    await search.process()
    emails = search.get_emails()
    hosts = search.get_hostnames()

    print(f"[+] {source} से:")
    print(f"    ईमेल्स: {len(emails)}")
    for email in sorted(emails):
        print(f"        {email}")
    print(f"    होस्ट्स: {len(hosts)}")
    for host in sorted(hosts):
        print(f"        {host}")

    return emails, hosts

async def main():
    domain = "target.com"
    sources = ["google", "bing", "crtsh"]

    all_emails = set()
    all_hosts = set()

    for source in sources:
        try:
            emails, hosts = await harvest(domain, source)
            all_emails.update(emails)
            all_hosts.update(hosts)
        except Exception as e:
            print(f"[-] {source} error: {e}")

    print(f"\\n[+] कुल यूनिक ईमेल्स: {len(all_emails)}")
    print(f"[+] कुल यूनिक होस्ट्स: {len(all_hosts)}")

if __name__ == "__main__":
    asyncio.run(main())`}
      />

      <CodeBlock
        title="Multi-Domain Scanner"
        code={`#!/bin/bash
# कई डोमेन्स के लिए OSINT

DOMAINS_FILE="$1"
OUTPUT_DIR="/tmp/osint_bulk"
mkdir -p "$OUTPUT_DIR"

while IFS= read -r domain; do
    echo "[+] Scanning: $domain"

    theHarvester -d "$domain" -b all -l 200 \\
        -f "$OUTPUT_DIR/$domain.html" \\
        > "$OUTPUT_DIR/$domain.txt" 2>&1

    # Rate limiting — Google block न करे
    sleep 10

done < "$DOMAINS_FILE"

echo "[+] सभी डोमेन्स स्कैन हो गए!"
echo "[+] रिपोर्ट्स: $OUTPUT_DIR/"`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Google से कोई रिजल्ट नहीं आ रहा', a: 'Google rate limiting लगा रहा है। -l 100 कम करो। VPN/Proxy यूज़ करो। दूसरे सोर्स try करो (bing, duckduckgo)। कुछ मिनट wait करो फिर try करो।' },
          { q: 'Hunter.io API key कैसे सेट करें?', a: '/etc/theHarvester/api-keys.yaml फाइल में hunterio section में API key डालो। hunter.io से फ्री key मिलती है (25 searches/month)। Paid plan भी available है।' },
          { q: 'बहुत कम ईमेल्स मिल रहे हैं', a: 'ज़्यादा सोर्सेज़ यूज़ करो: -b all। API keys सेट करो (hunter, shodan, virustotal)। -l 500 बढ़ाओ। PGP server (pgp) भी try करो।' },
          { q: 'DNS verification (-v) बहुत स्लो है', a: 'यह हर होस्ट को DNS resolve करता है। बड़े रिजल्ट्स में टाइम लगता है। बिना -v के run करो पहले, फिर बाद में verify करो। Fast DNS server use करो: -e 1.1.1.1' },
          { q: 'LinkedIn से डेटा नहीं आ रहा', a: 'LinkedIn ने scraping रोक दी है। बाकी सोर्सेज़ यूज़ करो। LinkedIn Sales Navigator manual approach try करो। Hunter.io से employee names मिल सकते हैं।' },
          { q: 'ModuleNotFoundError आ रहा है', a: 'pip3 install -r requirements.txt रन करो। Python 3.8+ चाहिए। Virtual environment use करो: python3 -m venv venv && source venv/bin/activate' },
          { q: 'API rate limit exceeded', a: 'Free API keys की limits होती हैं। Wait करो या paid plan लो। Multiple API keys rotate करो। -l flag से result limit कम करो।' },
          { q: 'HTML report generate नहीं हो रही', a: 'Output directory write permissions check करो। /tmp/ में try करो। -f /tmp/report.html absolute path use करो।' },
          { q: 'Censys API key कैसे मिलेगी?', a: 'censys.io पर free account बनाओ — 250 free queries/month मिलती हैं। API ID और Secret /etc/theHarvester/api-keys.yaml में add करो।' },
          { q: 'VirusTotal API rate limit?', a: 'Free API key: 4 requests/minute। Paid: 1000+/minute। Multiple keys rotate करो। कुछ minutes wait करो rate limit hit होने पर।' },
          { q: 'Shodan free API key कैसे use करें?', a: 'shodan.io पर free account बनाओ। API key profile page पर मिलेगी। /etc/theHarvester/api-keys.yaml में shodan section में add करो। Free tier: 1 query/second।' },
          { q: 'Bulk scanning possible है?', a: 'हाँ, Multi-Domain Scanner script use करो। Domain list file pass करो। Rate limiting handle करो — sleep 10 between scans recommended।' },
          { q: 'Output format कौन सा best है?', a: 'HTML clients के लिए best (visual)। JSON automation के लिए (jq parse)। XML enterprise tools के लिए। Screen output quick check के लिए।' },
          { q: 'TheHarvester v4 vs v3 — क्या फ़र्क?', a: 'v4 में Python asyncio — parallel source queries, बहुत fast। v3 sequential था। v4 में new sources add हुए (brave, hunterhow)। v4 recommended है।' },
          { q: 'Subdomain takeover check कैसे करें?', a: '--take-over flag use करो। यह check करता है कि subdomain किसी third-party service (AWS, GitHub, Heroku) पर point कर रहा है जिसे claim किया जा सकता है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        TheHarvester से कैसे बचें (defensive perspective):
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">ईमेल ऑब्स्क्यूकेशन:</strong> पब्लिक वेबसाइट्स पर ईमेल एड्रेसेज़ सीधे मत डालो — contact forms यूज़ करो</li>
        <li><strong className="text-white">Catch-All Email:</strong> Generic email (info@, contact@) यूज़ करो personal emails की जगह</li>
        <li><strong className="text-white">Certificate Monitoring:</strong> crt.sh पर अपने डोमेन के सर्टिफिकेट्स मॉनिटर करो — unauthorized certs detect होंगे</li>
        <li><strong className="text-white">PGP Keys:</strong> पब्लिक PGP सर्वर्स पर कॉर्पोरेट ईमेल्स मत डालो — यह TheHarvester का main source है</li>
        <li><strong className="text-white">LinkedIn Privacy:</strong> एंप्लॉई प्रोफाइल्स की visibility limit करो — email patterns leak होते हैं</li>
        <li><strong className="text-white">DNS Hardening:</strong> सबडोमेन्स को minimize करो — unused subdomains हटाओ, wildcard DNS avoid करो</li>
        <li><strong className="text-white">Security Headers:</strong> SPF, DKIM, DMARC configure करो — ईमेल स्पूफिंग रुकेगी</li>
        <li><strong className="text-white">Subdomain Monitoring:</strong> Regular audits करो — unauthorized subdomains detect करो</li>
        <li><strong className="text-white">Email Obfuscation:</strong> JavaScript-based email display use करो — scrapers से बचें</li>
        <li><strong className="text-white">Honeypot Emails:</strong> Fake email addresses website पर डालो — scraper activity detect होगी</li>
        <li><strong className="text-white">WHOIS Privacy:</strong> Domain registration में privacy service use करो</li>
        <li><strong className="text-white">Rate Limiting:</strong> Website पर rate limiting लगाओ — automated scraping रुकेगी</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        OSINT practice के लिए safe lab बनाओ:
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# Practice domains:
# - अपना खुद का डोमेन (जैसे yourname.com)
# - Bug bounty programs (HackerOne, Bugcrowd)
# - Intentionally vulnerable labs

# अपना डोमेन बनाओ:
# 1. Domain register करो (Namecheap, GoDaddy) — ₹500-1000/year
# 2. कुछ सबडोमेन्स बनाओ:
#    - mail.yourdomain.com
#    - dev.yourdomain.com
#    - staging.yourdomain.com
#    - api.yourdomain.com
# 3. SSL certificates issue करो (Let's Encrypt)
# 4. TheHarvester से scan करो और देखो क्या दिखता है

# Bug bounty platforms (legal practice):
# - HackerOne: hackerone.com
# - Bugcrowd: bugcrowd.com
# - Intigriti: intigriti.com
# - Synack: synack.com (invitation only)

# OSINT practice labs:
# - OSINT Framework: osintframework.com
# - TryHackMe OSINT rooms
# - HackTheBox OSINT challenges

# TheHarvester + Sherlock combo:
# TheHarvester से ईमेल्स → Sherlock से सोशल मीडिया
# TheHarvester से सबडोमेन्स → Nmap से पोर्ट स्कैन`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        TheHarvester का इस्तेमाल real-world penetration testing और bug bounty में बहुत होता है। यहाँ कुछ practical scenarios हैं जो दिखाते हैं कि TheHarvester कैसे actual attacks में काम आता है:
      </p>
      <p>
        <strong className="text-white">Case Study 1 — Corporate Email Harvesting:</strong> एक red team engagement में tester ने TheHarvester से target company के 200+ employee emails निकाले। Hunter.io API key set करने से email pattern भी मिला — firstname.lastname@company.com। इस pattern से additional emails guess किए गए। LinkedIn से employee names मिले जिनसे spear phishing targets identify हुए। कुल 50+ verified emails के साथ phishing campaign launch किया गया — 15% click rate मिला।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — Bug Bounty Subdomain Discovery:</strong> HackerOne पर एक bug bounty program में hunter ने TheHarvester + crt.sh से 150+ subdomains discover किए। इनमें से staging.target.com और dev-api.target.com live थे जो production से different security config use कर रहे थे। staging subdomain पर admin panel exposed था — critical vulnerability report submit किया गया और $2000 bounty मिली।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — Internal Network Mapping:</strong> एक enterprise pentest में TheHarvester से target company के सभी domains और subdomains map किए गए। Shodan integration से 50+ open ports मिले जिनमें से 3 पर outdated software चल रहा था। Certificate Transparency logs से 10+ forgotten subdomains मिले जो old servers पर point कर रहे थे — एक पर test credentials hardcoded थे। यह सब passive recon से मिला बिना कोई active scan किए।
      </p>
      <p>
        <strong className="text-white">Case Study 4 — Phishing Assessment:</strong> एक authorized phishing assessment में company ने tester को hire किया अपनी employee awareness test करने के लिए। TheHarvester से 300+ employee emails निकाले गए, Hunter.io से email pattern identify हुआ, और LinkedIn से department-wise employee list बनाई। इस data से realistic phishing emails बनाए गए — IT department, HR, और Finance के लिए customized templates। Result: 30% employees ने phishing link click किया, 12% ने credentials submit किए। Company ने awareness training implement की।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        TheHarvester अकेले useful है लेकिन दूसरे tools के साथ combine करने से complete attack chain बनता है। OSINT pipeline में TheHarvester पहला step है — इसके बाद enumeration, scanning, और exploitation tools आते हैं:
      </p>
      <CodeBlock
        title="TheHarvester + Amass + Nuclei Pipeline"
        code={`#!/bin/bash
# Complete OSINT-to-Vulnerability pipeline
TARGET=$1
OUTPUT="/tmp/pipeline/$TARGET"
mkdir -p "$OUTPUT"

# Step 1: TheHarvester (passive recon)
echo "[+] Step 1: TheHarvester passive recon..."
theHarvester -d "$TARGET" -b all -l 500 -f "$OUTPUT/harvester.html" > "$OUTPUT/harvester_raw.txt"

# Step 2: Amass (deep subdomain enum)
echo "[+] Step 2: Amass enumeration..."
amass enum -passive -d "$TARGET" > "$OUTPUT/amass_subs.txt"

# Step 3: Merge and deduplicate
echo "[+] Step 3: Merging results..."
cat "$OUTPUT/harvester_raw.txt" "$OUTPUT/amass_subs.txt" | sort -u > "$OUTPUT/all_subs.txt"

# Step 4: Live host check
echo "[+] Step 4: Checking live hosts..."
cat "$OUTPUT/all_subs.txt" | httpx -silent > "$OUTPUT/live_hosts.txt"

# Step 5: Nuclei vulnerability scan
echo "[+] Step 5: Nuclei vulnerability scan..."
nuclei -l "$OUTPUT/live_hosts.txt" -t vulnerabilities/ -o "$OUTPUT/nuclei_results.txt"

# Step 6: Port scan on discovered IPs
echo "[+] Step 6: Nmap port scan..."
nmap -sV -iL "$OUTPUT/live_hosts.txt" -oN "$OUTPUT/nmap_results.txt"

echo "[+] Pipeline complete! Results in $OUTPUT/"`}
      />

      <h2>Performance Tuning</h2>
      <p>
        TheHarvester को fast और efficient बनाने के लिए कुछ tips:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">API Keys Set करें:</strong> Hunter.io, Shodan, VirusTotal, Censys — API keys set करने से rate limiting कम होती है और ज़्यादा data मिलता है</li>
        <li><strong className="text-white">Result Limit (-l):</strong> Quick scan के लिए -l 100, deep scan के लिए -l 1000। ज़्यादा limit = ज़्यादा time</li>
        <li><strong className="text-white">Specific Sources:</strong> -b all की जगह specific sources use करो — faster results, less noise</li>
        <li><strong className="text-white">DNS Server (-e):</strong> Fast DNS server specify करो: -e 1.1.1.1 या -e 8.8.8.8 — DNS verification faster होगी</li>
        <li><strong className="text-white">Parallel Execution:</strong> v4 में async processing default है — सभी sources parallel में query होते हैं</li>
        <li><strong className="text-white">Rate Limiting Handle:</strong> Google/Bing rate limiting लगाते हैं — VPN rotate करो, ya specific sources use करो</li>
        <li><strong className="text-white">Proxy Configuration:</strong> Proxychains या environment variables से proxy set करो — IP blocking avoid होगी</li>
        <li><strong className="text-white">Caching:</strong> Results cache करो — same domain repeat scan में cached data use करो</li>
      </ul>

      <h2>Reporting and Output Analysis</h2>
      <p>
        TheHarvester के results को analyze करना और report बनाना important है। Raw data useless है बिना proper analysis के:
      </p>
      <CodeBlock
        title="Result Analysis and Reporting"
        code={`# HTML report generate करो:
theHarvester -d target.com -b all -f /tmp/target_report.html

# JSON output parse करो:
theHarvester -d target.com -b all -f /tmp/target.json
cat /tmp/target.json | jq '.emails' > emails.txt
cat /tmp/target.json | jq '.hosts' > hosts.txt
cat /tmp/target.json | jq '.ips' > ips.txt

# Email pattern analysis:
cat emails.txt | awk -F'@' '{print $1}' | sort | uniq -c | sort -rn
# देखो कौन सा pattern सबसे common है

# Subdomain categorization:
cat hosts.txt | grep -E '^(mail|smtp|pop|imap)' > mail_servers.txt
cat hosts.txt | grep -E '^(dev|staging|test|qa)' > dev_servers.txt
cat hosts.txt | grep -E '^(api|app|web)' > web_apps.txt
cat hosts.txt | grep -E '^(admin|portal|login)' > admin_panels.txt

# IP range analysis:
cat ips.txt | sort -u | while read ip; do
    whois "$ip" | grep -E 'NetRange|CIDR|OrgName'
done

# Merge results into final report:
echo "=== OSINT Report for target.com ===" > final_report.txt
echo "Date: $(date)" >> final_report.txt
echo "Emails Found: $(wc -l < emails.txt)" >> final_report.txt
echo "Subdomains Found: $(wc -l < hosts.txt)" >> final_report.txt
echo "IP Addresses: $(wc -l < ips.txt)" >> final_report.txt
echo "" >> final_report.txt
echo "--- Emails ---" >> final_report.txt
cat emails.txt >> final_report.txt
echo "" >> final_report.txt
echo "--- Subdomains ---" >> final_report.txt
cat hosts.txt >> final_report.txt`}
      />

      <h2>TheHarvester vs Other OSINT Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">TheHarvester</th>
              <th className="text-left py-2 px-3 text-neon-green">Amass</th>
              <th className="text-left py-2 px-3 text-neon-green">Subfinder</th>
              <th className="text-left py-2 px-3 text-neon-green">Recon-ng</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">मुख्य काम</td><td className="py-2 px-3">ईमेल + सबडोमेन + नेम्स</td><td className="py-2 px-3">सबडोमेन + अटैक सर्फ़ेस</td><td className="py-2 px-3">सबडोमेन डिस्कवरी</td><td className="py-2 px-3">OSINT फ्रेमवर्क</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">ईमेल हार्वेस्टिंग</td><td className="py-2 px-3">हाँ (बेस्ट)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">LinkedIn Scraping</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">सोर्सेज़ की संख्या</td><td className="py-2 px-3">30+</td><td className="py-2 px-3">50+</td><td className="py-2 px-3">30+</td><td className="py-2 px-3">20+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">ब्रूट फोर्स</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">HTML रिपोर्ट</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GUI</td><td className="py-2 px-3">नहीं (CLI only)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्पीड</td><td className="py-2 px-3">फास्ट</td><td className="py-2 px-3">स्लो (कंप्लीट)</td><td className="py-2 px-3">बहुत फास्ट</td><td className="py-2 px-3">मीडियम</td></tr>
            <tr><td className="py-2 px-3 text-white">लर्निंग कर्व</td><td className="py-2 px-3">आसान</td><td className="py-2 px-3">मीडियम</td><td className="py-2 px-3">आसान</td><td className="py-2 px-3">स्टीप</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="API Keys Configuration"
        code={`# API keys file location:
# /etc/theHarvester/api-keys.yaml

# File structure:
# hunterio:
#   api_key: YOUR_HUNTER_API_KEY
# shodan:
#   api_key: YOUR_SHODAN_API_KEY
# virustotal:
#   api_key: YOUR_VT_API_KEY
# censys:
#   api_id: YOUR_CENSYS_ID
#   api_secret: YOUR_CENSYS_SECRET
# otx:
#   api_key: YOUR_OTX_KEY

# Free API keys kahan se milenge:
# Hunter.io: hunter.io (25 searches/month free)
# Shodan: shodan.io (limited free queries)
# VirusTotal: virustotal.com (4 req/min free)
# Censys: censys.io (250 queries/month free)
# AlienVault OTX: otx.alienvault.com (free)

# API keys test karo:
theHarvester -d test.com -b hunter
theHarvester -d test.com -b shodan
theHarvester -d test.com -b virustotal`}
      />
      <CodeBlock
        title="Custom Source Development"
        code={`# TheHarvester ka code open source hai
# Custom source add kar sakte ho:

# 1. Clone repo:
git clone https://github.com/laramies/theHarvester.git
cd theHarvester

# 2. Source file banao:
# theHarvester/discovery/ directory me naya file
# Example: searchcustomsource.py

# 3. Basic structure:
# class SearchCustomSource:
#     def __init__(self, word, limit):
#         self.word = word
#         self.limit = limit
#         self.results = []
#
#     async def do_search(self):
#         # API call ya web scraping
#         pass
#
#     def get_emails(self):
#         return self.results
#
#     def get_hostnames(self):
#         return self.hostnames

# 4. Register karo:
# theHarvester/discovery/constants.py me source name add karo

# 5. Test:
python3 theHarvester.py -d test.com -b customsource`}
      />
      <CodeBlock
        title="एडवांस्ड OSINT वर्कफ़्लो"
        code={`# स्टेप 1: TheHarvester से ईमेल्स और सबडोमेन्स:
theHarvester -d target.com -b all -f /tmp/target_report.html

# स्टेप 2: ईमेल्स से पैटर्न analyze करो:
# किस फॉर्मेट में ईमेल्स हैं?
# firstname.lastname@target.com?
# f.lastname@target.com?
# firstlast@target.com?

# स्टेप 3: ईमेल्स validate करो:
# theHarvester से मिले ईमेल्स को verify करो
# hunter.io/email-verifier यूज़ करो

# स्टेप 4: सोशल मीडिया ढूंढो:
# Sherlock से एंप्लॉई नेम्स के सोशल प्रोफाइल्स
sherlock firstname_lastname

# स्टेप 5: सबडोमेन्स scan करो:
# Nmap से ओपन पोर्ट्स:
nmap -sV -iL subdomains.txt

# स्टेप 6: वल्नरेबिलिटी स्कैन:
# Nuclei से:
nuclei -l subdomains.txt -t vulnerabilities/

# स्टेप 7: Web app testing:
# लाइव web apps पर Nikto, Burp Suite:
nikto -h http://subdomain.target.com

# स्टेप 8: कंप्लीट रिपोर्ट बनाओ:
# सब डेटा को एक document में compile करो`}
      />

      <CodeBlock
        title="TheHarvester + Nuclei Combo"
        code={`#!/bin/bash
# TheHarvester → Nuclei pipeline

TARGET=$1
OUTPUT_DIR="/tmp/pentest/$TARGET"
mkdir -p "$OUTPUT_DIR"

# Step 1: सबडोमेन्स निकालो:
echo "[+] सबडोमेन्स निकाल रहे हैं..."
theHarvester -d "$TARGET" -b all -v > "$OUTPUT_DIR/all_subs.txt"

# Step 2: सिर्फ unique domains filter करो:
grep -oP '[\\w.-]+\\.'"$TARGET"'' "$OUTPUT_DIR/all_subs.txt" | sort -u > "$OUTPUT_DIR/unique_subs.txt"

# Step 3: Live hosts check करो:
echo "[+] Live hosts check कर रहे हैं..."
cat "$OUTPUT_DIR/unique_subs.txt" | httpx -silent > "$OUTPUT_DIR/live_hosts.txt"

# Step 4: Nuclei scan:
echo "[+] Nuclei scan चला रहे हैं..."
nuclei -l "$OUTPUT_DIR/live_hosts.txt" -t vulnerabilities/ -o "$OUTPUT_DIR/nuclei_results.txt"

echo "[+] डन! Results: $OUTPUT_DIR/"`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या TheHarvester फ्री है?', a: 'हाँ, पूरी तरह फ्री और ओपन सोर्स (GPL)। कुछ सोर्सेज़ (Hunter.io, Shodan) के लिए फ्री API keys चाहिए — free tier available है।' },
          { q: 'क्या यह पैसिव रेकन है?', a: 'हाँ, TheHarvester सिर्फ पब्लिकली उपलब्ध डेटा कलेक्ट करता है। टार्गेट को सीधे कोई रिक्वेस्ट नहीं जाती (सर्च इंजन क्वेरीज़ को छोड़कर)। यह सबसे safe recon method है।' },
          { q: 'कितने ईमेल्स मिल सकते हैं?', a: 'डोमेन और कंपनी की ऑनलाइन presence पर निर्भर। बड़ी कंपनियों (Google, Microsoft) के 100+ ईमेल्स मिल सकते हैं, छोटी कंपनियों के 10-20।' },
          { q: 'क्या यह LinkedIn से डेटा निकाल सकता है?', a: 'TheHarvester में LinkedIn source है लेकिन LinkedIn ने scraping रोक दी है — अब बहुत कम डेटा मिलता है। Hunter.io alternative है।' },
          { q: 'HTML रिपोर्ट कैसे बनाएं?', a: '-f report.html flag यूज़ करो। रिपोर्ट ब्राउज़र में खुलेगी और सभी ईमेल्स, सबडोमेन्स, IP दिखाएगी। Visual और shareable है।' },
          { q: 'API keys कहाँ सेट करें?', a: '/etc/theHarvester/api-keys.yaml फाइल में। हर सोर्स के लिए अलग key होती है। Free tier keys hunter.io, shodan.io, virustotal.com से मिलती हैं।' },
          { q: 'TheHarvester या Amass — कौन बेहतर?', a: 'TheHarvester emails के लिए best है। Amass subdomains के लिए best है। दोनों use करो — complementary tools हैं।' },
          { q: 'क्या यह Windows पर चलता है?', a: 'हाँ, Python 3 install करो और pip से theHarvester install करो। Linux/macOS recommended है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Subdomain Takeover Detection</h2>
      <p>
        TheHarvester --take-over flag से subdomain takeover vulnerability check कर सकते हो। जब कोई subdomain किसी third-party service (AWS S3, GitHub Pages, Heroku, Azure) पर point करता है और वो service delete हो गई है, तो attacker उस service को claim करके subdomain hijack कर सकता है। यह critical vulnerability है — phishing, cookie theft, और reputation damage हो सकता है।
      </p>
      <CodeBlock
        title="Subdomain Takeover Workflow"
        code={`# TheHarvester से takeover check:
theHarvester -d target.com -b all --take-over

# Manual takeover check workflow:
# Step 1: Subdomains collect करो
theHarvester -d target.com -b all -v > subs.txt

# Step 2: CNAME records check करो
for sub in $(cat subs.txt); do
  cname=$(dig +short CNAME $sub 2>/dev/null)
  if [ -n "$cname" ]; then
    echo "$sub -> $cname"
  fi
done > cnames.txt

# Step 3: Vulnerable CNAMEs identify करो
# अगर CNAME point करता है:
# *.s3.amazonaws.com (AWS S3 — claimable)
# *.github.io (GitHub Pages — claimable)
# *.herokuapp.com (Heroku — claimable)
# *.azurewebsites.net (Azure — claimable)
# *.cloudfront.net (CloudFront — check)

# Step 4: Verify takeover
# nslookup check करो — NXDOMAIN आ रहा है?
# Browser में open करो — "Not Found" page दिख रहा?

# Step 5: Report (authorized testing only!)
# Takeover findings critical severity हैं
# Immediate remediation recommend करो`}
      />

      <h2>Email Verification Workflow</h2>
      <p>
        TheHarvester से मिले emails को verify करना ज़रूरी है — सभी emails valid नहीं होते। Verification से false positives remove होते हैं और spear phishing targets accurately identify होते हैं।
      </p>
      <CodeBlock
        title="Email Verification Pipeline"
        code={`#!/bin/bash
# Email verification script

TARGET=$1
EMAILS="emails.txt"

echo "[+] Step 1: Collecting emails..."
theHarvester -d "$TARGET" -b all -l 500 | grep "@" | sort -u > "$EMAILS"

echo "[+] Step 2: Format validation..."
# Basic email regex check
grep -E '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' "$EMAILS" > valid_format.txt

echo "[+] Step 3: Domain check..."
# Verify domain has MX record
while read email; do
  domain=$(echo "$email" | cut -d'@' -f2)
  mx=$(dig +short MX "$domain" 2>/dev/null)
  if [ -n "$mx" ]; then
    echo "$email" >> verified_emails.txt
  fi
done < valid_format.txt

echo "[+] Step 4: SMTP verification..."
# SMTP RCPT TO check (careful — may trigger alerts)
while read email; do
  result=$(echo "RCPT TO:<$email>" | nc -w 5 $(dig +short MX $(echo $email | cut -d'@' -f2) | head -1 | awk '{print $2}') 25 2>/dev/null | grep "250")
  if [ -n "$result" ]; then
    echo "[VALID] $email"
  else
    echo "[INVALID] $email"
  fi
done < verified_emails.txt

echo "[+] Results:"
echo "    Total collected: $(wc -l < $EMAILS)"
echo "    Format valid: $(wc -l < valid_format.txt)"
echo "    Domain verified: $(wc -l < verified_emails.txt)"`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Amass</td><td className="py-2 px-3">सबडोमेन एन्यूमरेशन</td><td className="py-2 px-3">50+ सोर्सेज़, OWASP प्रोजेक्ट, ब्रूट फोर्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Subfinder</td><td className="py-2 px-3">पैसिव सबडोमेन डिस्कवरी</td><td className="py-2 px-3">बहुत तेज़, Go में लिखा, ProjectDiscovery</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Maltego</td><td className="py-2 px-3">OSINT विज़ुअलाइज़ेशन</td><td className="py-2 px-3">ग्राफ़-बेस्ड, GUI, transforms</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Recon-ng</td><td className="py-2 px-3">OSINT फ्रेमवर्क</td><td className="py-2 px-3">मॉड्यूलर, डेटाबेस, workspace</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Sherlock</td><td className="py-2 px-3">यूज़रनेम OSINT</td><td className="py-2 px-3">300+ साइट्स पर सर्च</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SpiderFoot</td><td className="py-2 px-3">Automated OSINT</td><td className="py-2 px-3">Web UI, 200+ modules</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">OSRFramework</td><td className="py-2 px-3">Username enumeration</td><td className="py-2 px-3">usufy, mailfy, domainfy</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Photon</td><td className="py-2 px-3">Web crawler OSINT</td><td className="py-2 px-3">URLs, emails, social accounts extract</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>TheHarvester + Sherlock + Amass कॉम्बो use करो — complete OSINT profile बनेगा</li>
          <li>API keys ज़रूर सेट करो — Hunter.io और Shodan से बहुत ज़्यादा डेटा मिलता है</li>
          <li>पहले -b all -l 100 से quick scan करो, फिर specific sources target करो</li>
          <li>HTML report बनाओ — shareable और visual है, clients को दिखाने के लिए perfect</li>
          <li>TheHarvester results को Nuclei/Amass को feed करो — automated pipeline बनाओ</li>
          <li>ईमेल patterns से नए emails guess कर सकते हो — firstname.lastname@ format</li>
          <li>crt.sh सबसे reliable subdomain source है — Certificate Transparency logs</li>
          <li>Regular scanning करो — new subdomains और emails continuously appear होते हैं</li>
          <li>DNS verification (-v) slow है लेकिन accurate results देता है — production use में ज़रूरी</li>
          <li>Bug bounty programs के लिए passive recon से शुरू करो — active scanning बाद में</li>
          <li>JSON output format automation के लिए best है — jq से parse करो, scripts में use करो</li>
          <li>Rate limiting handle करने के लिए VPN rotate करो — Google/Bing blocking avoid होगी</li>
          <li>Multiple domains scan करते time sleep 10+ seconds रखो between scans — rate limit avoid</li>
          <li>OSINT ethics follow करो — public data collect करो लेकिन responsible use करो</li>
          <li>Results verify करो — false positives common हैं, especially stale DNS records में</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> TheHarvester एक शक्तिशाली OSINT टूल है। यह पब्लिकली उपलब्ध डेटा कलेक्ट करता है, लेकिन इसका दुरुपयोग (फिशिंग, स्पैम, सोशल इंजीनियरिंग) गंभीर कानूनी परिणामों का कारण बन सकता है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत रेकन अपराध हो सकता है। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें। OSINT ethical boundaries का पालन करें — public data है लेकिन responsible use ज़रूरी है।
      </div>
    </TutorialLayout>
  )
}
