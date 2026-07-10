import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function ShellNoob() {
  return (
    <TutorialLayout title="ShellNoob" subtitle="ShellNoob - एक्सप्लॉइटेशन सुरक्षा परीक्षण टूल" icon="🐚">
      <h2>Exploitation Features</h2>
      <ul>
        <li><strong>Security testing:</strong> ShellNoob vulnerability identification aur exploitation ke liye design kiya gaya hai</li>
        <li><strong>Attack simulation:</strong> ShellNoob extensible architecture ke saath custom module development allow karta hai</li>
        <li><strong>Advanced capabilities:</strong> ShellNoob post-exploitation features jaise persistence, pivoting, aur data exfiltration provide karta hai</li>
        <li><strong>Automation support:</strong> ShellNoob multiple exploit modules aur payload generation support karta hai</li>
        <li><strong>Cross-platform:</strong> ShellNoob automated exploitation workflows ke saath time-consuming tasks ko streamline karta hai</li>
      </ul>
<h2>ShellNoob ka upyog kaise karein</h2>
      <p>ShellNoob ka upyog karna seekhna aasan hai. Neeche kuch real-world commands given hain:</p>
      <h3>1. Target configuration</h3>
      <CodeBlock code={'shellnoob --target http://testphp.vulnweb.com --payload reverse_shell'}/>
      <p>Target URL setup karein</p>
      <h3>2. Scan modes</h3>
      <CodeBlock code={'shellnoob --mode advanced --threads 10'}/>
      <p>Advanced scanning mode mein run karein</p>
      <h3>3. Auth bypass test</h3>
      <CodeBlock code={'shellnoob --auth-bypass --cookie "session=test123"'}/>
      <p>Authentication bypass testing karein</p>
      <h3>4. Parameter fuzzing</h3>
      <CodeBlock code={'shellnoob --fuzz --params "id,page,user" http://target.com/app.php'}/>
      <p>URL parameters ko fuzz karein</p>
      <h3>5. Generate report</h3>
      <CodeBlock code={'shellnoob --report-format pdf --output report.pdf'}/>
      <p>Detailed PDF report generate karein</p>

      <h2>ShellNoob ke saath advanced techniques</h2>
      <p>ShellNoob ke saath advanced techniques try karne ke liye multiple tools ka combination use karein:</p>
      <CodeBlock code={'#!/bin/bash\n# ShellNoob automation script\nshellnoob --target http://testphp.vulnweb.com --payload reverse_shell\nshellnoob --mode advanced --threads 10\necho \"ShellNoob scan complete\"'}/>
      <p>Scripting aur automation se ShellNoob ko CI/CD pipelines aur regular security audits mein integrate kiya ja sakta hai.</p>

      <h2>Exploitation — FAQ</h2>
      <div className="faq-item">
        <h3>ShellNoob post-exploitation mein kaise use hota hai?</h3>
        <p>ShellNoob post-exploitation mein credentials dump karna, persistence setup, network pivoting, aur sensitive data exfiltration ke liye use hota hai.</p>
      </div>
      <div className="faq-item">
        <h3>ShellNoob ke saath detection kaise avoid karein?</h3>
        <p>ShellNoob ke saath detection avoid karne ke liye proper encoding, slow exploitation (rate limiting), aur legitimate traffic mimic karein.</p>
      </div>
      <div className="faq-item">
        <h3>ShellNoob ke saath pivoting kaise set up karein?</h3>
        <p>ShellNoob ke saath pivoting ke liye compromised machine ko jump host use karein. Meterpreter auto-routing ya manual port forwarding techniques use karein.</p>
      </div>
      <div className="faq-item">
        <h3>ShellNoob ke saath RCE kaise achieve karein?</h3>
        <p>ShellNoob ke saath RCE achieve karne ke liye vulnerable service ka exploit module select karein, payload configure karein (reverse shell ya bind shell), aur target par execute karein.</p>
      </div>
<h2>Exploitation Use Cases</h2>
      <h3>Exploitation security assessment</h3>
      <p>ShellNoob ka upyog exploitation vulnerabilities identify karne aur security posture assess karne mein karein</p>
      <h3>Compliance testing</h3>
      <p>PCI DSS, ISO 27001 aur security audit requirements ke liye ShellNoob use karein</p>
      <h3>Skill development</h3>
      <p>ShellNoob ke practical use se cybersecurity skills develop karein aur real-world scenarios mein practice karein</p>

      <h2>ShellNoob ke sath sarvottam abhyas</h2>
      <ul>
        <li>ShellNoob sirf authorized targets par hi use karein</li>
        <li>ShellNoob ko regularly update karte rahein</li>
        <li>Testing ke baad temporary files ko safely delete karein</li>
        <li>Results ko encrypted form mein store karein</li>
        <li>Multiple tools ke combination se results verify karein</li>
      </ul>

      <h2>Exploit Dev: Common Issues</h2>
      <p><strong>ShellNoob command nahi mil rahi:</strong> `which shellnoob` ya `dpkg -l | grep shellnoob` se check karein. `sudo apt install shellnoob` se install karein.</p>
      <p><strong>Permission error:</strong> `sudo shellnoob` se command chalaayein ya appropriate permissions set karein.</p>
      <p><strong>Dheema performance:</strong> Threads kam karein, timeout badhayein, ya target ko chhote bhagon mein divide karein.</p>
      <p><strong>Galat output:</strong> `sudo apt update && sudo apt upgrade` se update karein. Purane versions mein bugs ho sakte hain.</p>

      <h2>ShellNoob ke sath surksha parikshan karyapravah</h2>
      <ol>
        <li><strong>Jankari sangrah:</strong> OSINT techniques se target information collect karein</li>
        <li><strong>Scanning:</strong> ShellNoob se vulnerabilities scan karein</li>
        <li><strong>Vishleshan:</strong> Results ka analysis aur false positives filter karein</li>
        <li><strong>Satypan:</strong> Manual techniques se results verify karein</li>
        <li><strong>Reporting:</strong> Findings ko detailed report mein document karein</li>
      </ol>

      <div className="info-box">
        💡 <strong>Visheshagya sujhav:</strong> ShellNoob ka upyog karne se pehle --help check karein aur documentation padhein. TryHackMe, HackTheBox aur PentesterLab jaise platforms par abhyas karein.
      </div>

      </TutorialLayout>
  )
}