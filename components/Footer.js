import { Linkedin } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  Services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Ecommerce', href: '#services' },
    { label: 'Branding & Design', href: '#services' },
    { label: 'SEO', href: '#services' },
    { label: 'Digital Marketing', href: '#services' },
    { label: 'Automation', href: '#services' },
    { label: 'Custom Software', href: '#services' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Refund Policy', href: '/refund-policy' },
  ],
}

const socials = [
  { icon: <Linkedin size={18} />, href: 'https://launchgrids.in', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0C0A1E] text-white relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-40" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-white/8">
          {/* Brand col */}
          <div className="sm:col-span-2">
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <img src="/logo.png" alt="LaunchGrids Logo" className="w-24 h-24 object-contain" />
              <span className="text-xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                Launch<span className="gradient-text">Grids</span>
              </span>
            </a>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              Complete Digital Business Setup Agency. We don't just build websites. We build complete online business systems.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-white/15 flex items-center justify-center text-white/50 hover:text-white transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4"
              >
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} LaunchGrids. All rights reserved.
          </p>
          <a href="https://launchgrids.in" className="text-xs text-white/30 hover:text-white transition-colors">launchgrids.in</a>
        </div>
      </div>
    </footer>
  )
}
