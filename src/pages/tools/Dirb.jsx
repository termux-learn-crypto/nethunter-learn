import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Dirb() {
  return (
    <TutorialLayout
      title="dirb"
      subtitle="वेब कंटेंट स्कैनर — हिडन डायरेक्ट्रीज़ और फाइल्स ढूंढता है"
      icon="📁"
      prev={{ to: '/tool/theharvester', label: 'theharvester' }}
      next={{ to: '/tool/arp-scan', label: 'arp-scan' }}
    >
      <h2>What is DIRB?</h2>
      <p>
        DIRB एक शक्तिशाली वेब कंटेंट स्कैनर और डायरेक्ट्री ब्रूट फोर्सर है जो वेबसाइट पर छुपी हुई डायरेक्ट्रीज़, फाइल्स, और स्क्रिप्ट्स को खोजने के लिए डिज़ाइन किया गया है। यह टूल वर्डलिस्ट बेस्ड अटैक तकनीक का इस्तेमाल करता है — हर शब्द को target URL के साथ combine करके HTTP request भेजता है और response analyze करता है। अगर server 200, 301, 302, या 403 status code देता है, तो वो path मौजूद है। DIRB web application penetration testing का सबसे basic और ज़रूरी टूल है।
      </p>
      <p>
        DIRB का architecture multithreaded है — यह multiple HTTP requests simultaneously भेजता है जिससे scanning speed बढ़ जाती है। यह C में लिखा गया है जो इसे extremely lightweight बनाता है — low-end Android devices पर भी smoothly चलता है। Memory footprint बहुत कम है compare to Python-based tools। यह HTTP/1.0 और HTTP/1.1 दोनों protocols support करता है।
      </p>
      <p>
        DIRB को The Dark Raver ने C भाषा में लिखा है। यह बहुत पुराना और tested टूल है — 2000 के दशक से इस्तेमाल हो रहा है। Gobuster, dirsearch, और feroxbuster जैसे नए टूल्स आ गए हैं, लेकिन DIRB अभी भी अपनी reliability और recursive scanning capability के कारण popular है। यह Kali Linux और Nethunter दोनों में pre-installed आता है।
      </p>
      <p>
        DIRB की सबसे बड़ी खासियत यह है कि यह recursive scanning support करता है। जब कोई directory मिलती है, तो DIRB automatically उस directory के अंदर भी scan करता है। इससे deeply nested paths भी मिल जाते हैं जो दूसरे टूल्स miss कर देते हैं। यह बहुत कम resources use करता है — low-end devices पर भी चलता है।
      </p>
      <p>
        Web application penetration testing में directory enumeration सबसे पहला step होता है। Hidden admin panels, backup files, configuration files, debug pages, API endpoints — यह सब DIRB से मिल सकते हैं। कई बार developers sensitive files जैसे .env, .git, database dumps वेबसर्वर पर छोड़ देते हैं। DIRB इन सबको खोज निकालता है।
      </p>
      <p>
        DIRB HTTP और HTTPS दोनों support करता है। यह custom headers, cookies, authentication, और proxy support भी provide करता है। Output को file में save कर सकते हो और silent mode में सिर्फ found paths देख सकते हो। IDS evasion के लिए delay और custom User-Agent भी set कर सकते हो।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> DIRB केवल अपनी वेबसाइट या लिखित अनुमति वाली टेस्टिंग पर ही इस्तेमाल करें। बिना अनुमति के डायरेक्ट्री स्कैनिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत स्कैनिंग अपराध हो सकता है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है।
      </div>

      <h2>History of DIRB</h2>
      <p>
        DIRB का विकास 2000 के दशक की शुरुआत में हुआ जब web application security testing का क्षेत्र अभी विकसित हो रहा था। उस समय Nikto और CGI scanners मौजूद थे, लेकिन dedicated directory brute forcing tool नहीं था। DIRB ने इस gap को fill किया और जल्दी ही penetration testers का favorite tool बन गया।
      </p>
      <p>
        DIRB को The Dark Raver ने C भाषा में लिखा ताकि यह fast और lightweight हो। Python या Ruby tools की तुलना में C में लिखा होने के कारण यह कम memory use करता है और तेज़ी से requests भेजता है। BackTrack Linux (जो बाद में Kali Linux बना) में DIRB शुरू से शामिल था।
      </p>
      <p>
        DIRB का design philosophy simple था — "हर possible path test करो"। Wordlist-based approach बहुत effective निकला। Developers ने recursive scanning implement की जो DIRB की सबसे बड़ी खासियत बनी। जब कोई directory मिलती है, तो automatically उसके अंदर भी scan होता है। यह feature उस समय किसी और tool में नहीं था।
      </p>
      <p>
        2005 में DIRB को major update मिली — file extension scanning (-X flag) add किया गया। इससे .php, .bak, .env जैसे specific file types search करना आसान हो गया। Authentication support भी add किया गया ताकि protected areas भी scan हो सकें। ये features DIRB को और ज़्यादा powerful बना दिया।
      </p>
      <p>
        2010 के बाद Gobuster, dirsearch, feroxbuster जैसे नए tools आए जो Go और Rust में लिखे गए और ज़्यादा fast हैं। लेकिन DIRB अभी भी इस्तेमाल होता है क्योंकि यह simple है, reliable है, और recursive scanning बेहतर करता है। कई experienced penetration testers DIRB को पहले try करते हैं क्योंकि यह decades से tested है। OWASP testing guide में DIRB को recommended tool mention किया गया है।
      </p>

      <h2>How DIRB Works?</h2>
      <p>
        DIRB wordlist-based brute force technique use करता है। यह एक systematic approach है जो हर possible path को test करता है। DIRB का core algorithm बहुत simple लेकिन effective है — wordlist से words लेकर URLs बनाता है, requests भेजता है, और responses analyze करता है।
      </p>
      <p>
        DIRB HTTP response codes analyze करके decide करता है कि कोई path exist करता है या नहीं। 200 OK मतलब resource accessible है। 301/302 मतलब redirect है — follow करना चाहिए। 403 मतलब exists है लेकिन blocked है — यह बहुत interesting finding है। 401 मतलब authentication चाहिए। Content-length भी analyze होता है — custom 404 pages detect करने के लिए।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">वर्डलिस्ट लोड:</strong> पहले wordlist file से सभी words load करता है memory में। हर word एक potential directory या file name है</li>
        <li><strong className="text-white">URL कंस्ट्रक्शन:</strong> हर word को target URL के साथ combine करता है — जैसे http://target.com/word</li>
        <li><strong className="text-white">HTTP रिक्वेस्ट:</strong> हर constructed URL के लिए HTTP GET request भेजता है server को</li>
        <li><strong className="text-white">रिस्पॉन्स एनालिसिस:</strong> Server का response check करता है — status code (200, 301, 302, 403) और content length</li>
        <li><strong className="text-white">फ़ाइल एक्सटेंशन:</strong> -X flag से specific extensions (.php, .html, .bak) भी test करता है</li>
        <li><strong className="text-white">रिकर्सिव स्कैनिंग:</strong> जो directories मिलती हैं, उनके अंदर भी same process repeat करता है</li>
        <li><strong className="text-white">रिजल्ट रिपोर्टिंग:</strong> Found paths को screen पर display करता है और optionally file में save करता है</li>
        <li><strong className="text-white">एरर हैंडलिंग:</strong> Connection errors, timeouts, और redirects को properly handle करता है</li>
      </ul>

      <h2>Installation</h2>
      <p>
        DIRB Kali Linux और Nethunter दोनों में pre-installed आता है। अगर किसी कारण से नहीं है तो आसानी से install कर सकते हो।
      </p>
      <CodeBlock
        title="DIRB Installation"
        code={`# Kali Linux / Nethunter (pre-installed):
dirb

# apt से install:
sudo apt update
sudo apt install dirb

# Source से build (latest version):
git clone https://gitlab.com/kalilinux/packages/dirb.git
cd dirb
./configure
make
sudo make install

# Wordlist location check:
ls /usr/share/wordlists/dirb/

# Default wordlists:
# /usr/share/wordlists/dirb/common.txt — 4600 words
# /usr/share/wordlists/dirb/big.txt — 20000 words
# /usr/share/wordlists/dirb/small.txt — 900 words

# Version check:
dirb | head -5`}
      />

      <h2>Basic Usage</h2>
      <p>
        DIRB का basic usage बहुत simple है — बस target URL दो और यह scan शुरू कर देता है। Default wordlist common.txt use होती है।
      </p>
      <CodeBlock
        title="Basic Directory Scan"
        code={`# Default wordlist से scan:
dirb http://target.com

# Specific wordlist:
dirb http://target.com /usr/share/wordlists/dirb/common.txt

# बड़ी wordlist (deep scan):
dirb http://target.com /usr/share/wordlists/dirb/big.txt

# HTTPS target:
dirb https://target.com

# Specific port:
dirb http://target.com:8080

# Sub-directory scan:
dirb http://target.com/admin/

# Output file में save:
dirb http://target.com -o results.txt

# Silent mode (सिर्फ found paths):
dirb http://target.com -S

# Recursion disable:
dirb http://target.com -r

# Verbose mode:
dirb http://target.com -v`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-X</td><td className="py-2 px-3">File extension specify करें</td><td className="py-2 px-3 font-mono text-xs">-X .php,.html</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-u</td><td className="py-2 px-3">HTTP Basic Auth credentials</td><td className="py-2 px-3 font-mono text-xs">-u admin:pass</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c</td><td className="py-2 px-3">Cookies set करें</td><td className="py-2 px-3 font-mono text-xs">-c "session=abc"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-H</td><td className="py-2 px-3">Custom headers add करें</td><td className="py-2 px-3 font-mono text-xs">-H "Auth: Bearer x"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o</td><td className="py-2 px-3">Output file में save</td><td className="py-2 px-3 font-mono text-xs">-o results.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-S</td><td className="py-2 px-3">Silent mode (सिर्फ found)</td><td className="py-2 px-3 font-mono text-xs">-S</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-z</td><td className="py-2 px-3">Delay (milliseconds में)</td><td className="py-2 px-3 font-mono text-xs">-z 1000</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r</td><td className="py-2 px-3">Recursion disable</td><td className="py-2 px-3 font-mono text-xs">-r</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-a</td><td className="py-2 px-3">Custom User-Agent</td><td className="py-2 px-3 font-mono text-xs">-a "Mozilla/5.0"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">Proxy (host:port)</td><td className="py-2 px-3 font-mono text-xs">-p 127.0.0.1:8080</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-N</td><td className="py-2 px-3">Ignore "Not Found" responses</td><td className="py-2 px-3 font-mono text-xs">-N</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t</td><td className="py-2 px-3">Request timeout (seconds)</td><td className="py-2 px-3 font-mono text-xs">-t 30</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">Verbose mode</td><td className="py-2 px-3 font-mono text-xs">-v</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-V</td><td className="py-2 px-3">Show NOT_FOUND URLs</td><td className="py-2 px-3 font-mono text-xs">-V</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-w</td><td className="py-2 px-3">Don't stop on warning</td><td className="py-2 px-3 font-mono text-xs">-w</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Directory Bruteforce</h2>
      <p>
        Directory bruteforce DIRB का main function है। यह systematically हर possible directory name test करता है।
      </p>
      <CodeBlock
        title="Directory Bruteforce Techniques"
        code={`# Basic directory scan:
dirb http://target.com /usr/share/wordlists/dirb/common.txt

# Big wordlist (ज़्यादा directories):
dirb http://target.com /usr/share/wordlists/dirb/big.txt

# Custom wordlist:
dirb http://target.com /path/to/custom_wordlist.txt

# Specific sub-directory:
dirb http://target.com/admin/ /usr/share/wordlists/dirb/common.txt

# Multiple base paths:
dirb http://target.com/admin/
dirb http://target.com/api/
dirb http://target.com/assets/
dirb http://target.com/config/
dirb http://target.com/backup/

# Recursion depth control:
# DIRB automatically recurse करता है जो directories मिलती हैं
# -r flag से recursion disable कर सकते हो

# Found directories के अंदर scan:
# अगर /admin/ मिला, तो DIRB automatically /admin/login, /admin/config etc. try करेगा`}
      />

      <h2>File Extension Scanning</h2>
      <p>
        -X flag से specific file extensions search कर सकते हो। यह बहुत useful है backup files, config files, और source code खोजने के लिए।
      </p>
      <CodeBlock
        title="Extension-based Scanning"
        code={`# PHP files:
dirb http://target.com -X .php

# Multiple extensions:
dirb http://target.com -X .php,.html,.txt,.js,.css

# Backup files:
dirb http://target.com -X .bak,.old,.backup,.save,.swp

# Config files:
dirb http://target.com -X .conf,.config,.env,.json,.xml,.yml

# Source code:
dirb http://target.com -X .py,.rb,.java,.cs,.go

# Database files:
dirb http://target.com -X .sql,.db,.sqlite,.mdb

# Archive files:
dirb http://target.com -X .zip,.tar,.gz,.rar,.7z

# ASP/ASPX files:
dirb http://target.com -X .asp,.aspx,.ashx,.asmx

# Combined with wordlist:
dirb http://target.com /usr/share/wordlists/dirb/common.txt -X .php,.html,.bak`}
      />

      <h2>Subdomain Discovery</h2>
      <p>
        DIRB subdomain discovery के लिए directly design नहीं है, लेकिन subdomain wordlist use करके subdomains खोज सकते हो।
      </p>
      <CodeBlock
        title="Subdomain Enumeration"
        code={`# Subdomain wordlist से scan:
# पहले subdomain wordlist बनाओ या download करो

# Common subdomain names:
# admin, mail, ftp, www, test, dev, staging, api, blog, shop

# DNS resolution check करो:
for sub in admin mail ftp www test dev staging api blog shop; do
  host $sub.target.com
done

# DIRB से subdomain scan (virtual hosts):
dirb http://target.com /usr/share/wordlists/dirb/common.txt -H "Host: FUZZ.target.com"

# या dedicated tool use करो:
# dnsenum, amass, subfinder, knockpy`}
      />

      <h2>Custom Wordlists</h2>
      <p>
        Custom wordlist बनाना बहुत ज़रूरी है — generic wordlists से सब कुछ नहीं मिलता। Target-specific wordlist बेहतर results देती है।
      </p>
      <CodeBlock
        title="Wordlist Management"
        code={`# SecLists से wordlists:
sudo apt install seclists
ls /usr/share/seclists/Discovery/Web-Content/

# Popular wordlists:
# /usr/share/seclists/Discovery/Web-Content/common.txt
# /usr/share/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt
# /usr/share/seclists/Discovery/Web-Content/raft-small-directories.txt
# /usr/share/seclists/Discovery/Web-Content/raft-large-files.txt

# CeWL से custom wordlist (target website से):
cewl http://target.com -w custom_wordlist.txt

# Custom wordlist बनाओ:
echo -e "admin\\nlogin\\nbackup\\nconfig\\ndebug\\ntest\\napi\\ndb" > custom.txt

# Wordlists merge करो:
cat wordlist1.txt wordlist2.txt | sort -u > merged.txt

# Wordlist filter (specific pattern):
grep "admin" /usr/share/wordlists/dirb/big.txt > admin_paths.txt

# Rockyou (general password list):
# /usr/share/wordlists/rockyou.txt — passwords के लिए
# directory brute force के लिए नहीं`}
      />

      <h2>Recursive Scanning</h2>
      <p>
        DIRB की सबसे बड़ी खासियत recursive scanning है। जब कोई directory मिलती है, तो उसके अंदर भी scan होता है।
      </p>
      <CodeBlock
        title="Recursive Scanning"
        code={`# Recursive scan (default behavior):
dirb http://target.com

# यह कैसे काम करता है:
# 1. /admin/ मिला → DIRB /admin/login, /admin/config try करता है
# 2. /admin/backup/ मिला → उसके अंदर भी scan
# 3. यह process तब तक चलता है जब तक नई directories मिलती रहें

# Recursion disable (सिर्फ top-level):
dirb http://target.com -r

# Deep recursive scan (big wordlist):
dirb http://target.com /usr/share/wordlists/dirb/big.txt

# Recursive scan का output:
# + http://target.com/admin/ (CODE:301|SIZE:0)
# ==> DIRECTORY: http://target.com/admin/
# + http://target.com/admin/login.php (CODE:200|SIZE:1234)
# + http://target.com/admin/config.php (CODE:403|SIZE:0)`}
      />

      <h2>Authentication Testing</h2>
      <p>
        अगर website पर authentication है, तो DIRB credentials देकर authenticated scan कर सकता है। इससे protected areas भी scan होते हैं।
      </p>
      <CodeBlock
        title="Authenticated Scanning"
        code={`# HTTP Basic Auth:
dirb http://target.com -u admin:password

# Cookies के साथ (session-based auth):
dirb http://target.com -c "JSESSIONID=ABC123; token=XYZ"

# Custom headers (Bearer token):
dirb http://target.com -H "Authorization: Bearer eyJhbGc..."

# Custom headers (API key):
dirb http://target.com -H "X-API-Key: your_api_key_here"

# Multiple headers:
dirb http://target.com -H "Authorization: Bearer token" -H "X-Custom: value"

# Cookie + User-Agent:
dirb http://target.com -c "session=abc123" -a "Mozilla/5.0"

# Authenticated scan workflow:
# 1. Browser में login करो
# 2. Cookies copy करो (DevTools → Application → Cookies)
# 3. DIRB में -c flag से cookies pass करो`}
      />

      <h2>Proxy Support</h2>
      <p>
        Proxy के through scan करना ज़रूरी है — anonymity के लिए और traffic analyze करने के लिए।
      </p>
      <CodeBlock
        title="Proxy Configuration"
        code={`# HTTP proxy:
dirb http://target.com -p http://127.0.0.1:8080

# SOCKS proxy:
dirb http://target.com -p socks5://127.0.0.1:9050

# Burp Suite के through:
dirb http://target.com -p http://127.0.0.1:8080
# Burp में traffic intercept होगा

# TOR network के through:
dirb http://target.com -p socks5://127.0.0.1:9050
# TOR service running होनी चाहिए

# Proxy chain (multiple proxies):
# DIRB directly support नहीं करता
# proxychains use करो:
proxychains dirb http://target.com`}
      />

      <h2>Output Formats</h2>
      <CodeBlock
        title="Output Options"
        code={`# Output file में save:
dirb http://target.com -o results.txt

# Silent mode (सिर्फ found URLs):
dirb http://target.com -S

# Verbose mode (सब कुछ दिखाओ):
dirb http://target.com -v

# Found + Not Found दोनों:
dirb http://target.com -V

# Output parse करो:
grep "+" results.txt | awk '{print $2}'

# सिर्फ 200 status codes:
grep "CODE:200" results.txt

# सिर्फ directories (301/302):
grep "CODE:30" results.txt

# सिर्फ forbidden (403):
grep "CODE:403" results.txt

# Clean output (सिर्फ URLs):
grep "+" results.txt | sed 's/+ //' | awk -F' ' '{print $1}'`}
      />

      <h2>Status Codes Interpretation</h2>
      <p>
        DIRB के results में status codes बहुत important हैं। हर code का अलग meaning है:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Status Code</th>
              <th className="text-left py-2 px-3 text-neon-green">Meaning</th>
              <th className="text-left py-2 px-3 text-neon-green">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">200</td><td className="py-2 px-3">Found and accessible</td><td className="py-2 px-3">Explore करो — content देखो</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">301</td><td className="py-2 px-3">Permanent redirect</td><td className="py-2 px-3">Follow redirect — new URL check करो</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">302</td><td className="py-2 px-3">Temporary redirect</td><td className="py-2 px-3">Follow redirect — login page पर जा सकता है</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">403</td><td className="py-2 px-3">Forbidden (exists but blocked)</td><td className="py-2 px-3">Bypass try करो — बहुत interesting!</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">401</td><td className="py-2 px-3">Authentication required</td><td className="py-2 px-3">Brute force login try करो</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">405</td><td className="py-2 px-3">Method not allowed</td><td className="py-2 px-3">HTTP method change करो (POST, PUT)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">500</td><td className="py-2 px-3">Internal server error</td><td className="py-2 px-3">Server crash — interesting vulnerability!</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">200 (small size)</td><td className="py-2 px-3">Custom 404 page</td><td className="py-2 px-3">False positive — -N flag use करो</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Hidden Gems Dhundhein</h2>
      <p>
        Web servers पर कई hidden files और directories होती हैं जो developers भूल जाते हैं। ये findings critical vulnerabilities का कारण बन सकती हैं। DIRB से इनको खोजना बहुत आसान है।
      </p>
      <CodeBlock
        title="Interesting Findings"
        code={`# Common hidden files जो हमेशा check करें:
# /admin          — Admin panel
# /login          — Login page
# /backup         — Backup files
# /.env           — Environment variables (passwords!)
# /robots.txt     — Search engine exclusion
# /sitemap.xml    — Site structure
# /.git           — Git repository (source code!)
# /.svn           — SVN repository
# /wp-admin       — WordPress admin
# /wp-login.php   — WordPress login
# /phpmyadmin     — Database admin
# /server-status  — Apache server status
# /server-info    — Apache server info
# /debug          — Debug mode
# /.htaccess      — Apache config
# /config         — Configuration files
# /db             — Database files
# /test           — Test pages
# /api            — API endpoints
# /swagger        — API documentation
# /graphql        — GraphQL endpoint
# /console        — Debug console
# /trace          — HTTP TRACE
# /elmah.axd      — ASP.NET error log
# /phpinfo.php    — PHP configuration info
# /info.php       — Server information
# /readme.html    — WordPress readme
# /wp-config.php.bak — WordPress config backup
# /dump.sql       — Database dump
# /.bash_history  — Command history
# /.ssh           — SSH keys
# /cgi-bin/       — CGI scripts

# robots.txt check करो (free information!):
curl http://target.com/robots.txt

# Sitemap check:
curl http://target.com/sitemap.xml

# .git check:
curl http://target.com/.git/HEAD

# .env check (critical!):
curl http://target.com/.env

# phpinfo check:
curl http://target.com/phpinfo.php`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated Directory Scan"
        code={`#!/bin/bash
# DIRB comprehensive scan script

TARGET=$1
OUTPUT_DIR="dirb_\$(date +%Y%m%d_%H%M%S)"
mkdir -p $OUTPUT_DIR

echo "[*] Starting DIRB scan for $TARGET"
echo "[*] Output directory: $OUTPUT_DIR"

# Step 1: Quick scan (common wordlist)
echo "[+] Phase 1: Quick scan..."
dirb $TARGET /usr/share/wordlists/dirb/common.txt -S -o $OUTPUT_DIR/quick.txt

# Step 2: PHP files
echo "[+] Phase 2: PHP file scan..."
dirb $TARGET /usr/share/wordlists/dirb/common.txt -X .php -S -o $OUTPUT_DIR/php.txt

# Step 3: Backup files
echo "[+] Phase 3: Backup file scan..."
dirb $TARGET /usr/share/wordlists/dirb/common.txt -X .bak,.old,.backup,.save -S -o $OUTPUT_DIR/backup.txt

# Step 4: Config files
echo "[+] Phase 4: Config file scan..."
dirb $TARGET /usr/share/wordlists/dirb/common.txt -X .conf,.env,.json,.xml,.yml -S -o $OUTPUT_DIR/config.txt

# Step 5: Deep scan (big wordlist)
echo "[+] Phase 5: Deep scan..."
dirb $TARGET /usr/share/wordlists/dirb/big.txt -S -o $OUTPUT_DIR/deep.txt

# Combine results
cat $OUTPUT_DIR/*.txt | grep "+" | sort -u > $OUTPUT_DIR/all_found.txt
echo "[*] Total unique paths: $(wc -l < $OUTPUT_DIR/all_found.txt)"
echo "[*] Results saved in $OUTPUT_DIR/"`}
      />

      <CodeBlock
        title="Multi-target Scan"
        code={`#!/bin/bash
# Multiple targets scan

TARGETS_FILE="targets.txt"
OUTPUT_DIR="multi_scan"
mkdir -p $OUTPUT_DIR

while read target; do
  echo "[*] Scanning: $target"
  safe_name=$(echo $target | sed 's/[:\\/]/_/g')
  dirb $target /usr/share/wordlists/dirb/common.txt -S -o $OUTPUT_DIR/$safe_name.txt
done < $TARGETS_FILE

echo "[*] All scans complete"
echo "[*] Summary:"
for f in $OUTPUT_DIR/*.txt; do
  count=$(grep -c "+" $f 2>/dev/null || echo 0)
  echo "  $(basename $f): $count paths found"
done`}
      />

      <CodeBlock
        title="Continuous Monitoring"
        code={`#!/bin/bash
# Website change monitoring

TARGET=$1
BASELINE="baseline.txt"
CURRENT="current.txt"

# Initial scan
echo "[*] Creating baseline..."
dirb $TARGET /usr/share/wordlists/dirb/common.txt -S -o $BASELINE

while true; do
  sleep 3600  # हर घंटे
  echo "[*] Checking for changes..."
  dirb $TARGET /usr/share/wordlists/dirb/common.txt -S -o $CURRENT

  # Compare
  NEW=$(diff $BASELINE $CURRENT | grep "^>" | wc -l)
  REMOVED=$(diff $BASELINE $CURRENT | grep "^<" | wc -l)

  if [ $NEW -gt 0 ] || [ $REMOVED -gt 0 ]; then
    echo "[!] Change detected! New: $NEW, Removed: $REMOVED"
    cp $CURRENT $BASELINE
  else
    echo "[*] No changes detected"
  fi
done`}
      />

      <h2>IDS Evasion</h2>
      <p>
        IDS/IPS और WAF से बचने के लिए कई techniques use कर सकते हो:
      </p>
      <CodeBlock
        title="Stealth Scanning"
        code={`# Slow scan (requests के बीच delay):
dirb http://target.com -z 2000

# Custom User-Agent (browser जैसा):
dirb http://target.com -a "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

# Proxy के through:
dirb http://target.com -p http://127.0.0.1:8080

# TOR के through:
dirb http://target.com -p socks5://127.0.0.1:9050

# Random order (wordlist shuffle):
shuf /usr/share/wordlists/dirb/common.txt > shuffled.txt
dirb http://target.com shuffled.txt

# Rate limiting respect:
dirb http://target.com -z 3000

# Small batches (wordlist split):
split -l 1000 /usr/share/wordlists/dirb/big.txt chunk_
for f in chunk_*; do
  dirb http://target.com $f -S -o results_$f.txt
  sleep 60
done`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Directory enumeration web application penetration testing का सबसे पहला और ज़रूरी step है। DIRB ने कई real-world scenarios में critical vulnerabilities खोजी हैं।
      </p>
      <p>
        <strong className="text-white">Case Study 1 — E-Commerce Site Breach:</strong> एक security researcher ने एक e-commerce website का pentest किया। DIRB से quick scan किया और /backup/ directory मिली जिसमें database dump था — सभी customer data, passwords, payment info। Developers ने backup production server पर छोड़ दिया था। 15 minute में पूरा database access हो गया। Company ने immediately backup remove करवाया और access controls implement किए।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — Government Portal:</strong> एक authorized pentest में government website पर DIRB run किया। /debug/ path मिला जो development mode में था — server information, database credentials, internal IPs सब expose था। /.env file भी मिली जिसमें API keys और secret tokens थे। यह सब publicly accessible था बिना किसी authentication के। Report submit करने के बाद server hardened किया गया।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — WordPress Site:</strong> एक bug bounty hunter ने WordPress site पर DIRB + extension scanning की। /wp-content/uploads/ directory में .sql backup files मिलीं। /wp-config.php.bak मिला जिसमें database credentials थे। Admin panel /wp-admin/ तो मिला ही, साथ में /wp-login.php.bak भी मिला जो old version था। इन सब findings से site completely compromise हो सकती थी।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        DIRB अकेले useful है, लेकिन दूसरे tools के साथ combine करने से results dramatically better होते हैं।
      </p>
      <CodeBlock
        title="DIRB + Nmap Workflow"
        code={`# Step 1: Nmap से open ports find करो
nmap -sV -sC target.com -oX scan.xml

# Step 2: Web ports identify करो
grep -E "80|443|8080|8443" scan.xml

# Step 3: DIRB से directory scan
dirb http://target.com /usr/share/wordlists/dirb/common.txt -o dirb_results.txt

# Step 4: Found paths पर Nikto scan
for path in $(grep "+" dirb_results.txt | awk '{print $2}'); do
  nikto -h $path -o nikto_$path.html
done

# Step 5: Interesting files manually check करो
curl -s http://target.com/.env
curl -s http://target.com/.git/HEAD`}
      />
      <CodeBlock
        title="DIRB + Gobuster + Ffuf Combo"
        code={`# तीनों tools का अलग-अलग strength है:
# DIRB = recursive scanning (सबसे अच्छा)
# Gobuster = fast brute force
# Ffuf = advanced filtering

# DIRB (recursive):
dirb http://target.com -S -o dirb.txt

# Gobuster (fast, vhost):
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt -o gobuster.txt

# Ffuf (filtering):
ffuf -u http://target.com/FUZZ -w /usr/share/wordlists/dirb/common.txt -fc 404 -o ffuf.json

# Results merge करो:
cat dirb.txt gobuster.txt | grep "+" | sort -u > combined.txt

# Combined results comprehensive होंगे — कोई path miss नहीं होगा`}
      />
      <CodeBlock
        title="DIRB + Burp Suite"
        code={`# Burp Suite proxy के through DIRB:
# Burp में proxy listener: 127.0.0.1:8080

dirb http://target.com -p http://127.0.0.1:8080

# Burp में सारे requests intercept होंगे
# Interesting responses manually analyze करो
# Repeater में send करके test करो

# Spider + DIRB combo:
# Burp Spider से initial crawl, फिर DIRB से deep scan`}
      />

      <h2>Performance Tuning</h2>
      <p>
        बड़े targets पर DIRB optimize करना ज़रूरी है — speed और accuracy दोनों के लिए।
      </p>
      <CodeBlock
        title="Speed Optimization"
        code={`# Chhoti wordlist से start करो (fast scan):
dirb http://target.com /usr/share/wordlists/dirb/common.txt

# Recursion disable (top-level only):
dirb http://target.com -r

# Timeout reduce (fast fail):
dirb http://target.com -t 5

# Delay kam करो (fast but risky):
dirb http://target.com -z 100

# Silent mode (output processing fast):
dirb http://target.com -S -o results.txt

# Parallel scanning (multiple terminals):
# Terminal 1: dirb http://target.com/admin/
# Terminal 2: dirb http://target.com/api/
# Terminal 3: dirb http://target.com/assets/`}
      />
      <CodeBlock
        title="Accuracy Optimization"
        code={`# बड़ी wordlist (thorough scan):
dirb http://target.com /usr/share/wordlists/dirb/big.txt

# Multiple extensions:
dirb http://target.com -X .php,.html,.asp,.jsp,.txt,.bak

# Recursive scan (deep paths):
dirb http://target.com  # default recursive है

# Custom wordlist (target-specific):
cewl http://target.com -w custom.txt
dirb http://target.com custom.txt

# Combined approach:
# Phase 1: Quick (common.txt) — 2 minutes
# Phase 2: Medium (big.txt) — 15 minutes
# Phase 3: Deep (big.txt + extensions) — 30 minutes
# Phase 4: Custom (cewl + manual) — 10 minutes`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        DIRB results properly analyze करना ज़रूरी है — हर finding का अलग significance है।
      </p>
      <CodeBlock
        title="Output Analysis"
        code={`# Output file analyze करो:
cat results.txt

# सिर्फ found directories:
grep "==> DIRECTORY:" results.txt

# सिर्फ found files:
grep "+" results.txt | grep -v "DIRECTORY"

# Status code wise分类:
echo "=== 200 OK ==="
grep "CODE:200" results.txt

echo "=== 301 Redirect ==="
grep "CODE:301" results.txt

echo "=== 302 Temp Redirect ==="
grep "CODE:302" results.txt

echo "=== 403 Forbidden ==="
grep "CODE:403" results.txt

echo "=== 401 Auth Required ==="
grep "CODE:401" results.txt

echo "=== 500 Server Error ==="
grep "CODE:500" results.txt

# CSV format में convert:
grep "+" results.txt | awk '{print $2","$3}' > results.csv`}
      />
      <CodeBlock
        title="Report Generation"
        code={`#!/bin/bash
# DIRB report generator

TARGET=$1
RESULTS="results.txt"
REPORT="report_$(date +%Y%m%d).html"

echo "<html><head><title>DIRB Report - $TARGET</title></head>" > $REPORT
echo "<body><h1>Directory Enumeration Report</h1>" >> $REPORT
echo "<h2>Target: $TARGET</h2>" >> $REPORT
echo "<h3>Scan Date: $(date)</h3>" >> $REPORT

echo "<h3>Directories Found:</h3><ul>" >> $REPORT
grep "==> DIRECTORY:" $RESULTS | while read line; do
  echo "<li>$line</li>" >> $REPORT
done
echo "</ul>" >> $REPORT

echo "<h3>Files Found:</h3><ul>" >> $REPORT
grep "+" $RESULTS | grep -v "DIRECTORY" | while read line; do
  echo "<li>$line</li>" >> $REPORT
done
echo "</ul>" >> $REPORT

echo "</body></html>" >> $REPORT
echo "[*] Report saved: $REPORT"}`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'बहुत सारे False Positives आ रहे हैं', a: '-N flag use करो जो "Not Found" responses ignore करता है। Custom 404 page detect करो: curl http://target.com/nonexistent_xyz — अगर 200 आए तो custom 404 है। Content length भी check करो — सभी "found" URLs का same size हो तो false positive है।' },
          { q: 'Scan बहुत slow है', a: 'Chhoti wordlist use करो (common.txt)। Recursion disable करो (-r)। Timeout kam करो (-t 5)। अगर फिर भी slow है तो network issue है — proxy हटाओ या closer server try करो।' },
          { q: 'Connection Timeout आ रहा है', a: 'Timeout बढ़ाओ (-t 30)। WAF block कर रहा होगा — delay use करो (-z 2000)। Proxy try करो। Target server down भी हो सकता है — ping check करो।' },
          { q: '403 Forbidden मिल रहा है — exists लेकिन blocked', a: 'यह बहुत interesting है! Bypass try करो: path traversal (/../admin), HTTP method change (POST/PUT), header manipulation (X-Forwarded-For), URL encoding (%2e%2fadmin)।' },
          { q: 'Wordlist में सही word नहीं है', a: 'Custom wordlist बनाओ target के लिए। CeWL use करो website से words extract करने के लिए। SecLists से specialized wordlists download करो।' },
          { q: 'Redirect loop हो रहा है', a: 'Recursion disable करो (-r)। Max redirect depth check करो। अगर 301/302 redirect loop है तो manually URL follow करो।' },
          { q: 'SSL certificate error आ रहा है', a: 'DIRB SSL verification skip नहीं करता directly। curl -k या wget --no-check-certificate से manually check करो। Target का SSL properly configured होना चाहिए।' },
          { q: ' bahut सारे 404 आ रहे हैं (custom 404 page)', a: '-N flag use करो। पहले custom 404 detect करो: curl -I http://target.com/nonexistent — अगर 200 आए तो -N ज़रूरी है। Content-length filter भी use कर सकते हो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>DIRB vs Gobuster vs Ffuf vs dirsearch vs Wfuzz</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">DIRB</th>
              <th className="text-left py-2 px-3 text-neon-green">Gobuster</th>
              <th className="text-left py-2 px-3 text-neon-green">Ffuf</th>
              <th className="text-left py-2 px-3 text-neon-green">dirsearch</th>
              <th className="text-left py-2 px-3 text-neon-green">Wfuzz</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Language</td><td className="py-2 px-3">C</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">Python</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Fastest</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Recursive</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Extensions</td><td className="py-2 px-3">-X flag</td><td className="py-2 px-3">-x flag</td><td className="py-2 px-3">-e flag</td><td className="py-2 px-3">-e flag</td><td className="py-2 px-3">-e flag</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Filtering</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">Status/Size</td><td className="py-2 px-3">Advanced</td><td className="py-2 px-3">Status/Size</td><td className="py-2 px-3">Advanced</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Pre-installed</td><td className="py-2 px-3">हाँ (Kali)</td><td className="py-2 px-3">हाँ (Kali)</td><td className="py-2 px-3">हाँ (Kali)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white">Best For</td><td className="py-2 px-3">Reliable scan</td><td className="py-2 px-3">Fast brute force</td><td className="py-2 px-3">Advanced fuzzing</td><td className="py-2 px-3">Recursive scan</td><td className="py-2 px-3">Complex fuzzing</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Detection and Defense</h2>
      <p>
        DIRB scans से कैसे बचें (defensive perspective):
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Rate Limiting:</strong> Per-IP request limit लगाओ — बहुत ज़्यादा requests block होंगे</li>
        <li><strong className="text-white">WAF (Web Application Firewall):</strong> ModSecurity, Cloudflare WAF — directory scan patterns detect करते हैं</li>
        <li><strong className="text-white">IP Blocking:</strong> Suspicious IPs automatically block करो (fail2ban)</li>
        <li><strong className="text-white">Custom 404 Page:</strong> Custom 404 page बनाओ जो 200 status code दे — scanners confuse होंगे</li>
        <li><strong className="text-white">Directory Listing Disable:</strong> Apache/nginx में directory listing off करो</li>
        <li><strong className="text-white">Sensitive Files Protect:</strong> .env, .git, .htaccess को web root से हटाओ</li>
        <li><strong className="text-white">Access Control:</strong> Admin directories को specific IPs से ही access दो</li>
        <li><strong className="text-white">Monitoring:</strong> Web server logs monitor करो — bulk 404s detect करो</li>
        <li><strong className="text-white">CAPTCHA:</strong> Repeated requests पर CAPTCHA show करो</li>
        <li><strong className="text-white">Honeypot:</strong> Fake directories बनाओ जो attackers को trap करें</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        DIRB practice करने के लिए safe lab environment बनाना ज़रूरी है। कभी भी production websites पर बिना permission test मत करो। Local environment में सीखो और फिर authorized testing करो।
      </p>
      <CodeBlock
        title="Practice Lab"
        code={`# DVWA (Damn Vulnerable Web Application):
# Docker से:
docker run --rm -it -p 80:80 vulnerables/web-dvwa

# OWASP WebGoat:
docker run --rm -it -p 8080:8080 webgoat/webgoat

# HackTheBox:
# https://www.hackthebox.com — practice machines

# TryHackMe:
# https://tryhackme.com — guided labs

# Local Apache setup:
sudo apt install apache2
# /var/www/html/ में test directories बनाओ

# Test directories बनाओ:
sudo mkdir /var/www/html/admin
sudo mkdir /var/www/html/backup
sudo mkdir /var/www/html/api
sudo mkdir /var/www/html/config
sudo mkdir /var/www/html/debug
sudo echo "secret" > /var/www/html/.env
sudo echo "config" > /var/www/html/config.php
sudo echo "DB_PASSWORD=admin123" > /var/www/html/wp-config.php.bak
sudo echo "backup_data" > /var/www/html/backup/database.sql

# Hidden files बनाओ:
sudo echo "User-agent: * Disallow: /admin/" > /var/www/html/robots.txt
sudo mkdir /var/www/html/.git

# DIRB से scan करो:
dirb http://localhost

# Expected output:
# + http://localhost/admin/ (CODE:301|SIZE:0)
# + http://localhost/backup/ (CODE:301|SIZE:0)
# + http://localhost/.env (CODE:200|SIZE:7)
# + http://localhost/config.php (CODE:200|SIZE:7)
# + http://localhost/robots.txt (CODE:200|SIZE:35)`}
      />
      <CodeBlock
        title="Termux Lab Setup"
        code={`# Android (Termux) में lab बनाओ:
pkg install python
pkg install php

# PHP built-in server start करो:
mkdir -p ~/webapp/admin
mkdir -p ~/webapp/backup
echo "secret" > ~/webapp/.env
echo "<?php phpinfo(); ?>" > ~/webapp/info.php
cd ~/webapp && php -S 127.0.0.1:8080

# DIRB install करो:
pkg install dirb

# Scan करो:
dirb http://127.0.0.1:8080`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'DIRB vs Gobuster — कौन सा use करें?', a: 'DIRB recursive scanning support करता है — मिली directories के अंदर भी scan करता है। Gobuster fast है लेकिन recursive नहीं। Quick scan के लिए Gobuster, thorough scan के लिए DIRB। Best approach: दोनों use करो।' },
          { q: 'क्या DIRB custom wordlist use कर सकता है?', a: 'हाँ! कोई भी text file wordlist के रूप में use हो सकती है — एक word per line। CeWL से generate की हुई wordlist भी use कर सकते हो। SecLists से specialized wordlists download करो।' },
          { q: '403 status code का क्या matlab है?', a: '403 Forbidden — resource exists करता है लेकिन access blocked है। यह बहुत interesting है! Bypass try करो: path traversal, HTTP method change, header manipulation, URL encoding।' },
          { q: 'कितना time लगता है?', a: 'common.txt wordlist के साथ 2-5 minute। big.txt के साथ 15-30 minute। Wordlist size, network speed, और server response time पर depend करता है।' },
          { q: 'False positives कैसे handle करें?', a: '-N flag use करो। Custom 404 page detect करो: curl http://target.com/nonexistent_xyz — अगर 200 आए तो custom 404 है। Content length भी check करो।' },
          { q: 'क्या DIRB HTTPS support करता है?', a: 'हाँ, DIRB HTTP और दोनों support करता है। बस URL में https:// use करो।' },
          { q: 'Recursive scanning कैसे काम करता है?', a: 'जब कोई directory मिलती है (301/302), तो DIRB automatically उस directory के अंदर भी scan करता है। -r flag से disable कर सकते हो।' },
          { q: 'IDS/IPS से कैसे बचें?', a: 'Delay use करो (-z 2000)। Custom User-Agent set करो। Proxy/TOR use करो। Wordlist shuffle करो। Rate limiting respect करो।' },
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
              <th className="text-left py-2 px-3 text-neon-green">Tool</th>
              <th className="text-left py-2 px-3 text-neon-green">Language</th>
              <th className="text-left py-2 px-3 text-neon-green">Key Feature</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Gobuster</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Fast, multi-mode (dir/dns/vhost/s3)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Ffuf</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Fastest fuzzer, advanced filtering</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dirsearch</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">Recursive, Python-based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">feroxbuster</td><td className="py-2 px-3">Rust</td><td className="py-2 px-3">Fast, recursive, smart filtering</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wfuzz</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">Web application fuzzer</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">gobuster</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Multi-mode enumeration</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dirb</td><td className="py-2 px-3">C</td><td className="py-2 px-3">Classic, reliable, recursive</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">wfuzz</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">Parameter fuzzing</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>पहले robots.txt और sitemap.xml check करो — hidden paths मिल सकते हैं बिना scan किए</li>
          <li>-X flag से specific file types ढूंढो — .php, .bak, .env, .sql, .zip सब try करो</li>
          <li>403 wali directories bypass करने की कोशिश करो — path traversal, method change, URL encoding</li>
          <li>CeWL से custom wordlist बनाओ target website से — target-specific results बेहतर मिलते हैं</li>
          <li>-S flag से output clean रहेगा — सिर्फ found paths दिखेंगे, noise नहीं</li>
          <li>IDS evasion के लिए delay use करो (-z 2000) और custom User-Agent set करो</li>
          <li>Recursive scanning से deep paths मिलते हैं — default on रहने दो unless speed critical है</li>
          <li>403 responses को seriously लो — वो directories exist करती हैं, सिर्फ access blocked है</li>
          <li>Multiple wordlists try करो — common.txt, big.txt, raft-small-directories.txt</li>
          <li>Found .env, .git, .bak files को immediately report करो — critical findings हैं</li>
          <li>Output को always file में save करो (-o flag) — बाद में analysis के लिए ज़रूरी है</li>
          <li>हमेशा authorized permission के साथ ही scan करो — unauthorized scanning illegal है</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> DIRB एक powerful directory enumeration tool है। इसका इस्तेमाल केवल authorized web application testing में ही करें। Directory scanning server पर load डालता है — aggressive scanning से IP block हो सकता है। Rate limiting respect करो। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत scanning अपराध है।
      </div>
    </TutorialLayout>
  )
}
