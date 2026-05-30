import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link to="/" className="text-gray-500 hover:text-neon-green text-sm font-mono mb-6 inline-block">← Home</Link>
      <h1 className="text-4xl font-heading font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last Updated: January 2025</p>

      <div className="tutorial-content space-y-6 text-gray-300">

        <h2>1. Introduction</h2>
        <p>
          NethunterLearn.in ("hum", "hamara", "website") aapki privacy ki respect karte hain. Yeh Privacy Policy batati hai ki hum aapka data kaise collect, use, aur protect karte hain jab aap hamari website visit karte hain. Website use karke aap is policy se agree karte hain.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Personal Information</h3>
        <p>
          Hum personally identifiable information (PII) tabhi collect karte hain jab aap voluntarily hamare contact form mein submit karte hain. Isme shaamil ho sakta hai:
        </p>
        <ul>
          <li>Naam (agar aap contact form mein dete hain)</li>
          <li>Email address (contact form ke through)</li>
          <li>Koi bhi message ya inquiry jo aap bhejte hain</li>
        </ul>

        <h3>2.2 Non-Personal Information</h3>
        <p>
          Hum automatically kuch non-personal information collect karte hain jab aap website visit karte hain:
        </p>
        <ul>
          <li>Browser type aur version</li>
          <li>Operating system</li>
          <li>IP address (anonymized)</li>
          <li>Pages visited aur time spent</li>
          <li>Referring website URL</li>
          <li>Device type (mobile/desktop)</li>
        </ul>

        <h2>3. Cookies aur Tracking</h2>
        <p>
          Hum cookies aur similar tracking technologies use karte hain website ko improve karne ke liye. Cookies small text files hain jo aapke browser mein store hote hain.
        </p>
        <p>
          <strong>Essential Cookies:</strong> Website ki basic functionality ke liye zaroori hain. Inhe disable karna website ke kuch parts ko break kar sakta hai.
        </p>
        <p>
          <strong>Analytics Cookies:</strong> Hum Google Analytics use karte hain website traffic samajhne ke liye. Google Analytics cookies collect karta hai jo website use patterns batate hain. Yeh data anonymous hai aur aapki personal identity se linked nahi hai.
        </p>
        <p>
          <strong>Advertising Cookies:</strong> Third-party advertising partners cookies use kar sakte hain targeted ads dikhane ke liye. Hum in cookies ko control nahi karte.
        </p>

        <h2>4. How We Use Your Information</h2>
        <p>Hum collected information ko following purposes ke liye use karte hain:</p>
        <ul>
          <li>Website ko operate aur maintain karne ke liye</li>
          <li>User experience improve karne ke liye</li>
          <li>Aapke queries aur contact requests ka jawab dene ke liye</li>
          <li>Website analytics aur performance track karne ke liye</li>
          <li>Security threats detect aur prevent karne ke liye</li>
          <li>Legal obligations comply karne ke liye</li>
        </ul>

        <h2>5. Third-Party Services</h2>
        <p>Hum following third-party services use karte hain:</p>
        <ul>
          <li><strong>Google Analytics:</strong> Website traffic analysis ke liye. Google ki privacy policy: policies.google.com/privacy</li>
          <li><strong>Google AdSense:</strong> Advertising ke liye. Google ads personalization settings se manage kar sakte hain.</li>
          <li><strong>Hosting Provider:</strong> Website files store karne ke liye.</li>
        </ul>

        <h2>6. Data Security</h2>
        <p>
          Hum aapke data ko protect karne ke liye reasonable security measures use karte hain, including SSL/TLS encryption, secure servers, aur access controls. Lekin, internet par koi bhi transmission 100% secure nahi hai, aur hum absolute security guarantee nahi kar sakte.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          Hum aapka data sirf tab tak retain karte hain jab tak yeh us purpose ke liye zaroori hai jiske liye collect kiya gaya tha. Contact form submissions ko 1 year tak retain kiya ja sakta hai. Analytics data 26 months tak retain hota hai.
        </p>

        <h2>8. Your Rights</h2>
        <p>Aapko following rights hain:</p>
        <ul>
          <li><strong>Access:</strong> Apna personal data dekhne ka haq</li>
          <li><strong>Correction:</strong> Galat data correct karwane ka haq</li>
          <li><strong>Deletion:</strong> Apna data delete karwane ka haq</li>
          <li><strong>Opt-out:</strong> Marketing communications se unsubscribe karne ka haq</li>
          <li><strong>Data Portability:</strong> Apna data ek standard format mein receive karne ka haq</li>
        </ul>

        <h2>9. Children's Privacy</h2>
        <p>
          Hamari website 13 saal se kam umar ke bachchon ke liye nahi hai. Hum knowingly 13 saal se kam umar ke bachchon se personal information collect nahi karte. Agar hume pata chale ki kisi bachche ne personal information di hai, toh hum usse turant delete kar denge.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          Hum kabhi bhi is Privacy Policy ko update kar sakte hain. Changes is page par post kiye jayenge aur "Last Updated" date update hogi. Significant changes ke liye hum website par notice denge. Aapko regularly is policy check karni chahiye.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          Agar aapke paas is Privacy Policy ke baare mein koi sawaal hai, toh humse contact karein:
        </p>
        <ul>
          <li>Contact form: <Link to="/contact" className="text-neon-green underline">Contact Us page</Link></li>
          <li>Email: privacy@nethunter-learn.vercel.app</li>
        </ul>
      </div>
    </div>
  )
}
