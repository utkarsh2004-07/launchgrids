import ServicePageLayout from '@/components/ServicePageLayout'
import { TrendingUp, Layout, Target, Users, Zap, BarChart3 } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Lead Generation Agency in India - Get More Leads | LaunchGrids',
  description: 'Complete lead generation services for businesses in India. Landing pages, Google Ads, Meta Ads, lead capture forms, and automated follow-up systems to generate consistent qualified leads. Starting from Rs.15,000.',
  keywords: ['lead generation agency India', 'lead generation for small business India', 'B2B lead generation India', 'online lead generation India', 'lead generation system India', 'lead generation service India', 'qualified leads India', 'lead generation for real estate India'],
  alternates: { canonical: 'https://launchgrids.in/services/lead-generation' },
  openGraph: {
    title: 'Lead Generation Agency in India - Get More Leads | LaunchGrids',
    description: 'Complete lead generation system with landing pages, ads, and automated follow-ups. Starting from Rs.15,000.',
    url: 'https://launchgrids.in/services/lead-generation',
    siteName: 'LaunchGrids',
    locale: 'en_IN',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Lead Generation Agency India - LaunchGrids' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lead Generation Agency in India | LaunchGrids',
    description: 'Complete lead generation system with landing pages, ads, and automated follow-ups. Starting from Rs.15,000.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lead Generation',
  provider: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  description: 'Complete lead generation services with landing pages, ads, and automation for businesses in India',
  areaServed: 'IN',
  offers: { '@type': 'Offer', priceCurrency: 'INR', price: '15000' },
  url: 'https://launchgrids.in/services/lead-generation',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/services' },
    { '@type': 'ListItem', position: 3, name: 'Lead Generation', item: 'https://launchgrids.in/services/lead-generation' },
  ],
}

const service = {
  name: 'Lead Generation',
  category: 'Marketing',
  orbColor: 'bg-orange-100 dark:bg-orange-900/20',
  iconBg: 'bg-orange-50 dark:bg-orange-950/20',
  iconColor: 'text-orange-600 dark:text-orange-400',
  heroTitle: 'Generate Consistent Leads with',
  heroHighlight: 'Lead Generation System',
  heroDesc: 'We build complete lead generation systems - landing pages, ads, forms, and automated follow-ups - that bring you a steady stream of qualified leads every month.',
  heroPoints: ['Landing Pages', 'Paid Ads', 'Lead Capture Forms', 'Follow-up Automation'],
  stats: [
    { value: '1200+', label: 'Leads Generated' },
    { value: '3x', label: 'More Inquiries' },
    { value: '30%', label: 'Lower Cost Per Lead' },
    { value: '24/7', label: 'Lead Capture' },
  ],
  offerDesc: 'End-to-end lead generation system from traffic to qualified leads in your inbox.',
  offerings: [
    { icon: <Layout className="w-6 h-6" />, title: 'Landing Page Design', desc: 'High-converting landing pages designed specifically to capture leads.' },
    { icon: <Target className="w-6 h-6" />, title: 'Paid Ad Campaigns', desc: 'Google Ads and Meta Ads campaigns targeting your ideal customers.' },
    { icon: <Users className="w-6 h-6" />, title: 'Lead Capture Forms', desc: 'Optimized forms with the right fields to maximize lead submissions.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Automated Follow-up', desc: 'Instant WhatsApp and email follow-up when a lead submits the form.' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Lead Nurturing', desc: 'Email and WhatsApp sequences to nurture leads until they are ready to buy.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Lead Tracking & Reports', desc: 'Track every lead source, conversion rate, and cost per lead.' },
  ],
  process: [
    { title: 'Strategy', desc: 'We define your target audience, offer, and lead generation approach.' },
    { title: 'Build', desc: 'We create landing pages, set up forms, and launch ad campaigns.' },
    { title: 'Capture', desc: 'Leads start flowing in through ads and organic channels.' },
    { title: 'Optimize', desc: 'We optimize campaigns to reduce cost per lead and increase quality.' },
  ],
  whyDesc: 'A systematic lead generation process gives you predictable, consistent business growth every month.',
  benefits: ['Consistent monthly lead flow', 'Qualified leads from targeted campaigns', 'Automated follow-up so no lead is missed', 'Complete tracking of lead sources', 'Landing pages optimized for conversions', 'Works for any business type', 'Transparent reporting', 'Starting from Rs.15,000'],
  faqs: [
    { q: 'How many leads can I expect?', a: 'Lead volume depends on your budget, industry, and competition. We focus on quality leads that convert.' },
    { q: 'How much does lead generation cost?', a: 'Setup starts from Rs.15,000. Monthly management starts from Rs.8,000 plus ad budget.' },
    { q: 'How quickly will leads start coming?', a: 'Paid ad campaigns can generate leads within 48-72 hours of launch.' },
    { q: 'What industries do you generate leads for?', a: 'We generate leads for all industries - real estate, education, healthcare, services, ecommerce, and more.' },
  ],
  ctaDesc: 'Build a lead generation system that brings you consistent, qualified leads every month.',
}

export default function LeadGenerationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageLayout service={service} />
    </>
  )
}
