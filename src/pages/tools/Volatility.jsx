import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Volatility() {
  return (
    <TutorialLayout
      title="volatility"
      subtitle="मेमोरी फोरेंसिक्स और RAM डंप एनालिसिस फ्रेमवर्क"
      icon="🧠"
      prev={{ to: '/tool/binwalk', label: 'binwalk' }}
      next={{ to: '/tool/msfvenom', label: 'msfvenom' }}
    >
      <h2>What is Volatility?</h2>
      <p>
        Volatility एक मेमोरी फोरेंसिक्स फ्रेमवर्क है जो RAM डंप्स को एनालाइज़ करता है। जब किसी कंप्रोमाइज़्ड सिस्टम का RAM डंप मिल जाए तो Volatility से रनिंग प्रोसेसेज़, नेटवर्क कनेक्शंस, ओपन फाइल्स, मालवेयर, पासवर्ड्स — सब निकाल सकते हो। इंसिडेंट रिस्पॉन्स और डिजिटल फोरेंसिक्स का एसेंशियल टूल है।
      </p>
      <p>
        Volatility मेमोरी की रॉ इमेज को पार्स करके ऑपरेटिंग सिस्टम की इंटरनल डेटा स्ट्रक्चर्स को रिकंस्ट्रक्ट करता है। यह Windows, Linux, macOS, और Android रैम डंप्स सपोर्ट करता है। इंसिडेंट रिस्पॉन्स में जब लाइव सिस्टम एनालाइज़ नहीं कर सकते, तब RAM डंप से पूरा सिस्टम स्टेट रिकंस्ट्रक्ट होता है।
      </p>
      <p>
        Volatility 2 (लेगेसी) और Volatility 3 (लेटेस्ट) दोनों वर्जन्स हैं। Volatility 3 Python 3 बेस्ड है और ज़्यादा प्लगइन्स सपोर्ट करता है। RAM डंप लेने के बाद Volatility से पूरा सिस्टम स्टेट रिकंस्ट्रक्ट कर सकते हो — प्रोसेसेज़, नेटवर्क, रजिस्ट्री, फाइल्स सब।
      </p>
      <p>
        Volatility मेमोरी फोरेंसिक्स का स्विस आर्मी नाइफ है — एक ही टूल से प्रोसेस एनालिसिस, नेटवर्क फोरेंसिक्स, मालवेयर डिटेक्शन, क्रेडेंशियल रिकवरी, रजिस्ट्री एनालिसिस, और टाइमलाइन रिकंस्ट्रक्शन सब कर सकते हो। इसलिए इंसिडेंट रिस्पॉन्स टीम्स, लॉ एनफोर्समेंट, और सिक्योरिटी रिसर्चर्स सभी इसे इस्तेमाल करते हैं।
      </p>
      <p>
        Memory forensics disk forensics से ज़्यादा powerful है क्योंकि memory में वो सब कुछ होता है जो disk पर नहीं मिलता — encrypted data decrypted state में, running processes, network connections, temporary files, passwords in plaintext। Anti-forensics tools disk artifacts मिटा सकते हैं, लेकिन memory artifacts ज़्यादा persistent होते हैं। Volatility इन्हीं artifacts को extract करता है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Volatility केवल अधिकृत फोरेंसिक इन्वेस्टिगेशन या इंसिडेंट रिस्पॉन्स में ही इस्तेमाल करें। बिना अनुमति के मेमोरी फोरेंसिक्स अवैध हो सकता है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत डेटा एक्सेस अपराध हो सकता है।
      </div>

      <h2>History of Volatility</h2>
      <p>
        Volatility को Aaron Walters ने 2007 में बनाया था। यह मूल रूप से एक रिसर्च प्रोजेक्ट था जो Windows XP के मेमोरी फोरेंसिक्स के लिए बनाया गया था। शुरू में यह सिर्फ Windows XP SP2 के लिए काम करता था, लेकिन समय के साथ Windows Vista, 7, 8, 10, 11, Linux, macOS, और Android सपोर्ट जोड़ा गया।
      </p>
      <p>
        Volatility Foundation ने इसे ओपन सोर्स किया और GitHub पर रिलीज़ किया। Volatility 2 सालों तक इंडस्ट्री स्टैंडर्ड रहा — लगभग हर फोरेंसिक्स ट्रेनिंग में यही सिखाया जाता था। 2019 में Volatility 3 रिलीज़ हुआ जो पूरी तरह Python 3 में रीराइट किया गया था।
      </p>
      <p>
        Volatility 3 में कई बड़े बदलाव आए — बेहतर परफॉर्मेंस, मॉड्यूलर आर्किटेक्चर, और ऑटोमैटिक सिंबल डाउनलोड। यह JSON-based configuration use करता है और plugins को independently install कर सकते हो। Volatility 3 GitHub पर 6,000+ stars के साथ सबसे popular memory forensics framework है।
      </p>

      <h2>How Volatility Works?</h2>
      <p>
        Volatility RAM डंप की रॉ बाइनरी इमेज को पार्स करके ऑपरेटिंग सिस्टम की इंटरनल डेटा स्ट्रक्चर्स रिकंस्ट्रक्ट करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">मेमोरी इमेज पार्सिंग:</strong> रॉ RAM डंप को पढ़कर OS-स्पेसिफिक डेटा स्ट्रक्चर्स ढूंढता है</li>
        <li><strong className="text-white">प्रोसेस रिकंस्ट्रक्शन:</strong> EPROCESS (Windows) या task_struct (Linux) से प्रोसेस लिस्ट बनाता है</li>
        <li><strong className="text-white">नेटवर्क स्टेट:</strong> TCP/IP स्टैक से एक्टिव कनेक्शंस निकालता है</li>
        <li><strong className="text-white">रजिस्ट्री पार्सिंग:</strong> मेमोरी में मौजूद रजिस्ट्री हाइव्स एक्सेस करता है</li>
        <li><strong className="text-white">फाइल सिस्टम:</strong> ओपन फाइल डिस्क्रिप्टर्स और कैश्ड फाइल्स रिकवर करता है</li>
        <li><strong className="text-white">मालवेयर डिटेक्शन:</strong> इंजेक्टेड कोड, हुक्स, और सस्पीशियस मॉड्यूल्स ढूंढता है</li>
        <li><strong className="text-white">क्रेडेंशियल रिकवरी:</strong> SAM, LSA, NTLM हैशेस मेमोरी से निकालता है</li>
        <li><strong className="text-white">टाइमलाइन रिकंस्ट्रक्शन:</strong> फाइल, प्रोसेस, और रजिस्ट्री एक्टिविटी की टाइमलाइन बनाता है</li>
      </ul>
      <p>
        Volatility का architecture plugin-based है — हर analysis task एक plugin है। Windows, Linux, macOS — हर OS के अलग plugins हैं। Volatility 3 में plugin discovery automatic है — बस plugin name दो और चल जाता है। Community plugins भी install कर सकते हो — GitHub पर सैकड़ों plugins मिलते हैं।
      </p>
      <p>
        Memory analysis करते समय symbol tables ज़रूरी हैं — ये OS-स्पेसिफिक data structures की definitions हैं। Volatility 3 में symbol tables automatically download हो जाते हैं। Volatility 2 में profiles manually download करने पड़ते हैं। सही profile select करना ज़रूरी है — गलत profile से incorrect results मिलेंगे।
      </p>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Volatility उपलब्ध है। Volatility 2 और 3 दोनों इंस्टॉल कर सकते हो। pip से install करना सबसे आसान है — pip3 install volatility3। Source से install करने पर latest features मिलते हैं। Windows, Linux, और macOS तीनों पर run करता है।
      </p>
      <p>
        Symbol tables ज़रूरी हैं — ये OS-specific data structures की definitions हैं। Volatility 3 में automatically download हो जाते हैं, लेकिन offline environment में manually download करने पड़ते हैं। GitHub volatilityfoundation/volatility3/wiki/Symbols से download करो। Windows, Linux, macOS — हर OS के अलग symbols हैं।
      </p>
      <CodeBlock
        title="Volatility इंस्टॉलेशन"
        code={`# Volatility 3 (Python pip):
pip3 install volatility3

# Volatility 2 (legacy):
pip2 install volatility

# apt से:
sudo apt install volatility3

# सोर्स से (Volatility 3):
git clone https://github.com/volatilityfoundation/volatility3.git
cd volatility3
pip3 install -r requirements.txt
python3 setup.py install

# सिंबोलिक फाइल्स डाउनलोड करें:
# https://github.com/volatilityfoundation/volatility3/wiki/Symbols
# या ऑटोमैटिक डाउनलोड हो जाते हैं

# वर्जन चेक:
vol3 --version
vol --version

# प्लगइन्स लिस्ट:
vol3 --help`}
      />

      <h2>Basic Usage</h2>
      <p>
        Volatility 3 का बेसिक इस्तेमाल बहुत आसान है — RAM डंप दो, प्लगइन दो।
      </p>
      <CodeBlock
        title="बेसिक कमांड्स"
        code={`# Volatility 3 — इमेज इन्फो:
vol3 -f memory.dump windows.info

# विंडोज़ प्रोसेस लिस्ट:
vol3 -f memory.dump windows.pslist

# प्रोसेस ट्री:
vol3 -f memory.dump windows.pstree

# नेटवर्क कनेक्शंस:
vol3 -f memory.dump windows.netscan

# फाइल स्कैन:
vol3 -f memory.dump windows.filescan

# रजिस्ट्री हाइव्स:
vol3 -f memory.dump windows.registry.hivelist

# Linux मेमोरी डंप:
vol3 -f memory.lime linux.pslist
vol3 -f memory.lime linux.bash

# macOS मेमोरी डंप:
vol3 -f memory.dmp mac.pslist`}
      />

      <h2>Important Plugins</h2>
      <p>
        Volatility में सैकड़ों plugins हैं, लेकिन कुछ बहुत ज़्यादा इस्तेमाल होते हैं। हर investigation में ये plugins ज़रूर run करो — pslist, netscan, malfind, hashdump, filescan, cmdline। ये basic artifacts cover करते हैं। Advanced investigation के लिए ssdt, callbacks, और hollowfind use करो।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Plugin</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">कब इस्तेमाल करें</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">windows.pslist</td><td className="py-2 px-3">रनिंग प्रोसेसेज़ की लिस्ट</td><td className="py-2 px-3">पहला कदम — क्या चल रहा था</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">windows.pstree</td><td className="py-2 px-3">प्रोसेस ट्री (पैरेंट-चाइल्ड)</td><td className="py-2 px-3">प्रोसेस रिलेशनशिप समझने के लिए</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">windows.netscan</td><td className="py-2 px-3">नेटवर्क कनेक्शंस</td><td className="py-2 px-3">C2 कम्युनिकेशन ढूंढने के लिए</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">windows.malfind</td><td className="py-2 px-3">इंजेक्टेड कोड डिटेक्शन</td><td className="py-2 px-3">मालवेयर डिटेक्शन के लिए</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">windows.hashdump</td><td className="py-2 px-3">SAM पासवर्ड हैशेस</td><td className="py-2 px-3">क्रेडेंशियल रिकवरी</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">windows.filescan</td><td className="py-2 px-3">ओपन फाइल्स स्कैन</td><td className="py-2 px-3">फाइल रिकवरी</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">windows.dlllist</td><td className="py-2 px-3">लोडेड DLLs</td><td className="py-2 px-3">सस्पीशियस DLLs ढूंढने के लिए</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">windows.cmdline</td><td className="py-2 px-3">कमांड लाइन आर्ग्यूमेंट्स</td><td className="py-2 px-3">अटैकर की कमांड्स देखने के लिए</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">windows.hollowfind</td><td className="py-2 px-3">हॉलो प्रोसेस डिटेक्शन</td><td className="py-2 px-3">प्रोसेस हॉलोइंग अटैक</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">windows.registry.hivelist</td><td className="py-2 px-3">रजिस्ट्री हाइव्स</td><td className="py-2 px-3">सिस्टम कॉन्फ़िगरेशन</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Process Analysis</h2>
      <p>
        प्रोसेस एनालिसिस से पता चलता है कि RAM डंप के समय सिस्टम पर क्या चल रहा था। यह incident response का सबसे पहला step है — running processes से immediately suspicious activity detect होती है। Unknown processes, unusual parent-child relationships, या high CPU usage — ये सब red flags हैं।
      </p>
      <p>
        Process tree analysis बहुत important है — malware अक्सर legitimate processes spawn करता है। जैसे svchost.exe या explorer.exe के under malicious process run हो सकता है। pstree से parent-child relationship दिखती है — अगर cmd.exe का parent winword.exe है, तो suspicious है (macro execution)। pslist और psscan compare करो — difference DKOM (hidden process) indicate करता है।
      </p>
      <CodeBlock
        title="प्रोसेस एनालिसिस"
        code={`# सभी प्रोसेसेज़:
vol3 -f memory.dump windows.pslist

# प्रोसेस ट्री (पैरेंट-चाइल्ड रिलेशन):
vol3 -f memory.dump windows.pstree

# हिडन प्रोसेसेज़ (DKOM डिटेक्शन):
vol3 -f memory.dump windows.psscan

# प्रोसेस एनवायरनमेंट वेरिएबल्स:
vol3 -f memory.dump windows.envars

# कमांड लाइन आर्ग्यूमेंट्स:
vol3 -f memory.dump windows.cmdline

# किसी स्पेसिफिक प्रोसेस की DLLs:
vol3 -f memory.dump windows.dlllist --pid 1234

# हैंडल्स (ओपन फाइल्स, रजिस्ट्री कीज़):
vol3 -f memory.dump windows.handles --pid 1234

# प्रोसेस मेमोरी डंप:
vol3 -f memory.dump windows.memmap --pid 1234 --dump

# pslist vs psscan:
# pslist = EPROCESS लिस्ट (नॉर्मल)
# psscan = पूरी मेमोरी स्कैन (हिडन प्रोसेसेज़ मिलते हैं)
# अगर दोनों में फ़र्क है → DKOM (Direct Kernel Object Manipulation) है`}
      />

      <h2>Network Analysis</h2>
      <p>
        नेटवर्क एनालिसिस से पता चलता है कि सिस्टम किससे कम्युनिकेट कर रहा था। Malware C2 (Command and Control) servers से communicate करता है — netscan से ये connections detect होते हैं। ESTABLISHED connections suspicious IPs पर — यह strong indicator है compromise का। Listening ports भी important हैं — backdoor ports detect हो सकते हैं।
      </p>
      <p>
        Network forensics में IP addresses, ports, और protocol information सब valuable है। अगर कोई internal system external IP से communicate कर रहा है non-standard port पर, तो investigate करो। DNS queries भी check करो — malware DNS tunneling use कर सकता है। Volatility का netscan plugin TCP और UDP दोनों connections दिखाता है।
      </p>
      <CodeBlock
        title="नेटवर्क कनेक्शंस"
        code={`# सभी नेटवर्क कनेक्शंस:
vol3 -f memory.dump windows.netscan

# TCP/UDP सॉकेट्स:
vol3 -f memory.dump windows.netstat

# DNS कैशे:
vol3 -f memory.dump windows.registry.certificates

# सस्पीशियस कनेक्शंस फ़िल्टर करें:
# बाहरी IPs जो कनेक्टेड हैं
vol3 -f memory.dump windows.netscan | grep ESTABLISHED

# C2 कम्युनिकेशन ढूंढें:
# अनजान IP रेंज से कनेक्शंस देखो
vol3 -f memory.dump windows.netscan | grep -v "127.0.0.1"

# सस्पीशियस पोर्ट्स:
vol3 -f memory.dump windows.netscan | grep ":443"
vol3 -f memory.dump windows.netscan | grep ":8080"
vol3 -f memory.dump windows.netscan | grep ":4444"`}
      />

      <h2>DLL and Handle Analysis</h2>
      <p>
        DLL एनालिसिस से पता चलता है कि कौन से लाइब्रेरीज़ लोडेड हैं — सस्पीशियस DLLs ढूंढ सकते हो। Malware अक्सर legitimate processes में malicious DLLs inject करता है। अगर कोई DLL unknown path से load हो रही है या non-standard system directory में है, तो वो suspicious है। Handle analysis से पता चलता है कि process ने कौन सी files, registry keys, या other objects open की हैं।
      </p>
      <p>
        SSDT (System Service Dispatch Table) analysis से kernel-level hooks detect होते हैं। Rootkits अक्सर SSDT modify करते हैं — system calls को redirect करते हैं। अगर SSDT entries non-standard addresses point कर रही हैं, तो kernel hooking हो रही है। यह advanced malware detection का powerful technique है।
      </p>
      <CodeBlock
        title="DLL Analysis"
        code={`# सभी DLLs (स्पेसिफिक प्रोसेस):
vol3 -f memory.dump windows.dlllist --pid 1234

# हैंडल्स (ओपन फाइल्स, रजिस्ट्री):
vol3 -f memory.dump windows.handles --pid 1234

# सस्पीशियस DLLs:
# अनजान पाथ से DLL
# नॉन-सिस्टम DLL
# इंजेक्टेड DLL

# ड्राइवर्स/मॉड्यूल्स:
vol3 -f memory.dump windows.modules

# SSDT (System Service Dispatch Table):
vol3 -f memory.dump windows.ssdt

# API हुक्स:
vol3 -f memory.dump windows.apihooks`}
      />

      <h2>Registry Analysis</h2>
      <p>
        रजिस्ट्री एनालिसिस से सिस्टम कॉन्फ़िगरेशन, इंस्टॉल्ड सॉफ़्टवेयर, और यूज़र एक्टिविटी पता चलती है।
      </p>
      <CodeBlock
        title="रजिस्ट्री एनालिसिस"
        code={`# रजिस्ट्री हाइव्स:
vol3 -f memory.dump windows.registry.hivelist

# SAM डेटाबेस (यूज़र अकाउंट्स):
vol3 -f memory.dump windows.registry.hashdump

# रजिस्ट्री की प्रिंट करें:
vol3 -f memory.dump windows.registry.printkey --key "Software\\Microsoft\\Windows\\CurrentVersion\\Run"

# ऑटोस्टार्ट एंट्रीज़ (पर्सिस्टेंस):
vol3 -f memory.dump windows.registry.printkey --key "Software\\Microsoft\\Windows\\CurrentVersion\\Run"

# यूज़र अकाउंट्स:
vol3 -f memory.dump windows.hashdump

# कैश्ड डोमेन क्रेडेंशियल्स:
vol3 -f memory.dump windows.cachedump

# LSA सीक्रेट्स:
vol3 -f memory.dump windows.lsadump

# इंस्टॉल्ड सॉफ़्टवेयर:
vol3 -f memory.dump windows.registry.printkey --key "Software\\Microsoft\\Windows\\CurrentVersion\\Uninstall"

# नेटवर्क कॉन्फ़िगरेशन:
vol3 -f memory.dump windows.registry.printkey --key "System\\CurrentControlSet\\Services\\Tcpip\\Parameters"`}
      />

      <h2>Malware Detection</h2>
      <p>
        Volatility मालवेयर डिटेक्शन के लिए बहुत पावरफुल है — मेमोरी में छिपा मालवेयर ढूंढ सकता हो।
      </p>
      <CodeBlock
        title="मालवेयर डिटेक्शन"
        code={`# इंजेक्टेड कोड (malfind):
vol3 -f memory.dump windows.malfind

# हॉलो प्रोसेस डिटेक्शन:
vol3 -f memory.dump windows.hollowfind

# API हुक्स:
vol3 -f memory.dump windows.apihooks

# कर्नेल मॉड्यूल्स/ड्राइवर्स:
vol3 -f memory.dump windows.modules

# SSDT हुक्स (सिस्टम सर्विस डिस्पैच टेबल):
vol3 -f memory.dump windows.ssdt

# कॉलबैक्स:
vol3 -f memory.dump windows.callbacks

# इमेजिस डंप करें (मालवेयर सैंपल):
vol3 -f memory.dump windows.pslist --pid PID --dump

# YARA रूल्स के साथ स्कैन:
vol3 -f memory.dump yarascan --yara-file rules.yar

# मालवेयर डिटेक्शन वर्कफ़्लो:
# 1. pslist — प्रोसेसेज़ देखो
# 2. pstree — पैरेंट-चाइल्ड रिलेशन
# 3. malfind — इंजेक्टेड कोड
# 4. netscan — C2 कनेक्शंस
# 5. ssdt — कर्नेल हुक्स
# 6. YARA — सिग्नेचर मैचिंग`}
      />

      <h2>Credential Recovery</h2>
      <p>
        Volatility से मेमोरी से पासवर्ड्स और क्रेडेंशियल्स रिकवर कर सकते हो। यह incident response में बहुत काम आता है — अटैकर ने किन accounts का access लिया, क्या passwords compromised हुए। SAM database, LSA secrets, NTLM hashes — सब मेमोरी से extract होते हैं।
      </p>
      <p>
        Credential recovery करते समय ethical boundaries follow करो — सिर्फ authorized investigation में use करो। Recovered hashes को offline crack करने के लिए hashcat या john use करो। LSASS process memory dump करके mimikatz जैसे tools से भी credentials extract कर सकते हो।
      </p>
      <CodeBlock
        title="क्रेडेंशियल रिकवरी"
        code={`# SAM पासवर्ड हैशेस:
vol3 -f memory.dump windows.hashdump

# NTLM हैशेस:
vol3 -f memory.dump windows.registry.hashdump

# LSA सीक्रेट्स:
vol3 -f memory.dump windows.lsadump

# कैश्ड क्रेडेंशियल्स:
vol3 -f memory.dump windows.cachedump

# LSASS प्रोसेस डंप:
vol3 -f memory.dump windows.pslist | grep lsass
vol3 -f memory.dump windows.memmap --pid LSASS_PID --dump

# पासवर्ड क्रैकिंग:
# hashcat -m 1000 ntlm_hashes.txt rockyou.txt
# john --format=nt ntlm_hashes.txt

# चेतावनी: क्रेडेंशियल रिकवरी केवल अधिकृत फोरेंसिक्स में`}
      />

      <h2>Memory Dump Acquisition</h2>
      <p>
        मेमोरी डंप लेना फोरेंसिक्स का पहला स्टेप है। सही तरीके से डंप लेना बहुत ज़रूरी है।
      </p>
      <CodeBlock
        title="RAM डंप लें"
        code={`# Linux — LiME (Linux Memory Extractor):
sudo insmod lime.ko "path=/tmp/memory.lime format=lime"

# Linux — AVML (Microsoft):
sudo ./avml memory.lime

# Linux — /dev/mem से (raw):
sudo dd if=/dev/mem of=memory.dump bs=1M count=1024

# Windows — WinPmem:
winpmem_mini_x64.exe memory.raw

# Windows — DumpIt:
# DumpIt.exe रन करो — एक क्लिक में डंप

# Windows — FTK Imager:
# File > Capture Memory > आउटपुट पाथ सेट करो

# macOS:
sudo pmemd -o memory.dmp

# Android (rooted):
# LiME Android पर भी काम करता है
adb push lime.ko /data/local/tmp/
adb shell "su -c 'insmod /data/local/tmp/lime.ko path=/sdcard/memory.lime format=lime'"

# Volatility फॉर्मेट: raw सबसे अच्छा है
# LiME फॉर्मेट भी सपोर्टेड`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Volatility को स्क्रिप्ट करके ऑटोमैटिक फोरेंसिक एनालिसिस कर सकते हो। एक Python script लिखो जो सभी important plugins automatically run करे और results organize करे। Incident response teams के लिए यह ज़रूरी है — हर बार manually commands run करना time-consuming है।
      </p>
      <p>
        Automation scripts में error handling ज़रूर रखो — कुछ plugins corrupt dumps पर fail हो सकते हैं। Output parsing करके suspicious findings automatically flag करो — जैसे hidden processes, unusual network connections, या injected code। Alert system integrate करो — अगर कुछ suspicious मिले तो immediately notify हो।
      </p>
      <CodeBlock
        title="Python स्क्रिप्ट"
        code={`#!/usr/bin/env python3
# ऑटोमैटिक मेमोरी एनालिसिस

import subprocess
import sys

dump_file = sys.argv[1]
output_dir = "/tmp/forensics_output"

plugins = [
    "windows.pslist",
    "windows.pstree",
    "windows.netscan",
    "windows.cmdline",
    "windows.dlllist",
    "windows.malfind",
    "windows.hashdump",
    "windows.filescan",
    "windows.registry.hivelist",
    "windows.ssdt",
    "windows.callbacks",
]

for plugin in plugins:
    print(f"[+] रनिंग: {plugin}")
    cmd = f"vol3 -f {dump_file} {plugin}"
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    outfile = f"{output_dir}/{plugin.replace('.', '_')}.txt"
    with open(outfile, 'w') as f:
        f.write(result.stdout)
    print(f"    सेव्ड: {outfile}")`}
      />

      <CodeBlock
        title="बैश स्क्रिप्ट — क्विक ट्राइज"
        code={`#!/bin/bash
# क्विक फोरेंसिक ट्राइज

DUMP="$1"
echo "[+] मेमोरी एनालिसिस शुरू: $DUMP"

# इमेज इन्फो:
echo "[+] इमेज इन्फो..."
vol3 -f "$DUMP" windows.info

# प्रोसेसेज़:
echo "[+] प्रोसेसेज़..."
vol3 -f "$DUMP" windows.pslist > processes.txt

# नेटवर्क:
echo "[+] नेटवर्क कनेक्शंस..."
vol3 -f "$DUMP" windows.netscan > network.txt

# सस्पीशियस प्रोसेसेज़:
echo "[+] malfind..."
vol3 -f "$DUMP" windows.malfind > malfind.txt

# क्रेडेंशियल्स:
echo "[+] हैशेस..."
vol3 -f "$DUMP" windows.hashdump > hashes.txt

# SSDT हुक्स:
echo "[+] SSDT..."
vol3 -f "$DUMP" windows.ssdt > ssdt.txt

# YARA स्कैन:
echo "[+] YARA..."
vol3 -f "$DUMP" yarascan --yara-file rules.yar > yara.txt

echo "[+] एनालिसिस कंप्लीट!"`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f file</td><td className="py-2 px-3">मेमोरी डंप फाइल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--pid PID</td><td className="py-2 px-3">स्पेसिफिक प्रोसेस ID</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--dump</td><td className="py-2 px-3">मेमोरी/फाइल डंप करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--yara-file</td><td className="py-2 px-3">YARA रूल्स फाइल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--key</td><td className="py-2 px-3">रजिस्ट्री की</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--output</td><td className="py-2 px-3">आउटपुट डायरेक्ट्री</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">प्रोसेस ID</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o</td><td className="py-2 px-3">आउटपुट फाइल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">वर्बोज़ आउटपुट</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-h</td><td className="py-2 px-3">सहायता</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Volatility 2 vs Volatility 3</h2>
      <p>
        Volatility 2 और 3 दोनों इस्तेमाल होते हैं, लेकिन Volatility 3 नया standard है। Volatility 2 Python 2 पर based है जो अब deprecated है। Volatility 3 Python 3 पर based है और actively develop हो रहा है। कुछ पुराने plugins सिर्फ Volatility 2 में available हैं, इसलिए दोनों install रखना बेहतर है।
      </p>
      <p>
        Volatility 3 में symbol tables automatically download होते हैं — Volatility 2 में manually profiles download करने पड़ते थे। Volatility 3 की speed भी बेहतर है — multi-threading support है। नए features सिर्फ Volatility 3 में आते हैं। अगर नया project शुरू कर रहे हो तो Volatility 3 से शुरू करो।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Volatility 2</th>
              <th className="text-left py-2 px-3 text-neon-green">Volatility 3</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Python</td><td className="py-2 px-3">Python 2</td><td className="py-2 px-3">Python 3</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्पीड</td><td className="py-2 px-3">मीडियम</td><td className="py-2 px-3">तेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">प्लगइन्स</td><td className="py-2 px-3">ज़्यादा (लेगेसी)</td><td className="py-2 px-3">बढ़ रहे हैं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">सिंबल्स</td><td className="py-2 px-3">बिल्ट-इन</td><td className="py-2 px-3">डाउनलोड करने पड़ते हैं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कमांड</td><td className="py-2 px-3">vol -f dump plugin</td><td className="py-2 px-3">vol3 -f dump plugin</td></tr>
            <tr><td className="py-2 px-3 text-white">स्टेटस</td><td className="py-2 px-3">मेंटेनेंस मोड</td><td className="py-2 px-3">एक्टिव डेवलपमेंट</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Volatility vs Other Tools</h2>
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Volatility</td><td className="py-2 px-3">मेमोरी एनालिसिस</td><td className="py-2 px-3">सबसे कंप्लीट फ्रेमवर्क</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Rekall</td><td className="py-2 px-3">मेमोरी एनालिसिस</td><td className="py-2 px-3">Google का टूल, अब मेंटेन नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">LiME</td><td className="py-2 px-3">Linux मेमोरी एक्वीज़िशन</td><td className="py-2 px-3">Linux RAM डंप का स्टैंडर्ड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">WinPmem</td><td className="py-2 px-3">Windows मेमोरी एक्वीज़िशन</td><td className="py-2 px-3">Windows RAM डंप</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Autopsy</td><td className="py-2 px-3">डिजिटल फोरेंसिक्स</td><td className="py-2 px-3">GUI बेस्ड, फुल फोरेंसिक्स सूट</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'मेमोरी डंप पार्स नहीं हो रहा', a: 'सही OS प्रोफाइल/सिंबल्स चेक करो। Volatility 3 में सिंबलिक फाइल्स डाउनलोड करने पड़ते हैं। windows.info से डिटेक्ट करो।' },
          { q: 'प्रोसेसेज़ नहीं दिख रहे', a: 'डंप करप्ट हो सकता है। LiME से सही तरीके से डंप लो। डंप साइज़ RAM साइज़ के बराबर होना चाहिए।' },
          { q: 'Volatility 2 vs 3 — कौन सा यूज़ करूं?', a: 'Volatility 3 यूज़ करो (Python 3 सपोर्ट)। लेकिन कुछ पुराने प्लगइन्स Volatility 2 में ही हैं।' },
          { q: 'बहुत स्लो है', a: 'बड़े डंप्स (8GB+ RAM) में टाइम लगता है। स्पेसिफिक प्लगइन रन करो, सब एक साथ मत चलाओ।' },
          { q: 'Linux डंप काम नहीं कर रहा', a: 'LiME फॉर्मेट में डंप लो। कर्नल वर्जन का सही प्रोफाइल यूज़ करो। linux.banner से चेक करो।' },
          { q: 'मालवेयर नहीं मिल रहा', a: 'malfind से इंजेक्टेड कोड देखो। YARA रूल्स से स्कैन करो। SSDT और callbacks चेक करो।' },
          { q: 'सिंबल्स डाउनलोड नहीं हो रहे', a: 'इंटरनेट कनेक्शन चेक करो। मैनुअली डाउनलोड करो: GitHub volatilityfoundation/volatility3/wiki/Symbols' },
          { q: 'करप्ट डंप से कैसे एनालाइज़ करूं?', a: '--ignore-errors फ्लैग यूज़ करो। partial डंप से भी कुछ जानकारी मिल सकती है।' },
          { q: 'Windows 11 का डंप काम नहीं कर रहा', a: 'Windows 11 के लिए latest Volatility 3 use करो। Symbol tables update करो। VBS enable होने पर कुछ structures बदल जाते हैं।' },
          { q: 'बहुत बड़ा डंप (32GB+) handle नहीं हो रहा', a: 'RAM limited system पर large dumps process करना मुश्किल है। Specific plugin run करो — पूरा dump load मत करो। SSD storage use करो।' },
          { q: 'Plugin not found error आ रहा है', a: 'Volatility 2 और 3 के plugin names अलग हैं। --plugins फ्लैग से custom plugin path दो। Community plugins separately install करने पड़ते हैं।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Volatility का इस्तेमाल डिफेंडर्स और अटैकर्स दोनों कर सकते हैं। Defenders इसे incident response में use करते हैं — malware detect करने, compromised systems analyze करने, और attack timeline reconstruct करने के लिए। Attackers इसे memory seep secrets extract करने, passwords dump करने, और forensic evidence hide करने के लिए use कर सकते हैं।
      </p>
      <p>
        Memory forensics से बचाव के लिए memory encryption, secure boot, और hardware-based security use करो। Windows में VBS (Virtualization-Based Security) और Credential Guard LSASS protect करते हैं। Cold boot attacks से बचने के लिए physical access control ज़रूरी है। System shutdown पर RAM automatically clear हो — यह ensure करो।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">मेमोरी एन्क्रिप्शन:</strong> BitLocker/LUKS से डिस्क एन्क्रिप्टेड रखो — मेमोरी में कीज़ हो सकती हैं</li>
        <li><strong className="text-white">कोल्ड बूट अटैक:</strong> RAM को फ्रीज़ करके डंप लिया जा सकता है — फिज़िकल एक्सेस कंट्रोल</li>
        <li><strong className="text-white">मेमोरी क्लियरिंग:</strong> सिस्टम शटडाउन पर RAM क्लियर करो</li>
        <li><strong className="text-white">SIEM मॉनिटरिंग:</strong> अनऑथराइज़्ड डंप टूल्स डिटेक्ट करो</li>
        <li><strong className="text-white">EDR:</strong> Endpoint Detection and Response से मेमोरी प्रोटेक्शन</li>
        <li><strong className="text-white">VBS:</strong> Virtualization-Based Security से कर्नेल प्रोटेक्शन</li>
        <li><strong className="text-white">Credential Guard:</strong> Windows में LSASS प्रोटेक्शन</li>
        <li><strong className="text-white">ASLR:</strong> Address Space Layout Randomization</li>
        <li><strong className="text-white">प्रोसेस मॉनिटरिंग:</strong> प्रोसेस इंजेक्शन डिटेक्ट करो</li>
        <li><strong className="text-white">फिज़िकल एक्सेस:</strong> RAM डंप के लिए फिज़िकल एक्सेस चाहिए</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        मेमोरी फोरेंसिक्स सीखने के लिए सेफ लैब बनाओ। VirtualBox या VMware में Windows और Linux VMs बनाओ। टेस्ट मेमोरी डंप्स ऑनलाइन उपलब्ध हैं — Volatility Foundation की वेबसाइट से डाउनलोड करो। शुरुआत में नॉर्मल डंप्स से प्रैक्टिस करो, फिर मालवेयर इंफेक्टेड डंप्स ट्राई करो।
      </p>
      <p>
        लैब में EICAR test file इस्तेमाल करो — यह harmless malware है जो antivirus को trigger करता है लेकिन actual damage नहीं करता। इससे Volatility का malware detection workflow सीख सकते हो। बाद में real malware samples (controlled environment में) से practice करो। REMnux distribution memory forensics के लिए specialized है — सब tools pre-installed मिलते हैं।
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# वर्चुअल मशीन बनाओ (VirtualBox):
# Windows 10/11 VM बनाओ
# 4GB RAM एलोकेट करो

# टेस्ट मेमोरी डंप डाउनलोड करो:
# https://github.com/volatilityfoundation/volatility/wiki/Memory-Samples
# https://cfreds.nist.gov/all/DFRIDS

# LiME से Linux डंप:
git clone https://github.com/504ensicsLabs/LiME.git
cd LiME/src
make
sudo insmod lime.ko "path=/tmp/test.lime format=lime"

# Volatility से एनालाइज़ करो:
vol3 -f test.lime linux.pslist

# ग्रेडुअली एडवांस्ड:
# 1. नॉर्मल सिस्टम का डंप
# 2. मालवेयर इंफेक्टेड सिस्टम
# 3. रूटकिट लगा हुआ सिस्टम
# 4. मल्टी-OS एनालिसिस`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        Volatility के advanced features बहुत powerful हैं। YARA scanning से custom malware detection कर सकते हो। Process hollowing, DLL injection, और rootkit detection — ये सब Volatility के साथ possible हैं। SSDT hooks, IDT hooks, और inline hooks — ये सब kernel-level malware techniques हैं जो Volatility detect कर सकता है।
      </p>
      <p>
        Advanced users के लिए Volatility में custom plugin development का option है। Python में plugin लिखकर कोई भी analysis task automate कर सकते हो। Community plugins GitHub पर available हैं — नए malware patterns, crypto wallet detection, browser artifact extraction — सब मिलता है।
      </p>
      <CodeBlock
        title="Advanced Forensics"
        code={`# YARA स्कैनिंग:
vol3 -f memory.dump yarascan --yara-file malware_rules.yar

# टाइमलाइन एनालिसिस:
vol3 -f memory.dump timeliner

# फाइल रिकवरी:
vol3 -f memory.dump windows.dumpfiles --pid PID

# प्रोसेस मेमोरी डंप:
vol3 -f memory.dump windows.memmap --pid 1234 --dump

# कर्नेल मॉड्यूल्स:
vol3 -f memory.dump windows.modules

# SSDT (System Service Dispatch Table):
vol3 -f memory.dump windows.ssdt

# इमेज इन्फो वेरिफाई:
vol3 -f memory.dump windows.info | grep "Kernel base"

# लिनक्स बैश हिस्ट्री:
vol3 -f memory.lime linux.bash

# macOS प्रोसेसेज़:
vol3 -f memory.dmp mac.pslist

# कस्टम YARA रूल:
rule malware_detection {
    strings:
        $s1 = "cmd.exe" nocase
        $s2 = "powershell" nocase
        $s3 = "mimikatz"
    condition:
        any of them
}`}
      />

      <h2>Memory Forensics Methodology</h2>
      <p>
        Memory forensics एक systematic process है — random approach से काम नहीं चलता। सबसे पहले image info चेक करें (windows.info), फिर process list (pslist), फिर network connections (netscan), फिर suspicious processes (malfind), फिर file system artifacts (filescan), और finally timeline बनाएं। हर step का output save करें।
      </p>
      <p>
        Memory forensics की सबसे बड़ी ताकत यह है कि यह disk forensics से ज़्यादा artifacts दिखाता है। Disk पर encrypted malware नहीं मिलता, लेकिन memory में decrypted state में होता है। Anti-forensics techniques (file deletion, log clearing) disk पर काम करती हैं, लेकिन memory में artifacts रहते हैं। इसलिए memory forensics modern incident response का core है।
      </p>
      <p>
        Memory analysis करते समय chain of custody maintain करें — किसने डंप लिया, कब लिया, कैसे store किया। Court में evidence acceptable होने के लिए यह ज़रूरी है। SHA256 hash, timestamps, analyst notes — सब document करें। Write-blocker से original evidence protect करें।
      </p>

      <CodeBlock
        title="Methodology Workflow"
        code={`# Step 1: Image Info
vol3 -f memory.dump windows.info

# Step 2: Process Listing (3 methods)
vol3 -f memory.dump windows.pslist     # Active processes
vol3 -f memory.dump windows.psscan      # All processes (hidden too)
vol3 -f memory.dump windows.pstree      # Process tree

# Step 3: Network Connections
vol3 -f memory.dump windows.netscan

# Step 4: Malware Detection
vol3 -f memory.dump windows.malfind

# Step 5: Command Lines
vol3 -f memory.dump windows.cmdline

# Step 6: DLLs
vol3 -f memory.dump windows.dlllist

# Step 7: File System
vol3 -f memory.dump windows.filescan

# Step 8: Registry
vol3 -f memory.dump windows.registry.hivelist
vol3 -f memory.dump windows.hashdump

# Step 9: Timeline
vol3 -f memory.dump timeliner`}
      />

      <h2>Timeline Analysis</h2>
      <p>
        Timeline analysis Volatility का सबसे पावरफुल फीचर है — यह सिस्टम की पूरी एक्टिविटी को टाइमलाइन में दिखाता है। जब कोई इंसिडेंट होता है तो टाइमलाइन से पता चलता है कि अटैकर ने कब क्या किया — कौन सी फाइल बनाई, कौन सा प्रोसेस चलाया, नेटवर्क कनेक्शन किया। यह डिजिटल फोरेंसिक्स में सबसे ज़रूरी स्टेप है।
      </p>
      <p>
        टाइमलाइन बनाने के लिए timeliner प्लगइन इस्तेमाल करें। यह रजिस्ट्री, फाइल सिस्टम, प्रोसेस, और नेटवर्क एक्टिविटी — सबको एक टाइमलाइन में मर्ज करता है। आउटपुट CSV या body file फॉरमैट में आता है जिसे आप Plaso/log2timeline में इम्पोर्ट कर सकते हैं।
      </p>

      <CodeBlock
        title="Timeline Analysis"
        code={`# Volatility 3 — Timeliner:
vol3 -f memory.dump timeliner

# Output CSV में सेव:
vol3 -f memory.dump timeliner > timeline.csv

# Specific artifacts:
vol3 -f memory.dump windows.filescan > filescan.txt
vol3 -f memory.dump windows.netscan > netscan.txt

# टाइमलाइन एनालिसिस के लिए Plaso:
log2timeline.py timeline.plaso memory.dump
psort.py timeline.plaso > timeline.csv

# महत्वपूर्ण टाइमस्टैम्प्स:
# - फाइल creation/modification times
# - प्रोसेस start times
# - नेटवर्क connection times
# - रजिस्ट्री modification times
# - User login/logout times`}
      />

      <h2>Browser Forensics</h2>
      <p>
        Volatility से ब्राउज़र हिस्ट्री और ओपन टैब्स भी निकाल सकते हो। अटैकर ने कौन सी वेबसाइट विज़िट की, कौन सी फाइल डाउनलोड की — सब मेमोरी में मिलता है। ब्राउज़र प्रोसेस की मेमोरी डंप करके URL और कुकीज़ एक्स्ट्रैक्ट कर सकते हो।
      </p>
      <p>
        Chrome, Firefox, Edge — सबके प्रोसेस मेमोरी में URL strings होती हैं। strings कमांड से भी URL निकाल सकते हो, लेकिन Volatility के साथ ज़्यादा accurate results मिलते हैं। ब्राउज़र का SQLite database भी मेमोरी में मिल सकता है — उसमें पूरी हिस्ट्री होती है।
      </p>
      <p>
        Browser forensics insider threat investigations में बहुत काम आता है। Employee ने कौन सी साइट्स विज़िट कीं, क्या डाउनलोड किया, क्या अपलोड किया — सब मेमोरी में मिलता है। Incognito mode में भी browser process memory में URLs होते हैं। यह disk forensics में नहीं मिलता क्योंकि incognito mode disk पर save नहीं करता।
      </p>

      <CodeBlock
        title="Browser Forensics"
        code={`# ब्राउज़र प्रोसेस ढूंढें:
vol3 -f memory.dump windows.pslist | grep -i "chrome|firefox|edge"

# ब्राउज़र प्रोसेस की मेमोरी डंप:
vol3 -f memory.dump windows.memdump --pid 1234 --dump

# URLs निकालें:
strings pid.1234.dmp | grep -i "http" | sort -u

# Chrome URLs:
strings pid.1234.dmp | grep -i "chrome://\|google.com\|youtube.com"

# Downloads ढूंढें:
strings pid.1234.dmp | grep -i "\.exe\|\.zip\|\.pdf\|\.doc"

# Firefox places.sqlite मेमोरी में:
strings pid.5678.dmp | grep -i "moz_places\|moz_historyvisits"

# कुकीज़:
strings pid.1234.dmp | grep -i "cookie\|session"`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        एक कंपनी में ransomware अटैक हुआ — Volatility से RAM डंप एनालाइज़ किया। malfind से 3 इंजेक्टेड प्रोसेसेज़ मिलीं — explorer.exe, svchost.exe, और rundll32.exe। netscan से C2 सर्वर का IP मिला (रशियन सर्वर)। handles से encrypted फाइल्स की लिस्ट मिली। टाइमलाइन से पता चला कि अटैकर ने 3 दिन पहले initial access किया था phishing email से।
      </p>
      <p>
        एक बैंक में insider threat का केस था — एक employee ने customer data चुराया। Volatility से browser history निकाली — employee ने USB file transfer साइट्स विज़िट की थीं। फाइल सिस्टम से USB डिवाइस का serial number मिला। रजिस्ट्री से USB device history मिली — बिल्कुल clear evidence। कोर्ट में Volatility की रिपोर्ट evidence के रूप में स्वीकार हुई।
      </p>
      <p>
        एक university में crypto mining malware मिला — Volatility से प्रोसेस एनालिसिस किया। pslist में normal दिख रहा था, लेकिन psscan से hidden प्रोसेस मिला (DKOM technique)। CPU usage high था। मालवेयर XMRig miner था जो university के servers पर mining कर रहा था। Volatility के बिना यह malware detect नहीं होता।
      </p>

      <h2>Reporting and Output Analysis</h2>
      <p>
        Volatility के आउटपुट को रिपोर्ट में कन्वर्ट करना ज़रूरी है — खासकर कोर्ट केस या compliance audit के लिए। हर plugin का आउटपुट अलग फाइल में सेव करें। टाइमलाइन CSV बनाएं। स्क्रीनशॉट लें। hash values document करें — evidence integrity के लिए।
      </p>
      <p>
        रिपोर्ट में ये चीज़ें ज़रूर शामिल करें: evidence acquisition method (कैसे डंप लिया), analysis tools used (Volatility version, plugins), findings (क्या मिला), timeline (कब क्या हुआ), और recommendations (क्या करना चाहिए)। SHA256 hash डंप फाइल का ज़रूर लिखें — evidence integrity prove करने के लिए।
      </p>

      <CodeBlock
        title="Reporting Commands"
        code={`# सभी plugin outputs सेव करें:
vol3 -f memory.dump windows.pslist > report/pslist.txt
vol3 -f memory.dump windows.netscan > report/netscan.txt
vol3 -f memory.dump windows.filescan > report/filescan.txt
vol3 -f memory.dump windows.hashdump > report/hashdump.txt
vol3 -f memory.dump windows.malfind > report/malfind.txt
vol3 -f memory.dump windows.cmdline > report/cmdline.txt

# Dump फाइल का hash:
sha256sum memory.dump > memory.dump.sha256

# Evidence chain:
echo "=== Evidence Report ===" > report/summary.txt
echo "Date: $(date)" >> report/summary.txt
echo "Analyst: Name" >> report/summary.txt
echo "SHA256: $(sha256sum memory.dump | cut -d' ' -f1)" >> report/summary.txt
echo "Tool: Volatility 3.x" >> report/summary.txt

# HTML रिपोर्ट (Volatility 3 plugin):
vol3 -f memory.dump --renderer=json timeliner > timeline.json`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Volatility फ्री है?', a: 'हाँ, पूरी तरह फ्री और ओपन सोर्स। GPL v2 लाइसेंस। कमर्शियल फोरेंसिक्स में भी यूज़ होता है।' },
          { q: 'Volatility 2 या 3 — कौन सा यूज़ करूं?', a: 'Volatility 3 यूज़ करो — नया है, Python 3 सपोर्ट, बेहतर परफॉर्मेंस। पुराने प्लगइन्स के लिए Volatility 2 रखो।' },
          { q: 'RAM डंप कैसे लूं?', a: 'Linux: LiME/AVML। Windows: WinPmem/DumpIt। macOS: pmemd। सबसे ज़रूरी है कि डंप पूरा हो — incomplete dump corrupt data दिखा सकता है।' },
          { q: 'क्या लाइव सिस्टम पर चला सकता हूं?', a: 'हाँ, लेकिन रिकमेंडेड नहीं — लाइव सिस्टम बदल सकता है। ऑफलाइन एनालिसिस बेहतर है। Evidence integrity के लिए write-blocker इस्तेमाल करें।' },
          { q: 'कितना बड़ा डंप एनालाइज़ कर सकता है?', a: 'RAM साइज़ जितना बड़ा। 16GB RAM = ~16GB डंप। टाइम लगेगा लेकिन काम करेगा। SSD पर सेव करो — HDD से slow read होगा।' },
          { q: 'Android मेमोरी एनालाइज़ कर सकता है?', a: 'Volatility 3 में लिमिटेड Android सपोर्ट है। LiME Android पर भी काम करता है (rooted device)। Custom ROM पर बेहतर काम करता है।' },
          { q: 'malfind क्या बताता है?', a: 'malfind इंजेक्टेड कोड ढूंढता है — प्रोसेस मेमोरी में PAGE_EXECUTE_READWRITE प्रोटेक्शन वाले सेक्शंस। यह मालवेयर का स्ट्रॉन्ग इंडिकेटर है।' },
          { q: 'DKOM क्या है?', a: 'Direct Kernel Object Manipulation — अटैकर EPROCESS लिंक्ड लिस्ट से प्रोसेस हटा देता है। pslist में नहीं दिखता, लेकिन psscan में मिलता है।' },
          { q: 'Volatility plugins कैसे बनाएं?', a: 'Python में लिखते हैं — VolatilityPluginInterface inherit करो। plugins/ directory में रखो। Community plugins GitHub पर मिलते हैं।' },
          { q: 'Evidence integrity कैसे maintain करें?', a: 'डंप लेते समय SHA256 hash बनाओ। Write-blocker इस्तेमाल करो। Original dump की copy पर काम करो। हर step document करो।' },
          { q: 'Memory compression से क्या problem होती है?', a: 'Windows memory compression से कुछ artifacts compressed हो सकते हैं। Volatility 3 इसे handle करता है, लेकिन Volatility 2 में problem हो सकती है।' },
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
              <th className="text-left py-2 px-3 text-neon-green">Function</th>
              <th className="text-left py-2 px-3 text-neon-green">Speciality</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Rekall</td><td className="py-2 px-3">Memory Analysis</td><td className="py-2 px-3">Google का, अब मेंटेन नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">LiME</td><td className="py-2 px-3">Linux Memory Acquisition</td><td className="py-2 px-3">Linux RAM डंप का स्टैंडर्ड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">WinPmem</td><td className="py-2 px-3">Windows Memory Acquisition</td><td className="py-2 px-3">Windows RAM डंप</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">FTK Imager</td><td className="py-2 px-3">Image Acquisition</td><td className="py-2 px-3">GUI बेस्ड, डिस्क + RAM</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Autopsy</td><td className="py-2 px-3">Digital Forensics</td><td className="py-2 px-3">फुल फोरेंसिक्स सूट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Redline</td><td className="py-2 px-3">Memory Analysis</td><td className="py-2 px-3">FireEye का, GUI-based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">AVML</td><td className="py-2 px-3">Linux Memory Acquisition</td><td className="py-2 px-3">Microsoft का, lightweight</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">DumpIt</td><td className="py-2 px-3">Windows Memory Acquisition</td><td className="py-2 px-3">One-click RAM dump</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Volatility vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">Volatility</th>
              <th className="text-left py-2 px-3 text-neon-green">Rekall</th>
              <th className="text-left py-2 px-3 text-neon-green">Redline</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600">
              <td className="py-2 px-3 text-white font-mono">OS Support</td>
              <td className="py-2 px-3">Win/Linux/macOS</td>
              <td className="py-2 px-3">Windows mainly</td>
              <td className="py-2 px-3">Windows mainly</td>
            </tr>
            <tr className="border-b border-dark-600">
              <td className="py-2 px-3 text-white font-mono">Language</td>
              <td className="py-2 px-3">Python 3</td>
              <td className="py-2 px-3">Python 2</td>
              <td className="py-2 px-3">Java</td>
            </tr>
            <tr className="border-b border-dark-600">
              <td className="py-2 px-3 text-white font-mono">Plugins</td>
              <td className="py-2 px-3">100+</td>
              <td className="py-2 px-3">50+</td>
              <td className="py-2 px-3">Built-in</td>
            </tr>
            <tr className="border-b border-dark-600">
              <td className="py-2 px-3 text-white font-mono">License</td>
              <td className="py-2 px-3">GPL v2 (Free)</td>
              <td className="py-2 px-3">Apache 2 (Free)</td>
              <td className="py-2 px-3">Commercial</td>
            </tr>
            <tr className="border-b border-dark-600">
              <td className="py-2 px-3 text-white font-mono">GUI</td>
              <td className="py-2 px-3">CLI only</td>
              <td className="py-2 px-3">CLI + Web UI</td>
              <td className="py-2 px-3">GUI</td>
            </tr>
            <tr>
              <td className="py-2 px-3 text-white font-mono">Status</td>
              <td className="py-2 px-3">Active</td>
              <td className="py-2 px-3">Stale</td>
              <td className="py-2 px-3">Active</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>इंसिडेंट रिस्पॉन्स में सबसे पहले RAM डंप लो — बाद में लेने से आर्टिफैक्ट्स खो सकते हैं</li>
          <li>Volatility + YARA रूल्स कॉम्बो से मालवेयर डिटेक्शन बहुत तेज़ होता है</li>
          <li>pslist और psscan कंपेयर करो — अगर फ़र्क है तो हिडन प्रोसेस है (DKOM)</li>
          <li>netscan से C2 सर्वर पता चलता है — ESTABLISHED कनेक्शंस देखो</li>
          <li>malfind से इंजेक्टेड कोड मिलता है — PAGE_EXECUTE_READWRITE सस्पीशियस है</li>
          <li>hashdump से SAM हैशेस निकालकर offline crack कर सकते हो</li>
          <li>LiME से Linux डंप लो — /dev/mem से डंप reliable नहीं है</li>
          <li>बड़े डंप्स के लिए specific plugins रन करो — सब एक साथ मत चलाओ</li>
          <li>डंप लेते समय SHA256 hash बनाओ — evidence integrity के लिए ज़रूरी है</li>
          <li>Write-blocker इस्तेमाल करो — original evidence modify नहीं होना चाहिए</li>
          <li>टाइमलाइन analysis सबसे पहले करो — पूरा picture मिलता है</li>
          <li>Community plugins check करो — नए malware patterns के लिए YARA rules मिलते हैं</li>
          <li>सभी फाइंडिंग्स को क्रॉस-वेरिफाई करो — एक प्लगइन से कन्फर्मेशन काफी नहीं</li>
          <li>रिपोर्ट में टाइमस्टैम्प्स UTC में लिखो — कन्फ्यूजन से बचोगे</li>
          <li>एविडेंस चेन ऑफ कस्टडी मेंटेन करो — कोर्ट में एक्सेप्ट होगा</li>
          <li>रेगुलरली Volatility अपडेट करो — नए प्लगइन्स और फीचर्स जुड़ते रहते हैं</li>
        </ul>
      </div>

      <h2>Common Mistakes</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'गलत प्रोफ़ाइल यूज़ करना', a: 'प्रोफ़ाइल OS वर्जन से मैच होनी चाहिए। imageinfo से प्रोफ़ाइल डिटेक्ट करो। गलत प्रोफ़ाइल से गलत रिजल्ट्स आएंगे।' },
          { q: 'डंप कैप्चर करते समय एरर्स', a: 'डंप कैप्चर करते समय सिस्टम रिसोर्सेज़ चेक करो। डिस्क स्पेस, मेमोरी, और परमिशन्स सही होनी चाहिए।' },
          { q: 'प्लगइन्स नहीं चल रहे', a: 'प्लगइन पाथ चेक करो। Volatility 2 और 3 के प्लगइन्स अलग हैं। सही वर्जन यूज़ करो।' },
          { q: 'मेमोरी डंप बहुत बड़ा है', a: 'कंप्रेशन यूज़ करो। कमांड लाइन से स्पेसिफिक प्रोसेसेज़ ही एनालाइज़ करो।' },
          { q: 'एन्क्रिप्टेड डिस्क पर काम नहीं कर रहा', a: 'एन्क्रिप्शन कीज़ मेमोरी में होनी चाहिए। BitLocker, FileVault एन्क्रिप्टेड डिस्क के लिए मेमोरी डंप ज़रूरी है।' },
          { q: 'Malware डिटेक्ट नहीं हो रहा', a: 'YARA रूल्स अपडेट करो। कम्युनिटी प्लगइन्स चेक करो। malfind, pslist, netscan सब यूज़ करो।' },
          { q: 'डंप फाइल करप्ट हो गई', a: 'डंप लेते समय सिस्टम स्टेबल होना चाहिए। डिस्क स्पेस चेक करो। LiME से डंप लो — ज़्यादा रिलाएबल है।' },
          { q: 'बहुत धीमा एनालिसिस', a: 'बड़े डंप्स के लिए स्पेसिफिक प्लगइन्स यूज़ करो। पूरा डंप एनालाइज़ करने के बजाय स्पेसिफिक प्रोसेसेज़ देखो।' },
          { q: 'नेटवर्क कनेक्शन नहीं दिख रहे', a: 'netscan प्लगइन यूज़ करो (Volatility 3)। connections और connscan प्लगइन्स भी ट्राई करो।' },
          { q: 'DLL इम्पोर्ट्स नहीं दिख रहे', a: 'dlllist प्लगइन यूज़ करो। प्रोसेस ID स्पेसिफाई करो। हिडन DLLs के लिए ldrmodules यूज़ करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">❌ {item.q}</h4>
            <p className="text-gray-400 text-sm">✅ {item.a}</p>
          </div>
        ))}
      </div>

      <div className="info-box mt-6">
        <strong>💡 अगला कदम:</strong> Volatility से मेमोरी फोरेंसिक्स सीखने के बाद{' '}
        <Link to="/tool/metasploit-framework" className="text-neon-green underline">Metasploit</Link> सेक्शन में जाएं
        और मालवेयर एनालिसिस सीखें! Volatility से मिली जानकारी का इस्तेमाल इंसिडेंट रिस्पॉन्स में करो।
      </div>

      <div className="info-box mt-6">
        <strong>💡 एक्स्ट्रा टिप्स:</strong>
        <ul className="mt-2 text-gray-400 text-sm space-y-1">
          <li>• हमेशा imageinfo से शुरू करो — प्रोफ़ाइल डिटेक्ट करो</li>
          <li>• भारतीय कॉन्टेक्स्ट: इंडियन CERT-In के गाइडलाइन्स फॉलो करो</li>
          <li>• डंप कैप्चर करते समय सिस्टम को आइसोलेट करो — नेटवर्क से डिस्कनेक्ट करो</li>
          <li>• कई डंप्स लो — अलग-अलग टाइम पर — ट्रेंड्स दिखेंगे</li>
          <li>• Volatility 2 और 3 दोनों इंस्टॉल रखो — कुछ प्लगइन्स सिर्फ v2 में हैं</li>
          <li>• YARA रूल्स खुद लिखो — कस्टम मालवेयर डिटेक्ट होगा</li>
          <li>• रिपोर्ट में स्क्रीनशॉट्स शामिल करो — विज़ुअल एविडेंस ज़रूरी है</li>
          <li>• चेन ऑफ कस्टडी डॉक्यूमेंट करो — कौन, कब, क्या किया</li>
          <li>• Volatility के साथ Autopsy भी सीखो — GUI-based फोरेंसिक्स टूल</li>
          <li>• मेमोरी डंप को एन्क्रिप्टेड स्टोरेज में रखो — evidence सुरक्षित रहे</li>
          <li>• रेगुलरली YARA रूल्स अपडेट करो — नए मालवेयर पैटर्न्स डिटेक्ट होंगे</li>
          <li>• मल्टीपल एनालिसिस टूल्स यूज़ करो — Volatility + Rekall + YARA</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Volatility एक शक्तिशाली मेमोरी फोरेंसिक्स टूल है। इसका इस्तेमाल केवल अधिकृत फोरेंसिक इन्वेस्टिगेशन, इंसिडेंट रिस्पॉन्स, और शैक्षिक उद्देश्यों के लिए करें। बिना अनुमति के सिस्टम का मेमोरी डंप लेना और एनालाइज़ करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत डेटा एक्सेस अपराध हो सकता है। सभी रिजल्ट्स को एन्क्रिप्टेड रखो और अधिकृत लोगों के साथ ही शेयर करो।
      </div>
    </TutorialLayout>
  )
}
