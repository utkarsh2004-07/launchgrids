'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Globe, Palette, Megaphone, FileText, Bot, BarChart3, Code2, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Website & Ecommerce',
    desc: 'Professional websites, online stores, product pages, payment integration, and order management.',
    color: 'from-blue-500 to-cyan-500',
    bg: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20',
    border: 'border-blue-100 dark:border-blue-900/20',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Branding & Design',
    desc: 'Logo direction, brand identity, color palette, typography, and complete visual guidelines.',
    color: 'from-violet-500 to-purple-500',
    bg: 'from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20',
    border: 'border-violet-100 dark:border-violet-900/20',
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: 'Digital Marketing & SEO',
    desc: 'Search rankings, Google Ads, Meta Ads, social media marketing, and lead generation systems.',
    color: 'from-orange-500 to-red-500',
    bg: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20',
    border: 'border-orange-100 dark:border-orange-900/20',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Content & Social Media',
    desc: 'Instagram posts, reels, banners, captions, blogs, website copy, and monthly social management.',
    color: 'from-pink-500 to-rose-500',
    bg: 'from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20',
    border: 'border-pink-100 dark:border-pink-900/20',
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'Automation & Chatbots',
    desc: 'WhatsApp automation, chatbot setup, CRM integration, lead capture, and customer communication flows.',
    color: 'from-green-500 to-teal-500',
    bg: 'from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20',
    border: 'border-green-100 dark:border-green-900/20',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Analytics & Growth Tracking',
    desc: 'Google Analytics, Search Console, Meta Pixel, conversion tracking, and performance dashboards.',
    color: 'from-yellow-500 to-amber-500',
    bg: 'from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20',
    border: 'border-yellow-100 dark:border-yellow-900/20',
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Custom Software',
    desc: 'Dashboards, CRM, booking platforms, admin panels, SaaS tools, and custom web applications.',
    color: 'from-indigo-500 to-blue-600',
    bg: 'from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20',
    border: 'border-indigo-100 dark:border-indigo-900/20',
  },
]

export default function Solution() {
  useScrollReveal()

  return (
    <section id="solution" className="section-padding bg-white dark:bg-[#0C0A1E] relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] top-0 right-0 bg-violet-100 dark:bg-violet-900/10 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="badge badge-blue mb-4 mx-auto inline-flex">Our Solution</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Everything Your Business Needs{' '}
            <span className="gradient-text">to Start & Grow Online</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            LaunchGrids provides complete digital business setup services so clients do not need to manage multiple freelancers or agencies.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {solutions.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-base p-6 group cursor-pointer`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.bg} border ${s.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`bg-gradient-to-br ${s.color} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent' }}>
                  {s.icon}
                </div>
              </div>
              <h3
                className="font-bold text-gray-900 dark:text-white mb-2 text-base"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {s.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}

          {/* Last CTA card */}
          <div className="reveal reveal-delay-4 sm:col-span-2 lg:col-span-1">
            <a
              href="#contact"
              className="h-full min-h-[180px] flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-violet text-white text-center group cursor-pointer hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30"
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-base mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                  One Agency. Complete Setup.
                </div>
                <div className="text-sm text-white/80">Talk to us about your project</div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-12 reveal">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            "From idea to online launch - we handle the complete digital setup."
          </p>
        </div>
      </div>
    </section>
  )
}
