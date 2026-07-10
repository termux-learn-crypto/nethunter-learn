import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function WhatWeb() {
  return (
    <TutorialLayout title="WhatWeb" subtitle="WhatWeb - वेब सुरक्षा परीक्षण टूल" icon="🌍">
      <h2>WhatWeb ka upyog kaise karein</h2>
      <p>WhatWeb ka upyog karna seekhna aasan hai. Neeche kuch real-world commands given hain:</p>
      <h3>1. Target configuration</h3>
      <CodeBlock code={'whatweb --target http://testphp.vulnweb.com '}/>
      <p>Target URL setup karein</p>
      <h3>2. Scan modes</h3>
      <CodeBlock code={'whatweb --mode advanced --threads 10'}/>
      <p>Advanced scanning mode mein run karein</p>
      <h3>3. Auth bypass test</h3>
      <CodeBlock code={'whatweb --auth-bypass --cookie "session=test123"'}/>
      <p>Authentication bypass testing karein</p>
      <h3>4. Parameter fuzzing</h3>
      <CodeBlock code={'whatweb --fuzz --params "id,page,user" http://target.com/app.php'}/>
      <p>URL parameters ko fuzz karein</p>
      <h3>5. Generate report</h3>
      <CodeBlock code={'whatweb --report-format pdf --output report.pdf'}/>
      <p>Detailed PDF report generate karein</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Security testing:</strong> WhatWeb cross-platform compatibility aur easy integration provide karta hai</li>
        <li><strong>Attack simulation:</strong> WhatWeb security testing aur vulnerability assessment ke liye ek comprehensive tool hai</li>
        <li><strong>Advanced capabilities:</strong> WhatWeb multiple attack techniques aur scanning methods support karta hai</li>
        <li><strong>Automation support:</strong> WhatWeb extensible architecture ke saath custom module development allow karta hai</li>
        <li><strong>Cross-platform:</strong> WhatWeb automated workflows ke saath time-consuming tasks ko streamline karta hai</li>
      </ul>
<h2>WhatWeb ke saath advanced techniques</h2>
      <p>WhatWeb ke saath advanced techniques try karne ke liye multiple tools ka combination use karein:</p>
      <CodeBlock code={'#!/bin/bash\n# WhatWeb automation script\nwhatweb --target http://testphp.vulnweb.com \nwhatweb --mode advanced --threads 10\necho \"WhatWeb scan complete\"'}/>
      <p>Scripting aur automation se WhatWeb ko CI/CD pipelines aur regular security audits mein integrate kiya ja sakta hai.</p>

      <h2>Use Cases and Applications</h2>
      <h3>Web security assessment</h3>
      <p>WhatWeb ka upyog web vulnerabilities identify karne aur security posture assess karne mein karein</p>
      <h3>Compliance testing</h3>
      <p>PCI DSS, ISO 27001 aur security audit requirements ke liye WhatWeb use karein</p>
      <h3>Skill development</h3>
      <p>WhatWeb ke practical use se cybersecurity skills develop karein aur real-world scenarios mein practice karein</p>

      <h2>WhatWeb ke sath sarvottam abhyas</h2>
      <ul>
        <li>WhatWeb sirf authorized targets par hi use karein</li>
        <li>WhatWeb ko regularly update karte rahein</li>
        <li>Testing ke baad temporary files ko safely delete karein</li>
        <li>Results ko encrypted form mein store karein</li>
        <li>Multiple tools ke combination se results verify karein</li>
      </ul>

      <h2>WhatWeb ke sath surksha parikshan karyapravah</h2>
      <ol>
        <li><strong>Jankari sangrah:</strong> OSINT techniques se target information collect karein</li>
        <li><strong>Scanning:</strong> WhatWeb se vulnerabilities scan karein</li>
        <li><strong>Vishleshan:</strong> Results ka analysis aur false positives filter karein</li>
        <li><strong>Satypan:</strong> Manual techniques se results verify karein</li>
        <li><strong>Reporting:</strong> Findings ko detailed report mein document karein</li>
      </ol>

      <div className="info-box">
        💡 <strong>Visheshagya sujhav:</strong> WhatWeb ka upyog karne se pehle --help check karein aur documentation padhein. TryHackMe, HackTheBox aur PentesterLab jaise platforms par abhyas karein.
      </div>

      <h2>Troubleshooting Guide</h2>
      <p><strong>WhatWeb command nahi mil rahi:</strong> `which whatweb` ya `dpkg -l | grep whatweb` se check karein. `sudo apt install whatweb` se install karein.</p>
      <p><strong>Permission error:</strong> `sudo whatweb` se command chalaayein ya appropriate permissions set karein.</p>
      <p><strong>Dheema performance:</strong> Threads kam karein, timeout badhayein, ya target ko chhote bhagon mein divide karein.</p>
      <p><strong>Galat output:</strong> `sudo apt update && sudo apt upgrade` se update karein. Purane versions mein bugs ho sakte hain.</p>

      <h2>Alternative Tools</h2>
      <p>Web category mein kai alternatives available hain. Pratyek tool ki apni vishesh taaqtein hain:</p>
      <table>
        <thead><tr><th>Tool</th><th>Category</th><th>Mukhya visheshta</th></tr></thead>
        <tbody>
          <tr><td>WhatWeb</td><td>Web</td><td>web SMTP header injection aur email spoofing vulnerability detection ke liye ek specialized mail utility.</td></tr>
          <tr><td>Nmap</td><td>Recon</td><td>Port scanning aur service detection</td></tr>
          <tr><td>Metasploit</td><td>Exploitation</td><td>Modular exploitation framework</td></tr>
        </tbody>
      </table>
      <p>Saravottam parinamon ke liye kai tools ke sanyojan ka upyog karein.</p>
</TutorialLayout>
  )
}