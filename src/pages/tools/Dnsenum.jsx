import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Dnsenum() {
  return (
    <TutorialLayout
      title="dnsenum"
      subtitle="DNS enumeration टूल — रिकॉर्ड्स, सबडोमेन्स, ज़ोन ट्रांसफर, ब्रूट फोर्स"
      icon="🌐"
      prev={{ to: '/tool/enum4linux', label: 'enum4linux' }}
      next={{ to: '/tool/theharvester', label: 'theharvester' }}
    >
      <h2>What is DNSenum?</h2>
      <p>
        DNSenum एक शक्तिशाली DNS enumeration टूल है जो किसी डोमेन की पूरी DNS जानकारी निकालता है। यह टूल A, AAAA, MX, NS, CNAME, TXT, SOA, PTR, SRV जैसी सभी DNS रिकॉर्ड्स ढूंढता है। सबडोमेन्स ब्रूट फोर्स करता है, ज़ोन ट्रांसफर ट्राई करता है, और Google से भी सबडोमेन्स स्क्रैप करता है। OSINT और रेकन फेज़ में यह टूल बहुत ज़रूरी है।
      </p>
      <p>
        DNSenum Perl में लिखा गया है और काली लिनक्स में प्री-इंस्टॉल्ड आता है। यह टूल DNS सर्वर से जितनी ज़्यादा हो सके उतनी जानकारी निकालने की कोशिश करता है। DNS enumeration पेनेट्रेशन टेस्टिंग का पहला कदम होता है — टार्गेट के बारे में जितना ज़्यादा पता होगा, उतना अच्छा हमला होगा। DNSenum यह सब काम एक ही टूल से कर देता है।
      </p>
      <p>
        DNSenum का सबसे बड़ा फ़ायदा यह है कि यह एक ही स्कैन में कई तरह की जानकारी देता है — बेसिक DNS रिकॉर्ड्स, सबडोमेन्स, ज़ोन ट्रांसफर, रिवर्स DNS, और Google स्क्रैपिंग। अलग-अलग टूल इस्तेमाल करने की ज़रूरत नहीं। पेनेट्रेशन टेस्टर्स और बग बाउंटी हंटर्स दोनों के लिए यह बहुत उपयोगी है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> DNSenum केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए उपयोग करें। बिना अनुमति के DNS enumeration करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत रेकन अपराध हो सकता है। केवल अपने लैब वातावरण या लिखित प्राधिकरण के साथ ही उपयोग करें।
      </div>

      <h2>History of DNSenum</h2>
      <p>
        DNSenum को मूल रूप से Fillippo Baccianti ने विकसित किया था। यह टूल Perl भाषा में लिखा गया है और ओपन सोर्स है। DNSenum का नाम "DNS Enumerator" से आया है — यह DNS की सभी जानकारी enumerate करता है। यह टूल 2006 से काली लिनक्स (पहले BackTrack) में शामिल है।
      </p>
      <p>
        DNSenum का डिज़ाइन दर्शन यह है कि एक ही टूल से DNS की पूरी जानकारी मिल जाए। अलग-अलग टूल इस्तेमाल करने में समय लगता है और रिजल्ट्स भी अलग-अलग मिलते हैं। DNSenum सब कुछ एक जगह देता है — यही इसकी सबसे बड़ी खासियत है। पेनेट्रेशन टेस्टिंग और रेकन के लिए यह आदर्श टूल है।
      </p>

      <h2>How DNSenum Works?</h2>
      <p>
        DNSenum DNS सर्वर से विभिन्न प्रकार के क्वेरीज़ भेजकर जानकारी एकत्र करता है। यह टूल कई चरणों में काम करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">DNS रिज़ॉल्यूशन:</strong> पहले डोमेन के बेसिक रिकॉर्ड्स निकालता है — A, MX, NS, CNAME, TXT, SOA</li>
        <li><strong className="text-white">ज़ोन ट्रांसफर:</strong> NS सर्वर्स पर AXFR क्वेरी भेजता है — अगर ज़ोन ट्रांसफर ओपन है तो सब रिकॉर्ड्स मिल जाएंगे</li>
        <li><strong className="text-white">सबडोमेन ब्रूट फोर्स:</strong> वर्डलिस्ट से सबडोमेन्स ट्राई करता है और रिज़ॉल्व होने वाले सबडोमेन्स ढूंढता है</li>
        <li><strong className="text-white">Google स्क्रैपिंग:</strong> Google सर्च से सबडोमेन्स ढूंढता है (Google dorking)</li>
        <li><strong className="text-white">रिवर्स DNS:</strong> IP रेंज से डोमेन नेम्स निकालता है</li>
        <li><strong className="text-white">बाइंड सर्वर वर्जन:</strong> DNS सर्वर का सॉफ़्टवेयर वर्जन पता करता है</li>
      </ul>
      <p>
        DNSenum का काम करने का तरीका यह है कि यह सबसे पहले टार्गेट डोमेन का NS रिकॉर्ड पता करता है। फिर उन NS सर्वर्स से बाकी रिकॉर्ड्स निकालता है। अगर NS सर्वर ज़ोन ट्रांसफर अलाउ करता है, तो सब कुछ मिल जाता है। नहीं तो ब्रूट फोर्स और Google स्क्रैपिंग से सबडोमेन्स ढूंढता है।
      </p>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर और काली लिनक्स में DNSenum प्री-इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो आसानी से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="DNSenum इंस्टॉलेशन"
        code={`# apt से इंस्टॉल:
sudo apt update
sudo apt install dnsenum

# Git से इंस्टॉल (नवीनतम वर्जन):
git clone https://github.com/fwaeytens/dnsenum.git
cd dnsenum
chmod +x dnsenum.pl
sudo cp dnsenum.pl /usr/local/bin/dnsenum

# Perl डिपेंडेंसी इंस्टॉल करें:
sudo cpan Net::DNS
sudo cpan Net::IP
sudo cpan Net::Netmask
sudo cpan String::Random
sudo cpan WWW::Mechanize
sudo cpan HTML::Parser

# वर्जन चेक:
dnsenum --version

# सहायता देखें:
dnsenum --help`}
      />

      <h2>Basic Usage</h2>
      <p>
        DNSenum का बेसिक इस्तेमाल बहुत आसान है — बस डोमेन नेम दो और टूल बाकी सब करेगा। यह सबसे पहले NS रिकॉर्ड्स ढूंढता है, फिर ज़ोन ट्रांसफर ट्राई करता है, फिर ब्रूट फोर्स करता है।
      </p>
      <CodeBlock
        title="DNSenum बेसिक स्कैन"
        code={`# फुल DNS स्कैन (सब कुछ):
dnsenum target.com

# वर्बोज़ आउटपुट:
dnsenum --enum target.com

# स्पेसिफिक DNS सर्वर इस्तेमाल करें:
dnsenum --dnsserver 8.8.8.8 target.com

# आउटपुट फाइल में सेव:
dnsenum target.com --enum -o output.xml

# सबडोमेन वर्डलिस्ट स्पेसिफाई:
dnsenum -f subdomains.txt target.com

# थ्रेड्स बढ़ाएं (तेज़ स्कैन):
dnsenum --threads 10 target.com`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--enum</td><td className="py-2 px-3">फुल enumeration मोड — सब कुछ स्कैन करता है</td><td className="py-2 px-3 font-mono text-xs">dnsenum --enum target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f</td><td className="py-2 px-3">कस्टम सबडोमेन वर्डलिस्ट फाइल</td><td className="py-2 px-3 font-mono text-xs">dnsenum -f wordlist.txt target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--dnsserver</td><td className="py-2 px-3">स्पेसिफिक DNS सर्वर इस्तेमाल करें</td><td className="py-2 px-3 font-mono text-xs">dnsenum --dnsserver 1.1.1.1 target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r</td><td className="py-2 px-3">रिकर्शन इनेबल — सबडोमेन्स के सबडोमेन्स</td><td className="py-2 px-3 font-mono text-xs">dnsenum -r target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o</td><td className="py-2 px-3">आउटपुट XML फाइल में सेव</td><td className="py-2 px-3 font-mono text-xs">dnsenum -o results.xml target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--threads</td><td className="py-2 px-3">थ्रेड्स की संख्या (डिफ़ॉल्ट 5)</td><td className="py-2 px-3 font-mono text-xs">dnsenum --threads 20 target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--noreverse</td><td className="py-2 px-3">रिवर्स DNS स्किप करें</td><td className="py-2 px-3 font-mono text-xs">dnsenum --noreverse target.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--scrap</td><td className="py-2 px-3">Google से सबडोमेन्स स्क्रैप करें</td><td className="py-2 px-3 font-mono text-xs">dnsenum --scrap 3 target.com</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">पेजेस स्क्रैप करें (डिफ़ॉल्ट 20)</td><td className="py-2 px-3 font-mono text-xs">dnsenum -p 50 target.com</td></tr>
          </tbody>
        </table>
      </div>

      <h2>DNS Record Types</h2>
      <p>
        DNSenum सभी प्रकार की DNS रिकॉर्ड्स ढूंढता है। हर रिकॉर्ड का अलग मतलब है और अलग जानकारी देती है:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">रिकॉर्ड</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या बताता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
              <th className="text-left py-2 px-3 text-neon-green">रेकन में उपयोग</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">A</td><td className="py-2 px-3">IPv4 एड्रेस</td><td className="py-2 px-3 font-mono text-xs">target.com → 1.2.3.4</td><td className="py-2 px-3">IP पता पता करना</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">AAAA</td><td className="py-2 px-3">IPv6 एड्रेस</td><td className="py-2 px-3 font-mono text-xs">target.com → 2001:db8::1</td><td className="py-2 px-3">IPv6 इंफ्रास्ट्रक्चर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">MX</td><td className="py-2 px-3">मेल सर्वर</td><td className="py-2 px-3 font-mono text-xs">mail.target.com</td><td className="py-2 px-3">ईमेल सर्वर ढूंढना, फ़िशिंग टार्गेट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">NS</td><td className="py-2 px-3">नेम सर्वर</td><td className="py-2 px-3 font-mono text-xs">ns1.target.com</td><td className="py-2 px-3">DNS सर्वर पता करना, ज़ोन ट्रांसफर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CNAME</td><td className="py-2 px-3">एलियास (दूसरे नाम का रेफरेंस)</td><td className="py-2 px-3 font-mono text-xs">www → target.com</td><td className="py-2 px-3">सबडोमेन्स और सर्विसेज़ ढूंढना</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">TXT</td><td className="py-2 px-3">टेक्स्ट रिकॉर्ड्स (SPF, DKIM, वेरिफिकेशन)</td><td className="py-2 px-3 font-mono text-xs">v=spf1 include:...</td><td className="py-2 px-3">ईमेल सिक्योरिटी, API keys, वेरिफिकेशन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SOA</td><td className="py-2 px-3">स्टार्ट ऑफ़ अथॉरिटी — प्राइमरी DNS सर्वर</td><td className="py-2 px-3 font-mono text-xs">ns1.target.com admin.target.com</td><td className="py-2 px-3">प्राइमरी DNS, एडमिन ईमेल, सीरियल नंबर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">PTR</td><td className="py-2 px-3">रिवर्स DNS — IP से डोमेन नेम</td><td className="py-2 px-3 font-mono text-xs">1.2.3.4 → host.target.com</td><td className="py-2 px-3">होस्टनेम पता करना</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">SRV</td><td className="py-2 px-3">सर्विस रिकॉर्ड्स (पोर्ट और प्रोटोकॉल)</td><td className="py-2 px-3 font-mono text-xs">_sip._tcp.target.com</td><td className="py-2 px-3">सर्विसेज़ और पोर्ट्स ढूंढना</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Subdomain Brute Force</h2>
      <p>
        सबडोमेन ब्रूट फोर्स DNSenum का सबसे पावरफुल फ़ीचर है। यह एक वर्डलिस्ट से सबडोमेन्स ट्राई करता है और रिज़ॉल्व होने वाले सबडोमेन्स ढूंढता है। जितनी बड़ी वर्डलिस्ट, उतने ज़्यादा सबडोमेन्स मिलेंगे।
      </p>
      <CodeBlock
        title="सबडोमेन ब्रूट फोर्स"
        code={`# बिल्ट-इन वर्डलिस्ट से सबडोमेन्स:
dnsenum --enum target.com

# कस्टम वर्डलिस्ट:
dnsenum -f /usr/share/wordlists/subdomains.txt target.com

# सेकंड-लेवल सबडोमेन्स (रिकर्शन):
dnsenum -r -f wordlist.txt target.com
# यह sub.domain.target.com भी ढूंढेगा

# बड़ी वर्डलिस्ट के साथ:
dnsenum -f /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt target.com

# तेज़ स्कैन (ज़्यादा थ्रेड्स):
dnsenum --threads 50 -f wordlist.txt target.com`}
      />
      <CodeBlock
        title="कस्टम वर्डलिस्ट बनाएं"
        code={`# बेसिक सबडोमेन वर्डलिस्ट:
cat > subs.txt << 'EOF'
www
mail
ftp
admin
dev
staging
api
vpn
remote
test
blog
shop
portal
app
beta
demo
cpanel
webmail
ns1
ns2
smtp
pop
imap
mx
cdn
static
media
img
images
docs
support
help
kb
wiki
forum
community
status
monitor
grafana
jenkins
gitlab
ci
cd
jira
confluence
EOF

# इस्तेमाल:
dnsenum -f subs.txt target.com`}
      />
      <p>
        ब्रूट फोर्स से मिलने वाले सबडोमेन्स बहुत उपयोगी होते हैं। अक्सर admin, staging, dev जैसे सबडोमेन्स कम सिक्योर होते हैं और अटैक का रास्ता खोल सकते हैं।
      </p>

      <h2>Zone Transfer Attack</h2>
      <p>
        ज़ोन ट्रांसफर (AXFR) DNS का सबसे बड़ा मिसकॉन्फ़िगरेशन है। अगर कोई NS सर्वर ज़ोन ट्रांसफर अलाउ करता है, तो उस डोमेन की सभी DNS रिकॉर्ड्स एक साथ मिल जाती हैं — सभी सबडोमेन्स, IP एड्रेसेज़, मेल सर्वर्स, सब कुछ। DNSenum ऑटोमैटिकली ज़ोन ट्रांसफर ट्राई करता है।
      </p>
      <CodeBlock
        title="ज़ोन ट्रांसफर टेस्ट"
        code={`# DNSenum ऑटोमैटिकली ज़ोन ट्रांसफर ट्राई करता है
dnsenum target.com

# मैनुअली ज़ोन ट्रांसफर टेस्ट:
dig axfr target.com @ns1.target.com

# अगर ज़ोन ट्रांसफर ओपन है:
# सभी सबडोमेन्स, IP एड्रेसेज़, मेल सर्वर्स मिल जाएंगे!

# हर NS सर्वर पर टेस्ट:
dig axfr target.com @ns1.target.com
dig axfr target.com @ns2.target.com
dig axfr target.com @ns3.target.com

# nslookup से टेस्ट:
nslookup
> server ns1.target.com
> set type=AXFR
> target.com

# host कमांड से:
host -l target.com ns1.target.com`}
      />
      <p>
        ज़ोन ट्रांसफर ओपन होना गंभीर सुरक्षा समस्या है। अगर मिल जाए तो समझो टार्गेट का पूरा DNS मैप मिल गया। पेनेट्रेशन टेस्ट में हमेशा चेक करना चाहिए।
      </p>

      <h2>Reverse DNS Lookup</h2>
      <p>
        रिवर्स DNS से IP एड्रेस से डोमेन नेम पता चलता है। DNSenum ऑटोमैटिकली रिवर्स DNS करता है NS सर्वर्स के IP एड्रेसेज़ पर। इससे पता चलता है कि उस IP पर और कौन से डोमेन्स होस्ट हो रहे हैं।
      </p>
      <CodeBlock
        title="रिवर्स DNS"
        code={`# DNSenum ऑटोमैटिकली रिवर्स DNS करता है
dnsenum --enum target.com

# मैनुअली रिवर्स DNS:
dig -x 1.2.3.4
nslookup 1.2.3.4
host 1.2.3.4

# रिवर्स DNS स्किप करें (तेज़ स्कैन):
dnsenum --noreverse target.com

# पूरी IP रेंज पर रिवर्स DNS:
# पहले IP रेंज पता करो (A रिकॉर्ड्स से)
# फिर हर IP पर रिवर्स DNS करो
for ip in $(seq 1 254); do
  dig -x 192.168.1.$ip +short
done`}
      />

      <h2>Google Scraping</h2>
      <p>
        DNSenum Google सर्च से भी सबडोमेन्स स्क्रैप कर सकता है। यह Google dorking तकनीक इस्तेमाल करता है — "site:target.com" सर्च करके सबडोमेन्स ढूंढता है। यह पैसिव तरीका है — टार्गेट को कोई रिक्वेस्ट नहीं जाती।
      </p>
      <CodeBlock
        title="Google स्क्रैपिंग"
        code={`# Google स्क्रैपिंग इनेबल (डिफ़ॉल्ट 20 पेजेस):
dnsenum --enum target.com

# ज़्यादा पेजेस स्क्रैप करें:
dnsenum -p 50 target.com

# सिर्फ Google स्क्रैपिंग (ब्रूट फोर्स नहीं):
dnsenum --scrap 3 target.com

# Google स्क्रैपिंग कैसे काम करता है:
# 1. "site:target.com" सर्च करता है
# 2. रिजल्ट्स में से सबडोमेन्स एक्सट्रैक्ट करता है
# 3. अगले पेज पर जाता है (pagination)
# 4. सभी यूनिक सबडोमेन्स कलेक्ट करता है

# ध्यान दें: Google rate limiting लगा सकता है
# ज़्यादा पेजेस स्क्रैप करने पर CAPTCHA आ सकता है`}
      />

      <h2>Detailed Scan Example</h2>
      <p>
        एक कंप्लीट DNS enum स्कैन कैसे चलाएं — स्टेप बाय स्टेप:
      </p>
      <CodeBlock
        title="कंप्लीट DNS स्कैन"
        code={`# स्टेप 1: बेसिक DNS रिकॉर्ड्स
dnsenum target.com

# स्टेप 2: कस्टम वर्डलिस्ट के साथ
dnsenum -f /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt target.com

# स्टेप 3: रिकर्शन के साथ (सबडोमेन्स के सबडोमेन्स)
dnsenum -r -f wordlist.txt target.com

# स्टेप 4: Google स्क्रैपिंग के साथ
dnsenum -p 100 target.com

# स्टेप 5: आउटपुट सेव करें
dnsenum --enum -o results.xml target.com

# स्टेप 6: रिजल्ट्स एनालाइज़ करें
cat results.xml | grep "A" | sort -u
cat results.xml | grep "MX" | sort -u

# वन-लाइनर कंप्लीट स्कैन:
dnsenum --enum -f wordlist.txt -o results.xml --threads 20 target.com`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        DNSenum को स्क्रिप्ट में इस्तेमाल करके DNS enumeration ऑटोमेट कर सकते हो। बड़े पैमाने पर रेकन के लिए स्क्रिप्टिंग ज़रूरी है।
      </p>
      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट"
        code={`#!/bin/bash
# DNSenum ऑटोमेशन स्क्रिप्ट
# कई डोमेन्स का DNS enum करता है

DOMAINS_FILE="domains.txt"
OUTPUT_DIR="dnsenum_results"
WORDLIST="/usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt"

mkdir -p $OUTPUT_DIR

while read domain; do
    echo "[*] स्कैन हो रहा है: $domain"

    # DNSenum चलाएं:
    dnsenum --enum -f $WORDLIST -o "$OUTPUT_DIR/$domain.xml" --threads 10 $domain

    # रिजल्ट्स एक्सट्रैक्ट करें:
    grep "A" "$OUTPUT_DIR/$domain.xml" | sort -u > "$OUTPUT_DIR/$domain-A.txt"
    grep "MX" "$OUTPUT_DIR/$domain.xml" | sort -u > "$OUTPUT_DIR/$domain-MX.txt"

    echo "[+] $domain पूरा हुआ"
    sleep 5  # रेट लिमिटिंग से बचें
done < $DOMAINS_FILE

echo "[*] सभी डोमेन्स पूरे हुए!"
echo "[*] रिजल्ट्स: $OUTPUT_DIR/ में हैं"`}
      />
      <CodeBlock
        title="सबडोमेन एग्रीगेटर"
        code={`#!/bin/bash
# कई टूल्स से सबडोमेन्स कलेक्ट करें
DOMAIN=$1

echo "[*] $domain के लिए सबडोमेन्स कलेक्ट हो रहे हैं..."

# DNSenum से:
echo "[+] DNSenum चल रहा है..."
dnsenum --enum $DOMAIN 2>/dev/null | grep -E "^[a-zA-Z]" | sort -u > dnsenum_subs.txt

# dig से:
echo "[+] dig चल रहा है..."
for sub in www mail ftp admin dev staging api; do
    dig +short $sub.$DOMAIN >> dig_subs.txt
done

# सभी रिजल्ट्स मिलाएं:
cat dnsenum_subs.txt dig_subs.txt 2>/dev/null | sort -u > all_subs.txt

echo "[+] कुल सबडोमेन्स मिले: $(wc -l < all_subs.txt)"
cat all_subs.txt`}
      />

      <h2>Comparison with Other Tools</h2>
      <p>
        DNS enumeration के लिए कई टूल्स हैं। हर टूल का अपना फ़ायदा है:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">टूल</th>
              <th className="text-left py-2 px-3 text-neon-green">भाषा</th>
              <th className="text-left py-2 px-3 text-neon-green">फ़ायदा</th>
              <th className="text-left py-2 px-3 text-neon-green">नुकसान</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DNSenum</td><td className="py-2 px-3">Perl</td><td className="py-2 px-3">ऑल-इन-वन, ज़ोन ट्रांसफर, Google स्क्रैपिंग</td><td className="py-2 px-3">पुराना प्रोजेक्ट, धीमा हो सकता है</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DNSRecon</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">ज़्यादा फ़ीचर्स, कैश सपोर्ट</td><td className="py-2 px-3">ज़्यादा डिपेंडेंसीज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Fierce</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">तेज़, सिंपल</td><td className="py-2 px-3">कम फ़ीचर्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Subfinder</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">पैसिव, 30+ सोर्सेज़, बहुत तेज़</td><td className="py-2 px-3">सिर्फ सबडोमेन्स, DNS रिकॉर्ड्स नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Amass</td><td className="py-2 px-3">Go</td><td className="py-2 px-3">OWASP, 50+ सोर्सेज़, एक्टिव+पैसिव</td><td className="py-2 px-3">भारी, सेटअप ज़्यादा</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>

      <h3>Problem 1: No Results from Zone Transfer</h3>
      <p>
        ज़ोन ट्रांसफर अक्सर बंद होता है — यह नॉर्मल है। ज़्यादातर DNS सर्वर्स ज़ोन ट्रांसफर अलाउ नहीं करते।
      </p>
      <CodeBlock
        title="ज़ोन ट्रांसफर समाधान"
        code={`# अगर ज़ोन ट्रांसफर काम नहीं करे:
# 1. ब्रूट फोर्स इस्तेमाल करो
dnsenum -f wordlist.txt target.com

# 2. Google स्क्रैपिंग करो
dnsenum -p 50 target.com

# 3. दूसरे टूल्स ट्राई करो
dnsrecon -d target.com
subfinder -d target.com

# 4. Certificate Transparency चेक करो
curl -s "https://crt.sh/?q=%25.target.com&output=json" | jq .`}
      />

      <h3>Problem 2: Slow Scanning</h3>
      <CodeBlock
        title="स्पीड ऑप्टिमाइज़ेशन"
        code={`# थ्रेड्स बढ़ाओ:
dnsenum --threads 50 target.com

# रिवर्स DNS स्किप करो:
dnsenum --noreverse target.com

# छोटी वर्डलिस्ट इस्तेमाल करो:
# पहले कॉमन सबडोमेन्स ट्राई करो
dnsenum -f common_subs.txt target.com

# स्पेसिफिक DNS सर्वर इस्तेमाल करो (तेज़):
dnsenum --dnsserver 8.8.8.8 target.com`}
      />

      <h3>Problem 3: Perl Module Errors</h3>
      <CodeBlock
        title="Perl डिपेंडेंसी समाधान"
        code={`# एरर: "Can't locate Net/DNS.pm"
sudo cpan Net::DNS

# सभी डिपेंडेंसी एक साथ:
sudo cpan Net::DNS Net::IP Net::Netmask String::Random WWW::Mechanize

# या apt से:
sudo apt install libnet-dns-perl libnet-ip-perl libnet-netmask-perl

# CPAN अपडेट करें:
sudo cpan -u`}
      />

      <h3>Problem 4: No Subdomains Found</h3>
      <CodeBlock
        title="सबडोमेन समाधान"
        code={`# बड़ी वर्डलिस्ट इस्तेमाल करो:
dnsenum -f /usr/share/seclists/Discovery/DNS/subdomains-top1million-50000.txt target.com

# दूसरे टूल्स कॉम्बाइन करो:
dnsenum --enum target.com > dnsenum.txt
subfinder -d target.com > subfinder.txt
amass enum -passive -d target.com > amass.txt
cat dnsenum.txt subfinder.txt amass.txt | sort -u > all_subs.txt

# Certificate Transparency चेक करो:
curl -s "https://crt.sh/?q=%25.target.com&output=json" | jq -r '.[].name_value' | sort -u`}
      />

      <h3>Problem 5: Timeout Errors</h3>
      <CodeBlock
        title="टाइमआउट समाधान"
        code={`# DNS सर्वर बदलो:
dnsenum --dnsserver 1.1.1.1 target.com
dnsenum --dnsserver 8.8.8.8 target.com

# थ्रेड्स कम करो:
dnsenum --threads 5 target.com

# नेटवर्क कनेक्टिविटी चेक करो:
ping 8.8.8.8
dig @8.8.8.8 target.com`}
      />

      <h2>Detection and Defense</h2>
      <p>
        अगर आप नेटवर्क प्रशासक हो, तो DNSenum के स्कैन को कैसे पहचानोगे और रोकोगे:
      </p>

      <h3>DNS Enumeration Detection</h3>
      <CodeBlock
        title="DNS स्कैन पहचान"
        code={`# DNS क्वेरी लॉग चेक करें:
tail -f /var/log/syslog | grep "named"

# बहुत सारी क्वेरीज़ आ रही हैं — स्कैन हो रहा है:
# "query: subdomain.target.com" बार-बार दिखेगा

# fail2ban से DNS स्कैनर्स ब्लॉक करें:
# /etc/fail2ban/jail.local में जोड़ो:
# [dnsenum]
# enabled = true
# filter = dnsenum
# logpath = /var/log/syslog
# maxretry = 100
# bantime = 3600

# DNS रेट लिमिटिंग:
# BIND में rate-limit सेट करें
# options {
#     rate-limit {
#         responses-per-second 10;
#     };
# };`}
      />

      <h3>DNS Hardening</h3>
      <CodeBlock
        title="DNS सुरक्षा"
        code={`# 1. ज़ोन ट्रांसफर बंद करें:
# BIND named.conf में:
# options {
#     allow-transfer { none; };
# };

# 2. सिर्फ ट्रस्टेड IP से ज़ोन ट्रांसफर:
# allow-transfer { 10.0.0.2; 10.0.0.3; };

# 3. DNSSEC इनेबल करें:
# डिजिटल सिग्नेचर से DNS रिकॉर्ड्स वेरिफाई होती हैं

# 4. रिकर्सिव क्वेरीज़ लिमिट करें:
# options {
#     allow-recursion { trusted-networks; };
# };

# 5. DNS लॉगिंग इनेबल करें:
# logging {
#     channel default_log {
#         file "/var/log/named/queries.log";
#         severity info;
#     };
# };

# 6. Response Rate Limiting (RRL):
# options {
#     rate-limit {
#         responses-per-second 5;
#         window 5;
#     };
# };`}
      />

      <h2>Lab Environment Setup</h2>
      <p>
        DNSenum अभ्यास के लिए लैब वातावरण सेटअप करो। वास्तविक डोमेन्स पर बिना अनुमति के कभी स्कैन मत करो।
      </p>
      <CodeBlock
        title="लोकल DNS लैब"
        code={`# VirtualBox में लैब सेटअप:

# VM 1: DNS सर्वर (Ubuntu + BIND9)
sudo apt install bind9 bind9utils
# BIND9 कॉन्फ़िगर करें — टार्गेट डोमेन बनाएं

# VM 2: अटैकर (Kali Linux)
sudo apt install dnsenum
# DNSenum से VM 1 को स्कैन करें

# लोकल DNS ज़ोन फाइल बनाएं:
# /etc/bind/zones/db.target.local
# $TTL 604800
# @   IN  SOA ns1.target.local. admin.target.local. (
#         2024010101 ; Serial
#         604800     ; Refresh
#         86400      ; Retry
#         2419200    ; Expire
#         604800 )   ; Negative Cache
# ;
# @       IN  NS      ns1.target.local.
# @       IN  A       192.168.1.10
# ns1     IN  A       192.168.1.10
# www     IN  A       192.168.1.20
# mail    IN  A       192.168.1.30
# ftp     IN  A       192.168.1.40
# admin   IN  A       192.168.1.50

# DNSenum से स्कैन करें:
dnsenum --enum target.local`}
      />

      <h2>Advanced Techniques</h2>

      <h3>DNS Cache Snooping</h3>
      <p>
        DNS कैश स्नूपिंग से पता चलता है कि किसी DNS सर्वर ने हाल में कौन से डोमेन्स रिज़ॉल्व किए हैं। यह बताता है कि यूज़र्स कौन सी वेबसाइट्स विज़िट कर रहे हैं।
      </p>
      <CodeBlock
        title="DNS कैश स्नूपिंग"
        code={`# नॉन-रिकर्सिव क्वेरी (कैश चेक):
dig @dns-server.com target.com +norecurse

# अगर आंसर मिले — कैश में है (हाल में विज़िट किया)
# अगर आंसर न मिले — कैश में नहीं है

# कॉमन साइट्स चेक करें:
for site in google.com facebook.com twitter.com; do
    result=$(dig @dns-server.com $site +norecurse +short)
    if [ -n "$result" ]; then
        echo "[+] $site — कैश में है (हाल में विज़िट)"
    fi
done`}
      />

      <h3>DNS Rebinding Attack</h3>
      <p>
        DNS rebinding से फ़ायरवॉल के पीछे के इंटरनल सर्वर्स एक्सेस कर सकते हो। यह टेक्निक DNS रिकॉर्ड्स की TTL का फ़ायदा उठाती है।
      </p>
      <CodeBlock
        title="DNS rebinding कॉन्सेप्ट"
        code={`# DNS rebinding कैसे काम करता है:

# 1. अटैकर का DNS सर्वर रिज़ॉल्व करता है:
#    evil.com → 1.2.3.4 (अटैकर का सर्वर) [TTL: 0]

# 2. ब्राउज़र evil.com लोड करता है — अटैकर के सर्वर से

# 3. JavaScript फिर से evil.com रिज़ॉल्व करता है:
#    evil.com → 192.168.1.1 (इंटरनल सर्वर)

# 4. ब्राउज़र अब 192.168.1.1 से कनेक्ट होता है!
#    फ़ायरवॉल बायपास हो गया

# बचाव:
# DNS pinning, hostname validation, firewall rules`}
      />

      <h3>Passive DNS Monitoring</h3>
      <CodeBlock
        title="पैसिव DNS मॉनिटरिंग"
        code={`# tcpdump से DNS ट्रैफ़िक कैप्चर:
tcpdump -i eth0 port 53 -w dns_traffic.pcap

# tshark से DNS क्वेरीज़ एनालाइज़ करें:
tshark -r dns_traffic.pcap -Y "dns.qry.name" -T fields -e dns.qry.name

# DNS ट्रैफ़िक से इन्फॉर्मेशन:
# - कौन से डोमेन्स रिज़ॉल्व हो रहे हैं
# - कौन से DNS सर्वर्स इस्तेमाल हो रहे हैं
# - DNS टनलिंग के संकेत
# - मैलवेयर C2 कम्युनिकेशन`}
      />

      <h2>Frequently Asked Questions</h2>

      <h3>क्या DNSenum कानूनी है?</h3>
      <p>
        टूल कानूनी है, लेकिन बिना अनुमति के इस्तेमाल करना अवैध हो सकता है। DNS enumeration को कुछ देशों में रेकन माना जाता है जो बिना अनुमति के अपराध है। केवल अधिकृत टेस्टिंग में इस्तेमाल करें।
      </p>

      <h3>क्या DNSenum से ज़ोन ट्रांसफर हमेशा मिलेगा?</h3>
      <p>
        नहीं, ज़्यादातर DNS सर्वर्स ज़ोन ट्रांसफर बंद रखते हैं। अगर ज़ोन ट्रांसफर न मिले तो ब्रूट फोर्स और Google स्क्रैपिंग इस्तेमाल करो। यह नॉर्मल है — हर DNS सर्वर ज़ोन ट्रांसफर अलाउ नहीं करता।
      </p>

      <h3>DNSenum और DNSRecon में क्या फ़र्क है?</h3>
      <p>
        DNSenum Perl में है, DNSRecon Python में। DNSRecon में ज़्यादा फ़ीचर्स हैं जैसे कैश सपोर्ट, WHOIS लुकअप, और बेहतर आउटपुट। लेकिन DNSenum सिंपल और हल्का है — जल्दी स्कैन के लिए अच्छा है।
      </p>

      <h3>सबसे अच्छा DNS enumeration टूल कौन सा है?</h3>
      <p>
        कोई एक टूल सबसे अच्छा नहीं है। सबसे अच्छा तरीका है कई टूल्स कॉम्बाइन करो — DNSenum + Subfinder + Amass + DNSRecon। हर टूल अलग सोर्स से जानकारी निकालता है। सभी के रिजल्ट्स मिलाकर कंप्लीट लिस्ट मिलती है।
      </p>

      <h3>क्या DNSenum Windows पर चलता है?</h3>
      <p>
        DNSenum Perl में है इसलिए थ्योरेटिकली Windows पर चल सकता है। लेकिन काली लिनक्स में सब कुछ प्री-कॉन्फ़िगर्ड आता है। Windows पर इस्तेमाल करने के लिए WSL या VM में काली लिनक्स इंस्टॉल करो।
      </p>

      <h3>Google स्क्रैपिंग क्यों काम नहीं कर रही?</h3>
      <p>
        Google rate limiting लगाता है — बहुत ज़्यादा रिक्वेस्ट्स पर CAPTCHA आ जाता है। कम पेजेस स्क्रैप करो (-p 10), या VPN/प्रॉक्सी इस्तेमाल करो। या फिर Certificate Transparency लॉग्स इस्तेमाल करो — crt.sh से।
      </p>

      <h2>Real-World Case Studies</h2>
      <p>
        DNSenum real-world penetration tests और bug bounty programs में बहुत effectively इस्तेमाल होता है। यहाँ कुछ practical scenarios हैं।
      </p>
      <p>
        एक common scenario है corporate network reconnaissance। Penetration tester को company.com domain मिलता है। DNSenum चलाने पर zone transfer open मिलता है ns2.company.com पर। एक ही query में सभी internal subdomains मिल जाते हैं — vpn.company.com, intranet.company.com, jenkins.company.com, staging.company.com। ये सब hidden services हैं जो public DNS में नहीं हैं, लेकिन zone transfer से exposed हो गए।
      </p>
      <p>
        Bug bounty program में DNSenum + crt.sh combo से subdomain takeover vulnerability मिलती है। DNSenum से blog.target.com मिलता है जो CNAME record target.github.io point करता है। लेकिन GitHub Pages पर यह repository delete हो चुकी है। Attacker यह repository claim करके subdomain takeover कर सकता है। यह critical vulnerability है जो DNS enumeration से ही मिलती है।
      </p>
      <p>
        Red team engagement में DNSenum से internal infrastructure map बनता है। mail.target.com से email server, autodiscover.target.com से Exchange server, _ldap._tcp.target.com से Active Directory domain controllers का पता चलता है। SRV records से internal services enumerate होती हैं जो direct scanning से नहीं मिलतीं।
      </p>

      <h2>Performance Tuning</h2>
      <p>
        बड़े पैमाने पर DNS enumeration करते समय परफॉर्मेंस ऑप्टिमाइज़ेशन ज़रूरी है। सही सेटिंग्स से स्कैन टाइम काफ़ी कम हो सकता है।
      </p>
      <CodeBlock
        title="परफॉर्मेंस ऑप्टिमाइज़ेशन"
        code={`# थ्रेड्स बढ़ाओ (सबसे आसान ऑप्टिमाइज़ेशन):
dnsenum --threads 50 target.com

# DNS कैशिंग सर्वर इस्तेमाल करो (तेज़ रिज़ॉल्यूशन):
dnsenum --dnsserver 1.1.1.1 target.com

# रिवर्स DNS स्किप करो (अगर ज़रूरी नहीं):
dnsenum --noreverse target.com

# छोटी वर्डलिस्ट से शुरू करो, फिर बड़ी:
dnsenum -f common_subs.txt target.com
# पहले results आएं, फिर बड़ी वर्डलिस्ट:
dnsenum -f /usr/share/seclists/Discovery/DNS/subdomains-top1million-50000.txt target.com

# Google स्क्रैपिंग कम करो (rate limiting):
dnsenum -p 10 target.com

# सिर्फ ब्रूट फोर्स (Google skip):
dnsenum -f wordlist.txt --noreverse --nogoogle target.com

# नेटवर्क लेटेंसी कम करो:
# पास का DNS सर्वर use करो
dnsenum --dnsserver 192.168.1.1 target.com`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        DNSenum के रिजल्ट्स को पार्स करके रिपोर्ट बनाना penetration testing का ज़रूरी हिस्सा है। XML आउटपुट को अलग-अलग फॉर्मेट्स में कन्वर्ट कर सकते हो।
      </p>
      <CodeBlock
        title="रिपोर्ट जनरेशन"
        code={`# XML आउटपुट सेव करो:
dnsenum --enum -o results.xml target.com

# A रिकॉर्ड्स एक्सट्रैक्ट:
grep "A" results.xml | sort -u > a_records.txt

# MX रिकॉर्ड्स:
grep "MX" results.xml | sort -u > mx_records.txt

# NS रिकॉर्ड्स:
grep "NS" results.xml | sort -u > ns_records.txt

# सबडोमेन्स लिस्ट:
grep -oP 'name="[^"]+' results.xml | cut -d'"' -f2 | sort -u > subdomains.txt

# HTML रिपोर्ट बनाओ:
cat > report.html << 'EOF'
<html><head><title>DNSenum Report</title></head><body>
<h1>DNS Enumeration Report - target.com</h1>
<h2>A Records</h2>
<pre>$(cat a_records.txt)</pre>
<h2>MX Records</h2>
<pre>$(cat mx_records.txt)</pre>
<h2>Subdomains</h2>
<pre>$(cat subdomains.txt)</pre>
</body></html>
EOF

# JSON में कन्वर्ट (Python):
python3 -c "
import xml.etree.ElementTree as ET
import json
tree = ET.parse('results.xml')
root = tree.getroot()
data = []
for elem in root.iter():
    data.append({'tag': elem.tag, 'attrib': elem.attrib})
print(json.dumps(data, indent=2))
" > results.json`}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        DNSenum को दूसरे टूल्स के साथ combine करके comprehensive reconnaissance pipeline बना सकते हो।
      </p>
      <CodeBlock
        title="Nmap + DNSenum Combo"
        code={`# DNSenum से IPs निकालो, Nmap से स्कैन करो:
dnsenum --enum target.com -o dns_results.xml
grep "A" dns_results.xml | grep -oP '\\d+\\.\\d+\\.\\d+\\.\\d+' | sort -u > ips.txt
nmap -sV -sC -iL ips.txt -oA nmap_results

# सिर्फ live hosts चेक करो:
nmap -sn -iL ips.txt -oG live_hosts.grep
grep "Up" live_hosts.grep | awk '{print $2}' > live_ips.txt`}
      />
      <CodeBlock
        title="Subfinder + Amass + DNSenum Pipeline"
        code={`#!/bin/bash
# तीनों टूल्स combine करो — maximum coverage
DOMAIN=$1

echo "[*] $domain के लिए comprehensive DNS enum..."

# DNSenum:
dnsenum --enum $DOMAIN -o dnsenum.xml 2>/dev/null
grep -oP 'name="[^"]+' dnsenum.xml | cut -d'"' -f2 | sort -u > dnsenum_subs.txt

# Subfinder (पैसिव):
subfinder -d $DOMAIN -silent > subfinder_subs.txt

# Amass (एक्टिव+पैसिव):
amass enum -passive -d $DOMAIN > amass_subs.txt

# सब मिलाओ:
cat dnsenum_subs.txt subfinder_subs.txt amass_subs.txt | sort -u > all_subdomains.txt

# HTTP probe करो (कौन से live हैं):
cat all_subdomains.txt | httpx -silent > live_subdomains.txt

echo "[+] कुल सबडोमेन्स: $(wc -l < all_subdomains.txt)"
echo "[+] लाइव सबडोमेन्स: $(wc -l < live_subdomains.txt)"
cat live_subdomains.txt`}
      />
      <CodeBlock
        title="Metasploit Integration"
        code={`# Metasploit में DNSenum results import करो:
# पहले DNSenum चलाओ:
dnsenum --enum target.com -o results.xml

# IPs एक्सट्रैक्ट करो:
grep "A" results.xml | grep -oP '\\d+\\.\\d+\\.\\d+\\.\\d+' | sort -u > targets.txt

# Metasploit में:
msfconsole -q
use auxiliary/scanner/portscan/tcp
set RHOSTS file:targets.txt
set THREADS 20
run`}
      />

      <h2>Wildcard DNS Detection</h2>
      <p>
        कुछ डोमेन्स में wildcard DNS records होते हैं — *.target.com resolve हो जाता है। इससे ब्रूट फोर्स रिजल्ट्स में false positives आते हैं। DNSenum से पहले wildcard check करो।
      </p>
      <CodeBlock
        title="Wildcard DNS Check"
        code={`# रैंडम सबडोमेन चेक करो:
dig definitelynotreal12345.target.com +short

# अगर IP मिले — wildcard DNS है!
# अगर NXDOMAIN मिले — wildcard नहीं है

# DNSenum में wildcard handling:
# DNSenum automatically wildcard detect नहीं करता
# मैनुअली check करो:

RANDOM_SUB=$(cat /dev/urandom | tr -dc 'a-z' | fold -w 12 | head -1)
RESULT=$(dig +short $RANDOM_SUB.target.com)

if [ -n "$RESULT" ]; then
    echo "[!] Wildcard DNS detected: $RANDOM_SUB.target.com → $RESULT"
    echo "[!] ब्रूट फोर्स रिजल्ट्स में false positives होंगे"
else
    echo "[+] No wildcard DNS detected"
fi

# वर्कअराउंड: सिर्फ unique IPs रखो
# ब्रूट फोर्स के बाद wildcard IP को फ़िल्टर करो`}
      />

      <h2>Passive DNS Intelligence</h2>
      <p>
        DNSenum active enumeration करता है, लेकिन passive sources से भी DNS intelligence मिल सकती है बिना टार्गेट को कोई रिक्वेस्ट भेजे।
      </p>
      <CodeBlock
        title="Passive DNS Sources"
        code={`# crt.sh — Certificate Transparency:
curl -s "https://crt.sh/?q=%25.target.com&output=json" | jq -r '.[].name_value' | sort -u

# VirusTotal (API key चाहिए):
curl -s "https://www.virustotal.com/api/v3/domains/target.com/subdomains" \\
  -H "x-apikey: YOUR_API_KEY" | jq -r '.data[].id'

# SecurityTrails:
curl -s "https://api.securitytrails.com/v1/domain/target.com/subdomains" \\
  -H "APIKEY: YOUR_API_KEY" | jq -r '.subdomains[]'

# Shodan DNS:
curl -s "https://api.shodan.io/dns/domain/target.com?key=YOUR_API_KEY" | jq -r '.subdomains[]'

# Wayback Machine से subdomains:
curl -s "http://web.archive.org/cdx/search/cdx?url=*.target.com/*&output=text&fl=original&collapse=urlkey" | sort -u

# DNSDumpster (web-based):
# https://dnsdumpster.com/ — manual check करो`}
      />

      <h2>DNSSEC Analysis</h2>
      <p>
        DNSSEC (DNS Security Extensions) DNS रिकॉर्ड्स को digitally sign करता है। DNSenum DNSSEC को directly verify नहीं करता, लेकिन DNSSEC status check करना important है — unsigned zones spoofing के लिए vulnerable हैं।
      </p>
      <CodeBlock
        title="DNSSEC Verification"
        code={`# DNSSEC check करो:
dig +dnssec target.com

# DS record check (parent zone signature):
dig DS target.com

# DNSKEY check (zone signing key):
dig DNSKEY target.com

# RRSIG check (record signature):
dig +dnssec A target.com

# अगर DNSSEC नहीं है:
# - DNS spoofing possible है
# - Cache poisoning attack vector
# - Report में mention करो

# DNSSEC validation:
delv @8.8.8.8 target.com`}
      />

      <h2>Alternatives to DNSenum</h2>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">DNSRecon:</strong> Python-based, ज़्यादा फ़ीचर्स, कैश सपोर्ट, WHOIS लुकअप</li>
        <li><strong className="text-white">Fierce:</strong> तेज़ और सिंपल DNS enumeration</li>
        <li><strong className="text-white">Subfinder:</strong> पैसिव सबडोमेन डिस्कवरी, 30+ सोर्सेज़</li>
        <li><strong className="text-white">Amass:</strong> OWASP टूल, 50+ सोर्सेज़, एक्टिव+पैसिव</li>
        <li><strong className="text-white">Knockpy:</strong> Python-based सबडोमेन ब्रूट फोर्स</li>
        <li><strong className="text-white">MassDNS:</strong> हाई-परफॉर्मेंस DNS रिज़ॉल्वर</li>
        <li><strong className="text-white">dig:</strong> बिल्ट-इन DNS टूल, मैनुअल क्वेरीज़ के लिए</li>
        <li><strong className="text-white">crt.sh:</strong> Certificate Transparency से सबडोमेन्स</li>
      </ul>

      <div className="info-box mt-6">
        <strong>💡 प्रो टिप्स:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>DNSenum + Subfinder + Amass कॉम्बो सबसे ज़्यादा सबडोमेन्स ढूंढता है</li>
          <li>ज़ोन ट्रांसफर हमेशा ट्राई करो — अगर मिल जाए तो पूरा DNS मैप मिल जाता है</li>
          <li>बड़ी वर्डलिस्ट इस्तेमाल करो — Seclists की वर्डलिस्ट सबसे अच्छी है</li>
          <li>रिवर्स DNS से और सबडोमेन्स मिल सकते हैं — स्किप मत करो</li>
          <li>Google स्क्रैपिंग रेट लिमिटिंग का शिकार हो सकती है — crt.sh बेहतर है</li>
          <li>आउटपुट XML में सेव करो — बाद में पार्स करना आसान होता है</li>
          <li>थ्रेड्स बढ़ाओ तेज़ स्कैन के लिए — लेकिन DNS सर्वर पर लोड ध्यान रखो</li>
          <li>रेकन फेज़ में DNSenum पहले चलाओ — बाकी टूल्स के लिए टार्गेट लिस्ट मिल जाएगी</li>
          <li>Zone transfer मिले तो तुरंत report करो — यह critical misconfiguration है</li>
          <li>SRV records check करो — internal services और domain controllers का पता चलता है</li>
          <li>TXT records में SPF, DKIM, DMARC check करो — email security assessment के लिए</li>
          <li>SOA record से primary DNS admin का email मिलता है — social engineering के लिए useful</li>
          <li>Recursive DNS servers ढूंढो — DNS amplification attack vector हो सकता है</li>
          <li>Wildcard DNS records check करो — *.target.com resolve हो रहा है तो brute force results false positives होंगे</li>
          <li>DNSenum output को Nmap input के लिए use करो — मिले हुए IPs पर port scan करो</li>
          <li>Passive sources (crt.sh, VirusTotal) पहले try करो — active enumeration बाद में करो</li>
          <li>SOA record check करो — primary DNS server admin email social engineering के लिए useful है</li>
          <li>DNSenum को Metasploit के साथ integrate करो — IPs को msfconsole में import करो</li>
          <li>Recursive DNS servers ढूंढो — open resolvers DNS amplification attacks के लिए vulnerable होते हैं</li>
        </ul>
      </div>

      <div className="warning-box mt-4">
        <strong>⚠️ अंतिम चेतावनी:</strong> DNS enumeration से टार्गेट के बारे में बहुत कुछ पता चल सकता है — सबडोमेन्स, IP एड्रेसेज़, मेल सर्वर्स, सर्विसेज़। यह जानकारी अटैकर्स के लिए बहुत कीमती है। इसलिए DNS enumeration केवल अधिकृत टेस्टिंग में ही करें। बिना अनुमति के DNS enumeration अवैध है और भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत दंडनीय है। हमेशा लिखित अनुमति लें और केवल शैक्षिक उद्देश्यों के लिए ही इस टूल का उपयोग करें।
      </div>
    </TutorialLayout>
  )
}
