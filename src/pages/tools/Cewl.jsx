import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Cewl() {
  return (
    <TutorialLayout
      title="cewl"
      subtitle="Custom Wordlist Generator — Website se passwords guess karne ke words nikale"
      icon="📝"
      prev={{ to: '/tools', label: 'All Tools' }}
      next={{ to: '/tool/kismet', label: 'kismet' }}
    >
      <h2>What is CeWL?</h2>
      <p>
        CeWL (Custom Word List generator) एक Ruby-based penetration testing tool है जो किसी website को crawl करता है और वहां से words extract करके custom wordlist बनाता है। यह tool SpiderLabs (Trustwave) के security researchers द्वारा develop किया गया है। CeWL का मुख्य उद्देश्य target organization के website से relevant words निकालना है जो passwords में इस्तेमाल हो सकते हैं। यह generic wordlists (जैसे rockyou.txt) से बेहतर results देता है क्योंकि target-specific words passwords में ज़्यादा common होते हैं।
      </p>
      <p>
        Real life में लोग passwords बनाते समय अपनी company का नाम, city, products, slogans, और industry-specific terms use करते हैं। CeWL इसी कमज़ोरी का फायदा उठाता है — यह website के content से relevant words निकालता है जो password patterns में इस्तेमाल हो सकते हैं। उदाहरण के लिए, अगर target company का नाम "TechSecure" है, तो "TechSecure@123" या "Secure2024!" जैसे passwords generic wordlists में नहीं मिलेंगे, लेकिन CeWL से बनी wordlist में होंगे।
      </p>
      <p>
        CeWL Robin Wood (digininja) ने बनाया है और यह Ruby में लिखा गया है। यह tool OWASP, CREST, और अन्य penetration testing frameworks में recommended है। CeWL सिर्फ wordlist generator नहीं है — यह email addresses, meta tags, और author information भी extract कर सकता है। यह information social engineering attacks के लिए बहुत useful है। CeWL की latest version में authentication support, proxy support, और custom depth crawling जैसे advanced features हैं।
      </p>
      <p>
        CeWL का architecture web spider-based है। यह HTTP requests भेजकर HTML pages download करता है, HTML tags remove करता है, और remaining text से words extract करता है। यह process recursive है — अगर depth set किया है तो links follow करके और pages crawl करेगा। CeWL Ruby की Nokogiri library use करता है HTML parsing के लिए। यह tool काली लिनक्स में pre-installed आता है।
      </p>
      <p>
        CeWL का मुख्य advantage है target-specific wordlist generation। Generic wordlists millions of entries होती हैं लेकिन target relevant बहुत कम। CeWL से बनी wordlist छोटी होती है लेकिन ज़्यादा effective। यह brute force attacks को faster बनाता है क्योंकि कम passwords try करने पड़ते हैं। Penetration testers और red teamers CeWL को reconnaissance phase में use करते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> CeWL केवल authorized penetration testing और security research के लिए उपयोग करें। बिना अनुमति के website crawling और wordlist generation illegal है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized access attempts अपराध है। केवल अपने lab या written authorization के साथ ही उपयोग करें।
      </div>

      <h2>History of CeWL</h2>
      <p>
        CeWL का विकास 2009 में Robin Wood (digininja) ने शुरू किया था। Robin UK-based security researcher हैं जो SpiderLabs (Trustwave) के लिए काम करते थे। उन्होंने देखा कि penetration testing के दौरान generic wordlists बहुत कम effective होती हैं क्योंकि वो target-specific नहीं होतीं। इस समस्या को हल करने के लिए CeWL बनाया गया।
      </p>
      <p>
        CeWL को 2010 में BackTrack Linux में शामिल किया गया और बाद में Kali Linux में भी pre-installed आने लगा। 2012 में CeWL 3.0 release हुआ जिसमें email extraction और meta tag extraction features add किए गए। 2015 में authentication support add हुआ जिससे login-protected websites भी crawl हो सकती थीं। आज CeWL penetration testing community में standard tool है।
      </p>
      <p>
        CeWL की development history काफी interesting है। 2009 में Robin Wood ने SpiderLabs के एक penetration testing engagement के दौरान realize किया कि generic wordlists target-specific passwords crack करने में inefficient हैं। उन्होंने weekend में Ruby script लिखा जो website crawl करके words extract करता था। यह script इतना successful रहा कि उन्होंने इसे full tool बनाने का फैसला किया।
      </p>
      <p>
        2011 में CeWL को DEFCON conference में present किया गया जिससे security community में इसकी popularity बढ़ गई। 2013 में CeWL ने SANS Penetration Testing curriculum में जगह पाई। 2016 में Robin Wood ने CeWL का complete rewrite किया और modern Ruby practices apply किए। आज CeWL GitHub पर 2000+ stars के साथ actively maintained tool है जो हर major Linux distribution में available है।
      </p>
      <p>
        CeWL का influence दूसरे tools पर भी पड़ा — Burp Suite का Intruder module, OWASP's SecList project, और कई commercial password auditing tools ने CeWL के concept को adopt किया। आज CeWL-based wordlist generation penetration testing का standard practice है और यह tool red team operations में mandatory माना जाता है।
      </p>

      <h2>How CeWL Works?</h2>
      <p>
        CeWL का architecture web spider-based है जो multiple stages में काम करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">HTTP Request:</strong> Target website पर HTTP GET request भेजता है और HTML content download करता है</li>
        <li><strong className="text-white">HTML Parsing:</strong> Nokogiri library से HTML parse करता है — tags, scripts, styles remove करता है</li>
        <li><strong className="text-white">Text Extraction:</strong> Clean text से individual words extract करता है</li>
        <li><strong className="text-white">Word Filtering:</strong> Minimum length, case conversion, duplicate removal apply करता है</li>
        <li><strong className="text-white">Link Discovery:</strong> Page में मौजूद links find करता है recursive crawling के लिए</li>
        <li><strong className="text-white">Depth Crawling:</strong> Set depth के अनुसार links follow करके additional pages crawl करता है</li>
        <li><strong className="text-white">Email Extraction:</strong> HTML content से email addresses pattern match करके निकालता है</li>
        <li><strong className="text-white">Meta Tag Analysis:</strong> Meta keywords, description, author tags से additional information extract करता है</li>
        <li><strong className="text-white">Authentication:</strong> Basic/Digest authentication support से protected pages भी crawl कर सकता है</li>
        <li><strong className="text-white">Output Generation:</strong> सभी extracted words को sorted, unique wordlist file में save करता है</li>
      </ul>

      <h2>Installation</h2>
      <p>
        CeWL काली लिनक्स और पैरोट ओएस में pre-installed आता है। अगर नहीं है तो कई तरीकों से install कर सकते हैं।
      </p>
      <CodeBlock
        title="CeWL Installation"
        code={`# apt से (सबसे आसान):
sudo apt update
sudo apt install cewl

# Ruby gems से install:
sudo gem install cewl

# Git से (latest version):
git clone https://github.com/digininja/CeWL.git
cd CeWL
bundle install

# Version check:
cewl --version

# Help:
cewl --help

# Dependencies:
sudo apt install ruby ruby-dev libcurl4-openssl-dev
sudo gem install nokogiri
sudo gem install httpclient`}
      />

      <h2>Basic Usage</h2>
      <p>
        CeWL का basic usage बहुत simple है — website URL दो और wordlist generate हो जाएगी।
      </p>
      <CodeBlock
        title="Basic Wordlist Generation"
        code={`# Website crawl करके wordlist बनाओ:
cewl http://target.com -w wordlist.txt

# Minimum word length set करें (5 characters):
cewl http://target.com -m 5 -w wordlist.txt

# Depth set करें (कितनी links follow करें):
cewl http://target.com -d 2 -w wordlist.txt

# Maximum depth:
cewl http://target.com -d 5 -w wordlist.txt

# Verbose mode:
cewl http://target.com -v -w wordlist.txt

# Lowercase conversion:
cewl http://target.com -c -w wordlist.txt

# Numbers के साथ words include करें:
cewl http://target.com --with-numbers -w wordlist.txt

# Original case keep करें:
cewl http://target.com -k -w wordlist.txt

# Specific page crawl करें:
cewl http://target.com/about -w about.txt

# Multiple pages combine करें:
cewl http://target.com -w main.txt
cewl http://target.com/products -w products.txt
cat main.txt products.txt | sort -u > combined.txt`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Flag</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-w file</td><td className="py-2 px-3">Output wordlist file</td><td className="py-2 px-3 font-mono text-xs">-w wordlist.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-m N</td><td className="py-2 px-3">Minimum word length (default: 3)</td><td className="py-2 px-3 font-mono text-xs">-m 5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d N</td><td className="py-2 px-3">Crawl depth — links follow करें</td><td className="py-2 px-3 font-mono text-xs">-d 3</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e</td><td className="py-2 px-3">Email addresses extract करें</td><td className="py-2 px-3 font-mono text-xs">-e --email_file emails.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--meta</td><td className="py-2 px-3">Meta tags से keywords extract</td><td className="py-2 px-3 font-mono text-xs">--meta --meta_file meta.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c</td><td className="py-2 px-3">Convert to lowercase</td><td className="py-2 px-3 font-mono text-xs">-c</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-k</td><td className="py-2 px-3">Keep original case</td><td className="py-2 px-3 font-mono text-xs">-k</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--with-numbers</td><td className="py-2 px-3">Numbers के साथ words include</td><td className="py-2 px-3 font-mono text-xs">--with-numbers</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-u agent</td><td className="py-2 px-3">Custom User-Agent set करें</td><td className="py-2 px-3 font-mono text-xs">-u "Mozilla/5.0"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--auth_type</td><td className="py-2 px-3">Authentication type</td><td className="py-2 px-3 font-mono text-xs">--auth_type basic</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--auth_user</td><td className="py-2 px-3">Auth username</td><td className="py-2 px-3 font-mono text-xs">--auth_user admin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--auth_pass</td><td className="py-2 px-3">Auth password</td><td className="py-2 px-3 font-mono text-xs">--auth_pass pass123</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--proxy_host</td><td className="py-2 px-3">Proxy server host</td><td className="py-2 px-3 font-mono text-xs">--proxy_host 127.0.0.1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--proxy_port</td><td className="py-2 px-3">Proxy server port</td><td className="py-2 px-3 font-mono text-xs">--proxy_port 8080</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--no-ssl-verify</td><td className="py-2 px-3">SSL certificate verify skip</td><td className="py-2 px-3 font-mono text-xs">--no-ssl-verify</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Email Extraction</h2>
      <p>
        CeWL सिर्फ words ही नहीं, website से email addresses भी extract कर सकता है जो social engineering और phishing के लिए बहुत useful हैं।
      </p>
      <CodeBlock
        title="Email Extraction"
        code={`# Website से emails निकालें:
cewl http://target.com -e --email_file emails.txt

# Emails + wordlist दोनों:
cewl http://target.com -w wordlist.txt -e --email_file emails.txt

# Email से usernames बनाएं:
# john.doe@target.com → johndoe, john.doe, jdoe
cat emails.txt | sed 's/@.*//' > usernames.txt

# Email patterns analyze करें:
# firstname.lastname@company.com
# f.lastname@company.com
# firstlast@company.com`}
      />

      <h2>Meta Tag Extraction</h2>
      <p>
        Website के meta tags में hidden keywords होते हैं जो passwords में use हो सकते हैं।
      </p>
      <CodeBlock
        title="Metadata Extraction"
        code={`# Meta tags से keywords:
cewl http://target.com --meta --meta_file meta.txt

# Meta keywords often contain:
# - Product names
# - Industry terms
# - Technology names
# - Company slogans
# - Employee names

# HTML comments में hidden info:
# CeWL automatically extract करता है

# Combine all:
cewl http://target.com -w words.txt --meta --meta_file meta.txt -e --email_file emails.txt
cat words.txt meta.txt | sort -u > all_words.txt`}
      />

      <h2>Wordlist Enhancement</h2>
      <p>
        CeWL से निकले simple words में numbers और symbols add करके wordlist को और effective बनाएं।
      </p>
      <CodeBlock
        title="Wordlist Enhancement"
        code={`# Step 1: CeWL से words निकालें:
cewl http://target.com -m 4 -w base.txt

# Step 2: Common variations बनाएं:
while read word; do
    echo "$word"
    echo "$word@123"
    echo "$word123"
    echo "$word!"
    echo "$word#2024"
    echo "$word2024"
    echo "$word@2024"
    echo "${word^}"  # Capitalize first letter
    echo "${word}!!"
done < base.txt > strong_wordlist.txt

# Step 3: Crunch से variations:
crunch 12 12 -t @@@@@@@@@@@% -o variations.txt

# Step 4: Sort और unique:
sort strong_wordlist.txt | uniq > final_wordlist.txt

# Step 5: Hashcat rules apply करें:
hashcat -m 0 hash.txt base.txt -r /usr/share/hashcat/rules/best64.rule`}
      />

      <h2>Authentication Support</h2>
      <p>
        अगर website login protected है तो CeWL authenticated crawling कर सकता है।
      </p>
      <CodeBlock
        title="Authenticated Crawling"
        code={`# Basic authentication:
cewl http://target.com --auth_type basic --auth_user admin --auth_pass pass123 -w wordlist.txt

# Digest authentication:
cewl http://target.com --auth_type digest --auth_user admin --auth_pass pass123 -w wordlist.txt

# Cookie-based auth:
# पहले browser से cookie निकालो, फिर use करो
cewl http://target.com -c cookie_value -w wordlist.txt

# Proxy authentication:
cewl http://target.com --proxy_host 127.0.0.1 --proxy_port 8080 --proxy_username user --proxy_password pass -w wordlist.txt`}
      />

      <h2>Integration with Brute Force Tools</h2>

      <h3>CeWL + Hydra</h3>
      <CodeBlock
        title="CeWL + Hydra Combo"
        code={`# Step 1: CeWL से custom wordlist बनाओ:
cewl http://target.com -m 5 -d 3 -w custom_wordlist.txt

# Step 2: Hydra से SSH brute force:
hydra -l admin -P custom_wordlist.txt target.com ssh

# Step 3: FTP brute force:
hydra -l admin -P custom_wordlist.txt target.com ftp

# Step 4: HTTP login brute force:
hydra -l admin -P custom_wordlist.txt target.com http-post-form "/login:user=^USER^&pass=^PASS^:Invalid"

# Step 5: SMB brute force:
hydra -l admin -P custom_wordlist.txt target.com smb`}
      />

      <h3>CeWL + Hashcat</h3>
      <CodeBlock
        title="CeWL + Hashcat (Offline Cracking)"
        code={`# CeWL से wordlist बनाओ:
cewl http://target.com -m 4 -w base.txt

# Hashcat rules apply करो:
hashcat -m 0 hash.txt base.txt -r /usr/share/hashcat/rules/best64.rule

# Custom rules file:
# hashcat.rule:
# $1$2$3  (numbers add)
# $!      (exclamation add)
# c       (capitalize first letter)
# sa@     (a ko @ se replace)
# se3     (e ko 3 se replace)

hashcat -m 1000 hash.txt base.txt -r hashcat.rule

# WPA/WPA2 cracking:
hashcat -m 22000 hash.hc22000 base.txt -r rules/best64.rule`}
      />

      <h3>CeWL + John the Ripper</h3>
      <CodeBlock
        title="CeWL + John Combo"
        code={`# CeWL wordlist:
cewl http://target.com -m 5 -w base.txt

# John with rules:
john --wordlist=base.txt --rules hash.txt

# John with custom rules:
john --wordlist=base.txt --rules=custom.rule hash.txt`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        CeWL-based attacks real world में कई बार successful रहे हैं। यहां कुछ practical scenarios हैं जो दिखाते हैं कि CeWL कैसे effective होता है:
      </p>
      <p>
        <strong className="text-white">Case Study 1 — Corporate Network Breach:</strong> एक penetration tester ने target company की website से CeWL use करके wordlist generate की। Company का नाम "DataVault" था। Website से product names, employee names, और industry terms निकले। Wordlist में "DataVault@2024", "Vault#Secure", "DVSolutions" जैसे entries थे। Hydra से SSH brute force करने पर 3 accounts compromise हो गए — सब CeWL-generated wordlist से।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — Healthcare Organization:</strong> एक red team engagement में hospital की website से CeWL use किया। Website पर doctor names, department names, और medical terms थे। "Cardio#2024", "DrSharma@123", "MedSecure!" जैसे passwords मिले। यह attack सिर्फ 2 घंटे में complete हुआ — manual password guessing से दिनों लगते।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — Educational Institution:</strong> University की website से CeWL ने course names, professor names, और campus locations extract किए। "CS2024@exam", "Library#Pass", "CampusWiFi!" जैसे WiFi passwords crack हुए। यह demonstrate करता है कि organizations अपने public information से related passwords use करते हैं।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        CeWL अकेले effective है लेकिन दूसरे tools के साथ combine करने पर और powerful बन जाता है।
      </p>

      <h3>CeWL + Nmap Recon</h3>
      <CodeBlock
        title="CeWL + Nmap Combo"
        code={`# Step 1: Nmap से web servers find करो:
nmap -sV -p 80,443 target.com -oN web_scan.txt

# Step 2: हर web server पर CeWL run करो:
for host in $(grep "open" web_scan.txt | awk '{print $2}'); do
    cewl http://$host -m 5 -d 2 -w "cewl_$host.txt"
    echo "[+] $host: $(wc -l < cewl_$host.txt) words"
done

# Step 3: Combine all wordlists:
cat cewl_*.txt | sort -u > master_wordlist.txt
echo "[+] Total unique words: $(wc -l < master_wordlist.txt)"`}
      />

      <h3>CeWL + Recon-ng</h3>
      <CodeBlock
        title="CeWL + OSINT Combo"
        code={`# Recon-ng से company info gather करो:
recon-ng
> workspaces create target_recon
> add companies target.com
> use recon/companies-contacts/bing_linkedin_cache
> run

# CeWL से website words extract करो:
cewl http://target.com -m 5 -d 3 -w base_words.txt

# Employee names from OSINT + CeWL words combine करो:
cat recon_output.txt base_words.txt | sort -u > combined.txt

# Username generation:
cat combined.txt | while read name; do
    echo "$name"
    echo "${name,,}"  # lowercase
    echo "${name%% *}"  # first name only
done | sort -u > usernames.txt`}
      />

      <h3>CeWL + Gobuster</h3>
      <CodeBlock
        title="CeWL + Directory Bruteforce"
        code={`# Step 1: CeWL से words extract करो:
cewl http://target.com -m 4 -w cewl_words.txt

# Step 2: CeWL wordlist से directories brute force करो:
gobuster dir -u http://target.com -w cewl_words.txt -o dirs.txt

# Step 3: Found directories पर फिर से CeWL run करो:
for dir in $(cat dirs.txt | awk '{print $1}'); do
    cewl "http://target.com$dir" -m 4 -w "cewl_$dir.txt"
done

# Step 4: Combine everything:
cat cewl_*.txt | sort -u > enhanced_wordlist.txt`}
      />

      <h3>CeWL + Nikto</h3>
      <CodeBlock
        title="CeWL + Vulnerability Scanner Combo"
        code={`# Step 1: Nikto से vulnerabilities scan करो:
nikto -h http://target.com -o nikto_report.html

# Step 2: Nikto findings से context gather करो:
nikto -h http://target.com | grep -i "server\|technology\|framework"

# Step 3: Technology-specific CeWL crawl:
# अगर Nikto WordPress detect करे:
cewl http://target.com -d 3 -w wordpress_words.txt

# WordPress-specific paths भी crawl करो:
cewl http://target.com/wp-admin -m 4 -w wp_admin.txt
cewl http://target.com/wp-content -m 4 -w wp_content.txt

# Step 4: Combine:
cat wordpress_words.txt wp_admin.txt wp_content.txt | sort -u > wp_wordlist.txt`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        CeWL को automate करने से large-scale engagements में time बचता है।
      </p>
      <CodeBlock
        title="Automated CeWL Pipeline"
        code={`#!/bin/bash
# Automated CeWL Wordlist Generation Pipeline
# Usage: ./cewl_auto.sh target.com

DOMAIN=$1
OUTPUT_DIR="cewl_results_$DOMAIN"
mkdir -p $OUTPUT_DIR

echo "[*] Target: $DOMAIN"
echo "[*] Starting CeWL pipeline..."

# Step 1: Website accessibility check:
if ! curl -s -o /dev/null -w "%{http_code}" "http://$DOMAIN" | grep -q "200\|301\|302"; then
    echo "[-] Website not accessible"
    exit 1
fi

# Step 2: Basic crawl (depth 2):
echo "[+] Phase 1: Basic crawl..."
cewl "http://$DOMAIN" -m 4 -d 2 -w "$OUTPUT_DIR/basic.txt" 2>/dev/null
echo "    Words: $(wc -l < $OUTPUT_DIR/basic.txt)"

# Step 3: Deep crawl (depth 5):
echo "[+] Phase 2: Deep crawl..."
cewl "http://$DOMAIN" -m 4 -d 5 -w "$OUTPUT_DIR/deep.txt" 2>/dev/null
echo "    Words: $(wc -l < $OUTPUT_DIR/deep.txt)"

# Step 4: Email extraction:
echo "[+] Phase 3: Email extraction..."
cewl "http://$DOMAIN" -d 3 -e --email_file "$OUTPUT_DIR/emails.txt" 2>/dev/null
echo "    Emails: $(wc -l < $OUTPUT_DIR/emails.txt)"

# Step 5: Meta tag extraction:
echo "[+] Phase 4: Meta tags..."
cewl "http://$DOMAIN" -d 2 --meta --meta_file "$OUTPUT_DIR/meta.txt" 2>/dev/null
echo "    Meta words: $(wc -l < $OUTPUT_DIR/meta.txt)"

# Step 6: Subdomain crawl:
echo "[+] Phase 5: Subdomains..."
for sub in www blog shop careers support; do
    cewl "http://$sub.$DOMAIN" -m 4 -d 2 -w "$OUTPUT_DIR/sub_$sub.txt" 2>/dev/null
done

# Step 7: Combine all:
echo "[+] Combining results..."
cat $OUTPUT_DIR/*.txt | sort -u > "$OUTPUT_DIR/final_wordlist.txt"
echo "[+] Final wordlist: $(wc -l < $OUTPUT_DIR/final_wordlist.txt) unique words"
echo "[+] Results saved in: $OUTPUT_DIR/"`}
      />
      <CodeBlock
        title="CeWL with Python Wrapper"
        code={`#!/usr/bin/env python3
# CeWL wrapper for batch processing
import subprocess
import os
import sys

def run_cewl(url, depth=2, min_length=5):
    """Run CeWL and return word count"""
    output_file = f"cewl_{url.replace('http://','').replace('https://','').replace('/','_')}.txt"
    cmd = f"cewl {url} -m {min_length} -d {depth} -w {output_file}"
    try:
        subprocess.run(cmd, shell=True, capture_output=True, timeout=300)
        if os.path.exists(output_file):
            with open(output_file) as f:
                words = f.read().splitlines()
            return words
    except subprocess.TimeoutExpired:
        print(f"[-] Timeout: {url}")
    return []

# Target URLs list:
targets = [
    "http://target.com",
    "http://target.com/about",
    "http://target.com/products",
    "http://target.com/blog",
    "http://careers.target.com"
]

all_words = []
for url in targets:
    print(f"[*] Crawling: {url}")
    words = run_cewl(url, depth=3, min_length=4)
    all_words.extend(words)
    print(f"    Found: {len(words)} words")

# Combine and deduplicate:
unique_words = sorted(set(all_words))
with open("final_wordlist.txt", "w") as f:
    f.write("\\n".join(unique_words))
print(f"[+] Final: {len(unique_words)} unique words")`}
      />

      <h2>Performance Tuning</h2>
      <p>
        CeWL को efficiently use करने के लिए performance tuning ज़रूरी है — खासकर बड़ी websites के लिए।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Depth Control:</strong> Depth 1-2 fast results देता है। Depth 5+ बड़ी sites के लिए hours लगा सकता है। Target के हिसाब से choose करो</li>
        <li><strong className="text-white">Minimum Length:</strong> -m 5 या ज़्यादा रखो ताकि common words (the, and, for) skip हों। इससे wordlist छोटी और effective बनती है</li>
        <li><strong className="text-white">Page Selection:</strong> पूरी site crawl करने की बजाय important pages (About, Products, Blog) target करो</li>
        <li><strong className="text-white">Parallel Execution:</strong> Multiple URLs को parallel में run करो — GNU parallel या xargs -P use करो</li>
        <li><strong className="text-white">Proxy Rotation:</strong> Rate limiting avoid करने के लिए proxy rotation use करो</li>
        <li><strong className="text-white">Timeout Setting:</strong> Network timeout set करो ताकि slow pages block न करें</li>
        <li><strong className="text-white">Local Cache:</strong> Already crawled pages को cache करो — duplicate crawling avoid हो</li>
        <li><strong className="text-white">Word Filtering:</strong> Post-processing में useless words (HTML artifacts, numbers only) remove करो</li>
      </ul>
      <CodeBlock
        title="Performance Optimization Commands"
        code={`# Fast crawl (depth 1, high min length):
cewl http://target.com -d 1 -m 8 -w fast.txt

# Parallel crawling:
echo "http://target.com" > urls.txt
echo "http://target.com/about" >> urls.txt
echo "http://target.com/blog" >> urls.txt
cat urls.txt | parallel -j4 "cewl {} -m 5 -d 2 -w cewl_{#}.txt"

# Timeout control:
timeout 60 cewl http://target.com -d 3 -w timeout_safe.txt

# Post-processing cleanup:
cat raw_words.txt | grep -v "^[0-9]*$" | grep -E "^[a-zA-Z]{4,}$" | sort -u > clean.txt

# Memory-efficient large crawl:
cewl http://target.com -d 5 -m 6 -w large.txt &
CEWL_PID=$!
echo "CeWL PID: $CEWL_PID"
# Monitor: tail -f /proc/$CEWL_PID/status`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        CeWL results को analyze करना और report बनाना engagement का important part है।
      </p>
      <CodeBlock
        title="Wordlist Analysis Script"
        code={`#!/bin/bash
# CeWL Wordlist Analysis Script
WORDLIST=$1

echo "=== CeWL Wordlist Analysis ==="
echo "File: $WORDLIST"
echo ""

# Basic stats:
echo "[*] Total words: $(wc -l < $WORDLIST)"
echo "[*] Unique words: $(sort -u $WORDLIST | wc -l)"
echo ""

# Word length distribution:
echo "[*] Word length distribution:"
for len in 4 6 8 10 12; do
    count=$(grep -cE "^.{${len},}$" $WORDLIST 2>/dev/null || echo 0)
    echo "    >= $len chars: $count"
done
echo ""

# Top 20 most common starting letters:
echo "[*] Top starting letters:"
cut -c1 $WORDLIST | sort | uniq -c | sort -rn | head -10
echo ""

# Potential passwords (with numbers/symbols):
echo "[*] Potential password patterns:"
grep -cE "[0-9]" $WORDLIST && echo "    Words with numbers: $(grep -cE '[0-9]' $WORDLIST)"
grep -cE "[@#!$%]" $WORDLIST && echo "    Words with symbols: $(grep -cE '[@#!$%]' $WORDLIST)"
echo ""

# Company name occurrences:
DOMAIN=$(basename $WORDLIST .txt)
echo "[*] Domain-related words:"
grep -i "$DOMAIN" $WORDLIST | head -10
echo ""

# Generate enhanced wordlist:
echo "[*] Generating enhanced wordlist..."
while read word; do
    echo "$word"
    echo "$word@123"
    echo "$word123"
    echo "$word!"
    echo "$word@2024"
    echo "${word^}"  # Capitalize
done < $WORDLIST | sort -u > "${WORDLIST%.*}_enhanced.txt"
echo "[+] Enhanced wordlist: $(wc -l < ${WORDLIST%.*}_enhanced.txt) words"`}
      />
      <CodeBlock
        title="CSV Report Generation"
        code={`#!/usr/bin/env python3
# CeWL Results Report Generator
import csv
import sys
from collections import Counter

wordlist_file = sys.argv[1]
report_file = "cewl_report.csv"

with open(wordlist_file) as f:
    words = [line.strip() for line in f if line.strip()]

# Analysis:
lengths = [len(w) for w in words]
avg_len = sum(lengths) / len(lengths) if lengths else 0
has_numbers = sum(1 for w in words if any(c.isdigit() for c in w))
has_symbols = sum(1 for w in words if any(c in "@#!$" for c in w))

# CSV Report:
with open(report_file, 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(["Metric", "Value"])
    writer.writerow(["Total Words", len(words)])
    writer.writerow(["Unique Words", len(set(words))])
    writer.writerow(["Average Length", f"{avg_len:.1f}"])
    writer.writerow(["With Numbers", has_numbers])
    writer.writerow(["With Symbols", has_symbols])
    writer.writerow(["Min Length", min(lengths) if lengths else 0])
    writer.writerow(["Max Length", max(lengths) if lengths else 0])

print(f"[+] Report saved: {report_file}")
print(f"[+] Total: {len(words)} words")
print(f"[+] Avg length: {avg_len:.1f} chars")`}
      />

      <h2>Comparison Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">CeWL</th>
              <th className="text-left py-2 px-3 text-neon-green">Crunch</th>
              <th className="text-left py-2 px-3 text-neon-green">John</th>
              <th className="text-left py-2 px-3 text-neon-green">pwgen</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Type</td><td className="py-2 px-3">Web Crawler</td><td className="py-2 px-3">Pattern Generator</td><td className="py-2 px-3">Cracker</td><td className="py-2 px-3">Password Generator</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Target-Specific</td><td className="py-2 px-3">हाँ (best)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Email Extraction</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Web Crawling</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Pattern Support</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (best)</td><td className="py-2 px-3">हाँ (rules)</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">Medium (network)</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Fast</td></tr>
            <tr><td className="py-2 px-3 text-white">Language</td><td className="py-2 px-3">Ruby</td><td className="py-2 px-3">C++</td><td className="py-2 px-3">C</td><td className="py-2 px-3">C</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Empty wordlist आ रही है', a: 'Verbose mode check करो: cewl http://target.com -v। Minimum length कम करो: -m 2। Depth बढ़ाओ: -d 5। Website accessible है या नहीं check करो: curl -I http://target.com' },
          { q: 'SSL errors आ रही हैं', a: 'SSL verify disable करो: --no-ssl-verify। Ruby SSL fix: export SSL_CERT_FILE=/etc/ssl/certs/ca-certificates.crt। Self-signed certificate bypass करो।' },
          { q: 'Crawling बहुत slow है', a: 'Depth कम करो: -d 1। Specific pages crawl करो। Minimum length बढ़ाओ: -m 8। Proxy use करो for better speed।' },
          { q: 'Firewall block कर रहा है', a: 'Proxy use करो: --proxy_host 127.0.0.1 --proxy_port 8080। User-Agent change करो। Tor से crawl करो: proxychains cewl http://target.com' },
          { q: 'JavaScript content नहीं मिल रहा', a: 'CeWL static HTML only parse करता है। JavaScript-heavy sites (React, Angular) के लिए headless browser use करो जैसे Puppeteer।' },
          { q: 'Authentication काम नहीं कर रहा', a: 'Auth type check करो (basic vs digest)। Cookie-based auth try करो। Proxy authentication भी set करो अगर ज़रूरी है।' },
          { q: 'बहुत कम words मिल रहे हैं', a: 'Depth बढ़ाओ, minimum length कम करो, --with-numbers flag use करो। Multiple pages separately crawl करो और combine करो।' },
          { q: 'Duplicate words बहुत हैं', a: 'sort | uniq pipe use करो: cewl http://target.com -w wordlist.txt && sort wordlist.txt | uniq > final.txt' },
          { q: 'Multi-language website crawl करनी है', a: 'CeWL Unicode support करता है। Hindi, Chinese, Arabic — सब languages के words extract होते हैं। --with-numbers flag भी use करो।' },
          { q: 'PDF files से words निकालने हैं', a: 'CeWL directly PDF parse नहीं करता। पहले pdftotext use करो: pdftotext file.pdf - | cewl stdin -w pdf_words.txt' },
          { q: 'Rate limited हो रहा है', a: 'Proxy rotate करो, User-Agent change करो, या Tor use करो: proxychains cewl http://target.com। Custom delay भी implement कर सकते हो।' },
          { q: 'Corporate firewall block कर रहा है', a: 'HTTPS try करो (--no-ssl-verify), different port test करो, proxy chain use करो। Firewall rules bypass करने के लिए legitimate User-Agent set करो।' },
          { q: 'CeWL vs web scraping tools क्या difference है?', a: 'CeWL specifically wordlist generation के लिए optimized है। General web scrapers (Scrapy, BeautifulSoup) data extraction के लिए हैं — wordlist generation में CeWL बेहतर है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        अगर आप web admin हैं, तो CeWL-based attacks से कैसे बचें:
      </p>

      <h3>Rate Limiting</h3>
      <CodeBlock
        title="Web Server Rate Limiting"
        code={`# Nginx rate limiting:
# /etc/nginx/nginx.conf:
limit_req_zone $binary_remote_addr zone=crawl:10m rate=10r/s;

server {
    location / {
        limit_req zone=crawl burst=20;
    }
}

# Apache mod_security:
# Crawl detection rules enable करो

# Fail2ban से crawler block करो:
# /etc/fail2ban/jail.local:
[nginx-botsearch]
enabled = true
port = http,https
filter = nginx-botsearch
logpath = /var/log/nginx/access.log
maxretry = 20
bantime = 3600`}
      />

      <h3>WAF Protection</h3>
      <CodeBlock
        title="WAF Configuration"
        code={`# CloudFlare, AWS WAF, ya ModSecurity:
# - Bot detection enable करो
# - Rate limiting set करो
# - Crawl behavior detect करो
# - CAPTCHA enable करो suspicious traffic के लिए

# robots.txt configuration:
User-agent: *
Disallow: /admin/
Disallow: /internal/
Disallow: /api/
Disallow: /staff/
Disallow: /confidential/`}
      />

      <h3>Content Protection</h3>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Sensitive Information:</strong> Website पर confidential data मत डालो</li>
        <li><strong className="text-white">Meta Tags Clean:</strong> Unnecessary meta tags remove करो</li>
        <li><strong className="text-white">HTML Comments:</strong> Developer notes comments में मत छोड़ो</li>
        <li><strong className="text-white">Employee Names:</strong> Staff directory public मत करो</li>
        <li><strong className="text-white">Product Codenames:</strong> Internal codenames website पर मत रखो</li>
        <li><strong className="text-white">Password Policy:</strong> Strong password policy enforce करो</li>
        <li><strong className="text-white">Account Lockout:</strong> Multiple failed attempts पर account lock करो</li>
        <li><strong className="text-white">MFA Enable:</strong> Multi-factor authentication mandatory करो</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        CeWL practice के लिए safe lab environment बनाएं:
      </p>
      <CodeBlock
        title="Practice Environment"
        code={`# DVWA (Damn Vulnerable Web Application):
docker run -d -p 80:80 vulnerables/web-dvwa

# Practice:
cewl http://localhost -w dvwa_wordlist.txt

# Metasploitable2:
docker run -d -p 80:80 tleemcjr/metasploitable2
cewl http://localhost -w metasploitable.txt

# Custom vulnerable app:
# HTML page बनाओ company-like content के साथ
# Practice CeWL extraction

# WordPress test site:
docker run -d -p 8080:80 wordpress
cewl http://localhost:8080 -d 3 -w wordpress_words.txt

# Combine with brute force:
cewl http://localhost -m 4 -w custom.txt
hydra -l admin -P custom.txt localhost http-post-form "/login:user=^USER^&pass=^PASS^:Invalid"`}
      />

      <h2>Advanced Techniques</h2>

      <h3>Custom Header Injection</h3>
      <CodeBlock
        title="Custom Headers and Cookies"
        code={`# Custom User-Agent (WAF bypass):
cewl http://target.com -u "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" -w words.txt

# Custom headers (if required):
# CeWL doesn't support custom headers natively, use proxy:
# Burp Suite में header add करो और proxy through crawl करो

# Cookie-based auth:
cewl http://target.com -c "session=abc123; token=xyz789" -w auth_words.txt

# Referrer header:
cewl http://target.com --header "Referer: http://target.com/login" -w words.txt

# Accept-Language (regional content):
cewl http://target.com --header "Accept-Language: hi-IN,hi;q=0.9,en;q=0.8" -w hindi_words.txt`}
      />

      <h3>Recursive Subdomain Discovery</h3>
      <CodeBlock
        title="Subdomain + CeWL Pipeline"
        code={`# Step 1: Subdomains discover करो:
subfinder -d target.com -o subs.txt
amass enum -d target.com -o amass_subs.txt
cat subs.txt amass_subs.txt | sort -u > all_subs.txt

# Step 2: हर subdomain पर CeWL run करो:
while read sub; do
    echo "[*] Crawling: $sub"
    cewl "http://$sub" -m 5 -d 2 -w "cewl_$sub.txt" 2>/dev/null
    if [ -s "cewl_$sub.txt" ]; then
        echo "    Found: $(wc -l < cewl_$sub.txt) words"
    fi
done < all_subs.txt

# Step 3: Combine with main site:
cat cewl_*.txt | sort -u > complete_wordlist.txt
echo "[+] Complete wordlist: $(wc -l < complete_wordlist.txt) words"`}
      />

      <h3>Wordlist Mutation Rules</h3>
      <CodeBlock
        title="Hashcat Rules for CeWL Words"
        code={`# Custom hashcat rule file for CeWL words:
# cewl.rule:

# Basic variations:
$1$2$3
$!$!$!
$@$#
$2$0$2$4
$2$0$2$5

# Capitalization:
c
C
t
TN

# L33t speak:
sa@
se3
si1
so0
ss$

# Run with rules:
hashcat -m 0 hash.txt base_cewl.txt -r cewl.rule --stdout | sort -u > mutated.txt

# Multiple rule files:
hashcat -m 0 hash.txt base_cewl.txt -r /usr/share/hashcat/rules/best64.rule

# Prince processor (advanced):
pp64.bin < base_cewl.txt | hashcat -m 0 hash.txt`}
      />

      <h3>Multi-Site Crawling</h3>
      <CodeBlock
        title="Multiple Sites Crawl"
        code={`# Company की multiple websites:
echo "http://main-site.com" > targets.txt
echo "http://blog.main-site.com" >> targets.txt
echo "http://careers.main-site.com" >> targets.txt
echo "http://support.main-site.com" >> targets.txt

# सभी crawl करो:
while read url; do
    cewl "$url" -m 5 -d 2 -w "words_$(echo $url | md5sum | cut -c1-8).txt"
done < targets.txt

# Combine all:
cat words_*.txt | sort -u > combined_wordlist.txt`}
      />

      <h3>Targeted Wordlist Creation</h3>
      <CodeBlock
        title="Targeted Wordlist"
        code={`# Step 1: Company info gather करो:
cewl http://target.com -m 4 -d 3 -w base.txt
cewl http://target.com -e --email_file emails.txt
cewl http://target.com --meta --meta_file meta.txt

# Step 2: Industry terms add करो:
# अगर company tech है:
echo -e "tech\\nsecure\\ncloud\\ndata\\napi\\ndev\\nops" >> base.txt

# Step 3: Common patterns:
while read word; do
    echo "$word"
    echo "$word@123"
    echo "$word2024"
    echo "$word!"
    echo "Welcome$word"
    echo "$word#1"
done < base.txt > enhanced.txt

# Step 4: Sort और clean:
sort enhanced.txt | uniq | grep -E '^.{8,}$' > final_wordlist.txt`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'CeWL किस type की websites crawl कर सकता है?', a: 'Static websites best काम करता है। JavaScript-heavy sites (React, Angular) का content नहीं निकाल पाता। Login-protected sites के लिए auth options use करो।' },
          { q: 'Kitni depth set करें?', a: 'Default 2 depth है। छोटी sites के लिए 3-5, बड़ी sites के लिए 1-2। ज़्यादा depth से time बहुत लगेगा।' },
          { q: 'Generic wordlist से better है क्या?', a: 'हाँ, target-specific wordlist generic से better है। अगर company का नाम "TechSecure" है तो "TechSecure@123" rockyou.txt में नहीं होगा।' },
          { q: 'Kya CeWL emails भी निकाल सकता है?', a: 'हाँ, -e flag से email addresses extract होते हैं। Social engineering और phishing के लिए useful हैं।' },
          { q: 'Minimum word length kitni रखें?', a: 'Password के लिए 5-8 characters अच्छा है। Short words बहुत common होते हैं (the, and, for) — इन्हें skip करो।' },
          { q: 'Kya CeWL robots.txt follow करता है?', a: 'नहीं, CeWL default में robots.txt follow नहीं करता। यह advantage और disadvantage दोनों है।' },
          { q: 'CeWL कितना fast है?', a: 'Network speed और depth पर depend करता है। Default settings में medium speed। Depth कम करो और specific pages crawl करो for faster results।' },
          { q: 'Kya CeWL HTTPS support करता है?', a: 'हाँ, HTTPS websites भी crawl कर सकता है। SSL errors के लिए --no-ssl-verify flag use करो।' },
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
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">खासियत</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Crunch</td><td className="py-2 px-3">Pattern-based wordlist generator</td><td className="py-2 px-3">Custom patterns, fast generation</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Cupp</td><td className="py-2 px-3">Common User Passwords Profiler</td><td className="py-2 px-3">Interactive, personal info based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wordlistctl</td><td className="py-2 px-3">Wordlist management tool</td><td className="py-2 px-3">Download, manage wordlists</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">kwprocessor</td><td className="py-2 px-3">Keyboard walk generator</td><td className="py-2 px-3">Keyboard pattern passwords</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Username Anarchy</td><td className="py-2 px-3">Username generator</td><td className="py-2 px-3">Name-based username formats</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">John (rules)</td><td className="py-2 px-3">Rule-based wordlist mutation</td><td className="py-2 px-3">Transform existing wordlists</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Hashcat (rules)</td><td className="py-2 px-3">Rule-based wordlist mutation</td><td className="py-2 px-3">GPU-accelerated mutations</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">pwgen</td><td className="py-2 px-3">Random password generator</td><td className="py-2 px-3">Quick random passwords</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Target की website के "About Us", "Contact" और "Blog" pages सबसे ज़्यादा useful होते हैं</li>
          <li>Products page से product names मिलते हैं — passwords में use होते हैं</li>
          <li>Meta tags में hidden keywords होते हैं — --meta flag ज़रूर use करो</li>
          <li>Emails से usernames बना सकते हो — social engineering के लिए useful</li>
          <li>CeWL + Hydra/Medusa combo से targeted attack होता है</li>
          <li>Hashcat rules apply करो ताकि variations generate हों</li>
          <li>Minimum 5 characters रखो ताकि common words skip हों</li>
          <li>Depth 2-3 रखो — ज़्यादा से time बहुत लगेगा</li>
          <li>Multiple pages separately crawl करो और combine करो</li>
          <li>Authentication options use करो login-protected sites के लिए</li>
          <li>Proxy use करो stealth crawling के लिए</li>
          <li>Custom User-Agent set करो detection avoid करने के लिए</li>
          <li>Wordlist को sort | uniq से clean करो हमेशा</li>
          <li>Careers/招聘 page से job titles और skill requirements मिलते हैं — passwords में common</li>
          <li>Press releases से company milestones और dates मिलते हैं — password patterns में useful</li>
          <li>PDF documents website पर हों तो उनसे भी words extract करो — pdftotext + CeWL combo</li>
          <li>Sitemap.xml check करो — सभी important URLs मिल जाएंगी CeWL के लिए</li>
          <li>Robots.txt में disallowed directories check करो — hidden content हो सकता है</li>
          <li>WordPress sites के लिए /wp-json/wp/v2/users endpoint check करो — usernames मिलते हैं</li>
          <li>GitHub repositories check करो — code में hardcoded words और comments मिल सकते हैं</li>
          <li>Social media profiles से भी company-related words gather करो — CeWL + OSINT combo</li>
          <li>Annual reports और financial documents से jargon words extract करो</li>
          <li>Employee LinkedIn profiles से technical terms और certifications मिलते हैं</li>
          <li>Wordlist को regularly update करो — websites change होती रहती हैं</li>
          <li>Multiple languages में words include करो अगर target multilingual है</li>
          <li>Company acquisitions check करो — merged companies के words भी passwords में use हो सकते हैं</li>
          <li>Job postings से technology stack पता चलता है — tech terms passwords में common हैं</li>
          <li>Website footer में copyright notices, company registration numbers मिलते हैं</li>
          <li>Blogs और news sections से recent events और dates मिलते हैं — password patterns</li>
          <li>Sitemap.xml parse करो — सभी crawlable URLs मिल जाएंगी</li>
          <li>Wordlist को Hashcat rules से mutate करो — 10x तक words बढ़ सकते हैं</li>
          <li>Annual reports और press releases से company milestones और project codenames मिलते हैं</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ Final Warning:</strong> Custom wordlist बनाकर brute force करना targeted attack है। बिना written permission के करना illegal है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized access attempts अपराध है। हमेशा authorized pentest में ही use करो। Document everything।
      </div>
    </TutorialLayout>
  )
}
