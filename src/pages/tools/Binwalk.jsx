import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Binwalk() {
  return (
    <TutorialLayout
      title="binwalk"
      subtitle="फ़र्मवेयर एनालिसिस और एक्सट्रैक्शन टूल — IoT डिवाइस फ़र्मवेयर को रिवर्स इंजीनियर करो"
      icon="📦"
      prev={{ to: '/tool/socat', label: 'socat' }}
      next={{ to: '/tool/wifite', label: 'wifite' }}
    >
      <h2>What is Binwalk?</h2>
      <p>
        बिनवॉक एक शक्तिशाली फ़र्मवेयर एनालिसिस और एक्सट्रैक्शन टूल है जो बाइनरी फाइलों को स्कैन करके अंदर छुपे हुए एम्बेडेड फाइल्स, फाइल सिस्टम्स, और कंप्रेस्ड डेटा को ढूंढता है। राउटर फ़र्मवेयर, IoT डिवाइस फ़र्मवेयर, ROM डंप्स, बूटलोडर, और एम्बेडेड Linux सिस्टम्स को एनालाइज़ करने के लिए यह सबसे ज़रूरी टूल है। IoT सिक्योरिटी रिसर्च और फ़र्मवेयर रिवर्स इंजीनियरिंग में बिनवॉक इंडस्ट्री स्टैंडर्ड है।
      </p>
      <p>
        बिनवॉक सिग्नेचर स्कैनिंग का इस्तेमाल करता है — यह फाइल में जाकर ज्ञात फाइल हेडर मैजिक बाइट्स ढूंढता है। SquashFS, gzip, LZMA, tar, JFFS2, CramFS, YAFFS2, UBIFS — सैंकड़ों फाइल सिस्टम और कंप्रेशन फॉर्मेट्स को पहचानता है। एन्ट्रोपी एनालिसिस से एन्क्रिप्टेड या कंप्रेस्ड एरियाज़ भी डिटेक्ट करता है। जब आपको किसी डिवाइस की फ़र्मवेयर अपडेट फाइल मिलती है तो बिनवॉक से पता चलता है कि उस फ़र्मवेयर के अंदर क्या-क्या है — फाइल सिस्टम्स, कंप्रेस्ड डेटा, बूटलोडर, एन्क्रिप्शन कीज़, पासवर्ड्स — सब कुछ।
      </p>
      <p>
        बिनवॉक को Craig Heffner ने 2010 में बनाया था और यह Python में लिखा गया है। यह ओपन सोर्स है और MIT लाइसेंस के तहत उपलब्ध है। बिनवॉक का आर्किटेक्चर प्लगइन-बेस्ड है — आप कस्टम सिग्नेचर, कस्टम एक्सट्रैक्टर, और कस्टम एनालिसिस मॉड्यूल जोड़ सकते हो। यह क्रॉस-प्लेटफ़ॉर्म है — Linux, macOS, Windows सब पर चलता है, हालांकि कुछ एक्सट्रैक्शन टूल्स सिर्फ Linux पर काम करते हैं। काली नेटहंटर में यह प्री-इंस्टॉल्ड आता है।
      </p>
      <p>
        बिनवॉक सिर्फ सिग्नेचर स्कैनिंग तक सीमित नहीं है — यह रिकर्सिव एक्सट्रैक्शन, एन्ट्रोपी एनालिसिस, डिफ़ एनालिसिस, ओपकोड सिग्नेचर डिटेक्शन, और रॉ स्ट्रिंग सर्च जैसे एडवांस्ड फ़ीचर्स भी प्रदान करता है। रिकर्सिव एक्सट्रैक्शन बहुत पावरफुल है — यह एक्सट्रैक्टेड फाइल्स के अंदर भी और फाइल्स हों तो उन्हें भी निकालता है। इससे फ़र्मवेयर की पूरी स्ट्रक्चर ट्री मिल जाती है।
      </p>
      <p>
        आज के IoT युग में बिनवॉक की अहमियत और भी बढ़ गई है। हर घर में राउटर, IP कैमरा, स्मार्ट टीवी, और अन्य IoT डिवाइसेज़ हैं — इन सबकी फ़र्मवेयर में वल्नरेबिलिटीज़ हो सकती हैं। सिक्योरिटी रिसर्चर्स बिनवॉक से इन डिवाइसेज़ की फ़र्मवेयर एनालाइज़ करके बैकडोर्स, हार्डकोडेड पासवर्ड्स, और अन्य सिक्योरिटी इश्यूज़ ढूंढते हैं। फ़र्मवेयर रिवर्स इंजीनियरिंग का पहला कदम हमेशा बिनवॉक होता है।
      </p>
      <p>
        बिनवॉक का command-line interface बहुत intuitive है — beginners भी जल्दी सीख सकते हैं। बस एक command में पूरा firmware scan हो जाता है और detailed report मिलती है। बिनवॉक की documentation भी अच्छी है और community active है — कोई भी problem आए तो GitHub issues में solution मिल जाता है। CTF competitions में भी firmware analysis challenges आते हैं जहाँ बिनवॉक सबसे पहले use होता है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> बिनवॉक केवल अधिकृत सुरक्षा शोध, शैक्षिक उद्देश्यों, और अपने स्वयं के डिवाइसेज़ के फ़र्मवेयर एनालिसिस के लिए इस्तेमाल करें। बिना अनुमति के किसी डिवाइस का फ़र्मवेयर रिवर्स इंजीनियरिंग करना अवैध हो सकता है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत सॉफ़्टवेयर मॉडिफिकेशन अपराध हो सकता है। साइबर अपराध गंभीर परिणामों का कारण बन सकता है — जुर्माना और जेल दोनों हो सकते हैं। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>

      <h2>History of Binwalk</h2>
      <p>
        बिनवॉक को Craig Heffner ने 2010 में बनाया था। Craig उस समय एक सिक्योरिटी रिसर्चर थे जो IoT डिवाइसेज़ की फ़र्मवेयर एनालाइज़ करते थे। उन्हें एक ऐसे टूल की ज़रूरत थी जो फ़र्मवेयर बाइनरी में छुपे हुए फाइल सिस्टम्स और कंप्रेस्ड डेटा को जल्दी से ढूंढ सके। उस समय कोई अच्छा ओपन सोर्स टूल नहीं था — इसलिए Craig ने खुद बनाया।
      </p>
      <p>
        शुरू में बिनवॉक सिर्फ एक सिंपल सिग्नेचर स्कैनर था जो फाइल हेडर मैजिक बाइट्स ढूंढता था। लेकिन जल्दी ही इसमें एक्सट्रैक्शन, एन्ट्रोपी एनालिसिस, डिफ़ एनालिसिस, और ओपकोड सिग्नेचर डिटेक्शन जैसे फ़ीचर्स जोड़े गए। 2013 में बिनवॉक को ReFirm Labs ने acquire किया और इसे और बेहतर बनाया। 2017 में ReFirm Labs ने Binwalk Enterprise भी लॉन्च किया।
      </p>
      <p>
        आज बिनवॉक GitHub पर 10,000+ स्टार्स के साथ सबसे पॉपुलर फ़र्मवेयर एनालिसिस टूल है। IoT सिक्योरिटी रिसर्च, फ़र्मवेयर रिवर्स इंजीनियरिंग, और एम्बेडेड सिस्टम सिक्योरिटी टेस्टिंग में यह इंडस्ट्री स्टैंडर्ड है। CISA (Cybersecurity and Infrastructure Security Agency) भी फ़र्मवेयर एनालिसिस के लिए बिनवॉक recommend करती है।
      </p>

      <h2>How Binwalk Works?</h2>
      <p>
        बिनवॉक का आर्किटेक्चर मल्टी-लेयर्ड है जो कई एनालिसिस तकनीकों को एक साथ इस्तेमाल करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">सिग्नेचर स्कैनिंग:</strong> फाइल में जाकर ज्ञात फाइल हेडर मैजिक बाइट्स ढूंढता है — 300+ सिग्नेचर्स सपोर्ट</li>
        <li><strong className="text-white">एन्ट्रोपी एनालिसिस:</strong> फाइल के हर ब्लॉक की एन्ट्रोपी कैलकुलेट करता है — हाई एन्ट्रोपी मतलब एन्क्रिप्टेड/कंप्रेस्ड</li>
        <li><strong className="text-white">ऑटो एक्सट्रैक्शन:</strong> पहचाने गए एम्बेडेड फाइल्स को अलग निकालता है</li>
        <li><strong className="text-white">रिकर्सिव एक्सट्रैक्शन:</strong> निकाली गई फाइल्स के अंदर भी और फाइल्स हों तो उन्हें भी निकालता है</li>
        <li><strong className="text-white">डिफ़ एनालिसिस:</strong> दो फ़र्मवेयर वर्जन्स की तुलना करके बदलाव ढूंढता है</li>
        <li><strong className="text-white">ओपकोड डिटेक्शन:</strong> CPU आर्किटेक्चर (ARM, MIPS, x86, PowerPC) डिटेक्ट करता है</li>
        <li><strong className="text-white">रॉ स्ट्रिंग सर्च:</strong> बाइनरी में पासवर्ड्स, URL, IP एड्रेसेज़ ढूंढता है</li>
        <li><strong className="text-white">प्लगइन सिस्टम:</strong> कस्टम सिग्नेचर, एक्सट्रैक्टर, और एनालिसिस मॉड्यूल जोड़ सकते हो</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में बिनवॉक प्री-इंस्टॉल्ड आता है। अगर किसी कारण से नहीं है तो कई तरीकों से इंस्टॉल कर सकते हैं।
      </p>
      <CodeBlock
        title="बिनवॉक इंस्टॉलेशन"
        code={`# apt से (सबसे आसान):
sudo apt update
sudo apt install binwalk

# pip से:
pip3 install binwalk

# सोर्स से (सबसे लेटेस्ट):
git clone https://github.com/ReFirmLabs/binwalk.git
cd binwalk
sudo python3 setup.py install

# वर्जन चेक:
binwalk --help

# डिपेंडेंसीज़ इंस्टॉल (एक्सट्रैक्शन के लिए):
sudo apt install squashfs-tools cramfs-tools p7zip-full
sudo apt install mtd-utils gzip bzip2 tar xz-utils

# कस्टम मैजिक फाइल (सिग्नेचर डेटाबेस):
ls /usr/lib/python3/dist-packages/binwalk/magic/`}
      />

      <h2>Basic Usage</h2>
      <p>
        बिनवॉक का बेसिक इस्तेमाल बहुत आसान है — बस फ़र्मवेयर फाइल दो और यह बताएगा कि अंदर क्या-क्या है।
      </p>
      <CodeBlock
        title="बेसिक स्कैन"
        code={`# फ़र्मवेयर स्कैन करें:
binwalk firmware.bin

# डिटेल्ड स्कैन (ज़्यादा इन्फो):
binwalk -v firmware.bin

# ऑटो एक्सट्रैक्ट:
binwalk -e firmware.bin

# रिकर्सिव एक्सट्रैक्ट (सब-फाइल्स भी):
binwalk -eM firmware.bin

# आउटपुट डायरेक्ट्री स्पेसिफाई:
binwalk -e -C /tmp/output firmware.bin

# क्वाइट मोड (बैनर नहीं):
binwalk -q firmware.bin

# थ्रेड्स बढ़ाएं (तेज़ स्कैन):
binwalk --dd='squashfs:squashfs' firmware.bin`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e</td><td className="py-2 px-3">एम्बेडेड फाइल्स ऑटो एक्सट्रैक्ट करें</td><td className="py-2 px-3 font-mono text-xs">binwalk -e firmware.bin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-M</td><td className="py-2 px-3">रिकर्सिव एक्सट्रैक्शन (सब-फाइल्स भी)</td><td className="py-2 px-3 font-mono text-xs">binwalk -eM firmware.bin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-E</td><td className="py-2 px-3">एन्ट्रोपी एनालिसिस</td><td className="py-2 px-3 font-mono text-xs">binwalk -E firmware.bin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-A</td><td className="py-2 px-3">ओपकोड सिग्नेचर स्कैन</td><td className="py-2 px-3 font-mono text-xs">binwalk -A firmware.bin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-W</td><td className="py-2 px-3">दो फाइल्स का डिफ़ एनालिसिस</td><td className="py-2 px-3 font-mono text-xs">binwalk -W v1.bin v2.bin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-R</td><td className="py-2 px-3">रॉ स्ट्रिंग सर्च</td><td className="py-2 px-3 font-mono text-xs">binwalk -R "password" fw.bin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-D</td><td className="py-2 px-3">स्पेसिफिक फाइल टाइप एक्सट्रैक्ट</td><td className="py-2 px-3 font-mono text-xs">binwalk -D 'gzip:gz:gunzip' fw.bin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-C</td><td className="py-2 px-3">आउटपुट डायरेक्ट्री</td><td className="py-2 px-3 font-mono text-xs">binwalk -e -C /tmp/out fw.bin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">वर्बोज़ आउटपुट</td><td className="py-2 px-3 font-mono text-xs">binwalk -v firmware.bin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-q</td><td className="py-2 px-3">क्वाइट मोड (बैनर नहीं)</td><td className="py-2 px-3 font-mono text-xs">binwalk -q firmware.bin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-B</td><td className="py-2 px-3">सिग्नेचर स्कैन (डिफ़ॉल्ट)</td><td className="py-2 px-3 font-mono text-xs">binwalk -B firmware.bin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-l</td><td className="py-2 px-3">सिर्फ सिग्नेचर लिस्ट करें</td><td className="py-2 px-3 font-mono text-xs">binwalk -l firmware.bin</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-t</td><td className="py-2 px-3">स्कैन टाइम लिमिट</td><td className="py-2 px-3 font-mono text-xs">binwalk -t firmware.bin</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-d</td><td className="py-2 px-3">स्कैन डेप्थ लिमिट</td><td className="py-2 px-3 font-mono text-xs">binwalk -d 3 firmware.bin</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Firmware Signature Scan</h2>
      <p>
        सिग्नेचर स्कैनिंग बिनवॉक का सबसे बेसिक और इम्पोर्टेंट फ़ीचर है। यह फाइल में जाकर ज्ञात फाइल टाइप हेडर्स ढूंढता है। हर फाइल टाइप का एक unique मैजिक बाइट होता है — जैसे SquashFS का "hsqs", gzip का "1f8b", JFFS2 का "8519"।
      </p>
      <CodeBlock
        title="सिग्नेचर स्कैन"
        code={`# बेसिक सिग्नेचर स्कैन:
binwalk firmware.bin

# आउटपुट कुछ ऐसा दिखेगा:
# DECIMAL   HEXADECIMAL  DESCRIPTION
# 0         0x0          TRX firmware header
# 28        0x1C         gzip compressed data
# 1048576   0x100000     Squashfs filesystem
# 2097152   0x200000     JFFS2 filesystem

# ज़्यादा डिटेल्ड स्कैन:
binwalk -v firmware.bin

# स्पेसिफिक सिग्नेचर फ़िल्टर:
binwalk -R "password" firmware.bin
binwalk -R "admin" firmware.bin
binwalk -R "root" firmware.bin
binwalk -R "secret" firmware.bin

# सभी सिग्नेचर्स लिस्ट करें:
binwalk -l firmware.bin`}
      />

      <h2>Firmware Extraction</h2>
      <p>
        फ़र्मवेयर से एम्बेडेड फाइल्स निकालना बिनवॉक का सबसे यूज़फुल फ़ीचर है। एक्सट्रैक्ट करने के बाद आप फ़र्मवेयर की पूरी फाइल स्ट्रक्चर देख सकते हो।
      </p>
      <CodeBlock
        title="एक्सट्रैक्शन"
        code={`# ऑटो एक्सट्रैक्ट:
binwalk -e firmware.bin
# _firmware.bin.extracted/ डायरेक्ट्री बनेगी

# रिकर्सिव एक्सट्रैक्ट (सब-फाइल्स भी):
binwalk -eM firmware.bin

# स्पेसिफिक टाइप एक्सट्रैक्ट:
binwalk -D 'gzip:gz:gunzip' firmware.bin
binwalk -D 'squashfs:squashfs:unsquashfs' firmware.bin
binwalk -D 'lzma:lzma:lzma -d' firmware.bin
binwalk -D 'tar:tar:tar xf' firmware.bin

# एक्सट्रैक्टेड फाइल्स ब्राउज़ करें:
ls _firmware.bin.extracted/
cd _firmware.bin.extracted/squashfs-root/

# स्क्वैशफाइल सिस्टम मैनुअली एक्सट्रैक्ट:
unsquashfs firmware.squashfs

# एक्सट्रैक्शन के बाद फ़ाइल स्ट्रक्चर देखें:
find _firmware.bin.extracted/ -type f | head -50`}
      />

      <h2>Entropy Analysis</h2>
      <p>
        एन्ट्रोपी एनालिसिस से पता चलता है कि फ़र्मवेयर के कौन से हिस्से एन्क्रिप्टेड या कंप्रेस्ड हैं। हाई एन्ट्रोपी = एन्क्रिप्टेड/कंप्रेस्ड, लो एन्ट्रोपी = प्लेन टेक्स्ट।
      </p>
      <CodeBlock
        title="एन्ट्रोपी एनालिसिस"
        code={`# एन्ट्रोपी ग्राफ़ जनरेट:
binwalk -E firmware.bin

# एन्ट्रोपी इमेज सेव:
binwalk -E -P entropy.png firmware.bin

# एन्ट्रोपी आउटपुट समझें:
# ~1.0 = कंप्रेस्ड/एन्क्रिप्टेड (रैंडम डेटा)
# ~0.0 = प्लेन टेक्स्ट (पैटर्न है)
# ~0.5 = सोर्स कोड या टेक्स्ट

# कंप्रेस्ड एरियाज़ में अक्सर स्क्वैशफाइल सिस्टम होता है
# एन्क्रिप्टेड एरियाज़ में अक्सर एन्क्रिप्शन कीज़ होती हैं`}
      />

      <h2>File System Types</h2>
      <p>
        फ़र्मवेयर में आम तौर पर ये फाइल सिस्टम्स मिलते हैं:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फाइल सिस्टम</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या है</th>
              <th className="text-left py-2 px-3 text-neon-green">कहाँ मिलता है</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SquashFS</td><td className="py-2 px-3">Linux फाइल सिस्टम (कंप्रेस्ड)</td><td className="py-2 px-3">राउटर्स में सबसे कॉमन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">JFFS2</td><td className="py-2 px-3">जर्नलिंग फ्लैश फाइल सिस्टम</td><td className="py-2 px-3">एम्बेडेड Linux डिवाइसेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">CramFS</td><td className="py-2 px-3">कंप्रेस्ड ROM फाइल सिस्टम</td><td className="py-2 px-3">पुराने एम्बेडेड डिवाइसेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">YAFFS2</td><td className="py-2 px-3">Yet Another Flash File System</td><td className="py-2 px-3">NAND फ्लैश डिवाइसेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">UBIFS</td><td className="py-2 px-3">Unsorted Block Image FS</td><td className="py-2 px-3">मॉडर्न एम्बेडेड Linux</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ext2/ext3/ext4</td><td className="py-2 px-3">Standard Linux FS</td><td className="py-2 px-3">NAS, सर्वर्स</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">FAT/NTFS</td><td className="py-2 px-3">Windows FS</td><td className="py-2 px-3">विंडोज़ डिवाइसेज़</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">tar/cpio</td><td className="py-2 px-3">आर्काइव फाइल्स</td><td className="py-2 px-3">बैकअप और अपडेट फाइल्स</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Diff Analysis</h2>
      <p>
        दो फ़र्मवेयर वर्जन्स की तुलना करके बदलाव ढूंढना — यह वल्नरेबिलिटी रिसर्च और सिक्योरिटी ऑडिट में बहुत काम आता है।
      </p>
      <CodeBlock
        title="डिफ़ एनालिसिस"
        code={`# दो फ़र्मवेयर की तुलना:
binwalk -W firmware_v1.bin firmware_v2.bin

# यह दिखाएगा कि कौन से हिस्से बदले हैं:
# DECIMAL   HEXADECIMAL  DESCRIPTION (old)          DESCRIPTION (new)
# 0         0x0          TRX header                  TRX header (modified)
# 1048576   0x100000     Squashfs filesystem         Squashfs filesystem (modified)

# इससे पता चलता है:
# - सिक्योरिटी पैच कहाँ लगा है
# - नया बैकडोर तो नहीं जोड़ा गया
# - कौन से बाइनरी बदले गए
# - कॉन्फ़िग फाइल्स में क्या बदला`}
      />

      <h2>Opcode Signature Scan</h2>
      <p>
        ओपकोड सिग्नेचर स्कैन से पता चलता है कि फ़र्मवेयर में कौन से CPU आर्किटेक्चर के कोड हैं।
      </p>
      <CodeBlock
        title="ओपकोड स्कैन"
        code={`# CPU आर्किटेक्चर डिटेक्ट करें:
binwalk -A firmware.bin

# यह दिखाएगा कि कौन से इंस्ट्रक्शन सेट हैं:
# DECIMAL   HEXADECIMAL  DESCRIPTION
# 0         0x0          ARM instructions
# 1024      0x400        MIPS instructions
# 2048      0x800        PowerPC instructions

# इससे पता चलता है:
# - डिवाइस किस प्रोसेसर पर चलता है
# - कौन सा डिसअसेम्बलर यूज़ करना है
# - क्रॉस-कंपाइलर कौन सा चाहिए`}
      />

      <h2>Practical Workflow</h2>
      <p>
        फ़र्मवेयर एनालिसिस का कंप्लीट वर्कफ़्लो — स्टेप बाय स्टेप:
      </p>
      <CodeBlock
        title="रियल-वर्ल्ड एनालिसिस"
        code={`# स्टेप 1: फ़र्मवेयर स्कैन करें
binwalk firmware.bin

# स्टेप 2: एन्ट्रोपी चेक करें (एन्क्रिप्टेड हिस्से)
binwalk -E firmware.bin

# स्टेप 3: CPU आर्किटेक्चर डिटेक्ट करें
binwalk -A firmware.bin

# स्टेप 4: रिकर्सिव एक्सट्रैक्ट
binwalk -eM firmware.bin

# स्टेप 5: एक्सट्रैक्टेड फाइल्स ब्राउज़ करें
ls _firmware.bin.extracted/
cd _firmware.bin.extracted/squashfs-root/

# स्टेप 6: पासवर्ड्स और सीक्रेट्स ढूंढें
grep -rn "password" etc/
grep -rn "admin" etc/
cat etc/passwd
cat etc/shadow
cat etc/shadow-

# स्टेप 7: कॉन्फ़िग फाइल्स चेक करें
cat etc/config/*
cat etc/lighttpd/lighttpd.conf
cat etc/dropbear/dropbear_rsa_host_key

# स्टेप 8: बैकडोर या सस्पीशियस फाइल्स ढूंढें
find . -name "*.sh" -exec grep -l "telnet" {} \;
find . -name "*.conf" -exec grep -l "backdoor" {} \;

# स्टेप 9: इंटरेस्टिंग बाइनरीज़ एनालाइज़ करें
file usr/bin/*
strings usr/bin/httpd | grep -i password

# स्टेप 10: नेटवर्क सर्विसेज़ पहचानें
grep -rn "listen" etc/
cat etc/init.d/*`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        बिनवॉक को स्क्रिप्ट करके ऑटोमैटिक फ़र्मवेयर एनालिसिस कर सकते हो।
      </p>
      <CodeBlock
        title="ऑटोमेशन स्क्रिप्ट"
        code={`#!/bin/bash
# ऑटोमैटिक फ़र्मवेयर एनालिसिस स्क्रिप्ट

FIRMWARE="$1"
OUTPUT_DIR="/tmp/firmware_analysis"

mkdir -p $OUTPUT_DIR

echo "[*] फ़र्मवेयर स्कैन कर रहे हैं: $FIRMWARE"

# स्कैन रिपोर्ट:
binwalk "$FIRMWARE" > "$OUTPUT_DIR/scan_report.txt"

# एन्ट्रोपी रिपोर्ट:
binwalk -E "$FIRMWARE" > "$OUTPUT_DIR/entropy_report.txt"

# एक्सट्रैक्ट:
binwalk -eM -C "$OUTPUT_DIR" "$FIRMWARE"

# पासवर्ड्स ढूंढें:
echo "[*] पासवर्ड्स ढूंढ रहे हैं..."
grep -rn "password" "$OUTPUT_DIR/" > "$OUTPUT_DIR/passwords.txt"
grep -rn "admin" "$OUTPUT_DIR/" >> "$OUTPUT_DIR/passwords.txt"

# स्ट्रिंग्स निकालें:
echo "[*] स्ट्रिंग्स निकाल रहे हैं..."
strings "$FIRMWARE" | grep -iE "(http|ftp|telnet|password|admin)" > "$OUTPUT_DIR/interesting_strings.txt"

echo "[+] एनालिसिस पूरा! रिपोर्ट: $OUTPUT_DIR/"`}
      />

      <CodeBlock
        title="बल्क फ़र्मवेयर स्कैन"
        code={`#!/bin/bash
# कई फ़र्मवेयर फाइल्स एक साथ स्कैन करें

for fw in /tmp/firmware_samples/*.bin; do
  echo "[+] स्कैन: $fw"
  binwalk "$fw" | head -20
  echo "---"
done

# SquashFS फाइल्स ढूंढें:
find /tmp/ -name "*.squashfs" 2>/dev/null`}
      />

      <CodeBlock
        title="Python ऑटोमेशन"
        code={`#!/usr/bin/env python3
# बिनवॉक Python API

import binwalk

# सिग्नेचर स्कैन:
for module in binwalk.scan('firmware.bin', signature=True):
    print(f"Module: {module.name}")
    for result in module.results:
        print(f"  {result.offset}: {result.description}")

# ऑटो एक्सट्रैक्ट:
binwalk.scan('firmware.bin', signature=True, extract=True)

# एन्ट्रोपी एनालिसिस:
for module in binwalk.scan('firmware.bin', entropy=True):
    print(f"Entropy: {module.results}")`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'एक्सट्रैक्शन फेल हो रहा है', a: 'डिपेंडेंसीज़ इंस्टॉल करो: sudo apt install squashfs-tools cramfs-tools mtd-utils। बिना डिपेंडेंसीज़ के एक्सट्रैक्शन काम नहीं करता।' },
          { q: 'कोई सिग्नेचर नहीं मिल रहा', a: 'फ़र्मवेयर एन्क्रिप्टेड हो सकती है। एन्ट्रोपी चेक करो (binwalk -E)। अगर एन्ट्रोपी ~1.0 है तो एन्क्रिप्टेड है — डिक्रिप्शन की ज़रूरत है।' },
          { q: 'SquashFS एक्सट्रैक्ट नहीं हो रहा', a: 'unsquashfs इंस्टॉल करो: sudo apt install squashfs-tools। कुछ राउटर्स में कस्टम SquashFS होता है — तब टूल्स फेल हो सकते हैं।' },
          { q: 'बहुत ज़्यादा फाइल्स निकल रही हैं', a: '-eM (रिकर्सिव) की जगह सिर्फ -e यूज़ करो। या -D से स्पेसिफिक टाइप एक्सट्रैक्ट करो।' },
          { q: 'Permission denied एरर', a: 'sudo से चलाओ या आउटपुट डायरेक्ट्री की परमिशन चेक करो।' },
          { q: 'एन्ट्रोपी ग्राफ़ नहीं दिख रहा', a: 'matplotlib इंस्टॉल करो: pip3 install matplotlib। या -P entropy.png से इमेज सेव करो।' },
          { q: 'बाइनरी बहुत बड़ा है (1GB+)', a: 'स्कैन टाइम लिमिट सेट करो: binwalk -t 60 firmware.bin (60 सेकंड)। या स्पेसिफिक ऑफसेट से स्कैन करो।' },
          { q: 'कस्टम फ़र्मवेयर फॉर्मेट', a: 'कस्टम मैजिक फाइल बनाओ ~/.config/binwalk/magic/ में। Documentation देखो।' },
          { q: 'binwalk command not found आ रहा है', a: 'PATH check करो: which binwalk। अगर pip से install किया है तो ~/.local/bin/ में होगा — PATH में add करो: export PATH=$PATH:~/.local/bin' },
          { q: 'Extraction बहुत slow है', a: 'SSD use करो HDD की जगह। -d flag से scan depth limit करो। -D से specific type extract करो — सब कुछ extract करने की ज़रूरत नहीं।' },
          { q: 'बिनवॉक crash हो रहा है', a: 'Memory check करो — बड़े firmware (500MB+) के लिए 4GB+ RAM चाहिए। Python version check करो — 3.8+ required है। pip3 install --upgrade binwalk से update करो।' },
          { q: 'Firmware में कुछ नहीं मिल रहा', a: 'Firmware encrypted या custom format में हो सकती है। hexdump -C firmware.bin | head से raw bytes check करो। File command भी try करो: file firmware.bin' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        अगर आपका डिवाइस फ़र्मवेयर एनालिसिस से बचाना है तो ये तरीके अपनाओ:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">फ़र्मवेयर एन्क्रिप्शन:</strong> फ़र्मवेयर को एन्क्रिप्ट करो — बिनवॉक सिग्नेचर नहीं ढूंढ पाएगा</li>
        <li><strong className="text-white">सिक्योर बूट:</strong> डिजिटल सिग्नेचर से फ़र्मवेयर वेरिफाई करो</li>
        <li><strong className="text-white">कस्टम कंप्रेशन:</strong> स्टैंडर्ड फॉर्मेट्स की जगह कस्टम कंप्रेशन यूज़ करो</li>
        <li><strong className="text-white">ऑब्स्क्यूकेशन:</strong> फ़र्मवेयर स्ट्रक्चर को ऑब्स्क्यूकेट करो</li>
        <li><strong className="text-white">टैम्पर डिटेक्शन:</strong> फ़र्मवेयर मॉडिफिकेशन डिटेक्ट करने का मैकेनिज़्म रखो</li>
        <li><strong className="text-white">हार्डकोडेड क्रेडेंशियल्स हटाओ:</strong> फ़र्मवेयर में पासवर्ड मत रखो</li>
        <li><strong className="text-white">सिक्योर अपडेट मैकेनिज़्म:</strong> OTA अपडेट्स को साइन और एन्क्रिप्ट करो</li>
        <li><strong className="text-white">मिनिमल फ़र्मवेयर:</strong> ज़रूरी से ज़्यादा कोड मत रखो</li>
        <li><strong className="text-white">स्ट्रिप बाइनरीज़:</strong> debug symbols हटाओ</li>
        <li><strong className="text-white">फ़र्मवेयर ऑडिट:</strong> रेगुलर सिक्योरिटी ऑडिट कराओ</li>
        <li><strong className="text-white">Code Signing:</strong> फ़र्मवेयर updates को digitally sign करो — unauthorized modifications prevent होंगी</li>
        <li><strong className="text-white">Runtime Integrity Check:</strong> डिवाइस boot के समय firmware integrity verify करे — tampered firmware reject करे</li>
        <li><strong className="text-white">Minimal Attack Surface:</strong> अनावश्यक services, ports, और binaries हटाओ — जितना कम code, उतना कम risk</li>
      </ul>
      <CodeBlock
        title="फ़र्मवेयर सिक्योरिटी हार्डनिंग"
        code={`# फ़र्मवेयर को binwalk-resistant बनाने के techniques:

# 1. Custom Compression (standard formats मत use करो):
# SquashFS की जगह custom image format बनाओ
# या SquashFS को encrypt करो:
openssl enc -aes-256-cbc -in rootfs.img -out rootfs.enc -k secretkey

# 2. Header Obfuscation:
# Standard magic bytes हटाओ और custom header डालो
python3 -c "
import struct
data = open('firmware.bin','rb').read()
header = b'CUSTOM' + struct.pack('<I', len(data))
open('firmware_obfuscated.bin','wb').write(header + data)
"

# 3. Secure Boot Implementation:
# U-Boot में signature verification enable करो
setenv verify yes
setenv bootcmd "load mmc 0:1 0x80000000 boot.img; verify 0x80000000; bootm"

# 4. Anti-Tampering:
# Firmware में hash verification code embed करो
# Boot time पर self-verification करो

# 5. Remove Debug Interfaces:
# Production firmware में UART/JTAG disable करो
# Debug shell scripts remove करो
# Default passwords change/remove करो`}
      />

      <h2>Lab Environment Setup</h2>
      <p>
        फ़र्मवेयर एनालिसिस सीखने के लिए सेफ लैब बनाना ज़रूरी है:
      </p>
      <CodeBlock
        title="लैब सेटअप"
        code={`# वर्चुअल मशीन बनाएं (VirtualBox/VMware):
# काली लिनक्स VM

# प्रैक्टिस फ़र्मवेयर डाउनलोड करें:
# routersecurity.org — राउटर फ़र्मवेयर सैंपल्स
# firmware.re — फ़र्मवेयर एनालिसिस प्लेटफॉर्म
# GitHub — IoT-vuln-firmware रिपॉज़िटरीज़

# सिंपल फ़र्मवेयर से शुरू करें:
# पुराने राउटर की फ़र्मवेयर फाइल
# TP-Link, D-Link, Netgear की वेबसाइट्स से

# टेस्ट फ़र्मवेयर बनाएं:
dd if=/dev/urandom of=test_firmware.bin bs=1M count=1
echo "SECRET_PASSWORD=admin123" >> test_firmware.bin
binwalk test_firmware.bin

# QEMU एमुलेशन सेटअप:
sudo apt install qemu-user-static
# एक्सट्रैक्टेड बाइनरी को QEMU में रन करो`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="एडवांस्ड बिनवॉक"
        code={`# कस्टम सिग्नेचर जोड़ें:
# ~/.config/binwalk/magic/ में कस्टम मैजिक फाइल बनाओ
mkdir -p ~/.config/binwalk/magic/
cat > ~/.config/binwalk/magic/custom << 'EOF'
0   string  CUSTOM_HEADER  Custom Firmware Header
>8  lelong  x              Version: %d
EOF

# कस्टम एक्सट्रैक्टर प्लगइन:
# ~/.config/binwalk/plugins/ में Python फाइल बनाओ
mkdir -p ~/.config/binwalk/plugins/
cat > ~/.config/binwalk/plugins/custom_extractor.py << 'EOF'
import binwalk

class CustomExtractor:
    def __init__(self):
        self.name = "Custom"
        self.offset = 0

    def extract(self, fp):
        # कस्टम एक्सट्रैक्शन लॉजिक
        pass
EOF

# हेक्स डंप के साथ एनालिसिस:
xxd firmware.bin | head -100
hexdump -C firmware.bin | head -50

# फ़र्मवेयर रिपैक करना (firmware-mod-kit के साथ):
git clone https://github.com/rampageX/firmware-mod-kit.git
cd firmware-mod-kit
./extract-firmware.sh firmware.bin
# एक्सट्रैक्टेड फाइल्स मॉडिफाई करो
./build-firmware.sh
# नई firmware.bin बनेगी

# फ़र्मवेयर एमुलेशन (QEMU के साथ):
sudo apt install qemu-user-static binfmt-support
# एक्सट्रैक्टेड बाइनरी को QEMU में रन करो
qemu-arm -L /usr/arm-linux-gnueabi/ usr/bin/httpd
qemu-mips -L /usr/mips-linux-gnu/ usr/bin/httpd

# FirmAE ऑटोमैटिक एमुलेशन:
git clone https://github.com/pr0v3rbs/FirmAE.git
cd FirmAE
./run.sh -r <brand> firmware.bin

# फ़र्मवेयर डिक्रिप्शन (अगर की मिल जाए):
openssl aes-256-cbc -d -in firmware.enc -out firmware.bin -k key
openssl enc -aes-256-cbc -d -in firmware.enc -out firmware.bin -pass pass:mypassword

# बाइनरी पैचिंग (hexedit):
hexedit usr/bin/httpd
# या Python से:
python3 -c "
data = open('httpd','rb').read()
data = data.replace(b'admin123', b'newpass456')
open('httpd_patched','wb').write(data)
"

# फ़र्मवेयर डंपिंग (सीरियल कंसोल से):
# UART/JTAG से डायरेक्ट मेमोरी डंप
dd if=/dev/mtd0 of=/tmp/firmware.bin
# या flashrom से:
flashrom -p ch341a -r firmware_dump.bin`}
      />
      <CodeBlock
        title="Firmware Emulation with QEMU"
        code={`# QEMU user-mode emulation setup:
sudo apt install qemu-user-static binfmt-support

# Architecture detect करो:
file usr/bin/httpd
# output: ELF 32-bit MSB executable, MIPS, MIPS32 version 1

# QEMU binary डाउनलोड करो (MIPS के लिए):
sudo apt install qemu-user-static

# Root filesystem setup करो:
cd _firmware.bin.extracted/squashfs-root/
sudo cp /usr/bin/qemu-mips-static ./

# Chroot environment setup:
sudo chroot . /bin/sh

# Network services start करो:
./usr/bin/httpd
./usr/sbin/telnetd

# Host machine से access करो:
curl http://192.168.1.10:80

# FirmAE automatic emulation:
git clone https://github.com/pr0v3rbs/FirmAE.git
cd FirmAE
sudo ./setup.sh
sudo ./run.sh -r <brand> firmware.bin
# Automatic network setup और service start होगा`}
      />
      <CodeBlock
        title="Advanced Binary Analysis"
        code={`# Ghidra में फ़र्मवेयर बाइनरी analyze करो:
# 1. एक्सट्रैक्टेड बाइनरी Ghidra में import करो
# 2. Architecture select करो (MIPS/ARM)
# 3. Auto-analysis run करो
# 4. Interesting functions find करो:
#    - main(), httpd_request_handler()
#    - password_check(), authentication()
#    - command_exec(), system()

# Radare2 से quick analysis:
r2 -A usr/bin/httpd
afl  # functions list
pdf @ sym.main  # main function disassemble

# Strings analysis (security issues find करो):
strings usr/bin/httpd | grep -iE "(password|admin|root|login|key)"
strings etc/shadow
strings etc/passwd

# Hardcoded credentials search:
grep -rn "admin" etc/
grep -rn "password" usr/
grep -rn "root:" etc/shadow

# Backdoor detection:
find . -name "*.sh" -exec grep -l "telnet" {} \;
find . -name "*.conf" -exec grep -l "backdoor" {} \;
netstat -tlnp  # listening services

# Network configuration analyze:
cat etc/hosts
cat etc/resolv.conf
cat etc/init.d/*`}
      />
      <CodeBlock
        title="Firmware Repacking and Modification"
        code={`# firmware-mod-kit install करो:
git clone https://github.com/rampageX/firmware-mod-kit.git
cd firmware-mod-kit

# फ़र्मवेयर extract करो:
./extract-firmware.sh firmware.bin

# एक्सट्रैक्टेड filesystem modify करो:
cd fmk/rootfs/
# उदाहरण: backdoor add करो (authorized_keys):
mkdir -p root/.ssh/
echo "ssh-rsa AAAA..." >> root/.ssh/authorized_keys

# या telnet access enable करो:
sed -i 's/ENABLE_telnet=0/ENABLE_telnet=1/' etc/config/*

# Recompile करो:
cd ../..
./build-firmware.sh
# नई firmware.bin बनेगी

# Custom firmware flash करो:
# Router admin panel से upload करो
# या TFTP recovery mode use करो

# Important: firmware header checksum update करो
# कुछ routers checksum verify करते हैं
# mksquashfs -comp lzma -noappend ...`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        फ़र्मवेयर एनालिसिस real-world security research में बहुत महत्वपूर्ण है। यहाँ कुछ उदाहरण हैं:
      </p>
      <p>
        <strong className="text-white">Case Study 1 — Router Vulnerability Discovery:</strong> एक security researcher ने TP-Link के popular router की firmware download करके बिनवॉक से analyze किया। SquashFS extract करने पर /etc/shadow file में default root password मिला — "admin123456"। इसके अलावा telnet service hardcoded थी जो backdoor की तरह काम करती थी। Researcher ने manufacturer को report किया और CVE assign हुआ। Firmware update release हुआ जिसमें यह issues fix किए गए।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — IP Camera Backdoor:</strong> एक Chinese IP camera की firmware analyze करने पर binwalk ने SquashFS filesystem extract किया। /usr/bin/ directory में एक binary मिली जो port 9527 पर telnet server run करती थी — यह documentation में mention नहीं थी। इसके अलावा /etc/init.d/start.sh में hardcoded credentials मिले manufacturer के cloud server के लिए। यह vulnerability 100,000+ devices में affected थी।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — Smart Home Hub Analysis:</strong> एक popular smart home hub की firmware analyze करने पर binwalk ने कई layers extract कीं — outer firmware, inner SquashFS, और एक encrypted partition। Entropy analysis से encrypted partition identify हुई। Firmware-mod-kit से repacking करके custom firmware बनाई गई जिसमें SSH access add था। इससे device का full root access मिल गया — manufacturer ने OTA update से fix किया।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        बिनवॉक अकेले powerful है, लेकिन दूसरे tools के साथ combine करने पर complete firmware analysis pipeline बनता है:
      </p>
      <CodeBlock
        title="बिनवॉक + QEMU + Ghidra Combo"
        code={`# Complete firmware analysis pipeline:

# Step 1: बिनवॉक से extract करो:
binwalk -eM firmware.bin
cd _firmware.bin.extracted/squashfs-root/

# Step 2: Strings analysis:
strings usr/bin/httpd | grep -i password
grep -rn "admin" etc/

# Step 3: QEMU में emulate करो:
sudo chroot . /qemu-mips-static /usr/bin/httpd

# Step 4: Network services test करो:
curl http://localhost:80
nmap -sV localhost

# Step 5: Ghidra में binary analyze करो:
# usr/bin/httpd import करो → MIPS architecture
# Vulnerability find करो

# Step 6: Exploit develop करो:
# Buffer overflow, command injection, etc.

# Step 7: Custom firmware build करो:
# firmware-mod-kit से repack करो`}
      />
      <CodeBlock
        title="Firmware Security Scanner"
        code={`#!/bin/bash
# Automated firmware security scanner

FIRMWARE="$1"
OUTPUT_DIR="/tmp/fw_scan_$(date +%s)"
mkdir -p "$OUTPUT_DIR"

echo "[*] Scanning: $FIRMWARE"

# Step 1: बिनवॉक extract:
binwalk -eM -C "$OUTPUT_DIR" "$FIRMWARE"

# Step 2: Hardcoded credentials:
echo "[*] Searching for credentials..."
grep -rn "password" "$OUTPUT_DIR/" > "$OUTPUT_DIR/creds.txt"
grep -rn "admin" "$OUTPUT_DIR/" >> "$OUTPUT_DIR/creds.txt"
cat "$OUTPUT_DIR/etc/shadow" 2>/dev/null >> "$OUTPUT_DIR/creds.txt"

# Step 3: Backdoor detection:
echo "[*] Checking for backdoors..."
find "$OUTPUT_DIR/" -name "*.sh" -exec grep -l "telnet" {} \;
find "$OUTPUT_DIR/" -name "*.conf" -exec grep -l "bind" {} \;

# Step 4: Network services:
echo "[*] Analyzing network config..."
cat "$OUTPUT_DIR/etc/hosts" 2>/dev/null
cat "$OUTPUT_DIR/etc/resolv.conf" 2>/dev/null

# Step 5: Init scripts:
echo "[*] Checking startup scripts..."
ls "$OUTPUT_DIR/etc/init.d/" 2>/dev/null
cat "$OUTPUT_DIR/etc/init.d/*" 2>/dev/null

echo "[+] Scan complete: $OUTPUT_DIR/"`}
      />
      <CodeBlock
        title="Firmware Database Builder"
        code={`#!/bin/bash
# Firmware database for comparison analysis

DB_DIR="/tmp/firmware_db"
mkdir -p "$DB_DIR"

# फ़र्मवेयर samples collect करो:
for fw in /tmp/firmware_samples/*.bin; do
    name=$(basename "$fw" .bin)
    mkdir -p "$DB_DIR/$name"

    # Scan report:
    binwalk "$fw" > "$DB_DIR/$name/scan.txt"

    # Entropy data:
    binwalk -E "$fw" > "$DB_DIR/$name/entropy.txt"

    # CPU architecture:
    binwalk -A "$fw" > "$DB_DIR/$name/architecture.txt"

    # Extracted file list:
    binwalk -eM -C "$DB_DIR/$name/extracted" "$fw" 2>/dev/null
    find "$DB_DIR/$name/extracted/" -type f > "$DB_DIR/$name/filelist.txt"

    echo "[+] Processed: $name"
done

# Database summary:
echo "=== Firmware Database ==="
ls "$DB_DIR/"
echo "Total samples: $(ls "$DB_DIR/" | wc -l)"`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        फ़र्मवेयर एनालिसिस के बाद proper documentation बहुत ज़रूरी है:
      </p>
      <CodeBlock
        title="Analysis Report Generation"
        code={`#!/bin/bash
# Comprehensive firmware analysis report

FIRMWARE="$1"
REPORT="/tmp/firmware_report_$(date +%Y%m%d).txt"

echo "=== Firmware Security Analysis Report ===" > "$REPORT"
echo "Date: $(date)" >> "$REPORT"
echo "Firmware: $FIRMWARE" >> "$REPORT"
echo "Size: $(ls -lh "$FIRMWARE" | awk '{print $5}')" >> "$REPORT"
echo "" >> "$REPORT"

echo "--- Signature Scan ---" >> "$REPORT"
binwalk "$FIRMWARE" >> "$REPORT"
echo "" >> "$REPORT"

echo "--- CPU Architecture ---" >> "$REPORT"
binwalk -A "$FIRMWARE" >> "$REPORT"
echo "" >> "$REPORT"

echo "--- Entropy Analysis ---" >> "$REPORT"
binwalk -E "$FIRMWARE" >> "$REPORT"
echo "" >> "$REPORT"

echo "--- Extracted Contents ---" >> "$REPORT"
EXTRACT_DIR=$(mktemp -d)
binwalk -eM -C "$EXTRACT_DIR" "$FIRMWARE" 2>/dev/null
find "$EXTRACT_DIR/" -type f | head -100 >> "$REPORT"
echo "" >> "$REPORT"

echo "--- Security Issues ---" >> "$REPORT"
echo "Hardcoded credentials:" >> "$REPORT"
grep -rn "password" "$EXTRACT_DIR/" 2>/dev/null | head -20 >> "$REPORT"
echo "" >> "$REPORT"
echo "Shadow file:" >> "$REPORT"
cat "$EXTRACT_DIR/*/etc/shadow" 2>/dev/null >> "$REPORT"

echo "" >> "$REPORT"
echo "=== End of Report ===" >> "$REPORT"

echo "[+] Report saved: $REPORT"`}
      />

      <h2>Performance Tuning</h2>
      <p>
        बड़े फ़र्मवेयर files को analyze करते समय performance optimize करना ज़रूरी है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Scan Depth Limit:</strong> बड़े firmware में -d flag use करो — scan depth limit करो: binwalk -d 3 firmware.bin</li>
        <li><strong className="text-white">Time Limit:</strong> -t flag से scan time limit set करो: binwalk -t 60 firmware.bin (60 seconds)</li>
        <li><strong className="text-white">Selective Extraction:</strong> -D flag से सिर्फ specific types extract करो: binwalk -D 'squashfs:squashfs' firmware.bin</li>
        <li><strong className="text-white">Quiet Mode:</strong> -q flag से banner suppress करो — scripting में useful</li>
        <li><strong className="text-white">Output Directory:</strong> -C flag से output directory specify करो — disk space manage करो</li>
        <li><strong className="text-white">Memory Management:</strong> बड़े firmware (1GB+) के लिए sufficient RAM चाहिए — swap file setup करो</li>
        <li><strong className="text-white">SSD Storage:</strong> SSD पर extract करो — HDD से बहुत fast होता है</li>
        <li><strong className="text-white">Parallel Processing:</strong> कई firmware files को parallel में process करो — xargs -P use करो</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या बिनवॉक फ्री है?', a: 'हाँ, पूरी तरह फ्री और ओपन सोर्स (MIT लाइसेंस)। ReFirm Labs का Enterprise वर्जन भी है लेकिन ओपन सोर्स वर्जन सबके लिए उपलब्ध है।' },
          { q: 'कौन से फ़र्मेट्स सपोर्ट करता है?', a: 'SquashFS, JFFS2, CramFS, YAFFS2, UBIFS, ext2/3/4, gzip, LZMA, LZMA2, bzip2, tar, cpio, ZIP, RAR, 7z, और 300+ और फ़ाइल टाइप्स।' },
          { q: 'एन्क्रिप्टेड फ़र्मवेयर एनालाइज़ कर सकता है?', a: 'सिग्नेचर स्कैन कर सकता है (एन्ट्रोपी दिखाएगा) लेकिन एक्सट्रैक्ट नहीं कर पाएगा। डिक्रिप्शन की अलग से ज़रूरत है।' },
          { q: 'फ़र्मवेयर रिपैक कर सकता है?', a: 'बिनवॉक सिर्फ एनालिसिस और एक्सट्रैक्शन करता है। रिपैकिंग के लिए firmware-mod-kit या कस्टम स्क्रिप्ट चाहिए।' },
          { q: 'Windows पर चलता है?', a: 'हाँ, लेकिन Linux पर बेस्ट काम करता है। कुछ एक्सट्रैक्शन टूल्स Linux-ओनली हैं।' },
          { q: 'बिनवॉक v2 और v3 में क्या फ़र्क है?', a: 'v3 (ReFirm Labs) में बेहतर एनालिसिस, प्लगइन सिस्टम, और Python API है। v2 पुराना है।' },
          { q: 'क्या बिनवॉक लाइव फ़र्मवेयर एनालाइज़ कर सकता है?', a: 'नहीं, बिनवॉक सिर्फ ऑफलाइन फ़ाइल एनालिसिस करता है। लाइव एनालिसिस के लिए QEMU या फ़र्मवेयर एमुलेशन चाहिए।' },
          { q: 'फ़र्मवेयर कहाँ से डाउनलोड करें?', a: 'निर्माता की वेबसाइट, firmware.re, routersecurity.org, या GitHub पर IoT-vuln-firmware रिपॉज़िटरीज़।' },
          { q: 'क्या बिनवॉक Android firmware analyze कर सकता है?', a: 'हाँ, Android firmware images (system.img, boot.img) को analyze और extract कर सकता है। ext4, erofs, और sparse image formats support करता है।' },
          { q: 'बिनवॉक और strings command में क्या फ़र्क है?', a: 'strings सिर्फ printable strings ढूंढता है, बिनवॉक file signatures, embedded filesystems, compressed data — सब पहचानता है। बिनवॉक structured analysis करता है, strings raw data दिखाता है।' },
          { q: 'क्या बिनवॉक encrypted firmware decrypt कर सकता है?', a: 'नहीं, बिनवॉक सिर्फ detection करता है — entropy analysis से encrypted areas identify करता है। Decryption के लिए key चाहिए और OpenSSL या कस्टम scripts use करने पड़ते हैं।' },
          { q: 'फ़र्मवेयर modify करने के बाद flash कैसे करें?', a: 'Manufacturer के update mechanism से (web admin panel), TFTP recovery mode, ya serial console (UART) से। कुछ devices में bootloader unlock करना पड़ता है।' },
          { q: 'क्या बिनवॉक UEFI firmware analyze कर सकता है?', a: 'Limited support है। UEFI firmware के लिए UEFITool बेहतर है। बिनवॉक embedded filesystems और compressed data detect कर सकता है लेकिन UEFI-specific structures नहीं।' },
          { q: 'Firmware में malware कैसे ढूंढें?', a: 'बिनवॉक से extract करो, फिर ClamAV या YARA rules से scan करो। Suspicious shell scripts और unknown binaries check करो। VirusTotal पर hash submit करो।' },
          { q: 'क्या बिनवॉक Docker में चल सकता है?', a: 'हाँ, Docker container में चल सकता है। लेकिन extraction tools (unsquashfs etc.) container में install करने पड़ेंगे। Volume mount करके firmware files share करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        बिनवॉक का इस्तेमाल कई high-profile IoT security research में हुआ है। 2019 में एक security researcher ने TP-Link के एक popular router की firmware बिनवॉक से analyze की और उसमें hardcoded SSH credentials मिले जो factory default में active थे। यह vulnerability millions of routers को affect करती थी। बिनवॉक ने firmware से SquashFS filesystem extract किया, और फिर grep से shadow file में default password मिल गया।
      </p>
      <p>
        एक और case में, एक IP camera manufacturer की firmware में backdoor script मिली जो remote access provide करती थी। Researcher ने बिनवॉक से firmware extract किया, shell scripts analyze किए, और एक suspicious init script मिली जो telnetd start करती थी। यह backdoor manufacturer ने debug purposes के लिए डाला था लेकिन production firmware में remove करना भूल गए। CISA ने इसके लिए advisory जारी किया।
      </p>
      <p>
        2021 में एक medical device manufacturer की firmware में unencrypted patient data storage मिली। Security auditor ने बिनवॉक से firmware analyze करके दिखाया कि patient records plain text में store हो रहे थे। यह HIPAA compliance violation था। बिनवॉक की entropy analysis से पता चला कि data storage area की entropy बहुत कम है — यानी data encrypted नहीं है। इस research के बाद manufacturer ने encryption implement किया।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        बिनवॉक अकेले powerful है, लेकिन दूसरे tools के साथ combine करने से और भी ज़्यादा effective बनता है:
      </p>
      <CodeBlock
        title="बिनवॉक + अन्य टूल्स कॉम्बो"
        code={`# बिनवॉक + Ghidra (Static Analysis):
# Step 1: बिनवॉक से extract करो
binwalk -eM firmware.bin
# Step 2: Extracted binary Ghidra में open करो
# Architecture select करो (MIPS/ARM)
# Functions analyze करो

# बिनवॉक + QEMU (Dynamic Analysis):
binwalk -eM firmware.bin
cd _firmware.bin.extracted/squashfs-root/
sudo chroot . qemu-mips-static /bin/sh

# बिनवॉक + Nmap (Network Analysis):
# Firmware extract करो, services identify करो
grep -rn "listen" etc/init.d/
# फिर Nmap से scan करो
nmap -sV -p 1-65535 target_ip

# बिनवॉक + Metasploit:
# Firmware में vulnerabilities find करो
# Metasploit modules search करो
searchsploit "router brand model"

# बिनवॉक + Radare2:
r2 -A usr/bin/httpd
afl  # functions list
pdf @ sym.main  # disassemble main`}
      />

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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">firmware-mod-kit</td><td className="py-2 px-3">फ़र्मवेयर मॉडिफिकेशन</td><td className="py-2 px-3">एक्सट्रैक्ट + रिपैक दोनों</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">FACT</td><td className="py-2 px-3">फ़र्मवेयर एनालिसिस</td><td className="py-2 px-3">Web UI, ऑटोमेटेड एनालिसिस</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">FirmWalker</td><td className="py-2 px-3">फ़र्मवेयर स्कैनिंग</td><td className="py-2 px-3">सिक्योरिटी स्कैनिंग</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">FirmAE</td><td className="py-2 px-3">फ़र्मवेयर एमुलेशन</td><td className="py-2 px-3">ऑटोमैटिक एमुलेशन</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">unsquashfs</td><td className="py-2 px-3">SquashFS एक्सट्रैक्शन</td><td className="py-2 px-3">स्पेसिफिक टूल</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">jefferson</td><td className="py-2 px-3">JFFS2 एक्सट्रैक्शन</td><td className="py-2 px-3">Python-based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">cramfsck</td><td className="py-2 px-3">CramFS एक्सट्रैक्शन</td><td className="py-2 px-3">Linux टूल</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">ubireader</td><td className="py-2 px-3">UBIFS एक्सट्रैक्शन</td><td className="py-2 px-3">Python-based</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>बिनवॉक + QEMU कॉम्बो बहुत पावरफुल है — पहले एक्सट्रैक्ट करो, फिर एमुलेट करो</li>
          <li>एन्ट्रोपी एनालिसिस हमेशा पहले करो — एन्क्रिप्टेड हिस्से skip करो</li>
          <li>रिकर्सिव एक्सट्रैक्शन (-eM) बड़े फ़र्मवेयर में सावधानी से यूज़ करो — बहुत फाइल्स निकल सकती हैं</li>
          <li>कस्टम मैजिक फाइल बनाओ कस्टम फ़र्मवेयर फॉर्मेट्स के लिए</li>
          <li>डिफ़ एनालिसिस (-W) से सिक्योरिटी पैच और बैकडोर दोनों ढूंढ सकते हो</li>
          <li>firmware-mod-kit से रिपैक करके कस्टम फ़र्मवेयर बना सकते हो</li>
          <li>UART/JTAG से डायरेक्ट मेमोरी डंप भी ले सकते हो</li>
          <li>strings कमांड से पासवर्ड्स और URL जल्दी मिलते हैं</li>
          <li>फ़र्मवेयर download करने से पहले manufacturer की website check करो — GPL source code मिल सकता है</li>
          <li>Ghidra + बिनवॉक combo reverse engineering के लिए best है — static analysis + firmware extraction</li>
          <li>कई routers में debug interfaces (UART) होते हैं — physical access से root shell मिल सकता है</li>
          <li>FirmAE tool automatic firmware emulation करता है — manual QEMU setup से बचाता है</li>
          <li>फ़र्मवेयर update files अक्सर manufacturer की website से freely downloadable होती हैं</li>
          <li>बड़े firmware के लिए SSD storage use करो — extraction speed 10x बढ़ जाती है</li>
          <li>फ़र्मवेयर की MD5/SHA256 hash verify करो — download integrity check करो</li>
          <li>GPL compliance के लिए manufacturers source code release करते हैं — यह analysis में बहुत helpful है</li>
          <li>Diff analysis (-W) से security patches verify करो — patch properly install हुआ या नहीं</li>
          <li>बिनवॉक Python API scripting के लिए best है — batch processing में काम आता है</li>
          <li>फ़र्मवेयर एनालिसिस के बाद हमेशा report बनाओ — findings document करो</li>
          <li>IoT CTF competitions में participate करो — real-world experience मिलता है</li>
          <li>Firmware update files manufacturer की website से freely downloadable होती हैं — research के लिए best source</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> बिनवॉक एक शक्तिशाली फ़र्मवेयर एनालिसिस टूल है। इसका इस्तेमाल केवल अधिकृत सुरक्षा शोध, शैक्षिक उद्देश्यों, और अपने स्वयं के डिवाइसेज़ के लिए करें। बिना अनुमति के किसी डिवाइस का फ़र्मवेयर रिवर्स इंजीनियरिंग करना अवैध हो सकता है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत सॉफ़्टवेयर मॉडिफिकेशन अपराध हो सकता है। साइबर अपराध गंभीर परिणामों का कारण बन सकता है — जुर्माना और जेल दोनों हो सकते हैं। DMCA (Digital Millennium Copyright Act) और CFAA (Computer Fraud and Abuse Act) जैसे laws भी लागू हो सकते हैं। केवल अपने लैब या लिखित अनुमति के साथ ही उपयोग करें।
      </div>
    </TutorialLayout>
  )
}
