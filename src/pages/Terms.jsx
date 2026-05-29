import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Terms() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/" className="text-gray-500 hover:text-neon-green text-sm font-mono mb-6 inline-block">← Home</Link>
      <h1 className="text-4xl font-heading font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-gray-500 text-sm mb-8">Last Updated: January 2025</p>

      <div className="tutorial-content space-y-6 text-gray-300">

        <h2>1. Agreement to Terms</h2>
        <p>
          NethunterLearn.in ("website") access aur use karke aap in Terms of Service ("Terms") se agree karte hain. Agar aap in terms se agree nahi karte, toh please website use na karein. Hum kabhi bhi in terms ko modify kar sakte hain, aur continued use ka matlab hai ki aap updated terms se agree karte hain.
        </p>

        <h2>2. Use License</h2>
        <p>
          NethunterLearn.in par available educational content dekhne aur access karne ki permission di jaati hai, sirf personal, non-commercial, educational use ke liye. Yeh license automatically terminate hogi agar aap kisi bhi term ka violation karte hain.
        </p>
        <p>Aap <strong>nahi</strong> kar sakte:</p>
        <ul>
          <li>Content ko modify ya copy karna commercial purposes ke liye</li>
          <li>Content ko kisi aur website par republish karna bina written permission ke</li>
          <li>Website ka reverse engineering karna</li>
          <li>Website par automated bots ya scrapers use karna</li>
          <li>Website ke servers ko overload karna (DDoS, brute force, etc.)</li>
        </ul>

        <h2>3. Educational Purpose Only</h2>
        <p>
          NethunterLearn.in par diya gaya sab content sirf <strong>educational purposes</strong> ke liye hai. Yeh website cybersecurity awareness aur learning ke liye banayi gayi hai. Hum kisi bhi illegal hacking, unauthorized access, ya criminal activity ko encourage ya support nahi karte.
        </p>

        <h2>4. User Responsibilities</h2>
        <p>Website use karte waqt aap agree karte hain ki:</p>
        <ul>
          <li>Aap sirf apne OWN systems ya WRITTEN PERMISSION wale systems par testing karenge</li>
          <li>Aap kisi bhi illegal activity mein participate nahi karenge</li>
          <li>Aap apni jurisdiction ke laws follow karenge</li>
          <li>Aap dusron ko harm nahi karenge ya unki privacy violate nahi karenge</li>
          <li>Aap website ke content ko educational learning ke liye hi use karenge</li>
        </ul>

        <h2>5. Prohibited Activities</h2>
        <p>Neeche diye gaye activities strictly prohibited hain:</p>
        <ul>
          <li>Bina permission ke kisi bhi system ya network ko hack karna</li>
          <li>DoS/DDoS attacks launch karna</li>
          <li>Malware ya viruses distribute karna</li>
          <li>Personal data chori karna</li>
          <li>Social engineering attacks karna bina authorization ke</li>
          <li>Illegal surveillance ya tracking</li>
          <li>Website ko illegal purposes ke liye use karna</li>
        </ul>

        <h2>6. Intellectual Property</h2>
        <p>
          Website ka sab content — text, graphics, logos, tutorials, code examples — NethunterLearn.in ya uske content creators ki property hai. Kali Linux aur Nethunter trademarks Offensive Security ke hain. Hum third-party trademarks ka use sirf educational reference ke liye karte hain.
        </p>

        <h2>7. Third-Party Links</h2>
        <p>
          Hamari website par third-party websites ke links ho sakte hain. Hum in websites ki content, privacy practices, ya services ke liye responsible nahi hain. Third-party sites use karte waqt unki apni terms aur policies padhni chahiye.
        </p>

        <h2>8. Advertisements</h2>
        <p>
          Website par third-party advertisements display ho sakti hain. Advertisers apni ads ke content ke liye responsible hain. Hum misleading ya malicious ads ko rokne ki koshish karte hain lekin guarantee nahi de sakte. Aap ads ke saath apne interaction ke liye khud responsible hain.
        </p>

        <h2>9. Disclaimer of Warranties</h2>
        <p>
          Website "AS IS" aur "AS AVAILABLE" basis par provide ki jaati hai. Hum kisi bhi warranty — express ya implied — ke bina content dete hain. Hum yeh guarantee nahi karte ki:
        </p>
        <ul>
          <li>Website hamesha available ya error-free hogi</li>
          <li>Content 100% accurate ya complete hoga</li>
          <li>Website ke through milne wali information aapki zaroorat ko poora karegi</li>
          <li>Website mein koi virus ya harmful component nahi hoga</li>
        </ul>

        <h2>10. Limitation of Liability</h2>
        <p>
          NethunterLearn.in, uske owners, contributors, ya affiliates kisi bhi indirect, incidental, special, consequential, ya punitive damages ke liye liable nahi honge — chahe damages website use karne se ho, content par rely karne se ho, ya kisi third-party action se ho.
        </p>

        <h2>11. Indemnification</h2>
        <p>
          Aap agree karte hain ki NethunterLearn.in ko kisi bhi claims, damages, losses, liabilities, aur expenses (including legal fees) se indemnify aur hold harmless karenge jo aapke website use, terms violation, ya kisi third-party rights ke violation se arise hoti hain.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          Yeh Terms Indian laws ke according govern honge. Koi bhi dispute Indian courts ke jurisdiction mein resolve hoga.
        </p>

        <h2>13. Contact</h2>
        <p>
          Terms ke baare mein koi sawaal ho toh <Link to="/contact" className="text-neon-green underline">Contact page</Link> par reach karein.
        </p>
      </div>
    </div>
  )
}
