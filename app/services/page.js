import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Services from '@/components/sections/Services'
import Solution from '@/components/sections/Solution'
import CtaSection from '@/components/sections/CtaSection'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: '35+ Digital Services — Website, SEO, Marketing & More | LaunchGrids',
  description: 'LaunchGrids offers 35+ digital services including website development, ecommerce, branding, SEO, digital marketing, WhatsApp automation, Google Ads, content writing, and more. All services for your business in one place.',
  keywords: ['digital services India', 'website development services India', 'SEO services India', 'digital marketing services India', 'branding services India', 'WhatsApp automation India', 'all digital services India', 'LaunchGrids services', '35 digital services India', 'complete digital services India'],
  alternates: { canonical: 'https://launchgrids.in/services' },
  openGraph: {
    title: '35+ Digital Services | LaunchGrids',
    description: 'Website, branding, SEO, marketing, automation & more — all digital services in one place.',
    url: 'https://launchgrids.in/services',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '35+ Digital Services | LaunchGrids',
    description: 'Website, branding, SEO, marketing, automation & more — all digital services in one place.',
    images: ['/logo.png'],
  },
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-[#0C0A1E] pt-24">
        <Solution />
        <Services />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
