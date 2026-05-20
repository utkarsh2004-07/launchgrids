'use client'
import { useEffect } from 'react'
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ServicePageLayout({ service }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-[#0C0A1E]">

        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-[#0C0A1E]">
          <div className="absolute inset-0 bg-dots opacity-60 dark:opacity-100 pointer-events-none" />
          <div className={`orb w-[500px] h-[500px] top-[-150px] left-[-150px] opacity-40 pointer-events-none ${service.orbColor}`} />
          <div className={`orb w-[400px] h-[400px] bottom-[-100px] right-[-100px] opacity-30 pointer-events-none ${service.orbColor}`} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-brand-blue mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="badge badge-blue mb-6 inline-flex">{service.category}</div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {service.heroTitle} <span className="gradient-text">{service.heroHighlight}</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-xl">
                  {service.heroDesc}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.heroPoints.map((p) => (
                    <div key={p} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{p}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary shadow-lg shadow-blue-200 dark:shadow-blue-900/30">
                    Get Free Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/packages" className="btn-secondary">View Packages</Link>
                </div>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {service.stats.map((s) => (
                  <div key={s.label} className="card-base bg-white dark:bg-[#12103A] p-6 text-center">
                    <div className="text-3xl font-extrabold gradient-text mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{s.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="section-padding section-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 reveal">
              <div className="badge badge-blue mb-4 mx-auto inline-flex">What's Included</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                Everything You Get with Our <span className="gradient-text">{service.name}</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">{service.offerDesc}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.offerings.map((o, i) => (
                <div key={o.title} className={`reveal reveal-delay-${Math.min(i + 1, 6)} card-base bg-white dark:bg-[#12103A] p-6 group`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${service.iconBg}`}>
                    <span className={service.iconColor}>{o.icon}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{o.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-white dark:bg-[#0C0A1E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 reveal">
              <div className="badge badge-blue mb-4 mx-auto inline-flex">Our Process</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                How We <span className="gradient-text">Deliver Results</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.process.map((p, i) => (
                <div key={p.title} className={`reveal reveal-delay-${i + 1} card-base bg-white dark:bg-[#12103A] p-6`}>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>{p.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding section-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <div className="badge badge-blue mb-4 inline-flex">Why Choose Us</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Why LaunchGrids for <span className="gradient-text">{service.name}?</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{service.whyDesc}</p>
                <div className="space-y-3">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-[#12103A] border border-gray-100 dark:border-white/8">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* FAQ */}
              <div className="reveal reveal-delay-2 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>Frequently Asked Questions</h3>
                {service.faqs.map((f, i) => (
                  <div key={i} className="card-base bg-white dark:bg-[#12103A] p-5">
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2">{f.q}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0C0A1E] via-[#1a1650] to-[#0C0A1E]">
          <div className="orb w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600/20 opacity-60 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center reveal">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Ready to Get Started with <span className="gradient-text">{service.name}?</span>
            </h2>
            <p className="text-white/60 mb-8 text-lg max-w-2xl mx-auto">{service.ctaDesc}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary shadow-lg shadow-blue-900/40">
                Get Free Consultation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/packages" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-all border border-white/20">
                View Packages
              </Link>
            </div>
            <p className="mt-6 text-white/30 text-sm">Starting from ₹25,000 · Free consultation · Response within 24 hours</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
