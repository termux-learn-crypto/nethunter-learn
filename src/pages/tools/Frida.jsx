import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Frida() {
  return (
    <TutorialLayout
      title="frida"
      subtitle="Dynamic instrumentation — running apps ko hook aur modify karo"
      icon="🔧"
      prev={{ to: '/tool/hcxdumptool', label: 'hcxdumptool' }}
      next={{ to: '/tool/drozer', label: 'drozer' }}
    >
      <h2>What is Frida?</h2>
      <p>
        Frida dynamic instrumentation toolkit है जो running processes को live hook करने की capability देता है। बिना source code के app के behavior को runtime पर modify, monitor और control कर सकते हो। Frida cross-platform है — Android, iOS, Windows, macOS, Linux सब support करता है।
      </p>
      <p>
        Frida JavaScript-based scripting use करता है — आपको JS script लिखना होता है जो target process के अंदर inject होता है। Mobile security testing में Frida king है: SSL pinning bypass, root/jailbreak detection bypass, function hooking, API monitoring, memory inspection — सब एक tool से।
      </p>
      <p>
        Frida को Ole André Vadla Ravnås ने 2011 में बनाया था। यह C, JavaScript, और Python में लिखा गया है। इसका architecture client-server model पर काम करता है — frida-server target device पर चलता है, और frida client (आपकी machine) से connect करके scripts inject करते हो।
      </p>
      <p>
        Frida का core GumJS engine है जो V8 JavaScript engine embed करता है। यह agent-based architecture use करता है — target process में एक small agent inject होता है जो JavaScript code execute करता है। यह agent C में लिखा गया है और V8 engine के through JavaScript interpret करता है। Frida CodeShare platform पर community scripts available हैं जो directly use कर सकते हो।
      </p>
      <p>
        Frida की सबसे बड़ी खासियत है इसकी simplicity — कुछ lines के JavaScript से complex hooking tasks complete हो जाते हैं। यह reverse engineering, malware analysis, app security testing, और vulnerability research में extensively इस्तेमाल होता है। Bug bounty programs में mobile app testing के लिए Frida essential tool माना जाता है।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Frida केवल अधिकृत security testing और अपने systems पर ही use करें। बिना permission के app modification अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत software modification अपराध हो सकता है।
      </div>

      <h2>History of Frida</h2>
      <p>
        Frida की शुरुआत 2011 में हुई जब Ole André Vadla Ravnås (Norway) ने एक dynamic instrumentation framework बनाया। Ole एक experienced reverse engineer थे जिन्होंने Valgrind और GDB जैसे tools पर काम किया था। उनका vision था — एक instrumentation tool बनाना जो cross-platform हो और JavaScript जैसी easy language में scripting support करे।
      </p>
      <p>
        2014 में Frida ने JavaScript API introduce किया जिससे scripts लिखना बहुत आसान हो गया। इससे पहले Python bindings use होती थीं लेकिन JavaScript API ने developers को target process के अंदर directly code run करने की capability दी। 2016 में Frida ने iOS support add किया और mobile security testing में इसकी popularity बढ़ गई।
      </p>
      <p>
        आज Frida GitHub पर 15,000+ stars के साथ सबसे popular dynamic instrumentation tool है। Bug bounty hunters, penetration testers, और malware analysts सब इस्तेमाल करते हैं। Frida CodeShare platform पर 500+ community scripts available हैं। यह LGPL license के तहत open source है और commercial use भी free है।
      </p>
      <p>
        Frida का ecosystem continuously grow हो रहा है। Objection, AppMon, r2frida जैसे tools Frida के ऊपर built हैं। OWASP MASTG (Mobile Application Security Testing Guide) में Frida को recommended tool के रूप में mention किया गया है। Mobile security certifications जैसे GMOB में भी Frida knowledge required है।
      </p>

      <h2>How Frida Works?</h2>
      <p>
        Frida का architecture client-server model पर based है। यह target process की memory में JavaScript engine inject करता है और उस engine के through code execute करता है। यह process memory space में directly operate करता है जिससे function hooking, memory manipulation, और code modification possible है।
      </p>
      <p>
        Frida का injection mechanism platform-specific है। Linux पर ptrace, Windows पर CreateRemoteThread, macOS पर task_ports, और Android पर linker injection use होता है। यह injection technique इतनी fast है कि target process को पता भी नहीं चलता (unless anti-frida checks implement हों)।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">frida-server:</strong> Target device पर चलता है — process को inject करता है। यह standalone binary है जो root access में run होता है</li>
        <li><strong className="text-white">frida-client:</strong> आपकी machine पर — scripts भेजता है server को। frida-tools Python package में install होता है</li>
        <li><strong className="text-white">JavaScript Engine (V8):</strong> Target process में embed होता है। यह Chrome V8 engine है जो fast JavaScript execution करता है</li>
        <li><strong className="text-white">Code Injection:</strong> Target process की memory में JS code inject होता है। Injection platform-specific mechanism से होता है</li>
        <li><strong className="text-white">Function Hooking:</strong> Native और Java/ObjC functions को intercept करता है। Interceptor API से before/after hooks लगते हैं</li>
        <li><strong className="text-white">IPC Bridge:</strong> Client और injected script के बीच communication। यह bidirectional channel है जो JSON messages use करता है</li>
        <li><strong className="text-white">GumJS Engine:</strong> Lightweight JavaScript engine जो embedded use के लिए optimized है</li>
        <li><strong className="text-white">Stalker:</strong> Code coverage engine जो instruction-level tracing करता है</li>
        <li><strong className="text-white">Cloak:</strong> Frida artifacts को hide करता है detection से बचने के लिए</li>
      </ul>

      <h2>Installation</h2>
      <p>
        Frida install करने के लिए attacker machine पर frida-tools और target device पर frida-server दोनों चाहिए। Version matching बहुत ज़रूरी है — client और server का version same होना चाहिए।
      </p>
      <CodeBlock
        title="Frida Install & Setup"
        code={`# Attacker machine पर:
pip3 install frida-tools

# वर्जन चेक:
frida --version

# Python bindings भी install करो (scripting के लिए):
pip3 install frida

# Android device के लिए frida-server download:
# https://github.com/frida/frida/releases
# अपनी device architecture के हिसाब से choose करो (arm64/x86)

# Device पर push:
adb push frida-server /data/local/tmp/
adb shell "chmod 755 /data/local/tmp/frida-server"

# Start:
adb shell "su -c /data/local/tmp/frida-server &"

# Connection test:
frida-ps -U

# frida-server background में run करने के लिए:
# Termux में: nohup frida-server &
# ya Magisk module use करो auto-start के लिए`}
      />
      <CodeBlock
        title="iOS Installation"
        code={`# Jailbroken iOS device पर:
# Cydia/Sileo से Frida install करो
# ya manual:
# https://github.com/frida/frida/releases
# frida-XX.X.X-ios-universal.gz download करो

# Device पर push:
scp frida-server root@<iOS-IP>:/usr/local/bin/
ssh root@<iOS-IP> "chmod +x /usr/local/bin/frida-server"

# Start:
ssh root@<iOS-IP> "/usr/local/bin/frida-server &"

# Connection test:
frida-ps -U

# frida-server auto-start:
# LaunchDaemon plist create करो
# /Library/LaunchDaemons/re.frida.server.plist`}
      />
      <CodeBlock
        title="Desktop Installation"
        code={`# Windows, macOS, Linux — सब पर same command:
pip3 install frida-tools

# macOS में Apple Silicon support:
pip3 install frida-tools --break-system-packages
# ya virtual environment use करो

# Desktop process attach:
frida -n "Chrome" -l script.js
frida -n "Safari" -l script.js
frida -n "target_app" -l script.js

# Remote device (network):
frida -H 192.168.1.100:27042 -l script.js`}
      />

      <h2>Basic Usage</h2>
      <p>
        Frida इस्तेमाल करने का basic flow है — target process identify करो, script लिखो, और inject करो। तीन तरीके हैं: spawn (app restart करके attach), attach (running app), और gadget (embedded agent)।
      </p>
      <CodeBlock
        title="Process Discovery"
        code={`# Running processes list (USB device):
frida-ps -U

# Remote device:
frida-ps -H 192.168.1.100:27042

# Process details (name, PID, identifier):
frida-ps -Uai

# Installed apps list:
frida-ps -Uia

# Specific process search:
frida-ps -U | grep -i target`}
      />
      <CodeBlock
        title="App Injection Methods"
        code={`# Method 1: Spawn (app restart करके attach)
frida -U -f com.target.app -l script.js --no-pause
# -f = Force spawn (fresh start)
# --no-pause = Auto-resume after spawn

# Method 2: Attach (running app)
frida -U com.target.app -l script.js
# ya PID से:
frida -U -p 1234 -l script.js

# Method 3: Gadget (embedded agent)
frida -U Gadget -l script.js

# Output file में save:
frida -U -f com.target.app -l script.js -o output.log

# Multiple scripts load:
frida -U -f com.target.app -l script1.js -l script2.js

# Timeout set:
frida -U -f com.target.app -l script.js --timeout=30`}
      />
      <CodeBlock
        title="Inline Script Execution"
        code={`# Quick one-liner:
frida -U -f com.target.app -e "console.log('Hello from Frida!')"

# Function call:
frida -U com.target.app -e "
Java.perform(function() {
    var cls = Java.use('com.target.app.Utils');
    console.log(cls.getVersion());
});
"

# Memory dump:
frida -U com.target.app -e "
console.log(Process.enumerateModules());
"

# Module list:
frida -U com.target.app -e "
Process.enumerateModules().forEach(function(m) {
    console.log(m.name + ' @ ' + m.base);
});
"`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-U</td><td className="py-2 px-3">USB device (Android/iOS)</td><td className="py-2 px-3 font-mono text-xs">frida-ps -U</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-f package</td><td className="py-2 px-3">Force spawn (app restart करके attach)</td><td className="py-2 px-3 font-mono text-xs">frida -U -f com.app</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-l script.js</td><td className="py-2 px-3">JavaScript script load करें</td><td className="py-2 px-3 font-mono text-xs">-l ssl-bypass.js</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-H host:port</td><td className="py-2 px-3">Remote device connect करें</td><td className="py-2 px-3 font-mono text-xs">-H 192.168.1.5:27042</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p PID</td><td className="py-2 px-3">Process ID से attach करें</td><td className="py-2 px-3 font-mono text-xs">frida -U -p 1234</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-n name</td><td className="py-2 px-3">Process name से attach करें</td><td className="py-2 px-3 font-mono text-xs">frida -U -n "Chrome"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-o file</td><td className="py-2 px-3">Output file में save करें</td><td className="py-2 px-3 font-mono text-xs">-o output.log</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--no-pause</td><td className="py-2 px-3">Spawn के तुरंत बाद resume करें</td><td className="py-2 px-3 font-mono text-xs">--no-pause</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-e code</td><td className="py-2 px-3">Inline JavaScript code execute करें</td><td className="py-2 px-3 font-mono text-xs">-e "console.log('hi')"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-D device</td><td className="py-2 px-3">Specific device ID select करें</td><td className="py-2 px-3 font-mono text-xs">-D emulator-5554</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--timeout sec</td><td className="py-2 px-3">Timeout set करें (seconds)</td><td className="py-2 px-3 font-mono text-xs">--timeout=30</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-C</td><td className="py-2 px-3">CodeShare URL से script load करें</td><td className="py-2 px-3 font-mono text-xs">-C abc123</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--realm</td><td className="py-2 px-3">Script realm (early/late)</td><td className="py-2 px-3 font-mono text-xs">--realm=early</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-O file</td><td className="py-2 px-3">Output as JSON lines</td><td className="py-2 px-3 font-mono text-xs">-O output.jsonl</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--pause</td><td className="py-2 px-3">Spawn के बाद pause रहें</td><td className="py-2 px-3 font-mono text-xs">--pause</td></tr>
          </tbody>
        </table>
      </div>

      <h2>SSL Pinning Bypass</h2>
      <p>
        SSL pinning bypass Frida का सबसे popular use case है — HTTPS traffic intercept करने के लिए। Mobile apps SSL pinning implement करती हैं जिससे proxy tools (Burp, mitmproxy) traffic नहीं देख पाते। Frida से pinning code को runtime पर bypass कर सकते हो।
      </p>
      <p>
        SSL pinning bypass करने के लिए app की SSL implementation identify करनी होती है। हर app अलग library use करती है — OkHttp, Volley, HttpURLConnection, ya custom implementation। Universal bypass scripts सब implementations handle करते हैं, लेकिन कुछ apps custom pinning use करती हैं जिसके लिए manual hooking ज़रूरी है।
      </p>
      <CodeBlock
        title="Universal SSL Unpinning"
        code={`// ssl-unpinning.js — सभी common implementations bypass
Java.perform(function() {
    console.log("[+] SSL Pinning Bypass loaded");

    // 1. Android system TrustManager bypass
    var TrustManagerImpl = Java.use(
        'com.android.org.conscrypt.TrustManagerImpl'
    );
    TrustManagerImpl.verifyChain.implementation = function() {
        console.log("[+] TrustManager bypassed");
        return arguments[0];
    };

    // 2. OkHttp3 CertificatePinner bypass
    try {
        var CertificatePinner = Java.use(
            'okhttp3.CertificatePinner'
        );
        CertificatePinner.check.overload(
            'java.lang.String', 'java.util.List'
        ).implementation = function() {
            console.log("[+] OkHttp3 pinning bypassed");
            return;
        };
    } catch(e) {
        console.log("[-] OkHttp3 not found");
    }

    // 3. WebViewClient bypass
    try {
        var WebViewClient = Java.use(
            'android.webkit.WebViewClient'
        );
        WebViewClient.onReceivedSslError.implementation = function(
            view, handler, error
        ) {
            console.log("[+] WebView SSL error bypassed");
            handler.proceed();
        };
    } catch(e) {}

    // 4. HttpsURLConnection bypass
    var HttpsURLConnection = Java.use(
        'javax.net.ssl.HttpsURLConnection'
    );
    HttpsURLConnection.setSSLSocketFactory.implementation = function() {
        console.log("[+] SSLSocketFactory bypassed");
        return;
    };

    // 5. TrustManager array bypass
    var TrustManager = Java.use('javax.net.ssl.TrustManager');
    var X509TrustManager = Java.use(
        'javax.net.ssl.X509TrustManager'
    );
    var SSLContext = Java.use('javax.net.ssl.SSLContext');

    // Custom TrustManager create करो जो सब accept करे
    var TrustAllManager = Java.registerClass({
        name: 'com.frida.TrustAllManager',
        implements: [X509TrustManager],
        methods: {
            checkClientTrusted: function(chain, authType) {},
            checkServerTrusted: function(chain, authType) {},
            getAcceptedIssuers: function() { return []; }
        }
    });

    var TrustManagers = [TrustAllManager.$new()];
    var SSLContextInit = SSLContext.getInstance("TLS");
    SSLContextInit.init(null, TrustManagers, null);
    HttpsURLConnection.setDefaultSSLSocketFactory(
        SSLContextInit.getSocketFactory()
    );

    console.log("[+] All SSL pinning bypassed!");
});

# Run:
# frida -U -f com.target.app -l ssl-unpinning.js --no-pause`}
      />
      <CodeBlock
        title="OkHttp3 Specific Bypass"
        code={`// okhttp3-bypass.js — OkHttp3 certificate pinner
Java.perform(function() {
    // CertificatePinner.check bypass
    var CertificatePinner = Java.use(
        'okhttp3.CertificatePinner'
    );

    // All overloads bypass करो:
    CertificatePinner.check.overload(
        'java.lang.String', 'java.util.List'
    ).implementation = function(hostname, peerCerts) {
        console.log('[+] OkHttp3 check bypassed for: ' + hostname);
        return; // Skip check
    };

    // OkHttp3 Interceptor bypass
    try {
        var CertificateChainCleaner = Java.use(
            'okhttp3.internal.tls.CertificateChainCleaner'
        );
        CertificateChainCleaner.clean.implementation = function(
            chain, hostname
        ) {
            console.log('[+] Chain cleaner bypassed');
            return chain;
        };
    } catch(e) {}

    // Network Security Config bypass (Android 7+)
    try {
        var NetworkSecurityConfig = Java.use(
            'android.security.net.config.NetworkSecurityConfig'
        );
        NetworkSecurityConfig.isCleartextTrafficPermitted
            .implementation = function() {
            return true;
        };
    } catch(e) {}

    console.log('[+] OkHttp3 SSL bypass complete!');
});`}
      />
      <CodeBlock
        title="iOS SSL Pinning Bypass"
        code={`// ios-ssl-bypass.js — iOS SSL pinning bypass
if (ObjC.available) {
    // NSURLSession bypass
    var resolver = ObjC.classes.AFSecurityPolicy;
    resolver['- evaluateServerTrust:forDomain:'] = ObjC.implement(
        resolver['- evaluateServerTrust:forDomain:'],
        function(self, cmd, trust, domain) {
            console.log('[+] AFSecurityPolicy bypassed');
            return true;
        }
    );

    // URLSession delegate bypass
    var handler = ObjC.classes.SSLHandshake;
    Interceptor.attach(handler, {
        onEnter: function(args) {
            console.log('[+] SSL handshake intercepted');
        },
        onLeave: function(retval) {
            retval.replace(0); // errSecSuccess
        }
    });

    // TrustKit bypass
    try {
        var TrustKit = ObjC.classes.TSKPinVerifier;
        TrustKit['- verifyPublicKeyPin:'] = ObjC.implement(
            TrustKit['- verifyPublicKeyPin:'],
            function(self, cmd, serverTrust) {
                console.log('[+] TrustKit bypassed');
                return true;
            }
        );
    } catch(e) {}

    console.log('[+] iOS SSL pinning bypassed!');
}`}
      />

      <h2>Root/Jailbreak Detection Bypass</h2>
      <p>
        Root detection bypass mobile testing का दूसरा सबसे common use case है। Apps root detection implement करती हैं जिससे rooted devices पर run नहीं होतीं। Frida से detection code को runtime पर bypass कर सकते हो।
      </p>
      <CodeBlock
        title="Android Root Detection Bypass"
        code={`// root-bypass.js — Comprehensive Android root bypass
Java.perform(function() {
    console.log("[+] Root Detection Bypass loaded");

    // 1. RootBeer library bypass
    try {
        var RootBeer = Java.use(
            'com.scottyab.rootbeer.RootBeer'
        );
        RootBeer.isRooted.implementation = function() {
            console.log("[+] RootBeer bypassed");
            return false;
        };
        RootBeer.isRootedWithoutBusyBoxCheck.implementation = function() {
            return false;
        };
    } catch(e) {
        console.log("[-] RootBeer not found");
    }

    // 2. Runtime.exec bypass (su command detect)
    var Runtime = Java.use('java.lang.Runtime');
    Runtime.exec.overload('java.lang.String').implementation = function(cmd) {
        if (cmd.includes("su") || cmd.includes("which") ||
            cmd.includes("busybox") || cmd.includes("magisk")) {
            console.log("[+] Blocked command: " + cmd);
            return null;
        }
        return this.exec(cmd);
    };

    // 3. File.exists bypass
    var File = Java.use('java.io.File');
    File.exists.implementation = function() {
        var path = this.getAbsolutePath();
        var suspicious = [
            "su", "Superuser", "busybox", "magisk",
            "/system/app/Superuser.apk",
            "/system/xbin/daemonsu",
            "/data/local/tmp/frida-server"
        ];
        for (var i = 0; i < suspicious.length; i++) {
            if (path.includes(suspicious[i])) {
                console.log("[+] Hidden file: " + path);
                return false;
            }
        }
        return this.exists();
    };

    // 4. System.getProperty bypass
    var System = Java.use('java.lang.System');
    System.getProperty.overload('java.lang.String')
        .implementation = function(key) {
        if (key === "ro.build.tags" ||
            key === "ro.build.type") {
            return "release";
        }
        if (key === "ro.debuggable") {
            return "0";
        }
        return this.getProperty(key);
    };

    // 5. Build tags check bypass
    var Build = Java.use('android.os.Build');
    try {
        Build.TAGS.value = "release-keys";
    } catch(e) {}

    // 6. SafetyNet bypass (advanced)
    try {
        var SafetyNet = Java.use(
            'com.google.android.gms.safetynet.SafetyNet'
        );
        SafetyNet.attest.implementation = function() {
            console.log("[+] SafetyNet bypassed");
            return null;
        };
    } catch(e) {}

    console.log("[+] All root detection bypassed!");
});`}
      />
      <CodeBlock
        title="iOS Jailbreak Detection Bypass"
        code={`// jailbreak-bypass.js — iOS jailbreak detection bypass
if (ObjC.available) {
    console.log("[+] Jailbreak Detection Bypass loaded");

    // 1. File existence check bypass
    var NSFileManager = ObjC.classes.NSFileManager;
    NSFileManager['- fileExistsAtPath:'] = ObjC.implement(
        NSFileManager['- fileExistsAtPath:'],
        function(self, cmd, path) {
            var pathStr = ObjC.Object(path).toString();
            var suspicious = [
                "/Applications/Cydia.app",
                "/usr/sbin/sshd",
                "/bin/bash",
                "/usr/bin/ssh",
                "/etc/apt",
                "/private/var/lib/apt/",
                "/Applications/Sileo.app"
            ];
            for (var i = 0; i < suspicious.length; i++) {
                if (pathStr.includes(suspicious[i])) {
                    console.log("[+] Hidden: " + pathStr);
                    return false;
                }
            }
            return ObjC.Object(self).fileExistsAtPath_(path);
        }
    );

    // 2. CanOpenURL bypass
    var UIApplication = ObjC.classes.UIApplication;
    UIApplication['- canOpenURL:'] = ObjC.implement(
        UIApplication['- canOpenURL:'],
        function(self, cmd, url) {
            var urlStr = ObjC.Object(url).toString();
            if (urlStr.includes("cydia") ||
                urlStr.includes("sileo")) {
                console.log("[+] URL blocked: " + urlStr);
                return false;
            }
            return ObjC.Object(self).canOpenURL_(url);
        }
    );

    // 3. Fork detection bypass
    var fork = Module.findExportByName(null, 'fork');
    if (fork) {
        Interceptor.replace(fork, new NativeCallback(function() {
            console.log("[+] Fork call blocked");
            return -1;
        }, 'int', []));
    }

    // 4. System() call bypass
    var system = Module.findExportByName(null, 'system');
    if (system) {
        Interceptor.attach(system, {
            onEnter: function(args) {
                var cmd = args[0].readUtf8String();
                console.log("[+] System call: " + cmd);
            },
            onLeave: function(retval) {
                retval.replace(0);
            }
        });
    }

    console.log("[+] iOS jailbreak bypass loaded!");
}`}
      />

      <h2>Function Hooking</h2>
      <p>
        Function hooking Frida का core feature है — किसी भी function को intercept करके input/output capture या modify कर सकते हो। Java methods, native C/C++ functions, और Objective-C methods तीनों hook कर सकते हो।
      </p>
      <CodeBlock
        title="Java Method Hooking"
        code={`// java-hook.js — Java methods hook करें
Java.perform(function() {
    // Login function hook — credentials capture
    var LoginActivity = Java.use('com.target.app.LoginActivity');

    // Method overloads handle करो:
    LoginActivity.login.overload(
        'java.lang.String', 'java.lang.String'
    ).implementation = function(username, password) {
        console.log('[+] Username: ' + username);
        console.log('[+] Password: ' + password);

        // Original function call
        var result = this.login(username, password);
        console.log('[+] Login result: ' + result);
        return result;
    };

    // API key capture
    var ApiClient = Java.use('com.target.app.ApiClient');
    ApiClient.getApiKey.implementation = function() {
        var key = this.getApiKey();
        console.log('[+] API Key: ' + key);
        return key;
    };

    // Token capture
    var TokenManager = Java.use('com.target.app.TokenManager');
    TokenManager.getToken.implementation = function() {
        var token = this.getToken();
        console.log('[+] Token: ' + token);
        return token;
    };

    // Encryption key capture
    var Encryptor = Java.use('com.target.app.Encryptor');
    Encryptor.encrypt.overload('[B').implementation = function(data) {
        console.log('[+] Encrypting: ' + data.length + ' bytes');
        return this.encrypt(data);
    };
});

# Run:
# frida -U -f com.target.app -l java-hook.js --no-pause`}
      />
      <CodeBlock
        title="Native Function Hooking"
        code={`// native-hook.js — C/C++ functions hook करें

// Simple hook — function name से
Interceptor.attach(
    Module.findExportByName("libnative.so", "encrypt"),
    {
        onEnter: function(args) {
            console.log('[Native] encrypt called');
            // First argument (data) read करो:
            var data = Memory.readUtf8String(args[0]);
            console.log('[Native] Input: ' + data);
            // Second argument (key):
            var key = Memory.readUtf8String(args[1]);
            console.log('[Native] Key: ' + key);
        },
        onLeave: function(retval) {
            console.log('[Native] Return: ' + retval);
            // Return value modify करो:
            // retval.replace(ptr(1));
        }
    }
);

// Address से hook:
var baseAddr = Module.findBaseAddress("libnative.so");
var targetFunc = baseAddr.add(0x1234); // Offset
Interceptor.attach(targetFunc, {
    onEnter: function(args) {
        console.log('[+] Function called at offset 0x1234');
        console.log('[+] Arg0: ' + Memory.readUtf8String(args[0]));
    },
    onLeave: function(retval) {
        console.log('[+] Return: ' + retval);
    }
});

// Memory scan (string search):
var module = Process.findModuleByName("libnative.so");
var results = Memory.scanSync(
    module.base, module.size, "4D 5A 90 00" // MZ header
);
console.log('[+] Found: ' + results.length + ' matches');`}
      />
      <CodeBlock
        title="ObjC Method Hooking (iOS)"
        code={`// objc-hook.js — iOS Objective-C methods hook करें
if (ObjC.available) {
    // Class method hook
    var LoginVC = ObjC.classes.LoginViewController;
    LoginVC['- authenticateWithUsername:password:'] = ObjC.implement(
        LoginVC['- authenticateWithUsername:password:'],
        function(self, cmd, username, password) {
            var user = ObjC.Object(username).toString();
            var pass = ObjC.Object(password).toString();
            console.log('[+] iOS Username: ' + user);
            console.log('[+] iOS Password: ' + pass);

            // Original call:
            return ObjC.Object(self).authenticateWithUsername_password_(
                username, password
            );
        }
    );

    // All methods list करो:
    var methods = LoginVC.$ownMethods;
    methods.forEach(function(m) {
        console.log('[Method] ' + m);
    });

    // Instance variable read:
    var instance = ObjC.chooseSync(LoginVC)[0];
    if (instance) {
        console.log('[IVar] ' + instance.$ivars);
    }
}`}
      />

      <h2>Memory Analysis</h2>
      <p>
        Frida process memory को directly read, write, और scan कर सकता है। यह memory forensics, data extraction, और runtime patching में बहुत useful है।
      </p>
      <CodeBlock
        title="Memory Operations"
        code={`// memory-ops.js — Memory read/write/scan
Java.perform(function() {
    // Module enumerate
    Process.enumerateModules().forEach(function(mod) {
        console.log('[+] Module: ' + mod.name +
            ' Base: ' + mod.base +
            ' Size: ' + mod.size);
    });

    // Export enumerate
    var exports = Module.enumerateExports("libnative.so");
    exports.forEach(function(exp) {
        console.log('[+] Export: ' + exp.name +
            ' Addr: ' + exp.address +
            ' Type: ' + exp.type);
    });

    // Memory read — specific address
    var addr = ptr("0x7f8c1234");
    try {
        var bytes = addr.readByteArray(64);
        console.log('[+] Memory dump:', bytes);
    } catch(e) {
        console.log('[-] Read failed: ' + e);
    }

    // Memory write — NOP patch
    var patchAddr = ptr("0x7f8c5678");
    patchAddr.writeByteArray([0x90, 0x90, 0x90, 0x90]);
    console.log('[+] Patched with NOPs');

    // Memory scan — byte pattern
    var module = Process.findModuleByName("libnative.so");
    var pattern = "48 89 E5 48 83 EC"; // x86_64 prologue
    Memory.scan(module.base, module.size, pattern, {
        onMatch: function(address, size) {
            console.log('[+] Pattern at: ' + address);
        },
        onComplete: function() {
            console.log('[+] Scan complete');
        }
    });

    // String scan in memory
    Memory.scan(module.base, module.size, "secret_key", {
        onMatch: function(address, size) {
            console.log('[+] Found "secret_key" at: ' + address);
            console.log('[+] Context: ' +
                Memory.readUtf8String(address, 64));
        },
        onComplete: function() {}
    });
});`}
      />
      <CodeBlock
        title="Heap Analysis"
        code={`// heap-obj.js — Java heap objects enumerate
Java.perform(function() {
    // Specific class instances on heap
    Java.choose('com.target.app.UserSession', {
        onMatch: function(instance) {
            console.log('[+] UserSession found:');
            console.log('    Token: ' + instance.getToken());
            console.log('    User: ' + instance.getUsername());
            console.log('    Role: ' + instance.getRole());
        },
        onComplete: function() {
            console.log('[+] Heap scan complete');
        }
    });

    // Multiple class instances
    Java.choose('android.widget.TextView', {
        onMatch: function(instance) {
            var text = instance.getText().toString();
            if (text.length > 0) {
                console.log('[TextView] ' + text);
            }
        },
        onComplete: function() {}
    });

    // SharedPreferences dump
    Java.choose(
        'android.app.SharedPreferencesImpl',
        {
            onMatch: function(instance) {
                var prefs = instance.getAll();
                console.log('[SharedPrefs] ' + prefs);
            },
            onComplete: function() {}
        }
    );
});`}
      />

      <h2>API Monitoring</h2>
      <p>
        Frida से app की सभी API calls monitor कर सकते हो — HTTP requests, database queries, file operations, और crypto operations। यह app behavior understand करने में बहुत helpful है।
      </p>
      <CodeBlock
        title="HTTP Traffic Monitor"
        code={`// api-monitor.js — Complete HTTP traffic capture
Java.perform(function() {
    // OkHttp request intercept
    try {
        var OkHttpClient = Java.use('okhttp3.OkHttpClient');
        var RealCall = Java.use('okhttp3.RealCall');

        RealCall.execute.implementation = function() {
            var request = this.request();
            console.log('\n[HTTP] Request:');
            console.log('    URL: ' + request.url());
            console.log('    Method: ' + request.method());
            console.log('    Headers: ' + request.headers());

            var body = request.body();
            if (body !== null) {
                var Buffer = Java.use('okio.Buffer');
                var buffer = Buffer.$new();
                body.writeTo(buffer);
                console.log('    Body: ' + buffer.readUtf8());
            }

            var response = this.execute();
            console.log('    Response: ' + response.code());
            return response;
        };
    } catch(e) {
        console.log("[-] OkHttp not found: " + e);
    }

    // HttpURLConnection intercept
    var HttpURLConnection = Java.use(
        'java.net.HttpURLConnection'
    );
    HttpURLConnection.setRequestMethod.implementation = function(method) {
        console.log('[HTTP] Method: ' + method);
        return this.setRequestMethod(method);
    };

    // SharedPreferences monitor
    var SharedPreferencesImpl = Java.use(
        'android.app.SharedPreferencesImpl'
    );
    SharedPreferencesImpl.getString.implementation = function(key, defValue) {
        var value = this.getString(key, defValue);
        console.log('[SharedPrefs] ' + key + ' = ' + value);
        return value;
    };

    // Database query monitor
    try {
        var SQLiteDatabase = Java.use(
            'android.database.sqlite.SQLiteDatabase'
        );
        SQLiteDatabase.rawQuery.overload(
            'java.lang.String', '[Ljava.lang.String;'
        ).implementation = function(sql, args) {
            console.log('[SQLite] Query: ' + sql);
            return this.rawQuery(sql, args);
        };
    } catch(e) {}
});`}
      />
      <CodeBlock
        title="Crypto Monitoring"
        code={`// crypto-monitor.js — Encryption/Decryption monitor
Java.perform(function() {
    // AES encryption monitor
    var Cipher = Java.use('javax.crypto.Cipher');
    Cipher.doFinal.overload('[B').implementation = function(input) {
        var algorithm = this.getAlgorithm();
        console.log('[Cipher] Algorithm: ' + algorithm);
        console.log('[Cipher] Input (' + input.length + ' bytes)');

        var result = this.doFinal(input);
        console.log('[Cipher] Output (' + result.length + ' bytes)');
        return result;
    };

    // Secret key capture
    var SecretKeySpec = Java.use(
        'javax.crypto.spec.SecretKeySpec'
    );
    SecretKeySpec.$init.overload(
        '[B', 'java.lang.String'
    ).implementation = function(keyBytes, algorithm) {
        console.log('[Key] Algorithm: ' + algorithm);
        console.log('[Key] Key: ' + bytesToHex(keyBytes));
        return this.$init(keyBytes, algorithm);
    };

    // RSA encryption monitor
    try {
        var CipherRSA = Java.use('javax.crypto.Cipher');
        CipherRSA.getInstance.overload('java.lang.String')
            .implementation = function(transformation) {
            if (transformation.includes("RSA")) {
                console.log('[RSA] Instance: ' + transformation);
            }
            return this.getInstance(transformation);
        };
    } catch(e) {}

    // Helper function
    function bytesToHex(bytes) {
        var hex = [];
        for (var i = 0; i < bytes.length; i++) {
            hex.push(('0' + (bytes[i] & 0xFF).toString(16))
                .slice(-2));
        }
        return hex.join('');
    }
});`}
      />

      <h2>Frida Gadget</h2>
      <p>
        Frida Gadget एक embeddable agent है जो app के साथ bundle होता है — rooted device की ज़रूरत नहीं। यह non-rooted devices पर Frida use करने का एकमात्र तरीका है। Gadget .so library के रूप में app में inject होता है और app start होने पर automatically activate हो जाता है।
      </p>
      <CodeBlock
        title="Frida Gadget Setup"
        code={`# Gadget download:
# https://github.com/frida/frida/releases
# frida-gadget-XX.X.X-android-arm64.so.xz download करो

# App में inject करो:
# 1. APK decompile (apktool)
apktool d target.apk

# 2. Gadget .so file copy करो:
cp frida-gadget.so target/lib/arm64-v8a/libfrida-gadget.so

# 3. App startup code में System.loadLibrary add करो
# smali में main activity में:
# invoke-static {}, Ljava/lang/System;->loadLibrary()

# 4. AndroidManifest.xml modify:
# android:debuggable="true" add करो

# 5. Recompile और sign:
apktool b target -o target-gadget.apk
apksigner sign --ks my.keystore target-gadget.apk

# 6. Install और run — gadget auto-starts
adb install target-gadget.apk

# 7. Frida connect (Gadget mode):
frida -U Gadget -l script.js

# Gadget config (config.json):
# {
#   "interaction": {
#     "type": "script",
#     "path": "/data/local/tmp/script.js"
#   }
# }`}
      />
      <CodeBlock
        title="Gadget with Listen Mode"
        code={`# Gadget listen mode — script inject without restart
# gadget-config.json:
{
    "interaction": {
        "type": "listen",
        "address": "0.0.0.0",
        "port": 27042
    }
}

# Gadget .so के साथ config file भी copy करो:
cp gadget-config.json target/lib/arm64-v8a/libfrida-gadget.config.so

# App run करो — gadget listen mode में start होगा
# Connect:
frida -H 127.0.0.1:27042 -l script.js

# Network से connect (remote):
frida -H 192.168.1.100:27042 -l script.js`}
      />

      <h2>Frida vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">Frida</th>
              <th className="text-left py-2 px-3 text-neon-green">Xposed</th>
              <th className="text-left py-2 px-3 text-neon-green">Objection</th>
              <th className="text-left py-2 px-3 text-neon-green">AppMon</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Root Required</td><td className="py-2 px-3">Yes (Gadget: No)</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Yes</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Cross-Platform</td><td className="py-2 px-3">Android/iOS/Win/Mac/Linux</td><td className="py-2 px-3">Android only</td><td className="py-2 px-3">Android/iOS</td><td className="py-2 px-3">Android/iOS</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Scripting</td><td className="py-2 px-3">JavaScript</td><td className="py-2 px-3">Java</td><td className="py-2 px-3">Python CLI</td><td className="py-2 px-3">GUI + Python</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">No Reboot</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">No (reboot needed)</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Yes</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Native Hooking</td><td className="py-2 px-3">Yes (C/C++)</td><td className="py-2 px-3">Java only</td><td className="py-2 px-3">Via Frida</td><td className="py-2 px-3">Via Frida</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Memory Access</td><td className="py-2 px-3">Full read/write/scan</td><td className="py-2 px-3">Limited</td><td className="py-2 px-3">Via Frida</td><td className="py-2 px-3">Via Frida</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">CodeShare</td><td className="py-2 px-3">Yes (500+ scripts)</td><td className="py-2 px-3">Modules</td><td className="py-2 px-3">Limited</td><td className="py-2 px-3">No</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Learning Curve</td><td className="py-2 px-3">Medium</td><td className="py-2 px-3">Hard</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Easy</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Community</td><td className="py-2 px-3">Very Active</td><td className="py-2 px-3">Declining</td><td className="py-2 px-3">Active</td><td className="py-2 px-3">Small</td></tr>
            <tr><td className="py-2 px-3 text-white">License</td><td className="py-2 px-3">LGPL (Free)</td><td className="py-2 px-3">Apache 2.0</td><td className="py-2 px-3">MIT</td><td className="py-2 px-3">GPL</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'frida-server start नहीं हो रहा', a: 'Device rooted होना चाहिए। Architecture match करो (arm64 vs x86)। SELinux disable करो: setenforce 0। Permission check करो: chmod 755 frida-server। frida-server version client version से match होना चाहिए।' },
          { q: 'App crash हो रहा है injection पर', a: 'Anti-frida detection हो सकती है। --no-pause flag try करो। Gadget approach use करो। Objection wrapper try करो। frida-server rename करो: mv frida-server fs। Port change करो: frida-server -l 0.0.0.0:12345।' },
          { q: 'SSL pinning bypass काम नहीं कर रहा', a: 'App custom SSL implementation use कर रहा होगा। Specific class find करो (jadx से decompile करो) और manual hook लगाओ। Objection का ssl-pinning-bypass command try करो। Network Security Config bypass भी ज़रूरी हो सकता है।' },
          { q: 'JavaScript error आ रहा है', a: 'Java.available या ObjC.available check करो पहले। try-catch block use करो। Frida version और API compatibility check करो। frida-tools और frida package versions match करो।' },
          { q: 'Process attach नहीं हो रहा', a: 'App debuggable नहीं है। -f flag से spawn करो (fresh start)। Gadget approach use करो। ptrace scope check करो: cat /proc/sys/kernel/yama/ptrace_scope। अगर 1 है तो: echo 0 > /proc/sys/kernel/yama/ptrace_scope।' },
          { q: 'Scripts run नहीं हो रहे', a: 'File path absolute दो (/home/user/script.js)। frida-tools version check करो। frida-server और client version match होने चाहिए। Script syntax check करो: node script.js से validate करो।' },
          { q: 'frida-server auto-start नहीं हो रहा', a: 'Magisk module use करो: FridaGadget Magisk module। ya init.d script create करो। ya Termux:Boot use करो। ya cron job use करो: @reboot /data/local/tmp/frida-server &।' },
          { q: 'App update के बाद scripts काम नहीं कर रहे', a: 'Class/method names बदल गए होंगे। jadx से new version decompile करो। New class names find करो। Scripts update करो। ProGuard obfuscation हो सकती है — obfuscated names use करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        App developers Frida detection implement कर सकते हैं। यह techniques app को instrumentation से protect करती हैं। लेकिन हर detection technique को bypass करने का भी तरीका है — यह cat-and-mouse game है।
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">ptrace Detection:</strong> PTRACE_TRACEME call — अगर already traced है तो Frida present है। Bypass: ptrace hook करो</li>
        <li><strong className="text-white">frida-server Detection:</strong> Port 27042 scan करो, /proc/net/tcp check करो। Bypass: port change करो, server rename करो</li>
        <li><strong className="text-white">Memory Scanning:</strong> Process memory में frida-agent strings search करो। Bypass: frida-agent rename करो</li>
        <li><strong className="text-white">Named Pipe Detection:</strong> frida-* named pipes search करो /proc/net/unix में। Bypass: pipe names modify करो</li>
        <li><strong className="text-white">Environment Check:</strong> LD_PRELOAD, FRIDA_* environment variables check करो। Bypass: environment clean करो</li>
        <li><strong className="text-white">Timing Check:</strong> Function execution time measure — hooking से slow होता है। Bypass: timing hook bypass करो</li>
        <li><strong className="text-white">Code Integrity:</strong> Runtime code modification detect करो — function prologue check करो। Bypass: integrity check hook करो</li>
        <li><strong className="text-white">Thread Count:</strong> Frida inject होने पर extra threads create होते हैं। Bypass: thread count spoof करो</li>
        <li><strong className="text-white">File System Check:</strong> /proc/self/maps में frida-related mappings search करो। Bypass: maps read hook करो</li>
        <li><strong className="text-white">API Hook Detection:</strong> JNI function pointers check करो — hook होने पर address बदलता है। Bypass: JNI function pointers restore करो</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        Frida practice के लिए safe lab बनाना ज़रूरी है। Rooted Android device या emulator चाहिए। Practice apps से basic hooking सीखो, फिर real apps पर try करो।
      </p>
      <CodeBlock
        title="Complete Lab Setup"
        code={`# Android emulator (Genymotion):
# - Google Play image use करो
# - ARM translation layer install करो
# - Root access enable करो

# ya Physical device:
# - Rooted Android phone (Magisk recommended)
# - USB debugging enable करो
# - frida-server push करो

# Practice apps install करो:
# - DIVA (Damn Insecure and Vulnerable App)
# - InsecureBankv2
# - MSTG Crackmes (OWASP)
# - UnCrackable Apps (Level 1-4)

# Burp Suite proxy setup:
# - Proxy configure करो (192.168.x.x:8080)
# - CA certificate install करो device पर
# - SSL pinning bypass script ready रखो

# Frida CodeShare browse करो:
# https://codeshare.frida.re
# Ready-made scripts download करो

# Practice workflow:
# 1. App को static analysis करो (jadx/apktool)
# 2. Interesting classes और methods find करो
# 3. Frida script लिखो hook करने के लिए
# 4. Test और iterate करो
# 5. Burp में traffic analyze करो`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Class Enumeration & Discovery"
        code={`// class-discover.js — App classes enumerate करो
Java.perform(function() {
    // सभी loaded classes list करो
    Java.enumerateLoadedClasses({
        onMatch: function(className) {
            // Target app classes filter करो:
            if (className.includes("com.target")) {
                console.log('[Class] ' + className);
            }
        },
        onComplete: function() {
            console.log('[+] Enumeration complete');
        }
    });

    // Specific class methods list करो:
    Java.choose('com.target.app.LoginActivity', {
        onMatch: function(instance) {
            // Instance methods:
            var methods = instance.class.getDeclaredMethods();
            methods.forEach(function(m) {
                console.log('[Method] ' + m);
            });

            // Instance fields:
            var fields = instance.class.getDeclaredFields();
            fields.forEach(function(f) {
                console.log('[Field] ' + f);
                try {
                    f.setAccessible(true);
                    console.log('[Value] ' + f.get(instance));
                } catch(e) {}
            });
        },
        onComplete: function() {}
    });
});`}
      />
      <CodeBlock
        title="Dynamic Code Patching"
        code={`// patch.js — Runtime code modification
Java.perform(function() {
    // Boolean return value patch
    var PremiumCheck = Java.use('com.target.app.PremiumCheck');
    PremiumCheck.isPremium.implementation = function() {
        console.log('[+] Premium check bypassed');
        return true; // Always premium
    };

    // Integer return value patch
    var LicenseCheck = Java.use('com.target.app.LicenseCheck');
    LicenseCheck.getLicenseStatus.implementation = function() {
        console.log('[+] License patched');
        return 1; // Licensed
    };

    // String return value patch
    var VersionCheck = Java.use('com.target.app.VersionCheck');
    VersionCheck.getVersion.implementation = function() {
        return "99.99.99"; // Latest version
    };

    // Void method — skip execution
    var AdManager = Java.use('com.target.app.AdManager');
    AdManager.showAd.implementation = function() {
        console.log('[+] Ad blocked');
        // Don't call original — skip ad
    };

    // Method with arguments — modify input
    var InputValidator = Java.use('com.target.app.InputValidator');
    InputValidator.validate.implementation = function(input) {
        console.log('[+] Validation bypassed for: ' + input);
        return true; // Always valid
    };
});`}
      />
      <CodeBlock
        title="r2frida Integration"
        code={`# r2frida — Radare2 + Frida combo
# Install:
pip3 install r2frida

# Connect to process:
r2 frida://attach/usb//com.target.app

# Frida commands in r2:
=:!frida-ps -U
=:!frida -U com.target.app -l script.js

# Memory analysis:
r2 frida://attach/usb//1234
> pdf @ sym.main
> px 256 @ rsp

# Scripting in r2:
> .!r2frida script.js

# Use cases:
# - Static analysis (r2) + dynamic hooking (frida)
# - Memory dump + disassembly
# - Function tracing + code coverage`}
      />
      <CodeBlock
        title="Frida with Objection"
        code={`# Objection — Frida wrapper for common tasks
pip3 install objection

# Explore app:
objection -g com.target.app explore

# Common commands:
# SSL pinning bypass:
ssl pinning disable

# Root bypass:
# objection automatically handles this

# Memory operations:
memory list modules
memory dump all /tmp/dump.bin
memory search "secret"

# File system:
file download /data/data/com.target.app/shared_prefs/prefs.xml

# Keychain dump (iOS):
ios keychain dump

# SharedPreferences dump:
android hooking list activities
android hooking watch class com.target.app.LoginActivity`}
      />
      <CodeBlock
        title="Anti-Frida Bypass Techniques"
        code={`// anti-frida-bypass.js — Frida detection bypass
Java.perform(function() {
    // 1. Frida-server port bypass
    // frida-server को custom port पर run करो:
    // frida-server -l 0.0.0.0:12345

    // 2. frida-server rename bypass
    // mv frida-server /data/local/tmp/fs

    // 3. Process name spoofing
    var Process = Java.use('java.lang.Process');
    // frida-agent rename करो build time पर

    // 4. /proc/self/maps read hook
    var BufferedReader = Java.use('java.io.BufferedReader');
    var FileReader = Java.use('java.io.FileReader');
    BufferedReader.readLine.implementation = function() {
        var line = this.readLine();
        if (line && line.includes("frida")) {
            console.log("[+] Filtered frida from maps");
            return this.readLine(); // Skip frida line
        }
        return line;
    };

    // 5. Thread count spoofing
    // frida-server को minimal threads से run करो

    // 6. ptrace bypass
    var ptrace = Module.findExportByName(null, 'ptrace');
    if (ptrace) {
        Interceptor.replace(ptrace, new NativeCallback(
            function(request, pid, addr, data) {
                return 0; // PTRACE_TRACEME success
            }, 'long', ['int', 'int', 'pointer', 'pointer']
        ));
    }

    // 7. Named pipe detection bypass
    var fopen = Module.findExportByName(null, 'fopen');
    if (fopen) {
        Interceptor.attach(fopen, {
            onEnter: function(args) {
                var path = args[0].readUtf8String();
                if (path && path.includes("frida")) {
                    // Path spoof करो
                    args[0] = Memory.allocUtf8String("/dev/null");
                }
            }
        });
    }

    console.log("[+] Anti-Frida bypass loaded!");
});`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Frida free है?', a: 'हाँ, पूरी तरह free और open source (LGPL)। Commercial use भी free। कोई paid version नहीं है। लेकिन Frida team consulting services provide करती है।' },
          { q: 'Rooted device ज़रूरी है?', a: 'Normal use के लिए हाँ। लेकिन Frida Gadget approach से बिना root के भी काम कर सकते हो — app repackaging करनी पड़ती है। Non-rooted devices पर Gadget ही एकमात्र option है।' },
          { q: 'iOS पर काम करता है?', a: 'हाँ! Jailbroken iOS device पर पूरा support है। ObjC runtime hooking support करता है। Frida Gadget से non-jailbroken devices पर भी limited support है।' },
          { q: 'Xposed से बेहतर है?', a: 'Different use cases। Frida cross-platform है, no reboot needed, native hooking support। Xposed सिर्फ Android है लेकिन system-level modifications बेहतर करता है। Frida mobile testing के लिए better है, Xposed system modification के लिए।' },
          { q: 'Objection क्या है?', a: 'Objection Frida का wrapper है जो common tasks (SSL bypass, root bypass, memory dump) को easy CLI commands से करता है। Beginners के लिए recommended है — Frida सीखने से पहले Objection try करो।' },
          { q: 'Anti-frida detection bypass कैसे करें?', a: 'Multiple techniques: frida-server rename करो (mv frida-server fs), port change करो (-l 0.0.0.0:12345), Gadget approach use करो, ya custom frida-agent build करो। सबसे reliable method Gadget + Listen mode है।' },
          { q: 'Frida CodeShare क्या है?', a: 'Frida CodeShare (codeshare.frida.re) community scripts platform है। 500+ ready-made scripts available हैं — SSL bypass, root bypass, API monitoring, और बहुत कुछ। frida -C script_id से directly use कर सकते हो।' },
          { q: 'Multiple scripts एक साथ run कर सकते हैं?', a: 'हाँ, -l flag multiple times use करो: frida -U -f com.app -l script1.js -l script2.js। ya single script में दूसरे scripts load करो: import("./script2.js")।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Objection</td><td className="py-2 px-3">Frida wrapper for mobile</td><td className="py-2 px-3">Easy CLI, common bypasses built-in</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Xposed Framework</td><td className="py-2 px-3">Android runtime modification</td><td className="py-2 px-3">System-level hooks, modules</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">AppMon</td><td className="py-2 px-3">App monitoring</td><td className="py-2 px-3">GUI interface, Frida-based</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Cydia Substrate</td><td className="py-2 px-3">iOS runtime modification</td><td className="py-2 px-3">Jailbreak tweaks</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">r2frida</td><td className="py-2 px-3">Radare2 + Frida combo</td><td className="py-2 px-3">RE + instrumentation एक साथ</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Fridump</td><td className="py-2 px-3">Memory dump tool</td><td className="py-2 px-3">Simple memory dumping</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">House</td><td className="py-2 px-3">Runtime mobile exploration</td><td className="py-2 px-3">Web UI, Frida-based</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">RMS</td><td className="py-2 px-3">Runtime Mobile Security</td><td className="py-2 px-3">CLI, Frida-based, Android/iOS</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>Frida CodeShare (codeshare.frida.re) से start करो — ready-made scripts use करो पहले</li>
          <li>Objection से common tasks करो, फिर raw Frida scripts लिखो complex scenarios के लिए</li>
          <li>SSL pinning bypass + Burp combo से app का सारा hidden API traffic देख सकते हो</li>
          <li>jadx से app decompile करो पहले — class names और method signatures find करो</li>
          <li>frida-server rename करो (mv frida-server fs) — basic anti-frida detection bypass</li>
          <li>Gadget approach use करो non-rooted devices के लिए</li>
          <li>Frida + Radare2 (r2frida) combo powerful है — static + dynamic analysis एक साथ</li>
          <li>Python bindings (frida-tools) से automation scripts बनाओ — batch testing के लिए</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Frida एक powerful dynamic instrumentation toolkit है। इसका इस्तेमाल केवल अधिकृत security testing और शैक्षिक उद्देश्यों के लिए करें। बिना अनुमति के app modification, credential theft, या DRM bypass अवैध है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत अनधिकृत software modification अपराध हो सकता है। केवल अपने lab वातावरण या लिखित authorization के साथ ही use करें।
      </div>
    </TutorialLayout>
  )
}
