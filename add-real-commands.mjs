import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { toolCommands, getHeadingName } from './tool-commands.mjs'

const files = readdirSync('src/pages/tools').filter(f => f.endsWith('.jsx'))

let updated = 0

for (const file of files) {
  const toolName = file.replace('.jsx', '')
  const cmds = toolCommands[toolName]
  if (!cmds) continue

  let content = readFileSync(`src/pages/tools/${file}`, 'utf8')
  const original = content
  const n = getHeadingName(toolName)

  // 0. Replace installation section
  if (cmds.install) {
    const pkg = cmds.install.pkg
    const heading = `<h2>${n} की स्थापना</h2>`
    const startIdx = content.indexOf(heading)
    const nextH2Idx = content.indexOf('<h2>', startIdx + heading.length)
    if (startIdx >= 0 && nextH2Idx >= 0 && nextH2Idx > startIdx) {
      const section = `${heading}
      <p>${n} काली लिनक्स में पहले से उपलब्ध है। अगर इंस्टॉल नहीं है तो:</p>
      <CodeBlock code={'sudo apt update && sudo apt install ${pkg} -y'}/>
      <p>इंस्टॉल के बाद <code>${pkg} --help</code> से जाँच करें।</p>`
      content = content.slice(0, startIdx) + section + content.slice(nextH2Idx)
    }
  }

  // 1. Replace options table
  if (cmds.options) {
    const heading = `<h2>${n} के महत्वपूर्ण विकल्प</h2>`
    const startIdx = content.indexOf(heading)
    const nextH2Idx = content.indexOf('<h2>', startIdx + heading.length)
    if (startIdx >= 0 && nextH2Idx >= 0 && nextH2Idx > startIdx) {
      const rows = cmds.options.map(([flag, desc]) => {
        const sf = flag.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
        const sd = desc.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
        return `          <tr><td>{'${sf}'}</td><td>{'${sd}'}</td></tr>`
      }).join('\n')
      const newSection = `${heading}
      <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-neon-green/30">
            <th className="text-left py-2 px-3 text-neon-green">विकल्प</th>
            <th className="text-left py-2 px-3 text-neon-green">विवरण</th>
          </tr>
        </thead>
        <tbody className="text-gray-400">
${rows}
        </tbody>
      </table>
      </div>`
      content = content.slice(0, startIdx) + newSection + content.slice(nextH2Idx)
    }
  }

  // 2. Replace "How to Use" section
  if (cmds.basic) {
    const heading = `<h2>${n} का उपयोग कैसे करें</h2>`
    const startIdx = content.indexOf(heading)
    const nextH2Idx = content.indexOf('<h2>', startIdx + heading.length)
    if (startIdx >= 0 && nextH2Idx >= 0) {
      let section = `${heading}
      <p>${n} का उपयोग करना सीखना आसान है। नीचे विभिन्न परिदृश्यों के लिए कमांड दिए गए हैं:</p>`
      cmds.basic.forEach((cmd, i) => {
        const esc = cmd.cmd.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')
        section += `\n      <h3>${i + 1}. ${cmd.desc}</h3>
      <CodeBlock code={'${esc}'}/>
      <p>${cmd.desc}</p>`
      })
      content = content.slice(0, startIdx) + section + content.slice(nextH2Idx)
    }
  }

  // 3. Replace "Advanced Techniques" section
  if (cmds.advanced) {
    const heading = `<h2>${n} के साथ उन्नत तकनीकें</h2>`
    const startIdx = content.indexOf(heading)
    const nextH2Idx = content.indexOf('<h2>', startIdx + heading.length)
    if (startIdx >= 0 && nextH2Idx >= 0 && nextH2Idx > startIdx) {
      let section = `${heading}
      <p>उन्नत उपयोगकर्ता निम्नलिखित तकनीकों का लाभ उठा सकते हैं:</p>`
      cmds.advanced.forEach((cmd, i) => {
        const esc = cmd.cmd.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n')
        section += `\n      <h3>${i + 1}. ${cmd.desc}</h3>
      <CodeBlock code={'${esc}'}/>
      <p>${cmd.desc}</p>`
      })
      content = content.slice(0, startIdx) + section + content.slice(nextH2Idx)
    }
  }

  // 4. Replace automation script
  if (cmds.script) {
    const heading = `<h2>${n} के साथ ऑटोमेशन और स्क्रिप्टिंग</h2>`
    const startIdx = content.indexOf(heading)
    if (startIdx >= 0) {
      const codeBlockStart = content.indexOf('<CodeBlock', startIdx)
      const codeBlockEnd = content.indexOf('/>', codeBlockStart)
      if (codeBlockStart >= 0 && codeBlockEnd >= 0) {
        const cbEnd = codeBlockEnd + 2
        const escapedScript = cmds.script.replace(/\$/g, '\\$')
        const newCodeBlock = `      <CodeBlock code={${"`"}#!/bin/bash
# ${n} स्कैन ऑटोमेशन स्क्रिप्ट
${escapedScript}\`} />`
        content = content.slice(0, codeBlockStart) + newCodeBlock + content.slice(cbEnd)
      }
    }
  }

  if (content !== original) {
    writeFileSync(`src/pages/tools/${file}`, content, 'utf8')
    updated++
    console.log(`Updated ${toolName}`)
  }
}

console.log(`\nUpdated ${updated} tool files`)
