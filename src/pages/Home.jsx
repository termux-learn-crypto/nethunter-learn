import Hero from '../components/Hero'
import Card from '../components/Card'

const sections = [
  {
    title: 'इंस्टॉलेशन गाइड',
    description: 'काली नेटहंटर को अपने एंड्रॉइड डिवाइस पर इंस्टॉल करने का कदम-दर-कदम गाइड। रूटेड और रूटलेस दोनों तरीकों का संपूर्ण ट्यूटोरियल।',
    icon: '📱',
    to: '/installation',
    color: 'green',
  },
  {
    title: 'वाईफाई हैकिंग',
    description: 'वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग सीखें — मॉनिटर मोड, पैकेट कैप्चर, WPA क्रैकिंग, ईविल ट्विन अटैक और बहुत कुछ।',
    icon: '📡',
    to: '/wifi',
    color: 'cyan',
  },
  {
    title: 'ब्लूटूथ हैकिंग',
    description: 'ब्लूटूथ सिक्योरिटी का अन्वेषण करें — स्कैनिंग, एन्यूमरेशन, BLE अटैक, और एक्सप्लॉइटेशन तकनीकों का संपूर्ण गाइड।',
    icon: '🔵',
    to: '/bluetooth',
    color: 'cyan',
  },
  {
    title: 'पेलोड और अटैक',
    description: 'पेलोड, मेटास्प्लॉइट फ्रेमवर्क, सोशल इंजीनियरिंग, और HID अटैक को नेटहंटर पर कैसे उपयोग करें सीखें।',
    icon: '💣',
    to: '/payloads',
    color: 'red',
  },
  {
    title: 'टूल्स रेफरेंस',
    description: 'नेटहंटर के सभी महत्वपूर्ण टूल्स का संपूर्ण रेफरेंस — विवरण, कमांड, और चीट शीट के साथ।',
    icon: '🔧',
    to: '/tools',
    color: 'green',
  },
  {
    title: 'नेटहंटर के बारे में',
    description: 'क्या है काली नेटहंटर, इसका इतिहास, क्षमताएं, और एथिकल हैकिंग की दुनिया के बारे में सब कुछ जानें।',
    icon: 'ℹ️',
    to: '/about',
    color: 'cyan',
  },
]

