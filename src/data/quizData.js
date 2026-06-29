const quizData = {
  'aircrack-ng': [
    {question:'Aircrack ng के साथ कौन सा कमांड आम है?',options:['aircrack-ng --help','aircrack-ng --info','aircrack-ng --list','aircrack-ng -h'],correct:0,explanation:'aircrack-ng --help से विकल्पों की सूची मिलती है।'},
    {question:'Aircrack ng का मुख्य उपयोग क्या है?',options:['ग्राफिक डिजाइनिंग','डेटाबेस मैनेजमेंट','वीडियो एडिटिंग','वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'Aircrack ng वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Aircrack ng किस श्रेणी का टूल है?',options:['Web','Network','WiFi','Tunneling'],correct:2,explanation:'Aircrack ng WiFi श्रेणी का टूल है।'},
    {question:'Aircrack ng मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['पैरट OS','सेंट OS','फेडोरा','काली लिनक्स'],correct:3,explanation:'Aircrack ng काली लिनक्स में उपलब्ध है।'}
  ],
  'airgeddon': [
    {question:'Airgeddon का मुख्य उपयोग क्या है?',options:['क्लाउड कंप्यूटिंग','डेटाबेस मैनेजमेंट','वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग','आर्टिफिशियल इंटेलिजेंस'],correct:2,explanation:'Airgeddon वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Airgeddon किस श्रेणी का टूल है?',options:['Tunneling','Audit','Forensics','WiFi'],correct:3,explanation:'Airgeddon WiFi श्रेणी का टूल है।'},
    {question:'Airgeddon मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['सेंट OS','आर्क लिनक्स','काली लिनक्स','पैरट OS'],correct:2,explanation:'Airgeddon काली लिनक्स में उपलब्ध है।'},
    {question:'Airgeddon के साथ कौन सा कमांड आम है?',options:['airgeddon --help','airgeddon --scan','airgeddon --list','airgeddon -h'],correct:0,explanation:'airgeddon --help से विकल्पों की सूची मिलती है।'}
  ],
  'amass': [
    {question:'Amass किस श्रेणी में आता है?',options:['Forensics','Audit','Recon','Mobile'],correct:2,explanation:'Amass Recon श्रेणी का टूल है।'},
    {question:'Amass का मुख्य उद्देश्य क्या है?',options:['नेटवर्क मॉनिटरिंग','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','डेटा एनालिसिस','सॉफ्टवेयर टेस्टिंग'],correct:1,explanation:'Amass रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Amass किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ आईओएस','काली लिनक्स','सिर्फ एंड्रॉइड','सभी प्लेटफॉर्म'],correct:1,explanation:'Amass काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Amass टूल का स्टैंडर्ड कमांड क्या है?',options:['amass --help','amass --scan','amass --probe','amass --map'],correct:0,explanation:'amass --help मुख्य कमांड है।'}
  ],
  'apktool': [
    {question:'Apktool का मुख्य उपयोग क्या है?',options:['ग्राफिक डिजाइनिंग','डेटाबेस मैनेजमेंट','मोबाइल एप्लीकेशन सिक्योरिटी टेस्टिंग','वेब डेवलपमेंट'],correct:2,explanation:'Apktool मोबाइल सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Apktool किस श्रेणी में आता है?',options:['Recon','Network','Mobile','Passwords'],correct:2,explanation:'Apktool Mobile श्रेणी का टूल है।'},
    {question:'Apktool कहाँ इंस्टॉल होता है?',options:['काली लिनक्स','पैरट OS','आर्क लिनक्स','डेबियन'],correct:0,explanation:'Apktool काली लिनक्स में इंस्टॉल होता है।'},
    {question:'Apktool का कमांड क्या है?',options:['apktool --app','apktool --mobile','apktool --apk','apktool --help'],correct:3,explanation:'apktool --help कमांड है।'}
  ],
  'arp-scan': [
    {question:'Arp scan किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ विंडोज','सिर्फ एंड्रॉइड','सिर्फ मैक','काली लिनक्स'],correct:3,explanation:'Arp scan काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Arp scan का मुख्य उद्देश्य क्या है?',options:['डेटाबेस मैनेजमेंट','सॉफ्टवेयर टेस्टिंग','डेटा एनालिसिस','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस'],correct:3,explanation:'Arp scan रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Arp scan किस श्रेणी में आता है?',options:['Recon','Passwords','Audit','Tunneling'],correct:0,explanation:'Arp scan Recon श्रेणी का टूल है।'},
    {question:'Arp scan टूल का स्टैंडर्ड कमांड क्या है?',options:['arp-scan --map','arp-scan --recon','arp-scan --help','arp-scan --probe'],correct:2,explanation:'arp-scan --help मुख्य कमांड है।'}
  ],
  'beef-xss': [
    {question:'Beef xss का उपयोग किसके लिए किया जाता है?',options:['वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','डेटाबेस मैनेजमेंट','वेब डेवलपमेंट','सिस्टम एडमिनिस्ट्रेशन'],correct:0,explanation:'Beef xss एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Beef xss का स्टैंडर्ड कमांड क्या है?',options:['beef-xss --run','beef-xss --help','beef-xss --exploit','beef-xss --launch'],correct:1,explanation:'beef-xss --help स्टैंडर्ड कमांड है।'},
    {question:'Beef xss किस श्रेणी का टूल है?',options:['Web','Exploitation','Forensics','Mobile'],correct:1,explanation:'Beef xss Exploitation श्रेणी का टूल है।'},
    {question:'Beef xss किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['पैरट OS','सेंट OS','डेबियन','काली लिनक्स'],correct:3,explanation:'Beef xss काली लिनक्स में उपलब्ध है।'}
  ],
  'bettercap': [
    {question:'Bettercap किस श्रेणी में आता है?',options:['Web','Tunneling','Recon','Network'],correct:3,explanation:'Bettercap Network श्रेणी का टूल है।'},
    {question:'Bettercap टूल कैसे चलाया जाता है?',options:['bettercap scan','bettercap net','bettercap --help','bettercap network'],correct:2,explanation:'bettercap --help कमांड से चलाया जाता है।'},
    {question:'Bettercap कहाँ उपलब्ध है?',options:['काली लिनक्स','आर्क लिनक्स','पैरट OS','फेडोरा'],correct:0,explanation:'Bettercap काली लिनक्स में उपलब्ध है।'},
    {question:'Bettercap का मुख्य उपयोग क्या है?',options:['गेम डेवलपमेंट','नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस','मोबाइल एप डेवलपमेंट','ग्राफिक डिजाइनिंग'],correct:1,explanation:'Bettercap नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'binwalk': [
    {question:'Binwalk को कैसे रन किया जाता है?',options:['binwalk --scan','binwalk --examine','binwalk --investigate','binwalk --help'],correct:3,explanation:'binwalk --help से रन किया जाता है।'},
    {question:'Binwalk किस काम में आता है?',options:['नेटवर्क एडमिन','डिजिटल फोरेंसिक्स और डेटा एनालिसिस','डेटाबेस डिजाइन','गेम डेवलपमेंट'],correct:1,explanation:'Binwalk फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'Binwalk किस श्रेणी का टूल है?',options:['Network','Mobile','Forensics','Exploitation'],correct:2,explanation:'Binwalk Forensics श्रेणी का टूल है।'},
    {question:'Binwalk किस प्लेटफॉर्म पर उपलब्ध है?',options:['ओपन सूसी','आर्क लिनक्स','डेबियन','काली लिनक्स'],correct:3,explanation:'Binwalk काली लिनक्स पर उपलब्ध है।'}
  ],
  'bloodhound': [
    {question:'Bloodhound किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सभी प्लेटफॉर्म','काली लिनक्स','सिर्फ विंडोज','सिर्फ एंड्रॉइड'],correct:1,explanation:'Bloodhound काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Bloodhound टूल का स्टैंडर्ड कमांड क्या है?',options:['bloodhound --probe','bloodhound --scan','bloodhound --help','bloodhound --recon'],correct:2,explanation:'bloodhound --help मुख्य कमांड है।'},
    {question:'Bloodhound का मुख्य उद्देश्य क्या है?',options:['डेटा एनालिसिस','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','डेटाबेस मैनेजमेंट','नेटवर्क मॉनिटरिंग'],correct:1,explanation:'Bloodhound रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Bloodhound किस श्रेणी में आता है?',options:['Recon','Passwords','WiFi','Network'],correct:0,explanation:'Bloodhound Recon श्रेणी का टूल है।'}
  ],
  'burpsuite': [
    {question:'Burpsuite के लिए कौन सा कमांड इस्तेमाल होता है?',options:['burpsuite --url','burpsuite --web','burpsuite --audit','burpsuite --help'],correct:3,explanation:'burpsuite --help इस्तेमाल होता है।'},
    {question:'Burpsuite किस काम आता है?',options:['वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','सिस्टम एडमिन','डेटाबेस मैनेजमेंट','मोबाइल डेवलपमेंट'],correct:0,explanation:'Burpsuite वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Burpsuite किस श्रेणी का टूल है?',options:['Network','Mobile','Web','WiFi'],correct:2,explanation:'Burpsuite Web श्रेणी का टूल है।'},
    {question:'Burpsuite किस प्लेटफॉर्म पर चलता है?',options:['डेबियन','उबंटू','ओपन सूसी','काली लिनक्स'],correct:3,explanation:'Burpsuite काली लिनक्स पर चलता है।'}
  ],
  'cewl': [
    {question:'Cewl का बेसिक कमांड क्या है?',options:['cewl --hash','cewl --brute','cewl --attack','cewl --help'],correct:3,explanation:'cewl --help बेसिक कमांड है।'},
    {question:'Cewl का उपयोग किसके लिए होता है?',options:['क्लाउड कंप्यूटिंग','डेटाबेस मैनेजमेंट','नेटवर्क मॉनिटरिंग','पासवर्ड क्रैकिंग और हैश एनालिसिस'],correct:3,explanation:'Cewl पासवर्ड क्रैकिंग के लिए उपयोग होता है।'},
    {question:'Cewl किस ओएस में मिलता है?',options:['काली लिनक्स','फेडोरा','पैरट OS','उबंटू'],correct:0,explanation:'Cewl काली लिनक्स में मिलता है।'},
    {question:'Cewl किस श्रेणी में आता है?',options:['Passwords','Forensics','Network','Recon'],correct:0,explanation:'Cewl Passwords श्रेणी का टूल है।'}
  ],
  'chisel': [
    {question:'Chisel का उपयोग क्या है?',options:['डेटाबेस मैनेजमेंट','ग्राफिक डिजाइनिंग','ईमेल मैनेजमेंट','नेटवर्क टनलिंग और ट्रैफिक एनकैप्सुलेशन'],correct:3,explanation:'Chisel नेटवर्क टनलिंग के लिए उपयोग होता है।'},
    {question:'Chisel किस प्लेटफॉर्म पर चलता है?',options:['काली लिनक्स','सेंट OS','आर्क लिनक्स','फेडोरा'],correct:0,explanation:'Chisel काली लिनक्स पर चलता है।'},
    {question:'Chisel किस श्रेणी में आता है?',options:['Audit','Tunneling','Web','Mobile'],correct:1,explanation:'Chisel Tunneling श्रेणी का टूल है।'},
    {question:'Chisel का कमांड क्या होता है?',options:['chisel --route','chisel --help','chisel --proxy','chisel --tunnel'],correct:1,explanation:'chisel --help कमांड होता है।'}
  ],
  'commix': [
    {question:'Commix किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['पैरट OS','ओपन सूसी','काली लिनक्स','उबंटू'],correct:2,explanation:'Commix काली लिनक्स में उपलब्ध है।'},
    {question:'Commix का स्टैंडर्ड कमांड क्या है?',options:['commix --help','commix --attack','commix --execute','commix --run'],correct:0,explanation:'commix --help स्टैंडर्ड कमांड है।'},
    {question:'Commix किस श्रेणी का टूल है?',options:['Network','Exploitation','Passwords','Tunneling'],correct:1,explanation:'Commix Exploitation श्रेणी का टूल है।'},
    {question:'Commix का उपयोग किसके लिए किया जाता है?',options:['डेटाबेस मैनेजमेंट','क्लाउड कंप्यूटिंग','ग्राफिक डिजाइनिंग','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'Commix एक्सप्लॉइटेशन के लिए उपयोग होता है।'}
  ],
  'crackmapexec': [
    {question:'Crackmapexec का उपयोग किसके लिए किया जाता है?',options:['सिस्टम एडमिनिस्ट्रेशन','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','क्लाउड कंप्यूटिंग','ग्राफिक डिजाइनिंग'],correct:1,explanation:'Crackmapexec एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Crackmapexec का स्टैंडर्ड कमांड क्या है?',options:['crackmapexec --exploit','crackmapexec --run','crackmapexec --attack','crackmapexec --help'],correct:3,explanation:'crackmapexec --help स्टैंडर्ड कमांड है।'},
    {question:'Crackmapexec किस श्रेणी का टूल है?',options:['Web','Exploitation','WiFi','Forensics'],correct:1,explanation:'Crackmapexec Exploitation श्रेणी का टूल है।'},
    {question:'Crackmapexec किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['काली लिनक्स','उबंटू','सेंट OS','डेबियन'],correct:0,explanation:'Crackmapexec काली लिनक्स में उपलब्ध है।'}
  ],
  'crunch': [
    {question:'Crunch किस श्रेणी में आता है?',options:['Passwords','Exploitation','Forensics','Audit'],correct:0,explanation:'Crunch Passwords श्रेणी का टूल है।'},
    {question:'Crunch किस ओएस में मिलता है?',options:['ओपन सूसी','डेबियन','उबंटू','काली लिनक्स'],correct:3,explanation:'Crunch काली लिनक्स में मिलता है।'},
    {question:'Crunch का उपयोग किसके लिए होता है?',options:['पासवर्ड क्रैकिंग और हैश एनालिसिस','नेटवर्क मॉनिटरिंग','वीडियो एडिटिंग','क्लाउड कंप्यूटिंग'],correct:0,explanation:'Crunch पासवर्ड क्रैकिंग के लिए उपयोग होता है।'},
    {question:'Crunch का बेसिक कमांड क्या है?',options:['crunch --attack','crunch --dict','crunch --recover','crunch --help'],correct:3,explanation:'crunch --help बेसिक कमांड है।'}
  ],
  'dirb': [
    {question:'Dirb के लिए कौन सा कमांड इस्तेमाल होता है?',options:['dirb --help','dirb --web','dirb --url','dirb --check'],correct:0,explanation:'dirb --help इस्तेमाल होता है।'},
    {question:'Dirb किस काम आता है?',options:['वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','ग्राफिक डिजाइनिंग','मोबाइल डेवलपमेंट','गेम डेवलपमेंट'],correct:0,explanation:'Dirb वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Dirb किस श्रेणी का टूल है?',options:['Audit','Passwords','Web','WiFi'],correct:2,explanation:'Dirb Web श्रेणी का टूल है।'},
    {question:'Dirb किस प्लेटफॉर्म पर चलता है?',options:['ओपन सूसी','आर्क लिनक्स','डेबियन','काली लिनक्स'],correct:3,explanation:'Dirb काली लिनक्स पर चलता है।'}
  ],
  'dnscat2': [
    {question:'Dnscat2 का कमांड क्या होता है?',options:['dnscat2 --proxy','dnscat2 --encrypt','dnscat2 --help','dnscat2 --forward'],correct:2,explanation:'dnscat2 --help कमांड होता है।'},
    {question:'Dnscat2 किस प्लेटफॉर्म पर चलता है?',options:['ओपन सूसी','फेडोरा','उबंटू','काली लिनक्स'],correct:3,explanation:'Dnscat2 काली लिनक्स पर चलता है।'},
    {question:'Dnscat2 किस श्रेणी में आता है?',options:['Tunneling','Recon','Exploitation','Network'],correct:0,explanation:'Dnscat2 Tunneling श्रेणी का टूल है।'},
    {question:'Dnscat2 का उपयोग क्या है?',options:['नेटवर्क टनलिंग और ट्रैफिक एनकैप्सुलेशन','वेब डेवलपमेंट','डेटाबेस मैनेजमेंट','ईमेल मैनेजमेंट'],correct:0,explanation:'Dnscat2 नेटवर्क टनलिंग के लिए उपयोग होता है।'}
  ],
  'dnsenum': [
    {question:'Dnsenum टूल का स्टैंडर्ड कमांड क्या है?',options:['dnsenum --probe','dnsenum --help','dnsenum --map','dnsenum --recon'],correct:1,explanation:'dnsenum --help मुख्य कमांड है।'},
    {question:'Dnsenum का मुख्य उद्देश्य क्या है?',options:['सॉफ्टवेयर टेस्टिंग','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','वेब डेवलपमेंट','डेटा एनालिसिस'],correct:1,explanation:'Dnsenum रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Dnsenum किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ एंड्रॉइड','काली लिनक्स','सिर्फ विंडोज','सिर्फ मैक'],correct:1,explanation:'Dnsenum काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Dnsenum किस श्रेणी में आता है?',options:['Forensics','Recon','Audit','Passwords'],correct:1,explanation:'Dnsenum Recon श्रेणी का टूल है।'}
  ],
  'dnsrecon': [
    {question:'Dnsrecon टूल का स्टैंडर्ड कमांड क्या है?',options:['dnsrecon --help','dnsrecon --scan','dnsrecon --recon','dnsrecon --probe'],correct:0,explanation:'dnsrecon --help मुख्य कमांड है।'},
    {question:'Dnsrecon किस श्रेणी में आता है?',options:['Recon','Web','Tunneling','Audit'],correct:0,explanation:'Dnsrecon Recon श्रेणी का टूल है।'},
    {question:'Dnsrecon का मुख्य उद्देश्य क्या है?',options:['सॉफ्टवेयर टेस्टिंग','डेटाबेस मैनेजमेंट','डेटा एनालिसिस','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस'],correct:3,explanation:'Dnsrecon रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Dnsrecon किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ एंड्रॉइड','सिर्फ आईओएस','काली लिनक्स','सिर्फ विंडोज'],correct:2,explanation:'Dnsrecon काली लिनक्स में प्री-इंस्टॉल्ड है।'}
  ],
  'drozer': [
    {question:'Drozer किस श्रेणी में आता है?',options:['WiFi','Network','Forensics','Mobile'],correct:3,explanation:'Drozer Mobile श्रेणी का टूल है।'},
    {question:'Drozer कहाँ इंस्टॉल होता है?',options:['उबंटू','डेबियन','पैरट OS','काली लिनक्स'],correct:3,explanation:'Drozer काली लिनक्स में इंस्टॉल होता है।'},
    {question:'Drozer का मुख्य उपयोग क्या है?',options:['गेम डेवलपमेंट','वेब डेवलपमेंट','नेटवर्क एडमिन','मोबाइल एप्लीकेशन सिक्योरिटी टेस्टिंग'],correct:3,explanation:'Drozer मोबाइल सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Drozer का कमांड क्या है?',options:['drozer --apk','drozer --android','drozer --help','drozer --app'],correct:2,explanation:'drozer --help कमांड है।'}
  ],
  'eaphammer': [
    {question:'Eaphammer का मुख्य उपयोग क्या है?',options:['वेब डेवलपमेंट','आर्टिफिशियल इंटेलिजेंस','क्लाउड कंप्यूटिंग','वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'Eaphammer वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Eaphammer किस श्रेणी का टूल है?',options:['Recon','Audit','Web','WiFi'],correct:3,explanation:'Eaphammer WiFi श्रेणी का टूल है।'},
    {question:'Eaphammer मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['उबंटू','काली लिनक्स','फेडोरा','सेंट OS'],correct:1,explanation:'Eaphammer काली लिनक्स में उपलब्ध है।'},
    {question:'Eaphammer के साथ कौन सा कमांड आम है?',options:['eaphammer --info','eaphammer --help','eaphammer --scan','eaphammer --version'],correct:1,explanation:'eaphammer --help से विकल्पों की सूची मिलती है।'}
  ],
  'empire': [
    {question:'Empire किस श्रेणी का टूल है?',options:['Exploitation','Mobile','WiFi','Forensics'],correct:0,explanation:'Empire Exploitation श्रेणी का टूल है।'},
    {question:'Empire का स्टैंडर्ड कमांड क्या है?',options:['empire --exploit','empire --execute','empire --launch','empire --help'],correct:3,explanation:'empire --help स्टैंडर्ड कमांड है।'},
    {question:'Empire का उपयोग किसके लिए किया जाता है?',options:['वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','ग्राफिक डिजाइनिंग','वेब डेवलपमेंट','सिस्टम एडमिनिस्ट्रेशन'],correct:0,explanation:'Empire एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Empire किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['उबंटू','डेबियन','ओपन सूसी','काली लिनक्स'],correct:3,explanation:'Empire काली लिनक्स में उपलब्ध है।'}
  ],
  'enum4linux': [
    {question:'Enum4linux का मुख्य उद्देश्य क्या है?',options:['इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','डेटा एनालिसिस','सॉफ्टवेयर टेस्टिंग','वेब डेवलपमेंट'],correct:0,explanation:'Enum4linux रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Enum4linux किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ मैक','सिर्फ एंड्रॉइड','सिर्फ आईओएस','काली लिनक्स'],correct:3,explanation:'Enum4linux काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Enum4linux टूल का स्टैंडर्ड कमांड क्या है?',options:['enum4linux --scan','enum4linux --help','enum4linux --recon','enum4linux --probe'],correct:1,explanation:'enum4linux --help मुख्य कमांड है।'},
    {question:'Enum4linux किस श्रेणी में आता है?',options:['Audit','WiFi','Recon','Tunneling'],correct:2,explanation:'Enum4linux Recon श्रेणी का टूल है।'}
  ],
  'evil-winrm': [
    {question:'Evil winrm का स्टैंडर्ड कमांड क्या है?',options:['evil-winrm --execute','evil-winrm --help','evil-winrm --fire','evil-winrm --run'],correct:1,explanation:'evil-winrm --help स्टैंडर्ड कमांड है।'},
    {question:'Evil winrm किस श्रेणी का टूल है?',options:['Passwords','Audit','Recon','Exploitation'],correct:3,explanation:'Evil winrm Exploitation श्रेणी का टूल है।'},
    {question:'Evil winrm किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['फेडोरा','उबंटू','काली लिनक्स','ओपन सूसी'],correct:2,explanation:'Evil winrm काली लिनक्स में उपलब्ध है।'},
    {question:'Evil winrm का उपयोग किसके लिए किया जाता है?',options:['डेटाबेस मैनेजमेंट','क्लाउड कंप्यूटिंग','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','वेब डेवलपमेंट'],correct:2,explanation:'Evil winrm एक्सप्लॉइटेशन के लिए उपयोग होता है।'}
  ],
  'ffuf': [
    {question:'Ffuf किस श्रेणी का टूल है?',options:['Tunneling','Web','Network','Recon'],correct:1,explanation:'Ffuf Web श्रेणी का टूल है।'},
    {question:'Ffuf किस प्लेटफॉर्म पर चलता है?',options:['डेबियन','काली लिनक्स','पैरट OS','उबंटू'],correct:1,explanation:'Ffuf काली लिनक्स पर चलता है।'},
    {question:'Ffuf के लिए कौन सा कमांड इस्तेमाल होता है?',options:['ffuf --test','ffuf --check','ffuf --help','ffuf --scan'],correct:2,explanation:'ffuf --help इस्तेमाल होता है।'},
    {question:'Ffuf किस काम आता है?',options:['मोबाइल डेवलपमेंट','गेम डेवलपमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','डेटाबेस मैनेजमेंट'],correct:2,explanation:'Ffuf वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'frida': [
    {question:'Frida किस श्रेणी में आता है?',options:['Mobile','Tunneling','Passwords','Forensics'],correct:0,explanation:'Frida Mobile श्रेणी का टूल है।'},
    {question:'Frida का कमांड क्या है?',options:['frida --apk','frida --mobile','frida --help','frida --ios'],correct:2,explanation:'frida --help कमांड है।'},
    {question:'Frida का मुख्य उपयोग क्या है?',options:['गेम डेवलपमेंट','नेटवर्क एडमिन','मोबाइल एप्लीकेशन सिक्योरिटी टेस्टिंग','वेब डेवलपमेंट'],correct:2,explanation:'Frida मोबाइल सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Frida कहाँ इंस्टॉल होता है?',options:['फेडोरा','ओपन सूसी','काली लिनक्स','उबंटू'],correct:2,explanation:'Frida काली लिनक्स में इंस्टॉल होता है।'}
  ],
  'gobuster': [
    {question:'Gobuster किस श्रेणी का टूल है?',options:['Web','Passwords','Tunneling','Network'],correct:0,explanation:'Gobuster Web श्रेणी का टूल है।'},
    {question:'Gobuster किस प्लेटफॉर्म पर चलता है?',options:['फेडोरा','सेंट OS','पैरट OS','काली लिनक्स'],correct:3,explanation:'Gobuster काली लिनक्स पर चलता है।'},
    {question:'Gobuster किस काम आता है?',options:['वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','ग्राफिक डिजाइनिंग','गेम डेवलपमेंट','डेटाबेस मैनेजमेंट'],correct:0,explanation:'Gobuster वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Gobuster के लिए कौन सा कमांड इस्तेमाल होता है?',options:['gobuster --help','gobuster --scan','gobuster --url','gobuster --check'],correct:0,explanation:'gobuster --help इस्तेमाल होता है।'}
  ],
  'hashcat': [
    {question:'Hashcat का उपयोग किसके लिए होता है?',options:['क्लाउड कंप्यूटिंग','पासवर्ड क्रैकिंग और हैश एनालिसिस','नेटवर्क मॉनिटरिंग','एप डेवलपमेंट'],correct:1,explanation:'Hashcat पासवर्ड क्रैकिंग के लिए उपयोग होता है।'},
    {question:'Hashcat किस ओएस में मिलता है?',options:['फेडोरा','काली लिनक्स','पैरट OS','सेंट OS'],correct:1,explanation:'Hashcat काली लिनक्स में मिलता है।'},
    {question:'Hashcat किस श्रेणी में आता है?',options:['Network','Passwords','WiFi','Mobile'],correct:1,explanation:'Hashcat Passwords श्रेणी का टूल है।'},
    {question:'Hashcat का बेसिक कमांड क्या है?',options:['hashcat --dict','hashcat --recover','hashcat --help','hashcat --attack'],correct:2,explanation:'hashcat --help बेसिक कमांड है।'}
  ],
  'hcxdumptool': [
    {question:'Hcxdumptool किस श्रेणी का टूल है?',options:['Web','Network','WiFi','Exploitation'],correct:2,explanation:'Hcxdumptool WiFi श्रेणी का टूल है।'},
    {question:'Hcxdumptool मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['काली लिनक्स','सेंट OS','डेबियन','आर्क लिनक्स'],correct:0,explanation:'Hcxdumptool काली लिनक्स में उपलब्ध है।'},
    {question:'Hcxdumptool का मुख्य उपयोग क्या है?',options:['वीडियो एडिटिंग','वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग','आर्टिफिशियल इंटेलिजेंस','वेब डेवलपमेंट'],correct:1,explanation:'Hcxdumptool वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Hcxdumptool के साथ कौन सा कमांड आम है?',options:['hcxdumptool --scan','hcxdumptool --help','hcxdumptool --version','hcxdumptool --info'],correct:1,explanation:'hcxdumptool --help से विकल्पों की सूची मिलती है।'}
  ],
  'hostapd-mana': [
    {question:'Hostapd mana का मुख्य उपयोग क्या है?',options:['आर्टिफिशियल इंटेलिजेंस','वीडियो एडिटिंग','वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग','वेब डेवलपमेंट'],correct:2,explanation:'Hostapd mana वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Hostapd mana किस श्रेणी का टूल है?',options:['Tunneling','Web','WiFi','Network'],correct:2,explanation:'Hostapd mana WiFi श्रेणी का टूल है।'},
    {question:'Hostapd mana मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['डेबियन','फेडोरा','आर्क लिनक्स','काली लिनक्स'],correct:3,explanation:'Hostapd mana काली लिनक्स में उपलब्ध है।'},
    {question:'Hostapd mana के साथ कौन सा कमांड आम है?',options:['hostapd-mana --scan','hostapd-mana --version','hostapd-mana --list','hostapd-mana --help'],correct:3,explanation:'hostapd-mana --help से विकल्पों की सूची मिलती है।'}
  ],
  'hping3': [
    {question:'Hping3 टूल कैसे चलाया जाता है?',options:['hping3 net','hping3 trace','hping3 network','hping3 --help'],correct:3,explanation:'hping3 --help कमांड से चलाया जाता है।'},
    {question:'Hping3 कहाँ उपलब्ध है?',options:['आर्क लिनक्स','सेंट OS','उबंटू','काली लिनक्स'],correct:3,explanation:'Hping3 काली लिनक्स में उपलब्ध है।'},
    {question:'Hping3 का मुख्य उपयोग क्या है?',options:['वेब डेवलपमेंट','मोबाइल एप डेवलपमेंट','नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस','गेम डेवलपमेंट'],correct:2,explanation:'Hping3 नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Hping3 किस श्रेणी में आता है?',options:['Network','Exploitation','Web','Passwords'],correct:0,explanation:'Hping3 Network श्रेणी का टूल है।'}
  ],
  'hydra': [
    {question:'Hydra का बेसिक कमांड क्या है?',options:['hydra --hash','hydra --brute','hydra --help','hydra --dict'],correct:2,explanation:'hydra --help बेसिक कमांड है।'},
    {question:'Hydra किस श्रेणी में आता है?',options:['Passwords','Network','Forensics','Mobile'],correct:0,explanation:'Hydra Passwords श्रेणी का टूल है।'},
    {question:'Hydra किस ओएस में मिलता है?',options:['काली लिनक्स','उबंटू','पैरट OS','आर्क लिनक्स'],correct:0,explanation:'Hydra काली लिनक्स में मिलता है।'},
    {question:'Hydra का उपयोग किसके लिए होता है?',options:['पासवर्ड क्रैकिंग और हैश एनालिसिस','नेटवर्क मॉनिटरिंग','डेटाबेस मैनेजमेंट','एप डेवलपमेंट'],correct:0,explanation:'Hydra पासवर्ड क्रैकिंग के लिए उपयोग होता है।'}
  ],
  'impacket': [
    {question:'Impacket किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['उबंटू','फेडोरा','काली लिनक्स','पैरट OS'],correct:2,explanation:'Impacket काली लिनक्स में उपलब्ध है।'},
    {question:'Impacket का उपयोग किसके लिए किया जाता है?',options:['वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','ग्राफिक डिजाइनिंग','डेटाबेस मैनेजमेंट','क्लाउड कंप्यूटिंग'],correct:0,explanation:'Impacket एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Impacket का स्टैंडर्ड कमांड क्या है?',options:['impacket --help','impacket --launch','impacket --exploit','impacket --execute'],correct:0,explanation:'impacket --help स्टैंडर्ड कमांड है।'},
    {question:'Impacket किस श्रेणी का टूल है?',options:['Passwords','Exploitation','Network','WiFi'],correct:1,explanation:'Impacket Exploitation श्रेणी का टूल है।'}
  ],
  'john': [
    {question:'John का बेसिक कमांड क्या है?',options:['john --crack','john --attack','john --recover','john --help'],correct:3,explanation:'john --help बेसिक कमांड है।'},
    {question:'John का उपयोग किसके लिए होता है?',options:['पासवर्ड क्रैकिंग और हैश एनालिसिस','क्लाउड कंप्यूटिंग','नेटवर्क मॉनिटरिंग','डेटाबेस मैनेजमेंट'],correct:0,explanation:'John पासवर्ड क्रैकिंग के लिए उपयोग होता है।'},
    {question:'John किस ओएस में मिलता है?',options:['आर्क लिनक्स','पैरट OS','ओपन सूसी','काली लिनक्स'],correct:3,explanation:'John काली लिनक्स में मिलता है।'},
    {question:'John किस श्रेणी में आता है?',options:['Passwords','WiFi','Mobile','Exploitation'],correct:0,explanation:'John Passwords श्रेणी का टूल है।'}
  ],
  'katana': [
    {question:'Katana के लिए कौन सा कमांड इस्तेमाल होता है?',options:['katana --test','katana --web','katana --audit','katana --help'],correct:3,explanation:'katana --help इस्तेमाल होता है।'},
    {question:'Katana किस श्रेणी का टूल है?',options:['Exploitation','Web','Recon','Tunneling'],correct:1,explanation:'Katana Web श्रेणी का टूल है।'},
    {question:'Katana किस काम आता है?',options:['मोबाइल डेवलपमेंट','डेटाबेस मैनेजमेंट','ग्राफिक डिजाइनिंग','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग'],correct:3,explanation:'Katana वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Katana किस प्लेटफॉर्म पर चलता है?',options:['डेबियन','पैरट OS','आर्क लिनक्स','काली लिनक्स'],correct:3,explanation:'Katana काली लिनक्स पर चलता है।'}
  ],
  'kismet': [
    {question:'Kismet का मुख्य उपयोग क्या है?',options:['वीडियो एडिटिंग','वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग','वेब डेवलपमेंट','ग्राफिक डिजाइनिंग'],correct:1,explanation:'Kismet वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Kismet के साथ कौन सा कमांड आम है?',options:['kismet --list','kismet --help','kismet --scan','kismet --info'],correct:1,explanation:'kismet --help से विकल्पों की सूची मिलती है।'},
    {question:'Kismet मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['आर्क लिनक्स','काली लिनक्स','फेडोरा','उबंटू'],correct:1,explanation:'Kismet काली लिनक्स में उपलब्ध है।'},
    {question:'Kismet किस श्रेणी का टूल है?',options:['Mobile','WiFi','Web','Exploitation'],correct:1,explanation:'Kismet WiFi श्रेणी का टूल है।'}
  ],
  'lynis': [
    {question:'Lynis किस श्रेणी का टूल है?',options:['Forensics','Audit','Tunneling','Web'],correct:1,explanation:'Lynis Audit श्रेणी का टूल है।'},
    {question:'Lynis किस काम आता है?',options:['सोशल मीडिया','वेब डेवलपमेंट','डेटा एंट्री','सिक्योरिटी ऑडिटिंग और कंप्लायंस चेकिंग'],correct:3,explanation:'Lynis ऑडिटिंग के लिए उपयोग होता है।'},
    {question:'Lynis कहाँ उपलब्ध है?',options:['आर्क लिनक्स','उबंटू','काली लिनक्स','ओपन सूसी'],correct:2,explanation:'Lynis काली लिनक्स में उपलब्ध है।'},
    {question:'Lynis का कमांड क्या है?',options:['lynis --check','lynis --help','lynis --inspect','lynis --scan'],correct:1,explanation:'lynis --help कमांड है।'}
  ],
  'macchanger': [
    {question:'Macchanger का मुख्य उपयोग क्या है?',options:['आर्टिफिशियल इंटेलिजेंस','क्लाउड कंप्यूटिंग','वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग','ग्राफिक डिजाइनिंग'],correct:2,explanation:'Macchanger वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Macchanger मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['काली लिनक्स','डेबियन','सेंट OS','ओपन सूसी'],correct:0,explanation:'Macchanger काली लिनक्स में उपलब्ध है।'},
    {question:'Macchanger के साथ कौन सा कमांड आम है?',options:['macchanger --scan','macchanger --info','macchanger --help','macchanger --list'],correct:2,explanation:'macchanger --help से विकल्पों की सूची मिलती है।'},
    {question:'Macchanger किस श्रेणी का टूल है?',options:['Web','WiFi','Forensics','Audit'],correct:1,explanation:'Macchanger WiFi श्रेणी का टूल है।'}
  ],
  'maltego': [
    {question:'Maltego किस श्रेणी में आता है?',options:['Web','Recon','Network','Passwords'],correct:1,explanation:'Maltego Recon श्रेणी का टूल है।'},
    {question:'Maltego टूल का स्टैंडर्ड कमांड क्या है?',options:['maltego --scan','maltego --recon','maltego --help','maltego --probe'],correct:2,explanation:'maltego --help मुख्य कमांड है।'},
    {question:'Maltego का मुख्य उद्देश्य क्या है?',options:['इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','वेब डेवलपमेंट','डेटाबेस मैनेजमेंट','नेटवर्क मॉनिटरिंग'],correct:0,explanation:'Maltego रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Maltego किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सभी प्लेटफॉर्म','सिर्फ एंड्रॉइड','काली लिनक्स','सिर्फ विंडोज'],correct:2,explanation:'Maltego काली लिनक्स में प्री-इंस्टॉल्ड है।'}
  ],
  'masscan': [
    {question:'Masscan किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ एंड्रॉइड','सभी प्लेटफॉर्म','काली लिनक्स','सिर्फ मैक'],correct:2,explanation:'Masscan काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Masscan टूल का स्टैंडर्ड कमांड क्या है?',options:['masscan --map','masscan --probe','masscan --recon','masscan --help'],correct:3,explanation:'masscan --help मुख्य कमांड है।'},
    {question:'Masscan का मुख्य उद्देश्य क्या है?',options:['डेटा एनालिसिस','डेटाबेस मैनेजमेंट','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','नेटवर्क मॉनिटरिंग'],correct:2,explanation:'Masscan रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Masscan किस श्रेणी में आता है?',options:['Mobile','Tunneling','Recon','Network'],correct:2,explanation:'Masscan Recon श्रेणी का टूल है।'}
  ],
  'medusa': [
    {question:'Medusa का बेसिक कमांड क्या है?',options:['medusa --crack','medusa --dict','medusa --recover','medusa --help'],correct:3,explanation:'medusa --help बेसिक कमांड है।'},
    {question:'Medusa किस ओएस में मिलता है?',options:['पैरट OS','ओपन सूसी','काली लिनक्स','सेंट OS'],correct:2,explanation:'Medusa काली लिनक्स में मिलता है।'},
    {question:'Medusa का उपयोग किसके लिए होता है?',options:['डेटाबेस मैनेजमेंट','पासवर्ड क्रैकिंग और हैश एनालिसिस','वीडियो एडिटिंग','एप डेवलपमेंट'],correct:1,explanation:'Medusa पासवर्ड क्रैकिंग के लिए उपयोग होता है।'},
    {question:'Medusa किस श्रेणी में आता है?',options:['Passwords','Recon','Network','WiFi'],correct:0,explanation:'Medusa Passwords श्रेणी का टूल है।'}
  ],
  'metasploit-framework': [
    {question:'Metasploit framework किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['ओपन सूसी','सेंट OS','काली लिनक्स','फेडोरा'],correct:2,explanation:'Metasploit framework काली लिनक्स में उपलब्ध है।'},
    {question:'Metasploit framework का उपयोग किसके लिए किया जाता है?',options:['ग्राफिक डिजाइनिंग','सिस्टम एडमिनिस्ट्रेशन','क्लाउड कंप्यूटिंग','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'Metasploit framework एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Metasploit framework किस श्रेणी का टूल है?',options:['Recon','WiFi','Exploitation','Forensics'],correct:2,explanation:'Metasploit framework Exploitation श्रेणी का टूल है।'},
    {question:'Metasploit framework का स्टैंडर्ड कमांड क्या है?',options:['metasploit-framework --attack','metasploit-framework --help','metasploit-framework --execute','metasploit-framework --exploit'],correct:1,explanation:'metasploit-framework --help स्टैंडर्ड कमांड है।'}
  ],
  'mimikatz': [
    {question:'Mimikatz का स्टैंडर्ड कमांड क्या है?',options:['mimikatz --help','mimikatz --exploit','mimikatz --execute','mimikatz --launch'],correct:0,explanation:'mimikatz --help स्टैंडर्ड कमांड है।'},
    {question:'Mimikatz किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['डेबियन','उबंटू','सेंट OS','काली लिनक्स'],correct:3,explanation:'Mimikatz काली लिनक्स में उपलब्ध है।'},
    {question:'Mimikatz का उपयोग किसके लिए किया जाता है?',options:['वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','वेब डेवलपमेंट','ग्राफिक डिजाइनिंग','क्लाउड कंप्यूटिंग'],correct:0,explanation:'Mimikatz एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Mimikatz किस श्रेणी का टूल है?',options:['Network','Tunneling','Exploitation','Passwords'],correct:2,explanation:'Mimikatz Exploitation श्रेणी का टूल है।'}
  ],
  'mitmproxy': [
    {question:'Mitmproxy कहाँ उपलब्ध है?',options:['काली लिनक्स','पैरट OS','सेंट OS','डेबियन'],correct:0,explanation:'Mitmproxy काली लिनक्स में उपलब्ध है।'},
    {question:'Mitmproxy का मुख्य उपयोग क्या है?',options:['नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस','गेम डेवलपमेंट','मोबाइल एप डेवलपमेंट','ग्राफिक डिजाइनिंग'],correct:0,explanation:'Mitmproxy नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Mitmproxy किस श्रेणी में आता है?',options:['Network','Audit','Passwords','Exploitation'],correct:0,explanation:'Mitmproxy Network श्रेणी का टूल है।'},
    {question:'Mitmproxy टूल कैसे चलाया जाता है?',options:['mitmproxy network','mitmproxy scan','mitmproxy --help','mitmproxy trace'],correct:2,explanation:'mitmproxy --help कमांड से चलाया जाता है।'}
  ],
  'msfvenom': [
    {question:'Msfvenom किस श्रेणी का टूल है?',options:['Exploitation','Passwords','Tunneling','Network'],correct:0,explanation:'Msfvenom Exploitation श्रेणी का टूल है।'},
    {question:'Msfvenom किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['काली लिनक्स','फेडोरा','आर्क लिनक्स','ओपन सूसी'],correct:0,explanation:'Msfvenom काली लिनक्स में उपलब्ध है।'},
    {question:'Msfvenom का उपयोग किसके लिए किया जाता है?',options:['ग्राफिक डिजाइनिंग','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','वेब डेवलपमेंट','क्लाउड कंप्यूटिंग'],correct:1,explanation:'Msfvenom एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Msfvenom का स्टैंडर्ड कमांड क्या है?',options:['msfvenom --execute','msfvenom --run','msfvenom --help','msfvenom --fire'],correct:2,explanation:'msfvenom --help स्टैंडर्ड कमांड है।'}
  ],
  'naabu': [
    {question:'Naabu टूल का स्टैंडर्ड कमांड क्या है?',options:['naabu --scan','naabu --map','naabu --help','naabu --probe'],correct:2,explanation:'naabu --help मुख्य कमांड है।'},
    {question:'Naabu किस श्रेणी में आता है?',options:['WiFi','Recon','Forensics','Exploitation'],correct:1,explanation:'Naabu Recon श्रेणी का टूल है।'},
    {question:'Naabu का मुख्य उद्देश्य क्या है?',options:['डेटा एनालिसिस','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','सॉफ्टवेयर टेस्टिंग','वेब डेवलपमेंट'],correct:1,explanation:'Naabu रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Naabu किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ विंडोज','सिर्फ आईओएस','काली लिनक्स','सिर्फ एंड्रॉइड'],correct:2,explanation:'Naabu काली लिनक्स में प्री-इंस्टॉल्ड है।'}
  ],
  'netcat': [
    {question:'Netcat टूल कैसे चलाया जाता है?',options:['netcat net','netcat --help','netcat trace','netcat scan'],correct:1,explanation:'netcat --help कमांड से चलाया जाता है।'},
    {question:'Netcat किस श्रेणी में आता है?',options:['Web','Recon','Network','Tunneling'],correct:2,explanation:'Netcat Network श्रेणी का टूल है।'},
    {question:'Netcat का मुख्य उपयोग क्या है?',options:['मोबाइल एप डेवलपमेंट','नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस','डेटाबेस मैनेजमेंट','वेब डेवलपमेंट'],correct:1,explanation:'Netcat नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Netcat कहाँ उपलब्ध है?',options:['आर्क लिनक्स','ओपन सूसी','फेडोरा','काली लिनक्स'],correct:3,explanation:'Netcat काली लिनक्स में उपलब्ध है।'}
  ],
  'netdiscover': [
    {question:'Netdiscover टूल का स्टैंडर्ड कमांड क्या है?',options:['netdiscover --probe','netdiscover --map','netdiscover --scan','netdiscover --help'],correct:3,explanation:'netdiscover --help मुख्य कमांड है।'},
    {question:'Netdiscover किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['काली लिनक्स','सभी प्लेटफॉर्म','सिर्फ मैक','सिर्फ आईओएस'],correct:0,explanation:'Netdiscover काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Netdiscover का मुख्य उद्देश्य क्या है?',options:['डेटा एनालिसिस','सॉफ्टवेयर टेस्टिंग','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','नेटवर्क मॉनिटरिंग'],correct:2,explanation:'Netdiscover रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Netdiscover किस श्रेणी में आता है?',options:['Web','Recon','Tunneling','Exploitation'],correct:1,explanation:'Netdiscover Recon श्रेणी का टूल है।'}
  ],
  'nikto': [
    {question:'Nikto के लिए कौन सा कमांड इस्तेमाल होता है?',options:['nikto --check','nikto --help','nikto --url','nikto --scan'],correct:1,explanation:'nikto --help इस्तेमाल होता है।'},
    {question:'Nikto किस श्रेणी का टूल है?',options:['Audit','Web','WiFi','Tunneling'],correct:1,explanation:'Nikto Web श्रेणी का टूल है।'},
    {question:'Nikto किस काम आता है?',options:['मोबाइल डेवलपमेंट','सिस्टम एडमिन','डेटाबेस मैनेजमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग'],correct:3,explanation:'Nikto वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Nikto किस प्लेटफॉर्म पर चलता है?',options:['ओपन सूसी','आर्क लिनक्स','काली लिनक्स','सेंट OS'],correct:2,explanation:'Nikto काली लिनक्स पर चलता है।'}
  ],
  'nmap': [
    {question:'Nmap टूल का स्टैंडर्ड कमांड क्या है?',options:['nmap --map','nmap --scan','nmap --help','nmap --recon'],correct:2,explanation:'nmap --help मुख्य कमांड है।'},
    {question:'Nmap किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['काली लिनक्स','सिर्फ विंडोज','सिर्फ एंड्रॉइड','सिर्फ मैक'],correct:0,explanation:'Nmap काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Nmap का मुख्य उद्देश्य क्या है?',options:['इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','वेब डेवलपमेंट','नेटवर्क मॉनिटरिंग','सॉफ्टवेयर टेस्टिंग'],correct:0,explanation:'Nmap रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Nmap किस श्रेणी में आता है?',options:['Tunneling','Exploitation','Recon','WiFi'],correct:2,explanation:'Nmap Recon श्रेणी का टूल है।'}
  ],
  'nuclei': [
    {question:'Nuclei किस प्लेटफॉर्म पर चलता है?',options:['काली लिनक्स','डेबियन','पैरट OS','सेंट OS'],correct:0,explanation:'Nuclei काली लिनक्स पर चलता है।'},
    {question:'Nuclei किस श्रेणी का टूल है?',options:['Forensics','Exploitation','Web','Tunneling'],correct:2,explanation:'Nuclei Web श्रेणी का टूल है।'},
    {question:'Nuclei के लिए कौन सा कमांड इस्तेमाल होता है?',options:['nuclei --check','nuclei --web','nuclei --help','nuclei --audit'],correct:2,explanation:'nuclei --help इस्तेमाल होता है।'},
    {question:'Nuclei किस काम आता है?',options:['सिस्टम एडमिन','डेटाबेस मैनेजमेंट','मोबाइल डेवलपमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग'],correct:3,explanation:'Nuclei वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'objection': [
    {question:'Objection किस श्रेणी में आता है?',options:['Mobile','Forensics','Passwords','Audit'],correct:0,explanation:'Objection Mobile श्रेणी का टूल है।'},
    {question:'Objection का कमांड क्या है?',options:['objection --app','objection --help','objection --mobile','objection --android'],correct:1,explanation:'objection --help कमांड है।'},
    {question:'Objection का मुख्य उपयोग क्या है?',options:['नेटवर्क एडमिन','ग्राफिक डिजाइनिंग','मोबाइल एप्लीकेशन सिक्योरिटी टेस्टिंग','डेटाबेस मैनेजमेंट'],correct:2,explanation:'Objection मोबाइल सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Objection कहाँ इंस्टॉल होता है?',options:['डेबियन','काली लिनक्स','आर्क लिनक्स','पैरट OS'],correct:1,explanation:'Objection काली लिनक्स में इंस्टॉल होता है।'}
  ],
  'pixiewps': [
    {question:'Pixiewps मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['काली लिनक्स','पैरट OS','सेंट OS','ओपन सूसी'],correct:0,explanation:'Pixiewps काली लिनक्स में उपलब्ध है।'},
    {question:'Pixiewps के साथ कौन सा कमांड आम है?',options:['pixiewps --help','pixiewps --scan','pixiewps -h','pixiewps --list'],correct:0,explanation:'pixiewps --help से विकल्पों की सूची मिलती है।'},
    {question:'Pixiewps का मुख्य उपयोग क्या है?',options:['क्लाउड कंप्यूटिंग','वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग','वीडियो एडिटिंग','डेटाबेस मैनेजमेंट'],correct:1,explanation:'Pixiewps वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Pixiewps किस श्रेणी का टूल है?',options:['Mobile','WiFi','Web','Audit'],correct:1,explanation:'Pixiewps WiFi श्रेणी का टूल है।'}
  ],
  'proxychains': [
    {question:'Proxychains का कमांड क्या होता है?',options:['proxychains --tunnel','proxychains --proxy','proxychains --route','proxychains --help'],correct:3,explanation:'proxychains --help कमांड होता है।'},
    {question:'Proxychains का उपयोग क्या है?',options:['नेटवर्क टनलिंग और ट्रैफिक एनकैप्सुलेशन','ईमेल मैनेजमेंट','वेब डेवलपमेंट','ग्राफिक डिजाइनिंग'],correct:0,explanation:'Proxychains नेटवर्क टनलिंग के लिए उपयोग होता है।'},
    {question:'Proxychains किस श्रेणी में आता है?',options:['Mobile','Tunneling','Network','WiFi'],correct:1,explanation:'Proxychains Tunneling श्रेणी का टूल है।'},
    {question:'Proxychains किस प्लेटफॉर्म पर चलता है?',options:['काली लिनक्स','पैरट OS','सेंट OS','फेडोरा'],correct:0,explanation:'Proxychains काली लिनक्स पर चलता है।'}
  ],
  'radare2': [
    {question:'Radare2 किस काम में आता है?',options:['डिजिटल फोरेंसिक्स और डेटा एनालिसिस','नेटवर्क एडमिन','वेब डेवलपमेंट','सोशल मीडिया मार्केटिंग'],correct:0,explanation:'Radare2 फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'Radare2 को कैसे रन किया जाता है?',options:['radare2 --analyze','radare2 --examine','radare2 --extract','radare2 --help'],correct:3,explanation:'radare2 --help से रन किया जाता है।'},
    {question:'Radare2 किस प्लेटफॉर्म पर उपलब्ध है?',options:['काली लिनक्स','डेबियन','पैरट OS','उबंटू'],correct:0,explanation:'Radare2 काली लिनक्स पर उपलब्ध है।'},
    {question:'Radare2 किस श्रेणी का टूल है?',options:['Web','Exploitation','Recon','Forensics'],correct:3,explanation:'Radare2 Forensics श्रेणी का टूल है।'}
  ],
  'reaver': [
    {question:'Reaver किस श्रेणी का टूल है?',options:['Exploitation','Recon','WiFi','Forensics'],correct:2,explanation:'Reaver WiFi श्रेणी का टूल है।'},
    {question:'Reaver का मुख्य उपयोग क्या है?',options:['वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग','आर्टिफिशियल इंटेलिजेंस','डेटाबेस मैनेजमेंट','वीडियो एडिटिंग'],correct:0,explanation:'Reaver वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Reaver के साथ कौन सा कमांड आम है?',options:['reaver --version','reaver --scan','reaver --info','reaver --help'],correct:3,explanation:'reaver --help से विकल्पों की सूची मिलती है।'},
    {question:'Reaver मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['काली लिनक्स','सेंट OS','डेबियन','आर्क लिनक्स'],correct:0,explanation:'Reaver काली लिनक्स में उपलब्ध है।'}
  ],
  'recon-ng': [
    {question:'Recon ng किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['काली लिनक्स','सिर्फ विंडोज','सिर्फ एंड्रॉइड','सिर्फ मैक'],correct:0,explanation:'Recon ng काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Recon ng का मुख्य उद्देश्य क्या है?',options:['सॉफ्टवेयर टेस्टिंग','नेटवर्क मॉनिटरिंग','वेब डेवलपमेंट','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस'],correct:3,explanation:'Recon ng रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Recon ng टूल का स्टैंडर्ड कमांड क्या है?',options:['recon-ng --map','recon-ng --scan','recon-ng --probe','recon-ng --help'],correct:3,explanation:'recon-ng --help मुख्य कमांड है।'},
    {question:'Recon ng किस श्रेणी में आता है?',options:['Network','Recon','Tunneling','Audit'],correct:1,explanation:'Recon ng Recon श्रेणी का टूल है।'}
  ],
  'responder': [
    {question:'Responder का मुख्य उपयोग क्या है?',options:['नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस','गेम डेवलपमेंट','ग्राफिक डिजाइनिंग','मोबाइल एप डेवलपमेंट'],correct:0,explanation:'Responder नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Responder कहाँ उपलब्ध है?',options:['काली लिनक्स','डेबियन','ओपन सूसी','फेडोरा'],correct:0,explanation:'Responder काली लिनक्स में उपलब्ध है।'},
    {question:'Responder टूल कैसे चलाया जाता है?',options:['responder net','responder network','responder trace','responder --help'],correct:3,explanation:'responder --help कमांड से चलाया जाता है।'},
    {question:'Responder किस श्रेणी में आता है?',options:['Forensics','Passwords','Network','Web'],correct:2,explanation:'Responder Network श्रेणी का टूल है।'}
  ],
  'searchsploit': [
    {question:'Searchsploit का स्टैंडर्ड कमांड क्या है?',options:['searchsploit --execute','searchsploit --fire','searchsploit --help','searchsploit --exploit'],correct:2,explanation:'searchsploit --help स्टैंडर्ड कमांड है।'},
    {question:'Searchsploit का उपयोग किसके लिए किया जाता है?',options:['वेब डेवलपमेंट','ग्राफिक डिजाइनिंग','डेटाबेस मैनेजमेंट','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'Searchsploit एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Searchsploit किस श्रेणी का टूल है?',options:['Mobile','Forensics','Exploitation','Audit'],correct:2,explanation:'Searchsploit Exploitation श्रेणी का टूल है।'},
    {question:'Searchsploit किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['आर्क लिनक्स','काली लिनक्स','ओपन सूसी','डेबियन'],correct:1,explanation:'Searchsploit काली लिनक्स में उपलब्ध है।'}
  ],
  'setoolkit': [
    {question:'Setoolkit किस श्रेणी का टूल है?',options:['Web','Forensics','Exploitation','Mobile'],correct:2,explanation:'Setoolkit Exploitation श्रेणी का टूल है।'},
    {question:'Setoolkit का स्टैंडर्ड कमांड क्या है?',options:['setoolkit --launch','setoolkit --execute','setoolkit --help','setoolkit --fire'],correct:2,explanation:'setoolkit --help स्टैंडर्ड कमांड है।'},
    {question:'Setoolkit किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['फेडोरा','काली लिनक्स','सेंट OS','आर्क लिनक्स'],correct:1,explanation:'Setoolkit काली लिनक्स में उपलब्ध है।'},
    {question:'Setoolkit का उपयोग किसके लिए किया जाता है?',options:['वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','वेब डेवलपमेंट','सिस्टम एडमिनिस्ट्रेशन','डेटाबेस मैनेजमेंट'],correct:0,explanation:'Setoolkit एक्सप्लॉइटेशन के लिए उपयोग होता है।'}
  ],
  'sherlock': [
    {question:'Sherlock टूल का स्टैंडर्ड कमांड क्या है?',options:['sherlock --help','sherlock --recon','sherlock --probe','sherlock --map'],correct:0,explanation:'sherlock --help मुख्य कमांड है।'},
    {question:'Sherlock किस श्रेणी में आता है?',options:['WiFi','Exploitation','Web','Recon'],correct:3,explanation:'Sherlock Recon श्रेणी का टूल है।'},
    {question:'Sherlock का मुख्य उद्देश्य क्या है?',options:['डेटा एनालिसिस','डेटाबेस मैनेजमेंट','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','वेब डेवलपमेंट'],correct:2,explanation:'Sherlock रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Sherlock किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['काली लिनक्स','सिर्फ आईओएस','सिर्फ मैक','सिर्फ एंड्रॉइड'],correct:0,explanation:'Sherlock काली लिनक्स में प्री-इंस्टॉल्ड है।'}
  ],
  'socat': [
    {question:'Socat का उपयोग क्या है?',options:['ग्राफिक डिजाइनिंग','नेटवर्क टनलिंग और ट्रैफिक एनकैप्सुलेशन','ईमेल मैनेजमेंट','सोशल मीडिया मार्केटिंग'],correct:1,explanation:'Socat नेटवर्क टनलिंग के लिए उपयोग होता है।'},
    {question:'Socat किस प्लेटफॉर्म पर चलता है?',options:['ओपन सूसी','सेंट OS','आर्क लिनक्स','काली लिनक्स'],correct:3,explanation:'Socat काली लिनक्स पर चलता है।'},
    {question:'Socat किस श्रेणी में आता है?',options:['Audit','Tunneling','Passwords','WiFi'],correct:1,explanation:'Socat Tunneling श्रेणी का टूल है।'},
    {question:'Socat का कमांड क्या होता है?',options:['socat --encrypt','socat --tunnel','socat --help','socat --route'],correct:2,explanation:'socat --help कमांड होता है।'}
  ],
  'sqlmap': [
    {question:'Sqlmap किस काम आता है?',options:['डेटाबेस मैनेजमेंट','मोबाइल डेवलपमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','ग्राफिक डिजाइनिंग'],correct:2,explanation:'Sqlmap वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Sqlmap किस श्रेणी का टूल है?',options:['Recon','Mobile','Network','Web'],correct:3,explanation:'Sqlmap Web श्रेणी का टूल है।'},
    {question:'Sqlmap किस प्लेटफॉर्म पर चलता है?',options:['सेंट OS','काली लिनक्स','उबंटू','फेडोरा'],correct:1,explanation:'Sqlmap काली लिनक्स पर चलता है।'},
    {question:'Sqlmap के लिए कौन सा कमांड इस्तेमाल होता है?',options:['sqlmap --test','sqlmap --scan','sqlmap --check','sqlmap --help'],correct:3,explanation:'sqlmap --help इस्तेमाल होता है।'}
  ],
  'sqlninja': [
    {question:'Sqlninja किस प्लेटफॉर्म पर चलता है?',options:['डेबियन','आर्क लिनक्स','काली लिनक्स','उबंटू'],correct:2,explanation:'Sqlninja काली लिनक्स पर चलता है।'},
    {question:'Sqlninja किस श्रेणी का टूल है?',options:['Recon','Audit','Passwords','Web'],correct:3,explanation:'Sqlninja Web श्रेणी का टूल है।'},
    {question:'Sqlninja किस काम आता है?',options:['वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','सिस्टम एडमिन','गेम डेवलपमेंट','मोबाइल डेवलपमेंट'],correct:0,explanation:'Sqlninja वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Sqlninja के लिए कौन सा कमांड इस्तेमाल होता है?',options:['sqlninja --scan','sqlninja --help','sqlninja --test','sqlninja --audit'],correct:1,explanation:'sqlninja --help इस्तेमाल होता है।'}
  ],
  'sslstrip': [
    {question:'Sslstrip के साथ कौन सा कमांड आम है?',options:['sslstrip --info','sslstrip -h','sslstrip --version','sslstrip --help'],correct:3,explanation:'sslstrip --help से विकल्पों की सूची मिलती है।'},
    {question:'Sslstrip मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['काली लिनक्स','डेबियन','ओपन सूसी','पैरट OS'],correct:0,explanation:'Sslstrip काली लिनक्स में उपलब्ध है।'},
    {question:'Sslstrip का मुख्य उपयोग क्या है?',options:['डेटाबेस मैनेजमेंट','वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग','ग्राफिक डिजाइनिंग','आर्टिफिशियल इंटेलिजेंस'],correct:1,explanation:'Sslstrip वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Sslstrip किस श्रेणी का टूल है?',options:['Mobile','Exploitation','WiFi','Audit'],correct:2,explanation:'Sslstrip WiFi श्रेणी का टूल है।'}
  ],
  'subfinder': [
    {question:'Subfinder टूल का स्टैंडर्ड कमांड क्या है?',options:['subfinder --probe','subfinder --scan','subfinder --recon','subfinder --help'],correct:3,explanation:'subfinder --help मुख्य कमांड है।'},
    {question:'Subfinder किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ विंडोज','सभी प्लेटफॉर्म','काली लिनक्स','सिर्फ आईओएस'],correct:2,explanation:'Subfinder काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Subfinder किस श्रेणी में आता है?',options:['Recon','Audit','Tunneling','Passwords'],correct:0,explanation:'Subfinder Recon श्रेणी का टूल है।'},
    {question:'Subfinder का मुख्य उद्देश्य क्या है?',options:['डेटा एनालिसिस','वेब डेवलपमेंट','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','सॉफ्टवेयर टेस्टिंग'],correct:2,explanation:'Subfinder रिकॉनिसेंस के लिए उपयोग होता है।'}
  ],
  'tcpdump': [
    {question:'Tcpdump टूल कैसे चलाया जाता है?',options:['tcpdump net','tcpdump --help','tcpdump scan','tcpdump trace'],correct:1,explanation:'tcpdump --help कमांड से चलाया जाता है।'},
    {question:'Tcpdump कहाँ उपलब्ध है?',options:['काली लिनक्स','ओपन सूसी','डेबियन','सेंट OS'],correct:0,explanation:'Tcpdump काली लिनक्स में उपलब्ध है।'},
    {question:'Tcpdump किस श्रेणी में आता है?',options:['Web','Tunneling','Network','Recon'],correct:2,explanation:'Tcpdump Network श्रेणी का टूल है।'},
    {question:'Tcpdump का मुख्य उपयोग क्या है?',options:['डेटाबेस मैनेजमेंट','गेम डेवलपमेंट','नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस','ग्राफिक डिजाइनिंग'],correct:2,explanation:'Tcpdump नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'theharvester': [
    {question:'Theharvester किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['काली लिनक्स','सिर्फ एंड्रॉइड','सिर्फ मैक','सिर्फ विंडोज'],correct:0,explanation:'Theharvester काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Theharvester किस श्रेणी में आता है?',options:['Passwords','Mobile','WiFi','Recon'],correct:3,explanation:'Theharvester Recon श्रेणी का टूल है।'},
    {question:'Theharvester का मुख्य उद्देश्य क्या है?',options:['डेटाबेस मैनेजमेंट','डेटा एनालिसिस','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','वेब डेवलपमेंट'],correct:2,explanation:'Theharvester रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Theharvester टूल का स्टैंडर्ड कमांड क्या है?',options:['theharvester --probe','theharvester --map','theharvester --help','theharvester --scan'],correct:2,explanation:'theharvester --help मुख्य कमांड है।'}
  ],
  'trivy': [
    {question:'Trivy कहाँ उपलब्ध है?',options:['पैरट OS','काली लिनक्स','डेबियन','उबंटू'],correct:1,explanation:'Trivy काली लिनक्स में उपलब्ध है।'},
    {question:'Trivy का कमांड क्या है?',options:['trivy --audit','trivy --help','trivy --scan','trivy --inspect'],correct:1,explanation:'trivy --help कमांड है।'},
    {question:'Trivy किस काम आता है?',options:['सोशल मीडिया','सिक्योरिटी ऑडिटिंग और कंप्लायंस चेकिंग','गेम डेवलपमेंट','क्लाउड माइग्रेशन'],correct:1,explanation:'Trivy ऑडिटिंग के लिए उपयोग होता है।'},
    {question:'Trivy किस श्रेणी का टूल है?',options:['Recon','Web','WiFi','Audit'],correct:3,explanation:'Trivy Audit श्रेणी का टूल है।'}
  ],
  'volatility': [
    {question:'Volatility किस प्लेटफॉर्म पर उपलब्ध है?',options:['पैरट OS','डेबियन','काली लिनक्स','आर्क लिनक्स'],correct:2,explanation:'Volatility काली लिनक्स पर उपलब्ध है।'},
    {question:'Volatility को कैसे रन किया जाता है?',options:['volatility --scan','volatility --investigate','volatility --extract','volatility --help'],correct:3,explanation:'volatility --help से रन किया जाता है।'},
    {question:'Volatility किस श्रेणी का टूल है?',options:['Forensics','Exploitation','Tunneling','Audit'],correct:0,explanation:'Volatility Forensics श्रेणी का टूल है।'},
    {question:'Volatility किस काम में आता है?',options:['डेटाबेस डिजाइन','नेटवर्क एडमिन','गेम डेवलपमेंट','डिजिटल फोरेंसिक्स और डेटा एनालिसिस'],correct:3,explanation:'Volatility फोरेंसिक्स के लिए उपयोग होता है।'}
  ],
  'wafw00f': [
    {question:'Wafw00f किस श्रेणी का टूल है?',options:['WiFi','Exploitation','Recon','Web'],correct:3,explanation:'Wafw00f Web श्रेणी का टूल है।'},
    {question:'Wafw00f किस काम आता है?',options:['मोबाइल डेवलपमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','गेम डेवलपमेंट','ग्राफिक डिजाइनिंग'],correct:1,explanation:'Wafw00f वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Wafw00f किस प्लेटफॉर्म पर चलता है?',options:['काली लिनक्स','उबंटू','ओपन सूसी','आर्क लिनक्स'],correct:0,explanation:'Wafw00f काली लिनक्स पर चलता है।'},
    {question:'Wafw00f के लिए कौन सा कमांड इस्तेमाल होता है?',options:['wafw00f --scan','wafw00f --audit','wafw00f --url','wafw00f --help'],correct:3,explanation:'wafw00f --help इस्तेमाल होता है।'}
  ],
  'weevely': [
    {question:'Weevely का स्टैंडर्ड कमांड क्या है?',options:['weevely --launch','weevely --fire','weevely --help','weevely --attack'],correct:2,explanation:'weevely --help स्टैंडर्ड कमांड है।'},
    {question:'Weevely का उपयोग किसके लिए किया जाता है?',options:['वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','डेटाबेस मैनेजमेंट','क्लाउड कंप्यूटिंग','ग्राफिक डिजाइनिंग'],correct:0,explanation:'Weevely एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Weevely किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['उबंटू','फेडोरा','आर्क लिनक्स','काली लिनक्स'],correct:3,explanation:'Weevely काली लिनक्स में उपलब्ध है।'},
    {question:'Weevely किस श्रेणी का टूल है?',options:['Network','Forensics','Exploitation','Audit'],correct:2,explanation:'Weevely Exploitation श्रेणी का टूल है।'}
  ],
  'whois': [
    {question:'Whois टूल का स्टैंडर्ड कमांड क्या है?',options:['whois --scan','whois --probe','whois --map','whois --help'],correct:3,explanation:'whois --help मुख्य कमांड है।'},
    {question:'Whois किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ एंड्रॉइड','काली लिनक्स','सिर्फ विंडोज','सभी प्लेटफॉर्म'],correct:1,explanation:'Whois काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Whois किस श्रेणी में आता है?',options:['WiFi','Recon','Network','Mobile'],correct:1,explanation:'Whois Recon श्रेणी का टूल है।'},
    {question:'Whois का मुख्य उद्देश्य क्या है?',options:['डेटाबेस मैनेजमेंट','नेटवर्क मॉनिटरिंग','सॉफ्टवेयर टेस्टिंग','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस'],correct:3,explanation:'Whois रिकॉनिसेंस के लिए उपयोग होता है।'}
  ],
  'wifite': [
    {question:'Wifite मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['उबंटू','ओपन सूसी','पैरट OS','काली लिनक्स'],correct:3,explanation:'Wifite काली लिनक्स में उपलब्ध है।'},
    {question:'Wifite के साथ कौन सा कमांड आम है?',options:['wifite -h','wifite --scan','wifite --help','wifite --version'],correct:2,explanation:'wifite --help से विकल्पों की सूची मिलती है।'},
    {question:'Wifite किस श्रेणी का टूल है?',options:['WiFi','Mobile','Forensics','Web'],correct:0,explanation:'Wifite WiFi श्रेणी का टूल है।'},
    {question:'Wifite का मुख्य उपयोग क्या है?',options:['वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग','आर्टिफिशियल इंटेलिजेंस','वेब डेवलपमेंट','वीडियो एडिटिंग'],correct:0,explanation:'Wifite वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'wireshark': [
    {question:'Wireshark टूल कैसे चलाया जाता है?',options:['wireshark trace','wireshark network','wireshark --help','wireshark scan'],correct:2,explanation:'wireshark --help कमांड से चलाया जाता है।'},
    {question:'Wireshark कहाँ उपलब्ध है?',options:['आर्क लिनक्स','सेंट OS','काली लिनक्स','डेबियन'],correct:2,explanation:'Wireshark काली लिनक्स में उपलब्ध है।'},
    {question:'Wireshark का मुख्य उपयोग क्या है?',options:['ग्राफिक डिजाइनिंग','गेम डेवलपमेंट','वेब डेवलपमेंट','नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस'],correct:3,explanation:'Wireshark नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Wireshark किस श्रेणी में आता है?',options:['Forensics','Network','Mobile','Web'],correct:1,explanation:'Wireshark Network श्रेणी का टूल है।'}
  ],
  'wpscan': [
    {question:'Wpscan के लिए कौन सा कमांड इस्तेमाल होता है?',options:['wpscan --help','wpscan --web','wpscan --check','wpscan --audit'],correct:0,explanation:'wpscan --help इस्तेमाल होता है।'},
    {question:'Wpscan किस प्लेटफॉर्म पर चलता है?',options:['उबंटू','ओपन सूसी','फेडोरा','काली लिनक्स'],correct:3,explanation:'Wpscan काली लिनक्स पर चलता है।'},
    {question:'Wpscan किस श्रेणी का टूल है?',options:['Mobile','Passwords','WiFi','Web'],correct:3,explanation:'Wpscan Web श्रेणी का टूल है।'},
    {question:'Wpscan किस काम आता है?',options:['ग्राफिक डिजाइनिंग','मोबाइल डेवलपमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','डेटाबेस मैनेजमेंट'],correct:2,explanation:'Wpscan वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'yersinia': [
    {question:'Yersinia कहाँ उपलब्ध है?',options:['काली लिनक्स','डेबियन','पैरट OS','सेंट OS'],correct:0,explanation:'Yersinia काली लिनक्स में उपलब्ध है।'},
    {question:'Yersinia किस श्रेणी में आता है?',options:['Network','Web','Tunneling','Audit'],correct:0,explanation:'Yersinia Network श्रेणी का टूल है।'},
    {question:'Yersinia का मुख्य उपयोग क्या है?',options:['गेम डेवलपमेंट','नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस','मोबाइल एप डेवलपमेंट','डेटाबेस मैनेजमेंट'],correct:1,explanation:'Yersinia नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Yersinia टूल कैसे चलाया जाता है?',options:['yersinia --help','yersinia trace','yersinia net','yersinia scan'],correct:0,explanation:'yersinia --help कमांड से चलाया जाता है।'}
  ],
  'dmitry': [
    {question:'DMitry किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['काली लिनक्स','सिर्फ विंडोज','सभी प्लेटफॉर्म','सिर्फ एंड्रॉइड'],correct:0,explanation:'DMitry काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'DMitry का मुख्य उद्देश्य क्या है?',options:['डेटा एनालिसिस','वेब डेवलपमेंट','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','नेटवर्क मॉनिटरिंग'],correct:2,explanation:'DMitry रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'DMitry किस श्रेणी में आता है?',options:['Tunneling','Recon','WiFi','Web'],correct:1,explanation:'DMitry Recon श्रेणी का टूल है।'},
    {question:'DMitry टूल का स्टैंडर्ड कमांड क्या है?',options:['dmitry --map','dmitry --help','dmitry --recon','dmitry --probe'],correct:1,explanation:'dmitry --help मुख्य कमांड है।'}
  ],
  'ike-scan': [
    {question:'IKE-Scan का मुख्य उद्देश्य क्या है?',options:['इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','सॉफ्टवेयर टेस्टिंग','डेटा एनालिसिस','वेब डेवलपमेंट'],correct:0,explanation:'IKE-Scan रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'IKE-Scan किस श्रेणी में आता है?',options:['Recon','Forensics','Web','Audit'],correct:0,explanation:'IKE-Scan Recon श्रेणी का टूल है।'},
    {question:'IKE-Scan टूल का स्टैंडर्ड कमांड क्या है?',options:['ike-scan --map','ike-scan --scan','ike-scan --recon','ike-scan --help'],correct:3,explanation:'ike-scan --help मुख्य कमांड है।'},
    {question:'IKE-Scan किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सभी प्लेटफॉर्म','सिर्फ आईओएस','काली लिनक्स','सिर्फ विंडोज'],correct:2,explanation:'IKE-Scan काली लिनक्स में प्री-इंस्टॉल्ड है।'}
  ],
  'lbd': [
    {question:'LBD किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ आईओएस','काली लिनक्स','सिर्फ एंड्रॉइड','सिर्फ विंडोज'],correct:1,explanation:'LBD काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'LBD टूल का स्टैंडर्ड कमांड क्या है?',options:['lbd --scan','lbd --help','lbd --probe','lbd --recon'],correct:1,explanation:'lbd --help मुख्य कमांड है।'},
    {question:'LBD किस श्रेणी में आता है?',options:['Passwords','Forensics','Network','Recon'],correct:3,explanation:'LBD Recon श्रेणी का टूल है।'},
    {question:'LBD का मुख्य उद्देश्य क्या है?',options:['वेब डेवलपमेंट','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','डेटा एनालिसिस','डेटाबेस मैनेजमेंट'],correct:1,explanation:'LBD रिकॉनिसेंस के लिए उपयोग होता है।'}
  ],
  'nbtscan': [
    {question:'NBTScan किस श्रेणी में आता है?',options:['Recon','Forensics','Exploitation','Audit'],correct:0,explanation:'NBTScan Recon श्रेणी का टूल है।'},
    {question:'NBTScan टूल का स्टैंडर्ड कमांड क्या है?',options:['nbtscan --probe','nbtscan --help','nbtscan --scan','nbtscan --map'],correct:1,explanation:'nbtscan --help मुख्य कमांड है।'},
    {question:'NBTScan का मुख्य उद्देश्य क्या है?',options:['इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','सॉफ्टवेयर टेस्टिंग','वेब डेवलपमेंट','नेटवर्क मॉनिटरिंग'],correct:0,explanation:'NBTScan रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'NBTScan किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['काली लिनक्स','सभी प्लेटफॉर्म','सिर्फ विंडोज','सिर्फ मैक'],correct:0,explanation:'NBTScan काली लिनक्स में प्री-इंस्टॉल्ड है।'}
  ],
  'nishang': [
    {question:'Nishang किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['ओपन सूसी','डेबियन','काली लिनक्स','आर्क लिनक्स'],correct:2,explanation:'Nishang काली लिनक्स में उपलब्ध है।'},
    {question:'Nishang का उपयोग किसके लिए किया जाता है?',options:['डेटाबेस मैनेजमेंट','वेब डेवलपमेंट','ग्राफिक डिजाइनिंग','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'Nishang एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Nishang का स्टैंडर्ड कमांड क्या है?',options:['nishang --run','nishang --exploit','nishang --fire','nishang --help'],correct:3,explanation:'nishang --help स्टैंडर्ड कमांड है।'},
    {question:'Nishang किस श्रेणी का टूल है?',options:['Network','WiFi','Passwords','Exploitation'],correct:3,explanation:'Nishang Exploitation श्रेणी का टूल है।'}
  ],
  'p0f': [
    {question:'P0f का मुख्य उद्देश्य क्या है?',options:['डेटाबेस मैनेजमेंट','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','सॉफ्टवेयर टेस्टिंग','नेटवर्क मॉनिटरिंग'],correct:1,explanation:'P0f रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'P0f टूल का स्टैंडर्ड कमांड क्या है?',options:['p0f --help','p0f --scan','p0f --recon','p0f --map'],correct:0,explanation:'p0f --help मुख्य कमांड है।'},
    {question:'P0f किस श्रेणी में आता है?',options:['Exploitation','Network','Recon','Audit'],correct:2,explanation:'P0f Recon श्रेणी का टूल है।'},
    {question:'P0f किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ मैक','काली लिनक्स','सिर्फ विंडोज','सिर्फ एंड्रॉइड'],correct:1,explanation:'P0f काली लिनक्स में प्री-इंस्टॉल्ड है।'}
  ],
  'pcredz': [
    {question:'PCredz किस श्रेणी का टूल है?',options:['WiFi','Tunneling','Forensics','Recon'],correct:2,explanation:'PCredz Forensics श्रेणी का टूल है।'},
    {question:'PCredz को कैसे रन किया जाता है?',options:['pcredz --help','pcredz --analyze','pcredz --investigate','pcredz --extract'],correct:0,explanation:'pcredz --help से रन किया जाता है।'},
    {question:'PCredz किस काम में आता है?',options:['डिजिटल फोरेंसिक्स और डेटा एनालिसिस','नेटवर्क एडमिन','सोशल मीडिया मार्केटिंग','वेब डेवलपमेंट'],correct:0,explanation:'PCredz फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'PCredz किस प्लेटफॉर्म पर उपलब्ध है?',options:['उबंटू','काली लिनक्स','फेडोरा','डेबियन'],correct:1,explanation:'PCredz काली लिनक्स पर उपलब्ध है।'}
  ],
  'pdf-parser': [
    {question:'PDF-Parser को कैसे रन किया जाता है?',options:['pdf-parser --investigate','pdf-parser --analyze','pdf-parser --extract','pdf-parser --help'],correct:3,explanation:'pdf-parser --help से रन किया जाता है।'},
    {question:'PDF-Parser किस श्रेणी का टूल है?',options:['Recon','WiFi','Forensics','Web'],correct:2,explanation:'PDF-Parser Forensics श्रेणी का टूल है।'},
    {question:'PDF-Parser किस प्लेटफॉर्म पर उपलब्ध है?',options:['ओपन सूसी','डेबियन','काली लिनक्स','आर्क लिनक्स'],correct:2,explanation:'PDF-Parser काली लिनक्स पर उपलब्ध है।'},
    {question:'PDF-Parser किस काम में आता है?',options:['गेम डेवलपमेंट','नेटवर्क एडमिन','डिजिटल फोरेंसिक्स और डेटा एनालिसिस','सोशल मीडिया मार्केटिंग'],correct:2,explanation:'PDF-Parser फोरेंसिक्स के लिए उपयोग होता है।'}
  ],
  'smbmap': [
    {question:'SMBMap किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['काली लिनक्स','सिर्फ एंड्रॉइड','सिर्फ मैक','सभी प्लेटफॉर्म'],correct:0,explanation:'SMBMap काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'SMBMap किस श्रेणी में आता है?',options:['Mobile','Recon','Audit','Web'],correct:1,explanation:'SMBMap Recon श्रेणी का टूल है।'},
    {question:'SMBMap टूल का स्टैंडर्ड कमांड क्या है?',options:['smbmap --scan','smbmap --recon','smbmap --help','smbmap --map'],correct:2,explanation:'smbmap --help मुख्य कमांड है।'},
    {question:'SMBMap का मुख्य उद्देश्य क्या है?',options:['इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','सॉफ्टवेयर टेस्टिंग','वेब डेवलपमेंट','नेटवर्क मॉनिटरिंग'],correct:0,explanation:'SMBMap रिकॉनिसेंस के लिए उपयोग होता है।'}
  ],
  'snmp-check': [
    {question:'SNMP-Check किस श्रेणी में आता है?',options:['Audit','Exploitation','Passwords','Recon'],correct:3,explanation:'SNMP-Check Recon श्रेणी का टूल है।'},
    {question:'SNMP-Check टूल का स्टैंडर्ड कमांड क्या है?',options:['snmp-check --map','snmp-check --probe','snmp-check --scan','snmp-check --help'],correct:3,explanation:'snmp-check --help मुख्य कमांड है।'},
    {question:'SNMP-Check का मुख्य उद्देश्य क्या है?',options:['डेटाबेस मैनेजमेंट','सॉफ्टवेयर टेस्टिंग','डेटा एनालिसिस','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस'],correct:3,explanation:'SNMP-Check रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'SNMP-Check किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ मैक','काली लिनक्स','सभी प्लेटफॉर्म','सिर्फ आईओएस'],correct:1,explanation:'SNMP-Check काली लिनक्स में प्री-इंस्टॉल्ड है।'}
  ],
  'sparta': [
    {question:'Sparta का मुख्य उद्देश्य क्या है?',options:['वेब डेवलपमेंट','सॉफ्टवेयर टेस्टिंग','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','नेटवर्क मॉनिटरिंग'],correct:2,explanation:'Sparta रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Sparta किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सभी प्लेटफॉर्म','सिर्फ मैक','काली लिनक्स','सिर्फ विंडोज'],correct:2,explanation:'Sparta काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Sparta किस श्रेणी में आता है?',options:['Passwords','Web','Recon','Mobile'],correct:2,explanation:'Sparta Recon श्रेणी का टूल है।'},
    {question:'Sparta टूल का स्टैंडर्ड कमांड क्या है?',options:['sparta --help','sparta --probe','sparta --recon','sparta --scan'],correct:0,explanation:'sparta --help मुख्य कमांड है।'}
  ],
  'sslscan': [
    {question:'SSLScan का मुख्य उद्देश्य क्या है?',options:['डेटा एनालिसिस','सॉफ्टवेयर टेस्टिंग','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','डेटाबेस मैनेजमेंट'],correct:2,explanation:'SSLScan रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'SSLScan किस श्रेणी में आता है?',options:['Tunneling','Web','Network','Recon'],correct:3,explanation:'SSLScan Recon श्रेणी का टूल है।'},
    {question:'SSLScan टूल का स्टैंडर्ड कमांड क्या है?',options:['sslscan --help','sslscan --scan','sslscan --recon','sslscan --probe'],correct:0,explanation:'sslscan --help मुख्य कमांड है।'},
    {question:'SSLScan किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ मैक','सिर्फ विंडोज','काली लिनक्स','सिर्फ आईओएस'],correct:2,explanation:'SSLScan काली लिनक्स में प्री-इंस्टॉल्ड है।'}
  ],
  'sslyze': [
    {question:'SSLyze का मुख्य उद्देश्य क्या है?',options:['सॉफ्टवेयर टेस्टिंग','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','नेटवर्क मॉनिटरिंग','वेब डेवलपमेंट'],correct:1,explanation:'SSLyze रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'SSLyze किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ आईओएस','सभी प्लेटफॉर्म','काली लिनक्स','सिर्फ विंडोज'],correct:2,explanation:'SSLyze काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'SSLyze किस श्रेणी में आता है?',options:['Recon','Web','Tunneling','Mobile'],correct:0,explanation:'SSLyze Recon श्रेणी का टूल है।'},
    {question:'SSLyze टूल का स्टैंडर्ड कमांड क्या है?',options:['sslyze --map','sslyze --probe','sslyze --recon','sslyze --help'],correct:3,explanation:'sslyze --help मुख्य कमांड है।'}
  ],
  'unicornscan': [
    {question:'Unicornscan का मुख्य उद्देश्य क्या है?',options:['सॉफ्टवेयर टेस्टिंग','डेटाबेस मैनेजमेंट','वेब डेवलपमेंट','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस'],correct:3,explanation:'Unicornscan रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Unicornscan किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ विंडोज','काली लिनक्स','सिर्फ एंड्रॉइड','सिर्फ मैक'],correct:1,explanation:'Unicornscan काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Unicornscan किस श्रेणी में आता है?',options:['Passwords','Network','Mobile','Recon'],correct:3,explanation:'Unicornscan Recon श्रेणी का टूल है।'},
    {question:'Unicornscan टूल का स्टैंडर्ड कमांड क्या है?',options:['unicornscan --map','unicornscan --probe','unicornscan --scan','unicornscan --help'],correct:3,explanation:'unicornscan --help मुख्य कमांड है।'}
  ],
  'urlcrazy': [
    {question:'URLCrazy किस श्रेणी में आता है?',options:['WiFi','Exploitation','Recon','Audit'],correct:2,explanation:'URLCrazy Recon श्रेणी का टूल है।'},
    {question:'URLCrazy टूल का स्टैंडर्ड कमांड क्या है?',options:['urlcrazy --help','urlcrazy --recon','urlcrazy --probe','urlcrazy --map'],correct:0,explanation:'urlcrazy --help मुख्य कमांड है।'},
    {question:'URLCrazy का मुख्य उद्देश्य क्या है?',options:['डेटा एनालिसिस','सॉफ्टवेयर टेस्टिंग','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','डेटाबेस मैनेजमेंट'],correct:2,explanation:'URLCrazy रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'URLCrazy किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सभी प्लेटफॉर्म','सिर्फ आईओएस','काली लिनक्स','सिर्फ मैक'],correct:2,explanation:'URLCrazy काली लिनक्स में प्री-इंस्टॉल्ड है।'}
  ],
  'xplico': [
    {question:'Xplico किस श्रेणी का टूल है?',options:['Forensics','Audit','Mobile','Exploitation'],correct:0,explanation:'Xplico Forensics श्रेणी का टूल है।'},
    {question:'Xplico किस प्लेटफॉर्म पर उपलब्ध है?',options:['डेबियन','काली लिनक्स','ओपन सूसी','उबंटू'],correct:1,explanation:'Xplico काली लिनक्स पर उपलब्ध है।'},
    {question:'Xplico को कैसे रन किया जाता है?',options:['xplico --examine','xplico --extract','xplico --investigate','xplico --help'],correct:3,explanation:'xplico --help से रन किया जाता है।'},
    {question:'Xplico किस काम में आता है?',options:['गेम डेवलपमेंट','डिजिटल फोरेंसिक्स और डेटा एनालिसिस','वेब डेवलपमेंट','डेटाबेस डिजाइन'],correct:1,explanation:'Xplico फोरेंसिक्स के लिए उपयोग होता है।'}
  ],
  'dns2tcp': [
    {question:'Dns2tcp का उपयोग क्या है?',options:['नेटवर्क टनलिंग और ट्रैफिक एनकैप्सुलेशन','डेटाबेस मैनेजमेंट','वेब डेवलपमेंट','ग्राफिक डिजाइनिंग'],correct:0,explanation:'Dns2tcp नेटवर्क टनलिंग के लिए उपयोग होता है।'},
    {question:'Dns2tcp का कमांड क्या होता है?',options:['dns2tcp --tunnel','dns2tcp --help','dns2tcp --route','dns2tcp --forward'],correct:1,explanation:'dns2tcp --help कमांड होता है।'},
    {question:'Dns2tcp किस श्रेणी में आता है?',options:['Passwords','Forensics','Tunneling','Mobile'],correct:2,explanation:'Dns2tcp Tunneling श्रेणी का टूल है।'},
    {question:'Dns2tcp किस प्लेटफॉर्म पर चलता है?',options:['आर्क लिनक्स','काली लिनक्स','उबंटू','ओपन सूसी'],correct:1,explanation:'Dns2tcp काली लिनक्स पर चलता है।'}
  ],
  'dnschef': [
    {question:'DNSchef किस श्रेणी में आता है?',options:['Recon','Tunneling','Web','Forensics'],correct:0,explanation:'DNSchef Recon श्रेणी का टूल है।'},
    {question:'DNSchef किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ विंडोज','सभी प्लेटफॉर्म','सिर्फ मैक','काली लिनक्स'],correct:3,explanation:'DNSchef काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'DNSchef का मुख्य उद्देश्य क्या है?',options:['सॉफ्टवेयर टेस्टिंग','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','वेब डेवलपमेंट','नेटवर्क मॉनिटरिंग'],correct:1,explanation:'DNSchef रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'DNSchef टूल का स्टैंडर्ड कमांड क्या है?',options:['dnschef --scan','dnschef --probe','dnschef --recon','dnschef --help'],correct:3,explanation:'dnschef --help मुख्य कमांड है।'}
  ],
  'metagoofil': [
    {question:'Metagoofil किस श्रेणी में आता है?',options:['WiFi','Recon','Mobile','Exploitation'],correct:1,explanation:'Metagoofil Recon श्रेणी का टूल है।'},
    {question:'Metagoofil का मुख्य उद्देश्य क्या है?',options:['नेटवर्क मॉनिटरिंग','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','वेब डेवलपमेंट','सॉफ्टवेयर टेस्टिंग'],correct:1,explanation:'Metagoofil रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Metagoofil किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सभी प्लेटफॉर्म','काली लिनक्स','सिर्फ आईओएस','सिर्फ विंडोज'],correct:1,explanation:'Metagoofil काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Metagoofil टूल का स्टैंडर्ड कमांड क्या है?',options:['metagoofil --map','metagoofil --help','metagoofil --probe','metagoofil --recon'],correct:1,explanation:'metagoofil --help मुख्य कमांड है।'}
  ],
  'fierce': [
    {question:'Fierce टूल का स्टैंडर्ड कमांड क्या है?',options:['fierce --recon','fierce --map','fierce --scan','fierce --help'],correct:3,explanation:'fierce --help मुख्य कमांड है।'},
    {question:'Fierce का मुख्य उद्देश्य क्या है?',options:['डेटा एनालिसिस','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','सॉफ्टवेयर टेस्टिंग','वेब डेवलपमेंट'],correct:1,explanation:'Fierce रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Fierce किस श्रेणी में आता है?',options:['Forensics','Recon','Mobile','Tunneling'],correct:1,explanation:'Fierce Recon श्रेणी का टूल है।'},
    {question:'Fierce किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ मैक','सभी प्लेटफॉर्म','सिर्फ एंड्रॉइड','काली लिनक्स'],correct:3,explanation:'Fierce काली लिनक्स में प्री-इंस्टॉल्ड है।'}
  ],
  'dnsmap': [
    {question:'Dnsmap किस श्रेणी में आता है?',options:['Mobile','Recon','Web','Exploitation'],correct:1,explanation:'Dnsmap Recon श्रेणी का टूल है।'},
    {question:'Dnsmap का मुख्य उद्देश्य क्या है?',options:['सॉफ्टवेयर टेस्टिंग','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','नेटवर्क मॉनिटरिंग','वेब डेवलपमेंट'],correct:1,explanation:'Dnsmap रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Dnsmap टूल का स्टैंडर्ड कमांड क्या है?',options:['dnsmap --recon','dnsmap --help','dnsmap --scan','dnsmap --map'],correct:1,explanation:'dnsmap --help मुख्य कमांड है।'},
    {question:'Dnsmap किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सभी प्लेटफॉर्म','सिर्फ विंडोज','सिर्फ मैक','काली लिनक्स'],correct:3,explanation:'Dnsmap काली लिनक्स में प्री-इंस्टॉल्ड है।'}
  ],
  'httrack': [
    {question:'HTTrack किस प्लेटफॉर्म पर चलता है?',options:['फेडोरा','डेबियन','काली लिनक्स','उबंटू'],correct:2,explanation:'HTTrack काली लिनक्स पर चलता है।'},
    {question:'HTTrack के लिए कौन सा कमांड इस्तेमाल होता है?',options:['httrack --web','httrack --audit','httrack --help','httrack --check'],correct:2,explanation:'httrack --help इस्तेमाल होता है।'},
    {question:'HTTrack किस श्रेणी का टूल है?',options:['Recon','Tunneling','Exploitation','Web'],correct:3,explanation:'HTTrack Web श्रेणी का टूल है।'},
    {question:'HTTrack किस काम आता है?',options:['सिस्टम एडमिन','डेटाबेस मैनेजमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','गेम डेवलपमेंट'],correct:2,explanation:'HTTrack वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'rpcbind': [
    {question:'RPCBind टूल का स्टैंडर्ड कमांड क्या है?',options:['rpcbind --help','rpcbind --recon','rpcbind --scan','rpcbind --map'],correct:0,explanation:'rpcbind --help मुख्य कमांड है।'},
    {question:'RPCBind किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ आईओएस','सभी प्लेटफॉर्म','सिर्फ मैक','काली लिनक्स'],correct:3,explanation:'RPCBind काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'RPCBind किस श्रेणी में आता है?',options:['WiFi','Recon','Network','Tunneling'],correct:1,explanation:'RPCBind Recon श्रेणी का टूल है।'},
    {question:'RPCBind का मुख्य उद्देश्य क्या है?',options:['नेटवर्क मॉनिटरिंग','वेब डेवलपमेंट','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','डेटा एनालिसिस'],correct:2,explanation:'RPCBind रिकॉनिसेंस के लिए उपयोग होता है।'}
  ],
  'smbclient': [
    {question:'SMBClient किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ आईओएस','काली लिनक्स','सभी प्लेटफॉर्म','सिर्फ एंड्रॉइड'],correct:1,explanation:'SMBClient काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'SMBClient किस श्रेणी में आता है?',options:['Web','Recon','WiFi','Exploitation'],correct:1,explanation:'SMBClient Recon श्रेणी का टूल है।'},
    {question:'SMBClient टूल का स्टैंडर्ड कमांड क्या है?',options:['smbclient --map','smbclient --scan','smbclient --help','smbclient --probe'],correct:2,explanation:'smbclient --help मुख्य कमांड है।'},
    {question:'SMBClient का मुख्य उद्देश्य क्या है?',options:['इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','सॉफ्टवेयर टेस्टिंग','वेब डेवलपमेंट','नेटवर्क मॉनिटरिंग'],correct:0,explanation:'SMBClient रिकॉनिसेंस के लिए उपयोग होता है।'}
  ],
  'finger': [
    {question:'Finger किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ मैक','सिर्फ एंड्रॉइड','सभी प्लेटफॉर्म','काली लिनक्स'],correct:3,explanation:'Finger काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Finger किस श्रेणी में आता है?',options:['Recon','Tunneling','Exploitation','WiFi'],correct:0,explanation:'Finger Recon श्रेणी का टूल है।'},
    {question:'Finger टूल का स्टैंडर्ड कमांड क्या है?',options:['finger --scan','finger --probe','finger --help','finger --recon'],correct:2,explanation:'finger --help मुख्य कमांड है।'},
    {question:'Finger का मुख्य उद्देश्य क्या है?',options:['इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','डेटा एनालिसिस','डेटाबेस मैनेजमेंट','वेब डेवलपमेंट'],correct:0,explanation:'Finger रिकॉनिसेंस के लिए उपयोग होता है।'}
  ],
  'showmount': [
    {question:'Showmount टूल का स्टैंडर्ड कमांड क्या है?',options:['showmount --probe','showmount --scan','showmount --help','showmount --map'],correct:2,explanation:'showmount --help मुख्य कमांड है।'},
    {question:'Showmount किस श्रेणी में आता है?',options:['Recon','WiFi','Tunneling','Passwords'],correct:0,explanation:'Showmount Recon श्रेणी का टूल है।'},
    {question:'Showmount किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ मैक','सिर्फ विंडोज','काली लिनक्स','सभी प्लेटफॉर्म'],correct:2,explanation:'Showmount काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Showmount का मुख्य उद्देश्य क्या है?',options:['नेटवर्क मॉनिटरिंग','डेटा एनालिसिस','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','सॉफ्टवेयर टेस्टिंग'],correct:2,explanation:'Showmount रिकॉनिसेंस के लिए उपयोग होता है।'}
  ],
  'bind9': [
    {question:'BIND9 किस श्रेणी में आता है?',options:['Exploitation','Recon','Passwords','Web'],correct:1,explanation:'BIND9 Recon श्रेणी का टूल है।'},
    {question:'BIND9 टूल का स्टैंडर्ड कमांड क्या है?',options:['bind9 --recon','bind9 --scan','bind9 --probe','bind9 --help'],correct:3,explanation:'bind9 --help मुख्य कमांड है।'},
    {question:'BIND9 किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ आईओएस','काली लिनक्स','सिर्फ एंड्रॉइड','सिर्फ विंडोज'],correct:1,explanation:'BIND9 काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'BIND9 का मुख्य उद्देश्य क्या है?',options:['डेटा एनालिसिस','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','डेटाबेस मैनेजमेंट','सॉफ्टवेयर टेस्टिंग'],correct:1,explanation:'BIND9 रिकॉनिसेंस के लिए उपयोग होता है।'}
  ],
  'armitage': [
    {question:'Armitage का उपयोग किसके लिए किया जाता है?',options:['ग्राफिक डिजाइनिंग','डेटाबेस मैनेजमेंट','क्लाउड कंप्यूटिंग','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'Armitage एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Armitage किस श्रेणी का टूल है?',options:['Network','Web','Exploitation','Mobile'],correct:2,explanation:'Armitage Exploitation श्रेणी का टूल है।'},
    {question:'Armitage किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['उबंटू','पैरट OS','सेंट OS','काली लिनक्स'],correct:3,explanation:'Armitage काली लिनक्स में उपलब्ध है।'},
    {question:'Armitage का स्टैंडर्ड कमांड क्या है?',options:['armitage --exploit','armitage --fire','armitage --help','armitage --execute'],correct:2,explanation:'armitage --help स्टैंडर्ड कमांड है।'}
  ],
  'backdoor-factory': [
    {question:'Backdoor Factory का स्टैंडर्ड कमांड क्या है?',options:['backdoor-factory --launch','backdoor-factory --run','backdoor-factory --execute','backdoor-factory --help'],correct:3,explanation:'backdoor-factory --help स्टैंडर्ड कमांड है।'},
    {question:'Backdoor Factory का उपयोग किसके लिए किया जाता है?',options:['वेब डेवलपमेंट','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','डेटाबेस मैनेजमेंट','ग्राफिक डिजाइनिंग'],correct:1,explanation:'Backdoor Factory एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Backdoor Factory किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['काली लिनक्स','पैरट OS','उबंटू','ओपन सूसी'],correct:0,explanation:'Backdoor Factory काली लिनक्स में उपलब्ध है।'},
    {question:'Backdoor Factory किस श्रेणी का टूल है?',options:['WiFi','Tunneling','Forensics','Exploitation'],correct:3,explanation:'Backdoor Factory Exploitation श्रेणी का टूल है।'}
  ],
  'shellter': [
    {question:'Shellter का उपयोग किसके लिए किया जाता है?',options:['वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','क्लाउड कंप्यूटिंग','डेटाबेस मैनेजमेंट','वेब डेवलपमेंट'],correct:0,explanation:'Shellter एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Shellter का स्टैंडर्ड कमांड क्या है?',options:['shellter --execute','shellter --exploit','shellter --help','shellter --run'],correct:2,explanation:'shellter --help स्टैंडर्ड कमांड है।'},
    {question:'Shellter किस श्रेणी का टूल है?',options:['Tunneling','Exploitation','Forensics','Audit'],correct:1,explanation:'Shellter Exploitation श्रेणी का टूल है।'},
    {question:'Shellter किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['पैरट OS','काली लिनक्स','डेबियन','सेंट OS'],correct:1,explanation:'Shellter काली लिनक्स में उपलब्ध है।'}
  ],
  'veil': [
    {question:'Veil किस श्रेणी का टूल है?',options:['WiFi','Exploitation','Audit','Mobile'],correct:1,explanation:'Veil Exploitation श्रेणी का टूल है।'},
    {question:'Veil का उपयोग किसके लिए किया जाता है?',options:['ग्राफिक डिजाइनिंग','वेब डेवलपमेंट','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','क्लाउड कंप्यूटिंग'],correct:2,explanation:'Veil एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Veil का स्टैंडर्ड कमांड क्या है?',options:['veil --execute','veil --launch','veil --help','veil --exploit'],correct:2,explanation:'veil --help स्टैंडर्ड कमांड है।'},
    {question:'Veil किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['काली लिनक्स','ओपन सूसी','आर्क लिनक्स','पैरट OS'],correct:0,explanation:'Veil काली लिनक्स में उपलब्ध है।'}
  ],
  'websploit': [
    {question:'WebSploit किस काम आता है?',options:['सिस्टम एडमिन','मोबाइल डेवलपमेंट','डेटाबेस मैनेजमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग'],correct:3,explanation:'WebSploit वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'WebSploit किस श्रेणी का टूल है?',options:['Recon','WiFi','Forensics','Web'],correct:3,explanation:'WebSploit Web श्रेणी का टूल है।'},
    {question:'WebSploit किस प्लेटफॉर्म पर चलता है?',options:['काली लिनक्स','पैरट OS','आर्क लिनक्स','ओपन सूसी'],correct:0,explanation:'WebSploit काली लिनक्स पर चलता है।'},
    {question:'WebSploit के लिए कौन सा कमांड इस्तेमाल होता है?',options:['websploit --check','websploit --help','websploit --scan','websploit --web'],correct:1,explanation:'websploit --help इस्तेमाल होता है।'}
  ],
  'exe2hex': [
    {question:'Exe2Hex किस श्रेणी का टूल है?',options:['WiFi','Network','Passwords','Exploitation'],correct:3,explanation:'Exe2Hex Exploitation श्रेणी का टूल है।'},
    {question:'Exe2Hex का स्टैंडर्ड कमांड क्या है?',options:['exe2hex --fire','exe2hex --help','exe2hex --execute','exe2hex --run'],correct:1,explanation:'exe2hex --help स्टैंडर्ड कमांड है।'},
    {question:'Exe2Hex किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['सेंट OS','आर्क लिनक्स','डेबियन','काली लिनक्स'],correct:3,explanation:'Exe2Hex काली लिनक्स में उपलब्ध है।'},
    {question:'Exe2Hex का उपयोग किसके लिए किया जाता है?',options:['सिस्टम एडमिनिस्ट्रेशन','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','वेब डेवलपमेंट','ग्राफिक डिजाइनिंग'],correct:1,explanation:'Exe2Hex एक्सप्लॉइटेशन के लिए उपयोग होता है।'}
  ],
  'fluxion': [
    {question:'Fluxion मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['फेडोरा','काली लिनक्स','आर्क लिनक्स','पैरट OS'],correct:1,explanation:'Fluxion काली लिनक्स में उपलब्ध है।'},
    {question:'Fluxion के साथ कौन सा कमांड आम है?',options:['fluxion --list','fluxion -h','fluxion --version','fluxion --help'],correct:3,explanation:'fluxion --help से विकल्पों की सूची मिलती है।'},
    {question:'Fluxion किस श्रेणी का टूल है?',options:['Web','Network','WiFi','Passwords'],correct:2,explanation:'Fluxion WiFi श्रेणी का टूल है।'},
    {question:'Fluxion का मुख्य उपयोग क्या है?',options:['ग्राफिक डिजाइनिंग','वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग','क्लाउड कंप्यूटिंग','आर्टिफिशियल इंटेलिजेंस'],correct:1,explanation:'Fluxion वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'mana-toolkit': [
    {question:'Mana Toolkit किस श्रेणी का टूल है?',options:['Exploitation','Web','WiFi','Recon'],correct:2,explanation:'Mana Toolkit WiFi श्रेणी का टूल है।'},
    {question:'Mana Toolkit मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['काली लिनक्स','आर्क लिनक्स','डेबियन','फेडोरा'],correct:0,explanation:'Mana Toolkit काली लिनक्स में उपलब्ध है।'},
    {question:'Mana Toolkit का मुख्य उपयोग क्या है?',options:['वीडियो एडिटिंग','वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग','क्लाउड कंप्यूटिंग','ग्राफिक डिजाइनिंग'],correct:1,explanation:'Mana Toolkit वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Mana Toolkit के साथ कौन सा कमांड आम है?',options:['mana-toolkit -h','mana-toolkit --help','mana-toolkit --info','mana-toolkit --list'],correct:1,explanation:'mana-toolkit --help से विकल्पों की सूची मिलती है।'}
  ],
  'thc-ipv6': [
    {question:'THC-IPv6 का उपयोग किसके लिए किया जाता है?',options:['वेब डेवलपमेंट','डेटाबेस मैनेजमेंट','सिस्टम एडमिनिस्ट्रेशन','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'THC-IPv6 एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'THC-IPv6 का स्टैंडर्ड कमांड क्या है?',options:['thc-ipv6 --launch','thc-ipv6 --help','thc-ipv6 --exploit','thc-ipv6 --fire'],correct:1,explanation:'thc-ipv6 --help स्टैंडर्ड कमांड है।'},
    {question:'THC-IPv6 किस श्रेणी का टूल है?',options:['Tunneling','Forensics','Network','Exploitation'],correct:3,explanation:'THC-IPv6 Exploitation श्रेणी का टूल है।'},
    {question:'THC-IPv6 किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['पैरट OS','फेडोरा','काली लिनक्स','सेंट OS'],correct:2,explanation:'THC-IPv6 काली लिनक्स में उपलब्ध है।'}
  ],
  'sidguess': [
    {question:'SidGuess किस प्लेटफॉर्म पर चलता है?',options:['डेबियन','आर्क लिनक्स','काली लिनक्स','पैरट OS'],correct:2,explanation:'SidGuess काली लिनक्स पर चलता है।'},
    {question:'SidGuess किस श्रेणी का टूल है?',options:['WiFi','Recon','Web','Tunneling'],correct:2,explanation:'SidGuess Web श्रेणी का टूल है।'},
    {question:'SidGuess किस काम आता है?',options:['ग्राफिक डिजाइनिंग','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','डेटाबेस मैनेजमेंट','सिस्टम एडमिन'],correct:1,explanation:'SidGuess वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'SidGuess के लिए कौन सा कमांड इस्तेमाल होता है?',options:['sidguess --scan','sidguess --help','sidguess --test','sidguess --url'],correct:1,explanation:'sidguess --help इस्तेमाल होता है।'}
  ],
  'msfpayload': [
    {question:'MSFPayload का स्टैंडर्ड कमांड क्या है?',options:['msfpayload --attack','msfpayload --help','msfpayload --execute','msfpayload --run'],correct:1,explanation:'msfpayload --help स्टैंडर्ड कमांड है।'},
    {question:'MSFPayload का उपयोग किसके लिए किया जाता है?',options:['डेटाबेस मैनेजमेंट','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','क्लाउड कंप्यूटिंग','सिस्टम एडमिनिस्ट्रेशन'],correct:1,explanation:'MSFPayload एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'MSFPayload किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['फेडोरा','सेंट OS','उबंटू','काली लिनक्स'],correct:3,explanation:'MSFPayload काली लिनक्स में उपलब्ध है।'},
    {question:'MSFPayload किस श्रेणी का टूल है?',options:['Exploitation','Audit','Passwords','Network'],correct:0,explanation:'MSFPayload Exploitation श्रेणी का टूल है।'}
  ],
  'shellnoob': [
    {question:'ShellNoob किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['फेडोरा','डेबियन','काली लिनक्स','आर्क लिनक्स'],correct:2,explanation:'ShellNoob काली लिनक्स में उपलब्ध है।'},
    {question:'ShellNoob का स्टैंडर्ड कमांड क्या है?',options:['shellnoob --help','shellnoob --fire','shellnoob --launch','shellnoob --attack'],correct:0,explanation:'shellnoob --help स्टैंडर्ड कमांड है।'},
    {question:'ShellNoob का उपयोग किसके लिए किया जाता है?',options:['सिस्टम एडमिनिस्ट्रेशन','डेटाबेस मैनेजमेंट','क्लाउड कंप्यूटिंग','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'ShellNoob एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'ShellNoob किस श्रेणी का टूल है?',options:['Forensics','Exploitation','Passwords','Network'],correct:1,explanation:'ShellNoob Exploitation श्रेणी का टूल है।'}
  ],
  'pwntools': [
    {question:'Pwntools किस श्रेणी का टूल है?',options:['Web','Mobile','Exploitation','Forensics'],correct:2,explanation:'Pwntools Exploitation श्रेणी का टूल है।'},
    {question:'Pwntools किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['आर्क लिनक्स','काली लिनक्स','फेडोरा','ओपन सूसी'],correct:1,explanation:'Pwntools काली लिनक्स में उपलब्ध है।'},
    {question:'Pwntools का उपयोग किसके लिए किया जाता है?',options:['डेटाबेस मैनेजमेंट','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','सिस्टम एडमिनिस्ट्रेशन','ग्राफिक डिजाइनिंग'],correct:1,explanation:'Pwntools एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Pwntools का स्टैंडर्ड कमांड क्या है?',options:['pwntools --run','pwntools --help','pwntools --fire','pwntools --launch'],correct:1,explanation:'pwntools --help स्टैंडर्ड कमांड है।'}
  ],
  'ropper': [
    {question:'Ropper का उपयोग किसके लिए किया जाता है?',options:['क्लाउड कंप्यूटिंग','वेब डेवलपमेंट','सिस्टम एडमिनिस्ट्रेशन','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'Ropper एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Ropper किस श्रेणी का टूल है?',options:['Passwords','Network','Exploitation','Tunneling'],correct:2,explanation:'Ropper Exploitation श्रेणी का टूल है।'},
    {question:'Ropper का स्टैंडर्ड कमांड क्या है?',options:['ropper --help','ropper --run','ropper --exploit','ropper --launch'],correct:0,explanation:'ropper --help स्टैंडर्ड कमांड है।'},
    {question:'Ropper किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['फेडोरा','उबंटू','काली लिनक्स','ओपन सूसी'],correct:2,explanation:'Ropper काली लिनक्स में उपलब्ध है।'}
  ],
  'checksec': [
    {question:'Checksec किस श्रेणी का टूल है?',options:['Passwords','Exploitation','Web','Forensics'],correct:1,explanation:'Checksec Exploitation श्रेणी का टूल है।'},
    {question:'Checksec का स्टैंडर्ड कमांड क्या है?',options:['checksec --help','checksec --exploit','checksec --run','checksec --attack'],correct:0,explanation:'checksec --help स्टैंडर्ड कमांड है।'},
    {question:'Checksec का उपयोग किसके लिए किया जाता है?',options:['डेटाबेस मैनेजमेंट','क्लाउड कंप्यूटिंग','सिस्टम एडमिनिस्ट्रेशन','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'Checksec एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Checksec किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['ओपन सूसी','उबंटू','पैरट OS','काली लिनक्स'],correct:3,explanation:'Checksec काली लिनक्स में उपलब्ध है।'}
  ],
  'one_gadget': [
    {question:'One Gadget किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['आर्क लिनक्स','पैरट OS','ओपन सूसी','काली लिनक्स'],correct:3,explanation:'One Gadget काली लिनक्स में उपलब्ध है।'},
    {question:'One Gadget का स्टैंडर्ड कमांड क्या है?',options:['one_gadget --help','one_gadget --attack','one_gadget --run','one_gadget --launch'],correct:0,explanation:'one_gadget --help स्टैंडर्ड कमांड है।'},
    {question:'One Gadget का उपयोग किसके लिए किया जाता है?',options:['वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','वेब डेवलपमेंट','डेटाबेस मैनेजमेंट','सिस्टम एडमिनिस्ट्रेशन'],correct:0,explanation:'One Gadget एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'One Gadget किस श्रेणी का टूल है?',options:['Exploitation','Tunneling','Network','Mobile'],correct:0,explanation:'One Gadget Exploitation श्रेणी का टूल है।'}
  ],
  'whatweb': [
    {question:'WhatWeb के लिए कौन सा कमांड इस्तेमाल होता है?',options:['whatweb --help','whatweb --web','whatweb --check','whatweb --url'],correct:0,explanation:'whatweb --help इस्तेमाल होता है।'},
    {question:'WhatWeb किस श्रेणी का टूल है?',options:['Recon','Exploitation','Tunneling','Web'],correct:3,explanation:'WhatWeb Web श्रेणी का टूल है।'},
    {question:'WhatWeb किस काम आता है?',options:['गेम डेवलपमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','ग्राफिक डिजाइनिंग','सिस्टम एडमिन'],correct:1,explanation:'WhatWeb वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'WhatWeb किस प्लेटफॉर्म पर चलता है?',options:['उबंटू','काली लिनक्स','फेडोरा','सेंट OS'],correct:1,explanation:'WhatWeb काली लिनक्स पर चलता है।'}
  ],
  'skipfish': [
    {question:'Skipfish किस श्रेणी का टूल है?',options:['Audit','Web','Exploitation','Forensics'],correct:1,explanation:'Skipfish Web श्रेणी का टूल है।'},
    {question:'Skipfish के लिए कौन सा कमांड इस्तेमाल होता है?',options:['skipfish --scan','skipfish --url','skipfish --help','skipfish --audit'],correct:2,explanation:'skipfish --help इस्तेमाल होता है।'},
    {question:'Skipfish किस प्लेटफॉर्म पर चलता है?',options:['उबंटू','पैरट OS','काली लिनक्स','सेंट OS'],correct:2,explanation:'Skipfish काली लिनक्स पर चलता है।'},
    {question:'Skipfish किस काम आता है?',options:['वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','डेटाबेस मैनेजमेंट','ग्राफिक डिजाइनिंग','मोबाइल डेवलपमेंट'],correct:0,explanation:'Skipfish वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'wapiti': [
    {question:'Wapiti किस श्रेणी का टूल है?',options:['Tunneling','Web','Audit','Recon'],correct:1,explanation:'Wapiti Web श्रेणी का टूल है।'},
    {question:'Wapiti किस काम आता है?',options:['सिस्टम एडमिन','गेम डेवलपमेंट','मोबाइल डेवलपमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग'],correct:3,explanation:'Wapiti वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Wapiti के लिए कौन सा कमांड इस्तेमाल होता है?',options:['wapiti --help','wapiti --audit','wapiti --check','wapiti --web'],correct:0,explanation:'wapiti --help इस्तेमाल होता है।'},
    {question:'Wapiti किस प्लेटफॉर्म पर चलता है?',options:['सेंट OS','पैरट OS','आर्क लिनक्स','काली लिनक्स'],correct:3,explanation:'Wapiti काली लिनक्स पर चलता है।'}
  ],
  'wfuzz': [
    {question:'WFuzz किस श्रेणी का टूल है?',options:['Audit','Mobile','Forensics','Web'],correct:3,explanation:'WFuzz Web श्रेणी का टूल है।'},
    {question:'WFuzz किस काम आता है?',options:['मोबाइल डेवलपमेंट','डेटाबेस मैनेजमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','सिस्टम एडमिन'],correct:2,explanation:'WFuzz वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'WFuzz किस प्लेटफॉर्म पर चलता है?',options:['पैरट OS','काली लिनक्स','आर्क लिनक्स','फेडोरा'],correct:1,explanation:'WFuzz काली लिनक्स पर चलता है।'},
    {question:'WFuzz के लिए कौन सा कमांड इस्तेमाल होता है?',options:['wfuzz --test','wfuzz --url','wfuzz --help','wfuzz --web'],correct:2,explanation:'wfuzz --help इस्तेमाल होता है।'}
  ],
  'dirbuster': [
    {question:'DirBuster किस काम आता है?',options:['ग्राफिक डिजाइनिंग','सिस्टम एडमिन','गेम डेवलपमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग'],correct:3,explanation:'DirBuster वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'DirBuster किस प्लेटफॉर्म पर चलता है?',options:['काली लिनक्स','फेडोरा','ओपन सूसी','डेबियन'],correct:0,explanation:'DirBuster काली लिनक्स पर चलता है।'},
    {question:'DirBuster के लिए कौन सा कमांड इस्तेमाल होता है?',options:['dirbuster --help','dirbuster --url','dirbuster --check','dirbuster --audit'],correct:0,explanation:'dirbuster --help इस्तेमाल होता है।'},
    {question:'DirBuster किस श्रेणी का टूल है?',options:['Tunneling','Web','Recon','Exploitation'],correct:1,explanation:'DirBuster Web श्रेणी का टूल है।'}
  ],
  'cadaver': [
    {question:'Cadaver किस प्लेटफॉर्म पर चलता है?',options:['डेबियन','ओपन सूसी','उबंटू','काली लिनक्स'],correct:3,explanation:'Cadaver काली लिनक्स पर चलता है।'},
    {question:'Cadaver किस काम आता है?',options:['गेम डेवलपमेंट','मोबाइल डेवलपमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','डेटाबेस मैनेजमेंट'],correct:2,explanation:'Cadaver वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Cadaver के लिए कौन सा कमांड इस्तेमाल होता है?',options:['cadaver --help','cadaver --test','cadaver --url','cadaver --check'],correct:0,explanation:'cadaver --help इस्तेमाल होता है।'},
    {question:'Cadaver किस श्रेणी का टूल है?',options:['Web','Network','Tunneling','Exploitation'],correct:0,explanation:'Cadaver Web श्रेणी का टूल है।'}
  ],
  'davtest': [
    {question:'DavTest किस काम आता है?',options:['डेटाबेस मैनेजमेंट','ग्राफिक डिजाइनिंग','सिस्टम एडमिन','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग'],correct:3,explanation:'DavTest वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'DavTest किस श्रेणी का टूल है?',options:['Tunneling','Mobile','Web','Audit'],correct:2,explanation:'DavTest Web श्रेणी का टूल है।'},
    {question:'DavTest किस प्लेटफॉर्म पर चलता है?',options:['ओपन सूसी','काली लिनक्स','आर्क लिनक्स','पैरट OS'],correct:1,explanation:'DavTest काली लिनक्स पर चलता है।'},
    {question:'DavTest के लिए कौन सा कमांड इस्तेमाल होता है?',options:['davtest --web','davtest --help','davtest --audit','davtest --check'],correct:1,explanation:'davtest --help इस्तेमाल होता है।'}
  ],
  'fimap': [
    {question:'Fimap के लिए कौन सा कमांड इस्तेमाल होता है?',options:['fimap --web','fimap --help','fimap --check','fimap --scan'],correct:1,explanation:'fimap --help इस्तेमाल होता है।'},
    {question:'Fimap किस प्लेटफॉर्म पर चलता है?',options:['फेडोरा','पैरट OS','काली लिनक्स','सेंट OS'],correct:2,explanation:'Fimap काली लिनक्स पर चलता है।'},
    {question:'Fimap किस काम आता है?',options:['डेटाबेस मैनेजमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','मोबाइल डेवलपमेंट','ग्राफिक डिजाइनिंग'],correct:1,explanation:'Fimap वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Fimap किस श्रेणी का टूल है?',options:['Web','Tunneling','Passwords','Exploitation'],correct:0,explanation:'Fimap Web श्रेणी का टूल है।'}
  ],
  'joomscan': [
    {question:'JoomScan किस श्रेणी का टूल है?',options:['Web','Mobile','Passwords','Tunneling'],correct:0,explanation:'JoomScan Web श्रेणी का टूल है।'},
    {question:'JoomScan किस प्लेटफॉर्म पर चलता है?',options:['फेडोरा','उबंटू','काली लिनक्स','पैरट OS'],correct:2,explanation:'JoomScan काली लिनक्स पर चलता है।'},
    {question:'JoomScan किस काम आता है?',options:['सिस्टम एडमिन','डेटाबेस मैनेजमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','ग्राफिक डिजाइनिंग'],correct:2,explanation:'JoomScan वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'JoomScan के लिए कौन सा कमांड इस्तेमाल होता है?',options:['joomscan --scan','joomscan --help','joomscan --url','joomscan --check'],correct:1,explanation:'joomscan --help इस्तेमाल होता है।'}
  ],
  'cmsmap': [
    {question:'CMSMap किस काम आता है?',options:['सिस्टम एडमिन','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','मोबाइल डेवलपमेंट','गेम डेवलपमेंट'],correct:1,explanation:'CMSMap वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'CMSMap के लिए कौन सा कमांड इस्तेमाल होता है?',options:['cmsmap --audit','cmsmap --check','cmsmap --help','cmsmap --web'],correct:2,explanation:'cmsmap --help इस्तेमाल होता है।'},
    {question:'CMSMap किस प्लेटफॉर्म पर चलता है?',options:['काली लिनक्स','फेडोरा','आर्क लिनक्स','डेबियन'],correct:0,explanation:'CMSMap काली लिनक्स पर चलता है।'},
    {question:'CMSMap किस श्रेणी का टूल है?',options:['WiFi','Forensics','Web','Tunneling'],correct:2,explanation:'CMSMap Web श्रेणी का टूल है।'}
  ],
  'http-enum': [
    {question:'HTTP-Enum किस काम आता है?',options:['वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','गेम डेवलपमेंट','मोबाइल डेवलपमेंट','सिस्टम एडमिन'],correct:0,explanation:'HTTP-Enum वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'HTTP-Enum किस प्लेटफॉर्म पर चलता है?',options:['पैरट OS','आर्क लिनक्स','काली लिनक्स','ओपन सूसी'],correct:2,explanation:'HTTP-Enum काली लिनक्स पर चलता है।'},
    {question:'HTTP-Enum के लिए कौन सा कमांड इस्तेमाल होता है?',options:['http-enum --scan','http-enum --test','http-enum --web','http-enum --help'],correct:3,explanation:'http-enum --help इस्तेमाल होता है।'},
    {question:'HTTP-Enum किस श्रेणी का टूल है?',options:['Tunneling','Recon','Web','Forensics'],correct:2,explanation:'HTTP-Enum Web श्रेणी का टूल है।'}
  ],
  'jsql': [
    {question:'jSQL Injection किस प्लेटफॉर्म पर चलता है?',options:['आर्क लिनक्स','फेडोरा','उबंटू','काली लिनक्स'],correct:3,explanation:'jSQL Injection काली लिनक्स पर चलता है।'},
    {question:'jSQL Injection किस काम आता है?',options:['गेम डेवलपमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','डेटाबेस मैनेजमेंट','सिस्टम एडमिन'],correct:1,explanation:'jSQL Injection वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'jSQL Injection किस श्रेणी का टूल है?',options:['Mobile','Web','Network','Tunneling'],correct:1,explanation:'jSQL Injection Web श्रेणी का टूल है।'},
    {question:'jSQL Injection के लिए कौन सा कमांड इस्तेमाल होता है?',options:['jsql --url','jsql --check','jsql --test','jsql --help'],correct:3,explanation:'jsql --help इस्तेमाल होता है।'}
  ],
  'sqlsus': [
    {question:'SQLSus किस प्लेटफॉर्म पर चलता है?',options:['काली लिनक्स','डेबियन','उबंटू','फेडोरा'],correct:0,explanation:'SQLSus काली लिनक्स पर चलता है।'},
    {question:'SQLSus किस श्रेणी का टूल है?',options:['Tunneling','Web','WiFi','Exploitation'],correct:1,explanation:'SQLSus Web श्रेणी का टूल है।'},
    {question:'SQLSus के लिए कौन सा कमांड इस्तेमाल होता है?',options:['sqlsus --url','sqlsus --check','sqlsus --scan','sqlsus --help'],correct:3,explanation:'sqlsus --help इस्तेमाल होता है।'},
    {question:'SQLSus किस काम आता है?',options:['सिस्टम एडमिन','मोबाइल डेवलपमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','ग्राफिक डिजाइनिंग'],correct:2,explanation:'SQLSus वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'ace-voip': [
    {question:'ACE-VoIP किस ओएस में मिलता है?',options:['आर्क लिनक्स','उबंटू','काली लिनक्स','फेडोरा'],correct:2,explanation:'ACE-VoIP काली लिनक्स में मिलता है।'},
    {question:'ACE-VoIP का बेसिक कमांड क्या है?',options:['ace-voip --brute','ace-voip --hash','ace-voip --help','ace-voip --attack'],correct:2,explanation:'ace-voip --help बेसिक कमांड है।'},
    {question:'ACE-VoIP का उपयोग किसके लिए होता है?',options:['पासवर्ड क्रैकिंग और हैश एनालिसिस','क्लाउड कंप्यूटिंग','एप डेवलपमेंट','नेटवर्क मॉनिटरिंग'],correct:0,explanation:'ACE-VoIP पासवर्ड क्रैकिंग के लिए उपयोग होता है।'},
    {question:'ACE-VoIP किस श्रेणी में आता है?',options:['Audit','Mobile','Passwords','WiFi'],correct:2,explanation:'ACE-VoIP Passwords श्रेणी का टूल है।'}
  ],
  'cmospwd': [
    {question:'CmosPwd का बेसिक कमांड क्या है?',options:['cmospwd --help','cmospwd --crack','cmospwd --brute','cmospwd --recover'],correct:0,explanation:'cmospwd --help बेसिक कमांड है।'},
    {question:'CmosPwd किस श्रेणी में आता है?',options:['Recon','Network','Passwords','Exploitation'],correct:2,explanation:'CmosPwd Passwords श्रेणी का टूल है।'},
    {question:'CmosPwd का उपयोग किसके लिए होता है?',options:['डेटाबेस मैनेजमेंट','पासवर्ड क्रैकिंग और हैश एनालिसिस','नेटवर्क मॉनिटरिंग','एप डेवलपमेंट'],correct:1,explanation:'CmosPwd पासवर्ड क्रैकिंग के लिए उपयोग होता है।'},
    {question:'CmosPwd किस ओएस में मिलता है?',options:['आर्क लिनक्स','उबंटू','डेबियन','काली लिनक्स'],correct:3,explanation:'CmosPwd काली लिनक्स में मिलता है।'}
  ],
  'creddump': [
    {question:'CredDump का उपयोग किसके लिए होता है?',options:['डेटाबेस मैनेजमेंट','पासवर्ड क्रैकिंग और हैश एनालिसिस','नेटवर्क मॉनिटरिंग','वीडियो एडिटिंग'],correct:1,explanation:'CredDump पासवर्ड क्रैकिंग के लिए उपयोग होता है।'},
    {question:'CredDump किस श्रेणी में आता है?',options:['Exploitation','Passwords','Tunneling','Recon'],correct:1,explanation:'CredDump Passwords श्रेणी का टूल है।'},
    {question:'CredDump का बेसिक कमांड क्या है?',options:['creddump --recover','creddump --hash','creddump --crack','creddump --help'],correct:3,explanation:'creddump --help बेसिक कमांड है।'},
    {question:'CredDump किस ओएस में मिलता है?',options:['ओपन सूसी','पैरट OS','काली लिनक्स','डेबियन'],correct:2,explanation:'CredDump काली लिनक्स में मिलता है।'}
  ],
  'findmyhash': [
    {question:'FindMyHash का बेसिक कमांड क्या है?',options:['findmyhash --attack','findmyhash --dict','findmyhash --crack','findmyhash --help'],correct:3,explanation:'findmyhash --help बेसिक कमांड है।'},
    {question:'FindMyHash किस ओएस में मिलता है?',options:['काली लिनक्स','डेबियन','ओपन सूसी','फेडोरा'],correct:0,explanation:'FindMyHash काली लिनक्स में मिलता है।'},
    {question:'FindMyHash किस श्रेणी में आता है?',options:['Audit','Passwords','Exploitation','Recon'],correct:1,explanation:'FindMyHash Passwords श्रेणी का टूल है।'},
    {question:'FindMyHash का उपयोग किसके लिए होता है?',options:['डेटाबेस मैनेजमेंट','एप डेवलपमेंट','पासवर्ड क्रैकिंग और हैश एनालिसिस','नेटवर्क मॉनिटरिंग'],correct:2,explanation:'FindMyHash पासवर्ड क्रैकिंग के लिए उपयोग होता है।'}
  ],
  'maskprocessor': [
    {question:'Maskprocessor किस ओएस में मिलता है?',options:['फेडोरा','काली लिनक्स','ओपन सूसी','पैरट OS'],correct:1,explanation:'Maskprocessor काली लिनक्स में मिलता है।'},
    {question:'Maskprocessor का बेसिक कमांड क्या है?',options:['maskprocessor --recover','maskprocessor --help','maskprocessor --hash','maskprocessor --dict'],correct:1,explanation:'maskprocessor --help बेसिक कमांड है।'},
    {question:'Maskprocessor किस श्रेणी में आता है?',options:['Passwords','Audit','Mobile','Forensics'],correct:0,explanation:'Maskprocessor Passwords श्रेणी का टूल है।'},
    {question:'Maskprocessor का उपयोग किसके लिए होता है?',options:['एप डेवलपमेंट','नेटवर्क मॉनिटरिंग','वीडियो एडिटिंग','पासवर्ड क्रैकिंग और हैश एनालिसिस'],correct:3,explanation:'Maskprocessor पासवर्ड क्रैकिंग के लिए उपयोग होता है।'}
  ],
  'onesixtyone': [
    {question:'Onesixtyone किस श्रेणी में आता है?',options:['Web','Recon','Passwords','Mobile'],correct:2,explanation:'Onesixtyone Passwords श्रेणी का टूल है।'},
    {question:'Onesixtyone किस ओएस में मिलता है?',options:['सेंट OS','उबंटू','पैरट OS','काली लिनक्स'],correct:3,explanation:'Onesixtyone काली लिनक्स में मिलता है।'},
    {question:'Onesixtyone का बेसिक कमांड क्या है?',options:['onesixtyone --hash','onesixtyone --brute','onesixtyone --help','onesixtyone --attack'],correct:2,explanation:'onesixtyone --help बेसिक कमांड है।'},
    {question:'Onesixtyone का उपयोग किसके लिए होता है?',options:['वीडियो एडिटिंग','पासवर्ड क्रैकिंग और हैश एनालिसिस','डेटाबेस मैनेजमेंट','नेटवर्क मॉनिटरिंग'],correct:1,explanation:'Onesixtyone पासवर्ड क्रैकिंग के लिए उपयोग होता है।'}
  ],
  'pack': [
    {question:'PACK का बेसिक कमांड क्या है?',options:['pack --help','pack --hash','pack --crack','pack --recover'],correct:0,explanation:'pack --help बेसिक कमांड है।'},
    {question:'PACK किस ओएस में मिलता है?',options:['आर्क लिनक्स','काली लिनक्स','उबंटू','फेडोरा'],correct:1,explanation:'PACK काली लिनक्स में मिलता है।'},
    {question:'PACK का उपयोग किसके लिए होता है?',options:['क्लाउड कंप्यूटिंग','नेटवर्क मॉनिटरिंग','एप डेवलपमेंट','पासवर्ड क्रैकिंग और हैश एनालिसिस'],correct:3,explanation:'PACK पासवर्ड क्रैकिंग के लिए उपयोग होता है।'},
    {question:'PACK किस श्रेणी में आता है?',options:['Recon','Tunneling','Web','Passwords'],correct:3,explanation:'PACK Passwords श्रेणी का टूल है।'}
  ],
  'pdfcrack': [
    {question:'PDFCrack किस ओएस में मिलता है?',options:['आर्क लिनक्स','काली लिनक्स','सेंट OS','ओपन सूसी'],correct:1,explanation:'PDFCrack काली लिनक्स में मिलता है।'},
    {question:'PDFCrack का उपयोग किसके लिए होता है?',options:['एप डेवलपमेंट','नेटवर्क मॉनिटरिंग','डेटाबेस मैनेजमेंट','पासवर्ड क्रैकिंग और हैश एनालिसिस'],correct:3,explanation:'PDFCrack पासवर्ड क्रैकिंग के लिए उपयोग होता है।'},
    {question:'PDFCrack किस श्रेणी में आता है?',options:['Passwords','Audit','Web','Exploitation'],correct:0,explanation:'PDFCrack Passwords श्रेणी का टूल है।'},
    {question:'PDFCrack का बेसिक कमांड क्या है?',options:['pdfcrack --attack','pdfcrack --brute','pdfcrack --help','pdfcrack --recover'],correct:2,explanation:'pdfcrack --help बेसिक कमांड है।'}
  ],
  'pyrit': [
    {question:'Pyrit किस ओएस में मिलता है?',options:['फेडोरा','पैरट OS','काली लिनक्स','डेबियन'],correct:2,explanation:'Pyrit काली लिनक्स में मिलता है।'},
    {question:'Pyrit का उपयोग किसके लिए होता है?',options:['क्लाउड कंप्यूटिंग','डेटाबेस मैनेजमेंट','पासवर्ड क्रैकिंग और हैश एनालिसिस','नेटवर्क मॉनिटरिंग'],correct:2,explanation:'Pyrit पासवर्ड क्रैकिंग के लिए उपयोग होता है।'},
    {question:'Pyrit का बेसिक कमांड क्या है?',options:['pyrit --dict','pyrit --help','pyrit --hash','pyrit --brute'],correct:1,explanation:'pyrit --help बेसिक कमांड है।'},
    {question:'Pyrit किस श्रेणी में आता है?',options:['Web','Passwords','Network','Audit'],correct:1,explanation:'Pyrit Passwords श्रेणी का टूल है।'}
  ],
  'rainbowcrack': [
    {question:'RainbowCrack का बेसिक कमांड क्या है?',options:['rainbowcrack --help','rainbowcrack --crack','rainbowcrack --attack','rainbowcrack --brute'],correct:0,explanation:'rainbowcrack --help बेसिक कमांड है।'},
    {question:'RainbowCrack किस ओएस में मिलता है?',options:['आर्क लिनक्स','काली लिनक्स','डेबियन','फेडोरा'],correct:1,explanation:'RainbowCrack काली लिनक्स में मिलता है।'},
    {question:'RainbowCrack का उपयोग किसके लिए होता है?',options:['वीडियो एडिटिंग','नेटवर्क मॉनिटरिंग','एप डेवलपमेंट','पासवर्ड क्रैकिंग और हैश एनालिसिस'],correct:3,explanation:'RainbowCrack पासवर्ड क्रैकिंग के लिए उपयोग होता है।'},
    {question:'RainbowCrack किस श्रेणी में आता है?',options:['Tunneling','Exploitation','Forensics','Passwords'],correct:3,explanation:'RainbowCrack Passwords श्रेणी का टूल है।'}
  ],
  'samdump2': [
    {question:'SamDump2 का उपयोग किसके लिए होता है?',options:['नेटवर्क मॉनिटरिंग','पासवर्ड क्रैकिंग और हैश एनालिसिस','एप डेवलपमेंट','क्लाउड कंप्यूटिंग'],correct:1,explanation:'SamDump2 पासवर्ड क्रैकिंग के लिए उपयोग होता है।'},
    {question:'SamDump2 का बेसिक कमांड क्या है?',options:['samdump2 --hash','samdump2 --recover','samdump2 --brute','samdump2 --help'],correct:3,explanation:'samdump2 --help बेसिक कमांड है।'},
    {question:'SamDump2 किस श्रेणी में आता है?',options:['Passwords','WiFi','Network','Web'],correct:0,explanation:'SamDump2 Passwords श्रेणी का टूल है।'},
    {question:'SamDump2 किस ओएस में मिलता है?',options:['डेबियन','काली लिनक्स','ओपन सूसी','फेडोरा'],correct:1,explanation:'SamDump2 काली लिनक्स में मिलता है।'}
  ],
  'sipcrack': [
    {question:'SipCrack का बेसिक कमांड क्या है?',options:['sipcrack --help','sipcrack --brute','sipcrack --hash','sipcrack --attack'],correct:0,explanation:'sipcrack --help बेसिक कमांड है।'},
    {question:'SipCrack का उपयोग किसके लिए होता है?',options:['क्लाउड कंप्यूटिंग','पासवर्ड क्रैकिंग और हैश एनालिसिस','नेटवर्क मॉनिटरिंग','एप डेवलपमेंट'],correct:1,explanation:'SipCrack पासवर्ड क्रैकिंग के लिए उपयोग होता है।'},
    {question:'SipCrack किस श्रेणी में आता है?',options:['Exploitation','Recon','Passwords','Tunneling'],correct:2,explanation:'SipCrack Passwords श्रेणी का टूल है।'},
    {question:'SipCrack किस ओएस में मिलता है?',options:['काली लिनक्स','फेडोरा','ओपन सूसी','डेबियन'],correct:0,explanation:'SipCrack काली लिनक्स में मिलता है।'}
  ],
  'sucrack': [
    {question:'Sucrack का बेसिक कमांड क्या है?',options:['sucrack --recover','sucrack --help','sucrack --hash','sucrack --dict'],correct:1,explanation:'sucrack --help बेसिक कमांड है।'},
    {question:'Sucrack किस ओएस में मिलता है?',options:['सेंट OS','काली लिनक्स','ओपन सूसी','फेडोरा'],correct:1,explanation:'Sucrack काली लिनक्स में मिलता है।'},
    {question:'Sucrack किस श्रेणी में आता है?',options:['Network','Mobile','Audit','Passwords'],correct:3,explanation:'Sucrack Passwords श्रेणी का टूल है।'},
    {question:'Sucrack का उपयोग किसके लिए होता है?',options:['पासवर्ड क्रैकिंग और हैश एनालिसिस','डेटाबेस मैनेजमेंट','नेटवर्क मॉनिटरिंग','क्लाउड कंप्यूटिंग'],correct:0,explanation:'Sucrack पासवर्ड क्रैकिंग के लिए उपयोग होता है।'}
  ],
  'twofi': [
    {question:'Twofi का उपयोग किसके लिए होता है?',options:['पासवर्ड क्रैकिंग और हैश एनालिसिस','डेटाबेस मैनेजमेंट','वीडियो एडिटिंग','क्लाउड कंप्यूटिंग'],correct:0,explanation:'Twofi पासवर्ड क्रैकिंग के लिए उपयोग होता है।'},
    {question:'Twofi का बेसिक कमांड क्या है?',options:['twofi --help','twofi --attack','twofi --crack','twofi --hash'],correct:0,explanation:'twofi --help बेसिक कमांड है।'},
    {question:'Twofi किस श्रेणी में आता है?',options:['Web','Recon','Passwords','Audit'],correct:2,explanation:'Twofi Passwords श्रेणी का टूल है।'},
    {question:'Twofi किस ओएस में मिलता है?',options:['सेंट OS','ओपन सूसी','काली लिनक्स','डेबियन'],correct:2,explanation:'Twofi काली लिनक्स में मिलता है।'}
  ],
  'wordlists': [
    {question:'Wordlists का बेसिक कमांड क्या है?',options:['wordlists --help','wordlists --attack','wordlists --recover','wordlists --dict'],correct:0,explanation:'wordlists --help बेसिक कमांड है।'},
    {question:'Wordlists किस श्रेणी में आता है?',options:['Passwords','Network','Audit','Recon'],correct:0,explanation:'Wordlists Passwords श्रेणी का टूल है।'},
    {question:'Wordlists किस ओएस में मिलता है?',options:['काली लिनक्स','सेंट OS','फेडोरा','डेबियन'],correct:0,explanation:'Wordlists काली लिनक्स में मिलता है।'},
    {question:'Wordlists का उपयोग किसके लिए होता है?',options:['क्लाउड कंप्यूटिंग','पासवर्ड क्रैकिंग और हैश एनालिसिस','डेटाबेस मैनेजमेंट','एप डेवलपमेंट'],correct:1,explanation:'Wordlists पासवर्ड क्रैकिंग के लिए उपयोग होता है।'}
  ],
  'fern-wifi': [
    {question:'Fern WiFi Cracker के साथ कौन सा कमांड आम है?',options:['fern-wifi --list','fern-wifi --help','fern-wifi --version','fern-wifi -h'],correct:1,explanation:'fern-wifi --help से विकल्पों की सूची मिलती है।'},
    {question:'Fern WiFi Cracker का मुख्य उपयोग क्या है?',options:['आर्टिफिशियल इंटेलिजेंस','वेब डेवलपमेंट','क्लाउड कंप्यूटिंग','वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'Fern WiFi Cracker वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Fern WiFi Cracker किस श्रेणी का टूल है?',options:['Web','WiFi','Tunneling','Exploitation'],correct:1,explanation:'Fern WiFi Cracker WiFi श्रेणी का टूल है।'},
    {question:'Fern WiFi Cracker मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['सेंट OS','काली लिनक्स','आर्क लिनक्स','पैरट OS'],correct:1,explanation:'Fern WiFi Cracker काली लिनक्स में उपलब्ध है।'}
  ],
  'bully': [
    {question:'Bully का मुख्य उपयोग क्या है?',options:['वीडियो एडिटिंग','ग्राफिक डिजाइनिंग','वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग','आर्टिफिशियल इंटेलिजेंस'],correct:2,explanation:'Bully वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Bully मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['फेडोरा','उबंटू','काली लिनक्स','पैरट OS'],correct:2,explanation:'Bully काली लिनक्स में उपलब्ध है।'},
    {question:'Bully किस श्रेणी का टूल है?',options:['Audit','WiFi','Forensics','Web'],correct:1,explanation:'Bully WiFi श्रेणी का टूल है।'},
    {question:'Bully के साथ कौन सा कमांड आम है?',options:['bully --info','bully --version','bully --help','bully --scan'],correct:2,explanation:'bully --help से विकल्पों की सूची मिलती है।'}
  ],
  'cowpatty': [
    {question:'Cowpatty के साथ कौन सा कमांड आम है?',options:['cowpatty --version','cowpatty --info','cowpatty -h','cowpatty --help'],correct:3,explanation:'cowpatty --help से विकल्पों की सूची मिलती है।'},
    {question:'Cowpatty मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['काली लिनक्स','डेबियन','आर्क लिनक्स','पैरट OS'],correct:0,explanation:'Cowpatty काली लिनक्स में उपलब्ध है।'},
    {question:'Cowpatty किस श्रेणी का टूल है?',options:['Mobile','WiFi','Network','Passwords'],correct:1,explanation:'Cowpatty WiFi श्रेणी का टूल है।'},
    {question:'Cowpatty का मुख्य उपयोग क्या है?',options:['आर्टिफिशियल इंटेलिजेंस','क्लाउड कंप्यूटिंग','वीडियो एडिटिंग','वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'Cowpatty वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'mdk3': [
    {question:'MDK3 किस श्रेणी का टूल है?',options:['Forensics','WiFi','Web','Mobile'],correct:1,explanation:'MDK3 WiFi श्रेणी का टूल है।'},
    {question:'MDK3 का मुख्य उपयोग क्या है?',options:['वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग','आर्टिफिशियल इंटेलिजेंस','क्लाउड कंप्यूटिंग','डेटाबेस मैनेजमेंट'],correct:0,explanation:'MDK3 वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'MDK3 के साथ कौन सा कमांड आम है?',options:['mdk3 -h','mdk3 --help','mdk3 --version','mdk3 --info'],correct:1,explanation:'mdk3 --help से विकल्पों की सूची मिलती है।'},
    {question:'MDK3 मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['काली लिनक्स','ओपन सूसी','सेंट OS','पैरट OS'],correct:0,explanation:'MDK3 काली लिनक्स में उपलब्ध है।'}
  ],
  'mdk4': [
    {question:'MDK4 मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['पैरट OS','ओपन सूसी','उबंटू','काली लिनक्स'],correct:3,explanation:'MDK4 काली लिनक्स में उपलब्ध है।'},
    {question:'MDK4 किस श्रेणी का टूल है?',options:['Web','Audit','Network','WiFi'],correct:3,explanation:'MDK4 WiFi श्रेणी का टूल है।'},
    {question:'MDK4 का मुख्य उपयोग क्या है?',options:['वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग','ग्राफिक डिजाइनिंग','वेब डेवलपमेंट','क्लाउड कंप्यूटिंग'],correct:0,explanation:'MDK4 वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'MDK4 के साथ कौन सा कमांड आम है?',options:['mdk4 -h','mdk4 --list','mdk4 --info','mdk4 --help'],correct:3,explanation:'mdk4 --help से विकल्पों की सूची मिलती है।'}
  ],
  'wash': [
    {question:'Wash मुख्य रूप से किस प्लेटफॉर्म पर उपलब्ध है?',options:['आर्क लिनक्स','काली लिनक्स','डेबियन','उबंटू'],correct:1,explanation:'Wash काली लिनक्स में उपलब्ध है।'},
    {question:'Wash का मुख्य उपयोग क्या है?',options:['डेटाबेस मैनेजमेंट','ग्राफिक डिजाइनिंग','वायरलेस नेटवर्क पेनिट्रेशन टेस्टिंग','आर्टिफिशियल इंटेलिजेंस'],correct:2,explanation:'Wash वायरलेस नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Wash के साथ कौन सा कमांड आम है?',options:['wash --info','wash -h','wash --scan','wash --help'],correct:3,explanation:'wash --help से विकल्पों की सूची मिलती है।'},
    {question:'Wash किस श्रेणी का टूल है?',options:['Forensics','Exploitation','Network','WiFi'],correct:3,explanation:'Wash WiFi श्रेणी का टूल है।'}
  ],
  'ettercap': [
    {question:'Ettercap का मुख्य उपयोग क्या है?',options:['नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस','ग्राफिक डिजाइनिंग','गेम डेवलपमेंट','डेटाबेस मैनेजमेंट'],correct:0,explanation:'Ettercap नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Ettercap कहाँ उपलब्ध है?',options:['काली लिनक्स','डेबियन','फेडोरा','सेंट OS'],correct:0,explanation:'Ettercap काली लिनक्स में उपलब्ध है।'},
    {question:'Ettercap किस श्रेणी में आता है?',options:['Tunneling','Network','Forensics','Mobile'],correct:1,explanation:'Ettercap Network श्रेणी का टूल है।'},
    {question:'Ettercap टूल कैसे चलाया जाता है?',options:['ettercap network','ettercap net','ettercap scan','ettercap --help'],correct:3,explanation:'ettercap --help कमांड से चलाया जाता है।'}
  ],
  'netsniff-ng': [
    {question:'Netsniff-ng किस श्रेणी में आता है?',options:['Network','Mobile','WiFi','Exploitation'],correct:0,explanation:'Netsniff-ng Network श्रेणी का टूल है।'},
    {question:'Netsniff-ng टूल कैसे चलाया जाता है?',options:['netsniff-ng net','netsniff-ng trace','netsniff-ng --help','netsniff-ng network'],correct:2,explanation:'netsniff-ng --help कमांड से चलाया जाता है।'},
    {question:'Netsniff-ng का मुख्य उपयोग क्या है?',options:['ग्राफिक डिजाइनिंग','डेटाबेस मैनेजमेंट','गेम डेवलपमेंट','नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस'],correct:3,explanation:'Netsniff-ng नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Netsniff-ng कहाँ उपलब्ध है?',options:['आर्क लिनक्स','काली लिनक्स','उबंटू','सेंट OS'],correct:1,explanation:'Netsniff-ng काली लिनक्स में उपलब्ध है।'}
  ],
  'tcpflow': [
    {question:'TCPFlow कहाँ उपलब्ध है?',options:['काली लिनक्स','डेबियन','उबंटू','फेडोरा'],correct:0,explanation:'TCPFlow काली लिनक्स में उपलब्ध है।'},
    {question:'TCPFlow किस श्रेणी में आता है?',options:['Mobile','Network','Recon','Tunneling'],correct:1,explanation:'TCPFlow Network श्रेणी का टूल है।'},
    {question:'TCPFlow का मुख्य उपयोग क्या है?',options:['ग्राफिक डिजाइनिंग','वेब डेवलपमेंट','गेम डेवलपमेंट','नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस'],correct:3,explanation:'TCPFlow नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'TCPFlow टूल कैसे चलाया जाता है?',options:['tcpflow network','tcpflow net','tcpflow --help','tcpflow scan'],correct:2,explanation:'tcpflow --help कमांड से चलाया जाता है।'}
  ],
  'hexinject': [
    {question:'HexInject का मुख्य उपयोग क्या है?',options:['नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस','मोबाइल एप डेवलपमेंट','ग्राफिक डिजाइनिंग','वेब डेवलपमेंट'],correct:0,explanation:'HexInject नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'HexInject किस श्रेणी में आता है?',options:['Web','Forensics','Tunneling','Network'],correct:3,explanation:'HexInject Network श्रेणी का टूल है।'},
    {question:'HexInject टूल कैसे चलाया जाता है?',options:['hexinject trace','hexinject net','hexinject --help','hexinject network'],correct:2,explanation:'hexinject --help कमांड से चलाया जाता है।'},
    {question:'HexInject कहाँ उपलब्ध है?',options:['फेडोरा','ओपन सूसी','उबंटू','काली लिनक्स'],correct:3,explanation:'HexInject काली लिनक्स में उपलब्ध है।'}
  ],
  'rebind': [
    {question:'Rebind का मुख्य उपयोग क्या है?',options:['गेम डेवलपमेंट','ग्राफिक डिजाइनिंग','वेब डेवलपमेंट','नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस'],correct:3,explanation:'Rebind नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Rebind टूल कैसे चलाया जाता है?',options:['rebind net','rebind network','rebind trace','rebind --help'],correct:3,explanation:'rebind --help कमांड से चलाया जाता है।'},
    {question:'Rebind कहाँ उपलब्ध है?',options:['सेंट OS','काली लिनक्स','ओपन सूसी','डेबियन'],correct:1,explanation:'Rebind काली लिनक्स में उपलब्ध है।'},
    {question:'Rebind किस श्रेणी में आता है?',options:['Audit','Forensics','Web','Network'],correct:3,explanation:'Rebind Network श्रेणी का टूल है।'}
  ],
  'ferret': [
    {question:'Ferret का मुख्य उपयोग क्या है?',options:['गेम डेवलपमेंट','नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस','मोबाइल एप डेवलपमेंट','वेब डेवलपमेंट'],correct:1,explanation:'Ferret नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Ferret किस श्रेणी में आता है?',options:['WiFi','Tunneling','Network','Web'],correct:2,explanation:'Ferret Network श्रेणी का टूल है।'},
    {question:'Ferret कहाँ उपलब्ध है?',options:['उबंटू','फेडोरा','डेबियन','काली लिनक्स'],correct:3,explanation:'Ferret काली लिनक्स में उपलब्ध है।'},
    {question:'Ferret टूल कैसे चलाया जाता है?',options:['ferret --help','ferret trace','ferret net','ferret network'],correct:0,explanation:'ferret --help कमांड से चलाया जाता है।'}
  ],
  'hamster': [
    {question:'Hamster टूल कैसे चलाया जाता है?',options:['hamster scan','hamster --help','hamster net','hamster trace'],correct:1,explanation:'hamster --help कमांड से चलाया जाता है।'},
    {question:'Hamster का मुख्य उपयोग क्या है?',options:['वेब डेवलपमेंट','नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस','डेटाबेस मैनेजमेंट','गेम डेवलपमेंट'],correct:1,explanation:'Hamster नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Hamster कहाँ उपलब्ध है?',options:['ओपन सूसी','उबंटू','डेबियन','काली लिनक्स'],correct:3,explanation:'Hamster काली लिनक्स में उपलब्ध है।'},
    {question:'Hamster किस श्रेणी में आता है?',options:['Forensics','Network','Audit','Mobile'],correct:1,explanation:'Hamster Network श्रेणी का टूल है।'}
  ],
  'sniffjoke': [
    {question:'SniffJoke कहाँ उपलब्ध है?',options:['डेबियन','उबंटू','ओपन सूसी','काली लिनक्स'],correct:3,explanation:'SniffJoke काली लिनक्स में उपलब्ध है।'},
    {question:'SniffJoke टूल कैसे चलाया जाता है?',options:['sniffjoke trace','sniffjoke network','sniffjoke --help','sniffjoke net'],correct:2,explanation:'sniffjoke --help कमांड से चलाया जाता है।'},
    {question:'SniffJoke किस श्रेणी में आता है?',options:['Mobile','Forensics','Network','Tunneling'],correct:2,explanation:'SniffJoke Network श्रेणी का टूल है।'},
    {question:'SniffJoke का मुख्य उपयोग क्या है?',options:['मोबाइल एप डेवलपमेंट','गेम डेवलपमेंट','नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस','डेटाबेस मैनेजमेंट'],correct:2,explanation:'SniffJoke नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'autopsy': [
    {question:'Autopsy को कैसे रन किया जाता है?',options:['autopsy --examine','autopsy --investigate','autopsy --help','autopsy --extract'],correct:2,explanation:'autopsy --help से रन किया जाता है।'},
    {question:'Autopsy किस काम में आता है?',options:['डिजिटल फोरेंसिक्स और डेटा एनालिसिस','डेटाबेस डिजाइन','वेब डेवलपमेंट','नेटवर्क एडमिन'],correct:0,explanation:'Autopsy फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'Autopsy किस श्रेणी का टूल है?',options:['Tunneling','WiFi','Web','Forensics'],correct:3,explanation:'Autopsy Forensics श्रेणी का टूल है।'},
    {question:'Autopsy किस प्लेटफॉर्म पर उपलब्ध है?',options:['पैरट OS','आर्क लिनक्स','फेडोरा','काली लिनक्स'],correct:3,explanation:'Autopsy काली लिनक्स पर उपलब्ध है।'}
  ],
  'sleuthkit': [
    {question:'Sleuth Kit किस काम में आता है?',options:['डिजिटल फोरेंसिक्स और डेटा एनालिसिस','नेटवर्क एडमिन','सोशल मीडिया मार्केटिंग','डेटाबेस डिजाइन'],correct:0,explanation:'Sleuth Kit फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'Sleuth Kit किस प्लेटफॉर्म पर उपलब्ध है?',options:['ओपन सूसी','उबंटू','काली लिनक्स','सेंट OS'],correct:2,explanation:'Sleuth Kit काली लिनक्स पर उपलब्ध है।'},
    {question:'Sleuth Kit को कैसे रन किया जाता है?',options:['sleuthkit --scan','sleuthkit --analyze','sleuthkit --help','sleuthkit --investigate'],correct:2,explanation:'sleuthkit --help से रन किया जाता है।'},
    {question:'Sleuth Kit किस श्रेणी का टूल है?',options:['Forensics','WiFi','Tunneling','Network'],correct:0,explanation:'Sleuth Kit Forensics श्रेणी का टूल है।'}
  ],
  'foremost': [
    {question:'Foremost को कैसे रन किया जाता है?',options:['foremost --investigate','foremost --scan','foremost --help','foremost --analyze'],correct:2,explanation:'foremost --help से रन किया जाता है।'},
    {question:'Foremost किस श्रेणी का टूल है?',options:['Forensics','Mobile','Web','Tunneling'],correct:0,explanation:'Foremost Forensics श्रेणी का टूल है।'},
    {question:'Foremost किस काम में आता है?',options:['डेटाबेस डिजाइन','गेम डेवलपमेंट','डिजिटल फोरेंसिक्स और डेटा एनालिसिस','नेटवर्क एडमिन'],correct:2,explanation:'Foremost फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'Foremost किस प्लेटफॉर्म पर उपलब्ध है?',options:['पैरट OS','काली लिनक्स','फेडोरा','ओपन सूसी'],correct:1,explanation:'Foremost काली लिनक्स पर उपलब्ध है।'}
  ],
  'scalpel': [
    {question:'Scalpel को कैसे रन किया जाता है?',options:['scalpel --extract','scalpel --analyze','scalpel --examine','scalpel --help'],correct:3,explanation:'scalpel --help से रन किया जाता है।'},
    {question:'Scalpel किस काम में आता है?',options:['वेब डेवलपमेंट','सोशल मीडिया मार्केटिंग','गेम डेवलपमेंट','डिजिटल फोरेंसिक्स और डेटा एनालिसिस'],correct:3,explanation:'Scalpel फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'Scalpel किस श्रेणी का टूल है?',options:['WiFi','Web','Exploitation','Forensics'],correct:3,explanation:'Scalpel Forensics श्रेणी का टूल है।'},
    {question:'Scalpel किस प्लेटफॉर्म पर उपलब्ध है?',options:['फेडोरा','काली लिनक्स','ओपन सूसी','पैरट OS'],correct:1,explanation:'Scalpel काली लिनक्स पर उपलब्ध है।'}
  ],
  'guymager': [
    {question:'Guymager को कैसे रन किया जाता है?',options:['guymager --extract','guymager --help','guymager --investigate','guymager --analyze'],correct:1,explanation:'guymager --help से रन किया जाता है।'},
    {question:'Guymager किस काम में आता है?',options:['डिजिटल फोरेंसिक्स और डेटा एनालिसिस','डेटाबेस डिजाइन','गेम डेवलपमेंट','वेब डेवलपमेंट'],correct:0,explanation:'Guymager फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'Guymager किस प्लेटफॉर्म पर उपलब्ध है?',options:['डेबियन','काली लिनक्स','फेडोरा','सेंट OS'],correct:1,explanation:'Guymager काली लिनक्स पर उपलब्ध है।'},
    {question:'Guymager किस श्रेणी का टूल है?',options:['Forensics','Exploitation','Web','Recon'],correct:0,explanation:'Guymager Forensics श्रेणी का टूल है।'}
  ],
  'dc3dd': [
    {question:'DC3DD को कैसे रन किया जाता है?',options:['dc3dd --examine','dc3dd --scan','dc3dd --extract','dc3dd --help'],correct:3,explanation:'dc3dd --help से रन किया जाता है।'},
    {question:'DC3DD किस काम में आता है?',options:['डेटाबेस डिजाइन','सोशल मीडिया मार्केटिंग','गेम डेवलपमेंट','डिजिटल फोरेंसिक्स और डेटा एनालिसिस'],correct:3,explanation:'DC3DD फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'DC3DD किस प्लेटफॉर्म पर उपलब्ध है?',options:['उबंटू','काली लिनक्स','आर्क लिनक्स','ओपन सूसी'],correct:1,explanation:'DC3DD काली लिनक्स पर उपलब्ध है।'},
    {question:'DC3DD किस श्रेणी का टूल है?',options:['Exploitation','Forensics','Network','Passwords'],correct:1,explanation:'DC3DD Forensics श्रेणी का टूल है।'}
  ],
  'testdisk': [
    {question:'TestDisk किस काम में आता है?',options:['गेम डेवलपमेंट','वेब डेवलपमेंट','नेटवर्क एडमिन','डिजिटल फोरेंसिक्स और डेटा एनालिसिस'],correct:3,explanation:'TestDisk फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'TestDisk किस प्लेटफॉर्म पर उपलब्ध है?',options:['फेडोरा','काली लिनक्स','डेबियन','पैरट OS'],correct:1,explanation:'TestDisk काली लिनक्स पर उपलब्ध है।'},
    {question:'TestDisk को कैसे रन किया जाता है?',options:['testdisk --investigate','testdisk --help','testdisk --extract','testdisk --examine'],correct:1,explanation:'testdisk --help से रन किया जाता है।'},
    {question:'TestDisk किस श्रेणी का टूल है?',options:['Forensics','Recon','Audit','WiFi'],correct:0,explanation:'TestDisk Forensics श्रेणी का टूल है।'}
  ],
  'photorec': [
    {question:'PhotoRec को कैसे रन किया जाता है?',options:['photorec --extract','photorec --scan','photorec --help','photorec --analyze'],correct:2,explanation:'photorec --help से रन किया जाता है।'},
    {question:'PhotoRec किस प्लेटफॉर्म पर उपलब्ध है?',options:['आर्क लिनक्स','काली लिनक्स','उबंटू','पैरट OS'],correct:1,explanation:'PhotoRec काली लिनक्स पर उपलब्ध है।'},
    {question:'PhotoRec किस श्रेणी का टूल है?',options:['Audit','Passwords','WiFi','Forensics'],correct:3,explanation:'PhotoRec Forensics श्रेणी का टूल है।'},
    {question:'PhotoRec किस काम में आता है?',options:['डिजिटल फोरेंसिक्स और डेटा एनालिसिस','नेटवर्क एडमिन','डेटाबेस डिजाइन','वेब डेवलपमेंट'],correct:0,explanation:'PhotoRec फोरेंसिक्स के लिए उपयोग होता है।'}
  ],
  'ghidra': [
    {question:'Ghidra किस काम में आता है?',options:['सोशल मीडिया मार्केटिंग','डिजिटल फोरेंसिक्स और डेटा एनालिसिस','वेब डेवलपमेंट','नेटवर्क एडमिन'],correct:1,explanation:'Ghidra फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'Ghidra किस श्रेणी का टूल है?',options:['Audit','Forensics','Exploitation','Network'],correct:1,explanation:'Ghidra Forensics श्रेणी का टूल है।'},
    {question:'Ghidra को कैसे रन किया जाता है?',options:['ghidra --extract','ghidra --investigate','ghidra --help','ghidra --analyze'],correct:2,explanation:'ghidra --help से रन किया जाता है।'},
    {question:'Ghidra किस प्लेटफॉर्म पर उपलब्ध है?',options:['डेबियन','काली लिनक्स','ओपन सूसी','उबंटू'],correct:1,explanation:'Ghidra काली लिनक्स पर उपलब्ध है।'}
  ],
  'edb-debugger': [
    {question:'EDB Debugger किस काम में आता है?',options:['नेटवर्क एडमिन','डेटाबेस डिजाइन','डिजिटल फोरेंसिक्स और डेटा एनालिसिस','सोशल मीडिया मार्केटिंग'],correct:2,explanation:'EDB Debugger फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'EDB Debugger को कैसे रन किया जाता है?',options:['edb-debugger --help','edb-debugger --investigate','edb-debugger --extract','edb-debugger --scan'],correct:0,explanation:'edb-debugger --help से रन किया जाता है।'},
    {question:'EDB Debugger किस प्लेटफॉर्म पर उपलब्ध है?',options:['उबंटू','ओपन सूसी','काली लिनक्स','डेबियन'],correct:2,explanation:'EDB Debugger काली लिनक्स पर उपलब्ध है।'},
    {question:'EDB Debugger किस श्रेणी का टूल है?',options:['Forensics','Tunneling','Audit','Network'],correct:0,explanation:'EDB Debugger Forensics श्रेणी का टूल है।'}
  ],
  'dex2jar': [
    {question:'Dex2Jar को कैसे रन किया जाता है?',options:['dex2jar --help','dex2jar --analyze','dex2jar --investigate','dex2jar --extract'],correct:0,explanation:'dex2jar --help से रन किया जाता है।'},
    {question:'Dex2Jar किस काम में आता है?',options:['वेब डेवलपमेंट','डिजिटल फोरेंसिक्स और डेटा एनालिसिस','नेटवर्क एडमिन','डेटाबेस डिजाइन'],correct:1,explanation:'Dex2Jar फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'Dex2Jar किस प्लेटफॉर्म पर उपलब्ध है?',options:['आर्क लिनक्स','काली लिनक्स','फेडोरा','सेंट OS'],correct:1,explanation:'Dex2Jar काली लिनक्स पर उपलब्ध है।'},
    {question:'Dex2Jar किस श्रेणी का टूल है?',options:['Recon','Web','WiFi','Forensics'],correct:3,explanation:'Dex2Jar Forensics श्रेणी का टूल है।'}
  ],
  'jd-gui': [
    {question:'JD-GUI किस श्रेणी का टूल है?',options:['Forensics','Web','Recon','WiFi'],correct:0,explanation:'JD-GUI Forensics श्रेणी का टूल है।'},
    {question:'JD-GUI किस प्लेटफॉर्म पर उपलब्ध है?',options:['फेडोरा','डेबियन','सेंट OS','काली लिनक्स'],correct:3,explanation:'JD-GUI काली लिनक्स पर उपलब्ध है।'},
    {question:'JD-GUI को कैसे रन किया जाता है?',options:['jd-gui --analyze','jd-gui --examine','jd-gui --help','jd-gui --extract'],correct:2,explanation:'jd-gui --help से रन किया जाता है।'},
    {question:'JD-GUI किस काम में आता है?',options:['वेब डेवलपमेंट','नेटवर्क एडमिन','डिजिटल फोरेंसिक्स और डेटा एनालिसिस','गेम डेवलपमेंट'],correct:2,explanation:'JD-GUI फोरेंसिक्स के लिए उपयोग होता है।'}
  ],
  'smali': [
    {question:'Smali/Baksmali किस काम में आता है?',options:['सोशल मीडिया मार्केटिंग','नेटवर्क एडमिन','डिजिटल फोरेंसिक्स और डेटा एनालिसिस','गेम डेवलपमेंट'],correct:2,explanation:'Smali/Baksmali फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'Smali/Baksmali किस श्रेणी का टूल है?',options:['Forensics','Recon','Passwords','Mobile'],correct:0,explanation:'Smali/Baksmali Forensics श्रेणी का टूल है।'},
    {question:'Smali/Baksmali को कैसे रन किया जाता है?',options:['smali --scan','smali --investigate','smali --examine','smali --help'],correct:3,explanation:'smali --help से रन किया जाता है।'},
    {question:'Smali/Baksmali किस प्लेटफॉर्म पर उपलब्ध है?',options:['काली लिनक्स','ओपन सूसी','आर्क लिनक्स','डेबियन'],correct:0,explanation:'Smali/Baksmali काली लिनक्स पर उपलब्ध है।'}
  ],
  'capstone': [
    {question:'Capstone किस श्रेणी का टूल है?',options:['Network','Forensics','Mobile','WiFi'],correct:1,explanation:'Capstone Forensics श्रेणी का टूल है।'},
    {question:'Capstone को कैसे रन किया जाता है?',options:['capstone --extract','capstone --scan','capstone --analyze','capstone --help'],correct:3,explanation:'capstone --help से रन किया जाता है।'},
    {question:'Capstone किस काम में आता है?',options:['वेब डेवलपमेंट','डिजिटल फोरेंसिक्स और डेटा एनालिसिस','नेटवर्क एडमिन','डेटाबेस डिजाइन'],correct:1,explanation:'Capstone फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'Capstone किस प्लेटफॉर्म पर उपलब्ध है?',options:['आर्क लिनक्स','उबंटू','काली लिनक्स','सेंट OS'],correct:2,explanation:'Capstone काली लिनक्स पर उपलब्ध है।'}
  ],
  'keystone': [
    {question:'Keystone किस प्लेटफॉर्म पर उपलब्ध है?',options:['आर्क लिनक्स','ओपन सूसी','सेंट OS','काली लिनक्स'],correct:3,explanation:'Keystone काली लिनक्स पर उपलब्ध है।'},
    {question:'Keystone किस काम में आता है?',options:['गेम डेवलपमेंट','डिजिटल फोरेंसिक्स और डेटा एनालिसिस','वेब डेवलपमेंट','डेटाबेस डिजाइन'],correct:1,explanation:'Keystone फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'Keystone को कैसे रन किया जाता है?',options:['keystone --examine','keystone --investigate','keystone --extract','keystone --help'],correct:3,explanation:'keystone --help से रन किया जाता है।'},
    {question:'Keystone किस श्रेणी का टूल है?',options:['Network','Forensics','Recon','Mobile'],correct:1,explanation:'Keystone Forensics श्रेणी का टूल है।'}
  ],
  'iaito': [
    {question:'Iaito किस श्रेणी का टूल है?',options:['Audit','Tunneling','WiFi','Forensics'],correct:3,explanation:'Iaito Forensics श्रेणी का टूल है।'},
    {question:'Iaito किस काम में आता है?',options:['वेब डेवलपमेंट','डिजिटल फोरेंसिक्स और डेटा एनालिसिस','गेम डेवलपमेंट','डेटाबेस डिजाइन'],correct:1,explanation:'Iaito फोरेंसिक्स के लिए उपयोग होता है।'},
    {question:'Iaito को कैसे रन किया जाता है?',options:['iaito --scan','iaito --help','iaito --examine','iaito --investigate'],correct:1,explanation:'iaito --help से रन किया जाता है।'},
    {question:'Iaito किस प्लेटफॉर्म पर उपलब्ध है?',options:['उबंटू','फेडोरा','डेबियन','काली लिनक्स'],correct:3,explanation:'Iaito काली लिनक्स पर उपलब्ध है।'}
  ],
  'adb': [
    {question:'ADB किस श्रेणी में आता है?',options:['Mobile','Web','Forensics','Audit'],correct:0,explanation:'ADB Mobile श्रेणी का टूल है।'},
    {question:'ADB कहाँ इंस्टॉल होता है?',options:['काली लिनक्स','ओपन सूसी','फेडोरा','आर्क लिनक्स'],correct:0,explanation:'ADB काली लिनक्स में इंस्टॉल होता है।'},
    {question:'ADB का मुख्य उपयोग क्या है?',options:['डेटाबेस मैनेजमेंट','वेब डेवलपमेंट','ग्राफिक डिजाइनिंग','मोबाइल एप्लीकेशन सिक्योरिटी टेस्टिंग'],correct:3,explanation:'ADB मोबाइल सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'ADB का कमांड क्या है?',options:['adb --ios','adb --app','adb --mobile','adb --help'],correct:3,explanation:'adb --help कमांड है।'}
  ],
  'scrcpy': [
    {question:'Scrcpy कहाँ इंस्टॉल होता है?',options:['ओपन सूसी','पैरट OS','डेबियन','काली लिनक्स'],correct:3,explanation:'Scrcpy काली लिनक्स में इंस्टॉल होता है।'},
    {question:'Scrcpy का मुख्य उपयोग क्या है?',options:['मोबाइल एप्लीकेशन सिक्योरिटी टेस्टिंग','गेम डेवलपमेंट','डेटाबेस मैनेजमेंट','नेटवर्क एडमिन'],correct:0,explanation:'Scrcpy मोबाइल सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Scrcpy का कमांड क्या है?',options:['scrcpy --device','scrcpy --android','scrcpy --help','scrcpy --app'],correct:2,explanation:'scrcpy --help कमांड है।'},
    {question:'Scrcpy किस श्रेणी में आता है?',options:['Tunneling','Web','Mobile','Audit'],correct:2,explanation:'Scrcpy Mobile श्रेणी का टूल है।'}
  ],
  'fastboot': [
    {question:'Fastboot कहाँ इंस्टॉल होता है?',options:['आर्क लिनक्स','ओपन सूसी','काली लिनक्स','पैरट OS'],correct:2,explanation:'Fastboot काली लिनक्स में इंस्टॉल होता है।'},
    {question:'Fastboot किस श्रेणी में आता है?',options:['Forensics','Network','Recon','Mobile'],correct:3,explanation:'Fastboot Mobile श्रेणी का टूल है।'},
    {question:'Fastboot का कमांड क्या है?',options:['fastboot --ios','fastboot --mobile','fastboot --app','fastboot --help'],correct:3,explanation:'fastboot --help कमांड है।'},
    {question:'Fastboot का मुख्य उपयोग क्या है?',options:['नेटवर्क एडमिन','मोबाइल एप्लीकेशन सिक्योरिटी टेस्टिंग','डेटाबेस मैनेजमेंट','ग्राफिक डिजाइनिंग'],correct:1,explanation:'Fastboot मोबाइल सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'dex2smali': [
    {question:'Dex2Smali का मुख्य उपयोग क्या है?',options:['गेम डेवलपमेंट','वेब डेवलपमेंट','मोबाइल एप्लीकेशन सिक्योरिटी टेस्टिंग','ग्राफिक डिजाइनिंग'],correct:2,explanation:'Dex2Smali मोबाइल सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Dex2Smali का कमांड क्या है?',options:['dex2smali --apk','dex2smali --app','dex2smali --help','dex2smali --mobile'],correct:2,explanation:'dex2smali --help कमांड है।'},
    {question:'Dex2Smali किस श्रेणी में आता है?',options:['Audit','Mobile','Forensics','WiFi'],correct:1,explanation:'Dex2Smali Mobile श्रेणी का टूल है।'},
    {question:'Dex2Smali कहाँ इंस्टॉल होता है?',options:['काली लिनक्स','आर्क लिनक्स','डेबियन','सेंट OS'],correct:0,explanation:'Dex2Smali काली लिनक्स में इंस्टॉल होता है।'}
  ],
  'signapk': [
    {question:'SignApk का कमांड क्या है?',options:['signapk --help','signapk --android','signapk --ios','signapk --device'],correct:0,explanation:'signapk --help कमांड है।'},
    {question:'SignApk कहाँ इंस्टॉल होता है?',options:['डेबियन','काली लिनक्स','सेंट OS','उबंटू'],correct:1,explanation:'SignApk काली लिनक्स में इंस्टॉल होता है।'},
    {question:'SignApk किस श्रेणी में आता है?',options:['Mobile','WiFi','Network','Audit'],correct:0,explanation:'SignApk Mobile श्रेणी का टूल है।'},
    {question:'SignApk का मुख्य उपयोग क्या है?',options:['गेम डेवलपमेंट','वेब डेवलपमेंट','डेटाबेस मैनेजमेंट','मोबाइल एप्लीकेशन सिक्योरिटी टेस्टिंग'],correct:3,explanation:'SignApk मोबाइल सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'android-framework': [
    {question:'Android Framework Tools का मुख्य उपयोग क्या है?',options:['डेटाबेस मैनेजमेंट','मोबाइल एप्लीकेशन सिक्योरिटी टेस्टिंग','गेम डेवलपमेंट','नेटवर्क एडमिन'],correct:1,explanation:'Android Framework Tools मोबाइल सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Android Framework Tools का कमांड क्या है?',options:['android-framework --android','android-framework --help','android-framework --apk','android-framework --device'],correct:1,explanation:'android-framework --help कमांड है।'},
    {question:'Android Framework Tools कहाँ इंस्टॉल होता है?',options:['फेडोरा','डेबियन','सेंट OS','काली लिनक्स'],correct:3,explanation:'Android Framework Tools काली लिनक्स में इंस्टॉल होता है।'},
    {question:'Android Framework Tools किस श्रेणी में आता है?',options:['Tunneling','Network','Passwords','Mobile'],correct:3,explanation:'Android Framework Tools Mobile श्रेणी का टूल है।'}
  ],
  'firmware-mod': [
    {question:'Firmware Mod Kit किस श्रेणी में आता है?',options:['Forensics','Mobile','Recon','Exploitation'],correct:1,explanation:'Firmware Mod Kit Mobile श्रेणी का टूल है।'},
    {question:'Firmware Mod Kit का कमांड क्या है?',options:['firmware-mod --apk','firmware-mod --device','firmware-mod --help','firmware-mod --app'],correct:2,explanation:'firmware-mod --help कमांड है।'},
    {question:'Firmware Mod Kit का मुख्य उपयोग क्या है?',options:['डेटाबेस मैनेजमेंट','ग्राफिक डिजाइनिंग','मोबाइल एप्लीकेशन सिक्योरिटी टेस्टिंग','नेटवर्क एडमिन'],correct:2,explanation:'Firmware Mod Kit मोबाइल सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Firmware Mod Kit कहाँ इंस्टॉल होता है?',options:['उबंटू','काली लिनक्स','पैरट OS','ओपन सूसी'],correct:1,explanation:'Firmware Mod Kit काली लिनक्स में इंस्टॉल होता है।'}
  ],
  'mkbootimg': [
    {question:'Mkbootimg कहाँ इंस्टॉल होता है?',options:['फेडोरा','उबंटू','काली लिनक्स','सेंट OS'],correct:2,explanation:'Mkbootimg काली लिनक्स में इंस्टॉल होता है।'},
    {question:'Mkbootimg का मुख्य उपयोग क्या है?',options:['मोबाइल एप्लीकेशन सिक्योरिटी टेस्टिंग','डेटाबेस मैनेजमेंट','वेब डेवलपमेंट','ग्राफिक डिजाइनिंग'],correct:0,explanation:'Mkbootimg मोबाइल सुरक्षा परीक्षण के लिए उपयोग होता है।'},
    {question:'Mkbootimg किस श्रेणी में आता है?',options:['Recon','Mobile','Tunneling','Network'],correct:1,explanation:'Mkbootimg Mobile श्रेणी का टूल है।'},
    {question:'Mkbootimg का कमांड क्या है?',options:['mkbootimg --help','mkbootimg --mobile','mkbootimg --app','mkbootimg --apk'],correct:0,explanation:'mkbootimg --help कमांड है।'}
  ],
  'dhcpig': [
    {question:'DHCPig टूल कैसे चलाया जाता है?',options:['dhcpig --help','dhcpig net','dhcpig trace','dhcpig network'],correct:0,explanation:'dhcpig --help कमांड से चलाया जाता है।'},
    {question:'DHCPig कहाँ उपलब्ध है?',options:['डेबियन','काली लिनक्स','पैरट OS','फेडोरा'],correct:1,explanation:'DHCPig काली लिनक्स में उपलब्ध है।'},
    {question:'DHCPig किस श्रेणी में आता है?',options:['Network','Passwords','Audit','Web'],correct:0,explanation:'DHCPig Network श्रेणी का टूल है।'},
    {question:'DHCPig का मुख्य उपयोग क्या है?',options:['ग्राफिक डिजाइनिंग','मोबाइल एप डेवलपमेंट','नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस','डेटाबेस मैनेजमेंट'],correct:2,explanation:'DHCPig नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'slowloris': [
    {question:'Slowloris के लिए कौन सा कमांड इस्तेमाल होता है?',options:['slowloris --scan','slowloris --help','slowloris --audit','slowloris --check'],correct:1,explanation:'slowloris --help इस्तेमाल होता है।'},
    {question:'Slowloris किस श्रेणी का टूल है?',options:['Forensics','Web','Audit','Passwords'],correct:1,explanation:'Slowloris Web श्रेणी का टूल है।'},
    {question:'Slowloris किस प्लेटफॉर्म पर चलता है?',options:['आर्क लिनक्स','ओपन सूसी','काली लिनक्स','पैरट OS'],correct:2,explanation:'Slowloris काली लिनक्स पर चलता है।'},
    {question:'Slowloris किस काम आता है?',options:['ग्राफिक डिजाइनिंग','गेम डेवलपमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग','मोबाइल डेवलपमेंट'],correct:2,explanation:'Slowloris वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  't50': [
    {question:'T50 कहाँ उपलब्ध है?',options:['सेंट OS','फेडोरा','काली लिनक्स','ओपन सूसी'],correct:2,explanation:'T50 काली लिनक्स में उपलब्ध है।'},
    {question:'T50 किस श्रेणी में आता है?',options:['WiFi','Passwords','Tunneling','Network'],correct:3,explanation:'T50 Network श्रेणी का टूल है।'},
    {question:'T50 टूल कैसे चलाया जाता है?',options:['t50 trace','t50 scan','t50 --help','t50 net'],correct:2,explanation:'t50 --help कमांड से चलाया जाता है।'},
    {question:'T50 का मुख्य उपयोग क्या है?',options:['नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस','वेब डेवलपमेंट','गेम डेवलपमेंट','डेटाबेस मैनेजमेंट'],correct:0,explanation:'T50 नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'thc-ssl-dos': [
    {question:'THC-SSL-DoS के लिए कौन सा कमांड इस्तेमाल होता है?',options:['thc-ssl-dos --url','thc-ssl-dos --help','thc-ssl-dos --scan','thc-ssl-dos --test'],correct:1,explanation:'thc-ssl-dos --help इस्तेमाल होता है।'},
    {question:'THC-SSL-DoS किस प्लेटफॉर्म पर चलता है?',options:['सेंट OS','पैरट OS','काली लिनक्स','आर्क लिनक्स'],correct:2,explanation:'THC-SSL-DoS काली लिनक्स पर चलता है।'},
    {question:'THC-SSL-DoS किस श्रेणी का टूल है?',options:['Tunneling','Mobile','Passwords','Web'],correct:3,explanation:'THC-SSL-DoS Web श्रेणी का टूल है।'},
    {question:'THC-SSL-DoS किस काम आता है?',options:['ग्राफिक डिजाइनिंग','गेम डेवलपमेंट','डेटाबेस मैनेजमेंट','वेब एप्लीकेशन सिक्योरिटी टेस्टिंग'],correct:3,explanation:'THC-SSL-DoS वेब सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'inviteflood': [
    {question:'InviteFlood किस श्रेणी में आता है?',options:['Mobile','Network','Tunneling','Audit'],correct:1,explanation:'InviteFlood Network श्रेणी का टूल है।'},
    {question:'InviteFlood कहाँ उपलब्ध है?',options:['सेंट OS','आर्क लिनक्स','काली लिनक्स','फेडोरा'],correct:2,explanation:'InviteFlood काली लिनक्स में उपलब्ध है।'},
    {question:'InviteFlood टूल कैसे चलाया जाता है?',options:['inviteflood --help','inviteflood net','inviteflood network','inviteflood trace'],correct:0,explanation:'inviteflood --help कमांड से चलाया जाता है।'},
    {question:'InviteFlood का मुख्य उपयोग क्या है?',options:['वेब डेवलपमेंट','ग्राफिक डिजाइनिंग','नेटवर्क सिक्योरिटी टेस्टिंग और ट्रैफिक एनालिसिस','डेटाबेस मैनेजमेंट'],correct:2,explanation:'InviteFlood नेटवर्क सुरक्षा परीक्षण के लिए उपयोग होता है।'}
  ],
  'powersploit': [
    {question:'PowerSploit किस श्रेणी का टूल है?',options:['Exploitation','Tunneling','Recon','Network'],correct:0,explanation:'PowerSploit Exploitation श्रेणी का टूल है।'},
    {question:'PowerSploit का स्टैंडर्ड कमांड क्या है?',options:['powersploit --help','powersploit --run','powersploit --attack','powersploit --fire'],correct:0,explanation:'powersploit --help स्टैंडर्ड कमांड है।'},
    {question:'PowerSploit किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['उबंटू','काली लिनक्स','सेंट OS','डेबियन'],correct:1,explanation:'PowerSploit काली लिनक्स में उपलब्ध है।'},
    {question:'PowerSploit का उपयोग किसके लिए किया जाता है?',options:['सिस्टम एडमिनिस्ट्रेशन','वेब डेवलपमेंट','क्लाउड कंप्यूटिंग','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'PowerSploit एक्सप्लॉइटेशन के लिए उपयोग होता है।'}
  ],
  'pupy': [
    {question:'Pupy का उपयोग किसके लिए किया जाता है?',options:['क्लाउड कंप्यूटिंग','वेब डेवलपमेंट','डेटाबेस मैनेजमेंट','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'Pupy एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Pupy किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['पैरट OS','ओपन सूसी','डेबियन','काली लिनक्स'],correct:3,explanation:'Pupy काली लिनक्स में उपलब्ध है।'},
    {question:'Pupy किस श्रेणी का टूल है?',options:['WiFi','Audit','Exploitation','Network'],correct:2,explanation:'Pupy Exploitation श्रेणी का टूल है।'},
    {question:'Pupy का स्टैंडर्ड कमांड क्या है?',options:['pupy --attack','pupy --execute','pupy --run','pupy --help'],correct:3,explanation:'pupy --help स्टैंडर्ड कमांड है।'}
  ],
  'pwnat': [
    {question:'Pwnat किस प्लेटफॉर्म पर चलता है?',options:['आर्क लिनक्स','फेडोरा','काली लिनक्स','डेबियन'],correct:2,explanation:'Pwnat काली लिनक्स पर चलता है।'},
    {question:'Pwnat किस श्रेणी में आता है?',options:['Forensics','Mobile','Exploitation','Tunneling'],correct:3,explanation:'Pwnat Tunneling श्रेणी का टूल है।'},
    {question:'Pwnat का कमांड क्या होता है?',options:['pwnat --encrypt','pwnat --forward','pwnat --route','pwnat --help'],correct:3,explanation:'pwnat --help कमांड होता है।'},
    {question:'Pwnat का उपयोग क्या है?',options:['डेटाबेस मैनेजमेंट','नेटवर्क टनलिंग और ट्रैफिक एनकैप्सुलेशन','ग्राफिक डिजाइनिंग','ईमेल मैनेजमेंट'],correct:1,explanation:'Pwnat नेटवर्क टनलिंग के लिए उपयोग होता है।'}
  ],
  'trevorc2': [
    {question:'TrevorC2 किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['उबंटू','डेबियन','काली लिनक्स','ओपन सूसी'],correct:2,explanation:'TrevorC2 काली लिनक्स में उपलब्ध है।'},
    {question:'TrevorC2 किस श्रेणी का टूल है?',options:['Mobile','Tunneling','Exploitation','Web'],correct:2,explanation:'TrevorC2 Exploitation श्रेणी का टूल है।'},
    {question:'TrevorC2 का उपयोग किसके लिए किया जाता है?',options:['ग्राफिक डिजाइनिंग','क्लाउड कंप्यूटिंग','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','सिस्टम एडमिनिस्ट्रेशन'],correct:2,explanation:'TrevorC2 एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'TrevorC2 का स्टैंडर्ड कमांड क्या है?',options:['trevorc2 --help','trevorc2 --execute','trevorc2 --launch','trevorc2 --run'],correct:0,explanation:'trevorc2 --help स्टैंडर्ड कमांड है।'}
  ],
  'silenttrinity': [
    {question:'SilentTrinity का स्टैंडर्ड कमांड क्या है?',options:['silenttrinity --help','silenttrinity --fire','silenttrinity --run','silenttrinity --execute'],correct:0,explanation:'silenttrinity --help स्टैंडर्ड कमांड है।'},
    {question:'SilentTrinity किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['आर्क लिनक्स','ओपन सूसी','काली लिनक्स','उबंटू'],correct:2,explanation:'SilentTrinity काली लिनक्स में उपलब्ध है।'},
    {question:'SilentTrinity किस श्रेणी का टूल है?',options:['Forensics','Exploitation','Mobile','Passwords'],correct:1,explanation:'SilentTrinity Exploitation श्रेणी का टूल है।'},
    {question:'SilentTrinity का उपयोग किसके लिए किया जाता है?',options:['डेटाबेस मैनेजमेंट','सिस्टम एडमिनिस्ट्रेशन','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','वेब डेवलपमेंट'],correct:2,explanation:'SilentTrinity एक्सप्लॉइटेशन के लिए उपयोग होता है।'}
  ],
  'merlin': [
    {question:'Merlin का स्टैंडर्ड कमांड क्या है?',options:['merlin --help','merlin --attack','merlin --execute','merlin --launch'],correct:0,explanation:'merlin --help स्टैंडर्ड कमांड है।'},
    {question:'Merlin का उपयोग किसके लिए किया जाता है?',options:['क्लाउड कंप्यूटिंग','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग','वेब डेवलपमेंट','सिस्टम एडमिनिस्ट्रेशन'],correct:1,explanation:'Merlin एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Merlin किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['पैरट OS','आर्क लिनक्स','काली लिनक्स','डेबियन'],correct:2,explanation:'Merlin काली लिनक्स में उपलब्ध है।'},
    {question:'Merlin किस श्रेणी का टूल है?',options:['Exploitation','WiFi','Recon','Audit'],correct:0,explanation:'Merlin Exploitation श्रेणी का टूल है।'}
  ],
  'koadic': [
    {question:'Koadic का उपयोग किसके लिए किया जाता है?',options:['क्लाउड कंप्यूटिंग','ग्राफिक डिजाइनिंग','डेटाबेस मैनेजमेंट','वल्नरेबिलिटी एक्सप्लॉइटेशन और पेनिट्रेशन टेस्टिंग'],correct:3,explanation:'Koadic एक्सप्लॉइटेशन के लिए उपयोग होता है।'},
    {question:'Koadic किस लिनक्स डिस्ट्रो में उपलब्ध है?',options:['सेंट OS','काली लिनक्स','उबंटू','डेबियन'],correct:1,explanation:'Koadic काली लिनक्स में उपलब्ध है।'},
    {question:'Koadic किस श्रेणी का टूल है?',options:['Exploitation','Mobile','Passwords','Tunneling'],correct:0,explanation:'Koadic Exploitation श्रेणी का टूल है।'},
    {question:'Koadic का स्टैंडर्ड कमांड क्या है?',options:['koadic --run','koadic --launch','koadic --fire','koadic --help'],correct:3,explanation:'koadic --help स्टैंडर्ड कमांड है।'}
  ],
  'dradis': [
    {question:'Dradis किस श्रेणी में आता है?',options:['Recon','Web','Passwords','Forensics'],correct:0,explanation:'Dradis Recon श्रेणी का टूल है।'},
    {question:'Dradis किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['काली लिनक्स','सिर्फ एंड्रॉइड','सिर्फ मैक','सभी प्लेटफॉर्म'],correct:0,explanation:'Dradis काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Dradis टूल का स्टैंडर्ड कमांड क्या है?',options:['dradis --probe','dradis --help','dradis --recon','dradis --map'],correct:1,explanation:'dradis --help मुख्य कमांड है।'},
    {question:'Dradis का मुख्य उद्देश्य क्या है?',options:['डेटा एनालिसिस','वेब डेवलपमेंट','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','नेटवर्क मॉनिटरिंग'],correct:2,explanation:'Dradis रिकॉनिसेंस के लिए उपयोग होता है।'}
  ],
  'faraday': [
    {question:'Faraday का मुख्य उद्देश्य क्या है?',options:['नेटवर्क मॉनिटरिंग','वेब डेवलपमेंट','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','डेटा एनालिसिस'],correct:2,explanation:'Faraday रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Faraday किस श्रेणी में आता है?',options:['Recon','WiFi','Exploitation','Passwords'],correct:0,explanation:'Faraday Recon श्रेणी का टूल है।'},
    {question:'Faraday टूल का स्टैंडर्ड कमांड क्या है?',options:['faraday --recon','faraday --help','faraday --probe','faraday --scan'],correct:1,explanation:'faraday --help मुख्य कमांड है।'},
    {question:'Faraday किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ एंड्रॉइड','काली लिनक्स','सिर्फ विंडोज','सिर्फ मैक'],correct:1,explanation:'Faraday काली लिनक्स में प्री-इंस्टॉल्ड है।'}
  ],
  'keepnote': [
    {question:'KeepNote किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ विंडोज','सिर्फ एंड्रॉइड','सिर्फ आईओएस','काली लिनक्स'],correct:3,explanation:'KeepNote काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'KeepNote टूल का स्टैंडर्ड कमांड क्या है?',options:['keepnote --help','keepnote --map','keepnote --probe','keepnote --recon'],correct:0,explanation:'keepnote --help मुख्य कमांड है।'},
    {question:'KeepNote किस श्रेणी में आता है?',options:['Exploitation','Web','Passwords','Recon'],correct:3,explanation:'KeepNote Recon श्रेणी का टूल है।'},
    {question:'KeepNote का मुख्य उद्देश्य क्या है?',options:['वेब डेवलपमेंट','नेटवर्क मॉनिटरिंग','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','डेटाबेस मैनेजमेंट'],correct:2,explanation:'KeepNote रिकॉनिसेंस के लिए उपयोग होता है।'}
  ],
  'cutycapt': [
    {question:'CutyCapt किस श्रेणी में आता है?',options:['WiFi','Passwords','Web','Recon'],correct:3,explanation:'CutyCapt Recon श्रेणी का टूल है।'},
    {question:'CutyCapt का मुख्य उद्देश्य क्या है?',options:['सॉफ्टवेयर टेस्टिंग','नेटवर्क मॉनिटरिंग','वेब डेवलपमेंट','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस'],correct:3,explanation:'CutyCapt रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'CutyCapt किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ विंडोज','काली लिनक्स','सिर्फ आईओएस','सिर्फ एंड्रॉइड'],correct:1,explanation:'CutyCapt काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'CutyCapt टूल का स्टैंडर्ड कमांड क्या है?',options:['cutycapt --map','cutycapt --recon','cutycapt --probe','cutycapt --help'],correct:3,explanation:'cutycapt --help मुख्य कमांड है।'}
  ],
  'pipal': [
    {question:'Pipal का बेसिक कमांड क्या है?',options:['pipal --attack','pipal --dict','pipal --recover','pipal --help'],correct:3,explanation:'pipal --help बेसिक कमांड है।'},
    {question:'Pipal किस ओएस में मिलता है?',options:['काली लिनक्स','ओपन सूसी','पैरट OS','आर्क लिनक्स'],correct:0,explanation:'Pipal काली लिनक्स में मिलता है।'},
    {question:'Pipal किस श्रेणी में आता है?',options:['Audit','Passwords','WiFi','Exploitation'],correct:1,explanation:'Pipal Passwords श्रेणी का टूल है।'},
    {question:'Pipal का उपयोग किसके लिए होता है?',options:['नेटवर्क मॉनिटरिंग','पासवर्ड क्रैकिंग और हैश एनालिसिस','क्लाउड कंप्यूटिंग','एप डेवलपमेंट'],correct:1,explanation:'Pipal पासवर्ड क्रैकिंग के लिए उपयोग होता है।'}
  ],
  'bluelog': [
    {question:'Bluelog किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ विंडोज','काली लिनक्स','सिर्फ मैक','सिर्फ आईओएस'],correct:1,explanation:'Bluelog काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'Bluelog किस श्रेणी में आता है?',options:['Audit','Network','Recon','Passwords'],correct:2,explanation:'Bluelog Recon श्रेणी का टूल है।'},
    {question:'Bluelog का मुख्य उद्देश्य क्या है?',options:['इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','डेटा एनालिसिस','डेटाबेस मैनेजमेंट','नेटवर्क मॉनिटरिंग'],correct:0,explanation:'Bluelog रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Bluelog टूल का स्टैंडर्ड कमांड क्या है?',options:['bluelog --map','bluelog --scan','bluelog --help','bluelog --probe'],correct:2,explanation:'bluelog --help मुख्य कमांड है।'}
  ],
  'bluesnarfer': [
    {question:'BlueSnarfer किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ एंड्रॉइड','सिर्फ आईओएस','काली लिनक्स','सभी प्लेटफॉर्म'],correct:2,explanation:'BlueSnarfer काली लिनक्स में प्री-इंस्टॉल्ड है।'},
    {question:'BlueSnarfer का मुख्य उद्देश्य क्या है?',options:['इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस','डेटाबेस मैनेजमेंट','सॉफ्टवेयर टेस्टिंग','नेटवर्क मॉनिटरिंग'],correct:0,explanation:'BlueSnarfer रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'BlueSnarfer टूल का स्टैंडर्ड कमांड क्या है?',options:['bluesnarfer --probe','bluesnarfer --scan','bluesnarfer --help','bluesnarfer --recon'],correct:2,explanation:'bluesnarfer --help मुख्य कमांड है।'},
    {question:'BlueSnarfer किस श्रेणी में आता है?',options:['Recon','WiFi','Web','Audit'],correct:0,explanation:'BlueSnarfer Recon श्रेणी का टूल है।'}
  ],
  'spooftooph': [
    {question:'Spooftooph किस श्रेणी में आता है?',options:['Audit','WiFi','Tunneling','Recon'],correct:3,explanation:'Spooftooph Recon श्रेणी का टूल है।'},
    {question:'Spooftooph टूल का स्टैंडर्ड कमांड क्या है?',options:['spooftooph --map','spooftooph --recon','spooftooph --probe','spooftooph --help'],correct:3,explanation:'spooftooph --help मुख्य कमांड है।'},
    {question:'Spooftooph का मुख्य उद्देश्य क्या है?',options:['डेटा एनालिसिस','वेब डेवलपमेंट','डेटाबेस मैनेजमेंट','इन्फॉर्मेशन गेदरिंग और रिकॉनिसेंस'],correct:3,explanation:'Spooftooph रिकॉनिसेंस के लिए उपयोग होता है।'},
    {question:'Spooftooph किस ऑपरेटिंग सिस्टम पर प्री-इंस्टॉल्ड आता है?',options:['सिर्फ विंडोज','काली लिनक्स','सिर्फ मैक','सभी प्लेटफॉर्म'],correct:1,explanation:'Spooftooph काली लिनक्स में प्री-इंस्टॉल्ड है।'}
  ],
  'stunnel': [
    {question:'Stunnel किस श्रेणी में आता है?',options:['Tunneling','Network','Web','Forensics'],correct:0,explanation:'Stunnel Tunneling श्रेणी का टूल है।'},
    {question:'Stunnel का कमांड क्या होता है?',options:['stunnel --encrypt','stunnel --help','stunnel --route','stunnel --forward'],correct:1,explanation:'stunnel --help कमांड होता है।'},
    {question:'Stunnel किस प्लेटफॉर्म पर चलता है?',options:['उबंटू','काली लिनक्स','पैरट OS','सेंट OS'],correct:1,explanation:'Stunnel काली लिनक्स पर चलता है।'},
    {question:'Stunnel का उपयोग क्या है?',options:['ईमेल मैनेजमेंट','सोशल मीडिया मार्केटिंग','डेटाबेस मैनेजमेंट','नेटवर्क टनलिंग और ट्रैफिक एनकैप्सुलेशन'],correct:3,explanation:'Stunnel नेटवर्क टनलिंग के लिए उपयोग होता है।'}
  ],
  'httptunnel': [
    {question:'HTTPTunnel किस श्रेणी में आता है?',options:['WiFi','Recon','Passwords','Tunneling'],correct:3,explanation:'HTTPTunnel Tunneling श्रेणी का टूल है।'},
    {question:'HTTPTunnel किस प्लेटफॉर्म पर चलता है?',options:['काली लिनक्स','डेबियन','फेडोरा','सेंट OS'],correct:0,explanation:'HTTPTunnel काली लिनक्स पर चलता है।'},
    {question:'HTTPTunnel का कमांड क्या होता है?',options:['httptunnel --tunnel','httptunnel --encrypt','httptunnel --forward','httptunnel --help'],correct:3,explanation:'httptunnel --help कमांड होता है।'},
    {question:'HTTPTunnel का उपयोग क्या है?',options:['ईमेल मैनेजमेंट','ग्राफिक डिजाइनिंग','नेटवर्क टनलिंग और ट्रैफिक एनकैप्सुलेशन','वेब डेवलपमेंट'],correct:2,explanation:'HTTPTunnel नेटवर्क टनलिंग के लिए उपयोग होता है।'}
  ]
}

export default quizData
