import ServicePageLayout from '@/components/ServicePageLayout'
import { Globe, Smartphone, Zap, Shield, Code2, Layout, Settings, Search } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Website Development Agency in India - Professional Business Websites | LaunchGrids',
  description: 'LaunchGrids builds professional, fast, responsive business websites in India. Custom website development for small businesses, startups, clinics, salons, restaurants & ecommerce. Starting from Rs.25,000.',
  keywords: ['website development agency India', 'professional website development India', 'business website design India', 'affordable website development India', 'custom website development India', 'responsive website design India', 'website for small business India', 'Next.js website development India'],
  alternates: { canonical: 'https://launchgrids.in/services/website-development' },
  openGraph: {
    title: 'Website Development Agency in India | LaunchGrids',
    description: 'Professional, fast, responsive business websites starting from Rs.25,000.',
    url: 'https://launchgrids.in/services/website-development',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Agency in India | LaunchGrids',
    description: 'Professional, fast, responsive business websites starting from Rs.25,000.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Development',
  provider: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  description: 'Professional responsive website development for businesses in India',
  areaServed: 'IN',
  offers: { '@type': 'Offer', priceCurrency: 'INR', price: '25000' },
  url: 'https://launchgrids.in/services/website-development',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/services' },
    { '@type': 'ListItem', position: 3, name: 'Website Development', item: 'https://launchgrids.in/services/website-development' },
  ],
}

const service = {
  name: 'Website Development',
  category: 'Web & Tech',
  orbColor: 'bg-blue-100 dark:bg-blue-900/20',
  iconBg: 'bg-blue-50 dark:bg-blue-950/20',
  iconColor: 'text-blue-600 dark:text-blue-400',
  heroTitle: 'Professional Website Development',
  heroHighlight: 'for Your Business',
  heroDesc: 'We build fast, responsive, and conversion-focused websites for businesses across India. From local shops to startups - every business deserves a professional online presence.',
  heroPoints: ['Mobile Responsive', 'Fast Loading', 'SEO Ready', 'Secure & SSL'],
  stats: [
    { value: '100+', label: 'Websites Built' },
    { value: '3x', label: 'Faster Load Time' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '7-14', label: 'Days Delivery' },
  ],
  offerDesc: 'Complete website development package - from design to deployment, everything handled by our expert team.',
  offerings: [
    { icon: <Globe className="w-6 h-6" />, title: 'Business Website', desc: 'Professional multi-page websites for service businesses, consultants, agencies, and local shops.' },
    { icon: <Smartphone className="w-6 h-6" />, title: 'Mobile Responsive Design', desc: 'Fully responsive websites that look perfect on mobile, tablet, and desktop devices.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Fast Loading Speed', desc: 'Optimized for Core Web Vitals - fast loading pages that rank better on Google.' },
    { icon: <Shield className="w-6 h-6" />, title: 'SSL & Security Setup', desc: 'Free SSL certificate, security headers, and protection against common vulnerabilities.' },
    { icon: <Code2 className="w-6 h-6" />, title: 'Custom Development', desc: 'Custom features, booking systems, contact forms, galleries, and business-specific functionality.' },
    { icon: <Search className="w-6 h-6" />, title: 'SEO Ready Structure', desc: 'Proper heading structure, meta tags, sitemap, and technical SEO built into every website.' },
  ],
  process: [
    { title: 'Discovery Call', desc: 'We understand your business, goals, target audience, and website requirements.' },
    { title: 'Design & Prototype', desc: 'We create wireframes and design mockups for your approval before development.' },
    { title: 'Development', desc: 'We build your website with clean code, fast performance, and mobile responsiveness.' },
    { title: 'Launch & Handover', desc: 'We deploy your website, set up analytics, and provide complete handover documentation.' },
  ],
  whyDesc: 'We don\'t just build websites - we build complete online business systems that generate leads and grow your revenue.',
  benefits: [
    'Complete website from design to deployment in 7-14 days',
    'Mobile-first responsive design for all devices',
    'SEO-optimized structure for better Google rankings',
    'Fast loading speed - under 3 seconds load time',
    'Free SSL certificate and security setup',
    'Google Analytics and Search Console integration',
    'Post-launch support and maintenance available',
    'Affordable pricing starting from Rs.25,000',
  ],
  faqs: [
    { q: 'How much does a website cost?', a: 'A basic business website starts from Rs.25,000. The final price depends on the number of pages, features, and design complexity.' },
    { q: 'How long does it take to build a website?', a: 'A standard business website takes 7-14 days. Complex websites with custom features may take 3-4 weeks.' },
    { q: 'Will my website be mobile friendly?', a: 'Yes, all our websites are fully responsive and work perfectly on mobile, tablet, and desktop devices.' },
    { q: 'Do you provide website maintenance?', a: 'Yes, we offer monthly maintenance plans starting from Rs.3,000/month including updates, backups, and support.' },
  ],
  ctaDesc: 'Get a professional website for your business that looks great, loads fast, and ranks on Google.',
}

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageLayout service={service} />
    </>
  )
}