const features = [
  { icon: '🎯', label: 'शुरुआती के लिए उपयुक्त', desc: 'जीरो से सीखना शुरू करें' },
  { icon: '⚡', label: 'प्रैक्टिकल लैब्स', desc: 'सुरक्षित माहौल में अभ्यास' },
  { icon: '🛡️', label: 'एथिकल फोकस', desc: 'कानूनी और जिम्मेदार हैकिंग' },
  { icon: '📚', label: 'संपूर्ण गाइड', desc: 'ए से ज़ेड सब कुछ कवर' },
]

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Features bar */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map(f => (
            <div key={f.label} className="glass-card p-4 text-center">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="text-white font-semibold text-sm">{f.label}</div>
              <div className="text-gray-500 text-xs">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="glass-card p-8">
          <h2 className="text-2xl font-heading text-neon-green mb-4">नेटहंटर लर्न में आपका स्वागत है!</h2>
          <div className="text-gray-400 space-y-4 leading-relaxed">
            <p>
              क्या आप साइबर सिक्योरिटी सीखना चाहते हैं? क्या आपको एथिकल हैकिंग में रुचि है? क्या आप मोबाइल पेनिट्रेशन टेस्टिंग सीखना चाहते हैं? तो आप सही जगह आए हैं! नेटहंटर लर्न एक संपूर्ण मंच है जहां आप काली नेटहंटर के माध्यम से मोबाइल एथिकल हैकिंग कदम-दर-कदम सीख सकते हैं।
            </p>
            <p>
              यह वेबसाइट विशेष रूप से शुरुआती लोगों के लिए बनाई गई है। यहां आपको हर चीज़ हिंदी में समझाई जाएगी — चाहे आपको नेटहंटर इंस्टॉल करना हो, वाईफाई हैक करना हो, ब्लूटूथ टेस्टिंग करना हो, या पेलोड बनाना हो। हमने सब कुछ आसान भाषा में लिखा है ताकि कोई भी शुरुआती आसानी से समझ सके।
            </p>
            <p>
              <strong className="text-neon-green">याद रखें:</strong> यह सब कुछ केवल शैक्षिक उद्देश्यों के लिए है। हम हमेशा एथिकल हैकिंग और जिम्मेदार खुलासे को बढ़ावा देते हैं। बिना अनुमति के किसी भी सिस्टम को हैक करना गैरकानूनी है और इसके गंभीर कानूनी परिणाम हो सकते हैं।
            </p>
          </div>
        </div>
      </section>

      {/* What is Nethunter */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <h2 className="section-title">
          <span className="text-neon-green">&gt;</span> क्या है नेटहंटर?
        </h2>
        <div className="tutorial-content text-gray-400 space-y-4">
          <p>
            काली नेटहंटर एक मोबाइल पेनिट्रेशन टेस्टिंग प्लेटफॉर्म है जो काली लिनक्स पर आधारित है। यह ऑफेंसिव सिक्योरिटी द्वारा विकसित किया गया है — वही टीम जो काली लिनक्स बनाती है। नेटहंटर आपके एंड्रॉइड फोन को एक पोर्टेबल हैकिंग मशीन में बदल देता है।
          </p>
          <p>
            मूल रूप से 2014 में रिलीज़ होने के बाद, नेटहंटर बहुत विकसित हो चुका है। आज यह एक व्यापक मोबाइल सिक्योरिटी टेस्टिंग प्लेटफॉर्म है जिसे सुरक्षा पेशेवर, शोधकर्ता, और छात्र दुनिया भर में उपयोग करते हैं। इसमें काली लिनक्स के 600+ टूल्स शामिल हैं जो एंड्रॉइड पर चलते हैं।
          </p>
          <p>
            नेटहंटर तीन संस्करणों में आता है — <strong>नेटहंटर (रूट)</strong> जिसमें सभी फीचर्स हैं और रूटेड डिवाइस चाहिए, <strong>नेटहंटर रूटलेस</strong> जो बिना रूट के सीमित फीचर्स देता है, और <strong>नेटहंटर लाइट</strong> जो कम स्टोरेज वाले डिवाइस के लिए है।
          </p>
          <p>
            इस प्लेटफॉर्म की सबसे बड़ी बात यह है कि आप अपने फोन से वाईफाई नेटवर्क टेस्ट कर सकते हैं, ब्लूटूथ डिवाइस स्कैन कर सकते हैं, मेटास्प्लॉइट पेलोड जनरेट कर सकते हैं, और बहुत कुछ कर सकते हैं — सब कुछ अपने हाथ में!
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="section-title text-center">
          <span className="text-neon-green">&gt;</span> अपना रास्ता चुनें
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          सीखना शुरू करने के लिए एक विषय चुनें। हर सेक्शन में विस्तृत ट्यूटोरियल, कमांड, और प्रैक्टिकल उदाहरण हैं।
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map(s => (
            <Card key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="section-title">
          <span className="text-neon-green">&gt;</span> क्यों सीखें एथिकल हैकिंग?
        </h2>
        <div className="tutorial-content text-gray-400 space-y-4">
          <p>
            आज के डिजिटल युग में साइबर सिक्योरिटी की मांग बहुत बढ़ गई है। हर दिन नई कमज़ोरियां और हमले सामने आते हैं। कंपनियों को कुशल सुरक्षा पेशेवरों की ज़रूरत है जो उनके सिस्टम की रक्षा कर सकें। एथिकल हैकिंग सीखकर आप:
          </p>
          <ul>
            <li><strong className="text-neon-green">उच्च वेतन वाला करियर</strong> बना सकते हैं — साइबर सिक्योरिटी पेशेवरों की तनख्वाह बहुत अच्छी होती है</li>
            <li><strong className="text-neon-green">बग बाउंटी</strong> प्रोग्राम से अतिरिक्त कमा सकते हैं — हैकरवन और बगक्राउड पर कंपनियां बग खोजने के लिए लाखों देती हैं</li>
            <li><strong className="text-neon-green">अपनी डिजिटल दुनिया</strong> को सुरक्षित कर सकते हैं — अपने घर का वाईफाई, फोन, और कंप्यूटर सुरक्षित कर सकते हैं</li>
            <li><strong className="text-neon-green">सुरक्षा प्रमाणपत्र</strong> जैसे CEH, OSCP, CompTIA PenTest+ ले सकते हैं जो करियर में बहुत मदद करते हैं</li>
            <li><strong className="text-neon-green">CTF प्रतियोगिताओं</strong> में भाग ले सकते हैं और अपनी क्षमताओं की परीक्षा कर सकते हैं</li>
          </ul>
          <p>
            नेटहंटर सीखना एक बहुत अच्छा शुरुआती बिंदु है क्योंकि यह आपको व्यावहारिक रूप से सिखाता है कि असली दुनिया के हमले कैसे काम करते हैं और उनसे कैसे बचें।
          </p>
        </div>
      </section>

      {/* Getting Started */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="section-title">
          <span className="text-neon-green">&gt;</span> कैसे शुरू करें?
        </h2>
        <div className="space-y-4">
          {[
            { step: '1', title: 'नेटहंटर इंस्टॉल करें', desc: 'सबसे पहले अपने एंड्रॉइड डिवाइस पर नेटहंटर इंस्टॉल करें। हमारी इंस्टॉलेशन गाइड आपको कदम-दर-कदम मदद करेगी।', to: '/installation' },
            { step: '2', title: 'नेटवर्किंग बेसिक्स सीखें', desc: 'TCP/IP, पोर्ट्स, प्रोटोकॉल के बारे में बुनियादी ज्ञान लें। यह सब कुछ की नींव है।', to: '/tools' },
            { step: '3', title: 'वाईफाई हैकिंग शुरू करें', desc: 'वायरलेस सिक्योरिटी टेस्टिंग से व्यावहारिक हैकिंग सीखना शुरू करें। मॉनिटर मोड, पैकेट कैप्चर, WPA क्रैकिंग सीखें।', to: '/wifi' },
            { step: '4', title: 'टूल्स में महारत हासिल करें', desc: 'Nmap, Aircrack-ng, Metasploit जैसे टूल्स को अच्छे से सीखें। टूल्स रेफरेंस पेज पर सब मिल जाएगा।', to: '/tools' },
            { step: '5', title: 'लैब्स पर अभ्यास करें', desc: 'HackTheBox, TryHackMe, DVWA जैसे सुरक्षित प्लेटफॉर्म पर अभ्यास करें। यहां कानूनी रूप से हैक कर सकते हैं।' },
            { step: '6', title: 'प्रमाणपत्र लें', desc: 'CEH, OSCP, CompTIA PenTest+ जैसे प्रमाणपत्र लें जो आपको पेशेवर बनाएंगे।' },
          ].map(item => (
            <div key={item.step} className="flex items-start space-x-4 glass-card p-4">
              <div className="flex-shrink-0 w-10 h-10 bg-neon-green/10 border border-neon-green/30 rounded-full flex items-center justify-center text-neon-green font-heading font-bold">
                {item.step}
              </div>
              <div>
                <h4 className="text-white font-semibold">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="warning-box">
          <h3 className="text-neon-red font-heading font-bold text-lg mb-3">⚠️ ज़रूरी अस्वीकरण</h3>
          <div className="text-red-300/80 space-y-2 text-sm">
            <p>
              NethunterLearn.in पर दिया गया सारा कंटेंट केवल शैक्षिक उद्देश्यों के लिए है। हम किसी भी अवैध हैकिंग गतिविधि का समर्थन, प्रचार, या प्रोत्साहन नहीं करते। बिना उचित अधिकार के किसी भी सिस्टम या नेटवर्क पर सुरक्षा परीक्षण करना गैरकानूनी है।
            </p>
            <p>
              भारत में सूचना प्रौद्योगिकी अधिनियम, 2000 (धारा 43 और धारा 66) के तहत अनधिकृत कंप्यूटर एक्सेस एक आपराधिक अपराध है जिसमें कारावास और भारी जुर्माना दोनों हो सकते हैं। ऐसे ही कानून दुनिया के लगभग हर देश में हैं।
            </p>
            <p>
              आपको हमेशा लिखित अनुमति लेनी चाहिए किसी भी तीसरे पक्ष के सिस्टम पर परीक्षण से पहले। अपने खुद के सिस्टम पर परीक्षण या अधिकृत लैब वातावरण (HackTheBox, TryHackMe, DVWA) पर अभ्यास करना सुरक्षित और कानूनी है।
            </p>
          </div>
        </div>
      </section>

      {/* Terminal quote */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="code-block">
          <div className="text-gray-500 mb-1"># हैकर की सोच</div>
          <div className="text-neon-green">"जितने शांत होंगे, उतना ज़्यादा सुन पाएंगे।"</div>
          <div className="text-gray-600 mt-2">— काली लिनक्स का आदर्श वाक्य</div>
        </div>
      </section>
    </div>
  )
}
