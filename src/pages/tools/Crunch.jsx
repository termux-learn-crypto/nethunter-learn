import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Crunch() {
  return (
    <TutorialLayout
      title="crunch"
      subtitle="Wordlist generator — custom password lists banao brute force ke liye"
      icon="📝"
      prev={{ to: '/tool/weevely', label: 'weevely' }}
      next={{ to: '/tool/beef-xss', label: 'beef-xss' }}
    >
      <h2>What is Crunch?</h2>
      <p>
        Crunch एक wordlist generator tool है जो custom password lists बनाता है। Brute force attacks के लिए specific patterns, character sets, और lengths के हिसाब से wordlists generate कर सकते हो। Crunch बहुत fast है और millions of passwords per second generate कर सकता है। C language में लिखा गया है इसलिए performance excellent है।
      </p>
      <p>
        Crunch penetration testers के लिए essential tool है। Hydra, Aircrack-ng, John the Ripper, Hashcat — सबके साथ integrate होता है। Default wordlists (जैसे rockyou.txt) हर target पर काम नहीं करती — target-specific custom wordlist बनानी पड़ती है। Crunch यही काम करता है। Pattern-based generation इसका सबसे powerful feature है।
      </p>
      <p>
        Crunch की सबसे बड़ी खासियत है कि यह specific patterns के हिसाब से wordlist बनाता है। अगर पता है कि target "Name@Year" format use करता है, तो उस pattern की focused wordlist बना सकते हो। इससे brute force space काफी कम हो जाता है — billions of combinations की जगह thousands में password मिल जाता है।
      </p>
      <p>
        Crunch memory-efficient है — यह पूरी wordlist RAM में load नहीं करता बल्कि disk पर stream करता है। इसका मतलब है कि terabytes तक की wordlists बना सकते हो बिना system crash किए। Resume capability भी है — अगर generation interrupt हो जाए तो last point से continue कर सकते हो। यह feature बड़ी wordlists generate करते समय बहुत काम आता है।
      </p>
      <p>
        Crunch multiple output formats support करता है — plain text, compressed (gzip, bzip2, lzma), split files। बड़ी wordlists को chunk files में split कर सकते हो storage management के लिए। Pipe functionality से directly cracking tools को output भेज सकते हो — disk space बचता है और processing faster होती है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Crunch केवल authorized penetration testing और अपने systems पर ही use करें। बिना अनुमति के password cracking attempts अवैध हैं। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized system access अपराध हो सकता है।
      </div>

      <h2>History of Crunch</h2>
      <p>
        Crunch को 2004 में rockhopper ने develop किया था। यह originally Linux के लिए बनाया गया था और C language में लिखा गया है जिससे performance excellent है। शुरू में यह simple character combination generator था, लेकिन community feedback से pattern-based generation feature add हुआ जो इसका signature feature बन गया।
      </p>
      <p>
        2008 में Crunch Kali Linux (पहले BackTrack) में include हो गया। इसके बाद से यह penetration testing distributions का standard tool है। Pattern-based generation ने इसे unique बनाया — बाकि wordlist generators random combinations बनाते हैं, Crunch specific format के हिसाब से बनाता है।
      </p>
      <p>
        Crunch का development slow रहा है — stable release 2009 में आया और उसके बाद major updates नहीं आए। लेकिन tool इतना stable और reliable है कि updates की ज़रूरत नहीं। आज भी Kali Linux, Parrot OS, Nethunter, और बाकि security distributions में pre-installed आता है। Community forks available हैं जो additional features add करते हैं।
      </p>
      <p>
        Indian cybersecurity community में Crunch बहुत popular है। Indian password patterns (Name@Year, Mobile number PINs, DDMMYYYY dates) के लिए focused wordlists बनाने में Crunch सबसे effective है। CTF competitions में भी Crunch-generated wordlists frequently use होती हैं।
      </p>

      <h2>How Crunch Works?</h2>
      <p>
        Crunch character combinations generate करता है specified parameters के based पर:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Character Set Define:</strong> कौन से characters use होंगे (a-z, A-Z, 0-9, symbols)</li>
        <li><strong className="text-white">Length Range:</strong> Minimum और maximum password length specify करो</li>
        <li><strong className="text-white">Pattern Matching:</strong> Specific pattern के हिसाब से combinations बनाओ (@@@@%%%%)</li>
        <li><strong className="text-white">Permutations:</strong> सभी possible combinations systematically generate होते हैं</li>
        <li><strong className="text-white">Output Control:</strong> File में save, stdout पर display, या pipe to another tool</li>
        <li><strong className="text-white">Memory Efficient:</strong> Disk पर stream करता है — RAM में पूरी wordlist load नहीं होती</li>
      </ul>
      <p>
        Crunch algorithm simple लेकिन effective है — nested loops से character positions iterate करता है। हर position पर charset का हर character try होता है। Pattern-based mode में specific positions पर specific character types assign होती हैं।
      </p>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Crunch pre-installed आता है। अगर नहीं है तो easily install कर सकते हो।
      </p>
      <CodeBlock
        title="Crunch Installation"
        code={`# Kali/NetHunter में pre-installed:
sudo apt update
sudo apt install crunch

# वर्जन चेक:
crunch --version

# Help:
crunch --help

# Basic syntax:
crunch <min> <max> [charset] [options]

# Charset files location:
ls /usr/share/crunch/charset.lst`}
      />

      <h2>Basic Usage</h2>
      <p>
        Crunch का basic usage simple है — min length, max length, और charset specify करो।
      </p>
      <CodeBlock
        title="Basic Wordlist Generation"
        code={`# 3 से 6 characters की wordlist (a-z):
crunch 3 6 abcdefghijklmnopqrstuvwxyz

# Numbers only (4 digits):
crunch 4 4 0123456789

# Alphanumeric (3-4 chars):
crunch 3 4 abcdefghijklmnopqrstuvwxyz0123456789

# File में save:
crunch 4 4 0123456789 -o wordlist.txt

# stdout पर (screen पर):
crunch 3 3 abc

# Output:
# aaa
# aab
# aac
# aba
# ...
# ccc

# Wordlist size estimate (count):
crunch 4 4 0123456789 -o /dev/null`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o file</td><td className="py-2 px-3">Output file में save</td><td className="py-2 px-3 font-mono text-xs">crunch 4 4 abc -o out.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t pattern</td><td className="py-2 px-3">Pattern-based generation</td><td className="py-2 px-3 font-mono text-xs">crunch 8 8 -t @@@@%%%%</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f charset.lst</td><td className="py-2 px-3">Character set file use करो</td><td className="py-2 px-3 font-mono text-xs">crunch 4 4 -f charset.lst mixalpha</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-s string</td><td className="py-2 px-3">Start string specify करो</td><td className="py-2 px-3 font-mono text-xs">crunch 4 4 abc -s "aaz"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e string</td><td className="py-2 px-3">End string specify करो</td><td className="py-2 px-3 font-mono text-xs">crunch 4 4 abc -e "bba"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d num</td><td className="py-2 px-3">Duplicate characters limit</td><td className="py-2 px-3 font-mono text-xs">crunch 4 4 abc -d 2</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-b size</td><td className="py-2 px-3">Output file size limit (split)</td><td className="py-2 px-3 font-mono text-xs">crunch 8 8 abc -b 10mb -o START</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-i</td><td className="py-2 px-3">Inverse case (invert pattern)</td><td className="py-2 px-3 font-mono text-xs">crunch 4 4 abc -i</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-z gzip</td><td className="py-2 px-3">Compress output (gzip/bzip2/lzma)</td><td className="py-2 px-3 font-mono text-xs">crunch 8 8 abc -z gzip</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-r</td><td className="py-2 px-3">Resume interrupted generation</td><td className="py-2 px-3 font-mono text-xs">crunch 8 8 abc -r</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Pattern-Based Generation</h2>
      <p>
        Crunch का सबसे powerful feature pattern-based generation है — specific password formats के लिए focused wordlist बनाओ।
      </p>
      <CodeBlock
        title="Pattern Symbols and Examples"
        code={`# Pattern symbols:
# @ = lowercase letters (a-z)
# , = uppercase letters (A-Z)
# % = numbers (0-9)
# ^ = special characters (!@#$%^&*)

# Example patterns:

# 4 letters + 4 numbers (जैसे abcd1234):
crunch 8 8 -t @@@@%%%%

# Name + year (जैसे john1990):
crunch 8 8 -t @@@@%%%%

# First letter capital + 3 lowercase + 4 numbers:
crunch 8 8 -t ,@@@%%%%

# 3 letters + @ + 4 numbers (जैसे abc@1234):
crunch 8 8 -t @@@^%%%%

# Phone number pattern (10 digits):
crunch 10 10 -t %%%%%%%%%%

# Specific format (XXX-XXX-XXXX):
crunch 12 12 -t %%%-%%%-%%%%

# Password with special char at end (Pass123!):
crunch 8 8 -t ,@@@%%%^

# Date format DD/MM/YYYY:
crunch 10 10 -t %%/%%/%%%%

# Mixed pattern (Letter+3lower+4num+special):
crunch 9 9 -t ,@@@%%%%^`}
      />

      <h2>Character Sets Deep Dive</h2>
      <p>
        Crunch predefined character sets support करता है और custom character sets भी define कर सकते हो। Character sets को समझना effective wordlist generation के लिए essential है — सही characters select करने से wordlist size control होती है और generation speed बढ़ती है।
      </p>
      <p>
        Character set choice directly impact करता है wordlist size पर। 26 lowercase letters के साथ 4-character wordlist = 456,976 words। लेकिन 62 alphanumeric characters के साथ 8-character wordlist = 218 trillion words। इसलिए relevant characters ही select करो — unnecessary characters generation time बढ़ाते हैं बिना value add किए।
      </p>
      <CodeBlock
        title="Character Set Management"
        code={`# Built-in charset use करो:
crunch 4 4 -f /usr/share/crunch/charset.lst mixalpha-numeric

# Common charsets in charset.lst:
# mixalpha      — a-z + A-Z
# numeric       — 0-9
# alpha         — a-z
# mixalpha-numeric — a-z + A-Z + 0-9
# symbols       — !@#$%^&*()
# hexadecimal   — 0-9 + a-f

# List all available charsets:
cat /usr/share/crunch/charset.lst

# Custom charset file बनाओ:
echo "aeiou12345" > mycharset.txt
crunch 4 4 -f mycharset.txt

# Multiple custom charsets:
# vowels.txt: aeiou
# consonants.txt: bcdfghjklmnpqrstvwxyz
crunch 6 6 -f vowels.txt -o vowels_list.txt`}
      />
      <CodeBlock
        title="Custom Charset File Creation"
        code={`# Charset file format:
# charset name characters
# Example: custom_charset.lst

cat > custom_charset.lst << 'EOF'
numeric 0123456789
lowercase abcdefghijklmnopqrstuvwxyz
uppercase ABCDEFGHIJKLMNOPQRSTUVWXYZ
alpha abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
special !@#$%^&*()-_+=
alphanumeric abcdefghijklmnopqrstuvwxyz0123456789
all abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=
indian_common aeiouAEIOUbcdfghjklmnpqrstvwxyz
vowels aeiou
consonants bcdfghjklmnpqrstvwxyz
EOF

# Use custom charset:
crunch 4 4 -f custom_charset.lst numeric -o numbers.txt
crunch 6 6 -f custom_charset.lst alphanumeric -o alpha_num.txt`}
      />
      <CodeBlock
        title="Character Set Optimization"
        code={`# Problem: Full charset = too many combinations
# 26 lowercase + 26 uppercase + 10 numbers + 20 special = 82 chars
# 82^8 = 2.04 x 10^15 combinations (too many!)

# Solution 1: Reduce charset to relevant characters:
crunch 8 8 "abcdefghijklmnopqrstuvwxyz0123456789" -o smaller.txt
# 36^8 = 2.82 x 10^12 (much smaller)

# Solution 2: Use pattern to control position:
crunch 8 8 -t @@@@%%%% -o pattern.txt
# 4 lowercase + 4 numbers = 26^4 x 10^4 = 456,976,000

# Solution 3: Exclude similar characters:
# Remove O, 0, l, 1, I (commonly confused):
crunch 8 8 "abcdefghijkmnpqrstuvwxyz23456789" -o no_ambiguous.txt

# Solution 4: Date-based charset:
# DDMMYYYY format: 01-31, 01-12, 1970-2010
crunch 8 8 -t %%%%%%%% -s "01011970" -e "31122010"

# Solution 5: Target-specific analysis:
# Check target's language/keyboard layout
# Indian targets: typically English keyboard characters
# Avoid Cyrillic, Chinese, Arabic unless specifically needed`}
      />

      <h2>Password Generation for Specific Targets</h2>
      <p>
        Real-world penetration testing में target-specific wordlists सबसे effective होती हैं।
      </p>
      <CodeBlock
        title="Target-Specific Wordlists"
        code={`# Target info:
# Name: Rahul, Company: TechCorp, Birth year: 1990
# Pet: Bruno, City: Mumbai

# Name + Year pattern:
crunch 10 10 -t @@@@%%%% -s "aaaa1900" -e "zzzz2030" -o name_year.txt

# Company + Numbers:
crunch 10 10 -t ,,,,,%%% -o company_based.txt

# Name@Year format (Rahul@1990):
crunch 11 11 -t @@@@^%%%% -o name_at_year.txt

# Date-based passwords (DDMMYYYY):
crunch 8 8 -t %%%%%%%% -s "01011990" -e "31122000" -o dates.txt

# PIN codes (4 digit):
crunch 4 4 0123456789 -o pins.txt

# Phone number based (last 10 digits):
crunch 10 10 0123456789 -o phone_based.txt

# Pet name + numbers:
crunch 8 8 -t @@@@%%%% -s "brun0000" -e "brun9999" -o pet_based.txt

# Combined wordlists:
cat name_year.txt company_based.txt dates.txt pins.txt > target_combined.txt`}
      />

      <h2>Output Management</h2>
      <CodeBlock
        title="Output Options"
        code={`# File में save:
crunch 4 4 abcdefghijklmnopqrstuvwxyz -o wordlist.txt

# File size limit (10MB chunks — auto-split):
crunch 8 8 abcdefghijklmnopqrstuvwxyz -b 10mb -o START
# यह START.txt, A.txt, B.txt... files बनाएगा

# Start string से (resume point):
crunch 4 4 abcdefghijklmnopqrstuvwxyz -s "amnz" -o wordlist.txt

# End string तक:
crunch 4 4 abcdefghijklmnopqrstuvwxyz -e "zzzz" -o wordlist.txt

# Duplicate characters limit:
crunch 4 4 abcdefghijklmnopqrstuvwxyz -d 2
# कोई character 2 से ज़्यादा बार repeat नहीं होगा

# Compressed output:
crunch 8 8 0123456789 -z gzip -o wordlist.gz

# Pipe to another tool (no file):
crunch 4 4 0123456789 | hydra -l admin -P - ssh://target.com

# Count words (estimate):
crunch 4 4 0123456789 -o /dev/null

# Resume interrupted generation:
crunch 8 8 abcdefghijklmnopqrstuvwxyz -r`}
      />

      <h2>Integration with Cracking Tools</h2>
      <p>
        Crunch-generated wordlists को cracking tools के साथ use करो:
      </p>
      <CodeBlock
        title="Tool Integration"
        code={`# Hydra (SSH brute force):
crunch 6 6 0123456789 -o wordlist.txt
hydra -l admin -P wordlist.txt ssh://target.com

# Ya pipe directly:
crunch 6 6 0123456789 | hydra -l admin -P - ssh://target.com

# Aircrack-ng (WiFi cracking):
crunch 8 8 0123456789 -o wifi_digits.txt
aircrack-ng -b AA:BB:CC:DD:EE:FF -w wifi_digits.txt capture.cap

# Hashcat (hash cracking):
crunch 6 8 abcdefghijklmnopqrstuvwxyz -o wordlist.txt
hashcat -m 0 -a 0 hash.txt wordlist.txt

# John the Ripper:
crunch 4 6 0123456789 -o wordlist.txt
john --wordlist=wordlist.txt hash.txt

# Medusa (login brute force):
crunch 8 8 abcdefghijklmnopqrstuvwxyz -o wordlist.txt
medusa -h target.com -u admin -P wordlist.txt -M ssh

# Ncrack:
crunch 6 6 0123456789 | ncrack -p 22 --user admin -P - target.com`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Crunch already fast है लेकिन कुछ techniques से performance और बेहतर कर सकते हो:
      </p>
      <CodeBlock
        title="Optimization Tips"
        code={`# 1. stdout की बजाय file में save करो (faster):
crunch 8 8 abcdefghijklmnopqrstuvwxyz -o wordlist.txt
# stdout display slow करता है

# 2. SSD use करो (disk I/O bottleneck कम होता है):
crunch 8 8 abcdefghijklmnopqrstuvwxyz -o /ssd/wordlist.txt

# 3. Compression enable करो (space + I/O savings):
crunch 8 8 abcdefghijklmnopqrstuvwxyz -z gzip -o wordlist.gz

# 4. Pipe directly (no disk write):
crunch 4 4 0123456789 | hashcat -m 0 -a 0 hash.txt

# 5. Smaller charset use करो (unnecessary characters हटाओ):
# Slow: crunch 8 8 abcdefghijklmnopqrstuvwxyz0123456789!@#$%
# Fast: crunch 8 8 abcdefghijklmnopqrstuvwxyz (सिर्फ lowercase)

# 6. Pattern use करो brute force की बजाय:
# Slow: crunch 8 8 abcdefghijklmnopqrstuvwxyz (208 billion)
# Fast: crunch 8 8 -t @@@@%%%% (456 million)

# 7. Start/End range limit करो:
crunch 8 8 abcdefghijklmnopqrstuvwxyz -s "maaa" -e "mzzz"

# 8. Parallel generation (multiple cores):
# Terminal 1: crunch 8 8 abc -s "aaaa" -e "mmmm" -o part1.txt
# Terminal 2: crunch 8 8 abc -s "mmmm" -e "zzzz" -o part2.txt
# cat part1.txt part2.txt > full_wordlist.txt`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Wordlist generate करने के बाद results analyze करना important है:
      </p>
      <CodeBlock
        title="Wordlist Analysis"
        code={`# Word count check:
wc -l wordlist.txt
# Output: 456976 wordlist.txt

# File size:
ls -lh wordlist.txt
# Output: -rw-r--r-- 1 root root 4.2M wordlist.txt

# Character distribution analyze करो:
cat wordlist.txt | fold -w 1 | sort | uniq -c | sort -rn | head
# कौन सा character सबसे ज़्यादा appear हो रहा है

# Duplicate check:
sort wordlist.txt | uniq -d | wc -l
# 0 होना चाहिए (Crunch duplicates नहीं बनाता)

# Length distribution:
awk '{print length}' wordlist.txt | sort | uniq -c | sort -rn

# Sample preview (first 20 words):
head -20 wordlist.txt

# Sample preview (last 20 words):
tail -20 wordlist.txt

# Random sample:
shuf -n 100 wordlist.txt

# Specific pattern filter:
grep -E "^[a-z]{4}[0-9]{4}$" wordlist.txt | head -20

# Statistics report generate करो:
echo "=== Wordlist Report ===" > report.txt
echo "File: wordlist.txt" >> report.txt
echo "Words: $(wc -l < wordlist.txt)" >> report.txt
echo "Size: $(ls -lh wordlist.txt | awk '{print $5}')" >> report.txt
echo "Min length: $(awk '{print length}' wordlist.txt | sort -n | head -1)" >> report.txt
echo "Max length: $(awk '{print length}' wordlist.txt | sort -n | tail -1)" >> report.txt
echo "Generated: $(date)" >> report.txt`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Case Study 1 — Corporate Network: एक penetration test में target company की password policy पता चली — minimum 8 characters, 1 uppercase, 1 number, 1 special character। Default wordlists policy match नहीं करती थीं। Crunch से pattern ,@@@%%%^ (1 uppercase + 3 lowercase + 1 number + 1 special) use करके focused wordlist बनाई। Result: 2 hours में 3 accounts compromise हुए। Generic rockyou.txt से कोई password नहीं मिला था।
      </p>
      <p>
        Case Study 2 — WiFi Audit: एक WiFi network WPA2 password audit में target ने numeric-only 8-digit PIN use किया था (birth date format)। Crunch से DDMMYYYY pattern में 1970-2005 range की wordlist बनाई। 10 million combinations — Aircrack-ng से 45 minutes में password crack हो गया। Default wordlist से 3 hours लगते और shayad password मिलता भी नहीं।
      </p>
      <p>
        Case Study 3 — Web Application: एक e-commerce site का admin panel brute force करना था। OSINT से पता चला admin का naam "Vikram" है और company 2018 में start हुई थी। Crunch से "Vikram" + numbers pattern wordlist बनाई — Vikram2018, Vikram@2018, Vikram123, आदि। 500 attempts में password मिल गया: Vikram@2018। यह social engineering + Crunch का perfect combo था।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Crunch को दूसरे tools के साथ combine करके powerful workflows बना सकते हो:
      </p>
      <CodeBlock
        title="Multi-Tool Workflow"
        code={`# Workflow 1: CeWL + Crunch (website-based + pattern):
# Step 1: Website से words extract करो:
cewl https://target.com -w site_words.txt
# Step 2: Crunch से numbers add करो:
crunch 10 10 -t @@@@@%%%% -o crunch_part.txt
# Step 3: Combine:
cat site_words.txt crunch_part.txt > combined.txt
sort -u combined.txt -o combined.txt

# Workflow 2: Crunch + Hashcat (generate + crack):
crunch 8 8 -t @@@@%%%% -o wordlist.txt
hashcat -m 1000 -a 0 ntlm_hashes.txt wordlist.txt

# Workflow 3: Crunch + Hydra (generate + brute force):
crunch 6 6 0123456789 -o pins.txt
hydra -l admin -P pins.txt 192.168.1.1 http-post-form "/login:user=^USER^&pass=^PASS^:Invalid"

# Workflow 4: Crunch + Aircrack-ng (WiFi):
crunch 8 8 0123456789abcdef -o wifi_wordlist.txt
aircrack-ng -b AA:BB:CC:DD:EE:FF -w wifi_wordlist.txt capture.cap

# Workflow 5: Crunch + John (hash cracking):
crunch 6 8 abcdefghijklmnopqrstuvwxyz -o wordlist.txt
john --wordlist=wordlist.txt --format=raw-md5 hashes.txt`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated Wordlist Scripts"
        code={`#!/bin/bash
# Target-specific wordlist generator script

TARGET_NAME="rahul"
COMPANY="techcorp"
BIRTH_YEAR="1990"
PET="bruno"
OUTPUT_DIR="./wordlists"

mkdir -p $OUTPUT_DIR

echo "[+] Generating wordlists for target..."

# Name-based:
crunch 8 12 -t @@@@%%%% -o $OUTPUT_DIR/name_year.txt 2>/dev/null

# Company-based:
crunch 8 12 -t ,,,,,%%% -o $OUTPUT_DIR/company.txt 2>/dev/null

# Date-based:
crunch 8 8 -t %%%%%%%% -s "0101${BIRTH_YEAR}" -e "3112${BIRTH_YEAR}" -o $OUTPUT_DIR/dates.txt 2>/dev/null

# PIN codes:
crunch 4 6 0123456789 -o $OUTPUT_DIR/pins.txt 2>/dev/null

# Common patterns:
crunch 8 8 -t @@@@%%%% -o $OUTPUT_DIR/common_patterns.txt 2>/dev/null

# Combine all:
cat $OUTPUT_DIR/*.txt | sort -u > $OUTPUT_DIR/combined.txt

echo "[+] Total words: $(wc -l < $OUTPUT_DIR/combined.txt)"
echo "[+] Wordlists saved to: $OUTPUT_DIR/"`}
      />

      <h2>Crunch vs Other Generators</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Crunch</th>
              <th className="text-left py-2 px-3 text-neon-green">Cupp</th>
              <th className="text-left py-2 px-3 text-neon-green">John (wordlist mode)</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Pattern-Based</td><td className="py-2 px-3">हाँ (@@@@%%%%)</td><td className="py-2 px-3">नहीं (profile-based)</td><td className="py-2 px-3">Rule-based mutation</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">बहुत तेज़ (C language)</td><td className="py-2 px-3">मध्यम (Python)</td><td className="py-2 px-3">तेज़ (C)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GUI</td><td className="py-2 px-3">नहीं (CLI only)</td><td className="py-2 px-3">नहीं (CLI)</td><td className="py-2 px-3">नहीं (CLI)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Best For</td><td className="py-2 px-3">Pattern-based brute force</td><td className="py-2 px-3">Target personal info</td><td className="py-2 px-3">Existing wordlist mutation</td></tr>
            <tr><td className="py-2 px-3 text-white">Custom Charset</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (rules)</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Wordlist बहुत बड़ी हो रही है', a: 'Pattern use करो (-t) specific format के लिए। File size limit set करो (-b 100mb)। Start और End string use करो (-s, -e) range limit करने के लिए। Charset छोटा करो — सिर्फ relevant characters रखो।' },
          { q: 'Disk space खत्म हो रहा है', a: '-b flag से file split करो। Pipe directly to cracking tool (| hydra) — file save मत करो। Compression use करो: -z gzip। Smaller charset use करो।' },
          { q: 'Generation बहुत slow है', a: 'Output file में save करो (stdout display slow करता है)। SSD use करो। Smaller charset या shorter length try करो। -z flag से compression enable करो।' },
          { q: 'Pattern कैसे design करें?', a: 'Target की password policy analyze करो। Common patterns (Name@Year, Company@123) try करो। Social engineering से info gather करो। @@@@%%%% = 4 letters + 4 numbers।' },
          { q: 'Special characters include कैसे करें?', a: '^ symbol use करो pattern में — यह special characters represent करता है। या custom charset define करो file में: !@#$%^&*' },
          { q: 'Generation interrupt हो गई', a: '-r flag से resume करो: crunch 8 8 abc -r। या -s flag से last generated string से start करो।' },
          { q: 'Wordlist में duplicates हैं', a: 'Crunch duplicates generate नहीं करता। अगर combine कर रहे हो multiple files तो sort -u use करो: sort -u file1.txt file2.txt > unique.txt' },
          { q: 'Memory error आ रहा है', a: 'Crunch disk-based streaming use करता है, memory error rare है। Output file path check करो — disk full हो सकती है। -b flag से split करो: crunch 8 8 abc -b 100mb -o chunk' },
          { q: 'Pattern में literal character कैसे use करें?', a: '@, ,, %, ^ special symbols हैं। Literal character चाहिए तो escaped form use करो। या custom charset file बनाओ जिसमें specific characters हों।' },
          { q: 'Wordlist कैसे shuffle करें?', a: 'Crunch sequential order में generate करता है। Shuffle: shuf wordlist.txt -o shuffled.txt। या sort -R wordlist.txt -o randomized.txt' },
          { q: 'Multi-threaded generation possible है?', a: 'Crunch single-threaded है। Parallel करने के लिए manually split करो range: Terminal 1: crunch 8 8 abc -s "aaaa" -e "mmmm" -o p1.txt; Terminal 2: crunch 8 8 abc -s "nnnn" -e "zzzz" -o p2.txt' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Brute force attacks से कैसे बचें:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Account Lockout:</strong> Multiple failed attempts पर account temporarily lock करो — 5 attempts के बाद 15 minutes lock</li>
        <li><strong className="text-white">Rate Limiting:</strong> Login attempts limit करो (5 attempts per minute per IP) — fail2ban से automate करो</li>
        <li><strong className="text-white">Strong Password Policy:</strong> Minimum 12 characters, mixed case, numbers, symbols enforce करो — Crunch-generated passwords weak होते हैं अगर policy strict है</li>
        <li><strong className="text-white">2FA/MFA:</strong> Two-factor authentication enable करो — password leak होने पर भी safe</li>
        <li><strong className="text-white">Captcha:</strong> Failed attempts के बाद CAPTCHA show करो — automated attacks रुकेंगे</li>
        <li><strong className="text-white">IP Blocking:</strong> Suspicious IPs temporarily block करो (fail2ban) — pattern detect करो: same IP से rapid attempts</li>
        <li><strong className="text-white">Password Blacklist:</strong> Common passwords (rockyou.txt, Crunch-common patterns) block करो</li>
        <li><strong className="text-white">Monitoring:</strong> Failed login attempts monitor करो (SIEM, alerting) — anomaly detection</li>
        <li><strong className="text-white">Progressive Delay:</strong> हर failed attempt के बाद wait time बढ़ाओ — 1s, 2s, 4s, 8s...</li>
        <li><strong className="text-white">Honeypot Accounts:</strong> Fake admin account बनाओ — access होते ही alert trigger हो</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Brute force testing practice के लिए safe lab setup:
      </p>
      <CodeBlock
        title="Practice Lab"
        code={`# Test environment:
# 1. DVWA (Brute Force section)
# 2. Metasploitable2
# 3. Custom vulnerable app
# 4. SSH server with weak password

# Wordlist बनाओ specific target के लिए:
# Target: Rahul, Company: TechCorp, Birth: 1990

# Step 1: Generate patterns:
crunch 8 12 -t @@@@%%%% -o name_based.txt
crunch 10 10 -t ,,,,,%%% -o company_based.txt
crunch 8 8 -t %%%%%%%% -s "01011990" -e "31122000" -o dates.txt

# Step 2: Combine with common passwords:
cat /usr/share/wordlists/rockyou.txt > combined.txt
cat name_based.txt company_based.txt dates.txt >> combined.txt
sort -u combined.txt -o combined.txt

# Step 3: Test against lab target:
hydra -l admin -P combined.txt 192.168.1.100 http-post-form

# Step 4: Analyze results:
# कितने attempts लगे?
# कौन सा pattern काम किया?
# Pattern refine करो next time के लिए`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Crunch Usage"
        code={`# Multi-file split (manage large wordlists):
crunch 8 8 abcdefghijklmnopqrstuvwxyz -b 100mb -o chunk
# chunk.txt, a.txt, b.txt... files बनेंगी

# Resume from specific point:
crunch 8 8 abcdefghijklmnopqrstuvwxyz -s "mxyz" -o resume.txt

# Duplicate character filtering:
crunch 4 4 abcdefghijklmnopqrstuvwxyz -d 2
# "aaaa" नहीं बनेगा (3+ duplicates skip)

# Combined with grep (filter patterns):
crunch 6 6 0123456789 | grep "123"
# सिर्फ "123" contain करने वाले numbers

# Memory-efficient pipe (no disk):
crunch 8 8 0123456789 | hashcat -m 22000 hash.hc22000

# Compressed output (space saving):
crunch 8 8 abcdefghijklmnopqrstuvwxyz -z gzip -o wordlist.gz

# Multiple charsets in one command:
crunch 4 4 -f charset.lst mixalpha-numeric -o wordlist.txt`}
      />
      <CodeBlock
        title="Hybrid Wordlist Generation"
        code={`# Method 1: Crunch output + dictionary combine:
crunch 8 8 -t @@@@%%%% -o crunch_part.txt
cat /usr/share/wordlists/rockyou.txt crunch_part.txt > hybrid.txt
sort -u hybrid.txt -o hybrid.txt

# Method 2: Crunch with rules (via Hashcat):
crunch 8 8 abcdefghijklmnopqrstuvwxyz -o base.txt
hashcat -m 0 -a 0 hash.txt base.txt -r rules/best64.rule

# Method 3: Multiple patterns combine:
crunch 8 8 -t @@@@%%%% -o pattern1.txt
crunch 8 8 -t ,@@@%%%% -o pattern2.txt
crunch 8 8 -t @@@@%^% -o pattern3.txt
cat pattern1.txt pattern2.txt pattern3.txt | sort -u > combined_patterns.txt

# Method 4: Crunch + CeWL combo:
cewl https://target.com -d 2 -w cewl_words.txt
crunch 10 10 -f cewl_words.txt -t @@@@@%%%% -o cewl_crunch.txt`}
      />
      <CodeBlock
        title="Indian Password Patterns"
        code={`# Common Indian password patterns:

# Name + Birth Year (Rahul1990):
crunch 10 10 -t @@@@%%%% -s "aaaa1970" -e "zzzz2010"

# Name@Year (Rahul@1990):
crunch 11 11 -t @@@@^%%%% -o name_at_year.txt

# Mobile number (10 digits starting with 6/7/8/9):
crunch 10 10 6789012345 -o mobile_pins.txt

# DDMMYYYY date format (Indian style):
crunch 8 8 -t %%%%%%%% -s "01011970" -e "31122005"

# Name + @@ + Numbers:
crunch 10 10 -t @@@@^^%% -o name_special.txt

# Pet name + birth year:
crunch 8 8 -t @@@@%%%% -s "brun1900" -e "zzzz2010"

# Vehicle number pattern (MH02AB1234):
crunch 10 10 -t ,,%%^^%%%% -o vehicle.txt

# Aadhaar last 4 digits (commonly used as PIN):
crunch 4 4 0123456789 -o aadhaar_pin.txt`}
      />
      <CodeBlock
        title="Wordlist Quality Optimization"
        code={`# 1. Remove very short or very long passwords:
awk 'length >= 6 && length <= 12' wordlist.txt > filtered.txt

# 2. Remove common patterns (dictionary words):
grep -v -E "^[a-z]{4,8}$" wordlist.txt > no_dict.txt

# 3. Keep only policy-compliant passwords:
# Policy: min 8 chars, 1 upper, 1 number, 1 special
grep -E "[A-Z]" wordlist.txt | grep -E "[0-9]" | grep -E "[^a-zA-Z0-9]" > compliant.txt

# 4. Deduplicate combined wordlists:
sort -u wordlist1.txt wordlist2.txt > unique.txt

# 5. Validate wordlist (no empty lines, no spaces):
sed '/^$/d' wordlist.txt | tr -d ' ' > clean.txt

# 6. Sample quality check:
shuf -n 100 wordlist.txt | head -20
# Manually check if patterns make sense

# 7. Frequency analysis:
awk '{print length}' wordlist.txt | sort -n | uniq -c | sort -rn
# Length distribution check

# 8. Generate report:
echo "=== Wordlist Quality Report ===" > quality_report.txt
echo "Total words: $(wc -l < wordlist.txt)" >> quality_report.txt
echo "Unique words: $(sort -u wordlist.txt | wc -l)" >> quality_report.txt
echo "Min length: $(awk '{print length}' wordlist.txt | sort -n | head -1)" >> quality_report.txt
echo "Max length: $(awk '{print length}' wordlist.txt | sort -n | tail -1)" >> quality_report.txt
echo "File size: $(ls -lh wordlist.txt | awk '{print $5}')" >> quality_report.txt`}
      />

      <h2>Wordlist Strategy Guide</h2>
      <p>
        Effective brute force testing के लिए systematic wordlist strategy ज़रूरी है। Random wordlist generate करने से better है कि target के बारे में information gather करो और focused wordlist बनाओ।
      </p>
      <CodeBlock
        title="Step-by-Step Strategy"
        code={`# Step 1: Target Information Gathering
# - Full name, DOB, pet names, favorite numbers
# - Company name, department, employee IDs
# - Social media profiles, email patterns
# - OSINT tools: theHarvester, Maltego, Sherlock

# Step 2: Password Policy Analysis
# - Minimum/maximum length
# - Required character types (upper, lower, number, special)
# - Password history requirements
# - Lockout threshold

# Step 3: Pattern Identification
# - Common patterns: Name@Year, Company@123
# - Keyboard patterns: qwerty, asdfgh
# - Date patterns: DDMMYYYY, YYYYMMDD
# - Number patterns: phone, employee ID

# Step 4: Wordlist Generation
# Pattern-based:
crunch 10 10 -t @@@@^%%%% -o name_year.txt
# Dictionary-based:
crunch 8 8 -f rockyou.txt -t @@@@@%%% -o dict_pattern.txt
# Hybrid:
cat name_year.txt dict_pattern.txt | sort -u > hybrid.txt

# Step 5: Optimization
# Remove duplicates:
sort -u wordlist.txt -o unique.txt
# Filter by policy:
grep -E "[A-Z]" wordlist.txt | grep -E "[0-9]" > compliant.txt
# Shuffle:
shuf wordlist.txt -o shuffled.txt`}
      />
      <CodeBlock
        title="Common Indian Password Patterns"
        code={`# Based on password analysis studies in India:

# Pattern 1: Name + Birth Year
crunch 10 10 -t @@@@%%%% -o name_year.txt
# Examples: rahul1990, priya1985

# Pattern 2: Name@Year
crunch 11 11 -t @@@@^%%%% -o name_at_year.txt
# Examples: rahul@1990, priya@1985

# Pattern 3: Mobile Number (10 digits)
crunch 10 10 -t %%%%%%%%%% -o mobile.txt
# Start with 6/7/8/9:
crunch 10 10 "6789012345" -o mobile_filtered.txt

# Pattern 4: DDMMYYYY Date Format
crunch 8 8 -t %%%%%%%% -s "01011970" -e "31122010"

# Pattern 5: Name + Mobile Last 4
crunch 8 8 -t @@@@%%%% -o name_mobile.txt

# Pattern 6: Pet Name + Numbers
crunch 8 8 -t @@@@%%%% -o pet_year.txt

# Pattern 7: Favorite Cricketer
# Sachin, Virat, Dhoni, Rohit + numbers
crunch 8 8 -t @@@@%%%% -o cricketer.txt

# Pattern 8: Bollywood References
# Movie names, actor names + numbers

# Pattern 9: Religion/Spiritual
# God names, mantras + numbers
# Ram, Krishna, Allah, Jesus + years

# Pattern 10: Family Names
# Wife/husband/children names + birth years`}
      />
      <CodeBlock
        title="Wordlist Testing Workflow"
        code={`# Complete testing workflow:

# 1. Generate base wordlists:
crunch 8 8 -t @@@@%%%% -o base_pattern.txt
crunch 8 8 -f rockyou.txt -o base_dict.txt

# 2. Combine and deduplicate:
cat base_pattern.txt base_dict.txt | sort -u > combined.txt

# 3. Apply rules (Hashcat):
hashcat -m 0 -a 0 hash.txt combined.txt -r rules/best64.rule

# 4. If no match, expand:
crunch 8 10 -t @@@@@%%%% -o expanded.txt
cat combined.txt expanded.txt | sort -u > final.txt

# 5. Progressive approach:
# Level 1: Pattern-based (fast, focused)
# Level 2: Dictionary + rules (medium)
# Level 3: Hybrid (slower, broader)
# Level 4: Full brute force (slowest, exhaustive)

# 6. Monitor progress:
watch -n 60 "wc -l *.txt"
# Check which wordlist is still running

# 7. Document results:
echo "Password found: $(date)" >> results.txt
echo "Wordlist used: base_pattern.txt" >> results.txt
echo "Pattern: @@@@%%%" >> results.txt`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Crunch free है?', a: 'हाँ, Crunch open source और free है। Kali Linux और NetHunter में pre-installed आता है।' },
          { q: 'कितनी बड़ी wordlist बना सकता है?', a: 'Theoretically unlimited — disk space पर depend करता है। 10 characters alphanumeric = billions of combinations। -b flag से split करो।' },
          { q: 'Pattern symbols क्या हैं?', a: '@ = lowercase (a-z), , = uppercase (A-Z), % = numbers (0-9), ^ = special characters। Pattern में ये symbols use करो।' },
          { q: 'GPU acceleration support है?', a: 'Crunch सिर्फ wordlist generate करता है — CPU-based है। Actual cracking Hashcat या John करते हैं जो GPU support करते हैं।' },
          { q: 'Memory में wordlist generate कर सकता है?', a: 'Crunch disk पर stream करता है। Pipe (|) से directly cracking tool को भेज सकते हो — disk space बचता है।' },
          { q: 'Interrupted generation resume कैसे करें?', a: '-r flag use करो: crunch 8 8 abc -r। या -s flag से last string specify करो जहां से resume करना है।' },
          { q: 'क्या Crunch Unicode support करता है?', a: 'नहीं, Crunch सिर्फ ASCII characters support करता है। Unicode wordlists के लिए Python ya Ruby scripts use करो। Custom charset file में extended ASCII characters add कर सकते हो।' },
          { q: 'Wordlist size predict कैसे करें?', a: '-o /dev/null flag use करो — file save नहीं होगी लेकिन word count दिखेगा। Formula: charset_size^length। Example: 26 chars, length 4 = 26^4 = 456,976 words।' },
          { q: 'क्या Crunch password policy match कर सकता है?', a: 'हाँ, pattern-based generation से। Policy: 1 uppercase + 3 lowercase + 2 numbers + 1 special = pattern ,@@@%%^। Policy requirements के हिसाब से pattern design करो।' },
          { q: 'Crunch और Cupp कब use करें?', a: 'Crunch pattern-based generation के लिए (format पता हो)। Cupp target personal info-based के लिए (name, birthdate, pet name)। दोनों combine करो best results के लिए।' },
          { q: 'Mobile device पर Crunch चल सकता है?', a: 'हाँ, Termux (Android) पर apt install crunch से install हो जाता है। NetHunter में pre-installed है। Performance mobile पर slower होगी — छोटी wordlists generate करो।' },
          { q: 'क्या Crunch regex support करता है?', a: 'नहीं, Crunch pattern symbols (@@@@%%%%) use करता है regex नहीं। Advanced pattern matching के लिए Hashcat rules या Python scripts use करो। Crunch का pattern system simple लेकिन effective है।' },
          { q: 'Wordlist कैसे test करें कि सही बनी है?', a: 'head -20 wordlist.txt से first 20 words check करो। wc -l से count check करो। Random sample: shuf -n 100 wordlist.txt। Pattern verify: grep -E "^[a-z]{4}[0-9]{4}$" wordlist.txt | head -10।' },
          { q: 'Crunch vs CeWL कब use करें?', a: 'Crunch pattern-based generation के लिए (known format)। CeWL website-based wordlist के लिए (target site से words extract)। दोनों combine करो best results के लिए। CeWL + Crunch combo powerful है।' },
          { q: 'Password cracking success rate कैसे बढ़ाएं?', a: 'OSINT से target info gather करो। Pattern-based wordlist बनाओ (generic नहीं)। Hashcat rules से mutations apply करो। Multiple wordlists combine करो। Password policy comply करने वाली wordlist बनाओ।' },
          { q: 'क्या Crunch GPU use करता है?', a: 'नहीं, Crunch CPU-based wordlist generator है। GPU cracking के लिए Hashcat use करो — Crunch से wordlist बनाओ, Hashcat से crack करो। Crunch generate करता है, crack नहीं करता।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Advanced Wordlist Strategies</h2>
      <p>
        Professional penetration testing में wordlist strategy बहुत important है:
      </p>
      <CodeBlock
        title="Strategic Wordlist Building"
        code={`# Strategy 1: Layered Approach
# Layer 1: Common passwords (rockyou.txt)
# Layer 2: Target-specific (crunch patterns)
# Layer 3: Industry-specific (tech company passwords)
# Layer 4: Mutation rules (Hashcat rules)

# Strategy 2: Password Policy Based
# Policy: min 8 chars, 1 upper, 1 lower, 1 number, 1 special
crunch 8 8 -t ,@@@%%%^ -o policy_compliant.txt

# Strategy 3: Season + Year patterns (common Indian passwords):
crunch 10 10 -t @@@@@@%%%% -o seasonal.txt
# Examples: Summer2024, Winter2024, monsoon2024

# Strategy 4: Keyboard patterns:
crunch 8 8 -t qwerty%% -o keyboard.txt
crunch 8 8 -t asdf%%%% -o keyboard2.txt

# Strategy 5: Company name variations:
# Company: TechCorp
crunch 10 12 -t ,ech,orp%%% -o company_var.txt`}
      />
      <CodeBlock
        title="Wordlist Optimization"
        code={`# Duplicate removal:
cat rockyou.txt crunch_output.txt custom.txt | sort -u > unique.txt

# Length-based filtering:
awk 'length >= 8 && length <= 12' wordlist.txt > filtered.txt

# Character set filtering:
grep -E "^[A-Za-z0-9!@#$%]+$" wordlist.txt > clean.txt

# Pattern-based filtering:
grep -E "^[A-Z][a-z]+[0-9]{4}$" wordlist.txt > name_year.txt

# Wordlist merge + deduplicate + shuffle:
cat *.txt | sort -u | shuf > final_wordlist.txt`}
      />

      <h2>Hashcat Rule Integration</h2>
      <p>
        Crunch wordlists को Hashcat rules से combine करके coverage exponentially बढ़ाओ:
      </p>
      <CodeBlock
        title="Crunch + Hashcat Rules"
        code={`# Base wordlist बनाओ:
crunch 6 6 abcdefghijklmnopqrstuvwxyz -o base.txt

# Hashcat rules apply करो:
hashcat -m 0 -a 0 hash.txt base.txt -r rules/best64.rule

# Capitalize first letter:
hashcat -m 0 -a 0 hash.txt base.txt -r rules/toggles1.rule

# Custom rule (append year):
echo '$ $2 $0 $2 $4' > custom.rule
hashcat -m 0 -a 0 hash.txt base.txt -r custom.rule

# Crunch base + Hashcat mutations = massive coverage:
# base.txt: 308 million combinations
# + rules: billions of mutations`}
      />
      <CodeBlock
        title="Incremental Pattern Building"
        code={`# Start small, expand:
crunch 4 4 0123456789 -o pins_4digit.txt
crunch 5 5 0123456789 -o pins_5digit.txt
crunch 6 6 0123456789 -o pins_6digit.txt

# Date ranges (Indian format DDMMYYYY):
crunch 8 8 -t %%%%%%%% -s "01011970" -e "31122010" -o dates_1970_2010.txt
crunch 8 8 -t %%%%%%%% -s "01012010" -e "31122025" -o dates_2010_2025.txt

# Progressive complexity:
crunch 4 4 abcdefghijklmnopqrstuvwxyz -o 4chars.txt
crunch 5 5 abcdefghijklmnopqrstuvwxyz -o 5chars.txt
crunch 6 6 abcdefghijklmnopqrstuvwxyz -o 6chars.txt
cat 4chars.txt 5chars.txt 6chars.txt > progressive.txt`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Cupp</td><td className="py-2 px-3">Personal info based wordlist</td><td className="py-2 px-3">Target-specific — interactive questions</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Mentalist</td><td className="py-2 px-3">GUI wordlist generator</td><td className="py-2 px-3">Chain-based rules, visual interface</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">kwprocessor</td><td className="py-2 px-3">Keyboard walk generator</td><td className="py-2 px-3">qwerty, 1234 patterns</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Prince</td><td className="py-2 px-3">PRINCE algorithm generator</td><td className="py-2 px-3">Advanced combinator attacks</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">CeWL</td><td className="py-2 px-3">Website-based wordlist</td><td className="py-2 px-3">Target website से words extract</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Pattern-based generation हमेशा brute force से better है — target की password policy analyze करो पहले</li>
          <li>Social engineering से personal info gather करो: name, birth year, company, pet name — इनसे focused wordlist बनाओ</li>
          <li>Generic rockyou.txt से शुरू करो, फिर custom wordlist add करो — दोनों combine करो</li>
          <li>Pipe (|) use करो disk space बचाने के लिए — directly cracking tool को output भेजो</li>
          <li>-b flag से large wordlists split करो — storage management आसान होती है</li>
          <li>-z gzip से output compress करो — disk space 60-70% बचता है</li>
          <li>Wordlist generate करने के बाद shuf से shuffle करो — sequential order में testing biased होती है</li>
          <li>Multiple patterns try करो: Name@Year, Company@123, PetName## — common Indian password patterns</li>
          <li>CeWL + Crunch combo powerful है — website से words + custom patterns</li>
          <li>Target की social media से info gather करो: birthday, anniversary, favorite numbers</li>
          <li>Hashcat rules से Crunch wordlist mutate करो — base small रखो, rules से variations बनाओ</li>
          <li>Date patterns Indian format (DDMMYYYY) में try करो — बहुत common Indian passwords हैं</li>
          <li>Crunch single-threaded है — parallel करने के लिए range split करो multiple terminals में</li>
          <li>Resume capability (-r) बड़ी wordlists के लिए lifesaver है — interrupt होने पर restart मत करो</li>
          <li>Wordlist size estimate करो पहले: -o /dev/null से count check करो, फिर generate करो</li>
          <li>Charset files (/usr/share/crunch/charset.lst) में predefined sets हैं — custom need के लिए own file बनाओ</li>
          <li>Password policy compliant wordlists सबसे effective हैं — policy जानो पहले</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Crunch एक powerful wordlist generator है। इसका इस्तेमाल केवल authorized penetration testing और अपने systems पर ही करें। बिना अनुमति के password cracking attempts अवैध हैं। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized system access अपराध हो सकता है। केवल authorized targets पर ही use करें।
      </div>
    </TutorialLayout>
  )
}
