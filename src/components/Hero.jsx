import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 bg-neon-green/10 border border-neon-green/30 rounded-full text-neon-green text-sm font-mono">
            काली नेटहंटर v2024 — मुफ्त शैक्षिक मंच
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-heading font-black mb-6">
          <span className="gradient-text">सीखें</span>
          <br />
          <span className="text-white">नेटहंटर</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          काली नेटहंटर के साथ मोबाइल पेनिट्रेशन टेस्टिंग में महारत हासिल करें। इंस्टॉलेशन से लेकर एडवांस अटैक तक — एथिकल हैकिंग कदम-दर-कदम सीखें, सब कुछ हिंदी में!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/installation" className="btn-primary text-lg">
            सीखना शुरू करें →
          </Link>
          <Link to="/tools" className="btn-outline text-lg">
            टूल्स देखें
          </Link>
        </div>

        {/* Terminal animation */}
        <div className="mt-16 max-w-xl mx-auto">
          <div className="bg-dark-800 rounded-lg border border-neon-green/30 overflow-hidden">
            <div className="flex items-center px-4 py-2 bg-dark-700 border-b border-neon-green/20">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-3 text-gray-500 text-xs font-mono">nethunter@kali:~</span>
            </div>
            <div className="p-4 text-left font-mono text-sm space-y-2">
              <div className="text-gray-500">
                <span className="text-neon-green">$</span> nethunter -v
              </div>
              <div className="text-neon-cyan">Kali NetHunter 2024.1</div>
              <div className="text-gray-500">
                <span className="text-neon-green">$</span> nethunter --start learning --lang hindi
              </div>
              <div className="text-neon-green animate-pulse">
                [+] ट्यूटोरियल लोड हो रहे हैं... ████████████ 100%
              </div>
              <div className="text-yellow-400">
                [!] याद रखें: हमेशा जिम्मेदारी से हैक करें
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
