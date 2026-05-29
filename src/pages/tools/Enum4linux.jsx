import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Enum4linux() {
  return (
    <TutorialLayout
      title="enum4linux"
      subtitle="SMB/NetBIOS/Samba Enumeration Tool — Windows Network Information Extraction"
      icon="🖥️"
      prev={{ to: '/tool/netdiscover', label: 'netdiscover' }}
      next={{ to: '/tool/dnsenum', label: 'dnsenum' }}
    >
      <h2>What is Enum4linux?</h2>
      <p>
        Enum4linux एक powerful Perl script है जो Windows और Samba systems से SMB (Server Message Block) protocol के through information extract करता है। यह कई Samba utilities जैसे rpcclient, net, nmblookup, और smbclient को wrap करता है और एक single tool execution में target systems के बारे में comprehensive intelligence gather करता है।
      </p>
      <p>
        यह tool internal penetration testing engagements में बेहद ज़रूरी है। जब आपके पास Windows environment तक network access होता है, तो enum4linux user accounts, group memberships, available shares, password policies, operating system details, और बहुत कुछ enumerate कर सकता है — अक्सर बिना किसी credentials के null session exploitation के through।
      </p>
      <p>
        Enum4linux को originally Mark Lowe ने बनाया था और यह Kali Linux और अन्य security distributions में एक दशक से ज़्यादा समय से standard component है। यह tool SMB protocol features का फायदा उठाता है जो Windows systems by default expose करते हैं, जिससे यह Windows network security assess करते समय चलाने वाले पहले tools में से एक है।
      </p>
      <p>
        इसका modern successor, enum4linux-ng, cddmp द्वारा लिखा गया Python rewrite है जो significant improvements offer करता है — asynchronous operations, JSON/YAML output formats, SMBv2/v3 support, और बेहतर error handling। दोनों versions security community में widely used हैं।
      </p>
      <p>
        Enum4linux को समझना offensive और दोनों defensive security professionals के लिए ज़रूरी है। Attackers इसे reconnaissance के लिए use करते हैं, जबकि defenders इसे अपने networks को audit करने और SMB services के through information leakage identify करने के लिए use करते हैं। यह tool Windows domain environments में Active Directory enumeration का एक critical first step है।
      </p>
      <p>
        SMB protocol inherently बहुत सारी information expose करता है — user lists, group structures, share configurations, password policies, और OS details। Enum4linux इस information को systematically collect करके organized format में present करता है, जिससे attackers को network की complete picture मिल जाती है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ Legal Warning:</strong> Enum4linux केवल उन networks पर use करें जिनके आप owner हैं या जिनके लिए आपके पास explicit written authorization है। Unauthorized network enumeration भारत में Information Technology Act, 2000 (Sections 43 और 66) का उल्लंघन है और globally similar laws apply होती हैं। किसी भी security assessment से पहले हमेशा proper authorization प्राप्त करें।
      </div>

      <h2>History of Enum4linux</h2>
      <p>
        Enum4linux की शुरुआत 2010 के आसपास हुई जब Mark Lowe ने एक wrapper script बनाई जो Samba client tools का उपयोग करके Windows systems को enumerate करने की प्रक्रिया को सरल बनाती थी। इससे पहले, penetration testers को rpcclient, smbclient, net, और nmblookup commands अलग-अलग manually चलाने पड़ते थे — एक tedious और error-prone process।
      </p>
      <p>
        यह tool BackTrack Linux में standard component बन गया और बाद में 2013 में जब Kali Linux ने BackTrack को replace किया तो वहाँ भी शामिल हो गया। इसकी simplicity और effectiveness ने इसे internal penetration tests में सबसे commonly used tools में से एक बना दिया।
      </p>
      <p>
        2020 में GitHub user cddmp ने enum4linux-ng release किया — Python में एक complete rewrite जिसने original Perl version की कई limitations को address किया। ng version ने SMBv2 और SMBv3 protocols, JSON और YAML output formats, और improved error handling का support add किया। दोनों tools maintain होते हैं और modern Kali Linux installations में available हैं।
      </p>
      <p>
        Enum4linux का development history SMB protocol के evolution के साथ जुड़ा है। जैसे-जैसे Windows versions बदले और security configurations tighten हुईं, tool को भी adapt करना पड़ा। Original version SMBv1 पर depend था जो modern Windows systems में default disabled है, इसलिए enum4linux-ng का आना ज़रूरी था। आज दोनों versions available हैं — legacy environments के लिए original और modern networks के लिए ng version।
      </p>

      <h2>How Enum4linux Works?</h2>
      <p>
        Enum4linux चार core Samba client tools को orchestrate करता है जो Windows और Samba systems से अलग-अलग प्रकार की information extract करते हैं। हर tool enumeration process के एक specific aspect को handle करता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">rpcclient:</strong> Microsoft Remote Procedure Call (MS-RPC) का उपयोग करके IPC$ share के through user accounts, groups, domain information, और password policies query करता है</li>
        <li><strong className="text-white">nmblookup:</strong> NetBIOS name resolution perform करके local network segment पर machine names, workgroups, और domain information discover करता है</li>
        <li><strong className="text-white">net:</strong> Samba का net command utility shares, users, groups list करने और Windows और Samba servers के against various network operations perform करने के लिए</li>
        <li><strong className="text-white">smbclient:</strong> SMB connections establish करके file shares access करता है, directory contents list करता है, और systems के बीच files transfer करता है</li>
        <li><strong className="text-white">Null Session Exploitation:</strong> Anonymous SMB connections (null sessions) का फायदा उठाता है जो Windows by default allow करता है — बिना credentials के information extract करने के लिए</li>
        <li><strong className="text-white">SID Enumeration:</strong> Security Identifiers query करके relative identifier (RID) cycling के through users और groups enumerate करता है</li>
        <li><strong className="text-white">Multi-Protocol Support:</strong> SMBv1 (legacy) और SMBv2/v3 (modern) दोनों protocols के साथ काम करता है — tool version पर depend करता है</li>
        <li><strong className="text-white">Authenticated Access:</strong> Valid credentials available होने पर deeper information gathering के लिए credential-based enumeration support करता है</li>
      </ul>

      <h2>Installation</h2>
      <p>
        Enum4linux Kali Linux पर pre-installed आता है। अगर manually install करना हो या newer Python version चाहिए तो ये steps follow करें:
      </p>
      <CodeBlock
        title="Installing Enum4linux"
        code={`# apt से install (Perl version - Kali पर pre-installed):
sudo apt update
sudo apt install enum4linux

# GitHub से install (latest Perl version):
git clone https://github.com/portcullis/enum4linux.git
cd enum4linux
chmod +x enum4linux.pl

# enum4linux-ng install (Python version):
pip3 install enum4linux-ng

# Source से enum4linux-ng install:
git clone https://github.com/cddmp/enum4linux-ng.git
cd enum4linux-ng
pip3 install -r requirements.txt

# Installation verify करें:
enum4linux-ng --version

# Required dependencies (Samba tools):
sudo apt install smbclient nmap rpcclient`}
      />
      <CodeBlock
        title="Termux / Android Installation"
        code={`# Termux में enum4linux-ng install:
pkg update
pkg install python
pip install enum4linux-ng

# Samba tools install (limited support):
pkg install samba

# Note: Termux में full SMB support limited है
# enum4linux-ng mainly remote targets के लिए है
# Local SMB enumeration के लिए desktop environment better है`}
      />

      <h2>Basic Usage</h2>
      <p>
        Enum4linux का basic usage straightforward है — बस target IP address provide करें। -a flag सभी enumeration options use करके comprehensive scan perform करता है।
      </p>
      <CodeBlock
        title="Full Enumeration Scan"
        code={`# Complete enumeration (सभी options):
enum4linux -a TARGET_IP

# Verbose output (ज़्यादा details के लिए):
enum4linux -a -v TARGET_IP

# enum4linux-ng use करें (Python version):
enum4linux-ng -A TARGET_IP

# JSON output (parsing के लिए):
enum4linux-ng -A TARGET_IP -oJ output.json

# YAML output:
enum4linux-ng -A TARGET_IP -oY output.yaml

# Quick scan (सिर्फ users, groups, shares):
enum4linux -UGS TARGET_IP

# Specific workgroup के साथ scan:
enum4linux -a -W WORKGROUP TARGET_IP`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Flag</th>
              <th className="text-left py-2 px-3 text-neon-green">Description</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-a</td><td className="py-2 px-3">All simple enumeration (-U -G -S -P -o -i -n)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-U</td><td className="py-2 px-3">Enumerate user accounts</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-G</td><td className="py-2 px-3">Enumerate groups</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-S</td><td className="py-2 px-3">Enumerate shares</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-P</td><td className="py-2 px-3">Get password policy information</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o</td><td className="py-2 px-3">Get OS information</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-n</td><td className="py-2 px-3">Enumerate NetBIOS names</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-i</td><td className="py-2 px-3">List files on shares</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-s</td><td className="py-2 px-3">Enumerate sessions</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-u USER</td><td className="py-2 px-3">Specify username for authenticated enumeration</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p PASS</td><td className="py-2 px-3">Specify password for authenticated enumeration</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">Verbose output with additional details</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-d</td><td className="py-2 px-3">Debug mode for troubleshooting</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r</td><td className="py-2 px-3">RID cycling range (default: 500-550)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-R</td><td className="py-2 px-3">Custom RID range for enumeration</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-k KERBEROS</td><td className="py-2 px-3">Use Kerberos authentication</td></tr>
          </tbody>
        </table>
      </div>

      <h2>User Enumeration</h2>
      <p>
        User enumeration enum4linux का सबसे valuable features में से एक है। यह null sessions या authenticated connections के through usernames, SIDs, और account details extract कर सकता है।
      </p>
      <CodeBlock
        title="Enumerating Users"
        code={`# Null session से users list करें:
enum4linux -U TARGET_IP

# Example output (discovered users):
# [+] Enumerating users using SID S-1-5-21-1234567890-...
# index: 0x1 RID: 0x3e8 acb: 0x00000010 Account: administrator
# index: 0x2 RID: 0x3e9 acb: 0x00000010 Account: guest
# index: 0x3 RID: 0x3ea acb: 0x00000010 Account: testuser
# index: 0x4 RID: 0x3eb acb: 0x00000010 Account: svc_backup

# Authenticated enumeration (ज़्यादा results):
enum4linux -u administrator -p 'Password123' -U TARGET_IP

# Username/password file के साथ:
enum4linux -u users.txt -p '' -U TARGET_IP

# RID cycling (broader enumeration):
enum4linux -r TARGET_IP

# Custom RID range:
enum4linux -R 1000-1100 TARGET_IP`}
      />

      <h2>Group Enumeration</h2>
      <CodeBlock
        title="Enumerating Groups"
        code={`# सभी groups list करें:
enum4linux -G TARGET_IP

# Example output:
# [+] Enumerating groups using SID S-1-5-21-...
# Group: Administrators (RID: 0x220)
# Group: Users (RID: 0x221)
# Group: Guests (RID: 0x222)
# Group: Domain Admins (RID: 0x200)
# Group: Domain Users (RID: 0x201)
# Group: Backup Operators (RID: 0x227)

# Group members enumerate करें:
enum4linux -G -v TARGET_IP

# Authenticated group enumeration:
enum4linux -u admin -p password -G TARGET_IP`}
      />

      <h2>Share Enumeration</h2>
      <p>
        Share enumeration assessments के दौरान critical है क्योंकि sensitive files अक्सर improperly secured shares पर store होती हैं।
      </p>
      <CodeBlock
        title="Enumerating Shares"
        code={`# सभी shares list करें:
enum4linux -S TARGET_IP

# Example output:
# Sharename       Type      Comment
# ---------       ----      -------
# C$              Disk      Default share
# ADMIN$          Disk      Remote Admin
# IPC$            IPC       Remote IPC
# print$          Disk      Printer Drivers
# shared_folder   Disk      User-created share
# finance         Disk      Financial Documents

# Shares पर files list करें:
enum4linux -i TARGET_IP

# Share directly access करें:
smbclient //TARGET_IP/shared_folder -N
# -N = null session (no password)

# Share से files download करें:
smbclient //TARGET_IP/shared_folder -N -c 'ls; get sensitive.docx'`}
      />

      <h2>Password Policy Enumeration</h2>
      <CodeBlock
        title="Password Policy Details"
        code={`# Password policy प्राप्त करें:
enum4linux -P TARGET_IP

# Example output:
# [+] Password Info for Domain: WORKGROUP
# [+] Minimum password length: 8 characters
# [+] Password history length: 3
# [+] Maximum password age: 42 days
# [+] Lockout threshold: 5 attempts
# [+] Lockout duration: 30 minutes
# [+] Lockout observation window: 30 minutes

# यह information brute-force attacks plan करने में मदद करती है:
# - 8+ characters के passwords use करें
# - Lockout से बचने के लिए 4 attempts के बाद रुकें
# - Attempt cycles के बीच 30 minutes wait करें`}
      />

      <h2>OS and System Information</h2>
      <CodeBlock
        title="OS Detection"
        code={`# OS information प्राप्त करें:
enum4linux -o TARGET_IP

# Example output:
# [+] OS information for TARGET_IP
# OS: Windows Server 2019
# OS version: 10.0
# OS build: 17763
# Workgroup: CORP
# Domain: corp.local

# NetBIOS machine name प्राप्त करें:
enum4linux -n TARGET_IP

# Example output:
# NetBIOS name: DC01
# NetBIOS domain: CORP`}
      />

      <h2>Authenticated Enumeration</h2>
      <p>
        जब आपके पास valid credentials हों, तो authenticated enumeration null sessions alone की तुलना में significantly ज़्यादा information reveal करता है।
      </p>
      <CodeBlock
        title="Authenticated Scans"
        code={`# Full authenticated enumeration:
enum4linux -u admin -p 'Password123' -a TARGET_IP

# Pass-the-hash authentication:
enum4linux -u admin -p 'aad3b435b51404eeaad3b435b51404ee:HASH' -a TARGET_IP

# Domain user authentication:
enum4linux -u 'DOMAIN\\admin' -p password -a TARGET_IP

# Dictionary attack (सावधानी से use करें - accounts lock हो सकते हैं):
enum4linux -u users.txt -p passwords.txt TARGET_IP

# Best practices:
# 1. पहले password policy check करें (-P)
# 2. Lockout threshold से नीचे रहें
# 3. Brute force की जगह targeted enumeration use करें`}
      />

      <h2>Practical Workflow</h2>
      <p>
        Penetration tests के दौरान enum4linux का systematic approach use करने से comprehensive coverage मिलती है बिना critical information miss किए।
      </p>
      <CodeBlock
        title="Step-by-Step Workflow"
        code={`# Step 1: SMB services verify करें
nmap -p 139,445 --open TARGET_IP

# Step 2: Known vulnerabilities check करें
nmap -p 445 --script smb-vuln* TARGET_IP

# Step 3: Null session enumeration
enum4linux -a TARGET_IP

# Step 4: Null sessions blocked हों तो RID cycling try करें
enum4linux -r TARGET_IP

# Step 5: Credentials मिलें तो authenticated scan
enum4linux -u found_user -p found_pass -a TARGET_IP

# Step 6: Discovered shares explore करें
smbclient //TARGET_IP/share_name -N

# Step 7: Findings document करें
enum4linux-ng -A TARGET_IP -oJ findings.json`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Enum4linux real-world penetration testing engagements में regularly use होता है। एक common scenario है internal network assessment जहाँ tester को office network access मिलता है — physically या VPN के through। सबसे पहले network scan करके Windows systems identify करो, फिर enum4linux से null session enumeration करो।
      </p>
      <p>
        एक real case में, एक company के internal network पर enum4linux चलाने से 15+ user accounts मिले जिनमें से 3 के passwords username के same थे। Null session से password policy भी मिल गई — lockout threshold 0 था (no lockout), जिससे unlimited brute force possible था। Backup Operators group का member account मिला जिसका weak password था, और उस account से entire file server backup access मिल गया।
      </p>
      <p>
        दूसरे case में, enum4linux-ng से SMB shares enumerate करने पर एक "HR_Documents" share मिला जो null session से accessible था। उसमें employee salary details, SSN numbers, और performance reviews store थे — major data breach risk। इस तरह के findings enum4linux की power demonstrate करते हैं।
      </p>
      <p>
        Active Directory environments में enum4linux first step है — domain controllers identify करो, users enumerate करो, groups map करो, shares discover करो। यह information BloodHound जैसे tools को feed की जा सकती है attack paths visualize करने के लिए। Corporate networks में अक्सर stale accounts, misconfigured shares, और weak password policies मिलती हैं जो enum4linux quickly identify कर देता है।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Enum4linux अकेले use करने से बेहतर है इसे दूसरे tools के साथ combine करो। यह reconnaissance pipeline का एक important part है।
      </p>
      <CodeBlock
        title="Enum4linux + CrackMapExec Combo"
        code={`# Step 1: Network scan करो
nmap -p 139,445 --open 192.168.1.0/24 -oG smb_hosts.txt

# Step 2: Enum4linux से enumerate करो
for ip in $(grep open smb_hosts.txt | awk '{print $2}'); do
    echo "[+] Scanning: $ip"
    enum4linux -a $ip 2>&1 | tee enum_$ip.txt
done

# Step 3: CrackMapExec से credential spray करो
crackmapexec smb 192.168.1.0/24 -u administrator -p 'Password123'

# Step 4: Found shares access करो
crackmapexec smb TARGET_IP -u admin -p pass --shares

# Step 5: BloodHound data collect करो
bloodhound-python -u user -p pass -d domain.local -c All`}
      />
      <CodeBlock
        title="Enum4linux + Impacket Integration"
        code={`# Enum4linux से users find करो
enum4linux -U TARGET_IP > users.txt

# Impacket के साथ deeper exploitation:
# SMBExec:
impacket-smbexec domain/user:password@TARGET_IP

# WMIExec:
impacket-wmiexec domain/user:password@TARGET_IP

# PsExec:
impacket-psexec domain/user:password@TARGET_IP

# SecretsDump (password hashes extract):
impacket-secretsdump domain/user:password@TARGET_IP

# Kerberoasting:
impacket-GetUserSPNs domain/user:password -request`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Large networks पर enum4linux manually चलाना impractical है। Automation scripts बनाओ जो पूरे subnet को scan करें।
      </p>
      <CodeBlock
        title="Automated SMB Enumeration Script"
        code={`#!/bin/bash
# auto-enum.sh — Automated SMB enumeration
SUBNET=$1
OUTPUT_DIR="enum_results"
mkdir -p $OUTPUT_DIR

echo "[*] SMB hosts discover कर रहे हैं..."
nmap -p 139,445 --open $SUBNET -oG $OUTPUT_DIR/smb_hosts.txt

HOSTS=$(grep "open" $OUTPUT_DIR/smb_hosts.txt | awk '{print $2}')

for ip in $HOSTS; do
    echo "[+] Enumerating: $ip"
    mkdir -p $OUTPUT_DIR/$ip

    # Null session enumeration
    enum4linux -a $ip > $OUTPUT_DIR/$ip/null_enum.txt 2>&1

    # enum4linux-ng with JSON
    enum4linux-ng -A $ip -oJ $OUTPUT_DIR/$ip/ng_results.json 2>&1

    # Share listing
    smbclient -L //$ip -N > $OUTPUT_DIR/$ip/shares.txt 2>&1

    echo "[+] Done: $ip"
done

echo "[*] Scan complete. Results in $OUTPUT_DIR/"`}
      />
      <CodeBlock
        title="Python Automation Wrapper"
        code={`#!/usr/bin/env python3
# enum_auto.py — Python wrapper for enum4linux-ng
import subprocess
import json
import sys
import os

def run_enum(ip, output_dir):
    results = {}

    # enum4linux-ng JSON output
    cmd = ["enum4linux-ng", "-A", ip, "-oJ",
           f"{output_dir}/{ip}.json"]
    subprocess.run(cmd, capture_output=True, text=True)

    # Parse JSON results
    try:
        with open(f"{output_dir}/{ip}.json") as f:
            for line in f:
                if line.strip():
                    data = json.loads(line)
                    results.update(data)
    except Exception as e:
        print(f"[-] Error parsing {ip}: {e}")

    return results

if __name__ == "__main__":
    target = sys.argv[1]
    os.makedirs("enum_output", exist_ok=True)

    results = run_enum(target, "enum_output")
    print(f"[+] Users: {len(results.get('users', []))}")
    print(f"[+] Groups: {len(results.get('groups', []))}")
    print(f"[+] Shares: {len(results.get('shares', []))}")`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Large networks पर enum4linux optimize करने के लिए कुछ techniques हैं जो scan time significantly कम करती हैं।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Targeted Flags Use करो:</strong> -a flag की जगह specific flags use करो जैसे -US (users + shares) — faster results मिलते हैं</li>
        <li><strong className="text-white">enum4linux-ng Prefer करो:</strong> Async operations support करता है जो original Perl version से तेज़ है</li>
        <li><strong className="text-white">Timeout Set करो:</strong> Unresponsive hosts के लिए timeout reduce करो — overall scan time कम होगा</li>
        <li><strong className="text-white">Parallel Execution:</strong> Multiple targets को parallel में scan करो (GNU parallel या xargs -P)</li>
        <li><strong className="text-white">Network Proximity:</strong> Scan machine को target network के close रखो — latency कम होगी</li>
        <li><strong className="text-white">Nmap First Run करो:</strong> पहले alive hosts identify करो, फिर सिर्फ उन्हीं पर enum4linux चलाओ</li>
        <li><strong className="text-white">Output Filtering:</strong> -v flag avoid करो unless needed — verbose output processing slow करता है</li>
        <li><strong className="text-white">Caching:</strong> Results cache करो — same target पर बार-बार scan avoid करो</li>
      </ul>
      <CodeBlock
        title="Parallel Enumeration"
        code={`# GNU parallel से multiple targets scan करें:
cat targets.txt | parallel -j 10 "enum4linux -a {} > enum_{}.txt 2>&1"

# xargs से parallel execution:
cat targets.txt | xargs -P 10 -I {} sh -c 'enum4linux -a {} > enum_{}.txt 2>&1'

# Timeout set करें (unresponsive hosts skip होंगे):
timeout 60 enum4linux -a TARGET_IP

# Selective enumeration (faster):
enum4linux -US TARGET_IP   # सिर्फ users और shares
enum4linux -UG TARGET_IP   # सिर्फ users और groups
enum4linux -SP TARGET_IP   # सिर्फ shares और password policy`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Enum4linux के results को properly analyze और report करना engagement का critical part है। Structured output formats automation और reporting को आसान बनाते हैं।
      </p>
      <CodeBlock
        title="Output Analysis Techniques"
        code={`# enum4linux-ng JSON output parse करें:
cat results.json | python3 -m json.tool

# Users extract करें:
cat results.json | jq '.users[].name'

# Shares extract करें:
cat results.json | jq '.shares[].name'

# Multiple results aggregate करें:
for f in enum_output/*.json; do
    echo "=== $(basename $f .json) ==="
    cat $f | jq '.users[].name' 2>/dev/null
done

# Report generate करें:
echo "=== SMB Enumeration Report ===" > report.txt
echo "Date: $(date)" >> report.txt
echo "Targets Scanned: $(ls enum_output/*.json | wc -l)" >> report.txt
echo "" >> report.txt

for f in enum_output/*.json; do
    ip=$(basename $f .json)
    echo "--- $ip ---" >> report.txt
    cat $f | jq -r '.users[]?.name // "No users"' >> report.txt
    echo "" >> report.txt
done`}
      />

      <h2>Comparison with Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Tool</th>
              <th className="text-left py-2 px-3 text-neon-green">Purpose</th>
              <th className="text-left py-2 px-3 text-neon-green">Advantage</th>
              <th className="text-left py-2 px-3 text-neon-green">Limitation</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">enum4linux</td><td className="py-2 px-3">SMB/NetBIOS enumeration</td><td className="py-2 px-3">All-in-one tool</td><td className="py-2 px-3">Perl, legacy</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">enum4linux-ng</td><td className="py-2 px-3">Modern SMB enumeration</td><td className="py-2 px-3">Fast, JSON output, SMBv2/3</td><td className="py-2 px-3">Newer, less battle-tested</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">smbclient</td><td className="py-2 px-3">SMB file access</td><td className="py-2 px-3">Direct share browsing</td><td className="py-2 px-3">Manual operation</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CrackMapExec</td><td className="py-2 px-3">SMB authentication testing</td><td className="py-2 px-3">Pass-the-hash, spray</td><td className="py-2 px-3">Requires credentials</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">rpcclient</td><td className="py-2 px-3">MS-RPC operations</td><td className="py-2 px-3">Deep RPC queries</td><td className="py-2 px-3">Manual, single-purpose</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Connection refused error', a: 'SMB ports (445/139) closed या filtered हैं। Verify करो: nmap -p 139,445 TARGET_IP। Firewall rules check करो और ensure करो कि target Windows/Samba system है।' },
          { q: 'NT_STATUS_LOGON_FAILURE', a: 'Invalid credentials। पहले null session try करो (कोई -u/-p flags नहीं)। अगर null sessions blocked हैं तो valid credentials चाहिए या -r flag से RID cycling try करो।' },
          { q: 'NT_STATUS_ACCESS_DENIED', a: 'Target पर null sessions disabled हैं। Valid credentials से authenticated enumeration try करो, या direct SID queries के लिए rpcclient use करो।' },
          { q: 'No output or empty results', a: 'Firewall SMB traffic block कर रहा होगा। Connectivity verify करो: telnet TARGET_IP 445। यह भी check करो कि target SMB services run कर रहा है।' },
          { q: 'enum4linux-ng काम नहीं कर रहा', a: 'Update करो: pip3 install --upgrade enum4linux-ng। Python 3.7+ ज़रूरी है। Dependencies install करो: pip3 install -r requirements.txt' },
          { q: 'Account lockout concerns', a: 'पहले -P flag से password policy check करो। Lockout threshold से नीचे रहो। Safe रहने के लिए per account 2-3 attempts maximum use करो।' },
          { q: 'SMBv1 not supported', a: 'पुराना enum4linux सिर्फ SMBv1 support करता है। SMBv2/v3 support के लिए enum4linux-ng use करो: enum4linux-ng -A TARGET_IP' },
          { q: 'Slow enumeration', a: 'Targeted scans के लिए specific flags use करो -a flag की जगह। जैसे: enum4linux -US TARGET_IP सिर्फ users और shares के लिए।' },
          { q: 'Firewall blocking SMB traffic', a: 'Port 445 और 139 check करो। अगर filtered हैं तो alternative ports try करो या network team से access request करो।' },
          { q: 'enum4linux-ng JSON output empty है', a: 'Target accessible है? nmap से port 445 check करो। अगर target Samba है तो version check करो — purani Samba में compatibility issues हो सकते हैं।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Enum4linux enumeration को detect और defend करना equally ज़रूरी है security professionals के लिए।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Disable Null Sessions:</strong> Registry में RestrictAnonymous = 1 set करो: HKLM\SYSTEM\CurrentControlSet\Control\Lsa</li>
        <li><strong className="text-white">Enable SMB Signing:</strong> Group Policy में "Digitally sign communications (always)" configure करो</li>
        <li><strong className="text-white">Disable SMBv1:</strong> PowerShell में: Set-SmbServerConfiguration -EnableSMB1Protocol $false</li>
        <li><strong className="text-white">Firewall Rules:</strong> Untrusted networks से ports 135, 137-139, 445 block करो</li>
        <li><strong className="text-white">Monitor Event Logs:</strong> Event ID 4625 (failed logons) और 5140 (share access) watch करो</li>
        <li><strong className="text-white">IDS/IPS Rules:</strong> SMB enumeration patterns detect करने के लिए signatures deploy करो</li>
        <li><strong className="text-white">Least Privilege Shares:</strong> Unnecessary shares remove करो और required ones पर permissions restrict करो</li>
        <li><strong className="text-white">Network Segmentation:</strong> Sensitive systems को general network access से isolate करो</li>
      </ul>

      <CodeBlock
        title="Windows Defense Commands"
        code={`# PowerShell से null sessions disable करें:
Set-ItemProperty -Path "HKLM:\\SYSTEM\\CurrentControlSet\\Control\\Lsa" -Name "RestrictAnonymous" -Value 1

# SMBv1 disable करें:
Set-SmbServerConfiguration -EnableSMB1Protocol $false -Force

# SMB signing enable करें:
Set-SmbServerConfiguration -RequireSecuritySignature $true -Force

# SMB shares audit करें:
Get-SmbShare | Select-Object Name, Path, Description

# Failed logon attempts monitor करें:
Get-WinEvent -FilterHashtable @{LogName='Security'; ID=4625} | Select-Object -First 20`}
      />

      <h2>Lab Environment Setup</h2>
      <p>
        Enum4linux techniques safely और legally practice करने के लिए proper lab environment setup करना ज़रूरी है।
      </p>
      <CodeBlock
        title="Lab Setup Guide"
        code={`# VirtualBox में Windows VM बनाएं:
# Windows 10/11 या Windows Server 2019/2022

# Network Configuration:
# 1. Network को Host-Only Adapter set करें (192.168.56.x)
# 2. Windows Firewall disable करें (सिर्फ practice के लिए)
# 3. Test shares बनाएं: C:\\shared_folder
# 4. Test users बनाएं: admin, testuser, guest, svc_backup
# 5. Weak passwords set करें testing के लिए

# Alternative: Metasploitable2 use करें (Linux with Samba)
# Download: sourceforge.net/projects/metasploitable/

# Practice enumeration:
enum4linux -a 192.168.56.10

# Different scenarios test करें:
# - Null session enumeration
# - Authenticated enumeration
# - RID cycling
# - Share browsing`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="SID Brute Forcing"
        code={`# SID brute forcing से user discovery:
enum4linux -r TARGET_IP

# Custom RID range enumeration:
enum4linux -R 500-1000 TARGET_IP

# Direct rpcclient commands (deeper enumeration):
rpcclient -U "" TARGET_IP
rpcclient> enumdomusers
rpcclient> enumdomgroups
rpcclient> querydominfo
rpcclient> getdompwinfo
rpcclient> queryuser 0x1f4  # Administrator RID

# smbclient direct share access:
smbclient -L TARGET_IP -N    # Shares list करें
smbclient //TARGET_IP/C$ -N  # C$ share access करें`}
      />
      <CodeBlock
        title="Kerberos and LDAP Enumeration"
        code={`# Kerberos authentication के साथ:
enum4linux -k KERBEROS TARGET_IP

# LDAP enumeration (Active Directory):
# enum4linux-ng LDAP support:
enum4linux-ng -A TARGET_IP --ldap

# Kerberoasting attack preparation:
impacket-GetUserSPNs domain/user:password -request

# AS-REP Roasting:
impacket-GetNPUsers domain/ -usersfile users.txt -format hashcat -outputfile asrep.txt

# BloodHound data collection:
bloodhound-python -u user -p pass -d domain.local -c All -ns TARGET_IP`}
      />
      <CodeBlock
        title="Post-Enumeration Exploitation"
        code={`# Found credentials से lateral movement:
crackmapexec smb TARGET_IP -u admin -p 'Password123' --shares
crackmapexec smb TARGET_IP -u admin -p 'Password123' --sam

# Pass-the-hash:
crackmapexec smb TARGET_IP -u admin -H 'NTHASH' --shares

# SMBExec (command execution):
impacket-smbexec domain/admin:password@TARGET_IP

# WMIExec (stealthier):
impacket-wmiexec domain/admin:password@TARGET_IP

# SecretsDump (credential extraction):
impacket-secretsdump domain/admin:password@TARGET_IP

# Golden Ticket (domain compromise):
impacket-ticketer -nthash KRBTGT_HASH -domain-sid S-1-5-21-... -domain domain.local administrator`}
      />

      <h2>SMB Protocol Deep Dive</h2>
      <p>
        SMB protocol को समझना enum4linux effectively use करने के लिए ज़रूरी है। SMB (Server Message Block) एक network file sharing protocol है जो Windows systems में default enabled है। यह port 445 (TCP) पर directly और port 139 (TCP) पर NetBIOS over TCP/IP के through run होता है।
      </p>
      <p>
        SMB protocol के तीन major versions हैं — SMBv1 (legacy, insecure), SMBv2 (Windows Vista+), और SMBv3 (Windows 8+)। SMBv1 में कई critical vulnerabilities हैं जैसे EternalBlue (MS17-010) जो WannaCry ransomware में exploit हुई थी। Modern Windows systems में SMBv1 default disabled है, लेकिन कई organizations में अभी भी enabled है legacy compatibility के लिए।
      </p>
      <p>
        Enum4linux original version mainly SMBv1 पर depend है, इसलिए modern environments में enum4linux-ng use करना बेहतर है जो SMBv2/v3 support करता है। Null sessions SMBv1 में easily available हैं, लेकिन SMBv2/v3 में restricted हैं — फिर भी authenticated enumeration possible है।
      </p>
      <p>
        SMB enumeration के दौरान कुछ important concepts हैं जो समझने ज़रूरी हैं। IPC$ share special share है जो inter-process communication के लिए use होता है — यह enumeration का primary target है। ADMIN$ share remote administration के लिए है और C$ default administrative share है। इन shares के through बहुत सारी information मिलती है जो attackers के लिए valuable है।
      </p>

      <h2>Additional CodeBlocks and Examples</h2>
      <CodeBlock
        title="SMB Vulnerability Scanning with Enum4linux"
        code={`# SMBv1 detection (EternalBlue prerequisite):
enum4linux -o TARGET_IP
# अगर OS version पुराना है तो EternalBlue vulnerable हो सकता है

# Nmap से SMB vulnerabilities check करें:
nmap -p 445 --script smb-vuln-ms17-010 TARGET_IP
nmap -p 445 --script smb-vuln-ms08-067 TARGET_IP
nmap -p 445 --script smb-vuln* TARGET_IP

# SMB signing check करें:
nmap -p 445 --script smb-security-mode TARGET_IP

# SMB protocols detect करें:
nmap -p 445 --script smb-protocols TARGET_IP

# Enum4linux-ng के साथ comprehensive vuln assessment:
enum4linux-ng -A TARGET_IP -oJ results.json
# JSON output में vulnerabilities include होती हैं`}
      />
      <CodeBlock
        title="Share Access and File Extraction"
        code={`# सभी shares पर files search करें:
smbclient //TARGET_IP/shared_folder -N -c 'recurse ON; ls'

# Specific file types search करें:
smbclient //TARGET_IP/shared_folder -N -c 'ls *.docx'
smbclient //TARGET_IP/shared_folder -N -c 'ls *.xlsx'
smbclient //TARGET_IP/shared_folder -N -c 'ls *.pdf'

# Multiple shares access करें:
for share in $(enum4linux -S TARGET_IP 2>/dev/null | grep Disk | awk '{print $1}'); do
    echo "[+] Accessing: $share"
    smbclient //TARGET_IP/$share -N -c 'ls' 2>/dev/null
done

# smbmap से share permissions check करें:
smbmap -H TARGET_IP -u null

# CrackMapExec से share enumeration:
crackmapexec smb TARGET_IP --shares

# Impacket SMBClient:
impacket-smbclient null@TARGET_IP`}
      />
      <CodeBlock
        title="Active Directory Enumeration Script"
        code={`#!/bin/bash
# ad-enum.sh — Active Directory enumeration automation
DC_IP=$1
DOMAIN=$2
OUTPUT="ad_enum_$(date +%Y%m%d)"

mkdir -p $OUTPUT

echo "[1/7] SMB enumeration..."
enum4linux -a $DC_IP > $OUTPUT/smb_enum.txt 2>&1

echo "[2/7] LDAP enumeration..."
enum4linux-ng -A $DC_IP --ldap -oJ $OUTPUT/ldap.json 2>&1

echo "[3/7] User enumeration..."
enum4linux -U $DC_IP > $OUTPUT/users.txt 2>&1

echo "[4/7] Group enumeration..."
enum4linux -G $DC_IP > $OUTPUT/groups.txt 2>&1

echo "[5/7] Share enumeration..."
enum4linux -S $DC_IP > $OUTPUT/shares.txt 2>&1

echo "[6/7] Password policy..."
enum4linux -P $DC_IP > $OUTPUT/policy.txt 2>&1

echo "[7/7] RID cycling..."
enum4linux -R 500-2000 $DC_IP > $OUTPUT/rid_enum.txt 2>&1

echo "[+] Enumeration complete. Results in $OUTPUT/"
echo "[+] Users found: $(grep -c 'Account:' $OUTPUT/users.txt)"
echo "[+] Groups found: $(grep -c 'Group:' $OUTPUT/groups.txt)"`}
      />

      <h2>Additional Detection Methods</h2>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Network Traffic Analysis:</strong> Wireshark में SMB traffic capture करो — enumeration patterns detect होंगे (multiple session setup attempts)</li>
        <li><strong className="text-white">Honeypot Shares:</strong> Fake shares create करो जो access होने पर alert trigger करें — unauthorized enumeration detect होगी</li>
        <li><strong className="text-white">Log Correlation:</strong> Windows Event Logs को SIEM में aggregate करो — multiple failed SMB attempts correlate करो</li>
        <li><strong className="text-white">Network Segmentation Testing:</strong> Regularly test करो कि sensitive systems general network से isolated हैं या नहीं</li>
        <li><strong className="text-white">SMB Protocol Monitoring:</strong> Network monitoring tools से SMB protocol usage track करो — unusual patterns detect होंगे</li>
        <li><strong className="text-white">Access Control Lists:</strong> SMB shares पर strict ACLs implement करो — only authorized users access कर पाएं</li>
        <li><strong className="text-white">Regular Audits:</strong> Monthly basis पर अपने network पर enum4linux run करो — self-assessment से vulnerabilities पहले मिलेंगी</li>
        <li><strong className="text-white">Endpoint Protection:</strong> Advanced endpoint security tools deploy करो जो SMB enumeration attempts detect करें</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'enum4linux और enum4linux-ng में क्या अंतर है?', a: 'enum4linux-ng Python rewrite है जिसमें async operations, JSON/YAML output, SMBv2/v3 support, और बेहतर error handling है। Original Perl-based है और सिर्फ SMBv1 support करता है।' },
          { q: 'Null session क्या है?', a: 'बिना credentials का anonymous SMB connection। Windows इसे by default allow करता है, जिससे users, groups, shares, और policies के बारे में significant information leak होती है।' },
          { q: 'क्या यह tool सिर्फ Windows के against काम करता है?', a: 'नहीं, यह किसी भी SMB server के against काम करता है जिसमें Linux/Unix पर Samba भी शामिल है। कोई भी system जो SMB services चला रहा है उसे enumerate किया जा सकता है।' },
          { q: 'कितने login attempts safe हैं?', a: 'पहले -P flag से password policy check करो। Lockout threshold (typically 3-5 attempts) से नीचे रहो। Safe रहने के लिए per account 2-3 attempts maximum use करो।' },
          { q: 'JSON output क्यों ज़रूरी है?', a: 'JSON output jq जैसे tools से easy parsing enable करता है और automated workflows और reporting systems के साथ integration आसान बनाता है।' },
          { q: 'क्या यह EternalBlue detect कर सकता है?', a: 'enum4linux EternalBlue detect नहीं करता। इसके लिए use करो: nmap -p 445 --script smb-vuln-ms17-010 TARGET_IP' },
          { q: 'क्या enum4linux-ng complete replacement है?', a: 'हाँ, ज़्यादातर use cases के लिए। यह original के सभी features offer करता है plus modern protocol support और बेहतर output formats।' },
          { q: 'Enumeration के दौरान detection से कैसे बचें?', a: '-a flag की जगह targeted scans use करो, request rates limit करो, specific enumeration flags use करो, और business hours के बाहर timing consider करो।' },
          { q: 'SMB signing enable होने पर क्या होता है?', a: 'SMB signing enable होने पर null sessions block हो सकते हैं और enumeration limited हो जाती है। Authenticated credentials ज़रूरी हो जाते हैं। enum4linux-ng signing negotiate कर सकता है।' },
          { q: 'IPv6 networks पर काम करता है?', a: 'Limited support है। enum4linux-ng में better IPv6 handling है। Target specify करते समय IPv6 address bracket में दो: enum4linux-ng -A "[fe80::1]"' },
          { q: 'Multiple targets एक साथ scan कर सकते हैं?', a: 'enum4linux directly single target accept करता है। Multiple targets के लिए bash loop, xargs, या GNU parallel use करो — automation section देखो।' },
          { q: 'SMBv1 disabled होने पर क्या करें?', a: 'enum4linux-ng use करो जो SMBv2/v3 support करता है। Original enum4linux सिर्फ SMBv1 support करता है इसलिए modern Windows systems पर काम नहीं करेगा।' },
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
              <th className="text-left py-2 px-3 text-neon-green">Purpose</th>
              <th className="text-left py-2 px-3 text-neon-green">Best For</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">smbclient</td><td className="py-2 px-3">SMB file operations</td><td className="py-2 px-3">Share browsing and file transfer</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CrackMapExec</td><td className="py-2 px-3">SMB authentication testing</td><td className="py-2 px-3">Credential spraying and lateral movement</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">rpcclient</td><td className="py-2 px-3">MS-RPC operations</td><td className="py-2 px-3">Deep RPC enumeration and SID queries</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Impacket</td><td className="py-2 px-3">Python SMB library</td><td className="py-2 px-3">Advanced exploitation (psexec, wmiexec)</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Nmap SMB Scripts</td><td className="py-2 px-3">SMB vulnerability scanning</td><td className="py-2 px-3">Vulnerability detection and OS fingerprinting</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>enum4linux-ng use करो modern environments के लिए — JSON output save करो, फिर jq से automated analysis करो</li>
          <li>Workflow: Nmap port scan → enum4linux-ng full enumeration → smbclient share access → authenticated enumeration with discovered credentials</li>
          <li>Active Directory environments में BloodHound के साथ combine करो complete attack path visualization के लिए</li>
          <li>पहले password policy check करो (-P) — lockout threshold पता होना ज़रूरी है brute force से पहले</li>
          <li>Null session blocked हो तो RID cycling (-r) try करो — कई बार users discover हो जाते हैं</li>
          <li>Shares पर sensitive files के लिए -i flag use करो — directory listing मिल जाती है</li>
          <li>Results को JSON में save करो — बाद में compare और track करना आसान होता है</li>
          <li>Large networks के लिए parallel execution use करो — GNU parallel या xargs -P</li>
          <li>enum4linux-ng के साथ --ldap flag try करो Active Directory environments में extra information के लिए</li>
          <li>हमेशा findings document करो — screenshots, JSON outputs, और notes maintain करो</li>
          <li>enum4linux-ng में --timeout flag use करो unresponsive hosts के लिए — scan time कम होगा</li>
          <li>Multiple shares पर एक साथ files list करने के लिए smbclient -L loop बनाओ</li>
          <li>Discovered usernames को CrackMapExec में feed करो credential spraying के लिए</li>
          <li>enum4linux-ng -A target -oJ output.json से JSON output save करो — jq से later analysis करो</li>
          <li>SMB signing disabled हो तो man-in-the-middle attacks possible हैं — defenders के लिए signing enable करना ज़रूरी है</li>
          <li>enum4linux-ng के --verbose flag से detailed output मिलता है debugging के लिए</li>
          <li>Discovered shares को network mapping tools में integrate करो — complete picture मिलेगी</li>
          <li>Regular basis पर अपने network पर enum4linux run करो — new vulnerabilities और misconfigurations detect होंगी</li>
        </ul>
      </div>

      <h2>enum4linux-ng Specific Features</h2>
      <p>
        enum4linux-ng में कई features हैं जो original version में नहीं हैं। यह Python में लिखा गया है और modern protocols support करता है।
      </p>
      <CodeBlock
        title="enum4linux-ng Exclusive Features"
        code={`# SMBv2/v3 support (modern Windows):
enum4linux-ng -A TARGET_IP

# JSON output (structured data):
enum4linux-ng -A TARGET_IP -oJ output.json

# YAML output:
enum4linux-ng -A TARGET_IP -oY output.yaml

# Asynchronous scanning (faster):
# enum4linux-ng internally async operations use करता है

# Better error handling:
# Connection timeouts और errors gracefully handle होते हैं

# LDAP enumeration:
enum4linux-ng -A TARGET_IP --ldap

# Custom config file:
enum4linux-ng -A TARGET_IP --config custom.ini

# Output to stdout (pipe-friendly):
enum4linux-ng -A TARGET_IP -oJ -

# Quiet mode (minimal output):
enum4linux-ng -A TARGET_IP -q`}
      />
      <CodeBlock
        title="JSON Output Analysis"
        code={`# JSON output parse करें:
cat output.json | python3 -m json.tool

# Users extract करें:
cat output.json | jq '.users[].name'

# Groups extract करें:
cat output.json | jq '.groups[].name'

# Shares extract करें:
cat output.json | jq '.shares[].name'

# Password policy extract करें:
cat output.json | jq '.password_policy'

# OS info extract करें:
cat output.json | jq '.os_info'

# Multiple targets aggregate करें:
for f in results/*.json; do
    ip=$(basename $f .json)
    users=$(cat $f | jq '.users | length')
    echo "$ip: $users users"
done`}
      />
      <CodeBlock
        title="Comparison: enum4linux vs enum4linux-ng"
        code={`# Original enum4linux:
# - Perl-based
# - SMBv1 only
# - Text output only
# - No async operations
# - Limited error handling

# enum4linux-ng:
# - Python-based
# - SMBv1/v2/v3 support
# - JSON/YAML output
# - Async operations
# - Better error handling
# - LDAP support
# - Active development

# Migration:
# Simply replace 'enum4linux' with 'enum4linux-ng' in your scripts
# Most flags are compatible

# Example:
# Old: enum4linux -a TARGET_IP
# New: enum4linux-ng -A TARGET_IP`}
      />

      <h2>Common Attack Patterns</h2>
      <p>
        Enum4linux के through discover की गई information कई attack patterns में use होती है। यह समझना ज़रूरी है कि attackers इस information का कैसे फायदा उठाते हैं।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Credential Stuffing:</strong> Discovered usernames को common passwords के against spray करना — lockout threshold check करके</li>
        <li><strong className="text-white">Share Enumeration → Data Exfiltration:</strong> Open shares से sensitive files download करना — financial data, credentials, configs</li>
        <li><strong className="text-white">RID Cycling → User Discovery:</strong> Brute forcing SIDs से hidden user accounts discover करना — service accounts, admin accounts</li>
        <li><strong className="text-white">Password Policy → Brute Force Planning:</strong> Lockout threshold और minimum length पता करके effective brute force strategy बनाना</li>
        <li><strong className="text-white">OS Fingerprinting → Exploit Selection:</strong> OS version पता करके specific exploits select करना — EternalBlue, PrintNightmare</li>
        <li><strong className="text-white">Group Membership → Privilege Escalation:</strong> Admin groups के members identify करके targeted attacks करना</li>
        <li><strong className="text-white">Session Enumeration → Lateral Movement:</strong> Active sessions पता करके compromised systems से lateral movement करना</li>
        <li><strong className="text-white">Null Session → Information Gathering:</strong> बिना credentials के maximum information extract करना — reconnaissance phase में</li>
      </ul>

      <div className="warning-box mt-6">
        <strong>⚠️ Final Warning:</strong>
        Enum4linux एक powerful enumeration tool है।
        इसे केवल उन networks पर proper authorization के साथ use करें जिनके आप owner हैं या explicitly permitted हैं।
        Unauthorized network enumeration illegal है और भारत में Information Technology Act, 2000 (Sections 43 और 66) के तहत criminal prosecution हो सकती है, जिसमें 3 साल तक की कैद और ₹2 lakhs तक का जुर्माना हो सकता है।
        हमेशा written authorization प्राप्त करें और scope से बाहर न जाएं।
        Penetration testing engagement में भी rules of engagement follow करना ज़रूरी है।
        अगर कोई unexpected finding मिले तो immediately client को inform करो।
        Responsible disclosure follow करो। अगर SMB enumeration के दौरान sensitive data मिले तो उसे securely handle करो और client report में properly document करो। Corporate environments में भी data handling procedures और monitoring policies follow करें।
      </div>

      <p className="text-gray-500 text-xs mt-4 text-center">
        enum4linux SMB enumeration tool — Windows network security assessment के लिए essential tool
      </p>
    </TutorialLayout>
  )
}
