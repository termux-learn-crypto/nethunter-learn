import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { toolCommands, getHeadingName } from './tool-commands.mjs'
import tools from './src/data/tools.js'

const fileToTool = {}
for (const t of tools) {
  if (t.file) {
    fileToTool[t.file + '.jsx'] = t
  }
}

const categoryScenarios = {
  WiFi: {
    scenario: 'wireless network penetration testing, WPA/WPA2 cracking, aur WiFi security auditing',
    useCase: 'WiFi network ki security assess karte waqt',
    industry: 'security auditors, network engineers aur incident responders',
    realWorld: 'kisi WiFi network par deauthentication attack simulate karna ho ya handshake capture karna ho'
  },
  Recon: {
    scenario: 'information gathering, subdomain enumeration, aur OSINT data collection',
    useCase: 'penetration test ke pehle target ki information collect karte waqt',
    industry: 'penetration testers, bug bounty hunters aur security researchers',
    realWorld: 'kisi target organization ke baare mein maximum information collect karni ho jaise subdomains, DNS records aur email addresses'
  },
  Exploitation: {
    scenario: 'vulnerability exploitation, post-exploitation, aur payload delivery',
    useCase: 'target system mein ghusne ke baad control lene ke liye',
    industry: 'red teamers, penetration testers aur exploit developers',
    realWorld: 'kisi system ki vulnerability ko identify karke usme remote access lena ho aur post-exploitation operations karne ho'
  },
  Web: {
    scenario: 'web application security testing, vulnerability scanning, aur OWASP Top 10 testing',
    useCase: 'web applications ki security testing karte waqt',
    industry: 'web security testers, bug bounty hunters aur application security engineers',
    realWorld: 'kisi website mein SQL injection, XSS ya CSRF jaise vulnerabilities ko detect karna ho'
  },
  Passwords: {
    scenario: 'password cracking, hash analysis, aur credential security testing',
    useCase: 'password strength assess karte waqt ya hash recovery ke liye',
    industry: 'forensic investigators, penetration testers aur system administrators',
    realWorld: 'kisi captured hash file ko crack karke original password recover karna ho'
  },
  Network: {
    scenario: 'network traffic analysis, packet capture, aur MITM attack simulation',
    useCase: 'network traffic ko analyze aur manipulate karte waqt',
    industry: 'network security engineers, SOC analysts aur penetration testers',
    realWorld: 'network par suspicious traffic monitor karna ho ya MITM attack simulate karke security test karna ho'
  },
  Mobile: {
    scenario: 'mobile application security testing, APK reverse engineering, aur Android/iOS analysis',
    useCase: 'mobile apps ki security assess karte waqt',
    industry: 'mobile security testers, app developers aur security researchers',
    realWorld: 'kisi Android app ko decompile karke uske source code mein vulnerabilities dhundhni ho'
  },
  Forensics: {
    scenario: 'digital forensics, data recovery, aur incident response analysis',
    useCase: 'security incident investigate karte waqt evidence collect karne ke liye',
    industry: 'forensic investigators, law enforcement aur incident response teams',
    realWorld: 'kisi compromised system ka memory dump analyze karke attacker ke footprints dhundhne ho'
  },
  Tunneling: {
    scenario: 'traffic tunneling, port forwarding, aur network pivoting',
    useCase: 'blocked ports bypass karke data exfiltrate karne ke liye',
    industry: 'red teamers, penetration testers aur network engineers',
    realWorld: 'kisi restricted network mein traffic ko tunnel karke firewall bypass karna ho'
  },
  Audit: {
    scenario: 'system auditing, compliance checking, aur security posture assessment',
    useCase: 'system ki security posture assess karte waqt compliance verify karne ke liye',
    industry: 'security auditors, compliance officers aur system administrators',
    realWorld: 'kisi system ko hardening guidelines ke against assess karke misconfigurations dhundhni ho'
  }
}

