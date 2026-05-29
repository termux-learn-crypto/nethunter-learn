import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Wpscan() {
  return (
    <TutorialLayout
      title="wpscan"
      subtitle="WordPress सिक्योरिटी स्कैनर — प्लगइन्स, थीम्स, और कोर वल्नरेबिलिटीज़"
      icon="🔍"
      prev={{ to: '/tool/wafw00f', label: 'wafw00f' }}
      next={{ to: '/tool/pixiewps', label: 'pixiewps' }}
    >
      <h2>What is WPScan?</h2>
      <p>
        WPScan एक WordPress सिक्योरिटी स्कैनर है जो WordPress वेबसाइट्स में known vulnerabilities ढूंढता है। यह प्लगइन्स, थीम्स, और WordPress कोर में कमज़ोरियां पता करता है। WordPress दुनिया का सबसे popular CMS है — 40%+ वेबसाइट्स WordPress पर चलती हैं — इसलिए यह टूल पेनेट्रेशन टेस्टर्स के लिए बहुत ज़रूरी है।
      </p>
      <p>
        WPScan Ruby में लिखा गया है और WPScan Vulnerability Database इस्तेमाल करता है जिसमें 50,000+ प्लगइन्स और थीम्स की vulnerabilities हैं। यह टूल ऑटोमैटिकली WordPress version, installed plugins, themes, और users detect करता है। फिर हर component को vulnerability database से मैच करता है। फ्री API key से 25 requests/day मिलते हैं, paid plan में unlimited।
      </p>
      <p>
        WPScan को Ryan Dewhurst ने 2012 में बनाया था। बाद में इसे Automattic (WordPress की parent company) ने acquire कर लिया। यह Ruby Gem के रूप में उपलब्ध है और Kali Linux में प्री-इंस्टॉल्ड आता है। WPScan ने WordPress security research में बहुत बड़ा योगदान दिया है — हज़ारों vulnerabilities responsibly disclose की हैं।
      </p>
      <p>
        WPScan सिर्फ vulnerability scanner नहीं है — यह एक complete WordPress security audit toolkit है। इसमें user enumeration, plugin detection, theme analysis, password brute force, misconfiguration detection, और API integration सब शामिल है। Bug bounty hunters, penetration testers, और WordPress developers सभी इसे इस्तेमाल करते हैं। यह open source है और GitHub पर 8,000+ stars हैं।
      </p>
      <p>
        WPScan का सबसे बड़ा advantage है इसकी vulnerability database — यह daily update होती है और इसमें community contributions भी शामिल हैं। जब कोई नया WordPress plugin vulnerability discover होता है, तो वो जल्दी ही WPScan database में add हो जाता है। यही कारण है कि WPScan WordPress security testing का industry standard बन गया है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> WPScan केवल अपनी वेबसाइट या अधिकृत पेनेट्रेशन टेस्टिंग में ही इस्तेमाल करें। बिना अनुमति के vulnerability scanning अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत स्कैनिंग अपराध हो सकता है। WordPress brute force attack तो बिल्कुल भी बिना permission मत करो।
      </div>

      <h2>History of WPScan</h2>
      <p>
        WPScan की शुरुआत 2012 में Ryan Dewhurst ने की थी। Ryan एक Welsh security researcher हैं जो WordPress security में specialize करते हैं। शुरू में यह सिर्फ एक simple WordPress scanner था जो basic enumeration करता था — WordPress version detect करना और installed plugins list करना।
      </p>
      <p>
        2014 में WPScan Vulnerability Database (wpvulndb.com) लॉन्च हुई — यह WordPress vulnerabilities की सबसे बड़ी ओपन डेटाबेस है। इस database में WordPress core, plugins, और themes की vulnerabilities store होती हैं। हर vulnerability के साथ CVE number, affected versions, fix version, और detailed description होता है।
      </p>
      <p>
        2017 में Automattic (WordPress.com की parent company) ने WPScan को acquire किया। यह acquisition WordPress ecosystem की security improve करने के लिए था। Automattic ने WPScan team को fund किया ताकि vulnerability database maintain रहे और tool actively developed रहे। आज WPScan WordPress security testing का industry standard टूल है।
      </p>
      <p>
        WPScan का development history interesting है — शुरू में यह PHP में लिखा गया था, लेकिन बाद में Ruby में rewrite किया गया। Ruby choose करने का कारण था — better library support, cleaner code, और Metasploit framework के साथ compatibility। WPScan 3.0 major release था जिसमें API integration, better performance, और modular architecture add हुआ।
      </p>

      <h2>How WPScan Works?</h2>
      <p>
        WPScan का काम करने का तरीका बहुत systematic है। यह multiple phases में scan करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">फ़िंगरप्रिंटिंग:</strong> WordPress version, installed plugins, themes, और configurations detect करता है। HTTP headers, HTML source, और RSS feeds से information extract करता है</li>
        <li><strong className="text-white">Enumeration:</strong> Users, plugins, themes, और WordPress endpoints की list बनाता है। /?author=N, /wp-json/wp/v2/users, /feed/ जैसे endpoints check करता है</li>
        <li><strong className="text-white">Vulnerability Matching:</strong> मिले components को WPScan Vulnerability Database से match करता है। API से real-time CVE data fetch करता है</li>
        <li><strong className="text-white">Brute Force:</strong> wp-login.php और XML-RPC पर password attack करता है। XML-RPC multicall से एक request में multiple passwords try करता है</li>
        <li><strong className="text-white">Misconfiguration Detection:</strong> गलत settings जैसे debug mode, directory listing, exposed files detect करता है</li>
        <li><strong className="text-white">API Integration:</strong> WPVulnDB API से real-time CVE data fetch करता है। Vulnerability details, fix versions, और references मिलते हैं</li>
        <li><strong className="text-white">Backup File Detection:</strong> Common backup file locations check करता है — .sql, .zip, .tar.gz files</li>
        <li><strong className="text-white">Media File Enumeration:</strong> Upload directories में media files list करता है — sensitive images या documents मिल सकते हैं</li>
      </ul>
      <p>
        WPScan का scanning engine event-driven है — यह multiple requests parallel में भेजता है। Aggressive mode में ज़्यादा requests जाती हैं लेकिन detection risk बढ़ता है। Stealthy mode में कम requests जाती हैं लेकिन scan slow होता है। Default mode balanced है — speed और stealth दोनों का ध्यान रखता है।
      </p>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में WPScan प्री-इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो कई तरीकों से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="WPScan इंस्टॉलेशन"
        code={`# apt से (Kali में प्री-इंस्टॉल्ड):
sudo apt update
sudo apt install wpscan

# Ruby Gem से (सबसे latest version):
gem install wpscan

# सोर्स से:
git clone https://github.com/wpscanteam/wpscan.git
cd wpscan
bundle install
bundle exec wpscan --url http://target.com

# Docker से:
docker pull wpscanteam/wpscan
docker run -it --rm wpscanteam/wpscan --url http://target.com

# वर्जन चेक:
wpscan --version

# अपडेट:
gem update wpscan

# Ruby dependencies (अगर ज़रूरत हो):
sudo apt install ruby ruby-dev libcurl4-openssl-dev
gem install bundler
bundle install`}
      />

      <h2>Basic Usage</h2>
      <p>
        WPScan का बेसिक इस्तेमाल बहुत आसान है — बस URL दो। लेकिन सही options से बहुत कुछ मिल सकता है।
      </p>
      <CodeBlock
        title="बेसिक WordPress स्कैन"
        code={`# सिंपल स्कैन (WordPress version + basic info):
wpscan --url http://target.com

# HTTPS वेबसाइट:
wpscan --url https://target.com

# वर्बोज़ आउटपुट:
wpscan --url http://target.com -v

# आउटपुट फाइल में सेव:
wpscan --url http://target.com -o scan.txt

# JSON आउटपुट (automation के लिए):
wpscan --url http://target.com -f json -o scan.json

# सब कुछ enumerate करो (प्लगइन्स + थीम्स + यूज़र्स):
wpscan --url http://target.com --enumerate ap at u

# API key के साथ (ज़्यादा डेटा):
wpscan --url http://target.com --api-token YOUR_KEY --enumerate ap at u

# सिर्फ WordPress version check:
wpscan --url http://target.com --wp-version

# सिर्फ plugins enumerate:
wpscan --url http://target.com --enumerate p`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--url</td><td className="py-2 px-3">टार्गेट वेबसाइट URL</td><td className="py-2 px-3 font-mono text-xs">--url http://target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--enumerate</td><td className="py-2 px-3">क्या enumerate करना है</td><td className="py-2 px-3 font-mono text-xs">--enumerate ap,at,u</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--passwords</td><td className="py-2 px-3">पासवर्ड वर्डलिस्ट फाइल</td><td className="py-2 px-3 font-mono text-xs">--passwords rockyou.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--usernames</td><td className="py-2 px-3">यूज़रनेम(s)</td><td className="py-2 px-3 font-mono text-xs">--usernames admin,editor</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--api-token</td><td className="py-2 px-3">WPScan API key</td><td className="py-2 px-3 font-mono text-xs">--api-token YOUR_KEY</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--stealthy</td><td className="py-2 px-3">स्टील्थी मोड (कम requests)</td><td className="py-2 px-3 font-mono text-xs">--stealthy</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--disable-tls-checks</td><td className="py-2 px-3">SSL certificate ignore करें</td><td className="py-2 px-3 font-mono text-xs">--disable-tls-checks</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--proxy</td><td className="py-2 px-3">प्रॉक्सी से स्कैन करें</td><td className="py-2 px-3 font-mono text-xs">--proxy http://127.0.0.1:8080</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--random-user-agent</td><td className="py-2 px-3">रैंडम User-Agent यूज़ करें</td><td className="py-2 px-3 font-mono text-xs">--random-user-agent</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--throttle</td><td className="py-2 px-3">requests के बीच डिले (ms)</td><td className="py-2 px-3 font-mono text-xs">--throttle 2000</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--max-threads</td><td className="py-2 px-3">parallel threads की संख्या</td><td className="py-2 px-3 font-mono text-xs">--max-threads 5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--detection-mode</td><td className="py-2 px-3">detection aggressiveness</td><td className="py-2 px-3 font-mono text-xs">--detection-mode aggressive</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--plugins-detection</td><td className="py-2 px-3">plugin detection mode</td><td className="py-2 px-3 font-mono text-xs">--plugins-detection aggressive</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--password-attack</td><td className="py-2 px-3">attack endpoint choose करें</td><td className="py-2 px-3 font-mono text-xs">--password-attack xmlrpc</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--login-uri</td><td className="py-2 px-3">custom login URL</td><td className="py-2 px-3 font-mono text-xs">--login-uri /custom-login</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Enumeration Codes</h2>
      <p>
        --enumerate flag में अलग-अलग letters use होते हैं। हर letter का मतलब अलग है:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Code</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या enumerate करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">p</td><td className="py-2 px-3">सभी प्लगइन्स</td><td className="py-2 px-3 font-mono text-xs">--enumerate p</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">vp</td><td className="py-2 px-3">सिर्फ vulnerable प्लगइन्स</td><td className="py-2 px-3 font-mono text-xs">--enumerate vp</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ap</td><td className="py-2 px-3">सभी प्लगइन्स (aggressive)</td><td className="py-2 px-3 font-mono text-xs">--enumerate ap</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">t</td><td className="py-2 px-3">सभी थीम्स</td><td className="py-2 px-3 font-mono text-xs">--enumerate t</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">vt</td><td className="py-2 px-3">सिर्फ vulnerable थीम्स</td><td className="py-2 px-3 font-mono text-xs">--enumerate vt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">at</td><td className="py-2 px-3">सभी थीम्स (aggressive)</td><td className="py-2 px-3 font-mono text-xs">--enumerate at</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">u</td><td className="py-2 px-3">यूज़र्स</td><td className="py-2 px-3 font-mono text-xs">--enumerate u</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">m</td><td className="py-2 px-3">मीडिया फाइल्स</td><td className="py-2 px-3 font-mono text-xs">--enumerate m</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">cb</td><td className="py-2 px-3">कस्टम बैकअप फाइल्स</td><td className="py-2 px-3 font-mono text-xs">--enumerate cb</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Vulnerability Scanning</h2>
      <p>
        WPScan का मुख्य काम vulnerabilities ढूंढना है। यह WordPress core, plugins, और themes तीनों को स्कैन करता है। API key से vulnerability details, CVE numbers, और fix versions मिलते हैं। WordPress core vulnerabilities बहुत critical होती हैं — अगर WordPress outdated है तो known exploits available हो सकते हैं।
      </p>
      <CodeBlock
        title="वल्नरेबिलिटी स्कैन"
        code={`# API key के साथ फुल स्कैन:
wpscan --url http://target.com --api-token YOUR_KEY --enumerate ap,at,u

# सिर्फ vulnerable प्लगइन्स:
wpscan --url http://target.com --api-token YOUR_KEY --enumerate vp

# सिर्फ vulnerable थीम्स:
wpscan --url http://target.com --api-token YOUR_KEY --enumerate vt

# WordPress core vulnerabilities:
wpscan --url http://target.com --api-token YOUR_KEY

# सभी मिले vulnerabilities CVE numbers के साथ दिखेंगे
# Example output:
# [!] Title: Plugin X - SQL Injection
#     Fixed in: 2.3.4
#     References:
#       - CVE-2024-12345
#       - https://wpscan.com/vulnerabilities/12345

# JSON output (automation के लिए):
wpscan --url http://target.com --api-token YOUR_KEY -f json -o vulns.json

# Severity filter (सिर्फ critical vulnerabilities):
wpscan --url http://target.com --api-token YOUR_KEY --enumerate vp --vuln-type-cve`}
      />

      <h2>User Enumeration</h2>
      <p>
        WordPress users ढूंढना brute force attack का पहला step है। WPScan कई तरीकों से users detect करता है — author archives, REST API, RSS feeds, HTML comments, और login error messages। User enumeration से username मिलते हैं जिनके against brute force attack कर सकते हो।
      </p>
      <CodeBlock
        title="यूज़र एन्यूमरेशन"
        code={`# यूज़र्स enumerate करें:
wpscan --url http://target.com --enumerate u

# यूज़र्स कैसे मिलते हैं:
# 1. /?author=1, /?author=2 — author archives
# 2. /wp-json/wp/v2/users — REST API endpoint
# 3. /feed/ — RSS feed में author names
# 4. HTML comments में login names
# 5. /wp-login.php — error messages से

# REST API से यूज़र्स (अगर disable नहीं है):
curl http://target.com/wp-json/wp/v2/users

# मिले यूज़र्स के साथ brute force:
wpscan --url http://target.com --passwords wordlist.txt --usernames admin,editor,author

# यूज़रनेम फाइल से:
wpscan --url http://target.com --passwords pass.txt --usernames users.txt

# enumerate और brute force एक साथ:
wpscan --url http://target.com --enumerate u --passwords pass.txt --usernames admin`}
      />

      <h2>Plugin and Theme Enumeration</h2>
      <p>
        WordPress plugins और themes सबसे बड़ा vulnerability source हैं। 60,000+ free plugins WordPress repository में हैं और बहुत सारे regularly update नहीं होते। WPScan passive (HTML source) और aggressive (directory probing) दोनों methods से plugins detect करता है।
      </p>
      <CodeBlock
        title="प्लगइन्स और थीम्स"
        code={`# सभी प्लगइन्स:
wpscan --url http://target.com --enumerate p

# सिर्फ vulnerable प्लगइन्स:
wpscan --url http://target.com --enumerate vp

# popular प्लगइन्स (aggressive detection):
wpscan --url http://target.com --enumerate ap --plugins-detection aggressive

# सभी थीम्स:
wpscan --url http://target.com --enumerate t

# vulnerable थीम्स:
wpscan --url http://target.com --enumerate vt

# प्लगइन + थीम + यूज़र — सब एक साथ:
wpscan --url http://target.com --enumerate vp,vt,u

# सबसे aggressive स्कैन:
wpscan --url http://target.com --enumerate ap,at,u --plugins-detection aggressive --detection-mode aggressive

# Plugin detection methods:
# passive — HTML source में /wp-content/plugins/ search
# aggressive — common plugin paths check करता है
# mixed — दोनों methods combine`}
      />

      <h2>Password Brute Force</h2>
      <p>
        WPScan brute force attack भी कर सकता है। wp-login.php और XML-RPC दोनों endpoints पर attack करता है। XML-RPC multicall से एक request में multiple passwords try कर सकता है — यह बहुत fast technique है लेकिन कुछ sites पर XML-RPC disabled होता है।
      </p>
      <CodeBlock
        title="पासवर्ड ब्रूट फोर्स"
        code={`# सिंगल यूज़र brute force:
wpscan --url http://target.com --passwords /usr/share/wordlists/rockyou.txt --usernames admin

# मल्टिपल यूज़र्स:
wpscan --url http://target.com --passwords wordlist.txt --usernames admin,editor,author

# यूज़रनेम फाइल से:
wpscan --url http://target.com --passwords pass.txt --usernames users.txt

# XML-RPC से (ज़्यादा तेज़ — multicall):
wpscan --url http://target.com --passwords pass.txt --usernames admin --password-attack xmlrpc

# wp-login.php से:
wpscan --url http://target.com --passwords pass.txt --usernames admin --password-attack wp-login

# थ्रॉटलिंग (lockout से बचें):
wpscan --url http://target.com --passwords pass.txt --usernames admin --password-attack wp-login --throttle 2000

# मल्टिपल थ्रेड्स:
wpscan --url http://target.com --passwords pass.txt --usernames admin --max-threads 5

# XML-RPC multicall (एक request में कई passwords):
# यह बहुत तेज़ है लेकिन कुछ sites पर block हो सकता है
wpscan --url http://target.com --passwords pass.txt --usernames admin --password-attack xmlrpc`}
      />

      <h2>API Token Setup</h2>
      <p>
        WPScan API key बहुत ज़रूरी है — बिना key के vulnerability data limited मिलता है। API key free है और wpscan.com पर register करके मिलती है। Paid plan में unlimited requests, priority support, और extra features मिलते हैं।
      </p>
      <CodeBlock
        title="API Key सेटअप"
        code={`# स्टेप 1: wpscan.com पर अकाउंट बनाओ (फ्री)
# https://wpscan.com/register

# स्टेप 2: API key कॉपी करो (Dashboard में मिलेगी)

# स्टेप 3: कमांड में यूज़ करो:
wpscan --url http://target.com --api-token YOUR_API_KEY

# या एनवायरनमेंट वेरिएबल सेट करो:
export WPSCAN_API_TOKEN=YOUR_API_KEY
wpscan --url http://target.com

# या कॉन्फ़िग फाइल में सेट करो:
# ~/.wpscan/scan.yml में:
# api_token: YOUR_API_KEY

# फ्री प्लान: 25 requests/day
# पेड प्लान: unlimited requests
# पेड प्लान: priority support, extra features

# API key बिना भी काम करता है लेकिन:
# - CVE numbers नहीं मिलेंगे
# - vulnerability details limited होंगे
# - कुछ checks skip होंगे
# - fix versions नहीं मिलेंगे`}
      />

      <h2>XML-RPC Exploitation</h2>
      <p>
        XML-RPC WordPress का legacy API endpoint है जो brute force के लिए बहुत dangerous है। इसमें system.multicall method से एक request में hundreds of passwords try कर सकते हो। यह wp-login.php से कहीं ज़्यादा fast है।
      </p>
      <CodeBlock
        title="XML-RPC Attacks"
        code={`# XML-RPC endpoint check:
curl -X POST http://target.com/xmlrpc.php \\
  -H "Content-Type: text/xml" \\
  -d '<?xml version="1.0"?>
<methodCall>
  <methodName>system.listMethods</methodName>
</methodCall>'

# XML-RPC multicall brute force:
# एक request में कई passwords:
<?xml version="1.0"?>
<methodCall>
  <methodName>system.multicall</methodName>
  <params><param><value><array><data>
    <value><struct>
      <member><name>methodName</name><value><string>wp.getUsersBlogs</string></value></member>
      <member><name>params</name><value><array><data>
        <value><string>admin</string></value>
        <value><string>password1</string></value>
      </data></array></value></member>
    </struct></value>
    <value><struct>
      <member><name>methodName</name><value><string>wp.getUsersBlogs</string></value></member>
      <member><name>params</name><value><array><data>
        <value><string>admin</string></value>
        <value><string>password2</string></value>
      </data></array></value></member>
    </struct></value>
  </data></array></value></param></params>
</methodCall>

# WPScan XML-RPC attack:
wpscan --url http://target.com --passwords pass.txt --usernames admin --password-attack xmlrpc

# XML-RPC pingback DDoS:
# अगर pingback enabled है तो DDoS vector भी है
# यह amplification attack कर सकता है`}
      />

      <h2>Misconfiguration Detection</h2>
      <p>
        WPScan सिर्फ vulnerabilities नहीं, बल्कि misconfigurations भी detect करता है — ये बहुत common हैं और often ignored होती हैं:
      </p>
      <CodeBlock
        title="Misconfiguration Checks"
        code={`# WPScan यह सब check करता है:
# 1. WordPress debug mode enabled?
# 2. Directory listing enabled?
# 3. XML-RPC enabled?
# 4. wp-login.php exposed?
# 5. wp-json/wp/v2/users accessible?
# 6. Backup files exposed?
# 7. Default admin user exists?
# 8. Weak passwords?
# 9. Outdated WordPress version?
# 10. Insecure plugins installed?
# 11. wp-config.php.bak exposed?
# 12. readme.html exposing version?
# 13. /wp-content/uploads/ directory listing?

# Example output:
# [i] WordPress version: 6.4.2 (outdated)
# [!] XML-RPC seems to be enabled: http://target.com/xmlrpc.php
# [!] Upload directory has listing enabled: http://target.com/wp-content/uploads/
# [!] Default username "admin" found
# [!] Backup file found: http://target.com/wp-config.php.bak`}
      />

      <h2>WPScan vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">WPScan</th>
              <th className="text-left py-2 px-3 text-neon-green">Nikto</th>
              <th className="text-left py-2 px-3 text-neon-green">Droopescan</th>
              <th className="text-left py-2 px-3 text-neon-green">Nmap</th>
              <th className="text-left py-2 px-3 text-neon-green">Nuclei</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">फोकस</td><td className="py-2 px-3">WordPress only</td><td className="py-2 px-3">जनरल वेब</td><td className="py-2 px-3">Drupal/WordPress</td><td className="py-2 px-3">जनरल</td><td className="py-2 px-3">टेम्पलेट-बेस्ड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Vuln DB</td><td className="py-2 px-3">50,000+ WP vulns</td><td className="py-2 px-3">जनरल</td><td className="py-2 px-3">लिमिटेड</td><td className="py-2 px-3">NSE scripts</td><td className="py-2 px-3">8000+ templates</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Plugin Scan</td><td className="py-2 px-3">बेस्ट</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">लिमिटेड</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Brute Force</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">CVE Data</td><td className="py-2 px-3">API से</td><td className="py-2 px-3">लिमिटेड</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">NSE से</td><td className="py-2 px-3">टेम्पलेट में</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्पीड</td><td className="py-2 px-3">तेज़ (WP-specific)</td><td className="py-2 px-3">स्लो</td><td className="py-2 px-3">मीडियम</td><td className="py-2 px-3">तेज़</td><td className="py-2 px-3">बहुत तेज़</td></tr>
            <tr><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3">आसान</td><td className="py-2 px-3">आसान</td><td className="py-2 px-3">मीडियम</td><td className="py-2 px-3">मीडियम</td><td className="py-2 px-3">आसान</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'SSL certificate error आ रहा है', a: '--disable-tls-checks फ्लैग यूज़ करो। Self-signed certificates वाली sites पर यह common है। Example: wpscan --url https://target.com --disable-tls-checks' },
          { q: 'Brute force में "login blocked" आ रहा है', a: 'Rate limiting लगा है। --throttle 2000 से धीमा करो। या --password-attack xmlrpc try करो — कुछ sites पर XML-RPC faster है। Limit Login Attempts plugin installed हो तो IP change करो।' },
          { q: 'API key काम नहीं कर रहा', a: 'Key regenerate करो wpscan.com पर। Free plan की limit (25/day) चेक करो। Key में spaces नहीं होने चाहिए। Environment variable correctly set है verify करो।' },
          { q: 'No vulnerabilities found पर site vulnerable है', a: 'API key बिना limited data मिलता है। --plugins-detection aggressive try करो। Custom plugins WPScan DB में नहीं होंगे — manually check करो। Nuclei भी try करो WordPress templates के साथ।' },
          { q: 'Scan बहुत स्लो है', a: '--stealthy mode हटाओ। --max-threads बढ़ाओ (default 5)। सिर्फ ज़रूरी enumeration options यूज़ करो — सब enumerate मत करो। Network connection check करो।' },
          { q: 'Connection refused / timeout आ रहा है', a: 'Target site down है या WAF block कर रहा है। --proxy या --random-user-agent try करो। --request-timeout बढ़ाओ। --connect-timeout भी बढ़ाओ।' },
          { q: 'XML-RPC error आ रहा है', a: 'XML-RPC disabled हो सकता है target site पर। --password-attack wp-login try करो। या site का XML-RPC endpoint manually check करो: curl http://target.com/xmlrpc.php' },
          { q: 'Memory error / crash हो रहा है', a: 'बहुत बड़ी wordlist use कर रहे हो। Smaller wordlist try करो। --max-threads कम करो। Docker से run करो — memory limit set कर सकते हो।' },
          { q: 'Plugins detect नहीं हो रहे', a '--plugins-detection aggressive use करो। API key add करो (free plan)। Custom plugins WPScan DB में नहीं होंगे — manually check करो। Passive mode limited results देता है।' },
          { q: 'Brute force very slow है', a: '--max-threads बढ़ाओ (10+)। XML-RPC multicall use करो (wp-login से faster)। Smaller focused wordlist use करो। --throttle कम करो या हटाओ।' },
          { q: 'WPScan Docker में कैसे run करें?', a: 'docker run -it --rm wpscanteam/wpscan --url http://target.com। Docker memory limit set करो: docker run -m 512m। Network host mode: --network host।' },
          { q: 'WordPress multisite scan कैसे करें?', a: 'WPScan single site scan करता है। Multisite network के लिए har subsite ka URL alag se scan करो। Loop script बनाओ multiple sites के लिए।' },
          { q: 'Custom login page detect नहीं हो रहा', a: '--login-uri /custom-login-path use करो। Plugin-based login URL changes (WPS Hide Login) के लिए manually path find करो। HTML source में login form action URL check करो।' },
          { q: 'REST API users accessible हैं — कैसे block करें?', a: 'functions.php में: remove_action("rest_api_init", "wp_api_user_routes");। या Disable WP REST API plugin use करो। .htaccess से /wp-json/ block कर सकते हो।' },
          { q: 'WPScan network scan कर सकता है?', a: 'नहीं, WPScan WordPress-specific scanner है। Network scan के लिए Nmap use करो। WordPress sites find करने के बाद WPScan run करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        अगर आप WordPress admin हो तो WPScan जैसे टूल्स से बचने के लिए यह करो:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Regular Updates:</strong> सभी plugins, themes, और WordPress core को अपडेट रखो — automatic updates enable करो</li>
        <li><strong className="text-white">XML-RPC Disable:</strong> .htaccess या प्लगइन से disable करो — यह brute force का main vector है</li>
        <li><strong className="text-white">Custom Login URL:</strong> wp-login.php का URL बदलो (WPS Hide Login प्लगइन) — scanner default path check करते हैं</li>
        <li><strong className="text-white">Two-Factor Authentication:</strong> 2FA लगाओ — password leak होने पर भी safe रहोगे</li>
        <li><strong className="text-white">Rate Limiting:</strong> Limit Login Attempts प्लगइन यूज़ करो — brute force slow हो जाएगा</li>
        <li><strong className="text-white">Web Application Firewall:</strong> WAF लगाओ — Sucuri, Wordfence, या Cloudflare — scanner requests block होंगे</li>
        <li><strong className="text-white">Remove Unused Components:</strong> Unused plugins और themes डिलीट करो (सिर्फ deactivate मत करो — files still accessible रहते हैं)</li>
        <li><strong className="text-white">Disable REST API Users:</strong> wp-json/wp/v2/users endpoint disable करो — user enumeration रुकेगा</li>
        <li><strong className="text-white">Security Headers:</strong> X-Frame-Options, CSP, X-Content-Type-Options लगाओ</li>
        <li><strong className="text-white">Self-Scanning:</strong> WPScan से खुद स्कैन करो — अपनी site की vulnerability पहले पता करो</li>
        <li><strong className="text-white">File Permissions:</strong> wp-config.php को 400/440 permissions दो — directory listing disable करो</li>
        <li><strong className="text-white">Database Prefix:</strong> Default wp_ prefix बदलो — SQL injection attacks harder होंगे</li>
        <li><strong className="text-white">Disable File Editing:</strong> wp-config.php में define('DISALLOW_FILE_EDIT', true) add करो</li>
        <li><strong className="text-white">Monitoring:</strong> Wordfence या Sucuri से real-time monitoring लगाओ — suspicious activity detect होगी</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        WordPress security testing सीखने के लिए अपना लैब बनाओ:
      </p>
      <CodeBlock
        title="WordPress लैब सेटअप"
        code={`# Docker से WordPress लैब:
docker run -d -p 8080:80 --name wordpress wordpress:latest

# Docker Compose (WordPress + MySQL):
# docker-compose.yml:
# version: '3'
# services:
#   db:
#     image: mysql:5.7
#     environment:
#       MYSQL_ROOT_PASSWORD: rootpass
#       MYSQL_DATABASE: wordpress
#   wordpress:
#     image: wordpress:latest
#     ports:
#       - "8080:80"
#     environment:
#       WORDPRESS_DB_HOST: db
#       WORDPRESS_DB_USER: root
#       WORDPRESS_DB_PASSWORD: rootpass

# XAMPP/MAMP से:
# WordPress download करो wordpress.org से
# htdocs में extract करो
# localhost/wordpress पर install करो

# पुराने plugins install करो (vulnerable versions):
# wordpress.org पर plugin search करो
# Advanced View → Previous Versions से पुराना version डाउनलोड करो

# WPScan से अपने लैब को स्कैन करो:
wpscan --url http://localhost:8080 --enumerate ap,at,u

# Practice targets:
# - WPScan test site
# - WordPress with vulnerable plugins
# - Custom WordPress installations`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        WPScan को scripts में integrate करके automated security audits कर सकते हो। JSON output से results parse करना आसान होता है।
      </p>
      <CodeBlock
        title="Automation Scripts"
        code={`#!/bin/bash
# WordPress audit script — multiple sites scan

API_KEY="your_api_key_here"
SITES_FILE="sites.txt"
OUTPUT_DIR="wpscan_results"

mkdir -p "$OUTPUT_DIR"

while IFS= read -r site; do
    echo "[+] Scanning: $site"

    # JSON output में scan:
    wpscan --url "$site" \\
      --api-token "$API_KEY" \\
      --enumerate vp,vt,u \\
      --random-user-agent \\
      --disable-tls-checks \\
      -f json \\
      -o "$OUTPUT_DIR/$(echo $site | sed 's/[^a-zA-Z0-9]/_/g').json" \\
      2>&1 | tee "$OUTPUT_DIR/$(echo $site | sed 's/[^a-zA-Z0-9]/_/g').log"

    # Rate limiting:
    sleep 30
done < "$SITES_FILE"

echo "[+] Results saved in $OUTPUT_DIR/"`}
      />

      <CodeBlock
        title="JSON Results Parser"
        code={`#!/bin/bash
# WPScan JSON results से vulnerabilities extract करो

for json_file in wpscan_results/*.json; do
    site=$(basename "$json_file" .json)
    echo "[+] Vulnerabilities for: $site"

    # jq से vulnerabilities extract:
    jq -r '.vulnerabilities[]? | "\\(.title) — Fixed in: \\(.fixed_in // "N/A")"' "$json_file"

    # Plugin vulnerabilities:
    jq -r '.plugins | to_entries[] | select(.value.vulnerabilities) | "\\(.key): \\(.value.vulnerabilities | length) vulns"' "$json_file"

    echo "---"
done`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड WPScan"
        code={`# प्रॉक्सी के साथ (Burp Suite में traffic देखो):
wpscan --url http://target.com --proxy http://127.0.0.1:8080

# कस्टम headers:
wpscan --url http://target.com --headers "Authorization: Bearer token"

# User-Agent randomize:
wpscan --url http://target.com --random-user-agent

# Detection mode aggressive:
wpscan --url http://target.com --detection-mode aggressive

# Custom wordlist + usernames file:
wpscan --url http://target.com --passwords /usr/share/wordlists/rockyou.txt --usernames users.txt

# कस्टम wp-login URL:
wpscan --url http://target.com --login-uri /custom-login

# XML-RPC multicall (एक request में कई पासवर्ड्स):
wpscan --url http://target.com --passwords pass.txt --usernames admin --password-attack xmlrpc

# Force update check:
wpscan --url http://target.com --force

# No banner:
wpscan --url http://target.com --no-banner

# Multiple URLs scan (script):
for url in $(cat urls.txt); do
  wpscan --url "$url" --api-token "$API_KEY" -f json -o "scan_$(echo $url | md5sum | cut -d' ' -f1).json"
  sleep 30
done`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या WPScan फ्री है?', a: 'हाँ, टूल फ्री है। API key भी फ्री है (25 requests/day)। Paid plan में unlimited requests और extra features मिलते हैं — priority support, detailed reports, team collaboration।' },
          { q: 'API key क्यों ज़रूरी है?', a: 'बिना key के vulnerability data limited मिलता है। CVE numbers, fix versions, और detailed references key से ही मिलते हैं। Free plan sufficient है individual testing के लिए।' },
          { q: 'Brute force से WordPress lock हो जाएगा?', a: 'हो सकता है। --throttle 2000+ यूज़ करो। Limit Login Attempts प्लगइन installed हो तो careful रहो। XML-RPC attack try करो — कुछ sites पर lockout नहीं होता।' },
          { q: 'Non-WordPress site पर काम करेगा?', a: 'नहीं, WPScan सिर्फ WordPress के लिए है। Non-WordPress sites के लिए Nikto, Nuclei, या Nmap यूज़ करो। Drupal sites के लिए Droopescan try करो।' },
          { q: 'क्या WPScan WAF bypass कर सकता है?', a: 'नहीं, WPScan scanner है WAF bypasser नहीं। WAF हो तो --random-user-agent, --proxy, और --throttle try करो। IP rotation भी help करता है।' },
          { q: 'कितना समय लगता है?', a: 'Basic scan 2-5 min। Aggressive enumeration 10-30 min। Brute force — wordlist size पर depend करता है। rockyou.txt (14M passwords) लंबा time लेगा।' },
          { q: 'क्या WPScan automated CI/CD में use कर सकते हैं?', a: 'हाँ! JSON output (-f json) से results parse कर सकते हो। Exit codes check करो — 0 = clean, non-0 = vulnerabilities found। GitHub Actions में integrate कर सकते हो।' },
          { q: 'WordPress version detect नहीं हो रहा', a: 'Site ने version hide किया है। --wp-version-detection aggressive try करो। readme.html, feed, और CSS/JS files से version detect होता है।' },
          { q: 'WPScan को update कैसे करें?', a: 'apt install wpscan (system package) ya gem update wpscan (Ruby gem)। Latest version में new vulnerability checks और bug fixes होते हैं। --version से current version check करो।' },
          { q: 'Custom plugins की vulnerability कैसे check करें?', a: 'WPScan DB में सिर्फ popular plugins हैं। Custom plugins के लिए manual code review करो। Nuclei custom templates बनाओ। Plugin source code में SQL queries, file uploads, और user input sanitize check करो।' },
          { q: 'WPScan CI/CD pipeline में कैसे integrate करें?', a: 'JSON output (-f json) use करो। Exit codes: 0 = clean, non-0 = vulnerabilities। GitHub Actions, GitLab CI, Jenkins में script step add करो। Fail build on critical vulnerabilities।' },
          { q: 'Multisite WordPress network scan कैसे करें?', a: 'WPScan single site scan करता है। Multisite network के लिए har subsite ka URL alag se scan करो। --wp-target flag से specific blog target कर सकते हो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        Case Study 1 — E-commerce Website: एक penetration tester को Indian e-commerce site का WordPress security audit करना था। WPScan से scan किया तो पता चला कि WordPress 5.2 version outdated था जिसमें known XSS vulnerability थी। साथ ही एक popular slider plugin version 2.1 install था जिसमें SQL injection vulnerability थी (CVE-2023-12345)। WPScan API से detailed report मिली और fix versions पता चले। Responsible disclosure के बाद company ने सब update किया। यह case study बताता है कि outdated plugins कितने dangerous हो सकते हैं।
      </p>
      <p>
        Case Study 2 — Blog Website: एक Indian blogger की site hack हो गई थी। WPScan से investigation में पता चला कि XML-RPC enabled था और default "admin" username exist करता था। Attacker ने XML-RPC multicall से brute force करके password crack किया था। WPScan ने 5 minutes में सब detect कर दिया — XML-RPC enabled, admin user exists, weak password policy। Fix: XML-RPC disable, username change, strong password, 2FA enable।
      </p>
      <p>
        Case Study 3 — Government Portal: एक authorized security audit में government WordPress site scan किया। WPScan ने 12 vulnerable plugins detect किए — 3 critical, 5 medium, 4 low severity। साथ ही directory listing enabled था (/wp-content/uploads/), readme.html version expose कर रहा था, और REST API से user enumeration possible था। JSON report generate करके development team को दिया — 2 weeks में सब fix हुआ। यह case study shows कि WPScan comprehensive audit tool है।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        WPScan को दूसरे security tools के साथ combine करके complete WordPress security assessment कर सकते हो:
      </p>
      <CodeBlock
        title="WPScan + Nuclei Combo"
        code={`# Step 1: WPScan से enumerate करो:
wpscan --url http://target.com --enumerate vp,vt,u -f json -o wpscan.json

# Step 2: Nuclei से WordPress templates scan करो:
nuclei -u http://target.com -t wordpress/ -o nuclei_wp.txt

# Step 3: Nuclei के generic WordPress templates:
nuclei -u http://target.com -t technologies/wordpress/ -o nuclei_tech.txt

# Step 4: Results combine करो:
cat wpscan.json nuclei_wp.txt nuclei_tech.txt > full_report.txt

# WPScan + Nmap WordPress scripts:
nmap -p 80,443 --script http-wordpress-enum target.com
nmap -p 80,443 --script http-wordpress-brute target.com

# WPScan + Nikto combo:
wpscan --url http://target.com -f json -o wpscan.json
nikto -h http://target.com -o nikto.txt`}
      />
      <CodeBlock
        title="WPScan + Burp Suite Integration"
        code={`# WPScan traffic Burp में भेजो:
wpscan --url http://target.com --proxy http://127.0.0.1:8080

# Burp में intercept करके analyze करो:
# 1. WPScan requests देखो
# 2. Custom headers modify करो
# 3. Authentication tokens test करो
# 4. Parameter manipulation try करो

# WPScan + ffuf (custom path discovery):
wpscan --url http://target.com --enumerate ap -f json -o plugins.json
# मिले plugins के paths पर ffuf run करो:
ffuf -u http://target.com/wp-content/plugins/FUZZ/ -w wordlist.txt`}
      />

      <h2>Performance Tuning</h2>
      <p>
        WPScan को fast और efficient बनाने के tips:
      </p>
      <CodeBlock
        title="Optimization Techniques"
        code={`# 1. सिर्फ ज़रूरी enumeration options use करो:
# Slow: --enumerate ap,at,u,cb,m (सब कुछ)
# Fast: --enumerate vp,vt,u (सिर्फ vulnerable + users)

# 2. Thread count adjust करो:
wpscan --url http://target.com --max-threads 10
# Default 5 है — network speed पर depend करता है

# 3. Detection mode set करो:
wpscan --url http://target.com --detection-mode passive  # सबसे तेज़
wpscan --url http://target.com --detection-mode mixed    # balanced
wpscan --url http://target.com --detection-mode aggressive  # सबसे slow but thorough

# 4. API key use करो (bina key slow है):
wpscan --url http://target.com --api-token YOUR_KEY

# 5. Cache use करो:
# WPScan results cache करता है — same target repeat scan faster होता है

# 6. Network optimization:
# - Stable connection use करो
# - Proxy avoid करो अगर ज़रूरी नहीं
# - Local DNS resolution fast होना चाहिए

# 7. Stealthy mode (WAF bypass):
wpscan --url http://target.com --stealthy --throttle 3000 --random-user-agent

# 8. Targeted scan (specific plugin):
wpscan --url http://target.com --enumerate p --plugins-detection mixed`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        WPScan results को properly analyze और report करना ज़रूरी है:
      </p>
      <CodeBlock
        title="Report Generation"
        code={`# JSON output (structured data):
wpscan --url http://target.com --api-token KEY -f json -o report.json

# jq से vulnerabilities extract:
cat report.json | jq '.vulnerabilities[] | {title, fixed_in, references}'

# Plugin vulnerabilities count:
cat report.json | jq '[.plugins[].vulnerabilities[]] | length'

# Critical vulnerabilities filter:
cat report.json | jq '.vulnerabilities[] | select(.references.severity == "critical")'

# HTML report (WPScan built-in):
wpscan --url http://target.com -f json -o scan.json
# JSON से HTML report बनाने के लिए custom script use करो

# Text report:
wpscan --url http://target.com -o report.txt
cat report.txt | grep -i "\\[!\\]" > vulnerabilities.txt
cat report.txt | grep -i "\\[i\\]" > info.txt

# Executive summary generate:
echo "=== WPScan Security Report ===" > exec_summary.txt
echo "Target: http://target.com" >> exec_summary.txt
echo "Date: $(date)" >> exec_summary.txt
echo "Vulnerabilities Found: $(grep -c '!' report.txt)" >> exec_summary.txt
echo "Plugins Detected: $(grep -c 'plugin' report.txt)" >> exec_summary.txt`}
      />

      <h2>WP-CLI Security Audit</h2>
      <p>
        WP-CLI WordPress का command-line interface है जो WPScan के साथ combine करके powerful security audit workflow बना सकते हो। WP-CLI से plugins update, users manage, और configurations check कर सकते हो — सब command line से।
      </p>
      <CodeBlock
        title="WP-CLI + WPScan Combined Audit"
        code={`# WP-CLI install करो:
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp

# WordPress root directory में जाओ:
cd /var/www/html/wordpress

# Outdated plugins list करो:
wp plugin list --update=available --format=table

# Outdated themes:
wp theme list --update=available --format=table

# WordPress core version check:
wp core version

# Users list (admin check):
wp user list --role=administrator --format=table

# WP-CLI + WPScan combo script:
WP_PATH="/var/www/html/wordpress"
WP_URL="http://target.com"
cd $WP_PATH
wp plugin list --update=available > outdated_plugins.txt
wpscan --url $WP_URL --api-token KEY --enumerate vp,vt,u -f json -o wpscan.json
wp plugin update --all
wp plugin list --update=available`}
      />

      <h2>Automated Security Hardening</h2>
      <p>
        WPScan findings के basis पर automated hardening script run कर सकते हो। यह script common security issues automatically fix करता है:
      </p>
      <CodeBlock
        title="WordPress Hardening Script"
        code={`#!/bin/bash
# WordPress Automated Hardening Script

WP_PATH="/var/www/html/wordpress"
HTACCESS="$WP_PATH/.htaccess"
WPCONFIG="$WP_PATH/wp-config.php"

echo "[*] WordPress Hardening Script Starting..."

# 1. XML-RPC disable करो
echo "[+] Disabling XML-RPC..."
cat >> "$HTACCESS" << 'EOF'
<Files xmlrpc.php>
Order Deny,Allow
Deny from all
</Files>
EOF

# 2. File editing disable करो
echo "[+] Disabling file editing..."
sed -i "/\\/\\* That's all/i define('DISALLOW_FILE_EDIT', true);" "$WPCONFIG"

# 3. Security headers add करो
echo "[+] Adding security headers..."
cat >> "$HTACCESS" << 'EOF'
<IfModule mod_headers.c>
Header set X-Frame-Options "SAMEORIGIN"
Header set X-Content-Type-Options "nosniff"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
EOF

# 4. Directory listing disable
echo "Options -Indexes" >> "$HTACCESS"

# 5. wp-config.php permissions tighten
chmod 400 "$WPCONFIG"

# 6. REST API user enumeration block
cat >> "$HTACCESS" << 'EOF'
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{QUERY_STRING} rest_route=/wp/v2/users [NC]
RewriteRule .* - [F,L]
</IfModule>
EOF

echo "[*] Hardening complete! Run WPScan again to verify."`}
      />

      <h2>Vulnerability Patching Workflow</h2>
      <p>
        WPScan vulnerabilities report करने के बाद systematic patching workflow follow करो:
      </p>
      <CodeBlock
        title="Patching Workflow"
        code={`#!/bin/bash
# WordPress Vulnerability Patching Workflow

WP_PATH="/var/www/html/wordpress"
WP_URL="http://target.com"
API_KEY="your_api_key"
BACKUP_DIR="/backups/wordpress_$(date +%Y%m%d)"

# Step 1: Full WPScan
wpscan --url $WP_URL --api-token $API_KEY --enumerate vp,vt,u -f json -o /tmp/wpscan_full.json

# Step 2: Extract critical vulnerabilities
jq '.vulnerabilities[] | select(.severity == "critical") | .title' /tmp/wpscan_full.json

# Step 3: Backup before patching
mkdir -p $BACKUP_DIR
cd $WP_PATH
wp db export $BACKUP_DIR/database.sql
tar -czf $BACKUP_DIR/files.tar.gz .

# Step 4: Update vulnerable plugins
VULN_PLUGINS=$(jq -r '.plugins | to_entries[] | select(.value.vulnerabilities) | .key' /tmp/wpscan_full.json)
for plugin in $VULN_PLUGINS; do
    echo "[+] Updating: $plugin"
    wp plugin update "$plugin"
done

# Step 5: WordPress core update
wp core update
wp core update-db

# Step 6: Re-scan to verify
wpscan --url $WP_URL --api-token $API_KEY --enumerate vp,vt -f json -o /tmp/wpscan_verify.json
REMAINING=$(jq '.vulnerabilities | length' /tmp/wpscan_verify.json)
echo "[*] Remaining vulnerabilities: $REMAINING"`}
      />

      <h2>Security Monitoring Setup</h2>
      <p>
        WordPress site को continuously monitor करने के लिए automated scanning schedule बनाओ:
      </p>
      <CodeBlock
        title="Continuous Monitoring"
        code={`#!/bin/bash
# WordPress Security Monitoring Script

WP_URL="http://target.com"
API_KEY="your_api_key"
REPORT_DIR="/var/log/wpscan_monitor"
KNOWN_VULNS="$REPORT_DIR/known_vulns.txt"

mkdir -p "$REPORT_DIR"

# Current scan
wpscan --url $WP_URL --api-token $API_KEY --enumerate vp,vt -f json -o "$REPORT_DIR/scan_$(date +%Y%m%d).json"

# Extract current vulnerabilities
jq -r '.vulnerabilities[] | .title' "$REPORT_DIR/scan_$(date +%Y%m%d).json" | sort > "$REPORT_DIR/current_vulns.txt"

# Compare with known vulnerabilities
if [ -f "$KNOWN_VULNS" ]; then
    NEW_VULNS=$(comm -13 "$KNOWN_VULNS" "$REPORT_DIR/current_vulns.txt")
    if [ -n "$NEW_VULNS" ]; then
        echo "[!] NEW VULNERABILITIES DETECTED!"
        echo "$NEW_VULNS"
        # Email/Slack alert यहाँ add करो
    fi
fi

# Update known vulnerabilities
cp "$REPORT_DIR/current_vulns.txt" "$KNOWN_VULNS"

# Cron job setup (daily 2 AM):
# crontab -e
# 0 2 * * * /opt/scripts/wp_monitor.sh`}
      />

      <h2>WordPress Security Hardening Checklist</h2>
      <p>
        WPScan से vulnerabilities find करने के बाद यह checklist follow करके WordPress secure करो:
      </p>
      <CodeBlock
        title="Complete Hardening Script"
        code={`# 1. Core Update:
wp core update --allow-root
wp core update-db --allow-root

# 2. Plugin Updates:
wp plugin update --all --allow-root

# 3. Theme Updates:
wp theme update --all --allow-root

# 4. Remove unused themes:
wp theme delete inactive-theme --allow-root

# 5. Remove unused plugins:
wp plugin deactivate unused-plugin --allow-root
wp plugin delete unused-plugin --allow-root

# 6. Disable file editing:
wp config set DISALLOW_FILE_EDIT true --allow-root

# 7. Change database prefix:
wp search-replace 'wp_' 'newprefix_' --all-tables --allow-root

# 8. Disable XML-RPC:
wp option update xmlrpc_methods '[]' --allow-root

# 9. Set strong passwords:
wp user update 1 --user_pass="StrongP@ss123!" --allow-root

# 10. Disable REST API user enumeration:
wp config set disable_wp_json_users true --raw --allow-root

# 11. Security headers in .htaccess:
# Header set X-Frame-Options "SAMEORIGIN"
# Header set X-Content-Type-Options "nosniff"
# Header set X-XSS-Protection "1; mode=block"
# Header set Referrer-Policy "strict-origin-when-cross-origin"

# 12. File permissions:
# chmod 644 wp-config.php
# chmod 755 wp-content/
# chmod 600 .htaccess`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nikto</td><td className="py-2 px-3">जनरल वेब स्कैनर</td><td className="py-2 px-3">4000+ vulnerabilities check</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nuclei</td><td className="py-2 px-3">टेम्पलेट-बेस्ड स्कैनर</td><td className="py-2 px-3">WordPress templates available</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Droopescan</td><td className="py-2 px-3">Drupal + WordPress</td><td className="py-2 px-3">CMS fingerprinting</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wordfence</td><td className="py-2 px-3">WP Security Plugin</td><td className="py-2 px-3">रनटाइम प्रोटेक्शन, firewall</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Sucuri</td><td className="py-2 px-3">WAF + Scanner</td><td className="py-2 px-3">क्लाउड-बेस्ड प्रोटेक्शन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Joomscan</td><td className="py-2 px-3">Joomla scanner</td><td className="py-2 px-3">Joomla-specific vulnerabilities</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CMSmap</td><td className="py-2 px-3">Multi-CMS scanner</td><td className="py-2 px-3">WordPress, Joomla, Drupal</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Nmap WordPress scripts</td><td className="py-2 px-3">NSE-based WP detection</td><td className="py-2 px-3">http-wordpress-enum, http-wordpress-brute</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>फ्री API key ज़रूर लो wpscan.com से — बिना key के WPScan अधूरा है</li>
          <li>पहले `--enumerate u` से users ढूंढो, फिर `--enumerate vp,vt` से vulnerable components</li>
          <li>Brute force से पहले `--stealthy` mode try करो — detection risk कम होगा</li>
          <li>XML-RPC attack wp-login से ज़्यादा fast है — पहले यह try करो</li>
          <li>JSON output लो (-f json) — automation के लिए perfect है</li>
          <li>WordPress security audit के लिए WPScan + Nuclei + Nikto combo best है</li>
          <li>Custom login URL sites पर --login-uri flag ज़रूर use करो</li>
          <li>API key free plan की 25/day limit enough है individual testing के लिए</li>
          <li>WPScan + Nuclei + Nikto combo से complete WordPress security audit हो जाता है</li>
          <li>Brute force के लिए rockyou.txt से शुरू करो, फिर custom wordlist try करो</li>
          <li>हमेशा WPScan run करो अपनी site पर production deploy से पहले</li>
          <li>WordPress security hardening: XML-RPC disable, REST API users hide, file editing disable</li>
          <li>WPScan results को JSON में save करो — trending और comparison के लिए useful</li>
          <li>Docker से WPScan run करो clean environment में — dependency issues avoid होंगे</li>
          <li>Regular scanning schedule बनाओ — weekly automated scan best practice है</li>
          <li>WordPress multisite networks पर हर subsite individually scan करो</li>
          <li>WPScan stealthy mode + random user agent + throttle combination WAF bypass में help करता है</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> WPScan एक शक्तिशाली WordPress सिक्योरिटी स्कैनर है। इसका इस्तेमाल केवल अपनी वेबसाइट या अधिकृत पेनेट्रेशन टेस्टिंग में ही करें। बिना अनुमति के vulnerability scanning अवैध है। Brute force attack तो बिल्कुल भी बिना permission मत करो। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत स्कैनिंग अपराध हो सकता है। हमेशा लिखित अनुमति लें।
      </div>
    </TutorialLayout>
  )
}
