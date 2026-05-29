import { Link } from 'react-router-dom'
import TutorialLayout from '../components/TutorialLayout'

export default function About() {
  return (
    <TutorialLayout
      title="About Nethunter"
      subtitle="Kali Nethunter aur ethical hacking ke baare mein sab kuch"
      icon="ℹ️"
      prev={{ to: '/tools', label: 'Tools Reference' }}
    >
      <h2>Kya hai Kali Nethunter?</h2>
      <p>
        Kali Nethunter ek open-source mobile penetration testing platform hai jo Offensive Security ke dwara develop kiya gaya hai — wahi team jo Kali Linux banati hai. Yeh aapke Android device ko ek portable hacking machine mein badal deta hai jisme Kali Linux ke 600+ security tools hain. Nethunter originally 2014 mein release hua tha aur tab se yeh continuously evolve ho raha hai. Aaj yeh duniya bhar ke security professionals, researchers, students, aur ethical hackers dwara use kiya jaata hai.
      </p>
      <p>
        Nethunter ki sabse badi baat yeh hai ki yeh aapko practically sikhata hai ki real-world attacks kaise kaam karte hain. Theory padhne se zyada effective hai jab aap khud tools chalate hain, packets capture karte hain, aur vulnerabilities exploit karte hain — sab apne phone se. Yeh hands-on experience bahut valuable hai cybersecurity career ke liye.
      </p>

      <h2>Key Features (Mukhya Features)</h2>
      <ul>
        <li><strong>Kali Linux Terminal:</strong> Aapke phone par poori Kali Linux command line environment chalti hai chroot mein. Aap apt se packages install kar sakte hain, scripts run kar sakte hain, aur 600+ tools use kar sakte hain.</li>
        <li><strong>Wireless Attacks:</strong> WiFi aur Bluetooth dono ki penetration testing support hai. External USB adapter se monitor mode bhi support hota hai — jisse aap packets capture aur inject kar sakte hain.</li>
        <li><strong>HID Attacks:</strong> Aapka phone USB Rubber Ducky ki tarah kaam karta hai. OTG cable se target computer se connect karke keystroke injection attacks kar sakte hain — commands type karwana, scripts run karwana, sab automatic hota hai.</li>
        <li><strong>BadUSB:</strong> Aapka phone ek USB keyboard/device ban jaata hai. Target computer ko pata bhi nahi chalta ki phone se attack ho raha hai. Yeh bahut stealthy attack hai.</li>
        <li><strong>MANA Evil Twin:</strong> Nethunter mein built-in MANA toolkit hai jo professional Evil Twin access points banata hai. Real WiFi jaisa dikhne wala fake AP banake traffic capture kar sakte hain.</li>
        <li><strong>Metasploit Integration:</strong> Metasploit Framework directly phone par chalta hai. Payloads generate kar sakte hain, exploits run kar sakte hain, aur Meterpreter sessions manage kar sakte hain — sab phone se.</li>
        <li><strong>External Adapter Support:</strong> OTG cable se external USB WiFi adapter connect kar sakte hain. Isse aapko monitor mode milta hai jo built-in WiFi chip mein nahi hota. Alfa adapters best hain.</li>
        <li><strong>GUI Support:</strong> VNC viewer se graphical Kali tools bhi chala sakte hain. Burp Suite, Wireshark (GUI mode), aur Armitage jaise tools bhi phone par chalte hain.</li>
      </ul>

      <h2>Nethunter Editions (Kitne Tarah Ke)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <div className="glass-card p-5">
          <h4 className="text-neon-green font-bold mb-2">Nethunter (Root)</h4>
          <p className="text-gray-400 text-sm">
            Full version — sab features ke saath. Rooted device chahiye aur unlocked bootloader. External WiFi adapters, HID attacks, full Metasploit — sab kuch kaam karta hai. Agar aap seriously ethical hacking seekhna chahte hain toh yeh version chahiye. Sabse zyada powerful hai.
          </p>
        </div>
        <div className="glass-card p-5">
          <h4 className="text-neon-cyan font-bold mb-2">Nethunter Rootless</h4>
          <p className="text-gray-400 text-sm">
            Bina root ke kaam karta hai. Limited tools hain — Kali terminal ka subset, kuch wireless tools, VNC viewer. HID attacks aur monitor mode nahi hoga. Agar aapka device rooted nahi hai ya warranty ka dar hai toh yeh try karein. Seekhne ke liye kaafi hai.
          </p>
        </div>
        <div className="glass-card p-5">
          <h4 className="text-yellow-400 font-bold mb-2">Nethunter Lite</h4>
          <p className="text-gray-400 text-sm">
            Kam storage ke liye optimized version. Essential tools hi hain — nmap, aircrack-ng, basic Metasploit. 2GB storage mein install ho jaata hai. Purane phones ya tablets ke liye accha hai jahan storage limited hai.
          </p>
        </div>
      </div>

      <h2>Nethunter Se Kya Kar Sakte Hain?</h2>
      <p>
        Nethunter ke through aap bahut saari cheezein kar sakte hain — sab ethical aur legal framework mein. Yahan kuch practical applications hain:
      </p>
      <ul>
        <li><strong>WiFi Security Testing:</strong> Apne ghar ya office ka WiFi test kar sakte hain — password strong hai ya nahi, WPS enabled hai ya nahi, koi unauthorized device connected hai ya nahi</li>
        <li><strong>Network Scanning:</strong> Network par kaunse devices hain, kaunse ports open hain, kaunsi services chal rahi hain — sab pata kar sakte hain nmap se</li>
        <li><strong>Bluetooth Security:</strong> Bluetooth devices scan kar sakte hain, BLE beacons analyze kar sakte hain, aur known vulnerabilities test kar sakte hain</li>
        <li><strong>Metasploit Exploits:</strong> Metasploit ke through payloads generate kar sakte hain aur controlled environment mein exploitation practice kar sakte hain</li>
        <li><strong>Web Application Testing:</strong> SQL injection, XSS, directory traversal — web vulnerabilities dhundh sakte hain Nikto, SQLMap, aur Burp Suite se</li>
        <li><strong>Social Engineering:</strong> Phishing pages banake awareness training de sakte hain — SET framework se realistic attacks simulate kar sakte hain</li>
        <li><strong>HID/Keyboard Injection:</strong> OTG cable se computer par keystroke injection attacks practice kar sakte hain</li>
        <li><strong>Packet Sniffing:</strong> Wireshark se network traffic capture aur analyze kar sakte hain — kya data ja raha hai kisi bhi connection par</li>
        <li><strong>Password Cracking:</strong> Dictionary aur brute force attacks se weak passwords dhundh sakte hain — John, Hashcat, Hydra se</li>
        <li><strong>CTF Challenges:</strong> Capture The Flag competitions mein participate kar sakte hain — HackTheBox, TryHackMe par practice kar sakte hain</li>
      </ul>

      <h2>Ethical Hacking ke Principles (Niyam)</h2>
      <div className="warning-box mb-6">
        <strong>⚠️ Ethical Hacking ke Golden Rules:</strong>
        <ol className="mt-3 space-y-2 text-sm">
          <li><strong>1. Authorization (Anumati):</strong> Hamesha written permission lein kisi bhi system par testing se pehle. Bina permission ke testing karna hacking hai — chahe aapka intention kitna bhi accha ho. Contract sign karein scope define karein.</li>
          <li><strong>2. Scope (Seema):</strong> Sirf wahi test karein jiski permission mili hai. Scope se bahar jaana galat hai — chahe aapko aur koi vulnerability dikh rahi ho. Owner ko bataayein agar additional testing chahiye.</li>
          <li><strong>3. Do No Harm (Nuksan Na Karein):</strong> Testing se koi nuksan nahi hona chahiye — na data loss, na service disruption, na financial damage. Careful testing karein aur backup plan rakhein.</li>
          <li><strong>4. Report (Report Karein):</strong> Sab findings properly document karein aur system owner ko report karein. Clear language mein likhein taaki developer samajh sake. Remediation steps bhi suggest karein.</li>
          <li><strong>5. Confidentiality (Gopniyata):</strong> Discover ki gayi vulnerabilities ko public mat karein jab tak owner ne fix nahi kar liya. Responsible disclosure follow karein — 90 days ka standard time dete hain fix ke liye.</li>
          <li><strong>6. Legal Compliance (Kanoon Follow Karein):</strong> Apne desh ke cyber laws jaanein aur follow karein. India mein IT Act, 2000 bahut strict hai — Section 43 aur 66 ke under heavy penalties hain.</li>
        </ol>
      </div>

      <h2>Legal Notice (Kanooni Chetawani)</h2>
      <p>
        Unauthorized access kisi bhi computer system ya network mein illegal hai lagbhag har desh mein. India mein Information Technology Act, 2000 ke Section 43 aur Section 66 ke bina permission ke computer access ek criminal offense hai jismein 3 saal tak ki imprisonment aur ₹2 lakh tak ka fine ho sakta hai. United States mein Computer Fraud and Abuse Act (CFAA) hai, UK mein Computer Misuse Act hai, aur aise hi laws duniya ke lagbhag har desh mein hain.
      </p>
      <p>
        Penalties mein heavy fines aur imprisonment dono ho sakte hain — kuch cases mein 10 saal tak ki jail bhi ho sakti hai. Companies par financial damages bhi lag sakte hain. Isliye hamesha ensure karein ki aapke paas proper authorization hai testing se pehle. Bug bounty programs mein bhi scope defined hota hai — usse bahar mat jaayein.
      </p>

      <div className="info-box mt-6">
        <strong>💡 Legal Use Cases (Kab Legal Hai):</strong>
        <ul className="mt-2 text-sm">
          <li><strong>Apna khud ka network:</strong> Apne ghar ka WiFi, apna phone, apna computer — sab test kar sakte hain bina kisi permission ke</li>
          <li><strong>Authorized Penetration Testing:</strong> Company ne hire kiya hai aur written contract hai — tab test kar sakte hain defined scope mein</li>
          <li><strong>Bug Bounty Programs:</strong> HackerOne, Bugcrowd, company ke apne programs — rules follow karein aur responsible disclosure karein</li>
          <li><strong>CTF Competitions:</strong> HackTheBox, TryHackMe, DVWA, CTFtime — deliberately banaye gaye vulnerable systems hain</li>
          <li><strong>Academic Research:</strong> College/university projects mein professor ki guidance mein — lab environment mein</li>
          <li><strong>Security Labs:</strong> Apna khud ka vulnerable lab banayein VirtualBox ya VMware mein — safe aur legal</li>
        </ul>
      </div>

      <h2>Recommended Learning Path (Seekhne Ka Tarika)</h2>
      <p>
        Agar aap bilkul naye hain cybersecurity mein toh yeh recommended path follow karein. Ek ek step complete karein pehle next par jaane se pehle. Har step mein practice zaroori hai — sirf padhne se kuch nahi hoga:
      </p>
      <div className="space-y-3 my-6">
        {[
          { step: '1', title: 'Nethunter Install Karein', desc: 'Sabse pehle apne Android device par Nethunter setup karein. Installation Guide follow karein step by step. Rooted ya rootless — dono se start kar sakte hain.', to: '/installation' },
          { step: '2', title: 'Linux Basics Seekhein', desc: 'Terminal commands seekhein — cd, ls, cat, grep, chmod, apt. Linux file system samjhein. Bash scripting basics seekhein. Yeh sab tools chalane ke liye zaroori hai.' },
          { step: '3', title: 'Networking Fundamentals', desc: 'TCP/IP model, IP addresses, ports, protocols (HTTP, DNS, TCP, UDP) samjhein. OSI model ke layers samjhein. Bina networking ke cybersecurity nahi samjh aayegi.' },
          { step: '4', title: 'Nmap Master Bano', desc: 'Nmap se shuru karein — host discovery, port scanning, service detection, OS detection, NSE scripts. Yeh har pentest ka pehla step hai.', to: '/tools' },
          { step: '5', title: 'WiFi Hacking Practice', desc: 'Monitor mode, packet capture, WPA2 handshake, password cracking — sab practically karein. Apne ghar ke WiFi par practice karein.', to: '/wifi' },
          { step: '6', title: 'Metasploit Seekhein', desc: 'Exploitation framework seekhein — payloads, exploits, post-exploitation. Meterpreter commands master karein. Payload generation seekhein.', to: '/payloads' },
          { step: '7', title: 'Web App Testing', desc: 'SQL injection, XSS, CSRF, directory traversal — OWASP Top 10 vulnerabilities seekhein. DVWA (Damn Vulnerable Web App) par practice karein.' },
          { step: '8', title: 'Practice Labs', desc: 'HackTheBox par machines solve karein. TryHackMe ke learning paths follow karein. VulnHub se vulnerable VMs download karein. Daily practice karein.' },
          { step: '9', title: 'Certification Lein', desc: 'CEH (Certified Ethical Hacker), OSCP (Offensive Security Certified Professional), CompTIA PenTest+ — yeh certifications career mein bahut help karte hain.' },
          { step: '10', title: 'Community Join Karein', desc: 'Null Bangalore, OWASP local chapters, Bugcrowd community — logon se milen, events attend karein, networking karein. Cybersecurity community bahut supportive hai.' },
        ].map(item => (
          <div key={item.step} className="flex items-start space-x-4 glass-card p-4">
            <div className="flex-shrink-0 w-10 h-10 bg-neon-green/10 border border-neon-green/30 rounded-full flex items-center justify-center text-neon-green font-heading font-bold">
              {item.step}
            </div>
            <div>
              <h4 className="text-white font-semibold">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Resources (Zaroori Links)</h2>
      <p>
        Neeche kuch important resources hain jo aapki cybersecurity learning mein help karenge:
      </p>
      <ul>
        <li><strong>Kali Nethunter Docs:</strong> Official documentation — nethunter.kali.org par sab guides aur downloads milenge</li>
        <li><strong>Kali Linux Forums:</strong> Community support — agar koi problem aaye toh forums par search karein ya post karein</li>
        <li><strong>HackTheBox:</strong> Real-world jaise vulnerable machines par practice — monthly subscription hai lekin free tier bhi hai</li>
        <li><strong>TryHackMe:</strong> Guided learning paths beginners ke liye — bahut accha structured course hai free mein bhi</li>
        <li><strong>OWASP:</strong> Open Web Application Security Project — web security ki bible hai. OWASP Top 10 zaroor padhein</li>
        <li><strong>Cybrary:</strong> Free cybersecurity courses — basics se advanced tak sab milta hai</li>
        <li><strong>Null Bytes (WonderHowTo):</strong> Practical hacking tutorials aur guides bahut acchi hain</li>
        <li><strong>YouTube Channels:</strong> NetworkChuck, David Bombal, John Hammond — acche educational channels hain</li>
      </ul>

      <h2>Career Options (Cybersecurity Mein Career)</h2>
      <p>
        Cybersecurity mein bahut saare career options hain aur demand continuously badh raha hai. India mein bhi cybersecurity professionals ki bahut zaroorat hai:
      </p>
      <ul>
        <li><strong>Penetration Tester:</strong> Companies ke systems test karte hain vulnerabilities ke liye. Average salary ₹6-20 LPA</li>
        <li><strong>Security Analyst:</strong> Security events monitor karte hain aur incidents respond karte hain. Average salary ₹4-12 LPA</li>
        <li><strong>Bug Bounty Hunter:</strong> Freelance kaam — companies ke programs mein bugs dhundhkar rewards lete hain. Income variable hai — lakhs bhi ho sakti hai monthly</li>
        <li><strong>Security Consultant:</strong> Companies ko security advice dete hain aur security programs build karte hain. Average salary ₹10-30 LPA</li>
        <li><strong>Red Team Operator:</strong> Advanced adversary simulation — company ke complete infrastructure ko test karte hain. Average salary ₹12-35 LPA</li>
        <li><strong>SOC Analyst:</strong> Security Operations Center mein kaam karte hain — alerts monitor karein, incidents investigate karein. Average salary ₹3-10 LPA</li>
      </ul>

      <div className="success-box mt-8">
        <strong>✅ Shuru Karein!</strong>{' '}
        <Link to="/" className="text-neon-green underline">Home page</Link> par jaayein aur koi topic choose karein seekhne ke liye. Yaad rakhein — practice makes perfect. Roz kuch na kuch naya seekhein aur apne lab par practice karein. Happy Hacking! 🐉
      </div>
    </TutorialLayout>
  )
}
