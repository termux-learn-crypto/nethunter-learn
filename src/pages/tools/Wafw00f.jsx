import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Wafw00f() {
  return (
    <TutorialLayout
      title="wafw00f"
      subtitle="Web Application Firewall detection — 150+ WAFs identify करता है"
      icon="🛡️"
      prev={{ to: '/tool/beef-xss', label: 'beef-xss' }}
      next={{ to: '/tool/socat', label: 'socat' }}
    >
      <h2>What is Wafw00f?</h2>
      <p>
        wafw00f (WAF Woof) एक powerful WAF detection tool है जो web application firewalls को fingerprint करता है। जब किसी website पर penetration test करना हो, तो सबसे पहले यह जानना ज़रूरी है कि WAF लगा है या नहीं। अगर WAF है तो कौन सा है — उस हिसाब से bypass technique use करनी पड़ती है। wafw00f यह काम सेकंडों में कर देता है।
      </p>
      <p>
        WAF (Web Application Firewall) एक security layer है जो web requests को filter करता है — SQL injection, XSS, path traversal, और दूसरे attacks को block करता है। wafw00f 150+ अलग-अलग WAFs को identify कर सकता है — Cloudflare, AWS WAF, Akamai, ModSecurity, Imperva, Sucuri, FortiWeb, Barracuda, और बहुत सारे।
      </p>
      <p>
        wafw00f Sandro Gauci (EnableSecurity) ने बनाया है। यह Python में लिखा गया है और WAF fingerprinting के लिए industry standard tool है। यह malicious requests भेजकर, HTTP headers analyze करके, response codes check करके, और WAF-specific signatures match करके detection करता है।
      </p>
      <p>
        wafw00f का approach बहुत smart है — यह normal request भेजता है पहले, फिर malicious-looking requests भेजता है। दोनों responses compare करके पता चलता है कि WAF है या नहीं। अगर malicious request block होती है या different response आता है, तो WAF present है। फिर response headers, cookies, error pages, और status codes से specific WAF identify होता है।
      </p>
      <p>
        pentesting methodology में wafw00f बहुत important step है। पहले WAF detect करो, फिर WAF-specific bypass research करो, और उसके बाद attack करो। बिना WAF detection के blind attack करना time waste है — अगर WAF है तो साधारण payloads काम नहीं करेंगे।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> wafw00f केवल अधिकृत penetration testing और सुरक्षा शोध के लिए उपयोग करें। बिना अनुमति के WAF detection भी illegal हो सकता है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत reconnaissance अपराध हो सकता है।
      </div>

      <h2>History of Wafw00f</h2>
      <p>
        wafw00f को Sandro Gauci ने 2006 में बनाया था। Sandro EnableSecurity कंपनी के founder हैं जो security research और penetration testing services provide करती है। उस समय WAF market में बहुत नए थे और कोई reliable WAF detection tool नहीं था।
      </p>
      <p>
        शुरू में wafw00f सिर्फ कुछ WAFs detect करता था, लेकिन community contributions से धीरे-धीरे 150+ WAFs support हो गए। 2012 में Kali Linux में शामिल किया गया और तब से हर penetration tester का standard tool बन गया।
      </p>
      <p>
        wafw00f का source code GitHub पर open source है और इसमें हर WAF के लिए एक plugin है। नया WAF market में आता है तो community plugin बनाकर add कर देती है। यही कारण है कि wafw00f सबसे comprehensive WAF detection tool है।
      </p>

      <h2>How Wafw00f Works?</h2>
      <p>
        wafw00f कई sophisticated techniques use करता है WAF detect करने के लिए:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Baseline Request:</strong> पहले normal HTTP request भेजता है और response record करता है</li>
        <li><strong className="text-white">Malicious Payloads:</strong> SQL injection, XSS, path traversal payloads भेजता है</li>
        <li><strong className="text-white">Response Comparison:</strong> Normal vs malicious response compare करता है — अगर difference है तो WAF है</li>
        <li><strong className="text-white">Header Analysis:</strong> Response headers में WAF-specific signatures ढूंढता है (cf-ray, x-amzn-requestid, etc.)</li>
        <li><strong className="text-white">Cookie Inspection:</strong> WAF-set cookies check करता है (__cfduid, FORTIWAFSID, etc.)</li>
        <li><strong className="text-white">Status Code Analysis:</strong> 403, 406, 501 जैसे WAF-specific status codes check करता है</li>
        <li><strong className="text-white">Error Page Fingerprinting:</strong> WAF की default error pages identify करता है</li>
        <li><strong className="text-white">Body Content Analysis:</strong> Response body में WAF-specific strings search करता है</li>
        <li><strong className="text-white">Fingerprint Database:</strong> 150+ WAFs की signatures database से match करता है</li>
      </ul>

      <h2>Installation</h2>
      <p>
        wafw00f काली नेटहंटर में pre-installed आता है। अगर किसी कारण से नहीं है तो कई तरीकों से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="wafw00f इंस्टॉलेशन"
        code={`# pip से (सबसे आसान):
pip3 install wafw00f

# apt से:
sudo apt update
sudo apt install wafw00f

# GitHub से (latest version):
git clone https://github.com/EnableSecurity/wafw00f.git
cd wafw00f
python3 setup.py install

# वर्जन चेक:
wafw00f --version

# सहायता:
wafw00f --help

# सभी supported WAFs list:
wafw00f --list`}
      />

      <h2>Basic Usage</h2>
      <p>
        wafw00f का बेसिक इस्तेमाल बहुत simple है — बस URL दो और यह WAF detect कर देगा।
      </p>
      <CodeBlock
        title="Basic WAF Detection"
        code={`# Single target WAF detect:
wafw00f http://target.com

# HTTPS target:
wafw00f https://target.com

# Verbose output (detailed info):
wafw00f -v http://target.com

# Multiple targets:
wafw00f http://target1.com http://target2.com

# File se targets (एक per line):
wafw00f -i targets.txt

# Output file में save:
wafw00f http://target.com -o results.txt

# JSON output (automation के लिए):
wafw00f http://target.com -o results.json -f json

# CSV output:
wafw00f http://target.com -o results.csv -f csv

# All WAFs test (सिर्फ first match नहीं):
wafw00f -a http://target.com

# Specific WAF test:
wafw00f -t cloudflare http://target.com`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-i file</td><td className="py-2 px-3">Input file (targets list)</td><td className="py-2 px-3 font-mono text-xs">-i targets.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o file</td><td className="py-2 px-3">Output file में results save</td><td className="py-2 px-3 font-mono text-xs">-o results.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f format</td><td className="py-2 px-3">Output format (json, csv, text)</td><td className="py-2 px-3 font-mono text-xs">-f json</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-a</td><td className="py-2 px-3">All WAFs test (first match नहीं)</td><td className="py-2 px-3 font-mono text-xs">-a</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">Verbose output</td><td className="py-2 px-3 font-mono text-xs">-v</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p proxy</td><td className="py-2 px-3">Proxy use करें</td><td className="py-2 px-3 font-mono text-xs">-p http://127.0.0.1:8080</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t waf</td><td className="py-2 px-3">Specific WAF test करें</td><td className="py-2 px-3 font-mono text-xs">-t cloudflare</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r</td><td className="py-2 px-3">Follow redirects</td><td className="py-2 px-3 font-mono text-xs">-r</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-H header</td><td className="py-2 px-3">Custom header add करें</td><td className="py-2 px-3 font-mono text-xs">-H "X-Forwarded-For: 127.0.0.1"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--no-ssl-verify</td><td className="py-2 px-3">SSL verification disable</td><td className="py-2 px-3 font-mono text-xs">--no-ssl-verify</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--list</td><td className="py-2 px-3">सभी supported WAFs list</td><td className="py-2 px-3 font-mono text-xs">--list</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-n</td><td className="py-2 px-3">No colour output</td><td className="py-2 px-3 font-mono text-xs">-n</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-m module</td><td className="py-2 px-3">Specific module use करें</td><td className="py-2 px-3 font-mono text-xs">-m cookie</td></tr>
          </tbody>
        </table>
      </div>

      <h2>WAF Detection Detailed</h2>
      <p>
        wafw00f का detection process multi-layered है:
      </p>
      <CodeBlock
        title="Detection Process"
        code={`# Normal response baseline:
curl -sI http://target.com
# Server: Apache/2.4.41
# X-Powered-By: PHP/7.4

# WAF detection:
wafw00f -v http://target.com
# [+] Checking http://target.com
# [+] Generic Detection: WAF detected
# [+] Identified WAF: Cloudflare (Cloudflare Inc.)
# [+] Detection method: Header (cf-ray), Cookie (__cfduid)

# Detection methods wafw00f use करता है:
# 1. Malicious path request: /<script>alert(1)</script>
# 2. SQL injection payload: /?id=1' OR '1'='1
# 3. Path traversal: /../../../etc/passwd
# 4. XSS payload: /?q=<img src=x onerror=alert(1)>
# 5. Invalid HTTP method: FAKEMETHOD /
# 6. Large request body: 10MB+ payload

# हर test पर response compare होता है:
# - Status code change → WAF present
# - Header added → WAF fingerprint
# - Body changed → WAF error page
# - Connection reset → WAF active blocking`}
      />

      <h2>Supported WAFs</h2>
      <p>
        wafw00f 150+ WAFs detect कर सकता है। कुछ popular WAFs:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">WAF</th>
              <th className="text-left py-2 px-3 text-neon-green">Provider</th>
              <th className="text-left py-2 px-3 text-neon-green">Detection Method</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Cloudflare</td><td className="py-2 px-3">Cloudflare Inc.</td><td className="py-2 px-3">cf-ray header, __cfduid cookie</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">AWS WAF</td><td className="py-2 px-3">Amazon</td><td className="py-2 px-3">x-amzn-requestid header</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Akamai</td><td className="py-2 px-3">Akamai Technologies</td><td className="py-2 px-3">X-Akamai-Transformed header</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ModSecurity</td><td className="py-2 px-3">SpiderLabs</td><td className="py-2 px-3">mod_security specific response</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Imperva/Incapsula</td><td className="py-2 px-3">Imperva Inc.</td><td className="py-2 px-3">X-CDN header, unique cookies</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Sucuri</td><td className="py-2 px-3">Sucuri Inc.</td><td className="py-2 px-3">Sucuri firewall headers</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wordfence</td><td className="py-2 px-3">Defiant</td><td className="py-2 px-3">Wordfence block page</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">FortiWeb</td><td className="py-2 px-3">Fortinet</td><td className="py-2 px-3">FORTIWAFSID cookie</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Barracuda</td><td className="py-2 px-3">Barracuda Networks</td><td className="py-2 px-3">Barracuda specific cookies</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">F5 BIG-IP</td><td className="py-2 px-3">F5 Networks</td><td className="py-2 px-3">BIGipServer cookie</td></tr>
          </tbody>
        </table>
      </div>
      <CodeBlock
        title="सभी Supported WAFs List"
        code={`# 150+ WAFs list देखें:
wafw00f --list

# Output:
# wafw00f can detect the following WAFs:
# aeSecure (aeSecure)
# Airlock (Phion/Ergon)
# Alert Logic (Alert Logic)
# AliYunDun (Alibaba Cloud Computing)
# Anquanbao (Anquanbao)
# Approach (Approach)
# Armor Defense (Armor)
# ASP.NET RequestValidation (Microsoft)
# AzionEdgeFirewall (Azion)
# Azure Application Gateway (Microsoft)
# ... (150+ more)`}
      />

      <h2>WAF Bypass Techniques</h2>
      <p>
        WAF detect होने के बाद bypass techniques try करें:
      </p>
      <CodeBlock
        title="General WAF Bypass Methods"
        code={`# 1. Case change:
' UNION SELECT → ' uNiOn SeLeCt

# 2. URL encoding:
<script> → %3Cscript%3E

# 3. Double encoding:
%3C → %253C

# 4. Comment insertion (SQL):
UNION/**/SELECT/**/password/**/FROM/**/users

# 5. Null bytes:
%00<script>

# 6. Unicode encoding:
<script> → %u003Cscript%u003E

# 7. HTTP parameter pollution:
?id=1&id=1' UNION SELECT 1--

# 8. Content-Type manipulation:
# Change Content-Type: application/json
# WAF may not parse JSON bodies

# 9. HTTP method change:
# POST se GET ya vice versa

# 10. Chunked transfer encoding:
# WAF chunks process nahi kar paata

# 11. Case variation + encoding combo:
'/**/uNiOn/**/%53elect → bypass many WAFs`}
      />
      <CodeBlock
        title="WAF-Specific Bypass"
        code={`# Cloudflare bypass:
# - JSON content type use करो
# - Chunked transfer encoding
# - Long URL strings (4096+ chars)
# - Original IP find करो (Cloudflare hide करता है)

# AWS WAF bypass:
# - Multiple encoding layers
# - Case variation + encoding combo
# - JSON body payloads

# ModSecurity bypass:
# - t:lowercase transformation bypass
# - Comment-based bypass: /*!UNION*/ /*!SELECT*/
# - Variable expansion bypass

# Akamai bypass:
# - HTTP/2 downgrade
# - Pipeline requests
# - Custom encoding

# Sucuri bypass:
# - XML-based payloads
# - Multipart form data bypass

# General tip: हर WAF का अपना bypass होता है
# Research करो specific WAF के लिए`}
      />

      <h2>Proxy-Based Detection</h2>
      <CodeBlock
        title="Proxy के Through Scan"
        code={`# Burp Suite proxy:
wafw00f http://target.com -p http://127.0.0.1:8080

# SOCKS proxy:
wafw00f http://target.com -p socks5://127.0.0.1:1080

# Tor network:
wafw00f http://target.com -p socks5://127.0.0.1:9050

# Custom headers (WAF bypass के लिए):
wafw00f http://target.com -H "User-Agent: Mozilla/5.0"
wafw00f http://target.com -H "X-Forwarded-For: 127.0.0.1"
wafw00f http://target.com -H "X-Real-IP: 10.0.0.1"

# Tor से anonymity maintain करो:
wafw00f http://target.com -p socks5://127.0.0.1:9050 -r`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated WAF Recon Script"
        code={`#!/bin/bash
# WAF reconnaissance script

DOMAIN=$1
OUTPUT="waf_results"

mkdir -p $OUTPUT

echo "[*] === WAF Detection for $DOMAIN ==="

# Step 1: WAF detect करो:
echo "[*] Detecting WAF..."
wafw00f http://$DOMAIN -o $OUTPUT/waf_results.txt

# Step 2: HTTP headers check:
echo "[*] Checking headers..."
curl -sI http://$DOMAIN > $OUTPUT/headers.txt
cat $OUTPUT/headers.txt | grep -iE "server|x-powered|x-cdn|cf-ray|x-amz|akamai|sucuri"

# Step 3: DNS check (Cloudflare detection):
echo "[*] DNS check..."
dig +short $DOMAIN
# Cloudflare IPs: 104.x.x.x, 172.64.x.x

# Step 4: WAF error pages:
echo "[*] Checking WAF pages..."
for path in "/403" "/406" "/404" "/error" "/blocked"; do
    code=$(curl -s -o /dev/null -w "%{http_code}" "http://$DOMAIN$path")
    echo "$path -> HTTP $code"
done

echo "[*] Results saved to $OUTPUT/"`}
      />
      <CodeBlock
        title="Batch WAF Scanning"
        code={`#!/bin/bash
# Multiple targets WAF scan

while read domain; do
    echo "[+] Scanning: $domain"
    wafw00f -a -f json http://$domain -o "waf_$domain.json"
    sleep 2  # Rate limiting avoid करो
done < targets.txt

# Results merge करो:
cat waf_*.json | python3 -m json.tool > all_waf_results.json`}
      />
      <CodeBlock
        title="Python Automation"
        code={`#!/usr/bin/env python3
# Python script — WAF detection automation

import subprocess
import json

targets = ["target1.com", "target2.com", "target3.com"]

for target in targets:
    print(f"[+] Scanning: {target}")
    result = subprocess.run(
        ["wafw00f", "-f", "json", f"http://{target}"],
        capture_output=True, text=True
    )
    try:
        data = json.loads(result.stdout)
        waf = data[0].get("firewall", "No WAF")
        print(f"    WAF: {waf}")
    except:
        print(f"    Error parsing results")`}
      />

      <h2>wafw00f vs Other WAF Detectors</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">wafw00f</th>
              <th className="text-left py-2 px-3 text-neon-green">Nmap http-waf-detect</th>
              <th className="text-left py-2 px-3 text-neon-green">WhatWaf</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WAFs Detected</td><td className="py-2 px-3">150+</td><td className="py-2 px-3">Generic detection</td><td className="py-2 px-3">50+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Fingerprinting</td><td className="py-2 px-3">Detailed — specific WAF name</td><td className="py-2 px-3">Generic — WAF present/not</td><td className="py-2 px-3">Moderate</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Fast</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Output Formats</td><td className="py-2 px-3">Text, JSON, CSV</td><td className="py-2 px-3">Text</td><td className="py-2 px-3">Text, JSON</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Bypass Suggestions</td><td className="py-2 px-3">No — sirf detect</td><td className="py-2 px-3">Evasion test</td><td className="py-2 px-3">Bypass suggestions</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Batch Scanning</td><td className="py-2 px-3">हाँ (-i flag)</td><td className="py-2 px-3">Nmap scripting</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Proxy Support</td><td className="py-2 px-3">हाँ (HTTP, SOCKS)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Language</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">C/C++</td><td className="py-2 px-3">Python</td></tr>
            <tr><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3">Very Easy</td><td className="py-2 px-3">Nmap knowledge needed</td><td className="py-2 px-3">Easy</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'WAF detect नहीं हो रहा (false negative)', a: '-a flag use करो (all WAFs test)। Verbose mode (-v) में run करो। Custom WAF test (-t cloudflare) try करो। Headers manually check करो: curl -sI target.com।' },
          { q: 'Connection timeout error आ रहा', a: 'Proxy use करो (-p http://127.0.0.1:8080)। Redirect follow करो (-r flag)। DNS resolve check करो: nslookup target.com। Firewall blocking check करो।' },
          { q: 'SSL certificate error आ रहा', a: '--no-ssl-verify flag use करो। Python SSL fix: export PYTHONHTTPSVERIFY=0। Self-signed certificate वाले sites के लिए।' },
          { q: 'WAF तो detect हुआ, अब bypass कैसे करें?', a: 'WAF-specific bypass research करो। Encoding techniques try करो (URL, double, unicode)। HTTP method change करो। Content-Type manipulate करो। Chunked encoding try करो।' },
          { q: 'Cloudflare detect हुआ — original IP कैसे find करें?', a: 'DNS history check करो (SecurityTrails, ViewDNS)। Subdomain scan करो — कुछ subdomains direct हो सकते हैं। Email headers check करो (SPF records)। Shodan में search करो।' },
          { q: 'Rate limiting हो रहा है', a: 'Slow scan करो (sleep between requests)। Proxy rotate करो। Tor use करो (-p socks5://127.0.0.1:9050)। -a flag avoid करो (sirf first match test करो)।' },
          { q: 'False positive — WAF detect हुआ लेकिन WAF नहीं है', a: 'Verbose mode (-v) में details देखो। Manual headers check करो। Specific WAF test (-t) try करो। Generic detection को manually verify करो।' },
          { q: 'wafw00f update कैसे करें?', a: 'pip install --upgrade wafw00f। GitHub se latest clone करो। New WAF signatures automatically add हो जाते हैं।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        wafw00f detection से कैसे बचें (defensive perspective):
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">WAF Fingerprinting Hide:</strong> Default WAF signatures customize करो — default error pages, headers, cookies change करो</li>
        <li><strong className="text-white">Generic Responses:</strong> WAF block page generic रखो — WAF name reveal न हो</li>
        <li><strong className="text-white">Header Sanitization:</strong> WAF-specific headers remove करो response से (cf-ray, x-amzn-requestid)</li>
        <li><strong className="text-white">Cookie Obfuscation:</strong> WAF cookies rename करो — __cfduid को generic name दो</li>
        <li><strong className="text-white">Rate Limiting:</strong> WAF detection requests को rate limit करो — scanning slow होगी</li>
        <li><strong className="text-white">Behavioral Detection:</strong> Malicious pattern requests detect करो और block करो</li>
        <li><strong className="text-white">IP Blocking:</strong> Repeated WAF probing IPs temporarily block करो</li>
        <li><strong className="text-white">Multiple WAF Layers:</strong> दो WAFs stack करो — fingerprinting confuse होगी</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        WAF detection practice के लिए safe lab बनाओ:
      </p>
      <CodeBlock
        title="Practice Lab Setup"
        code={`# Docker से WAF lab:
# ModSecurity + Apache setup:
docker run -d -p 8080:80 owasp/modsecurity-crs

# Cloudflare test site:
# free Cloudflare account से test site बनाओ

# DVWA with ModSecurity:
docker run -d -p 80:80 vulnerables/web-dvwa

# Practice workflow:
# 1. WAF-enabled site पर wafw00f run करो
# 2. WAF identify करो
# 3. Bypass techniques research करो
# 4. Manual bypass try करो (Burp Suite)
# 5. Results document करो

# Safe targets for practice:
# - DVWA (local Docker)
# - WebGoat
# - OWASP Juice Shop
# - अपनी own test website`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced WAF Analysis"
        code={`# WAF fingerprint database explore करो:
# ~/.local/lib/python3.x/site-packages/wafw00f/plugins/

# Custom WAF fingerprint बनाओ:
# Python module create करो wafw00f plugins directory में

# WAF + CDN detection combo:
wafw00f http://target.com -v
curl -sI http://target.com | head -20
dig +short target.com

# Original IP behind CDN find करो:
# 1. Subdomain scan: subfinder -d target.com
# 2. DNS history: securitytrails.com
# 3. SSL certificate search: censys.io
# 4. Email headers: SPF/DMARC records
# 5. Shodan: ssl.cert.subject.CN:target.com

# WAF bypass with Burp Suite:
# 1. Burp proxy setup: 127.0.0.1:8080
# 2. wafw00f -p http://127.0.0.1:8080 http://target.com
# 3. Burp में request intercept करो
# 4. Payloads modify करो (encoding, case, comments)
# 5. Repeater में test करो`}
      />

      <h2>WAF Testing Methodology</h2>
      <p>
        Professional pentesting में WAF detection एक structured process है:
      </p>
      <CodeBlock
        title="Complete WAF Testing Workflow"
        code={`# Step 1: Initial Detection
wafw00f http://target.com -v
# WAF है या नहीं — यह पता करो

# Step 2: Fingerprinting
wafw00f -a http://target.com
# सभी possible WAFs test करो — multiple WAFs हो सकते हैं

# Step 3: Header Analysis
curl -sI http://target.com | tee headers.txt
# Server, X-Powered-By, custom headers analyze करो

# Step 4: CDN Detection
dig +short target.com
# CDN IPs check करो (Cloudflare: 104.x, AWS CloudFront: 13.x)

# Step 5: Error Page Analysis
curl -s http://target.com/nonexistent-page
# WAF error page style identify करो

# Step 6: Rate Limit Testing
for i in $(seq 1 100); do
    curl -s -o /dev/null -w "%{http_code}" http://target.com
done
# Rate limit threshold पता करो

# Step 7: WAF Bypass Research
# Identified WAF के लिए bypass techniques search करो
# exploit-db.com, GitHub, security blogs

# Step 8: Bypass Verification
# Bypass techniques manually test करो Burp Suite में`}
      />

      <h2>Output Interpretation</h2>
      <p>
        wafw00f का output समझना ज़रूरी है:
      </p>
      <CodeBlock
        title="Output Examples"
        code={`# WAF Detected:
# [+] Checking http://target.com
# [+] The site http://target.com is behind Cloudflare (Cloudflare Inc.)
# [+] Generic Detection results:
# [+] No WAF detected by the generic detection
# [+] Number of requests: 7

# No WAF Detected:
# [+] Checking http://target.com
# [+] No WAF detected by the fingerprinting engine
# [+] Number of requests: 7

# Multiple WAFs (rare):
# [+] The site http://target.com is behind Cloudflare (Cloudflare Inc.)
# [+] The site http://target.com is behind AWS WAF (Amazon)

# JSON Output Interpretation:
# {
#   "hostname": "target.com",
#   "detected": true,
#   "firewall": "Cloudflare",
#   "manufacturer": "Cloudflare Inc."
# }

# Status codes meaning:
# 200 = Normal response (WAF may be transparent)
# 403 = Forbidden (WAF blocked request)
# 406 = Not Acceptable (WAF signature match)
# 501 = Not Implemented (WAF rejected method)`}
      />

      <h2>WAF Rule Bypass Techniques</h2>
      <p>
        Advanced bypass techniques जो WAF rules को evict करती हैं:
      </p>
      <CodeBlock
        title="Advanced Bypass Methods"
        code={`# SQL Injection WAF Bypass:

# 1. Inline comment bypass:
/*!UNION*/ /*!SELECT*/ 1,2,3--

# 2. Random case + comments:
uNiOn/**/sElEcT/**/1,2,3--

# 3. Nested queries:
SELECT * FROM (SELECT 1)a JOIN (SELECT 2)b JOIN (SELECT 3)c

# 4. Mathematical operations:
SELECT 1+1, 2*2, 3/1

# 5. Variable assignment:
SET @a=1; SELECT @a;

# XSS WAF Bypass:

# 1. Event handler variation:
<img src=x onerror=alert(1)>
<svg onload=alert(1)>
<body onpageshow=alert(1)>

# 2. Encoding tricks:
<a href="javascript:alert(1)">click</a>
<a href="&#106;&#97;&#118;&#97;&#115;&#99;&#114;&#105;&#112;&#116;:alert(1)">click</a>

# 3. Template literals:
<img src=x onerror="${alert(1)}">

# 4. SVG-based:
<svg><animate onbegin=alert(1) attributeName=x dur=1s>

# Path Traversal BAF Bypass:

# 1. Double encoding:
..%252f..%252f..%252fetc/passwd

# 2. UTF-8 encoding:
..%c0%af..%c0%af..%c0%afetc/passwd

# 3. Null byte:
..%00/etc/passwd

# 4. Nested traversal:
....//....//....//etc/passwd`}
      />

      <h2>WAF Detection with Nmap</h2>
      <CodeBlock
        title="Nmap WAF Detection Scripts"
        code={`# NSE script — http-waf-detect:
nmap --script http-waf-detect target.com

# NSE script — http-waf-fingerprint:
nmap --script http-waf-fingerprint target.com

# Combined scan:
nmap -sV --script "http-waf-*" target.com

# Nmap + wafw00f combo:
nmap -sV -p 80,443 target.com -oX nmap_results.xml
wafw00f -i targets.txt -o waf_results.txt

# Comparison:
# wafw00f — 150+ WAFs, detailed fingerprinting
# nmap http-waf-detect — generic detection, evasion testing
# Both complement each other in pentesting`}
      />

      <h2>Error Handling and Debugging</h2>
      <p>
        wafw00f run करते समय common issues:
      </p>
      <CodeBlock
        title="Debugging Techniques"
        code={`# Connection timeout:
wafw00f http://target.com -v --timeout 30
# ya proxy use करो:
wafw00f http://target.com -p http://127.0.0.1:8080

# SSL certificate error:
wafw00f https://target.com --no-ssl-verify

# "No WAF detected" but WAF exists:
# Manual check करो:
curl -sI http://target.com | head -20
# WAF-specific headers देखो: cf-ray, x-amzn-requestid, x-cdn

# Rate limiting:
# Slow scan करो, proxy rotate करो
wafw00f http://target.com -p socks5://127.0.0.1:9050

# False positive verify:
# WAF detected लेकिन actually WAF नहीं?
# Headers manually check करो
# Error page analyze करो
# -t flag से specific WAF test करो

# Python import error:
pip3 install --upgrade wafw00f
pip3 install requests beautifulsoup4

# Custom module debug:
wafw00f http://target.com -m cookie -v
# Specific module test करो`}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        wafw00f को दूसरे pentesting tools के साथ combine करके comprehensive testing करो:
      </p>
      <CodeBlock
        title="Tool Integration"
        code={`# wafw00f + Nmap:
nmap -sV target.com -oX results.xml
wafw00f http://target.com -v

# wafw00f + Subfinder:
subfinder -d target.com -silent | while read sub; do
    echo "[*] $sub"
    wafw00f http://$sub -f json 2>/dev/null
done

# wafw00f + Nikto:
wafw00f http://target.com
# WAF detect हुआ तो Nikto के WAF bypass options use करो:
nikto -h target.com -evasion 1

# wafw00f + SQLmap:
wafw00f http://target.com
# WAF detect हुआ तो SQLmap tamper scripts:
sqlmap -u "http://target.com/?id=1" --tamper=space2comment,randomcase

# wafw00f + Burp Suite:
wafw00f -p http://127.0.0.1:8080 http://target.com
# Burp में traffic intercept करो और payloads modify करो

# wafw00f + Gobuster:
# पहले WAF detect करो, फिर directory scan
wafw00f http://target.com
# WAF है तो Gobuster के custom headers use करो:
gobuster dir -u http://target.com -w wordlist.txt -a "Mozilla/5.0"

# Complete pentest pipeline:
echo "[*] Step 1: WAF Detection"
wafw00f http://target.com -v -o waf_results.txt

echo "[*] Step 2: Port Scan"
nmap -sV target.com -oX nmap.xml

echo "[*] Step 3: Directory Scan"
gobuster dir -u http://target.com -w common.txt -o dirs.txt

echo "[*] Step 4: Vulnerability Scan"
nikto -h http://target.com -o nikto.txt

echo "[*] Step 5: WAF Bypass (if WAF detected)"
echo "Research WAF-specific bypass techniques"`}
      />

      <h2>Defense — WAF Deploy कैसे करें</h2>
      <p>
        Web application protect करने के लिए WAF setup करें:
      </p>
      <CodeBlock
        title="WAF Setup Guide"
        code={`# Free WAF options:

# 1. Cloudflare (free tier):
#    - cloudflare.com पर sign up करो
#    - DNS records point करो
#    - Security level set करो (Medium recommended)
#    - Firewall rules configure करो

# 2. ModSecurity (open source):
sudo apt install libapache2-mod-security2
sudo a2enmod security2
# OWASP Core Rule Set install करो:
git clone https://github.com/coreruleset/coreruleset
sudo cp -r coreruleset/rules /etc/modsecurity/

# 3. AWS WAF:
#    - AWS Console से WAF setup करो
#    - Rules configure करो (SQLi, XSS, IP黑名单)
#    - ALB/CloudFront/ApiGateway attach करो

# 4. Nginx rate limiting:
# limit_req_zone $binary_remote_addr zone=one:10m rate=10r/s;
# server { location / { limit_req zone=one burst=20; } }

# 5. fail2ban + WAF:
sudo apt install fail2ban
# WAF block logs से IPs ban करो`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        WAF detection real-world penetration testing में critical step है। एक actual case में, pentester ने fintech company की website पर wafw00f run किया — Cloudflare detect हुआ। Cloudflare bypass के लिए original IP find किया (DNS history से) — origin server directly accessible था। Direct server पर SQL injection test किया — WAF bypass हो गया क्योंकि Cloudflare सिर्फ CDN traffic filter कर रहा था, origin server पर कोई WAF नहीं था। यह finding critical severity में report हुई।
      </p>
      <p>
        एक और case में, security team ने wafw00f से detect किया कि company की website पर ModSecurity लगा है। लेकिन ModSecurity की configuration weak थी — सिर्फ basic SQL injection rules थीं, XSS rules missing थीं। Pentester ने XSS payload try किया — WAF ने block नहीं किया। Stored XSS find हुई जिससे admin session hijack possible था। WAF detection ने attack strategy define की।
      </p>
      <p>
        Bug bounty में WAF detection bypass techniques की research करने में help करता है। एक researcher ने target पर AWS WAF detect किया — AWS WAF के known bypass (JSON content-type) use करके SQL injection payload successfully deliver किया। WAF detection + bypass research = successful attack chain।
      </p>

      <h2>Reporting and Output Analysis</h2>
      <p>
        wafw00f के results को professionally report करना important है:
      </p>
      <CodeBlock
        title="Report Generation"
        code={`# JSON output analyze करो:
wafw00f http://target.com -f json -o waf_report.json

# Python से analysis:
python3 << 'EOF'
import json

with open('waf_report.json') as f:
    data = json.load(f)

for entry in data:
    if entry.get('detected'):
        print(f"WAF: {entry['firewall']}")
        print(f"Manufacturer: {entry['manufacturer']}")
        print(f"Hostname: {entry['hostname']}")
    else:
        print(f"No WAF detected for {entry['hostname']}")
EOF

# Multiple targets report:
wafw00f -i targets.txt -f json -o all_waf.json

# CSV export for spreadsheet:
wafw00f -i targets.txt -f csv -o all_waf.csv

# Pentest report template:
echo "=== WAF Assessment Report ===" > report.txt
echo "Date: $(date)" >> report.txt
echo "Target: http://target.com" >> report.txt
echo "WAF Detected: $(wafw00f http://target.com 2>/dev/null | grep 'behind')" >> report.txt
echo "Recommendations:" >> report.txt
echo "  - WAF bypass techniques should be tested" >> report.txt
echo "  - WAF rules should be updated" >> report.txt
echo "  - Multiple WAF layers recommended" >> report.txt`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'wafw00f क्या करता है exactly?', a: 'Website पर WAF (Web Application Firewall) है या नहीं detect करता है। अगर है तो कौन सा है — Cloudflare, AWS WAF, Akamai, ModSecurity, आदि। Pentesting में पहला step — WAF है तो bypass करना पड़ेगा।' },
          { q: 'WAF नहीं मिला तो क्या करें?', a: 'WAF नहीं मिला मतलब web server directly accessible है। SQL injection, XSS, और other attacks try कर सकते हो बिना WAF bypass के। लेकिन IPS/IDS हो सकता है — WAF अलग होता है।' },
          { q: 'WAF है तो attack कैसे करें?', a: 'WAF-specific bypass techniques use करो। Encoding, case change, HTTP method change, content-type manipulation, chunked encoding — यह सब common methods हैं। हर WAF का अलग bypass होता है।' },
          { q: 'क्या wafw00f detectable है?', a: 'हाँ, WAF logs में suspicious requests दिखेंगे। Rate limiting लगा तो block हो सकते हो। Slow scan करो या proxy use करो। Tor से scan करो anonymity के लिए।' },
          { q: 'क्या wafw00f WAF bypass कर सकता है?', a: 'नहीं, wafw00f सिर्फ detect करता है। Bypass के लिए manual techniques या अलग tools चाहिए (sqlmap tamper scripts, Burp Suite, आदि)।' },
          { q: '150+ WAFs कैसे support करता है?', a: 'हर WAF का एक plugin module है जिसमें fingerprint signatures stored हैं। Community contributions से नए WAFs add होते रहते हैं।' },
          { q: 'WAF detect होने पर क्या attack possible नहीं है?', a: 'बिल्कुल नहीं! WAF detect होने का मतलब है कि bypass techniques use करनी पड़ेंगी। Encoding, fragmentation, polymorphic payloads — सब try कर सकते हो। WAF imperfect होते हैं।' },
          { q: 'Multiple WAFs हो सकते हैं?', a: 'हाँ, -a flag से सभी WAFs test करो। कुछ companies Cloudflare + AWS WAF दोनों use करती हैं। हर WAF का अलग bypass होगा।' },
          { q: 'WAF update होने पर क्या होगा?', a: 'WAF rules update होने पर पुराने bypass काम नहीं करेंगे। Regularly wafw00f run करो — नए WAF signatures detect होंगे। pip install --upgrade wafw00f से tool update रखो।' },
          { q: 'WAF fingerprint database कहां है?', a: '~/.local/lib/python3.x/site-packages/wafw00f/plugins/ directory में। हर WAF का एक Python module है। Custom WAF fingerprint बनाने के लिए यहां plugin add करो।' },
          { q: 'WAF bypass success rate कैसे track करें?', a: 'हर WAF के लिए tested techniques document करो। JSON output save करो। Python script से batch test करो और results compare करो।' },
          { q: 'Free WAFs detect कर सकते हैं?', a: 'हाँ! Cloudflare free tier, ModSecurity (open source), और Wordfence free version — सब detect होते हैं। Configuration weak हो सकती है even if WAF present है।' },
        ].map((item, i) => (
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Nmap http-waf-detect</td><td className="py-2 px-3">WAF detection (NSE script)</td><td className="py-2 px-3">Nmap integrated, evasion testing</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">WhatWaf</td><td className="py-2 px-3">WAF detection + bypass suggestions</td><td className="py-2 px-3">Bypass techniques recommend करता है</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">WAFNinja</td><td className="py-2 px-3">WAF fingerprinting + fuzzing</td><td className="py-2 px-3">Automated bypass testing</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">IdentYwaf</td><td className="py-2 px-3">WAF detection</td><td className="py-2 px-3">Lightweight, fast</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">sqlmap --identify-waf</td><td className="py-2 px-3">WAF detection (built-in)</td><td className="py-2 px-3">SQLmap integrated</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Pentesting का पहला step — WAF detect करो</li>
          <li>-a flag से सभी WAFs test करो — सिर्फ first match नहीं</li>
          <li>WAF है तो bypass techniques research करो पहले</li>
          <li>JSON output (-f json) automation के लिए use करो</li>
          <li>Proxy (-p) से scan करो ताकि IP block न हो</li>
          <li>Cloudflare detect होने पर DNS check करो (original IP ढूंढो)</li>
          <li>हर WAF का अलग bypass होता है — generic solutions काम नहीं करते</li>
          <li>Verbose mode (-v) से detection details देखो</li>
          <li>WAF detect होने पर error pages analyze करो — WAF type confirm होगा</li>
          <li>Multiple targets scan करो — -i flag से batch processing करो</li>
          <li>WAF + CDN combo detect करो — दोनों अलग-अलग हैं</li>
          <li>Regularly wafw00f update करो — नए WAF signatures add होते हैं</li>
          <li>WAF bypass success होने पर report में document करो — severity बढ़ेगी</li>
          <li>WAF logs analyze करो (अगर access हो) — detection patterns समझो</li>
          <li>Rate limiting test करो — कितने requests के बाद block होता है</li>
          <li>WAF fingerprint database explore करो: ~/.local/lib/python3.x/site-packages/wafw00f/plugins/</li>
          <li>Custom WAF fingerprint बनाओ — नया WAF market में आए तो plugin लिखो</li>
          <li>WAF bypass research के लिए exploit-db.com, GitHub, और security blogs check करो</li>
          <li>Burp Suite के साथ combo use करो — wafw00f detect, Burp से bypass test</li>
          <li>WAF rules update frequency track करो — कुछ WAFs daily update होते हैं</li>
          <li>WAF + IPS/IDS combo detect करो — WAF bypass हो जाए तो IPS/IDS block कर सकता है</li>
          <li>WAF error pages screenshot लो — report में evidence के लिए useful है</li>
          <li>WAF detection results को pentest report template में standard format में document करो</li>
          <li>Free WAFs (Cloudflare free tier, ModSecurity) भी detect करो — configuration weak हो सकती है</li>
          <li>WAF bypass success rate track करो — हर WAF के लिए tested techniques document करो</li>
          <li>WAF detection के बाद immediately attack मत करो — पहले WAF rules research करो</li>
          <li>WAF bypass techniques की cheat sheet बनाओ — हर WAF के लिए proven bypass methods</li>
          <li>WAF detection results को CSV export करो — spreadsheet में track करो</li>
          <li>WAF + load balancer combo detect करो — multiple backends हो सकते हैं</li>
          <li>WAF error pages analyze करो — custom error pages WAF identify करने में help करती हैं</li>
          <li>WAF detection को CI/CD pipeline में integrate करो — deployment से पहले WAF check करो</li>
          <li>WAF bypass success के बाद immediately report करो — timing important है</li>
          <li>WAF detection results को team के साथ share करो — collaborative bypass research करो</li>
          <li>WAF detection को regular security audit में include करो — monthly check करो</li>
          <li>WAF bypass techniques को CTF competitions में practice करो — real-world skills develop होंगी</li>
          <li>WAF detection results को risk assessment में include करो — business impact document करो</li>
        </ul>
      </div>

      <h2>OWASP Core Rule Set (CRS)</h2>
      <p>
        OWASP CRS (Core Rule Set) सबसे popular open source WAF rule set है जो ModSecurity के साथ use होता है। यह 200+ rules provide करता है जो SQL injection, XSS, RCE, file inclusion, और अन्य OWASP Top 10 vulnerabilities को detect और block करती हैं। CRS anomaly scoring model use करती है — हर matched rule का score add होता है और threshold cross होने पर request block होती है। Pentesters के लिए CRS समझना important है।
      </p>
      <CodeBlock
        title="OWASP CRS Understanding"
        code={`# CRS Paranoia Levels:
# PL1 — Basic security (low false positives)
# PL2 — Medium security (moderate false positives)
# PL3 — High security (more false positives)
# PL4 — Maximum security (highest false positives)

# CRS scoring modes:
# Anomaly scoring — score-based blocking (recommended)
# Self-contained — immediate blocking on first match

# CRS bypass common techniques:
# 1. Low-score payloads (individual rule threshold से नीचे)
# 2. Multiple small payloads split across parameters
# 3. Encoding combinations (double, triple encoding)
# 4. HTTP/2 protocol features exploit
# 5. Multipart form data bypass

# CRS update frequency check करो:
# Latest CRS: github.com/coreruleset/coreruleset
# पुरानी CRS versions में known bypasses होते हैं

# CRS tuning (defense perspective):
# False positive reduction — rules whitelist करो
# Paranoia level adjust करो per application
# Custom rules add करो specific protection के लिए`}
      />

      <h2>WAF Testing Checklist</h2>
      <p>
        Professional WAF assessment के लिए structured checklist follow करो। यह checklist ensure करती है कि कोई test miss न हो। हर WAF engagement में ये steps follow करो और results document करो।
      </p>
      <CodeBlock
        title="WAF Assessment Checklist"
        code={`# Phase 1: Detection
# [ ] wafw00f run करो (-v mode में)
# [ ] All WAFs test करो (-a flag)
# [ ] Headers manually check करो (curl -sI)
# [ ] CDN detection (dig +short)
# [ ] Error pages analyze करो

# Phase 2: Fingerprinting
# [ ] Specific WAF identify करो
# [ ] WAF version detect करो (अगर possible)
# [ ] WAF vendor research करो
# [ ] Known bypasses search करो

# Phase 3: Bypass Testing
# [ ] Encoding techniques (URL, double, unicode)
# [ ] Case variation + comments
# [ ] HTTP method change (GET/POST/PUT)
# [ ] Content-Type manipulation
# [ ] Chunked transfer encoding
# [ ] HTTP parameter pollution
# [ ] WAF-specific bypasses test करो

# Phase 4: Rate Limit Testing
# [ ] Request rate limit threshold find करो
# [ ] IP blocking behavior test करो
# [ ] CAPTCHA trigger threshold test करो

# Phase 5: Documentation
# [ ] All findings document करो
# [ ] Screenshots लो (error pages, blocks)
# [ ] Bypass success/failure rate track करो
# [ ] Recommendations write करो`}
      />

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> WAF detection एक reconnaissance step है जो authorized testing में ज़रूरी है। लेकिन WAF detect करके bypass करके attack करना unauthorized access attempt है। बिना written permission के testing मत करो। WAF logs में सब कुछ record होता है — IP trace हो सकता है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत reconnaissance अपराध हो सकता है।
      </div>
    </TutorialLayout>
  )
}
