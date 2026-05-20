import ServicePageLayout from '@/components/ServicePageLayout'
import { Instagram, FileText, BarChart3, Calendar, Eye, TrendingUp } from 'lucide-react'

export const metadata = {
  metadataBase: new URL('https://launchgrids.in'),
  title: 'Social Media Management Agency in India — Instagram & Facebook | LaunchGrids',
  description: 'Professional social media management for businesses in India. Monthly content planning, post design, scheduling, engagement, and account growth for Instagram and Facebook. Starting from ₹8,000/month.',
  keywords: ['social media management India', 'social media agency India', 'Instagram management India', 'Facebook management India', 'social media marketing India', 'Instagram marketing agency India', 'social media content India', 'social media manager India'],
  alternates: { canonical: 'https://launchgrids.in/services/social-media-management' },
  openGraph: {
    title: 'Social Media Management Agency in India | LaunchGrids',
    description: 'Complete Instagram and Facebook management — content, posting, and growth. Starting from ₹8,000/month.',
    url: 'https://launchgrids.in/services/social-media-management',
    siteName: 'LaunchGrids',
    locale: 'en_IN',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Social Media Management India - LaunchGrids' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Management Agency in India | LaunchGrids',
    description: 'Complete Instagram and Facebook management — content, posting, and growth. Starting from ₹8,000/month.',
    images: ['/logo.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Social Media Management',
  provider: { '@type': 'Organization', name: 'LaunchGrids', url: 'https://launchgrids.in' },
  description: 'Professional social media management for Instagram and Facebook for businesses in India',
  areaServed: 'IN',
  url: 'https://launchgrids.in/services/social-media-management',
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://launchgrids.in' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://launchgrids.in/services' },
    { '@type': 'ListItem', position: 3, name: 'Social Media Management', item: 'https://launchgrids.in/services/social-media-management' },
  ],
}

const service = {
  name: 'Social Media Management',
  category: 'Content',
  orbColor: 'bg-pink-100 dark:bg-pink-900/20',
  iconBg: 'bg-pink-50 dark:bg-pink-950/20',
  iconColor: 'text-pink-600 dark:text-pink-400',
  heroTitle: 'Grow Your Brand with',
  heroHighlight: 'Social Media Management',
  heroDesc: 'Consistent social media presence builds brand awareness and customer trust. We handle your complete social media — content creation, posting, engagement, and growth strategy.',
  heroPoints: ['Content Creation', 'Daily Posting', 'Engagement', 'Growth Strategy'],
  stats: [
    { value: '30', label: 'Posts Per Month' },
    { value: '3x', label: 'More Followers' },
    { value: '100%', label: 'Consistent Posting' },
    { value: 'Daily', label: 'Engagement' },
  ],
  offerDesc: 'Complete monthly social media management — content, posting, and growth.',
  offerings: [
    { icon: <Calendar className="w-6 h-6" />, title: 'Content Calendar', desc: 'Monthly content calendar with planned posts, themes, and campaign ideas.' },
    { icon: <Eye className="w-6 h-6" />, title: 'Post Design', desc: '15-30 branded post designs per month for consistent visual presence.' },
    { icon: <FileText className="w-6 h-6" />, title: 'Caption Writing', desc: 'Engaging captions with relevant hashtags for maximum reach.' },
    { icon: <Instagram className="w-6 h-6" />, title: 'Scheduling & Posting', desc: 'Optimal time posting on Instagram, Facebook, and other platforms.' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Engagement Management', desc: 'Responding to comments and DMs to build community and trust.' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Monthly Reports', desc: 'Follower growth, reach, engagement rate, and performance insights.' },
  ],
  process: [
    { title: 'Onboarding', desc: 'We understand your brand, audience, and social media goals.' },
    { title: 'Content Planning', desc: 'We create a monthly content calendar for your approval.' },
    { title: 'Create & Post', desc: 'We design posts, write captions, and post at optimal times.' },
    { title: 'Report', desc: 'Monthly performance report with insights and next month strategy.' },
  ],
  whyDesc: 'Consistent social media presence keeps your brand top-of-mind and builds a loyal customer community.',
  benefits: ['Consistent daily/weekly posting', 'Professional branded content', 'Hashtag strategy for reach', 'Engagement and community building', 'Monthly performance reports', 'Saves you 20+ hours per month', 'Works for Instagram, Facebook, LinkedIn', 'Starting from ₹8,000/month'],
  faqs: [
    { q: 'How much does social media management cost?', a: 'Monthly social media management starts from ₹8,000/month for 15 posts. Full management with reels starts from ₹15,000/month.' },
    { q: 'Which platforms do you manage?', a: 'We primarily manage Instagram and Facebook. LinkedIn and Twitter management is available as add-ons.' },
    { q: 'Do you create the content or do I provide it?', a: 'We create all content — post designs, captions, and hashtags. You just need to approve before posting.' },
    { q: 'Can I approve posts before they go live?', a: 'Yes, we share the content calendar and all posts for your approval before scheduling.' },
  ],
  ctaDesc: 'Let us handle your social media so you can focus on running your business.',
}

export default function SocialMediaManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ServicePageLayout service={service} />
    </>
  )
}
