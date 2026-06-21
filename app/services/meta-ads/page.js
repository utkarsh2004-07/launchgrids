import ServicePageLayout from '@/components/ServicePageLayout'
import { Facebook, Target, BarChart3, Eye, TrendingUp, Users } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Meta Ads Agency in India - Facebook & Instagram Advertising | LaunchGrids',
  description: 'Expert Meta Ads management for businesses in India. Facebook and Instagram advertising with precise audience targeting, creative design, retargeting, and campaign optimization. Starting from Rs.5,000/month.',
  keywords: ['Meta Ads agency India', 'Facebook Ads India', 'Instagram Ads India', 'Facebook advertising India', 'Meta advertising India', 'social media ads India', 'Facebook Ads management India', 'Instagram advertising agency India', 'Meta Ads expert India', 'Facebook lead ads India'],
  alternates: { canonical: 'https://launchgrids.in/services/meta-ads' },
  openGraph: {
    title: 'Meta Ads Agency in India - Facebook & Instagram Advertising | LaunchGrids',
    description: 'Expert Facebook and Instagram advertising with audience targeting and creative design. Starting from Rs.5,000/month.',
    url: 'https://launchgrids.in/services/meta-ads',
    siteName: 'LaunchGrids',
    locale: 'en_IN',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Meta Ads Agency India - LaunchGrids' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta Ads Agency in India | LaunchGrids',
    description: 'Expert Facebook and Instagram advertising. Starting from Rs.5,000/month.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Meta Ads Management',
  provider: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  description: 'Professional Facebook and Instagram Meta Ads management for businesses in India',
  areaServed: 'IN',
  url: 'https://launchgrids.in/services/meta-ads',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/services' },
    { '@type': 'ListItem', position: 3, name: 'Meta Ads', item: 'https://launchgrids.in/services/meta-ads' },
  ],
}

const service = {
  name: 'Meta Ads',
  category: 'Paid Advertising',
  orbColor: 'bg-orange-100 dark:bg-orange-900/20',
  iconBg: 'bg-orange-50 dark:bg-orange-950/20',
  iconColor: 'text-orange-600 dark:text-orange-400',
  heroTitle: 'Reach Your Customers with',
  heroHighlight: 'Meta Ads Management',
  heroDesc: 'Facebook and Instagram have 400M+ users in India. We run targeted Meta Ads campaigns that reach your exact audience and generate leads and sales for your business.',
  heroPoints: ['Facebook Ads', 'Instagram Ads', 'Audience Targeting', 'Creative Design'],
  stats: [
    { value: '400M+', label: 'Meta Users India' },
    { value: '3x', label: 'Average ROAS' },
    { value: '48hr', label: 'Campaign Launch' },
    { value: 'Rs.5', label: 'Min Cost Per Click' },
  ],
  offerDesc: 'Complete Meta Ads management from strategy to creative to optimization.',
  offerings: [
    { icon: <Facebook className="w-6 h-6" />, title: 'Facebook & Instagram Ads', desc: 'Targeted ads across Facebook and Instagram to reach your ideal customers.' },
    { icon: <Target className="w-6 h-6" />, title: 'Audience Targeting', desc: 'Precise targeting by age, location, interests, behavior, and lookalike audiences.' },
    { icon: <Eye className="w-6 h-6" />, title: 'Ad Creative Design', desc: 'Eye-catching ad images, videos, and carousel creatives that stop the scroll.' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Retargeting Campaigns', desc: 'Retarget website visitors and engaged users to bring them back and convert.' },
    { icon: <Users className="w-6 h-6" />, title: 'Lead Generation Ads', desc: 'Facebook Lead Ads to capture leads directly without leaving the platform.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Performance Reporting', desc: 'Weekly and monthly reports with reach, clicks, leads, and ROAS metrics.' },
  ],
  process: [
    { title: 'Strategy', desc: 'We define campaign objectives, target audience, and budget allocation.' },
    { title: 'Creative', desc: 'We design ad creatives and write compelling ad copy.' },
    { title: 'Launch', desc: 'We set up campaigns with proper targeting and launch.' },
    { title: 'Optimize', desc: 'We monitor daily and optimize for better results and lower costs.' },
  ],
  whyDesc: 'Meta Ads allow you to reach highly specific audiences at scale - perfect for brand awareness and lead generation.',
  benefits: ['Reach 400M+ users in India', 'Precise audience targeting', 'Ad creatives included', 'Retargeting for higher conversions', 'Lead ads for easy lead capture', 'Daily monitoring and optimization', 'Transparent monthly reporting', 'Management from Rs.5,000/month'],
  faqs: [
    { q: 'How much should I spend on Meta Ads?', a: 'We recommend a minimum ad budget of Rs.5,000-10,000/month. Our management fee starts from Rs.5,000/month.' },
    { q: 'Do you create the ad creatives?', a: 'Yes, ad creative design is included in our Meta Ads management service.' },
    { q: 'How quickly will I see results?', a: 'Meta Ads typically show results within 3-7 days as the algorithm learns your audience.' },
    { q: 'Can you run ads for local businesses?', a: 'Yes, we run location-targeted ads for local businesses to reach customers in specific cities or areas.' },
  ],
  ctaDesc: 'Start reaching your target customers on Facebook and Instagram with expert Meta Ads management.',
}

export default function MetaAdsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageLayout service={service} />
    </>
  )
}
