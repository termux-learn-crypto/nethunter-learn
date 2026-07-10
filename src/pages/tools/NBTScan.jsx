import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function NBTScan() {
  return (
    <TutorialLayout title="NBTScan" subtitle="NBTScan - रीकॉन सुरक्षा परीक्षण टूल" icon="🖥️">
      <h2>NBTScan ka upyog kaise karein</h2>
      <p>NBTScan ka upyog karna seekhna aasan hai. Neeche kuch real-world commands given hain:</p>
      <h3>1. Basic scan</h3>
      <CodeBlock code={'nbtscan --target example.com --quick'}/>
      <p>NBTScan se basic reconnaissance karein</p>
      <h3>2. Deep enumeration</h3>
      <CodeBlock code={'nbtscan -d example.com --all --output json'}/>
      <p>Detailed enumeration with JSON output</p>
      <h3>3. Subdomain discovery</h3>
      <CodeBlock code={'nbtscan --subdomains --wordlist subdomains.txt example.com'}/>
      <p>Subdomain enumeration with custom wordlist</p>
      <h3>4. API integration scan</h3>
      <CodeBlock code={'nbtscan --shodan --virustotal example.com'}/>
      <p>Third-party APIs ke saath deep scan</p>
      <h3>5. Export results</h3>
      <CodeBlock code={'nbtscan -t example.com -o report.html --format html'}/>
      <p>Results ko HTML report mein export karein</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Security testing:</strong> NBTScan security testing aur vulnerability assessment ke liye ek comprehensive tool hai</li>
        <li><strong>Attack simulation:</strong> NBTScan extensible architecture ke saath custom module development allow karta hai</li>
        <li><strong>Advanced capabilities:</strong> NBTScan automated workflows ke saath time-consuming tasks ko streamline karta hai</li>
        <li><strong>Automation support:</strong> NBTScan multiple attack techniques aur scanning methods support karta hai</li>
        <li><strong>Cross-platform:</strong> NBTScan cross-platform compatibility aur easy integration provide karta hai</li>
      </ul>
<h2>NBTScan ke saath advanced techniques</h2>
      <p>NBTScan ke saath advanced techniques try karne ke liye multiple tools ka combination use karein:</p>
      <CodeBlock code={'#!/bin/bash\n# NBTScan automation script\nnbtscan --target example.com --quick\nnbtscan -d example.com --all --output json\necho \"NBTScan scan complete\"'}/>
      <p>Scripting aur automation se NBTScan ko CI/CD pipelines aur regular security audits mein integrate kiya ja sakta hai.</p>

      <h2>Use Cases and Applications</h2>
      <h3>Recon security assessment</h3>
      <p>NBTScan ka upyog recon vulnerabilities identify karne aur security posture assess karne mein karein</p>
      <h3>Compliance testing</h3>
      <p>PCI DSS, ISO 27001 aur security audit requirements ke liye NBTScan use karein</p>
      <h3>Skill development</h3>
      <p>NBTScan ke practical use se cybersecurity skills develop karein aur real-world scenarios mein practice karein</p>

      <h2>NBTScan ke sath sarvottam abhyas</h2>
      <ul>
        <li>NBTScan sirf authorized targets par hi use karein</li>
        <li>NBTScan ko regularly update karte rahein</li>
        <li>Testing ke baad temporary files ko safely delete karein</li>
        <li>Results ko encrypted form mein store karein</li>
        <li>Multiple tools ke combination se results verify karein</li>
      </ul>

      <h2>NBTScan ke sath surksha parikshan karyapravah</h2>
      <ol>
        <li><strong>Jankari sangrah:</strong> OSINT techniques se target information collect karein</li>
        <li><strong>Scanning:</strong> NBTScan se vulnerabilities scan karein</li>
        <li><strong>Vishleshan:</strong> Results ka analysis aur false positives filter karein</li>
        <li><strong>Satypan:</strong> Manual techniques se results verify karein</li>
        <li><strong>Reporting:</strong> Findings ko detailed report mein document karein</li>
      </ol>

      <div className="info-box">
        💡 <strong>Visheshagya sujhav:</strong> NBTScan ka upyog karne se pehle --help check karein aur documentation padhein. TryHackMe, HackTheBox aur PentesterLab jaise platforms par abhyas karein.
      </div>

      <h2>Troubleshooting Guide</h2>
      <p><strong>NBTScan command nahi mil rahi:</strong> `which nbtscan` ya `dpkg -l | grep nbtscan` se check karein. `sudo apt install nbtscan` se install karein.</p>
      <p><strong>Permission error:</strong> `sudo nbtscan` se command chalaayein ya appropriate permissions set karein.</p>
      <p><strong>Dheema performance:</strong> Threads kam karein, timeout badhayein, ya target ko chhote bhagon mein divide karein.</p>
      <p><strong>Galat output:</strong> `sudo apt update && sudo apt upgrade` se update karein. Purane versions mein bugs ho sakte hain.</p>

      <h2>Alternative Tools</h2>
      <p>Recon category mein kai alternatives available hain. Pratyek tool ki apni vishesh taaqtein hain:</p>
      <table>
        <thead><tr><th>Tool</th><th>Category</th><th>Mukhya visheshta</th></tr></thead>
        <tbody>
          <tr><td>NBTScan</td><td>Recon</td><td>ASN mapping aur IP range ownership identification ke liye ek efficient recon scanner.</td></tr>
          <tr><td>Nmap</td><td>Recon</td><td>Port scanning aur service detection</td></tr>
          <tr><td>Metasploit</td><td>Exploitation</td><td>Modular exploitation framework</td></tr>
        </tbody>
      </table>
      <p>Saravottam parinamon ke liye kai tools ke sanyojan ka upyog karein.</p>
</TutorialLayout>
  )
}