import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Kismet() {
  return (
    <TutorialLayout
      title="kismet"
      subtitle="वायरलेस नेटवर्क डिटेक्टर, स्निफ़र, और IDS"
      icon="📡"
      prev={{ to: '/tool/dnsrecon', label: 'dnsrecon' }}
      next={{ to: '/tool/objection', label: 'objection' }}
    >
      <h2>What is Kismet?</h2>
      <p>
        किस्मेट एक वायरलेस नेटवर्क डिटेक्टर, पैकेट स्निफ़र, और इंट्रूज़न डिटेक्शन सिस्टम (IDS) है। यह WiFi (802.11), Bluetooth, Zigbee, और SDR (Software Defined Radio) जैसे वायरलेस प्रोटोकॉल को मॉनिटर कर सकता है। किस्मेट पैसिव मोड में काम करता है — यह कोई पैकेट सेंड नहीं करता, इसलिए डिटेक्ट होना बहुत मुश्किल है। यह वायरलेस सिक्योरिटी ऑडिटिंग और वार्ड्राइविंग के लिए सबसे भरोसेमंद टूल्स में से एक है।
      </p>
      <p>
        किस्मेट हिडन नेटवर्क्स (जो बीकन फ्रेम्स नहीं भेजते) को भी डिटेक्ट कर सकता है। यह प्रोब रिक्वेस्ट्स, डिवाइस फिंगरप्रिंटिंग, और ट्रैफ़िक एनालिसिस के ज़रिए ऐसा करता है। किस्मेट WPA हैंडशेप्स भी ऑटोमैटिकली कैप्चर कर सकता है जो बाद में Aircrack-ng या Hashcat से क्रैक किए जा सकते हैं।
      </p>
      <p>
        किस्मेट माइक केर्शॉ (Mike Kershaw) ने 2001 में बनाया था। यह C++ में लिखा गया है और लिनक्स, macOS, और BSD पर चलता है। काली नेटहंटर में यह प्री-इंस्टॉल्ड आता है। यह सबसे पुराने और सबसे परिपक्व वायरलेस सिक्योरिटी टूल्स में से एक है।
      </p>
      <p>
        किस्मेट का सबसे बड़ा फ़ायदा यह है कि यह पूरी तरह से पैसिव है। Aircrack-ng और Wifite जैसे टूल्स पैकेट्स सेंड करते हैं जो डिटेक्ट हो सकते हैं, लेकिन किस्मेट सिर्फ सुनता है। यह IDS के रूप में भी काम करता है — डीऑथेंटिकेशन अटैक्स, ईविल ट्विन APs, और स्पूफ़्ड MAC एड्रेसेज़ डिटेक्ट कर सकता है।
      </p>
      <p>
        किस्मेट का REST API और वेब UI इसे ऑटोमेशन और रिमोट मॉनिटरिंग के लिए बहुत उपयोगी बनाता है। आप एक मशीन पर किस्मेट चलाकर दूसरी मशीन से ब्राउज़र में डेटा देख सकते हो। Python स्क्रिप्ट्स से REST API कॉल करके ऑटोमेटेड रिपोर्ट्स बना सकते हो। Kismet का plugin system भी powerful है — custom capture sources और alert handlers add कर सकते हो। Community plugins Zigbee, SDR, और other protocols support करते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> किस्मेट केवल अपने नेटवर्क पर या अधिकृत पेनेट्रेशन टेस्टिंग में ही इस्तेमाल करें। पैसिव मोड भी हो तो वायरलेस मॉनिटरिंग बिना अनुमति के अवैध हो सकती है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत वायरलेस मॉनिटरिंग में 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है।
      </div>

      <h2>History of Kismet</h2>
      <p>
        किस्मेट की शुरुआत 2001 में हुई थी जब माइक केर्शॉ ने इसे एक सिंपल WiFi स्निफ़र के रूप में बनाया था। उस समय WiFi नेटवर्क्स बहुत कम थे और WEP एन्क्रिप्शन इस्तेमाल होता था। किस्मेट ने धीरे-धीरे अपनी क्षमताएं बढ़ाईं और सबसे पॉपुलर वायरलेस सिक्योरिटी टूल्स में से एक बन गया।
      </p>
      <p>
        2005 में इसमें Bluetooth सपोर्ट जोड़ा गया। 2010 में GPS इंटीग्रेशन आया जिससे वार्ड्राइविंग मैप बनाना आसान हुआ। 2018 में Kismet 2018 रिलीज़ हुई जिसमें वेब UI, REST API, और मल्टी-सोर्स कैप्चर जैसे फीचर्स जोड़े गए। आज किस्मेट सबसे पॉपुलर वायरलेस सिक्योरिटी टूल्स में से एक है।
      </p>
      <p>
        किस्मेट का ओपन सोर्स होना इसकी सबसे बड़ी ताकत है। Community ने कई प्लगइन्स और एक्सटेंशन बनाए हैं। यह GPL लाइसेंस के तहत आता है। GitHub पर इसके 4000+ स्टार्स हैं और एक्टिव डेवलपमेंट जारी है।
      </p>

      <h2>How Kismet Works?</h2>
      <p>
        किस्मेट नेटवर्क इंटरफ़ेस कार्ड (NIC) को मॉनिटर मोड में सेट करता है। मॉनिटर मोड में नेटवर्क कार्ड एयर में सभी पैकेट्स कैप्चर करता है — सिर्फ उन्हीं पैकेट्स को नहीं जो उसके लिए एड्रेस्ड हों। किस्मेट इन पैकेट्स को पार्स करता है और डिवाइसेज़, नेटवर्क्स, और ट्रैफ़िक पैटर्न्स पहचानता है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">किस्मेट सर्वर:</strong> मुख्य प्रोसेस जो पैकेट्स कैप्चर और प्रोसेस करता है</li>
        <li><strong className="text-white">कैप्चर सोर्सेज़:</strong> WiFi, Bluetooth, SDR इंटरफ़ेस से डेटा कलेक्ट करते हैं</li>
        <li><strong className="text-white">वेब UI:</strong> ब्राउज़र बेस्ड इंटरफ़ेस जो रियल-टाइम डेटा दिखाता है</li>
        <li><strong className="text-white">REST API:</strong> प्रोग्रामैटिक एक्सेस और ऑटोमेशन के लिए</li>
        <li><strong className="text-white">लॉगिंग इंजन:</strong> PCAP, KismetDB, और JSON फॉर्मेट में डेटा सेव करता है</li>
        <li><strong className="text-white">अलर्ट सिस्टम:</strong> सस्पीशियस एक्टिविटी डिटेक्ट करके अलर्ट भेजता है</li>
        <li><strong className="text-white">डिवाइस फिंगरप्रिंटिंग:</strong> डिवाइस का टाइप, मैन्युफैक्चरर, और OS पहचानता है</li>
        <li><strong className="text-white">चैनल हॉपिंग:</strong> ऑटोमैटिकली सभी चैनल्स स्कैन करता है</li>
      </ul>
      <p>
        किस्मेट 802.11 फ्रेम्स को पार्स करके SSID, BSSID, चैनल, एन्क्रिप्शन टाइप, सिग्नल स्ट्रेंथ, और क्लाइंट इन्फॉर्मेशन निकालता है। यह डिवाइस फिंगरप्रिंटिंग भी करता है — डिवाइस का टाइप (laptop, phone, IoT), मैन्युफैक्चरर, और OS पता कर सकता है।
      </p>
      <p>
        किस्मेट का data pipeline बहुत efficient है। Raw packets capture होते हैं, फिर protocol decoder उन्हें parse करता है, फिर device tracker new devices identify करता है, और finally data web UI और database में store होता है। यह पूरा process real-time होता है — कोई delay नहीं। KismetDB SQLite-based है जो fast queries support करता है।
      </p>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में किस्मेट प्री-इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो आसानी से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="किस्मेट इंस्टॉलेशन"
        code={`# apt से (काली में प्री-इंस्टॉल्ड):
sudo apt update
sudo apt install kismet

# सोर्स से (सबसे लेटेस्ट फीचर्स):
sudo apt install build-essential git libpcap-dev libnl-3-dev libnl-genl-3-dev libncurses5-dev libnm-dev libsqlite3-dev
git clone https://github.com/kismetwireless/kismet.git
cd kismet
./configure
make -j$(nproc)
sudo make install

# वर्जन चेक:
kismet --version

# मॉनिटर मोड सेटअप:
sudo airmon-ng start wlan0

# डिपेंडेंसी चेक:
kismet --version
# किस्मेट सर्वर और क्लाइंट दोनों इंस्टॉल होते हैं`}
      />

      <h2>Basic Usage</h2>
      <p>
        किस्मेट को शुरू करना आसान है — बस मॉनिटर मोड इंटरफ़ेस दो। वेब UI http://localhost:2501 पर एक्सेस होता है। पहली बार में username और password set करना होता है। वेब UI responsive है और mobile browsers पर भी काम करता है। Remote monitoring के लिए --listenon flag से specific interface bind कर सकते हो।
      </p>
      <CodeBlock
        title="किस्मेट शुरू करें"
        code={`# मॉनिटर मोड इनेबल करें पहले:
sudo airmon-ng start wlan0

# किस्मेट शुरू करें:
sudo kismet

# स्पेसिफिक इंटरफ़ेस के साथ:
sudo kismet -c wlan0mon

# कई इंटरफ़ेस के साथ:
sudo kismet -c wlan0mon -c wlan1mon

# वेब UI एक्सेस:
# ब्राउज़र में खोलें: http://localhost:2501

# पहली बार में लॉगिन सेट करना होगा

# हेडलेस मोड (वेब UI बिना):
sudo kismet -c wlan0mon --no-serve

# डेमन मोड (बैकग्राउंड):
sudo kismet -c wlan0mon -n`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-c</td><td className="py-2 px-3">कैप्चर सोर्स स्पेसिफाई करें</td><td className="py-2 px-3 font-mono text-xs">-c wlan0mon</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-C</td><td className="py-2 px-3">कॉन्फ़िग फाइल स्पेसिफाई करें</td><td className="py-2 px-3 font-mono text-xs">-C kismet.conf</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-g</td><td className="py-2 px-3">वेब UI पोर्ट स्पेसिफाई करें</td><td className="py-2 px-3 font-mono text-xs">-g 8080</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--gps-gpsd</td><td className="py-2 px-3">GPS डेमन से लोकेशन डेटा लें</td><td className="py-2 px-3 font-mono text-xs">--gps-gpsd</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--no-serve</td><td className="py-2 px-3">वेब UI डिसेबल (हेडलेस मोड)</td><td className="py-2 px-3 font-mono text-xs">--no-serve</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--log-prefix</td><td className="py-2 px-3">लॉग फाइल का नाम प्रीफ़िक्स</td><td className="py-2 px-3 font-mono text-xs">--log-prefix=scan</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-n</td><td className="py-2 px-3">डेमन मोड (बैकग्राउंड में चलें)</td><td className="py-2 px-3 font-mono text-xs">-n</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--override</td><td className="py-2 px-3">वार्निंग्स को ओवरराइड करें</td><td className="py-2 px-3 font-mono text-xs">--override</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--connect</td><td className="py-2 px-3">रिमोट किस्मेट सर्वर से कनेक्ट करें</td><td className="py-2 px-3 font-mono text-xs">--connect=host:port</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--listenon</td><td className="py-2 px-3">वेब UI किस इंटरफ़ेस पर लिसन करे</td><td className="py-2 px-3 font-mono text-xs">--listenon=0.0.0.0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--log-types</td><td className="py-2 px-3">लॉग फॉर्मेट स्पेसिफाई करें</td><td className="py-2 px-3 font-mono text-xs">--log-types=pcapng</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--daemonize</td><td className="py-2 px-3">डेमन मोड में रन करें</td><td className="py-2 px-3 font-mono text-xs">--daemonize</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t</td><td className="py-2 px-3">डेटाबेस टाइटल स्पेसिफाई करें</td><td className="py-2 px-3 font-mono text-xs">-t "My Scan"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--debug</td><td className="py-2 px-3">डिबग मोड इनेबल करें</td><td className="py-2 px-3 font-mono text-xs">--debug</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-s</td><td className="py-2 px-3">साइलेंट मोड (कम आउटपुट)</td><td className="py-2 px-3 font-mono text-xs">-s</td></tr>
          </tbody>
        </table>
      </div>

      <h2>WiFi Monitoring</h2>
      <p>
        किस्मेट का मुख्य काम WiFi नेटवर्क्स को मॉनिटर करना है। यह सभी 802.11 फ्रेम्स कैप्चर करता है और नेटवर्क्स, क्लाइंट्स, और ट्रैफ़िक को विज़ुअलाइज़ करता है। चैनल हॉपिंग ऑटोमैटिक होती है — सभी चैनल्स एक-एक करके स्कैन होते हैं।
      </p>
      <CodeBlock
        title="WiFi मॉनिटरिंग"
        code={`# WiFi मॉनिटरिंग शुरू करें:
sudo airmon-ng start wlan0
sudo kismet -c wlan0mon

# सभी चैनल्स स्कैन (चैनल हॉपिंग):
# किस्मेट ऑटोमैटिकली चैनल्स हॉप करता है

# स्पेसिफिक चैनल:
sudo kismet -c wlan0mon:type=linuxwifi,channel=6

# कई चैनल्स:
sudo kismet -c wlan0mon:type=linuxwifi,channels="1,6,11"

# 5GHz बैंड:
sudo kismet -c wlan0mon:type=linuxwifi,channels="36,40,44,48"

# हिडन SSID डिटेक्शन:
# किस्मेट प्रोब रिक्वेस्ट्स से हिडन नेटवर्क्स पता लगाता है

# 2.4GHz और 5GHz दोनों:
sudo kismet -c wlan0mon -c wlan1mon`}
      />

      <CodeBlock
        title="WiFi डेटा व्यू"
        code={`# वेब UI में (http://localhost:2501):

# Dashboard — सभी डिवाइसेज़ का ओवरव्यू
# Devices — डिटेल्ड डिवाइस लिस्ट
# WiFi Networks — SSID, एन्क्रिप्शन, क्लाइंट्स
# Channels — चैनल यूटिलाइज़ेशन ग्राफ़
# Packets — रियल-टाइम पैकेट व्यू

# हर नेटवर्क के लिए दिखता है:
# - SSID और BSSID
# - चैनल और फ़्रीक्वेंसी
# - एन्क्रिप्शन (WPA2, WPA3, WEP, Open)
# - कनेक्टेड क्लाइंट्स की संख्या
# - सिग्नल स्ट्रेंथ (dBm)
# - डेटा ट्रांसफ़र रेट
# - पहला और आखिरी दिखा समय`}
      />

      <h2>Bluetooth Monitoring</h2>
      <p>
        किस्मेट Bluetooth और BLE (Bluetooth Low Energy) डिवाइसेज़ को भी डिटेक्ट कर सकता है। Bluetooth एडाप्टर ज़रूरी है — अंतर्निहित या USB दोनों चलते हैं।
      </p>
      <CodeBlock
        title="Bluetooth मॉनिटरिंग"
        code={`# BLE सपोर्ट के लिए:
# ब्लूटूथ एडाप्टर ज़रूरी है

# ब्लूटूथ कैप्चर शुरू करें:
sudo kismet -c hci0:type=linuxbluetooth

# WiFi और Bluetooth दोनों:
sudo kismet -c wlan0mon -c hci0

# BLE डिवाइसेज़ डिटेक्ट होते हैं:
# - Smartwatches, फ़िटनेस ट्रैकर्स
# - Bluetooth speakers, हेडफ़ोन
# - IoT डिवाइसेज़
# - Beacons (iBeacon, Eddystone)

# हर डिवाइस के लिए:
# - MAC एड्रेस
# - डिवाइस नाम
# - डिवाइस टाइप
# - सिग्नल स्ट्रेंथ
# - मैन्युफैक्चरर
# - UUID (BLE beacons)`}
      />

      <h2>Web UI</h2>
      <p>
        मॉडर्न किस्मेट में एक पावरफुल वेब इंटरफ़ेस है जो ब्राउज़र में रियल-टाइम डेटा दिखाता है। रिमोट मशीन से भी एक्सेस कर सकते हो।
      </p>
      <CodeBlock
        title="वेब UI फ़ीचर्स"
        code={`# वेब UI एक्सेस करें:
# http://localhost:2501

# पहली बार लॉगिन सेटअप:
# यूज़रनेम और पासवर्ड प्रॉम्प्ट होगा

# वेब UI फ़ीचर्स:
# - Dashboard: सभी डिवाइसेज़ का ओवरव्यू
# - Devices: डिटेल्ड डिवाइस लिस्ट
# - WiFi Networks: नेटवर्क्स और क्लाइंट्स
# - Channels: चैनल यूटिलाइज़ेशन
# - Packets: रियल-टाइम पैकेट व्यू
# - Alerts: सिक्योरिटी अलर्ट्स
# - Data Sources: कैप्चर सोर्सेज़
# - Filters: डिवाइस फ़िल्टर

# रिमोट एक्सेस:
# --listenon फ्लैग से:
sudo kismet -c wlan0mon --listenon=0.0.0.0

# अब किसी भी डिवाइस से एक्सेस कर सकते हो:
# http://kismet-server-ip:2501`}
      />

      <h2>Logging and Output</h2>
      <p>
        किस्मेट कई फॉर्मेट्स में डेटा लॉग कर सकता है — KismetDB, PCAPNG, और JSON। हर फॉर्मेट का अपना फ़ायदा है।
      </p>
      <CodeBlock
        title="लॉगिंग फॉर्मेट्स"
        code={`# डिफ़ॉल्ट KismetDB (.kismet):
# SQLite बेस्ड डेटाबेस — सभी डेटा स्टोर

# PCAPNG फॉर्मेट:
# Wireshark में ओपन करने के लिए:
sudo kismet -c wlan0mon --log-types=pcapng

# JSON एक्सपोर्ट:
sudo kismet -c wlan0mon --log-types=json

# सभी फॉर्मेट्स:
sudo kismet -c wlan0mon --log-types=kismet,pcapng,json

# लॉग प्रीफ़िक्स:
sudo kismet -c wlan0mon --log-prefix=my_scan

# लॉग डायरेक्ट्री:
# ~/.kismet/ में सेव होता है

# KismetDB टूल्स:
kismetdb_to_pcap --in scan.kismet --out scan.pcap
kismetdb_to_json --in scan.kismet --out devices.json
kismetdb_stats --in scan.kismet`}
      />

      <h2>Alert Configuration</h2>
      <p>
        किस्मेट में अलर्ट सिस्टम है जो सस्पीशियस एक्टिविटी डिटेक्ट करता है। कॉन्फ़िग फाइल में अलर्ट कस्टमाइज़ कर सकते हो।
      </p>
      <CodeBlock
        title="अलर्ट सेटअप"
        code={`# किस्मेट ये अलर्ट्स दे सकता है:
# - Deauthentication attack
# - Evil twin AP
# - Unauthorized device
# - Channel flooding
# - Spoofed MAC address
# - WPS brute force attempt

# कॉन्फ़िग फाइल में अलर्ट सेट करें:
# /etc/kismet/kismet_alerts.conf

# अलर्ट थ्रेशहोल्ड बदलें:
# alert=APSPOOF,5/min,1/sec

# अलर्ट लॉग:
# अलर्ट्स KismetDB में स्टोर होते हैं
# वेब UI में Alerts सेक्शन में दिखते हैं

# इमेल अलर्ट (कस्टम स्क्रिप्ट से):
# Python स्क्रिप्ट से Slack/Email अलर्ट`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        किस्मेट की REST API से ऑटोमेशन बहुत आसान है। Python, bash, या किसी भी भाषा से API कॉल कर सकते हो।
      </p>
      <CodeBlock
        title="REST API"
        code={`# API एक्सेस (वेब UI चालू होना चाहिए):
# http://localhost:2501/devices/views/devices.json

# curl से डिवाइसेज़ लिस्ट:
curl -s http://localhost:2501/devices/views/devices.json | python3 -m json.tool

# सभी WiFi नेटवर्क्स:
curl -s http://localhost:2501/devices/views/ssids.json

# ऑथेंटिकेशन:
curl -s -H "Cookie: KISMET=your_session_cookie" http://localhost:2501/devices/views/devices.json

# Python से:
import requests

api_url = "http://localhost:2501"
cookies = {"KISMET": "session_cookie"}

devices = requests.get(f"{api_url}/devices/views/devices.json", cookies=cookies)
for device in devices.json():
    print(device.get("kismet_device_base_name", "Unknown"))`}
      />

      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट"
        code={`#!/bin/bash
# किस्मेट ऑटोमेशन — नेटवर्क सर्वे

# किस्मेट बैकग्राउंड में शुरू करें:
sudo kismet -c wlan0mon --no-serve -n

# 5 मिनट तक स्कैन करें:
sleep 300

# डेटा एक्सपोर्ट करें:
# KismetDB फाइल लोकेशन: ~/.kismet/

# PCAP निकालें:
kismetdb_to_pcap --in ~/.kismet/Kismet-*.kismet --out scan.pcap

# JSON रिपोर्ट:
kismetdb_to_json --in ~/.kismet/Kismet-*.kismet --out devices.json

# किस्मेट बंद करें:
sudo killall kismet`}
      />

      <CodeBlock
        title="Python REST API स्क्रिप्ट"
        code={`#!/usr/bin/env python3
# किस्मेट REST API से डेटा निकालें

import requests
import json

API_URL = "http://localhost:2501"
COOKIES = {"KISMET": "your_session_cookie"}

# सभी डिवाइसेज़:
devices = requests.get(f"{API_URL}/devices/views/devices.json", cookies=COOKIES).json()

# WiFi नेटवर्क्स फ़िल्टर करें:
wifi_networks = [d for d in devices if d.get("kismet_device_base_type") == "Wi-Fi AP"]

print(f"कुल WiFi नेटवर्क्स: {len(wifi_networks)}")

for net in wifi_networks:
    ssid = net.get("kismet_device_base_name", "Hidden")
    encryption = net.get("kismet_device_base_crypt", "Unknown")
    clients = len(net.get("kismet_device_base_clients", []))
    signal = net.get("kismet_device_base_signal", {}).get("kismet_signal_last_signal", 0)
    print(f"  SSID: {ssid}, Encryption: {encryption}, Clients: {clients}, Signal: {signal}dBm")`}
      />

      <h2>Wardriving with Kismet</h2>
      <p>
        किस्मेट GPS के साथ वार्ड्राइविंग के लिए बेस्ट टूल है। GPS कॉर्डिनेट्स हर डिवाइस के साथ सेव होते हैं।
      </p>
      <CodeBlock
        title="वार्ड्राइविंग सेटअप"
        code={`# GPS डेमन शुरू करें:
sudo gpsd /dev/ttyUSB0

# किस्मेट GPS के साथ:
sudo kismet -c wlan0mon --gps-gpsd

# वार्ड्राइविंग के बाद:
# लॉग फाइल में GPS कॉर्डिनेट्स सेव होते हैं

# Wigle.net पर अपलोड करें:
# KismetDB फाइल Wigle.net पर अपलोड कर सकते हो
# इससे ग्लोबल WiFi मैप बनता है

# GPS डेटा एक्सपोर्ट:
kismetdb_to_kml --in scan.kismet --out wardrive.kml

# Google Earth में ओपन करो:
# wardrive.kml फाइल Google Earth में खोलें

# नोट: केवल अपने क्षेत्र में वार्ड्राइव करें
# और केवल पब्लिक जानकारी अपलोड करें`}
      />

      <h2>Comparison with Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Kismet</th>
              <th className="text-left py-2 px-3 text-neon-green">Aircrack-ng</th>
              <th className="text-left py-2 px-3 text-neon-green">Wireshark</th>
              <th className="text-left py-2 px-3 text-neon-green">Wifite</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">पैसिव मोड</td><td className="py-2 px-3">हाँ (पूरी तरह)</td><td className="py-2 px-3">आंशिक</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं (एक्टिव)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">वेब UI</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">GUI है</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Bluetooth</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">IDS</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GPS</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">REST API</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">अटैक</td><td className="py-2 px-3">नहीं (सिर्फ मॉनिटर)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">वार्ड्राइविंग</td><td className="py-2 px-3">हाँ (GPS)</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">मल्टी-प्रोटोकॉल</td><td className="py-2 px-3">WiFi + BT + Zigbee</td><td className="py-2 px-3">सिर्फ WiFi</td><td className="py-2 px-3">सभी</td><td className="py-2 px-3">सिर्फ WiFi</td></tr>
            <tr><td className="py-2 px-3 text-white">कीमत</td><td className="py-2 px-3">फ्री (GPL)</td><td className="py-2 px-3">फ्री (GPL)</td><td className="py-2 px-3">फ्री (GPL)</td><td className="py-2 px-3">फ्री (GPL)</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'मॉनिटर मोड नहीं बन रहा', a: 'USB WiFi एडाप्टर मॉनिटर मोड सपोर्ट करना चाहिए। chipsets चेक करो — Atheros या Ralink सबसे अच्छे हैं। airmon-ng check kill पहले चलाओ।' },
          { q: 'वेब UI नहीं खुल रहा', a: 'पोर्ट 2501 चेक करो। फ़ायरवॉल ब्लॉक कर सकता है। sudo kismet -c wlan0mon --listenon=0.0.0.0 से सभी इंटरफ़ेस पर लिसन करो।' },
          { q: 'बहुत कम डिवाइसेज़ दिख रहे', a: 'चैनल हॉपिंग चेक करो — सभी चैनल्स कवर होने चाहिए। एंटीना चेक करो। 5GHz सपोर्ट वाला एडाप्टर यूज़ करो।' },
          { q: 'GPS काम नहीं कर रहा', a: 'gpsd डेमन चालू होना चाहिए। /dev/ttyUSB0 परमिशन चेक करो। sudo usermod -aG dialout $user करो।' },
          { q: 'किस्मेट क्रैश हो रहा', a: 'मेमोरी चेक करो — बड़े नेटवर्क्स में RAM ज़्यादा लगती है। लॉग फाइल चेक करो: ~/.kismet/debug.log।' },
          { q: 'विंडोज़ पर चल सकता है?', a: 'नहीं, किस्मेट सिर्फ लिनक्स/बीएसडी/macOS पर चलता है। विंडोज़ के लिए VM में काली लिनक्स यूज़ करो।' },
          { q: 'किस्मेट बहुत स्लो चल रहा', a: 'RAM बढ़ाओ। चैनल हॉपिंग स्पीड कम करो। कम इंटरफ़ेस यूज़ करो। SQLite डेटाबेस बड़ा हो सकता है — पुराने लॉग्स डिलीट करो।' },
          { q: 'WPA हैंडशेप कैप्चर नहीं हो रहा', a: 'क्लाइंट को डिस्कनेक्ट और रीकनेक्ट होना पड़ेगा। डीऑथेंटिकेशन अटैक Aircrack-ng से करो और किस्मेट कैप्चर करेगा।' },
          { q: 'बहुत ज़्यादा false alerts आ रहे', a: 'अलर्ट थ्रेशहोल्ड बढ़ाओ। कॉन्फ़िग फाइल में alert rate कम करो। Known devices को whitelist में डालो।' },
          { q: 'PCAP फाइल बहुत बड़ी हो गई', a: 'लॉग rotation setup करो। Specific channels ही scan करो। Filter लगाओ unwanted traffic हटाने के लिए।' },
          { q: 'किस्मेट Zigbee devices नहीं दिखा रहा', a: 'TI CC2531 USB dongle चाहिए। Dongle में correct firmware flash होना चाहिए। kismet.conf में Zigbee source add करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        किस्मेट खुद एक डिफेंसिव टूल है — इसे IDS के रूप में भी इस्तेमाल कर सकते हो:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>किस्मेट को IDS मोड में चलाओ — सस्पीशियस एक्टिविटी के लिए मॉनिटर करो</li>
        <li>डीऑथेंटिकेशन अटैक्स डिटेक्ट करता है — अलर्ट मिलता है</li>
        <li>Evil Twin AP डिटेक्ट करता है — डुप्लिकेट BSSID पहचानता है</li>
        <li>अनअथोराइज़्ड डिवाइसेज़ डिटेक्ट करता है — नए MAC एड्रेसेज़ फ्लैग करता है</li>
        <li>मैक स्पूफ़िंग डिटेक्ट करता है — MAC चेंजेज़ मॉनिटर करता है</li>
        <li>रेगुलर स्कैन करो — बेसलाइन बनाओ और एनॉमलीज़ ट्रैक करो</li>
        <li>लॉग्स रिव्यू करो — रेगुलर बेसिस पर अलर्ट्स चेक करो</li>
        <li>कॉन्फ़िग फाइल में अलर्ट थ्रेशहोल्ड कस्टमाइज़ करो</li>
        <li>वेब UI में Alerts सेक्शन में रियल-टाइम अलर्ट्स देखो</li>
        <li>अलर्ट्स को Python स्क्रिप्ट से Slack/Email पर भेजो</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        किस्मेट सीखने के लिए सेफ लैब बनाना ज़रूरी है:
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# ज़रूरी सामान:
# 1. WiFi एडाप्टर (मॉनिटर मोड सपोर्ट)
#    - Atheros AR9271 (सबसे अच्छा)
#    - Ralink RT5370
#    - Alfa AWUS036ACH
# 2. GPS डोंगल (वार्ड्राइविंग के लिए)
# 3. राउटर (टेस्ट नेटवर्क के लिए)
# 4. Bluetooth एडाप्टर (BLE टेस्टिंग के लिए)

# टेस्ट नेटवर्क बनाएं:
# पुराना राउटर यूज़ करो
# Open, WPA2, WPA3 — अलग-अलग एन्क्रिप्शन टेस्ट करो

# मॉनिटर मोड सेटअप:
sudo airmon-ng check kill
sudo airmon-ng start wlan0

# किस्मेट शुरू करें:
sudo kismet -c wlan0mon

# स्कैन करो और डेटा एनालाइज़ करो:
# वेब UI में नेटवर्क्स देखो
# PCAP फाइल Wireshark में एनालाइज़ करो

# प्रैक्टिस एक्सरसाइज़:
# 1. सभी WiFi नेटवर्क्स खोजो
# 2. हिडन SSID पता करो
# 3. क्लाइंट डिवाइसेज़ पहचानो
# 4. WPA हैंडशेप कैप्चर करो
# 5. अलर्ट्स कॉन्फ़िग करो`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड किस्मेट"
        code={`# रिमोट कैप्चर:
# एक मशीन पर किस्मेट सर्वर:
sudo kismet -c wlan0mon --listenon=0.0.0.0

# दूसरी मशीन से कनेक्ट:
# ब्राउज़र में http://server-ip:2501

# मल्टी-सोर्स कैप्चर:
sudo kismet -c wlan0mon -c wlan1mon -c hci0

# कस्टम प्लगइन्स:
# /usr/lib/kismet/ में प्लगइन्स
# .so फाइल्स के रूप में लोड होते हैं

# किस्मेटDB टूल्स:
kismetdb_to_pcap --in scan.kismet --out scan.pcap
kismetdb_to_json --in scan.kismet --out devices.json
kismetdb_stats --in scan.kismet
kismetdb_to_kml --in scan.kismet --out map.kml

# चैनल लॉक:
sudo kismet -c wlan0mon:type=linuxwifi,channel=6
# सिर्फ चैनल 6 मॉनिटर करें

# फ़िल्टर:
# वेब UI में डिवाइस फ़िल्टर
# MAC रेंज, सिग्नल, टाइप से फ़िल्टर

# Zigbee मॉनिटरिंग:
# TI CC2531 USB डोंगल चाहिए
sudo kismet -c cc2531:type=zigbee`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        एक penetration testing team को airport WiFi infrastructure का security audit करना था। उन्होंने Kismet को passive mode में 48 घंटे तक चलाया। Kismet ने 2,000+ unique devices detect किए जिनमें से 15 rogue access points थे। एक evil twin AP भी मिला जो airport के official SSID से similar name use कर रहा था। GPS coordinates के साथ team ने exact location identify की और physical security team को report किया।
      </p>
      <p>
        एक corporate security team ने Kismet को IDS के रूप में deploy किया। उन्होंने Kismet को 24/7 run किया और Slack integration setup किया — suspicious activity detect होने पर automatic alert जाता था। एक दिन Kismet ने deauthentication attack detect किया — कोई employee के WiFi credentials steal करने की कोशिश कर रहा था। Kismet alert से team ने immediately respond किया और attacker को physically locate किया।
      </p>
      <p>
        एक security researcher ने Kismet से smart home IoT devices का survey किया। उसने residential area में Kismet चलाया और 500+ IoT devices detect किए — smart locks, cameras, thermostats, voice assistants। Study से पता चला कि 40% devices default credentials use कर रही थीं और 25% devices unencrypted communication कर रही थीं। यह research IoT security awareness बढ़ाने में helpful रही।
      </p>
      <p>
        एक university campus security team ने Kismet deploy किया unauthorized access points detect करने के लिए। Students अक्सर personal routers लगा देते थे जो campus network को compromise कर सकते थे। Kismet ने first week में 30+ unauthorized APs detect किए। Team ने automated alerting setup किया और rogue APs की संख्या 90% कम हो गई।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Kismet अकेले monitoring tool है — attack capabilities नहीं हैं। इसलिए इसे other tools के साथ integrate करना ज़रूरी है। Aircrack-ng, Wireshark, Bettercap, Nmap — सबके साथ Kismet का data use कर सकते हो।
      </p>
      <CodeBlock
        title="Kismet + Aircrack-ng Combo"
        code={`# Kismet से target find, Aircrack-ng से attack:

# Terminal 1: Kismet start करो:
sudo airmon-ng start wlan0
sudo kismet -c wlan0mon

# Terminal 2: Target identify करो (वेब UI से):
# http://localhost:2501 → Devices → Target network note करो

# Terminal 3: Aircrack-ng attack:
# Target BSSID और channel note करो:
sudo airodump-ng --bssid AA:BB:CC:DD:EE:FF -c 6 -w capture wlan0mon

# WPA handshake capture:
sudo aireplay-ng --deauth 5 -a AA:BB:CC:DD:EE:FF wlan0mon

# Handshake crack:
airrock-ng -w wordlist.txt capture-01.cap

# Kismet PCAP भी use कर सकते हो:
kismetdb_to_pcap --in ~/.kismet/scan.kismet --out kismet-capture.pcap
airrock-ng -w wordlist.txt kismet-capture.pcap`}
      />
      <CodeBlock
        title="Kismet + Wireshark Deep Analysis"
        code={`# Kismet capture + Wireshark analysis:

# Kismet से PCAP export:
kismetdb_to_pcap --in ~/.kismet/Kismet-*.kismet --out full-capture.pcap

# Wireshark में open करो:
wireshark full-capture.pcap

# Wireshark filters for Kismet data:
# Specific network:
wlan.bssid == AA:BB:CC:DD:EE:FF

# Probe requests (hidden networks):
wlan.fc.type_subtype == 0x04

# Deauthentication frames (attacks):
wlan.fc.type_subtype == 0x0c

# Beacon frames (APs):
wlan.fc.type_subtype == 0x08

# Encrypted data:
wlan.fc.protected == 1

# Kismet JSON data + Wireshark:
kismetdb_to_json --in ~/.kismet/scan.kismet --out devices.json
python3 -c "import json; data=json.load(open('devices.json')); print(len(data))"`}
      />
      <CodeBlock
        title="Kismet + Bettercap Integration"
        code={`# Kismet monitoring + Bettercap active attacks:

# Terminal 1: Kismet (passive monitoring):
sudo kismet -c wlan0mon --listenon=0.0.0.0

# Terminal 2: Bettercap (active attacks):
sudo bettercap -iface wlan0

# Bettercap में Kismet data import करो:
# Kismet REST API से target list लो:
curl -s http://localhost:2501/devices/views/ssids.json | python3 -m json.tool

# Bettercap ARP spoofing:
set arp.spoof.targets 192.168.1.100
arp.spoof on

# Kismet + Bettercap automated:
#!/bin/bash
# Kismet start (background):
sudo kismet -c wlan0mon --no-serve -n &
KISMET_PID=$!
sleep 10

# Kismet API से targets extract करो:
TARGETS=$(curl -s http://localhost:2501/devices/views/devices.json | python3 -c "
import sys, json
devices = json.load(sys.stdin)
for d in devices:
    if d.get('kismet_device_base_type') == 'Wi-Fi Client':
        print(d.get('kismet_device_base_mac', ''))
" | head -5)

# Bettercap start:
sudo bettercap -iface wlan0 -eval "set arp.spoof.targets $TARGETS; arp.spoof on"

# Cleanup:
kill $KISMET_PID`}
      />
      <CodeBlock
        title="Kismet + Python Automation"
        code={`#!/usr/bin/env python3
# kismet_monitor.py — Automated Kismet monitoring

import requests
import json
import time
import smtplib
from email.mime.text import MIMEText

API_URL = "http://localhost:2501"
COOKIES = {"KISMET": "your_session_cookie"}

def get_devices():
    r = requests.get(f"{API_URL}/devices/views/devices.json", cookies=COOKIES)
    return r.json()

def get_alerts():
    r = requests.get(f"{API_URL}/alerts/views/alerts.json", cookies=COOKIES)
    return r.json()

def send_alert(message):
    # Email alert
    msg = MIMEText(message)
    msg['Subject'] = 'Kismet Security Alert'
    msg['From'] = 'kismet@local'
    msg['To'] = 'admin@local'
    # smtplib send (configure SMTP first)

def monitor():
    known_devices = set()
    while True:
        devices = get_devices()
        current_macs = {d.get('kismet_device_base_mac') for d in devices}

        # New device detection:
        new_devices = current_macs - known_devices
        if new_devices:
            print(f"[!] New devices detected: {new_devices}")
            send_alert(f"New devices: {new_devices}")

        # Alert check:
        alerts = get_alerts()
        for alert in alerts:
            print(f"[ALERT] {alert.get('kismet_alert_text', 'Unknown')}")

        known_devices = current_macs
        time.sleep(60)

if __name__ == "__main__":
    monitor()`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Kismet resource-intensive हो सकता है बड़े networks में। RAM, CPU, और storage optimize करना ज़रूरी है। Long-term monitoring में database size बढ़ता रहता है — cleanup strategy रखो।
      </p>
      <CodeBlock
        title="Kismet Performance Optimization"
        code={`# Memory optimization:

# 1. Channel hopping speed reduce करो (less CPU):
sudo kismet -c wlan0mon:type=linuxwifi,hoprate=2
# Default: 5 channels/sec → 2 channels/sec

# 2. Specific channels only (less data):
sudo kismet -c wlan0mon:type=linuxwifi,channels="1,6,11"
# सिर्फ 3 main channels scan करो

# 3. Device limit (memory cap):
# kismet.conf में:
# maxdevices=5000

# 4. Database size management:
# Old data auto-cleanup:
# kismet.conf में:
# keep_databasetime=86400
# 24 घंटे से पुराना data auto-delete

# 5. Log rotation:
# ~/.kismet/ directory monitor करो:
du -sh ~/.kismet/

# Old logs cleanup:
find ~/.kismet/ -name "*.kismet" -mtime +7 -delete

# 6. SSD use करो (faster I/O):
# KismetDB SQLite है — SSD पर बेहतर performance

# 7. RAM allocation:
# Minimum: 2GB
# Recommended: 4GB+
# Large networks: 8GB+

# 8. CPU optimization:
# kismet.conf में:
# allowkeyupdate=5
# 5 seconds between key updates (less CPU)`}
      />
      <CodeBlock
        title="Long-term Monitoring Setup"
        code={`# 24/7 Kismet monitoring setup:

# Systemd service create करो:
sudo nano /etc/systemd/system/kismet-monitor.service

# Content:
[Unit]
Description=Kismet Wireless Monitor
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/kismet -c wlan0mon --no-serve -n --log-types=kismet,pcapng
Restart=always
RestartSec=10
User=root

[Install]
WantedBy=multi-user.target

# Enable करो:
sudo systemctl enable kismet-monitor
sudo systemctl start kismet-monitor

# Log rotation script:
#!/bin/bash
# /etc/cron.daily/kismet-cleanup
find ~/.kismet/ -name "*.kismet" -mtime +30 -delete
find ~/.kismet/ -name "*.pcapng" -mtime +7 -delete

# Monitor script:
#!/bin/bash
# Check Kismet status
if systemctl is-active kismet-monitor; then
    echo "[+] Kismet running"
    echo "[+] Devices: $(curl -s http://localhost:2501/devices/views/devices.json | python3 -c 'import sys,json; print(len(json.load(sys.stdin)))')"
else
    echo "[-] Kismet stopped, restarting..."
    sudo systemctl restart kismet-monitor
fi`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Kismet data को analyze करके meaningful reports बनाना ज़रूरी है। Clients को network security posture दिखाने के लिए clear, actionable reports चाहिए। KismetDB, PCAP, और JSON — तीनों formats से data extract कर सकते हो। Professional reports में network map, encryption analysis, rogue device list, और recommendations include करो। Automated report generation से time बचता है और consistency आती है।
      </p>
      <CodeBlock
        title="Kismet Report Generation"
        code={`#!/usr/bin/env python3
# kismet_report.py — Generate WiFi audit report

import json
import subprocess
from datetime import datetime

KISMET_DB = "/root/.kismet/Kismet-20240101-12-00-00-1.kismet"

def extract_data():
    # KismetDB to JSON:
    subprocess.run([
        "kismetdb_to_json", "--in", KISMET_DB, "--out", "/tmp/kismet_data.json"
    ])

    with open("/tmp/kismet_data.json") as f:
        return json.load(f)

def generate_report(devices):
    report = []
    report.append("=== WiFi Security Audit Report ===")
    report.append(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
    report.append(f"Total Devices: {len(devices)}")
    report.append("")

    # WiFi Networks:
    aps = [d for d in devices if d.get('kismet_device_base_type') == 'Wi-Fi AP']
    report.append(f"WiFi Networks: {len(aps)}")
    for ap in aps:
        ssid = ap.get('kismet_device_base_name', 'Hidden')
        enc = ap.get('kismet_device_base_crypt', 'Unknown')
        clients = len(ap.get('kismet_device_base_clients', []))
        report.append(f"  SSID: {ssid}, Encryption: {enc}, Clients: {clients}")

    # Open networks (vulnerable):
    open_nets = [ap for ap in aps if 'Open' in str(ap.get('kismet_device_base_crypt', ''))]
    report.append(f"")
    report.append(f"Open Networks (Vulnerable): {len(open_nets)}")
    for net in open_nets:
        report.append(f"  WARNING: {net.get('kismet_device_base_name', 'Hidden')} is OPEN")

    # Hidden networks:
    hidden = [ap for ap in aps if not ap.get('kismet_device_base_name')]
    report.append(f"")
    report.append(f"Hidden Networks: {len(hidden)}")

    return "\\n".join(report)

devices = extract_data()
report = generate_report(devices)
print(report)

with open("/tmp/wifi_audit_report.txt", "w") as f:
    f.write(report)`}
      />
      <CodeBlock
        title="Kismet Data Visualization"
        code={`#!/usr/bin/env python3
# kismet_visualize.py — Kismet data visualization

import json
import matplotlib.pyplot as plt
from collections import Counter

# Load Kismet JSON data:
with open("/tmp/kismet_data.json") as f:
    devices = json.load(f)

# Encryption distribution:
enc_types = [d.get('kismet_device_base_crypt', 'Unknown') for d in devices]
enc_count = Counter(enc_types)

plt.figure(figsize=(10, 6))
plt.bar(enc_count.keys(), enc_count.values())
plt.title('Encryption Type Distribution')
plt.xlabel('Encryption')
plt.ylabel('Count')
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('/tmp/encryption_distribution.png')
print("[+] Chart saved: /tmp/encryption_distribution.png")

# Signal strength distribution:
signals = []
for d in devices:
    sig = d.get('kismet_device_base_signal', {}).get('kismet_signal_last_signal', 0)
    if sig:
        signals.append(sig)

plt.figure(figsize=(10, 6))
plt.hist(signals, bins=30, edgecolor='black')
plt.title('Signal Strength Distribution')
plt.xlabel('Signal (dBm)')
plt.ylabel('Count')
plt.savefig('/tmp/signal_distribution.png')
print("[+] Chart saved: /tmp/signal_distribution.png")

# Timeline — devices over time:
# KismetDB में timestamp data होता है
# kismetdb_stats से extract करो:
# kismetdb_stats --in scan.kismet`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या किस्मेट फ्री है?', a: 'हाँ, पूरी तरह फ्री और ओपन सोर्स (GPL)। कमर्शियल यूज़ भी फ्री।' },
          { q: 'क्या किस्मेट अटैक कर सकता है?', a: 'नहीं, किस्मेट सिर्फ मॉनिटरिंग और डिटेक्शन टूल है। अटैक के लिए Aircrack-ng या Wifite यूज़ करो।' },
          { q: 'कौन सा WiFi एडाप्टर बेस्ट है?', a: 'Atheros AR9271 चिपसेट वाले सबसे अच्छे — Alfa AWUS036NHA रेकमेंडेड।' },
          { q: 'विंडोज़ पर चल सकता है?', a: 'नहीं, किस्मेट सिर्फ लिनक्स, macOS, और BSD पर चलता है। विंडोज़ के लिए VM यूज़ करो।' },
          { q: 'क्या डिटेक्ट हो सकता है?', a: 'पैसिव मोड में बहुत मुश्किल है। कोई पैकेट सेंड नहीं करता। लेकिन वायरलेस इंटरफ़ेस एक्टिविटी से पता चल सकता है।' },
          { q: 'कितने डिवाइसेज़ ट्रैक कर सकता है?', a: 'RAM पर डिपेंड करता है। 4GB RAM पर 1000+ डिवाइसेज़ आराम से। बड़े नेटवर्क्स के लिए 8GB+ रेकमेंडेड।' },
          { q: 'किस्मेट कितने चैनल्स एक साथ मॉनिटर कर सकता है?', a: 'एक एडाप्टर एक चैनल। कई एडाप्टर्स लगाओ तो कई चैनल्स एक साथ। 2.4GHz और 5GHz दोनों के लिए अलग एडाप्टर चाहिए।' },
          { q: 'Zigbee कैसे मॉनिटर करें?', a: 'Zigbee के लिए अलग हार्डवेयर चाहिए — TI CC2531 USB डोंगल। किस्मेट Zigbee सपोर्ट करता है लेकिन अलग एडाप्टर ज़रूरी है।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">airodump-ng</td><td className="py-2 px-3">WiFi स्कैनिंग</td><td className="py-2 px-3">Aircrack-ng सूट का हिस्सा</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wireshark</td><td className="py-2 px-3">पैकेट एनालिसिस</td><td className="py-2 px-3">बेस्ट पैकेट एनालाइज़र</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wifite</td><td className="py-2 px-3">ऑटोमेटेड अटैक</td><td className="py-2 px-3">वाईफाई क्रैकिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wash</td><td className="py-2 px-3">WPS स्कैनिंग</td><td className="py-2 px-3">WPS वल्नरेबल नेटवर्क्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Horst</td><td className="py-2 px-3">लाइटवेट स्कैनर</td><td className="py-2 px-3">टर्मिनल बेस्ड</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Airgeddon</td><td className="py-2 px-3">WiFi ऑटोमेशन</td><td className="py-2 px-3">मल्टी-अटैक फ्रेमवर्क</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">WiFi Explorer</td><td className="py-2 px-3">नेटवर्क एनालिसिस</td><td className="py-2 px-3">macOS के लिए</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Vistumbler</td><td className="py-2 px-3">WiFi स्कैनिंग</td><td className="py-2 px-3">विंडोज़ के लिए</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>किस्मेट पैसिव मोड में काम करता है — कोई डिटेक्ट नहीं कर सकता</li>
          <li>GPS के साथ इस्तेमाल करो ताकि नेटवर्क लोकेशंस मैप पर दिखें</li>
          <li>Aircrack-ng के साथ कॉम्बो करो — किस्मेट से टार्गेट ढूंढो, फिर Aircrack-ng से अटैक करो</li>
          <li>वेब UI से रिमोट मॉनिटरिंग करो — एक मशीन पर किस्मेट, दूसरी पर ब्राउज़र</li>
          <li>लॉग्स KismetDB में सेव करो — बाद में एनालिसिस कर सकते हो</li>
          <li>JSON आउटपुट से Python स्क्रिप्ट्स से ऑटोमेटेड रिपोर्ट्स बनाओ</li>
          <li>Wigle.net पर KismetDB अपलोड करो — ग्लोबल WiFi मैप में contribute करो</li>
          <li>कई एडाप्टर्स use करो — 2.4GHz और 5GHz दोनों बैंड्स एक साथ मॉनिटर करो</li>
          <li>KismetDB files बड़े हो सकते हैं — regular cleanup करो और purani files archive करो</li>
          <li>Channel hopping speed adjust करो — fast hopping से ज़्यादा devices detect होते हैं लेकिन CPU ज़्यादा लगता है</li>
          <li>Kismet को IDS के रूप में deploy करो — 24/7 monitoring से security incidents जल्दी detect होते हैं</li>
          <li>Python scripts से Kismet REST API automate करो — custom alerts और reports बनाओ</li>
          <li>Systemd service बनाओ Kismet के लिए — reboot के बाद भी automatically शुरू होगा</li>
          <li>WPA3 networks को भी Kismet detect करता है — encryption type वेब UI में दिखता है</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> किस्मेट एक शक्तिशाली वायरलेस मॉनिटरिंग टूल है। इसका इस्तेमाल केवल अपने नेटवर्क पर या अधिकृत पेनेट्रेशन टेस्टिंग में ही करें। बिना अनुमति के वायरलेस मॉनिटरिंग अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत वायरलेस मॉनिटरिंग में 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है।
      </div>
    </TutorialLayout>
  )
}
