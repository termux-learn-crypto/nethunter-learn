import { Link } from 'react-router-dom'
import TutorialLayout from '../components/TutorialLayout'
import CodeBlock from '../components/CodeBlock'

export default function Installation() {
  return (
    <TutorialLayout
      title="इंस्टॉलेशन गाइड"
      subtitle="काली नेटहंटर को अपने एंड्रॉइड डिवाइस पर इंस्टॉल करें"
      icon="📱"
      next={{ to: '/wifi', label: 'वाईफाई हैकिंग' }}
    >
      <h2>क्या है काली नेटहंटर?</h2>
      <p>
        काली नेटहंटर एक मोबाइल पेनिट्रेशन टेस्टिंग प्लेटफॉर्म है जो काली लिनक्स पर आधारित है। यह आपके एंड्रॉइड फोन को एक शक्तिशाली हैकिंग मशीन में बदल देता है। नेटहंटर में काली लिनक्स के 600+ सुरक्षा टूल्स हैं जो आप सीधे अपने फोन से चला सकते हैं। यह ऑफेंसिव सिक्योरिटी (वही टीम जो काली लिनक्स बनाती है) द्वारा विकसित किया गया है।
      </p>
      <p>
        नेटहंटर का पहला संस्करण 2014 में आया था और तब से यह लगातार विकसित हो रहा है। आज यह सुरक्षा पेशेवरों, एथिकल हैकर्स, शोधकर्ताओं, और छात्रों में दुनिया भर में बहुत लोकप्रिय है। इससे आप वाईफाई अटैक, ब्लूटूथ टेस्टिंग, पेलोड जनरेशन, और बहुत कुछ कर सकते हैं — सब कुछ अपने एंड्रॉइड फोन से!
      </p>

      <div className="info-box mb-6">
        <strong>💡 जानकारी:</strong> नेटहंटर दो तरह का आता है — <strong>नेटहंटर (रूट)</strong> जिसमें सभी फीचर्स हैं लेकिन रूटेड डिवाइस चाहिए, और <strong>नेटहंटर रूटलेस</strong> जो बिना रूट के काम करता है लेकिन सीमित फीचर्स हैं। अगर आप शुरुआती हैं तो पहले रूटलेस ट्राई करें।
      </div>

      <h2>इंस्टॉल करने से पहले क्या चाहिए (पूर्वापेक्षाएं)</h2>
      <p>
        नेटहंटर इंस्टॉल करने से पहले आपको कुछ चीज़ें तैयार रखनी होंगी। अगर यह चीज़ें नहीं हैं तो इंस्टॉलेशन फेल हो सकती है या डिवाइस ब्रिक हो सकता है, तो ध्यान से पढ़ें:
      </p>
      <ul>
        <li><strong>एंड्रॉइड डिवाइस:</strong> कोई भी एंड्रॉइड फोन या टैबलेट। स्मूथ एक्सपीरियंस के लिए न्यूनतम 4GB RAM अनुशंसित है।</li>
        <li><strong>स्टोरेज स्पेस:</strong> कम से कम 4GB फ्री स्टोरेज चाहिए। पूरा नेटहंटर इंस्टॉल करने के लिए 8GB+ बेहतर है।</li>
        <li><strong>अनलॉक्ड बूटलोडर:</strong> पूरे नेटहंटर के लिए बूटलोडर अनलॉक होना चाहिए। बिना बूटलोडर अनलॉक के आप सिर्फ रूटलेस वर्शन उपयोग कर सकते हैं।</li>
        <li><strong>TWRP रिकवरी:</strong> कस्टम रिकवरी चाहिए पूरी इंस्टॉलेशन के लिए। TWRP सबसे लोकप्रिय और विश्वसनीय है।</li>
        <li><strong>रूट एक्सेस (Magisk):</strong> पूरे फीचर्स के लिए Magisk से रूटेड डिवाइस चाहिए। Magisk सिस्टमलेस रूट देता है जो SafetyNet पास करता है।</li>
        <li><strong>स्टेबल वाईफाई:</strong> नेटहंटर फाइलें डाउनलोड करने के लिए तेज़ और स्टेबल इंटरनेट चाहिए। फाइलें 1-4GB की होती हैं।</li>
        <li><strong>PC या लैपटॉप:</strong> कुछ स्टेप्स के लिए कंप्यूटर चाहिए (ADB कमांड के लिए)। USB केबल भी तैयार रखें।</li>
        <li><strong>डेटा बैकअप:</strong> बूटलोडर अनलॉक करने से डेटा डिलीट होता है। सब का बैकअप ले लें — फोटोज, कॉन्टैक्ट्स, मैसेजेस सब।</li>
      </ul>

      <h2>कम्पैटिबल डिवाइस (कौन सा डिवाइस काम करता है)</h2>
      <p>
        नेटहंटर आधिकारिक तौर पर कुछ डिवाइस को सपोर्ट करता है। अगर आपका डिवाइस लिस्ट में है तो इंस्टॉलेशन स्मूथ होगी। अगर नहीं है तो भी ट्राई कर सकते हैं लेकिन कस्टम कर्नेल की ज़रूरत पड़ सकती है:
      </p>
      <ul>
        <li><strong>OnePlus:</strong> OnePlus 5, 5T, 6, 6T, 7, 7T, 7 Pro, 8, 8T, 8 Pro, 9 series — सबसे ज़्यादा सपोर्टेड</li>
        <li><strong>Google:</strong> Nexus 5, Nexus 6P, Pixel 2, Pixel 3, Pixel 4, Pixel 5, Pixel 6, Pixel 7 series</li>
        <li><strong>Samsung:</strong> Galaxy S8, S9, S10, S20, S21, S22 series (कुछ मॉडल के लिए कस्टम कर्नेल)</li>
        <li><strong>Xiaomi:</strong> Redmi Note 7, 8, 9, 10, 11 series, Poco F1, F2, F3, Mi A2, Mi A3</li>
        <li><strong>Nothing:</strong> Phone (1), Phone (2) — नया सपोर्ट जुड़ा है</li>
        <li><strong>Fairphone:</strong> Fairphone 4 — सस्टेनेबिलिटी फोकस्ड डिवाइस</li>
        <li><strong>Raspberry Pi:</strong> Raspberry Pi 4 भी नेटहंटर चला सकता है (USB वाईफाई एडाप्टर के साथ)</li>
      </ul>

      <h2>विधि 1: नेटहंटर स्टोर (बिना रूट के — रूटलेस)</h2>
      <p>
        अगर आपका डिवाइस रूटेड नहीं है या आप बूटलोडर अनलॉक नहीं करना चाहते, तो आप नेटहंटर स्टोर से रूटलेस वर्शन इंस्टॉल कर सकते हैं। इसमें सीमित टूल्स हैं लेकिन सीखने के लिए काफी है:
      </p>

      <h3>चरण 1: नेटहंटर स्टोर डाउनलोड करें</h3>
      <p>
        नेटहंटर स्टोर एक ऐप स्टोर है जहां से आप नेटहंटर और संबंधित टूल्स डाउनलोड कर सकते हैं। यह गूगल प्ले स्टोर पर नहीं है क्योंकि गूगल सिक्योरिटी/हैकिंग टूल्स को अनुमति नहीं देता।
      </p>
      <CodeBlock
        title="नेटहंटर स्टोर APK डाउनलोड"
        code={`# नेटहंटर स्टोर की आधिकारिक वेबसाइट विज़िट करें
# store.nethunter.com से लेटेस्ट APK डाउनलोड करें

# या Termux में wget उपयोग करके:
wget https://store.nethunter.com/repo/store_latest.apk

# APK इंस्टॉल करें (unknown sources इनेबल होना चाहिए)
pm install store_latest.apk

# अगर इंस्टॉल न हो तो Settings में जाकर:
# Settings → Security → Unknown Sources → Enable`}
      />

      <h3>चरण 2: नेटहंटर ऐप इंस्टॉल करें</h3>
      <p>
        स्टोर इंस्टॉल होने के बाद आप नेटहंटर ऐप और संबंधित टूल्स इंस्टॉल कर सकते हैं:
      </p>
      <CodeBlock
        title="नेटहंटर स्टोर से इंस्टॉल"
        code={`# नेटहंटर स्टोर ऐप खोलें
# सर्च बार में "Nethunter" टाइप करें
# नेटहंटर ऐप इंस्टॉल करें

# साथ में यह भी इंस्टॉल करें:
# 1. Hacker's Keyboard — टर्मिनल में टाइपिंग आसान होगी
# 2. NetHunter Terminal — काली लिनक्स टर्मिनल एमुलेटर
# 3. VNC Viewer — ग्राफिकल टूल्स के लिए (वैकल्पिक)

# रूटलेस वर्शन में यह टूल्स मिलते हैं:
# - काली लिनक्स टर्मिनल (सीमित कमांड)
# - कुछ वायरलेस टूल्स
# - VNC व्यूअर (GUI एक्सेस के लिए)
# - नेटहंटर ऐप स्टोर`}
      />

      <h2>विधि 2: पूरा नेटहंटर (रूट ज़रूरी है)</h2>
      <p>
        पूरे नेटहंटर में सब कुछ मिलता है — मॉनिटर मोड, HID अटैक, मेटास्प्लॉइट, सभी टूल्स। लेकिन इसके लिए आपका डिवाइस रूटेड होना चाहिए और बूटलोडर अनलॉक होना चाहिए। यह विधि थोड़ी जटिल है लेकिन नतीजा बहुत शक्तिशाली है:
      </p>

      <h3>चरण 1: बूटलोडर अनलॉक करें</h3>
      <p>
        बूटलोडर अनलॉक करने से डिवाइस का सारा डेटा डिलीट होता है। पहले बैकअप ले लें! हर डिवाइस का तरीका अलग है लेकिन सामान्य प्रक्रिया यह है:
      </p>
      <CodeBlock
        title="बूटलोडर अनलॉक (सामान्य विधि)"
        code={`# सबसे पहले Developer Options इनेबल करें:
# Settings → About Phone → Build Number 7 बार टैप करें
# जब तक "You are now a developer!" न दिखे

# अब Developer Options में जाकर OEM Unlocking इनेबल करें:
# Settings → System → Developer Options → OEM Unlocking ✓

# USB Debugging भी इनेबल करें:
# Settings → System → Developer Options → USB Debugging ✓

# फोन को कंप्यूटर से USB से कनेक्ट करें
# ADB से बूटलोडर मोड में रीबूट करें:
adb reboot bootloader

# बूटलोडर अनलॉक करें (डेटा डिलीट होगा!):
fastboot oem unlock
# कुछ डिवाइस के लिए:
fastboot flashing unlock

# फोन पर कन्फर्मेशन आएगा — वॉल्यूम बटन से सेलेक्ट करें
# फोन रीबूट होगा और सारा डेटा डिलीट हो जाएगा`}
      />

      <h3>चरण 2: TWRP रिकवरी फ्लैश करें</h3>
      <p>
        TWRP एक कस्टम रिकवरी है जिससे आप ZIP फाइलें फ्लैश कर सकते हैं। इससे आप नेटहंटर, Magisk, और कस्टम कर्नेल फ्लैश कर पाएंगे:
      </p>
      <CodeBlock
        title="TWRP फ्लैश करना"
        code={`# अपने डिवाइस के लिए TWRP डाउनलोड करें:
# twrp.me पर जाकर अपना डिवाइस मॉडल सर्च करें
# सही वर्शन डाउनलोड करें (.img फाइल)

# फोन को बूटलोडर मोड में ले जाएं:
adb reboot bootloader

# TWRP फ्लैश करें:
fastboot flash recovery twrp-xxx.img

# TWRP में बूट करें:
fastboot boot twrp-xxx.img

# TWRP इंटरफेस दिखना चाहिए अब
# अगर नहीं दिखता तो Volume Up + Power बटन एक साथ दबाएं`}
      />

      <h3>चरण 3: Magisk से रूट करें</h3>
      <p>
        Magisk सबसे लोकप्रिय और सुरक्षित रूटिंग सॉल्यूशन है। यह सिस्टमलेस रूट देता है मतलब असली सिस्टम फाइलें मॉडिफाई नहीं होतीं। इससे बैंकिंग ऐप्स और SafetyNet भी पास होता है:
      </p>
      <CodeBlock
        title="Magisk इंस्टॉल करना"
        code={`# Magisk का लेटेस्ट वर्शन डाउनलोड करें:
# github.com/topjohnwu/Magisk से लेटेस्ट APK डाउनलोड करें

# TWRP रिकवरी में जाएं:
# 1. "Install" बटन टैप करें
# 2. Magisk APK फाइल सेलेक्ट करें (रिनेम .zip में अगर ज़रूरत हो)
# 3. "Swipe to Flash" स्लाइड करें
# 4. फ्लैश होने के बाद "Reboot System" सेलेक्ट करें

# फोन रीबूट होने के बाद:
# Magisk ऐप खोलें
# "Magisk is installed" दिखना चाहिए वर्शन नंबर के साथ
# अगर दिख रहा है तो रूट सफल है!

# सुपरयूज़र परमिशन मैनेज करने के लिए:
# Magisk App → Superuser tab
# यहां से किसी भी ऐप को रूट एक्सेस grant/deny कर सकते हैं`}
      />

      <h3>चरण 4: नेटहंटर फ्लैश करें</h3>
      <p>
        अब आखिरकार नेटहंटर इंस्टॉल करने का समय आ गया! आपको दो फाइलें चाहिए — एक जेनेरिक इंस्टॉलर और एक डिवाइस-स्पेसिफिक कर्नेल:
      </p>
      <CodeBlock
        title="नेटहंटर फ्लैश करना"
        code={`# नेटहंटर डाउनलोड करें:
# nethunter.kali.org पर जाकर अपने डिवाइस के लिए फाइलें डाउनलोड करें

# दो फाइलें चाहिए:
# 1. जेनेरिक नेटहंटर इंस्टॉलर (nethunter-xxx-generic-arm64.zip)
# 2. डिवाइस-स्पेसिफिक कर्नेल (nethunter-xxx-device-xxx.zip)

# TWRP रिकवरी में जाएं:
# 1. "Install" टैप करें
# 2. पहले जेनेरिक नेटहंटर ZIP सेलेक्ट करें
# 3. "Swipe to Flash" करें
# 4. फ्लैश होने के बाद "Back" जाएं
# 5. अब डिवाइस-स्पेसिफिक कर्नेल ZIP सेलेक्ट करें
# 6. "Swipe to Flash" करें
# 7. "Wipe Dalvik/Cache" करें
# 8. "Reboot System" करें

# पहला बूट थोड़ा समय ले सकता है (5-10 मिनट)
# धैर्य रखें!`}
      />

      <h3>चरण 5: पहले बूट के बाद सेटअप</h3>
      <p>
        फोन रीबूट होने के बाद नेटहंटर ऐप सेटअप करना पड़ेगा। इसमें काली लिनक्स का chroot एनवायरनमेंट इंस्टॉल होता है:
      </p>
      <CodeBlock
        title="पहला सेटअप"
        code={`# फोन रीबूट होने के बाद नेटहंटर ऐप खोलें
# ऐप अपने आप Kali chroot सेटअप करेगा

# अगर अपने आप न हो तो मैनुअली:
# Nethunter App → Kali Chroot Manager → Install

# दो विकल्प मिलेंगे:
# "Minimal" — कम स्टोरेज उपयोग करता है (~1GB), बेसिक टूल्स
# "Full" — ज़्यादा स्टोरेज (~4GB), सभी टूल्स इंस्टॉल

# स्टोरेज की कमी हो तो "Minimal" सेलेक्ट करें
# बाद में टूल्स मैनुअली इंस्टॉल कर सकते हैं

# टर्मिनल सेटअप:
# Nethunter Terminal ऐप खोलें
# "Kali" सेलेक्ट करें शेल ऑप्शन में

# वेरिफाई करें कि सब सही है:
uname -a
# काली लिनक्स कर्नेल इंफो दिखनी चाहिए`}
      />

      <h2>इंस्टॉल के बाद क्या करें (पोस्ट-इंस्टॉलेशन)</h2>

      <h3>काली पैकेजेस अपडेट करें</h3>
      <p>
        नेटहंटर इंस्टॉल होने के बाद सबसे पहले पैकेजेस अपडेट करना बहुत ज़रूरी है। अपडेटेड पैकेजेस में सिक्योरिटी फिक्स और नए फीचर्स होते हैं:
      </p>
      <CodeBlock
        title="अपडेट और अपग्रेड"
        code={`# नेटहंटर टर्मिनल में (Kali शेल):
sudo apt update

# सभी पैकेजेस अपग्रेड करें:
sudo apt upgrade -y

# अतिरिक्त महत्वपूर्ण टूल्स इंस्टॉल करें:
sudo apt install -y nmap metasploit-framework aircrack-ng
sudo apt install -y sqlmap hydra john nikto
sudo apt install -y bettercap responder

# वर्डलिस्ट इंस्टॉल करें (पासवर्ड क्रैकिंग के लिए):
sudo apt install -y wordlists
# Rockyou वर्डलिस्ट एक्सट्रैक्ट करें:
sudo gunzip /usr/share/wordlists/rockyou.txt.gz`}
      />

      <h3>वाईफाई एडाप्टर चेक करें</h3>
      <p>
        वाईफाई हैकिंग के लिए आपका वाईफाई एडाप्टर मॉनिटर मोड सपोर्ट करना चाहिए। ज़्यादातर बिल्ट-इन वाईफाई चिप्स मॉनिटर मोड सपोर्ट नहीं करते, तो बाहरी USB एडाप्टर लगाना पड़ सकता है:
      </p>
      <CodeBlock
        title="वाईफाई एडाप्टर चेक"
        code={`# चेक करें कि वाईफाई एडाप्टर है:
iwconfig
# wlan0 दिखना चाहिए

# चेक करें कि मॉनिटर मोड सपोर्टेड है:
airmon-ng
# अगर इंटरफेस लिस्ट में wlan0 दिखा तो अच्छी बात है

# मॉनिटर मोड इनेबल करके टेस्ट करें:
sudo airmon-ng start wlan0
# अगर कोई error आए तो बाहरी एडाप्टर चाहिए

# अनुशंसित बाहरी एडाप्टर (OTG केबल से कनेक्ट होते हैं):
# 1. Alfa AWUS036ACH — सबसे अच्छा, डुअल बैंड
# 2. Alfa AWUS036NHA — बजट फ्रेंडली, atheros चिपसेट
# 3. TP-Link TL-WN722N v1 — सबसे सस्ता विकल्प
# नोट: v2/v3 में atheros चिपसेट नहीं है, सिर्फ v1 काम करता है`}
      />

      <h2>समस्या आए तो क्या करें (समस्या निवारण)</h2>

      <h3>आम समस्याएं और समाधान</h3>
      <div className="space-y-4">
        <div className="glass-card p-4">
          <h4 className="text-neon-red font-bold mb-2">❌ नेटहंटर ऐप बार-बार बंद हो रहा है (क्रैश)</h4>
          <p className="text-gray-400 text-sm">
            <strong>समाधान:</strong> सबसे पहले चेक करें कि Magisk सही से इंस्टॉल है। Magisk ऐप खोलें — "Magisk is installed" दिखना चाहिए। नेटहंटर को सुपरयूज़र परमिशन मिली है या नहीं चेक करें: Magisk → Superuser → नेटहंटर ऐप इनेबल करें। अगर फिर भी न हो तो नेटहंटर ऐप का डेटा क्लियर करें और दोबारा सेटअप करें।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-red font-bold mb-2">❌ काली Chroot इंस्टॉल नहीं हो रहा</h4>
          <p className="text-gray-400 text-sm">
            <strong>समाधान:</strong> स्टोरेज चेक करें — कम से कम 4GB फ्री होना चाहिए। वाईफाई स्टेबल होना चाहिए क्योंकि chroot फाइलें डाउनलोड होती हैं। अगर बार-बार फेल हो रहा है तो नेटहंटर ऐप का डेटा क्लियर करें (Settings → Apps → Nethunter → Clear Data) और फिर से ट्राई करें। कुछ डिवाइस पर "Minimal" इंस्टॉल पहले करें फिर बाद में फुल करें।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-red font-bold mb-2">❌ मॉनिटर मोड काम नहीं कर रहा</h4>
          <p className="text-gray-400 text-sm">
            <strong>समाधान:</strong> ज़्यादातर एंड्रॉइड डिवाइस के बिल्ट-इन वाईफाई चिप मॉनिटर मोड सपोर्ट नहीं करते। आपको बाहरी USB वाईफाई एडाप्टर चाहिए (OTG केबल से कनेक्ट होता है)। Alfa AWUS036ACH या TP-Link TL-WN722N v1 ले सकते हैं। airmon-ng कमांड से चेक करें कि एडाप्टर डिटेक्ट हो रहा है या नहीं।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-red font-bold mb-2">❌ नेटहंटर फ्लैश करने के बाद फोन बूटलूप में फंस गया</h4>
          <p className="text-gray-400 text-sm">
            <strong>समाधान:</strong> TWRP रिकवरी में जाएं (Volume Up + Power एक साथ दबाएं)। Wipe → Advanced Wipe → Dalvik Cache और Cache सेलेक्ट करके वाइप करें। अगर फिर भी न हो तो सही कर्नेल फ्लैश करें — डिवाइस कोडनेम डबल चेक करें। सबसे बुरी स्थिति में स्टॉक ROM फ्लैश करें।
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-red font-bold mb-2">❌ Magisk Hide काम नहीं कर रहा (बैंकिंग ऐप्स ब्लॉक)</h4>
          <p className="text-gray-400 text-sm">
            <strong>समाधान:</strong> Magisk → Settings में जाकर "Zygisk" इनेबल करें। फिर "DenyList" में बैंकिंग ऐप्स जोड़ें। MagiskHidePropsConf मॉड्यूल भी इंस्टॉल कर सकते हैं। कभी-कभी Magisk वर्शन अपडेट करने से भी फिक्स हो जाता है।
          </p>
        </div>
      </div>

      <h2>नेटहंटर संस्करणों की तुलना</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">रूट</th>
              <th className="text-left py-2 px-3 text-neon-green">रूटलेस</th>
              <th className="text-left py-2 px-3 text-neon-green">लाइट</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3">रूट एक्सेस</td><td className="text-neon-green">ज़रूरी</td><td className="text-yellow-400">नहीं चाहिए</td><td className="text-neon-green">ज़रूरी</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3">वाईफाई मॉनिटर मोड</td><td className="text-neon-green">हां</td><td className="text-neon-red">नहीं</td><td className="text-neon-green">हां</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3">HID अटैक</td><td className="text-neon-green">हां</td><td className="text-neon-red">नहीं</td><td className="text-yellow-400">सीमित</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3">मेटास्प्लॉइट</td><td className="text-neon-green">हां</td><td className="text-neon-red">नहीं</td><td className="text-neon-green">हां</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3">काली टर्मिनल</td><td className="text-neon-green">पूरा</td><td className="text-yellow-400">सीमित</td><td className="text-neon-green">पूरा</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3">स्टोरेज आवश्यक</td><td className="text-yellow-400">4-8GB</td><td className="text-neon-green">~500MB</td><td className="text-neon-green">~2GB</td></tr>
            <tr><td className="py-2 px-3">कठिनाई</td><td className="text-neon-red">कठिन</td><td className="text-neon-green">आसान</td><td className="text-yellow-400">मध्यम</td></tr>
          </tbody>
        </table>
      </div>

      <div className="success-box mt-8">
        <strong>✅ अगला कदम:</strong> जब नेटहंटर इंस्टॉल हो जाए तो{' '}
        <Link to="/wifi" className="text-neon-green underline">वाईफाई हैकिंग</Link> सेक्शन में जाएं
        और वायरलेस पेनिट्रेशन टेस्टिंग सीखना शुरू करें!
      </div>
    </TutorialLayout>
  )
}
