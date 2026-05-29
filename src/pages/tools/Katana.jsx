import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Katana() {
  return (
    <TutorialLayout
      title="katana"
      subtitle="वेब क्रॉलर और स्पाइडर — JavaScript-heavy साइट्स भी क्रॉल करता है"
      icon="🕷️"
      prev={{ to: '/tool/nuclei', label: 'nuclei' }}
      next={{ to: '/tool/tcpdump', label: 'tcpdump' }}
    >
      <h2>What is Katana?</h2>
      <p>
        Katana एक शक्तिशाली वेब क्रॉलर और URL स्पाइडर टूल है जिसे ProjectDiscovery टीम ने बनाया है। यह टूल वेबसाइट्स को क्रॉल करके सभी URLs, एंडपॉइंट्स, फॉर्म्स, लिंक्स, और JavaScript-जनरेटेड content को एक्सट्रैक्ट करता है। बग बाउंटी हंटर्स और सिक्योरिटी रिसर्चर्स के लिए यह reconnaissance phase में बहुत महत्वपूर्ण टूल है।
      </p>
      <p>
        Katana की सबसे बड़ी खासियत है JavaScript rendering support। ज़्यादातर modern वेबसाइट्स React, Angular, Vue.js जैसे frameworks use करती हैं जहाँ content JavaScript से dynamically render होता है। Standard crawlers इन sites को properly crawl नहीं कर पाते, लेकिन Katana headless browser (Chrome-based) use करके JS-rendered content भी crawl कर सकता है। यह single-page applications (SPAs) और AJAX-heavy sites के लिए बहुत effective है।
      </p>
      <p>
        Katana Go भाषा में लिखा गया है जो इसे बहुत तेज़ और efficient बनाता है। यह cross-platform है — Linux, macOS, Windows सब पर चलता है। Goroutine-based concurrency use करता है जिससे parallel crawling बहुत fast होती है। Memory footprint भी कम है compared to Python-based crawlers। ProjectDiscovery टीम nuclei, httpx, subfinder, naabu जैसे popular टूल्स बनाने के लिए जानी जाती है, और Katana उसी ecosystem का हिस्सा है।
      </p>
      <p>
        Katana pipeline integration के लिए design किया गया है। इसे subfinder, httpx, nuclei जैसे अन्य ProjectDiscovery टूल्स के साथ pipe करके automated recon pipeline बना सकते हो। Silent mode output pipe-friendly है जिससे tool chaining बहुत आसान हो जाती है। एक single command में subdomain discovery से लेकर vulnerability scanning तक का पूरा workflow automate कर सकते हो।
      </p>
      <p>
        Katana v1.0 2022 में release हुआ था और तब से यह bug bounty community में standard crawler बन गया है। इसका scope control system बहुत advanced है — domain, subdomain, और custom regex scope define कर सकते हो। Rate limiting, depth control, और extension filtering जैसे features इसे production-ready बनाते हैं। Custom headers, cookies, और proxy support authenticated crawling के लिए available है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Katana केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए उपयोग करें। बिना अनुमति के वेब क्रॉलिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत वेब क्रॉलिंग अपराध हो सकता है। साइबर अपराध गंभीर परिणामों का कारण बन सकता है — जुर्माना और जेल दोनों हो सकते हैं। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of Katana</h2>
      <p>
        Katana का विकास 2022 में ProjectDiscovery टीम ने शुरू किया था। ProjectDiscovery पहले से nuclei, httpx, subfinder, naabu जैसे popular security टूल्स बना चुकी थी। उन्होंने महसूस किया कि modern वेब applications के लिए एक बेहतर crawler की ज़रूरत है जो JavaScript-heavy sites को भी handle कर सके। gospider और hakrawler जैसे existing टूल्स में JS rendering limited था।
      </p>
      <p>
        शुरू में वेब crawling के लिए gospider, hakrawler, और Photon जैसे टूल्स use होते थे, लेकिन इनमें JavaScript rendering support limited था। ProjectDiscovery ने Go में एक नया crawler बनाने का फैसला किया जो Chrome-based headless browser support करे। Katana इसी requirement का result है। v1.0 2022 में release हुआ और GitHub पर जल्दी ही 10,000+ stars मिल गए।
      </p>
      <p>
        Katana का नाम जापानी तलवार "कटाना" से आया है — जो वेब को sharp और precise तरीके से crawl करता है। आज यह bug bounty hunters और red teamers का standard crawler है। ProjectDiscovery ecosystem के साथ tight integration होने के कारण यह automated recon pipelines में सबसे popular choice है।
      </p>

      <h2>How Katana Works?</h2>
      <p>
        Katana दो modes में काम करता है — Standard mode और Headless mode। Standard mode fast है लेकिन JS-rendered content miss हो सकता है। Headless mode Chrome browser use करता है जो JavaScript execute करके dynamic content render करता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Standard Mode:</strong> HTTP requests भेजकर HTML parse करता है। तेज़ है लेकिन JS-rendered content नहीं देख पाता। Static websites के लिए perfect है। Low resource usage।</li>
        <li><strong className="text-white">Headless Mode:</strong> Chrome browser use करता है। JS execute होता है, dynamic content दिखता है। React, Angular, Vue apps crawl होते हैं। धीमा है लेकिन accurate है। Chrome DevTools Protocol use करता है।</li>
        <li><strong className="text-white">URL Extraction:</strong> HTML, CSS, JavaScript से URLs extract करता है — href, src, action, fetch, XMLHttpRequest, dynamic URL generation सब parse करता है।</li>
        <li><strong className="text-white">Scope Control:</strong> Domain, subdomain, और custom regex scope apply करता है — irrelevant URLs automatically skip होते हैं। Out-of-scope URLs queue में add नहीं होते।</li>
        <li><strong className="text-white">Depth Control:</strong> Crawl depth set कर सकते हो — shallow (1) से deep (5+) तक। Depth 1 = सिर्फ given page, Depth 2 = page + its links, Depth 3 = links of links।</li>
        <li><strong className="text-white">Known Files:</strong> robots.txt, sitemap.xml automatically discover और parse करता है। Hidden directories और endpoints मिल सकते हैं।</li>
        <li><strong className="text-white">Filtering:</strong> Extensions, status codes, URL patterns, और custom regex से URLs filter कर सकते हो। Irrelevant files (images, CSS, fonts) exclude कर सकते हो।</li>
        <li><strong className="text-white">Pipeline Output:</strong> Silent mode में pipe-friendly output देता है — httpx, nuclei, ffuf से chain कर सकते हो। JSON output detailed metadata देता है।</li>
      </ul>
      <p>
        Katana का crawling process यह है — पहले target URL visit करता है, फिर HTML/JS parse करके links extract करता है, scope filter apply करता है, new URLs को queue में add करता है, depth limit तक crawl करता है, और finally results output करता है। Headless mode में Chrome DevTools Protocol use करके page render होने के बाद DOM extract होता है। Goroutines से parallel crawling होती है।
      </p>

      <h2>Installation</h2>
      <p>
        Katana को कई तरीकों से install कर सकते हो:
      </p>
      <CodeBlock
        title="Katana Installation"
        code={`# Go install (Go 1.18+ required):
go install github.com/projectdiscovery/katana/cmd/katana@latest

# Version check:
katana -version

# Kali Linux में pre-installed:
sudo apt install katana

# Docker:
docker run projectdiscovery/katana:latest -u https://target.com

# Binary download:
# GitHub releases से download करो
# https://github.com/projectdiscovery/katana/releases

# Binary install example:
wget https://github.com/projectdiscovery/katana/releases/latest/download/katana-linux-amd64.zip
unzip katana-linux-amd64.zip
sudo mv katana /usr/local/bin/
katana -version

# Headless mode के लिए Chrome भी चाहिए:
sudo apt install chromium-browser
# ya Google Chrome install करो`}
      />

      <h2>Basic Usage</h2>
      <p>
        Katana का basic use बहुत simple है — target URL दो और crawl शुरू। Depth, scope, और filters से control कर सकते हो।
      </p>
      <CodeBlock
        title="Basic Crawl Commands"
        code={`# Basic crawl:
katana -u http://target.com

# Depth set करें:
katana -u http://target.com -d 2

# Output file में save:
katana -u http://target.com -o urls.txt

# JS rendering के साथ (headless):
katana -u http://target.com -jc

# Multiple targets file से:
katana -list targets.txt -o all_urls.txt

# Silent mode (pipe-friendly):
katana -u http://target.com -silent

# Headless mode full:
katana -u http://target.com -headless -d 3

# JSON output:
katana -u http://target.com -json -o urls.json

# Stdin से targets (pipe):
cat alive_urls.txt | katana -jc -d 2 -silent`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-u</td><td className="py-2 px-3">Target URL</td><td className="py-2 px-3 font-mono text-xs">-u http://target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-list</td><td className="py-2 px-3">Target list file</td><td className="py-2 px-3 font-mono text-xs">-list targets.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d</td><td className="py-2 px-3">Crawl depth (default: 2)</td><td className="py-2 px-3 font-mono text-xs">-d 3</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-jc</td><td className="py-2 px-3">JavaScript crawl (headless shortcut)</td><td className="py-2 px-3 font-mono text-xs">-jc</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-headless</td><td className="py-2 px-3">Full headless browser mode</td><td className="py-2 px-3 font-mono text-xs">-headless</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o</td><td className="py-2 px-3">Output file</td><td className="py-2 px-3 font-mono text-xs">-o urls.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-silent</td><td className="py-2 px-3">Silent mode (pipe-friendly)</td><td className="py-2 px-3 font-mono text-xs">-silent</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-json</td><td className="py-2 px-3">JSON output format</td><td className="py-2 px-3 font-mono text-xs">-json</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-ef</td><td className="py-2 px-3">Exclude extensions</td><td className="py-2 px-3 font-mono text-xs">-ef png,jpg,gif,css</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-fx</td><td className="py-2 px-3">Filter by extension (include only)</td><td className="py-2 px-3 font-mono text-xs">-fx php,html,asp</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-fs</td><td className="py-2 px-3">Filter by status code</td><td className="py-2 px-3 font-mono text-xs">-fs 404,302</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-scope</td><td className="py-2 px-3">Crawl scope (domain/subdomain)</td><td className="py-2 px-3 font-mono text-xs">-scope domain</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-kf</td><td className="py-2 px-3">Known files (robots.txt, sitemap)</td><td className="py-2 px-3 font-mono text-xs">-kf</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-rl</td><td className="py-2 px-3">Rate limit (requests/sec)</td><td className="py-2 px-3 font-mono text-xs">-rl 100</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c</td><td className="py-2 px-3">Parallelism (concurrent crawls)</td><td className="py-2 px-3 font-mono text-xs">-c 10</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-timeout</td><td className="py-2 px-3">Request timeout (seconds)</td><td className="py-2 px-3 font-mono text-xs">-timeout 10</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-retry</td><td className="py-2 px-3">Retry count</td><td className="py-2 px-3 font-mono text-xs">-retry 2</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-field</td><td className="py-2 px-3">Output field (url, path, query)</td><td className="py-2 px-3 font-mono text-xs">-field url</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-H</td><td className="py-2 px-3">Custom header</td><td className="py-2 px-3 font-mono text-xs">-H "Cookie: session=abc"</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-proxy</td><td className="py-2 px-3">Proxy URL</td><td className="py-2 px-3 font-mono text-xs">-proxy http://127.0.0.1:8080</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Crawl Modes Detail</h2>
      <h3>Standard Mode (Default)</h3>
      <p>
        Standard mode HTTP requests भेजकर HTML parse करता है। यह fast है लेकिन JavaScript-rendered content miss हो सकता है। Static websites, simple PHP/HTML sites के लिए perfect है। No Chrome dependency needed।
      </p>
      <CodeBlock
        title="Standard Crawl"
        code={`# Standard mode (default):
katana -u http://target.com

# Depth control — shallow:
katana -u http://target.com -d 1

# Deep crawl:
katana -u http://target.com -d 3

# Specific pages:
katana -u http://target.com/about
katana -u http://target.com/products

# Standard mode benefits:
# - Fast crawling
# - Low resource usage
# - No Chrome dependency
# - Good for static HTML sites
# - Parallel goroutines for speed`}
      />

      <h3>Headless Mode (JavaScript)</h3>
      <p>
        Headless mode Chrome browser use करता है। JavaScript execute होता है — React, Angular, Vue, Next.js apps crawl होते हैं। JS-heavy modern web applications के लिए यह mode ज़रूरी है। Chrome DevTools Protocol use करता है।
      </p>
      <CodeBlock
        title="Headless Crawl"
        code={`# Headless mode full:
katana -u http://target.com -headless

# JavaScript crawl flag (shortcut):
katana -u http://target.com -jc

# Headless + depth:
katana -u http://target.com -jc -d 3

# Window size set:
katana -u http://target.com -headless -cw 1920 -ch 1080

# Screenshot (debugging):
katana -u http://target.com -headless -ss

# Headless mode benefits:
# - JS-rendered content visible
# - Dynamic API calls captured
# - SPA (Single Page Apps) supported
# - More accurate results
# - Captures fetch() and XHR URLs`}
      />

      <h2>Scope Control</h2>
      <p>
        Katana scope control से आप define कर सकते हो कि कौन से URLs crawl करने हैं:
      </p>
      <CodeBlock
        title="Scope Filtering"
        code={`# Only same domain:
katana -u http://target.com -scope domain

# Include subdomains:
katana -u http://target.com -scope subdomain

# Custom regex scope:
katana -u http://target.com -scope "target\\.com"

# Exclude patterns:
katana -u http://target.com -ef png,jpg,gif,css,js,svg

# Include only specific extensions:
katana -u http://target.com -fx php,html,asp,aspx

# Filter by status code:
katana -u http://target.com -fs 404,302

# Combine scope + depth + filters:
katana -u http://target.com -scope domain -d 3 -ef png,jpg,gif -fx php,html

# Regex-based scope:
katana -u http://target.com -scope "api\\.target\\.com|admin\\.target\\.com"`}
      />

      <h2>Known Files Extraction</h2>
      <CodeBlock
        title="robots.txt, sitemap.xml"
        code={`# Known files crawl:
katana -u http://target.com -kf

# Known files often contain:
# - Hidden directories
# - Admin panels
# - API endpoints
# - Development URLs
# - Backup files paths

# robots.txt example output:
# Disallow: /admin/
# Disallow: /api/v1/internal
# Disallow: /backup/
# Disallow: /debug/
# Disallow: /staging/

# sitemap.xml example output:
# https://target.com/special-page
# https://target.com/hidden-form
# https://target.com/api-docs

# Combine with headless:
katana -u http://target.com -kf -jc -d 2`}
      />

      <h2>Pipeline Integration</h2>
      <p>
        Katana का सबसे बड़ा फायदा pipeline integration है — subfinder, httpx, nuclei से chain करके automated recon pipeline बना सकते हो:
      </p>
      <CodeBlock
        title="Recon Pipeline"
        code={`# Katana + nuclei combo:
katana -u http://target.com -jc -d 3 -silent | nuclei

# Katana + httpx:
katana -u http://target.com -silent | httpx -silent

# Endpoints ढूंढकर scan करो:
katana -u http://target.com -jc -o urls.txt
nuclei -l urls.txt -o vulns.txt

# Subfinder + httpx + katana pipeline:
subfinder -d target.com -silent | httpx -silent | katana -jc -d 2 -silent

# Full recon pipeline (4 steps):
subfinder -d target.com -silent > subs.txt
httpx -list subs.txt -silent > alive.txt
katana -list alive.txt -jc -d 3 -silent > urls.txt
nuclei -list urls.txt -o vulns.txt

# One-liner full recon:
subfinder -d target.com -silent | httpx -silent | katana -jc -silent | nuclei -silent

# Katana + ffuf (parameter fuzzing):
katana -u http://target.com -jc -silent | grep "?" | sort -u > param_urls.txt`}
      />

      <h2>JavaScript Parsing</h2>
      <p>
        Katana JavaScript files को parse करके hidden URLs और API endpoints extract करता है:
      </p>
      <CodeBlock
        title="JS Endpoint Extraction"
        code={`# JS files se API endpoints निकालो:
katana -u http://target.com -jc -d 3 -silent | grep -i "api\\|v1\\|v2\\|graphql"

# API routes filter:
katana -u http://target.com -jc -silent | grep -E "/api/|/v[0-9]/"

# REST endpoints:
katana -u http://target.com -jc -silent | grep -E "\\.json|\\.xml"

# GraphQL endpoints:
katana -u http://target.com -jc -silent | grep -i graphql

# JS bundles analyze:
katana -u http://target.com -jc -silent | grep -i "\\.js$" | head -20

# Hidden JS files:
katana -u http://target.com -jc -silent | grep -iE "\\.js$" | grep -iv "jquery\\|bootstrap\\|angular"`

# JS-sourced API keys:
katana -u http://target.com -jc -silent | grep -iE "key=|token=|apikey="`}
      />

      <h2>Authenticated Crawling</h2>
      <CodeBlock
        title="Login Session Crawling"
        code={`# Cookie-based auth:
katana -u http://target.com/dashboard -H "Cookie: session=abc123xyz"

# Multiple headers:
katana -u http://target.com -H "Cookie: token=xyz" -H "Authorization: Bearer abc123"

# Proxy के through (Burp):
katana -u http://target.com -proxy http://127.0.0.1:8080 -jc

# Login form के बाद cookie extract करो:
# 1. Browser में login करो
# 2. DevTools → Application → Cookies से session cookie copy करो
# 3. Katana में -H "Cookie: ..." pass करो

# Token-based auth:
katana -u http://target.com/api -H "Authorization: Bearer eyJhbGci..."`}
      />

      <h2>Output Formats</h2>
      <CodeBlock
        title="Output Control"
        code={`# Default output (URLs):
katana -u http://target.com -o urls.txt

# JSON output (detailed):
katana -u http://target.com -json -o urls.json

# Field output — specific fields only:
katana -u http://target.com -field url
katana -u http://target.com -field path
katana -u http://target.com -field query

# Silent (pipe friendly):
katana -u http://target.com -silent

# Combine with other tools:
katana -u http://target.com -silent | sort -u > unique_urls.txt
katana -u http://target.com -silent | grep -i "admin\\|panel" > admin_urls.txt

# Deduplicate output:
katana -u http://target.com -silent | sort -u | wc -l`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated Recon Script"
        code={`#!/bin/bash
# Katana automated recon script

DOMAIN=$1
OUTPUT_DIR="katana_results"
mkdir -p $OUTPUT_DIR

echo "[*] Starting Katana recon for $DOMAIN..."

# Step 1: Subdomain enumeration
echo "[*] Finding subdomains..."
subfinder -d $DOMAIN -silent > $OUTPUT_DIR/subdomains.txt
SUBS=$(wc -l < $OUTPUT_DIR/subdomains.txt)
echo "[+] Found $SUBS subdomains"

# Step 2: Alive check
echo "[*] Checking alive hosts..."
httpx -list $OUTPUT_DIR/subdomains.txt -silent > $OUTPUT_DIR/alive.txt
ALIVE=$(wc -l < $OUTPUT_DIR/alive.txt)
echo "[+] Found $ALIVE alive hosts"

# Step 3: Crawl with Katana
echo "[*] Crawling with Katana..."
katana -list $OUTPUT_DIR/alive.txt -jc -d 2 -silent > $OUTPUT_DIR/urls.txt
URLS=$(wc -l < $OUTPUT_DIR/urls.txt)
echo "[+] Found $URLS URLs"

# Step 4: Filter interesting URLs
echo "[*] Filtering interesting URLs..."
grep -iE "api|admin|login|dashboard|panel" $OUTPUT_DIR/urls.txt > $OUTPUT_DIR/interesting.txt
INT=$(wc -l < $OUTPUT_DIR/interesting.txt)
echo "[+] Found $INT interesting URLs"

# Summary
echo ""
echo "=== KATANA RECON SUMMARY ==="
echo "Domain: $DOMAIN"
echo "Subdomains: $SUBS"
echo "Alive: $ALIVE"
echo "Total URLs: $URLS"
echo "Interesting: $INT"
echo "Results: $OUTPUT_DIR/"`}
      />

      <CodeBlock
        title="Parameter Discovery Script"
        code={`#!/bin/bash
# URL parameter discovery script

TARGET=$1
echo "[*] Crawling $TARGET for parameters..."

# Crawl with headless mode
katana -u $TARGET -jc -d 3 -silent > all_urls.txt

# Extract URLs with parameters
grep "?" all_urls.txt > params.txt

# Extract unique parameter names
grep -oP "[?&]\\K[^=]+" params.txt | sort -u > param_names.txt

# Summary
echo "[+] Total URLs: $(wc -l < all_urls.txt)"
echo "[+] URLs with params: $(wc -l < params.txt)"
echo "[+] Unique parameters: $(wc -l < param_names.txt)"
echo ""
echo "[*] Parameter names:"
cat param_names.txt`}
      />

      <CodeBlock
        title="Continuous Monitoring Script"
        code={`#!/bin/bash
# Monitor new URLs on target

TARGET=$1
KNOWN="known_urls.txt"
NEW="new_urls.txt"

echo "[*] Monitoring $TARGET for new URLs..."

while true; do
    katana -u $TARGET -jc -d 2 -silent | sort -u > current_urls.txt

    if [ -f "$KNOWN" ]; then
        comm -13 $KNOWN current_urls.txt > $NEW
        COUNT=$(wc -l < $NEW)
        if [ $COUNT -gt 0 ]; then
            echo "[+] Found $COUNT new URLs:"
            cat $NEW
            echo ""
        fi
    fi

    cp current_urls.txt $KNOWN
    echo "[*] Sleeping 1 hour..."
    sleep 3600
done`}
      />

      <h2>Katana vs Other Crawlers</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">Katana</th>
              <th className="text-left py-2 px-3 text-neon-green">gospider</th>
              <th className="text-left py-2 px-3 text-neon-green">hakrawler</th>
              <th className="text-left py-2 px-3 text-neon-green">Photon</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">JS Rendering</td><td className="py-2 px-3">Haan (headless)</td><td className="py-2 px-3">Haan</td><td className="py-2 px-3">Nahi</td><td className="py-2 px-3">Haan (limited)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Headless Browser</td><td className="py-2 px-3">Chrome-based</td><td className="py-2 px-3">Chromedp</td><td className="py-2 px-3">Nahi</td><td className="py-2 px-3">Nahi</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Pipeline Support</td><td className="py-2 px-3">Excellent</td><td className="py-2 px-3">Haan</td><td className="py-2 px-3">Haan</td><td className="py-2 px-3">Limited</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Scope Control</td><td className="py-2 px-3">Advanced (regex)</td><td className="py-2 px-3">Basic</td><td className="py-2 px-3">Basic</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Known Files</td><td className="py-2 px-3">Haan (robots, sitemap)</td><td className="py-2 px-3">Nahi</td><td className="py-2 px-3">Nahi</td><td className="py-2 px-3">Haan</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Filtering</td><td className="py-2 px-3">Advanced (ext, status, regex)</td><td className="py-2 px-3">Basic</td><td className="py-2 px-3">Basic</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Output Formats</td><td className="py-2 px-3">text, JSON, field</td><td className="py-2 px-3">text</td><td className="py-2 px-3">text</td><td className="py-2 px-3">text, JSON</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Language</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Python</td></tr>
            <tr><td className="py-2 px-3 text-white">Maintenance</td><td className="py-2 px-3">Active (ProjectDiscovery)</td><td className="py-2 px-3">Slow</td><td className="py-2 px-3">Slow</td><td className="py-2 px-3">Medium</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Headless browser काम नहीं कर रहा', a: 'Chrome install करो: sudo apt install chromium-browser। Chrome path set करो: katana -u URL -headless -chrome-path /usr/bin/chromium-browser। Docker use करो अगर local Chrome नहीं है।' },
          { q: 'बहुत ज़्यादा URLs आ रहे हैं', a: 'Depth कम करो: -d 1। Extensions filter करो: -ef png,jpg,gif,css,js। Scope limit करो: -scope domain। Specific extensions: -fx php,html।' },
          { q: 'Crawl बहुत धीमा है', a: 'Standard mode use करो (headless मत करो)। Parallelism बढ़ाओ: -c 10। Depth कम करो: -d 1। Rate limit बढ़ाओ: -rl 200।' },
          { q: 'WAF block कर रहा है', a: 'Rate limit set करो: -rl 10। Custom headers use करो: -H "X-Forwarded-For: 127.0.0.1"। Proxy use करो: -proxy http://127.0.0.1:8080। User-Agent set करो।' },
          { q: 'JavaScript content नहीं दिख रहा', a: '-jc flag use करो ya -headless mode। Bina JS rendering के dynamic content miss होता है। Chrome dependency check करो।' },
          { q: 'Memory बहुत use हो रहा है', a: 'Depth कम करो: -d 1। Parallelism कम करो: -c 2। Headless mode avoid करो अगर ज़रूरी नहीं। Extensions filter करो।' },
          { q: 'Duplicate URLs आ रहे हैं', a: 'Output को sort -u से pipe करो: katana -u URL -silent | sort -u > urls.txt। या -field url use करो सिर्फ URLs के लिए।' },
          { q: 'Authenticated crawl कैसे करें?', a: 'Cookies pass करो: -H "Cookie: session=abc123"। Custom headers use करो। Login के बाद cookie extract करके Katana को दो। -proxy से Burp में भी route कर सकते हो।' },
          { q: 'Out-of-scope URLs आ रहे हैं', a: '-scope domain use करो। Custom regex scope use करो: -scope "target\\.com"। -ef से external domains के URLs filter करो।' },
          { q: 'Timeout errors आ रहे हैं', a: '-timeout 30 set करो (default 10)। -retry 3 से retry करो। Rate limit कम करो: -rl 50। Slow targets के लिए depth कम करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Web admin hone ke naate, crawlers se kaise bachen:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Rate Limiting:</strong> Per-IP request rate limit लगाओ — aggressive crawling detect होगा। Nginx: limit_req_zone, Apache: mod_ratelimit</li>
        <li><strong className="text-white">robots.txt:</strong> Sensitive paths robots.txt में disallow करो (हालांकि attackers ignore कर सकते हैं)। Honeypot paths भी डाल सकते हो।</li>
        <li><strong className="text-white">WAF:</strong> Web Application Firewall use करो — bot detection, JS challenges, CAPTCHA integration। Cloudflare, AWS WAF, ModSecurity options हैं।</li>
        <li><strong className="text-white">CAPTCHA:</strong> Suspicious traffic पर CAPTCHA show करो। reCAPTCHA, hCaptcha, Turnstile options हैं।</li>
        <li><strong className="text-white">User-Agent Check:</strong> Known crawler User-Agents block करो। Empty User-Agent block करो। Custom User-Agent required करो।</li>
        <li><strong className="text-white">IP Blocking:</strong> Repeated crawling IPs temporarily block करो। Fail2ban से automated blocking। GeoIP blocking भी option है।</li>
        <li><strong className="text-white">Honeypot Links:</strong> Hidden links डालो जो सिर्फ crawlers follow करें — detection mechanism। Honeypot pages से crawler fingerprint करो।</li>
        <li><strong className="text-white">Request Fingerprinting:</strong> Headless browser fingerprints detect करो (webdriver flag, navigator.properties, Chrome DevTools Protocol artifacts)।</li>
        <li><strong className="text-white">Cloudflare:</strong> Bot Fight Mode, Managed Challenges enable करो。 Under Attack Mode for aggressive crawling.</li>
        <li><strong className="text-white">Monitoring:</strong> Unusual crawling patterns detect करो — spike in requests, new paths, rapid sequential访问। SIEM integration recommended.</li>
      </ul>

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Hidden API Endpoints"
        code={`# JS files se API endpoints निकालो:
katana -u http://target.com -jc -d 3 -silent | grep -i "api\\|v1\\|v2\\|graphql"

# API routes filter:
katana -u http://target.com -jc -silent | grep -E "/api/|/v[0-9]/"

# REST endpoints:
katana -u http://target.com -jc -silent | grep -E "\\.json|\\.xml"

# GraphQL endpoints:
katana -u http://target.com -jc -silent | grep -i graphql

# WebSocket endpoints:
katana -u http://target.com -jc -silent | grep -i "ws://\\|wss://"`}
      />
      <CodeBlock
        title="Form Discovery"
        code={`# Login forms ढूंढो:
katana -u http://target.com -jc -d 2 -silent | grep -i "login\\|signin\\|auth\\|admin"

# Registration forms:
katana -u http://target.com -jc -silent | grep -i "register\\|signup\\|join"

# Admin panels:
katana -u http://target.com -jc -silent | grep -i "admin\\|panel\\|dashboard\\|manage"

# Upload forms:
katana -u http://target.com -jc -silent | grep -i "upload\\|file\\|attach"`}
      />
      <CodeBlock
        title="Parameter Discovery"
        code={`# URLs with parameters:
katana -u http://target.com -jc -d 3 -silent | grep "?"

# Parameter names extract:
katana -u http://target.com -jc -silent | grep -oP "[?&]\\K[^=]+" | sort -u

# XSS/SSTI testable parameters:
katana -u http://target.com -jc -silent | grep -E "[?&][a-zA-Z]+=" | sort -u

# IDOR-prone parameters:
katana -u http://target.com -jc -silent | grep -E "[?&](id|uid|user_id|account|profile)=" | sort -u`}
      />
      <CodeBlock
        title="Performance Tuning"
        code={`# Parallelism बढ़ाओ:
katana -u http://target.com -c 10

# Rate limit set:
katana -u http://target.com -rl 100

# Depth control:
katana -u http://target.com -d 1    # Fast, shallow
katana -u http://target.com -d 3    # Deep, slow

# Timeout set:
katana -u http://target.com -timeout 10

# Exclude heavy resources:
katana -u http://target.com -ef png,jpg,gif,css,js,svg,woff,ttf

# Specific extensions only:
katana -u http://target.com -fx php,html,asp

# Combine optimizations:
katana -u http://target.com -c 10 -rl 200 -d 2 -ef png,jpg,gif,css -scope domain`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Katana vs gospider कौनसा use करें?', a: 'Katana newer है, better scope control है, और actively maintained है। gospider भी अच्छा है लेकिन slow updates। Pipeline के लिए Katana better है। ProjectDiscovery ecosystem integration Katana का बड़ा advantage है।' },
          { q: 'Headless mode क्यों use करें?', a: 'JavaScript-heavy sites (React, Angular, Vue) के लिए। Standard mode JS content miss करता है। Headless mode Chrome use करके JS render करता है। SPA apps, AJAX-heavy sites, और dynamic content के लिए ज़रूरी।' },
          { q: 'कितना depth safe है?', a: 'Default 2 अच्छा है। छोटी sites के लिए 3, बड़ी sites के लिए 1। ज़्यादा depth से बहुत सारे URLs आएंगे और time लगेगा। Large sites पर depth 1-2 sufficient है।' },
          { q: 'क्या Katana authenticated crawl कर सकता है?', a: 'हाँ, cookies और custom headers pass कर सकते हो। Login session के बाद cookie extract करके Katana को दो। -H flag से headers, -proxy से Burp route कर सकते हो।' },
          { q: 'क्या Katana JavaScript parse करता है?', a: 'हाँ! -jc flag से JS files parse होती हैं। fetch(), XMLHttpRequest, और dynamically generated URLs भी capture होते हैं। JS bundles से hidden endpoints मिल सकते हैं।' },
          { q: 'बहुत बड़ी site crawl कैसे करें?', a: 'Depth 1-2 रखो, extensions filter करो, rate limit set करो, और scope domain रखो। Parallelism बढ़ाओ: -c 10। -ef से images/CSS/JS exclude करो।' },
          { q: 'Katana कौन से output formats support करता है?', a: 'Plain text (default), JSON (-json), और specific field output (-field url/path/query)। Silent mode pipe-friendly है। JSON में detailed metadata मिलता है।' },
          { q: 'क्या Katana robots.txt parse करता है?', a: 'हाँ! -kf flag से robots.txt और sitemap.xml automatically crawl होते हैं। Hidden directories और endpoints मिल सकते हैं। यह recon में बहुत useful है।' },
          { q: 'Katana कितना memory use करता है?', a: 'Standard mode में minimal। Headless mode में Chrome instances memory consume करते हैं। -c flag से parallelism control करो। Large sites पर depth limit ज़रूरी है।' },
          { q: 'Multiple domains एक साथ crawl कर सकते हैं?', a: 'हाँ, -list targets.txt से multiple URLs pass करो। हर URL independently crawl होगा। Scope control per-target apply होता है।' },
          { q: 'Katana कितने URLs handle कर सकता है?', a: 'Memory और disk space पर depend करता है। Standard mode में millions of URLs possible। Headless mode में Chrome memory limit — depth control ज़रूरी है। Large sites पर -d 1-2 safe है।' },
          { q: 'Katana को continuous monitoring में use कर सकते हैं?', a: 'हाँ! Cron job से scheduled crawl करो। New URLs compare करके changes detect करो। Monitor script बनाओ जो hourly/daily crawl करे और new endpoints alert करे।' },
          { q: 'Katana vs waybackurls कब use करें?', a: 'Katana live crawling के लिए (current state)। waybackurls historical URLs के लिए (archive.org data)। दोनों combine करो comprehensive coverage के लिए।' },
          { q: 'Katana Spider vs Crawler mode क्या है?', a: 'Crawler full page crawling करता है — links follow करता है। Spider specific page के content extract करता है। Katana primarily crawler है जो spider capabilities भी रखता है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        Case Study 1 — Bug Bounty Program: एक bug bounty hunter ने Indian fintech company के WordPress-based platform पर Katana use किया। Standard crawlers से सिर्फ 500 URLs मिले, लेकिन Katana headless mode से 2,300+ URLs मिले। JavaScript-rendered React components से hidden API endpoints discover हुए — /api/v2/internal/admin, /api/v1/debug/config। यह endpoints standard HTML parsing से नहीं मिलते। Result: API endpoint पर IDOR vulnerability मिला — $2,500 bounty मिली।
      </p>
      <p>
        Case Study 2 — Enterprise Application: एक security consultant को Indian SaaS company का assessment करना था। Katana से crawl किया तो robots.txt में /admin/, /staging/, /debug/ paths मिले। JavaScript bundles से hardcoded AWS API keys extract हुईं। साथ ही hidden registration form मिला जो development environment में था लेकिन production पर accessible था। Katana का known files extraction feature इस case में critical findings दिया।
      </p>
      <p>
        Case Study 3 — Government Website: Authorized audit में government portal का assessment। Katana depth 3 से crawl किया — 5,000+ URLs मिले। HTML forms में CSRF tokens missing थे। JavaScript files में commented-out debug endpoints मिले। Hidden upload form मिला जो file type validation नहीं करता था — potential file upload vulnerability। Katana का deep crawl और JS parsing दोनों valuable findings दिए।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Katana को complementary tools के साथ combine करके comprehensive recon pipeline बनाओ:
      </p>
      <CodeBlock
        title="Katana + Nuclei Vulnerability Scan"
        code={`# Katana से URLs collect करो, nuclei से scan करो:
katana -u http://target.com -jc -d 3 -silent > urls.txt

# WordPress templates:
nuclei -l urls.txt -t wordpress/ -o wp_vulns.txt

# Generic web vulns:
nuclei -l urls.txt -t vulnerabilities/ -o web_vulns.txt

# Technology detection:
nuclei -l urls.txt -t technologies/ -o tech.txt

# One-liner:
katana -u http://target.com -jc -d 2 -silent | nuclei -silent`}
      />
      <CodeBlock
        title="Katana + ffuf Parameter Fuzzing"
        code={`# Parameters discover करो:
katana -u http://target.com -jc -silent | grep "?" | sort -u > param_urls.txt

# Parameter names extract:
katana -u http://target.com -jc -silent | grep -oP "[?&]\\K[^=]+" | sort -u > params.txt

# Discover endpoints with ffuf:
katana -u http://target.com -silent | sort -u > base_urls.txt
ffuf -u http://target.com/FUZZ -w wordlist.txt -mc 200,301,302 -o ffuf_results.json

# Combine findings:
cat base_urls.txt param_urls.txt | sort -u > all_endpoints.txt`}
      />
      <CodeBlock
        title="Katana + Dalfox XSS Scanner"
        code={`# XSS-vulnerable parameters find करो:
katana -u http://target.com -jc -silent | grep "?" | dalfox pipe

# Specific parameter testing:
katana -u http://target.com -jc -silent | grep -E "[?&][a-zA-Z]+=" | sort -u | dalfox pipe -o xss_results.txt

# Reflected parameters:
katana -u http://target.com -jc -silent | grep "?" | grep -i "search\\|query\\|q=\\|input=" | dalfox pipe`}
      />

      <h2>Performance Tuning</h2>
      <p>
        बड़ी sites के लिए Katana optimize करने के tips:
      </p>
      <CodeBlock
        title="Speed Optimization"
        code={`# 1. Standard mode use करो (headless नहीं) — 10x faster:
katana -u http://target.com -d 2

# 2. Parallelism बढ़ाओ:
katana -u http://target.com -c 15

# 3. Heavy resources exclude करो:
katana -u http://target.com -ef png,jpg,gif,css,js,svg,woff,woff2,ttf,eot

# 4. Specific extensions include करो:
katana -u http://target.com -fx php,html,asp,aspx,jsp,json,xml

# 5. Scope limit करो:
katana -u http://target.com -scope domain

# 6. Rate limit set (WAF bypass + controlled speed):
katana -u http://target.com -rl 200

# 7. Timeout reduce (fast fail):
katana -u http://target.com -timeout 5

# 8. Combine all optimizations:
katana -u http://target.com -c 15 -rl 200 -d 2 -scope domain -ef png,jpg,gif,css,js -timeout 5`}
      />
      <CodeBlock
        title="Resource Management"
        code={`# Memory control — headless mode में Chrome instances:
# Max tabs limit (कम memory):
katana -u http://target.com -headless -c 3

# Standard mode (no Chrome — low memory):
katana -u http://target.com -d 2

# Disk space — output management:
katana -u http://target.com -silent | head -10000 > urls.txt

# Large site — chunked crawling:
katana -u http://target.com -d 1 -silent > depth1.txt
katana -u http://target.com -d 2 -silent > depth2.txt
# Compare और deduplicate करो`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Katana results को analyze करके actionable intelligence extract करो:
      </p>
      <CodeBlock
        title="Results Analysis"
        code={`# Total unique URLs:
katana -u http://target.com -jc -d 3 -silent | sort -u | wc -l

# Extension-wise distribution:
katana -u http://target.com -jc -silent | grep -oP "\\.[a-zA-Z0-9]+$" | sort | uniq -c | sort -rn

# Parameter URLs:
katana -u http://target.com -jc -silent | grep "?" | wc -l

# Admin/panel URLs:
katana -u http://target.com -jc -silent | grep -iE "admin|panel|dashboard|manage|login"

# API endpoints:
katana -u http://target.com -jc -silent | grep -iE "/api/|/v[0-9]/|graphql|rest"

# JS-sourced URLs (from JavaScript):
katana -u http://target.com -jc -silent | grep -iE "\\.js$|fetch\\(|XMLHttpRequest"

# Report generate:
echo "=== Katana Recon Report ===" > report.txt
echo "Target: http://target.com" >> report.txt
echo "Total URLs: $(katana -u http://target.com -jc -silent | wc -l)" >> report.txt
echo "Unique URLs: $(katana -u http://target.com -jc -silent | sort -u | wc -l)" >> report.txt
echo "Parameters: $(katana -u http://target.com -jc -silent | grep '?' | wc -l)" >> report.txt
echo "Admin URLs: $(katana -u http://target.com -jc -silent | grep -ic 'admin')" >> report.txt`}
      />

      <h2>SPA-Specific Crawling Techniques</h2>
      <p>
        Single Page Applications (SPAs) crawl करना traditional websites से बहुत अलग है। React, Angular, Vue, Next.js जैसे frameworks में content JavaScript से dynamically load होता है। URLs hash-based (#/route) या history API-based हो सकते हैं। Standard HTTP requests से यह content visible नहीं होता। Katana headless mode इन challenges को handle करता है।
      </p>
      <CodeBlock
        title="SPA Crawling Strategies"
        code={`# React/Angular app crawl (headless mandatory):
katana -u http://target.com -headless -d 3 -jc

# SPA-specific optimizations:
# Wait time बढ़ाओ (JS render होने में time लगता है):
katana -u http://target.com -headless -timeout 30

# Window size set (responsive design testing):
katana -u http://target.com -headless -cw 1920 -ch 1080

# Hash-based routing handle:
# React Router: #/dashboard, #/profile
katana -u http://target.com -headless -jc | grep "#"

# Next.js SSR + CSR hybrid:
# Server-rendered content standard mode में मिलेगा
# Client-side navigation headless में

# Angular lazy-loaded modules:
katana -u http://target.com -headless -d 3 -jc -silent | grep "chunk"

# API calls capture (XHR/Fetch):
katana -u http://target.com -headless -jc -json | grep -i "api\\|fetch\\|xhr"`}
      />
      <CodeBlock
        title="SPA Route Discovery"
        code={`# JavaScript bundles से routes extract करो:
katana -u http://target.com -jc -silent | grep "\\.js$" | while read js_url; do
    curl -s "$js_url" | grep -oP 'path:\\s*"[^"]*"' | sort -u
done

# React Router paths:
katana -u http://target.com -headless -jc -silent | grep -iE "/(dashboard|admin|profile|settings|api)"

# Dynamic imports discover:
katana -u http://target.com -headless -jc -silent | grep -i "chunk\\|lazy\\|dynamic"

# API endpoints from SPA:
katana -u http://target.com -headless -jc -silent | grep -E "/api/|/v[0-9]/" | sort -u

# WebSocket endpoints:
katana -u http://target.com -headless -jc -silent | grep -i "ws://\\|wss://"`}
      />

      <h2>WAF Bypass Techniques</h2>
      <p>
        Web Application Firewalls (WAFs) aggressive crawling detect और block कर सकते हैं। Katana को stealthy बनाने के लिए rate limiting, custom headers, और proxy techniques use करो:
      </p>
      <CodeBlock
        title="Stealthy Crawling"
        code={`# Rate limiting (requests per second control):
katana -u http://target.com -rl 10

# Custom User-Agent (legitimate browser जैसा):
katana -u http://target.com -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"

# Random User-Agent rotation:
# Multiple UAs file में रखो, script से rotate करो
for ua in "Mozilla/5.0..." "Chrome/..." "Firefox/..."; do
    katana -u http://target.com -H "User-Agent: $ua" -rl 5 -d 1 -silent >> urls.txt
done

# Proxy rotation:
katana -u http://target.com -proxy http://proxy1:8080
katana -u http://target.com -proxy http://proxy2:8080

# Cookie-based bypass (legitimate session):
katana -u http://target.com -H "Cookie: session=valid_session_id"

# Referrer header (normal browsing pattern):
katana -u http://target.com -H "Referer: https://google.com"

# Slow crawl (minimum detection):
katana -u http://target.com -rl 5 -timeout 30 -d 1`}
      />
      <CodeBlock
        title="WAF Detection and Adaptation"
        code={`# WAF detect करो (wafw00f से):
wafw00f http://target.com

# Cloudflare bypass strategies:
# 1. Real browser cookies use करो (manually login करो)
# 2. Rate limit बहुत कम रखो: -rl 5
# 3. Legitimate User-Agent set करो
# 4. Normal browsing pattern simulate करो

# AWS WAF bypass:
# - Random delays between requests
# - Session cookies maintain करो
# - JavaScript challenges headless mode से handle होंगे

# ModSecurity bypass:
# - Encoding variations try करो
# - Case sensitivity randomize करो
# - Parameter pollution try करो

# Practical stealth script:
katana -u http://target.com -rl 5 -timeout 30 -d 1 -scope domain \\
  -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \\
  -H "Accept: text/html,application/xhtml+xml" \\
  -H "Accept-Language: en-US,en;q=0.9" \\
  -H "Referer: https://www.google.com/" \\
  -silent > stealth_urls.txt`}
      />

      <h2>Batch Processing and Automation</h2>
      <p>
        Multiple targets को efficiently process करने के लिए batch scripts और parallel execution use करो:
      </p>
      <CodeBlock
        title="Batch Target Processing"
        code={`#!/bin/bash
# Multiple targets batch crawl script

TARGET_FILE=$1
OUTPUT_DIR="katana_batch_$(date +%Y%m%d)"
mkdir -p "$OUTPUT_DIR"

echo "[*] Processing $(wc -l < $TARGET_FILE) targets..."

while IFS= read -r target; do
    # Sanitize filename
    filename=$(echo "$target" | sed 's/[^a-zA-Z0-9]/_/g')

    echo "[+] Crawling: $target"

    # Crawl with timeout
    timeout 300 katana -u "$target" -jc -d 2 -scope domain \\
      -ef png,jpg,gif,css,js \\
      -rl 20 \\
      -silent \\
      > "$OUTPUT_DIR/${filename}_urls.txt" 2>/dev/null

    URL_COUNT=$(wc -l < "$OUTPUT_DIR/${filename}_urls.txt")
    echo "[+] Found $URL_COUNT URLs for $target"

    # Rate limit between targets
    sleep 10

done < "$TARGET_FILE"

# Summary report
echo ""
echo "=== Batch Crawl Summary ==="
echo "Targets processed: $(wc -l < $TARGET_FILE)"
echo "Total URLs: $(cat $OUTPUT_DIR/*.txt | wc -l)"
echo "Output: $OUTPUT_DIR/"`}
      />
      <CodeBlock
        title="Parallel Execution"
        code={`#!/bin/bash
# Parallel crawl with GNU parallel

TARGET_FILE=$1
OUTPUT_DIR="parallel_results"
MAX_JOBS=3
mkdir -p "$OUTPUT_DIR"

crawl_target() {
    target=$1
    filename=$(echo "$target" | sed 's/[^a-zA-Z0-9]/_/g')

    timeout 300 katana -u "$target" -jc -d 2 -scope domain \\
      -ef png,jpg,gif,css,js \\
      -rl 10 \\
      -silent \\
      > "$OUTPUT_DIR/${filename}.txt" 2>/dev/null

    echo "[+] $target: $(wc -l < "$OUTPUT_DIR/${filename}.txt") URLs"
}

export -f crawl_target
export OUTPUT_DIR

# GNU parallel से multiple targets simultaneously:
cat "$TARGET_FILE" | parallel -j $MAX_JOBS crawl_target {}

echo "[*] All targets processed!"
echo "[*] Total URLs: $(cat $OUTPUT_DIR/*.txt | sort -u | wc -l)"`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">gospider</td><td className="py-2 px-3">वेब क्रॉलर</td><td className="py-2 px-3">Go-based, headless support, fast</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hakrawler</td><td className="py-2 px-3">वेब क्रॉलर</td><td className="py-2 px-3">Simple, pipeline-friendly, lightweight</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Photon</td><td className="py-2 px-3">OSINT क्रॉलर</td><td className="py-2 px-3">Python-based, data extraction focus</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ParamSpider</td><td className="py-2 px-3">Parameter discovery</td><td className="py-2 px-3">URL parameters focus, simple</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">waybackurls</td><td className="py-2 px-3">Archive URLs</td><td className="py-2 px-3">Wayback Machine से historical URLs</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">gau</td><td className="py-2 px-3">URL discovery</td><td className="py-2 px-3">Multiple archive sources (OTX, Wayback)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dirsearch</td><td className="py-2 px-3">Directory brute force</td><td className="py-2 px-3">Wordlist-based discovery, mature</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">OWASP ZAP Spider</td><td className="py-2 px-3">वेब स्पाइडर</td><td className="py-2 px-3">GUI-based, full web app scanner</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Katana से JS-heavy एप्स (React, Angular, Vue) क्रॉल करो — hidden API endpoints मिल सकते हैं</li>
          <li>-jc flag से JavaScript rendering enable होता है — modern sites के लिए ज़रूरी</li>
          <li>Pipeline में use करो — subfinder + httpx + katana + nuclei combo</li>
          <li>Scope control use करो ताकि irrelevant URLs skip हों</li>
          <li>-kf से robots.txt और sitemap automatically crawl होते हैं — hidden paths मिलते हैं</li>
          <li>Rate limit set करो ताकि WAF block न करे — -rl 10-50 safe है</li>
          <li>Depth 2-3 sufficient है most targets के लिए</li>
          <li>JS bundles से API keys और secrets extract करो — बहुत valuable findings मिल सकते हैं</li>
          <li>हमेशा authorized permission के साथ ही crawl करो</li>
          <li>Large sites पर depth 1 से शुरू करो, results analyze करो, फिर depth बढ़ाओ</li>
          <li>Headless mode expensive है — standard mode sufficient है static sites के लिए</li>
          <li>Katana output को sort -u से deduplicate करो — unique URLs ही useful हैं</li>
          <li>robots.txt और sitemap.xml manually भी check करो — Katana -kf से auto parse होता है</li>
          <li>JS bundles में API keys, tokens, और secrets search करो — बहुत common finding है</li>
          <li>WAF protection sites पर -rl 10-50 safe rate है — aggressive crawling block हो सकता है</li>
          <li>Katana + httpx + nuclei pipeline automated recon के लिए best practice है</li>
          <li>Parameter URLs (with ?) XSS/SQLi testing के लिए most valuable हैं</li>
          <li>Katana JSON output detailed metadata देता है — automation के लिए ideal format</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> वेब क्रॉलिंग server पर load डालता है। Aggressive crawling से server crash हो सकता है या IP block हो सकता है। Rate limit respect करो। हमेशा written authorization लो। Document everything। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत क्रॉलिंग अपराध हो सकता है। केवल अपने लैब वातावरण या लिखित प्राधिकरण के साथ ही उपयोग करें।
      </div>
    </TutorialLayout>
  )
}
