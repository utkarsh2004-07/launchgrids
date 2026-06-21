'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ArrowRight, Calendar } from 'lucide-react'

export default function CtaSection() {
  useScrollReveal()

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0C0A1E] via-[#1a1650] to-[#0C0A1E]">
      {/* Background effects */}
      <div className="orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600/20 opacity-60 pointer-events-none" />
      <div className="orb w-[300px] h-[300px] top-0 left-0 bg-violet-600/20 opacity-40 pointer-events-none" />
      <div className="orb w-[300px] h-[300px] bottom-0 right-0 bg-blue-500/20 opacity-40 pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-blue-300 text-xs font-bold mb-8 border border-white/10">
          🚀 Ready to Launch?
        </div>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Ready to Launch Your{' '}
          <br />
          <span className="gradient-text">Business Online?</span>
        </h2>

        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Get a complete digital setup plan for your business - website, branding, marketing, automation, and growth systems - all from one agency.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-xl font-bold text-base hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-lg shadow-blue-900/40"
          >
            <Calendar className="w-5 h-5" />
            Book Free Consultation
          </a>
          <a
            href="#packages"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-base hover:bg-white/20 transition-all hover:-translate-y-1 border border-white/20"
          >
            Get Package Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-8 text-white/30 text-sm">
          "From idea to online launch - we handle the complete digital setup."
        </p>
      </div>
    </section>
  )
}
