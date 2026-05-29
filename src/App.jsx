import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Installation from './pages/Installation'
import WifiHacking from './pages/WifiHacking'
import BluetoothHacking from './pages/BluetoothHacking'
import Payloads from './pages/Payloads'
import Tools from './pages/Tools'
import AircrackNg from './pages/tools/AircrackNg'
import NmapTool from './pages/tools/Nmap'
import MetasploitTool from './pages/tools/Metasploit'
import BettercapTool from './pages/tools/Bettercap'
import WifiteTool from './pages/tools/Wifite'
import SqlmapTool from './pages/tools/Sqlmap'
import HydraTool from './pages/tools/Hydra'
import JohnTool from './pages/tools/John'
import HashcatTool from './pages/tools/Hashcat'
import NiktoTool from './pages/tools/Nikto'
import BurpsuiteTool from './pages/tools/Burpsuite'
import WiresharkTool from './pages/tools/Wireshark'
import SetoolkitTool from './pages/tools/Setoolkit'
import ResponderTool from './pages/tools/Responder'
import GobusterTool from './pages/tools/Gobuster'
import WpscanTool from './pages/tools/Wpscan'
import SherlockTool from './pages/tools/Sherlock'
import MitmproxyTool from './pages/tools/Mitmproxy'
import CrunchTool from './pages/tools/Crunch'
import MacchangerTool from './pages/tools/Macchanger'
import Enum4linuxTool from './pages/tools/Enum4linux'
import DnsenumTool from './pages/tools/Dnsenum'
import TheharvesterTool from './pages/tools/Theharvester'
import DirbTool from './pages/tools/Dirb'
import ArpScanTool from './pages/tools/ArpScan'
import CewlTool from './pages/tools/Cewl'
import KismetTool from './pages/tools/Kismet'
import EaphammerTool from './pages/tools/Eaphammer'
import SslstripTool from './pages/tools/Sslstrip'
import ReconNgTool from './pages/tools/ReconNg'
import WhoisTool from './pages/tools/Whois'
import DnsreconTool from './pages/tools/Dnsrecon'
import MimikatzTool from './pages/tools/Mimikatz'
import BloodhoundTool from './pages/tools/Bloodhound'
import ApktoolTool from './pages/tools/Apktool'
import PixiewpsTool from './pages/tools/Pixiewps'
import HostapdManaTool from './pages/tools/HostapdMana'
import YersiniaTool from './pages/tools/Yersinia'
import ImpacketTool from './pages/tools/Impacket'
import CrackmapexecTool from './pages/tools/Crackmapexec'
import ReaverTool from './pages/tools/Reaver'
import NetcatTool from './pages/tools/Netcat'
import MasscanTool from './pages/tools/Masscan'
import HcxdumptoolTool from './pages/tools/Hcxdumptool'
import FridaTool from './pages/tools/Frida'
import DrozerTool from './pages/tools/Drozer'
import ObjectionTool from './pages/tools/Objection'
import MaltegoTool from './pages/tools/Maltego'
import LynisTool from './pages/tools/Lynis'
import ChiselTool from './pages/tools/Chisel'
import EvilWinrmTool from './pages/tools/EvilWinrm'
import SubfinderTool from './pages/tools/Subfinder'
import FfufTool from './pages/tools/Ffuf'
import TrivyTool from './pages/tools/Trivy'
import NaabuTool from './pages/tools/Naabu'
import NucleiTool from './pages/tools/Nuclei'
import KatanaTool from './pages/tools/Katana'
import TcpdumpTool from './pages/tools/Tcpdump'
import AmassTool from './pages/tools/Amass'
import CommixTool from './pages/tools/Commix'
import SearchsploitTool from './pages/tools/Searchsploit'
import ProxychainsTool from './pages/tools/Proxychains'
import BeefXssTool from './pages/tools/BeefXss'
import Wafw00fTool from './pages/tools/Wafw00f'
import SocatTool from './pages/tools/Socat'
import Dnscat2Tool from './pages/tools/Dnscat2'
import EmpireTool from './pages/tools/Empire'
import NetdiscoverTool from './pages/tools/Netdiscover'
import MedusaTool from './pages/tools/Medusa'
import AirgeddonTool from './pages/tools/Airgeddon'
import Hping3Tool from './pages/tools/Hping3'
import BinwalkTool from './pages/tools/Binwalk'
import VolatilityTool from './pages/tools/Volatility'
import MsfvenomTool from './pages/tools/Msfvenom'
import Radare2Tool from './pages/tools/Radare2'
import SqlninjaTool from './pages/tools/Sqlninja'
import WeevelyTool from './pages/tools/Weevely'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Disclaimer from './pages/Disclaimer'
import DMCA from './pages/DMCA'
import Contact from './pages/Contact'
import SitemapPage from './pages/Sitemap'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
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
          <Route path="/sitemap" element={<SitemapPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
