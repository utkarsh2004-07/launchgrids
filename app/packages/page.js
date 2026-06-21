import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Packages from '@/components/sections/Packages'
import BusinessTypePricing from '@/components/sections/BusinessTypePricing'
import CtaSection from '@/components/sections/CtaSection'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Digital Business Setup Packages & Pricing in India | LaunchGrids',
  description: 'View LaunchGrids pricing packages for digital business setup in India. Launch package from Rs.25,000, Growth package from Rs.60,000, and Scale package from Rs.1,50,000. Transparent pricing for every business.',
  keywords: ['digital agency packages India', 'website development packages India', 'digital marketing packages India', 'affordable digital setup India', 'business website pricing India', 'digital agency pricing India', 'LaunchGrids packages', 'digital setup cost India'],
  alternates: { canonical: 'https://launchgrids.in/packages' },
  openGraph: {
    title: 'Digital Business Setup Packages & Pricing | LaunchGrids',
    description: 'Transparent pricing packages for complete digital business setup. Starting from Rs.25,000.',
    url: 'https://launchgrids.in/packages',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Business Setup Packages & Pricing | LaunchGrids',
    description: 'Transparent pricing packages for complete digital business setup. Starting from Rs.25,000.',
    images: ['/logo.png'],
  },
}

const offerCatalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Digital Business Setup Packages',
  url: 'https://launchgrids.in/packages',
  itemListElement: [
    {
      '@type': 'Offer',
      name: 'Launch Package',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 25000,
        maxPrice: 50000,
        priceCurrency: 'INR',
      },
      itemOffered: {
        '@type': 'Service',
        name: 'Launch Digital Business Setup',
        description: 'Website, basic branding, Google Business Profile, WhatsApp Business, analytics, and basic SEO setup for small businesses.',
      },
    },
    {
      '@type': 'Offer',
      name: 'Growth Package',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 60000,
        maxPrice: 120000,
        priceCurrency: 'INR',
      },
      itemOffered: {
        '@type': 'Service',
        name: 'Growth Digital Business Setup',
        description: 'Advanced website, brand identity, SEO, content, WhatsApp automation, lead capture, analytics, and social media support.',
      },
    },
    {
      '@type': 'Offer',
      name: 'Scale Package',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: 150000,
        priceCurrency: 'INR',
      },
      itemOffered: {
        '@type': 'Service',
        name: 'Scale Digital Growth System',
        description: 'Ecommerce, advanced branding, funnels, ads setup, CRM, automation, content strategy, and conversion tracking.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Packages', item: 'https://launchgrids.in/packages' },
  ],
}

export default function PackagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
