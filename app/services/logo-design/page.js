import ServicePageLayout from '@/components/ServicePageLayout'
import { PenTool, Layers, Eye, FileText, Star, Palette } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Logo Design Agency in India - Professional Logo Design | LaunchGrids',
  description: 'Professional logo design services in India. Get a unique, memorable logo for your business with 3 concepts, unlimited revisions, and all file formats - PNG, SVG, PDF, AI. Starting from Rs.8,000.',
  keywords: ['logo design India', 'logo design agency India', 'professional logo design India', 'business logo design India', 'affordable logo design India', 'custom logo design India', 'startup logo design India', 'brand logo India'],
  alternates: { canonical: 'https://launchgrids.in/services/logo-design' },
  openGraph: {
    title: 'Logo Design Agency in India - Professional Logo Design | LaunchGrids',
    description: 'Unique, memorable logo design with 3 concepts, unlimited revisions, and all file formats. Starting from Rs.8,000.',
    url: 'https://launchgrids.in/services/logo-design',
    siteName: 'LaunchGrids',
    locale: 'en_IN',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Logo Design Agency India - LaunchGrids' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logo Design Agency in India | LaunchGrids',
    description: 'Unique logo design with 3 concepts and unlimited revisions. Starting from Rs.8,000.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Logo Design',
  provider: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  description: 'Professional logo design services for businesses in India',
  areaServed: 'IN',
  offers: { '@type': 'Offer', priceCurrency: 'INR', price: '8000' },
  url: 'https://launchgrids.in/services/logo-design',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/services' },
    { '@type': 'ListItem', position: 3, name: 'Logo Design', item: 'https://launchgrids.in/services/logo-design' },
  ],
}

const service = {
  name: 'Logo Design',
  category: 'Branding & Design',
  orbColor: 'bg-violet-100 dark:bg-violet-900/20',
  iconBg: 'bg-violet-50 dark:bg-violet-950/20',
  iconColor: 'text-violet-600 dark:text-violet-400',
  heroTitle: 'Professional Logo Design',
  heroHighlight: 'for Your Business',
  heroDesc: 'Your logo is the face of your brand. We create unique, memorable, and professional logos that make your business stand out and build instant trust.',
  heroPoints: ['3 Unique Concepts', 'All File Formats', 'Unlimited Revisions', '5-7 Days Delivery'],
  stats: [
    { value: '300+', label: 'Logos Designed' },
    { value: '3', label: 'Concepts Provided' },
    { value: '5-7', label: 'Days Delivery' },
    { value: '100%', label: 'Original Design' },
  ],
  offerDesc: 'Complete logo design package with multiple concepts, revisions, and all formats.',
  offerings: [
    { icon: <PenTool className="w-6 h-6" />, title: '3 Logo Concepts', desc: 'Three unique logo directions to choose from, each with different visual style.' },
    { icon: <Layers className="w-6 h-6" />, title: 'Multiple Variations', desc: 'Primary, horizontal, stacked, icon-only, and monochrome versions of your logo.' },
    { icon: <FileText className="w-6 h-6" />, title: 'All File Formats', desc: 'PNG, SVG, PDF, AI - print-ready and digital formats for all use cases.' },
    { icon: <Palette className="w-6 h-6" />, title: 'Color Variations', desc: 'Full color, black, white, and transparent background versions.' },
    { icon: <Star className="w-6 h-6" />, title: 'Brand Color Palette', desc: 'Primary and secondary brand colors with hex codes for consistent usage.' },
    { icon: <Eye className="w-6 h-6" />, title: 'Usage Guidelines', desc: 'Basic brand guidelines on how to use your logo correctly across platforms.' },
  ],
  process: [
    { title: 'Brief', desc: 'We understand your business, industry, target audience, and design preferences.' },
    { title: '3 Concepts', desc: 'We create 3 unique logo concepts with different visual directions.' },
    { title: 'Refinement', desc: 'You choose one concept and we refine it based on your feedback.' },
    { title: 'Final Delivery', desc: 'We deliver all files in every format along with color codes.' },
  ],
  whyDesc: 'A great logo builds instant brand recognition and trust. We create logos that are simple, memorable, and versatile.',
  benefits: ['3 unique concepts to choose from', '100% original custom design', 'All formats - PNG, SVG, PDF, AI', 'Transparent background versions', 'Print and digital ready', 'Unlimited revisions', 'Fast 5-7 day delivery', 'Starting from Rs.8,000'],
  faqs: [
    { q: 'How much does logo design cost?', a: 'Logo design starts from Rs.8,000. Complete brand identity with guidelines starts from Rs.15,000.' },
    { q: 'How many revisions do I get?', a: 'We offer unlimited revisions until you are completely satisfied with the final logo.' },
    { q: 'What if I don\'t like any of the 3 concepts?', a: 'We will create additional concepts based on your feedback at no extra charge.' },
    { q: 'Can I use the logo for print materials?', a: 'Yes, all logos are delivered in print-ready formats suitable for business cards, banners, and all print materials.' },
  ],
  ctaDesc: 'Get a professional logo that makes your business memorable and builds instant trust.',
}

export default function LogoDesignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageLayout service={service} />
    </>
  )
}
