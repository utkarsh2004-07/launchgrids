'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { PhoneCall, Map, Paintbrush, Megaphone, Zap, TrendingUp } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: <PhoneCall className="w-6 h-6" />,
    title: 'Discovery Call',
    desc: 'We understand your business, target audience, goals, budget, and required services.',
    color: 'from-blue-500 to-cyan-500',
    bg: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20',
  },
  {
    num: '02',
    icon: <Map className="w-6 h-6" />,
    title: 'Strategy & Planning',
    desc: 'We create a clear digital setup plan for website, branding, content, marketing, and automation.',
    color: 'from-violet-500 to-purple-500',
    bg: 'from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20',
  },
  {
    num: '03',
    icon: <Paintbrush className="w-6 h-6" />,
    title: 'Design & Development',
    desc: 'We design the UI/UX, build the website, setup branding, and develop required systems.',
    color: 'from-orange-500 to-red-500',
    bg: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20',
  },
  {
    num: '04',
    icon: <Megaphone className="w-6 h-6" />,
    title: 'Marketing Setup',
    desc: 'We setup SEO, Google Business Profile, social media, analytics, content, and ads tracking.',
    color: 'from-green-500 to-teal-500',
    bg: 'from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20',
  },
  {
    num: '05',
    icon: <Zap className="w-6 h-6" />,
    title: 'Automation & Launch',
    desc: 'We setup WhatsApp automation, chatbot, lead forms, CRM, and launch the business online.',
    color: 'from-pink-500 to-rose-500',
    bg: 'from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20',
  },
  {
    num: '06',
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Growth Support',
    desc: 'We provide maintenance, marketing, analytics reports, and monthly growth improvements.',
    color: 'from-indigo-500 to-blue-600',
    bg: 'from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20',
  },
]

export default function Process() {
  useScrollReveal()

  return (
    <section id="process" className="section-padding bg-white dark:bg-[#0C0A1E] relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bottom-0 right-0 bg-blue-50 dark:bg-blue-950/10 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="badge badge-blue mb-4 mx-auto inline-flex">Our Process</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            How We Launch Your{' '}
            <span className="gradient-text">Business Online</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A simple, structured 6-step process from consultation to growth - no confusion, no delays.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-base bg-white dark:bg-[#12103A] p-6 group relative overflow-hidden`}
            >
              {/* Large step number in background */}
              <div
                className="absolute -top-3 -right-1 text-8xl font-extrabold text-gray-50 dark:text-white/3 select-none pointer-events-none"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {step.num}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.bg} border border-current/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                <div className={`bg-gradient-to-br ${step.color} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent' }}>
                  {step.icon}
                </div>
              </div>

              {/* Step label */}
              <div className="text-xs font-bold text-gray-400 dark:text-gray-500 mb-2 relative z-10">
                Step {step.num}
              </div>

              <h3
                className="text-lg font-extrabold text-gray-900 dark:text-white mb-2 relative z-10"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed relative z-10">
                {step.desc}
              </p>

              {/* Bottom gradient bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <a href="#contact" className="btn-primary mx-auto inline-flex shadow-lg shadow-blue-200 dark:shadow-blue-900/30">
            Start the Process {'->'}
          </a>
        </div>
      </div>
    </section>
  )
}
