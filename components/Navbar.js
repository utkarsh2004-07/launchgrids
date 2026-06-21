'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Website Development', href: '/services/website-development' },
      { label: 'Ecommerce Website', href: '/services/ecommerce-website' },
      { label: 'Custom Software', href: '/services/custom-software' },
      { label: 'App Development', href: '/services/app-development' },
      { label: 'UI/UX Design', href: '/services/ui-ux-design' },
      { label: 'Landing Page', href: '/services/landing-page' },
      { label: 'Sales Funnel', href: '/services/sales-funnel' },
      { label: 'Domain & Hosting', href: '/services/domain-hosting' },
      { label: 'Speed Optimization', href: '/services/speed-optimization' },
      { label: 'Website Maintenance', href: '/services/website-maintenance' },
      { label: 'Branding', href: '/services/branding' },
      { label: 'Logo Design', href: '/services/logo-design' },
      { label: 'Graphic Design', href: '/services/graphic-design' },
      { label: '3D Modeling', href: '/services/3d-modeling' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'Google Ads', href: '/services/google-ads' },
      { label: 'Meta Ads', href: '/services/meta-ads' },
      { label: 'Google Business Profile', href: '/services/google-business-profile' },
      { label: 'Lead Generation', href: '/services/lead-generation' },
      { label: 'Social Media Management', href: '/services/social-media-management' },
      { label: 'Reputation Management', href: '/services/reputation-management' },
      { label: 'Review Management', href: '/services/review-management' },
      { label: 'Analytics Setup', href: '/services/analytics-setup' },
      { label: 'WhatsApp Automation', href: '/services/whatsapp-automation' },
      { label: 'WhatsApp Business Setup', href: '/services/whatsapp-business-setup' },
      { label: 'Chatbot Setup', href: '/services/chatbot-setup' },
      { label: 'CRM Setup', href: '/services/crm-setup' },
      { label: 'Instagram Setup', href: '/services/instagram-setup' },
      { label: 'Instagram Post Design', href: '/services/instagram-post-design' },
      { label: 'Reels Editing', href: '/services/reels-editing' },
      { label: 'Video Editing', href: '/services/video-editing' },
      { label: 'Content Writing', href: '/services/content-writing' },
    ],
  },
  { label: 'Packages', href: '/packages' },
  { label: 'Projects', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') setDark(true)

    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const handleNavClick = () => {
    setMenuOpen(false)
    setServicesOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-br from-[#0C0A1E] via-[#1a1650] to-[#0C0A1E] ${
        scrolled ? 'shadow-sm border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="LaunchGrids Logo"
              className="w-20 h-20 object-contain drop-shadow-[0_0_10px_rgba(99,102,241,0.5)] -my-2"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.href} className="relative group">
                  <Link href={link.href} className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center gap-1">
                    {link.label} <ChevronDown size={14} />
                  </Link>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#1a1650] border border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-5" style={{width:'720px'}}>
                    <div className="grid grid-cols-4 gap-1">
                      {[{
                        cat: 'Web & Tech',
                        items: link.dropdown.filter(i => ['Website Development','Ecommerce Website','Custom Software','App Development','UI/UX Design','Landing Page','Sales Funnel','Domain & Hosting','Speed Optimization','Website Maintenance'].includes(i.label))
                      },{
                        cat: 'Branding & Design',
                        items: link.dropdown.filter(i => ['Branding','Logo Design','Graphic Design','3D Modeling'].includes(i.label))
                      },{
                        cat: 'Marketing & SEO',
                        items: link.dropdown.filter(i => ['SEO','Digital Marketing','Google Ads','Meta Ads','Google Business Profile','Lead Generation','Social Media Management','Reputation Management','Review Management','Analytics Setup'].includes(i.label))
                      },{
                        cat: 'Automation & Content',
                        items: link.dropdown.filter(i => ['WhatsApp Automation','WhatsApp Business Setup','Chatbot Setup','CRM Setup','Instagram Setup','Instagram Post Design','Reels Editing','Video Editing','Content Writing'].includes(i.label))
                      }].map(group => (
                        <div key={group.cat}>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2 px-2">{group.cat}</p>
                          {group.items.map(item => (
                            <Link key={item.href} href={item.href} className="block px-2 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs text-gray-500">35+ services to grow your business</span>
                      <Link href="/services" className="text-xs font-bold text-blue-400 hover:text-white transition-colors">View All Services {'->'}</Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200">
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-300 hover:bg-white/10 transition-all"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="w-4.5 h-4.5" size={18} /> : <Moon size={18} />}
            </button>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-900/30 hover:-translate-y-0.5"
            >
              Free Consultation
            </Link>

            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} className="text-gray-700 dark:text-white" /> : <Menu size={20} className="text-gray-700 dark:text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bottom-0 z-40 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full overflow-y-auto bg-white dark:bg-[#12103A] border-t border-gray-100 dark:border-white/5 px-4 py-4 space-y-1 pb-24">
          {navLinks.map((link) => (
            <div key={link.href}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-white/5 rounded-lg transition-all"
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 space-y-1 mt-1">
                      {link.dropdown.map(item => (
                        <Link key={item.href} href={item.href} onClick={handleNavClick} className="block px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-brand-blue dark:hover:text-blue-400 rounded-lg transition-all">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.href} onClick={handleNavClick} className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-white/5 rounded-lg transition-all">
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="block w-full text-center px-5 py-3 bg-brand-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