function generateIntro(tool, headingName) {
  const cat = tool.category
  const cfg = categoryScenarios[cat] || categoryScenarios.Recon
  const name = headingName || tool.name
  const desc = (tool.description || `${cat.toLowerCase()} tool`).replace(/\.+$/, '')
  const descHead = desc.charAt(0).toUpperCase() + desc.slice(1)

  const toolKey = Object.keys(toolCommands).find(k => k.toLowerCase() === tool.file?.toLowerCase())
  const cmdData = toolKey ? toolCommands[toolKey] : null
  const optCount = cmdData?.options?.length || 0
  const cmdCount = (cmdData?.basic?.length || 0) + (cmdData?.advanced?.length || 0)

  const para1 = `${name} ${descHead}. Yeh tool ${cfg.scenario} ke liye design kiya gaya hai. ${name} Kali NetHunter aur Kali Linux mein pre-installed aata hai aur professional security assessments mein widely use hota hai.`

  const useCase = cfg.useCase.charAt(0).toUpperCase() + cfg.useCase.slice(1)
  const para2 = `${useCase}, ${name} best choice hai. ${cfg.industry} ise daily use karte hain. ${name} ki ${optCount > 0 ? `${optCount}+ options` : 'unique features'} aur ${cmdCount > 0 ? `${cmdCount}+ practical commands` : 'flexible architecture'} ise powerful aur versatile banate hain.`

  const para3 = `Real-world scenario mein, jab ${cfg.realWorld}, ${name} effective solution hai. Regular updates aur active community support ise latest security challenges ke liye relevant rakhte hain. Yeh Hindi tutorial ${name} ke basic concepts, practical commands, aur advanced techniques ko cover karta hai.`

  return { para1, para2, para3 }
}

function isTemplateContent(content) {
  const patterns = [
    'एक शक्तिशाली',
    'का मुख्य उद्देश्य',
    'सिर्फ एक स्कैनिंग टूल नहीं है',
    'यह टूल न केवल कमजोरियों की पहचान करता है',
    'यह टूल सुरक्षा पेशेवरों, पेनिट्रेशन टेस्टर्स'
  ]
  return patterns.some(p => content.includes(p))
}

const files = readdirSync('src/pages/tools').filter(f => f.endsWith('.jsx'))
let updated = 0

for (const file of files) {
  const tool = fileToTool[file]
  if (!tool) continue

  let content = readFileSync(`src/pages/tools/${file}`, 'utf8')
  if (!isTemplateContent(content)) continue

  const hName = getHeadingName(file.replace('.jsx', ''))
  const headingOpen = `<h2>${hName} क्या है?`

  const headingIdx = content.indexOf(headingOpen)
  if (headingIdx < 0) continue

  // Find the heading close tag
  const headingCloseIdx = content.indexOf('</h2>', headingIdx)
  const sectionStart = headingCloseIdx >= 0 ? headingCloseIdx + 5 : headingIdx + headingOpen.length

  // Find the warning box that comes right after the template content
  const warningIdx = content.indexOf('<div className="warning-box">', headingIdx)

  // The new content replaces everything between heading close and warning box
  if (warningIdx < 0) continue

  const { para1, para2, para3 } = generateIntro(tool, hName)

  const newSection = `${headingOpen}</h2>
      <p>${para1}</p>
      <p>${para2}</p>
      <p>${para3}</p>
      <p>${hName} ka upyog karte waqt hamesha authorized systems par hi test karein. Bina permission ke kisi bhi network ya system par is tool ka use illegal hai aur iske gambhir kanooni parinaam ho sakte hain.</p>

      <div className="warning-box">`

  content = content.slice(0, headingIdx) + newSection + content.slice(warningIdx + '<div className="warning-box">'.length)

  writeFileSync(`src/pages/tools/${file}`, content, 'utf8')
  updated++
  console.log(`Updated ${file} (${tool.id})`)
}

console.log(`\n✅ Updated ${updated} tool pages with unique content`)
