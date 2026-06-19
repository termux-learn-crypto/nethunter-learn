---
id: nmap-beginners-guide
title: Nmap के साथ नेटवर्क स्कैनिंग - बिगिनर्स गाइड
excerpt: Nmap सीखना चाहते हैं? यह गाइड आपको nmap के सभी basic commands, scan types, और NSE scripts के बारे में सिखाएगा।
category: ट्यूटोरियल
date: 2026-06-10
readTime: 11 मिनट
tags: nmap, स्कैनिंग, नेटवर्क, बिगिनर
featured: true
---

## Nmap क्या है?

Nmap (Network Mapper) एक फ्री और ओपन-सोर्स टूल है जो network discovery और security auditing के लिए use किया जाता है। यह सबसे पहले 1997 में Gordon Lyon (Fyodor) ने बनाया था और आज भी यह सबसे ज़्यादा use होने वाला network scanner है।

## Nmap क्यों सीखें?

Nmap हर penetration tester, system administrator, और security researcher के लिए एक essential टूल है। इसकी मदद से आप:

- Network में कितने devices connected हैं, पता कर सकते हैं
- Ports open हैं या closed, check कर सकते हैं
- Operating system detect कर सकते हैं
- Running services aur unke versions identify कर सकते हैं
- NSE scripts से vulnerabilities scan कर सकते हैं

## Nmap Install कैसे करें

Kali Linux aur NetHunter में Nmap pre-installed aata है। अगर install nahi hai तो:

```bash
sudo apt install nmap
```

## Basic Nmap Commands

### 1. Simple Scan

सबसे basic scan - target ke open ports check karega:

```bash
nmap 192.168.1.1
```

### 2. Service Version Detection

Chal rahi services ke versions bhi batayega:

```bash
nmap -sV 192.168.1.1
```

### 3. OS Detection

Target ka operating system detect karega:

```bash
nmap -O 192.168.1.1
```

### 4. Aggressive Scan

OS detection, version detection, script scanning, aur traceroute ek saath:

```bash
nmap -A 192.168.1.1
```

## Nmap Scan Types

| Scan Type | Command | Description |
|-----------|---------|-------------|
| TCP SYN Scan | `nmap -sS` | Fastest aur most popular. Half-open scan |
| TCP Connect Scan | `nmap -sT` | Full TCP connection. Less stealthy |
| UDP Scan | `nmap -sU` | UDP ports scan. Slow but important |
| FIN Scan | `nmap -sF` | FIN flag packets. Bypass some firewalls |
| Ping Sweep | `nmap -sn` | Host discovery. Find live hosts |

## NSE Scripts

Nmap Scripting Engine (NSE) bahut powerful hai. 600+ pre-installed scripts aate hain:

```bash
# Vulnerability scan
nmap --script vuln 192.168.1.1

# Safe scripts
nmap --script safe 192.168.1.1

# HTTP enumeration
nmap --script http-enum 192.168.1.1

# SMB enumeration
nmap --script smb-enum-shares 192.168.1.1
```

## Output Formats

Nmap different formats mein results save kar sakta hai:

```bash
nmap -oN output.txt 192.168.1.1       # Normal
nmap -oX output.xml 192.168.1.1       # XML
nmap -oG output.grep 192.168.1.1      # Grepable
nmap -oA output 192.168.1.1           # All formats
```

## Best Practices

- **Firewall aware**: `-Pn` flag se firewall bypass karein
- **Timing templates**: `-T1` (slow) se `-T5` (insane) tak speed control
- **Avoid IDS**: `-D` flag se decoy IPs add karein
- **Network load**: Busy networks par `-T2` use karein
- **Practice legally**: Apne devices ya authorized labs par hi practice karein

## Conclusion

Nmap सीखना किसी भी security professional ke liye पहला step है। Basic commands se start karein, phir NSE scripts aur advanced options explore karein. Practice ke liye TryHackMe aur HackTheBox par nmap challenges solve karein.
