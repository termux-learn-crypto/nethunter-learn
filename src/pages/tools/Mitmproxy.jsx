import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Mitmproxy() {
  return (
    <TutorialLayout
      title="mitmproxy"
      subtitle="इंटरैक्टिव HTTPS प्रॉक्सी — ट्रैफिक इंटरसेप्ट, मॉडिफाई, और रीप्ले"
      icon="🔄"
      prev={{ to: '/tool/mimikatz', label: 'mimikatz' }}
      next={{ to: '/tool/wireshark', label: 'wireshark' }}
    >
      <h2>What is mitmproxy?</h2>
      <p>MITMproxy एक इंटरएक्टिव एचटीटीपी/एचटीटीपीएस प्रॉक्सी टूल है जो मैन-इन-द-मिडल अटैक्स को सिम्युलेट और एनालाइज़ करता है। यह एक कंसोल-बेस्ड एप्लिकेशन है। यह Python में लिखा गया है और web application testing, API debugging, और security research के लिए इस्तेमाल होता है। तीन interfaces provide करता है — mitmproxy (interactive console), mitmweb (web UI), और mitmdump (command-line)।
      </p>
      <p>
        mitmproxy को Aldo Cortesi ने 2010 में बनाया था। यह HTTPS traffic को decrypt कर सकता है (अपना CA certificate install करके), requests और responses को modify कर सकता है, और Python scripts (addons) से automate कर सकता है। यह Burp Suite और OWASP ZAP का lightweight, scriptable alternative है।
      </p>
      <p>
        mitmproxy का सबसे बड़ा advantage है इसका Python scripting — complex traffic manipulation, API testing, और automated attacks Python addons से आसानी से कर सकते हो। यह cross-platform है — Linux, macOS, Windows सब पर चलता है। Bug bounty hunters, penetration testers, और developers सभी इसे इस्तेमाल करते हैं।
      </p>
      <p>
        mitmproxy event-driven architecture use करता है। जब कोई request आती है, तो Python addon functions call होते हैं — request(), response(), error()। इन functions में traffic को read, modify, या block कर सकते हो। Flows (request/response pairs) को save, load, और replay भी कर सकते हो। यह tool API security testing में बहुत powerful है।
      </p>
      <p>
        mitmproxy open source है और MIT license के तहत आता है। इसकी community बहुत active है और regularly updates आते रहते हैं। GitHub पर 35,000+ stars हैं। यह tool professional penetration testers और security researchers का favorite है।
      </p>
      <p>
        mitmproxy तीन main components provide करता है: mitmproxy (interactive terminal UI), mitmweb (browser-based graphical interface), और mitmdump (headless command-line tool)। तीनों same core engine use करते हैं बस interface अलग है। Beginners के लिए mitmweb सबसे आसान है, automation के लिए mitmdump best है, और experienced users mitmproxy console prefer करते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> mitmproxy केवल अपने network और authorized testing में ही use करें। बिना अनुमति के traffic interception illegal है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized network monitoring अपराध हो सकता है।
      </div>

      <h2>History of mitmproxy</h2>
      <p>
        mitmproxy की शुरुआत 2010 में Aldo Cortesi ने की थी। शुरू में यह एक सिंपल HTTP proxy था, लेकिन जल्दी ही HTTPS interception, Python scripting, और interactive console features add हो गए। 2013 में यह open source हुआ और community ने इसे बहुत improve किया।
      </p>
      <p>
        2015 में mitmproxy ने asyncio architecture adopt किया जिससे performance में बड़ा improvement हुआ। 2017 में mitmweb (web UI) add हुआ। 2019 में HTTP/2 support आया। 2020 में WireGuard mode add हुआ जिससे mobile testing बहुत आसान हो गई।
      </p>
      <p>
        आज mitmproxy GitHub पर 35,000+ stars के साथ सबसे popular open source intercepting proxy है। यह Python 3 में लिखा गया है और asyncio architecture use करता है जो इसे बहुत fast बनाता है। mitmproxy team actively develop कर रही है और हर कुछ महीनों में updates आते हैं।
      </p>
      <p>
        mitmproxy का ecosystem बहुत rich है — mitmweb (browser-based UI), mitmdump (CLI tool), और libmproxy (Python library) तीनों include हैं। इसके addons marketplace पर community-contributed scripts available हैं। OWASP, Google, और Microsoft जैसी companies ने mitmproxy को अपने security testing workflows में adopt किया है। यह CI/CD pipelines में integrate करना आसान है — mitmdump command-line tool से automated security testing possible है।
      </p>

      <h2>How mitmproxy Works?</h2>
      <p>
        mitmproxy Man-in-the-Middle (MITM) proxy है जो client और server के बीच बैठता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Proxy Server:</strong> Client (browser/app) को proxy server के रूप में serve करता है — सारा traffic इससे होकर गुजरता है</li>
        <li><strong className="text-white">TLS Interception:</strong> अपने CA certificate से HTTPS connections decrypt करता है — encrypted traffic readable हो जाता है</li>
        <li><strong className="text-white">Request/Response Hook:</strong> Traffic modify/intercept करने के लिए hooks provide करता है — हर request/response पर custom code run कर सकते हो</li>
        <li><strong className="text-white">Python Addons:</strong> Custom Python scripts से traffic manipulate कर सकते हो — scripting सबसे powerful feature है</li>
        <li><strong className="text-white">Flow Recording:</strong> सारा traffic record करके बाद में analyze कर सकते हो — .mitm files में save होता है</li>
        <li><strong className="text-white">Replay:</strong> Captured requests को replay कर सकते हो — modify करके भी भेज सकते हो</li>
        <li><strong className="text-white">Reverse Proxy:</strong> Server-side proxy mode — client directly connect करता है, proxy transparent होता है</li>
        <li><strong className="text-white">WireGuard Integration:</strong> Built-in VPN — mobile devices को easily proxy कर सकते हो बिना root के</li>
      </ul>

      <h2>Installation</h2>
      <p>
        mitmproxy को कई तरीकों से इंस्टॉल कर सकते हो:
      </p>
      <CodeBlock
        title="mitmproxy Installation"
        code={`# pip से (सबसे आसान):
pip3 install mitmproxy

# apt से:
sudo apt update
sudo apt install mitmproxy

# snap से:
sudo snap install mitmproxy

# Docker से:
docker pull mitmproxy/mitmproxy
docker run --rm -it -v ~/.mitmproxy:/home/mitmproxy/.mitmproxy -p 8080:8080 mitmproxy/mitmproxy

# Homebrew (macOS):
brew install mitmproxy

# वर्जन चेक:
mitmproxy --version

# तीन tools install होते हैं:
# mitmproxy — interactive console
# mitmweb — web UI (browser-based)
# mitmdump — command-line dump

# Linux specific dependencies:
sudo apt install python3-dev libffi-dev libssl-dev
# macOS: Xcode command line tools चाहिए
# Windows: Visual C++ Build Tools चाहिए

# Development version (latest features):
pip3 install git+https://github.com/mitmproxy/mitmproxy.git

# Verify installation:
mitmproxy --version
mitmweb --version
mitmdump --version`}
      />

      <h2>Basic Usage</h2>
      <p>
        mitmproxy का बेसिक इस्तेमाल तीन modes में होता है:
      </p>
      <CodeBlock
        title="Start mitmproxy"
        code={`# Interactive console mode:
mitmproxy

# Web UI mode (browser में open):
mitmweb

# Command-line dump mode:
mitmdump

# Custom port पर:
mitmproxy -p 8888

# Browser configure करो:
# Proxy: 127.0.0.1:8080
# ya system proxy settings में set करो

# CA certificate install करो (HTTPS के लिए):
# http://mitm.it — certificate download page
# या ~/.mitmproxy/mitmproxy-ca-cert.pem use करो`}
      />
      <CodeBlock
        title="Mobile Device Setup"
        code={`# Phone पर proxy set करो:
# WiFi settings → Proxy → Manual
# Host: attacker_IP
# Port: 8080

# Certificate install करो:
# Phone browser में http://mitm.it open करो
# mitmproxy certificate download और install करो

# Android में:
# Settings → Security → Install from storage

# iOS में:
# Settings → Profile Downloaded → Install
# Settings → General → About → Certificate Trust Settings → Enable`}
      />
      <CodeBlock
        title="Recording Traffic"
        code={`# Traffic file में save करो:
mitmdump -w traffic.mitm

# Saved traffic load करो:
mitmproxy -r traffic.mitm

# Specific filter से save:
mitmdump -w traffic.mitm "~d target.com"

# Traffic replay:
mitmdump -r traffic.mitm

# Modified replay:
mitmdump -r traffic.mitm -s modify.py`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-p port</td><td className="py-2 px-3">Proxy port set करें (default 8080)</td><td className="py-2 px-3 font-mono text-xs">-p 8888</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-w file</td><td className="py-2 px-3">Flows file में save करें</td><td className="py-2 px-3 font-mono text-xs">-w flows.mitm</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-r file</td><td className="py-2 px-3">Saved flows load करें</td><td className="py-2 px-3 font-mono text-xs">-r flows.mitm</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-s script</td><td className="py-2 px-3">Python addon script load करें</td><td className="py-2 px-3 font-mono text-xs">-s addon.py</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--set ssl_insecure=true</td><td className="py-2 px-3">SSL certificate verification skip</td><td className="py-2 px-3 font-mono text-xs">--set ssl_insecure=true</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--mode reverse:url</td><td className="py-2 px-3">Reverse proxy mode</td><td className="py-2 px-3 font-mono text-xs">--mode reverse:https://api.com</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--ignore regex</td><td className="py-2 px-3">Hosts ignore करें</td><td className="py-2 px-3 font-mono text-xs">--ignore-hosts ".*\\.google\\.com"</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-a user:pass</td><td className="py-2 px-3">Proxy authentication require</td><td className="py-2 px-3 font-mono text-xs">-a admin:secret</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--listen-host</td><td className="py-2 px-3">Listen address bind करें</td><td className="py-2 px-3 font-mono text-xs">--listen-host 0.0.0.0</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--mode wireguard</td><td className="py-2 px-3">WireGuard VPN mode</td><td className="py-2 px-3 font-mono text-xs">--mode wireguard</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--certs</td><td className="py-2 px-3">Custom SSL certificates</td><td className="py-2 px-3 font-mono text-xs">--certs *=cert.pem</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--upstream-cert</td><td className="py-2 px-3">Upstream server cert verify</td><td className="py-2 px-3 font-mono text-xs">--upstream-cert=false</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-q</td><td className="py-2 px-3">Quiet mode — कम output</td><td className="py-2 px-3 font-mono text-xs">-q</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">-v</td><td className="py-2 px-3">Verbose mode — ज़्यादा output</td><td className="py-2 px-3 font-mono text-xs">-v</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">--set stream_large_bodies</td><td className="py-2 px-3">Large bodies stream करें</td><td className="py-2 px-3 font-mono text-xs">--set stream_large_bodies=1m</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Interactive Console</h2>
      <p>
        mitmproxy का interactive console mode सबसे powerful है — keyboard shortcuts से traffic navigate कर सकते हो।
      </p>
      <CodeBlock
        title="Console Navigation"
        code={`# mitmproxy interactive mode:
mitmproxy

# Keyboard shortcuts:
# j/k — up/down navigate
# Enter — flow select करें
# Tab — request/response toggle
# q — back/quit
# e — flow edit
# r — replay request
# d — flow delete
# f — filter apply
# w — flows save
# z — gzip decode
# space — next flow

# Filter examples:
# ~q — requests only
# ~s — responses only
# ~d domain.com — specific domain
# ~m POST — POST requests
# ~c 200 — 200 status code
# ~b login — body में "login" search
# ~u regex — URL match
# ~a — show all`}
      />

      <h2>Python Addons</h2>
      <p>
        mitmproxy का सबसे powerful feature है Python scripting — traffic को programmatically manipulate कर सकते हो।
      </p>
      <CodeBlock
        title="Python Addon — Request Modification"
        code={`# addon.py — request/response modification
from mitmproxy import http

def request(flow: http.HTTPFlow) -> None:
    """हर request intercept करो"""
    print(f"[Request] {flow.request.method} {flow.request.url}")

    # Request header modify:
    flow.request.headers["X-Custom"] = "injected"

    # Request body modify (POST data):
    if flow.request.method == "POST":
        print(f"[Body] {flow.request.get_text()}")

def response(flow: http.HTTPFlow) -> None:
    """हर response intercept करो"""
    print(f"[Response] {flow.response.status_code}")

    # Response header modify:
    flow.response.headers["X-Modified"] = "true"

    # Response body modify:
    if "text/html" in flow.response.headers.get("content-type", ""):
        html = flow.response.get_text()
        html = html.replace("Original", "Modified")
        flow.response.set_text(html)

# Run:
# mitmdump -s addon.py`}
      />
      <CodeBlock
        title="Credential Capture Script"
        code={`# creds_capture.py — login credentials capture
from mitmproxy import http

def request(flow: http.HTTPFlow) -> None:
    """POST requests में credentials capture करो"""
    if flow.request.method == "POST":
        content_type = flow.request.headers.get("content-type", "")

        # Form data:
        if "application/x-www-form-urlencoded" in content_type:
            print(f"[+] Form POST: {flow.request.url}")
            print(f"[+] Data: {flow.request.get_text()}")

        # JSON data:
        if "application/json" in content_type:
            print(f"[+] JSON POST: {flow.request.url}")
            print(f"[+] Body: {flow.request.get_text()}")

        # Login-related keywords check:
        body = flow.request.get_text() or ""
        if any(kw in body.lower() for kw in ["password", "passwd", "login", "username"]):
            print(f"[!] CREDENTIALS FOUND!")
            print(f"    URL: {flow.request.url}")
            print(f"    Data: {body}")

# Run:
# mitmdump -s creds_capture.py`}
      />
      <CodeBlock
        title="Response Replacement (Map Local)"
        code={`# local_replace.py — response replace करो
from mitmproxy import http
import os

def response(flow: http.HTTPFlow) -> None:
    """Remote server को request नहीं भेजता — local file serve करता है"""
    if "target.com/app.js" in flow.request.url:
        flow.response = http.Response.make(
            200,
            open("/local/app.js").read(),
            {"Content-Type": "application/javascript"}
        )

    # API response mock:
    if "api.target.com/users" in flow.request.url:
        flow.response = http.Response.make(
            200,
            '{"users": [{"id": 1, "name": "Test"}]}',
            {"Content-Type": "application/json"}
        )

# Use cases:
# - JavaScript files replace करके app behavior modify
# - API responses mock करना
# - Testing different scenarios`}
      />

      <h2>SSL/TLS Interception</h2>
      <p>
        mitmproxy HTTPS traffic को decrypt कर सकता है — CA certificate install करके।
      </p>
      <CodeBlock
        title="SSL Interception Setup"
        code={`# Step 1: mitmproxy start करो
mitmproxy

# Step 2: CA certificate download करो
# http://mitm.it पर जाओ (mitmproxy running होना चाहिए)
# या manually:
cat ~/.mitmproxy/mitmproxy-ca-cert.pem

# Step 3: Browser में install करो
# Firefox: Settings → Certificates → Import
# Chrome: Settings → Security → Manage certificates → Import

# Step 4: Mobile पर install करो
# Android: Settings → Security → Install from storage
# iOS: Settings → Profile Downloaded → Install

# Step 5: Traffic intercept होगा!
# mitmproxy console में decrypted traffic दिखेगा

# Certificate pinning bypass:
# Apps जो certificate pinning use करते हैं
# उनके लिए Frida/Objection use करो mitmproxy के साथ`}
      />

      <h2>Replay Attacks</h2>
      <CodeBlock
        title="Request Replay"
        code={`# Captured request replay करो:
# mitmproxy में flow select करो → 'r' दबाओ

# Command-line से replay:
mitmdump -r flows.mitm

# Specific flow replay:
# mitmproxy में → flow select → r → replay

# Replay with modifications:
# पहले flow edit करो (e key) → फिर replay

# Repeated replay (stress testing):
# mitmproxy में flow select → Shift+R → count set करो

# Automated replay script:
from mitmproxy import http

def request(flow: http.HTTPFlow) -> None:
    if "target.com/api" in flow.request.url:
        # Same request 10 times भेजो
        for i in range(10):
            # mitmproxy internal replay
            pass`}
      />

      <h2>Reverse Proxy Mode</h2>
      <CodeBlock
        title="Reverse Proxy"
        code={`# Reverse proxy — client directly connect करता है
# Client को proxy configure करने की ज़रूरत नहीं

# Start reverse proxy:
mitmdump --mode reverse:https://target.com -p 8443

# अब http://localhost:8443 पर target.com serve होगा
# सारा traffic intercept होगा

# Local development proxy:
mitmdump --mode reverse:https://api.example.com -p 8080

# Multiple backends:
mitmdump --mode reverse:https://backend1.example.com -p 8081
mitmdump --mode reverse:https://backend2.example.com -p 8082`}
      />

      <h2>WireGuard VPN Mode</h2>
      <CodeBlock
        title="WireGuard Mode (Mobile Testing)"
        code={`# WireGuard mode — mobile devices को easily proxy करो
# बिना root या jailbreak के!

# Start WireGuard mode:
mitmproxy --mode wireguard

# QR code दिखेगा — phone से scan करो
# WireGuard app में config import हो जाएगा

# Phone पर WireGuard VPN connect करो
# सारा traffic mitmproxy से होकर गुजरेगा

# Benefits:
# - No root required
# - No proxy settings change
# - All apps का traffic capture
# - Certificate pinning bypass possible`}
      />

      <h2>mitmproxy vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">फ़ीचर</th>
              <th className="text-left py-2 px-3 text-neon-green">mitmproxy</th>
              <th className="text-left py-2 px-3 text-neon-green">Burp Suite</th>
              <th className="text-left py-2 px-3 text-neon-green">ZAP</th>
              <th className="text-left py-2 px-3 text-neon-green">Charles</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">कीमत</td><td className="py-2 px-3">Free (open source)</td><td className="py-2 px-3">Free/Pro ($449/yr)</td><td className="py-2 px-3">Free (open source)</td><td className="py-2 px-3">$50/license</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Scripting</td><td className="py-2 px-3">Python addons</td><td className="py-2 px-3">Java/Python</td><td className="py-2 px-3">Java/Python</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Automated Scanner</td><td className="py-2 px-3">नहीं (manual only)</td><td className="py-2 px-3">हाँ (Pro)</td><td className="py-2 px-3">हाँ</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Resource Usage</td><td className="py-2 px-3">Lightweight</td><td className="py-2 px-3">Heavy (Java)</td><td className="py-2 px-3">Medium (Java)</td><td className="py-2 px-3">Light</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">CLI Support</td><td className="py-2 px-3">Excellent (mitmdump)</td><td className="py-2 px-3">Limited</td><td className="py-2 px-3">Limited</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">WireGuard VPN</td><td className="py-2 px-3">हाँ (built-in)</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td><td className="py-2 px-3">नहीं</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Mobile Testing</td><td className="py-2 px-3">Excellent</td><td className="py-2 px-3">Good</td><td className="py-2 px-3">Good</td><td className="py-2 px-3">Good</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">API Testing</td><td className="py-2 px-3">Excellent (scripting)</td><td className="py-2 px-3">Excellent</td><td className="py-2 px-3">Good</td><td className="py-2 px-3">Limited</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white">Ease of Use</td><td className="py-2 px-3">Medium (CLI/Console)</td><td className="py-2 px-3">Easy (GUI)</td><td className="py-2 px-3">Easy (GUI)</td><td className="py-2 px-3">Easy (GUI)</td></tr>
            <tr><td className="py-2 px-3 text-white">Platform</td><td className="py-2 px-3">Linux/Mac/Win</td><td className="py-2 px-3">Linux/Mac/Win</td><td className="py-2 px-3">Linux/Mac/Win</td><td className="py-2 px-3">Mac/Win</td></tr>
          </tbody>
        </table>
      </div>

      <h2>API Security Testing</h2>
      <p>
        mitmproxy REST API testing के लिए बहुत powerful है। JSON requests/responses को intercept करके API endpoints की security analyze कर सकते हो। GraphQL queries भी capture और modify कर सकते हो।
      </p>
      <CodeBlock
        title="API Traffic Analysis Addon"
        code={`# api_analyzer.py — API traffic analyze करो
from mitmproxy import http
import json

class APIAnalyzer:
    def __init__(self):
        self.api_calls = []

    def request(self, flow: http.HTTPFlow) -> None:
        if "api." in flow.request.url:
            entry = {
                "method": flow.request.method,
                "url": flow.request.url,
                "headers": dict(flow.request.headers),
            }
            if flow.request.content:
                try:
                    entry["body"] = json.loads(flow.request.get_text())
                except:
                    entry["body"] = flow.request.get_text()
            self.api_calls.append(entry)
            print(f"[API] {flow.request.method} {flow.request.url}")

    def response(self, flow: http.HTTPFlow) -> None:
        if "api." in flow.request.url:
            print(f"[API] Response: {flow.response.status_code}")
            # Sensitive data leak check:
            body = flow.response.get_text() or ""
            if "password" in body.lower() or "token" in body.lower():
                print(f"[!] Sensitive data in response!")

addons = [APIAnalyzer()]

# Run:
# mitmdump -s api_analyzer.py`}
      />
      <CodeBlock
        title="GraphQL Interception"
        code={`# graphql_intercept.py — GraphQL queries capture
from mitmproxy import http
import json

def request(flow: http.HTTPFlow) -> None:
    if flow.request.method == "POST":
        content_type = flow.request.headers.get("content-type", "")
        if "json" in content_type:
            try:
                body = json.loads(flow.request.get_text())
                if "query" in body:
                    print(f"[GraphQL] Query: {body['query'][:200]}")
                    if "variables" in body:
                        print(f"[GraphQL] Variables: {body['variables']}")
                    if "operationName" in body:
                        print(f"[GraphQL] Op: {body['operationName']}")
            except:
                pass

# Run:
# mitmdump -s graphql_intercept.py -q`}
      />

      <h2>WebSocket Manipulation</h2>
      <p>
        mitmproxy WebSocket traffic को भी intercept और modify कर सकता है। Real-time applications जैसे chat apps, live feeds, और gaming protocols को test करने में useful है।
      </p>
      <CodeBlock
        title="WebSocket Addon"
        code={`# ws_handler.py — WebSocket frames intercept
from mitmproxy import http

def websocket_message(flow: http.HTTPFlow):
    # हर WebSocket message पर trigger होता है
    assert flow.websocket is not None
    for msg in flow.websocket.messages:
        direction = "Client -> Server" if msg.from_client else "Server -> Client"
        content = msg.text or msg.get_bytes().hex()
        print(f"[WS] {direction}: {content[:100]}")

        # Client messages modify करो:
        if msg.from_client and "subscribe" in (msg.text or ""):
            msg.text = msg.text.replace("subscribe", "admin_subscribe")
            print("[WS] Message modified!")

# WebSocket frames list करने के लिए:
# mitmproxy में flow select करो → WS tab देखो

# Run:
# mitmdump -s ws_handler.py`}
      />

      <h2>Mobile App Testing with mitmproxy</h2>
      <p>
        Mobile app testing mitmproxy का major use case है। Android और iOS apps का traffic capture करके API endpoints, authentication flows, और data leakage analyze कर सकते हो। WireGuard mode से बिना root के भी testing possible है।
      </p>
      <CodeBlock
        title="Android App Testing Setup"
        code={`# Step 1: mitmproxy WireGuard mode start करो
mitmproxy --mode wireguard

# Step 2: Phone पर WireGuard app install करो
# Play Store / App Store से

# Step 3: QR code scan करो — VPN connect हो जाएगा

# Step 4: CA certificate install करो
# Phone browser में http://mitm.it open करो
# Android: Settings -> Security -> Install from storage
# iOS: Settings -> Profile Downloaded -> Install

# Step 5: App use करो — traffic capture होगा

# Android emulator (AVD) के लिए:
# Emulator settings -> Proxy -> Manual
# Host: 10.0.2.2 (host machine)
# Port: 8080

# Certificate pinning bypass:
# Frida script + mitmproxy combo:
# frida -U -f com.target.app -l ssl-bypass.js --no-pause
# mitmproxy अब decrypted traffic दिखाएगा`}
      />
      <CodeBlock
        title="iOS App Testing"
        code={`# iOS testing workflow:

# Step 1: Jailbroken device पर:
# Cydia से Frida install करो
# mitmproxy + Frida combo से SSL bypass

# Step 2: Non-jailbroken device पर:
# WireGuard mode use करो
# mitmproxy --mode wireguard

# Step 3: iOS proxy setup:
# WiFi Settings -> Configure Proxy -> Manual
# Server: attacker_ip
# Port: 8080

# Step 4: Certificate trust करो:
# Settings -> General -> About -> Certificate Trust Settings
# mitmproxy certificate enable करो

# Step 5: Traffic analyze करो:
# mitmproxy में iOS app traffic दिखेगा
# API calls, auth tokens, user data — सब visible`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        mitmproxy real-world security testing में बहुत useful है। एक penetration tester ने e-commerce app का traffic intercept करके payment gateway vulnerability discover की — API calls modify करके price manipulation possible था। mitmproxy से traffic capture करके PoC बनाया और responsible disclosure किया।
      </p>
      <p>
        दूसरे case में, mobile banking app का traffic analyze करते सुमय developer ने पाया कि app hardcoded API keys send कर रहा था। mitmproxy Python addon से सभी API calls log कीं और sensitive data identify किया। App developer को report करने पर fix release हुआ।
      </p>
      <p>
        Bug bounty program में researcher ने mitmproxy का use करके OAuth flow vulnerability discover की — redirect URL manipulation से account takeover possible था। mitmproxy replay feature से attack reproduce किया और $5000 bounty मिली।
      </p>

      <h2>Integration with Other Tools</h2>
      <p>
        mitmproxy को दूसरे tools के साथ integrate करके testing workflow enhance कर सकते हो:
      </p>
      <CodeBlock
        title="mitmproxy + Burp Suite Combo"
        code={`# mitmproxy upstream proxy to Burp:
mitmproxy --mode upstream:http://127.0.0.1:8081

# Burp Suite listener: 127.0.0.1:8081
# mitmproxy listener: 127.0.0.1:8080

# Browser -> mitmproxy (8080) -> Burp (8081) -> Server

# Benefits:
# mitmproxy: Python scripting, automation
# Burp: Scanner, repeater, intruder

# mitmproxy से auto-modify करो
# Burp में manually test करो`}
      />
      <CodeBlock
        title="mitmproxy + Nuclei Scanning"
        code={`# Traffic capture करो और Nuclei से scan करो:
# Step 1: Traffic capture
mitmdump -w captured.mitm -q

# Step 2: URLs extract करो
mitmdump -r captured.mitm -s extract_urls.py > urls.txt

# extract_urls.py:
from mitmproxy import http
def response(flow: http.HTTPFlow):
    print(flow.request.url)

# Step 3: Nuclei scan
nuclei -l urls.txt -t vulnerabilities/ -o results.txt

# Automated pipeline:
mitmdump -w traffic.mitm &
# App use करो...
# Traffic capture complete होने पर
# URLs extract -> Nuclei scan -> Report`}
      />

      <h2>Performance Tuning</h2>
      <p>
        Large-scale testing में mitmproxy performance optimize करना ज़रूरी है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Stream Large Bodies:</strong> --set stream_large_bodies=1m — large files directly stream होंगे, memory में load नहीं</li>
        <li><strong className="text-white">Ignore Hosts:</strong> --ignore-hosts ".*googleapis.com" — irrelevant traffic skip करो</li>
        <li><strong className="text-white">Quiet Mode:</strong> -q — console output minimize होता है, performance बेहतर</li>
        <li><strong className="text-white">Connection Reuse:</strong> --set keep_host_header=true — persistent connections</li>
        <li><strong className="text-white">Buffer Size:</strong> --set body_size_limit=10m — request body size limit</li>
        <li><strong className="text-white">DNS Caching:</strong> System DNS cache use करो — repeated lookups avoid होंगे</li>
        <li><strong className="text-white">Memory Management:</strong> Long-running sessions में periodic restart — memory leak avoid</li>
        <li><strong className="text-white">Addon Optimization:</strong> Heavy processing async करो — main event loop block न हो</li>
      </ul>

      <h2>Reporting and Output Analysis</h2>
      <p>
        Captured traffic को analyze और report करने के लिए mitmproxy कई options provide करता है:
      </p>
      <CodeBlock
        title="Traffic Report Generation"
        code={`# Traffic statistics:
mitmdump -r traffic.mitm -q -s stats.py

# stats.py — traffic summary generate करो:
from mitmproxy import http
import json

class TrafficStats:
    def __init__(self):
        self.stats = {"total": 0, "methods": {}, "domains": {}, "status": {}}

    def response(self, flow: http.HTTPFlow):
        self.stats["total"] += 1
        method = flow.request.method
        self.stats["methods"][method] = self.stats["methods"].get(method, 0) + 1
        domain = flow.request.host
        self.stats["domains"][domain] = self.stats["domains"].get(domain, 0) + 1
        status = flow.response.status_code
        self.stats["status"][status] = self.stats["status"].get(status, 0) + 1

    def done(self):
        print(json.dumps(self.stats, indent=2))

addons = [TrafficStats()]`}
      />
      <CodeBlock
        title="Export to HAR Format"
        code={`# HAR (HTTP Archive) export:
# mitmproxy में: w key -> HAR format select करो

# Command-line से:
mitmdump -r traffic.mitm -q -s har_export.py

# har_export.py:
from mitmproxy import http
import json, time

flows_data = []

def response(flow: http.HTTPFlow):
    entry = {
        "startedDateTime": time.strftime('%Y-%m-%dT%H:%M:%SZ'),
        "request": {
            "method": flow.request.method,
            "url": flow.request.url,
            "headers": [{"name": k, "value": v} for k, v in flow.request.headers.items()],
        },
        "response": {
            "status": flow.response.status_code,
            "headers": [{"name": k, "value": v} for k, v in flow.response.headers.items()],
        }
    }
    flows_data.append(entry)

def done():
    har = {"log": {"version": "1.2", "entries": flows_data}}
    with open("output.har", "w") as f:
        json.dump(har, f, indent=2)`}
      />

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'HTTPS sites load नहीं हो रहे', a: 'CA certificate install करो browser/OS में। http://mitm.it पर जाओ और certificate download करो। Certificate pinning वाले apps काम नहीं करेंगे — Frida/Objection use करो।' },
          { q: 'Certificate pinning bypass नहीं हो रहा', a: 'App-level pinning के लिए Frida/Objection use करो mitmproxy के साथ। --set ssl_insecure=true try करो। Custom cert --certs flag से provide करो।' },
          { q: 'Slow performance', a: 'Large responses skip करो: --set stream_large_bodies=1m। Specific hosts ignore करो: --ignore-hosts ".*\\.googleapis\\.com"। Quiet mode use करो: -q।' },
          { q: 'WebSocket traffic नहीं दिख रहा', a: 'WebSocket support built-in है। Flow list में WS filter use करो: ~ws। Interactive mode में Enter से WebSocket frames देखो।' },
          { q: 'Connection refused error', a: 'Port already in use है। Different port try करो: -p 8888। Firewall check करो। --listen-host 0.0.0.0 से सभी interfaces पर listen करो।' },
          { q: 'Mobile apps traffic capture नहीं हो रहा', a: 'WireGuard mode try करो: --mode wireGuard। Proxy settings manually set करो phone में। Certificate install करो phone पर। Rooted phone पर transparent proxy use करो।' },
          { q: 'HTTP/2 traffic decode नहीं हो रहा', a: 'HTTP/2 support built-in है। --set http2=false से disable कर सकते हो अगर issues हों। Upstream server HTTP/2 support check करो।' },
          { q: 'Addon script load नहीं हो रहा', a: 'Python path check करो। Script syntax verify करो। mitmdump -s script.py से load करो। Debug mode: mitmdump -s script.py -v' },
          { q: 'Large file download fail हो रहा है', a: '--set stream_large_bodies=1m use करो — large files stream mode में download होंगे। Default behavior में mitmproxy पूरा body memory में load करता है जो large files के लिए problematic है।' },
          { q: 'Proxy authentication error आ रहा है', a: 'Corporate proxy के पीछे हो तो --mode upstream:http://corporate-proxy:port use करो। --set upstream_proxy=protocol://host:port भी try कर सकते हो।' },
          { q: 'DNS resolution fail हो रहा है', a: 'Custom DNS server set करो: --set dns_server=8.8.8.8। /etc/hosts file में custom entries add करो। Network connectivity check करो।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        mitmproxy-based attacks से बचने के लिए multiple defense layers implement करने चाहिए:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">Certificate Pinning:</strong> App में expected CA certificate hardcode करो — mitmproxy का cert reject होगा। Android Network Security Config या iOS App Transport Security use करो</li>
        <li><strong className="text-white">Proxy Detection:</strong> Proxy environment variables check करो (HTTP_PROXY, HTTPS_PROXY)। System proxy settings detect करो और direct connection fallback implement करो</li>
        <li><strong className="text-white">Network Monitoring:</strong> Unusual proxy traffic detect करो — unexpected certificates, MITM indicators। SIEM integration से real-time alerts setup करो</li>
        <li><strong className="text-white">HSTS:</strong> HTTPS Strict Transport Security enable करो — downgrade attacks रुकेंगे। HSTS preload list में add करो extra protection के लिए</li>
        <li><strong className="text-white">Mutual TLS:</strong> Client certificate authentication use करो — proxy bypass होगा। Server client certificate verify करता है — MITM proxy pass नहीं करेगा</li>
        <li><strong className="text-white">Proxy-Aware Apps:</strong> Apps जो proxy settings ignore करती हैं — direct connections use करें। VPN-based bypass भी possible है</li>
        <li><strong className="text-white">Traffic Analysis:</strong> MITM proxy detect करो — certificate chain analysis, unusual latency patterns, unexpected certificate issuers</li>
        <li><strong className="text-white">Endpoint Protection:</strong> EDR solutions proxy detection include करते हैं — CrowdStrike, SentinelOne, Carbon Black</li>
        <li><strong className="text-white">Network Segmentation:</strong> Sensitive traffic isolated network पर रखो — VLANs, firewalls, micro-segmentation</li>
        <li><strong className="text-white">Certificate Transparency:</strong> Issuing certificates log होते हैं — CT logs monitor करो suspicious certificates detect करने के लिए</li>
        <li><strong className="text-white">DNS Security:</strong> DNSSEC implement करो — DNS spoofing-based MITM attacks रुकेंगे। DoH/DoT use करो encrypted DNS resolution के लिए</li>
        <li><strong className="text-white">Code Integrity:</strong> App binary integrity check करो — runtime modification detect होगा। Tamper detection mechanisms implement करो</li>
      </ul>

      <h2>Lab Environment Setup</h2>
      <p>
        mitmproxy practice के लिए safe lab environment setup करना ज़रूरी है। Multiple VMs और practice targets से real-world testing skills develop कर सकते हो।
      </p>
      <CodeBlock
        title="Complete Lab Setup"
        code={`# VirtualBox/Vmware में lab:

# 1. Kali Linux VM (attacker):
sudo apt install mitmproxy
mitmproxy --version

# 2. Ubuntu VM (web server):
sudo apt install apache2 php mysql-server
# DVWA install करो:
git clone https://github.com/digininja/DVWA.git
sudo mv DVWA /var/www/html/
# http://localhost/DVWA/setup.php से configure करो

# 3. Windows VM (victim browser):
# Firefox/Chrome में proxy configure करो: 10.0.2.2:8080
# http://mitm.it से certificate install करो

# Network: Host-Only Adapter (192.168.56.0/24)

# Practice workflow:
# 1. mitmproxy start करो attacker machine पर
# 2. Victim machine पर proxy configure करो
# 3. Certificate install करो browser में
# 4. DVWA browse करो
# 5. Traffic analyze करो mitmproxy में

# Practice targets:
# - DVWA (Damn Vulnerable Web Application)
# - Juice Shop (OWASP)
# - WebGoat (OWASP)
# - Custom Flask/Django apps
# - REST APIs (JSONPlaceholder, reqres.in)`}
      />
      <CodeBlock
        title="Docker-Based Lab"
        code={`# Docker compose से complete lab:

# docker-compose.yml:
# version: '3'
# services:
#   mitmproxy:
#     image: mitmproxy/mitmproxy
#     ports: ["8080:8080"]
#     volumes: ["./flows:/home/mitmproxy/.mitmproxy"]
#   juice-shop:
#     image: bkimminich/juice-shop
#     ports: ["3000:3000"]

# Start:
docker-compose up -d

# mitmproxy web UI:
# http://localhost:8081

# Browser proxy: localhost:8080
# Browse http://localhost:3000 (Juice Shop)

# Traffic capture और analysis start करो!`}
      />

      <h2>Advanced Techniques</h2>
      <CodeBlock
        title="Upstream Proxy Chaining"
        code={`# Corporate proxy के पीछे:
mitmproxy --mode upstream:http://corporate-proxy:3128

# Tor network through:
mitmproxy --mode upstream:socks5://127.0.0.1:9050

# Multiple proxy chain:
# Browser -> mitmproxy (8080) -> Burp (8081) -> Corporate Proxy (3128) -> Internet
mitmproxy --mode upstream:http://127.0.0.1:8081 -p 8080

# Custom CA certificate:
mitmproxy --certs *=/path/to/custom-ca.pem

# Authentication required proxy:
mitmproxy --mode upstream:http://user:pass@proxy:3128`}
      />
      <CodeBlock
        title="Authentication Manipulation"
        code={`# auth_bypass.py — auth headers modify करो
from mitmproxy import http

def request(flow: http.HTTPFlow) -> None:
    # JWT token capture:
    auth = flow.request.headers.get("Authorization", "")
    if "Bearer" in auth:
        token = auth.replace("Bearer ", "")
        print(f"[JWT] {token}")

    # Auth header inject:
    if "api.target.com" in flow.request.url:
        flow.request.headers["Authorization"] = "Bearer injected-token"

    # Basic auth modify:
    if "Authorization" in flow.request.headers:
        import base64
        creds = base64.b64encode(b"admin:admin").decode()
        flow.request.headers["Authorization"] = f"Basic {creds}"

# Run:
# mitmdump -s auth_bypass.py`}
      />
      <CodeBlock
        title="Traffic Logging and Analysis"
        code={`# traffic_logger.py — comprehensive traffic log
import json, time
from mitmproxy import http

def response(flow: http.HTTPFlow) -> None:
    entry = {
        "timestamp": time.strftime('%Y-%m-%d %H:%M:%S'),
        "method": flow.request.method,
        "url": flow.request.url,
        "status": flow.response.status_code,
        "request_size": len(flow.request.content) if flow.request.content else 0,
        "response_size": len(flow.response.content) if flow.response.content else 0,
        "content_type": flow.response.headers.get("content-type", ""),
    }
    with open("traffic.jsonl", "a") as f:
        f.write(json.dumps(entry) + "\\n")

    # Suspicious patterns detect करो:
    body = flow.response.get_text() or ""
    patterns = ["password", "secret", "token", "api_key", "credit_card"]
    for pattern in patterns:
        if pattern in body.lower():
            print(f"[ALERT] {pattern} found in {flow.request.url}")

# Run:
# mitmdump -s traffic_logger.py -q`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या mitmproxy free है?', a: 'हाँ, पूरी तरह free और open source (MIT license)। कोई paid version नहीं है। Commercial use भी free।' },
          { q: 'Burp Suite से better है?', a: 'अलग strengths। mitmproxy scripting में better है (Python)। Burp scanner और GUI में better है। mitmproxy lightweight और fast है।' },
          { q: 'Mobile app testing कर सकता है?', a: 'हाँ! WireGuard mode से बिना root के। Phone पर proxy configure करो + CA certificate install करो। Certificate pinning bypass Frida से करना पड़ेगा।' },
          { q: 'Python addons कैसे लिखें?', a: 'mitmproxy docs देखो: docs.mitmproxy.org। request(), response(), error() functions override करो। -s flag से load करो।' },
          { q: 'गिगाबाइट्स traffic handle कर सकता है?', a: 'Production traffic के लिए optimized नहीं है। --set stream_large_bodies=1m से large responses skip करो। Quiet mode use करो।' },
          { q: 'HTTP/2 support है?', a: 'हाँ, built-in HTTP/2 support है। --set http2=false से disable कर सकते हो अगर issues हों।' },
          { q: 'WireGuard mode क्या है?', a: 'Built-in VPN mode — mobile devices को easily proxy करो बिना root के। QR code scan करो phone से और VPN connect हो जाएगा।' },
          { q: 'Automation possible है?', a: 'हाँ! mitmdump command-line tool है जो scripts और CI/CD में use कर सकते हो। -w से save, -r से load, -s से scripts।' },
          { q: 'क्या gRPC traffic intercept होता है?', a: 'हाँ, mitmproxy gRPC (HTTP/2 based) support करता है। --set http2=true default है। Protobuf messages binary format में दिखते हैं।' },
          { q: 'Reverse proxy mode कैसे काम करता है?', a: '--mode reverse:https://target.com से client directly connect करता है proxy को — proxy forward करता है target server को। Client को proxy configure करने की ज़रूरत नहीं।' },
          { q: 'Traffic filtering कैसे करें?', a: '~d domain.com (domain filter), ~m POST (method filter), ~c 200 (status filter), ~b keyword (body filter)। Interactive mode में f key से filter apply करो।' },
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Burp Suite</td><td className="py-2 px-3">Web app security testing</td><td className="py-2 px-3">GUI, scanner, extensions</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">OWASP ZAP</td><td className="py-2 px-3">Web app security testing</td><td className="py-2 px-3">Free, automated scanning</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Charles Proxy</td><td className="py-2 px-3">HTTP proxy/debugger</td><td className="py-2 px-3">Mac-friendly, GUI</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Caido</td><td className="py-2 px-3">Web security testing</td><td className="py-2 px-3">Modern UI, fast</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Fiddler</td><td className="py-2 px-3">HTTP debugging proxy</td><td className="py-2 px-3">Windows, .NET</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">HTTP Toolkit</td><td className="py-2 px-3">HTTP debugging</td><td className="py-2 px-3">Modern, easy to use</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Squid</td><td className="py-2 px-3">Caching proxy</td><td className="py-2 px-3">Enterprise, high performance</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">Bettercap</td><td className="py-2 px-3">Network attack framework</td><td className="py-2 px-3">MITM + WiFi + BLE</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>mitmproxy का Python scripting सबसे powerful feature है — Burp/ZAP से बेहतर automation possible है</li>
          <li>API testing के लिए mitmdump + custom addon perfect combo है</li>
          <li>WireGuard mode mobile testing को बहुत आसान बनाता है — no root needed</li>
          <li>Command-line mode (mitmdump) CI/CD pipeline में integrate कर सकते हो</li>
          <li>Flows save करके बाद में analyze करो — .mitm files portable हैं</li>
          <li>Reverse proxy mode API testing के लिए perfect है</li>
          <li>Custom headers add करके authentication bypass test करो</li>
          <li>Response replacement से frontend developers के बिना test कर सकते हो</li>
          <li>Upstream proxy chaining से corporate networks में भी test कर सकते हो</li>
          <li>WebSocket testing के लिए ws_handler addon use करो — real-time apps test होंगे</li>
          <li>GraphQL testing के लिए graphql_intercept addon बनाओ — API queries capture होंगी</li>
          <li>HAR export से traffic को browser dev tools में import कर सकते हो</li>
          <li>Traffic statistics addon से scan results का summary generate करो</li>
          <li>WireGuard mode + Frida = best mobile testing combo — no root needed</li>
          <li>Reverse proxy mode API testing के लिए perfect है — client configuration नहीं चाहिए</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> mitmproxy एक powerful intercepting proxy है। इसका इस्तेमाल केवल authorized testing और debugging में ही करें। बिना अनुमति के network traffic intercept करना illegal है। भारत में आईटी एक्ट 2000 की धारा 43 और 66 के तहत unauthorized network monitoring अपराध हो सकता है। केवल अपने lab और authorized targets पर ही use करें।
      </div>
    
      <h2>Mitmproxy ka Advanced Upyog aur Tips</h2>
      <p>Mitmproxy ek network security testing tool hai jiska sahi tarike se upyog karne ke liye kuch advanced concepts aur techniques samajhna zaroori hai. Is section mein hum Mitmproxy ke advanced features, best practices aur professional tips par baat karenge jo aapko ek better penetration tester banane mein madad karenge.</p>
      <p>Mitmproxy ke advanced features mein se ek hai iski customization capability. Aap tool ke behavior ko modify kar sakte hain specific testing requirements ke according. Iske liye configuration files, command-line flags aur environment variables ka combination use kiya jata hai.</p>

      <h3>Professional Tips Mitmproxy ke Liye</h3>
      <ul>
        <li><strong>Automation:</strong> Mitmproxy ko shell scripts mein integrate karke repetitive tasks ko automate karein. Isse aapka time bachega aur efficiency badhegi.</li>
        <li><strong>Integration:</strong> Mitmproxy ko other Kali Linux tools ke saath combine karke comprehensive security assessments karein. Multiple tools ka data cross-reference karke better insights milte hain.</li>
        <li><strong>Reporting:</strong> Mitmproxy ke output ko structured format mein save karein aur professional penetration testing reports banane ke liye use karein.</li>
        <li><strong>Continuous Learning:</strong> Mitmproxy ke official documentation, GitHub repository aur community forums ko regularly check karte rahein naye features aur techniques ke liye.</li>
        <li><strong>Ethical Practices:</strong> Hamesha responsible disclosure follow karein aur kabhi bhi unauthorized targets par test na karein.</li>
      </ul>

      <h3>Mitmproxy ke Sath Common Mistakes</h3>
      <p>Mitmproxy ka upyog karte waqt kuch common mistakes hoti hain jinse beginners ko bachna chahiye. Sabse common mistake hai bina proper authorization ke testing karna. Doosri common mistake hai results ko blindly trust karna bina manual verification ke. Third mistake hai tool ko update na karna jiski vajah se naye vulnerabilities detect nahi hoti.</p>
      <p>Mitmproxy ke effective upyog ke liye patience aur practice dono zaroori hain. Pehle virtual labs mein practice karein, documentation padhein, aur phir real-world assessments mein iska upyog karein. Hamesha updated version use karein aur best practices follow karein.</p>

      <h3>Mitmproxy ke Sath Career Growth</h3>
      <p>Mitmproxy jaise network security testing tools ki knowledge aapke cybersecurity career mein bahut valuable hai. Companies network security professionals ko hire karti hain jo in tools ka effective upyog kar sake. Mitmproxy ki expertise aapko bug bounty programs, penetration testing roles aur security auditor positions mein advantage deti hai.</p>
      <p>Network security testing skills develop karne ke liye Mitmproxy ek starting point ho sakta hai. Iske baad aap more advanced tools aur techniques explore kar sakte hain. OSCP, CEH aur other cybersecurity certifications network security concepts ko cover karte hain aur Mitmproxy in concepts ko practical way mein samajhne mein madad karta hai.</p>

      <div className="info-box">
        💡 <strong>Pro Tip:</strong> Mitmproxy ke saath practical experience lene ke liye TryHackMe, HackTheBox aur VulnHub jaise platforms ka use karein. Ye platforms safe aur legal environment provide karte hain jahan aap apni skills practice kar sakte hain bina kisi legal concern ke.
      </div>

    
      <h2>Mitmproxy का उन्नत उपयोग और सुझाव</h2>
      <p>Mitmproxy एक network सुरक्षा परीक्षण टूल है जिसका सही तरीके से उपयोग करने के लिए कुछ उन्नत अवधारणाओं और तकनीकों को समझना ज़रूरी है। इस अनुभाग में हम Mitmproxy के उन्नत सुविधाओं, सर्वोत्तम अभ्यासों और पेशेवर सुझावों पर बात करेंगे जो आपको एक बेहतर पेनिट्रेशन टेस्टर बनने में मदद करेंगे।</p>
      <p>Mitmproxy की उन्नत विशेषताओं में से एक है इसकी अनुकूलन क्षमता। आप टूल के व्यवहार को संशोधित कर सकते हैं विशिष्ट परीक्षण आवश्यकताओं के अनुसार। इसके लिए कॉन्फ़िगरेशन फ़ाइलों, कमांड-लाइन फ्लैग और पर्यावरण चरों का संयोजन उपयोग किया जाता है। उन्नत उपयोगकर्ता कस्टम स्क्रिप्ट और प्लगइन्स भी बना सकते हैं।</p>

      <h3>पेशेवर सुझाव Mitmproxy के लिए</h3>
      <ul>
        <li><strong>ऑटोमेशन:</strong> Mitmproxy को शेल स्क्रिप्ट में इंटीग्रेट करके पुनरावर्ती कार्यों को स्वचालित करें। इससे आपका समय बचेगा और दक्षता बढ़ेगी।</li>
        <li><strong>एकीकरण:</strong> Mitmproxy को अन्य काली लिनक्स टूल्स के साथ जोड़कर व्यापक सुरक्षा मूल्यांकन करें। कई टूल्स के डेटा को क्रॉस-रेफरेंस करके बेहतर जानकारी मिलती है।</li>
        <li><strong>रिपोर्टिंग:</strong> Mitmproxy के आउटपुट को संरचित फॉर्मेट में सहेजें और पेशेवर पेनिट्रेशन टेस्टिंग रिपोर्ट बनाने के लिए उपयोग करें।</li>
        <li><strong>निरंतर सीखना:</strong> Mitmproxy के आधिकारिक दस्तावेज़ीकरण, GitHub रिपॉजिटरी और सामुदायिक फोरम को नियमित रूप से चेक करते रहें नई सुविधाओं और तकनीकों के लिए।</li>
      </ul>

      <h3>Mitmproxy के साथ सामान्य गलतियाँ</h3>
      <p>Mitmproxy का उपयोग करते समय कुछ सामान्य गलतियाँ होती हैं जिनसे शुरुआती लोगों को बचना चाहिए। सबसे आम गलती है बिना उचित प्राधिकरण के परीक्षण करना। दूसरी आम गलती है परिणामों को आंख मूंदकर विश्वास करना बिना मैन्युअल सत्यापन के। तीसरी गलती है टूल को अपडेट न करना जिसके कारण नई कमजोरियां पता नहीं चलतीं।</p>
      <p>Mitmproxy के प्रभावी उपयोग के लिए धैर्य और अभ्यास दोनों ज़रूरी हैं। पहले वर्चुअल लैब्स में अभ्यास करें, दस्तावेज़ीकरण पढ़ें, और फिर वास्तविक दुनिया के मूल्यांकनों में इसका उपयोग करें। हमेशा अपडेटेड वर्जन उपयोग करें और सर्वोत्तम अभ्यासों का पालन करें।</p>

      <h3>Mitmproxy के साथ करियर विकास</h3>
      <p>Mitmproxy जैसे network सुरक्षा परीक्षण टूल्स का ज्ञान आपके साइबर सुरक्षा करियर में बहुत मूल्यवान है। कंपनियां network सुरक्षा पेशेवरों को काम पर रखती हैं जो इन टूल्स का प्रभावी उपयोग कर सकें। Mitmproxy की विशेषज्ञता आपको बग बाउंटी प्रोग्राम, पेनिट्रेशन टेस्टिंग भूमिकाओं और सुरक्षा ऑडिटर पदों में लाभ देती है।</p>
      <p>Network सुरक्षा परीक्षण कौशल विकसित करने के लिए Mitmproxy एक शुरुआती बिंदु हो सकता है। इसके बाद आप और अधिक उन्नत टूल्स और तकनीकों का पता लगा सकते हैं। OSCP, CEH और अन्य साइबर सुरक्षा प्रमाणपत्र इन अवधारणाओं को व्यावहारिक तरीके से समझने में मदद करते हैं।</p>

      <div className="info-box">
        💡 <strong>विशेषज्ञ सुझाव:</strong> व्यावहारिक अनुभव लेने के लिए TryHackMe, HackTheBox और VulnHub जैसे प्लेटफॉर्म का उपयोग करें। ये प्लेटफॉर्म सुरक्षित और कानूनी वातावरण प्रदान करते हैं जहां आप बिना किसी कानूनी चिंता के अपने कौशल का अभ्यास कर सकते हैं।
      </div>

    
      

    
      <h2>महत्वपूर्ण नोट्स और निष्कर्ष</h2>
      <p>Mitmproxy एक शक्तिशाली सुरक्षा परीक्षण उपकरण है जो काली लिनक्स में उपलब्ध है। इस टूल का सही तरीके से उपयोग करके आप अपने नेटवर्क और सिस्टम की सुरक्षा को मजबूत कर सकते हैं। Mitmproxy का नियमित रूप से उपयोग करने से आप नई कमजोरियों को पहचान सकते हैं और उन्हें समय रहते ठीक कर सकते हैं। यह टूल विशेष रूप से सुरक्षा मूल्यांकन के लिए डिज़ाइन किया गया है और नियमित अभ्यास आवश्यक है।</p>
      <p>Mitmproxy के साथ काम करते समय हमेशा निम्नलिखित बातों का ध्यान रखें:</p>
      <ul>
        <li>हमेशा अद्यतन संस्करण का उपयोग करें ताकि नवीनतम सुविधाओं और सुरक्षा पैच का लाभ मिल सके</li>
        <li>परीक्षण से पहले लक्ष्य प्रणाली के मालिक से स्पष्ट अनुमति प्राप्त करें</li>
        <li>परिणामों का सावधानीपूर्वक विश्लेषण करें और गलत सकारात्मक परिणामों की पहचान करें</li>
        <li>सुरक्षा कमजोरियों की खोज करने पर जिम्मेदार प्रकटीकरण का पालन करें</li>
        <li>अपने कौशल को लगातार बेहतर बनाने के लिए नियमित अभ्यास करते रहें</li>
        <li>दस्तावेज़ीकरण और सामुदायिक मंचों पर सक्रिय रहें</li>
        <li>विभिन्न परिदृश्यों में परीक्षण करें ताकि क्षमताओं की पूरी समझ हो सके</li>
        <li>अन्य सुरक्षा उपकरणों के साथ एकीकरण करके अधिक व्यापक मूल्यांकन करें</li>
      </ul>
      <p>साइबर सुरक्षा के क्षेत्र में Mitmproxy जैसे उपकरणों का ज्ञान होना बहुत महत्वपूर्ण है। यह न केवल आपको सुरक्षा कमजोरियों की पहचान करने में मदद करता है बल्कि आपको एक जिम्मेदार सुरक्षा पेशेवर बनने में भी सहायता करता है। TryHackMe, HackTheBox और VulnHub जैसे प्लेटफॉर्म सुरक्षित अभ्यास वातावरण प्रदान करते हैं। नियमित अभ्यास से आप सभी विशेषताओं में महारत हासिल कर सकते हैं।</p>
      <p>साइबर सुरक्षा एक सतत सीखने की प्रक्रिया है। नई तकनीकों, उपकरणों और खतरों के बारे में अपडेट रहना जरूरी है। विभिन्न उपकरणों और तकनीकों का ज्ञान आपको एक बेहतर सुरक्षा पेशेवर बनाएगा। साइबर सुरक्षा समुदाय में सक्रिय रहें, ज्ञान साझा करें और दूसरों से सीखते रहें। यह क्षेत्र तेजी से बदलता है और निरंतर सीखने की आवश्यकता होती है। अपडेटेड रहने के लिए सुरक्षा ब्लॉग, समाचार और शोध पत्र पढ़ते रहें।</p>

      <div className="warning-box">
        ⚠️ <strong>अंतिम चेतावनी:</strong> इस टूल का उपयोग केवल शैक्षिक और अधिकृत सुरक्षा परीक्षण के लिए करें। दुरुपयोग गंभीर कानूनी परिणामों का कारण बन सकता है। हमेशा नैतिक दिशानिर्देशों का पालन करें और दूसरों की गोपनीयता का सम्मान करें। साइबर सुरक्षा एक जिम्मेदारी है, इसे गंभीरता से लें और अपने ज्ञान का उपयोग सकारात्मक बदलाव लाने के लिए करें।
      </div>

    </TutorialLayout>
  )
}
