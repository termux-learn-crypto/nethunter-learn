import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Disclaimer() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/" className="text-gray-500 hover:text-neon-green text-sm font-mono mb-6 inline-block">← Home</Link>
      <h1 className="text-4xl font-heading font-bold text-white mb-2">Disclaimer</h1>
      <p className="text-gray-500 text-sm mb-8">Last Updated: January 2025</p>

      <div className="tutorial-content space-y-6 text-gray-300">

        <div className="warning-box">
          <strong>⚠️ Important Notice:</strong> Yeh disclaimer dhyan se padhein. Website use karke aap is disclaimer se agree karte hain.
        </div>

        <h2>1. General Disclaimer</h2>
        <p>
          NethunterLearn.in par available sab information, tutorials, guides, aur content general educational purposes ke liye hai. Hum yeh guarantee nahi karte ki website par di gayi information complete, accurate, current, ya error-free hai. Website par diye gaye tutorials aur techniques ko follow karne se pehle professional cybersecurity expert se salah lena chahiye.
        </p>

        <h2>2. Educational Purpose Only</h2>
        <p>
          NethunterLearn.in ek educational website hai jo cybersecurity awareness badhane ke liye banayi gayi hai. Website par diya gaya sab content — including hacking techniques, penetration testing methods, aur security tools — sirf <strong>controlled lab environments</strong> aur <strong>authorized testing</strong> ke liye hai.
        </p>
        <p>
          Website par describe ki gayi techniques aur methods ka use kisi bhi unauthorized system, network, ya device par karna illegal hai aur criminal charges ho sakte hain.
        </p>

        <h2>3. No Illegal Use</h2>
        <p>
          Hum kisi bhi tarah ki illegal activity ko encourage, promote, ya support nahi karte. Ismein shaamil hain:
        </p>
        <ul>
          <li>Bina authorization ke kisi bhi computer system ya network mein ghusna</li>
          <li>DoS ya DDoS attacks karna</li>
          <li>Data chori ya privacy violations</li>
          <li>Malware ya virus banana ya distribute karna</li>
          <li>Kisi bhi cybersecurity law ka violation</li>
        </ul>
        <p>
          Website ke content ko illegal purposes ke liye use karna aapki apni zimmedari hai. NethunterLearn.in aur uske owners kisi bhi illegal use ke liye responsible nahi hain.
        </p>

        <h2>4. User Responsibility</h2>
        <p>
          Website ke content ko use karte waqt aapki zimmedari hai ki:
        </p>
        <ul>
          <li>Aap apni jurisdiction ke laws samjhein aur follow karein</li>
          <li>Aap sirf apne OWN systems ya authorized systems par testing karein</li>
          <li>Aap proper written permission lein kisi bhi third-party system par testing se pehle</li>
          <li>Aap kisi ka nuksan na karein</li>
          <li>Aap responsible disclosure practices follow karein</li>
        </ul>

        <h2>5. No Liability</h2>
        <p>
          NethunterLearn.in, uske owners, developers, contributors, ya affiliates kisi bhi loss, damage, legal consequences, ya any other outcome ke liye liable nahi honge jo aapke website use se directly ya indirectly related ho. Ismein shaamil hain:
        </p>
        <ul>
          <li>Legal action ya criminal charges</li>
          <li>Financial loss</li>
          <li>Data loss ya system damage</li>
          <li>Third-party claims</li>
          <li>Any other consequential damages</li>
        </ul>

        <h2>6. Accuracy of Information</h2>
        <p>
          Hum content ko accurate aur updated rakhne ki koshish karte hain, lekin cybersecurity field bahut tezi se evolve hota hai. Tools, techniques, aur vulnerabilities regularly change hoti hain. Website par di gayi information outdated ho sakti hai. Hum content ki accuracy ya completeness ki guarantee nahi dete.
        </p>

        <h2>7. External Links</h2>
        <p>
          Hamari website par third-party websites ke links ho sakte hain. Hum in external sites ki content, security, ya privacy practices ke liye responsible nahi hain. External links click karte waqt savdhani bartein.
        </p>

        <h2>8. Tools aur Software</h2>
        <p>
          Website par mention kiye gaye tools aur software (jaise Kali Nethunter, Metasploit, Aircrack-ng, etc.) third-party open-source projects hain. In tools ki functionality, security, ya reliability ke liye hum responsible nahi hain. In tools ko apne risk par use karein.
        </p>

        <h2>9. Professional Advice</h2>
        <p>
          NethunterLearn.in par diya gaya content professional cybersecurity advice nahi hai. Agar aapko security testing ya ethical hacking mein serious interest hai, toh certified cybersecurity professionals se salah lein. Certified courses jaise CEH, OSCP, ya CompTIA PenTest+ consider karein.
        </p>

        <h2>10. Consent</h2>
        <p>
          Website use karke aap is disclaimer se agree karte hain aur maante hain ki aap is disclaimer ko padh aur samajh chuke hain.
        </p>

        <h2>11. Updates</h2>
        <p>
          Hum kabhi bhi is disclaimer ko update kar sakte hain. Updated disclaimer is page par post hogi. Regularly check karte rahein.
        </p>

        <h2>Contact</h2>
        <p>
          Disclaimer ke baare mein koi sawaal ho toh <Link to="/contact" className="text-neon-green underline">Contact page</Link> par reach karein.
        </p>
      </div>
    </div>
  )
}
