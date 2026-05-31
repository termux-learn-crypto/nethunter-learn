import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'

// Lazy load all tool pages
const AircrackNg = lazy(() => import('./pages/tools/AircrackNg'))
const NmapTool = lazy(() => import('./pages/tools/Nmap'))
const MetasploitTool = lazy(() => import('./pages/tools/Metasploit'))
const BettercapTool = lazy(() => import('./pages/tools/Bettercap'))
const WifiteTool = lazy(() => import('./pages/tools/Wifite'))
const SqlmapTool = lazy(() => import('./pages/tools/Sqlmap'))
const HydraTool = lazy(() => import('./pages/tools/Hydra'))
const JohnTool = lazy(() => import('./pages/tools/John'))
const HashcatTool = lazy(() => import('./pages/tools/Hashcat'))
const NiktoTool = lazy(() => import('./pages/tools/Nikto'))
const BurpsuiteTool = lazy(() => import('./pages/tools/Burpsuite'))
const WiresharkTool = lazy(() => import('./pages/tools/Wireshark'))
const SetoolkitTool = lazy(() => import('./pages/tools/Setoolkit'))
const ResponderTool = lazy(() => import('./pages/tools/Responder'))
const GobusterTool = lazy(() => import('./pages/tools/Gobuster'))
const WpscanTool = lazy(() => import('./pages/tools/Wpscan'))
const SherlockTool = lazy(() => import('./pages/tools/Sherlock'))
const MitmproxyTool = lazy(() => import('./pages/tools/Mitmproxy'))
const CrunchTool = lazy(() => import('./pages/tools/Crunch'))
const MacchangerTool = lazy(() => import('./pages/tools/Macchanger'))
const Enum4linuxTool = lazy(() => import('./pages/tools/Enum4linux'))
const DnsenumTool = lazy(() => import('./pages/tools/Dnsenum'))
const TheharvesterTool = lazy(() => import('./pages/tools/Theharvester'))
const DirbTool = lazy(() => import('./pages/tools/Dirb'))
const ArpScanTool = lazy(() => import('./pages/tools/ArpScan'))
const CewlTool = lazy(() => import('./pages/tools/Cewl'))
const KismetTool = lazy(() => import('./pages/tools/Kismet'))
const EaphammerTool = lazy(() => import('./pages/tools/Eaphammer'))
const SslstripTool = lazy(() => import('./pages/tools/Sslstrip'))
const ReconNgTool = lazy(() => import('./pages/tools/ReconNg'))
const WhoisTool = lazy(() => import('./pages/tools/Whois'))
const DnsreconTool = lazy(() => import('./pages/tools/Dnsrecon'))
const MimikatzTool = lazy(() => import('./pages/tools/Mimikatz'))
const BloodhoundTool = lazy(() => import('./pages/tools/Bloodhound'))
const ApktoolTool = lazy(() => import('./pages/tools/Apktool'))
const PixiewpsTool = lazy(() => import('./pages/tools/Pixiewps'))
const HostapdManaTool = lazy(() => import('./pages/tools/HostapdMana'))
const YersiniaTool = lazy(() => import('./pages/tools/Yersinia'))
const ImpacketTool = lazy(() => import('./pages/tools/Impacket'))
const CrackmapexecTool = lazy(() => import('./pages/tools/Crackmapexec'))
const ReaverTool = lazy(() => import('./pages/tools/Reaver'))
const NetcatTool = lazy(() => import('./pages/tools/Netcat'))
const MasscanTool = lazy(() => import('./pages/tools/Masscan'))
const HcxdumptoolTool = lazy(() => import('./pages/tools/Hcxdumptool'))
const FridaTool = lazy(() => import('./pages/tools/Frida'))
const DrozerTool = lazy(() => import('./pages/tools/Drozer'))
const ObjectionTool = lazy(() => import('./pages/tools/Objection'))
const MaltegoTool = lazy(() => import('./pages/tools/Maltego'))
const LynisTool = lazy(() => import('./pages/tools/Lynis'))
const ChiselTool = lazy(() => import('./pages/tools/Chisel'))
const EvilWinrmTool = lazy(() => import('./pages/tools/EvilWinrm'))
const SubfinderTool = lazy(() => import('./pages/tools/Subfinder'))
const FfufTool = lazy(() => import('./pages/tools/Ffuf'))
const TrivyTool = lazy(() => import('./pages/tools/Trivy'))
const NaabuTool = lazy(() => import('./pages/tools/Naabu'))
const NucleiTool = lazy(() => import('./pages/tools/Nuclei'))
const KatanaTool = lazy(() => import('./pages/tools/Katana'))
const TcpdumpTool = lazy(() => import('./pages/tools/Tcpdump'))
const AmassTool = lazy(() => import('./pages/tools/Amass'))
const CommixTool = lazy(() => import('./pages/tools/Commix'))
const SearchsploitTool = lazy(() => import('./pages/tools/Searchsploit'))
const ProxychainsTool = lazy(() => import('./pages/tools/Proxychains'))
const BeefXssTool = lazy(() => import('./pages/tools/BeefXss'))
const Wafw00fTool = lazy(() => import('./pages/tools/Wafw00f'))
const SocatTool = lazy(() => import('./pages/tools/Socat'))
const Dnscat2Tool = lazy(() => import('./pages/tools/Dnscat2'))
const EmpireTool = lazy(() => import('./pages/tools/Empire'))
const NetdiscoverTool = lazy(() => import('./pages/tools/Netdiscover'))
const MedusaTool = lazy(() => import('./pages/tools/Medusa'))
const AirgeddonTool = lazy(() => import('./pages/tools/Airgeddon'))
const Hping3Tool = lazy(() => import('./pages/tools/Hping3'))
const BinwalkTool = lazy(() => import('./pages/tools/Binwalk'))
const VolatilityTool = lazy(() => import('./pages/tools/Volatility'))
const MsfvenomTool = lazy(() => import('./pages/tools/Msfvenom'))
const Radare2Tool = lazy(() => import('./pages/tools/Radare2'))
const SqlninjaTool = lazy(() => import('./pages/tools/Sqlninja'))
const WeevelyTool = lazy(() => import('./pages/tools/Weevely'))

