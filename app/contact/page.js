import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/sections/Contact'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Contact LaunchGrids — Get Free Digital Business Consultation',
  description: 'Contact LaunchGrids for a free digital business consultation. Get a customized plan for website development, branding, SEO, digital marketing, and automation. Response within 24 hours.',
  keywords: ['contact LaunchGrids', 'free digital consultation India', 'hire digital agency India', 'get website quote India', 'digital marketing consultation India', 'digital agency contact India', 'get free consultation LaunchGrids'],
  alternates: { canonical: 'https://launchgrids.in/contact' },
  openGraph: {
    title: 'Contact LaunchGrids — Free Digital Business Consultation',
    description: 'Get a free consultation and customized digital setup plan for your business.',
    url: 'https://launchgrids.in/contact',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact LaunchGrids — Free Digital Business Consultation',
    description: 'Get a free consultation and customized digital setup plan for your business.',
    images: ['/logo.png'],
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-[#0C0A1E] pt-24">
        <Contact />
      </main>
      <Footer />
    </>
  )
}
