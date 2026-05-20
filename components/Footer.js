import Link from 'next/link'
import { Linkedin } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Packages', href: '/packages' },
    { label: 'Projects', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'Web Development', href: '/services/website-development' },
    { label: 'Ecommerce', href: '/services/ecommerce-website' },
    { label: 'Branding & Design', href: '/services/branding' },
    { label: 'SEO', href: '/services/seo' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'WhatsApp Automation', href: '/services/whatsapp-automation' },
    { label: 'Google Ads', href: '/services/google-ads' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Refund Policy', href: '/refund-policy' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0C0A1E] text-white relative overflow-hidden">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-40" />
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-white/8">
          {/* Brand col */}
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <img src="/logo.png" alt="LaunchGrids Logo" className="w-24 h-24 object-contain" />
              <span className="text-xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                Launch<span className="gradient-text">Grids</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              Complete Digital Business Setup Agency. We don't just build websites. We build complete online business systems.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/122324033"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-white/15 flex items-center justify-center text-white/50 hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} LaunchGrids. All rights reserved.</p>
          <a href="https://launchgrids.in" className="text-xs text-white/30 hover:text-white transition-colors">launchgrids.in</a>
        </div>
      </div>
    </footer>
  )
}
