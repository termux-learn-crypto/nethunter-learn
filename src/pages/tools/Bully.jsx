import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Bully() {
  return (
    <TutorialLayout title="Bully" subtitle="Bully - वाईफाई सुरक्षा परीक्षण टूल" icon="💪">
      <h2>Bully ka upyog kaise karein</h2>
      <p>Bully ka upyog karna seekhna aasan hai. Neeche kuch real-world commands given hain:</p>
      <h3>1. Monitor mode enable</h3>
      <CodeBlock code={'sudo airmon-ng start wlan0 && bully'}/>
      <p>Bully ke liye monitor mode activate karein</p>
      <h3>2. Target scan</h3>
      <CodeBlock code={'bully --scan wlan0mon'}/>
      <p>Bully se WiFi networks scan karein</p>
      <h3>3. Handshake capture</h3>
      <CodeBlock code={'bully --capture --bssid 00:11:22:33:44:55 wlan0mon'}/>
      <p>4-way handshake capture karna</p>
      <h3>4. Dictionary attack</h3>
      <CodeBlock code={'bully --crack -w /usr/share/wordlists/rockyou.txt capture.hccapx'}/>
      <p>RockYou wordlist se password crack karein</p>
      <h3>5. Verbose output with logging</h3>
      <CodeBlock code={'bully --verbose --log scan_$(date +%Y%m%d).log'}/>
      <p>Detailed output ke saath log file create karein</p>

      <h2>WiFi Security Features</h2>
      <ul>
        <li><strong>Security testing:</strong> Bully 802.11 protocol analysis ke through wireless network reconnaissance provide karta hai</li>
        <li><strong>Attack simulation:</strong> Bully enterprise WiFi security assessment aur penetration testing ke liye specialized tool hai</li>
        <li><strong>Advanced capabilities:</strong> Bully WPA/WPA2 personal aur enterprise dono networks ki vulnerability scan karta hai</li>
        <li><strong>Automation support:</strong> Bully DoS resilience testing aur signal strength analysis ke liye bhi use hota hai</li>
        <li><strong>Cross-platform:</strong> Bully automated deauthentication attacks aur evil twin setup support karta hai</li>
      </ul>
<h2>Wireless Testing Use Cases</h2>
      <h3>WiFi security audit</h3>
      <p>Bully ka upyog karke WiFi networks ki security assess karein aur weak passwords identify karein</p>
      <h3>Enterprise network testing</h3>
      <p>Corporate environment mein rogue access points aur weak encryption ko detect karein</p>
      <h3>Educational practice</h3>
      <p>Bully ke through wireless security concepts aur attack methodologies seekhein</p>

      <h2>Bully ke saath advanced techniques</h2>
      <p>Bully ke saath advanced techniques try karne ke liye multiple tools ka combination use karein:</p>
      <CodeBlock code={'#!/bin/bash\n# Bully automation script\nsudo airmon-ng start wlan0 && bully\nbully --scan wlan0mon\necho \"Bully scan complete\"'}/>
      <p>Scripting aur automation se Bully ko CI/CD pipelines aur regular security audits mein integrate kiya ja sakta hai.</p>

      <h2>WiFi Security — FAQ</h2>
      <div className="faq-item">
        <h3>Bully use karte waqt common mistakes kya hain?</h3>
        <p>Bully use karte waqt common mistakes mein wrong channel selection, overlapping networks, aur incomplete handshake capture shamil hain. Hamesha multiple capture attempts karein aur handshake confirm karein.</p>
      </div>
      <div className="faq-item">
        <h3>Bully se WiFi password crack karne mein kitna time lagta hai?</h3>
        <p>Bully se WiFi password cracking ka time network traffic, handshake availability, aur password complexity par depend karta hai. Simple passwords seconds mein crack ho sakte hain, jabki complex passwords weeks bhi lag sakte hain.</p>
      </div>
      <div className="faq-item">
        <h3>Bully se handshake capture kaise karein?</h3>
        <p>Bully se handshake capture karne ke liye pehle monitor mode enable karein (airmon-ng), phir airodump-ng se target network par capture start karein. Jab client connect/deconnect hoga to handshake auto capture ho jayega.</p>
      </div>
      <div className="faq-item">
        <h3>Bully ke liye best hardware kya hai?</h3>
        <p>Bully ke liye monitor mode aur packet injection support karne wala adapter chahiye. Realtek RTL8812AU, RTL8187L, ya Alfa AWUS036ACH recommended hain.</p>
      </div>
<h2>Bully ke sath sarvottam abhyas</h2>
      <ul>
        <li>Bully sirf authorized targets par hi use karein</li>
        <li>Bully ko regularly update karte rahein</li>
        <li>Testing ke baad temporary files ko safely delete karein</li>
        <li>Results ko encrypted form mein store karein</li>
        <li>Multiple tools ke combination se results verify karein</li>
      </ul>

      <h2>Wireless Penetration Testing Workflow</h2>
      <ol>
        <li><strong>Jankari sangrah:</strong> OSINT techniques se target information collect karein</li>
        <li><strong>Scanning:</strong> Bully se vulnerabilities scan karein</li>
        <li><strong>Vishleshan:</strong> Results ka analysis aur false positives filter karein</li>
        <li><strong>Satypan:</strong> Manual techniques se results verify karein</li>
        <li><strong>Reporting:</strong> Findings ko detailed report mein document karein</li>
      </ol>

      <div className="info-box">
        💡 <strong>Visheshagya sujhav:</strong> Bully ka upyog karne se pehle --help check karein aur documentation padhein. TryHackMe, HackTheBox aur PentesterLab jaise platforms par abhyas karein.
      </div>

      <h2>WiFi Hacking: Aam Masle aur Samadhan</h2>
      <p><strong>Bully command nahi mil rahi:</strong> `which bully` ya `dpkg -l | grep bully` se check karein. `sudo apt install bully` se install karein.</p>
      <p><strong>Permission error:</strong> `sudo bully` se command chalaayein ya appropriate permissions set karein.</p>
      <p><strong>Dheema performance:</strong> Threads kam karein, timeout badhayein, ya target ko chhote bhagon mein divide karein.</p>
      <p><strong>Galat output:</strong> `sudo apt update && sudo apt upgrade` se update karein. Purane versions mein bugs ho sakte hain.</p>

      <h2>WiFi Hacking Tools Comparison</h2>
      <p>WiFi category mein kai alternatives available hain. Pratyek tool ki apni vishesh taaqtein hain:</p>
      <table>
        <thead><tr><th>Tool</th><th>Category</th><th>Mukhya visheshta</th></tr></thead>
        <tbody>
          <tr><td>Bully</td><td>WiFi</td><td>wireless client deauthentication testing aur captive portal analysis ke liye ek specialized tool.</td></tr>
          <tr><td>Nmap</td><td>Recon</td><td>Port scanning aur service detection</td></tr>
          <tr><td>Metasploit</td><td>Exploitation</td><td>Modular exploitation framework</td></tr>
        </tbody>
      </table>
      <p>Saravottam parinamon ke liye kai tools ke sanyojan ka upyog karein.</p>
</TutorialLayout>
  )
}