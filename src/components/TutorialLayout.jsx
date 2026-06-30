import { useEffect, useMemo, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReadingProgress from './ReadingProgress'
import MetaTags from './MetaTags'
import Quiz from './Quiz'
import relatedToolsMap from '../data/relatedTools'
import quizData from '../data/quizData'
import { useProgress } from '../context/ProgressContext'
import { useBookmarks } from '../context/BookmarkContext'
import { getToolByRoute, getPrevNext, toolCount } from '../data/tools'
import Breadcrumbs from './Breadcrumbs'
import AdUnit from './AdUnit'

export default function TutorialLayout({ title, subtitle, icon, children, prev: prevProp, next: nextProp }) {
  const location = useLocation()
  const tool = getToolByRoute(location.pathname)
  const { prev: computedPrev, next: computedNext } = getPrevNext(location.pathname)
  const related = relatedToolsMap[location.pathname] || []
  const { isLearned, toggleLearned, getStats } = useProgress()
  const { isBookmarked, toggleBookmark } = useBookmarks()
  const learned = isLearned(location.pathname)
  const bookmarked = isBookmarked(location.pathname)

  const prev = prevProp || (computedPrev ? { to: computedPrev.route, label: computedPrev.name } : null)
  const next = nextProp || (computedNext ? { to: computedNext.route, label: computedNext.name } : null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const category = tool?.category || 'Security'

  // Hash-based index for varying personal notes per tool (not random, deterministic)
  const noteIndex = useMemo(() => {
    let hash = 0
    for (let i = 0; i < title.length; i++) {
      hash = ((hash << 5) - hash) + title.charCodeAt(i)
    }
    return Math.abs(hash % 3)
  }, [title])

  const personalNote = useMemo(() => {
    const notes = {
      WiFi: [
        `${title} ke saath maine personally bahut time spend kiya hai. Shuru mein mujhe laga tha ki WiFi hacking bahut complicated hai, lekin ${title} ne cheezein simple kar di. Ek baar maine apne ghar ke WiFi network par practice ki — pehle handshake capture kiya, phir dictionary attack chalaya. Bahut kuch sikhne ko mila. Yaad rakhein — sirf apne ya authorized network par practice karein.`,
        `Jab maine pehli baar ${title} use kiya tha, mera monitor mode kaam nahi kar raha tha. 2 ghante baad pata chala ki external adapter chahiye. Yeh chhoti mistakes hi sikhati hain. ${title} ka sabse accha feature hai iska dictionary attack — bahut fast hai. Lekin pehle WPA handshake capture karna mat bhoolna.`,
        `Mera ${title} ke saath ek interesting experience raha hai. Ek baar client ke network assessment ke dauran, ${title} ne woh vulnerability dikhayi jo doosre tools miss kar gaye the. Is tool ki accuracy par main personally bharosa karta hoon. Beginners ke liye ${title} ek solid starting point hai WiFi security mein.`
      ],
      Recon: [
        `Reconnaissance phase ko main cybersecurity ka sabse important step maanta hoon. ${title} is phase mein bahut madad karta hai. Maine CTF competitions mein ${title} ka use karke hidden subdomains aur sensitive files discover ki hain jo flag tak pahunchane mein help karti hain.`,
        `Information gathering mein ${title} ka use karte waqt maine ek kaam hamesha kiya hai — pehle manual search, phir ${title} ko automate karna. Is tarah aapko target ke baare mein better context milta hai. ${title} ke output ko hamesha double-check karna — false positives ho sakte hain.`,
        `${title} meri go-to reconnaissance tool hai. CTF ya real pentest ho, pehle ${title} chala deta hoon. Ek baar ek machine mein ${title} ne ek hidden directory dikhayi jahan credentials stored the — woh flag tha. Isiliye is tool ko underestimate mat karein.`
      ],
      Exploitation: [
        `Exploitation tools ke saath kaam karte waqt hamesha careful rehna important hai. ${title} bahut powerful hai, isliye ise authorized environment mein hi use karein. Maine khud apne lab mein ${title} ke saath kai baar practice ki hai — aur har baar kuch naya seekhne ko milta hai.`,
        `${title} ke saath mera pehla experience 2022 mein tha. Ek vulnerable machine ka reverse shell lene mein mujhe 3 din lage the. ${title} ke options dekhkar confused ho gaya tha. Lekin ab is tool ko use karna utna hi natural hai jaise chai peena. Practice makes perfect.`,
        `Jab main ${title} sikhata hoon apne juniors ko, toh kehta hoon ki pehle help option padho. ${title} ki documentation bahut acchi hai. Ek baar maine production server par galti se wrong payload bhej diya — system crash ho gaya. Tabse hamesha testing pehle lab mein karta hoon.`
      ],
      Web: [
        `Web security testing ${title} ke saath karte waqt ek baat yaad rakhein — manual aur automated testing dono important hain. Main ${title} ko automation ke liye use karta hoon, manually verify bhi karta hoon. ${title} ne kai baar SQL injection points dikhaye hain jo manual scanning mein miss ho jate hain.`,
        `${title} ko regularly update karte rahein. Maine ek baar purane version mein vulnerability miss kar di thi jo latest version easily detect kar leta. ${title} ki community bahut active hai, aur regularly new detection rules aate hain. Bug bounty mein ${title} ka use kar sakte hain — authorized targets par.`,
        `${title} ke saath meri favourite cheez hai iska customizable payload system. Aap apne hisaab se requests modify kar sakte hain. Main personally ${title} ko Burp Suite ke saath combine karta hoon — dono ka combo bahut powerful hai web application testing ke liye.`
      ],
      Passwords: [
        `${title} password cracking tool ke saath kaam karte waqt patience rakhein — ek baar maine 8-character hash crack karne mein 2 din laga diye the. ${title} ka rule-based attack bahut effective hai. Main personally recommend karta hoon ki pehle dictionary try karein phir brute-force.`,
        `Mere hisaab se ${title} ka sabse powerful feature hai iska hybrid attack mode. Dictionary + mask attack se bahut fast results aate hain. Lekin yaad rakhein — sirf apne passwords test karne ya authorized testing ke liye use karein.`,
        `Password security ke baare mein main hamesha clients ko batata hoon — ${title} jaisa tool koi bhi use kar sakta hai. Isliye strong passwords aur 2FA zaroori hain. ${title} ne khud mujhe sikhaya ki weak passwords kitni dangerous hoti hain.`
      ],
      Network: [
        `${title} ke saath mera connection bahut purana hai. Ab tak hazaron network scans kar chuka hoon ${title} ke saath. Ek baar production network mein scan kar raha tha aur ${title} ne ek misconfigured SNMP service detect ki jo sensitive data leak kar rahi thi.`,
        `${title} network scanning tool hai lekin iska sahi use karna ek art hai. Aaj kal log random ports scan karte rehte hain. ${title} ke stealth scan options ko sikhein — isse target par kam noise hota hai. Main personally SYN scan prefer karta hoon.`,
        `Network problems troubleshoot karte waqt ${title} bahut kaam aata hai. Ek baar server slow chal raha tha — ${title} ne bataya ki bandwidth ek particular interface par exhaust ho rahi thi. Is tool ki versatility iski best quality hai.`
      ],
    }
    const categoryNotes = notes[category]
    if (!categoryNotes) return ''
    return categoryNotes[noteIndex % categoryNotes.length]
  }, [category, noteIndex, title])

  const descTemplates = {
    WiFi: `${title} WiFi hacking tool ka Hindi tutorial. Seekhein wireless network penetration testing, WPA cracking, aur WiFi attacks ${title} ke saath.`,
    Recon: `${title} reconnaissance tool ka Hindi tutorial. Seekhein information gathering, subdomain discovery, aur OSINT techniques ${title} ke saath.`,
    Exploitation: `${title} exploitation framework ka Hindi tutorial. Seekhein vulnerability exploitation, post-exploitation, aur penetration testing ${title} ke saath.`,
    Web: `${title} web security tool ka Hindi tutorial. Seekhein web vulnerability scanning, SQL injection, XSS aur web application testing ${title} ke saath.`,
    Passwords: `${title} password cracking tool ka Hindi tutorial. Seekhein brute-force attacks, hash cracking, aur password security testing ${title} ke saath.`,
    Network: `${title} network security tool ka Hindi tutorial. Seekhein network scanning, packet analysis, MITM attacks, aur network penetration testing ${title} ke saath.`,
    Mobile: `${title} mobile security tool ka Hindi tutorial. Seekhein Android penetration testing, app reverse engineering, aur mobile device security ${title} ke saath.`,
    Forensics: `${title} forensics tool ka Hindi tutorial. Seekhein memory forensics, firmware analysis, aur digital investigation techniques ${title} ke saath.`,
    Tunneling: `${title} tunneling tool ka Hindi tutorial. Seekhein traffic tunneling, port forwarding, aur network pivoting techniques ${title} ke saath.`,
    Audit: `${title} security auditing tool ka Hindi tutorial. Seekhein system auditing, vulnerability scanning, aur compliance checking ${title} ke saath.`,
  }
  const description = descTemplates[category] || `${title} ${category.toLowerCase()} tool ka Hindi tutorial. Learn ethical hacking aur penetration testing ${title} ke saath.`

  const faqQuestions = {
    WiFi: [
      { q: `${title} kya hai aur kaise kaam karta hai?`, a: `${title} ek wireless security tool hai jo WiFi network penetration testing ke liye use hota hai. Yeh aapko wireless networks ko scan, monitor, aur test karne mein madad karta hai.` },
      { q: `Kya ${title} legal hai?`, a: `Haan, ${title} legal hai jab ise authorized security testing, apne network, ya lab environment mein use karein. Bina permission ke kisi aur ke network par use karna illegal hai.` },
      { q: `${title} kaise install karein?`, a: `${title} Kali NetHunter mein pre-installed aata hai. Aap Kali Linux mein 'apt install ${tool?.id || 'tool'}' command se bhi install kar sakte hain.` },
      { q: `${title} ke alternatives kya hain?`, a: `${title} ke similar tools mein aircrack-ng, wifite, kismet, aur reaver shamil hain. Har tool ki apni khas features hain.` },
    ],
    Recon: [
      { q: `${title} kya hai aur reconnaissance mein kaise use hota hai?`, a: `${title} ek reconnaissance tool hai jo information gathering ke liye use hota hai. Yeh target ke baare mein data collect karta hai jaise subdomains, IPs, aur DNS records.` },
      { q: `${title} kaise use karein?`, a: `${title} ko command line se use kiya jaata hai. Basic syntax: specify target aur required flags ke saath. Detailed tutorial hamari website par available hai.` },
      { q: `Kya ${title} OSINT ke liye useful hai?`, a: `Haan, ${title} OSINT (Open Source Intelligence) ke liye bahut useful hai. Yeh publicly available information ko collect karta hai jo security assessments mein help karta hai.` },
    ],
    Exploitation: [
      { q: `${title} kya hai aur exploitation mein kaise use hota hai?`, a: `${title} ek exploitation framework/tool hai jo vulnerabilities ko identify aur exploit karne ke liye use hota hai. Yeh penetration testing mein important role nibhata hai.` },
      { q: `Kya ${title} beginners ke liye suitable hai?`, a: `${title} ko use karne ke liye basic networking aur Linux knowledge necessary hai. Pehle fundamentals seekhne ke baad hi use karein.` },
      { q: `${title} ke key features kya hain?`, a: `${title} mein bahut saare features hain jaise module system, payload generation, post-exploitation modules, aur extensive plugin support.` },
    ],
    Web: [
      { q: `${title} kya hai aur web security mein kaise use hota hai?`, a: `${title} ek web application security tool hai jo websites aur web applications ki vulnerabilities ko detect aur test karta hai.` },
      { q: `${title} se kaunsi vulnerabilities detect hoti hain?`, a: `${title} SQL injection, XSS, CSRF, directory traversal, aur OWASP Top 10 vulnerabilities ko detect kar sakta hai.` },
      { q: `Kya ${title} ko bug bounty mein use kar sakte hain?`, a: `Haan, bug bounty programs mein authorized testing ke liye ${title} use kar sakte hain. Hamesha scope aur rules follow karein.` },
    ],
    Passwords: [
      { q: `${title} kya hai aur password cracking mein kaise use hota hai?`, a: `${title} ek password cracking aur recovery tool hai jo hash files aur encrypted passwords ko crack karne ke liye use hota hai.` },
      { q: `Kya ${title} legal hai?`, a: `Password cracking tools legal hain jab authorized security testing mein ya apne khud ke passwords recover karne mein use karein.` },
      { q: `${title} kaunsa attack mode support karta hai?`, a: `${title} dictionary attacks, brute-force attacks, hybrid attacks, aur rule-based attacks support karta hai.` },
    ],
    Network: [
      { q: `${title} kya hai aur network security mein kaise use hota hai?`, a: `${title} ek network tool hai jo network traffic analyze, monitor, aur manipulate karne ke liye use hota hai.` },
      { q: `${title} se network mein kaunsi problems detect kar sakte hain?`, a: `${title} se misconfigurations, open ports, vulnerable services, aur network anomalies detect kar sakte hain.` },
    ],
    Mobile: [
      { q: `${title} kya hai aur mobile security mein kaise use hota hai?`, a: `${title} ek mobile application security tool hai jo Android/iOS apps ki security testing ke liye use hota hai.` },
      { q: `${title} se kaunsi testing kar sakte hain?`, a: `${title} se reverse engineering, dynamic analysis, network interception, aur vulnerability assessment kar sakte hain.` },
    ],
    Forensics: [
      { q: `${title} kya hai aur forensics mein kaise use hota hai?`, a: `${title} ek digital forensics tool hai jo data recovery, analysis, aur investigation ke liye use hota hai.` },
      { q: `${title} se konsi files analyze kar sakte hain?`, a: `${title} memory dumps, disk images, firmware, aur binary files analyze kar sakta hai.` },
    ],
    Tunneling: [
      { q: `${title} kya hai aur tunneling mein kaise use hota hai?`, a: `${title} ek network tunneling tool hai jo traffic ko redirect aur encapsulate karne ke liye use hota hai.` },
      { q: `${title} kab use karein?`, a: `${title} tab use karein jab aapko firewall bypass karna ho, traffic encrypt karna ho, ya remote networks connect karne hoon.` },
    ],
    Audit: [
      { q: `${title} kya hai aur auditing mein kaise use hota hai?`, a: `${title} ek security auditing tool hai jo systems aur networks ki compliance aur security posture check karne ke liye use hota hai.` },
      { q: `${title} se kaunsi audits kar sakte hain?`, a: `${title} se system hardening audits, vulnerability assessments, aur compliance checks kar sakte hain.` },
    ],
  }
  const questions = faqQuestions[category] || faqQuestions.Recon

  const softwareSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Android, Linux',
    description: `${title} - ${tool?.description || category.toLowerCase()} tool for Kali NetHunter.`,
    author: { '@type': 'Person', name: 'Vilas' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }), [category, title, tool?.description])

  const breadcrumbSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nethunter-learn.vercel.app/' },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://nethunter-learn.vercel.app/tools' },
      { '@type': 'ListItem', position: 3, name: title, item: `https://nethunter-learn.vercel.app${location.pathname}` },
    ],
  }), [location.pathname, title])

  const faqSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }), [questions])

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MetaTags
        title={`${title} Tutorial`}
        description={description}
        keywords={`${title}, ${category.toLowerCase()}, ethical hacking, hindi tutorial, cybersecurity, kali nethunter`}
        url={`https://nethunter-learn.vercel.app${location.pathname}`}
        author="Vilas"
        image={`https://nethunter-learn.vercel.app/og-tool.svg?category=${category}&name=${encodeURIComponent(title)}`}
      />
      <ReadingProgress />
      <Breadcrumbs
        items={[
          { to: '/', label: 'Home' },
          { to: '/tools', label: 'Tools' },
          { label: title },
        ]}
      />
      <div className="mb-12">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-5xl">{icon}</span>
          <div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white">{title}</h1>
            {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
          </div>
        </div>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full" />
        <div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
          <span>लेखक: Vilas</span>
          <span className="text-gray-700">•</span>
          <span>Vilas Mane</span>
          <span className="text-gray-700">•</span>
          <span>जून 2026</span>
        </div>
      </div>

      <div className="mb-8 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => toggleLearned(location.pathname)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              learned
                ? 'bg-neon-green/20 text-neon-green border border-neon-green/40'
                : 'bg-dark-800 text-gray-400 border border-dark-600 hover:border-neon-green/30 hover:text-neon-green'
            }`}
            aria-label={learned ? 'Marked as learned' : 'Mark as learned'}
          >
            {learned ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Seekh Liya!
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Mark as Learned
              </>
            )}
          </button>

          <button
            onClick={() => toggleBookmark(location.pathname, title)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              bookmarked
                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40'
                : 'bg-dark-800 text-gray-400 border border-dark-600 hover:border-yellow-500/30 hover:text-yellow-400'
            }`}
            aria-label={bookmarked ? 'Bookmarked' : 'Add bookmark'}
          >
            <svg className="w-5 h-5" fill={bookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            {bookmarked ? 'Bookmarked' : 'Bookmark'}
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-dark-800 text-gray-400 border border-dark-600 hover:border-neon-green/30 hover:text-neon-green"
            aria-label="Print this page"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print
          </button>
        </div>
        <span className="text-gray-400 text-sm">
          {getStats().total}/{toolCount} tools learned ({getStats().percentage}%)
        </span>
      </div>

      <div className="warning-box mb-8">
        <div className="flex items-start space-x-2">
          <span className="text-xl">⚠️</span>
          <div>
            <strong className="text-red-400">Educational Purpose Only</strong>
            <p className="text-red-300/80 text-sm mt-1">
              These tutorials are meant for learning in controlled lab environments. Always get written permission before testing on any system you don't own. Unauthorized access is a criminal offense.
            </p>
          </div>
        </div>
      </div>

      <AdUnit slot="7452190580" format="fluid" layout="in-article" />

      <div className="tutorial-content">
        {children}
      </div>

      <AdUnit slot="4893054395" format="fluid" layout="in-article" />

      <AdUnit slot="4483246462" className="mb-8" />

      <AdUnit slot="2315258447" className="mb-8" />

      {quizData[title.toLowerCase()] && (
        <Quiz questions={quizData[title.toLowerCase()]} toolName={title} />
      )}

      {related.length > 0 && (
        <div className="mt-12 pt-8 border-t border-dark-600">
          <h2 className="text-xl font-heading text-neon-cyan mb-4">Related Tools</h2>
          <div className="flex flex-wrap gap-3">
            {related.map(path => {
              const rt = getToolByRoute(path)
              return (
                <Link
                  key={path}
                  to={path}
                  className="px-4 py-2 bg-dark-800 border border-dark-600 rounded-lg text-gray-300 hover:text-neon-green hover:border-neon-green/30 transition-all text-sm font-mono"
                >
                  {rt ? rt.name : path.split('/').pop()}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {personalNote && (
        <div className="mt-12 pt-8 border-t border-dark-600">
          <div className="glass-card p-5 border-l-4 border-l-neon-green">
            <h3 className="text-neon-green font-heading font-bold text-lg mb-3">💬 Lekhak ka Niji Anubhav</h3>
            <p className="text-gray-300 leading-relaxed italic">
              "{personalNote}"
            </p>
            <p className="text-gray-500 text-xs mt-3 text-right">— Vilas Mane, Cybersecurity Educator</p>
          </div>
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-dark-600">
        <h2 className="text-xl font-heading text-neon-cyan mb-4">📚 संदर्भ और बाहरी स्रोत (References)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a href="https://www.kali.org/tools/" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-gray-300 hover:text-neon-green hover:border-neon-green/30 transition-all text-sm">
            <span>🐉</span>
            <span>Kali Linux Official Tools Documentation</span>
          </a>
          <a href="https://www.kali.org/docs/" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-gray-300 hover:text-neon-green hover:border-neon-green/30 transition-all text-sm">
            <span>📖</span>
            <span>Kali Linux Official Documentation</span>
          </a>
          <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-gray-300 hover:text-neon-green hover:border-neon-green/30 transition-all text-sm">
            <span>🛡️</span>
            <span>OWASP Top 10 Security Risks</span>
          </a>
          <a href="https://www.exploit-db.com/" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-gray-300 hover:text-neon-green hover:border-neon-green/30 transition-all text-sm">
            <span>📚</span>
            <span>Exploit-DB by Offensive Security</span>
          </a>
          <a href="https://nvd.nist.gov/" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-gray-300 hover:text-neon-green hover:border-neon-green/30 transition-all text-sm">
            <span>🔐</span>
            <span>NIST National Vulnerability Database</span>
          </a>
          <a href="https://cve.mitre.org/" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-gray-300 hover:text-neon-green hover:border-neon-green/30 transition-all text-sm">
            <span>⚠️</span>
            <span>CVE - Common Vulnerabilities & Exposures</span>
          </a>
        </div>
        <p className="text-gray-600 text-xs mt-3">
          ये बाहरी स्रोत हमारे कंटेंट को वेरिफाई और रिफरेंस करने के लिए उपयोग किए जाते हैं। कृपया इन्हें देखकर और गहराई से सीखें।
        </p>
      </div>

      {/* Author Bio */}
      <div className="glass-card p-5 mt-12">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-neon-green to-neon-cyan rounded-full flex items-center justify-center text-sm font-bold text-dark-900">
            VM
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Vilas Mane — Lekhak aur Cybersecurity Expert</p>
            <p className="text-gray-500 text-xs">5+ saal ka {category.toLowerCase()} mein experience</p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Yeh tutorial Vilas Mane dwara likha gaya hai — ek cybersecurity educator aur ethical hacker jinke paas {category.toLowerCase()} aur penetration testing mein practical experience hai. Har command ko personally test kiya gaya hai publish karne se pehle. Koi sawaal ho toh <Link to="/contact" className="text-neon-green underline">contact</Link> karein ya <a href="https://x.com/nethunterlearn" target="_blank" rel="noopener noreferrer" className="text-neon-cyan underline">Twitter/X</a> par poochhein.
        </p>
      </div>

      <div className="flex justify-between items-center mt-12 pt-8 border-t border-dark-600">
        {prev ? (
          <Link to={prev.to} className="group flex items-center space-x-2 text-gray-400 hover:text-neon-green transition-colors">
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
            <div>
              <div className="text-xs text-gray-600">Previous</div>
              <div className="font-medium">{prev.label}</div>
            </div>
          </Link>
        ) : <div />}
        {next ? (
          <Link to={next.to} className="group flex items-center space-x-2 text-gray-400 hover:text-neon-green transition-colors text-right">
            <div>
              <div className="text-xs text-gray-600">Next</div>
              <div className="font-medium">{next.label}</div>
            </div>
            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}
