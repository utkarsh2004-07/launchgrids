import ServicePageLayout from '@/components/ServicePageLayout'
import { Palette, PenTool, Layers, Eye, FileText, Box, Star, Layout } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Branding Agency in India — Logo Design & Brand Identity | LaunchGrids',
  description: 'LaunchGrids is a top branding agency in India. We create professional logos, brand identities, color palettes, typography, and complete brand guidelines for businesses and startups. Starting from ₹15,000.',
  keywords: ['branding agency India', 'logo design agency India', 'brand identity design India', 'logo design India', 'graphic design agency India', 'brand guidelines India', 'startup branding India', 'business logo design India'],
  alternates: { canonical: 'https://launchgrids.in/services/branding' },
  openGraph: {
    title: 'Branding Agency in India — Logo & Brand Identity | LaunchGrids',
    description: 'Professional logo design and complete brand identity for businesses in India. Starting from ₹15,000.',
    url: 'https://launchgrids.in/services/branding',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branding Agency in India — Logo & Brand Identity | LaunchGrids',
    description: 'Professional logo design and complete brand identity for businesses in India. Starting from ₹15,000.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Branding & Logo Design',
  provider: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  description: 'Professional branding, logo design, and brand identity services for businesses in India',
  areaServed: 'IN',
  offers: { '@type': 'Offer', priceCurrency: 'INR', price: '15000' },
  url: 'https://launchgrids.in/services/branding',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/services' },
    { '@type': 'ListItem', position: 3, name: 'Branding', item: 'https://launchgrids.in/services/branding' },
  ],
}

const service = {
  name: 'Branding & Logo Design',
  category: 'Branding & Design',
  orbColor: 'bg-violet-100 dark:bg-violet-900/20',
  iconBg: 'bg-violet-50 dark:bg-violet-950/20',
  iconColor: 'text-violet-600 dark:text-violet-400',
  heroTitle: 'Build a Powerful Brand with',
  heroHighlight: 'Professional Branding',
  heroDesc: 'Your brand is more than a logo — it\'s the complete visual identity that makes your business memorable. We create professional brand identities that build trust and attract customers.',
  heroPoints: ['Logo Design', 'Brand Identity', 'Color Palette', 'Brand Guidelines'],
  stats: [
    { value: '200+', label: 'Brands Created' },
    { value: '3', label: 'Logo Concepts' },
    { value: '5-7', label: 'Days Delivery' },
    { value: '100%', label: 'Unique Designs' },
  ],
  offerDesc: 'Complete branding package — from logo design to brand guidelines, everything your business needs to look professional.',
  offerings: [
    { icon: <PenTool className="w-6 h-6" />, title: 'Logo Design', desc: 'Professional logo concepts with multiple variations — primary, secondary, icon, and monochrome versions.' },
    { icon: <Palette className="w-6 h-6" />, title: 'Brand Color Palette', desc: 'Strategic color selection that reflects your brand personality and appeals to your target audience.' },
    { icon: <FileText className="w-6 h-6" />, title: 'Typography System', desc: 'Font selection and typography hierarchy for consistent brand communication across all materials.' },
    { icon: <Layers className="w-6 h-6" />, title: 'Brand Guidelines', desc: 'Complete brand style guide with usage rules, do\'s and don\'ts, and application examples.' },
    { icon: <Layout className="w-6 h-6" />, title: 'Business Card & Stationery', desc: 'Business cards, letterheads, email signatures, and branded stationery design.' },
    { icon: <Eye className="w-6 h-6" />, title: 'Social Media Branding', desc: 'Profile pictures, cover photos, highlight covers, and branded templates for social media.' },
  ],
  process: [
    { title: 'Brand Discovery', desc: 'We understand your business, values, target audience, and competitors to define your brand direction.' },
    { title: 'Concept Development', desc: 'We create 3 unique logo concepts with different visual directions for your review.' },
    { title: 'Refinement', desc: 'We refine your chosen concept based on feedback until you\'re completely satisfied.' },
    { title: 'Brand Package Delivery', desc: 'We deliver all files in multiple formats (PNG, SVG, PDF) along with brand guidelines.' },
  ],
  whyDesc: 'A strong brand builds trust, commands premium pricing, and makes your business memorable. We create brands that stand out.',
  benefits: [
    '3 unique logo concepts to choose from',
    'Complete brand identity — not just a logo',
    'All file formats — PNG, SVG, PDF, AI',
    'Brand guidelines document for consistent usage',
    'Social media kit included',
    'Unlimited revisions until you\'re satisfied',
    'Fast delivery in 5-7 business days',
    'Affordable pricing starting from ₹15,000',
  ],
  faqs: [
    { q: 'How much does logo design cost?', a: 'Logo design starts from ₹8,000. A complete brand identity package with guidelines starts from ₹15,000.' },
    { q: 'How many logo concepts will I get?', a: 'We provide 3 unique logo concepts. You choose one and we refine it based on your feedback.' },
    { q: 'What file formats will I receive?', a: 'You receive all formats — PNG (transparent), SVG (vector), PDF, and source files for future use.' },
    { q: 'Can I use the logo for print and digital?', a: 'Yes, all logos are delivered in print-ready and digital formats suitable for all applications.' },
  ],
  ctaDesc: 'Build a brand that your customers trust and remember. Get a professional brand identity for your business.',
}

export default function BrandingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageLayout service={service} />
    </>
  )
}
