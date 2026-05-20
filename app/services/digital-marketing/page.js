import ServicePageLayout from '@/components/ServicePageLayout'
import { Megaphone, TrendingUp, Users, BarChart3, Instagram, Facebook, Target, Mail } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Digital Marketing Agency in India — Social Media, Ads & Growth | LaunchGrids',
  description: 'LaunchGrids is a top digital marketing agency in India. We offer social media marketing, Google Ads, Meta Ads, Instagram marketing, lead generation, and complete online growth solutions for businesses.',
  keywords: ['digital marketing agency India', 'best digital marketing agency India', 'social media marketing India', 'Instagram marketing agency India', 'Facebook marketing India', 'online marketing agency India', 'performance marketing India', 'lead generation agency India'],
  alternates: { canonical: 'https://launchgrids.in/services/digital-marketing' },
  openGraph: {
    title: 'Digital Marketing Agency in India | LaunchGrids',
    description: 'Social media, Google Ads, Meta Ads & complete digital marketing for businesses in India.',
    url: 'https://launchgrids.in/services/digital-marketing',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in India | LaunchGrids',
    description: 'Social media, Google Ads, Meta Ads & complete digital marketing for businesses in India.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Digital Marketing Services',
  provider: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  description: 'Complete digital marketing services including social media, Google Ads, Meta Ads, and lead generation in India',
  areaServed: 'IN',
  url: 'https://launchgrids.in/services/digital-marketing',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/services' },
    { '@type': 'ListItem', position: 3, name: 'Digital Marketing', item: 'https://launchgrids.in/services/digital-marketing' },
  ],
}

const service = {
  name: 'Digital Marketing',
  category: 'Digital Marketing',
  orbColor: 'bg-orange-100 dark:bg-orange-900/20',
  iconBg: 'bg-orange-50 dark:bg-orange-950/20',
  iconColor: 'text-orange-600 dark:text-orange-400',
  heroTitle: 'Grow Your Business with',
  heroHighlight: 'Digital Marketing',
  heroDesc: 'We help businesses across India grow online through data-driven digital marketing — social media, Google Ads, Meta Ads, content marketing, and lead generation systems that deliver real results.',
  heroPoints: ['Social Media Marketing', 'Google & Meta Ads', 'Lead Generation', 'Brand Awareness'],
  stats: [
    { value: '3x', label: 'Average ROI' },
    { value: '320%', label: 'Traffic Growth' },
    { value: '1200+', label: 'Leads Generated' },
    { value: '30+', label: 'Brands Grown' },
  ],
  offerDesc: 'End-to-end digital marketing services to grow your brand, generate leads, and increase revenue.',
  offerings: [
    { icon: <Instagram className="w-6 h-6" />, title: 'Social Media Marketing', desc: 'Instagram, Facebook, and LinkedIn marketing with content strategy, posting, and engagement management.' },
    { icon: <Facebook className="w-6 h-6" />, title: 'Meta Ads (Facebook & Instagram)', desc: 'Targeted Facebook and Instagram ad campaigns to reach your ideal customers and generate leads.' },
    { icon: <Target className="w-6 h-6" />, title: 'Google Ads', desc: 'Search, Display, and Shopping campaigns on Google to capture high-intent buyers actively searching for your services.' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Lead Generation', desc: 'Complete lead generation systems with landing pages, forms, ads, and automated follow-up sequences.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Analytics & Reporting', desc: 'Monthly performance reports with campaign metrics, ROI tracking, and optimization recommendations.' },
    { icon: <Megaphone className="w-6 h-6" />, title: 'Brand Awareness Campaigns', desc: 'Strategic campaigns to build brand recognition and reach new audiences across digital platforms.' },
  ],
  process: [
    { title: 'Business Analysis', desc: 'We analyze your business, target audience, competitors, and current digital presence.' },
    { title: 'Strategy Creation', desc: 'We create a custom digital marketing strategy with clear goals, channels, and budget allocation.' },
    { title: 'Campaign Launch', desc: 'We set up and launch campaigns across chosen platforms with optimized creatives and targeting.' },
    { title: 'Optimize & Scale', desc: 'We monitor performance daily, optimize campaigns, and scale what\'s working for maximum ROI.' },
  ],
  whyDesc: 'Digital marketing done right generates consistent leads and revenue. We focus on ROI, not just vanity metrics.',
  benefits: [
    'Data-driven campaigns focused on leads and revenue',
    'Expert management of Google Ads and Meta Ads',
    'Social media content creation and management',
    'Detailed monthly reports with clear ROI tracking',
    'Retargeting campaigns to convert website visitors',
    'A/B testing for continuous campaign improvement',
    'Dedicated account manager for your campaigns',
    'Transparent pricing with no hidden charges',
  ],
  faqs: [
    { q: 'How much should I spend on digital marketing?', a: 'We recommend starting with ₹10,000-₹20,000/month for ads. Our management fee starts from ₹8,000/month.' },
    { q: 'How quickly will I see results from digital marketing?', a: 'Paid ads (Google/Meta) show results within 1-2 weeks. Social media and SEO take 2-3 months for significant results.' },
    { q: 'Which platform is best for my business?', a: 'It depends on your business type. B2C businesses do well on Instagram and Facebook. B2B businesses benefit more from Google Ads and LinkedIn.' },
    { q: 'Do you create ad creatives?', a: 'Yes, we create ad creatives, copy, and landing pages as part of our digital marketing packages.' },
  ],
  ctaDesc: 'Start generating consistent leads and growing your business with expert digital marketing.',
}

export default function DigitalMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageLayout service={service} />
    </>
  )
}
