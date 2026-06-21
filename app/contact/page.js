import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/sections/Contact'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Contact LaunchGrids - Get Free Digital Business Consultation',
  description: 'Contact LaunchGrids for a free digital business consultation. Get a customized plan for website development, branding, SEO, digital marketing, and automation. Response within 24 hours.',
  keywords: ['contact LaunchGrids', 'free digital consultation India', 'hire digital agency India', 'get website quote India', 'digital marketing consultation India', 'digital agency contact India', 'get free consultation LaunchGrids'],
  alternates: { canonical: 'https://launchgrids.in/contact' },
  openGraph: {
    title: 'Contact LaunchGrids - Free Digital Business Consultation',
    description: 'Get a free consultation and customized digital setup plan for your business.',
    url: 'https://launchgrids.in/contact',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact LaunchGrids - Free Digital Business Consultation',
    description: 'Get a free consultation and customized digital setup plan for your business.',
    images: ['/logo.png'],
  },
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact LaunchGrids',
  url: 'https://launchgrids.in/contact',
  description: 'Contact LaunchGrids for website development, SEO, branding, digital marketing, and automation services in India.',
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'LaunchGrids',
    url: 'https://launchgrids.in',
    email: 'hello@launchgrids.in',
    telephone: '+91-8459225202',
    areaServed: [
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'State', name: 'Maharashtra' },
      { '@type': 'Country', name: 'India' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8459225202',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://launchgrids.in/contact' },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main className="bg-white dark:bg-[#0C0A1E] pt-24">
        <Contact />
      </main>
      <Footer />
    </>
  )
}
