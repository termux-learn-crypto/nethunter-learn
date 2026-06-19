import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Nikto() {
  return (
    <TutorialLayout
      title="nikto"
      subtitle="वेब सर्वर स्कैनर — वल्नरेबिलिटीज़ और मिसकॉन्फ़िगरेशन ढूंढता है"
      icon="🌐"
      prev={{ to: '/tool/hashcat', label: 'hashcat' }}
      next={{ to: '/tools', label: 'All Tools' }}
    >
      <h2>What is Nikto?</h2>
      <p>Nikto एक कमांड-लाइन वेब सर्वर स्कैनर है जो वेब सर्वर्स पर मिसकॉन्फ़िगरेशन, पुराने फ़ाइल्स, और पॉटेंशियल प्रॉब्लम्स को खोजता है। यह 7000+ खतरनाक फ़ाइल्स और 1250+ सर्वर्स के खिलाफ चेक करता है। यह 6700+ खतरनाक फाइल्स/प्रोग्राम्स स्कैन करता है और 1250+ सर्वर वर्जन स्पेसिफिक प्रॉब्लम्स चेक करता है। वेब सर्वर की शुरुआती सिक्योरिटी असेसमेंट के लिए यह सबसे तेज़ और आसान टूल है।
      </p>
      <p>
        Nikto Perl में लिखा गया है और GPL लाइसेंस के तहत ओपन सोर्स है। यह क्रॉस-प्लेटफ़ॉर्म है — Linux, Windows, macOS सब पर चलता है। काली लिनक्स और काली नेटहंटर दोनों में प्री-इंस्टॉल्ड आता है। Nikto HTTP/HTTPS, SSL/TLS, सर्वर हेडर्स, कुकीज़, और डायरेक्ट्री स्ट्रक्चर सब एनालाइज़ करता है।
      </p>
      <p>
        Nikto का सबसे बड़ा फायदा यह है कि यह बहुत कम समय में वेब सर्वर की कमज़ोरियों का पता लगा लेता है। यह तेज़ है लेकिन स्टील्दी नहीं है — सर्वर पर बहुत सारे रिक्वेस्ट भेजता है इसलिए IDS/IPS आसानी से डिटेक्ट कर लेता है। पेनेट्रेशन टेस्टिंग के शुरुआती फेज़ में यह बहुत उपयोगी है।
      </p>
      <p>
        Nikto का architecture plugin-based है — हर vulnerability check एक plugin के रूप में implement है। नई vulnerabilities discover होने पर नए plugins add किए जाते हैं। Community actively plugins maintain करती है। Nikto की database regularly update होती है — नए CVEs, नए misconfigurations, नए attack vectors। यह continuously evolving tool है।
      </p>
      <p>
        Nikto का design philosophy है — "सब कुछ चेक करो"। यह default रूप से सभी ज्ञात vulnerabilities test करता है। यह vulnerability assessment के लिए है, exploitation के लिए नहीं। अगर Nikto कुछ ढूंढता है, तो आपको manually या दूसरे tools से verify करना होगा। Nikto false positives भी दे सकता है — manual verification हमेशा ज़रूरी है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Nikto केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए उपयोग करें। बिना अनुमति के वेब सर्वर स्कैनिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत स्कैनिंग अपराध हो सकता है।
      </div>

      <h2>History of Nikto</h2>
      <p>
        Nikto को Chris Sullo ने 2001 में CIRT.net के तहत बनाया था। शुरू में यह सिर्फ एक सिंपल CGI स्कैनर था जो ज्ञात vulnerabilities check करता था। समय के साथ इसमें बहुत सारे features जुड़ते गए — SSL/TLS testing, authentication, proxy support, और IDS evasion।
      </p>
      <p>
        2004 में Nikto 2.0 release हुआ जिसमें plugin system जोड़ा गया। यह major upgrade था — अब custom checks add करना आसान हो गया। 2008 में Nikto को BackTrack Linux में शामिल किया गया, और बाद में Kali Linux में भी प्री-इंस्टॉल्ड आने लगा। आज Nikto सबसे popular web server scanners में से एक है। GitHub पर इसके 8000+ stars हैं।
      </p>
      <p>
        2012 में Nikto को major rewrite मिला — better SSL support, improved performance, और new plugins जोड़े गए। 2015 में Nikto 2.1.5 release हुआ जिसमें JSON output format add किया गया। 2018 में Nikto को Kali Linux के साथ-साथ Parrot OS में भी शामिल किया गया। 2020 में Nikto 2.5 release हुआ जिसमें better HTTP/2 support और new vulnerability checks जोड़े गए।
      </p>
      <p>
        Nikto का community contribution model open है — कोई भी new vulnerability discover करने पर plugin submit कर सकता है। CIRT.net team plugins review करके main database में add करती है। यह collaborative approach Nikto को constantly updated रखता है। OWASP testing guide में Nikto को recommended tool के रूप में mention किया गया है।
      </p>

      <h2>How Nikto Works?</h2>
      <p>
        Nikto एक plugin-based architecture use करता है जो वेब सर्वर के विभिन्न पहलुओं को test करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Server Version Detection:</strong> HTTP headers से सर्वर software और version पहचानता है</li>
        <li><strong className="text-white">Vulnerability Database:</strong> 6700+ ज्ञात खतरनाक फाइल्स और programs का database</li>
        <li><strong className="text-white">Misconfiguration Check:</strong> Default files, directory listing, configuration errors</li>
        <li><strong className="text-white">SSL/TLS Analysis:</strong> Certificate, cipher, protocol version check</li>
        <li><strong className="text-white">HTTP Methods:</strong> PUT, DELETE, TRACE जैसे dangerous methods check</li>
        <li><strong className="text-white">Plugin System:</strong> Custom plugins से नई checks जोड़ सकते हो</li>
        <li><strong className="text-white">IDS Evasion:</strong> Encoding, timing, और proxy techniques</li>
        <li><strong className="text-white">Report Engine:</strong> Multiple output formats (HTML, CSV, XML, JSON)</li>
      </ul>
      <p>
        Nikto का scanning process systematic है — पहले server fingerprinting होता है, फिर applicable plugins run होते हैं, और finally results compile होते हैं। हर plugin एक specific vulnerability category check करता है। Nikto की database में plugins XML format में stored हैं जो maintain करना आसान बनाता है।
      </p>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Nikto प्री-इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो आसानी से install कर सकते हैं। Perl runtime required है।
      </p>
      <CodeBlock
        title="Nikto Installation"
        code={`# काली लिनक्स/नेटहंटर में चेक करें:
nikto -Version

# Debian/Ubuntu में install:
sudo apt update
sudo apt install nikto

# Git से latest version:
git clone https://github.com/sullo/nikto.git
cd nikto/program
chmod +x nikto.pl

# Perl dependency:
sudo apt install libnet-ssleay-perl libio-socket-ssl-perl

# Version check:
perl nikto.pl -Version

# Direct run:
./nikto.pl -h http://target.com`}
      />
      <CodeBlock
        title="Docker Installation"
        code={`# Docker image से run करो:
docker pull sullo/nikto

# Scan run करो:
docker run --rm sullo/nikto -h http://target.com

# Output file save करो:
docker run --rm -v $(pwd):/tmp sullo/nikto \
  -h http://target.com -o /tmp/report.html -Format htm

# Custom config:
docker run --rm -v $(pwd)/config:/etc/nikto sullo/nikto \
  -h http://target.com -config /etc/nikto/nikto.conf

# Multiple targets:
docker run --rm sullo/nikto -h http://target1.com,http://target2.com`}
      />
      <CodeBlock
        title="Windows Installation"
        code={`# Windows पर Nikto चलाने के लिए Perl चाहिए:

# Strawberry Perl install करो:
# https://strawberryperl.com/

# ya ActivePerl:
# https://www.activestate.com/products/perl/

# Nikto download करो:
# https://github.com/sullo/nikto.git

# Command Prompt में:
perl nikto.pl -h http://target.com

# WSL (Windows Subsystem for Linux) use करो:
wsl
sudo apt install nikto
nikto -h http://target.com`}
      />

      <h2>Basic Usage</h2>
      <p>
        Nikto का basic scan बहुत आसान है — बस target URL दो। Automatically सभी common vulnerabilities check करेगा। Scan time target के size पर depend करता है — आमतौर पर 10-30 minutes।
      </p>
      <CodeBlock
        title="Basic Scan"
        code={`# Simple scan:
nikto -h http://target.com

# IP address से:
nikto -h 192.168.1.100

# Specific port:
nikto -h target.com -p 8080

# Multiple ports:
nikto -h target.com -p 80,443,8080,8443

# HTTPS scan:
nikto -h https://target.com

# SSL force:
nikto -h target.com -ssl

# Verbose output:
nikto -h target.com -Display V

# Nmap output से scan:
nmap -p 80,443 target.com -oX scan.xml
nikto -h target.com -w scan.xml`}
      />
      <CodeBlock
        title="Multiple Target Scanning"
        code={`# File से targets read करो:
# targets.txt में हर line पर एक target
nikto -h targets.txt

# Multiple hosts:
nikto -h host1.com,host2.com,host3.com

# CIDR range:
nikto -h 192.168.1.0/24

# Nmap XML से multiple targets:
nmap -p 80 192.168.1.0/24 -oX network.xml
nikto -h network.xml

# Parallel scanning (xargs):
cat targets.txt | xargs -P 5 -I {} nikto -h {} -output {}.html

# Sequential with logging:
for target in $(cat targets.txt); do
  echo "[*] Scanning: $target"
  nikto -h $target -output "reports/$target.html" -Format htm
  echo "[+] Done: $target"
done`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-h</td><td className="py-2 px-3">Target host/URL</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">Port number (comma-separated)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-ssl</td><td className="py-2 px-3">SSL force करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-output</td><td className="py-2 px-3">Output file</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-Format</td><td className="py-2 px-3">Output format (csv, xml, json, htm)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-Tuning</td><td className="py-2 px-3">Specific tests select</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-id</td><td className="py-2 px-3">Authentication credentials</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-evasion</td><td className="py-2 px-3">IDS bypass techniques</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-Pause</td><td className="py-2 px-3">Requests के बीच delay (seconds)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-Display</td><td className="py-2 px-3">Output control (V=verbose, E=errors)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-timeout</td><td className="py-2 px-3">Request timeout (seconds)</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-Plugins</td><td className="py-2 px-3">Specific plugins load करें</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scan Tuning</h2>
      <p>
        Nikto में specific tests select कर सकते हैं। यह तब काम आता है जब सिर्फ कुछ विशेष कमज़ोरियां check करना चाहते हो। Tuning से scan time भी कम होता है।
      </p>
      <CodeBlock
        title="Scan Tuning Options"
        code={`# Test categories:
# 1 = Interesting files
# 2 = Misconfiguration / default files
# 3 = Information disclosure
# 4 = Injection (XSS/Script/HTML)
# 5 = Remote file retrieval - Server Wide
# 6 = Denial of Service
# 7 = Remote file retrieval - Server Wide
# 8 = Command Execution - Remote Shell
# 9 = SQL Injection
# 0 = Software Identification
# a = Authentication Bypass
# b = Software Identification
# c = Remote Source Inclusion

# सिर्फ XSS और SQLi:
nikto -h target.com -Tuning 49

# Default tests + interesting files:
nikto -h target.com -Tuning 12

# Default + default tests skip:
nikto -h target.com -Tuning x6

# सभी tests (slow):
nikto -h target.com -Tuning 1234567890abc

# DoS tests exclude:
nikto -h target.com -Tuning x6

# Safe scan (no DoS, no destructive):
nikto -h target.com -Tuning x68`}
      />

      <h2>Server Vulnerabilities</h2>
      <p>
        Nikto विभिन्न प्रकार की server vulnerabilities check करता है। हर category अलग attack vector cover करती है।
      </p>
      <CodeBlock
        title="Vulnerability Checks"
        code={`# Default files और pages:
# - Default admin panels
# - Default credentials
# - Default configuration files

# Directory listing:
# - /admin/, /backup/, /test/, /tmp/

# Old software:
# - Apache, Nginx, IIS version check
# - PHP, ASP, JSP version
# - WordPress, Joomla, Drupal version

# Misconfiguration:
# - HTTP methods (PUT, DELETE, TRACE)
# - Directory browsing
# - Server information disclosure
# - Cross-site scripting
# - SQL injection points`}
      />
      <CodeBlock
        title="Common Findings"
        code={`# Nikto जो commonly ढूंढता है:

# 1. Server Version Disclosure:
# Server: Apache/2.4.41 (Ubuntu)
# Risk: Attacker version-specific exploits use कर सकता है

# 2. Default Files:
# /icons/README, /server-info, /server-status
# Risk: Information disclosure

# 3. Directory Listing:
# /backup/, /admin/, /test/
# Risk: Sensitive files access

# 4. HTTP Methods:
# PUT, DELETE, TRACE enabled
# Risk: File upload, data deletion, XSS

# 5. Outdated Software:
# PHP 5.x, Apache 2.2.x
# Risk: Known CVEs exploit हो सकते हैं

# 6. SSL Issues:
# SSLv3 enabled, weak ciphers
# Risk: Man-in-the-middle attacks`}
      />

      <h2>SSL/TLS Testing</h2>
      <p>
        Nikto SSL/TLS configuration भी check करता है — certificate, ciphers, और protocol। SSL testing web server security assessment का important part है।
      </p>
      <CodeBlock
        title="SSL/TLS Scan"
        code={`# SSL scan:
nikto -h https://target.com -ssl

# Specific port पर SSL:
nikto -h target.com -p 443 -ssl

# SSL configuration check:
# - Certificate expiry
# - Weak ciphers
# - SSLv2/v3 support (old and insecure)
# - Revoked certificates
# - Self-signed certificates

# Multiple SSL ports:
nikto -h target.com -p 443,8443,9443 -ssl

# SSL verbose output:
nikto -h target.com -ssl -Display V`}
      />
      <CodeBlock
        title="SSL Findings Interpretation"
        code={`# Common SSL findings:

# 1. Self-signed certificate:
# Risk: Man-in-the-middle vulnerability
# Fix: CA-signed certificate install करो

# 2. Expired certificate:
# Risk: Browser warnings, security bypass
# Fix: Certificate renew करो

# 3. SSLv3 enabled:
# Risk: POODLE attack vulnerability
# Fix: SSLv3 disable करो

# 4. Weak ciphers (RC4, DES):
# Risk: Encryption break हो सकता है
# Fix: Strong ciphers only (AES-256-GCM)

# 5. Missing HSTS:
# Risk: Protocol downgrade attack
# Fix: HSTS header add करो

# 6. Missing certificate transparency:
# Risk: Certificate spoofing
# Fix: CT logs में certificate publish करो`}
      />

      <h2>Authentication Testing</h2>
      <p>
        अगर website पर authentication है तो credentials देकर authenticated scan कर सकते हैं। Authenticated scan ज़्यादा comprehensive results देता है — hidden pages और admin panels भी scan होते हैं।
      </p>
      <CodeBlock
        title="Authenticated Scan"
        code={`# HTTP Basic Auth:
nikto -h target.com -id admin:password

# Specific realm:
nikto -h target.com -id admin:password:realm

# Cookie-based:
nikto -h target.com -C all

# Specific cookie:
nikto -h target.com -C "session=abc123"

# Multiple cookies:
nikto -h target.com -C "session=abc123;token=xyz789"

# Custom header:
nikto -h target.com -H "Authorization: Bearer token123"

# POST data:
nikto -h target.com -post "username=admin&password=pass123"`}
      />

      <h2>Custom Reports</h2>
      <p>
        Scan results को कई formats में save कर सकते हैं। Professional reports client presentation के लिए important हैं।
      </p>
      <CodeBlock
        title="Report Generation"
        code={`# HTML report:
nikto -h target.com -output report.html -Format htm

# CSV format:
nikto -h target.com -output report.csv -Format csv

# XML format:
nikto -h target.com -output report.xml -Format xml

# JSON format:
nikto -h target.com -output report.json -Format json

# Text file:
nikto -h target.com -output report.txt

# सभी formats एक साथ:
for fmt in htm csv xml json; do
  nikto -h target.com -output report.$fmt -Format $fmt
done

# Output directory create करो:
mkdir -p reports
nikto -h target.com -output reports/$(date +%Y%m%d)_scan.html -Format htm`}
      />

      <h2>Plugin System</h2>
      <p>
        Nikto में plugin system है जिससे custom checks जोड़ सकते हो। Plugins Perl में लिखे जाते हैं। Community plugins actively maintain करती है।
      </p>
      <CodeBlock
        title="Plugins"
        code={`# सभी plugins list:
nikto -h target.com -list-plugins

# Specific plugin:
nikto -h target.com -Plugins "apache_expect_xss"

# Multiple plugins:
nikto -h target.com -Plugins "apache_expect_xss;cookies"

# Plugin directory:
# /usr/share/nikto/plugins/

# Custom plugin बनाएं:
# Perl में लिखें और plugins/ folder में रखें

# Plugin database update:
cd nikto/program
git pull origin master`}
      />

      <h2>IDS Evasion</h2>
      <p>
        Nikto में IDS/IPS bypass करने के लिए कई techniques हैं। Production environments में scan करते समय evasion ज़रूरी हो सकता है।
      </p>
      <CodeBlock
        title="Evasion Techniques"
        code={`# Random URI encoding:
nikto -h target.com -evasion 1

# Random case:
nikto -h target.com -evasion 2

# Fake URL parameters:
nikto -h target.com -evasion 4

# Multiple techniques एक साथ:
nikto -h target.com -evasion 1234

# Slow scan:
nikto -h target.com -Pause 5

# Random order:
nikto -h target.com -shuffle

# User-agent change:
nikto -h target.com -useragent "Mozilla/5.0"

# Proxy के साथ:
nikto -h target.com -useproxy http://127.0.0.1:8080

# Tor network के through:
nikto -h target.com -useproxy socks5://127.0.0.1:9050`}
      />

      <h2>Nikto vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">Nikto</th>
              <th className="text-left py-2 px-3 text-neon-green">Nuclei</th>
              <th className="text-left py-2 px-3 text-neon-green">OWASP ZAP</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Type</td><td className="py-2 px-3">CLI scanner</td><td className="py-2 px-3">Template-based</td><td className="py-2 px-3">GUI + CLI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Very fast</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Custom Checks</td><td className="py-2 px-3">Plugins</td><td className="py-2 px-3">YAML templates</td><td className="py-2 px-3">Add-ons</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">SPA Support</td><td className="py-2 px-3">Limited</td><td className="py-2 px-3">Limited</td><td className="py-2 px-3">Good</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Evasion</td><td className="py-2 px-3">Built-in</td><td className="py-2 px-3">No</td><td className="py-2 px-3">Proxy</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Reporting</td><td className="py-2 px-3">HTML/CSV/XML/JSON</td><td className="py-2 px-3">JSON/SARIF</td><td className="py-2 px-3">HTML/XML</td></tr>
            <tr><td className="py-2 px-3 text-white">Learning Curve</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Medium</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Scan बहुत slow है', a: 'Pause time कम करें, specific tests select करें, और timeout कम करें। -Tuning से सिर्फ ज़रूरी tests चलाएं।' },
          { q: 'Connection refused', a: 'Target server active है या नहीं check करें। Firewall block कर सकता है। अलग port try करें।' },
          { q: 'False positives आ रहे हैं', a: 'Nikto कभी-कभी false positives देता है। हमेशा manually verify करें। Burp Suite में check करें।' },
          { q: 'SSL certificate error', a: '-ssl flag use करें। Self-signed certificate के लिए Perl SSL modules install करें।' },
          { q: 'Plugin नहीं मिल रहा', a: 'Plugin directory check करें। -list-plugins से सभी available plugins देखें।' },
          { q: 'बहुत ज़्यादा output', a: '-Display E से सिर्फ errors दिखाएं। -Tuning से specific tests select करें।' },
          { q: 'Scan timeout हो रहा है', a: '-timeout value बढ़ाओ (default 10 seconds)। Network connection check करो। Target overloaded हो सकता है।' },
          { q: 'Perl module missing error', a: 'libnet-ssleay-perl और libio-socket-ssl-perl install करो। cpanm install करो और missing modules install करो।' },
          { q: 'Proxy configuration issues', a: '-useproxy flag check करो। Proxy URL format सही है verify करो (http://ip:port)। Proxy server running है confirm करो।' },
          { q: 'Nmap integration काम नहीं कर रहा', a: 'Nmap XML output format check करो (-oX flag)। File path absolute दो। XML valid है verify करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Nikto scan से कैसे बचें (defensive perspective)। यह techniques web server को Nikto जैसे scanners से protect करती हैं।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">WAF:</strong> Web Application Firewall Nikto के request patterns block करता है</li>
        <li><strong className="text-white">Rate Limiting:</strong> IP-based rate limiting से scan slow होगा</li>
        <li><strong className="text-white">Server Header Hide:</strong> Server version छुपाएं — ServerTokens Prod</li>
        <li><strong className="text-white">Default Files Remove:</strong> Default pages और files हटाएं</li>
        <li><strong className="text-white">HTTP Methods Restrict:</strong> PUT, DELETE, TRACE block करें</li>
        <li><strong className="text-white">IDS/IPS:</strong> Nikto के signature based detection</li>
        <li><strong className="text-white">Custom Error Pages:</strong> Server information disclosure रोकें</li>
        <li><strong className="text-white">Regular Updates:</strong> Server software updated रखें — known vulnerabilities patch होंगे</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Nikto practice के लिए safe lab बनाओ। Vulnerable web applications use करो — real servers पर scan मत करो।
      </p>
      <CodeBlock
        title="Lab Setup"
        code={`# DVWA (Damn Vulnerable Web Application):
docker run --rm -it -p 80:80 vulnerables/web-dvwa

# WebGoat (OWASP):
docker run --rm -p 8080:8080 webgoat/webgoat

# Metasploitable:
# VirtualBox में Metasploitable VM चलाएं

# अपना test server:
sudo apt install apache2
# Intentionally weak configuration बनाएं

# Nikto चलाएं:
nikto -h http://localhost

# Practice workflow:
# 1. Basic scan run करो
# 2. Results analyze करो
# 3. Specific tuning से focused scan
# 4. Reports generate करो
# 5. Findings manually verify करो`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        Advanced techniques से Nikto की power बढ़ा सकते हो। Custom configurations, batch scanning, और result analysis techniques comprehensive testing करती हैं।
      </p>
      <CodeBlock
        title="Nmap Integration"
        code={`# Nmap के साथ combine:
nmap -p 80,443 target.com -oX scan.xml
nikto -h target.com -w scan.xml

# Multiple ports discover करो पहले:
nmap -sV target.com -oX services.xml
nikto -h target.com -w services.xml

# Service-specific scanning:
nmap -p 80,443,8080,8443 target.com -oX web_ports.xml
nikto -h target.com -w web_ports.xml -ssl`}
      />
      <CodeBlock
        title="Custom Configuration"
        code={`# Nikto configuration file edit करो:
# /etc/nikto/nikto.conf

# Important settings:
# CLIOPTS=-Display V
# DEFAULTPORT=80
# TIMEOUT=10
# MAXERRORS=5

# Custom database:
# DBDIR=/custom/nikto/databases
# PLUGINDIR=/custom/nikto/plugins

# Proxy settings:
# PROXYHOST=127.0.0.1
# PROXYPORT=8080
# PROXYTYPE=HTTP

# SSL settings:
# SSLCERTS=/custom/certs

# Custom user-agent:
# USERAGENT=Mozilla/5.0 (Custom Scanner)`}
      />
      <CodeBlock
        title="Batch Scanning Script"
        code={`# nikto_batch.sh — Multiple targets scan करो

#!/bin/bash

TARGETS_FILE="targets.txt"
OUTPUT_DIR="nikto_reports"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p "$OUTPUT_DIR"

while IFS= read -r target; do
  echo "[*] Scanning: $target"

  nikto -h "$target" \
    -output "$OUTPUT_DIR/\${target}_\${DATE}.html" \
    -Format htm \
    -Tuning x6 \
    -timeout 30

  echo "[+] Done: $target"
  sleep 5
done < "$TARGETS_FILE"

echo "[*] All scans complete"
echo "[*] Reports in: $OUTPUT_DIR/"`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Nikto real-world penetration testing में बहुत effectively use होता है। Web application security assessments में यह reconnaissance phase का standard tool है।
      </p>
      <p>
        <strong>E-commerce Website Assessment:</strong> एक online store का security audit करते समय Nikto से scan किया। Results में मिला — outdated Apache version, directory listing enabled on /backup/, default admin panel accessible, weak SSL ciphers। इन findings को manually verify करके report बनाई। Client ने immediately patches apply किए। Nikto ने 15 minutes में जो ढूंढा वो manually 2-3 दिन लगते।
      </p>
      <p>
        <strong>Corporate Web Server Audit:</strong> एक company के multiple web servers का audit करना था। Nikto batch script बनाकर 50+ servers scan किए। Common findings — outdated PHP versions, missing security headers, default files accessible। Report में prioritize करके critical, high, medium, low categories में divide किया। Company ने critical findings same week में fix किए।
      </p>
      <p>
        <strong>Bug Bounty Finding:</strong> एक bug bounty program में Nikto से scan करते समय /server-status page accessible मिला जो Apache module information disclose कर रहा था। इस information से specific version exploit ढूंढा और valid vulnerability report submit किया। $500 bounty मिली। Nikto जैसे basic tools से भी meaningful findings mil सकते हैं।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Nikto को दूसरे security tools के साथ integrate करके comprehensive web application testing कर सकते हो। Combined workflow से better coverage मिलता है।
      </p>
      <CodeBlock
        title="Nikto + Nmap + Burp Workflow"
        code={`# Combined web application testing workflow:

# Step 1: Nmap से ports discover करो
nmap -sV -p- target.com -oX nmap_scan.xml

# Step 2: Nikto से web vulnerabilities scan करो
nikto -h target.com -w nmap_scan.xml -output nikto_report.html -Format htm

# Step 3: Nikto findings Burp Suite में verify करो
# Burp Proxy → Target → Scope add करो
# Nikto findings manually test करो

# Step 4: Nuclei से additional checks
nuclei -u http://target.com -t cves/

# Step 5: Results combine करो
# Nikto + Nuclei + Burp = comprehensive assessment`}
      />
      <CodeBlock
        title="Nikto + Dirb/Gobuster Integration"
        code={`# Directory discovery workflow:

# Step 1: Nikto से initial scan
nikto -h target.com -output nikto_initial.html -Format htm

# Step 2: Dirb से directory brute force
dirb http://target.com /usr/share/wordlists/dirb/common.txt

# Step 3: Gobuster से faster directory scan
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt

# Step 4: Discovered directories पर Nikto scan
for dir in $(cat discovered_dirs.txt); do
  nikto -h "http://target.com$dir" -output "nikto_$dir.html"
done

# Step 5: All results compile करो
# Nikto + Dirb + Gobuster = complete directory map`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Nikto को scripts में integrate करके automated security testing pipelines बना सकते हो। CI/CD में web application security testing automate हो सकती है।
      </p>
      <CodeBlock
        title="CI/CD Integration"
        code={`# GitHub Actions में Nikto scan:
# .github/workflows/security.yml

name: Security Scan
on: [push, pull_request]

jobs:
  nikto-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Nikto Scan
        run: |
          docker run --rm sullo/nikto -h your-target.com -output nikto_report.html -Format htm
      - name: Upload Report
        uses: actions/upload-artifact@v3
        with:
          name: nikto-report
          path: nikto_report.html`}
      />
      <CodeBlock
        title="Automated Reporting Script"
        code={`# nikto_auto_report.sh — Automated scan और reporting

#!/bin/bash

TARGET=$1
DATE=$(date +%Y%m%d_%H%M%S)
REPORT_DIR="reports/$TARGET"
mkdir -p "$REPORT_DIR"

echo "[*] Starting Nikto scan: $TARGET"

# Scan run करो
nikto -h "$TARGET" -output "$REPORT_DIR/nikto_\${DATE}.html" -Format htm -Tuning 12457890 -timeout 30 -Display V 2>&1 | tee "$REPORT_DIR/nikto_\${DATE}.log"

# Results count
FINDINGS=$(grep -c "OSVDB" "$REPORT_DIR/nikto_\${DATE}.log" 2>/dev/null || echo "0")

echo "[+] Scan complete"
echo "[+] Findings: $FINDINGS"
echo "[+] Report: $REPORT_DIR/nikto_\${DATE}.html"

# Email report (optional)
# mail -s "Nikto Scan: $TARGET" admin@example.com &lt; "$REPORT_DIR/nikto_\${DATE}.html"`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Nikto को fast और efficient बनाने के लिए कुछ techniques हैं। Large-scale scanning में performance optimization ज़रूरी है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Tuning Select:</strong> सिर्फ ज़रूरी tests run करो — unnecessary tests skip करो</li>
        <li><strong className="text-white">Timeout Reduce:</strong> -timeout 5 से faster timeout</li>
        <li><strong className="text-white">Port Limit:</strong> सिर्फ open ports scan करो — Nmap से पहले check करो</li>
        <li><strong className="text-white">Pause Minimize:</strong> -Pause 1 से minimum delay</li>
        <li><strong className="text-white">Parallel Scans:</strong> Multiple targets parallel scan करो</li>
        <li><strong className="text-white">Local Database:</strong> Local copy से scan करो — network latency avoid करो</li>
        <li><strong className="text-white">Output Format:</strong> CSV fastest है — HTML slow (rendering overhead)</li>
        <li><strong className="text-white">Memory:</strong> Perl memory limit increase करो बड़ी scans के लिए</li>
      </ul>

      <h2>Reporting and Output Analysis</h2>
      <p>
        Nikto scan results को properly analyze करना ज़रूरी है। Raw output में बहुत सारी information होती है — सही findings identify करना और prioritize करना important है। HTML reports सबसे readable होती हैं, लेकिन CSV/JSON data processing के लिए better हैं।
      </p>
      <CodeBlock
        title="Output Analysis"
        code={`# Nikto output categories:

# OSVDB entries — Known vulnerabilities
# यह सबसे important findings हैं
# OSVDB-3092: /admin/ — Admin panel accessible
# OSVDB-5765: /backup/ — Backup files found

# Server information disclosure
# Server version, modules, technologies
# Attackers यह info specific exploits ढूंढने में use करते हैं

# Default files
# /icons/README, /server-info, /server-status
# Information disclosure risk

# HTTP methods
# PUT, DELETE, TRACE enabled
# Direct security risk

# Results filter करो:
grep "OSVDB" nikto_report.txt | sort -u
grep "ERROR" nikto_report.txt
grep "WARN" nikto_report.txt`}
      />
      <CodeBlock
        title="Report Prioritization"
        code={`# Findings prioritize करो:

# CRITICAL (तुरंत fix करो):
# - Remote code execution
# - SQL injection points
# - Default credentials
# - Directory traversal

# HIGH (जल्दी fix करो):
# - Outdated software versions
# - Weak SSL/TLS configuration
# - Information disclosure
# - Missing security headers

# MEDIUM (Plan करो):
# - Directory listing
# - Default files accessible
# - HTTP methods enabled
# - Cookie issues

# LOW (Monitor करो):
# - Server version disclosure
# - Minor misconfigurations
# - Informational findings`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Nikto stealth scan कर सकता है?', a: 'नहीं, Nikto inherently noisy है। IDS bypass techniques हैं लेकिन true stealth scan के लिए Burp Suite या custom scripts use करो।' },
          { q: 'क्या Nikto exploitation कर सकता है?', a: 'नहीं, Nikto सिर्फ vulnerability identification करता है। Exploitation के लिए Metasploit या manual techniques use करो।' },
          { q: 'Scan कितना time लेता है?', a: 'Basic scan 10-30 minutes। Target size, network speed, और tuning options पर depend करता है।' },
          { q: 'क्या Nikto authenticated scan कर सकता है?', a: 'हाँ, -id flag से credentials दे सकते हो। Cookie-based और header-based auth भी support है।' },
          { q: 'False positives कैसे handle करें?', a: 'हमेशा manually verify करो। Burp Suite या browser से check करो। Nikto के findings starting point हैं, final results नहीं।' },
          { q: 'क्या Nikto SPA (Single Page App) scan कर सकता है?', a: 'Limited support है। SPA के लिए Burp Suite या OWASP ZAP better है। Nikto traditional web apps के लिए best है।' },
          { q: 'Custom wordlists कैसे use करें?', a: 'Nikto की database में checks XML format में हैं। Custom checks जोड़ने के लिए plugins/ directory में Perl modules बनाओ।' },
          { q: 'Multiple targets कैसे scan करें?', a: 'File में targets list करो और -h flag से pass करो। ya xargs से parallel scan करो।' },
          { q: 'क्या Nikto REST API test कर सकता है?', a: 'Limited support। API testing के लिए Postman, Burp Suite, या custom scripts better हैं। Nikto mainly traditional web servers के लिए है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Nikto Database</h2>
      <p>
        Nikto की vulnerability database इसकी power है। यह database regularly update होती है और 6700+ checks contain करती है। Database XML format में stored है जो maintain करना आसान बनाता है।
      </p>
      <CodeBlock
        title="Database Management"
        code={`# Database location:
# /usr/share/nikto/databases/

# Main database files:
# db_tests — Vulnerability tests
# db_variables — Variables और settings
# db_server_headers — Server fingerprints
# db_outdated — Outdated software versions

# Database update:
cd nikto/program
perl nikto.pl -update

# Custom database add करो:
# /usr/share/nikto/databases/ में custom XML files रखो

# Database statistics:
nikto -list-plugins | wc -l
# Total available checks देख सकते हो

# Database verify करो:
perl nikto.pl -dbcheck
# Database integrity check होगा`}
      />

      <h2>Web Server Hardening</h2>
      <p>
        Nikto की findings से web server को harden कर सकते हो। हर vulnerability type के लिए specific fix है। Server hardening comprehensive security posture improve करता है।
      </p>
      <CodeBlock
        title="Apache Hardening"
        code={`# Apache security configuration:

# Server version hide करो:
ServerTokens Prod
ServerSignature Off

# Directory listing disable:
Options -Indexes

# HTTP methods restrict करो:
<Location />
  <LimitExcept GET POST HEAD>
    Require all denied
  </LimitExcept>
</Location>

# Security headers add करो:
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=31536000"

# Server information pages disable:
# /server-info, /server-status remove करो`}
      />
      <CodeBlock
        title="Nginx Hardening"
        code={`# Nginx security configuration:

# Server version hide:
server_tokens off;

# HTTP methods restrict:
if ($request_method !~ ^(GET|HEAD|POST)$) {
  return 405;
}

# Security headers:
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Strict-Transport-Security "max-age=31536000" always;

# Directory listing disable:
autoindex off;

# Rate limiting:
limit_req_zone $binary_remote_addr zone=one:10m rate=10r/s;

# SSL strong configuration:
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384';
ssl_prefer_server_ciphers on;`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nuclei</td><td className="py-2 px-3">Template-based scanner</td><td className="py-2 px-3">Fast, 6000+ templates</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">OWASP ZAP</td><td className="py-2 px-3">Web app scanner</td><td className="py-2 px-3">GUI, active scanning</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Burp Suite</td><td className="py-2 px-3">Web app testing</td><td className="py-2 px-3">Professional, comprehensive</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wapiti</td><td className="py-2 px-3">Web vulnerability scanner</td><td className="py-2 px-3">Python-based, modular</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Arachni</td><td className="py-2 px-3">Web app scanner</td><td className="py-2 px-3">High performance, REST API</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">W3af</td><td className="py-2 px-3">Web app attack framework</td><td className="py-2 px-3">Plugin-based, extensible</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Vega</td><td className="py-2 px-3">Web app scanner</td><td className="py-2 px-3">GUI, automated crawling</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Nikto हमेशा पहले run करो — basic vulnerabilities जल्दी पता चलती हैं</li>
          <li>-Tuning से specific tests select करो — scan time कम होगा</li>
          <li>HTML reports generate करो — clients को visually present करना आसान</li>
          <li>Nmap के साथ combine करो — port discovery + vulnerability scan</li>
          <li>False positives हमेशा manually verify करो — Nikto 100% accurate नहीं है</li>
          <li>IDS evasion techniques use करो production environments में</li>
          <li>Custom configuration file बनाओ — frequently used settings save करो</li>
          <li>Regular updates check करो — नई vulnerabilities के plugins add होते रहते हैं</li>
          <li>Batch scanning scripts बनाओ — multiple targets efficiently scan होंगे</li>
          <li>Nikto findings को Burp Suite में verify करो — manual confirmation ज़रूरी</li>
          <li>Regular database update करो — नए CVEs और vulnerabilities add होते रहते हैं</li>
          <li>Production environment में carefully scan करो — server crash हो सकता है</li>
          <li>Scan results को track करो — हर scan का report save करो और compare करो</li>
          <li>Docker से run करो — consistent environment मिलेगा, dependency issues नहीं</li>
          <li>Multiple output formats generate करो — HTML for viewing, CSV for analysis, JSON for automation</li>
          <li>Scan scope define करो — specific ports, specific tests, specific directories</li>
          <li>Error handling implement करो — scan failures handle करो gracefully</li>
          <li>Scan schedule बनाओ — regular scans automate करो (weekly/monthly)</li>
          <li>Team collaboration — scan results share करो, findings discuss करो, fixes track करो</li>
        </ul>
      </div>

      <div className="info-box mt-6">
        <strong>💡 अगला कदम:</strong> Nikto से वेब सर्वर स्कैनिंग सीखने के बाद{' '}
        <Link to="/tool/metasploit-framework" className="text-neon-green underline">Metasploit</Link> सेक्शन में जाएं
        और वेब एप्लिकेशन एक्सप्लॉइटेशन सीखें! Nikto से मिली वल्नरेबिलिटीज का इस्तेमाल Metasploit में करो।
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Nikto एक powerful web server vulnerability scanner है। इसका इस्तेमाल केवल authorized penetration testing और सुरक्षा शोध के लिए करें। बिना अनुमति के वेब सर्वर स्कैनिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत स्कैनिंग अपराध हो सकता है। केवल अपने lab वातावरण या लिखित authorization के साथ ही use करें। सभी रिजल्ट्स को एन्क्रिप्टेड रखो और अधिकृत लोगों के साथ ही शेयर करो।
      </div>
    
      <h2>Nikto ka Advanced Upyog aur Tips</h2>
      <p>Nikto ek web security testing tool hai jiska sahi tarike se upyog karne ke liye kuch advanced concepts aur techniques samajhna zaroori hai. Is section mein hum Nikto ke advanced features, best practices aur professional tips par baat karenge jo aapko ek better penetration tester banane mein madad karenge.</p>
      <p>Nikto ke advanced features mein se ek hai iski customization capability. Aap tool ke behavior ko modify kar sakte hain specific testing requirements ke according. Iske liye configuration files, command-line flags aur environment variables ka combination use kiya jata hai.</p>

      <h3>Professional Tips Nikto ke Liye</h3>
      <ul>
        <li><strong>Automation:</strong> Nikto ko shell scripts mein integrate karke repetitive tasks ko automate karein. Isse aapka time bachega aur efficiency badhegi.</li>
        <li><strong>Integration:</strong> Nikto ko other Kali Linux tools ke saath combine karke comprehensive security assessments karein. Multiple tools ka data cross-reference karke better insights milte hain.</li>
        <li><strong>Reporting:</strong> Nikto ke output ko structured format mein save karein aur professional penetration testing reports banane ke liye use karein.</li>
        <li><strong>Continuous Learning:</strong> Nikto ke official documentation, GitHub repository aur community forums ko regularly check karte rahein naye features aur techniques ke liye.</li>
        <li><strong>Ethical Practices:</strong> Hamesha responsible disclosure follow karein aur kabhi bhi unauthorized targets par test na karein.</li>
      </ul>

      <h3>Nikto ke Sath Common Mistakes</h3>
      <p>Nikto ka upyog karte waqt kuch common mistakes hoti hain jinse beginners ko bachna chahiye. Sabse common mistake hai bina proper authorization ke testing karna. Doosri common mistake hai results ko blindly trust karna bina manual verification ke. Third mistake hai tool ko update na karna jiski vajah se naye vulnerabilities detect nahi hoti.</p>
      <p>Nikto ke effective upyog ke liye patience aur practice dono zaroori hain. Pehle virtual labs mein practice karein, documentation padhein, aur phir real-world assessments mein iska upyog karein. Hamesha updated version use karein aur best practices follow karein.</p>

      <h3>Nikto ke Sath Career Growth</h3>
      <p>Nikto jaise web security testing tools ki knowledge aapke cybersecurity career mein bahut valuable hai. Companies web security professionals ko hire karti hain jo in tools ka effective upyog kar sake. Nikto ki expertise aapko bug bounty programs, penetration testing roles aur security auditor positions mein advantage deti hai.</p>
      <p>Web security testing skills develop karne ke liye Nikto ek starting point ho sakta hai. Iske baad aap more advanced tools aur techniques explore kar sakte hain. OSCP, CEH aur other cybersecurity certifications web security concepts ko cover karte hain aur Nikto in concepts ko practical way mein samajhne mein madad karta hai.</p>

      <div className="info-box">
        💡 <strong>Pro Tip:</strong> Nikto ke saath practical experience lene ke liye TryHackMe, HackTheBox aur VulnHub jaise platforms ka use karein. Ye platforms safe aur legal environment provide karte hain jahan aap apni skills practice kar sakte hain bina kisi legal concern ke.
      </div>

    
      <h2>Nikto का उन्नत उपयोग और सुझाव</h2>
      <p>Nikto एक web सुरक्षा परीक्षण टूल है जिसका सही तरीके से उपयोग करने के लिए कुछ उन्नत अवधारणाओं और तकनीकों को समझना ज़रूरी है। इस अनुभाग में हम Nikto के उन्नत सुविधाओं, सर्वोत्तम अभ्यासों और पेशेवर सुझावों पर बात करेंगे जो आपको एक बेहतर पेनिट्रेशन टेस्टर बनने में मदद करेंगे।</p>
      <p>Nikto की उन्नत विशेषताओं में से एक है इसकी अनुकूलन क्षमता। आप टूल के व्यवहार को संशोधित कर सकते हैं विशिष्ट परीक्षण आवश्यकताओं के अनुसार। इसके लिए कॉन्फ़िगरेशन फ़ाइलों, कमांड-लाइन फ्लैग और पर्यावरण चरों का संयोजन उपयोग किया जाता है। उन्नत उपयोगकर्ता कस्टम स्क्रिप्ट और प्लगइन्स भी बना सकते हैं।</p>

      <h3>पेशेवर सुझाव Nikto के लिए</h3>
      <ul>
        <li><strong>ऑटोमेशन:</strong> Nikto को शेल स्क्रिप्ट में इंटीग्रेट करके पुनरावर्ती कार्यों को स्वचालित करें। इससे आपका समय बचेगा और दक्षता बढ़ेगी।</li>
        <li><strong>एकीकरण:</strong> Nikto को अन्य काली लिनक्स टूल्स के साथ जोड़कर व्यापक सुरक्षा मूल्यांकन करें। कई टूल्स के डेटा को क्रॉस-रेफरेंस करके बेहतर जानकारी मिलती है।</li>
        <li><strong>रिपोर्टिंग:</strong> Nikto के आउटपुट को संरचित फॉर्मेट में सहेजें और पेशेवर पेनिट्रेशन टेस्टिंग रिपोर्ट बनाने के लिए उपयोग करें।</li>
        <li><strong>निरंतर सीखना:</strong> Nikto के आधिकारिक दस्तावेज़ीकरण, GitHub रिपॉजिटरी और सामुदायिक फोरम को नियमित रूप से चेक करते रहें नई सुविधाओं और तकनीकों के लिए।</li>
      </ul>

      <h3>Nikto के साथ सामान्य गलतियाँ</h3>
      <p>Nikto का उपयोग करते समय कुछ सामान्य गलतियाँ होती हैं जिनसे शुरुआती लोगों को बचना चाहिए। सबसे आम गलती है बिना उचित प्राधिकरण के परीक्षण करना। दूसरी आम गलती है परिणामों को आंख मूंदकर विश्वास करना बिना मैन्युअल सत्यापन के। तीसरी गलती है टूल को अपडेट न करना जिसके कारण नई कमजोरियां पता नहीं चलतीं।</p>
      <p>Nikto के प्रभावी उपयोग के लिए धैर्य और अभ्यास दोनों ज़रूरी हैं। पहले वर्चुअल लैब्स में अभ्यास करें, दस्तावेज़ीकरण पढ़ें, और फिर वास्तविक दुनिया के मूल्यांकनों में इसका उपयोग करें। हमेशा अपडेटेड वर्जन उपयोग करें और सर्वोत्तम अभ्यासों का पालन करें।</p>

      <h3>Nikto के साथ करियर विकास</h3>
      <p>Nikto जैसे web सुरक्षा परीक्षण टूल्स का ज्ञान आपके साइबर सुरक्षा करियर में बहुत मूल्यवान है। कंपनियां web सुरक्षा पेशेवरों को काम पर रखती हैं जो इन टूल्स का प्रभावी उपयोग कर सकें। Nikto की विशेषज्ञता आपको बग बाउंटी प्रोग्राम, पेनिट्रेशन टेस्टिंग भूमिकाओं और सुरक्षा ऑडिटर पदों में लाभ देती है।</p>
      <p>Web सुरक्षा परीक्षण कौशल विकसित करने के लिए Nikto एक शुरुआती बिंदु हो सकता है। इसके बाद आप और अधिक उन्नत टूल्स और तकनीकों का पता लगा सकते हैं। OSCP, CEH और अन्य साइबर सुरक्षा प्रमाणपत्र इन अवधारणाओं को व्यावहारिक तरीके से समझने में मदद करते हैं।</p>

      <div className="info-box">
        💡 <strong>विशेषज्ञ सुझाव:</strong> व्यावहारिक अनुभव लेने के लिए TryHackMe, HackTheBox और VulnHub जैसे प्लेटफॉर्म का उपयोग करें। ये प्लेटफॉर्म सुरक्षित और कानूनी वातावरण प्रदान करते हैं जहां आप बिना किसी कानूनी चिंता के अपने कौशल का अभ्यास कर सकते हैं।
      </div>

    
      

    
      <h2>महत्वपूर्ण नोट्स और निष्कर्ष</h2>
      <p>Nikto एक शक्तिशाली सुरक्षा परीक्षण उपकरण है जो काली लिनक्स में उपलब्ध है। इस टूल का सही तरीके से उपयोग करके आप अपने नेटवर्क और सिस्टम की सुरक्षा को मजबूत कर सकते हैं। Nikto का नियमित रूप से उपयोग करने से आप नई कमजोरियों को पहचान सकते हैं और उन्हें समय रहते ठीक कर सकते हैं। यह टूल विशेष रूप से सुरक्षा मूल्यांकन के लिए डिज़ाइन किया गया है और नियमित अभ्यास आवश्यक है।</p>
      <p>Nikto के साथ काम करते समय हमेशा निम्नलिखित बातों का ध्यान रखें:</p>
      <ul>
        <li>हमेशा अद्यतन संस्करण का उपयोग करें ताकि नवीनतम सुविधाओं और सुरक्षा पैच का लाभ मिल सके</li>
        <li>परीक्षण से पहले लक्ष्य प्रणाली के मालिक से स्पष्ट अनुमति प्राप्त करें</li>
        <li>परिणामों का सावधानीपूर्वक विश्लेषण करें और गलत सकारात्मक परिणामों की पहचान करें</li>
        <li>सुरक्षा कमजोरियों की खोज करने पर जिम्मेदार प्रकटीकरण का पालन करें</li>
        <li>अपने कौशल को लगातार बेहतर बनाने के लिए नियमित अभ्यास करते रहें</li>
        <li>दस्तावेज़ीकरण और सामुदायिक मंचों पर सक्रिय रहें</li>
        <li>विभिन्न परिदृश्यों में परीक्षण करें ताकि क्षमताओं की पूरी समझ हो सके</li>
        <li>अन्य सुरक्षा उपकरणों के साथ एकीकरण करके अधिक व्यापक मूल्यांकन करें</li>
      </ul>
      <p>साइबर सुरक्षा के क्षेत्र में Nikto जैसे उपकरणों का ज्ञान होना बहुत महत्वपूर्ण है। यह न केवल आपको सुरक्षा कमजोरियों की पहचान करने में मदद करता है बल्कि आपको एक जिम्मेदार सुरक्षा पेशेवर बनने में भी सहायता करता है। TryHackMe, HackTheBox और VulnHub जैसे प्लेटफॉर्म सुरक्षित अभ्यास वातावरण प्रदान करते हैं। नियमित अभ्यास से आप सभी विशेषताओं में महारत हासिल कर सकते हैं।</p>
      <p>साइबर सुरक्षा एक सतत सीखने की प्रक्रिया है। नई तकनीकों, उपकरणों और खतरों के बारे में अपडेट रहना जरूरी है। विभिन्न उपकरणों और तकनीकों का ज्ञान आपको एक बेहतर सुरक्षा पेशेवर बनाएगा। साइबर सुरक्षा समुदाय में सक्रिय रहें, ज्ञान साझा करें और दूसरों से सीखते रहें। यह क्षेत्र तेजी से बदलता है और निरंतर सीखने की आवश्यकता होती है। अपडेटेड रहने के लिए सुरक्षा ब्लॉग, समाचार और शोध पत्र पढ़ते रहें।</p>

      <div className="warning-box">
        ⚠️ <strong>अंतिम चेतावनी:</strong> इस टूल का उपयोग केवल शैक्षिक और अधिकृत सुरक्षा परीक्षण के लिए करें। दुरुपयोग गंभीर कानूनी परिणामों का कारण बन सकता है। हमेशा नैतिक दिशानिर्देशों का पालन करें और दूसरों की गोपनीयता का सम्मान करें। साइबर सुरक्षा एक जिम्मेदारी है, इसे गंभीरता से लें और अपने ज्ञान का उपयोग सकारात्मक बदलाव लाने के लिए करें।
      </div>

    </TutorialLayout>
  )
}