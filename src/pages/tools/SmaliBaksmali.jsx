import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function SmaliBaksmali() {
  return (
    <TutorialLayout title="Smali/Baksmali" subtitle="Smali/Baksmali - फोरेंसिक सुरक्षा परीक्षण टूल" icon="🔧">
      <h2>Mobile Security Features</h2>
      <ul>
        <li><strong>Security testing:</strong> Smali/Baksmali mobile application security testing ke liye specialized tool hai</li>
        <li><strong>Attack simulation:</strong> Smali/Baksmali SSL pinning bypass, runtime manipulation, aur dynamic analysis provide karta hai</li>
        <li><strong>Advanced capabilities:</strong> Smali/Baksmali Android aur iOS dono platforms ke testing ko support karta hai</li>
        <li><strong>Automation support:</strong> Smali/Baksmali automated vulnerability scanning aur manual pentesting dono ke liye suitable hai</li>
        <li><strong>Cross-platform:</strong> Smali/Baksmali APK analysis, decompilation, aur reverse engineering support karta hai</li>
      </ul>
<h2>Smali/Baksmali ka upyog kaise karein</h2>
      <p>Smali/Baksmali ka upyog karna seekhna aasan hai. Neeche kuch real-world commands given hain:</p>
      <h3>1. Analyze disk image</h3>
      <CodeBlock code={'smali analyze disk.img'}/>
      <p>Disk image ka analysis start karein</p>
      <h3>2. File carving</h3>
      <CodeBlock code={'smali carve disk.img --types jpg,png,pdf --output carved/'}/>
      <p>Deleted files ko recover karein</p>
      <h3>3. Timeline analysis</h3>
      <CodeBlock code={'smali timeline --input disk.img --output timeline.csv'}/>
      <p>File system timeline create karein</p>
      <h3>4. Memory dump analysis</h3>
      <CodeBlock code={'smali memory memory.dmp --profile Win10x64'}/>
      <p>RAM dump ka forensics analysis karein</p>
      <h3>5. Generate forensic report</h3>
      <CodeBlock code={'smali report --format pdf --case "CASE-001" --output forensic_report.pdf'}/>
      <p>Forensic report generate karein</p>

      <h2>Smali/Baksmali ke saath advanced techniques</h2>
      <p>Smali/Baksmali ke saath advanced techniques try karne ke liye multiple tools ka combination use karein:</p>
      <CodeBlock code={'#!/bin/bash\n# Smali/Baksmali automation script\nsmali analyze disk.img\nsmali carve disk.img --types jpg,png,pdf --output carved/\necho \"Smali/Baksmali scan complete\"'}/>
      <p>Scripting aur automation se Smali/Baksmali ko CI/CD pipelines aur regular security audits mein integrate kiya ja sakta hai.</p>

      <h2>Mobile Security — FAQ</h2>
      <div className="faq-item">
        <h3>Smali/Baksmali ke saath Android ke kis version par testing karein?</h3>
        <p>Smali/Baksmali ke saath testing Android 14+ par karein kyunki latest versions mein updated security controls hain. Purane versions bhi compatibility testing ke liye useful hain.</p>
      </div>
      <div className="faq-item">
        <h3>Smali/Baksmali se SSL pinning bypass kaise karein?</h3>
        <p>Smali/Baksmali ke saath SSL pinning bypass ke liye Frida ya Objection use karein. Certificate pinning functions ko hook karke disabling scripts chalaayein.</p>
      </div>
      <div className="faq-item">
        <h3>Smali/Baksmali mobile app mein insecure data storage kaise check karein?</h3>
        <p>Smali/Baksmali se SharedPreferences, SQLite databases, internal storage, aur external storage mein sensitive data check karein. Rooted device par SQLite browser se databases inspect karein.</p>
      </div>
      <div className="faq-item">
        <h3>Smali/Baksmali se APK decompile kaise karein?</h3>
        <p>Smali/Baksmali se APK decompile karne ke liye apktool use karein. APK ko extract karke smali code dekhein. Jadx se Java source code mein convert kiya ja sakta hai.</p>
      </div>
<h2>Mobile Testing: Common Issues</h2>
      <p><strong>Smali/Baksmali command nahi mil rahi:</strong> `which smali` ya `dpkg -l | grep smali` se check karein. `sudo apt install smali` se install karein.</p>
      <p><strong>Permission error:</strong> `sudo smali` se command chalaayein ya appropriate permissions set karein.</p>
      <p><strong>Dheema performance:</strong> Threads kam karein, timeout badhayein, ya target ko chhote bhagon mein divide karein.</p>
      <p><strong>Galat output:</strong> `sudo apt update && sudo apt upgrade` se update karein. Purane versions mein bugs ho sakte hain.</p>

      <h2>Mobile Security Tools Comparison</h2>
      <p>Forensics category mein kai alternatives available hain. Pratyek tool ki apni vishesh taaqtein hain:</p>
      <table>
        <thead><tr><th>Tool</th><th>Category</th><th>Mukhya visheshta</th></tr></thead>
        <tbody>
          <tr><td>Smali/Baksmali</td><td>Forensics</td><td>binary analysis aur executable inspection ke liye ek advanced reverse engineering tool.</td></tr>
          <tr><td>Nmap</td><td>Recon</td><td>Port scanning aur service detection</td></tr>
          <tr><td>Metasploit</td><td>Exploitation</td><td>Modular exploitation framework</td></tr>
        </tbody>
      </table>
      <p>Saravottam parinamon ke liye kai tools ke sanyojan ka upyog karein.</p>
<h2>Smali/Baksmali ke sath sarvottam abhyas</h2>
      <ul>
        <li>Smali/Baksmali sirf authorized targets par hi use karein</li>
        <li>Smali/Baksmali ko regularly update karte rahein</li>
        <li>Testing ke baad temporary files ko safely delete karein</li>
        <li>Results ko encrypted form mein store karein</li>
        <li>Multiple tools ke combination se results verify karein</li>
      </ul>

      <h2>Smali/Baksmali ke sath surksha parikshan karyapravah</h2>
      <ol>
        <li><strong>Jankari sangrah:</strong> OSINT techniques se target information collect karein</li>
        <li><strong>Scanning:</strong> Smali/Baksmali se vulnerabilities scan karein</li>
        <li><strong>Vishleshan:</strong> Results ka analysis aur false positives filter karein</li>
        <li><strong>Satypan:</strong> Manual techniques se results verify karein</li>
        <li><strong>Reporting:</strong> Findings ko detailed report mein document karein</li>
      </ol>

      <div className="info-box">
        💡 <strong>Visheshagya sujhav:</strong> Smali/Baksmali ka upyog karne se pehle --help check karein aur documentation padhein. TryHackMe, HackTheBox aur PentesterLab jaise platforms par abhyas karein.
      </div>

      </TutorialLayout>
  )
}