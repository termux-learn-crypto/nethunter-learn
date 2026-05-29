import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Lynis() {
  return (
    <TutorialLayout
      title="lynis"
      subtitle="Linux सिस्टम सिक्योरिटी ऑडिटिंग — 300+ सिक्योरिटी टेस्ट्स, हार्डनिंग रिकमेंडेशंस"
      icon="🛡️"
      prev={{ to: '/tool/maltego', label: 'maltego' }}
      next={{ to: '/tool/chisel', label: 'chisel' }}
    >
      <h2>What is Lynis?</h2>
      <p>
        Lynis एक ओपन-सोर्स सिक्योरिटी ऑडिटिंग टूल है जो Linux, macOS, और Unix-based सिस्टम्स को डीपली स्कैन करता है। यह सिस्टम की 300+ सिक्योरिटी चेक्स परफ़ॉर्म करता है जिसमें OS कॉन्फ़िगरेशन, इंस्टॉल्ड सॉफ़्टवेयर, यूज़र सेटिंग्स, फ़ाइल परमिशंस — सब शामिल होता है। यह टूल सिस्टम की सिक्योरिटी कमज़ोरियों को पहचानता है और हार्डनिंग रिकमेंडेशंस देता है।
      </p>
      <p>
        Lynis को CISOfy कंपनी के Michael Boelen ने बनाया है। यह Shell script में लिखा गया है और पूरी तरह ओपन सोर्स है। यह टूल Linux हार्डनिंग, कंप्लायंस ऑडिटिंग, और वल्नरेबिलिटी डिटेक्शन के लिए इंडस्ट्री स्टैंडर्ड है। CIS बेंचमार्क्स, HIPAA, PCI-DSS कंप्लायंस चेकिंग सपोर्ट करता है। पेनेट्रेशन टेस्टिंग में जब किसी Linux मशीन का एक्सेस मिले, तो Lynis से उसकी सिक्योरिटी वीकनेसेज़ पता चलती हैं।
      </p>
      <p>
        Lynis का मुख्य फ़ायदा यह है कि यह रीड-ओनली ऑपरेशंस करता है — सिस्टम में कुछ भी मॉडिफ़ाई नहीं करता। यह सिर्फ़ ऑडिट करता है और सजेशंस देता है। इसे प्रोडक्शन सर्वर्स पर भी सेफ़ली चलाया जा सकता है। यह टूल पेनेट्रेशन टेस्टर्स के लिए पोस्ट-एक्सप्लॉइटेशन एनुमरेशन में बहुत उपयोगी है — SUID बाइनरीज़, राइटेबल क्रॉन जॉब्स, वीक सूडो कॉन्फ़िग — सब पता चलता है।
      </p>
      <p>
        Lynis Shell script में लिखा गया है जिसका मतलब है कि इसे चलाने के लिए किसी स्पेशल रनटाइम या डिपेंडेंसी की ज़रूरत नहीं है। बस स्क्रिप्ट डाउनलोड करो और चलाओ। यह 2007 से एक्टिव डेवलपमेंट में है और GitHub पर 13,000+ स्टार्स हैं। काली लिनक्स, उबंटू, Debian, CentOS, RHEL, Fedora, Arch — सभी Linux डिस्ट्रीब्यूशंस पर चलता है। macOS और BSD सिस्टम्स भी सपोर्ट करता है।
      </p>
      <p>
        Lynis का आर्किटेक्चर प्लगइन-बेस्ड है — हर सिक्योरिटी चेक एक अलग टेस्ट फ़ाइल में होती है। यूज़र कस्टम टेस्ट्स भी लिख सकते हैं। प्रोफ़ाइल सिस्टम से अलग-अलग एनवायरनमेंट्स (प्रोडक्शन, डेवलपमेंट, कंप्लायंस) के लिए अलग-अलग ऑडिट कॉन्फ़िगरेशन रख सकते हो। यह टूल सिस्टम एडमिनिस्ट्रेटर्स और सिक्योरिटी प्रोफ़ेशनल्स दोनों के लिए अनिवार्य है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Lynis केवल अपने सिस्टम या अधिकृत पेनेट्रेशन टेस्टिंग में ही इस्तेमाल करें। बिना अनुमति के किसी और के सर्वर पर ऑडिट टूल चलाना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत सिस्टम एक्सेस अपराध हो सकता है।
      </div>

      <h2>History of Lynis</h2>
      <p>
        Lynis की शुरुआत 2007 में Michael Boelen ने की थी। Michael CISOfy कंपनी के founder हैं और Linux सिक्योरिटी में 20+ साल का अनुभव रखते हैं। शुरू में यह "Lynis" नहीं "rkhunter" जैसा एक सिंपल ऑडिट स्क्रिप्ट था, लेकिन समय के साथ इसे पूरा फ़्रेमवर्क बना दिया गया।
      </p>
      <p>
        2010 में Lynis को ओपन सोर्स किया गया और GitHub पर रिलीज़ किया गया। 2013 में CISOfy ने Enterprise version (Lynis Enterprise) लॉन्च किया जिसमें एडिशनल फ़ीचर्स जैसे रिमोट ऑडिटिंग, डैशबोर्ड, और कंप्लायंस रिपोर्टिंग थे। कम्युनिटी वर्जन फ़्री है और Enterprise वर्जन पेड है।
      </p>
      <p>
        आज Lynis GitHub पर 13,000+ स्टार्स के साथ सबसे पॉपुलर Linux सिक्योरिटी ऑडिटिंग टूल है। यह काली लिनक्स, पैरोट OS, और कई सिक्योरिटी डिस्ट्रीब्यूशंस में प्री-इंस्टॉल्ड आता है। रेगुलर अपडेट्स आते हैं — नए टेस्ट्स, नए कंप्लायंस प्रोफ़ाइल्स, और नए सिक्योरिटी चेक्स जुड़ते रहते हैं।
      </p>

      <h2>How Lynis Works?</h2>
      <p>
        Lynis सिस्टम को कई कैटेगरीज़ में ऑडिट करता है। हर कैटेगरी में कई टेस्ट्स होते हैं जो सिस्टम की अलग-अलग सिक्योरिटी एस्पेक्ट्स चेक करते हैं:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Boot & Startup:</strong> बूटलोडर सिक्योरिटी, GRUB सेटिंग्स, init सिस्टम कॉन्फ़िगरेशन</li>
        <li><strong className="text-white">Kernel:</strong> कर्नेल पैरामीटर्स, लोडेड मॉड्यूल्स, sysctl हार्डनिंग</li>
        <li><strong className="text-white">Memory & Processes:</strong> स्वैप, प्रोसेस प्रोटेक्शन, ASLR, स्टैक प्रोटेक्शन</li>
        <li><strong className="text-white">Users & Groups:</strong> पासवर्ड पॉलिसीज़, सूडो कॉन्फ़िग्स, UID 0 अकाउंट्स</li>
        <li><strong className="text-white">Shells:</strong> शेल कॉन्फ़िगरेशंस, हिस्ट्री सेटिंग्स, umask, रिस्ट्रिक्टेड शेल्स</li>
        <li><strong className="text-white">File Systems:</strong> माउंट ऑप्शंस, परमिशंस, tmp सिक्योरिटी, SUID/SGID</li>
        <li><strong className="text-white">Storage:</strong> NFS सिक्योरिटी, डिस्क एन्क्रिप्शन</li>
        <li><strong className="text-white">Networking:</strong> फ़ायरवॉल रूल्स, पोर्ट्स, DNS, IPv6, प्रोमिस्क्युअस मोड</li>
        <li><strong className="text-white">Firewalls:</strong> iptables, nftables, ufw रूल्स चेकिंग</li>
        <li><strong className="text-white">SSH:</strong> SSH डेमॉन कॉन्फ़िगरेशन, की सिक्योरिटी, प्रोटोकॉल वर्जन</li>
        <li><strong className="text-white">Software:</strong> पैकेज वल्नरेबिलिटीज़, अपडेट्स, कंपाइलर्स</li>
        <li><strong className="text-white">Databases:</strong> MySQL, PostgreSQL, MongoDB सिक्योरिटी</li>
        <li><strong className="text-white">Web Servers:</strong> Apache, Nginx सिक्योरिटी कॉन्फ़िगरेशन</li>
        <li><strong className="text-white">Mail Servers:</strong> Postfix, Exim सिक्योरिटी</li>
        <li><strong className="text-white">PHP:</strong> PHP कॉन्फ़िगरेशन सिक्योरिटी</li>
      </ul>
      <p>
        Lynis का काम करने का तरीका यह है कि यह पहले सिस्टम की बेसिक इन्फ़ॉर्मेशन कलेक्ट करता है — OS वर्जन, कर्नेल वर्जन, इंस्टॉल्ड पैकेजेस। फिर हर कैटेगरी के टेस्ट्स रन करता है। हर टेस्ट एक स्पेसिफ़िक सिक्योरिटी एस्पेक्ट चेक करता है। रिज़ल्ट्स कलेक्ट होते हैं और फ़ाइनल रिपोर्ट बनती है जिसमें हार्डनिंग इंडेक्स, वॉर्निंग्स, और सजेशंस होते हैं।
      </p>

      <h2>Installation</h2>
      <CodeBlock
        title="Lynis इंस्टॉलेशन"
        code={`# apt से (सबसे आसान):
sudo apt update
sudo apt install lynis

# Git से (सबसे लेटेस्ट वर्जन):
git clone https://github.com/CISOfy/lynis.git
cd lynis

# डायरेक्ट रन करो (इंस्टॉल की ज़रूरत नहीं):
sudo ./lynis audit system

# सिस्टम-वाइड इंस्टॉल:
sudo cp -r lynis /usr/local/
sudo ln -s /usr/local/lynis/lynis /usr/local/bin/lynis

# Snap से:
sudo snap install lynis

# Docker से:
docker pull lynis/lynis
docker run --rm lynis/lynis audit system

# वर्जन चेक:
lynis show version

# सहायता:
lynis --help`}
      />

      <h2>Basic Usage</h2>
      <CodeBlock
        title="सिस्टम ऑडिट"
        code={`# फ़ुल सिस्टम ऑडिट (सभी टेस्ट्स):
sudo lynis audit system

# क्विक स्कैन (कम टेस्ट्स, तेज़):
sudo lynis audit system --quick

# स्पेसिफ़िक टेस्ट ग्रुप्स रन करो:
sudo lynis audit system --tests-from-group "firewalls networking"

# उपलब्ध टेस्ट ग्रुप्स देखो:
sudo lynis show groups

# सभी टेस्ट्स की लिस्ट:
sudo lynis show tests

# प्रोफ़ाइल यूज़ करो:
sudo lynis audit system --profile /etc/lynis/custom.prf

# क्रॉनजॉब मोड (लॉग कम):
sudo lynis audit system --cronjob

# रिपोर्ट फ़ाइल स्पेसिफ़ाई:
sudo lynis audit system --report-file /tmp/audit-report.dat

# कलर आउटपुट:
sudo lynis audit system --no-colors`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">audit system</td><td className="py-2 px-3">फ़ुल सिस्टम ऑडिट</td><td className="py-2 px-3 font-mono text-xs">lynis audit system</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--quick</td><td className="py-2 px-3">क्विक स्कैन (कम टेस्ट्स)</td><td className="py-2 px-3 font-mono text-xs">lynis audit system --quick</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--tests-from-group</td><td className="py-2 px-3">स्पेसिफ़िक ग्रुप के टेस्ट्स</td><td className="py-2 px-3 font-mono text-xs">--tests-from-group "ssh"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--profile</td><td className="py-2 px-3">कस्टम प्रोफ़ाइल यूज़ करो</td><td className="py-2 px-3 font-mono text-xs">--profile /etc/lynis/custom.prf</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--cronjob</td><td className="py-2 px-3">क्रॉनजॉब मोड (मिनिमल आउटपुट)</td><td className="py-2 px-3 font-mono text-xs">lynis audit system --cronjob</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--report-file</td><td className="py-2 px-3">रिपोर्ट फ़ाइल पाथ</td><td className="py-2 px-3 font-mono text-xs">--report-file /tmp/report.dat</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--logfile</td><td className="py-2 px-3">लॉग फ़ाइल पाथ</td><td className="py-2 px-3 font-mono text-xs">--logfile /tmp/lynis.log</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--no-colors</td><td className="py-2 px-3">कलर आउटपुट बंद</td><td className="py-2 px-3 font-mono text-xs">lynis audit system --no-colors</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">show version</td><td className="py-2 px-3">वर्जन दिखाओ</td><td className="py-2 px-3 font-mono text-xs">lynis show version</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">show groups</td><td className="py-2 px-3">उपलब्ध टेस्ट ग्रुप्स</td><td className="py-2 px-3 font-mono text-xs">lynis show groups</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">show tests</td><td className="py-2 px-3">सभी टेस्ट्स की लिस्ट</td><td className="py-2 px-3 font-mono text-xs">lynis show tests</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">show details</td><td className="py-2 px-3">स्पेसिफ़िक टेस्ट की डिटेल्स</td><td className="py-2 px-3 font-mono text-xs">lynis show details TEST-ID</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">update info</td><td className="py-2 px-3">अपडेट इन्फ़ो चेक करो</td><td className="py-2 px-3 font-mono text-xs">lynis update info</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--skip-plugin</td><td className="py-2 px-3">प्लगइन स्किप करो</td><td className="py-2 px-3 font-mono text-xs">--skip-plugin pname</td></tr>
          </tbody>
        </table>
      </div>

      <h2>System Audit Detailed</h2>
      <p>
        फ़ुल सिस्टम ऑडिट रन करने पर Lynis कई चरणों में काम करता है:
      </p>
      <CodeBlock
        title="ऑडिट प्रोसेस"
        code={`# फ़ुल ऑडिट रन करो:
sudo lynis audit system

# यह प्रोसेस होता है:
# 1. Initialization — OS डिटेक्ट करता है
# 2. System tools check — ज़रूरी टूल्स मौजूद हैं या नहीं
# 3. Boot & services — बूटलोडर, सर्विसेज़
# 4. Kernel — कर्नेल पैरामीटर्स
# 5. Users & groups — यूज़र अकाउंट्स
# 6. Shells — शेल कॉन्फ़िगरेशंस
# 7. File systems — फ़ाइल परमिशंस
# 8. Storage — NFS, एन्क्रिप्शन
# 9. Networking — नेटवर्क कॉन्फ़िग
# 10. Firewalls — फ़ायरवॉल रूल्स
# 11. SSH — SSH सिक्योरिटी
# 12. Software — पैकेज सिक्योरिटी
# 13. Databases — डेटाबेस सिक्योरिटी
# 14. Web servers — वेब सर्वर सिक्योरिटी
# 15. Final — रिपोर्ट जनरेट

# आउटपुट में दिखता है:
# [+] Hardening index : 67 [#############       ]
# Warnings: 5
# Suggestions: 23`}
      />

      <h2>Security Scoring</h2>
      <p>
        Lynis हार्डनिंग इंडेक्स देता है जो 0-100 के बीच होता है:
      </p>
      <CodeBlock
        title="स्कोर एनालिसिस"
        code={`# हार्डनिंग इंडेक्स:
# 0-40:   बहुत कमज़ोर (Very Poor) — सिस्टम बहुत वल्नरेबल है
# 41-60:  कमज़ोर (Poor) — बेसिक सिक्योरिटी भी नहीं है
# 61-70:  ठीक (Decent) — बेसिक सिक्योरिटी है
# 71-80:  अच्छा (Good) — मज़बूत सिक्योरिटी
# 81-100: उत्कृष्ट (Excellent) — अच्छी तरह हार्डन्ड

# डिटेल्ड लॉग फ़ाइल:
cat /var/log/lynis.log

# मशीन-रीडेबल रिपोर्ट:
cat /var/log/lynis-report.dat

# सिर्फ़ वॉर्निंग्स और सजेशंस देखो:
grep -E "warning|suggestion" /var/log/lynis-report.dat

# स्पेसिफ़िक कैटेगरी की सजेशंस:
grep "suggestion" /var/log/lynis-report.dat | grep "firewall"

# सिर्फ़ क्रिटिकल वॉर्निंग्स:
grep "warning" /var/log/lynis-report.dat | grep -i "high|critical"`}
      />

      <h2>Specific Tests Run</h2>
      <CodeBlock
        title="सेलेक्टिव स्कैनिंग"
        code={`# सिर्फ़ फ़ायरवॉल टेस्ट्स:
sudo lynis audit system --tests-from-group "firewalls"

# सिर्फ़ SSH सिक्योरिटी चेक:
sudo lynis audit system --tests-from-group "ssh"

# सिर्फ़ कर्नेल पैरामीटर्स:
sudo lynis audit system --tests-from-group "kernel"

# सिर्फ़ नेटवर्किंग:
sudo lynis audit system --tests-from-group "networking"

# सिर्फ़ सॉफ़्टवेयर अपडेट्स:
sudo lynis audit system --tests-from-group "software"

# सिर्फ़ यूज़र अकाउंट्स:
sudo lynis audit system --tests-from-group "users"

# सिर्फ़ फ़ाइल सिस्टम्स:
sudo lynis audit system --tests-from-group "filesystems"

# कई ग्रुप्स एक साथ:
sudo lynis audit system --tests-from-group "firewalls ssh networking kernel"

# स्पेसिफ़िक टेस्ट ID:
sudo lynis audit system --tests-from-group "SSH-7408"`}
      />

      <h2>Common Test IDs</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Test ID</th>
              <th className="text-left py-2 px-3 text-neon-green">कैटेगरी</th>
              <th className="text-left py-2 px-3 text-neon-green">डिस्क्रिप्शन</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">BOOT-5121</td><td className="py-2 px-3">Boot</td><td className="py-2 px-3">GRUB बूटलोडर पासवर्ड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">BOOT-5122</td><td className="py-2 px-3">Boot</td><td className="py-2 px-3">GRUB फ़ाइल परमिशंस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">KRNL-5830</td><td className="py-2 px-3">Kernel</td><td className="py-2 px-3">कर्नेल हार्डनिंग (sysctl)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">AUTH-9216</td><td className="py-2 px-3">Users</td><td className="py-2 px-3">पासवर्ड हैशिंग राउंड्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">AUTH-9218</td><td className="py-2 px-3">Users</td><td className="py-2 px-3">मिनिमम पासवर्ड एज</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">AUTH-9230</td><td className="py-2 px-3">Users</td><td className="py-2 px-3">UID 0 अकाउंट्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SSH-7408</td><td className="py-2 px-3">SSH</td><td className="py-2 px-3">SSH रूट लॉगिन डिसेबल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SSH-7410</td><td className="py-2 px-3">SSH</td><td className="py-2 px-3">SSH प्रोटोकॉल v2</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">FIRE-4513</td><td className="py-2 px-3">Firewall</td><td className="py-2 px-3">iptables रूल्स लोडेड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">NETW-3032</td><td className="py-2 px-3">Network</td><td className="py-2 px-3">प्रोमिस्क्युअस मोड चेक</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">FILE-6310</td><td className="py-2 px-3">Files</td><td className="py-2 px-3">वर्ल्ड-राइटेबल फ़ाइल्स</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">LOGG-2190</td><td className="py-2 px-3">Logging</td><td className="py-2 px-3">सिस्टम लॉगिंग कॉन्फ़िग</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Post-Exploitation Audit</h2>
      <p>
        पेनेट्रेशन टेस्टिंग में जब किसी Linux मशीन का एक्सेस मिल जाए, तो Lynis अपलोड करके रन करो:
      </p>
      <CodeBlock
        title="पोस्ट-एक्सप्लॉइटेशन"
        code={`# स्टेप 1: Lynis अपलोड करो
scp lynis.tar.gz user@target:/tmp/

# या wget से डाउनलोड:
wget https://github.com/CISOfy/lynis/archive/master.zip -O /tmp/lynis.zip

# स्टेप 2: एक्स्ट्रैक्ट और रन
cd /tmp
unzip lynis.zip
cd lynis-master
sudo ./lynis audit system

# स्टेप 3: रिज़ल्ट्स एनालाइज़ करो
grep "warning" /var/log/lynis-report.dat
grep "suggestion" /var/log/lynis-report.dat

# स्टेप 4: प्रिविलेज एस्केलेशन वेक्टर्स ढूंढो:
# - वीक फ़ाइल परमिशंस
# - SUID बाइनरीज़
# - राइटेबल क्रॉन जॉब्स
# - वीक सूडो कॉन्फ़िग्स
# - आउटडेटेड कर्नेल
# - रूट SUID बाइनरीज़
# - वर्ल्ड-राइटेबल डायरेक्ट्रीज़`}
      />

      <h2>Hardening Recommendations</h2>
      <CodeBlock
        title="कॉमन फ़िक्सेज़"
        code={`# 1. SSH हार्डनिंग:
# /etc/ssh/sshd_config में बदलो:
PermitRootLogin no
PasswordAuthentication no
MaxAuthTries 3
Protocol 2
AllowUsers admin
X11Forwarding no

# 2. कर्नेल हार्डनिंग:
# /etc/sysctl.conf में जोड़ो:
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.tcp_syncookies = 1
kernel.randomize_va_space = 2
net.ipv6.conf.all.accept_redirects = 0

# अप्लाई करो:
sudo sysctl -p

# 3. फ़ाइल सिस्टम सिक्योरिटी:
# /etc/fstab में बदलो:
tmpfs /tmp tmpfs defaults,noexec,nosuid,nodev 0 0

# 4. पासवर्ड पॉलिसी:
# /etc/login.defs में बदलो:
PASS_MAX_DAYS 90
PASS_MIN_DAYS 7
PASS_MIN_LEN 12
PASS_WARN_AGE 14

# 5. फ़ायरवॉल:
sudo apt install ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw enable

# 6. अनावश्यक सर्विसेज़ बंद करो:
sudo systemctl disable telnet
sudo systemctl disable rsh
sudo systemctl disable rlogin`}
      />

      <h2>Compliance Checking</h2>
      <CodeBlock
        title="CIS / HIPAA / PCI-DSS"
        code={`# CIS बेंचमार्क चेक:
sudo lynis audit system --tests-from-group "cis"

# HIPAA कंप्लायंस:
sudo lynis audit system --profile /etc/lynis/hipaa.prf

# PCI-DSS कंप्लायंस:
sudo lynis audit system --profile /etc/lynis/pci-dss.prf

# कस्टम कंप्लायंस प्रोफ़ाइल बनाओ:
# /etc/lynis/compliance.prf:
skip-test=TEST-001
skip-test=TEST-002
include-test=REQUIRED-TEST

# रिपोर्ट जनरेट:
sudo lynis audit system --report-file /tmp/audit-report.dat

# कंप्लायंस रिपोर्ट पार्स करो:
grep "compliance" /var/log/lynis-report.dat`}
      />

      <h2>Custom Profiles</h2>
      <CodeBlock
        title="प्रोफ़ाइल कॉन्फ़िगरेशन"
        code={`# कस्टम प्रोफ़ाइल बनाओ:
# /etc/lynis/custom.prf:

# स्पेसिफ़िक टेस्ट्स स्किप करो:
skip-test=BOOT-5121    # GRUB पासवर्ड चेक स्किप
skip-test=SSH-7408     # SSH रूट लॉगिन चेक स्किप

# कस्टम सेटिंग्स:
config-data=test-value

# प्रोफ़ाइल यूज़ करो:
sudo lynis audit system --profile /etc/lynis/custom.prf

# कई प्रोफ़ाइल्स:
sudo lynis audit system --profile /etc/lynis/production.prf

# प्रोडक्शन प्रोफ़ाइल:
# /etc/lynis/production.prf:
skip-test=BOOT-5121
skip-test=NETW-3032
config-data=production-env`}
      />

      <h2>Plugin System</h2>
      <p>
        Lynis प्लगइन सिस्टम सपोर्ट करता है जिससे कस्टम टेस्ट्स जोड़ सकते हो:
      </p>
      <CodeBlock
        title="कस्टम प्लगइन्स"
        code={`# प्लगइन डायरेक्ट्री:
ls /usr/local/lynis/plugins/

# कस्टम प्लगइन बनाओ:
# /usr/local/lynis/plugins/my_custom_test:
#!/bin/bash
# Custom security test
Register --test-id "CUST-0001" --desc "Custom test" --network "no"
if [ -f "/etc/custom_config" ]; then
    Display --indent 2 --text "- Custom config found"
    AddHP --point "CUST-0001" --value "Good"
else
    Display --indent 2 --text "- Custom config missing"
    AddHP --point "CUST-0001" --value "Missing"
fi

# प्लगइन इनेबल करो:
chmod +x /usr/local/lynis/plugins/my_custom_test`}
      />

      <h2>Automated Auditing</h2>
      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट्स"
        code={`# डेली ऑडिट क्रॉन जॉब:
# crontab -e में जोड़ो:
0 2 * * * /usr/local/bin/lynis audit system --cronjob --logfile /var/log/lynis/daily.log

# वीकली रिपोर्ट:
0 3 * * 0 /usr/local/bin/lynis audit system --cronjob --report-file /var/log/lynis/weekly.dat

# ईमेल रिपोर्ट स्क्रिप्ट:
#!/bin/bash
# lynis-email-report.sh
/usr/local/bin/lynis audit system --cronjob --logfile /tmp/lynis.log
REPORT="Lynis Audit Report - $(date)\\n\\n"
REPORT+=$(grep "Hardening" /tmp/lynis.log)
REPORT+="\\n\\nWarnings:\\n"
REPORT+=$(grep "warning" /var/log/lynis-report.dat)
echo -e "$REPORT" | mail -s "Lynis Audit $(date)" admin@company.com

# Ansible इंटीग्रेशन:
# - name: Run Lynis audit
#   command: lynis audit system --cronjob
#   register: lynis_output
#
# - name: Print Lynis results
#   debug:
#     var: lynis_output.stdout_lines

# Docker कंटेनर ऑडिट:
docker run --rm -v /:/mnt:ro --privileged lynis/lynis audit system`}
      />

      <h2>Lynis vs Other Auditors</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Lynis</th>
              <th className="text-left py-2 px-3 text-neon-green">OpenSCAP</th>
              <th className="text-left py-2 px-3 text-neon-green">Tiger</th>
              <th className="text-left py-2 px-3 text-neon-green">rkhunter</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">टेस्ट्स</td><td className="py-2 px-3">300+</td><td className="py-2 px-3">1000+ (प्रोफ़ाइल्स)</td><td className="py-2 px-3">100+</td><td className="py-2 px-3">600+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">OS सपोर्ट</td><td className="py-2 px-3">Linux, macOS, BSD</td><td className="py-2 px-3">Linux, Windows</td><td className="py-2 px-3">Unix/Linux</td><td className="py-2 px-3">Linux</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कंप्लायंस</td><td className="py-2 px-3">CIS, HIPAA, PCI-DSS</td><td className="py-2 px-3">CIS, STIG, PCI-DSS</td><td className="py-2 px-3">बेसिक</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">इज़ ऑफ़ यूज़</td><td className="py-2 px-3">आसान</td><td className="py-2 px-3">जटिल</td><td className="py-2 px-3">मीडियम</td><td className="py-2 px-3">आसान</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">आउटपुट</td><td className="py-2 px-3">Text, JSON, CSV</td><td className="py-2 px-3">XML, HTML</td><td className="py-2 px-3">Text</td><td className="py-2 px-3">Text</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">भाषा</td><td className="py-2 px-3">Shell Script</td><td className="py-2 px-3">C/Python</td><td className="py-2 px-3">Shell Script</td><td className="py-2 px-3">Shell/Perl</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">प्लगइन्स</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ (XCCDF)</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">स्क्रिप्ट्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">फ़ोकस</td><td className="py-2 px-3">जनरल ऑडिट</td><td className="py-2 px-3">कंप्लायंस</td><td className="py-2 px-3">रूटकिट डिटेक्शन</td><td className="py-2 px-3">रूटकिट डिटेक्शन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">मेंटेनेंस</td><td className="py-2 px-3">एक्टिव</td><td className="py-2 px-3">एक्टिव</td><td className="py-2 px-3">स्लो</td><td className="py-2 px-3">स्लो</td></tr>
            <tr><td className="py-2 px-3 text-white">प्राइस</td><td className="py-2 px-3">फ़्री (ओपन सोर्स)</td><td className="py-2 px-3">फ़्री</td><td className="py-2 px-3">फ़्री</td><td className="py-2 px-3">फ़्री</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'बहुत सारी वॉर्निंग्स आ रही हैं — क्या करूं?', a: 'सिर्फ़ क्रिटिकल वॉर्निंग्स पर फ़ोकस करो: grep "warning" /var/log/lynis-report.dat | grep -i "high|critical"। टॉप सजेशंस पहले लागू करो: grep "suggestion" /var/log/lynis-report.dat | head -10' },
          { q: 'फ़ाल्स पॉज़िटिव्स आ रहे हैं', a: 'कस्टम प्रोफ़ाइल बनाओ और उन टेस्ट्स को स्किप करो: /etc/lynis/custom.prf में skip-test=TEST-ID जोड़ो। फिर --profile फ़्लैग से यूज़ करो।' },
          { q: 'स्कैन बहुत स्लो है', a: 'क्विक स्कैन यूज़ करो: lynis audit system --quick। या स्पेसिफ़िक ग्रुप्स ही रन करो: --tests-from-group "ssh firewalls"' },
          { q: 'क्रॉनजॉब में एरर आ रहा है', a: 'पाथ फ़ुल रखो: /usr/local/bin/lynis। sudo की ज़रूरत नहीं क्रॉन में — रूट क्रॉन में रन करो। --cronjob फ़्लैग यूज़ करो।' },
          { q: 'Docker कंटेनर में रन नहीं हो रहा', a: 'Privileged मोड चाहिए: docker run --rm -v /:/mnt:ro --privileged lynis/lynis audit system। कंटेनर के अंदर सिस्टम फ़ाइल्स /mnt पर माउंट होती हैं।' },
          { q: 'कस्टम टेस्ट कैसे लिखूं?', a: 'plugins/ डायरेक्ट्री में शेल स्क्रिप्ट बनाओ। Register --test-id से टेस्ट रजिस्टर करो। Display --indent से आउटपुट दिखाओ। AddHP से रिज़ल्ट सेव करो।' },
          { q: 'वर्जन पुराना है — कैसे अपडेट करूं?', a: 'Git से: cd lynis && git pull। apt से: sudo apt update && sudo apt upgrade lynis। या नया रिलीज़ डाउनलोड करो GitHub से।' },
          { q: 'स्कोर 100 कैसे लाएं?', a: '100 लाना लगभग असंभव है — Lynis बहुत स्ट्रिक्ट है। 80+ बहुत अच्छा है। सभी सजेशंस लागू करो, SSH हार्डन करो, फ़ायरवॉल लगाओ, कर्नेल पैरामीटर्स सेट करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Lynis ऑडिट के बाद क्या-क्या हार्डन करना चाहिए:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">SSH हार्डनिंग:</strong> रूट लॉगिन बंद, पासवर्ड ऑथ बंद, की-बेस्ड ऑथ, प्रोटोकॉल v2</li>
        <li><strong className="text-white">फ़ायरवॉल:</strong> ufw/iptables से सिर्फ़ ज़रूरी पोर्ट्स खोलो, बाकी सब ब्लॉक</li>
        <li><strong className="text-white">कर्नेल हार्डनिंग:</strong> sysctl से ASLR, SYN cookies, ICMP redirect बंद</li>
        <li><strong className="text-white">पासवर्ड पॉलिसी:</strong> मज़बूत पासवर्ड, रेगुलर चेंज, हैशिंग राउंड्स बढ़ाओ</li>
        <li><strong className="text-white">फ़ाइल परमिशंस:</strong> /tmp noexec, world-writable फ़ाइल्स ठीक करो</li>
        <li><strong className="text-white">अनावश्यक सर्विसेज़:</strong> ज़रूरत नहीं तो बंद करो — telnet, rsh, rlogin</li>
        <li><strong className="text-white">ऑटोमैटिक अपडेट्स:</strong> unattended-upgrades इनेबल करो</li>
        <li><strong className="text-white">लॉगिंग:</strong> auditd इनेबल करो, सेंट्रल लॉगिंग सेट करो</li>
        <li><strong className="text-white">SUID/SGID:</strong> अनावश्यक SUID बाइनरीज़ हटाओ</li>
        <li><strong className="text-white">एन्क्रिप्शन:</strong> डिस्क एन्क्रिप्शन, TLS/SSL कॉन्फ़िगरेशन</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <CodeBlock
        title="प्रैक्टिस एनवायरनमेंट"
        code={`# VM सेटअप (VirtualBox/VMware):
# Ubuntu Server इंस्टॉल करो
# Lynis इंस्टॉल करो
# डिफ़ॉल्ट इंस्टॉल पर रन करो

# प्रैक्टिस स्टेप्स:
# 1. डिफ़ॉल्ट Ubuntu इंस्टॉल पर Lynis रन करो
# 2. स्कोर नोट करो
# 3. सजेशंस एक-एक करके लागू करो
# 4. दोबारा रन करो — स्कोर बढ़ेगा
# 5. रिपीट करो जब तक स्कोर 80+ न हो

# हार्डनिंग चेकलिस्ट:
# [ ] SSH हार्डनिंग
# [ ] फ़ायरवॉल सेटअप (ufw/iptables)
# [ ] कर्नेल पैरामीटर्स
# [ ] पासवर्ड पॉलिसीज़
# [ ] फ़ाइल परमिशंस
# [ ] अनावश्यक सर्विसेज़ बंद
# [ ] ऑडिट लॉगिंग इनेबल
# [ ] ऑटोमैटिक अपडेट्स कॉन्फ़िग

# Docker ऑडिट:
docker run --rm -v /:/mnt:ro --privileged lynis/lynis audit system`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड ऑडिटिंग"
        code={`# रिमोट ऑडिट (SSH के ज़रिए):
ssh user@target 'sudo lynis audit system --cronjob' > /tmp/remote-audit.log

# मल्टी-सर्वर ऑडिट स्क्रिप्ट:
#!/bin/bash
SERVERS="server1 server2 server3"
for server in $SERVERS; do
    echo "[+] Auditing $server..."
    ssh user@$server 'sudo lynis audit system --cronjob' > "${server}_audit.log"
    SCORE=$(grep "Hardening" ${server}_audit.log)
    echo "$server: $SCORE"
done

# JSON पार्सिंग:
lynis audit system --report-file /tmp/report.dat
cat /tmp/report.dat | grep "hardening_index" | cut -d= -f2

# ऑटोमेटेड रेमेडिएशन:
#!/bin/bash
# Lynis सजेशंस ऑटोमैटिकली लागू करो
grep "suggestion" /var/log/lynis-report.dat | while read line; do
    TEST_ID=$(echo "$line" | grep -oP 'LYNIS-TEST: \K\S+')
    case $TEST_ID in
        SSH-7408)
            sed -i 's/PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
            ;;
        FIRE-4513)
            ufw enable
            ;;
    esac
done`}
      />

      <h2>SSH Deep Dive</h2>
      <p>
        SSH सबसे क्रिटिकल सर्विस है — Lynis कई SSH टेस्ट्स करता है। यहाँ डीप डाइव है।
      </p>
      <CodeBlock
        title="SSH एडवांस्ड हार्डनिंग"
        code={`# Lynis SSH टेस्ट्स:
# SSH-7408 — रूट लॉगिन डिसेबल
# SSH-7410 — प्रोटोकॉल v2
# SSH-7412 — MaxAuthTries
# SSH-7414 — AllowAgentForwarding
# SSH-7416 — AllowTcpForwarding
# SSH-7418 — X11Forwarding
# SSH-7420 — पासवर्ड ऑथेंटिकेशन

# /etc/ssh/sshd_config — फ़ुल हार्डनिंग:
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
MaxAuthTries 3
MaxSessions 2
AllowUsers admin deploy
AllowGroups sshusers
X11Forwarding no
AllowTcpForwarding no
AllowAgentForwarding no
ClientAliveInterval 300
ClientAliveCountMax 2
LoginGraceTime 30
Protocol 2
Banner /etc/issue.net
LogLevel VERBOSE

# SSH की-बेस्ड ऑथ सेटअप:
# क्लाइंट पर:
ssh-keygen -t ed25519 -C "admin@company"
ssh-copy-id admin@target_server

# सर्वर पर:
# /etc/ssh/sshd_config:
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys
PasswordAuthentication no

# SSH सर्टिफ़िकेट ऑथ (एंटरप्राइज़):
# CA सर्वर सेटअप:
ssh-keygen -t ed25519 -f /etc/ssh/ca_key -N ""
# सर्वर सर्टिफ़िकेट:
ssh-keygen -s /etc/ssh/ca_key -I admin -n admin -V +52w user_key.pub`}
      />

      <h2>Kernel Hardening Deep Dive</h2>
      <p>
        कर्नेल पैरामीटर्स सिस्टम सिक्योरिटी का बेस हैं — Lynis KRNL-5830 टेस्ट इन्हें चेक करता है।
      </p>
      <CodeBlock
        title="कर्नेल हार्डनिंग"
        code={`# /etc/sysctl.d/99-security.conf:
# नेटवर्क सिक्योरिटी:
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.rp_filter = 1
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.default.accept_source_route = 0
net.ipv4.tcp_syncookies = 1
net.ipv4.icmp_echo_ignore_broadcasts = 1
net.ipv4.icmp_ignore_bogus_error_responses = 1
net.ipv4.tcp_max_syn_backlog = 2048
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_syn_retries = 5

# IPv6 सिक्योरिटी:
net.ipv6.conf.all.accept_redirects = 0
net.ipv6.conf.default.accept_redirects = 0
net.ipv6.conf.all.accept_source_route = 0
net.ipv6.conf.default.accept_source_route = 0

# मेमोरी सिक्योरिटी:
kernel.randomize_va_space = 2
kernel.kptr_restrict = 2
kernel.dmesg_restrict = 1
kernel.perf_event_paranoid = 3
kernel.yama.ptrace_scope = 2

# फ़ाइल सिस्टम:
fs.protected_hardlinks = 1
fs.protected_symlinks = 1
fs.suid_dumpable = 0

# अप्लाई:
sudo sysctl --system
# या:
sudo sysctl -p /etc/sysctl.d/99-security.conf`}
      />

      <h2>Firewall Hardening</h2>
      <p>
        Lynis FIRE-4513 टेस्ट फ़ायरवॉल रूल्स चेक करता है — यहाँ कॉम्प्रिहेन्सिव फ़ायरवॉल सेटअप है।
      </p>
      <CodeBlock
        title="फ़ायरवॉल कॉन्फ़िगरेशन"
        code={`# UFW (Ubuntu/Debian):
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw logging on
sudo ufw enable

# iptables (सभी Linux):
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP
sudo iptables -P OUTPUT ACCEPT
sudo iptables -A INPUT -i lo -j ACCEPT
sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
sudo iptables -A INPUT -p icmp --icmp-type echo-request -j ACCEPT

# रेट लिमिटिंग (DDoS प्रोटेक्शन):
sudo iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
sudo iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 60 --hitcount 4 -j DROP

# लॉगिंग:
sudo iptables -A INPUT -j LOG --log-prefix "IPTABLES-DROP: "
sudo iptables -A INPUT -j DROP

# nftables (modern Linux):
nft add table inet filter
nft add chain inet filter input { type filter hook input priority 0 \; policy drop \; }
nft add rule inet filter input ct state established,related accept
nft add rule inet filter input iif lo accept
nft add rule inet filter input tcp dport 22 accept`}
      />

      <h2>Automated Hardening Scripts</h2>
      <p>
        Lynis सजेशंस को ऑटोमैटिकली लागू करने के लिए स्क्रिप्ट्स।
      </p>
      <CodeBlock
        title="ऑटोमेटेड हार्डनिंग"
        code={`#!/bin/bash
# lynis-harden.sh — Lynis सजेशंस ऑटोमैटिकली लागू करो

echo "[*] Lynis हार्डनिंग शुरू..."

# 1. SSH हार्डनिंग:
echo "[+] SSH हार्डनिंग..."
sed -i 's/#PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config
sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
sed -i 's/#MaxAuthTries 6/MaxAuthTries 3/' /etc/ssh/sshd_config
systemctl restart sshd

# 2. कर्नेल हार्डनिंग:
echo "[+] कर्नेल हार्डनिंग..."
cat > /etc/sysctl.d/99-security.conf << 'EOF'
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.tcp_syncookies = 1
kernel.randomize_va_space = 2
kernel.kptr_restrict = 2
kernel.dmesg_restrict = 1
EOF
sysctl --system

# 3. पासवर्ड पॉलिसी:
echo "[+] पासवर्ड पॉलिसी..."
sed -i 's/PASS_MAX_DAYS.*/PASS_MAX_DAYS 90/' /etc/login.defs
sed -i 's/PASS_MIN_DAYS.*/PASS_MIN_DAYS 7/' /etc/login.defs
sed -i 's/PASS_MIN_LEN.*/PASS_MIN_LEN 12/' /etc/login.defs

# 4. फ़ायरवॉल:
echo "[+] फ़ायरवॉल सेटअप..."
apt install -y ufw
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw --force enable

# 5. अनावश्यक सर्विसेज़:
echo "[+] अनावश्यक सर्विसेज़ बंद..."
for svc in telnet rsh rlogin xinetd; do
    systemctl disable $svc 2>/dev/null
    systemctl stop $svc 2>/dev/null
done

# 6. ऑटोमैटिक अपडेट्स:
echo "[+] ऑटोमैटिक अपडेट्स..."
apt install -y unattended-upgrades
dpkg-reconfigure -plow unattended-upgrades

# 7. ऑडिटिंग:
echo "[+] ऑडिट लॉगिंग..."
apt install -y auditd
systemctl enable auditd

# 8. दोबारा Lynis रन करो:
echo "[*] दोबारा ऑडिट..."
lynis audit system --quick --no-colors

echo "[+] हार्डनिंग पूरी!"`}
      />

      <h2>Real-World Scenarios</h2>
      <div className="space-y-3 mt-4">
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 1: प्रोडक्शन सर्वर ऑडिट</h4>
          <p className="text-gray-400 text-sm">
            50 प्रोडक्शन सर्वर्स का वीकली ऑडिट। Ansible प्लेबुक से Lynis रन करो, रिजल्ट्स कलेक्ट करो, डैशबोर्ड पर विज़ुअलाइज़ करो। क्रिटिकल वॉर्निंग्स पर अलर्ट भेजो। हार्डनिंग इंडेक्स ट्रैक करो — 70+ टार्गेट रखो।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 2: कंप्लायंस ऑडिट</h4>
          <p className="text-gray-400 text-sm">
            PCI-DSS कंप्लायंस के लिए ऑडिट। कस्टम प्रोफ़ाइल बनाओ जिसमें सिर्फ़ PCI-DSS रिलेटेड टेस्ट्स हों। रिपोर्ट जनरेट करो और ऑडिटर्स को दो। फेल्ड टेस्ट्स के लिए रेमेडिएशन प्लान बनाओ।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 3: पेनेट्रेशन टेस्टिंग</h4>
          <p className="text-gray-400 text-sm">
            Linux मशीन का एक्सेस मिलने पर Lynis अपलोड करो। SUID बाइनरीज़, राइटेबल क्रॉन जॉब्स, वीक सूडो कॉन्फ़िग — सब चेक करो। प्रिविलेज एस्केलेशन वेक्टर्स खोजो। रिपोर्ट में इन्क्लूड करो।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 4: क्लाउड सिक्योरिटी</h4>
          <p className="text-gray-400 text-sm">
            AWS/Azure/GCP इंस्टेंसेस का ऑडिट। क्लाउड-स्पेसिफ़िक प्रोफ़ाइल बनाओ। IAM रोल्स, सिक्योरिटी ग्रुप्स, नेटवर्क ACLs — सब Lynis से कवर करो। ऑटोमेशन से हर नए इंस्टेंस पर ऑडिट रन करो।
          </p>
        </div>
      </div>

      <h2>Common Mistakes</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'सिर्फ़ स्कोर पर फ़ोकस करना', a: 'स्कोर सब कुछ नहीं है। 80 स्कोर वाला सिस्टम 60 वाले से ज़्यादा सिक्योर हो सकता है — कॉन्टेक्स्ट मैटर। प्रोडक्शन एनवायरनमेंट के हिसाब से डिसीजन लो।' },
          { q: 'सभी सजेशंस एक साथ लागू करना', a: 'एक-एक करके लागू करो और टेस्ट करो। कुछ सजेशंस ब्रेकिंग हो सकती हैं — SSH कॉन्फ़िग बदलने से लॉकआउट हो सकता है।' },
          { q: 'लॉग्स नहीं चेक करना', a: '/var/log/lynis.log और /var/log/lynis-report.dat हमेशा चेक करो। डिटेल्ड इन्फ़ॉर्मेशन मिलती है।' },
          { q: 'प्रोफ़ाइल नहीं बनाना', a: 'हर एनवायरनमेंट (प्रोडक्शन, डेव, टेस्ट) के लिए अलग प्रोफ़ाइल बनाओ। डिफ़ॉल्ट प्रोफ़ाइल सबके लिए सही नहीं।' },
          { q: 'Docker कंटेनर्स भूल जाना', a: 'कंटेनर्स को भी ऑडिट करो — प्रोडक्शन में ज़रूरी है। प्रिविलेज्ड मोड चाहिए।' },
          { q: 'रिमोट ऑडिट नहीं करना', a: 'SSH से रिमोट ऑडिट करो — मल्टी-सर्वर एनवायरनमेंट के लिए ज़रूरी है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">❌ {item.q}</h4>
            <p className="text-gray-400 text-sm">✅ {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Integration with Other Tools</h2>
      <p>
        Lynis को दूसरे टूल्स के साथ इंटीग्रेट करके पावरफुल सिक्योरिटी वर्कफ़्लो बनाओ।
      </p>
      <CodeBlock
        title="टूल इंटीग्रेशन"
        code={`# Ansible + Lynis:
# playbook.yml:
---
- name: Lynis Audit
  hosts: all
  become: yes
  tasks:
    - name: Install Lynis
      apt: name=lynis state=present
    - name: Run Lynis
      command: lynis audit system --cronjob --report-file /tmp/lynis.dat
    - name: Fetch report
      fetch:
        src: /tmp/lynis.dat
        dest: ./reports/{{ inventory_hostname }}.dat

# Nagios + Lynis:
# Lynis रिज़ल्ट्स को Nagios में इंटीग्रेट करो
# /etc/nagios/plugins/check_lynis:
#!/bin/bash
SCORE=$(grep "hardening_index" /var/log/lynis-report.dat | cut -d= -f2)
if [ $SCORE -lt 70 ]; then
    echo "CRITICAL: Lynis score $SCORE"
    exit 2
elif [ $SCORE -lt 80 ]; then
    echo "WARNING: Lynis score $SCORE"
    exit 1
else
    echo "OK: Lynis score $SCORE"
    exit 0
fi

# ELK Stack + Lynis:
# Lynis लॉग्स को Elasticsearch में भेजो
# Filebeat कॉन्फ़िग:
# filebeat.inputs:
# - type: log
#   paths:
#     - /var/log/lynis.log
# output.elasticsearch:
#   hosts: ["localhost:9200"]`}
      />

      <h2>Reporting and Documentation</h2>
      <p>
        Lynis ऑडिट की रिपोर्टिंग और डॉक्यूमेंटेशन — कैसे करें।
      </p>
      <CodeBlock
        title="रिपोर्टिंग"
        code={`# रिपोर्ट जनरेट:
sudo lynis audit system --report-file /tmp/audit-report.dat

# हार्डनिंग इंडेक्स एक्सट्रैक्ट:
grep "hardening_index" /tmp/audit-report.dat | cut -d= -f2

# वॉर्निंग्स काउंट:
grep -c "warning" /tmp/audit-report.dat

# सजेशंस काउंट:
grep -c "suggestion" /tmp/audit-report.dat

# CSV रिपोर्ट बनाओ:
echo "TestID,Status,Description" > report.csv
grep "warning\|suggestion" /tmp/audit-report.dat | \\
  awk -F'=' '{print $1","$2}' >> report.csv

# एग्जीक्यूटिव समरी:
cat > summary.txt << EOF
=== Lynis Audit Report ===
Date: $(date)
Host: $(hostname)
OS: $(cat /etc/os-release | grep PRETTY_NAME | cut -d'"' -f2)
Hardening Index: $(grep "hardening_index" /tmp/audit-report.dat | cut -d= -f2)
Warnings: $(grep -c "warning" /tmp/audit-report.dat)
Suggestions: $(grep -c "suggestion" /tmp/audit-report.dat)
EOF

# HTML रिपोर्ट (lynis-report-converter से):
python3 lynis-report-converter.py /tmp/audit-report.dat > report.html`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Lynis क्या फ़िक्स करता है?', a: 'Lynis सिर्फ़ ऑडिट करता है — फ़िक्स नहीं करता। सजेशंस देता है जो आप मैनुअली लागू करो। ऑटोमेटेड हार्डनिंग के लिए Ansible, Puppet, या Chef यूज़ करो।' },
          { q: 'कितना टाइम लगता है?', a: 'फ़ुल ऑडिट 2-5 मिनट। क्विक स्कैन 30-60 सेकंड। सर्वर लोड पर डिपेंड करता है। रिमोट ऑडिट में नेटवर्क लेटेंसी भी लगती है।' },
          { q: 'प्रोडक्शन सर्वर पर सेफ़ है?', a: 'हाँ, Lynis रीड-ओनली ऑपरेशंस करता है। कुछ भी मॉडिफ़ाई नहीं करता। लेकिन लॉग्स जनरेट करता है जो IDS डिटेक्ट कर सकता है।' },
          { q: 'Windows पर चलता है?', a: 'नहीं, सिर्फ़ Linux, macOS, BSD, Unix सिस्टम्स पर चलता है। Windows के लिए Microsoft Baseline Security Analyzer या OpenSCAP यूज़ करो।' },
          { q: 'स्कोर कैसे इम्प्रूव करें?', a: 'Lynis के सजेशंस एक-एक करके लागू करो। SSH हार्डनिंग, फ़ायरवॉल सेटअप, कर्नेल पैरामीटर्स, पासवर्ड पॉलिसीज़ सबसे पहले करो।' },
          { q: 'कितने टेस्ट्स हैं?', a: '300+ टेस्ट्स हैं जो 15+ कैटेगरीज़ में बँटे हैं। हर अपडेट में नए टेस्ट्स जुड़ते हैं।' },
          { q: 'एंटरप्राइज़ वर्जन क्या देता है?', a: 'Lynis Enterprise में रिमोट ऑडिटिंग, डैशबोर्ड, कंप्लायंस रिपोर्टिंग, और सेंट्रल मैनेजमेंट है। कम्युनिटी वर्जन फ़्री है।' },
          { q: 'Docker में रन कर सकते हैं?', a: 'हाँ, लेकिन प्रिविलेज्ड मोड चाहिए: docker run --rm -v /:/mnt:ro --privileged lynis/lynis audit system' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">OpenSCAP</td><td className="py-2 px-3">NIST-सर्टिफ़ाइड कंप्लायंस स्कैनर</td><td className="py-2 px-3">CIS, STIG, PCI-DSS प्रोफ़ाइल्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Tiger</td><td className="py-2 px-3">Unix सिक्योरिटी ऑडिट</td><td className="py-2 px-3">रूटकिट डिटेक्शन भी</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">InSpec</td><td className="py-2 px-3">कंप्लायंस-एज़-कोड (Chef)</td><td className="py-2 px-3">Ruby DSL, ऑटोमेटेड टेस्टिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ScoutSuite</td><td className="py-2 px-3">क्लाउड सिक्योरिटी ऑडिटिंग</td><td className="py-2 px-3">AWS, Azure, GCP</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Trivy</td><td className="py-2 px-3">कंटेनर सिक्योरिटी स्कैनिंग</td><td className="py-2 px-3">कंटेनर इमेजेस, IaC</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">rkhunter</td><td className="py-2 px-3">रूटकिट डिटेक्शन</td><td className="py-2 px-3">रूटकिट्स और बैकडोर्स ढूंढता है</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">chkrootkit</td><td className="py-2 px-3">रूटकिट चेकिंग</td><td className="py-2 px-3">सिंपल, फ़ास्ट</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">ClamAV</td><td className="py-2 px-3">एंटीवायरस स्कैनिंग</td><td className="py-2 px-3">मालवेयर डिटेक्शन</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>वीकली क्रॉन जॉब सेट करो Lynis ऑडिट के लिए — रेगुलर मॉनिटरिंग ज़रूरी है</li>
          <li>SSH हार्डनिंग सबसे पहले करो — सबसे बड़ा सिक्योरिटी इम्पैक्ट</li>
          <li>फ़ायरवॉल इनेबल करो — ufw या iptables</li>
          <li>कर्नेल पैरामीटर्स sysctl से हार्डन करो</li>
          <li>पासवर्ड पॉलिसीज़ एनफ़ोर्स करो</li>
          <li>कंप्लायंस प्रोफ़ाइल्स यूज़ करो (CIS, HIPAA, PCI-DSS)</li>
          <li>पेनेटेस्ट में Lynis से प्रिविलेज एस्केलेशन वेक्टर्स मिलते हैं</li>
          <li>स्कोर ट्रैक करो — इम्प्रूवमेंट दिखेगी</li>
          <li>Docker कंटेनर्स को भी ऑडिट करो — प्रोडक्शन में ज़रूरी है</li>
          <li>रिमोट ऑडिटिंग स्क्रिप्ट बनाओ — मल्टी-सर्वर एनवायरनमेंट के लिए</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फ़ाइनल वार्निंग:</strong> Lynis सिर्फ़ ऑडिट टूल है — सिक्योरिटी गारंटी नहीं देता। 100% स्कोर भी कंप्लीट सिक्योरिटी नहीं है। डिफ़ेंस-इन-डेप्थ अप्रोच यूज़ करो — कई लेयर्स। रेगुलर अपडेट्स, मॉनिटरिंग, और इंसिडेंट रिस्पॉन्स प्लान भी ज़रूरी है। Lynis सिर्फ़ एक टूल है पूरी सिक्योरिटी स्ट्रैटेजी में — इसे अकेले पर डिपेंड मत करो। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत सिस्टम सिक्योरिटी की उपेक्षा भी अपराध हो सकता है।
      </div>
    </TutorialLayout>
  )
}
