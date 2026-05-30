import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Apktool() {
  return (
    <TutorialLayout
      title="apktool"
      subtitle="Android APK reverse engineering — decompile, modify, recompile, malware analysis"
      icon="📱"
      prev={{ to: '/tool/bloodhound', label: 'bloodhound' }}
      next={{ to: '/tools', label: 'All Tools' }}
    >
      <h2>What is Apktool?</h2>
      <p>
        APKTool एक powerful Android APK reverse engineering tool है जो Android application packages (APK) को decompile, modify, और recompile करने की capability देता है। यह tool Android security researchers, malware analysts, और penetration testers के लिए essential है क्योंकि यह APK files के अंदर का पूरा code, resources, और configuration readable format में निकाल देता है। APKTool की मदद से आप किसी भी Android app को बिना source code के समझ सकते हो कि वो कैसे काम करती है।
      </p>
      <p>
        APKTool iBotPeaches (Connor Tumbleson) ने बनाया है और यह Java में लिखा गया है। यह tool DEX bytecode (Dalvik Executable) को Smali assembly language में convert करता है जो human-readable होती है। Android resources जैसे layouts, strings, images, और AndroidManifest.xml को decode करके editable format में देता है। Modified files को वापस APK में compile भी कर सकता हो जिसे sign करके device पर install किया जा सकता है।
      </p>
      <p>
        Android ecosystem में APKTool का position unique है। jadx जैसे tools Java code तो दिखाते हैं लेकिन edit करके recompile नहीं कर सकते। APKTool Smali level पर edit करने देता है जो bytecode manipulation का exact control देता है। Root detection bypass, SSL pinning bypass, permission modification, और malware analysis — ये सब APKTool से possible हैं।
      </p>
      <p>
        APKTool का architecture modular है। यह framework files use करता है जो Android system resources को handle करती हैं। हर Android version का अलग framework होता है। System apps को decompile करने के लिए यह framework install करना पड़ता है। APKTool v2.x series में major improvements आए — better resource handling, multi-dex support, और Android 13+ compatibility।
      </p>
      <p>
        APKTool security research के अलावा legitimate uses भी हैं। App localization (translation), theme customization, accessibility modifications, और backup creation — ये सब legal uses हैं। लेकिन malware analysis और penetration testing में इसका सबसे ज़्यादा उपयोग होता है। OWASP Mobile Testing Guide में APKTool recommended tool है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> APKTool केवल अधिकृत penetration testing, malware analysis, और अपनी apps के लिए उपयोग करें। बिना अनुमति के किसी की app modify करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 43, 66, और 66B के तहत unauthorized software modification अपराध है — 3 साल तक की जेल और 5 लाख तक का जुर्माना हो सकता है।
      </div>

      <h2>History of Apktool</h2>
      <p>
        APKTool की शुरुआत 2010 में हुई जब iBotPeaches (Connor Tumbleson) ने Android apps को reverse engineer करने के लिए एक tool बनाने का फैसला किया। उस समय Android market (बाद में Google Play) तेज़ी से बढ़ रहा था और security researchers को apps को analyze करने के लिए proper tools की ज़रूरत थी।
      </p>
      <p>
        2012 में APKTool v2.0 release हुआ जो major rewrite था। इसमें framework support, better resource handling, और Smali/Baksmali integration add हुई। 2015 में APKTool Kali Linux में pre-installed आने लगा जिससे इसकी popularity और बढ़ गई। GitHub पर 19,000+ stars के साथ यह Android reverse engineering का standard tool है।
      </p>
      <p>
        APKTool का development actively जारी है। हर Android version release होने के बाद APKTool update होता है ताकि नए features support हो सकें। Android App Bundle (AAB), split APKs, और new resource formats — ये सब latest versions में support हैं। Community contributions भी active हैं।
      </p>

      <h2>How Apktool Works?</h2>
      <p>
        APKTool Android APK files को multiple stages में process करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">APK Extraction:</strong> ZIP format की APK file को extract करता है — DEX files, resources, native libraries, और manifest अलग-अलग मिलते हैं</li>
        <li><strong className="text-white">DEX to Smali Conversion:</strong> Dalvik bytecode (classes.dex) को Baksmali disassembler से Smali assembly में convert करता है — हर class की अलग .smali file बनती है</li>
        <li><strong className="text-white">Resource Decoding:</strong> Binary XML files (AndroidManifest.xml, layouts) को readable XML में convert करता है। ARSC files से strings, styles, colors decode करता है</li>
        <li><strong className="text-white">Framework Resolution:</strong> System resources को framework files से resolve करता है ताकि proper resource names मिल सकें</li>
        <li><strong className="text-white">Smali Editing:</strong> Human-readable Smali code edit करने देता है — method logic, conditions, return values सब change हो सकते हैं</li>
        <li><strong className="text-white">Resource Modification:</strong> XML files, strings, images, layouts सब edit कर सकते हो — app appearance और behavior change हो सकती है</li>
        <li><strong className="text-white">Recompilation:</strong> Modified Smali और resources को वापस DEX और ARSC format में compile करता है — APKTool internally Smali assembler use करता है</li>
        <li><strong className="text-white">APK Packaging:</strong> Compiled files को नए APK में package करता है — signing required होती है install करने से पहले</li>
      </ul>

      <h2>Installation</h2>
      <p>
        APKTool Kali Linux और NetHunter में pre-installed आता है। अगर किसी कारण से नहीं है तो कई तरीकों से install कर सकते हो।
      </p>
      <CodeBlock
        title="APKTool Install"
        code={`# Kali Linux / NetHunter:
sudo apt update
sudo apt install apktool

# Manual install (latest version):
# GitHub releases से download करो
wget https://raw.githubusercontent.com/iBotPeaches/Apktool/master/scripts/linux/apktool
wget https://bitbucket.org/iBotPeaches/Apktool/downloads/apktool_2.9.3.jar
chmod +x apktool
sudo mv apktool /usr/local/bin/
sudo mv apktool_2.9.3.jar /usr/local/bin/

# Homebrew (macOS):
brew install apktool

# Version check:
apktool --version

# Help:
apktool --help

# Java requirement (JDK 8+):
java -version
# अगर Java नहीं है:
sudo apt install default-jdk`}
      />

      <h2>Basic Usage</h2>
      <p>
        APKTool का basic workflow simple है — decompile, modify, recompile, sign, install। हर step important है।
      </p>
      <CodeBlock
        title="Decompile & Recompile"
        code={`# APK decompile करें:
apktool d app.apk -o output_dir

# Force overwrite (existing directory):
apktool d app.apk -o output_dir -f

# Verbose output के साथ:
apktool d app.apk -o output_dir -v

# Resources skip करें (sirf Smali):
apktool d app.apk -o output_dir --no-res

# Smali skip करें (sirf resources):
apktool d app.apk -o output_dir --no-src

# Modified app वापस compile करें:
apktool b output_dir -o modified.apk

# Build with debug info:
apktool b output_dir -o modified.apk -d

# Keep broken resources:
apktool d app.apk -o output_dir --keep-broken-res`}
      />

      <h2>Important Options</h2>
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">d</td><td className="py-2 px-3">APK decompile करें</td><td className="py-2 px-3 font-mono text-xs">apktool d app.apk</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">b</td><td className="py-2 px-3">Modified directory को APK में build करें</td><td className="py-2 px-3 font-mono text-xs">apktool b dir/</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">if</td><td className="py-2 px-3">Framework install करें (system apps के लिए)</td><td className="py-2 px-3 font-mono text-xs">apktool if framework.apk</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o</td><td className="py-2 px-3">Output directory specify करें</td><td className="py-2 px-3 font-mono text-xs">-o my_output</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f</td><td className="py-2 px-3">Force overwrite (existing directory)</td><td className="py-2 px-3 font-mono text-xs">-f</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">Verbose output (detailed logging)</td><td className="py-2 px-3 font-mono text-xs">-v</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--no-res</td><td className="py-2 px-3">Resources decode न करें (sirf Smali)</td><td className="py-2 px-3 font-mono text-xs">--no-res</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--no-src</td><td className="py-2 px-3">Smali decode न करें (sirf resources)</td><td className="py-2 px-3 font-mono text-xs">--no-src</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--keep-broken-res</td><td className="py-2 px-3">Broken resources keep करें (error handling)</td><td className="py-2 px-3 font-mono text-xs">--keep-broken-res</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p</td><td className="py-2 px-3">Framework path specify करें</td><td className="py-2 px-3 font-mono text-xs">-p /path/frameworks</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r</td><td className="py-2 px-3">Resources decode न करें (res/ untouched)</td><td className="py-2 px-3 font-mono text-xs">-r</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-s</td><td className="py-2 px-3">Sources decode न करें (smali untouched)</td><td className="py-2 px-3 font-mono text-xs">-s</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--frame-path</td><td className="py-2 px-3">Custom framework directory</td><td className="py-2 px-3 font-mono text-xs">--frame-path /custom/</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--only-main-classes</td><td className="py-2 px-3">Sirf main classes decompile करें</td><td className="py-2 px-3 font-mono text-xs">--only-main-classes</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-advance</td><td className="py-2 px-3">Advanced options दिखाएं</td><td className="py-2 px-3 font-mono text-xs">-advance</td></tr>
          </tbody>
        </table>
      </div>

      <h2>APK Structure After Decompile</h2>
      <p>
        Decompile करने के बाद app की पूरी internal structure मिल जाती है। हर folder और file का specific purpose है:
      </p>
      <CodeBlock
        title="Decompiled APK Contents"
        code={`# Decompile के बाद ये files/folders मिलते हैं:

# AndroidManifest.xml — App का main config file
#   - Permissions (कौन सी access माँग रही है)
#   - Activities, Services, Receivers, Providers
#   - Package name, version, min SDK

# res/ — Resources directory
#   - layout/ — UI layouts (XML)
#   - values/ — strings.xml, styles.xml, colors.xml
#   - drawable/ — Images (PNG, XML drawables)
#   - menu/ — Menu definitions
#   - xml/ — Network security config, preferences

# smali/ — Smali code (Dalvik bytecode assembly)
#   - com/company/app/ — Main app code
#   - हर .smali file = एक Java class
#   - Methods, fields, conditions सब दिखते हैं

# smali_classes2/ — Multi-dex apps में additional classes
# lib/ — Native libraries (.so files)
#   - armeabi-v7a/ — ARM 32-bit
#   - arm64-v8a/ — ARM 64-bit
#   - x86/ — Intel 32-bit
#   - x86_64/ — Intel 64-bit

# assets/ — Raw assets (configs, databases, fonts)
# original/ — Original AndroidManifest.xml और META-INF
# apktool.yml — APKTool metadata`}
      />

      <h2>APK Decompilation</h2>
      <p>
        Decompilation APKTool का main function है। यह process APK को readable और editable format में convert करती है।
      </p>
      <CodeBlock
        title="Decompile Techniques"
        code={`# Basic decompile:
apktool d target.apk -o decompiled/

# Specific output directory:
apktool d target.apk -o /tmp/analysis/

# Force overwrite (existing directory):
apktool d target.apk -o decompiled/ -f

# Sirf resources (Smali skip — fast):
apktool d target.apk -o decompiled/ --no-src

# Sirf Smali (resources skip):
apktool d target.apk -o decompiled/ --no-res

# Verbose mode (detailed logging):
apktool d target.apk -o decompiled/ -v

# Framework specify करके (system apps):
apktool d target.apk -o decompiled/ -f -p /path/to/frameworks/

# Multi-dex support (automatic):
# APKTool automatically multi-dex handle करता है
# smali/, smali_classes2/, smali_classes3/ आदि बनते हैं

# Decompile time depends on:
# - APK size
# - Number of DEX files
# - Resource complexity
# - Framework availability`}
      />

      <h2>APK Recompilation</h2>
      <p>
        Modified files को वापस APK में compile करना equally important है। Recompilation के बाद APK unsigned होता है — sign करना ज़रूरी है।
      </p>
      <CodeBlock
        title="Recompile Process"
        code={`# Basic recompile:
apktool b decompiled/ -o modified.apk

# With debug info (development):
apktool b decompiled/ -o modified.apk -d

# Verbose build:
apktool b decompiled/ -o modified.apk -v

# Common build errors aur fixes:

# Error: brut.common.BrutException
# Fix: Latest APKTool version install करो

# Error: Could not decode arsc file
# Fix: --keep-broken-res flag use करो decompile में

# Error: Framework not found
# Fix: System framework install करो
apktool if framework-res.apk

# Error: Invalid resource directory name
# Fix: Resource directory names check करो

# Build debug mode:
apktool b decompiled/ -o modified.apk -v 2>&1 | tee build.log`}
      />

      <h2>Resource Modification</h2>
      <p>
        Resources modify करना सबसे आसान तरीका है app को customize करने का। Strings, layouts, images, और manifest — सब edit हो सकते हैं।
      </p>
      <CodeBlock
        title="Resource Editing Examples"
        code={`# === Strings Modify ===
# res/values/strings.xml edit करो:
nano decompiled/res/values/strings.xml
# <string name="app_name">My App</string>
# बदलो: <string name="app_name">Modified App</string>

# === API URL Change ===
# Hardcoded URL find करो:
grep -r "api.example.com" decompiled/res/
# बदलो:
sed -i 's/api.example.com/evil.com/g' decompiled/res/values/strings.xml

# === Image Replace ===
# App icon बदलो:
cp new_icon.png decompiled/res/mipmap-xxxhdpi/ic_launcher.png

# === Layout Modify ===
# UI layout edit करो:
nano decompiled/res/layout/activity_main.xml

# === Permissions Add/Remove ===
# AndroidManifest.xml edit करो:
nano decompiled/AndroidManifest.xml
# Remove: <uses-permission android:name="android.permission.CAMERA"/>
# Add: <uses-permission android:name="android.permission.INTERNET"/>

# === Network Security Config ===
# SSL pinning bypass:
nano decompiled/res/xml/network_security_config.xml
# <network-security-config>
#   <base-config>
#     <trust-anchors>
#       <certificates src="system" />
#       <certificates src="user" />  ← Add this line
#     </trust-anchors>
#   </base-config>
# </network-security-config>`}
      />

      <h2>Smali Code Editing</h2>
      <p>
        Smali Dalvik bytecode का human-readable assembly form है। Java code compile होकर DEX बनता है, APKTool उसे Smali में convert करता है। Smali edit करके app का core logic बदल सकते हो।
      </p>
      <CodeBlock
        title="Smali Code Structure"
        code={`# Smali class structure:
.class public Lcom/example/MainActivity;
.super Landroid/app/Activity;
.source "MainActivity.java"

# Fields (variables):
.field private isPremium:Z    # boolean
.field private apiKey:Ljava/lang/String;    # String

# Registers:
# v0, v1, v2... — local variables
# p0, p1, p2... — parameters (p0 = this in instance methods)

# Common Smali Instructions:
# const-string v0, "hello"    — string assign
# const/4 v0, 0x0             — integer assign (0)
# const/4 v0, 0x1             — integer assign (1)
# invoke-virtual              — method call
# invoke-static               — static method call
# invoke-interface            — interface method call
# return-void                 — return nothing
# return v0                   — return value
# if-eqz v0, :cond_0          — if (v0 == 0) goto cond_0
# if-nez v0, :cond_0          — if (v0 != 0) goto cond_0
# move-result v0              — store return value
# new-instance v0, Ljava/lang/String;  — create object

# Method definition:
.method public onCreate(Landroid/os/Bundle;)V
    .locals 3                    # local variables count
    .parameter "savedInstanceState"

    # Method body here...

    return-void
.end method`}
      />

      <h2>Smali Modification Examples</h2>
      <CodeBlock
        title="Common Smali Edits"
        code={`# === License Check Bypass ===
# Original (returns boolean):
# .method public isLicensed()Z
#     const/4 v0, 0x0    # false
#     return v0
# .end method

# Modified (always true):
# .method public isLicensed()Z
#     const/4 v0, 0x1    # true
#     return v0
# .end method

# === Root Detection Bypass ===
# Find root check methods:
grep -r "isRooted\|checkRoot\|detectRoot" decompiled/smali/

# Modify to always return false:
# const/4 v0, 0x0
# return v0

# === Debug Mode Enable ===
# AndroidManifest.xml में:
# <application android:debuggable="true" ...>

# === Remove Ads ===
# Ad-related classes find करो:
grep -r "AdView\|InterstitialAd\|ad_unit_id" decompiled/smali/

# Ad loading methods को empty करो:
# .method private loadAd()V
#     return-void    # Method body empty
# .end method

# === Premium Feature Unlock ===
# isPremium method find करो:
grep -r "isPremium\|isPro\|isPaid" decompiled/smali/

# Return true:
# const/4 v0, 0x1
# return v0`}
      />

      <h2>AndroidManifest.xml Analysis</h2>
      <p>
        AndroidManifest.xml सबसे important file है — app की सारी configuration यहाँ होती है। Security testing में यही पहले check करना चाहिए।
      </p>
      <CodeBlock
        title="Manifest Analysis"
        code={`# Manifest file पढ़ें:
cat decompiled/AndroidManifest.xml

# === Permissions Check ===
# सभ permissions extract करें:
grep "uses-permission" AndroidManifest.xml

# Dangerous permissions:
# android.permission.CAMERA — Camera access
# android.permission.READ_SMS — SMS read
# android.permission.SEND_SMS — SMS send
# android.permission.READ_CONTACTS — Contacts
# android.permission.ACCESS_FINE_LOCATION — GPS
# android.permission.RECORD_AUDIO — Microphone
# android.permission.READ_CALL_LOG — Call history
# android.permission.WRITE_EXTERNAL_STORAGE — Storage
# android.permission.READ_PHONE_STATE — Phone info

# === Exported Components (Attack Surface) ===
grep "exported=\"true\"" AndroidManifest.xml
# ये components external apps access कर सकती हैं

# === Debug Mode Check ===
grep "debuggable=\"true\"" AndroidManifest.xml
# अगर true है → app debug mode में है (vulnerability)

# === Backup Allowed ===
grep "allowBackup=\"true\"" AndroidManifest.xml
# अगर true है → app data backup हो सकता है

# === Network Security Config ===
grep "networkSecurityConfig" AndroidManifest.xml
# SSL pinning config file का path

# === Content Providers ===
grep "provider" AndroidManifest.xml
# Data sharing between apps — potential SQL injection

# === Broadcast Receivers ===
grep "receiver" AndroidManifest.xml
# Intent-based attacks possible`}
      />

      <h2>Malware Analysis Workflow</h2>
      <p>
        APKTool malware analysis के लिए essential tool है। Suspicious APK को decompile करके उसकी malicious activities identify कर सकते हो।
      </p>
      <CodeBlock
        title="Complete Malware Analysis"
        code={`# Step 1: Decompile
apktool d suspicious.apk -o malware_analysis

# Step 2: Permissions analyze
echo "=== DANGEROUS PERMISSIONS ==="
grep "uses-permission" malware_analysis/AndroidManifest.xml

# Step 3: URLs aur endpoints find करो
echo "=== NETWORK ENDPOINTS ==="
grep -rh "https\\?://" malware_analysis/smali/ | sort -u

# Step 4: Hardcoded secrets
echo "=== SECRETS ==="
grep -ri "password\\|api_key\\|token\\|secret" \\
  malware_analysis/res/values/strings.xml

# Step 5: Suspicious network calls
echo "=== NETWORK CALLS ==="
grep -r "HttpURLConnection\\|OkHttpClient\\|Retrofit" \\
  malware_analysis/smali/

# Step 6: Base64 encoded strings (hidden data)
echo "=== BASE64 STRINGS ==="
grep -rE "[A-Za-z0-9+/]{20,}={0,2}" \\
  malware_analysis/smali/ | head -20

# Step 7: Crypto functions
echo "=== CRYPTO USAGE ==="
grep -r "Cipher\\|encrypt\\|decrypt\\|AES\\|RSA" \\
  malware_analysis/smali/

# Step 8: File operations (data exfiltration)
echo "=== FILE OPERATIONS ==="
grep -r "FileOutputStream\\|FileInputStream" \\
  malware_analysis/smali/
grep -r "getExternalStorageDirectory" \\
  malware_analysis/smali/

# Step 9: SMS/Call operations
echo "=== SMS/CALL ==="
grep -r "sendTextMessage\\|getLine1Number" \\
  malware_analysis/smali/

# Step 10: Device info collection
echo "=== DEVICE INFO ==="
grep -r "getDeviceId\\|getSubscriberId\\|getMacAddress" \\
  malware_analysis/smali/`}
      />

      <h2>Framework Management</h2>
      <p>
        System apps (Settings, Phone, Contacts) को decompile करने के लिए framework files install करनी पड़ती हैं। हर Android version/manufacturer का अलग framework होता है।
      </p>
      <CodeBlock
        title="Framework Operations"
        code={`# Framework install (system apps के लिए):
apktool if framework-res.apk

# Custom framework (Samsung):
apktool if samsung-framework.apk

# Custom framework (Xiaomi):
apktool if mi-framework.apk

# Installed frameworks list:
ls ~/.local/share/apktool/framework/
# ya
ls /root/.local/share/apktool/framework/

# Framework remove (all):
apktool empty-framework-dir

# Custom framework path:
apktool d system_app.apk -o output --frame-path /custom/frameworks/

# Framework files from device:
adb pull /system/framework/framework-res.apk
# फिर install करो:
apktool if framework-res.apk`}
      />

      <h2>APK Signing</h2>
      <p>
        Recompiled APK unsigned होता है — Android unsigned APK install नहीं करता। Sign करना mandatory है।
      </p>
      <CodeBlock
        title="APK Signing Process"
        code={`# Step 1: Keystore generate करें (एक बार):
keytool -genkey -v -keystore my-key.keystore \\
  -alias myalias -keyalg RSA -keysize 2048 \\
  -validity 10000

# Step 2: jarsigner से sign करें:
jarsigner -verbose -sigalg SHA1withRSA \\
  -digestalg SHA1 -keystore my-key.keystore \\
  modified.apk myalias

# Step 3: zipalign (recommended):
zipalign -v 4 modified.apk aligned.apk

# Step 4: apksigner (best method):
apksigner sign --ks my-key.keystore \\
  --ks-key-alias myalias aligned.apk

# Verify signing:
apksigner verify aligned.apk

# Signature details:
keytool -printcert -jarfile aligned.apk

# Install:
adb install aligned.apk

# Install flags:
adb install -r aligned.apk    # Replace existing
adb install -t aligned.apk    # Allow test APK
adb install -d aligned.apk    # Allow downgrade`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        APKTool को scripts से automate कर सकते हो — batch analysis, automated modification, और testing pipelines।
      </p>
      <CodeBlock
        title="Automated APK Analysis Script"
        code={`#!/bin/bash
# Automated APK Analysis Script

APK=$1
OUTPUT="analysis_$RANDOM"

if [ -z "$APK" ]; then
    echo "Usage: $0 <apk_file>"
    exit 1
fi

echo "[*] Decompiling $APK..."
apktool d "$APK" -o "$OUTPUT" -f

echo "[*] === PACKAGE INFO ==="
head -5 "$OUTPUT/apktool.yml"

echo "[*] === PERMISSIONS ==="
grep "uses-permission" "$OUTPUT/AndroidManifest.xml" | \\
  sed 's/.*android.permission.//' | sed 's/".*//'

echo "[*] === EXPORTED COMPONENTS ==="
grep "exported=\"true\"" "$OUTPUT/AndroidManifest.xml" | head -10

echo "[*] === URLS FOUND ==="
grep -rh "https\\?://" "$OUTPUT/smali/" 2>/dev/null | \\
  sort -u | head -20

echo "[*] === API KEYS ==="
grep -rhi "api_key\\|apikey\\|secret\\|token" \\
  "$OUTPUT/res/values/strings.xml" 2>/dev/null

echo "[*] === NATIVE LIBRARIES ==="
find "$OUTPUT/lib/" -name "*.so" 2>/dev/null

echo "[*] === INTERESTING FILES ==="
find "$OUTPUT/assets/" -type f 2>/dev/null | head -20

echo "[*] Analysis complete: $OUTPUT/"`}
      />

      <CodeBlock
        title="Batch APK Modification Script"
        code={`#!/bin/bash
# Batch APK Modification — Root Detection Bypass

INPUT_DIR="./apks"
OUTPUT_DIR="./modified"
mkdir -p "$OUTPUT_DIR"

for apk in "$INPUT_DIR"/*.apk; do
    name=$(basename "$apk" .apk)
    echo "[*] Processing: $name"

    # Decompile
    apktool d "$apk" -o "/tmp/$name" -f

    # Root detection bypass
    grep -rl "isRooted\\|checkRoot\\|detectRoot" \\
      "/tmp/$name/smali/" | while read file; do
        sed -i 's/const\\/4 v0, 0x0/const\\/4 v0, 0x1/g' "$file"
    done

    # Debug enable
    sed -i 's/debuggable="false"/debuggable="true"/g' \\
      "/tmp/$name/AndroidManifest.xml"

    # Recompile
    apktool b "/tmp/$name" -o "$OUTPUT_DIR/\\${name}_mod.apk"

    # Sign
    apksigner sign --ks my-key.keystore \\
      "$OUTPUT_DIR/\\${name}_mod.apk"

    echo "[+] Done: \\${name}_mod.apk"
    rm -rf "/tmp/$name"
done`}
      />

      <h2>Performance Tuning</h2>
      <p>
        APKTool efficiently use करने के लिए कुछ performance tips:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Selective Decompile:</strong> --no-res या --no-src flags use करो — अगर सिर्फ Smali चाहिए तो resources skip करो, time बचेगा</li>
        <li><strong className="text-white">Framework Cache:</strong> Framework files एक बार install करो — बार-बार decompile करते time framework resolution fast होगी</li>
        <li><strong className="text-white">SSD Storage:</strong> Output directory SSD पर रखो — HDD पर large APKs decompile करने में बहुत time लगता है</li>
        <li><strong className="text-white">RAM Allocation:</strong> Java heap size बढ़ाओ large APKs के लिए: export _JAVA_OPTIONS="-Xmx4g"</li>
        <li><strong className="text-white">Parallel Processing:</strong> Multiple APKs analyze करने के लिए parallel scripts use करो — xargs -P से</li>
        <li><strong className="text-white">Incremental Analysis:</strong> पूरा decompile मत करो — --no-res से sirf Smali, --no-src से sirf resources</li>
      </ul>

      <h2>Reporting and Output Analysis</h2>
      <p>
        APK analysis के results को properly document करना ज़रूरी है:
      </p>
      <CodeBlock
        title="Automated Reporting"
        code={`#!/bin/bash
# APK Analysis Report Generator

APK="$1"
OUTPUT="report_$(date +%Y%m%d_%H%M%S)"

if [ -z "$APK" ]; then
    echo "Usage: $0 <apk_file>"
    exit 1
fi

echo "[*] Decompiling $APK..."
apktool d "$APK" -o "/tmp/$OUTPUT" -f 2>/dev/null

echo "=== APK ANALYSIS REPORT ===" > "$OUTPUT.txt"
echo "Date: $(date)" >> "$OUTPUT.txt"
echo "File: $APK" >> "$OUTPUT.txt"
echo "" >> "$OUTPUT.txt"

# Package info
echo "=== PACKAGE INFO ===" >> "$OUTPUT.txt"
head -10 "/tmp/$OUTPUT/apktool.yml" >> "$OUTPUT.txt"

# Permissions
echo "" >> "$OUTPUT.txt"
echo "=== PERMISSIONS ===" >> "$OUTPUT.txt"
grep "uses-permission" "/tmp/$OUTPUT/AndroidManifest.xml" | \\
  sed 's/.*permission.//' | sed 's/".*//' >> "$OUTPUT.txt"

# Exported components
echo "" >> "$OUTPUT.txt"
echo "=== EXPORTED COMPONENTS ===" >> "$OUTPUT.txt"
grep "exported=\"true\"" "/tmp/$OUTPUT/AndroidManifest.xml" >> "$OUTPUT.txt"

# URLs
echo "" >> "$OUTPUT.txt"
echo "=== NETWORK ENDPOINTS ===" >> "$OUTPUT.txt"
grep -rh "https\\?://" "/tmp/$OUTPUT/smali/" 2>/dev/null | sort -u >> "$OUTPUT.txt"

# Secrets
echo "" >> "$OUTPUT.txt"
echo "=== POTENTIAL SECRETS ===" >> "$OUTPUT.txt"
grep -rhi "api_key\\|secret\\|token\\|password" \\
  "/tmp/$OUTPUT/res/values/strings.xml" 2>/dev/null >> "$OUTPUT.txt"

echo "[+] Report saved: $OUTPUT.txt"
rm -rf "/tmp/$OUTPUT"`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Build failed — brut.common.BrutException', a: 'Latest APKTool version install करो। Purani versions में bugs होती हैं। GitHub releases से latest download करो।' },
          { q: 'Could not decode arsc file', a: 'Decompile में --keep-broken-res flag add करो। Ya specific framework install करो: apktool if framework-res.apk' },
          { q: 'Framework not found error', a: 'System framework install करो। Device से framework-res.apk pull करो और apktool if से install करो।' },
          { q: 'App crash after modification', a: 'Smali syntax check करो — registers count, method signatures, labels सब match होने चाहिए। Logcat से error dekho।' },
          { q: 'Install failed — signature mismatch', a: 'Pehle purana version uninstall करो: adb uninstall com.package.name। फिर naya signed APK install करो।' },
          { q: 'Multi-dex app properly decompile नहीं हो रहा', a: 'Latest APKTool use करो — multi-dex automatically handle होता है। smali_classes2/ folder check करो।' },
          { q: 'Resources garbled/incorrect दिख रहे', a: 'Correct framework install करो। Manufacturer-specific framework chahiye (Samsung, Xiaomi, etc.)।' },
          { q: 'Smali edit के बाद app crash', a: 'Original Smali backup रखो। .locals count check करो। invoke-virtual vs invoke-static confusion common है।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Comparison with Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">APKTool</th>
              <th className="text-left py-2 px-3 text-neon-green">jadx</th>
              <th className="text-left py-2 px-3 text-neon-green">apk-editor</th>
              <th className="text-left py-2 px-3 text-neon-green">Android Studio</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Decompile</td><td className="py-2 px-3">Smali code</td><td className="py-2 px-3">Java code</td><td className="py-2 px-3">Resources only</td><td className="py-2 px-3">APK Analyzer</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Recompile</td><td className="py-2 px-3">✅ Yes</td><td className="py-2 px-3">❌ No</td><td className="py-2 px-3">✅ Yes</td><td className="py-2 px-3">❌ No</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Smali Edit</td><td className="py-2 px-3">✅ Yes</td><td className="py-2 px-3">❌ No</td><td className="py-2 px-3">❌ No</td><td className="py-2 px-3">❌ No</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Java Code</td><td className="py-2 px-3">❌ No (Smali)</td><td className="py-2 px-3">✅ Yes</td><td className="py-2 px-3">❌ No</td><td className="py-2 px-3">✅ Yes (source)</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Resource Edit</td><td className="py-2 px-3">✅ Full</td><td className="py-2 px-3">❌ Read-only</td><td className="py-2 px-3">✅ Full</td><td className="py-2 px-3">✅ Full</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">GUI</td><td className="py-2 px-3">❌ CLI only</td><td className="py-2 px-3">✅ GUI + CLI</td><td className="py-2 px-3">✅ GUI</td><td className="py-2 px-3">✅ GUI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Speed</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Slow</td></tr>
            <tr><td className="py-2 px-3 text-white">Best For</td><td className="py-2 px-3">Modify + Recompile</td><td className="py-2 px-3">Code Analysis</td><td className="py-2 px-3">Quick Edits</td><td className="py-2 px-3">Development</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Detection and Defense</h2>
      <p>
        App developers को APKTool-based attacks से बचने के लिए कई defenses implement करने चाहिए:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Code Obfuscation:</strong> ProGuard/R8 use करो — class और method names obfuscate होंगे</li>
        <li><strong className="text-white">Root Detection:</strong> Multiple root detection methods implement करो — SafetyNet, custom checks</li>
        <li><strong className="text-white">SSL Pinning:</strong> Certificate pinning implement करो — MITM attacks prevent होंगे</li>
        <li><strong className="text-white">Anti-Tampering:</strong> APK signature verification — modified APK detect होगा</li>
        <li><strong className="text-white">Integrity Checks:</strong> Runtime code integrity verification — Smali modification detect होगा</li>
        <li><strong className="text-white">Native Code:</strong> Sensitive logic C/C++ में लिखो — Smali level पर edit नहीं होगा</li>
        <li><strong className="text-white">Encryption:</strong> Hardcoded strings encrypt करो — static analysis में नहीं दिखेंगे</li>
        <li><strong className="text-white">Server-Side Validation:</strong> Critical checks server पर करो — client-side bypass हो सकती है</li>
        <li><strong className="text-white">Play Integrity API:</strong> Google का integrity check — tampered apps detect करता है</li>
        <li><strong className="text-white">Multi-Layer Security:</strong> Single defense sufficient नहीं है — multiple layers implement करो</li>
        <li><strong className="text-white">Runtime Checks:</strong> APK hash verify करो runtime पर — modification detect होगा</li>
        <li><strong className="text-white">Server-Side Logic:</strong> Critical business logic server पर रखो — client-side Smali bypass हो सकती है</li>
        <li><strong className="text-white">Tamper Detection:</strong> Signature verification + integrity checks + environment detection — triple layer security</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        APKTool practice के लिए intentionally vulnerable Android apps available हैं:
      </p>
      <CodeBlock
        title="Practice Apps"
        code={`# DIVA (Damn Insecure and Vulnerable App):
# https://github.com/payatu/diva-android
# Download aur decompile करो:
apktool d diva.apk -o diva_analysis

# InsecureBankv2:
# https://github.com/dineshshetty/InsecureBankv2
apktool d InsecureBankv2.apk -o insecurebank_analysis

# MSTG Crackmes (OWASP):
# https://github.com/OWASP/owasp-mstg/tree/master/Crackmes
# Various difficulty levels available

# Practice checklist:
# 1. Permissions analyze करो
# 2. Exported components dhundho
# 3. Hardcoded secrets dhundho
# 4. Network calls analyze करो
# 5. Root detection bypass करो
# 6. SSL pinning bypass करो
# 7. App logic modify करो
# 8. Recompile aur test करो

# Android emulator setup:
# Android Studio → AVD Manager → Create Virtual Device
# ya Genymotion use करो`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Advanced APKTool Usage"
        code={`# === Multi-APK Analysis ===
# Split APKs analyze करो:
for apk in *.apk; do
    apktool d "$apk" -o "decompiled_$(basename $apk .apk)"
done

# === Automated String Extraction ===
# सभी strings extract करो:
find decompiled/res/values/ -name "strings.xml" \\
  -exec cat {} \\; | grep "<string" | sort -u

# === Smali Search Patterns ===
# Password-related methods:
grep -rn "password\\|passwd\\|credential" decompiled/smali/

# Database operations:
grep -rn "SQLite\\|SQLiteDatabase\\|Room" decompiled/smali/

# WebView usage (XSS possible):
grep -rn "WebView\\|loadUrl\\|addJavascriptInterface" decompiled/smali/

# Intent-based communication:
grep -rn "getIntent\\|putExtra\\|getStringExtra" decompiled/smali/

# === Custom Framework Build ===
# Manufacturer-specific framework:
# 1. Device से /system/framework/ pull करो
# 2. framework-res.apk install करो
# 3. Manufacturer-specific APKs भी install करो

# === APK Comparison ===
# दो APK versions compare करो:
diff -r decompiled_v1/ decompiled_v2/ --brief`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'Kya APKTool sirf Android ke liye hai?', a: 'Haan, APKTool specifically Android APK files ke liye design kiya gaya hai. iOS apps ke liye class-dump, Frida, ya Hopper jaise tools use hote hain.' },
          { q: 'Smali kya hai aur kyun important hai?', a: 'Smali Dalvik bytecode ka human-readable assembly language hai. Java code compile hokar DEX banta hai, APKTool use Smali mein convert karta hai. Smali edit karke app ka core logic change kar sakte ho — root bypass, license bypass, etc.' },
          { q: 'Kya APKTool se Java code mil sakta hai?', a: 'APKTool sirf Smali deta hai. Java code ke liye jadx use karo. Best workflow: jadx se Java code samjho, APKTool se Smali edit karo, APKTool se recompile karo.' },
          { q: 'Root detection kaise bypass karein?', a: 'Smali code mein root check methods dhundho (isRooted, checkRoot, Superuser, su). Un methods ko modify karke hamesha false return karo. Ya network_security_config.xml modify karo.' },
          { q: 'SSL pinning kaise bypass karein?', a: 'Network security config modify karo — user certificates trust karo. Ya TrustManager aur HostnameVerifier classes modify karo Smali mein. Frida se bhi SSL pinning bypass kar sakte ho.' },
          { q: 'Multi-dex apps kaise handle karein?', a: 'APKTool automatically multi-dex handle karta hai. smali/, smali_classes2/, smali_classes3/ folders bante hain. Sab folders mein Smali code hota hai.' },
          { q: 'Framework kyun chahiye system apps ke liye?', a: 'System apps Android framework resources reference karti hain. Framework install karne se APKTool proper resource names resolve kar paata hai. Bina framework ke garbled names aate hain.' },
          { q: 'Kya modified APK Play Store par upload kar sakte hain?', a: 'Nahi! Modified APK upload karna Terms of Service violation hai aur illegal bhi ho sakta hai. Sirf authorized testing ke liye use karo.' },
          { q: 'Split APKs kaise handle karein?', a: 'APKTool v2.5+ automatically split APKs support karta hai। Base APK और split APKs separately decompile करो। Bundletool se APKs extract करो App Bundle से।' },
          { q: 'Obfuscated code kaise samjhein?', a: 'ProGuard obfuscated code में class names a, b, c होते हैं। JADX + APKTool combo use करो। Method signatures और string references से logic samjho। Control flow graph tools use करो।' },
          { q: 'Native libraries (.so) kaise analyze karein?', a: 'lib/ folder से .so files extract करो। Ghidra ya IDA Pro में load करो। JNI functions find करो — Java_com_package_method format में होते हैं। Frida से native functions hook करो।' },
          { q: 'App Bundle (AAB) kaise handle karein?', a: 'bundletool se AAB to APKs convert करो: java -jar bundletool.jar build-apks --bundle=app.aab --output=app.apks। फिर base APK extract करो और APKTool से decompile करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Real-World Case Studies</h2>
      <p>
        APKTool real-world security research में extensively use होता है। यहाँ practical scenarios हैं:
      </p>
      <p>
        <strong className="text-white">Banking App Vulnerability:</strong> एक security researcher ने Indian payment app का analysis किया। APKTool से decompile करने पर hardcoded API keys strings.xml में मिलीं। Smali code में SSL pinning check bypass करने वाला method easily identifiable था। Network security config में user certificates trusted थे — MITM attack possible। Responsible disclosure से bug fix हुआ।
      </p>
      <p>
        <strong className="text-white">Spyware Analysis:</strong> Security firm को suspicious app मिली जो users का data exfiltrate कर रही थी। APKTool से decompile करने पर smali में C2 server URLs मिलीं। Base64 encoded strings में hidden commands थे। SharedPreferences में stolen data store हो रहा था। यह report CERT-In को submit की गई।
      </p>
      <p>
        <strong className="text-white">Adware Campaign:</strong> Google Play पर multiple adware apps मिलीं। APKTool से batch analysis करके common patterns identify किए — same C2 domain, same obfuscation technique, same ad SDK abuse। यह data Google को share किया गया और 50+ apps remove हुईं।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        APKTool को दूसरे tools के साथ combine करके complete Android security testing workflow बना सकते हो:
      </p>
      <CodeBlock
        title="Multi-Tool Android Analysis"
        code={`# === APKTool + JADX Combo ===
# Step 1: JADX से Java code समझो:
jadx target.apk -d /tmp/jadx_out/
# Java code पढ़ो — logic समझो

# Step 2: APKTool से Smali edit करो:
apktool d target.apk -o /tmp/apktool_out/
# Smali में changes करो (root bypass, etc.)

# Step 3: Recompile और sign:
apktool b /tmp/apktool_out/ -o modified.apk
apksigner sign --ks my.keystore modified.apk

# === APKTool + Frida ===
# APKTool से class names और method names find करो:
grep -r "isPremium\|checkLicense" /tmp/apktool_out/smali/
# फिर Frida से runtime hook:
frida -U -f com.target.app -l hook.js

# === APKTool + MobSF ===
# MobSF में APK upload करो — static analysis report मिलेगा
# Report की findings APKTool से verify करो:
apktool d target.apk -o /tmp/verify/
# Smali में vulnerable code locate करो

# === APKTool + Burp Suite ===
# 1. APKTool से network_security_config.xml modify करो
# 2. SSL pinning bypass करो
# 3. Recompile + sign + install
# 4. Burp Suite से traffic capture करो

# === APKTool + ADB ===
# Device से APK pull:
adb pull /data/app/com.target.app-1/base.apk
# Decompile:
apktool d base.apk -o /tmp/pulled_app/
# Modify + recompile + install:
adb install modified.apk`}
      />

      <h2>Alternatives</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Tool</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">खासियत</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">jadx</td><td className="py-2 px-3">APK to readable Java code</td><td className="py-2 px-3">Best for code analysis, GUI available</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">ByteCode Viewer</td><td className="py-2 px-3">Multi-tool Java/Android decompiler</td><td className="py-2 px-3">Multiple decompilers in one GUI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Frida</td><td className="py-2 px-3">Runtime instrumentation aur hooking</td><td className="py-2 px-3">Live modification without recompile</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">MobSF</td><td className="py-2 px-3">Automated mobile security framework</td><td className="py-2 px-3">Automated analysis + reporting</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Dex2Jar</td><td className="py-2 px-3">DEX to JAR conversion</td><td className="py-2 px-3">Java tools se analyze karne ke liye</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">JD-GUI</td><td className="py-2 px-3">Java decompiler GUI</td><td className="py-2 px-3">Quick Java code viewing</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">apk-editor-studio</td><td className="py-2 px-3">Visual APK editor</td><td className="py-2 px-3">GUI-based quick edits</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">MT Manager</td><td className="py-2 px-3">Android APK editor (mobile)</td><td className="py-2 px-3">Phone se hi APK edit karo</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>APKTool + jadx combo use karein — APKTool se resources, jadx se Java code</li>
          <li>Smali edit karne se pehle jadx se Java code samjho — logic समझ आने के बाद edit करो</li>
          <li>AndroidManifest.xml mein permissions, exported components, debuggable flag hamesha check करो</li>
          <li>strings.xml mein hardcoded API keys, URLs, passwords dhundho — common vulnerability है</li>
          <li>lib/ folder mein native libraries (.so) hain — advanced reverse engineering chahiye unke liye</li>
          <li>Signing ke liye apksigner use karo jarsigner se better hai — V2/V3 signing support</li>
          <li>Root detection aur SSL pinning bypass common tasks hain pentesting mein</li>
          <li>Hamesha lab environment mein practice karo pehle — real apps पर testing से पहले</li>
          <li>Smali edit करने से पहले original backup रखो — apktool.yml में original hash store होता है</li>
          <li>Multi-dex apps में सभी smali_classes folders check करो — important code कभी-कभी secondary DEX में होता है</li>
          <li>assets/ folder में config files, databases, और encrypted data छुपा होता है — hamesha check करो</li>
          <li>lib/ folder में .so files native code contain करती हैं — Ghidra से analyze करो</li>
          <li>APK comparison के लिए diff -r use करो — दो versions के बीच changes easily दिखेंगे</li>
          <li>Build errors के लिए --keep-broken-res flag use करो — partial decompile भी useful होता है</li>
          <li>Android App Bundle (AAB) files के लिए bundletool use करो — split APKs extract करो</li>
          <li>Malware analysis में strings, URLs, और crypto calls search करो — pattern recognition important है</li>
          <li>Framework files cache maintain करो — हर Android version का framework save रखो future analysis के लिए</li>
        </ul>
      </div>

      <div className="warning-box mt-4">
        <strong>⚠️ Final Warning:</strong> APK modification aur redistribution bina permission ke illegal है। Play Store se apps download karke modify karna Terms of Service violation है। Sirf authorized testing aur apni apps ke liye use करो। Document everything — pentest report mein modifications detail से लिखो। Modified APKs को कभी distribute मत करो। Har test session ka log rakho — kya modify kiya, kyun kiya, kya result mila। Client ko clean report do without revealing exploitation techniques। Responsible disclosure follow karo — vulnerabilities privately report karo vendor ko।
      </div>

      <h2>Scripting and Automation</h2>
      <p>
        APKTool को Python scripts से automate करके batch analysis कर सकते हो। यह malware analysis और large-scale app audits में बहुत useful है:
      </p>
      <CodeBlock
        title="Batch APK Analysis Script"
        code={`#!/usr/bin/env python3
"""Batch APK Analyzer - APKTool based"""

import subprocess
import os
import json
import re
from pathlib import Path

class APKAnalyzer:
    def __init__(self, apk_path):
        self.apk_path = apk_path
        self.output_dir = f"/tmp/apk_analysis_{Path(apk_path).stem}"

    def decompile(self):
        """APKTool se decompile karo"""
        cmd = f"apktool d {self.apk_path} -o {self.output_dir} -f"
        subprocess.run(cmd, shell=True, capture_output=True)

    def extract_permissions(self):
        """AndroidManifest se permissions extract karo"""
        manifest = os.path.join(self.output_dir, "AndroidManifest.xml")
        if not os.path.exists(manifest):
            return []
        with open(manifest) as f:
            content = f.read()
        return re.findall(r'permission\\.([\\w.]+)', content)

    def find_urls(self):
        """Smali files se URLs find karo"""
        urls = set()
        smali_dir = os.path.join(self.output_dir, "smali")
        if not os.path.exists(smali_dir):
            return urls
        for root, dirs, files in os.walk(smali_dir):
            for f in files:
                if f.endswith(".smali"):
                    with open(os.path.join(root, f)) as fh:
                        content = fh.read()
                    found = re.findall(r'https?://[^\\s"]+', content)
                    urls.update(found)
        return urls

    def find_secrets(self):
        """Hardcoded secrets find karo"""
        secrets = []
        patterns = ["api_key", "secret", "token", "password"]
        strings_xml = os.path.join(self.output_dir, "res/values/strings.xml")
        if os.path.exists(strings_xml):
            with open(strings_xml) as f:
                for line in f:
                    for p in patterns:
                        if p in line.lower():
                            secrets.append(line.strip())
        return secrets

    def analyze(self):
        """Full analysis karo"""
        self.decompile()
        result = {
            "file": self.apk_path,
            "permissions": self.extract_permissions(),
            "urls": list(self.find_urls()),
            "secrets": self.find_secrets()
        }
        os.system(f"rm -rf {self.output_dir}")
        return result

# Batch analysis
for apk in Path("/apks/").glob("*.apk"):
    analyzer = APKAnalyzer(str(apk))
    report = analyzer.analyze()
    print(json.dumps(report, indent=2))`}
      />

    </TutorialLayout>
  )
}