// Lazy load other pages
const Installation = lazy(() => import('./pages/Installation'))
const WifiHacking = lazy(() => import('./pages/WifiHacking'))
const BluetoothHacking = lazy(() => import('./pages/BluetoothHacking'))
const Payloads = lazy(() => import('./pages/Payloads'))
const Tools = lazy(() => import('./pages/Tools'))
const About = lazy(() => import('./pages/About'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const Disclaimer = lazy(() => import('./pages/Disclaimer'))
const DMCA = lazy(() => import('./pages/DMCA'))
const Contact = lazy(() => import('./pages/Contact'))
const SitemapPage = lazy(() => import('./pages/Sitemap'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const LearningPaths = lazy(() => import('./pages/LearningPaths'))
const ToolCompare = lazy(() => import('./pages/ToolCompare'))

function PageLoader() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-neon-green/30 border-t-neon-green rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-400">Loading...</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/wifi" element={<WifiHacking />} />
          <Route path="/bluetooth" element={<BluetoothHacking />} />
          <Route path="/payloads" element={<Payloads />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tool/aircrack-ng" element={<AircrackNg />} />
          <Route path="/tool/nmap" element={<NmapTool />} />
          <Route path="/tool/metasploit-framework" element={<MetasploitTool />} />
          <Route path="/tool/bettercap" element={<BettercapTool />} />
          <Route path="/tool/wifite" element={<WifiteTool />} />
          <Route path="/tool/sqlmap" element={<SqlmapTool />} />
          <Route path="/tool/hydra" element={<HydraTool />} />
          <Route path="/tool/john" element={<JohnTool />} />
          <Route path="/tool/hashcat" element={<HashcatTool />} />
          <Route path="/tool/nikto" element={<NiktoTool />} />
          <Route path="/tool/burpsuite" element={<BurpsuiteTool />} />
          <Route path="/tool/wireshark" element={<WiresharkTool />} />
          <Route path="/tool/setoolkit" element={<SetoolkitTool />} />
          <Route path="/tool/responder" element={<ResponderTool />} />
          <Route path="/tool/gobuster" element={<GobusterTool />} />
          <Route path="/tool/wpscan" element={<WpscanTool />} />
          <Route path="/tool/sherlock" element={<SherlockTool />} />
          <Route path="/tool/mitmproxy" element={<MitmproxyTool />} />
          <Route path="/tool/crunch" element={<CrunchTool />} />
          <Route path="/tool/macchanger" element={<MacchangerTool />} />
          <Route path="/tool/enum4linux" element={<Enum4linuxTool />} />
          <Route path="/tool/dnsenum" element={<DnsenumTool />} />
          <Route path="/tool/theharvester" element={<TheharvesterTool />} />
          <Route path="/tool/dirb" element={<DirbTool />} />
          <Route path="/tool/arp-scan" element={<ArpScanTool />} />
          <Route path="/tool/cewl" element={<CewlTool />} />
          <Route path="/tool/kismet" element={<KismetTool />} />
          <Route path="/tool/eaphammer" element={<EaphammerTool />} />
          <Route path="/tool/sslstrip" element={<SslstripTool />} />
          <Route path="/tool/recon-ng" element={<ReconNgTool />} />
          <Route path="/tool/whois" element={<WhoisTool />} />
          <Route path="/tool/dnsrecon" element={<DnsreconTool />} />
          <Route path="/tool/mimikatz" element={<MimikatzTool />} />
          <Route path="/tool/bloodhound" element={<BloodhoundTool />} />
          <Route path="/tool/apktool" element={<ApktoolTool />} />
          <Route path="/tool/pixiewps" element={<PixiewpsTool />} />
          <Route path="/tool/hostapd-mana" element={<HostapdManaTool />} />
          <Route path="/tool/yersinia" element={<YersiniaTool />} />
          <Route path="/tool/impacket" element={<ImpacketTool />} />
          <Route path="/tool/crackmapexec" element={<CrackmapexecTool />} />
          <Route path="/tool/reaver" element={<ReaverTool />} />
          <Route path="/tool/netcat" element={<NetcatTool />} />
          <Route path="/tool/masscan" element={<MasscanTool />} />
          <Route path="/tool/hcxdumptool" element={<HcxdumptoolTool />} />
          <Route path="/tool/frida" element={<FridaTool />} />
          <Route path="/tool/drozer" element={<DrozerTool />} />
          <Route path="/tool/objection" element={<ObjectionTool />} />
          <Route path="/tool/maltego" element={<MaltegoTool />} />
          <Route path="/tool/lynis" element={<LynisTool />} />
          <Route path="/tool/chisel" element={<ChiselTool />} />
          <Route path="/tool/evil-winrm" element={<EvilWinrmTool />} />
          <Route path="/tool/subfinder" element={<SubfinderTool />} />
          <Route path="/tool/ffuf" element={<FfufTool />} />
          <Route path="/tool/trivy" element={<TrivyTool />} />
          <Route path="/tool/naabu" element={<NaabuTool />} />
          <Route path="/tool/nuclei" element={<NucleiTool />} />
          <Route path="/tool/katana" element={<KatanaTool />} />
          <Route path="/tool/tcpdump" element={<TcpdumpTool />} />
          <Route path="/tool/amass" element={<AmassTool />} />
          <Route path="/tool/commix" element={<CommixTool />} />
          <Route path="/tool/searchsploit" element={<SearchsploitTool />} />
          <Route path="/tool/proxychains" element={<ProxychainsTool />} />
          <Route path="/tool/beef-xss" element={<BeefXssTool />} />
          <Route path="/tool/wafw00f" element={<Wafw00fTool />} />
          <Route path="/tool/socat" element={<SocatTool />} />
          <Route path="/tool/dnscat2" element={<Dnscat2Tool />} />
          <Route path="/tool/empire" element={<EmpireTool />} />
          <Route path="/tool/netdiscover" element={<NetdiscoverTool />} />
          <Route path="/tool/medusa" element={<MedusaTool />} />
          <Route path="/tool/airgeddon" element={<AirgeddonTool />} />
          <Route path="/tool/hping3" element={<Hping3Tool />} />
          <Route path="/tool/binwalk" element={<BinwalkTool />} />
          <Route path="/tool/volatility" element={<VolatilityTool />} />
          <Route path="/tool/msfvenom" element={<MsfvenomTool />} />
          <Route path="/tool/radare2" element={<Radare2Tool />} />
          <Route path="/tool/sqlninja" element={<SqlninjaTool />} />
          <Route path="/tool/weevely" element={<WeevelyTool />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/learning-paths" element={<LearningPaths />} />
          <Route path="/compare" element={<ToolCompare />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
