'use client'
import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ExternalLink, Globe, Clock, X, ChevronLeft, ChevronRight, Monitor, Cpu, Wifi, Terminal, Cloud, RotateCcw, Youtube, Radio, TrendingUp } from 'lucide-react'

const liftFeatures = [
  { icon: Monitor, label: 'Real-Time Floor Display', desc: 'Large bold floor numbers with G/B labels', color: 'text-blue-400' },
  { icon: Terminal, label: 'RS-232 Serial Integration', desc: '5-byte packet from lift controller', color: 'text-green-400' },
  { icon: Wifi, label: 'UDP Multicast Video', desc: 'LAN stream to multiple displays simultaneously', color: 'text-violet-400' },
  { icon: Cpu, label: 'Direction Arrow', desc: 'UP/DOWN/STOP with live color indicators', color: 'text-orange-400' },
  { icon: RotateCcw, label: 'Watchdog Auto-Recovery', desc: 'Auto-restarts video if it stops or freezes', color: 'text-pink-400' },
  { icon: Cloud, label: 'Cloud Monitoring', desc: 'Sends live status to building management', color: 'text-cyan-400' },
]

const projects = [
  {
    name: 'Elecom India',
    url: 'elecomindia.com',
    href: 'https://elecomindia.com',
    category: 'Corporate Website',
    catColor: 'blue',
    desc: 'A professional business website designed to present the brand, services, and online presence in a clean and structured way.',
    status: 'live',
    preview: { bg: 'from-blue-600 to-cyan-600', icon: '🏢' },
  },
  {
    name: 'Diaasa',
    url: 'diaasa.com',
    href: 'https://diaasa.com',
    category: 'Ecommerce Store',
    catColor: 'violet',
    desc: 'A fully functional ecommerce store with product listings, cart system, payment gateway, and a seamless shopping experience.',
    status: 'live',
    preview: { bg: 'from-violet-600 to-purple-600', icon: '🛍️' },
  },
  {
    name: 'LaunchGrids',
    url: 'launchgrids.in',
    href: 'https://launchgrids.in',
    category: 'Agency Website',
    catColor: 'blue',
    desc: 'Our own agency website — built to showcase services, packages, portfolio, and help businesses launch their complete digital presence.',
    status: 'live',
    preview: { bg: 'from-blue-600 to-violet-600', icon: '⚡' },
  },
  {
    name: 'Ecommerce Project',
    url: 'Coming Soon',
    href: null,
    category: 'Ecommerce Website',
    catColor: 'orange',
    desc: 'An ecommerce project featuring online store, product listings, cart system, payment gateway, and complete ordering flow.',
    status: 'coming',
    preview: { bg: 'from-orange-500 to-red-500', icon: '🛒' },
  },
  {
    name: 'LiftDisplay v1.0',
    url: 'Custom Software',
    href: null,
    category: 'Custom Software',
    catColor: 'green',
    isLiftDisplay: true,
    desc: 'Professional elevator LCD display system — real-time floor numbers, direction arrows, UDP multicast video, RS-232 serial integration, and cloud monitoring.',
    status: 'built',
    preview: { bg: 'from-green-600 to-teal-600', icon: '🏢' },
  },
  {
    name: 'SaaS / Startup Project',
    url: 'Coming Soon',
    href: null,
    category: 'Startup Website',
    catColor: 'pink',
    desc: 'A startup website with modern design, product showcase, pricing section, onboarding flow, and investor-ready presentation.',
    status: 'coming',
    preview: { bg: 'from-pink-500 to-rose-500', icon: '🚀' },
  },
]

const catColors = {
  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
  violet: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300',
  orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
  green: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
  pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300',
}

const images = ['/1.png', '/2.png', '/3.png', '/4.png']
const imageCaptions = [
  'Floor Display & Direction Arrow',
  'Scrolling Ticker & Video Background',
  'Serial Port Configuration Panel',
  'Cloud Monitoring Dashboard',
]

const fileTree = [
  { name: 'LiftDisplay/', type: 'dir', depth: 0 },
  { name: 'main', type: 'file', depth: 1, desc: 'Entry point — launches the display window' },
  { name: 'config', type: 'file', depth: 1, desc: 'Reads & parses config.ini settings' },
  { name: 'sample', type: 'file', depth: 1, desc: 'Sample config.ini with all options' },
  { name: 'serial_reader', type: 'file', depth: 1, desc: 'RS-232 serial port listener thread' },
  { name: 'lift_simulator', type: 'file', depth: 1, desc: 'Simulates lift movement for testing' },
  { name: 'fake_lift_sender', type: 'file', depth: 1, desc: 'Sends fake serial packets for dev/debug' },
  { name: 'serial_check_receiver', type: 'file', depth: 1, desc: 'Verifies incoming serial data format' },
  { name: 'install_windows', type: 'file', depth: 1, desc: 'One-click Windows setup script' },
  { name: 'install_linux', type: 'file', depth: 1, desc: 'One-click Linux setup script' },
  { name: 'README', type: 'file', depth: 1, desc: 'Full documentation & usage guide' },
]

