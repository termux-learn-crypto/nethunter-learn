import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Ghidra() {
  return (
    <TutorialLayout title="Ghidra" subtitle="Ghidra - फोरेंसिक सुरक्षा परीक्षण टूल" icon="🐉">
      <h2>Ghidra ka upyog kaise karein</h2>
      <p>Ghidra ka upyog karna seekhna aasan hai. Neeche kuch real-world commands given hain:</p>
      <h3>1. Analyze disk image</h3>
      <CodeBlock code={'ghidra analyze disk.img'}/>
      <p>Disk image ka analysis start karein</p>
      <h3>2. File carving</h3>
      <CodeBlock code={'ghidra carve disk.img --types jpg,png,pdf --output carved/'}/>
      <p>Deleted files ko recover karein</p>
      <h3>3. Timeline analysis</h3>
      <CodeBlock code={'ghidra timeline --input disk.img --output timeline.csv'}/>
      <p>File system timeline create karein</p>
      <h3>4. Memory dump analysis</h3>
      <CodeBlock code={'ghidra memory memory.dmp --profile Win10x64'}/>
      <p>RAM dump ka forensics analysis karein</p>
      <h3>5. Generate forensic report</h3>
      <CodeBlock code={'ghidra report --format pdf --case "CASE-001" --output forensic_report.pdf'}/>
      <p>Forensic report generate karein</p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Security testing:</strong> Ghidra security testing aur vulnerability assessment ke liye ek comprehensive tool hai</li>
        <li><strong>Attack simulation:</strong> Ghidra multiple attack techniques aur scanning methods support karta hai</li>
        <li><strong>Advanced capabilities:</strong> Ghidra automated workflows ke saath time-consuming tasks ko streamline karta hai</li>
        <li><strong>Automation support:</strong> Ghidra cross-platform compatibility aur easy integration provide karta hai</li>
        <li><strong>Cross-platform:</strong> Ghidra extensible architecture ke saath custom module development allow karta hai</li>
      </ul>
<h2>Ghidra ke saath advanced techniques</h2>
      <p>Ghidra ke saath advanced techniques try karne ke liye multiple tools ka combination use karein:</p>
      <CodeBlock code={'#!/bin/bash\n# Ghidra automation script\nghidra analyze disk.img\nghidra carve disk.img --types jpg,png,pdf --output carved/\necho \"Ghidra scan complete\"'}/>
      <p>Scripting aur automation se Ghidra ko CI/CD pipelines aur regular security audits mein integrate kiya ja sakta hai.</p>

      <h2>Use Cases and Applications</h2>
      <h3>Forensics security assessment</h3>
      <p>Ghidra ka upyog forensics vulnerabilities identify karne aur security posture assess karne mein karein</p>
      <h3>Compliance testing</h3>
      <p>PCI DSS, ISO 27001 aur security audit requirements ke liye Ghidra use karein</p>
      <h3>Skill development</h3>
      <p>Ghidra ke practical use se cybersecurity skills develop karein aur real-world scenarios mein practice karein</p>

      <h2>Ghidra ke sath sarvottam abhyas</h2>
      <ul>
        <li>Ghidra sirf authorized targets par hi use karein</li>
        <li>Ghidra ko regularly update karte rahein</li>
        <li>Testing ke baad temporary files ko safely delete karein</li>
        <li>Results ko encrypted form mein store karein</li>
        <li>Multiple tools ke combination se results verify karein</li>
      </ul>

      <h2>Ghidra ke sath surksha parikshan karyapravah</h2>
      <ol>
        <li><strong>Jankari sangrah:</strong> OSINT techniques se target information collect karein</li>
        <li><strong>Scanning:</strong> Ghidra se vulnerabilities scan karein</li>
        <li><strong>Vishleshan:</strong> Results ka analysis aur false positives filter karein</li>
        <li><strong>Satypan:</strong> Manual techniques se results verify karein</li>
        <li><strong>Reporting:</strong> Findings ko detailed report mein document karein</li>
      </ol>

      <div className="info-box">
        💡 <strong>Visheshagya sujhav:</strong> Ghidra ka upyog karne se pehle --help check karein aur documentation padhein. TryHackMe, HackTheBox aur PentesterLab jaise platforms par abhyas karein.
      </div>

      <h2>Troubleshooting Guide</h2>
      <p><strong>Ghidra command nahi mil rahi:</strong> `which ghidra` ya `dpkg -l | grep ghidra` se check karein. `sudo apt install ghidra` se install karein.</p>
      <p><strong>Permission error:</strong> `sudo ghidra` se command chalaayein ya appropriate permissions set karein.</p>
      <p><strong>Dheema performance:</strong> Threads kam karein, timeout badhayein, ya target ko chhote bhagon mein divide karein.</p>
      <p><strong>Galat output:</strong> `sudo apt update && sudo apt upgrade` se update karein. Purane versions mein bugs ho sakte hain.</p>

      <h2>Alternative Tools</h2>
      <p>Forensics category mein kai alternatives available hain. Pratyek tool ki apni vishesh taaqtein hain:</p>
      <table>
        <thead><tr><th>Tool</th><th>Category</th><th>Mukhya visheshta</th></tr></thead>
        <tbody>
          <tr><td>Ghidra</td><td>Forensics</td><td>document forensics aur embedded object analysis ke liye ek comprehensive toolkit.</td></tr>
          <tr><td>Nmap</td><td>Recon</td><td>Port scanning aur service detection</td></tr>
          <tr><td>Metasploit</td><td>Exploitation</td><td>Modular exploitation framework</td></tr>
        </tbody>
      </table>
      <p>Saravottam parinamon ke liye kai tools ke sanyojan ka upyog karein.</p>
</TutorialLayout>
  )
}