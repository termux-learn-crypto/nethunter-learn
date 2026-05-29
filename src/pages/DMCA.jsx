import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function DMCA() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/" className="text-gray-500 hover:text-neon-green text-sm font-mono mb-6 inline-block">← Home</Link>
      <h1 className="text-4xl font-heading font-bold text-white mb-2">DMCA Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last Updated: January 2025</p>

      <div className="tutorial-content space-y-6 text-gray-300">

        <h2>1. Digital Millennium Copyright Act (DMCA) Notice</h2>
        <p>
          NethunterLearn.in dusron ki intellectual property ki respect karta hai aur hum expect karte hain ki hamare users bhi aisa karein. Digital Millennium Copyright Act (DMCA) ke provisions ke according, hum copyright infringement ke claims ka jawab dete hain.
        </p>

        <h2>2. Copyright Infringement Reporting</h2>
        <p>
          Agar aapko lagta hai ki website par koi content aapki copyrighted material ko infringe karta hai, toh aap DMCA notice file kar sakte hain. Aapke notice mein following information honi chahiye:
        </p>
        <ul>
          <li>Copyright owner ya authorized representative ka physical ya electronic signature</li>
          <li>Copyrighted work ka description jo allegedly infringe hua hai</li>
          <li>Website par us content ka specific URL jisse infringement hota hai</li>
          <li>Aapka contact information — naam, address, phone number, aur email</li>
          <li>Ek statement ki aapko good faith belief hai ki disputed use copyright owner, uske agent, ya law ke dwara authorized nahi hai</li>
          <li>Ek statement, penalty of perjury ke under, ki notice mein di gayi information accurate hai aur aap copyright owner hain ya authorized representative</li>
        </ul>

        <h2>3. Counter-Notification</h2>
        <p>
          Agar aapka content DMCA notice ke baad remove kar diya gaya hai aur aapko lagta hai ki yeh galti se hua hai ya aapka content actually infringe nahi karta, toh aap counter-notice file kar sakte hain. Counter-notice mein hona chahiye:
        </p>
        <ul>
          <li>Aapka physical ya electronic signature</li>
          <li>Removed content ka identification aur uski location pehle</li>
          <li>Ek statement, penalty of perjury ke under, ki content galti se remove hua hai</li>
          <li>Aapka naam, address, aur jurisdiction ka acceptance (Indian courts)</li>
        </ul>

        <h2>4. Repeat Infringers</h2>
        <p>
          Hum repeat copyright infringers ki accounts aur access terminate karte hain. Agar ek user baar baar copyrighted content post karta hai, toh hum uski website access permanently block kar sakte hain.
        </p>

        <h2>5. Fair Use</h2>
        <p>
          NethunterLearn.in kuch content "fair use" doctrine ke under use karta hai educational purposes ke liye. Ismein shaamil ho sakte hain:
        </p>
        <ul>
          <li>Comments aur criticism ke liye short excerpts</li>
          <li>Educational tutorials mein tool screenshots</li>
          <li>Open-source tools ke proper attribution ke saath references</li>
          <li>Publicly available information ka educational analysis</li>
        </ul>

        <h2>6. Contact for DMCA</h2>
        <p>DMCA notice ya counter-notice file karne ke liye:</p>
        <ul>
          <li>Email: dmca@nethunterlearn.in</li>
          <li>Ya hamare <Link to="/contact" className="text-neon-green underline">Contact page</Link> ke through</li>
        </ul>
        <p>
          Hum valid DMCA notices ka jawab 24-48 hours mein dete hain aur allegedly infringing content ko jaldi se jaldi remove ya disable karte hain.
        </p>
      </div>
    </div>
  )
}
