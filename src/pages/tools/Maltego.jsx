import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Maltego() {
  return (
    <TutorialLayout
      title="maltego"
      subtitle="OSINT और लिंक एनालिसिस का GUI टूल — ग्राफ़-आधारित विज़ुअलाइज़ेशन"
      icon="🔍"
      prev={{ to: '/tools', label: 'All Tools' }}
      next={{ to: '/tool/lynis', label: 'lynis' }}
    >
      <h2>What is Maltego?</h2>
      <p>
        Maltego एक शक्तिशाली OSINT (Open Source Intelligence) और लिंक एनालिसिस टूल है जो ग्राफ़-आधारित विज़ुअलाइज़ेशन का उपयोग करके विभिन्न डेटा सोर्सेज़ से जानकारी इकट्ठा करता है और उनके बीच के relationships को मैप करता है। यह टूल domains, emails, IP addresses, लोगों, कंपनियों, और अन्य entities के बीच के connections को visually दिखाता है। Law enforcement agencies, intelligence agencies, और सुरक्षा शोधकर्ता इसका व्यापक रूप से उपयोग करते हैं।
      </p>
      <p>
        Maltego "Transforms" नाम के modules इस्तेमाल करता है — हर एक transform एक specific data source से information fetch करता है। आप graph पर entities drag-and-drop करके investigation करते हो। हर entity पर right-click करके transform run करते हो, और results automatically graph पर आ जाते हैं। यह process बार-बार repeat करके आप बहुत deep investigation कर सकते हो। Maltego का graph view complex relationships को समझने में बहुत मदद करता है।
      </p>
      <p>
        Maltego को Paterva company ने 2007 में बनाया था। यह South Africa में Andrew MacPherson और Roelof Temmingh ने develop किया था। इसके दो main versions हैं — Maltego CE (Community Edition, free) और Maltego Classic/Transform Hub (paid)। Free version में basic transforms मिलते हैं लेकिन entities per graph की limit है। Paid version में unlimited entities, सभी transforms, और priority support मिलता है। Kali Linux और Kali Nethunter में यह प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        Maltego का सबसे बड़ा advantage यह है कि यह investigation को visually represent करता है। Text-based OSINT tools से जो connections miss हो जाते हैं, Maltego के graph view में वो clearly दिखते हैं। यह tool threat intelligence, law enforcement investigations, और corporate security assessments में industry standard है। 100+ countries में इसका इस्तेमाल होता है।
      </p>
      <p>
        Maltego की Transform Hub capability इसे unique बनाती है — third-party developers अपने data sources को transforms के रूप में publish कर सकते हैं। Shodan, VirusTotal, HaveIBeenPwned, Censys, Hunter.io जैसे 100+ transforms available हैं। यह modular architecture Maltego को constantly evolve होने देता है — नए data sources जुड़ते रहते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Maltego केवल authorized investigation और सुरक्षा शोध के लिए इस्तेमाल करें। बिना अनुमति के दूसरों की personal information इकट्ठा करना गैरकानूनी है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized reconnaissance अपराध हो सकता है।
      </div>

      <h2>History of Maltego</h2>
      <p>
        Maltego की शुरुआत 2007 में हुई जब South Africa की Paterva company ने OSINT investigation को visualize करने के लिए एक GUI tool बनाया। Roelof Temmingh और Andrew MacPherson ने इसे develop किया। शुरुआत में यह सिर्फ domain और IP investigation पर focus करता था, लेकिन बाद में इसमें social media OSINT, threat intelligence, और person investigation जैसे features जोड़े गए।
      </p>
      <p>
        2011 में Maltego Carbon रिलीज़ हुआ जिसमें Transform Hub introduce किया गया — third-party developers अपने transforms publish कर सकते थे। 2014 में Maltego Classic और Maltego XL versions आए। 2018 में Maltego One रिलीज़ हुआ जो cloud-based investigation support करता था। 2020 में Maltego 4.2 रिलीज़ हुआ जिसमें बेहतर performance और new entity types जोड़े गए।
      </p>
      <p>
        2021 में Paterva ने Maltego को commercial focus के साथ restructure किया। Transform Hub expand हुआ और 100+ third-party integrations available हो गईं। 2022 में Maltego 4.3 रिलीज़ हुआ जिसमें real-time collaboration features, improved graph rendering, और enterprise-grade reporting जोड़ी गई। 2023 में Maltego 4.5 रिलीज़ हुआ जिसमें AI-assisted investigation hints और advanced graph analytics introduce किए गए।
      </p>
      <p>
        आज Maltego दुनिया का सबसे popular visual OSINT tool है। 100+ countries की law enforcement agencies इसका इस्तेमाल करती हैं। NATO, Interpol, और बड़ी cybersecurity firms जैसे Mandiant, CrowdStrike भी Maltego इस्तेमाल करती हैं। भारत में भी CERT-In और state police cyber cells इसका इस्तेमाल करते हैं। Bug bounty hunters और red teamers भी इसे बहुत पसंद करते हैं।
      </p>

      <h2>How Maltego Works?</h2>
      <p>
        Maltego का architecture transform-based है जहाँ हर data source एक transform के रूप में काम करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Entities:</strong> Graph पर nodes — domains, IPs, emails, persons, companies आदि</li>
        <li><strong className="text-white">Transforms:</strong> Data fetch modules जो entities पर run होते हैं — हर transform एक API या data source से information लाता है</li>
        <li><strong className="text-white">Graph Engine:</strong> Entities और relationships को visually render करता है</li>
        <li><strong className="text-white">Transform Hub:</strong> Marketplace जहाँ से additional transforms install करते हो</li>
        <li><strong className="text-white">TDS (Transform Distribution Server):</strong> Custom transforms को host करने का server</li>
        <li><strong className="text-white">Case File:</strong> Investigation data को .mtgx format में save करता है</li>
        <li><strong className="text-white">Export System:</strong> PDF, CSV, PNG, SVG formats में export कर सकते हो</li>
        <li><strong className="text-white">Machine Automation:</strong> Pre-defined transform sequences automatically run होती हैं</li>
      </ul>
      <p>
        Maltego का transform system SOAP ya REST API based होता है। जब आप किसी entity पर transform run करते हो, तो Maltego उस transform के endpoint पर request भेजता है, data receive करता है, और नई entities graph पर add कर देता है। यह process real-time होता है — आपको wait करना पड़ता है लेकिन results तुरंत graph पर दिखते हैं।
      </p>
      <p>
        Maltego का graph engine force-directed layout algorithm use करता है। यह algorithm entities को इस तरह arrange करता है कि related entities पास में रहें और unrelated entities दूर। आप layout manually भी adjust कर सकते हो — Block, Hierarchical, Circular, और Organic layouts available हैं। हर layout different investigation style के लिए useful है।
      </p>

      <h2>Installation</h2>
      <p>
        Maltego install करना आसान है। Kali Linux और Kali Nethunter में यह प्री-इंस्टॉल्ड आता है। अगर नहीं है तो apt से install कर सकते हो। Java runtime required है।
      </p>
      <CodeBlock
        title="Maltego Installation"
        code={`# apt से इंस्टॉल:
sudo apt update
sudo apt install maltego

# अगर Java नहीं है:
sudo apt install default-jre

# Version check:
maltego --version
java -version

# Official website से download:
# https://www.maltego.com/downloads/

# Maltego launch करें:
maltego

# पहली बार चलाने पर account बनाना पड़ेगा:
# 1. "Register a new account" पर click करें
# 2. Email और password डालें
# 3. Email verify करें
# 4. Login करें

# Nethunter के लिए VNC setup:
pkg install tigervnc
vncserver -localhost no
# VNC viewer से connect करो: IP:5901`}
      />
      <CodeBlock
        title="Docker Installation"
        code={`# Docker image से run करो:
docker pull maltego/maltego

# Container start करो:
docker run -d -p 5901:5901 maltego/maltego

# VNC viewer से connect करो:
# localhost:5901

# Volume mount (data persist करने के लिए):
docker run -d -v ~/maltego-data:/data maltego/maltego`}
      />
      <CodeBlock
        title="Windows Installation"
        code={`# Windows installer download करो:
# https://www.maltego.com/downloads/

# .exe file run करो
# Java bundled आता है installer के साथ

# ya Chocolatey से:
choco install maltego

# ya Scoop से:
scoop install maltego

# Launch: Start Menu से Maltego click करो`}
      />

      <h2>Basic Usage</h2>
      <p>
        Maltego का basic workflow simple है — entity drag करो, transform run करो, results देखो, और आगे investigate करो। हर investigation एक graph में save होती है।
      </p>
      <CodeBlock
        title="Maltego Workflow"
        code={`# Maltego launch:
maltego

# नया graph बनाएं:
# File → New Graph (Ctrl+N)

# Entity drag करें (palettes से):
# 1. Left palette से Domain entity drag करें
# 2. Graph पर drop करें
# 3. Domain name set करें (target.com)

# Transform run करें:
# Entity पर right-click → Run Transform
# "DNS from Domain" select करें

# Machine (auto-investigation) run करें:
# Entity select करें → All Transforms → Run All

# Save करें:
# File → Save As → .mtgx file

# Report generate करें:
# Export → Generate Report → PDF`}
      />
      <CodeBlock
        title="Keyboard Shortcuts"
        code={`# ज़रूरी shortcuts:
# Ctrl+N — नया graph
# Ctrl+S — Save
# Ctrl+Z — Undo
# Ctrl+Shift+Z — Redo
# Ctrl+A — सभी entities select
# Delete — Selected entities delete
# Ctrl+F — Search entities
# Ctrl+E — Export
# F5 — Selected entity refresh
# F9 — Transform run
# Ctrl+Shift+M — Machine run
# Ctrl+G — Group selected entities
# Ctrl+U — Ungroup
# Tab — Next entity select
# Shift+Tab — Previous entity select`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Option</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Transform</td><td className="py-2 px-3">Data source से information fetch करता है</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Transform Hub</td><td className="py-2 px-3">Additional transforms install करने का marketplace</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Entity Palette</td><td className="py-2 px-3">सभी available entity types की list</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Graph View</td><td className="py-2 px-3">Entities और relationships का visual representation</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Detail View</td><td className="py-2 px-3">Selected entity की detailed properties</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Machine</td><td className="py-2 px-3">Auto-investigation — सभी transforms automatically</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Manage</td><td className="py-2 px-3">Transforms और Hub manage करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">TDS</td><td className="py-2 px-3">Custom transforms का server</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Export</td><td className="py-2 px-3">Graph export करें (PDF, CSV, PNG)</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Layout</td><td className="py-2 px-3">Graph layout change (Block, Hierarchical, Circular)</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Entity Types</h2>
      <p>
        Maltego में entities graph पर nodes होते हैं। हर entity type का अपना data होता है और specific transforms available होते हैं। सही entity type choose करना investigation की quality decide करता है।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Entity</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या है</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या निकाल सकते हो</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Domain</td><td className="py-2 px-3">वेबसाइट domain</td><td className="py-2 px-3">Subdomains, DNS, IPs, WHOIS, hosting</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Person</td><td className="py-2 px-3">इंसान का नाम</td><td className="py-2 px-3">Social media, emails, phones, employment</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Email</td><td className="py-2 px-3">Email address</td><td className="py-2 px-3">Social profiles, leaked data, accounts</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">IP Address</td><td className="py-2 px-3">IPv4/IPv6 address</td><td className="py-2 px-3">Ports, hosting, domains, geolocation</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Phone</td><td className="py-2 px-3">Phone number</td><td className="py-2 px-3">Owner info, social profiles, carrier</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Company</td><td className="py-2 px-3">Organization name</td><td className="py-2 px-3">Employees, domains, infrastructure</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">URL</td><td className="py-2 px-3">वेबपेज URL</td><td className="py-2 px-3">Technology, links, metadata</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">AS Number</td><td className="py-2 px-3">Autonomous System</td><td className="py-2 px-3">Network blocks, IP ranges, BGP peers</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Netblock</td><td className="py-2 px-3">IP range (CIDR)</td><td className="py-2 px-3">IPs, hosting info, organization</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Phrase</td><td className="py-2 px-3">Text/keyword</td><td className="py-2 px-3">Search results, related content</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Transforms</h2>
      <p>
        Transforms Maltego की जान हैं। हर transform एक specific data source से information fetch करता है। Transforms को समझना और सही तरीके से use करना Maltego mastery की key है।
      </p>
      <CodeBlock
        title="उपयोगी Transforms"
        code={`# Domain transforms:
# Domain → DNS records, subdomains, IP addresses
# Domain → Website technology, hosting provider
# Domain → WHOIS information, registration details

# Email transforms:
# Email → Social media profiles, leaked data
# Email → Related accounts, usernames
# Email → Domain associations

# Person transforms:
# Person → Social media (Facebook, Twitter, LinkedIn)
# Person → Email addresses, phone numbers

# IP transforms:
# IP → Open ports, running services (Shodan)
# IP → Hosting provider, geolocation

# Threat Intelligence transforms:
# Domain/IP → VirusTotal malware check
# IP → AbuseIPDB reputation score
# Email → HaveIBeenPwned breach check`}
      />
      <CodeBlock
        title="Transform Categories"
        code={`# Infrastructure transforms:
# - DNS from Domain (subdomains, records)
# - To IP Address (DNS resolution)
# - To DNS Name (reverse DNS)
# - To Netblocks (IP ranges)
# - To AS Number (autonomous system)

# Contact transforms:
# - To Email Addresses (from domain/website)
# - To Phone Numbers (from WHOIS/website)
# - To Persons (employees, contacts)

# Social Media transforms:
# - To Social Media Profiles (from email/name)
# - To Twitter Tweets (from handle)
# - To Facebook Profile (from name/email)
# - To LinkedIn Profile (from name/company)

# Threat Intel transforms:
# - To Malware (VirusTotal)
# - To Abuse Reports (AbuseIPDB)
# - To Data Breaches (HaveIBeenPwned)
# - To Shodan Results (open ports, banners)`}
      />

      <h2>Transform Hub</h2>
      <p>
        Transform Hub Maltego का marketplace है जहाँ से additional transforms install करते हो। 100+ transforms available हैं जो different data sources से connect होते हैं।
      </p>
      <CodeBlock
        title="Transform Hub Setup"
        code={`# Transform Hub access:
# 1. Maltego खोलें
# 2. Transform Hub tab पर click करें
# 3. उपलब्ध transforms देखें
# 4. Install button पर click करें

# Popular free transforms:
# - Shodan: IP और domain info, open ports
# - VirusTotal: Malware analysis, reputation
# - HaveIBeenPwned: Data breach check
# - Hunter.io: Email finding, verification
# - Censys: Internet scanning data
# - Wayback Machine: Historical website data
# - GreyNoise: Internet noise filtering
# - AbuseIPDB: Malicious IP check

# API keys configure करें:
# Manage → Transforms → [Transform Name] → Settings
# API key enter करें (Shodan, VirusTotal, etc.)`}
      />
      <CodeBlock
        title="Popular Transform Hub Integrations"
        code={`# Shodan Integration:
# - IP → Open ports, services, banners
# - Domain → Associated IPs, technologies
# - Free API key: shodan.io

# VirusTotal Integration:
# - Domain → Malware reports, URL scans
# - IP → Malicious activity reports
# - Hash → File analysis results

# HaveIBeenPwned Integration:
# - Email → Breach information
# - Domain → Breached accounts
# - Password → Pwned password check

# Hunter.io Integration:
# - Domain → Email addresses (employees)
# - Email → Email verification status
# - Company → Email pattern detection

# Censys Integration:
# - IP → Certificates, services
# - Domain → Infrastructure details
# - Certificate → Related domains`}
      />

      <h2>Infrastructure Footprinting</h2>
      <p>
        Infrastructure footprinting Maltego का सबसे common use case है। एक company या domain से शुरू करके पूरा infrastructure map बना सकते हो। यह penetration testing के reconnaissance phase में बहुत useful है।
      </p>
      <CodeBlock
        title="Infrastructure Investigation"
        code={`# Step 1: Company entity drag करें
# Company name set करें

# Step 2: "To Domains" transform run करें
# Organization के सभी domains मिलेंगे

# Step 3: हर domain पर "DNS from Domain" transform
# Subdomains और DNS records

# Step 4: "To IP Address" transform
# सभी IP addresses

# Step 5: IP पर "To Open Ports" (Shodan)
# Running services, versions, banners

# Step 6: "To Netblocks" transform
# Network ranges — CIDR blocks

# रिजल्ट: Organization का complete infrastructure map`}
      />
      <CodeBlock
        title="Automated Footprinting Machine"
        code={`# Footprint Machine use करो:
# 1. Domain entity select करो
# 2. Machines → Footprint L1 (Fast)
# 3. Machine automatically सब transforms run करेगा

# Footprint L1: Basic — DNS, WHOIS, IP
# Footprint L2: Medium — + subdomains, hosting
# Footprint L3: Deep — + ports, services, tech

# Custom Machine बनाओ:
# 1. Machines → New Machine
# 2. Transform sequence define करो
# 3. Conditions set करो (entity type filter)
# 4. Save करो और reuse करो

# Machine results export करो:
# Export → Generate Report → PDF/CSV`}
      />

      <h2>Social Media OSINT</h2>
      <p>
        Social media OSINT Maltego का दूसरा सबसे popular use case है। किसी व्यक्ति का complete online presence map कर सकते हो — social media profiles, email addresses, phone numbers, और connections।
      </p>
      <CodeBlock
        title="Social Media Investigation"
        code={`# Person entity drag करें — Name set करें

# "To Social Media" transform:
# - Facebook, Twitter, LinkedIn, Instagram, GitHub

# "To Email Addresses" transform:
# Related email addresses

# Email पर "To Social Media" transform:
# Email से linked social accounts

# "To Phone Numbers" transform:
# Associated phone numbers

# रिजल्ट: Person का complete social media presence`}
      />
      <CodeBlock
        title="Cross-Platform Identity Mapping"
        code={`# Step 1: Username entity drag करें
# Known username set करें (जैसे "john_doe")

# Step 2: "To Social Media" transform run करें
# सभी platforms पर same username search होगा

# Step 3: हर social profile पर "To Email" transform
# Email addresses extract होंगे

# Step 4: Email पर "To Person" transform
# Real identity discover होगी

# Step 5: Person पर "To Phone" transform
# Phone numbers मिलेंगे

# Result: Username से complete identity mapping
# यह technique law enforcement में बहुत use होती है`}
      />

      <h2>Threat Intelligence</h2>
      <p>
        Threat intelligence investigations में Maltego बहुत powerful है। Malicious domains, phishing campaigns, और threat actor infrastructure को track कर सकते हो।
      </p>
      <CodeBlock
        title="Threat Intelligence"
        code={`# Malicious domain investigation:
# 1. Suspicious domain entity drag करें
# 2. "To IP Address" → hosting info
# 3. "To WHOIS" → registration details
# 4. "To Related Domains" → connected domains
# 5. Shodan transforms → server info

# IP reputation check:
# 1. IP entity drag करें
# 2. AbuseIPDB → threat score
# 3. VirusTotal → malware association
# 4. GreyNoise → internet noise

# Phishing investigation:
# 1. Phishing domain entity drag करें
# 2. "To WHOIS" → registrant info
# 3. "To IP Address" → hosting server
# 4. "To Related Domains" → other phishing domains`}
      />
      <CodeBlock
        title="Threat Actor Profiling"
        code={`# Step 1: Known malicious IP/domain से शुरू करो

# Step 2: WHOIS data से registrant info निकालो
# - Name, email, phone, address

# Step 3: Registrant email पर transforms run करो
# - Other domains registered with same email
# - Social media profiles

# Step 4: Connected domains पर repeat करो
# - Infrastructure pattern identify करो
# - Shared hosting detect करो

# Step 5: VirusTotal से malware check करो
# - Associated malware samples
# - Command & Control servers

# Result: Threat actor का complete infrastructure map
# Pattern analysis से future attacks predict कर सकते हो`}
      />

      <h2>Custom Transforms</h2>
      <p>
        Custom transforms बनाकर अपने internal data sources को Maltego में integrate कर सकते हो। Python या Java में transforms लिखो और TDS पर host करो।
      </p>
      <CodeBlock
        title="Custom Transform (Python)"
        code={`# maltego_transform.py
from maltego.transform import Transform

class CustomDomainTransform(Transform):
    """Custom transform — अपना data source integrate करो"""

    def run(self, entity):
        domain = entity.Value
        results = my_custom_api(domain)

        for result in results:
            child = self.createEntity("maltego.Domain", result)
            entity.addChild(child)

# TDS पर host करो:
pip install maltego-trx

# Transform test करो:
python -m maltego_trx test`}
      />
      <CodeBlock
        title="TDS Server Setup"
        code={`# TDS (Transform Distribution Server) setup:

# 1. Python TDS install करो:
pip install maltego-trx

# 2. Project create करो:
maltego-trx start new_project

# 3. Transform लिखो:
# transforms/MyTransform.py

# 4. Server run करो:
python project.py runserver

# 5. Maltego में TDS add करो:
# Manage → Transforms → New Transform
# TDS URL enter करो: http://localhost:8080

# 6. Transform select करो और test करो

# Production के लिए:
# - Gunicorn use करो: gunicorn project:app
# - Nginx reverse proxy setup करो
# - HTTPS enable करो`}
      />

      <h2>Free vs Paid Version</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">CE (Free)</th>
              <th className="text-left py-2 px-3 text-neon-green">Classic (Paid)</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Entities per graph</td><td className="py-2 px-3">12</td><td className="py-2 px-3">Unlimited</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Transforms</td><td className="py-2 px-3">Basic</td><td className="py-2 px-3">सभी + Hub</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Transform Hub</td><td className="py-2 px-3">Limited</td><td className="py-2 px-3">Full access</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Export</td><td className="py-2 px-3">Basic</td><td className="py-2 px-3">All formats</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Support</td><td className="py-2 px-3">Community</td><td className="py-2 px-3">Priority</td></tr>
            <tr><td className="py-2 px-3 text-white">Custom transforms</td><td className="py-2 px-3">No</td><td className="py-2 px-3">Yes</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Maltego vs Other OSINT Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">Maltego</th>
              <th className="text-left py-2 px-3 text-neon-green">SpiderFoot</th>
              <th className="text-left py-2 px-3 text-neon-green">Recon-ng</th>
              <th className="text-left py-2 px-3 text-neon-green">Shodan</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Interface</td><td className="py-2 px-3">GUI (graph)</td><td className="py-2 px-3">Web UI</td><td className="py-2 px-3">CLI</td><td className="py-2 px-3">Web UI + API</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Visualization</td><td className="py-2 px-3">बेहतरीन</td><td className="py-2 px-3">अच्छा</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सीमित</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Modules</td><td className="py-2 px-3">100+ (Hub)</td><td className="py-2 px-3">200+</td><td className="py-2 px-3">100+</td><td className="py-2 px-3">API-based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Free Version</td><td className="py-2 px-3">CE (limited)</td><td className="py-2 px-3">पूरा free</td><td className="py-2 px-3">पूरा free</td><td className="py-2 px-3">Limited free</td></tr>
            <tr><td className="py-2 px-3 text-white">Best For</td><td className="py-2 px-3">Visual investigation</td><td className="py-2 px-3">Automated OSINT</td><td className="py-2 px-3">CLI recon</td><td className="py-2 px-3">Infrastructure intel</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Maltego GUI नहीं खुल रहा Nethunter पर', a: 'VNC Viewer install करो। Termux में: pkg install tigervnc, vncserver start करो, VNC viewer से connect करो। Display resolution 1024x768+ रखो।' },
          { q: 'Transforms run नहीं हो रहे', a: 'Internet connection check करो। कुछ transforms के लिए API keys ज़रूरी हैं — Manage → Transforms में configure करो।' },
          { q: 'Free version की entity limit', a: 'Maltego CE में 12 entities per graph की limit है। Multiple graphs बनाओ। Paid version लो अगर ज़्यादा entities चाहिए।' },
          { q: 'Graph slow हो रहा है', a: 'Entities को group करो। Unnecessary entities delete करो। Layout change करो (Block layout fastest है)। RAM बढ़ाओ।' },
          { q: 'Results accurate नहीं हैं', a: 'Multiple transforms से cross-verify करो। Manual verification ज़रूरी है। कुछ transforms rate-limited हैं।' },
          { q: 'Java errors आ रहे हैं', a: 'Java version check करो (JRE 11+ चाहिए)। JAVA_HOME set करो। Memory increase करो: maltego -J-Xmx4g' },
          { q: 'Transform Hub में transforms install नहीं हो रहे', a: 'Internet connection check करो। Firewall/proxy settings check करो। Maltego account login verify करो। Cache clear करो।' },
          { q: 'Case file corrupt हो गया', a: 'Regular backups लो (File → Export)। .mtgx file को rename करके .zip extract करो — XML data recover हो सकता है।' },
          { q: 'API rate limit exceeded', a: 'Transform delays set करो। Multiple API keys use करो। Free tier limits check करो — paid API plans consider करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Maltego से बचने के लिए अपने digital footprint को minimize करना ज़रूरी है। यह techniques आपकी online presence को protect करती हैं।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">WHOIS Privacy:</strong> Domain registration में privacy service use करो</li>
        <li><strong className="text-white">Email Aliases:</strong> Public email addresses पर aliases use करो</li>
        <li><strong className="text-white">Social Media Privacy:</strong> Profiles को private रखो, जानकारी minimize करो</li>
        <li><strong className="text-white">DNS Minimization:</strong> कम DNS records publish करो</li>
        <li><strong className="text-white">Network Monitoring:</strong> Transform requests detect करने के लिए logs monitor करो</li>
        <li><strong className="text-white">Minimize Attack Surface:</strong> जितना कम public info होगा, उतना कम Maltego से मिलेगा</li>
        <li><strong className="text-white">Certificate Transparency:</strong> Wildcard SSL certificates use करो</li>
        <li><strong className="text-white">Regular Audits:</strong> अपने public footprint को regularly audit करो</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Maltego practice के लिए safe lab बनाना ज़रूरी है। GUI tool है इसलिए VNC setup ज़रूरी है Nethunter पर। Practice targets अपने domains use करो।
      </p>
      <CodeBlock
        title="Lab Setup"
        code={`# Virtual Machine setup:
# VirtualBox में Kali Linux VM (4GB+ RAM)
# VNC server configure करो

# Maltego CE account बनाएं:
# https://www.maltego.com/ce/

# Practice targets (अपने domains):
# अपना personal domain use करो
# अपना email use करो

# Transform Hub से transforms install करो:
# Shodan, VirusTotal, HaveIBeenPwned, Hunter.io

# API keys obtain करो:
# Shodan: shodan.io (free account)
# VirusTotal: virustotal.com (free account)`}
      />
      <CodeBlock
        title="Nethunter VNC Setup"
        code={`# Nethunter पर GUI apps के लिए VNC setup:

# TigerVNC install करो:
pkg install tigervnc

# VNC server start करो:
vncserver -localhost no

# Password set करो (पहली बार):
# New Password: your_password
# Verify: your_password

# VNC viewer app install करो (Android):
# - RealVNC Viewer (Play Store)
# - bVNC (F-Droid)

# Connect करो:
# Address: localhost:5901
# ya IP:5901 (remote access)

# Resolution set करो:
vncserver -geometry 1280x800 -localhost no

# Maltego launch करो:
maltego

# VNC server stop करो:
vncserver -kill :1`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        Advanced techniques से Maltego की power कई गुना बढ़ जाती है। Custom entity types, batch transforms, और graph analytics से deep investigation possible है।
      </p>
      <CodeBlock
        title="Graph Filtering and Analysis"
        code={`# Graph पर entities filter करो:
# View → Filters → Entity Type select करो
# सिर्फ domains दिखेंगी या सिर्फ IPs

# Entity properties edit करो:
# Entity पर double-click → Properties tab
# Custom notes add करो
# Color code करो (red = malicious, green = safe)

# Bookmarks use करो:
# Important entities पर bookmark लगाओ
# बाद में quickly navigate कर सकते हो

# Graph statistics:
# View → Graph Statistics
# Entity count, relationship count, transform count
# Investigation progress track करो`}
      />
      <CodeBlock
        title="Batch Transform Operations"
        code={`# Multiple entities पर एक साथ transform run करो:
# 1. सभी entities select करो (Ctrl+A)
# 2. Right-click → Run Transform
# 3. Transform select करो
# 4. सभी selected entities पर run होगा

# Transform group save करो:
# 1. Frequently used transforms select करो
# 2. Right-click → Add to Favorites
# 3. Favorites menu से quickly access करो

# Transform results merge करो:
# Duplicate entities automatically merge होती हैं
# Same IP multiple domains से मिले तो single node बनेगा`}
      />
      <CodeBlock
        title="Collaboration Features"
        code={`# Maltego में team collaboration:
# 1. Case file export करो (.mtgx)
# 2. Team member को share करो
# 3. वो import करके continue करे

# Graph snapshot:
# File → Export → Graph as Image (PNG/SVG)
# Documentation के लिए useful

# Report generation:
# Export → Generate Report
# - Executive Summary
# - Detailed Findings
# - Entity List
# - Graph Visualization`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Maltego real-world investigations में बहुत effectively use होता है। Law enforcement agencies, cybersecurity firms, और intelligence organizations इसे daily basis पर इस्तेमाल करते हैं। यह case studies दिखाती हैं कि Maltego कैसे complex investigations को solve करता है।
      </p>
      <p>
        <strong>Phishing Campaign Investigation:</strong> एक bank के customers को phishing emails आ रही थीं। Maltego में phishing domain से शुरू किया — WHOIS data से registrant info मिली, connected domains discover हुईं, shared hosting infrastructure identify हुआ। VirusTotal transforms से malware association confirm हुई। Result: 50+ phishing domains और 3 hosting providers report किए गए। Investigation 2 दिन में complete हुआ जो manually हफ्तों लगता।
      </p>
      <p>
        <strong>Corporate Espionage Investigation:</strong> एक company suspect कर रही थी कि ex-employee competitor को data leak कर रहा है। Maltego में employee का name और email से शुरू किया — social media profiles मिलीं, LinkedIn connections analyze किए, competitor company के employees से connections found हुए। Domain registration data से hidden relationships discover हुईं। Result: Concrete evidence मिला जो legal action में use हुआ।
      </p>
      <p>
        <strong>Threat Actor Infrastructure Mapping:</strong> एक cybersecurity firm APT group track कर रही थी। Known C2 server IP से शुरू किया — WHOIS data, connected domains, shared SSL certificates, hosting patterns सब analyze किया। Shodan transforms से server configurations match किए। Result: APT group का complete infrastructure map बना — 200+ domains, 50+ IPs, 10+ hosting providers identify हुए।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Maltego को दूसरे OSINT और security tools के साथ integrate करके investigation power बढ़ा सकते हो। Combined workflow से comprehensive results मिलते हैं।
      </p>
      <CodeBlock
        title="Maltego + Shodan + Nmap Workflow"
        code={`# Combined investigation workflow:

# Step 1: Maltego में domain investigation
# Domain → Subdomains → IP addresses

# Step 2: IP addresses export करो
# Export → CSV → IP list

# Step 3: Nmap scan करो
# nmap -sV -iL ip_list.txt -oX nmap_results.xml

# Step 4: Shodan API से additional data
# shodan host <IP>

# Step 5: Results वापस Maltego में import करो
# नई entities create करो और merge करो

# Result: Complete infrastructure picture
# Ports + Services + Technologies + Relationships`}
      />
      <CodeBlock
        title="Maltego + Burp Suite Integration"
        code={`# Web application investigation:

# Step 1: Maltego में web app domain investigate करो
# Technologies, hosting, subdomains discover करो

# Step 2: Subdomains list export करो

# Step 3: Burp Suite में target add करो
# Target → Site map → Add scope

# Step 4: Burp Scanner run करो
# Vulnerabilities discover होंगे

# Step 5: Results cross-reference करो
# Maltego infrastructure data + Burp vulnerability data

# Combined report बनाओ — comprehensive assessment`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Maltego में scripting से repetitive tasks automate कर सकते हो। Python scripts से bulk investigations, custom data processing, और automated reporting possible है।
      </p>
      <CodeBlock
        title="Python Automation Script"
        code={`# maltego_automation.py — Bulk domain investigation

import subprocess
import csv

def investigate_domain(domain):
    """एक domain की full investigation"""
    # Maltego CLI transform run करो
    cmd = f"maltego-transform -t DNSFromDomain {domain}"
    result = subprocess.run(cmd, shell=True, capture_output=True)
    return parse_results(result.stdout)

def bulk_investigate(domain_list):
    """Multiple domains की investigation"""
    results = []
    for domain in domain_list:
        print(f"[*] Investigating: {domain}")
        data = investigate_domain(domain)
        results.append(data)
    return results

# CSV से domains read करो:
with open("targets.csv") as f:
    domains = [row[0] for row in csv.reader(f)]

# Bulk investigation:
all_results = bulk_investigate(domains)

# Report generate करो:
generate_report(all_results, "investigation_report.pdf")`}
      />

      <h2>Performance Tuning</h2>
      <p>
        बड़ी investigations में Maltego slow हो सकता है। Performance optimize करने के लिए कुछ techniques हैं।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">RAM Increase:</strong> maltego -J-Xmx4g से 4GB RAM allocate करो</li>
        <li><strong className="text-white">Entity Grouping:</strong> Related entities को group करो — graph cleaner रहेगा</li>
        <li><strong className="text-white">Layout Selection:</strong> Block layout fastest है — Hierarchical slow</li>
        <li><strong className="text-white">Transform Delays:</strong> Rate-limited transforms के लिए delay set करो</li>
        <li><strong className="text-white">Graph Cleanup:</strong> Unnecessary entities delete करो regularly</li>
        <li><strong className="text-white">Case File Split:</strong> बड़ी investigation को multiple case files में split करो</li>
        <li><strong className="text-white">SSD Storage:</strong> Case files SSD पर store करो — faster I/O</li>
        <li><strong className="text-white">Java Version:</strong> Latest JRE use करो — performance improvements</li>
      </ul>

      <h2>Reporting and Output Analysis</h2>
      <p>
        Investigation complete होने के बाद report generate करना ज़रूरी है। Maltego built-in reporting support करता है। Professional reports client presentation के लिए important हैं।
      </p>
      <CodeBlock
        title="Report Generation"
        code={`# Maltego built-in report:
# Export → Generate Report → PDF

# Report sections:
# - Executive Summary (overview)
# - Entity Details (हर entity की info)
# - Relationships (connections map)
# - Timeline (investigation sequence)
# - Raw Data (transform outputs)

# Custom report template बनाओ:
# Export → Report Templates → New Template
# Logo, header, footer customize करो

# CSV export (data processing के लिए):
# Export → CSV → All Entities
# Excel में analyze करो

# Graph export (visual documentation):
# Export → Graph as PNG/SVG
# High-resolution images generate करो`}
      />

      <h2>Graph Layouts and Visualization</h2>
      <p>
        Maltego में अलग-अलग graph layouts available हैं जो different investigation styles के लिए useful हैं। सही layout choose करने से investigation clarity बढ़ जाती है और hidden connections easily दिखते हैं।
      </p>
      <CodeBlock
        title="Graph Layout Options"
        code={`# Layout change करो:
# View → Layout → [Layout Name]

# Block Layout:
# - सबसे fast rendering
# - General purpose investigation के लिए best
# - Entities grid pattern में arrange होती हैं

# Hierarchical Layout:
# - Tree structure में entities show होती हैं
# - Parent-child relationships clear दिखती हैं
# - Domain → Subdomain → IP chain के लिए ideal

# Circular Layout:
# - Entities circle में arrange होती हैं
# - Central entity के connections देखने के लिए best
# - Hub-and-spoke patterns के लिए useful

# Organic Layout:
# - Force-directed algorithm use करता है
# - Related entities cluster में group होती हैं
# - Natural-looking investigation map बनता है

# Custom Layout:
# - Entities manually drag करके arrange करो
# - Investigation flow के हिसाब से organize करो`}
      />
      <CodeBlock
        title="Visualization Tips"
        code={`# Entity colors set करो:
# Entity पर right-click → Properties → Color
# Red = Malicious/Suspicious
# Green = Safe/Verified
# Yellow = Under Investigation
# Blue = Infrastructure

# Entity sizes adjust करो:
# Important entities बड़ी रखो
# Less important छोटी रखो
# Visual hierarchy बनता है

# Bookmarks use करो:
# Critical entities पर bookmark लगाओ
# Quick navigation के लिए useful

# Zoom control:
# Scroll wheel से zoom in/out
# Ctrl+0 = Fit to screen
# Ctrl+1 = 100% zoom`}
      />

      <h2>Maltego for Bug Bounty</h2>
      <p>
        Bug bounty programs में Maltego reconnaissance phase में बहुत useful है। Target organization का complete infrastructure map बनाकर attack surface identify कर सकते हो। Automated machines से time बचता है और comprehensive results मिलते हैं।
      </p>
      <CodeBlock
        title="Bug Bounty Recon Workflow"
        code={`# Step 1: Target domain से शुरू करो
# Domain entity drag करो → target.com

# Step 2: Footprint Machine run करो
# Machines → Footprint L2 (Medium)
# Subdomains, IPs, hosting info मिलेगा

# Step 3: Shodan transforms run करो
# IPs पर → Open ports, services, technologies

# Step 4: Interesting services investigate करो
# Admin panels, dev environments, staging servers

# Step 5: Email addresses find करो
# Hunter.io transform → Employee emails
# Email patterns identify करो

# Step 6: Results export करो
# CSV export → Nmap/Burp में import करो

# Pro tip: Free version में 12 entity limit
# Multiple graphs बनाओ — हर subdomain group separately`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Maltego free है?', a: 'Maltego CE free है लेकिन 12 entities per graph की limit है। Paid versions में unlimited entities और सभी transforms मिलते हैं।' },
          { q: 'Nethunter पर कैसे चलाएं?', a: 'VNC Viewer install करो। pkg install tigervnc, vncserver start, VNC viewer से connect करो। 4GB+ RAM recommended।' },
          { q: 'कितने transforms available हैं?', a: 'Transform Hub पर 100+ transforms हैं। Custom transforms भी बना सकते हो Python/Java में।' },
          { q: 'Custom transforms कैसे बनाएं?', a: 'Python में maltego-trx library use करो। TDS पर host करो। docs.maltego.com पर documentation है।' },
          { q: 'क्या Maltego legal है?', a: 'हाँ, authorized investigation के लिए। बिना अनुमति के information collect करना illegal है।' },
          { q: 'Recon-ng से बेहतर है?', a: 'GUI investigation के लिए Maltego best है। CLI prefer करते हो तो Recon-ng। हर टूल की अपनी ताकत है।' },
          { q: 'कितने entities per graph free version में?', a: 'Maltego CE में 12 entities per graph limit है। Multiple graphs बना सकते हो। Paid version में unlimited।' },
          { q: 'API keys कहाँ से मिलेंगे?', a: 'Shodan, VirusTotal, HaveIBeenPwned — सबकी free accounts बनाओ। API keys Maltego में Manage → Transforms में configure करो।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SpiderFoot</td><td className="py-2 px-3">Automated OSINT</td><td className="py-2 px-3">200+ modules, web UI, free</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Recon-ng</td><td className="py-2 px-3">CLI-based OSINT</td><td className="py-2 px-3">Module-based, database support</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Shodan</td><td className="py-2 px-3">Internet scanning</td><td className="py-2 px-3">IoT, servers, services</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">OSRFramework</td><td className="py-2 px-3">Username OSINT</td><td className="py-2 px-3">300+ platforms check</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">theHarvester</td><td className="py-2 px-3">Email/subdomain OSINT</td><td className="py-2 px-3">Simple CLI, fast results</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Photon</td><td className="py-2 px-3">Web scraping OSINT</td><td className="py-2 px-3">URLs, emails extraction</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Datasploit</td><td className="py-2 px-3">Automated OSINT framework</td><td className="py-2 px-3">Domain, email, person OSINT</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Creepy</td><td className="py-2 px-3">Geolocation OSINT</td><td className="py-2 px-3">Social media geolocation</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Maltego का graph view बहुत powerful है — visually connections देख सकते हो जो text-based tools में miss हो जाते हैं</li>
          <li>Transform Hub से Shodan, VirusTotal, HaveIBeenPwned transforms install करो — investigation power कई गुना बढ़ जाएगी</li>
          <li>Free version में strategically entities choose करो — 12 limit में maximum info निकालो</li>
          <li>API keys ज़रूर set करो — बिना API keys के transforms limited results देते हैं</li>
          <li>Custom transforms बनाना सीखो — अपने internal data sources integrate कर सकते हो</li>
          <li>Graph layouts experiment करो — Hierarchical layout tree structures के लिए best है, Block general purpose के लिए</li>
          <li>Regular case files save करो — investigation data loss नहीं होना चाहिए</li>
          <li>Footprint Machine से automated investigation करो — time बचता है basic recon में</li>
          <li>महत्वपूर्ण entities को color code करो — red (malicious), green (safe), yellow (investigating)</li>
          <li>Report generate करके client को professionally present करो — documentation matters</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Maltego एक powerful OSINT और investigation टूल है। इसका इस्तेमाल केवल authorized investigation, bug bounty, और सुरक्षा शोध के लिए करें। बिना अनुमति के दूसरों की personal information collect करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized reconnaissance अपराध हो सकता है। केवल अपने lab वातावरण या लिखित authorization के साथ ही use करें।
      </div>
    </TutorialLayout>
  )
}