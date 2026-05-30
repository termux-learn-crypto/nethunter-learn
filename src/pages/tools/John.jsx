import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function John() {
  return (
    <TutorialLayout
      title="john"
      subtitle="John the Ripper — पासवर्ड हैश क्रैकर"
      icon="🔐"
      prev={{ to: '/tool/hydra', label: 'hydra' }}
      next={{ to: '/tool/hashcat', label: 'hashcat' }}
    >
      <h2>What is John the Ripper?</h2>
      <p>
        John the Ripper (JtR) दुनिया का सबसे पॉपुलर ओपन-सोर्स पासवर्ड हैश क्रैकर है। Openwall project का हिस्सा है और 25+ सालों से actively developed हो रहा है। यह टूल हैश्ड पासवर्ड्स को रिवर्स करके प्लेनटेक्स्ट पासवर्ड निकालता है। यह MD5, SHA-1, SHA-256, bcrypt, NTLM, LM, DES, Blowfish जैसे 400+ हैश फॉर्मेट्स सपोर्ट करता है। पेनेट्रेशन टेस्टिंग, सिक्योरिटी ऑडिट, और फॉरेंसिक एनालिसिस में यह एसेंशियल टूल है।
      </p>
      <p>
        John the Ripper को Solar Designer (Alexander Peslyak) ने 1996 में बनाया था। शुरू में यह सिर्फ Unix password hashes क्रैक करता था, लेकिन आज यह हर तरह के हैश को क्रैक कर सकता है। John the Ripper "Jumbo" version में 400+ हैश फॉर्मेट्स हैं और कम्युनिटी लगातार नए फॉर्मेट्स जोड़ती रहती है।
      </p>
      <p>
        John the Ripper दो वर्जन्स में आता है — "core" और "jumbo"। Core version में बेसिक हैश फॉर्मेट्स हैं जबकि Jumbo version में कम्युनिटी कंट्रीब्यूशन्स के साथ 400+ फॉर्मेट्स हैं। Kali Linux में Jumbo version प्री-इंस्टॉल्ड आता है। यह CPU-based क्रैकर है — GPU support John the Ripper Pro में है, लेकिन open-source version में भी बहुत पावरफुल है।
      </p>
      <p>
        John the Ripper का सबसे बड़ा फ़ायदा है इसका स्मार्ट मोड — यह पासवर्ड पैटर्न्स को एनालाइज़ करके intelligent गेसेज़ बनाता है। यह डिक्शनरी अटैक, ब्रूट फोर्स, रूल-बेस्ड अटैक, और इन्क्रीमेंटल मोड सपोर्ट करता है। वर्डलिस्ट से शुरू करो, फिर रूल्स लगाकर वेरिएशन्स ट्राई करो — यही John की ताकत है।
      </p>
      <p>
        John the Ripper सिर्फ पासवर्ड क्रैकिंग नहीं करता — यह SSH keys, ZIP files, RAR files, PDF files, Word documents, और बहुत सारे एन्क्रिप्टेड फॉर्मेट्स को भी क्रैक कर सकता है। इसका फ्लेक्सिबल आर्किटेक्चर इसे हर तरह के पासवर्ड रिकवरी के लिए उपयोगी बनाता है। Red teamers, blue teamers, और forensics experts सभी इसे इस्तेमाल करते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> John the Ripper केवल अधिकृत सुरक्षा ऑडिट, पेनेट्रेशन टेस्टिंग, और अपने स्वयं के पासवर्ड रिकवरी के लिए उपयोग करें। बिना अनुमति के दूसरों के पासवर्ड क्रैक करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत एक्सेस अपराध है।
      </div>

      <h2>History of John the Ripper</h2>
      <p>
        John the Ripper को Alexander Peslyak (Solar Designer) ने 1996 में बनाया था। उस समय Unix systems में /etc/passwd और /etc/shadow फाइल्स में पासवर्ड हैशेज़ स्टोर होते थे। Solar Designer ने एक ऐसा टूल बनाया जो इन हैशेज़ को क्रैक कर सके — और John the Ripper का जन्म हुआ।
      </p>
      <p>
        2000 में John the Ripper को open source किया गया और community ने इसमें नए हैश फॉर्मेट्स जोड़ने शुरू किए। "Jumbo" patch ने इसे 400+ फॉर्मेट्स वाला पावरहाउस बना दिया। आज John the Ripper Openwall project का हिस्सा है और GitHub पर एक्टिव डेवलपमेंट जारी है। यह सभी Linux distributions में उपलब्ध है।
      </p>
      <p>
        2010 में John the Ripper Pro version release हुआ जिसमें GPU acceleration support था। Pro version commercial use के लिए है लेकिन open-source Jumbo version भी बहुत powerful है। Community ने इसमें SSH key cracking, ZIP/RAR cracking, WPA cracking, और Kerberoast hash cracking जैसे features जोड़े। Magripper, Aleksey Cherepanov, और JimF जैसे contributors ने Jumbo version को actively maintain किया।
      </p>
      <p>
        2015 में hashcat ने GPU-based cracking में dominance establish किया, लेकिन John the Ripper ने अपनी unique position maintain रखी — file cracking, SSH key cracking, और flexible rule engine में John आज भी best है। 2020 में yescrypt hash format add हुआ जो modern Linux distributions में default बन रहा है। आज John the Ripper penetration testing, forensics, और security auditing में standard tool है।
      </p>
      <p>
        John the Ripper का ecosystem बहुत बड़ा है — इसके ऊपर कई tools बने हैं: john2convert.py (hash conversion), seed2john (encrypted seed cracking), bitlocker2john (BitLocker recovery), और बहुत कुछ। Openwall team actively new formats add करती रहती है। Bug bounty programs में भी John का use hota hai credential testing के लिए। CREST, OSCP, और CEH certifications में John knowledge required है।
      </p>

      <h2>How John the Ripper Works?</h2>
      <p>
        John the Ripper हैशेड पासवर्ड्स को क्रैक करने के लिए कई तकनीकें इस्तेमाल करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">हैश डिटेक्शन:</strong> ऑटोमैटिकली हैश टाइप पहचानता है — MD5, SHA, bcrypt, NTLM आदि</li>
        <li><strong className="text-white">डिक्शनरी अटैक:</strong> वर्डलिस्ट के हर शब्द को हैश करके compare करता है</li>
        <li><strong className="text-white">रूल-बेस्ड अटैक:</strong> वर्डलिस्ट के शब्दों पर रूल्स लगाकर वेरिएशन्स बनाता है (capitalize, add numbers, l33t speak)</li>
        <li><strong className="text-white">ब्रूट फोर्स:</strong> हर पॉसिबल कॉम्बिनेशन ट्राई करता है</li>
        <li><strong className="text-white">इन्क्रीमेंटल मोड:</strong> कैरेक्टर सेट्स से ऑल पॉसिबल पासवर्ड्स जनरेट करता है</li>
        <li><strong className="text-white">सिंगल क्रैक मोड:</strong> Username से पासवर्ड गेस करता है</li>
        <li><strong className="text-white">एक्सटर्नल मोड:</strong> कस्टम क्रैकिंग लॉजिक लिख सकते हो</li>
        <li><strong className="text-white">मल्टी-थ्रेडिंग:</strong> कई CPU cores पैरेलल में इस्तेमाल करता है</li>
        <li><strong className="text-white">फॉर्मेट प्लगइन्स:</strong> हर हैश टाइप के लिए अलग ऑप्टिमाइज़्ड प्लगइन</li>
        <li><strong className="text-white">सेशन मैनेजमेंट:</strong> क्रैकिंग सेशन सेव/रिज़्यूम कर सकते हो</li>
      </ul>

      <h2>Installation</h2>
      <p>
        Kali Linux में John the Ripper Jumbo version प्री-इंस्टॉल्ड आता है। अगर नहीं है तो कई तरीकों से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="John the Ripper Installation"
        code={`# Kali Linux में प्री-इंस्टॉल्ड:
john --version

# apt से इंस्टॉल:
sudo apt update
sudo apt install john

# Jumbo version (ज़्यादा फॉर्मेट्स):
sudo apt install john

# सोर्स से बिल्ड (Jumbo):
git clone https://github.com/openwall/john.git
cd john/src
./configure && make -s clean && make -sj4

# वर्जन चेक:
john --version

# उपलब्ध फॉर्मेट्स देखें:
john --list=formats

# फॉर्मेट्स की संख्या:
john --list=formats | wc -l`}
      />
      <CodeBlock
        title="macOS Installation"
        code={`# Homebrew से:
brew install john

# MacPorts से:
sudo port install john

# सोर्स से (macOS):
git clone https://github.com/openwall/john.git
cd john/src
./configure && make -s clean && make -sj4

# OpenSSL dependency (macOS):
brew install openssl
export LDFLAGS="-L/usr/local/opt/openssl/lib"
export CPPFLAGS="-I/usr/local/opt/openssl/include"`}
      />
      <CodeBlock
        title="Termux (Android) Installation"
        code={`# Termux में John the Ripper:
pkg update && pkg upgrade
pkg install john

# या सोर्स से:
pkg install git build-essential openssl
git clone https://github.com/openwall/john.git
cd john/src
./configure && make -s clean && make -sj2

# Wordlist download करें:
pkg install wordlists
# या manual:
wget https://github.com/danielmiessler/SecLists/raw/master/Passwords/Leaked-Databases/rockyou.txt.gz
gunzip rockyou.txt.gz`}
      />

      <h2>Basic Usage</h2>
      <p>
        John the Ripper का बेसिक इस्तेमाल बहुत आसान है — हैश फाइल दो और John क्रैक कर देगा। शुरुआत में auto-detect mode use करो जो hash type automatically identify करता है। फिर specific format specify करके targeted cracking करो। Wordlist + rules combination सबसे effective approach है — pure brute force सबसे slow है और सिर्फ last resort में use करो।
      </p>
      <CodeBlock
        title="Basic Commands"
        code={`# Linux shadow फाइल क्रैक करें:
sudo unshadow /etc/passwd /etc/shadow > /tmp/unshadowed.txt
john /tmp/unshadowed.txt

# हैश फाइल क्रैक करें:
john hashes.txt

# स्पेसिफिक फॉर्मेट:
john --format=md5 hashes.txt
john --format=sha256 hashes.txt
john --format=bcrypt hashes.txt

# वर्डलिस्ट अटैक:
john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt

# रूल्स के साथ:
john --wordlist=/usr/share/wordlists/rockyou.txt --rules hashes.txt

# क्रैक्ड पासवर्ड्स देखें:
john --show hashes.txt

# सेशन रिज़्यूम करें:
john --restore

# स्पेसिफिक यूज़र:
john --users=admin hashes.txt`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--wordlist</td><td className="py-2 px-3">वर्डलिस्ट फाइल स्पेसिफाई करें</td><td className="py-2 px-3 font-mono text-xs">--wordlist=rockyou.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--rules</td><td className="py-2 px-3">रूल-बेस्ड वेरिएशन्स लागू करें</td><td className="py-2 px-3 font-mono text-xs">--rules</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--format</td><td className="py-2 px-3">हैश फॉर्मेट स्पेसिफाई करें</td><td className="py-2 px-3 font-mono text-xs">--format=md5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--show</td><td className="py-2 px-3">क्रैक्ड पासवर्ड्स दिखाएं</td><td className="py-2 px-3 font-mono text-xs">--show</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--incremental</td><td className="py-2 px-3">ब्रूट फोर्स मोड</td><td className="py-2 px-3 font-mono text-xs">--incremental</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--single</td><td className="py-2 px-3">सिंगल क्रैक मोड (username-based)</td><td className="py-2 px-3 font-mono text-xs">--single</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--restore</td><td className="py-2 px-3">पिछला सेशन रिज़्यूम करें</td><td className="py-2 px-3 font-mono text-xs">--restore</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--users</td><td className="py-2 px-3">स्पेसिफिक यूज़र्स क्रैक करें</td><td className="py-2 px-3 font-mono text-xs">--users=root,admin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--fork</td><td className="py-2 px-3">मल्टी-प्रोसेस (parallel)</td><td className="py-2 px-3 font-mono text-xs">--fork=4</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--pot</td><td className="py-2 px-3">कस्टम पॉट फाइल</td><td className="py-2 px-3 font-mono text-xs">--pot=my.pot</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--list</td><td className="py-2 px-3">फॉर्मेट्स/रूल्स लिस्ट करें</td><td className="py-2 px-3 font-mono text-xs">--list=formats</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--min-length</td><td className="py-2 px-3">मिनिमम पासवर्ड लेंथ</td><td className="py-2 px-3 font-mono text-xs">--min-length=6</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--max-length</td><td className="py-2 px-3">मैक्सिमम पासवर्ड लेंथ</td><td className="py-2 px-3 font-mono text-xs">--max-length=12</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--session</td><td className="py-2 px-3">सेशन नेम सेट करें</td><td className="py-2 px-3 font-mono text-xs">--session=myrun</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--stdout</td><td className="py-2 px-3">कैंडिडेट्स को stdout पर प्रिंट करें</td><td className="py-2 px-3 font-mono text-xs">--stdout | head -20</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Attack Modes</h2>
      <p>
        John the Ripper कई अटैक मोड्स सपोर्ट करता है — हर मोड का अपना उपयोग है:
      </p>
      <CodeBlock
        title="Attack Modes"
        code={`# 1. डिक्शनरी अटैक (वर्डलिस्ट):
john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt

# 2. रूल-बेस्ड अटैक (वर्डलिस्ट + रूल्स):
john --wordlist=rockyou.txt --rules hashes.txt
john --wordlist=rockyou.txt --rules=jumbo hashes.txt

# 3. सिंगल क्रैक मोड (username से गेस):
john --single hashes.txt
# यह username को modify करके पासवर्ड गेस करता है
# admin → admin123, Admin, dmin, etc.

# 4. इन्क्रीमेंटल मोड (ब्रूट फोर्स):
john --incremental hashes.txt
john --incremental=digits hashes.txt  # सिर्फ नंबर्स
john --incremental=alpha hashes.txt   # सिर्फ लेटर्स

# 5. एक्सटर्नल मोड (कस्टम लॉजिक):
john --external=filter_ascii hashes.txt

# 6. मास्क अटैक (Jumbo):
john --mask='?u?l?l?l?d?d?d' hashes.txt
# ?u = uppercase, ?l = lowercase, ?d = digit

# 7. सबसेट मोड:
john --subsets hashes.txt`}
      />

      <h2>Hash Types</h2>
      <p>
        John the Ripper 400+ हैश फॉर्मेट्स सपोर्ट करता है — Linux, Windows, macOS, databases, web applications, encrypted files, WiFi, और बहुत कुछ। हर hash type का अपना optimized plugin है। Jumbo version में community contributions से formats continuously add होते रहते हैं। Hash type identify करना cracking का पहला step है — गलत format specify करोगे तो crack नहीं होगा।
      </p>
      <CodeBlock
        title="Common Hash Formats"
        code={`# सभी फॉर्मेट्स लिस्ट करें:
john --list=formats

# कॉमन फॉर्मेट्स:
john --format=md5 hashes.txt        # MD5
john --format=sha1 hashes.txt       # SHA-1
john --format=sha256 hashes.txt     # SHA-256
john --format=sha512 hashes.txt     # SHA-512
john --format=bcrypt hashes.txt     # bcrypt
john --format=descrypt hashes.txt   # DES crypt (Unix)
john --format=md5crypt hashes.txt   # MD5 crypt (Linux)
john --format=sha512crypt hashes.txt # SHA-512 crypt
john --format=nt hashes.txt         # NTLM (Windows)
john --format=lm hashes.txt         # LM (Windows)
john --format=netntlmv2 hashes.txt  # NetNTLMv2
john --format=krb5tgs hashes.txt    # Kerberoast
john --format=wpapsk hashes.txt     # WPA/WPA2

# फॉर्मेट टेस्ट करें:
john --test --format=md5

# बेंचमार्क:
john --test`}
      />

      <h2>Rule-based Attacks</h2>
      <p>
        रूल-बेस्ड अटैक John the Ripper की सबसे बड़ी ताकत है:
      </p>
      <CodeBlock
        title="Rule-based Attacks"
        code={`# डिफ़ॉल्ट रूल्स:
john --wordlist=rockyou.txt --rules hashes.txt

# सभी रूल्स:
john --wordlist=rockyou.txt --rules=all hashes.txt

# कस्टम रूल बनाएं (john.conf में):
# [List.Rules:MyRule]
# Az"[0-9][0-9]"    # शब्द के अंत में 2 नंबर जोड़ें
# c                 # पहला लेटर capitalize करें
# $1                # अंत में '1' जोड़ें
# sa@               # 'a' को '@' से बदलें (l33t speak)
# so0               # 'o' को '0' से बदलें

# रूल्स कैसे काम करते हैं:
# पासवर्ड "admin" पर रूल्स लगाओ:
# admin → admin123  (Az"[0-9][0-9]")
# admin → Admin     (c)
# admin → admin1    ($1)
# admin → @dmin     (sa@)
# admin → adm1n     (si1)

# कस्टम रूल फाइल:
john --wordlist=rockyou.txt --rules=myrules.conf hashes.txt`}
      />

      <h2>Windows Password Cracking</h2>
      <p>
        Windows passwords क्रैक करने के लिए SAM और NTDS.dit फाइल्स चाहिए:
      </p>
      <CodeBlock
        title="Windows Password Cracking"
        code={`# SAM और SYSTEM फाइल्स से हैशेज़ निकालें:
# (Windows पर या impacket से)
secretsdump.py -sam SAM -system SYSTEM LOCAL

# NTDS.dit फाइल से:
secretsdump.py -ntds ntds.dit -system SYSTEM LOCAL

# हैशेज़ फाइल में सेव करें:
# admin:500:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::

# John से NTLM क्रैक करें:
john --format=nt hashes.txt
john --format=nt --wordlist=rockyou.txt hashes.txt

# NetNTLMv2 (Responder से कैप्चर):
john --format=netntlmv2 captured_hashes.txt

# Kerberoast hashes:
john --format=krb5tgs kerberoast_hashes.txt

# क्रैक्ड पासवर्ड्स देखें:
john --show --format=nt hashes.txt`}
      />

      <h2>Linux Password Cracking</h2>
      <CodeBlock
        title="Linux Password Cracking"
        code={`# Shadow फाइल से हैशेज़ निकालें:
sudo unshadow /etc/passwd /etc/shadow > /tmp/unshadowed.txt

# क्रैक करें:
john /tmp/unshadowed.txt
john --wordlist=rockyou.txt /tmp/unshadowed.txt
john --wordlist=rockyou.txt --rules /tmp/unshadowed.txt

# स्पेसिफिक यूज़र:
john --users=root /tmp/unshadowed.txt

# हैश टाइप डिटेक्ट करें:
# $1$ = MD5 crypt
# $5$ = SHA-256 crypt
# $6$ = SHA-512 crypt
# $y$ = yescrypt (modern)

# SSH key क्रैक करें (passphrase):
ssh2john id_rsa > ssh_hash.txt
john --wordlist=rockyou.txt ssh_hash.txt`}
      />

      <h2>File Password Cracking</h2>
      <p>
        John the Ripper सिर्फ hash files crack नहीं करता — यह encrypted files को भी crack कर सकता है। ZIP, RAR, PDF, Office, KeePass, WPA handshakes, SSH keys — सबके लिए dedicated tools हैं जो hash extract करते हैं और John crack करता है। Forensic investigation में यह बहुत useful है।
      </p>
      <CodeBlock
        title="Archive File Cracking"
        code={`# ZIP फाइल:
zip2john protected.zip > zip_hash.txt
john --wordlist=rockyou.txt zip_hash.txt

# RAR फाइल:
rar2john protected.rar > rar_hash.txt
john --wordlist=rockyou.txt rar_hash.txt

# 7z फाइल:
7z2john protected.7z > 7z_hash.txt
john --wordlist=rockyou.txt 7z_hash.txt

# TAR.GZ encrypted:
# tar encrypted archives के लिए direct support limited है
# पहले extract करो, फिर individual files crack करो

# क्रैक्ड password से extract करो:
unzip -P cracked_password protected.zip
unrar x -p"cracked_password" protected.rar
7z x -p"cracked_password" protected.7z`}
      />
      <CodeBlock
        title="Document and Database Cracking"
        code={`# PDF फाइल:
pdf2john protected.pdf > pdf_hash.txt
john --wordlist=rockyou.txt pdf_hash.txt

# Word/Excel फाइल:
office2john protected.docx > office_hash.txt
john --wordlist=rockyou.txt office_hash.txt

# LibreOffice encrypted:
libreoffice2john protected.odt > lo_hash.txt
john --wordlist=rockyou.txt lo_hash.txt

# KeePass डेटाबेस:
keepass2john database.kdbx > keepass_hash.txt
john --wordlist=rockyou.txt keepass_hash.txt

# Bitcoin wallet:
bitcoin2john wallet.dat > bitcoin_hash.txt
john --wordlist=rockyou.txt bitcoin_hash.txt

# macOS Keychain:
keychain2john login.keychain > keychain_hash.txt
john --wordlist=rockyou.txt keychain_hash.txt`}
      />
      <CodeBlock
        title="Network and Wireless Cracking"
        code={`# WPA/WPA2 हैंडशेक:
wpapcap2john capture.cap > wpa_hash.txt
john --wordlist=rockyou.txt wpa_hash.txt

# SSH key passphrase:
ssh2john id_rsa > ssh_hash.txt
john --wordlist=rockyou.txt ssh_hash.txt

# PuTTY key:
putty2john private.ppk > putty_hash.txt
john --wordlist=rockyou.txt putty_hash.txt

# SSL certificate passphrase:
openssl pkcs12 -in cert.p12 -nocerts -out key.pem
# John directly PEM files support करता है

# Network capture (NTLMv2):
# Responder से captured hashes:
john --format=netntlmv2 /usr/share/responder/logs/SMB-*.txt

# Kerberoast TGS:
john --format=krb5tgs tgs_hashes.txt`}
      />

      <h2>Scripting & Automation</h2>
      <p>
        John the Ripper को स्क्रिप्ट्स में इस्तेमाल कर सकते हो — batch processing, automated cracking, और result reporting सब script कर सकते हो। Penetration testing engagements में automation बहुत ज़रूरी है जब हज़ारों hashes process करने हों। CI/CD pipelines में भी password auditing automate कर सकते हो।
      </p>
      <CodeBlock
        title="Automation Script 1 — Auto Crack"
        code={`#!/bin/bash
# ऑटो-डिटेक्ट और क्रैक
HASH_FILE="$1"
WORDLIST="/usr/share/wordlists/rockyou.txt"

if [ -z "$HASH_FILE" ]; then
    echo "Usage: $0 <hash_file>"
    exit 1
fi

# हैश टाइप डिटेक्ट करें
FORMAT=$(john --list=formats 2>/dev/null | head -1)

echo "[+] हैश फाइल: $HASH_FILE"
echo "[+] वर्डलिस्ट: $WORDLIST"
echo "[+] क्रैकिंग शुरू..."

# वर्डलिस्ट + रूल्स से क्रैक करें
john --wordlist="$WORDLIST" --rules "$HASH_FILE"

# रिजल्ट्स दिखाएं
echo ""
echo "[+] क्रैक्ड पासवर्ड्स:"
john --show "$HASH_FILE"`}
      />
      <CodeBlock
        title="Automation Script 2 — Multi Hash File"
        code={`#!/bin/bash
# कई हैश फाइल्स प्रोसेस करें
HASH_DIR="$1"
WORDLIST="/usr/share/wordlists/rockyou.txt"
OUTPUT_DIR="/tmp/john_results"

mkdir -p "$OUTPUT_DIR"

for hashfile in "$HASH_DIR"/*.txt; do
    filename=$(basename "$hashfile")
    echo "[+] प्रोसेसिंग: $filename"

    john --wordlist="$WORDLIST" --rules \
         --pot="$OUTPUT_DIR/$filename.pot" \
         "$hashfile"

    john --show --pot="$OUTPUT_DIR/$filename.pot" \
         "$hashfile" > "$OUTPUT_DIR/$filename.cracked"
done

echo "[+] सभी रिजल्ट्स: $OUTPUT_DIR/"`}
      />
      <CodeBlock
        title="Automation Script 3 — Wordlist Generation"
        code={`#!/bin/bash
# John से कस्टम वर्डलिस्ट बनाएं
TARGET="$1"

# John stdout मोड से कैंडिडेट्स जनरेट करें:
john --stdout --incremental > /tmp/all_candidates.txt
john --stdout --incremental=digits > /tmp/digits_only.txt
john --stdout --incremental=alpha > /tmp/alpha_only.txt

# रूल्स के साथ वर्डलिस्ट एक्सपेंड करें:
john --wordlist=/tmp/base.txt --rules --stdout > /tmp/expanded.txt

# मास्क से जनरेट:
john --stdout --mask='?u?l?l?l?d?d?d' > /tmp/mask_candidates.txt

echo "[+] कैंडिडेट्स जनरेट हो गए"`}
      />
      <CodeBlock
        title="Automation Script 4 — Reporting"
        code={`#!/bin/bash
# John cracking results report generator

HASH_FILE="$1"
REPORT="/tmp/john_report_$(date +%Y%m%d_%H%M%S).txt"

echo "=== John the Ripper Audit Report ===" > "$REPORT"
echo "Date: $(date)" >> "$REPORT"
echo "Hash File: $HASH_FILE" >> "$REPORT"
echo "" >> "$REPORT"

total=$(wc -l < "$HASH_FILE")
cracked=$(john --show "$HASH_FILE" 2>/dev/null | grep -c ":")

echo "Total Hashes: $total" >> "$REPORT"
echo "Cracked: $cracked" >> "$REPORT"
if [ "$total" -gt 0 ]; then
    echo "Success Rate: $((cracked * 100 / total))%" >> "$REPORT"
fi
echo "" >> "$REPORT"

echo "--- Cracked Passwords ---" >> "$REPORT"
john --show "$HASH_FILE" >> "$REPORT" 2>/dev/null

echo "" >> "$REPORT"
echo "--- Password Length Distribution ---" >> "$REPORT"
john --show "$HASH_FILE" 2>/dev/null | cut -d: -f2 | \
    awk '{print length}' | sort -n | uniq -c | sort -rn >> "$REPORT"

echo "[+] Report saved: $REPORT"
cat "$REPORT"`}
      />

      <h2>Comparison Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">John the Ripper</th>
              <th className="text-left py-2 px-3 text-neon-green">Hashcat</th>
              <th className="text-left py-2 px-3 text-neon-green">Hydra</th>
              <th className="text-left py-2 px-3 text-neon-green">CrackStation</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">टाइप</td><td className="py-2 px-3">हैश क्रैकर</td><td className="py-2 px-3">हैश क्रैकर</td><td className="py-2 px-3">लॉगिन ब्रूट फोर्स</td><td className="py-2 px-3">ऑनलाइन लुकअप</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GPU सपोर्ट</td><td className="py-2 px-3">नहीं (Pro में हाँ)</td><td className="py-2 px-3">हाँ (OpenCL/CUDA)</td><td className="py-2 px-3">N/A</td><td className="py-2 px-3">N/A</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">फॉर्मेट्स</td><td className="py-2 px-3">400+</td><td className="py-2 px-3">300+</td><td className="py-2 px-3">50+ प्रोटोकॉल्स</td><td className="py-2 px-3">N/A</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">रूल इंजन</td><td className="py-2 px-3">बहुत पावरफुल</td><td className="py-2 px-3">पावरफुल</td><td className="py-2 px-3">N/A</td><td className="py-2 px-3">N/A</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्पीड</td><td className="py-2 px-3">तेज़ (CPU)</td><td className="py-2 px-3">सबसे तेज़ (GPU)</td><td className="py-2 px-3">नेटवर्क पर निर्भर</td><td className="py-2 px-3">N/A</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">फाइल क्रैकिंग</td><td className="py-2 px-3">हाँ (ZIP, RAR, PDF)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">N/A</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">सिंगल क्रैक</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">N/A</td><td className="py-2 px-3">N/A</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कीमत</td><td className="py-2 px-3">फ्री (ओपन सोर्स)</td><td className="py-2 px-3">फ्री (ओपन सोर्स)</td><td className="py-2 px-3">फ्री (ओपन सोर्स)</td><td className="py-2 px-3">फ्री (वेब)</td></tr>
            <tr><td className="py-2 px-3 text-white">बेस्ट फॉर</td><td className="py-2 px-3">फाइल/SSH/फ्लेक्सिबल</td><td className="py-2 px-3">हाई-स्पीड हैश क्रैकिंग</td><td className="py-2 px-3">ऑनलाइन लॉगिन अटैक</td><td className="py-2 px-3">क्विक हैश लुकअप</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'John हैश डिटेक्ट नहीं कर रहा', a: 'हैश फॉर्मेट मैन्युअली स्पेसिफाई करो: john --format=md5 hashes.txt। john --list=formats से उपलब्ध फॉर्मेट्स देखो।' },
          { q: 'बहुत स्लो क्रैक हो रहा है', a: '--fork=N से मल्टी-प्रोसेसिंग यूज़ करो (N = CPU cores)। वर्डलिस्ट + रूल्स से शुरू करो, ब्रूट फोर्स बाद में।' },
          { q: 'क्रैक्ड पासवर्ड्स नहीं दिख रहे', a: 'john --show hashes.txt कमांड यूज़ करो। पॉट फाइल चेक करो: ~/.john/john.pot' },
          { q: 'Format not found error', a: 'John Jumbo version इंस्टॉल करो — core version में कम फॉर्मेट्स हैं। apt install john या सोर्स से बिल्ड करो।' },
          { q: 'Session lost हो गया', a: '--session=name फ्लैग यूज़ करो। john --restore से रिज़्यूम करो। ऑटो-सेव हर 10 मिनट पर होता है।' },
          { q: 'No password hashes loaded', a: 'हैश फाइल फॉर्मेट चेक करो। हर लाइन में user:hash होना चाहिए। एक्स्ट्रा स्पेस/लाइन्स हटाओ।' },
          { q: 'Memory error आ रहा है', a: '--fork कम करो। बड़ी वर्डलिस्ट को छोटे हिस्सों में बांटो। --max-length सेट करो।' },
          { q: 'bcrypt बहुत स्लो है', a: 'bcrypt intentionally slow है (security के लिए)। GPU support नहीं है John में — Hashcat यूज़ करो bcrypt के लिए।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        John the Ripper attacks से कैसे बचें — defense-in-depth approach use करो। कोई single technique enough नहीं है, multiple layers of security implement करो।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">स्ट्रॉन्ग पासवर्ड्स:</strong> लंबे (16+ chars), कॉम्प्लेक्स पासवर्ड्स — John से क्रैक होने में सालों लगेंगे</li>
        <li><strong className="text-white">bcrypt/argon2:</strong> स्लो हैशिंग एल्गोरिदम यूज़ करो — MD5/SHA मत करो। Argon2id सबसे best है</li>
        <li><strong className="text-white">सॉल्ट:</strong> हर पासवर्ड के लिए यूनिक सॉल्ट — रेनबो टेबल बेकार हो जाएगी</li>
        <li><strong className="text-white">पासवर्ड पॉलिसी:</strong> मिनिमम 12 chars, complexity requirements, 90-day rotation</li>
        <li><strong className="text-white">अकाउंट लॉकआउट:</strong> 5 गलत attempts पर 30-minute lock — brute force slow हो जाएगी</li>
        <li><strong className="text-white">MFA:</strong> मल्टी-फैक्टर ऑथेंटिकेशन — पासवर्ड लीक होने पर भी सुरक्षित</li>
        <li><strong className="text-white">हैश मॉनिटरिंग:</strong> /etc/shadow और NTDS.dit access alerts setup करो</li>
        <li><strong className="text-white">पासवर्ड ऑडिट:</strong> रेगुलरली John/Hydra से अपने पासवर्ड्स टेस्ट करो — proactive defense</li>
        <li><strong className="text-white">क्रेडेंशियल गार्ड:</strong> Windows पर LSASS protection, credential guard enable करो</li>
        <li><strong className="text-white">लॉगिंग:</strong> SSH, RDP, SMB लॉगिंग — सस्पीशियस लॉगिन डिटेक्ट करो</li>
      </ul>
      <p>
        Password cracking defense checklist: अगर आपका password "Season + Year + Special" pattern follow करता है (जैसे "Summer2024!") तो यह rule-based attack से minutes में crack हो जाएगा। Random passwords use करो या password manager recommend करो। Passphrases (multiple random words) भी effective हैं — "correct horse battery staple" जैसे।
      </p>

      <h2>Lab Environment Setup</h2>
      <p>
        John the Ripper practice के लिए safe lab environment बनाना ज़रूरी है। Virtual machines use करो ताकि accidentally production systems पर affect न पड़े। Practice hash files बनाओ, cracking techniques try करो, और reporting skills develop करो।
      </p>
      <CodeBlock
        title="Practice Lab Setup"
        code={`# टेस्ट हैशेज़ बनाएं:
# MD5 हैश:
echo -n "password123" | md5sum

# SHA-256 हैश:
echo -n "password123" | sha256sum

# Linux shadow फॉर्मेट:
# user:$6$salt$hash:18000:0:99999:7:::

# John के साथ प्रैक्टिस:
echo "testuser:e10adc3949ba59abbe56e057f20f883e" > /tmp/test.txt
john --format=md5 /tmp/test.txt

# Multiple hashes practice file:
cat > /tmp/practice_hashes.txt << 'EOF'
admin:e10adc3949ba59abbe56e057f20f883e
user1:5f4dcc3b5aa765d61d8327deb882cf99
root:21232f297a57a5a743894a0e4a801fc3
test:d8578edf8458ce06fbc5bb76a58c5ca4
EOF

john --format=md5 /tmp/practice_hashes.txt
john --show /tmp/practice_hashes.txt`}
      />
      <CodeBlock
        title="Practice Platforms"
        code={`# CrackMe challenges:
# crackmes.one — प्रैक्टिस चैलेंजेज़
# crackmes.one पर John-compatible hashes download करो

# TryHackMe — John room:
# tryhackme.com पर "John the Ripper" room
# Step-by-step guided practice

# HackTheBox — पासवर्ड क्रैकिंग मशीन्स:
# hackthebox.com पर retired machines
# "Jerry", "Shocker" जैसी machines

# VulnHub — offline practice:
# vulnhub.com से VMs download करो
# अपने lab में crack करो

# Custom practice hashes बनाएं:
python3 -c "
import hashlib
passwords = ['password', '123456', 'admin', 'letmein', 'welcome']
for p in passwords:
    h = hashlib.md5(p.encode()).hexdigest()
    print(f'{p}:{h}')
" > /tmp/custom_hashes.txt`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced John Usage"
        code={`# मल्टी-थ्रेडेड क्रैकिंग:
john --fork=4 --wordlist=rockyou.txt hashes.txt

# कस्टम कैरेक्टर सेट:
john --incremental --min-length=8 --max-length=12 hashes.txt

# कस्टम रूल (john.conf में):
# [List.Rules:Custom]
# Az"[0-9][0-9][0-9]"
# c $1 $2 $3
# sa@ so0 si1

# वर्डलिस्ट मर्ज करें:
cat wordlist1.txt wordlist2.txt | sort -u > merged.txt

# हैशेज़ एक्सट्रैक्ट करें:
# shadow फाइल से:
cut -d: -f2 /etc/shadow | grep -v '!' | grep -v '*' > hashes.txt

# पॉट फाइल क्लीन करें (फिर से क्रैक करने के लिए):
rm ~/.john/john.pot

# ड्राई रन (कैंडिडेट्स देखो, क्रैक मत करो):
john --stdout --wordlist=rockyou.txt --rules | head -20`}
      />
      <CodeBlock
        title="Hash Extraction Techniques"
        code={`# Active Directory NTDS.dit extraction:
secretsdump.py -just-dc-ntlm domain/user:password@DC_IP

# Remote SAM dump:
secretsdump.py -sam SAM -system SYSTEM -security SECURITY LOCAL

# Linux /etc/shadow से direct extraction:
awk -F: '$2 != "!" && $2 != "*" && $2 != "!!" {print $1":"$2}' /etc/shadow > linux_hashes.txt

# Kerberoast TGS tickets extraction:
GetUserSPNs.py domain/user:password -dc-ip DC_IP -request

# AS-REP Roasting:
GetNPUsers.py domain/ -usersfile users.txt -format hashcat -dc-ip DC_IP

# WiFi WPA handshakes:
aircrack-ng -j wpa_hash capture.cap

# BitLocker recovery:
bitlocker2john -i encrypted.vbk > bitlocker_hash.txt

# LUKS encrypted volume:
luks2john encrypted.img > luks_hash.txt`}
      />
      <CodeBlock
        title="Custom Rules Engine"
        code={`# john.conf में कस्टम रूल्स:

# [List.Rules:CorporatePolicy]
# Minimum 8 chars, uppercase, lowercase, digit, special
# Az"[0-9]" c $!
# Az"[0-9][0-9]" c $! $@
# Az"[0-9][0-9][0-9]" c $! $@

# [List.Rules:L33tSpeak]
# sa@ so0 si1 se3 ss$ st7
# c sa@ so0 si1
# c se3 ss$ st7

# [List.Rules:YearAppend]
# Az"20[0-9][0-9]"
# c Az"20[0-9][0-9]"

# [List.Rules:PasswordSpray]
# Company name variations
# Az"Company" c
# Az"company" c
# Az"COMPANY" c

# कस्टम रूल्स टेस्ट करें:
john --wordlist=base.txt --rules=CorporatePolicy --stdout | head -50

# रूल्स combine करें:
john --wordlist=rockyou.txt --rules=CorporatePolicy --rules=L33tSpeak hashes.txt`}
      />

      <h2>Performance Tuning</h2>
      <p>
        John the Ripper की performance optimize करने के लिए कई techniques हैं। CPU-bound cracking में हर optimization significant time savings दे सकती है। Large hash sets पर proper tuning बहुत ज़रूरी है।
      </p>
      <CodeBlock
        title="Performance Optimization"
        code={`# CPU cores utilize करें:
john --fork=$(nproc) --wordlist=rockyou.txt hashes.txt

# OpenMP support (parallel processing):
export OMP_NUM_THREADS=8
john --wordlist=rockyou.txt hashes.txt

# Memory-efficient cracking:
john --wordlist=rockyou.txt --rules --max-length=12 hashes.txt

# Benchmark test (अपनी machine की speed check):
john --test --format=md5
john --test --format=sha256
john --test --format=bcrypt
john --test --format=nt

# Session management (long runs):
john --session=audit1 --wordlist=rockyou.txt --rules hashes.txt
# बाद में resume:
john --restore=audit1

# Selective cracking (पहले easy hashes):
john --single hashes.txt          # username-based (fastest)
john --wordlist=rockyou.txt hashes.txt  # dictionary
john --wordlist=rockyou.txt --rules hashes.txt  # rules
john --incremental hashes.txt     # brute force (slowest)

# Hash type priority:
# MD5 → fastest (millions/sec)
# SHA-256 → fast (hundreds of thousands/sec)
# bcrypt → slow (hundreds/sec)
# इसलिए पहले easy hashes crack करो`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Penetration testing reports के लिए John के output को properly format करना ज़रूरी है। Clients को meaningful data दिखाना होता है — कितने passwords crack हुए, कितने time लगा, password policy कैसी है।
      </p>
      <CodeBlock
        title="Results Export and Analysis"
        code={`# क्रैक्ड passwords export:
john --show hashes.txt > cracked_results.txt

# Statistics:
total=$(wc -l < hashes.txt)
cracked=$(john --show hashes.txt | grep -c ":")
echo "Total: $total, Cracked: $cracked"
echo "Percentage: $((cracked * 100 / total))%"

# Password length analysis:
john --show hashes.txt | cut -d: -f2 | awk '{print length}' | sort -n | uniq -c | sort -rn

# Common patterns detect करें:
john --show hashes.txt | cut -d: -f2 | grep -iE "(password|1234|admin|qwerty)" | wc -l

# Pot file से all cracked passwords:
cat ~/.john/john.pot | cut -d: -f2 | sort -u > all_passwords.txt

# Report format:
# - Total hashes analyzed
# - Cracked percentage
# - Average crack time
# - Most common patterns
# - Policy compliance assessment
# - Recommendations`}
      />
      <CodeBlock
        title="Password Policy Assessment"
        code={`# क्रैक्ड passwords का analysis:

# Minimum length check:
john --show hashes.txt | cut -d: -f2 | awk 'length &lt; 8' | wc -l

# Complexity check (uppercase, lowercase, digit, special):
john --show hashes.txt | cut -d: -f2 | grep -P '[A-Z]' | grep -P '[a-z]' | grep -P '[0-9]' | wc -l

# Dictionary word check:
john --show hashes.txt | cut -d: -f2 | grep -Fxf /usr/share/wordlists/rockyou.txt | wc -l

# Repeated characters:
john --show hashes.txt | cut -d: -f2 | grep -P '(.)\\1{2,}' | wc -l

# Username-based passwords:
john --single --show hashes.txt | grep -c ":"

# Report template:
echo "=== Password Audit Report ==="
echo "Date: $(date)"
echo "Total Accounts: $total"
echo "Cracked: $cracked ($((cracked * 100 / total))%)"
echo "Weak Passwords (< 8 chars): $(weak_count)"
echo "Policy Violations: $(violation_count)"
echo "Recommendation: Implement MFA + stronger policy"}`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'John vs Hashcat — कौन बेहतर है?', a: 'दोनों अलग-अलग स्ट्रेंथ्स। John CPU-based है, फाइल क्रैकिंग में बेहतर। Hashcat GPU-based है, हाई-स्पीड हैश क्रैकिंग में बेस्ट। दोनों यूज़ करो!' },
          { q: 'क्या John फ्री है?', a: 'हाँ, John the Ripper open source (GPLv2) है। Pro version (GPU support) paid है।' },
          { q: 'WPA पासवर्ड क्रैक कर सकता है?', a: 'हाँ! wpapcap2john से हैश निकालो, फिर john --wordlist=rockyou.txt से क्रैक करो।' },
          { q: 'ZIP पासवर्ड क्रैक कर सकता है?', a: 'हाँ! zip2john protected.zip > hash.txt फिर john hash.txt।' },
          { q: 'GPU support क्यों नहीं है?', a: 'Open-source version में GPU support नहीं है। John the Ripper Pro (paid) में GPU support है। GPU के लिए Hashcat बेहतर है।' },
          { q: 'कितने फॉर्मेट्स सपोर्ट करता है?', a: 'Jumbo version में 400+ फॉर्मेट्स हैं। john --list=formats से सभी देख सकते हो।' },
          { q: 'क्रैकिंग रोक कर बाद में कैसे जारी रखें?', a: 'Ctrl+C से रोको, फिर john --restore से रिज़्यूम करो। ऑटो-सेव हर 10 मिनट पर होता है।' },
          { q: 'सबसे तेज़ क्रैकिंग कैसे करें?', a: 'वर्डलिस्ट + रूल्स से शुरू करो (सबसे तेज़)। --fork=N से मल्टी-प्रोसेसिंग। ब्रूट फोर्स लास्ट में (सबसे स्लो)।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        Corporate Penetration Test में John the Ripper का typical use case: Red teamer ने Responder से NetNTLMv2 hash capture किया और John से 4 घंटे में "Summer2024!" password crack कर लिया। यह password 12 characters का था लेकिन common pattern (Season + Year + Special) use करता था। Rule-based attack में यह easily crack हो गया। इससे domain admin access मिल गया।
      </p>
      <p>
        Forensic investigation में John का उपयोग: Law enforcement ने encrypted ZIP file seize किया जिसमें evidence था। zip2john से hash extract किया और custom wordlist (suspect के personal details से बनाई) से 2 घंटे में password मिल गया। यह file cracking में John की strength है — ZIP, RAR, PDF, Office files सब crack होते हैं।
      </p>
      <p>
        Bug bounty program में security researcher ने company के password policy audit के लिए John use किया। 10,000 leaked hashes में से 60% 24 घंटे में crack हो गए — ज्यादातर "Company123!" जैसे predictable passwords थे। Report submit करने पर company ने password policy strengthen की और mandatory MFA implement किया। यह responsible use case है।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        John the Ripper अकेले भी powerful है, लेकिन दूसरे tools के साथ combine करने पर और भी ज़्यादा effective बन जाता है। Penetration testing workflow में John को विभिन्न stages पर use किया जाता है।
      </p>
      <CodeBlock
        title="John + Impacket Combo"
        code={`# Impacket secretsdump से hashes extract:
secretsdump.py domain/user:password@192.168.1.10

# Output:
# Administrator:500:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::

# John से crack करें:
echo "Administrator:500:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:" > ntlm_hashes.txt
john --format=nt --wordlist=rockyou.txt ntlm_hashes.txt

# Crack results:
john --show --format=nt ntlm_hashes.txt

# Workflow:
# 1. Impacket → hash extraction
# 2. John → hash cracking
# 3. cracked password → lateral movement
# 4. Repeat with new credentials`}
      />
      <CodeBlock
        title="John + Hashcat Pipeline"
        code={`# John और Hashcat को pipeline में use करें:

# Step 1: John से quick pass (rules + wordlist):
john --wordlist=rockyou.txt --rules hashes.txt

# Step 2: John के बाद remaining hashes Hashcat को:
john --show hashes.txt | grep -v "^$" > cracked.txt
# जो crack नहीं हुए वो extract करो:
hashcat --show hashes.txt 2>/dev/null || true

# Step 3: Hashcat GPU power से बाकी crack करो:
hashcat -m 1000 -a 0 remaining_hashes.txt rockyou.txt
hashcat -m 1000 -a 3 remaining_hashes.txt ?a?a?a?a?a?a?a?a

# Step 4: Results merge करो:
john --show hashes.txt > all_cracked.txt
hashcat --show remaining_hashes.txt >> all_cracked.txt

# Best practice: John (rules) → Hashcat (brute force)`}
      />
      <CodeBlock
        title="John + Responder + CrackMapExec"
        code={`# Full AD penetration workflow:

# Terminal 1: Responder चलाओ:
responder -I eth0 -wrf

# Terminal 2: John से captured hashes crack करो:
john --format=netntlmv2 --wordlist=rockyou.txt /usr/share/responder/logs/*.txt

# Terminal 3: CrackMapExec से spray करो:
crackmapexec smb 192.168.1.0/24 -u Administrator -p cracked_password

# अगर password reuse है तो:
crackmapexec smb 192.168.1.0/24 -u Administrator -p cracked_password --shares

# Workflow summary:
# Responder → John → CrackMapExec → lateral movement`}
      />
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Hashcat</td><td className="py-2 px-3">GPU-based हैश क्रैकर</td><td className="py-2 px-3">सबसे तेज़, GPU acceleration</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Hydra</td><td className="py-2 px-3">ऑनलाइन ब्रूट फोर्स</td><td className="py-2 px-3">SSH, FTP, HTTP लॉगिन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Medusa</td><td className="py-2 px-3">पैरेलल ब्रूट फोर्स</td><td className="py-2 px-3">मॉड्यूलर, तेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CrackStation</td><td className="py-2 px-3">ऑनलाइन हैश लुकअप</td><td className="py-2 px-3">बिलियन+ हैशेज़ का डेटाबेस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">RainbowCrack</td><td className="py-2 px-3">रेनबो टेबल क्रैकर</td><td className="py-2 px-3">टाइम-मेमोरी ट्रेडऑफ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">THC-Hydra</td><td className="py-2 px-3">नेटवर्क लॉगिन क्रैकर</td><td className="py-2 px-3">50+ प्रोटोकॉल्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Ophcrack</td><td className="py-2 px-3">Windows पासवर्ड क्रैकर</td><td className="py-2 px-3">रेनबो टेबल-बेस्ड</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Hashcat-utils</td><td className="py-2 px-3">हैश मैनिपुलेशन टूल्स</td><td className="py-2 px-3">हैश कन्वर्ज़न, फिल्टरिंग</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>हमेशा वर्डलिस्ट + रूल्स से शुरू करो — ब्रूट फोर्स लास्ट में</li>
          <li>--fork=N से मल्टी-प्रोसेसिंग यूज़ करो (N = CPU cores)</li>
          <li>--session=name से सेशन नेम सेट करो — बाद में रिज़्यूम करना आसान</li>
          <li>John Jumbo version यूज़ करो — 400+ फॉर्मेट्स मिलेंगे</li>
          <li>पहले john --show से चेक करो कि कितने पहले से क्रैक्ड हैं</li>
          <li>कस्टम रूल्स john.conf में बनाओ — बहुत तेज़ी से क्रैक होगा</li>
          <li>Hashcat + John दोनों यूज़ करो — दोनों की अलग ताकत है</li>
          <li>बड़ी वर्डलिस्ट को छोटे हिस्सों में बांटो — मेमोरी बचेगी</li>
          <li>Pot file regularly check करो — पहले से cracked hashes skip होंगे</li>
          <li>Corporate environments में password policy audit के लिए John best है</li>
          <li>bcrypt hashes के लिए Hashcat use करो — John में bcrypt बहुत slow है</li>
          <li>Custom wordlist बनाओ company name, year, season से — targeted attack में effective</li>
          <li>Passphrases use करो: "correct horse battery staple" जैसे random words</li>
          <li>Password manager recommend करो — unique passwords for every account</li>
          <li>Argon2id hashing algorithm use करो — bcrypt से भी better</li>
          <li>Security awareness training में John demo दिखाओ — password strength importance समझाओ</li>
          <li>--list=formats से supported hash types check करो — target hash confirm करना ज़रूरी है</li>
          <li>--timeout=N set करो slow hashes के लिए — unnecessary computation avoid होगी</li>
          <li>john.conf में [List.Rules:Wordlist] section customize करो — attack efficiency बढ़ेगी</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> John the Ripper एक शक्तिशाली पासवर्ड क्रैकिंग टूल है। इसका इस्तेमाल केवल अधिकृत सुरक्षा ऑडिट, पेनेट्रेशन टेस्टिंग, और अपने स्वयं के पासवर्ड रिकवरी के लिए करें। बिना अनुमति के दूसरों के पासवर्ड क्रैक करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत एक्सेस अपराध है। याद रखो — password cracking सिर्फ defensive security और authorized testing के लिए है। Unauthorized use पर criminal charges, imprisonment, और heavy fines हो सकते हैं। हमेशा written authorization लो engagement शुरू करने से पहले। Pot file में cracked passwords sensitive data है — securely handle करो और engagement end पर delete करो। Corporate penetration testing reports में cracked passwords को masked format में include करो — plain text में कभी मत भेजो।
      </div>

      <p className="text-gray-500 text-xs mt-4 text-center">
        John the Ripper — पासवर्ड सिक्योरिटी की असली परीक्षा। जिम्मेदारी से यूज़ करो।
      </p>
    </TutorialLayout>
  )
}
