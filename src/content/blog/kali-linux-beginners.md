---
id: kali-linux-beginners
title: Kali Linux बिगिनर्स गाइड - सब कुछ जो आपको जानना चाहिए
excerpt: Kali Linux ethical hacking ka sabse popular OS hai. Jaaniye Kali Linux ko kaise install, configure aur use karte hain.
category: ट्यूटोरियल
date: 2026-06-18
readTime: 12 मिनट
tags: काली लिनक्स, बिगिनर, इंस्टॉलेशन, लिनक्स बेसिक्स
featured: false
---

## Kali Linux Kya Hai?

Kali Linux ek advanced penetration testing aur security auditing operating system hai. Yeh Offensive Security dwara develop kiya gaya hai aur Debian-based Linux distribution hai. Purani BackTrack ka successor hai aur January 2013 mein release hua tha.

## Kali Linux Release History

- **Kali Linux 1.0** (March 2013) — Pehla release
- **Kali Linux 2.0** (August 2015) — Sana codename
- **Kali Linux 2016.x** — Rolling release model
- **Kali Linux 2017.x** — New tools aur updates
- **Kali Linux 2018.x** — GTK3 themes, Kali Undercover
- **Kali Linux 2019.x** — NetHunter improvements
- **Kali Linux 2020.x** — Kali NetHunter Kex, non-root user
- **Kali Linux 2024.x** — Latest with 600+ tools

## Kali Linux Features

1. **600+ Pre-installed Tools**: Penetration testing ke liye sab tools ready
2. **FHS Compliant**: Standard Linux file system structure
3. **Full Disk Encryption**: LUKS encryption support
4. **Custom Kernels**: Patched for injection & packet capture
5. **Forensics Mode**: Auto-mount disable for forensics
6. **Undercover Mode**: Windows jaisa dikhta hai
7. **Win-Kex**: Kali apps Windows me chalayein

## Kaise Install Karein

### Virtual Machine (Safest)

```bash
# 1. Download Kali ISO from kali.org
# 2. VirtualBox ya VMware install karein
# 3. VM create karein (2GB RAM, 20GB disk)
# 4. ISO mount karein aur install karein
# 5. Update karein:
sudo apt update && sudo apt full-upgrade -y
```

### Dual Boot

```bash
# 1. Windows ke saath free space create karein (min 30GB)
# 2. USB bootable banayein
# 3. Boot from USB aur install karre
# 4. GRUB bootloader dual boot handle karega
```

### Windows Subsystem for Linux (WSL2)

```powershell
# Windows 10/11: PowerShell me run karein
wsl --install -d kali-linux

# Phir Kali package install:
kali update && kali upgrade
```

## Essential Commands

```bash
# Update
sudo apt update
sudo apt full-upgrade -y

# Tool search
apt-cache search nmap

# Service management
systemctl start postgresql
systemctl enable postgresql
service networking restart

# Network
ifconfig
iwconfig
iwlist wlan0 scan
```

## Kali Linux Desktop Environments

- **XFCE** (Default) — Lightweight aur fast
- **GNOME** — Modern look
- **KDE Plasma** — Beautiful & feature-rich
- **i3** — Tiling window manager for experts

## Must-Know Directories

| Directory | Purpose |
|-----------|---------|
| `/root/` | Root user home directory |
| `/etc/` | Configuration files |
| `/usr/share/` | Tool scripts & wordlists |
| `/usr/share/wordlists/` | rockyou.txt yahan hai |
| `/var/log/` | Log files |

## Kali Linux Tools Categories

### Information Gathering
Nmap, WhoIs, DNSenum, Maltego, TheHarvester

### Vulnerability Analysis
Nikto, OpenVAS, WPScan, SQLMap

### Web Application
Burp Suite, OWASP ZAP, Dirb, Gobuster

### Password Attacks
John the Ripper, Hashcat, Hydra, Crunch

### Wireless Attacks
Aircrack-ng, Reaver, PixieWPS, Wifite

### Exploitation Tools
Metasploit Framework, Searchsploit, BeEF XSS

### Forensics
Autopsy, Binwalk, Volatility, Foremost

### Reverse Engineering
Ghidra, Radare2, Apktool, Objection

## Best Practices

1. **Always update**: `sudo apt update && sudo apt full-upgrade`
2. **Use VPN**: Apni identity hide karein
3. **VM me practice**: Main system pe directly install na karein
4. **Legal rahein**: Sirf authorized systems pe test karein
5. **Snapshots**: VM snapshots bana ke rakhein
6. **Wordlists**: Rockyou.txt extract karein: `gunzip /usr/share/wordlists/rockyou.txt.gz`

## Kali Alternatives

| Tool | Description |
|------|-------------|
| **Parrot OS** | Lighter than Kali, good for privacy |
| **BlackArch** | 2800+ tools for advanced users |
| **BackBox** | Ubuntu-based, good for forensics |
| **NetHunter** | Kali for Android phones |

## Conclusion

Kali Linux ek powerful tool hai lekin use responsibly karna chahiye. VM se start karein, basics master karein, phir advanced features explore karein. Remember — Kali works best as a virtual machine, not as your daily driver!
