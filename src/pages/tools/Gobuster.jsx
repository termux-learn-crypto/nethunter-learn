import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Gobuster() {
  return (
    <TutorialLayout
      title="gobuster"
      subtitle="डायरेक्ट्री ब्रूट फोर्सिंग और सबडोमेन एन्यूमरेशन टूल"
      icon="🔍"
      prev={{ to: '/tool/responder', label: 'responder' }}
      next={{ to: '/tools', label: 'All Tools' }}
    >
      <h2>What is Gobuster?</h2>
      <p>
        Gobuster Go भाषा में लिखा गया एक शक्तिशाली डायरेक्ट्री, फाइल, सबडोमेन, और वर्चुअल होस्ट ब्रूट फोर्सिंग टूल है। यह वेबसाइट पर हिडन डायरेक्ट्रीज़, फाइल्स, सबडोमेन्स, और वर्चुअल होस्ट्स ढूंढता है जो डायरेक्टली लिंक्ड नहीं हैं। बग बाउंटी हंटर्स और पेनेट्रेशन टेस्टर्स के लिए यह एसेंशियल टूल है। Gobuster पांच मुख्य मोड्स सपोर्ट करता है — dir (डायरेक्ट्री), dns (सबडोमेन), vhost (वर्चुअल होस्ट), s3 (S3 बकेट), और fuzz (फ़ज़िंग)।
      </p>
      <p>
        Gobuster OJ Reeves (@TheColonial) ने 2014 में बनाया था। यह Go भाषा में लिखा गया है जो इसे बहुत तेज़ बनाता है। Go की goroutines के कारण यह एक साथ कई रिक्वेस्ट भेज सकता है। Dirbuster (Java-based) और Dirb (C-based) जैसे पुराने टूल्स से 5-10x तेज़ काम करता है। काली नेटहंटर में यह प्री-इंस्टॉल्ड आता है। GitHub पर 9,000+ स्टार्स हैं।
      </p>
      <p>
        वेब पेनेट्रेशन टेस्टिंग में डायरेक्ट्री एन्यूमरेशन बहुत महत्वपूर्ण है। कई वेबसाइट्स पर एडमिन पैनल्स, बैकअप फाइल्स, कॉन्फ़िगरेशन फाइल्स, .git फोल्डर्स, और दूसरी संवेदनशील फाइल्स हिडन डायरेक्ट्रीज़ में होती हैं। Gobuster इन्हें ढूंढने में मदद करता है। रेकन फेज़ में सबडोमेन एन्यूमरेशन भी बहुत उपयोगी है — जितने ज़्यादा सबडोमेन्स मिलेंगे, उतने ज़्यादा अटैक सर्फ़ेस होंगे।
      </p>
      <p>
        Gobuster का सबसे बड़ा फायदा है इसकी सिंपलिसिटी और स्पीड। सिर्फ एक कमांड में स्कैन शुरू हो जाता है। CLI-based होने के कारण स्क्रिप्टिंग और ऑटोमेशन में बहुत आसान है। प्रोडक्शन एनवायरनमेंट में भी इस्तेमाल किया जा सकता है — रेट लिमिटिंग और थ्रेड कंट्रोल बिल्ट-इन है। यह टूल OWASP Testing Guide में भी रेकमेंडेड है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Gobuster केवल अपनी वेबसाइट या अधिकृत पेनेट्रेशन टेस्टिंग में ही इस्तेमाल करें। बिना अनुमति के डायरेक्ट्री ब्रूट फोर्सिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत स्कैनिंग अपराध हो सकता है। डायरेक्ट्री ब्रूट फोर्सिंग सर्वर पर बहुत सारे रिक्वेस्ट भेजता है — प्रोडक्शन सर्वर्स पर सावधानी से इस्तेमाल करें।
      </div>

      <h2>History of Gobuster</h2>
      <p>
        Gobuster की शुरुआत 2014 में हुई जब OJ Reeves ने Go भाषा में एक तेज़ डायरेक्ट्री स्कैनर बनाने का फैसला किया। उस समय Dirbuster (Java-based) सबसे लोकप्रिय था लेकिन बहुत भारी और धीमा था। Dirb (C-based) था लेकिन उसमें concurrency की कमी थी। Go की goroutines और channels का फायदा उठाकर Gobuster ने यह समस्या हल कर दी।
      </p>
      <p>
        Gobuster v1 में सिर्फ dir मोड था। v2 में dns मोड जोड़ा गया। v3 में vhost, s3, और fuzz मोड्स जोड़े गए। हर अपडेट में परफॉर्मेंस और फीचर्स बेहतर हुए। आज यह GitHub पर 9,000+ स्टार्स के साथ सबसे लोकप्रिय डायरेक्ट्री ब्रूट फोर्सिंग टूल्स में से एक है। काली लिनक्स, पैरोट ओएस, और नेटहंटर सभी में प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        Gobuster का डिज़ाइन दर्शन सिंपल है — हर मोड एक स्पेसिफिक काम करता है। dir मोड सिर्फ डायरेक्ट्रीज़ ढूंढता है, dns मोड सिर्फ सबडोमेन्स। यह Unix philosophy फॉलो करता है — एक काम करो लेकिन अच्छे से करो। Ffuf जैसे generic fuzzers ज़्यादा फ्लेक्सिबल हैं लेकिन Gobuster सिंपल और फोकस्ड है। इसलिए beginners के लिए यह सबसे अच्छा ऑप्शन है।
      </p>

      <h2>How Gobuster Works?</h2>
      <p>
        Gobuster वर्डलिस्ट में मौजूद हर शब्द को टार्गेट URL के साथ जोड़कर HTTP रिक्वेस्ट भेजता है। हर रिक्वेस्ट का स्टेटस कोड चेक करता है — 200, 301, 302, 403 जैसे कोड्स मिलने पर रिजल्ट दिखाता है। Go की goroutines के कारण कई रिक्वेस्ट एक साथ भेजे जाते हैं।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">dir मोड:</strong> HTTP डायरेक्ट्रीज़ और फाइल्स ब्रूट फोर्स करता है। वर्डलिस्ट के हर शब्द को URL पाथ के साथ जोड़कर ट्राई करता है</li>
        <li><strong className="text-white">dns मोड:</strong> DNS सबडोमेन्स ब्रूट फोर्स करता है। वर्डलिस्ट के हर शब्द को डोमेन के साथ जोड़कर DNS रिज़ॉल्व ट्राई करता है</li>
        <li><strong className="text-white">vhost मोड:</strong> वर्चुअल होस्ट्स ब्रूट फोर्स करता है। Host हेडर में अलग-अलग नाम भेजकर चेक करता है</li>
        <li><strong className="text-white">s3 मोड:</strong> AWS S3 बकेट्स ब्रूट फोर्स करता है। Misconfigured बकेट्स ढूंढता है जो पब्लिकली एक्सेसिबल हैं</li>
        <li><strong className="text-white">fuzz मोड:</strong> URL में FUZZ keyword replace करके किसी भी पार्ट में फ़ज़ करता है</li>
        <li><strong className="text-white">Concurrency Control:</strong> -t फ्लैग से थ्रेड्स कंट्रोल कर सकते हो — ज़्यादा थ्रेड्स = तेज़ लेकिन सर्वर पर लोड</li>
        <li><strong className="text-white">Status Code Filtering:</strong> -s से सिर्फ इंटरेस्टिंग कोड्स दिखाओ, -b से फालतू कोड्स हाइड करो</li>
        <li><strong className="text-white">Recursive Scanning:</strong> -r से मिली हुई डायरेक्ट्रीज़ के अंदर भी स्कैन करो</li>
      </ul>
      <p>
        Gobuster का काम करने का तरीका बहुत ऑप्टिमाइज़्ड है। यह HTTP/1.1 keep-alive यूज़ करता है ताकि हर रिक्वेस्ट के लिए नया कनेक्शन न बने। Connection pooling से बहुत समय बचता है। Go की नेटिव concurrency के कारण 1000+ रिक्वेस्ट प्रति सेकंड भेज सकता है। यही कारण है कि Gobuster Dirbuster से 5-10x तेज़ है।
      </p>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Gobuster प्री-इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो कई तरीकों से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="Gobuster इंस्टॉलेशन"
        code={`# apt से (सबसे आसान):
sudo apt update
sudo apt install gobuster

# Go से (सबसे लेटेस्ट):
go install github.com/OJ/gobuster/v3@latest

# सोर्स से बिल्ड:
git clone https://github.com/OJ/gobuster.git
cd gobuster
go build
sudo cp gobuster /usr/local/bin/

# Snap से:
sudo snap install gobuster

# वर्जन चेक:
gobuster version

# सभी मोड्स देखें:
gobuster --help

# हेल्प — dir मोड:
gobuster dir --help

# हेल्प — dns मोड:
gobuster dns --help`}
      />

      <h2>Basic Usage</h2>
      <p>
        Gobuster का बेसिक इस्तेमाल बहुत आसान है — मोड चुनो, टार्गेट दो, वर्डलिस्ट दो।
      </p>
      <CodeBlock
        title="बेसिक कमांड्स"
        code={`# डायरेक्ट्री स्कैन (सबसे कॉमन):
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt

# सबडोमेन स्कैन:
gobuster dns -d target.com -w /usr/share/wordlists/dns/subdomains-top1million-5000.txt

# वर्चुअल होस्ट स्कैन:
gobuster vhost -u http://target.com -w subdomains.txt

# S3 बकेट स्कैन:
gobuster s3 -w bucket_names.txt

# फ़ज़िंग:
gobuster fuzz -u http://target.com/FUZZ -w wordlist.txt

# आउटपुट फाइल में सेव:
gobuster dir -u http://target.com -w wordlist.txt -o results.txt

# वर्बोज़ आउटपुट:
gobuster dir -u http://target.com -w wordlist.txt -v

# थ्रेड्स बढ़ाएं (तेज़):
gobuster dir -u http://target.com -w wordlist.txt -t 50

# फाइल एक्सटेंशन के साथ:
gobuster dir -u http://target.com -w wordlist.txt -x php,html,txt`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dir</td><td className="py-2 px-3">डायरेक्ट्री ब्रूट फोर्स मोड</td><td className="py-2 px-3 font-mono text-xs">gobuster dir -u URL -w wordlist</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dns</td><td className="py-2 px-3">सबडोमेन ब्रूट फोर्स मोड</td><td className="py-2 px-3 font-mono text-xs">gobuster dns -d domain -w wordlist</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">vhost</td><td className="py-2 px-3">वर्चुअल होस्ट मोड</td><td className="py-2 px-3 font-mono text-xs">gobuster vhost -u URL -w wordlist</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">s3</td><td className="py-2 px-3">AWS S3 बकेट मोड</td><td className="py-2 px-3 font-mono text-xs">gobuster s3 -w wordlist</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">fuzz</td><td className="py-2 px-3">फ़ज़िंग मोड</td><td className="py-2 px-3 font-mono text-xs">gobuster fuzz -u URL/FUZZ -w wordlist</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-u</td><td className="py-2 px-3">टार्गेट URL</td><td className="py-2 px-3 font-mono text-xs">-u http://target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-w</td><td className="py-2 px-3">वर्डलिस्ट फाइल</td><td className="py-2 px-3 font-mono text-xs">-w /usr/share/wordlists/dirb/common.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t</td><td className="py-2 px-3">थ्रेड्स (डिफ़ॉल्ट 10)</td><td className="py-2 px-3 font-mono text-xs">-t 50</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-x</td><td className="py-2 px-3">फाइल एक्सटेंशन</td><td className="py-2 px-3 font-mono text-xs">-x php,html,txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o</td><td className="py-2 px-3">आउटपुट फाइल</td><td className="py-2 px-3 font-mono text-xs">-o results.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-s</td><td className="py-2 px-3">स्टेटस कोड फ़िल्टर (सिर्फ ये दिखाओ)</td><td className="py-2 px-3 font-mono text-xs">-s 200,301,302</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-b</td><td className="py-2 px-3">स्टेटस कोड हाइड (ये मत दिखाओ)</td><td className="py-2 px-3 font-mono text-xs">-b 404,403</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-k</td><td className="py-2 px-3">SSL वेरिफिकेशन छोड़ें</td><td className="py-2 px-3 font-mono text-xs">-k</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-H</td><td className="py-2 px-3">कस्टम हेडर</td><td className="py-2 px-3 font-mono text-xs">-H "Authorization: Bearer token"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c</td><td className="py-2 px-3">कुकी</td><td className="py-2 px-3 font-mono text-xs">-c "session=abc123"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">प्रॉक्सी</td><td className="py-2 px-3 font-mono text-xs">-p http://127.0.0.1:8080</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r</td><td className="py-2 px-3">रिकर्सिव स्कैन</td><td className="py-2 px-3 font-mono text-xs">-r</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-U</td><td className="py-2 px-3">बेसिक ऑथ यूज़रनेम</td><td className="py-2 px-3 font-mono text-xs">-U admin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-P</td><td className="py-2 px-3">बेसिक ऑथ पासवर्ड</td><td className="py-2 px-3 font-mono text-xs">-P password</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--timeout</td><td className="py-2 px-3">रिक्वेस्ट टाइमआउट</td><td className="py-2 px-3 font-mono text-xs">--timeout 10s</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Directory Bruteforce</h2>
      <p>
        डायरेक्ट्री ब्रूट फोर्स Gobuster का सबसे कॉमन इस्तेमाल है। यह वेबसाइट पर हिडन डायरेक्ट्रीज़ और फाइल्स ढूंढता है। वर्डलिस्ट में मौजूद हर शब्द को URL के साथ जोड़कर ट्राई करता है। हर रिक्वेस्ट का HTTP स्टेटस कोड चेक करता है।
      </p>
      <CodeBlock
        title="डायरेक्ट्री स्कैन"
        code={`# बेसिक डायरेक्ट्री स्कैन:
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt

# फाइल एक्सटेंशन के साथ:
gobuster dir -u http://target.com -w wordlist.txt -x php,html,txt,js

# बड़ी वर्डलिस्ट:
gobuster dir -u http://target.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt

# थ्रेड्स बढ़ाएं (तेज़):
gobuster dir -u http://target.com -w wordlist.txt -t 50

# HTTPS:
gobuster dir -u https://target.com -w wordlist.txt -k

# कस्टम हेडर्स:
gobuster dir -u http://target.com -w wordlist.txt -H "Authorization: Bearer token"

# कुकीज़:
gobuster dir -u http://target.com -w wordlist.txt -c "session=abc123"

# स्टेटस कोड फ़िल्टर:
gobuster dir -u http://target.com -w wordlist.txt -s 200,301,302

# गलत स्टेटस कोड छिपाएं:
gobuster dir -u http://target.com -w wordlist.txt -b 404,403

# रिकर्सिव स्कैन:
gobuster dir -u http://target.com -w wordlist.txt -r

# बेसिक ऑथ के साथ:
gobuster dir -u http://target.com -w wordlist.txt -U admin -P password

# प्रॉक्सी के साथ:
gobuster dir -u http://target.com -w wordlist.txt -p http://127.0.0.1:8080

# कस्टम यूज़र-एजेंट:
gobuster dir -u http://target.com -w wordlist.txt -a "Mozilla/5.0 (Windows NT 10.0)"

# टाइमआउट बढ़ाएं (स्लो सर्वर):
gobuster dir -u http://target.com -w wordlist.txt --timeout 15s

# नो-प्रोग्रेस (स्क्रिप्टिंग के लिए):
gobuster dir -u http://target.com -w wordlist.txt --no-progress -q`}
      />

      <h2>Subdomain Bruteforce</h2>
      <p>
        सबडोमेन एन्यूमरेशन से टार्गेट डोमेन के सबडोमेन्स ढूंढे जा सकते हैं। यह रेकन फेज़ में बहुत उपयोगी है। हर सबडोमेन एक अलग वेबसाइट हो सकती है — जितने ज़्यादा सबडोमेन्स, उतने ज़्यादा अटैक सर्फ़ेस।
      </p>
      <CodeBlock
        title="सबडोमेन स्कैन"
        code={`# सबडोमेन स्कैन:
gobuster dns -d target.com -w /usr/share/wordlists/dns/subdomains-top1million-5000.txt

# IP एड्रेस दिखाएं:
gobuster dns -d target.com -w subdomains.txt -i

# बड़ी वर्डलिस्ट:
gobuster dns -d target.com -w /usr/share/wordlists/dns/subdomains-top1million-110000.txt

# कस्टम DNS सर्वर:
gobuster dns -d target.com -w subdomains.txt -r 8.8.8.8

# वर्बोज़:
gobuster dns -d target.com -w subdomains.txt -v

# आउटपुट सेव:
gobuster dns -d target.com -w subdomains.txt -o subdomains_results.txt

# थ्रेड्स बढ़ाएं:
gobuster dns -d target.com -w subdomains.txt -t 50

# CNAME रिकॉर्ड दिखाएं:
gobuster dns -d target.com -w subdomains.txt -c`}
      />

      <h2>Virtual Host Discovery</h2>
      <p>
        वर्चुअल होस्ट स्कैन से एक ही IP पर होस्ट की गई कई वेबसाइट्स ढूंढी जा सकती हैं। यह शेयर्ड होस्टिंग एनवायरनमेंट में बहुत उपयोगी है। Host हेडर में अलग-अलग नाम भेजकर चेक करता है।
      </p>
      <CodeBlock
        title="VHost मोड"
        code={`# वर्चुअल होस्ट स्कैन:
gobuster vhost -u http://target.com -w subdomains.txt

# डोमेन अपेंड करें:
gobuster vhost -u http://target.com -w subdomains.txt --append-domain

# आउटपुट सेव:
gobuster vhost -u http://target.com -w subdomains.txt -o vhosts.txt

# वर्बोज़:
gobuster vhost -u http://target.com -w subdomains.txt -v

# थ्रेड्स बढ़ाएं:
gobuster vhost -u http://target.com -w subdomains.txt -t 30

# कस्टम हेडर:
gobuster vhost -u http://target.com -w subdomains.txt -H "X-Forwarded-For: 127.0.0.1"`}
      />

      <h2>S3 Bucket Enumeration</h2>
      <p>
        AWS S3 बकेट्स ढूंढने के लिए s3 मोड इस्तेमाल करें। Misconfigured S3 बकेट्स से डेटा लीक हो सकता है। कई कंपनियां S3 बकेट्स में संवेदनशील डेटा स्टोर करती हैं लेकिन परमिशंस सही से सेट नहीं करतीं।
      </p>
      <CodeBlock
        title="S3 बकेट स्कैन"
        code={`# S3 बकेट ब्रूट फोर्स:
gobuster s3 -w bucket_names.txt

# वर्बोज़:
gobuster s3 -w bucket_names.txt -v

# आउटपुट सेव:
gobuster s3 -w bucket_names.txt -o s3_results.txt

# कस्टम AWS रीजन:
gobuster s3 -w bucket_names.txt --region us-east-1

# बड़ी वर्डलिस्ट:
gobuster s3 -w /usr/share/wordlists/s3-buckets.txt -t 20`}
      />

      <h2>Fuzzing Mode</h2>
      <p>
        फ़ज़िंग मोड से URL के किसी भी हिस्से में फ़ज़ कर सकते हो। FUZZ keyword replace होता है। यह Ffuf जैसा generic fuzzer है लेकिन Gobuster के अंदर।
      </p>
      <CodeBlock
        title="फ़ज़िंग"
        code={`# URL पाथ में फ़ज़:
gobuster fuzz -u http://target.com/FUZZ -w wordlist.txt

# हेडर फ़ज़िंग:
gobuster fuzz -u http://target.com -w wordlist.txt -H "Host: FUZZ.target.com"

# पैरामीटर फ़ज़िंग:
gobuster fuzz -u http://target.com/page?id=FUZZ -w numbers.txt

# कई जगह फ़ज़:
gobuster fuzz -u http://FUZZ.target.com/FUZZ -w wordlist.txt`}
      />

      <h2>Authentication</h2>
      <p>
        अगर टार्गेट वेबसाइट पर ऑथेंटिकेशन है तो Gobuster को credentials देने होंगे। बिना ऑथ के बहुत सारे 401/403 एरर आएंगे।
      </p>
      <CodeBlock
        title="ऑथेंटिकेशन"
        code={`# बेसिक ऑथ:
gobuster dir -u http://target.com -w wordlist.txt -U admin -P password

# बेयरर टोकन:
gobuster dir -u http://target.com -w wordlist.txt -H "Authorization: Bearer eyJhbG..."

# कुकी-बेस्ड ऑथ:
gobuster dir -u http://target.com -w wordlist.txt -c "PHPSESSID=abc123; token=xyz"

# कस्टम हेडर:
gobuster dir -u http://target.com -w wordlist.txt -H "X-API-Key: myapikey"

# प्रॉक्सी + ऑथ:
gobuster dir -u http://target.com -w wordlist.txt -H "Authorization: Basic dXNlcjpwYXNz" -p http://127.0.0.1:8080`}
      />

      <h2>Status Codes</h2>
      <p>
        Gobuster के आउटपुट में HTTP स्टेटस कोड्स दिखते हैं। हर कोड का मतलब अलग है:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Status Code</th>
              <th className="text-left py-2 px-3 text-neon-green">मतलब</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करें</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">200 OK</td><td className="py-2 px-3">पेज मिला</td><td className="py-2 px-3">एक्सप्लोर करें — सबसे इंटरेस्टिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">301 Moved</td><td className="py-2 px-3">परमानेंट रिडायरेक्ट</td><td className="py-2 px-3">नए URL पर जाएं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">302 Found</td><td className="py-2 px-3">टेम्पररी रिडायरेक्ट</td><td className="py-2 px-3">नए URL पर जाएं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">403 Forbidden</td><td className="py-2 px-3">फॉरबिडन</td><td className="py-2 px-3">बायपास ट्राई करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">404 Not Found</td><td className="py-2 px-3">नहीं मिला</td><td className="py-2 px-3">स्किप करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">401 Unauthorized</td><td className="py-2 px-3">ऑथ चाहिए</td><td className="py-2 px-3">Credentials दें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">405 Method Not Allowed</td><td className="py-2 px-3">मेथड अलाउ नहीं</td><td className="py-2 px-3">POST/PUT ट्राई करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">500 Server Error</td><td className="py-2 px-3">सर्वर एरर</td><td className="py-2 px-3">इंटरेस्टिंग — क्रैश हो सकता है</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">429 Too Many Requests</td><td className="py-2 px-3">रेट लिमिट</td><td className="py-2 px-3">थ्रेड्स कम करें, डिले जोड़ें</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Wordlists</h2>
      <p>
        Gobuster की परफॉर्मेंस वर्डलिस्ट पर निर्भर करती है। अच्छी वर्डलिस्ट से बेहतर रिजल्ट्स मिलते हैं:
      </p>
      <CodeBlock
        title="वर्डलिस्ट्स"
        code={`# DIRB कॉमन (छोटी, तेज़ — ~4600 शब्द):
/usr/share/wordlists/dirb/common.txt

# DIRB बड़ी (~20,000 शब्द):
/usr/share/wordlists/dirb/big.txt

# Dirbuster मीडियम (~220,000 शब्द):
/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt

# Dirbuster बड़ी (~1.2M शब्द):
/usr/share/wordlists/dirbuster/directory-list-2.3-big.txt

# SecLists (GitHub पर सबसे बड़ी कलेक्शन):
# github.com/danielmiessler/SecLists

# DNS सबडोमेन्स:
/usr/share/wordlists/dns/subdomains-top1million-5000.txt
/usr/share/wordlists/dns/subdomains-top1million-110000.txt

# raft-medium-directories:
/usr/share/wordlists/seclists/Discovery/Web-Content/raft-medium-directories.txt

# कस्टम वर्डलिस्ट बनाएं:
# CeWL से वेबसाइट से words निकालें
# Crunch से पैटर्न-बेस्ड लिस्ट बनाएं
# टार्गेट-स्पेसिफिक words जोड़ें (कंपनी नाम, प्रोडक्ट नाम)`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट 1 — फुल वेब रेकन"
        code={`#!/bin/bash
# ऑटोमेटेड वेब रेकन स्क्रिप्ट

TARGET=$1
WORDLIST="/usr/share/wordlists/dirb/common.txt"

if [ -z "$TARGET" ]; then
    echo "Usg: $0 http://target.com"
    exit 1
fi

DOMAIN=$(echo $TARGET | sed 's|http[s]*://||' | cut -d'/' -f1)
OUTPUT_DIR="recon_$DOMAIN"
mkdir -p $OUTPUT_DIR

echo "[+] टार्गेट: $TARGET"
echo "[+] डोमेन: $DOMAIN"
echo "[+] आउटपुट: $OUTPUT_DIR"

# डायरेक्ट्री स्कैन:
echo "[+] डायरेक्ट्री स्कैन शुरू..."
gobuster dir -u $TARGET -w $WORDLIST -x php,html,txt,js,bak -t 30 -o "$OUTPUT_DIR/dirs.txt" -q

# सबडोमेन स्कैन:
echo "[+] सबडोमेन स्कैन शुरू..."
gobuster dns -d $DOMAIN -w /usr/share/wordlists/dns/subdomains-top1million-5000.txt -t 30 -o "$OUTPUT_DIR/subs.txt" -q

# वर्चुअल होस्ट स्कैन:
echo "[+] VHost स्कैन शुरू..."
gobuster vhost -u $TARGET -w /usr/share/wordlists/dns/subdomains-top1million-5000.txt -t 20 -o "$OUTPUT_DIR/vhosts.txt" -q

echo "[+] स्कैन पूरा!"
echo "[+] डायरेक्ट्री: $OUTPUT_DIR/dirs.txt"
echo "[+] सबडोमेन: $OUTPUT_DIR/subs.txt"
echo "[+] VHost: $OUTPUT_DIR/vhosts.txt"`}
      />

      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट 2 — मल्टी-टार्गेट स्कैन"
        code={`#!/bin/bash
# कई टार्गेट्स स्कैन करें

TARGETS_FILE=$1
WORDLIST="/usr/share/wordlists/dirb/common.txt"

while IFS= read -r target; do
    echo "[+] स्कैन: $target"
    gobuster dir -u "$target" -w $WORDLIST -x php,html,txt -t 20 -o "results_\$(echo $target | sed 's|http[s]*://||; s|/|_|g').txt" -q
    echo "[+] डन: $target"
    sleep 5
done < "$TARGETS_FILE"`}
      />

      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट 3 — रिजल्ट पार्सिंग"
        code={`#!/bin/bash
# Gobuster रिजल्ट्स पार्स करें

RESULTS_FILE=$1

echo "[+] इंटरेस्टिंग फाइंडिंग्स:"
echo ""

# 200 OK रिजल्ट्स:
echo "=== 200 OK ==="
grep "Status: 200" $RESULTS_FILE | awk '{print $1}'

# 301/302 रिडायरेक्ट्स:
echo ""
echo "=== 301/302 Redirects ==="
grep -E "Status: 30[12]" $RESULTS_FILE | awk '{print $1}'

# 403 Forbidden:
echo ""
echo "=== 403 Forbidden ==="
grep "Status: 403" $RESULTS_FILE | awk '{print $1}'

# 500 Server Error:
echo ""
echo "=== 500 Server Error ==="
grep "Status: 500" $RESULTS_FILE | awk '{print $1}'`}
      />

      <h2>Gobuster vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Gobuster</th>
              <th className="text-left py-2 px-3 text-neon-green">Ffuf</th>
              <th className="text-left py-2 px-3 text-neon-green">Dirsearch</th>
              <th className="text-left py-2 px-3 text-neon-green">Dirb</th>
              <th className="text-left py-2 px-3 text-neon-green">Wfuzz</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">भाषा</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">C</td><td className="py-2 px-3">Python</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्पीड</td><td className="py-2 px-3">बहुत तेज़</td><td className="py-2 px-3">सबसे तेज़</td><td className="py-2 px-3">मध्यम</td><td className="py-2 px-3">धीमा</td><td className="py-2 px-3">मध्यम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">सबडोमेन</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">फ़िल्टरिंग</td><td className="py-2 px-3">बेसिक</td><td className="py-2 px-3">एडवांस्ड</td><td className="py-2 px-3">मध्यम</td><td className="py-2 px-3">बेसिक</td><td className="py-2 px-3">एडवांस्ड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Recursion</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">मल्टी-मोड</td><td className="py-2 px-3">dir/dns/vhost/s3/fuzz</td><td className="py-2 px-3">generic fuzzer</td><td className="py-2 px-3">dir only</td><td className="py-2 px-3">dir only</td><td className="py-2 px-3">generic fuzzer</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">लर्निंग कर्व</td><td className="py-2 px-3">आसान</td><td className="py-2 px-3">मध्यम</td><td className="py-2 px-3">आसान</td><td className="py-2 px-3">बहुत आसान</td><td className="py-2 px-3">मध्यम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GUI</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white">स्क्रिप्टिंग</td><td className="py-2 px-3">CLI + bash</td><td className="py-2 px-3">CLI + JSON output</td><td className="py-2 px-3">CLI</td><td className="py-2 px-3">CLI</td><td className="py-2 px-3">CLI + plugins</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'बहुत सारे 403/404 आ रहे हैं', a: '-b 403,404 से उन्हें हाइड करें। -s 200,301,302 से सिर्फ इंटरेस्टिंग स्टेटस कोड्स दिखाएं। वर्डलिस्ट भी बदल सकते हो — बड़ी वर्डलिस्ट में ज़्यादा गलत रिजल्ट्स होते हैं।' },
          { q: 'स्कैन बहुत धीमा है', a: 'थ्रेड्स बढ़ाएं (-t 50)। छोटी वर्डलिस्ट इस्तेमाल करें (common.txt)। टाइमआउट कम करें (--timeout 5s)। नेटवर्क कनेक्शन चेक करें।' },
          { q: 'WAF ब्लॉक कर रहा है', a: 'यूज़र-एजेंट बदलें (-a "Mozilla/5.0")। कस्टम हेडर्स जोड़ें। थ्रेड्स कम करें (-t 10)। प्रॉक्सी यूज़ करें। डिले जोड़ें।' },
          { q: 'Connection refused एरर', a: 'टार्गेट URL चेक करें — http/https सही है? पोर्ट नंबर सही है? सर्वर चल रहा है? फ़ायरवॉल ब्लॉक तो नहीं कर रहा?' },
          { q: 'कोई रिजल्ट नहीं आ रहा', a: 'वर्डलिस्ट चेक करें — खाली तो नहीं? -v से वर्बोज़ मोड यूज़ करें। -b "" से कोई भी कोड हाइड न करें। टार्गेट URL में पाथ सही है?' },
          { q: 'SSL certificate एरर', a: '-k फ्लैग से SSL वेरिफिकेशन डिसेबल करें: gobuster dir -u https://target.com -w wordlist.txt -k' },
          { q: 'रेट लिमिट लग रहा है (429)', a: 'थ्रेड्स कम करें (-t 5)। --timeout बढ़ाएं। प्रॉक्सी/VPN यूज़ करें। यूज़र-एजेंट बदलें।' },
          { q: 'गलत रिजल्ट्स आ रहे हैं', a: '-s से सिर्फ इंटरेस्टिंग कोड्स दिखाएं। -b से फालतू कोड्स हाइड करें। --no-error से एरर मैसेज हाइड करें।' },
          { q: 'रिकर्सिव स्कैन बहुत धीमा है', a: 'पहले बिना -r के स्कैन करें। मिली हुई डायरेक्ट्रीज़ के लिए अलग से स्कैन करें। --depth फ्लैग से डेप्थ लिमिट करें।' },
          { q: 'डुप्लिकेट रिजल्ट्स आ रहे हैं', a: 'यह नॉर्मल है — कुछ डायरेक्ट्रीज़ कई बार मिल सकती हैं। आउटपुट को sort | uniq से फ़िल्टर करें।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Gobuster से कैसे बचें (डिफेंडर्स के लिए):
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Rate Limiting:</strong> IP-बेस्ड रिक्वेस्ट लिमिट लगाएं — बहुत सारे रिक्वेस्ट ब्लॉक होंगे</li>
        <li><strong className="text-white">WAF:</strong> Web Application Firewall — सस्पीशियस पैटर्न्स डिटेक्ट करता है</li>
        <li><strong className="text-white">Honeypots:</strong> फेक डायरेक्ट्रीज़ बनाएं — स्कैनर्स ट्रैप होंगे</li>
        <li><strong className="text-white">404 Custom Page:</strong> कस्टम 404 पेज — स्कैनर्स को कन्फ्यूज़ करता है</li>
        <li><strong className="text-white">Access Control:</strong> संवेदनशील डायरेक्ट्रीज़ पर IP-बेस्ड रिस्ट्रिक्शन</li>
        <li><strong className="text-white">Monitoring:</strong> लॉग्स मॉनिटर करें — बल्क 404 रिक्वेस्ट्स डिटेक्ट करें</li>
        <li><strong className="text-white">Fail2Ban:</strong> बार-बार 404 आने वाले IPs को ब्लॉक करें</li>
        <li><strong className="text-white">Hidden Paths:</strong> रैंडम URL पाथ यूज़ करें — /admin_abc123/ जैसे</li>
        <li><strong className="text-white">Authentication:</strong> सभी संवेदनशील डायरेक्ट्रीज़ पर ऑथ लगाएं</li>
        <li><strong className="text-white">IP Whitelisting:</strong> एडमिन पैनल्स सिर्फ स्पेसिफिक IPs से एक्सेस करें</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Gobuster प्रैक्टिस के लिए सेफ लैब बनाओ:
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# DVWA (Damn Vulnerable Web Application):
docker run --rm -it -p 80:80 vulnerables/web-dvwa

# OWASP Juice Shop:
docker run --rm -p 3000:3000 bkimminich/juice-shop

# HackTheBox — प्रैक्टिस मशीन्स

# TryHackMe — गाइडेड रूम्स

# अपना लोकल सर्वर:
# Apache/Nginx में हिडन डायरेक्ट्रीज़ बनाएं
mkdir -p /var/www/html/hidden
mkdir -p /var/www/html/admin
mkdir -p /var/www/html/backup
mkdir -p /var/www/html/.git
mkdir -p /var/www/html/config

# Docker से वल्नरेबल लैब:
docker run -d -p 8080:80 vulnerables/web-dvwa
# फिर Gobuster से स्कैन करो`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड टेक्निक्स"
        code={`# कस्टम हेडर्स + प्रॉक्सी + ऑथ:
gobuster dir -u http://target.com -w wordlist.txt -H "Authorization: Bearer token" -p http://127.0.0.1:8080 -t 30

# रिकर्सिव स्कैन:
gobuster dir -u http://target.com -w wordlist.txt -r

# कस्टम यूज़र-एजेंट:
gobuster dir -u http://target.com -w wordlist.txt -a "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"

# टाइमआउट बढ़ाएं (स्लो सर्वर):
gobuster dir -u http://target.com -w wordlist.txt --timeout 15s

# नो-प्रोग्रेस (स्क्रिप्टिंग के लिए):
gobuster dir -u http://target.com -w wordlist.txt --no-progress -q

# एक्सटेंशन कॉम्बो:
gobuster dir -u http://target.com -w wordlist.txt -x php,php.bak,php~,html,txt,bak,old,zip,tar.gz

# 403 बायपास टेक्निक:
# स्लैश जोड़ें:
gobuster dir -u http://target.com -w wordlist.txt -f
# -f फ्लैग trailing slash जोड़ता है

# कस्टम वर्डलिस्ट + एक्सटेंशन:
gobuster dir -u http://target.com -w /usr/share/wordlists/seclists/Discovery/Web-Content/raft-medium-words.txt -x php -t 50

# JSON आउटपुट (Ffuf जैसा):
gobuster dir -u http://target.com -w wordlist.txt -o results.json --json`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Gobuster real-world penetration testing में बहुत important findings निकालता है। एक actual case में, pentester ने e-commerce website पर Gobuster चलाया — /admin/ directory मिली जो default credentials (admin:admin) से accessible थी। Admin panel से पूरा database access हो गया — customer names, emails, addresses, और payment info। यह critical vulnerability $10,000 bounty में convert हुई।
      </p>
      <p>
        एक और case में, Gobuster ने /.git/ directory find की — जिससे पूरा source code leak हो गया। Source code में hardcoded API keys, database credentials, और internal endpoints मिले। एक backup directory (/backup/) में SQL dump file मिली जिसमें user passwords (hashed) थे। यह सब Gobuster के 5-minute scan में मिल गया।
      </p>
      <p>
        Bug bounty में Gobuster subdomain enumeration से hidden staging environments मिलते हैं। एक case में staging.target.com पर development version चल रहा था जिसमें debug mode enabled था — stack traces, database queries, और environment variables visible थे। यह staging environment Gobuster के dns mode से मिला।
      </p>

      <h2>Reporting and Output Analysis</h2>
      <p>
        Gobuster के results को effectively analyze करना important है:
      </p>
      <CodeBlock
        title="Result Analysis"
        code={`# Output file analyze करो:
cat results.txt | grep "Status: 200" | wc -l
echo "200 OK directories found"

# Status-wise categorize:
echo "=== Status 200 (Found) ==="
grep "Status: 200" results.txt

echo "=== Status 301 (Redirect) ==="
grep "Status: 301" results.txt

echo "=== Status 403 (Forbidden) ==="
grep "Status: 403" results.txt

echo "=== Status 500 (Server Error) ==="
grep "Status: 500" results.txt

# Interesting findings filter:
grep -E "Status: (200|301|302)" results.txt | awk '{print $1}' > interesting.txt

# Backup files find:
grep -E "\\.bak$|\\.old$|\\.backup$|\\.zip$|\\.tar\\.gz$" results.txt

# Config files find:
grep -E "\\.conf$|\\.cfg$|\\.ini$|\\.env$|\\.yml$" results.txt

# Admin panels find:
grep -iE "admin|panel|dashboard|manage" results.txt

# JSON output parse:
python3 -c "
import json
with open('results.json') as f:
    data = json.load(f)
for item in data:
    if item['status'] in [200, 301]:
        print(f\"{item['url']} → {item['status']}\")
"`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Gobuster फ्री है?', a: 'हाँ, पूरी तरह फ्री और ओपन सोर्स (MIT लाइसेंस)। GitHub पर उपलब्ध है।' },
          { q: 'Dirbuster से बेहतर है?', a: 'हाँ — Gobuster Go में है इसलिए 5-10x तेज़ है। CLI-based है, GUI नहीं। लेकिन स्पीड में सबसे अच्छा है। Dirbuster का GUI अच्छा है लेकिन धीमा।' },
          { q: 'Ffuf से बेहतर है?', a: 'दोनों Go में हैं। Ffuf ज़्यादा फ्लेक्सिबल है (generic fuzzer)। Gobuster सिंपल है और डायरेक्ट्री/सबडोमेन के लिए बेस्ट है। Beginners के लिए Gobuster बेहतर है।' },
          { q: 'वर्डलिस्ट कहां से मिलेगी?', a: 'SecLists (GitHub) सबसे बड़ी कलेक्शन है। काली में /usr/share/wordlists/ में प्री-इंस्टॉल्ड हैं। raft-medium-directories.txt बहुत अच्छी है।' },
          { q: 'WAF bypass कैसे करें?', a: 'यूज़र-एजेंट बदलें, थ्रेड्स कम करें (-t 5), प्रॉक्सी यूज़ करें, डिले जोड़ें, कस्टम हेडर्स भेजें।' },
          { q: 'स्कैन कितना समय लेगा?', a: 'वर्डलिस्ट और थ्रेड्स पर निर्भर। common.txt (4600 words) 10 थ्रेड्स पर ~2 मिनट। बड़ी लिस्ट 30 मिनट+ लग सकती है।' },
          { q: '403 bypass कैसे करें?', a: 'URL में स्लैश जोड़ें (/admin/), कस्टम हेडर (X-Forwarded-For: 127.0.0.1), -f फ्लैग यूज़ करें, या HTTP method बदलें।' },
          { q: 'गलत रिजल्ट्स आ रहे हैं', a: '-s से सिर्फ इंटरेस्टिंग कोड्स दिखाएं। -b से फालतू कोड्स हाइड करें। --no-error से एरर मैसेज हाइड करें।' },
          { q: 'क्या प्रोडक्शन सर्वर पर यूज़ कर सकते हैं?', a: 'सावधानी से! थ्रेड्स कम रखें (-t 5), टाइमआउट बढ़ाएं, और वर्किंग आवर्स के बाहर स्कैन करें।' },
          { q: 'डुप्लिकेट रिजल्ट्स कैसे हटाएं?', a: 'sort -u results.txt | uniq यूज़ करें। Gobuster खुद डुप्लिकेट्स नहीं दिखाता लेकिन कुछ केसेस में हो सकता है।' },
          { q: 'JSON output कैसे मिलेगा?', a: '--json flag यूज़ करो: gobuster dir -u URL -w wordlist.txt -o results.json --json। फिर Python/JS में parse कर सकते हो।' },
          { q: 'Recursion depth कैसे control करें?', a: '--depth फ्लैग से depth limit set करो। Default unlimited है — पहले बिना recursion के scan करो, फिर manually found directories पर scan करो।' },
          { q: 'HTTP methods change कैसे करें?', a: 'Gobuster default GET use करता है। --method POST से POST requests भेजो। या --method PUT, --method OPTIONS भी try करो।' },
          { q: 'Cookies कैसे pass करें?', a: '-c flag से: gobuster dir -u URL -w wordlist.txt -c "session=abc123; token=xyz"। Browser से cookies copy करो।' },
          { q: 'गलत positives कैसे reduce करें?', a: '-s से सिर्फ interesting status codes दिखाओ। -b से unwanted codes hide करो। --no-error से error messages hide करो।' },
          { q: 'Scan resume कैसे करें?', a: 'Gobuster built-in resume support नहीं करता। लेकिन wordlist को split करके partial results achieve कर सकते हो: split -l 1000 wordlist.txt' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Ffuf</td><td className="py-2 px-3">वेब फ़ज़र</td><td className="py-2 px-3">सबसे तेज़, generic fuzzer, JSON output</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Dirsearch</td><td className="py-2 px-3">डायरेक्ट्री स्कैनर</td><td className="py-2 px-3">Python, रिकर्सिव, ऑटोमैटिक</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wfuzz</td><td className="py-2 px-3">वेब फ़ज़र</td><td className="py-2 px-3">बहुत फ्लेक्सिबल, पुराना</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Dirb</td><td className="py-2 px-3">डायरेक्ट्री ब्रूट फोर्स</td><td className="py-2 px-3">सिंपल, C-based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Feroxbuster</td><td className="py-2 px-3">डायरेक्ट्री स्कैनर</td><td className="py-2 px-3">Rust-based, तेज़, रिकर्सिव</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Dirbuster</td><td className="py-2 px-3">डायरेक्ट्री स्कैनर</td><td className="py-2 px-3">Java GUI, धीमा</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Nikto</td><td className="py-2 px-3">वेब सर्वर स्कैनर</td><td className="py-2 px-3">वल्नरेबिलिटी स्कैनिंग</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Practical Workflow</h2>
      <CodeBlock
        title="पेनेट्रेशन टेस्ट वर्कफ़्लो"
        code={`# स्टेप 1: पोर्ट स्कैन (Nmap)
nmap -sV -p 80,443,8080 target.com

# स्टेप 2: डायरेक्ट्री स्कैन (Gobuster)
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt -x php,html,txt -t 30 -o dirs.txt

# स्टेप 3: सबडोमेन स्कैन
gobuster dns -d target.com -w /usr/share/wordlists/dns/subdomains-top1million-5000.txt -o subs.txt

# स्टेप 4: वल्नरेबिलिटी स्कैन (Nikto)
nikto -h http://target.com

# स्टेप 5: फाउंड URL्स टेस्ट करें
# dirs.txt में मिले URL्स को ब्राउज़र में ओपन करें
# Burp Suite से डीप टेस्टिंग करें

# स्टेप 6: रिपोर्ट बनाएं
# सभी फाइंडिंग्स डॉक्यूमेंट करें`}
      />

      <h2>Pro Tips</h2>
      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Gobuster को Nmap और Nikto के साथ कॉम्बाइन करें — पहले Nmap से पोर्ट्स पता करें, फिर Gobuster से डायरेक्ट्रीज़ ढूंढें</li>
          <li>-x फ्लैग से एक्सटेंशन ज़रूर दें — सिर्फ डायरेक्ट्रीज़ नहीं, फाइल्स भी मिलेंगी</li>
          <li>PHP साइट के लिए: -x php,php.bak,php~,html,txt यूज़ करें</li>
          <li>WordPress साइट के लिए: /wp-content/, /wp-admin/, /wp-includes/ ज़रूर स्कैन करें</li>
          <li>बैकअप फाइल्स ढूंढने के लिए: -x bak,old,backup,zip,tar.gz,tar,sql यूज़ करें</li>
          <li>हमेशा -o से आउटपुट सेव करें — बाद में एनालिसिस के लिए काम आएगा</li>
          <li>पहले छोटी वर्डलिस्ट से स्कैन करें (common.txt), फिर बड़ी वर्डलिस्ट से डीप स्कैन करें</li>
          <li>रेकन फेज़ में dns मोड से सबडोमेन्स पहले ढूंढें, फिर हर सबडोमेन पर dir मोड चलाएं</li>
          <li>वर्डलिस्ट को target-स्पेसिफिक बनाओ — कंपनी का नाम, प्रोडक्ट नाम, टेक्नोलॉजी नाम जोड़ो</li>
          <li>रेट लिमिट वाले सर्वर्स के लिए --timeout और -t कम रखो — स्लो स्कैन बेहतर है ब्लॉक होने से</li>
          <li>आउटपुट को grep करके specific findings निकालो: grep "Status: 200" results.txt</li>
          <li>हर स्कैन के बाद results compare करो — नए findings पता चलेंगे</li>
          <li>Backup extensions ज़रूर try करो — .bak, .old, .backup, .zip, .tar.gz में sensitive data हो सकता है</li>
          <li>Config files के लिए -x conf,config,cfg,env,yml,yaml,json,xml यूज़ करो</li>
          <li>Admin panels ढूंढने के लिए /admin, /administrator, /panel, /dashboard, /manage try करो</li>
          <li>Hidden APIs ढूंढने के लिए /api, /api/v1, /api/v2, /swagger, /graphql try करो</li>
          <li>Development files के लिए -x log,txt,md,readme,changelog try करो</li>
          <li>Recursive scan (-r) carefully use करो — बहुत deep scan हो सकता है, --depth limit लगाओ</li>
          <li>JSON output (--json) से results programmatically parse करो — automation आसान होती है</li>
          <li>Multiple wordlists combine करो: cat list1.txt list2.txt | sort -u &gt; combined.txt</li>
          <li>Target-specific words add करो: company name, product names, technology names, employee names</li>
          <li>WAF bypass के लिए -a flag (custom user-agent) + -p (proxy) combo use करो</li>
          <li>Production servers पर scanning schedule करो — off-peak hours में scan करो</li>
          <li>Results को regularly archive करो — historical comparison के लिए useful है</li>
          <li>WordPress sites के लिए /wp-json/wp/v2/users try करो — user enumeration possible है</li>
          <li>API endpoints ढूंढने के लिए /api, /api/v1, /api/v2, /graphql, /swagger, /docs try करो</li>
          <li>Hidden files के लिए .env, .git, .htaccess, .htpasswd, robots.xml try करो</li>
          <li>Backup files के लिए .bak, .old, .backup, .zip, .tar.gz, .sql, .dump try करो</li>
          <li>Debug endpoints के लिए /debug, /trace, /console, /admin, /phpmyadmin try करो</li>
          <li>Sensitive directories के लिए /backup, /old, /temp, /tmp, /test, /dev try करो</li>
          <li>Scan results को Nuclei के साथ validate करो — found URLs पर vulnerability scanning करो</li>
          <li>Found directories के screenshots लो — visual evidence report के लिए useful है</li>
          <li>Scan के दौरान target की response time monitor करो — server overload detect होगा</li>
          <li>Rate limiting bypass के लिए IP rotation (proxy list) use करो</li>
          <li>HTTP methods test करो — OPTIONS, PUT, DELETE, PATCH से additional findings मिल सकते हैं</li>
        </ul>
      </div>

      <h2>403 Bypass Techniques</h2>
      <p>
        कई बार Gobuster 403 Forbidden दिखाता है — यानी डायरेक्ट्री मौजूद है लेकिन एक्सेस ब्लॉक है। इन टेक्निक्स से बायपास ट्राई करो:
      </p>
      <CodeBlock
        title="403 बायपास"
        code={`# टेक्निक 1: ट्रेलिंग स्लैश जोड़ें:
gobuster dir -u http://target.com -w wordlist.txt -f

# टेक्निक 2: कस्टम हेडर:
gobuster dir -u http://target.com -w wordlist.txt -H "X-Forwarded-For: 127.0.0.1"

# टेक्निक 3: कस्टम हेडर कॉम्बो:
gobuster dir -u http://target.com -w wordlist.txt -H "X-Original-URL: /admin"

# टेक्निक 4: HTTP method बदलें (manual test):
curl -X POST http://target.com/admin/
curl -X PUT http://target.com/admin/
curl -X OPTIONS http://target.com/admin/

# टेक्निक 5: Case manipulation (manual):
# /admin → /Admin → /ADMIN → /aDmIn

# टेक्निक 6: URL encoding:
# /admin → /%61dmin → /a%64min`}
      />

      <h2>Error Handling and Debugging</h2>
      <p>
        Gobuster run करते समय common issues और उनके solutions:
      </p>
      <CodeBlock
        title="Debugging Commands"
        code={`# Connection issues:
# "connection refused" → target URL/port check करो
curl -v http://target.com

# "connection timeout" → network/firewall issue
ping -c 3 target.com
traceroute target.com

# SSL issues:
# "certificate verify failed" → -k flag use करो
gobuster dir -u https://target.com -w wordlist.txt -k

# Rate limiting (429):
# Threads कम करो, timeout बढ़ाओ
gobuster dir -u http://target.com -w wordlist.txt -t 5 --timeout 15s

# Memory issues (बड़ी wordlist):
# Wordlist को split करो:
split -l 100000 big_wordlist.txt part_
# हर part अलग से run करो

# Output issues:
# Output file properly write हो रहा verify करो:
ls -la results.txt
head -20 results.txt

# Verbose mode debug:
gobuster dir -u http://target.com -w wordlist.txt -v 2>&1 | tee debug.log

# Dry run (request count estimate):
wc -l wordlist.txt
# यह बताएगा कि कितने requests जाएंगे`}
      />

      <h2>Performance Optimization</h2>
      <p>
        Gobuster की परफॉर्मेंस optimize करने के लिए:
      </p>
      <CodeBlock
        title="परफॉर्मेंस टिप्स"
        code={`# छोटी वर्डलिस्ट से शुरू करो (तेज़):
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt -t 30

# बड़ी वर्डलिस्ट बाद में (डीप):
gobuster dir -u http://target.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t 50

# टाइमआउट कम करो (तेज़ network के लिए):
gobuster dir -u http://target.com -w wordlist.txt --timeout 5s

# नो-प्रोग्रेस (स्क्रिप्टिंग):
gobuster dir -u http://target.com -w wordlist.txt --no-progress -q

# JSON output (पार्सिंग के लिए):
gobuster dir -u http://target.com -w wordlist.txt -o results.json --json

# थ्रेड्स balance करो:
# लोकल नेटवर्क: -t 100
# इंटरनेट: -t 20-30
# स्लो सर्वर: -t 5-10
# WAF वाला: -t 5 + delay`}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        Gobuster को दूसरे टूल्स के साथ कॉम्बाइन करो:
      </p>
      <CodeBlock
        title="टूल इंटीग्रेशन"
        code={`# Nmap → Gobuster → Nikto pipeline:
# Step 1: Nmap से open ports पता करो
nmap -sV -p 80,443,8080 target.com -oX nmap.xml

# Step 2: हर open port पर Gobuster चलाओ
for port in 80 443 8080; do
    gobuster dir -u http://target.com:$port -w /usr/share/wordlists/dirb/common.txt -t 20 -o "gobuster_$port.txt"
done

# Step 3: मिले URLs पर Nikto चलाओ
while read url; do
    nikto -h "$url"
done < gobuster_80.txt

# Gobuster + ffuf combo:
# Gobuster से डायरेक्ट्रीज़, ffuf से पैरामीटर्स
gobuster dir -u http://target.com -w wordlist.txt -o dirs.txt
cat dirs.txt | grep "Status: 200" | awk '{print $1}' | ffuf -u http://target.com/FUZZ -w -

# Gobuster + curl validation:
gobuster dir -u http://target.com -w wordlist.txt --no-progress -q | while read line; do
    url=$(echo $line | awk '{print $1}')
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    echo "$url → $status"
done`}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        Gobuster को दूसरे pentesting tools के साथ combine करके complete recon pipeline बनाओ:
      </p>
      <CodeBlock
        title="Tool Integration Pipeline"
        code={`# Complete pentest pipeline:
# Step 1: Nmap port scan
nmap -sV -p- target.com -oX nmap.xml

# Step 2: Gobuster directory scan (हर open port पर)
for port in $(grep 'open' nmap.xml | grep -oP 'portid="\K[0-9]+'); do
    gobuster dir -u http://target.com:$port -w /usr/share/wordlists/dirb/common.txt -t 20 -o "gobuster_$port.txt"
done

# Step 3: Nikto vulnerability scan (found directories पर)
grep "Status: 200" gobuster_80.txt | awk '{print $1}' | while read url; do
    nikto -h "$url" -o "nikto_$(echo $url | md5sum | cut -c1-8).txt"
done

# Step 4: SQLmap test (found parameters)
# अगर ?id= type URLs मिले:
grep -E "\\?.*=" gobuster_80.txt | while read url; do
    sqlmap -u "$url" --batch --level 3
done

# Gobuster + ffuf combo:
# Gobuster से directories, ffuf से parameters
gobuster dir -u http://target.com -w common.txt -o dirs.txt
ffuf -u http://target.com/FUZZ -w params.txt -mc 200

# Gobuster + curl validation:
gobuster dir -u http://target.com -w wordlist.txt --no-progress -q | while read line; do
    url=$(echo $line | awk '{print $1}')
    title=$(curl -s "$url" | grep -oP '(?<=<title>).*(?=</title>)')
    echo "$url → Title: $title"
done

# Gobuster + Burp Suite:
# Burp proxy से traffic capture करो
gobuster dir -u http://target.com -w wordlist.txt -p http://127.0.0.1:8080
# Burp में interesting requests analyze करो

# Gobuster + Subfinder:
# पहले subdomains find करो, फिर हर subdomain पर directory scan
subfinder -d target.com -silent | while read sub; do
    gobuster dir -u "http://$sub" -w common.txt -t 10 -o "gobuster_$sub.txt"
done`}
      />

      <h2>Directory Enumeration Checklist</h2>
      <p>
        Professional directory enumeration के लिए structured checklist follow करो:
      </p>
      <CodeBlock
        title="Enumeration Checklist"
        code={`# Phase 1: Quick Scan
# [ ] Small wordlist (common.txt) — 2-3 minutes
# [ ] Common extensions (php, html, txt, bak)
# [ ] Status codes 200, 301, 302, 403 filter
# [ ] Results save करो

# Phase 2: Deep Scan
# [ ] Medium wordlist (raft-medium) — 10-15 minutes
# [ ] Technology-specific extensions (asp, jsp, py)
# [ ] Recursive scan (depth 2-3)
# [ ] Results merge करो Phase 1 से

# Phase 3: Targeted Scan
# [ ] Custom wordlist (target-specific)
# [ ] Backup extensions (bak, old, backup, zip)
# [ ] Config extensions (conf, env, yml, json)
# [ ] Admin paths (admin, panel, dashboard)
# [ ] API paths (api, graphql, swagger)

# Phase 4: Analysis
# [ ] Found directories verify करो (browser में)
# [ ] Backup files check करो (sensitive data?)
# [ ] Config files check करो (credentials?)
# [ ] Admin panels test करो (default creds?)
# [ ] Results document करो (screenshots + notes)

# Phase 5: Integration
# [ ] Nikto scan (found directories पर)
# [ ] SQLmap test (found parameters पर)
# [ ] Nuclei scan (found URLs पर)
# [ ] Results consolidate करो report में`}
      />

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Gobuster एक शक्तिशाली डायरेक्ट्री ब्रूट फोर्सिंग टूल है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और शैक्षिक उद्देश्यों के लिए करें। बिना अनुमति के स्कैनिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत स्कैनिंग अपराध हो सकता है। प्रोडक्शन सर्वर्स पर सावधानी से इस्तेमाल करें — बहुत सारे रिक्वेस्ट भेजता है।
      </div>
    </TutorialLayout>
  )
}
