import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function OneGadget() {
  return (
    <TutorialLayout title="One Gadget" subtitle="One Gadget - एक्सप्लॉइटेशन सुरक्षा परीक्षण टूल" icon="💊">
      <h2>One Gadget ka upyog kaise karein</h2>
      <p>One Gadget ka upyog karna seekhna aasan hai. Neeche kuch real-world commands given hain:</p>
      <h3>1. Target configuration</h3>
      <CodeBlock code={'one_gadget --target http://testphp.vulnweb.com --payload reverse_shell'}/>
      <p>Target URL setup karein</p>
      <h3>2. Scan modes</h3>
      <CodeBlock code={'one_gadget --mode advanced --threads 10'}/>
      <p>Advanced scanning mode mein run karein</p>
      <h3>3. Auth bypass test</h3>
      <CodeBlock code={'one_gadget --auth-bypass --cookie "session=test123"'}/>
      <p>Authentication bypass testing karein</p>
      <h3>4. Parameter fuzzing</h3>
      <CodeBlock code={'one_gadget --fuzz --params "id,page,user" http://target.com/app.php'}/>
      <p>URL parameters ko fuzz karein</p>
      <h3>5. Generate report</h3>
      <CodeBlock code={'one_gadget --report-format pdf --output report.pdf'}/>
      <p>Detailed PDF report generate karein</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Security testing:</strong> One Gadget security testing aur vulnerability assessment ke liye ek comprehensive tool hai</li>
        <li><strong>Attack simulation:</strong> One Gadget multiple attack techniques aur scanning methods support karta hai</li>
        <li><strong>Advanced capabilities:</strong> One Gadget automated workflows ke saath time-consuming tasks ko streamline karta hai</li>
        <li><strong>Automation support:</strong> One Gadget cross-platform compatibility aur easy integration provide karta hai</li>
        <li><strong>Cross-platform:</strong> One Gadget extensible architecture ke saath custom module development allow karta hai</li>
      </ul>
<h2>One Gadget ke saath advanced techniques</h2>
      <p>One Gadget ke saath advanced techniques try karne ke liye multiple tools ka combination use karein:</p>
      <CodeBlock code={'#!/bin/bash\n# One Gadget automation script\none_gadget --target http://testphp.vulnweb.com --payload reverse_shell\none_gadget --mode advanced --threads 10\necho \"One Gadget scan complete\"'}/>
      <p>Scripting aur automation se One Gadget ko CI/CD pipelines aur regular security audits mein integrate kiya ja sakta hai.</p>

      <h2>Use Cases and Applications</h2>
      <h3>Exploitation security assessment</h3>
      <p>One Gadget ka upyog exploitation vulnerabilities identify karne aur security posture assess karne mein karein</p>
      <h3>Compliance testing</h3>
      <p>PCI DSS, ISO 27001 aur security audit requirements ke liye One Gadget use karein</p>
      <h3>Skill development</h3>
      <p>One Gadget ke practical use se cybersecurity skills develop karein aur real-world scenarios mein practice karein</p>

      <h2>One Gadget ke sath sarvottam abhyas</h2>
      <ul>
        <li>One Gadget sirf authorized targets par hi use karein</li>
        <li>One Gadget ko regularly update karte rahein</li>
        <li>Testing ke baad temporary files ko safely delete karein</li>
        <li>Results ko encrypted form mein store karein</li>
        <li>Multiple tools ke combination se results verify karein</li>
      </ul>

      <h2>One Gadget ke sath surksha parikshan karyapravah</h2>
      <ol>
        <li><strong>Jankari sangrah:</strong> OSINT techniques se target information collect karein</li>
        <li><strong>Scanning:</strong> One Gadget se vulnerabilities scan karein</li>
        <li><strong>Vishleshan:</strong> Results ka analysis aur false positives filter karein</li>
        <li><strong>Satypan:</strong> Manual techniques se results verify karein</li>
        <li><strong>Reporting:</strong> Findings ko detailed report mein document karein</li>
      </ol>

      <div className="info-box">
        💡 <strong>Visheshagya sujhav:</strong> One Gadget ka upyog karne se pehle --help check karein aur documentation padhein. TryHackMe, HackTheBox aur PentesterLab jaise platforms par abhyas karein.
      </div>

      <h2>Troubleshooting Guide</h2>
      <p><strong>One Gadget command nahi mil rahi:</strong> `which one_gadget` ya `dpkg -l | grep one_gadget` se check karein. `sudo apt install one_gadget` se install karein.</p>
      <p><strong>Permission error:</strong> `sudo one_gadget` se command chalaayein ya appropriate permissions set karein.</p>
      <p><strong>Dheema performance:</strong> Threads kam karein, timeout badhayein, ya target ko chhote bhagon mein divide karein.</p>
      <p><strong>Galat output:</strong> `sudo apt update && sudo apt upgrade` se update karein. Purane versions mein bugs ho sakte hain.</p>

      <h2>Alternative Tools</h2>
      <p>Exploitation category mein kai alternatives available hain. Pratyek tool ki apni vishesh taaqtein hain:</p>
      <table>
        <thead><tr><th>Tool</th><th>Category</th><th>Mukhya visheshta</th></tr></thead>
        <tbody>
          <tr><td>One Gadget</td><td>Exploitation</td><td>macro exploit delivery aur office document weaponization ke liye ek practical social engineering tool.</td></tr>
          <tr><td>Nmap</td><td>Recon</td><td>Port scanning aur service detection</td></tr>
          <tr><td>Metasploit</td><td>Exploitation</td><td>Modular exploitation framework</td></tr>
        </tbody>
      </table>
      <p>Saravottam parinamon ke liye kai tools ke sanyojan ka upyog karein.</p>
</TutorialLayout>
  )
}