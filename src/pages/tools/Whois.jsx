import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Whois() {
  return (
    <TutorialLayout
      title="whois"
      subtitle="डोमेन रजिस्ट्रेशन इन्फो लुकअप — owner, registrar, name servers, dates"
      icon="🔍"
      prev={{ to: '/tool/whois', label: 'whois' }}
      next={{ to: '/tool/whois', label: 'whois' }}
    >
      <h2>What is Whois?</h2>
      <p>
        Whois एक network protocol और command-line tool है जो domain names, IP addresses, और autonomous systems के बारे में registration information query करता है। यह WHOIS protocol (RFC 3912) पर based है और domain registrar databases से data retrieve करता है। OSINT, reconnaissance, और domain management में यह fundamental tool है।
      </p>
      <p>
        Whois queries से domain owner (registrant), registration date, expiry date, name servers, registrar info, और contact details पता चलते हैं। पहले यह information publicly available थी, लेकिन GDPR (2018) के बाद बहुत सारी personal info redact हो गई है। फिर भी technical details जैसे name servers, registrar, और dates अभी भी मिलते हैं।
      </p>
      <p>
        Whois सिर्फ domain lookup के लिए नहीं है — IP address ranges, ASN (Autonomous System Numbers), और network blocks के बारे में भी information देता है। Penetration testers इसे reconnaissance phase में use करते हैं target के infrastructure को समझने के लिए। Red teamers, bug bounty hunters, और law enforcement सभी इस tool का इस्तेमाल करते हैं।
      </p>
      <p>
        Whois protocol TCP port 43 पर काम करता है। Client एक simple text query भेजता है और server structured text response देता है। हर TLD (Top Level Domain) का अपना WHOIS server होता है — .com के लिए VeriSign, .org के लिए PIR, .in के लिए INRegistry। Whois client automatically उचित server को query route करता है। यह process इतनी simple है कि कोई भी developer इसे implement कर सकता है।
      </p>
      <p>
        WHOIS data cybersecurity में बहुत महत्वपूर्ण है। Incident response के दौरान malicious domain का registration data investigate करना हो, phishing campaign track करना हो, ya brand protection के लिए similar domains खोजने हों — WHOIS सबमें काम आता है। Law enforcement agencies cybercrime investigations में WHOIS data को evidence के रूप में इस्तेमाल करती हैं। Corporate security teams अपने domains की WHOIS data monitor करती हैं unauthorized transfers रोकने के लिए।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Whois queries legal हैं — यह public information है। लेकिन जो information मिलती है उसका गलत इस्तेमाल (stalking, harassment, social engineering) अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत data misuse अपराध हो सकता है।
      </div>

      <h2>History of Whois</h2>
      <p>
        WHOIS protocol की शुरुआत 1982 में हुई थी जब Elizabeth Feinler ने Stanford Research Institute (SRI-NIC) में इसे develop किया। शुरू में यह सिर्फ ARPANET users के लिए था — कौन सा computer किसका है, यह पता करने के लिए। 1984 में RFC 920 ने domain name system को define किया और WHOIS उसका हिस्सा बन गया।
      </p>
      <p>
        1999 में ICANN (Internet Corporation for Assigned Names and Numbers) बना और WHOIS data management को standardized किया गया। तब से हर domain registrar को WHOIS database maintain करना mandatory है। 2003 में ICANN ने WHOIS policy framework establish किया जिसमें data accuracy requirements define हुईं। Registrars को अपनी WHOIS data को accurate और up-to-date रखना अनिवार्य हो गया।
      </p>
      <p>
        2018 में GDPR लागू होने के बाद WHOIS data में बड़ा बदलाव आया — personal information (नाम, email, phone, address) redact होने लगी। ICANN को WHOIS system को GDPR-compliant बनाना पड़ा। इससे security researchers और law enforcement के लिए investigations मुश्किल हो गईं। कई organizations ने ICANN से "gated access" model की मांग की जिससे authorized users को full data मिल सके।
      </p>
      <p>
        आज WHOIS की जगह RDAP (Registration Data Access Protocol) आ रहा है जो JSON-based है और ज़्यादा structured data देता है। RDAP 2015 में RFC 7480-7484 के तहत standardized हुआ। ICANN ने 2019 से सभी registrars को RDAP support mandatory कर दिया है। RDAP में authentication और authorization built-in है, जो GDPR compliance आसान बनाता है। WHOIS अभी भी काम करता है, लेकिन धीरे-धीरे RDAP replace कर रहा है।
      </p>

      <h2>How Whois Works?</h2>
      <p>
        Whois client-server model पर काम करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Query Generation:</strong> Client domain/IP/ASN query बनाता है</li>
        <li><strong className="text-white">Server Lookup:</strong> उचित WHOIS server (IANA, registrar, RIR) को query भेजता है</li>
        <li><strong className="text-white">Response Parsing:</strong> Server structured text response भेजता है</li>
        <li><strong className="text-white">Display:</strong> Client response format करके display करता है</li>
      </ul>
      <p>
        हर TLD (Top Level Domain) का अपना WHOIS server है — .com के लिए VeriSign, .org के लिए PIR, .in के लिए INRegistry। Whois client automatically उचित server को query करता है। Port 43 पर TCP connection establish होती है और plain text में query/response होता है।
      </p>
      <p>
        WHOIS query process में referral system भी होता है। अगर registry server से direct data नहीं मिलता, तो वह registrar के WHOIS server का referral देता है। Client तब registrar server को query करता है और detailed information प्राप्त करता है। यह recursive lookup mechanism है जो -r flag से control होता है। WHOIS response format standardized नहीं है — हर registrar अलग format use कर सकता है। इसलिए automated parsing challenging है और RDAP इसीलिए better है क्योंकि यह JSON format use करता है।
      </p>

      <h2>Installation</h2>
      <p>
        Whois सभी Linux distributions में pre-installed आता है। अगर किसी कारण से नहीं है तो आसानी से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="Whois Installation — Linux"
        code={`# Linux में pre-installed:
# काली लिनक्स और उबंटू में आता है

# अगर नहीं है:
sudo apt update
sudo apt install whois

# Fedora/CentOS/RHEL:
sudo dnf install whois

# Arch Linux:
sudo pacman -S whois

# Alpine Linux:
apk add whois

# वर्जन चेक:
whois --version

# सहायता:
whois --help`}
      />
      <CodeBlock
        title="Whois Installation — macOS & Windows"
        code={`# macOS में:
# Pre-installed (command line tools)
# Homebrew से भी install कर सकते हो:
brew install whois

# Windows में:
# Built-in नहीं है, alternatives:
# 1. Git Bash use करो (whois included)
# 2. Windows Sysinternals: whois.exe
#    https://docs.microsoft.com/en-us/sysinternals/

# 3. Python wrapper (cross-platform):
pip install python-whois

# 4. Online WHOIS tools:
# whois.domaintools.com
# whois.icann.org
# whois.iana.org`}
      />

      <h2>Basic Usage</h2>
      <p>
        Whois का बेसिक इस्तेमाल बहुत आसान है — बस domain, IP, या ASN दो।
      </p>
      <CodeBlock
        title="Whois Commands"
        code={`# Domain lookup:
whois example.com

# IP address lookup:
whois 8.8.8.8

# ASN lookup:
whois AS15169

# Specific WHOIS server:
whois -h whois.verisign-grs.com example.com

# Short output (less verbose):
whois -h whois.crsnic.net "domain example.com"

# इंडियन डोमेन:
whois example.co.in

# Registrar lookup:
whois "registrar Example Registrar"

# .io domain:
whois example.io`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Option</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-h server</td><td className="py-2 px-3">Specific WHOIS server specify करें</td><td className="py-2 px-3 font-mono text-xs">-h whois.verisign-grs.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p port</td><td className="py-2 px-3">Custom port (default 43)</td><td className="py-2 px-3 font-mono text-xs">-p 4343</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r</td><td className="py-2 px-3">No recursion — सिर्फ पहला server query करो</td><td className="py-2 px-3 font-mono text-xs">-r</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-R</td><td className="py-2 px-3">Force recursion — सभी servers query करो</td><td className="py-2 px-3 font-mono text-xs">-R</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-a</td><td className="py-2 px-3">Use WHOISNIC server</td><td className="py-2 px-3 font-mono text-xs">-a</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c</td><td className="py-2 px-3">Compact output</td><td className="py-2 px-3 font-mono text-xs">-c</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d</td><td className="py-2 px-3">Debug mode</td><td className="py-2 px-3 font-mono text-xs">-d</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-T type</td><td className="py-2 px-3">Query type (domain, nameserver, registrar)</td><td className="py-2 px-3 font-mono text-xs">-T domain</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Domain Registration Info</h2>
      <p>
        Domain lookup से registration details मिलती हैं — कब registered हुआ, किसने किया, कब expire होगा।
      </p>
      <CodeBlock
        title="Domain Info Example"
        code={`# Domain lookup:
whois google.com

# यह information मिलती है:
# Domain Name: GOOGLE.COM
# Registry Domain ID: ...
# Registrar WHOIS Server: whois.markmonitor.com
# Registrar: MarkMonitor Inc.
# Updated Date: 2019-09-09T15:39:04Z
# Creation Date: 1997-09-15T04:00:00Z  ← कब registered हुआ
# Registry Expiry Date: 2028-09-14T04:00:00Z ← कब expire होगा
# Name Server: ns1.google.com ← DNS servers
# DNSSEC: unsigned
# Domain Status: clientDeleteProhibited ← status codes

# Key fields analysis:
# Registrar — किसने registered किया
# Creation Date — कब बना (older = more established)
# Expiry Date — कब expire होगा (soon = potential takeover)
# Name Servers — DNS servers (infrastructure info)
# Status — domain transfer/protection status`}
      />

      <h2>IP Address Lookup</h2>
      <p>
        IP lookup से organization, location, और network range information मिलती है।
      </p>
      <CodeBlock
        title="IP Information"
        code={`# IP address lookup:
whois 8.8.8.8

# यह information मिलती है:
# NetRange: 8.8.8.0 - 8.8.8.255
# CIDR: 8.8.8.0/24
# NetName: GOOGLE
# Organization: Google LLC
# Country: US
# State: California
# City: Mountain View
# RegDate: 1992-12-01
# Updated: 2014-11-14

# IP lookup से पता चलता है:
# IP किस organization का है
# किस country में है
# किस network range में है (CIDR)
# ASN (Autonomous System Number)
# Registration date`}
      />

      <h2>ASN Lookup</h2>
      <p>
        ASN (Autonomous System Number) lookup से network operator की पूरी जानकारी मिलती है।
      </p>
      <CodeBlock
        title="ASN Information"
        code={`# ASN lookup:
whois AS15169

# यह information मिलती है:
# ASNumber: 15169
# ASName: GOOGLE
# Organization: Google LLC
# Country: US
# IPv4 Prefixes: 8.8.8.0/24, 8.8.4.0/24, ...
# IPv6 Prefixes: 2001:4860:4860::8888/128, ...

# ASN बताता है:
# Network operator कौन है
# कितने IP ranges manage करता है
# BGP routing information
# Network topology`}
      />

      <h2>TLD-Specific WHOIS Servers</h2>
      <p>
        हर Top Level Domain का अपना WHOIS server होता है। Specific TLD के लिए directly server query करने से ज़्यादा accurate results मिलते हैं।
      </p>
      <CodeBlock
        title="TLD WHOIS Servers"
        code={`# .com domains — VeriSign:
whois -h whois.verisign-grs.com example.com

# .org domains — PIR:
whois -h whois.publicinterestregistry.org example.org

# .net domains — VeriSign:
whois -h whois.verisign-grs.com example.net

# .in domains — INRegistry:
whois -h whois.inregistry.net example.in

# .io domains — Afilias:
whois -h whois.nic.io example.io

# .dev domains — Charleston Road Registry:
whois -h whois.nic.google example.dev

# .uk domains — Nominet:
whois -h whois.nic.uk example.uk

# .de domains — DENIC:
whois -h whois.denic.de example.de

# .au domains — auDA:
whois -h whois.auda.org.au example.com.au

# IANA root zone:
whois -h whois.iana.org .com`}
      />

      <h2>WHOIS for OSINT</h2>
      <p>
        OSINT और reconnaissance में WHOIS बहुत valuable है — target का infrastructure map बनाने के लिए।
      </p>
      <CodeBlock
        title="OSINT Workflow"
        code={`# स्टेप 1: Domain WHOIS — registrar, dates, name servers
whois target.com

# स्टेप 2: Name servers से related domains ढूंढो
whois ns1.target.com
whois ns2.target.com

# स्टेप 3: IP ranges find करो
whois target.com | grep "Name Server"
dig ns1.target.com
whois [IP_ADDRESS]

# स्टेप 4: ASN find करो
whois [IP_ADDRESS] | grep "OriginAS"
whois AS[NUMBER]

# स्टेप 5: Related domains (same registrar/owner)
# Historical WHOIS tools (DomainTools, WhoisXML)
# Reverse WHOIS — same owner के और domains

# स्टेप 6: Infrastructure map बनाओ
# सभी data combine करके target का पूरा picture`}
      />
      <CodeBlock
        title="Domain Expiry Monitoring"
        code={`#!/bin/bash
# Domain expiry monitoring — takeover opportunities

DOMAINS="domains.txt"

while read domain; do
    EXPIRY=$(whois "$domain" 2>/dev/null | grep -i "expir" | head -1)
    CREATION=$(whois "$domain" 2>/dev/null | grep -i "creat" | head -1)
    REGISTRAR=$(whois "$domain" 2>/dev/null | grep -i "registrar" | head -1)

    echo "=== $domain ==="
    echo "  $CREATION"
    echo "  $EXPIRY"
    echo "  $REGISTRAR"

    # Expiry date extract करो:
    EXPIRY_DATE=$(echo "$EXPIRY" | awk '{print $4}' | cut -d'T' -f1)
    if [ ! -z "$EXPIRY_DATE" ]; then
        EXPIRY_EPOCH=$(date -d "$EXPIRY_DATE" +%s 2>/dev/null)
        NOW_EPOCH=$(date +%s)
        DAYS_LEFT=$(( ($EXPIRY_EPOCH - $NOW_EPOCH) / 86400 ))
        echo "  Days left: $DAYS_LEFT"
    fi
    echo ""
    sleep 2
done < "$DOMAINS"`}
      />

      <h2>Reverse WHOIS Lookup</h2>
      <p>
        Reverse WHOIS से एक ही owner या registrar के सभी domains find कर सकते हो। यह attack surface discovery में बहुत useful है।
      </p>
      <CodeBlock
        title="Reverse WHOIS Techniques"
        code={`# Technique 1: Same name server के domains
# पहले target domain का name server find करो:
whois target.com | grep "Name Server"
# Output: ns1.target.com

# फिर उस name server के और domains:
# Online tools use करो:
# - dnslytics.com/reverse/ns
# - viewdns.info/reversens
# - whoisxmlapi.com

# Technique 2: Same registrar के domains
# whois target.com | grep "Registrar:"
# फिर registrar search करो

# Technique 3: WhoisXML API (programmatic):
curl -s "https://reverse-whois.whoisxmlapi.com/api/v2" \\
  -H "X-Authentication-Token: YOUR_API_KEY" \\
  -d '{"apiKey":"YOUR_KEY","searchType":"current","mode":"purchase","advancedSearchTerms":[{"field":"registrant.name","term":"Target Corp"}]}'

# Technique 4: Historical WHOIS data:
# DomainTools: domaintools.com
# WhoisXML: whoisxmlapi.com
# SecurityTrails: securitytrails.com`}
      />

      <h2>RDAP — WHOIS का Modern Replacement</h2>
      <p>
        RDAP (Registration Data Access Protocol) WHOIS का replacement है जो JSON-based structured data देता है। ICANN ने 2019 से सभी registrars के लिए RDAP support mandatory कर दिया है।
      </p>
      <CodeBlock
        title="RDAP Queries"
        code={`# RDAP domain lookup:
curl -s "https://rdap.org/domain/example.com" | python3 -m json.tool

# RDAP IP lookup:
curl -s "https://rdap.org/ip/8.8.8.8" | python3 -m json.tool

# RDAP ASN lookup:
curl -s "https://rdap.org/autnum/15169" | python3 -m json.tool

# RDAP registrar lookup:
curl -s "https://rdap.org/entity/whois.example.com" | python3 -m json.tool

# RDAP vs WHOIS:
# RDAP: JSON format, structured, machine-readable
# WHOIS: plain text, unstructured, human-readable
# RDAP: authentication support (gated access)
# WHOIS: no authentication
# RDAP: standardized response format
# WHOIS: registrar-dependent format

# RDAP endpoints:
# https://rdap.org/ — universal endpoint
# https://rdap.verisign.com/com/v1/ — .com
# https://rdap.publicinterestregistry.org/rdap/ — .org`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="बैश स्क्रिप्ट — Bulk WHOIS"
        code={`#!/bin/bash
# Bulk WHOIS lookup script

DOMAINS="$1"  # domains.txt file
OUTPUT="/tmp/whois_results.txt"

echo "[+] WHOIS scan started: $(date)" > "$OUTPUT"

while read domain; do
    echo "[+] Scanning: $domain"
    echo "=== $domain ===" >> "$OUTPUT"
    whois "$domain" >> "$OUTPUT" 2>&1
    echo "" >> "$OUTPUT"
    sleep 2  # Rate limiting
done < "$DOMAINS"

echo "[+] डन! रिजल्ट्स: $OUTPUT"`}
      />
      <CodeBlock
        title="Python WHOIS Script"
        code={`#!/usr/bin/env python3
# Python WHOIS automation

import whois
import json

def lookup(domain):
    """Domain WHOIS lookup"""
    try:
        w = whois.whois(domain)
        result = {
            "domain": domain,
            "registrar": w.registrar,
            "creation_date": str(w.creation_date),
            "expiration_date": str(w.expiration_date),
            "name_servers": w.name_servers,
            "status": w.status,
            "emails": w.emails,
        }
        return result
    except Exception as e:
        return {"domain": domain, "error": str(e)}

# Bulk lookup:
domains = ["example.com", "google.com", "github.com"]
results = []

for d in domains:
    print(f"[+] Lookup: {d}")
    results.append(lookup(d))

# JSON output:
with open("whois_results.json", "w") as f:
    json.dump(results, f, indent=2)
print("[+] डन! रिजल्ट्स: whois_results.json")`}
      />
      <CodeBlock
        title="Python — WHOIS + DNS Combo Script"
        code={`#!/usr/bin/env python3
# Comprehensive domain recon script

import whois
import subprocess
import json
import sys

def full_recon(domain):
    result = {"domain": domain}

    # WHOIS lookup
    try:
        w = whois.whois(domain)
        result["whois"] = {
            "registrar": w.registrar,
            "creation_date": str(w.creation_date),
            "expiration_date": str(w.expiration_date),
            "name_servers": list(w.name_servers) if w.name_servers else [],
            "status": w.status,
        }
    except Exception as e:
        result["whois"] = {"error": str(e)}

    # DNS lookup
    try:
        dig = subprocess.run(
            ["dig", "+short", domain],
            capture_output=True, text=True
        )
        result["dns"] = {
            "A": dig.stdout.strip().split("\\n"),
        }

        ns = subprocess.run(
            ["dig", "+short", "NS", domain],
            capture_output=True, text=True
        )
        result["dns"]["NS"] = ns.stdout.strip().split("\\n")

        mx = subprocess.run(
            ["dig", "+short", "MX", domain],
            capture_output=True, text=True
        )
        result["dns"]["MX"] = mx.stdout.strip().split("\\n")
    except Exception as e:
        result["dns"] = {"error": str(e)}

    return result

if __name__ == "__main__":
    domain = sys.argv[1] if len(sys.argv) > 1 else "example.com"
    data = full_recon(domain)
    print(json.dumps(data, indent=2))`}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        WHOIS data अकेले limited है, लेकिन other tools के साथ combine करने से powerful recon होता है।
      </p>
      <CodeBlock
        title="WHOIS + Nmap + dig Combo"
        code={`# Complete recon workflow:

# Step 1: WHOIS — infrastructure info
whois target.com > /tmp/whois.txt

# Step 2: Name servers extract करो
NS=$(whois target.com | grep "Name Server" | awk '{print $3}' | head -1)
echo "[+] Name Server: $NS"

# Step 3: Name server का IP find करो
NS_IP=$(dig +short "$NS")
echo "[+] NS IP: $NS_IP"

# Step 4: IP range find करो
whois "$NS_IP" | grep "CIDR"
# Output: 203.0.113.0/24

# Step 5: Network range scan करो
nmap -sn 203.0.113.0/24

# Step 6: DNS records enumerate करो
dig +short target.com
dig +short MX target.com
dig +short TXT target.com
dig +short NS target.com

# Step 7: Subdomain find करो
# Name servers से zone transfer try करो
dig axfr target.com @"$NS"`}
      />

      <h2>Bulk WHOIS — Mass Domain Analysis</h2>
      <p>
        Bug bounty या red team engagement में सैकड़ों domains का WHOIS data analyze करना पड़ता है। Manual lookup impossible है — automation ज़रूरी है। Bulk WHOIS scripts target के पूरे domain portfolio का snapshot देते हैं।
      </p>
      <CodeBlock
        title="Advanced Bulk WHOIS Script"
        code={`#!/bin/bash
# Advanced bulk WHOIS with CSV output

INPUT="$1"
OUTPUT="whois_bulk_$(date +%Y%m%d).csv"

echo "Domain,Registrar,Created,Expires,NameServer1,NameServer2,Status" > "$OUTPUT"

while read domain; do
    DATA=$(whois "$domain" 2>/dev/null)
    REG=$(echo "$DATA" | grep -i "registrar:" | head -1 | cut -d: -f2 | xargs)
    CREATED=$(echo "$DATA" | grep -i "creation date" | head -1 | awk '{print $4}' | cut -d'T' -f1)
    EXPIRES=$(echo "$DATA" | grep -i "expir" | head -1 | awk '{print $4}' | cut -d'T' -f1)
    NS1=$(echo "$DATA" | grep -i "name server" | head -1 | awk '{print $3}')
    NS2=$(echo "$DATA" | grep -i "name server" | sed -n '2p' | awk '{print $3}')
    STATUS=$(echo "$DATA" | grep -i "domain status" | head -1 | cut -d: -f2 | xargs)

    echo "$domain,$REG,$CREATED,$EXPIRES,$NS1,$NS2,$STATUS" >> "$OUTPUT"
    echo "[+] $domain done"
    sleep 2
done < "$INPUT"

echo "[+] CSV saved: $OUTPUT"`}
      />

      <h2>Domain Intelligence — Ownership Patterns</h2>
      <p>
        WHOIS data से domain ownership patterns detect कर सकते हो। Same registrant के domains, similar registration dates, shared name servers — ये सब indicators हैं related infrastructure के। Corporate espionage, phishing campaigns, और competitor analysis में ये patterns बहुत useful हैं।
      </p>
      <CodeBlock
        title="Ownership Pattern Analysis"
        code={`#!/bin/bash
# Ownership pattern finder

DOMAINS="$1"

echo "[+] Analyzing ownership patterns..."

# Name server clustering:
echo "[+] Name Server Clusters:"
for domain in $(cat "$DOMAINS"); do
    NS=$(whois "$domain" 2>/dev/null | grep -i "name server" | awk '{print $3}' | sort)
    echo "$domain: $NS"
done | sort -t: -k2

# Registration date clustering:
echo "[+] Registration Date Clusters:"
for domain in $(cat "$DOMAINS"); do
    DATE=$(whois "$domain" 2>/dev/null | grep -i "creation date" | head -1 | awk '{print $4}' | cut -d'T' -f1)
    echo "$domain: $DATE"
done | sort -t: -k2

# Registrar distribution:
echo "[+] Registrar Distribution:"
for domain in $(cat "$DOMAINS"); do
    REG=$(whois "$domain" 2>/dev/null | grep -i "registrar:" | head -1 | cut -d: -f2 | xargs)
    echo "$REG"
done | sort | uniq -c | sort -rn`}
      />

      <h2>IP Investigation — Network Mapping</h2>
      <p>
        IP address से organization, network range, और geographic location पता चलता है। Incident response में malicious IP का WHOIS data investigate करना पहला step है। IP ranges से target का पूरा network infrastructure map बन सकता है।
      </p>
      <CodeBlock
        title="IP Investigation Workflow"
        code={`# IP investigation step-by-step:

# Step 1: IP WHOIS — organization और range
whois 203.0.113.50 | grep -E "OrgName|NetRange|CIDR|Country"

# Step 2: CIDR range extract करो
CIDR=$(whois 203.0.113.50 | grep "CIDR" | awk '{print $2}')
echo "[+] Network range: $CIDR"

# Step 3: ASN find करो
ASN=$(whois 203.0.113.50 | grep "OriginAS" | awk '{print $2}')
echo "[+] ASN: $ASN"

# Step 4: ASN से सभी IP ranges
whois -h whois.radb.net -- "-i origin $ASN"

# Step 5: IP geolocation (online tools):
# ipinfo.io, ip-api.com, maxmind.com

# Step 6: Reverse DNS
dig -x 203.0.113.50

# Step 7: Port scan (authorized targets only)
nmap -sV 203.0.113.50`}
      />

      <h2>ASN Lookup — Autonomous System Analysis</h2>
      <p>
        ASN (Autonomous System Number) internet routing का fundamental unit है। हर organization जो internet connectivity provide करती है उसका एक ASN होता है। ASN lookup से network operator, IP prefixes, और BGP routing information मिलती है।
      </p>
      <CodeBlock
        title="ASN Deep Analysis"
        code={`# ASN analysis workflow:

# Step 1: ASN lookup
whois AS15169

# Step 2: ASN से IP prefixes
whois -h whois.radb.net -- "-i origin AS15169" | grep "route"

# Step 3: ASN neighbors (BGP peers)
whois -h whois.radb.net -- "-i origin AS15169" | grep "import\|export"

# Step 4: Multiple ASNs for same org
whois -h whois.radb.net -- "-i origin AS15169" | grep "member-of"

# Step 5: ASN ranking (BGP data):
# bgp.he.net, bgpview.io, hurricane electric

# Step 6: ASN history
# WhoisXML ASN database — historical ASN data

# Step 7: IP to ASN mapping
whois -h whois.cymru.com " -v 203.0.113.50"
# Output: ASN | IP | Name`}
      />

      <h2>Comparison Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Whois</th>
              <th className="text-left py-2 px-3 text-neon-green">dig</th>
              <th className="text-left py-2 px-3 text-neon-green">RDAP</th>
              <th className="text-left py-2 px-3 text-neon-green">DomainTools</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">मुख्य काम</td><td className="py-2 px-3">Registration info</td><td className="py-2 px-3">DNS records</td><td className="py-2 px-3">Registration (JSON)</td><td className="py-2 px-3">Historical data</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Data Format</td><td className="py-2 px-3">Plain text</td><td className="py-2 px-3">DNS format</td><td className="py-2 px-3">JSON</td><td className="py-2 px-3">Web UI + API</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GDPR Impact</td><td className="py-2 px-3">हाँ (info redacted)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">Partial</td><td className="py-2 px-3">Historical available</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">IP Lookup</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">ASN Lookup</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Bulk Query</td><td className="py-2 px-3">Manual scripting</td><td className="py-2 px-3">Manual scripting</td><td className="py-2 px-3">API</td><td className="py-2 px-3">API (paid)</td></tr>
            <tr><td className="py-2 px-3 text-white">कीमत</td><td className="py-2 px-3">फ्री</td><td className="py-2 px-3">फ्री</td><td className="py-2 px-3">फ्री</td><td className="py-2 px-3">Paid</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'GDPR के बाद owner info नहीं मिल रही', a: '2018 GDPR के बाद personal info redact होती है। Technical details (name servers, dates, registrar) अभी भी मिलते हैं। Historical WHOIS (WhoisXML API, DomainTools) try करो। RDAP (rdap.org) भी check करो।' },
          { q: 'Rate limited हो रहा है', a: 'WHOIS servers rate limiting लगाते हैं। Bulk queries के लिए sleep 2-5 seconds delay add करो। Commercial WHOIS API (WhoisXML, SecurityTrails) use करो।' },
          { q: 'IP lookup में wrong org दिखा रहा', a: 'IP reassignment हो सकती है। RIR (ARIN, RIPE, APNIC) directly check करो। rdap.org भी try करो।' },
          { q: 'WHOIS server connect नहीं हो रहा', a: 'Port 43 block हो सकता है firewall में। Online WHOIS services use करो (whois.domaintools.com)। VPN try करो।' },
          { q: 'Domain "NOT FOUND" दिखा रहा', a: 'Domain registered नहीं है या TLD का WHOIS server different है। Specific server specify करो: whois -h whois.nic.in domain.co.in' },
          { q: 'Too many queries error', a: 'WHOIS server ने block कर दिया। IP change करो (VPN)। या online WHOIS tools use करो।' },
          { q: 'WHOIS data outdated दिखा रहा', a: 'WHOIS caches data हो सकता है। Registry directly query करो: whois -h whois.verisign-grs.com domain.com। RDAP try करो — real-time data देता है।' },
          { q: 'Specific registrar data नहीं मिल रहा', a: 'हर TLD का अपना WHOIS server है। IANA WHOIS (whois.iana.org) से TLD server find करो, फिर उस server को directly query करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        WHOIS data exposure से कैसे बचें (defensive perspective):
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">WHOIS Privacy:</strong> Domain registrar से WHOIS privacy/proxy service activate करो</li>
        <li><strong className="text-white">Generic Email:</strong> Registration में personal email नहीं, generic email (info@) use करो</li>
        <li><strong className="text-white">Privacy Registrar:</strong> Privacy-focused registrar use करो (Namecheap, Njalla)</li>
        <li><strong className="text-white">Separate Domains:</strong> Personal और business domains अलग रखो</li>
        <li><strong className="text-white">WHOIS Monitoring:</strong> अपने domains का WHOIS data monitor करो — unauthorized changes detect करो</li>
        <li><strong className="text-white">Domain Locking:</strong> Registrar lock enable करो — unauthorized transfers रुकेंगी</li>
        <li><strong className="text-white">RDAP Transition:</strong> RDAP aware हो जाओ — WHOIS का replacement आ रहा है</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        WHOIS practice के लिए safe targets:
      </p>
      <CodeBlock
        title="Practice"
        code={`# WHOIS queries practice करो:
whois example.com      # IANA example domain
whois google.com       # Large corporation
whois github.com       # Tech company

# अलग-अलग TLDs try करो:
whois example.org      # .org TLD
whois example.net      # .net TLD
whois example.co.in    # Indian domain
whois example.io       # Tech TLD
whois example.dev      # Google TLD

# IP ranges explore करो:
whois 8.8.8.8          # Google DNS
whois 1.1.1.1          # Cloudflare DNS
whois 208.67.222.222   # OpenDNS

# ASN explore करो:
whois AS15169  # Google
whois AS13335  # Cloudflare
whois AS16509  # Amazon
whois AS14618  # AWS

# Indian RIR (APNIC):
whois -h whois.apnic.net 103.21.124.0`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड WHOIS Analysis"
        code={`# Reverse WHOIS — same registrar के domains:
# DomainTools API use करो

# WHOIS history — पुरानी registration data:
# WhoisXML API: whoisxmlapi.com

# Domain expiry monitoring:
#!/bin/bash
DOMAIN="target.com"
EXPIRY=$(whois "$DOMAIN" | grep "Expiry Date" | awk '{print $4}')
echo "[+] $DOMAIN expires: $EXPIRY"

# Network range mapping:
whois 8.8.8.8 | grep "CIDR"
# Output: 8.8.8.0/24
# पूरा range scan करो

# ASN to IP mapping:
whois -h whois.radb.net -- "-i origin AS15169"
# Google के सभी IP ranges

# RDAP (modern alternative):
curl -s "https://rdap.org/domain/example.com" | python3 -m json.tool

# WHOIS + Nmap combo:
whois target.com | grep "Name Server"
dig +short ns1.target.com
nmap -sV [IP_FROM_DIG]`}
      />
      <CodeBlock
        title="WHOIS Data Parsing with Grep/Sed"
        code={`# WHOIS output से specific fields extract करो:

# Registrar name:
whois target.com | grep -i "registrar:" | head -1

# Creation date:
whois target.com | grep -i "creation date" | head -1

# Expiry date:
whois target.com | grep -i "expir" | head -1

# Name servers:
whois target.com | grep -i "name server"

# Status codes:
whois target.com | grep -i "domain status"

# Registrar WHOIS server:
whois target.com | grep -i "registrar whois"

# All dates extract करो:
whois target.com | grep -iE "created|updated|expir|date"

# Registration data years ago calculate करो:
CREATION=$(whois target.com | grep -i "creation date" | awk '{print $4}' | cut -d'T' -f1)
AGE=$(( ($(date +%s) - $(date -d "$CREATION" +%s)) / 31536000 ))
echo "[+] Domain age: $AGE years"`}
      />
      <CodeBlock
        title="WHOIS + Shodan + DNS Combo"
        code={`#!/bin/bash
# Complete infrastructure recon script

TARGET="$1"
echo "[+] Recon started for: $TARGET"

# WHOIS data
echo "[+] WHOIS lookup..."
whois "$TARGET" > /tmp/whois_$TARGET.txt

# DNS records
echo "[+] DNS records..."
dig +short "$TARGET" > /tmp/dns_$TARGET.txt
dig +short MX "$TARGET" >> /tmp/dns_$TARGET.txt
dig +short TXT "$TARGET" >> /tmp/dns_$TARGET.txt
dig +short NS "$TARGET" >> /tmp/dns_$TARGET.txt

# IP ranges
IP=$(dig +short "$TARGET" | head -1)
echo "[+] IP: $IP"

whois "$IP" | grep "CIDR" > /tmp/cidr_$TARGET.txt
whois "$IP" | grep "OrgName" >> /tmp/cidr_$TARGET.txt

# ASN
ASN=$(whois "$IP" | grep "OriginAS" | awk '{print $2}')
echo "[+] ASN: $ASN"

# Shodan (if API key available):
# curl -s "https://api.shodan.io/shodan/host/$IP?key=YOUR_API_KEY"

echo "[+] Results saved to /tmp/*_$TARGET.txt"`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        <strong>Case Study 1 — Phishing Domain Investigation:</strong> एक banking phishing campaign में attackers ने "secure-bankofindia.com" domain register की। WHOIS lookup से पता चला कि domain 3 दिन पहले register हुई, registrar Namecheap है, और privacy proxy use हो रहा है। Name server "ns1.suspicious-host.com" resolve हो रहा था। उस name server के WHOIS से 50+ similar phishing domains मिलीं — सब same infrastructure पर hosted थीं। Law enforcement को report करने में WHOIS data crucial evidence था।
      </p>
      <p>
        <strong>Case Study 2 — Corporate Espionage Prevention:</strong> एक company ने अपने brand name के similar domains monitor करना शुरू किया। WHOIS monitoring से पता चला कि किसी ने "companyname-login.com" register की है — same registrar और name servers जो previous attack में use हुए थे। Company ने तुरंत domain takedown request filed किया और customers को alert भेजा। Proactive WHOIS monitoring ने potential data breach रोका।
      </p>
      <p>
        <strong>Case Study 3 — Bug Bounty Recon:</strong> एक bug bounty hunter ने target company का WHOIS data check किया। Name servers से 3 subdomains मिले जो public DNS में नहीं थे। उन subdomains में से एक staging server था जो outdated WordPress चला रहा था। WHOIS + DNS combo से hidden attack surface discover हुआ और $5000 का bounty मिला।
      </p>

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या WHOIS queries legal हैं?', a: 'हाँ, WHOIS queries पूरी तरह legal हैं — यह public data है। लेकिन data का misuse (social engineering, stalking) illegal है।' },
          { q: 'GDPR के बाद क्या बदला?', a: 'Personal info (नाम, email, phone, address) redact होती है। Technical details (name servers, dates, registrar) अभी भी मिलते हैं।' },
          { q: 'RDAP क्या है?', a: 'RDAP (Registration Data Access Protocol) WHOIS का modern replacement है। JSON-based, structured data देता है। rdap.org पर access कर सकते हो।' },
          { q: 'Bulk WHOIS कैसे करें?', a: 'Python whois library use करो। या bash script with sleep delays। Commercial APIs (WhoisXML, SecurityTrails) for production use।' },
          { q: 'Historical WHOIS कैसे देखें?', a: 'DomainTools, WhoisXML API, SecurityTrails — ये सब historical WHOIS data store करते हैं। Paid services हैं।' },
          { q: 'WHOIS privacy क्या है?', a: 'Registrars WHOIS privacy/proxy service offer करते हैं — आपकी real info hide होती है। Namecheap, GoDaddy सब देते हैं।' },
          { q: 'क्या WHOIS data 100% accurate है?', a: 'नहीं, registrars data verify नहीं करते। Fake info register की जा सकती है। Historical data cross-reference करो accuracy के लिए।' },
          { q: 'WHOIS vs RDAP — कौन सा use करें?', a: 'RDAP better है structured data के लिए। WHOIS backward compatible है। Production automation के लिए RDAP API use करो। Quick checks के लिए WHOIS CLI sufficient है।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dig</td><td className="py-2 px-3">DNS lookup</td><td className="py-2 px-3">DNS records (A, MX, NS, TXT, SOA)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">nslookup</td><td className="py-2 px-3">DNS query</td><td className="py-2 px-3">Simple DNS lookup, cross-platform</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">RDAP</td><td className="py-2 px-3">Registration Data Access</td><td className="py-2 px-3">WHOIS replacement (JSON-based)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DomainTools</td><td className="py-2 px-3">Historical WHOIS</td><td className="py-2 px-3">WHOIS history, reverse WHOIS, API</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">SecurityTrails</td><td className="py-2 px-3">DNS & WHOIS intelligence</td><td className="py-2 px-3">Historical DNS, WHOIS, subdomains</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Reporting and Output Analysis</h2>
      <p>
        WHOIS data organize करना और report बनाना professional penetration testing में ज़रूरी है। Structured data से patterns और relationships आसानी से दिखते हैं।
      </p>
      <CodeBlock
        title="WHOIS Report Generation"
        code={`#!/bin/bash
# WHOIS report generator

TARGET="$1"
REPORT="/tmp/whois_report_$(date +%Y%m%d).html"

cat > "$REPORT" << 'HEADER'
<html><head><style>
body { background: #1a1a1a; color: #00ff00; font-family: monospace; }
table { border-collapse: collapse; width: 100%; }
th,td { border: 1px solid #333; padding: 8px; text-align: left; }
th { background: #0a0a0a; }
</style></head><body>
<h1>WHOIS Recon Report</h1>
HEADER

echo "<h2>Domain: $TARGET</h2>" >> "$REPORT"
echo "<pre>" >> "$REPORT"
whois "$TARGET" >> "$REPORT" 2>&1
echo "</pre>" >> "$REPORT"

# IP info
IP=$(dig +short "$TARGET" | head -1)
echo "<h2>IP: $IP</h2>" >> "$REPORT"
echo "<pre>" >> "$REPORT"
whois "$IP" >> "$REPORT" 2>&1
echo "</pre>" >> "$REPORT"

echo "</body></html>" >> "$REPORT"
echo "[+] Report: $REPORT"`}
      />

      <h2>Performance Tuning</h2>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Rate Limiting:</strong> Bulk queries में 2-5 seconds delay रखो — WHOIS servers rate limiting लगाते हैं</li>
        <li><strong className="text-white">Caching:</strong> WHOIS results cache करो — same domain बार-बार query मत करो (24 hours TTL)</li>
        <li><strong className="text-white">Timeout:</strong> Connection timeout 10 seconds रखो — slow servers hang हो सकते हैं</li>
        <li><strong className="text-white">Parallel Queries:</strong> अलग-अलग TLD servers को parallel query करो — same server पर sequential रखो</li>
        <li><strong className="text-white">API vs CLI:</strong> Bulk operations के लिए commercial API (WhoisXML) use करो — CLI rate limits जल्दी hit होते हैं</li>
        <li><strong className="text-white">Output Parsing:</strong> grep/awk से specific fields extract करो — full output parse करना slow है</li>
        <li><strong className="text-white">DNS First:</strong> पहले DNS resolve करो, फिर WHOIS — redundant queries बचेंगी</li>
        <li><strong className="text-white">IPv6 Support:</strong> WHOIS IPv6 queries support करता है — ज़रूरत पड़ने पर use करो</li>
      </ul>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>WHOIS data OSINT का foundation है — domain, IP, और ASN info से target का पूरा infrastructure map बन सकता है</li>
          <li>GDPR के बाद personal info redact होती है, लेकिन technical details (name servers, registrar, dates) अभी भी useful हैं</li>
          <li>WHOIS + dig + Shodan combo से complete recon हो जाता है</li>
          <li>Domain expiry dates monitor करो — expiring domains takeover opportunity हो सकते हैं</li>
          <li>Reverse WHOIS से same owner के सभी domains मिलते हैं — hidden attack surface discover होता है</li>
          <li>RDAP (rdap.org) WHOIS से better है — JSON format में structured data मिलता है</li>
          <li>Bulk queries के लिए Python whois library use करो — bash scripts से cleaner code मिलता है</li>
          <li>WHOIS data cross-verify करो — single source पर trust मत करो, multiple registrars check करो</li>
          <li>TLD-specific WHOIS servers use करो direct queries के लिए — generic client से ज़्यादा accurate results</li>
          <li>Incident response में WHOIS data preserve करो — attackers registration info बदल सकते हैं</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Whois queries legal हैं लेकिन जो information मिलती है उसका गलत इस्तेमाल illegal है। WHOIS data केवल authorized reconnaissance और domain management के लिए use करें। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत data misuse अपराध हो सकता है। WHOIS data को evidence के रूप में preserve करो — attackers data बदल सकते हैं। Historical WHOIS data investigation में बहुत valuable होता है।
      </div>
    </TutorialLayout>
  )
}
