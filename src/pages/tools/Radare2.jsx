import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Radare2() {
  return (
    <TutorialLayout
      title="radare2"
      subtitle="रिवर्स इंजीनियरिंग और बाइनरी एनालिसिस फ्रेमवर्क"
      icon="🔬"
      prev={{ to: '/tool/msfvenom', label: 'msfvenom' }}
      next={{ to: '/tool/sqlninja', label: 'sqlninja' }}
    >
      <h2>What is Radare2?</h2>
      <p>
        रैडारे2 (r2) एक कंप्लीट रिवर्स इंजीनियरिंग फ्रेमवर्क है जो बाइनरी फाइलों को डिसअसेम्बल, डिबग, एनालाइज़, और पैच कर सकता है। ELF, PE, Mach-O, WASM — सभी फॉर्मेट्स सपोर्ट करता है। Ghidra और IDA Pro जैसा है लेकिन कमांड-लाइन बेस्ड और पूरी तरह फ्री है। x86, ARM, MIPS, PowerPC, RISC-V सहित 80+ आर्किटेक्चर्स सपोर्ट करता है।
      </p>
      <p>
        रैडारे2 को पैंटागोन (pancake) ने 2006 में शुरू किया था। यह C भाषा में लिखा गया है और इसका आर्किटेक्चर मॉड्यूलर है — हर फंक्शनलिटी अलग प्लगइन की तरह काम करती है। यह टूल मालवेयर एनालिसिस, वल्नरेबिलिटी रिसर्च, CTF चैलेंजेज़, और एक्सप्लॉइट डेवलपमेंट में इस्तेमाल होता है। GitHub पर 19,000+ स्टार्स हैं और एक्टिव डेवलपमेंट जारी है।
      </p>
      <p>
        रैडारे2 सिर्फ एक डिसअसेम्बलर नहीं है — यह एक पूरा फ्रेमवर्क है जिसमें डिसअसेम्बलर, डिबगर, हेक्स एडिटर, बाइनरी पैचर, फ़ाइल एनालाइज़र, और स्क्रिप्टिंग इंजन सब शामिल है। इसमें ESIL (Evaluable Strings Intermediate Language) भी है जो CPU एमुलेशन कर सकता है। रिवर्स इंजीनियरिंग की दुनिया में यह सबसे पावरफुल ओपन सोर्स टूल्स में से एक है।
      </p>
      <p>
        रैडारे2 का सबसे बड़ा फायदा है इसका scripting ecosystem — r2pipe के through Python, JavaScript, Go, Lua, Ruby, Rust सब से control कर सकते हो। यह CI/CD pipelines में integrate हो सकता है और automated malware analysis possible है। Iaito नाम का GUI frontend भी available है। रैडारे2 सिर्फ reverse engineering नहीं, बल्कि binary diffing, firmware analysis, और exploit development में भी इस्तेमाल होता है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> रैडारे2 केवल अधिकृत सुरक्षा शोध, मालवेयर एनालिसिस, और शैक्षिक उद्देश्यों के लिए इस्तेमाल करें। बिना अनुमति के सॉफ़्टवेयर रिवर्स इंजीनियरिंग अवैध हो सकती है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत सॉफ़्टवेयर मॉडिफिकेशन अपराध हो सकता है।
      </div>

      <h2>History of Radare2</h2>
      <p>
        रैडारे2 की शुरुआत 2006 में हुई थी जब पैंटागोन (असली नाम Sergi Alvarez) ने एक सिंपल डिसअसेम्बलर बनाया था। नाम "radar" से आया है क्योंकि यह बाइनरी को स्कैन करता है जैसे रडार ऑब्जेक्ट्स को स्कैन करता है। शुरू में यह सिर्फ एक command-line hex editor था।
      </p>
      <p>
        2009 में इसमें डिबगर जोड़ा गया, 2010 में एनालिसिस इंजन, और 2014 में इसे रीराइट किया गया बेहतर परफॉर्मेंस के लिए। 2017 में r2pipe API stable हुआ जिससे cross-language scripting possible हुआ। 2020 में r2frida plugin आया जिसने Frida integration add किया। आज यह GitHub पर 19,000+ स्टार्स के साथ सबसे पॉपुलर रिवर्स इंजीनियरिंग टूल्स में से एक है।
      </p>
      <p>
        2021 में radare2 5.0 release हुआ जिसमें major performance improvements, better Windows support, और new analysis algorithms add किए गए। इसी साल r2ghidra plugin mature हुआ जो Ghidra का decompiler r2 के अंदर use करने देता है — यह game changer था क्योंकि अब r2 में भी high-level decompilation मिलने लगी। 2022 में WebAssembly (WASM) support add हुआ जो modern web-based malware analysis के लिए ज़रूरी था।
      </p>
      <p>
        रैडारे2 की community बहुत active है — हर साल r2con conference होता है जहां developers और researchers मिलकर new features plan करते हैं। GitHub पर 700+ contributors हैं और monthly releases आते हैं। यह tool CTF competitions में standard बन चुका है — picoCTF, HackTheBox, TryHackMe सब पर r2 use होता है। National security agencies भी r2 use करती हैं malware analysis और vulnerability research के लिए।
      </p>

      <h2>How Radare2 Works?</h2>
      <p>
        रैडारे2 का आर्किटेक्चर मॉड्यूलर है — हर कंपोनेंट अलग से काम करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">रॉ IO इंजन:</strong> फाइल, प्रोसेस, नेटवर्क, कर्नेल — कहीं से भी डेटा पढ़ सकता है। mmap, malloc, और raw I/O support</li>
        <li><strong className="text-white">डिसअसेम्बलर:</strong> x86, ARM, MIPS, PowerPC, RISC-V, SPARC, AVR, WebAssembly सहित 80+ आर्किटेक्चर्स सपोर्ट</li>
        <li><strong className="text-white">एनालिसिस इंजन:</strong> फंक्शन डिटेक्शन, क्रॉस रेफरेंसेज़, डेटा फ्लो एनालिसिस, टाइप इन्फरेंस</li>
        <li><strong className="text-white">डिबगर:</strong> GDB, WinDbg, WinDbg Preview, और नेटिव डिबग प्रोटोकॉल सपोर्ट</li>
        <li><strong className="text-white">बाइनरी पैचर:</strong> इंस्ट्रक्शंस बदलना, नोप करना, जम्प मॉडिफाई करना, hex editing</li>
        <li><strong className="text-white">स्क्रिप्टिंग इंजन:</strong> r2pipe, Python, JavaScript, Lua, Go — सब सपोर्ट</li>
        <li><strong className="text-white">ESIL एमुलेटर:</strong> CPU instruction emulation जो code execution trace करता है</li>
        <li><strong className="text-white">बाइनरी डिफिंग:</strong> दो बाइनरीज़ के बीच differences ढूंढता है</li>
        <li><strong className="text-white">रिकवरी इंजन:</strong> Data types, structs, classes reconstruct करता है</li>
        <li><strong className="text-white">Hashing:</strong> MD5, SHA1, SHA256, CRC32 — file और block level hashing</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में रैडारे2 प्री-इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो कई तरीकों से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="रैडारे2 इंस्टॉलेशन"
        code={`# apt से (सबसे आसान):
sudo apt update
sudo apt install radare2

# सोर्स से (सबसे लेटेस्ट फीचर्स):
git clone https://github.com/radareorg/radare2.git
cd radare2
sys/install.sh

# Snap से:
sudo snap install radare2

# Docker से:
docker pull radare/radare2
docker run -it radare/radare2 r2 /bin/ls

# macOS:
brew install radare2

# Termux (Android):
pkg install radare2

# वर्जन चेक:
r2 -v

# सहायता:
r2 -h

# सभी प्लगइन्स देखें:
r2 -L

# Iaito GUI install:
sudo apt install iaito`}
      />

      <h2>Basic Usage</h2>
      <p>
        रैडारे2 कई मोड्स में चलता है — सिंपल एनालिसिस, डिबग मोड, और व्राइट मोड। हर मोड का अपना उपयोग है।
      </p>
      <CodeBlock
        title="बाइनरी खोलें और एनालाइज़ करें"
        code={`# बाइनरी खोलें:
r2 binary.elf

# फुल एनालिसिस रन करें:
aaa

# फंक्शंस की लिस्ट:
afl

# मेन फंक्शन पर जाएं:
s main

# डिसअसेम्बल देखें:
pdf

# स्ट्रिंग्स निकालें:
iz

# सभी स्ट्रिंग्स (डेटा सेक्शन से भी):
izz

# एंट्री पॉइंट:
ie

# सेक्शंस:
iS

# हेडर इन्फॉर्मेशन:
ih

# इम्पोर्ट्स:
ii

# एक्सपोर्ट्स:
iE

# फाइल इन्फॉर्मेशन:
iI`}
      />

      <h2>Important Commands</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Command</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">aaa</td><td className="py-2 px-3">फुल एनालिसिस (फंक्शंस, सिम्बल्स, क्रॉस रेफ्स)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">aaaa</td><td className="py-2 px-3">डीप एनालिसिस (ज़्यादा समय लगता है)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">afl</td><td className="py-2 px-3">सभी फंक्शंस की लिस्ट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">pdf</td><td className="py-2 px-3">करंट फंक्शन डिसअसेम्बल करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">s addr</td><td className="py-2 px-3">एड्रेस पर सीक करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">iz</td><td className="py-2 px-3">स्ट्रिंग्स लिस्ट करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">px N</td><td className="py-2 px-3">N बाइट्स का हेक्स डंप</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">axt @ addr</td><td className="py-2 px-3">क्रॉस रेफरेंसेज़ देखें (कौन कॉल करता है)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">axf @ addr</td><td className="py-2 px-3">कॉल्स टू (यह क्या कॉल करता है)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ii</td><td className="py-2 px-3">इम्पोर्ट्स लिस्ट करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dc</td><td className="py-2 px-3">कंटिन्यू एक्ज़ीक्यूशन (डिबग)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ds</td><td className="py-2 px-3">स्टेप (डिबग)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">db addr</td><td className="py-2 px-3">ब्रेकपॉइंट सेट करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">VV</td><td className="py-2 px-3">ग्राफ़ व्यू मोड</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">q</td><td className="py-2 px-3">बाहर निकलें</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Disassembly and Analysis</h2>
      <p>
        रैडारे2 का डिसअसेम्बलर बहुत पावरफुल है। x86, x64, ARM, MIPS — सभी आर्किटेक्चर्स सपोर्ट करता है। फंक्शन बाउंड्रीज़, क्रॉस रेफरेंसेज़, और कॉल ग्राफ़ automatic detect होते हैं।
      </p>
      <CodeBlock
        title="डिसअसेम्बली और एनालिसिस"
        code={`# फुल एनालिसिस:
aaa

# मेन फंक्शन डिसअसेम्बल:
s main
pdf

# स्पेसिफिक एड्रेस से डिसअसेम्बल:
pdf @ 0x401000

# क्रॉस रेफरेंसेज़ — कौन कॉल करता है:
axt @ main

# क्रॉस रेफरेंसेज़ — main क्या कॉल करता है:
axf @ main

# सभी फंक्शंस (साइज़ के साथ):
afl

# फंक्शंस साइज़ के हिसाब से सॉर्ट:
afl~[0]

# कॉल ग्राफ़ (ग्राफ़ फॉर्मेट):
agc

# फंक्शन बाउंड्रीज़:
afb @ main

# कमेंट्स जोड़ें:
CC "यह मेन फंक्शन है" @ main

# टाइप इन्फॉर्मेशन:
aft @ main

# वेरिएबल्स देखें:
afv @ main`}
      />

      <h2>Debug Mode</h2>
      <p>
        रैडारे2 में बिल्ट-इन डिबगर है। बाइनरी को स्टेप-बाय-स्टेप एक्ज़ीक्यूट कर सकते हो। यह GDB, WinDbg, और native debug protocols support करता है।
      </p>
      <CodeBlock
        title="डिबगिंग"
        code={`# डिबग मोड में खोलें:
r2 -d binary.elf

# एनालिसिस:
aaa

# ब्रेकपॉइंट सेट करें:
db main
db 0x401000

# सभी ब्रेकपॉइंट्स देखें:
db

# रन करें (ब्रेकपॉइंट तक):
dc

# स्टेप ओवर (फंक्शन कॉल पार करें):
dso 10

# स्टेप इनटू (फंक्शन के अंदर जाएं):
dsi

# रजिस्टर्स देखें:
dr

# स्पेसिफिक रजिस्टर:
dr rax
dr rip

# रजिस्टर बदलें:
dr rax=0x42

# स्टैक डंप:
pxr 64 @ rsp

# मेमोरी मैप:
dm

# थ्रेड्स:
dt

# ब्रेकपॉइंट हटाएं:
db- main

# कंडीशनल ब्रेकपॉइंट:
db main @ rax==0x42

# GDB से अटैच करें (रिमोट):
r2 -d gdb://192.168.1.100:1234`}
      />

      <h2>Binary Patching</h2>
      <p>
        रैडारे2 से बाइनरी को लाइव और फाइल दोनों तरह से पैच कर सकते हो। यह क्रैकिंग और एक्सप्लॉइट डेवलपमेंट में बहुत काम आता है।
      </p>
      <CodeBlock
        title="बाइनरी पैचिंग"
        code={`# राइट मोड में खोलें:
r2 -w binary.elf

# एनालिसिस:
aaa

# मेन फंक्शन पर जाएं:
s main

# इंस्ट्रक्शन नोप करें (जम्प हटाएं):
wa nop @ 0x401050

# इंस्ट्रक्शन बदलें:
wa "jmp 0x401100" @ 0x401050

# कंडीशनल जम्प को अनकंडीशनल बनाएं:
wa "jmp 0x401100" @ 0x401050

# हेक्स वैल्यू बदलें:
wx 9090 @ 0x401050

# स्ट्रिंग बदलें:
w "new_string" @ 0x402000

# पैच सेव करें:
wtf! patched_binary.elf

# पैच रिवर्ट करें:
oo
aaa

# कंपैरिज़न (ओरिजिनल vs पैच्ड):
r2 -A binary.elf
...`}
      />

      <h2>Strings and Data Analysis</h2>
      <p>
        मालवेयर एनालिसिस में स्ट्रिंग्स और डेटा बहुत इम्पोर्टेंट होते हैं। रैडारे2 से सभी डेटा निकाल सकते हो।
      </p>
      <CodeBlock
        title="डेटा एनालिसिस"
        code={`# ASCII स्ट्रिंग्स:
iz

# सभी स्ट्रिंग्स (यूनिकोड भी):
izz

# स्ट्रिंग्स सर्च करें:
izz | grep -i password
izz | grep -i http
izz | grep -i cmd
izz | grep -i /bin/sh

# इम्पोर्ट्स:
ii

# इम्पोर्ट्स फ़िल्टर:
ii | grep -i socket
ii | grep -i connect
ii | grep -i createfile
ii | grep -i regopenkey

# एक्सपोर्ट्स:
iE

# सेक्शंस:
iS

# हेक्स डंप:
px 256

# हेक्स डंप विथ एस्की:
pxa 256

# हेक्स डंप विथ रेफरेंसेज़:
pxr 256 @ rsp

# डंप टू फाइल:
wtf! dump.bin 256 @ 0x401000

# एंट्रोपी एनालिसिस:
p=e  # एंट्रोपी ग्राफ़`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        रैडारे2 को स्क्रिप्ट कर सकते हो — Python, JavaScript, Go, Lua सब सपोर्ट। r2pipe सबसे पॉपुलर तरीका है।
      </p>
      <CodeBlock
        title="r2pipe Python Script"
        code={`#!/usr/bin/env python3
# रैडारे2 स्क्रिप्ट — मालवेयर एनालिसिस

import r2pipe

# बाइनरी खोलें:
r2 = r2pipe.open("suspicious.exe")

# एनालिसिस:
r2.cmd("aaa")

# सभी फंक्शंस:
functions = r2.cmd("afl")
print("[+] Functions:")
print(functions)

# स्ट्रिंग्स निकालें:
strings = r2.cmd("izz~http")
print("[+] HTTP URLs:")
print(strings)

# इम्पोर्ट्स:
imports = r2.cmd("ii~socket")
print("[+] Socket imports:")
print(imports)

# एंट्री पॉइंट:
entry = r2.cmd("ie")
print("[+] Entry points:")
print(entry)

# क्रॉस रेफरेंसेज़:
xrefs = r2.cmd("axt @ sym.imp.connect")
print("[+] Xrefs to connect:")
print(xrefs)

# बंद करें:
r2.quit()`}
      />

      <CodeBlock
        title="r2pipe JavaScript Script"
        code={`// रैडारे2 स्क्रिप्ट — Node.js
const r2pipe = require("r2pipe");

r2pipe.open("/bin/ls", (r2) => {
  r2.cmd("aaa", () => {
    r2.cmd("afl", (functions) => {
      console.log("Functions:", functions);
      r2.cmd("izz~http", (strings) => {
        console.log("Strings:", strings);
        r2.quit();
      });
    });
  });
});`}
      />

      <CodeBlock
        title="बैश स्क्रिप्ट — बल्क एनालिसिस"
        code={`#!/bin/bash
# कई बाइनरीज़ एनालाइज़ करें

for binary in /tmp/malware/*; do
  echo "[+] एनालाइज़िंग: $binary"

  # स्ट्रिंग्स निकालें:
  r2 -q -c "izz~http" "$binary" > "${binary}_strings.txt"

  # इम्पोर्ट्स:
  r2 -q -c "ii~socket" "$binary" > "${binary}_imports.txt"

  # फंक्शंस:
  r2 -q -c "afl" "$binary" > "${binary}_functions.txt"

  # एंट्री पॉइंट:
  r2 -q -c "ie" "$binary" > "${binary}_entry.txt"

  # हेडर:
  r2 -q -c "iI" "$binary" > "${binary}_info.txt"

  echo "[+] डन: $binary"
done`}
      />

      <h2>Malware Analysis Workflow</h2>
      <p>
        मालवेयर एनालिसिस के लिए रैडारे2 बहुत अच्छा है। यह वर्कफ़्लो फॉलो करो:
      </p>
      <CodeBlock
        title="मालवेयर एनालिसिस स्टेप्स"
        code={`# स्टेप 1: फाइल इन्फॉर्मेशन:
r2 -A suspicious.exe
iI  # बाइनरी इन्फो
iH  # हेडर

# स्टेप 2: स्ट्रिंग्स सर्च:
izz | grep -i password
izz | grep -i http://
izz | grep -i https://
izz | grep -i cmd
izz | grep -i powershell
izz | grep -i /bin/sh
izz | grep -i registry
izz | grep -i HKEY

# स्टेप 3: नेटवर्क एक्टिविटी:
ii | grep -i socket
ii | grep -i connect
ii | grep -i send
ii | grep -i recv
ii | grep -i wget
ii | grep -i urlmon

# स्टेप 4: फाइल ऑपरेशंस:
ii | grep -i createfile
ii | grep -i writefile
ii | grep -i regopenkey
ii | grep -i regsetvalue

# स्टेप 5: क्रॉस रेफरेंसेज़:
axt @ sym.imp.connect
axt @ sym.imp.createsocket

# स्टेप 6: एंट्री पॉइंट एनालाइज़:
s entry0
pdf

# स्टेप 7: सस्पीशियस फंक्शंस:
afl | grep -i encrypt
afl | grep -i decrypt
afl | grep -i inject
afl | grep -i payload`}
      />

      <h2>Exploit Development</h2>
      <p>
        रैडारे2 एक्सप्लॉइट डेवलपमेंट में भी इस्तेमाल होता है। बफ़र ओवरफ़्लो, ROP चेन, और शेलकोड एनालिसिस सब कर सकते हो।
      </p>
      <CodeBlock
        title="एक्सप्लॉइट डेवलपमेंट"
        code={`# बाइनरी खोलें:
r2 -A vulnerable_app

# प्रोटेक्शंस चेक करें:
i~canary
i~nx
i~pic

# बफ़र साइज़ फाइंड करें:
af @ main
afv @ main

# ROP गैजेट्स ढूंढें:
# ROPgadget --binary vulnerable_app

# शेलकोड एनालाइज़ करें:
r2 -a x86 -b 32 shellcode.bin
aaa
pdf

# शेलकोड डिसअसेम्बल:
r2 -a x86 -b 64 -c "pd 32" shellcode.bin

# GOT/PLT एनालिसिस:
ir  # रिलोकेशंस
iq  # एंट्री पॉइंट्स`}
      />

      <h2>Firmware Analysis</h2>
      <p>
        IoT डिवाइसेज़ की फ़र्मवेयर एनालिसिस में रैडारे2 बहुत काम आता है।
      </p>
      <CodeBlock
        title="फ़र्मवेयर एनालिसिस"
        code={`# फ़र्मवेयर बाइनरी खोलें:
r2 firmware.bin

# सेक्शंस देखें:
iS

# स्ट्रिंग्स:
izz | grep -i version
izz | grep -i password
izz | grep -i admin

# क्रॉस रेफरेंसेज़:
axt @ sym.printf

# फ़र्मवेयर में इंटरेस्टिंग फंक्शंस:
afl | grep -i login
afl | grep -i auth
afl | grep -i config

# ARM आर्किटेक्चर सेट करें:
r2 -a arm -b 32 firmware.bin
e anal.arch=arm
e anal.bits=32
aaa

# ELF हेडर मॉडिफाई:
r2 -w firmware.bin`}
      />

      <h2>Radare2 vs Ghidra vs IDA Pro</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Radare2</th>
              <th className="text-left py-2 px-3 text-neon-green">Ghidra</th>
              <th className="text-left py-2 px-3 text-neon-green">IDA Pro</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कीमत</td><td className="py-2 px-3">फ्री (ओपन सोर्स)</td><td className="py-2 px-3">फ्री (NSA)</td><td className="py-2 px-3">$$$ (महंगा)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">इंटरफ़ेस</td><td className="py-2 px-3">CLI (कमांड लाइन)</td><td className="py-2 px-3">GUI</td><td className="py-2 px-3">GUI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">डिकंपाइलर</td><td className="py-2 px-3">r2dec (लिमिटेड)</td><td className="py-2 px-3">बेस्ट डिकंपाइलर</td><td className="py-2 px-3">बहुत अच्छा</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">डिबगर</td><td className="py-2 px-3">बिल्ट-इन</td><td className="py-2 px-3">बिल्ट-इन</td><td className="py-2 px-3">बिल्ट-इन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्क्रिप्टिंग</td><td className="py-2 px-3">r2pipe (Python/JS/Go)</td><td className="py-2 px-3">Java/Python</td><td className="py-2 px-3">IDAPython</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्पीड</td><td className="py-2 px-3">बहुत तेज़</td><td className="py-2 px-3">मीडियम</td><td className="py-2 px-3">तेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">लर्निंग कर्व</td><td className="py-2 px-3">स्टीप</td><td className="py-2 px-3">मीडियम</td><td className="py-2 px-3">मीडियम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GUI ऑप्शन</td><td className="py-2 px-3">Iaito (अलग)</td><td className="py-2 px-3">बिल्ट-इन</td><td className="py-2 px-3">बिल्ट-इन</td></tr>
            <tr><td className="py-2 px-3 text-white">प्लगइन्स</td><td className="py-2 px-3">r2pm (मैनेजर)</td><td className="py-2 px-3">Extensive</td><td className="py-2 px-3">Extensive</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'एनालिसिस बहुत स्लो है', a: 'बड़ी बाइनरीज़ में aaa स्लो होता है। सिर्फ aa या aap (पैटर्न बेस्ड) यूज़ करो। एनालिसिस लेवल कम करो: aa, aaa, aaaa, aaaaa' },
          { q: 'डिसअसेम्बली गलत दिख रही है', a: 'आर्किटेक्चर गलत सेट हो सकता है। e anal.arch=x86 और e anal.bits=64 सेट करो। -a और -b फ्लैग्स यूज़ करो: r2 -a arm -b 32 binary' },
          { q: 'डिबग मोड काम नहीं कर रहा', a: 'ptrace परमिशन चेक करो। sudo से चलाओ या echo 0 > /proc/sys/kernel/yama/ptrace_scope करो। Android पर root चाहिए।' },
          { q: 'बाइनरी पैच सेव नहीं हो रहा', a: '-w फ्लैग से खोलना होगा: r2 -w binary.elf। wtf! से सेव करो। wtf patch.bin @ 0x401000 भी यूज़ कर सकते हो।' },
          { q: 'ASCII आर्ट डिस्प्ले में प्रॉब्लम', a: 'e scr.utf8=true सेट करो। टर्मिनल फॉन्ट चेक करो। e scr.color=0 से color बंद कर सकते हो।' },
          { q: 'ग्राफ़ व्यू नहीं दिख रहा', a: 'ग्राफ़ टर्मिनल में VV से एंटर करो। अगर काम न करे तो agf > graph.dot से DOT फाइल बनाओ। Iaito GUI use करो।' },
          { q: 'Go binaries analyze नहीं हो रहीं', a: 'Go binaries stripped होती हैं। r2 -A binary से पहले e anal.strings=true सेट करो। GoReSym tool भी use करो।' },
          { q: 'Multi-architecture binary support', a: 'Fat binary (Mach-O) या firmware blobs के लिए offset specify करो। r2 -a arm -b 32 -s 0x1000 binary.bin से specific offset से start करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        रैडारे2 का इस्तेमाल अटैकर्स भी करते हैं — इसलिए डिफेंडर्स को भी पता होना चाहिए:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">बाइनरी ऑब्स्क्यूकेशन:</strong> कोड को ऑब्स्क्यूकेट करें — रिवर्स इंजीनियरिंग मुश्किल होगी</li>
        <li><strong className="text-white">एंटी-डिबगिंग टेक्निक्स:</strong> ptrace डिटेक्शन, टाइमिंग चेक्स, IsDebuggerPresent</li>
        <li><strong className="text-white">कोड साइनिंग:</strong> मॉडिफाइड बाइनरी डिटेक्ट होगी — digital signatures use करें</li>
        <li><strong className="text-white">पैकर्स:</strong> UPX, Themida, VMProtect — डिसअसेम्बली मुश्किल करते हैं</li>
        <li><strong className="text-white">एन्क्रिप्शन:</strong> स्ट्रिंग्स और कोड एन्क्रिप्टेड रखें — runtime decryption</li>
        <li><strong className="text-white">एंटी-VM टेक्निक्स:</strong> VM detection — sandbox में run न होने दें</li>
        <li><strong className="text-white">रनटाइम प्रोटेक्शन:</strong> कोड सिर्फ मेमोरी में डिक्रिप्ट हो — disk पर encrypted</li>
        <li><strong className="text-white">Control Flow Integrity:</strong> CFI implement करें — ROP attacks रुकेंगे</li>
        <li><strong className="text-white">ASLR + DEP/NX:</strong> Memory protections enable करें</li>
        <li><strong className="text-white">Integrity Checks:</strong> बाइनरी की hash verify करें runtime पर</li>
        <li><strong className="text-white">Anti-Tampering:</strong> बाइनरी modify होने पर crash हो — checksum verification implement करें</li>
        <li><strong className="text-white">Symbol Stripping:</strong> strip command से debug symbols हटाओ — RE मुश्किल होगी</li>
        <li><strong className="text-white">Dynamic Loading:</strong> Runtime पर code load करो — static analysis में code दिखेगा ही नहीं</li>
        <li><strong className="text-white">Code Virtualization:</strong> VMProtect जैसे tools से code virtualize करो — सबसे advanced protection</li>
        <li><strong className="text-white">Obfuscated Strings:</strong> strings encrypt करो और runtime पर decrypt — static analysis में कुछ नहीं दिखेगा</li>
        <li><strong className="text-white">Syscall Obfuscation:</strong> direct syscalls use करो API calls की जगह — hooking bypass होगी</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        रिवर्स इंजीनियरिंग सीखने के लिए सेफ लैब बनाना ज़रूरी है:
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# वर्चुअल मशीन (VirtualBox/VMware):
# काली लिनक्स VM बनाएं
# स्नैपशॉट रखें

# प्रैक्टिस बाइनरीज़ डाउनलोड करें:
# crackmes.one — प्रैक्टिस चैलेंजेज़
# vulnserver.exe — वल्नरेबल एप्लिकेशन
# CTF challenges — picoCTF, OverTheWire

# टेस्ट बाइनरी बनाएं:
echo '#include <stdio.h>
int main() {
  printf("Hello World");
  return 0;
}' > test.c
gcc -o test test.c

# रैडारे2 से एनालाइज़ करें:
r2 -A test

# ग्रेडुअली हार्ड चैलेंजेज़ करें:
# 1. सिंपल C प्रोग्राम्स
# 2. स्ट्रिप्ड बाइनरीज़ (strip)
# 3. पैक्ड बाइनरीज़ (UPX)
# 4. ऑब्स्क्यूकेटेड कोड
# 5. असली मालवेयर सैंपल्स (सैंडबॉक्स में)`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड रैडारे2"
        code={`# YARA रूल्स के साथ स्कैन:
r2 -qc "e scr.color=0; aaa; iz" malware.exe | yara rules.yar

# ESIL (Evaluable Strings Intermediate Language):
aei   # ESIL इनिट
aer   # रजिस्टर्स
aes   # स्टेप
aeiS  # डिस्प्ले

# डीकंपाइलर (r2dec):
r2 binary.elf
aaa
pdg   # डीकंपाइल करें

# ग्राफ़ एक्सपोर्ट:
agCd > call_graph.dot  # कॉल ग्राफ़ DOT फॉर्मेट
agfd > func_graph.dot  # फंक्शन ग्राफ़

# मल्टी-आर्किटेक्चर:
r2 -a arm -b 32 arm_binary.bin   # ARM 32-bit
r2 -a mips -b 32 mips_binary.bin # MIPS
r2 -a ppc -b 64 ppc_binary.bin   # PowerPC 64-bit

# r2frida (Frida integration):
r2 frida://spawn/usb//target_app

# बाइनरी डिफिंग:
rafind2 -S binary1.bin binary2.bin

# Base64 डिकोड:
r2 -qc "p6d base64_string" /dev/null

# QR कोड जनरेट:
r2 -qc "wtf! qr.png 100" /dev/null`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या रैडारे2 फ्री है?', a: 'हाँ, पूरी तरह फ्री और ओपन सोर्स (LGPL)। कमर्शियल यूज़ भी फ्री। कोई paid version नहीं है।' },
          { q: 'Ghidra या IDA Pro से बेहतर है?', a: 'हर टूल की अपनी ताकत है। रैडारे2 CLI और स्क्रिप्टिंग में बेस्ट है। Ghidra डिकंपाइलर में बेस्ट। IDA Pro प्रोफेशनल में बेस्ट। सब एक साथ use कर सकते हो।' },
          { q: 'GUI है क्या?', a: 'रैडारे2 मुख्य रूप से CLI है। लेकिन Iaito (r2 का GUI फ्रंटएंड) अलग से इंस्टॉल कर सकते हो: sudo apt install iaito' },
          { q: 'कौन सी भाषा स्क्रिप्टिंग के लिए बेस्ट है?', a: 'Python (r2pipe) सबसे पॉपुलर है। JavaScript और Go भी सपोर्टेड हैं। r2pm से plugins install कर सकते हो।' },
          { q: 'ARM बाइनरी एनालाइज़ कर सकता है?', a: 'हाँ! 80+ आर्किटेक्चर्स सपोर्ट — x86, ARM, MIPS, PowerPC, RISC-V, SPARC, AVR, WebAssembly सब।' },
          { q: 'क्या मालवेयर एनालिसिस के लिए सेफ है?', a: 'सैंडबॉक्स/VM में चलाओ। रैडारे2 खुद सेफ है लेकिन मालवेयर बाइनरी खतरनाक हो सकती है। Network isolation use करो।' },
          { q: 'सबसे common commands क्या हैं?', a: 'aaa (analyze), afl (functions), pdf (disassemble), iz (strings), s main (seek), dc (continue), db (breakpoint) — ये सबसे ज़्यादा use होते हैं।' },
          { q: 'Windows binary analyze कर सकता है?', a: 'हाँ! PE format fully support है। r2 -A malware.exe से open करो। PE headers, imports, exports सब देख सकते हो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        रैडारे2 real-world scenarios में बहुत effectively use होता है। एक common case है IoT firmware analysis — जब security researchers को router firmware मिलती है तो r2 से binary extract करके hardcoded passwords, backdoor functions, और vulnerable services find करते हैं। एक case में researcher ने r2 से popular router firmware analyze की और telnet backdoor found जो manufacturer ने debug purposes के लिए छोड़ा था — millions of devices vulnerable थे।
      </p>
      <p>
        Malware analysis labs में r2 daily use होता है। जब नया ransomware sample आता है, तो analysts r2 से encryption algorithm identify करते हैं, C2 server addresses extract करते हैं, और kill switch mechanisms ढूंढते हैं। WannaCry ransomware के case में researchers ने r2 और Ghidra के combo से kill switch domain discover किया था जिसने spread रोकने में मदद की।
      </p>
      <p>
        CTF competitions में r2 standard tool है — binary exploitation challenges, reverse engineering puzzles, और cryptography tasks सब में use होता है। एक popular CTF challenge type है "crackme" जहां binary में hidden password find करना होता है — r2 से disassemble करके comparison logic decompile करके password extract कर सकते हो। Bug bounty programs में भी r2 use होता है client-side applications की security audit के लिए।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        रैडारे2 अकेले use करने से बेहतर है इसे complementary tools के साथ combine करो:
      </p>
      <CodeBlock
        title="Radare2 + Ghidra + Frida Combo"
        code={`# r2ghidra — Ghidra का decompiler r2 के अंदर:
r2pm install r2ghidra
r2 binary.elf
aaa
pdg   # Ghidra decompiler output

# r2frida — Frida integration:
r2pm install r2frida
# Android app live analysis:
r2 frida://spawn/usb//com.target.app

# r2 और GDB combo:
# r2 में analyze, GDB में debug:
r2 -A binary.elf
# Analysis export करो:
agCd > analysis.dot

# YARA integration:
r2 -qc "aaa; iz" malware.exe | yara rules.yar

# Ghidra export → r2 import:
ghidra_headless ... -postScript ExportSymbols.java
# फिर r2 में symbols load करो

# Cutter (r2 का GUI frontend):
sudo apt install cutter`}
      />

      <h2>Performance Tuning</h2>
      <p>
        बड़ी बाइनरीज़ (100MB+ firmware) analyze करते समय r2 slow हो सकता है। कुछ optimizations:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Analysis Level Control:</strong> aa (basic) से शुरू करो, ज़रूरत पड़ने पर aaa या aaaa — हर level time बढ़ाता है</li>
        <li><strong className="text-white">Selective Analysis:</strong> सिर्फ specific functions analyze करो — af @ sym.main पूरी binary skip करता है</li>
        <li><strong className="text-white">Cache Enable करो:</strong> e anal.cache=true से repeated analysis fast होती है</li>
        <li><strong className="text-white">Sandbox Mode:</strong> ए.sandbox=true से dangerous operations block होते हैं</li>
        <li><strong className="text-white">Bin.baddr Set करो:</strong> Base address set करने से analysis accurate होती है</li>
        <li><strong className="text-white">Threads Use करो:</strong> e scr.highlight=thread से multi-threaded analysis enable होती है</li>
        <li><strong className="text-white">Partial Loading:</strong> r2 -s 0x400000 binary — specific offset से load करो</li>
        <li><strong className="text-white">No Analysis Mode:</strong> r2 -n binary — बिना analysis के open करो, manually analyze करो</li>
      </ul>
      <CodeBlock
        title="Performance Optimization Commands"
        code={`# Large binary के लिए optimized workflow:
r2 -e anal.cache=true -e bin.cache=true large_binary.bin

# सिर्फ imports analyze करो:
r2 -qc "aa; afl~imp" binary.elf

# Memory-mapped analysis:
r2 -e io.va=true binary.elf

# Fast string extraction (no analysis):
r2 -qc "izz~http" binary.elf

# Specific section analyze करो:
r2 binary.elf
iS  # sections list
S .text  # text section select
aa  # सिर्फ text section analyze`}
      />

      <h2>Reverse Engineering Workflow</h2>
      <p>
        रिवर्स इंजीनियरिंग में systematic approach ज़रूरी है। यह proven workflow follow करो:
      </p>
      <CodeBlock
        title="Step-by-Step RE Workflow"
        code={`# स्टेप 1: File identification
r2 -A binary.elf
iI    # फाइल टाइप, आर्किटेक्चर, एंडियन
iH    # हेडर इन्फॉर्मेशन
iS    # सेक्शंस — कौन सा section executable है

# स्टेप 2: Quick overview
izz   # सभी स्ट्रिंग्स — URLs, IPs, paths, messages
ii    # इम्पोर्ट्स — कौन से APIs use हो रहे हैं
iE    # एक्सपोर्ट्स — library functions

# स्टेप 3: Entry point analysis
ie    # एंट्री पॉइंट्स
s entry0
pdf   # एंट्री पॉइंट डिसअसेम्बल

# स्टेप 4: Main function
s main
pdf   # main function डिसअसेम्बल
afv   # लोकल वेरिएबल्स

# स्टेप 5: Function calls trace
axf @ main  # main क्या कॉल करता है
axt @ sym.imp.malloc  # malloc कहां use हो रहा है

# स्टेप 6: Suspicious functions
afl | grep -i encrypt
afl | grep -i network
afl | grep -i file
afl | grep -i registry

# स्टेप 7: Graph view
VV    # करंट फंक्शन का ग्राफ़

# स्टेप 8: Notes
CC "यह encryption function है" @ 0x401200
CC "C2 server: evil.com" @ 0x402000`}
      />
      <CodeBlock
        title="Malware Triage Checklist"
        code={`# Quick malware triage — 5 minute analysis:
# 1. File type: iI
# 2. Strings: izz | grep -iE "http|cmd|powershell|/bin|registry"
# 3. Imports: ii | grep -iE "socket|connect|create|regopen"
# 4. Sections: iS (writable+executable = suspicious)
# 5. Entry: s entry0; pdf (obfuscated? packed?)
# 6. Packers: i~canary, i~nx, i~pic
# 7. Hash: ph (MD5, SHA256 for VT lookup)
# 8. Yara: izz | yara rules.yar`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        रिवर्स इंजीनियरिंग findings को properly document करना ज़रूरी है — especially client reports और team collaboration के लिए:
      </p>
      <CodeBlock
        title="Output and Reporting"
        code={`# Output to file:
r2 -qc "aaa; afl; pdf @ main" binary.elf > analysis.txt

# JSON output (scripting friendly):
r2 -qc "aaa; aflj" binary.elf > functions.json

# CSV export:
r2 -qc "aaa; afl," binary.elf > functions.csv

# Graph export (DOT format):
r2 -qc "agCd" binary.elf > call_graph.dot
dot -Tpng call_graph.dot -o call_graph.png

# Function list with sizes:
r2 -qc "aaa; afl," binary.elf | sort -t, -k3 -rn

# Strings with addresses:
r2 -qc "izzj" binary.elf > strings.json

# Import/Export tables:
r2 -qc "iij" binary.elf > imports.json
r2 -qc "iEj" binary.elf > exports.json

# HTML report (with Iaito):
# Iaito GUI में File → Export Report`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या रैडारे2 फ्री है?', a: 'हाँ, पूरी तरह फ्री और ओपन सोर्स (LGPL)। कमर्शियल यूज़ भी फ्री। कोई paid version नहीं है।' },
          { q: 'Ghidra या IDA Pro से बेहतर है?', a: 'हर टूल की अपनी ताकत है। रैडारे2 CLI और स्क्रिप्टिंग में बेस्ट है। Ghidra डिकंपाइलर में बेस्ट। IDA Pro प्रोफेशनल में बेस्ट। सब एक साथ use कर सकते हो।' },
          { q: 'GUI है क्या?', a: 'रैडारे2 मुख्य रूप से CLI है। लेकिन Iaito (r2 का GUI फ्रंटएंड) अलग से इंस्टॉल कर सकते हो: sudo apt install iaito' },
          { q: 'कौन सी भाषा स्क्रिप्टिंग के लिए बेस्ट है?', a: 'Python (r2pipe) सबसे पॉपुलर है। JavaScript और Go भी सपोर्टेड हैं। r2pm से plugins install कर सकते हो।' },
          { q: 'ARM बाइनरी एनालाइज़ कर सकता है?', a: 'हाँ! 80+ आर्किटेक्चर्स सपोर्ट — x86, ARM, MIPS, PowerPC, RISC-V, SPARC, AVR, WebAssembly सब।' },
          { q: 'क्या मालवेयर एनालिसिस के लिए सेफ है?', a: 'सैंडबॉक्स/VM में चलाओ। रैडारे2 खुद सेफ है लेकिन मालवेयर बाइनरी खतरनाक हो सकती है। Network isolation use करो।' },
          { q: 'सबसे common commands क्या हैं?', a: 'aaa (analyze), afl (functions), pdf (disassemble), iz (strings), s main (seek), dc (continue), db (breakpoint) — ये सबसे ज़्यादा use होते हैं।' },
          { q: 'Windows binary analyze कर सकता है?', a: 'हाँ! PE format fully support है। r2 -A malware.exe से open करो। PE headers, imports, exports सब देख सकते हो।' },
          { q: 'r2pm क्या है?', a: 'r2pm radare2 का plugin manager है — r2pm install r2ghidra, r2frida, r2dec जैसे plugins install कर सकते हो। r2pm -ls से available plugins देखो।' },
          { q: 'डिकंपाइल कैसे करें?', a: 'r2ghidra plugin install करो: r2pm install r2ghidra। फिर r2 binary.elf में aaa करके pdg command use करो — Ghidra-style decompilation मिलेगा।' },
          { q: 'बड़ी बाइनरी (100MB+) analyze नहीं हो रही', a: 'e anal.cache=true सेट करो। सिर्फ aa use करो (aaaa मत)। Specific sections target करो। r2 -n से open करो और manually functions analyze करो।' },
          { q: 'WebAssembly binary support है?', a: 'हाँ, 2022 से WASM support add हुआ है। r2 -a wasm wasm_binary.wasm से open करो। अभी experimental है लेकिन basic disassembly काम करता है।' },
          { q: 'क्या Docker container analyze कर सकता है?', a: 'हाँ, Docker image extract करके binaries r2 से analyze करो। docker export से filesystem निकालो, फिर r2 से ELF binaries analyze करो। Container escape analysis के लिए भी useful है।' },
          { q: 'Ghidra plugin कैसे install करें?', a: 'r2pm install r2ghidra चलाओ। पहले r2pm init करना पड़ सकता है। अगर build error आए तो Ghidra separately install करो और GHIDRA_PATH set करो।' },
          { q: 'क्या Android APK analyze कर सकता है?', a: 'हाँ! APK unzip करो, classes.dex निकालो, फिर r2 -a dalvik classes.dex से analyze करो। या r2frida से live Android app analysis करो।' },
          { q: 'रिवर्स इंजीनियरिंग कैसे सीखें?', a: 'crackmes.one से शुरू करो (easy challenges)। r2 के साथ C programs compile करके analyze करो। "Practical Binary Analysis" book पढ़ो। HackTheBox reversing challenges करो।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Ghidra</td><td className="py-2 px-3">रिवर्स इंजीनियरिंग</td><td className="py-2 px-3">बेस्ट डिकंपाइलर, NSA ने बनाया, GUI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">IDA Pro</td><td className="py-2 px-3">रिवर्स इंजीनियरिंग</td><td className="py-2 px-3">इंडस्ट्री स्टैंडर्ड, महंगा</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Binary Ninja</td><td className="py-2 px-3">रिवर्स इंजीनियरिंग</td><td className="py-2 px-3">मॉडर्न UI, पाइपलाइन API</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">GDB</td><td className="py-2 px-3">डिबगर</td><td className="py-2 px-3">लिनक्स स्टैंडर्ड डिबगर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">x64dbg</td><td className="py-2 px-3">विंडोज़ डिबगर</td><td className="py-2 px-3">विंडोज़ रिवर्सिंग के लिए बेस्ट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Hopper</td><td className="py-2 px-3">डिसअसेम्बलर</td><td className="py-2 px-3">macOS/Linux, कम कीमत</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Capstone</td><td className="py-2 px-3">डिसअसेम्बली इंजन</td><td className="py-2 px-3">r2 का भी backend, standalone use</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">RetDec</td><td className="py-2 px-3">डिकंपाइलर</td><td className="py-2 px-3">Avast का open source, LLVM-based</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>r2pipe से Python automation बनाओ — मालवेयर analysis scripts जो automatically strings, imports, cross-refs extract करें</li>
          <li>Ghidra + r2 combo use करो — Ghidra में decompile, r2 में debug, दोनों की ताकत मिलाओ</li>
          <li>r2pm से plugins install करो — r2dec, r2ghidra, r2frida, r2yara सब useful हैं</li>
          <li>ESIL emulator use करो code execution trace करने के लिए — बिना binary run किए behavior समझ आता है</li>
          <li>Iaito GUI try करो अगर CLI uncomfortable लगे — same engine, visual interface</li>
          <li>VT (VirusTotal) integration — r2 -qc "ph" malware.exe से hash मिलेगा, VT पर search करो</li>
          <li>r2 -A binary की जगह r2 -Ae scr.color=0 binary use करो script output में colors remove करने के लिए</li>
          <li>Binary diffing के लिए rafind2 use करो — patch analysis और version comparison में काम आता है</li>
          <li>Crackmes.one पर practice करो — r2 skills improve करने का सबसे अच्छा तरीका है</li>
          <li>r2 -qc "command" binary से non-interactive mode में run करो — CI/CD pipelines में integrate हो सकता है</li>
          <li>Strings analysis से शुरू करो — izz से URLs, IPs, passwords, API keys मिल जाते हैं बिना deep analysis के</li>
          <li>Cross-references (axt/axf) से code flow समझ आता है — function calls trace करने का सबसे अच्छा तरीका</li>
          <li>r2 -w mode में binary modify कर सकते हो — license checks bypass, debug flags enable करने के लिए useful</li>
          <li>r2ghidra install करना मत भूलो — decompilation output reverse engineering बहुत fast कर देता है</li>
          <li>ESIL emulator use करो code path analysis के लिए — बिना binary execute किए behavior predict कर सकते हो</li>
          <li>r2frida से Android/iOS apps को runtime पर analyze करो — SSL pinning bypass, function hooking सब possible है</li>
          <li>VT hash check करने के लिए r2 -qc "ph" binary चलाओ — MD5/SHA256 मिलेगा VirusTotal पर search करने के लिए</li>
          <li>पहले file info (iI), sections (iS), imports (ii) देखो — फिर analysis (aaa) करो — top-down approach बेहतर है</li>
          <li>रैडारे2 log files भी analyze कर सकता है — r2 -a x86 log_file में hex patterns search करो</li>
          <li>r2pm -ls से available plugins देखो — हर update में नए plugins आते हैं, check करते रहो</li>
          <li>ग्राफ़ view (VV) से control flow visualize होता है — complex functions समझने का सबसे अच्छा तरीका</li>
          <li>r2 -qc "aaa;aflj" binary > output.json से JSON export करो — automated pipelines में use करो</li>
          <li>Cutter (r2 GUI) install करो अगर CLI uncomfortable — same power, visual interface, built-in decompiler</li>
          <li>Malware triage के लिए strings + imports + sections पहले check करो — deep analysis बाद में करो</li>
          <li>r2frida install करो Android app analysis के लिए — live hooking और memory inspection possible है</li>
          <li>Headless mode: r2 -qc "command" binary — CI/CD और automated security scanning में integrate होता है</li>
          <li>r2pipe से multi-binary analysis scripts बनाओ — batch processing possible है</li>
          <li>Binary diffing: rafind2 -S old.bin new.bin — patch analysis और version comparison के लिए</li>
          <li>r2 -qc "ph" binary से hash निकालो — VirusTotal पर search करने के लिए MD5/SHA256</li>
          <li>ग्राफ़ export: agCd > graph.dot && dot -Tpng graph.dot -o graph.png — reports में include करो</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> रैडारे2 एक शक्तिशाली रिवर्स इंजीनियरिंग टूल है। इसका इस्तेमाल केवल अधिकृत सुरक्षा शोध, मालवेयर एनालिसिस, और शैक्षिक उद्देश्यों के लिए करें। बिना अनुमति के सॉफ़्टवेयर रिवर्स इंजीनियरिंग करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत सॉफ़्टवेयर मॉडिफिकेशन अपराध हो सकता है। केवल अपने लैब वातावरण में ही प्रैक्टिस करें। मालवेयर analysis के लिए हमेशा sandboxed environment use करो — bare metal पर malware run मत करो।
      </div>
    </TutorialLayout>
  )
}