function LiftDisplayModal({ onClose }) {
  const [activeImg, setActiveImg] = useState(0)

  const prev = () => setActiveImg(i => (i - 1 + images.length) % images.length)
  const next = () => setActiveImg(i => (i + 1) % images.length)

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0C0A1E] rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
        >
          <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>

        {/* 1. Header */}
        <div className="p-6 pb-4 border-b border-gray-100 dark:border-white/8">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-xl flex-shrink-0">🏢</div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl font-extrabold text-gray-900 dark:text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  LiftDisplay v1.0
                </h2>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-500 text-white">✅ Built</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Elevator LCD Display System</p>
            </div>
          </div>
        </div>

        {/* 2. Overview */}
        <div className="px-6 pt-5 pb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            LiftDisplay is a professional elevator display software for LCD screens inside elevator cabins. It shows real-time floor numbers, direction arrows, scrolling announcements, and plays background video — all configurable through a single{' '}
            <code className="bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs font-mono">config.ini</code> file.
            Runs as a standalone <code className="bg-gray-100 dark:bg-white/10 px-1.5 py-0.5 rounded text-xs font-mono">.exe</code> on Windows 7 / 10 / 11 and Linux.
          </p>
        </div>

        {/* 3. File Structure */}
        <div className="px-6 pb-5">
          <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Project Structure</h3>
          <div className="bg-gray-950 dark:bg-black/40 rounded-xl p-4 font-mono text-xs border border-gray-800 dark:border-white/8">
            {fileTree.map((item, i) => (
              <div key={i} className="flex items-start gap-2 py-[3px]" style={{ paddingLeft: item.depth * 16 }}>
                {item.type === 'dir' ? (
                  <span className="text-yellow-400 font-bold">{item.name}</span>
                ) : (
                  <>
                    <span className="text-gray-500 select-none flex-shrink-0">{i === fileTree.length - 1 ? '└──' : '├──'}</span>
                    <span className="text-green-400 flex-shrink-0">{item.name}</span>
                    {item.desc && <span className="text-gray-600 hidden sm:inline"> &nbsp;# {item.desc}</span>}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Key Features */}
        <div className="px-6 pb-5">
          <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Key Features</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {liftFeatures.map(({ icon: Icon, label, desc, color }) => (
              <div key={label} className="flex gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/8">
                <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${color}`} />
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white leading-tight">{label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5 leading-tight">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ★ YouTube Live Stream Highlight */}
        <div className="px-6 pb-5">
          <div className="relative rounded-2xl overflow-hidden border-2 border-red-500/60 dark:border-red-500/50" style={{ background: 'linear-gradient(135deg, #1a0000 0%, #0f0f0f 40%, #0a0a1a 100%)' }}>
            {/* Animated live pulse bg */}
            <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 20% 50%, #ff0000 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #7F77DD 0%, transparent 60%)' }} />

            <div className="relative p-5">
              {/* Top row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                    <Youtube className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>YouTube Live Stream Support</p>
                    <p className="text-red-400 text-[11px] font-semibold">Play any YouTube Live feed directly on elevator screen</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-[11px] font-bold text-white bg-red-600 px-2.5 py-1 rounded-full flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  LIVE
                </span>
              </div>

              {/* Use cases */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                {[
                  { icon: TrendingUp, label: 'Stock Market Live', desc: 'NSE / BSE / Crypto live tickers', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
                  { icon: Radio, label: 'News Channels', desc: 'NDTV, BBC, CNN live feed', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
                  { icon: Youtube, label: 'Any YouTube Live', desc: 'Sports, events, building promos', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
                ].map(({ icon: Icon, label, desc, color, bg }) => (
                  <div key={label} className={`flex gap-2.5 p-3 rounded-xl border ${bg}`}>
                    <Icon className={`w-4 h-4 flex-shrink-0 mt-0.5 ${color}`} />
                    <div>
                      <p className={`text-xs font-bold ${color} leading-tight`}>{label}</p>
                      <p className="text-gray-400 text-[11px] mt-0.5 leading-tight">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Config snippet */}
              <div className="bg-black/50 rounded-xl px-4 py-3 border border-white/8">
                <p className="text-gray-500 text-[10px] font-mono mb-1.5 uppercase tracking-wider"># config.ini — just paste the YouTube Live URL</p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 font-mono text-xs">video_source</span>
                  <span className="text-gray-600 font-mono text-xs">=</span>
                  <span className="text-green-400 font-mono text-xs truncate">https://www.youtube.com/watch?v=<span className="text-yellow-400">LIVE_STREAM_ID</span></span>
                </div>
                <p className="text-gray-600 text-[10px] mt-2">✦ Works with YouTube Live · HLS · RTMP · Local MP4 · UDP Multicast</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Tech Specs */}
        <div className="px-6 pb-5">
          <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Tech Specs</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              ['Platform', 'Windows 7 / 10 / 11 · Linux'],
              ['Video Engine', 'VLC Media Player'],
              ['Serial', 'RS-232 · 9600 baud · 8N1'],
              ['Stream', 'UDP Multicast 239.0.1.1:8300'],
              ['Config', 'Single config.ini file'],
              ['Deployment', 'Standalone .exe · No install'],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col px-3 py-2 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/8">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">{k}</span>
                <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 mt-0.5">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Ideal For */}
        <div className="px-6 pb-5">
          <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Ideal For</h3>
          <div className="flex flex-wrap gap-2">
            {['Commercial Buildings', 'Residential Apartments', 'Hotels & Hospitals', 'Shopping Malls', 'Any Elevator LCD System'].map(tag => (
              <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 7. Image Gallery — last */}
        <div className="px-6 pb-6">
          <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Screenshots</h3>
          <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video mb-3 group">
            <img
              src={images[activeImg]}
              alt={imageCaptions[activeImg]}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
              <p className="text-white text-sm font-semibold">{imageCaptions[activeImg]}</p>
              <p className="text-white/50 text-xs">{activeImg + 1} / {images.length}</p>
            </div>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute top-3 right-3 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === activeImg ? 'bg-white scale-125' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`rounded-lg overflow-hidden aspect-video border-2 transition-all ${
                  i === activeImg ? 'border-teal-500 dark:border-teal-400 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={src} alt={imageCaptions[i]} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  useScrollReveal()
  const [showModal, setShowModal] = useState(false)

  return (
    <section id="portfolio" className="section-padding section-alt relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] top-0 left-0 bg-blue-50 dark:bg-blue-950/10 opacity-50 pointer-events-none" />

      {showModal && <LiftDisplayModal onClose={() => setShowModal(false)} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="badge badge-blue mb-4 mx-auto inline-flex">Our Work</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Our Client{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Explore some of the websites and digital solutions we have worked on. More projects will be added soon.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-base bg-white dark:bg-[#12103A] overflow-hidden group ${p.isLiftDisplay ? 'lg:col-span-1' : ''}`}
            >
              {/* Preview */}
              <div className={`relative h-48 bg-gradient-to-br ${p.preview.bg} overflow-hidden`}>
                {p.isLiftDisplay ? (
                  <div className="absolute inset-0">
                    <img
                      src={images[0]}
                      alt="LiftDisplay Preview"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" />
                    {/* Floating badges */}
                    <div className="absolute bottom-3 left-3 flex gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/20">VLC</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/20">RS-232</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/20">UDP</span>
                    </div>
                  </div>
                ) : p.status === 'live' ? (
                  <div className="absolute inset-0 p-4">
                    <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col overflow-hidden">
                      <div className="flex items-center gap-1.5 px-3 py-2 bg-black/20 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <div className="flex-1 mx-2 bg-white/20 rounded text-white/60 text-[9px] px-2 py-0.5 font-mono truncate">{p.url}</div>
                      </div>
                      <div className="flex-1 p-3 flex flex-col gap-2">
                        <div className="h-2.5 bg-white/30 rounded-full w-3/4" />
                        <div className="h-2 bg-white/20 rounded-full w-full" />
                        <div className="h-2 bg-white/20 rounded-full w-5/6" />
                        <div className="grid grid-cols-2 gap-2 mt-1">
                          <div className="h-12 bg-white/15 rounded-lg" />
                          <div className="h-12 bg-white/15 rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl mb-2">{p.preview.icon}</span>
                    <div className="flex items-center gap-2 text-white/80 text-sm font-semibold">
                      <Clock className="w-4 h-4" />
                      Coming Soon
                    </div>
                  </div>
                )}

                {/* Status badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    p.status === 'live' ? 'bg-green-500 text-white' :
                    p.status === 'built' ? 'bg-teal-500 text-white' :
                    'bg-white/20 text-white backdrop-blur-sm'
                  }`}>
                    {p.status === 'live' ? '🟢 Live' : p.status === 'built' ? '✅ Built' : '🔜 Coming Soon'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3
                      className="font-extrabold text-gray-900 dark:text-white text-base mb-1"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      {p.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-500">
                      <Globe className="w-3 h-3" />
                      {p.url}
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${catColors[p.catColor]}`}>
                    {p.category}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{p.desc}</p>

                {p.isLiftDisplay ? (
                  <button
                    onClick={() => setShowModal(true)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue dark:text-blue-400 hover:gap-3 transition-all"
                  >
                    View Details <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                ) : p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue dark:text-blue-400 hover:gap-3 transition-all"
                  >
                    View Project <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 dark:text-gray-600">
                    <Clock className="w-3.5 h-3.5" /> In Progress
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            More projects coming soon — we're always building something great. 🚀
          </p>
        </div>
      </div>
    </section>
  )
}
