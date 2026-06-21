'use client'
import { useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { XCircle, CheckCircle2, AlertTriangle } from 'lucide-react'

const needs = [
  { icon: '🌐', label: 'Website' },
  { icon: '🎨', label: 'Branding' },
  { icon: '📱', label: 'Social Media' },
  { icon: '🔍', label: 'SEO' },
  { icon: '✍️', label: 'Content' },
  { icon: '📢', label: 'Marketing' },
  { icon: '⚙️', label: 'Automation' },
  { icon: '📊', label: 'Analytics' },
  { icon: '🎯', label: 'Lead Generation' },
  { icon: '🛒', label: 'Ecommerce Tools' },
  { icon: '💬', label: 'Communication System' },
]

const problems = [
  { text: 'Hiring 5+ different freelancers for one project', bad: true },
  { text: 'No clear strategy or digital roadmap', bad: true },
  { text: 'Inconsistent branding across platforms', bad: true },
  { text: 'Website built but no traffic or leads', bad: true },
]

export default function Problem() {
  useScrollReveal()

  return (
    <section className="section-padding section-alt relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-red-50 dark:bg-red-950/10 rounded-full filter blur-3xl opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="badge badge-blue mb-4 mx-auto inline-flex items-center gap-2">
            <AlertTriangle className="w-3 h-3" />
            The Real Problem
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Starting Online Needs{' '}
            <span className="gradient-text">More Than Just a Website</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Most businesses struggle because they hire different people for website, design, marketing, content, and automation.{' '}
            <strong className="text-gray-800 dark:text-gray-200">LaunchGrids brings everything together in one complete system.</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: what a business needs */}
          <div className="reveal reveal-delay-1">
            <h3
              className="text-lg font-bold text-gray-900 dark:text-white mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              A complete online business needs:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {needs.map((need, i) => (
                <div
                  key={need.label}
                  className="card-base flex items-center gap-3 px-4 py-3"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <span className="text-xl">{need.icon}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{need.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: common problems vs LaunchGrids solution */}
          <div className="reveal reveal-delay-2 space-y-4">
            <h3
              className="text-lg font-bold text-gray-900 dark:text-white mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Without the right partner, businesses face:
            </h3>
            <div className="space-y-3 mb-8">
              {problems.map((p) => (
                <div
                  key={p.text}
                  className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30"
                >
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{p.text}</span>
                </div>
              ))}
            </div>

            {/* Solution card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-blue/5 to-brand-violet/5 dark:from-brand-blue/10 dark:to-brand-violet/10 border border-brand-blue/15 dark:border-brand-violet/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  The LaunchGrids Way
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                One agency. One clear plan. Complete digital setup - website, branding, marketing, automation, and analytics - all handled by a single expert team.
              </p>
              <div className="mt-4 pt-4 border-t border-brand-blue/10 dark:border-white/5">
                <p className="text-brand-blue dark:text-blue-400 font-semibold text-sm">
                  "We don't just build websites. We build complete online business systems."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
