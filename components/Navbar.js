'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(false)

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

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-br from-[#0C0A1E] via-[#1a1650] to-[#0C0A1E] ${
        scrolled ? 'shadow-sm border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <img
              src="/logo.png"
              alt="LaunchGrids Logo"
              className="w-20 h-20 object-contain drop-shadow-[0_0_10px_rgba(99,102,241,0.5)] -my-2"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-200 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
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

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-900/30 hover:-translate-y-0.5"
            >
              Free Consultation
            </a>

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
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white dark:bg-[#12103A] border-t border-gray-100 dark:border-white/5 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-white/5 rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={handleNavClick}
              className="block w-full text-center px-5 py-3 bg-brand-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
