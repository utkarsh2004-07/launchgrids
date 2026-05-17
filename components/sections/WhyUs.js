'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Layers, Users, BadgeCheck, TrendingUp, IndianRupee, Expand, Target, HeartHandshake } from 'lucide-react'

const reasons = [
  {
    icon: <Layers className="w-5 h-5" />,
    title: 'Complete Business Setup in One Place',
    desc: 'Website, branding, marketing, automation, and analytics — all from a single expert team.',
    color: 'blue',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'No Need to Hire Multiple Freelancers',
    desc: 'One agency handles everything. Save time, money, and avoid coordination headaches.',
    color: 'violet',
  },
  {
    icon: <BadgeCheck className="w-5 h-5" />,
    title: 'Professional Design & Strategy',
    desc: 'Every project is designed with premium quality, brand consistency, and strategic intent.',
    color: 'blue',
  },
  {
    icon: <IndianRupee className="w-5 h-5" />,
    title: 'Affordable Packages for All Businesses',
    desc: 'From ₹25,000 local business setups to ₹10L+ enterprise projects — pricing for every stage.',
    color: 'green',
  },
  {
    icon: <Expand className="w-5 h-5" />,
    title: 'Scalable Solutions for Growth',
    desc: 'Start small and scale up. Our solutions grow with your business — from local to national.',
    color: 'orange',
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: 'Focus on Leads, Growth & Results',
    desc: 'We don\'t just deliver work. We build systems that generate leads and grow your revenue.',
    color: 'violet',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Website + Branding + Marketing + Automation',
    desc: 'Four pillars of online business success — all handled by LaunchGrids in one project.',
    color: 'blue',
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    title: 'Long-Term Support & Maintenance',
    desc: 'We\'re with you even after launch. Monthly plans, updates, reports, and strategy support.',
    color: 'green',
  },
]

const colorMap = {
  blue: { bg: 'bg-blue-50 dark:bg-blue-950/20', icon: 'text-blue-600 dark:text-blue-400', border: 'border-blue-100 dark:border-blue-900/20' },
  violet: { bg: 'bg-violet-50 dark:bg-violet-950/20', icon: 'text-violet-600 dark:text-violet-400', border: 'border-violet-100 dark:border-violet-900/20' },
  green: { bg: 'bg-green-50 dark:bg-green-950/20', icon: 'text-green-600 dark:text-green-400', border: 'border-green-100 dark:border-green-900/20' },
  orange: { bg: 'bg-orange-50 dark:bg-orange-950/20', icon: 'text-orange-600 dark:text-orange-400', border: 'border-orange-100 dark:border-orange-900/20' },
}

export default function WhyUs() {
  useScrollReveal()

  return (
    <section className="section-padding section-alt relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] top-1/2 left-0 -translate-y-1/2 bg-blue-50 dark:bg-blue-950/10 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="badge badge-blue mb-4 mx-auto inline-flex">Why LaunchGrids</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Why Businesses Choose{' '}
            <span className="gradient-text">LaunchGrids</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Built for small businesses, startups, ecommerce brands, and service providers — we're the only digital partner you'll ever need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => {
            const c = colorMap[r.color]
            return (
              <div
                key={r.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-base bg-white dark:bg-[#12103A] p-6 group`}
              >
                <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className={c.icon}>{r.icon}</span>
                </div>
                <h3
                  className="font-bold text-gray-900 dark:text-white text-sm mb-2 leading-snug"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {r.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{r.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Tagline strip */}
        <div className="mt-12 reveal">
          <div className="rounded-2xl bg-gradient-to-r from-brand-blue/5 via-brand-violet/5 to-brand-blue/5 dark:from-brand-blue/10 dark:via-brand-violet/10 dark:to-brand-blue/10 border border-brand-blue/10 dark:border-brand-violet/20 p-8 text-center">
            <p
              className="text-xl sm:text-2xl font-extrabold gradient-text"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              "One agency. Complete digital setup."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
