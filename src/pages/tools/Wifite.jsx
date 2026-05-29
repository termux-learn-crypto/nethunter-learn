import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Wifite() {
  return (
    <TutorialLayout
      title="wifite"
      subtitle="ऑटोमेटेड वाईफाई अटैक टूल — एक कमांड में सब कुछ"
      icon="📶"
      prev={{ to: '/tool/binwalk', label: 'binwalk' }}
      next={{ to: '/tool/wpscan', label: 'wpscan' }}
    >
      <h2>What is Wifite?</h2>
      <p>
        Wifite एक ऑटोमेटेड वाईफाई अटैक टूल है जो सभी अटैक मेथड्स को एक साथ ऑटोमैटिकली ट्राई करता है। यह WPS PIN अटैक, PMKID कैप्चर, WPA/WPA2 हैंडशेप कैप्चर, WEP क्रैक — सब कुछ एक कमांड में करता है। बिगिनर्स के लिए यह सबसे अच्छा टूल है क्योंकि मैनुअली aircrack-ng, reaver, bully, hcxdumptool अलग-अलग चलाने की ज़रूरत नहीं पड़ती।
      </p>
      <p>
        Wifite को derv82 ने 2011 में बनाया था। यह Python में लिखा गया है और इंटरनली कई टूल्स का रैपर है — aircrack-ng, reaver, bully, hcxdumptool, tshark, hashcat सब इस्तेमाल करता है। आपको बस टार्गेट सेलेक्ट करना है, बाकी सब Wifite खुद करेगा। यह काली लिनक्स और काली नेटहंटर दोनों में प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        Wifite का सबसे बड़ा फायदा यह है कि यह कई अटैक मेथड्स एक साथ ट्राई करता है। अगर WPS काम नहीं करता तो PMKID ट्राई करता है, अगर PMKID नहीं मिलता तो WPA हैंडशेप कैप्चर करता है। यह ऑटोमैटिक फॉलबैक मैकेनिज़्म इसे बहुत पावरफुल बनाता है।
      </p>
      <p>
        Wifite एक ऑर्केस्ट्रेटर है — यह कई टूल्स को एक साथ मैनेज करता है। मॉनिटर मोड एनेबल करता है, नेटवर्क्स स्कैन करता है, टार्गेट सेलेक्ट करने देता है, और फिर ऑटोमैटिकली सभी अटैक मेथड्स ट्राई करता है। अगर कोई अटैक काम नहीं करता तो अगला ट्राई करता है — यह intelligent fallback system इसकी सबसे बड़ी ताकत है।
      </p>
      <p>
        Wifite का इंटरफ़ेस बहुत सिंपल है — बस sudo wifite लिखो और बाकी सब ऑटोमैटिक हो जाता है। टार्गेट्स की लिस्ट आती है, नंबर टाइप करो, और Wifite अटैक शुरू कर देता है। क्रैक्ड पासवर्ड स्क्रीन पर दिखता है। यह simplicity ही इसे सबसे पॉपुलर वाईफाई टेस्टिंग टूल बनाती है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Wifite केवल अपने नेटवर्क या लिखित अनुमति के साथ ही इस्तेमाल करें। बिना अनुमति के वाईफाई नेटवर्क पर अटैक करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क एक्सेस अपराध हो सकता है। 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है।
      </div>

      <h2>History of Wifite</h2>
      <p>
        Wifite की शुरुआत 2011 में derv82 (GitHub username) ने की थी। उस समय वाईफाई टेस्टिंग के लिए कई अलग-अलग टूल्स इस्तेमाल करने पड़ते थे — aircrack-ng हैंडशेप कैप्चर के लिए, reaver WPS के लिए, bully दूसरा WPS टूल। हर टूल का अपना कमांड सिंटैक्स था। derv82 ने सोचा कि एक ऐसा टूल बनाना चाहिए जो सब कुछ ऑटोमैटिक करे।
      </p>
      <p>
        Wifite1 (2011) बहुत सिंपल था — बस WEP और WPA अटैक। Wifite2 (2017) में बड़ा अपडेट आया — PMKID अटैक, WPS PixieDust, hcxdumptool integration, और hashcat integration जोड़ा गया। यह Python 2 से Python 3 में कन्वर्ट हुआ। आज Wifite2 सबसे लेटेस्ट वर्जन है और काली लिनक्स में प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        Wifite का डिज़ाइन दर्शन सिंपल है — "one tool to rule them all"। अलग-अलग टूल्स की कमांड्स याद रखने की ज़रूरत नहीं। Wifite खुद decide करता है कि कौन सा अटैक मेथड ट्राई करना है। यह beginner-friendly है लेकिन advanced users के लिए भी बहुत ऑप्शंस हैं।
      </p>
      <p>
        2018 में PMKID अटैक discover हुआ जिसने वाईफाई टेस्टिंग को बदल दिया। इसमें क्लाइंट डिवाइस की ज़रूरत नहीं होती — सीधे AP से PMKID मिलता है। Wifite2 ने इसे तुरंत integrate किया और hcxdumptool को अपने pipeline में जोड़ा। इससे Wifite की success rate बहुत बढ़ गई क्योंकि पहले क्लाइंट-लेस नेटवर्क्स पर अटैक मुश्किल होता था।
      </p>
      <p>
        Wifite का GitHub repository active है और community contributions आती रहती हैं। नए अटैक मेथड्स और टूल integrations regularly add होते हैं। Kali Linux, Parrot OS, और BlackArch में यह प्री-इंस्टॉल्ड आता है। WiFi security certifications जैसे CWNA और CWSP में भी इसका knowledge useful है।
      </p>

      <h2>How Wifite Works?</h2>
      <p>
        Wifite का आर्किटेक्चर मल्टी-टूल ऑर्केस्ट्रेशन पर आधारित है। यह एक intelligent wrapper है जो कई specialized tools को coordinate करता है। हर attack method के लिए best available tool automatically select होता है। Fallback mechanism built-in है — अगर एक method fail हो तो next method automatically try होता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">मॉनिटर मोड:</strong> airmon-ng से वाईफाई एडाप्टर को मॉनिटर मोड में डालता है</li>
        <li><strong className="text-white">स्कैनिंग:</strong> airodump-ng से आसपास के सभी नेटवर्क्स स्कैन करता है</li>
        <li><strong className="text-white">टार्गेट सेलेक्शन:</strong> यूज़र को नेटवर्क लिस्ट दिखाता है — नंबर से सेलेक्ट करो</li>
        <li><strong className="text-white">WPS अटैक:</strong> reaver और bully से WPS PIN ब्रूटफोर्स ट्राई करता है</li>
        <li><strong className="text-white">PMKID अटैक:</strong> hcxdumptool से PMKID कैप्चर करता है — क्लाइंट की ज़रूरत नहीं</li>
        <li><strong className="text-white">WPA हैंडशेप:</strong> aircrack-ng से डीऑथेंटिकेशन + हैंडशेप कैप्चर करता है</li>
        <li><strong className="text-white">WEP क्रैक:</strong> aircrack-ng से WEP पासवर्ड क्रैक करता है</li>
        <li><strong className="text-white">पासवर्ड क्रैकिंग:</strong> hashcat या aircrack-ng से कैप्चर्ड हैंडशेप क्रैक करता है</li>
      </ul>

      <h2>Installation</h2>
      <p>
        Wifite काली लिनक्स और काली नेटहंटर में प्री-इंस्टॉल्ड आता है। अगर किसी और distro में install करना है तो dependencies के साथ install करना पड़ेगा।
      </p>
      <CodeBlock
        title="Kali Linux / Parrot OS Installation"
        code={`# काली में प्री-इंस्टॉल्ड है — सीधे चलाओ:
sudo wifite

# अगर नहीं है:
sudo apt update
sudo apt install wifite

# Git से (लेटेस्ट):
git clone https://github.com/derv82/wifite2.git
cd wifite2
sudo python3 Wifite.py

# वर्जन चेक:
wifite --version`}
      />
      <CodeBlock
        title="Dependencies Installation"
        code={`# सभी dependencies एक साथ:
sudo apt install aircrack-ng reaver bully hcxdumptool \\
  hashcat tshark wireshark

# अलग-अलग:
# aircrack-ng — WEP/WPA cracking, handshake capture
sudo apt install aircrack-ng

# reaver — WPS PIN brute force
sudo apt install reaver

# bully — Alternative WPS brute forcer
sudo apt install bully

# hcxdumptool — PMKID capture
sudo apt install hcxdumptool

# hashcat — GPU-accelerated password cracking
sudo apt install hashcat

# tshark — Packet analysis (Wireshark CLI)
sudo apt install tshark

# Python dependencies:
sudo apt install python3-pycryptodome python3-scapy`}
      />
      <CodeBlock
        title="NetHunter Installation"
        code={`# काली नेटहंटर पर:
# Termux + NetHunter के साथ

# pkg install python git
# git clone https://github.com/derv82/wifite2.git
# cd wifite2
# python3 Wifite.py

# OTG वाईफाई एडाप्टर ज़रूरी है:
# Internal WiFi monitor mode support नहीं करता
# Alfa AWUS036ACH या TP-Link TL-WN722N v1

# NetHunter App → Wireless → Wifite
# या Terminal से: sudo wifite`}
      />

      <h2>Basic Usage</h2>
      <CodeBlock
        title="Wifite बेसिक कमांड्स"
        code={`# सिंपल स्कैन और अटैक:
sudo wifite

# बस इतना ही! Wifite बाकी सब करेगा:
# 1. मॉनिटर मोड एनेबल
# 2. नेटवर्क्स स्कैन
# 3. टार्गेट लिस्ट दिखाएगा
# 4. नंबर टाइप करो → अटैक शुरू

# स्पेसिफिक इंटरफ़ेस:
sudo wifite -i wlan0mon

# सभी अटैक डिसेबल करके सिर्फ WPS:
sudo wifite --wps-only

# सिर्फ WPA:
sudo wifite --wpa-only

# सिर्फ WEP:
sudo wifite --wep-only

# पावरफुल मोड (सभी अटैक):
sudo wifite --all

# वर्बोज़ आउटपुट:
sudo wifite -v

# क्वाइट मोड (सिर्फ रिजल्ट):
sudo wifite -q

# चैनल स्पेसिफाई:
sudo wifite -c 6

# बैंड स्पेसिफाई (5GHz):
sudo wifite --5ghz`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Flag</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-i iface</td><td className="py-2 px-3">नेटवर्क इंटरफ़ेस स्पेसिफाई करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c channel</td><td className="py-2 px-3">स्पेसिफिक चैनल स्कैन करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--5ghz</td><td className="py-2 px-3">5GHz बैंड स्कैन करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--wps-only</td><td className="py-2 px-3">सिर्फ WPS अटैक</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--wpa-only</td><td className="py-2 px-3">सिर्फ WPA/WPA2 अटैक</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--wep-only</td><td className="py-2 px-3">सिर्फ WEP अटैक</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--all</td><td className="py-2 px-3">सभी अटैक मेथड्स ट्राई करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v / -vv</td><td className="py-2 px-3">वर्बोज़ / बहुत वर्बोज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-q</td><td className="py-2 px-3">क्वाइट मोड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--kill</td><td className="py-2 px-3">इंटरफ़ेस प्रोसेसेज़ किल करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p num</td><td className="py-2 px-3">पावर सेटिंग (1-100)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--wpa-deauth-timeout</td><td className="py-2 px-3">WPA डीऑथ टाइमआउट (सेकंड)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--wps-timeout</td><td className="py-2 px-3">WPS अटैक टाइमआउट (सेकंड)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--pmkid-timeout</td><td className="py-2 px-3">PMKID कैप्चर टाइमआउट (सेकंड)</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-w wordlist</td><td className="py-2 px-3">कस्टम वर्डलिस्ट फाइल</td></tr>
          </tbody>
        </table>
      </div>

      <h2>WPA/WPA2 Handshake Capture</h2>
      <p>
        WPA/WPA2 हैंडशेप कैप्चर करना सबसे कॉमन अटैक है। Wifite ऑटोमैटिकली डीऑथेंटिकेशन भेजता है और हैंडशेप कैप्चर करता है। हैंडशेप तब capture होता है जब कोई client AP से authenticate करता है। इसमें 4 EAPOL frames होते हैं जो shared key establish करते हैं।
      </p>
      <p>
        Wifite का deauth mechanism बहुत effective है — यह targeted deauth भेजता है specific clients को, broadcast deauth नहीं। इससे detection risk कम होता है। अगर कोई client connected नहीं है तो Wifite wait करता है — PMKID attack automatically try होता है as fallback।
      </p>
      <CodeBlock
        title="WPA Handshake Capture"
        code={`# Wifite से WPA अटैक:
sudo wifite --wpa-only

# यह ऑटोमैटिकली करता है:
# 1. टार्गेट नेटवर्क सेलेक्ट करो
# 2. डीऑथेंटिकेशन भेजता है (क्लाइंट्स को डिस्कनेक्ट)
# 3. जब क्लाइंट रीकनेक्ट करता है → हैंडशेप कैप्चर
# 4. हैंडशेप को वर्डलिस्ट से क्रैक करता है

# हैंडशेप कैप्चर होने पर:
# [+] WPA Handshake Captured: AA:BB:CC:DD:EE:FF
# [+] Cracking with wordlist...

# कस्टम वर्डलिस्ट:
sudo wifite -w /usr/share/wordlists/rockyou.txt --wpa-only

# बिना ऑटो-क्रैक (सिर्फ कैप्चर):
sudo wifite --wpa-only --no-crack`}
      />

      <h2>PMKID Attack</h2>
      <p>
        PMKID अटैक 2018 में Jens "atom" Steube (Hashcat creator) ने discover किया। यह WPA/WPA2 cracking को fundamentally बदल दिया — अब क्लाइंट डिवाइस की ज़रूरत नहीं। सीधे Access Point से PMKID (Pairwise Master Key Identifier) capture होता है।
      </p>
      <p>
        PMKID attack कैसे काम करता है: attacker AP को association request भेजता है। AP response में PMKID include करता है (EAPOL frame में)। यह PMKID PMK और PMKName से derive होता है — hashcat से offline crack possible है। hcxdumptool इस attack को implement करता है जो Wifite internally use करता है।
      </p>
      <CodeBlock
        title="PMKID Capture"
        code={`# PMKID अटैक (क्लाइंट-लेस):
sudo wifite --pmkid-only

# यह hcxdumptool इस्तेमाल करता है:
# 1. टार्गेट AP से PMKID रिक्वेस्ट भेजता है
# 2. AP PMKID रिस्पॉन्स करता है
# 3. PMKID कैप्चर → hashcat से क्रैक

# PMKID vs Handshake:
# PMKID — क्लाइंट की ज़रूरत नहीं, तेज़
# Handshake — क्लाइंट डिस्कनेक्ट + रीकनेक्ट चाहिए

# PMKID टाइमआउट बढ़ाओ (स्लो AP के लिए):
sudo wifite --pmkid-timeout 120 --pmkid-only`}
      />

      <h2>WPS Attack</h2>
      <p>
        WPS (Wi-Fi Protected Setup) अटैक WPS PIN ब्रूटफोर्स है। अगर AP पर WPS enabled है तो पासवर्ड मिल सकता है। WPS 2006 में WiFi Alliance ने introduce किया था — users को आसानी से device connect करने के लिए। लेकिन 2011 में Stefan Viehböck ने design flaw discover किया — 8-digit PIN brute force करना trivial है।
      </p>
      <p>
        Wifite तीन WPS attack methods try करता है: पहले PixieWPS (offline, fastest), फिर Reaver (online brute force), और अंत में Bully (alternative brute force)। PixieWPS 2014 में Dominique Bongard ने discover किया — कुछ APs में weak randomness होती है जिससे PIN seconds में मिल जाता है।
      </p>
      <CodeBlock
        title="WPS PIN Attack"
        code={`# WPS अटैक:
sudo wifite --wps-only

# Wifite यह ट्राई करता है:
# 1. पहले PixieWPS (ऑफ़लाइन, तेज़)
# 2. अगर काम न करे तो Reaver (ब्रूटफोर्स)
# 3. अगर Reaver फेल तो Bully (ब्रूटफोर्स)

# PixieWPS (सबसे तेज़ — सेकंड्स में):
# अगर AP vulnerable है तो PIN मिल जाता है

# Reaver ब्रूटफोर्स (घंटों लग सकते हैं):
# 11,000 PINs try करने पड़ते हैं

# WPS Locked AP:
# कुछ AP WPS लॉक कर देते हैं — Wifite डिटेक्ट करता है`}
      />

      <h2>WEP Cracking</h2>
      <p>
        WEP (Wired Equivalent Privacy) पुराना और कमज़ोर प्रोटोकॉल है। 1999 में IEEE 802.11 standard के साथ introduce हुआ। RC4 encryption use करता है जो fundamentally flawed है — 2001 में Fluhrer-Mantin-Shamir (FMS) attack से crackable हो गया। आज WEP crack करना minutes का काम है।
      </p>
      <p>
        Wifite WEP cracking को fully automate करता है — IV collection, ARP replay injection, और aircrack-ng cracking सब ऑटोमैटिक। 64-bit WEP के लिए ~40,000 IVs चाहिए (10-20 minutes), 128-bit के लिए ~80,000 IVs (30-60 minutes)। Active networks पर faster है — traffic generate करने के लिए ARP replay use होता है।
      </p>
      <CodeBlock
        title="WEP Crack"
        code={`# WEP अटैक:
sudo wifite --wep-only

# Wifite यह करता है:
# 1. टार्गेट नेटवर्क जॉइन करता है
# 2. IVs (Initialization Vectors) कलेक्ट करता है
# 3. ARP रीप्ले अटैक से ट्रैफिक बढ़ाता है
# 4. पर्याप्त IVs मिलने पर aircrack-ng से क्रैक

# WEP 64-bit (40-bit key):
# ~40,000 IVs चाहिए (10-20 मिनट)

# WEP 128-bit (104-bit key):
# ~80,000 IVs चाहिए (30-60 मिनट)

# WEP क्रैक होने पर:
# [+] WEP Key Found: 1A:2B:3C:4D:5E`}
      />

      <h2>Target Selection and Filtering</h2>
      <p>
        Wifite scan results में सभी nearby networks दिखाता है — लेकिन specific targets filter करना important है। Signal strength, encryption type, channel, और BSSID से filter कर सकते हो। Ignore list feature बहुत useful है — already tested networks skip हो जाते हैं।
      </p>
      <CodeBlock
        title="टार्गेट फ़िल्टरिंग"
        code={`# स्पेसिफिक BSSID टार्गेट करो:
sudo wifite --bssid AA:BB:CC:DD:EE:FF

# चैनल फ़िल्टर:
sudo wifite -c 6

# ESSID फ़िल्टर:
sudo wifite --essid "NetworkName"

# न्यूनतम सिग्नल स्ट्रेंथ:
sudo wifite --min-power 50

# एन्क्रिप्शन फ़िल्टर:
sudo wifite --wpa-only   # सिर्फ WPA
sudo wifite --wep-only   # सिर्फ WEP
sudo wifite --wps-only   # सिर्फ WPS enabled

# इग्नोर लिस्ट (पहले से टेस्ट किए हुए):
sudo wifite --ignore-list ignore.txt

# Multiple targets one command:
# Wifite interactive mode में multiple select करो
# या BSSID list file से (future feature)

# Scan duration control:
sudo wifite --wpa-deauth-timeout 30  # faster scanning
sudo wifite --wps-timeout 300        # longer WPS attempt`}
      />

      <h2>Deauthentication Attack</h2>
      <p>
        डीऑथेंटिकेशन अटैक क्लाइंट्स को AP से डिस्कनेक्ट करता है — हैंडशेप कैप्चर के लिए ज़रूरी है। यह IEEE 802.11 standard का part है — management frames unauthenticated होते हैं इसलिए forge करना आसान है। Wifite targeted deauth use करता है — specific client को disconnect करता है, broadcast deauth नहीं भेजता।
      </p>
      <p>
        802.11w (Protected Management Frames) इस attack को mitigate करता है — WPA3 में mandatory है। लेकिन अभी ज़्यादातर WPA2 networks PMF enable नहीं करते। PMF-enabled APs पर deauth frames ignore हो जाते हैं — Wifite automatically detect करता है और PMKID attack try करता है।
      </p>
      <CodeBlock
        title="Deauth Attack Details"
        code={`# Wifite ऑटोमैटिक डीऑथ:
# जब WPA हैंडशेप कैप्चर करना होता है
# Wifite डीऑथ फ्रेम्स भेजता है

# डीऑथ कैसे काम करता है:
# 1. AP को फेक डीऑथ फ्रेम भेजता है
# 2. क्लाइंट डिस्कनेक्ट हो जाता है
# 3. क्लाइंट रीकनेक्ट करता है → हैंडशेप कैप्चर

# डीऑथ टाइमआउट:
sudo wifite --wpa-deauth-timeout 30

# कंटिन्यूअस डीऑथ (जब तक हैंडशेप न मिले):
sudo wifite --wpa-only

# डीऑथ अटैक डिटेक्शन:
# टार्गेट को पता चल सकता है
# IDS/IPS अलर्ट ट्रिगर कर सकता है`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Wifite Automation Script"
        code={`#!/bin/bash
# Wifite ऑटोमेशन स्क्रिप्ट

# सभी नेटवर्क्स स्कैन करो:
sudo wifite --all -o /tmp/wifite_results

# रिजल्ट्स पार्स करो:
echo "[+] क्रैक्ड नेटवर्क्स:"
grep "WPA\|WEP\|WPS" /tmp/wifite_results/*.csv

# स्पेसिफिक टार्गेट्स ऑटोमैटिक अटैक:
TARGETS=("AA:BB:CC:DD:EE:FF" "11:22:33:44:55:66")

for target in "${TARGETS[@]}"; do
    echo "[+] टार्गेट: $target"
    sudo wifite --bssid "$target" --all --kill
done

# लॉग फाइल चेक करो:
cat /var/log/wifite.log | grep -i "cracked\|found\|key"`}
      />

      <CodeBlock
        title="Batch WiFi Audit Script"
        code={`#!/bin/bash
# बैच वाईफाई ऑडिट

OUTPUT_DIR="/tmp/wifi_audit_$(date +%Y%m%d)"
mkdir -p "$OUTPUT_DIR"

echo "[+] वाईफाई ऑडिट शुरू: $(date)"

# WPS स्कैन:
echo "[+] WPS नेटवर्क्स स्कैन..."
sudo wifite --wps-only --kill -o "$OUTPUT_DIR/wps"

# WPA स्कैन:
echo "[+] WPA नेटवर्क्स स्कैन..."
sudo wifite --wpa-only --kill -o "$OUTPUT_DIR/wpa"

# WEP स्कैन:
echo "[+] WEP नेटवर्क्स स्कैन..."
sudo wifite --wep-only --kill -o "$OUTPUT_DIR/wep"

# रिजल्ट्स समरी:
echo "[+] समरी:"
echo "WPS: $(ls $OUTPUT_DIR/wps/*.csv 2>/dev/null | wc -l) नेटवर्क्स"
echo "WPA: $(ls $OUTPUT_DIR/wpa/*.csv 2>/dev/null | wc -l) नेटवर्क्स"
echo "WEP: $(ls $OUTPUT_DIR/wep/*.csv 2>/dev/null | wc -l) नेटवर्क्स"
echo "[+] ऑडिट पूरा: $(date)"`}
      />

      <h2>Hidden Network Discovery</h2>
      <p>
        Hidden SSID वाले नेटवर्क्स को Wifite automatically discover करता है। Hidden network में SSID broadcast नहीं होता लेकिन डीऑथेंटिकेशन फ्रेम्स में SSID leak हो जाता है। Wifite डीऑथ भेजकर SSID reveal करता है और फिर normal attack continue करता है।
      </p>
      <CodeBlock
        title="Hidden SSID Discovery"
        code={`# Wifite automatically hidden SSIDs discover करता है
sudo wifite

# Manual hidden SSID discovery:
# airodump-ng से hidden networks दिखते हैं
# SSID "<length: 0>" या "<hidden>" दिखता है

# डीऑथ भेजो — SSID reveal होगा:
sudo aireplay-ng --deauth 5 -a BSSID wlan0mon

# Client reconnect पर SSID capture:
# airodump-ng output में SSID दिखने लगेगा

# Wifite का hidden SSID handling:
# 1. Hidden network detect करता है
# 2. Active clients find करता है
# 3. डीऑथ भेजकर SSID reveal करता है
# 4. Normal attack continue करता है`}
      />

      <h2>Handshake Verification</h2>
      <p>
        Captured handshake को verify करना ज़रूरी है — incomplete handshake crack नहीं होगा। Wifite automatically handshake validate करता है लेकिन manual verification भी कर सकते हो।
      </p>
      <CodeBlock
        title="Handshake Validation"
        code={`# Wifite captured handshake verify करता है:
# [+] Valid WPA handshake found

# Manual verification (aircrack-ng):
aircrack-ng captured.cap

# tshark से handshake check:
tshark -r captured.cap -Y "eapol"

# Hashcat format convert:
hcxpcapngtool -o hash.hc22000 captured.cap

# John format convert:
hcxpcapngtool -o hash.hccapx captured.cap

# Wireshark में open करो:
# Filter: eapol
# 4 EAPOL frames दिखने चाहिए (complete handshake)
# अगर 2-3 ही हैं तो incomplete — re-capture करो

# Successful capture indicators:
# Message 1: AP → Client (ANonce)
# Message 2: Client → AP (SNonce + MIC)
# Message 3: AP → Client (GTK + MIC)
# Message 4: Client → AP (ACK)`}
      />

      <h2>Wifite Configuration</h2>
      <p>
        Wifite की configuration file modify करके default behavior change कर सकते हो। यह /etc/wifite.config या command-line flags से होता है।
      </p>
      <CodeBlock
        title="Wifite Configuration Options"
        code={`# Configuration file location:
# /etc/wifite.config

# Common configurations:

# Default wordlist set करो:
# --dict /usr/share/wordlists/rockyou.txt

# Default timeout values:
# --wps-timeout 600
# --wpa-deauth-timeout 30
# --pmkid-timeout 120

# Interface set करो:
# --interface wlan0mon

# Auto-kill processes:
# --kill (always recommended)

# Output directory:
# -o /tmp/wifite_results

# Command-line config override:
sudo wifite --wpa-only -w /usr/share/wordlists/rockyou.txt \\
  --wpa-deauth-timeout 60 --kill -p 50

# Wifite RC file (~/.wifite.rc):
# User-specific config
# यह file manually create करो`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        WiFi security testing real-world में बहुत important है। एक penetration tester ने एक corporate office का WiFi audit किया — 15 नेटवर्क्स में से 3 WPS enabled थे और 2 में weak passwords थे। Wifite से automated scanning करके 10 मिनट में सभी vulnerabilities identify कर लीं। PixieWPS attack से 2 WPS-enabled networks 30 सेकंड में crack हो गए।
      </p>
      <p>
        एक और case में, coffee shop का WiFi audit किया गया। WPA2 network था लेकिन password "coffeeshop123" था। Wifite ने handshake capture किया और rockyou.txt wordlist से 5 मिनट में crack कर दिया। Owner को recommend किया कि WPA3 enable करे और strong password लगाए।
      </p>
      <p>
        Red team engagement में Wifite reconnaissance phase में use होता है। पहले surrounding networks scan करो, vulnerabilities identify करो, फिर targeted attacks plan करो। Wifite की speed और automation इसे initial assessment के लिए ideal बनाती है। Detailed testing के लिए manual tools (aircrack-ng suite) use करने पड़ते हैं।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Wifite अकेले powerful है लेकिन other tools के साथ combine करने पर और भी effective हो जाता है।
      </p>
      <CodeBlock
        title="Wifite + Hashcat Combo"
        code={`# Wifite handshake capture + Hashcat offline crack:
# Step 1: Handshake capture (no auto-crack)
sudo wifite --wpa-only --no-crack -o /tmp/captures

# Step 2: Convert to hashcat format:
hcxpcapngtool -o hash.hc22000 /tmp/captures/*.cap

# Step 3: Hashcat GPU crack:
hashcat -m 22000 hash.hc22000 /usr/share/wordlists/rockyou.txt

# Step 4: Rules-based attack:
hashcat -m 22000 hash.hc22000 wordlist.txt -r rules/best64.rule

# Step 5: Brute force (8 char):
hashcat -m 22000 hash.hc22000 -a 3 ?a?a?a?a?a?a?a?a

# Step 6: Show cracked:
hashcat -m 22000 hash.hc22000 --show`}
      />
      <CodeBlock
        title="Wifite + Aircrack-ng Deep Analysis"
        code={`# Wifite capture + Aircrack-ng analysis:

# Capture with Wifite:
sudo wifite --wpa-only --no-crack

# Aircrack-ng deep analysis:
# Check capture quality:
aircrack-ng captured.cap

# Decrypt captured traffic:
airdecap-ng -e "NetworkName" -p "password" captured.cap

# Analyze decrypted traffic:
tshark -r captured-dec.pcap -Y "http"

# Packet statistics:
airdec-ng captured.cap

# Statistics:
tshark -r captured.cap -q -z io,stat,1`}
      />
      <CodeBlock
        title="Wifite + Wireshark Analysis"
        code={`# Wifite capture → Wireshark analysis:

# Capture with Wifite:
sudo wifite --wpa-only --no-crack

# Wireshark में open करो:
wireshark captured.cap &

# Useful Wireshark filters:
# EAPOL frames (handshake):
# eapol

# Beacon frames (network info):
# wlan.fc.type_subtype == 0x08

# Probe requests (client activity):
# wlan.fc.type_subtype == 0x04

# Deauth frames (attack detection):
# wlan.fc.type_subtype == 0x0c

# Statistics → Wireless Statistics:
# Network list, signal strength, channel usage`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Wifite की performance optimize करने के लिए कई techniques हैं। WiFi adapter quality, antenna, channel selection, और power settings सब matter करते हैं।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">High-Gain Antenna:</strong> 5dBi से 9dBi antenna range बढ़ाता है — Alfa adapters external antenna support करते हैं</li>
        <li><strong className="text-white">Channel Hopping Speed:</strong> Default hopping slow होता है — specific channel target करो speed बढ़ाने के लिए</li>
        <li><strong className="text-white">Power Settings:</strong> -p flag से transmit power बढ़ाओ — regulatory limits check करो</li>
        <li><strong className="text-white">Adapter Placement:</strong> Window पर रखो, metal objects से दूर — signal quality improve होती है</li>
        <li><strong className="text-white">USB 3.0 Port:</strong> USB 2.0 bottleneck हो सकता है — USB 3.0 port use करो</li>
        <li><strong className="text-white">Dedicated Adapter:</strong> Separate adapter for monitoring और attacking — dual adapter setup faster है</li>
        <li><strong className="text-white">Wordlist Optimization:</small> Sorted wordlist faster crack करता है — most common passwords first</li>
        <li><strong className="text-white">Target Prioritization:</strong> Strong signal वाले targets पहले — weak signals time waste करते हैं</li>
      </ul>

      <h2>Reporting and Output Analysis</h2>
      <p>
        Wifite के results को analyze करना और report बनाना penetration testing का important part है।
      </p>
      <CodeBlock
        title="Results Analysis"
        code={`# Wifite output directory:
ls /tmp/wifite/

# Files:
# wifite-01.cap    — captured packets
# wifite-01.csv    — network list
# wifite-01.log    — attack log

# CSV parse करो:
cat /tmp/wifite/*.csv | column -t -s ","

# Cracked results:
grep -r "Cracked\|Key:" /tmp/wifite/

# Log analysis:
grep -i "error\|fail\|success" /tmp/wifite/*.log

# Report generation script:
echo "=== WiFi Audit Report ===" > report.txt
echo "Date: $(date)" >> report.txt
echo "" >> report.txt
echo "Networks Found:" >> report.txt
wc -l /tmp/wifite/*.csv >> report.txt
echo "" >> report.txt
echo "Cracked Networks:" >> report.txt
grep -r "Key:" /tmp/wifite/ >> report.txt
echo "" >> report.txt
echo "Failed Attempts:" >> report.txt
grep -c "Failed" /tmp/wifite/*.log >> report.txt`}
      />
      <CodeBlock
        title="PCAP Analysis Pipeline"
        code={`# Captured PCAP files का deep analysis:

# Packet statistics:
capinfos /tmp/wifite/*.cap

# Protocol hierarchy:
tshark -r /tmp/wifite/*.cap -q -z io,phs

# Client statistics:
tshark -r /tmp/wifite/*.cap -q -z endpoints,wlan

# AP statistics:
tshark -r /tmp/wifite/*.cap -q -z nodes,wlan

# Export specific data:
tshark -r /tmp/wifite/*.cap -Y "wlan.bssid == AA:BB:CC:DD:EE:FF" \\
  -T fields -e wlan.sa -e wlan.da

# Merge multiple captures:
mergecap -w merged.cap /tmp/wifite/*.cap

# Convert formats:
tshark -r captured.cap -F pcapng -w converted.pcapng`}
      />

      <h2>Wifite vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Wifite</th>
              <th className="text-left py-2 px-3 text-neon-green">Aircrack-ng</th>
              <th className="text-left py-2 px-3 text-neon-green">Airgeddon</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">ऑटोमेशन</td><td className="py-2 px-3">पूरा ऑटोमैटिक</td><td className="py-2 px-3">मैनुअल</td><td className="py-2 px-3">सेमी-ऑटो</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WPS अटैक</td><td className="py-2 px-3">हाँ (Reaver+Bully)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">PMKID</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GUI</td><td className="py-2 px-3">नहीं (CLI)</td><td className="py-2 px-3">नहीं (CLI)</td><td className="py-2 px-3">हाँ (Bash)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">इज़ी ऑफ़ यूज़</td><td className="py-2 px-3">बहुत आसान</td><td className="py-2 px-3">मुश्किल</td><td className="py-2 px-3">मीडियम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Evil Twin</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">मल्टी-टूल</td><td className="py-2 px-3">हाँ (रैपर)</td><td className="py-2 px-3">सिंगल</td><td className="py-2 px-3">हाँ (रैपर)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">टार्गेट फ़िल्टर</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">मैनुअल</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">रिपोर्टिंग</td><td className="py-2 px-3">सिंपल CSV</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">HTML</td></tr>
            <tr><td className="py-2 px-3 text-white">प्री-इंस्टॉल्ड</td><td className="py-2 px-3">काली में हाँ</td><td className="py-2 px-3">काली में हाँ</td><td className="py-2 px-3">काली में हाँ</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'मॉनिटर मोड एनेबल नहीं हो रहा', a: 'sudo airmon-ng check kill करो पहले — NetworkManager interfere करता है। फिर sudo airmon-ng start wlan0 करो। USB वाईफाई एडाप्टर सपोर्टेड होना चाहिए। Kernel module check करो: lsmod | grep ath9k।' },
          { q: 'कोई नेटवर्क नहीं दिख रहा', a: 'वाईफाई एडाप्टर मॉनिटर मोड में है? iwconfig से चेक करो। एंटेना कनेक्टेड है? चैनल रेंज चेक करो — --5ghz फ्लैग ट्राई करो। Adapter driver support check करो।' },
          { q: 'WPS अटैक काम नहीं कर रहा', a: 'AP पर WPS enabled है? wash -i wlan0mon से चेक करो। WPS locked AP — लॉक्ड होने पर WPS अटैक नहीं होगा। PixieWPS vulnerable AP चाहिए — सभी APs vulnerable नहीं हैं।' },
          { q: 'हैंडशेप कैप्चर नहीं हो रहा', a: 'क्लाइंट्स होने चाहिए — बिना क्लाइंट हैंडशेप नहीं मिलेगा। PMKID अटैक ट्राई करो — इसमें क्लाइंट की ज़रूरत नहीं। डीऑथ टाइमआउट बढ़ाओ: --wpa-deauth-timeout 60।' },
          { q: 'पासवर्ड क्रैक नहीं हो रहा', a: 'वर्डलिस्ट में पासवर्ड होना चाहिए। rockyou.txt यूज़ करो। अगर न मिले तो hashcat से brute force ट्राई करो। -w flag से कस्टम वर्डलिस्ट दो। Rules-based attack try करो।' },
          { q: 'इंटरफ़ेस busy दिखा रहा', a: 'sudo wifite --kill फ्लैग यूज़ करो — यह airmon-ng check kill करता है। NetworkManager, wpa_supplicant सब बंद करता है। systemctl stop NetworkManager भी try करो।' },
          { q: '5GHz नेटवर्क्स नहीं दिख रहे', a: 'वाईफाई एडाप्टर 5GHz support करता है? --5ghz फ्लैग यूज़ करो। सभी एडाप्टर 5GHz सपोर्ट नहीं करते — Alfa AWUS036ACH recommended है। iw list से supported bands check करो।' },
          { q: 'Wifite बहुत स्लो है', a: 'पावर सेटिंग बढ़ाओ: -p 50। चैनल स्पेसिफाई करो: -c 6। सिर्फ एक अटैक मेथड यूज़ करो: --wps-only या --wpa-only। USB 3.0 port use करो।' },
          { q: 'Python error आ रहा है', a: 'Python 3 installed है? python3 --version चेक करो। Dependencies missing: sudo apt install python3-pycryptodome python3-scapy। Git से latest version install करो।' },
          { q: 'Hashcat integration काम नहीं कर रहा', a: 'Hashcat installed है? hashcat --version चेक करो। GPU drivers installed? nvidia-smi या rocm-smi check करो। --no-crack flag से capture करो, manually hashcat चलाओ।' },
          { q: 'Deauth अटैक काम नहीं कर रहा', a: 'Adapter packet injection support करता है? aireplay-ng --test wlan0mon से check करो। 802.1w Protected Management Frames (PMF) enabled AP पर deauth काम नहीं करता।' },
          { q: 'Wifite शुरू होते ही crash हो रहा', a: 'Dependencies check करो: aircrack-ng, reaver, bully, hcxdumptool सब installed? sudo apt install wifite --reinstall करो। Python version 3.6+ चाहिए।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Wifite अटैक्स से कैसे बचें — defense-in-depth approach use करो:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">WPS डिसेबल करें:</strong> राउटर सेटिंग्स में WPS बंद करो — सबसे इम्पोर्टेंट, WPS PIN attack eliminate हो जाता है</li>
        <li><strong className="text-white">WPA3 यूज़ करें:</strong> WPA3-SAE सबसे सिक्योर है — WPS और PMKID अटैक काम नहीं करते, Dragonblood limited risk</li>
        <li><strong className="text-white">स्ट्रॉन्ग पासवर्ड:</strong> 16+ कैरेक्टर्स, लेटर्स+नंबर्स+सिम्बल्स — dictionary attack fail, brute force impractical</li>
        <li><strong className="text-white">MAC फ़िल्टरिंग:</strong> राउटर पर MAC फ़िल्टरिंग एनेबल करो — bypassable but adds a layer</li>
        <li><strong className="text-white">WIDS/WIPS:</strong> वाईफाई इंट्रूज़न डिटेक्शन/प्रिवेंशन सिस्टम — deauth attack detect और block करता है</li>
        <li><strong className="text-white">गेस्ट नेटवर्क:</strong> विज़िटर्स के लिए अलग नेटवर्क — मेन नेटवर्क isolated, client isolation enable करो</li>
        <li><strong className="text-white">रेगुलर पासवर्ड चेंज:</strong> हर 90 दिन में पासवर्ड बदलो — captured handshakes expire हो जाते हैं</li>
        <li><strong className="text-white">802.1X (WPA-Enterprise):</strong> एंटरप्राइज़ मोड — per-user authentication, RADIUS server required</li>
        <li><strong className="text-white">RF मॉनिटरिंग:</strong> वाईफाई स्पेक्ट्रम मॉनिटर करो — suspicious activity, rogue APs detect</li>
        <li><strong className="text-white">फ़र्मवेयर अपडेट:</strong> राउटर फ़र्मवेयर रेगुलरली अपडेट करो — known vulnerabilities patch होते हैं</li>
        <li><strong className="text-white">PMF (802.11w):</strong> Protected Management Frames enable करो — deauth attack mitigate होता है</li>
        <li><strong className="text-white">Rogue AP Detection:</strong> Unauthorized access points detect करो — evil twin attacks से बचाव</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        WiFi security testing lab setup करना ज़रूरी है — real networks पर practice करना illegal है। एक isolated lab environment बनाओ जहाँ safely tools test कर सको।
      </p>
      <CodeBlock
        title="वाईफाई टेस्टिंग लैब"
        code={`# सेफ लैब बनाओ:
# 1. पुराना राउटर लो (TP-Link, D-Link)
# 2. अलग VLAN/नेटवर्क में रखो
# 3. टेस्ट नेटवर्क बनाओ

# वाईफाई एडाप्टर (Monitor Mode Support):
# Alfa AWUS036ACH — बेस्ट (2.4GHz + 5GHz)
# Alfa AWUS036NHA — अच्छा (2.4GHz)
# TP-Link TL-WN722N v1 — सस्ता (2.4GHz)
# Panda PAU09 — budget option

# एडाप्टर टेस्ट:
iwconfig                           # इंटरफ़ेस देखो
sudo airmon-ng start wlan0         # मॉनिटर मोड
iwconfig                           # wlan0mon दिखना चाहिए

# Monitor mode support verify:
sudo airmon-ng                     # compatible adapters list

# टेस्ट सेटअप:
# राउटर: WPA2-Personal, पासवर्ड: TestPass123
# WPS enable करो (टेस्ट के लिए)
# क्लाइंट डिवाइस कनेक्ट करो
# Hidden SSID network भी बनाओ (optional)

# अटैक टेस्ट:
sudo wifite --all --kill`}
      />
      <CodeBlock
        title="Lab Network Configuration"
        code={`# राउटर configuration for lab:

# Network 1: WPA2 + WPS enabled
# SSID: LabTest1
# Password: TestPass123
# WPS: Enabled (PIN mode)

# Network 2: WPA2 + WPS disabled
# SSID: LabTest2
# Password: Str0ngP@ss!2024
# WPS: Disabled

# Network 3: WEP (legacy testing)
# SSID: LabTest3
# WEP Key: 1A2B3C4D5E

# Network 4: Hidden SSID
# SSID: (hidden)
# Password: HiddenNet456

# Isolate lab from production:
# Separate VLAN
# No internet access
# Physical isolation (different room/location)`}
      />

      <h2>Legal and Ethical Considerations</h2>
      <p>
        WiFi security testing legal boundaries clearly defined हैं। Unauthorized access किसी भी network पर illegal है — चाहे "testing" के लिए ही क्यों न हो। India में IT Act 2000, Section 43 और 66 apply होते हैं। US में CFAA (Computer Fraud and Abuse Act) apply होता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Written Permission:</strong> हमेशा written authorization लो — scope, duration, methods सब define करो</li>
        <li><strong className="text-white">Scope Limitations:</strong> सिर्फ authorized networks test करो — neighboring networks touch मत करो</li>
        <li><strong className="text-white">Data Handling:</strong> Captured data securely handle करो — test complete होने पर delete करो</li>
        <li><strong className="text-white">Reporting:</strong> Findings professionally report करो — remediation recommendations include करो</li>
        <li><strong className="text-white">Non-Disclosure:</strong> Client data confidential रखो — third parties को share मत करो</li>
        <li><strong className="text-white">Lab Practice:</strong> पहले lab environment में master करो — real world में experience बाद में</li>
      </ul>

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Offline Cracking Pipeline"
        code={`# हैंडशेप कैप्चर + ऑफ़लाइन क्रैक:
sudo wifite --wpa-only --no-crack
# हैंडशेप .cap फाइल में सेव होगा
# बाद में hashcat से क्रैक:
hashcat -m 22000 hash.hc22000 wordlist.txt

# John the Ripper से:
john --wordlist=rockyou.txt hash.hccapx

# Rules-based attack (more coverage):
hashcat -m 22000 hash.hc22000 wordlist.txt -r rules/best64.rule

# Mask attack (brute force 8 chars):
hashcat -m 22000 hash.hc22000 -a 3 ?a?a?a?a?a?a?a?a

# Hybrid attack (wordlist + mask):
hashcat -m 22000 hash.hc22000 -a 6 wordlist.txt ?d?d?d`}
      />
      <CodeBlock
        title="Multi-Adapter Setup"
        code={`# मल्टी-इंटरफ़ेस:
# दो वाईफाई एडाप्टर यूज़ करो
# एक स्कैन करे, दूसरा अटैक

# Adapter 1: Monitor mode (scanning)
sudo airmon-ng start wlan0

# Adapter 2: Monitor mode (attacking)
sudo airmon-ng start wlan1

# Wifite with both adapters:
sudo wifite -i wlan0mon,wlan1mon

# Benefits:
# - Simultaneous scan + attack
# - Faster results
# - No channel switching delays

# Recommended dual-adapter setup:
# Alfa AWUS036ACH (primary — 5GHz capable)
# Alfa AWUS036NHA (secondary — reliable 2.4GHz)`}
      />
      <CodeBlock
        title="Custom Wordlist Generation"
        code={`# कस्टम वर्डलिस्ट जनरेशन:
# CeWL से टार्गेट-स्पेसिफिक वर्डलिस्ट:
cewl https://target.com -w custom_wordlist.txt

# Crunch से generate:
crunch 8 8 abcdefghijklmnopqrstuvwxyz1234567890 -o wordlist.txt

# Target-specific combinations:
# Company name + years:
echo "company2020" >> wordlist.txt
echo "company2021" >> wordlist.txt
echo "Company@2023" >> wordlist.txt

# Common WiFi passwords:
# Default router passwords (TP-Link, D-Link, Netgear)
# Phone numbers (10 digit patterns)
# Dates (DDMMYYYY, YYYYMMDD)

# फिर Wifite में यूज़ करो:
sudo wifite -w custom_wordlist.txt --wpa-only`}
      />
      <CodeBlock
        title="Evil Twin Preparation"
        code={`# Evil Twin attack prep (Wifite + hostapd):

# Step 1: Wifite से target network info collect:
sudo wifite --wpa-only --no-crack
# SSID, channel, BSSID note करो

# Step 2: hostapd config:
echo "interface=wlan1" > hostapd.conf
echo "driver=nl80211" >> hostapd.conf
echo "ssid=TargetSSID" >> hostapd.conf
echo "channel=6" >> hostapd.conf

# Step 3: Fake AP start:
sudo hostapd hostapd.conf

# Step 4: Deauth original clients:
sudo aireplay-ng --deauth 0 -a TARGET_BSSID wlan0mon

# Note: Evil Twin attacks require careful planning
# Captive portal + credential harvesting combo`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Wifite फ्री है?', a: 'हाँ, पूरी तरह फ्री और ओपन सोर्स (GPLv3)। काली लिनक्स, Parrot OS, BlackArch में प्री-इंस्टॉल्ड आता है। कोई paid version नहीं है।' },
          { q: 'किसी भी वाईफाई पर काम करता है?', a: 'WEP, WPA, WPA2, WPS — सब पर काम करता है। WPA3 अभी सपोर्ट नहीं। सभी अटैक सफल नहीं होते — AP कॉन्फ़िगरेशन और hardware पर डिपेंड करता है।' },
          { q: 'कितना टाइम लगता है?', a: 'WPS PixieWPS — सेकंड्स (अगर AP vulnerable है)। WPS ब्रूटफोर्स — घंटे। WPA हैंडशेप — मिनट्स (क्रैकिंग अलग से)। PMKID — मिनट्स। WEP — 20-60 मिनट।' },
          { q: 'Android पर चलता है?', a: 'काली नेटहंटर पर हाँ — OTG वाईफाई एडाप्टर चाहिए। रूटेड फोन + एक्सटर्नल एडाप्टर से काम करता है। Termux पर directly नहीं चलता — NetHunter chahiye।' },
          { q: 'वाईफाई एडाप्टर कौन सा चाहिए?', a: 'Monitor Mode + Packet Injection सपोर्टेड। Alfa AWUS036ACH best है (2.4+5GHz)। TP-Link TL-WN722N v1 सस्ता ऑप्शन। v2/v3 मत लो — chipset different है।' },
          { q: 'Wifite detect हो सकता है?', a: 'हाँ — डीऑथ अटैक IDS/WIDS detect कर सकते हैं। PMKID अटैक stealthier है। --pmkid-only से stealthier अटैक करो। लेकिन WiFi monitoring systems deauth frames detect कर लेते हैं।' },
          { q: 'WPA3 पर काम करता है?', a: 'अभी नहीं। WPA3-SAE नया प्रोटोकॉल है — पुराने अटैक्स काम नहीं करते। Dragonblood vulnerability limited attack vector देता है लेकिन practical exploitation मुश्किल है।' },
          { q: 'मल्टीपल नेटवर्क्स एक साथ टेस्ट कर सकते हैं?', a: 'Wifite एक टार्गेट पर काम करता है। बैच स्क्रिप्ट बनाओ जो एक-एक करके टार्गेट्स टेस्ट करे। Multiple adapters से parallel testing possible है।' },
          { q: 'Captured handshake कैसे verify करें?', a: 'aircrack-ng captured.cap से check करो — "1 handshake" दिखना चाहिए। Wireshark में eapol filter से 4 EAPOL frames verify करो। Wifite automatically validate करता है।' },
          { q: 'Wifite vs Aircrack-ng — कौन बेहतर?', a: 'Aircrack-ng industry standard है — manual control ज़्यादा। Wifite automation के लिए best है। Beginners: Wifite। Advanced users: Aircrack-ng suite। दोनों complementary हैं।' },
          { q: 'PMKID vs Handshake — कौन बेहतर?', a: 'PMKID — क्लाइंट की ज़रूरत नहीं, तेज़, stealthier। Handshake — ज़्यादा APs पर काम करता है। Wifite दोनों try करता है automatically। PMKID पहले try होता है।' },
          { q: 'Hashcat vs Aircrack-ng — cracking के लिए?', a: 'Hashcat — GPU-accelerated, बहुत तेज़ (millions of passwords/sec)। Aircrack-ng — CPU-based, slower लेकिन simple। Serious cracking: Hashcat। Quick test: Aircrack-ng।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Aircrack-ng Suite</td><td className="py-2 px-3">वाईफाई सिक्योरिटी टेस्टिंग</td><td className="py-2 px-3">इंडस्ट्री स्टैंडर्ड, मैनुअल कंट्रोल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Airgeddon</td><td className="py-2 px-3">वाईफाई ऑडिट फ्रेमवर्क</td><td className="py-2 px-3">GUI, Evil Twin, DoS attacks</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Fluxion</td><td className="py-2 px-3">Evil Twin + Captive Portal</td><td className="py-2 px-3">सोशल इंजीनियरिंग बेस्ड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Bettercap</td><td className="py-2 px-3">MITM + वाईफाई अटैक</td><td className="py-2 px-3">Go में लिखा, तेज़, modern</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hcxdumptool</td><td className="py-2 px-3">PMKID कैप्चर</td><td className="py-2 px-3">लाइटवेट, सिर्फ PMKID focus</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Fern WiFi Cracker</td><td className="py-2 px-3">GUI वाईफाई टेस्टिंग</td><td className="py-2 px-3">Python GUI, आसान interface</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Reaver</td><td className="py-2 px-3">WPS PIN ब्रूटफोर्स</td><td className="py-2 px-3">WPS स्पेसिफिक, mature tool</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Kismet</td><td className="py-2 px-3">पैसिव वाईफाई मॉनिटरिंग</td><td className="py-2 px-3">डिटेक्शन, IDS, passive mode</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Bully</td><td className="py-2 px-3">WPS PIN brute force</td><td className="py-2 px-3">Reaver alternative, C-based</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">EAPHammer</td><td className="py-2 px-3">WPA-Enterprise attacks</td><td className="py-2 px-3">802.1X bypass, Evil Twin</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>पहले --wps-only ट्राई करो — सबसे तेज़ अटैक (PixieWPS सेकंड्स में crack करता है)</li>
          <li>PMKID अटैक हैंडशेप से बेहतर — क्लाइंट की ज़रूरत नहीं, stealthier भी है</li>
          <li>Alfa AWUS036ACH एडाप्टर लो — 2.4GHz + 5GHz दोनों, external antenna support</li>
          <li>rockyou.txt वर्डलिस्ट always ready रखो — /usr/share/wordlists/ में default है</li>
          <li>--kill फ्लैग always यूज़ करो — NetworkManager/wpa_supplicant conflicts से बचता है</li>
          <li>--no-crack यूज़ करो handshake capture के लिए — बाद में hashcat से GPU crack करो</li>
          <li>Dual adapter setup best है — एक scan, एक attack, no channel switching delays</li>
          <li>लैब में प्रैक्टिस करो पहले — real networks पर unauthorized testing illegal है</li>
          <li>लॉग्स चेक करो — -o flag से output directory specify करो, बाद में analyze करो</li>
          <li>Custom wordlist बनाओ target-specific — CeWL, crunch, company names + years combine करो</li>
          <li>5GHz networks भी check करो — --5ghz flag, बहुत से auditors सिर्फ 2.4GHz scan करते हैं</li>
          <li>WPA3 migration plan बनाओ — WPA2 cracking tools mature हैं, WPA3 adoption बढ़ रहा है</li>
        </ul>
      </div>

      <h2>WiFi Defense Tips</h2>
      <p>
        Wifite से बचने के लिए अपने WiFi network को secure करो: WPA3 enable करो (अगर AP support करे), WPS disable करो (सबसे important), strong password रखो (12+ characters, letters + numbers + symbols), MAC filtering enable करो (extra layer), और regular firmware updates करो। Rogue AP detection tools use करो — Kismet या IDS setup करो।
      </p>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Wifite एक powerful ऑटोमेटेड वाईफाई अटैक टूल है। इसका इस्तेमाल केवल अपने नेटवर्क या लिखित अनुमति के साथ ही करें। बिना अनुमति के वाईफाई नेटवर्क पर अटैक करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क एक्सेस अपराध हो सकता है। केवल अपने लैब वातावरण में ही प्रैक्टिस करें।
      </div>
    </TutorialLayout>
  )
}
