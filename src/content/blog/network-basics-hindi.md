---
id: network-basics-hindi
title: Network Basics for Hackers - नेटवर्किंग की पूरी जानकारी
excerpt: Networking fundamentals jo har hacker ko aani chahiye. TCP/IP, ports, protocols, aur subnetting — sab Hindi mein.
category: ट्यूटोरियल
date: 2026-06-30
readTime: 14 मिनट
tags: नेटवर्क, टीसीपी/आईपी, पोर्ट्स, बेसिक्स
featured: false
---

## Networking Kya Hai?

Networking do ya zyada devices ke beech communication ka process hai. Ethical hacking mein networking samajhna sabse important hai kyunki saare attacks network ke through hote hain.

## TCP/IP Model

5 layers:

### 1. Application Layer
HTTP, HTTPS, FTP, SMTP, DNS — user-facing protocols

### 2. Transport Layer  
TCP, UDP — data delivery ensure karta hai

### 3. Network Layer
IP — routing aur addressing

### 4. Data Link Layer
MAC addresses, ARP

### 5. Physical Layer
Cables, signals, hardware

## Important Protocols

| Protocol | Port | Use |
|----------|------|-----|
| HTTP | 80 | Web traffic |
| HTTPS | 443 | Secure web |
| FTP | 21 | File transfer |
| SSH | 22 | Remote shell |
| DNS | 53 | Domain resolution |
| SMB | 445 | Windows file sharing |
| RDP | 3389 | Remote desktop |

## Ports and Services

Identification:
```bash
# Common vulnerable ports
21 - FTP (anonymous login)
22 - SSH (brute force)
23 - Telnet (unencrypted)
80 - HTTP (web attacks)
445 - SMB (eternalblue)
3389 - RDP (bluekeep)
```

## Subnetting Basics

```bash
# Common subnet masks
/24 = 255.255.255.0 = 254 hosts
/16 = 255.255.0.0 = 65534 hosts
/8  = 255.0.0.0 = 16M+ hosts

# Example: 192.168.1.0/24
# Network: 192.168.1.0
# Broadcast: 192.168.1.255
# Hosts: 192.168.1.1 - 192.168.1.254
```

## OSI Model (Reference)

7 layers — TCP/IP ka detailed version hai. Interviews mein poochega:
1. Physical
2. Data Link
3. Network
4. Transport
5. Session
6. Presentation
7. Application

## Network Commands

```bash
# Windows/Linux both:
ipconfig / ifconfig
ping
tracert / traceroute
netstat
nslookup
arp -a

# Linux specific:
iwconfig
tcpdump
nmap
```

## Conclusion

Networking basics ke bina hacking seekhna mushkil hai. Pehle networking master karein, phir tools seekhein.
