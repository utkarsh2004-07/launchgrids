'use client'
import { useEffect, useState } from 'react'
import { ArrowRight, Play, CheckCircle2, TrendingUp, Globe, Zap, BarChart3, ShieldCheck } from 'lucide-react'

const stats = [
  { value: '35+', label: 'Services Offered' },
  { value: '100%', label: 'Client-Focused' },
  { value: '3', label: 'Growth Packages' },
  { value: '∞', label: 'Scalability' },
]

const floatingCards = [
  {
    icon: <Globe className="w-4 h-4 text-brand-blue" />,
    title: 'Website Live!',
    sub: 'launchgrids.in',
    color: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
    delay: '0s',
    position: 'top-[12%] left-[2%] md:left-[-2%]',
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-green-600" />,
    title: '+320% Traffic',
    sub: 'Organic Growth',
    color: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
    delay: '1.2s',
    position: 'bottom-[28%] left-[1%] md:left-[-4%]',
  },
  {
    icon: <BarChart3 className="w-4 h-4 text-violet-600" />,
    title: 'Leads Generated',
    sub: '1,240 this month',
    color: 'from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20',
    delay: '0.6s',
    position: 'top-[16%] right-[2%] md:right-[-2%]',
  },
  {
    icon: <ShieldCheck className="w-4 h-4 text-orange-500" />,
    title: 'Brand Ready',
    sub: 'Full identity done',
    color: 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20',
    delay: '1.8s',
    position: 'bottom-[26%] right-[1%] md:right-[-4%]',
  },
]

const checklist = [
  'Website + Branding',
  'SEO + Marketing',
  'Automation + Chatbots',
  'Analytics + Growth',
]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden bg-white dark:bg-[#0C0A1E]"
    >
      {/* Background dots */}
      <div className="absolute inset-0 bg-dots opacity-60 dark:opacity-100 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="orb w-[600px] h-[600px] top-[-200px] left-[-200px] bg-blue-100 dark:bg-blue-900/20 opacity-60 dark:opacity-40" />
      <div className="orb w-[500px] h-[500px] bottom-[-150px] right-[-150px] bg-violet-100 dark:bg-violet-900/20 opacity-50 dark:opacity-30" />
      <div className="orb w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-50 dark:bg-blue-950/30 opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="badge badge-blue mb-6 inline-flex">
              <Zap className="w-3 h-3" />
              Complete Digital Business Setup
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-[1.1] text-gray-900 dark:text-white mb-6 tracking-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Launch Your Business{' '}
              <span className="gradient-text">Online</span> With a
              Complete Digital Setup
            </h1>

            {/* Sub */}
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-xl">
              LaunchGrids helps businesses build websites, branding, marketing systems, automation, ecommerce platforms, and digital growth solutions — all in one place.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary text-sm shadow-lg shadow-blue-200 dark:shadow-blue-900/30">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#packages" className="btn-secondary text-sm">
                <Play className="w-4 h-4" />
                View Packages
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-4 gap-4 pt-8 border-t border-gray-100 dark:border-white/8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-2xl font-extrabold gradient-text"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard Visual */}
          <div
            className={`relative transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main dashboard card */}
              <div className="relative rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#12103A] shadow-2xl shadow-blue-100/50 dark:shadow-black/40 overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-[#1C1840] border-b border-gray-100 dark:border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-3 bg-white dark:bg-[#252250] rounded-md px-3 py-1 text-xs text-gray-500 dark:text-gray-400 font-mono">
                    launchgrids.in
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-5">
                  {/* Nav preview */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100 dark:border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-blue to-brand-violet" />
                      <div className="w-20 h-3 bg-gray-200 dark:bg-white/10 rounded-full" />
                    </div>
                    <div className="flex gap-2">
                      {[1,2,3].map(i => <div key={i} className="w-12 h-2.5 bg-gray-100 dark:bg-white/5 rounded-full" />)}
                    </div>
                    <div className="w-20 h-7 rounded-lg bg-brand-blue opacity-80" />
                  </div>

                  {/* Hero preview */}
                  <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950/30 dark:to-violet-950/30">
                    <div className="w-48 h-4 bg-gray-300 dark:bg-white/20 rounded-full mb-2" />
                    <div className="w-64 h-3 bg-gray-200 dark:bg-white/10 rounded-full mb-4" />
                    <div className="w-36 h-3 bg-gray-200 dark:bg-white/10 rounded-full mb-4" />
                    <div className="flex gap-2">
                      <div className="w-24 h-8 rounded-lg bg-brand-blue opacity-90" />
                      <div className="w-24 h-8 rounded-lg bg-gray-200 dark:bg-white/10" />
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: 'Visitors', val: '12.4K', color: 'text-brand-blue' },
                      { label: 'Leads', val: '1,240', color: 'text-green-600' },
                      { label: 'Revenue', val: '₹4.2L', color: 'text-violet-600' },
                    ].map(s => (
                      <div key={s.label} className="rounded-lg p-3 bg-gray-50 dark:bg-white/5">
                        <div className={`text-base font-bold ${s.color}`} style={{ fontFamily: 'Syne, sans-serif' }}>{s.val}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-500">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-2.5">
                    {[
                      { label: 'SEO Score', w: '78%', color: 'bg-brand-blue' },
                      { label: 'Performance', w: '92%', color: 'bg-green-500' },
                      { label: 'Brand Score', w: '65%', color: 'bg-brand-violet' },
                    ].map(b => (
                      <div key={b.label}>
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 mb-1">
                          <span>{b.label}</span>
                          <span>{b.w}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-gray-100 dark:bg-white/5">
                          <div className={`h-full rounded-full ${b.color}`} style={{ width: b.w }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              {floatingCards.map((card) => (
                <div
                  key={card.title}
                  className={`absolute glass-card px-4 py-3 flex items-center gap-3 min-w-[160px] ${card.position} hidden lg:flex`}
                  style={{ animation: `float 6s ease-in-out ${card.delay} infinite` }}
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center flex-shrink-0`}>
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 dark:text-white">{card.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{card.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-6 h-9 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
