import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhyUs from '@/components/sections/WhyUs'
import Process from '@/components/sections/Process'
import CtaSection from '@/components/sections/CtaSection'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'About LaunchGrids — Complete Digital Business Setup Agency India',
  description: 'LaunchGrids is India\'s complete digital business setup agency. We help small businesses, startups, and ecommerce brands build their complete online presence — website, branding, marketing, and automation.',
  keywords: ['about LaunchGrids', 'digital agency India', 'LaunchGrids team', 'best digital agency India', 'complete digital setup agency India', 'digital business setup India', 'who is LaunchGrids', 'LaunchGrids about'],
  alternates: { canonical: 'https://launchgrids.in/about' },
  openGraph: {
    title: 'About LaunchGrids — Digital Business Setup Agency India',
    description: 'We help businesses build complete online presence — website, branding, marketing & automation.',
    url: 'https://launchgrids.in/about',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About LaunchGrids — Digital Business Setup Agency India',
    description: 'We help businesses build complete online presence — website, branding, marketing & automation.',
    images: ['/logo.png'],
  },
}

const values = [
  { title: 'Complete Setup', desc: 'We handle everything — website, branding, marketing, and automation in one place.' },
  { title: 'Results Focused', desc: 'We build systems that generate leads and grow revenue, not just pretty websites.' },
  { title: 'Transparent Pricing', desc: 'No hidden charges. Clear pricing with detailed scope of work before we start.' },
  { title: 'Long-Term Partner', desc: 'We\'re with you after launch — maintenance, updates, and growth support.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-[#0C0A1E]">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-[#0C0A1E]">
          <div className="absolute inset-0 bg-dots opacity-60 dark:opacity-100 pointer-events-none" />
          <div className="orb w-[500px] h-[500px] top-[-150px] left-[-150px] bg-blue-100 dark:bg-blue-900/20 opacity-40 pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="badge badge-blue mb-6 mx-auto inline-flex">About LaunchGrids</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                India's Complete <span className="gradient-text">Digital Business Setup</span> Agency
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                LaunchGrids was built with one mission — to help Indian businesses launch and grow online without the hassle of managing multiple freelancers and agencies.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/contact" className="btn-primary shadow-lg shadow-blue-200 dark:shadow-blue-900/30">
                  Work With Us <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/packages" className="btn-secondary">View Packages</a>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding section-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="badge badge-blue mb-4 inline-flex">Our Mission</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                  We Don't Just Build Websites. <span className="gradient-text">We Build Businesses.</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  Most businesses struggle online because they hire different people for website, design, marketing, content, and automation — with no coordination and no clear strategy.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  LaunchGrids solves this by providing everything under one roof — one team, one strategy, one goal: growing your business online.
                </p>
                <div className="space-y-3">
                  {['35+ digital services under one roof', 'Serving businesses across all of India', 'From ₹25,000 local setups to ₹10L+ enterprise projects', 'Long-term support and maintenance included'].map((p) => (
                    <div key={p} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((v) => (
                  <div key={v.title} className="card-base bg-white dark:bg-[#12103A] p-6">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>{v.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <WhyUs />
        <Process />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
