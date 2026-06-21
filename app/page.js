import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import Services from '@/components/sections/Services'
import MarketingComparison from '@/components/sections/MarketingComparison'
import Packages from '@/components/sections/Packages'
import BusinessTypePricing from '@/components/sections/BusinessTypePricing'
import Portfolio from '@/components/sections/Portfolio'
import Maintenance from '@/components/sections/Maintenance'
import AddOns from '@/components/sections/AddOns'
import Process from '@/components/sections/Process'
import WhyUs from '@/components/sections/WhyUs'
import Industries from '@/components/sections/Industries'
import CtaSection from '@/components/sections/CtaSection'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LaunchGrids',
  image: 'https://launchgrids.in/logo.png',
  url: 'https://launchgrids.in',
  email: 'hello@launchgrids.in',
  description: 'LaunchGrids is a digital business setup agency in Mumbai, India. Website development, branding, SEO, digital marketing, WhatsApp automation, ecommerce and growth systems.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.0760,
    longitude: 72.8777,
  },
  areaServed: [
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Pune' },
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'State', name: 'Maharashtra' },
    { '@type': 'Country', name: 'India' },
  ],
  priceRange: '₹25,000 - ₹3,00,000+',
  openingHours: 'Mo-Sa 09:00-19:00',
  sameAs: ['https://launchgrids.in', 'https://www.linkedin.com/company/122324033'],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LaunchGrids',
  legalName: 'LaunchGrids',
  alternateName: 'LaunchGrids Digital Agency',
  url: 'https://launchgrids.in',
  logo: 'https://launchgrids.in/logo.png',
  description: 'LaunchGrids is a complete digital business setup agency in Mumbai, India. Website development, branding, SEO, digital marketing, WhatsApp automation, ecommerce, and growth systems.',
  email: 'hello@launchgrids.in',
  areaServed: 'IN',
  foundingLocation: 'India',
  knowsAbout: [
    'Website Development', 'Ecommerce Development', 'Branding', 'Logo Design',
    'SEO', 'Digital Marketing', 'WhatsApp Automation', 'Chatbot Development',
    'Google Ads', 'Meta Ads', 'Content Writing', 'Social Media Marketing',
    'CRM Setup', 'Lead Generation', 'UI UX Design',
  ],
  sameAs: ['https://launchgrids.in', 'https://www.linkedin.com/company/122324033'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'LaunchGrids',
  url: 'https://launchgrids.in',
  description: 'Complete digital business setup agency in Mumbai, India',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://launchgrids.in/#services',
    'query-input': 'required name=search_term_string',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'LaunchGrids',
  url: 'https://launchgrids.in',
  logo: 'https://launchgrids.in/logo.png',
  image: 'https://launchgrids.in/logo.png',
  description: 'Complete digital business setup agency in Mumbai, India offering website development, branding, SEO, digital marketing, WhatsApp automation, ecommerce & growth systems.',
  email: 'hello@launchgrids.in',
  areaServed: { '@type': 'Country', name: 'India' },
  priceRange: '₹25,000 - ₹3,00,000+',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Business Setup Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Development', description: 'Professional responsive websites for businesses' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ecommerce Website Development', description: 'Online stores with payment gateway integration' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding & Logo Design', description: 'Complete brand identity and logo design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services', description: 'Search engine optimization for Google ranking' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing', description: 'Social media, Google Ads, Meta Ads campaigns' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WhatsApp Automation', description: 'WhatsApp Business automation and chatbot setup' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Writing', description: 'Website content, blogs, social media captions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM Setup', description: 'Customer relationship management system setup' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does LaunchGrids offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LaunchGrids offers 35+ digital services including website development, ecommerce development, branding, logo design, SEO, digital marketing, WhatsApp automation, chatbot setup, Google Ads, Meta Ads, content writing, social media management, CRM setup, and monthly maintenance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a website cost at LaunchGrids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LaunchGrids website packages start from ₹25,000 for small businesses. The Growth package ranges from ₹60,000 to ₹1,20,000 and the Scale package for ecommerce and enterprises starts from ₹1,50,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does LaunchGrids serve businesses across India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, LaunchGrids serves businesses across all of India remotely. We work with small businesses, local shops, startups, ecommerce brands, clinics, salons, restaurants, real estate agencies, and coaching institutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in the digital business setup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A complete digital business setup from LaunchGrids includes website development, branding and logo design, SEO setup, Google Business Profile, social media setup, WhatsApp Business automation, analytics setup, and digital marketing strategy.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic business website takes 7-14 days. A complete digital setup with branding, SEO, and marketing takes 3-6 weeks depending on requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does LaunchGrids offer monthly maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, LaunchGrids offers monthly maintenance plans including website updates, security checks, backups, content changes, SEO monitoring, and technical support.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/#services' },
    { '@type': 'ListItem', position: 3, name: 'Packages', item: 'https://launchgrids.in/#packages' },
    { '@type': 'ListItem', position: 4, name: 'Contact', item: 'https://launchgrids.in/#contact' },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="bg-white dark:bg-[#0C0A1E] transition-colors duration-300">
        <Navbar />
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <MarketingComparison />
        <Packages />
        <BusinessTypePricing />
        <Portfolio />
        <Maintenance />
        <AddOns />
        <Process />
        <WhyUs />
        <Industries />
        <CtaSection />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
