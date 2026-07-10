import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function SleuthKit() {
  return (
    <TutorialLayout title="Sleuth Kit" subtitle="Sleuth Kit - फोरेंसिक सुरक्षा परीक्षण टूल" icon="🛠️">
      <h2>Sleuth Kit ka upyog kaise karein</h2>
      <p>Sleuth Kit ka upyog karna seekhna aasan hai. Neeche kuch real-world commands given hain:</p>
      <h3>1. Analyze disk image</h3>
      <CodeBlock code={'sleuthkit analyze disk.img'}/>
      <p>Disk image ka analysis start karein</p>
      <h3>2. File carving</h3>
      <CodeBlock code={'sleuthkit carve disk.img --types jpg,png,pdf --output carved/'}/>
      <p>Deleted files ko recover karein</p>
      <h3>3. Timeline analysis</h3>
      <CodeBlock code={'sleuthkit timeline --input disk.img --output timeline.csv'}/>
      <p>File system timeline create karein</p>
      <h3>4. Memory dump analysis</h3>
      <CodeBlock code={'sleuthkit memory memory.dmp --profile Win10x64'}/>
      <p>RAM dump ka forensics analysis karein</p>
      <h3>5. Generate forensic report</h3>
      <CodeBlock code={'sleuthkit report --format pdf --case "CASE-001" --output forensic_report.pdf'}/>
      <p>Forensic report generate karein</p>

      <h2>Sleuth Kit ke saath advanced techniques</h2>
      <p>Sleuth Kit ke saath advanced techniques try karne ke liye multiple tools ka combination use karein:</p>
      <CodeBlock code={'#!/bin/bash\n# Sleuth Kit automation script\nsleuthkit analyze disk.img\nsleuthkit carve disk.img --types jpg,png,pdf --output carved/\necho \"Sleuth Kit scan complete\"'}/>
      <p>Scripting aur automation se Sleuth Kit ko CI/CD pipelines aur regular security audits mein integrate kiya ja sakta hai.</p>

      <h2>Forensics — FAQ</h2>
      <div className="faq-item">
        <h3>Sleuth Kit ke saath mobile forensics?</h3>
        <p>Sleuth Kit mobile forensics mein SIM card, SD card, aur internal storage ki forensic copy li jaati hai. Logical aur physical extraction dono techniques use hoti hain.</p>
      </div>
      <div className="faq-item">
        <h3>Sleuth Kit ke saath timeline analysis?</h3>
        <p>Sleuth Kit ke saath timeline analysis file system timestamps (MAC times) aur log files ke through ki jaati hai. Sleuth Kit aur plaso helpful tools hain.</p>
      </div>
      <div className="faq-item">
        <h3>Sleuth Kit ke saath memory analysis kaise karein?</h3>
        <p>Sleuth Kit ke saath memory analysis ke liye Volatility use karein. RAM dump se running processes, network connections, aur registry hives extract kiye ja sakte hain.</p>
      </div>
      <div className="faq-item">
        <h3>Sleuth Kit se deleted files kaise recover karein?</h3>
        <p>Sleuth Kit se deleted files recover karne ke liye disk image create karein (dd), phir foremost/scalpel se file carving karein. File signatures base par recovery hoti hai.</p>
      </div>
<h2>Forensic Investigation Use Cases</h2>
      <h3>Forensics security assessment</h3>
      <p>Sleuth Kit ka upyog forensics vulnerabilities identify karne aur security posture assess karne mein karein</p>
      <h3>Compliance testing</h3>
      <p>PCI DSS, ISO 27001 aur security audit requirements ke liye Sleuth Kit use karein</p>
      <h3>Skill development</h3>
      <p>Sleuth Kit ke practical use se cybersecurity skills develop karein aur real-world scenarios mein practice karein</p>

      <h2>Sleuth Kit ke sath surksha parikshan karyapravah</h2>
      <ol>
        <li><strong>Jankari sangrah:</strong> OSINT techniques se target information collect karein</li>
        <li><strong>Scanning:</strong> Sleuth Kit se vulnerabilities scan karein</li>
        <li><strong>Vishleshan:</strong> Results ka analysis aur false positives filter karein</li>
        <li><strong>Satypan:</strong> Manual techniques se results verify karein</li>
        <li><strong>Reporting:</strong> Findings ko detailed report mein document karein</li>
      </ol>

      <div className="info-box">
        💡 <strong>Visheshagya sujhav:</strong> Sleuth Kit ka upyog karne se pehle --help check karein aur documentation padhein. TryHackMe, HackTheBox aur PentesterLab jaise platforms par abhyas karein.
      </div>

      <h2>Forensic Tools Comparison</h2>
      <p>Forensics category mein kai alternatives available hain. Pratyek tool ki apni vishesh taaqtein hain:</p>
      <table>
        <thead><tr><th>Tool</th><th>Category</th><th>Mukhya visheshta</th></tr></thead>
        <tbody>
          <tr><td>Sleuth Kit</td><td>Forensics</td><td>executable packing detection aur code unpacking ke liye ek advanced reverse engineering tool.</td></tr>
          <tr><td>Nmap</td><td>Recon</td><td>Port scanning aur service detection</td></tr>
          <tr><td>Metasploit</td><td>Exploitation</td><td>Modular exploitation framework</td></tr>
        </tbody>
      </table>
      <p>Saravottam parinamon ke liye kai tools ke sanyojan ka upyog karein.</p>
<h2>Sleuth Kit ke sath sarvottam abhyas</h2>
      <ul>
        <li>Sleuth Kit sirf authorized targets par hi use karein</li>
        <li>Sleuth Kit ko regularly update karte rahein</li>
        <li>Testing ke baad temporary files ko safely delete karein</li>
        <li>Results ko encrypted form mein store karein</li>
        <li>Multiple tools ke combination se results verify karein</li>
      </ul>

      </TutorialLayout>
  )
}