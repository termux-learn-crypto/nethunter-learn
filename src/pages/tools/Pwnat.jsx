import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Pwnat() {
  return (
    <TutorialLayout title="Pwnat" subtitle="Pwnat - टनलिंग सुरक्षा परीक्षण टूल" icon="🌐">
      <h2>Pwnat ka upyog kaise karein</h2>
      <p>Pwnat ka upyog karna seekhna aasan hai. Neeche kuch real-world commands given hain:</p>
      <h3>1. Basic tunnel</h3>
      <CodeBlock code={'pwnat client --remote server.com:8080 --local 127.0.0.1:9000'}/>
      <p>Remote server se tunnel establish karein</p>
      <h3>2. Reverse tunnel</h3>
      <CodeBlock code={'pwnat server --reverse --port 8080'}/>
      <p>Reverse tunnel server start karein</p>
      <h3>3. Socks proxy</h3>
      <CodeBlock code={'pwnat client --socks 127.0.0.1:1080 --remote server.com:8080'}/>
      <p>SOCKS proxy ke through tunnel banayein</p>
      <h3>4. HTTP tunnel</h3>
      <CodeBlock code={'pwnat client --http --remote server.com:80 --local 127.0.0.1:3000'}/>
      <p>HTTP protocol ke through tunnel karein</p>
      <h3>5. Persistent connection</h3>
      <CodeBlock code={'pwnat client --remote server.com:8080 --retry 10 --interval 30s'}/>
      <p>Auto-reconnect ke saath persistent connection</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Security testing:</strong> Pwnat cross-platform compatibility aur easy integration provide karta hai</li>
        <li><strong>Attack simulation:</strong> Pwnat multiple attack techniques aur scanning methods support karta hai</li>
        <li><strong>Advanced capabilities:</strong> Pwnat extensible architecture ke saath custom module development allow karta hai</li>
        <li><strong>Automation support:</strong> Pwnat security testing aur vulnerability assessment ke liye ek comprehensive tool hai</li>
        <li><strong>Cross-platform:</strong> Pwnat automated workflows ke saath time-consuming tasks ko streamline karta hai</li>
      </ul>
<h2>Pwnat ke saath advanced techniques</h2>
      <p>Pwnat ke saath advanced techniques try karne ke liye multiple tools ka combination use karein:</p>
      <CodeBlock code={'#!/bin/bash\n# Pwnat automation script\npwnat client --remote server.com:8080 --local 127.0.0.1:9000\npwnat server --reverse --port 8080\necho \"Pwnat scan complete\"'}/>
      <p>Scripting aur automation se Pwnat ko CI/CD pipelines aur regular security audits mein integrate kiya ja sakta hai.</p>

      <h2>Use Cases and Applications</h2>
      <h3>Tunneling security assessment</h3>
      <p>Pwnat ka upyog tunneling vulnerabilities identify karne aur security posture assess karne mein karein</p>
      <h3>Compliance testing</h3>
      <p>PCI DSS, ISO 27001 aur security audit requirements ke liye Pwnat use karein</p>
      <h3>Skill development</h3>
      <p>Pwnat ke practical use se cybersecurity skills develop karein aur real-world scenarios mein practice karein</p>

      <h2>Pwnat ke sath sarvottam abhyas</h2>
      <ul>
        <li>Pwnat sirf authorized targets par hi use karein</li>
        <li>Pwnat ko regularly update karte rahein</li>
        <li>Testing ke baad temporary files ko safely delete karein</li>
        <li>Results ko encrypted form mein store karein</li>
        <li>Multiple tools ke combination se results verify karein</li>
      </ul>

      <h2>Pwnat ke sath surksha parikshan karyapravah</h2>
      <ol>
        <li><strong>Jankari sangrah:</strong> OSINT techniques se target information collect karein</li>
        <li><strong>Scanning:</strong> Pwnat se vulnerabilities scan karein</li>
        <li><strong>Vishleshan:</strong> Results ka analysis aur false positives filter karein</li>
        <li><strong>Satypan:</strong> Manual techniques se results verify karein</li>
        <li><strong>Reporting:</strong> Findings ko detailed report mein document karein</li>
      </ol>

      <div className="info-box">
        💡 <strong>Visheshagya sujhav:</strong> Pwnat ka upyog karne se pehle --help check karein aur documentation padhein. TryHackMe, HackTheBox aur PentesterLab jaise platforms par abhyas karein.
      </div>

      <h2>Troubleshooting Guide</h2>
      <p><strong>Pwnat command nahi mil rahi:</strong> `which pwnat` ya `dpkg -l | grep pwnat` se check karein. `sudo apt install pwnat` se install karein.</p>
      <p><strong>Permission error:</strong> `sudo pwnat` se command chalaayein ya appropriate permissions set karein.</p>
      <p><strong>Dheema performance:</strong> Threads kam karein, timeout badhayein, ya target ko chhote bhagon mein divide karein.</p>
      <p><strong>Galat output:</strong> `sudo apt update && sudo apt upgrade` se update karein. Purane versions mein bugs ho sakte hain.</p>

      <h2>Alternative Tools</h2>
      <p>Tunneling category mein kai alternatives available hain. Pratyek tool ki apni vishesh taaqtein hain:</p>
      <table>
        <thead><tr><th>Tool</th><th>Category</th><th>Mukhya visheshta</th></tr></thead>
        <tbody>
          <tr><td>Pwnat</td><td>Tunneling</td><td>WebSocket tunneling aur bidirectional encrypted communication ke liye ek modern protocol wrapper.</td></tr>
          <tr><td>Nmap</td><td>Recon</td><td>Port scanning aur service detection</td></tr>
          <tr><td>Metasploit</td><td>Exploitation</td><td>Modular exploitation framework</td></tr>
        </tbody>
      </table>
      <p>Saravottam parinamon ke liye kai tools ke sanyojan ka upyog karein.</p>
</TutorialLayout>
  )
}