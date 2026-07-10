import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function ADB() {
  return (
    <TutorialLayout title="ADB" subtitle="ADB - मोबाइल सुरक्षा परीक्षण टूल" icon="📱">
      <h2>Mobile Security Features</h2>
      <ul>
        <li><strong>Security testing:</strong> ADB SSL pinning bypass, runtime manipulation, aur dynamic analysis provide karta hai</li>
        <li><strong>Attack simulation:</strong> ADB Android aur iOS dono platforms ke testing ko support karta hai</li>
        <li><strong>Advanced capabilities:</strong> ADB automated vulnerability scanning aur manual pentesting dono ke liye suitable hai</li>
        <li><strong>Automation support:</strong> ADB mobile application security testing ke liye specialized tool hai</li>
        <li><strong>Cross-platform:</strong> ADB APK analysis, decompilation, aur reverse engineering support karta hai</li>
      </ul>
<h2>ADB ka upyog kaise karein</h2>
      <p>ADB ka upyog karna seekhna aasan hai. Neeche kuch real-world commands given hain:</p>
      <h3>1. APK analysis</h3>
      <CodeBlock code={'adb analyze app.apk'}/>
      <p>APK file ka static analysis karein</p>
      <h3>2. Decompile APK</h3>
      <CodeBlock code={'adb decompile app.apk -o output_dir'}/>
      <p>APK ko decompile karke source code nikaalein</p>
      <h3>3. Runtime hook</h3>
      <CodeBlock code={'adb hook --package com.target.app --script payload.js'}/>
      <p>Running app mein hook inject karein</p>
      <h3>4. SSL pinning bypass</h3>
      <CodeBlock code={'adb ssl-pinning --bypass --package com.target.app'}/>
      <p>SSL pinning ko bypass karein</p>
      <h3>5. Data directory dump</h3>
      <CodeBlock code={'adb dump-data --package com.target.app --output data_dump/'}/>
      <p>App ka data directory dump karein</p>

      <h2>ADB ke saath advanced techniques</h2>
      <p>ADB ke saath advanced techniques try karne ke liye multiple tools ka combination use karein:</p>
      <CodeBlock code={'#!/bin/bash\n# ADB automation script\nadb analyze app.apk\nadb decompile app.apk -o output_dir\necho \"ADB scan complete\"'}/>
      <p>Scripting aur automation se ADB ko CI/CD pipelines aur regular security audits mein integrate kiya ja sakta hai.</p>

      <h2>Mobile Security — FAQ</h2>
      <div className="faq-item">
        <h3>ADB ke saath Android ke kis version par testing karein?</h3>
        <p>ADB ke saath testing Android 14+ par karein kyunki latest versions mein updated security controls hain. Purane versions bhi compatibility testing ke liye useful hain.</p>
      </div>
      <div className="faq-item">
        <h3>ADB se APK decompile kaise karein?</h3>
        <p>ADB se APK decompile karne ke liye apktool use karein. APK ko extract karke smali code dekhein. Jadx se Java source code mein convert kiya ja sakta hai.</p>
      </div>
      <div className="faq-item">
        <h3>ADB se SSL pinning bypass kaise karein?</h3>
        <p>ADB ke saath SSL pinning bypass ke liye Frida ya Objection use karein. Certificate pinning functions ko hook karke disabling scripts chalaayein.</p>
      </div>
      <div className="faq-item">
        <h3>ADB mobile app mein insecure data storage kaise check karein?</h3>
        <p>ADB se SharedPreferences, SQLite databases, internal storage, aur external storage mein sensitive data check karein. Rooted device par SQLite browser se databases inspect karein.</p>
      </div>
<h2>Mobile Testing: Common Issues</h2>
      <p><strong>ADB command nahi mil rahi:</strong> `which adb` ya `dpkg -l | grep adb` se check karein. `sudo apt install adb` se install karein.</p>
      <p><strong>Permission error:</strong> `sudo adb` se command chalaayein ya appropriate permissions set karein.</p>
      <p><strong>Dheema performance:</strong> Threads kam karein, timeout badhayein, ya target ko chhote bhagon mein divide karein.</p>
      <p><strong>Galat output:</strong> `sudo apt update && sudo apt upgrade` se update karein. Purane versions mein bugs ho sakte hain.</p>

      <h2>Mobile Security Tools Comparison</h2>
      <p>Mobile category mein kai alternatives available hain. Pratyek tool ki apni vishesh taaqtein hain:</p>
      <table>
        <thead><tr><th>Tool</th><th>Category</th><th>Mukhya visheshta</th></tr></thead>
        <tbody>
          <tr><td>ADB</td><td>Mobile</td><td>mobile credential storage analysis aur secure storage auditing ke liye ek reliable utility.</td></tr>
          <tr><td>Nmap</td><td>Recon</td><td>Port scanning aur service detection</td></tr>
          <tr><td>Metasploit</td><td>Exploitation</td><td>Modular exploitation framework</td></tr>
        </tbody>
      </table>
      <p>Saravottam parinamon ke liye kai tools ke sanyojan ka upyog karein.</p>
<h2>ADB ke sath sarvottam abhyas</h2>
      <ul>
        <li>ADB sirf authorized targets par hi use karein</li>
        <li>ADB ko regularly update karte rahein</li>
        <li>Testing ke baad temporary files ko safely delete karein</li>
        <li>Results ko encrypted form mein store karein</li>
        <li>Multiple tools ke combination se results verify karein</li>
      </ul>

      <h2>ADB ke sath surksha parikshan karyapravah</h2>
      <ol>
        <li><strong>Jankari sangrah:</strong> OSINT techniques se target information collect karein</li>
        <li><strong>Scanning:</strong> ADB se vulnerabilities scan karein</li>
        <li><strong>Vishleshan:</strong> Results ka analysis aur false positives filter karein</li>
        <li><strong>Satypan:</strong> Manual techniques se results verify karein</li>
        <li><strong>Reporting:</strong> Findings ko detailed report mein document karein</li>
      </ol>

      <div className="info-box">
        💡 <strong>Visheshagya sujhav:</strong> ADB ka upyog karne se pehle --help check karein aur documentation padhein. TryHackMe, HackTheBox aur PentesterLab jaise platforms par abhyas karein.
      </div>

      </TutorialLayout>
  )
}