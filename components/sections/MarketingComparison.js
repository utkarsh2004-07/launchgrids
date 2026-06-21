'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Monitor, Briefcase, CheckCircle2 } from 'lucide-react'

const digitalPoints = [
  'SEO & Google Search Rankings',
  'Google Ads & Meta Ads',
  'Instagram & Facebook Marketing',
  'Email Marketing Campaigns',
  'YouTube & Video Marketing',
  'Google Business Profile',
  'Website Traffic Generation',
  'Online Lead Generation',
]

const professionalPoints = [
  'Brand Positioning Strategy',
  'Market Research & Analysis',
  'Pricing Strategy & Planning',
  'Sales Strategy & Funnel',
  'Customer Targeting & Segmentation',
  'Business Presentation & Pitch',
  'Offline Promotion Ideas',
  'Professional Communication Strategy',
]

export default function MarketingComparison() {
  useScrollReveal()

  return (
    <section className="section-padding bg-white dark:bg-[#0C0A1E] relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-50 dark:bg-blue-950/20 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="badge badge-blue mb-4 mx-auto inline-flex">Know the Difference</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Digital Marketing{' '}
            <span className="text-gray-400 dark:text-gray-600 mx-2">vs</span>{' '}
            <span className="gradient-text">Professional Marketing</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Understanding the difference helps you choose the right services for your business goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Digital Marketing Card */}
          <div className="reveal reveal-delay-1 relative rounded-2xl border border-blue-100 dark:border-blue-900/30 bg-gradient-to-br from-blue-50/80 to-cyan-50/80 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            {/* Card header */}
            <div className="p-6 pb-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-xl font-extrabold text-gray-900 dark:text-white"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    Digital Marketing
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Online Promotion</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500 text-white text-sm font-bold mb-6">
                <Monitor className="w-4 h-4" />
                Online Promotion = Digital Marketing
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                Digital marketing means promoting a business using online platforms like SEO, Google Ads, Instagram, Facebook, email marketing, YouTube, Google Business Profile, and website traffic generation.
              </p>
            </div>
            <div className="px-6 pb-6">
              <h4 className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">What it includes:</h4>
              <div className="space-y-2">
                {digitalPoints.map(p => (
                  <div key={p} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Marketing Card */}
          <div className="reveal reveal-delay-2 relative rounded-2xl border border-violet-100 dark:border-violet-900/30 bg-gradient-to-br from-violet-50/80 to-purple-50/80 dark:from-violet-950/20 dark:to-purple-950/20 overflow-hidden">
            <div className="p-6 pb-0">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-200/50 dark:shadow-violet-900/30">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-xl font-extrabold text-gray-900 dark:text-white"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    Professional Marketing
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Complete Strategy</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 text-white text-sm font-bold mb-6">
                <Briefcase className="w-4 h-4" />
                Complete Marketing Strategy
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                Professional marketing means complete business marketing strategy, including brand positioning, market research, pricing strategy, sales strategy, customer targeting, business presentation, offline promotion ideas, and professional communication.
              </p>
            </div>
            <div className="px-6 pb-6">
              <h4 className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">What it includes:</h4>
              <div className="space-y-2">
                {professionalPoints.map(p => (
                  <div key={p} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Summary row */}
        <div className="mt-8 grid md:grid-cols-2 gap-6 reveal">
          <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/20 text-center">
            <span className="text-2xl font-extrabold gradient-text" style={{ fontFamily: 'Syne, sans-serif' }}>
              Digital Marketing
            </span>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">= Online promotion.</p>
          </div>
          <div className="p-5 rounded-xl bg-violet-50 dark:bg-violet-950/20 border border-violet-100 dark:border-violet-900/20 text-center">
            <span className="text-2xl font-extrabold gradient-text-reverse" style={{ fontFamily: 'Syne, sans-serif' }}>
              Professional Marketing
            </span>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">= Complete business marketing strategy and presentation.</p>
          </div>
        </div>

        <div className="text-center mt-8 reveal">
          <p className="text-gray-500 dark:text-gray-500 text-sm italic">
            LaunchGrids offers both - because your business deserves complete growth, not just online visibility.
          </p>
        </div>
      </div>
    </section>
  )
}
