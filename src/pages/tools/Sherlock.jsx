import TutorialLayout from '../../components/TutorialLayout'
import CodeBlock from '../../components/CodeBlock'

export default function Sherlock() {
  return (
    <TutorialLayout
      title="sherlock"
      subtitle="300+ सोशल मीडिया प्लेटफॉर्म्स पर यूज़रनेम ढूंढता है — cross-platform OSINT"
      icon="🔍"
      prev={{ to: '/tool/sherlock', label: 'sherlock' }}
      next={{ to: '/tool/theharvester', label: 'theharvester' }}
    >
      <h2>What is Sherlock?</h2>
      <p>
        Sherlock एक powerful OSINT (Open Source Intelligence) टूल है जो एक यूज़रनेम से 300+ सोशल मीडिया प्लेटफॉर्म्स पर अकाउंट ढूंढता है। Instagram, Twitter/X, Facebook, GitHub, Reddit, TikTok, LinkedIn, Snapchat — लगभग सभी popular platforms पर एक साथ search कर सकता है। OSINT researchers, ethical hackers, digital investigators, और law enforcement agencies इसे widely use करती हैं।
      </p>
      <p>
        Sherlock Python में लिखा गया है और completely open source है। इसका काम करने का तरीका बहुत clever है — यह हर platform के URL pattern को जानता है। जैसे Instagram का URL instagram.com/username है। Sherlock username को हर platform के URL में डालकर check करता है कि page मौजूद है या नहीं। HTTP response code, page content, और redirect patterns analyze करके confirm करता है कि account exist करता है या नहीं।
      </p>
      <p>
        Sherlock को Siddharth Dushantha ने 2018 में बनाया था। यह GitHub पर 55,000+ stars के साथ सबसे popular OSINT टूल्स में से एक है। Community constantly नए platforms add करती रहती है — हर month 10-20 नए sites जुड़ते हैं। यह tool pentesting, bug bounty, digital forensics, और personal privacy audit में बहुत useful है।
      </p>
      <p>
        Sherlock की सबसे बड़ी खासियत है इसकी simplicity — बस एक username दो और यह 300+ platforms पर search कर देता है। कोई API key नहीं चाहिए, कोई account नहीं चाहिए, कोई registration नहीं। यह direct HTTP requests भेजकर public profiles detect करता है। इसकी speed भी impressive है — 300+ sites कुछ ही मिनटों में scan हो जाते हैं।
      </p>
      <p>
        Bug bounty hunters के लिए Sherlock एक essential reconnaissance tool है। Target company के employees के usernames search करके उनके social media presence का पता लगाया जा सकता है। यह information social engineering attacks, phishing campaigns, और password guessing में useful हो सकती है। Red teamers इसे OSINT phase में सबसे पहले use करते हैं।
      </p>

      <div className="warning-box mb-6">
        <strong>⚠️ कानूनी चेतावनी:</strong> Sherlock सिर्फ publicly available data ढूंढता है। लेकिन इसका दुरुपयोग (stalking, harassment, cyberbullying, doxxing) अवैध है। भारत में आईटी एक्ट 2000 की धारा 66, 66C, और 66D के तहत cyberstalking, identity theft, और cheating by impersonation अपराध है — 3 साल तक की जेल और जुर्माना हो सकता है। केवल authorized testing और educational purposes के लिए ही इसका उपयोग करें।
      </div>

      <h2>History of Sherlock</h2>
      <p>
        Sherlock की शुरुआत 2018 में हुई जब Siddharth Dushantha ने एक simple Python script लिखी जो कुछ social media platforms पर username check करती थी। शुरू में यह सिर्फ 10-15 platforms support करता था, लेकिन community ने इसे adopt किया और नए platforms add करने लगी।
      </p>
      <p>
        2019 में Sherlock viral हो गया — GitHub पर stars बहुत तेज़ी से बढ़े। Security researchers, OSINT community, और law enforcement ने इसे widely adopt किया। इसकी popularity का कारण था — यह simple है, fast है, और कोई paid subscription नहीं चाहिए।
      </p>
      <p>
        2020 में Sherlock v2.0 release हुआ जिसमें performance improvements, नए detection methods, और better error handling जोड़ा गया। 2022 में major rewrite हुआ — async HTTP requests, better rate limiting, और improved accuracy। आज Sherlock actively maintained है और हर week नए sites add होते हैं।
      </p>
      <p>
        Sherlock ने OSINT community में एक standard set कर दिया है। कई अन्य tools (Maigret, Social Analyzer) Sherlock के data.json format को use करते हैं। यह open source होने के कारण forks भी बहुत popular हैं — Sherlock-project org अब independent community project बन गया है।
      </p>

      <h2>How Sherlock Works?</h2>
      <p>
        Sherlock का detection mechanism multi-layered है — सिर्फ HTTP status code से काम नहीं चलता। हर platform का behavior अलग होता है, इसलिए Sherlock multiple techniques use करता है:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li><strong className="text-white">URL Construction:</strong> हर platform के URL pattern में username insert करता है। Example: https://instagram.com/{'{username}'}</li>
        <li><strong className="text-white">HTTP GET Request:</strong> Constructed URL पर GET request भेजता है with custom headers (User-Agent spoofing)</li>
        <li><strong className="text-white">Status Code Analysis:</strong> HTTP status code check करता है — 200 (found), 404 (not found), 301/302 (redirect), 403 (forbidden)</li>
        <li><strong className="text-white">Content Detection:</strong> कुछ platforms "user not found" message show करते हैं 200 status code के साथ — Sherlock page content analyze करता है</li>
        <li><strong className="text-white">Response URL Check:</strong> कुछ platforms redirect करते हैं जब user नहीं मिलता — final URL check करता है</li>
        <li><strong className="text-white">Error Type Matching:</strong> data.json में हर site का error type defined है — status_code, message, response_url</li>
        <li><strong className="text-white">Rate Limiting:</strong> Platform-specific delays maintain करता है bans avoid करने के लिए</li>
        <li><strong className="text-white">Concurrent Requests:</strong> Multiple platforms पर simultaneously check कर सकता है (configurable threads)</li>
        <li><strong className="text-white">Proxy Support:</strong> HTTP/SOCKS proxy और Tor network support करता है anonymity के लिए</li>
        <li><strong className="text-white">Custom Data Source:</strong> data.json file से sites load होती है — custom sites add कर सकते हो</li>
      </ul>

      <h2>Installation</h2>
      <p>
        काली नेटहंटर में Sherlock available है। अगर नहीं है तो multiple तरीकों से install कर सकते हो। Python 3.8+ required है।
      </p>
      <CodeBlock
        title="Sherlock Installation"
        code={`# pip से install (सबसे आसान):
pip3 install sherlock-project

# GitHub से (latest features + development version):
git clone https://github.com/sherlock-project/sherlock.git
cd sherlock
pip3 install -r requirements.txt

# Run directly:
python3 sherlock --version

# Kali Linux / Nethunter में pre-installed:
sherlock --help

# Update to latest version:
pip3 install --upgrade sherlock-project

# ya GitHub से update:
cd sherlock && git pull

# Virtual environment में install (recommended):
python3 -m venv sherlock-env
source sherlock-env/bin/activate
pip3 install sherlock-project`}
      />

      <h2>Basic Usage</h2>
      <p>
        Sherlock का basic usage बहुत simple है — बस username दो और यह 300+ platforms पर search करेगा। Output real-time में दिखता है — हर found account हरे रंग (+) से mark होता है।
      </p>
      <CodeBlock
        title="Username Search"
        code={`# Single username search:
sherlock username123

# Multiple usernames एक साथ:
sherlock user1 user2 user3

# Output file में save (text format):
sherlock username --output results.txt

# CSV format (spreadsheet के लिए):
sherlock username --csv -o results.csv

# JSON format (programmatic use):
sherlock username --json -o results.json

# सिर्फ found results print करो:
sherlock username --print-found

# Verbose output (detailed info):
sherlock username -v

# सभी supported sites list करो:
sherlock --list

# NSFW sites exclude करो:
sherlock username --no-nsfw

# Specific sites पर search:
sherlock username --site instagram,twitter,github`}
      />

      <h2>Important Options</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Option</th>
              <th className="text-left py-2 px-3 text-neon-green">क्या करता है</th>
              <th className="text-left py-2 px-3 text-neon-green">Example</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--output FILE</td><td className="py-2 px-3">Results file में save करें</td><td className="py-2 px-3 font-mono text-xs">--output results.txt</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--csv</td><td className="py-2 px-3">CSV format में output</td><td className="py-2 px-3 font-mono text-xs">--csv -o results.csv</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--json</td><td className="py-2 px-3">JSON format में output</td><td className="py-2 px-3 font-mono text-xs">--json -o results.json</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--site SITE</td><td className="py-2 px-3">Specific sites पर search (comma-separated)</td><td className="py-2 px-3 font-mono text-xs">--site instagram,twitter</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--proxy URL</td><td className="py-2 px-3">Proxy use करें (HTTP/SOCKS)</td><td className="py-2 px-3 font-mono text-xs">--proxy socks5://127.0.0.1:9050</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--tor</td><td className="py-2 px-3">Tor network के through (anonymity)</td><td className="py-2 px-3 font-mono text-xs">--tor</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--timeout SEC</td><td className="py-2 px-3">Request timeout set करें (default 10)</td><td className="py-2 px-3 font-mono text-xs">--timeout 30</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--print-found</td><td className="py-2 px-3">सिर्फ found results print (clean output)</td><td className="py-2 px-3 font-mono text-xs">--print-found</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--no-nsfw</td><td className="py-2 px-3">NSFW/adult sites exclude</td><td className="py-2 px-3 font-mono text-xs">--no-nsfw</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--list</td><td className="py-2 px-3">सभी supported sites list करो</td><td className="py-2 px-3 font-mono text-xs">--list</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--data FILE</td><td className="py-2 px-3">Custom data.json file use करो</td><td className="py-2 px-3 font-mono text-xs">--data custom.json</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--browse</td><td className="py-2 px-3">Found profiles browser में open करो</td><td className="py-2 px-3 font-mono text-xs">--browse</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--local</td><td className="py-2 px-3">Local data.json use करो (no network)</td><td className="py-2 px-3 font-mono text-xs">--local</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">--nsfw</td><td className="py-2 px-3">सिर्फ NSFW sites पर search</td><td className="py-2 px-3 font-mono text-xs">--nsfw</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">-v / --verbose</td><td className="py-2 px-3">Verbose output (detailed info)</td><td className="py-2 px-3 font-mono text-xs">-v</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Site Database — 300+ Platforms</h2>
      <p>
        Sherlock 300+ sites support करता है जो 10+ categories में बंटे हैं। Community constantly नए sites add करती रहती है। data.json file में हर site का URL pattern, error type, और detection method defined है।
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Category</th>
              <th className="text-left py-2 px-3 text-neon-green">Platforms</th>
              <th className="text-left py-2 px-3 text-neon-green">Count</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Social Media</td><td className="py-2 px-3">Instagram, Twitter/X, Facebook, TikTok, Snapchat, LinkedIn, Pinterest, Tumblr, VK</td><td className="py-2 px-3">50+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Developer</td><td className="py-2 px-3">GitHub, GitLab, Bitbucket, StackOverflow, DeviantArt, CodePen, Replit, LeetCode</td><td className="py-2 px-3">30+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Forums</td><td className="py-2 px-3">Reddit, Quora, Medium, HackerNews, Discord, 4chan, StackExchange</td><td className="py-2 px-3">25+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Gaming</td><td className="py-2 px-3">Steam, Xbox, PlayStation, Roblox, Minecraft, Epic Games, Battle.net, Origin</td><td className="py-2 px-3">30+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Creative</td><td className="py-2 px-3">Pinterest, Spotify, WordPress, Gravatar, Flickr, 500px, Behance, Dribbble</td><td className="py-2 px-3">35+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Messaging</td><td className="py-2 px-3">Telegram, WhatsApp, Signal, Keybase, Wire, Wickr</td><td className="py-2 px-3">15+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Dating</td><td className="py-2 px-3">Tinder, OkCupid, Bumble, PlentyOfFish, Match.com</td><td className="py-2 px-3">15+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Professional</td><td className="py-2 px-3">LinkedIn, AngelList, About.me, Gravatar, Keybase</td><td className="py-2 px-3">20+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Finance</td><td className="py-2 px-3">Patreon, Ko-fi, BuyMeACoffee, CashApp, Venmo</td><td className="py-2 px-3">15+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Video</td><td className="py-2 px-3">YouTube, Twitch, Dailymotion, Vimeo, Rumble, Bitchute</td><td className="py-2 px-3">20+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Music</td><td className="py-2 px-3">Spotify, SoundCloud, Last.fm, Bandcamp, ReverbNation</td><td className="py-2 px-3">15+</td></tr>
            <tr><td className="py-2 px-3 text-white font-bold">Others</td><td className="py-2 px-3">eBay, Etsy, Fiverr, Freelancer, Upwork, Wikipedia, WordPress</td><td className="py-2 px-3">40+</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Output Options — Flexible Formats</h2>
      <p>
        Sherlock multiple output formats support करता है जो different use cases के लिए useful हैं। Text format quick review के लिए, CSV spreadsheet analysis के लिए, और JSON programmatic processing के लिए।
      </p>
      <CodeBlock
        title="Output Formats"
        code={`# Text file (default format):
sherlock username -o results.txt
# Output: [+] Instagram: https://instagram.com/username
#         [+] Twitter: https://twitter.com/username

# CSV format (spreadsheet import के लिए):
sherlock username --csv -o results.csv
# Columns: username, name, url_main, url_user, exists, http_status

# JSON format (programmatic use के लिए):
sherlock username --json -o results.json
# Structured data — Python/JS में parse कर सकते हो

# Folder output (multiple usernames के लिए):
sherlock user1 user2 user3 -o ./results/ --folderoutput
# हर username की अलग file बनेगी

# Multiple formats together:
sherlock username -o results.txt --json -o results.json --csv -o results.csv

# Pipe to other tools:
sherlock username --print-found | grep "instagram" | awk '{print $NF}'

# Real-time display (default):
# Found accounts green (+) से, not found gray (-) से`}
      />

      <h2>Tor and Proxy Support</h2>
      <p>
        OSINT operations में anonymity बहुत important है। Sherlock Tor network, SOCKS proxy, और HTTP proxy support करता है। यह rate limiting bypass करने और IP-based blocking avoid करने में help करता है।
      </p>
      <CodeBlock
        title="Anonymity Options"
        code={`# Tor network use करें (सबसे anonymous):
# पहले Tor install और start करो:
sudo apt install tor
sudo systemctl start tor

# Sherlock with Tor:
sherlock username --tor
# सारा traffic Tor network से जाएगा

# SOCKS5 proxy:
sherlock username --proxy socks5://127.0.0.1:9050

# HTTP proxy:
sherlock username --proxy http://127.0.0.1:8080

# Burp Suite proxy (traffic capture):
sherlock username --proxy http://127.0.0.1:8080

# Proxychains से (advanced):
proxychains sherlock username
# /etc/proxychains4.conf में proxy configure करो

# Custom User-Agent:
sherlock username --useragent "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"

# Rate limit bypass — timeout बढ़ाओ:
sherlock username --timeout 20`}
      />

      <h2>Multi-user Search — Batch Processing</h2>
      <p>
        Investigation में often multiple usernames search करने होते हैं। Sherlock batch processing support करता है — multiple usernames एक साथ, file से, या loop में।
      </p>
      <CodeBlock
        title="Batch Processing"
        code={`# Multiple usernames एक साथ:
sherlock user1 user2 user3 user4 user5

# File से usernames read करो:
cat usernames.txt | while read user; do
  echo "[+] Searching: $user"
  sherlock "$user" --print-found -o "results/results_$user.txt"
  sleep 10  # Rate limit respect
done

# Single file में सभी results:
sherlock user1 user2 user3 -o all_results.txt

# Specific sites पर multiple users:
sherlock user1 user2 --site instagram,twitter,github -o results.txt

# JSON output multiple users:
sherlock user1 user2 --json -o results.json

# Automation script — comprehensive OSINT:
#!/bin/bash
TARGET="$1"
echo "[*] Sherlock scan for: $TARGET"
sherlock "$TARGET" --print-found -o "\${TARGET}_social.txt"
echo "[*] Found accounts:"
cat "\${TARGET}_social.txt" | grep "\\[+\\]" | wc -l
echo "[*] Total platforms checked:"
cat "\${TARGET}_social.txt" | wc -l`}
      />

      <h2>Custom Site Addition</h2>
      <p>
        Sherlock में custom sites add कर सकते हो — अगर कोई platform support नहीं है तो data.json में entry add करके support जोड़ सकते हो। यह feature बहुत powerful है — internal portals, company intranets, और niche platforms के लिए custom detection बना सकते हो।
      </p>
      <CodeBlock
        title="Custom Sites"
        code={`# data.json file edit करें:
# Location: sherlock/sherlock/resources/data.json
# ya ~/.local/lib/python3.x/site-packages/sherlock/resources/data.json

# New site entry format:
{
  "mysite": {
    "url": "https://mysite.com/user/{}",
    "urlMain": "https://mysite.com",
    "username_claimed": "admin",
    "username_unclaimed": "none",
    "errorType": "status_code",
    "errorCode": 404
  }
}

# Error types (detection methods):
# "status_code" — HTTP status code check (404 = not found)
# "message" — Page content में specific text search
# "response_url" — Redirect URL check

# Message-based detection example:
{
  "mysite": {
    "url": "https://mysite.com/user/{}",
    "errorType": "message",
    "errorMsg": "User not found"
  }
}

# Custom data.json use करें:
sherlock username --data custom_data.json

# Verify custom site works:
sherlock username --site mysite --print-found

# data.json add करने के बाद PR submit करो GitHub पर
# ताकि community को भी benefit मिले`}
      />

      <h2>Error Handling and Debugging</h2>
      <p>
        Sherlock run करते समय कुछ common errors आते हैं जिन्हें handle करना आना चाहिए:
      </p>
      <CodeBlock
        title="Debugging Techniques"
        code={`# Verbose mode से detailed output:
sherlock username -v
# हर request का status, response time, और detection method दिखेगा

# Connection issues debug:
sherlock username --timeout 30 -v
# Timeout बढ़ाओ slow connections के लिए

# Proxy issues debug:
sherlock username --proxy http://127.0.0.1:8080 -v
# Burp Suite में traffic check करो

# Rate limiting detect:
# "[!] Rate limit detected" message दिखे तो:
# 1. --timeout बढ़ाओ (20-30 sec)
# 2. Proxy/Tor switch करो
# 3. Specific sites select करो

# False positive identification:
# Browser में URL manually open करो
# Page content check करो — "user not found" message?
# HTTP response code manually check करो:
curl -s -o /dev/null -w "%{http_code}" https://instagram.com/username

# data.json verify करो:
python3 -c "
import json
with open('sherlock/resources/data.json') as f:
    data = json.load(f)
print(f'Total sites: {len(data)}')
for site in data:
    print(f'  {site}: {data[site][\"errorType\"]}')
"

# Custom data.json test:
sherlock username --data custom.json --site mysite -v

# Network troubleshooting:
ping -c 3 instagram.com
nslookup instagram.com
traceroute instagram.com`}
      />

      <h2>Site Categories — Detailed Breakdown</h2>
      <p>
        Sherlock की 300+ sites को समझना important है — different categories अलग-अलग intelligence देती हैं। Social media से personal interests पता चलते हैं, developer platforms से technical skills, dating sites से personal life, और forums से opinions। हर category का investigation में अलग significance है। Social media profiles से lifestyle, interests, और social circle का पता चलता है। Developer platforms से technical skills, projects, और accidentally leaked credentials मिल सकते हैं। Dating platforms से personal preferences, location, और age range का estimate होता है। Professional platforms से work history, company, और career trajectory दिखती है। Gaming platforms से age range, interests, और online friends का network पता चलता है। Finance platforms से donation patterns और income hints मिलते हैं।
      </p>
      <CodeBlock
        title="Category-wise Search"
        code={`# सिर्फ social media platforms:
sherlock username --site instagram,twitter,facebook,tiktok,snapchat

# Developer platforms:
sherlock username --site github,gitlab,stackoverflow,deviantart,codepen

# Gaming platforms:
sherlock username --site steam,xbox,playstation,roblox,minecraft

# Dating platforms:
sherlock username --site tinder,okcupid,bumble,plentyoffish

# Professional platforms:
sherlock username --site linkedin,angelist,aboutme,gravatar

# Messaging platforms:
sherlock username --site telegram,whatsapp,signal,keybase

# Finance/Donation platforms:
sherlock username --site patreon,ko-fi,buymeacoffee

# Video platforms:
sherlock username --site youtube,twitch,dailymotion,vimeo

# Music platforms:
sherlock username --site spotify,soundcloud,lastfm,bandcamp

# Category-wise analysis:
# Social media → personal life, interests, friends
# Developer → technical skills, projects, email leaks
# Gaming → gaming habits, friends, age range
# Dating → personal preferences, location
# Professional → work history, company, skills
# Finance → donation patterns, income hints`}
      />

      <h2>Detection Methods — How Sherlock Confirms</h2>
      <p>
        Sherlock की accuracy इसकी detection methods पर depend करती है। हर platform का behavior अलग होता है — कुछ 404 देते हैं, कुछ redirect करते हैं, कुछ message show करते हैं। Sherlock data.json में हर site का detection method defined है।
      </p>
      <CodeBlock
        title="Detection Methods"
        code={`# Method 1: Status Code (सबसे common)
# Platform: Instagram, Twitter, GitHub
# Logic: 200 = found, 404 = not found
# Example: github.com/username → 200 (exists) vs 404 (doesn't)

# Method 2: Message Detection
# Platform: Reddit, Medium
# Logic: Page content में "user not found" search
# Example: reddit.com/user/username → page content check

# Method 3: Response URL Detection
# Platform: Tumblr, WordPress
# Logic: Redirect to error page = not found
# Example: username.tumblr.com → redirect to dashboard = exists

# data.json में detection method:
{
  "Instagram": {
    "url": "https://www.instagram.com/{}",
    "errorType": "status_code",
    "errorCode": 404
  },
  "Reddit": {
    "url": "https://www.reddit.com/user/{}",
    "errorType": "message",
    "errorMsg": "Sorry, nobody on Reddit goes by that name"
  },
  "Tumblr": {
    "url": "https://{}.tumblr.com",
    "errorType": "response_url",
    "errorUrl": "https://www.tumblr.com/account/doesnt_exist"
  }
}

# Accuracy depends on:
# 1. Correct errorType in data.json
# 2. Platform API changes
# 3. Rate limiting behavior
# 4. Regional differences (geo-blocking)`}
      />

      <h2>Scripting and Automation</h2>
      <p>
        Sherlock को scripts में integrate करके automated OSINT pipeline बना सकते हो। Bash, Python, और PowerShell सब support करता है। JSON output format से programmatic processing आसान हो जाती है।
      </p>
      <CodeBlock
        title="Automation Scripts"
        code={`#!/bin/bash
# Comprehensive OSINT script — Sherlock + theHarvester + Amass

TARGET="$1"
OUTPUT_DIR="./osint_$TARGET"
mkdir -p "$OUTPUT_DIR"

echo "[*] Starting OSINT for: $TARGET"
echo "[*] Output directory: $OUTPUT_DIR"

# Step 1: Username enumeration
echo "[+] Step 1: Sherlock username search..."
sherlock "$TARGET" --print-found -o "$OUTPUT_DIR/sherlock.txt"
FOUND_COUNT=$(cat "$OUTPUT_DIR/sherlock.txt" | grep "\\[+\\]" | wc -l)
echo "[+] Found $FOUND_COUNT accounts"

# Step 2: Email harvesting
echo "[+] Step 2: theHarvester email search..."
theHarvester -d "$TARGET" -b google,bing -f "$OUTPUT_DIR/harvester.html"

# Step 3: Subdomain enumeration
echo "[+] Step 3: Subfinder subdomain search..."
subfinder -d "$TARGET" -o "$OUTPUT_DIR/subdomains.txt"

# Step 4: Cross-reference
echo "[+] Step 4: Cross-referencing results..."
# Username से email pattern guess करो
# user123 → user123@gmail.com, user123@company.com
while read email; do
  username=$(echo "$email" | cut -d@ -f1)
  sherlock "$username" --print-found --timeout 15
done < "$OUTPUT_DIR/harvester_emails.txt"

echo "[*] OSINT complete. Results in $OUTPUT_DIR/"`}
      />

      <CodeBlock
        title="Python Integration"
        code={`#!/usr/bin/env python3
# Python से Sherlock use करो — programmatic OSINT

import subprocess
import json
import csv

def search_username(username, sites=None):
    """Sherlock run करें और results parse करें"""
    cmd = ['sherlock', username, '--json', '-o', '/tmp/sherlock.json']

    if sites:
        cmd.extend(['--site', ','.join(sites)])

    subprocess.run(cmd, capture_output=True, timeout=300)

    try:
        with open('/tmp/sherlock.json') as f:
            return json.load(f)
    except:
        return {}

def analyze_results(results):
    """Results analyze करें"""
    found = {k: v for k, v in results.items() if v.get('exists') == 'Claimed'}
    not_found = {k: v for k, v in results.items() if v.get('exists') == 'Available'}

    print(f"[+] Found: {len(found)} accounts")
    print(f"[-] Not found: {len(not_found)} platforms")

    for site, data in found.items():
        print(f"  [+] {site}: {data.get('url_user', 'N/A')}")

    return found

# Multiple usernames scan:
usernames = ['user1', 'user2', 'target_user']
for user in usernames:
    print(f"\\n[*] Scanning: {user}")
    results = search_username(user)
    found = analyze_results(results)

    # CSV export:
    with open(f'{user}_results.csv', 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['Site', 'URL', 'Status'])
        for site, data in found.items():
            writer.writerow([site, data.get('url_user', ''), 'Found'])`}
      />

      <CodeBlock
        title="Privacy Audit Script"
        code={`#!/bin/bash
# Personal privacy audit — अपना digital footprint check करो

echo "[*] Personal Privacy Audit Tool"
echo "[*] This tool checks YOUR digital footprint"
echo ""

# अपना username दो:
read -p "Enter your username: " MY_USERNAME

echo "[*] Checking digital footprint for: $MY_USERNAME"
echo ""

# Search करो:
sherlock "$MY_USERNAME" --print-found -o "privacy_audit_\${MY_USERNAME}.txt"

# Results analyze:
echo ""
echo "=== Privacy Audit Results ==="
FOUND=$(cat "privacy_audit_\${MY_USERNAME}.txt" | grep "\\[+\\]" | wc -l)
TOTAL=$(cat "privacy_audit_\${MY_USERNAME}.txt" | wc -l)

echo "[*] Found on $FOUND out of $TOTAL platforms"
echo ""
echo "[!] Recommendations:"
echo "  1. Delete accounts you don't use"
echo "  2. Set remaining profiles to private"
echo "  3. Use different usernames for different platforms"
echo "  4. Don't use real name in usernames"
echo "  5. Enable 2FA on all accounts"
echo "  6. Regularly check your digital footprint"`}
      />

      <h2>Sherlock vs Other Tools</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Feature</th>
              <th className="text-left py-2 px-3 text-neon-green">Sherlock</th>
              <th className="text-left py-2 px-3 text-neon-green">Maigret</th>
              <th className="text-left py-2 px-3 text-neon-green">socialscan</th>
              <th className="text-left py-2 px-3 text-neon-green">WhatsMyName</th>
              <th className="text-left py-2 px-3 text-neon-green">namechk</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Sites Count</td><td className="py-2 px-3">300+</td><td className="py-2 px-3">2000+</td><td className="py-2 px-3">~20</td><td className="py-2 px-3">500+</td><td className="py-2 px-3">100+</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Speed</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Very Fast</td><td className="py-2 px-3">Fast</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">JSON Output</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">JSON API</td><td className="py-2 px-3">No</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">CLI</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Web + API</td><td className="py-2 px-3">Web</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Proxy Support</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">N/A</td><td className="py-2 px-3">N/A</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Tor Support</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">No</td><td className="py-2 px-3">N/A</td><td className="py-2 px-3">No</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Custom Sites</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">No</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">No</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Open Source</td><td className="py-2 px-3">Yes (MIT)</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">Yes</td><td className="py-2 px-3">No</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Accuracy</td><td className="py-2 px-3">High</td><td className="py-2 px-3">Very High</td><td className="py-2 px-3">Very High</td><td className="py-2 px-3">High</td><td className="py-2 px-3">Medium</td></tr>
            <tr><td className="py-2 px-3 text-white font-bold">Ease of Use</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Easy</td><td className="py-2 px-3">Easiest</td><td className="py-2 px-3">Easiest</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Common Problems and Solutions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'बहुत सारे false positives आ रहे हैं', a: '--print-found flag use करो। कुछ platforms rate limit detect नहीं कर पाते। Specific sites select करो --site flag से। data.json में claimed username verify करो। Manually verify करो — browser में URL open करके confirm करो।' },
          { q: 'बहुत धीमा चल रहा है', a: 'Specific sites select करो --site flag से (300+ sites slow होता है)। Network connection check करो। --timeout कम करो (default 10 → 5)। Faster DNS use करो (8.8.8.8)।' },
          { q: 'Connection timeout आ रहा है', a: '--timeout 30 set करो (default 10 sec)। Tor use कर रहे हो तो Tor service check करो: systemctl status tor। Proxy try करो। Firewall check करो — outbound connections allowed हों।' },
          { q: 'Rate limited / blocked हो गया', a: 'Proxy/Tor switch करो। --timeout बढ़ाओ (20-30 sec)। कुछ time बाद retry करो। Specific sites target करो सभी के बजाय। Different IP से try करो (VPN)।' },
          { q: 'pip install fail हो रहा है', a: 'Python 3.8+ चाहिए। pip3 --version check करो। Virtual environment use करो: python3 -m venv venv && source venv/bin/activate && pip3 install sherlock-project' },
          { q: 'Some sites always show "found" (false positive)', a: 'Platform API change हो गया होगा। data.json update करो: git pull। Issue file करो GitHub पर। --site flag से problematic site exclude करो।' },
          { q: 'JSON output parse नहीं हो रहा', a: '--json flag साथ में -o output.json भी दो। File properly write हो रही है verify करो। Python में: json.load(open("output.json"))' },
          { q: 'Kali में sherlock command not found', a: 'pip3 install sherlock-project करो। PATH check करो: which sherlock। ~/.local/bin PATH में add करो: export PATH=$PATH:~/.local/bin' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Detection and Defense</h2>
      <p>
        Sherlock-based enumeration से बचना important है — अगर आप target हो रहे हो तो यह defenses लगाओ:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neon-green/30">
              <th className="text-left py-2 px-3 text-neon-green">Defense</th>
              <th className="text-left py-2 px-3 text-neon-green">कैसे करें</th>
              <th className="text-left py-2 px-3 text-neon-green">Effectiveness</th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Different Usernames</td><td className="py-2 px-3">हर platform पर different username use करो — cross-platform tracking मुश्किल होगी</td><td className="py-2 px-3">High</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Privacy Settings</td><td className="py-2 px-3">सभी profiles private रखो — public profiles easily detectable हैं</td><td className="py-2 px-3">High</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">No Real Name</td><td className="py-2 px-3">Real name username में मत डालो — pseudonyms use करो</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Delete Unused Accounts</td><td className="py-2 px-3">Old, unused accounts delete करो — surface area कम होगी</td><td className="py-2 px-3">High</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Rate Limiting (Platform)</td><td className="py-2 px-3">Platforms automated queries रोकने के लिए rate limiting implement करें</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">CAPTCHA</td><td className="py-2 px-3">Suspicious activity पर CAPTCHA show करें — bots रोकें</td><td className="py-2 px-3">Medium</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Fake Profiles</td><td className="py-2 px-3">Decoy profiles बनाओ investigation confuse करने के लिए</td><td className="py-2 px-3">Low</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Monitor Footprint</td><td className="py-2 px-3">Regularly check करो कि कौन से platforms पर profile public है — Sherlock अपने ऊपर use करो</td><td className="py-2 px-3">High</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-bold">Email Aliases</td><td className="py-2 px-3">Different emails for different platforms — email से username guess मुश्किल</td><td className="py-2 px-3">High</td></tr>
            <tr><td className="py-2 px-3 text-white font-bold">VPN/Proxy Always</td><td className="py-2 px-3">हमेशा VPN use करो — IP-based correlation avoid होगी</td><td className="py-2 px-3">Medium</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Lab Environment Setup</h2>
      <p>
        OSINT practice के लिए safe environment बनाना important है। कभी भी बिना permission किसी और का OSINT मत करो — अपने ऊपर practice करो या authorized CTF challenges use करो।
      </p>
      <CodeBlock
        title="Practice Lab"
        code={`# Step 1: अपना digital footprint check करो
sherlock your_username --print-found -o my_footprint.txt
echo "[*] आप कितने platforms पर मौजूद हो?"
cat my_footprint.txt | grep "\\[+\\]" | wc -l

# Step 2: Privacy settings update करो
# जो accounts ज़रूरी नहीं — delete करो
# जो रखने हैं — private करो

# Step 3: Different usernames set करो
# हर platform पर unique username — cross-platform tracking मुश्किल

# Step 4: OSINT practice targets
# - TryHackMe OSINT rooms (free, legal)
# - TraceLabs CTF (missing persons OSINT — good cause)
# - Your own accounts (self-audit)
# - Company employee list (authorized pentest)

# Step 5: Advanced OSINT tools सीखो
# - theHarvester (email OSINT)
# - Maltego (visual OSINT)
# - SpiderFoot (automated OSINT)
# - Recon-ng (OSINT framework)

# Step 6: Privacy best practices
# - Password manager use करो
# - 2FA enable करो
# - Regularly audit करो
# - Minimal information share करो`}
      />

      <h2>Advanced Techniques</h2>
      <p>
        Sherlock को advanced OSINT workflow में integrate करके deep intelligence gather कर सकते हो:
      </p>
      <CodeBlock
        title="Advanced OSINT Techniques"
        code={`# Technique 1: Username Pattern Analysis
# Known username से patterns guess करो:
# user123 → user124, user_123, user.123, user1234
# user.admin → admin.user, user_admin, useradmin
# sherlock user123 user124 user_123 user.123

# Technique 2: Cross-Reference with Email OSINT
# theHarvester से email find करो:
theHarvester -d target.com -b google,bing | grep "@"
# Email prefix = potential username
# john.doe@company.com → sherlock john.doe johndoe john_doe

# Technique 3: Profile Picture Analysis
# Found profiles से photos निकालो
# Reverse image search करो:
# - Google Images: images.google.com
# - TinEye: tineye.com
# - Yandex Images: yandex.com/images
# Same photo = same person (identity confirmation)

# Technique 4: Metadata Extraction
# Profile photos से EXIF data निकालो:
exiftool profile_photo.jpg
# GPS coordinates, camera model, date/time
# यह information location tracking में useful है

# Technique 5: Timeline Analysis
# कब कौन से platform join किया?
# Activity patterns क्या हैं? (time zone, active hours)
# Location clues? (check-ins, tagged posts)

# Technique 6: Social Graph Analysis
# Friends/followers list analyze करो
# Common connections find करो
# Communication patterns map करो

# Technique 7: Content Analysis
# Posts, tweets, comments analyze करो
# Interests, opinions, beliefs identify करो
# Language patterns, writing style match करो`}
      />

      <h2>Real-World Case Studies</h2>
      <p>
        Sherlock का real-world OSINT investigations में बहुत valuable use होता है। Law enforcement agencies missing persons cases में online presence track करने के लिए इस्तेमाल करती हैं। अगर कोई व्यक्ति गायब है और उसका एक username पता है, तो Sherlock 300+ platforms पर उसके accounts ढूंढ सकता है — इससे उसकी last online activity, location clues, और communication patterns का पता चलता है।
      </p>
      <p>
        Bug bounty programs में Sherlock reconnaissance phase का essential tool है। Target company के employees के usernames search करके उनके social media presence map किया जा सकता है। एक real case में, security researcher ने company CEO का personal Instagram, Twitter, और GitHub account find किया — CEO के GitHub profile से accidentally leaked API keys मिलीं जो company infrastructure access देती थीं। यह finding $5000 bounty में convert हुई।
      </p>
      <p>
        Digital forensics में Sherlock suspect के online identity mapping में use होता है। एक investigation में, cybercrime unit के पास suspect का सिर्फ एक username था — Sherlock ने 15 platforms पर accounts find किए। Dating profile से location data मिली, gaming platform से friends list, और developer platform से email address। यह cross-platform intelligence case solve करने में critical थी।
      </p>

      <h2>Performance Tuning</h2>
      <p>
        Sherlock की speed और accuracy optimize करने के लिए:
      </p>
      <CodeBlock
        title="Performance Optimization"
        code={`# Speed optimization:
# 1. Specific sites select करो (300+ sites slow होता है):
sherlock username --site instagram,twitter,github

# 2. Timeout कम करो (fast network पर):
sherlock username --timeout 5

# 3. NSFW sites skip करो (unnecessary requests):
sherlock username --no-nsfw

# 4. Print-found only (clean output):
sherlock username --print-found

# Accuracy optimization:
# 1. Latest version use करो:
pip3 install --upgrade sherlock-project

# 2. Custom data.json (curated list):
sherlock username --data curated_sites.json

# 3. Manual verification workflow:
sherlock username --print-found -o results.txt
# Browser में हर URL manually verify करो

# Memory optimization (many usernames):
# Process in batches, not all at once
for user in $(cat usernames.txt | head -20); do
    sherlock "$user" --print-found --timeout 10
done`}
      />

      <h2>Reporting and Output Analysis</h2>
      <p>
        Sherlock के results को effectively analyze और report करना important है:
      </p>
      <CodeBlock
        title="Result Analysis"
        code={`# JSON output analyze करो:
sherlock username --json -o results.json

# Python से analysis:
python3 << 'EOF'
import json

with open('results.json') as f:
    data = json.load(f)

found = {k: v for k, v in data.items() if v.get('exists') == 'Claimed'}
print(f"Found on {len(found)} platforms:")
for site, info in found.items():
    print(f"  [+] {site}: {info.get('url_user', 'N/A')}")
EOF

# CSV report बनाओ:
sherlock username --csv -o results.csv
# Excel/Google Sheets में import करो

# Categories में organize करो:
# Social media → personal life mapping
# Developer → technical skills, email leaks
# Professional → work history, company info
# Gaming → age range, interests, friends

# Summary report script:
#!/bin/bash
echo "=== OSINT Report: $1 ==="
echo "Date: $(date)"
echo "Total platforms checked: $(wc -l < results.txt)"
echo "Accounts found: $(grep '\\[+\\]' results.txt | wc -l)"
echo ""
echo "Found accounts:"
grep '\\[+\\]' results.txt | awk '{print $2, $NF}'`}
      />

      <h2>Frequently Asked Questions</h2>
      <div className="space-y-3 mt-4">
        {[
          { q: 'क्या Sherlock illegal है?', a: 'नहीं — यह सिर्फ publicly available data check करता है। लेकिन इसका misuse (stalking, harassment, doxxing) illegal है। हमेशा authorized use करो। भारत में IT Act Section 66, 66C, 66D applicable है।' },
          { q: 'कितने sites support करता है?', a: '300+ sites! Community constantly नए sites add करती रहती है। --list flag से देख सकते हो। Maigret (Sherlock fork) 2000+ sites support करता है।' },
          { q: 'Rate limited हो गया हूँ?', a: 'Proxy/Tor switch करो। --timeout बढ़ाओ (20-30 sec)। कुछ time बाद retry करो। Specific sites target करो सभी के बजाय। VPN use करो।' },
          { q: 'False positives कैसे कम करें?', a: '--print-found flag use करो। Manually verify करो results — browser में URL open करो। data.json में errorType check करो। Latest version use करो (git pull)।' },
          { q: 'Python version requirement?', a: 'Python 3.8+ चाहिए। pip3 --version से check करो। Virtual environment recommended है — isolation मिलती है।' },
          { q: 'क्या Sherlock real-time results देता है?', a: 'हाँ! Results real-time में terminal में दिखते हैं। Found accounts green (+) से, not found gray (-) से mark होते हैं।' },
          { q: 'Custom sites add कैसे करें?', a: 'data.json file edit करो — URL pattern, error type, और detection method define करो। GitHub PR submit करो community के लिए।' },
          { q: 'Sherlock vs Maigret — कौन better है?', a: 'Maigret (Sherlock fork) 2000+ sites support करता है और more accurate है। लेकिन Sherlock original है और community support बेहतर है। दोनों try करो।' },
          { q: 'क्या Sherlock Tor support करता है?', a: 'हाँ! --tor flag से Tor network use होता है। Tor install और start करो पहले: sudo apt install tor && sudo systemctl start tor' },
          { q: 'Batch scanning कैसे करें?', a: 'Multiple usernames एक साथ: sherlock user1 user2 user3। या file से loop में process करो। --folderoutput से हर user की separate file बनाओ।' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-4">
            <h4 className="text-white font-mono font-semibold mb-2">Q: {item.q}</h4>
            <p className="text-gray-400 text-sm">A: {item.a}</p>
          </div>
        ))}
      </div>

      <h2>Integration with Other Tools</h2>
      <p>
        Sherlock को दूसरे OSINT tools के साथ combine करके comprehensive intelligence gather कर सकते हो:
      </p>
      <CodeBlock
        title="OSINT Tool Integration"
        code={`# Sherlock + holehe (email OSINT):
# Sherlock से username find करो, holehe से email verify
sherlock target_user --print-found -o sherlock_results.txt
holehe target_user@gmail.com  # email से accounts find

# Sherlock + theHarvester (email + domain OSINT):
theHarvester -d target.com -b google -f harvester.html
# Emails में से usernames extract करो
grep "@" harvester_results.txt | cut -d@ -f1 | sort -u > usernames.txt
# Harvester usernames पर Sherlock run करो
while read user; do sherlock "$user" --print-found; done < usernames.txt

# Sherlock + Amass (subdomain + username OSINT):
amass enum -d target.com -o subdomains.txt
# Subdomains से usernames guess करो
cat subdomains.txt | cut -d. -f1 | sort -u > guessed_users.txt
sherlock $(cat guessed_users.txt | tr '\n' ' ') --print-found

# Sherlock + Maltego (visual OSINT):
# Sherlock JSON output → Maltego import
sherlock target --json -o target_sherlock.json
# Maltego में CSV import करो — entity graph बनाओ

# Sherlock + SpiderFoot (automated OSINT):
spiderfoot -s target.com -m sfp_sherlock
# SpiderFoot Sherlock module automatically use करता है

# Full OSINT pipeline:
#!/bin/bash
TARGET="$1"
echo "[*] Phase 1: Username search"
sherlock "$TARGET" --print-found -o "$TARGET"_social.txt
echo "[*] Phase 2: Email search"
holehe "$TARGET@gmail.com"
echo "[*] Phase 3: Subdomain search"
subfinder -d "$TARGET.com" -silent
echo "[*] Phase 4: Visual mapping"
echo "Import results into Maltego for visualization"`}
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
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Maigret</td><td className="py-2 px-3">Username OSINT (Sherlock fork)</td><td className="py-2 px-3">2000+ sites, more accurate, better detection</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">WhatsMyName</td><td className="py-2 px-3">Username enumeration</td><td className="py-2 px-3">Web-based, 500+ sites, JSON API, curated list</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">socialscan</td><td className="py-2 px-3">Username/email availability</td><td className="py-2 px-3">Fast, accurate, ~20 sites, API-based detection</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">namechk</td><td className="py-2 px-3">Username availability check</td><td className="py-2 px-3">Web interface, 100+ sites, brand check</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">theHarvester</td><td className="py-2 px-3">Email/subdomain OSINT</td><td className="py-2 px-3">Email addresses, DNS records, multiple sources</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">Maltego</td><td className="py-2 px-3">Visual OSINT framework</td><td className="py-2 px-3">Graph-based, relationship mapping, transforms</td></tr>
            <tr className="border-b border-dark-600"><td className="py-2 px-3 text-white font-mono">SpiderFoot</td><td className="py-2 px-3">Automated OSINT</td><td className="py-2 px-3">200+ modules, web UI, comprehensive</td></tr>
            <tr><td className="py-2 px-3 text-white font-mono">holehe</td><td className="py-2 px-3">Email to account finder</td><td className="py-2 px-3">Email से accounts find — 120+ sites</td></tr>
          </tbody>
        </table>
      </div>

      <div className="info-box mt-6">
        <strong>💡 Pro Tips:</strong>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li>अपना username search करके digital footprint audit करो — privacy improve करो</li>
          <li>Bug bounty में target company employees के usernames search करो — social engineering vectors मिल सकते हैं</li>
          <li>--print-found flag हमेशा use करो — clean output मिलता है, noise कम होती है</li>
          <li>Maigret भी try करो — Sherlock fork है जो 2000+ sites support करता है</li>
          <li>JSON output use करो — programmatic processing आसान हो जाती है</li>
          <li>Different usernames pattern analysis करो — username variations try करो</li>
          <li>Tor/Proxy use करो investigation के दौरान — IP-based detection avoid होगी</li>
          <li>Regularly audit करो अपना digital footprint — Sherlock automate script बनाओ</li>
          <li>Username wordlists बनाओ company employees के लिए — firstname.lastname pattern try करो</li>
          <li>Found profiles से profile pictures download करो — reverse image search से और accounts मिल सकते हैं</li>
          <li>Cross-reference करो — email OSINT (holehe) + username OSINT (Sherlock) combo use करो</li>
          <li>Sherlock को cron job में डालो — weekly automated digital footprint monitoring करो</li>
          <li>NSFW sites exclude करो professional investigations में — --no-nsfw flag use करो</li>
          <li>Sherlock output को Maltego में import करो — visual social network map बनाओ</li>
          <li>Rate limiting avoid करने के लिए --timeout 15-20 set करो — slow but complete scan होगा</li>
          <li>Username variations automatically generate करो — user123, user_123, user.123 सब try करो</li>
          <li>Found accounts को periodically re-check करो — accounts delete या rename हो सकते हैं</li>
          <li>Sherlock को cron job में डालो — monthly automated digital footprint monitoring</li>
          <li>Corporate pentest में employee name list से usernames generate करो — firstname.lastname pattern</li>
          <li>Sherlock + holehe combo email-to-username और username-to-email दोनों directions में काम करता है</li>
          <li>Found profiles से bio/description extract करो — additional intelligence gather हो सकती है</li>
          <li>VPN rotation use करो large-scale scans में — IP blocking avoid होगी</li>
          <li>Sherlock results को timeline format में organize करो — pattern recognition आसान होगी</li>
          <li>False positive reduction के लिए multiple detection methods cross-verify करो</li>
          <li>CTF competitions में OSINT challenges के लिए Sherlock + SpiderFoot combo best है</li>
          <li>Privacy awareness campaigns में Sherlock demo use करो — digital footprint impact दिखाओ</li>
          <li>Dark web usernames भी try करो — onion sites के लिए Tor proxy से scan करो</li>
          <li>Sherlock data.json में नए sites add करके community contribute करो — GitHub PR submit करो</li>
          <li>Large-scale investigations में results को database में store करो — SQLite best option है</li>
          <li>Sherlock output को HTML report में convert करो — clients को present करने में आसान</li>
          <li>Username OSINT को email OSINT (holehe, theHarvester) के साथ correlate करो — complete profile बनेगा</li>
          <li>Platform-specific intelligence gather करो — GitHub repos, Twitter tweets, Instagram posts analyze करो</li>
          <li>Automated monitoring script बनाओ — new accounts detect होने पर alert भेजो</li>
          <li>Sherlock results को JSON format में save करो — programmatic analysis आसान होगी</li>
          <li>Rate limiting bypass के लिए residential proxy use करो — datacenter proxies easily block होते हैं</li>
          <li>Professional OSINT certification (GOSI, OSIP) pursue करो — structured learning मिलेगी</li>
          <li>Sherlock community Discord/GitHub active है — latest updates और techniques के लिए join करो</li>
          <li>Bug bounty reports में Sherlock findings attach करो — severity increase हो सकती है</li>
        </ul>
      </div>

      <div className="warning-box mt-6">
        <strong>⚠️ फाइनल वार्निंग:</strong> Sherlock एक powerful OSINT tool है जो publicly available data ढूंढता है। इसका इस्तेमाल केवल authorized testing, अपने digital footprint audit, bug bounty, और educational purposes के लिए करें। बिना अनुमति के किसी का online presence track करना, stalking करना, या harassment के लिए use करना अवैध है। भारत में आईटी एक्ट 2000 की धारा 66, 66C, और 66D के तहत cyberstalking, identity theft, और cheating by impersonation अपराध है — 3 साल तक की जेल और जुर्माना हो सकता है। हमेशा दूसरों की privacy का सम्मान करें।
      </div>
    </TutorialLayout>
  )
}
