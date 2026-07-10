import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function JoomScan() {
  return (
    <TutorialLayout title="JoomScan" subtitle="JoomScan - वेब सुरक्षा परीक्षण टूल" icon="📰">
      <h2>JoomScan ka upyog kaise karein</h2>
      <p>JoomScan ka upyog karna seekhna aasan hai. Neeche kuch real-world commands given hain:</p>
      <h3>1. Target configuration</h3>
      <CodeBlock code={'joomscan --target http://testphp.vulnweb.com '}/>
      <p>Target URL setup karein</p>
      <h3>2. Scan modes</h3>
      <CodeBlock code={'joomscan --mode advanced --threads 10'}/>
      <p>Advanced scanning mode mein run karein</p>
      <h3>3. Auth bypass test</h3>
      <CodeBlock code={'joomscan --auth-bypass --cookie "session=test123"'}/>
      <p>Authentication bypass testing karein</p>
      <h3>4. Parameter fuzzing</h3>
      <CodeBlock code={'joomscan --fuzz --params "id,page,user" http://target.com/app.php'}/>
      <p>URL parameters ko fuzz karein</p>
      <h3>5. Generate report</h3>
      <CodeBlock code={'joomscan --report-format pdf --output report.pdf'}/>
      <p>Detailed PDF report generate karein</p>

      <h2>Web Security Testing Features</h2>
      <ul>
        <li><strong>Security testing:</strong> JoomScan OWASP Top 10 vulnerabilities detect karne mein specialized hai</li>
        <li><strong>Attack simulation:</strong> JoomScan automated scanning aur manual testing dono approaches support karta hai</li>
        <li><strong>Advanced capabilities:</strong> JoomScan web application security testing ke liye ek comprehensive tool hai</li>
        <li><strong>Automation support:</strong> JoomScan extensible plugin architecture ke saath custom checks develop kiye ja sakte hain</li>
        <li><strong>Cross-platform:</strong> JoomScan intercepting proxy, repeater, aur intruder jaise advanced features provide karta hai</li>
      </ul>
<h2>JoomScan ke saath advanced techniques</h2>
      <p>JoomScan ke saath advanced techniques try karne ke liye multiple tools ka combination use karein:</p>
      <CodeBlock code={'#!/bin/bash\n# JoomScan automation script\njoomscan --target http://testphp.vulnweb.com \njoomscan --mode advanced --threads 10\necho \"JoomScan scan complete\"'}/>
      <p>Scripting aur automation se JoomScan ko CI/CD pipelines aur regular security audits mein integrate kiya ja sakta hai.</p>

      <h2>Web Security — FAQ</h2>
      <div className="faq-item">
        <h3>JoomScan ke saath API security testing kaise karein?</h3>
        <p>JoomScan API security testing mein endpoint discovery, authentication/auth bypass, mass assignment, aur rate limiting check karein.</p>
      </div>
      <div className="faq-item">
        <h3>JoomScan se XSS vulnerabilities kaise find karein?</h3>
        <p>JoomScan se XSS find karne ke liye input fields, URL parameters, aur HTTP headers par XSS payloads test karein. Reflected, stored, aur DOM-based XSS sabko check karein.</p>
      </div>
      <div className="faq-item">
        <h3>JoomScan se SQL injection kaise test karein?</h3>
        <p>JoomScan se SQL injection test karne ke liye form fields, URL parameters, aur API endpoints par payloads inject karein. Error-based, boolean blind, aur time-based techniques try karein.</p>
      </div>
      <div className="faq-item">
        <h3>JoomScan se SSRF attacks kaise detect karein?</h3>
        <p>JoomScan se SSRF detect karne ke liye internal IPs (127.0.0.1, 10.*), cloud metadata endpoints (169.254.169.254), aur internal services (Redis, MySQL) test karein.</p>
      </div>
<h2>JoomScan ke sath sarvottam abhyas</h2>
      <ul>
        <li>JoomScan sirf authorized targets par hi use karein</li>
        <li>JoomScan ko regularly update karte rahein</li>
        <li>Testing ke baad temporary files ko safely delete karein</li>
        <li>Results ko encrypted form mein store karein</li>
        <li>Multiple tools ke combination se results verify karein</li>
      </ul>

      <h2>JoomScan ke sath surksha parikshan karyapravah</h2>
      <ol>
        <li><strong>Jankari sangrah:</strong> OSINT techniques se target information collect karein</li>
        <li><strong>Scanning:</strong> JoomScan se vulnerabilities scan karein</li>
        <li><strong>Vishleshan:</strong> Results ka analysis aur false positives filter karein</li>
        <li><strong>Satypan:</strong> Manual techniques se results verify karein</li>
        <li><strong>Reporting:</strong> Findings ko detailed report mein document karein</li>
      </ol>

      <div className="info-box">
        💡 <strong>Visheshagya sujhav:</strong> JoomScan ka upyog karne se pehle --help check karein aur documentation padhein. TryHackMe, HackTheBox aur PentesterLab jaise platforms par abhyas karein.
      </div>

      <h2>Web Testing: Common Issues</h2>
      <p><strong>JoomScan command nahi mil rahi:</strong> `which joomscan` ya `dpkg -l | grep joomscan` se check karein. `sudo apt install joomscan` se install karein.</p>
      <p><strong>Permission error:</strong> `sudo joomscan` se command chalaayein ya appropriate permissions set karein.</p>
      <p><strong>Dheema performance:</strong> Threads kam karein, timeout badhayein, ya target ko chhote bhagon mein divide karein.</p>
      <p><strong>Galat output:</strong> `sudo apt update && sudo apt upgrade` se update karein. Purane versions mein bugs ho sakte hain.</p>

      </TutorialLayout>
  )
}