import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Hashcat() {
  return (
    <TutorialLayout
      title="hashcat"
      subtitle="GPU-accelerated पासवर्ड रिकवरी — 300+ हैश मोड्स"
      icon="⚡"
      prev={{ to: '/tool/john', label: 'john' }}
      next={{ to: '/tool/nikto', label: 'nikto' }}
    >
      <h2>What is Hashcat?</h2>
      <p>
        Hashcat दुनिया का सबसे तेज़ और एडवांस्ड पासवर्ड रिकवरी टूल है। यह GPU (Graphics Processing Unit) का इस्तेमाल करके हैशेस को क्रैक करता है जो CPU से 100-1000 गुना तेज़ है। 300+ हैश मोड्स को सपोर्ट करता है — MD5, SHA, NTLM, bcrypt, WPA2, MySQL, WordPress सब। प्रोफेशनल पेनेट्रेशन टेस्टिंग और पासवर्ड ऑडिटिंग के लिए यह इंडस्ट्री स्टैंडर्ड टूल है।
      </p>
      <p>
        Hashcat ओपन सोर्स है और Linux, Windows, macOS सभी पर चलता है। OpenCL और CUDA दोनों को सपोर्ट करता है — मतलब NVIDIA और AMD दोनों GPU पर काम करता है। एक अच्छे GPU पर MD5 हैशेस करोड़ों प्रति सेकंड क्रैक होते हैं। बिना GPU के भी CPU मोड में चलता है लेकिन बहुत धीमा होगा।
      </p>
      <p>
        Hashcat की सबसे बड़ी खासियत इसकी वर्सेटिलिटी है — डिक्शनरी अटैक, ब्रूट फोर्स, रूल-बेस्ड अटैक, कॉम्बिनेशन अटैक, हाइब्रिड अटैक — सब कुछ एक ही टूल में। रूल्स इंजन बहुत पावरफुल है — वर्डलिस्ट के हर शब्द से सैकड़ों वेरिएशन बना सकते हो। यह पेनेट्रेशन टेस्टर्स, सिक्योरिटी रिसर्चर्स, और फोरेंसिक इन्वेस्टिगेटर्स सभी के लिए ज़रूरी टूल है।
      </p>
      <p>
        Hashcat distributed cracking भी सपोर्ट करता है --brain फीचर के ज़रिए। मतलब कई machines मिलकर एक ही hash क्रैक कर सकती हैं। यह बड़े पैमाने पर password auditing के लिए बहुत उपयोगी है। Enterprise environments में जहां हज़ारों accounts हैं, वहां Hashcat का parallel processing बहुत काम आता है।
      </p>
      <p>
        Hashcat का pot file system बहुत स्मार्ट है — एक बार जो hash crack हो गया, वो दोबारा try नहीं होता। इससे समय बचता है और efficiency बढ़ती है। Session management से लंबे attacks को बीच में रोककर बाद में resume कर सकते हो — power failure हो जाए तो भी progress नहीं खोती।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Hashcat केवल अधिकृत टेस्टिंग और शैक्षिक उद्देश्यों के लिए ही इस्तेमाल करें। बिना अनुमति के पासवर्ड क्रैकिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत एक्सेस बनाना अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल अपने सिस्टम या लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of Hashcat</h2>
      <p>
        Hashcat को Jens Steube (atom) ने 2009 में बनाया था। Jens एक German security researcher हैं जो password security में विशेषज्ञ हैं। शुरू में यह सिर्फ CPU-based था लेकिन 2010 में GPU acceleration जोड़ा गया जिससे यह रातोंरात सबसे तेज़ पासवर्ड क्रैकिंग टूल बन गया। GPU parallelism ने password cracking की दुनिया बदल दी।
      </p>
      <p>
        2015 में Hashcat को ओपन सोर्स किया गया (MIT license) और इसमें oclHashcat (GPU) और hashcat (CPU) दोनों मर्ज कर दिए गए। यह बहुत बड़ा कदम था — community ने contribute करना शुरू किया और new hash modes, optimizations, और features add हुए।
      </p>
      <p>
        2016 में Hashcat 3.0 रिलीज़ हुआ जिसमें OpenCL support जोड़ा गया — इससे AMD GPUs भी support होने लगे। पहले सिर्फ NVIDIA CUDA support था। OpenCL cross-platform है इसलिए macOS पर भी काम करने लगा।
      </p>
      <p>
        2019 में Hashcat 6.0 आया जिसमें 300+ हैश मोड्स, बेहतर रूल्स इंजन, और multi-GPU support था। आज Hashcat GitHub पर 20,000+ stars के साथ सबसे popular password cracking tool है। CTF competitions, penetration testing, और password auditing में यह standard tool है।
      </p>

      <h2>How Hashcat Works?</h2>
      <p>
        Hashcat GPU-parallel computing का इस्तेमाल करके हैशेस को क्रैक करता है। इसका architecture बहुत efficiently designed है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">GPU Parallelism:</strong> हज़ारों GPU cores एक साथ पासवर्ड candidates generate और test करते हैं — RTX 4090 में 16,384 CUDA cores हैं</li>
        <li><strong className="text-white">Hash Computation:</strong> हर candidate का हैश calculate करके target हैश से compare करता है — GPU पर यह बहुत fast होता है</li>
        <li><strong className="text-white">OpenCL/CUDA:</strong> GPU programming frameworks जो computation को parallelize करते हैं — Hashcat दोनों support करता है</li>
        <li><strong className="text-white">Attack Modes:</strong> Dictionary, brute-force, rule-based, combination, hybrid — अलग-अलग strategies different scenarios के लिए</li>
        <li><strong className="text-white">Session Management:</strong> Interrupt करके बाद में resume कर सकते हो --restore से — progress save होती है</li>
        <li><strong className="text-white">Hash Modes:</strong> 300+ hash types support — हर hash type का अलग optimized kernel है GPU के लिए</li>
        <li><strong className="text-white">Pot File:</strong> Already cracked hashes store होते हैं — duplicate work avoid होता है</li>
        <li><strong className="text-white">Brain Server:</strong> Distributed cracking — कई machines मिलकर एक hash क्रैक कर सकती हैं</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Hashcat प्री-इंस्टॉल्ड आता है। GPU ड्राइवर्स और OpenCL runtime भी ज़रूरी हैं। बिना GPU drivers के Hashcat CPU mode में चलेगा जो बहुत slow है।
      </p>
      <CodeBlock
        title="Hashcat Installation"
        code={`# काली लिनक्स/नेटहंटर में (पहले से है):
hashcat --version

# Debian/Ubuntu:
sudo apt update
sudo apt install hashcat

# Fedora:
sudo dnf install hashcat

# Arch:
sudo pacman -S hashcat

# GPU drivers check:
nvidia-smi    # NVIDIA
clinfo        # OpenCL info

# OpenCL runtime (NVIDIA):
sudo apt install nvidia-opencl-dev

# OpenCL runtime (AMD):
sudo apt install mesa-opencl-icd

# OpenCL runtime (Intel):
sudo apt install intel-opencl-icd

# GPU benchmark:
hashcat -b

# Device info:
hashcat -I

# सभी supported hash modes देखें:
hashcat --help | grep -i "hash mode"`}
      />

      <h2>Basic Usage</h2>
      <p>
        Hashcat का basic usage simple है — हैश फाइल, वर्डलिस्ट, और हैश मोड specify करो। Hash file में एक hash per line होना चाहिए।
      </p>
      <CodeBlock
        title="Basic Hashcat Commands"
        code={`# MD5 crack (mode 0):
hashcat -m 0 hashes.txt wordlist.txt

# SHA1 crack (mode 100):
hashcat -m 100 hashes.txt wordlist.txt

# SHA256 crack (mode 1400):
hashcat -m 1400 hashes.txt wordlist.txt

# NTLM crack (mode 1000):
hashcat -m 1000 hashes.txt wordlist.txt

# bcrypt crack (mode 3200):
hashcat -m 3200 hashes.txt wordlist.txt

# MySQL crack (mode 300):
hashcat -m 300 hashes.txt wordlist.txt

# WordPress crack (mode 400):
hashcat -m 400 hashes.txt wordlist.txt

# Show cracked passwords:
hashcat -m 0 hashes.txt wordlist.txt --show

# Output to file:
hashcat -m 0 hashes.txt wordlist.txt -o cracked.txt

# Show all cracked from pot file:
hashcat -m 0 hashes.txt --show

# Remove cracked hashes from file:
hashcat -m 0 hashes.txt --left`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-m mode</td><td className="py-2 px-3">Hash type specify करें (0=MD5, 100=SHA1, etc.)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-a mode</td><td className="py-2 px-3">Attack mode (0=dict, 1=combo, 3=brute, 6=hybrid wordlist+mask, 7=hybrid mask+wordlist)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o file</td><td className="py-2 px-3">Output file में cracked hashes save करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r file</td><td className="py-2 px-3">Rules file apply करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-w level</td><td className="py-2 px-3">Workload profile (1=low, 2=default, 3=high, 4=nightmare)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--show</td><td className="py-2 px-3">Already cracked hashes दिखाएं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--left</td><td className="py-2 px-3">Uncracked hashes दिखाएं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--force</td><td className="py-2 px-3">GPU errors ignore करें (CPU mode)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--session</td><td className="py-2 px-3">Session name (resume करने के लिए)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--restore</td><td className="py-2 px-3">Interrupted session resume करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--increment</td><td className="py-2 px-3">Password length gradually बढ़ाएं (1 से max तक)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d devices</td><td className="py-2 px-3">Specific GPU devices select करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--hwmon-temp-abort</td><td className="py-2 px-3">GPU temperature limit (throttle protection)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-j / -k</td><td className="py-2 px-3">Rules for wordlist1 / wordlist2 (combination mode)</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--potfile-path</td><td className="py-2 px-3">Custom pot file path</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Attack Modes</h2>
      <p>
        Hashcat में 7 attack modes हैं — हर mode का अपना use case है। सही mode choose करना बहुत important है:
      </p>
      <CodeBlock
        title="All Attack Modes"
        code={`# Mode 0 — Straight/Dictionary Attack:
# वर्डलिस्ट के हर शब्द को directly try करता है
hashcat -m 0 hash.txt -a 0 wordlist.txt

# Mode 1 — Combination Attack:
# दो वर्डलिस्ट्स के शब्दों को combine करता है
hashcat -m 0 hash.txt -a 1 wordlist1.txt wordlist2.txt
# "pass" + "word" = "password", "pass123word", etc.

# Mode 3 — Brute-Force/Mask Attack:
# हर possible combination try करता है
hashcat -m 0 hash.txt -a 3 ?a?a?a?a?a?a
# ?l = lowercase, ?u = uppercase, ?d = digits
# ?s = special chars, ?a = all characters
# ?b = all bytes (0x00-0xff)

# Mode 6 — Hybrid Wordlist + Mask:
# वर्डलिस्ट + mask combine
hashcat -m 0 hash.txt -a 6 wordlist.txt ?d?d?d?d
# "password" + "1234" = "password1234"

# Mode 7 — Hybrid Mask + Wordlist:
# Mask + वर्डलिस्ट combine
hashcat -m 0 hash.txt -a 7 ?d?d?d?d wordlist.txt
# "1234" + "password" = "1234password"

# Mask examples:
# ?u?l?l?l?l?d?d = Abcde12
# ?d?d?d?d?d?d   = 123456 (6 digits)
# ?u?l?l?l?l?l?l?d?d?d = Abcdef123
# ?l?l?l?l?s?d?d = abcd!12`}
      />

      <h2>Hash Types</h2>
      <p>
        Hashcat 300+ hash types support करता है। यहां सबसे common और important hash types दिए गए हैं। हर hash type का अलग mode number है:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Hash Type</th>
              <th className="text-left py-2 px-3 text-neon-green">Mode</th>
              <th className="text-left py-2 px-3 text-neon-green">Speed (approx)</th>
              <th className="text-left py-2 px-3 text-neon-green">कहाँ मिलता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">MD5</td><td className="py-2 px-3">0</td><td className="py-2 px-3">~10 billion/sec (RTX 4090)</td><td className="py-2 px-3">Linux /etc/shadow (old), web apps</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SHA1</td><td className="py-2 px-3">100</td><td className="py-2 px-3">~3 billion/sec</td><td className="py-2 px-3">Git commits, old systems</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SHA256</td><td className="py-2 px-3">1400</td><td className="py-2 px-3">~1 billion/sec</td><td className="py-2 px-3">Linux, databases, blockchain</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SHA512</td><td className="py-2 px-3">1800</td><td className="py-2 px-3">~400 million/sec</td><td className="py-2 px-3">Linux /etc/shadow (default)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">NTLM</td><td className="py-2 px-3">1000</td><td className="py-2 px-3">~15 billion/sec</td><td className="py-2 px-3">Windows SAM, AD</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">NetNTLMv2</td><td className="py-2 px-3">5600</td><td className="py-2 px-3">~2 billion/sec</td><td className="py-2 px-3">Responder captures</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">WPA/WPA2</td><td className="py-2 px-3">2500</td><td className="py-2 px-3">~1 million/sec</td><td className="py-2 px-3">WiFi handshake captures</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">PMKID</td><td className="py-2 px-3">16800</td><td className="py-2 px-3">~1 million/sec</td><td className="py-2 px-3">hcxdumptool captures</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">WPA3</td><td className="py-2 px-3">22000</td><td className="py-2 px-3">~100K/sec</td><td className="py-2 px-3">WPA3 SAE captures</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">bcrypt</td><td className="py-2 px-3">3200</td><td className="py-2 px-3">~100 thousand/sec</td><td className="py-2 px-3">Modern Linux, web apps</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">MySQL</td><td className="py-2 px-3">300</td><td className="py-2 px-3">~5 billion/sec</td><td className="py-2 px-3">MySQL database</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">WordPress (phpass)</td><td className="py-2 px-3">400</td><td className="py-2 px-3">~50 million/sec</td><td className="py-2 px-3">WordPress wp_users</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Kerberoast (TGS)</td><td className="py-2 px-3">13100</td><td className="py-2 px-3">~300 million/sec</td><td className="py-2 px-3">AD Kerberos tickets</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">AS-REP Roast</td><td className="py-2 px-3">18200</td><td className="py-2 px-3">~500 million/sec</td><td className="py-2 px-3">AD AS-REP responses</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">SHA512crypt</td><td className="py-2 px-3">1800</td><td className="py-2 px-3">~50K/sec</td><td className="py-2 px-3">Linux /etc/shadow</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Rule-Based Attacks</h2>
      <p>
        Rules वर्डलिस्ट के शब्दों को modify करके नए candidates generate करते हैं — बहुत effective technique है। Rules से "password" शब्द से "Password1", "p@ssword", "password123" जैसे सैकड़ों variations बनते हैं:
      </p>
      <CodeBlock
        title="Rule-Based Attack"
        code={`# Default rules:
hashcat -m 0 hash.txt wordlist.txt -r rules/best64.rule

# Jumbo rules (most popular):
hashcat -m 0 hash.txt wordlist.txt -r rules/d3ad0ne.rule

# RockYou rules:
hashcat -m 0 hash.txt wordlist.txt -r rules/rockyou-30000.rule

# Multiple rules combine:
hashcat -m 0 hash.txt wordlist.txt -r rules/toggles1.rule -r rules/toggles2.rule

# Rules directory देखें:
ls /usr/share/hashcat/rules/

# Custom rule file बनाएं:
cat > custom.rule << 'EOF'
# हर शब्द के end में numbers जोड़ें:
$1
$2
$3
$1$2$3
# पहला letter capital करें:
c
# a को @ से बदलें:
sa@
# e को 3 से बदलें:
se3
# i को 1 से बदलें:
si1
# o को 0 से बदलें:
so0
# s को $ से बदलें:
ss$
# शब्द को reverse करें:
r
# शब्द duplicate करें:
d
# शब्द के बाद "!" जोड़ें:
$!
EOF

# Custom rules से crack:
hashcat -m 0 hash.txt wordlist.txt -r custom.rule`}
      />

      <h2>Mask Attacks</h2>
      <p>
        Mask attack brute-force है लेकिन pattern-based — length और character set define करते हो। Pure brute-force से बहुत efficient है:
      </p>
      <CodeBlock
        title="Mask Attack Examples"
        code={`# Character sets:
# ?l = abcdefghijklmnopqrstuvwxyz (lowercase)
# ?u = ABCDEFGHIJKLMNOPQRSTUVWXYZ (uppercase)
# ?d = 0123456789 (digits)
# ?s = !@#$%^&*()-_+= (special)
# ?a = ?l?u?d?s (all printable)
# ?b = 0x00-0xff (all bytes)

# 6-digit PIN:
hashcat -m 0 hash.txt -a 3 ?d?d?d?d?d?d

# 8-char lowercase:
hashcat -m 0 hash.txt -a 3 ?l?l?l?l?l?l?l?l

# Uppercase + lowercase + digits (8 chars):
hashcat -m 0 hash.txt -a 3 ?u?l?l?l?l?l?d?d

# Custom charset:
# -1 ?l?d = lowercase + digits
hashcat -m 0 hash.txt -a 3 -1 ?l?d ?1?1?1?1?1?1?1?1

# -1 ?u?l?d = upper + lower + digits
hashcat -m 0 hash.txt -a 3 -1 ?u?l?d ?1?1?1?1?1?1?1?1

# Increment (length 1 से 8 तक):
hashcat -m 0 hash.txt -a 3 ?a?a?a?a?a?a?a?a --increment

# Common password pattern:
# Capital letter + lowercase + digits + special
hashcat -m 0 hash.txt -a 3 -1 ?l?u -2 ?l?d -3 ?s?d ?1?2?2?2?2?2?2?3`}
      />

      <h2>WiFi Password Cracking</h2>
      <p>
        WPA/WPA2/WPA3 handshake captures crack करना Hashcat का popular use case है:
      </p>
      <CodeBlock
        title="WPA/WPA2/WPA3 Crack"
        code={`# Capture to hashcat format convert:
# aircrack-ng से:
aircrack-ng capture.cap -j hashcat_input

# hcxpcapngtool से (PMKID):
hcxpcapngtool capture.pcapng -o hash.txt

# WPA2 handshake crack (mode 2500):
hashcat -m 2500 hashcat_input.hccapx /usr/share/wordlists/rockyou.txt

# PMKID crack (mode 16800):
hashcat -m 16800 hash.txt /usr/share/wordlists/rockyou.txt

# WPA3 (mode 22000):
hashcat -m 22000 hash22000.txt wordlist.txt

# WPA2 with rules:
hashcat -m 2500 hashcat_input.hccapx wordlist.txt -r rules/best64.rule

# Show cracked:
hashcat -m 2500 hashcat_input.hccapx --show

# Target-specific wordlist (CeWL):
cewl https://target-router.com -d 1 -m 5 -w router_wordlist.txt
hashcat -m 2500 hashcat_input.hccapx router_wordlist.txt`}
      />

      <h2>Windows Password Cracking</h2>
      <p>
        Windows NTLM और NetNTLMv2 hashes crack करना penetration testing में common है:
      </p>
      <CodeBlock
        title="NTLM/NetNTLM Crack"
        code={`# NTLM hash crack (mode 1000):
# NTLM hashes कहाँ से मिलेंगे:
# - secretsdump.py (Impacket)
# - Mimikatz (lsadump::sam)
# - Registry SAM export

hashcat -m 1000 ntlm_hashes.txt wordlist.txt

# NetNTLMv2 crack (mode 5600):
# Responder से capture:
hashcat -m 5600 netntlmv2_hashes.txt wordlist.txt

# NTLM with rules:
hashcat -m 1000 ntlm_hashes.txt wordlist.txt -r rules/d3ad0ne.rule

# DCSync hashes (Kerberoast TGS):
hashcat -m 13100 krb5tgs_hashes.txt wordlist.txt

# AS-REP Roast:
hashcat -m 18200 asrep_hashes.txt wordlist.txt

# NTLM mask attack (common patterns):
hashcat -m 1000 ntlm_hashes.txt -a 3 -1 ?u?l?d ?1?1?1?1?1?1?1?1

# DCC2 (Windows cached credentials, mode 2100):
hashcat -m 2100 dcc2_hashes.txt wordlist.txt`}
      />

      <h2>Linux Password Cracking</h2>
      <p>
        Linux /etc/shadow file से password hashes extract करके crack करना:
      </p>
      <CodeBlock
        title="Linux /etc/shadow Crack"
        code={`# Linux shadow file hashes:
# /etc/shadow से hashes extract करें:
sudo unshadow /etc/passwd /etc/shadow > unshadowed.txt

# John से (auto-detect):
john unshadowed.txt --wordlist=/usr/share/wordlists/rockyou.txt

# या Hashcat से (SHA512 mode 1800):
hashcat -m 1800 shadow_hashes.txt wordlist.txt

# MD5-crypt (mode 500):
hashcat -m 500 md5crypt_hashes.txt wordlist.txt

# SHA256-crypt (mode 7400):
hashcat -m 7400 sha256crypt_hashes.txt wordlist.txt

# bcrypt (mode 3200):
hashcat -m 3200 bcrypt_hashes.txt wordlist.txt

# yescrypt (mode 18900 — modern Linux):
hashcat -m 18900 yescrypt_hashes.txt wordlist.txt

# Linux password audit script:
for user in $(cut -d: -f1 /etc/passwd); do
  hash=$(sudo grep "^$user:" /etc/shadow | cut -d: -f2)
  echo "$user:$hash" >> audit_hashes.txt
done
hashcat -m 1800 audit_hashes.txt wordlist.txt`}
      />

      <h2>GPU Optimization</h2>
      <p>
        GPU optimization से cracking speed बहुत बढ़ सकती है। सही settings important हैं:
      </p>
      <CodeBlock
        title="Performance Tuning"
        code={`# GPU benchmark:
hashcat -b

# Device info:
hashcat -I

# Workload profiles:
# -w 1 = Low (laptop, background process)
# -w 2 = Default
# -w 3 = High (dedicated cracking rig)
# -w 4 = Nightmare (system unresponsive)
hashcat -m 0 hash.txt wordlist.txt -w 3

# Multiple GPUs:
hashcat -m 0 hash.txt wordlist.txt -d 1,2,3

# Specific GPU only:
hashcat -m 0 hash.txt wordlist.txt -d 1

# GPU temp limit:
hashcat -m 0 hash.txt wordlist.txt --hwmon-temp-abort=90

# Kernel loops (tune per hash):
hashcat -m 0 hash.txt wordlist.txt -n 64

# NVIDIA power limit:
nvidia-smi -pl 250  # 250 watts

# Fan speed control:
nvidia-smi -pl 250 --gpu-target-temp=80

# OpenCL vector width:
hashcat -m 0 hash.txt wordlist.txt --opencl-vector-width 4`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Hashcat की performance maximize करने के लिए सही tuning ज़रूरी है। GPU utilization, memory management, और workload distribution — सब optimize करना पड़ता है। Enterprise environments में जहां हज़ों hashes crack करने होते हैं, performance tuning बहुत important है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Workload Profile Selection:</strong> -w 3 (high) dedicated cracking rigs के लिए, -w 2 (default) daily use के लिए, -w 4 (nightmare) सिर्फ dedicated machines पर</li>
        <li><strong className="text-white">Kernel Loop Tuning:</strong> -n flag से kernel loops adjust करो — higher values = faster but more GPU memory</li>
        <li><strong className="text-white">Segment Size:</strong> -u flag से segments adjust करो — GPU memory utilization optimize होती है</li>
        <li><strong className="text-white">Multi-GPU Load Balancing:</strong> Hashcat automatically workload distribute करता है — -d flag से specific GPUs assign करो</li>
        <li><strong className="text-white">Temperature Management:</strong> GPU overheating performance throttle करता है — proper cooling essential है</li>
        <li><strong className="text-white">Power Limiting:</strong> nvidia-smi -pl से power limit set करो — efficiency vs performance balance</li>
        <li><strong className="text-white">Batch Processing:</strong> Multiple hash files को sequentially process करो — GPU utilization maximum रहती है</li>
        <li><strong className="text-white">Network Storage Avoid:</strong> Local SSD पर wordlists रखो — network I/O bottleneck बन सकता है</li>
      </ul>
      <CodeBlock
        title="Performance Benchmark Script"
        code={`#!/bin/bash
# Hashcat performance benchmark script

echo "[*] GPU Information:"
nvidia-smi --query-gpu=name,memory.total,temperature.gpu --format=csv

echo "[*] Hashcat Benchmark (MD5):"
hashcat -b -m 0 | grep "Speed"

echo "[*] Hashcat Benchmark (NTLM):"
hashcat -b -m 1000 | grep "Speed"

echo "[*] Hashcat Benchmark (SHA256):"
hashcat -b -m 1400 | grep "Speed"

echo "[*] Hashcat Benchmark (WPA2):"
hashcat -b -m 2500 | grep "Speed"

echo "[*] Hashcat Benchmark (bcrypt):"
hashcat -b -m 3200 | grep "Speed"

echo "[*] All supported modes:"
hashcat --help | grep "Hash mode" | wc -l

# Optimal settings per hash type:
# Fast hashes (MD5, NTLM): -w 3 -n 64
# Medium hashes (SHA256): -w 3 -n 32
# Slow hashes (bcrypt): -w 3 -n 8`}
      />

      <h2>Wordlist Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="glass-card p-4">
          <h4 className="text-neon-green font-mono font-bold">rockyou.txt</h4>
          <p className="text-gray-400 text-sm">14 million passwords — /usr/share/wordlists/rockyou.txt.gz में है, पहले gunzip करो</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-green font-mono font-bold">SecLists</h4>
          <p className="text-gray-400 text-sm">GitHub पर सबसे बड़ी collection — github.com/danielmiessler/SecLists</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-green font-mono font-bold">Weakpass</h4>
          <p className="text-gray-400 text-sm">Gigabyte-sized wordlists — weakpass.com पर available</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-green font-mono font-bold">CeWL + Crunch</h4>
          <p className="text-gray-400 text-sm">Custom wordlists — website crawl या pattern-based generation</p>
        </div>
      </div>
      <CodeBlock
        title="Wordlist Operations"
        code={`# Wordlist stats:
wc -l wordlist.txt

# Sort + unique:
sort wordlist.txt | uniq > unique.txt

# Combine wordlists:
cat wordlist1.txt wordlist2.txt > combined.txt

# Generate with crunch:
crunch 8 8 -t @@@@@%%% -o crunch_wordlist.txt

# CeWL से website-based wordlist:
cewl https://target.com -d 2 -m 5 -w cewl_wordlist.txt

# Prince processor:
pp64.bin < wordlist.txt -o prince_wordlist.txt

# Hashcat utils (combinator, rule-processor):
combinator.bin wordlist1.txt wordlist2.txt > combo.txt`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated Cracking Script"
        code={`#!/bin/bash
# ऑटोमेटिक पासवर्ड ऑडिट स्क्रिप्ट

HASH_FILE="$1"
HASH_TYPE="$2"
WORDLIST="/usr/share/wordlists/rockyou.txt"
OUTPUT="cracked_$(date +%Y%m%d).txt"
RULES="rules/best64.rule"

if [ -z "$HASH_FILE" ]; then
  echo "Usage: $0 <hash_file> <hash_mode>"
  echo "Modes: 0=MD5, 100=SHA1, 1000=NTLM, 1400=SHA256"
  exit 1
fi

echo "[*] Starting password audit..."
echo "[*] Hash mode: $HASH_TYPE"
echo "[*] Wordlist: $WORDLIST"

# Pass 1: Dictionary attack
echo "[+] Pass 1: Dictionary attack"
hashcat -m $HASH_TYPE $HASH_FILE $WORDLIST -o $OUTPUT --session=audit

# Pass 2: Rules attack
echo "[+] Pass 2: Rules attack"
hashcat -m $HASH_TYPE $HASH_FILE $WORDLIST -r $RULES -o $OUTPUT --session=audit

# Pass 3: Common passwords with rules
echo "[+] Pass 3: Common passwords + rules"
hashcat -m $HASH_TYPE $HASH_FILE /usr/share/wordlists/rockyou.txt -r rules/d3ad0ne.rule -o $OUTPUT --session=audit

# Show results
echo "[*] Results:"
hashcat -m $HASH_TYPE $HASH_FILE --show
echo "[*] Cracked passwords saved to: $OUTPUT"`}
      />

      <CodeBlock
        title="Batch Hash Crack Script"
        code={`#!/bin/bash
# Multiple hash types crack करें

HASH_DIR="./hashes"
WORDLIST="/usr/share/wordlists/rockyou.txt"

for hash_file in "$HASH_DIR"/*.txt; do
  filename=$(basename "$hash_file")
  echo "[*] Processing: $filename"

  # Auto-detect hash type (approximate):
  first_hash=$(head -1 "$hash_file")

  if [[ "$first_hash" == *":"* ]]; then
    # Likely shadow file (SHA512):
    hashcat -m 1800 "$hash_file" "$WORDLIST" --session="$filename"
  elif [[ \${#first_hash} -eq 32 ]]; then
    # Likely MD5:
    hashcat -m 0 "$hash_file" "$WORDLIST" --session="$filename"
  elif [[ \${#first_hash} -eq 64 ]]; then
    # Likely SHA256:
    hashcat -m 1400 "$hash_file" "$WORDLIST" --session="$filename"
  fi

  # Show cracked:
  hashcat -m 0 "$hash_file" --show 2>/dev/null
done`}
      />

      <h2>Hashcat vs John vs Rainbow Tables</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">Hashcat</th>
              <th className="text-left py-2 px-3 text-neon-green">John the Ripper</th>
              <th className="text-left py-2 px-3 text-neon-green">Rainbow Tables</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Processor</td><td className="py-2 px-3">GPU-based</td><td className="py-2 px-3">CPU-based</td><td className="py-2 px-3">Pre-computed</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">बहुत तेज़</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Instant lookup</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Hash Modes</td><td className="py-2 px-3">300+</td><td className="py-2 px-3">50+</td><td className="py-2 px-3">Limited</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Disk Space</td><td className="py-2 px-3">Low</td><td className="py-2 px-3">Low</td><td className="py-2 px-3">Very High (GBs)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Salt Support</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GPU Required</td><td className="py-2 px-3">Best with GPU</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Auto-detect</td><td className="py-2 px-3">नहीं (manual mode)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">N/A</td></tr>
            <tr><td className="py-2 px-3 text-white">Best For</td><td className="py-2 px-3">GPU cracking, large batches</td><td className="py-2 px-3">Quick analysis, auto-detect</td><td className="py-2 px-3">Unsalted hashes</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'GPU नहीं मिल रहा / "No devices found"', a: 'GPU drivers install करो: nvidia-smi (NVIDIA) या clinfo (AMD) check करो। OpenCL runtime install करो: nvidia-opencl-dev या mesa-opencl-icd। --force flag से CPU mode में चला सकते हो (बहुत slow)।' },
          { q: 'बहुत धीमा चल रहा है', a: 'Workload profile बढ़ाओ: -w 3 या -w 4। GPU temperature check करो — throttling हो सकती है। अगर CPU mode में हो तो GPU install करो — 100x faster होगा। Rules use करो brute-force की जगह।' },
          { q: 'Session resume नहीं हो रहा', a: '.restore file check करो। hashcat --session=mycrack --restore से resume करो। अगर .restore file delete हो गई है तो दोबारा start करना पड़ेगा। हमेशा --session flag use करो।' },
          { q: 'Hashcat "Integer overflow" error दे रहा है', a: 'Wordlist बहुत बड़ी है या mask बहुत complex है। --increment use करो length gradually बढ़ाने के लिए। Rules file छोटी use करो। Mask length कम करो।' },
          { q: 'bcrypt बहुत धीमा है', a: 'bcrypt intentionally slow design किया गया है — 100K hashes/sec normal है। यह defense mechanism है — bcrypt passwords क्रैक करना मुश्किल होता है। इसलिए bcrypt use करो passwords store करने के लिए।' },
          { q: 'Hash mode नहीं पता', a: 'hashcat --example-hashes | grep -i "hash_value" से mode find करो। hashid tool भी use कर सकते हो: hashid "hash_value"। या hash-identifier use करो। Online: hashcat.net/wiki/doku.php?id=example_hashes' },
          { q: 'CUDA error / out of memory', a: 'GPU memory full है। --force से CPU mode try करो। या -n flag से kernel loops कम करो। Multiple GPUs हैं तो -d से specific GPU select करो।' },
          { q: 'Pot file में results नहीं दिख रहे', a: 'Pot file default location: ~/.local/share/hashcat/hashcat.potfile। Custom path: --potfile-path=custom.pot। --show flag use करो results देखने के लिए।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Password cracking attacks से कैसे बचें — defenders और developers के लिए best practices:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Strong Passwords:</strong> 12+ characters, uppercase + lowercase + digits + special chars — length सबसे important factor है</li>
        <li><strong className="text-white">bcrypt/scrypt/Argon2:</strong> Slow hash functions use करो — cracking time बहुत बढ़ जाता है (bcrypt: 100K/sec vs MD5: 10B/sec)</li>
        <li><strong className="text-white">Salt:</strong> हर password के साथ random salt add करो — rainbow tables useless हो जाते हैं</li>
        <li><strong className="text-white">Pepper:</strong> Application-level secret add करो salt के साथ — database leak होने पर भी protection</li>
        <li><strong className="text-white">Password Policy:</strong> Minimum length, complexity, rotation enforce करो — लेकिन बहुत strict policy users को frustrate करती है</li>
        <li><strong className="text-white">MFA:</strong> Multi-factor authentication enable करो — password leak होने पर भी safe</li>
        <li><strong className="text-white">Account Lockout:</strong> Brute-force attempts limit करो (5 failures = lock) — online attacks रुकेंगे</li>
        <li><strong className="text-white">Password Manager:</strong> Unique complex passwords हर account के लिए — breach impact limited</li>
        <li><strong className="text-white">Breached Password Check:</strong> HaveIBeenPwned API से check करो — compromised passwords block करो</li>
        <li><strong className="text-white">Key Stretching:</strong> PBKDF2, bcrypt, Argon2 — iterations बढ़ाओ — cracking time exponentially बढ़ता है</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Hashcat practice के लिए safe lab बनाना ज़रूरी है:
      </p>
      <CodeBlock
        title="Practice Lab"
        code={`# Virtual Machine setup:
# Kali Linux VM (VirtualBox/VMware)
# GPU passthrough (optional — advanced)

# Practice hashes generate करें:
echo -n "password123" | md5sum
echo -n "password123" | sha1sum
echo -n "password123" | sha256sum

# /etc/shadow copy:
sudo cp /etc/shadow practice_shadow.txt

# Online hash generators:
# hashes.com/en/generate
# crackstation.net (lookup)

# CTF practice:
# TryHackMe — "Crack the Hash" room
# HackTheBox — password cracking challenges
# CryptoPals — crypto challenges

# Safe cracking practice:
# अपने test system के hashes crack करो
# Never crack others' passwords without permission

# Password strength test:
# अपने passwords को Hashcat से test करो
# अगर crack हो जाए तो stronger password बनाओ`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        Advanced cracking techniques जो experienced testers use करते हैं:
      </p>
      <CodeBlock
        title="Advanced Cracking"
        code={`# Prince attack (PRINCE processor):
# Wordlist से combinations बनाता है
pp64.bin < wordlist.txt | hashcat -m 0 hash.txt

# Fingerprint attack (target-specific):
# Target की info से custom wordlist बनाओ (CeWL)
# Name, birthday, pet name, company name combine करो

# Rule stacking:
hashcat -m 0 hash.txt wordlist.txt -r rules/best64.rule -r rules/toggles1.rule

# Markov chains (statistical):
# Probable passwords generate करता है
hashcat -m 0 hash.txt -a 3 --markov-hcstat2 hashcat.hcstat2 ?a?a?a?a?a?a?a?a

# Slow hashes optimization:
# bcrypt के लिए multiple GPU ज़रूरी हैं
# या छोटी wordlist + strong rules use करो

# Pot file (already cracked):
hashcat -m 0 hash.txt wordlist.txt --potfile-path=custom.pot

# Brain (distributed cracking):
hashcat -m 0 hash.txt wordlist.txt --brain-server --brain-password=secret
# दूसरे machines से connect:
hashcat -m 0 hash.txt wordlist.txt --brain-client --brain-password=secret

# Left (uncracked) hashes extract:
hashcat -m 0 hash.txt --left > uncracked.txt`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Hashcat free है?', a: 'हाँ, पूरी तरह free और open source (MIT license)। Commercial use भी free। कोई paid version नहीं है।' },
          { q: 'GPU ज़रूरी है?', a: 'Best performance के लिए हाँ। CPU mode (--force) भी काम करता है लेकिन 100-1000x slower होगा। एक basic GPU भी बहुत फ़र्क लाता है।' },
          { q: 'John the Ripper से better है?', a: 'Speed में Hashcat बेहतर है (GPU)। John auto-detection में बेहतर है। दोनों complementary हैं — दोनों use करो। पहले John से auto-detect, फिर Hashcat से GPU crack।' },
          { q: 'कितने passwords crack हो सकते हैं?', a: 'GPU और hash type पर depend करता है। MD5: 10 billion/sec (RTX 4090)। bcrypt: 100K/sec। Strong passwords (12+ chars, all types) crack करना practically impossible है।' },
          { q: 'Hashcat Android पर चलता है?', a: 'नहीं, GPU acceleration चाहिए। Termux में सिर्फ CPU mode है जो बहुत slow है। Desktop/laptop use करो।' },
          { q: 'Legal use cases क्या हैं?', a: 'Password auditing (अपने systems), penetration testing (authorized), forensics (law enforcement), CTF competitions, security research — सब legal हैं अगर authorization है।' },
          { q: 'Multi-GPU support है?', a: 'हाँ! -d 1,2,3 से multiple GPUs use करो। Hashcat automatically workload distribute करता है। हर GPU independent काम करता है।' },
          { q: 'कैसे पता करें hash type क्या है?', a: 'hashid "hash_value" use करो। या hashcat --example-hashes | grep "hash"। Hash length और format से भी guess कर सकते हो — MD5=32 chars, SHA1=40 chars, SHA256=64 chars।' },
          { q: 'Cloud GPU use कर सकते हैं?', a: 'हाँ! AWS (p3, g4 instances), Google Cloud (Tesla T4/V100), Lambda Labs — सब पर Hashcat चलता है। Spot instances सस्ते मिलते हैं। GPU drivers और OpenCL runtime install करना पड़ेगा।' },
          { q: 'Pot file क्या है?', a: 'Pot file में already cracked hashes store होते हैं। अगर दोबारा same hash crack करने की कोशिश करोगे तो Hashcat pot file से directly result दे देगा — time बचता है। Default location: ~/.local/share/hashcat/hashcat.potfile' },
          { q: 'Rules file कहाँ मिलेगी?', a: '/usr/share/hashcat/rules/ में सब rules हैं। best64.rule (quick), d3ad0ne.rule (thorough), rockyou-30000.rule (massive) — तीनों popular हैं। GitHub पर custom rules भी मिलते हैं।' },
          { q: 'Hashcat vs John the Ripper — कौन सा use करें?', a: 'Speed चाहिए तो Hashcat (GPU)। Auto-detect चाहिए तो John। दोनों use करो — पहले John से hash type detect, फिर Hashcat से GPU crack। दोनों complementary हैं।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        Hashcat real-world penetration testing engagements में regularly use होता है। एक common scenario है enterprise password audit — जब company अपने employees के passwords की strength test करना चाहती है। Penetration testers Hashcat से extracted hashes crack करके weak passwords identify करते हैं और report में recommendations देते हैं।
      </p>
      <p>
        एक real case में, एक company के Active Directory से 5000 NTLM hashes extract हुए (Impacket secretsdump से)। Hashcat से rockyou.txt + best64.rule से 2 घंटे में 60% passwords crack हो गए — जिनमें "Company@123", "Welcome1", "Summer2024!" जैसे common patterns थे। इस report के बाद company ने MFA implement किया और password policy strengthen की।
      </p>
      <p>
        Forensic investigations में भी Hashcat use होता है — law enforcement agencies encrypted drives और password-protected files crack करने के लिए Hashcat use करती हैं। CTF competitions में password cracking challenges standard हैं — TryHackMe, HackTheBox पर dedicated rooms हैं Hashcat practice के लिए।
      </p>

      <h2>Reporting and Output Analysis</h2>
      <p>
        Password cracking results को properly analyze और report करना engagement का critical part है:
      </p>
      <CodeBlock
        title="Results Analysis"
        code={`# Cracked passwords देखें:
hashcat -m 0 hashes.txt --show

# Uncracked hashes:
hashcat -m 0 hashes.txt --left

# Cracked count:
hashcat -m 0 hashes.txt --show | wc -l

# Pot file से all cracked hashes:
cat ~/.local/share/hashcat/hashcat.potfile

# Statistics:
TOTAL=$(wc -l < hashes.txt)
CRACKED=$(hashcat -m 0 hashes.txt --show | wc -l)
PERCENT=$((CRACKED * 100 / TOTAL))
echo "Cracked: $CRACKED/$TOTAL ($PERCENT%)"

# Report generate करो:
echo "=== Password Audit Report ===" > report.txt
echo "Date: $(date)" >> report.txt
echo "Hash type: MD5 (mode 0)" >> report.txt
echo "Total hashes: $TOTAL" >> report.txt
echo "Cracked: $CRACKED ($PERCENT%)" >> report.txt
echo "" >> report.txt
echo "=== Weak Passwords Found ===" >> report.txt
hashcat -m 0 hashes.txt --show >> report.txt`}
      />

      <h2>Alternatives</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Tool</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">खासियत</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">John the Ripper</td><td className="py-2 px-3">Password cracking</td><td className="py-2 px-3">CPU-based, auto-detect, versatile</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Hydra</td><td className="py-2 px-3">Online brute-force</td><td className="py-2 px-3">Network services (SSH, FTP, HTTP)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">RainbowCrack</td><td className="py-2 px-3">Rainbow table attack</td><td className="py-2 px-3">Pre-computed hashes, instant lookup</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Medusa</td><td className="py-2 px-3">Network brute-force</td><td className="py-2 px-3">Parallel authentication testing</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CeWL</td><td className="py-2 px-3">Custom wordlist</td><td className="py-2 px-3">Website-based wordlist generation</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Crunch</td><td className="py-2 px-3">Wordlist generator</td><td className="py-2 px-3">Pattern-based password generation</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Patator</td><td className="py-2 px-3">Multi-protocol brute-force</td><td className="py-2 px-3">Python-based, flexible modules</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Integration with Other Tools</h2>
      <p>
        Hashcat standalone powerful है लेकिन दूसरे tools के साथ combine करने पर complete password audit pipeline बनता है। Hash extraction से लेकर cracking और reporting तक — हर step का specialized tool है।
      </p>
      <CodeBlock
        title="Integration Examples"
        code={`# Impacket + Hashcat (Windows NTLM hashes):
impacket-secretsdump domain/user:password@TARGET_IP
cat hashes.txt | cut -d: -f4 > ntlm_only.txt
hashcat -m 1000 ntlm_only.txt wordlist.txt

# Responder + Hashcat (NetNTLMv2):
responder -I eth0
hashcat -m 5600 netntlmv2.txt wordlist.txt

# CeWL + Hashcat (target-specific wordlist):
cewl https://target.com -d 2 -m 5 -w custom.txt
hashcat -m 1000 hashes.txt custom.txt -r rules/best64.rule

# hcxdumptool + Hashcat (WiFi PMKID):
hcxdumptool -i wlan0mon -o capture.pcapng
hcxpcapngtool capture.pcapng -o hash.txt
hashcat -m 16800 hash.txt wordlist.txt

# John + Hashcat (auto-detect then GPU crack):
john --format=nt hashes.txt --wordlist=wordlist.txt --show
hashcat -m 1000 hashes.txt wordlist.txt

# Mimikatz + Hashcat (domain hashes):
# Mimikatz से NTLM extract करो
# फिर Hashcat से GPU crack:
hashcat -m 1000 mimikatz_output.txt rockyou.txt`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Hashcat real-world penetration testing engagements में regularly use होता है। एक common scenario है enterprise password audit — जब company अपने employees के passwords की strength test करना चाहती है। Penetration testers Hashcat से extracted hashes crack करके weak passwords identify करते हैं और report में recommendations देते हैं।
      </p>
      <p>
        एक real case में, एक company के Active Directory से 5000 NTLM hashes extract हुए (Impacket secretsdump से)। Hashcat से rockyou.txt + best64.rule से 2 घंटे में 60% passwords crack हो गए — जिनमें "Company@123", "Welcome1", "Summer2024!" जैसे common patterns थे। इस report के बाद company ने MFA implement किया और password policy strengthen की।
      </p>
      <p>
        WiFi security audits में भी Hashcat critical role play करता है। WPA2 handshake capture करके Hashcat से crack करते हैं — अगर default router password है तो seconds में crack हो जाता है। Custom wordlists (CeWL से target website से generate) use करके targeted attacks possible हैं। Forensic investigations में law enforcement agencies encrypted files crack करने के लिए Hashcat use करती हैं।
      </p>

      <h2>Performance Tuning</h2>
      <p>
        Hashcat की performance optimize करने के लिए कुछ important tips:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Workload Profile:</strong> -w 3 (high) या -w 4 (nightmare) से GPU utilization maximize करो — desktop responsive रखने के लिए -w 2 use करो</li>
        <li><strong className="text-white">Optimized Kernels:</strong> -O flag enable करो optimized kernels के लिए — 20-50% faster हो सकता है</li>
        <li><strong className="text-white">Segment Size:</strong> --segment-size से memory allocation optimize करो — बड़ी wordlists के लिए useful</li>
        <li><strong className="text-white">Multi-GPU:</strong> -d 1,2,3 से multiple GPUs use करो — workload automatically distribute होता है</li>
        <li><strong className="text-white">Brain Server:</strong> --brain-server से distributed cracking setup करो — multiple machines parallel work करती हैं</li>
        <li><strong className="text-white">Temp Limit:</strong> --hwmon-temp-abort=90 से GPU overheating prevent करो — hardware protection</li>
        <li><strong className="text-white">Backend Selection:</strong> --backend-types=1 (GPU) या 2 (CPU) — GPU faster है but CPU fallback available</li>
        <li><strong className="text-white">Rule Optimization:</strong> छोटी rules first use करो, बड़ी rules बाद में — time management better होता है</li>
      </ul>
      <CodeBlock
        title="Performance Optimization Examples"
        code={`# Maximum GPU performance:
hashcat -m 1000 hashes.txt wordlist.txt -w 3 -O

# Multi-GPU setup:
hashcat -m 1000 hashes.txt wordlist.txt -d 1,2

# Temperature monitoring:
watch -n 1 nvidia-smi

# Session management (resume on crash):
hashcat -m 1000 hashes.txt wordlist.txt --session=audit1
# Crash के बाद:
hashcat --session=audit1 --restore

# Incremental mode (short passwords first):
hashcat -m 1000 hashes.txt wordlist.txt --increment --increment-min 4 --increment-max 8

# Benchmark mode (test GPU speed):
hashcat -b

# Brain server (distributed):
hashcat -m 1000 hashes.txt wordlist.txt --brain-client --brain-host 192.168.1.100`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Password audit results को properly analyze और report करना engagement का critical part है:
      </p>
      <CodeBlock
        title="Audit Reporting"
        code={`# Cracked passwords count:
TOTAL=$(wc -l < hashes.txt)
CRACKED=$(hashcat -m 0 hashes.txt --show | wc -l)
PERCENT=$((CRACKED * 100 / TOTAL))
echo "Cracked: $CRACKED/$TOTAL ($PERCENT%)"

# Export cracked passwords:
hashcat -m 0 hashes.txt --show > cracked.txt

# Uncracked hashes for further analysis:
hashcat -m 0 hashes.txt --left > uncracked.txt

# Password complexity analysis:
echo "=== Password Length Distribution ==="
awk -F: '{print length($2)}' cracked.txt | sort -n | uniq -c | sort -rn

echo "=== Common Password Patterns ==="
grep -iE "(welcome|password|123|company|summer|winter)" cracked.txt

# Report generation:
echo "=== Password Audit Report ===" > report.txt
echo "Date: $(date)" >> report.txt
echo "Hash type: NTLM (mode 1000)" >> report.txt
echo "Total hashes: $TOTAL" >> report.txt
echo "Cracked: $CRACKED ($PERCENT%)" >> report.txt
echo "Method: Dictionary + Rules" >> report.txt
echo "Time: ~2 hours" >> report.txt`}
      />

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>पहले rockyou.txt + best64.rule try करो — 90% weak passwords यहीं crack हो जाते हैं</li>
          <li>bcrypt passwords के लिए छोटी focused wordlist use करो — GPU power waste मत करो</li>
          <li>Session name दो हमेशा --session से — power cut हो तो --restore से resume होगा</li>
          <li>--show से already cracked hashes check करो — duplicate work avoid होगा</li>
          <li>Rules हमेशा use करो — wordlist + rules combination dictionary attack से बहुत effective है</li>
          <li>Pot file check करो पहले — शायद hash पहले से crack हो</li>
          <li>--increment से password length gradually बढ़ाओ — short passwords पहले crack होंगे</li>
          <li>Hash type identify करने के लिए hashid या hash-identifier use करो — wrong mode = no results</li>
          <li>Multiple wordlists combine करो: cat wordlist1.txt wordlist2.txt | sort -u &gt; combined.txt</li>
          <li>GPU temperature monitor करो: nvidia-smi -l 1 — overheating से GPU damage हो सकता है</li>
          <li>--hwmon-temp-abort=90 से temperature limit set करो — safety first</li>
          <li>Enterprise audit में --left से uncracked hashes extract करो — उन्हें John the Ripper में try करो</li>
          <li>Cloud GPU instances use करो expensive hardware बिना — AWS p3, Google Cloud T4, Lambda Labs</li>
          <li>WPA2 cracking के लिए target-specific wordlist (CeWL) सबसे effective है</li>
          <li>Rule stacking use करो — best64 + toggles1 combination से more variations मिलते हैं</li>
          <li>Hashcat --stdout से generated candidates देखो — wordlist + rules combination verify करो</li>
          <li>Large hash lists के लिए --remove flag use करो — cracked hashes automatically remove होते हैं</li>
          <li>bcrypt और scrypt hashes slow crack होते हैं — focused wordlist और small rules use करो</li>
          <li>Pot file backup करो regularly — ~/.local/share/hashcat/hashcat.potfile</li>
          <li>--username flag use करो अगर hash file में username:hash format है</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ Final Warning:</strong> Hashcat एक शक्तिशाली पासवर्ड क्रैकिंग टूल है। इसका इस्तेमाल केवल अधिकृत टेस्टिंग और शैक्षिक उद्देश्यों के लिए ही करें। बिना अनुमति के पासवर्ड क्रैकिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत एक्सेस अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल अपने लैब में अभ्यास करें।
      </div>
    </TutorialLayout>
  )
}
