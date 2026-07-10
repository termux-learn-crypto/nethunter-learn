import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Stunnel() {
  return (
    <TutorialLayout title="Stunnel" subtitle="Stunnel - टनलिंग सुरक्षा परीक्षण टूल" icon="🔒">
      <h2>Stunnel ka upyog kaise karein</h2>
      <p>Stunnel ka upyog karna seekhna aasan hai. Neeche kuch real-world commands given hain:</p>
      <h3>1. Basic tunnel</h3>
      <CodeBlock code={'stunnel client --remote server.com:8080 --local 127.0.0.1:9000'}/>
      <p>Remote server se tunnel establish karein</p>
      <h3>2. Reverse tunnel</h3>
      <CodeBlock code={'stunnel server --reverse --port 8080'}/>
      <p>Reverse tunnel server start karein</p>
      <h3>3. Socks proxy</h3>
      <CodeBlock code={'stunnel client --socks 127.0.0.1:1080 --remote server.com:8080'}/>
      <p>SOCKS proxy ke through tunnel banayein</p>
      <h3>4. HTTP tunnel</h3>
      <CodeBlock code={'stunnel client --http --remote server.com:80 --local 127.0.0.1:3000'}/>
      <p>HTTP protocol ke through tunnel karein</p>
      <h3>5. Persistent connection</h3>
      <CodeBlock code={'stunnel client --remote server.com:8080 --retry 10 --interval 30s'}/>
      <p>Auto-reconnect ke saath persistent connection</p>

      <h2>Tunneling Features</h2>
      <ul>
        <li><strong>Security testing:</strong> Stunnel multiple proxy protocols (SOCKS, HTTP, SSH) support karta hai</li>
        <li><strong>Attack simulation:</strong> Stunnel network traffic tunneling aur port forwarding ke liye ek robust tool hai</li>
        <li><strong>Advanced capabilities:</strong> Stunnel reverse tunneling aur dynamic port forwarding dono support karta hai</li>
        <li><strong>Automation support:</strong> Stunnel firewall bypass aur network segmentation testing ke liye ideal hai</li>
        <li><strong>Cross-platform:</strong> Stunnel encrypted tunnels ke through secure data exfiltration provide karta hai</li>
      </ul>
<h2>Stunnel ke saath advanced techniques</h2>
      <p>Stunnel ke saath advanced techniques try karne ke liye multiple tools ka combination use karein:</p>
      <CodeBlock code={'#!/bin/bash\n# Stunnel automation script\nstunnel client --remote server.com:8080 --local 127.0.0.1:9000\nstunnel server --reverse --port 8080\necho \"Stunnel scan complete\"'}/>
      <p>Scripting aur automation se Stunnel ko CI/CD pipelines aur regular security audits mein integrate kiya ja sakta hai.</p>

      <h2>Tunneling Use Cases</h2>
      <h3>Tunneling security assessment</h3>
      <p>Stunnel ka upyog tunneling vulnerabilities identify karne aur security posture assess karne mein karein</p>
      <h3>Compliance testing</h3>
      <p>PCI DSS, ISO 27001 aur security audit requirements ke liye Stunnel use karein</p>
      <h3>Skill development</h3>
      <p>Stunnel ke practical use se cybersecurity skills develop karein aur real-world scenarios mein practice karein</p>

      <h2>Tunneling Tools Comparison</h2>
      <p>Tunneling category mein kai alternatives available hain. Pratyek tool ki apni vishesh taaqtein hain:</p>
      <table>
        <thead><tr><th>Tool</th><th>Category</th><th>Mukhya visheshta</th></tr></thead>
        <tbody>
          <tr><td>Stunnel</td><td>Tunneling</td><td>protocol tunneling aur traffic obfuscation ke liye ek comprehensive framework.</td></tr>
          <tr><td>Nmap</td><td>Recon</td><td>Port scanning aur service detection</td></tr>
          <tr><td>Metasploit</td><td>Exploitation</td><td>Modular exploitation framework</td></tr>
        </tbody>
      </table>
      <p>Saravottam parinamon ke liye kai tools ke sanyojan ka upyog karein.</p>
<h2>Tunneling: Common Issues</h2>
      <p><strong>Stunnel command nahi mil rahi:</strong> `which stunnel` ya `dpkg -l | grep stunnel` se check karein. `sudo apt install stunnel` se install karein.</p>
      <p><strong>Permission error:</strong> `sudo stunnel` se command chalaayein ya appropriate permissions set karein.</p>
      <p><strong>Dheema performance:</strong> Threads kam karein, timeout badhayein, ya target ko chhote bhagon mein divide karein.</p>
      <p><strong>Galat output:</strong> `sudo apt update && sudo apt upgrade` se update karein. Purane versions mein bugs ho sakte hain.</p>

      <h2>Stunnel ke sath sarvottam abhyas</h2>
      <ul>
        <li>Stunnel sirf authorized targets par hi use karein</li>
        <li>Stunnel ko regularly update karte rahein</li>
        <li>Testing ke baad temporary files ko safely delete karein</li>
        <li>Results ko encrypted form mein store karein</li>
        <li>Multiple tools ke combination se results verify karein</li>
      </ul>

      <h2>Stunnel ke sath surksha parikshan karyapravah</h2>
      <ol>
        <li><strong>Jankari sangrah:</strong> OSINT techniques se target information collect karein</li>
        <li><strong>Scanning:</strong> Stunnel se vulnerabilities scan karein</li>
        <li><strong>Vishleshan:</strong> Results ka analysis aur false positives filter karein</li>
        <li><strong>Satypan:</strong> Manual techniques se results verify karein</li>
        <li><strong>Reporting:</strong> Findings ko detailed report mein document karein</li>
      </ol>

      <div className="info-box">
        💡 <strong>Visheshagya sujhav:</strong> Stunnel ka upyog karne se pehle --help check karein aur documentation padhein. TryHackMe, HackTheBox aur PentesterLab jaise platforms par abhyas karein.
      </div>

      </TutorialLayout>
  )
}