import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Sparta() {
  return (
    <TutorialLayout title="Sparta" subtitle="Sparta - रीकॉन सुरक्षा परीक्षण टूल" icon="🛡️">
      <h2>Sparta ka upyog kaise karein</h2>
      <p>Sparta ka upyog karna seekhna aasan hai. Neeche kuch real-world commands given hain:</p>
      <h3>1. Basic scan</h3>
      <CodeBlock code={'sparta --target example.com --quick'}/>
      <p>Sparta se basic reconnaissance karein</p>
      <h3>2. Deep enumeration</h3>
      <CodeBlock code={'sparta -d example.com --all --output json'}/>
      <p>Detailed enumeration with JSON output</p>
      <h3>3. Subdomain discovery</h3>
      <CodeBlock code={'sparta --subdomains --wordlist subdomains.txt example.com'}/>
      <p>Subdomain enumeration with custom wordlist</p>
      <h3>4. API integration scan</h3>
      <CodeBlock code={'sparta --shodan --virustotal example.com'}/>
      <p>Third-party APIs ke saath deep scan</p>
      <h3>5. Export results</h3>
      <CodeBlock code={'sparta -t example.com -o report.html --format html'}/>
      <p>Results ko HTML report mein export karein</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Security testing:</strong> Sparta cross-platform compatibility aur easy integration provide karta hai</li>
        <li><strong>Attack simulation:</strong> Sparta automated workflows ke saath time-consuming tasks ko streamline karta hai</li>
        <li><strong>Advanced capabilities:</strong> Sparta multiple attack techniques aur scanning methods support karta hai</li>
        <li><strong>Automation support:</strong> Sparta extensible architecture ke saath custom module development allow karta hai</li>
        <li><strong>Cross-platform:</strong> Sparta security testing aur vulnerability assessment ke liye ek comprehensive tool hai</li>
      </ul>
<h2>Sparta ke saath advanced techniques</h2>
      <p>Sparta ke saath advanced techniques try karne ke liye multiple tools ka combination use karein:</p>
      <CodeBlock code={'#!/bin/bash\n# Sparta automation script\nsparta --target example.com --quick\nsparta -d example.com --all --output json\necho \"Sparta scan complete\"'}/>
      <p>Scripting aur automation se Sparta ko CI/CD pipelines aur regular security audits mein integrate kiya ja sakta hai.</p>

      <h2>Use Cases and Applications</h2>
      <h3>Recon security assessment</h3>
      <p>Sparta ka upyog recon vulnerabilities identify karne aur security posture assess karne mein karein</p>
      <h3>Compliance testing</h3>
      <p>PCI DSS, ISO 27001 aur security audit requirements ke liye Sparta use karein</p>
      <h3>Skill development</h3>
      <p>Sparta ke practical use se cybersecurity skills develop karein aur real-world scenarios mein practice karein</p>

      <h2>Sparta ke sath sarvottam abhyas</h2>
      <ul>
        <li>Sparta sirf authorized targets par hi use karein</li>
        <li>Sparta ko regularly update karte rahein</li>
        <li>Testing ke baad temporary files ko safely delete karein</li>
        <li>Results ko encrypted form mein store karein</li>
        <li>Multiple tools ke combination se results verify karein</li>
      </ul>

      <h2>Sparta ke sath surksha parikshan karyapravah</h2>
      <ol>
        <li><strong>Jankari sangrah:</strong> OSINT techniques se target information collect karein</li>
        <li><strong>Scanning:</strong> Sparta se vulnerabilities scan karein</li>
        <li><strong>Vishleshan:</strong> Results ka analysis aur false positives filter karein</li>
        <li><strong>Satypan:</strong> Manual techniques se results verify karein</li>
        <li><strong>Reporting:</strong> Findings ko detailed report mein document karein</li>
      </ol>

      <div className="info-box">
        💡 <strong>Visheshagya sujhav:</strong> Sparta ka upyog karne se pehle --help check karein aur documentation padhein. TryHackMe, HackTheBox aur PentesterLab jaise platforms par abhyas karein.
      </div>

      <h2>Troubleshooting Guide</h2>
      <p><strong>Sparta command nahi mil rahi:</strong> `which sparta` ya `dpkg -l | grep sparta` se check karein. `sudo apt install sparta` se install karein.</p>
      <p><strong>Permission error:</strong> `sudo sparta` se command chalaayein ya appropriate permissions set karein.</p>
      <p><strong>Dheema performance:</strong> Threads kam karein, timeout badhayein, ya target ko chhote bhagon mein divide karein.</p>
      <p><strong>Galat output:</strong> `sudo apt update && sudo apt upgrade` se update karein. Purane versions mein bugs ho sakte hain.</p>

      <h2>Alternative Tools</h2>
      <p>Recon category mein kai alternatives available hain. Pratyek tool ki apni vishesh taaqtein hain:</p>
      <table>
        <thead><tr><th>Tool</th><th>Category</th><th>Mukhya visheshta</th></tr></thead>
        <tbody>
          <tr><td>Sparta</td><td>Recon</td><td>port scanning aur service fingerprinting ke liye ek efficient recon solution.</td></tr>
          <tr><td>Nmap</td><td>Recon</td><td>Port scanning aur service detection</td></tr>
          <tr><td>Metasploit</td><td>Exploitation</td><td>Modular exploitation framework</td></tr>
        </tbody>
      </table>
      <p>Saravottam parinamon ke liye kai tools ke sanyojan ka upyog karein.</p>
</TutorialLayout>
  )
}