import ServicePageLayout from '@/components/ServicePageLayout'
import { Search, Target, BarChart3, TrendingUp, DollarSign, Eye, Settings, Zap } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Google Ads Agency in India — PPC Management Services | LaunchGrids',
  description: 'LaunchGrids manages Google Ads campaigns for businesses in India. Expert PPC management with keyword research, ad copywriting, bid optimization, and conversion tracking. Get more leads with Google Ads.',
  keywords: ['Google Ads agency India', 'Google Ads management India', 'PPC agency India', 'Google Ads expert India', 'paid search advertising India', 'Google Search Ads India', 'Google Display Ads India', 'PPC management India'],
  alternates: { canonical: 'https://launchgrids.in/services/google-ads' },
  openGraph: {
    title: 'Google Ads Agency in India | LaunchGrids',
    description: 'Expert Google Ads management to get more leads and sales for your business in India.',
    url: 'https://launchgrids.in/services/google-ads',
    siteName: 'LaunchGrids',
    locale: 'en_IN',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Google Ads Agency India - LaunchGrids' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads Agency in India | LaunchGrids',
    description: 'Expert Google Ads PPC management to get more leads and sales for your business.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Google Ads Management',
  provider: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  description: 'Professional Google Ads PPC campaign management for businesses in India',
  areaServed: 'IN',
  url: 'https://launchgrids.in/services/google-ads',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/services' },
    { '@type': 'ListItem', position: 3, name: 'Google Ads', item: 'https://launchgrids.in/services/google-ads' },
  ],
}

const service = {
  name: 'Google Ads',
  category: 'Paid Advertising',
  orbColor: 'bg-orange-100 dark:bg-orange-900/20',
  iconBg: 'bg-orange-50 dark:bg-orange-950/20',
  iconColor: 'text-orange-600 dark:text-orange-400',
  heroTitle: 'Get More Leads with',
  heroHighlight: 'Google Ads Management',
  heroDesc: 'Reach customers who are actively searching for your products and services on Google. Our expert PPC management delivers maximum ROI from your Google Ads budget.',
  heroPoints: ['Search Ads', 'Display Ads', 'Shopping Ads', 'Conversion Tracking'],
  stats: [
    { value: '4x', label: 'Average ROI' },
    { value: '2x', label: 'More Leads' },
    { value: '30%', label: 'Lower Cost Per Lead' },
    { value: '24hr', label: 'Campaign Launch' },
  ],
  offerDesc: 'Complete Google Ads management — from campaign setup to ongoing optimization for maximum return on ad spend.',
  offerings: [
    { icon: <Search className="w-6 h-6" />, title: 'Google Search Ads', desc: 'Text ads that appear when customers search for your services on Google — highest intent traffic.' },
    { icon: <Eye className="w-6 h-6" />, title: 'Google Display Ads', desc: 'Visual banner ads across millions of websites to build brand awareness and retarget visitors.' },
    { icon: <Target className="w-6 h-6" />, title: 'Keyword Research & Strategy', desc: 'In-depth keyword research to target the right search terms with optimal bid strategy.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Conversion Tracking Setup', desc: 'Track calls, form submissions, and purchases to measure true campaign ROI.' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Bid Optimization', desc: 'Smart bidding strategies and continuous bid adjustments to maximize conversions within budget.' },
    { icon: <Settings className="w-6 h-6" />, title: 'Monthly Reporting', desc: 'Detailed monthly reports with impressions, clicks, conversions, cost per lead, and ROI.' },
  ],
  process: [
    { title: 'Account Audit', desc: 'We audit your existing Google Ads account or set up a new one with proper structure.' },
    { title: 'Keyword & Strategy', desc: 'We research keywords, define targeting, and create a campaign strategy for your goals.' },
    { title: 'Campaign Launch', desc: 'We write compelling ad copy, set up campaigns, and launch with optimized bidding.' },
    { title: 'Optimize & Report', desc: 'We monitor daily, optimize underperforming ads, and send monthly performance reports.' },
  ],
  whyDesc: 'Google Ads puts your business in front of customers who are actively searching for what you offer — highest quality leads.',
  benefits: [
    'Appear on Google\'s first page immediately',
    'Target customers actively searching for your services',
    'Full control over budget — start from ₹5,000/month',
    'Detailed conversion tracking for every rupee spent',
    'Continuous optimization to improve ROI over time',
    'Negative keyword management to avoid wasted spend',
    'Ad copy A/B testing for better click-through rates',
    'Transparent reporting with no hidden charges',
  ],
  faqs: [
    { q: 'How much should I spend on Google Ads?', a: 'We recommend a minimum ad budget of ₹10,000/month. Our management fee starts from ₹5,000/month.' },
    { q: 'How quickly will I see results?', a: 'Google Ads can generate leads within 24-48 hours of campaign launch. Optimization improves results over 2-4 weeks.' },
    { q: 'What is the difference between Google Ads and SEO?', a: 'Google Ads gives immediate results but requires ongoing budget. SEO takes 3-6 months but provides free organic traffic long-term. Both work best together.' },
    { q: 'Do you manage the ad budget directly?', a: 'No, you maintain full control of your Google Ads account and budget. We manage the campaigns on your behalf.' },
  ],
  ctaDesc: 'Start getting leads from Google today with expert PPC management that maximizes your ad budget.',
}

export default function GoogleAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageLayout service={service} />
    </>
  )
}
