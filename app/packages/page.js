import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Packages from '@/components/sections/Packages'
import BusinessTypePricing from '@/components/sections/BusinessTypePricing'
import CtaSection from '@/components/sections/CtaSection'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Digital Business Setup Packages & Pricing in India | LaunchGrids',
  description: 'View LaunchGrids pricing packages for digital business setup in India. Launch package from ₹25,000, Growth package from ₹60,000, and Scale package from ₹1,50,000. Transparent pricing for every business.',
  keywords: ['digital agency packages India', 'website development packages India', 'digital marketing packages India', 'affordable digital setup India', 'business website pricing India', 'digital agency pricing India', 'LaunchGrids packages', 'digital setup cost India'],
  alternates: { canonical: 'https://launchgrids.in/packages' },
  openGraph: {
    title: 'Digital Business Setup Packages & Pricing | LaunchGrids',
    description: 'Transparent pricing packages for complete digital business setup. Starting from ₹25,000.',
    url: 'https://launchgrids.in/packages',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Business Setup Packages & Pricing | LaunchGrids',
    description: 'Transparent pricing packages for complete digital business setup. Starting from ₹25,000.',
    images: ['/logo.png'],
  },
}

export default function PackagesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-[#0C0A1E] pt-24">
        <Packages />
        <BusinessTypePricing />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
