---
id: wireshark-packet-analysis
title: Wireshark से Packet Analysis सीखें - कम्प्लीट गाइड
excerpt: Wireshark के साथ network traffic analyze karna seekhein। Packet capture, filters, protocol hierarchy, aur network troubleshooting का complete guide।
category: ट्यूटोरियल
date: 2026-06-14
readTime: 9 मिनट
tags: वायरशार्क, पैकेट, एनालिसिस, नेटवर्क
featured: false
---

## Wireshark क्या है?

Wireshark दुनिया का सबसे popular network protocol analyzer है। यह आपके network interface se गुज़रने वाले सभी packets को capture करके दिखाता है। पहले इसका नाम Ethereal था और 1998 से यह open-source community में है।

## Wireshark क्यों सीखें?

- **Network troubleshooting**: Slow network ki problems identify karein
- **Security analysis**: Suspicious traffic detect karein
- **Protocol understanding**: Packets ka structure samjhein
- **Forensics**: Past attacks analyze karein
- **CTF challenges**: CTF mein packet analysis questions solve karein

## Wireshark Interface

जब आप Wireshark open karte hain, तो तीन main panels hote hain:

1. **Packet List Pane**: Saare captured packets ki list
2. **Packet Details Pane**: Selected packet ka detailed structure
3. **Packet Bytes Pane**: Raw hex aur ASCII data

## Packet Capture Basics

```bash
# Terminal mein tshark (Wireshark CLI)
tshark -i wlan0

# Specific number of packets
tshark -i wlan0 -c 100

# Save to file
tshark -i wlan0 -w capture.pcap
```

## Wireshark Filters

### Capture Filters (capture se pehle)

```
host 192.168.1.1
port 80
not arp
tcp port 443
src net 192.168.1.0/24
```

### Display Filters (capture ke baad)

```
http
dns
tcp.port == 80
ip.src == 192.168.1.1
http.request.method == "GET"
tcp contains "password"
```

## Practical Analysis Examples

### 1. HTTP Traffic Analysis

```bash
# Filter HTTP requests
http.request

# Find specific URL
http.request.uri contains "login"

# See HTTP methods
http.request.method
```

### 2. DNS Analysis

```
dns
dns.flags.response == 0     # DNS queries only
dns.qry.name contains "google"
dns.resp.addr               # DNS responses mein IPs
```

### 3. TCP Analysis

```
tcp.analysis.flags          # TCP issues
tcp.analysis.retransmission # Retransmitted packets
tcp.stream eq 0             # Full TCP conversation
Follow > TCP Stream         # Right-click option
```

### 4. Suspicious Activity Detection

```
# Possible malware traffic
http.request.uri contains ".exe"
http.request.uri contains ".dll"

# Data exfiltration
tcp.len > 1000

# Brute force attempts
tcp.flags.syn == 1 and tcp.flags.ack == 0
```

## Common Use Cases

| Scenario | Filter |
|----------|--------|
| Find all HTTP traffic | `http` |
| Find DNS queries | `dns` |
| See only TCP packets | `tcp` |
| Filter by IP | `ip.addr == 192.168.1.1` |
| Find passwords | `tcp contains "pass"` |
| See ARP traffic | `arp` |

## Wireshark Color Coding

Wireshark packets ko color se highlight karta hai:

- **Light purple**: TCP traffic
- **Light blue**: UDP traffic  
- **Light green**: HTTP traffic
- **Yellow**: Routing protocols
- **Red**: Malformed packets ya errors

## Wireshark ke Saath Best Practices

1. **Ethical use**: Sirf apne network ya authorized networks par capture karein
2. **Storage**: Captures bahut saari jagah lete hain. Filter use karein
3. **Privacy**: Captures mein sensitive data ho sakta hai. Secure store karein
4. **Practice**: Wireshark.org par sample captures milte hain practice ke liye

## Conclusion

Wireshark ek powerful tool hai network analysis ke liye। Basic filters se start karein, phir advanced features explore karein. Har security professional ko Wireshark aana chahiye — chahe woh network engineer ho ya penetration tester.
