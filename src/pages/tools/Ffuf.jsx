import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Ffuf() {
  return (
    <TutorialLayout
      title="ffuf"
      subtitle="तेज़ वेब फ़ज़र — डायरेक्ट्री, पैरामीटर, VHost सब फ़ज़"
      icon="⚡"
      prev={{ to: '/tool/objection', label: 'objection' }}
      next={{ to: '/tool/dnsrecon', label: 'dnsrecon' }}
    >
      <h2>What is Ffuf?</h2>
      <p>
        ffuf (Fuzz Faster U Fool) एक तेज़ वेब फ़ज़र है जो Go भाषा में लिखा गया है। यह डायरेक्ट्री ब्रूट फोर्स, पैरामीटर डिस्कवरी, वर्चुअल होस्ट फ़ज़िंग, POST डेटा फ़ज़िंग, और हेडर फ़ज़िंग जैसे काम कर सकता है। इसकी सबसे बड़ी खासियत "FUZZ" कीवर्ड है — आप URL, हेडर्स, बॉडी, कुकीज़ कहीं भी FUZZ लिख सकते हो और वर्डलिस्ट के शब्द वहां सब्स्टीट्यूट होते हैं।
      </p>
      <p>
        ffuf को जूना होजाला (Joona Hojala) ने बनाया है। यह Gobuster, Dirsearch, और Wfuzz जैसे पुराने टूल्स का मॉडर्न और तेज़ रिप्लेसमेंट है। Go में लिखा होने के कारण यह बहुत तेज़ है — हज़ारों रिक्वेस्ट प्रति सेकंड भेज सकता है। बग बाउंटी हंटर्स और पेनेट्रेशन टेस्टर्स के बीच यह सबसे पॉपुलर फ़ज़िंग टूल है।
      </p>
      <p>
        ffuf की वर्डलिस्ट बेस्ड फ़ज़िंग बहुत पावरफुल है। आप किसी भी HTTP रिक्वेस्ट के किसी भी हिस्से को फ़ज़ कर सकते हो — URL पाथ, क्वेरी पैरामीटर्स, HTTP हेडर्स, POST बॉडी, कुकीज़, और यहां तक कि JSON डेटा भी। यह ffuf को बाकी सभी वेब फ़ज़र्स से अलग बनाता है। काली नेटहंटर में यह प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        ffuf का architecture बहुत efficient है। यह Go की concurrency (goroutines) का फायदा उठाकर parallel में HTTP requests भेजता है। Memory usage बहुत कम है — लाखों requests के बाद भी। Output formats (JSON, HTML, CSV) की वजह से automation pipelines में integrate करना आसान है। ffuf v2 में कई नए features आए — multiple wordlists, clusterbomb mode, और improved filtering।
      </p>
      <p>
        ffuf penetration testing workflow में बहुत important tool है। Reconnaissance phase में hidden directories और files ढूंढने के लिए, parameter discovery से injection points खोजने के लिए, और subdomain enumeration से attack surface बढ़ाने के लिए — सब कुछ एक ही tool से। Bug bounty hunters के लिए तो यह daily driver है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> ffuf केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए उपयोग करें। बिना अनुमति के वेबसाइट फ़ज़िंग करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत स्कैनिंग अपराध हो सकता है। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of Ffuf</h2>
      <p>
        ffuf को 2018 में जूना होजाला (Joona Hojala) ने Go भाषा में लिखा था। इसका उद्देश्य मौजूदा फ़ज़िंग टूल्स की कमियों को दूर करना था — Gobuster बहुत लिमिटेड था, Dirsearch स्लो था, और Wfuzz का कोड बहुत कॉम्प्लेक्स था। ffuf ने इन सबको मिलाकर एक तेज़, फ्लेक्सिबल, और यूज़र फ्रेंडली टूल बनाया।
      </p>
      <p>
        2019 में ffuf ने GitHub पर तेज़ी से पॉपुलैरिटी हासिल की। आज यह 12,000+ स्टार्स के साथ सबसे पॉपुलर वेब फ़ज़र है। इसमें रेगुलर अपडेट्स आते हैं और कम्युनिटी बहुत एक्टिव है। काली लिनक्स में यह डिफ़ॉल्ट टूल बन गया है।
      </p>
      <p>
        ffuf का नाम "Fuzz Faster U Fool" से आया है — यानी फ़ज़ करो तेज़ी से, बेवकूफ़ों! यह नाम मज़ाकिया है लेकिन इसकी capability बहुत serious है। यह ProjectDiscovery के ecosystem (nuclei, subfinder, httpx) के साथ बहुत अच्छा काम करता है। ffuf v2 में concurrency control, better error handling, और improved output formats आए।
      </p>

      <h2>How Ffuf Works?</h2>
      <p>
        ffuf वर्डलिस्ट बेस्ड फ़ज़िंग करता है। यह आपके URL या रिक्वेस्ट में FUZZ कीवर्ड को वर्डलिस्ट के हर शब्द से रिप्लेस करके HTTP रिक्वेस्ट भेजता है। इसका architecture बहुत efficient है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">वर्डलिस्ट लोड:</strong> वर्डलिस्ट फाइल से सभी शब्द मेमोरी में लोड होते हैं। कई wordlists एक साथ load कर सकते हो</li>
        <li><strong className="text-white">FUZZ सब्स्टीट्यूशन:</strong> URL/हेडर/बॉडी में FUZZ की जगह हर शब्द आता है। कई FUZZ keywords (FUZZ1, FUZZ2) एक साथ use कर सकते हो</li>
        <li><strong className="text-white">HTTP रिक्वेस्ट:</strong> हर सब्स्टीट्यूशन के लिए एक HTTP रिक्वेस्ट भेजी जाती है — GET, POST, PUT, DELETE कुछ भी</li>
        <li><strong className="text-white">रिस्पॉन्स एनालिसिस:</strong> स्टेटस कोड, साइज़, वर्ड्स, लाइंस, रेगेक्स से फ़िल्टर/मैच</li>
        <li><strong className="text-white">कंकरेंट प्रोसेसिंग:</strong> Go goroutines से कई थ्रेड्स एक साथ रिक्वेस्ट भेजते हैं</li>
        <li><strong className="text-white">Output Generation:</strong> JSON, HTML, CSV formats में results save होते हैं</li>
        <li><strong className="text-white">Auto-Calibration:</strong> फ़ाल्स पॉज़िटिव्स ऑटो detect और filter करता है</li>
        <li><strong className="text-white">Recursive Scanning:</strong> मिली directories के अंदर भी scan करता है</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में ffuf प्री-इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो कई तरीकों से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="ffuf इंस्टॉलेशन"
        code={`# apt से (सबसे आसान):
sudo apt update
sudo apt install ffuf

# Go से (लेटेस्ट वर्जन):
go install github.com/ffuf/ffuf/v2@latest

# Snap से:
sudo snap install ffuf

# Binary download (GitHub releases):
# https://github.com/ffuf/ffuf/releases से download करो
wget https://github.com/ffuf/ffuf/releases/latest/download/ffuf_2.1.0_linux_amd64.tar.gz
tar xzf ffuf_2.1.0_linux_amd64.tar.gz
sudo mv ffuf /usr/local/bin/

# Docker से:
docker run --rm ffuf/ffuf -u http://target.com/FUZZ -w wordlist.txt

# वर्जन चेक:
ffuf -V

# सहायता:
ffuf -h

# सभी flags देखें:
ffuf -h | grep -i flag`}
      />

      <h2>Basic Usage</h2>
      <p>
        ffuf का बेसिक इस्तेमाल बहुत आसान है — बस URL में FUZZ लिखो और वर्डलिस्ट दो। FUZZ keyword को URL, headers, body, cookies — कहीं भी रख सकते हो।
      </p>
      <CodeBlock
        title="बेसिक फ़ज़िंग"
        code={`# सबसे सिंपल डायरेक्ट्री स्कैन:
ffuf -u http://target.com/FUZZ -w /usr/share/wordlists/dirb/common.txt

# वर्बोज़ आउटपुट:
ffuf -u http://target.com/FUZZ -w wordlist.txt -v

# आउटपुट फाइल में सेव:
ffuf -u http://target.com/FUZZ -w wordlist.txt -o results.json -of json

# कस्टम वर्डलिस्ट:
ffuf -u http://target.com/FUZZ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt

# एक्सटेंशन के साथ:
ffuf -u http://target.com/FUZZ -w wordlist.txt -e .php,.html,.txt,.js,.asp

# HTTPS target:
ffuf -u https://target.com/FUZZ -w wordlist.txt

# कस्टम port:
ffuf -u http://target.com:8080/FUZZ -w wordlist.txt

# ऑटो कैलिब्रेशन (best practice):
ffuf -u http://target.com/FUZZ -w wordlist.txt -ac

# JSON output:
ffuf -u http://target.com/FUZZ -w wordlist.txt -o output.json -of json

# HTML report:
ffuf -u http://target.com/FUZZ -w wordlist.txt -o report.html -of html`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-u</td><td className="py-2 px-3">टार्गेट URL (FUZZ कीवर्ड)</td><td className="py-2 px-3 font-mono text-xs">http://target.com/FUZZ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-w</td><td className="py-2 px-3">वर्डलिस्ट फाइल</td><td className="py-2 px-3 font-mono text-xs">wordlist.txt:KEYWORD</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-mc</td><td className="py-2 px-3">मैच स्टेटस कोड्स</td><td className="py-2 px-3 font-mono text-xs">200,301,302,403</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-fc</td><td className="py-2 px-3">फ़िल्टर स्टेटस कोड्स</td><td className="py-2 px-3 font-mono text-xs">404,500</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-fs</td><td className="py-2 px-3">रिस्पॉन्स साइज़ से फ़िल्टर</td><td className="py-2 px-3 font-mono text-xs">0,4242</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-fw</td><td className="py-2 px-3">रिस्पॉन्स वर्ड्स से फ़िल्टर</td><td className="py-2 px-3 font-mono text-xs">120</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-fl</td><td className="py-2 px-3">रिस्पॉन्स लाइंस से फ़िल्टर</td><td className="py-2 px-3 font-mono text-xs">30</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-mr</td><td className="py-2 px-3">रेगेक्स से मैच</td><td className="py-2 px-3 font-mono text-xs">"admin|root"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-fr</td><td className="py-2 px-3">रेगेक्स से फ़िल्टर</td><td className="py-2 px-3 font-mono text-xs">"Not Found"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t</td><td className="py-2 px-3">थ्रेड्स (डिफ़ॉल्ट 40)</td><td className="py-2 px-3 font-mono text-xs">100</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">रिक्वेस्ट डिले (सेकंड)</td><td className="py-2 px-3 font-mono text-xs">0.5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-rate</td><td className="py-2 px-3">रिक्वेस्ट रेट लिमिट</td><td className="py-2 px-3 font-mono text-xs">500</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-X</td><td className="py-2 px-3">HTTP मेथड</td><td className="py-2 px-3 font-mono text-xs">POST, PUT, DELETE</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d</td><td className="py-2 px-3">POST डेटा</td><td className="py-2 px-3 font-mono text-xs">"user=FUZZ&pass=test"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-H</td><td className="py-2 px-3">कस्टम हेडर</td><td className="py-2 px-3 font-mono text-xs">"Authorization: Bearer FUZZ"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-b</td><td className="py-2 px-3">कुकी</td><td className="py-2 px-3 font-mono text-xs">"session=abc123"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e</td><td className="py-2 px-3">फाइल एक्सटेंशन</td><td className="py-2 px-3 font-mono text-xs">.php,.html,.txt,.js</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-recursion</td><td className="py-2 px-3">रिकर्सिव डायरेक्ट्री स्कैन</td><td className="py-2 px-3 font-mono text-xs">-recursion-depth 3</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">वर्बोज़ आउटपुट</td><td className="py-2 px-3 font-mono text-xs">-v</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o</td><td className="py-2 px-3">आउटपुट फाइल</td><td className="py-2 px-3 font-mono text-xs">results.json</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-of</td><td className="py-2 px-3">आउटपुट फॉर्मेट</td><td className="py-2 px-3 font-mono text-xs">json, html, csv</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-x</td><td className="py-2 px-3">प्रॉक्सी</td><td className="py-2 px-3 font-mono text-xs">http://127.0.0.1:8080</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-ac</td><td className="py-2 px-3">ऑटो कैलिब्रेशन</td><td className="py-2 px-3 font-mono text-xs">-ac</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-timeout</td><td className="py-2 px-3">रिक्वेस्ट टाइमआउट</td><td className="py-2 px-3 font-mono text-xs">10</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-s</td><td className="py-2 px-3">साइलेंट मोड</td><td className="py-2 px-3 font-mono text-xs">-s</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Directory Bruteforce</h2>
      <p>
        डायरेक्ट्री ब्रूट फोर्स ffuf का सबसे कॉमन इस्तेमाल है। वेबसाइट पर हिडन डायरेक्ट्रीज़ और फाइल्स ढूंढता है। यह reconnaissance का सबसे पहला कदम होता है — जितनी ज़्यादा hidden paths मिलेंगे, उतने ज़्यादा attack vectors मिलेंगे।
      </p>
      <CodeBlock
        title="डायरेक्ट्री ब्रूट फोर्स"
        code={`# बेसिक डायरेक्ट्री स्कैन:
ffuf -u http://target.com/FUZZ -w /usr/share/wordlists/dirb/common.txt

# एक्सटेंशन के साथ:
ffuf -u http://target.com/FUZZ -w wordlist.txt -e .php,.html,.txt,.js,.asp,.aspx,.jsp

# स्पेसिफिक स्टेटस कोड्स:
ffuf -u http://target.com/FUZZ -w wordlist.txt -mc 200,301,302,403

# 404 फ़िल्टर करें:
ffuf -u http://target.com/FUZZ -w wordlist.txt -fc 404

# साइज़ से फ़िल्टर (ज़ीरो साइज़ रिस्पॉन्स हटाएं):
ffuf -u http://target.com/FUZZ -w wordlist.txt -fs 0

# रिकर्सिव स्कैन (मिली directories के अंदर भी):
ffuf -u http://target.com/FUZZ -w wordlist.txt -recursion -recursion-depth 3

# वर्बोज़ आउटपुट (URL दिखाएं):
ffuf -u http://target.com/FUZZ -w wordlist.txt -v

# बड़ी वर्डलिस्ट (raft-medium):
ffuf -u http://target.com/FUZZ -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt

# सबसे बड़ी वर्डलिस्ट (raft-large):
ffuf -u http://target.com/FUZZ -w /usr/share/seclists/Discovery/Web-Content/raft-large-directories.txt -fc 404 -fs 0

# कस्टम वर्डलिस्ट (CeWL से बनाई):
ffuf -u http://target.com/FUZZ -w custom_wordlist.txt -ac`}
      />

      <h2>Subdomain Fuzzing</h2>
      <p>
        ffuf से सबडोमेन्स भी ढूंढ सकते हो — Host हेडर में FUZZ यूज़ करके। यह virtual host discovery के लिए भी काम आता है।
      </p>
      <CodeBlock
        title="सबडोमेन फ़ज़िंग"
        code={`# Host हेडर में फ़ज़:
ffuf -u http://target.com -H "Host: FUZZ.target.com" -w subdomains.txt

# स्पेसिफिक स्टेटस मैच:
ffuf -u http://target.com -H "Host: FUZZ.target.com" -w subdomains.txt -mc 200

# साइज़ फ़िल्टर (डिफ़ॉल्ट पेज हटाएं):
ffuf -u http://target.com -H "Host: FUZZ.target.com" -w subdomains.txt -fs 0

# कस्टम DNS रिज़ॉल्वर:
ffuf -u http://target.com -H "Host: FUZZ.target.com" -w subdomains.txt -resolve target.com:1.2.3.4

# SecLists सबडोमेन वर्डलिस्ट:
ffuf -u http://target.com -H "Host: FUZZ.target.com" -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt

# VHost डिस्कवरी (same IP पर multiple sites):
ffuf -u http://192.168.1.10 -H "Host: FUZZ.target.com" -w vhosts.txt -mc 200

# Wildcard domain handling:
ffuf -u http://target.com -H "Host: FUZZ.target.com" -w subdomains.txt -ac -fc 404`}
      />

      <h2>Parameter Discovery</h2>
      <p>
        हिडन पैरामीटर्स ढूंढने के लिए पैरामीटर फ़ज़िंग बहुत उपयोगी है। यह SQLi, XSS, IDOR जैसी वल्नरेबिलिटीज़ खोजने में मदद करता है। Hidden parameters से often critical functionality मिलती है।
      </p>
      <CodeBlock
        title="पैरामीटर डिस्कवरी"
        code={`# GET पैरामीटर फ़ज़:
ffuf -u "http://target.com/page?FUZZ=test" -w params.txt

# POST पैरामीटर फ़ज़:
ffuf -u http://target.com/login -w params.txt -X POST -d "FUZZ=admin"

# JSON बॉडी फ़ज़:
ffuf -u http://target.com/api -w params.txt -X POST -H "Content-Type: application/json" -d '{"FUZZ":"test"}'

# वैल्यू फ़ज़ (पैरामीटर फिक्स, वैल्यू बदलें):
ffuf -u "http://target.com/page?id=FUZZ" -w numbers.txt

# कई पैरामीटर्स एक साथ:
ffuf -u "http://target.com/page?FUZZ1=test&FUZZ2=test" -w wordlist.txt

# Cookie फ़ज़:
ffuf -u http://target.com/admin -H "Cookie: session=FUZZ" -w tokens.txt

# API endpoint discovery:
ffuf -u http://target.com/api/v1/FUZZ -w api-endpoints.txt -mc 200,201,401,403

# Hidden parameter wordlist (Burp style):
ffuf -u "http://target.com/page?FUZZ=test" -w /usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt`}
      />

      <h2>POST Data Fuzzing</h2>
      <p>
        लॉगिन फॉर्म्स और API एंडपॉइंट्स पर POST डेटा फ़ज़िंग बहुत काम आती है। यह credential bruteforce, API testing, और form injection testing के लिए इस्तेमाल होती है।
      </p>
      <CodeBlock
        title="POST फ़ज़िंग"
        code={`# लॉगिन ब्रूट फोर्स (यूज़रनेम फ़ज़):
ffuf -u http://target.com/login -X POST -d "username=FUZZ&password=test" -w usernames.txt

# पासवर्ड फ़ज़:
ffuf -u http://target.com/login -X POST -d "username=admin&password=FUZZ" -w passwords.txt

# दोनों एक साथ (clusterbomb):
ffuf -u http://target.com/login -X POST -d "username=FUZZ1&password=FUZZ2" -w users.txt:FUZZ1 -w passwords.txt:FUZZ2

# फॉर्म डेटा फ़ज़:
ffuf -u http://target.com/register -X POST -d "email=FUZZ@test.com&name=test" -w emails.txt

# कस्टम कंटेंट टाइप:
ffuf -u http://target.com/api -X POST -H "Content-Type: application/json" -d '{"user":"FUZZ","pass":"test"}' -w users.txt

# कुकी फ़ज़:
ffuf -u http://target.com/admin -H "Cookie: session=FUZZ" -w tokens.txt

# XML POST:
ffuf -u http://target.com/api -X POST -H "Content-Type: application/xml" -d '<user><name>FUZZ</name></user>' -w names.txt

# Multi-part form:
ffuf -u http://target.com/upload -X POST -H "Content-Type: multipart/form-data" -d "file=FUZZ" -w files.txt`}
      />

      <h2>Header Fuzzing</h2>
      <p>
        HTTP हेडर फ़ज़िंग से हिडन फंक्शनलिटी और वल्नरेबिलिटीज़ मिल सकती हैं। Headers often control authentication, routing, और access control।
      </p>
      <CodeBlock
        title="हेडर फ़ज़िंग"
        code={`# X-Forwarded-For फ़ज़ (IP स्पूफिंग):
ffuf -u http://target.com/admin -H "X-Forwarded-For: FUZZ" -w ips.txt

# कस्टम हेडर फ़ज़ (auth bypass):
ffuf -u http://target.com/api -H "Authorization: Bearer FUZZ" -w tokens.txt

# User-Agent फ़ज़:
ffuf -u http://target.com/FUZZ -H "User-Agent: FUZZ" -w useragents.txt

# Referer फ़ज़:
ffuf -u http://target.com/FUZZ -H "Referer: FUZZ" -w referers.txt

# Host हेडर फ़ज़ (VHost):
ffuf -u http://target.com -H "Host: FUZZ" -w vhosts.txt

# Custom header discovery:
ffuf -u http://target.com/api -H "X-Custom-Header: FUZZ" -w headers.txt

# API key fuzzing:
ffuf -u http://target.com/api -H "X-API-Key: FUZZ" -w apikeys.txt

# JWT token fuzzing:
ffuf -u http://target.com/api -H "Authorization: Bearer FUZZ" -w jwt-tokens.txt

# Accept header fuzzing:
ffuf -u http://target.com/FUZZ -H "Accept: FUZZ" -w accept-types.txt`}
      />

      <h2>Filtering and Matching</h2>
      <p>
        ffuf में रिस्पॉन्स को फ़िल्टर और मैच करने के कई तरीके हैं — फ़ाल्स पॉज़िटिव्स हटाने के लिए। सही filter combination use करना बहुत important है।
      </p>
      <CodeBlock
        title="फ़िल्टर और मैच"
        code={`# स्टेटस कोड मैच (सिर्फ 200 और 301):
ffuf -u http://target.com/FUZZ -w wordlist.txt -mc 200,301

# स्टेटस कोड फ़िल्टर (404 हटाएं):
ffuf -u http://target.com/FUZZ -w wordlist.txt -fc 404

# रिस्पॉन्स साइज़ फ़िल्टर:
ffuf -u http://target.com/FUZZ -w wordlist.txt -fs 4242

# वर्ड्स काउंट फ़िल्टर:
ffuf -u http://target.com/FUZZ -w wordlist.txt -fw 120

# लाइंस काउंट फ़िल्टर:
ffuf -u http://target.com/FUZZ -w wordlist.txt -fl 30

# रेगेक्स मैच:
ffuf -u http://target.com/FUZZ -w wordlist.txt -mr "admin|root|password"

# रेगेक्स फ़िल्टर:
ffuf -u http://target.com/FUZZ -w wordlist.txt -fr "Not Found|404|Error"

# ऑटो कैलिब्रेशन (बेस्ट — फ़ाल्स पॉज़िटिव्स ऑटो हटाएं):
ffuf -u http://target.com/FUZZ -w wordlist.txt -ac

# कई फ़िल्टर combine करें:
ffuf -u http://target.com/FUZZ -w wordlist.txt -fc 404 -fs 0 -fw 120

# कस्टम error page detect करें:
ffuf -u http://target.com/FUZZ -w wordlist.txt -ac -fc 404`}
      />

      <h2>Recursion and Auto-Calibration</h2>
      <p>
        Recursion और auto-calibration ffuf के powerful features हैं जो comprehensive scanning के लिए ज़रूरी हैं।
      </p>
      <CodeBlock
        title="Recursion"
        code={`# रिकर्सिव स्कैन (मिली directories के अंदर भी):
ffuf -u http://target.com/FUZZ -w wordlist.txt -recursion

# रिकर्शन डेप्थ सेट करें:
ffuf -u http://target.com/FUZZ -w wordlist.txt -recursion -recursion-depth 2

# रिकर्शन डेप्थ 3 (गहरा scan):
ffuf -u http://target.com/FUZZ -w wordlist.txt -recursion -recursion-depth 3

# ऑटो कैलिब्रेशन (best practice):
ffuf -u http://target.com/FUZZ -w wordlist.txt -ac
# यह automatically error pages detect करके filter करता है

# ऑटो कैलिब्रेशन + रिकर्शन:
ffuf -u http://target.com/FUZZ -w wordlist.txt -ac -recursion -recursion-depth 2

# Recursion strategy:
# - पहले top-level scan करो
# - फिर interesting directories में recursive scan
# - या -recursion flag से automatic`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        ffuf को स्क्रिप्ट्स में इस्तेमाल करके ऑटोमेटेड रेकन पाइपलाइन बना सकते हो। JSON output parse करके results process करना आसान है।
      </p>
      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट 1 — बल्क स्कैन"
        code={`#!/bin/bash
# ऑटोमेटेड डायरेक्ट्री स्कैन — सभी टार्गेट्स के लिए

TARGETS="targets.txt"
WORDLIST="/usr/share/wordlists/dirb/common.txt"
OUTPUT_DIR="ffuf_results"

mkdir -p "$OUTPUT_DIR"

while read target; do
  echo "[+] स्कैनिंग: $target"

  # ffuf से डायरेक्ट्री स्कैन:
  ffuf -u "http://$target/FUZZ" -w "$WORDLIST" -mc 200,301,302 -ac \
    -o "$OUTPUT_DIR/\\${target}.json" -of json -s

  # रिजल्ट्स निकालें:
  echo "[+] मिले endpoints:"
  cat "$OUTPUT_DIR/\\${target}.json" | jq -r '.results[] | .input.FUZZ + " -> " + (.status|tostring) + " (" + (.length|tostring) + " bytes)"'

  echo "[+] डन: $target"
  echo "---"
done < "$TARGETS"

echo "[+] सभी स्कैन पूरे! रिजल्ट्स: $OUTPUT_DIR/"`}
      />

      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट 2 — पूरा रेकन"
        code={`#!/bin/bash
# पूरा web reconnaissance pipeline

TARGET=$1
OUTPUT_DIR="recon_$TARGET"
mkdir -p "$OUTPUT_DIR"

echo "[1/5] डायरेक्ट्री स्कैन..."
ffuf -u "http://$TARGET/FUZZ" -w /usr/share/wordlists/dirb/common.txt \
  -e .php,.html,.txt,.js,.asp -mc 200,301,302,403 -ac \
  -o "$OUTPUT_DIR/dirs.json" -of json -s

echo "[2/5] सबडोमेन स्कैन..."
ffuf -u "http://$TARGET" -H "Host: FUZZ.$TARGET" \
  -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt \
  -mc 200 -ac -o "$OUTPUT_DIR/subs.json" -of json -s

echo "[3/5] पैरामीटर डिस्कवरी..."
ffuf -u "http://$TARGET/page?FUZZ=test" \
  -w /usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt \
  -mc 200 -ac -o "$OUTPUT_DIR/params.json" -of json -s

echo "[4/5] API endpoint discovery..."
ffuf -u "http://$TARGET/api/v1/FUZZ" \
  -w /usr/share/seclists/Discovery/Web-Content/api/api-endpoints.txt \
  -mc 200,201,401,403 -o "$OUTPUT_DIR/api.json" -of json -s

echo "[5/5] रिपोर्ट बना रहे हैं..."
echo "=== रिपोर्ट: $TARGET ===" > "$OUTPUT_DIR/report.txt"
echo "Directories:" >> "$OUTPUT_DIR/report.txt"
cat "$OUTPUT_DIR/dirs.json" | jq -r '.results[] | .input.FUZZ' >> "$OUTPUT_DIR/report.txt"
echo "Subdomains:" >> "$OUTPUT_DIR/report.txt"
cat "$OUTPUT_DIR/subs.json" | jq -r '.results[] | .input.FUZZ' >> "$OUTPUT_DIR/report.txt"
echo "[+] पूरा! रिजल्ट्स: $OUTPUT_DIR/"`}
      />

      <CodeBlock
        title="Python Automation Script"
        code={`#!/usr/bin/env python3
# ffuf automation — Python wrapper

import subprocess
import json
import sys

def run_ffuf(target, wordlist, extensions=""):
    """ffuf scan run करो और results return करो"""
    cmd = [
        "ffuf",
        "-u", f"http://{target}/FUZZ",
        "-w", wordlist,
        "-mc", "200,301,302,403",
        "-ac",
        "-of", "json",
        "-o", "/tmp/ffuf_output.json",
        "-s"
    ]

    if extensions:
        cmd.extend(["-e", extensions])

    subprocess.run(cmd, capture_output=True)

    # results parse करो
    try:
        with open("/tmp/ffuf_output.json") as f:
            data = json.load(f)
        return data.get("results", [])
    except:
        return []

# target scan करो
results = run_ffuf("target.com", "/usr/share/wordlists/dirb/common.txt", ".php,.html")

for r in results:
    print(f"[+] {r['input']['FUZZ']} -> {r['status']} ({r['length']} bytes)")`}
      />

      <h2>Ffuf vs Gobuster vs Dirsearch vs Wfuzz</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Ffuf</th>
              <th className="text-left py-2 px-3 text-neon-green">Gobuster</th>
              <th className="text-left py-2 px-3 text-neon-green">Dirsearch</th>
              <th className="text-left py-2 px-3 text-neon-green">Wfuzz</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">भाषा</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">Python</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्पीड</td><td className="py-2 px-3">बहुत तेज़</td><td className="py-2 px-3">तेज़</td><td className="py-2 px-3">मीडियम</td><td className="py-2 px-3">मीडियम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">FUZZ कीवर्ड</td><td className="py-2 px-3">हाँ (कहीं भी)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">पैरामीटर फ़ज़िंग</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">VHost फ़ज़िंग</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">ऑटो कैलिब्रेशन</td><td className="py-2 px-3">हाँ (-ac)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">रिकर्शन</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">मल्टी वर्डलिस्ट</td><td className="py-2 px-3">हाँ (FUZZ1, FUZZ2)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">JSON Output</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white">आउटपुट फॉर्मेट</td><td className="py-2 px-3">JSON, HTML, CSV</td><td className="py-2 px-3">TXT</td><td className="py-2 px-3">TXT, JSON</td><td className="py-2 px-3">TXT</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'बहुत सारे फ़ाल्स पॉज़िटिव्स आ रहे हैं', a: '-ac (ऑटो कैलिब्रेशन) फ्लैग यूज़ करो। यह ऑटोमैटिकली फ़ाल्स पॉज़िटिव्स डिटेक्ट करके फ़िल्टर कर देता है। अगर फिर भी आ रहे हैं तो -fs, -fw, -fl से मैनुअली फ़िल्टर करो।' },
          { q: 'स्कैन बहुत स्लो है', a: 'थ्रेड्स बढ़ाओ (-t 100) लेकिन सर्वर क्रैश न हो। रेट लिमिट सेट करो (-rate 500)। वर्डलिस्ट छोटी यूज़ करो।' },
          { q: 'WAF ब्लॉक कर रहा है', a: 'रेट लिमिट कम करो (-rate 50)। कस्टम User-Agent सेट करो। डिले जोड़ो (-p 1)। प्रॉक्सी यूज़ करो (-x)।' },
          { q: '404 नहीं फ़िल्टर हो रहे', a: '-fc 404 यूज़ करो। अगर कस्टम 404 पेज है तो -fs (साइज़) या -fw (वर्ड्स) से फ़िल्टर करो। -ac (auto-calibration) try करो।' },
          { q: 'HTTPS काम नहीं कर रहा', a: 'URL में https:// लिखो। अगर सर्टिफ़िकेट एरर है तो proxy यूज़ करो या custom header set करो।' },
          { q: 'वर्डलिस्ट कौन सी यूज़ करूं?', a: 'शुरुआत /usr/share/wordlists/dirb/common.txt से करो। फिर dirbuster की medium लिस्ट। SecLists की raft-medium-directories.txt best है।' },
          { q: 'रिकर्सिव स्कैन कैसे करूं?', a: '-recursion और -recursion-depth 3 फ्लैग्स यूज़ करो। यह मिली हुई डायरेक्ट्रीज़ के अंदर भी स्कैन करेगा।' },
          { q: 'Output parse कैसे करूं?', a: 'JSON output (-o results.json -of json) यूज़ करो। jq से parse करो: cat results.json | jq ".results[] | .input.FUZZ"' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        ffuf से बचने के लिए वेब एप्लिकेशन और सर्वर को सिक्योर करना ज़रूरी है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Web Application Firewall (WAF):</strong> Cloudflare, ModSecurity, AWS WAF लगाएं — automated scanning detect और block होगी</li>
        <li><strong className="text-white">Rate Limiting:</strong> एक IP से रिक्वेस्ट रेट लिमिट करें — 100 requests/minute जैसा</li>
        <li><strong className="text-white">CAPTCHA:</strong> सस्पीशियस रिक्वेस्ट्स पर CAPTCHA लगाएं — automated tools bypass नहीं कर पाएंगे</li>
        <li><strong className="text-white">IP Blocking:</strong> बार-बार 404 वाले IP को temporarily block करें</li>
        <li><strong className="text-white">Custom 404 Pages:</strong> स्टैंडर्ड 404 पेज से इन्फॉर्मेशन लीक न हो — consistent response size maintain करें</li>
        <li><strong className="text-white">Log Monitoring:</strong> अन्यूज़ुअल स्कैनिंग पैटर्न detect करें — ELK Stack, Splunk use करें</li>
        <li><strong className="text-white">Honeypot Files:</strong> फ़ेक हिडन फाइल्स रखें जो alert trigger करें — जैसे /admin-backup.php</li>
        <li><strong className="text-white">Request Throttling:</strong> Slow responses भेजो suspicious IPs को — scanning slow हो जाएगी</li>
        <li><strong className="text-white">Bot Detection:</strong> JavaScript challenge, fingerprinting से bots detect करें</li>
        <li><strong className="text-white">Access Control:</strong> Sensitive directories को authentication से protect करें</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        ffuf प्रैक्टिस के लिए सेफ लैब बनाना ज़रूरी है — real websites पर scan करना illegal है:
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# DVWA (Damn Vulnerable Web Application):
docker run --rm -it -p 80:80 vulnerables/web-dvwa

# WebGoat (OWASP):
docker run --rm -p 8080:8080 webgoat/webgoat

# Juice Shop (OWASP):
docker run --rm -p 3000:3000 bkimminich/juice-shop

# ffuf से प्रैक्टिस:
ffuf -u http://localhost:8080/FUZZ -w /usr/share/wordlists/dirb/common.txt

# वर्डलिस्ट्स:
# /usr/share/wordlists/dirb/common.txt — छोटी, fast
# /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt — medium
# /usr/share/seclists/Discovery/Web-Content/common.txt — comprehensive
# /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt — best

# Custom wordlist बनाओ (CeWL से):
cewl http://target.com -w custom_wordlist.txt

# Practice workflow:
# 1. DVWA install करो
# 2. ffuf से directory scan करो
# 3. Parameter discovery करो
# 4. Results analyze करो
# 5. Filtering techniques practice करो`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड फ़ज़िंग"
        code={`# मल्टीपल वर्डलिस्ट्स (कई FUZZ पॉइंट्स):
ffuf -u "http://target.com/FUZZ1/FUZZ2" -w wordlist1.txt:FUZZ1 -w wordlist2.txt:FUZZ2

# क्लस्टर बम मोड (कॉम्बिनेशन — हर username के साथ हर password):
ffuf -u http://target.com/login -X POST -d "user=FUZZ1&pass=FUZZ2" -w users.txt:FUZZ1 -w passwords.txt:FUZZ2

# प्रॉक्सी के साथ (Burp Suite में देखो):
ffuf -u http://target.com/FUZZ -w wordlist.txt -x http://127.0.0.1:8080

# डिले के साथ (WAF बायपास):
ffuf -u http://target.com/FUZZ -w wordlist.txt -p 0.5

# कस्टम HTTP मेथड:
ffuf -u http://target.com/FUZZ -w wordlist.txt -X PUT

# कुकी के साथ (ऑथेंटिकेटेड स्कैन):
ffuf -u http://target.com/FUZZ -w wordlist.txt -b "session=abc123"

# प्रॉक्सी चेन (SOCKS5):
ffuf -u http://target.com/FUZZ -w wordlist.txt -x socks5://127.0.0.1:1080

# ऑटो कैलिब्रेशन + मल्टी फ़िल्टर:
ffuf -u http://target.com/FUZZ -w wordlist.txt -ac -fc 404 -fs 0

# Silent mode (automation के लिए):
ffuf -u http://target.com/FUZZ -w wordlist.txt -s

# Request timeout set करो:
ffuf -u http://target.com/FUZZ -w wordlist.txt -timeout 10

# Match specific words in response:
ffuf -u http://target.com/FUZZ -w wordlist.txt -mr "admin|root|password|secret"

# Filter by response time:
ffuf -u http://target.com/FUZZ -w wordlist.txt -ft 5000`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'ffuf और Gobuster में क्या फ़र्क है?', a: 'ffuf में FUZZ कीवर्ड कहीं भी यूज़ कर सकते हो — URL, हेडर, बॉडी कहीं भी। Gobuster सिर्फ डायरेक्ट्री और सबडोमेन कर सकता है। ffuf ज़्यादा फ्लेक्सिबल और तेज़ है।' },
          { q: 'सबसे अच्छी वर्डलिस्ट कौन सी है?', a: 'शुरुआत के लिए /usr/share/wordlists/dirb/common.txt। प्रोडक्शन के लिए SecLists की raft-medium-directories.txt। बड़े targets के लिए raft-large-directories.txt।' },
          { q: 'फ़ाल्स पॉज़िटिव्स कैसे हटाऊं?', a: '-ac (ऑटो कैलिब्रेशन) यूज़ करो — यह ऑटोमैटिकली डिटेक्ट करता है। नहीं तो -fc, -fs, -fw, -fl फ्लैग्स से मैनुअली फ़िल्टर करो।' },
          { q: 'WAF बायपास कैसे करूं?', a: 'रेट कम करो (-rate 50), डिले जोड़ो (-p 1), कस्टम User-Agent सेट करो, प्रॉक्सी यूज़ करो।' },
          { q: 'क्या ffuf फ्री है?', a: 'हाँ, पूरी तरह फ्री और ओपन सोर्स (MIT लाइसेंस)।' },
          { q: 'रिकर्सिव स्कैन कैसे करूं?', a: '-recursion और -recursion-depth 3 फ्लैग्स यूज़ करो। यह मिली हुई डायरेक्ट्रीज़ के अंदर भी स्कैन करेगा।' },
          { q: 'Output parse कैसे करूं?', a: 'JSON output (-o results.json -of json) यूज़ करो। jq से parse करो: cat results.json | jq ".results[] | .input.FUZZ"' },
          { q: 'मल्टीपल वर्डलिस्ट कैसे यूज़ करूं?', a: '-w wordlist1.txt:FUZZ1 -w wordlist2.txt:FUZZ2 फॉर्मेट में। FUZZ keyword को URL में match करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        ffuf real-world penetration testing और bug bounty programs में extensively use होता है। यहाँ कुछ practical scenarios हैं:
      </p>
      <p>
        <strong className="text-white">Case Study 1 — Hidden Admin Panel Discovery:</strong> एक bug bounty hunter ने target e-commerce website पर ffuf run किया raft-medium-directories.txt wordlist के साथ। `/internal/admin-panel` path मिला जो login page पर redirect करता था। Default credentials (admin:admin) से login हो गया — PII data access हो गया। Company ने $5,000 bounty दिया। सिर्फ directory brute force से critical finding मिला।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — API Endpoint Discovery:</strong> fintech startup के bug bounty में hunter ने ffuf से API endpoints fuzz किए: `ffuf -u https://api.target.com/v1/FUZZ -w api-endpoints.txt`। `/v1/admin/users`, `/v1/debug`, `/v1/config` endpoints मिले। Debug endpoint पर database credentials expose हो रहे थे — $10,000 bounty मिला। API fuzzing modern web apps में बहुत important है।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — Subdomain Takeover:</strong> security researcher ने ffuf से VHost fuzzing किया: `ffuf -u http://target.com -H "Host: FUZZ.target.com" -w subdomains.txt`। 3 orphaned subdomains मिले जो Heroku पर point कर रहे थे लेकिन app delete हो चुकी थी। Subdomain takeover possible था — $2,500 bounty। VHost fuzzing ffuf का unique feature है।
      </p>
      <p>
        <strong className="text-white">Case Study 4 — Parameter Discovery for IDOR:</strong> social media platform के bug bounty में hunter ने profile page पर parameter fuzzing किया: `ffuf -u "https://target.com/profile?FUZZ=test" -w params.txt`। `id` parameter के अलावा `user_id`, `account`, `debug` parameters मिले। `debug=true` set करने पर internal data expose हो रहा था — $3,000 bounty। Hidden parameters से often critical bugs मिलते हैं।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        ffuf को दूसरे recon tools के साथ pipeline में combine करके comprehensive web application testing कर सकते हो:
      </p>
      <CodeBlock
        title="ffuf Pipeline Integration"
        code={`# ffuf + subfinder + httpx (full recon):
subfinder -d target.com -silent | httpx -silent > alive.txt
cat alive.txt | while read url; do
  ffuf -u "$url/FUZZ" -w wordlist.txt -ac -s -o "results/$(echo $url | md5sum | cut -d' ' -f1).json" -of json
done

# ffuf + Nuclei (fuzz then vuln scan):
ffuf -u http://target.com/FUZZ -w wordlist.txt -ac -s -o dirs.json -of json
cat dirs.json | jq -r '.results[].url' | nuclei -severity critical,high

# ffuf + Nikto (directory scan + vuln scan):
ffuf -u http://target.com/FUZZ -w wordlist.txt -mc 200,301 -ac -s > dirs.txt
nikto -h http://target.com -root $(head -1 dirs.txt)

# ffuf + Gobuster (cross-verify):
ffuf -u http://target.com/FUZZ -w wordlist.txt -ac -mc 200,301 -s > ffuf_results.txt
gobuster dir -u http://target.com -w wordlist.txt -s 200,301 > gobuster_results.txt
# Common results = high confidence findings

# ffuf + SQLmap (parameter fuzz → SQL injection):
ffuf -u "http://target.com/page?FUZZ=test" -w params.txt -mc 200 -ac -s > params_found.txt
cat params_found.txt | while read param; do
  sqlmap -u "http://target.com/page?$param=test" --batch
done

# ffuf + Burp Suite (proxy analysis):
ffuf -u http://target.com/FUZZ -w wordlist.txt -x http://127.0.0.1:8080
# Burp mein requests analyze karo`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        ffuf JSON output parse करके professional reports बना सकते हो:
      </p>
      <CodeBlock
        title="Report Generation"
        code={`# JSON output analysis with jq:
# Total findings count:
cat results.json | jq '.results | length'

# Status code distribution:
cat results.json | jq -r '.results[].status' | sort | uniq -c | sort -rn

# Unique directories found:
cat results.json | jq -r '.results[] | .input.FUZZ + " -> " + (.status|tostring)'

# Filter by status code:
cat results.json | jq '.results[] | select(.status==200)'

# Filter by size (interesting responses):
cat results.json | jq '.results[] | select(.length > 1000)'

# Generate HTML report:
ffuf -u http://target.com/FUZZ -w wordlist.txt -o report.html -of html
# Browser mein open karo — professional looking report

# CSV export (Excel compatible):
ffuf -u http://target.com/FUZZ -w wordlist.txt -o results.csv -of csv

# Summary script:
#!/bin/bash
echo "=== ffuf Scan Report ==="
echo "Target: $1"
echo "Date: $(date)"
echo "Total findings: $(cat results.json | jq '.results | length')"
echo "200 OK: $(cat results.json | jq '[.results[] | select(.status==200)] | length')"
echo "301 Redirect: $(cat results.json | jq '[.results[] | select(.status==301)] | length')"
echo "403 Forbidden: $(cat results.json | jq '[.results[] | select(.status==403)] | length')"
echo ""
echo "Top 10 findings by size:"
cat results.json | jq -r '.results | sort_by(-.length) | .[0:10][] | .input.FUZZ + " (" + (.length|tostring) + " bytes)"'`}
      />

      <h2>Rate Limiting and Stealth</h2>
      <p>
        WAF/IDS avoid करने के लिए ffuf में कई stealth options हैं:
      </p>
      <CodeBlock
        title="Stealth Scanning"
        code={`# Rate limit (requests per second):
ffuf -u http://target.com/FUZZ -w wordlist.txt -rate 50

# Request delay (seconds between requests):
ffuf -u http://target.com/FUZZ -w wordlist.txt -p 1

# Combined stealth:
ffuf -u http://target.com/FUZZ -w wordlist.txt -rate 30 -p 0.5

# Custom User-Agent:
ffuf -u http://target.com/FUZZ -w wordlist.txt -H "User-Agent: Mozilla/5.0 (Windows NT 10.0)"

# Random User-Agent (from file):
ffuf -u http://target.com/FUZZ -w wordlist.txt -H "User-Agent: RANDUA" -w useragents.txt:RANDUA

# Proxy chain:
ffuf -u http://target.com/FUZZ -w wordlist.txt -x socks5://127.0.0.1:1080

# Silent mode (minimal output):
ffuf -u http://target.com/FUZZ -w wordlist.txt -s

# Small wordlist first (quick scan):
ffuf -u http://target.com/FUZZ -w /usr/share/wordlists/dirb/common.txt -ac
# Then medium:
ffuf -u http://target.com/FUZZ -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt -ac`}
      />

      <h2>CI/CD Integration</h2>
      <p>
        ffuf को CI/CD pipelines में integrate करके automated web security testing कर सकते हो:
      </p>
      <CodeBlock
        title="Automated CI/CD Pipeline"
        code={`#!/bin/bash
# CI/CD security gate — ffuf based

TARGET=$1
WORDLIST="/usr/share/wordlists/dirb/common.txt"
RESULTS_DIR="security_results"

mkdir -p "$RESULTS_DIR"

echo "[1/4] Directory scan..."
ffuf -u "http://$TARGET/FUZZ" -w "$WORDLIST" -mc 200,301,302 -ac \
  -o "$RESULTS_DIR/dirs.json" -of json -s

echo "[2/4] Subdomain scan..."
ffuf -u "http://$TARGET" -H "Host: FUZZ.$TARGET" \
  -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt \
  -mc 200 -ac -o "$RESULTS_DIR/subs.json" -of json -s

echo "[3/4] Parameter discovery..."
ffuf -u "http://$TARGET/page?FUZZ=test" \
  -w /usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt \
  -mc 200 -ac -o "$RESULTS_DIR/params.json" -of json -s

echo "[4/4] Results analysis..."
DIRS_COUNT=$(cat "$RESULTS_DIR/dirs.json" | jq '.results | length')
SUBS_COUNT=$(cat "$RESULTS_DIR/subs.json" | jq '.results | length')
PARAMS_COUNT=$(cat "$RESULTS_DIR/params.json" | jq '.results | length')

echo "=== Security Scan Results ==="
echo "Directories found: $DIRS_COUNT"
echo "Subdomains found: $SUBS_COUNT"
echo "Parameters found: $PARAMS_COUNT"

# Fail if too many hidden paths found (potential exposure):
if [ "$DIRS_COUNT" -gt "50" ]; then
  echo "[!] WARNING: Many hidden directories found — review required"
  exit 1
fi`}
      />

      <h2>Custom Wordlist Generation</h2>
      <p>
        Target-specific wordlists बनाने से ffuf scan ज़्यादा effective होता है:
      </p>
      <CodeBlock
        title="Wordlist Creation"
        code={`# CeWL से target-specific wordlist:
cewl http://target.com -w custom_wordlist.txt
cewl http://target.com -d 2 -m 5 -w deep_wordlist.txt

# Target se keywords extract करो:
curl -s http://target.com | grep -oE '[a-zA-Z]{4,}' | sort -u > keywords.txt

# Tech-specific wordlist:
# WordPress sites ke liye:
# /usr/share/seclists/Discovery/Web-Content/CMS/wordpress.txt

# API endpoints ke liye:
# /usr/share/seclists/Discovery/Web-Content/api/api-endpoints.txt

# Backup file wordlist:
# /usr/share/seclists/Discovery/Web-Content/raft-medium-files.txt

# Combined wordlist:
cat common.txt custom_wordlist.txt keywords.txt | sort -u > combined.txt

# Wordlist statistics:
wc -l combined.txt
echo "Unique entries: $(sort -u combined.txt | wc -l)"`}
      />

      <h2>Ffuf v2 New Features</h2>
      <p>
        ffuf v2 में कई important improvements आए हैं जो scanning को और powerful बनाते हैं:
      </p>
      <CodeBlock
        title="v2 Features"
        code={`# Multiple wordlists with named keywords:
ffuf -u "http://target.com/FUZZ1/FUZZ2" -w wordlist1.txt:FUZZ1 -w wordlist2.txt:FUZZ2

# Clusterbomb mode (all combinations):
ffuf -u http://target.com/login -X POST \\
  -d "user=FUZZ1&pass=FUZZ2" \\
  -w users.txt:FUZZ1 -w passwords.txt:FUZZ2

# Pitchfork mode (parallel iteration):
ffuf -u http://target.com/login -X POST \\
  -d "user=FUZZ1&pass=FUZZ2" \\
  -w users.txt:FUZZ1 -w passwords.txt:FUZZ2 -mode pitchfork

# Improved error handling:
# Connection errors properly logged
# Timeout handling improved

# Better output formats:
# JSON v2 with more metadata
# HTML reports with charts
# CSV with all fields

# Rate limiting improvements:
# Per-second rate limiting
# Burst mode support

# Auto-calibration improvements:
# Better false positive detection
# Custom calibration strings`}
      />

      <h2>Common Attack Patterns</h2>
      <p>
        ffuf से किए जाने वाले common attack patterns और उनके use cases:
      </p>
      <CodeBlock
        title="Attack Patterns"
        code={`# Pattern 1: Backup file discovery:
ffuf -u http://target.com/FUZZ -w backup-files.txt \\
  -e .bak,.old,.zip,.tar.gz,.sql,.dump

# Pattern 2: Config file discovery:
ffuf -u http://target.com/FUZZ -w config-files.txt \\
  -e .env,.config,.yml,.yaml,.json,.xml

# Pattern 3: Admin panel discovery:
ffuf -u http://target.com/FUZZ -w admin-paths.txt \\
  -mc 200,301,302,403

# Pattern 4: API versioning:
ffuf -u http://target.com/api/vFUZZ/ -w numbers.txt \\
  -mc 200,401,403

# Pattern 5: IDOR testing:
ffuf -u "http://target.com/api/user/FUZZ" -w numbers.txt \\
  -mc 200 -H "Authorization: Bearer token123"

# Pattern 6: Virtual host enumeration:
ffuf -u http://192.168.1.1 -H "Host: FUZZ.target.com" \\
  -w subdomains.txt -mc 200

# Pattern 7: Header injection:
ffuf -u http://target.com -H "X-Forwarded-Host: FUZZ" \\
  -w internal-hosts.txt

# Pattern 8: JWT claim fuzzing:
ffuf -u http://target.com/api -H "Authorization: Bearer FUZZ" \\
  -w jwt-tokens.txt`}
      />

      <h2>Ffuf Configuration File</h2>
      <p>
        ffuf configuration file support करता है जिससे default options set कर सकते हो:
      </p>
      <CodeBlock
        title="Configuration"
        code={`# ~/.ffuf/config (default options):
# Common options set करो ताकि हर बार type न करना पड़े

# Environment variable:
export FFUF_EXTENSIONS=".php,.html,.txt,.js"
export FFUF_WORDLIST="/usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt"

# Command alias:
alias ffuf-dir='ffuf -w /usr/share/seclists/Discovery/Web-Content/raft-medium-directories.txt -ac -fc 404'
alias ffuf-sub='ffuf -H "Host: FUZZ.target.com" -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -ac'

# Shell function:
ffuf-recon() {
  ffuf -u "http://$1/FUZZ" -w /usr/share/wordlists/dirb/common.txt -ac -v -o "ffuf_$1.json" -of json
}`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Gobuster</td><td className="py-2 px-3">डायरेक्ट्री/सबडोमेन ब्रूट फोर्स</td><td className="py-2 px-3">सिंपल, Go में लिखा, fast</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Dirsearch</td><td className="py-2 px-3">डायरेक्ट्री स्कैनर</td><td className="py-2 px-3">Python, रिकर्सिव, recursive</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wfuzz</td><td className="py-2 px-3">वेब फ़ज़र</td><td className="py-2 px-3">मल्टीपल फ़ज़ पॉइंट्स, Python</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Feroxbuster</td><td className="py-2 px-3">रिकर्सिव फ़ज़र</td><td className="py-2 px-3">Rust, TUI, ऑटो रिकर्शन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Dirb</td><td className="py-2 px-3">पुराना डायरेक्ट्री स्कैनर</td><td className="py-2 px-3">सिंपल, स्लो, C में लिखा</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Hydra</td><td className="py-2 px-3">लॉगिन ब्रूट फोर्स</td><td className="py-2 px-3">मल्टी-प्रोटोकॉल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nuclei</td><td className="py-2 px-3">वल्नरेबिलिटी स्कैनर</td><td className="py-2 px-3">YAML templates, 8000+ templates</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Arjun</td><td className="py-2 px-3">पैरामीटर डिस्कवरी</td><td className="py-2 px-3">Hidden parameters ढूंढने में specialized</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>हमेशा -ac (ऑटो कैलिब्रेशन) यूज़ करो — फ़ाल्स पॉज़िटिव्स ऑटो हटते हैं</li>
          <li>-v (वर्बोज़) यूज़ करो ताकि पूरा URL दिखे — रिजल्ट्स समझने में आसानी</li>
          <li>JSON आउटपुट (-o results.json -of json) यूज़ करो — बाद में प्रोसेस करना आसान</li>
          <li>पहले छोटी वर्डलिस्ट से स्कैन करो, फिर बड़ी — टाइम बचेगा</li>
          <li>WAF हो तो -rate और -p (डिले) यूज़ करो — ब्लॉक नहीं होगा</li>
          <li>Pipeline में nuclei, httpx, subfinder के साथ combine करो — comprehensive recon</li>
          <li>Recursion depth 2-3 रखो — ज़्यादा deep scan बहुत time लेगा</li>
          <li>Custom wordlist बनाओ target-specific — CeWL, cewl2 यूज़ करो</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> ffuf एक शक्तिशाली वेब फ़ज़िंग टूल है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए करें। बिना अनुमति के वेबसाइट स्कैनिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत स्कैनिंग अपराध हो सकता है — जुर्माना और जेल दोनों हो सकते हैं। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>
    </TutorialLayout>
  )
}
