import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function ReconNg() {
  return (
    <TutorialLayout
      title="recon-ng"
      subtitle="फुल-फीचर्ड वेब रेकन फ्रेमवर्क — Metasploit जैसा OSINT के लिए"
      icon="🔎"
      prev={{ to: '/tool/sslstrip', label: 'sslstrip' }}
      next={{ to: '/tools', label: 'All Tools' }}
    >
      <h2>What is Recon-ng?</h2>
      <p>
        Recon-ng एक शक्तिशाली ओपन सोर्स वेब रेकन फ्रेमवर्क है जो Metasploit Framework की तरह मॉड्यूलर आर्किटेक्चर पर काम करता है, लेकिन इसका फोकस पूरी तरह से OSINT (Open Source Intelligence) पर है। यह टूल 100+ मॉड्यूल्स के ज़रिए विभिन्न डेटा सोर्सेज़ से जानकारी इकट्ठा करता है — ईमेल्स, होस्ट्स, कॉन्टैक्ट्स, क्रेडेंशियल्स, पोर्ट्स, सबडोमेन्स, और बहुत कुछ।
      </p>
      <p>
        Recon-ng को Tim Tomes (लानमास्टर53) ने विकसित किया है और यह Python में लिखा गया है। इसका इंटरफ़ेस Metasploit जैसा है — अगर आपने Metasploit इस्तेमाल किया है तो Recon-ng तुरंत सीख सकते हो। वर्कस्पेस, मॉड्यूल्स, डेटाबेस, रिपोर्टिंग — सब कुछ ऑर्गेनाइज़्ड तरीके से काम करता है।
      </p>
      <p>
        Recon-ng की सबसे बड़ी खासियत इसका बिल्ट-इन डेटाबेस है। सभी रिजल्ट्स SQLite डेटाबेस में स्टोर होते हैं जिससे बाद में एनालिसिस करना बहुत आसान हो जाता है। आप HTML, CSV, और JSON फॉर्मेट में रिपोर्ट जनरेट कर सकते हो। बग बाउंटी हंटर्स, पेनेट्रेशन टेस्टर्स, और रेड टीम ऑपरेटर्स के लिए यह एक अनिवार्य टूल है।
      </p>
      <p>
        Recon-ng का डिज़ाइन दर्शन यह है कि OSINT कलेक्शन को ऑर्गेनाइज़्ड और रिप्रोड्यूसिबल होना चाहिए। अलग-अलग टूल्स इस्तेमाल करने की जगह, एक ही फ्रेमवर्क में सब कुछ — डेटा कलेक्शन, स्टोरेज, एनालिसिस, और रिपोर्टिंग। यही Recon-ng को बाकी OSINT टूल्स से अलग बनाता है।
      </p>
      <p>
        Recon-ng क्रॉस-प्लेटफ़ॉर्म है — Linux, macOS, Windows सब पर चलता है। यह Python 3.6+ पर रन होता है और इसकी डिपेंडेंसीज़ कम हैं। Kali Linux में प्री-इंस्टॉल्ड आता है। इसकी कम्युनिटी एक्टिव है और नए मॉड्यूल्स रेगुलरली जुड़ते रहते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Recon-ng केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए उपयोग करें। बिना अनुमति के रेकन करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत रेकन अपराध हो सकता है।
      </div>

      <h2>History of Recon-ng</h2>
      <p>
        Recon-ng का विकास Tim Tomes (लानमास्टर53) ने 2012 में शुरू किया था। उन्होंने महसूस किया कि OSINT कलेक्शन के लिए कोई एकीकृत फ्रेमवर्क नहीं था — हर टूल अलग काम करता था और रिजल्ट्स को मैनेज करना मुश्किल था। उन्होंने Metasploit की मॉड्यूलर आर्किटेक्चर से प्रेरित होकर Recon-ng बनाया।
      </p>
      <p>
        2014 में Recon-ng को Black Hat Arsenal में प्रस्तुत किया गया और यह तुरंत लोकप्रिय हो गया। Kali Linux में इसे प्री-इंस्टॉल्ड शामिल किया गया। समय के साथ 100+ मॉड्यूल्स जोड़े गए और आज यह सबसे पॉपुलर OSINT फ्रेमवर्क्स में से एक है।
      </p>
      <p>
        Tim Tomes ने Recon-ng को इसलिए बनाया क्योंकि वो चाहते थे कि OSINT कलेक्शन में Metasploit जैसा अनुभव मिले। उन्होंने इसे मॉड्यूलर बनाया ताकि नए डेटा सोर्सेज़ आसानी से जोड़े जा सकें। आज GitHub पर 100+ कंट्रीब्यूटर्स हैं।
      </p>

      <h2>How Recon-ng Works?</h2>
      <p>
        Recon-ng मॉड्यूलर आर्किटेक्चर पर काम करता है — हर मॉड्यूल एक अलग OSINT सोर्स से डेटा कलेक्ट करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">वर्कस्पेस:</strong> हर प्रोजेक्ट के लिए अलग वर्कस्पेस — डेटा ऑर्गेनाइज़्ड रहता है</li>
        <li><strong className="text-white">मॉड्यूल्स:</strong> 100+ मॉड्यूल्स — हर OSINT सोर्स के लिए अलग मॉड्यूल</li>
        <li><strong className="text-white">डेटाबेस:</strong> SQLite में सभी रिजल्ट्स स्टोर — hosts, contacts, credentials, ports</li>
        <li><strong className="text-white">API कुंजी:</strong> विभिन्न सर्विसेज़ की API keys मैनेज करता है</li>
        <li><strong className="text-white">रिपोर्टिंग:</strong> HTML, CSV, JSON फॉर्मेट में रिपोर्ट जनरेट</li>
        <li><strong className="text-white">मॉड्यूल चेनिंग:</strong> एक मॉड्यूल का आउटपुट दूसरे का इनपुट</li>
        <li><strong className="text-white">CLI स्क्रिप्टिंग:</strong> बिना इंटरैक्टिव मोड में भी चला सकते हो</li>
        <li><strong className="text-white">क्रॉस-प्लेटफ़ॉर्म:</strong> Linux, macOS, Windows सब पर चलता है</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Recon-ng प्री-इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो आसानी से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="Recon-ng इंस्टॉलेशन"
        code={`# काली लिनक्स/नेटहंटर में:
recon-ng --version

# apt से:
sudo apt update
sudo apt install recon-ng

# GitHub से (सबसे लेटेस्ट):
git clone https://github.com/lanmaster53/recon-ng.git
cd recon-ng
pip3 install -r REQUIREMENTS

# Docker से:
docker pull lanmaster53/recon-ng
docker run -it lanmaster53/recon-ng

# वर्जन चेक:
recon-ng --version`}
      />

      <h2>Basic Usage</h2>
      <p>
        Recon-ng शुरू करने पर एक इंटरैक्टिव कंसोल दिखता है — Metasploit जैसा।
      </p>
      <CodeBlock
        title="Recon-ng शुरू करें"
        code={`# Recon-ng शुरू करें:
recon-ng

# वर्कस्पेस बनाएं:
workspaces create target_project

# वर्कस्पेस स्विच:
workspaces list
workspaces load target_project

# बेसिक वर्कफ़्लो:
# 1. वर्कस्पेस बनाओ
# 2. मॉड्यूल लोड करो
# 3. ऑप्शंस सेट करो
# 4. रन करो
# 5. रिजल्ट्स देखो
# 6. रिपोर्ट जनरेट करो`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">कमांड</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">workspaces create</td><td className="py-2 px-3">नया वर्कस्पेस बनाएं</td><td className="py-2 px-3 font-mono text-xs">workspaces create target_x</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">workspaces list</td><td className="py-2 px-3">सभी वर्कस्पेस दिखाएं</td><td className="py-2 px-3 font-mono text-xs">workspaces list</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">modules search</td><td className="py-2 px-3">मॉड्यूल्स सर्च करें</td><td className="py-2 px-3 font-mono text-xs">modules search domains</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">modules load</td><td className="py-2 px-3">मॉड्यूल लोड करें</td><td className="py-2 px-3 font-mono text-xs">modules load recon/domains-hosts/google_site_web</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">options set</td><td className="py-2 px-3">ऑप्शंस सेट करें</td><td className="py-2 px-3 font-mono text-xs">options set SOURCE target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">run</td><td className="py-2 px-3">मॉड्यूल रन करें</td><td className="py-2 px-3 font-mono text-xs">run</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">info</td><td className="py-2 px-3">मॉड्यूल इन्फो देखें</td><td className="py-2 px-3 font-mono text-xs">info</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">db hosts</td><td className="py-2 px-3">होस्ट्स देखें</td><td className="py-2 px-3 font-mono text-xs">db hosts</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">db contacts</td><td className="py-2 px-3">कॉन्टैक्ट्स देखें</td><td className="py-2 px-3 font-mono text-xs">db contacts</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">db credentials</td><td className="py-2 px-3">क्रेडेंशियल्स देखें</td><td className="py-2 px-3 font-mono text-xs">db credentials</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">db ports</td><td className="py-2 px-3">पोर्ट्स देखें</td><td className="py-2 px-3 font-mono text-xs">db ports</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">keys add</td><td className="py-2 px-3">API कुंजी जोड़ें</td><td className="py-2 px-3 font-mono text-xs">keys add shodan_api KEY</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">keys list</td><td className="py-2 px-3">सभी API कुंजियां देखें</td><td className="py-2 px-3 font-mono text-xs">keys list</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Workspaces</h2>
      <p>
        वर्कस्पेस Recon-ng का सबसे महत्वपूर्ण कॉन्सेप्ट है। हर प्रोजेक्ट के लिए अलग वर्कस्पेस बनाना चाहिए। वर्कस्पेस में सारा डेटा अलग-अलग स्टोर होता है — एक प्रोजेक्ट का डेटा दूसरे में मिक्स नहीं होता।
      </p>
      <CodeBlock
        title="वर्कस्पेस मैनेजमेंट"
        code={`# नया वर्कस्पेस बनाएं:
workspaces create company_x

# वर्कस्पेस लिस्ट:
workspaces list

# वर्कस्पेस स्विच:
workspaces load company_x

# वर्कस्पेस डिलीट:
workspaces remove company_x

# वर्कस्पेस रीनेम:
workspaces remove old_name
workspaces create new_name

# डेटा एक्सपोर्ट (वर्कस्पेस बदलने से पहले):
modules load reporting/csv
options set FILENAME /tmp/backup.csv
run`}
      />

      <h2>Module Categories — Detailed</h2>
      <p>
        Recon-ng के मॉड्यूल्स कई कैटेगरीज़ में बंटे हैं — हर कैटेगरी अलग तरह का डेटा कलेक्ट करती है। यह मॉड्यूल चेनिंग का कॉन्सेप्ट है — एक मॉड्यूल का आउटपुट दूसरे का इनपुट बन सकता है।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">कैटेगरी</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण मॉड्यूल्स</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">recon/domains-hosts</td><td className="py-2 px-3">डोमेन से होस्ट्स ढूंढें</td><td className="py-2 px-3 font-mono text-xs">google_site_web, bing_domain_web, certificate_transparency</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">recon/domains-contacts</td><td className="py-2 px-3">डोमेन से कॉन्टैक्ट्स</td><td className="py-2 px-3 font-mono text-xs">whois_pocs, pgp_search</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">recon/hosts-ports</td><td className="py-2 px-3">होस्ट्स से पोर्ट्स</td><td className="py-2 px-3 font-mono text-xs">shodan_hostname, ssl_cert</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">recon/contacts-credentials</td><td className="py-2 px-3">कॉन्टैक्ट्स से क्रेडेंशियल्स</td><td className="py-2 px-3 font-mono text-xs">hibp_breach, dehashed</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">recon/contacts-profiles</td><td className="py-2 px-3">कॉन्टैक्ट्स से प्रोफाइल्स</td><td className="py-2 px-3 font-mono text-xs">hunterio, linkedin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">recon/hosts-hosts</td><td className="py-2 px-3">होस्ट्स से होस्ट्स</td><td className="py-2 px-3 font-mono text-xs">ssl_san, bing_ip, resolve</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">recon/netblocks-hosts</td><td className="py-2 px-3">नेटब्लॉक्स से होस्ट्स</td><td className="py-2 px-3 font-mono text-xs">shodan_net, censys_net</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">import</td><td className="py-2 px-3">डेटा इम्पोर्ट करें</td><td className="py-2 px-3 font-mono text-xs">csv_file, list_file</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">reporting</td><td className="py-2 px-3">रिपोर्ट जनरेट करें</td><td className="py-2 px-3 font-mono text-xs">html, csv, json, list</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">exploitation</td><td className="py-2 px-3">एक्सप्लॉइटेशन</td><td className="py-2 px-3 font-mono text-xs">command_injection, xss</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Module Categories — Original</h2>
      <p>
        Recon-ng के मॉड्यूल्स कई कैटेगरीज़ में बंटे हैं — हर कैटेगरी अलग तरह का डेटा कलेक्ट करती है। यह मॉड्यूल चेनिंग का कॉन्सेप्ट है — एक मॉड्यूल का आउटपुट दूसरे का इनपुट बन सकता है।
      </p>
      <CodeBlock
        title="मॉड्यूल कैटेगरीज़"
        code={`# सभी मॉड्यूल्स देखें:
modules search

# डोमेन से होस्ट्स:
modules search recon/domains-hosts
# उदाहरण: google_site_web, bing_domain_web, certificate_transparency

# डोमेन से कॉन्टैक्ट्स:
modules search recon/domains-contacts

# होस्ट्स से पोर्ट्स:
modules search recon/hosts-ports

# कॉन्टैक्ट्स से क्रेडेंशियल्स:
modules search recon/contacts-credentials

# रिपोर्टिंग:
modules search reporting

# ऑटोमेशन:
modules search import
modules search exploitation`}
      />

      <h2>Common Modules — Detailed Examples</h2>
      <CodeBlock
        title="सबडोमेन डिस्कवरी"
        code={`# Google से सबडोमेन्स:
modules load recon/domains-hosts/google_site_web
options set SOURCE target.com
run

# Bing से सबडोमेन्स:
modules load recon/domains-hosts/bing_domain_web
options set SOURCE target.com
run

# सर्टिफिकेट ट्रांसपेरेंसी:
modules load recon/domains-hosts/certificate_transparency
options set SOURCE target.com
run

# ब्रूट फोर्स सबडोमेन्स:
modules load recon/domains-hosts/brute_hosts
options set SOURCE target.com
run

# Shodan से होस्ट्स:
modules load recon/hosts-hosts/shodan_hostname
options set SOURCE target.com
run`}
      />

      <CodeBlock
        title="ईमेल और कॉन्टैक्ट डिस्कवरी"
        code={`# Hunter.io से ईमेल्स:
modules load recon/contacts-profiles/hunterio
options set SOURCE target.com
run

# WHOIS से कॉन्टैक्ट्स:
modules load recon/domains-contacts/whois_pocs
options set SOURCE target.com
run

# PGP कीज़ से ईमेल्स:
modules load recon/domains-contacts/pgp_search
options set SOURCE target.com
run

# LinkedIn से कॉन्टैक्ट्स:
modules load recon/contacts-profiles/linkedin
options set SOURCE target.com
run`}
      />

      <CodeBlock
        title="क्रेडेंशियल और ब्रीच चेक"
        code={`# HaveIBeenPwned से ब्रीच चेक:
modules load recon/contacts-credentials/hibp_breach
options set SOURCE user@target.com
run

# Pwned Passwords चेक:
modules load recon/credentials-credentials/pwned_hashes
options set SOURCE password_hash
run

# Dehashed से क्रेडेंशियल्स:
modules load recon/contacts-credentials/dehashed
options set SOURCE target.com
run`}
      />

      <CodeBlock
        title="होस्ट और पोर्ट स्कैन"
        code={`# Shodan से पोर्ट्स:
modules load recon/hosts-ports/shodan_hostname
options set SOURCE target.com
run

# SSL सर्टिफिकेट:
modules load recon/hosts-hosts/ssl_san
options set SOURCE target.com
run

# Bing IP से होस्ट्स:
modules load recon/hosts-hosts/bing_ip
options set SOURCE 192.168.1.1
run

# DNS रिवर्स लुकअप:
modules load recon/hosts-hosts/resolve
options set SOURCE 192.168.1.0/24
run`}
      />

      <h2>Database Commands</h2>
      <p>
        Recon-ng का बिल्ट-इन डेटाबेस इसकी सबसे बड़ी ताकत है। सभी रिजल्ट्स SQLite में स्टोर होते हैं और बाद में कभी भी एक्सेस कर सकते हो।
      </p>
      <CodeBlock
        title="डेटाबेस कमांड्स"
        code={`# होस्ट्स देखें:
db hosts

# कॉन्टैक्ट्स देखें:
db contacts

# क्रेडेंशियल्स देखें:
db credentials

# पोर्ट्स देखें:
db ports

# डेटा डिलीट (सावधानी से):
db delete hosts

# डेटा काउंट:
db hosts count
db contacts count

# SQLite फाइल लोकेशन:
# ~/.recon-ng/workspaces/workspace_name/data.db`}
      />

      <h2>Reporting</h2>
      <p>
        Recon-ng HTML, CSV, और JSON फॉर्मेट में रिपोर्ट जनरेट कर सकता है। यह पेनेट्रेशन टेस्टिंग रिपोर्ट बनाने में बहुत काम आता है।
      </p>
      <CodeBlock
        title="रिपोर्ट जनरेट करें"
        code={`# HTML रिपोर्ट:
modules load reporting/html
options set FILENAME /tmp/report.html
options set CREATOR pentester_name
options set CUSTOMER target_company
run

# CSV रिपोर्ट:
modules load reporting/csv
options set FILENAME /tmp/results.csv
run

# JSON रिपोर्ट:
modules load reporting/json
options set FILENAME /tmp/results.json
run

# List रिपोर्ट (सिंपल टेक्स्ट):
modules load reporting/list
options set FILENAME /tmp/hosts.txt
options set COLUMN host
run`}
      />

      <h2>API Keys Management</h2>
      <p>
        कुछ मॉड्यूल्स के लिए API keys ज़रूरी हैं। ये keys फ्री मिलती हैं और Recon-ng में सेव हो जाती हैं।
      </p>
      <CodeBlock
        title="API Keys सेटअप"
        code={`# Shodan API key:
keys add shodan_api YOUR_SHODAN_API_KEY

# Hunter.io API key:
keys add hunter_io YOUR_HUNTER_API_KEY

# HaveIBeenPwned API key:
keys add hibp_api YOUR_HIBP_API_KEY

# VirusTotal API key:
keys add virustotal_api YOUR_VT_API_KEY

# Censys API key:
keys add censys_api YOUR_CENSYS_API_KEY

# सभी keys देखें:
keys list

# Key डिलीट:
keys remove shodan_api`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Recon-ng को CLI मोड में भी चला सकते हो — बिना इंटरैक्टिव मेन्यू के। यह ऑटोमेशन के लिए बहुत उपयोगी है।
      </p>
      <CodeBlock
        title="CLI मोड — स्क्रिप्टिंग"
        code={`# बिना इंटरैक्टिव मोड:
recon-ng -w workspace_name -C "modules load recon/domains-hosts/google_site_web"
recon-ng -w workspace_name -C "options set SOURCE target.com"
recon-ng -w workspace_name -C "run"

# रिसोर्स फाइल:
echo 'workspaces create auto_scan' > /tmp/commands.rc
echo 'modules load recon/domains-hosts/google_site_web' >> /tmp/commands.rc
echo 'options set SOURCE target.com' >> /tmp/commands.rc
echo 'run' >> /tmp/commands.rc
recon-ng -r /tmp/commands.rc`}
      />

      <CodeBlock
        title="बैश स्क्रिप्ट — ऑटोमेटेड रेकन"
        code={`#!/bin/bash
# ऑटोमेटेड रेकन स्क्रिप्ट

TARGET=$1
WORKSPACE="scan_$(date +%Y%m%d_%H%M%S)"
REPORT="/tmp/recon_\${TARGET}.html"

cat > /tmp/recon_commands.rc << EOF
workspaces create $WORKSPACE
modules load recon/domains-hosts/google_site_web
options set SOURCE $TARGET
run
modules load recon/domains-hosts/certificate_transparency
options set SOURCE $TARGET
run
modules load recon/domains-hosts/bing_domain_web
options set SOURCE $TARGET
run
modules load reporting/html
options set FILENAME $REPORT
options set CREATOR pentester_name
options set CUSTOMER $TARGET
run
exit
EOF

recon-ng -r /tmp/recon_commands.rc
echo "[+] रिपोर्ट: $REPORT"
echo "[+] वर्कस्पेस: $WORKSPACE"`}
      />

      <CodeBlock
        title="Python स्क्रिप्ट — बल्क रेकन"
        code={`#!/usr/bin/env python3
# बल्क डोमेन रेकन स्क्रिप्ट

import subprocess
import sys

domains = ["target1.com", "target2.com", "target3.com"]

for domain in domains:
    print(f"[+] स्कैनिंग: {domain}")
    workspace = f"scan_{domain.replace('.', '_')}"

    commands = f"""
    workspaces create {workspace}
    modules load recon/domains-hosts/google_site_web
    options set SOURCE {domain}
    run
    modules load reporting/csv
    options set FILENAME /tmp/{workspace}.csv
    run
    exit
    """

    with open("/tmp/recon.rc", "w") as f:
        f.write(commands)

    subprocess.run(["recon-ng", "-r", "/tmp/recon.rc"], capture_output=True)
    print(f"[+] पूरा: {domain}" )`}
      />

      <h2>Recon-ng vs Other OSINT Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Recon-ng</th>
              <th className="text-left py-2 px-3 text-neon-green">Maltego</th>
              <th className="text-left py-2 px-3 text-neon-green">SpiderFoot</th>
              <th className="text-left py-2 px-3 text-neon-green">OSRFramework</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">इंटरफ़ेस</td><td className="py-2 px-3">CLI (Metasploit जैसा)</td><td className="py-2 px-3">GUI</td><td className="py-2 px-3">Web UI</td><td className="py-2 px-3">CLI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">मॉड्यूल्स</td><td className="py-2 px-3">100+</td><td className="py-2 px-3">ट्रांसफॉर्म्स</td><td className="py-2 px-3">200+</td><td className="py-2 px-3">30+ प्लेटफॉर्म्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">डेटाबेस</td><td className="py-2 px-3">हां (SQLite)</td><td className="py-2 px-3">हां</td><td className="py-2 px-3">हां (SQLite)</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">रिपोर्टिंग</td><td className="py-2 px-3">HTML, CSV, JSON</td><td className="py-2 px-3">Graph, PDF</td><td className="py-2 px-3">CSV, JSON</td><td className="py-2 px-3">JSON</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कीमत</td><td className="py-2 px-3">फ्री (ओपन सोर्स)</td><td className="py-2 px-3">फ्री/पेड</td><td className="py-2 px-3">फ्री (ओपन सोर्स)</td><td className="py-2 px-3">फ्री (ओपन सोर्स)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्क्रिप्टिंग</td><td className="py-2 px-3">CLI, RC फाइल</td><td className="py-2 px-3">Python API</td><td className="py-2 px-3">REST API</td><td className="py-2 px-3">CLI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">लर्निंग कर्व</td><td className="py-2 px-3">आसान (Metasploit यूज़र्स)</td><td className="py-2 px-3">मीडियम</td><td className="py-2 px-3">आसान</td><td className="py-2 px-3">आसान</td></tr>
            <tr><td className="py-2 px-3 text-white">मॉड्यूल चेनिंग</td><td className="py-2 px-3">हां</td><td className="py-2 px-3">हां</td><td className="py-2 px-3">हां</td><td className="py-2 px-3">सीमित</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'मॉड्यूल रन नहीं हो रहा — API key error', a: 'कुछ मॉड्यूल्स के लिए API keys चाहिए। keys add कमांड से key जोड़ो। फ्री keys मिलती हैं — Shodan, Hunter.io, VirusTotal सब फ्री प्लान देते हैं।' },
          { q: 'मॉड्यूल नहीं मिल रहा', a: 'modules search से सर्च करो। apt update && apt upgrade से लेटेस्ट मॉड्यूल्स इंस्टॉल करो। GitHub से लेटेस्ट क्लोन करो।' },
          { q: 'रिपोर्ट खाली आ रही है', a: 'पहले मॉड्यूल्स रन करो और डेटाबेस में रिजल्ट्स चेक करो (db hosts)। बिना डेटा के रिपोर्ट खाली आएगी।' },
          { q: 'Python dependency error', a: 'pip3 install -r REQUIREMENTS रन करो। Python 3.6+ चाहिए। वर्चुअल एनवायरनमेंट यूज़ करो।' },
          { q: 'डेटाबेस लॉक दिखा रहा है', a: 'Recon-ng बंद करो और दोबारा खोलो। ~/.recon-ng/ में लॉक फाइल डिलीट करो।' },
          { q: 'Slow performance', a: 'बड़े स्कैन्स में समय लगता है। API rate limits चेक करो। एक बार में एक ही मॉड्यूल रन करो।' },
          { q: 'Workspace data missing', a: 'गलत वर्कस्पेस लोड हो सकता है। workspaces list से चेक करो। ~/.recon-ng/workspaces/ में SQLite फाइल चेक करो।' },
          { q: 'Module timeout error', a: 'नेटवर्क कनेक्शन चेक करो। API endpoint डाउन हो सकता है। बाद में दोबारा ट्राई करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Recon-ng से होने वाले OSINT attacks से कैसे बचें:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">WHOIS प्राइवेसी:</strong> Domain registrar privacy service यूज़ करो — WhoisGuard, Privacy Protect</li>
        <li><strong className="text-white">ईमेल ऑब्स्क्यूकेशन:</strong> Public emails को ऑब्स्क्यूकेट करो — catchall email यूज़ करो</li>
        <li><strong className="text-white">SSL सर्टिफिकेट:</strong> Wildcard certificates यूज़ करो — CT logs में कम subdomains दिखेंगे</li>
        <li><strong className="text-white">DNS सिक्योरिटी:</strong> DNS zone transfers डिसेबल करो — सिर्फ authorized servers</li>
        <li><strong className="text-white">मॉनिटरिंग:</strong> OSINT tools के requests डिटेक्ट करने के लिए मॉनिटरिंग सेटअप करो</li>
        <li><strong className="text-white">Attack Surface कम करो:</strong> Unnecessary subdomains और services हटाओ</li>
        <li><strong className="text-white">Certificate Transparency:</strong> CT logs मॉनिटर करो — नए certificates अलर्ट सेट करो</li>
        <li><strong className="text-white">Shodan Monitoring:</strong> Shodan पर अपने assets मॉनिटर करो — एक्सपोज़्ड सर्विसेज़ हटाओ</li>
        <li><strong className="text-white">Rate Limiting:</strong> API endpoints पर rate limiting लगाओ — स्कैनिंग स्लो होगी</li>
        <li><strong className="text-white">Security Headers:</strong> CSP, HSTS, X-Frame-Options सेट करो — वेब एप्लिकेशन सिक्योर रखो</li>
        <li><strong className="text-white">Data Minimization:</strong> Public में जितना कम data हो, उतना अच्छा — unnecessary info हटाओ</li>
        <li><strong className="text-white">Employee Training:</strong> Employees को social engineering awareness training दो</li>
        <li><strong className="text-white">Breach Monitoring:</strong> HIBP जैसे tools से अपने domain monitor करो — compromised credentials पता चलेंगे</li>
        <li><strong className="text-white">Attack Surface Management:</strong> Regularly अपना OSINT assessment करो — exposed data identify करो</li>
        <li><strong className="text-white">Incident Response:</strong> OSINT-based attack detect करने के लिए IR plan ready रखो</li>
      </ul>

      <h2>Integration with Other Tools</h2>
      <p>
        Recon-ng अकेले use नहीं होता — यह OSINT pipeline का हिस्सा है। दूसरे tools के साथ combine करके comprehensive recon possible है। Recon-ng का database output दूसरे tools के लिए input बनता है।
      </p>
      <CodeBlock
        title="Integration Pipeline"
        code={`# Recon-ng → Nmap pipeline:
# Recon-ng से hosts export करो
db hosts > /tmp/hosts.txt
# Nmap से detailed scan करो
nmap -iL /tmp/hosts.txt -sV -oX /tmp/nmap.xml

# Recon-ng → Nuclei pipeline:
db hosts > /tmp/hosts.txt
nuclei -l /tmp/hosts.txt -t cves/ -o /tmp/nuclei.txt

# Recon-ng → ffuf pipeline:
db hosts > /tmp/hosts.txt
ffuf -u https://FUZZ.target.com -w /tmp/hosts.txt -o /tmp/ffuf.json

# Full OSINT pipeline:
#!/bin/bash
TARGET=$1
echo "[*] Recon-ng: OSINT collection..."
recon-ng -r /tmp/recon.rc

echo "[*] Exporting hosts..."
db hosts > /tmp/hosts.txt

echo "[*] Nmap: Port scanning..."
nmap -iL /tmp/hosts.txt -oX /tmp/nmap.xml

echo "[*] Nuclei: Vulnerability scanning..."
nuclei -l /tmp/hosts.txt -o /tmp/nuclei.txt

echo "[+] Complete pipeline done!"
echo "Hosts: $(wc -l < /tmp/hosts.txt)"`}
      />
      <CodeBlock
        title="Recon-ng + Shodan + Censys"
        code={`# Shodan module:
modules load recon/hosts-ports/shodan_hostname
options set SOURCE target.com
run
# Shodan से exposed services पता चलते हैं

# Censys module:
modules load recon/netblocks-hosts/censys_net
options set SOURCE 192.168.1.0/24
run
# Censys से SSL certificates और hosts मिलते हैं

# Combined approach:
# 1. Recon-ng → subdomains
# 2. Shodan → exposed services
# 3. Censys → certificate data
# 4. HIBP → breach data
# 5. Hunter.io → email addresses
# 6. Report → HTML/CSV/JSON`}
      />

      <h2>Lab Environment Setup</h2>
      <p>
        OSINT practice के लिए safe environment बनाना ज़रूरी है। केवल authorized targets पर काम करो।
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# VirtualBox में Kali Linux VM बनाएं
# Recon-ng प्री-इंस्टॉल्ड आता है

# Practice domains (authorized):
# - अपनी खुद की वेबसाइट
# - Bug bounty programs (HackerOne, Bugcrowd)
# - OWASP WebGoat, DVWA

# API keys रजिस्टर करें (फ्री):
# - Shodan: shodan.io (फ्री अकाउंट)
# - Hunter.io: hunter.io (फ्री प्लान)
# - VirusTotal: virustotal.com (फ्री API)
# - Censys: censys.io (फ्री अकाउंट)

# प्रैक्टिस वर्कफ़्लो:
recon-ng
workspaces create practice
modules load recon/domains-hosts/google_site_web
options set SOURCE your_domain.com
run
db hosts
modules load reporting/html
options set FILENAME /tmp/practice_report.html
run`}
      />

      <h2>Real-World Workflow — Complete Example</h2>
      <p>
        एक असली पेनेट्रेशन टेस्ट में Recon-ng कैसे इस्तेमाल होता है — स्टेप बाय स्टेप:
      </p>
      <CodeBlock
        title="पूरा रेकन वर्कफ़्लो"
        code={`# स्टेप 1: वर्कस्पेस बनाओ
workspaces create pentest_2024

# स्टेप 2: सबडोमेन्स ढूंढो
modules load recon/domains-hosts/google_site_web
options set SOURCE target.com
run

modules load recon/domains-hosts/certificate_transparency
options set SOURCE target.com
run

modules load recon/domains-hosts/bing_domain_web
options set SOURCE target.com
run

# स्टेप 3: होस्ट्स देखो
db hosts

# स्टेप 4: कॉन्टैक्ट्स ढूंढो
modules load recon/domains-contacts/whois_pocs
options set SOURCE target.com
run

modules load recon/contacts-profiles/hunterio
options set SOURCE target.com
run

# स्टेप 5: क्रेडेंशियल्स चेक करो
modules load recon/contacts-credentials/hibp_breach
options set SOURCE admin@target.com
run

# स्टेप 6: पोर्ट्स स्कैन करो
modules load recon/hosts-ports/shodan_hostname
options set SOURCE target.com
run

# स्टेप 7: रिपोर्ट जनरेट करो
modules load reporting/html
options set FILENAME /tmp/pentest_report.html
options set CREATOR pentester_name
options set CUSTOMER target_company
run`}
      />

      <h2>Database — Advanced Queries</h2>
      <p>
        Recon-ng का SQLite डेटाबेस बहुत पावरफुल है — डायरेक्ट SQL क्वेरीज़ चला सकते हो।
      </p>
      <CodeBlock
        title="SQLite डेटाबेस क्वेरीज़"
        code={`# डेटाबेस फाइल लोकेशन:
# ~/.recon-ng/workspaces/workspace_name/data.db

# SQLite में खोलें:
sqlite3 ~/.recon-ng/workspaces/pentest_2024/data.db

# सभी टेबल्स देखें:
.tables

# होस्ट्स काउंट:
SELECT COUNT(*) FROM hosts;

# यूनिक डोमेन्स:
SELECT DISTINCT host FROM hosts WHERE host LIKE '%target%';

# कॉन्टैक्ट्स फ़िल्टर:
SELECT * FROM contacts WHERE email LIKE '%@target.com%';

# क्रेडेंशियल्स:
SELECT * FROM credentials;

# पोर्ट्स फ़िल्टर:
SELECT * FROM ports WHERE port = 443;

# एक्सपोर्ट:
.mode csv
.output /tmp/hosts.csv
SELECT * FROM hosts;
.output stdout`}
      />

      <h2>Recon-ng + Other Tools Integration</h2>
      <p>
        Recon-ng को दूसरे टूल्स के साथ मिलाकर पावरफुल पाइपलाइन बना सकते हो।
      </p>
      <CodeBlock
        title="टूल इंटीग्रेशन"
        code={`# Recon-ng → Nmap पाइपलाइन:
# 1. Recon-ng से होस्ट्स निकालो
db hosts > /tmp/hosts.txt
# 2. Nmap से स्कैन करो
nmap -iL /tmp/hosts.txt -sV -oX /tmp/nmap_results.xml

# Recon-ng → Nuclei पाइपलाइन:
# 1. होस्ट्स निकालो
db hosts > /tmp/hosts.txt
# 2. Nuclei से स्कैन करो
nuclei -l /tmp/hosts.txt -t cves/ -o /tmp/nuclei_results.txt

# Recon-ng → ffuf पाइपलाइन:
# 1. होस्ट्स निकालो
db hosts > /tmp/hosts.txt
# 2. ffuf से डायरेक्टरी स्कैन
ffuf -u https://FUZZ.target.com -w /tmp/hosts.txt -o /tmp/ffuf_results.json

# पूरी ऑटोमेटेड पाइपलाइन:
#!/bin/bash
recon-ng -r /tmp/recon.rc
db hosts > /tmp/hosts.txt
nmap -iL /tmp/hosts.txt -oX /tmp/nmap.xml
nuclei -l /tmp/hosts.txt -o /tmp/nuclei.txt
echo "[+] सभी स्कैन पूरे!"`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        Recon-ng के एडवांस्ड फीचर्स जो ज़्यादातर लोग नहीं जानते:
      </p>
      <CodeBlock
        title="एडवांस्ड Recon-ng"
        code={`# कस्टम मॉड्यूल बनाएं:
# ~/.recon-ng/modules/ में Python फाइल बनाओ
# BaseModule class extend करो

# मॉड्यूल चेन — एक का आउटपुट दूसरे का इनपुट:
# 1. डोमेन → होस्ट्स (google_site_web)
# 2. होस्ट्स → पोर्ट्स (shodan_hostname)
# 3. पोर्ट्स → वल्नरेबिलिटीज़ (शोध)

# डेटा एक्सपोर्ट:
db hosts > /tmp/hosts.txt
db contacts > /tmp/contacts.txt
db credentials > /tmp/creds.txt

# SQLite डायरेक्ट क्वेरी:
# ~/.recon-ng/workspaces/default/data.db
sqlite3 data.db "SELECT * FROM hosts WHERE host LIKE '%target%'"

# ऑटोमेटेड पाइपलाइन:
# recon-ng → nmap → nuclei
# हर टूल का आउटपुट अगले का इनपुट

# कस्टम मॉड्यूल टेम्पलेट:
# class MyModule(BaseModule):
#     meta = {
#         'name': 'My Custom Module',
#         'author': 'Your Name',
#     }
#     def module_run(self, target):
#         # कस्टम कोड यहाँ
#         pass

# मल्टी-वर्कस्पेस रिपोर्ट:
# सभी वर्कस्पेस के डेटा को एक साथ एनालाइज़ करो`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Recon-ng real-world penetration testing engagements में extensively use होता है। एक typical case में, penetration tester को client company का domain दिया जाता है। Tester Recon-ng में workspace बनाता है, Google और Bing modules से subdomains discover करता है, certificate transparency से additional hosts ढूंढता है, और Shodan module से open ports identify करता है। यह सब passive reconnaissance है — target को पता नहीं चलता।
      </p>
      <p>
        एक bug bounty engagement में, hunter ने Recon-ng से target company के 2,500 subdomains discover किए। Certificate transparency module से एक staging environment मिला जो Google पर index नहीं था। यह staging server development branch चला रहा था जिसमें debug mode enabled था। Debug mode से source code leak हुआ और SQL injection vulnerability मिली। $5,000 bounty मिली — सब Recon-ng की passive scanning की वजह से।
      </p>
      <p>
        Corporate OSINT assessment में Recon-ng बहुत useful है। Company के exposed employees, email addresses, credentials (breach data), और infrastructure details सब Recon-ng से discover होते हैं। Hunter.io module से employee emails मिलते हैं, HIBP module से breached credentials पता चलते हैं, और WHOIS module से registration details मिलती हैं। यह information social engineering attacks के लिए use हो सकती है — इसलिए companies को अपना OSINT exposure assess करना चाहिए।
      </p>

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Recon-ng फ्री है?', a: 'हां, पूरी तरह फ्री और ओपन सोर्स (GPLv3)। कमर्शियल यूज़ भी फ्री।' },
          { q: 'Metasploit जैसा है?', a: 'हां, इंटरफ़ेस बहुत मिलता-जुलता है। अगर Metasploit यूज़ किया है तो Recon-ng तुरंत सीख सकते हो।' },
          { q: 'API keys ज़रूरी हैं?', a: 'नहीं, बिना keys के भी काम करता है। लेकिन keys से ज़्यादा रिजल्ट्स मिलते हैं। फ्री keys मिलती हैं।' },
          { q: 'कितने मॉड्यूल्स हैं?', a: '100+ मॉड्यूल्स — domains, hosts, contacts, credentials, ports, reporting सब कवर।' },
          { q: 'रिपोर्ट कैसे जनरेट करें?', a: 'modules load reporting/html करो, FILENAME सेट करो, run करो। CSV और JSON भी सपोर्ट।' },
          { q: 'क्या यह passive रेकन है?', a: 'हां, ज़्यादातर मॉड्यूल्स passive हैं — टार्गेट को पता नहीं चलता।' },
          { q: 'Windows पर चलता है?', a: 'हां, Python 3.6+ सब प्लेटफ़ॉर्म्स पर चलता है। Linux recommended है।' },
          { q: 'कस्टम मॉड्यूल कैसे बनाएं?', a: 'Python में BaseModule class extend करो। ~/.recon-ng/modules/ में रखो। Documentation पढ़ो।' },
          { q: 'क्या Recon-ng passive है?', a: 'हाँ, ज़्यादातर modules passive हैं — target को पता नहीं चलता। लेकिन कुछ modules (brute_hosts) active हैं — DNS queries generate करते हैं।' },
          { q: 'Multiple domains एक साथ scan कर सकते हैं?', a: 'हाँ, CLI mode में resource file use करो। हर domain के लिए अलग workspace बनाओ। Python script से automate करो।' },
          { q: 'Data export कैसे करें?', a: 'Reporting modules use करो — HTML, CSV, JSON formats available। db hosts command से direct output ले सकते हो।' },
          { q: 'API keys expire हो जाती हैं?', a: 'Free API keys की limits होती हैं — monthly quota। Paid plans लो unlimited access के लिए। Keys expire नहीं होतीं, quota exhaust होती है।' },
          { q: 'Recon-ng vs SpiderFoot कौन सा better है?', a: 'Recon-ng CLI-based है — scripting के लिए better। SpiderFoot web UI है — visual interface के लिए better। दोनों modules comparable हैं।' },
          { q: 'SQLite database corrupt हो गया तो?', a: '~/.recon-ng/workspaces/ में backup files होती हैं। sqlite3 .recover command try करो। Regular backups लो — db export करो।' },
          { q: 'Module update कैसे करें?', a: 'git pull करो recon-ng directory में। ya apt update && apt upgrade से latest modules install होंगे।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Integration with Metasploit</h2>
      <p>
        Recon-ng और Metasploit को combine करके full attack chain बना सकते हो — passive recon से exploitation तक। Recon-ng से hosts और services discover करो, फिर Metasploit से exploit करो।
      </p>
      <CodeBlock
        title="Recon-ng + Metasploit Pipeline"
        code={`# Step 1: Recon-ng से hosts निकालो
recon-ng -w pentest -C "modules load recon/domains-hosts/google_site_web"
recon-ng -w pentest -C "options set SOURCE target.com"
recon-ng -w pentest -C "run"
recon-ng -w pentest -C "db hosts > /tmp/hosts.txt"

# Step 2: Nmap से service detection
nmap -sV -iL /tmp/hosts.txt -oX /tmp/nmap.xml

# Step 3: Metasploit में import
msfconsole
db_import /tmp/nmap.xml
hosts
services

# Automated script:
#!/bin/bash
echo "[*] Starting recon-to-exploit pipeline..."
recon-ng -r /tmp/recon.rc
nmap -sV -iL /tmp/hosts.txt -oX /tmp/nmap.xml
msfconsole -x "db_import /tmp/nmap.xml; services; exit"
echo "[+] Pipeline complete!"`}
      />

      <h2>Custom Module Development</h2>
      <p>
        Recon-ng में custom modules बना सकते हो — अगर कोई data source है जो existing modules cover नहीं करता। Python में BaseModule class extend करके custom module बनाना आसान है।
      </p>
      <CodeBlock
        title="Custom Module Template"
        code={`# ~/.recon-ng/modules/custom/my_module.py

from recon.core.module import BaseModule

class Module(BaseModule):
    meta = {
        'name': 'My Custom OSINT Module',
        'author': 'Your Name',
        'description': 'Custom data source se information collect karta hai',
        'query': 'SELECT DISTINCT host FROM hosts WHERE host IS NOT NULL',
    }

    def module_run(self, hosts):
        api_key = self.get_key('my_api_key')
        if not api_key:
            self.output('API key missing')
            return

        for host in hosts:
            self.output(f'Scanning: {host}')
            resp = self.request(f'https://api.example.com/lookup?host={host}')
            if resp.status_code == 200:
                data = resp.json()
                self.insert_hosts(host, data.get('ip'))
                self.insert_ports(host, 80, 'tcp', 'http')

# Module install:
# ~/.recon-ng/modules/custom/ me rakho
# modules search custom dikhenga`}
      />

      <h2>Data Enrichment and Correlation</h2>
      <p>
        Recon-ng का सबसे powerful feature data enrichment और correlation है। एक data point से शुरू करके related information discover कर सकते हो। उदाहरण: domain name → subdomains → IP addresses → open ports → services → vulnerabilities — यह chain Recon-ng modules को link करके possible है।
      </p>
      <CodeBlock
        title="Data Correlation Workflow"
        code={`# Domain → Hosts → Ports → Services chain:

# Step 1: Domain se hosts
modules load recon/domains-hosts/certificate_transparency
options set SOURCE target.com
run

# Step 2: Hosts se ports (Shodan)
modules load recon/hosts-ports/shodan_hostname
options set SOURCE target.com
run

# Step 3: Hosts se additional hosts (SSL SAN)
modules load recon/hosts-hosts/ssl_san
options set SOURCE target.com
run

# Step 4: Contacts se credentials (HIBP)
modules load recon/contacts-credentials/hibp_breach
options set SOURCE admin@target.com
run

# Step 5: Results correlate करो
db hosts
db ports
db credentials

# Cross-reference analysis:
sqlite3 ~/.recon-ng/workspaces/target/data.db
SELECT h.host, p.port, p.protocol
FROM hosts h
JOIN ports p ON h.host = p.host
WHERE p.port IN (22, 80, 443, 3306, 8080);`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Maltego</td><td className="py-2 px-3">OSINT विज़ुअलाइज़ेशन</td><td className="py-2 px-3">GUI, ग्राफ़ विज़ुअलाइज़ेशन, ट्रांसफॉर्म्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SpiderFoot</td><td className="py-2 px-3">ऑटोमेटेड OSINT</td><td className="py-2 px-3">Web UI, 200+ मॉड्यूल्स, REST API</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">TheHarvester</td><td className="py-2 px-3">ईमेल/होस्ट डिस्कवरी</td><td className="py-2 px-3">सिंपल, तेज़, 30+ सोर्सेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">OSRFramework</td><td className="py-2 px-3">यूज़रनेम OSINT</td><td className="py-2 px-3">300+ प्लेटफॉर्म्स, यूज़रनेम सर्च</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Amass</td><td className="py-2 px-3">सबडोमेन एन्यूमरेशन</td><td className="py-2 px-3">50+ डेटा सोर्सेज़, OWASP प्रोजेक्ट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Subfinder</td><td className="py-2 px-3">पैसिव सबडोमेन</td><td className="py-2 px-3">30+ सोर्सेज़, Go-based, तेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Shodan</td><td className="py-2 px-3">इंटरनेट स्कैनिंग</td><td className="py-2 px-3">Exposed services, IoT devices</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Censys</td><td className="py-2 px-3">सर्टिफिकेट सर्च</td><td className="py-2 px-3">SSL/TLS certificates, hosts</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>हमेशा वर्कस्पेस बनाओ पहले — डेटा ऑर्गेनाइज़्ड रहेगा</li>
          <li>API keys सेट करो — फ्री मिलती हैं और ज़्यादा रिजल्ट्स मिलते हैं</li>
          <li>मॉड्यूल चेनिंग यूज़ करो — एक का आउटपुट दूसरे का इनपुट</li>
          <li>CLI मोड में स्क्रिप्ट करो — ऑटोमेशन बहुत आसान है</li>
          <li>HTML रिपोर्ट जनरेट करो — क्लाइंट को दिखाने के लिए</li>
          <li>SQLite डेटाबेस डायरेक्ट क्वेरी करो — एडवांस्ड एनालिसिस</li>
          <li>Module chaining use करो — एक का output दूसरे का input बनाओ</li>
          <li>Reporting module से professional reports बनाओ — clients impressed होंगे</li>
          <li>Resource files (.rc) बनाओ — repeatable workflows automate होंगे</li>
          <li>Breach data check करो — HIBP module से compromised credentials पता चलेंगे</li>
          <li>Certificate transparency module always run करो — hidden subdomains मिलते हैं</li>
        </ul>
      </div>

      <h2>Performance Tuning</h2>
      <p>
        Recon-ng की performance optimize करना large-scale OSINT operations के लिए important है। API rate limits, network latency, और database size — ये सभी factors scan speed affect करते हैं। Proper tuning से same data कम समय में collect होता है।
      </p>
      <CodeBlock
        title="Performance Optimization"
        code={`# API rate limits manage करो:
# Hunter.io: 25 requests/month (free)
# Shodan: 1 request/second (free)
# VirusTotal: 4 requests/minute (free)

# Rate limit errors आ रहे हैं तो:
# 1. Module delay add करो
# 2. API key upgrade करो (paid plan)
# 3. Alternative modules use करो

# Database optimization:
# Large workspaces में database slow हो सकता है
# Regular cleanup करो:
db delete hosts WHERE host LIKE '%test%'

# Memory optimization:
# एक बार में एक ही module run करो
# Multiple modules simultaneously मत चलाओ

# Network optimization:
# Fast DNS server use करो (8.8.8.8, 1.1.1.1)
# Proxy settings configure करो अगर ज़रूरी हो

# Module selection:
# Fast modules: google_site_web, bing_domain_web
# Slow modules: shodan_hostname (API dependent)
# Passive modules: certificate_transparency (fastest)`}
      />
      <CodeBlock
        title="Bulk Operations"
        code={`# Multiple domains scan करने के लिए:
# Python script use करो

#!/usr/bin/env python3
import subprocess
import time

domains = ["target1.com", "target2.com", "target3.com"]

for domain in domains:
    print(f"[+] Scanning: {domain}")
    workspace = f"scan_{domain.replace('.', '_')}"

    commands = f"""
    workspaces create {workspace}
    modules load recon/domains-hosts/google_site_web
    options set SOURCE {domain}
    run
    modules load recon/domains-hosts/certificate_transparency
    options set SOURCE {domain}
    run
    modules load reporting/csv
    options set FILENAME /tmp/{workspace}.csv
    run
    exit
    """

    with open("/tmp/recon.rc", "w") as f:
        f.write(commands)

    subprocess.run(["recon-ng", "-r", "/tmp/recon.rc"], capture_output=True)
    time.sleep(2)  # API rate limit respect करो
    print(f"[+] Done: {domain}")`}
      />

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Recon-ng एक शक्तिशाली OSINT फ्रेमवर्क है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए करें। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत रेकन अपराध हो सकता है। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>
    </TutorialLayout>
  )
}
