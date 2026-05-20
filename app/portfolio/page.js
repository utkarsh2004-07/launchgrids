import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Portfolio from '@/components/sections/Portfolio'
import CtaSection from '@/components/sections/CtaSection'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Our Projects & Portfolio — Websites Built by LaunchGrids',
  description: 'View LaunchGrids portfolio of websites, ecommerce stores, and digital projects built for clients across India. See our work including corporate websites, online stores, and custom software.',
  keywords: ['LaunchGrids portfolio', 'website projects India', 'digital agency portfolio India', 'websites built by LaunchGrids', 'ecommerce projects India', 'LaunchGrids work', 'digital agency case studies India'],
  alternates: { canonical: 'https://launchgrids.in/portfolio' },
  openGraph: {
    title: 'Our Projects & Portfolio | LaunchGrids',
    description: 'Websites, ecommerce stores, and digital projects built for clients across India.',
    url: 'https://launchgrids.in/portfolio',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Projects & Portfolio | LaunchGrids',
    description: 'Websites, ecommerce stores, and digital projects built for clients across India.',
    images: ['/logo.png'],
  },
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-[#0C0A1E] pt-24">
        <Portfolio />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
