import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Nuclei() {
  return (
    <TutorialLayout
      title="nuclei"
      subtitle="टेम्पलेट-बेस्ड वल्नरेबिलिटी स्कैनर — 9000+ टेम्पलेट्स, CVEs, misconfigurations"
      icon="🎯"
      prev={{ to: '/tool/naabu', label: 'naabu' }}
      next={{ to: '/tool/katana', label: 'katana' }}
    >
      <h2>What is Nuclei?</h2>
      <p>
        Nuclei दुनिया का सबसे पॉपुलर ओपन सोर्स टेम्पलेट-बेस्ड वल्नरेबिलिटी स्कैनर है। यह 9000+ YAML टेम्पलेट्स का उपयोग करके web applications, networks, cloud infrastructure, और APIs में vulnerabilities detect करता है। CVEs, misconfigurations, exposed panels, default credentials, XSS, SQLi, SSRF — सब कुछ एक ही टूल से स्कैन कर सकते हो।
      </p>
      <p>
        Nuclei को ProjectDiscovery टीम ने बनाया है — Rajesh Panchal और Sandeep Singh इसके lead developers हैं। यह Go भाषा में लिखा गया है जो इसे बहुत तेज़ और efficient बनाता है। एक साथ हज़ारों targets स्कैन कर सकता हो बिना performance compromise किए। यह काली नेटहंटर में प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        Nuclei की सबसे बड़ी खासियत है इसका template system। कोई भी नई vulnerability discover होने पर community तुरंत YAML template बना देती है — कभी-कभी CVE publish होने के कुछ घंटों के अंदर ही। इसलिए Nuclei हमेशा latest vulnerabilities को detect कर सकता है। आप अपने custom templates भी बना सकते हो specific use cases के लिए।
      </p>
      <p>
        Nuclei bug bounty hunters, penetration testers, red teamers, और security researchers सभी के लिए essential tool है। यह CI/CD pipelines में integrate हो सकता है — हर code push पर automatically vulnerabilities check हो जाती हैं। GitHub पर 20,000+ stars के साथ यह सबसे popular security tools में से एक है।
      </p>
      <p>
        Nuclei सिर्फ web scanning नहीं करता — यह DNS, TCP, SSL/TLS, WHOIS, और file protocols भी support करता है। इसका template system बहुत flexible है — simple GET request से लेकर complex multi-step authentication flows तक सब define कर सकते हो। यह Burp Suite, OWASP ZAP, और Nessus जैसे commercial tools का free alternative है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Nuclei केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए उपयोग करें। बिना अनुमति के vulnerability scanning अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत स्कैनिंग अपराध हो सकता है। Nuclei PoC requests भेजता है — production systems पर सावधानी से use करें।
      </div>

      <h2>History of Nuclei</h2>
      <p>
        Nuclei की शुरुआत 2019 में हुई जब ProjectDiscovery टीम ने महसूस किया कि existing vulnerability scanners बहुत slow हैं और उनके templates outdated हैं। Rajesh Panchal और Sandeep Singh ने Go में एक नया scanner बनाया जो YAML-based templates use करे। यह approach revolutionary थी — templates लिखना बहुत आसान हो गया।
      </p>
      <p>
        2020 में Nuclei v2 release हुआ जिसमें बहुत सारे improvements थे — better template engine, faster scanning, और more protocol support। Community ने templates contribute करना शुरू किया और कुछ ही महीनों में 1000+ templates हो गए। 2021 में Nuclei ने Nikto और Nmap NSE को पीछे छोड़ दिया template count में।
      </p>
      <p>
        2022 में Nuclei v3 release हुआ — JavaScript-based template support, better cloud scanning, और AI-assisted template generation। आज Nuclei 9000+ templates के साथ सबसे comprehensive vulnerability scanner है। ProjectDiscovery ने nuclei के अलावा subfinder, httpx, naabu, katana जैसे कई और popular tools भी बनाए हैं।
      </p>

      <h2>How Nuclei Works?</h2>
      <p>
        Nuclei template-based approach use करता है — हर template एक specific vulnerability check करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Template Engine:</strong> YAML templates load करता है — 9000+ built-in templates, custom templates भी support</li>
        <li><strong className="text-white">Protocol Handlers:</strong> HTTP, DNS, TCP, SSL/TLS, WHOIS, WebSocket, और file protocols handle करता है</li>
        <li><strong className="text-white">Request Builder:</strong> Template के अनुसार HTTP requests बनाता है — GET, POST, PUT, DELETE सब support</li>
        <li><strong className="text-white">Matcher Engine:</strong> Response को matchers से compare करता है — word, regex, binary, DSL matchers</li>
        <li><strong className="text-white">Extractor System:</strong> Response से data extract करता है — regex, JSON, XPath, Kval, DSL extractors</li>
        <li><strong className="text-white">Variable System:</strong> Dynamic variables support — environment, template, और extracted variables</li>
        <li><strong className="text-white">Multi-Step:</strong> Complex attack chains — login → navigate → exploit</li>
        <li><strong className="text-white">Parallel Scanning:</strong> Go routines से concurrent scanning — बहुत fast</li>
      </ul>

      <h2>Installation</h2>
      <CodeBlock
        title="Nuclei Installation"
        code={`# Go से install (recommended):
go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest

# apt से:
sudo apt update
sudo apt install nuclei

# Snap से:
sudo snap install nuclei

# Docker से:
docker pull projectdiscovery/nuclei:latest
docker run projectdiscovery/nuclei:latest -u https://target.com

# Binary download:
# GitHub releases से download करो
# https://github.com/projectdiscovery/nuclei/releases

# Version check:
nuclei -version

# Templates download/update:
nuclei -update-templates

# Template stats देखो:
nuclei -tl

# Template count by severity:
nuclei -tl | grep -c "critical"
nuclei -tl | grep -c "high"`}
      />

      <h2>Basic Usage</h2>
      <CodeBlock
        title="Simple Scans"
        code={`# Basic scan:
nuclei -u http://target.com

# Multiple targets:
nuclei -l urls.txt

# Specific templates:
nuclei -u http://target.com -t cves/

# Severity filter:
nuclei -u http://target.com -severity critical,high

# Output to file:
nuclei -u http://target.com -o results.txt

# Verbose output:
nuclei -u http://target.com -v

# JSON output:
nuclei -u http://target.com -json -o results.json

# Silent mode (सिर्फ findings):
nuclei -u http://target.com -silent

# Stats display:
nuclei -u http://target.com -stats

# Markdown output:
nuclei -u http://target.com -markdown -o report.md`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-u</td><td className="py-2 px-3">Target URL</td><td className="py-2 px-3 font-mono text-xs">-u https://target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-l</td><td className="py-2 px-3">Target list file</td><td className="py-2 px-3 font-mono text-xs">-l urls.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t</td><td className="py-2 px-3">Template path</td><td className="py-2 px-3 font-mono text-xs">-t cves/2024/</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-tags</td><td className="py-2 px-3">Tags से filter</td><td className="py-2 px-3 font-mono text-xs">-tags xss,sqli</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-severity</td><td className="py-2 px-3">Severity से filter</td><td className="py-2 px-3 font-mono text-xs">-severity critical,high</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o</td><td className="py-2 px-3">Output file</td><td className="py-2 px-3 font-mono text-xs">-o results.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-json</td><td className="py-2 px-3">JSON output</td><td className="py-2 px-3 font-mono text-xs">-json -o results.json</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-rl</td><td className="py-2 px-3">Rate limit (req/sec)</td><td className="py-2 px-3 font-mono text-xs">-rl 100</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c</td><td className="py-2 px-3">Concurrency</td><td className="py-2 px-3 font-mono text-xs">-c 50</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-bs</td><td className="py-2 px-3">Bulk size</td><td className="py-2 px-3 font-mono text-xs">-bs 25</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">Verbose output</td><td className="py-2 px-3 font-mono text-xs">-v</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-proxy</td><td className="py-2 px-3">Proxy URL</td><td className="py-2 px-3 font-mono text-xs">-proxy http://127.0.0.1:8080</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-H</td><td className="py-2 px-3">Custom header</td><td className="py-2 px-3 font-mono text-xs">-H "Authorization: Bearer xxx"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-update-templates</td><td className="py-2 px-3">Templates update</td><td className="py-2 px-3 font-mono text-xs">-update-templates</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-stats</td><td className="py-2 px-3">Statistics show</td><td className="py-2 px-3 font-mono text-xs">-stats</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-var</td><td className="py-2 px-3">Custom variables</td><td className="py-2 px-3 font-mono text-xs">-var token=abc123</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-author</td><td className="py-2 px-3">Author filter</td><td className="py-2 px-3 font-mono text-xs">-author pdteam</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Template Categories</h2>
      <p>
        Nuclei 9000+ templates कई categories में divided हैं:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Category</th>
              <th className="text-left py-2 px-3 text-neon-green">Description</th>
              <th className="text-left py-2 px-3 text-neon-green">Examples</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">cves/</td><td className="py-2 px-3">Known CVEs — सबसे important</td><td className="py-2 px-3">Log4Shell, Spring4Shell, ProxyLogon</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">misconfiguration/</td><td className="py-2 px-3">Server misconfigurations</td><td className="py-2 px-3">Default creds, open redirects, CORS</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">exposures/</td><td className="py-2 px-3">Exposed panels, sensitive files</td><td className="py-2 px-3">Admin panels, .env, .git, .DS_Store</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">default-logins/</td><td className="py-2 px-3">Default credentials</td><td className="py-2 px-3">admin:admin, root:root, tomcat:tomcat</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">vulnerabilities/</td><td className="py-2 px-3">General vulnerabilities</td><td className="py-2 px-3">XSS, SQLi, SSRF, RCE, LFI, IDOR</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">technologies/</td><td className="py-2 px-3">Technology detection</td><td className="py-2 px-3">WordPress, Apache, Nginx, React, Vue</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">network/</td><td className="py-2 px-3">Network vulnerabilities</td><td className="py-2 px-3">Open ports, service detection, SMB</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dns/</td><td className="py-2 px-3">DNS issues</td><td className="py-2 px-3">Subdomain takeover, zone transfer</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">cloud/</td><td className="py-2 px-3">Cloud misconfigurations</td><td className="py-2 px-3">AWS S3, Azure blobs, GCP</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ssl/</td><td className="py-2 px-3">SSL/TLS issues</td><td className="py-2 px-3">Expired certs, weak ciphers, Heartbleed</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">takeovers/</td><td className="py-2 px-3">Subdomain takeovers</td><td className="py-2 px-3">GitHub, Heroku, AWS, S3 takeover</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Template Selection and Filtering</h2>
      <CodeBlock
        title="Template Filtering"
        code={`# Specific template:
nuclei -u target -t cves/2024/CVE-2024-1234.yaml

# Multiple template directories:
nuclei -u target -t cves/ -t misconfiguration/ -t exposures/

# By tags:
nuclei -u target -tags xss,sqli,rce,lfi

# By severity:
nuclei -u target -severity critical,high,medium

# By author:
nuclei -u target -author pdteam

# Exclude templates:
nuclei -u target -exclude-tags dos,brute-force,fuzz

# Template list:
nuclei -tl

# Template count by severity:
nuclei -tl | grep -c "critical"
nuclei -tl | grep -c "high"

# Template validate:
nuclei -validate -t custom-template.yaml

# Templates update:
nuclei -update-templates`}
      />

      <h2>Performance Tuning</h2>
      <CodeBlock
        title="Speed and Performance"
        code={`# Rate limit (requests per second):
nuclei -u target -rl 100

# Concurrency (parallel templates):
nuclei -u target -c 50

# Bulk size (requests per template):
nuclei -u target -bs 25

# Timeout:
nuclei -u target -timeout 10

# Retries:
nuclei -u target -retries 2

# Template threads:
nuclei -u target -concurrency 25

# Headless browser (JavaScript rendering):
nuclei -u target -headless

# Automatic WAF bypass:
nuclei -u target -waf-bypass

# System resources limit:
nuclei -u target -system-resolvers

# Custom DNS resolver:
nuclei -u target -resolver 8.8.8.8`}
      />

      <h2>Authentication Support</h2>
      <CodeBlock
        title="Authenticated Scanning"
        code={`# Header-based auth:
nuclei -u target -H "Authorization: Bearer token123"

# Cookie-based:
nuclei -u target -H "Cookie: session=abc123"

# Basic auth:
nuclei -u target -H "Authorization: Basic dXNlcjpwYXNz"

# Custom headers (multiple):
nuclei -u target -H "X-API-Key: key123" -H "X-Custom: value"

# Template-based auth:
# templates/auth/login.yaml में login flow define करो
# फिर nuclei automatically login करेगा scan से पहले

# Cookie from file:
nuclei -u target -H "Cookie: $(cat cookies.txt)"`}
      />

      <h2>Custom Template Creation</h2>
      <p>
        Nuclei templates YAML format में लिखे जाते हैं — बहुत आसान syntax है।
      </p>
      <CodeBlock
        title="Basic HTTP Template"
        code={`# custom-template.yaml:
id: custom-admin-panel

info:
  name: Admin Panel Detection
  author: security-team
  severity: info
  description: Admin panel detect करता है
  tags: admin,panel,detect
  reference:
    - https://example.com/reference

requests:
  - method: GET
    path:
      - "{{BaseURL}}/admin"
      - "{{BaseURL}}/admin/login"
      - "{{BaseURL}}/administrator"
      - "{{BaseURL}}/wp-admin"
      - "{{BaseURL}}/cpanel"
    matchers-condition: and
    matchers:
      - type: status
        status:
          - 200
      - type: word
        words:
          - "Admin Panel"
          - "Login"
          - "Dashboard"
        condition: or
    extractors:
      - type: regex
        group: 1
        regex:
          - "version.*?([0-9.]+)"

# Run:
nuclei -u target -t custom-template.yaml`}
      />

      <CodeBlock
        title="CVE Detection Template"
        code={`# cve-template.yaml:
id: CVE-2024-1234

info:
  name: Example CVE Detection
  author: security-researcher
  severity: critical
  description: Remote Code Execution vulnerability
  classification:
    cvss-metrics: CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
    cvss-score: 9.8
    cve-id: CVE-2024-1234
    cwe-id: CWE-78
  tags: cve,rce,critical

requests:
  - method: POST
    path:
      - "{{BaseURL}}/api/vulnerable"
    headers:
      Content-Type: application/json
    body: |
      {"command": "id"}
    matchers-condition: and
    matchers:
      - type: word
        words:
          - "uid="
          - "gid="
        condition: and
      - type: status
        status:
          - 200`}
      />

      <CodeBlock
        title="Network (TCP) Template"
        code={`# network-template.yaml:
id: ftp-anonymous-login

info:
  name: FTP Anonymous Login
  author: security-team
  severity: medium
  description: FTP server anonymous access enabled
  tags: network,ftp,anonymous

tcp:
  - inputs:
      - data: "USER anonymous\\r\\n"
      - read: 1024
      - data: "PASS anonymous@\\r\\n"
      - read: 1024
    host:
      - "{{Hostname}}"
    port: 21
    matchers-condition: and
    matchers:
      - type: word
        words:
          - "230"
          - "Login successful"
        condition: and`}
      />

      <h2>Pipeline Integration</h2>
      <p>
        Nuclei को recon pipeline में integrate करना बहुत आसान है:
      </p>
      <CodeBlock
        title="Automation Pipeline"
        code={`# Subfinder -> httpx -> Nuclei (classic pipeline):
subfinder -d target.com -silent | httpx -silent | nuclei

# Step-by-step:
subfinder -d target.com -o subs.txt
httpx -l subs.txt -o alive.txt
nuclei -l alive.txt -severity critical,high -o vulns.txt

# Full recon pipeline:
subfinder -d target.com -silent > subs.txt
httpx -list subs.txt -silent > alive.txt
nuclei -list alive.txt -severity critical,high -json -o vulns.json

# One-liner (सब कुछ एक line में):
subfinder -d target.com -silent | httpx -silent | nuclei -severity critical -silent

# CI/CD integration:
nuclei -u $TARGET_URL -severity critical -exit-code
# Exit code non-zero होगा अगर critical findings मिलें

# With custom templates:
nuclei -l urls.txt -t custom-templates/ -o results.txt

# Scheduled scan (cron):
# 0 2 * * * /usr/local/bin/nuclei -l targets.txt -severity critical,high -json -o /var/log/nuclei/$(date +%Y%m%d).json`}
      />

      <h2>Nuclei vs Other Scanners</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">Nuclei</th>
              <th className="text-left py-2 px-3 text-neon-green">Nikto</th>
              <th className="text-left py-2 px-3 text-neon-green">Nmap NSE</th>
              <th className="text-left py-2 px-3 text-neon-green">OWASP ZAP</th>
              <th className="text-left py-2 px-3 text-neon-green">Nessus</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Templates</td><td className="py-2 px-3">9000+</td><td className="py-2 px-3">7000+</td><td className="py-2 px-3">600+</td><td className="py-2 px-3">Active Scan</td><td className="py-2 px-3">170,000+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Language</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Perl</td><td className="py-2 px-3">Lua</td><td className="py-2 px-3">Java</td><td className="py-2 px-3">Proprietary</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">Very Fast</td><td className="py-2 px-3">Slow</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Fast</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Custom Templates</td><td className="py-2 px-3">YAML (easy)</td><td className="py-2 px-3">Perl</td><td className="py-2 px-3">Lua</td><td className="py-2 px-3">Java/Python</td><td className="py-2 px-3">Nessus DSL</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Pipeline</td><td className="py-2 px-3">Built-in</td><td className="py-2 px-3">No</td><td className="py-2 px-3">Piping</td><td className="py-2 px-3">API</td><td className="py-2 px-3">API</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Community</td><td className="py-2 px-3">Very Active</td><td className="py-2 px-3">Slow</td><td className="py-2 px-3">Active</td><td className="py-2 px-3">Active</td><td className="py-2 px-3">Commercial</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Cloud Support</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">No</td><td className="py-2 px-3">Limited</td><td className="py-2 px-3">No</td><td className="py-2 px-3">Yes</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Best For</td><td className="py-2 px-3">Automation</td><td className="py-2 px-3">Web servers</td><td className="py-2 px-3">Network</td><td className="py-2 px-3">Web apps</td><td className="py-2 px-3">Enterprise</td></tr>
            <tr><td className="py-2 px-3 text-white">Price</td><td className="py-2 px-3">Free</td><td className="py-2 px-3">Free</td><td className="py-2 px-3">Free</td><td className="py-2 px-3">Free</td><td className="py-2 px-3">$$$ (paid)</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Automated Scan Script</h2>
      <CodeBlock
        title="Full Automation Script"
        code={`#!/bin/bash
# Nuclei automated recon script

DOMAIN=$1
OUTPUT="nuclei_results_$(date +%Y%m%d)"
mkdir -p $OUTPUT

echo "[*] Starting recon for $DOMAIN..."

# Step 1: Subdomain discovery
echo "[*] Finding subdomains..."
subfinder -d $DOMAIN -silent > $OUTPUT/subs.txt
echo "[+] Found $(wc -l < $OUTPUT/subs.txt) subdomains"

# Step 2: Alive check
echo "[*] Checking alive hosts..."
httpx -list $OUTPUT/subs.txt -silent > $OUTPUT/alive.txt
echo "[+] Found $(wc -l < $OUTPUT/alive.txt) alive hosts"

# Step 3: Port scan (optional)
echo "[*] Port scanning..."
naabu -list $OUTPUT/alive.txt -silent > $OUTPUT/ports.txt

# Step 4: Nuclei scan (critical + high)
echo "[*] Running Nuclei scan (critical/high)..."
nuclei -list $OUTPUT/alive.txt -severity critical,high -json -o $OUTPUT/vulns_critical.json

# Step 5: Nuclei scan (medium + low + info)
echo "[*] Running Nuclei scan (medium/low/info)..."
nuclei -list $OUTPUT/alive.txt -severity medium,low,info -json -o $OUTPUT/vulns_other.json

# Step 6: Summary
CRITICAL=$(grep -c '"critical"' $OUTPUT/vulns_critical.json 2>/dev/null || echo 0)
HIGH=$(grep -c '"high"' $OUTPUT/vulns_critical.json 2>/dev/null || echo 0)

echo ""
echo "=== SCAN SUMMARY ==="
echo "Domain: $DOMAIN"
echo "Subdomains: $(wc -l < $OUTPUT/subs.txt)"
echo "Alive hosts: $(wc -l < $OUTPUT/alive.txt)"
echo "Critical: $CRITICAL"
echo "High: $HIGH"
echo "Results saved in: $OUTPUT/"`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Python Automation"
        code={`#!/usr/bin/env python3
# Nuclei automation with Python

import subprocess
import json
import sys

def run_nuclei(target, severity="critical,high"):
    cmd = f"nuclei -u {target} -severity {severity} -json"
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    findings = []
    for line in result.stdout.strip().split("\\n"):
        if line:
            findings.append(json.loads(line))
    return findings

def analyze_findings(findings):
    critical = [f for f in findings if f.get("info", {}).get("severity") == "critical"]
    high = [f for f in findings if f.get("info", {}).get("severity") == "high"]
    return critical, high

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "http://localhost"
    print(f"[*] Scanning {target}...")
    findings = run_nuclei(target)
    critical, high = analyze_findings(findings)
    print(f"[+] Critical: {len(critical)}")
    print(f"[+] High: {len(high)}")
    for f in critical:
        print(f"  [-] {f['info']['name']}: {f.get('matched-at', 'N/A')}"`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Templates not found error', a: 'nuclei -update-templates चलाओ। ~/.nuclei-templates/ directory check करो। Custom path: nuclei -u target -t /path/to/templates/' },
          { q: 'Scan बहुत slow है', a: 'Concurrency बढ़ाओ: -c 100। Rate limit बढ़ाओ: -rl 500। Specific templates use करो: -severity critical। Heavy templates skip करो: -exclude-tags dos,brute-force' },
          { q: 'False positives बहुत हैं', a: 'Severity filter use करो: -severity critical,high। Specific templates: -t cves/। Noisy templates exclude: -exclude-tags fuzz। Verify mode: -verify' },
          { q: 'WAF block कर रहा है', a: 'Rate limit कम करो: -rl 50। Proxy use करो: -proxy http://127.0.0.1:8080। WAF bypass mode: -waf-bypass। Custom headers add करो: -H "X-Forwarded-For: 127.0.0.1"' },
          { q: 'Memory error आ रहा है', a: 'Bulk size कम करो: -bs 10। Concurrency कम करो: -c 25। Specific templates only: -severity critical। -system-resolvers use करो' },
          { q: 'Templates update नहीं हो रहे', a: 'Network connection check करो। GitHub access check करो। Manual download: github.com/projectdiscovery/nuclei-templates। Custom path: nuclei -t /path/' },
          { q: 'JSON output parse नहीं हो रहा', a: 'हर line एक JSON object है। jq use करो: nuclei -u target -json | jq .। Python में: json.loads(line) for line in stdout.split("\\n")' },
          { q: 'Timeout error आ रहा है', a: 'Timeout बढ़ाओ: -timeout 30। Retries बढ़ाओ: -retries 3। Network check करो। Proxy use करो अगर direct connection slow है' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Nuclei scans से कैसे बचें:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">WAF:</strong> Web Application Firewall deploy करो — Nuclei requests detect और block करता है</li>
        <li><strong className="text-white">Rate Limiting:</strong> Per-IP request limit लगाओ — automated scanning slow होगी</li>
        <li><strong className="text-white">User-Agent Detection:</strong> Nuclei default User-Agent detect करके block करो</li>
        <li><strong className="text-white">IP Blocking:</strong> Suspicious IPs temporarily block करो (fail2ban)</li>
        <li><strong className="text-white">Captcha:</strong> Repeated requests पर CAPTCHA show करो</li>
        <li><strong className="text-white">Patch Management:</strong> Latest security patches apply रखो — CVE templates काम नहीं करेंगे</li>
        <li><strong className="text-white">Input Validation:</strong> सभी user inputs validate करो — XSS, SQLi templates fail होंगे</li>
        <li><strong className="text-white">Security Headers:</strong> CSP, X-Frame-Options, HSTS set करो</li>
        <li><strong className="text-white">Default Credentials:</strong> Default passwords बदलो — default-login templates useless होंगे</li>
        <li><strong className="text-white">Monitoring:</strong> Unusual scanning patterns detect करो और alerting setup करो</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <CodeBlock
        title="Practice Lab"
        code={`# Practice vulnerable apps:
# 1. DVWA (Damn Vulnerable Web Application)
docker run --rm -it -p 80:80 vulnerables/web-dvwa

# 2. WebGoat
docker run --rm -it -p 8080:8080 webgoat/webgoat

# 3. Juice Shop (OWASP)
docker run --rm -it -p 3000:3000 bkimminich/juice-shop

# 4. Metasploitable
# VirtualBox में Metasploitable VM run करो

# Nuclei practice:
# DVWA scan:
nuclei -u http://localhost -t vulnerabilities/ -severity medium,high

# Juice Shop scan:
nuclei -u http://localhost:3000 -t vulnerabilities/ -v

# Custom template test:
nuclei -u http://localhost -t custom-template.yaml -v`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Nuclei Usage"
        code={`# Multi-step attack (login + exploit):
# templates/multi-step.yaml:
id: authenticated-rce
requests:
  - raw:
      - |
        POST /login HTTP/1.1
        Host: {{Hostname}}
        Content-Type: application/x-www-form-urlencoded
        user=admin&pass=admin
      - |
        GET /admin/execute?cmd=id HTTP/1.1
        Host: {{Hostname}}
    cookie-reuse: true
    matchers:
      - type: word
        words:
          - "uid="

# JavaScript-based templates:
id: js-template
info:
  name: JS Template Example
  severity: info
javascript:
  - code: |
      let resp = http.request("GET", "http://{{Hostname}}/api");
      let body = resp.body;
      log(to_json(body));
    matchers:
      - type: word
        words:
          - "version"

# Cloud scanning:
nuclei -u https://s3.amazonaws.com -t cloud/

# SSL/TLS scanning:
nuclei -u target -t ssl/ -severity high,critical

# DNS scanning:
nuclei -u target.com -t dns/ -severity medium,high`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Nuclei kaise kaam karta hai?', a: 'YAML templates se। Har template ek specific vulnerability check karta hai। HTTP request bhejta hai, response match karta hai, agar match ho toh report karta hai। 9000+ built-in templates hain।' },
          { q: 'Kitne templates hain?', a: '9000+ community templates। Regularly update hote hain — nuclei -update-templates se latest download karo। Custom templates bhi bana sakte ho।' },
          { q: 'Kya Nuclei exploit karta hai?', a: 'Nahi, Nuclei sirf detect karta hai — exploit nahi karta। PoC (Proof of Concept) requests bhejta hai lekin actual exploitation nahi karta।' },
          { q: 'Custom templates kaise banayein?', a: 'YAML format mein। nuclei -tl se existing templates dekho aur seekho। HTTP, TCP, DNS, SSL, WebSocket, file protocols support hain। docs.nuclei.sh पर documentation है।' },
          { q: 'CI/CD mein kaise integrate karein?', a: 'nuclei -u $TARGET -severity critical -exit-code। Exit code non-zero होगा अगर critical findings मिलें — pipeline fail हो जाएगा। GitHub Actions, GitLab CI, Jenkins सब support।' },
          { q: 'Nuclei vs Nessus — कौन better है?', a: 'Nuclei free है और templates easy हैं। Nessus commercial है लेकिन ज़्यादा comprehensive। Nuclei automation के लिए best, Nessus enterprise compliance के लिए।' },
          { q: 'Templates कहाँ store होते हैं?', a: '~/.nuclei-templates/ directory में। nuclei -update-templates से download/update होते हैं। Custom templates किसी भी path पर रख सकते हो।' },
          { q: 'Rate limiting कैसे set करें?', a: '-rl 100 (100 requests/sec)। WAF block कर रहा है तो -rl 50 try करो। -c 25 (concurrency) भी कम करो अगर issues हों।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        Nuclei real-world penetration testing और bug bounty में बहुत effectively use होता है। यहाँ कुछ actual scenarios हैं जहाँ Nuclei ने critical vulnerabilities discover की हैं:
      </p>
      <p>
        <strong className="text-white">Case Study 1 — Log4Shell Mass Scanning:</strong> जब December 2021 में Log4Shell (CVE-2021-44228) disclose हुआ, तो Nuclei community ने कुछ ही घंटों में template बना दिया। Bug bounty hunters ने Nuclei का use करके हज़ारों vulnerable systems discover किए। ProjectDiscovery ने खुद mass scanning campaign चलाया और affected organizations को notify किया। यह incident Nuclei की speed और community response capability का best example है।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — Spring4Shell Detection:</strong> March 2022 में Spring4Shell (CVE-2022-22965) आया। Nuclei template 2 घंटे के अंदर ready था। Security teams ने अपने infrastructure scan करके vulnerable Spring applications identify किए। CI/CD pipelines में Nuclei integrate करने वाली companies को automatically alert मिल गया — manual intervention की ज़रूरत नहीं पड़ी।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — Bug Bounty Subdomain Takeover:</strong> एक bug bounty hunter ने subfinder + httpx + nuclei pipeline use करके Fortune 500 company के 3 subdomain takeovers discover किए। Nuclei के takeover templates (GitHub, Heroku, AWS S3) ने automatically vulnerable subdomains detect कर लिए। Hunter को $15,000 का bounty मिला। यह demonstrate करता है कि Nuclei pipeline automation कितनी powerful है।
      </p>
      <p>
        <strong className="text-white">Case Study 4 — Enterprise Security Audit:</strong> एक Indian IT company ने अपने 500+ web applications को Nuclei से scan किया। 47 critical vulnerabilities मिलीं — exposed admin panels, default credentials, outdated software। Automated daily scanning setup करने के बाद, नई vulnerabilities within hours detect होने लगीं। यह enterprise-scale security automation का perfect example है।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Nuclei को दूसरे security tools के साथ combine करके comprehensive recon और vulnerability assessment pipeline बना सकते हो:
      </p>
      <CodeBlock
        title="Nuclei + ProjectDiscovery Ecosystem"
        code={`# Classic pipeline: subfinder → httpx → nuclei
subfinder -d target.com -silent | httpx -silent | nuclei -severity critical,high

# With naabu (port scanning):
naabu -list targets.txt -silent | httpx -silent | nuclei

# With katana (web crawling):
katana -u http://target.com -silent | nuclei

# Full recon pipeline:
# Step 1: Subdomain discovery
subfinder -d target.com -silent > subs.txt
# Step 2: Alive check
httpx -l subs.txt -silent > alive.txt
# Step 3: Port scan
naabu -l alive.txt -silent > ports.txt
# Step 4: Web crawl
katana -l alive.txt -silent > urls.txt
# Step 5: Vulnerability scan
nuclei -l urls.txt -severity critical,high -json -o vulns.json

# Nuclei + Burp Suite:
# Burp proxy ke through nuclei scan:
nuclei -u target -proxy http://127.0.0.1:8080
# Burp mein requests dekho aur analyze karo

# Nuclei + Nmap:
nmap -sV target -oX scan.xml
# Nmap results se URLs extract karo
cat scan.xml | grep -oP 'http[^<]+' | nuclei

# Nuclei + Amass:
amass enum -d target.com > subs.txt
httpx -l subs.txt -silent | nuclei -severity critical`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Nuclei multiple output formats support करता है जो reporting और analysis के लिए बहुत useful हैं:
      </p>
      <CodeBlock
        title="Output Formats and Analysis"
        code={`# JSON output (best for automation):
nuclei -u target -json -o results.json
# Har line ek JSON object hai

# jq se analysis:
cat results.json | jq '.info.severity' | sort | uniq -c
# Severity distribution दिखाएगा

cat results.json | jq 'select(.info.severity=="critical")'
# Sirf critical findings

# Markdown report:
nuclei -u target -markdown -o report.md
# Direct share कर सकते हो

# SARIF output (GitHub CodeQL compatible):
nuclei -u target -sarif -o results.sarif

# CSV-like output:
nuclei -u target -silent | tee results.txt
# Simple text output

# Statistics during scan:
nuclei -u target -stats
# Live scanning statistics दिखाएगा

# Detailed report script:
#!/bin/bash
nuclei -l targets.txt -json -o raw_results.json
echo "=== Vulnerability Report ===" > report.txt
echo "Critical: $(grep -c '"critical"' raw_results.json)" >> report.txt
echo "High: $(grep -c '"high"' raw_results.json)" >> report.txt
echo "Medium: $(grep -c '"medium"' raw_results.json)" >> report.txt
echo "Low: $(grep -c '"low"' raw_results.json)" >> report.txt
echo "" >> report.txt
jq -r '[.info.severity, .info.name, ."matched-at"] | @tsv' raw_results.json >> report.txt`}
      />

      <h2>WAF Bypass Techniques</h2>
      <p>
        Web Application Firewalls Nuclei requests detect और block कर सकते हैं। WAF bypass के लिए कई techniques available हैं:
      </p>
      <CodeBlock
        title="WAF Bypass"
        code={`# Rate limiting:
nuclei -u target -rl 50
# 50 requests per second — WAF trigger nahi hoga

# Custom User-Agent:
nuclei -u target -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)"

# Proxy rotation:
nuclei -u target -proxy http://proxy1:8080

# Request delay:
nuclei -u target -rl 10

# WAF bypass mode (built-in):
nuclei -u target -waf-bypass

# Custom headers (IP spoofing):
nuclei -u target -H "X-Forwarded-For: 127.0.0.1" -H "X-Real-IP: 10.0.0.1"

# Chunked transfer encoding:
nuclei -u target -H "Transfer-Encoding: chunked"

# Exclude heavy templates:
nuclei -u target -exclude-tags dos,fuzz,brute-force
# Heavy requests WAF easily detect karte hain`}
      />

      <h2>Frequent Template Updates</h2>
      <p>
        Nuclei templates regularly update होते हैं — नए CVEs और vulnerabilities के templates community quickly बनाती है:
      </p>
      <CodeBlock
        title="Template Management"
        code={`# Templates update:
nuclei -update-templates

# Template list (all):
nuclei -tl

# Template count by severity:
echo "Critical: $(nuclei -tl 2>/dev/null | grep -c critical)"
echo "High: $(nuclei -tl 2>/dev/null | grep -c high)"
echo "Medium: $(nuclei -tl 2>/dev/null | grep -c medium)"

# Template validate (custom):
nuclei -validate -t my-template.yaml

# Custom template directory:
mkdir ~/my-templates
# Templates rakhao aur scan karo:
nuclei -u target -t ~/my-templates/

# Template statistics:
nuclei -tl -stats

# Specific author ke templates:
nuclei -u target -author pdteam

# Recent templates only:
nuclei -u target -t cves/2024/

# Template severity distribution:
nuclei -tl | awk '{print $2}' | sort | uniq -c | sort -rn`}
      />

      <h2>CI/CD Security Integration</h2>
      <p>
        Nuclei को CI/CD pipelines में integrate करके automated security gate बना सकते हो। हर code push पर automatically vulnerability scan होता है:
      </p>
      <CodeBlock
        title="GitHub Actions Integration"
        code={`# .github/workflows/nuclei-scan.yml:
name: Nuclei Security Scan
on:
  push:
    branches: [main]
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM

jobs:
  nuclei-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Nuclei
        run: |
          go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest
          nuclei -update-templates
      - name: Run Nuclei
        run: |
          nuclei -u ${{ secrets.TARGET_URL }} -severity critical,high -json -o results.json
      - name: Check Results
        run: |
          CRITICAL=$(grep -c '"critical"' results.json || echo 0)
          if [ "$CRITICAL" -gt "0" ]; then
            echo "Critical vulnerabilities found!"
            exit 1
          fi`}
      />

      <CodeBlock
        title="GitLab CI Integration"
        code={`# .gitlab-ci.yml:
nuclei-scan:
  stage: security
  image: projectdiscovery/nuclei:latest
  script:
    - nuclei -update-templates
    - nuclei -u $TARGET_URL -severity critical,high -exit-code -o results.json
  artifacts:
    paths:
      - results.json
  only:
    - main
    - schedules`}
      />

      <h2>Nuclei Cloud Platform</h2>
      <p>
        ProjectDiscovery ने Nuclei का cloud version भी launch किया है — PDCP (ProjectDiscovery Cloud Platform)। यह Nuclei को as a service provide करता है:
      </p>
      <CodeBlock
        title="Cloud Platform Usage"
        code={`# PDCP (ProjectDiscovery Cloud Platform):
# https://cloud.projectdiscovery.io पर sign up करो

# CLI se cloud connect करो:
nuclei -u target -cloud

# Cloud scanning benefits:
# - Distributed scanning (multiple locations)
# - Scheduled scans
# - Team collaboration
# - Historical scan data
# - API access

# Cloud API:
curl -X POST https://api.projectdiscovery.io/v1/scan \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{"target": "https://target.com", "severity": "critical,high"}'

# Enterprise features:
# - SSO integration
# - Custom templates upload
# - Compliance reports
# - SLA guarantees
# - Priority support`}
      />

      <h2>Nuclei v3 New Features</h2>
      <p>
        Nuclei v3 में कई important new features आए हैं जो scanning को और powerful बनाते हैं:
      </p>
      <CodeBlock
        title="v3 Features"
        code={`# JavaScript-based templates:
# Nuclei v3 में JavaScript templates support है
# Complex logic implement कर सकते हो

# Multi-protocol templates:
# एक ही template में HTTP + TCP + DNS combine कर सकते हो

# Improved headless browser:
nuclei -u target -headless -headless-options "--no-sandbox"
# JavaScript-heavy applications scan कर सकते हो

# Better cloud scanning:
nuclei -u target -t cloud/
# AWS, Azure, GCP misconfigurations detect

# Template signing:
nuclei -sign -t template.yaml
# Templates को digitally sign कर सकते हो

# Scan resume:
nuclei -u target -resume scan-id
# Interrupted scans resume कर सकते हो

# Improved matcher DSL:
# Complex conditions define कर सकते हo
# Response time, body length, header values — सब match कर सकते हो`}
      />

      <h2>Alternatives</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Tool</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">खासियत</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nikto</td><td className="py-2 px-3">Web server scanner</td><td className="py-2 px-3">7000+ tests, Perl-based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nmap NSE</td><td className="py-2 px-3">Network vulnerability scripts</td><td className="py-2 px-3">600+ scripts, Lua-based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">OWASP ZAP</td><td className="py-2 px-3">Web app security scanner</td><td className="py-2 px-3">GUI, automated scanning, active scan</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nessus</td><td className="py-2 px-3">Commercial vulnerability scanner</td><td className="py-2 px-3">170,000+ plugins, enterprise features</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">OpenVAS</td><td className="py-2 px-3">Open source vulnerability scanner</td><td className="py-2 px-3">Greenbone feed, comprehensive</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Burp Suite</td><td className="py-2 px-3">Web app security testing</td><td className="py-2 px-3">GUI, extensions, scanner</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Masscan</td><td className="py-2 px-3">Port scanner</td><td className="py-2 px-3">Fastest port scanner, async</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">httpx</td><td className="py-2 px-3">HTTP toolkit</td><td className="py-2 px-3">ProjectDiscovery, tech detection</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Templates regularly update करो — nuclei -update-templates daily run करो</li>
          <li>Pipeline में use करो — subfinder + httpx + nuclei classic combo है</li>
          <li>-severity filter से important findings पर focus करो — सब कुछ scan मत करो</li>
          <li>Custom templates बनाओ specific vulnerabilities के लिए — YAML बहुत आसान है</li>
          <li>Rate limit set करो taaki WAF block न करे — -rl 100 safe है</li>
          <li>-json output से results easily parse होते हैं — Python/bash integration आसान</li>
          <li>CI/CD में integrate करो — security gate लगाओ — -exit-code use करो</li>
          <li>Auth scanning करो — -H "Cookie: session=xxx" से authenticated vulnerabilities मिलेंगे</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Nuclei PoC requests भेजता है — कभी-कभी side effects हो सकते हैं (data modification, service crash)। Production systems पर carefully use करो। Rate limit respect करो। Hamesha written authorization लो। सब कुछ document करो। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized scanning अपराध है।
      </div>
    </TutorialLayout>
  )
}
